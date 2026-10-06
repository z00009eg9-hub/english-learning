# B2 Read — 每日內容產生任務書

**每週二、五**由雲端排程各執行一次（當地早上七點）。網站有**兩位學習者**，都是母語中文的台灣成年人：

| 學習者 | 程度區間 | 背景 |
|---|---|---|
| **Anita** | B1 / B1+ / B2 | 在越南工作，品質工程師；情境多為辦公室、出差搭機、租屋、就醫、颱風 |
| **Tom** | A2 / B1 / B1+ | 初階學習者，需要短句與最基本的生活情境 |

### ⭐ 人物設定：主角只有 Tom 和 Anita（2026-09-22 使用者指定）

文章（以及對應的聽力對話）的主角**只能是 Tom 或 Anita**，
**不要再出現 Amy**，也不要自創第三位學習者當主角。

- A2 篇的主角是 **Tom**；B2 篇的主角是 **Anita**。
- B1／B1+ 兩級兩人共用，主角挑 Tom 或 Anita 都可以——
  任務書要求「B1 篇換一個角度或換一個主角」時，就在這兩人之間換
  （例如 A2 寫 Tom，B1 就寫 Anita）。
- 對話裡需要說話對象時，可以用配角（同事、店員、房東、醫生等），
  例如 Anita 的越南同事 **Mai**、Tom 的同事 **Lisa**；配角不是主角，可以自由取名，
  但不要取名叫 Amy。
- 2026-09-22 以前的舊資料裡還有 Amy，那是舊制，保留不動即可；新產生的一律照這條規則。

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
| `ipa`（所有 target / pre 共用） | **音標一律美式、Cambridge 記法（2026-09-09 全站統一，2026-09-21 補強捲舌規則）**<br>① 符號：ɑː 不用 ɒ、oʊ 不用 əʊ、用 e 不用 ɛ、tuː 不用 tjuː、ɪr/er/ʊr 不用 ɪə/eə/ʊə、IPA 的 ɡ、一律 `/…/` 不用 `[…]`。<br>② ⭐ **捲舌 r 最常漏**（2026-09-21 全站盤點抓到的主因）：美式沒有不發音的 r，拼字裡每一段 r 都要標出來 —— 非重音 -er/-or/-ar 寫 `ɚ`（leadership /ˈliː.dɚ.ʃɪp/、government /ˈɡʌv.ɚn.mənt/），重音 bird 類寫 `ɝː`（courage /ˈkɝː.ɪdʒ/、surgery /ˈsɝː.dʒɚ.i/），其餘位置直接留 `r`（cargo hold /ˈkɑːr.ɡoʊ hoʊld/、performance /pɚˈfɔːr.məns/、tarmac /ˈtɑːr.mæk/）。⚠ `aɪə`／`aʊə`／`ɔɪə` 後接 r 不可壓縮成一個音節：power /ˈpaʊ.ɚ/、employer /ɪmˈplɔɪ.ɚ/、supplier /səˈplaɪ.ɚ/。<br>③ **自我檢查**：每個字數一下「拼字裡有幾段 r」對上「音標裡有幾個 r／ɚ／ɝ」，前者多就是漏了（雙寫 r 的 arrive、borrow 是正常例外）。<br>④ 同一個字若已出現在任何 `public/data-*.js`，**先 grep 並沿用完全相同的音標字串**，同字不能有兩種寫法。例：/kənˈvɪns/、/pɚˈsweɪd/、/ˈmɑː.nə.t̬ɚ/。<br>寫完用 `node tools/check-ipa.js` 自己驗一次（第 5 步也會再跑一次），它會抓出同字多寫法、缺音標、非美式符號與漏掉的捲舌 r |
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

**不要手寫 SVG**，用現成的產生器（裡面有 68 個圖示與 7 套配色，風格才會跟其他文章一致）：

```bash
cd b2lab
node tools/genart.js --list          # 先看有哪些配色與圖示可用
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
- `i` 挑 **5 個**能代表文章「五個階段／五個要點」的圖示（只能用 `--list` 列出來的名稱），
  順序照文章敘事順序排。
- `cap` 用「A → B → C → D → E。」的五段式寫法，對應五個圖示各代表文章哪一段，
  最後點出本課文法重點；不要寫成純裝飾的句子。

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

### 3.6 追加**四課聽力**（A2 / B1 / B1+ / B2）→ 都插入 `public/data-listen.js` 的 `notes` 陣列**最前面**

> **⭐ 2026-08-19 起：聽力一律是本站原創的 TTS 對話，不用外部影片。**
> 在這之前試過 VOA 棚內教材，也試過 YouTube 真人 vlog，兩種都踩到同樣的問題：
> 影片會下架、字幕抓不到（`youtube-transcript-api` 動不動回 `IpBlocked`）、
> 版權又不允許把逐字稿放進站內，結果有些課只收得到影片，沒有逐字稿、沒有理解題。
>
> 現在改成**自己寫對話**：逐字稿直接寫在課程物件的 `script` 欄位裡，
> 網站用裝置內建語音（TTS）朗讀，離線也能練，每一課都一定有完整中譯與理解題。
>
> 所以這一步**不要上 YouTube 找影片**，也不要寫 `yt`／`source`／`sourceUrl`／`keyLines`／
> `cc`／`needsSubs` 這些欄位——index.html 已經不讀它們了（`lessonHTML()` 的判斷是：
> 沒有 `yt` 而且有 `script`，就走 TTS 跟讀版面）。`data-scripts.js` 也不用動，見 3.6.2。

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
  （配角如同事、店員、房東可自由取名，但不要叫 Amy——見開頭的人物設定）。
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
> （`public/data-book.js` 的 `BOOK_ICONS`，橘黑兩色、共 114 個）。
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

- 只能用 `BOOK_ICONS` 裡有的名稱。先把**還沒用過的**列出來再挑：
  ```bash
  cd b2lab/public
  node -e "const fs=require('fs');global.window={};require('./data-book.js');
  const m=/const LS_THUMB=\{([\s\S]*?)\n\};/.exec(fs.readFileSync('index.html','utf8'))[1];
  const used=[...m.matchAll(/:'([a-zA-Z0-9]+)'/g)].map(x=>x[1]);
  const free=Object.keys(window.BOOK_ICONS).filter(k=>!used.includes(k));
  console.log('還沒用過的 '+free.length+' 個：'); console.log(free.join(' '));"
  ```
- **同一天四課絕對不能重複**，而且盡量不要跟既有的任何一課重複。
- 挑**語意貼切**的，不要隨便抓一個沒用過的。例：接駁車 `car`、舊車站／古蹟 `temple`、
  打包行李 `box`、兩個廠之間的角色 `orgchart`。
- ⚠ 圖示庫裡有幾個是「帶字的徽章」（例如 `clock2` 畫出來是「24」兩個字），
  語意對不上就不要用。**不確定長什麼樣就先渲染出來看一眼**，不要照名字猜：
  ```bash
  cd b2lab/public
  node -e "const fs=require('fs');global.window={};require('./data-book.js');
  const I=window.BOOK_ICONS;
  const m=/const LS_THUMB=\{([\s\S]*?)\n\};/.exec(fs.readFileSync('index.html','utf8'))[1];
  const used=[...m.matchAll(/:'([a-zA-Z0-9]+)'/g)].map(x=>x[1]);
  const free=Object.keys(I).filter(k=>!used.includes(k));
  const t=i=>'<svg viewBox=\'-6.7 -6.7 77.4 77.4\' xmlns=\'http://www.w3.org/2000/svg\'><rect x=\'-6.7\' y=\'-6.7\' width=\'77.4\' height=\'77.4\' fill=\'#fdf6ec\'/><circle cx=\'32\' cy=\'32\' r=\'33\' fill=\'#fff\' stroke=\'#f7e3c9\' stroke-width=\'2.5\'/>'+i+'</svg>';
  const OUT=process.env.ICONS_OUT||(process.platform==='win32'?'D:/icons-preview.html':'/tmp/icons-preview.html');
  fs.writeFileSync(OUT,'<!doctype html><meta charset=utf-8><style>body{font-family:system-ui;display:flex;flex-wrap:wrap;gap:10px;padding:16px}figure{margin:0;width:104px;text-align:center}svg{width:84px;height:84px;border:1px solid #f0e2cf;border-radius:12px;display:block;margin:0 auto}figcaption{font-size:12px;color:#6b5540}</style>'+free.map(k=>'<figure>'+t(I[k])+'<figcaption>'+k+'</figcaption></figure>').join(''));
  console.log('已寫出 '+OUT+'（'+free.length+' 個未使用圖示）');"
  ```
  用瀏覽器開那個檔看過再挑（Windows 會寫到 `D:\icons-preview.html`，
  不寫 C: 的暫存目錄；要改路徑就設環境變數 `ICONS_OUT`）。
- 真的找不到貼切又沒用過的，才可以重用很久以前某一課用過的——
  寧可重用一個對的，也不要硬挑一個語意不對的。

**這一步會改到 `public/index.html`，所以第 6 步的 `git add` 一定要包含它**（見第 6 步的清單）。

#### 3.6.2 `public/data-scripts.js` 現在是空的，不用動

> 這個檔原本放 VOA／TED-Ed 這類公共領域影片的逐字稿（`window.LISTEN_SCRIPTS[課程 id]`）。
> 2026-08-19 之後聽力全部自製、逐字稿寫在課程物件的 `script` 欄位裡，所以它目前是空的，
> 只保留給未來真的改回外部影片時使用。
> **每日流程不需要改它，第 6 步也不用 `git add` 它。**
>
> 網站另外還有一個 `LSUBS` 機制（學習者自己貼上的時間軸字幕），也不由這個流程產生。

### 3.7 配圖是硬性要求

3.5 產生的橫幅圖**四篇都不能少**：網站每篇文章上方都會顯示它，缺圖那篇上方會是空的。
收尾驗證會逐篇檢查 `window.ART[文章 id]`，缺圖就不要 commit。
（`cap` 圖說要寫「圖中的 X 對應文章的哪一句」，並點出這課的文法重點。）

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
  a.questions.forEach(q=>{if(!q.qCn) throw a.id+' 題目缺 qCn 中譯: '+q.q});
  a.questions.forEach(q=>{if(q.ans<0||q.ans>=q.opts.length) throw a.id+' ans 索引錯誤: '+q.q});
  if(a.target.length<5) throw a.id+' 重點字不足';
  a.target.forEach(t=>{if(t.ex&&!t.exCn) throw a.id+' 重點字缺 exCn 中譯: '+t.w});
  /* 重點字例句不可照抄或改寫本文（2026-09-14 使用者指定）：例句跟本文不能有連續 4 個字相同（重點字本身不算） */
  const _nm=s=>s.toLowerCase().replace(/[^a-z' ]/g,' ').replace(/ +/g,' ').trim();
  const _bw=_nm(a.paras.map(p=>p.en).join(' ')).split(' '); const _g4=new Set();
  for(let i=0;i+4<=_bw.length;i++) _g4.add(_bw.slice(i,i+4).join(' '));
  a.target.forEach(t=>{ if(!t.ex) return;
    const skip=new Set(_nm(t.w).split(' ').map(x=>x.slice(0,4)));
    const ew=_nm(t.ex).split(' ').filter(x=>!skip.has(x.slice(0,4)));
    for(let k=0;k+4<=ew.length;k++){ if(_g4.has(ew.slice(k,k+4).join(' '))) throw a.id+' 重點字例句跟本文重複，要換情境原創: '+t.w+' → '+t.ex; } });
  if(a.upgrade.length<2) throw a.id+' 升級句不足';
});
const grams=d.grammar.filter(x=>x.date===TODAY);
if(grams.length!==4) throw '今天應該有四個文法單元（A2/B1/B1+/B2），實際 '+grams.length;
LV.forEach(l=>{ if(grams.filter(g=>g.level===l).length!==1) throw '文法缺少或重複 '+l+' 這一級'; });
grams.forEach(g=>{
  if(g.quiz.length<4) throw g.id+' 文法題目不足';
  g.quiz.forEach(q=>{if(!q.qCn) throw g.id+' 文法題缺 qCn 中譯: '+q.q});
  g.quiz.forEach(q=>{if(q.ans<0||q.ans>=q.opts.length) throw g.id+' 文法 ans 索引錯誤: '+q.q});
  if(!g.sections.length||!g.traps.length) throw g.id+' 文法單元不完整';
});
/* 視覺化教材（data-gvplus.js）：全站 48 個單元都走這個版面，新單元不能漏 */
global.window=global.window||{};require('./data-gvplus.js');
const GP=window.GVPLUS||{};
const VT=['timeline','matrix','cols','chain','merge','shift','scale','swap','branch'];
const ICONS='house plane key calendar clock person bubble check cross arrow book tool pin star cycle balance link fork eye money flag'.split(' ');
grams.forEach(g=>{
  const p=GP[g.id];
  if(!p) throw g.id+' 沒有視覺化教材（data-gvplus.js）';
  ['vis','oneLine','map','visual','scenarios','steps','comparison','quizMore'].forEach(k=>{
    if(p[k]==null) throw g.id+' 視覺化教材缺 '+k;
  });
  if(!p.visual.type||VT.indexOf(p.visual.type)<0) throw g.id+' visual.type 不是支援的型別: '+p.visual.type;
  if(!p.visual.cap) throw g.id+' visual 缺 cap 圖說';
  if(p.scenarios.length<4) throw g.id+' 情境卡不足 4 張';
  p.scenarios.forEach(x=>{
    if(ICONS.indexOf(x.icon)<0) throw g.id+' 情境卡 icon 無效: '+x.icon;
    if(!x.ask||x.ask.indexOf('？')<0) throw g.id+' 情境卡 ask 要寫成問句: '+x.title;
    if(!x.why) throw g.id+' 情境卡缺 why 解說: '+x.title;
  });
  if(p.steps.length<5) throw g.id+' 逐步理解不足 5 步';
  if(!p.comparison.left||!p.comparison.right||!p.comparison.note) throw g.id+' comparison 不完整';
  if(p.quizMore.length<2) throw g.id+' quizMore 不足 2 題（quiz 4 + quizMore 2 = 6 題）';
  p.quizMore.forEach(q=>{if(q.ans<0||q.ans>=q.opts.length) throw g.id+' quizMore ans 索引錯誤: '+q.q});
  /* 資料裡不准出現 HTML 標籤與內嵌 SVG */
  if(/<[a-zA-Z\/]/.test(JSON.stringify(p))) throw g.id+' 視覺化教材裡有 HTML 標籤或 SVG（一律寫純文字）';
  /* 重複文法、不重複句子：同一句完整英文例句（5 字以上）整頁最多 2 次；練習題選項只算一次 */
  const cnt={};
  const key=s=>s.toLowerCase().replace(/[^a-z ]/g,'').replace(/ +/g,' ').trim();
  const grab=(o,fn)=>{ if(typeof o==='string'){ (o.match(/[A-Z][^.?!。？！]*[.?!]/g)||[]).forEach(fn); } else if(o&&typeof o==='object'){ Object.values(o).forEach(x=>grab(x,fn)); } };
  grab([Object.assign({},g,{quiz:null}),Object.assign({},p,{quizMore:null})],s=>{ const k=key(s); if(k.split(' ').length>=5) cnt[k]=(cnt[k]||0)+1; });
  const qs=new Set(); grab([g.quiz||[],p.quizMore||[]],s=>qs.add(key(s)));
  qs.forEach(k=>{ if(k.split(' ').length>=5) cnt[k]=(cnt[k]||0)+1; });
  Object.keys(cnt).forEach(k=>{ if(cnt[k]>2) throw g.id+' 同一句例句出現 '+cnt[k]+' 次（重複文法、不重複句子）: '+k; });
});
const byLv=l=>todays.find(a=>a.level===l);
console.log('OK 文章:', LV.map(l=>l+' '+byLv(l).id+' ('+byLv(l).words+'字)').join(' | '));
console.log('OK 文法:', LV.map(l=>l+' '+grams.find(g=>g.level===l).titleCn).join(' | '));"
node -e "JSON.parse(require('fs').readFileSync('../daily-state.json','utf8'));console.log('state ok')"
```

**音標一致性檢查（2026-09-18 起一定要跑）：**

```bash
cd b2lab
node tools/check-ipa.js          # 沒過會 exit 1，加 --list 看完整清單
```

它掃 `public/data-*.js` 全部詞條（含 `data-rel.js` 的關聯成員），擋下四種問題：

1. **同一個字有兩種以上音標寫法** —— 今天新寫的字若跟既有資料不一致會直接被抓出來。
   修法是挑一個合規且用得最多的寫法，把其他處一起改掉，不要只改自己新加的那筆。
2. **缺音標**（寫成 `—` 或空字串）。
3. **非美式符號**：ɒ、ɛ、ɜː(r)、əʊ、ɪə/eə/ʊə、ə(r)、一般字母 g、tjuː，以及沒有用 `/…/` 包起來。
4. **漏掉捲舌 r**（2026-09-21 新增）：拼字裡的 r 比音標裡的 r／ɚ／ɝ 多，
   例如 cargo hold 寫成 `/ˈkɑːɡəʊ həʊld/`、performance 寫成 `/pəˈfɔːməns/`。
   修法見第 2 步欄位表的音標規則②。

刻意保留的例外寫在腳本開頭的 `ALLOW` 表裡（目前只有 `elaborate`：adj. 與 v.
兩個詞性發音不同，是合併的教學條目）。真的需要新增例外時改那張表，並在裡面寫清楚理由。

> 背景：2026-09-18 做過一次全站大掃除，當時累積到 87 個字有兩種以上寫法、43 筆沒填音標。
> 2026-09-21 又發現「符號對了但漏捲舌」是另一種漏網（manager 被唸錯就是從這裡來的），
> 連雲端 123 份課堂筆記一起重掃了 433 處，第 4 項檢查就是為了不要再累積第三次。

也驗證今天四篇文章都有配圖：

```bash
cd b2lab/public
node -e "global.window={};require('./data-daily.js');require('./data-art.js');
const ART=window.ART||{}, TODAY=new Date().toISOString().slice(0,10);
const todays=(window.DAILY.articles||[]).filter(a=>a.date===TODAY);
todays.forEach(a=>{ if(!ART[a.id]||!ART[a.id].svg) throw a.id+' 沒有配圖（data-art.js）'; });
console.log('art ok', todays.map(a=>a.id).join(' | '));"
```

也驗證今天補的四課聽力（沒過就不要 commit 聽力那步的改動）。
⚠ 2026-10-06 修正：這段腳本以前讀的是 `window.LISTEN.lessons`，但 2026-08-19 起聽力
改成本站原創對話、放在 `notes[]`，舊的寫法會直接 `TypeError`。現在讀 `notes`：

```bash
cd b2lab/public
node -e "global.window={};require('./data-listen.js');
const L=window.LISTEN.notes||[], TODAY=new Date().toISOString().slice(0,10);
const LV=['A2','B1','B1+','B2'];
const todays=L.filter(x=>x.date===TODAY);
if(todays.length!==4) throw '今天聽力應該有四課（A2/B1/B1+/B2），實際 '+todays.length+' 課';
LV.forEach(l=>{ if(todays.filter(x=>x.level===l).length!==1) throw '聽力缺少或重複 '+l+' 這一級'; });
const MIN={'A2':12,'B1':14,'B1+':16,'B2':16};
todays.forEach(x=>{
  if(!/^dl\d{8}(a2|b1|b1p|b2)$/.test(x.id)) throw 'id 格式錯: '+x.id;
  if(x.kind!=='note') throw x.id+' kind 要是 \'note\'（本站自製 TTS 對話），實際 '+x.kind;
  ['date','level','minutes','title','titleCn','series','topic','focus','intro','tip'].forEach(k=>{
    if(!x[k]) throw x.id+' 缺欄位 '+k; });
  if(x.yt||x.sourceUrl||x.keyLines||x.cc||x.needsSubs) throw x.id+' 不該有外部影片的欄位（yt/sourceUrl/keyLines/cc/needsSubs）';
  const sc=x.script||[];
  if(sc.length<MIN[x.level]) throw x.id+' 對話不足 '+MIN[x.level]+' 句，實際 '+sc.length;
  sc.forEach((s,i)=>{ if(!s.en||!s.cn) throw x.id+' 第 '+(i+1)+' 句缺英文或中譯'; });
  if(new Set(sc.map(s=>s.sp).filter(Boolean)).size<2) throw x.id+' 對話至少要有兩個說話者';
  const pre=x.pre||[];
  if(pre.length<5||pre.length>7) throw x.id+' 聽前單字要 5–7 個，實際 '+pre.length;
  pre.forEach(t=>{ if(!t.w||!t.ipa||!t.cn||!t.def) throw x.id+' 聽前單字欄位不全: '+t.w;
    if(!/^\/.*\/$/.test(t.ipa)) throw x.id+' 音標要用 /…/ 包起來: '+t.w+' '+t.ipa; });
  if((x.questions||[]).length<4) throw x.id+' 理解題不足 4 題';
  x.questions.forEach(q=>{
    if(!q.qCn) throw x.id+' 題目缺 qCn 中譯: '+q.q;
    if(q.ans<0||q.ans>=q.opts.length) throw x.id+' ans 索引錯誤: '+q.q;
  });
});
const ids=todays.map(x=>x.id);
if(new Set(ids).size!==ids.length) throw '今天有重複的聽力 id';
console.log('listen ok', todays.map(x=>x.id+'('+x.level+', '+x.script.length+'句, '+x.questions.length+'題)').join(' | '));"
```

也驗證四課聽力都在 `index.html` 的 `LS_THUMB` 登記了線稿圖示（見 3.6.1；漏登記卡片會變成 emoji）：

```bash
cd b2lab/public
node -e "const fs=require('fs');global.window={};
require('./data-book.js');require('./data-listen.js');
const I=window.BOOK_ICONS||{}, TODAY=new Date().toISOString().slice(0,10);
const src=fs.readFileSync('index.html','utf8');
const m=/const LS_THUMB=\{([\s\S]*?)\n\};/.exec(src);
if(!m) throw '在 index.html 找不到 LS_THUMB';
const map={}; [...m[1].matchAll(/([A-Za-z0-9_]+)\s*:\s*'([A-Za-z0-9]+)'/g)].forEach(x=>map[x[1]]=x[2]);
const todays=(window.LISTEN.notes||[]).filter(x=>x.date===TODAY);
const picks=[];
todays.forEach(x=>{
  const k=map[x.id];
  if(!k) throw x.id+' 沒有在 index.html 的 LS_THUMB 登記圖示（卡片會退回 emoji，見 3.6.1）';
  if(!I[k]) throw x.id+' 的圖示 '+k+' 不在 BOOK_ICONS 裡';
  picks.push(k);
});
if(new Set(picks).size!==picks.length) throw '今天四課的圖示有重複: '+picks.join(',');
const all=Object.values(map);
const dup=all.filter((v,i)=>all.indexOf(v)!==i);
if(dup.length) console.warn('⚠ LS_THUMB 全表有重複的圖示: '+[...new Set(dup)].join(','));
console.log('thumb ok', todays.map(x=>x.id+'→'+map[x.id]).join(' | '));"
```

### 6. commit 並 push

```bash
git add b2lab/public/data-daily.js b2lab/public/data-gvplus.js b2lab/public/data-art.js b2lab/public/data-listen.js b2lab/public/index.html b2lab/daily-state.json
git commit -m "Daily content YYYY-MM-DD: 4 levels (A2/B1/B1+/B2) — <當日主題>"
git push origin main
```

上面六個檔是每次執行**一定**會動到的（`index.html` 只為了 3.6.1 的 `LS_THUMB` 那一行）。
`data-scripts.js` 不要加（見 3.6.2，它現在是空的）。
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
- B2 篇是新聞改寫還是原創；新聞改寫要附原文網址
- **§1.5 網路自我檢查的結果**：WebFetch 能用（用原文取材）或仍被擋（退回 WebSearch 摘要）。
  若仍被擋，明確寫一行「⚠ WebFetch 仍被擋」提醒使用者確認網路政策。
- `usedUnits` 與 `usedUnitsTom` 各還剩幾個單元沒教
- 四張橫幅各用了哪套配色與哪**五個**圖示
- 四課聽力各用了哪個情境、哪個線稿圖示（`LS_THUMB`），以及當天的文法點在對話裡怎麼出現
- 有跳過或沒照任務書做的項目要說明原因（四個程度是硬性要求，不能跳）

（舊制的「⏳ 字幕待補」清單已經不需要了：2026-08-19 起聽力全部自製，
逐字稿寫在 `script` 欄位，不會有只收影片、等人補字幕的情況。）

最後提醒一句：Tom 會看到 A2／B1／B1+ 三份，Anita 會看到 B1／B1+／B2 三份。

若任何步驟失敗，說清楚卡在哪一步、不要留下半套的檔案
（寧可完全不 commit，也不要只寫兩篇就推上去——四個程度是硬性要求）。
