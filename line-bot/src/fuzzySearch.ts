/**
 * fuzzySearch.ts — 拼字建議（純本機計算，不使用任何 AI / 外部 API）
 *
 * Levenshtein 編輯距離 + 兩道便宜的前置篩選：
 *   1. 長度差太多的直接跳過
 *   2. 首字母不同就要求更嚴格的距離
 * 1000 多個詞條在 Worker 上跑一次是微秒等級，不需要額外索引。
 */

/** 編輯距離；超過 max 就提早結束回 max + 1（避免整張表算完） */
export function levenshtein(a: string, b: string, max = Infinity): number {
  if (a === b) return 0;
  const al = a.length;
  const bl = b.length;
  if (al === 0) return bl;
  if (bl === 0) return al;
  if (Math.abs(al - bl) > max) return max + 1;

  let prev = new Array<number>(bl + 1);
  let cur = new Array<number>(bl + 1);
  for (let j = 0; j <= bl; j++) prev[j] = j;

  for (let i = 1; i <= al; i++) {
    cur[0] = i;
    let rowMin = cur[0];
    const ca = a.charCodeAt(i - 1);
    for (let j = 1; j <= bl; j++) {
      const cost = ca === b.charCodeAt(j - 1) ? 0 : 1;
      cur[j] = Math.min(cur[j - 1] + 1, prev[j] + 1, prev[j - 1] + cost);
      if (cur[j] < rowMin) rowMin = cur[j];
    }
    if (rowMin > max) return max + 1;
    const tmp = prev;
    prev = cur;
    cur = tmp;
  }
  return prev[bl];
}

/** 依查詢長度決定可以容忍幾個錯字 */
function tolerance(len: number): number {
  if (len <= 3) return 1;
  if (len <= 6) return 2;
  if (len <= 10) return 3;
  return 4;
}

/**
 * 從候選清單中挑出最接近的幾個（距離小的排前面，同距離短的排前面）。
 * 完全不像的字不會回傳 —— 這樣 STEP 10「完全查不到」才有辦法成立。
 */
export function bestMatches(query: string, candidates: string[], limit = 3): string[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const max = tolerance(q.length);
  const scored: Array<{ id: string; d: number }> = [];

  for (const c of candidates) {
    if (c === q) continue;
    if (Math.abs(c.length - q.length) > max) continue;
    // 首字母不同時要求更接近，避免 "xxxxxxxx" 亂配
    const strict = c.charCodeAt(0) !== q.charCodeAt(0) ? Math.max(1, max - 1) : max;
    const d = levenshtein(q, c, strict);
    if (d <= strict) scored.push({ id: c, d });
  }

  scored.sort((a, b) => a.d - b.d || a.id.length - b.id.length || a.id.localeCompare(b.id));
  return scored.slice(0, limit).map((s) => s.id);
}
