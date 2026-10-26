import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import worker from '../src/index';
import { mp3DurationMs } from '../src/mp3';
import { classifyText, isoWeek, localDate, parseTranslation } from '../src/sentences';

/* ---------- 假的 KV 與 Workers AI ---------- */

function fakeKV() {
  const store = new Map<string, { value: any; metadata?: any; ttl?: number }>();
  return {
    store,
    async put(key: string, value: any, opts: any = {}) {
      store.set(key, { value, metadata: opts.metadata, ttl: opts.expirationTtl });
    },
    async get(key: string, type?: string) {
      const hit = store.get(key);
      if (!hit) return null;
      if (type === 'json') return JSON.parse(hit.value);
      if (type === 'arrayBuffer') return (hit.value as Uint8Array).buffer;
      return hit.value;
    },
    async delete(key: string) {
      store.delete(key);
    },
    async list({ prefix = '' }: any = {}) {
      const keys = [...store.entries()]
        .filter(([k]) => k.startsWith(prefix))
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([name, v]) => ({ name, metadata: v.metadata }));
      return { keys, list_complete: true };
    },
  };
}

/** MPEG-2 Layer III、24 kHz、48 kbps：每個 frame 144 bytes、24 ms */
function fakeMp3(frames: number): Uint8Array {
  const out = new Uint8Array(frames * 144);
  for (let f = 0; f < frames; f++) out.set([0xff, 0xf3, 0x64, 0xc4], f * 144);
  return out;
}

const AI_JSON = {
  spoken: "The motor covers just came in, and the color's a bit off.",
  spoken_zh: '馬達上蓋剛到，顏色有點怪。',
  formal: 'The incoming motor covers show color variation.',
  formal_zh: '來料馬達上蓋有色差。',
  keywords: [
    { en: 'incoming', zh: '來料' },
    { en: 'color variation', zh: '色差' },
    { en: 'off', zh: '不對勁' },
  ],
  mistakes: ['✗ have color difference problem → ✓ the color is off：中文直翻很卡'],
};

function fakeAI(opts: { translate?: 'ok' | 'fail' | 'garbage'; tts?: 'ok' | 'fail' } = {}) {
  return {
    run: vi.fn(async (model: string, _input: any) => {
      if (model.includes('aura')) {
        if (opts.tts === 'fail') throw new Error('tts down');
        // binding 實際回 ReadableStream（audio/mpeg）
        return new Response(fakeMp3(100)).body;
      }
      if (opts.translate === 'fail') throw new Error('ai down');
      if (opts.translate === 'garbage') return { response: 'sorry I cannot' };
      return { response: JSON.stringify(AI_JSON) };
    }),
  };
}

const SECRET = 'test-channel-secret';
const OWNER = 'U-owner';

function makeEnv(ai = fakeAI()) {
  return {
    LINE_CHANNEL_SECRET: SECRET,
    LINE_CHANNEL_ACCESS_TOKEN: 'test-access-token',
    B2LAB_URL: 'https://english-b2-lab.web.app/',
    QA_URL: 'https://rexon-qa-english.web.app/',
    OWNER_USER_ID: OWNER,
    SENTENCES_TOKEN: 'tok-123',
    AI: ai,
    MY_SENTENCES: fakeKV(),
  };
}

async function sign(body: string) {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey('raw', enc.encode(SECRET), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const mac = await crypto.subtle.sign('HMAC', key, enc.encode(body));
  return btoa(String.fromCharCode(...new Uint8Array(mac)));
}

let calls: Array<{ url: string; body: any }> = [];
beforeEach(() => {
  calls = [];
  vi.stubGlobal(
    'fetch',
    vi.fn(async (url: any, init: any) => {
      calls.push({ url: String(url), body: JSON.parse(init.body) });
      return new Response('{}', { status: 200 });
    }),
  );
});
afterEach(() => vi.unstubAllGlobals());

async function send(env: any, event: any) {
  const body = JSON.stringify({ events: [{ webhookEventId: 'e' + Math.random(), replyToken: 'r', ...event }] });
  const req = new Request('https://bot.example.com/webhook', {
    method: 'POST',
    headers: { 'content-type': 'application/json', 'x-line-signature': await sign(body) },
    body,
  });
  calls = [];
  await worker.fetch(req, env);
  return calls[0]?.body?.messages as any[];
}

const text = (t: string, userId = OWNER) => ({
  type: 'message',
  source: { type: 'user', userId },
  message: { id: 'm', type: 'text', text: t },
});
const postback = (data: string, userId = OWNER) => ({
  type: 'postback',
  source: { type: 'user', userId },
  postback: { data },
});
const S = (x: unknown) => JSON.stringify(x);

/* ---------- 測試 ---------- */

describe('判斷：查單字還是記句子', () => {
  it('中文 ≤4 字、沒有標點 → 查單字', () => {
    expect(classifyText('賠償')).toEqual({ kind: 'word' });
    expect(classifyText('色差問題')).toEqual({ kind: 'word' });
  });
  it('中文超過 4 字或有標點 → 句子', () => {
    expect(classifyText('馬達上蓋剛來，有色差問題')).toEqual({ kind: 'sentence', text: '馬達上蓋剛來，有色差問題' });
    expect(classifyText('色差。')).toMatchObject({ kind: 'sentence' });
    expect(classifyText('上蓋有色差問題')).toMatchObject({ kind: 'sentence' });
  });
  it('#句 開頭一定是句子（去掉前綴）', () => {
    expect(classifyText('#句 色差')).toEqual({ kind: 'sentence', text: '色差' });
    expect(classifyText('#句check the lot')).toEqual({ kind: 'sentence', text: 'check the lot' });
  });
  it('英文照舊查單字', () => {
    expect(classifyText('compensate')).toEqual({ kind: 'word' });
    expect(classifyText('major defect')).toEqual({ kind: 'word' });
  });
});

describe('日期與週次（越南 UTC+7）', () => {
  it('UTC 晚上 18:00 之後已經是當地隔天', () => {
    expect(localDate(new Date('2026-10-26T17:30:00Z'))).toBe('2026-10-27');
  });
  it('ISO 週', () => {
    expect(isoWeek('2026-10-26')).toBe('2026-W44');
    expect(isoWeek('2026-11-01')).toBe('2026-W44');
    expect(isoWeek('2027-01-01')).toBe('2026-W53');
  });
});

describe('AI 回傳解析', () => {
  it('物件、字串、夾雜文字都能解析', () => {
    expect(parseTranslation(AI_JSON)?.sp).toContain('motor covers');
    expect(parseTranslation({ response: AI_JSON })?.kw).toEqual(['incoming', 'color variation', 'off']);
    expect(parseTranslation({ response: AI_JSON })?.kwZh).toEqual(['來料', '色差', '不對勁']);
    // 舊格式 keywords 是字串陣列
    expect(parseTranslation({ spoken: 'a', keywords: ['x', 'y'] })).toMatchObject({ kw: ['x', 'y'], kwZh: ['', ''] });
    expect(parseTranslation({ response: 'Here:\n' + JSON.stringify(AI_JSON) + '\nDone' })?.fm).toContain('incoming');
  });
  it('OpenAI 格式（2026-10 實測 llama-3.3 是這樣回）', () => {
    expect(parseTranslation({ choices: [{ message: { content: JSON.stringify(AI_JSON) } }] })?.sp).toContain('motor covers');
  });
  it('壞掉回 null', () => {
    expect(parseTranslation({ response: 'no json' })).toBeNull();
    expect(parseTranslation({ response: '{"x":1}' })).toBeNull();
  });
});

describe('mp3 長度', () => {
  it('逐 frame 累加', () => {
    expect(mp3DurationMs(fakeMp3(100))).toBe(2400);
  });
  it('ID3 標籤會跳過', () => {
    const tag = new Uint8Array([0x49, 0x44, 0x33, 3, 0, 0, 0, 0, 0, 5, 1, 2, 3, 4, 5]);
    const buf = new Uint8Array(tag.length + 144 * 10);
    buf.set(tag);
    buf.set(fakeMp3(10), tag.length);
    expect(mp3DurationMs(buf)).toBe(240);
  });
});

describe('LINE 記句子', () => {
  it('帳號主人傳句子：存 KV、回卡片＋語音', async () => {
    const env = makeEnv();
    const msgs = await send(env, text('馬達上蓋剛來，有色差問題'));
    expect(msgs).toHaveLength(2);
    const card = S(msgs[0]);
    expect(card).toContain('✅ 已記下・本週第 1 句');
    expect(card).toContain('馬達上蓋剛來，有色差問題');
    expect(card).toContain("The motor covers just came in, and the color's a bit off.");
    expect(card).toContain('color variation');
    // 中文同步顯示：口語、書面、關鍵字
    expect(card).toContain('馬達上蓋剛到，顏色有點怪。');
    expect(card).toContain('來料馬達上蓋有色差。');
    expect(card).toContain('  色差');
    for (const l of ['常犯錯・更多', '改查單字', '刪掉']) expect(card).toContain(l);
    expect(msgs[1]).toMatchObject({ type: 'audio', duration: 2400 });
    expect(msgs[1].originalContentUrl).toMatch(/^https:\/\/bot\.example\.com\/audio\/[\w-]+\.mp3$/);

    const keys = [...env.MY_SENTENCES.store.keys()];
    expect(keys.filter((k) => k.startsWith('s:'))).toHaveLength(1);
    expect(keys.filter((k) => k.startsWith('a:'))).toHaveLength(1);
    const audio = [...env.MY_SENTENCES.store.entries()].find(([k]) => k.startsWith('a:'))!;
    expect(audio[1].ttl).toBe(60 * 24 * 3600);
  });

  it('有 ctx 時先回 200，句子在 waitUntil 背景處理後才 reply（避免 LINE 斷線 Canceled）', async () => {
    const env = makeEnv();
    const body = JSON.stringify({ events: [{ webhookEventId: 'wu1', replyToken: 'r', ...text('馬達上蓋剛來，有色差問題') }] });
    const req = new Request('https://bot.example.com/webhook', {
      method: 'POST',
      headers: { 'content-type': 'application/json', 'x-line-signature': await sign(body) },
      body,
    });
    const pending: Promise<unknown>[] = [];
    calls = [];
    const res = await worker.fetch(req, env as any, { waitUntil: (p: Promise<unknown>) => pending.push(p) } as any);
    expect(res.status).toBe(200);
    expect(pending).toHaveLength(1);
    await Promise.all(pending);
    expect(S(calls[0].body.messages)).toContain('已記下');
  });

  it('第二句是本週第 2 句', async () => {
    const env = makeEnv();
    await send(env, text('馬達上蓋剛來，有色差問題'));
    const msgs = await send(env, text('#句 明天要跟供應商開會'));
    expect(S(msgs[0])).toContain('本週第 2 句');
  });

  it('KV list 還沒列出剛存的那句時，第 N 句仍然正確', async () => {
    const env = makeEnv();
    await send(env, text('馬達上蓋剛來，有色差問題'));
    const realList = env.MY_SENTENCES.list.bind(env.MY_SENTENCES);
    // 模擬最終一致：list 只回「已經存在的舊 key」，看不到這次新寫入的
    const before = new Set(env.MY_SENTENCES.store.keys());
    env.MY_SENTENCES.list = async (o: any) => {
      const r = await realList(o);
      return { ...r, keys: r.keys.filter((k: any) => before.has(k.name)) };
    };
    expect(S(await send(env, text('#句 第二句')))).toContain('本週第 2 句');
  });

  it('AI 失敗照樣存，回「英文說法週六補」、不送語音', async () => {
    for (const mode of ['fail', 'garbage'] as const) {
      const env = makeEnv(fakeAI({ translate: mode }));
      const msgs = await send(env, text('馬達上蓋剛來，有色差問題'));
      expect(msgs).toHaveLength(1);
      expect(S(msgs[0])).toContain('英文說法週六補');
      expect(S(msgs[0])).not.toContain('常犯錯・更多');
      const rec = JSON.parse([...env.MY_SENTENCES.store.values()][0].value);
      expect(rec).toMatchObject({ zh: '馬達上蓋剛來，有色差問題', ai: false, sp: '' });
    }
  });

  it('TTS 失敗只送卡片', async () => {
    const env = makeEnv(fakeAI({ tts: 'fail' }));
    const msgs = await send(env, text('馬達上蓋剛來，有色差問題'));
    expect(msgs).toHaveLength(1);
    expect(S(msgs[0])).toContain('motor covers');
  });

  it('不是帳號主人：照舊當中文查詢，不存任何東西', async () => {
    const env = makeEnv();
    const msgs = await send(env, text('馬達上蓋剛來，有色差問題', 'U-stranger'));
    expect(S(msgs)).not.toContain('已記下');
    expect(env.MY_SENTENCES.store.size).toBe(0);
    expect(env.AI.run).not.toHaveBeenCalled();
  });

  it('沒設定 OWNER_USER_ID 或 KV 時整個功能關閉', async () => {
    const env: any = { ...makeEnv(), OWNER_USER_ID: undefined };
    expect(S(await send(env, text('馬達上蓋剛來，有色差問題')))).not.toContain('已記下');
    const env2: any = { ...makeEnv(), MY_SENTENCES: undefined };
    expect(S(await send(env2, text('馬達上蓋剛來，有色差問題')))).not.toContain('已記下');
  });

  it('中文 ≤4 字照舊查單字，結果卡多一顆「當句子存」', async () => {
    const env = makeEnv();
    const msgs = await send(env, text('賠償'));
    expect(msgs).toHaveLength(1);
    expect(S(msgs[0])).toContain('a=save&w=%E8%B3%A0%E5%84%9F');
    expect(env.MY_SENTENCES.store.size).toBe(0);
    // 別人查同一個字不會有這顆
    expect(S(await send(env, text('賠償', 'U-stranger')))).not.toContain('a=save');
    // 查不到的中文（沒有 footer 的卡）也加得上
    expect(S(await send(env, text('喵喵')))).toContain('a=save');
  });

  it('按「當句子存」就記成句子', async () => {
    const env = makeEnv();
    const msgs = await send(env, postback('a=save&w=' + encodeURIComponent('色差')));
    expect(S(msgs[0])).toContain('✅ 已記下');
    expect([...env.MY_SENTENCES.store.keys()].some((k) => k.startsWith('s:'))).toBe(true);
  });

  it('常犯錯・更多／刪掉／改查單字', async () => {
    const env = makeEnv();
    await send(env, text('馬達上蓋剛來，有色差問題'));
    const id = [...env.MY_SENTENCES.store.keys()].find((k) => k.startsWith('s:'))!.slice(2);

    const mis = await send(env, postback(`a=mis&w=${id}`));
    // 錯的紅字刪除線、對的綠字，說明另起一行
    const spans = mis[0].contents.body.contents[2].contents[1].contents;
    expect(spans[1]).toMatchObject({ text: 'have color difference problem', color: '#FF0000', decoration: 'line-through' });
    expect(spans[4]).toMatchObject({ text: 'the color is off', color: '#15803D' });
    expect(S(mis)).toContain('中文直翻很卡');
    expect(S(mis)).toContain('AI 初稿');

    const del = await send(env, postback(`a=del&w=${id}`));
    expect(S(del)).toContain('已刪掉');
    expect(env.MY_SENTENCES.store.size).toBe(0);
    expect(S(await send(env, postback(`a=mis&w=${id}`)))).toContain('找不到這句');

    await send(env, text('#句 賠償'));
    const id2 = [...env.MY_SENTENCES.store.keys()].find((k) => k.startsWith('s:'))!.slice(2);
    const asWord = await send(env, postback(`a=asword&w=${id2}`));
    expect(S(asWord)).not.toContain('已記下');
    expect(env.MY_SENTENCES.store.size).toBe(0);
  });

  it('別人按句子按鈕不會動到資料', async () => {
    const env = makeEnv();
    await send(env, text('馬達上蓋剛來，有色差問題'));
    const id = [...env.MY_SENTENCES.store.keys()].find((k) => k.startsWith('s:'))!.slice(2);
    expect(S(await send(env, postback(`a=del&w=${id}`, 'U-stranger')))).toContain('只開放給帳號主人');
    expect(env.MY_SENTENCES.store.size).toBe(2);
  });
});

describe('週六排程 API 與語音檔', () => {
  async function seeded() {
    const env = makeEnv();
    await send(env, text('馬達上蓋剛來，有色差問題'));
    await send(env, text('#句 明天要跟供應商開會'));
    return env;
  }
  const get = (path: string, token?: string) =>
    new Request('https://bot.example.com' + path, {
      headers: token ? { authorization: `Bearer ${token}` } : {},
    });

  it('沒有或錯的 token 回 401', async () => {
    const env = await seeded();
    expect((await worker.fetch(get('/sentences'), env as any)).status).toBe(401);
    expect((await worker.fetch(get('/sentences', 'nope'), env as any)).status).toBe(401);
    const noToken: any = { ...env, SENTENCES_TOKEN: undefined };
    expect((await worker.fetch(get('/sentences', ''), noToken)).status).toBe(401);
  });

  it('GET /sentences 回還沒 ack 的句子（舊的在前），ack 之後就不回', async () => {
    const env = await seeded();
    const res = await worker.fetch(get('/sentences', 'tok-123'), env as any);
    const { sentences } = (await res.json()) as any;
    expect(sentences.map((s: any) => s.zh)).toEqual(['馬達上蓋剛來，有色差問題', '明天要跟供應商開會']);
    expect(sentences[0]).toMatchObject({ week: expect.stringMatching(/^\d{4}-W\d{2}$/), ai: true });

    const ack = await worker.fetch(
      new Request('https://bot.example.com/sentences/ack', {
        method: 'POST',
        headers: { authorization: 'Bearer tok-123', 'content-type': 'application/json' },
        body: JSON.stringify({ ids: [sentences[0].id, 'not-exist'] }),
      }),
      env as any,
    );
    expect(await ack.json()).toEqual({ acked: 1 });
    const again = (await (await worker.fetch(get('/sentences', 'tok-123'), env as any)).json()) as any;
    expect(again.sentences.map((s: any) => s.zh)).toEqual(['明天要跟供應商開會']);
    // ack 過的還在（14 天後自動刪），仍算在本週句數
    const acked = env.MY_SENTENCES.store.get('s:' + sentences[0].id)!;
    expect(acked.metadata).toMatchObject({ acked: 1 });
    expect(acked.ttl).toBe(14 * 24 * 3600);
    expect(S(await send(env, text('#句 第三句')))).toContain('本週第 3 句');
  });

  it('/audio/<id>.mp3 回 mp3，沒有的回 404', async () => {
    const env = await seeded();
    const id = [...env.MY_SENTENCES.store.keys()].find((k) => k.startsWith('a:'))!.slice(2);
    const res = await worker.fetch(get(`/audio/${id}.mp3`), env as any);
    expect(res.status).toBe(200);
    expect(res.headers.get('content-type')).toBe('audio/mpeg');
    expect((await res.arrayBuffer()).byteLength).toBe(144 * 100);
    expect((await worker.fetch(get('/audio/nope.mp3'), env as any)).status).toBe(404);
  });
});

describe('週六校正寫回（A）與「本週句子」（B）', () => {
  const postJson = (path: string, body: unknown, token = 'tok-123') =>
    new Request('https://bot.example.com' + path, {
      method: 'POST',
      headers: { authorization: `Bearer ${token}`, 'content-type': 'application/json' },
      body: JSON.stringify(body),
    });
  const firstId = (env: any) => [...env.MY_SENTENCES.store.keys()].find((k: string) => k.startsWith('s:'))!.slice(2);

  it('POST /sentences/correct 要 token', async () => {
    const env = makeEnv();
    expect((await worker.fetch(postJson('/sentences/correct', { items: [] }, 'bad'), env as any)).status).toBe(401);
  });

  it('寫回後：內容換成校正版、標已校正、口語有改才重做語音，重送不再花 TTS', async () => {
    const ai = fakeAI();
    const env = makeEnv(ai);
    await send(env, text('馬達上蓋剛來，有色差問題'));
    const id = firstId(env);
    const ttsCalls = () => ai.run.mock.calls.filter((c: any[]) => String(c[0]).includes('aura')).length;
    expect(ttsCalls()).toBe(1);

    const item = {
      id,
      sp: "The motor covers just came in, and the color looks a bit off.",
      spZh: '馬達上蓋剛到，顏色有點跑掉。',
      fm: 'The incoming motor covers show color variation.',
      kw: ['come in', 'off'],
      kwZh: ['到貨', '不對勁'],
      mis: ['✗ The motor cover just come → ✓ The motor covers just came in：時態要用過去式'],
    };
    const r1 = (await (await worker.fetch(postJson('/sentences/correct', { items: [item, { id: 'gone' }] }), env as any)).json()) as any;
    expect(r1).toEqual({ updated: 1, notFound: ['gone'], reTts: 1 });
    const rec = JSON.parse(env.MY_SENTENCES.store.get('s:' + id)!.value);
    expect(rec).toMatchObject({ sp: item.sp, spZh: item.spZh, kw: item.kw, corrected: true });
    expect(env.MY_SENTENCES.store.get('s:' + id)!.ttl).toBe(30 * 24 * 3600);
    expect(ttsCalls()).toBe(2);

    const r2 = (await (await worker.fetch(postJson('/sentences/correct', { items: [item] }), env as any)).json()) as any;
    expect(r2.reTts).toBe(0);
    expect(ttsCalls()).toBe(2);

    // 舊卡片按「常犯錯・更多」看到校正版與 ✅
    const detail = S(await send(env, postback(`a=mis&w=${id}`)));
    expect(detail).toContain('✅ 已校正');
    expect(detail).not.toContain('AI 初稿');
    expect(detail).toContain('時態要用過去式');
  });

  it('「本週句子」列出本週句子與校正狀態；只有帳號主人', async () => {
    const env = makeEnv();
    await send(env, text('馬達上蓋剛來，有色差問題'));
    await send(env, text('#句 明天要跟供應商開會'));
    const id = firstId(env);
    await worker.fetch(postJson('/sentences/correct', { items: [{ id, sp: 'Fixed sentence.' }] }), env as any);

    const msgs = await send(env, text('本週句子'));
    expect(msgs).toHaveLength(1);
    const s = S(msgs[0]);
    expect(s).toContain('2 句・已校正 1 句');
    expect(s).toContain('✅ 已校正');
    expect(s).toContain('⚠ 初稿');
    expect(s).toContain('Fixed sentence.');
    expect(s).toContain(`a=mis&w=${id}`);
    expect(msgs[0].quickReply.items[0].action.text).toBe('本週句子');
    // 不會被當成句子存起來
    expect([...env.MY_SENTENCES.store.keys()].filter((k) => k.startsWith('s:'))).toHaveLength(2);
    // 別人傳一樣的字只是查單字
    expect(S(await send(env, text('本週句子', 'U-stranger')))).not.toContain('已校正');
  });

  it('上週句子／沒有句子時給提示', async () => {
    const env = makeEnv();
    expect(S(await send(env, text('上週句子')))).toContain('還沒有記句子');
  });

  it('記句子的回覆最後一則帶「📋 本週句子」quick reply', async () => {
    const env = makeEnv();
    const msgs = await send(env, text('馬達上蓋剛來，有色差問題'));
    expect(msgs[0].quickReply).toBeUndefined();
    expect(msgs[1].type).toBe('audio');
    expect(msgs[1].quickReply.items[0].action).toMatchObject({ type: 'message', text: '本週句子' });
  });
});

describe('本週句子：句子很多時分頁', () => {
  // 直接測卡片組裝，不經過 KV
  const mk = (n: number, long = false) =>
    Array.from({ length: n }, (_, i) => ({
      id: `20261026T0900${String(i).padStart(2, '0')}-abcd`,
      zh: long ? '馬達固定盤使用的原料鐵板均發現壓傷痕跡，要跟供應商確認來料檢驗的抽樣數量與允收標準'.repeat(2) : `第 ${i + 1} 句中文`,
      sp: long ? 'The steel plates for the motor mounting plates all have dent marks, so we need to check with the supplier. '.repeat(2) : `Sentence ${i + 1}.`,
      fm: '',
      spZh: long ? '馬達固定盤的鐵板全部都有壓傷，要跟供應商確認來料抽樣數量與允收標準。'.repeat(2) : `第 ${i + 1} 句`,
      kw: [],
      mis: [],
      ai: true,
      corrected: i % 2 === 0,
    }));

  it('10 句以內是單頁', async () => {
    const { buildWeekSentencesMessage } = await import('../src/flexMessages');
    expect(buildWeekSentencesMessage('本週句子', '2026-W44', mk(10)).contents.type).toBe('bubble');
  });

  it('40 句分 4 頁，全部都列出、標頁碼', async () => {
    const { buildWeekSentencesMessage } = await import('../src/flexMessages');
    const msg: any = buildWeekSentencesMessage('本週句子', '2026-W44', mk(40));
    expect(msg.contents.type).toBe('carousel');
    expect(msg.contents.contents).toHaveLength(4);
    const s = S(msg);
    for (const n of [1, 20, 40]) expect(s).toContain(`Sentence ${n}.`);
    expect(s).toContain('40 句・已校正 20 句・1/4');
    expect(s).toContain('往左滑看下一頁');
  });

  it('70 句只列最新 60 句（6 頁），並說明較早的沒列', async () => {
    const { buildWeekSentencesMessage } = await import('../src/flexMessages');
    const msg: any = buildWeekSentencesMessage('本週句子', '2026-W44', mk(70));
    expect(msg.contents.contents).toHaveLength(6);
    const s = S(msg);
    expect(s).not.toContain('"Sentence 10."');
    expect(s).toContain('Sentence 70.');
    expect(s).toContain('較早的 10 句沒有列出');
  });

  it('最長的內容也在 LINE 上限內（carousel 50KB、每頁 30KB）', async () => {
    const { buildWeekSentencesMessage } = await import('../src/flexMessages');
    const msg: any = buildWeekSentencesMessage('本週句子', '2026-W44', mk(60, true));
    const bytes = (x: unknown) => new TextEncoder().encode(JSON.stringify(x)).length;
    expect(bytes(msg.contents)).toBeLessThan(50_000);
    for (const b of msg.contents.contents) expect(bytes(b)).toBeLessThan(30_000);
  });
});
