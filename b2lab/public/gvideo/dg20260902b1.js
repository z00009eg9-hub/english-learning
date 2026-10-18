/* ============================================================
   B2 Read 文法影片解說 — dg20260902b1（Unit 7，B1）
   格式與規則見 b2lab/tools/GVIDEO_SPEC.md；範本 gvideo/dg20261014b1.js。
   完成式單元：timelineNow 把「現在」放右邊，項目放在左邊的過去。
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
  /* 水餃：月牙形＋上緣褶子 */
  var dump=function(cx,cy,s){
    return '<g transform="translate('+cx+' '+cy+') scale('+s+')">'
      +'<path d="M-40 10 Q-36 -30 0 -30 Q36 -30 40 10 Q0 22 -40 10 Z" fill="#fffaf0" '+st+'/>'
      +'<path d="M-22 -22 l4 10 M-8 -28 l2 11 M8 -28 l-2 11 M22 -22 l-4 10" fill="none" '+th(2.5)+'/></g>'; };
  /* 高麗菜 */
  var cab=function(cx,cy,r){
    return '<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="#a8d58f" '+st+'/>'
      +'<path d="M'+(cx-r*0.7)+' '+(cy-r*0.2)+' Q'+cx+' '+(cy-r*0.9)+' '+(cx+r*0.7)+' '+(cy-r*0.2)+'" fill="none" '+th(2.5)+'/>'
      +'<path d="M'+(cx-r*0.5)+' '+(cy+r*0.45)+' Q'+cx+' '+(cy-r*0.3)+' '+(cx+r*0.5)+' '+(cy+r*0.45)+'" fill="none" '+th(2.5)+'/>'
      +'<path d="M'+cx+' '+(cy-r*0.55)+' V'+(cy+r*0.9)+'" fill="none" stroke="#6fae5a" stroke-width="3" stroke-linecap="round"/>'; };
  var steam=function(x,y){ return '<path d="M'+x+' '+y+' q-6 -8 0 -16 q6 -8 0 -16" fill="none" '+th(3)+'/>'; };

  Object.assign(window.GVIDEO_ART, {
    /* 過去式：月曆上圈出某一天＋時鐘（有說哪一刻） */
    dg20260902b1_cal: svg(
      cal(24,34,110,100)
     +'<circle cx="87" cy="89" r="14" fill="none" stroke="'+R+'" stroke-width="4"/>'
     +'<circle cx="162" cy="56" r="22" fill="#fff" '+st+'/><path d="M162 56 V42 M162 56 L172 62" fill="none" '+th(3.5)+'/>'),
    /* 經驗：打開的護照，蓋滿印章（ever / never） */
    dg20260902b1_pass: svg(
      '<path d="M100 32 Q70 22 26 28 V128 Q70 122 100 132 Z" fill="'+C+'" '+st+'/>'
     +'<path d="M100 32 Q130 22 174 28 V128 Q130 122 100 132 Z" fill="'+C+'" '+st+'/>'
     +'<circle cx="58" cy="64" r="16" fill="none" stroke="'+R+'" stroke-width="3"/><circle cx="58" cy="64" r="10" fill="none" stroke="'+R+'" stroke-width="2"/>'
     +'<rect x="40" y="90" width="40" height="22" rx="4" fill="none" stroke="'+B+'" stroke-width="3" transform="rotate(-10 60 101)"/>'
     +'<rect x="116" y="46" width="42" height="24" rx="4" fill="none" stroke="'+G+'" stroke-width="3" transform="rotate(8 137 58)"/>'
     +'<path d="M128 104 l8 -14 l8 14 Z" fill="none" stroke="'+A+'" stroke-width="3" stroke-linejoin="round"/>'
     +'<circle cx="152" cy="98" r="9" fill="none" stroke="'+B+'" stroke-width="3"/>'),
    /* 剛做好：剛出爐冒煙的餅乾盤（just / already） */
    dg20260902b1_fresh: svg(
      '<ellipse cx="100" cy="112" rx="78" ry="20" fill="#fff" '+st+'/>'
     +'<ellipse cx="100" cy="108" rx="58" ry="12" fill="'+S+'" '+th(2.5)+'/>'
     +'<g fill="#d9a066" '+th(2.5)+'><circle cx="70" cy="100" r="15"/><circle cx="104" cy="96" r="16"/><circle cx="134" cy="102" r="14"/></g>'
     +'<g fill="'+D+'"><circle cx="66" cy="96" r="2.5"/><circle cx="75" cy="104" r="2.5"/><circle cx="100" cy="92" r="2.5"/><circle cx="110" cy="100" r="2.5"/><circle cx="131" cy="99" r="2.5"/><circle cx="138" cy="106" r="2.5"/></g>'
     +steam(72,76)+steam(104,70)+steam(136,78)),

    /* 情境 1：烹飪教室——爐台、鍋子、廚師帽 */
    dg20260902b1_kitchen: svg(
      '<rect x="14" y="88" width="172" height="48" rx="4" fill="'+L+'" '+st+'/>'
     +'<rect x="30" y="100" width="40" height="26" rx="3" fill="#fff" '+th(2.5)+'/><rect x="130" y="100" width="40" height="26" rx="3" fill="#fff" '+th(2.5)+'/>'
     +'<rect x="84" y="56" width="62" height="32" rx="4" fill="#9aa5b1" '+st+'/><rect x="78" y="52" width="74" height="8" rx="3" fill="#c9c2b8" '+st+'/>'
     +steam(104,44)+steam(126,44)
     +'<path d="M30 70 a12 12 0 0 1 4 -23 a14 14 0 0 1 24 -6 a12 12 0 0 1 16 14 a10 10 0 0 1 -4 15 Z" fill="#fff" '+st+'/>'
     +'<rect x="34" y="68" width="36" height="14" rx="2" fill="#fff" '+st+'/>'),
    /* 情境 2：包過水餃嗎？——一顆水餃＋問號 */
    dg20260902b1_askdump: svg(
      '<ellipse cx="90" cy="112" rx="66" ry="14" fill="'+S+'" '+st+'/>'
     +dump(90,90,1.3)
     +qb(168,36)),
    /* 情境 3：一顆都沒包過——平平的水餃皮＋擀麵棍 */
    dg20260902b1_wrapper: svg(
      '<rect x="14" y="98" width="172" height="34" rx="6" fill="#d9a066" '+st+'/>'
     +'<ellipse cx="74" cy="90" rx="40" ry="16" fill="#fffaf0" '+st+'/>'
     +'<ellipse cx="74" cy="88" rx="26" ry="9" fill="none" stroke="#e8dcc6" stroke-width="2"/>'
     +'<g transform="rotate(-18 144 70)"><rect x="112" y="62" width="64" height="16" rx="8" fill="#e0b47a" '+st+'/><rect x="98" y="66" width="16" height="8" rx="3" fill="#b9874d" '+th(2.5)+'/><rect x="174" y="66" width="16" height="8" rx="3" fill="#b9874d" '+th(2.5)+'/></g>'
     +'<g fill="#fff" '+th(2)+'><circle cx="150" cy="114" r="3"/><circle cx="162" cy="110" r="2"/><circle cx="40" cy="116" r="2.5"/></g>'),
    /* 情境 4：這輩子的經驗——一路走到現在的腳印＋旗子 */
    dg20260902b1_path: svg(
      '<path d="M14 120 Q60 70 100 100 T170 60" fill="none" stroke="#c9c2b8" stroke-width="14" stroke-linecap="round"/>'
     +'<g fill="'+D+'"><ellipse cx="34" cy="106" rx="4" ry="6"/><ellipse cx="54" cy="92" rx="4" ry="6"/><ellipse cx="78" cy="88" rx="4" ry="6"/><ellipse cx="100" cy="98" rx="4" ry="6"/><ellipse cx="124" cy="94" rx="4" ry="6"/><ellipse cx="146" cy="76" rx="4" ry="6"/></g>'
     +'<line x1="176" y1="24" x2="176" y2="70" '+th(4)+'/><path d="M176 26 H150 L158 36 L150 46 H176 Z" fill="'+G+'" '+st+'/>'
     +txt(176,92,'NOW',14,G)),
    /* 情境 5：去年春天上的水餃課——廚師帽＋一盤水餃 */
    dg20260902b1_class: svg(
      '<rect x="18" y="96" width="164" height="32" rx="6" fill="#c9c2b8" '+st+'/>'
     +dump(52,96,0.62)+dump(100,96,0.62)+dump(148,96,0.62)
     +'<path d="M76 52 a16 16 0 0 1 6 -30 a20 20 0 0 1 36 -4 a16 16 0 0 1 20 22 a12 12 0 0 1 -6 14 Z" fill="#fff" '+st+'/>'
     +'<rect x="82" y="50" width="48" height="16" rx="2" fill="#fff" '+st+'/>'),
    /* 情境 6：說了 last spring——月曆上開了一朵櫻花＋圖釘 */
    dg20260902b1_pincal: svg(
      cal(40,32,120,104)
     +'<g fill="#f4a6b8" '+th(2.5)+'><circle cx="112" cy="94" r="8"/><circle cx="124" cy="88" r="8"/><circle cx="130" cy="100" r="8"/><circle cx="120" cy="110" r="8"/><circle cx="108" cy="106" r="8"/></g>'
     +'<circle cx="119" cy="99" r="5" fill="'+Y+'" '+th(2)+'/>'
     +'<circle cx="170" cy="40" r="10" fill="'+R+'" '+st+'/><line x1="170" y1="50" x2="164" y2="68" '+th(3.5)+'/>'),
    /* 情境 7：高麗菜洗好了沒？——水槽裡的高麗菜＋問號 */
    dg20260902b1_cabbage: svg(
      '<path d="M18 92 H150 L140 136 H28 Z" fill="#c9c2b8" '+st+'/>'
     +'<path d="M128 92 V60 a10 10 0 0 1 20 0" fill="none" '+th(5)+'/>'
     +cab(78,88,30)
     +qb(176,40)),
    /* 情境 8：剛洗好，還在滴水——瀝水籃＋水滴 */
    dg20260902b1_colander: svg(
      cab(100,74,30)
     +'<path d="M48 82 H152 Q148 130 100 130 Q52 130 48 82 Z" fill="'+B+'" '+st+'/>'
     +'<g fill="#fff"><circle cx="72" cy="100" r="3"/><circle cx="88" cy="106" r="3"/><circle cx="104" cy="108" r="3"/><circle cx="120" cy="104" r="3"/><circle cx="134" cy="96" r="3"/><circle cx="96" cy="120" r="3"/><circle cx="112" cy="120" r="3"/></g>'
     +'<rect x="34" y="78" width="132" height="8" rx="4" fill="'+B+'" '+st+'/>'
     +'<g fill="'+S+'" '+th(2)+'><path d="M80 138 q-4 6 0 9 q4 -3 0 -9 Z"/><path d="M118 138 q-4 6 0 9 q4 -3 0 -9 Z"/></g>'
     +'<path d="M150 40 q-6 9 0 13 q6 -4 0 -13 Z M40 44 q-6 9 0 13 q6 -4 0 -13 Z" fill="'+S+'" '+th(2.5)+'/>'),
    /* 情境 9：老師已經開火了——瓦斯爐的藍色火焰 */
    dg20260902b1_stove: svg(
      '<rect x="20" y="96" width="160" height="40" rx="6" fill="#fff" '+st+'/>'
     +'<circle cx="54" cy="116" r="8" fill="'+L+'" '+st+'/><circle cx="146" cy="116" r="8" fill="'+L+'" '+st+'/>'
     +'<line x1="54" y1="116" x2="54" y2="110" '+th(3)+'/><line x1="146" y1="116" x2="146" y2="110" '+th(3)+'/>'
     +'<ellipse cx="100" cy="90" rx="48" ry="8" fill="#9aa5b1" '+st+'/>'
     +'<g fill="'+B+'" '+th(2.5)+'><path d="M70 86 q-4 -18 6 -28 q0 14 8 18 q-2 -16 10 -26 q0 18 10 22 q0 -14 10 -20 q4 18 -2 34 Z"/></g>'
     +'<path d="M84 84 q-2 -10 4 -16 q2 10 6 12 q0 -8 6 -12 q2 10 0 16 Z" fill="'+S+'"/>'),
    /* 情境 10：結果都在眼前——滾水的鍋子＋打勾 */
    dg20260902b1_ready: svg(
      '<path d="M40 64 H140 V116 a14 14 0 0 1 -14 14 H54 a14 14 0 0 1 -14 -14 Z" fill="#9aa5b1" '+st+'/>'
     +'<ellipse cx="90" cy="66" rx="48" ry="8" fill="'+S+'" '+th(2.5)+'/>'
     +'<path d="M30 80 H40 M140 80 H150" '+th(5)+'/>'
     +'<g fill="#fff" '+th(2)+'><circle cx="70" cy="64" r="4"/><circle cx="90" cy="60" r="5"/><circle cx="110" cy="65" r="4"/></g>'
     +steam(78,34)+steam(104,30)
     +chk(166,40,20))
  });
})();

/* ============================================================
   dg20260902b1 — Did It or Have Done It?
   Grammar in Use Unit 7（Present perfect：ever / never / just / already / yet）＋ 跟過去簡單式的分界
   ============================================================ */
window.GVIDEO.dg20260902b1 = {
  kind: 'gram',
  date: '2026-09-02',
  title: 'Did It or Have Done It?',
  titleCn: '現在完成式 vs 過去簡單式：有沒有說明確時間',
  titleArt: ['dg20260902b1_cal', 'dg20260902b1_pass', 'dg20260902b1_fresh'],
  scene: '烹飪教室 Cooking class',
  sceneArt: 'dg20260902b1_kitchen',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Sophie', voice: 'f' },
    T: { name: 'Liam', voice: 'm' }
  },
  expr: {
    did:  { t: 'did + 明確時間', cn: '說了過去哪一刻 → 過去簡單式', ex: 'We moved to Tainan three years ago.', exCn: '我們三年前搬到台南。', note: '常見時間詞：yesterday、last night、ago、in 2020' },
    ever: { t: 'have / has + ever / never + p.p.', cn: '沒說時間、講經驗 → 現在完成式', ex: 'Have you ever ridden a horse?', exCn: '你騎過馬嗎？', note: 'ever 用在問句，never 用在肯定句，都放在 have 和過去分詞中間' },
    just: { t: 'just / already / yet', cn: '結果跟現在有關 → 現在完成式', ex: 'The pizza has just arrived.', exCn: '披薩剛送到。', note: 'just、already 放在 have 後面；yet 放在否定句、問句的句尾' }
  },
  chapters: [
    { cn: '開場' }, { cn: '有沒有說時間？' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  /* 「現在」放在右邊，三個項目都在過去 */
  timelineNow: 86,
  timeline: [
    { x: 14, art: 'dg20260902b1_cal',   lab: 'did',  who: '說了哪一刻' },
    { x: 38, art: 'dg20260902b1_pass',  lab: 'ever', who: '一生的經驗' },
    { x: 62, art: 'dg20260902b1_fresh', lab: 'just', who: '剛發生・結果' }
  ],
  flow: [
    { q: '句子裡有明確的過去時間嗎？', a: '過去簡單式', en: '主詞 + 過去式 + 時間' },
    { q: '沒說時間，在講有沒有經驗？', a: '現在完成式', en: 'have / has + ever / never + p.p.' },
    { q: '剛做完、已經做了、還沒做？', a: '現在完成式', en: 'have / has + just / already + p.p.' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: '我吃過、我去過，英文有時候用過去式，有時候用現在完成式。這支影片教你看一個關鍵：有沒有說時間。', vis: { type: 'title' } },

    /* ---- 1 核心：有沒有說時間？ ---- */
    { ch: 1, sp: 'N', zh: '先看這條時間線。最右邊是現在，左邊都是過去。', vis: { type: 'timeline', show: 0, kick: 'Time given or not? 有沒有說時間？' } },
    { ch: 1, sp: 'N', zh: '如果你說出過去的哪一刻，像昨天、上星期、三年前，就用過去簡單式。',
      hi: [{ t: '過去簡單式', k: 'did', c: 3 }], vis: { type: 'timeline', show: 1, pop: true, kick: 'Time given or not? 有沒有說時間？' } },
    { ch: 1, sp: 'A', en: 'My brother lost his phone on the train yesterday.', cn: '我哥昨天在火車上弄丟了手機。',
      hi: [{ t: 'lost', cn: '過去式', k: 'did', c: 3 }, { t: 'yesterday', cn: '明確時間', k: 'did', c: 3 }], vis: { type: 'timeline', show: 1, lit: 0, kick: 'Time given or not? 有沒有說時間？' } },
    { ch: 1, sp: 'N', zh: '如果不說時間，只講這輩子有沒有做過，就用現在完成式。問人用 ever，回答沒有用 never。',
      hi: [{ t: '現在完成式', k: 'ever', c: 4 }], vis: { type: 'timeline', show: 2, pop: true, kick: 'Time given or not? 有沒有說時間？' } },
    { ch: 1, sp: 'T', en: "I've never seen snow in real life.", cn: '我從來沒親眼看過雪。',
      hi: [{ t: "I've never seen", cn: '一生的經驗', k: 'ever', c: 4 }], vis: { type: 'timeline', show: 2, lit: 1, kick: 'Time given or not? 有沒有說時間？' } },
    { ch: 1, sp: 'N', zh: '沒說時間，就是從以前一路算到現在。所以完成式跟現在是連在一起的。',
      vis: { type: 'timeline', show: 2, dec: true, decText: '沒說時間，一路算到現在', kick: 'Time given or not? 有沒有說時間？' } },
    { ch: 1, sp: 'N', zh: '剛做完、已經做了、還沒做，結果都跟現在有關，也用完成式，常配 just、already、yet。',
      hi: [{ t: 'just', k: 'just', c: 2 }, { t: 'already', k: 'just', c: 2 }], vis: { type: 'timeline', show: 3, pop: true, kick: 'Time given or not? 有沒有說時間？' } },
    { ch: 1, sp: 'A', en: "The bus has just left, so let's walk.", cn: '公車剛開走，我們用走的吧。',
      hi: [{ t: 'has just left', cn: '剛發生', k: 'just', c: 2 }], vis: { type: 'timeline', show: 3, lit: 2, kick: 'Time given or not? 有沒有說時間？' } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: '過去簡單式的句型：主詞加過去式動詞，再加一個明確的時間。問句用 did 開頭。',
      hi: [{ t: '過去簡單式', k: 'did', c: 3 }],
      vis: { type: 'pattern', kick: 'Past simple 過去簡單式', rows: [
        { lab: '肯定', blocks: [{ t: 'She', k: 's' }, { t: 'called', k: 'v' }, { t: 'her grandma', k: 'n' }, { t: 'last night', k: 'o' }] },
        { lab: '問句', blocks: [{ t: 'Did', k: 'n' }, { t: 'you', k: 's' }, { t: 'call', k: 'v' }, { t: 'her', k: 'n' }, { t: 'on Friday?', k: 'o' }] }
      ], note: '有 yesterday、ago、last… → 過去簡單式' } },
    { ch: 2, sp: 'N', zh: '現在完成式的句型：主詞加 have 或 has，再加過去分詞。ever、never、just、already 都放在中間。',
      hi: [{ t: '現在完成式', k: 'ever', c: 4 }],
      vis: { type: 'pattern', kick: 'Present perfect 現在完成式', rows: [
        { lab: '經驗', blocks: [{ t: 'I', k: 's' }, { t: 'have', k: 'n' }, { t: 'never', k: 'n', add: true }, { t: 'tried', k: 'v' }, { t: 'durian', k: 'n' }] },
        { lab: '問句', blocks: [{ t: 'Have', k: 'n' }, { t: 'you', k: 's' }, { t: 'ever', k: 'n', add: true }, { t: 'tried', k: 'v' }, { t: 'durian?', k: 'n' }] }
      ], note: '主詞是 he、she、it 用 has' } },
    { ch: 2, sp: 'N', zh: 'yet 比較特別，只放在否定句和問句的最後面，意思是「還沒」或「了沒」。',
      hi: [{ t: 'yet', k: 'just', c: 2 }],
      vis: { type: 'pattern', kick: 'yet 放句尾', rows: [
        { lab: '否定', blocks: [{ t: 'I', k: 's' }, { t: "haven't", k: 'n' }, { t: 'packed', k: 'v' }, { t: 'my bag', k: 'n' }, { t: 'yet', k: 'o', add: true }] },
        { lab: '問句', blocks: [{ t: 'Have', k: 'n' }, { t: 'you', k: 's' }, { t: 'packed', k: 'v' }, { t: 'your bag', k: 'n' }, { t: 'yet?', k: 'o', add: true }] }
      ] } },
    { ch: 2, sp: 'N', zh: '最常跟完成式一起出現的信號字，就是這幾個。',
      vis: { type: 'family', kick: 'Signal words 完成式信號字', core: 'have / has + p.p.', coreCn: '常跟這些字一起出現', art: 'dg20260902b1_pass', items: [
        { t: 'ever · never', cn: '有沒有過・從來沒有' }, { t: 'just', cn: '剛剛' }, { t: 'already', cn: '已經' }, { t: 'yet', cn: '還沒・了沒' }
      ] } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: '來聽 Sophie 和 Liam 在烹飪教室的對話，注意每一句有沒有說時間。', vis: { type: 'scene', art: 'dg20260902b1_kitchen' } },
    { ch: 3, sp: 'A', en: 'Have you ever made dumplings from scratch?', cn: '你自己從頭包過水餃嗎？',
      hi: [{ t: 'Have you ever made', cn: '問經驗', k: 'ever', c: 4 }], vis: { type: 'scene', art: 'dg20260902b1_askdump' } },
    { ch: 3, sp: 'T', en: "No, I've never folded a single one.", cn: '沒有，我連一顆都沒包過。',
      hi: [{ t: "I've never folded", cn: '從來沒有', k: 'ever', c: 4 }], vis: { type: 'scene', art: 'dg20260902b1_wrapper' } },
    { ch: 3, sp: 'N', zh: 'Liam 講的是這輩子的經驗，沒說什麼時候，所以用 never 配完成式。',
      hi: [{ t: 'never', k: 'ever', c: 4 }], vis: { type: 'scene', art: 'dg20260902b1_path' } },
    { ch: 3, sp: 'A', en: 'I took a dumpling class in Taichung last spring.', cn: '我去年春天在台中上過一堂水餃課。',
      hi: [{ t: 'took', cn: '過去式', k: 'did', c: 3 }, { t: 'last spring', cn: '明確時間', k: 'did', c: 3 }], vis: { type: 'scene', art: 'dg20260902b1_class' } },
    { ch: 3, sp: 'N', zh: 'Sophie 說了 last spring，時間很明確，所以用過去簡單式 took。',
      hi: [{ t: 'took', k: 'did', c: 3 }], vis: { type: 'scene', art: 'dg20260902b1_pincal' } },
    { ch: 3, sp: 'T', en: 'Have you washed the cabbage yet?', cn: '你高麗菜洗好了沒？',
      hi: [{ t: 'yet', cn: '了沒', k: 'just', c: 2 }], vis: { type: 'scene', art: 'dg20260902b1_cabbage' } },
    { ch: 3, sp: 'A', en: "Yes, I've just washed it. It's still wet.", cn: '洗好了，我剛洗完，還濕濕的。',
      hi: [{ t: "I've just washed", cn: '剛洗完', k: 'just', c: 2 }], vis: { type: 'scene', art: 'dg20260902b1_colander' } },
    { ch: 3, sp: 'T', en: 'Good. The teacher has already turned on the stove.', cn: '很好，老師已經把爐火開好了。',
      hi: [{ t: 'has already turned on', cn: '已經開了', k: 'just', c: 2 }], vis: { type: 'scene', art: 'dg20260902b1_stove' } },
    { ch: 3, sp: 'N', zh: '菜剛洗好、火已經開了，結果都在眼前，所以用 just 和 already 配完成式。',
      hi: [{ t: 'just', k: 'just', c: 2 }, { t: 'already', k: 'just', c: 2 }], vis: { type: 'scene', art: 'dg20260902b1_ready' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '同一件事，加不加時間，時態就不一樣。',
      vis: { type: 'vs', sm: true, kick: '有沒有說時間',
        a: { w: "I've lost my umbrella.", def: '我的傘不見了。', cn: '沒說時間・現在還是沒傘 → 完成式' },
        b: { w: 'I lost my umbrella on Monday.', def: '我星期一把傘弄丟了。', cn: '說了星期一 → 過去簡單式' } } },
    { ch: 4, sp: 'A', en: "I've lost my umbrella.", cn: '我的傘不見了。',
      hi: [{ t: "I've lost", cn: '現在還沒找到', k: 'just', c: 2 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '有沒有說時間',
        a: { w: "I've lost my umbrella.", def: '我的傘不見了。', cn: '沒說時間・現在還是沒傘 → 完成式' },
        b: { w: 'I lost my umbrella on Monday.', def: '我星期一把傘弄丟了。', cn: '說了星期一 → 過去簡單式' } } },
    { ch: 4, sp: 'T', en: 'I lost my umbrella on Monday.', cn: '我星期一把傘弄丟了。',
      hi: [{ t: 'on Monday', cn: '明確時間', k: 'did', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '有沒有說時間',
        a: { w: "I've lost my umbrella.", def: '我的傘不見了。', cn: '沒說時間・現在還是沒傘 → 完成式' },
        b: { w: 'I lost my umbrella on Monday.', def: '我星期一把傘弄丟了。', cn: '說了星期一 → 過去簡單式' } } },
    { ch: 4, sp: 'N', zh: '第一句的重點是現在手上沒有傘；第二句說了星期一，那一刻已經過去了，就用過去式。',
      vis: { type: 'vs', sm: true, kick: '有沒有說時間',
        a: { w: "I've lost my umbrella.", def: '我的傘不見了。', cn: '沒說時間・現在還是沒傘 → 完成式' },
        b: { w: 'I lost my umbrella on Monday.', def: '我星期一把傘弄丟了。', cn: '說了星期一 → 過去簡單式' } } },
    { ch: 4, sp: 'N', zh: '再看一組。先用完成式問有沒有去過；對方說有，接著問哪一次，就換成過去式。',
      vis: { type: 'vs', sm: true, kick: '問經驗 vs 問那一次',
        a: { w: 'Have you ever been to Kenting?', def: '你去過墾丁嗎？', cn: '問有沒有經驗 → 完成式' },
        b: { w: 'When did you go there?', def: '你是什麼時候去的？', cn: '問哪一次 → 過去簡單式' } } },
    { ch: 4, sp: 'A', en: 'Have you ever been to Kenting?', cn: '你去過墾丁嗎？',
      hi: [{ t: 'Have you ever been', cn: '問經驗', k: 'ever', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '問經驗 vs 問那一次',
        a: { w: 'Have you ever been to Kenting?', def: '你去過墾丁嗎？', cn: '問有沒有經驗 → 完成式' },
        b: { w: 'When did you go there?', def: '你是什麼時候去的？', cn: '問哪一次 → 過去簡單式' } } },
    { ch: 4, sp: 'T', en: 'When did you go there?', cn: '你是什麼時候去的？',
      hi: [{ t: 'When did', cn: '問那一次', k: 'did', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '問經驗 vs 問那一次',
        a: { w: 'Have you ever been to Kenting?', def: '你去過墾丁嗎？', cn: '問有沒有經驗 → 完成式' },
        b: { w: 'When did you go there?', def: '你是什麼時候去的？', cn: '問哪一次 → 過去簡單式' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '最後給你一個判斷流程。要講做過的事，照順序問自己三個問題。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一問：句子裡有明確的過去時間嗎？有的話，用過去簡單式。',
      hi: [{ t: '過去簡單式', k: 'did', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'A', en: 'We watched a great movie on Saturday night.', cn: '我們星期六晚上看了一部很棒的電影。',
      hi: [{ t: 'watched', cn: '過去式', k: 'did', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二問：沒說時間，是在講有沒有這個經驗嗎？是的話，用完成式配 ever 或 never。',
      hi: [{ t: '完成式', k: 'ever', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'T', en: 'My sister has never tried stinky tofu.', cn: '我妹從來沒吃過臭豆腐。',
      hi: [{ t: 'has never tried', cn: '經驗', k: 'ever', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '第三問：是剛做完、已經做了，或還沒做嗎？一樣用完成式，配 just、already 或 yet。',
      hi: [{ t: 'yet', k: 'just', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'A', en: "I haven't answered his message yet.", cn: '我還沒回他的訊息。',
      hi: [{ t: "haven't answered", cn: '還沒', k: 'just', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說說看。看到中文情境，先自己用英文說出來，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：朋友問你有沒有爬過玉山，你說從來沒有。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '朋友問你有沒有爬過玉山，你說從來沒有。' } },
    { ch: 6, sp: 'T', en: "I've never climbed Jade Mountain.", cn: '我從來沒爬過玉山。',
      hi: [{ t: "I've never climbed", cn: '經驗 → 完成式', k: 'ever', c: 4 }],
      vis: { type: 'speak', n: 1, show: true, sit: '朋友問你有沒有爬過玉山，你說從來沒有。', a: "I've never climbed Jade Mountain." } },
    { ch: 6, sp: 'N', zh: '情境二：你說你上個月買了一台新的腳踏車。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '你說你上個月買了一台新的腳踏車。' } },
    { ch: 6, sp: 'A', en: 'I bought a new bike last month.', cn: '我上個月買了一台新的腳踏車。',
      hi: [{ t: 'bought', cn: '有時間 → 過去式', k: 'did', c: 3 }],
      vis: { type: 'speak', n: 2, show: true, sit: '你說你上個月買了一台新的腳踏車。', a: 'I bought a new bike last month.' } },
    { ch: 6, sp: 'N', zh: '情境三：朋友打電話約你吃飯，你說你剛吃完晚餐。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '朋友打電話約你吃飯，你說你剛吃完晚餐。' } },
    { ch: 6, sp: 'T', en: "Sorry, I've just had dinner.", cn: '抱歉，我剛吃過晚餐。',
      hi: [{ t: "I've just had", cn: '剛發生 → 完成式', k: 'just', c: 2 }],
      vis: { type: 'speak', n: 3, show: true, sit: '朋友打電話約你吃飯，你說你剛吃完晚餐。', a: "Sorry, I've just had dinner." } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結一下：說了過去哪一刻，用過去簡單式；沒說時間，講經驗或剛發生的結果，用現在完成式。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '下次講做過的事，先找一找：句子裡有沒有說時間？', vis: { type: 'end' } }
  ]
};
