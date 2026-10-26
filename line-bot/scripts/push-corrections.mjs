/**
 * push-corrections.mjs — 把週六校正好的句子寫回 LINE Bot（POST /sentences/correct）。
 *
 * 週六排程（b2lab/MYWEEK_TASK.md 第 0 步最後）執行：
 *   node line-bot/scripts/push-corrections.mjs          # 寫回
 *   node line-bot/scripts/push-corrections.mjs --dry    # 只印出會送什麼
 *
 * 只送 `- LINE：<id>（已校正）` 的句子；讀最近 3 週的 b2lab/my-week/<週>.md。
 * Bot 端會比對，口語版沒改就不重做語音，所以重複執行不會多花額度。
 * 之後在 LINE 按舊卡片的「常犯錯・更多」或傳「本週句子」，看到的就是校正版。
 */
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const MY_WEEK = process.env.MY_WEEK_DIR || resolve(HERE, '..', '..', 'b2lab', 'my-week');
const BOT = (process.env.BOT_URL || 'https://line-vocabulary-bot.anitachen9279.workers.dev').replace(/\/$/, '');
const TOKEN_FILE = join(MY_WEEK, '.token');
const DRY = process.argv.includes('--dry');

/** 「英文（中文）」→ { en, zh }；中文括號一定在最後 */
export function splitZh(s) {
  const m = String(s).trim().match(/^(.*?)\s*（([^（）]*)）$/);
  return m ? { en: m[1].trim(), zh: m[2].trim() } : { en: String(s).trim(), zh: '' };
}

/** 一個 md 檔 → 已校正的句子 */
export function parseCorrections(md) {
  const out = [];
  const blocks = md.replace(/\r\n/g, '\n').split(/\n(?=- \[[ x]\] )/);
  for (const b of blocks) {
    const idm = b.match(/^\s+- LINE：(\S+?)\s*（已校正）\s*$/m);
    if (!idm) continue;
    const field = (name) => {
      const m = b.match(new RegExp(`^\\s+- ${name}：(.+)$`, 'm'));
      return m ? m[1].trim() : null;
    };
    const item = { id: idm[1] };
    const fm = field('書面');
    if (fm !== null) ({ en: item.fm, zh: item.fmZh } = splitZh(fm));
    const sp = field('口語');
    if (sp !== null) ({ en: item.sp, zh: item.spZh } = splitZh(sp));
    const kw = field('關鍵字');
    if (kw !== null) {
      // 用逗號分，但括號裡的逗號不算
      const parts = kw.split(/,\s*(?![^（]*）)/).map(splitZh).filter((k) => k.en);
      item.kw = parts.map((k) => k.en);
      item.kwZh = parts.map((k) => k.zh);
    }
    const mis = [...b.matchAll(/^\s+- 常犯錯：(.+)$/gm)].map((m) => m[1].trim());
    item.mis = mis;
    out.push(item);
  }
  return out;
}

const isMain = process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isMain) {
  if (!existsSync(TOKEN_FILE)) {
    console.error(`[correct] 找不到 ${TOKEN_FILE}，略過`);
    process.exit(0);
  }
  const files = readdirSync(MY_WEEK)
    .filter((f) => /^\d{4}-W\d{2}\.md$/.test(f))
    .sort()
    .slice(-3);
  const items = files.flatMap((f) => parseCorrections(readFileSync(join(MY_WEEK, f), 'utf8')));
  console.log(`[correct] ${files.join(', ')}：已校正 ${items.length} 句`);
  if (DRY) {
    console.log(JSON.stringify(items, null, 2));
    process.exit(0);
  }
  if (!items.length) process.exit(0);
  const res = await fetch(`${BOT}/sentences/correct`, {
    method: 'POST',
    headers: {
      authorization: `Bearer ${readFileSync(TOKEN_FILE, 'utf8').trim()}`,
      'content-type': 'application/json',
    },
    body: JSON.stringify({ items }),
  });
  if (!res.ok) {
    console.error(`[correct] 失敗 ${res.status}`);
    process.exit(1);
  }
  const r = await res.json();
  console.log(`[correct] 寫回 ${r.updated} 句、重做語音 ${r.reTts} 句${r.notFound.length ? `、Bot 上已過期 ${r.notFound.length} 句` : ''}`);
}
