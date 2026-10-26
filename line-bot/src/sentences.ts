/**
 * sentences.ts — 「LINE 記句子」：使用者傳上班講的中文句子，Bot 翻成英文並記下來，
 * 週六排程（b2lab/MYWEEK_TASK.md）再從 GET /sentences 取走、做成「我的職場週記」。
 *
 * 全部走免費額度：翻譯用 Workers AI（Llama 3.3），句子與語音存 KV，只用 reply 不用 push。
 * AI 或 TTS 失敗都不擋存檔 —— 句子先記下來，英文說法週六再補。
 */
import type { Env } from './line';
import { mp3DurationMs } from './mp3';

export const TRANSLATE_MODEL = '@cf/meta/llama-3.3-70b-instruct-fp8-fast';
/* MeloTTS 回的是 WAV，LINE 只收 mp3／m4a，所以用 Deepgram Aura（可直接出 mp3） */
export const TTS_MODEL = '@cf/deepgram/aura-2-en';
/** 句子語音在 KV 留 60 天（KV 最短 TTL 60 秒，單位是秒） */
const AUDIO_TTL_S = 60 * 24 * 3600;
/** 週六取走（ack）之後再留 14 天就自動消失 */
const ACKED_TTL_S = 14 * 24 * 3600;

export interface SentenceRecord {
  id: string;
  /** 使用者原句（中文） */
  zh: string;
  /** 口語版 */
  sp: string;
  /** 書面版 */
  fm: string;
  /** 口語版／書面版的中文（AI 回譯；舊紀錄沒有） */
  spZh?: string;
  fmZh?: string;
  kw: string[];
  /** 跟 kw 一一對應的中文 */
  kwZh?: string[];
  /** 常犯錯 */
  mis: string[];
  /** ISO 時間 */
  at: string;
  /** 使用者當地日期 YYYY-MM-DD（越南 UTC+7），也決定歸到哪一週 */
  date: string;
  /** ISO 週，例如 2026-W44 —— 對應 b2lab/my-week/<週>.md */
  week: string;
  /** AI 有沒有成功翻出英文 */
  ai: boolean;
  /** 口語版語音長度 ms；0 或沒有＝沒有語音 */
  audioMs?: number;
}

interface Meta {
  week: string;
  acked?: 1;
}

/* ---------- 判斷：查單字還是記句子 ---------- */

const CJK = /[一-鿿]/;
const PUNCT = /[，。！？、；：,.!?;:…「」『』（）()~～]/;
export const FORCE_PREFIX = /^#句\s*/;

/**
 * 只對中文判斷（英文照舊查單字）：
 *   #句 開頭 → 一定是句子；中文且超過 4 字或有標點 → 句子；其餘 → 查單字。
 */
export function classifyText(raw: string): { kind: 'sentence'; text: string } | { kind: 'word' } {
  const t = String(raw ?? '').trim();
  if (FORCE_PREFIX.test(t)) {
    const text = t.replace(FORCE_PREFIX, '').trim();
    return text ? { kind: 'sentence', text } : { kind: 'word' };
  }
  if (!CJK.test(t)) return { kind: 'word' };
  if (t.replace(/\s+/g, '').length > 4 || PUNCT.test(t)) return { kind: 'sentence', text: t };
  return { kind: 'word' };
}

export const isOwner = (env: Env, userId?: string) =>
  !!env.OWNER_USER_ID && !!userId && userId === env.OWNER_USER_ID;

export const canSaveSentences = (env: Env, userId?: string) =>
  isOwner(env, userId) && !!env.MY_SENTENCES;

/* ---------- 日期（使用者在越南，UTC+7） ---------- */

const LOCAL_OFFSET_MS = 7 * 3600 * 1000;

export function localDate(now: Date): string {
  return new Date(now.getTime() + LOCAL_OFFSET_MS).toISOString().slice(0, 10);
}

export function isoWeek(dateStr: string): string {
  const d = new Date(dateStr + 'T00:00:00Z');
  const day = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - day); // 那一週的星期四決定年份
  const yearStart = Date.UTC(d.getUTCFullYear(), 0, 1);
  const week = Math.ceil(((d.getTime() - yearStart) / 86400000 + 1) / 7);
  return `${d.getUTCFullYear()}-W${String(week).padStart(2, '0')}`;
}

/* ---------- 翻譯（Workers AI） ---------- */

const SYSTEM_PROMPT = `You help a Taiwanese quality-assurance engineer working in a factory in Vietnam say their work sentences in English.
The user sends one Chinese sentence they actually said at work. Reply with JSON only:
{"spoken": "...", "spoken_zh": "...", "formal": "...", "formal_zh": "...", "keywords": [{"en": "...", "zh": "..."}], "mistakes": ["..."]}
- spoken: natural, casual American English a coworker would say out loud. Short.
- formal: the same meaning for an email or report.
- spoken_zh / formal_zh: what your English says, in Traditional Chinese as used in Taiwan factories (short, colloquial, 繁體中文).
- keywords: 2-4 key English words or phrases from your answers, each with a short Traditional Chinese meaning.
- mistakes: 1-2 typical ENGLISH mistakes a Chinese speaker would make when saying this sentence in English
  (word-for-word translation, wrong word choice, tense, articles). Format: "✗ <wrong English> → ✓ <better English>：<short reason in Traditional Chinese>".
  Both sides of the arrow must be English. Never write Chinese on either side of the arrow.
  The wrong side must be really wrong (grammar error or unnatural Chinglish). Never mark natural English as wrong
  (e.g. "just came in" is a natural way to say goods arrived). If you are not sure, give only one mistake.
- For spoken, prefer what native speakers actually say ("the color's a bit off") over literal translations ("has a color difference issue").
Keep every fact from the sentence. Do not add numbers, causes or results that are not in it.

Example input: 這批來料有毛邊，要退回供應商
Example output: {"spoken": "This batch has burrs. We need to send it back to the supplier.", "spoken_zh": "這批有毛邊，要退回給供應商。", "formal": "The incoming lot has burrs and will be returned to the supplier.", "formal_zh": "此批來料有毛邊，將退回供應商。", "keywords": [{"en": "burrs", "zh": "毛邊"}, {"en": "incoming lot", "zh": "來料批"}, {"en": "send back", "zh": "退回"}], "mistakes": ["✗ This material has hair edge → ✓ This batch has burrs：毛邊是 burr，不是直翻 hair edge", "✗ return back to the supplier → ✓ return to the supplier：return 已經有 back 的意思"]}`;

interface Translation {
  sp: string;
  fm: string;
  spZh: string;
  fmZh: string;
  kw: string[];
  /** 跟 kw 一一對應的中文，沒有就是空字串 */
  kwZh: string[];
  mis: string[];
}

const strList = (v: unknown, max: number) =>
  (Array.isArray(v) ? v : [])
    .map((x) => String(x ?? '').trim())
    .filter(Boolean)
    .slice(0, max);

/** AI 回的東西可能是物件、JSON 字串、或前後夾雜文字的字串 —— 一律盡量解析，壞掉回 null */
export function parseTranslation(raw: unknown): Translation | null {
  let obj: any = raw;
  // Workers AI 有兩種回法：{ response } 或 OpenAI 格式 { choices: [{ message: { content } }] }
  if (obj && typeof obj === 'object' && 'response' in obj) obj = obj.response;
  else if (obj && typeof obj === 'object' && Array.isArray(obj.choices)) obj = obj.choices[0]?.message?.content;
  if (typeof obj === 'string') {
    const m = obj.match(/\{[\s\S]*\}/);
    if (!m) return null;
    try {
      obj = JSON.parse(m[0]);
    } catch {
      return null;
    }
  }
  if (!obj || typeof obj !== 'object') return null;
  const sp = String(obj.spoken ?? '').trim();
  const fm = String(obj.formal ?? '').trim();
  if (!sp && !fm) return null;
  // keywords 可能是 [{en, zh}] 或舊格式 ["..."]
  const kws = (Array.isArray(obj.keywords) ? obj.keywords : [])
    .map((k: any) =>
      k && typeof k === 'object'
        ? { en: String(k.en ?? '').trim(), zh: String(k.zh ?? '').trim() }
        : { en: String(k ?? '').trim(), zh: '' },
    )
    .filter((k: { en: string }) => k.en)
    .slice(0, 4);
  const spZh = String(obj.spoken_zh ?? '').trim();
  const fmZh = String(obj.formal_zh ?? '').trim();
  return {
    sp: (sp || fm).slice(0, 300),
    fm: (fm || sp).slice(0, 300),
    spZh: (spZh || fmZh).slice(0, 200),
    fmZh: (fmZh || spZh).slice(0, 200),
    kw: kws.map((k: { en: string }) => k.en.slice(0, 40)),
    kwZh: kws.map((k: { zh: string }) => k.zh.slice(0, 20)),
    mis: strList(obj.mistakes, 2).map((k) => k.slice(0, 200)),
  };
}

export async function translate(env: Env, zh: string): Promise<Translation | null> {
  if (!env.AI) return null;
  try {
    const raw = await env.AI.run(TRANSLATE_MODEL, {
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        { role: 'user', content: zh },
      ],
      max_tokens: 400,
      temperature: 0.3,
    });
    const t = parseTranslation(raw);
    if (!t) console.error('[sentences] AI 回傳格式無法解析', JSON.stringify(raw).slice(0, 300));
    return t;
  } catch (err) {
    console.error('[sentences] AI 翻譯失敗', err);
    return null;
  }
}

/* ---------- 語音（Workers AI Aura → KV） ---------- */

async function toBytes(raw: unknown): Promise<Uint8Array | null> {
  if (!raw) return null;
  if (raw instanceof Uint8Array) return raw;
  if (raw instanceof ArrayBuffer) return new Uint8Array(raw);
  if (raw instanceof ReadableStream) return new Uint8Array(await new Response(raw).arrayBuffer());
  const b64 = (raw as { audio?: unknown }).audio;
  if (typeof b64 === 'string' && b64) {
    const bin = atob(b64);
    const out = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
    return out;
  }
  return null;
}

/** 唸口語版，存進 KV。回傳長度 ms；失敗回 0（呼叫端就只送卡片） */
export async function synthesize(env: Env, id: string, text: string): Promise<number> {
  if (!env.AI || !env.MY_SENTENCES || !text) return 0;
  try {
    const bytes = await toBytes(await env.AI.run(TTS_MODEL, { text, encoding: 'mp3', speaker: 'asteria' }));
    if (!bytes || bytes.length < 200) return 0;
    const ms = mp3DurationMs(bytes);
    if (!ms) return 0;
    await env.MY_SENTENCES.put(`a:${id}`, bytes, { expirationTtl: AUDIO_TTL_S });
    return ms;
  } catch (err) {
    console.error('[sentences] TTS 失敗', err);
    return 0;
  }
}

export async function getAudio(env: Env, id: string): Promise<ArrayBuffer | null> {
  if (!env.MY_SENTENCES || !/^[\w-]+$/.test(id)) return null;
  return env.MY_SENTENCES.get(`a:${id}`, 'arrayBuffer');
}

/* ---------- KV 存取 ---------- */

/** key 用時間排序：s:<ISO 時間去掉符號>-<亂數>，例如 s:20261026T083012-a1b2 */
function newId(now: Date): string {
  const t = now.toISOString().replace(/[-:]/g, '').slice(0, 15);
  return `${t}-${Math.random().toString(36).slice(2, 6)}`;
}

async function listAll(kv: KVNamespace): Promise<Array<{ name: string; metadata?: Meta }>> {
  const out: Array<{ name: string; metadata?: Meta }> = [];
  let cursor: string | undefined;
  for (let page = 0; page < 5; page++) {
    const res: any = await kv.list<Meta>({ prefix: 's:', cursor });
    out.push(...res.keys);
    if (res.list_complete || !res.cursor) break;
    cursor = res.cursor;
  }
  return out;
}

/**
 * 本週已有幾句（不含 excludeId）。
 * KV 的 list 是最終一致、剛寫入的 key 可能要等一陣子才列得出來，
 * 所以「第 N 句」要用「其他句數 + 1」算，不能把剛存的那句也靠 list 數。
 */
export async function countWeek(env: Env, week: string, excludeId = ''): Promise<number> {
  if (!env.MY_SENTENCES) return 0;
  return (await listAll(env.MY_SENTENCES)).filter(
    (k) => k.metadata?.week === week && k.name !== `s:${excludeId}`,
  ).length;
}

export async function getSentence(env: Env, id: string): Promise<SentenceRecord | null> {
  if (!env.MY_SENTENCES || !id) return null;
  return env.MY_SENTENCES.get<SentenceRecord>(`s:${id}`, 'json');
}

async function putSentence(env: Env, rec: SentenceRecord, meta: Meta, ttl?: number) {
  await env.MY_SENTENCES!.put(`s:${rec.id}`, JSON.stringify(rec), {
    metadata: meta,
    ...(ttl ? { expirationTtl: ttl } : {}),
  });
}

export async function deleteSentence(env: Env, id: string): Promise<boolean> {
  const rec = await getSentence(env, id);
  if (!rec) return false;
  await env.MY_SENTENCES!.delete(`s:${id}`);
  await env.MY_SENTENCES!.delete(`a:${id}`);
  return true;
}

/**
 * 記一句：先翻譯再存，翻譯失敗也照存（ai=false）。
 * 回傳紀錄與「本週第幾句」。
 */
export async function saveSentence(
  env: Env,
  zh: string,
  now = new Date(),
): Promise<{ rec: SentenceRecord; nth: number }> {
  const date = localDate(now);
  const week = isoWeek(date);
  const id = newId(now);
  const t = await translate(env, zh);
  const rec: SentenceRecord = {
    id,
    zh: zh.slice(0, 500),
    sp: t?.sp ?? '',
    fm: t?.fm ?? '',
    spZh: t?.spZh ?? '',
    fmZh: t?.fmZh ?? '',
    kw: t?.kw ?? [],
    kwZh: t?.kwZh ?? [],
    mis: t?.mis ?? [],
    at: now.toISOString(),
    date,
    week,
    ai: !!t,
  };
  if (rec.sp) rec.audioMs = await synthesize(env, id, rec.sp);
  await putSentence(env, rec, { week });
  const nth = (await countWeek(env, week, id)) + 1;
  return { rec, nth };
}

/* ---------- 給週六排程：取句子 / 標記已取 ---------- */

export function tokenOk(request: Request, env: Env): boolean {
  const want = String(env.SENTENCES_TOKEN ?? '');
  const got = (request.headers.get('authorization') ?? '').replace(/^Bearer\s+/i, '');
  if (!want || got.length !== want.length) return false;
  let diff = 0;
  for (let i = 0; i < want.length; i++) diff |= want.charCodeAt(i) ^ got.charCodeAt(i);
  return diff === 0;
}

/** 還沒被 ack 的句子，舊的在前 */
export async function pendingSentences(env: Env): Promise<SentenceRecord[]> {
  if (!env.MY_SENTENCES) return [];
  const keys = (await listAll(env.MY_SENTENCES)).filter((k) => !k.metadata?.acked);
  const recs = await Promise.all(keys.map((k) => env.MY_SENTENCES!.get<SentenceRecord>(k.name, 'json')));
  return recs.filter((r): r is SentenceRecord => !!r).sort((a, b) => a.at.localeCompare(b.at));
}

/** 標記已取走：留 14 天後自動刪，期間仍算在「本週第 N 句」裡 */
export async function ackSentences(env: Env, ids: string[]): Promise<number> {
  let n = 0;
  for (const id of ids.slice(0, 200)) {
    const rec = await getSentence(env, String(id));
    if (!rec) continue;
    await putSentence(env, rec, { week: rec.week, acked: 1 }, ACKED_TTL_S);
    n++;
  }
  return n;
}
