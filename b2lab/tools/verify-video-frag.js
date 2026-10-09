// 驗證影片左圖的「片段檔」—— 平行產圖時每個 agent 只寫自己的片段，不碰 data-video.js
//
//   node b2lab/tools/verify-video-frag.js --frag <片段資料夾> <課號> [...]
//
// 片段檔（由產圖的 agent 寫出，兩個一組）：
//   <課號>.art.js    自成一塊的 IIFE，Object.assign(window.VIDEO_ART, {…}) 只放這課的新圖
//   <課號>.map.json  {"<lines 陣列索引>": "<新圖名>"}，只列有換的格子
//
// 驗三條件（見記憶 b2lab-video-scene-art）：場景句數＝不重複圖數、無通用圖示、無未解析 art
// 另擋三種踩過的坑：viewBox 不是 200x150、字串裡有 undefined/NaN、同一元素重複 stroke-width
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const argv = process.argv.slice(2);
const fi = argv.indexOf('--frag');
if (fi < 0 || !argv[fi + 1]) {
  console.error('用法：node b2lab/tools/verify-video-frag.js --frag <片段資料夾> <課號> [...]');
  process.exit(2);
}
const FRAG = path.resolve(argv[fi + 1]);
const ids = argv.filter((a, i) => i !== fi && i !== fi + 1);
const PUB = path.join(__dirname, '..', 'public');

global.window = {};
global.document = {};
require(path.join(PUB, 'data-video.js'));
try { require(path.join(PUB, 'data-book.js')); } catch (e) {}
const ICON = new Set(Object.keys(window.BOOK_ICONS || {}));
const BASE = new Set(Object.keys(window.VIDEO_ART));

let bad = 0;
for (const id of ids) {
  const errs = [];
  const artFile = path.join(FRAG, id + '.art.js');
  const mapFile = path.join(FRAG, id + '.map.json');
  if (!fs.existsSync(artFile) || !fs.existsSync(mapFile)) { console.log(`✗ ${id} 缺檔`); bad++; continue; }

  const before = new Set(Object.keys(window.VIDEO_ART));
  try { vm.runInThisContext(fs.readFileSync(artFile, 'utf8'), { filename: artFile }); }
  catch (e) { console.log(`✗ ${id} art.js 執行失敗：${e.message}`); bad++; continue; }
  const added = Object.keys(window.VIDEO_ART).filter(k => !before.has(k));

  for (const k of added) {
    const s = window.VIDEO_ART[k];
    if (typeof s !== 'string' || !s.startsWith('<svg viewBox="0 0 200 150"')) errs.push(`${k} 不是 200x150 svg`);
    if (/undefined|NaN/.test(s)) errs.push(`${k} 內含 undefined/NaN`);
    // 同一元素兩個 stroke-width／stroke，parser 只取第一個，後面指定的會靜默失效
    if (/<[^>]*stroke-width="[^"]*"[^>]*stroke-width=/.test(s)) errs.push(`${k} 有元素重複 stroke-width`);
    if (/<[^>]*\sstroke="[^"]*"[^>]*\sstroke="/.test(s)) errs.push(`${k} 有元素重複 stroke`);
  }

  const d = window.VIDEO[id];
  if (!d) { console.log(`✗ ${id} 課不存在`); bad++; continue; }
  const map = JSON.parse(fs.readFileSync(mapFile, 'utf8'));
  const arts = [];
  d.lines.forEach((l, i) => {
    if (!(l.vis && l.vis.type === 'scene')) { if (map[i] != null) errs.push(`#${i} 不是場景句卻有指派`); return; }
    arts.push({ i, a: map[i] != null ? map[i] : (l.vis.art || d.sceneArt || 'station') });
  });
  for (const { i, a } of arts) {
    if (!window.VIDEO_ART[a]) errs.push(`#${i} art "${a}" ${ICON.has(a) ? '是通用小圖示' : '不存在'}`);
    else if (!BASE.has(a) && !added.includes(a)) errs.push(`#${i} art "${a}" 來自別課片段`);
  }
  const seen = new Map();
  for (const { i, a } of arts) { if (seen.has(a)) errs.push(`#${i} 與 #${seen.get(a)} 重複用 ${a}`); seen.set(a, i); }

  if (errs.length) { bad++; console.log(`✗ ${id}（場景 ${arts.length}、新圖 ${added.length}）`); errs.forEach(e => console.log('   - ' + e)); }
  else console.log(`✓ ${id} 場景 ${arts.length} 句／不重複 ${seen.size} 張／新增 ${added.length} 張`);
}
process.exit(bad ? 1 : 0);
