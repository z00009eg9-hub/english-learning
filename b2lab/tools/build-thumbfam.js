/* 產生 public/data-thumbfam.js：閱讀清單縮圖用的「長相相近圖示」對照表（genart.js 的 SAME）。
   key＝去掉顏色的圖示 SVG 前 240 字的雜湊（要和 index.html 的 stripCells/thumbHash 同一算法），value＝家族名。
   改了 SAME 或新增圖示後跑：node tools/build-thumbfam.js */
const fs = require('fs');
const { P, I, SAME } = require('./genart.js');
const nk = s => s.replace(/#[0-9a-fA-F]{3,8}/g, '#').replace(/\s+/g, '').slice(0, 240);
const h = s => { let x = 5381; for (let i = 0; i < s.length; i++) x = ((x * 33) ^ s.charCodeAt(i)) >>> 0; return x.toString(36); };
const out = {};
SAME.forEach(g => g.forEach(n => { if (!I[n]) return; Object.values(P).forEach(p => { out[h(nk(I[n](p)))] = g[0]; }); }));
fs.writeFileSync(__dirname + '/../public/data-thumbfam.js', 'window.THUMB_FAM=' + JSON.stringify(out) + ';\n');
console.log(Object.keys(out).length + ' 筆');
