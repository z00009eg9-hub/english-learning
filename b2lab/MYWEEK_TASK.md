# B2 Read — 我的職場週記任務書（my##）

**每週六**由排程 `b2lab-reading-weekly` 的「第 1 段」執行。把使用者這週上班講的中文句子，寫成一課「📝 我的職場週記」，放進職場分頁（`data-book.js`，id `my01`、`my02`…）。
這一段跟第 2 段「原創分級文章」（`READING_TASK.md`）**各自驗證、各自 commit**，這段失敗只還原自己的檔案，不影響第 2 段。

## 句子從哪來（⚠ 隱私）

- 原句放在 **`b2lab/my-week/`**，這個資料夾已列入 `.gitignore`，**永遠不能 commit**。repo 是公開的，原句裡會有客戶名、供應商名、料號。
- 每週一個檔，用輸入日期的 ISO 週次命名：`b2lab/my-week/2026-W44.md`。平日由對話中的 Claude 或 Codex 寫入，格式如下：

  ```markdown
  ## 2026-10-27
  - [ ] 馬達上蓋剛來，有色差問題
    - 書面：The incoming motor covers show color variation.
    - 口語：The motor covers just came in, and the color's a bit off.
    - 關鍵字：incoming, color variation, off
  ```
- `- [ ]` 是還沒用過的句子；做成課以後改成 `- [x] … → my##`。
- `b2lab/my-week/redact.txt`（同樣不進 git）：一行一個不能出現在網站上的詞，例如公司、客戶、供應商、人名、料號。每次讀句子時，看到新的就補進去。

## 步驟

0. **先從 LINE Bot 取句子並合併**：`node line-bot/scripts/pull-sentences.mjs`。
   - 使用者平日在 LINE 傳給單字 Bot 的句子會存在 Bot 的 KV，這支腳本把還沒取的句子照下面的格式寫進對應週次的 `my-week/<週>.md`（多一行 `- LINE：<id>` 防重複），寫入成功才通知 Bot 已取走。
   - token 在 `b2lab/my-week/.token`（不進 git）；檔案不存在時腳本會自己略過。
   - 寫著「AI 沒翻出來」的句子，在第 2 步之前先補上書面／口語／關鍵字。
   - **逐句校正（必做）**：LINE 上的書面／口語／常犯錯是免費 AI 即時產生的初稿，常有錯（例：把道地的 "just came in" 說成錯、口語版寫成 "has a color difference issue" 這種中式英文）。使用者是學習者、無法自己判錯，所以每一句（有 `- LINE：` 那行的）都要檢查：文法、是否美式道地口語、常犯錯的 ✗ 是否真的錯、✓ 是否真的對、說明是否正確。錯的直接改寫，改過的句子在 `- LINE：` 那行後面加 `（已校正）`。回報時列出校正了幾句、各改了什麼（只寫英文部分，不寫原句）。
   - 這一步失敗（網路、401）只回報，不影響後面用本機已有的句子繼續做。
1. 收集 `b2lab/my-week/*.md` 裡所有 `- [ ]` 的句子（可以跨週，上週不夠 5 句留下來的也算）。
   - **少於 5 句：這段直接跳過**，不改任何檔案。回報「本週 N 句，留到下週」，然後繼續第 2 段。
2. **匿名化**（先做完，才開始寫內容）：
   - 公司、客戶、供應商換成 Customer A／Supplier B；人名換成職稱（my supervisor、the line leader）。
   - 料號、批號換成 part A、Lot 1；精確數量、日期改成大概的說法（about 200 pieces、last week）。
   - 產品類型、問題類型、量測方法可以保留，例如馬達上蓋、色差、塗裝、孔距。這些就是要學的東西。
   - 把這次找到的專有名詞補進 `redact.txt`。
3. **只用句子裡的事實**：不另外捏造數字、原因或結果。句子之間的空白可以用很一般的連接（例如 "Later that week…"），但不能新增事件。
4. 讀 `myweek-state.json` 拿 `lastId`；新課 id 是 `my(lastId+1)`，兩位數補零。看 `public/data-book.js` 裡的 `qp04` 當格式範本，新課插在 qp 系列之後（lessons 陣列裡最後一個 qp/my 課的後面）。
   - 頂層欄位：`id, icon:'📝', date:執行當天, title, titleCn, topics, hwTitle, hw, vocabTitle, vocab, phrasesTitle, phrases, grammarTitle, grammar, cmpTitle, cmp, reading`。**不加 `video`**（週記不做影片版）。
   - `title`：`My Work Week NN — <本週主軸，英文>`；`titleCn`：`我的職場週記 NN｜<本週主軸>`。
   - `topics` 第一個詞固定是「我的職場週記」，它會變成卡片上的分類標籤；後面接本週主題詞。
   - `hw`（`hwTitle: "中翻英 Say It in English"`）：每句（匿名化後）一題，最多 8 題，挑最常用的。`cn` 是使用者的原意，`ok` 是自然的英文，`pat` 是句型，`note` 用 1～2 句繁中說明。使用者原本的說法很可能有典型錯誤時，改用 `wrong`/`fix`。
   - `vocab` 6～8 個：`{w, ipa, pos, cn, ex, exCn}`。音標一律美式 Cambridge，用 `/…/`。`ex` 要原創、換情境，**不可與本文連續 4 字相同**。
   - `phrases` 4～6 個搭配詞；`grammar` 3 個句型（`k` 用 `MY<nn>-A/B/C`）；`cmp` 2 組易混淆。欄位名照 qp04（`u/sc/ex/exCn/cn`）。
   - `reading` 依序 4 段：
     1. `bar:"週報｜<主軸>"`：📧 一封寄給主管的週報 email，4～6 段 `{en, cn}`，第一行 `Subject: …`。加 3 題 `questions:[{q,qCn,a,aCn}]`。
     2. `bar:"會議｜<主軸>"`：🗣 同一批事件的口語對話，用 `Supervisor:`／`You:`（或 `Supplier:`），8～12 句。
     3. `bar:"討論｜下週我會怎麼做"`：3～4 個問句，讓使用者自己想下一步。
     4. `bar:"隨身速查｜本週 N 句"`：這週每句的英文（口語版）＋中文。
   - 文章難度 B1～B1+，句子短、職場口語，避免學術腔。中文用台灣工廠口語（SOP、來料、色差、特採）。
5. 插圖：在 `data-book.js` 的 `S` 物件加 `my##:[[[五個圖示 key], '圖說']]`，放在 qp 那幾行附近。圖示 key 只能用 `I` 圖示庫裡已有的，5 個不重複；圖說用「A → B → C → D → E。」的格式，不寫圖示名稱。
6. 更新 `myweek-state.json`：`lastId`、`lastRun`、`runs` 加一筆 `{id, date, sentences:N, theme}`。**不記任何原句**。
7. 把用過的句子在 `my-week/*.md` 裡改成 `- [x] … → my##`。這是本機檔，不 commit。
8. `node tools/build-rel.js`（更新 `data-rel.js`）；升 `public/sw.js` 的 `CACHE`（先 `git pull`，再從最新版號 +1）。
9. **驗證（沒過不要 commit）**：
   - 用 node 載入 `data-book.js`：新課欄位齊全、`hw` 都有 `cn` 且有 `ok` 或 `fix`、`vocab`/`grammar`/`cmp` 都有 `exCn`、vocab 例句與本文沒有連續 4 字相同。
   - **洩漏檢查**：`redact.txt` 每一行都不能出現在新課的 JSON 字串裡（不分大小寫）。另外不能有像料號的字串，例如 `/[A-Z]{2,}-?\d{3,}/`，標準編號（EN ISO 20957 這類）除外。
   - `node tools/check-ipa.js && node tools/check-art.js && node tools/check-icons.js && node tools/check-emoji.js`
   - 本機開站（launch.json 的 `b2lab`）：職場分頁出現「📝 我的職場週記」，點進去內容正常、沒有 console error。
10. commit＋push：只 add `public/data-book.js`、`public/data-rel.js`、`public/sw.js`、`myweek-state.json`。訊息寫 `feat(b2lab): 我的職場週記 my## <主軸>（SW vNNN）`，署名 z00009eg9。push 後 CI 自動部署；AI 語音交給每天的 `b2lab-audio-sync` 補。
11. **失敗處理**：任何一步修不好就 `git checkout -- <這段改過的檔>`，`my-week/*.md` 的勾選也改回 `[ ]`，在回報寫清楚原因，然後繼續第 2 段。

## 回報（繁體中文）

本週幾句、課的 id／標題、3 個句型、匿名化換掉了哪些類別（不列原詞）、驗證結果。
