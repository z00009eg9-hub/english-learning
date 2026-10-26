/**
 * pull-sentences.mjs — 把 LINE 記下的句子拉回本機，合併進 b2lab/my-week/<ISO 週>.md，再通知 Bot 已取走（ack）。
 *
 * 週六排程（b2lab/MYWEEK_TASK.md 第 0 步）執行：
 *   node line-bot/scripts/pull-sentences.mjs
 *
 * - token 在 b2lab/my-week/.token（不進 git），對應 Worker secret SENTENCES_TOKEN
 * - 同一句（LINE id）已經在 md 裡就不重複寫；寫入成功才 ack，失敗下次會再拉到
 * - my-week/ 是公開 repo 裡的 gitignored 目錄，原句永遠不 commit
 */
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const MY_WEEK = process.env.MY_WEEK_DIR || resolve(HERE, '..', '..', 'b2lab', 'my-week');
const BOT = (process.env.BOT_URL || 'https://line-vocabulary-bot.anitachen9279.workers.dev').replace(/\/$/, '');
const TOKEN_FILE = join(MY_WEEK, '.token');

if (!existsSync(TOKEN_FILE)) {
  console.error(`[pull] 找不到 ${TOKEN_FILE}，略過（LINE 記句子還沒設定）`);
  process.exit(0);
}
const token = readFileSync(TOKEN_FILE, 'utf8').trim();
const auth = { authorization: `Bearer ${token}` };

const res = await fetch(`${BOT}/sentences`, { headers: auth });
if (!res.ok) {
  console.error(`[pull] GET /sentences 失敗 ${res.status}`);
  process.exit(1);
}
const { sentences = [] } = await res.json();
console.log(`[pull] Bot 上有 ${sentences.length} 句還沒取`);

/** 一句的 markdown（格式見 MYWEEK_TASK.md）。最後一行 LINE id 用來防重複 */
function block(s) {
  const lines = [`- [ ] ${s.zh.replace(/\s*\n\s*/g, ' ')}`];
  if (s.ai) {
    if (s.fm) lines.push(`  - 書面：${s.fm}`);
    if (s.sp) lines.push(`  - 口語：${s.sp}`);
    if (s.kw?.length) lines.push(`  - 關鍵字：${s.kw.join(', ')}`);
    for (const m of s.mis || []) lines.push(`  - 常犯錯：${m}`);
  } else {
    lines.push('  - （LINE 上 AI 沒翻出來，請補書面／口語／關鍵字）');
  }
  lines.push(`  - LINE：${s.id}`);
  return lines.join('\n');
}

const done = [];
const byWeek = new Map();
for (const s of sentences) {
  if (!byWeek.has(s.week)) byWeek.set(s.week, []);
  byWeek.get(s.week).push(s);
}

for (const [week, list] of byWeek) {
  const file = join(MY_WEEK, `${week}.md`);
  let md = existsSync(file)
    ? readFileSync(file, 'utf8').replace(/\r\n/g, '\n')
    : `# ${week} 我的職場句子（本機私有，不進 git）\n\n格式見 b2lab/MYWEEK_TASK.md。\`- [ ]\` 未用、\`- [x] … → my##\` 已做成週記。\n`;
  let added = 0;
  for (const s of list) {
    if (md.includes(`LINE：${s.id}`)) {
      done.push(s.id); // 上次寫進去了但 ack 沒成功
      continue;
    }
    const header = `## ${s.date}`;
    const at = md.indexOf(`\n${header}\n`);
    if (at === -1) {
      md = md.replace(/\n*$/, '\n') + `\n${header}\n${block(s)}\n`;
    } else {
      // 插在這一天的區塊最後（下一個 ## 之前）
      const start = at + header.length + 2;
      const next = md.indexOf('\n## ', start);
      const end = next === -1 ? md.length : next;
      const before = md.slice(0, end).replace(/\n*$/, '\n');
      md = before + block(s) + '\n' + (next === -1 ? '' : '\n' + md.slice(next + 1));
    }
    done.push(s.id);
    added++;
  }
  writeFileSync(file, md, 'utf8');
  console.log(`[pull] ${week}.md 新增 ${added} 句`);
}

if (done.length) {
  const ack = await fetch(`${BOT}/sentences/ack`, {
    method: 'POST',
    headers: { ...auth, 'content-type': 'application/json' },
    body: JSON.stringify({ ids: done }),
  });
  console.log(`[pull] ack ${ack.ok ? (await ack.json()).acked : '失敗 ' + ack.status} 句`);
}
