/* ============================================================
   Visual Grammar Plus — 視覺化教材疊加層（2026-09-03 建立）
   ------------------------------------------------------------
   為什麼有這個檔：
     全站 48 個文法單元原本只有 gv01 是「視覺化教材」（照 gv01 的規格：
     一句話 → 意義地圖 → Step 1 圖解 → 情境卡 → 逐步理解 → 左右比較
     → 常錯 → 練習）。使用者要求其餘單元全部比照辦理。
     但單元資料散在三個檔案，其中 data-daily.js 由 DAILY_TASK.md 自動產生、
     data-grammar.js 是課程骨幹，直接改進去不好維護，所以視覺化欄位
     集中放這裡，以「單元 id」為鍵疊加上去——與 data-gramviz.js（圖卡）
     同一個慣例。

   疊加規則（index.html 載入後執行）
     · 單元自己已經有的欄位優先，這裡不覆蓋
     · quizMore 例外：會接在原本的 quiz 後面（舊單元只有 3 題，補到 6 題）
     · 原本的 sections / traps 不動，會被 gvHTML 排進 Step 2/3/4/5

   欄位
     vis:true    走 gvHTML 視覺化版面
     oneLine     一句話先理解（Step 0）
     map         {when, why, form} 意義地圖
     visual      Step 1 · SEE 的圖解，type 見 index.html 的 gvVisual 註解：
                 matrix / swap / merge / scale / branch / shift / cols / chain
     scenarios[] 情境卡：{key, icon, title, titleCn, ask, en, cn, why}
                 icon 用 index.html 的 GVICON 代號（house plane key calendar
                 clock person bubble check cross arrow book tool pin star
                 cycle balance link fork eye money flag）
     steps[]     {label, text} 逐步理解
     comparison  {title, left{}, right{}, note} 左右比較
     quizMore[]  {q, opts, ans, expl} 補足的練習題

   ⚠ 文字欄位一律寫純文字，不要寫 HTML 標籤（渲染時會被轉義顯示出來）。
   ============================================================ */
window.GVPLUS = {

/* ==================== g01 八大時態總覽（B1） ==================== */
g01: {
  vis: true,
  oneLine: '時態不是十六個公式要背，而是兩個問題的答案：這件事什麼時候發生？那個動作是一個點、一段進行，還是連到另一個時間點？',
  map: {
    when: '每次要講一件事，先定「時間」（現在／過去／未來），再定「動作狀態」（簡單／進行／完成／完成進行）',
    why: '時間告訴對方「什麼時候」，狀態告訴對方「做完了沒、還在不在進行、持續多久」',
    form: '時間 × 狀態 → 一個格子一個時態'
  },
  visual: {
    type: 'matrix',
    cap: '不要一個一個背。先問「什麼時候」找到那一列，再問「這動作是點、是一段、還是連到另一個時間點」找到那一欄，交會的格子就是答案。',
    cols: ['簡單式', '進行式', '完成式', '完成進行式'],
    rows: [
      { h: '現在', cells: [
        { en: 'I work', cn: '事實、習慣' },
        { en: 'I am working', cn: '這一刻正在做', hi: 1 },
        { en: 'I have worked', cn: '到現在為止' },
        { en: 'I have been working', cn: '持續了多久' } ] },
      { h: '過去', cells: [
        { en: 'I worked', cn: '過去做完的事' },
        { en: 'I was working', cn: '過去那一刻正在做' },
        { en: 'I had worked', cn: '在過去某點之前就完成' },
        { en: 'I had been working', cn: '到過去某點持續了多久' } ] },
      { h: '未來', cells: [
        { en: 'I will work', cn: '未來會做' },
        { en: 'I will be working', cn: '未來那一刻正在做' },
        { en: 'I will have worked', cn: '到未來某點為止完成' },
        { en: 'I will have been working', cn: '到未來某點持續了多久' } ] }
    ]
  },
  scenarios: [
    { key: 'simple', icon: 'flag',
      title: 'Simple', titleCn: '簡單式：事實與單一動作',
      ask: '這是常態，還是一件做完的事？',
      en: 'I work in a factory.',
      cn: '我在工廠工作。',
      why: '簡單式不關心過程，只報告「有這件事」。講常態、習慣、科學事實，或過去某一次做完的動作，都用簡單式。判斷法：如果你不在意「正在」或「持續多久」，就是簡單式。' },
    { key: 'cont', icon: 'clock',
      title: 'Continuous', titleCn: '進行式：那個時刻正在做',
      ask: '在說話的那一刻，動作還在跑嗎？',
      en: 'I am working on a new project this month.',
      cn: '我這個月在做一個新專案。',
      why: '進行式的重點是「暫時」——現在正在跑，等一下可能就停了。這個月做的專案，下個月可能就換人，所以用 am working 而不是 work。注意 know、want、like 這類狀態動詞沒有進行式。' },
    { key: 'perf', icon: 'link',
      title: 'Perfect', titleCn: '完成式：連到另一個時間點',
      ask: '這件事跟「另一個時間點」有關係嗎？',
      en: 'I have worked here for six years.',
      cn: '我在這裡工作六年了。',
      why: '完成式永遠有兩個時間：動作發生的時間，和你要把它連到的那個點。have worked 連到「現在」，had worked 連到「過去某一點」，will have worked 連到「未來某一點」。' },
    { key: 'perfcont', icon: 'cycle',
      title: 'Perfect Continuous', titleCn: '完成進行式：強調持續了多久',
      ask: '你想強調的是「多久」嗎？',
      en: 'I have been working since 8 a.m.',
      cn: '我從早上八點就一直在工作。',
      why: '完成式問「做完了沒、做了幾次」，完成進行式問「做多久了」。所以 How long…? 幾乎都配完成進行式，How many…? 配完成式。' }
  ],
  steps: [
    { label: '情境', text: '同事問你在這間公司待多久了。' },
    { label: '先定時間', text: '這件事從過去開始，一路連到現在——所以不是單純的過去式，要用「連到現在」的完成式。' },
    { label: '再定狀態', text: '你想強調的是「累積了六年」這個事實，不是「持續的過程」——所以用完成式，不用完成進行式。' },
    { label: '組出來', text: 'I have worked here for six years.' },
    { label: '換個重點', text: '如果你想抱怨「已經連做六小時沒停」，重點變成持續的過程：I have been working for six hours.' }
  ],
  comparison: {
    title: '同一句話，差一個時態就換意思',
    left: {
      tag: 'PAST SIMPLE', tagCn: '過去簡單式', icon: 'clock',
      head: 'closed', headCn: '時間關起來了',
      en: 'I worked there for six years.',
      cn: '我在那裡工作過六年。',
      pts: ['六年那段已經結束', '聽的人會理解成「你已經離職了」', '重點：報告一段過去的經歷']
    },
    right: {
      tag: 'PRESENT PERFECT', tagCn: '現在完成式', icon: 'link',
      head: 'still true', headCn: '連到現在還算數',
      en: 'I have worked there for six years.',
      cn: '我在那裡工作六年了。',
      pts: ['六年從過去累積到現在', '聽的人會理解成「你還在職」', '重點：這件事現在仍然成立']
    },
    note: '選時態不是選文法，是選你要讓對方聽到什麼。先問「這件事關起來了沒」，再問「我要強調結果還是過程」。'
  },
  quizMore: [
    { q: 'Look! It ____ outside. Take an umbrella.', opts: ['rains', 'is raining', 'has rained', 'rained'], ans: 1,
      expl: 'Look! 表示「此刻」，正在下 → 現在進行式 is raining。' },
    { q: 'I ____ my homework, so I can go out now.', opts: ['finish', 'finished', 'have finished', 'was finishing'], ans: 2,
      expl: '過去的動作留下「現在可以出門」的結果 → 現在完成式 have finished。' },
    { q: 'She ____ for two hours when I finally arrived.', opts: ['waited', 'has waited', 'had been waiting', 'is waiting'], ans: 2,
      expl: '到「我抵達」這個過去的點為止已經持續兩小時 → 過去完成進行式 had been waiting。' }
  ]
},

/* ==================== g02 現在簡單式 vs 現在進行式（B1） ==================== */
g02: {
  vis: true,
  oneLine: '現在簡單式在講「一直都是這樣」，現在進行式在講「現在／最近這段時間是這樣」——差別是永久還是暫時。',
  map: {
    when: '講習慣、事實、時刻表用簡單式；講此刻正在做、暫時的安排、正在改變的趨勢用進行式',
    why: '讓對方知道這件事是常態，還是只有現在這一段時間才成立',
    form: '簡單式 V / V-s　|　進行式 am / is / are + V-ing'
  },
  visual: {
    type: 'cols',
    cap: '判斷方法只有一句：這件事「以後也還是這樣」就用簡單式，「只有現在這一陣子」就用進行式。',
    cols: [
      { tag: 'PRESENT SIMPLE 現在簡單式', tone: 2,
        tagCn: '一直都是這樣：習慣、事實、時刻表',
        items: [
          { en: 'She takes the MRT to work.', cn: '她搭捷運上班。', nt: '每天都這樣，是常態' },
          { en: 'Water boils at 100°C.', cn: '水在攝氏一百度沸騰。', nt: '科學事實，永遠成立' },
          { en: 'The train leaves at 7:15.', cn: '火車七點十五分開。', nt: '時刻表：排定好的固定班次' }
        ] },
      { tag: 'PRESENT CONTINUOUS 現在進行式', tone: 1,
        tagCn: '只有現在這一陣子：此刻、暫時、正在改變',
        items: [
          { en: 'She is taking a taxi this week.', cn: '她這禮拜改搭計程車。', nt: '暫時的，下週就恢復' },
          { en: 'The water is boiling — turn it off!', cn: '水在滾了，快關火！', nt: '此刻正在發生' },
          { en: 'More people are working from home these days.', cn: '最近越來越多人在家工作。', nt: '正在改變的趨勢' }
        ] }
    ]
  },
  scenarios: [
    { key: 'habit', icon: 'cycle',
      title: 'Habit', titleCn: '習慣：每天都這樣',
      ask: '這件事會一直重複嗎？',
      en: 'I get up at six every day.',
      cn: '我每天六點起床。',
      why: '常搭配 always / usually / often / every day / twice a week。這些字一出現，幾乎都是現在簡單式，因為它們在講「重複發生」而不是「現在」。' },
    { key: 'now', icon: 'clock',
      title: 'Right Now', titleCn: '此刻：講話的這一秒',
      ask: '現在正在做嗎？',
      en: 'Be quiet — the baby is sleeping.',
      cn: '安靜一點，寶寶在睡覺。',
      why: '常搭配 now / right now / at the moment / Look! / Listen!。這些字是進行式的信號，因為它們把時間釘在「這一刻」。' },
    { key: 'temp', icon: 'calendar',
      title: 'Temporary', titleCn: '暫時：最近這段時間',
      ask: '這是常態，還是只有這幾天？',
      en: 'I am staying with my sister this month.',
      cn: '我這個月住我姊姊家。',
      why: '這是中文母語者最容易漏掉的用法：不是「正在住」的那一秒，而是「這一段時間暫時如此」。常搭配 this week / this month / these days / at the moment。' },
    { key: 'stative', icon: 'cross',
      title: 'Stative Verbs', titleCn: '狀態動詞：不能加 -ing',
      ask: '這個動作能「暫停再繼續」嗎？',
      en: 'I know the answer.',
      cn: '我知道答案。',
      why: 'know、believe、understand、remember、want、need、prefer、own、belong 講的是狀態，不是動作，沒辦法暫停，所以不用進行式。例外：have 當「吃／經歷」時是動作，可以說 I am having lunch。' }
  ],
  steps: [
    { label: '情境', text: '同事看到你這幾天都提早半小時進辦公室。' },
    { label: '先問', text: '這是你的固定習慣，還是只有這幾天？' },
    { label: '如果是習慣', text: 'I start work at eight.（我八點上班——一直都是。）' },
    { label: '如果只有這幾天', text: 'I am starting work earlier this week.（我這禮拜提早上班——下週就恢復。）' },
    { label: '關鍵', text: '同一件事，選簡單式就是宣告常態，選進行式就是強調「暫時」。文法沒有對錯，是你要傳達哪一個意思。' }
  ],
  comparison: {
    title: '永久 vs 暫時',
    left: {
      tag: 'SIMPLE', tagCn: '簡單式', icon: 'flag',
      head: 'permanent', headCn: '常態、一直如此',
      en: 'She lives in Taipei.',
      cn: '她住台北。',
      pts: ['講的是她的居住地', '沒有「暫時」的意思', '關鍵字：always / usually / every…']
    },
    right: {
      tag: 'CONTINUOUS', tagCn: '進行式', icon: 'calendar',
      head: 'temporary', headCn: '暫時、這一陣子',
      en: 'She is living in Taipei for a few months.',
      cn: '她這幾個月住在台北。',
      pts: ['講的是一段暫時的安排', '暗示之後會搬走', '關鍵字：now / this week / these days']
    },
    note: '句子裡有沒有「暫時感」，就是簡單式與進行式的分界線。頻率副詞的位置也別忘了：be 動詞之後（She is always late），一般動詞之前（She always arrives late）。'
  },
  quizMore: [
    { q: 'My brother ____ in Kaohsiung, but he ____ with us this summer.', opts: ['lives / stays', 'is living / stays', 'lives / is staying', 'is living / is staying'], ans: 2,
      expl: '住高雄是常態 → lives；今年夏天暫時住我們家 → is staying。' },
    { q: 'These days more and more people ____ mobile payment instead of cash.', opts: ['use', 'are using', 'uses', 'have used'], ans: 1,
      expl: 'These days ＋「越來越多」是正在改變的趨勢 → 現在進行式 are using。' },
    { q: 'Which sentence is WRONG?', opts: ['I am wanting a coffee.', 'I want a coffee.', 'I am having lunch.', 'I have a car.'], ans: 0,
      expl: 'want 是狀態動詞，沒有進行式；have 當「吃」是動作，所以 am having lunch 是對的。' }
  ]
},

/* ==================== g03 過去簡單式 vs 過去進行式（B1） ==================== */
g03: {
  vis: true,
  oneLine: '過去進行式是「當時的背景」，過去簡單式是「突然插進來的那件事」——一個是布景，一個是主角。',
  map: {
    when: '講過去某一刻「正在做什麼」用過去進行式；講過去「發生了什麼、做完了什麼」用過去簡單式',
    why: '把一段背景和一個突發事件分層，故事才聽得懂',
    form: '過去進行式 was / were + V-ing　|　過去簡單式 V-ed / 不規則過去式'
  },
  visual: {
    type: 'merge',
    cap: 'while 後面接長的那件事（背景），when 後面接短的那件事（突發）。兩句合起來才是完整的故事。',
    a: { n: '背景（長的那件事）', en: 'I was cooking dinner.', cn: '我當時正在煮晚餐。' },
    b: { n: '突發（短的那件事）', en: 'The phone rang.', cn: '電話響了。' },
    glue: 'when',
    glueCn: 'when 接短的那件事。反過來用 while 就要接長的那件事：While I was cooking dinner, the phone rang.',
    out: { n: '合併後', parts: [
      { t: 'I was cooking dinner', role: 'verb' },
      { t: 'when', role: 'glue' },
      { t: 'the phone rang.', role: 'plain' } ],
      cn: '我正在煮晚餐的時候，電話響了。' }
  },
  scenarios: [
    { key: 'bg', icon: 'eye',
      title: 'Background', titleCn: '背景：當時的畫面',
      ask: '那一刻的畫面是什麼？',
      en: 'At eight last night I was watching TV.',
      cn: '昨晚八點我在看電視。',
      why: '過去進行式在鋪陳「那個時間點的畫面」，動作不一定做完，也不一定重要——它只是布景。常搭配 at eight / at that moment / all evening。' },
    { key: 'interrupt', icon: 'flag',
      title: 'Interruption', titleCn: '突發：打斷背景的那件事',
      ask: '中間發生了什麼？',
      en: 'I was walking home when it started to rain.',
      cn: '我走回家的路上突然下起雨。',
      why: '被打斷的那件（長的）用過去進行式，打斷的那件（短的）用過去簡單式。這個分工幾乎是固定的，考試最常考。' },
    { key: 'parallel', icon: 'link',
      title: 'Two at Once', titleCn: '兩件事同時在進行',
      ask: '兩件事都是「一段」嗎？',
      en: 'While she was studying, I was cooking.',
      cn: '她在唸書的時候，我在煮飯。',
      why: '兩邊都是長的，就兩邊都用過去進行式，中間用 while。這種句子在描寫「同一段時間裡的兩條線」。' },
    { key: 'sequence', icon: 'arrow',
      title: 'One After Another', titleCn: '一件接一件做完',
      ask: '是照順序做完的嗎？',
      en: 'I got up, had breakfast and left.',
      cn: '我起床、吃早餐，然後出門。',
      why: '如果只是照時間順序報告「做完的事」，全部用過去簡單式就好，不用進行式。進行式只在你要強調「當時正在中間」時才出場。' }
  ],
  steps: [
    { label: '情境', text: '朋友問你車禍當時在做什麼。' },
    { label: '找背景', text: '你當時正在開車——這是一段，還沒結束就被打斷了。' },
    { label: '找突發', text: '一隻狗突然衝出來——這是一個點，瞬間發生。' },
    { label: '組出來', text: 'I was driving home when a dog ran into the road.' },
    { label: '順序可以換', text: '把 while 放前面也行：While I was driving home, a dog ran into the road.（意思一樣，只是把背景挪到句首。）' }
  ],
  comparison: {
    title: 'when 與 while 接哪一邊',
    left: {
      tag: 'WHEN', tagCn: '接「短的」那件事', icon: 'flag',
      head: 'the interruption', headCn: '打斷背景的突發事件',
      en: 'I was reading when he called.',
      cn: '我在看書的時候他打來。',
      pts: ['when + 過去簡單式（短、瞬間）', '主句用過去進行式（長、背景）', '記法：when 後面是「那一下」']
    },
    right: {
      tag: 'WHILE', tagCn: '接「長的」那件事', icon: 'eye',
      head: 'the background', headCn: '正在進行的那一段',
      en: 'While I was reading, he called.',
      cn: '我在看書的時候他打來。',
      pts: ['while + 過去進行式（長、背景）', '主句用過去簡單式（短、突發）', '記法：while 後面是「那一段」']
    },
    note: '兩句意思完全一樣，只是你把背景放在 while 後面還是主句裡。真正要記的是：長的配進行式、短的配簡單式，不要顛倒。'
  },
  quizMore: [
    { q: 'While we ____ dinner, the lights went out.', opts: ['had', 'were having', 'have had', 'are having'], ans: 1,
      expl: 'while 接長的那件事 → 過去進行式 were having。' },
    { q: 'She ____ her keys while she ____ for the bus.', opts: ['was losing / waited', 'lost / was waiting', 'lost / waited', 'was losing / was waiting'], ans: 1,
      expl: '弄丟是一瞬間 → 過去簡單式 lost；等公車是一段背景 → was waiting。' },
    { q: 'I ____ to work, ____ my coffee and ____ my emails.', opts: ['was driving / was drinking / was checking', 'drove / drank / checked', 'drove / was drinking / checked', 'was driving / drank / was checking'], ans: 1,
      expl: '照順序報告三件做完的事，沒有要強調「正在中間」→ 全部用過去簡單式。' }
  ]
},

/* ==================== g04 現在完成式 for / since / already / yet（B1+） ==================== */
g04: {
  vis: true,
  oneLine: 'for 講「多長」，since 講「從哪裡開始」，already / yet 講「該做的做了沒」——四個字都在把過去綁到現在。',
  map: {
    when: '動作從過去延伸到現在，或現在還看得到結果、時間範圍還沒結束',
    why: '經驗、現在的結果、未完成的時間——重點永遠在「現在」，不在過去那一刻',
    form: 'have / has + 過去分詞（Vpp）'
  },
  visual: {
    type: 'timeline',
    cap: '現在完成式的線一定會碰到 NOW。for 量的是這條線的「長度」，since 標的是這條線的「起點」。',
    rows: [
      { kind: 'span', label: 'for + 一段長度', tone: 'accent',
        from: 'six years', to: 'NOW',
        sub: 'I have worked here for six years.',
        subCn: '我在這裡工作六年了（現在還在）。' },
      { kind: 'span', label: 'since + 起點', tone: 'accent',
        from: 'since 2020', to: 'NOW',
        sub: 'I have worked here since 2020.',
        subCn: '我從 2020 年就在這裡工作（現在還在）。' },
      { kind: 'range', label: 'already / yet', tone: 'accent',
        from: 'today', to: 'NOW',
        sub: "I haven't finished it yet.",
        subCn: '我還沒做完（今天還沒過完，還有機會做完）。' },
      { kind: 'point', label: '對照：過去簡單式', tone: 'ink',
        at: 'in 2019',
        sub: 'I worked there in 2019.',
        subCn: '我 2019 年在那裡工作（已經結束了）。' }
    ]
  },
  scenarios: [
    { key: 'for', icon: 'clock',
      title: 'for + duration', titleCn: 'for：接一段長度',
      ask: '做了「多久」？',
      en: 'She has lived here for three years.',
      cn: '她住這裡三年了。',
      why: 'for 後面接的是「長度」：three years、two months、ten minutes、a long time。中文說「三年了」，英文一定是 for three years，不是 since three years——這是最常錯的一個。' },
    { key: 'since', icon: 'pin',
      title: 'since + starting point', titleCn: 'since：接一個起點',
      ask: '從「什麼時候」開始？',
      en: 'She has lived here since 2023.',
      cn: '她從 2023 年就住這裡。',
      why: 'since 後面接的是「時間點」：2023、Monday、last week、I was a child，也可以接一整句（since I moved here）。判斷法：能回答「從哪裡開始」的就配 since。' },
    { key: 'already', icon: 'check',
      title: 'already', titleCn: 'already：比預期更早做完',
      ask: '已經做了嗎？',
      en: 'I have already eaten lunch.',
      cn: '我已經吃過午餐了。',
      why: 'already 用在肯定句，位置在 have 和過去分詞「中間」。放句尾（I have eaten lunch already）也可以，但是語氣變成強調驚訝。注意不要說 I have eaten already lunch。' },
    { key: 'yet', icon: 'cross',
      title: 'yet', titleCn: 'yet：該做的還沒做',
      ask: '還沒做嗎？做了沒？',
      en: "I haven't finished my report yet.",
      cn: '我的報告還沒寫完。',
      why: 'yet 只用在否定句和疑問句，而且固定放「句尾」：Have you finished yet? / I haven’t finished yet. 它帶著一個預期——這件事應該要做，只是還沒。' }
  ],
  steps: [
    { label: '情境', text: '面試官問你在現在這間公司待多久了。' },
    { label: '先確認', text: '你還在職——這件事連到現在，所以不能用過去式 worked。' },
    { label: '選字', text: '你想講「長度」還是「起點」？講長度用 for，講起點用 since。' },
    { label: '組出來', text: 'I have worked here for six years.（或 …since 2020.）' },
    { label: '一旦時間關起來', text: '如果你已經離職了，就要換成過去簡單式：I worked there for six years.（那段結束了。）' }
  ],
  comparison: {
    title: 'for 與 since 怎麼分',
    left: {
      tag: 'FOR', tagCn: '接長度', icon: 'clock',
      head: 'how long', headCn: '做了多久',
      en: 'We have been friends for ten years.',
      cn: '我們當朋友十年了。',
      pts: ['後面是一段長度：ten years / two weeks', '回答 How long…?', '✗ for 2015（2015 不是長度）']
    },
    right: {
      tag: 'SINCE', tagCn: '接起點', icon: 'pin',
      head: 'starting from', headCn: '從什麼時候開始',
      en: 'We have been friends since high school.',
      cn: '我們從高中就是朋友。',
      pts: ['後面是一個時間點：2015 / Monday / high school', '也可以接整句：since I moved here', '✗ since ten years（十年不是時間點）']
    },
    note: '一句話記住：for 量長度、since 標起點。中文的「三年了」對應的是 for three years——這裡幾乎每個學習者都錯過一次。'
  },
  quizMore: [
    { q: "I have known her ____ we were children.", opts: ['for', 'since', 'from', 'during'], ans: 1,
      expl: 'we were children 是一個起點（而且是一整句）→ 用 since。' },
    { q: 'Have you eaten ____?', opts: ['already', 'yet', 'still', 'ever since'], ans: 1,
      expl: '疑問句問「做了沒」，固定用句尾的 yet。' },
    { q: 'Which sentence is correct?', opts: ['I have finished already my work.', 'I have already finished my work.', 'I already have finished my work.', 'I have finished my work yet.'], ans: 1,
      expl: 'already 放在 have 和過去分詞中間；yet 不能用在肯定句。' }
  ]
},

/* ==================== g05 used to / be used to / would（B1+） ==================== */
g05: {
  vis: true,
  oneLine: '三個長得很像的東西：used to 是「以前會，現在不會了」，be used to 是「習慣了，不再覺得奇怪」，would 是「以前常常這樣」的回憶語氣。',
  map: {
    when: '講過去的習慣、講已經適應某件事、講帶著回憶感的往事',
    why: '這三個都在講「習慣」，但一個講消失的習慣、一個講已建立的適應、一個講懷舊的敘事',
    form: 'used to + 原形　|　be used to + N / V-ing　|　would + 原形'
  },
  visual: {
    type: 'cols',
    cap: '看 to 後面接什麼就分得出來：接原形動詞是 used to（過去的習慣），接名詞或 V-ing 是 be used to（習慣了）。',
    cols: [
      { tag: 'USED TO + 原形', tone: 1,
        tagCn: '以前會，現在不會了（過去的習慣，已消失）',
        items: [
          { en: 'I used to smoke.', cn: '我以前會抽菸。', nt: '現在戒了' },
          { en: 'There used to be a bookshop here.', cn: '這裡以前有一間書店。', nt: '現在沒了' },
          { en: 'Did you use to play the piano?', cn: '你以前彈鋼琴嗎？', nt: '疑問／否定要用 use to（沒有 d）' }
        ] },
      { tag: 'BE USED TO + N / V-ing', tone: 2,
        tagCn: '習慣了、不再陌生（現在的狀態）',
        items: [
          { en: 'I am used to the noise.', cn: '我習慣這個噪音了。', nt: '後面接名詞' },
          { en: 'She is used to working late.', cn: '她習慣加班了。', nt: '後面接 V-ing，不是原形' },
          { en: "I'm getting used to the new system.", cn: '我漸漸習慣新系統了。', nt: 'get used to ＝正在適應中' }
        ] },
      { tag: 'WOULD + 原形', tone: 3,
        tagCn: '以前常常這樣（回憶、說故事的語氣）',
        items: [
          { en: 'Every summer we would go to the beach.', cn: '每年夏天我們都會去海邊。', nt: '帶懷舊感，常配時間副詞' },
          { en: 'My grandfather would tell us stories.', cn: '我爺爺以前常說故事給我們聽。', nt: '反覆的動作' },
          { en: 'We used to live in Tainan.', cn: '我們以前住台南。', nt: '狀態不能用 would，只能用 used to' }
        ] }
    ]
  },
  scenarios: [
    { key: 'gone', icon: 'cross',
      title: 'used to', titleCn: '過去的習慣，現在沒了',
      ask: '這個習慣現在還有嗎？',
      en: 'I used to walk to school.',
      cn: '我以前走路上學。',
      why: 'used to 自帶「現在不是這樣了」的對比。所以講現在的習慣不能用它——現在的習慣直接用現在簡單式：I walk to school。' },
    { key: 'adapted', icon: 'check',
      title: 'be used to', titleCn: '已經習慣，不再覺得奇怪',
      ask: '你適應了嗎？',
      en: 'I am used to getting up early now.',
      cn: '我現在習慣早起了。',
      why: '這裡的 used 是形容詞，意思是「習慣的」，所以前面要有 be 動詞，後面接名詞或 V-ing。中文母語者最常說成 I am used to get up early（✗）。' },
    { key: 'nostalgia', icon: 'star',
      title: 'would', titleCn: '回憶語氣：以前常常',
      ask: '你在說一段往事嗎？',
      en: 'On Sundays my mother would bake bread.',
      cn: '以前每個星期天我媽都會烤麵包。',
      why: 'would 只能講「反覆發生的動作」，不能講狀態。所以 I would live in Tainan 是錯的（住是狀態），要說 I used to live in Tainan。' },
    { key: 'getting', icon: 'cycle',
      title: 'get used to', titleCn: '正在適應的過程',
      ask: '還在適應中嗎？',
      en: 'It takes time to get used to a new city.',
      cn: '要習慣一個新城市需要時間。',
      why: 'be used to 是「已經習慣」的狀態，get used to 是「從不習慣變習慣」的過程。想講「越來越習慣」就用 getting used to。' }
  ],
  steps: [
    { label: '情境', text: '你想說「我以前不習慣加班，現在習慣了」。' },
    { label: '前半段', text: '「以前不習慣」——講的是過去的狀態，用 be used to 的過去式：I wasn’t used to working late.' },
    { label: '後半段', text: '「現在習慣了」——講的是現在的狀態：but now I am used to it.' },
    { label: '組出來', text: "I wasn't used to working late, but now I am used to it." },
    { label: '別搞混', text: '如果你想說的是「我以前常加班（現在不了）」，那是過去的習慣，要用 I used to work late.——完全不同的意思。' }
  ],
  comparison: {
    title: 'used to 與 be used to',
    left: {
      tag: 'USED TO + V', tagCn: '過去的習慣', icon: 'cross',
      head: 'not anymore', headCn: '以前會，現在不會了',
      en: 'I used to work late.',
      cn: '我以前常加班。',
      pts: ['沒有 be 動詞', 'to 後面接原形動詞', '重點在「過去」，並暗示現在不是這樣']
    },
    right: {
      tag: 'BE USED TO + N/V-ing', tagCn: '已經適應', icon: 'check',
      head: 'no longer strange', headCn: '習慣了，不覺得奇怪',
      en: 'I am used to working late.',
      cn: '我習慣加班了。',
      pts: ['一定要有 be 動詞（am/is/are/was/were）', 'to 後面接名詞或 V-ing', '重點在「現在的狀態」']
    },
    note: '兩句差一個 am，意思差一整個時間軸。檢查步驟：先看有沒有 be 動詞，再看 to 後面是原形還是 V-ing。'
  },
  quizMore: [
    { q: "I can't sleep — I'm not used to ____ in this bed.", opts: ['sleep', 'sleeping', 'slept', 'sleeps'], ans: 1,
      expl: 'be used to 後面接 V-ing → sleeping。' },
    { q: '____ you use to live in Taichung?', opts: ['Did', 'Do', 'Were', 'Have'], ans: 0,
      expl: 'used to 的疑問句用 Did + use to（沒有 d）。' },
    { q: 'Which sentence is WRONG?', opts: ['We would go camping every summer.', 'I would live in Hualien.', 'I used to live in Hualien.', 'She would always help me.'], ans: 1,
      expl: 'would 不能講狀態（住），只能講反覆的動作 → 要用 used to live。' }
  ]
},

/* ==================== g06 使役動詞 make / have / let / get / cause（B1+） ==================== */
g06: {
  vis: true,
  oneLine: '使役動詞就是「叫別人去做某件事」，難的不是意思，是後面那個動詞要不要加 to——make / have / let 不加，get / cause 要加。',
  map: {
    when: '要表達「讓某人做某事」「請某人做某事」「允許某人做某事」',
    why: '不同的使役動詞帶不同的權力關係：強迫、安排、允許、說服',
    form: 'make / have / let + 受詞 + 原形　|　get / cause + 受詞 + to + 原形'
  },
  visual: {
    type: 'chain',
    cap: '先記主結構：使役動詞 + 受詞 + 動詞。再記唯一的分水嶺——make / have / let 後面用原形，get / cause 後面要加 to。',
    links: [
      { t: 'make / have / let', role: 'verb', c: '使役動詞' },
      { t: 'someone', role: 'obj', c: '受詞（誰去做）' },
      { t: 'do', role: 'plain', c: '原形動詞，不加 to' }
    ],
    eg: { en: 'The film made me cry.', cn: '那部電影讓我哭了。' },
    variants: [
      { k: 'make + O + 原形（強迫、造成）', en: 'My boss made me stay late.', cn: '我老闆要我留下來加班。' },
      { k: 'have + O + 原形（安排、請人做）', en: 'I had the mechanic check my car.', cn: '我請技師檢查我的車。' },
      { k: 'let + O + 原形（允許）', en: 'My parents let me choose my job.', cn: '我父母讓我自己選工作。' },
      { k: 'get + O + to + 原形（說服、想辦法讓）', en: 'I got my brother to help me.', cn: '我說服我弟來幫我。' },
      { k: 'cause + O + to + 原形（導致，較正式）', en: 'The storm caused the flight to be delayed.', cn: '暴風雨導致班機延誤。' },
      { k: 'have / get + 物 + 過去分詞（找人幫你弄好）', en: 'I had my hair cut yesterday.', cn: '我昨天去剪頭髮。' }
    ]
  },
  scenarios: [
    { key: 'make', icon: 'tool',
      title: 'make', titleCn: 'make：強迫或造成某個結果',
      ask: '對方是自願的嗎？',
      en: 'The teacher made us rewrite the report.',
      cn: '老師要我們把報告重寫。',
      why: 'make 帶著「沒得選」的味道，也可以講「造成某種感覺」：This song makes me happy。注意被動時反而要加 to：I was made to wait.' },
    { key: 'have', icon: 'person',
      title: 'have', titleCn: 'have：安排、請人做（中性）',
      ask: '這是你安排的嗎？',
      en: 'I had my assistant book the tickets.',
      cn: '我請助理訂票。',
      why: 'have 沒有強迫感，就是「安排某人做他份內的事」。常見在職場：have someone send / check / prepare。' },
    { key: 'let', icon: 'check',
      title: 'let', titleCn: 'let：允許',
      ask: '你有給對方選擇權嗎？',
      en: 'Let me explain.',
      cn: '讓我解釋一下。',
      why: 'let 就是「允許、放手讓他做」。要注意 let 沒有常見的被動用法——想講被動要換成 be allowed to：I was allowed to leave early.' },
    { key: 'get', icon: 'arrow',
      title: 'get', titleCn: 'get：想辦法讓對方願意',
      ask: '你需要說服他嗎？',
      en: 'I finally got him to apologize.',
      cn: '我終於讓他道歉了。',
      why: 'get 暗示「花了功夫」——說服、拜託、想辦法。這是唯一一個口語常用又要加 to 的使役動詞，最容易漏掉那個 to。' }
  ],
  steps: [
    { label: '情境', text: '你的筆電壞了，你打算找店家修。' },
    { label: '選字', text: '這是「安排別人做」，不是強迫也不是允許——用 have。' },
    { label: '看結構', text: 'have 後面接原形：have + someone + fix。' },
    { label: '組出來', text: 'I had a technician fix my laptop.' },
    { label: '換個說法', text: '如果你不在意誰修，只在意「筆電被修好」，就用「have + 物 + 過去分詞」：I had my laptop fixed.' }
  ],
  comparison: {
    title: '加不加 to，就看是哪一個字',
    left: {
      tag: 'MAKE / HAVE / LET', tagCn: '後面接原形', icon: 'tool',
      head: 'bare infinitive', headCn: '不加 to',
      en: 'She made him wait.',
      cn: '她讓他等。',
      pts: ['make / have / let + O + 原形', '✗ She made him to wait.', '例外：make 的被動要加 to（He was made to wait.）']
    },
    right: {
      tag: 'GET / CAUSE', tagCn: '後面要加 to', icon: 'arrow',
      head: 'to + infinitive', headCn: '一定有 to',
      en: 'She got him to wait.',
      cn: '她說服他等一下。',
      pts: ['get / cause + O + to + 原形', '✗ She got him wait.', 'get 帶「花了功夫說服」的語氣']
    },
    note: '五個字裡三個不加 to、兩個加 to。只要記住「get 和 cause 要加 to」，其餘不加，就不會錯。'
  },
  quizMore: [
    { q: 'My mother made me ____ my room.', opts: ['to clean', 'clean', 'cleaning', 'cleaned'], ans: 1,
      expl: 'make + O + 原形，不加 to。' },
    { q: 'I finally got my son ____ his vegetables.', opts: ['eat', 'to eat', 'eating', 'ate'], ans: 1,
      expl: 'get + O + to + 原形。' },
    { q: 'I need to have my suit ____ before the wedding.', opts: ['clean', 'to clean', 'cleaned', 'cleaning'], ans: 2,
      expl: 'have + 物 + 過去分詞＝找人把它弄好 → cleaned。' }
  ]
},

/* ==================== g07 -ed 與 -ing 形容詞（B1+） ==================== */
g07: {
  vis: true,
  oneLine: '-ed 形容詞講「人的感覺」，-ing 形容詞講「造成那個感覺的事」——所以人 bored，事 boring。',
  map: {
    when: '要形容某人的情緒，或形容某件事／某個人給別人的感受',
    why: '同一個字兩種身分：接收感覺的人用 -ed，散發感覺的來源用 -ing',
    form: '主詞是「感覺的人」→ -ed　|　主詞是「造成感覺的事物」→ -ing'
  },
  visual: {
    type: 'cols',
    cap: '判斷方法：問「這個主詞是在感覺，還是在讓別人感覺？」在感覺的用 -ed，讓別人感覺的用 -ing。',
    cols: [
      { tag: '-ED：人的感覺', tone: 1,
        tagCn: '主詞是接收感覺的那一方（通常是人）',
        items: [
          { en: 'I am bored.', cn: '我很無聊（我覺得無趣）。', nt: '我是感覺的人' },
          { en: 'She was surprised by the news.', cn: '她對那個消息很驚訝。', nt: '常配 by + 來源' },
          { en: 'We are worried about him.', cn: '我們很擔心他。', nt: '常配 about + 對象' }
        ] },
      { tag: '-ING：事物的性質', tone: 2,
        tagCn: '主詞是造成感覺的來源（事、物，也可以是人）',
        items: [
          { en: 'The lesson is boring.', cn: '這堂課很無聊（它讓人無趣）。', nt: '課是來源' },
          { en: 'The news was surprising.', cn: '那個消息很令人驚訝。', nt: '消息是來源' },
          { en: 'His behaviour is worrying.', cn: '他的行為令人擔心。', nt: '行為是來源' }
        ] }
    ]
  },
  scenarios: [
    { key: 'feel', icon: 'person',
      title: 'The person feels', titleCn: '人在感覺 → -ed',
      ask: '這個主詞是在「感覺」嗎？',
      en: 'I was confused by the instructions.',
      cn: '我被說明搞糊塗了。',
      why: '我是接收方，所以用 confused。後面常接 by（來源）。如果說 I was confusing，意思會變成「我讓別人搞不清楚」——完全反了。' },
    { key: 'cause', icon: 'flag',
      title: 'The thing causes', titleCn: '事物在造成感覺 → -ing',
      ask: '這個主詞是在「讓別人感覺」嗎？',
      en: 'The instructions were confusing.',
      cn: '那份說明很難懂。',
      why: '說明書是來源，所以用 confusing。這一組最實用的檢查法：把主詞換成「人」還通嗎？不通就該用 -ing。' },
    { key: 'person-ing', icon: 'eye',
      title: 'People can be -ing too', titleCn: '人也可以用 -ing',
      ask: '你在講他的感覺，還是他給人的感覺？',
      en: 'He is annoying.',
      cn: '他很煩人。',
      why: '人不是只能用 -ed。He is annoyed 是「他覺得被煩到」，He is annoying 是「他讓別人覺得煩」。主詞是不是人不重要，重要的是他在句子裡扮演哪一邊。' },
    { key: 'prep', icon: 'link',
      title: 'Common prepositions', titleCn: '常搭配的介系詞',
      ask: '後面該接 by 還是 about？',
      en: 'I am interested in history.',
      cn: '我對歷史有興趣。',
      why: '-ed 形容詞常有固定介系詞：interested in、worried about、surprised by / at、excited about、tired of、bored with。這些搭配要整組記，不能自己拼。' }
  ],
  steps: [
    { label: '情境', text: '你看完一部電影，覺得很感動，想告訴朋友。' },
    { label: '先問', text: '你要形容「你自己」還是「那部電影」？' },
    { label: '形容自己', text: '你是接收感覺的人 → I was moved by the film.' },
    { label: '形容電影', text: '電影是造成感覺的來源 → The film was moving.' },
    { label: '一句記住', text: '感覺的人 -ed、造成感覺的事 -ing。說 I am boring 會變成「我這個人很無聊」——不是你的意思。' }
  ],
  comparison: {
    title: '同一個字，兩種身分',
    left: {
      tag: '-ED', tagCn: '接收感覺', icon: 'person',
      head: 'the receiver', headCn: '感覺的人',
      en: 'I am excited.',
      cn: '我很興奮。',
      pts: ['主詞在「感覺」', '通常是人', '常接 by / about / in / of']
    },
    right: {
      tag: '-ING', tagCn: '產生感覺', icon: 'flag',
      head: 'the source', headCn: '造成感覺的事物',
      en: 'The trip is exciting.',
      cn: '這趟旅行很令人興奮。',
      pts: ['主詞在「讓別人感覺」', '事、物，也可以是人', '不接 by（它自己就是來源）']
    },
    note: '檢查方式：把句子翻成中文，如果是「我覺得…」就用 -ed，如果是「…令人…」就用 -ing。'
  },
  quizMore: [
    { q: 'The match was ____. We won in the last minute!', opts: ['excited', 'exciting', 'excite', 'excitement'], ans: 1,
      expl: '比賽是造成興奮的來源 → exciting。' },
    { q: 'I was ____ in the film, but my friend was ____.', opts: ['interesting / bored', 'interested / boring', 'interested / bored', 'interesting / boring'], ans: 2,
      expl: '兩個主詞都是「感覺的人」→ 都用 -ed：interested / bored。' },
    { q: 'Which sentence means "he makes other people tired"?', opts: ['He is tired.', 'He is tiring.', 'He was tired of it.', 'He got tired.'], ans: 1,
      expl: '「讓別人累」是來源 → tiring。' }
  ]
},

/* ==================== g08 假設語氣 If 句型（B2） ==================== */
g08: {
  vis: true,
  oneLine: '四種條件句不是四個公式，是四種「可能性」：真的會、可能會、不太可能、已經來不及了。',
  map: {
    when: '要講「如果…就…」，而且想讓對方聽出這件事有多可能發生',
    why: '同一個 if，換時態就換真實度——這是英文表達「我覺得這有幾成機會」的方式',
    form: '零類 if + 現在式, 現在式　|　一類 if + 現在式, will　|　二類 if + 過去式, would　|　三類 if + had + Vpp, would have + Vpp'
  },
  visual: {
    type: 'branch',
    cap: '注意一件事：if 子句「往後退一個時態」，可能性就往下降一階。所以二類用過去式講現在，三類用過去完成式講過去。',
    cond: { en: 'If I have time…', cn: '如果我有時間…（同一個開頭，四種結局）' },
    fan: [
      { tag: '零類 · 一定如此', tone: 'real', prob: 100,
        en: 'If you heat water to 100°C, it boils.',
        cn: '水加熱到一百度就會沸騰。（科學事實，不是假設）' },
      { tag: '一類 · 很可能', tone: 'real', prob: 75,
        en: 'If I have time, I will call you.',
        cn: '如果我有時間，我會打給你。（真的有可能）' },
      { tag: '二類 · 不太可能', tone: 'unreal', prob: 25,
        en: 'If I had time, I would call you.',
        cn: '如果我有時間，我就會打給你。（但我沒空）' },
      { tag: '三類 · 已經來不及', tone: 'impossible', prob: 3,
        en: 'If I had had time, I would have called you.',
        cn: '如果當時我有時間，我就打給你了。（已經過去了）' }
    ]
  },
  scenarios: [
    { key: 'zero', icon: 'balance',
      title: 'Zero Conditional', titleCn: '零類：一定會這樣',
      ask: '這是規則還是假設？',
      en: 'If you press this button, the machine stops.',
      cn: '按這個鈕，機器就會停。',
      why: '兩邊都用現在簡單式。這其實不是「假設」，而是在講規則、說明書、科學事實。if 換成 when 意思幾乎一樣。' },
    { key: 'first', icon: 'flag',
      title: 'First Conditional', titleCn: '一類：真的可能發生',
      ask: '這件事有機會成真嗎？',
      en: 'If it rains tomorrow, we will cancel the picnic.',
      cn: '如果明天下雨，我們就取消野餐。',
      why: 'if 子句用現在式，主句用 will——這是最重要的一條鐵則：if 後面永遠不放 will。中文說「如果明天會下雨」很自然，但英文不能說 If it will rain。' },
    { key: 'second', icon: 'fork',
      title: 'Second Conditional', titleCn: '二類：不太可能、純想像',
      ask: '這是白日夢還是真的計畫？',
      en: 'If I won the lottery, I would buy a house.',
      cn: '如果我中樂透，我就買房子。',
      why: '用過去式講的其實是「現在」，過去式只是拿來標記「這不太可能」。所以固定說 If I were you（不是 If I was you），這是虛擬語氣留下的用法。' },
    { key: 'third', icon: 'cross',
      title: 'Third Conditional', titleCn: '三類：已經改變不了的過去',
      ask: '事情已經發生完了嗎？',
      en: 'If she had studied, she would have passed.',
      cn: '如果她當時有唸書，她就會及格了。',
      why: '這是後悔句：兩邊都要退到「完成式」。if 子句 had + 過去分詞、主句 would have + 過去分詞。少退一邊就變成半句二類半句三類，是最常見的錯誤。' }
  ],
  steps: [
    { label: '情境', text: '你想跟同事說「早知道就先訂位了」。' },
    { label: '先問可能性', text: '訂位的機會已經過去了，改不了——所以是第三類。' },
    { label: 'if 子句', text: 'if + had + 過去分詞：If we had booked a table…' },
    { label: '主句', text: 'would have + 過去分詞：…we would have got a seat.' },
    { label: '組出來', text: 'If we had booked a table, we would have got a seat.（如果我們有訂位，就有位子了。）' }
  ],
  comparison: {
    title: '第二類 vs 第三類：現在還有救嗎',
    left: {
      tag: 'SECOND', tagCn: '第二類', icon: 'fork',
      head: 'unlikely now', headCn: '現在不太可能，但還沒關門',
      en: 'If I knew his number, I would call him.',
      cn: '如果我知道他的號碼，我就打給他。',
      pts: ['if + 過去式，主句 would + 原形', '講的是「現在」的狀況', '事實：我現在不知道他的號碼']
    },
    right: {
      tag: 'THIRD', tagCn: '第三類', icon: 'cross',
      head: 'too late', headCn: '過去的事，已經來不及',
      en: 'If I had known his number, I would have called him.',
      cn: '如果我當時知道他的號碼，我就打給他了。',
      pts: ['if + had + Vpp，主句 would have + Vpp', '講的是「過去」的狀況', '事實：我當時不知道，現在後悔']
    },
    note: '兩句都在講「我沒打」，差別是：第二類還可以補救，第三類只能後悔。看到 would have 就要回頭檢查 if 子句有沒有 had。'
  },
  quizMore: [
    { q: 'If I ____ you, I would take the job.', opts: ['am', 'was', 'were', 'will be'], ans: 2,
      expl: '第二類的固定說法 If I were you（虛擬語氣），不用 was。' },
    { q: 'If it ____ tomorrow, we will stay at home.', opts: ['will rain', 'rains', 'rained', 'would rain'], ans: 1,
      expl: '第一類：if 子句用現在式，if 後面永遠不放 will。' },
    { q: 'If they had left earlier, they ____ the train.', opts: ['would catch', 'would have caught', 'will catch', 'caught'], ans: 1,
      expl: '第三類：if + had + Vpp 搭配 would have + Vpp。' }
  ]
},

/* ==================== g09 被動語態（B2） ==================== */
g09: {
  vis: true,
  oneLine: '被動語態就是把「被影響的東西」搬到句首當主詞——因為那才是你想讓對方注意的重點。',
  map: {
    when: '做的人不重要、不知道是誰做的，或你想把焦點放在「被影響的東西」上',
    why: '英文用主詞位置決定重點：擺在句首的就是主角',
    form: 'be 動詞（隨時態變化）+ 過去分詞（Vpp）　+（by + 動作者，可省略）'
  },
  visual: {
    type: 'swap',
    cap: '主動句的受詞搬到句首，動詞換成 be + 過去分詞，原本的主詞退到 by 後面（大多數時候直接省略）。動詞的時態全部由 be 承擔。',
    crossLabel: '受詞搬到句首',
    lanes: [
      { tag: 'ACTIVE 主動', tone: 'cool', sub: '重點在「誰做的」',
        parts: [ { t: 'The company', role: 'subj' }, { t: 'repaired', role: 'verb' }, { t: 'the road', role: 'obj' } ],
        cn: '那間公司修了這條路。' },
      { tag: 'PASSIVE 被動', sub: '重點在「這條路」',
        parts: [ { t: 'The road', role: 'obj' }, { t: 'was repaired', role: 'verb' }, { t: '(by the company)', role: 'mute' } ],
        cn: '這條路被修好了。（誰修的不重要，可以整段省略）' }
    ]
  },
  scenarios: [
    { key: 'unknown', icon: 'person',
      title: 'Agent unknown', titleCn: '不知道是誰做的',
      ask: '你知道是誰做的嗎？重要嗎？',
      en: 'My bike was stolen last night.',
      cn: '我的腳踏車昨晚被偷了。',
      why: '不知道小偷是誰，而且重點是「車不見了」，所以用被動、不加 by。這是被動最自然的使用時機——不是為了文法，是因為 by 後面沒東西可放。' },
    { key: 'focus', icon: 'eye',
      title: 'Shift the focus', titleCn: '把焦點放在受影響的東西',
      ask: '你想讓對方先聽到哪個字？',
      en: 'The report will be sent tomorrow.',
      cn: '報告明天會寄出。',
      why: '職場書信最常用。誰寄的不重要，收件人只在意「報告什麼時候到」，所以把 report 放句首。這也是被動在正式寫作裡讀起來成熟的原因。' },
    { key: 'process', icon: 'tool',
      title: 'Being + Vpp', titleCn: '正在被…（進行式的被動）',
      ask: '這件事現在正在進行嗎？',
      en: 'The road is being repaired now.',
      cn: '這條路現在正在施工。',
      why: '進行式的被動要兩層：is being + 過去分詞。中文母語者最常寫成 The road is repairing（✗）——那個意思會變成「這條路在修別的東西」。' },
    { key: 'nopassive', icon: 'cross',
      title: 'No passive', titleCn: '沒有被動的動詞',
      ask: '這個動詞後面能接受詞嗎？',
      en: 'The accident happened yesterday.',
      cn: '事故昨天發生了。',
      why: 'happen、occur、appear、arrive、rise、belong 這些不及物動詞後面接不了受詞，所以沒有被動。The accident was happened（✗）是最常見的錯誤之一。' }
  ],
  steps: [
    { label: '情境', text: '你要在報告裡寫「上個月我們裝了新系統」，但不想強調是誰裝的。' },
    { label: '找受詞', text: '主動句 We installed a new system 裡，受詞是 a new system。' },
    { label: '搬到句首', text: 'A new system…' },
    { label: '換動詞', text: '時態是過去式、主詞單數 → was + 過去分詞：was installed.' },
    { label: '組出來', text: 'A new system was installed last month.（by us 可以省略，因為讀者已經知道是誰。）' }
  ],
  comparison: {
    title: '什麼時候該用被動',
    left: {
      tag: 'USE ACTIVE', tagCn: '用主動', icon: 'person',
      head: 'the doer matters', headCn: '做的人是重點',
      en: 'Our team fixed the bug in one day.',
      cn: '我們團隊一天內修好了那個錯誤。',
      pts: ['想強調「是我們做的」', '句子更短、更有力', '日常對話大多用主動']
    },
    right: {
      tag: 'USE PASSIVE', tagCn: '用被動', icon: 'eye',
      head: 'the thing matters', headCn: '被影響的東西是重點',
      en: 'The bug was fixed in one day.',
      cn: '那個錯誤一天內就修好了。',
      pts: ['做的人不重要或不知道', '正式報告、說明、新聞常用', '不要為了「看起來高級」而濫用']
    },
    note: '被動不是比較高級的寫法，是比較適合的寫法。整段都用被動會很難讀——只在「做的人真的不重要」的時候用。'
  },
  quizMore: [
    { q: 'This bridge ____ in 1998.', opts: ['built', 'was built', 'was building', 'has built'], ans: 1,
      expl: '橋是被建的，過去式 → was built。' },
    { q: 'Careful — the floor ____ right now.', opts: ['is cleaning', 'is being cleaned', 'is cleaned', 'cleans'], ans: 1,
      expl: '進行式的被動：is being + 過去分詞。' },
    { q: 'Which sentence is WRONG?', opts: ['The window was broken.', 'The accident was happened.', 'The letters were sent.', 'The road is being repaired.'], ans: 1,
      expl: 'happen 是不及物動詞，沒有被動 → The accident happened.' }
  ]
},

/* ==================== g10 關係子句（B2） ==================== */
g10: {
  vis: true,
  oneLine: '關係子句就是把兩個短句黏成一句：用 who / which / that 代替重複的那個字，接在它後面。',
  map: {
    when: '兩個句子在講同一個人或同一個東西，你想合成一句，不要重複',
    why: '句子從「短句連發」變成有層次的長句——B2 寫作看起來成熟，多半是靠這個',
    form: '名詞 + who / which / that / whose / where / when + 子句'
  },
  visual: {
    type: 'merge',
    cap: '三個步驟：找出兩句共用的那個字 → 把第二句裡的它換成關係代名詞 → 整句接在第一句那個字的後面。人用 who、東西用 which、兩者都可用 that。',
    a: { n: '句 A', en: 'I met a woman.', cn: '我遇到一個女人。' },
    b: { n: '句 B（she 就是那個 woman）', en: 'She works at the museum.', cn: '她在博物館工作。' },
    glue: 'who',
    glueCn: 'she 是人，換成 who，然後整個子句接在 a woman 的正後面。注意 who 已經是主詞，不要再寫 she。',
    out: { n: '合併後', parts: [
      { t: 'I met a woman', role: 'plain' },
      { t: 'who', role: 'glue' },
      { t: 'works at the museum.', role: 'plain' } ],
      cn: '我遇到一個在博物館工作的女人。' }
  },
  scenarios: [
    { key: 'who', icon: 'person',
      title: 'who / which / that', titleCn: '選哪個關係代名詞',
      ask: '你在講人還是東西？',
      en: 'The book that I borrowed was excellent.',
      cn: '我借的那本書很棒。',
      why: '人用 who、東西用 which，兩者都可以用 that（但非限定用法不能用 that）。如果關係代名詞在子句裡是「受詞」，還可以整個省略：The book I borrowed…' },
    { key: 'comma', icon: 'balance',
      title: 'Commas change meaning', titleCn: '逗號會改變意思',
      ask: '這段訊息是必要的，還是補充的？',
      en: 'My brother, who lives in Tainan, called me.',
      cn: '我哥哥（他住台南）打電話給我。',
      why: '有逗號＝非限定，那段只是補充，去掉句子還完整（暗示我只有一個哥哥）。沒逗號＝限定，那段是用來指認是哪一個（暗示我有好幾個哥哥）。非限定不能用 that。' },
    { key: 'whose', icon: 'key',
      title: 'whose', titleCn: 'whose：表示「他的」',
      ask: '你要講「某人的東西」嗎？',
      en: 'I have a friend whose father is a pilot.',
      cn: '我有一個朋友，他的爸爸是機長。',
      why: 'whose 代替 his / her / its，後面直接接名詞（whose father），不加 the。人和東西都能用 whose。' },
    { key: 'where', icon: 'pin',
      title: 'where / when', titleCn: 'where / when：地點與時間',
      ask: '共用的字是地點或時間嗎？',
      en: 'This is the house where I grew up.',
      cn: '這就是我長大的房子。',
      why: '地點用 where、時間用 when。如果硬要用 which，介系詞不能漏：the house which I grew up in。少了那個 in 就是錯的——這是很常見的陷阱。' }
  ],
  steps: [
    { label: '兩個短句', text: 'I work with a man. + He speaks five languages.' },
    { label: '找共用的字', text: '第二句的 He 就是第一句的 a man。' },
    { label: '換成關係代名詞', text: 'He 是人、而且在子句裡當主詞 → 換成 who。' },
    { label: '接上去', text: '整個子句接在 a man 後面：I work with a man who speaks five languages.' },
    { label: '檢查', text: '子句裡不能再留 he。寫成 a man who he speaks… 是最常見的錯誤。' }
  ],
  comparison: {
    title: '有逗號與沒逗號，意思不一樣',
    left: {
      tag: 'DEFINING', tagCn: '限定（沒有逗號）', icon: 'key',
      head: 'tells you which one', headCn: '用來指認是哪一個',
      en: 'The students who studied passed.',
      cn: '唸了書的學生及格了。',
      pts: ['沒有逗號', '暗示：有些學生沒唸書，沒及格', '可以用 that，受詞時可省略']
    },
    right: {
      tag: 'NON-DEFINING', tagCn: '非限定（有逗號）', icon: 'bubble',
      head: 'extra information', headCn: '只是補充說明',
      en: 'The students, who studied, passed.',
      cn: '那些學生（他們都唸了書）都及格了。',
      pts: ['前後都要有逗號', '暗示：全部學生都唸了書，全部及格', '不能用 that，也不能省略']
    },
    note: '兩個逗號改變了整句的意思。寫作時先問自己：這段話是用來「指認是哪一個」（不加逗號），還是「順便補充」（加逗號）？'
  },
  quizMore: [
    { q: 'The woman ____ car was stolen called the police.', opts: ['who', 'which', 'whose', 'whom'], ans: 2,
      expl: '「她的車」→ whose + 名詞。' },
    { q: 'That is the café ____ we first met.', opts: ['which', 'where', 'that', 'when'], ans: 1,
      expl: '共用的字是地點 → where（或 which we first met in）。' },
    { q: 'Which sentence is WRONG?', opts: ['My aunt, who lives in Hualien, is a nurse.', 'My aunt, that lives in Hualien, is a nurse.', 'The book I read was good.', 'The man who called me left a message.'], ans: 1,
      expl: '非限定用法（有逗號）不能用 that，要用 who。' }
  ]
},

/* ==================== g11 分詞構句與倒裝（B2） ==================== */
g11: {
  vis: true,
  oneLine: '分詞構句是把兩句壓成一句：次要的那句砍掉主詞和 be 動詞，只留 V-ing 或 Vpp。',
  map: {
    when: '兩個動作的主詞相同，你想把次要的那個縮短，讓主句更突出',
    why: '句子更緊、更像書面英文；倒裝則是把重點字提到句首，加強語氣',
    form: '分詞構句 V-ing（主動）／Vpp（被動）／Having + Vpp（先發生）　|　倒裝 否定詞 + 助動詞 + 主詞'
  },
  visual: {
    type: 'merge',
    cap: '壓縮的鐵則只有一條：兩句的主詞必須是同一個。主詞不同就不能壓，否則會出現「雨在走路回家」這種句子。',
    a: { n: '次要的那句', en: 'Because I was walking home,', cn: '因為我正走回家，' },
    b: { n: '主句（主詞相同：I）', en: 'I felt the rain start.', cn: '我感覺到開始下雨。' },
    glue: '砍掉 Because I was，只留 V-ing',
    glueCn: '連接詞和主詞一起刪掉，be 動詞變成 V-ing。主句的主詞一定要跟被刪掉的那個一樣。',
    out: { n: '壓成一句', parts: [
      { t: 'Walking home', role: 'verb' },
      { t: ',', role: 'mute' },
      { t: 'I felt the rain start.', role: 'plain' } ],
      cn: '走回家的路上，我感覺到開始下雨。' }
  },
  scenarios: [
    { key: 'ving', icon: 'arrow',
      title: 'V-ing', titleCn: 'V-ing：主動、同時發生',
      ask: '這個主詞是「主動在做」嗎？',
      en: 'Opening the door, she saw a letter on the floor.',
      cn: '她一開門，就看到地上有一封信。',
      why: '主詞主動做那個動作就用 V-ing。兩個動作幾乎同時，或前一個緊接著後一個。這是最常見的分詞構句形式。' },
    { key: 'vpp', icon: 'tool',
      title: 'Vpp', titleCn: 'Vpp：被動',
      ask: '這個主詞是「被…」嗎？',
      en: 'Written in 1920, the novel still feels modern.',
      cn: '這本小說寫於 1920 年，讀起來仍然很現代。',
      why: '主詞是被動的一方就用過去分詞。原句是 The novel was written in 1920——砍掉 The novel was，只留 Written。' },
    { key: 'having', icon: 'check',
      title: 'Having + Vpp', titleCn: 'Having + Vpp：先發生的那件事',
      ask: '這件事在主句之前就做完了嗎？',
      en: 'Having eaten dinner, we went out for a walk.',
      cn: '吃完晚餐後，我們出去散步。',
      why: '要強調「先做完才做下一件」就用 Having + 過去分詞。注意是 Having eaten，不是 Having ate——這裡要用過去分詞，不是過去式。' },
    { key: 'inversion', icon: 'flag',
      title: 'Inversion', titleCn: '倒裝：否定詞提到句首',
      ask: '你想強調哪個字？',
      en: 'Not only did they respond slowly, but they also gave the wrong answer.',
      cn: '他們不只回應慢，還給錯答案。',
      why: 'Not only / Never / Rarely / Seldom / Little / Under no circumstances 放句首時，後面要「疑問句語序」：助動詞 + 主詞 + 原形。Not only they responded（✗）少了 did。' }
  ],
  steps: [
    { label: '兩個短句', text: 'She was tired. + She went to bed early.' },
    { label: '檢查主詞', text: '兩句主詞都是 She——可以壓縮。' },
    { label: '砍掉', text: '刪掉次要那句的主詞和 be 動詞：She was tired → tired… 但形容詞前面要留 Being。' },
    { label: '組出來', text: 'Being tired, she went to bed early.（口語也常直接說 Tired, she went to bed early.）' },
    { label: '主詞不同就不能壓', text: 'Walking home, the rain started.（✗）——雨不會走路。要改成 Walking home, I felt the rain start.' }
  ],
  comparison: {
    title: '分詞構句 vs 倒裝：兩種「升級」方向',
    left: {
      tag: 'PARTICIPLE', tagCn: '分詞構句', icon: 'arrow',
      head: 'make it shorter', headCn: '把句子壓短',
      en: 'Having finished the report, he left the office.',
      cn: '寫完報告後，他離開辦公室。',
      pts: ['兩句主詞必須相同', 'V-ing 主動／Vpp 被動／Having + Vpp 先發生', '目的：讓句子更緊、更書面']
    },
    right: {
      tag: 'INVERSION', tagCn: '倒裝', icon: 'flag',
      head: 'make it stronger', headCn: '把語氣加強',
      en: 'Never have I seen such a mess.',
      cn: '我從沒見過這麼亂的場面。',
      pts: ['否定詞或限定詞放句首', '後面用疑問句語序（助動詞 + 主詞）', '目的：強調那個提到句首的字']
    },
    note: '兩個都是 B2 閱讀常卡住的結構。分詞構句要檢查「主詞是否相同」，倒裝要檢查「有沒有把助動詞搬到主詞前面」。'
  },
  quizMore: [
    { q: '____ in 1889, the tower is still a symbol of the city.', opts: ['Building', 'Built', 'Having built', 'To build'], ans: 1,
      expl: '塔是「被建」的 → 過去分詞 Built。' },
    { q: 'Never ____ such a beautiful sunset.', opts: ['I have seen', 'have I seen', 'I saw', 'did I saw'], ans: 1,
      expl: 'Never 放句首要倒裝：助動詞 have + 主詞 I + 過去分詞。' },
    { q: 'Which sentence is WRONG?', opts: ['Having eaten, we left.', 'Having ate, we left.', 'Feeling tired, she rested.', 'Written by a teenager, the book sold well.'], ans: 1,
      expl: 'Having 後面接過去分詞 eaten，不是過去式 ate。' }
  ]
},

/* ==================== g12 連接與轉折（B2） ==================== */
g12: {
  vis: true,
  oneLine: '連接詞挑錯不是意思錯，是「詞性」錯：有的後面接句子，有的後面接名詞，有的要用分號或句號隔開。',
  map: {
    when: '要表達對比、因果或讓步，而且想讓文章讀起來有層次',
    why: 'B2 的分數幾乎都在連接詞上——同樣的意思，換一個連接詞就換一個層次',
    form: '連接詞 + 句子　|　介系詞 + 名詞／V-ing　|　副詞 + 逗號（前面要斷句）'
  },
  visual: {
    type: 'cols',
    cap: '選字之前先問：後面我要放句子，還是放名詞？放句子用連接詞，放名詞用介系詞，兩句之間要斷開就用副詞。',
    cols: [
      { tag: '接句子（連接詞）', tone: 1,
        tagCn: 'although / though / while / because / since / so',
        items: [
          { en: 'Although it was raining, we went out.', cn: '雖然在下雨，我們還是出門了。', nt: 'Although + 主詞 + 動詞' },
          { en: 'We stayed in because the weather was bad.', cn: '我們待在家，因為天氣很差。', nt: 'because + 完整句子' },
          { en: 'While some prefer coffee, others prefer tea.', cn: '有些人偏好咖啡，有些人偏好茶。', nt: 'while 也可以表對比' }
        ] },
      { tag: '接名詞（介系詞）', tone: 2,
        tagCn: 'despite / in spite of / because of / due to',
        items: [
          { en: 'Despite the rain, we went out.', cn: '儘管下雨，我們還是出門了。', nt: 'Despite + 名詞，不加 that' },
          { en: 'The delay was due to bad weather.', cn: '延誤是因為天氣不好。', nt: 'due to + 名詞' },
          { en: 'In spite of being tired, she finished it.', cn: '儘管很累，她還是做完了。', nt: '接 V-ing 也可以' }
        ] },
      { tag: '要斷句（副詞）', tone: 3,
        tagCn: 'however / nevertheless / therefore / moreover',
        items: [
          { en: 'It was raining. However, we went out.', cn: '當時在下雨。不過我們還是出門了。', nt: '前面用句號或分號' },
          { en: 'The cost was high; therefore, we cancelled.', cn: '成本太高，因此我們取消了。', nt: '分號後面加逗號' },
          { en: 'She was tired. Nevertheless, she finished it.', cn: '她很累，儘管如此還是做完了。', nt: '不能當連接詞用逗號串' }
        ] }
    ]
  },
  scenarios: [
    { key: 'contrast', icon: 'balance',
      title: 'Contrast', titleCn: '對比：兩件事不一樣',
      ask: '你要把兩個相反的東西擺在一起嗎？',
      en: 'Whereas the north is humid, the south is dry.',
      cn: '北部潮濕，南部乾燥。',
      why: 'whereas / while 用來對比兩個平行的事實，語氣比 but 正式。寫作要顯示層次，用 whereas 比一直用 but 好。' },
    { key: 'cause', icon: 'link',
      title: 'Cause', titleCn: '因果：為什麼會這樣',
      ask: '後面接的是句子還是名詞？',
      en: 'The flight was cancelled owing to the typhoon.',
      cn: '班機因為颱風取消。',
      why: 'because + 句子；because of / due to / owing to + 名詞。The delay was because the weather was bad 也對，但 The delay was because of the weather was bad（✗）混用了兩種。' },
    { key: 'concession', icon: 'fork',
      title: 'Concession', titleCn: '讓步：先承認再翻轉',
      ask: '你想先讓一步再提出主張嗎？',
      en: 'Even though the price is high, the quality justifies it.',
      cn: '雖然價格偏高，但品質值得。',
      why: '讓步句是 B2 寫作最有效的加分句型：先承認對方的點（Even though / Admittedly / It is true that…），再提出自己的主張。這顯示你考慮過兩面。' },
    { key: 'adverb', icon: 'cross',
      title: 'The comma splice', titleCn: 'however 不能當連接詞',
      ask: '你用逗號把兩個句子串起來了嗎？',
      en: 'It was late. However, we kept working.',
      cn: '時間很晚了。不過我們繼續工作。',
      why: 'however 是副詞，不是連接詞。It was late, however we kept working（✗）是兩個句子用逗號硬串。要改成句號、分號，或換成連接詞 but。' }
  ],
  steps: [
    { label: '想講的意思', text: '「雖然下雨，我們還是去了。」' },
    { label: '先問後面放什麼', text: '如果要放「下雨」這個名詞（the rain）→ 用介系詞 Despite。' },
    { label: '介系詞版', text: 'Despite the rain, we went.' },
    { label: '如果要放整句', text: '「it was raining」是完整句子 → 用連接詞 Although。' },
    { label: '連接詞版', text: 'Although it was raining, we went.　✗ Although the rain, we went.（Although 後面不能只放名詞。）' }
  ],
  comparison: {
    title: 'although 與 despite：同一個意思，不同詞性',
    left: {
      tag: 'ALTHOUGH', tagCn: '連接詞', icon: 'arrow',
      head: '+ subject + verb', headCn: '後面接完整句子',
      en: 'Although the traffic was bad, we arrived on time.',
      cn: '雖然交通很糟，我們還是準時到了。',
      pts: ['Although / Though / Even though', '後面一定要有主詞和動詞', '✗ Although the bad traffic…']
    },
    right: {
      tag: 'DESPITE', tagCn: '介系詞', icon: 'money',
      head: '+ noun / V-ing', headCn: '後面接名詞或 V-ing',
      en: 'Despite the bad traffic, we arrived on time.',
      cn: '儘管交通很糟，我們還是準時到了。',
      pts: ['Despite / In spite of', '後面接名詞或 V-ing', '✗ Despite the traffic was bad…']
    },
    note: '想同時用兩者的結構，就加 the fact that：Despite the fact that the traffic was bad…（把整句包成一個名詞片語）。'
  },
  quizMore: [
    { q: '____ the heavy rain, the match continued.', opts: ['Although', 'Despite', 'However', 'Because'], ans: 1,
      expl: 'the heavy rain 是名詞 → 用介系詞 Despite。' },
    { q: 'The project failed ____ poor planning.', opts: ['because', 'although', 'due to', 'however'], ans: 2,
      expl: 'poor planning 是名詞 → due to（because 後面要接句子）。' },
    { q: 'Which is punctuated correctly?', opts: ['It was cold, however we swam.', 'It was cold. However, we swam.', 'It was cold however, we swam.', 'It was cold, although, we swam.'], ans: 1,
      expl: 'however 是副詞，前面要用句號或分號斷開，後面加逗號。' }
  ]
},

/* ==================== g13 轉述句（B2） ==================== */
g13: {
  vis: true,
  oneLine: '轉述別人的話要做三件事：去掉引號加 that、時態往回退一格、人稱和時間詞跟著換。',
  map: {
    when: '要把別人說過的話，用自己的話轉述出來',
    why: '說話的時間已經過去了，所以整句的時間座標要往後退一格',
    form: 'He said (that) + 退一格的句子　|　He asked me + 疑問詞 + 直述語序'
  },
  visual: {
    type: 'shift',
    cap: '每一格都往回退一步。已經退到底的（過去完成式、would、could）就不用再退。',
    rows: [
      { a: 'am / is / are', b: 'was / were', nt: '現在式 → 過去式：「I am tired」→ he was tired' },
      { a: 'do / does', b: 'did', nt: '一般動詞現在式 → 過去式：「I work here」→ he worked there' },
      { a: 'did / have done', b: 'had done', nt: '過去式與現在完成式都退成過去完成式' },
      { a: 'will', b: 'would', nt: '「I will call」→ he would call' },
      { a: 'can', b: 'could', nt: '「I can swim」→ he could swim' },
      { a: 'may / must', b: 'might / had to', nt: 'must 表義務時退成 had to' }
    ]
  },
  scenarios: [
    { key: 'statement', icon: 'bubble',
      title: 'Statements', titleCn: '轉述陳述句',
      ask: '要加 that 嗎？',
      en: 'She said (that) she was busy.',
      cn: '她說她很忙。',
      why: 'that 可以省略，口語常省。真正要做的是退時態：原話是 I am busy，退成 she was busy。注意人稱也換了（I → she）。' },
    { key: 'saytell', icon: 'person',
      title: 'say vs tell', titleCn: 'say 與 tell 的分別',
      ask: '你要講「跟誰說」嗎？',
      en: 'He told me that he was late.',
      cn: '他告訴我他遲到了。',
      why: 'tell 後面一定要接「對誰說」：tell me / tell him。say 後面直接接內容，要提對象要加 to：He said to me…。所以 He told that…（✗）少了受詞。' },
    { key: 'question', icon: 'key',
      title: 'Questions', titleCn: '轉述問句：語序要變回直述',
      ask: '原句是疑問句嗎？',
      en: 'She asked me where I lived.',
      cn: '她問我住哪裡。',
      why: '轉述問句後面要用「直述語序」——主詞在動詞前面，不要留疑問句的倒裝。She asked me where did I live（✗）是最常見的錯。Yes/No 問句用 if / whether。' },
    { key: 'noshift', icon: 'check',
      title: 'When not to shift', titleCn: '不用退時態的情況',
      ask: '這件事現在還成立嗎？',
      en: 'He says the meeting starts at three.',
      cn: '他說會議三點開始。',
      why: '轉述動詞是現在式（says / he says）、或內容是永遠成立的事實、或事情還沒發生，都可以不退時態。退不退是語意判斷，不是機械規則。' }
  ],
  steps: [
    { label: '原話', text: 'Tom：「I will finish it tomorrow.」' },
    { label: '換人稱', text: '講話的是 Tom，所以 I → he。' },
    { label: '退時態', text: 'will → would。' },
    { label: '換時間詞', text: 'tomorrow → the next day（說話那天已經過去了）。' },
    { label: '組出來', text: 'Tom said (that) he would finish it the next day.' }
  ],
  comparison: {
    title: '直接引述 vs 轉述',
    left: {
      tag: 'DIRECT', tagCn: '直接引述', icon: 'bubble',
      head: 'exact words', headCn: '一字不改，加引號',
      en: '"I am tired," she said.',
      cn: '「我很累。」她說。',
      pts: ['保留原話的時態與人稱', '要加引號和逗號', '常見於小說對話']
    },
    right: {
      tag: 'REPORTED', tagCn: '轉述句', icon: 'person',
      head: 'shifted back', headCn: '時態退一格，人稱換掉',
      en: 'She said (that) she was tired.',
      cn: '她說她很累。',
      pts: ['am → was、I → she', '不用引號，that 可省略', '時間詞也要換：today → that day']
    },
    note: '時間詞的對照要一起記：now → then、today → that day、yesterday → the day before、tomorrow → the next day、here → there、this → that。'
  },
  quizMore: [
    { q: 'He said, "I can help you." → He said he ____ help me.', opts: ['can', 'could', 'will', 'may'], ans: 1,
      expl: 'can 退一格變 could。' },
    { q: 'She asked me ____.', opts: ['where do I work', 'where did I work', 'where I worked', 'where I did work'], ans: 2,
      expl: '轉述問句用直述語序：where + 主詞 + 動詞（退時態）。' },
    { q: 'Which sentence is correct?', opts: ['He told that he was busy.', 'He said me that he was busy.', 'He told me that he was busy.', 'He said to that he was busy.'], ans: 2,
      expl: 'tell 一定要接對象（tell me）；say 要接對象時得加 to。' }
  ]
},

/* ==================== g14 比較級、最高級與倍數（B1+） ==================== */
g14: {
  vis: true,
  oneLine: 'B2 很少讓比較級單獨出現：前面要加程度副詞說明「差多少」，後面要有比較的基準。',
  map: {
    when: '要比較兩者、指出最高的那一個，或說明「幾倍」',
    why: '光說 better 不夠——聽的人想知道好多少、跟什麼比',
    form: '短音節 -er / -est　|　長音節 more / most　|　倍數 … times as + 原級 + as'
  },
  visual: {
    type: 'scale',
    cap: '把程度副詞放上刻度就看得出差別：從 slightly（一點點）到 far（差很多），這些字才是讓比較句變成 B2 的關鍵。',
    lo: '差一點點',
    hi: '差非常多',
    stops: [
      { at: 10, label: 'slightly / a little', labelCn: '稍微、一點點',
        en: 'This one is slightly cheaper.', cn: '這個稍微便宜一點。' },
      { at: 40, label: 'rather / somewhat', labelCn: '有點、算是',
        en: 'The new model is rather more expensive.', cn: '新款算是貴了一些。' },
      { at: 70, label: 'much / a lot / considerably', labelCn: '好很多、相當多',
        en: 'This is much better than the other one.', cn: '這個比另一個好很多。' },
      { at: 95, label: 'far / by far the', labelCn: '差非常多、遠遠地',
        en: 'It is by far the best option.', cn: '這是目前最好的選擇，遠勝其他。' }
    ]
  },
  scenarios: [
    { key: 'form', icon: 'balance',
      title: 'Which form', titleCn: '該加 -er 還是 more',
      ask: '這個形容詞有幾個音節？',
      en: 'This road is narrower, but the other one is more dangerous.',
      cn: '這條路比較窄，但另一條比較危險。',
      why: '一個音節加 -er／-est；三個音節以上用 more／most；兩個音節看字尾（-y 結尾如 happy → happier）。最重要的是不要兩個一起用——more taller（✗）是雙重比較。' },
    { key: 'intensify', icon: 'star',
      title: 'Add a degree adverb', titleCn: '前面加程度副詞',
      ask: '差多少？',
      en: 'The second version is far more readable.',
      cn: '第二版好讀得多。',
      why: '比較級前面不能用 very——要用 much / far / a lot / slightly / considerably。very better（✗）是中文母語者最常犯的錯，因為中文說「非常好」很自然。' },
    { key: 'times', icon: 'money',
      title: 'Multiples', titleCn: '倍數要用 as … as',
      ask: '你要說「幾倍」嗎？',
      en: 'It costs three times as much as the old one.',
      cn: '它的價格是舊款的三倍。',
      why: '倍數的結構是「數字 + times + as + 原級 + as」，中間用原級不是比較級。three times as more as（✗）混用了兩種結構。也可以說 three times more expensive than。' },
    { key: 'basis', icon: 'link',
      title: 'Name the basis', titleCn: '要說出跟什麼比',
      ask: '比較的對象是誰？',
      en: 'Compared with last year, sales rose by 12%.',
      cn: '跟去年相比，銷售額成長了 12%。',
      why: '寫作時比較級後面沒有 than 或 compared with，讀者會不知道你在跟什麼比。也可以用 the former / the latter 指前者後者，避免重複。' }
  ],
  steps: [
    { label: '想講的意思', text: '「新方案比舊方案好得多。」' },
    { label: '選形式', text: 'good 是不規則變化 → better。' },
    { label: '加程度副詞', text: '「好得多」不能用 very，要用 much 或 far → much better。' },
    { label: '補上基準', text: '要說跟什麼比 → than the old one。' },
    { label: '組出來', text: 'The new plan is much better than the old one.' }
  ],
  comparison: {
    title: '比較級 vs 最高級',
    left: {
      tag: 'COMPARATIVE', tagCn: '比較級', icon: 'balance',
      head: 'two things', headCn: '兩者相比',
      en: 'Taipei is bigger than Tainan.',
      cn: '台北比台南大。',
      pts: ['-er / more，後面接 than', '程度副詞用 much / far / slightly', '✗ very bigger、✗ more bigger']
    },
    right: {
      tag: 'SUPERLATIVE', tagCn: '最高級', icon: 'star',
      head: 'one out of many', headCn: '一群裡面最…的',
      en: 'Taipei is the biggest city in Taiwan.',
      cn: '台北是台灣最大的城市。',
      pts: ['-est / most，前面要有 the', '常接 in / of + 範圍', '加強語氣用 by far the…']
    },
    note: '最高級前面的 the 不能漏；比較級後面的 than 也不能漏。這兩個小字是判分最快的地方。'
  },
  quizMore: [
    { q: 'This laptop is ____ than mine.', opts: ['very light', 'much lighter', 'more light', 'lightest'], ans: 1,
      expl: '比較級前面用 much，不用 very；light 是單音節 → lighter。' },
    { q: 'Their new office is ____ as their old one.', opts: ['twice as big', 'twice bigger', 'two times bigger as', 'as twice big'], ans: 0,
      expl: '倍數結構是「數字 + times / twice + as + 原級 + as」。' },
    { q: 'It was ____ film I have ever seen.', opts: ['the worse', 'the worst', 'worst', 'more worse'], ans: 1,
      expl: '最高級 worst，而且前面要有 the。' }
  ]
},

/* ==================== g15 情態動詞的推測語氣（B2） ==================== */
g15: {
  vis: true,
  oneLine: '情態動詞除了能力與義務，更常用來表達「我有幾成把握」——must 是九成，might 是一半，can’t 是零。',
  map: {
    when: '你在推測、不是在報告事實；想讓對方知道你有多確定',
    why: '英文用情態動詞當「確定度的刻度」，比一直說 maybe 精準得多',
    form: '推測現在 must / might / can’t + 原形　|　推測過去 must / might / can’t + have + Vpp'
  },
  visual: {
    type: 'scale',
    cap: '一條刻度就講完了。要推測「過去」的事，只要在同一個字後面加 have + 過去分詞，刻度位置不變。',
    lo: '不可能（0%）',
    hi: '幾乎確定（95%）',
    stops: [
      { at: 2, label: "can't / couldn't", labelCn: '不可能',
        en: "She can't be at home — the lights are off.", cn: '她不可能在家，燈是關的。' },
      { at: 30, label: 'might not / may not', labelCn: '也許不是',
        en: 'He might not know about the change.', cn: '他可能不知道有變動。' },
      { at: 50, label: 'may / might / could', labelCn: '有可能',
        en: 'The delay could be a system error.', cn: '延遲可能是系統錯誤。' },
      { at: 75, label: 'should / ought to', labelCn: '照理說應該',
        en: 'The parcel should arrive today.', cn: '包裹照理說今天會到。' },
      { at: 95, label: 'must', labelCn: '一定是',
        en: 'You must be tired after that flight.', cn: '你飛完那趟一定很累。' }
    ]
  },
  scenarios: [
    { key: 'now', icon: 'eye',
      title: 'Deduction about now', titleCn: '推測現在的狀況',
      ask: '你看到什麼線索？',
      en: "His car isn't here — he must be out.",
      cn: '他的車不在，他一定出去了。',
      why: '推測「現在」用「情態動詞 + 原形」。must 表示你根據線索推出來的結論，不是在講義務。這裡的 must be out 不是「必須出去」。' },
    { key: 'past', icon: 'clock',
      title: 'Deduction about the past', titleCn: '推測過去的事',
      ask: '這件事已經發生了嗎？',
      en: 'He must have forgotten the meeting.',
      cn: '他一定是忘了會議。',
      why: '推測「過去」只要加 have + 過去分詞。He must forgot（✗）是最常見的錯——must 後面永遠接原形，過去要靠 have forgotten 表示。' },
    { key: 'negative', icon: 'cross',
      title: "can't, not mustn't", titleCn: '否定的推測用 can’t',
      ask: '你要說「不可能」還是「不准」？',
      en: "She can't be at home; the light is off.",
      cn: '她不可能在家，燈是關的。',
      why: 'must 的否定推測不是 mustn’t——mustn’t 是「禁止」。「不可能」一律用 can’t / couldn’t。She mustn’t be at home 會被理解成「她不准在家」。' },
    { key: 'obligation', icon: 'balance',
      title: 'Deduction vs obligation', titleCn: '推測與義務怎麼分',
      ask: '這是判斷還是規定？',
      en: 'You must submit the form by Friday.',
      cn: '你必須在星期五前交表格。',
      why: '同一個 must 兩種意思，靠上下文分：後面接 be / have 這類狀態動詞，通常是推測；接動作動詞、又出現期限或規則，通常是義務。' }
  ],
  steps: [
    { label: '情境', text: '你敲門沒人應，屋裡也沒聲音。' },
    { label: '先定確定度', text: '你相當確定沒人在——大約九成，選 must。' },
    { label: '再定時間', text: '你在講「現在」的狀況 → must + 原形。' },
    { label: '組出來', text: 'They must be out.（他們一定出去了。）' },
    { label: '換成推測過去', text: '如果你在講剛才的事，加 have + 過去分詞：They must have gone out.（他們一定是出去了。）' }
  ],
  comparison: {
    title: '推測現在 vs 推測過去',
    left: {
      tag: 'MODAL + V', tagCn: '推測現在', icon: 'eye',
      head: 'about now', headCn: '講現在的狀況',
      en: 'She must be busy.',
      cn: '她一定很忙。',
      pts: ['情態動詞 + 原形', 'must / might / could / can’t + be、have、know…', '講的是說話這一刻']
    },
    right: {
      tag: 'MODAL + HAVE + Vpp', tagCn: '推測過去', icon: 'clock',
      head: 'about the past', headCn: '講已經發生的事',
      en: 'She must have been busy.',
      cn: '她當時一定很忙。',
      pts: ['情態動詞 + have + 過去分詞', 'must have / might have / can’t have…', '情態動詞本身不變成過去式']
    },
    note: '關鍵：情態動詞自己永遠是原形，時間是由後面的 have + Vpp 決定。所以沒有 musted、也不會說 must forgot。'
  },
  quizMore: [
    { q: "You've been working all day — you ____ exhausted.", opts: ['must be', 'must have been', "can't be", 'should have been'], ans: 0,
      expl: '推測「現在」的狀態 → must + 原形 be。' },
    { q: "The office is empty. Everyone ____ home already.", opts: ['must go', 'must have gone', "mustn't go", 'must going'], ans: 1,
      expl: '推測已經發生的事 → must have + 過去分詞。' },
    { q: 'That ____ be John — he is in Japan this week.', opts: ["mustn't", "can't", 'may not', 'should not'], ans: 1,
      expl: '「不可能」用 can’t；mustn’t 是「禁止」。' }
  ]
},

/* ==================== ga01 現在簡單式（A2） ==================== */
ga01: {
  vis: true,
  oneLine: '現在簡單式講習慣和事實。整個時態只有一個難關：主詞是 he / she / it 的時候，動詞要加 -s。',
  map: {
    when: '講每天做的事、固定的習慣、一直都成立的事實',
    why: '這是最基本的時態，先把「第三人稱加 s」練成反射動作',
    form: 'I / you / we / they + 原形　|　he / she / it + 動詞 + s'
  },
  visual: {
    type: 'cols',
    cap: '兩邊只差一個 s，但錯了最明顯。先看主詞是不是「他／她／它」（一個人、一個東西），是就加 s。',
    cols: [
      { tag: 'I / YOU / WE / THEY', tone: 2,
        tagCn: '動詞用原形，不加 s',
        items: [
          { en: 'I work in a factory.', cn: '我在工廠工作。', nt: '原形 work' },
          { en: 'They live near the station.', cn: '他們住車站附近。', nt: '原形 live' },
          { en: "I don't like coffee.", cn: '我不喜歡咖啡。', nt: '否定用 don’t + 原形' }
        ] },
      { tag: 'HE / SHE / IT', tone: 1,
        tagCn: '動詞要加 s（或 es / ies）',
        items: [
          { en: 'He works in a factory.', cn: '他在工廠工作。', nt: 'work → works' },
          { en: 'She watches TV every night.', cn: '她每晚看電視。', nt: 'ch 結尾加 es' },
          { en: "She doesn't like coffee.", cn: '她不喜歡咖啡。', nt: 'doesn’t 後面用原形，不再加 s' }
        ] }
    ]
  },
  scenarios: [
    { key: 'habit', icon: 'cycle',
      title: 'Habits', titleCn: '習慣：每天都這樣',
      ask: '這件事會重複發生嗎？',
      en: 'I get up at seven every day.',
      cn: '我每天七點起床。',
      why: '常一起出現的時間詞：every day / every morning / usually / always / sometimes / on Mondays / twice a week。看到這些字，用現在簡單式。' },
    { key: 'thirds', icon: 'flag',
      title: 'Add -s', titleCn: '第三人稱加 s 的拼法',
      ask: '這個動詞怎麼結尾？',
      en: 'She studies English and goes to class on Fridays.',
      cn: '她學英文，星期五去上課。',
      why: '一般加 s；s / x / ch / sh / o 結尾加 es（goes、watches）；子音 + y 結尾去 y 加 ies（study → studies）。母音 + y 直接加 s（plays）。' },
    { key: 'do', icon: 'cross',
      title: 'do / does', titleCn: '否定與疑問一定要用 do / does',
      ask: '主詞是 he / she / it 嗎？',
      en: 'Does she work here?',
      cn: '她在這裡工作嗎？',
      why: '第三人稱用 does，其他用 do。重點是：does 已經帶了那個 s，後面的動詞要變回原形。She doesn’t likes（✗）就是把 s 加了兩次。' },
    { key: 'be', icon: 'person',
      title: 'be verb is different', titleCn: 'be 動詞不用 do',
      ask: '句子裡的動詞是 am / is / are 嗎？',
      en: 'He is a teacher. / Is he a teacher?',
      cn: '他是老師。／他是老師嗎？',
      why: 'be 動詞自己就能否定和疑問：is not / Is he…？不需要 do。而且不能跟一般動詞疊在一起——I am work（✗）要改成 I work 或 I am working。' }
  ],
  steps: [
    { label: '想講的意思', text: '「我姊姊在醫院工作。」' },
    { label: '看主詞', text: 'My sister ＝ she，是第三人稱單數。' },
    { label: '動詞加 s', text: 'work → works。' },
    { label: '組出來', text: 'My sister works at a hospital.' },
    { label: '改成否定', text: '用 doesn’t，動詞變回原形：My sister doesn’t work at a hospital.（不是 doesn’t works。）' }
  ],
  comparison: {
    title: '肯定句加 s，否定句不加',
    left: {
      tag: 'POSITIVE', tagCn: '肯定句', icon: 'check',
      head: 'verb + s', headCn: '動詞要加 s',
      en: 'She likes coffee.',
      cn: '她喜歡咖啡。',
      pts: ['第三人稱單數 → 動詞加 s', '沒有助動詞', '✗ She like coffee.']
    },
    right: {
      tag: 'NEGATIVE / QUESTION', tagCn: '否定與疑問', icon: 'cross',
      head: 'does + base verb', headCn: 'does 帶走那個 s',
      en: "She doesn't like coffee. / Does she like coffee?",
      cn: '她不喜歡咖啡。／她喜歡咖啡嗎？',
      pts: ['does 已經帶了 s', '後面的動詞回到原形', '✗ She doesn’t likes coffee.']
    },
    note: '一句話記住：那個 s 只能出現一次。放在動詞上，或放在 does 上，不能兩個都有。'
  },
  quizMore: [
    { q: 'My father ____ to work by bus.', opts: ['go', 'goes', 'going', 'is go'], ans: 1,
      expl: 'My father ＝ he → 動詞加 es：goes。' },
    { q: '____ your brother play basketball?', opts: ['Do', 'Does', 'Is', 'Are'], ans: 1,
      expl: 'your brother ＝ he → 疑問句用 Does + 原形。' },
    { q: 'Which sentence is correct?', opts: ["He doesn't likes fish.", "He don't like fish.", "He doesn't like fish.", 'He not like fish.'], ans: 2,
      expl: 'doesn’t + 原形 like。' }
  ]
},

/* ==================== ga02 過去簡單式（A2） ==================== */
ga02: {
  vis: true,
  oneLine: '過去簡單式講已經結束的事。be 動詞變 was / were，一般動詞加 -ed——但最常用的那些字都是不規則的。',
  map: {
    when: '事情發生在過去、已經結束了，而且常有明確的過去時間（yesterday、last week、in 2020）',
    why: '時間關起來了，跟現在沒有關係，所以要換一個時態',
    form: 'be：was / were　|　一般動詞：V-ed 或不規則過去式　|　否定疑問：did / didn’t + 原形'
  },
  visual: {
    type: 'shift',
    cap: '把最常用的字先背下來。表格右邊那些不規則變化沒有規則可循，只能記——但它們就是日常出現最多的字。',
    rows: [
      { a: 'am / is', b: 'was', nt: '單數：I was / he was　|　✗ Yesterday I am tired.' },
      { a: 'are', b: 'were', nt: '複數與 you：we were / you were　|　✗ We was late.' },
      { a: 'work / play / watch', b: 'worked / played / watched', nt: '規則變化：直接加 -ed' },
      { a: 'go / have / do', b: 'went / had / did', nt: '不規則：最常用的三個字' },
      { a: 'eat / see / take', b: 'ate / saw / took', nt: '不規則：一定要背' },
      { a: "don't / doesn't", b: "didn't + 原形", nt: '✗ I didn’t went. → I didn’t go.' }
    ]
  },
  scenarios: [
    { key: 'be', icon: 'person',
      title: 'was / were', titleCn: 'be 動詞的過去式',
      ask: '主詞是單數還是複數？',
      en: 'I was tired, and we were late.',
      cn: '我很累，而且我們遲到了。',
      why: 'I / he / she / it 用 was；you / we / they 用 were。這裡最常見的錯是 We was late（✗）——複數一定要用 were。' },
    { key: 'ed', icon: 'check',
      title: 'Add -ed', titleCn: '規則動詞加 -ed',
      ask: '這個動詞是規則變化嗎？',
      en: 'I watched a film and cooked dinner.',
      cn: '我看了一部電影，然後煮了晚餐。',
      why: '一般加 -ed；e 結尾只加 -d（like → liked）；子音 + y 去 y 加 ied（study → studied）；短母音 + 單子音要雙寫（stop → stopped）。' },
    { key: 'irregular', icon: 'book',
      title: 'Irregular verbs', titleCn: '不規則動詞：只能背',
      ask: '這是常用字嗎？',
      en: 'I went to the market and bought some fruit.',
      cn: '我去市場買了一些水果。',
      why: '最常用的字幾乎都不規則：go → went、have → had、do → did、eat → ate、see → saw、take → took、buy → bought、come → came、get → got。' },
    { key: 'did', icon: 'cross',
      title: "did / didn't", titleCn: '否定與疑問用 did',
      ask: '這是否定句或疑問句嗎？',
      en: "Did you eat lunch? — No, I didn't eat.",
      cn: '你吃午餐了嗎？——沒有，我沒吃。',
      why: 'did 已經表示過去了，所以後面的動詞要變回原形。Did you ate（✗）和 I didn’t went（✗）都是把過去式標記了兩次。' }
  ],
  steps: [
    { label: '想講的意思', text: '「我昨天沒去上班。」' },
    { label: '看時間', text: 'yesterday 是明確的過去時間 → 用過去簡單式。' },
    { label: '這是否定句', text: '否定要用 didn’t。' },
    { label: '動詞回原形', text: 'didn’t 後面用原形 go，不是 went。' },
    { label: '組出來', text: "I didn't go to work yesterday." }
  ],
  comparison: {
    title: '肯定句用過去式，否定疑問用 did + 原形',
    left: {
      tag: 'POSITIVE', tagCn: '肯定句', icon: 'check',
      head: 'past form', headCn: '動詞用過去式',
      en: 'I went to work.',
      cn: '我去上班了。',
      pts: ['直接用過去式 went', '沒有助動詞', '規則動詞加 -ed']
    },
    right: {
      tag: 'NEGATIVE / QUESTION', tagCn: '否定與疑問', icon: 'cross',
      head: 'did + base verb', headCn: 'did 帶走過去式',
      en: "I didn't go to work. / Did you go to work?",
      cn: '我沒去上班。／你去上班了嗎？',
      pts: ['did / didn’t 已經表示過去', '後面的動詞回到原形', '✗ I didn’t went、✗ Did you went']
    },
    note: '跟現在簡單式一樣的道理：過去式的標記只能出現一次。放在動詞上，或放在 did 上。'
  },
  quizMore: [
    { q: 'We ____ at the station at six.', opts: ['was', 'were', 'is', 'are'], ans: 1,
      expl: 'We 是複數 → were。' },
    { q: '____ you see the film last night?', opts: ['Did', 'Do', 'Was', 'Were'], ans: 0,
      expl: 'last night 是過去 → 疑問句用 Did + 原形 see。' },
    { q: 'Which sentence is correct?', opts: ["She didn't came home.", "She didn't come home.", "She doesn't came home.", 'She not came home.'], ans: 1,
      expl: 'didn’t + 原形 come。' }
  ]
},

/* ==================== ga03 there is / there are 與 some / any（A2） ==================== */
ga03: {
  vis: true,
  oneLine: 'there is / there are 是在說「某個地方有什麼」。單數和不可數用 is，複數用 are——看的是後面那個名詞，不是別的。',
  map: {
    when: '要描述某個地方存在什麼東西，或問「有沒有」',
    why: '中文說「有」不分單複數，英文要分；而且不能用 have 來說「某地有…」',
    form: 'There is + 單數／不可數　|　There are + 複數　|　some（肯定）／any（否定與疑問）'
  },
  visual: {
    type: 'cols',
    cap: '決定 is 還是 are，只看緊接在後面的那個名詞。也要記住：「某地有…」用 there is / there are，不是 have。',
    cols: [
      { tag: 'THERE IS', tone: 1,
        tagCn: '後面接單數名詞，或不可數名詞',
        items: [
          { en: 'There is a bus stop near my house.', cn: '我家附近有一個公車站。', nt: '單數：a bus stop' },
          { en: 'There is some milk in the fridge.', cn: '冰箱裡有一些牛奶。', nt: '不可數：milk 一律用 is' },
          { en: "There isn't any sugar left.", cn: '糖沒有了。', nt: '否定用 any' }
        ] },
      { tag: 'THERE ARE', tone: 2,
        tagCn: '後面接複數名詞',
        items: [
          { en: 'There are three buses every hour.', cn: '每小時有三班公車。', nt: '複數：three buses' },
          { en: 'There are some apples on the table.', cn: '桌上有一些蘋果。', nt: '肯定用 some' },
          { en: 'Are there any questions?', cn: '有任何問題嗎？', nt: '疑問用 any' }
        ] }
    ]
  },
  scenarios: [
    { key: 'which', icon: 'pin',
      title: 'is or are', titleCn: '看後面那個名詞',
      ask: '緊接在後面的名詞是單數還是複數？',
      en: 'There are two supermarkets and a park.',
      cn: '那裡有兩間超市和一座公園。',
      why: '看「緊接著」的那個名詞。two supermarkets 是複數 → are。如果順序反過來（There is a park and two supermarkets），就用 is。' },
    { key: 'uncount', icon: 'money',
      title: 'Uncountable nouns', titleCn: '不可數名詞一律用 is',
      ask: '這個東西可以「一個一個數」嗎？',
      en: 'There is a lot of traffic today.',
      cn: '今天車流量很大。',
      why: 'water、milk、rice、money、traffic、information、advice 都是不可數，永遠用 is，也不能加 s。要講數量就借容器或單位：two bottles of milk。' },
    { key: 'nohave', icon: 'cross',
      title: 'Not "have"', titleCn: '「某地有…」不能用 have',
      ask: '主詞是地點還是人？',
      en: 'There is a bus stop near my house.',
      cn: '我家附近有一個公車站。',
      why: '中文的「有」對應兩個英文結構：主詞是「人」用 have（I have a car），主詞是「地方」用 there is / there are。There have a bus stop（✗）是最典型的中式英文。' },
    { key: 'someany', icon: 'balance',
      title: 'some or any', titleCn: 'some 與 any 怎麼選',
      ask: '這是肯定句，還是否定／疑問句？',
      en: "There aren't any seats, but there are some standing places.",
      cn: '沒有座位了，但還有一些站位。',
      why: '肯定句用 some，否定和疑問用 any。例外：請求或邀約時用 some 比較客氣（Would you like some tea?），因為你預期對方會答應。' }
  ],
  steps: [
    { label: '想講的意思', text: '「我房間裡沒有窗戶。」' },
    { label: '主詞是地點', text: '「房間裡有…」→ 要用 there is / there are，不能用 have。' },
    { label: '看名詞', text: 'windows 是複數 → there are。' },
    { label: '改否定', text: 'there aren’t，而且否定句要用 any。' },
    { label: '組出來', text: "There aren't any windows in my room." }
  ],
  comparison: {
    title: 'there is / there are 與 have',
    left: {
      tag: 'THERE IS / ARE', tagCn: '某個地方有…', icon: 'pin',
      head: 'a place has it', headCn: '主詞是地點',
      en: 'There is a park near my school.',
      cn: '我學校附近有一座公園。',
      pts: ['講「存在」', '主詞是 there，真正的名詞在後面', '✗ There have a park…']
    },
    right: {
      tag: 'HAVE / HAS', tagCn: '某人有…', icon: 'person',
      head: 'a person owns it', headCn: '主詞是人',
      en: 'I have a bike.',
      cn: '我有一台腳踏車。',
      pts: ['講「擁有」', '主詞是人（或組織）', 'he / she / it 要用 has']
    },
    note: '中文都說「有」，英文分兩條路：地方 → there is / there are，人 → have / has。先問「主詞是誰」就不會錯。'
  },
  quizMore: [
    { q: '____ a lot of people at the concert.', opts: ['There is', 'There are', 'There have', 'It has'], ans: 1,
      expl: 'people 是複數 → There are。' },
    { q: 'There ____ any bread in the kitchen.', opts: ['are not', 'is not', 'have not', 'do not'], ans: 1,
      expl: 'bread 是不可數 → is；否定句用 any。' },
    { q: 'Would you like ____ coffee?', opts: ['any', 'some', 'a', 'many'], ans: 1,
      expl: '邀約、請求時用 some 比較客氣，即使是疑問句。' }
  ]
},

/* ============================================================
   每日文法 · A2（7 個）
   ============================================================ */

/* ---- 2026-08-14 A2 現在進行式（基礎） ---- */
dg20260814a2: {
  vis: true,
  oneLine: '現在進行式是兩塊拼起來的：be 動詞（am / is / are）＋ 動詞加 -ing。少了任何一塊都不成句。',
  map: {
    when: '講「現在這一刻正在做」的事',
    why: '讓對方知道這件事此刻正在發生，還沒結束',
    form: 'am / is / are + V-ing'
  },
  visual: {
    type: 'chain',
    cap: '兩塊都要有。只寫 I working（少了 am）或 I am work（少了 -ing）都是錯的——這是 A2 階段最常見的兩個錯。',
    links: [
      { t: 'I / You / He', role: 'subj', c: '主詞' },
      { t: 'am / are / is', role: 'verb', c: 'be 動詞（跟著主詞變）' },
      { t: 'working', role: 'obj', c: '動詞 + -ing' }
    ],
    eg: { en: 'I am working right now.', cn: '我現在正在工作。' },
    variants: [
      { k: 'I → am', en: 'I am reading a book.', cn: '我在看書。' },
      { k: 'he / she / it → is', en: 'She is cooking dinner.', cn: '她在煮晚餐。' },
      { k: 'you / we / they → are', en: 'They are playing outside.', cn: '他們在外面玩。' },
      { k: '否定：be + not', en: 'He is not sleeping.', cn: '他沒有在睡覺。' },
      { k: '疑問：be 移到前面', en: 'Are you listening?', cn: '你在聽嗎？' }
    ]
  },
  scenarios: [
    { key: 'now', icon: 'clock',
      title: 'Right now', titleCn: '現在正在做',
      ask: '這一秒正在發生嗎？',
      en: 'Look! The bus is coming.',
      cn: '看！公車來了。',
      why: '常一起出現的字：now、right now、at the moment、Look!、Listen!。看到這些字，用現在進行式。' },
    { key: 'be', icon: 'link',
      title: "Don't drop the be", titleCn: 'be 動詞不能少',
      ask: '句子裡有 am / is / are 嗎？',
      en: 'I am eating lunch.',
      cn: '我在吃午餐。',
      why: '中文說「我在吃飯」沒有 be 動詞，所以很容易寫成 I eating lunch（✗）。記住：進行式一定是兩塊，be 是必需品。' },
    { key: 'ing', icon: 'book',
      title: '-ing spelling', titleCn: '-ing 的拼法',
      ask: '這個動詞怎麼結尾？',
      en: 'She is running and he is writing.',
      cn: '她在跑步，他在寫東西。',
      why: '一般直接加 -ing；e 結尾去 e（write → writing）；短母音 + 單子音要雙寫（run → running、sit → sitting）；ie 結尾改 y（lie → lying）。' },
    { key: 'vs', icon: 'balance',
      title: 'vs Present Simple', titleCn: '跟現在簡單式比一比',
      ask: '這是現在，還是每天？',
      en: 'I usually walk, but today I am taking the bus.',
      cn: '我通常走路，但今天我搭公車。',
      why: '簡單式講「每天、通常」，進行式講「現在、今天」。同一句話裡兩個時態一起出現，就是最清楚的對照。' }
  ],
  steps: [
    { label: '情境', text: '有人打電話來，你想說「我正在開車」。' },
    { label: '主詞是 I', text: 'I 配的 be 動詞是 am。' },
    { label: '動詞加 -ing', text: 'drive → driving（e 結尾要去掉 e）。' },
    { label: '組出來', text: 'I am driving.' },
    { label: '改成否定', text: 'be 後面加 not：I am not driving.（口語常說 I’m not driving.）' }
  ],
  comparison: {
    title: '每天 vs 現在',
    left: {
      tag: 'PRESENT SIMPLE', tagCn: '現在簡單式', icon: 'cycle',
      head: 'every day', headCn: '每天、平常',
      en: 'I walk to school.',
      cn: '我走路上學。',
      pts: ['動詞直接用（第三人稱加 s）', '沒有 be 動詞', '常配 every day / usually']
    },
    right: {
      tag: 'PRESENT CONTINUOUS', tagCn: '現在進行式', icon: 'clock',
      head: 'right now', headCn: '現在這一刻',
      en: 'I am walking to school.',
      cn: '我正在走去學校。',
      pts: ['be 動詞 + V-ing，兩塊都要', '✗ I walking、✗ I am walk', '常配 now / today / Look!']
    },
    note: '先問「這是每天的事，還是現在的事」，再決定要不要用 be + -ing。'
  },
  quizMore: [
    { q: 'Listen! Someone ____ the piano.', opts: ['plays', 'is playing', 'play', 'playing'], ans: 1,
      expl: 'Listen! 表示此刻 → is playing。' },
    { q: 'Which sentence is correct?', opts: ['I am work now.', 'I working now.', 'I am working now.', 'I is working now.'], ans: 2,
      expl: 'be 動詞（am）＋ V-ing（working），兩塊都要，而且 I 配 am。' }
  ]
},

/* ---- 2026-08-19 A2 現在簡單式（基礎） ---- */
dg20260819a2: {
  vis: true,
  oneLine: '現在簡單式就是動詞原形，只有一個地方要小心：主詞是 he / she / it 的時候，動詞要加 s。',
  map: {
    when: '講平常都這樣的事：習慣、事實',
    why: '這是最基本的時態，先把「第三人稱加 s」練成反射動作',
    form: '主詞 + 動詞原形　|　he / she / it + 動詞 + s'
  },
  visual: {
    type: 'chain',
    cap: '整個時態只有一個開關：看主詞是不是「他／她／它」。是就加 s，不是就用原形。',
    links: [
      { t: 'He / She / It', role: 'subj', c: '第三人稱單數' },
      { t: 'work + s', role: 'verb', c: '動詞要加 s' },
      { t: 'every day', role: 'plain', c: '常配時間詞' }
    ],
    eg: { en: 'He works every day.', cn: '他每天工作。' },
    variants: [
      { k: 'I / you / we / they → 原形', en: 'They work every day.', cn: '他們每天工作。' },
      { k: 'ch / sh / s / x / o 結尾 → es', en: 'She watches TV. / He goes to work.', cn: '她看電視。／他去上班。' },
      { k: '子音 + y → 去 y 加 ies', en: 'He studies English.', cn: '他學英文。' },
      { k: '否定：doesn’t + 原形', en: "She doesn't work on Sunday.", cn: '她星期天不工作。' },
      { k: '疑問：Does + 主詞 + 原形', en: 'Does he work here?', cn: '他在這裡工作嗎？' }
    ]
  },
  scenarios: [
    { key: 'habit', icon: 'cycle',
      title: 'Habits', titleCn: '習慣：平常都這樣',
      ask: '這件事會一直重複嗎？',
      en: 'I drink coffee every morning.',
      cn: '我每天早上喝咖啡。',
      why: '常一起出現的時間詞：every day / every morning / usually / always / sometimes / on Mondays。看到這些字就用現在簡單式。' },
    { key: 'fact', icon: 'flag',
      title: 'Facts', titleCn: '事實：一直都成立',
      ask: '這件事永遠是真的嗎？',
      en: 'Taipei is in the north of Taiwan.',
      cn: '台北在台灣北部。',
      why: '講事實、講你是誰、住哪裡、做什麼工作，都用現在簡單式。這些事不會因為時間改變。' },
    { key: 's', icon: 'star',
      title: 'The -s', titleCn: '第三人稱單數加 s',
      ask: '主詞可以換成 he / she / it 嗎？',
      en: 'My sister works in a bank.',
      cn: '我姊姊在銀行工作。',
      why: 'My sister ＝ she，所以 work 要加 s。判斷法：主詞是一個人或一個東西（不是我、不是你、不是複數）就加 s。' },
    { key: 'do', icon: 'cross',
      title: 'do / does', titleCn: '否定與疑問要用 do / does',
      ask: '主詞是 he / she / it 嗎？',
      en: "He doesn't like fish.",
      cn: '他不喜歡魚。',
      why: 'does 已經帶了那個 s，所以後面的動詞要變回原形。He doesn’t likes（✗）就是把 s 加了兩次——這是 A2 最常見的錯。' }
  ],
  steps: [
    { label: '情境', text: '你想說「我哥哥住台中」。' },
    { label: '看主詞', text: 'My brother ＝ he，第三人稱單數。' },
    { label: '動詞加 s', text: 'live → lives。' },
    { label: '組出來', text: 'My brother lives in Taichung.' },
    { label: '改成疑問', text: '用 Does，動詞回原形：Does your brother live in Taichung?' }
  ],
  comparison: {
    title: '加 s 還是不加 s',
    left: {
      tag: 'I / YOU / WE / THEY', tagCn: '用原形', icon: 'person',
      head: 'no -s', headCn: '不加 s',
      en: 'We live in Kaohsiung.',
      cn: '我們住高雄。',
      pts: ['動詞直接用原形', '否定用 don’t', '疑問用 Do']
    },
    right: {
      tag: 'HE / SHE / IT', tagCn: '加 s', icon: 'star',
      head: 'verb + s', headCn: '動詞要加 s',
      en: 'She lives in Kaohsiung.',
      cn: '她住高雄。',
      pts: ['動詞加 s / es / ies', '否定用 doesn’t + 原形', '疑問用 Does + 原形']
    },
    note: '那個 s 只能出現一次：放在動詞上，或放在 does 上，不能兩個都有。'
  },
  quizMore: [
    { q: 'My mother ____ tea every afternoon.', opts: ['drink', 'drinks', 'is drinking', 'drinking'], ans: 1,
      expl: 'My mother ＝ she → drinks。' },
    { q: '____ they live near you?', opts: ['Does', 'Do', 'Is', 'Are'], ans: 1,
      expl: 'they 是複數 → Do。' }
  ]
},

/* ---- 2026-08-21 A2 現在進行式 vs 現在簡單式（現在 vs 每天） ---- */
dg20260821a2: {
  vis: true,
  oneLine: '看時間詞就知道用哪一個：出現 now、today 用進行式；出現 every day、usually 用簡單式。',
  map: {
    when: '同一個動詞，你想講「現在正在做」還是「每天都做」',
    why: '兩個時態長得很像，但講的是完全不同的時間',
    form: '進行式 am / is / are + V-ing　|　簡單式 動詞原形（第三人稱加 s）'
  },
  visual: {
    type: 'cols',
    cap: '不用背規則，先找時間詞。時間詞會告訴你該用哪一個時態。',
    cols: [
      { tag: '每天 → 現在簡單式', tone: 2,
        tagCn: '信號字：every day / usually / always / often / sometimes / on Mondays',
        items: [
          { en: 'I eat rice every day.', cn: '我每天吃飯。', nt: 'every day → 簡單式' },
          { en: 'She usually walks to work.', cn: '她通常走路上班。', nt: 'usually → 簡單式，動詞加 s' },
          { en: 'We often play basketball.', cn: '我們常打籃球。', nt: 'often → 簡單式' }
        ] },
      { tag: '現在 → 現在進行式', tone: 1,
        tagCn: '信號字：now / right now / today / at the moment / Look! / Listen!',
        items: [
          { en: 'I am eating noodles now.', cn: '我現在在吃麵。', nt: 'now → 進行式' },
          { en: 'She is taking the bus today.', cn: '她今天搭公車。', nt: 'today → 進行式' },
          { en: 'Look! They are playing basketball.', cn: '看！他們在打籃球。', nt: 'Look! → 進行式' }
        ] }
    ]
  },
  scenarios: [
    { key: 'signal', icon: 'flag',
      title: 'Find the time word', titleCn: '先找時間詞',
      ask: '句子裡有哪個時間詞？',
      en: 'He plays tennis on Sundays, but he is resting today.',
      cn: '他星期天打網球，但他今天在休息。',
      why: '一句話裡兩個時態並列，時間詞就是分水嶺：on Sundays（每週）配簡單式，today（今天）配進行式。' },
    { key: 'question', icon: 'key',
      title: 'Questions', titleCn: '疑問句長得不一樣',
      ask: '要用 Do 還是 Are？',
      en: 'Do you work here? / Are you working now?',
      cn: '你在這裡工作嗎？／你現在在工作嗎？',
      why: '簡單式的疑問句要借 do / does；進行式的疑問句只要把 be 動詞移到前面。這是兩個時態最好認的差別。' },
    { key: 'negative', icon: 'cross',
      title: 'Negatives', titleCn: '否定句也不一樣',
      ask: '要用 don’t 還是 am not？',
      en: "I don't work on Sunday. / I am not working now.",
      cn: '我星期天不工作。／我現在沒在工作。',
      why: '簡單式用 don’t / doesn’t + 原形；進行式在 be 後面加 not。不要混成 I don’t working（✗）。' },
    { key: 'both', icon: 'balance',
      title: 'Same verb, two meanings', titleCn: '同一個動詞兩種意思',
      ask: '你想講常態還是此刻？',
      en: 'She teaches English. / She is teaching now.',
      cn: '她是英文老師。／她現在正在上課。',
      why: '第一句在講她的職業（常態），第二句在講她這一刻在做的事。同一個 teach，時態一換意思就變了。' }
  ],
  steps: [
    { label: '情境', text: '有人問你在做什麼，你想說「我平常看電視，但今天在看書」。' },
    { label: '前半段', text: '「平常」→ 簡單式：I usually watch TV.' },
    { label: '後半段', text: '「今天」→ 進行式：but today I am reading a book.' },
    { label: '組出來', text: 'I usually watch TV, but today I am reading a book.' },
    { label: '檢查', text: '進行式那半段有沒有 be 動詞（am）和 -ing（reading）？兩塊都要在。' }
  ],
  comparison: {
    title: '兩個時態的四種句型',
    left: {
      tag: 'PRESENT SIMPLE', tagCn: '現在簡單式', icon: 'cycle',
      head: 'every day', headCn: '每天、平常',
      en: 'Does she work here? — She works here.',
      cn: '她在這裡工作嗎？——她在這裡工作。',
      pts: ['肯定：動詞（+s）', '否定：don’t / doesn’t + 原形', '疑問：Do / Does + 主詞 + 原形']
    },
    right: {
      tag: 'PRESENT CONTINUOUS', tagCn: '現在進行式', icon: 'clock',
      head: 'right now', headCn: '現在這一刻',
      en: 'Is she working? — She is working.',
      cn: '她在工作嗎？——她正在工作。',
      pts: ['肯定：be + V-ing', '否定：be + not + V-ing', '疑問：be 移到主詞前面']
    },
    note: '記一個口訣：簡單式借 do，進行式搬 be。'
  },
  quizMore: [
    { q: 'My father ____ the newspaper every morning.', opts: ['is reading', 'reads', 'read', 'reading'], ans: 1,
      expl: 'every morning → 現在簡單式，第三人稱加 s。' },
    { q: '____ you watching TV right now?', opts: ['Do', 'Does', 'Are', 'Is'], ans: 2,
      expl: '進行式的疑問句把 be 移到前面；主詞 you → Are。' }
  ]
},

/* ---- 2026-08-24 A2 like、want、know——不加 -ing 的動詞 ---- */
dg20260824a2: {
  vis: true,
  oneLine: '有一群動詞講的是「感覺」和「想法」，不是動作——它們沒有進行式，只能用現在簡單式。',
  map: {
    when: '要講喜歡、想要、知道、相信這類心裡的事',
    why: '感覺和想法沒辦法「暫停再繼續」，所以不能用進行式',
    form: '狀態動詞用現在簡單式（第三人稱加 s），不用 am / is / are + V-ing'
  },
  visual: {
    type: 'cols',
    cap: '判斷方法：這個動作能不能「暫停一下再繼續」？能就是動作動詞（可加 -ing），不能就是狀態動詞（不加 -ing）。',
    cols: [
      { tag: '狀態動詞：不加 -ing', tone: 2,
        tagCn: '感覺、想法：like / want / know / believe / understand / need / prefer',
        items: [
          { en: 'He likes coffee.', cn: '他喜歡咖啡。', nt: '✗ He is liking coffee.' },
          { en: 'I want a new phone.', cn: '我想要一支新手機。', nt: '✗ I am wanting…' },
          { en: 'She knows the answer.', cn: '她知道答案。', nt: '✗ She is knowing…' }
        ] },
      { tag: '動作動詞：可加 -ing', tone: 1,
        tagCn: '看得見的動作：make / eat / run / read / write / play',
        items: [
          { en: 'He is making eggs now.', cn: '他現在在煎蛋。', nt: '正在做 → 進行式' },
          { en: 'She is eating lunch.', cn: '她在吃午餐。', nt: '可以暫停再繼續' },
          { en: 'They are running in the park.', cn: '他們在公園跑步。', nt: '看得見的動作' }
        ] }
    ]
  },
  scenarios: [
    { key: 'feel', icon: 'person',
      title: 'Feelings', titleCn: '感覺：like / love / hate / want',
      ask: '這是心裡的感覺嗎？',
      en: 'I love this song.',
      cn: '我很喜歡這首歌。',
      why: '喜歡就是一直喜歡，不會「正在喜歡」。所以用簡單式 I love，不是 I am loving。（廣告裡的 I’m loving it 是故意打破規則，不要當標準用法學。）' },
    { key: 'think', icon: 'eye',
      title: 'Thoughts', titleCn: '想法：know / understand / believe / remember',
      ask: '這是腦袋裡的狀態嗎？',
      en: 'I understand now.',
      cn: '我現在懂了。',
      why: '「懂」是一個狀態，不是一個進行中的動作。I am understanding（✗）不通。要講「我正在想」才用 I am thinking（那是動作）。' },
    { key: 'own', icon: 'money',
      title: 'Possession', titleCn: '擁有：have / own / belong',
      ask: '這是「擁有」嗎？',
      en: 'She has two cats.',
      cn: '她有兩隻貓。',
      why: '擁有不能暫停，所以 have 表「有」時不加 -ing。但 have 當「吃、經歷」時是動作，可以說 I am having lunch。' },
    { key: 'thirds', icon: 'star',
      title: "Don't forget the -s", titleCn: '第三人稱還是要加 s',
      ask: '主詞是 he / she / it 嗎？',
      en: 'He wants to go home.',
      cn: '他想回家。',
      why: '不用進行式，就要照現在簡單式的規則走——主詞是他／她／它，動詞要加 s：likes、wants、knows、needs。' }
  ],
  steps: [
    { label: '情境', text: '你想說「他喜歡咖啡」。' },
    { label: '先判斷', text: 'like 是感覺，不是動作——能不能暫停？不能。所以是狀態動詞。' },
    { label: '結論', text: '不用進行式，用現在簡單式。' },
    { label: '看主詞', text: 'He 是第三人稱單數 → like 要加 s。' },
    { label: '組出來', text: 'He likes coffee.　✗ He is liking coffee.' }
  ],
  comparison: {
    title: '狀態 vs 動作',
    left: {
      tag: 'STATIVE', tagCn: '狀態動詞', icon: 'person',
      head: 'cannot pause', headCn: '沒辦法暫停',
      en: 'He likes coffee.',
      cn: '他喜歡咖啡。',
      pts: ['感覺、想法、擁有', '只用現在簡單式', '✗ 不加 -ing']
    },
    right: {
      tag: 'DYNAMIC', tagCn: '動作動詞', icon: 'tool',
      head: 'can pause', headCn: '可以暫停再繼續',
      en: 'He is making eggs now.',
      cn: '他現在在煎蛋。',
      pts: ['看得見的動作', '正在做的時候用進行式', '可以加 -ing']
    },
    note: '一句話記住：能暫停的可以加 -ing，不能暫停的不可以。'
  },
  quizMore: [
    { q: 'I ____ what you mean.', opts: ['am knowing', 'know', 'knows', 'am know'], ans: 1,
      expl: 'know 是狀態動詞，用現在簡單式；主詞 I 不加 s。' },
    { q: 'Which sentence is correct?', opts: ['She is wanting a new bag.', 'She wants a new bag.', 'She want a new bag.', 'She is want a new bag.'], ans: 1,
      expl: 'want 不加 -ing；She 是第三人稱單數 → wants。' }
  ]
},

/* ---- 2026-08-26 A2 過去簡單式（我做了） ---- */
dg20260826a2: {
  vis: true,
  oneLine: '過去簡單式講已經結束的事：規則動詞加 -ed，不規則動詞要背，否定和疑問一律交給 did。',
  map: {
    when: '事情發生在過去、已經做完了',
    why: '時間已經過去，跟現在沒有關係了',
    form: '規則 V-ed　|　不規則過去式　|　否定疑問 did / didn’t + 原形'
  },
  visual: {
    type: 'shift',
    cap: '左邊是原形，右邊是過去式。上半是規則變化（加 -ed），下半是必背的不規則動詞——它們剛好是日常最常用的字。',
    rows: [
      { a: 'clean / wash / watch', b: 'cleaned / washed / watched', nt: '規則：直接加 -ed' },
      { a: 'like / live', b: 'liked / lived', nt: 'e 結尾只加 -d' },
      { a: 'study / try', b: 'studied / tried', nt: '子音 + y → 去 y 加 ied' },
      { a: 'stop / plan', b: 'stopped / planned', nt: '短母音 + 單子音要雙寫' },
      { a: 'go / buy / make', b: 'went / bought / made', nt: '不規則：一定要背' },
      { a: 'eat / see / take / have', b: 'ate / saw / took / had', nt: '不規則：最常用的幾個' }
    ]
  },
  scenarios: [
    { key: 'finished', icon: 'check',
      title: 'Finished actions', titleCn: '已經做完的事',
      ask: '這件事結束了嗎？',
      en: 'I cleaned my room yesterday.',
      cn: '我昨天打掃了房間。',
      why: '常一起出現的時間詞：yesterday / last night / last week / two days ago / in 2020。看到這些字就用過去簡單式。' },
    { key: 'irregular', icon: 'book',
      title: 'Irregular verbs', titleCn: '不規則動詞只能背',
      ask: '這個字常用嗎？',
      en: 'We went to the night market and bought some food.',
      cn: '我們去了夜市，買了一些吃的。',
      why: '越常用的動詞越不規則。先背這幾個：go → went、have → had、do → did、eat → ate、see → saw、take → took、buy → bought、come → came、get → got、make → made。' },
    { key: 'did', icon: 'cross',
      title: "did / didn't", titleCn: '否定與疑問用 did',
      ask: '這是否定句或疑問句嗎？',
      en: "Did you eat breakfast? — No, I didn't eat.",
      cn: '你吃早餐了嗎？——沒有，我沒吃。',
      why: 'did 已經表示過去，所以後面的動詞回到原形。Did you ate（✗）、I didn’t went（✗）都是把過去標記了兩次。' },
    { key: 'be', icon: 'person',
      title: 'was / were', titleCn: 'be 動詞不用 did',
      ask: '句子裡的動詞是 be 嗎？',
      en: 'I was tired. We were late.',
      cn: '我很累。我們遲到了。',
      why: 'be 動詞自己就有過去式：I / he / she / it 用 was，you / we / they 用 were。否定直接加 not（wasn’t / weren’t），不用 did。' }
  ],
  steps: [
    { label: '情境', text: '你想說「我昨天沒看那部電影」。' },
    { label: '看時間', text: 'yesterday → 過去簡單式。' },
    { label: '這是否定句', text: '否定要用 didn’t。' },
    { label: '動詞回原形', text: 'didn’t 後面用 watch，不是 watched。' },
    { label: '組出來', text: "I didn't watch that film yesterday." }
  ],
  comparison: {
    title: '肯定用過去式，否定疑問用 did + 原形',
    left: {
      tag: 'POSITIVE', tagCn: '肯定句', icon: 'check',
      head: 'past form', headCn: '動詞用過去式',
      en: 'She bought a new bike.',
      cn: '她買了一台新腳踏車。',
      pts: ['直接用過去式 bought', '沒有助動詞', '規則動詞加 -ed']
    },
    right: {
      tag: 'NEGATIVE / QUESTION', tagCn: '否定與疑問', icon: 'cross',
      head: 'did + base verb', headCn: 'did 帶走過去式',
      en: "She didn't buy a bike. / Did she buy a bike?",
      cn: '她沒買腳踏車。／她買腳踏車了嗎？',
      pts: ['did / didn’t 已經表示過去', '後面的動詞回原形 buy', '✗ didn’t bought、✗ Did she bought']
    },
    note: '過去式的標記只能出現一次：放在動詞上，或放在 did 上。'
  },
  quizMore: [
    { q: 'They ____ to Tainan last weekend.', opts: ['go', 'went', 'goes', 'gone'], ans: 1,
      expl: 'last weekend → 過去式；go 的過去式是 went。' },
    { q: "I ____ my keys this morning.", opts: ["didn't found", "didn't find", "don't find", 'not found'], ans: 1,
      expl: 'didn’t + 原形 find。' }
  ]
},

/* ---- 2026-08-28 A2 過去進行式（我當時正在做） ---- */
dg20260828a2: {
  vis: true,
  oneLine: '過去進行式是「當時正在做」：把 am / is / are 換成 was / were，後面照樣接 V-ing。',
  map: {
    when: '講過去某個時間點「正在做」的事，還沒做完',
    why: '過去簡單式講「做完了」，過去進行式講「當時正在中間」',
    form: 'was / were + V-ing'
  },
  visual: {
    type: 'chain',
    cap: '結構跟現在進行式一模一樣，只是 be 動詞換成過去式。was 配單數，were 配複數和 you。',
    links: [
      { t: 'I / He / She', role: 'subj', c: '單數主詞' },
      { t: 'was', role: 'verb', c: 'be 動詞的過去式' },
      { t: 'sleeping', role: 'obj', c: '動詞 + -ing' }
    ],
    eg: { en: 'I was sleeping at ten last night.', cn: '昨晚十點我在睡覺。' },
    variants: [
      { k: 'I / he / she / it → was', en: 'She was cooking at six.', cn: '她六點在煮飯。' },
      { k: 'you / we / they → were', en: 'They were watching TV.', cn: '他們在看電視。' },
      { k: '否定：wasn’t / weren’t', en: "I wasn't listening.", cn: '我當時沒在聽。' },
      { k: '疑問：was / were 移到前面', en: 'What were you doing?', cn: '你當時在做什麼？' },
      { k: '常配 when：突發事件用過去式', en: 'I was reading when he called.', cn: '他打來的時候我在看書。' }
    ]
  },
  scenarios: [
    { key: 'atatime', icon: 'clock',
      title: 'At a past moment', titleCn: '過去某個時間點正在做',
      ask: '那個時間點你在做什麼？',
      en: 'At eight last night I was doing my homework.',
      cn: '昨晚八點我在寫作業。',
      why: '常配的時間詞：at eight last night / at that time / then。這些字把時間釘在過去的某一點，問「那一刻你在做什麼」。' },
    { key: 'interrupt', icon: 'flag',
      title: 'Interrupted', titleCn: '做的時候被打斷',
      ask: '中間發生了什麼？',
      en: 'I was taking a shower when the phone rang.',
      cn: '我洗澡的時候電話響了。',
      why: '長的那件事（洗澡）用過去進行式，短的那件事（電話響）用過去簡單式。這個搭配非常常見，幾乎是固定的。' },
    { key: 'notfinished', icon: 'cycle',
      title: 'Not finished', titleCn: '沒說做完了沒',
      ask: '這件事做完了嗎？',
      en: 'I was reading a book last night.',
      cn: '我昨晚在看一本書。',
      why: '過去進行式不說做完沒。I read a book last night 表示看完了；I was reading a book last night 只說當時在看，看完沒不知道。' },
    { key: 'wasWere', icon: 'person',
      title: 'was or were', titleCn: 'was 還是 were',
      ask: '主詞是單數還是複數？',
      en: 'He was working, but we were resting.',
      cn: '他在工作，但我們在休息。',
      why: 'I / he / she / it 用 was；you / we / they 用 were。這裡最常見的錯是 We was（✗）——複數一定要用 were。' }
  ],
  steps: [
    { label: '情境', text: '朋友問你昨天下午三點在做什麼。' },
    { label: '看時間', text: '「昨天下午三點」是過去的一個時間點 → 用過去進行式。' },
    { label: '選 be 動詞', text: '主詞 I → was。' },
    { label: '動詞加 -ing', text: 'work → working。' },
    { label: '組出來', text: 'I was working at three yesterday afternoon.' }
  ],
  comparison: {
    title: '做完了 vs 當時正在做',
    left: {
      tag: 'PAST SIMPLE', tagCn: '過去簡單式', icon: 'check',
      head: 'finished', headCn: '做完了',
      en: 'I watched a film last night.',
      cn: '我昨晚看了一部電影。',
      pts: ['電影看完了', '報告一件做完的事', '動詞用過去式']
    },
    right: {
      tag: 'PAST CONTINUOUS', tagCn: '過去進行式', icon: 'clock',
      head: 'in the middle', headCn: '當時正在中間',
      en: 'I was watching a film last night.',
      cn: '我昨晚在看電影。',
      pts: ['沒說看完沒', '描述當時的畫面', 'was / were + V-ing']
    },
    note: '想講「當時正在做」就用 was / were + V-ing；想講「做完了」就用過去式。'
  },
  quizMore: [
    { q: 'We ____ dinner when the lights went out.', opts: ['had', 'were having', 'have', 'are having'], ans: 1,
      expl: '長的那件事（吃晚餐）用過去進行式 were having。' },
    { q: 'What ____ you doing at nine last night?', opts: ['was', 'were', 'did', 'do'], ans: 1,
      expl: '主詞 you → were。' }
  ]
},

/* ---- 2026-09-02 A2 現在完成式基礎：have/has + 過去分詞 ---- */
dg20260902a2: {
  vis: true,
  oneLine: '現在完成式是 have / has ＋ 過去分詞，講「已經做完了」——重點不是什麼時候做的，是現在做完了。',
  map: {
    when: '要說「已經做完」，而且不打算講是什麼時候做的',
    why: '重點在「現在的結果」，不在過去那個時間點',
    form: 'I / you / we / they + have + Vpp　|　he / she / it + has + Vpp'
  },
  visual: {
    type: 'chain',
    cap: '三塊：主詞 → have 或 has → 過去分詞。過去分詞不是過去式，eat 的過去分詞是 eaten（不是 ate）。',
    links: [
      { t: 'She', role: 'subj', c: '主詞' },
      { t: 'has', role: 'verb', c: 'he / she / it 用 has' },
      { t: 'finished', role: 'obj', c: '過去分詞（Vpp）' }
    ],
    eg: { en: 'She has finished her homework.', cn: '她已經寫完作業了。' },
    variants: [
      { k: 'I / you / we / they → have', en: 'I have eaten lunch.', cn: '我吃過午餐了。' },
      { k: 'he / she / it → has', en: 'He has gone home.', cn: '他已經回家了。' },
      { k: '否定：haven’t / hasn’t', en: "I haven't finished yet.", cn: '我還沒做完。' },
      { k: '疑問：Have / Has 移到前面', en: 'Have you eaten?', cn: '你吃過了嗎？' },
      { k: '過去分詞不是過去式', en: 'I have eaten. （✗ I have ate.）', cn: 'eat → ate → eaten' }
    ]
  },
  scenarios: [
    { key: 'done', icon: 'check',
      title: 'Already done', titleCn: '已經做完了',
      ask: '這件事做完了嗎？',
      en: 'I have already sent the email.',
      cn: '我已經把信寄出去了。',
      why: 'already 放在 have 和過去分詞中間。重點是「信現在已經在對方手上」，不是「我幾點寄的」。' },
    { key: 'notyet', icon: 'cross',
      title: 'Not yet', titleCn: '還沒做',
      ask: '該做的還沒做嗎？',
      en: "I haven't washed the dishes yet.",
      cn: '我還沒洗碗。',
      why: 'yet 只用在否定句和疑問句，而且放在句尾：haven’t… yet / Have you… yet?' },
    { key: 'ever', icon: 'plane',
      title: 'Ever / never', titleCn: '這輩子有沒有做過',
      ask: '你有這個經驗嗎？',
      en: 'Have you ever been to Japan? — I have never been.',
      cn: '你去過日本嗎？——我從來沒去過。',
      why: 'ever 用在疑問句，never 用在肯定句（本身就是否定，不再加 not）。兩個都放在 have 和過去分詞中間。' },
    { key: 'vpp', icon: 'book',
      title: 'Past participle', titleCn: '過去分詞要另外背',
      ask: '這個動詞的第三態是什麼？',
      en: 'I have seen that film. / I have gone there.',
      cn: '我看過那部電影。／我去過那裡。',
      why: '常用字的三態：eat-ate-eaten、see-saw-seen、go-went-gone、do-did-done、take-took-taken、write-wrote-written。規則動詞的過去分詞跟過去式一樣（cleaned）。' }
  ],
  steps: [
    { label: '情境', text: '媽媽問你吃飯了沒。' },
    { label: '想講的意思', text: '「我已經吃過了」——重點是現在吃飽了，不是幾點吃的。' },
    { label: '選 have / has', text: '主詞 I → have。' },
    { label: '找過去分詞', text: 'eat → ate → eaten，要用 eaten。' },
    { label: '組出來', text: 'I have eaten.　✗ I have ate.' }
  ],
  comparison: {
    title: 'have 還是 has',
    left: {
      tag: 'HAVE', tagCn: 'I / you / we / they', icon: 'person',
      head: 'have + Vpp', headCn: '用 have',
      en: 'They have arrived.',
      cn: '他們已經到了。',
      pts: ['I / you / we / they', '否定 haven’t', '疑問 Have you…?']
    },
    right: {
      tag: 'HAS', tagCn: 'he / she / it', icon: 'star',
      head: 'has + Vpp', headCn: '用 has',
      en: 'She has arrived.',
      cn: '她已經到了。',
      pts: ['he / she / it（一個人、一個東西）', '否定 hasn’t', '疑問 Has she…?']
    },
    note: '選 have 還是 has 只看主詞；後面的過去分詞永遠不變。'
  },
  quizMore: [
    { q: 'She ____ her keys, so she can\'t get in.', opts: ['have lost', 'has lost', 'has lose', 'is losing'], ans: 1,
      expl: 'She → has；lose 的過去分詞是 lost。' },
    { q: 'Which sentence is correct?', opts: ['I have ate lunch.', 'I have eaten lunch.', 'I has eaten lunch.', 'I have eating lunch.'], ans: 1,
      expl: 'I → have，過去分詞是 eaten。' }
  ]
},

/* ============================================================
   每日文法 · B1（7 個）
   ============================================================ */

/* ---- 2026-08-14 B1 現在進行式 vs 現在簡單式 ---- */
dg20260814b1: {
  vis: true,
  oneLine: '進行式講「現在這段時間」的事，簡單式講「一直都這樣」的事——同一個動詞換時態，聽的人接收到的訊息就不一樣。',
  map: {
    when: '要在「常態」和「這一陣子」之間做選擇',
    why: '英文用時態標記「這件事會不會變」，這是中文沒有的訊息',
    form: '簡單式 V / V-s　|　進行式 am / is / are + V-ing'
  },
  visual: {
    type: 'cols',
    cap: '同一個動詞放在兩個時態裡，意思會不一樣。看右邊那欄就知道：進行式一定帶著「暫時、會變」的味道。',
    cols: [
      { tag: 'I DO：一直都這樣', tone: 2,
        tagCn: '常態、習慣、事實——不會因為時間改變',
        items: [
          { en: 'I work in a bank.', cn: '我在銀行工作。', nt: '這是我的職業' },
          { en: 'She teaches maths.', cn: '她教數學。', nt: '她的工作內容' },
          { en: 'He lives with his parents.', cn: '他跟父母住。', nt: '長期的居住狀況' }
        ] },
      { tag: 'I AM DOING：現在這段時間', tone: 1,
        tagCn: '此刻、暫時、正在改變——之後可能就不一樣了',
        items: [
          { en: 'I am working from home this week.', cn: '我這禮拜在家工作。', nt: '只有這禮拜' },
          { en: 'She is teaching a new class this term.', cn: '她這學期教一個新班。', nt: '這學期而已' },
          { en: 'He is living with his parents for now.', cn: '他目前暫時跟父母住。', nt: '暗示之後會搬走' }
        ] }
    ]
  },
  scenarios: [
    { key: 'job', icon: 'money',
      title: 'Job vs task', titleCn: '職業 vs 手上的工作',
      ask: '你在講職業，還是現在手上的事？',
      en: 'I am an editor, but this month I am writing instead.',
      cn: '我是編輯，但這個月我改成在寫稿。',
      why: '講職業用簡單式（那不會變），講「這個月手上的事」用進行式（會變）。職場對話裡這兩個經常在同一句出現。' },
    { key: 'trend', icon: 'arrow',
      title: 'Changing trend', titleCn: '正在改變的趨勢',
      ask: '這件事還在變嗎？',
      en: 'Prices are rising faster than last year.',
      cn: '物價漲得比去年快。',
      why: '講「正在變化」的趨勢一定用進行式：is getting / are rising / are increasing。用簡單式 Prices rise 會變成在講「物價會漲」這個普遍規律。' },
    { key: 'stative', icon: 'cross',
      title: 'Stative verbs', titleCn: '狀態動詞沒有進行式',
      ask: '這個動作能暫停嗎？',
      en: 'I need help right now.',
      cn: '我現在需要幫忙。',
      why: 'need、want、know、believe、understand、prefer、own、belong 講的是狀態，即使是「現在」也用簡單式。I am needing help（✗）不通。' },
    { key: 'have', icon: 'balance',
      title: 'have has two faces', titleCn: 'have 的兩張臉',
      ask: '這裡的 have 是「擁有」還是「做某件事」？',
      en: 'She has a car, and she is having lunch now.',
      cn: '她有一台車，而她現在在吃午餐。',
      why: 'have 表「擁有」不加 -ing；但 have lunch / have a shower / have a meeting 這種「做某件事」是動作，可以用進行式。' }
  ],
  steps: [
    { label: '情境', text: '同事問你最近在忙什麼。' },
    { label: '先問', text: '你要講長期的職務，還是最近手上的專案？' },
    { label: '長期', text: 'I manage the sales team.（我管業務團隊——這是我的職務。）' },
    { label: '最近', text: 'I am managing a new project this quarter.（我這一季在帶一個新專案。）' },
    { label: '關鍵', text: '選進行式就等於告訴對方「這是暫時的」。這個訊息是時態自己帶的，不用另外解釋。' }
  ],
  comparison: {
    title: '同一個動詞，兩種訊息',
    left: {
      tag: 'SIMPLE', tagCn: '簡單式', icon: 'flag',
      head: 'stable', headCn: '穩定、不會變',
      en: 'He works in Taipei.',
      cn: '他在台北工作。',
      pts: ['講的是長期狀況', '沒有「暫時」的暗示', '常配 always / usually / every…']
    },
    right: {
      tag: 'CONTINUOUS', tagCn: '進行式', icon: 'calendar',
      head: 'temporary', headCn: '暫時、會變',
      en: 'He is working in Taipei this year.',
      cn: '他今年在台北工作。',
      pts: ['講的是這一段時間', '暗示之後會不一樣', '常配 now / this week / these days']
    },
    note: '要決定用哪一個，只要問自己：「這件事下個月還會一樣嗎？」會 → 簡單式；可能不會 → 進行式。'
  },
  quizMore: [
    { q: 'My sister ____ in London, but she ____ in Taipei at the moment.', opts: ['is living / lives', 'lives / is staying', 'live / stays', 'is living / is staying'], ans: 1,
      expl: '長住倫敦是常態 → lives；現在暫時在台北 → is staying。' },
    { q: 'Which sentence is WRONG?', opts: ['I am having a meeting now.', 'I am having a car.', 'I have a car.', 'I am having lunch.'], ans: 1,
      expl: 'have 表「擁有」不能用進行式。' }
  ]
},

/* ---- 2026-08-19 B1 現在簡單式 vs 現在進行式（習慣 vs 現在） ---- */
dg20260819b1: {
  vis: true,
  oneLine: '簡單式管「平常」，進行式管「現在」。搞清楚這兩欄，剩下的就是把頻率副詞放對位置。',
  map: {
    when: '要講平常的習慣，或此刻／這陣子的狀況',
    why: '同一件事用不同時態，對方接收到的時間範圍完全不同',
    form: '簡單式 V / V-s　|　進行式 am / is / are + V-ing'
  },
  visual: {
    type: 'matrix',
    cap: '橫向讀是同一個時態的三個特徵，縱向讀是兩個時態的對比。記「時間詞」那一欄最有效——它會直接告訴你要用哪一個。',
    cols: ['用途', '常配的時間詞', '例句'],
    rows: [
      { h: '現在簡單式', cells: [
        { en: 'habits & facts', cn: '習慣、事實、時刻表' },
        { en: 'usually / always / every day', cn: '每天、通常、總是' },
        { en: 'She takes the MRT to work.', cn: '她搭捷運上班。' } ] },
      { h: '現在進行式', cells: [
        { en: 'now & temporary', cn: '此刻、暫時、正在改變', hi: 1 },
        { en: 'now / today / this week', cn: '現在、今天、這禮拜', hi: 1 },
        { en: 'She is taking a taxi this week.', cn: '她這禮拜改搭計程車。', hi: 1 } ] }
    ]
  },
  scenarios: [
    { key: 'habit', icon: 'cycle',
      title: 'Habit', titleCn: '習慣：平常都這樣',
      ask: '這件事重複發生嗎？',
      en: 'I usually cook at home.',
      cn: '我通常在家煮飯。',
      why: 'usually / always / often / sometimes / rarely 一出現，幾乎都是現在簡單式，因為它們在講「頻率」，不是在講「現在」。' },
    { key: 'now', icon: 'clock',
      title: 'Now', titleCn: '現在：這一刻',
      ask: '這一秒正在發生嗎？',
      en: 'I am cooking dinner right now.',
      cn: '我現在正在煮晚餐。',
      why: 'now / right now / at the moment / Look! / Listen! 是進行式的信號。它們把時間釘在說話這一刻。' },
    { key: 'change', icon: 'arrow',
      title: 'Same verb, new meaning', titleCn: '同一個動詞，意思隨時態改變',
      ask: '你在講他是什麼樣的人，還是他現在在做什麼？',
      en: 'She is kind. / She is being kind today.',
      cn: '她很善良。／她今天特別客氣。',
      why: 'is kind 講個性（一直如此），is being kind 講「今天的行為表現」（暫時，常帶一點「怪怪的」語氣）。' },
    { key: 'adverb', icon: 'pin',
      title: 'Where to put the adverb', titleCn: '頻率副詞放哪裡',
      ask: '句子裡有 be 動詞嗎？',
      en: 'She is always late. / She always arrives late.',
      cn: '她總是遲到。',
      why: 'be 動詞之後、一般動詞之前。She always is late（✗）位置錯了。另外 hardly ever / rarely / seldom 本身就是否定，不要再加 not。' }
  ],
  steps: [
    { label: '情境', text: '朋友問你為什麼今天走路來。' },
    { label: '講常態', text: 'I usually take the bus.（我通常搭公車。）' },
    { label: '講今天', text: 'but I am walking today.（但我今天走路。）' },
    { label: '組出來', text: 'I usually take the bus, but I am walking today.' },
    { label: '檢查副詞', text: 'usually 在一般動詞 take 前面——位置對了。' }
  ],
  comparison: {
    title: '平常 vs 現在',
    left: {
      tag: 'USUALLY', tagCn: '平常', icon: 'cycle',
      head: 'present simple', headCn: '現在簡單式',
      en: 'He walks to work.',
      cn: '他走路上班。',
      pts: ['講頻率、習慣、事實', '第三人稱動詞加 s', '否定疑問借 do / does']
    },
    right: {
      tag: 'TODAY', tagCn: '現在', icon: 'clock',
      head: 'present continuous', headCn: '現在進行式',
      en: 'He is walking to work today.',
      cn: '他今天走路上班。',
      pts: ['講此刻、暫時、變化中', 'be + V-ing', '否定疑問直接動 be']
    },
    note: '不用背，先找時間詞：every / usually → 簡單式；now / today / this week → 進行式。'
  },
  quizMore: [
    { q: 'She ____ hardly ever late.', opts: ['is', "isn't", 'does', 'is not'], ans: 0,
      expl: 'hardly ever 本身已含否定，不再加 not；頻率副詞放在 be 動詞後面。' },
    { q: 'Water ____ at 100°C, but the water in the pot ____ now.', opts: ['is boiling / boils', 'boils / is boiling', 'boil / boils', 'boils / boils'], ans: 1,
      expl: '科學事實 → boils；此刻正在滾 → is boiling。' }
  ]
},

/* ---- 2026-08-21 B1 狀態動詞與暫時的情況 ---- */
dg20260821b1: {
  vis: true,
  oneLine: '除了「習慣 vs 現在」，還有一條軸：永久的狀態用簡單式，暫時的情況用進行式；而狀態動詞連暫時都不能用進行式。',
  map: {
    when: '要區分「這是長期的」還是「只有這一陣子」',
    why: '進行式自帶「暫時、會變」的語氣；狀態動詞沒有這個開關',
    form: '永久 → 簡單式　|　暫時 → 進行式　|　狀態動詞 → 一律簡單式'
  },
  visual: {
    type: 'scale',
    cap: '從左到右是「這件事會持續多久」。越靠左越暫時、越適合進行式；越靠右越永久、只能用簡單式。狀態動詞永遠在最右邊。',
    lo: '只有現在這一刻',
    hi: '永遠都是這樣',
    stops: [
      { at: 8, label: 'right now', labelCn: '此刻正在做 → 進行式',
        en: 'She is talking on the phone.', cn: '她正在講電話。' },
      { at: 35, label: 'these days', labelCn: '這一陣子 → 進行式',
        en: 'She is working night shifts this month.', cn: '她這個月上夜班。' },
      { at: 70, label: 'permanent situation', labelCn: '長期狀況 → 簡單式',
        en: 'She works for a bank.', cn: '她在銀行工作。' },
      { at: 96, label: 'stative verbs', labelCn: '狀態動詞 → 只能簡單式',
        en: 'She knows the manager well.', cn: '她跟經理很熟。' }
    ]
  },
  scenarios: [
    { key: 'permanent', icon: 'house',
      title: 'Permanent', titleCn: '永久：長期的狀況',
      ask: '這件事會持續下去嗎？',
      en: 'They live in Hsinchu.',
      cn: '他們住新竹。',
      why: '講長期的居住、工作、身分，用簡單式。這是他們的「基本設定」，沒有暫時的意思。' },
    { key: 'temporary', icon: 'calendar',
      title: 'Temporary', titleCn: '暫時：只有這一陣子',
      ask: '這件事之後會變嗎？',
      en: 'They are living with relatives while their house is being repaired.',
      cn: '他們房子在整修，暫時住親戚家。',
      why: '進行式一出現，對方就知道「這是臨時安排」。你不用再加 temporarily 這個字，時態已經說了。' },
    { key: 'stative', icon: 'cross',
      title: 'Stative verbs', titleCn: '狀態動詞：連暫時都不行',
      ask: '這是感覺、想法還是擁有？',
      en: 'I believe you.',
      cn: '我相信你。',
      why: 'believe、know、understand、want、need、prefer、own、belong、seem、cost 這些動詞沒有進行式，就算你想強調「現在」也不行。' },
    { key: 'exception', icon: 'balance',
      title: 'have is special', titleCn: 'have 是例外',
      ask: '這個 have 是「擁有」還是「做某件事」？',
      en: 'He has three brothers, and he is having a hard time.',
      cn: '他有三個兄弟，而他最近過得很辛苦。',
      why: 'have 表「擁有」不能用進行式；但 have a hard time / have lunch / have a shower / have a meeting 是動作，可以用進行式。' }
  ],
  steps: [
    { label: '情境', text: '你想說「我暫時在做客服，但我的正職是工程師」。' },
    { label: '正職', text: '長期的身分 → 簡單式：I am an engineer.' },
    { label: '暫時的工作', text: '只有這一陣子 → 進行式：but I am doing customer support at the moment.' },
    { label: '組出來', text: 'I am an engineer, but I am doing customer support at the moment.' },
    { label: '注意', text: '如果句子裡的動詞是 know、want 這類狀態動詞，就算意思是「暫時」也不能加 -ing。' }
  ],
  comparison: {
    title: '永久 vs 暫時',
    left: {
      tag: 'PERMANENT', tagCn: '永久', icon: 'house',
      head: 'the normal state', headCn: '基本設定',
      en: 'She works in Taichung.',
      cn: '她在台中工作。',
      pts: ['簡單式', '沒有「之後會變」的暗示', '職業、住處、身分']
    },
    right: {
      tag: 'TEMPORARY', tagCn: '暫時', icon: 'calendar',
      head: 'just for now', headCn: '只有這一陣子',
      en: 'She is working in Taichung for six months.',
      cn: '她在台中工作六個月。',
      pts: ['進行式', '暗示「之後會回去／會變」', '常配 for now / this month / at the moment']
    },
    note: '狀態動詞不吃這條規則——不管永久還是暫時，know / want / need 都只能用簡單式。'
  },
  quizMore: [
    { q: 'I ____ this jacket belongs to you.', opts: ['am thinking', 'think', 'thinks', 'am think'], ans: 1,
      expl: 'think 表「認為」是狀態動詞 → 用簡單式。（think about 表「思考」才可以用進行式。）' },
    { q: 'They ____ in a hotel until their flat is ready.', opts: ['stay', 'are staying', 'stays', 'have stayed'], ans: 1,
      expl: '暫時住飯店 → 進行式 are staying。' }
  ]
},

/* ---- 2026-08-24 B1 一字兩用：have、think、see ---- */
dg20260824b1: {
  vis: true,
  oneLine: 'have、think、see 有兩張臉：講「狀態」不加 -ing，講「動作」可以加。判斷方法是問自己「這能不能暫停」。',
  map: {
    when: '同一個動詞可能是狀態也可能是動作，你要決定加不加 -ing',
    why: '加 -ing 就等於宣告「這是一個可以暫停的動作」',
    form: '狀態 → 簡單式　|　動作 → 進行式（am / is / are + V-ing）'
  },
  visual: {
    type: 'cols',
    cap: '同一個字放在左右兩欄，意思完全不同。左邊是「心裡的狀態」，右邊是「身體在做的事」。',
    cols: [
      { tag: '狀態：不加 -ing', tone: 2,
        tagCn: '心裡的感覺、想法、擁有',
        items: [
          { en: 'I have two sisters.', cn: '我有兩個姊妹。', nt: 'have ＝ 擁有' },
          { en: 'I think it is a good idea.', cn: '我覺得這是個好主意。', nt: 'think ＝ 認為' },
          { en: 'I see what you mean.', cn: '我懂你的意思。', nt: 'see ＝ 理解' }
        ] },
      { tag: '動作：可加 -ing', tone: 1,
        tagCn: '正在做的事，可以暫停再繼續',
        items: [
          { en: 'I am having lunch.', cn: '我在吃午餐。', nt: 'have ＝ 吃／經歷' },
          { en: 'I am thinking about the offer.', cn: '我在考慮那個提議。', nt: 'think about ＝ 思考' },
          { en: 'I am seeing the doctor at three.', cn: '我三點要看醫生。', nt: 'see ＝ 會面／約診' }
        ] }
    ]
  },
  scenarios: [
    { key: 'have', icon: 'money',
      title: 'have', titleCn: 'have：擁有 vs 做某件事',
      ask: '這是「有」還是「做」？',
      en: 'She has a car. / She is having a shower.',
      cn: '她有一台車。／她在洗澡。',
      why: '常見的 have 動作片語：have lunch / breakfast、have a shower、have a break、have a meeting、have a good time、have a hard time。這些都可以用進行式。' },
    { key: 'think', icon: 'eye',
      title: 'think', titleCn: 'think：認為 vs 思考',
      ask: '你在表達意見，還是在腦中處理事情？',
      en: 'I think you are right. / I am thinking about it.',
      cn: '我覺得你說得對。／我在考慮這件事。',
      why: '表達意見（＝認為）用簡單式；正在腦中權衡（＝思考）用進行式，而且通常後面接 about / of。' },
    { key: 'see', icon: 'person',
      title: 'see', titleCn: 'see：看見／理解 vs 會面',
      ask: '這是「看得到」還是「見面」？',
      en: 'I see the bus. / I am seeing a client this afternoon.',
      cn: '我看到公車了。／我下午要見一個客戶。',
      why: 'see 表「看見、理解」是狀態；表「會面、約診、交往」是動作，可以用進行式，也常用來講已敲定的未來安排。' },
    { key: 'test', icon: 'balance',
      title: 'The pause test', titleCn: '判斷法：能不能暫停',
      ask: '你能中途停下來再繼續嗎？',
      en: 'I am having a meeting. / I have a headache.',
      cn: '我在開會。／我頭痛。',
      why: '開會可以中途休息再繼續 → 動作；頭痛不能暫停 → 狀態。這個「能不能暫停」的問題可以解決絕大多數的判斷。' }
  ],
  steps: [
    { label: '情境', text: '你想說「我在考慮換工作」。' },
    { label: '判斷', text: '這裡的 think 是「腦中在權衡」——可以暫停再繼續，所以是動作。' },
    { label: '選時態', text: '動作 + 正在做 → 進行式。' },
    { label: '組出來', text: 'I am thinking about changing jobs.' },
    { label: '對照', text: '如果你只是表達意見（我覺得換工作比較好），那是狀態：I think changing jobs is better.' }
  ],
  comparison: {
    title: '同一個 have，兩種用法',
    left: {
      tag: 'STATE', tagCn: '狀態', icon: 'money',
      head: 'have = own', headCn: 'have ＝ 擁有',
      en: 'I have a car.',
      cn: '我有一台車。',
      pts: ['不能暫停', '只用簡單式', '✗ I am having a car.']
    },
    right: {
      tag: 'ACTION', tagCn: '動作', icon: 'tool',
      head: 'have = do / eat', headCn: 'have ＝ 吃、做、經歷',
      en: 'I am having lunch.',
      cn: '我在吃午餐。',
      pts: ['可以暫停再繼續', '可以用進行式', 'have lunch / a shower / a meeting']
    },
    note: '不要背哪些動詞可以加 -ing，改成問「這件事能不能按暫停」。答案就是時態。'
  },
  quizMore: [
    { q: "Can I call you back? I ____ dinner right now.", opts: ['have', 'am having', 'has', 'am have'], ans: 1,
      expl: 'have dinner 是動作，此刻正在做 → am having。' },
    { q: 'I ____ what you mean, but I still disagree.', opts: ['am seeing', 'see', 'sees', 'am see'], ans: 1,
      expl: 'see 表「理解」是狀態 → 用簡單式。' }
  ]
},

/* ---- 2026-08-26 B1 過去簡單式 vs 現在完成式 ---- */
dg20260826b1: {
  vis: true,
  oneLine: '有說明確時間就用過去簡單式，沒說時間、重點在「到現在」就用現在完成式。',
  map: {
    when: '同一件過去的事，你要決定是「報告那時候」還是「強調現在」',
    why: '時間關起來了就跟現在切斷；還連著現在就要用完成式',
    form: '過去簡單式 did　|　現在完成式 have / has + Vpp'
  },
  visual: {
    type: 'timeline',
    cap: '看線有沒有碰到 NOW：現在完成式一定碰到，過去簡單式一定不碰。這是兩個時態唯一的分界。',
    rows: [
      { kind: 'span', label: '現在完成式：連到現在', tone: 'accent',
        from: 'last month', to: 'NOW',
        sub: 'I have learned a lot from this job.',
        subCn: '我從這份工作學到很多（影響延續到現在）。' },
      { kind: 'point', label: '過去簡單式：已結束', tone: 'ink',
        at: 'last month',
        sub: 'I paid the deposit last month.',
        subCn: '我上個月付了訂金（那件事結束了）。' },
      { kind: 'range', label: '完成式：時間還沒過完', tone: 'accent',
        from: 'this week', to: 'NOW',
        sub: 'I have had three meetings this week.',
        subCn: '我這禮拜開了三場會（這禮拜還沒結束，數字可能再增加）。' }
    ]
  },
  scenarios: [
    { key: 'time', icon: 'clock',
      title: 'Time stated', titleCn: '有說明確時間 → 過去簡單式',
      ask: '句子裡有講「什麼時候」嗎？',
      en: 'I visited Da Nang in 2023.',
      cn: '我 2023 年去了峴港。',
      why: 'in 2023、yesterday、last week、two days ago、when I was a child 都是「關起來的時間」，只能配過去簡單式。' },
    { key: 'notime', icon: 'plane',
      title: 'No time stated', titleCn: '沒說時間 → 現在完成式',
      ask: '你在講經驗，不是在講哪一次嗎？',
      en: 'I have been to Da Nang twice.',
      cn: '我去過峴港兩次。',
      why: '重點是「有這個經驗」，不是哪一年去的。一旦你補上 in 2023，就必須換成過去簡單式。' },
    { key: 'result', icon: 'key',
      title: 'Result now', titleCn: '現在的結果 → 現在完成式',
      ask: '現在的狀況是什麼？',
      en: 'I have lost my wallet.',
      cn: '我把錢包弄丟了。',
      why: '弄丟是過去的動作，但你說這句話是因為「現在沒錢付」。如果只是報告昨天發生的事，就說 I lost my wallet yesterday。' },
    { key: 'unfinished', icon: 'calendar',
      title: 'Unfinished time', titleCn: '時間還沒過完 → 現在完成式',
      ask: '這段時間結束了嗎？',
      en: 'I have read two books this month.',
      cn: '我這個月讀了兩本書。',
      why: 'this month / this week / today 都還沒過完，數字還可能增加。等這個月結束再回頭講，就變成 I read three books last month。' }
  ],
  steps: [
    { label: '情境', text: '你想說「我去過越南」。' },
    { label: '先問', text: '你要講「有這個經驗」，還是「哪一年去的」？' },
    { label: '講經驗', text: '沒有明確時間 → 現在完成式：I have been to Vietnam.' },
    { label: '講哪一次', text: '補上時間 → 過去簡單式：I went to Vietnam in 2023.' },
    { label: '不能混用', text: '✗ I have been to Vietnam in 2023.——有明確時間就不能用完成式。' }
  ],
  comparison: {
    title: '關鍵只有一個問題：時間關起來了沒',
    left: {
      tag: 'PAST SIMPLE', tagCn: '過去簡單式', icon: 'clock',
      head: 'closed time', headCn: '時間關起來了',
      en: 'I saw him yesterday.',
      cn: '我昨天看到他。',
      pts: ['有明確的過去時間點', '跟現在沒有關係', '關鍵字：yesterday / last week / ago / in 2020']
    },
    right: {
      tag: 'PRESENT PERFECT', tagCn: '現在完成式', icon: 'link',
      head: 'open to now', headCn: '還連著現在',
      en: 'I have seen him twice this week.',
      cn: '我這禮拜見過他兩次。',
      pts: ['沒說時間，或時間還沒過完', '重點在現在的經驗或結果', '關鍵字：ever / never / already / yet / just / so far']
    },
    note: '判斷順序：先找時間詞 → 有明確過去時間就用 did，沒有或時間還沒結束就用 have done。'
  },
  quizMore: [
    { q: 'I ____ my homework, so I can watch TV now.', opts: ['finished', 'have finished', 'was finishing', 'finish'], ans: 1,
      expl: '重點是「現在可以看電視」的結果 → 現在完成式。' },
    { q: 'She ____ to Japan last spring.', opts: ['has been', 'has gone', 'went', 'goes'], ans: 2,
      expl: 'last spring 是明確的過去時間 → 過去簡單式 went。' }
  ]
},

/* ---- 2026-08-28 B1 過去進行式 vs 過去簡單式 ---- */
dg20260828b1: {
  vis: true,
  oneLine: '過去進行式是「比較長的背景」，過去簡單式是「突然發生、打斷背景的短動作」——while 接長的，when 接短的。',
  map: {
    when: '要講過去某件事發生時，另一件事正在進行',
    why: '把「背景」和「突發」分層，故事才有畫面',
    form: 'while + was / were + V-ing　|　when + 過去簡單式'
  },
  visual: {
    type: 'merge',
    cap: '兩句合起來才是完整的故事。長的那件事配過去進行式，短的那件事配過去簡單式——這個分工幾乎不會變。',
    a: { n: '長的（背景）', en: 'I was riding my scooter.', cn: '我當時在騎機車。' },
    b: { n: '短的（突發）', en: 'It started to rain.', cn: '突然下起雨。' },
    glue: 'when',
    glueCn: 'when 接短的那件事。換成 while 就要放在長的那句前面：While I was riding my scooter, it started to rain.',
    out: { n: '合併後', parts: [
      { t: 'I was riding my scooter', role: 'verb' },
      { t: 'when', role: 'glue' },
      { t: 'it started to rain.', role: 'plain' } ],
      cn: '我騎機車的時候突然下起雨。' }
  },
  scenarios: [
    { key: 'while', icon: 'eye',
      title: 'while + 進行式', titleCn: 'while 接長的那件事',
      ask: '哪一件事比較長？',
      en: 'While I was cooking, the doorbell rang.',
      cn: '我在煮飯的時候，門鈴響了。',
      why: 'while 後面放正在進行的那一段。這是最好記的一條：while 幾乎永遠配 was / were + V-ing。' },
    { key: 'when', icon: 'flag',
      title: 'when + 簡單式', titleCn: 'when 接短的那件事',
      ask: '哪一件事是瞬間發生的？',
      en: 'I was cooking when the doorbell rang.',
      cn: '我在煮飯的時候門鈴響了。',
      why: 'when 後面放那個「一下就結束」的動作。跟上面那句意思一樣，只是換了排列方式。' },
    { key: 'both', icon: 'link',
      title: 'Two long actions', titleCn: '兩件長的同時進行',
      ask: '兩件事都是「一段」嗎？',
      en: 'While he was studying, I was doing the laundry.',
      cn: '他在唸書的時候，我在洗衣服。',
      why: '兩邊都長就兩邊都用過去進行式，中間用 while。這種句子在描述同一段時間裡的兩條平行線。' },
    { key: 'confuse', icon: 'cross',
      title: 'Common mistake', titleCn: '常見混淆點',
      ask: '你把長短搞反了嗎？',
      en: 'I was walking home when I saw an accident.',
      cn: '我走回家的時候看到一場車禍。',
      why: '寫成 I walked home when I was seeing an accident（✗）就完全反了。先問「哪一件是背景、哪一件是突發」，再分配時態。' }
  ],
  steps: [
    { label: '情境', text: '你想說「我在洗碗的時候，杯子破了」。' },
    { label: '找長的', text: '洗碗是一段 → 過去進行式：I was washing the dishes.' },
    { label: '找短的', text: '杯子破了是一瞬間 → 過去簡單式：a glass broke.' },
    { label: '選連接詞', text: '要把短的接在後面 → 用 when。' },
    { label: '組出來', text: 'I was washing the dishes when a glass broke.' }
  ],
  comparison: {
    title: '背景 vs 突發',
    left: {
      tag: 'PAST CONTINUOUS', tagCn: '過去進行式', icon: 'eye',
      head: 'the background', headCn: '比較長的背景',
      en: 'I was watching TV.',
      cn: '我當時在看電視。',
      pts: ['was / were + V-ing', '沒說做完沒', '常配 while / at that time']
    },
    right: {
      tag: 'PAST SIMPLE', tagCn: '過去簡單式', icon: 'flag',
      head: 'the interruption', headCn: '突然發生的短動作',
      en: 'The power went out.',
      cn: '停電了。',
      pts: ['動詞用過去式', '一瞬間、已結束', '常配 when / suddenly']
    },
    note: '一句口訣：長的配 -ing，短的配過去式；while 接長的，when 接短的。'
  },
  quizMore: [
    { q: 'While she ____ the bus, she ____ an old friend.', opts: ['waited / was meeting', 'was waiting / met', 'waited / met', 'was waiting / was meeting'], ans: 1,
      expl: 'while 接長的（was waiting）；遇到朋友是一瞬間（met）。' },
    { q: 'I ____ my email when the computer ____ down.', opts: ['checked / was shutting', 'was checking / shut', 'checked / shut', 'was checking / was shutting'], ans: 1,
      expl: '查信是背景（was checking），電腦關機是突發（shut）。' }
  ]
},

/* ---- 2026-09-02 B1 現在完成式 vs 過去簡單式：有沒有說明確時間 ---- */
dg20260902b1: {
  vis: true,
  oneLine: '判斷方法只有一個：句子裡有沒有明確的過去時間？有就用 did，沒有就用 have done。',
  map: {
    when: '要講做過的事，但不確定該用哪一個時態',
    why: '明確的過去時間會把那件事跟現在切斷，完成式就用不上了',
    form: '現在完成式 have / has + Vpp　|　過去簡單式 did'
  },
  visual: {
    type: 'timeline',
    cap: '信號字就是分水嶺：ever / never / already / yet / just 配完成式；yesterday / last week / in 2020 配過去簡單式。',
    rows: [
      { kind: 'span', label: '完成式：沒說時間', tone: 'accent',
        from: '某個時候', to: 'NOW',
        sub: 'I have never tried Vietnamese coffee.',
        subCn: '我從來沒喝過越南咖啡（講經驗，沒說時間）。' },
      { kind: 'point', label: '過去簡單式：有說時間', tone: 'ink',
        at: 'last week',
        sub: 'I tried Vietnamese coffee last week.',
        subCn: '我上禮拜喝了越南咖啡（時間關起來了）。' },
      { kind: 'range', label: '完成式：時間還沒過完', tone: 'accent',
        from: 'today', to: 'NOW',
        sub: "I haven't found my keys yet.",
        subCn: '我還沒找到鑰匙（今天還沒過完，還有機會找到）。' }
    ]
  },
  scenarios: [
    { key: 'ever', icon: 'plane',
      title: 'ever / never', titleCn: 'ever / never：這輩子的經驗',
      ask: '你在問「有沒有過」嗎？',
      en: 'Have you ever eaten pho?',
      cn: '你吃過河粉嗎？',
      why: 'ever 用在疑問句，never 用在肯定句，兩個都放在 have 和過去分詞中間。Did you ever eat pho? 語法沒錯，但意思會變成在問某個特定的過去時期。' },
    { key: 'already', icon: 'check',
      title: 'already / just', titleCn: 'already / just：已經、剛剛',
      ask: '已經做了嗎？剛做完嗎？',
      en: 'I have already eaten. / I have just finished.',
      cn: '我已經吃過了。／我剛做完。',
      why: '兩個都放在 have 和過去分詞「中間」。I have eaten already lunch（✗）位置錯了——already 不能插在動詞和受詞之間。' },
    { key: 'yet', icon: 'cross',
      title: 'yet', titleCn: 'yet：還沒（只用在否定與疑問）',
      ask: '該做的還沒做嗎？',
      en: "I haven't sent it yet. / Have you sent it yet?",
      cn: '我還沒寄。／你寄了嗎？',
      why: 'yet 固定放句尾，而且只出現在否定句和疑問句。它帶著一個預期：這件事應該要做，只是還沒。' },
    { key: 'signal', icon: 'clock',
      title: 'Past time words', titleCn: '過去時間詞 → 一律過去簡單式',
      ask: '句子裡有 yesterday / last / ago / in 2020 嗎？',
      en: 'I went to Da Nang in 2023.',
      cn: '我 2023 年去了峴港。',
      why: '這些字一出現，就不能用現在完成式。I have gone to Da Nang in 2023（✗）是最常見的錯誤組合。' }
  ],
  steps: [
    { label: '情境', text: '你想說「我還沒吃午餐」。' },
    { label: '先找時間詞', text: '沒有明確的過去時間，而且今天還沒過完 → 現在完成式。' },
    { label: '這是否定句', text: '用 haven’t。' },
    { label: '加 yet', text: 'yet 放句尾。' },
    { label: '組出來', text: "I haven't eaten lunch yet." }
  ],
  comparison: {
    title: '兩個時態的信號字',
    left: {
      tag: 'HAVE DONE', tagCn: '現在完成式', icon: 'link',
      head: 'no time given', headCn: '沒說明確時間',
      en: 'I have already eaten lunch.',
      cn: '我已經吃過午餐了。',
      pts: ['ever / never / already / yet / just / so far', '重點在現在的經驗或結果', 'this week / today（還沒過完）']
    },
    right: {
      tag: 'DID', tagCn: '過去簡單式', icon: 'clock',
      head: 'time given', headCn: '有明確的過去時間',
      en: 'I ate lunch at twelve.',
      cn: '我十二點吃了午餐。',
      pts: ['yesterday / last week / ago / in 2020', '事情已結束，跟現在無關', 'at twelve / this morning（已過去）']
    },
    note: '中文的「我做過」不分這兩種，所以要靠英文的時間詞判斷，不能靠中文語感。'
  },
  quizMore: [
    { q: 'I ____ my keys yet. Can you help me look?', opts: ["didn't find", "haven't found", "don't find", "hasn't found"], ans: 1,
      expl: 'yet 配現在完成式，而且主詞 I → haven’t found。' },
    { q: 'She ____ her homework already.', opts: ['finished', 'has finished', 'have finished', 'is finishing'], ans: 1,
      expl: 'already 配現在完成式；She → has finished。' }
  ]
},

/* ============================================================
   每日文法 · B1+（8 個）
   ============================================================ */

/* ---- 2026-08-13 B1+ 現在完成進行式 ---- */
dg20260813: {
  vis: true,
  oneLine: '現在完成進行式問的不是「做完了沒」，而是「做了多久」——所以 How long 的問題幾乎都用它回答。',
  map: {
    when: '動作從過去持續到現在，還在做，或剛剛才停、結果還看得見',
    why: '完成式在乎結果，完成進行式在乎過程和時間長度',
    form: 'have / has been + V-ing'
  },
  visual: {
    type: 'timeline',
    cap: '三條線都碰到 NOW，差別在你要強調哪一段：完成進行式強調整條線的長度，完成式只強調線的終點。',
    rows: [
      { kind: 'span', label: '完成進行式：還在做', tone: 'accent',
        from: 'three years ago', to: 'NOW',
        sub: 'I have been studying English for three years.',
        subCn: '我學英文三年了（現在還在學）。' },
      { kind: 'span', label: '完成進行式：剛剛才停', tone: 'accent',
        from: 'earlier today', to: 'NOW',
        sub: 'Your eyes are red — have you been crying?',
        subCn: '你眼睛紅紅的，你剛剛在哭嗎？（動作停了，結果還看得見）' },
      { kind: 'point', label: '對照：完成式只看結果', tone: 'ink',
        at: '某個時候',
        sub: 'I have read this book.',
        subCn: '我讀完這本書了（重點是讀完，不是讀多久）。' }
    ]
  },
  scenarios: [
    { key: 'howlong', icon: 'clock',
      title: 'How long', titleCn: '持續多久，而且還在做',
      ask: '你想強調「多久」嗎？',
      en: 'She has been working here since 2020.',
      cn: '她從 2020 年就在這裡工作。',
      why: 'How long have you been…? 是這個時態最典型的問句。回答時 for + 一段長度、since + 起點，兩個都很常配。' },
    { key: 'justStopped', icon: 'eye',
      title: 'Just stopped', titleCn: '剛剛才停，結果還看得見',
      ask: '現在還看得到痕跡嗎？',
      en: 'I am tired — I have been running.',
      cn: '我很累，我剛剛在跑步。',
      why: '動作已經停了，但「累」這個結果還在。這是完成進行式很好用的地方：解釋眼前的狀況是怎麼來的。' },
    { key: 'emotion', icon: 'star',
      title: 'With feeling', titleCn: '帶情緒的「一直」',
      ask: '你想表達不耐或抱歉嗎？',
      en: 'I have been trying to call you all morning.',
      cn: '我整個早上一直在打你電話。',
      why: '配上 all morning / all day / for hours，語氣就帶著不耐、抱歉或驕傲。這是時態自己帶的情緒色彩。' },
    { key: 'stative', icon: 'cross',
      title: 'Stative verbs', titleCn: '狀態動詞沒有這個時態',
      ask: '這個動詞能不能加 -ing？',
      en: 'I have known her for years.',
      cn: '我認識她很多年了。',
      why: 'know、believe、understand、own、belong 沒有進行式，所以只能用完成式 have known。✗ have been knowing。live / work / study 兩種都可以，意思差不多。' }
  ],
  steps: [
    { label: '情境', text: '同事問你這份報告寫多久了。' },
    { label: '先問重點', text: '你要講「寫完了沒」還是「寫了多久」？——是後者。' },
    { label: '選時態', text: '強調時間長度 → 完成進行式 have been + V-ing。' },
    { label: '加時間', text: '「三個小時」是長度 → for three hours。' },
    { label: '組出來', text: 'I have been writing it for three hours.' }
  ],
  comparison: {
    title: '過程 vs 結果',
    left: {
      tag: 'HAVE BEEN DOING', tagCn: '完成進行式', icon: 'cycle',
      head: 'the process', headCn: '持續的過程、多久',
      en: 'I have been reading this book.',
      cn: '我一直在讀這本書。',
      pts: ['還在讀，讀了一段時間', '常配 for / since / all day / How long', '沒說讀完沒']
    },
    right: {
      tag: 'HAVE DONE', tagCn: '完成式', icon: 'check',
      head: 'the result', headCn: '完成的結果、幾次',
      en: 'I have read this book.',
      cn: '我讀完這本書了。',
      pts: ['已經讀完了', '常配 already / yet / just / three times', '常配 How many']
    },
    note: 'How long → have been doing；How many / How much → have done。問句就決定了時態。'
  },
  quizMore: [
    { q: 'How long ____ you ____ for this company?', opts: ['have / worked', 'have / been working', 'did / work', 'are / working'], ans: 1,
      expl: 'How long 問持續時間 → 完成進行式 have been working。' },
    { q: 'Which sentence is WRONG?', opts: ['I have been waiting for an hour.', 'I have been knowing her for years.', 'I have known her for years.', 'She has been living here since May.'], ans: 1,
      expl: 'know 是狀態動詞，沒有進行式。' }
  ]
},

/* ---- 2026-08-14 B1+ 現在進行式的進階用法 ---- */
dg20260814: {
  vis: true,
  oneLine: '進行式不只是「此刻正在做」：它還能講這一陣子的暫時狀態、已敲定的未來安排，配上 always 甚至變成抱怨。',
  map: {
    when: '要講暫時的狀況、已經約好的未來計畫，或帶情緒地抱怨某人的重複行為',
    why: '這三個用法的共同核心都是「暫時、未完成、有溫度」',
    form: 'am / is / are + V-ing'
  },
  visual: {
    type: 'cols',
    cap: '三個用法看起來很不一樣，但共同點都是「暫時」——不是永久的設定，所以不能用簡單式。',
    cols: [
      { tag: '① 暫時狀態', tone: 1,
        tagCn: '不是此刻，而是「這一陣子」',
        items: [
          { en: 'I am living with my parents at the moment.', cn: '我目前暫時跟父母住。', nt: '暗示之後會搬走' },
          { en: 'She is working night shifts this month.', cn: '她這個月上夜班。', nt: '只有這個月' },
          { en: 'Prices are rising quickly.', cn: '物價漲得很快。', nt: '正在改變的趨勢' }
        ] },
      { tag: '② 已敲定的未來', tone: 2,
        tagCn: '已經約好、已經安排好的計畫',
        items: [
          { en: 'I am meeting the client at three.', cn: '我三點要見客戶。', nt: '已經約好了' },
          { en: 'We are flying to Osaka on Friday.', cn: '我們星期五飛大阪。', nt: '票已經買了' },
          { en: 'What are you doing this weekend?', cn: '你這週末要做什麼？', nt: '問對方的既定安排' }
        ] },
      { tag: '③ always + 進行式', tone: 3,
        tagCn: '帶情緒的抱怨或驚訝',
        items: [
          { en: 'He is always losing his keys.', cn: '他老是在弄丟鑰匙。', nt: '帶著不耐' },
          { en: 'She is constantly complaining.', cn: '她一直在抱怨。', nt: 'constantly 也一樣' },
          { en: 'He always loses his keys.', cn: '他總是弄丟鑰匙。', nt: '這句只是陳述事實，沒有情緒' }
        ] }
    ]
  },
  scenarios: [
    { key: 'temp', icon: 'calendar',
      title: 'Temporary', titleCn: '這一陣子，不是這一秒',
      ask: '這是暫時的安排嗎？',
      en: 'I am taking the train this month because my car is being repaired.',
      cn: '我這個月搭火車，因為我的車在修。',
      why: '中文母語者最容易漏掉這個用法：以為進行式只能講「正在」。其實它更常用來講「這一段時間暫時如此」。' },
    { key: 'future', icon: 'calendar',
      title: 'Fixed future plans', titleCn: '已敲定的未來計畫',
      ask: '這件事已經約好了嗎？',
      en: 'I am seeing the dentist tomorrow.',
      cn: '我明天要看牙醫。',
      why: '已經約好、已經訂位、已經買票的事，用進行式比 will 自然。will 講的是「當下決定」，進行式講的是「早就安排好」。' },
    { key: 'complain', icon: 'flag',
      title: 'always + -ing', titleCn: 'always + 進行式：抱怨',
      ask: '你在陳述事實，還是在抱怨？',
      en: 'You are always leaving the lights on!',
      cn: '你老是不關燈！',
      why: '同一件事，用簡單式 You always leave the lights on 只是陳述；換成進行式就帶了不耐的情緒。這是英文用時態表達語氣的例子。' },
    { key: 'limit', icon: 'cross',
      title: 'Stative limit', titleCn: '狀態動詞的界線',
      ask: '這個動詞有沒有進行式？',
      en: 'I need it now.',
      cn: '我現在就需要。',
      why: '不管是講暫時、講未來安排還是講抱怨，狀態動詞（need / know / want / believe / own）都不能加 -ing。這條界線沒有例外。' }
  ],
  steps: [
    { label: '情境', text: '朋友問你明天有沒有空。' },
    { label: '你已經約好了', text: '這是既定安排，不是當下決定 → 用進行式，不用 will。' },
    { label: '選字', text: 'meet 是動作動詞，可以加 -ing。' },
    { label: '組出來', text: "Sorry, I am meeting a friend tomorrow." },
    { label: '對照', text: '如果是現在才決定，才用 will：OK, I will meet you tomorrow.' }
  ],
  comparison: {
    title: '同一句話兩種溫度',
    left: {
      tag: 'SIMPLE', tagCn: '簡單式', icon: 'flag',
      head: 'neutral fact', headCn: '中性的陳述',
      en: 'He always forgets my birthday.',
      cn: '他總是忘記我的生日。',
      pts: ['只是說明頻率', '沒有情緒', '講的是一個事實']
    },
    right: {
      tag: 'ALWAYS + -ING', tagCn: 'always + 進行式', icon: 'cross',
      head: 'with irritation', headCn: '帶著不耐或驚訝',
      en: 'He is always forgetting my birthday.',
      cn: '他老是忘記我的生日。',
      pts: ['同樣的頻率，但加了情緒', '常配 always / constantly / forever', '口語很常用']
    },
    note: '這是英文一個很細的地方：時態不只標時間，也標語氣。想抱怨就把 always 配進行式。'
  },
  quizMore: [
    { q: "I can't come — I ____ my sister at the airport at six.", opts: ['meet', 'am meeting', 'will meet', 'have met'], ans: 1,
      expl: '已經約好的安排 → 現在進行式表未來。' },
    { q: 'You ____ your phone at home! That is the third time this week.', opts: ['always leave', 'are always leaving', 'always left', 'have always left'], ans: 1,
      expl: '帶抱怨語氣 → always + 進行式。' }
  ]
},

/* ---- 2026-08-19 B1+ 現在簡單式的進階用法 ---- */
dg20260819b1p: {
  vis: true,
  oneLine: '現在簡單式不只講習慣：它還負責「永遠是真的事實」和「排定好的時刻表」——共同核心是「可靠、固定、不會變」。',
  map: {
    when: '要講普遍事實、科學定律、時刻表，或在 if / when 子句裡講未來',
    why: '簡單式帶的訊息是「這件事是固定的」，所以最適合這些場合',
    form: '動詞原形（第三人稱加 s）'
  },
  visual: {
    type: 'cols',
    cap: '三個用法都在講「固定、不會變」的事。特別注意第二欄與第三欄：講未來，但用的是現在簡單式。',
    cols: [
      { tag: '① 普遍事實／定律', tone: 2,
        tagCn: '永遠成立，不受時間影響',
        items: [
          { en: 'Water freezes at 0°C.', cn: '水在攝氏零度結冰。', nt: '科學定律' },
          { en: 'The sun rises in the east.', cn: '太陽從東邊升起。', nt: '自然規律' },
          { en: 'Metal expands when it is heated.', cn: '金屬受熱會膨脹。', nt: 'when 子句也用簡單式' }
        ] },
      { tag: '② 排定好的時刻表', tone: 1,
        tagCn: '講未來，但用現在簡單式',
        items: [
          { en: 'The train leaves at 7:15 tomorrow.', cn: '火車明天七點十五分開。', nt: '時刻表：不是我能決定的' },
          { en: 'The shop opens at nine on Sundays.', cn: '這家店星期天九點開門。', nt: '固定營業時間' },
          { en: 'The film starts at eight.', cn: '電影八點開始。', nt: '節目表' }
        ] },
      { tag: '③ if / when 子句', tone: 3,
        tagCn: '條件句裡不放 will',
        items: [
          { en: 'If it rains, we will stay in.', cn: '如果下雨，我們就待在家。', nt: '✗ If it will rain' },
          { en: 'I will call you when I arrive.', cn: '我到了就打給你。', nt: '✗ when I will arrive' },
          { en: 'As soon as she finishes, we will start.', cn: '她一做完我們就開始。', nt: 'as soon as 也一樣' }
        ] }
    ]
  },
  scenarios: [
    { key: 'fact', icon: 'balance',
      title: 'Universal truths', titleCn: '普遍事實',
      ask: '這件事永遠成立嗎？',
      en: 'Oil floats on water.',
      cn: '油浮在水上。',
      why: '科學定律、自然規律、數學關係都用簡單式，因為它們不會因為時間改變。學術寫作大量使用這個用法。' },
    { key: 'timetable', icon: 'calendar',
      title: 'Timetables', titleCn: '時刻表：用現在式講未來',
      ask: '這是排定好的、不是我能決定的嗎？',
      en: 'Our flight takes off at 6:40 tomorrow morning.',
      cn: '我們的班機明天早上六點四十起飛。',
      why: '關鍵是「不是我能決定的」——班表、營業時間、課表、節目表。如果是「我自己的安排」，要用現在進行式（I am flying to Osaka on Friday）。' },
    { key: 'ifwhen', icon: 'fork',
      title: 'if / when clauses', titleCn: 'if / when 子句不放 will',
      ask: '這個子句是 if / when / as soon as / until 開頭嗎？',
      en: 'I will let you know as soon as I hear back.',
      cn: '我一有回音就通知你。',
      why: '中文說「如果明天會下雨」很自然，所以很容易寫成 If it will rain（✗）。記住：這些子句裡永遠用現在式，will 只放在主句。' },
    { key: 'adverb', icon: 'pin',
      title: 'Adverb nuance', titleCn: '頻率副詞的細微差別',
      ask: '你想強調頻率有多高？',
      en: 'She rarely complains, but she often makes suggestions.',
      cn: '她很少抱怨，但常提建議。',
      why: '頻率階梯：always > usually > often > sometimes > occasionally > rarely / seldom > hardly ever > never。rarely 之後的都自帶否定，不要再加 not。' }
  ],
  steps: [
    { label: '情境', text: '你想說「我一到就打給你」。' },
    { label: '找子句', text: '「我一到」是 when 子句。' },
    { label: '子句用現在式', text: 'when I arrive（不是 when I will arrive）。' },
    { label: '主句用 will', text: 'I will call you…' },
    { label: '組出來', text: 'I will call you when I arrive.' }
  ],
  comparison: {
    title: '時刻表 vs 我的安排',
    left: {
      tag: 'PRESENT SIMPLE', tagCn: '現在簡單式', icon: 'calendar',
      head: 'timetable', headCn: '排定好的時刻表',
      en: 'The train leaves at seven.',
      cn: '火車七點開。',
      pts: ['不是我能決定的', '班表、營業時間、課表', '講未來卻用現在式']
    },
    right: {
      tag: 'PRESENT CONTINUOUS', tagCn: '現在進行式', icon: 'person',
      head: 'my arrangement', headCn: '我自己約好的安排',
      en: 'I am leaving at seven.',
      cn: '我七點要走。',
      pts: ['我自己安排的', '已經約好、已經訂好', '個人計畫']
    },
    note: '同樣講未來，先問「這是誰決定的」：時刻表（別人／制度決定）→ 簡單式；我的計畫 → 進行式。'
  },
  quizMore: [
    { q: 'I will text you when I ____ home.', opts: ['will get', 'get', 'am getting', 'got'], ans: 1,
      expl: 'when 子句用現在簡單式，will 只放在主句。' },
    { q: 'The museum ____ at 5 p.m. every day.', opts: ['is closing', 'closes', 'will close', 'close'], ans: 1,
      expl: '固定的營業時間 → 現在簡單式。' }
  ]
},

/* ---- 2026-08-21 B1+ 已安排好的計畫 vs 時刻表 ---- */
dg20260821b1p: {
  vis: true,
  oneLine: '兩個時態都能講未來：進行式講「我跟別人約好的」，簡單式講「像時刻表一樣、不是我能決定的」。',
  map: {
    when: '要講未來的事，但不想用 will',
    why: 'will 講的是「當下才決定」；已經安排好的事有自己的說法',
    form: '我的安排 → am / is / are + V-ing　|　時刻表 → 現在簡單式'
  },
  visual: {
    type: 'cols',
    cap: '判斷方法只有一句：這件事是「我安排的」還是「制度排的」？我安排的用進行式，制度排的用簡單式。',
    cols: [
      { tag: '我約好的計畫 → 進行式', tone: 1,
        tagCn: '有對象、有承諾，已經敲定',
        items: [
          { en: 'I am having dinner with Tom on Friday.', cn: '我星期五要跟 Tom 吃晚餐。', nt: '已經跟人約好' },
          { en: 'We are moving house next month.', cn: '我們下個月要搬家。', nt: '已經在安排了' },
          { en: 'She is starting her new job on Monday.', cn: '她星期一開始新工作。', nt: '已經確定' }
        ] },
      { tag: '時刻表 → 現在簡單式', tone: 2,
        tagCn: '不是我能決定的固定行程',
        items: [
          { en: 'The bus arrives at 8:20.', cn: '公車八點二十到。', nt: '班表決定的' },
          { en: 'The meeting starts at ten.', cn: '會議十點開始。', nt: '議程排好的' },
          { en: 'The course finishes in June.', cn: '課程六月結束。', nt: '學制決定的' }
        ] }
    ]
  },
  scenarios: [
    { key: 'plan', icon: 'person',
      title: 'My arrangement', titleCn: '我安排好的事',
      ask: '你跟人約好了嗎？',
      en: 'I am meeting my supervisor at four.',
      cn: '我四點要見我的主管。',
      why: '有具體時間、有對象、已經確定，就用進行式。這比 I will meet 自然得多——will 聽起來像你剛剛才決定。' },
    { key: 'timetable', icon: 'calendar',
      title: 'Fixed schedule', titleCn: '固定行程',
      ask: '這是你能改的嗎？',
      en: 'The last train leaves at 11:45.',
      cn: '末班車十一點四十五開。',
      why: '不是你決定的、寫在班表或議程上的，用現在簡單式。就算講的是明天的事也一樣。' },
    { key: 'notwill', icon: 'cross',
      title: 'Why not will', titleCn: '為什麼不用 will',
      ask: '這是當下才決定的嗎？',
      en: "OK, I will call him now. / I am calling him at three.",
      cn: '好，我現在就打給他。／我三點要打給他。',
      why: 'will 表示「說話這一刻才決定」。已經安排好的事用 will 會讓對方以為你剛想到。這是語感差別，不是語法錯誤。' },
    { key: 'question', icon: 'key',
      title: 'Different questions', titleCn: '疑問句的語氣差別',
      ask: '你在問對方的計畫還是問班表？',
      en: 'What are you doing tonight? / What time does the film start?',
      cn: '你今晚要做什麼？／電影幾點開始？',
      why: '問「你的計畫」用進行式，問「班表」用簡單式。用錯會很奇怪：What do you do tonight? 聽起來像在問你的職業。' }
  ],
  steps: [
    { label: '情境', text: '你想告訴同事「我明天下午三點要見客戶」。' },
    { label: '先問', text: '這是你自己約的，還是排定的班表？——你自己約的。' },
    { label: '選時態', text: '我的安排 → 現在進行式。' },
    { label: '組出來', text: 'I am seeing a client at three tomorrow.' },
    { label: '對照', text: '如果是公司排的例會（不是你能改的），就說 The weekly meeting starts at three.' }
  ],
  comparison: {
    title: '誰決定的',
    left: {
      tag: 'I DECIDED', tagCn: '我決定的', icon: 'person',
      head: 'be + V-ing', headCn: '現在進行式',
      en: 'I am flying to Tokyo on Sunday.',
      cn: '我星期天要飛東京。',
      pts: ['我訂的票、我約的人', '已經敲定', '常配具體時間']
    },
    right: {
      tag: 'THEY DECIDED', tagCn: '別人／制度決定的', icon: 'calendar',
      head: 'present simple', headCn: '現在簡單式',
      en: 'The flight departs at 9:30.',
      cn: '班機九點三十起飛。',
      pts: ['班表、議程、課表', '我改不了', '就算講明天也用現在式']
    },
    note: '同一趟飛機兩種說法：我搭的那趟（我的安排）用進行式，班機時間（時刻表）用簡單式。'
  },
  quizMore: [
    { q: 'What time ____ the concert ____?', opts: ['is / starting', 'does / start', 'is / start', 'do / starts'], ans: 1,
      expl: '節目時間是排定的 → 現在簡單式 does… start。' },
    { q: 'I can\'t make it — I ____ my parents to the airport that morning.', opts: ['take', 'am taking', 'will take', 'took'], ans: 1,
      expl: '已經安排好的個人計畫 → 現在進行式。' }
  ]
},

/* ---- 2026-08-24 B1+ feel、look 與 be being ---- */
dg20260824b1p: {
  vis: true,
  oneLine: '有些字加不加 -ing 都通，但語感不同：加 -ing 就是在強調「暫時、只有現在」。最特別的是 be——are quiet 講個性，are being quiet 講今天。',
  map: {
    when: '同一個字兩種寫法都對，你要決定要不要強調「暫時」',
    why: '-ing 是「暫時」的標記，加上去就等於說「平常不是這樣」',
    form: '常態 → 簡單式　|　暫時 → be + V-ing'
  },
  visual: {
    type: 'shift',
    cap: '左邊是常態的說法，右邊加了 -ing 之後多出來的訊息。注意 be being 只能講「行為」，不能講長期的個性。',
    rows: [
      { a: 'You are quiet.（你很安靜）', b: 'You are being quiet.（你今天特別安靜）', nt: 'are quiet 講個性；are being quiet 講此刻的行為，常帶「發生什麼事了？」的語氣' },
      { a: 'I feel tired.（我覺得累）', b: "I'm feeling tired.（我這陣子覺得累）", nt: 'feel 兩種都對，加 -ing 稍微強調暫時' },
      { a: 'You look well.（你看起來不錯）', b: "You're looking well.（你最近看起來不錯）", nt: '加 -ing 帶「最近」的意思，語氣更親切' },
      { a: 'This soup tastes salty.（這湯很鹹）', b: "I'm tasting the soup.（我在試味道）", nt: '客觀是 → 簡單式；主動去測 → 進行式' },
      { a: 'She is silly.（她很傻）', b: 'She is being silly.（她在耍傻）', nt: '個性 vs 一時的行為表現' }
    ]
  },
  scenarios: [
    { key: 'temp', icon: 'calendar',
      title: '-ing = temporary', titleCn: '加 -ing 就是強調暫時',
      ask: '你想說「只有現在這樣」嗎？',
      en: "I'm feeling much better today.",
      cn: '我今天覺得好多了。',
      why: 'feel、look、hurt、ache 這些字兩種都對，但加 -ing 會多帶一層「只有這陣子」。I feel better 比較中性，I’m feeling better 強調今天。' },
    { key: 'bebeing', icon: 'person',
      title: 'be being', titleCn: 'be being：講行為不講個性',
      ask: '你在講他是什麼樣的人，還是他現在的表現？',
      en: 'He is being rude today. He is normally very polite.',
      cn: '他今天很沒禮貌。他平常很客氣的。',
      why: 'be being 只能配「可以選擇的行為」形容詞：rude、silly、kind、difficult、quiet。不能說 He is being tall（✗）——身高不是行為。' },
    { key: 'senses', icon: 'eye',
      title: 'Sense verbs', titleCn: '感官動詞：客觀是 vs 主動測',
      ask: '主詞是「被感覺的東西」還是「去感覺的人」？',
      en: 'The milk smells bad. / I am smelling the milk.',
      cn: '牛奶聞起來壞了。／我在聞那個牛奶。',
      why: 'taste / smell / feel 當「客觀性質」時用簡單式（主詞是東西）；當「主動去測」時用進行式（主詞是人）。這是兩個不同的動詞用法。' },
    { key: 'never', icon: 'cross',
      title: 'Still no -ing', titleCn: '有些字還是不能加',
      ask: '這是感覺還是想法？',
      en: 'I know / I believe / I understand',
      cn: '我知道／我相信／我懂',
      why: 'know、believe、understand、own、belong、cost、seem 這些字沒有「暫時版」，永遠只能用簡單式。這一組沒有彈性。' }
  ],
  steps: [
    { label: '情境', text: '同事今天話很少，你想關心一下。' },
    { label: '先問', text: '你要說「他個性安靜」，還是「他今天特別安靜」？——後者。' },
    { label: '選寫法', text: '講此刻的行為表現 → be being。' },
    { label: '組出來', text: 'You are being very quiet today. Is everything OK?' },
    { label: '對照', text: '如果他本來就是安靜的人：He is a quiet person.（不能用 be being。）' }
  ],
  comparison: {
    title: '個性 vs 今天的表現',
    left: {
      tag: 'BE + ADJ', tagCn: '是…的人', icon: 'house',
      head: 'personality', headCn: '個性、常態',
      en: 'She is patient.',
      cn: '她很有耐心。',
      pts: ['講她本來就是這樣的人', '沒有時間限制', '任何形容詞都可以']
    },
    right: {
      tag: 'BE BEING + ADJ', tagCn: '正在表現得…', icon: 'clock',
      head: 'behaviour now', headCn: '此刻的行為',
      en: 'She is being patient with him.',
      cn: '她現在對他很有耐心。',
      pts: ['講她此刻選擇這樣做', '暗示平常不一定這樣', '只能配「行為」形容詞']
    },
    note: '檢查法：這個形容詞能不能「選擇要不要表現出來」？能（rude、kind、quiet）才可以用 be being；不能（tall、Taiwanese）就不行。'
  },
  quizMore: [
    { q: 'Why ____ so difficult today? You are normally easy-going.', opts: ['are you', 'are you being', 'do you be', 'you are'], ans: 1,
      expl: '講「今天特別如此」的行為 → are you being。' },
    { q: 'Which sentence is WRONG?', opts: ['This coffee tastes bitter.', 'I am tasting the coffee.', 'I am knowing the answer.', "I'm feeling better."], ans: 2,
      expl: 'know 沒有進行式。' }
  ]
},

/* ---- 2026-08-26 B1+ 過去簡單式在敘事中的用法 ---- */
dg20260826b1p: {
  vis: true,
  oneLine: '講故事時過去簡單式是主力：搭配 when / after / before / as soon as，就能把好幾件事按順序排好。',
  map: {
    when: '要按時間順序敘述一連串已經發生的事',
    why: '連接詞已經標明了先後，所以每個子句都用過去簡單式就夠了',
    form: '時間連接詞 + 過去簡單式（不用改成完成式）'
  },
  visual: {
    type: 'merge',
    cap: '重點在膠水那一格：after 已經表示「先發生」，所以子句裡照樣用過去簡單式，不必改成過去完成式。',
    a: { n: '先發生', en: 'I finished the report.', cn: '我寫完了報告。' },
    b: { n: '後發生', en: 'I went home.', cn: '我回家了。' },
    glue: 'after',
    glueCn: 'after 自己就標明了順序，所以子句用過去簡單式 finished 就好。寫成 had finished 也不算錯，但沒有必要。',
    out: { n: '合併後', parts: [
      { t: 'After', role: 'glue' },
      { t: 'I finished the report', role: 'plain' },
      { t: ', I went home.', role: 'verb' } ],
      cn: '寫完報告後，我就回家了。' }
  },
  scenarios: [
    { key: 'when', icon: 'flag',
      title: 'when', titleCn: 'when：緊接著發生',
      ask: '兩件事幾乎同時嗎？',
      en: 'When she opened the door, the cat ran out.',
      cn: '她一開門，貓就跑出去了。',
      why: 'when 表示「就在那個時候」。兩邊都用過去簡單式，表示兩件事一件接一件、都是瞬間。' },
    { key: 'after', icon: 'arrow',
      title: 'after / before', titleCn: 'after / before：明確的先後',
      ask: '哪一件先發生？',
      en: 'Before I left, I locked all the windows.',
      cn: '我離開前把所有窗戶都鎖上了。',
      why: 'after / before 已經把順序講清楚了，所以兩邊都用過去簡單式。不需要為了「先發生」就改成過去完成式。' },
    { key: 'assoon', icon: 'clock',
      title: 'as soon as', titleCn: 'as soon as：一…就…',
      ask: '第二件事是馬上接著發生嗎？',
      en: 'As soon as the rain stopped, we went out.',
      cn: '雨一停我們就出門了。',
      why: 'as soon as 強調「毫無間隔」。這個連接詞在敘事裡很好用，比 immediately after 自然。' },
    { key: 'nopast perfect', icon: 'cross',
      title: 'Do you need had?', titleCn: 'after 子句要不要用過去完成式',
      ask: '順序已經清楚了嗎？',
      en: 'After I ate, I went to bed.',
      cn: '我吃完就去睡了。',
      why: '連接詞已經標明順序，用過去簡單式就好。過去完成式留給「沒有連接詞、但需要強調更早發生」的情況：I was hungry because I had not eaten.' }
  ],
  steps: [
    { label: '要講的故事', text: '「我下班後去超市，買了菜，然後回家煮飯。」' },
    { label: '拆成事件', text: '下班 → 去超市 → 買菜 → 回家 → 煮飯。' },
    { label: '選連接詞', text: '第一段用 After，後面用 and / then 串起來。' },
    { label: '全部用過去式', text: 'finished / went / bought / came / cooked。' },
    { label: '組出來', text: 'After I finished work, I went to the supermarket, bought some vegetables and cooked dinner at home.' }
  ],
  comparison: {
    title: '有連接詞 vs 沒連接詞',
    left: {
      tag: 'WITH A LINKER', tagCn: '有時間連接詞', icon: 'link',
      head: 'past simple is enough', headCn: '過去簡單式就夠',
      en: 'After I finished, I left.',
      cn: '我做完就離開了。',
      pts: ['after / before / when / as soon as', '順序已經講清楚了', '不用改成 had finished']
    },
    right: {
      tag: 'NO LINKER', tagCn: '沒有連接詞', icon: 'clock',
      head: 'past perfect helps', headCn: '需要過去完成式標順序',
      en: 'I was hungry. I had not eaten all day.',
      cn: '我很餓，我一整天沒吃東西。',
      pts: ['沒有 after / before 幫你標順序', '用 had + Vpp 表示「更早」', '常用來解釋原因']
    },
    note: '過去完成式不是「講很久以前」，是「在另一個過去時間點之前」。有連接詞時它多半是多餘的。'
  },
  quizMore: [
    { q: 'As soon as I ____ the news, I ____ my sister.', opts: ['heard / called', 'had heard / had called', 'hear / called', 'was hearing / called'], ans: 0,
      expl: 'as soon as 已標順序 → 兩邊都用過去簡單式。' },
    { q: 'She was upset because she ____ the train.', opts: ['missed', 'had missed', 'misses', 'was missing'], ans: 1,
      expl: '沒有連接詞，要標「更早發生」→ 過去完成式 had missed。' }
  ]
},

/* ---- 2026-08-28 B1+ 過去進行式進階 ---- */
dg20260828b1p: {
  vis: true,
  oneLine: '過去進行式除了「背景動作」，還有三個進階用法：敘事開頭鋪陳場景、was always + V-ing 抱怨、以及跟 used to 的分工。',
  map: {
    when: '要在故事開頭鋪畫面、抱怨某人過去的重複行為，或區分「那一次正在做」與「以前的習慣」',
    why: '過去進行式讓讀者「看到」場景，而不只是聽到事實',
    form: 'was / were + V-ing　|　was / were always + V-ing'
  },
  visual: {
    type: 'cols',
    cap: '三個用法都靠同一個結構，差別在你放什麼字進去、放在哪個位置。第三欄的對照最重要：was doing 講那一次，used to 講整段時期。',
    cols: [
      { tag: '① 開場鋪陳場景', tone: 1,
        tagCn: '故事的第一句，先給畫面',
        items: [
          { en: 'The rain was falling and the streets were empty.', cn: '雨一直下，街上空無一人。', nt: '先鋪場景' },
          { en: 'I was waiting at the bus stop when I saw her.', cn: '我在公車站等車時看到她。', nt: '場景 + 突發' },
          { en: 'Everyone was talking at once.', cn: '大家同時在講話。', nt: '描寫當時的混亂' }
        ] },
      { tag: '② was always + V-ing', tone: 2,
        tagCn: '抱怨或驚訝的重複行為',
        items: [
          { en: 'He was always losing his umbrella.', cn: '他以前老是弄丟雨傘。', nt: '帶著不耐' },
          { en: 'She was constantly asking questions.', cn: '她那時一直在問問題。', nt: 'constantly 也一樣' },
          { en: 'They were always arriving late.', cn: '他們以前老是遲到。', nt: '對比：arrived late 只是陳述' }
        ] },
      { tag: '③ was doing vs used to', tone: 3,
        tagCn: '那一次正在做 vs 過去的習慣',
        items: [
          { en: 'I was playing tennis when it started to rain.', cn: '我打網球時開始下雨。', nt: '那一次，正在做' },
          { en: 'I used to play tennis every Sunday.', cn: '我以前每個星期天打網球。', nt: '整段時期的習慣' },
          { en: 'I was being watched.', cn: '我當時被人盯著。', nt: '被動：was / were being + Vpp' }
        ] }
    ]
  },
  scenarios: [
    { key: 'scene', icon: 'eye',
      title: 'Set the scene', titleCn: '開場鋪陳',
      ask: '你要先給讀者一個畫面嗎？',
      en: 'It was getting dark and the wind was picking up.',
      cn: '天色漸暗，風越來越大。',
      why: '小說和敘事文章的第一句常用過去進行式，因為它描寫「一段正在展開的狀態」，讀者會有進入畫面的感覺。' },
    { key: 'complain', icon: 'flag',
      title: 'was always + -ing', titleCn: '過去版的抱怨句',
      ask: '你在陳述事實，還是在抱怨？',
      en: 'My old boss was always changing his mind.',
      cn: '我以前的老闆老是改變主意。',
      why: '跟現在式的 always + 進行式一樣，只是時間換到過去。用 changed his mind often 只是陳述頻率，換成 was always changing 就帶了情緒。' },
    { key: 'vsUsedTo', icon: 'balance',
      title: 'vs used to', titleCn: '跟 used to 的分工',
      ask: '你在講「那一次」還是「那一整段時期」？',
      en: 'I used to swim a lot. I was swimming when I hurt my shoulder.',
      cn: '我以前很常游泳。我受傷那次正在游泳。',
      why: 'used to 講「過去的習慣，現在沒了」；was doing 講「過去某一刻正在做」。不能互換：I was swimming every day（✗ 應該用 used to swim）。' },
    { key: 'passive', icon: 'tool',
      title: 'Passive form', titleCn: '跟被動語態一起用',
      ask: '主詞是被動的一方嗎？',
      en: 'The road was being repaired when we arrived.',
      cn: '我們到的時候路正在施工。',
      why: '過去進行式的被動是 was / were being + 過去分詞。三層結構看起來複雜，但拆開就是「過去 + 進行 + 被動」。' }
  ],
  steps: [
    { label: '情境', text: '你想抱怨以前的室友老是不洗碗。' },
    { label: '選用法', text: '要帶抱怨語氣 → was always + V-ing。' },
    { label: '主詞', text: 'My old flatmate ＝ he/she → was。' },
    { label: '加 always', text: 'always 放在 was 和 V-ing 中間。' },
    { label: '組出來', text: 'My old flatmate was always leaving the dishes in the sink.' }
  ],
  comparison: {
    title: 'was doing vs used to',
    left: {
      tag: 'WAS DOING', tagCn: '過去進行式', icon: 'clock',
      head: 'that one moment', headCn: '過去某一刻正在做',
      en: 'I was cycling when I fell.',
      cn: '我騎腳踏車時跌倒了。',
      pts: ['指某一次的那一刻', '常配 when / while / at that time', '沒說做完沒']
    },
    right: {
      tag: 'USED TO', tagCn: '過去的習慣', icon: 'cycle',
      head: 'a whole period', headCn: '過去那一整段時期',
      en: 'I used to cycle to work.',
      cn: '我以前騎腳踏車上班。',
      pts: ['指一段時期的習慣', '暗示現在不這樣了', '常配 every day / when I was young']
    },
    note: '一句話分辨：講「那一次」用 was doing，講「那幾年」用 used to。'
  },
  quizMore: [
    { q: 'My grandmother ____ me sweets every time I visited.', opts: ['was giving', 'used to give', 'was always give', 'gave always'], ans: 1,
      expl: '過去的習慣（每次都這樣）→ used to give。' },
    { q: 'The house ____ when we drove past.', opts: ['was painting', 'was being painted', 'painted', 'is being painted'], ans: 1,
      expl: '過去進行式的被動：was being + 過去分詞。' }
  ]
},

/* ---- 2026-09-02 B1+ 現在完成式進階 ---- */
dg20260902b1p: {
  vis: true,
  oneLine: '同一個時間詞，加 this 還是 last，時態完全不同：this week 配完成式，last week 配過去簡單式。',
  map: {
    when: '要判斷時間範圍有沒有結束，並選對 for / since',
    why: '時間還沒過完，數字就還可能增加，所以要用連到現在的完成式',
    form: '還沒結束的時間 → have / has + Vpp　|　已結束的時間 → did'
  },
  visual: {
    type: 'timeline',
    cap: '關鍵是時間範圍的右端有沒有碰到 NOW。this week 的範圍還包含現在，last week 的範圍已經整個在過去。',
    rows: [
      { kind: 'range', label: '還沒結束：this week', tone: 'accent',
        from: 'this week', to: 'NOW',
        sub: 'I have had three meetings this week.',
        subCn: '我這禮拜開了三場會（週還沒過完，可能再增加）。' },
      { kind: 'point', label: '已經結束：last week', tone: 'ink',
        at: 'last week',
        sub: 'I had five meetings last week.',
        subCn: '我上禮拜開了五場會（那一週結束了，數字定了）。' },
      { kind: 'span', label: 'since：從起點到現在', tone: 'accent',
        from: 'since Monday', to: 'NOW',
        sub: 'I have been busy since Monday.',
        subCn: '我從星期一忙到現在。' }
    ]
  },
  scenarios: [
    { key: 'unfinished', icon: 'calendar',
      title: 'Unfinished time', titleCn: '還沒結束的時間',
      ask: '這段時間過完了嗎？',
      en: 'I have drunk three coffees today.',
      cn: '我今天喝了三杯咖啡。',
      why: 'today / this week / this month / this year / so far 都還沒過完 → 現在完成式。等時間過完再回頭講，就換成過去簡單式。' },
    { key: 'finished', icon: 'clock',
      title: 'Finished time', titleCn: '已經結束的時間',
      ask: '這段時間關起來了嗎？',
      en: 'I drank four coffees yesterday.',
      cn: '我昨天喝了四杯咖啡。',
      why: 'yesterday / last week / last month / in 2020 / two days ago 都已結束 → 過去簡單式。同一個名詞（week）換一個修飾詞，時態就換。' },
    { key: 'forsince', icon: 'pin',
      title: 'for vs since', titleCn: 'for 接長度，since 接起點',
      ask: '你要講「多久」還是「從哪裡開始」？',
      en: 'I have worked here for two years. / …since 2024.',
      cn: '我在這裡工作兩年了。／我從 2024 年就在這裡工作。',
      why: 'for + 一段長度（two years）；since + 一個起點（2024、Monday、I graduated）。中文的「兩年了」對應 for two years，不是 since two years。' },
    { key: 'passive', icon: 'tool',
      title: 'With the passive', titleCn: '跟被動語態一起用',
      ask: '主詞是被動的一方嗎？',
      en: 'The report has been sent to all managers.',
      cn: '報告已經寄給所有主管了。',
      why: '現在完成式的被動是 have / has been + 過去分詞。這在職場書信非常常用，因為重點是「已經寄出」的結果，不是誰寄的。' }
  ],
  steps: [
    { label: '情境', text: '你想說「我這個月讀了兩本書」。' },
    { label: '看時間詞', text: 'this month——這個月還沒過完。' },
    { label: '選時態', text: '時間還沒結束 → 現在完成式。' },
    { label: '組出來', text: 'I have read two books this month.' },
    { label: '換成上個月', text: 'last month 已經結束 → I read three books last month.' }
  ],
  comparison: {
    title: 'this 還是 last，決定整個時態',
    left: {
      tag: 'THIS …', tagCn: '還沒結束', icon: 'calendar',
      head: 'present perfect', headCn: '用現在完成式',
      en: 'I have seen two films this week.',
      cn: '我這禮拜看了兩部電影。',
      pts: ['today / this week / this month / so far', '數字還可能增加', 'have / has + Vpp']
    },
    right: {
      tag: 'LAST …', tagCn: '已經結束', icon: 'clock',
      head: 'past simple', headCn: '用過去簡單式',
      en: 'I saw three films last week.',
      cn: '我上禮拜看了三部電影。',
      pts: ['yesterday / last week / in 2020', '數字已經定了', 'did']
    },
    note: '同一個字 week，前面換一個修飾詞就換時態。寫作時先看時間詞，再決定動詞。'
  },
  quizMore: [
    { q: 'I ____ four emails so far today.', opts: ['sent', 'have sent', 'send', 'was sending'], ans: 1,
      expl: 'so far today 還沒結束 → 現在完成式。' },
    { q: 'She has lived here ____ 2019.', opts: ['for', 'since', 'from', 'during'], ans: 1,
      expl: '2019 是起點 → since。' }
  ]
},

/* ============================================================
   每日文法 · B2（7 個）
   B2 的重點不是「哪個對」，而是「在哪個語域用哪個」。
   ============================================================ */

/* ---- 2026-08-14 B2 正式與敘事語境中的現在式 ---- */
dg20260814b2: {
  vis: true,
  oneLine: '到了 B2，選時態不再是對錯問題，而是修辭選擇：新聞標題、敘事背景、正式報告各有各的偏好。',
  map: {
    when: '寫新聞、寫故事、寫正式報告，要決定用簡單式還是進行式',
    why: '簡單式讀起來像「定論」，進行式讀起來像「正在發生的畫面」',
    form: '標題與陳述 → 現在簡單式　|　背景與趨勢 → 現在進行式'
  },
  visual: {
    type: 'cols',
    cap: '三種語域、三種選擇。同一件事換一個時態，讀者感受到的溫度就不一樣——這是 B2 要學會控制的東西。',
    cols: [
      { tag: '① 新聞標題', tone: 1,
        tagCn: '用現在簡單式寫「已經發生的事」，製造即時感',
        items: [
          { en: 'Signal Fault Delays Thousands', cn: '訊號故障導致數千人延誤', nt: '事情已發生，卻用現在式' },
          { en: 'Typhoon Hits East Coast', cn: '颱風襲擊東岸', nt: '標題省略助動詞與冠詞' },
          { en: 'Government Announces New Policy', cn: '政府宣布新政策', nt: 'announced 也對，但標題偏好現在式' }
        ] },
      { tag: '② 敘事背景', tone: 2,
        tagCn: '用進行式鋪陳畫面，讓讀者「看見」',
        items: [
          { en: 'The city is waking up. Vendors are setting up their stalls.', cn: '城市正在醒來，攤販正在擺攤。', nt: '進行式給畫面' },
          { en: 'So I walk in, and everyone is staring at me.', cn: '我一走進去，大家都盯著我看。', nt: '口語敘事的臨場感' },
          { en: 'The economy is slowing.', cn: '經濟正在放緩。', nt: '趨勢：正在改變中' }
        ] },
      { tag: '③ 正式報告', tone: 3,
        tagCn: '用簡單式陳述事實與通則，語氣客觀',
        items: [
          { en: 'This report examines three factors.', cn: '本報告探討三個因素。', nt: '學術寫作的慣用時態' },
          { en: 'The data suggest a clear pattern.', cn: '數據顯示出明顯的模式。', nt: 'suggest 而非 is suggesting' },
          { en: 'Section 2 outlines the method.', cn: '第二節說明研究方法。', nt: '指涉文本本身用現在式' }
        ] }
    ]
  },
  scenarios: [
    { key: 'headline', icon: 'flag',
      title: 'Headlines', titleCn: '新聞標題的現在簡單式',
      ask: '你要製造「剛剛發生」的感覺嗎？',
      en: 'Fire Destroys Historic Market',
      cn: '大火摧毀歷史市場',
      why: '事情明明已經發生了，標題卻用現在式——這是刻意的修辭，讓讀者覺得事情就在眼前。內文才會換回過去式：A fire destroyed…' },
    { key: 'narrative', icon: 'eye',
      title: 'Narrative background', titleCn: '進行式鋪陳敘事背景',
      ask: '你想讓讀者看到畫面嗎？',
      en: 'It is raining, and the streets are emptying fast.',
      cn: '正在下雨，街上的人迅速散去。',
      why: '進行式描述「一段正在展開的狀態」，讀者會有身處現場的感覺。這是小說開頭與旅遊寫作最常用的手法。' },
    { key: 'formal', icon: 'book',
      title: 'Formal statements', titleCn: '正式報告用簡單式',
      ask: '你要顯得客觀嗎？',
      en: 'The findings indicate a strong correlation.',
      cn: '研究結果顯示強烈的相關性。',
      why: '學術與正式寫作偏好簡單式，因為它聽起來像「已定論的事實」。用 is indicating 會顯得暫時、不確定，削弱說服力。' },
    { key: 'temperature', icon: 'balance',
      title: 'Same fact, two temperatures', titleCn: '同一件事，不同溫度',
      ask: '你要冷靜還是要臨場？',
      en: 'Sales fall. / Sales are falling.',
      cn: '銷售下滑。／銷售正在下滑。',
      why: '前者像結論，後者像現場報導、而且暗示「還在繼續掉」。寫作時要有意識地選——這不是文法題，是語氣題。' }
  ],
  steps: [
    { label: '情境', text: '你要寫一段關於公司營收下滑的說明。' },
    { label: '如果是給董事會的報告', text: '要客觀、要像定論 → 簡單式：Revenue falls short of target.' },
    { label: '如果是給團隊的說明', text: '要強調「還在惡化、要趕快處理」→ 進行式：Revenue is falling faster than expected.' },
    { label: '如果是新聞標題', text: '要即時感 → 簡單式無助動詞：Revenue Misses Target' },
    { label: '關鍵', text: '三句都對。差別是你想讓讀者感受到什麼——這才是 B2 的能力。' }
  ],
  comparison: {
    title: '定論 vs 現場',
    left: {
      tag: 'SIMPLE', tagCn: '現在簡單式', icon: 'book',
      head: 'settled fact', headCn: '像已定論的事實',
      en: 'The population grows every year.',
      cn: '人口每年成長。',
      pts: ['客觀、冷靜、有距離', '學術、報告、新聞標題', '讀起來像「這就是規律」']
    },
    right: {
      tag: 'CONTINUOUS', tagCn: '現在進行式', icon: 'eye',
      head: 'unfolding now', headCn: '像正在眼前展開',
      en: 'The population is growing fast.',
      cn: '人口正在快速成長。',
      pts: ['有畫面、有溫度、有緊迫感', '敘事、趨勢分析、口語', '讀起來像「還在繼續」']
    },
    note: '寫作前先問：我要讀者「知道」還是「感受到」？知道 → 簡單式；感受到 → 進行式。'
  },
  quizMore: [
    { q: 'In an academic abstract, which is more appropriate?', opts: ['This paper is examining three models.', 'This paper examines three models.', 'This paper has been examining three models.', 'This paper examine three models.'], ans: 1,
      expl: '學術寫作陳述論文內容用現在簡單式。' },
    { q: 'Which reads like a news headline?', opts: ['A storm has damaged the bridge.', 'Storm Damages Bridge', 'The storm was damaging the bridge.', 'A storm damaged the bridge.'], ans: 1,
      expl: '標題省略冠詞與助動詞，並用現在簡單式製造即時感。' }
  ]
},

/* ---- 2026-08-19 B2 現在簡單式的語域與修辭效果 ---- */
dg20260819b2: {
  vis: true,
  oneLine: '現在簡單式在 B2 是修辭工具：說故事時製造臨場感、寫指示時用泛稱 you、寫學術時陳述通則並緩和語氣。',
  map: {
    when: '說故事、寫指示或食譜、寫學術通則',
    why: '簡單式的「固定、可靠」語感，可以借來製造臨場感或客觀感',
    form: '動詞原形（第三人稱加 s）'
  },
  visual: {
    type: 'cols',
    cap: '三個都是「用現在簡單式做別的事」。第三欄的緩和技巧在學術寫作特別重要——太武斷的句子會被質疑。',
    cols: [
      { tag: '① 歷史現在式', tone: 1,
        tagCn: '講過去的事卻用現在式，讓故事更生動',
        items: [
          { en: 'So I walk in, and he just stares at me.', cn: '我一走進去，他就直直盯著我。', nt: '口語說故事最常見' },
          { en: 'In 1969, Armstrong steps onto the moon.', cn: '一九六九年，阿姆斯壯踏上月球。', nt: '紀錄片旁白的手法' },
          { en: 'Hamlet hesitates and loses his chance.', cn: '哈姆雷特猶豫了，錯失機會。', nt: '討論文學情節固定用現在式' }
        ] },
      { tag: '② 泛稱 you', tone: 2,
        tagCn: '指示、食譜、說明書：you 不指特定的人',
        items: [
          { en: 'You add the eggs, then you stir slowly.', cn: '加入蛋，然後慢慢攪拌。', nt: '食譜的口語版' },
          { en: 'First you press this button.', cn: '首先按這個鈕。', nt: '說明書的口語版' },
          { en: 'Add the eggs. Stir slowly.', cn: '加入蛋。慢慢攪拌。', nt: '正式版用祈使句，省略 you' }
        ] },
      { tag: '③ 緩和武斷', tone: 3,
        tagCn: '學術寫作：加 tend to / can / may 避免絕對化',
        items: [
          { en: 'Younger users tend to prefer short videos.', cn: '年輕用戶傾向偏好短影片。', nt: 'tend to：不說全部' },
          { en: 'This approach can reduce costs.', cn: '這個做法可以降低成本。', nt: 'can：說可能性不說必然' },
          { en: 'Younger users prefer short videos.', cn: '年輕用戶偏好短影片。', nt: '沒有緩和：容易被質疑「全部嗎？」' }
        ] }
    ]
  },
  scenarios: [
    { key: 'historical', icon: 'bubble',
      title: 'Historical present', titleCn: '歷史現在式：說故事更生動',
      ask: '你在講一個過去的故事，想讓人有臨場感嗎？',
      en: 'So yesterday I am walking home and this dog runs up to me.',
      cn: '昨天我走回家，有隻狗突然衝過來。',
      why: '明明是昨天的事，卻用現在式——這在口語講故事非常常見，聽的人會覺得「就在眼前」。要整段保持一致，不要跳來跳去。' },
    { key: 'generic', icon: 'tool',
      title: 'Generic you', titleCn: '泛稱 you：不指特定的人',
      ask: '這個 you 是指「任何人」嗎？',
      en: 'You never know what will happen.',
      cn: '你永遠不知道會發生什麼事。',
      why: '這裡的 you 不是「你」，是「任何人」。正式寫作會改成 one 或被動：One never knows… / It is impossible to know…' },
    { key: 'hedge', icon: 'balance',
      title: 'Hedging', titleCn: '緩和：避免過度武斷',
      ask: '你的說法能適用於所有情況嗎？',
      en: 'Remote work may improve focus for some employees.',
      cn: '遠距工作對部分員工可能有助於專注。',
      why: '學術寫作常用的緩和詞：tend to、may、can、often、generally、in most cases。把絕對句改成有條件的句子，論述反而更站得住腳。' },
    { key: 'avoid', icon: 'cross',
      title: 'When to avoid it', titleCn: '什麼時候不該用歷史現在式',
      ask: '這是正式書面文件嗎？',
      en: 'The committee approved the proposal in March.',
      cn: '委員會三月核准了該提案。',
      why: '正式報告、法律文件、履歷描述過去事實，一律用過去式。歷史現在式是口語與文學手法，用在公文會顯得不專業。' }
  ],
  steps: [
    { label: '情境', text: '你要在報告裡寫一個觀察結論。' },
    { label: '第一版', text: 'Customers prefer mobile checkout.（顧客偏好手機結帳。）' },
    { label: '問題', text: '這句太絕對——所有顧客？審稿的人會馬上質疑。' },
    { label: '加緩和', text: 'Customers tend to prefer mobile checkout.' },
    { label: '更保險', text: 'In most cases, customers tend to prefer mobile checkout.（把適用範圍講清楚。）' }
  ],
  comparison: {
    title: '武斷 vs 緩和',
    left: {
      tag: 'ABSOLUTE', tagCn: '絕對句', icon: 'cross',
      head: 'easy to attack', headCn: '容易被質疑',
      en: 'Social media harms teenagers.',
      cn: '社群媒體傷害青少年。',
      pts: ['聽起來像「全部、一定」', '只要有一個反例就被推翻', '學術寫作要避免']
    },
    right: {
      tag: 'HEDGED', tagCn: '緩和句', icon: 'balance',
      head: 'defensible', headCn: '站得住腳',
      en: 'Heavy social media use can harm some teenagers.',
      cn: '過度使用社群媒體可能傷害部分青少年。',
      pts: ['加了 can / some / heavy 三層限定', '把適用範圍講清楚', '論述更專業']
    },
    note: '緩和不是心虛，是精確。B2 寫作被扣分最常見的原因之一，就是句子太絕對。'
  },
  quizMore: [
    { q: 'In a formal report, which sentence is best?', opts: ['Everyone hates long meetings.', 'Long meetings tend to reduce engagement.', 'You always hate long meetings.', 'Long meetings are hating engagement.'], ans: 1,
      expl: 'tend to 緩和了絕對語氣，適合正式寫作。' },
    { q: 'Which uses the historical present?', opts: ['Last week I went to the market.', 'So I go to the market and see this guy.', 'I have been to the market.', 'I was going to the market.'], ans: 1,
      expl: '講過去的事卻用現在式（go / see）＝歷史現在式。' }
  ]
},

/* ---- 2026-08-21 B2 現在進行式與現在簡單式的語域與修辭效果 ---- */
dg20260821b2: {
  vis: true,
  oneLine: '同樣一件事，口語用 always + 進行式抱怨、新聞用簡單式製造即時感、正式報告用簡單式陳述通則。',
  map: {
    when: '同一個內容要在不同場合說，你要選符合那個場合的時態',
    why: '時態帶的不只是時間，還有情緒與正式程度',
    form: '抱怨 → always + 進行式　|　標題與報告 → 現在簡單式　|　趨勢 → 進行式'
  },
  visual: {
    type: 'matrix',
    cap: '橫向讀：這個語域用哪個時態、達到什麼效果、長什麼樣。三種語域各有偏好，不能互換。',
    cols: ['用哪個時態', '達到的效果', '例句'],
    rows: [
      { h: '口語抱怨', cells: [
        { en: 'always + V-ing', cn: '進行式加 always' },
        { en: 'irritation', cn: '不耐、不滿', hi: 1 },
        { en: 'The Red Line is always having problems.', cn: '紅線老是出問題。' } ] },
      { h: '新聞標題', cells: [
        { en: 'present simple', cn: '現在簡單式' },
        { en: 'immediacy', cn: '即時感', hi: 1 },
        { en: 'Signal Fault Delays Thousands', cn: '訊號故障導致數千人延誤' } ] },
      { h: '趨勢分析', cells: [
        { en: 'present continuous', cn: '現在進行式' },
        { en: 'still developing', cn: '還在發展中', hi: 1 },
        { en: 'Ridership is falling year on year.', cn: '搭乘人次逐年下降。' } ] },
      { h: '正式報告', cells: [
        { en: 'present simple', cn: '現在簡單式' },
        { en: 'objectivity', cn: '客觀、無情緒', hi: 1 },
        { en: 'The line experiences frequent faults.', cn: '該路線經常發生故障。' } ] }
    ]
  },
  scenarios: [
    { key: 'complain', icon: 'flag',
      title: 'always + -ing', titleCn: '抱怨的語氣',
      ask: '你想帶情緒嗎？',
      en: 'My laptop is constantly crashing.',
      cn: '我的筆電一直在當機。',
      why: 'always / constantly / forever + 進行式帶著不耐。同一件事用簡單式 My laptop crashes often 只是陳述頻率，沒有情緒。' },
    { key: 'headline', icon: 'book',
      title: 'Headline immediacy', titleCn: '標題的即時感',
      ask: '你要讓人覺得「剛剛發生」嗎？',
      en: 'Metro Line Suspends Service',
      cn: '地鐵路線暫停營運',
      why: '事情已經發生，標題卻用現在式。這是新聞的固定手法：省略冠詞與助動詞，加上現在式，讀起來就像正在發生。' },
    { key: 'trend', icon: 'arrow',
      title: 'Developing trends', titleCn: '描述發展中的趨勢',
      ask: '這件事還在變嗎？',
      en: 'Working patterns are shifting across the sector.',
      cn: '整個產業的工作型態正在轉變。',
      why: '講趨勢一定用進行式，因為它暗示「還沒定案、還在動」。用簡單式 patterns shift 會變成在講一個普遍規律。' },
    { key: 'formal', icon: 'balance',
      title: 'Formal objectivity', titleCn: '正式報告的客觀語氣',
      ask: '你要避免情緒色彩嗎？',
      en: 'The system requires frequent maintenance.',
      cn: '該系統需要頻繁維護。',
      why: '正式報告偏好簡單式，因為進行式帶著情緒與暫時感。把 is always breaking down 改成 requires frequent maintenance，語氣立刻專業。' }
  ],
  steps: [
    { label: '同一件事', text: '公司的請假系統很難用，經常出錯。' },
    { label: '跟同事抱怨', text: 'The leave system is always crashing!（帶情緒。）' },
    { label: '寫成公告標題', text: 'Leave System Undergoes Maintenance（即時感。）' },
    { label: '寫進正式報告', text: 'The leave system experiences frequent errors and requires review.（客觀。）' },
    { label: '關鍵', text: '三句講同一件事。選錯語域，內容再對也會顯得不專業或太冷淡。' }
  ],
  comparison: {
    title: '同一件事，兩種語域',
    left: {
      tag: 'SPOKEN', tagCn: '口語', icon: 'bubble',
      head: 'with feeling', headCn: '帶情緒',
      en: 'This printer is always jamming!',
      cn: '這台印表機老是卡紙！',
      pts: ['always / constantly + 進行式', '表達不耐、抱怨', '適合對話、內部訊息']
    },
    right: {
      tag: 'FORMAL', tagCn: '正式', icon: 'book',
      head: 'objective', headCn: '客觀',
      en: 'The printer jams frequently and should be replaced.',
      cn: '該印表機經常卡紙，建議更換。',
      pts: ['現在簡單式 + 頻率副詞', '沒有情緒，只有事實與建議', '適合報告、公文']
    },
    note: '想抱怨就用 always + 進行式，想被當專業意見就換成簡單式加頻率副詞。'
  },
  quizMore: [
    { q: 'Which sentence expresses irritation?', opts: ['The bus arrives late.', 'The bus is always arriving late.', 'The bus arrived late.', 'The bus has arrived late.'], ans: 1,
      expl: 'always + 進行式帶抱怨語氣。' },
    { q: 'In a formal report, which is most appropriate?', opts: ['The server is always going down.', 'The server goes down about twice a month.', 'The server is going down!', 'The server always go down.'], ans: 1,
      expl: '正式報告用簡單式加具體頻率，不帶情緒。' }
  ]
},

/* ---- 2026-08-24 B2 「I'm loving it」 ---- */
dg20260824b2: {
  vis: true,
  oneLine: '狀態動詞不加 -ing 是規則，但母語者會「故意」打破它——關鍵是知道在哪個語域可以破、在哪個語域不能。',
  map: {
    when: '你想用 I am loving / I am hating 這類非標準說法，或要判斷別人為什麼這樣寫',
    why: '加上 -ing 就把「長期的感覺」變成「此刻的體驗」，聽起來有熱度、有當下感',
    form: '正式 → I love / I would like　|　口語與廣告 → I am loving'
  },
  visual: {
    type: 'scale',
    cap: '從左到右是「越來越可以打破規則」。同一個意思，你要根據場合往左還是往右走。',
    lo: '正式書面：絕對不破',
    hi: '廣告與口語：故意破',
    stops: [
      { at: 5, label: 'Academic / formal writing', labelCn: '學術與正式寫作：不能破',
        en: 'Consumers value convenience.', cn: '消費者重視便利性。' },
      { at: 30, label: 'Business email', labelCn: '職場書信：用 would 軟化',
        en: 'I would like to suggest an alternative.', cn: '我想提出另一個方案。' },
      { at: 60, label: 'Everyday speech', labelCn: '日常口語：偶爾破，帶當下感',
        en: "I'm liking this new place.", cn: '我還蠻喜歡這個新地方的。' },
      { at: 92, label: 'Advertising / social media', labelCn: '廣告與社群：故意破，製造熱度',
        en: "I'm loving it.", cn: '我正愛著它。' }
    ]
  },
  scenarios: [
    { key: 'ad', icon: 'star',
      title: 'Why ads break it', titleCn: '廣告為什麼要寫 I’m loving it',
      ask: '廣告想讓你感覺什麼？',
      en: "I'm loving it.",
      cn: '我正愛著它。',
      why: 'I love it 是一個長期的事實，聽起來冷靜。I’m loving it 把它變成「此刻的體驗」，有熱度、有現場感——這正是廣告要的。它是刻意的破格，不是錯誤。' },
    { key: 'spoken', icon: 'bubble',
      title: 'In everyday speech', titleCn: '日常口語的分寸',
      ask: '你要強調「目前為止」嗎？',
      en: "I'm liking the new manager so far.",
      cn: '目前為止我還蠻喜歡新主管的。',
      why: 'so far 這種「暫時、還在觀察」的語氣，配 -ing 很自然。但如果你要講穩定的喜好，還是要用 I like——I’m liking coffee 會很奇怪。' },
    { key: 'soften', icon: 'person',
      title: 'Softening at work', titleCn: '職場書信的軟化技巧',
      ask: '你想客氣一點嗎？',
      en: 'I was wondering if you could review this. / I would like your feedback.',
      cn: '不知道您能不能幫我看一下。／我想聽聽您的意見。',
      why: '職場不用 I am wanting（✗），改用 I was wondering / I would like。用過去式和 would 拉開距離，就是英文的客氣機制。' },
    { key: 'line', icon: 'cross',
      title: 'The line you must not cross', titleCn: '寫作上的底線',
      ask: '這是要交出去的正式文件嗎？',
      en: 'The findings indicate a shift in consumer behaviour.',
      cn: '研究結果顯示消費行為出現轉變。',
      why: '正式寫作、考試作文、學術論文，一律照規則走：狀態動詞不加 -ing。破格是母語者的風格選擇，不是你在考試裡該冒的險。' }
  ],
  steps: [
    { label: '情境', text: '你想在社群貼文寫「我超愛這家新開的店」。' },
    { label: '標準說法', text: 'I love this new place.（正確，但語氣平。）' },
    { label: '社群語感', text: "I'm loving this new place!（把它變成此刻的體驗，有熱度。）" },
    { label: '如果是寫評論報告', text: '換回標準：The new venue offers a strong selection.（客觀、正式。）' },
    { label: '關鍵', text: '不是「哪個對」，是「哪個場合」。破格要有意識，不能是因為不知道規則。' }
  ],
  comparison: {
    title: '規則 vs 刻意破格',
    left: {
      tag: 'STANDARD', tagCn: '照規則', icon: 'book',
      head: 'stable feeling', headCn: '長期、穩定的感覺',
      en: 'I love this song.',
      cn: '我很喜歡這首歌。',
      pts: ['狀態動詞用簡單式', '任何場合都安全', '正式寫作唯一選擇']
    },
    right: {
      tag: 'DELIBERATE BREAK', tagCn: '刻意破格', icon: 'star',
      head: 'right-now experience', headCn: '此刻的體驗',
      en: "I'm loving this song.",
      cn: '我正愛著這首歌。',
      pts: ['把感覺變成當下的體驗', '有熱度、有暫時感', '只用在口語、廣告、社群']
    },
    note: '母語者破格是因為他們知道規則。你要先能百分之百寫對，才有資格選擇要不要破。'
  },
  quizMore: [
    { q: 'In a formal business email, which is best?', opts: ['I am wanting your feedback.', 'I would like your feedback.', "I'm loving your idea.", 'I am needing this today.'], ans: 1,
      expl: '職場書信用 would like 軟化，不用狀態動詞的進行式。' },
    { q: 'Why does an advertisement write "I\'m loving it"?', opts: ['Because I love it is grammatically wrong.', 'To turn a stable feeling into a right-now experience.', 'Because love is an action verb.', 'To sound more formal.'], ans: 1,
      expl: '進行式把長期的感覺變成此刻的體驗，製造熱度與當下感。' }
  ]
},

/* ---- 2026-08-26 B2 正式與學術寫作中的過去簡單式 ---- */
dg20260826b2: {
  vis: true,
  oneLine: '在正式文章裡，過去簡單式是建立客觀論據的工具：用它陳述已定論的數據事實，為接下來的分析鋪底。',
  map: {
    when: '寫論說文、研究報告，要陳述已經發生、已有定論的事實或數據',
    why: '過去簡單式讀起來像「這已經是紀錄了」，完成式則暗示「現在還相關」',
    form: '已定論的過去事實 → did　|　與現在仍相關 → have / has + Vpp'
  },
  visual: {
    type: 'cols',
    cap: '兩欄的差別不是時間，是「你想不想把它連到現在」。論說文常先用過去式把事實釘住，再用完成式或現在式做分析。',
    cols: [
      { tag: '過去簡單式：已定論的紀錄', tone: 2,
        tagCn: '報告數據、事件、研究結果——時間已封閉',
        items: [
          { en: 'Sales rose by 12% in 2023.', cn: '2023 年銷售成長 12%。', nt: '有明確年份，已定論' },
          { en: 'The study surveyed 1,200 participants.', cn: '該研究調查了 1,200 位參與者。', nt: '研究方法一律用過去式' },
          { en: 'Analysts estimated the cost at NT$4bn.', cn: '分析師估計成本為 40 億台幣。', nt: 'estimated：當時的估計' }
        ] },
      { tag: '現在完成式：現在仍然相關', tone: 1,
        tagCn: '強調影響延續到現在、或情勢尚未結束',
        items: [
          { en: 'Sales have risen steadily since 2020.', cn: '銷售自 2020 年起穩定成長。', nt: 'since：延續到現在' },
          { en: 'Three studies have confirmed this pattern.', cn: '已有三項研究證實此模式。', nt: '重點是「目前為止」的累積' },
          { en: 'The policy has reduced waiting times.', cn: '該政策已縮短了等候時間。', nt: '效果現在還在' }
        ] }
    ]
  },
  scenarios: [
    { key: 'data', icon: 'money',
      title: 'Reporting data', titleCn: '陳述數據事實',
      ask: '這個數字有明確的期間嗎？',
      en: 'Revenue declined by 8% in the third quarter.',
      cn: '第三季營收下滑 8%。',
      why: '有明確期間（in Q3、in 2023、last year）就用過去簡單式。正式寫作常用的動詞：rose、fell、declined、increased、estimated、reported、found。' },
    { key: 'method', icon: 'book',
      title: 'Describing method', titleCn: '描述研究方法',
      ask: '你在說「當時做了什麼」嗎？',
      en: 'We collected data over six months and analysed it using regression.',
      cn: '我們花六個月收集資料，並以迴歸分析處理。',
      why: '研究方法一律用過去式，因為那是已經完成的動作。但描述「論文本身」要用現在式：This paper examines…（見 dg20260814b2）。' },
    { key: 'still', icon: 'link',
      title: 'When to use the perfect', titleCn: '什麼時候該用完成式',
      ask: '這件事的影響現在還在嗎？',
      en: 'Research has consistently shown a link between sleep and memory.',
      cn: '研究一再顯示睡眠與記憶之間的關聯。',
      why: '想強調「到目前為止的累積證據」用現在完成式，常配 since、so far、to date、in recent years。這暗示議題還在發展中。' },
    { key: 'mix', icon: 'balance',
      title: 'The typical paragraph', titleCn: '一段論述的典型時態組合',
      ask: '你在鋪事實還是下判斷？',
      en: 'Sales fell in 2023. This suggests that demand has weakened.',
      cn: '2023 年銷售下滑。這顯示需求已經走弱。',
      why: '典型結構：過去式陳述事實 → 現在式下判斷（suggests）→ 完成式說明現況（has weakened）。三個時態各有分工，不是隨便換。' }
  ],
  steps: [
    { label: '你要寫的段落', text: '公司去年裁員，現在人力不足。' },
    { label: '第一句：陳述事實', text: '有明確時間 → 過去簡單式：The company cut 300 jobs last year.' },
    { label: '第二句：下判斷', text: '評論用現在式：This decision now appears premature.' },
    { label: '第三句：說明現況', text: '影響延續到現在 → 完成式：Staffing levels have not recovered.' },
    { label: '關鍵', text: '一段裡三個時態各有工作。時態一致不代表全段同一個時態，而是每一句都用對。' }
  ],
  comparison: {
    title: '報告事實 vs 強調現在仍相關',
    left: {
      tag: 'PAST SIMPLE', tagCn: '過去簡單式', icon: 'book',
      head: 'a closed record', headCn: '已定論的紀錄',
      en: 'The programme ended in 2022.',
      cn: '該計畫於 2022 年結束。',
      pts: ['有明確期間', '讀起來像「這是紀錄」', '研究方法、歷史事件、數據期間']
    },
    right: {
      tag: 'PRESENT PERFECT', tagCn: '現在完成式', icon: 'link',
      head: 'still relevant', headCn: '現在還相關',
      en: 'The programme has improved literacy rates.',
      cn: '該計畫已提升了識字率。',
      pts: ['沒有封閉的時間', '讀起來像「影響還在」', '常配 since / so far / to date']
    },
    note: '寫論述時先問：我要讀者把這件事當成「歷史」還是「現在的問題」？前者用過去式，後者用完成式。'
  },
  quizMore: [
    { q: 'In a methods section, which is correct?', opts: ['We collect data over six months.', 'We collected data over six months.', 'We have collected data over six months.', 'We are collecting data over six months.'], ans: 1,
      expl: '研究方法描述已完成的動作 → 過去簡單式。' },
    { q: 'Which emphasises that the situation is still developing?', opts: ['Prices rose in 2022.', 'Prices have risen since 2022.', 'Prices were rising in 2022.', 'Prices rise in 2022.'], ans: 1,
      expl: 'since + 現在完成式表示延續到現在、尚未結束。' }
  ]
},

/* ---- 2026-08-28 B2 過去進行式的語域與修辭效果 ---- */
dg20260828b2: {
  vis: true,
  oneLine: '在敘事新聞裡，過去進行式營造「事件發生當下的畫面」，跟過去簡單式的「事實陳述」形成對比。',
  map: {
    when: '寫敘事新聞或正式文章，要決定強調「過程」還是「結果」',
    why: '進行式讓讀者看到現場，簡單式讓讀者接收事實；對比兩者可以做出諷刺或落差感',
    form: 'was / were + V-ing（過程、畫面）　|　did（事實、結果）'
  },
  visual: {
    type: 'cols',
    cap: '兩欄不是對錯，是「你要讀者站在哪裡」。左欄把讀者放進現場，右欄把讀者放在事後。',
    cols: [
      { tag: '過去進行式：鋪陳畫面', tone: 1,
        tagCn: '強調過程、當時的情境，讀者像在現場',
        items: [
          { en: 'Commuters were queuing in the rain when the announcement came.', cn: '通勤者在雨中排隊時，廣播才響起。', nt: '先給畫面再給事件' },
          { en: 'Officials were still denying the fault on Monday.', cn: '週一時官員還在否認故障。', nt: 'still + 進行式：暗示不合理' },
          { en: 'The company was preparing a launch when the recall hit.', cn: '該公司正籌備發表會，召回消息就傳出。', nt: '製造落差' }
        ] },
      { tag: '過去簡單式：陳述事實', tone: 2,
        tagCn: '強調結果、已定論，讀者站在事後看',
        items: [
          { en: 'The train service stopped for four hours.', cn: '列車服務中斷四小時。', nt: '報告結果' },
          { en: 'Officials denied the fault on Monday.', cn: '官員週一否認故障。', nt: '中性陳述，沒有評價' },
          { en: 'The company recalled 20,000 units.', cn: '該公司召回兩萬台。', nt: '事實與數字' }
        ] }
    ]
  },
  scenarios: [
    { key: 'scene', icon: 'eye',
      title: 'Set the scene', titleCn: '新聞敘事：鋪陳畫面',
      ask: '你要讀者「看見」現場嗎？',
      en: 'Families were sheltering in the school gym when the second quake struck.',
      cn: '第二次地震來襲時，居民正在學校體育館避難。',
      why: '進行式描述「一段正在展開的狀態」，讀者會有身處現場的感覺。這是災難、體育、人物報導的標準開場手法。' },
    { key: 'contrast', icon: 'balance',
      title: 'Process vs result', titleCn: '強調過程還是結果',
      ask: '你要讀者注意「怎麼發生的」還是「結果是什麼」？',
      en: 'She was leading by two sets. / She lost in five sets.',
      cn: '她當時領先兩盤。／她最後五盤落敗。',
      why: '前者把讀者放在比賽中間（還有懸念），後者直接給結果。體育報導常先用進行式製造張力，再用簡單式收尾。' },
    { key: 'irony', icon: 'flag',
      title: 'Irony and gap', titleCn: '暗示諷刺或落差',
      ask: '你想暗示「當時還在做這件事，真是」嗎？',
      en: 'The minister was praising the system as the outage entered its third hour.',
      cn: '停電進入第三小時之際，部長還在讚揚這套系統。',
      why: 'still / as 配過去進行式，可以不明說地表達批評——讀者自己會感覺到落差。這是新聞不下判斷卻能表達立場的技巧。' },
    { key: 'choose', icon: 'book',
      title: 'When not to use it', titleCn: '什麼時候不該用進行式',
      ask: '這是要求精簡的事實報導嗎？',
      en: 'Three people were injured. Services resumed at 6 p.m.',
      cn: '三人受傷。服務於下午六點恢復。',
      why: '純事實摘要、法律文件、數據報告一律用過去簡單式。進行式帶著情緒與畫面，在這些場合反而是雜訊。' }
  ],
  steps: [
    { label: '同一個事件', text: '演唱會中途下大雨，主辦方宣布取消。' },
    { label: '純事實版', text: 'Heavy rain forced organisers to cancel the concert.（簡潔、客觀。）' },
    { label: '敘事版', text: 'Fans were still singing in the downpour when organisers cancelled the show.（有畫面、有情緒。）' },
    { label: '帶落差版', text: 'The band was preparing for its final song as the announcement came.（暗示可惜。）' },
    { label: '關鍵', text: '三句都正確。選哪一句取決於你寫的是快訊、特寫還是評論。' }
  ],
  comparison: {
    title: '現場 vs 事後',
    left: {
      tag: 'PAST CONTINUOUS', tagCn: '過去進行式', icon: 'eye',
      head: 'inside the moment', headCn: '把讀者放進現場',
      en: 'Crowds were gathering outside the station.',
      cn: '人群正在車站外聚集。',
      pts: ['強調過程、畫面、氛圍', '常配 when / as / still', '敘事新聞、特寫、文學']
    },
    right: {
      tag: 'PAST SIMPLE', tagCn: '過去簡單式', icon: 'book',
      head: 'after the fact', headCn: '把讀者放在事後',
      en: 'About 500 people gathered outside the station.',
      cn: '約五百人在車站外聚集。',
      pts: ['強調結果、數字、定論', '簡潔、客觀', '快訊、報告、法律文件']
    },
    note: '寫作前先確定文體：快訊要簡單式，特寫可以用進行式鋪陳。混用不是錯，但要有理由。'
  },
  quizMore: [
    { q: 'Which sentence creates a sense of being at the scene?', opts: ['The fire destroyed two shops.', 'Shoppers were leaving the building when the alarm sounded.', 'Two shops were destroyed.', 'The alarm sounded at 3 p.m.'], ans: 1,
      expl: '過去進行式鋪陳當時的畫面，讀者像在現場。' },
    { q: 'In a short news summary, which is most appropriate?', opts: ['Officials were confirming the numbers.', 'Officials confirmed 42 injuries.', 'Officials are confirming the numbers.', 'Officials have been confirming the numbers.'], ans: 1,
      expl: '事實摘要用過去簡單式，簡潔客觀。' }
  ]
},

/* ---- 2026-09-02 B2 現在完成式的語域與修辭效果 ---- */
dg20260902b2: {
  vis: true,
  oneLine: '新聞的標準寫法：前導句用現在完成式先給結果，接下來的細節用過去簡單式補時間地點。',
  map: {
    when: '寫新聞、寫正式報告，或要判斷為什麼口語裡有人用過去式取代完成式',
    why: '完成式說「這件事現在還算數」，所以適合當開場；細節一旦有時間就只能用過去式',
    form: '前導句 have / has + Vpp　→　細節 did'
  },
  visual: {
    type: 'chain',
    cap: '這是新聞寫作的固定順序。前導句不給時間（所以能用完成式），細節一旦給了時間就必須換成過去簡單式。',
    links: [
      { t: '前導句：have / has + Vpp', role: 'verb', c: '先給結果，不給時間' },
      { t: '細節：did', role: 'obj', c: '補上時間、地點、數字' },
      { t: '影響：現在式或完成式', role: 'glue', c: '說明現在的狀況' }
    ],
    eg: { en: 'A fire has destroyed a historic market. The blaze started at 3 a.m. and spread quickly. Traders have lost their livelihoods.',
          cn: '大火摧毀了一座歷史市場。火勢凌晨三點起、迅速蔓延。攤商失去了生計。' },
    variants: [
      { k: '前導句：不給時間', en: 'The council has approved the new plan.', cn: '議會已核准新方案。' },
      { k: '細節：給了時間', en: 'Members voted 12–3 on Tuesday.', cn: '議員週二以 12 比 3 表決通過。' },
      { k: '正式報告：至今仍有效', en: 'The policy has remained in force since 2021.', cn: '該政策自 2021 年起持續有效。' },
      { k: '口語（尤其美式）：用過去式講剛發生', en: 'Did you eat yet? / I just ate.', cn: '你吃了嗎？／我剛吃過。' },
      { k: '英式標準說法', en: 'Have you eaten yet? / I have just eaten.', cn: '你吃了嗎？／我剛吃過。' }
    ]
  },
  scenarios: [
    { key: 'lead', icon: 'flag',
      title: 'The news lead', titleCn: '新聞前導句用完成式',
      ask: '你要先給結果還是先給時間？',
      en: 'Police have arrested three people in connection with the fraud.',
      cn: '警方已逮捕三名與該詐騙案有關的人士。',
      why: '前導句刻意不給時間，所以可以用完成式，強調「這件事現在成立」。下一句才補細節：The arrests took place on Friday morning.' },
    { key: 'formal', icon: 'book',
      title: 'Still in force', titleCn: '正式報告：強調至今仍有效',
      ask: '這個狀態現在還持續嗎？',
      en: 'The restriction has applied to all imports since March.',
      cn: '該限制自三月起適用於所有進口貨品。',
      why: '正式報告用完成式表示「至今仍然有效」，常配 since、to date、so far。用過去式 applied 會讓讀者以為已經解除了。' },
    { key: 'regional', icon: 'balance',
      title: 'Regional variation', titleCn: '地區差異，不是錯誤',
      ask: '這是美式還是英式？',
      en: 'I just finished. (US) / I have just finished. (UK)',
      cn: '我剛做完。',
      why: '美式英語口語常用過去簡單式講剛發生的事（Did you eat yet?），英式偏好完成式。這是語域與地區差異，不是文法錯誤——但考試作文建議照英式標準寫。' },
    { key: 'suspense', icon: 'eye',
      title: 'Creating suspense', titleCn: '用完成式製造懸念',
      ask: '你想先講「有事發生」再慢慢說嗎？',
      en: 'Something has changed at the company. Last month, two directors resigned…',
      cn: '這間公司出了變化。上個月兩位董事辭職…',
      why: '完成式不給時間，讀者只知道「有事發生了」，接下來才用過去式一層層攤開。這是報導與長文常用的鋪陳手法。' }
  ],
  steps: [
    { label: '你要寫的新聞', text: '一家工廠爆炸，週三凌晨發生，五人受傷，工廠停工。' },
    { label: '前導句', text: '先給結果、不給時間 → 完成式：An explosion has injured five workers at a factory in Taoyuan.' },
    { label: '細節', text: '有明確時間 → 過去簡單式：The blast occurred at about 2 a.m. on Wednesday.' },
    { label: '現況', text: '影響還在 → 完成式或現在式：Production has been suspended.' },
    { label: '關鍵', text: '不能把前導句寫成 has occurred at 2 a.m.——一旦有明確時間，就只能用過去式。' }
  ],
  comparison: {
    title: '前導句 vs 細節句',
    left: {
      tag: 'LEAD', tagCn: '前導句', icon: 'flag',
      head: 'no time given', headCn: '不給時間',
      en: 'A landslide has closed the highway.',
      cn: '山崩導致公路封閉。',
      pts: ['現在完成式', '強調「現在的結果」', '刻意不講什麼時候']
    },
    right: {
      tag: 'DETAIL', tagCn: '細節句', icon: 'clock',
      head: 'time given', headCn: '補上時間地點',
      en: 'The slide happened just after midnight.',
      cn: '山崩發生在午夜過後。',
      pts: ['過去簡單式', '補時間、地點、數字', '有時間就不能用完成式']
    },
    note: '這個「完成式開場、過去式補述」的順序，幾乎所有英文新聞都照著寫。看懂它，讀新聞會輕鬆很多。'
  },
  quizMore: [
    { q: 'Which works best as a news lead?', opts: ['The mayor resigned at 4 p.m. yesterday.', 'The mayor has resigned.', 'The mayor was resigning.', 'The mayor has resigned at 4 p.m. yesterday.'], ans: 1,
      expl: '前導句不給時間，用現在完成式強調結果；第四個選項把明確時間配完成式，是錯的。' },
    { q: 'Which sentence implies the rule is still in force?', opts: ['The rule applied to all staff.', 'The rule has applied to all staff since April.', 'The rule was applying to all staff.', 'The rule applies yesterday.'], ans: 1,
      expl: 'since + 現在完成式表示至今仍然有效。' }
  ]
}

};
