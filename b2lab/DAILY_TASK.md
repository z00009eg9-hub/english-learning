# B2 Read — 每日內容產生任務書

每天由雲端排程執行一次。學習者是**台灣成年人**，母語中文，目前在越南工作，職業是品質工程師；
英文程度 B1，目標 B2。**所有中文一律使用繁體中文台灣用語。**

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

也請先看過這三個檔各一筆資料，**完全照著同樣的物件結構與中文語氣寫**：

- `b2lab/public/data-daily.js`（今天要追加的目標檔）
- `b2lab/public/data-reading.js`（文章的寫法範本）
- `b2lab/public/data-grammar.js`（文法單元的寫法範本）

**若 `lastRun` 已經等於今天** → 什麼都不要改，回報「今天已產生過」並結束。

### 2. 產生一篇文章 → 插入 `DAILY.articles` 陣列的**最前面**

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
- `usedUnits` 加入今天用掉的單元編號
- `usedSources` 加入今天的新聞網址（original 那天不用加）
- `usedTitles` 加入今天的文章標題
- `topicRotation` 把用掉的主題移到陣列尾端（保持輪替）

### 5. 驗證（**沒過就不要 commit**）

```bash
cd b2lab/public
node -e "global.window={};require('./data-daily.js');
const d=window.DAILY;
console.log('articles',d.articles.length,'grammar',d.grammar.length);
const a=d.articles[0], g=d.grammar[0];
if(a.paras.length<4) throw '段落不足';
if(a.questions.length<4) throw '題目不足';
a.questions.forEach(q=>{if(q.ans<0||q.ans>=q.opts.length) throw 'ans 索引錯誤: '+q.q});
if(a.target.length<7) throw '重點字不足';
if(a.upgrade.length<2) throw '升級句不足';
if(g.quiz.length<4) throw '文法題目不足';
g.quiz.forEach(q=>{if(q.ans<0||q.ans>=q.opts.length) throw 'ans 索引錯誤: '+q.q});
if(!g.sections.length||!g.traps.length) throw '文法單元不完整';
console.log('OK', a.id, a.title, '|', g.id, g.titleCn);"
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

用中文簡短回報：今天的文章標題與類型（新聞改寫／原創）、文法單元名稱與 syllabus 編號、
字數、以及 `usedUnits` 還剩幾個單元沒教。若任何步驟失敗，說清楚卡在哪一步、不要留下半套的檔案。
