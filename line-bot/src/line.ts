/**
 * line.ts — LINE Messaging API 的最小封裝
 *   - x-line-signature 驗證（Channel Secret + raw body 的 HMAC-SHA256）
 *   - Reply API（只用回覆，不做主動 push，維持免費方案）
 * 所有金鑰都從 env 進來，程式裡不得出現任何真實 token。
 */

export interface Env {
  LINE_CHANNEL_SECRET: string;
  LINE_CHANNEL_ACCESS_TOKEN: string;
  /** 非機密設定，放在 wrangler.toml 的 [vars] */
  B2LAB_URL?: string;
  QA_URL?: string;
}

export interface LineSource {
  type: string;
  userId?: string;
  groupId?: string;
  roomId?: string;
}

export interface LineEvent {
  type: string;
  webhookEventId?: string;
  deliveryContext?: { isRedelivery?: boolean };
  replyToken?: string;
  source?: LineSource;
  message?: { id: string; type: string; text?: string };
  postback?: { data: string };
}

/** 常數時間比較，避免用回應時間反推簽章 */
function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

function toBase64(buf: ArrayBuffer): string {
  const bytes = new Uint8Array(buf);
  let bin = '';
  for (let i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
  return btoa(bin);
}

/**
 * 驗證 x-line-signature。
 * 一定要用「未經解析的 raw body 字串」計算，先 JSON.parse 再 stringify 會失敗。
 */
export async function verifySignature(
  rawBody: string,
  signature: string | null,
  channelSecret: string,
): Promise<boolean> {
  if (!signature || !channelSecret) return false;
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey(
    'raw',
    enc.encode(channelSecret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  );
  const mac = await crypto.subtle.sign('HMAC', key, enc.encode(rawBody));
  return timingSafeEqual(toBase64(mac), signature);
}

const REPLY_URL = 'https://api.line.me/v2/bot/message/reply';

/**
 * 回覆訊息。失敗不丟例外 —— webhook 一定要回 200，
 * 否則 LINE 會重送，使用者反而會收到重複訊息。
 */
export async function replyMessage(
  accessToken: string,
  replyToken: string,
  messages: unknown[],
): Promise<{ ok: boolean; status: number; body?: string }> {
  if (!accessToken || !replyToken || !messages.length) {
    return { ok: false, status: 0, body: 'missing reply parameters' };
  }
  try {
    const res = await fetch(REPLY_URL, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ replyToken, messages: messages.slice(0, 5) }),
    });
    if (res.ok) return { ok: true, status: res.status };
    const body = await res.text().catch(() => '');
    console.error('[line] reply failed', res.status, body.slice(0, 300));
    return { ok: false, status: res.status, body };
  } catch (err) {
    console.error('[line] reply threw', err);
    return { ok: false, status: 0, body: String(err) };
  }
}

/** postback data 是 querystring：a=more&w=compensate */
export function parsePostback(data: string): { action: string; word: string } {
  const params = new URLSearchParams(String(data ?? ''));
  return {
    action: params.get('a') || '',
    word: params.get('w') || '',
  };
}

export function buildPostback(action: string, word: string): string {
  // LINE 限制 postback data 最長 300 bytes
  const s = new URLSearchParams({ a: action, w: word }).toString();
  return s.length <= 300 ? s : s.slice(0, 300);
}
