/**
 * flexMessages.ts — 所有 LINE 訊息的組裝（index.ts 不直接寫 Flex JSON）
 *
 * UI 原則：白底、手機優先、資訊層級清楚、顏色最少。
 * 第一張卡只放：單字 / 詞性 / CEFR / 中文 / 1 句 General / 1 句 QA / 4 顆按鈕。
 */
import type { Example, WordEntry } from './vocabulary';
import { buildPostback } from './line';

/* ---------- 色票：灰階為主，只用兩個輔助色區分 General 與 QA ---------- */
const INK = '#1A1A1A';
const SUB = '#8A8F98';
const BODY = '#4A4F57';
const GENERAL = '#2F6FB2';
const QA = '#A76322';

const CAT_LABEL: Record<string, string> = {
  qa: 'QA 詞彙',
  workplace: '職場',
  daily: '日常',
  health: '健康',
  learning: '學習',
  food: '飲食',
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

/* ---------- 共用元件 ---------- */

/** 單字下面那行小字：音標 · 詞性 · CEFR。三個都沒有時退回類別標籤。 */
function badgeText(e: WordEntry): string {
  const parts = [e.ipa, e.pos, e.level].map((x) => (x || '').trim()).filter(Boolean);
  if (parts.length) return parts.join(' · ');
  return CAT_LABEL[e.category] || 'Vocabulary';
}

function exampleBlock(title: string, color: string, ex: Example | undefined, empty: string) {
  const contents: any[] = [
    { type: 'text', text: title, size: 'xs', weight: 'bold', color },
  ];
  if (ex && ex.en) {
    contents.push({
      type: 'text',
      text: cut(ex.en, 180),
      size: 'sm',
      color: INK,
      wrap: true,
      margin: 'sm',
    });
    if (ex.zh) {
      contents.push({
        type: 'text',
        text: cut(ex.zh, 120),
        size: 'xs',
        color: SUB,
        wrap: true,
        margin: 'xs',
      });
    }
  } else {
    contents.push({
      type: 'text',
      text: empty,
      size: 'xs',
      color: SUB,
      wrap: true,
      margin: 'sm',
    });
  }
  return { type: 'box', layout: 'vertical', margin: 'lg', contents };
}

function smallButton(text: string, action: any) {
  return { type: 'button', style: 'link', height: 'sm', action: { ...action, label: label(text) } };
}

function buttonRow(buttons: any[]) {
  return { type: 'box', layout: 'horizontal', spacing: 'sm', contents: buttons };
}

/** 例句列表（更多例句 / QA 例句 共用） */
function numberedExamples(list: Example[]) {
  const out: any[] = [];
  list.forEach((ex, i) => {
    out.push({
      type: 'box',
      layout: 'vertical',
      margin: i === 0 ? 'lg' : 'xl',
      contents: [
        {
          type: 'text',
          text: `${i + 1}. ${cut(ex.en, 200)}`,
          size: 'sm',
          color: INK,
          wrap: true,
        },
        ...(ex.zh
          ? [{ type: 'text', text: cut(ex.zh, 140), size: 'xs', color: SUB, wrap: true, margin: 'xs' }]
          : []),
      ],
    });
  });
  return out;
}

function headerBox(title: string, subtitle: string, color: string) {
  return [
    { type: 'text', text: cut(title, 60), size: 'lg', weight: 'bold', color: INK, wrap: true },
    { type: 'text', text: subtitle, size: 'xs', color, weight: 'bold', margin: 'xs' },
    { type: 'separator', margin: 'md' },
  ];
}

function bubble(body: any[], footer?: any[]) {
  const msg: any = {
    type: 'bubble',
    body: { type: 'box', layout: 'vertical', paddingAll: '20px', contents: body },
  };
  if (footer && footer.length) {
    msg.footer = {
      type: 'box',
      layout: 'vertical',
      spacing: 'sm',
      paddingAll: '8px',
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

/* ---------- STEP 3：第一張單字卡 ---------- */

export function buildWordFlexMessage(e: WordEntry, env: { B2LAB_URL?: string; QA_URL?: string }) {
  const meaning = e.translation || e.definition || '（這個字目前沒有中文翻譯）';

  const body: any[] = [
    { type: 'text', text: cut(e.word, 60), size: 'xxl', weight: 'bold', color: INK, wrap: true },
    { type: 'text', text: badgeText(e), size: 'xs', color: SUB, margin: 'xs' },
    { type: 'text', text: cut(meaning, 80), size: 'md', color: BODY, weight: 'bold', wrap: true, margin: 'md' },
    { type: 'separator', margin: 'lg' },
    exampleBlock('📘 General', GENERAL, e.general[0], '目前沒有 General 例句。'),
    exampleBlock('🏭 QA / Work', QA, e.qa[0], '目前沒有 QA 工作例句。'),
  ];

  const footer = [
    buttonRow([
      smallButton('更多例句', { type: 'postback', data: buildPostback('more', e.word), displayText: `${e.word}｜更多例句` }),
      smallButton('QA 例句', { type: 'postback', data: buildPostback('qa', e.word), displayText: `${e.word}｜QA 例句` }),
    ]),
    buttonRow([
      smallButton('相關單字', { type: 'postback', data: buildPostback('rel', e.word), displayText: `${e.word}｜相關單字` }),
      smallButton('完整學習', { type: 'uri', uri: studyUrl(e, env) }),
    ]),
  ];

  return flex(`${e.word}｜${e.translation || ''}`, bubble(body, footer));
}

/* ---------- STEP 4：更多例句 ---------- */

export function buildMoreExamplesMessage(e: WordEntry, list: Example[]) {
  const body = [
    ...headerBox(`${e.word}｜More Examples`, e.translation || 'General examples', GENERAL),
    ...(list.length
      ? numberedExamples(list)
      : [
          {
            type: 'text',
            text: '目前沒有更多 General 例句。',
            size: 'sm',
            color: SUB,
            wrap: true,
            margin: 'lg',
          },
        ]),
  ];
  return flex(`${e.word}｜更多例句`, bubble(body, [backRow(e.word)]));
}

/* ---------- STEP 5：QA 例句 ---------- */

export function buildQaExamplesMessage(e: WordEntry, list: Example[], studyLink: string) {
  const body = [
    ...headerBox(`${e.word}｜QA / Work`, e.translation || 'Workplace examples', QA),
    ...(list.length
      ? numberedExamples(list)
      : [
          {
            type: 'text',
            text: '目前沒有 QA 工作例句。',
            size: 'sm',
            color: SUB,
            wrap: true,
            margin: 'lg',
          },
        ]),
  ];
  const footer = [
    buttonRow([
      smallButton('回到單字', { type: 'postback', data: buildPostback('word', e.word), displayText: e.word }),
      smallButton('完整學習', { type: 'uri', uri: studyLink }),
    ]),
  ];
  return flex(`${e.word}｜QA 例句`, bubble(body, footer));
}

/* ---------- STEP 6：相關單字（可直接點擊再查一次） ---------- */

export function buildRelatedWordsMessage(e: WordEntry, related: WordEntry[]) {
  const rows = related.map((r, i) => ({
    type: 'box',
    layout: 'vertical',
    margin: i === 0 ? 'lg' : 'lg',
    // 整塊可點：等同於使用者重新輸入這個字
    action: { type: 'postback', data: buildPostback('word', r.word), displayText: r.word },
    contents: [
      { type: 'text', text: cut(r.word, 40), size: 'md', weight: 'bold', color: GENERAL, wrap: true },
      {
        type: 'text',
        text: cut([r.pos, r.translation || r.definition].filter(Boolean).join(' '), 60) || '—',
        size: 'xs',
        color: SUB,
        wrap: true,
        margin: 'xs',
      },
    ],
  }));

  const body = [
    ...headerBox(`${e.word}｜Related Words`, '點一下就直接查那個字', GENERAL),
    ...(rows.length
      ? rows
      : [
          {
            type: 'text',
            text: '目前沒有相關單字。',
            size: 'sm',
            color: SUB,
            wrap: true,
            margin: 'lg',
          },
        ]),
  ];
  return flex(`${e.word}｜相關單字`, bubble(body, [backRow(e.word)]));
}

function backRow(word: string) {
  return buttonRow([
    smallButton('回到單字', { type: 'postback', data: buildPostback('word', word), displayText: word }),
  ]);
}

/* ---------- STEP 9：找不到，但有相近的字 ---------- */

export function buildNotFoundMessage(
  query: string,
  suggestions: WordEntry[],
  env: { B2LAB_URL?: string; QA_URL?: string },
) {
  const { b2lab, qa } = siteUrls(env);

  if (suggestions.length) {
    const rows = suggestions.map((s) => ({
      type: 'box',
      layout: 'vertical',
      margin: 'lg',
      action: { type: 'postback', data: buildPostback('word', s.word), displayText: s.word },
      contents: [
        { type: 'text', text: cut(s.word, 40), size: 'md', weight: 'bold', color: GENERAL, wrap: true },
        {
          type: 'text',
          text: cut(s.translation || s.definition || '—', 60),
          size: 'xs',
          color: SUB,
          wrap: true,
          margin: 'xs',
        },
      ],
    }));
    const body = [
      { type: 'text', text: `找不到「${cut(query, 30)}」`, size: 'md', weight: 'bold', color: INK, wrap: true },
      { type: 'text', text: '你是不是想找：', size: 'xs', color: SUB, margin: 'sm' },
      { type: 'separator', margin: 'md' },
      ...rows,
    ];
    const footer = [
      buttonRow([
        smallButton(`查看 ${suggestions[0].word}`, {
          type: 'postback',
          data: buildPostback('word', suggestions[0].word),
          displayText: suggestions[0].word,
        }),
      ]),
    ];
    return flex(`找不到「${query}」，你是不是想找 ${suggestions[0].word}？`, bubble(body, footer));
  }

  /* STEP 10：完全查不到 —— 不生成任何答案，只給入口 */
  const body = [
    { type: 'text', text: `目前資料庫中沒有「${cut(query, 30)}」`, size: 'md', weight: 'bold', color: INK, wrap: true },
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
    buttonRow([smallButton('English B2 Lab', { type: 'uri', uri: b2lab })]),
    buttonRow([smallButton('QA English', { type: 'uri', uri: qa })]),
  ];
  return flex(`目前資料庫中沒有「${query}」`, bubble(body, footer));
}

/* ---------- 中文查詢結果（第一版加值：輸入「賠償」找英文字） ---------- */

export function buildChineseResultsMessage(query: string, hits: WordEntry[]) {
  const rows = hits.map((s) => ({
    type: 'box',
    layout: 'vertical',
    margin: 'lg',
    action: { type: 'postback', data: buildPostback('word', s.word), displayText: s.word },
    contents: [
      { type: 'text', text: cut(s.word, 40), size: 'md', weight: 'bold', color: GENERAL, wrap: true },
      {
        type: 'text',
        text: cut([s.pos, s.translation].filter(Boolean).join(' '), 60),
        size: 'xs',
        color: SUB,
        wrap: true,
        margin: 'xs',
      },
    ],
  }));
  const body = [
    { type: 'text', text: `「${cut(query, 20)}」`, size: 'lg', weight: 'bold', color: INK, wrap: true },
    { type: 'text', text: '點一下就直接查那個字', size: 'xs', color: SUB, margin: 'xs' },
    { type: 'separator', margin: 'md' },
    ...rows,
  ];
  return flex(`「${query}」的英文`, bubble(body));
}

/** 純文字回覆（忽略非文字訊息時不用，只有錯誤時用） */
export const textMessage = (text: string) => ({ type: 'text', text: cut(text, 400) });
