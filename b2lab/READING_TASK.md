# B2 Read — 原創分級文章任務書（data-reading.js）

**每週六**由排程執行一次，**每次新增 2 篇**原創分級文章（id `r##`，接在 `reading-state.json` 的 `lastId` 後面），顯示在「閱讀 → ✍️ 原創分級文章」。
與 `DAILY_TASK.md`（每週三、寫 data-daily.js）互相獨立，不要動 data-daily.js、daily-state.json。

> 「原創分級」＝ data-reading.js（r##，B1～B2）＋ data-a2.js（a##，A2）。Anita 的程度區間是 B1–B2，A2 那幾篇只有 Tom 看得到，所以 Anita 的篇數要靠持續新增 r## 增加。

## 規則

共用規則（人物只有 Tom／Anita、原創與版權、`ex` 不可與本文連續 4 字相同、音標、橫幅圖、驗證收尾）見 **`TASK_COMMON.md`，先讀。** 本任務另外：

- 文法點參考 `syllabus.json`，解說與例句自己寫。
- 不要重複題材：先看 `reading-state.json` 的 `topicsUsed`、`focusUsed`，新文章的主題與文法焦點都要是新的。

## 步驟

1. `git pull --rebase`；讀 `reading-state.json`；看 `public/data-reading.js` 的最後一篇當格式範本（物件結構、中文語氣照抄）。
2. 依 `levelCycle[nextLevelIdx]` 決定本次兩篇的程度（接續輪替，例如這次 B1、B1+，下次 B2、B1…），寫 `r(lastId+1)`、`r(lastId+2)`，**插到 `window.READING` 陣列最後面**（`];` 之前）。

   | 程度 | 字數 | 段落 | target | questions |
   |---|---|---|---|---|
   | B1 | 200–225 | 5 | 6 | 3 |
   | B1+ | 215–260 | 4 | 8 | 4 |
   | B2 | 260–295 | 4 | 9–10 | 4 |

   欄位：`id, level, topic, words, title, titleCn, focus, intro, spoken(4句 {en,cn}), paras({en,cn}), target({w,ipa,pos,cn,def,ex,exCn}), questions({q,opts("A. "…),ans(0-based),expl}), upgrade(2組 {b1,b2,note,sp,spNote,b1Cn,b2Cn,spCn})`。
   `words` 用腳本算實際英文字數填入（不要估）。其中一題要考本篇文法點。
3. 在 `public/data-focus.js` 的 `window.FOCUS` 最後加同 id 的條目（`unit` 指向 data-grammar.js 最接近的 g01–g15、`title, formula, points[3-4], examples[3], traps[2]`）。
4. 橫幅圖：寫 spec（兩篇各 `{p, i:[5 個圖示], cap}`），規則見 `TASK_COMMON.md`「橫幅圖」，`node tools/genart.js spec.json out.txt`，把內容貼到 `public/data-art.js` 結尾 `};` 之前（標題註解補成文章中文名）。`check-art.js` 被擋就換圖示，不夠貼切依 `DAILY_TASK.md` 3.5.1 補畫。
5. 更新 `reading-state.json`：`lastRun`、`lastId`、`nextLevelIdx`、`topicsUsed`、`focusUsed`。
6. 升 `public/sw.js` 的 `CACHE`（`b2lab-vNNN` +1）。
7. **驗證（沒過不要 commit）**，用 node 檢查：每篇欄位齊全、`ans` 在範圍內、`exCn` 都有、例句 4-gram 不與本文重複、`target` 的字都出現在本文、段落都有中譯、`words` 與實際相符；然後
   ```bash
   cd b2lab && node tools/check-ipa.js && node tools/check-art.js && node tools/check-icons.js
   ```
8. commit + push（只 add 有改的檔：data-reading.js、data-focus.js、data-art.js、reading-state.json、sw.js，補畫圖示時加 data-book.js）：
   `git commit -m "原創分級 r## r##：<兩篇標題>（SW vNNN）"`，署名 z00009eg9。push 後 CI 會自動部署 b2lab。
9. 回報：兩篇的 id / 程度 / 標題 / 主題 / 文法焦點，與驗證結果。
