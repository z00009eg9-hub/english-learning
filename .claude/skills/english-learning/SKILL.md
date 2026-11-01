---
name: english-learning
description: 英文課堂筆記的完整自動化工作流程 — 自動建立當天日期資料夾、把課堂筆記寫入 Google 文件（新建或更新，含橘色表頭表格、★作業複習範本、文法解說格式）、把筆記重點同步進互動學習網頁 index.html、以及為當天筆記自動生成考題並同步到 index.html 的「每日測驗」分頁（含成績記錄），推送到 GitHub，最後部署到 Firebase 線上網站（https://learning-english-notes.web.app）。當使用者貼上課堂對話/錄音逐字稿/筆記文字、要求把補充教材加入某份 Google 文件、要求「同步筆記」、要求「出考題/生成考題/更新測驗」、或要求「部署網站/更新線上網站/deploy」時使用。
---

# 英文學習筆記工作流程（零步驟自動化）

## 適用情境

1. 使用者貼上課堂對話/錄音逐字稿/筆記文字 → 自動建立當天日期資料夾 + 產出**全新**格式化 Google 文件
2. 使用者要把補充內容（額外單字、句型、文法解說、比較表等）**加入「現有」**的 Google 文件
3. 使用者說「同步筆記」或執行 `/sync-notes` → 把 Drive 上新筆記的重點同步進 `index.html`（互動學習網頁）並推送到 GitHub

> ⚠ **最高規則（2026-08-21 使用者指定）：筆記生成／更新（情境 1、2）完成後，一律停在 Google 文件這一步，不自動部署。**
> 流程 F（Speak Up 出考題）、流程 F2（DAYTALK）、流程 G（Firebase 部署）、流程 H（B2 Read 課本）都只在使用者**明確要求**時才執行
> （例如說「同步 Speak Up／出考題／部署／更新課本／同步筆記」）。完成筆記後在回報中提醒一句「Speak Up 與 B2 Read 尚未同步」即可。

建立或更新格式化 Google 文件，首選「流程 A0：HTML 直接上傳 Drive」。舊法（Chrome 渲染後從 Edit 選單貼上，`ctrl+v` 在 Google Docs 無效）只在 A0 不能用時才參考 `references/legacy-chrome-paste-and-font.md`。

---

## 流程 00：Git 前置與收尾檢查（每次同步/部署都必做）

做法與原因見 `AGENTS.md` §1（先 `git fetch`，看清楚本地與 `origin/main` 各差哪些 commit，再 `git pull --rebase origin main`；rebase 衝突不要 `--abort`，`--skip` 前先 `git show --stat`；收工立刻 push；收尾 `git log --oneline origin/main..main` 與 `git branch --no-merged main` 要乾淨）。這個 repo 同時有雲端排程與其他 Claude／Codex session 在推 `main`，2026-08-28 就因為 abort 與 skip 掉了三個 commit。
---

## 流程 0：自動建立/尋找當天日期資料夾（2026-06-11 新增）

> **兩個位置分工（2026-09-18 確立）**：
> - **當天日期資料夾、.gs 腳本、上課圖片音檔** → 留在雲端硬碟 `G:\我的雲端硬碟\英文筆記\YYYYMMDD-主題\`（資料夾用 Drive API 建，不受對話從哪裡開啟影響）
> - **git、index.html、b2lab 資料、部署** → 一律在 `D:\english-learning`
> - `G:\我的雲端硬碟\英文筆記` 裡的 git repo 是停用的舊副本，**不要在那裡跑 git**（會讓雲端冒出大量雜湊檔名的物件檔）

情境 1（建立全新 Google 文件）執行前，**先自動處理目標資料夾**，使用者不需手動建立：

1. 主資料夾 ID：`1YtpOmtpwi7Mogdu5XR5_nNjnzEOOMe9C`
2. 用 `search_files` 搜尋主資料夾下，標題包含當天日期 `YYYYMMDD` 的子資料夾（注意：欄位是 `title contains`，**不是** `name`；父資料夾用 `parentId =`，**不是** `'...' in parents`，後者會回傳 "Unsupported query field" 錯誤）：
   ```
   mimeType = 'application/vnd.google-apps.folder' and title contains 'YYYYMMDD' and parentId = '1YtpOmtpwi7Mogdu5XR5_nNjnzEOOMe9C'
   ```
3. **找到** → 用該資料夾 ID 作為 `parentId`
4. **找不到** → 用 `create_file` 建立新資料夾：
   - `mimeType`: `application/vnd.google-apps.folder`
   - `title`: `YYYYMMDD-主題`（主題用本次筆記內容判斷，例如 `20260611-面試英文`）
   - `parentId`: `1YtpOmtpwi7Mogdu5XR5_nNjnzEOOMe9C`
   - 取得回傳的 `id` 作為後續 Google 文件的 `parentId`

---

## 共用：教材內容規範

### ⭐ 忠於原文原則（2026-09-27 使用者指定，回補舊筆記與每次同步都適用）

課本（`data-book.js`）**忠實呈現 Google 文件的內容**，不要替使用者改寫或補寫。訂正與補充一律寫在「快速總結」（`summary`），不動原文。

- **原文有錯**（缺主詞、語序錯、時態錯、中式英文）→ **課文、例句、練習照原文寫**，在 `summary` 最上方加一條 `{k:"⚠ 原文的 N 處小錯", v:"<原句> 應為 <正確句>；…"}`。
  例：`bk20250709` 的 `Today have to stay at home.`／`I think I have also a fever.`／`I love play computer games.` 都保留原樣，訂正寫在總結。
  練習題的 `cn` 可以補一句「（原文寫 X，正確應為 Y）」，但 `en` 不動。
- **原文只有「字＋用法」沒有例句** → **不要自己造例句**。該列從比較表拿掉，把差別寫成一條 `summary` 規則；若原文其中一個字剛好有例句，就保留那一列並把標題改成三者對照。
  例：`bk20251218` 的 faulty / defective / damaged。
- **原文的表格欄位不齊**（例如單字表沒有詞性或例句）→ 該批內容改放 `phrases` 索引表或 `extra`，不要為了塞滿 `vocab` 欄位而編造。
- 只有這兩種情況可以動原文用字：① 明顯的錯字（typo，例如 `recieve`）；② 全站統一的音標寫法。兩者都不需另外說明。
- ⚠ 影片版（`data-video.js`）的情境對話是**新寫**的，不受這條限制；但用字、句型仍要來自該課筆記。

- 單字表格固定 5 欄：單字｜音標｜詞性｜**例句**｜**中文**（例句格內＝英文句（該課單字粗體）＋換行＋中文翻譯）
  - 片語表格：片語｜例句｜中文（格內同樣英文＋換行＋中譯，片語在例句中粗體）
  - **通則（2026-08-29 使用者指定，取代 2026-08-21「例句放最右」的舊規則）：任何表格只要同時有「例句」欄與「中文」欄，一律「例句」在前、「中文」在後 —— 中文意思欄放最右**
    - 適用所有章節，不只單字／片語表：職場用語、易混淆比較、人際用語等「說法｜中文｜例句」三欄表，一律改成 **說法｜例句｜中文**
    - 欄寬要跟著換（例句欄拿寬的那格），否則例句會被擠成逐字換行
    - ⚠ 例外：表頭寫「意思」「重點」「語氣／使用情境」「說明」「詳見」的欄位**不算「中文」欄**，位置不動（這些是分類/解說欄，本來就該排在例句前）
    - 既有文件要補救時，用整欄對調的腳本（含表頭列＋欄寬一起換），不要重打內容：參考 `20260827-動名詞與不定詞、默契用語/move-chinese-after-example.gs`（`moveChineseAfterExample()`，靠表頭文字自動找「中文」「例句」欄索引，只在中文排在例句前面時才動）
    - ⚠ **片語表自 2026-08-25 起改成索引表**：`片語｜中文｜詳見`（**不放例句**），例句只寫在對應主題章節。
      這張表沒有「例句」欄，所以上面的欄序通則不適用。理由與完整去重規則見下方「⭐ 內容去重原則」。
  - 章節框架也比照 20260813：標題＋英文副標＋Topics 行 → I. ★ MM/DD 作業複習（卡片：❌原句/✅訂正紅斜體/中文/結構藍粗體/🔬文法解說）→ II. 單字（含「補充單字」h3 小節）→ III. 片語與搭配詞 → IV. 句型與文法解說（h3 A/B/C… 每個一張 callout：句型：藍粗體＋• 條列）→ V… 閱讀/情境 → 補充字彙與句型（補充內容｜英文｜中文 三欄）→ 快速總結（重點｜說明）。參考重建腳本：`20260821-電腦檔案與辦公室英文/rebuild20260821.gs`
- **音標一律美式 Cambridge**：完整規則（符號、捲舌 r、自我檢查）見 `b2lab/TASK_COMMON.md`「音標」；寫完跑 `node b2lab/tools/check-ipa.js`。同一個字全站同一寫法，因為 B2 Read、課本、關聯頁與 Google 文件共用。
  - **既有筆記要批次改**：對照表 `b2lab/public/us-ipa-map.json`，批次腳本正本 `b2lab/tools/us-ipa-pass2.gs`（`pass2()` 掃全部課堂筆記，只替換斜線包起來且含音標符號的字串；用法在檔頭；以 repo 這份為準）。新例外字寫進 json 再 push。
  - 🔊 發音也只用美式：`pickVoice()` 先過濾 `en-US`。
- B1 以上單字、句型、片語**全部收錄**，不省略（但同一句例句全文件只出現一次，見「⭐ 內容去重原則」）
- B2+ 單字加 ⭐ 標記
- 每個句型必附繁體中文文法解說，格式：
  ```
  🔬 文法解說：
  • 結構：
  • 中文解析：
  • ⚠ 避免中式英文（如適用）：
  • 使用情境：
  ```
- **🔬 文法解說區塊文字一律 13pt、黑色（`.note` class，見下方 CSS）**
  （2026-06-10 確認：使用者要求所有文法解說文字大小 13pt、顏色黑色，已套用至 20260609 文件並更新此 CSS 預設值）
- **所有例句都要附中文翻譯（2026-06-11 確認）**：單字表格、片語表格、句型對照表、填空練習等任何出現「例句」的地方，**都要在英文例句後面加上中文翻譯**（同一格內用 `<br>` 換行接中文，或表格新增「中文」欄），不可只有英文

## ★ 上次作業複習 Homework Review 區塊範本（2026-06-11 確立，2026-06-11 補充完整版）

當課堂筆記包含「★ 上次作業複習 Homework Review」時，**一律使用以下格式**：

- 標題列用橘紅色（`.star` class），文字為「★ 06/DD 作業複習 Homework Review」
- 標題下方**直接接**有序清單 `<ol>`，每一題一個 `<li>`，**不要**額外加「N. 關於「...」的...」這種小標題，**也不需要**額外的開場段落或前言文字（標題後直接是第 1 題）
- **作業有幾題就全部列出（2026-06-11 確認）**：若課堂對話中可以找到完整的作業原句（例如學生交了 5 句作業），**全部 5 句都要列入** `<ol>`，不能只列出老師有訂正的那一句。沒被訂正的句子若文法正確，文法解說就寫「這句話文法正確」，再說明句中的重點文法/用法即可；只有被訂正的句子才需要在文法解說中加入訂正建議
- 每個 `<li>` 的固定結構（外層是整段「原句」敘述，內層是開頭的項目符號清單）：
  ```html
  <li><b>原句：</b>[英文原句]
    <ul>
      <li><b>中文：</b>[中文翻譯]</li>
      <li><b>文法解說：</b>[視情況決定的開場說明文字，可為空]
        <!-- 視情況加入第三層 <ul>，列出細項重點 -->
        <ul>
          <li>[重點說明文字，視情況包含 0~多個 <span class="kw">...</span> 標記]</li>
          <li>（可有第二、第三條...）</li>
        </ul>
      </li>
    </ul>
  </li>
  ```
- **彈性規則（依實際內容判斷，不要硬套單一樣式）**：
  - 若該句的文法重點可以一句話講完，`文法解說：` 後直接接說明文字，**不需要**第三層 `<ul>`（例：「siren 指的是『警報器』或『警報聲』。」）
  - 若該句有多個重點，`文法解說：` 後可留空（直接接 `<ul>` 列出 2~3 條），或先寫一句開場說明再接 `<ul>`，兩種寫法皆可，依語意通順為準
  - `<span class="kw">`（淺綠色螢光標記 `#D9EAD3` + 粗體）只標在**該句真正的核心文法重點**（不定詞、被動語態、固定搭配、道地用法、子句結構等），**不要每條都硬塞 kw**——若某條只是單字字義說明（如 tornado = 龍捲風），不需要 highlight
- `.kw` CSS：
  ```css
  .kw { background-color: #D9EAD3; font-weight: bold; }
  ```

### 範例集（取自 20260609 筆記第 1～7 題，涵蓋各種變化型）

**簡單型（無第三層 `<ul>`，文法解說一句話）：**
```html
<li><b>原句：</b>My phone made a loud siren sound when it received the earthquake warning.
  <ul>
    <li><b>中文：</b>當手機收到地震預警時，發出了巨大的警報聲。</li>
    <li><b>文法解說：</b><span class="kw">siren</span> 指的是「警報器」或「警報聲」。</li>
  </ul>
</li>
```

**文法解說留空 + 第三層條列（部分條目有 kw，部分沒有）：**
```html
<li><b>原句：</b>The weather forecast says a typhoon will hit Taiwan tomorrow.
  <ul>
    <li><b>中文：</b>天氣預報說明天將會有颱風登陸台灣。</li>
    <li><b>文法解說：</b>
      <ul>
        <li><span class="kw">The weather forecast says...</span> 是英文中很道地的用法，字面意思是「天氣預報說」，後面省略了連接詞 that。</li>
        <li>英文中要表達颱風「登陸」，最常用的動詞就是 hit（侵襲/打擊）或 make landfall。</li>
        <li>因為事情發生在明天（tomorrow），所以名詞子句內部使用未來式 will hit。</li>
      </ul>
    </li>
  </ul>
</li>
```

**文法解說有開場句（含 inline kw）+ 第三層條列：**
```html
<li><b>原句：</b>The equipment was delivered late, and it messed up our plan for the new factory in Vietnam.
  <ul>
    <li><b>中文：</b>設備太晚送達了，這搞砸了我們在越南新工廠的計劃。</li>
    <li><b>文法解說：</b>was delivered late 是被動語態<span class="kw">（be動詞 + 過去分詞）</span>，表示設備「被送達」得太晚。
      <ul>
        <li>片語 <span class="kw">mess up</span> 意思是「搞砸」或「弄亂」，在這裡當作過去式動詞使用。</li>
        <li><span class="kw">plan for...</span> 表示「針對......的計劃」。</li>
      </ul>
    </li>
  </ul>
</li>
```

**完整型（開場句 + 第三層條列，全部重點皆含 kw）：**
```html
<li><b>原句：</b>I wore a mask to protect myself because of the sandstorm.
  <ul>
    <li><b>中文：</b>因為沙塵暴的關係，我戴上口罩來保護自己。</li>
    <li><b>文法解說：</b>wore 是動詞 wear（穿/戴）的過去式。
      <ul>
        <li><span class="kw">to protect 是不定詞（to + V）</span>，在這裡用來表示「目的」（為了保護……）。</li>
        <li><span class="kw">because of</span> 後面只能接<span class="kw">「名詞」或「代名詞」</span>（如 <i>the sandstorm</i>），用來表示原因；而單純的 because 後面則必須接完整的「子句」（有主詞+動詞）。</li>
      </ul>
    </li>
  </ul>
</li>
```

## ⭐ 產出前自我檢查（2026-06-11 確立，文法解說品質把關）

在貼上或上傳 Google 文件之前，**先針對本次新增的所有「文法解說」內容自我檢查一遍**，確認：
1. 文法規則描述正確（例如被動語態結構、不定詞用法、時態規則等，不能有錯誤的文法說明）
2. 中文解析語句通順、用詞精準，沒有翻譯腔或語意錯誤
3. `<span class="kw">` 標記的範圍正確涵蓋該句真正的文法重點，且沒有過度標記或遺漏核心重點
4. 例句與解說內容一致（解說中提到的單字/片語確實出現在原句中）
5. **音標全部是美式**（見「共用：教材內容規範」的音標規則）：沒有 `ɒ`／`ɜː`／`əʊ`／`ɛ`，而且每個單字「拼字裡的 r」都在音標裡有對應的 `r`／`ɚ`／`ɝ`（2026-09-21 新增；之前就是漏了捲舌，全站 1,300 多筆音標才要重掃一次）

確認無誤後才進行渲染貼上；若發現問題，先修正內容再產出，**不要**把有疑慮的文法解說直接貼到 Google 文件。

## ⭐ 內容去重原則：一句例句只出現一次（2026-08-25 確立，使用者回饋）

> 這一節曾在 2026-08-28 的 rebase 事故中連同 `edf92b7` 一起落單，2026-08-29 補回。

2026-08-25 使用者回報「裡面內容有很多一直重複」。原因是每個章節各自附例句，同一句話在
作業複習、單字表、片語表、主題章節、正確句總表、快速總結裡出現 5～6 次。
**產出前一定要跑這一輪去重檢查**，格式（橘色 bar／黃色 callout／橘色表頭表格）維持不變，只調整內容分布。

### 硬性規則

1. **每個句子只有一個「家」**：一句英文例句在整份文件只完整出現一次，放在它最該在的章節。
   - 作業原句／訂正句 → 只放 **I. 作業複習**
   - 主題句型例句 → 只放該主題章節（III～VII）
   - 其他章節要提到時，只寫規則、對比或中文說明，**不要把整句再貼一次**
2. **不要做「正確句總表」這種章節**：內容 100% 是別章的複製。作業複習本身就是總表。
   （2026-08-25 已從 20260825 v2 移除。）
3. **片語表（II-B）改成索引表**：欄位為 `片語｜中文｜詳見`，
   `詳見` 填該片語詳細講解的章節代號（如 `IV-A`、`VII-B`）。
   例句只寫在對應章節，片語表不重複貼例句。
   表格上方加一行 callout 說明：「本表只列片語＋中文，方便快速查找；詳細用法、例句與比較請看後面各章。」
4. **單字表（II-A）用短例句**：若該字的完整例句已在作業複習出現，單字表改寫**精簡版短句**
   （例：作業句 `The cloud service was down, which caused the document to become corrupted.`
   → 單字表 corrupted 寫 `The document became corrupted.`），不要整句照抄。
   ⛔ **例句欄、答案欄絕對不可寫「見 IV-A」「見 V-C 第 1 題」「見第 1 題」這種指引**（2026-10-27 使用者第二次指正）：
   單字表每個字都要有**實際英文例句＋中譯**；問答（含複習問題、口說練習）每題都要寫**實際答案句＋中譯**。
   去重只代表「換一句不同的短句」，不代表可以留空或指路。唯一可以寫章節代號的是片語索引表的「詳見」欄。
   產出前用搜尋檢查全文沒有「見 I」「見 V」「見第」字樣。
5. **同一個點只列一次**：
   - 時差章節「句型列」與「時間換算列」合併成同一列（一地區一列），不要拆成兩列各講一次
   - 品味章節不要列 9 列 `have the same taste in ○○`；領域清單併進 callout 一行帶過，
     表格只留**語氣差異**（相似／相同／不同／完全不同）各一句
   - 主題章節內的 A/B/C 小節之間不要互相重貼例句
6. **快速總結只寫規則、不貼完整例句**：用「A is [n] hours **ahead of** B（一定加 of）」這種
   規則式寫法，不要把整句範例再抄一次。
7. **填空練習合併重複考點**：同一個文法點不要出兩題；一題可以挖兩個空
   （例：`Taiwan is one hour ___ ___ Vietnam, so Vietnam is one hour ___ Taiwan.` → ahead of / behind）。

### 產出前檢查方式

把所有英文例句抓出來比對，**同一句出現 2 次以上就要砍到剩 1 次**（作業複習優先保留）。
去重後章節編號要重新連號（移除章節後，後面的 VIII / IX / X 要往前遞補）。

> ⚠ **同步到 B2 Read 課本（流程 H）時同樣適用**：`phrases[]` 不要每條都掛 `ex`／`exCn`，
> 那些句子多半已經在 `hw` / `grammar` / `extra` 出現過。片語只留 `p` + `cn`，
> 需要指路就把章節代號寫進 `cn`（例：`延後、拖延（詳見 IV-B）`）。
> 渲染器已支援省略 `ex`（2026-08-29 起 `p.ex` 為空就不畫例句列）。
> `bk20260825` 是規則確立當天做的，`phrases` 還留著例句，屬既有資料，不回頭改。

## 共用：HTML/CSS 模板（橘色表頭）

每次渲染的 HTML 都要包含這份 `<style>`，確保表格樣式一致：

```html
<style>
  body { font-family: Arial, sans-serif; font-size: 11pt; margin: 40px; color: #000; }
  h1 { font-size: 18pt; color: #BF360C; }
  h2 { font-size: 14pt; color: #333; border-bottom: 2px solid #FFE0B2; padding-bottom: 4px; }
  h3 { font-size: 12pt; color: #555; }
  table { border-collapse: collapse; width: 100%; margin-bottom: 16px; }
  th { background-color: #FFE0B2; color: #000; font-weight: bold;
       padding: 6px 8px; border: 1px solid #ccc; font-size: 11pt; }
  td { padding: 5px 8px; border: 1px solid #ddd; font-size: 11pt; vertical-align: top; }
  tr:nth-child(even) td { background-color: #F9F9F9; }
  .note { font-size: 13pt; color: #000; margin-left: 24px; line-height: 1.7; }
  .kw { background-color: #D9EAD3; font-weight: bold; }
  .star { color: #E65100; }
  hr { border: 1px solid #FFE0B2; margin: 20px 0; }
  p { line-height: 1.6; }
</style>
```

---

## 流程 A0：建立格式版 Google 文件的首選做法（細節已拆檔）

建立或更新格式化 Google 文件（HTML 直接上傳 Drive）時，**先讀** `references/flow-a0-html-upload.md`（完整內容，未刪減）。

## 流程 A：建立全新 Google 文件

1. **解析**：從貼上的內容中提取日期、主題、單字、片語、句型
2. 執行「流程 0」取得/建立當天日期資料夾，作為 `parentId`
3. **生成**完整 HTML（含上方 CSS + 完整教材內容，章節：I 單字、II 片語、III 句型+文法解說、IV 比較表（如適用）、V 快速總結）
4. 用 Drive MCP `create_file` 建立**空白 Google 文件**：
   - `title`: `YYYYMMDD-主題【格式版】Topic`
   - `mimeType`: `application/vnd.google-apps.document`
   - `parentId`: 流程 0 取得的資料夾 ID
   - 不帶 `textContent`（建立空白文件）
5. 取得回傳的 `id`，組出編輯網址 `https://docs.google.com/document/d/FILE_ID/edit`
6. 執行「核心技術：渲染並貼上」（見 `references/legacy-chrome-paste-and-font.md`），目標分頁為這份新文件
7. ⚠ **筆記生成後不要自動部署**（2026-08-21 使用者指定）：**不要**自動接著執行流程 F（出考題／Speak Up）、流程 G（Firebase 部署）或流程 H（B2 Read 課本）；等使用者明確要求「同步／出考題／部署／更新課本」時才做
8. 完成後回報 Google 文件連結 + 教材摘要（幾個單字、幾個句型等），並提醒使用者：Speak Up 與 B2 Read 課本尚未同步，需要時再說一聲

## 流程 B：新增內容到現有 Google 文件

1. 用 `search_files` 或使用者提供的連結/ID 找到目標 Google 文件
2. 用 `read_file_content` 讀取現有內容，避免重複收錄相同單字/句型
3. 生成「新增段落」HTML（同樣套用上方 CSS），章節編號接續現有文件（例如現有到 VI，新增從 VII 開始）
4. 執行「核心技術：渲染並貼上」（見 `references/legacy-chrome-paste-and-font.md`），**貼上前先 `ctrl+End` 移到文件最末**
5. 完成後回報新增了哪些章節/內容摘要

## 流程 C：同步筆記到 index.html + 推送 GitHub（細節已拆檔）

使用者說「同步筆記」或 `/sync-notes` 時，**先讀** `references/flow-c-sync-index.md`（完整內容，未刪減）。最高規則：建立／更新筆記後停在 Google 文件，不自動同步或部署；只在使用者明確要求時才做。

## 流程 F：生成當天考題（DAYQUIZ）並同步（細節已拆檔）

使用者要求「出考題」時，**先讀** `references/flow-f-quiz.md`（完整內容，未刪減）。最高原則：內容 100% 來自筆記，禁止 AI 生成。

## 流程 F2：生成情境對話腳本 DAYTALK（2026-08-12 確立）

**觸發時機：** 每次跑完流程 F（出考題）之後，為同一天再產一組情境對話腳本。

### 為什麼要有這個
「💬 情境對話」以前是把**上一題的課文句**當教練台詞，但同一天的課文句彼此無關，
畫面上會出現「教練：Using two monitors is an efficient setup for engineers.」→
「請用英文說：保險公司為車禍事故提供我們賠償。」這種前言不對後語的狀況（2026-08-12 使用者回報）。
現在改成 `DAYTALK` 手寫腳本：**教練的問句由你編寫**，**回答句一律逐字取自筆記原文**。

### 資料結構（在 index.html，`const DAYTALK = {`，標記 `// ===SYNC:DAYTALK_START/END===`）
```javascript
"YYYYMMDD": {
  title: "主題",
  turns: [
    {q:"教練的英文問句",qCn:"教練問句的中文",
     en:"筆記原句（學習者要說出來的答案）",cn:"該原句的中文",hint:"提示（文法點或關鍵字）"},
  ]
}
```

### 出題規範
1. **`en` / `cn` 必須逐字取自當天筆記**（allTrans 的 `a`/`p`、或 vocab 的 `exEn`/`exCn`），不可自行造句
2. **`q` / `qCn` 是引導語，可自行編寫** —— 這屬於「包裝」不是「教材內容」，與流程 F 的規則一致
3. **每個 `q` 必須自己成立、不可依賴前一題**：系統會用 `rotatePick` 抽題（每次抽一部分），
   所以不能寫「Did he say anything **after that**?」這種指代前文的問句；
   要寫成「Tom forgot his wife's birthday. Did he say anything to her?」
4. 問句要讓那句筆記原句成為**自然的回答**（問題問什麼、答案就答什麼）
5. 一天約 8–12 turns，依筆記句子數量而定，寧缺勿造
6. 沒有 DAYTALK 的日期會自動退回「教練只說引導語」（`TALK_LEAD`），不會壞掉，**不需要回頭補舊日期**

### 同步步驟
1. 在 `// ===SYNC:DAYTALK_START=== ...` 那一行的**正下方**插入 `"YYYYMMDD": { ... },`（最新在最上面）
2. 更新標記行的 `sync_date` 與 `count`
3. 與流程 F 的 DAYQUIZ 一起 commit / push / 部署（流程 G）

### 產出前自我檢查
- 每個 `en` 都能在當天筆記中找到出處（可用 node 腳本比對 allTrans / vocab）
- 每個 `q` 不依賴其他 turn 的上下文，單獨看也讀得通
- `q` 與 `en` 真的是「問 → 答」的關係，不是各說各話

---

## 流程 G：部署

Speak Up 與 B2 Read 都是 **push 到 main 由 CI 自動部署**（`.github/workflows/deploy-speakup.yml`、`deploy-b2lab.yml`），不需要手動部署。部署前：`git status` 乾淨、`git pull --rebase`、`git log --oneline -3` 確認最新 commit。

備案（CI 壞掉才用）：`cd /d/english-learning && cp index.html public/index.html && npx firebase-tools deploy --only hosting --project learning-english-notes`。要重新登入時叫使用者自己 `firebase login`，不要代填帳密。

只在使用者明確要求時才進入本流程（見檔頭最高規則）。完成後回報部署結果與網址，提醒重新整理即可（`no-cache`）。

---

## 修復「貼上後表格內文字逐字換行」（細節已拆檔）

貼上 Google 文件後表格文字逐字換行時，**先讀** `references/fix-table-wrap.md`（完整內容，未刪減）。絕對禁止對表格文件按 Ctrl+Z。

---

## 流程 E：Apps Script DocumentApp 直接寫入 Google 文件（細節已拆檔）

需要用 Apps Script 寫入 Google 文件、作業複習「照片卡片格式」、閱讀文章格式時，**先讀** `references/flow-e-apps-script.md`（完整內容，未刪減）。

## 流程 H：同步課堂筆記到 B2 Lab 課本（細節已拆檔）

使用者要求「更新課本／同步 B2 Read」時，**先讀** `references/flow-h-b2-book.md`（完整內容，未刪減）。最高規則：每次都重讀最新版 Doc 逐節比對；影片版、插圖、`build-rel.js`、`sw.js` 版號 +1 缺一不可；收尾做 Git 檢查。

## B2 Read 前端 UI 規則（2026-09-05 確立）

修改 `b2lab/public/index.html` 時遵守：

- **返回按鈕不要文字箭頭**：`.back` 按鈕已有 `::before` 的 SVG 橘色箭頭圖標，`<span class="back-label">` 裡只寫中文文字（如「返回閱讀」「返回課本」），不要加 `←` 或任何箭頭字元——在部分字型/系統會渲染成紅框 emoji。
- **卡片底色用 `var(--card)`**：不要寫 `background:#fff`，統一用 CSS 變數，護眼模式才能整批換色。
- **字級走 `--fs` 倍率**：內容區的 `font-size` 一律寫 `calc(Npx * var(--fs))`（header/nav 除外）。
- **長篇文字欄寬**：課文 `.para` 已有 `max-width:var(--read-w)`（720px），新增的散文區塊也要套用，避免一行破百字元。

## 注意事項

- 一次貼上的內容不要過大（建議單次一份課堂筆記或一個補充章節），避免渲染/複製失敗
- 若文件本身是全新空白 Google 文件，第一次貼上會自動套用 Google Docs 預設樣式，標題層級（h1/h2/h3）會對應 Google 文件的標題樣式
- 特殊字元（`&`, `<`, `>`）在 HTML 內容中要用 entity（`&amp;`, `&lt;`, `&gt;`），IPA 音標符號可直接用 Unicode
- 整個流程使用者 0 個動作；若 Chrome MCP 不可用，退回「流程 A（舊版）：HTML 上傳 + 另存為」（見 `feedback_google_doc_format.md`）
- **貼上後若表格欄位逐字換行，參考上方「修復『貼上後表格內文字逐字換行』問題」章節**
