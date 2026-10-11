/* ============================================================
   .claude → .agents 同步（2026-10-11）
   用法：
     node tools/sync-agent-skills.js           依 .claude 重新產生 .agents
     node tools/sync-agent-skills.js --check   只檢查有沒有不同步（CI／提交前用，不同步就 exit 1）

   為什麼需要這支：
   Claude Code 讀 `.claude/`，Codex 讀 `.agents/`（它是 .claude 的轉換副本）。
   兩份以前各改各的，`.agents` 曾經落後好幾條規則，sync-notes 還指向停用的
   `G:\我的雲端硬碟\英文筆記\.Codex\…`。現在**正本一律是 `.claude/`**，
   改完 `.claude` 就跑這支重新產生，再一起 commit。
   （repo 根目錄的 AGENTS.md 是另一份「跨工具共用規範」，由人手動維護，不在這裡處理。）
   ============================================================ */
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');
const check = process.argv.includes('--check');

/* 直接整份複製的檔案：.claude 路徑 → .agents 路徑 */
const COPY = {
  '.claude/skills/english-learning/SKILL.md': '.agents/skills/english-learning/SKILL.md',
};
for (const gs of ['article-to-paragraphs', 'fix-table-layout', 'prose-to-paragraphs', 'restyle-and-prose', 'restyle-format'])
  COPY['.claude/skills/english-learning/' + gs + '.gs'] = '.agents/skills/english-learning/' + gs + '.gs';

/* slash command 轉成 skill：加上 Codex 要的 frontmatter 包裝，內文照抄 */
const WRAP = {
  'create-lesson-doc': '.claude/commands/create-lesson-doc.md',
  'sync-notes': '.claude/commands/sync-notes.md',
};
const wrapper = (name, body) =>
  '---\n'
  + 'name: "source-command-' + name + '"\n'
  + 'description: "Migrated source command `' + name + '`"\n'
  + '---\n\n'
  + '# source-command-' + name + '\n\n'
  + 'Use this skill when the user asks to run the migrated source command `' + name + '`.\n\n'
  + '## Command Template\n\n'
  + body;

const want = {};
for (const [src, dst] of Object.entries(COPY)) {
  const p = path.join(ROOT, src);
  if (!fs.existsSync(p)) throw new Error('找不到正本 ' + src);
  want[dst] = fs.readFileSync(p, 'utf8');
}
for (const [name, src] of Object.entries(WRAP)) {
  const p = path.join(ROOT, src);
  if (!fs.existsSync(p)) throw new Error('找不到正本 ' + src);
  want['.agents/skills/source-command-' + name + '/SKILL.md'] = wrapper(name, fs.readFileSync(p, 'utf8'));
}

const norm = s => s.replace(/\r\n/g, '\n');
const diff = [], wrote = [];
for (const [dst, text] of Object.entries(want)) {
  const p = path.join(ROOT, dst);
  const now = fs.existsSync(p) ? fs.readFileSync(p, 'utf8') : null;
  if (now !== null && norm(now) === norm(text)) continue;
  diff.push(dst + (now === null ? '（缺少）' : '（內容不同）'));
  if (!check) {
    fs.mkdirSync(path.dirname(p), { recursive: true });
    fs.writeFileSync(p, text);
    wrote.push(dst);
  }
}

if (check) {
  if (diff.length) {
    console.log('✗ .agents 和 .claude 不同步：\n  ' + diff.join('\n  ')
      + '\n\n改 .claude 之後要跑：node tools/sync-agent-skills.js');
    process.exit(1);
  }
  console.log('✓ .agents 與 .claude 同步（' + Object.keys(want).length + ' 個檔案）');
} else {
  console.log(wrote.length ? '已更新 ' + wrote.length + ' 個檔案：\n  ' + wrote.join('\n  ')
    : '已經是最新，沒有檔案需要更新（' + Object.keys(want).length + ' 個檔案）');
}
