import { describe, expect, it } from 'vitest';
import type { WordEntry } from '../src/vocabulary';
import { findWord, getQaExamples, getRelatedWords, getMoreExamples } from '../src/vocabulary';
import {
  buildChineseResultsMessage,
  buildMoreExamplesMessage,
  buildNotFoundMessage,
  buildQaExamplesMessage,
  buildRelatedWordsMessage,
  buildWordFlexMessage,
  studyUrl,
} from '../src/flexMessages';

const ENV = {
  B2LAB_URL: 'https://english-b2-lab.web.app/',
  QA_URL: 'https://rexon-qa-english.web.app/',
};

/** 把 Flex JSON 攤平成字串，方便檢查內容有沒有出現 */
const dump = (msg: unknown) => JSON.stringify(msg);

/** 遞迴收集某個節點底下所有 button 的 action（按鈕現在包在圓角 box 裡） */
function actionsIn(node: any, out: any[] = []): any[] {
  if (!node || typeof node !== 'object') return out;
  if (Array.isArray(node)) {
    node.forEach((n) => actionsIn(n, out));
    return out;
  }
  // 按鈕現在是可點的 box（button 沒有字級屬性），所以收集任何帶 action 的節點
  if (node.action) out.push(node.action);
  if (node.contents) actionsIn(node.contents, out);
  return out;
}

/** 遞迴找出第一個符合條件的節點 */
function findNode(node: any, pred: (n: any) => boolean): any | null {
  if (!node || typeof node !== 'object') return null;
  if (Array.isArray(node)) {
    for (const n of node) {
      const hit = findNode(n, pred);
      if (hit) return hit;
    }
    return null;
  }
  if (pred(node)) return node;
  return findNode(node.contents, pred);
}

/** 缺欄位到極致的詞條，用來驗證 fallback */
const bare: WordEntry = {
  id: 'bare',
  word: 'bare',
  pos: '',
  level: '',
  ipa: '',
  translation: '',
  definition: '',
  category: '',
  source: 'general',
  lesson: '',
  bookId: '',
  topicId: '',
  general: [],
  qa: [],
  related: [],
};

describe('STEP 3 第一張卡', () => {
  const e = findWord('compensate')!;
  const msg = buildWordFlexMessage(e, ENV) as any;
  const body = msg.contents.body.contents;

  it('是 flex 訊息且有 altText', () => {
    expect(msg.type).toBe('flex');
    expect(msg.altText).toContain('compensate');
    expect(msg.altText.length).toBeLessThanOrEqual(300);
  });

  it('資訊層級：單字最大、中文次之、音標與定義最小', () => {
    expect(body[0].text).toBe('compensate');
    expect(body[0].size).toBe('xxl');
    expect(body[0].weight).toBe('bold');

    const zh = body.find((c: any) => c.text === '補償、彌補');
    expect(zh.size).toBe('xl');
    expect(zh.weight).toBe('bold');

    const ipa = body.find((c: any) => c.text === '/ˈkɑːmpənseɪt/');
    expect(ipa.size).toBe('xs');
  });

  it('詞性用淡色 badge，不是純文字', () => {
    const badgeBox = body.find((c: any) => c.layout === 'horizontal');
    const posBadge = badgeBox.contents[0];
    expect(posBadge.type).toBe('box');
    expect(posBadge.cornerRadius).toBeTruthy();
    expect(posBadge.backgroundColor).toBeTruthy();
    expect(posBadge.contents[0].text).toBe('Verb');
  });

  it('General 與 QA 是兩個淡色圓角區塊，版型一致只有顏色不同', () => {
    const gen = findNode(body, (n) => n.contents?.[0]?.text === 'GENERAL EXAMPLE');
    const qa = findNode(body, (n) => n.contents?.[0]?.text === 'QA / WORK EXAMPLE');
    expect(gen.cornerRadius).toBeTruthy();
    expect(gen.backgroundColor).toBeTruthy();
    expect(gen.layout).toBe(qa.layout);
    expect(gen.contents[0].color).not.toBe(qa.contents[0].color);
  });

  it('例句裡的查詢字用 span 加粗，不是整句上色', () => {
    const gen = findNode(body, (n) => n.contents?.[0]?.text === 'GENERAL EXAMPLE');
    const sentence = gen.contents[1];
    expect(sentence.wrap).toBe(true);
    const bold = sentence.contents.filter((s: any) => s.weight === 'bold');
    expect(bold).toHaveLength(1);
    expect(bold[0].text.toLowerCase()).toContain('compensate');
    // 沒有被強調的部分不能帶顏色，避免整句花掉
    expect(sentence.contents.some((s: any) => !s.weight && !s.color)).toBe(true);
  });

  it('沒有 QA 例句時是矮的 empty state，不是大片空白', () => {
    const qa = findNode(body, (n) => n.contents?.[0]?.text === 'QA / WORK EXAMPLE');
    expect(qa.contents).toHaveLength(2);
    expect(qa.contents[1].text).toBe('目前沒有 QA 工作例句。');
    expect(qa.paddingAll).toBe('8px');
  });

  it('按鈕是 2 x 2 格，每顆都有淡色圓角底', () => {
    const rows = msg.contents.footer.contents.filter((c: any) => c.layout === 'horizontal');
    expect(rows).toHaveLength(2);
    for (const row of rows) {
      expect(row.contents).toHaveLength(2);
      for (const cell of row.contents) {
        expect(cell.type).toBe('box');
        expect(cell.cornerRadius).toBeTruthy();
        expect(cell.backgroundColor).toBeTruthy();
        expect(cell.action).toBeTruthy();
        expect(cell.contents[0].type).toBe('text');
        expect(cell.contents[0].size).toBe('sm');
        expect(cell.contents[0].align).toBe('center');
      }
    }
  });

  it('內容區與按鈕區之間只有一條分隔線', () => {
    const seps = dump(msg).split('"separator"').length - 1;
    expect(seps).toBe(1);
    expect(msg.contents.footer.contents[0].type).toBe('separator');
  });

  it('四顆按鈕的 action 與改版前完全相同', () => {
    const actions = actionsIn(msg.contents.footer);
    expect(actions).toHaveLength(4);
    expect(actions.map((a) => a.label)).toEqual(['更多例句', 'QA 例句', '相關單字', '完整學習']);
    expect(actions[0]).toMatchObject({ type: 'postback', data: 'a=more&w=compensate' });
    expect(actions[1]).toMatchObject({ type: 'postback', data: 'a=qa&w=compensate' });
    expect(actions[2]).toMatchObject({ type: 'postback', data: 'a=rel&w=compensate' });
    expect(actions[3]).toMatchObject({ type: 'uri' });
  });

  it('每個 postback data 都在 300 bytes 以內', () => {
    for (const a of actionsIn(msg.contents.footer)) {
      if (a.type === 'postback') expect(a.data.length).toBeLessThanOrEqual(300);
    }
  });

  it('卡片左右留白 20px、上下不貼邊', () => {
    const b = msg.contents.body;
    expect(b.paddingStart).toBe('20px');
    expect(b.paddingEnd).toBe('20px');
    expect(b.paddingTop).toBe('18px');
  });

  it('沒有 collocations 時不顯示 Tip', () => {
    expect(dump(msg)).not.toContain('Tip:');
  });

  it('有 collocations 時才顯示 Tip', () => {
    const withTip = buildWordFlexMessage(
      { ...findWord('compensate')!, collocations: ['compensate for + N'] },
      ENV,
    );
    expect(dump(withTip)).toContain('Tip: compensate for + N');
  });

  it('缺 translation / level / pos / 例句時不會爆，且有 fallback', () => {
    const s = dump(buildWordFlexMessage(bare, ENV));
    expect(s).toContain('沒有中文翻譯');
    expect(s).toContain('目前沒有一般例句');
    expect(s).toContain('目前沒有 QA 工作例句');
  });

  it('沒有音標時不畫音標那一行', () => {
    const b = (buildWordFlexMessage(bare, ENV) as any).contents.body.contents;
    expect(b[0].text).toBe('bare');
    expect(b.some((c: any) => c.size === 'xs' && c.text?.startsWith('/'))).toBe(false);
  });

  it('詞性與 CEFR 都沒有時用類別 badge 補位，不留空', () => {
    const b = (buildWordFlexMessage({ ...bare, category: 'qa' }, ENV) as any).contents.body.contents;
    const badgeBox = b.find((c: any) => c.layout === 'horizontal');
    expect(badgeBox.contents[0].contents[0].text).toBe('QA');
  });

  it('沒有翻譯就不重複顯示英文定義', () => {
    const only = buildWordFlexMessage({ ...bare, definition: 'to test things' }, ENV);
    expect(dump(only).split('to test things').length - 1).toBe(1);
  });
});

describe('STEP 7 深連結', () => {
  it('general 的字導向 B2 Lab', () => {
    expect(studyUrl(findWord('compensate')!, ENV)).toBe(
      'https://english-b2-lab.web.app/?w=compensate&lesson=bk20260811',
    );
  });

  it('QA 的字導向 QA English', () => {
    const e = { ...bare, word: 'tolerance', source: 'qa' as const };
    expect(studyUrl(e, ENV)).toBe('https://rexon-qa-english.web.app/?w=tolerance');
  });

  it('多字詞條會做 URL encode', () => {
    const e = { ...bare, word: 'root cause', source: 'qa' as const };
    expect(studyUrl(e, ENV)).toContain('root%20cause');
  });

  it('知道課次的字會帶 lesson 參數', () => {
    const e = findWord('compensate')!;
    expect(e.bookId).toBe('bk20260811');
    expect(studyUrl(e, ENV)).toContain('&lesson=bk20260811');
  });

  it('對不到課次的字不帶 lesson，退回只開字卡', () => {
    expect(studyUrl(bare, ENV)).toBe('https://english-b2-lab.web.app/?w=bare');
  });

  it('QA 對得到主題就帶 topic', () => {
    const e = findWord('tolerance')!;
    expect(studyUrl(e, ENV)).toBe(
      'https://rexon-qa-english.web.app/?w=tolerance&topic=drawing-spec',
    );
  });

  it('General 的字不會帶 topic', () => {
    expect(studyUrl(findWord('compensate')!, ENV)).not.toContain('topic=');
  });
});

describe('STEP 4 / 5 / 6 第二層訊息', () => {
  it('更多例句最多顯示 3 筆並編號', () => {
    const e = findWord('compensate')!;
    const s = dump(buildMoreExamplesMessage(e, getMoreExamples('compensate', 3)));
    expect(s).toContain('MORE GENERAL EXAMPLES');
    expect(s).toContain('"1"');
    expect(s).not.toContain('"4"');
  });

  it('第二層例句一樣會加粗查詢字', () => {
    const e = findWord('compensate')!;
    const msg = buildMoreExamplesMessage(e, getMoreExamples('compensate', 3)) as any;
    const sentence = findNode(
      msg.contents.body.contents,
      (n) => Array.isArray(n.contents) && n.contents[0]?.type === 'span',
    );
    expect(sentence.contents.some((sp: any) => sp.weight === 'bold')).toBe(true);
  });

  it('沒有 QA 例句時保留「完整學習」入口', () => {
    const e = findWord('compensate')!;
    const msg = buildQaExamplesMessage(e, getQaExamples('compensate', 3), studyUrl(e, ENV)) as any;
    expect(dump(msg)).toContain('目前沒有 QA 工作例句');
    expect(actionsIn(msg.contents.footer).map((a) => a.label)).toEqual(['回到單字', '完整學習']);
  });

  it('相關單字每一列都可以點擊再查一次', () => {
    const e = findWord('compensate')!;
    const msg = buildRelatedWordsMessage(e, getRelatedWords('compensate', 4)) as any;
    const rows = msg.contents.body.contents.filter((c: any) => c.action);
    expect(rows.length).toBeGreaterThan(0);
    for (const row of rows) {
      expect(row.action.type).toBe('postback');
      expect(row.action.data).toMatch(/^a=word&w=/);
    }
  });

  it('沒有相關單字時顯示提示', () => {
    expect(dump(buildRelatedWordsMessage(bare, []))).toContain('目前沒有相關單字');
  });
});

describe('STEP 9 / 10 找不到', () => {
  it('有建議時顯示「你是不是想找」與可點擊的建議', () => {
    const s = dump(buildNotFoundMessage('compansate', [findWord('compensate')!], ENV));
    expect(s).toContain('找不到「compansate」');
    expect(s).toContain('你是不是想找');
    expect(s).toContain('a=word&w=compensate');
  });

  it('完全沒有建議時給兩個網站入口，不生成任何答案', () => {
    const s = dump(buildNotFoundMessage('xxxxxxxx', [], ENV));
    expect(s).toContain('目前資料庫中沒有「xxxxxxxx」');
    expect(s).toContain('english-b2-lab.web.app');
    expect(s).toContain('rexon-qa-english.web.app');
  });
});

describe('中文查詢結果', () => {
  it('列出英文字且可點擊', () => {
    const s = dump(buildChineseResultsMessage('退款', [findWord('refund')!]));
    expect(s).toContain('refund');
    expect(s).toContain('a=word&w=refund');
  });
});

describe('LINE Flex schema 相容性', () => {
  const samples = [
    buildWordFlexMessage(findWord('compensate')!, ENV),
    buildWordFlexMessage(findWord('supplier')!, ENV),
    buildWordFlexMessage(bare, ENV),
    buildMoreExamplesMessage(findWord('compensate')!, getMoreExamples('compensate', 3)),
    buildQaExamplesMessage(findWord('supplier')!, getQaExamples('supplier', 3), 'https://x.test/'),
    buildRelatedWordsMessage(findWord('compensate')!, getRelatedWords('compensate', 4)),
    buildNotFoundMessage('compansate', [findWord('compensate')!], ENV),
    buildNotFoundMessage('xxxxxxxx', [], ENV),
    buildChineseResultsMessage('退款', [findWord('refund')!]),
  ];

  const ALLOWED = new Set(['bubble', 'box', 'text', 'span', 'button', 'separator', 'filler']);

  function walk(node: any, visit: (n: any) => void) {
    if (!node || typeof node !== 'object') return;
    if (Array.isArray(node)) return node.forEach((n) => walk(n, visit));
    visit(node);
    walk(node.contents, visit);
  }

  it('只用官方支援的 component', () => {
    for (const msg of samples) {
      walk((msg as any).contents, (n) => {
        if (n.type) expect(ALLOWED.has(n.type), `未支援的 type: ${n.type}`).toBe(true);
      });
    }
  });

  it('用 contents 的 text 一定有 wrap 且不帶 text 屬性', () => {
    for (const msg of samples) {
      walk((msg as any).contents, (n) => {
        if (n.type === 'text' && Array.isArray(n.contents)) {
          expect(n.wrap).toBe(true);
          expect(n.text).toBeUndefined();
          for (const s of n.contents) expect(s.type).toBe('span');
        }
      });
    }
  });

  it('box 一定有 layout 與非空的 contents', () => {
    for (const msg of samples) {
      walk((msg as any).contents, (n) => {
        if (n.type === 'box') {
          expect(n.layout).toBeTruthy();
          expect(Array.isArray(n.contents) && n.contents.length > 0).toBe(true);
        }
      });
    }
  });

  it('每個 action 都合法，label 不超過 20 字', () => {
    for (const msg of samples) {
      walk((msg as any).contents, (n) => {
        if (!n.action) return;
        expect(['postback', 'uri', 'message']).toContain(n.action.type);
        if (n.action.label) expect(n.action.label.length).toBeLessThanOrEqual(20);
        if (n.action.type === 'postback') expect(n.action.data.length).toBeLessThanOrEqual(300);
      });
    }
  });

  it('altText 不超過 400 字', () => {
    for (const msg of samples) {
      expect((msg as any).altText.length).toBeLessThanOrEqual(400);
    }
  });
});

describe('詞性 badge 的可讀化', () => {
  const badgeTextOf = (e: WordEntry) => {
    const b = (buildWordFlexMessage(e, ENV) as any).contents.body.contents.find(
      (c: any) => c.layout === 'horizontal',
    );
    return b.contents[0].contents[0].text;
  };

  it.each([
    ['n.', 'Noun'],
    ['v.', 'Verb'],
    ['adj.', 'Adjective'],
    ['adv.', 'Adverb'],
    ['phr.', 'Phrase'],
    ['phr. v.', 'Verb phr.'],
    ['n./v.', 'Noun / Verb'],
    ['v. / n.', 'Verb / Noun'],
    ['v.|n.', 'Verb / Noun'],
    ['n.phr.', 'Noun phr.'],
    ['aux.v.', 'Aux Verb'],
    ['idiom', 'Idiom'],
  ])('「%s」顯示成「%s」', (pos, expected) => {
    expect(badgeTextOf({ ...bare, pos })).toBe(expected);
  });

  it('認不得的寫法原樣顯示，不會變空白', () => {
    expect(badgeTextOf({ ...bare, pos: 'idk.' })).toBe('idk.');
  });
});

describe('顏色收斂：只有一個 accent', () => {
  const colorsIn = (node: any, out = new Set<string>()): Set<string> => {
    if (!node || typeof node !== 'object') return out;
    if (Array.isArray(node)) {
      node.forEach((n) => colorsIn(n, out));
      return out;
    }
    if (typeof node.color === 'string') out.add(node.color.toUpperCase());
    if (typeof node.backgroundColor === 'string') out.add(node.backgroundColor.toUpperCase());
    colorsIn(node.contents, out);
    return out;
  };

  const msg = buildWordFlexMessage(findWord('adjust')!, ENV) as any;

  it('查詢字的 highlight 在 General 與 QA 用同一個 accent 藍', () => {
    const body = msg.contents.body.contents;
    const spanColor = (label: string) => {
      const block = findNode(body, (n) => n.contents?.[0]?.text === label);
      return block.contents[1].contents.find((s: any) => s.weight === 'bold').color;
    };
    expect(spanColor('GENERAL EXAMPLE')).toBe(spanColor('QA / WORK EXAMPLE'));
  });

  it('四顆按鈕只有一顆帶 accent 底色，其餘中性', () => {
    const rows = msg.contents.footer.contents.filter((c: any) => c.layout === 'horizontal');
    const bgs = rows.flatMap((r: any) => r.contents.map((c: any) => c.backgroundColor));
    const unique = [...new Set(bgs)];
    expect(unique).toHaveLength(2); // 中性 + accent
    expect(bgs.filter((b: string) => b === unique.find((u) => bgs.filter((x: string) => x === u).length === 1)))
      .toHaveLength(1);
  });

  it('詞性與 CEFR badge 用同一套低彩度樣式（不再有綠色）', () => {
    const body = msg.contents.body.contents;
    const badgeRow = body.find((c: any) => c.layout === 'horizontal');
    const badges = badgeRow.contents.filter((c: any) => c.type === 'box');
    expect(badges).toHaveLength(2);
    for (const b of badges) {
      expect(b.cornerRadius).toBe(badges[0].cornerRadius);
      expect(b.paddingAll).toBe(badges[0].paddingAll);
      // 兩顆都不是高彩度色
      expect(b.backgroundColor).toMatch(/^#(E|F)/i);
      expect(b.contents[0].weight).toBeUndefined(); // regular，不加粗
    }
  });

  it('整張卡的色彩數量收斂（含灰階與底色不超過 12 種）', () => {
    expect(colorsIn(msg.contents).size).toBeLessThanOrEqual(12);
  });

  it('字重層級：單字與中文粗體，例句、定義、音標、按鈕都是 regular', () => {
    const body = msg.contents.body.contents;
    expect(body[0].weight).toBe('bold'); // 單字
    expect(body.find((c: any) => c.size === 'xl').weight).toBe('bold'); // 中文意思
    expect(body.find((c: any) => c.text?.startsWith('/')).weight).toBeUndefined(); // 音標
    expect(body.find((c: any) => c.maxLines === 2).weight).toBeUndefined(); // 定義
    const rows = msg.contents.footer.contents.filter((c: any) => c.layout === 'horizontal');
    for (const r of rows) for (const c of r.contents) expect(c.contents[0].weight).toBeUndefined();
  });
});
