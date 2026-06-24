---
name: english-learning
description: 英文課堂筆記的完整自動化工作流程 — 自動建立當天日期資料夾、把課堂筆記寫入 Google 文件（新建或更新，含橘色表頭表格、★作業複習範本、文法解說格式）、以及把筆記重點同步進互動學習網頁 index.html 並推送到 GitHub。當使用者貼上課堂對話/錄音逐字稿/筆記文字、要求把補充教材加入某份 Google 文件、或要求「同步筆記」時使用。
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
7. 完成後回報 Google 文件連結 + 教材摘要（幾個單字、幾個句型等）

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

### Step 5 — 推送到 GitHub
1. `git add index.html`
2. `git commit -m "Sync English learning notes up to YYYYMMDD (主題)"` + `Co-Authored-By` trailer
3. `git push origin main`

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

### 完成後
告訴使用者：
- 處理了哪些檔案（日期 + 標題）
- 新增了多少單字、翻譯、關鍵字
- 是否有新文章
- 是否產出了格式化 Google 文件（若有，提供連結）
- GitHub 推送結果
- 任何需要人工確認的項目

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
