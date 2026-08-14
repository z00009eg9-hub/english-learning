# B2 Read — 每日內容產生任務書

**每週三、五**由雲端排程各執行一次（當地早上七點）。網站有**兩位學習者**，都是母語中文的台灣成年人：

| 學習者 | 程度區間 | 背景 |
|---|---|---|
| **Anita** | B1 / B1+ / B2 | 在越南工作，品質工程師；情境多為辦公室、出差搭機、租屋、就醫、颱風 |
| **Tom** | A2 / B1 / B1+ | 初階學習者，需要短句與最基本的生活情境 |

## ⭐ 核心規則：每次執行要產生 **4 個程度**

兩人的程度區間**重疊在 B1 與 B1+**。網站「今日」分頁會把**該學習者區間內、當天所有程度**的內容全部列出來，
所以每次執行，文章／文法／聽力都要各產出 **A2、B1、B1+、B2 四份**：

| 程度 | Tom 看得到 | Anita 看得到 |
|---|:---:|:---:|
| A2 | ✅ | — |
| B1 | ✅ | ✅ |
| B1+ | ✅ | ✅ |
| B2 | — | ✅ |

結果：兩人各看到 3 篇文章、3 個文法單元、3 課聽力（中間兩級共用）。
**四個程度缺一不可**，只寫兩份等於任務失敗。

### id 命名規則（全站統一，四類都適用）

| 程度 | 文章 | 文法 | 聽力 |
|---|---|---|---|
| A2 | `d`+YYYYMMDD+`a2` | `dg`+YYYYMMDD+`a2` | `dl`+YYYYMMDD+`a2` |
| B1 | `d`+YYYYMMDD+`b1` | `dg`+YYYYMMDD+`b1` | `dl`+YYYYMMDD+`b1` |
| B1+ | `d`+YYYYMMDD+`b1p` | `dg`+YYYYMMDD+`b1p` | `dl`+YYYYMMDD+`b1p` |
| B2 | `d`+YYYYMMDD+`b2` | `dg`+YYYYMMDD+`b2` | `dl`+YYYYMMDD+`b2` |

（2026-08-14 以前的舊資料有「無後綴」的 id，那是舊制，保留不動即可，新產生的一律加後綴。）

**所有中文一律使用繁體中文台灣用語。**

---

## ⚠️ 版權鐵則（違反就等於這次任務失敗）

1. **絕對不要複製任何新聞或書籍的句子。** 你只能取「事實」，英文全部自己重寫。
2. `b2lab/syllabus.json` 是參照 *English Grammar in Use* 目錄整理出來的**教學大綱**。
   你只能用它決定「今天教哪個文法點」。解說、例句、練習題**全部必須自己原創撰寫**。
   不要引用、改寫或重製該書任何解說文字或習題。
3. 不要讀取或引用 repo 外的 PDF 教科書內容。

---

## 步驟

### 1. 讀取現況

```bash
cd b2lab
cat daily-state.json          # lastRun / nextKind / usedUnits / usedSources / usedTitles / topicRotation
cat syllabus.json             # 145 個單元的教學大綱
date +%Y-%m-%d                # 今天日期（用 UTC 即可，排程在當地早上七點跑）
```

也請先看過這幾個檔各一筆資料，**完全照著同樣的物件結構與中文語氣寫**：

- `b2lab/public/data-daily.js`（今天要追加的目標檔）
- `b2lab/public/data-reading.js`（文章的寫法範本）
- `b2lab/public/data-grammar.js`（文法單元的寫法範本）
- `b2lab/public/data-a2.js`（**A2 篇的寫法範本，寫 Tom 那篇前一定要看**）

**若 `lastRun` 已經等於今天** → 什麼都不要改，回報「今天已產生過」並結束。

### 2. 產生**四篇**文章 → 都插入 `DAILY.articles` 陣列的**最前面**

| 程度 | id | 字數 | 說明 |
|---|---|---|---|
| `A2` | `"d"+YYYYMMDD+"a2"` | 65–110 | 見下方「A2 篇的額外規則」 |
| `B1` | `"d"+YYYYMMDD+"b1"` | 120–160 | 見下方「B1 篇的額外規則」 |
| `B1+` | `"d"+YYYYMMDD+"b1p"` | 150–220 | 見下方「B1+／B2 篇的規則」 |
| `B2` | `"d"+YYYYMMDD+"b2"` | 240–300 | 見下方「B1+／B2 篇的規則」 |

**四篇都必須寫。** 建議讓四篇圍繞**同一個當日主題**（例如都寫颱風／都寫面試），
只是難度與句型層層加深——這樣兩位學習者在共用的 B1／B1+ 那層會有連貫感，
也方便 Anita 讀完 B1 再挑戰 B2、Tom 讀完 A2 再挑戰 B1+。

#### A2 篇的額外規則（最簡單）

- 主題從 `a2Topics` 取一個**不在 `usedA2Topics` 裡**的；全部用完就清空 `usedA2Topics` 重新輪。
- **一律原創，不上網抓新聞**（新聞英文對 A2 太難）。
- 規格：4 段、**每段 2–3 句、全文 65–110 字**、句子 8–14 字。
- 只用現在簡單式、過去簡單式、現在進行式、can / will、there is / there are。
  **不要用**完成進行式、被動語態、關係子句、分詞構句、假設語氣。
- 生活情境要具體（便利商店、公車、看醫生、打掃、點餐、請假），主角可以是 Tom 或第一人稱。
- `target` 5–6 個高頻字（每個都要有 `ex` 例句與 `exCn` 繁體中文翻譯）；`questions` 3 題（其中一題考本篇文法點）。
- `upgrade` 2 組，並且**一定要加 `upFrom:"A2", upTo:"B1"`** 兩個欄位——這樣網站標題才會顯示「A2 → B1 句型升級」。
- 參考範例：`b2lab/public/data-a2.js` 裡的 8 篇，語氣與長度照著寫。

#### B1 篇的額外規則（承接 A2，兩人共用）

- 主題跟 A2 篇同一個生活情境即可，但**換一個角度或換一個主角**，不要只是把 A2 篇加長。
- **一律原創，不上網抓新聞。**
- 規格：3–4 段、**全文 120–160 字**、句子 10–18 字。
- 可以用：過去簡單式、現在完成式（基礎）、because / so / when / but / and、比較級。
  **還不要用**：被動語態、關係代名詞 whom/whose、分詞構句、假設語氣、完成進行式。
- `target` 5–6 個字；`questions` 3 題；`upgrade` 2 組，加 `upFrom:"B1", upTo:"B1+"`。
- `kind:"orig"`，不要 `sourceUrl`。

#### B1+／B2 篇的規則（進階兩篇）

依 `nextKind` 決定 **B2 篇**的類型，做完後把 `nextKind` 翻到另一個值（news ⇄ original）。
主題從 `topicRotation` 取下一個（用完回到第一個）。**B1+ 篇一律原創**（避免同一天抓兩則新聞）。

**B1+ 篇（`"d"+YYYYMMDD+"b1p"`，150–220 字）**
- 完全原創，4 段。難度介於 B1 與 B2 之間：可以開始用被動語態、現在完成式＋被動、關係子句。
- 語言焦點要跟 B1 篇明顯不同（例如 B1 練連接詞、B1+ 就練被動或完成式）。
- `kind:"orig"`，不要 `sourceUrl`。`upgrade` 加 `upFrom:"B1+", upTo:"B2"`。

**B2 篇（`"d"+YYYYMMDD+"b2"`，240–300 字）**

`nextKind == "news"`
- 用 WebSearch 找一則**最近一個月內**的真實英文新聞，主題符合本次輪到的分類，優先與台灣或越南相關。
- 網址不可出現在 `usedSources` 裡。用 WebFetch 只取事實要點。
- 用你自己的英文把事實重寫成 **4 段、240–300 字**的 B2 文章。
- 欄位：`kind:"news"`、`source:"改寫自 <媒體名> 報導（YYYY/MM/DD）— 事實取自原文，英文由本站重寫"`、`sourceUrl:"<原文網址>"`

`nextKind == "original"`
- 不上網。依本次主題寫一篇**完全原創**的 B2 文章（4 段、240–300 字），情境貼近上述學習者的生活
  （台灣／越南、辦公室、租屋、就醫、搭機、颱風、通勤、存錢）。
- 欄位：`kind:"original"`，不要 `sourceUrl`。

**文章物件必填欄位**（照 data-daily.js 現有格式，四篇都適用）：

| 欄位 | 說明 |
|---|---|
| `id` | 見上方 id 命名規則表 |
| `date` | `"YYYY-MM-DD"` |
| `level` | `"A2"` / `"B1"` / `"B1+"` / `"B2"`（四篇各一，不可重複） |
| `topic` | 例 `"新聞·健康"` 或 `"職場"` |
| `words` | 實際英文字數 |
| `title` / `titleCn` | 英文標題與中譯 |
| `focus` | 這篇的文法焦點（一句話） |
| `intro` | 2–3 句中文導讀，說明要注意什麼結構 |
| `paras` | 4 個 `{en, cn}`，每段都要有完整中譯 |
| `target` | A2/B1 篇 5–6 個、B1+/B2 篇 7–9 個 `{w, ipa, pos, cn, def, ex, exCn}`；`def` 用簡單英文，`ex` 取自本文，`exCn` 是 `ex` 的繁體中文翻譯（一定要有） |
| `questions` | A2/B1 篇 3 題、B1+/B2 篇 4 題 `{q, opts, ans, expl}`；`opts` 4 個選項且以 `"A. "`–`"D. "` 開頭，`ans` 是 0-based 索引，`expl` 用中文並引用原文依據 |
| `upgrade` | 2 個 `{b1, b2, note}`：同一個意思的低階說法 vs. 高階說法，`note` 解釋為什麼升級了 |
| `upFrom` / `upTo` | A2 篇 `"A2"→"B1"`、B1 篇 `"B1"→"B1+"`、B1+ 篇 `"B1+"→"B2"`（B2 篇不用） |

### 3. 產生**四個文法單元**（A2 / B1 / B1+ / B2）→ 都插入 `DAILY.grammar` 陣列的**最前面**

**同一個文法主題、四種深度**是最理想的做法（例如今天都講「現在進行式」，
A2 講最基本的 be+V-ing、B1 講 vs 現在簡單式、B1+ 講暫時狀態與未來安排、B2 講語域與敘事用法）。
這樣兩位學習者在共用的 B1／B1+ 那層剛好銜接得上。

| 程度 | id | 取材 | 難度定位 |
|---|---|---|---|
| `A2` | `"dg"+YYYYMMDD+"a2"` | 從 `syllabus.json` 挑**編號最小、且不在 `usedUnitsTom` 裡**的單元 | 最基本的形式與用法，句子要短 |
| `B1` | `"dg"+YYYYMMDD+"b1"` | 同一個單元（或相鄰單元）往下延伸 | 加入對比、常見混淆點 |
| `B1+` | `"dg"+YYYYMMDD+"b1p"` | 從 `syllabus.json` 挑**編號最小、且不在 `usedUnits` 裡**的單元 | 進階用法、例外、細微語感差別 |
| `B2` | `"dg"+YYYYMMDD+"b2"` | 同上單元再往上推 | 語域、正式度、修辭效果、寫作應用 |

- 兩份進度指標各自獨立：`usedUnitsTom` 走 A2／B1 這條線，`usedUnits` 走 B1+／B2 這條線。
  兩份可以走到同一個單元編號沒關係。
- **四個 `level` 必須剛好是 A2、B1、B1+、B2 各一個，不可重複、不可缺。**
- 四個都完全原創撰寫，物件欄位照 data-grammar.js 的格式，另加 `date` 與 `unitNo`：

| 欄位 | 說明 |
|---|---|
| `id` | 見上方 id 命名規則表 |
| `date` / `unitNo` | 今天日期／syllabus 單元編號 |
| `level` | `"A2"` / `"B1"` / `"B1+"` / `"B2"`（四個各一） |
| `title` / `titleCn` | 英文文法點名稱與中文名稱 |
| `srcDays` | 空陣列 `[]` |
| `summary` | 一句話講清楚這個文法點的核心 |
| `sections` | 3–5 個 `{h, body?, bullets?, table?, examples?}`；`table` 是 `{head:[], rows:[[]]}`；`examples` 是 `{en, cn, note}`。至少要有一個對照表與 3 個例句 |
| `traps` | 3–4 個 `{bad, good, why}`，針對**中文母語者**最容易犯的錯 |
| `quiz` | 4 個 `{q, opts, ans, expl}`，格式同上，`expl` 用中文 |

寫作風格要求：解說用中文、例句用英文＋中譯、語氣像家教在講重點，不要像文法書條列。
一定要說明「為什麼會錯」，不要只說「這樣才對」。
**A2 那份要最淺白、句子最短；B2 那份可以談語域、寫作效果與修辭選擇。**

### 3.5 為今天的四篇文章各產生一張橫幅圖

**不要手寫 SVG**，用現成的產生器（裡面有 68 個圖示與 7 套配色，風格才會跟其他文章一致）：

```bash
cd b2lab
node tools/genart.js --list          # 先看有哪些配色與圖示可用
```

寫一個暫時的規格檔（**四篇各一筆**，id 要跟文章的 id 完全一致）：

```json
{
  "d20260814a2":  {"p":"teal", "i":["store","bottle","clock"],
    "en":"AT THE MORNING MARKET", "cn":"在早市",
    "tag":"one short sentence in English",
    "cap":"中文圖說：說明圖裡的資訊來自文章哪一句"},
  "d20260814b1":  {"p":"warm",  "i":["...","...","..."], "en":"...", "cn":"...", "tag":"...", "cap":"..."},
  "d20260814b1p": {"p":"green", "i":["...","...","..."], "en":"...", "cn":"...", "tag":"...", "cap":"..."},
  "d20260814b2":  {"p":"blue",  "i":["plane","phone","people"], "en":"...", "cn":"...", "tag":"...", "cap":"..."}
}
```

規則：
- `p` 配色依主題挑：天災／夜晚用 `night`、健康用 `rose`、金錢與環境用 `green`、
  職場與科技用 `blue` 或 `teal`、生活與飲食用 `warm`、心理與抽象用 `violet`。
  **同一天的四篇要用四套不同的配色**（剛好 7 套可挑，不會不夠）。
- `i` 挑 **3 個**能代表文章內容的圖示（只能用 `--list` 列出來的名稱）。
- `en` 是英文標題，太長會自動縮小字級，但**盡量不要超過 30 個字元**。
- `cap` 必須說明「圖裡的資訊出自文章哪裡」，不要寫成純裝飾的句子。

產生並併入：

```bash
node tools/genart.js /tmp/spec-today.json /tmp/art-today.txt
# 把 /tmp/art-today.txt 的內容貼進 public/data-art.js：
# 在最後一筆的 } 後面補上逗號，再把內容貼在結尾的 }; 之前
```

驗證（**一定要跑**）：

```bash
cd b2lab/public
node -e "global.window={};require('./data-art.js');
const A=window.ART, ids=Object.keys(A);
console.log('總圖數', ids.length);
ids.forEach(k=>{const v=A[k];
  if(!/^<svg/.test(v.svg.trim())) throw k+' 不是 SVG';
  if(!v.cap) throw k+' 缺圖說';
  if(/undefined|NaN/.test(v.svg)) throw k+' 有未展開的值';
  const o=(v.svg.match(/<(svg|g|text)\b/g)||[]).length, c=(v.svg.match(/<\/(svg|g|text)>/g)||[]).length;
  if(o!==c) throw k+' 標籤沒配對';
});
console.log('OK');"
```

⚠️ 只能畫**橫幅**。文章裡如果有明確數字想畫成圖表，不要自己編數據——沒有把握就只做橫幅。

### 3.6 追加**四課聽力**（A2 / B1 / B1+ / B2）→ 都插入 `public/data-listen.js` 的 `lessons` 陣列**最前面**

網站「今日」分頁會列出**該學習者程度區間內、當天所有程度**的聽力，所以每次執行要補四課：

| 程度 | 影片來源 | id |
|---|---|---|
| `A2` | VOA Let's Learn English **Level 1** | `"dl"+YYYYMMDD+"a2"` |
| `B1` | VOA Let's Learn English **Level 2**（較前面的課次） | `"dl"+YYYYMMDD+"b1"` |
| `B1+` | VOA Let's Learn English **Level 2**（較後面的課次） | `"dl"+YYYYMMDD+"b1p"` |
| `B2` | **TED-Ed** 或 VOA *Everyday Grammar* / *News Words*（見下方 B2 專用規則） | `"dl"+YYYYMMDD+"b2"` |

- VOA 三課都從**編號最小、且不在 `usedVoa` 裡**的那一課開始（`usedVoa` 用 `"L1-7"`、`"L2-3"` 這種代號記錄「第幾級第幾課」）。B1 與 B1+ 同樣抽 Level 2，但**不可以是同一課**。
- **四課都必須有 `date:"YYYY-MM-DD"` 欄位**（今天日期），網站才會把它當成今天的新聽力顯示。
- 四課的 `level` 必須剛好是 A2、B1、B1+、B2 各一個。

**⚠️ 影片鐵則（做不到就跳過那一課，不要硬編）**

1. **YouTube 影片 ID 一定要是真的。** 先 WebFetch 該課的 VOA 課程頁（`learningenglish.voanews.com` 上的 *Let's Learn English* 對應課次），從頁面裡拿到它嵌入的 YouTube 影片 ID，**再用 oEmbed 驗證存在**：
   ```bash
   curl -s "https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=<ID>&format=json"
   ```
   有回傳 JSON（含 `title`、`author_name`）才算通過；查不到就換下一課，**絕對不要自己猜 ID**。
2. **對白只能引用該頁面上公開的逐字稿**（VOA 是美國政府出版物／公共領域；TED-Ed 為 CC BY-NC-ND）。`keyLines` 取幾句真實對白即可；`intro`、`tip`、`pre`、`questions` 全部自己原創撰寫。
3. 理解題的答案必須真的能在逐字稿裡找到依據，`expl` 要引用對白。**沒把握答案就換一課**，不要編。

**B2 那一課的專用規則**

VOA *Let's Learn English* 只有 Level 1 與 Level 2，沒有更高的級別，所以 B2 要另外找：

- 優先用 **TED-Ed**（`ed.ted.com`）的科普短片，主題盡量呼應當天四篇文章的主題。
  `source:"TED-Ed（Creative Commons BY-NC-ND 4.0）"`、`sourceUrl` 填該課程頁網址。
- 次選 VOA 的 *Everyday Grammar TV* 或 *News Words* 系列（一樣是公共領域）。
- 一樣要 oEmbed 驗證 YouTube ID，`usedVoa` 用 `"TED-<slug>"` 這種代號記錄避免重複。
- **如果找不到能驗證的 B2 影片，就跳過 B2 那一課**，其他三課照常寫，並在回報時說明。

物件欄位**完全照 `public/data-listen.js` 現有的一筆**（先讀一筆當範本），另外：

| 欄位 | 說明 |
|---|---|
| `id` | 見上方 id 命名規則表 |
| `date` | `"YYYY-MM-DD"`（今天；一定要有，網站靠它挑出今天的新聽力） |
| `level` | `"A2"` / `"B1"` / `"B1+"` / `"B2"`（四課各一） |
| `yt` | 上面驗證過的真實 YouTube ID |
| `minutes` | 影片長度（分鐘，取整數） |
| `title` / `titleCn` | 該課英文標題與中譯 |
| `series` | 例 `"VOA Let's Learn English · Level 2 · Lesson 5"` |
| `topic` / `focus` | 主題與這課的語言焦點（一句話） |
| `source` | VOA 課：`"VOA Learning English（美國之音，美國政府出版物／公共領域）"`；TED-Ed：`"TED-Ed（Creative Commons BY-NC-ND 4.0）"` |
| `sourceUrl` | 該課程頁網址 |
| `intro` / `tip` | 中文導讀與聽力策略提示（原創） |
| `pre` | 5–7 個 `{w, ipa, cn, def}` 聽前單字，`def` 用簡單英文 |
| `keyLines` | 5–7 句 `{en, cn}`，`en` 取自真實對白、`cn` 自己翻 |
| `questions` | 4–5 個 `{q, opts, ans, expl}`，格式同文章題，`ans` 為 0-based |

### 4. 更新 `b2lab/daily-state.json`

- `lastRun` = 今天
- `nextKind` 翻面
- `usedUnits` 加入 B1+／B2 這條線今天用掉的文法單元編號；`usedUnitsTom` 加入 A2／B1 這條線今天用掉的
- `usedSources` 加入今天的新聞網址（original 那天不用加）
- `usedTitles` 加入今天**四篇**的標題
- `topicRotation` 把用掉的主題移到陣列尾端（保持輪替）
- `usedA2Topics` 加入今天 A2 篇用掉的主題（若已包含全部 `a2Topics`，就清空重新輪）
- `usedVoa` 加入今天補的**四課**代號（例 `"L1-9"`、`"L2-5"`、`"L2-6"`、`"TED-how-do-hurricanes-form"`）。**某一課若因為找不到／驗證不過而跳過，就只加成功的那幾課、缺的下次再補。**

### 5. 驗證（**沒過就不要 commit**）

```bash
cd b2lab/public
node -e "global.window={};require('./data-daily.js');
const d=window.DAILY, TODAY=new Date().toISOString().slice(0,10);
const LV=['A2','B1','B1+','B2'];
const WORDS={'A2':[60,120],'B1':[110,175],'B1+':[140,240],'B2':[230,320]};
const UP={'A2':['A2','B1'],'B1':['B1','B1+'],'B1+':['B1+','B2']};
const todays=d.articles.filter(a=>a.date===TODAY);
if(todays.length!==4) throw '今天應該有四篇文章（A2/B1/B1+/B2），實際 '+todays.length+' 篇';
LV.forEach(l=>{ if(todays.filter(a=>a.level===l).length!==1) throw '文章缺少或重複 '+l+' 這一級'; });
todays.forEach(a=>{
  const w=a.paras.reduce((n,p)=>n+p.en.split(/\s+/).filter(Boolean).length,0);
  const [lo,hi]=WORDS[a.level];
  if(w<lo||w>hi) throw a.level+' 篇字數應在 '+lo+'–'+hi+'，實際 '+w;
  if(a.words!==w) throw a.id+' words 欄位與實際字數不符（寫 '+a.words+'，實際 '+w+'）';
  if(UP[a.level]&&(a.upFrom!==UP[a.level][0]||a.upTo!==UP[a.level][1])) throw a.level+' 篇要有 upFrom:'+UP[a.level][0]+' / upTo:'+UP[a.level][1];
  if(a.paras.length<3) throw a.id+' 段落不足';
  if(!a.paras.every(p=>p.en&&p.cn)) throw a.id+' 有段落缺中譯';
  if(a.questions.length<3) throw a.id+' 題目不足';
  a.questions.forEach(q=>{if(q.ans<0||q.ans>=q.opts.length) throw a.id+' ans 索引錯誤: '+q.q});
  if(a.target.length<5) throw a.id+' 重點字不足';
  a.target.forEach(t=>{if(t.ex&&!t.exCn) throw a.id+' 重點字缺 exCn 中譯: '+t.w});
  if(a.upgrade.length<2) throw a.id+' 升級句不足';
});
const grams=d.grammar.filter(x=>x.date===TODAY);
if(grams.length!==4) throw '今天應該有四個文法單元（A2/B1/B1+/B2），實際 '+grams.length;
LV.forEach(l=>{ if(grams.filter(g=>g.level===l).length!==1) throw '文法缺少或重複 '+l+' 這一級'; });
grams.forEach(g=>{
  if(g.quiz.length<4) throw g.id+' 文法題目不足';
  g.quiz.forEach(q=>{if(q.ans<0||q.ans>=q.opts.length) throw g.id+' 文法 ans 索引錯誤: '+q.q});
  if(!g.sections.length||!g.traps.length) throw g.id+' 文法單元不完整';
});
const byLv=l=>todays.find(a=>a.level===l);
console.log('OK 文章:', LV.map(l=>l+' '+byLv(l).id+' ('+byLv(l).words+'字)').join(' | '));
console.log('OK 文法:', LV.map(l=>l+' '+grams.find(g=>g.level===l).titleCn).join(' | '));"
node -e "JSON.parse(require('fs').readFileSync('../daily-state.json','utf8'));console.log('state ok')"
```

也驗證今天補的聽力（每課都要有今天日期；沒過就不要 commit 聽力那步的改動）：

```bash
cd b2lab/public
node -e "global.window={};require('./data-listen.js');
const L=window.LISTEN.lessons, TODAY=new Date().toISOString().slice(0,10);
const todays=L.filter(x=>x.date===TODAY);
if(todays.length<3) throw '今天聽力至少要有 A2/B1/B1+ 三課，實際 '+todays.length+' 課';
['A2','B1','B1+'].forEach(l=>{ if(todays.filter(x=>x.level===l).length!==1) throw '聽力缺少或重複 '+l+' 這一級'; });
if(todays.filter(x=>x.level==='B2').length>1) throw '聽力 B2 重複';
if(!todays.some(x=>x.level==='B2')) console.warn('⚠ 今天沒有 B2 聽力（可接受，但要在回報裡說明原因）');
todays.forEach(x=>{
  if(!/^dl\d{8}(a2|b1|b1p|b2)?$/.test(x.id)) throw 'id 格式錯: '+x.id;
  if(!/^[A-Za-z0-9_-]{11}$/.test(x.yt)) throw 'YouTube ID 格式怪怪的: '+x.yt;
  if(!x.keyLines.length||x.questions.length<4) throw x.id+' 聽力內容不完整';
  x.questions.forEach(q=>{if(q.ans<0||q.ans>=q.opts.length) throw x.id+' ans 索引錯誤: '+q.q});
});
const yts=todays.map(x=>x.yt);
if(new Set(yts).size!==yts.length) throw '今天有兩課用到同一支影片';
console.log('listen ok', todays.map(x=>x.id+'('+x.level+','+x.yt+')').join(' | '));"
```

### 6. commit 並 push

```bash
git add b2lab/public/data-daily.js b2lab/public/data-art.js b2lab/public/data-listen.js b2lab/daily-state.json
git commit -m "Daily content YYYY-MM-DD: 4 levels (A2/B1/B1+/B2) — <當日主題>"
git push origin main
```

push 之後 `.github/workflows/deploy-b2lab.yml` 會自動部署到 https://english-b2-lab.web.app

### 7. 回報

用繁體中文簡短回報，**依程度列成一張表**：

| 程度 | 文章（標題／字數／類型） | 文法單元（中文名／syllabus 編號） | 聽力（來源／課次／YouTube ID） |
|---|---|---|---|
| A2 | | | |
| B1 | | | |
| B1+ | | | |
| B2 | | | |

另外補充：
- 當日共同主題是什麼
- B2 篇是新聞改寫還是原創；新聞改寫要附原文網址
- `usedUnits` 與 `usedUnitsTom` 各還剩幾個單元沒教
- 四張橫幅各用了哪套配色與哪三個圖示
- 有跳過的項目（例如 B2 聽力找不到可驗證的影片）要說明原因

最後提醒一句：Tom 會看到 A2／B1／B1+ 三份，Anita 會看到 B1／B1+／B2 三份。

若任何步驟失敗，說清楚卡在哪一步、不要留下半套的檔案
（寧可完全不 commit，也不要只寫兩篇就推上去——四個程度是硬性要求）。
