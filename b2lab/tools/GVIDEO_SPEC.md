# B2 Read 文法影片解說 — 製作規格

每個文法單元一支 3–4 分鐘的影片：**中文旁白講解＋英文例句**。播放器沿用課本影片版（`index.html` 的 `vd*`）。
**範本：`b2lab/public/gvideo/dg20261014b1.js`**（使用者已確認）。動手前先完整讀一遍，照它的結構、句數、語氣、插圖量來做。

## 檔案

- 一個單元一個檔：`b2lab/public/gvideo/<單元 id>.js`，裡面只放這一個單元
- 開頭固定：
  ```js
  window.GVIDEO = window.GVIDEO || {};
  window.GVIDEO_ART = window.GVIDEO_ART || {};
  ```
  接著一個 IIFE 放插圖（`Object.assign(window.GVIDEO_ART, {...})`），最後 `window.GVIDEO['<id>'] = {...}`
- 清單 `gvideo/index.js` 是 `node b2lab/tools/build-gvideo-index.js` 產生的，不要手改
- 寫完一定要跑 `node b2lab/tools/check-gvideo.js <id>`，全部 ✓ 才算完成

## 單元內容在哪裡

| id | 檔案 | 位置 |
|---|---|---|
| `dg…` 每日文法 | `data-daily.js` | `window.DAILY.grammar[]` |
| `g01`–`g15` | `data-grammar.js` | `window.GRAMMAR[]` |
| `ga01`–`ga03` | `data-a2.js` | `window.A2.grammar[]` |
| `gv01` | `data-gramvis.js` | `window.GRAMVIS[]` |

另外 `data-gvplus.js` 的 `window.GVPLUS[id]` 是同一頁的視覺化疊加內容（一句話、意義地圖、情境卡…），**也算文法頁內容**。
用 node 讀出來看（`global.window={}; require('./data-daily.js')`），把單元的 summary、sections、traps、GVPLUS 都讀完再寫。

## 內容鐵則

1. **文法規則必須跟 Grammar in Use 一致**（每日文法看 `unitNo` 對應的單元）。學習者沒有能力自己判斷錯誤，不確定的說法寧可不講。
2. **不放常見錯誤、不放小測驗**（使用者指定：錯句會讓人錯亂）。全片只出現正確的英文。不用 `fix`、`quiz` 畫面。
3. **例句全部自己寫**：不可跟文法頁（單元本體＋GVPLUS）有連續 8 個字相同（檢查器會擋）；句型骨架（did you use to、how long has it been since）照常用，不要為了閃檢查器硬塞字，但整句的內容要是新的。
4. 同一個 Grammar in Use 單元有 A2／B1／B1+／B2 四個程度，各自一支影片：**情境、人物、例句都要不同**，難度貼合該程度（A2 用短句與日常字；B2 可以用職場、正式語氣）。
5. 中文旁白用自然的台灣口語，短句、一句講一件事；不要學術腔。旁白裡提到英文時只放短片語（例如 `I'm helping`），**不要在 zh 裡放帶句點的英文整句**（中文語音會停頓）。
6. 英文是美式英文，跟網站其他地方一致。

## 段落與句數（照範本，約 44–48 句）

| ch | 段落 | 句數 | 畫面 |
|---|---|---|---|
| 0 | 開場 | 1 | `title` |
| 1 | 核心觀念 | 7–9 | `timeline`（時態類）或 `cards`（其他文法）；旁白介紹一項 → 英文例句示範一項 |
| 2 | 句型 | 3–4 | `pattern`；可加 1 句 `family`（最多 4 項） |
| 3 | 情境對話 | 10 | `scene`，**每句一張專屬插圖**，A／T 對話＋旁白點評 |
| 4 | 左右比較 | 6–7 | `vs`（`sm:true` 放整句；`on:'a'/'b'` 逐句亮）兩組 |
| 5 | 判斷流程 | 6–8 | `flow`，問題一題一題亮（`at` 1→N），每題後面接一句英文例句 |
| 6 | 換你說 | 7 | `speak`：開場 `n:0` 一句，3 題 ×（情境句 `pause:5000` ＋答案句 `show:true`） |
| 7 | 總結 | 2 | `flow`（`at` 全部、`all:true`、`kick:'Summary 總結'`）＋ `end` |

檢查器估計長度要在 170–290 秒（中文約每秒 4.3 字、英文每秒 2.4 字）。

## 欄位

- 單元：`kind:'gram'`、`date`（單元日期，沒有就留空字串）、`title`（英文短標）、`titleCn`、`titleArt`（3 張）、`scene`（情境地點標籤，例如 `'週末計畫 Weekend plans'`）、`sceneArt`、`cast`、`expr`、`chapters`（8 段）、`timeline` 或 `cards`、`flow`、`lines`
- `cast` 固定：`N:{name:'旁白',voice:'n'}`、`A:{name:<女生英文名>,voice:'f'}`、`T:{name:<男生英文名>,voice:'m'}`
- 句子：旁白 `{ch, sp:'N', zh:'…', hi?, vis}`；例句 `{ch, sp:'A'|'T', en:'…', cn:'…', hi?, vis}`
- `hi`：`[{t:句中原文片段, cn?:中文, k:expr 的 key, c:顏色}]`，`t` 必須真的出現在 zh 或 en 裡
- `expr`：2–3 個重點卡 `{t, cn, ex, exCn, note}`，`ex` 也是自己寫的新句子
- **顏色固定對應**（timeline／cards／flow 的第 1、2、3 項＝c1 藍、c2 綠、c3 玫瑰）：`hi.c` 用 3＝第 1 項（藍）、4＝第 2 項（綠）、2＝第 3 項（玫瑰）、1＝其他
- `timeline`：`[{x:38|62|86, art, lab, who, open?}]` 2–3 項，`lab` ≤ 6 字、`who` ≤ 6 字；畫面 `{type:'timeline', show, lit?, pop?, dec?, decText?}`（`dec` 畫出「現在 → 第 2 項」的虛線括號，預設文字「說話的這一刻，已經定好了」，概念不同就用 `decText` 改，≤ 14 字）
- `timelineNow`：「現在」在時間軸上的位置（%，預設 8＝最左邊）。**過去式／完成式單元**把它放中間或右邊（例如 70），項目的 `x` 就能放在「現在」左邊表示過去
- `cards`：`[{art, lab, who}]` 2–3 項，`lab` ≤ 8 字、`who` ≤ 12 字；可加 `cardsKick`；畫面 `{type:'cards', show, lit?, pop?, kick?}`
- `flow`：`[{q, a, en}]` 2–3 題，`q` ≤ 18 字、`a` ≤ 6 字、`en` 是公式（例如 `'主詞 + be + V-ing + 時間'`）
- `pattern`：`rows:[{lab, blocks:[{t, k:'s'|'v'|'o'|'n'|'x', add?}]}]`、`kick`、`note?`
- `speak`：情境句 `{type:'speak', n, sit}`（sit＝跟 zh 同一句情境）；答案句 `{type:'speak', n, show:true, sit, a}`，`a` 必須跟該句 `en` 完全一樣

## 插圖

- 每支影片約 13 張：`titleArt` 3 張（可兼作 timeline／cards 的圖）＋**情境對話 10 句各一張不重複**（檢查器要求 ≥ 9）
- 名稱一律 **`<單元 id>_名稱`**，例如 `dg20261009a2_bus`；不可跟其他檔重名
- 畫法照範本的 IIFE：色票 `D A C L R B G Y S`、`st`、`th(w)`、`svg()`、`txt()`、`qb()`、`chk()`、`cal()` 直接複製過去用
- `viewBox="0 0 200 150"`；貼紙線稿風：深咖啡外框 `#2b2118`＋東西本來的顏色
- **文字不畫進 SVG**，只允許 6 字內的極短標記（`5:00`、`SAT`、`OK!`、`?`）
- 同一個元素不可寫兩次 `stroke-width`／`stroke`（後者會失效）；要別的線寬用 `th(w)`
- 提問句用橘色問號徽章 `qb(cx,cy)`；回答句畫該句具體的東西

## 完成後（批次負責人做）

1. `node b2lab/tools/build-gvideo-index.js`
2. `node b2lab/tools/check-gvideo.js`
3. `D:\b2lab-audio` 跑 `node build.js`，commit、push 後 `npx firebase-tools deploy --only hosting --project english-b2-lab`
4. `b2lab/public/sw.js` 版本號 +1，commit、push（CI 自動部署網站）
