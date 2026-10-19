## 流程 C：同步筆記到 index.html + 推送 GitHub（2026-06-11 整合自 /sync-notes）

當使用者說「同步筆記」、「同步進網頁」或執行 `/sync-notes` 時觸發。

### Step 1 — 讀取同步狀態
同步狀態**就記在 `index.html` 裡**（2026-09-18 起；舊版寫的 `sync_state.md` 記憶檔從來不存在，不要去找）。
`html_file` 固定為 `D:\english-learning\index.html`（G: 雲端那份是停用的舊副本，不要改它）：
```bash
cd "D:/english-learning"
grep -o "===SYNC:PROCESSED_LESSONS===.*" index.html        # 已同步過的課（YYYYMMDD 清單）
grep -o "VOCAB_START=== sync_date:[0-9-]*" index.html       # 上次同步日 = LAST_SYNC_DATE
```

### Step 2 — 搜尋新筆記
用 `search_files` 搜尋：
```
mimeType = 'application/vnd.google-apps.document' and modifiedTime > 'LAST_SYNC_DATE'
```
從文件標題取出課程日期 `YYYYMMDD`，**已在 `PROCESSED_LESSONS` 清單裡的課跳過**。
（已同步過、但 Doc 在同步後又被修改的課，列出來問使用者要不要重新同步，不要自己決定。）

### Step 3 — 讀取並提取內容
對每個新檔案用 `read_file_content` 讀取，提取以下資料：

> ⚠ **長文件被截斷時，套用「流程 H 步驟 1」的截斷處理規則**：不可用資料夾裡的
> `YYYYMMDD.html` 或稍早讀到的版本補齊；改用 Chrome MCP 開
> `https://docs.google.com/document/d/<FILE_ID>/mobilebasic` 讀完整全文（2026-09-06 實測可行）。

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
0. ⚠ **開工前應已跑過「流程 00-A」的 `git pull --rebase origin main`**；若還沒跑，先跑完再 commit
1. `git add index.html`
2. `git commit -m "Sync English learning notes up to YYYYMMDD (主題)"` + `Co-Authored-By` trailer
3. `git push origin main`
4. **跑「流程 00-C」收尾檢查**：`git log --oneline origin/main..main`（要空的）＋ `git branch --no-merged main`（確認沒有落單分支）

### Step 5.5 — 部署到 Firebase Hosting（更新線上網站）
push GitHub 後，**接著執行「流程 G」** 把最新 `index.html` 部署上線：
```bash
cd "D:/english-learning" && cp index.html public/index.html && firebase deploy --only hosting
```
線上網址 https://learning-english-notes.web.app 隨即更新（詳見下方「流程 G」）。

### Step 6 — 更新同步狀態（寫在 index.html 裡：**實際上在 Step 4 改 index.html 時就一起做**，才會隨 Step 5 一起 commit、隨 Step 5.5 上線）
- `// ===SYNC:PROCESSED_LESSONS===` 那一行：尾端加上這次同步的課程日期（`, YYYYMMDD`），**漏加下次會被重複處理**
- 每個有改到的 `===SYNC:XXX_START===` 標記：更新 `sync_date:`（今天）與 `count:`
- 標記行本身不可以刪或移位（見 AGENTS.md §7）
- 回報時簡短說明這次新增了什麼

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

