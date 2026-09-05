import { describe, expect, it } from 'vitest';
import {
  findByChinese,
  findSimilarWords,
  findWord,
  getMoreExamples,
  getQaExamples,
  getRelatedWords,
  isChineseQuery,
  normalize,
  stats,
} from '../src/vocabulary';

describe('資料本身', () => {
  it('有載入單字', () => {
    expect(stats().count).toBeGreaterThan(500);
  });
});

describe('STEP 2 查詢正規化', () => {
  it.each([
    ['compensate', 'compensate'],
    ['Compensate', 'compensate'],
    ['COMPENSATE', 'compensate'],
    [' compensate ', 'compensate'],
    ['  COMPENSATE  ', 'compensate'],
    ['　compensate　', 'compensate'], // 全形空白
  ])('「%s」查得到 compensate', (input) => {
    const e = findWord(input);
    expect(e).not.toBeNull();
    expect(e!.id).toBe('compensate');
  });

  it('保留原始顯示格式（word 欄位是資料裡的寫法）', () => {
    expect(findWord('COMPENSATE')!.word).toBe('compensate');
  });

  it('normalize 對空值不會爆', () => {
    expect(normalize(undefined as unknown as string)).toBe('');
    expect(normalize('')).toBe('');
  });
});

describe('STEP 20 測試單字', () => {
  it.each(['compensate', 'refund', 'supplier', 'tolerance', 'root cause'])(
    '%s 查得到且有中文',
    (w) => {
      const e = findWord(w);
      expect(e, `${w} 應該查得到`).not.toBeNull();
      expect(e!.translation.length).toBeGreaterThan(0);
    },
  );

  it('詞形變化也查得到（compensated / suppliers）', () => {
    expect(findWord('compensated')?.id).toBe('compensate');
    expect(findWord('suppliers')?.id).toBe('supplier');
  });
});

describe('STEP 4 / 5 / 6 第二層資料', () => {
  it('更多例句最多 3 筆', () => {
    const ex = getMoreExamples('compensate', 3);
    expect(ex.length).toBeGreaterThan(0);
    expect(ex.length).toBeLessThanOrEqual(3);
    expect(ex[0].en).toMatch(/compensat/i);
  });

  it('有 QA 例句的字回得到 QA 例句', () => {
    const ex = getQaExamples('supplier', 3);
    expect(ex.length).toBeGreaterThan(0);
    expect(ex.length).toBeLessThanOrEqual(3);
  });

  it('沒有 QA 例句的字回空陣列，不丟例外', () => {
    expect(getQaExamples('compensate')).toEqual([]);
  });

  it('查不到的字，第二層一律回空陣列', () => {
    expect(getMoreExamples('xxxxxxxx')).toEqual([]);
    expect(getQaExamples('xxxxxxxx')).toEqual([]);
    expect(getRelatedWords('xxxxxxxx')).toEqual([]);
  });

  it('相關單字不含自己，而且是完整詞條', () => {
    const rel = getRelatedWords('compensate', 4);
    expect(rel.length).toBeGreaterThan(0);
    expect(rel.some((r) => r.id === 'compensate')).toBe(false);
    expect(rel[0].word.length).toBeGreaterThan(0);
  });
});

describe('STEP 9 / 10 拼字建議', () => {
  it('compansate 會建議 compensate', () => {
    const s = findSimilarWords('compansate', 3);
    expect(s.map((x) => x.id)).toContain('compensate');
  });

  it('supplyer 會建議 supplier', () => {
    expect(findSimilarWords('supplyer', 3).map((x) => x.id)).toContain('supplier');
  });

  it('完全不像的字不會硬湊建議', () => {
    expect(findSimilarWords('xxxxxxxx', 3)).toEqual([]);
  });

  it('資料裡只以片語存在的字，會被當成相關詞條建議出來', () => {
    const s = findSimilarWords('defect', 3);
    expect(s.length).toBeGreaterThan(0);
    expect(s.some((x) => /defect/i.test(x.word))).toBe(true);
  });
});

describe('STEP 11 中文查詢', () => {
  it('判斷中文', () => {
    expect(isChineseQuery('賠償')).toBe(true);
    expect(isChineseQuery('compensate')).toBe(false);
  });

  it('輸入「退款」找得到 refund', () => {
    const hits = findByChinese('退款', 5);
    expect(hits.map((h) => h.id)).toContain('refund');
  });

  it('英文輸入不會走中文查詢', () => {
    expect(findByChinese('compensate')).toEqual([]);
  });
});
