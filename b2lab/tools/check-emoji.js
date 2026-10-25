#!/usr/bin/env node
/* 全站 emoji 線稿檢查：列出網站檔案裡 emoji-art.js 還沒有對照的 emoji
   用法：node tools/check-emoji.js
   - 有沒對照的 → 列出字元、次數、出現的檔案，exit 1
   - 箭頭等刻意保留的文字符號不算；國旗（兩個區域字母）自動畫成小旗子＋國碼
   補法：在 public/emoji-art.js 的 MAP 加一行（'@key' 指 BOOK_ICONS，或在 UI 畫一個） */
const fs = require('fs'), path = require('path'), vm = require('vm');
const PUB = path.join(__dirname, '..', 'public');
const ctx = { window: {}, document: undefined };
vm.runInNewContext(fs.readFileSync(path.join(PUB, 'emoji-art.js'), 'utf8'), ctx);
vm.runInNewContext(fs.readFileSync(path.join(PUB, 'data-art.js'), 'utf8') + ';' + fs.readFileSync(path.join(PUB, 'data-book.js'), 'utf8'), ctx);
const W = ctx.window, MAP = W.EMO_MAP, UI = W.EMO_UI, KEEP = W.emoKeep, I = W.BOOK_ICONS || {};

// 對照表本身：@key 要在 BOOK_ICONS、UI key 要存在
const bad = Object.entries(MAP).filter(([e, k]) => k[0] === '@' ? !I[k.slice(1)] : !UI[k]);
if (bad.length) { console.log('✗ 對照表指到不存在的圖示：' + bad.map(([e, k]) => e + '→' + k).join(' ')); process.exitCode = 1; }

const RE = /(?:[\u{1F1E6}-\u{1F1FF}]{2}|\p{Extended_Pictographic}|[\u{1F200}-\u{1F2FF}])(?:️|[\u{1F3FB}-\u{1F3FF}])?(?:‍\p{Extended_Pictographic}️?)*/gu;
const FLAG = /^[\u{1F1E6}-\u{1F1FF}]{2}$/u;
const known = e => { if (FLAG.test(e) || MAP[e]) return true; const b = e.replace(/️/g, ''); return !!(MAP[b] || MAP[Array.from(b)[0]]); };
const files = fs.readdirSync(PUB).filter(f => /^(index\.html|data-.*\.js)$/.test(f));
files.push(...fs.readdirSync(path.join(PUB, 'gvideo')).filter(f => f.endsWith('.js')).map(f => 'gvideo/' + f));
const miss = {}; let total = 0;
for (const f of files) {
  const s = fs.readFileSync(path.join(PUB, f), 'utf8');
  for (const m of s.matchAll(RE)) {
    const e = m[0]; if (KEEP.test(e.replace(/️/g, ''))) continue; total++;
    if (!known(e)) { (miss[e] = miss[e] || { n: 0, f: new Set() }).n++; miss[e].f.add(f); }
  }
}
const list = Object.entries(miss).sort((a, b) => b[1].n - a[1].n);
console.log('emoji 掃描：' + files.length + ' 個檔、' + total + ' 處；對照表 ' + Object.keys(MAP).length + ' 個');
if (list.length) {
  console.log('✗ ' + list.length + ' 種 emoji 還沒有線稿對照：');
  list.forEach(([e, v]) => console.log('  ' + e + '  ×' + v.n + '  ' + [...v.f].join(', ')));
  process.exitCode = 1;
} else if (!bad.length) console.log('✓ 全部 emoji 都有線稿對照');
