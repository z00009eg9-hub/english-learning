## 流程 H：同步課堂筆記到 B2 Lab 課本（2026-08-18 確立）

**觸發時機**：**只在使用者明確要求時執行**（說「更新課本／同步 B2 Read／同步課本」等），把該課筆記同步到 B2 Read 的「📕 課本」分頁。（2026-08-21 使用者指定：建立或更新課堂筆記 Google Doc 之後**不再自動接著執行**本流程。）

### 步驟

1. **讀 Doc**：用 Drive MCP `read_file_content` 讀取該課的 Google Doc（優先【格式版】）。
   - ⚠ **每次都要重讀一次最新版，不可沿用對話中稍早讀到的內容**（2026-08-29 使用者指定）。
     筆記會被繼續編輯：2026-08-29 同步 20260827 時，我用的是當天稍早讀到的版本，
     照著做了「XI. 課堂其他小句與複習計畫」與「XII. 快速總結」兩節，
     但使用者後來已把這兩節從 Doc 刪掉，課本因此多出原稿沒有的內容。
   - **已存在的課要更新時，讀完 Doc 先與 `data-book.js` 現況逐節比對**：
     Doc 有而課本沒有的補進去、**Doc 已刪掉的要從課本移除**，維持不增不減。
     只補不刪會讓課本停在舊版。
   - ⚠⚠ **截斷處理規則（2026-09-06 新增，20260903 出過事，不可省略）**：
     `read_file_content` 對長文件會截斷（20260903 每次都停在「VII 理解問題第 5 題」）。
     **不可以用資料夾裡的 `YYYYMMDD.html`、`*.gs`、或對話稍早的內容補齊沒讀到的段落。**
     那些檔案只是「當初用來生成 Doc 的快照」，Doc 之後被編輯過就不再相符——
     20260903 就是這樣把使用者已經刪掉的「VIII. 快速總結」寫進課本，隔天才被抓到。
     **✅ 正解：改用 `/mobilebasic` 讀全文**（2026-09-06 實測可行，一次拿到完整內容、不截斷）：
     用 Chrome MCP（`claude-in-chrome`，帶著使用者的 Google 登入）開
     `https://docs.google.com/document/d/<FILE_ID>/mobilebasic`，再 `get_page_text`。
     這個網址是 Google Docs 的純 HTML 版，表格、章節、🔬 文法解說全都在 DOM 裡，
     `read_file_content` 讀不到的尾段也會完整出現。
     ⚠ 不要開一般的 `/edit` 網址：Docs 編輯器用 canvas 繪製，`get_page_text` 只會拿到工具列文字。
     （步驟：`tabs_context_mcp{createIfEmpty:true}` → `navigate` 到 mobilebasic → `get_page_text`
     → 用完 `tabs_close_mcp` 關掉分頁。）
     退路（Chrome 真的不能用時）：**只同步已確實讀到的章節**，回報中明寫
     「Doc 讀到 ⃝⃝ 節為止，之後未確認」，並直接問使用者「⃝⃝ 之後還有哪些章節？」拿到答案再補；
     更新既有課時，未確認的章節**維持原狀**（不新增也不刪除），確認後再處理。
   - **收尾章節對帳**：把 lesson 物件的章節標題（`hwTitle`/`vocabTitle`/`phrasesTitle`/
     `grammarTitle`/`extraTitle`/`summaryTitle`…）列出來，與 Doc 的章節編號 I、II、III… 逐一對照。
     課本有、Doc 沒有的一律刪掉；編號對不上就停下來問，不要自己補內容。
2. **轉成 lesson 物件**：加進 `D:\english-learning\b2lab\public\data-book.js` 的 `window.BOOK.lessons` 陣列（附加在陣列尾端即可，執行時會依 date 排序）。
   - ⚠ **封面必須是線稿（2026-10-09 使用者指定）**：目錄卡片縮圖優先用閱讀文章的五圓插圖；**沒有閱讀文章的課一定要加 `iconSvg`**（96×96 線稿圓形圖示，仿其他課），不可只留 `icon` emoji。推送前在本機課本目錄確認縮圖不是彩色 emoji。
   - **內容不增不減**，逐字取自 Doc；schema 參考檔內 `bk20260813`（最完整範例）。
   - 常用欄位：`id`（bk+YYYYMMDD，同日兩份加 a/b）、`icon`（貼題 emoji）、`date`、`doc`（Google Doc 連結）、`title`/`titleCn`/`topics`、`hwTitle`+`hw[]`（n/wrong/fix/ok/cn/pat/note）、`vocabTitle`+`vocab[]`（w/star/ipa/pos/cn/ex/exCn）、`vocab2`/`vocabReview`、`phrasesTitle`+`phrases[]`（p/cn/ex/exCn）、`colloc[]`（p/def/defCn/cn）、`grammarTitle`+`grammar[]`（k/title/pat|patLabel/pts[]/exs[{tag,en,cn}]）、`cmpTitle`+`cmp[]`+`cmpWarn`、`reading[]`（bar/title/titleCn/paras[{en,cn}]/questions[{q,qCn,a,aCn}]/sumEn[]/sumCn[]）、`extraTitle`+`extra[]`（title+exs）、`extraVocabTitle`+`extraVocab[]`（k/en/cn）、`discussionTitle`+`discussion[]`（q/qCn/a/aCn）、`summaryTitle`+`summary[]`（k/v）。
   - 渲染器沒有的區塊會自動跳過，不必硬湊；區塊順序固定為 hw→vocab→phrases→grammar→cmp→reading→extra→extraVocab→discussion→summary，對不上 Doc 順序沒關係，標題可自訂。
3. **閱讀文章一定要加五圓插圖**：在 data-book.js 檔尾的插圖 IIFE 中，把該課加進 `S`（spec）——`S[lessonId] = [ [五個圖示 key 陣列, '中文圖說'], ... ]`（每篇 reading 一組）。
   - 圖示從圖示庫 `I`（`BOOK_ICONS`）挑，每個階段畫**具體的東西**；不要拿星星／時鐘／文件這類萬用圖示湊數，也不要整組照抄別課的五個。
   - 加完跑 `cd b2lab && node tools/check-art.js`（同組不重複、萬用圖示每組最多 1 個、相鄰課程不重複）與 `node tools/check-icons.js`，沒過就回頭換圖示。
   - **圖示不夠就自己補畫，不用問使用者**（2026-10-11 使用者指定）：缺貼切的就直接加進 `var I={…}`（一次最多 6 個），畫法見 `b2lab/DAILY_TASK.md` 3.5.1，補完跑 `cd b2lab && node tools/check-icons.js`，回報時列出新增的圖示。沒有閱讀文章的課畫封面 `iconSvg` 時同理。
   - 圖說描述文章的故事階段（「A → B → C → D → E。」格式），內容取自文章本身。
   - 新增圖示後要用 headless Chrome 截圖驗證（`chrome --headless=new --screenshot`，輸出到本機可寫目錄，G: 或 scratchpad 會存取被拒）。
3b. **Build Relationships（關聯學習系統，2026-09-09 新增，每次新增／更新課都要跑）**：`cd b2lab && node tools/build-rel.js`
   - 增量模式：只處理 `data-rel.js` 還沒收錄的課，跟「全部歷史課次＋本週剛加的課」比對，只新增／更新必要的關聯；**不會重掃全部**。
   - 完全 rule-based（老師的比較表 cmp、詞庫 `tools/rel-lexicon.js`、字尾詞族規則、片語搭配、閱讀文章動詞順序），沒有 AI 呼叫、沒有隨機；同輸入必同輸出，重跑不會重複（canonical key）。
   - 只整理「已學過」的字：成員必須出現在 vocab / vocab2 / phrases / colloc / cmp，沒學過的字不會被塞進去。
   - 改過 `rel-lexicon.js` 或想重做全部：`node tools/build-rel.js --rebuild`；只看報告不寫檔：`--dry-run --verbose`。
   - 輸出 `public/data-rel.js` 要一起 commit（CI 沒有建置步驟，sanity check 會載入它）。
3c. **產生影片版（2026-09-27 使用者指定：每次同步課本都要一起做）**
   每堂課一支約 3–5 分鐘的「影片」：B2 Read 網頁即時產生畫面、用裝置的美式語音朗讀，
   右側雙語字幕逐句同步、重點表達變彩色標籤、下方重點表達卡可跟讀／再聽／收藏。
   播放器已做好（`index.html` 的 `vd*` 函式），**每課只要寫腳本**。範本：`data-video.js` 的 `bk20260917`、`bk20261001`（最新、章節最完整）。
   - **放哪裡**：`b2lab/public/data-video.js` 加一筆 `window.VIDEO.<lessonId> = {…}`；
     `data-book.js` 該課加 `video: true`（課程頁頂端才會出現「▶ 影片版」按鈕）。
     分享網址：`https://english-b2-lab.web.app/?video=<lessonId>`。
   - **結構（2026-09-27 定版：7 章、約 35–40 句、400–550 個英文字，總長一定壓在 5 分鐘內）**：
     | 章節 ch | 內容 | vis.type |
     |---|---|---|
     | 0 開場 | 旁白 2 句：今天的情境＋要注意聽什麼；`titleArt` 放 3 個 BOOK_ICONS | `title` |
     | 1 情境 | **新寫**一段兩人對話（約 14 句），把這課的單字、句型自然串起來；`sceneArt` 放場景插圖，**每句都在 `vis.art` 配一張圖**（護目鏡→goggles、乾燥劑→desiccant／desiccantRed、標籤→label、大門→gate、封箱→sealedBox、打招呼／道謝→clipboard…），圖要跟著對話變，不能整段同一張。畫面配置：**插圖是主角**（填滿地點列與字幕之間，`vdPaint` 會量字幕條高度寫進 `--vd-sub-h`），人物只是小頭像＋名字放右上角、不顯示職稱（手機只顯示正在說話的人的名字） | `scene` |
     | 2 重點表達 | 4 張解說卡：大字＋美式音標＋英文定義＋中文＋一行易錯提醒；易混淆用對照卡 | `slide`／`vs` |
     | 3 片語搭配 | 3 張「搭配詞家族卡」：核心字＋3–4 個搭配詞依序亮起（取自筆記的片語表） | `family` |
     | 4 文法 | 2–3 個句型，每個 1–2 張「公式卡」：色塊 `s` 主詞／`v` 動詞／`o` 受詞或其他／`n` 功能詞，`x` 劃掉、`add` 新出現；底下一行 💡 重點 | `pattern` |
     | 5 作業訂正 | 挑 2 題作業：❌ 原句（錯處 `bad[]`）→ ✅ 訂正（改對處 `good[]`）＋一句為什麼 | `fix` |
     | 6 小測驗 | 3 題填空：題目句（`say` 把 ___ 唸成 blank、`pause: 4000` 倒數）＋答案句（`show: true`）；最後一句 `end` | `quiz`／`end` |
     超過 5 分鐘時優先刪情境對話的句子，其次解說卡、作業訂正；片語和文法章節保留。
   - **插圖（使用者選 A＋B）**：`art` 先找 `VIDEO_ART`（data-video.js 檔頭的專屬插圖，是**跨課共用的線稿庫**，2026-09-27 起已有 309 張（2025–2026 全部 80 課累積，key 見各課區塊註解）；先用 `node -e "global.window={};require('./public/data-video.js');console.log(Object.keys(window.VIDEO_ART).join(' '))"` 列出全部；新課先 grep `VIDEO_ART` 現有 key 重用，缺的才新畫並加進去，一課最多新畫 4 張），找不到再用課本線稿圖示庫 `BOOK_ICONS`
     （data-book.js 的線稿圖示庫；不夠就照上面第 3 步自己補）。專屬插圖用同一套線稿風格：
     `viewBox="0 0 200 150"`、線條 `#2b2118` 粗 3、主色 `#e8813a`、底色 `#fdf6ec`／`#f7e3c9`，需要時用紅 `#d9534f`、藍 `#3b82c4`。
     畫**有教學意義的具體東西**（乾燥劑變紅、標籤上的型號／流水號、配件盒缺一格），抽象概念直接用 BOOK_ICONS。
     `VIDEO_ART` 是全站共用的，新課能沿用就沿用，新畫的放進去並在註解寫用途。
     ⚠ 不用真實照片、不放工廠實拍（B2 Read 是公開網站）。
   - **配色**：影片頁一律沿用網站變數（`--bg`／`--card`／`--accent`…），**不做深色／劇院模式**（使用者 2026-09-27 指定）。
   - **播放頁 UI 原則（2026-09-27 使用者指定簡化，改 `vd*` 程式時不可違反）**：學習流程是「看情境 → 聽英文 → 看字幕 → 學一句 → 跟讀」，一次只讓一個東西搶焦點。
     - 控制列第一層只有：播放／上一句／下一句／速度／字幕。**字幕鈕只管影片內的 CC**（英文→雙語→中文→關循環，存 `b2lab_vdsub`；電腦預設英文、手機預設雙語），右欄逐字稿永遠雙語——兩邊分工像 YouTube 的 CC＋逐字稿面板，不重複（2026-09-27）；單句循環、每句停頓、語音選擇收在「⋯」裡。
     - 字幕只顯示時間碼、英文、中文；只有目前這句上色與顯示重點標籤，其他句子淡一階。
     - 重點卡三行（見上），跟讀＝先唸一次例句再自動錄音；不再有「查看解析」。
     - **影片尺寸只看視窗寬度**（60%，560–1000px），永遠不因高度縮小（2026-09-27 曾用高度算寬度，寬但矮的視窗就把影片縮成縮圖，被使用者退件）。
     - 電腦、平板橫放（≥1000px 寬、橫向）：**整頁固定在一個螢幕內不捲動**。左欄＝影片＋控制列（在影片下方），影片寬度取「視窗 60%（560–1200px）」與「（可用高度 − 控制列 66px）×16/9」較小者，矮螢幕時左欄剛好填滿、高螢幕時上下置中；右欄＝字幕填滿剩下的寬與高、只有字幕框自己捲（細捲軸，滑鼠移上去才明顯）＋重點卡釘在右欄底部。標題列一行。⋯ 設定是控制列正上方的浮動面板。
     - 重點卡固定三行、**解析常駐不用點開**（2026-09-27 使用者指定）：①重點英文＋中文＋🗣 跟讀＋☆ 收藏（同一列）②🔊 情境例句＋中文（同一段）③💡 解析（`expr.note`，13px）。不放標籤、不放「影片中的句子」、沒有展開鈕。每個 `expr` 都要有 `note`。
     - **顏色階層**：橘色只留給「目前這句」（字幕欄底色、影片內字幕、播放鍵）。重點卡標題用**該片語在字幕裡的標籤色**（`hi[].c`：1 金／2 粉／3 藍／4 綠，三處同色讓學習者對得上），中文灰色，不加框；跟讀、收藏都是白底細框（滑鼠移上去邊框變橘）。卡片字級比字幕低一級：標題 18px、片語中文 14、例句 15／13、解析 13、按鈕 14。
     - 課程頁的「▶ 影片版」按鈕是藍色填滿 `--b1p`（頁面上唯一的藍色＝入口）。情境畫面：頭像＋插圖排成一列、整組水平垂直置中（`.vd-scene`），插圖 32%（手機 26%），不再靠左靠右各放一邊留空。
     - 畫面內部：有字幕條的畫面（開場、情境）上下分區，內容 `padding-bottom` 留給字幕條與控制列；內容用 `justify-content:safe center`，太高就從頂端排。畫面高度 <470px 時（container query）收起開場圖示與解說卡旁插圖、縮小片語／文法色塊。
     - 平板直向、手機（2026-09-27 v5）：整頁也固定不捲；標題列一行（句數移到進度列的時間旁）、影片＋控制列在上，下面一個「字幕｜重點句」切換鈕，同時只顯示一個、各自在框內捲動。手機字幕列的片語只上色不加框、不顯示中文小字。
     - 手機底部導覽（全站）：只留 今日、課本、閱讀、文法、更多；聽力／實景／單字卡／進度收在「更多」往上滑出的面板（`#moresheet`、`moreTog/moreGo`），電腦版側欄不變。
     - 字級（2026-09-27 使用者反映太小後調大）：字幕英文 18px／中文 15px、控制列 15px、重點卡 26／17px，都乘上網站字級倍率 `--fs`；畫面內小字下限 14px。
     - 不要再加新的卡片、動畫或裝飾；新功能先放進「⋯」或「查看解析」。
     - **使用者的實際可用空間約 1280×560**（1920×1080 螢幕、Windows 縮放 150%、Chrome 100%，扣掉工具列與書籤列；CSS 像素＝螢幕像素 ÷ 1.5）。改完一定要跑：電腦 **1280×560**、1536×672、1920×850、1366×768、1920×1080；平板 1024×768、768×1024；手機 375×812、360×740。
       檢查：電腦／平板橫放整頁不捲動、重點卡完整可見、畫面與字幕之間沒有大空白；所有尺寸沒有橫向溢出、畫面內容塞得下、地點標籤不被頭像蓋住、目前這句一定在字幕框內、手機控制列一行排得下。
   - **腳本可以新寫**（使用者同意），但用字、句型要來自這一課的筆記，程度對應該課（B1/B1+）。
   - **情境對話要像美國母語者在講話（2026-10-01 使用者指定，取代「一句一個示範句」的寫法）**：
     1. **越短越像母語者，不要刻意加長**：改寫後總字數不可比原本多。長句拆短、能省的省（主詞、冠詞、「Today I’d like to…」這類鋪陳都拿掉）；短回應（Got it. / Makes sense.）只在自然時併進下一句開頭，不另加句子，也不要為了口語硬塞 Honestly / Actually / you know。
     2. 一律縮寫（I'd、we've、that's、don't、it'll）；句首可用口語連接詞（So、Okay、Right、Actually、Well、Yeah）。
     3. 問句與回答可以是片段：「And visitors?」「Glasses and gloves. Every time.」
     4. 多用片語動詞與日常字（check out、figure out、make sure、swap it out）；**這課要教的術語照用**（take corrective action、visually inspect 在工廠本來就是母語者會講的），只是前後用自然語氣包起來。
     5. 加自然的追問與反應：How come? / Like what? / What happens if…? / Oh, so that's why…
     6. 寒暄開場、自然收尾：「Hey Tom, good to see you. Coffee first, or straight to the line?」／「Alright, that's everything on my list. Thanks for walking me through it.」
     7. **不用 um / uh**（TTS 會逐字唸出來），停頓用「Well,」「Hmm,」「Let's see…」或破折號「—」；逗號、問號、破折號是唯一能影響 TTS 語氣的工具，多用。
     8. 一句最多放 1 個教學片語（`hi`），不要一句塞兩個；`hi.t` 仍要逐字出現在 `en` 裡（含大小寫）。
     9. 角色聲線固定：Tom（稽核員／客戶）正式但友善；Anita（主人翁）輕鬆一點。旁白維持清楚簡潔，可以正式。
     10. 「自然但乾淨」：目標像美國同事在工廠聊天，不是影集。gonna / yep / that kind of thing 可以，ain’t、俚語不行；B1 學習者要看得懂。
     範本：`bk20260917`、`bk20260922` 的第 1 章（2026-10-01 依此規則重寫）。
     人物只用 **Anita（女聲 `voice:'f'`）與 Tom（男聲 `voice:'m'`）**，旁白 `N`（`voice:'n'`），跟每週三文章的人物規則一致。
     裝置只有一個美式語音時（Chrome 常見），`vdPitchFor()` 用音調分角色：f ×1.15、m ×0.85、n 不變（2026-09-27 使用者選 A）；⋯ 面板會提示用 Edge 或到 Windows 語言設定加英文語音（C，由使用者自己裝）。
   - **中文只當字幕、不朗讀**：每句 `cn` 必填；影片長度只算英文字數。
   - **重點表達**：每句最多 2 個 `hi`（片段要逐字出現在 `en` 裡），`k` 指向 `expr`；`expr` 的 `ex` 要換一個跟對話不同的情境。
     解說卡、作業訂正、答案句也要配 `hi`，不然下方表達卡會停在前面對話的片語、跟畫面對不上。
   - **音標**：解說卡寫成 `w:"…", ipa:"…"` 相鄰，`tools/check-ipa.js` 會一起檢查；**同字要跟 `data-book.js` 同一個寫法**（先 grep 沿用）。
   - **驗證**（都過了才 commit）：
     ```bash
     cd b2lab && node -e '
     global.window={};require("./public/data-video.js");const d=window.VIDEO["<lessonId>"];
     const w=d.lines.reduce((s,l)=>s+(l.say||l.en).split(/\s+/).length,0);
     const sec=w/2.4+d.lines.length*0.5+d.lines.reduce((s,l)=>s+(l.pause||0),0)/1000;
     console.log("句數",d.lines.length,"字數",w,"約",Math.floor(sec/60)+"分"+Math.round(sec%60)+"秒");
     d.lines.forEach((l,i)=>(l.hi||[]).forEach(h=>{if(l.en.indexOf(h.t)<0)console.log("標籤不在句子裡",i,h.t);if(!d.expr[h.k])console.log("缺 expr",h.k)}));'
     node tools/check-ipa.js
     ```
     長度要落在 3–5 分鐘；本機 `?video=<lessonId>` 打開、各種畫面切一遍、主控台沒有錯誤，手機寬度也看一次。
   - **收尾檢查：全站不可以有課漏做影片版**（2026-10-02 加：10/01 被同步時漏做，使用者自己發現）。輸出必須是「(無)」：
     ```bash
     node -e "global.window={};require('./b2lab/public/data-book.js');require('./b2lab/public/data-video.js');const L=window.BOOK.lessons,V=window.VIDEO;console.log('沒有影片版的課:',L.filter(l=>!l.video||!V[l.id]).map(l=>l.id).join(', ')||'(無)')"
     ```
     Codex 讀的是 repo 根目錄的 `AGENTS.md`（§5-1 有同一份必做清單）；這節規則有改時兩邊要一起更新。
   - **在 Google 筆記頂端加連結**：副標題（Topics 那一行）下方插一段「**▶ 影片版（約 N 分鐘）**：雙語字幕同步、重點表達卡、跟讀練習 ↗」，
     整段 `setLinkUrl` 到分享網址、字色 `#c9631f`、前段粗體、12pt、對齊方式跟副標題一樣。
     先 `body.findText("影片版（約")`，已經有就跳過（可重跑）。09/17 用的函式是 `addVideoLink0917()`，照著改 DOC／URL／副標題比對字串即可。
     用 Chrome MCP 開 Apps Script 專案「英文筆記-音標統一美式」執行：**只在檔案最上方新增函式，不要刪掉專案裡別人的函式**；
     ⚠ 函式下拉選單會選錯，要把目標函式放檔案第一個、點進編輯器後 Ctrl+S（焦點不在編輯器時存不了），重新載入確認下拉選單預設是它，再按執行。
4. **驗證**：`node -e "global.window={}; require('./data-book.js'); ..."` 檢查語法與 lessons 數；本機 `bkGo(id)` 渲染不報錯。
5. **sw.js 快取版本 +1**（`b2lab/public/sw.js` 的 `CACHE = 'b2lab-vNN'`）。
6. **部署**：`cd b2lab && npx firebase-tools deploy --only hosting --project english-b2-lab`。
   - 部署後用 `curl -s -I https://english-b2-lab.web.app/ | grep -i cache-control` 確認回傳 `no-cache, max-age=0`。（`b2lab/firebase.json` 已於 2026-08-29 補上裸路徑 `/` 的 no-cache 規則；原本只比對 `**/*.@(html|js|json)`，不吃 `/`，導致部署後直接開網址會拿到 CDN 一小時的舊首頁。）
7. **commit + push**（訊息註明課次日期與主題），然後跑「流程 00-C」收尾檢查：`git log --oneline origin/main..main` 要空的、`git branch --no-merged main` 沒有落單分支。

### 注意
- 若是「更新既有課」（Doc 內容有改），直接改 data-book.js 裡對應 lesson 物件的欄位，不要重複新增。
- 使用者只說「同步」沒指明哪一課時：用 Drive `search_files` 以 `modifiedTime > '上次同步日'` 找出最近變動的課堂筆記 Doc，逐一 `read_file_content` 與課本現況比對後更新（新增的段落補進去、刪掉的移除，維持不增不減）。
- 月度複習彙整類文件（如 202606-月度複習）內容與各課重複，不匯入課本。
- 課本 vocab/vocab2 會自動進全站字庫（addGloss），不需另外處理。
- **動詞三態寫法（2026-08-24 確立）**：extraVocab / summary 裡的不規則動詞三態一律寫成「`原形 – 過去式 – 過去分詞`」（用 en dash `–` 或 hyphen 分隔，如 `lend – lent – lent`）。渲染器（index.html 的 `bkForms`）會自動把原形加粗、變化形上橘色，資料端不要自己加 HTML 標籤。
- **重音音節寫法（2026-08-24 確立）**：要標示單字重音時，在 extraVocab / summary 的英文欄用「音節連字號＋重音音節全大寫」寫法（如 `spe-ci-fi-CA-tion`）。渲染器會自動把大寫音節變成紅色加粗底線；中文備註就不用再寫「重音在 ca」這種文字說明。
- **故事插圖箭頭**：五圓插圖產生器 `art()` 已自動在圓圈之間畫進度箭頭（➔），新課只要照第 3 步加 `S[lessonId]` 即可，不用另外處理；若手寫整段 `art:` SVG（非用產生器），記得在 `</svg>` 前補上同樣的箭頭群組（x=147/301/455/609、y=100，`h38 l-10 -8 m10 8 l-10 8`）。

---

### 常見錯誤與解法

| 錯誤 | 原因 | 解法 |
|------|------|------|
| 「需要授權」→ 警告「重試，允許存取」 | 授權 popup 被 Chrome 封鎖或流程未完成 | 再次點「▶ 執行」→ 重新走授權流程 |
| 403 `Insufficient Permission` | `appsscript.json` 缺少 `oauthScopes`，或授權時未核准 | 加入 Step 3 的 oauthScopes，重新授權 |
| 403 `Drive API has not been used` | 腳本用了 `UrlFetchApp` 呼叫 Drive REST API | 改用 `DocumentApp`（內建，不需啟用 Drive API） |
| `monaco.editor.getModels()` 找不到正確 model | model 編號因分頁重新載入而改變 | 用 `models.find(m => m.uri.includes('appsscript'))` 動態尋找 |
| 執行後 Google 文件沒有更新 | `openById` 用了錯誤的 FILE_ID | 確認 FILE_ID 與 Google 文件 URL 一致 |

---

