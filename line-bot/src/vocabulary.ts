/**
 * vocabulary.ts — 單字資料存取層（唯一碰資料的地方）
 *
 * 資料來自 src/data/vocabulary.json，那是 scripts/build-vocab.mjs 從
 * B2 Lab 與 QA English 兩個網站「現有的」資料檔產生出來的建置產物。
 * webhook 只透過這裡的函式取資料，以後要換成 Firestore / KV / API
 * 只要改這個檔案，不必動 index.ts 或 flexMessages.ts。
 */
import raw from './data/vocabulary.json';
import { bestMatches } from './fuzzySearch';

export interface Example {
  en: string;
  zh: string;
}

export interface WordEntry {
  id: string;
  word: string;
  pos: string;
  level: string;
  ipa: string;
  translation: string;
  definition: string;
  /** daily / workplace / health / learning / food / qa */
  category: string;
  /** general | qa | both —— 決定「完整學習」導向哪個網站 */
  source: 'general' | 'qa' | 'both';
  lesson: string;
  general: Example[];
  qa: Example[];
  related: string[];
}

interface VocabFile {
  generatedAt: string;
  count: number;
  words: WordEntry[];
}

const FILE = raw as unknown as VocabFile;
const WORDS: WordEntry[] = Array.isArray(FILE?.words) ? FILE.words : [];

/** 查詢正規化：去前後空白、全形空白、多重空白、轉小寫 */
export function normalize(input: string): string {
  return String(input ?? '')
    .replace(/[　﻿]/g, ' ')
    .trim()
    .replace(/\s+/g, ' ')
    .toLowerCase();
}

const byId = new Map<string, WordEntry>();
for (const w of WORDS) if (w && w.id) byId.set(w.id, w);

/** 詞形還原：users → user、compensated → compensate（只做最常見的幾種） */
function lemmaCandidates(q: string): string[] {
  const out: string[] = [];
  const add = (s: string) => {
    if (s.length >= 2 && !out.includes(s)) out.push(s);
  };
  if (q.endsWith('ies')) add(q.slice(0, -3) + 'y');
  if (q.endsWith('es')) {
    add(q.slice(0, -2));
    add(q.slice(0, -1));
  }
  if (q.endsWith('s')) add(q.slice(0, -1));
  if (q.endsWith('ing')) {
    add(q.slice(0, -3));
    add(q.slice(0, -3) + 'e');
  }
  if (q.endsWith('ed')) {
    add(q.slice(0, -2));
    add(q.slice(0, -1));
  }
  return out;
}

const hasCJK = (s: string) => /[一-鿿]/.test(s);
export const isChineseQuery = (s: string) => hasCJK(s);

/**
 * 查一個單字。大小寫、前後空白、常見詞形變化都查得到。
 * 查不到回 null（呼叫端再走 findSimilarWords）。
 */
export function findWord(input: string): WordEntry | null {
  const q = normalize(input);
  if (!q) return null;
  const hit = byId.get(q);
  if (hit) return hit;
  for (const cand of lemmaCandidates(q)) {
    const e = byId.get(cand);
    if (e) return e;
  }
  return null;
}

/** 更多例句（general）。找不到單字或沒有例句時回空陣列，不丟例外。 */
export function getMoreExamples(input: string, limit = 3): Example[] {
  const e = findWord(input);
  if (!e) return [];
  return (e.general || []).slice(0, limit);
}

/** QA / 工作情境例句。沒有就回空陣列，由上層顯示「目前沒有 QA 工作例句」。 */
export function getQaExamples(input: string, limit = 3): Example[] {
  const e = findWord(input);
  if (!e) return [];
  return (e.qa || []).slice(0, limit);
}

/** 相關單字，回傳完整詞條（有的話），讓卡片可以顯示詞性與翻譯。 */
export function getRelatedWords(input: string, limit = 4): WordEntry[] {
  const e = findWord(input);
  if (!e) return [];
  const out: WordEntry[] = [];
  for (const r of e.related || []) {
    const hit = byId.get(normalize(r));
    if (hit && hit.id !== e.id && !out.some((x) => x.id === hit.id)) out.push(hit);
    if (out.length >= limit) break;
  }
  return out;
}

/**
 * 拼字接近的字（Levenshtein，純本機計算、不呼叫 AI）。
 * 也會把「查詢字是某個詞條的一部分」的情況帶進來 ——
 * 例如 defect 在資料裡只以 major defect / functional defect 存在。
 */
export function findSimilarWords(input: string, limit = 3): WordEntry[] {
  const q = normalize(input);
  if (!q) return [];

  const contains: WordEntry[] = [];
  const re = new RegExp(`(^|[^a-z])${q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`, 'i');
  if (q.length >= 3) {
    for (const w of WORDS) {
      if (w.id !== q && re.test(w.id)) contains.push(w);
      if (contains.length >= limit) break;
    }
  }

  const fuzzy = bestMatches(
    q,
    WORDS.map((w) => w.id),
    limit,
  )
    .map((id) => byId.get(id))
    .filter((w): w is WordEntry => !!w);

  const seen = new Set<string>();
  const out: WordEntry[] = [];
  for (const w of [...fuzzy, ...contains]) {
    if (seen.has(w.id)) continue;
    seen.add(w.id);
    out.push(w);
    if (out.length >= limit) break;
  }
  return out;
}

/**
 * 中文查詢（第一版的加值功能）：輸入「賠償」回傳翻譯裡含這兩個字的單字。
 * 架構上跟英文查詢分開，之後要換成正式的中英對照索引不影響其他程式。
 */
export function findByChinese(input: string, limit = 5): WordEntry[] {
  const q = String(input ?? '').trim();
  if (!q || !hasCJK(q)) return [];
  const exact: WordEntry[] = [];
  const loose: WordEntry[] = [];
  for (const w of WORDS) {
    const t = w.translation || '';
    if (!t) continue;
    if (t === q || t.split(/[、,，；;／/]/).some((p) => p.trim() === q)) exact.push(w);
    else if (t.includes(q)) loose.push(w);
  }
  return [...exact, ...loose].slice(0, limit);
}

export const stats = () => ({
  count: WORDS.length,
  generatedAt: FILE?.generatedAt ?? '',
});
