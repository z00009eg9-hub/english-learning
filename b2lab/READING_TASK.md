# B2 Read — 原創分級文章任務書（data-reading.js）

**每週六**由排程執行一次，**每次新增 2 篇**原創分級文章（id `r##`，接在目前最大編號後面），顯示在「閱讀 → ✍️ 原創分級文章」。
與 `DAILY_TASK.md`（每週三、寫 data-daily.js）互相獨立，不要動 data-daily.js、daily-state.json。

> 為什麼 Anita 只看到 19 篇：「原創分級」= data-reading.js（r##，B1～B2）＋ data-a2.js（a##，A2）；
> Anita 的程度區間是 B1–B2，A2 那 8 篇只有 Tom 看得到。所以篇數要靠持續新增 r## 來增加。

## 規則（沿用 DAILY_TASK.md，違反就是失敗）
- 主角只能是 **Tom 或 Anita**（不要 Amy）；配角可自取名。台灣／越南生活情境。
- **全部原創**，不抓新聞、不複製任何書／新聞句子；文法點參考 `syllabus.json`，解說與例句自己寫。
- 繁體中文台灣用語；音標一律美式 Cambridge（規則見 DAILY_TASK.md 第 2 步欄位表的 ipa 列）。
- `target` 的 `ex` 必須原創、換情境，**不可與本文連續 4 字相同**；一定要有 `exCn`。
- 不要重複題材：先看 `reading-state.json` 的 `topicsUsed`、`focusUsed`，新文章的主題與文法焦點都要是新的。

## 步驟

1. `git pull`；讀 `reading-state.json`；看 `public/data-reading.js` 最後一篇（r25）當格式範本（物件結構、中文語氣照抄）。
2. 依 `levelCycle[nextLevelIdx]` 決定本次兩篇的程度（接續輪替，例如這次 B1、B1+，下次 B2、B1…），寫 `r(lastId+1)`、`r(lastId+2)`，**插到 `window.READING` 陣列最後面**（`];` 之前）。

   | 程度 | 字數 | 段落 | target | questions |
   |---|---|---|---|---|
   | B1 | 200–225 | 5 | 6 | 3 |
   | B1+ | 215–260 | 4 | 8 | 4 |
   | B2 | 260–295 | 4 | 9–10 | 4 |

   欄位：`id, level, topic, words, title, titleCn, focus, intro, spoken(4句 {en,cn}), paras({en,cn}), target({w,ipa,pos,cn,def,ex,exCn}), questions({q,opts("A. "…),ans(0-based),expl}), upgrade(2組 {b1,b2,note,sp,spNote,b1Cn,b2Cn,spCn})`。
   `words` 用腳本算實際英文字數填入（不要估）。其中一題要考本篇文法點。
3. 在 `public/data-focus.js` 的 `window.FOCUS` 最後加同 id 的條目（`unit` 指向 data-grammar.js 最接近的 g01–g15、`title, formula, points[3-4], examples[3], traps[2]`）。
4. 橫幅圖（**不要手寫 SVG**）：寫 spec（兩篇各 `{p, i:[5 個圖示], cap}`，cap 用「A → B → C → D → E。語法重點：…」五段式，不寫圖示名稱），
   `node tools/genart.js spec.json out.txt`，把內容貼到 `public/data-art.js` 結尾 `};` 之前（標題註解要補成文章中文名）。
   圖示規則同 DAILY_TASK 3.5：5 個不重複、萬用圖示（star clock people doc chat talk phone house chart calendar question）最多 1 個、
   舊文章區塊同一圖示全站最多 4 次（`node tools/check-art.js` 會擋，被擋就換圖示；不夠貼切時依 3.5.1 補畫）。
5. 更新 `reading-state.json`：`lastRun`、`lastId`、`nextLevelIdx`、`topicsUsed`、`focusUsed`。
6. 升 `public/sw.js` 的 `CACHE`（`b2lab-vNNN` +1）。
7. **驗證（沒過不要 commit）**，用 node 檢查：每篇欄位齊全、`ans` 在範圍內、`exCn` 都有、例句 4-gram 不與本文重複、`target` 的字都出現在本文、段落都有中譯、`words` 與實際相符；然後
   ```bash
   cd b2lab && node tools/check-ipa.js && node tools/check-art.js && node tools/check-icons.js
   ```
   `check-ipa` 若指出同字有兩種寫法：**改成既有最多人用的寫法**（改你新寫的那筆）。
8. commit + push（只 add 有改的檔：data-reading.js、data-focus.js、data-art.js、reading-state.json、sw.js，補畫圖示時加 data-book.js）：
   `git commit -m "原創分級 r## r##：<兩篇標題>（SW vNNN）"`，署名 z00009eg9。push 後 CI 會自動部署 b2lab。
9. 回報：兩篇的 id / 程度 / 標題 / 主題 / 文法焦點，與驗證結果。
