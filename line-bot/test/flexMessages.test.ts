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

const ENV = { B2LAB_URL: 'https://english-b2-lab.web.app/', QA_URL: 'https://rexon-qa-english.web.app/' };

/** 把 Flex JSON 攤平成字串，方便檢查內容有沒有出現 */
const dump = (msg: unknown) => JSON.stringify(msg);

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
  general: [],
  qa: [],
  related: [],
};

describe('STEP 3 第一張卡', () => {
  const e = findWord('compensate')!;
  const msg = buildWordFlexMessage(e, ENV) as any;

  it('是 flex 訊息且有 altText', () => {
    expect(msg.type).toBe('flex');
    expect(msg.altText).toContain('compensate');
    expect(msg.altText.length).toBeLessThanOrEqual(300);
  });

  it('顯示單字、詞性、中文意思', () => {
    const s = dump(msg);
    expect(s).toContain('compensate');
    expect(s).toContain('補償');
    expect(s).toContain('v.');
  });

  it('General 與 QA 兩個區塊都在', () => {
    const s = dump(msg);
    expect(s).toContain('📘 General');
    expect(s).toContain('🏭 QA / Work');
  });

  it('沒有 QA 例句時顯示提示而不是報錯', () => {
    expect(dump(msg)).toContain('目前沒有 QA 工作例句');
  });

  it('剛好四顆按鈕', () => {
    const buttons = msg.contents.footer.contents.flatMap((row: any) => row.contents);
    expect(buttons).toHaveLength(4);
    expect(buttons.map((b: any) => b.action.label)).toEqual([
      '更多例句',
      'QA 例句',
      '相關單字',
      '完整學習',
    ]);
  });

  it('每個 postback data 都在 300 bytes 以內', () => {
    const buttons = msg.contents.footer.contents.flatMap((row: any) => row.contents);
    for (const b of buttons) {
      if (b.action.type === 'postback') expect(b.action.data.length).toBeLessThanOrEqual(300);
    }
  });

  it('缺 translation / level / pos / 例句時不會爆，且有 fallback 文字', () => {
    const s = dump(buildWordFlexMessage(bare, ENV));
    expect(s).toContain('沒有中文翻譯');
    expect(s).toContain('目前沒有 General 例句');
    expect(s).toContain('目前沒有 QA 工作例句');
  });
});

describe('STEP 7 深連結', () => {
  it('general 的字導向 B2 Lab', () => {
    expect(studyUrl(findWord('compensate')!, ENV)).toBe(
      'https://english-b2-lab.web.app/?w=compensate',
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
});

describe('STEP 4 / 5 / 6 第二層訊息', () => {
  it('更多例句最多顯示 3 筆並編號', () => {
    const e = findWord('compensate')!;
    const s = dump(buildMoreExamplesMessage(e, getMoreExamples('compensate', 3)));
    expect(s).toContain('More Examples');
    expect(s).toContain('1. ');
    expect(s).not.toContain('4. ');
  });

  it('沒有 QA 例句時保留「完整學習」入口', () => {
    const e = findWord('compensate')!;
    const msg = buildQaExamplesMessage(e, getQaExamples('compensate', 3), studyUrl(e, ENV)) as any;
    const s = dump(msg);
    expect(s).toContain('目前沒有 QA 工作例句');
    expect(s).toContain('完整學習');
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
