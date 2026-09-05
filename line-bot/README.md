# LINE 單字查詢 Bot（line-bot）

在 LINE Official Account 輸入一個英文單字，回傳一張適合手機閱讀的單字學習卡片。

```
LINE Official Account
  → LINE Messaging API
  → Cloudflare Worker（本專案）
  → 查現有單字資料（src/data/vocabulary.json）
  → 回傳 LINE Flex Message
```

**這一版完全不需要綁信用卡**：沒有 Firebase Cloud Functions、沒有 Cloud Run、沒有任何
需要 billing account 的 Google Cloud 服務、沒有 AI／OpenAI，只用 Cloudflare Workers 免費方案
與 LINE Official Account 免費方案，而且只用 Reply API（被動回覆），不做主動 Push／Broadcast。

---

## 1. 資料從哪裡來

**沒有建立第三套 vocabulary database。** `src/data/vocabulary.json` 是一個**建置產物**，
由 `scripts/build-vocab.mjs` 從兩個網站**現有的**資料檔讀出來、正規化後產生：

| 來源 | 檔案 | 取出什麼 |
| --- | --- | --- |
| B2 Lab（`b2lab/public/`） | `data-notes.js` (`window.NOTES.vocab` / `.kw` / `.sources`) | 單字、KK 音標、詞性、中文、英文定義、課堂出處 |
| B2 Lab | `data-reading.js` / `data-a2.js` / `data-daily.js` / `data-book.js` / `data-listen.js` / `data-focus.js` | General 例句（中英對照）、CEFR level |
| QA English（`rexon-qa-english/public/`） | `data-weekly.js`、`data-qa.js`、`data-qalife.js`、`data-phrases.js`、`data-brief.js`、`data-scenes.js`、`data-instruments.js`、`data-reading.js` | QA 詞條（`{en, zh}`）、QA／工作情境例句 |

兩邊的原始資料**完全沒有被修改**。網站資料更新之後重跑一次即可：

```bash
npm run build:data
```

預設路徑：
- B2 Lab：`../b2lab/public`（相對於 `line-bot/`）
- QA English：`G:/我的雲端硬碟/越南/品保課/儀器/rexon-qa-english/public`

路徑不同時用環境變數覆寫：

```bash
B2LAB_DIR=/path/to/b2lab/public QA_DIR=/path/to/rexon-qa-english/public npm run build:data
```

產生出來的每一筆長這樣（欄位缺了也不會壞，程式都有 fallback）：

```json
{
  "id": "compensate",
  "word": "compensate",
  "pos": "v.",
  "level": "",
  "ipa": "/ˈkɑːmpənseɪt/",
  "translation": "補償、彌補",
  "definition": "To give something to make up for a loss or problem.",
  "category": "daily",
  "source": "general",
  "lesson": "20260811 補償用語與效率詞彙",
  "general": [{ "en": "…", "zh": "…" }],
  "qa": [{ "en": "…", "zh": "…" }],
  "related": ["compensation", "…"]
}
```

---

## 2. 程式結構

```
line-bot/
  src/
    index.ts          webhook 入口：驗簽 → 路由 → 回覆（不含資料與版面邏輯）
    line.ts           LINE 簽章驗證、Reply API、postback 編解碼
    vocabulary.ts     資料存取層（findWord / getMoreExamples / getQaExamples /
                      getRelatedWords / findSimilarWords / findByChinese）
    flexMessages.ts   所有 Flex Message 的組裝
    fuzzySearch.ts    Levenshtein 拼字建議（純本機計算，不用 AI）
    data/vocabulary.json   建置產物（由 scripts/build-vocab.mjs 產生）
  scripts/build-vocab.mjs
  test/               vitest 測試
  wrangler.toml
```

要換資料來源（例如改成 Firestore 或 KV），只需要改 `vocabulary.ts`；
要改版面，只需要改 `flexMessages.ts`。

---

## 3. LINE Developers Console 要做的事

1. 到 <https://developers.line.biz/console/> 用 LINE 帳號登入。
2. 建立（或選擇）一個 **Provider**。
3. 在該 Provider 底下建立 **Messaging API channel**（免費方案即可）。
   - 已經有 LINE 官方帳號的話，可以在 [LINE Official Account Manager](https://manager.line.biz/)
     的「設定 → Messaging API」啟用，它會對應到同一個 channel。
4. 取得兩把金鑰：
   - **Channel secret**：channel 的 **Basic settings** 分頁最下方。
   - **Channel access token (long-lived)**：**Messaging API** 分頁最下方，按 **Issue**。
5. **Messaging API** 分頁：
   - **Webhook URL** 填部署後的網址（見下一節），例如
     `https://line-vocabulary-bot.<你的帳號>.workers.dev/webhook`
   - **Use webhook** 打開。
   - 按 **Verify** 應該回 Success。
6. 關掉會蓋掉 Bot 回覆的自動回應（在同一頁的 **LINE Official Account features**，
   點 **Edit** 進 Official Account Manager 的「回應設定」）：
   - **自動回應訊息（Auto-reply messages）**：關閉
   - **歡迎訊息（Greeting message）**：可留可關，不影響查單字
   - **聊天（Chat）**：關閉（開著時 webhook 收不到訊息）
   - 回應模式建議選 **Bot**

> 注意：`Verify` 按下去時 LINE 送的是一個沒有 event 的測試請求，Worker 會驗簽通過並回 200。

---

## 4. Cloudflare 要做的事

1. 到 <https://dash.cloudflare.com/sign-up> 註冊（**免費方案不需要信用卡**）。
2. 在本機登入：

   ```bash
   npx wrangler login
   ```

3. 設定兩個 secret（**互動式輸入，值不會留在檔案或指令記錄裡**）：

   ```bash
   npx wrangler secret put LINE_CHANNEL_SECRET
   npx wrangler secret put LINE_CHANNEL_ACCESS_TOKEN
   ```

4. 部署：

   ```bash
   npm run deploy      # 等同 npx wrangler deploy
   ```

   成功後會印出網址，例如
   `https://line-vocabulary-bot.<你的帳號>.workers.dev`
   把 **這個網址加上 `/webhook`** 貼回 LINE 的 Webhook URL。
   （Worker 對任何路徑的 POST 都會處理，用 `/webhook` 只是好認。）

5. 先用瀏覽器打開網址本身做健康檢查，應該看到單字筆數：

   ```json
   { "ok": true, "service": "line-vocabulary-bot", "vocabulary": { "count": 1074, "generatedAt": "…" } }
   ```

### 需要設定的 secrets

| 名稱 | 哪裡拿 | 用途 |
| --- | --- | --- |
| `LINE_CHANNEL_SECRET` | LINE channel → Basic settings | 驗證 `x-line-signature` |
| `LINE_CHANNEL_ACCESS_TOKEN` | LINE channel → Messaging API → Issue | 呼叫 Reply API |

非機密設定放在 `wrangler.toml` 的 `[vars]`：`B2LAB_URL`、`QA_URL`（「完整學習」的深連結）。

> **金鑰絕對不要** commit 進 repo、寫在前端、寫進程式碼，或把真實值寫進這份 README。
> 本機開發用 `.dev.vars`（已被 `.gitignore` 排除），可從 `.dev.vars.example` 複製。

---

## 5. 本機開發與測試

```bash
npm install
npm test          # vitest：75+ 個測試
npm run typecheck # tsc --noEmit
npx wrangler dev  # 本機起 Worker（需要 .dev.vars）
```

`wrangler dev` 起來後，不需要 LINE 也能看版面：

```
http://localhost:8787/preview?w=compensate
http://localhost:8787/preview?a=qa&w=supplier
http://localhost:8787/preview?a=rel&w=compensate
```

回傳的 `messages[0].contents` 可以直接貼進
[LINE Flex Message Simulator](https://developers.line.biz/flex-simulator/) 看實際排版。

### ⚠️ Google Drive 資料夾的已知問題

這個 repo 放在 Google Drive 同步資料夾裡，`npm install` 常常因為 Drive 的檔案系統寫入失敗
（`EBADF` / `TAR_ENTRY_ERROR`）。實測可行的做法：

```bash
npm install --ignore-scripts --maxsockets=1
```

`--ignore-scripts` 會略過 `workerd`（wrangler 的本機執行環境）的安裝腳本，
所以 `wrangler dev` 可能跑不起來；要在本機跑 `wrangler dev` 時，把 `line-bot/`
複製到本機磁碟（例如 `D:\`）再 `npm install` 一次即可。
`npm test` 與 `npm run deploy` 不受影響。

---

## 6. 怎麼測試 LINE webhook

1. **LINE Console 的 Verify**：Messaging API 分頁按 Verify → 應回 Success。
2. **真的用手機測**：加自己的官方帳號好友，輸入：

   | 輸入 | 預期 |
   | --- | --- |
   | `compensate` | 單字卡（詞性、中文、General 例句、QA 區塊顯示「目前沒有 QA 工作例句」、四顆按鈕） |
   | `Compensate` / ` COMPENSATE ` | 同上（大小寫、前後空白都吃得下） |
   | `supplier` | 單字卡，QA 區塊有工作例句 |
   | `compansate` | 「找不到，你是不是想找 compensate」 |
   | `xxxxxxxx` | 「目前資料庫中沒有」＋兩個網站入口 |
   | `退款` | 中文查詢 → 列出 refund 等英文字 |
   | 貼圖／圖片 | 沒有反應（安全忽略，不報錯） |

3. **驗簽失敗的情況**：用 curl 送一個假簽章，應該回 401 且不會回覆任何訊息。

   ```bash
   curl -i -X POST https://<你的 worker 網址>/webhook \
     -H "content-type: application/json" \
     -H "x-line-signature: not-a-real-signature" \
     -d '{"events":[]}'
   ```

4. **看 log**：

   ```bash
   npx wrangler tail
   ```

---

## 7. 重複 webhook（idempotency）的限制

LINE 在沒收到 200 時會重送同一個 event。程式用 `webhookEventId` 做防護，
但**這一版把已處理的 id 存在 Worker isolate 的記憶體裡（10 分鐘、最多 2000 筆）**，
因為免費方案下不想引入額外的儲存服務。

限制：isolate 被回收、或請求落到別的節點時，這份記憶會消失，
極少數情況下 LINE 重送仍可能造成重複回覆一次。
要做到嚴格「只回一次」，之後可以接 **Cloudflare KV**（免費方案也有，一樣不必綁卡），
只要改 `src/index.ts` 裡的 `alreadyHandled()` 即可，其他程式不用動。

---

## 8. 「完整學習」深連結

單字卡的「完整學習」會依單字來源導向：

- General 字 → `https://english-b2-lab.web.app/?w=<單字>`
- QA 字 → `https://rexon-qa-english.web.app/?w=<單字>`

兩個網站已各加了一小段 `?w=` 的處理（B2 Lab 直接彈出該字的字卡；QA English 開首頁並帶入搜尋）。
**這兩個修改要各自部署後深連結才會生效**，沒有部署時退回開首頁，不會壞掉：

```bash
# B2 Lab：改的是 b2lab/public/index.html 與 sw.js，push 之後 GitHub Actions 會部署
git add b2lab/public/index.html b2lab/public/sw.js && git commit && git push

# QA English：在 rexon-qa-english 資料夾
npx firebase-tools deploy --only hosting --project rexon-qa-english
```

---

## 9. 這一版刻意沒有做

依需求排除：OpenAI／Claude／Gemini 等任何 AI、AI 產生例句或翻譯、語音／TTS／STT、
登入系統／LINE Login、收藏同步、每日單字、Push Notification／Broadcast、
Quiz、學習紀錄、Admin 後台、任何付費 Firebase 服務。
