/**
 * flexMessages.ts — 所有 LINE 訊息的組裝（index.ts 不直接寫 Flex JSON）
 *
 * 視覺方向：clean / minimal / soft / educational，白底、低飽和、手機優先。
 * 只用 LINE Flex 官方支援的 component：box / text / span / button / separator。
 * 版面切成 buildHeaderSection / buildExampleSection / buildActionGrid / buildTipSection，
 * 方便單獨調整，不影響查字與 postback 邏輯。
 */
import type { Example, WordEntry } from './vocabulary';
import { buildPostback } from './line';

/* ---------- 色票 ----------
   灰階為主，兩個學習情境（General / QA）各用一個低飽和輔色，
   按鈕另外兩個色只出現在淡背景上，不做實心高飽和色塊。 */
const INK = '#17202A'; // 單字、例句英文
const BODY = '#2B333B'; // 中文意思
const MUTED = '#7A8189'; // 英文定義
const SUB = '#8A8F98'; // 音標、中文翻譯、次要說明
const LINE_SOFT = '#EEF1F4'; // 唯一一條分隔線

const BLUE = '#2E6FA7';
const BLUE_BG = '#F1F6FB';
const AMBER = '#A8681B';
const AMBER_BG = '#FBF5EC';
const GREEN = '#3B7D57';
const GREEN_BG = '#EDF5EF';
const PURPLE = '#6B5AA6';
const PURPLE_BG = '#F2EFF8';
const NEUTRAL_BG = '#F7F9FB';

const CAT_LABEL: Record<string, string> = {
  qa: 'QA',
  workplace: 'Workplace',
  daily: 'Daily',
  health: 'Health',
  learning: 'Learning',
  food: 'Food',
};

const cut = (s: string, n: number) => {
  const t = String(s ?? '').trim();
  return t.length > n ? t.slice(0, n - 1) + '…' : t;
};

/** LINE 按鈕 label 最多 20 個字 */
const label = (s: string) => cut(s, 20);

export function siteUrls(env: { B2LAB_URL?: string; QA_URL?: string }) {
  return {
    b2lab: env.B2LAB_URL || 'https://english-b2-lab.web.app/',
    qa: env.QA_URL || 'https://rexon-qa-english.web.app/',
  };
}

/**
 * 「完整學習」深連結。兩個站都吃 ?w= 參數（見各站 index.html 的 deep link 處理），
 * 沒有對應處理時退回首頁，不會壞掉。
 */
export function studyUrl(e: WordEntry, env: { B2LAB_URL?: string; QA_URL?: string }): string {
  const { b2lab, qa } = siteUrls(env);
  const base = e.source === 'qa' ? qa : b2lab;
  let url = `${base}${base.includes('?') ? '&' : '?'}w=${encodeURIComponent(e.word)}`;
  if (e.source === 'qa') {
    // 對得到知識主題就直接開那一頁，對不到就退回帶入搜尋
    if (e.topicId) url += `&topic=${encodeURIComponent(e.topicId)}`;
  } else if (e.bookId) {
    // 知道是哪一堂課教的就一起帶上，B2 Lab 會直接開那一課的課本內容
    url += `&lesson=${encodeURIComponent(e.bookId)}`;
  }
  return url;
}

/* ---------- 例句裡的關鍵字強調 ---------- */

const escRe = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/**
 * 用 span 把例句裡的查詢字加粗。只做最單純的字尾變化（-s/-ed/-ing…），
 * 不引入任何詞形分析套件；配不到就整句用一般文字，不會出錯。
 */
function wordPattern(word: string): RegExp | null {
  const w = String(word ?? '').trim();
  if (w.length < 2) return null;
  const alts = [`${escRe(w)}(?:s|es|ed|d|ing)?`];
  if (w.endsWith('e')) alts.push(`${escRe(w.slice(0, -1))}(?:ing|ed|ion|es)`);
  try {
    return new RegExp(`(?<![A-Za-z])(?:${alts.join('|')})(?![A-Za-z])`, 'gi');
  } catch {
    return null; // 極端輸入導致 regex 不合法時就放棄強調
  }
}

/** 回傳一個 text component：命中查詢字的片段用 span 加粗，其餘保持一般文字 */
function sentenceText(sentence: string, word: string, accent: string) {
  const text = cut(sentence, 200);
  const base = { type: 'text', size: 'sm', color: INK, wrap: true, margin: 'md' };
  const re = wordPattern(word);
  if (!re) return { ...base, text };

  const spans: any[] = [];
  let last = 0;
  for (const m of text.matchAll(re)) {
    const i = m.index ?? 0;
    if (i > last) spans.push({ type: 'span', text: text.slice(last, i) });
    spans.push({ type: 'span', text: m[0], weight: 'bold', color: accent });
    last = i + m[0].length;
  }
  if (!spans.length) return { ...base, text };
  if (last < text.length) spans.push({ type: 'span', text: text.slice(last) });
  // 用 contents 時不帶 text 屬性；wrap 必須為 true 才能用 span
  return { ...base, contents: spans };
}

/* ---------- 版面區塊 ---------- */

/**
 * 詞性縮寫換成 badge 上比較好讀的英文。資料裡的寫法很多樣
 * （n. / v. / phr. v. / v./n. / n.phr. …），所以逐段換再接回來；
 * 認不得的就原樣顯示，不會變成空白。
 */
const POS_WORD: Record<string, string> = {
  n: 'Noun',
  v: 'Verb',
  adj: 'Adjective',
  adv: 'Adverb',
  prep: 'Preposition',
  conj: 'Conjunction',
  pron: 'Pronoun',
  aux: 'Aux',
  phr: 'Phrase',
  idiom: 'Idiom',
};

function posLabel(pos: string): string {
  const raw = String(pos ?? '').trim();
  if (!raw) return '';
  const parts = raw
    .split(/[/|]/)
    .map((p) => p.trim().toLowerCase().replace(/\./g, ' ').trim())
    .filter(Boolean);
  if (!parts.length) return raw;
  const words = parts.map((p) => {
    const toks = p.split(/\s+/).filter(Boolean);
    if (toks.some((t) => !POS_WORD[t])) return null;
    // 帶 phr 的組合（phr. v. 片語動詞、n.phr. 名詞片語）用「主詞性 + phr.」表示
    const others = toks.filter((t) => t !== 'phr');
    if (toks.includes('phr')) {
      return others.length ? `${POS_WORD[others[0]]} phr.` : POS_WORD.phr;
    }
    return toks.map((t) => POS_WORD[t]).join(' ');
  });
  return words.every(Boolean) ? words.join(' / ') : raw;
}

/** 小圓角淡色 badge（詞性、CEFR） */
function badge(text: string, color: string, bg: string) {
  return {
    type: 'box',
    layout: 'vertical',
    flex: 0,
    backgroundColor: bg,
    cornerRadius: '6px',
    paddingAll: '4px',
    paddingStart: '10px',
    paddingEnd: '10px',
    contents: [{ type: 'text', text: cut(text, 16), size: 'xxs', weight: 'bold', color }],
  };
}

/**
 * 單字 / 音標 / badge / 中文 / 英文定義。
 * 每一項缺了就整行不畫，不留空白也不塞 placeholder。
 */
export function buildHeaderSection(e: WordEntry): any[] {
  const out: any[] = [
    { type: 'text', text: cut(e.word, 60), size: 'xxl', weight: 'bold', color: INK, wrap: true },
  ];

  if (e.ipa) {
    out.push({ type: 'text', text: cut(e.ipa, 48), size: 'xs', color: SUB, margin: 'sm' });
  }

  const badges: any[] = [];
  if (e.pos) badges.push(badge(posLabel(e.pos), BLUE, BLUE_BG));
  if (e.level) badges.push(badge(e.level, GREEN, GREEN_BG));
  // 詞性與程度都沒有時，用類別當作最低限度的標示，不留空
  if (!badges.length && CAT_LABEL[e.category]) {
    badges.push(badge(CAT_LABEL[e.category], SUB, NEUTRAL_BG));
  }
  if (badges.length) {
    out.push({
      type: 'box',
      layout: 'horizontal',
      margin: 'md',
      spacing: 'sm',
      contents: [...badges, { type: 'filler' }],
    });
  }

  out.push({
    type: 'text',
    text: cut(e.translation || e.definition || '（這個字目前沒有中文翻譯）', 60),
    size: 'lg',
    weight: 'bold',
    color: BODY,
    wrap: true,
    margin: 'md',
  });

  // 有中文翻譯時才另外顯示英文定義，避免同一句講兩次
  if (e.definition && e.translation) {
    out.push({
      type: 'text',
      text: cut(e.definition, 120),
      size: 'sm',
      color: MUTED,
      wrap: true,
      maxLines: 2,
      margin: 'sm',
    });
  }

  return out;
}

/**
 * General / QA 用同一個版型，只靠淡背景與標題顏色區分。
 * 沒有例句時改成矮很多的 empty state，不留大片空白。
 */
export function buildExampleSection(opts: {
  title: string;
  accent: string;
  background: string;
  example?: Example;
  emptyText: string;
  word: string;
  margin: string;
}): any {
  const { title, accent, background, example, emptyText, word, margin } = opts;
  const heading = { type: 'text', text: title, size: 'xxs', weight: 'bold', color: accent };

  if (!example || !example.en) {
    return {
      type: 'box',
      layout: 'vertical',
      margin,
      backgroundColor: NEUTRAL_BG,
      cornerRadius: '10px',
      paddingAll: '10px',
      paddingStart: '14px',
      paddingEnd: '14px',
      contents: [
        heading,
        { type: 'text', text: emptyText, size: 'xs', color: SUB, wrap: true, margin: 'sm' },
      ],
    };
  }

  const contents: any[] = [heading, sentenceText(example.en, word, accent)];
  if (example.zh) {
    contents.push({
      type: 'text',
      text: cut(example.zh, 120),
      size: 'xs',
      color: SUB,
      wrap: true,
      margin: 'sm',
    });
  }

  return {
    type: 'box',
    layout: 'vertical',
    margin,
    backgroundColor: background,
    cornerRadius: '12px',
    paddingAll: '14px',
    contents,
  };
}

/** 淡色圓角底 + link 按鈕（button 本身不支援圓角，所以外面包一層 box） */
function tile(text: string, color: string, bg: string, action: any) {
  return {
    type: 'box',
    layout: 'vertical',
    backgroundColor: bg,
    cornerRadius: '10px',
    contents: [
      {
        type: 'button',
        style: 'link',
        height: 'sm',
        color,
        action: { ...action, label: label(text) },
      },
    ],
  };
}

/** 2 x 2 按鈕格。action 完全沿用原本的 postback / uri，不做任何更動。 */
export function buildActionGrid(e: WordEntry, env: { B2LAB_URL?: string; QA_URL?: string }): any[] {
  const row = (cells: any[]) => ({
    type: 'box',
    layout: 'horizontal',
    spacing: 'md',
    contents: cells,
  });
  return [
    row([
      tile('更多例句', BLUE, BLUE_BG, {
        type: 'postback',
        data: buildPostback('more', e.word),
        displayText: `${e.word}｜更多例句`,
      }),
      tile('QA 例句', AMBER, AMBER_BG, {
        type: 'postback',
        data: buildPostback('qa', e.word),
        displayText: `${e.word}｜QA 例句`,
      }),
    ]),
    row([
      tile('相關單字', GREEN, GREEN_BG, {
        type: 'postback',
        data: buildPostback('rel', e.word),
        displayText: `${e.word}｜相關單字`,
      }),
      tile('完整學習', PURPLE, PURPLE_BG, { type: 'uri', uri: studyUrl(e, env) }),
    ]),
  ];
}

/**
 * 學習提示。只有資料真的有搭配詞時才顯示，沒有就整塊不畫 —— 不編造 Tip。
 * （目前的 vocabulary.json 還沒有 collocations 欄位，所以這一區實際上不會出現。）
 */
export function buildTipSection(e: WordEntry): any | null {
  const cols = (e.collocations || []).map((c) => String(c ?? '').trim()).filter(Boolean);
  if (!cols.length) return null;
  return {
    type: 'text',
    text: cut(`Tip: ${cols.slice(0, 2).join('｜')}`, 80),
    size: 'xxs',
    color: SUB,
    wrap: true,
    margin: 'lg',
  };
}

/* ---------- 共用外框 ---------- */

function bubble(body: any[], footer?: any[]) {
  const msg: any = {
    type: 'bubble',
    body: {
      type: 'box',
      layout: 'vertical',
      paddingTop: '20px',
      paddingBottom: '16px',
      paddingStart: '20px',
      paddingEnd: '20px',
      contents: body,
    },
  };
  if (footer && footer.length) {
    msg.footer = {
      type: 'box',
      layout: 'vertical',
      spacing: 'md',
      paddingTop: '12px',
      paddingBottom: '16px',
      paddingStart: '16px',
      paddingEnd: '16px',
      contents: footer,
    };
  }
  return msg;
}

const flex = (altText: string, contents: any) => ({
  type: 'flex',
  altText: cut(altText, 300),
  contents,
});

/** 第二層卡片的標題列（回單字卡以外的訊息共用） */
function headerBox(title: string, subtitle: string, color: string) {
  return [
    { type: 'text', text: cut(title, 60), size: 'lg', weight: 'bold', color: INK, wrap: true },
    { type: 'text', text: cut(subtitle, 60), size: 'xxs', color, weight: 'bold', margin: 'xs' },
  ];
}

/** 例句列表（更多例句 / QA 例句 共用），編號用淡色小字，不畫框 */
function numberedExamples(list: Example[], word: string, accent: string) {
  return list.map((ex, i) => ({
    type: 'box',
    layout: 'vertical',
    margin: i === 0 ? 'lg' : 'xl',
    contents: [
      { type: 'text', text: String(i + 1), size: 'xxs', weight: 'bold', color: accent },
      sentenceText(ex.en, word, accent),
      ...(ex.zh
        ? [{ type: 'text', text: cut(ex.zh, 140), size: 'xs', color: SUB, wrap: true, margin: 'sm' }]
        : []),
    ],
  }));
}

/** 可點擊的單字列（相關單字 / 拼字建議 / 中文查詢 共用） */
function wordRow(w: WordEntry, accent: string, first: boolean) {
  return {
    type: 'box',
    layout: 'vertical',
    margin: first ? 'lg' : 'lg',
    backgroundColor: NEUTRAL_BG,
    cornerRadius: '10px',
    paddingAll: '12px',
    // 整塊可點：等同於使用者重新輸入這個字
    action: { type: 'postback', data: buildPostback('word', w.word), displayText: w.word },
    contents: [
      { type: 'text', text: cut(w.word, 40), size: 'md', weight: 'bold', color: accent, wrap: true },
      {
        type: 'text',
        text: cut([w.pos, w.translation || w.definition].filter(Boolean).join(' '), 60) || '—',
        size: 'xs',
        color: SUB,
        wrap: true,
        margin: 'xs',
      },
    ],
  };
}

const divider = { type: 'separator', color: LINE_SOFT };

function emptyLine(text: string) {
  return { type: 'text', text, size: 'sm', color: SUB, wrap: true, margin: 'lg' };
}

/* ---------- STEP 3：第一張單字卡 ---------- */

export function buildWordFlexMessage(e: WordEntry, env: { B2LAB_URL?: string; QA_URL?: string }) {
  const body: any[] = [
    ...buildHeaderSection(e),
    buildExampleSection({
      title: 'GENERAL EXAMPLE',
      accent: BLUE,
      background: BLUE_BG,
      example: e.general[0],
      emptyText: '目前沒有一般例句。',
      word: e.word,
      margin: 'xl',
    }),
    buildExampleSection({
      title: 'QA / WORK EXAMPLE',
      accent: AMBER,
      background: AMBER_BG,
      example: e.qa[0],
      emptyText: '目前沒有 QA 工作例句。',
      word: e.word,
      margin: 'lg',
    }),
  ];

  const tip = buildTipSection(e);
  const footer = [divider, ...buildActionGrid(e, env), ...(tip ? [tip] : [])];

  return flex(`${e.word}｜${e.translation || ''}`, bubble(body, footer));
}

/* ---------- STEP 4：更多例句 ---------- */

export function buildMoreExamplesMessage(e: WordEntry, list: Example[]) {
  const body = [
    ...headerBox(`${e.word}`, 'MORE GENERAL EXAMPLES', BLUE),
    ...(list.length
      ? numberedExamples(list, e.word, BLUE)
      : [emptyLine('目前沒有更多一般例句。')]),
  ];
  return flex(`${e.word}｜更多例句`, bubble(body, [divider, backRow(e.word)]));
}

/* ---------- STEP 5：QA 例句 ---------- */

export function buildQaExamplesMessage(e: WordEntry, list: Example[], studyLink: string) {
  const body = [
    ...headerBox(`${e.word}`, 'QA / WORK EXAMPLES', AMBER),
    ...(list.length ? numberedExamples(list, e.word, AMBER) : [emptyLine('目前沒有 QA 工作例句。')]),
  ];
  const footer = [
    divider,
    {
      type: 'box',
      layout: 'horizontal',
      spacing: 'md',
      contents: [
        tile('回到單字', BLUE, BLUE_BG, {
          type: 'postback',
          data: buildPostback('word', e.word),
          displayText: e.word,
        }),
        tile('完整學習', PURPLE, PURPLE_BG, { type: 'uri', uri: studyLink }),
      ],
    },
  ];
  return flex(`${e.word}｜QA 例句`, bubble(body, footer));
}

/* ---------- STEP 6：相關單字（可直接點擊再查一次） ---------- */

export function buildRelatedWordsMessage(e: WordEntry, related: WordEntry[]) {
  const body = [
    ...headerBox(`${e.word}`, 'RELATED WORDS', GREEN),
    { type: 'text', text: '點一下就直接查那個字', size: 'xs', color: SUB, margin: 'sm' },
    ...(related.length
      ? related.map((r, i) => wordRow(r, GREEN, i === 0))
      : [emptyLine('目前沒有相關單字。')]),
  ];
  return flex(`${e.word}｜相關單字`, bubble(body, [divider, backRow(e.word)]));
}

function backRow(word: string) {
  return {
    type: 'box',
    layout: 'horizontal',
    contents: [
      tile('回到單字', BLUE, BLUE_BG, {
        type: 'postback',
        data: buildPostback('word', word),
        displayText: word,
      }),
    ],
  };
}

/* ---------- STEP 9：找不到，但有相近的字 ---------- */

export function buildNotFoundMessage(
  query: string,
  suggestions: WordEntry[],
  env: { B2LAB_URL?: string; QA_URL?: string },
) {
  const { b2lab, qa } = siteUrls(env);

  if (suggestions.length) {
    const body = [
      {
        type: 'text',
        text: `找不到「${cut(query, 30)}」`,
        size: 'md',
        weight: 'bold',
        color: INK,
        wrap: true,
      },
      { type: 'text', text: '你是不是想找：', size: 'xs', color: SUB, margin: 'sm' },
      ...suggestions.map((s, i) => wordRow(s, BLUE, i === 0)),
    ];
    const footer = [
      divider,
      {
        type: 'box',
        layout: 'horizontal',
        contents: [
          tile(`查看 ${suggestions[0].word}`, BLUE, BLUE_BG, {
            type: 'postback',
            data: buildPostback('word', suggestions[0].word),
            displayText: suggestions[0].word,
          }),
        ],
      },
    ];
    return flex(`找不到「${query}」，你是不是想找 ${suggestions[0].word}？`, bubble(body, footer));
  }

  /* STEP 10：完全查不到 —— 不生成任何答案，只給入口 */
  const body = [
    {
      type: 'text',
      text: `目前資料庫中沒有「${cut(query, 30)}」`,
      size: 'md',
      weight: 'bold',
      color: INK,
      wrap: true,
    },
    {
      type: 'text',
      text: '直接輸入一個英文單字就可以查，例如：compensate、supplier、tolerance。',
      size: 'xs',
      color: SUB,
      wrap: true,
      margin: 'md',
    },
  ];
  const footer = [
    divider,
    {
      type: 'box',
      layout: 'horizontal',
      spacing: 'md',
      contents: [
        tile('English B2 Lab', BLUE, BLUE_BG, { type: 'uri', uri: b2lab }),
        tile('QA English', AMBER, AMBER_BG, { type: 'uri', uri: qa }),
      ],
    },
  ];
  return flex(`目前資料庫中沒有「${query}」`, bubble(body, footer));
}

/* ---------- 中文查詢結果（輸入「賠償」找英文字） ---------- */

export function buildChineseResultsMessage(query: string, hits: WordEntry[]) {
  const body = [
    ...headerBox(`「${cut(query, 20)}」`, 'CHINESE SEARCH', BLUE),
    { type: 'text', text: '點一下就直接查那個字', size: 'xs', color: SUB, margin: 'sm' },
    ...hits.map((s, i) => wordRow(s, BLUE, i === 0)),
  ];
  return flex(`「${query}」的英文`, bubble(body));
}

/** 純文字回覆（只有錯誤或提示時用） */
export const textMessage = (text: string) => ({ type: 'text', text: cut(text, 400) });
