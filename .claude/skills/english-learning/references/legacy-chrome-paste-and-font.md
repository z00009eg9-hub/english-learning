# 舊版 Chrome 貼上與字型腳本（已被「流程 A0 HTML 上傳」取代，只在 A0 不能用時才參考）

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

