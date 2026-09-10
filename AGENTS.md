# AGENTS.md — 這個 repo 的工作規範

給任何在這個 repo 動手的 AI coding agent（Codex / Claude Code / 其他）看的。
人類協作者也適用。**動手前先讀完這一頁。**

---

## 0. 這個 repo 是什麼

`G:\我的雲端硬碟\英文筆記` — 放在 **Google Drive 同步資料夾**裡的 git repo，
遠端 `z00009eg9-hub/english-learning`，主要分支 `main`。

裡面有兩個上線中的英文學習網站，外加課堂筆記與工具：

| 名稱 | 網址 | 原始碼 | 部署方式 |
|---|---|---|---|
| **Speak Up**（課堂筆記／口說／每日測驗） | https://learning-english-notes.web.app | 根目錄 `index.html` | **手動**（見 §2） |
| **B2 Read**（分級閱讀／課本／文法／實景） | https://english-b2-lab.web.app | `b2lab/public/index.html` | **push 到 main 自動部署**（見 §2） |
| LINE 單字查詢 Bot | Cloudflare Worker | `line-bot/` | `npm run deploy`（wrangler） |

兩個網站都是**單一大 HTML 檔**（B2 Read 的 index.html 約 45 萬字元），
沒有 build step、沒有框架、沒有打包。CSS 與 JS 都內嵌在同一個檔案裡，
資料放在同目錄的 `data-*.js`（掛在 `window.XXX` 上）。

---

## 1. 開工前的固定檢查（每次都要做）

```bash
git fetch && git status
```

1. **一定先 `git pull --rebase`。** 這個 repo 有多個寫入者：人類、每日排程 agent、
   不同的 AI 工具。`index.html` 是單一巨檔，兩邊同時改幾乎必定衝突而且很難合。
   **同一時間只讓一個 agent 改同一個檔案。**
2. **確認 index.html 沒有被 Google Drive 截斷。** 開工前比對檔案大小與 `git HEAD` 的版本：
   ```bash
   git cat-file -s HEAD:b2lab/public/index.html   # 對照 wc -c b2lab/public/index.html
   ```
   工作區是 CRLF、git 內是 LF，所以本機**本來就會大約多 1~2%**（每行多一個 `\r`）；
   正常。若本機**明顯比較小**（少好幾 KB 以上）→ 檔案被 Drive 同步截斷了，
   用 `git checkout -- <path>` 還原後再開工。
3. `git fetch` 若報 `bad object refs/desktop.ini`：
   ```bash
   find .git -iname desktop.ini -delete
   ```
4. **不要在這個資料夾裡跑 `npm install`**（Drive 上會 EBADF 失敗）。
   需要跑測試就先複製到本機磁碟（例如 `D:\`）再裝。

---

## 2. 部署規則

### B2 Read（`b2lab/`）
- **push 到 `main` 就是部署。** `.github/workflows/deploy-b2lab.yml` 會在
  `b2lab/public/**`、`b2lab/firebase.json` 有變動時自動部署到 Firebase Hosting。
- **不要自己在本機跑 `firebase deploy`** — 會被下一次 CI 覆寫，白做。
- **改了 `b2lab/public/` 底下任何檔案，就要 bump 快取版號**：
  `b2lab/public/sw.js` 的 `const CACHE = 'b2lab-vNN'` → `vNN+1`。
  忘了 bump，使用者的 iPad／手機會一直吃到舊快取。
- CI 有 sanity check：`data-*.js` 若 load 不起來或內容為空會**擋下部署**（這是保護，不要繞過）。
- `b2lab/firestore.rules` **不在 CI 內自動部署**。改了規則要人工跑一次
  `firebase deploy --only firestore:rules`（需要專案擁有者權限）。

### Speak Up（根目錄）
```bash
cp index.html public/index.html          # public/ 是 gitignored 的部署產物
npx firebase-tools deploy --only hosting --project learning-english-notes
```
沒有 service worker，不用 bump 版號（走 no-cache header）。

### 驗證上線
```bash
curl -s https://english-b2-lab.web.app/sw.js | grep CACHE     # 版號有跟上 = 部署完成
```

---

## 3. 絕對不要進版控的東西

`.gitignore` 已擋掉，但仍要自己留意：
Firebase service account 金鑰（`*-firebase-adminsdk-*.json`）、`.env`、`*.pem`、`*.key`、
`node_modules/`、`/public/`（Speak Up 的部署產物）、`.chrome-check/`。
**金鑰外洩等於整個 Firebase 專案被接管。**

---

## 4. 資料檔的產生關係（不要手改產物）

| 產物 | 來源 | 產生方式 |
|---|---|---|
| `b2lab/public/data-rel.js`（單字關聯層） | `data-book.js` | `node b2lab/tools/build-rel.js` → **產物要 commit** |
| `line-bot/` 的單字索引 | 兩個網站的 `data-*.js` | `cd line-bot && npm run build:data` |

改了網站的單字資料 → 記得重跑對應的 build，否則 Bot／關聯層會跟網站對不上。

---

## 5. 內容規範（改「教材內容」時必讀）

這些是使用者反覆確認過的規則，不是建議：

- **中文一律繁體台灣用語。** 中英交界要有空白（顯示層有 `rwPad()` 處理）。
- **音標統一美式 Cambridge**：用 `ɑː / ɚ / ɝː / e`，一律寫成 `/…/`。新資料照此格式。
- **文法內容必須與 *Grammar in Use* 一致**（規則、例句、quiz、解說）。
  學習者無法自行判斷對錯，寧可不寫也不要寫錯。
- **實景英語（`ST.rw`，`rw*` 系列函式）**：
  - `quotes`（影片實景原句）**只能來自真實可查證的來源**（字幕、分享頁公開文字、
    留言交叉印證、使用者親貼），`src` 標 `"page"` / `"user"`。
    **絕對不可以依標題或單字自己生成原句。** 沒有來源就留空，UI 有 fallback。
  - 自己寫的句子只能放 `exs`（延伸例句），永遠不混進 `quotes`。
  - UI 不顯示第三方平台品牌，連結一律寫「觀看原影片 ↗」。
  - `icons[3]` / `steps[3]` 要隨內容挑，不要沿用別課的。
- **實景教材是兩人共用**（Anita／Tom），`rwShare()` 會把 `ST.rw` 同步到另一位的
  Firestore 文件；`rwDone`（學習進度）則各自獨立。改這塊前先看懂 `rwShare()`。
- **生詞本同步（b2wb）**：Speak Up 的 `cloudPush` 必須剔除 `b2wb` 再 `set(merge:true)`。
  merge 是深合併，推回舊 map 會讓已移除的字復活。

---

## 6. B2 Read 的版面架構（改 CSS 前必讀）

2026-09 重整過，**不要退回舊寫法**：

- `main` **不設固定寬度、不設 max-width**，靠 `margin-left: var(--sb-w)` 讓開側邊欄，
  自動吃滿剩餘寬度。側邊欄 `#sidebar` 是 `position:fixed`，展開 220px／收合 64px
  （`body.sb-col` 切換 `--sb-w`），過場靠 `margin-left` transition。
  **不要用 `width: calc(100% - 250px)`、不要寫死 1100/1200/1280px 在 `main` 上。**
- 清單／內容頁（`#v-daily`、`#v-read:not(.rdopen)`、`#v-book:not(.bkopen)`、
  `#v-listen`、`#v-real:not(.rwopen)`、`#v-vocab`、`#v-gram`）在 ≥769px 時
  `max-width:1280px; margin-inline:auto`。**進度頁 `#v-prog` 是 dashboard，維持 full-width。**
  內頁（`.rdopen` / `.bkopen` / `.rwopen`）吃滿可用寬度。
- 閱讀／實景內頁的雙欄 `.mag`（左＝文章／情境，右＝Words & Phrases）
  用 **container query** 依「內容區實際可用寬度」決定，不看裝置寬度：
  `<840px` 單欄／`≥840` 約 60:40／`≥1000` 約 62:38／`≥1200` 約 65:35，
  右欄上限 `min(35%, 600px)`，最小 300–340px。
  **左欄一定要明顯比右欄寬，不可以變成 1fr 1fr。**
- 課本頁單字表用 `@container book`（`#v-book` 自己是 container），桌機雙欄，別動。
- 文章正文行寬上限 `--read-w: 720px` 是刻意的可讀性設定，不要為了填滿畫面拿掉。

---

## 7. 修改風格（使用者明確要求）

- **最小範圍修改。** 不要順手重構、不要「順便優化」沒問到的地方。
- **已經正常的頁面不要重新設計**：字級、行距、padding、gap、card 樣式、
  grid 欄數、按鈕、顏色，沒被要求就不要動。
- 不要用全域 selector 一次覆蓋所有頁面的 card / grid。
- 改版面優先用 CSS flex / grid / container query 原生自適應，
  **不要用 JavaScript 去算 viewport 或判斷裝置型號。**
- 註解用繁體中文，寫「為什麼這樣做」而不是「這行在做什麼」，
  跟現有註解風格一致。

---

## 8. 驗證（改完一定要自己看過，不要叫使用者去試）

本機起站：
```bash
npx http-server b2lab/public -p 8787 -c-1     # B2 Read
npx http-server . -p 8789 -c-1                # Speak Up
```

改版面至少要量過這幾種情況，且**都不能出現水平捲軸**：
1920／1440（側邊欄展開＋收合各一次）、iPad 橫 1024、iPad 直 820、手機 390。
八個分頁（今日／課本／閱讀／聽力／實景／單字卡／文法／進度）都要掃一遍。

改 JS 要看 console 沒有新的錯誤。

---

## 9. Commit

- 訊息用繁體中文，`type(scope): 摘要` 開頭（例：`fix(b2lab): …`、`feat(line-bot): …`），
  內文條列「改了什麼、為什麼」。
- 只 commit 這次真的要改的檔案，不要 `git add -A` 把別人的工作檔一起帶走。
- 未經要求不要 push 到 `main` 以外的地方，也不要開 PR。
