/**
 * build-vocab.mjs — 從「現有的」兩個網站資料檔產生 LINE Bot 用的單字索引。
 *
 * 這不是第三套 vocabulary database，而是一個「建置產物」：
 *   B2 Lab   : b2lab/public/data-*.js       (window.NOTES / READING / A2 / DAILY ...)
 *   QA English: rexon-qa-english/public/data-*.js (window.WEEKLY / QA_TOPICS / QA_PHRASE_BANK ...)
 * 兩邊的原始資料完全不動；這裡只讀取、正規化、輸出 src/data/vocabulary.json。
 * 網站資料更新後重跑 `npm run build:data` 即可。
 *
 * 用法：
 *   node scripts/build-vocab.mjs
 *   B2LAB_DIR=... QA_DIR=... node scripts/build-vocab.mjs
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { createContext, runInContext } from 'node:vm';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(HERE, '..');

const B2LAB_DIR = process.env.B2LAB_DIR || resolve(ROOT, '..', 'b2lab', 'public');
const QA_DIR =
  process.env.QA_DIR ||
  'G:/我的雲端硬碟/越南/品保課/儀器/rexon-qa-english/public';

const OUT = join(ROOT, 'src', 'data', 'vocabulary.json');

/* ---------- 讀取 window.X = ... 形式的資料檔 ---------- */
function loadGlobals(dir, files) {
  if (!existsSync(dir)) {
    console.warn(`[warn] 找不到資料夾，略過：${dir}`);
    return {};
  }
  const win = {};
  const ctx = createContext({ window: win, console });
  for (const f of files) {
    const p = join(dir, f);
    if (!existsSync(p)) {
      console.warn(`[warn] 找不到檔案，略過：${p}`);
      continue;
    }
    const code = readFileSync(p, 'utf8').replace(/^\uFEFF/, '');
    try {
      runInContext(code, ctx, { filename: p });
    } catch (e) {
      console.warn(`[warn] 解析失敗，略過 ${f}：${e.message}`);
    }
  }
  return win;
}

/* ---------- 小工具 ---------- */
const isStr = (v) => typeof v === 'string' && v.trim() !== '';
const hasCJK = (s) => /[\u4e00-\u9fff]/.test(s);
const clean = (s) => String(s).replace(/\s+/g, ' ').trim();

/* 英文「例句」的判斷。
   兩邊網站的資料裡，詞彙表詞條（"sampling inspection"、"Supplier Quality"）與
   教學註記（"encourage (v.) → encouragement (n.)"）跟真正的例句放在同一批物件裡，
   只看「有空格而且夠長」會把它們一起收進例句池，卡片就會出現不是句子的東西。
   這裡用結構特徵區分，不看任何關鍵字：
     1. 要有句末標點（. ? !，允許後面有引號或括號）—— 詞條不會有
     2. 至少 4 個字
     3. 不含全形括號／箭頭／勾叉這些教學標記
   長度上限放寬到 240，讓完整句子不會因為長就被丟掉（挑選時再用長度排序）。 */
const TEACHING_MARK = /[（）→＝｜✅❌]/;
const looksLikeSentence = (s) =>
  isStr(s) &&
  !hasCJK(s) &&
  /[A-Za-z]/.test(s) &&
  s.length >= 15 &&
  s.length <= 240 &&
  !TEACHING_MARK.test(s) &&
  /[.?!]["')\]]?\s*$/.test(s.trim()) &&
  s.trim().split(/\s+/).length >= 4;

// 英文詞條：不含中文、長度合理（可以是片語）
const looksLikeTerm = (s) =>
  isStr(s) && !hasCJK(s) && /^[A-Za-z0-9][A-Za-z0-9 '’./+()-]{1,40}$/.test(s.trim());

const norm = (s) => clean(s).toLowerCase();

/* ---------- 遞迴走訪：收句子（en/zh 或 en/cn 成對）＋收 level ---------- */
function walk(node, visit, inherited = {}) {
  if (node === null || typeof node !== 'object') return;
  if (Array.isArray(node)) {
    for (const item of node) walk(item, visit, inherited);
    return;
  }
  let ctx = inherited;
  if (isStr(node.level) && /^[ABC][12]\+?$/.test(node.level.trim())) {
    ctx = { ...inherited, level: node.level.trim().replace('+', '') };
  }
  /* QA 站自己把主題分成 sys／inst／doc／test／tour 五個 domain，
     其中 tour 是「帶客戶參觀工廠」的接待用語（動線、請戴安全眼鏡、小心腳步），
     不是品保／工程工作情境。沿著樹往下標記，這個子樹的句子不進 QA 例句池。 */
  if (isStr(node.domain) && node.domain.trim() === 'tour') {
    ctx = { ...ctx, hospitality: true };
  }
  visit(node, ctx);
  for (const v of Object.values(node)) walk(v, visit, ctx);
}

function harvestSentences(globals, bucket) {
  // 成對取值：en↔zh/cn、exEn↔exCn、ex↔exCn，不可交叉配對
  // （NOTES.vocab 同時有 cn=單字翻譯 與 exCn=例句翻譯，混用會配到錯的中文）
  const PAIRS = [
    ['en', 'zh'],
    ['en', 'cn'],
    ['exEn', 'exCn'],
    ['ex', 'exCn'],
    ['better', 'zh'],
  ];
  // 例句翻譯至少要有 8 個字，太短的通常是「單字翻譯」不是「句子翻譯」
  const okZh = (s) => isStr(s) && hasCJK(s) && clean(s).length >= 8;
  for (const root of Object.values(globals)) {
    walk(root, (obj, ctx) => {
      if (ctx.hospitality) return; // 客戶參訪接待語不當作工作例句
      let taken = false;
      for (const [ek, zk] of PAIRS) {
        const en = obj[ek];
        if (!looksLikeSentence(en)) continue;
        const zh = obj[zk];
        if (okZh(zh)) {
          bucket.push({ en: clean(en), zh: clean(zh), level: ctx.level || '' });
          taken = true;
          break;
        }
      }
      if (taken) return;
      // 只有英文、沒有可信翻譯的也留（更多例句時可用，但排在有翻譯的後面）
      for (const [ek] of PAIRS) {
        if (looksLikeSentence(obj[ek])) {
          bucket.push({ en: clean(obj[ek]), zh: '', level: ctx.level || '' });
          return;
        }
      }
    });
  }
  // 去重：同一句英文出現多次時，保留有中文翻譯的那一筆
  const byEn = new Map();
  for (const s of bucket) {
    const k = s.en.toLowerCase();
    const prev = byEn.get(k);
    if (!prev || (!prev.zh && s.zh)) byEn.set(k, s);
  }
  return [...byEn.values()];
}

/* ---------- 詞形變化：讓 compensate 對得到 compensated / compensating ---------- */
function variants(word) {
  const w = norm(word);
  const out = new Set([w]);
  if (/[^aeiou]y$/.test(w)) out.add(w.slice(0, -1) + 'ies');
  out.add(w + 's');
  out.add(w + 'es');
  if (w.endsWith('e')) {
    out.add(w + 'd');
    out.add(w.slice(0, -1) + 'ing');
    out.add(w.slice(0, -1) + 'ion');
    out.add(w.slice(0, -1) + 'or');
  } else {
    out.add(w + 'ed');
    out.add(w + 'ing');
  }
  return [...out];
}

const escRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

function matcherFor(word) {
  const vs = variants(word).sort((a, b) => b.length - a.length).map(escRe);
  return new RegExp(`(^|[^a-z])(${vs.join('|')})([^a-z]|$)`, 'i');
}

/* ---------- 讀取兩站資料 ---------- */
const b2 = loadGlobals(B2LAB_DIR, [
  'data-notes.js',
  'data-reading.js',
  'data-a2.js',
  'data-daily.js',
  'data-listen.js',
  'data-focus.js',
  'data-book.js',
]);

const qa = loadGlobals(QA_DIR, [
  'data-weekly.js',
  'data-qa.js',
  'data-qalife.js',
  'data-brief.js',
  'data-phrases.js',
  'data-scenes.js',
  'data-instruments.js',
  'data-reading.js',
]);

const genSentences = harvestSentences(b2, []);
const qaSentences = harvestSentences(qa, []);
console.log(`[data] general 句子 ${genSentences.length} 句、QA 句子 ${qaSentences.length} 句`);

/* ---------- 建立單字條目 ---------- */
/** @type {Map<string, any>} */
const words = new Map();

function entry(word) {
  const key = norm(word);
  if (!words.has(key)) {
    words.set(key, {
      id: key,
      word: clean(word),
      pos: '',
      level: '',
      ipa: '',
      translation: '',
      definition: '',
      category: '',
      source: '',
      lesson: '',
      bookId: '',
      topicId: '',
      general: [],
      qa: [],
      related: [],
    });
  }
  return words.get(key);
}

const pushEx = (arr, ex) => {
  if (!ex || !looksLikeSentence(ex.en)) return;
  if (arr.some((x) => x.en.toLowerCase() === ex.en.toLowerCase())) return;
  arr.push({ en: clean(ex.en), zh: ex.zh ? clean(ex.zh) : '' });
};

/* 1) B2 Lab — window.NOTES.vocab（課堂單字，688 筆） */
const NOTES = b2.NOTES || {};
for (const v of NOTES.vocab || []) {
  if (!isStr(v.w)) continue;
  const e = entry(v.w);
  e.pos ||= isStr(v.pos) ? clean(v.pos) : '';
  e.ipa ||= isStr(v.ipa) ? clean(v.ipa) : '';
  e.translation ||= isStr(v.cn) ? clean(v.cn) : '';
  e.definition ||= isStr(v.def) ? clean(v.def) : '';
  e.category ||= isStr(v.cat) ? clean(v.cat) : '';
  e.source = e.source === 'qa' ? 'both' : 'general';
  pushEx(e.general, { en: v.exEn, zh: v.exCn });
}

/* 2) B2 Lab — window.NOTES.kw（重點字＋多個例句），tag 形如「補償 · v.」 */
for (const k of NOTES.kw || []) {
  if (!isStr(k.w)) continue;
  const e = entry(k.w);
  e.ipa ||= isStr(k.ipa) ? clean(k.ipa) : '';
  if (isStr(k.tag)) {
    const [cn, pos] = k.tag.split('·').map((x) => clean(x || ''));
    e.translation ||= cn || '';
    e.pos ||= pos || '';
  }
  e.source = e.source === 'qa' ? 'both' : e.source || 'general';
  for (const ex of k.exs || []) pushEx(e.general, { en: ex.en, zh: ex.cn ?? ex.zh });
}

/* 3) 課堂出處：NOTES.sources = { word: "20260811 補償用語與效率詞彙" } */
const lessonGroups = new Map();
for (const [w, lesson] of Object.entries(NOTES.sources || {})) {
  const key = norm(w);
  if (words.has(key)) words.get(key).lesson = clean(lesson);
  if (!lessonGroups.has(lesson)) lessonGroups.set(lesson, []);
  lessonGroups.get(lesson).push(key);
}

/* 4) QA English — 詞條（WEEKLY.terms / QA_TOPICS / 其他有 en+zh 的名詞條目） */
function addQaTerm(term, zh, def) {
  if (!looksLikeTerm(term)) return;
  const e = entry(term);
  e.translation ||= isStr(zh) ? clean(zh) : '';
  if (isStr(def)) {
    // WEEKLY 的 def 是「English. 中文。」合併字串，只取英文那半
    const enPart = clean(String(def).split(/(?=[\u4e00-\u9fff])/)[0]);
    e.definition ||= enPart || clean(def);
  }
  e.category ||= 'qa';
  e.source = e.source === 'general' ? 'both' : 'qa';
}

// 通用詞條抓取：QA 站很多地方都是 { en: "詞", zh: "中文" }
// （WEEKLY.terms / PHRASE_GROUPS.terms / QA_LIFE_TAGS / QA_NPD_STAGES / INSTRUMENTS …）
// 只認「短英文詞條 + 短中文翻譯」，句子由前面的 harvestSentences 處理。
const shortZh = (s) => isStr(s) && hasCJK(s) && clean(s).length <= 24 && !/[。！？]/.test(s);
for (const root of Object.values(qa)) {
  walk(root, (obj) => {
    const term = obj.en ?? obj.term;
    const zh = obj.zh ?? obj.cn;
    if (looksLikeTerm(term) && shortZh(zh)) addQaTerm(term, zh, obj.def && (obj.def.en || obj.def));
  });
}

for (const block of qa.WEEKLY || []) {
  for (const t of block.terms || []) addQaTerm(t.en, t.zh, t.def);
}
for (const t of qa.QA_TOPICS || []) {
  addQaTerm(t.term, t.zh, t.def && t.def.en);
  const e = words.get(norm(t.term || ''));
  if (e) {
    e.topicId = t.id || '';
    for (const kt of t.keyTerms || []) if (looksLikeTerm(kt)) e.related.push(clean(kt));
  }
}

/* 知識主題 id：讓 QA 站的「完整學習」直接開對應的主題頁，而不是只帶進搜尋框。
   先用 term 直接對，對不到再看這個字有沒有出現在某個主題的 keyTerms 裡。 */
for (const t of qa.QA_TOPICS || []) {
  for (const kt of t.keyTerms || []) {
    const hit = words.get(norm(kt));
    if (hit && !hit.topicId) hit.topicId = t.id || '';
  }
}
for (const issue of qa.QA_ISSUES || []) {
  for (const v of issue.vocab || []) addQaTerm(v.en || v.term, v.zh, v.def);
}

/* 5) 補上例句：把兩邊的句子池掃過一遍，替每個單字找例句 */
const MAX_EX = 6;
for (const e of words.values()) {
  const re = matcherFor(e.word);
  if (e.general.length < MAX_EX) {
    for (const s of genSentences) {
      if (e.general.length >= MAX_EX) break;
      if (re.test(s.en)) {
        pushEx(e.general, s);
        if (!e.level && s.level) e.level = s.level;
      }
    }
  }
  for (const s of qaSentences) {
    if (e.qa.length >= MAX_EX) break;
    if (re.test(s.en)) pushEx(e.qa, s);
  }
  if (e.qa.length && e.source === 'general') e.source = 'both';

  /* 首張卡只放一句，所以要挑最好的那句放在 [0]：
     有中文翻譯 > 沒有；長度適中（一到三行）> 過長或過短。
     「更多例句 / QA 例句」取前三句，順序一樣受惠。
     排序穩定，同分維持原本的出現順序。 */
  e.general = rankExamples(e.general);
  e.qa = rankExamples(e.qa);
}

function rankExamples(list) {
  return list
    .map((ex, i) => ({ ex, i, score: exampleScore(ex) }))
    .sort((a, b) => b.score - a.score || a.i - b.i)
    .map((x) => x.ex);
}

function exampleScore(ex) {
  let score = 0;
  if (ex.zh) score += 100; // 沒有中文翻譯的句子在卡片上只有一半資訊
  const len = ex.en.length;
  if (len >= 40 && len <= 130) score += 20;
  else if (len >= 25 && len <= 170) score += 10;
  const wordCount = ex.en.split(/\s+/).length;
  if (wordCount >= 6 && wordCount <= 24) score += 10;
  return score;
}

/* 6) 相關單字：同一課的字 ＋ 同字根的字 */
const allKeys = [...words.keys()];
const stem = (w) =>
  w.replace(/(ations|ation|ments|ment|ing|ed|es|s|ion|ive|ance|able)$/, '').replace(/e$/, '');
for (const e of words.values()) {
  // 優先序：同字根的字 → 詞條自己列的 keyTerms → 同一課的字
  const rel = new Set();
  const st = stem(e.id);
  if (st.length >= 5) {
    for (const k of allKeys) {
      if (k === e.id) continue;
      if (k.startsWith(st) || stem(k) === st) rel.add(words.get(k).word);
    }
  }
  for (const r of e.related) if (rel.size < 8) rel.add(clean(r));
  if (e.lesson) {
    for (const k of lessonGroups.get(e.lesson) || []) {
      if (k === e.id || rel.size >= 8) continue;
      if (words.has(k)) rel.add(words.get(k).word);
    }
  }
  e.related = [...rel].filter((r) => norm(r) !== e.id).slice(0, 6);
}


/* 課本課次 id：讓 LINE 的「完整學習」可以直接跳到那一課，而不是只彈出字卡。
   NOTES.sources 的值長得像「20260811 補償用語與效率詞彙」，BOOK 的 id 是 bk20260811。
   對不到的就留空，深連結會退回原本只開字卡的行為。 */
const BOOK_IDS = new Set((b2.BOOK?.lessons || []).map((l) => l.id));
for (const e of words.values()) {
  const m = /^(\d{8})/.exec(e.lesson || '');
  if (m && BOOK_IDS.has(`bk${m[1]}`)) e.bookId = `bk${m[1]}`;
}

/* 顯示格式正規化：QA 站的詞條多半是標題式大寫（Supplier、Control Plan），
   放在單字卡上看起來像專有名詞。這裡不做硬性規則，改用語料當證據 ——
   只有「同一個字真的有人在句子中間寫成小寫」時才轉小寫。
   縮寫（AQL、CMM、8D、IPQC）與只在句首出現過的字一律保留原樣。 */
const lowerEvidence = new Set();
for (const s of [...genSentences, ...qaSentences]) {
  const toks = s.en.split(/[^A-Za-z'-]+/).filter(Boolean);
  // 從第二個字開始，句首大寫不算證據
  for (let i = 1; i < toks.length; i++) {
    if (/^[a-z][a-z'-]*$/.test(toks[i])) lowerEvidence.add(toks[i]);
  }
}

/* 一個詞條要嘛整串轉小寫、要嘛完全不動 —— 避免出現
   「CMM (Coordinate measuring machine)」這種半大寫半小寫的結果。
   判斷方式：每個大寫開頭的字，要嘛是有語料佐證的普通字、要嘛是純縮寫（CMM、DFT、
   ISO），只要出現任何一個「大寫開頭但兩者都不是」的字（例如 Cross-Hatch、
   沒有佐證的 Coordinate），整串保留原樣。 */
const isAcronym = (t) => /^[^a-z]*[A-Z]{2,}[^a-z]*$/.test(t);
const plainCap = (t) => /^([^A-Za-z]*)([A-Z][a-z]+)([^A-Za-z]*)$/.exec(t);

function displayForm(word) {
  const toks = String(word ?? '').split(' ');
  let changed = false;
  const out = [];
  for (const tok of toks) {
    if (!/^[^A-Za-z]*[A-Z]/.test(tok)) {
      out.push(tok); // 本來就小寫或數字開頭
      continue;
    }
    if (isAcronym(tok)) {
      out.push(tok); // 縮寫保留
      continue;
    }
    const m = plainCap(tok);
    if (!m || !lowerEvidence.has(m[2].toLowerCase())) return String(word ?? ''); // 有疑慮就整串不動
    out.push(m[1] + m[2].toLowerCase() + m[3]);
    changed = true;
  }
  return changed ? out.join(' ') : String(word ?? '');
}

let renamed = 0;
for (const e of words.values()) {
  const shown = displayForm(e.word);
  if (shown !== e.word) renamed++;
  e.word = shown;
  e.related = (e.related || []).map(displayForm);
}
console.log(`[data] 詞條顯示格式正規化 ${renamed} 筆`);

/* 7) 收尾 */
const list = [...words.values()]
  .filter((e) => e.translation || e.definition || e.general.length || e.qa.length)
  .map((e) => {
    if (!e.source) e.source = 'general';
    if (!e.category) e.category = e.source === 'qa' ? 'qa' : 'daily';
    // 只保留需要的欄位長度，控制 bundle 大小
    e.general = e.general.slice(0, MAX_EX);
    e.qa = e.qa.slice(0, MAX_EX);
    return e;
  })
  .sort((a, b) => a.id.localeCompare(b.id));

/* generatedAt 只在「單字內容真的變了」時才更新。
   每次都寫新時間戳的話，git 會天天顯示這個檔案有改動，
   自動同步排程的「沒變就不部署」判斷就永遠不會成立。 */
const wordsJson = JSON.stringify(list);
let generatedAt = new Date().toISOString();
let unchanged = false;
try {
  const prev = JSON.parse(readFileSync(OUT, 'utf8'));
  if (JSON.stringify(prev.words) === wordsJson) {
    generatedAt = prev.generatedAt || generatedAt;
    unchanged = true;
  }
} catch {
  /* 第一次產生、或舊檔壞掉，就當作有變 */
}

const payload = {
  generatedAt,
  sources: {
    b2lab: B2LAB_DIR,
    qa: QA_DIR,
  },
  count: list.length,
  words: list,
};

writeFileSync(OUT, JSON.stringify(payload), 'utf8');

const stats = {
  changed: !unchanged,
  words: list.length,
  withQaExamples: list.filter((e) => e.qa.length).length,
  withGeneralExamples: list.filter((e) => e.general.length).length,
  withTranslation: list.filter((e) => e.translation).length,
  withLevel: list.filter((e) => e.level).length,
  bytes: JSON.stringify(payload).length,
};
console.log('[out]', OUT);
console.log('[stats]', stats);
