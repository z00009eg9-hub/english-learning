/* ============================================================
   B2 Read 文法影片解說 — dg20261009b1（Unit 18，B1）
   格式與規則見 b2lab/tools/GVIDEO_SPEC.md；範本 gvideo/dg20261014b1.js
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
  /* 臉：圓頭＋兩點眼睛＋微笑 */
  var face=function(cx,cy,r,fill){ return '<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="'+fill+'" '+st+'/>'
      +'<circle cx="'+(cx-r*0.35)+'" cy="'+(cy-r*0.1)+'" r="2.6" fill="'+D+'"/><circle cx="'+(cx+r*0.35)+'" cy="'+(cy-r*0.1)+'" r="2.6" fill="'+D+'"/>'
      +'<path d="M'+(cx-r*0.35)+' '+(cy+r*0.3)+' q'+(r*0.35)+' '+(r*0.3)+' '+(r*0.7)+' 0" fill="none" '+th(2.5)+'/>'; };

  Object.assign(window.GVIDEO_ART, {
    /* 卡 1：肯定句 used to——相簿裡一頁頁的舊照片＋打勾 */
    dg20261009b1_album: svg(
      '<rect x="18" y="32" width="80" height="96" rx="6" fill="'+C+'" '+st+'/><rect x="102" y="32" width="80" height="96" rx="6" fill="'+C+'" '+st+'/>'
     +'<rect x="28" y="44" width="60" height="38" rx="3" fill="'+S+'" '+th(2.5)+'/><path d="M30 80 L48 62 L60 72 L70 60 L86 80 Z" fill="'+G+'" '+th(2.5)+'/><circle cx="76" cy="52" r="5" fill="'+Y+'" '+th(2)+'/>'
     +'<rect x="112" y="44" width="60" height="38" rx="3" fill="'+S+'" '+th(2.5)+'/><circle cx="142" cy="60" r="9" fill="'+L+'" '+th(2.5)+'/><path d="M128 82 q14 -16 28 0" fill="'+B+'" '+th(2.5)+'/>'
     +'<rect x="28" y="92" width="26" height="24" rx="2" fill="'+L+'" '+th(2.5)+'/><rect x="62" y="92" width="26" height="24" rx="2" fill="'+L+'" '+th(2.5)+'/>'
     +'<rect x="112" y="92" width="26" height="24" rx="2" fill="'+L+'" '+th(2.5)+'/><rect x="146" y="92" width="26" height="24" rx="2" fill="'+L+'" '+th(2.5)+'/>'
     +chk(176,30,15)),
    /* 卡 2：did 出現，d 被推走 */
    dg20261009b1_did: svg(
      '<rect x="12" y="56" width="64" height="44" rx="9" fill="'+A+'" '+st+'/>'+txt(44,86,'did',24,'#fff')
     +'<rect x="84" y="56" width="68" height="44" rx="9" fill="#fff" '+st+'/>'+txt(118,86,'use',24)
     +'<g transform="rotate(18 172 36)"><rect x="158" y="20" width="28" height="32" rx="6" fill="'+Y+'" '+st+'/>'+txt(172,44,'d',22)+'</g>'
     +'<path d="M150 50 l8 -6 M146 40 l10 -2 M152 60 l10 -2" '+th(3)+'/>'
     +'<path d="M22 118 H160" stroke="'+G+'" stroke-width="5" stroke-linecap="round"/>'),
    /* 卡 3：只發生一次——月曆上只釘一天 */
    dg20261009b1_pin: svg(
      cal(26,34,112,96)
     +'<circle cx="89" cy="89" r="14" fill="none" stroke="'+R+'" stroke-width="4"/>'
     +'<path d="M89 89 L102 66" '+th(3)+'/><circle cx="104" cy="62" r="8" fill="'+R+'" '+st+'/>'
     +'<circle cx="166" cy="48" r="17" fill="'+B+'" '+st+'/>'+txt(166,56,'1',22,'#fff')),

    /* 情境 1：同學會——彩旗、氣球、蛋糕 */
    dg20261009b1_party: svg(
      '<path d="M8 22 Q100 52 192 22" fill="none" '+th(2.5)+'/>'
     +'<path d="M30 30 l8 18 l8 -14 Z" fill="'+R+'" '+th(2.5)+'/><path d="M70 40 l7 18 l9 -16 Z" fill="'+Y+'" '+th(2.5)+'/><path d="M112 40 l9 16 l7 -18 Z" fill="'+B+'" '+th(2.5)+'/><path d="M152 32 l8 14 l8 -18 Z" fill="'+G+'" '+th(2.5)+'/>'
     +'<ellipse cx="28" cy="78" rx="14" ry="17" fill="'+R+'" '+st+'/><path d="M28 95 q-6 14 2 30" fill="none" '+th(2)+'/>'
     +'<ellipse cx="172" cy="74" rx="14" ry="17" fill="'+B+'" '+st+'/><path d="M172 91 q6 14 -2 32" fill="none" '+th(2)+'/>'
     +'<line x1="40" y1="132" x2="160" y2="132" '+st+'/>'
     +'<rect x="72" y="96" width="56" height="36" rx="5" fill="'+L+'" '+st+'/><path d="M72 108 q7 8 14 0 q7 8 14 0 q7 8 14 0 q7 8 14 0" fill="none" '+th(2.5)+'/>'
     +'<line x1="100" y1="82" x2="100" y2="96" '+th(3)+'/><path d="M100 74 q5 5 0 9 q-5 -4 0 -9 Z" fill="'+Y+'" '+th(2)+'/>'),
    /* 情境 2：這張是你嗎？——班級合照＋問號 */
    dg20261009b1_photo: svg(
      '<rect x="18" y="26" width="140" height="104" rx="6" fill="#b5835a" '+st+'/><rect x="30" y="38" width="116" height="80" rx="3" fill="'+S+'" '+th(2.5)+'/>'
     +'<g fill="'+L+'" '+th(2.5)+'><circle cx="52" cy="64" r="9"/><circle cx="76" cy="64" r="9"/><circle cx="100" cy="64" r="9"/><circle cx="124" cy="64" r="9"/>'
     +'<circle cx="64" cy="94" r="9"/><circle cx="88" cy="94" r="9"/><circle cx="112" cy="94" r="9"/></g>'
     +'<path d="M106 58 q-8 -10 -14 4 q-3 16 -2 22 M94 58 q8 -10 14 4 q3 16 2 22" fill="none" stroke="#7a4a2a" stroke-width="3" stroke-linecap="round"/>'
     +'<circle cx="100" cy="64" r="16" fill="none" stroke="'+A+'" stroke-width="3.5"/>'
     +qb(172,34)),
    /* 情境 3：以前留長髮——長頭髮的臉＋梳子 */
    dg20261009b1_hair: svg(
      '<path d="M62 62 q0 -40 38 -40 q38 0 38 40 V128 H116 V80 H84 V128 H62 Z" fill="#7a4a2a" '+st+'/>'
     +face(100,72,26,L)
     +'<path d="M76 58 q24 -20 48 0" fill="#7a4a2a" '+th(2.5)+'/>'
     +'<rect x="150" y="56" width="16" height="60" rx="4" fill="'+A+'" '+st+'/><path d="M150 66 h-10 M150 76 h-10 M150 86 h-10 M150 96 h-10 M150 106 h-10" '+th(3)+'/>'),
    /* 情境 4：沒有 did，d 留著——used 的 d 亮綠燈 */
    dg20261009b1_dstay: svg(
      '<rect x="20" y="48" width="112" height="52" rx="10" fill="#fff" '+st+'/>'+txt(80,84,'use',28)
     +'<rect x="101" y="56" width="22" height="36" rx="5" fill="'+G+'" opacity=".25"/>'+txt(112,84,'d',28,G)
     +'<path d="M110 106 v14 M120 106 v14" '+th(3)+'/><rect x="98" y="118" width="34" height="10" rx="3" fill="'+Y+'" '+st+'/>'
     +chk(166,74,22)),
    /* 情境 5：你爸媽以前會唸你嗎？——爸爸媽媽＋問號 */
    dg20261009b1_parents: svg(
      '<circle cx="62" cy="40" r="11" fill="#7a4a2a" '+st+'/>'
     +face(62,72,26,L)
     +'<path d="M36 128 q26 -30 52 0 Z" fill="'+R+'" '+st+'/>'
     +face(126,70,28,L)
     +'<circle cx="116" cy="68" r="7" fill="none" '+th(2.5)+'/><circle cx="136" cy="68" r="7" fill="none" '+th(2.5)+'/><line x1="123" y1="68" x2="129" y2="68" '+th(2.5)+'/>'
     +'<path d="M98 130 q28 -32 56 0 Z" fill="'+B+'" '+st+'/>'
     +qb(174,30)),
    /* 情境 6：爸媽不會，老師會——黑板＋教鞭 */
    dg20261009b1_teacher: svg(
      '<rect x="14" y="20" width="118" height="78" rx="4" fill="#2f5d4a" '+st+'/>'
     +'<path d="M28 42 h60 M28 58 h80 M28 74 h44" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".85"/>'
     +'<rect x="14" y="98" width="118" height="8" fill="#b5835a" '+st+'/>'
     +face(160,74,22,L)+'<path d="M140 66 q20 -26 40 0" fill="#555" '+th(2.5)+'/>'
     +'<path d="M140 130 q20 -34 40 0 Z" fill="'+Y+'" '+st+'/>'
     +'<line x1="142" y1="104" x2="96" y2="60" stroke="#b5835a" stroke-width="5" stroke-linecap="round"/>'),
    /* 情境 7：有 didn't，d 擦掉——橡皮擦 */
    dg20261009b1_erase: svg(
      '<rect x="20" y="48" width="112" height="52" rx="10" fill="#fff" '+st+'/>'+txt(80,84,'use',28)
     +txt(112,84,'d',28,'#d8d0c4')
     +'<g transform="rotate(-28 146 64)"><rect x="118" y="50" width="56" height="28" rx="6" fill="#f4a6b5" '+st+'/><rect x="118" y="50" width="20" height="28" rx="6" fill="'+B+'" '+st+'/></g>'
     +'<g fill="#e7dfd3"><circle cx="128" cy="108" r="3"/><circle cx="138" cy="114" r="2.5"/><circle cx="120" cy="116" r="2"/></g>'),
    /* 情境 8：以前上課很少說話——課桌前安靜的學生 */
    dg20261009b1_quiet: svg(
      '<rect x="40" y="96" width="120" height="12" rx="3" fill="#b5835a" '+st+'/><path d="M52 108 V138 M148 108 V138" '+th(4)+'/>'
     +'<circle cx="100" cy="58" r="26" fill="'+L+'" '+st+'/><circle cx="91" cy="56" r="2.6" fill="'+D+'"/><circle cx="109" cy="56" r="2.6" fill="'+D+'"/>'
     +'<line x1="93" y1="70" x2="107" y2="70" '+th(3)+'/>'
     +'<path d="M76 50 q24 -26 48 0" fill="#3a2a20" '+th(2.5)+'/>'
     +'<rect x="74" y="84" width="52" height="12" rx="2" fill="#fff" '+th(2.5)+'/>'
     +'<path d="M140 22 H178 a10 10 0 0 1 10 10 V46 a10 10 0 0 1 -10 10 H156 L146 66 V56 H140 a10 10 0 0 1 -10 -10 V32 a10 10 0 0 1 10 -10 Z" fill="#fff" '+st+'/>'
     +'<g fill="'+D+'"><circle cx="148" cy="39" r="3"/><circle cx="159" cy="39" r="3"/><circle cx="170" cy="39" r="3"/></g>'),
    /* 情境 9：演講比賽得獎——獎盃＋麥克風 */
    dg20261009b1_trophy: svg(
      '<path d="M64 26 H126 V58 a31 31 0 0 1 -62 0 Z" fill="'+Y+'" '+st+'/>'
     +'<path d="M64 36 H48 a14 14 0 0 0 16 26 M126 36 H142 a14 14 0 0 1 -16 26" fill="none" '+th(3.5)+'/>'
     +'<rect x="88" y="88" width="14" height="18" fill="'+Y+'" '+st+'/><rect x="70" y="106" width="50" height="14" rx="3" fill="#b5835a" '+st+'/>'
     +'<path d="M84 46 l11 -6 v26" fill="none" '+th(3)+'/>'
     +'<rect x="152" y="40" width="22" height="34" rx="11" fill="#9aa3ad" '+st+'/><path d="M146 66 a17 17 0 0 0 34 0" fill="none" '+th(3)+'/><line x1="163" y1="84" x2="163" y2="124" '+th(4)+'/><line x1="150" y1="126" x2="176" y2="126" '+th(4)+'/>'),
    /* 情境 10：那一天只發生一次——撕下來的一張日曆＋一顆星 */
    dg20261009b1_once: svg(
      '<rect x="56" y="24" width="88" height="104" rx="6" fill="#fff" '+st+'/>'
     +'<rect x="56" y="24" width="88" height="24" rx="6" fill="'+B+'" '+st+'/>'
     +'<path d="M100 62 l8 16 l18 2 l-13 12 l4 18 l-17 -9 l-17 9 l4 -18 l-13 -12 l18 -2 Z" fill="'+Y+'" '+st+'/>'
     +'<path d="M30 40 l12 8 M24 70 h14 M30 100 l12 -8 M170 40 l-12 8 M176 70 h-14 M170 100 l-12 -8" '+th(3)+'/>')
  });
})();

/* ============================================================
   dg20261009b1 — didn't use to / Did … use to?
   Grammar in Use Unit 18（used to do）：否定、問句、簡答；跟過去簡單式的分工
   ============================================================ */
window.GVIDEO.dg20261009b1 = {
  kind: 'gram',
  date: '2026-10-09',
  title: "didn't use to & Did … use to?",
  titleCn: 'used to 的否定和問句：那個 d 去哪了？',
  titleArt: ['dg20261009b1_album', 'dg20261009b1_did', 'dg20261009b1_pin'],
  scene: '同學會 Class reunion',
  sceneArt: 'dg20261009b1_party',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Emma', voice: 'f' },
    T: { name: 'Jake', voice: 'm' }
  },
  expr: {
    used: { t: 'used to + 原形', cn: '以前常常這樣，現在不是了（肯定句 d 留著）', ex: 'My cousin used to grow tomatoes on her roof.', exCn: '我表姊以前在屋頂上種番茄。', note: '句子裡沒有 did，d 就留在 used 上' },
    nod:  { t: "didn't use to / Did … use to", cn: '否定句、問句 → d 拿掉', ex: "We didn't use to own a car.", exCn: '我們以前沒有車。', note: '過去已經由 did 表示了；簡答只要說 Yes, I did. 或 No, I didn\'t.' },
    ps:   { t: '過去簡單式', cn: '只發生一次 → 過去簡單式', ex: 'I lost my wallet at the night market once.', exCn: '我有一次在夜市弄丟錢包。', note: '有 last July、in 2019、once、twice 這類時間或次數，就用過去式' }
  },
  chapters: [
    { cn: '開場' }, { cn: 'd 什麼時候留著？' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  cardsKick: 'Where is the d? 那個 d 去哪了？',
  cards: [
    { art: 'dg20261009b1_album', lab: 'used to', who: '肯定句：d 留著' },
    { art: 'dg20261009b1_did',   lab: "didn't / Did", who: '否定・問句：use to' },
    { art: 'dg20261009b1_pin',   lab: '過去簡單式', who: '只發生一次' }
  ],
  flow: [
    { q: '講以前常常、現在停了的事？', a: 'used to', en: '主詞 + used to + 原形動詞' },
    { q: '句子前面有 didn\'t 或 Did 嗎？', a: 'use to', en: "didn't / Did … + use to + 原形" },
    { q: '只發生一次，或數得出次數？', a: '過去簡單式', en: '主詞 + 動詞過去式' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: '講以前的習慣會用 used to。可是一變成否定句或問句，那個 d 就不見了。它去哪了？', vis: { type: 'title' } },

    /* ---- 1 核心：d 什麼時候留著？ ---- */
    { ch: 1, sp: 'N', zh: '用 used to 講以前，有三種情況要分清楚。', vis: { type: 'cards', show: 0 } },
    { ch: 1, sp: 'N', zh: '肯定句：主詞加 used to 加原形動詞，講以前常做、現在不做的事。d 要留著。',
      hi: [{ t: 'used to', k: 'used', c: 3 }], vis: { type: 'cards', show: 1, pop: true } },
    { ch: 1, sp: 'A', en: 'I used to take piano lessons every Saturday.', cn: '我以前每個星期六都去上鋼琴課。',
      hi: [{ t: 'used to take', cn: '以前常常上', k: 'used', c: 3 }], vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'N', zh: '只要出現 didn\'t，過去已經由它表示了，used 就變回 use。',
      hi: [{ t: "didn't", k: 'nod', c: 4 }], vis: { type: 'cards', show: 2, pop: true } },
    { ch: 1, sp: 'T', en: "Kevin didn't use to eat vegetables.", cn: 'Kevin 以前不吃青菜。',
      hi: [{ t: "didn't use to eat", cn: '以前不吃', k: 'nod', c: 4 }], vis: { type: 'cards', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: '問句也一樣：Did 放最前面，後面接 use to。回答只要說 Yes, she did 或 No, she didn\'t。',
      hi: [{ t: 'Did', k: 'nod', c: 4 }], vis: { type: 'cards', show: 2, lit: 1 } },
    { ch: 1, sp: 'A', en: 'Did your sister use to sing in a band?', cn: '你姊姊以前有在樂團唱歌嗎？',
      hi: [{ t: 'Did your sister use to', cn: '問以前的事', k: 'nod', c: 4 }], vis: { type: 'cards', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: '只發生過一次的事，不用 used to，用過去簡單式。',
      hi: [{ t: '過去簡單式', k: 'ps', c: 2 }], vis: { type: 'cards', show: 3, pop: true } },
    { ch: 1, sp: 'T', en: 'I broke my arm in fifth grade.', cn: '我五年級的時候摔斷過手。',
      hi: [{ t: 'broke', cn: '只有一次', k: 'ps', c: 2 }], vis: { type: 'cards', show: 3, lit: 2 } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: '三種句型排在一起看：肯定句是 used to；否定句是 didn\'t use to；問句用 Did 開頭，再接 use to。',
      hi: [{ t: 'used to', k: 'used', c: 3 }],
      vis: { type: 'pattern', kick: 'Three shapes 三種句型', rows: [
        { lab: '肯定', blocks: [{ t: 'He', k: 's' }, { t: 'used to', k: 'v' }, { t: 'play', k: 'v' }, { t: 'soccer', k: 'n' }] },
        { lab: '否定', blocks: [{ t: 'He', k: 's' }, { t: "didn't use to", k: 'v' }, { t: 'play', k: 'v' }, { t: 'soccer', k: 'n' }] },
        { lab: '問句', blocks: [{ t: 'Did', k: 'v' }, { t: 'he', k: 's' }, { t: 'use to', k: 'v' }, { t: 'play soccer?', k: 'n' }] }
      ] } },
    { ch: 2, sp: 'N', zh: '記一個口訣：有 did，就不會再看到 used，因為過去只要標一次。',
      vis: { type: 'pattern', kick: 'Mark it once 過去只標一次', rows: [
        { lab: '過去在 used', blocks: [{ t: 'Amy', k: 's' }, { t: 'used to', k: 'v', add: true }, { t: 'cook', k: 'v' }] },
        { lab: "過去在 didn't", blocks: [{ t: 'Amy', k: 's' }, { t: "didn't", k: 'v', add: true }, { t: 'use to', k: 'v' }, { t: 'cook', k: 'v' }] }
      ], note: '有 did 就沒有 used' } },
    { ch: 2, sp: 'N', zh: '回答 Did 開頭的問題，也跟著 did 走，說 did 或 didn\'t 就好，不用再講一次 use to。',
      vis: { type: 'family', kick: 'Short answers 簡答', core: 'Did … use to?', coreCn: '問以前的事', art: 'dg20261009b1_did', items: [
        { t: 'Yes, I did.', cn: '對，以前會' }, { t: "No, I didn't.", cn: '不，以前不會' }, { t: 'Yes, she did.', cn: '對，她以前會' }
      ] } },
    { ch: 2, sp: 'N', zh: '反覆的事用 used to；last July 這種只有一次的時間，就用過去式。',
      hi: [{ t: 'used to', k: 'used', c: 3 }],
      vis: { type: 'pattern', kick: '反覆還是一次？', rows: [
        { lab: '那幾年常常', blocks: [{ t: 'We', k: 's' }, { t: 'used to visit', k: 'v' }, { t: 'Grandma', k: 'n' }, { t: 'every summer', k: 'o' }] },
        { lab: '就那一次', blocks: [{ t: 'We', k: 's' }, { t: 'visited', k: 'v' }, { t: 'Grandma', k: 'n' }, { t: 'last July', k: 'o', add: true }] }
      ] } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: '來聽 Emma 和 Jake 在同學會上聊以前，注意 d 什麼時候消失。', vis: { type: 'scene', art: 'dg20261009b1_party' } },
    { ch: 3, sp: 'A', en: 'Look at this photo! Is that you with long hair?', cn: '你看這張照片！留長頭髮的是你嗎？', vis: { type: 'scene', art: 'dg20261009b1_photo' } },
    { ch: 3, sp: 'T', en: 'Yes! I used to have long hair in high school.', cn: '對！我高中的時候留長頭髮。',
      hi: [{ t: 'used to have', cn: '以前是這樣', k: 'used', c: 3 }], vis: { type: 'scene', art: 'dg20261009b1_hair' } },
    { ch: 3, sp: 'N', zh: '這句沒有 did，所以 d 留著，說 used to have。',
      hi: [{ t: 'used to have', k: 'used', c: 3 }], vis: { type: 'scene', art: 'dg20261009b1_dstay' } },
    { ch: 3, sp: 'A', en: 'Did your parents use to complain about it?', cn: '你爸媽以前會唸你嗎？',
      hi: [{ t: 'Did your parents use to', cn: '問以前的事', k: 'nod', c: 4 }], vis: { type: 'scene', art: 'dg20261009b1_parents' } },
    { ch: 3, sp: 'T', en: "No, they didn't. But our teacher did!", cn: '不會，可是我們老師會！',
      hi: [{ t: "they didn't", cn: '簡答', k: 'nod', c: 4 }], vis: { type: 'scene', art: 'dg20261009b1_teacher' } },
    { ch: 3, sp: 'N', zh: 'Emma 的問句有 Did，所以是 use to；Jake 回答只留 didn\'t。',
      hi: [{ t: 'use to', k: 'nod', c: 4 }], vis: { type: 'scene', art: 'dg20261009b1_erase' } },
    { ch: 3, sp: 'T', en: "You didn't use to talk much in class.", cn: '你以前上課不太講話。',
      hi: [{ t: "didn't use to talk", cn: '以前不太講', k: 'nod', c: 4 }], vis: { type: 'scene', art: 'dg20261009b1_quiet' } },
    { ch: 3, sp: 'A', en: 'I know. But I won the speech contest in tenth grade!', cn: '對啊。可是我高一的時候拿了演講比賽冠軍！',
      hi: [{ t: 'won', cn: '只有一次', k: 'ps', c: 2 }], vis: { type: 'scene', art: 'dg20261009b1_trophy' } },
    { ch: 3, sp: 'N', zh: '得獎只有那一次，不是習慣，所以 Emma 用過去式 won。',
      hi: [{ t: 'won', k: 'ps', c: 2 }], vis: { type: 'scene', art: 'dg20261009b1_once' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '同樣是游泳，一個常常游，一個只游過一次。',
      vis: { type: 'vs', sm: true, kick: '常常做 vs 做過一次',
        a: { w: 'Aunt Mei used to swim in the river.', def: '梅阿姨以前常去河裡游泳。', cn: '反覆的舊習慣 → used to' },
        b: { w: 'Aunt Mei swam across the river once.', def: '梅阿姨游過那條河一次。', cn: '只有一次 → 過去簡單式' } } },
    { ch: 4, sp: 'A', en: 'Aunt Mei used to swim in the river.', cn: '梅阿姨以前常去河裡游泳。',
      hi: [{ t: 'used to swim', cn: '常常游', k: 'used', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '常常做 vs 做過一次',
        a: { w: 'Aunt Mei used to swim in the river.', def: '梅阿姨以前常去河裡游泳。', cn: '反覆的舊習慣 → used to' },
        b: { w: 'Aunt Mei swam across the river once.', def: '梅阿姨游過那條河一次。', cn: '只有一次 → 過去簡單式' } } },
    { ch: 4, sp: 'T', en: 'Aunt Mei swam across the river once.', cn: '梅阿姨游過那條河一次。',
      hi: [{ t: 'swam', cn: '只有一次', k: 'ps', c: 2 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '常常做 vs 做過一次',
        a: { w: 'Aunt Mei used to swim in the river.', def: '梅阿姨以前常去河裡游泳。', cn: '反覆的舊習慣 → used to' },
        b: { w: 'Aunt Mei swam across the river once.', def: '梅阿姨游過那條河一次。', cn: '只有一次 → 過去簡單式' } } },
    { ch: 4, sp: 'N', zh: '第一句是以前的習慣，現在不游了；第二句只講那一次。',
      vis: { type: 'vs', sm: true, kick: '常常做 vs 做過一次',
        a: { w: 'Aunt Mei used to swim in the river.', def: '梅阿姨以前常去河裡游泳。', cn: '反覆的舊習慣 → used to' },
        b: { w: 'Aunt Mei swam across the river once.', def: '梅阿姨游過那條河一次。', cn: '只有一次 → 過去簡單式' } } },
    { ch: 4, sp: 'N', zh: '再看一組：肯定 d 留著，否定 d 拿掉。',
      vis: { type: 'vs', sm: true, kick: 'd 留著 vs d 拿掉',
        a: { w: 'Lily used to drink coffee.', def: 'Lily 以前會喝咖啡。', cn: '肯定 → used to' },
        b: { w: "Lily didn't use to drink coffee.", def: 'Lily 以前不喝咖啡。', cn: "否定 → didn't use to" } } },
    { ch: 4, sp: 'A', en: 'Lily used to drink coffee.', cn: 'Lily 以前會喝咖啡。',
      hi: [{ t: 'used to drink', cn: 'd 留著', k: 'used', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: 'd 留著 vs d 拿掉',
        a: { w: 'Lily used to drink coffee.', def: 'Lily 以前會喝咖啡。', cn: '肯定 → used to' },
        b: { w: "Lily didn't use to drink coffee.", def: 'Lily 以前不喝咖啡。', cn: "否定 → didn't use to" } } },
    { ch: 4, sp: 'T', en: "Lily didn't use to drink coffee.", cn: 'Lily 以前不喝咖啡。',
      hi: [{ t: "didn't use to drink", cn: 'd 拿掉', k: 'nod', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: 'd 留著 vs d 拿掉',
        a: { w: 'Lily used to drink coffee.', def: 'Lily 以前會喝咖啡。', cn: '肯定 → used to' },
        b: { w: "Lily didn't use to drink coffee.", def: 'Lily 以前不喝咖啡。', cn: "否定 → didn't use to" } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '最後是判斷流程，照順序問自己。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一問：以前常這樣、現在停了嗎？是的話用 used to。',
      hi: [{ t: 'used to', k: 'used', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'A', en: 'My dad used to cook breakfast for us.', cn: '我爸以前會做早餐給我們吃。',
      hi: [{ t: 'used to cook', cn: '以前常常', k: 'used', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二問：句子前面有 didn\'t 或 Did 嗎？有的話，d 拿掉，寫成 use to。',
      hi: [{ t: 'use to', k: 'nod', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'T', en: 'Did your school use to have a pool?', cn: '你們學校以前有游泳池嗎？',
      hi: [{ t: 'Did your school use to', cn: 'Did 開頭', k: 'nod', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '只發生一次，或數得出幾次，就用過去簡單式。',
      hi: [{ t: '過去簡單式', k: 'ps', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'A', en: 'We moved to Hsinchu in 2015.', cn: '我們二〇一五年搬到新竹。',
      hi: [{ t: 'moved', cn: '只有一次', k: 'ps', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說說看。先用英文說出來，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：你以前放學都去打籃球，現在沒有了。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '你以前每天放學都去打籃球，現在已經沒有了。' } },
    { ch: 6, sp: 'A', en: 'I used to play basketball after school.', cn: '我以前放學都去打籃球。',
      hi: [{ t: 'used to play', cn: '肯定 → d 留著', k: 'used', c: 3 }],
      vis: { type: 'speak', n: 1, show: true, sit: '你以前每天放學都去打籃球，現在已經沒有了。', a: 'I used to play basketball after school.' } },
    { ch: 6, sp: 'N', zh: '情境二：你媽媽以前不喜歡吃辣，現在很愛。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '你想說，你以前不喜歡吃辣，現在很愛。' } },
    { ch: 6, sp: 'T', en: "My mom didn't use to like spicy food.", cn: '我媽以前不喜歡吃辣。',
      hi: [{ t: "didn't use to like", cn: '否定 → d 拿掉', k: 'nod', c: 4 }],
      vis: { type: 'speak', n: 2, show: true, sit: '你想說，你以前不喜歡吃辣，現在很愛。', a: "My mom didn't use to like spicy food." } },
    { ch: 6, sp: 'N', zh: '情境三：你想問朋友，他弟弟小時候怕不怕黑。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '你想問朋友，他弟弟小時候會不會怕黑。' } },
    { ch: 6, sp: 'A', en: 'Did your brother use to be afraid of the dark?', cn: '你弟弟以前會怕黑嗎？',
      hi: [{ t: 'Did your brother use to', cn: '問句 → d 拿掉', k: 'nod', c: 4 }],
      vis: { type: 'speak', n: 3, show: true, sit: '你想問朋友，他弟弟小時候會不會怕黑。', a: 'Did your brother use to be afraid of the dark?' } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結一下：肯定句用 used to，d 留著；有 didn\'t 或 Did，就寫 use to；只發生一次的事，用過去簡單式。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '下次看到 did 或 didn\'t，記得把 used 的 d 拿掉。', vis: { type: 'end' } }
  ]
};
