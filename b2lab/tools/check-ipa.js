#!/usr/bin/env node
/* ============================================================
   B2 Read — 音標一致性檢查
   用法：
     node tools/check-ipa.js            # 檢查，有問題就 exit 1
     node tools/check-ipa.js --list     # 額外印出每個問題的完整清單

   為什麼有這個檔（2026-09-18 建立）：
     全站音標規則是「一律美式 Cambridge 記法」（DAILY_TASK.md 第 2 步的欄位表），
     但同一個字散在 data-book / data-notes / data-listen / data-daily / data-a2 /
     data-reading 六個檔裡，靠人工 grep 很容易漏掉，實際上曾累積到
     87 個字有兩種以上寫法、43 筆根本沒填音標。
     這支腳本把四種問題一次抓出來，接在每日產生流程的第 5 步驗證裡跑。

   檢查項目：
     1. 同一個字出現兩種以上音標寫法
     2. 缺音標（寫成 — 或空字串）
     3. 非美式寫法：ɒ（該寫 ɑː）、ɛ（該寫 e）、ɜː(r)（該寫 ɝː）、
        一般字母 g（該用 IPA 的 ɡ）、tjuː（該寫 tuː）
     4. 沒有用 /…/ 包起來（含誤用方括號 […]）

   掃描範圍：public/data-*.js 裡所有「w 後面緊接著 ipa」的詞條，
     以及 data-rel.js 的關聯成員（那個檔用 en 當鍵，是 build-rel.js 的衍生檔）。
   ============================================================ */
'use strict';
const fs = require('fs');
const path = require('path');

const PUB = path.join(path.resolve(__dirname, '..'), 'public');
const LIST = process.argv.includes('--list');

/* 刻意保留、不算違規的例外。
   key 是「單字|音標」，value 是保留的理由（印在報告裡，方便日後覆核）。 */
const ALLOW = {
  'elaborate|/ɪˈlæb.ɚ.ət/ (adj.) /ɪˈlæb.ɚ.eɪt/ (v.)':
    'adj. 與 v. 兩個詞性發音不同，是刻意合併的教學條目（data-book.js）',
};

/* w/ipa 相鄰的三種寫法（JSON 風格、單引號物件、雙引號物件）＋ data-rel.js 的 en/ipa 成員 */
const PATS = [
  /"w"\s*:\s*"([^"]+)"\s*,\s*"ipa"\s*:\s*"([^"]*)"/g,
  /w\s*:\s*'([^']*)'\s*,\s*(?:star:\s*true,\s*)?ipa\s*:\s*'([^']*)'/g,
  /w\s*:\s*"([^"]+)"\s*,\s*ipa\s*:\s*"([^"]*)"/g,
  /\{"key":"[^"]*","kind":"w","en":"([^"]+)"(?:,"[a-zA-Z]+":"(?:[^"\\]|\\.)*")*?,"ipa":"([^"]*)"/g,
];

const rows = [];
fs.readdirSync(PUB).filter(f => /^data-.*\.js$/.test(f)).sort().forEach(f => {
  const text = fs.readFileSync(path.join(PUB, f), 'utf8');
  PATS.forEach(re => {
    re.lastIndex = 0;
    let m;
    while ((m = re.exec(text))) rows.push({ file: f, w: m[1], ipa: m[2] });
  });
});

const allowed = r => ALLOW[r.w + '|' + r.ipa] !== undefined;
const src = r => r.file.replace(/^data-|\.js$/g, '');
const problems = [];

/* --- 1. 同字多音標 --- */
const isBlank = r => !r.ipa || !r.ipa.trim() || r.ipa.trim() === '—';
const byWord = {};
rows.forEach(r => {
  if (allowed(r) || isBlank(r)) return;   // 缺音標的另外報，不要在這裡重複算一次
  const b = (byWord[r.w] = byWord[r.w] || {});
  const v = (b[r.ipa] = b[r.ipa] || { n: 0, files: new Set() });
  v.n++; v.files.add(src(r));
});
const dupes = Object.keys(byWord).filter(w => Object.keys(byWord[w]).length > 1).sort();
if (dupes.length) {
  problems.push({
    title: '同一個字有兩種以上音標寫法',
    n: dupes.length,
    lines: dupes.map(w => '  ' + w + '  →  ' + Object.keys(byWord[w])
      .map(i => i + ' x' + byWord[w][i].n + ' [' + [...byWord[w][i].files].join(',') + ']').join('   ')),
    fix: '挑一個合規且用得最多的寫法，把其他處一起改掉（同字不能有兩種寫法）',
  });
}

/* --- 2. 缺音標 --- */
const blanks = rows.filter(isBlank);
if (blanks.length) {
  problems.push({
    title: '缺音標（寫成 — 或空字串）',
    n: blanks.length,
    lines: [...new Set(blanks.map(r => '  ' + r.w + '  [' + src(r) + ']'))],
    fix: '先 grep 全站有沒有現成寫法可以沿用，沒有的話依美式 Cambridge 記法補上',
  });
}

/* --- 3. 非美式寫法 ＋ 4. 格式 --- */
const RULES = [
  ['ɒ（英式短 o，應寫 ɑː）', /ɒ/],
  ['ɛ（應寫 e）', /ɛ/],
  ['ɜː / ɜːr（應寫 ɝː）', /ɜː/],
  ['一般字母 g（應用 IPA 的 ɡ）', /g/],
  ['tjuː（應寫 tuː）', /tjuː/],
  ['方括號 […]（應一律 /…/）', /[[\]]/],
  ['沒有用 /…/ 包起來', /^(?!\/)|(?<!\/)$/],
];
const seen = new Set();
const uniq = rows.filter(r => {
  if (!r.ipa || r.ipa.trim() === '—') return false;
  const k = r.w + '|' + r.ipa;
  if (seen.has(k) || allowed(r)) return false;
  seen.add(k); return true;
});
RULES.forEach(([label, re]) => {
  const hit = uniq.filter(r => re.test(r.ipa));
  if (hit.length) problems.push({
    title: '非美式／格式不符：' + label,
    n: hit.length,
    lines: hit.map(r => '  ' + r.w + '  ' + r.ipa + '  [' + src(r) + ']'),
    fix: '照 DAILY_TASK.md 的音標規則改寫（ɑː 不用 ɒ、用 e 不用 ɛ、bird 類寫 ɝː、IPA 的 ɡ、一律 /…/）',
  });
});

/* --- 報告 --- */
const words = new Set(rows.map(r => r.w)).size;
console.log('音標檢查：掃描 ' + rows.length + ' 筆詞條（' + words + ' 個不同的字）');
Object.keys(ALLOW).forEach(k => console.log('  例外（刻意保留）：' + k.split('|')[0] + ' — ' + ALLOW[k]));

if (!problems.length) {
  console.log('✅ 音標 OK：沒有同字多寫法、沒有缺漏、全部符合美式 Cambridge 記法');
  process.exit(0);
}
console.log('');
problems.forEach(p => {
  console.log('❌ ' + p.title + '：' + p.n + ' 筆');
  (LIST ? p.lines : p.lines.slice(0, 8)).forEach(l => console.log(l));
  if (!LIST && p.lines.length > 8) console.log('  …（還有 ' + (p.lines.length - 8) + " 筆，加 --list 看完整清單）");
  console.log('  → ' + p.fix);
  console.log('');
});
console.log('音標沒過就不要 commit。改完再跑一次 node tools/check-ipa.js。');
process.exit(1);
