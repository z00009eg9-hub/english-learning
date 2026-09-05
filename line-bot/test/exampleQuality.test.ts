/**
 * 例句品質的防呆測試。
 *
 * 背景：兩個網站的資料裡，詞彙表詞條與教學註記跟真正的例句混在同一批物件中，
 * 早期的收集邏輯只看「有空格而且夠長」，所以 "Supplier Quality"、
 * "sampling inspection" 這類詞條會被當成例句放上卡片；QA 站的
 * 「客戶參訪接待語」（domain: tour）也會被當成 QA 工作例句。
 * 這裡守住修正後的結果，避免之後改建置腳本時又退回去。
 */
import { describe, expect, it } from 'vitest';
import { findWord, getMoreExamples, getQaExamples, stats } from '../src/vocabulary';
import raw from '../src/data/vocabulary.json';

const WORDS = (raw as any).words as Array<{
  word: string;
  general: Array<{ en: string; zh: string }>;
  qa: Array<{ en: string; zh: string }>;
}>;

const allExamples = () =>
  WORDS.flatMap((w) => [
    ...w.general.map((x) => ({ ...x, kind: 'general', word: w.word })),
    ...w.qa.map((x) => ({ ...x, kind: 'qa', word: w.word })),
  ]);

describe('例句池不含詞條與教學註記', () => {
  const examples = allExamples();

  it('每一句都有句末標點（詞條不會有）', () => {
    const bad = examples.filter((x) => !/[.?!]["')\]]?$/.test(x.en.trim()));
    expect(bad.map((x) => `${x.word}: ${x.en}`)).toEqual([]);
  });

  it('每一句至少 4 個字', () => {
    const bad = examples.filter((x) => x.en.trim().split(/\s+/).length < 4);
    expect(bad.map((x) => `${x.word}: ${x.en}`)).toEqual([]);
  });

  it('不含全形括號／箭頭這類教學標記', () => {
    const bad = examples.filter((x) => /[（）→＝｜✅❌]/.test(x.en));
    expect(bad.map((x) => `${x.word}: ${x.en}`)).toEqual([]);
  });
});

describe('QA 例句必須是工作情境', () => {
  it('不含客戶參訪接待語（QA 站的 tour domain）', () => {
    const qa = WORDS.flatMap((w) => w.qa.map((x) => `${w.word}: ${x.en}`));
    const hospitality = qa.filter((s) =>
      /adjust the route|watch your step|please follow me|stay inside the yellow line/i.test(s),
    );
    expect(hospitality).toEqual([]);
  });

  it('adjust 的 QA 例句是製造／品保情境，不是導覽動線', () => {
    const qa = getQaExamples('adjust', 3);
    expect(qa.length).toBeGreaterThan(0);
    expect(qa[0].en).toBe('The hole position is off; we need to adjust the die.');
    expect(qa[0].zh).toBe('孔位偏移，需要調整模具。');
  });

  it('QA 例句永遠不會等於同一個字的 General 例句（不拿 General 來補）', () => {
    for (const w of WORDS) {
      if (!w.qa.length || !w.general.length) continue;
      const generalSet = new Set(w.general.map((x) => x.en));
      for (const q of w.qa) {
        expect(generalSet.has(q.en), `${w.word} 的 QA 例句與 General 重複：${q.en}`).toBe(false);
      }
    }
  });

  it('沒有 QA 例句的字回空陣列，由 UI 顯示 empty state', () => {
    expect(getQaExamples('compensate')).toEqual([]);
    expect(getQaExamples('refund')).toEqual([]);
  });
});

describe('例句一定屬於這個單字', () => {
  /** 與 scripts/build-vocab.mjs 的 matcherFor 對齊（含 y → ies） */
  const variants = (w: string) => {
    const esc = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const alts = [`${esc(w)}(?:s|es|ed|d|ing)?`];
    if (w.endsWith('e')) alts.push(`${esc(w.slice(0, -1))}(?:ing|ed|ion|es)`);
    if (/[^aeiou]y$/.test(w)) alts.push(`${esc(w.slice(0, -1))}ies`);
    return new RegExp(`(?<![A-Za-z])(?:${alts.join('|')})(?![A-Za-z])`, 'i');
  };

  /** 放寬版：句子裡只要有字跟詞條共用前 3 個字母就算數，用來容忍不規則變化 */
  const sharesStem = (word: string, en: string) => {
    const heads = word
      .toLowerCase()
      .split(/[^a-z]+/) // 連字號詞（co-pay）也要拆開，不然對不到句子裡的 token
      .filter((x) => x.length >= 2)
      .map((x) => x.slice(0, 3));
    const toks = en.toLowerCase().split(/[^a-z]+/).filter(Boolean);
    return heads.some((h) => toks.some((t) => t.startsWith(h)));
  };

  it('QA 例句一定含有該單字 —— QA 例句全部來自語料掃描，配錯就是 bug', () => {
    const bad: string[] = [];
    for (const w of WORDS) {
      const re = variants(w.word.toLowerCase());
      for (const x of w.qa) if (!re.test(x.en)) bad.push(`${w.word} ← ${x.en}`);
    }
    expect(bad).toEqual([]);
  });

  it('General 例句至少與該單字同字根', () => {
    /* General 例句除了語料掃描，還包含課堂筆記裡老師直接掛在該單字底下的例句。
       那些會故意示範不規則變化或同義詞（blow→blew、leave→left、strike→hit、
       semester→term），所以用同字根的寬鬆規則，剩下的少數屬於刻意的教學安排。 */
    const bad = WORDS.flatMap((w) =>
      w.general.filter((x) => !sharesStem(w.word, x.en)).map((x) => `${w.word} ← ${x.en}`),
    );
    expect(bad.length).toBeLessThanOrEqual(6);
  });
});

describe('首張卡挑最好的例句', () => {
  it('有中文翻譯的排在沒有翻譯的前面', () => {
    for (const w of WORDS) {
      for (const list of [w.general, w.qa]) {
        const firstNoZh = list.findIndex((x) => !x.zh);
        const lastZh = list.map((x) => !!x.zh).lastIndexOf(true);
        if (firstNoZh >= 0 && lastZh >= 0) {
          expect(firstNoZh, `${w.word} 的例句排序不對`).toBeGreaterThan(lastZh);
        }
      }
    }
  });

  it('有短句可選時不會把超長的那句放在首位', () => {
    /* 只有一句可用時就只能顯示它（截字會讓語意不完整，規格明文禁止），
       所以只檢查「有其他選擇卻仍挑了超長句」的情況。 */
    const bad = WORDS.filter((w) => {
      const first = w.general[0];
      if (!first || first.en.length <= 180) return false;
      return w.general.some((x) => x.en.length <= 180 && !!x.zh === !!first.zh);
    }).map((w) => w.word);
    expect(bad).toEqual([]);
  });
});

describe('第九節指定的測試單字', () => {
  it.each(['adjust', 'compensate', 'supplier', 'refund'])('%s 查得到且欄位齊全', (word) => {
    const e = findWord(word)!;
    expect(e).not.toBeNull();
    expect(e.word).toBeTruthy();
    expect(e.translation).toBeTruthy();
    expect(getMoreExamples(word, 3).length).toBeGreaterThan(0);
    for (const ex of [...e.general, ...e.qa]) {
      expect(ex.en).toBeTruthy();
      expect(typeof ex.zh).toBe('string');
    }
  });

  /* 這三個核心品保字原本只以片語形式存在（major defect、sampling inspection），
     直接輸入會落到「你是不是想找」。已在 QA 站自己的詞彙表
     （data-phrases.js 的 PHRASE_GROUPS）補上單字詞條，例句由既有語料自動掛上。 */
  it.each([
    ['defect', '不良、缺點'],
    ['inspection', '檢驗'],
    ['quality', '品質'],
  ])('%s 現在是獨立詞條，且帶有真實的 QA 例句', (word, zh) => {
    const e = findWord(word);
    expect(e, `${word} 應該查得到`).not.toBeNull();
    expect(e!.translation).toBe(zh);
    expect(getQaExamples(word, 3).length).toBeGreaterThan(0);
    for (const ex of getQaExamples(word, 3)) {
      expect(ex.en).toMatch(new RegExp(word.slice(0, 5), 'i'));
    }
  });

  it('資料量沒有異常掉落', () => {
    expect(stats().count).toBeGreaterThan(1000);
  });
});
