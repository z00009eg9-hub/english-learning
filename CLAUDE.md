# CLAUDE.md — english-learning 專案規則

## 專案概要

英文學習平台，包含兩個網站 + LINE Bot：

| 名稱 | 網址 | 原始碼 |
|---|---|---|
| Speak Up（課堂筆記/口說/測驗） | https://learning-english-notes.web.app | 根目錄 `index.html` |
| B2 Read（閱讀/文法/實景） | https://english-b2-lab.web.app | `b2lab/public/index.html` |
| LINE 單字查詢 Bot | Cloudflare Worker | `line-bot/` |

- 原始碼：`D:\english-learning`（已從 Google Drive 搬出，避免 Drive 同步破壞 .git）
- Speak Up 部署：`npx firebase deploy --only hosting`
- B2 Read 部署：push 到 main 自動部署
- GitHub：`https://github.com/z00009eg9-hub/english-learning.git`

## 使用者偏好

- 暫存檔、快取、工具輸出一律放 D: 磁碟，不要寫 C:（C: 空間敏感）
- 開工前自動 `git pull`，不用等使用者提醒
- 使用者同時使用 Claude Code 和 Codex，GitHub 是唯一的同步來源
- Git commit 署名：`user.name="z00009eg9"` / `user.email="z00009eg9@gmail.com"`

## Git 安全工作流程（必遵守）

專案已搬到本機 D: 磁碟，不再受 Google Drive 同步干擾。
同步方式改為純 Git（GitHub）。

### 開工前（每次對話開始時自動執行，不用等使用者提醒）

1. `git status` — 確認工作區乾淨
2. `git pull` — 取得 GitHub 上的最新版本（使用者同時使用 Codex，GitHub 上可能有新 commit）

### 修改後

1. `git diff` — 確認改動內容正確
2. `git add <檔案>` — 只加入有意修改的檔案（不要 `git add -A` 盲加）
3. `git commit -m "描述"` — 提交
4. `git push` — 推上 GitHub

### 部署前

1. `git status` — 確認工作區乾淨、沒有未提交的變更
2. `git log --oneline -3` — 確認最新 commit 是你預期的版本
3. 確認無誤後才執行部署指令

### 異常處理

- 如果 `git status` 顯示你沒改過的檔案有異動 → 用 `git diff` 檢查，必要時 `git checkout -- <file>` 還原
- 部署後發現版本不對 → `git log` 確認 commit，必要時 `git revert` 回退
- **不要在 `G:\我的雲端硬碟\英文筆記` 跑 git**：那是雲端硬碟上的舊副本，已停用。在那裡跑 git 會讓雲端冒出大量雜湊檔名的物件檔（Drive「近期存取」一堆亂碼檔名），資料也是舊的。對話若從 G: 開啟，一律 `cd /d/english-learning` 再做事

## 換電腦設定步驟

GitHub 是唯一的同步來源；D: 只存在本機、不會自動備份，**沒 push 的改動換電腦就沒了**。

| 東西 | 在哪 | 新電腦怎麼拿回來 |
|---|---|---|
| 網站、Bot 程式碼、b2lab 資料 | GitHub | `git clone` |
| 課堂筆記資料夾（`20250709-…` 這類日期資料夾） | 只在 Google 雲端硬碟（不進 git） | 裝 Google 雲端硬碟 |
| rexon-qa-english（LINE Bot 會讀它的資料） | 只在 Google 雲端硬碟（**不在 GitHub**） | 裝 Google 雲端硬碟，磁碟代號要是 G: |
| 排程任務（每日 LINE Bot 同步等） | 本機 `D:\ClaudeConfig\scheduled-tasks\` | 要重建（見下方步驟 6） |
| Firebase / Cloudflare 登入 | 本機 | 重新登入 |

### 舊電腦（換之前）

1. `cd /d/english-learning && git status` — 有未提交的改動就 commit + push
2. `git log origin/main..HEAD` 應該是空的（代表全部推上去了）
3. 把 `D:\ClaudeConfig\scheduled-tasks\` 整個資料夾複製到雲端硬碟或隨身碟（排程的任務書在裡面）

### 新電腦

1. 安裝 Git、Node.js（LTS）、Google 雲端硬碟（確認掛在 **G:**）
2. Git 署名：
   ```bash
   git config --global user.name "z00009eg9"
   git config --global user.email "z00009eg9@gmail.com"
   ```
3. 抓程式碼到**本機磁碟**（不要放雲端硬碟裡）：
   ```bash
   git clone https://github.com/z00009eg9-hub/english-learning.git D:/english-learning
   ```
4. 裝 LINE Bot 的建置工具並確認能跑（words 要 ≥ 900，太少代表 G: 的 QA 資料沒同步好）：
   ```bash
   cd D:/english-learning/line-bot && npm install && npm run build:data
   git checkout -- src/data/vocabulary.json
   ```
5. 登入部署工具：`npx firebase-tools login`（Speak Up）、`npx wrangler login`（LINE Bot）。B2 Read 是 push 自動部署，不用登入
6. 重建排程：在 Claude 桌面版把舊電腦複製出來的任務書（`scheduled-tasks\<任務名>\SKILL.md`）逐一建回去，路徑一律用 `D:\english-learning`
7. 之後開 Claude Code / Codex 都從 `D:\english-learning` 開，不要從雲端硬碟的 `英文筆記` 資料夾開

## 技術備註

- 兩個網站都是單一大 HTML 檔，CSS/JS 內嵌，無 build step
- B2 Read 資料放同目錄 `data-*.js`（掛在 `window.*`）
- Speak Up 課程資料在同一個 index.html 內，由 `/sync-notes` 維護
- 兩站版面規則不同，不要互相套用
- 同一時間只讓一個 agent 改同一個檔案
