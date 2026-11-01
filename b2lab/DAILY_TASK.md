# B2 Read — 每日內容產生任務書

**每週三**由雲端排程執行一次（cron `0 0 * * 3`，UTC 00:00＝越南當地早上七點、台灣早上八點）。網站有**兩位學習者**，都是母語中文的台灣成年人：

| 學習者 | 程度區間 | 背景 |
|---|---|---|
| **Anita** | B1 / B1+ / B2 | 在越南工作，品質工程師；情境多為辦公室、出差搭機、租屋、就醫、颱風 |
| **Tom** | A2 / B1 / B1+ | 初階學習者，需要短句與最基本的生活情境 |

### ⭐ 人物與共用規則

人物（主角只有 Tom 與 Anita）、版權／原創、音標、橫幅圖規則、驗證與收尾，**兩份任務書共用的規則都在 `b2lab/TASK_COMMON.md`，動手前先讀。** 本檔只寫每日內容專屬的部分。

- A2 篇的主角是 **Tom**；B2 篇的主角是 **Anita**；B1／B1+ 兩人共用，主角在兩人之間換（例如 A2 寫 Tom，B1 就寫 Anita）。

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

版權與原創規則見 `TASK_COMMON.md`「原創與版權」。`syllabus.json` 只決定「今天教哪個文法點」，違反就等於這次任務失敗。

---

## 步驟

### 1. 讀取現況

```bash
cd b2lab
cat daily-state.json          # lastRun / nextKind / usedUnits / usedSources / usedTitles / topicRotation
cat syllabus.json             # 教學大綱
date +%Y-%m-%d                # 今天日期（用 UTC 即可，排程在當地早上七點跑）
```

也請先看過這幾個檔各一筆資料，**完全照著同樣的物件結構與中文語氣寫**：

- `b2lab/public/data-daily.js`（今天要追加的目標檔）
- `b2lab/public/data-reading.js`（文章的寫法範本）
- `b2lab/public/data-grammar.js`（文法單元的寫法範本）
- `b2lab/public/data-a2.js`（**A2 篇的寫法範本，寫 Tom 那篇前一定要看**）
- `b2lab/public/data-listen.js` 的 `notes[]`（**聽力對話的寫法範本**；`lessons[]` 是舊制、已經空了）
- `b2lab/public/data-gvplus.js`（視覺化教材的寫法範本）

**若 `lastRun` 已經等於今天** → 什麼都不要改，回報「今天已產生過」並結束。

### 1.5 網路自我檢查（新聞取材前先做一次）

B1+ 篇固定是新聞改寫，需要對外連新聞站。排程環境的「網路存取政策」可能是
**Trusted**（擋外站）或 **Full／Custom**（放行），開跑前先花一次呼叫確認 WebFetch 能不能用，
再決定新聞取材方式：

- 隨便挑一個新聞網域試抓一次（例如 `focustaiwan.tw`，或你打算取材的來源），
  看 WebFetch 回的是正常內容，還是 `EGRESS_BLOCKED`。
- **能抓（沒被擋）** → 新聞改寫可用 WebFetch 取原文事實，來源網址能逐字查證，品質最好。
- **被擋（`EGRESS_BLOCKED`）** → 退回用 WebSearch 摘要取得事實（照舊做法，仍可完成新聞改寫），
  並**在最後回報裡明確寫一行「⚠ WebFetch 仍被擋」**，提醒使用者網路政策還沒生效或需再確認。
- 不論哪種情況 WebSearch 一律可用；**絕不可**因為抓不到就編造新聞內容或來源網址。

### 2. 產生**四篇**文章 → 都插入 `DAILY.articles` 陣列的**最前面**

| 程度 | id | 字數 | 說明 |
|---|---|---|---|
| `A2` | `"d"+YYYYMMDD+"a2"` | 65–110 | 見下方「A2 篇的額外規則」 |
| `B1` | `"d"+YYYYMMDD+"b1"` | 120–160 | 見下方「B1 篇的額外規則」 |
| `B1+` | `"d"+YYYYMMDD+"b1p"` | 150–220 | **一律新聞改寫**；見下方「B1+／B2 篇的規則」 |
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
主題從 `topicRotation` 取下一個（用完回到第一個）。**B1+ 篇一律是「新聞改寫」**（2026-09-15 起的固定規則）。

> **為什麼 B1+ 固定新聞改寫？** 我們希望每位學習者的三篇裡至少有一篇新聞改寫，
> 但 A2／B1 一律原創（新聞英文對這兩級太難），能同時被兩人看到、又扛得起新聞的只有 B1+。
> 所以固定讓 **B1+ 篇**新聞改寫：Tom 靠 B1+ 拿到新聞、Anita 靠 B1+（news 日還多一篇 B2）拿到新聞。
> B2 篇則維持由 `nextKind` 決定的 news／original 輪替，與這條規則各自獨立。

**B1+ 篇（`"d"+YYYYMMDD+"b1p"`，150–220 字）**
- **新聞改寫，4 段。** 用 WebSearch 找一則近期真實英文新聞，主題符合本次輪到的分類，優先與台灣或越南相關；
  網址不可出現在 `usedSources` 裡。取事實要點後**用你自己的英文重寫**，不要照抄任何來源句子。
  （**先做 §1.5 的網路自我檢查**：WebFetch 能用就抓原文取事實、來源可查證；被擋就退回 WebSearch 摘要，
  並在回報裡標「⚠ WebFetch 仍被擋」。兩種都**不可編造**新聞或來源網址。）
- 難度介於 B1 與 B2 之間：可以開始用被動語態、現在完成式＋被動、關係子句。
- 語言焦點要跟 B1 篇明顯不同（例如 B1 練連接詞、B1+ 就練被動或完成式）。
- `kind:"news"`、`source:"改寫自 <媒體名> 報導（YYYY/MM/DD）— 事實取自原文，英文由本站重寫"`、`sourceUrl:"<原文網址>"`。
  `upgrade` 加 `upFrom:"B1+", upTo:"B2"`。
- **`nextKind:"news"` 的那天 B1+ 與 B2 都會是新聞**：為避免重複抓稿，兩篇**可以**取材同一則新聞、
  用兩種深度講（B1+ 150–220 字、B2 240–300 字），也可以各用一則不同的新聞——由撰稿者自行斟酌。

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
| `ipa`（所有 target / pre 共用） | 美式 Cambridge 記法，規則（符號、捲舌 r、自我檢查、同字沿用既有寫法）見 `TASK_COMMON.md`「音標」。寫完用 `node tools/check-ipa.js` 驗（第 5 步也會跑） |
| `target` | A2/B1 篇 5–6 個、B1+/B2 篇 7–9 個 `{w, ipa, pos, cn, def, ex, exCn}`；`def` 用簡單英文（網站顯示為斜體、比例句小一級）；**`ex` 必須原創、換一個跟本文不同的情境**——不可照抄或改寫本文句子，不沿用本文的人物、地點、公司、事件、數字，程度對應這一篇（2026-09-14 使用者指定，第 5 步驗證會擋「與本文連續 4 字相同」）；`exCn` 是 `ex` 的繁體中文翻譯（一定要有） |
| `questions` | A2/B1 篇 3 題、B1+/B2 篇 4 題 `{q, qCn, opts, optsCn, ans, expl}`；`opts` 4 個選項且以 `"A. "`–`"D. "` 開頭，`ans` 是 0-based 索引，`expl` 用中文並引用原文依據 |
| `qCn` / `optsCn` | **每題都要**：`qCn` 是題目的中文翻譯；內容理解題加 `optsCn`（四個選項的中文，一樣 A–D 開頭）。純文法填空題（選項是動詞變化）只要 `qCn` 寫出整句中文意思、不用 `optsCn`。網站的「顯示中譯」開關靠這兩個欄位 |
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
| `quiz` | 4 個 `{q, qCn, opts, ans, expl}`，格式同上，`expl` 用中文。另外 2 題寫在 `data-gvplus.js` 的 `quizMore`，加起來 6 題 |

寫作風格要求：解說用中文、例句用英文＋中譯、語氣像家教在講重點，不要像文法書條列。
一定要說明「為什麼會錯」，不要只說「這樣才對」。
**A2 那份要最淺白、句子最短；B2 那份可以談語域、寫作效果與修辭選擇。**

**⭐ 例句規則：重複文法，不重複句子（2026-09-15 使用者指定）**

整個文法頁（Step 1 SEE → 2 UNDERSTAND → 3 READ → 4 COMPARE → 5 CHECK → 6 PRACTICE）
會把 `sections` / `traps` / `quiz` 和 `data-gvplus.js` 的欄位排在同一頁。
句型公式（例如 It has been + 時間 + since…）可以反覆出現，但**同一句完整例句整頁最多出現 2 次**：

- `visual`（Step 1）放 1–2 組核心主例句，這是唯一「主例句」。
- `scenarios` 4 張各換一個情境（生活／工作／旅行／QA・工廠／客戶／家庭），仍示範該卡的文法點；每張只 1 個主例句。
- `steps` 5 步保留結構，但要用**新的完整情境**，不要再抄 Step 1 的句子。
- `comparison`、`sections.examples`、`traps`、`quiz` / `quizMore` 用新的 mini example，不複製 Step 1。
- 例句數量照原本規格，不為了換情境加長；程度 A2–B2，工作／QA 英文可以用但不要太專業。
- 條列裡寫句型公式時用「+ 時間 +」或「…」，**不要用大寫 X 當佔位字**（網站會把 X 當成 ✗ 標紅）。
- 第 5 步驗證會自動數重複句，超過 2 次就不能 commit。

#### 每個文法單元都要有視覺化教材（`public/data-gvplus.js`）

> 2026-09-03 起全站 48 個文法單元一律走「視覺化教材」版面
> （SEE → UNDERSTAND → READ → COMPARE → CHECK → PRACTICE 六段）。
> 新增的每日文法也**必須**照這個規格寫，否則會跟其他單元長得不一樣。

上面第 3 節寫的 `sections` / `traps` / `quiz` **照舊要寫**（它們會排進 Step 2/3/4/5），
另外要在 `public/data-gvplus.js` 的 `window.GVPLUS` 裡，以**單元 id 為鍵**再加一筆：

```js
dg20260904b1: {
  vis: true,                                    // 固定 true，走視覺化版面
  oneLine: '一句話講清楚這個文法點在做什麼（比 summary 更口語、更像家教開場）',
  map: { when: '什麼時候用', why: '為什麼要有這個時態／句型', form: '公式' },
  visual: { type: 'cols', cap: '圖說：告訴讀者怎麼看這張圖', /* …型別各自的欄位 */ },
  scenarios: [ /* 4 張情境卡，見下 */ ],
  steps: [ /* 5 步逐步理解 */ ],
  comparison: { title:'…', left:{…}, right:{…}, note:'…' },
  quizMore: [ /* 2 題，把練習從 4 題補到 6 題 */ ]
}
```

**各欄位的寫法**

| 欄位 | 要求 |
|---|---|
| `oneLine` | 一句話，用破折號或冒號點出關鍵對比。不要重複 `summary` 的字句 |
| `map` | 三格各一句：`when`（什麼情境）、`why`（為什麼英文要分這個）、`form`（公式，可用 `|` 分隔兩種） |
| `visual` | Step 1 · SEE 的圖解，**型別要挑對**，見下表 |
| `scenarios` | **4 張**。每張 `{key, icon, title, titleCn, ask, en, cn, why}`：`ask` 是「這張圖回答哪個問題」（一定要是問句）、`why` 是點開才看到的解說，要說明「為什麼」而不只是「這樣才對」 |
| `steps` | **5 步** `{label, text}`。從情境出發，最後才給規則；最後一步通常是「換個說法／對照錯誤版」 |
| `comparison` | `left` / `right` 各 `{tag, tagCn, icon, head, headCn, en, cn, pts:[3 條]}`；`note` 給一句判斷口訣 |
| `quizMore` | **2 題** `{q, opts, ans, expl}`（這裡不用 `qCn`）。跟 `quiz` 的 4 題加起來要有 6 題 |

**`visual.type` 八種型別——按內容挑，不要隨便選**

| type | 適用 | 資料欄位 |
|---|---|---|
| `timeline` | 時態對照（線有沒有碰到 NOW） | `{rows:[{kind:'span'\|'point'\|'range', label, tone:'accent'\|'ink', from, to, at, sub, subCn}]}` |
| `matrix` | 座標表（時間 × 狀態、語域 × 效果） | `{cols:[…], rows:[{h, cells:[{en, cn, hi}]}]}` |
| `cols` | 2～3 欄對照（A vs B、三種用法） | `{cols:[{tag, tagCn, tone:1\|2\|3, items:[{en, cn, nt}]}]}` |
| `chain` | 句型結構拆塊（be + V-ing、have + Vpp） | `{links:[{t, c, role}], eg:{en,cn}, variants:[{k,en,cn}]}` |
| `merge` | 兩句併一句（while/when、關係子句、分詞） | `{a:{n,en,cn}, b:{n,en,cn}, glue, glueCn, out:{n, parts:[{t,role}], cn}}` |
| `shift` | 往回退一格（轉述句、現在→過去、加 -ing 後語意變化） | `{rows:[{a, b, nt}]}` |
| `scale` | 光譜（不可能→確定、暫時→永久、正式→口語） | `{lo, hi, stops:[{at:0–100, label, labelCn, en, cn}]}` |
| `swap` | 主詞與受詞換位（被動語態） | `{crossLabel, lanes:[{tag, tone, sub, parts:[{t,role}], cn}]}` |
| `branch` | 條件分支（假設語氣） | `{cond:{en,cn}, fan:[{tag, tone:'real'\|'unreal'\|'impossible', prob, en, cn}]}` |

`parts` / `links` 的 `role` 決定字塊顏色：`subj`（藍）、`verb`（橘）、`obj`（綠）、
`glue`（紫）、`plain`（白）、`mute`（灰）。

`icon` 只能用 index.html 裡 `GVICON` 的代號：
`house plane key calendar clock person bubble check cross arrow book tool pin star cycle balance link fork eye money flag`。
**同一天四個單元的情境卡不要一直用同幾個圖示。**

**兩條硬規則**

1. **文字欄位一律寫純文字，不要寫 HTML 標籤**——渲染時會被轉義，標籤會原封不動印出來。
2. **不要把文字畫進 SVG。** 需要新的圖解樣式時，是在 index.html 加一種 `gv*` 元件
   （HTML + CSS，SVG 只畫箭頭與軸線），不是在資料裡塞 SVG。
   理由：SVG 內的文字不會換行、不吃 `--fs` 字級，手機上會被圖形擋住（2026-09-03 修過這個 bug）。

#### 圖文說明（`public/data-gramviz.js`）現在是選配

舊的「兩格對照卡」還在，但只在單元**沒有** `visual` 欄位時當 Step 1 的備援。
既然新單元一律要寫 `visual`，就**不必**再新增 GRAMVIZ 卡片。
（要共用現成卡片時仍可寫 `V.dg20260904b1=V.nowVsAlways;`，但不是必要工作。）

#### 文法單元的 `quiz` 也要有中譯

每題 `{q, qCn, opts, ans, expl}`：`qCn` 寫出該句的完整中文意思（例：「我平常喝茶，但今天在喝咖啡。」）。
選項是動詞變化時不用 `optsCn`；選項是完整句子、意思不同時要加 `optsCn`。

### 3.5 為今天的四篇文章各產生一張橫幅圖

**不要手寫 SVG**，用現成的產生器（圖示與 7 套配色，含課本線稿圖示庫 BOOK_ICONS，風格才會跟其他文章一致）：

```bash
cd b2lab
node tools/genart.js --list          # 先看有哪些配色與圖示可用
node tools/check-art.js --free 20261014   # 換成今天日期：列出今天還能用的圖示（扣掉前兩批用過的）
```

寫一個暫時的規格檔（**四篇各一筆**，id 要跟文章的 id 完全一致）。
**⚠ 2026-08-19 版面規則：橫幅只放「五圓圖示」，不放任何文字**——不要給 en/cn/tag 欄位，
`i` 一律給 **5 個**圖示（產生器會排成等距五圓，跟課本閱讀插圖同一種樣式）：

```json
{
  "d20260814a2":  {"p":"teal", "i":["store","bottle","clock","people","star"],
    "cap":"故事的五個階段：A → B → C → D → E。並點出本課文法重點。"},
  "d20260814b1":  {"p":"warm",  "i":["...","...","...","...","..."], "cap":"..."},
  "d20260814b1p": {"p":"green", "i":["...","...","...","...","..."], "cap":"..."},
  "d20260814b2":  {"p":"blue",  "i":["...","...","...","...","..."], "cap":"..."}
}
```

規則：
- `p` 配色依主題挑：天災／夜晚用 `night`、健康用 `rose`、金錢與環境用 `green`、
  職場與科技用 `blue` 或 `teal`、生活與飲食用 `warm`、心理與抽象用 `violet`。
  **同一天的四篇要用四套不同的配色**（剛好 7 套可挑，不會不夠）。
- 圖示、配色、`cap` 的寫法與重複限制見 `TASK_COMMON.md`「橫幅圖」。`cap` 要寫「圖中的 X 對應文章的哪一句」，並點出這課的文法重點。

#### 3.5.1 圖示不夠時**自己補畫**，不用問使用者（2026-10-11 使用者指定）

挑圖示時（3.5 橫幅、3.6.1 聽力縮圖都一樣），只要遇到下面任一種情況，**就直接畫新圖示補進圖示庫**：

- 某個階段最貼切的東西**圖示庫裡沒有**（例：口罩、投票箱、麵包）
- 貼切的那個**在冷卻中**，剩下的只是勉強相關（例：拿「門」代替「提著包包」）
- 你發現自己正要拿**萬用圖示**（星星、時鐘、文件…）湊數

做法：

1. 畫在 `public/data-book.js` 的 `var I={…}` 最後面，前面加一行註解
   `/* YYYY-MM-DD 排程新增：<主題> */`。**一次最多補 6 個**，寧可少而精。
2. 名稱用英文名詞、小寫開頭 camelCase（`facemask`、`ballot`），**不能跟既有名稱撞名**。
3. 照既有筆法畫（先找一個結構類似的既有圖示照著改，例如畫建築就參考 `hospital`、畫器物參考 `pot`）：
   - 64×64 的框，主體放在 8～56 之間，3～6 個簡單形狀，正面視角
   - 主輪廓 `stroke="'+D+'"` `stroke-width="3"`，`stroke-linecap="round"` `stroke-linejoin="round"`
   - 一塊橘色 `fill="'+A+'"` 當重點，其餘填白 `#fff`；點綴色只能用既有的
     （紅 `#c0392b`、黃 `#ffd98a`、綠 `#3f9e64`、木頭 `#d9a34a`／`#8a5a33`、膚色 `#f4c9a0`、水藍 `#a7d8f0`）
   - **不放字**（不要 `<text>`），不要漸層、陰影、圖片
4. 跑風格檢查，沒過就修到過：
   ```bash
   cd b2lab && node tools/check-icons.js
   ```
   環境有瀏覽器的話，再輸出對照表看一眼（淺色＋深色配色都要看得清楚）：
   `node tools/check-icons.js --sheet /tmp/icons.html`
5. 新圖示馬上就能用在今天的橫幅（genart.js 會自動吃進來）和聽力縮圖。
6. 第 6 步記得 `git add b2lab/public/data-book.js`；第 7 步回報要列出新增了哪些圖示。

產生並併入：

```bash
node tools/genart.js /tmp/spec-today.json /tmp/art-today.txt
# 把 /tmp/art-today.txt 的內容貼進 public/data-art.js：
# 在最後一筆的 } 後面補上逗號，再把內容貼在結尾的 }; 之前
```


⚠️ 只能畫**橫幅**。文章裡如果有明確數字想畫成圖表，不要自己編數據——沒有把握就只做橫幅。

### 3.6 追加**四課聽力**（A2 / B1 / B1+ / B2）→ 都插入 `public/data-listen.js` 的 `notes` 陣列**最前面**

> 聽力一律是本站原創的 TTS 對話，逐字稿寫在課程物件的 `script` 欄位，**不用外部影片**：不要寫 `yt`／`source`／`sourceUrl`／`keyLines`／`cc`／`needsSubs`。`data-scripts.js` 現在是空的，不用動、第 6 步也不用 `git add`。

網站「今日」分頁會列出**該學習者程度區間內、當天所有程度**的聽力，所以每次執行要補四課：

| 程度 | id | 對話長度 | 難度定位 |
|---|---|---|---|
| `A2` | `"dl"+YYYYMMDD+"a2"` | 12–16 句 | 短句、最基本的生活場景，句子 6–12 字 |
| `B1` | `"dl"+YYYYMMDD+"b1"` | 14–18 句 | 兩人一來一往，可以有轉折、比較、原因 |
| `B1+` | `"dl"+YYYYMMDD+"b1p"` | 16–20 句 | 聊當天那則新聞，可用被動語態與關係子句 |
| `B2` | `"dl"+YYYYMMDD+"b2"` | 16–20 句 | 交換觀點，句子較長、語氣有層次 |

- **四課都必須有 `date:"YYYY-MM-DD"` 欄位**（今天日期），網站才會把它當成今天的新聽力顯示。
- 四課的 `level` 必須剛好是 A2、B1、B1+、B2 各一個，`kind` 一律 `"note"`。
- 四課跟當天四篇文章走**同一個情境**，主角只用 Tom 與 Anita
  （配角如同事、店員、房東可自由取名，但不要叫 Amy——見 TASK_COMMON.md）。
- **四課都要在 `index.html` 的 `LS_THUMB` 登記一個線稿圖示**（見 3.6.1），漏了卡片會變成 emoji。
- **不用管 `usedVoa`**：沒有外部素材要防重複，那個欄位保留現值不動
  （只有未來真的改回外部影片時才需要登記）。

物件欄位**完全照 `public/data-listen.js` 的 `notes[]` 現有的一筆**（先讀一筆當範本）：

| 欄位 | 說明 |
|---|---|
| `id` / `date` / `level` | 見上表；`date` 是今天 |
| `minutes` | 朗讀大約幾分鐘（取整數；A2 約 2、B1 約 3、B1+／B2 約 4） |
| `kind` | 一律 `"note"` |
| `title` / `titleCn` | 這一課的英文標題與中譯 |
| `series` | `"本站自製聽力 · <當日主題>主題"` |
| `topic` | 一個 emoji 加一句情境，例 `"🚆 下班前聊星期天的火車票"` |
| `focus` | 這一課的語言焦點（一句話，跟當天的文法點對齊） |
| `intro` / `tip` | 中文導讀與聽力策略提示，兩個都自己原創；`tip` 要寫「第一次聽抓什麼、第二次聽注意什麼」 |
| `pre` | 5–7 個 `{w, ipa, pos, cn, def}` 聽前單字，`def` 用簡單英文。音標規則完全比照第 2 步的 `ipa` 欄位（美式 Cambridge、捲舌 r）；**同一個字若已出現在任何 `public/data-*.js`，先 grep 沿用完全相同的音標字串**，通常直接沿用當天文章的 `target` 就好 |
| `script` | 整份對話，每句 `{sp, en, cn}`：`sp` 是說話者名字，`en` 是台詞，`cn` 是口語中譯。**這就是站內逐字稿**，不要另外寫到 `data-scripts.js` |
| `questions` | 4–5 個 `{q, qCn, opts, optsCn, ans, expl}`，格式同文章題（含中譯欄位規則），`ans` 為 0-based |

**寫對話的要求**

- 要像真人在講話：有人問、有人答、有人插話或抱怨，不要寫成一人一大段的朗讀稿。
- 每一課至少放三個可以當理解題答案的**具體事實**（數字、時間、地點、原因）。
- 當天的文法點要在對話裡自然出現好幾次，但**不要把文法頁或文章的例句照搬過來**，
  換情境重寫（同一句完整例句不要跨檔重複）。
- 理解題的答案一定要在 `script` 裡找得到依據，`expl` 要引用那一句原文。
- **至少有一題考當天的文法點**（像第 2 步的文章題那樣）。
- 所有中文一律繁體中文台灣用語。

#### 3.6.1 四課聽力都要在 `index.html` 的 `LS_THUMB` 補一個線稿圖示（**2026-10-06 使用者指定**）

> 聽力卡片的縮圖跟課本、閱讀、實景一樣，**一律用線稿圖示**
> （`public/data-book.js` 的 `BOOK_ICONS`，橘黑兩色）。
> `index.html` 的 `lsThumb()` 會去查 `LS_THUMB[課程 id]`，
> **查不到就退回 `topic` 開頭的 emoji**——卡片上就會冒出 🚐🚧✈️ 這種彩色 emoji，
> 跟其他卡片的線稿風格對不起來。所以每次補四課聽力，一定要同時補這四筆。

作法：在 `b2lab/public/index.html` 的 `const LS_THUMB={` 後面**第一行**插入今天四筆
（最新的放最上面，跟其他資料檔的慣例一致）：

```js
const LS_THUMB={
  dl20261006a2:'box',dl20261006b1:'car',dl20261006b1p:'temple',dl20261006b2:'orgchart',
  dl20261002a2:'hourglass',dl20261002b1:'cross',…
```

挑圖示的規則：

- 先列出可挑的圖示：`cd b2lab && node tools/list-thumb-icons.js`（① 從沒用過 ② 可重用 ③ 冷卻中）。只能用 `BOOK_ICONS` 裡有的名稱。
- **同一天四課絕對不能重複。**
- **優先挑 ①「從沒用過」的**；①裡找不到語意貼切的，才去 ② 挑可重用的。
- **③「冷卻中」的絕對不能用**——最近 6 批（每週一批，約六週）用過的圖示再出現，清單看起來會很重複。
  第 5 步的驗證會擋下來。
- 挑**語意貼切**的，不要隨便抓一個沒用過的。例：接駁車 `car`、舊車站／古蹟 `temple`、
  打包行李 `box`、兩個廠之間的角色 `orgchart`。
- ⚠ 圖示庫裡有幾個是「帶字的徽章」（例如 `clock2` 畫出來是「24」兩個字），語意對不上就不要用。**不確定長什麼樣就先渲染出來看一眼**：`node tools/list-thumb-icons.js --sheet`（寫到 `D:/icons-preview.html`，可用環境變數 `ICONS_OUT` 改路徑），用瀏覽器開來挑。
- 寧可從 ② 重用一個語意對的，也不要從 ① 硬挑一個語意不對的。
- 找不到語意貼切的，就照 **3.5.1** 自己補畫新圖示，不用問使用者。

**這一步會改到 `public/index.html`，所以第 6 步的 `git add` 一定要包含它**（見第 6 步的清單）。

### 3.7 （已併入 3.5）

四篇文章的橫幅配圖都不能少，缺圖不要 commit（`check-daily.js` 會逐篇檢查）。

### 3.8 為今天的**四個文法單元**各做一支文法影片

2026-10-17 起，每日文法每個單元都要有影片版（文法頁標題與文法卡片的「▶ 影片版」靠它）。
**規格與骨架都在別處，不要憑印象做**，動手前先讀：

- 規格：`b2lab/tools/GVIDEO_SPEC.md`（內容鐵則、畫面種類、句數、170–290 秒、換你說 3 題）
- 骨架：`b2lab/tools/gvideo-template.js`（複製成 `gvideo/<單元 id>.js` 再填，不必整份讀舊影片；語氣可看同程度前幾批 `gvideo/dg*.js` 的開頭）。字串裡有撇號（won't）要用雙引號
- 每個單元一個檔 `b2lab/public/gvideo/<單元 id>.js`（id 就是今天 `DAILY.grammar` 的 `dg…`），插圖名以 `<id>_` 開頭
- 影片只放**正確**英文：不放常見錯誤、不放小測驗；例句全部自己寫，不可與文法頁（含 `data-gvplus.js`）連續 8 字相同
- 四個程度各一支，情境、人物、例句都要不同，難度貼合該程度
- 中文旁白用台灣口語；旁白裡的英文只放短片語

寫完四支之後：

```bash
node b2lab/tools/build-gvideo-index.js     # 重產 gvideo/index.js（不要手改）
node b2lab/tools/check-gvideo.js dg…a1 dg…a2 dg…b1 dg…b2   # 換成今天四個 id，全部 ✓ 才算完成
```

另外把 `b2lab/public/sw.js` 的快取版號 +1（跟前幾次影片批次一樣）。
文法頁本身若在做影片時發現規則錯誤，明確錯的直接修，並在第 7 步回報。
旁白與例句的 AI 音檔不用在這裡產：每日排程 `b2lab-audio-sync`（`D:\b2lab-audio\build.js`）會讀 `gvideo/` 補產生。

### 4. 更新 `b2lab/daily-state.json`

- `lastRun` = 今天
- `nextKind` 翻面
- `usedUnits` 加入 B1+／B2 這條線今天用掉的文法單元編號；`usedUnitsTom` 加入 A2／B1 這條線今天用掉的
- `usedSources` 加入今天的新聞網址（original 那天不用加）
- `usedTitles` 加入今天**四篇**的標題
- `topicRotation` 把用掉的主題移到陣列尾端（保持輪替）
- `usedA2Topics` 加入今天 A2 篇用掉的主題（若已包含全部 `a2Topics`，就清空重新輪）
- `usedVoa` **不要動**：2026-08-19 起聽力全部是本站原創 TTS 對話，沒有外部素材要防重複，
  這個欄位保留現值即可（只有未來真的改回外部影片時才需要登記代號）。

### 5. 驗證（**沒過就不要 commit**）

```bash
cd b2lab
node tools/check-daily.js     # 四篇文章、四個文法單元、視覺化教材、橫幅配圖；可帶 YYYY-MM-DD 驗證指定日期
node tools/check-listen.js    # 四課聽力、LS_THUMB 登記與冷卻期；同樣可帶日期
node tools/check-ipa.js       # 音標一致性（規則見 TASK_COMMON.md）
node tools/check-art.js && node tools/check-listen-thumb.js && node tools/check-icons.js
node tools/build-gvideo-index.js && node tools/check-gvideo.js dg…a2 dg…b1 dg…b1p dg…b2   # 今天四個文法單元 id（3.8）
node -e "JSON.parse(require('fs').readFileSync('daily-state.json','utf8'));console.log('state ok')"
```

並確認 `window.GVIDEO_IDS` 含今天四個 id；缺任何一支或有 ✗ 就不要 commit。
`check-ipa.js` 逼你回頭改其他資料檔的音標時，那幾個檔也要一起 `git add`（第 6 步）。

### 6. commit 並 push

```bash
git add b2lab/public/data-daily.js b2lab/public/data-gvplus.js b2lab/public/data-art.js b2lab/public/data-listen.js b2lab/public/index.html b2lab/daily-state.json b2lab/public/gvideo b2lab/public/sw.js
git commit -m "Daily content YYYY-MM-DD: 4 levels (A2/B1/B1+/B2) — <當日主題>"
git push origin main
```

上面的檔是每次執行**一定**會動到的（`index.html` 只為了 3.6.1 的 `LS_THUMB` 那一行；`gvideo/` 資料夾含 3.8 的四支影片與重產的 `index.js`；`sw.js` 是版號 +1）。
`data-scripts.js` 不要加（它現在是空的，見 3.6）。
如果照 3.5.1 補了新圖示，`b2lab/public/data-book.js` 也要一起 `git add`。
另外，如果第 5 步的 `check-ipa.js` 逼你回頭去改其他資料檔的音標
（例如今天的字跟 `data-book.js`／`data-notes.js` 既有寫法不一致），
那幾個檔也要一起 `git add`——半套的音標修改會讓下一次執行直接卡在同一個檢查。
一律只加有意修改的檔案，不要 `git add -A`。

push 之後 `.github/workflows/deploy-b2lab.yml` 會自動部署到 https://english-b2-lab.web.app

### 7. 回報

用繁體中文簡短回報，**依程度列成一張表**：

| 程度 | 文章（標題／字數／類型） | 文法單元（中文名／syllabus 編號） | 聽力（標題／對話句數／題數） |
|---|---|---|---|
| A2 | | | |
| B1 | | | |
| B1+ | | | |
| B2 | | | |

另外補充：
- 當日共同主題是什麼
- **新增的線稿圖示**（3.5.1）：名稱＋中文意思＋用在哪篇；沒補就寫「無」
- B2 篇是新聞改寫還是原創；新聞改寫要附原文網址
- **§1.5 網路自我檢查的結果**：WebFetch 能用（用原文取材）或仍被擋（退回 WebSearch 摘要）。
  若仍被擋，明確寫一行「⚠ WebFetch 仍被擋」提醒使用者確認網路政策。
- `usedUnits` 與 `usedUnitsTom` 各還剩幾個單元沒教
- 四張橫幅各用了哪套配色與哪**五個**圖示
- 四課聽力各用了哪個情境、哪個線稿圖示（`LS_THUMB`），以及當天的文法點在對話裡怎麼出現
- 四支文法影片（3.8）：id、秒數、`check-gvideo.js` 結果；若順手修了文法頁的錯誤，寫明改了什麼
- 有跳過或沒照任務書做的項目要說明原因（四個程度是硬性要求，不能跳）

最後提醒一句：Tom 會看到 A2／B1／B1+ 三份，Anita 會看到 B1／B1+／B2 三份。

若任何步驟失敗，說清楚卡在哪一步、不要留下半套的檔案
（寧可完全不 commit，也不要只寫兩篇就推上去——四個程度是硬性要求）。
