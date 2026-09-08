#!/usr/bin/env node
/* ============================================================
   B2 Read — 關聯學習系統：建置工具
   用法：
     node tools/build-rel.js              # 增量：只處理 data-rel.js 還沒收錄的課
     node tools/build-rel.js --rebuild    # 一次性 Backfill：重掃全部既有課（或詞庫改過之後）
     node tools/build-rel.js --dry-run    # 只印報告，不寫檔
     node tools/build-rel.js --verbose    # 額外列出每課選出的關聯

   輸入：public/data-book.js（唯一的教材來源）、tools/rel-lexicon.js（近義／反義／詞族知識）
   輸出：public/data-rel.js → window.REL = { v, built, lessons:[已處理課次], items:[關聯], byLesson:{課次:[關聯 id]} }

   原則（使用者 2026-09-08 指定）：
   - 只整理「已經學過」的內容：任何關聯的成員都必須是課本裡的 vocab / vocab2 / vocabReview / phrases / colloc。
     沒學過的字（例如 escalator、efficiency）即使在詞庫裡也不會出現。
   - 例句一律取自課本既有句子（vocab.ex / phrases.ex / cmp.ex / grammar.exs / extra.exs / 閱讀文章），不捏造。
   - 完全 rule-based、deterministic：同樣的輸入永遠得到同樣的輸出；沒有 Math.random、沒有 AI 呼叫。
   - idempotent：關聯有 canonical key（成員排序後組成），重跑不會產生重複；增量模式保留既有關聯、只加新課帶來的。
   - 每課最多挑 6 組高價值關聯（byLesson），資料可以多、呈現要少。
   ============================================================ */
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const BOOK_FILE = path.join(ROOT, 'public', 'data-book.js');
const REL_FILE = path.join(ROOT, 'public', 'data-rel.js');
const LEX = require('./rel-lexicon.js');

const argv = process.argv.slice(2);
const REBUILD = argv.includes('--rebuild');
const DRY = argv.includes('--dry-run');
const VERBOSE = argv.includes('--verbose');
const PER_LESSON_MAX = 6;
const PER_LESSON_MIN_SCORE = 60;

/* ---------- 讀資料 ---------- */
function loadBook() {
  const w = {};
  new Function('window', fs.readFileSync(BOOK_FILE, 'utf8'))(w);
  const lessons = ((w.BOOK || {}).lessons || []).slice().sort((a, b) => String(a.date).localeCompare(String(b.date)) || String(a.id).localeCompare(String(b.id)));
  return lessons;
}
function loadExistingRel() {
  if (REBUILD || !fs.existsSync(REL_FILE)) return { lessons: [], items: [] };
  try {
    const w = {};
    new Function('window', fs.readFileSync(REL_FILE, 'utf8'))(w);
    return { lessons: (w.REL && w.REL.lessons) || [], items: (w.REL && w.REL.items) || [] };
  } catch (e) { return { lessons: [], items: [] }; }
}

/* ---------- 正規化 / 詞形 ---------- */
const PH = new Set(['sb', 'sth', 'somebody', 'someone', 'something', "one's", "sb's", 'one', 'v', 'v-ing', 'ving', 'n', 'adj', 'adv', 'o', 's', '…', '...']);
const isPH = t => PH.has(t);
function norm(s) {
  return String(s || '').toLowerCase()
    .replace(/（[^）]*）|\([^)]*\)/g, ' ')            // 去括號註記
    .replace(/[／/]/g, ' / ')
    .replace(/\bsomebody\b|\bsomeone\b/g, 'sb').replace(/\bsomething\b/g, 'sth')
    .replace(/[^a-z0-9'\- /+…]/g, ' ')
    .replace(/\s+/g, ' ').trim();
}
/* 片語欄的顯示字串：去掉「(phr.) 落後」這類詞性註記與中文尾巴 */
const POSTAG = /\((?:n|v|adj|adv|phr|idiom|prep|modal)[^)]*\)/gi;
const cleanEn = s => String(s || '')
  .replace(/\/[^\/]*[^\x00-\x7F][^\/]*\//g, ' ')        // 去音標 /blɑːkt/
  .replace(POSTAG, ' ')
  .replace(/[　-鿿，。；：、（）「」]+.*$/, '')             // 去中文尾巴
  .replace(/\s+/g, ' ').trim();
/* 片語的 canonical key：去佔位符與「+」，讓 be responsible for / be responsible for + N / V-ing 併成同一個 */
const pkey = s => norm(cleanEn(s)).replace(/\+/g, ' ').split(' ').filter(t => t && !isPH(t)).join(' ').replace(/^\/ | \/$/g, '').trim();
/* 課本片語常寫成「persuade / convince sb to + V」「apply / use sunscreen」「arrive at / in」— 展開成獨立片語供比對課文 */
function splitAlternatives(p) {
  const s = norm(p).replace(/\s*\+\s*/g, ' ').replace(/\s+/g, ' ').trim();
  if (!/ \/ /.test(s)) return [s];
  const parts = s.split(' / ').map(x => x.trim()).filter(Boolean);
  const last = parts[parts.length - 1].split(' ');
  const headOnly = parts.slice(0, -1).every(x => x.split(' ').length === 1);
  if (headOnly && last.length > 1) { const tail = last.slice(1).join(' '); return parts.map((x, i) => i < parts.length - 1 ? x + ' ' + tail : x); }
  // 中段／尾端交替（arrive at / in + 大地點、be in charge of n / v-ing）：以第一段為主幹，單字段落取代主幹最後一個字
  const first = parts[0].split(' ');
  return [parts[0]].concat(parts.slice(1).map(x => x.split(' ').length === 1 ? first.slice(0, -1).concat([x]).join(' ') : x));
}
const IRREG = {
  be: ['am', 'is', 'are', 'was', 'were', 'been', 'being'], have: ['has', 'had', 'having'], do: ['does', 'did', 'done', 'doing'],
  go: ['goes', 'went', 'gone', 'going'], get: ['gets', 'got', 'gotten', 'getting'], make: ['makes', 'made', 'making'],
  take: ['takes', 'took', 'taken', 'taking'], give: ['gives', 'gave', 'given', 'giving'], come: ['comes', 'came', 'coming'],
  see: ['sees', 'saw', 'seen', 'seeing'], say: ['says', 'said', 'saying'], tell: ['tells', 'told', 'telling'],
  think: ['thinks', 'thought', 'thinking'], buy: ['buys', 'bought', 'buying'], bring: ['brings', 'brought', 'bringing'],
  feel: ['feels', 'felt', 'feeling'], keep: ['keeps', 'kept', 'keeping'], leave: ['leaves', 'left', 'leaving'],
  lose: ['loses', 'lost', 'losing'], pay: ['pays', 'paid', 'paying'], put: ['puts', 'putting'], read: ['reads', 'reading'],
  run: ['runs', 'ran', 'running'], sit: ['sits', 'sat', 'sitting'], speak: ['speaks', 'spoke', 'spoken', 'speaking'],
  spend: ['spends', 'spent', 'spending'], stand: ['stands', 'stood', 'standing'], write: ['writes', 'wrote', 'written', 'writing'],
  wear: ['wears', 'wore', 'worn', 'wearing'], break: ['breaks', 'broke', 'broken', 'breaking'], choose: ['chooses', 'chose', 'chosen', 'choosing'],
  drive: ['drives', 'drove', 'driven', 'driving'], eat: ['eats', 'ate', 'eaten', 'eating'], fall: ['falls', 'fell', 'fallen', 'falling'],
  forget: ['forgets', 'forgot', 'forgotten', 'forgetting'], hold: ['holds', 'held', 'holding'], know: ['knows', 'knew', 'known', 'knowing'],
  lend: ['lends', 'lent', 'lending'], meet: ['meets', 'met', 'meeting'], send: ['sends', 'sent', 'sending'], sell: ['sells', 'sold', 'selling'],
  show: ['shows', 'showed', 'shown', 'showing'], shut: ['shuts', 'shutting'], sleep: ['sleeps', 'slept', 'sleeping'],
  teach: ['teaches', 'taught', 'teaching'], understand: ['understands', 'understood', 'understanding'], win: ['wins', 'won', 'winning'],
  become: ['becomes', 'became', 'becoming'], begin: ['begins', 'began', 'begun', 'beginning'], catch: ['catches', 'caught', 'catching'],
  deal: ['deals', 'dealt', 'dealing'], grow: ['grows', 'grew', 'grown', 'growing'], hit: ['hits', 'hitting'], hurt: ['hurts', 'hurting'],
  let: ['lets', 'letting'], mean: ['means', 'meant', 'meaning'], rise: ['rises', 'rose', 'risen', 'rising'], ring: ['rings', 'rang', 'rung', 'ringing'],
  throw: ['throws', 'threw', 'thrown', 'throwing'], wake: ['wakes', 'woke', 'woken', 'waking'], find: ['finds', 'found', 'finding'],
  cost: ['costs', 'costing'], cut: ['cuts', 'cutting'], set: ['sets', 'setting'], lead: ['leads', 'led', 'leading'], build: ['builds', 'built', 'building'],
  feed: ['feeds', 'fed', 'feeding'], fly: ['flies', 'flew', 'flown', 'flying'], hear: ['hears', 'heard', 'hearing'], light: ['lights', 'lit', 'lighting'],
  ride: ['rides', 'rode', 'ridden', 'riding'], shake: ['shakes', 'shook', 'shaken', 'shaking'], steal: ['steals', 'stole', 'stolen', 'stealing'],
  stick: ['sticks', 'stuck', 'sticking'], swim: ['swims', 'swam', 'swum', 'swimming'], draw: ['draws', 'drew', 'drawn', 'drawing'],
  blow: ['blows', 'blew', 'blown', 'blowing'], freeze: ['freezes', 'froze', 'frozen', 'freezing'], forgive: ['forgives', 'forgave', 'forgiven', 'forgiving'],
  overcome: ['overcomes', 'overcame', 'overcoming'], withdraw: ['withdraws', 'withdrew', 'withdrawn', 'withdrawing'], upset: ['upsets', 'upsetting'],
};
function forms(w) {
  const out = new Set([w]);
  (IRREG[w] || []).forEach(f => out.add(f));
  if (w.length >= 3) {
    out.add(w + 's'); out.add(w + 'es'); out.add(w + 'ed'); out.add(w + 'ing'); out.add(w + 'd');
    if (/[^aeiou]y$/.test(w)) { out.add(w.slice(0, -1) + 'ies'); out.add(w.slice(0, -1) + 'ied'); }
    if (/e$/.test(w)) out.add(w.slice(0, -1) + 'ing');
    if (/[^aeiou][aeiou][^aeiouwxy]$/.test(w)) { const c = w[w.length - 1]; out.add(w + c + 'ed'); out.add(w + c + 'ing'); }
    if (/er$/.test(w)) { out.add(w + 'r'); }
    out.add(w + 'ly'); out.add(w + 'er'); out.add(w + 'est');
  }
  return [...out];
}
const reEsc = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
/* 片語 → 可比對課文的 regex：忽略佔位符，允許中間夾 0–2 個字，最後一個實詞允許變化 */
function phraseRegex(p) {
  const toks = norm(p).replace(/\+/g, ' ').split(' ').filter(t => t && !isPH(t) && !/^(the|a|an|…|\/)$/.test(t));
  if (!toks.length) return null;
  const parts = toks.map(t => '(?:' + forms(t).map(reEsc).join('|') + ')');
  return new RegExp('\\b' + parts.join('\\s+(?:\\S+\\s+){0,2}?') + '\\b', 'i');
}

/* ---------- 建內容索引（所有課，一次） ---------- */
function buildIndex(lessons) {
  const words = {};   // lemma -> {en, cn, pos:Set, lessons:[{id,date,ex,exCn}], kind:'w'}
  const phrases = {}; // norm(p) -> {en, cn, lessons:[{id,date,ex,exCn}], kind:'p'}
  const addW = (v, b) => {
    const k = norm(v.w); if (!k) return;
    const e = words[k] = words[k] || { en: String(v.w).trim(), cn: '', pos: new Set(), lessons: [], kind: 'w' };
    if (!e.cn && v.cn) e.cn = String(v.cn).replace(/（.*?）/g, '').replace(/\(.*?\)/g, '').trim();
    if (v.pos) e.pos.add(String(v.pos));
    e.lessons.push({ id: b.id, date: b.date, ex: v.ex || '', exCn: v.exCn || '' });
  };
  const addP = (p, b, def) => {
    const raw = cleanEn(p.p); if (!raw) return;
    const k = pkey(raw);
    if (!k || (k.split(' ').length < 2 && !/-/.test(k))) return; // 去掉佔位符後至少兩個字（「progress (n.)」這種不是片語）
    const e = phrases[k] = phrases[k] || { en: raw, cn: '', lessons: [], kind: 'p', alts: splitAlternatives(raw) };
    if (!e.cn && p.cn) e.cn = String(p.cn).replace(/（詳見[^）]*）/g, '').trim();
    if (!e.def && (def || p.def)) e.def = def || p.def;
    e.lessons.push({ id: b.id, date: b.date, ex: p.ex || '', exCn: p.exCn || '' });
  };
  lessons.forEach(b => {
    (b.vocab || []).forEach(v => addW(v, b));
    (b.vocab2 || []).forEach(v => addW(v, b));
    (b.vocabReview || []).forEach(v => addW(v, b));
    // 老師比較表裡的字也是「學過的」（有些只出現在比較表，沒列進單字表）；表頭常是大寫、偶有「Illness / Sickness」兩字一列
    (b.cmp || []).forEach(r => cleanEn(r.u).split(/\s*(?:\/|\bvs\.?)\s*/i).filter(Boolean).forEach(u => { const w = pkey(u); if (w) addW({ w, cn: r.cn || '', ex: r.ex, exCn: r.exCn, pos: '' }, b); }));
    (b.phrases || []).forEach(p => addP(p, b));
    (b.colloc || []).forEach(p => addP(p, b, p.def));
  });
  Object.values(words).forEach(e => { e.pos = [...e.pos]; e.lessons.sort((a, c) => a.date.localeCompare(c.date)); });
  Object.values(phrases).forEach(e => e.lessons.sort((a, c) => a.date.localeCompare(c.date)));
  // 例句池：課本裡所有真實句子（含來源），供關聯挑代表例句用
  const sentences = [];
  const push = (en, cn, b, src) => { en = String(en || '').replace(/<[^>]*>/g, '').trim(); if (en) sentences.push({ en, cn: String(cn || '').replace(/<[^>]*>/g, '').trim(), id: b.id, date: b.date, src }); };
  lessons.forEach(b => {
    (b.vocab || []).concat(b.vocab2 || []).forEach(v => push(v.ex, v.exCn, b, 'vocab'));
    (b.phrases || []).forEach(p => push(p.ex, p.exCn, b, 'phrase'));
    (b.cmp || []).forEach(r => push(r.ex, r.exCn, b, 'cmp'));
    (b.grammar || []).forEach(g => (g.exs || []).forEach(x => push(x.en, x.cn, b, 'grammar')));
    (b.extra || []).forEach(x => (x.exs || []).forEach(s => push(s.en, s.cn, b, 'extra')));
    (b.hw || []).forEach(h => push(h.ok || h.fix, h.cn, b, 'hw'));
    (b.reading || []).forEach(r => (r.paras || []).forEach(p => {
      const en = String(p.en || '').replace(/<[^>]*>/g, '');
      // 只拆英文，中譯是整段的，不對齊 → 閱讀句子不附中譯
      en.split(/(?<=[.!?])\s+(?=[A-Z"“])/).forEach(s => push(s, '', b, 'reading'));
    }));
  });
  return { words, phrases, sentences };
}

/* 找一句「真的包含這個字／片語」的例句：優先該項目自己的 ex，再從例句池找（優先最新課、優先有中譯） */
function findExample(idx, key, kind, preferLessonIds) {
  const e = (kind === 'p' ? idx.phrases : idx.words)[key];
  const own = (e ? e.lessons : []).filter(l => l.ex).sort((a, c) => c.date.localeCompare(a.date));
  if (own.length) { const l = own.find(x => (preferLessonIds || []).includes(x.id)) || own[0]; return { en: l.ex, cn: l.exCn, id: l.id }; }
  const res = kind === 'p' ? (e ? e.alts : [key]).map(phraseRegex).filter(Boolean) : [new RegExp('\\b(?:' + forms(key).map(reEsc).join('|') + ')\\b', 'i')];
  if (!res.length) return null;
  const hits = idx.sentences.filter(s => s.en.length < 160 && res.some(re => re.test(s.en)))
    .sort((a, c) => (c.cn ? 1 : 0) - (a.cn ? 1 : 0) || c.date.localeCompare(a.date));
  return hits.length ? { en: hits[0].en, cn: hits[0].cn, id: hits[0].id } : null;
}

/* ---------- 關聯物件 ---------- */
const REL = []; const byKey = {};
function lessonsOf(idx, members) {
  const ids = new Set();
  members.forEach(m => ((m.kind === 'p' ? idx.phrases : idx.words)[m.key] || { lessons: [] }).lessons.forEach(l => ids.add(l.id)));
  return [...ids].sort();
}
function addRel(o) {
  if (byKey[o.key]) { // 合併：已存在（例如 cmp 與詞庫同一組）→ 補齊缺的欄位
    const t = byKey[o.key];
    if (!t.diff.length && o.diff.length) t.diff = o.diff;
    if (!t.tip && o.tip) t.tip = o.tip;
    o.pats.forEach(p => { if (!t.pats.includes(p)) t.pats.push(p); });
    if (!t.exs.length) t.exs = o.exs;
    t.score = Math.max(t.score, o.score);
    return t;
  }
  byKey[o.key] = o; REL.push(o); return o;
}
function mkMember(idx, key, kind) {
  const e = (kind === 'p' ? idx.phrases : idx.words)[key];
  return { key, kind, en: e ? e.en : key, cn: e ? e.cn : '' };
}
function title(members, sep) { return members.map(m => m.en).join(sep); }

/* A. 老師的比較表 cmp[] → 近義／易混淆（最高分：差異說明是老師寫的） */
const cmpConcept = s => {
  let t = String(s || '').trim();
  for (let i = 0; i < 5; i++) t = t
    .replace(/^[IVX]+[-A-Z]*\.\s*|^\d+\.\s*|^[📌💡⭐★]+\s*|^part\s*\d+[:：]\s*/i, '')
    .replace(/^[一二三四五六七八九十～~、]+/, '')
    .replace(/^(核心比較|核心詞彙辨析|易混淆單字解析|易混淆單字|易混淆比較|重點比較|老師獨家解析|課堂補充|核心詞彙|辨析)[:：]?\s*/, '').trim();
  return t.replace(/[（(].*$/, '').replace(/\s*(vocabulary|confusing pairs|tricky pairs|差異比較)\s*$/i, '').trim();
};
function fromCmp(lessons, idx) {
  let n = 0;
  lessons.forEach(b => {
    // 一列寫「Illness / Sickness」→ 拆成兩列（共用同一段差異說明）；拆完若跟其他列重複就去掉
    // 一列寫「contain vs include」→ 這一列本身就是一組，直接成組
    const rows = []; const seenKey = new Set(); let groups = [];
    (b.cmp || []).forEach(r => {
      const u0 = cleanEn(r.u);
      if (/\bvs\.?\b/i.test(u0)) {
        const g = u0.split(/\s*\bvs\.?\s*/i).map(u => ({ ...r, u: u.toLowerCase(), key: pkey(u) })).filter(x => x.key && (idx.words[x.key] || idx.phrases[x.key]));
        if (g.length >= 2) groups.push({ rows: g, label: g.map(x => x.u).join(' vs. ') });
        return;
      }
      u0.split(/\s*\/\s*/).filter(Boolean).forEach(u => {
        const key = pkey(u); if (!key || seenKey.has(key) || !(idx.words[key] || idx.phrases[key])) return;   // 「put off + V-ing」與「put off」同 key → 併一列
        seenKey.add(key); rows.push({ ...r, u: u.toLowerCase(), key });
      });
    });
    const vsGroups = groups; groups = [];
    if (rows.length < 2 && !vsGroups.length) return;
    const rawTitle = String(b.cmpTitle || '');
    const parts = rawTitle.split(/＋|\+|；|;/).map(s => s.trim()).filter(Boolean);
    if (parts.length > 1) {
      // 標題含「＋」：依各段標題配字（Stuck vs. Blocked ＋ Satisfied vs. Satisfactory）；段落配不到字就不硬湊
      parts.forEach(pt => { const nt = ' ' + norm(pt) + ' '; const g = rows.filter(r => nt.includes(' ' + r.key + ' ')); if (g.length >= 2) groups.push({ rows: g, label: pt }); });
    }
    if (!groups.length && rows.length >= 6) {
      // 「Tricky Pairs」這種多對混一表：先用詞庫的近義／反義組切，剩下的依表格順序兩兩一組
      const left = rows.slice(); const sets = LEX.SYN.map(s => s.m.map(norm)).concat(LEX.ANT.map(p => p.map(norm)));
      sets.forEach(set => { const g = left.filter(r => set.includes(r.key)); if (g.length >= 2) { groups.push({ rows: g, label: g.map(r => r.u).join(' vs. ') }); g.forEach(r => left.splice(left.indexOf(r), 1)); } });
      for (let i = 0; i + 1 < left.length; i += 2) groups.push({ rows: [left[i], left[i + 1]], label: left[i].u + ' vs. ' + left[i + 1].u });
    }
    if (!groups.length && rows.length >= 2) groups = [{ rows, label: rawTitle }];
    groups = groups.concat(vsGroups);
    const warn = b.cmpWarn && typeof b.cmpWarn === 'object' ? b.cmpWarn : null;
    groups.forEach(({ rows: g, label }) => {
      const members = g.map(r => { const kind = idx.words[r.key] ? 'w' : 'p'; const m = mkMember(idx, r.key, kind); if (r.cn) m.cn = r.cn; return m; })
        .sort((a, c) => a.key.localeCompare(c.key));
      // 概念名：標題的中文開頭（「默契的四種說法 chemistry / rapport…」→「默契的四種說法」）；沒有中文就用英文標題；都沒有就用成員中文
      let concept = cmpConcept(label);
      const head = concept.match(/^[^A-Za-z(（]+/);
      if (head && head[0].trim().length >= 2) concept = head[0].trim().replace(/[：:、，]+$/, '');
      if (concept.length > 28) concept = '';   // 標題太長就不當概念名（UI 會改顯示成員中文）
      addRel({
        key: 'syn:' + members.map(m => m.key).join('|'), type: 'syn',
        title: title(members, ' ↔ '), members, concept: concept.slice(0, 40),
        diff: g.map(r => ({ en: r.u, cn: String(r.sc || r.cn || '').trim() })).filter(d => d.cn),
        tip: warn ? String(warn.title || '').replace(/^正確用法對照[（(]?/, '').replace(/[）)]$/, '') : (typeof b.cmpWarn === 'string' ? b.cmpWarn : ''),
        pats: [], exs: g.filter(r => r.ex).slice(0, 2).map(r => ({ en: r.ex, cn: r.exCn || '', id: b.id })),
        lessonIds: lessonsOf(idx, members), score: 100, src: 'cmp',
      });
      n++;
    });
  });
  return n;
}

/* B/C. 詞庫近義／反義：只在成員都學過時成立 */
function fromLexicon(idx) {
  let n = 0;
  const has = k => idx.words[k] ? 'w' : (idx.phrases[k] ? 'p' : null);
  LEX.SYN.forEach(set => {
    const learned = set.m.map(norm).filter(k => has(k));
    if (learned.length < 2) return;
    const members = learned.map(k => mkMember(idx, k, has(k))).sort((a, c) => a.key.localeCompare(c.key));
    const exs = []; members.forEach(m => { const x = findExample(idx, m.key, m.kind); if (x && exs.length < 2) exs.push({ ...x, of: m.en }); });
    addRel({
      key: (set.ant ? 'ant:' : 'syn:') + members.map(m => m.key).join('|'), type: set.ant ? 'ant' : 'syn',
      title: title(members, ' ↔ '), members, concept: set.concept || '',
      diff: members.map(m => ({ en: m.en, cn: (set.d || {})[m.key] || (set.d || {})[m.en] || '' })).filter(d => d.cn),
      tip: set.tip || '', pats: members.map(m => (set.pat || {})[m.key] || (set.pat || {})[m.en]).filter(Boolean),
      exs, lessonIds: lessonsOf(idx, members), score: 90, src: 'lexicon',
    }); n++;
  });
  LEX.ANT.forEach(pair => {
    const ks = pair.map(norm); if (!ks.every(k => has(k))) return;
    const members = ks.map(k => mkMember(idx, k, has(k))).sort((a, c) => a.key.localeCompare(c.key));
    const exs = []; members.forEach(m => { const x = findExample(idx, m.key, m.kind); if (x && exs.length < 2) exs.push({ ...x, of: m.en }); });
    addRel({
      key: 'ant:' + members.map(m => m.key).join('|'), type: 'ant',
      title: title(members, ' ↔ '), members, concept: members.map(m => m.cn).filter(Boolean).join(' ↔ '),
      diff: [], tip: '', pats: [], exs, lessonIds: lessonsOf(idx, members), score: 88, src: 'lexicon',
    }); n++;
  });
  return n;
}

/* D. 詞族：詞庫的不規則族 + 保守的字尾規則（有詞性守門，避免 care/career 這種假親戚） */
function fromFamily(idx) {
  let n = 0;
  const single = Object.keys(idx.words).filter(k => /^[a-z]+$/.test(k) && k.length >= 4);
  const posOf = k => (idx.words[k] || { pos: [] }).pos.join(' ');
  const isV = k => /\bv\b|v\./.test(posOf(k)), isN = k => /\bn\b|n\./.test(posOf(k)), isAdj = k => /adj/.test(posOf(k));
  const groups = []; const seen = new Set();
  // 1) 詞庫不規則族
  LEX.FAM.forEach(fam => {
    const learned = fam.map(norm).filter(k => idx.words[k]);
    if (learned.length >= 2) { groups.push(learned); learned.forEach(k => seen.add(k)); }
  });
  // 2) 規則：base + 字尾；base 必須本身是學過的字（或去 e 後是）
  const RULES = [
    [/ly$/, '', k => isAdj(k) || isAdj(k + 'e')], [/ness$/, '', isAdj], [/ment$/, '', isV], [/ful$/, '', isN], [/less$/, '', isN],
    [/ous$/, '', isN], [/ive$/, '', isV], [/al$/, '', isN], [/ity$/, '', isAdj], [/ance$|ence$/, '', isV], [/tion$/, 't', isV], [/tion$/, 'te', isV],
    [/sion$/, 'de', isV], [/ation$/, 'ate', isV], [/ation$/, '', isV], [/er$|or$/, '', isV], [/ing$/, '', isV], [/ing$/, 'e', isV], [/ed$/, '', isV], [/ed$/, 'e', isV],
    [/able$|ible$/, '', isV], [/able$/, 'e', isV], [/ist$/, '', isN], [/ism$/, '', isN], [/ize$|ise$/, '', isN], [/en$/, '', isAdj],
  ];
  const famOf = {};
  single.forEach(w => {
    RULES.forEach(([re, rep, guard]) => {
      if (!re.test(w)) return;
      const base = w.replace(re, rep);
      if (base.length < 4 || base === w || !idx.words[base] || !guard(base)) return;
      (famOf[base] = famOf[base] || new Set([base])).add(w);
    });
  });
  // 也把「被當 base 的字」串起來（effective→effectively，effective 本身也可能是 effect 的衍生）
  Object.keys(famOf).forEach(base => {
    Object.keys(famOf).forEach(other => { if (other !== base && famOf[other].has(base)) { famOf[base].forEach(x => famOf[other].add(x)); } });
  });
  const ruleGroups = Object.values(famOf).map(s => [...s]).filter(g => g.length >= 2);
  // 3) 合併重疊的族
  const all = groups.concat(ruleGroups).map(g => [...new Set(g)]);
  const merged = [];
  all.forEach(g => {
    const hit = merged.find(m => m.some(x => g.includes(x)));
    if (hit) g.forEach(x => { if (!hit.includes(x)) hit.push(x); }); else merged.push(g.slice());
  });
  merged.forEach(g => {
    const members = g.sort().map(k => mkMember(idx, k, 'w'));
    const exs = []; members.forEach(m => { const x = findExample(idx, m.key, 'w'); if (x && exs.length < 2) exs.push({ ...x, of: m.en }); });
    addRel({
      key: 'fam:' + members.map(m => m.key).join('|'), type: 'fam',
      title: title(members, ' → '), members, concept: members[0].cn || '',
      diff: members.map(m => ({ en: m.en + (m.kind === 'w' && idx.words[m.key].pos.length ? ' (' + idx.words[m.key].pos[0] + ')' : ''), cn: m.cn })).filter(d => d.cn),
      tip: '', pats: [], exs, lessonIds: lessonsOf(idx, members), score: 85, src: 'family',
    }); n++;
  });
  return n;
}

/* E. 常用搭配／Pattern：學過的單字 → 學過的片語（rapport → have a good rapport with sb） */
const STOP = new Set('be have has had get got make take do go come put keep set let give bring turn look feel say tell think know want need see use find ask try call work start stop help show move play run pay pick drop check hold stay leave meet talk speak walk wait open close cut sit stand fall grow send read write buy sell like love hate seem become the a an and or but of in on at to for with from by up down out off into over about that this it they them him her his its our your my me we you i not no so as if then than very more most much many some any all one two first last new old good bad big small long short high low right left same different other such just only even also back again still already yet now here there when where why how what which who whom whose'.split(' '));
function fromPattern(idx) {
  let n = 0; const perWord = {};
  Object.keys(idx.phrases).forEach(pk => {
    const toks = pk.replace(/\+/g, ' ').split(' ').filter(t => /^[a-z][a-z'-]{2,}$/.test(t) && !STOP.has(t) && !isPH(t));
    const heads = new Set();
    toks.forEach(t => {
      // 片語裡的字可能是變化形（concerned → concern），試著還原到學過的單字
      const cands = [t, t.replace(/ies$/, 'y'), t.replace(/es$/, ''), t.replace(/s$/, ''), t.replace(/ed$/, ''), t.replace(/ed$/, 'e'), t.replace(/ing$/, ''), t.replace(/ing$/, 'e'), t.replace(/(.)\1(ed|ing)$/, '$1')];
      const hit = cands.find(c => c.length >= 4 && idx.words[c]);
      if (hit) heads.add(hit);
    });
    heads.forEach(w => {
      const phrase = idx.phrases[pk]; const word = idx.words[w];
      const cross = phrase.lessons.some(l => !word.lessons.some(x => x.id === l.id));
      const ex = findExample(idx, pk, 'p', phrase.lessons.map(l => l.id));
      const members = [mkMember(idx, w, 'w'), mkMember(idx, pk, 'p')];
      const o = {
        key: 'pat:' + w + '>' + pk, type: 'pat',
        title: word.en + ' → ' + phrase.en, members, concept: phrase.cn || word.cn,
        diff: [{ en: word.en, cn: word.cn }, { en: phrase.en, cn: phrase.cn }].filter(d => d.cn),
        tip: phrase.def || '', pats: [phrase.en], exs: ex ? [{ ...ex, of: phrase.en }] : [],
        lessonIds: lessonsOf(idx, members), score: 70 + (cross ? 10 : 0) - (ex ? 0 : 10), src: 'pattern',
      };
      (perWord[w] = perWord[w] || []).push(o);
    });
  });
  // 同一個字最多 3 個 pattern（分數高、片語較短優先）
  Object.values(perWord).forEach(list => {
    list.sort((a, c) => c.score - a.score || a.members[1].en.length - c.members[1].en.length || a.key.localeCompare(c.key));
    list.slice(0, 3).forEach(o => { addRel(o); n++; });
  });
  return n;
}

/* F. 情境 Flow：每篇閱讀文章 → 該課學過的「動詞／動詞片語」依「在文章中出現的順序」串成鏈
   只收動作（動詞、以動詞開頭或含 sb/sth 佔位符的片語），名詞搭配（bento meal）不進鏈；不足 4 個就不做（寧缺勿濫） */
const VERBISH = new Set('be get become feel go take make have keep find stay turn come give put bring send let help start stop try ask tell call show work run move play pay pick drop hold meet wait open close leave lose win fall grow deal build set cut lead look talk speak walk apply use fill pour recline persuade convince explain resolve solve fix check confirm blame apologize complain suggest recommend improve increase share negotiate ignore celebrate sweep weed manage boost assemble reveal head tie relieve reduce handle avoid prevent'.split(' '));
const isVerbPos = pos => { const t = String(pos || '').toLowerCase().split(/[\s\/,、]+/); return t.includes('v.') || t.includes('v') || t.includes('phr.v.') || t.includes('v.phr.') || (t.includes('phr.') && t.includes('v.')); };
function fromFlow(lessons, idx) {
  let n = 0;
  lessons.forEach(b => (b.reading || []).forEach((r, ri) => {
    const paras = (r.paras || []).map(p => String(p.en || '').replace(/<[^>]*>/g, ''));
    const text = paras.join(' '); if (text.length < 200) return;
    const sents = text.split(/(?<=[.!?])\s+(?=[A-Z"“])/);
    const cands = [];
    const consider = (key, kind) => {
      const e = (kind === 'p' ? idx.phrases : idx.words)[key]; if (!e) return;
      const res = kind === 'p' ? e.alts.map(phraseRegex).filter(Boolean) : [new RegExp('\\b(?:' + forms(key).map(reEsc).join('|') + ')\\b', 'i')];
      let best = null; res.forEach(re => { const m = re.exec(text); if (m && (!best || m.index < best.index)) best = { index: m.index, re }; });
      if (!best) return;
      const sent = sents.find(s => best.re.test(s)) || '';
      cands.push({ key, kind, pos: best.index, sent, len: key.split(' ').length });
    };
    const verbishPhrase = raw => { const toks = pkey(raw).replace(/^to /, '').split(' '); const first = toks[0]; return VERBISH.has(first) || (idx.words[first] && isVerbPos(idx.words[first].pos.join(' '))) || /\b(sb|sth|one's)\b/.test(norm(raw)); };
    (b.phrases || []).concat(b.colloc || []).forEach(p => { const raw = cleanEn(p.p); const k = pkey(raw); if (process.env.REL_DEBUG === b.id) console.error('  phrase', JSON.stringify(p.p), '→ key', JSON.stringify(k), 'indexed:', !!idx.phrases[k], 'verbish:', verbishPhrase(raw)); if (idx.phrases[k] && verbishPhrase(raw)) consider(k, 'p'); });
    (b.vocab || []).concat(b.vocab2 || []).forEach(v => { const k = norm(v.w); if (idx.words[k] && isVerbPos(v.pos) && !STOP.has(k)) consider(k, 'w'); });
    // 去重（同一字只留一次、同一句最多兩個：「I found out that the service was down」要保留 find out 與 be down；
    // 「elaborate on」與「elaborate」同時命中時只留片語）、依出現順序
    const phraseHeads = new Set(cands.filter(c => c.kind === 'p').map(c => c.key.split(' ')[0]));
    const seenKey = new Set(), sentCount = {};
    let chain = cands.filter(c => !(c.kind === 'w' && phraseHeads.has(c.key)))
      .sort((a, c) => a.pos - c.pos || c.len - a.len)
      .filter(c => { if (seenKey.has(c.key) || (sentCount[c.sent] || 0) >= 2) return false; seenKey.add(c.key); sentCount[c.sent] = (sentCount[c.sent] || 0) + 1; return true; });
    if (process.env.REL_DEBUG === b.id) console.error('[flow-debug]', b.id, '#' + ri, 'cands:', cands.map(c => c.key + '@' + c.pos), '\n  chain:', chain.map(c => c.key));
    if (chain.length < 4) return;
    if (chain.length > 6) { // 取樣：保留頭尾、優先保留「以前學過」的字（那是接回舊內容的點），其餘等距補齊
      const learnedBefore = c => ((c.kind === 'p' ? idx.phrases : idx.words)[c.key] || { lessons: [] }).lessons.some(l => l.date < b.date);
      const pick = new Set([0, chain.length - 1]);
      chain.forEach((c, i) => { if (pick.size < 6 && learnedBefore(c)) pick.add(i); });
      for (let i = 1; i < 5 && pick.size < 6; i++) pick.add(Math.round(i * (chain.length - 1) / 5));
      chain = [...pick].sort((x, y) => x - y).map(i => chain[i]);
    }
    // 鏈的顯示用短標籤：去掉「+ N / V-ing」「(that) …」這類註記，留 sb/sth
    const flowLabel = en => cleanEn(en).replace(/\((?:that|the)\)/gi, ' ').replace(/[+…]/g, ' ').replace(/\b(N|V-ing|V)\b(\s*\/\s*)?/g, ' ').replace(/\s*\/\s*$/, '').replace(/\s+/g, ' ').trim();
    const members = chain.map(c => { const m = mkMember(idx, c.key, c.kind); m.en = flowLabel(m.en) || m.en; return m; });
    const cap = String(r.artCap || ((((globalThis.__BOOKART || {})[b.id + '#' + ri]) || {}).cap) || '').trim();
    const earlier = members.some(m => ((m.kind === 'p' ? idx.phrases : idx.words)[m.key] || { lessons: [] }).lessons.some(l => l.date < b.date));
    // key 用「鏈的內容」：同一篇故事出現在兩堂課（農夫與智者）只會有一條 flow；歸屬只給閱讀所在的課
    const o = addRel({
      key: 'flow:' + members.map(m => m.key).join('>'), type: 'flow',
      title: members.map(m => m.en).join(' → '), members, concept: String(r.titleCn || r.title || '').trim(),
      diff: members.map(m => ({ en: m.en, cn: m.cn })).filter(d => d.cn),
      tip: cap.replace(/^[^：:]*[：:]\s*/, ''), pats: [],
      exs: chain.filter(c => c.sent).slice(0, 2).map(c => ({ en: c.sent.trim(), cn: '', id: b.id, of: idx[c.kind === 'p' ? 'phrases' : 'words'][c.key].en })),
      lessonIds: [b.id], score: 75 + (earlier ? 10 : 0), src: 'flow', reading: { id: b.id, ri, title: r.title || '' }, earlier,
    });
    if (!o.lessonIds.includes(b.id)) o.lessonIds.push(b.id);
    n++;
  }));
  return n;
}

/* G. 詞庫的情境鏈（pressure → stressed → overwhelmed 這種升級／流程）：成員全部學過才成立 */
function fromChain(idx) {
  let n = 0;
  (LEX.CHAIN || []).forEach(ch => {
    const has = k => idx.words[k] ? 'w' : (idx.phrases[k] ? 'p' : null);
    const ks = ch.m.map(norm); if (!ks.every(k => has(k))) return;
    const members = ks.map(k => mkMember(idx, k, has(k)));
    const exs = []; members.forEach(m => { const x = findExample(idx, m.key, m.kind); if (x && exs.length < 2) exs.push({ ...x, of: m.en }); });
    addRel({
      key: 'flow:' + members.map(m => m.key).join('>'), type: 'flow',
      title: members.map(m => m.en).join(' → '), members, concept: ch.concept || '',
      diff: members.map(m => ({ en: m.en, cn: m.cn })).filter(d => d.cn),
      tip: ch.cn || '', pats: ch.steps || [], exs, lessonIds: lessonsOf(idx, members), score: 90, src: 'chain',
    }); n++;
  });
  return n;
}

/* ---------- 每課挑 ≤6 組：分數 → 跨課優先 → 類型多樣 → key 穩定排序 ---------- */
const TYPE_ORDER = { syn: 0, ant: 1, fam: 2, pat: 3, flow: 4 };
function pickForLesson(lessonId, items) {
  const cands = items.filter(o => o.lessonIds.includes(lessonId) && o.score >= PER_LESSON_MIN_SCORE)
    .map(o => ({ o, s: o.score + (o.cross ? 15 : 0) }))
    .sort((a, c) => c.s - a.s || TYPE_ORDER[a.o.type] - TYPE_ORDER[c.o.type] || a.o.key.localeCompare(c.o.key));
  const out = [], perType = {};
  const mset = o => o.members.map(m => m.key).sort().join('|');
  // 同一組字不重複出現（complain↔complaint 同時是 syn 和 fam 就只留分數高的）；同類型且共用成員的也只留一組（accept↔reject / accept↔refuse）
  const clash = o => out.some(p => mset(p) === mset(o) || (p.type === o.type && p.members.some(m => o.members.some(x => x.key === m.key))));
  // 第一輪：每類最多 2 組；第二輪：補滿
  cands.forEach(({ o }) => { if (out.length < PER_LESSON_MAX && (perType[o.type] || 0) < 2 && !clash(o)) { out.push(o); perType[o.type] = (perType[o.type] || 0) + 1; } });
  cands.forEach(({ o }) => { if (out.length < PER_LESSON_MAX && !out.includes(o) && !clash(o)) out.push(o); });
  return out.map(o => o.id);
}

/* ---------- 主流程 ---------- */
function main() {
  const lessons = loadBook();
  // BOOKART（課文插圖圖說）在 data-bookart.js，flow 的中文摘要要用它
  try { const w = {}; new Function('window', fs.readFileSync(path.join(ROOT, 'public', 'data-bookart.js'), 'utf8'))(w); globalThis.__BOOKART = w.BOOKART || {}; } catch (e) { globalThis.__BOOKART = {}; }
  const prev = loadExistingRel();
  const done = new Set(prev.lessons);
  const newLessons = lessons.filter(b => !done.has(b.id));
  const idx = buildIndex(lessons);

  const stats = {
    mode: REBUILD ? 'rebuild (backfill)' : 'incremental',
    totalLessons: lessons.length, alreadyIndexed: done.size, newLessons: newLessons.map(b => b.id),
    totalVocabularyItems: lessons.reduce((n, b) => n + (b.vocab || []).length + (b.vocab2 || []).length + (b.vocabReview || []).length, 0),
    distinctHeadwords: Object.keys(idx.words).length,
    totalPhraseItems: lessons.reduce((n, b) => n + (b.phrases || []).length + (b.colloc || []).length, 0),
    distinctPhrases: Object.keys(idx.phrases).length,
    totalGrammarItems: lessons.reduce((n, b) => n + (b.grammar || []).length, 0),
    totalReadings: lessons.reduce((n, b) => n + (b.reading || []).length, 0),
    candidates: {}, duplicatesSkipped: 0,
  };

  // 產生候選（全部規則都跑在「全體已學內容」的索引上；增量模式下只保留「跟新課有關」的新關聯）
  const before = REL.length;
  stats.candidates.cmp = fromCmp(lessons, idx);
  stats.candidates.lexicon = fromLexicon(idx);
  stats.candidates.family = fromFamily(idx);
  stats.candidates.pattern = fromPattern(idx);
  stats.candidates.flow = fromFlow(lessons, idx);
  stats.candidates.chain = fromChain(idx);
  const totalCand = Object.values(stats.candidates).reduce((a, b) => a + b, 0);
  stats.duplicatesSkipped = totalCand - REL.length; // addRel 合併掉的
  stats.candidateRelationships = totalCand;

  let items;
  if (REBUILD || !prev.items.length) {
    items = REL;
  } else {
    // 增量：既有關聯原封不動；新關聯只收「成員含新課內容」的；既有關聯若新課也學到同一成員 → 補 lessonIds
    const prevByKey = {}; prev.items.forEach(o => prevByKey[o.key] = o);
    const newIds = new Set(newLessons.map(b => b.id));
    items = prev.items.slice();
    REL.forEach(o => {
      if (prevByKey[o.key]) {
        const t = prevByKey[o.key];
        o.lessonIds.forEach(id => { if (!t.lessonIds.includes(id)) t.lessonIds.push(id); }); t.lessonIds.sort();
      } else if (o.lessonIds.some(id => newIds.has(id))) items.push(o);
    });
  }
  // 子集合併：同類型且成員是另一組的子集合（blocked↔stuck ⊂ blocked↔clogged↔stuck、chemistry↔rapport ⊂ 默契四種說法）→ 併進大的那組
  for (const t of ['syn', 'ant', 'fam']) {
    const same = items.filter(o => o.type === t);
    same.forEach(a => {
      const ak = a.members.map(m => m.key);
      const big = same.find(b => b !== a && b.members.length > ak.length && ak.every(k => b.members.some(m => m.key === k)));
      if (!big) return;
      a.lessonIds.forEach(id => { if (!big.lessonIds.includes(id)) big.lessonIds.push(id); });
      if (!big.diff.length && a.diff.length) big.diff = a.diff;
      a.pats.forEach(p => { if (!big.pats.includes(p)) big.pats.push(p); });
      if (!big.tip && a.tip) big.tip = a.tip;
      items.splice(items.indexOf(a), 1);
    });
  }
  // 穩定 id、排序、每課挑選
  items.sort((a, c) => a.key.localeCompare(c.key));
  items.forEach((o, i) => {
    o.id = 'r' + String(i + 1).padStart(3, '0'); o.lessonIds = [...new Set(o.lessonIds)].sort();
    o.dates = o.lessonIds.map(id => (lessons.find(b => b.id === id) || {}).date).filter(Boolean);
    // 「新內容接回舊內容」：成員跨兩堂課以上，或（閱讀 flow）鏈裡有更早學過的字
    o.cross = o.lessonIds.length > 1 || !!o.earlier;   // earlier 保留在輸出裡，增量重跑才算得一樣（冪等）
  });
  const byLesson = {}; lessons.forEach(b => byLesson[b.id] = pickForLesson(b.id, items));
  stats.acceptedRelationships = items.length;
  stats.byType = items.reduce((m, o) => (m[o.type] = (m[o.type] || 0) + 1, m), {});
  stats.crossLesson = items.filter(o => o.cross).length;
  stats.lessonsWithNoRelationship = lessons.filter(b => !byLesson[b.id].length).map(b => b.id);
  stats.perLessonShown = { min: Math.min(...Object.values(byLesson).map(a => a.length)), max: Math.max(...Object.values(byLesson).map(a => a.length)) };

  const out = { v: 1, built: new Date().toISOString().slice(0, 10), lessons: lessons.map(b => b.id), items, byLesson };
  console.log(JSON.stringify(stats, null, 1));
  if (VERBOSE) {
    lessons.forEach(b => { console.log('\n' + b.id + ' ' + (b.titleCn || '')); byLesson[b.id].forEach(id => { const o = items.find(x => x.id === id); console.log('  [' + o.type + ' ' + o.score + (o.cross ? ' ×' : '') + '] ' + o.title + (o.concept ? '  — ' + o.concept : '')); }); });
    console.log('\n===== 全部 syn / ant / flow（不含 pat / fam）=====');
    items.filter(o => o.type !== 'pat' && o.type !== 'fam').forEach(o => console.log('  ' + o.id + ' [' + o.type + ' ' + o.score + (o.cross ? ' ×' : '') + '] ' + o.title + '  — ' + o.concept + '  (' + o.lessonIds.map(x => x.slice(2)).join(',') + ')'));
  }
  if (DRY) { console.log('\n(dry-run：未寫檔)'); return; }
  const js = '/* 自動產生：node tools/build-rel.js（關聯學習系統的衍生索引，請勿手改；重建用 --rebuild） */\n'
    + 'window.REL = ' + JSON.stringify(out, null, 0) + ';\n';
  fs.writeFileSync(REL_FILE, js);
  console.log('\nwritten', path.relative(ROOT, REL_FILE), (js.length / 1024).toFixed(1) + ' KB');
}
main();
