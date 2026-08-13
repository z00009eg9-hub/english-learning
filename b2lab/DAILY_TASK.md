# B2 Read — 每日內容產生任務書

每天由雲端排程執行一次。網站有**兩位學習者**，都是母語中文的台灣成年人：

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
- `target` 5–6 個高頻字；`questions` 3 題（其中一題考本篇文法點）。
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
| `target` | 7–9 個 `{w, ipa, pos, cn, def, ex}`；`def` 用簡單英文，`ex` 取自本文 |
| `questions` | 4 個 `{q, opts, ans, expl}`；`opts` 4 個選項且以 `"A. "`–`"D. "` 開頭，`ans` 是 0-based 索引，`expl` 用中文並引用原文依據 |
| `upgrade` | 2 個 `{b1, b2, note}`：同一個意思的 B1 說法 vs. B2 說法，`note` 解釋為什麼升級了 |

### 3. 產生一個文法單元 → 插入 `DAILY.grammar` 陣列的**最前面**

- 從 `syllabus.json` 挑出**編號最小、且不在 `usedUnits` 裡**的單元。
- 完全原創撰寫，物件欄位照 data-grammar.js 的格式，另加 `date` 與 `unitNo`：

| 欄位 | 說明 |
|---|---|
| `id` | `"dg"` + YYYYMMDD |
| `date` / `unitNo` | 日期／syllabus 單元編號 |
| `level` | `"B1"`、`"B1+"` 或 `"B2"` |
| `title` / `titleCn` | 英文文法點名稱與中文名稱 |
| `srcDays` | 空陣列 `[]` |
| `summary` | 一句話講清楚這個文法點的核心 |
| `sections` | 3–5 個 `{h, body?, bullets?, table?, examples?}`；`table` 是 `{head:[], rows:[[]]}`；`examples` 是 `{en, cn, note}`。至少要有一個對照表與 3 個例句 |
| `traps` | 3–4 個 `{bad, good, why}`，針對**中文母語者**最容易犯的錯 |
| `quiz` | 4 個 `{q, opts, ans, expl}`，格式同上，`expl` 用中文 |

寫作風格要求：解說用中文、例句用英文＋中譯、語氣像家教在講重點，不要像文法書條列。
一定要說明「為什麼會錯」，不要只說「這樣才對」。

### 4. 更新 `b2lab/daily-state.json`

- `lastRun` = 今天
- `nextKind` 翻面
- `usedUnits` 加入今天用掉的文法單元編號
- `usedSources` 加入今天的新聞網址（original 那天不用加）
- `usedTitles` 加入今天**兩篇**的標題
- `topicRotation` 把用掉的主題移到陣列尾端（保持輪替）
- `usedA2Topics` 加入今天 A2 篇用掉的主題（若已包含全部 `a2Topics`，就清空重新輪）

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
  if(a.upgrade.length<2) throw a.id+' 升級句不足';
  if(a.words!==a.paras.reduce((n,p)=>n+p.en.split(/\s+/).filter(Boolean).length,0)) throw a.id+' words 欄位與實際字數不符';
});
const g=d.grammar[0];
if(g.date!==TODAY) throw '今天的文法單元沒產生';
if(g.quiz.length<4) throw '文法題目不足';
g.quiz.forEach(q=>{if(q.ans<0||q.ans>=q.opts.length) throw '文法 ans 索引錯誤: '+q.q});
if(!g.sections.length||!g.traps.length) throw '文法單元不完整';
console.log('OK  A2:',a2.id,a2.title,'('+w+'字) |',hi.level+':',hi.id,hi.title,'|',g.id,g.titleCn,'Unit'+g.unitNo);"
node -e "JSON.parse(require('fs').readFileSync('../daily-state.json','utf8'));console.log('state ok')"
```

### 6. commit 並 push

```bash
git add b2lab/public/data-daily.js b2lab/daily-state.json
git commit -m "Daily content YYYY-MM-DD: <文章標題> + <文法單元中文名>"
git push origin main
```

push 之後 `.github/workflows/deploy-b2lab.yml` 會自動部署到 https://english-b2-lab.web.app

### 7. 回報

用中文簡短回報：
- **Tom（A2）**那篇的標題、主題、字數
- **Anita** 那篇的標題、程度、類型（新聞改寫／原創）、字數，新聞改寫要附原文網址
- 文法單元名稱與 syllabus 編號、`usedUnits` 還剩幾個單元沒教

若任何步驟失敗，說清楚卡在哪一步、不要留下半套的檔案（寧可完全不 commit，也不要只寫一篇就推上去）。
