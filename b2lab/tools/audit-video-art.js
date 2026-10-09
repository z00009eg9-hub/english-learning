// 影片版左圖盤點：每句一張不重複的進度表
//
//   node b2lab/tools/audit-video-art.js            列出摘要 + 待辦前 10 課
//   node b2lab/tools/audit-video-art.js --next 3   只印接下來要做的 3 個課號（排程用）
//   node b2lab/tools/audit-video-art.js --report   另外寫出 b2lab/video-art-audit.md 完整明細
//
// 判斷標準見記憶 b2lab-video-scene-art：
//   重複格 = 場景句數 − 不重複圖數；通用圖示格 = 用 BOOK_ICONS 小圖示而非 VIDEO_ART 專屬線稿的格數
const fs = require('fs');
const path = require('path');

const PUB = path.join(__dirname, '..', 'public');
global.window = {};
global.document = {};
require(path.join(PUB, 'data-video.js'));
try { require(path.join(PUB, 'data-book.js')); } catch (e) {}

const V = window.VIDEO;
const LIB = new Set(Object.keys(window.VIDEO_ART));
const ICON = new Set(Object.keys(window.BOOK_ICONS || {}));

const rows = [];
const used = new Map();
const bad = [];

for (const [id, d] of Object.entries(V)) {
  const sc = (d.lines || []).map((l, i) => ({ l, i })).filter(x => (x.l.vis && x.l.vis.type) === 'scene');
  if (!sc.length) continue;
  const arts = sc.map(x => x.l.vis.art || d.sceneArt || 'station');
  arts.forEach(a => {
    used.set(a, (used.get(a) || 0) + 1);
    if (!LIB.has(a) && !ICON.has(a)) bad.push(id + ':' + a);
  });
  const cnt = {};
  arts.forEach(a => cnt[a] = (cnt[a] || 0) + 1);
  let adj = 0;
  for (let i = 1; i < arts.length; i++) if (arts[i] === arts[i - 1]) adj++;
  const uniq = Object.keys(cnt).length;
  const gen = arts.filter(a => !LIB.has(a) && ICON.has(a)).length;
  rows.push({
    id, date: d.date, title: d.titleCn, n: arts.length, uniq,
    dup: arts.length - uniq, adj, max: Math.max(...Object.values(cnt)), gen, arts, sc,
  });
}

// 待辦排序：先清重複格多的，同分再看通用圖示格多的
const todo = rows.filter(r => r.dup > 0 || r.gen > 0)
  .sort((a, b) => (b.dup - a.dup) || (b.gen - a.gen));

const T = f => rows.reduce((s, r) => s + f(r), 0);

const nextIdx = process.argv.indexOf('--next');
if (nextIdx >= 0) {
  const n = parseInt(process.argv[nextIdx + 1], 10) || 3;
  console.log(todo.slice(0, n).map(r => r.id).join(' '));
  process.exit(0);
}

const out = [];
out.push('# 影片左圖盤點\n');
out.push(`- 盤點時間：${new Date().toISOString().slice(0, 16).replace('T', ' ')}`);
out.push(`- 有場景的課：${rows.length}；場景句 ${T(r => r.n)}；不同圖 ${T(r => r.uniq)}；重複格 ${T(r => r.dup)}；相鄰同圖 ${T(r => r.adj)}`);
out.push(`- 圖庫 ${LIB.size} 張；場景用到的專屬圖 ${[...used.keys()].filter(a => LIB.has(a)).length} 張；通用小圖示佔 ${T(r => r.gen)} 個場景格；沒被用過的專屬圖 ${[...LIB].filter(a => !used.has(a)).length} 張`);
out.push(`- 指向不存在圖庫的 art：${bad.length ? bad.join(', ') : '無'}`);
out.push(`- **完全合格的課（重複 0 且無通用圖示）：${rows.length - todo.length} / ${rows.length}；還要做 ${todo.length} 課**\n`);

const tiers = [[10, 999], [5, 9], [1, 4], [0, 0]];
out.push('| 級別 | 課數 | 重複格合計 |\n|---|---|---|');
for (const [a, b] of tiers) {
  const r = rows.filter(x => x.dup >= a && x.dup <= b);
  out.push(`| 重複 ${a}${b > a ? '～' + (b === 999 ? '' : b) : ''}${b === 999 ? '+' : ''} | ${r.length} | ${r.reduce((s, x) => s + x.dup, 0)} |`);
}

out.push('\n## 待辦明細（重複格多的在前）\n\n| 課 | 日期 | 標題 | 場景句 | 不同圖 | 重複格 | 相鄰同圖 | 單圖最多次 | 通用圖示格 |\n|---|---|---|---|---|---|---|---|---|');
todo.forEach(r => out.push(`| ${r.id} | ${r.date} | ${r.title} | ${r.n} | ${r.uniq} | ${r.dup} | ${r.adj} | ${r.max} | ${r.gen} |`));

out.push('\n## 每課要換圖的句子\n');
for (const r of todo) {
  out.push(`### ${r.id} ${r.title}（重複 ${r.dup} 格、通用圖示 ${r.gen} 格）`);
  const seen = {};
  r.sc.forEach((x, k) => {
    const a = r.arts[k];
    seen[a] = (seen[a] || 0) + 1;
    const why = seen[a] > 1 ? '重複' : (!LIB.has(a) && ICON.has(a) ? '通用圖示' : null);
    if (why) out.push(`- #${x.i} [${a}] ${why}：${(x.l.en || '').slice(0, 70)}`);
  });
  out.push('');
}

const report = out.join('\n');
if (process.argv.includes('--report')) {
  fs.writeFileSync(path.join(__dirname, '..', '..', 'video-art-audit.md'), report);
  console.log('已寫入 video-art-audit.md');
}
console.log(out.slice(0, 16).join('\n'));
