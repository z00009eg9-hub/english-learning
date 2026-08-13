---
name: english-learning
description: 英文課堂筆記的完整自動化工作流程 — 自動建立當天日期資料夾、把課堂筆記寫入 Google 文件（新建或更新，含橘色表頭表格、★作業複習範本、文法解說格式）、把筆記重點同步進互動學習網頁 index.html、以及為當天筆記自動生成考題並同步到 index.html 的「每日測驗」分頁（含成績記錄），推送到 GitHub，最後部署到 Firebase 線上網站（https://learning-english-notes.web.app）。當使用者貼上課堂對話/錄音逐字稿/筆記文字、要求把補充教材加入某份 Google 文件、要求「同步筆記」、要求「出考題/生成考題/更新測驗」、或要求「部署網站/更新線上網站/deploy」時使用。
---

# 英文學習筆記工作流程（零步驟自動化）

## 適用情境

1. 使用者貼上課堂對話/錄音逐字稿/筆記文字 → 自動建立當天日期資料夾 + 產出**全新**格式化 Google 文件
2. 使用者要把補充內容（額外單字、句型、文法解說、比較表等）**加入「現有」**的 Google 文件
3. 使用者說「同步筆記」或執行 `/sync-notes` → 把 Drive 上新筆記的重點同步進 `index.html`（互動學習網頁）並推送到 GitHub

情境 1、2 用同一套核心技術：**在 Chrome 渲染 HTML → 全選複製（保留格式）→ 透過 Edit 選單貼到 Google 文件**。
此方法已於 2026-06-10 驗證成功，橘色表頭、灰白交錯列、⭐ B2 標記、文法解說區塊格式完整保留。
⚠ 2026-06-19 確認：`computer key ctrl+v` 在 Google Docs 無效（isTrusted:false），**必須用 Edit 選單 → 貼上的滑鼠點擊方式**（詳見「核心技術」章節）。

---

## 流程 0：自動建立/尋找當天日期資料夾（2026-06-11 新增）

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

- 單字表格固定 5 欄：單字｜音標｜詞性｜中文意思｜例句
- B1 以上單字、句型、片語**全部收錄**，不省略
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

在執行「核心技術：渲染並貼上」之前，**先針對本次新增的所有「文法解說」內容自我檢查一遍**，確認：
1. 文法規則描述正確（例如被動語態結構、不定詞用法、時態規則等，不能有錯誤的文法說明）
2. 中文解析語句通順、用詞精準，沒有翻譯腔或語意錯誤
3. `<span class="kw">` 標記的範圍正確涵蓋該句真正的文法重點，且沒有過度標記或遺漏核心重點
4. 例句與解說內容一致（解說中提到的單字/片語確實出現在原句中）

確認無誤後才進行渲染貼上；若發現問題，先修正內容再產出，**不要**把有疑慮的文法解說直接貼到 Google 文件。

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

## 流程 A0：⭐ 建立格式版 Google 文件的首選做法 —— HTML 直接上傳（2026-08-13 確立）

**不要再用「Apps Script + base64 分塊貼進編輯器」或「Chrome 渲染後複製貼上」產生新文件。**
改用 Drive MCP `create_file` + `contentMimeType: "text/html"`，Drive 會直接把 HTML 轉成 Google 文件，
一次呼叫完成、**中文與符號不會變亂碼**（base64 那條路產生過「顣客」「徝錯誤中」這類壞字）。

```
create_file(
  title: "YYYYMMDD-主題【格式版】Topic",
  parentId: <流程 0 取得的資料夾 ID>,
  contentMimeType: "text/html",
  textContent: <完整 HTML>
)
```

**HTML 轉檔後會正確保留**（已實測）：
- 橘色 section bar：單格 `<table>` + `background-color:#FFA726`
- 黃色 callout：`<table>` 每列 `background-color:#FFFDE7` + `border-left:6px solid #FFD54F`
- **紅字／藍字**：`❌ 原句` 用 `color:#C0392B`、`✅ 訂正` 用 `color:#1155CC`
- **表格只有標題列粗體**：`<th>` 粗體、`<td>` 明確寫 `font-weight:normal`
- `<h1>/<h3>` 階層、⭐ ⚠ ❌ ✅ 等符號

**⚠ 比照 20260811 的實際樣式規格（2026-08-13 使用者驗收通過的版本）：**
- 字體一律 `'Google Sans'`；H1 20pt／橘色 bar 15pt／小標題 14pt／內文與表格 13pt
- callout 用**兩欄表格**：第一欄 `width:14px` 背景 `#FFD54F`（黃色粗直條），第二欄 `#FFFDE7`。
  ⚠ 不要用 `border-left`，那條會太細，跟 20260811 不一樣
- callout 內文字顏色：標籤（原句／訂正／中文／結構／文法解說）**粗體黑字**；
  **訂正句本身是黑字，只有被修正的那幾個字用紅色斜體**（`#C0392B` + italic）——整句藍色是錯的；
  **`結構：` 後面的句型才用藍色粗體**（`#1155CC`）
- 每題開頭放 `🔬 文法解說：`（emoji 轉檔後正常顯示）
- 橘色 bar 的文字要**靠左**、且**垂直置中**（`cell.setVerticalAlignment(CENTER)` + 段落 `setAlignment(LEFT)`），
  預設的置中＋靠上看起來會偏高
- **每個橘色 bar 標頭都要自己起新的一頁**（在 bar 表格前 `body.insertParagraph(i,"").appendPageBreak()`），
  不要和上一節內容擠在同一頁

**⚠ HTML 轉檔後字型會掉回 Arial**：`<style>` 裡的 `font-family` 只有部分生效，**表格儲存格幾乎一定變 Arial**。
轉檔後一定要用 Apps Script 走訪所有段落與表格儲存格 `editAsText().setFontFamily("Google Sans")` 補上，
再用 Docs 工具列確認游標在表格內時顯示的是 Google Sans 而不是 Arial。

**⚠ 表格欄寬一定要指定，否則會被壓扁**：HTML 的 `<colgroup>` 不一定生效，最保險是轉檔後用 Apps Script
`table.setColumnWidth(j, pt)` 依欄數套用（版面寬 468pt）：5 欄 `[78,104,38,78,170]`、4 欄 `[110,150,60,148]`、
3 欄 `[112,100,256]`、2 欄 `[130,338]`。判斷「這是資料表格而非 callout」用第一列第一格背景 `#ffe0b2`。
沒調欄寬時「例句」欄會窄到每個英文字一行，整份文件會從 8 頁暴增到 29 頁。

**轉檔做不到、要另外處理的兩件事：**

1. **頁碼** —— 在 Google 文件 UI：`插入 → 頁面元素 → 頁碼 → 頁尾（從第一頁開始）`
2. **防止表格列跨頁被切成兩半** —— `格式 → 表格` 只有游標在單一表格內才會啟用，無法整份套用。
   要一次處理全部表格，在 Apps Script 專案加入 **服務 → Google Docs API**（這步會順便啟用 GCP 專案的 Docs API），再跑：
   ```js
   function fixOverflow() {
     var D = "<DOC_ID>";
     var doc = Docs.Documents.get(D); var r = [];
     doc.body.content.forEach(function (e) {
       if (e.table) r.push({ updateTableRowStyle: { tableStartLocation: { index: e.startIndex },
         tableRowStyle: { preventOverflow: true }, fields: "preventOverflow" } });
     });
     if (r.length) Docs.Documents.batchUpdate({ requests: r }, D);
     Logger.log("tables=" + r.length);
   }
   ```
   ⚠ 不要改用 `UrlFetchApp` 打 Docs REST API —— 沒加進階服務的話 GCP 專案沒啟用 Docs API，會回 403 `SERVICE_DISABLED`。

**其他注意事項：**
- `create_file` 只能新建、不能覆寫既有文件；Drive MCP 也沒有刪除工具。要取代舊檔就在 Docs UI 改名／到 Drive 丟垃圾桶（**先問使用者**）。
- 閱讀文章 Reading Article 與理解問題 Comprehension Questions **一律用段落式 `<p>`，不要用表格**（2026-08-13 使用者指定）。
- 各大章節之間加 `page-break-before:always`，避免資料溢到下一頁。
- Chrome MCP 操作 Docs 選單時，座標點擊會偏掉（截圖寬度 ≠ CSS 寬度，比例約 1.21）。**一律用 `find` 取 ref 再 `left_click`／`hover`**；選單開著時 `screenshot` 會 timeout，改用 `javascript_tool` 列出 `.goog-menuitem` 文字確認。

---

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
6. 執行下方「核心技術：渲染並貼上」，目標分頁為這份新文件
7. **接著執行「流程 F」** 為當天筆記生成考題並同步到 quiz-data.js + 推 GitHub
8. 完成後回報 Google 文件連結 + 教材摘要（幾個單字、幾個句型等）+ 已出幾題考題

## 流程 B：新增內容到現有 Google 文件

1. 用 `search_files` 或使用者提供的連結/ID 找到目標 Google 文件
2. 用 `read_file_content` 讀取現有內容，避免重複收錄相同單字/句型
3. 生成「新增段落」HTML（同樣套用上方 CSS），章節編號接續現有文件（例如現有到 VI，新增從 VII 開始）
4. 執行下方「核心技術：渲染並貼上」，**貼上前先 `ctrl+End` 移到文件最末**
5. 完成後回報新增了哪些章節/內容摘要

## 流程 C：同步筆記到 index.html + 推送 GitHub（2026-06-11 整合自 /sync-notes）

當使用者說「同步筆記」、「同步進網頁」或執行 `/sync-notes` 時觸發。

### Step 1 — 讀取同步狀態
讀取記憶檔案 `C:\Users\anita.chen\.claude\projects\G-------------\memory\sync_state.md`，
取得 `last_sync_date`、`processed_file_ids`、`html_file`（目前固定為 `G:\我的雲端硬碟\英文筆記\index.html`）。

### Step 2 — 搜尋新筆記
用 `search_files` 搜尋：
```
mimeType = 'application/vnd.google-apps.document' and modifiedTime > 'LAST_SYNC_DATE'
```
排除 `processed_file_ids` 中已處理的檔案 ID。

### Step 3 — 讀取並提取內容
對每個新檔案用 `read_file_content` 讀取，提取以下資料：

**A. 單字（vocab）**：從詞彙表格提取，格式：
```javascript
{w:"word", ipa:"/aɪpɑː/", pos:"adj.", cn:"中文", def:"一句英文定義", exEn:"Example sentence.", exCn:"例句中文翻譯。", cat:"CATEGORY"}
```
- `cat` 從 `"learning"` / `"food"` / `"workplace"` / `"health"` / `"daily"` 選擇
- 避免與 `===SYNC:VOCAB_START===` 到 `===SYNC:VOCAB_END===` 之間的現有單字重複

**B. 翻譯句（allTrans）**：從雙語對照句子提取：
```javascript
// cn-en 方向
{p:"中文句子", a:"English answer.", h:"keyword1, keyword2", kw:["keyword1"]}
// en-cn 方向
{p:"English sentence.", a:"中文翻譯。", h:"key = 意思", kw:[]}
```
- 避免與 `===SYNC:TRANS_CNEN_START===` / `===SYNC:TRANS_ENCN_START===` 之間的現有句子重複

**C. 造句關鍵字（allKW）**：找有 3 個以上例句的重要單字：
```javascript
{w:"word", ipa:"/aɪpɑː/", tag:"中文意思 · pos.", exs:[
  {en:"Example 1.", cn:"翻譯1。"},
  {en:"Example 2.", cn:"翻譯2。"},
  {en:"Example 3.", cn:"翻譯3。"},
]}
```
- 避免與 `===SYNC:KW_START===` 到 `===SYNC:KW_END===` 之間的現有關鍵字重複

**D. 閱讀文章（articles）**：若一堂課有至少 3 個段落、有中英對照，提取為文章物件：
```javascript
{
  title:"Article Title",
  titleCn:"文章中文標題",
  source:"Based on YYYYMMDD lesson notes",
  highlightWords:["word1","word2"],
  paras:[
    {en:"English paragraph with <span class='hl' onclick='speakText(\"word\")'>word</span> highlights.",
     cn:"中文翻譯。"},
  ],
  questions:[
    {q:"Comprehension question?",
     opts:["A","B","C","D"],
     ans:0,
     expl:"解析說明"},
  ]
}
```
- 最多新增 2 篇文章，避免超過 8 篇

### Step 4 — 更新 index.html
用 **Edit 工具**在每個 `===SYNC:*_START===` 標記後插入新項目，並更新標記中的 `sync_date` 和 `count`：
- `// ===SYNC:VOCAB_START=== sync_date:YYYY-MM-DD count:N`

> ⚠ **同時更新 SOURCES 區塊（2026-07-30 起，口說活動需要）**：新增 VOCAB 的每個單字，也要在 `// ===SYNC:SOURCES_START===`（`const vocabSources`）加一筆 `"word":"YYYYMMDD 主題"`，讓「🗣️ 單字口說 / 💬 情境開講」能精準把單字對應到日期。
> （若漏掉，新版 `dayVocab()` 有 fallback 會用「該天翻譯句裡出現的單字」補，但會不完整——最好還是補上 SOURCES。）

### Step 5 — 推送到 GitHub
1. `git add index.html`
2. `git commit -m "Sync English learning notes up to YYYYMMDD (主題)"` + `Co-Authored-By` trailer
3. `git push origin main`

### Step 5.5 — 部署到 Firebase Hosting（更新線上網站）
push GitHub 後，**接著執行「流程 G」** 把最新 `index.html` 部署上線：
```bash
cd "G:/我的雲端硬碟/英文筆記" && cp index.html public/index.html && firebase deploy --only hosting
```
線上網址 https://learning-english-notes.web.app 隨即更新（詳見下方「流程 G」）。

### Step 6 — 更新同步狀態記憶
更新 `sync_state.md`：
- `last_sync_date`：今天的日期
- `processed_file_ids`：加入這次處理的檔案 ID
- 同步摘要段落：簡短說明這次新增了什麼

### 重要規則
1. **不刪除現有內容**，只新增
2. **嚴格避免重複**（以 `w` 或 `p` 欄位去重）
3. 每次同步最多新增 **10 個單字、10 個翻譯、3 個關鍵字**
4. 提取的英文定義（`def`）要用**簡單英文**（B1 程度）
5. 例句來自真實筆記內容，不要捏造

### Step 7 — 若有新課堂筆記，順便產出格式化 Google 文件
如果 Step 2 找到的新筆記是**當天或近期課堂筆記**（非舊筆記補錄），且尚未有對應的【格式版】文件，
依照「流程 A」（含流程 0 自動建立資料夾）為該筆記產出格式化 Google 文件。

### Step 8 — 為新筆記生成考題（流程 F）
若 Step 7 有處理新的課堂筆記，**接著執行「流程 F」**，為該筆記自動出 10–15 題考題，
同步到 `quiz-data.js` 並隨本次 git push 一起推上 GitHub。

### 完成後
告訴使用者：
- 處理了哪些檔案（日期 + 標題）
- 新增了多少單字、翻譯、關鍵字
- 是否有新文章
- 是否產出了格式化 Google 文件（若有，提供連結）
- GitHub 推送結果
- 任何需要人工確認的項目

---

## 流程 F：生成當天考題並同步到 index.html + 推 GitHub（2026-07-27 確立，2026-07-27 併入 index.html）

自動出考題功能。**觸發時機**：
- 建立當天課堂筆記後（流程 A 完成、或流程 C Step 7 產出格式版文件後）**自動接著執行**
- 使用者說「出考題 / 生成考題 / 更新測驗 / 幫我出題」，或針對某一天筆記要求出題

> ⚠ **2026-07-30 index.html 已改版為「Speak Up!」口說優先設計**（暖色調、六大口說活動：說出來/跟讀/單字口說/朗讀/情境開講/快速檢查，用 Web Speech API 麥克風辨識）。
> **但資料層完全沒變**：`const vocab / vocabSources / allTrans / allKW / articles / DAYQUIZ` 與所有 `// ===SYNC:*===` 標記原封不動保留，因此 **流程 C / F 的所有插入步驟不受影響、照舊執行**。
> 差別只在使用者端：考題現在是「📝 快速檢查」活動（不再叫「每日測驗分頁」），成績不再寫 localStorage `el_dq`（口說進度改存 `speakup_v1`）。出題資料格式（DAYQUIZ 的 mc/fill/trans）不變。

### 架構（DAYQUIZ 題庫嵌在 index.html 的 JS 裡）

考題資料嵌在 index.html 的 JS 裡：
- **題庫**：`const DAYQUIZ = { ... }`，含 `// ===SYNC:DAYQUIZ_START/END===` 標記，以日期為 key
- **作答/批改/算分/隨機抽題**：`initDayQuiz / startDayQuiz / dqRender / dqSelect / dqSubmitFill / dqNext / dqFinish`
- **成績記錄**：存在 localStorage `el_dq`（`{ "YYYYMMDD": {attempts,best,total,lastScore,lastPct,ts} }`）；
  下拉選單與「📊 我的成績紀錄」會顯示每天最佳成績與練習次數。**skill 不需碰記錄邏輯，只需維護 DAYQUIZ 資料**。

> 純前端、不需後端、不需 Firebase。獨立的 `quiz.html` / `quiz-data.js` 已於 2026-07-27 廢除併入 index.html，**不要再產生或引用這兩個檔案**。

**兩層題庫（2026-07-27 確立）**：
- **自動題（底層，所有日期）**：`generateAutoQuiz(d)` 依 `vocabSources` 把每個單字對應到來源日期，任何有 ≥4 個單字的筆記日期**自動出現在下拉選單並可出題**（單字中↔英選擇題）。使用者無需 skill 介入即可測驗任何一天。
- **精選題（上層，覆蓋）**：`DAYQUIZ[d]` 若存在則優先使用，下拉選單標 **⭐**。這就是流程 F 產出的手寫題組（含改錯、介系詞、情境等，比自動題更貼近該堂課）。
- 流程 F 的價值＝**把某天從「自動單字題」升級為「⭐ 精選題組」**。因此流程 F 通常只針對**當天新課堂筆記**做，不需回頭補舊日期（舊日期已有自動題可用）。

### 題庫資料結構

`DAYQUIZ` 每一天是一個 key（日期字串），最新日期排最上面：
```javascript
"YYYYMMDD": {
  title: "主題",                          // 與資料夾主題一致（中文）
  subtitle: "English subtitle line",       // 英文副標
  questions: [ /* 題目物件，見下 */ ]
}
```

**題目物件有三型：**

選擇題 `mc`（`answer` 是 0-based 索引）：
```javascript
{ type:"mc", tag:"單字", q:"題幹（可含英文句子與 ___ 空格）",
  options:["選項0","選項1","選項2","選項3"], answer:1,
  explain:"簡短中文解說，最好帶關鍵字或 IPA。" }
```

填空題 `fill`（`answer` 是「可接受答案陣列」）：
```javascript
{ type:"fill", tag:"介系詞", q:"句子含 ___ 表示要填的空格。",
  cn:"中文提示（選用，會顯示在題幹下方灰字）",
  answer:["in","into"],                     // 多種可接受寫法都列上
  explain:"解說。" }
```
- 比對前系統會 normalize：**轉小寫、壓縮空白、去句尾句點/句號**。所以 `"In."`、`" in "` 都能對到 `"in"`。
- 若答案含多個字（如 `at / in`、`to some extent`），把常見寫法變體都放進陣列（`["at / in","at/in"]`）。

翻譯題 `trans`（2026-07-27 新增，`answer` 是單一參考英文句；**自評式**）：
```javascript
{ type:"trans", tag:"翻譯", q:"中文整句（要翻成英文）",
  answer:"Model English sentence.",          // 單一參考答案（字串，非陣列）
  explain:"解說。" }
```
- 作答流程：使用者看中文 → 可選填英文 → 按「看參考答案對照」→ 自評「✅ 我答對了 / ❌ 我答錯了」。整句翻譯難自動精確比對，故用自評。
- 取材：用該堂課的**核心句型或作業訂正後的正確句**，一份題組放 1–2 題即可（放最後面收尾）。

### 🚫 最高原則：內容 100% 來自筆記，禁止 AI 生成（2026-07-27 使用者強調）

**出題、單字、翻譯、造句例句，全部只能逐字取自當天筆記原文；一律不可自行造句、改寫、或用 AI 生成範例。**
- 例句／翻譯句：直接抄筆記裡出現過的句子（含中譯）。筆記沒有的句子就不要放。
- 造句 `exs`：筆記該字有幾個例句就放幾個，**寧可只放 1–2 句，也不要湊數編造**。
- 單字定義 `def`：若筆記有英英解釋就用筆記的；沒有就留簡短中性描述或省略，**不要編情境**。
- 選擇題誘答選項：用筆記中的錯句／對比詞，不要憑空捏造。
- 唯一可自行寫的是：中文 `explain` 解說、`tag` 分類、題幹引導語（如「哪一句正確？」）——這些是「包裝」，不是「教材內容」。
- 若某類內容筆記量不足，就讓該日期該活動**少一點或空著**（前端會顯示提示），這是正確的，不要為了補滿而生成。

### 出題規範（品質把關）

1. **題數依筆記內容而定（約 10–15 題）**，寧缺勿造
2. **內容只能來自當天筆記，嚴禁自行加入筆記沒有的教材**（見上方最高原則 + 呼應 [[feedback_doc_content_rules]]）
3. **涵蓋面**（依當天筆記實際有的內容取用，不足就略過該類）：
   - 單字字義（單字表 → mc）
   - 介系詞 / 固定搭配（wrap in、at...in... → fill）
   - 文法變化（feel like + V-ing、regret + V-ing、時態 → fill/mc）
   - 改錯選正確句（作業複習的錯句 vs 訂正句 → mc，兩個選項一錯一對）
   - 情境問答（機場/職場/口語句型 → mc）
   - ⚠ **不要出「發音 / 語調」類題目**（2026-07-27 使用者指定移除；文字測驗考發音體驗不佳）
4. `tag` 用簡短中文分類：`單字 / 介系詞 / 文法 / 改錯 / 句型 / 機場 / 連接詞` 等（**不含「發音」**）
5. 每題都要 `explain`（簡短中文，幫使用者複習）
6. 改錯題直接用作業複習裡學生的**原錯句**當誘答選項、**訂正句**當正解，最貼近她的實際錯誤

### 同步步驟

1. `Read` 讀取 `index.html`，找到 `const DAYQUIZ = {` 與其下的 `// ===SYNC:DAYQUIZ_START===` 標記
2. 檢查該 `"YYYYMMDD"` key 是否已存在：
   - **已存在** → 若要更新就整組替換該區塊；否則跳過（避免重複）
   - **不存在** → 繼續
3. 用 **Edit 工具**，在 `// ===SYNC:DAYQUIZ_START=== ...` 那一行的**正下方**插入新題組區塊 `"YYYYMMDD": { ... },`（最新在最上面）
4. 同步更新標記行的 `sync_date` 與 `count`：
   `// ===SYNC:DAYQUIZ_START=== sync_date:YYYY-MM-DD count:N`（N = 目前總題組數）
5. 推 GitHub（通常與流程 C 的 index.html 同步一起提交）：
   ```bash
   git add index.html
   git commit -m "Add daily quiz for YYYYMMDD (主題)"   # 附 Co-Authored-By trailer
   git push origin main
   ```
6. **接著執行「流程 G」部署到 Firebase**，讓線上網站 https://learning-english-notes.web.app 同步更新（若本次是併在流程 C 一起跑，流程 C Step 5.5 已部署，這裡就不必重複）：
   ```bash
   cd "G:/我的雲端硬碟/英文筆記" && cp index.html public/index.html && firebase deploy --only hosting
   ```

---

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

### ⭐ 產出前自我檢查

- 每個 `mc` 的 `answer` 索引確實指向正確選項（0-based，別 off-by-one）
- 每個 `fill` 的 `answer` 陣列涵蓋合理寫法變體
- 答案、選項、解說拼字正確，解說與題目一致
- **所有題目都能在當天筆記中找到出處**，沒有自行杜撰
- JS 語法正確（逗號、引號、跳脫）；若題幹含 `"` 用單引號包字串或跳脫

### 完成後回報

- 為哪一天（日期＋主題）新增了幾題、涵蓋哪些類型
- GitHub 推送結果
- 提醒使用者開網站（https://learning-english-notes.web.app）選該日期 →「📝 快速檢查」活動即可作答

---

## 流程 G：部署到 Firebase Hosting（2026-07-30 確立）

**每次 `index.html` 有更新並推上 GitHub 後，接著執行本流程，把最新版同步上線。**
線上網址：**https://learning-english-notes.web.app**（公開、無密碼；Firebase 專案 ID `learning-english-notes`）。

### 觸發時機
- 流程 C（同步筆記）push GitHub 之後
- 流程 F（出考題）push GitHub 之後
- 使用者說「部署網站 / 更新線上網站 / deploy」

### 部署指令（一行完成：複製最新 index.html → 部署）
```bash
cd "G:/我的雲端硬碟/英文筆記" && cp index.html public/index.html && firebase deploy --only hosting
```
- 部署設定檔已存在：`firebase.json`（public 目錄 `public/`、index.html 設 no-cache）、`.firebaserc`（default = `learning-english-notes`）。
- `public/index.html` 只是部署用複本，來源永遠是根目錄的 `index.html`，故每次先 `cp` 覆蓋再 deploy。
- 成功會輸出 `Deploy complete!` 與 `Hosting URL: https://learning-english-notes.web.app`。

### 完成後回報
- 部署結果（成功／失敗）
- 線上網址 https://learning-english-notes.web.app（提醒重新整理即可看到最新內容，因已設 no-cache）

### 常見問題
| 狀況 | 處理 |
|------|------|
| `firebase: command not found` | Firebase CLI 未安裝／不在 PATH，請使用者確認（本機已裝 v15.23.0） |
| `Failed to authenticate` / 要求登入 | 執行 `firebase login`（需使用者互動，不要代填帳密） |
| deploy 卡住或逾時 | 重跑一次指令；網路問題居多 |

---

## 核心技術：渲染並貼上（Chrome MCP）

> 前置：確保 `mcp__Claude_in_Chrome__*` 工具已載入（若是 deferred tool，用 ToolSearch 載入）

> ⚠ **重要：Ctrl+V 在 Google Docs 無效**（2026-06-19 確認）  
> Chrome MCP 的 `computer key ctrl+v` 產生 `isTrusted: false` 鍵盤事件，Google Docs 會忽略。  
> **必須改用「編輯選單 → 貼上」的滑鼠點擊方式**（`isTrusted: true` click 才被接受）。

### 完整步驟

1. `tabs_context_mcp` (`createIfEmpty: true`) 取得分頁群組
2. 確認已有可用分頁（例如 `example.com`），若無則 `tabs_create_mcp` 開一個並 `navigate` 到 `https://example.com`
   - ⚠ 不能用 `about:blank` 或 `data:` URL，會被導覽工具拒絕
3. `javascript_tool`（`action: javascript_exec`）在 example.com 分頁執行：
   ```js
   document.open();
   document.write(`<!DOCTYPE html><html><head><meta charset="UTF-8">
   <style> ...上方 CSS... </style></head>
   <body> ...本次要寫入的 HTML 內容... </body></html>`);
   document.close();
   'rendered OK';
   ```
4. `computer left_click` example.com 頁面任一處（取得焦點，clipboard API 需要 document focused）
5. `computer key ctrl+a`（全選）
6. `computer key ctrl+c`（複製，保留 HTML 格式）
7. 切換到目標 Google 文件分頁（該分頁應已開啟）
8. **游標定位**：`computer left_click` 文件內容最末的**空白區域**（表格下方的空白處）
   - ⚠ **不要點在表格內**：若文件末尾有表格，點擊太靠近表格可能落入儲存格，貼上會插入表格中間
   - 安全做法：點擊比最後一列表格低至少 60–100px 的空白頁面區域
9. 用 JS 確認 Edit 選單按鈕位置：
   ```js
   const r = document.getElementById('docs-edit-menu').getBoundingClientRect();
   `center=(${Math.round(r.x+r.width/2)},${Math.round(r.y+r.height/2)})`;
   ```
10. `computer left_click` Edit 選單（使用上一步查到的座標，通常約 (120, 47)）
11. 選單開啟後，立刻用 JS 查 Paste 項目位置：
    ```js
    const p = document.getElementById(':73').getBoundingClientRect();
    `center=(${Math.round(p.x+p.width/2)},${Math.round(p.y+p.height/2)}), visible=${p.width>0}`;
    ```
    - Paste 項目的 DOM id 固定為 `:73`，通常位於約 (259, 227)
    - ⚠ **截圖在選單開啟時會 timeout**，不要嘗試截圖——直接用 JS 查座標
12. 確認 `visible=true` 後，`computer left_click` 該座標（isTrusted:true 點擊，Google Docs 接受）
13. `wait` 3–4 秒讓貼上完成（大型內容需要稍長時間）
14. 關閉可能出現的 `slidingdialog`（Google Docs 有時會彈出提示框導致截圖 timeout）：
    ```js
    const btn = document.querySelector('.docs-slidingdialog-close, [aria-label="關閉"]');
    if (btn) { btn.click(); 'closed'; } else { 'no dialog'; }
    ```
15. 截圖確認貼上結果，回報 Google 文件連結

### 出錯時的 Undo

若貼上位置錯誤（例如插入到表格中間）：
1. `computer left_click` 文件內容區確保焦點
2. `computer key ctrl+z` （repeat: 10）一次復原所有變更
3. `wait` 2 秒後截圖確認文件已恢復
4. 若出現 slidingdialog 阻擋截圖，先用上方 JS 關閉再截圖

---

## 修復「貼上後表格內文字逐字換行」問題（2026-06-11 確立）

貼到 Google 文件後，若表格儲存格內的文字變成一個字一行（例如英文單字 "shave" 顯示成
"sh"/"a"/"v"/"e" 四行，或片語 "blow off" 只顯示出 "b"），有**兩種獨立成因**，需分別判斷修復：

### 成因 1：段落縮排跑掉（最常見，2026-06-12 已在 20260611 文件 Table V 全部 8 列驗證）

Google Docs 的貼上轉換器，會把表格 `<td>` 內 `<p>` 元素的縮排設成
`左邊=1.27cm`、`特殊縮排=首行凸排=0.63cm`，導致：(a) 文字視覺上偏移、看起來像置中，
且 (b) 窄欄位（尤其中文欄）逐字換行。**這同時是「對齊」與「逐字換行」兩個症狀的共同根因**——
工具列顯示的對齊狀態可能已經是「靠左」，問題其實出在縮排，不是對齊本身。

**修復步驟（以「整列」為單位，一次套用到該列所有欄，不需逐欄重複）：**
1. `left_click_drag` 橫向選取整列：從該列第一欄文字附近拖曳到最後一欄
   （例如從 (600,Y) 拖到 (1040,Y)，Y 為該列文字所在的 y 座標）
   ——選取會橫跨該列所有欄的段落，下一步的縮排設定會**同時套用到全部選中的段落**
2. 格式選單（約 277,53）→ 對齊與縮排（約 333,159）→ 縮排選項（約 681,397）
3. **對話框可能有展開動畫**：剛點開若畫面看起來與表格內容重疊穿透，先 `wait` 1 秒再截圖，
   確認「縮排選項」對話框已穩定，可看到 左邊/右邊/特殊縮排 三個欄位與目前值
   （左邊=1.27、右邊=0、特殊縮排=首行凸排、值=0.63）
4. 點擊「特殊縮排」下拉選單（位於「左邊/右邊」欄位下方，目前顯示「首行凸排」）
5. 下拉選單會展開「無 / 首行 / 首行凸排」三個選項（**無一律是清單第一個、最上面的選項**），
   點選「無」
6. **截圖確認**特殊縮排欄位確實已變成「無」
   - **⚠ 已知 off-by-one 問題**：若截圖顯示變成「首行」而不是「無」，原因通常是
     *截圖尺寸在呼叫之間改變了*（同一份文件曾出現過 1568×617、1568×684、1422×559
     等不同尺寸，對話框座標會隨之偏移 10-70px），導致點擊座標對到了「首行」而非「無」
   - **修法**：直接重新點開「特殊縮排」下拉選單（此時會顯示目前值「首行」），
     先截圖取得這次下拉選單**實際展開後**的座標，「無」永遠在清單最上方，
     用這次截圖讀到的座標點擊「無」，再截圖確認變成「無」
7. 三擊「左邊」數值欄位（與「特殊縮排」下拉選單同一橫排、在縮排公分區的左欄，目前顯示 1.27），
   輸入 `0`
8. 點擊「套用」（此時按鈕應已變為藍色可點擊狀態）
9. 點擊表格外任一處取消選取，截圖確認：該列英文文字各行共用同一左邊界（不再視覺置中），
   中文欄位變成自然多字一行換行（而非逐字一行）

**若儲存格內有多個段落（例如 ① ② 兩段）**：每個段落要**分別**重複上述步驟，
縮排設定是 per-paragraph 的，修好第一段不會自動套用到第二段。

**⚠ 通用提醒：座標會因截圖尺寸變化而偏移**：每次開啟新對話框/下拉選單後，
若打算點擊某個選項，**先用該次最新截圖確認座標**，不要直接沿用前一次（可能是不同尺寸截圖）的座標。

### 成因 2：欄位寬度本身太窄（即使縮排已修好仍逐字換行）

某些欄位（常見於最後一欄「答案」或單字欄）寬度本身就很窄，是貼上時保留了原始 HTML
的 per-cell 寬度。即使套用「成因 1」的縮排修復，仍會逐字換行。

**修復步驟（優先方法，2026-06-12 更新）：**
1. 直接在表格內容區的**欄位邊界線**上用 `left_click_drag` 往右拖曳（例如從某列中間的欄位分隔線拖曳）
   - **不要**用尺規上的欄寬標記（y≈131-148）——這個方法常常失敗（沒反應，或誤觸尺規定位點選單）
   - 直接拖曳表格內的欄位邊界線本身更可靠
2. 拖曳一次即可同時修好該欄所有列的寬度，不需逐列修復
3. 拖曳後點擊表格外任一處取消選取，再截圖確認

**⚠ 連鎖反應（重要）**：表格總寬度固定，加寬某欄一定會從**相鄰欄**扣除寬度。
若被扣到寬度的欄位因此變太窄而逐字換行/文字被裁切，**不要復原**，而是繼續用同樣方法
把寬度從「有餘裕的欄位」（通常是最後一欄「例句」）依序往回補：
- 例：要加寬第 1 欄，但只能從相鄰的第 2 欄扣，導致第 2 欄變窄
  → 再加寬第 2 欄（從第 3 欄扣）→ 再加寬第 3 欄（從第 4 欄扣）→ 再加寬第 4 欄（從第 5 欄扣，第 5 欄通常空間充足）
- 每次拖曳約 15-20px，每步都截圖確認該欄文字是否恢復正常，確認後才進行下一步
- 最終效果：把寬度從「例句」欄一路傳遞到目標欄，中間欄位寬度維持不變

### 判斷是否需要修復

- 英文單字/片語逐字母換行（如 "sh"/"a"/"v"/"e"）→ **一定是 BUG**，需修復
- 中文逐字換行（如 "修剪、"/"修"/"整"）→ 中文沒有空格分詞，這是**正常現象**，
  欄位夠寬時自然會多字一行，不需強行修復
- IPA 音標尾端的 `/` 單獨換行（如 "/trɪm" + "/"）→ 屬於可接受的窄欄位換行，非逐字破裂，不需修復

### ⚠ 絕對禁止：不要對表格文件按 Ctrl+Z

修復過程中若按 Ctrl+Z，會把整個貼上操作復原回最初的單一項目符號破損狀態，
無法局部復原。修錯了就用上述步驟重新修，不要用復原快捷鍵。

---

## 流程 D：修改 Google 文件整體字型與字體大小（2026-06-19 確立）

> ⚠ **嚴禁用工具列 font input 操作**（2026-06-19 確認）  
> Chrome MCP 透過工具列修改字型時，輸入的文字會取代整份文件內容（已連續發生 3 次）。  
> **唯一安全方法：使用 Google Apps Script**。

### 腳本存放位置

本腳本以 container-bound（嵌入式）方式附加在 20260618 天然災害格式版文件上，  
名稱：**20260619-字型格式化腳本-Google-Sans**  
開啟方式：在任一英文筆記 Google 文件中點選 **擴充功能 → Apps Script**，貼入下方腳本即可重複使用。

### 操作步驟

1. 在目標 Google 文件分頁，用 JS 查詢選單座標後點選 **擴充功能**（Extensions，約 354, 47）
2. 鍵盤導覽：**Down × 2 → Enter**（跳過「外掛程式」子選單，直達 Apps Script）
3. Apps Script 編輯器在新分頁開啟後，用 `javascript_tool` 寫入腳本：
   ```javascript
   monaco.editor.getModels()[0].setValue(`...腳本內容...`);
   ```
4. **Ctrl+S** 儲存，確認工具列函式下拉選單顯示正確函式名稱
5. 點擊 **▶ 執行**（座標約 443, 83）
6. 若出現「需要授權」對話框 → 點擊 **審查權限** → 授予存取 Google 文件的權限
7. 等待執行記錄出現「**執行完畢**」（16 頁文件約需 49 秒）
8. 若截圖 timeout → 先用 JS `document.querySelector('[aria-label="關閉"]')?.click()` 關閉彈出框

### 標準字型格式化腳本（Google Sans + 階層字級）

```javascript
function changeFontToGoogleSans() {
  var doc = DocumentApp.getActiveDocument();
  var body = doc.getBody();

  // 全文改為 Google Sans 13pt
  body.editAsText().setFontFamily('Google Sans').setFontSize(13);

  // 依標題層級覆蓋字級
  var n = body.getNumChildren();
  for (var i = 0; i < n; i++) {
    var child = body.getChild(i);
    if (child.getType() === DocumentApp.ElementType.PARAGRAPH) {
      var heading = child.asParagraph().getHeading();
      if (heading === DocumentApp.ParagraphHeading.HEADING1)
        child.asParagraph().editAsText().setFontSize(20);
      else if (heading === DocumentApp.ParagraphHeading.HEADING2)
        child.asParagraph().editAsText().setFontSize(16);
      else if (heading === DocumentApp.ParagraphHeading.HEADING3)
        child.asParagraph().editAsText().setFontSize(14);
    }
  }
}
```

**字級規則**：一般文字 13pt ｜ H3 14pt ｜ H2 16pt ｜ H1 20pt

### 重要注意事項

- 執行前確認文件內容正確，字型修改後 Ctrl+Z 可逐步復原，但步驟較多
- 以「一般文字」樣式貼入的段落（非 Google Docs 標題樣式）大小固定為 13pt，不受標題覆蓋影響
- 執行約 3 秒/頁；16 頁約 49 秒，耐心等待執行記錄出現「執行完畢」再關閉
- 若出現紅色錯誤（授權問題），重新點擊「▶ 執行」再授權即可

---

## 流程 E：使用 Apps Script DocumentApp 直接寫入 Google 文件（2026-06-24 確立）

> **適用情境**：需要把大量結構化內容（多節、含表格、含彩色格式）寫入**現有**空白 Google 文件，  
> 且以下方法均無法使用時：  
> ‣ 流程 A/B（Chrome 剪貼簿）→ 失敗原因：Google Docs 分頁無 OS 焦點，`navigator.clipboard.readText()` 回傳 "Document is not focused"，貼上靜默失敗  
> ‣ `UrlFetchApp.fetch()` 呼叫 Drive REST API PATCH → 失敗原因：GCP 專案未啟用 Drive API（需 GCP Console 設定，不適合快速執行）  
> ‣ Drive MCP `update_file` → 此工具不存在（只有 `create_file`）

**核心方案**：用 `DocumentApp`（Apps Script 內建服務，永遠可用，不需啟用任何外部 API）直接操作文件。

---

### Step 0 — 準備：建立空白 Google 文件

用 Drive MCP `create_file`（只傳 `title` + `mimeType`，**不傳 content**）：
```
title: "YYYYMMDD-主題【完整版】"
mimeType: "application/vnd.google-apps.document"
parentId: 資料夾 ID（選用）
```
取得回傳的 `id`，組出編輯網址 `https://docs.google.com/document/d/FILE_ID/edit`。

---

### Step 1 — 開啟 Apps Script 編輯器

**本次已建立的可重複使用專案（直接開啟，不需重新建立）：**

| 項目 | 內容 |
|------|------|
| 專案名稱 | 英文課堂筆記-DocumentApp寫入腳本 |
| 專案 ID | `1jdF3o4p3ak0hCG-dQ_fuU7UldMxJJw8uV3JqcVjajpVBQigdZR9Lhkhv` |
| 編輯器 URL | `https://script.google.com/u/0/home/projects/1jdF3o4p3ak0hCG-dQ_fuU7UldMxJJw8uV3JqcVjajpVBQigdZR9Lhkhv/edit` |

**使用方式**：直接導覽至上方 URL → 修改 `writeToDoc()` 內的 FILE_ID 與內容 → Ctrl+S → ▶ 執行。  
不需重新建立專案，授權已通過，下次執行不會再要求授權（除非新增 oauthScopes）。

若需為其他 Google 文件建立**全新**專案：在任意 Google 文件中點選「擴充功能 → Apps Script」，  
或直接導覽至 `https://script.google.com/`。

---

### Step 2 — 透過 Monaco 寫入腳本（不手動輸入）

用 `javascript_tool`（`action: javascript_exec`）直接替換編輯器內容：

```javascript
var models = monaco.editor.getModels();
// 找到程式碼.gs 的 model（通常是 model/2，appsscript.json 是 model/5）
var codeModel = models.find(function(m) {
  return m.uri.toString().includes('model/2');
}) || models[0];
codeModel.setValue(`...完整腳本內容...`);
```

儲存：`computer key ctrl+s`（等標題列出現「已儲存到雲端硬碟」）。

#### ⚠ Step 2 進階：大型腳本用「chunk base64」傳輸（2026-07-14 確立，強烈建議）

直接把整段 .gs 貼進 `setValue(\`...\`)` 有兩個雷，**腳本一旦超過 ~8KB 或含中文換行就會踩到**：
1. **template literal 換行問題**：.gs 字串內若有 `\n`（例如儲存格內換行），包在反引號裡會被解讀成真正換行，導致 .gs 出現「未結束字串」語法錯誤。→ 解法：程式內改用 `var NL = String.fromCharCode(10);`，需要換行處寫 `"...第一行" + NL + "第二行..."`，全檔**不要出現任何 `\n`**。
2. **傳輸中被截斷／混入空白**：我自己重打 20KB+ base64 容易插入空格或被 Read 工具截斷。

> ⚠ **腳本檔要存進「流程 0 建立的那個含主題後綴資料夾」，不要存進裸日期資料夾**（2026-07-16 確立）
> `英文筆記` 是 Google Drive 桌面同步夾。若流程 0 建立的 Drive 資料夾是 `YYYYMMDD-主題`（含後綴），
> 但你把本機 .gs 存到 `G:\...\英文筆記\YYYYMMDD\`（裸日期），這個本機新資料夾會被 Drive 同步**上傳成第二個看起來重複的資料夾**。
> → 一律把 .gs 存到與 Drive 完全同名的資料夾：`G:\...\英文筆記\YYYYMMDD-主題\file.gs`。
> （若當天筆記夾本來就是裸日期就沒問題；問題只發生在名稱不一致時。）產出後也不要另建暫存資料夾放 chunk 檔——用 scratchpad 或事後 `rm` 清掉。

**穩健作法（實測成功）**：
1. 本機把 .gs 寫成檔案（Write 工具，存進上述同名資料夾），再 `base64 -w0 file.gs > b64.txt`
2. 用 Python 把 base64 切成 chunk 檔。⚠ **chunk 別開太大**：2026-07-16 實測 6500 字元/塊時，MCP 傳輸會**固定掉幾個字元**（每塊少 5 個，base64 對齊被破壞、解碼失敗且難察覺）。**改用 1000 字元/塊 + 每塊 append 後核對 `window.__b64.length` 是否等於預期累計長度**，短了就 `substring` 截回上一個累計長度重貼該塊，直到吻合；如此可 100% 無損：
   ```python
   s=open('b64.txt').read().strip(); n=1000
   cum=0
   for i,p in enumerate([s[j:j+n] for j in range(0,len(s),n)]):
       open('p_%02d.txt'%i,'w').write(p); cum+=len(p)
       print('p_%02d len=%d cum=%d'%(i,len(p),cum))   # cum 當作每塊 append 後的驗證目標
   ```
3. **先導覽到 Apps Script 分頁**（`window.__b64` 只存在該分頁；不要在 Google Docs 分頁設）。用 `javascript_tool` 逐塊組裝：
   - 第一塊：`window.__b64 = "<chunk0>"; window.__b64.length;`
   - 其餘塊：`window.__b64 += "<chunkN>"; window.__b64.length;`（每次回傳長度，最後一塊長度應等於 `wc -c` 的 base64 檔大小，逐塊核對）
4. 全部組完後**一次解碼並寫入 Monaco**（UTF-8 安全 + 去空白防呆）：
   ```javascript
   var code=new TextDecoder().decode(
     Uint8Array.from(atob(window.__b64.replace(/\s/g,'')), function(c){return c.charCodeAt(0);}));
   var m=monaco.editor.getModels().find(function(x){return x.uri.toString().indexOf('model/2')>=0;});
   m.setValue(code);
   var v=m.getValue();
   'len='+v.length+' | startFn='+v.indexOf('function 你的函式名')+' | endsOk='+(v.indexOf('你的結尾字串')>0);
   ```
   - `.replace(/\s/g,'')` 是防呆：就算 base64 混入空格/換行，atob 前先清掉。
   - 回傳的 `startFn=0` 且 `endsOk=true` 代表整段完整無損。
   - ⚠ 若最後回傳字串含看似 cookie/query 的片段，MCP 會顯示「[BLOCKED: Cookie/query string data]」，改回傳 `len` / `indexOf` 布林值即可，別回傳程式碼原文。
5. 之後照 Step 4 存檔 → 執行。

> 情境：本次同一份文件連續改版（表格版 → 段落版 → 照片卡片版），每次都用新函式名（`writeToDocV2`/`V3`），全檔重寫（`body.clear()` 開頭）最可靠——比「只改某一段」好維護。函式下拉選單會自動切到新函式名。

---

### Step 3 — 設定 OAuth 授權範圍（appsscript.json）

首次執行前需在「專案設定」啟用 manifest 顯示，並加入 `oauthScopes`：

1. 點左側齒輪「**專案設定**」→ 勾選「在編輯器中顯示 `appsscript.json` 資訊清單檔案」
2. 回到編輯器，點 `appsscript.json`，用 Monaco 替換內容：
   ```javascript
   var manifestModel = models.find(function(m) {
     return m.uri.toString().includes('model/5'); // 或 includes('appsscript')
   });
   manifestModel.setValue(JSON.stringify({
     "timeZone": "Asia/Taipei",
     "dependencies": {},
     "exceptionLogging": "STACKDRIVER",
     "runtimeVersion": "V8",
     "oauthScopes": [
       "https://www.googleapis.com/auth/documents",
       "https://www.googleapis.com/auth/script.external_request"
     ]
   }, null, 2));
   ```
3. Ctrl+S 儲存

---

### Step 4 — 執行腳本

1. 切回 `程式碼.gs`，確認函式下拉選單顯示正確函式名稱
2. 點擊 **▶ 執行**
3. 若出現「需要授權 → 審查權限」對話框：點擊「審查權限」，在彈出的瀏覽器視窗完成 Google 帳號授權  
   ⚠ 授權完成後**務必再次點「▶ 執行」**，第一次點擊只觸發授權流程，不會真正執行腳本
4. 執行記錄出現 `Done!` + `執行完畢` → 成功

---

### Step 5 — 標準腳本結構（「照片格式」版）

符合教材風格（橘色區塊標題、callout 卡片、橘色表頭）的標準腳本範本：

```javascript
function writeToDoc() {
  var doc = DocumentApp.openById("FILE_ID");
  var body = doc.getBody();
  body.clear();

  // ── 顏色常數 ──
  var ORANGE  = "#FFA726";   // 章節標題底色（amber）
  var HDR_ROW = "#FFE0B2";   // 表格標題列底色（淺橘）
  var STRIP   = "#FFD54F";   // callout 左條（黃）
  var CALLOUT = "#FFFDE7";   // callout 主體底色（極淡黃）
  var F       = "Google Sans";

  // ── 輔助函式 ──

  // 章節標題：全寬橘色底色區塊（取代 H2）
  function secHeader(title) {
    var t = body.appendTable([[title]]);
    t.setBorderWidth(0);
    var cell = t.getRow(0).getCell(0);
    cell.setBackgroundColor(ORANGE);
    cell.editAsText().setFontFamily(F).setFontSize(15).setBold(true);
  }

  // H3 子標題（純文字，HEADING3 樣式）
  function h3(text) {
    var p = body.appendParagraph(text);
    p.setHeading(DocumentApp.ParagraphHeading.HEADING3);
    p.editAsText().setFontFamily(F).setFontSize(14).setBold(false);
  }

  // Callout 卡片：左黃條 + 淡黃底（陣列，每個元素一行）
  function callout(lines) {
    var rows = lines.map(function(l) { return ["", l]; });
    var t = body.appendTable(rows);
    t.setBorderWidth(0);
    try { t.setColumnWidth(0, 10); } catch(e) {}  // 左條寬 10pt
    for (var r = 0; r < t.getNumRows(); r++) {
      t.getRow(r).getCell(0).setBackgroundColor(STRIP);
      var c1 = t.getRow(r).getCell(1);
      c1.setBackgroundColor(CALLOUT);
      c1.editAsText().setFontFamily(F).setFontSize(13);
    }
  }

  // 資料表格：第一列橘色標題 + 其餘 Google Sans 13pt
  function styledTable(rows) {
    var t = body.appendTable(rows);
    for (var c = 0; c < t.getRow(0).getNumCells(); c++) {
      t.getRow(0).getCell(c).setBackgroundColor(HDR_ROW);
      t.getRow(0).getCell(c).editAsText().setFontFamily(F).setFontSize(13).setBold(true);
    }
    for (var r = 1; r < t.getNumRows(); r++)
      for (var c = 0; c < t.getRow(r).getNumCells(); c++)
        t.getRow(r).getCell(c).editAsText().setFontFamily(F).setFontSize(13);
  }

  // 普通段落
  function para(text, size, bold) {
    var p = body.appendParagraph(text);
    var e = p.editAsText().setFontFamily(F).setFontSize(size || 13);
    if (bold) e.setBold(true);
    return p;
  }

  // ── 文件標題 ──
  var title = body.appendParagraph("YYYYMMDD 主題");
  title.setHeading(DocumentApp.ParagraphHeading.HEADING1);
  title.editAsText().setFontFamily(F).setFontSize(20).setBold(true);
  para("副標題 / Topics");

  // ── 各章節 ──
  secHeader("I. 章節標題");
  h3("A. 子標題");
  callout([
    "📌 說明文字第一行",
    "• 重點一",
    "• 重點二",
  ]);
  styledTable([
    ["欄位A","欄位B","欄位C"],
    ["內容","內容","內容"],
  ]);

  doc.saveAndClose();
  Logger.log("Done!");
}
```

---

### 閱讀文章 & 理解問題格式（2026-06-24 確立）

包含閱讀文章的筆記，在 `secHeader("IV. 閱讀文章 Reading Article")` 之後使用以下格式：

```javascript
// 文章標題（雙語）
para("Article Title in English", 14, true);
para("中文標題", 13, false);

// 雙欄對照表（英文 | 中文）
styledTable([
  ["英文原文 English", "中文翻譯 Chinese"],
  ["English paragraph 1.", "中文翻譯第一段。"],
  ["English paragraph 2.", "中文翻譯第二段。"],
]);

// 理解問題：MCQ 5欄格式（閱讀SKILL原則）
h3("📝 理解問題 Comprehension Questions（選擇題）");
styledTable([
  ["#", "問題 / 中文", "選項 Options", "正確答案 / 中文", "解析 Explanation"],
  ["1",
   "Question in English? / 中文問題？",
   "A. option  B. option  C. option  D. option",
   "B. Correct answer. / 中文正確答案。",
   "Explanation. / 中文解析。"
  ],
]);
```

**單字例句格式**：英文例句與中文翻譯放同一儲存格，用 ` / ` 分隔（**不用 `\\n`**，避免 template literal 換行解析問題）：
```javascript
["word ⭐", "/ˈaɪpɑː/", "n.", "中文意思", "English example sentence. / 中文翻譯。"]
```

**腳本參考檔案**：`G:\我的雲端硬碟\英文筆記\20260624\writeToDoc.gs`（完整的20260624課堂筆記腳本，含文法/片語/閱讀/MCQ/單字/複習六大章節）

---

### ★ 作業複習「照片卡片格式」（2026-07-14 確立，使用者指定樣式）

作業複習 Homework Review 一律用**每題一張黃色 callout 卡片**呈現（不用表格、不用純段落）。  
版面：**第 N 題**（粗體標題）在卡片上方，下方接黃色左邊條 + 淡黃底卡片，卡片內每行一個標籤，標籤粗體、**被訂正的字用紅色斜體**。

卡片行順序：
- 有訂正的題目：`❌ 原句：` → `✅ 訂正：`（訂正字紅斜體）→ `中文：` → `結構：` → `🔬 文法解說：`
- 文法正確的題目：`✅ 原句：` → `中文：` → `結構：` → `🔬 文法解說：`（不放訂正行）

DocumentApp helper（每張卡是一個 2 欄無框表格：左黃條 10pt + 內容欄；用 `editAsText().setBold(0, label.length-1, true)` 粗體化標籤，用 `setItalic` + `setForegroundColor(idx, idx+len-1, "#C0392B")` 標紅斜體被改的字）：

```javascript
var STRIP="#FFD54F", CALLOUT="#FFFDE7", REDW="#C0392B", F="Google Sans";
// hwCard(題號, 錯句|null, 正確句, 訂正字|null, 中文, 結構, 文法解說)
function hwCard(num, wrong, right, correctedWord, cn, structure, expl) {
  var hp = body.appendParagraph("第 " + num + " 題");
  hp.editAsText().setFontFamily(F).setFontSize(14).setBold(true);
  var lines = [];
  if (wrong) { lines.push(["❌ 原句：", wrong, null]); lines.push(["✅ 訂正：", right, correctedWord]); }
  else       { lines.push(["✅ 原句：", right, null]); }
  lines.push(["中文：", cn, null]);
  lines.push(["結構：", structure, null]);
  lines.push(["🔬 文法解說：", expl, null]);
  var t = body.appendTable(lines.map(function(){ return ["", ""]; }));
  t.setBorderWidth(0);
  try { t.setColumnWidth(0, 10); } catch(e) {}
  for (var r = 0; r < lines.length; r++) {
    t.getRow(r).getCell(0).setBackgroundColor(STRIP);
    var cell = t.getRow(r).getCell(1); cell.setBackgroundColor(CALLOUT);
    var label = lines[r][0], text = lines[r][1], iw = lines[r][2];
    var full = label + text, e = cell.editAsText();
    e.setText(full); e.setFontFamily(F).setFontSize(13); e.setBold(false);
    e.setBold(0, label.length - 1, true);
    if (iw) { var idx = full.indexOf(iw, label.length);
      if (idx >= 0) { e.setItalic(idx, idx+iw.length-1, true); e.setForegroundColor(idx, idx+iw.length-1, REDW); } }
  }
  body.appendParagraph("").editAsText().setFontSize(6); // spacer
}
```

呼叫範例：
```javascript
hwCard("2",
  "When I arrived at the airplane, I put my carry-on bag in the overhead bin on my seat.",
  "When I boarded the plane, I put my carry-on bag in the overhead bin above my seat.",
  "boarded", "當我登機時，我把隨身行李放進座位上方的頭頂置物櫃。",
  "When + 主詞 + 過去式, 主詞 + 過去式",
  "登機要用動詞 board，不說 arrive at the airplane；置物櫃在座位「上方」用 above，不是 on。");
hwCard("1", null, "I put my bags on a trolley at the airport.", null,
  "我把行李放在機場的行李推車上。", "put + 受詞 + on + 地點",
  "這句文法正確。trolley 是機場的行李手推車；「放在推車上」用介系詞 on。");
```

**完整參考腳本**：`G:\我的雲端硬碟\英文筆記\20260714\writeToDocV3.gs`（照片卡片格式作業複習 + 6 大章節）。  
歷程：同一份文件曾用表格版 → 段落版（V2）→ 照片卡片版（V3），使用者最終選定照片卡片版。

---

### 常見錯誤與解法

| 錯誤 | 原因 | 解法 |
|------|------|------|
| 「需要授權」→ 警告「重試，允許存取」 | 授權 popup 被 Chrome 封鎖或流程未完成 | 再次點「▶ 執行」→ 重新走授權流程 |
| 403 `Insufficient Permission` | `appsscript.json` 缺少 `oauthScopes`，或授權時未核准 | 加入 Step 3 的 oauthScopes，重新授權 |
| 403 `Drive API has not been used` | 腳本用了 `UrlFetchApp` 呼叫 Drive REST API | 改用 `DocumentApp`（內建，不需啟用 Drive API） |
| `monaco.editor.getModels()` 找不到正確 model | model 編號因分頁重新載入而改變 | 用 `models.find(m => m.uri.includes('appsscript'))` 動態尋找 |
| 執行後 Google 文件沒有更新 | `openById` 用了錯誤的 FILE_ID | 確認 FILE_ID 與 Google 文件 URL 一致 |

---

## 注意事項

- 一次貼上的內容不要過大（建議單次一份課堂筆記或一個補充章節），避免渲染/複製失敗
- 若文件本身是全新空白 Google 文件，第一次貼上會自動套用 Google Docs 預設樣式，標題層級（h1/h2/h3）會對應 Google 文件的標題樣式
- 特殊字元（`&`, `<`, `>`）在 HTML 內容中要用 entity（`&amp;`, `&lt;`, `&gt;`），IPA 音標符號可直接用 Unicode
- 整個流程使用者 0 個動作；若 Chrome MCP 不可用，退回「流程 A（舊版）：HTML 上傳 + 另存為」（見 `feedback_google_doc_format.md`）
- **貼上後若表格欄位逐字換行，參考上方「修復『貼上後表格內文字逐字換行』問題」章節**
