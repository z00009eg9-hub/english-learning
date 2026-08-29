/* ============================================================
   Visual Grammar System — 視覺化文法教材（2026-08-29 建立）
   ------------------------------------------------------------
   設計原則（使用者指定）：
     一個文法主題 = 多個小型視覺情境 + 核心規則 + 例句
     不再用 1～2 張大型 infographic 承載全部資訊。
     學習動線：SEE → UNDERSTAND → READ → COMPARE → PRACTICE

   ⚠ 這是「資料」，不是 UI。所有圖都由 index.html 的 gv* 元件依 type 產生，
     未來新增文法只要加一筆資料，不用再寫 UI，也不要把 SVG 或圖片網址寫進這裡。

   欄位說明
   ---------------------------------------------------------------
   id / level / title / titleCn      課程識別與標題
   vis:true                          告訴渲染器走視覺化版面（gvHTML）
   oneLine                           Level 1：一句話先理解
   map {when, why, form}             Grammar Meaning Map（WHEN → WHY → FORM）
   timeline {cap, rows[]}            視覺化時間線；row.kind:
                                       'span'  = 從過去延伸到現在（畫線＋箭頭到 NOW）
                                       'point' = 過去一個已結束的點（畫實心點，不碰 NOW）
                                       'range' = 一段還沒結束的期間（畫區間框到 NOW）
   scenarios[]                       4～6 張情境卡：一張圖只回答一個問題
     {key, icon, title, titleCn, ask, en, cn, why}
       icon → index.html 的 GVICON 圖庫代號
       ask  → 這張圖要回答的問題（「什麼時候用？」）
       why  → 點「為什麼？」才展開的解說（漸進揭露）
   comparison {title, left{}, right{}, note}   左右對照
   mistakes[] {bad, good, why, tag}            ❌/✅ 視覺化錯誤
   steps[]  {label, text}                      一步一步理解（Step 1…5）
   quiz[]   {q, opts, ans, expl}               Mini Practice
   ============================================================ */
window.GRAMVIS = [

{
  id: 'gv01',
  vis: true,
  level: 'B2',
  title: 'Present Perfect vs Past Simple',
  titleCn: '現在完成式 vs 過去簡單式',
  summary: '同一件事，說「跟現在有沒有關係」就要換時態：連到現在用 have done，講完結的過去用 did。',

  oneLine: '過去簡單式在講「那時候發生的事」，現在完成式在講「那件事現在還算數」。',

  map: {
    when: '動作發生在過去，但跟現在還有關係（還在持續／留下結果／時間還沒結束）',
    why: '經驗（Experience）／現在的結果（Result）／未完成的時間（Unfinished time）',
    form: 'have / has + 過去分詞（Vpp）'
  },

  timeline: {
    cap: '同一條時間軸上，兩個時態站的位置完全不同：現在完成式的線會碰到 NOW，過去簡單式不會。',
    rows: [
      { kind: 'span', label: 'Present Perfect', tone: 'accent',
        from: 'five years ago', to: 'NOW',
        sub: 'I have lived here for five years.',
        subCn: '我住在這裡五年了（現在還住著）。' },
      { kind: 'point', label: 'Past Simple', tone: 'ink',
        at: 'last year',
        sub: 'I lived in Tainan for two years.',
        subCn: '我在台南住過兩年（現在不住了）。' },
      { kind: 'range', label: 'Unfinished time', tone: 'accent',
        from: 'Monday', to: 'NOW',
        sub: 'I have had three meetings this week.',
        subCn: '我這禮拜開了三場會（這禮拜還沒結束）。' }
    ]
  },

  scenarios: [
    {
      key: 'connection', icon: 'house',
      title: 'Past → Present Connection', titleCn: '過去開始，現在仍然成立',
      ask: '這件事還在繼續嗎？',
      en: 'I have lived here for five years.',
      cn: '我住在這裡五年了。',
      why: '五年前搬進來，到現在還住著——動作沒有結束，所以不能用 I lived here for five years（那句表示「已經搬走了」）。常搭配 for（一段時間）／since（起點）。'
    },
    {
      key: 'experience', icon: 'plane',
      title: 'Life Experience', titleCn: '人生經驗，不強調確切時間',
      ask: '你這輩子做過嗎？',
      en: 'I have been to Japan three times.',
      cn: '我去過日本三次。',
      why: '重點是「有這個經驗」，不是「哪一天去的」。一旦講出確切時間（last year、in 2019），就要換成過去簡單式。常搭配 ever / never / before / times。'
    },
    {
      key: 'result', icon: 'key',
      title: 'Recent Result', titleCn: '過去發生，現在還有結果',
      ask: '現在的狀況是什麼？',
      en: 'I have lost my keys.',
      cn: '我把鑰匙弄丟了。',
      why: '弄丟是過去的動作，但說這句話的重點是「現在進不了家門」。如果說 I lost my keys yesterday，就只是在報告昨天的事，沒有在講現在。'
    },
    {
      key: 'unfinished', icon: 'calendar',
      title: 'Unfinished Time', titleCn: '時間範圍還沒結束',
      ask: '這段時間過完了嗎？',
      en: 'I have had three meetings this week.',
      cn: '我這禮拜開了三場會。',
      why: 'this week / today / this month 都還沒過完，數字還可能再增加，所以用現在完成式。等到週末結束再回頭講，就變成 I had five meetings last week。'
    },
    {
      key: 'finished', icon: 'clock',
      title: 'Finished Time → Past Simple', titleCn: '時間已結束，就回到過去簡單式',
      ask: '這是什麼時候的事？',
      en: 'I went to Japan last year.',
      cn: '我去年去了日本。',
      why: 'last year、yesterday、in 2019、two days ago、when I was a child 都是「關起來的時間」，跟現在切斷了，只能用過去簡單式。'
    }
  ],

  comparison: {
    title: '同一件事，兩種說法',
    left: {
      tag: 'PAST SIMPLE', tagCn: '過去簡單式',
      head: 'finished time', headCn: '時間已經結束',
      icon: 'clock',
      en: 'I went to Japan last year.',
      cn: '我去年去了日本。',
      pts: ['說的是「去年」那一次', '時間關起來了，跟現在無關', '關鍵字：last year / yesterday / ago / in 2019']
    },
    right: {
      tag: 'PRESENT PERFECT', tagCn: '現在完成式',
      head: 'connection to now', headCn: '連到現在',
      icon: 'plane',
      en: 'I have been to Japan three times.',
      cn: '我去過日本三次。',
      pts: ['說的是「到目前為止」的經驗', '沒有指哪一次，重點在現在的我', '關鍵字：ever / never / before / times / so far']
    },
    note: '判斷方式只有一個問題：句子裡的時間，關起來了沒有？關起來 → did；還連著現在 → have done。'
  },

  mistakes: [
    {
      bad: 'I have seen him yesterday.',
      good: 'I saw him yesterday.',
      tag: 'yesterday = 已結束的時間',
      why: 'yesterday 是關起來的時間，不能跟現在完成式一起用。凡是 yesterday / last night / ago / in 2019，一律用過去簡單式。'
    },
    {
      bad: 'I have finished my report two hours ago.',
      good: 'I finished my report two hours ago.',
      tag: 'ago = 已結束的時間',
      why: 'ago 一定往回指一個明確的過去時間點。想強調「現在已經交出去了」，就把 ago 拿掉：I have finished my report.'
    },
    {
      bad: 'Did you ever eat Vietnamese food?',
      good: 'Have you ever eaten Vietnamese food?',
      tag: 'ever = 到目前為止的經驗',
      why: '問「這輩子有沒有過」用現在完成式 Have you ever…？用 Did you ever…？會變成在問某個已經過去的特定時期。'
    },
    {
      bad: 'I have been in Taipei since three years.',
      good: 'I have been in Taipei for three years.',
      tag: 'for 一段時間／since 起點',
      why: 'for + 一段長度（three years、two months）；since + 起點（2023、Monday、I moved here）。這是現在完成式最常錯的搭配。'
    }
  ],

  steps: [
    { label: '情境', text: '你到門口，翻遍口袋——鑰匙不見了。' },
    { label: '英文', text: 'I have lost my keys.' },
    { label: '意思', text: '「弄丟」發生在剛才，但你現在進不了門。' },
    { label: '規則', text: '過去的動作 + 現在的結果 → have / has + 過去分詞。' },
    { label: '比較', text: '如果只是在講昨天發生過什麼事：I lost my keys yesterday.（現在已經找到了也沒差，時間關起來了。）' }
  ],

  quiz: [
    { q: 'I ____ my keys, so I can\'t get into my flat.', opts: ['lost', 'have lost', 'was losing', 'had lost'], ans: 1,
      expl: '重點是「現在進不去」——過去的動作留下現在的結果 → 現在完成式 have lost。' },
    { q: 'I ____ him yesterday.', opts: ['have seen', 'saw', 'have been seeing', 'was seen'], ans: 1,
      expl: 'yesterday 是已經結束的時間，不能配現在完成式 → 過去簡單式 saw。' },
    { q: '____ you ever ____ Vietnamese food?', opts: ['Did / eat', 'Have / eaten', 'Do / eat', 'Have / ate'], ans: 1,
      expl: '問「這輩子有沒有這個經驗」用 Have you ever + 過去分詞；eat 的過去分詞是 eaten。' },
    { q: 'I ____ three meetings this week, and it\'s only Wednesday.', opts: ['had', 'have had', 'was having', 'have been having'], ans: 1,
      expl: 'this week 還沒結束（才星期三），數字還可能增加 → 現在完成式 have had。' },
    { q: 'She ____ in London for two years, but she lives in Taipei now.', opts: ['has lived', 'lived', 'has been living', 'is living'], ans: 1,
      expl: '「現在住台北」表示倫敦那段已經結束、跟現在切斷了 → 過去簡單式 lived。' },
    { q: 'I ____ in Taipei for three years and I\'m still here.', opts: ['live', 'lived', 'have lived', 'had lived'], ans: 2,
      expl: '三年前開始、到現在還住著 → 現在完成式 have lived（for + 一段時間）。' }
  ]
}

];
