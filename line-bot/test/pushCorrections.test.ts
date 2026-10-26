import { describe, expect, it } from 'vitest';
import { parseCorrections, splitZh } from '../scripts/push-corrections.mjs';

describe('push-corrections：解析 my-week md', () => {
  it('英文（中文）拆開', () => {
    expect(splitZh('Dents.（壓傷。）')).toEqual({ en: 'Dents.', zh: '壓傷。' });
    expect(splitZh('No zh here')).toEqual({ en: 'No zh here', zh: '' });
  });

  it('只收（已校正）的句子，欄位都對', () => {
    const md = [
      '## 2026-10-26',
      '- [ ] 沒校正的',
      '  - 口語：Nope.',
      '  - LINE：aaa',
      '- [x] 校正過的 → my01',
      '  - 書面：Formal one.（書面中文）',
      '  - 口語：Spoken one.（口語中文）',
      '  - 關鍵字：dent（壓傷，凹痕）, steel plate（鐵板）',
      '  - 常犯錯：✗ a → ✓ b：說明',
      '  - 常犯錯：✗ c → ✓ d：說明二',
      '  - LINE：bbb（已校正）',
      '- [ ] 手動記的句子沒有 LINE id',
      '  - 口語：Manual.',
    ].join('\r\n');
    expect(parseCorrections(md)).toEqual([
      {
        id: 'bbb',
        fm: 'Formal one.',
        fmZh: '書面中文',
        sp: 'Spoken one.',
        spZh: '口語中文',
        kw: ['dent', 'steel plate'],
        kwZh: ['壓傷，凹痕', '鐵板'],
        mis: ['✗ a → ✓ b：說明', '✗ c → ✓ d：說明二'],
      },
    ]);
  });
});
