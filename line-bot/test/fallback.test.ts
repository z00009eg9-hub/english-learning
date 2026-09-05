import { describe, expect, it } from 'vitest';
import { buildWordFlexMessage } from '../src/flexMessages';
import { findWord } from '../src/vocabulary';
const ENV = { B2LAB_URL: 'https://english-b2-lab.web.app/', QA_URL: 'https://rexon-qa-english.web.app/' };
const base = { id:'x', word:'x', pos:'', level:'', ipa:'', translation:'', definition:'', category:'', source:'general' as const, lesson:'', bookId:'', topicId:'', general:[], qa:[], related:[] };
const S = (m:any)=>JSON.stringify(m);
describe('第 17 節 A–F 情境', () => {
  it('A 完整資料', () => { const s=S(buildWordFlexMessage(findWord('adjust')!,ENV)); expect(s).toContain('Verb'); expect(s).toContain('B1'); expect(s).toContain('GENERAL EXAMPLE'); expect(s).toContain('QA / WORK EXAMPLE'); });
  it('B 沒有 QA 例句', () => { const s=S(buildWordFlexMessage(findWord('compensate')!,ENV)); expect(s).toContain('目前沒有 QA 工作例句'); });
  it('C 沒有 General 例句', () => { const s=S(buildWordFlexMessage({...base,word:'t',qa:[{en:'The supplier agreed.',zh:'供應商同意了。'}]},ENV)); expect(s).toContain('目前沒有一般例句'); });
  it('D 沒有 level', () => { const m:any=buildWordFlexMessage({...base,pos:'v.',translation:'測試'},ENV); const row=m.contents.body.contents.find((c:any)=>c.layout==='horizontal'); expect(row.contents.filter((c:any)=>c.type==='box')).toHaveLength(1); });
  it('E 沒有 definition', () => { const m:any=buildWordFlexMessage({...base,pos:'v.',translation:'測試'},ENV); expect(m.contents.body.contents.some((c:any)=>c.maxLines===2)).toBe(false); });
  it('F pos 與 level 都沒有（且無類別）→ 整個 badge row 不顯示', () => { const m:any=buildWordFlexMessage({...base,translation:'測試'},ENV); expect(m.contents.body.contents.some((c:any)=>c.layout==='horizontal')).toBe(false); });
  it('全部情境都不會出現 undefined / null', () => {
    for (const e of [base,{...base,pos:'v.'},{...base,level:'B2'},findWord('adjust')!,findWord('compensate')!]) {
      const s=S(buildWordFlexMessage(e as any,ENV));
      expect(s).not.toContain('undefined'); expect(s).not.toContain('null');
    }
  });
});
