/* ============================================================
   B2 Read — 聽力清單縮圖「圖示重複」檢查（2026-10-11）
   用法：node tools/check-listen-thumb.js
   讀 public/index.html 的 LS_THUMB（課 id → 圖示名稱）與 data-listen.js 的課程清單。
   規則：
     ① 每課都要有縮圖（沒有的會退回 emoji）
     ② 圖示必須存在於 BOOK_ICONS
     ③ 全部聽力課不重複（長得像的算同一個，genart.js 的 SAME，如 chat/talk）
     ④ 萬用圖示（genart.js 的 GENERIC）整站最多 GEN_MAX 次
   ============================================================ */
const fs = require('fs'), path = require('path');
const { GENERIC, family } = require('./genart.js');
const GEN_MAX = 2;
const pub = path.join(__dirname, '..', 'public');

const idx = fs.readFileSync(path.join(pub, 'index.html'), 'utf8');
const T = eval('(' + idx.match(/LS_THUMB\s*=\s*(\{[\s\S]*?\});/)[1] + ')');

global.window = {};
new Function('window', fs.readFileSync(path.join(pub, 'data-book.js'), 'utf8'))(window);
const ICONS = window.BOOK_ICONS || {};

const listen = fs.readFileSync(path.join(pub, 'data-listen.js'), 'utf8');
const ids = [...listen.matchAll(/^\s{2}"id":\s*"([^"]+)"/gm)].map(m => m[1]);

const err = [], by = {};
for (const id of new Set([...ids, ...Object.keys(T)])) {
  const k = T[id];
  if (!k) { err.push(id + '：LS_THUMB 沒有這一課（會退回 emoji）'); continue; }
  if (!ICONS[k]) { err.push(id + '：圖示 ' + k + ' 不在 BOOK_ICONS'); continue; }
  (by[family(k)] = by[family(k)] || []).push(id + '(' + k + ')');
}
for (const f in by) {
  const lim = GENERIC.includes(f) ? GEN_MAX : 1;
  if (by[f].length > lim) err.push('圖示 ' + f + ' 用了 ' + by[f].length + ' 次（上限 ' + lim + '）：' + by[f].join(' '));
}
console.log(Object.keys(T).length + ' 課聽力；縮圖 ' + Object.keys(by).length + ' 種圖示');
if (err.length) { console.log('\n✗ ' + err.length + ' 個問題：\n' + err.join('\n')); process.exit(1); }
console.log('✓ 聽力縮圖重複檢查通過');
