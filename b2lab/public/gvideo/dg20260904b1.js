/* ============================================================
   B2 Read 文法影片解說 — dg20260904b1（Unit 8，B1）
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
  /* 小房子：x,y 左下角 */
  var house=function(x,y,col){ return '<path d="M'+x+' '+y+' V'+(y-34)+' L'+(x+28)+' '+(y-58)+' L'+(x+56)+' '+(y-34)+' V'+y+' Z" fill="'+col+'" '+st+'/><rect x="'+(x+20)+'" y="'+(y-22)+'" width="16" height="22" fill="'+A+'" '+th(2.5)+'/>'; };
  /* 飛機（朝右） */
  var plane=function(tf){ return '<g transform="'+tf+'"><path d="M10 40 H90 a10 10 0 0 1 0 20 H10 l-8 -10 Z" fill="#fff" '+st+'/>'
    +'<path d="M40 40 L60 14 H70 L62 40 Z M40 60 L60 86 H70 L62 60 Z" fill="'+B+'" '+st+'/><path d="M6 40 L0 24 H10 L18 40 Z" fill="'+B+'" '+st+'/>'
    +'<g fill="'+S+'"><circle cx="72" cy="48" r="3"/><circle cx="62" cy="48" r="3"/><circle cx="52" cy="48" r="3"/></g></g>'; };
  /* 行李箱 */
  var bag=function(x,y,col){ return '<rect x="'+(x+14)+'" y="'+(y-12)+'" width="20" height="14" rx="4" fill="none" '+th(3.5)+'/><rect x="'+x+'" y="'+y+'" width="48" height="60" rx="8" fill="'+col+'" '+st+'/>'
    +'<path d="M'+(x+16)+' '+(y+8)+' V'+(y+52)+' M'+(x+32)+' '+(y+8)+' V'+(y+52)+'" '+th(2.5)+'/><circle cx="'+(x+10)+'" cy="'+(y+64)+'" r="4" fill="'+D+'"/><circle cx="'+(x+38)+'" cy="'+(y+64)+'" r="4" fill="'+D+'"/>'; };

  Object.assign(window.GVIDEO_ART, {
    /* 核心 1：gone——行李箱＋飛走的箭頭（人還在那裡） */
    dg20260904b1_gone: svg(
      house(14,132,L)
     +'<path d="M76 100 C96 100 104 52 124 40" fill="none" stroke="'+B+'" stroke-width="6" stroke-linecap="round" stroke-dasharray="2 12"/>'
     +'<path d="M118 26 L146 30 L130 52 Z" fill="'+B+'" '+st+'/>'
     +bag(144,70,R)),
    /* 核心 2：been——出門又回家的一圈箭頭 */
    dg20260904b1_been: svg(
      house(72,136,L)
     +'<path d="M70 82 C30 70 30 20 100 18 C170 20 170 70 130 82" fill="none" stroke="'+G+'" stroke-width="7" stroke-linecap="round"/>'
     +'<path d="M120 70 L138 86 L114 92 Z" fill="'+G+'" '+st+'/>'
     +'<circle cx="100" cy="18" r="8" fill="'+Y+'" '+st+'/>'),
    /* 核心 3：ever／never——蓋滿章的護照 */
    dg20260904b1_ever: svg(
      '<rect x="52" y="14" width="96" height="124" rx="8" fill="#1f4f7a" '+st+'/>'
     +'<rect x="62" y="24" width="76" height="104" rx="4" fill="'+C+'" '+th(2.5)+'/>'
     +'<circle cx="84" cy="50" r="14" fill="none" stroke="'+R+'" stroke-width="4"/><path d="M78 50 h12" stroke="'+R+'" stroke-width="4" stroke-linecap="round"/>'
     +'<rect x="102" y="40" width="28" height="22" rx="3" fill="none" stroke="'+G+'" stroke-width="4" transform="rotate(-10 116 51)"/>'
     +'<path d="M72 104 l12 -20 l12 20 Z" fill="none" stroke="'+B+'" stroke-width="4" stroke-linejoin="round"/>'
     +'<circle cx="118" cy="96" r="13" fill="none" stroke="'+A+'" stroke-width="4"/>'
     +qb(166,30)),

    /* 情境 1：公司櫃台 */
    dg20260904b1_desk: svg(
      '<line x1="8" y1="134" x2="192" y2="134" '+st+'/>'
     +'<rect x="30" y="72" width="140" height="62" rx="4" fill="'+A+'" '+st+'/><rect x="24" y="64" width="152" height="12" rx="3" fill="'+L+'" '+st+'/>'
     +'<circle cx="100" cy="34" r="16" fill="'+Y+'" '+st+'/><path d="M78 64 V58 a22 14 0 0 1 44 0 V64 Z" fill="'+B+'" '+st+'/>'
     +'<circle cx="94" cy="32" r="2" fill="'+D+'"/><circle cx="106" cy="32" r="2" fill="'+D+'"/><path d="M95 40 q5 4 10 0" fill="none" '+th(2)+'/>'
     +'<path d="M140 64 v-14 h18 v14" fill="'+S+'" '+th(2.5)+'/><circle cx="52" cy="58" r="6" fill="'+Y+'" '+th(2.5)+'/><path d="M46 64 h12" '+th(3)+'/>'),
    /* 情境 2：Arthur 在辦公室嗎？——辦公室門＋問號 */
    dg20260904b1_door: svg(
      '<line x1="8" y1="134" x2="192" y2="134" '+st+'/>'
     +'<rect x="56" y="18" width="80" height="116" rx="3" fill="'+L+'" '+st+'/><rect x="66" y="28" width="60" height="18" rx="3" fill="#fff" '+th(2.5)+'/>'
     +'<path d="M74 37 h44" stroke="#b9ad9f" stroke-width="4" stroke-linecap="round"/>'
     +'<rect x="70" y="58" width="52" height="40" rx="3" fill="'+S+'" '+th(2.5)+'/>'
     +'<circle cx="124" cy="96" r="5" fill="'+Y+'" '+th(2.5)+'/>'
     +qb(166,40)),
    /* 情境 3：他去大阪開會了——飛機飛走 */
    dg20260904b1_plane: svg(
      '<path d="M20 120 a14 14 0 0 1 14 -14 a18 18 0 0 1 32 2 a12 12 0 0 1 4 24 H26 a10 10 0 0 1 -6 -12 Z" fill="#fff" '+th(2.5)+'/>'
     +'<path d="M150 30 a10 10 0 0 1 10 -10 a14 14 0 0 1 24 2 a9 9 0 0 1 2 18 H152 a8 8 0 0 1 -2 -10 Z" fill="#fff" '+th(2.5)+'/>'
     +plane('translate(48 30) rotate(-14 50 50)')
     +'<path d="M22 92 h26 M30 80 h22" stroke="#b9ad9f" stroke-width="4" stroke-linecap="round"/>'),
    /* 情境 4：人現在在大阪——空的辦公椅 */
    dg20260904b1_chair: svg(
      '<line x1="8" y1="134" x2="192" y2="134" '+st+'/>'
     +'<rect x="64" y="22" width="56" height="58" rx="12" fill="'+B+'" '+st+'/>'
     +'<rect x="56" y="78" width="72" height="14" rx="6" fill="'+B+'" '+st+'/>'
     +'<path d="M92 92 V114 M70 128 L92 114 L114 128 M92 114 V130" fill="none" '+th(4)+'/>'
     +'<circle cx="70" cy="130" r="4" fill="'+D+'"/><circle cx="114" cy="130" r="4" fill="'+D+'"/><circle cx="92" cy="131" r="4" fill="'+D+'"/>'
     +'<rect x="136" y="60" width="44" height="74" fill="'+L+'" '+st+'/><rect x="132" y="54" width="52" height="10" rx="3" fill="'+A+'" '+st+'/>'
     +'<path d="M146 54 l6 -16 h14 l6 16" fill="'+S+'" '+th(2.5)+'/>'),
    /* 情境 5：我去過大阪，東西超好吃——章魚燒 */
    dg20260904b1_food: svg(
      '<path d="M24 92 H176 L164 126 H36 Z" fill="#c98b4a" '+st+'/>'
     +'<g fill="#e6a65d" '+st+'><circle cx="58" cy="84" r="20"/><circle cx="100" cy="80" r="21"/><circle cx="142" cy="84" r="20"/></g>'
     +'<path d="M44 80 q14 -10 28 0 M86 76 q14 -10 28 0 M128 80 q14 -10 28 0" fill="none" stroke="#6b3a1f" stroke-width="5" stroke-linecap="round"/>'
     +'<g fill="'+G+'"><circle cx="52" cy="72" r="2.5"/><circle cx="104" cy="68" r="2.5"/><circle cx="146" cy="72" r="2.5"/></g>'
     +'<path d="M150 20 L120 70" '+th(4)+'/>'
     +'<path d="M70 30 v10 M60 34 l5 8 M80 34 l-5 8" '+th(3)+'/>'),
    /* 情境 6：回來了——拉著行李進家門＋打勾 */
    dg20260904b1_back: svg(
      '<line x1="8" y1="134" x2="192" y2="134" '+st+'/>'
     +house(110,134,L)
     +bag(40,66,Y)
     +'<path d="M96 96 h-6 M100 96 l-10 -8 M100 96 l-10 8" fill="none" '+th(4)+'/>'
     +chk(162,42,16)),
    /* 情境 7：台中的新辦公室——新大樓＋星星 */
    dg20260904b1_office: svg(
      '<line x1="8" y1="134" x2="192" y2="134" '+st+'/>'
     +'<rect x="60" y="26" width="80" height="108" fill="'+S+'" '+st+'/>'
     +'<g fill="#fff" '+th(2.5)+'><rect x="70" y="38" width="24" height="16"/><rect x="106" y="38" width="24" height="16"/><rect x="70" y="64" width="24" height="16"/><rect x="106" y="64" width="24" height="16"/><rect x="70" y="90" width="24" height="16"/><rect x="106" y="90" width="24" height="16"/></g>'
     +'<rect x="90" y="114" width="20" height="20" fill="'+A+'" '+th(2.5)+'/>'
     +'<path d="M166 20 l5 11 l12 1 l-9 8 l3 12 l-11 -6 l-11 6 l3 -12 l-9 -8 l12 -1 Z" fill="'+Y+'" '+st+'/>'
     +'<path d="M30 60 l4 8 l8 1 l-6 5 l2 8 l-8 -4 l-8 4 l2 -8 l-6 -5 l8 -1 Z" fill="'+Y+'" '+th(2.5)+'/>'),
    /* 情境 8：從來沒去過——地圖上的大頭針＋問號 */
    dg20260904b1_map: svg(
      '<path d="M20 34 L66 20 L120 36 L172 22 V118 L120 132 L66 116 L20 130 Z" fill="'+C+'" '+st+'/>'
     +'<path d="M66 20 V116 M120 36 V132" '+th(2.5)+'/>'
     +'<path d="M30 70 q20 -14 30 6 t40 4 t50 -10" fill="none" stroke="'+B+'" stroke-width="4" stroke-linecap="round" stroke-dasharray="2 8"/>'
     +'<path d="M140 104 C126 84 124 76 124 70 a16 16 0 0 1 32 0 c0 6 -2 14 -16 34 Z" fill="'+R+'" '+st+'/><circle cx="140" cy="70" r="6" fill="#fff" '+th(2)+'/>'
     +qb(46,104)),
    /* 情境 9：主管今天就去了——開走的車 */
    dg20260904b1_car: svg(
      '<line x1="8" y1="128" x2="192" y2="128" '+st+'/>'
     +'<path d="M56 110 V88 a8 8 0 0 1 8 -8 h16 l14 -20 h44 l18 20 h10 a8 8 0 0 1 8 8 v22 Z" fill="'+G+'" '+st+'/>'
     +'<path d="M98 66 h18 v14 h-28 Z M122 66 h14 l12 14 h-26 Z" fill="'+S+'" '+th(2.5)+'/>'
     +'<circle cx="82" cy="112" r="12" fill="'+D+'"/><circle cx="82" cy="112" r="5" fill="#c9c2b8"/><circle cx="148" cy="112" r="12" fill="'+D+'"/><circle cx="148" cy="112" r="5" fill="#c9c2b8"/>'
     +'<path d="M14 84 h28 M20 98 h24 M10 70 h22" stroke="#b9ad9f" stroke-width="4" stroke-linecap="round"/>'),
    /* 情境 10：兩個都用得上——月曆上兩次打勾＋往外的箭頭 */
    dg20260904b1_twice: svg(
      '<rect x="20" y="32" width="100" height="92" rx="8" fill="#fff" '+st+'/>'
     +'<path d="M20 54 V40 a8 8 0 0 1 8 -8 H112 a8 8 0 0 1 8 8 V54 Z" fill="'+R+'" '+st+'/>'
     +'<line x1="42" y1="24" x2="42" y2="40" '+th(4)+'/><line x1="98" y1="24" x2="98" y2="40" '+th(4)+'/>'
     +chk(46,82,11)+chk(94,102,11)
     +'<path d="M134 78 H168" stroke="'+B+'" stroke-width="8" stroke-linecap="round"/><path d="M162 64 L186 78 L162 92 Z" fill="'+B+'" '+st+'/>')
  });
})();

/* ============================================================
   dg20260904b1 — Have Been To vs Have Gone To
   Grammar in Use Unit 7（gone to／been to）＋ Unit 8（Have you ever been…?）
   ============================================================ */
window.GVIDEO.dg20260904b1 = {
  kind: 'gram',
  date: '2026-09-04',
  title: 'Been To or Gone To?',
  titleCn: 'have been to 還是 have gone to？人到底回來了沒',
  titleArt: ['dg20260904b1_gone', 'dg20260904b1_been', 'dg20260904b1_ever'],
  scene: '公司櫃台 At the front desk',
  sceneArt: 'dg20260904b1_desk',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Nadia', voice: 'f' },
    T: { name: 'Toby', voice: 'm' }
  },
  expr: {
    gone: { t: 'have / has gone to', cn: '去了，人還在那裡、還沒回來', ex: "Lucas isn't at his desk. He's gone to the post office.", exCn: 'Lucas 不在座位上，他去郵局了。', note: '常用來解釋「他人不在」' },
    been: { t: 'have / has been to', cn: '去過，人已經回來了', ex: "We've been to that hot spring twice.", exCn: '我們去過那個溫泉兩次。', note: '講去過幾次、講經驗' },
    ever: { t: 'ever / never + been to', cn: '問經驗、說從沒去過，都用 been', ex: 'Has your dad ever been to a jazz club?', exCn: '你爸爸去過爵士酒吧嗎？', note: '講自己也用 been：你人都在這裡說話了' }
  },
  chapters: [
    { cn: '開場' }, { cn: '人回來了沒？' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  cardsKick: 'Back yet? 說話這一刻，人回來了沒？',
  cards: [
    { art: 'dg20260904b1_gone', lab: 'gone to',      who: '去了，還沒回來' },
    { art: 'dg20260904b1_been', lab: 'been to',      who: '去過，已經回來' },
    { art: 'dg20260904b1_ever', lab: 'ever・never', who: '問經驗都用 been' }
  ],
  flow: [
    { q: '說話這一刻，他人還在那裡嗎？',   a: 'gone to', en: 'have / has gone to + 地點' },
    { q: '已經回來了，在講去過的經驗？',   a: 'been to', en: 'have / has been to + 地點' },
    { q: '主詞是自己，或有 ever、never？', a: '用 been', en: 'ever / never + been to' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: 'gone 跟 been 只差一個字，意思卻差很多：一個是人還沒回來，一個是已經回來了。這支影片幫你分清楚。', vis: { type: 'title' } },

    /* ---- 1 核心：人回來了沒？ ---- */
    { ch: 1, sp: 'N', zh: '說誰去了哪裡，先問一句：說話的這一刻，這個人回來了沒？', vis: { type: 'cards', show: 0 } },
    { ch: 1, sp: 'N', zh: '如果他去了，現在人還在那裡，或還在路上，就用 has gone to。',
      hi: [{ t: 'has gone to', k: 'gone', c: 3 }], vis: { type: 'cards', show: 1, pop: true } },
    { ch: 1, sp: 'A', en: "Grandpa isn't home. He's gone to the temple.", cn: '爺爺不在家，他去廟裡了。',
      hi: [{ t: "He's gone to", cn: '人還在那裡', k: 'gone', c: 3 }], vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'N', zh: '如果他去了一趟，現在已經回來了，就用 has been to。',
      hi: [{ t: 'has been to', k: 'been', c: 4 }], vis: { type: 'cards', show: 2, pop: true } },
    { ch: 1, sp: 'T', en: "Grandpa has been to the temple. He's back now.", cn: '爺爺去過廟裡了，現在回來了。',
      hi: [{ t: 'has been to', cn: '去了又回來', k: 'been', c: 4 }], vis: { type: 'cards', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: '所以 gone 常拿來解釋「他人不在這裡」；been 是來回走了一趟。',
      vis: { type: 'cards', show: 2 } },
    { ch: 1, sp: 'N', zh: '講人生經驗，問「你去過嗎」，或說「從來沒去過」，也一律用 been。',
      hi: [{ t: 'been', k: 'ever', c: 2 }], vis: { type: 'cards', show: 3, pop: true } },
    { ch: 1, sp: 'A', en: 'Have you ever been to the night markets in Tainan?', cn: '你去過台南的夜市嗎？',
      hi: [{ t: 'Have you ever been to', cn: '問經驗', k: 'ever', c: 2 }], vis: { type: 'cards', show: 3, lit: 2 } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: 'gone to 的句型：主詞加 has gone to，再加地點。I、you、we、they 用 have。',
      hi: [{ t: 'has gone to', k: 'gone', c: 3 }],
      vis: { type: 'pattern', kick: 'have / has gone to 去了還沒回來', rows: [
        { lab: '他',   blocks: [{ t: 'Paul', k: 's' }, { t: 'has gone to', k: 'v' }, { t: 'the gym', k: 'o' }] },
        { lab: '他們', blocks: [{ t: 'They', k: 's' }, { t: 'have gone to', k: 'v' }, { t: 'the beach', k: 'o' }] }
      ], note: 'go 的過去分詞是 gone' } },
    { ch: 2, sp: 'N', zh: 'been to 的句型一樣，只是 gone 換成 been。後面常接次數，例如 once、twice、three times。',
      hi: [{ t: 'twice', k: 'been', c: 4 }],
      vis: { type: 'pattern', kick: 'have / has been to 去過', rows: [
        { lab: '一次', blocks: [{ t: 'I', k: 's' }, { t: 'have been to', k: 'v' }, { t: 'Seoul', k: 'o' }, { t: 'once', k: 'n', add: true }] },
        { lab: '兩次', blocks: [{ t: 'She', k: 's' }, { t: 'has been to', k: 'v' }, { t: 'Bali', k: 'o' }, { t: 'twice', k: 'n', add: true }] }
      ] } },
    { ch: 2, sp: 'N', zh: '問經驗用 Have you ever been to；說沒去過，用 never been to。',
      hi: [{ t: 'never been to', k: 'ever', c: 2 }],
      vis: { type: 'pattern', kick: 'ever · never', rows: [
        { lab: '去過嗎', blocks: [{ t: 'Have', k: 'v' }, { t: 'you', k: 's' }, { t: 'ever', k: 'n', add: true }, { t: 'been to', k: 'v' }, { t: 'Paris?', k: 'o' }] },
        { lab: '沒去過', blocks: [{ t: 'I', k: 's' }, { t: 'have', k: 'v' }, { t: 'never', k: 'n', add: true }, { t: 'been to', k: 'v' }, { t: 'Paris', k: 'o' }] }
      ] } },
    { ch: 2, sp: 'N', zh: '地點如果是 there、here、home 這種字，前面就不加 to。',
      vis: { type: 'family', kick: '不加 to 的地點', core: 'been there', coreCn: '這些字前面不放 to', art: 'dg20260904b1_been', items: [
        { t: 'been there', cn: '去過那裡' }, { t: 'gone home', cn: '回家了' }, { t: 'been here', cn: '來過這裡' }
      ] } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: 'Nadia 來公司找同事 Arthur，櫃台的 Toby 跟她說明。注意聽 gone 和 been 怎麼分。', vis: { type: 'scene', art: 'dg20260904b1_desk' } },
    { ch: 3, sp: 'A', en: 'Hi, Toby. Is Arthur in his office?', cn: 'Toby 你好，Arthur 在辦公室嗎？', vis: { type: 'scene', art: 'dg20260904b1_door' } },
    { ch: 3, sp: 'T', en: "No, he's gone to Osaka for a meeting.", cn: '不在，他去大阪開會了。',
      hi: [{ t: "he's gone to", cn: '人在大阪', k: 'gone', c: 3 }], vis: { type: 'scene', art: 'dg20260904b1_plane' } },
    { ch: 3, sp: 'N', zh: 'Arthur 現在人在大阪，還沒回來，所以用 has gone to。',
      hi: [{ t: 'has gone to', k: 'gone', c: 3 }], vis: { type: 'scene', art: 'dg20260904b1_chair' } },
    { ch: 3, sp: 'A', en: "Oh, I've been to Osaka. The food there is amazing.", cn: '喔，我去過大阪，那裡的東西超好吃。',
      hi: [{ t: "I've been to", cn: '去過', k: 'been', c: 4 }], vis: { type: 'scene', art: 'dg20260904b1_food' } },
    { ch: 3, sp: 'N', zh: 'Nadia 去過大阪，人早就回來了，講的是經驗，所以用 have been to。',
      hi: [{ t: 'have been to', k: 'been', c: 4 }], vis: { type: 'scene', art: 'dg20260904b1_back' } },
    { ch: 3, sp: 'T', en: 'Have you ever been to our new office in Taichung?', cn: '你去過我們台中的新辦公室嗎？',
      hi: [{ t: 'Have you ever been to', cn: '問經驗', k: 'ever', c: 2 }], vis: { type: 'scene', art: 'dg20260904b1_office' } },
    { ch: 3, sp: 'A', en: "No, I've never been there. Have you?", cn: '沒有，我從來沒去過。你呢？',
      hi: [{ t: "I've never been there", cn: '沒去過', k: 'ever', c: 2 }], vis: { type: 'scene', art: 'dg20260904b1_map' } },
    { ch: 3, sp: 'T', en: 'Yes, twice. Actually, my manager has gone there today.', cn: '有，去過兩次。其實我主管今天就去那裡了。',
      hi: [{ t: 'has gone', cn: '人在台中', k: 'gone', c: 3 }], vis: { type: 'scene', art: 'dg20260904b1_car' } },
    { ch: 3, sp: 'N', zh: '問經驗、說去過幾次，用 been；主管今天人在台中、還沒回來，用 gone。',
      hi: [{ t: 'been', k: 'been', c: 4 }, { t: 'gone', k: 'gone', c: 3 }], vis: { type: 'scene', art: 'dg20260904b1_twice' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '同一個人、同一個地方，換一個字，人在哪裡就不一樣。',
      vis: { type: 'vs', sm: true, kick: '人在不在那裡',
        a: { w: 'Ruby has gone to the market.', def: 'Ruby 去市場了。', cn: '人還在市場 → gone' },
        b: { w: 'Ruby has been to the market.', def: 'Ruby 去過市場了。', cn: '人已經回來 → been' } } },
    { ch: 4, sp: 'A', en: 'Ruby has gone to the market.', cn: 'Ruby 去市場了。',
      hi: [{ t: 'has gone to', cn: '還沒回來', k: 'gone', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '人在不在那裡',
        a: { w: 'Ruby has gone to the market.', def: 'Ruby 去市場了。', cn: '人還在市場 → gone' },
        b: { w: 'Ruby has been to the market.', def: 'Ruby 去過市場了。', cn: '人已經回來 → been' } } },
    { ch: 4, sp: 'T', en: 'Ruby has been to the market.', cn: 'Ruby 去過市場了。',
      hi: [{ t: 'has been to', cn: '已經回來', k: 'been', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '人在不在那裡',
        a: { w: 'Ruby has gone to the market.', def: 'Ruby 去市場了。', cn: '人還在市場 → gone' },
        b: { w: 'Ruby has been to the market.', def: 'Ruby 去過市場了。', cn: '人已經回來 → been' } } },
    { ch: 4, sp: 'N', zh: '第一句，Ruby 現在人在市場，家裡找不到她；第二句，她已經回到家，菜都買回來了。',
      vis: { type: 'vs', sm: true, kick: '人在不在那裡',
        a: { w: 'Ruby has gone to the market.', def: 'Ruby 去市場了。', cn: '人還在市場 → gone' },
        b: { w: 'Ruby has been to the market.', def: 'Ruby 去過市場了。', cn: '人已經回來 → been' } } },
    { ch: 4, sp: 'N', zh: '再看一組。講自己的時候，你人就在這裡說話，所以講自己的經驗用 been。',
      vis: { type: 'vs', sm: true, kick: '說別人 vs 說自己',
        a: { w: 'My sister has gone to Canada.', def: '我姊姊去加拿大了。', cn: '她人在那邊 → gone' },
        b: { w: "I've been to Canada twice.", def: '我去過加拿大兩次。', cn: '自己的經驗 → been' } } },
    { ch: 4, sp: 'A', en: 'My sister has gone to Canada.', cn: '我姊姊去加拿大了。',
      hi: [{ t: 'has gone to', cn: '人在那邊', k: 'gone', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '說別人 vs 說自己',
        a: { w: 'My sister has gone to Canada.', def: '我姊姊去加拿大了。', cn: '她人在那邊 → gone' },
        b: { w: "I've been to Canada twice.", def: '我去過加拿大兩次。', cn: '自己的經驗 → been' } } },
    { ch: 4, sp: 'T', en: "I've been to Canada twice.", cn: '我去過加拿大兩次。',
      hi: [{ t: "I've been to", cn: '自己的經驗', k: 'been', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '說別人 vs 說自己',
        a: { w: 'My sister has gone to Canada.', def: '我姊姊去加拿大了。', cn: '她人在那邊 → gone' },
        b: { w: "I've been to Canada twice.", def: '我去過加拿大兩次。', cn: '自己的經驗 → been' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '最後給你一個判斷流程，照順序問自己三個問題。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一問：說話這一刻，他人還在那裡嗎？是的話，用 gone to。',
      hi: [{ t: 'gone to', k: 'gone', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'A', en: "Mark isn't here. He's gone to the bank.", cn: 'Mark 不在，他去銀行了。',
      hi: [{ t: "He's gone to", cn: '人在銀行', k: 'gone', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二問：人已經回來了，你在講去過的經驗嗎？是的話，用 been to。',
      hi: [{ t: 'been to', k: 'been', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'T', en: "We've been to that night market three times.", cn: '我們去過那個夜市三次。',
      hi: [{ t: "We've been to", cn: '經驗', k: 'been', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '第三問：主詞是自己，或句子裡有 ever、never 嗎？有的話，一樣用 been。',
      hi: [{ t: 'never', k: 'ever', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'A', en: 'Have your parents ever been to Kinmen?', cn: '你爸媽去過金門嗎？',
      hi: [{ t: 'ever been to', cn: '問經驗', k: 'ever', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說說看。看到中文情境，先自己用英文說出來，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：有人打電話找你媽媽，她去醫院看外婆了，還沒回來。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '有人打電話找你媽媽，她去醫院看外婆了，還沒回來。' } },
    { ch: 6, sp: 'A', en: "She's gone to the hospital to see my grandma.", cn: '她去醫院看我外婆了。',
      hi: [{ t: "She's gone to", cn: '人還在醫院 → gone', k: 'gone', c: 3 }],
      vis: { type: 'speak', n: 1, show: true, sit: '有人打電話找你媽媽，她去醫院看外婆了，還沒回來。', a: "She's gone to the hospital to see my grandma." } },
    { ch: 6, sp: 'N', zh: '情境二：朋友問你去過韓國沒有，你去過三次。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '朋友問你去過韓國沒有，你去過三次。' } },
    { ch: 6, sp: 'T', en: "I've been to Korea three times.", cn: '我去過韓國三次。',
      hi: [{ t: "I've been to", cn: '自己的經驗 → been', k: 'been', c: 4 }],
      vis: { type: 'speak', n: 2, show: true, sit: '朋友問你去過韓國沒有，你去過三次。', a: "I've been to Korea three times." } },
    { ch: 6, sp: 'N', zh: '情境三：你想問新同事，他有沒有去過澎湖。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '你想問新同事，他有沒有去過澎湖。' } },
    { ch: 6, sp: 'A', en: 'Have you ever been to Penghu?', cn: '你去過澎湖嗎？',
      hi: [{ t: 'Have you ever been to', cn: '問經驗 → been', k: 'ever', c: 2 }],
      vis: { type: 'speak', n: 3, show: true, sit: '你想問新同事，他有沒有去過澎湖。', a: 'Have you ever been to Penghu?' } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結一下：人還沒回來，用 gone to；去過又回來，用 been to；問經驗、講自己，都用 been。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '下次說「去了」之前，先問一句：他回來了沒？', vis: { type: 'end' } }
  ]
};
