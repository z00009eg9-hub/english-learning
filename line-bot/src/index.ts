/**
 * index.ts — LINE webhook（Cloudflare Worker）
 *
 * 流程：驗簽 → 解析 event → 查現有單字資料 → 回 Flex Message。
 * 這裡只做「路由」與「錯誤處理」，資料在 vocabulary.ts、畫面在 flexMessages.ts。
 */
import {
  Env,
  LineEvent,
  parsePostback,
  replyMessage,
  verifySignature,
} from './line';
import {
  buildChineseResultsMessage,
  buildMoreExamplesMessage,
  buildNotFoundMessage,
  buildQaExamplesMessage,
  buildRelatedWordsMessage,
  buildWordFlexMessage,
  studyUrl,
  textMessage,
} from './flexMessages';
import {
  findByChinese,
  findSimilarWords,
  findWord,
  getMoreExamples,
  getQaExamples,
  getRelatedWords,
  isChineseQuery,
  normalize,
  stats,
} from './vocabulary';

/* ---------- STEP 16：重複 webhook 防護 ----------
   免費方案不放永久儲存，改用 Worker isolate 內的短期記憶：
   同一個 webhookEventId 在 10 分鐘內只處理一次。
   限制（README 有寫）：isolate 被回收或換到別的節點時記憶會消失，
   極少數情況下 LINE 重送仍可能重複回覆一次。真正要保證只回一次，
   之後可以接 Cloudflare KV（免費方案也有），介面就是這兩個函式。 */
const SEEN = new Map<string, number>();
const SEEN_TTL_MS = 10 * 60 * 1000;
const SEEN_MAX = 2000;

function alreadyHandled(id: string | undefined): boolean {
  if (!id) return false;
  const now = Date.now();
  if (SEEN.size > SEEN_MAX) {
    for (const [k, t] of SEEN) if (now - t > SEEN_TTL_MS) SEEN.delete(k);
    if (SEEN.size > SEEN_MAX) SEEN.clear();
  }
  const seen = SEEN.get(id);
  if (seen !== undefined && now - seen < SEEN_TTL_MS) return true;
  SEEN.set(id, now);
  return false;
}

/* ---------- 訊息組裝 ---------- */

function messagesForWord(query: string, env: Env): unknown[] {
  const entry = findWord(query);
  if (entry) return [buildWordFlexMessage(entry, env)];
  return [buildNotFoundMessage(query.trim(), findSimilarWords(query, 3), env)];
}

function messagesForQuery(rawText: string, env: Env): unknown[] {
  const query = String(rawText ?? '').trim();
  if (!query) {
    return [textMessage('請輸入一個英文單字，例如：compensate')];
  }

  /* STEP 11：中文查詢（找得到就回，找不到就走一般的找不到流程） */
  if (isChineseQuery(query)) {
    const hits = findByChinese(query, 5);
    if (hits.length) return [buildChineseResultsMessage(query, hits)];
    return [buildNotFoundMessage(query, [], env)];
  }

  return messagesForWord(query, env);
}

function messagesForPostback(data: string, env: Env): unknown[] {
  const { action, word } = parsePostback(data);
  const entry = findWord(word);

  if (!entry) {
    return [buildNotFoundMessage(word || '', findSimilarWords(word || '', 3), env)];
  }

  switch (action) {
    case 'more':
      return [buildMoreExamplesMessage(entry, getMoreExamples(entry.word, 3))];
    case 'qa':
      return [buildQaExamplesMessage(entry, getQaExamples(entry.word, 3), studyUrl(entry, env))];
    case 'rel':
      return [buildRelatedWordsMessage(entry, getRelatedWords(entry.word, 4))];
    case 'word':
    default:
      return [buildWordFlexMessage(entry, env)];
  }
}

/** 決定一個 event 要回什麼；回 null 代表安全忽略（貼圖、圖片、影片…） */
export function messagesForEvent(event: LineEvent, env: Env): unknown[] | null {
  if (!event || !event.replyToken) return null;

  if (event.type === 'message') {
    /* STEP 15：只處理文字訊息，其他型別安全忽略、不報錯 */
    if (event.message?.type !== 'text') return null;
    return messagesForQuery(event.message.text ?? '', env);
  }

  if (event.type === 'postback') {
    return messagesForPostback(event.postback?.data ?? '', env);
  }

  return null;
}

/* ---------- Worker ---------- */

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (request.method === 'GET') {
      /* 開發用預覽：/preview?w=compensate 直接吐出這個字會回的 Flex JSON，
         可以貼到 LINE Flex Message Simulator 看排版。不需要、也不會用到任何金鑰。 */
      if (url.pathname === '/preview') {
        const q = url.searchParams.get('w') ?? '';
        const action = url.searchParams.get('a');
        const messages = action
          ? messagesForPostback(`a=${action}&w=${encodeURIComponent(q)}`, env)
          : messagesForQuery(q, env);
        return Response.json({ query: q, messages }, {
          headers: { 'cache-control': 'no-store' },
        });
      }

      // 健康檢查：只回資料筆數與產生時間，不回任何金鑰
      return Response.json({
        ok: true,
        service: 'line-vocabulary-bot',
        vocabulary: stats(),
      });
    }

    if (request.method !== 'POST') {
      return new Response('Method Not Allowed', { status: 405 });
    }

    if (!env.LINE_CHANNEL_SECRET || !env.LINE_CHANNEL_ACCESS_TOKEN) {
      console.error('[worker] 缺少 LINE_CHANNEL_SECRET / LINE_CHANNEL_ACCESS_TOKEN');
      return new Response('Server not configured', { status: 500 });
    }

    /* STEP 14：一定要用 raw body 驗簽 */
    const rawBody = await request.text();
    const signature = request.headers.get('x-line-signature');
    const valid = await verifySignature(rawBody, signature, env.LINE_CHANNEL_SECRET);
    if (!valid) {
      console.warn('[worker] 簽章驗證失敗', url.pathname);
      return new Response('Invalid signature', { status: 401 });
    }

    let events: LineEvent[] = [];
    try {
      const parsed = JSON.parse(rawBody);
      events = Array.isArray(parsed?.events) ? parsed.events : [];
    } catch {
      // 驗簽過了但 body 壞掉 —— 回 200，不要讓 LINE 一直重送
      console.error('[worker] body 不是合法 JSON');
      return new Response('OK');
    }

    for (const event of events) {
      try {
        if (alreadyHandled(event?.webhookEventId)) {
          console.log('[worker] 略過重送的 event', event.webhookEventId);
          continue;
        }
        const messages = messagesForEvent(event, env);
        if (!messages || !messages.length) continue;
        const sent = await replyMessage(env.LINE_CHANNEL_ACCESS_TOKEN, event.replyToken!, messages);
        /* Flex 被 LINE 退回時降級成純文字再送一次 —— replyToken 在第一次失敗時還沒被用掉，
           所以可以重試。這樣至少使用者收得到內容，log 也能分辨是版面問題還是憑證問題。 */
        if (!sent.ok && sent.status === 400) {
          const alt = messages
            .map((m) => (m as { altText?: string }).altText)
            .filter(Boolean)
            .join('\n');
          console.error(`[worker] flex 被退回，payload=${JSON.stringify(messages).length} bytes，改送純文字`);
          const retry = await replyMessage(env.LINE_CHANNEL_ACCESS_TOKEN, event.replyToken!, [
            textMessage(alt || '查詢結果'),
          ]);
          console.error(`[worker] 純文字重試結果 ok=${retry.ok} status=${retry.status}`);
        }
      } catch (err) {
        /* STEP 19：任何一個 event 出錯都不能讓 Worker 掛掉，
           也不要影響同一批的其他 event */
        console.error('[worker] event 處理失敗', err);
        try {
          if (event?.replyToken) {
            await replyMessage(env.LINE_CHANNEL_ACCESS_TOKEN, event.replyToken, [
              textMessage('查詢時發生問題，請稍後再試一次，或換一個單字。'),
            ]);
          }
        } catch {
          /* 連回覆都失敗就放棄，webhook 仍然回 200 */
        }
      }
    }

    return new Response('OK');
  },
};

export { normalize };
