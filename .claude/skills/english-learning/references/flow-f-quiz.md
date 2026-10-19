## 流程 F：生成當天考題並同步到 index.html + 推 GitHub（2026-07-27 確立，2026-07-27 併入 index.html）

出考題功能。**觸發時機**（2026-08-21 改為只有使用者明確要求才執行，建立筆記後**不再自動接著執行**）：
- 使用者說「出考題 / 生成考題 / 更新測驗 / 幫我出題 / 同步 Speak Up」，或針對某一天筆記要求出題

> ⚠ **2026-07-30 index.html 已改版為「Speak Up!」口說優先設計**（暖色調、六大口說活動：說出來/跟讀/單字口說/朗讀/情境開講/快速檢查，用 Web Speech API 麥克風辨識）。
> **但資料層完全沒變**：`const vocab / vocabSources / allTrans / allKW / articles / DAYQUIZ` 與所有 `// ===SYNC:*===` 標記原封不動保留，因此 **流程 C / F 的所有插入步驟不受影響、照舊執行**。
> 差別只在使用者端：考題現在是「📝 快速檢查」活動（不再叫「每日測驗分頁」），成績不再寫 localStorage `el_dq`（口說進度改存 `speakup_v1`）。出題資料格式（DAYQUIZ 的 mc/fill/trans）不變。

### 架構（DAYQUIZ 題庫嵌在 index.html 的 JS 裡）

考題資料嵌在 index.html 的 JS 裡：
- **題庫**：`const DAYQUIZ = { ... }`，含 `// ===SYNC:DAYQUIZ_START/END===` 標記，以日期為 key
- **作答/批改/算分/隨機抽題**：`initDayQuiz / startDayQuiz / dqRender / dqSelect / dqSubmitFill / dqNext / dqFinish`
- **成績記錄**：存在 localStorage `el_dq`（`{ "YYYYMMDD": {attempts,best,total,lastScore,lastPct,ts} }`）；
  下拉選單與「📊 我的成績紀錄」會顯示每天最佳成績與練習次數。**skill 不需碰記錄邏輯，只需維護 DAYQUIZ 資料**。

> 純前端、不需後端、不需 Firebase。獨立的 `quiz.html` / `quiz-data.js` 已於 2026-07-27 廢除併入 index.html，**不要再產生或引用這兩個檔案**。

**兩層題庫（2026-07-27 確立）**：
- **自動題（底層，所有日期）**：`generateAutoQuiz(d)` 依 `vocabSources` 把每個單字對應到來源日期，任何有 ≥4 個單字的筆記日期**自動出現在下拉選單並可出題**（單字中↔英選擇題）。使用者無需 skill 介入即可測驗任何一天。
- **精選題（上層，覆蓋）**：`DAYQUIZ[d]` 若存在則優先使用，下拉選單標 **⭐**。這就是流程 F 產出的手寫題組（含改錯、介系詞、情境等，比自動題更貼近該堂課）。
- 流程 F 的價值＝**把某天從「自動單字題」升級為「⭐ 精選題組」**。因此流程 F 通常只針對**當天新課堂筆記**做，不需回頭補舊日期（舊日期已有自動題可用）。

### 題庫資料結構

`DAYQUIZ` 每一天是一個 key（日期字串），最新日期排最上面：
```javascript
"YYYYMMDD": {
  title: "主題",                          // 與資料夾主題一致（中文）
  subtitle: "English subtitle line",       // 英文副標
  questions: [ /* 題目物件，見下 */ ]
}
```

**題目物件有三型：**

選擇題 `mc`（`answer` 是 0-based 索引）：
```javascript
{ type:"mc", tag:"單字", q:"題幹（可含英文句子與 ___ 空格）",
  options:["選項0","選項1","選項2","選項3"], answer:1,
  explain:"簡短中文解說，最好帶關鍵字或 IPA。" }
```

填空題 `fill`（`answer` 是「可接受答案陣列」）：
```javascript
{ type:"fill", tag:"介系詞", q:"句子含 ___ 表示要填的空格。",
  cn:"中文提示（選用，會顯示在題幹下方灰字）",
  answer:["in","into"],                     // 多種可接受寫法都列上
  explain:"解說。" }
```
- 比對前系統會 normalize：**轉小寫、壓縮空白、去句尾句點/句號**。所以 `"In."`、`" in "` 都能對到 `"in"`。
- 若答案含多個字（如 `at / in`、`to some extent`），把常見寫法變體都放進陣列（`["at / in","at/in"]`）。

翻譯題 `trans`（2026-07-27 新增，`answer` 是單一參考英文句；**自評式**）：
```javascript
{ type:"trans", tag:"翻譯", q:"中文整句（要翻成英文）",
  answer:"Model English sentence.",          // 單一參考答案（字串，非陣列）
  explain:"解說。" }
```
- 作答流程：使用者看中文 → 可選填英文 → 按「看參考答案對照」→ 自評「✅ 我答對了 / ❌ 我答錯了」。整句翻譯難自動精確比對，故用自評。
- 取材：用該堂課的**核心句型或作業訂正後的正確句**，一份題組放 1–2 題即可（放最後面收尾）。

### 🚫 最高原則：內容 100% 來自筆記，禁止 AI 生成（2026-07-27 使用者強調）

**出題、單字、翻譯、造句例句，全部只能逐字取自當天筆記原文；一律不可自行造句、改寫、或用 AI 生成範例。**
- 例句／翻譯句：直接抄筆記裡出現過的句子（含中譯）。筆記沒有的句子就不要放。
- 造句 `exs`：筆記該字有幾個例句就放幾個，**寧可只放 1–2 句，也不要湊數編造**。
- 單字定義 `def`：若筆記有英英解釋就用筆記的；沒有就留簡短中性描述或省略，**不要編情境**。
- 選擇題誘答選項：用筆記中的錯句／對比詞，不要憑空捏造。
- 唯一可自行寫的是：中文 `explain` 解說、`tag` 分類、題幹引導語（如「哪一句正確？」）——這些是「包裝」，不是「教材內容」。
- 若某類內容筆記量不足，就讓該日期該活動**少一點或空著**（前端會顯示提示），這是正確的，不要為了補滿而生成。

### 出題規範（品質把關）

1. **題數依筆記內容而定（約 10–15 題）**，寧缺勿造
2. **內容只能來自當天筆記，嚴禁自行加入筆記沒有的教材**（見上方最高原則 + 呼應 [[feedback_doc_content_rules]]）
3. **涵蓋面**（依當天筆記實際有的內容取用，不足就略過該類）：
   - 單字字義（單字表 → mc）
   - 介系詞 / 固定搭配（wrap in、at...in... → fill）
   - 文法變化（feel like + V-ing、regret + V-ing、時態 → fill/mc）
   - 改錯選正確句（作業複習的錯句 vs 訂正句 → mc，兩個選項一錯一對）
   - 情境問答（機場/職場/口語句型 → mc）
   - ⚠ **不要出「發音 / 語調」類題目**（2026-07-27 使用者指定移除；文字測驗考發音體驗不佳）
4. `tag` 用簡短中文分類：`單字 / 介系詞 / 文法 / 改錯 / 句型 / 機場 / 連接詞` 等（**不含「發音」**）
5. 每題都要 `explain`（簡短中文，幫使用者複習）
6. 改錯題直接用作業複習裡學生的**原錯句**當誘答選項、**訂正句**當正解，最貼近她的實際錯誤

### 同步步驟

1. `Read` 讀取 `index.html`，找到 `const DAYQUIZ = {` 與其下的 `// ===SYNC:DAYQUIZ_START===` 標記
2. 檢查該 `"YYYYMMDD"` key 是否已存在：
   - **已存在** → 若要更新就整組替換該區塊；否則跳過（避免重複）
   - **不存在** → 繼續
3. 用 **Edit 工具**，在 `// ===SYNC:DAYQUIZ_START=== ...` 那一行的**正下方**插入新題組區塊 `"YYYYMMDD": { ... },`（最新在最上面）
4. 同步更新標記行的 `sync_date` 與 `count`：
   `// ===SYNC:DAYQUIZ_START=== sync_date:YYYY-MM-DD count:N`（N = 目前總題組數）
5. 推 GitHub（通常與流程 C 的 index.html 同步一起提交）：
   ```bash
   git add index.html
   git commit -m "Add daily quiz for YYYYMMDD (主題)"   # 附 Co-Authored-By trailer
   git push origin main
   ```
   跑完 push 記得做「流程 00-C」收尾檢查（`git log --oneline origin/main..main` 要空的、`git branch --no-merged main` 沒有落單分支）。
6. **接著執行「流程 G」部署到 Firebase**，讓線上網站 https://learning-english-notes.web.app 同步更新（若本次是併在流程 C 一起跑，流程 C Step 5.5 已部署，這裡就不必重複）：
   ```bash
   cd "D:/english-learning" && cp index.html public/index.html && firebase deploy --only hosting
   ```

---

