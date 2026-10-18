/* ============================================================
   B2 Read 文法影片解說 — gv01（B2 視覺文法：現在完成式 vs 過去簡單式）
   Grammar in Use Unit 13–14（Present perfect and past 1・2）B2
   格式與規則見 b2lab/tools/GVIDEO_SPEC.md
   ============================================================ */
window.GVIDEO = window.GVIDEO || {};
window.GVIDEO_ART = window.GVIDEO_ART || {};

(function(){
  var D='#2b2118', A='#e8813a', C='#fdf6ec', L='#f7e3c9', R='#d9534f', B='#3b82c4', G='#3f9a62', Y='#f2c94c', S='#d6e8f8';
  var st='stroke="'+D+'" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"';
  var th=function(w){ return 'stroke="'+D+'" stroke-width="'+w+'" stroke-linejoin="round" stroke-linecap="round"'; };
  var svg=function(inner){ return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+inner+'</svg>'; };
  var txt=function(x,y,t,sz,col){ return '<text x="'+x+'" y="'+y+'" text-anchor="middle" font-family="Arial,sans-serif" font-weight="700" font-size="'+sz+'" fill="'+(col||D)+'">'+t+'</text>'; };
  var qb=function(cx,cy){ return '<circle cx="'+cx+'" cy="'+cy+'" r="16" fill="'+A+'" '+st+'/>'+txt(cx,cy+7,'?',20,'#fff'); };
  var chk=function(cx,cy,r){ return '<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="'+G+'" '+st+'/><path d="M'+(cx-r*0.45)+' '+cy+' l'+(r*0.32)+' '+(r*0.34)+' l'+(r*0.6)+' -'+(r*0.7)+'" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>'; };
  var cal=function(x,y,w,h){
    var g='<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" rx="8" fill="#fff" '+st+'/>'
      +'<path d="M'+x+' '+(y+22)+' V'+(y+8)+' a8 8 0 0 1 8 -8 H'+(x+w-8)+' a8 8 0 0 1 8 8 V'+(y+22)+' Z" fill="'+R+'" '+st+'/>'
      +'<line x1="'+(x+22)+'" y1="'+(y-7)+'" x2="'+(x+22)+'" y2="'+(y+8)+'" '+th(4)+'/><line x1="'+(x+w-22)+'" y1="'+(y-7)+'" x2="'+(x+w-22)+'" y2="'+(y+8)+'" '+th(4)+'/>';
    for(var r=0;r<3;r++) for(var c=0;c<4;c++) g+='<rect x="'+(x+10+c*(w-20)/4)+'" y="'+(y+30+r*(h-38)/3)+'" width="'+((w-20)/4-6)+'" height="'+((h-38)/3-6)+'" rx="2" fill="'+C+'"/>';
    return g; };

  Object.assign(window.GVIDEO_ART, {
    /* 時間線 1：時間關上了——封好膠帶的紙箱 */
    gv01_closed: svg(
      '<path d="M30 60 L100 40 L170 60 L100 80 Z" fill="#e0b27a" '+st+'/>'
     +'<path d="M30 60 V116 L100 136 V80 Z" fill="#c98b4f" '+st+'/><path d="M170 60 V116 L100 136 V80 Z" fill="#b5793f" '+st+'/>'
     +'<path d="M64 50 L134 70" stroke="'+Y+'" stroke-width="12"/>'
     +'<path d="M30 60 L100 40 L170 60 L100 80 Z" fill="none" '+st+'/>'
     +'<path d="M134 70 V96" stroke="'+Y+'" stroke-width="12"/><path d="M128 70 V98 M140 72 V94" '+th(2)+'/>'),
    /* 時間線 2：時間還開著——打開的箱子，箭頭往右一路延伸 */
    gv01_open: svg(
      '<path d="M20 70 V120 L80 136 V86 Z" fill="#c98b4f" '+st+'/><path d="M140 70 V120 L80 136 V86 Z" fill="#b5793f" '+st+'/>'
     +'<path d="M20 70 L80 86 L140 70 L80 54 Z" fill="#7a4a22" '+st+'/>'
     +'<path d="M20 70 L4 44 L64 28 L80 54 Z" fill="#e0b27a" '+st+'/><path d="M140 70 L160 46 L100 30 L80 54 Z" fill="#e0b27a" '+st+'/>'
     +'<path d="M80 70 Q120 10 186 30" fill="none" stroke="'+G+'" stroke-width="5" stroke-linecap="round" stroke-dasharray="2 10"/>'
     +'<path d="M174 20 L188 30 L174 40" fill="none" '+th(4)+'/>'),
    /* 時間線 3：現在的結果——獎盃＋閃光 */
    gv01_result: svg(
      '<path d="M66 26 H134 V58 a34 34 0 0 1 -68 0 Z" fill="'+Y+'" '+st+'/>'
     +'<path d="M66 36 H48 q0 30 24 32 M134 36 H152 q0 30 -24 32" fill="none" '+th(4)+'/>'
     +'<rect x="92" y="90" width="16" height="18" fill="'+Y+'" '+st+'/><rect x="70" y="108" width="60" height="24" rx="4" fill="#7a4a22" '+st+'/>'
     +'<path d="M86 40 l4 12 l12 0 l-10 8 l4 12 l-10 -7 l-10 7 l4 -12 l-10 -8 l12 0 Z" fill="#fff" '+th(2)+'/>'
     +'<path d="M168 22 l3 -10 l3 10 l10 3 l-10 3 l-3 10 l-3 -10 l-10 -3 Z M30 94 l2 -7 l2 7 l7 2 l-7 2 l-2 7 l-2 -7 l-7 -2 Z" fill="'+A+'" '+th(2)+'/>'),

    /* 情境 1：面試——桌子、筆電、兩張椅子 */
    gv01_office: svg(
      '<line x1="8" y1="134" x2="192" y2="134" '+st+'/>'
     +'<rect x="50" y="76" width="100" height="10" rx="3" fill="#c98b4f" '+st+'/>'
     +'<line x1="60" y1="86" x2="60" y2="134" '+th(4)+'/><line x1="140" y1="86" x2="140" y2="134" '+th(4)+'/>'
     +'<path d="M78 76 L84 50 H120 L126 76 Z" fill="#c9c2b8" '+st+'/><circle cx="102" cy="63" r="4" fill="#fff"/>'
     +'<rect x="124" y="66" width="18" height="10" rx="2" fill="#fff" '+th(2.5)+'/>'
     +'<rect x="10" y="54" width="10" height="50" rx="3" fill="'+B+'" '+st+'/><rect x="10" y="98" width="34" height="9" rx="3" fill="'+B+'" '+st+'/><path d="M14 107 V134 M40 107 V134" '+th(4)+'/>'
     +'<rect x="180" y="54" width="10" height="50" rx="3" fill="'+G+'" '+st+'/><rect x="156" y="98" width="34" height="9" rx="3" fill="'+G+'" '+st+'/><path d="M160 107 V134 M186 107 V134" '+th(4)+'/>'
     +'<rect x="76" y="16" width="48" height="22" rx="4" fill="'+S+'" '+th(2.5)+'/>'),
    /* 情境 2：帶過跨國專案嗎？——地球儀＋問號 */
    gv01_askglobe: svg(
      '<circle cx="84" cy="66" r="44" fill="'+S+'" '+st+'/>'
     +'<path d="M58 40 q14 6 10 20 q-4 10 8 14 q12 4 6 18 M104 30 q-6 14 6 20 q14 6 6 22 q-4 10 6 16" fill="none" stroke="'+G+'" stroke-width="7" stroke-linecap="round"/>'
     +'<circle cx="84" cy="66" r="44" fill="none" '+st+'/>'
     +'<path d="M36 40 a54 54 0 0 0 26 78" fill="none" '+th(4)+'/>'
     +'<line x1="84" y1="112" x2="84" y2="128" '+th(4)+'/><rect x="60" y="126" width="48" height="10" rx="4" fill="#c98b4f" '+st+'/>'
     +qb(168,36)),
    /* 情境 3：跟越南廠做過三個專案——工廠＋三個打勾 */
    gv01_factory: svg(
      '<line x1="6" y1="134" x2="194" y2="134" '+st+'/>'
     +'<path d="M20 134 V76 L52 92 V76 L84 92 V76 L116 92 V134 Z" fill="'+L+'" '+st+'/>'
     +'<rect x="92" y="34" width="16" height="58" fill="#c9c2b8" '+st+'/>'
     +'<path d="M100 26 q-10 -8 0 -14 q12 -4 16 4" fill="none" '+th(2.5)+'/>'
     +'<rect x="34" y="104" width="18" height="30" fill="'+B+'" '+th(2.5)+'/><rect x="64" y="104" width="34" height="14" fill="'+S+'" '+th(2.5)+'/>'
     +chk(146,40,13)+chk(168,74,13)+chk(146,108,13)),
    /* 情境 4：整個職涯到現在——一路往上的階梯，頂端插旗 */
    gv01_career: svg(
      '<path d="M14 134 H50 V110 H86 V86 H122 V62 H158 V38 H186 V134 Z" fill="'+S+'" '+st+'/>'
     +'<line x1="172" y1="38" x2="172" y2="8" '+th(3.5)+'/><path d="M172 8 L194 16 L172 24 Z" fill="'+R+'" '+th(2.5)+'/>'
     +'<path d="M30 124 Q90 120 164 30" fill="none" stroke="'+A+'" stroke-width="4" stroke-linecap="round" stroke-dasharray="2 9"/>'
     +'<circle cx="32" cy="98" r="10" fill="#f6d2b0" '+th(2.5)+'/><path d="M20 128 a12 16 0 0 1 24 0 Z" fill="'+B+'" '+th(2.5)+'/>'),
    /* 情境 5：最近那個什麼時候結束？——月曆＋問號 */
    gv01_askcal: svg(
      cal(30,34,110,98)
     +qb(168,40)),
    /* 情境 6：去年十月結案——終點旗＋OCT */
    gv01_finish: svg(
      '<line x1="40" y1="20" x2="40" y2="136" '+th(4)+'/>'
     +'<rect x="40" y="20" width="96" height="60" fill="#fff" '+st+'/>'
     +'<g fill="'+D+'"><rect x="40" y="20" width="24" height="20"/><rect x="88" y="20" width="24" height="20"/><rect x="64" y="40" width="24" height="20"/><rect x="112" y="40" width="24" height="20"/><rect x="40" y="60" width="24" height="20"/><rect x="88" y="60" width="24" height="20"/></g>'
     +'<rect x="128" y="94" width="62" height="40" rx="8" fill="'+A+'" '+st+'/>'+txt(159,122,'OCT',20,'#fff')
     +'<line x1="10" y1="136" x2="120" y2="136" '+st+'/>'),
    /* 情境 7：時間關上了——月曆鎖上大鎖 */
    gv01_lock: svg(
      cal(18,30,104,96)
     +'<path d="M140 76 V60 a20 20 0 0 1 40 0 V76" fill="none" '+th(6)+'/>'
     +'<rect x="128" y="74" width="64" height="56" rx="8" fill="'+Y+'" '+st+'/>'
     +'<circle cx="160" cy="98" r="6" fill="'+D+'"/><path d="M160 102 V116" '+th(5)+'/>'),
    /* 情境 8：之後有上課嗎？——一疊書＋問號 */
    gv01_askbook: svg(
      '<line x1="10" y1="134" x2="190" y2="134" '+st+'/>'
     +'<rect x="34" y="112" width="104" height="22" rx="3" fill="'+B+'" '+st+'/>'
     +'<rect x="42" y="90" width="92" height="22" rx="3" fill="'+G+'" '+st+'/>'
     +'<rect x="30" y="68" width="98" height="22" rx="3" fill="'+R+'" '+st+'/>'
     +'<path d="M50 120 H120 M56 98 H120 M44 76 H112" stroke="#fff" stroke-width="3" stroke-linecap="round"/>'
     +qb(166,40)),
    /* 情境 9：剛拿到證照——證書＋緞帶封印 */
    gv01_cert: svg(
      '<rect x="18" y="22" width="150" height="104" rx="6" fill="'+C+'" '+st+'/>'
     +'<rect x="28" y="32" width="130" height="84" rx="3" fill="none" stroke="'+A+'" stroke-width="3"/>'
     +'<path d="M52 54 H134 M52 72 H134 M52 90 H104" '+th(3)+'/>'
     +'<path d="M146 100 L136 140 L150 132 L160 144 L164 104 Z" fill="'+R+'" '+st+'/>'
     +'<circle cx="152" cy="100" r="18" fill="'+Y+'" '+st+'/><circle cx="152" cy="100" r="9" fill="none" '+th(2.5)+'/>'),
    /* 情境 10：現在會做資料分析——筆電上的長條圖 */
    gv01_chart: svg(
      '<rect x="36" y="20" width="128" height="86" rx="8" fill="'+D+'" '+st+'/>'
     +'<rect x="44" y="28" width="112" height="70" rx="3" fill="#fff"/>'
     +'<path d="M18 112 H182 L174 128 H26 Z" fill="#c9c2b8" '+st+'/>'
     +'<g '+th(2.5)+'><rect x="58" y="70" width="16" height="22" fill="'+B+'"/><rect x="82" y="58" width="16" height="34" fill="'+G+'"/><rect x="106" y="46" width="16" height="46" fill="'+A+'"/><rect x="130" y="36" width="16" height="56" fill="'+R+'"/></g>'
     +'<line x1="52" y1="92" x2="150" y2="92" '+th(2.5)+'/>')
  });
})();

/* ============================================================
   gv01 — Present Perfect vs Past Simple: Is the Time Closed?
   ============================================================ */
window.GVIDEO.gv01 = {
  kind: 'gram',
  date: '',
  title: 'Is the Time Still Open?',
  titleCn: '現在完成式 vs 過去簡單式：時間關上了沒有？',
  titleArt: ['gv01_closed', 'gv01_open', 'gv01_result'],
  scene: '求職面試 A job interview',
  sceneArt: 'gv01_office',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Alicia', voice: 'f' },
    T: { name: 'Marco', voice: 'm' }
  },
  expr: {
    past: { t: 'V-ed + 結束的時間', cn: '時間關上了 → 過去簡單式', ex: 'The board approved the plan in June.', exCn: '董事會在六月通過了這個計畫。', note: 'yesterday、last…、…ago、in + 年份、When…?' },
    open: { t: 'have / has + p.p.', cn: '時間一路連到現在 → 現在完成式', ex: "I've attended two trade shows this year.", exCn: '我今年已經參加了兩場展覽。', note: 'ever、never、so far、this week、for、since' },
    res:  { t: 'have / has + p.p.（不講時間）', cn: '重點是現在的結果 → 現在完成式', ex: 'The printer has broken down again.', exCn: '印表機又壞了。', note: '一講出 yesterday 這種時間，就換回過去簡單式' }
  },
  chapters: [
    { cn: '開場' }, { cn: '時間關上了沒有？' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  timelineNow: 86,
  timeline: [
    { x: 18, art: 'gv01_closed', lab: '過去簡單式', who: '時間已關上' },
    { x: 44, art: 'gv01_open',   lab: '現在完成式', who: '時間還開著', open: true },
    { x: 68, art: 'gv01_result', lab: '現在的結果', who: '過去做・現在看' }
  ],
  flow: [
    { q: '有提到已經結束的時間嗎？', a: '過去簡單式', en: 'V-ed + yesterday / ago / last…' },
    { q: '時間範圍還連著現在嗎？',   a: '現在完成式', en: 'have / has + p.p. + so far / ever…' },
    { q: '沒講時間，重點是現在的狀況？', a: '現在完成式', en: 'have / has + p.p.（不講時間）' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: '過去的事，什麼時候用過去簡單式，什麼時候用現在完成式？關鍵只有一個：時間關上了沒有。', vis: { type: 'title' } },

    /* ---- 1 核心 ---- */
    { ch: 1, sp: 'N', zh: '先看時間線。最右邊是說話的這一刻。',
      vis: { type: 'timeline', show: 0, kick: 'Is the time closed? 時間關上了嗎？' } },
    { ch: 1, sp: 'N', zh: '時間已經結束，像去年、三天前，就用過去簡單式。',
      hi: [{ t: '過去簡單式', k: 'past', c: 3 }], vis: { type: 'timeline', show: 1, pop: true, kick: 'Is the time closed? 時間關上了嗎？' } },
    { ch: 1, sp: 'A', en: 'We launched the new app last spring.', cn: '我們去年春天推出了新的 app。',
      hi: [{ t: 'launched', cn: '去年春天・已結束', k: 'past', c: 3 }], vis: { type: 'timeline', show: 1, lit: 0, kick: 'Is the time closed? 時間關上了嗎？' } },
    { ch: 1, sp: 'N', zh: '時間一路延伸到現在，像到目前為止、這個月，就用現在完成式。',
      hi: [{ t: '現在完成式', k: 'open', c: 4 }], vis: { type: 'timeline', show: 2, pop: true, kick: 'Is the time closed? 時間關上了嗎？' } },
    { ch: 1, sp: 'T', en: "I've visited our Tokyo office twice this year.", cn: '我今年已經去了東京辦公室兩次。',
      hi: [{ t: "I've visited", cn: '今年還沒過完', k: 'open', c: 4 }], vis: { type: 'timeline', show: 2, lit: 1, kick: 'Is the time closed? 時間關上了嗎？' } },
    { ch: 1, sp: 'N', zh: '看這條虛線：現在完成式的時間連到現在；過去簡單式的時間，早就斷開了。',
      vis: { type: 'timeline', show: 2, dec: true, decText: '時間一路連到現在', kick: 'Is the time closed? 時間關上了嗎？' } },
    { ch: 1, sp: 'N', zh: '還有一種：動作在過去，但重點是現在看得到的結果，也用現在完成式。',
      hi: [{ t: '現在看得到的結果', k: 'res', c: 2 }], vis: { type: 'timeline', show: 3, pop: true, kick: 'Is the time closed? 時間關上了嗎？' } },
    { ch: 1, sp: 'A', en: 'The client has approved the budget, so we can start hiring.', cn: '客戶已經批准預算了，所以我們可以開始招人。',
      hi: [{ t: 'has approved', cn: '結果：現在可以招人', k: 'res', c: 2 }], vis: { type: 'timeline', show: 3, lit: 2, kick: 'Is the time closed? 時間關上了嗎？' } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: '過去簡單式：動詞用過去式，後面常常跟一個明確、已經結束的時間。',
      hi: [{ t: '過去簡單式', k: 'past', c: 3 }],
      vis: { type: 'pattern', kick: 'Past simple 時間已關上', rows: [
        { lab: '時間點',   blocks: [{ t: 'She', k: 's' }, { t: 'left', k: 'v' }, { t: 'the firm', k: 'n' }, { t: 'in March', k: 'o' }] },
        { lab: '多久以前', blocks: [{ t: 'We', k: 's' }, { t: 'signed', k: 'v' }, { t: 'the contract', k: 'n' }, { t: 'two weeks ago', k: 'o' }] }
      ], note: 'yesterday・last year・…ago・in + 年份・when I was…' } },
    { ch: 2, sp: 'N', zh: '現在完成式：have 或 has 加過去分詞，常搭配 ever、never、so far、this week 這種還沒關上的時間。',
      hi: [{ t: '現在完成式', k: 'open', c: 4 }],
      vis: { type: 'pattern', kick: 'Present perfect 時間還開著', rows: [
        { lab: '經驗',     blocks: [{ t: 'I', k: 's' }, { t: 'have never managed', k: 'v' }, { t: 'a remote team', k: 'n' }] },
        { lab: '未完時間', blocks: [{ t: 'We', k: 's' }, { t: 'have hired', k: 'v' }, { t: 'four engineers', k: 'n' }, { t: 'so far', k: 'o' }] }
      ], note: 'for + 一段時間・since + 起點' } },
    { ch: 2, sp: 'N', zh: '問「什麼時候」，要的是結束的時間點，用過去簡單式；問「到目前為止」，用現在完成式。',
      vis: { type: 'pattern', kick: 'When…? vs So far…?', rows: [
        { lab: '問時間點', blocks: [{ t: 'When', k: 'n' }, { t: 'did you move', k: 'v' }, { t: 'to Singapore?', k: 'n' }] },
        { lab: '問到目前', blocks: [{ t: 'How many clients', k: 'n' }, { t: 'have you met', k: 'v' }, { t: 'this week?', k: 'o' }] }
      ], note: 'When…? → 過去簡單式' } },
    { ch: 2, sp: 'N', zh: '常見的訊號字，分兩邊記：關上的時間，和還開著的時間。',
      vis: { type: 'family', kick: 'Time signals 時間訊號字', core: 'Closed or open?', coreCn: '關上了，還是開著？', art: 'gv01_open', items: [
        { t: 'ago · last month', cn: '關上 → 過去式' }, { t: 'when I was…', cn: '關上 → 過去式' },
        { t: 'ever · never · yet', cn: '開著 → 完成式' }, { t: 'so far · this week', cn: '開著 → 完成式' }
      ] } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: 'Alicia 正在面試應徵專案經理的 Marco。注意他們怎麼在兩個時態之間切換。', vis: { type: 'scene', art: 'gv01_office' } },
    { ch: 3, sp: 'A', en: 'Have you ever led a cross-border project?', cn: '你帶過跨國專案嗎？',
      hi: [{ t: 'Have you ever led', cn: '到目前為止的經驗', k: 'open', c: 4 }], vis: { type: 'scene', art: 'gv01_askglobe' } },
    { ch: 3, sp: 'T', en: "Yes, I have. I've managed three projects with our Vietnam plant.", cn: '有，我跟我們越南廠合作，管理過三個專案。',
      hi: [{ t: "I've managed", cn: '職涯到現在', k: 'open', c: 4 }], vis: { type: 'scene', art: 'gv01_factory' } },
    { ch: 3, sp: 'N', zh: '問的是職涯到現在的經驗，沒有指哪一次，所以用現在完成式。',
      hi: [{ t: '現在完成式', k: 'open', c: 4 }], vis: { type: 'scene', art: 'gv01_career' } },
    { ch: 3, sp: 'A', en: 'Interesting. When did the most recent one finish?', cn: '有意思。最近的那一個是什麼時候結束的？',
      hi: [{ t: 'When did', cn: '問時間點', k: 'past', c: 3 }], vis: { type: 'scene', art: 'gv01_askcal' } },
    { ch: 3, sp: 'T', en: 'It wrapped up last October, two weeks ahead of schedule.', cn: '去年十月結案，比預定早了兩週。',
      hi: [{ t: 'wrapped up', cn: '去年十月・已結束', k: 'past', c: 3 }], vis: { type: 'scene', art: 'gv01_finish' } },
    { ch: 3, sp: 'N', zh: '一問「什麼時候」，時間就關上了，所以換回過去簡單式。',
      hi: [{ t: '過去簡單式', k: 'past', c: 3 }], vis: { type: 'scene', art: 'gv01_lock' } },
    { ch: 3, sp: 'A', en: 'And have you taken any courses since then?', cn: '那在那之後，你有上過什麼課程嗎？',
      hi: [{ t: 'have you taken', cn: '從那時到現在', k: 'open', c: 4 }], vis: { type: 'scene', art: 'gv01_askbook' } },
    { ch: 3, sp: 'T', en: "Yes, I've just completed a certificate in data analysis.", cn: '有，我剛完成一個資料分析的證照課程。',
      hi: [{ t: "I've just completed", cn: '剛完成・證照在手上', k: 'res', c: 2 }], vis: { type: 'scene', art: 'gv01_cert' } },
    { ch: 3, sp: 'N', zh: 'since then 一路連到現在；證照現在就在手上，是現在的結果，所以都用現在完成式。',
      hi: [{ t: '現在的結果', k: 'res', c: 2 }], vis: { type: 'scene', art: 'gv01_chart' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '同一件事，看你把時間打開還是關上，時態就跟著變。',
      vis: { type: 'vs', sm: true, kick: '這一季 vs 上一季',
        a: { w: "I've given four presentations this quarter.", def: '這一季我已經做了四場簡報。', cn: '這一季還沒結束 → 完成式' },
        b: { w: 'I gave four presentations last quarter.', def: '上一季我做了四場簡報。', cn: '上一季結束了 → 過去式' } } },
    { ch: 4, sp: 'A', en: "I've given four presentations this quarter.", cn: '這一季我已經做了四場簡報。',
      hi: [{ t: "I've given", cn: '時間還開著', k: 'open', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '這一季 vs 上一季',
        a: { w: "I've given four presentations this quarter.", def: '這一季我已經做了四場簡報。', cn: '這一季還沒結束 → 完成式' },
        b: { w: 'I gave four presentations last quarter.', def: '上一季我做了四場簡報。', cn: '上一季結束了 → 過去式' } } },
    { ch: 4, sp: 'T', en: 'I gave four presentations last quarter.', cn: '上一季我做了四場簡報。',
      hi: [{ t: 'gave', cn: '時間已關上', k: 'past', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '這一季 vs 上一季',
        a: { w: "I've given four presentations this quarter.", def: '這一季我已經做了四場簡報。', cn: '這一季還沒結束 → 完成式' },
        b: { w: 'I gave four presentations last quarter.', def: '上一季我做了四場簡報。', cn: '上一季結束了 → 過去式' } } },
    { ch: 4, sp: 'N', zh: '這一季還在進行，數字可能再增加；上一季已經結束，數字不會再變了。',
      vis: { type: 'vs', sm: true, kick: '這一季 vs 上一季',
        a: { w: "I've given four presentations this quarter.", def: '這一季我已經做了四場簡報。', cn: '這一季還沒結束 → 完成式' },
        b: { w: 'I gave four presentations last quarter.', def: '上一季我做了四場簡報。', cn: '上一季結束了 → 過去式' } } },
    { ch: 4, sp: 'N', zh: '再看一組：一句在講現在連不上網的結果，一句在報告星期一發生的事。',
      vis: { type: 'vs', sm: true, kick: '現在的結果 vs 報告那一天',
        a: { w: 'Someone has changed the Wi-Fi password.', def: '有人把 Wi-Fi 密碼改掉了。', cn: '現在連不上 → 完成式' },
        b: { w: 'IT changed the Wi-Fi password on Monday.', def: '資訊部星期一改了 Wi-Fi 密碼。', cn: '講星期一那件事 → 過去式' } } },
    { ch: 4, sp: 'A', en: 'Someone has changed the Wi-Fi password.', cn: '有人把 Wi-Fi 密碼改掉了。',
      hi: [{ t: 'has changed', cn: '現在的結果', k: 'res', c: 2 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '現在的結果 vs 報告那一天',
        a: { w: 'Someone has changed the Wi-Fi password.', def: '有人把 Wi-Fi 密碼改掉了。', cn: '現在連不上 → 完成式' },
        b: { w: 'IT changed the Wi-Fi password on Monday.', def: '資訊部星期一改了 Wi-Fi 密碼。', cn: '講星期一那件事 → 過去式' } } },
    { ch: 4, sp: 'T', en: 'IT changed the Wi-Fi password on Monday.', cn: '資訊部星期一改了 Wi-Fi 密碼。',
      hi: [{ t: 'changed', cn: '星期一・已結束', k: 'past', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '現在的結果 vs 報告那一天',
        a: { w: 'Someone has changed the Wi-Fi password.', def: '有人把 Wi-Fi 密碼改掉了。', cn: '現在連不上 → 完成式' },
        b: { w: 'IT changed the Wi-Fi password on Monday.', def: '資訊部星期一改了 Wi-Fi 密碼。', cn: '講星期一那件事 → 過去式' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '最後給你一個判斷流程，照順序問自己三個問題。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一問：有已經結束的時間嗎？像昨天、兩年前。有的話，用過去簡單式。',
      hi: [{ t: '過去簡單式', k: 'past', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'A', en: 'Our supplier raised its prices two months ago.', cn: '我們的供應商兩個月前漲價了。',
      hi: [{ t: 'raised', cn: '兩個月前', k: 'past', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二問：時間還連著現在嗎？像這個月、到目前為止。是的話，用現在完成式。',
      hi: [{ t: '現在完成式', k: 'open', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'T', en: "We haven't received any complaints this month.", cn: '這個月我們還沒收到任何客訴。',
      hi: [{ t: "haven't received", cn: '這個月還沒過完', k: 'open', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '第三問：沒講時間，但重點是現在的狀況嗎？是的話，也用現在完成式。',
      hi: [{ t: '現在的狀況', k: 'res', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'A', en: 'The parts have arrived, so the line can restart.', cn: '零件到了，所以產線可以重新開了。',
      hi: [{ t: 'have arrived', cn: '現在的結果', k: 'res', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說說看。看到中文情境，先自己用英文說出來，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：你想跟主管說，這個星期你已經打了兩次電話給那位客戶。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '你想跟主管說，這個星期你已經打了兩次電話給那位客戶。' } },
    { ch: 6, sp: 'A', en: "I've called the client twice this week.", cn: '這個星期我已經打了兩次電話給那位客戶。',
      hi: [{ t: "I've called", cn: '這星期還沒過完 → 完成式', k: 'open', c: 4 }],
      vis: { type: 'speak', n: 1, show: true, sit: '你想跟主管說，這個星期你已經打了兩次電話給那位客戶。', a: "I've called the client twice this week." } },
    { ch: 6, sp: 'N', zh: '情境二：你想說，那位客戶上星期五回了你的信。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '你想說，那位客戶上星期五回了你的信。' } },
    { ch: 6, sp: 'T', en: 'The client replied to my email last Friday.', cn: '那位客戶上星期五回了我的信。',
      hi: [{ t: 'replied', cn: '上星期五 → 過去式', k: 'past', c: 3 }],
      vis: { type: 'speak', n: 2, show: true, sit: '你想說，那位客戶上星期五回了你的信。', a: 'The client replied to my email last Friday.' } },
    { ch: 6, sp: 'N', zh: '情境三：你想跟主管說，報告已經寄出去了，所以他現在就可以看。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '你想跟主管說，報告已經寄出去了，所以他現在就可以看。' } },
    { ch: 6, sp: 'A', en: "I've sent the report, so you can read it now.", cn: '我已經把報告寄出去了，所以你現在就可以看。',
      hi: [{ t: "I've sent", cn: '現在的結果 → 完成式', k: 'res', c: 2 }],
      vis: { type: 'speak', n: 3, show: true, sit: '你想跟主管說，報告已經寄出去了，所以他現在就可以看。', a: "I've sent the report, so you can read it now." } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結一下：時間已經關上，用過去簡單式；時間還開著，或重點是現在的結果，用現在完成式。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '下次開口之前，先問自己一句：我講的這段時間，關起來了沒有？', vis: { type: 'end' } }
  ]
};
