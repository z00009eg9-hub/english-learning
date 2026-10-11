/* ============================================================
   B2 Read — 閱讀橫幅「圖示重複」檢查（2026-10-11）
   用法：
     node tools/check-art.js              檢查所有每日文章橫幅（d2026… 五圓版）
     node tools/check-art.js --free 20261014
                                          列出這一批（日期）還可以用的圖示（扣掉冷卻中的）
   規則（DAILY_TASK.md 3.5）：
     （長得幾乎一樣的圖示，如 chat/talk、bag/toolbox，算同一個 → genart.js 的 SAME）
     ① 一張橫幅 5 個圖示不重複
     ② 萬用圖示（genart.js 的 GENERIC）每張最多 1 個
     ③ 同一天（同一批）四篇之間圖示不重複、配色不重複
     ④ 冷卻：前 COOL 批用過的圖示不能再用
   圖示名稱是從 data-art.js 的 SVG 反查回來的（用 genart.js 重畫每個圖示比對），
   所以手寫或改過的 SVG 會被當成「認不出的圖示」擋下來。
   ============================================================ */
const { P, I, GENERIC, family } = require('./genart.js');
const COOL = 2;
const FROM = '20260819';           // 這天起改成五圓橫幅；之前的三圓舊圖不檢查

global.window = {};
require('../public/data-art.js');
const ART = window.ART;

/* 反查：配色看底色，圖示逐一重畫比對 */
function decode(svg) {
  const bg = (svg.match(/<rect width="800" height="200" rx="14" fill="([^"]+)"/) || [])[1];
  const pk = Object.keys(P).find(k => P[k].bg === bg);
  const re = /<g transform="translate\(\d+,52\) scale\(1\.5\)"><circle[^>]*\/>([\s\S]*?)<\/g>(?=<g transform="translate|<\/svg>)/g;
  const names = []; let m;
  while ((m = re.exec(svg))) {
    const body = m[1];
    names.push(pk ? (Object.keys(I).find(n => I[n](P[pk]) === body) || '?') : '?');
  }
  return { p: pk || '?', i: names };
}

const batches = {};               // 日期 → [{id,p,i}]
for (const id in ART) {
  const d = (id.match(/^d(\d{8})/) || [])[1];
  if (!d || d < FROM) continue;
  (batches[d] = batches[d] || []).push({ id, ...decode(ART[id].svg || '') });
}
const dates = Object.keys(batches).sort();

function cooling(d) {
  const prev = dates.filter(x => x < d).slice(-COOL);
  const s = new Set();
  prev.forEach(x => batches[x].forEach(a => a.i.forEach(n => s.add(family(n)))));
  return s;
}

const args = process.argv.slice(2);
if (args[0] === '--free') {
  const d = args[1];
  if (!/^\d{8}$/.test(d || '')) { console.log('用法：node tools/check-art.js --free YYYYMMDD'); process.exit(1); }
  const cool = cooling(d);
  const free = Object.keys(I).filter(n => !cool.has(family(n)));
  console.log('冷卻中（前 ' + COOL + ' 批用過，不能用）：' + [...cool].sort().join(' '));
  console.log('\n可用 ' + free.length + ' 個：' + free.filter(n => !GENERIC.includes(n)).join(' '));
  console.log('\n萬用圖示（每張最多 1 個）：' + free.filter(n => GENERIC.includes(n)).join(' '));
  process.exit(0);
}

const err = [];
for (const d of dates) {
  const list = batches[d], cool = cooling(d), seen = {}, pal = {};
  for (const a of list) {
    if (a.i.length !== 5) err.push(a.id + '：圖示數 ' + a.i.length + '（要 5 個）');
    if (a.i.includes('?')) err.push(a.id + '：有認不出的圖示（不是用 genart.js 產生的？）');
    if (new Set(a.i.map(family)).size !== a.i.length) err.push(a.id + '：同一張裡圖示重複 ' + a.i.join(','));
    const g = a.i.filter(n => GENERIC.includes(n));
    if (g.length > 1) err.push(a.id + '：萬用圖示超過 1 個 ' + g.join(','));
    a.i.forEach(n => {
      if (n === '?') return;
      const f = family(n);
      if (seen[f] && seen[f] !== a.id) err.push(a.id + '：' + n + ' 跟同一天的 ' + seen[f] + ' 重複（含長得像的）');
      seen[f] = a.id;
      if (cool.has(f)) err.push(a.id + '：' + n + ' 還在冷卻（前 ' + COOL + ' 批用過）');
    });
    if (pal[a.p]) err.push(a.id + '：配色 ' + a.p + ' 跟同一天的 ' + pal[a.p] + ' 重複');
    pal[a.p] = a.id;
  }
}
const used = {};
dates.forEach(d => batches[d].forEach(a => a.i.forEach(n => used[n] = (used[n] || 0) + 1)));
const top = Object.entries(used).sort((a, b) => b[1] - a[1]).slice(0, 8).map(e => e.join('×')).join(' ');
console.log(dates.length + ' 批、' + dates.reduce((s, d) => s + batches[d].length, 0) + ' 張橫幅；用到 '
  + Object.keys(used).length + '/' + Object.keys(I).length + ' 個圖示；最常用：' + top);
if (err.length) { console.log('\n✗ ' + err.length + ' 個問題：\n' + err.join('\n')); process.exit(1); }
console.log('✓ 圖示重複檢查通過');
