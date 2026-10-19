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
- **紅字／藍字**：`❌ 原句` 用 `color:#FF0000`、`✅ 訂正` 用 `color:#0000FF`
- **表格只有標題列粗體**：`<th>` 粗體、`<td>` 明確寫 `font-weight:normal`
- `<h1>/<h3>` 階層、⭐ ⚠ ❌ ✅ 等符號

**❌ HTML 轉檔後一定會掉、必須用 Apps Script 補的五件事（2026-08-25 使用者驗收確認；
2026-08-28 rebase 事故中落單，2026-08-29 補回）：**

| 項目 | 正確值 | 轉檔結果 | Apps Script 補法 |
|------|--------|----------|------------------|
| 段落行距 | **1.5** | 掉回 1.0／1.15 | `p.setLineSpacing(1.5)` 走訪所有段落（含表格儲存格內段落） |
| 側邊黃底欄寬 | **0.4 公分** | 被拉寬或壓扁 | `t.setColumnWidth(0, 11.34)`（11.34pt ≒ 0.4cm），對每張 callout 表格套用 |
| 紅色 | **`#FF0000`** | CSS 有效但舊檔常是 `#C0392B` | 走訪文字，`getForegroundColor()` 是舊紅就 `setForegroundColor("#FF0000")` |
| 藍色 | **`#0000FF`** | 同上，舊檔常是 `#1155CC` | 同上，改成 `#0000FF` |
| 章節分頁 | 每個橘色 bar 各自起新頁 | `page-break-before:always` **不會**轉成分頁符號 | 由後往前 `body.insertParagraph(i, "").appendPageBreak()`，第一個 bar 略過 |

⚠ 這五項不要指望 HTML CSS——`line-height`、`page-break-before`、`<colgroup>` 在 Drive 轉檔時都會被丟掉。
**HTML 上傳只負責內容與底色，版面一律靠轉檔後的 Apps Script 修正腳本收尾。**
可重複使用的修正腳本：`20260825-時差表達與默契用語/fix-format.gs`（只改格式、不動內容，換 `DOC_ID` 即可套用到任何一份筆記）。

**⚠ 比照 20260811 的實際樣式規格（2026-08-13 使用者驗收通過的版本）：**
- 字體一律 `'Google Sans'`；H1 20pt／橘色 bar 15pt／小標題 14pt／內文與表格 13pt
- callout 用**兩欄表格**：第一欄背景 `#FFD54F`（黃色粗直條），第二欄 `#FFFDE7`。
  ⚠ 不要用 `border-left`，那條會太細，跟 20260811 不一樣
  ⚠ **黃色直條欄寬一律 0.4 公分**（轉檔後用 Apps Script `table.setColumnWidth(0, 11.34)`，11.34pt≈0.4cm；2026-08-19 使用者指定）
- callout 內文字顏色：標籤（原句／訂正／中文／結構／文法解說）**粗體黑字**；
  **訂正句本身是黑字，只有被修正的那幾個字用紅色斜體**（`#FF0000` + italic）——整句藍色是錯的；
  **`結構：` 後面的句型才用藍色粗體**（`#0000FF`）
- 每題開頭放 `🔬 文法解說：`（emoji 轉檔後正常顯示）
- 橘色 bar 的文字要**靠左**、且**垂直置中**（`cell.setVerticalAlignment(CENTER)` + 段落 `setAlignment(LEFT)`），
  預設的置中＋靠上看起來會偏高
- **每個橘色 bar 標頭都要自己起新的一頁**（在 bar 表格前 `body.insertParagraph(i,"").appendPageBreak()`），
  不要和上一節內容擠在同一頁。
  ⚠ **但第一個 bar（I. 作業複習）不要加分頁**，否則第一頁只剩大標題和副標，整頁空著

**⚠ HTML 轉檔後字型會掉回 Arial**：`<style>` 裡的 `font-family` 只有部分生效，**表格儲存格幾乎一定變 Arial**。
轉檔後一定要用 Apps Script 走訪所有段落與表格儲存格 `editAsText().setFontFamily("Google Sans")` 補上，
再用 Docs 工具列確認游標在表格內時顯示的是 Google Sans 而不是 Arial。

**⚠ 表格欄寬一定要指定，否則會被壓扁**：HTML 的 `<colgroup>` 不一定生效，最保險是轉檔後用 Apps Script
`table.setColumnWidth(j, pt)` 依欄數套用（版面寬 468pt）：5 欄 `[78,104,38,170,78]`（單字/音標/詞性/**例句**/**中文意思**，例句最寬）、4 欄 `[110,150,60,148]`、
3 欄 `[112,100,256]`、2 欄 `[130,338]`。判斷「這是資料表格而非 callout」用第一列第一格背景 `#ffe0b2`。
⚠ 3 欄若是「說法／片語｜**例句**｜**中文**」（見上方 2026-08-29 欄序規則），寬度改用 `[112,256,100]` —— 寬的那格要給例句。
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

