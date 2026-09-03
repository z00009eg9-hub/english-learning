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
}

};
