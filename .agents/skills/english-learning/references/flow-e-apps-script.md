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

DocumentApp helper（每張卡是一個 2 欄無框表格：左黃條 10pt + 內容欄；用 `editAsText().setBold(0, label.length-1, true)` 粗體化標籤，用 `setItalic` + `setForegroundColor(idx, idx+len-1, "#FF0000")` 標紅斜體被改的字）：

```javascript
var STRIP="#FFD54F", CALLOUT="#FFFDE7", REDW="#FF0000", F="Google Sans";
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

