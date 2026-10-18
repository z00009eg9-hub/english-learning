/* ============================================================
   B2 Read 文法影片解說 — g13 轉述句（Reported Speech，B2）
   格式與規則見 b2lab/tools/GVIDEO_SPEC.md；範本 gvideo/dg20261014b1.js。
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
  /* 小人：頭＋肩膀（cx,cy＝頭的中心） */
  var man=function(cx,cy,shirt,hair){
    return '<path d="M'+(cx-24)+' '+(cy+50)+' q0 -30 24 -30 q24 0 24 30 Z" fill="'+shirt+'" '+st+'/>'
      +'<circle cx="'+cx+'" cy="'+cy+'" r="15" fill="'+L+'" '+st+'/>'
      +'<path d="M'+(cx-15)+' '+(cy-2)+' a15 15 0 0 1 30 0 q-8 -6 -15 -5 q-8 1 -15 5 Z" fill="'+hair+'" '+th(2.5)+'/>'; };
  var bubble=function(x,y,w,h,fill,left){
    var tx=left?x+24:x+w-24, dir=left?-1:1;
    return '<path d="M'+(x+10)+' '+y+' H'+(x+w-10)+' a10 10 0 0 1 10 10 V'+(y+h-10)+' a10 10 0 0 1 -10 10 H'+(tx+8)+' L'+(tx+dir*10)+' '+(y+h+16)+' L'+(tx-8)+' '+(y+h)+' H'+(x+10)+' a10 10 0 0 1 -10 -10 V'+(y+10)+' a10 10 0 0 1 10 -10 Z" fill="'+fill+'" '+st+'/>'; };
  var lines=function(x,y,ws){ var g=''; ws.forEach(function(w,i){ g+='<rect x="'+x+'" y="'+(y+i*12)+'" width="'+w+'" height="6" rx="3" fill="'+D+'" opacity=".35"/>'; }); return g; };

  Object.assign(window.GVIDEO_ART, {
    /* 核心 1：陳述句——對話框往回退一格（時鐘＋往左箭頭） */
    g13_bubble: svg(
      bubble(18,16,118,70,'#fff',true)
     +lines(34,34,[84,66,76])
     +'<circle cx="164" cy="48" r="22" fill="#fff" '+st+'/><path d="M164 48 V34 M164 48 L174 54" fill="none" '+th(3.5)+'/>'
     +'<path d="M182 126 H96" fill="none" stroke="'+A+'" stroke-width="7" stroke-linecap="round"/>'
     +'<path d="M112 112 L94 126 L112 140" fill="none" stroke="'+A+'" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>'),
    /* 核心 2：問句——問號泡泡變成整齊的直述句 */
    g13_question: svg(
      bubble(12,22,70,62,S,true)
     +txt(47,68,'?',40)
     +'<path d="M92 60 H118" fill="none" '+th(4)+'/><path d="M110 50 L122 60 L110 70" fill="none" '+th(4)+'/>'
     +'<rect x="128" y="26" width="62" height="74" rx="8" fill="#fff" '+st+'/>'
     +lines(138,40,[42,34,40,26])
),
    /* 核心 3：請求與指示——主管拿清單交代事情 */
    g13_request: svg(
      man(56,52,B,D)
     +'<rect x="104" y="30" width="66" height="90" rx="8" fill="'+L+'" '+st+'/>'
     +'<rect x="124" y="22" width="26" height="14" rx="4" fill="#c9c2b8" '+st+'/>'
     +'<rect x="114" y="46" width="46" height="66" rx="3" fill="#fff" '+th(2.5)+'/>'
     +'<path d="M120 58 l4 4 l8 -8 M120 78 l4 4 l8 -8" fill="none" stroke="'+G+'" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>'
     +'<rect x="120" y="94" width="10" height="10" rx="2" fill="none" '+th(2.5)+'/>'
     +lines(138,56,[16,16,16])
     +'<path d="M78 92 Q92 88 102 80" fill="none" '+th(4)+'/>'),

    /* 情境 0：錯過週會——會議桌與空椅子 */
    g13_meeting: svg(
      '<rect x="24" y="16" width="152" height="40" rx="5" fill="'+S+'" '+st+'/>'
     +'<path d="M40 44 L64 30 L84 40 L110 24 L136 36 L160 28" fill="none" stroke="'+B+'" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>'
     +'<path d="M26 96 H174 L162 112 H38 Z" fill="#c98d5a" '+st+'/>'
     +'<line x1="52" y1="112" x2="52" y2="138" '+th(4)+'/><line x1="148" y1="112" x2="148" y2="138" '+th(4)+'/>'
     +'<rect x="40" y="70" width="24" height="26" rx="5" fill="'+A+'" '+st+'/><rect x="88" y="70" width="24" height="26" rx="5" fill="'+R+'" '+st+'/><rect x="136" y="70" width="24" height="26" rx="5" fill="'+G+'" '+st+'/>'
     +'<rect x="70" y="88" width="18" height="10" rx="2" fill="#fff" '+th(2)+'/><rect x="118" y="88" width="18" height="10" rx="2" fill="#fff" '+th(2)+'/>'),
    /* 情境 1：我錯過會議了——時鐘＋問號 */
    g13_clock: svg(
      '<circle cx="86" cy="80" r="50" fill="#fff" '+th(4)+'/>'
     +'<g '+th(4)+'><line x1="86" y1="36" x2="86" y2="44"/><line x1="130" y1="80" x2="122" y2="80"/><line x1="86" y1="124" x2="86" y2="116"/><line x1="42" y1="80" x2="50" y2="80"/></g>'
     +'<line x1="86" y1="80" x2="86" y2="50" '+th(4)+'/><line x1="86" y1="80" x2="110" y2="80" stroke="'+A+'" stroke-width="6" stroke-linecap="round"/>'
     +'<circle cx="86" cy="80" r="5" fill="'+D+'"/>'
     +'<path d="M50 30 l-10 -10 M122 30 l10 -10" '+th(4)+'/>'
     +qb(160,40)),
    /* 情境 2：客戶來電想延後截止日——手機＋月曆往後推 */
    g13_phonecall: svg(
      '<rect x="18" y="26" width="52" height="94" rx="10" fill="'+D+'" '+st+'/><rect x="24" y="36" width="40" height="72" rx="3" fill="'+S+'"/>'
     +'<circle cx="44" cy="62" r="12" fill="'+L+'" '+th(2.5)+'/><rect x="32" y="80" width="24" height="16" rx="4" fill="'+G+'" '+th(2.5)+'/>'
     +'<path d="M76 34 q8 8 0 16 M84 28 q12 14 0 28" fill="none" '+th(3)+'/>'
     +cal(96,34,62,66)
     +'<path d="M104 124 H176" fill="none" stroke="'+A+'" stroke-width="6" stroke-linecap="round"/>'
     +'<path d="M164 114 L178 124 L164 134" fill="none" stroke="'+A+'" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>'),
    /* 情境 3：I want → he wanted——現在的牌子翻到過去 */
    g13_shift: svg(
      '<rect x="18" y="40" width="64" height="64" rx="10" fill="'+G+'" '+st+'/>'
     +'<circle cx="50" cy="72" r="20" fill="#fff" '+th(2.5)+'/><path d="M50 72 V60 M50 72 L58 76" fill="none" '+th(2.5)+'/>'
     +'<rect x="118" y="40" width="64" height="64" rx="10" fill="#c9c2b8" '+st+'/>'
     +'<circle cx="150" cy="72" r="20" fill="#fff" '+th(2.5)+'/><path d="M150 72 V60 M150 72 L140 66" fill="none" '+th(2.5)+'/>'
     +'<path d="M88 72 H110" fill="none" stroke="'+A+'" stroke-width="6" stroke-linecap="round"/>'
     +'<path d="M102 62 L112 72 L102 82" fill="none" stroke="'+A+'" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>'
     +'<rect x="30" y="116" width="40" height="8" rx="4" fill="'+G+'"/><rect x="130" y="116" width="40" height="8" rx="4" fill="#c9c2b8"/>'),
    /* 情境 4：他有說為什麼嗎？——兩個人＋問號 */
    g13_whyq: svg(
      man(56,62,A,'#5a3b22')
     +man(126,62,B,D)
     +bubble(84,8,52,32,'#fff',true)
     +txt(110,32,'why?',14)
     +qb(176,30)),
    /* 情境 5：工廠停工兩天——煙囪不冒煙的工廠＋停止牌 */
    g13_factory: svg(
      '<line x1="8" y1="132" x2="192" y2="132" '+st+'/>'
     +'<path d="M20 132 V74 L52 56 V74 L84 56 V74 L116 56 V132 Z" fill="'+L+'" '+st+'/>'
     +'<rect x="96" y="30" width="16" height="44" fill="#c9c2b8" '+st+'/>'
     +'<rect x="32" y="92" width="18" height="16" fill="'+S+'" '+st+'/><rect x="62" y="92" width="18" height="16" fill="'+S+'" '+st+'/>'
     +'<rect x="88" y="104" width="18" height="28" fill="#c98d5a" '+st+'/>'
     +'<path d="M146 54 L162 54 L174 66 L174 82 L162 94 L146 94 L134 82 L134 66 Z" fill="'+R+'" '+st+'/>'
     +'<line x1="144" y1="74" x2="164" y2="74" stroke="#fff" stroke-width="6" stroke-linecap="round"/>'
     +'<line x1="154" y1="94" x2="154" y2="132" '+th(4)+'/>'),
    /* 情境 6：Kate 問能不能帶訓練——白板＋椅子 */
    g13_training: svg(
      '<rect x="40" y="14" width="120" height="74" rx="6" fill="#fff" '+st+'/>'
     +'<line x1="100" y1="88" x2="84" y2="114" '+th(4)+'/><line x1="100" y1="88" x2="116" y2="114" '+th(4)+'/>'
     +'<path d="M56 64 L76 46 L96 56 L120 34 L142 44" fill="none" stroke="'+G+'" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>'
     +'<rect x="56" y="30" width="30" height="6" rx="3" fill="'+B+'"/>'
     +'<g fill="'+A+'" '+st+'><rect x="22" y="112" width="26" height="12" rx="3"/><rect x="152" y="112" width="26" height="12" rx="3"/></g>'
     +'<line x1="26" y1="124" x2="26" y2="140" '+th(3)+'/><line x1="44" y1="124" x2="44" y2="140" '+th(3)+'/><line x1="156" y1="124" x2="156" y2="140" '+th(3)+'/><line x1="174" y1="124" x2="174" y2="140" '+th(3)+'/>'
     +'<rect x="22" y="94" width="5" height="20" fill="'+A+'" '+th(2.5)+'/><rect x="173" y="94" width="5" height="20" fill="'+A+'" '+th(2.5)+'/>'),
    /* 情境 7：是非問句 → asked if——問號分成「是／否」兩條路 */
    g13_yesno: svg(
      qb(100,32)
     +'<path d="M100 50 V70 M100 70 L54 92 M100 70 L146 92" fill="none" '+th(4)+'/>'
     +chk(50,110,20)
     +'<circle cx="150" cy="110" r="20" fill="'+R+'" '+st+'/>'
     +'<path d="M142 102 L158 118 M158 102 L142 118" stroke="#fff" stroke-width="4" stroke-linecap="round"/>'),
    /* 情境 8：星期五前交報告——一疊報告＋月曆 FRI */
    g13_report: svg(
      '<rect x="30" y="54" width="76" height="80" rx="4" fill="#fff" '+st+'/>'
     +'<rect x="24" y="46" width="76" height="80" rx="4" fill="#fff" '+st+'/>'
     +'<rect x="18" y="38" width="76" height="80" rx="4" fill="#fff" '+st+'/>'
     +'<rect x="30" y="52" width="40" height="8" rx="3" fill="'+B+'"/>'
     +lines(30,70,[52,44,52,36])
     +'<rect x="118" y="40" width="64" height="62" rx="7" fill="#fff" '+st+'/>'
     +'<path d="M118 60 V47 a7 7 0 0 1 7 -7 H175 a7 7 0 0 1 7 7 V60 Z" fill="'+R+'" '+st+'/>'
     +txt(150,90,'FRI',18)),
    /* 情境 9：老闆下指示——擴音器 */
    g13_order: svg(
      '<path d="M40 60 L100 30 V120 L40 90 Z" fill="'+A+'" '+st+'/>'
     +'<rect x="20" y="58" width="22" height="34" rx="4" fill="'+L+'" '+st+'/>'
     +'<path d="M54 92 L62 126 H78 L72 98" fill="'+L+'" '+st+'/>'
     +'<ellipse cx="100" cy="75" rx="10" ry="45" fill="'+Y+'" '+st+'/>'
     +'<path d="M126 52 q14 23 0 46 M144 38 q24 37 0 74" fill="none" '+th(4)+'/>'
     +'<path d="M162 30 l10 -8 M164 120 l10 8" '+th(4)+'/>')
  });
})();

/* ============================================================
   g13 — Reported Speech（轉述句，B2）
   Grammar in Use：Reported speech（said / told / asked）＋ reported questions
   ============================================================ */
window.GVIDEO.g13 = {
  kind: 'gram',
  date: '',
  title: 'Reported Speech',
  titleCn: '轉述句：陳述、問句、請求三種轉法',
  titleArt: ['g13_bubble', 'g13_question', 'g13_request'],
  scene: '錯過週會 Missed the meeting',
  sceneArt: 'g13_meeting',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Iris', voice: 'f' },
    T: { name: 'Derek', voice: 'm' }
  },
  expr: {
    shift: { t: 'said (that) + 退一格', cn: '轉述陳述句：時態往回退一格', ex: 'Grace said she had lost her badge again.', exCn: 'Grace 說她又把識別證弄丟了。', note: 'am → was、will → would、can → could、have done → had done' },
    quest: { t: 'asked if / 疑問詞 + 直述語序', cn: '轉述問句：主詞放回動詞前面', ex: 'He asked whether the parking lot was free.', exCn: '他問停車場是不是免費的。', note: '是非問句用 if 或 whether；有疑問詞就保留疑問詞' },
    req:   { t: 'ask / tell + 人 + to V', cn: '轉述請求、指示', ex: 'The coach told us to warm up first.', exCn: '教練叫我們先暖身。', note: '叫人不要做：tell + 人 + not to V' }
  },
  chapters: [
    { cn: '開場' }, { cn: '先看原話是哪一種' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  cardsKick: '轉述前先看原話',
  cards: [
    { art: 'g13_bubble',   lab: '陳述句',   who: '時態往回退一格' },
    { art: 'g13_question', lab: '問句',     who: 'if・疑問詞＋直述' },
    { art: 'g13_request',  lab: '請求與指示', who: 'ask/tell 人 to V' }
  ],
  flow: [
    { q: '原話是一般的陳述嗎？',     a: '退一格',    en: 'said (that) + 退一格的句子' },
    { q: '原話是問句嗎？',           a: 'if／疑問詞', en: 'asked + if / 疑問詞 + 主詞 + 動詞' },
    { q: '原話是請求或指示嗎？',     a: 'to + 原形', en: 'asked / told + 人 + (not) to V' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: '把別人的話轉告給第三個人，英文要動點手腳。來看轉述句的三種情況。', vis: { type: 'title' } },

    /* ---- 1 核心：先看原話是哪一種 ---- */
    { ch: 1, sp: 'N', zh: '轉述之前，先看原話是哪一種：一般的陳述、問句，還是請求。', vis: { type: 'cards', show: 0 } },
    { ch: 1, sp: 'N', zh: '第一種是陳述句。那句話是之前說的，所以動詞通常往回退一格。',
      hi: [{ t: '往回退一格', k: 'shift', c: 3 }], vis: { type: 'cards', show: 1, pop: true } },
    { ch: 1, sp: 'A', en: 'Our manager said the budget meeting had been moved to Thursday.', cn: '我們經理說預算會議改到星期四了。',
      hi: [{ t: 'had been moved', cn: '退一格', k: 'shift', c: 3 }], vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'N', zh: '第二種是問句。是非問句用 asked if；有疑問詞就留著，後面改成主詞在前。',
      hi: [{ t: 'asked if', k: 'quest', c: 4 }], vis: { type: 'cards', show: 2, pop: true } },
    { ch: 1, sp: 'T', en: 'The client asked where we were planning to hold the launch.', cn: '客戶問我們打算在哪裡辦發表會。',
      hi: [{ t: 'where we were planning', cn: '主詞在動詞前', k: 'quest', c: 4 }], vis: { type: 'cards', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: '第三種是請求或指示，用 ask 或 tell 加人，再加 to 和原形動詞。',
      hi: [{ t: 'to 和原形動詞', k: 'req', c: 2 }], vis: { type: 'cards', show: 3, pop: true } },
    { ch: 1, sp: 'A', en: 'Sam asked me to check the contract again before lunch.', cn: 'Sam 請我午餐前再檢查一次合約。',
      hi: [{ t: 'asked me to check', cn: '請求 → to V', k: 'req', c: 2 }], vis: { type: 'cards', show: 3, lit: 2 } },
    { ch: 1, sp: 'N', zh: '三種都要拿掉引號，人稱和時間詞也常跟著換。', vis: { type: 'cards', show: 3 } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: '陳述句：said 後面的 that 可以省略，接退一格的句子，人稱也跟著換。',
      hi: [{ t: '退一格', k: 'shift', c: 3 }],
      vis: { type: 'pattern', kick: 'Statements 轉述陳述句', rows: [
        { lab: '原話', blocks: [{ t: '"I', k: 's' }, { t: "can't", k: 'v' }, { t: 'make it."', k: 'o' }] },
        { lab: '轉述', blocks: [{ t: 'Leo said (that)', k: 'n' }, { t: 'he', k: 's' }, { t: "couldn't", k: 'v' }, { t: 'make it', k: 'o' }] }
      ], note: 'can → could、will → would、am → was' } },
    { ch: 2, sp: 'N', zh: 'say 和 tell 都能轉述，差別是 tell 後面一定先接人，say 直接接內容。',
      vis: { type: 'pattern', kick: 'say 還是 tell？', rows: [
        { lab: 'say', blocks: [{ t: 'She', k: 's' }, { t: 'said', k: 'v' }, { t: '(that) the room was booked', k: 'o' }] },
        { lab: 'tell', blocks: [{ t: 'She', k: 's' }, { t: 'told', k: 'v' }, { t: 'me', k: 'n', add: true }, { t: '(that) the room was booked', k: 'o' }] }
      ], note: 'say 要提到對象，就加 to：said to me' } },
    { ch: 2, sp: 'N', zh: '問句是 asked 加 if 或疑問詞，主詞在前；請求是 asked 加人，再加 to。',
      hi: [{ t: 'asked 加 if 或疑問詞', k: 'quest', c: 4 }],
      vis: { type: 'pattern', kick: 'Questions & requests 問句與請求', rows: [
        { lab: '是非問句', blocks: [{ t: 'She asked', k: 'v' }, { t: 'if', k: 'n' }, { t: 'I', k: 's' }, { t: 'had a car', k: 'o' }] },
        { lab: '疑問詞', blocks: [{ t: 'She asked', k: 'v' }, { t: 'when', k: 'n' }, { t: 'the shuttle', k: 's' }, { t: 'left', k: 'o' }] },
        { lab: '請求', blocks: [{ t: 'She asked', k: 'v' }, { t: 'me', k: 'n' }, { t: 'to wait outside', k: 'o' }] }
      ] } },
    { ch: 2, sp: 'N', zh: '常用的轉述動詞分三組：像 say 的、像 tell 的，還有轉述問句的。',
      vis: { type: 'family', kick: 'Reporting verbs 轉述動詞', core: 'Reporting verbs', coreCn: '轉述常用動詞', art: 'g13_bubble', items: [
        { t: 'say · explain · mention', cn: '直接接內容' }, { t: 'tell · remind', cn: '先接人' }, { t: 'ask · wonder', cn: '轉述問句' }
      ] } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: 'Derek 早上去看牙醫，錯過週會。來聽 Iris 怎麼轉述給他。', vis: { type: 'scene', art: 'g13_meeting' } },
    { ch: 3, sp: 'T', en: 'Hi, Iris. I missed the meeting. Did I miss anything important?', cn: '嗨 Iris，我沒去開會，有錯過什麼重要的事嗎？', vis: { type: 'scene', art: 'g13_clock' } },
    { ch: 3, sp: 'A', en: 'Mr. Ortiz called and said he wanted to push back the deadline.', cn: 'Ortiz 先生打來，說他想把截止日往後延。',
      hi: [{ t: 'said he wanted', cn: 'want → wanted', k: 'shift', c: 3 }], vis: { type: 'scene', art: 'g13_phonecall' } },
    { ch: 3, sp: 'N', zh: '原話是 I want，Iris 轉述時退一格，變成 he wanted。',
      hi: [{ t: 'he wanted', k: 'shift', c: 3 }], vis: { type: 'scene', art: 'g13_shift' } },
    { ch: 3, sp: 'T', en: 'Really? Did he tell you why?', cn: '真的？他有跟你說原因嗎？', vis: { type: 'scene', art: 'g13_whyq' } },
    { ch: 3, sp: 'A', en: 'He told me their factory had shut down for two days.', cn: '他跟我說他們工廠停工了兩天。',
      hi: [{ t: 'told me', cn: 'tell 後面接人', c: 1 }, { t: 'had shut down', cn: '退一格', k: 'shift', c: 3 }], vis: { type: 'scene', art: 'g13_factory' } },
    { ch: 3, sp: 'A', en: 'Oh, and Kate asked if you could lead the training on Thursday.', cn: '對了，Kate 問你星期四能不能帶新人訓練。',
      hi: [{ t: 'asked if you could', cn: '是非問句', k: 'quest', c: 4 }], vis: { type: 'scene', art: 'g13_training' } },
    { ch: 3, sp: 'N', zh: 'Kate 原本問 Can you，是是非問句，所以轉述成 asked if，後面變回 you could。',
      hi: [{ t: 'asked if', k: 'quest', c: 4 }], vis: { type: 'scene', art: 'g13_yesno' } },
    { ch: 3, sp: 'A', en: 'And the boss told everyone to send in their reports by Friday.', cn: '還有，老闆叫大家星期五前把報告交出來。',
      hi: [{ t: 'told everyone to send', cn: '指示 → to V', k: 'req', c: 2 }], vis: { type: 'scene', art: 'g13_report' } },
    { ch: 3, sp: 'N', zh: '老闆在下指示，所以用 told 加人，再加 to send。',
      hi: [{ t: 'to send', k: 'req', c: 2 }], vis: { type: 'scene', art: 'g13_order' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '一定要退一格嗎？如果那件事到現在還是真的，不退也可以。',
      vis: { type: 'vs', sm: true, kick: '退一格，還是不退？',
        a: { w: 'Ella said the café was closed on Mondays.', def: 'Ella 說那家咖啡店星期一公休。', cn: '照平常的方式退一格' },
        b: { w: 'Ella said the café is closed on Mondays.', def: 'Ella 說那家咖啡店星期一公休。', cn: '現在仍是這樣，可以不退' } } },
    { ch: 4, sp: 'A', en: 'Ella said the café was closed on Mondays.', cn: 'Ella 說那家咖啡店星期一公休。',
      hi: [{ t: 'was closed', cn: '退一格', k: 'shift', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '退一格，還是不退？',
        a: { w: 'Ella said the café was closed on Mondays.', def: 'Ella 說那家咖啡店星期一公休。', cn: '照平常的方式退一格' },
        b: { w: 'Ella said the café is closed on Mondays.', def: 'Ella 說那家咖啡店星期一公休。', cn: '現在仍是這樣，可以不退' } } },
    { ch: 4, sp: 'T', en: 'Ella said the café is closed on Mondays.', cn: 'Ella 說那家咖啡店星期一公休。',
      hi: [{ t: 'is closed', cn: '現在還是這樣', c: 1 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '退一格，還是不退？',
        a: { w: 'Ella said the café was closed on Mondays.', def: 'Ella 說那家咖啡店星期一公休。', cn: '照平常的方式退一格' },
        b: { w: 'Ella said the café is closed on Mondays.', def: 'Ella 說那家咖啡店星期一公休。', cn: '現在仍是這樣，可以不退' } } },
    { ch: 4, sp: 'N', zh: '兩句都對。咖啡店現在還是星期一公休，第二句保留 is，強調到現在都成立。',
      vis: { type: 'vs', sm: true, kick: '退一格，還是不退？',
        a: { w: 'Ella said the café was closed on Mondays.', def: 'Ella 說那家咖啡店星期一公休。', cn: '照平常的方式退一格' },
        b: { w: 'Ella said the café is closed on Mondays.', def: 'Ella 說那家咖啡店星期一公休。', cn: '現在仍是這樣，可以不退' } } },
    { ch: 4, sp: 'N', zh: '再看一組。意思一樣，差在 tell 要先說出聽的人。',
      vis: { type: 'vs', sm: true, kick: 'say 跟 tell',
        a: { w: 'He said the printer was fixed.', def: '他說印表機修好了。', cn: 'said 後面直接接內容' },
        b: { w: 'He told us the printer was fixed.', def: '他跟我們說印表機修好了。', cn: 'told 後面先接人' } } },
    { ch: 4, sp: 'A', en: 'He said the printer was fixed.', cn: '他說印表機修好了。',
      hi: [{ t: 'said', cn: '直接接內容', c: 1 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: 'say 跟 tell',
        a: { w: 'He said the printer was fixed.', def: '他說印表機修好了。', cn: 'said 後面直接接內容' },
        b: { w: 'He told us the printer was fixed.', def: '他跟我們說印表機修好了。', cn: 'told 後面先接人' } } },
    { ch: 4, sp: 'T', en: 'He told us the printer was fixed.', cn: '他跟我們說印表機修好了。',
      hi: [{ t: 'told us', cn: '先接人', c: 1 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: 'say 跟 tell',
        a: { w: 'He said the printer was fixed.', def: '他說印表機修好了。', cn: 'said 後面直接接內容' },
        b: { w: 'He told us the printer was fixed.', def: '他跟我們說印表機修好了。', cn: 'told 後面先接人' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '最後給你一個判斷流程，轉述前照順序問三個問題。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一問：原話是陳述嗎？是的話，用 said，動詞往回退一格。',
      hi: [{ t: '往回退一格', k: 'shift', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'A', en: 'Tom said he had already paid the bill.', cn: 'Tom 說他已經付過帳了。',
      hi: [{ t: 'had already paid', cn: 'have paid → had paid', k: 'shift', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二問：是問句嗎？用 asked 加 if 或疑問詞，主詞在前。',
      hi: [{ t: 'asked 加 if 或疑問詞', k: 'quest', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'T', en: 'My new neighbor asked how long I had lived here.', cn: '我的新鄰居問我在這裡住多久了。',
      hi: [{ t: 'how long I had lived', cn: '疑問詞＋主詞', k: 'quest', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '第三問：是請求或指示嗎？用 ask 或 tell 加人加 to；叫人不要做，就說 not to。',
      hi: [{ t: 'not to', k: 'req', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'A', en: 'The nurse told me not to eat anything after midnight.', cn: '護理師叫我半夜十二點以後什麼都不要吃。',
      hi: [{ t: 'told me not to eat', cn: '叫人不要做', k: 'req', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說說看。看到情境，先自己轉述，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：同事 Leo 昨天說他身體不舒服，你今天轉述給主管聽。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '同事 Leo 昨天說他身體不舒服，你今天轉述給主管聽。' } },
    { ch: 6, sp: 'A', en: "Leo said he wasn't feeling well.", cn: 'Leo 說他身體不太舒服。',
      hi: [{ t: "wasn't feeling", cn: "isn't → wasn't", k: 'shift', c: 3 }],
      vis: { type: 'speak', n: 1, show: true, sit: '同事 Leo 昨天說他身體不舒服，你今天轉述給主管聽。', a: "Leo said he wasn't feeling well." } },
    { ch: 6, sp: 'N', zh: '情境二：房東問你什麼時候要搬走，你轉述給室友聽。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '房東問你什麼時候要搬走，你轉述給室友聽。' } },
    { ch: 6, sp: 'T', en: 'The landlord asked me when I was moving out.', cn: '房東問我什麼時候要搬走。',
      hi: [{ t: 'when I was moving out', cn: '疑問詞＋主詞＋動詞', k: 'quest', c: 4 }],
      vis: { type: 'speak', n: 2, show: true, sit: '房東問你什麼時候要搬走，你轉述給室友聽。', a: 'The landlord asked me when I was moving out.' } },
    { ch: 6, sp: 'N', zh: '情境三：主管請你把簡報檔寄給大家，你轉述給同事聽。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '主管請你把簡報檔寄給大家，你轉述給同事聽。' } },
    { ch: 6, sp: 'A', en: 'My manager asked me to send the slides to everyone.', cn: '我主管請我把簡報檔寄給大家。',
      hi: [{ t: 'asked me to send', cn: '請求 → to V', k: 'req', c: 2 }],
      vis: { type: 'speak', n: 3, show: true, sit: '主管請你把簡報檔寄給大家，你轉述給同事聽。', a: 'My manager asked me to send the slides to everyone.' } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結：陳述句退一格；問句用 if 或疑問詞，主詞在前；請求用 ask 或 tell 加人加 to。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '下次轉述別人的話，先看原話是陳述、問句，還是請求。', vis: { type: 'end' } }
  ]
};
