// 把影片左圖的片段檔併進 data-video.js（片段檔格式見 verify-video-frag.js）
//
//   node b2lab/tools/merge-video-frag.js --frag <資料夾> --check <課號> [...]  只驗切割正確，不讀片段
//   node b2lab/tools/merge-video-frag.js --frag <資料夾> --dry   <課號> [...]  併檔預演，不寫入
//   node b2lab/tools/merge-video-frag.js --frag <資料夾>         <課號> [...]  實際寫入
//
// 併法：art.js 原樣附到檔尾另起一塊；map.json 逐筆改該課 lines[i] 的 vis.art。
// 先跑 --check 再 --dry 再真的寫 —— data-video.js 裡課程宣告有兩種寫法
// （window.VIDEO.bk… 和 window.VIDEO["bk…"]）、排版也有兩種（緊湊式與 JSON 式），
// 所以動手前一定要用「切出的筆數＝載入後 lines.length」自我校驗。
const fs = require('fs');
const path = require('path');

const argv = process.argv.slice(2);
const fi = argv.indexOf('--frag');
if (fi < 0 || !argv[fi + 1]) {
  console.error('用法：node b2lab/tools/merge-video-frag.js --frag <資料夾> [--check|--dry] <課號> [...]');
  process.exit(2);
}
const FRAG = path.resolve(argv[fi + 1]);
const dry = argv.includes('--dry');
const checkOnly = argv.includes('--check');
const ids = argv.filter((a, i) => i !== fi && i !== fi + 1 && !a.startsWith('--'));

const PUB = path.join(__dirname, '..', 'public');
const DV = path.join(PUB, 'data-video.js');

global.window = {};
global.document = {};
require(DV);
const V = window.VIDEO;
let src = fs.readFileSync(DV, 'utf8');

// 跳過字串與註解往後掃；onDepth 回傳非 undefined 即停止並回傳該值
function scan(s, from, onDepth) {
  let i = from, depth = 0;
  while (i < s.length) {
    const c = s[i];
    if (c === '/' && s[i + 1] === '/') { i = s.indexOf('\n', i); if (i < 0) return -1; continue; }
    if (c === '/' && s[i + 1] === '*') { i = s.indexOf('*/', i); if (i < 0) return -1; i += 2; continue; }
    if (c === '"' || c === "'" || c === '`') {
      const q = c; i++;
      while (i < s.length && s[i] !== q) { if (s[i] === '\\') i++; i++; }
      i++; continue;
    }
    const r = onDepth(c, i, depth);
    if (r !== undefined) return r;
    if ('{[('.includes(c)) depth++;
    else if ('}])'.includes(c)) depth--;
    i++;
  }
  return -1;
}

// 一課 lines[] 裡每一筆 {…} 的 [起, 迄]
function entryRanges(s, id) {
  const re = new RegExp('window\\.VIDEO(?:\\.' + id + '|\\["' + id + '"\\])\\s*=\\s*\\{');
  const m = re.exec(s);
  if (!m) throw new Error(id + '：找不到課程宣告');
  const declStart = m.index + m[0].length - 1;
  let linesKey = -1;
  scan(s, declStart + 1, (c, i, d) => {
    if (d === 0 && /^["']?lines["']?\s*:/.test(s.slice(i, i + 12))) { linesKey = i; return i; }
    if (d === 0 && c === '}') return -1;
  });
  if (linesKey < 0) throw new Error(id + '：找不到 lines');
  const open = s.indexOf('[', linesKey);
  const ranges = [];
  let start = -1;
  scan(s, open + 1, (c, i, d) => {
    if (d === 0 && c === '{') start = i;
    if (d === 1 && c === '}') { ranges.push([start, i + 1]); start = -1; }
    if (d === 0 && c === ']') return i;
  });
  return ranges;
}

if (checkOnly) {
  let bad = 0;
  for (const id of ids) {
    let n;
    try { n = entryRanges(src, id).length; } catch (e) { console.log(`✗ ${id} ${e.message}`); bad++; continue; }
    const want = V[id].lines.length;
    console.log(`${n === want ? '✓' : '✗'} ${id} 切出 ${n} / 應為 ${want}`);
    if (n !== want) bad++;
  }
  process.exit(bad ? 1 : 0);
}

const artBlocks = [];
const edits = [];

for (const id of ids) {
  const map = JSON.parse(fs.readFileSync(path.join(FRAG, id + '.map.json'), 'utf8'));
  const ranges = entryRanges(src, id);
  if (ranges.length !== V[id].lines.length)
    throw new Error(`${id}：切出 ${ranges.length} 筆，載入後是 ${V[id].lines.length} 筆 — 不動手`);

  for (const [k, newArt] of Object.entries(map)) {
    const i = +k;
    const [a, b] = ranges[i];
    const entry = src.slice(a, b);
    const old = V[id].lines[i].vis && V[id].lines[i].vis.art;
    const re = old
      ? new RegExp('(["\']?art["\']?\\s*:\\s*)(["\'])' + old + '\\2')
      : /(["']?type["']?\s*:\s*(["'])scene\2)/;
    if (!re.test(entry)) throw new Error(`${id} #${i}：找不到要改的 art（舊值 ${old}）`);
    const next = old
      ? entry.replace(re, (mm, p1, q) => p1 + q + newArt + q)
      : entry.replace(re, (mm, p1, q) => p1 + ', art: ' + q + newArt + q);
    edits.push({ at: a, len: b - a, text: next });
  }
  artBlocks.push({ id, text: fs.readFileSync(path.join(FRAG, id + '.art.js'), 'utf8').replace(/\s*$/, '') + '\n' });
}

edits.sort((x, y) => y.at - x.at);
for (const e of edits) src = src.slice(0, e.at) + e.text + src.slice(e.at + e.len);
for (const b of artBlocks) src += '\n/* ===== ' + b.id + ' 影片左圖 ===== */\n' + b.text;

console.log(`改 ${edits.length} 格、附 ${artBlocks.length} 個圖庫區塊`);
if (dry) { console.log('(dry run，沒寫入)'); process.exit(0); }
fs.writeFileSync(DV, src);
console.log('已寫入 data-video.js');
