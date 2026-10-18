/* ============================================================
   B2 Read 文法影片解說 — dg20260915a2（Grammar in Use Unit 11，A2）
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
  /* 腳踏車：後輪中心 (x,y)，輪距 54 */
  var bike=function(x,y,col){
    return '<circle cx="'+x+'" cy="'+y+'" r="15" fill="#fff" '+th(3.5)+'/><circle cx="'+(x+54)+'" cy="'+y+'" r="15" fill="#fff" '+th(3.5)+'/>'
      +'<path d="M'+x+' '+y+' L'+(x+20)+' '+(y-24)+' L'+(x+44)+' '+(y-24)+' L'+(x+54)+' '+y+' M'+x+' '+y+' L'+(x+26)+' '+y+' L'+(x+20)+' '+(y-24)+' M'+(x+26)+' '+y+' L'+(x+44)+' '+(y-24)+'" fill="none" stroke="'+(col||R)+'" stroke-width="4" stroke-linejoin="round" stroke-linecap="round"/>'
      +'<path d="M'+(x+14)+' '+(y-30)+' h12 M'+(x+44)+' '+(y-24)+' l-3 -9 h8" fill="none" '+th(3.5)+'/>'; };
  var face=function(cx,cy,r,col){ return '<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="'+(col||L)+'" '+st+'/><circle cx="'+(cx-r*0.35)+'" cy="'+(cy-r*0.1)+'" r="2.4" fill="'+D+'"/><circle cx="'+(cx+r*0.35)+'" cy="'+(cy-r*0.1)+'" r="2.4" fill="'+D+'"/><path d="M'+(cx-r*0.35)+' '+(cy+r*0.3)+' q'+(r*0.35)+' '+(r*0.3)+' '+(r*0.7)+' 0" fill="none" '+th(2.5)+'/>'; };
  var wrench=function(tr){ return '<g transform="'+tr+'"><path d="M-6 -40 a18 18 0 1 0 12 0 V-26 H-6 Z" fill="#c9c2b8" '+st+'/><rect x="-6" y="-16" width="12" height="60" rx="5" fill="#c9c2b8" '+st+'/></g>'; };

  Object.assign(window.GVIDEO_ART, {
    /* 核心 1：從過去到現在的一整段＋問號（How long?） */
    dg20260915a2_span: svg(
      '<line x1="14" y1="112" x2="184" y2="112" '+th(4)+'/><path d="M184 112 l-10 -7 v14 Z" fill="'+D+'" '+th(2.5)+'/>'
     +'<path d="M34 100 Q102 22 162 100" fill="none" stroke="'+A+'" stroke-width="4" stroke-dasharray="7 7" stroke-linecap="round"/>'
     +'<circle cx="34" cy="112" r="8" fill="'+B+'" '+st+'/>'
     +'<rect x="158" y="92" width="8" height="40" rx="3" fill="'+A+'" '+th(2.5)+'/>'
     +txt(162,146,'NOW',13,A)
     +qb(100,52)),
    /* 核心 2：沙漏（for＋一段長度） */
    dg20260915a2_glass: svg(
      '<rect x="62" y="14" width="76" height="12" rx="4" fill="'+A+'" '+st+'/><rect x="62" y="124" width="76" height="12" rx="4" fill="'+A+'" '+st+'/>'
     +'<path d="M72 26 C72 58 94 64 94 75 C94 86 72 92 72 124 H128 C128 92 106 86 106 75 C106 64 128 58 128 26 Z" fill="'+S+'" '+st+'/>'
     +'<path d="M80 44 Q100 52 120 44 C116 58 104 64 102 72 H98 C96 64 84 58 80 44 Z" fill="'+Y+'"/>'
     +'<path d="M78 120 Q100 96 122 120 Z" fill="'+Y+'" '+th(2)+'/><line x1="100" y1="76" x2="100" y2="104" stroke="'+Y+'" stroke-width="3" stroke-dasharray="2 4"/>'
     +'<path d="M72 26 C72 58 94 64 94 75 C94 86 72 92 72 124 H128 C128 92 106 86 106 75 C106 64 128 58 128 26 Z" fill="none" '+st+'/>'
     +'<path d="M152 40 v70 M146 40 h12 M146 110 h12" fill="none" '+th(3)+'/>'),
    /* 核心 3：月曆上插旗的那一天（since＋起點） */
    dg20260915a2_flag: svg(
      cal(20,34,112,98)
     +'<rect x="30" y="64" width="20" height="16" rx="2" fill="'+G+'" opacity=".3"/>'
     +'<line x1="40" y1="74" x2="40" y2="30" '+th(3.5)+'/><path d="M40 30 L66 38 L40 46 Z" fill="'+G+'" '+st+'/>'
     +'<path d="M140 74 H184" fill="none" stroke="'+A+'" stroke-width="5" stroke-linecap="round"/><path d="M184 74 l-10 -8 v16 Z" fill="'+A+'" '+th(2.5)+'/>'),

    /* 情境 1：街角的腳踏車店 */
    dg20260915a2_shop: svg(
      '<line x1="8" y1="136" x2="192" y2="136" '+st+'/>'
     +'<rect x="26" y="50" width="148" height="86" fill="'+C+'" '+st+'/>'
     +'<path d="M20 34 H180 L174 54 a10 10 0 0 1 -20 0 a10 10 0 0 1 -20 0 a10 10 0 0 1 -20 0 a10 10 0 0 1 -20 0 a10 10 0 0 1 -20 0 a10 10 0 0 1 -20 0 a10 10 0 0 1 -20 0 a10 10 0 0 1 -20 0 Z" fill="'+G+'" '+st+'/>'
     +'<rect x="36" y="64" width="54" height="40" fill="'+S+'" '+st+'/><rect x="132" y="70" width="32" height="66" fill="'+L+'" '+st+'/>'
     +bike(62,120,R)),
    /* 情境 2：這家店開多久了？——招牌＋問號 */
    dg20260915a2_signq: svg(
      '<line x1="20" y1="22" x2="130" y2="22" '+th(4)+'/><line x1="44" y1="22" x2="44" y2="46" '+th(3)+'/><line x1="106" y1="22" x2="106" y2="46" '+th(3)+'/>'
     +'<rect x="24" y="46" width="102" height="66" rx="10" fill="'+G+'" '+st+'/>'
     +'<circle cx="58" cy="86" r="13" fill="#fff" '+th(3)+'/><circle cx="96" cy="86" r="13" fill="#fff" '+th(3)+'/><path d="M58 86 L72 68 L88 68 L96 86 M58 86 H78 L72 68" fill="none" '+th(3)+'/>'
     +qb(160,60)),
    /* 情境 3：十二年——月曆頁一疊 */
    dg20260915a2_twelve: svg(
      '<rect x="62" y="40" width="96" height="92" rx="8" fill="'+L+'" '+st+'/><rect x="54" y="32" width="96" height="92" rx="8" fill="'+C+'" '+st+'/>'
     +'<rect x="46" y="24" width="96" height="92" rx="8" fill="#fff" '+st+'/>'
     +'<path d="M46 46 V32 a8 8 0 0 1 8 -8 H134 a8 8 0 0 1 8 8 V46 Z" fill="'+R+'" '+st+'/>'
     +txt(94,92,'12',38)+txt(94,110,'YRS',13,A)
     +'<path d="M162 52 l8 -8 M172 66 h12 M162 80 l8 8" fill="none" '+th(3.5)+'/>'),
    /* 情境 4：for 量的是長度——捲尺 */
    dg20260915a2_tape: svg(
      '<rect x="18" y="62" width="160" height="22" fill="'+Y+'" '+st+'/>'
     +'<g '+th(2.5)+'><line x1="40" y1="62" x2="40" y2="74"/><line x1="62" y1="62" x2="62" y2="70"/><line x1="84" y1="62" x2="84" y2="74"/><line x1="106" y1="62" x2="106" y2="70"/><line x1="128" y1="62" x2="128" y2="74"/><line x1="150" y1="62" x2="150" y2="70"/></g>'
     +'<circle cx="34" cy="73" r="30" fill="'+R+'" '+st+'/><circle cx="34" cy="73" r="10" fill="#fff" '+st+'/>'
     +'<rect x="174" y="58" width="10" height="30" rx="2" fill="#c9c2b8" '+st+'/>'
     +'<path d="M70 112 H170 M70 112 l10 -7 M70 112 l10 7 M170 112 l-10 -7 M170 112 l-10 7" fill="none" stroke="'+G+'" stroke-width="4" stroke-linecap="round"/>'),
    /* 情境 5：妳住這附近多久了？——房子＋問號 */
    dg20260915a2_homeq: svg(
      '<line x1="10" y1="134" x2="160" y2="134" '+st+'/>'
     +'<path d="M30 70 L84 26 L138 70 Z" fill="'+R+'" '+st+'/>'
     +'<rect x="42" y="68" width="84" height="66" fill="'+C+'" '+st+'/>'
     +'<rect x="74" y="94" width="22" height="40" fill="'+L+'" '+st+'/><rect x="50" y="80" width="18" height="18" fill="'+S+'" '+th(2.5)+'/><rect x="102" y="80" width="18" height="18" fill="'+S+'" '+th(2.5)+'/>'
     +qb(168,40)),
    /* 情境 6：星期一才搬來——紙箱 */
    dg20260915a2_boxes: svg(
      '<line x1="10" y1="134" x2="190" y2="134" '+st+'/>'
     +'<rect x="24" y="84" width="70" height="50" fill="#d9a36a" '+st+'/><path d="M24 84 L36 70 H82 L94 84" fill="#e7bb85" '+st+'/><line x1="59" y1="84" x2="59" y2="134" stroke="'+Y+'" stroke-width="6"/>'
     +'<rect x="104" y="94" width="72" height="40" fill="#d9a36a" '+st+'/><line x1="140" y1="94" x2="140" y2="134" stroke="'+Y+'" stroke-width="6"/>'
     +'<rect x="112" y="54" width="56" height="40" fill="#e7bb85" '+st+'/><line x1="140" y1="54" x2="140" y2="94" stroke="'+Y+'" stroke-width="6"/>'
     +'<rect x="104" y="94" width="72" height="40" fill="none" '+st+'/><rect x="112" y="54" width="56" height="40" fill="none" '+st+'/><rect x="24" y="84" width="70" height="50" fill="none" '+st+'/>'),
    /* 情境 7：since 接起點——MON 月曆頁＋小旗 */
    dg20260915a2_mon: svg(
      '<rect x="50" y="22" width="92" height="108" rx="8" fill="#fff" '+st+'/>'
     +'<path d="M50 50 V30 a8 8 0 0 1 8 -8 H134 a8 8 0 0 1 8 8 V50 Z" fill="'+R+'" '+st+'/>'
     +txt(96,42,'MON',17,'#fff')
     +'<line x1="78" y1="118" x2="78" y2="64" '+th(3.5)+'/><path d="M78 64 L114 76 L78 88 Z" fill="'+G+'" '+st+'/>'
     +'<path d="M150 104 H188" fill="none" stroke="'+A+'" stroke-width="5" stroke-linecap="round"/><path d="M190 104 l-10 -8 v16 Z" fill="'+A+'" '+th(2.5)+'/>'),
    /* 情境 8：你當師傅多久了？——扳手＋齒輪＋問號 */
    dg20260915a2_toolq: svg(
      wrench('translate(66 80) rotate(-35)')
     +'<circle cx="122" cy="102" r="22" fill="'+Y+'" '+st+'/><circle cx="122" cy="102" r="8" fill="#fff" '+st+'/>'
     +'<g fill="'+Y+'" '+th(2.5)+'><rect x="117" y="72" width="10" height="9"/><rect x="117" y="123" width="10" height="9"/><rect x="92" y="97" width="9" height="10"/><rect x="143" y="97" width="9" height="10"/></g>'
     +qb(166,36)),
    /* 情境 9：從 2005 年開始，爸爸教的——相框裡的父子 */
    dg20260915a2_photo: svg(
      '<rect x="34" y="16" width="132" height="104" rx="6" fill="#d9a36a" '+st+'/><rect x="46" y="28" width="108" height="80" fill="'+S+'" '+st+'/>'
     +face(82,58,15,L)+'<path d="M62 108 a20 20 0 0 1 40 0" fill="'+B+'" '+st+'/>'
     +face(124,74,10,L)+'<path d="M110 108 a14 14 0 0 1 28 0" fill="'+R+'" '+st+'/>'
     +'<rect x="70" y="124" width="60" height="20" rx="5" fill="'+Y+'" '+st+'/>'+txt(100,140,'2005',14)),
    /* 情境 10：一直修到現在——車輪＋繞圈的箭頭 */
    dg20260915a2_wheel: svg(
      '<circle cx="90" cy="78" r="44" fill="#fff" '+th(5)+'/><circle cx="90" cy="78" r="7" fill="'+D+'"/>'
     +'<g '+th(2)+'><line x1="90" y1="34" x2="90" y2="122"/><line x1="46" y1="78" x2="134" y2="78"/><line x1="59" y1="47" x2="121" y2="109"/><line x1="121" y1="47" x2="59" y2="109"/></g>'
     +'<path d="M150 46 A62 62 0 0 1 150 112" fill="none" stroke="'+A+'" stroke-width="6" stroke-linecap="round"/><path d="M150 112 l-14 0 l8 -12 Z" fill="'+A+'" '+th(2.5)+'/>'
     +'<rect x="152" y="18" width="40" height="22" rx="6" fill="'+A+'" '+st+'/>'+txt(172,34,'NOW',12,'#fff'))
  });
})();

/* ============================================================
   dg20260915a2 — How Long So Far?
   Grammar in Use Unit 11（How long have you (been)…?）A2：How long have you + 過去分詞，回答用 for／since
   ============================================================ */
window.GVIDEO.dg20260915a2 = {
  kind: 'gram',
  date: '2026-09-15',
  title: 'How Long So Far?',
  titleCn: 'How long have you…？問一件事做多久了',
  titleArt: ['dg20260915a2_span', 'dg20260915a2_glass', 'dg20260915a2_flag'],
  scene: '新家附近 New neighborhood',
  sceneArt: 'dg20260915a2_shop',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Lily', voice: 'f' },
    T: { name: 'Sam', voice: 'm' }
  },
  expr: {
    ask:   { t: 'How long have you + 過去分詞?', cn: '問從以前到現在多久了 → 現在完成式', ex: 'How long have you had that bike?', exCn: '那台腳踏車你騎多久了？', note: '他、她、它要用 has：How long has she…?' },
    dur:   { t: 'for + 一段長度', cn: '回答「一共多長」', ex: "I've worked at the market for eight months.", exCn: '我在市場工作八個月了。', note: 'for three days、for a month、for a long time' },
    start: { t: 'since + 起點', cn: '回答「從哪一刻開始」', ex: "We've been friends since first grade.", exCn: '我們從一年級就是朋友了。', note: 'since Friday、since 2019、since last spring' }
  },
  chapters: [
    { cn: '開場' }, { cn: '問多久了' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  cardsKick: 'How long? 做多久了？',
  cards: [
    { art: 'dg20260915a2_span',  lab: '問多久了',   who: '從以前到現在' },
    { art: 'dg20260915a2_glass', lab: 'for 長度',   who: '一共多長' },
    { art: 'dg20260915a2_flag',  lab: 'since 起點', who: '從哪一刻開始' }
  ],
  flow: [
    { q: '想問從以前到現在多久了？', a: '問多久',  en: 'How long + have / has + 主詞 + 過去分詞' },
    { q: '回答的是一段長度嗎？',     a: 'for',     en: 'for + 長度（two years）' },
    { q: '回答的是開始的時間點嗎？', a: 'since',   en: 'since + 起點（Monday、2020）' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: '想問別人一件事做多久了，英文要怎麼問、怎麼回答？這支影片一次教會你。', vis: { type: 'title' } },

    /* ---- 1 核心：問多久了 ---- */
    { ch: 1, sp: 'N', zh: '先想像一件事：它從以前就開始了，到現在都還在進行，還沒結束。', vis: { type: 'cards', show: 0 } },
    { ch: 1, sp: 'N', zh: '想問這一整段有多長，就用 How long have you，後面接過去分詞。',
      hi: [{ t: 'How long have you', k: 'ask', c: 3 }], vis: { type: 'cards', show: 1, pop: true } },
    { ch: 1, sp: 'A', en: 'How long have you played tennis?', cn: '你打網球打多久了？',
      hi: [{ t: 'How long have you played', cn: '問到現在多久', k: 'ask', c: 3 }], vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'N', zh: '回答有兩種。第一種用 for，後面接一段長度，像兩年、三個月。',
      hi: [{ t: 'for', k: 'dur', c: 4 }], vis: { type: 'cards', show: 2, pop: true } },
    { ch: 1, sp: 'T', en: "I've played tennis for two years.", cn: '我打網球打兩年了。',
      hi: [{ t: 'for two years', cn: '一段長度', k: 'dur', c: 4 }], vis: { type: 'cards', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: '第二種用 since，後面接開始的那個時間點，像星期一、去年春天。',
      hi: [{ t: 'since', k: 'start', c: 2 }], vis: { type: 'cards', show: 3, pop: true } },
    { ch: 1, sp: 'A', en: "Oh, I've played since last spring.", cn: '喔，我從去年春天就開始打了。',
      hi: [{ t: 'since last spring', cn: '開始的時間點', k: 'start', c: 2 }], vis: { type: 'cards', show: 3, lit: 2 } },
    { ch: 1, sp: 'N', zh: '兩種回答講的都是同一段時間。for 講它有多長，since 講它從哪裡開始。',
      vis: { type: 'cards', show: 3 } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: '問句的順序：How long 放最前面，接著 have 加主詞，再接過去分詞。主詞是他或她，要換成 has。',
      hi: [{ t: 'How long', k: 'ask', c: 3 }],
      vis: { type: 'pattern', kick: '問句 Question', rows: [
        { lab: 'you',    blocks: [{ t: 'How long', k: 'n' }, { t: 'have you', k: 's' }, { t: 'worked', k: 'v' }, { t: 'at the bank?', k: 'o' }] },
        { lab: 'she',    blocks: [{ t: 'How long', k: 'n' }, { t: 'has she', k: 's' }, { t: 'lived', k: 'v' }, { t: 'in this building?', k: 'o' }] }
      ], note: 'have 要放在主詞前面：have you、has she' } },
    { ch: 2, sp: 'N', zh: '回答的句型：主詞加 have，再加過去分詞，最後放 for 加長度，或 since 加起點。',
      vis: { type: 'pattern', kick: '回答 Answer', rows: [
        { lab: 'for',   blocks: [{ t: "I've", k: 's' }, { t: 'worked', k: 'v' }, { t: 'at the bank', k: 'n' }, { t: 'for six months', k: 'o', add: true }] },
        { lab: 'since', blocks: [{ t: 'She has', k: 's' }, { t: 'lived', k: 'v' }, { t: 'in this building', k: 'n' }, { t: 'since 2022', k: 'o', add: true }] }
      ] } },
    { ch: 2, sp: 'N', zh: '分不清楚的時候，就看後面：是一段長度就用 for，是一個起點就用 since。',
      vis: { type: 'family', kick: 'for or since? 看後面接什麼', core: 'for / since', coreCn: '長度還是起點', art: 'dg20260915a2_glass', items: [
        { t: 'for three days · for a month', cn: 'for ＋ 一段長度' }, { t: 'for a long time', cn: 'for ＋ 很久' }, { t: 'since Friday · since 2019', cn: 'since ＋ 一個起點' }
      ] } },
    { ch: 2, sp: 'N', zh: '還要注意：只講現在，用現在簡單式；一加上做多久了，動詞就要換成 have 加過去分詞。',
      vis: { type: 'pattern', kick: '只講現在 vs 講多久了', rows: [
        { lab: '只講現在', blocks: [{ t: 'Ken', k: 's' }, { t: 'works', k: 'v' }, { t: 'at the bank', k: 'n' }] },
        { lab: '講多久了', blocks: [{ t: 'Ken', k: 's' }, { t: 'has worked', k: 'v' }, { t: 'at the bank', k: 'n' }, { t: 'for a year', k: 'o', add: true }] }
      ], note: '加上 for 或 since，動詞就換成 have / has ＋ 過去分詞' } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: 'Lily 剛搬到這一區，走進 Sam 的腳踏車店。聽聽他們怎麼問多久、怎麼回答。', vis: { type: 'scene', art: 'dg20260915a2_shop' } },
    { ch: 3, sp: 'A', en: 'Nice shop! How long have you had it?', cn: '好棒的店！你開這家店多久了？',
      hi: [{ t: 'How long have you had', cn: '問開多久了', k: 'ask', c: 3 }], vis: { type: 'scene', art: 'dg20260915a2_signq' } },
    { ch: 3, sp: 'T', en: "I've had it for twelve years.", cn: '我開了十二年了。',
      hi: [{ t: 'for twelve years', cn: '一段長度', k: 'dur', c: 4 }], vis: { type: 'scene', art: 'dg20260915a2_twelve' } },
    { ch: 3, sp: 'N', zh: '十二年是一段長度，所以 Sam 用 for。',
      hi: [{ t: 'for', k: 'dur', c: 4 }], vis: { type: 'scene', art: 'dg20260915a2_tape' } },
    { ch: 3, sp: 'T', en: 'And you? How long have you lived around here?', cn: '那妳呢？妳住這附近多久了？',
      hi: [{ t: 'How long have you lived', cn: '問住多久了', k: 'ask', c: 3 }], vis: { type: 'scene', art: 'dg20260915a2_homeq' } },
    { ch: 3, sp: 'A', en: "Only since Monday. I'm still opening boxes.", cn: '從星期一才開始，我還在拆箱子。',
      hi: [{ t: 'since Monday', cn: '開始的那一天', k: 'start', c: 2 }], vis: { type: 'scene', art: 'dg20260915a2_boxes' } },
    { ch: 3, sp: 'N', zh: '星期一是 Lily 搬來的那一天，是一個起點，所以用 since。',
      hi: [{ t: 'since', k: 'start', c: 2 }], vis: { type: 'scene', art: 'dg20260915a2_mon' } },
    { ch: 3, sp: 'A', en: 'How long have you worked as a mechanic?', cn: '你當修車師傅多久了？',
      hi: [{ t: 'How long have you worked', cn: '問做多久了', k: 'ask', c: 3 }], vis: { type: 'scene', art: 'dg20260915a2_toolq' } },
    { ch: 3, sp: 'T', en: 'Since 2005. My dad taught me.', cn: '從 2005 年開始，是我爸教我的。',
      hi: [{ t: 'Since 2005', cn: '起點', k: 'start', c: 2 }], vis: { type: 'scene', art: 'dg20260915a2_photo' } },
    { ch: 3, sp: 'N', zh: 'Sam 從 2005 年一直修到現在，事情還沒結束，所以問句用現在完成式，回答用 since 加起點。',
      hi: [{ t: 'since', k: 'start', c: 2 }], vis: { type: 'scene', art: 'dg20260915a2_wheel' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '同一件事，可以用 for 講，也可以用 since 講。',
      vis: { type: 'vs', sm: true, kick: '同一段時間，兩種講法',
        a: { w: "We've lived in this apartment for five years.", def: '我們住這間公寓五年了。', cn: 'for → 一段長度' },
        b: { w: "We've lived in this apartment since 2021.", def: '我們從 2021 年就住這間公寓。', cn: 'since → 一個起點' } } },
    { ch: 4, sp: 'A', en: "We've lived in this apartment for five years.", cn: '我們住這間公寓五年了。',
      hi: [{ t: 'for five years', cn: '長度', k: 'dur', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '同一段時間，兩種講法',
        a: { w: "We've lived in this apartment for five years.", def: '我們住這間公寓五年了。', cn: 'for → 一段長度' },
        b: { w: "We've lived in this apartment since 2021.", def: '我們從 2021 年就住這間公寓。', cn: 'since → 一個起點' } } },
    { ch: 4, sp: 'T', en: "We've lived in this apartment since 2021.", cn: '我們從 2021 年就住這間公寓。',
      hi: [{ t: 'since 2021', cn: '起點', k: 'start', c: 2 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '同一段時間，兩種講法',
        a: { w: "We've lived in this apartment for five years.", def: '我們住這間公寓五年了。', cn: 'for → 一段長度' },
        b: { w: "We've lived in this apartment since 2021.", def: '我們從 2021 年就住這間公寓。', cn: 'since → 一個起點' } } },
    { ch: 4, sp: 'N', zh: '五年是長度，2021 年是起點。意思一樣，只是看的角度不同。',
      vis: { type: 'vs', sm: true, kick: '同一段時間，兩種講法',
        a: { w: "We've lived in this apartment for five years.", def: '我們住這間公寓五年了。', cn: 'for → 一段長度' },
        b: { w: "We've lived in this apartment since 2021.", def: '我們從 2021 年就住這間公寓。', cn: 'since → 一個起點' } } },
    { ch: 4, sp: 'N', zh: '再看一組。左邊只說現在的事，右邊多說了做多久，動詞就跟著變。',
      vis: { type: 'vs', sm: true, kick: '只講現在 vs 講多久了',
        a: { w: 'My aunt runs a small bakery.', def: '我阿姨開一家小麵包店。', cn: '只講現在 → 現在簡單式' },
        b: { w: 'She has run it since 2018.', def: '她從 2018 年開到現在。', cn: '講多久了 → has ＋ 過去分詞' } } },
    { ch: 4, sp: 'A', en: 'My aunt runs a small bakery.', cn: '我阿姨開一家小麵包店。',
      vis: { type: 'vs', sm: true, on: 'a', kick: '只講現在 vs 講多久了',
        a: { w: 'My aunt runs a small bakery.', def: '我阿姨開一家小麵包店。', cn: '只講現在 → 現在簡單式' },
        b: { w: 'She has run it since 2018.', def: '她從 2018 年開到現在。', cn: '講多久了 → has ＋ 過去分詞' } } },
    { ch: 4, sp: 'T', en: 'She has run it since 2018.', cn: '她從 2018 年開到現在。',
      hi: [{ t: 'has run', cn: '開到現在', k: 'ask', c: 3 }, { t: 'since 2018', cn: '起點', k: 'start', c: 2 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '只講現在 vs 講多久了',
        a: { w: 'My aunt runs a small bakery.', def: '我阿姨開一家小麵包店。', cn: '只講現在 → 現在簡單式' },
        b: { w: 'She has run it since 2018.', def: '她從 2018 年開到現在。', cn: '講多久了 → has ＋ 過去分詞' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '最後給你一個判斷流程，照順序問自己三個問題。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一問：想問從以前到現在多久了嗎？是的話，用 How long 加現在完成式。',
      hi: [{ t: 'How long', k: 'ask', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'A', en: 'How long has your sister lived in Japan?', cn: '你姊姊住在日本多久了？',
      hi: [{ t: 'How long has your sister lived', cn: '問多久了', k: 'ask', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二問：你要回答的是一段長度嗎？是的話，用 for。',
      hi: [{ t: 'for', k: 'dur', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'T', en: "She's lived there for four years.", cn: '她住在那裡四年了。',
      hi: [{ t: 'for four years', cn: '長度', k: 'dur', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '第三問：你要回答的是開始的時間點嗎？是的話，用 since。',
      hi: [{ t: 'since', k: 'start', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'A', en: "I've had this phone since Christmas.", cn: '這支手機我從聖誕節用到現在。',
      hi: [{ t: 'since Christmas', cn: '起點', k: 'start', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說說看。看到中文情境，先自己用英文說出來，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：你從三月開始學日文，到現在還在學。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '你從三月開始學日文，到現在還在學。' } },
    { ch: 6, sp: 'A', en: "I've studied Japanese since March.", cn: '我從三月就開始學日文了。',
      hi: [{ t: 'since March', cn: '起點 → since', k: 'start', c: 2 }],
      vis: { type: 'speak', n: 1, show: true, sit: '你從三月開始學日文，到現在還在學。', a: "I've studied Japanese since March." } },
    { ch: 6, sp: 'N', zh: '情境二：你在這家公司已經工作三年了。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '你在這家公司已經工作三年了。' } },
    { ch: 6, sp: 'T', en: "I've worked at this company for three years.", cn: '我在這家公司工作三年了。',
      hi: [{ t: 'for three years', cn: '長度 → for', k: 'dur', c: 4 }],
      vis: { type: 'speak', n: 2, show: true, sit: '你在這家公司已經工作三年了。', a: "I've worked at this company for three years." } },
    { ch: 6, sp: 'N', zh: '情境三：朋友家有一隻貓，你想問她養多久了。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '朋友家有一隻貓，你想問她養多久了。' } },
    { ch: 6, sp: 'A', en: 'How long have you had your cat?', cn: '妳養妳的貓多久了？',
      hi: [{ t: 'How long have you had', cn: '問多久了', k: 'ask', c: 3 }],
      vis: { type: 'speak', n: 3, show: true, sit: '朋友家有一隻貓，你想問她養多久了。', a: 'How long have you had your cat?' } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結一下：問做多久了，用 How long have you 加過去分詞；回答時，長度用 for，起點用 since。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '下次想問多久了，先想一下：我要的是長度，還是起點？', vis: { type: 'end' } }
  ]
};
