#!/usr/bin/env node
/* ============================================================
   B2 Read — 挑聽力縮圖（LS_THUMB）用的圖示清單
   用法：
     node tools/list-thumb-icons.js           # 列出 ①從沒用過 ②可重用 ③冷卻中
     node tools/list-thumb-icons.js --sheet   # 另外把「未使用圖示」渲染成對照表 HTML
                                              #（預設寫到 D:/icons-preview.html，非 Windows 寫 /tmp；
                                              #  可用環境變數 ICONS_OUT 改路徑，不寫 C: 暫存目錄）
   規則見 DAILY_TASK.md 3.6.1：冷卻最近 COOL 批、優先挑從沒用過的、語意要貼切。
   ============================================================ */
'use strict';
const fs = require('fs'), path = require('path');
const pub = path.join(__dirname, '..', 'public');
global.window = {};
require(path.join(pub, 'data-book.js'));
const COOL = 6; /* 冷卻批數：最近 6 批（每週一批，約六週）用過的不能再用 */
const m = /const LS_THUMB=\{([\s\S]*?)\n\};/.exec(fs.readFileSync(path.join(pub, 'index.html'), 'utf8'))[1];
const rows = [...m.matchAll(/(dl(\d{8})[a-z0-9]*)\s*:\s*'([a-zA-Z0-9]+)'/g)];
const days = [...new Set(rows.map(r => r[2]))].sort().reverse().slice(0, COOL);
const cooling = new Set(rows.filter(r => days.includes(r[2])).map(r => r[3]));
const everUsed = new Set([...m.matchAll(/:'([a-zA-Z0-9]+)'/g)].map(x => x[1]));
const I = window.BOOK_ICONS, all = Object.keys(I);
const fresh = all.filter(k => !everUsed.has(k));
const reusable = all.filter(k => everUsed.has(k) && !cooling.has(k));
console.log('① 從沒用過（優先挑）' + fresh.length + ' 個：\n   ' + fresh.join(' '));
console.log('② 可重用（冷卻期已過）' + reusable.length + ' 個：\n   ' + reusable.join(' '));
console.log('③ 冷卻中（最近 ' + COOL + ' 批用過，不可用）' + cooling.size + ' 個：\n   ' + [...cooling].join(' '));

if (process.argv.includes('--sheet')) {
  const t = i => "<svg viewBox='-6.7 -6.7 77.4 77.4' xmlns='http://www.w3.org/2000/svg'><rect x='-6.7' y='-6.7' width='77.4' height='77.4' fill='#fdf6ec'/><circle cx='32' cy='32' r='33' fill='#fff' stroke='#f7e3c9' stroke-width='2.5'/>" + i + '</svg>';
  const OUT = process.env.ICONS_OUT || (process.platform === 'win32' ? 'D:/icons-preview.html' : '/tmp/icons-preview.html');
  fs.writeFileSync(OUT, '<!doctype html><meta charset=utf-8><style>body{font-family:system-ui;display:flex;flex-wrap:wrap;gap:10px;padding:16px}figure{margin:0;width:104px;text-align:center}svg{width:84px;height:84px;border:1px solid #f0e2cf;border-radius:12px;display:block;margin:0 auto}figcaption{font-size:12px;color:#6b5540}</style>' + fresh.map(k => '<figure>' + t(I[k]) + '<figcaption>' + k + '</figcaption></figure>').join(''));
  console.log('已寫出 ' + OUT + '（' + fresh.length + ' 個未使用圖示）');
}
