# B2 Read — 每日內容產生任務書

**每週三、五**由雲端排程各執行一次（當地早上七點）。網站有**兩位學習者**，都是母語中文的台灣成年人：

| 學習者 | 程度區間 | 背景 |
|---|---|---|
| **Anita** | B1 → B2 | 在越南工作，品質工程師；情境多為辦公室、出差搭機、租屋、就醫、颱風 |
| **Tom** | A2 → B1+ | 初階學習者，需要短句與最基本的生活情境 |

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

### 2. 產生**兩篇**文章 → 都插入 `DAILY.articles` 陣列的**最前面**

這個網站有兩位學習者，程度差很多，所以每天要各寫一篇：

| 給誰 | 程度 | id | 說明 |
|---|---|---|---|
| **Tom** | `A2` | `"d"+YYYYMMDD+"a2"` | 見下方「A2 篇的額外規則」 |
| **Anita** | `B1+` 或 `B2` | `"d"+YYYYMMDD` | 依 `nextKind` 決定新聞改寫或原創 |

網站會依目前選的學習者自動挑出符合程度的那一篇，所以**兩篇都必須寫**，不要只寫一篇。

#### A2 篇的額外規則（Tom）

- 主題從 `a2Topics` 取一個**不在 `usedA2Topics` 裡**的；全部用完就清空 `usedA2Topics` 重新輪。
- **一律原創，不上網抓新聞**（新聞英文對 A2 太難）。
- 規格：4 段、**每段 2–3 句、全文 65–110 字**、句子 8–14 字。
- 只用現在簡單式、過去簡單式、現在進行式、can / will、there is / there are。
  **不要用**完成進行式、被動語態、關係子句、分詞構句、假設語氣。
- 生活情境要具體（便利商店、公車、看醫生、打掃、點餐、請假），主角可以是 Tom 或第一人稱。
- `target` 5–6 個高頻字（每個都要有 `ex` 例句與 `exCn` 繁體中文翻譯）；`questions` 3 題（其中一題考本篇文法點）。
- `upgrade` 2 組，並且**一定要加 `upFrom:"A2", upTo:"B1"`** 兩個欄位——這樣網站標題才會顯示「A2 → B1 句型升級」。
- 參考範例：`b2lab/public/data-a2.js` 裡的 8 篇，語氣與長度照著寫。

#### Anita 篇的規則

依 `nextKind` 決定類型，做完後把 `nextKind` 翻到另一個值（news ⇄ original）。
主題從 `topicRotation` 取下一個（用完回到第一個）。

**`nextKind == "news"`**
- 用 WebSearch 找一則**最近一個月內**的真實英文新聞，主題符合本次輪到的分類，優先與台灣或越南相關。
- 網址不可出現在 `usedSources` 裡。用 WebFetch 只取事實要點。
- 用你自己的英文把事實重寫成 **4 段、200–280 字**的 B1+ 或 B2 文章。
- 欄位：`kind:"news"`、`source:"改寫自 <媒體名> 報導（YYYY/MM/DD）— 事實取自原文，英文由本站重寫"`、`sourceUrl:"<原文網址>"`

**`nextKind == "original"`**
- 不上網。依本次主題寫一篇**完全原創**的 B2 文章（4 段、250–300 字），情境貼近上述學習者的生活
  （台灣／越南、辦公室、租屋、就醫、搭機、颱風、通勤、存錢）。
- 欄位：`kind:"original"`，不要 `sourceUrl`。

**文章物件必填欄位**（照 data-daily.js 現有格式）：

| 欄位 | 說明 |
|---|---|
| `id` | `"d"` + YYYYMMDD |
| `date` | `"YYYY-MM-DD"` |
| `level` | `"B1+"` 或 `"B2"` |
| `topic` | 例 `"新聞·健康"` 或 `"職場"` |
| `words` | 實際英文字數 |
| `title` / `titleCn` | 英文標題與中譯 |
| `focus` | 這篇的文法焦點（一句話） |
| `intro` | 2–3 句中文導讀，說明要注意什麼結構 |
| `paras` | 4 個 `{en, cn}`，每段都要有完整中譯 |
| `target` | 7–9 個 `{w, ipa, pos, cn, def, ex, exCn}`；`def` 用簡單英文，`ex` 取自本文，`exCn` 是 `ex` 的繁體中文翻譯（一定要有） |
| `questions` | 4 個 `{q, opts, ans, expl}`；`opts` 4 個選項且以 `"A. "`–`"D. "` 開頭，`ans` 是 0-based 索引，`expl` 用中文並引用原文依據 |
| `upgrade` | 2 個 `{b1, b2, note}`：同一個意思的 B1 說法 vs. B2 說法，`note` 解釋為什麼升級了 |

### 3. 產生**兩個文法單元**（兩位學習者各一個）→ 都插入 `DAILY.grammar` 陣列的**最前面**

兩位學習者程度差很多，所以每次各給一個**符合自己程度**的文法單元。網站會依目前選的學習者，挑出程度最接近的那一個（Tom 取較低階、Anita 取較高階），所以**兩個都必須寫、而且 Tom 的一定要比 Anita 的簡單**：

| 給誰 | id | 取材 | `level` |
|---|---|---|---|
| **Tom** | `"dg"+YYYYMMDD+"a2"` | 從 `syllabus.json` 挑**編號最小、且不在 `usedUnitsTom` 裡**的單元（都是基礎文法，適合 A2/B1） | `"A2"` 或 `"B1"` |
| **Anita** | `"dg"+YYYYMMDD` | 從 `syllabus.json` 挑**編號最小、且不在 `usedUnits` 裡**的單元 | `"B1+"` 或 `"B2"` |

- 兩人各有自己的進度指標：Tom 用 `usedUnitsTom`（從第 1 課開始走），Anita 用 `usedUnits`（沿用原本進度）。兩份指標各自獨立、可以走到同一個單元編號沒關係。
- **Tom 的 `level` 一定要 ≤ B1，Anita 的一定要 ≥ B1+**（網站靠程度高低分辨誰是誰；Tom 的內容也要用更短的句子、更基礎的解說）。
- 兩個都完全原創撰寫，物件欄位照 data-grammar.js 的格式，另加 `date` 與 `unitNo`：

| 欄位 | 說明 |
|---|---|
| `id` | Tom：`"dg"+YYYYMMDD+"a2"`；Anita：`"dg"+YYYYMMDD` |
| `date` / `unitNo` | 今天日期／syllabus 單元編號 |
| `level` | Tom：`"A2"` 或 `"B1"`；Anita：`"B1+"` 或 `"B2"` |
| `title` / `titleCn` | 英文文法點名稱與中文名稱 |
| `srcDays` | 空陣列 `[]` |
| `summary` | 一句話講清楚這個文法點的核心 |
| `sections` | 3–5 個 `{h, body?, bullets?, table?, examples?}`；`table` 是 `{head:[], rows:[[]]}`；`examples` 是 `{en, cn, note}`。至少要有一個對照表與 3 個例句 |
| `traps` | 3–4 個 `{bad, good, why}`，針對**中文母語者**最容易犯的錯 |
| `quiz` | 4 個 `{q, opts, ans, expl}`，格式同上，`expl` 用中文 |

寫作風格要求：解說用中文、例句用英文＋中譯、語氣像家教在講重點，不要像文法書條列。
一定要說明「為什麼會錯」，不要只說「這樣才對」。**Tom 那份要更淺白、句子更短。**

### 3.5 為今天的兩篇文章各產生一張橫幅圖

**不要手寫 SVG**，用現成的產生器（裡面有 68 個圖示與 7 套配色，風格才會跟其他文章一致）：

```bash
cd b2lab
node tools/genart.js --list          # 先看有哪些配色與圖示可用
```

寫一個暫時的規格檔（兩篇各一筆，id 要跟文章的 id 完全一致）：

```json
{
  "d20260814a2": {"p":"teal", "i":["store","bottle","clock"],
    "en":"AT THE MORNING MARKET", "cn":"在早市",
    "tag":"one short sentence in English",
    "cap":"中文圖說：說明圖裡的資訊來自文章哪一句"},
  "d20260814":   {"p":"blue", "i":["plane","phone","people"],
    "en":"...", "cn":"...", "tag":"...", "cap":"..."}
}
```

規則：
- `p` 配色依主題挑：天災／夜晚用 `night`、健康用 `rose`、金錢與環境用 `green`、
  職場與科技用 `blue` 或 `teal`、生活與飲食用 `warm`、心理與抽象用 `violet`。
  **同一天的兩篇不要用同一套配色。**
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

### 3.6 追加**兩課聽力**（兩位學習者各一課）→ 都插入 `public/data-listen.js` 的 `lessons` 陣列**最前面**

網站「今日」分頁在每週三、五會顯示**該學習者程度裡最新的那一課聽力**，所以每次執行都要讓**兩位學習者各多一課全新的聽力**（跟文章一樣，一次各寫一篇）：

| 給誰 | 系列 | 程度 | id |
|---|---|---|---|
| **Tom** | VOA Let's Learn English **Level 1** | `A2` | `"dl"+YYYYMMDD+"a2"` |
| **Anita** | VOA Let's Learn English **Level 2** | `B1` 或 `B1+` | `"dl"+YYYYMMDD` |

- 每個系列都從**編號最小、且不在 `usedVoa` 裡**的那一課開始（`usedVoa` 用 `"L1-7"`、`"L2-3"` 這種代號記錄「第幾級第幾課」）。
- **兩課都必須有 `date:"YYYY-MM-DD"` 欄位**（今天日期），網站才會把它當成今天的新聽力顯示。

**⚠️ 影片鐵則（做不到就跳過這一步，不要硬編）**

1. **YouTube 影片 ID 一定要是真的。** 先 WebFetch 該課的 VOA 課程頁（`learningenglish.voanews.com` 上的 *Let's Learn English* 對應課次），從頁面裡拿到它嵌入的 YouTube 影片 ID，**再用 oEmbed 驗證存在**：
   ```bash
   curl -s "https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=<ID>&format=json"
   ```
   有回傳 JSON（含 `title`、`author_name` 為 VOA Learning English）才算通過；查不到就換下一課，**絕對不要自己猜 ID**。
2. **對白只能引用該 VOA 頁面上公開的逐字稿**（VOA 是美國政府出版物／公共領域）。`keyLines` 取幾句真實對白即可；`intro`、`tip`、`pre`、`questions` 全部自己原創撰寫。
3. 理解題的答案必須真的能在逐字稿裡找到依據，`expl` 要引用對白。**沒把握答案就換一課**，不要編。

物件欄位**完全照 `public/data-listen.js` 現有的一筆**（先讀一筆當範本），另外：

| 欄位 | 說明 |
|---|---|
| `id` | Tom：`"dl"+YYYYMMDD+"a2"`；Anita：`"dl"+YYYYMMDD` |
| `date` | `"YYYY-MM-DD"`（今天；一定要有，網站靠它挑出今天的新聽力） |
| `level` | Level 2 → `"B1"` 或 `"B1+"`；Level 1 → `"A2"` |
| `yt` | 上面驗證過的真實 YouTube ID |
| `minutes` | 影片長度（分鐘，取整數） |
| `title` / `titleCn` | 該課英文標題與中譯 |
| `series` | 例 `"VOA Let's Learn English · Level 2 · Lesson 5"` |
| `topic` / `focus` | 主題與這課的語言焦點（一句話） |
| `source` | `"VOA Learning English（美國之音，美國政府出版物／公共領域）"` |
| `sourceUrl` | 該 VOA 課程頁網址 |
| `intro` / `tip` | 中文導讀與聽力策略提示（原創） |
| `pre` | 5–7 個 `{w, ipa, cn, def}` 聽前單字，`def` 用簡單英文 |
| `keyLines` | 5–7 句 `{en, cn}`，`en` 取自真實對白、`cn` 自己翻 |
| `questions` | 4–5 個 `{q, opts, ans, expl}`，格式同文章題，`ans` 為 0-based |

### 4. 更新 `b2lab/daily-state.json`

- `lastRun` = 今天
- `nextKind` 翻面
- `usedUnits` 加入 Anita 今天用掉的文法單元編號；`usedUnitsTom` 加入 Tom 今天用掉的文法單元編號
- `usedSources` 加入今天的新聞網址（original 那天不用加）
- `usedTitles` 加入今天**兩篇**的標題
- `topicRotation` 把用掉的主題移到陣列尾端（保持輪替）
- `usedA2Topics` 加入今天 A2 篇用掉的主題（若已包含全部 `a2Topics`，就清空重新輪）
- `usedVoa` 加入今天補的**兩課**代號（例 `"L1-9"` 與 `"L2-5"`）。**某一課若因為找不到／驗證不過而跳過，就只加成功的那課、另一課下次再補。**

### 5. 驗證（**沒過就不要 commit**）

```bash
cd b2lab/public
node -e "global.window={};require('./data-daily.js');
const d=window.DAILY, TODAY=new Date().toISOString().slice(0,10);
const todays=d.articles.filter(a=>a.date===TODAY);
if(todays.length!==2) throw '今天應該有兩篇文章（A2 + B1+/B2），實際 '+todays.length+' 篇';
const a2=todays.find(a=>a.level==='A2');
const hi=todays.find(a=>a.level!=='A2');
if(!a2) throw '缺 A2 篇';
if(!hi) throw '缺 B1+/B2 篇';
if(a2.upFrom!=='A2'||a2.upTo!=='B1') throw 'A2 篇要有 upFrom:A2 / upTo:B1';
const w=a2.paras.reduce((n,p)=>n+p.en.split(/\s+/).filter(Boolean).length,0);
if(w<60||w>120) throw 'A2 篇字數應在 60–120，實際 '+w;
[a2,hi].forEach(a=>{
  if(a.paras.length<4) throw a.id+' 段落不足';
  if(!a.paras.every(p=>p.en&&p.cn)) throw a.id+' 有段落缺中譯';
  if(a.questions.length<3) throw a.id+' 題目不足';
  a.questions.forEach(q=>{if(q.ans<0||q.ans>=q.opts.length) throw a.id+' ans 索引錯誤: '+q.q});
  if(a.target.length<5) throw a.id+' 重點字不足';
  a.target.forEach(t=>{if(t.ex&&!t.exCn) throw a.id+' 重點字缺 exCn 中譯: '+t.w});
  if(a.upgrade.length<2) throw a.id+' 升級句不足';
  if(a.words!==a.paras.reduce((n,p)=>n+p.en.split(/\s+/).filter(Boolean).length,0)) throw a.id+' words 欄位與實際字數不符';
});
const grams=d.grammar.filter(x=>x.date===TODAY);
if(grams.length!==2) throw '今天應該有兩個文法單元（Tom + Anita），實際 '+grams.length;
const gTom=grams.find(x=>['A2','B1'].includes(x.level));
const gAnita=grams.find(x=>['B1+','B2'].includes(x.level));
if(!gTom) throw '缺 Tom 的 A2/B1 文法單元';
if(!gAnita) throw '缺 Anita 的 B1+/B2 文法單元';
grams.forEach(g=>{
  if(g.quiz.length<4) throw g.id+' 文法題目不足';
  g.quiz.forEach(q=>{if(q.ans<0||q.ans>=q.opts.length) throw g.id+' 文法 ans 索引錯誤: '+q.q});
  if(!g.sections.length||!g.traps.length) throw g.id+' 文法單元不完整';
});
console.log('OK  A2:',a2.id,a2.title,'('+w+'字) |',hi.level+':',hi.id,hi.title,'| 文法 Tom:',gTom.id,gTom.titleCn,'| Anita:',gAnita.id,gAnita.titleCn);"
node -e "JSON.parse(require('fs').readFileSync('../daily-state.json','utf8'));console.log('state ok')"
```

也驗證今天補的聽力（每課都要有今天日期；沒過就不要 commit 聽力那步的改動）：

```bash
cd b2lab/public
node -e "global.window={};require('./data-listen.js');
const L=window.LISTEN.lessons, TODAY=new Date().toISOString().slice(0,10);
const todays=L.filter(x=>x.date===TODAY);
if(!todays.length) throw '今天沒有補到任何聽力（date 對不上今天）';
todays.forEach(x=>{
  if(!/^dl\d{8}(a2)?$/.test(x.id)) throw 'id 格式錯: '+x.id;
  if(!/^[A-Za-z0-9_-]{11}$/.test(x.yt)) throw 'YouTube ID 格式怪怪的: '+x.yt;
  if(!x.keyLines.length||x.questions.length<4) throw x.id+' 聽力內容不完整';
  x.questions.forEach(q=>{if(q.ans<0||q.ans>=q.opts.length) throw x.id+' ans 索引錯誤: '+q.q});
});
console.log('listen ok', todays.map(x=>x.id+'('+x.level+','+x.yt+')').join(' | '));"
```

### 6. commit 並 push

```bash
git add b2lab/public/data-daily.js b2lab/public/data-art.js b2lab/public/data-listen.js b2lab/daily-state.json
git commit -m "Daily content YYYY-MM-DD: <文章標題> + <文法單元中文名>"
git push origin main
```

push 之後 `.github/workflows/deploy-b2lab.yml` 會自動部署到 https://english-b2-lab.web.app

### 7. 回報

用中文簡短回報：
- **Tom（A2）**那篇的標題、主題、字數
- **Anita** 那篇的標題、程度、類型（新聞改寫／原創）、字數，新聞改寫要附原文網址
- 文法單元名稱與 syllabus 編號、`usedUnits` 還剩幾個單元沒教
- 今天補的**聽力**是哪一課（VOA 級別／課次、程度、驗證過的 YouTube ID）；若跳過就說明原因
- 兩張橫幅各用了哪套配色與哪三個圖示

若任何步驟失敗，說清楚卡在哪一步、不要留下半套的檔案（寧可完全不 commit，也不要只寫一篇就推上去）。
