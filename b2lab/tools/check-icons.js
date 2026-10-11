/* ============================================================
   線稿圖示庫 BOOK_ICONS（public/data-book.js 的 var I={…}）風格檢查（2026-10-11）
   用法：
     node tools/check-icons.js               檢查全部圖示，沒過就不要 commit
     node tools/check-icons.js --sheet a.html  另外輸出對照表（淺色＋深色配色），可用瀏覽器開來看
   排程發現圖示不夠時會自己補（DAILY_TASK.md 3.5），雲端不一定能截圖，
   所以用這支把「看得出來的風格問題」盡量變成機器檢查：
     ① 名稱：小寫開頭英數 camelCase，不能跟 genart.js 內建圖示撞名（撞名的話橫幅會默默用舊的）
     ② 元素：只能用 path/line/circle/rect/ellipse/g；不能有字（<text>）、圖片、外部連結
     ③ 顏色：只能用既有色盤（深色 #2b2118＝D、橘 #e8813a＝A、白、none、少數固定點綴色）
     ④ 線寬：1.5～9；一定要有深色 D 描邊（線稿風格）
     ⑤ 範圍：座標要落在 64×64 框內（容許一點出血），標籤要配對
   ============================================================ */
const fs = require('fs');
const { P, I: GI, BUILTIN } = require('./genart.js');
global.window = {};
delete require.cache[require.resolve('../public/data-book.js')];   // genart.js 載入過，要重跑一次才拿得到
require('../public/data-book.js');
const I = window.BOOK_ICONS;

const D = '#2b2118', A = '#e8813a';
const COLORS = new Set([D, A, '#fff', '#ffffff', 'none',
  '#c0392b', '#d9534f', '#f5c542', '#f4c9a0', '#f0b04e', '#a7d8f0', '#ffd98a',
  '#3f9e64', '#6b4f36', '#8a5a33', '#d9a34a', '#3f6b55']);
const LEGACY_TEXT = ['bed', 'clock2'];                       // 舊的帶字圖示（zzz、24），保留不動
// 舊的同名圖示（同一個東西兩種畫法；閱讀橫幅用 genart 那套，聽力／實景用這套），保留不動；新圖示不可再撞名
const LEGACY_DUP = ['mail','house','phone','globe','calendar','people','star','doc','cross','target','clock','box','umbrella',
  'plane','bus','train','bed','moon','coffee','bowl','fridge','bag','wallet','laptop','camera','pill','thermo','tree','key',
  'wrench','lantern','shield','wind','temple','mask','quake','mirror','gauge'];
const LEGACY_NO_D = ['wind'];                               // 舊的純橘色線條圖示
const ELEMS = new Set(['path', 'line', 'circle', 'rect', 'ellipse', 'g']);

const err = [];
for (const k in I) {
  const s = I[k], e = m => err.push(k + '：' + m);
  if (!/^[a-z][a-zA-Z0-9]*$/.test(k)) e('名稱要用小寫開頭的英數 camelCase');
  if (BUILTIN.includes(k) && !LEGACY_DUP.includes(k)) e('跟 genart.js 內建圖示撞名，閱讀橫幅會用到舊的那個，請換名字');
  const tags = [...s.matchAll(/<([a-zA-Z]+)/g)].map(m => m[1]);
  tags.forEach(t => { if (!ELEMS.has(t) && !(t === 'text' && LEGACY_TEXT.includes(k))) e('不能用 <' + t + '>'); });
  if (/href|url\(|style=|<script|on[a-z]+=/i.test(s)) e('不能有連結、style 或腳本');
  const open = (s.match(/<g\b/g) || []).length, close = (s.match(/<\/g>/g) || []).length;
  if (open !== close) e('<g> 標籤沒配對');
  const selfOk = tags.filter(t => t !== 'g' && t !== 'text').length === (s.match(/\/>/g) || []).length;
  if (!selfOk) e('path/rect/circle… 要用 /> 自我結尾');
  for (const m of s.matchAll(/(?:fill|stroke)="([^"]+)"/g))
    if (!COLORS.has(m[1].toLowerCase())) e('顏色 ' + m[1] + ' 不在色盤裡（用 D、A、#fff 或既有點綴色）');
  if (!s.includes(D) && !LEGACY_NO_D.includes(k)) e('沒有深色 D 描邊，不是線稿風格');
  for (const m of s.matchAll(/stroke-width="([\d.]+)"/g))
    if (+m[1] < 1.5 || +m[1] > 9) e('線寬 ' + m[1] + ' 超出 1.5～9');
  for (const m of s.matchAll(/\b(x|y|cx|cy|x1|y1|x2|y2)="(-?[\d.]+)"/g))
    if (+m[2] < -2 || +m[2] > 66) e(m[1] + '=' + m[2] + ' 超出 64×64 框');
  for (const m of s.matchAll(/<rect\b[^>]*?\bx="(-?[\d.]+)"[^>]*?\by="(-?[\d.]+)"[^>]*?\bwidth="([\d.]+)"[^>]*?\bheight="([\d.]+)"/g))
    if (+m[1] + +m[3] > 66 || +m[2] + +m[4] > 66) e('rect 超出 64×64 框');
  for (const m of s.matchAll(/<circle\b[^>]*?\bcx="(-?[\d.]+)"[^>]*?\bcy="(-?[\d.]+)"[^>]*?\br="([\d.]+)"/g))
    if (+m[1] - +m[3] < -2 || +m[1] + +m[3] > 66 || +m[2] - +m[3] < -2 || +m[2] + +m[3] > 66) e('circle 超出 64×64 框');
  for (const m of s.matchAll(/\bd="([^"]+)"/g))
    if ((m[1].match(/-?[\d.]+/g) || []).some(n => Math.abs(+n) > 70)) e('path 座標超出 64×64 框');
}

const args = process.argv.slice(2);
if (args[0] === '--sheet') {
  const out = args[1] || 'icons-sheet.html';
  const cell = (svg, k, c) => '<figure><svg viewBox="-3 -3 70 70"><circle cx="32" cy="32" r="33" fill="'
    + (c.dark ? 'rgba(255,255,255,.10)' : '#fff') + '" stroke="' + (c.dark ? 'rgba(255,255,255,.35)' : c.band)
    + '" stroke-width="2.5"/>' + svg + '</svg><figcaption>' + k + '</figcaption></figure>';
  const row = p => { const c = P[p]; return '<section style="background:' + c.bg + ';color:' + (c.dark ? '#fff' : '#333') + '">'
    + Object.keys(I).map(k => cell(GI[k] && !BUILTIN.includes(k) ? GI[k](c) : I[k], k, c)).join('') + '</section>'; };
  fs.writeFileSync(out, '<!doctype html><meta charset=utf-8><style>body{margin:0;font:12px system-ui}'
    + 'section{display:flex;flex-wrap:wrap;gap:6px;padding:10px}figure{margin:0;width:84px;text-align:center}svg{width:72px;height:72px}</style>'
    + row('warm') + row('night'));
  console.log('對照表 → ' + out);
}

console.log('BOOK_ICONS ' + Object.keys(I).length + ' 個');
if (err.length) { console.log('\n✗ ' + err.length + ' 個問題：\n' + err.join('\n')); process.exit(1); }
console.log('✓ 圖示風格檢查通過');
