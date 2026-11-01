# CLAUDE.md — english-learning

規範以 `AGENTS.md` 為準（Claude Code 與 Codex 共用）；這裡只放專案概要、個人偏好和換電腦。

## 專案

| 名稱 | 網址 | 原始碼 / 部署 |
|---|---|---|
| Speak Up（課堂筆記／口說／測驗） | https://learning-english-notes.web.app | 根目錄 `index.html`，push main 由 CI 部署 |
| B2 Read（閱讀／文法／實景） | https://english-b2-lab.web.app | `b2lab/public/index.html`，push main 由 CI 部署 |
| LINE 單字查詢 Bot | Cloudflare Worker | `line-bot/` |
| Speak Up 雲端語音辨識 | https://speakup-stt.anitachen9279.workers.dev | `stt-worker/`（Workers AI Whisper） |
| B2 Read AI 語音檔 | https://english-b2-lab-audio.web.app | 另一個 repo `D:\b2lab-audio`（private）；每日排程 `b2lab-audio-sync` |

- 原始碼 `D:\english-learning`，GitHub `https://github.com/z00009eg9-hub/english-learning.git` 是唯一同步來源（同時使用 Claude Code 和 Codex）
- 兩站版面規則不同，不要互相套用；同一時間只讓一個 agent 改同一個檔案

## 偏好

- 暫存檔、快取、工具輸出放 D: 磁碟，不寫 C:（C: 空間敏感）
- 開工先 `git fetch && git pull --rebase`（細節見 AGENTS §1），不用等提醒
- 修改後：`git diff` → 只 `git add` 有意修改的檔（不用 `-A`）→ commit → push；部署前 `git status` 要乾淨
- Git 署名：`user.name="z00009eg9"` / `user.email="z00009eg9@gmail.com"`
- **不要在 `G:\我的雲端硬碟\英文筆記` 跑 git 或 npm**：那是停用的舊副本。對話若從 G: 開啟，先 `cd /d/english-learning`
  - G: 冒出一堆 38 字雜湊檔名＝`.git/objects` 的 git 物件。不要在雲端網頁手刪（會弄壞 G: 的 repo），到 G: 跑：
    ```bash
    cd "G:/我的雲端硬碟/英文筆記"
    find .git -iname desktop.ini -delete
    git gc --prune=now
    git count-objects -v   # count 要是 0
    ```
  - `.git` 的 `pack`、`info`、`packed-refs`、`refs` 任何時候都不要刪

## 換電腦

D: 不會自動備份，**沒 push 的改動換電腦就沒了**。

| 東西 | 位置 | 怎麼拿回來 |
|---|---|---|
| 程式碼、b2lab 資料 | GitHub | `git clone` 到 `D:/english-learning`（路徑不可改，記憶資料夾名由它換算） |
| B2 Read 音檔 repo（約 700 MB） | GitHub `z00009eg9-hub/b2lab-audio` | clone 到 `D:/b2lab-audio`（跟 english-learning 同層），`npm install` |
| rexon-qa-english | GitHub `z00009eg9-hub/rexon-qa-english`；LINE Bot 建置目前讀 `G:\我的雲端硬碟\越南\品保課\儀器\rexon-qa-english` | clone 到 `D:\rexon-qa-english`；裝 Google 雲端硬碟（G:） |
| 課堂筆記日期資料夾 | 只在 Google 雲端硬碟（不進 git） | 裝雲端硬碟 |
| `b2lab/my-week/`（含公司名，不進 git） | 只在本機 | 從舊電腦複製（沒用完的 `- [ ]` 才不會掉） |
| Claude 記憶、排程任務書、`settings.json` | `D:\ClaudeConfig\`（不在 GitHub） | 從舊電腦複製（`vm_bundles`、`cache`、`npm-cache` 很大不用帶） |
| Firebase / Cloudflare 登入 | 本機 | `npx firebase-tools login`（Speak Up、音檔站）、`npx wrangler login`（LINE Bot） |

新電腦步驟：
1. 裝 Git、Node.js（LTS）、Google 雲端硬碟（掛在 **G:**）。
2. `git config --global user.name "z00009eg9"`、`git config --global user.email "z00009eg9@gmail.com"`。
3. clone 上表兩個 repo 到 D:。
4. LINE Bot：`cd D:/english-learning/line-bot && npm install && npm run build:data`，words 要 ≥ 900（太少代表 G: 的 QA 資料沒同步好），再 `git checkout -- src/data/vocabulary.json`。
5. 還原 Claude 設定（**先做這步再開 Claude**）：設使用者環境變數 `CLAUDE_CONFIG_DIR=D:\ClaudeConfig`，把 `settings.json` 放回 `D:\ClaudeConfig\`，記憶放回 `D:\ClaudeConfig\projects\D--english-learning\memory\`。
6. 排程：任務書放回 `D:\ClaudeConfig\scheduled-tasks\`，在 Claude 桌面版逐一建回去，路徑一律 `D:\english-learning`。
7. 之後開 Claude Code／Codex 都從 `D:\english-learning` 開。
