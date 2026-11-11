# B2 Read 內容排程 — 共用規則

`DAILY_TASK.md`（每週三，data-daily.js）與 `READING_TASK.md`（每週六，data-reading.js）都適用。
任務書各自的規則在各自檔案，**這裡只放兩邊共通的**；改共通規則改這一份就好。

## 人物與語言

- 文章與聽力的主角**只能是 Tom 或 Anita**，不要 Amy，也不要自創第三位主角。配角（同事、店員、房東、醫生…）可自由取名，不要取名叫 Amy。例：Anita 的越南同事 Mai、Tom 的同事 Lisa。
- 2026-09-22 以前的舊資料還有 Amy，是舊制，保留不動。
- 台灣／越南生活情境；中文一律繁體台灣用語。

## 原創與版權

- 英文全部自己寫，不複製任何新聞或書籍句子（新聞只取事實）。
- 文法點只用 `syllabus.json` 決定「教哪一點」；解說、例句、練習題自己原創，不引用或改寫 *English Grammar in Use* 的文字，不讀 repo 外的 PDF 教科書。
- `target[].ex` 要原創、換情境（不沿用本文的人物、地點、事件、數字），**不可與本文連續 4 字相同**（重點字本身不算），一定要有 `exCn`。驗證腳本會擋。

## 音標（美式 Cambridge 記法，全站統一）

- **符號**：`ɑː` 不用 `ɒ`、`oʊ` 不用 `əʊ`、`e` 不用 `ɛ`、`tuː` 不用 `tjuː`、`ɪr`/`er`/`ʊr` 不用 `ɪə`/`eə`/`ʊə`、IPA 的 `ɡ`；一律 `/…/`，不用 `[…]`。
- **捲舌 r 最常漏**：美式沒有不發音的 r，拼字裡每段 r 都要標。非重音 -er/-or/-ar 寫 `ɚ`（leadership `/ˈliː.dɚ.ʃɪp/`、government `/ˈɡʌv.ɚn.mənt/`）；重音 bird 類寫 `ɝː`（courage `/ˈkɝː.ɪdʒ/`、surgery `/ˈsɝː.dʒɚ.i/`）；其餘位置直接留 `r`（cargo hold `/ˈkɑːr.ɡoʊ hoʊld/`、performance `/pɚˈfɔːr.məns/`、tarmac `/ˈtɑːr.mæk/`）。
  - `aɪə`／`aʊə`／`ɔɪə` 後接 r 不可壓縮成一個音節：power `/ˈpaʊ.ɚ/`、employer `/ɪmˈplɔɪ.ɚ/`、supplier `/səˈplaɪ.ɚ/`。
  - 自我檢查：數「拼字裡有幾段 r」對上「音標裡有幾個 r／ɚ／ɝ」，前者多就是漏了（雙寫 r 的 arrive、borrow 是正常例外）。
- **同一個字全站同一寫法**：已出現在任何 `public/data-*.js` 的字，先 grep 並沿用完全相同的音標字串。例：`/kənˈvɪns/`、`/pɚˈsweɪd/`、`/ˈmɑː.nə.t̬ɚ/`。
- 寫完跑 `cd b2lab && node tools/check-ipa.js`（`--list` 看完整清單）。它擋：同字多寫法、缺音標、非美式符號或沒用 `/…/`、漏捲舌 r、自由文字裡的音標。真的需要例外時改腳本開頭的 `ALLOW` 表並寫明理由。
- check-ipa 指出同字有兩種寫法：**改成既有最多人用的寫法**（改你新寫的那筆）。

## 橫幅圖（不要手寫 SVG）

用 `node tools/genart.js spec.json out.txt` 產生，貼進 `public/data-art.js` 結尾 `};` 之前。橫幅只放**五圓圖示、不放文字**：

- `i` 給 **5 個**不重複的圖示（名稱用 `node tools/genart.js --list` 查），順序照文章敘事；`cap` 用「A → B → C → D → E。語法重點：…」五段式，不寫圖示名稱。
- **萬用圖示每張最多 1 個**：`star clock people doc chat talk phone house chart calendar question`。要畫具體東西（等公車用 `sign`、罷工用 `flag`、搬家用 `truck`/`sofa`）。
- 長得幾乎一樣的算同一個（見 genart.js 的 `SAME`）。
- 舊文章區塊同一圖示全站最多 4 次；同一天的橫幅之間圖示、配色都不重複；前兩批用過的圖示不能用（`node tools/check-art.js --free YYYYMMDD` 列出可用的）。
- **課本封面圖示全站唯一**（2026-11-11 使用者指定）：每課 `data-book.js` 的 `S[id][0]` 第一個圖示就是卡片封面，不能和任何其他課的封面相同（沒有冷卻期，永久唯一；`check-art.js` 會擋 2026-11-01 之後的新課）。新增課程先跑 `node tools/list-thumb-icons.js`，優先從「從沒用過」挑；封面也要貼切主題，不要拿第一個順手的圖示。
- 不夠貼切就補畫新圖示，做法見 `DAILY_TASK.md` 3.5.1，補完跑 `node tools/check-icons.js`，並回報新增了哪些。

## 驗證與收尾

- 驗證沒過不要 commit：`cd b2lab && node tools/check-ipa.js && node tools/check-art.js && node tools/check-icons.js`（各任務書另有自己的驗證）。
- `b2lab/public/sw.js` 的 `CACHE`（`b2lab-vNNN`）+1。
- 只 `git add` 有改的檔案（不要 `-A`），署名 `z00009eg9`，commit 後 push（CI 自動部署 b2lab）。
- 失敗就說清楚卡在哪一步，寧可不 commit，也不要推半套。
