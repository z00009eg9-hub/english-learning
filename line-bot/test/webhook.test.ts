import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import worker, { } from '../src/index';
import { verifySignature } from '../src/line';

const SECRET = 'test-channel-secret';
const TOKEN = 'test-access-token';
const ENV = {
  LINE_CHANNEL_SECRET: SECRET,
  LINE_CHANNEL_ACCESS_TOKEN: TOKEN,
  B2LAB_URL: 'https://english-b2-lab.web.app/',
  QA_URL: 'https://rexon-qa-english.web.app/',
};

async function sign(body: string, secret = SECRET) {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey(
    'raw',
    enc.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  );
  const mac = await crypto.subtle.sign('HMAC', key, enc.encode(body));
  return btoa(String.fromCharCode(...new Uint8Array(mac)));
}

function post(body: unknown, signature: string | null) {
  const headers: Record<string, string> = { 'content-type': 'application/json' };
  if (signature) headers['x-line-signature'] = signature;
  return new Request('https://bot.example.com/webhook', {
    method: 'POST',
    headers,
    body: typeof body === 'string' ? body : JSON.stringify(body),
  });
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

afterEach(() => {
  vi.unstubAllGlobals();
});

const textEvent = (text: string, id = 'evt-' + Math.random()) => ({
  events: [
    {
      type: 'message',
      webhookEventId: id,
      replyToken: 'reply-token-1',
      source: { type: 'user', userId: 'U1' },
      message: { id: 'm1', type: 'text', text },
    },
  ],
});

const reply = () => calls[0]?.body;
const dump = () => JSON.stringify(calls[0]?.body ?? {});

describe('STEP 14 簽章驗證', () => {
  it('簽章正確就處理', async () => {
    const body = JSON.stringify(textEvent('compensate'));
    const res = await worker.fetch(post(body, await sign(body)), ENV as any);
    expect(res.status).toBe(200);
    expect(calls).toHaveLength(1);
  });

  it('簽章錯誤回 401 且不處理訊息', async () => {
    const body = JSON.stringify(textEvent('compensate'));
    const res = await worker.fetch(post(body, 'definitely-wrong'), ENV as any);
    expect(res.status).toBe(401);
    expect(calls).toHaveLength(0);
  });

  it('沒有簽章 header 也回 401', async () => {
    const body = JSON.stringify(textEvent('compensate'));
    const res = await worker.fetch(post(body, null), ENV as any);
    expect(res.status).toBe(401);
    expect(calls).toHaveLength(0);
  });

  it('用 raw body 計算，body 改一個字就失效', async () => {
    const body = JSON.stringify(textEvent('compensate'));
    const sig = await sign(body);
    expect(await verifySignature(body, sig, SECRET)).toBe(true);
    expect(await verifySignature(body + ' ', sig, SECRET)).toBe(false);
  });

  it('沒設定 secret 時回 500 而不是當掉', async () => {
    const body = JSON.stringify(textEvent('compensate'));
    const res = await worker.fetch(post(body, await sign(body)), {
      B2LAB_URL: '',
      QA_URL: '',
    } as any);
    expect(res.status).toBe(500);
  });
});

describe('核心流程：輸入 compensate', () => {
  it.each(['compensate', 'Compensate', ' COMPENSATE ', '  compensate  '])(
    '「%s」都回同一張單字卡',
    async (text) => {
      const body = JSON.stringify(textEvent(text));
      await worker.fetch(post(body, await sign(body)), ENV as any);
      const m = reply().messages[0];
      expect(m.type).toBe('flex');
      expect(dump()).toContain('compensate');
      expect(dump()).toContain('補償');
    },
  );

  it('回覆送到 LINE reply API 並帶 replyToken', async () => {
    const body = JSON.stringify(textEvent('compensate'));
    await worker.fetch(post(body, await sign(body)), ENV as any);
    expect(calls[0].url).toBe('https://api.line.me/v2/bot/message/reply');
    expect(calls[0].body.replyToken).toBe('reply-token-1');
    expect(calls[0].body.messages).toHaveLength(1);
  });
});

describe('STEP 9 / 10 找不到', () => {
  it('拼錯給建議', async () => {
    const body = JSON.stringify(textEvent('compansate'));
    await worker.fetch(post(body, await sign(body)), ENV as any);
    expect(dump()).toContain('你是不是想找');
    expect(dump()).toContain('compensate');
  });

  it('完全不存在只給網站入口', async () => {
    const body = JSON.stringify(textEvent('xxxxxxxx'));
    await worker.fetch(post(body, await sign(body)), ENV as any);
    expect(dump()).toContain('目前資料庫中沒有');
    expect(dump()).not.toContain('你是不是想找');
  });
});

describe('STEP 15 非文字訊息', () => {
  it.each(['image', 'sticker', 'audio', 'video', 'location'])('%s 安全忽略、不回覆', async (t) => {
    const body = JSON.stringify({
      events: [
        {
          type: 'message',
          webhookEventId: 'e-' + t,
          replyToken: 'r',
          message: { id: 'm', type: t },
        },
      ],
    });
    const res = await worker.fetch(post(body, await sign(body)), ENV as any);
    expect(res.status).toBe(200);
    expect(calls).toHaveLength(0);
  });

  it('follow / join 等其他 event 也不會爆', async () => {
    const body = JSON.stringify({
      events: [{ type: 'follow', webhookEventId: 'e-follow', replyToken: 'r' }],
    });
    const res = await worker.fetch(post(body, await sign(body)), ENV as any);
    expect(res.status).toBe(200);
    expect(calls).toHaveLength(0);
  });
});

describe('STEP 4 / 5 / 6 postback', () => {
  const postbackEvent = (data: string) => ({
    events: [
      {
        type: 'postback',
        webhookEventId: 'pb-' + data,
        replyToken: 'r',
        postback: { data },
      },
    ],
  });

  it('更多例句', async () => {
    const body = JSON.stringify(postbackEvent('a=more&w=compensate'));
    await worker.fetch(post(body, await sign(body)), ENV as any);
    expect(dump()).toContain('More Examples');
  });

  it('QA 例句（沒有時給提示，不報錯）', async () => {
    const body = JSON.stringify(postbackEvent('a=qa&w=compensate'));
    await worker.fetch(post(body, await sign(body)), ENV as any);
    expect(dump()).toContain('目前沒有 QA 工作例句');
  });

  it('相關單字', async () => {
    const body = JSON.stringify(postbackEvent('a=rel&w=compensate'));
    await worker.fetch(post(body, await sign(body)), ENV as any);
    expect(dump()).toContain('Related Words');
  });

  it('點相關單字等同重新查那個字', async () => {
    const body = JSON.stringify(postbackEvent('a=word&w=refund'));
    await worker.fetch(post(body, await sign(body)), ENV as any);
    expect(dump()).toContain('refund');
    expect(dump()).toContain('退款');
  });

  it('壞掉的 postback data 不會讓 Worker 掛掉', async () => {
    const body = JSON.stringify(postbackEvent('garbage'));
    const res = await worker.fetch(post(body, await sign(body)), ENV as any);
    expect(res.status).toBe(200);
    expect(dump()).toContain('目前資料庫中沒有');
  });
});

describe('STEP 16 重複 webhook', () => {
  it('同一個 webhookEventId 只回一次', async () => {
    const payload = textEvent('compensate', 'duplicate-event-id');
    const body = JSON.stringify(payload);
    const sig = await sign(body);
    await worker.fetch(post(body, sig), ENV as any);
    await worker.fetch(post(body, sig), ENV as any);
    expect(calls).toHaveLength(1);
  });
});

describe('STEP 19 錯誤處理', () => {
  it('LINE reply API 失敗時 webhook 仍回 200', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn(async () => new Response('rate limited', { status: 429 })),
    );
    const body = JSON.stringify(textEvent('compensate', 'evt-line-fail'));
    const res = await worker.fetch(post(body, await sign(body)), ENV as any);
    expect(res.status).toBe(200);
  });

  it('LINE reply API 直接丟例外時也回 200', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn(async () => {
        throw new Error('network down');
      }),
    );
    const body = JSON.stringify(textEvent('compensate', 'evt-line-throw'));
    const res = await worker.fetch(post(body, await sign(body)), ENV as any);
    expect(res.status).toBe(200);
  });

  it('body 不是合法 JSON 時回 200（避免 LINE 無限重送）', async () => {
    const body = 'not json at all';
    const res = await worker.fetch(post(body, await sign(body)), ENV as any);
    expect(res.status).toBe(200);
    expect(calls).toHaveLength(0);
  });

  it('events 缺漏或格式怪異不會爆', async () => {
    const body = JSON.stringify({ destination: 'x' });
    const res = await worker.fetch(post(body, await sign(body)), ENV as any);
    expect(res.status).toBe(200);
  });

  it('空字串訊息給提示而不是錯誤', async () => {
    const body = JSON.stringify(textEvent('   ', 'evt-empty'));
    await worker.fetch(post(body, await sign(body)), ENV as any);
    expect(dump()).toContain('請輸入一個英文單字');
  });
});

describe('健康檢查與方法限制', () => {
  it('GET 回單字數量，不含任何金鑰', async () => {
    const res = await worker.fetch(new Request('https://bot.example.com/'), ENV as any);
    const json: any = await res.json();
    expect(json.ok).toBe(true);
    expect(json.vocabulary.count).toBeGreaterThan(500);
    expect(JSON.stringify(json)).not.toContain(SECRET);
    expect(JSON.stringify(json)).not.toContain(TOKEN);
  });

  it('其他方法回 405', async () => {
    const res = await worker.fetch(
      new Request('https://bot.example.com/', { method: 'PUT' }),
      ENV as any,
    );
    expect(res.status).toBe(405);
  });
});

describe('開發用預覽', () => {
  it('/preview?w=compensate 回 Flex JSON，且不需要金鑰', async () => {
    const res = await worker.fetch(
      new Request('https://bot.example.com/preview?w=compensate'),
      { B2LAB_URL: ENV.B2LAB_URL, QA_URL: ENV.QA_URL } as any,
    );
    const json: any = await res.json();
    expect(json.messages[0].type).toBe('flex');
    expect(JSON.stringify(json)).toContain('補償');
  });

  it('/preview?a=qa&w=supplier 回 QA 例句訊息', async () => {
    const res = await worker.fetch(
      new Request('https://bot.example.com/preview?a=qa&w=supplier'),
      ENV as any,
    );
    expect(JSON.stringify(await res.json())).toContain('QA / Work');
  });
});
