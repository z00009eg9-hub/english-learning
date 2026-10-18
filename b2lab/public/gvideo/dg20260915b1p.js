/* ============================================================
   B2 Read 文法影片解說 — dg20260915b1p（Grammar in Use Unit 12，B1+）
   格式與規則見 b2lab/tools/GVIDEO_SPEC.md；範本 gvideo/dg20261014b1.js。
   核心圖用 cards：since 起點、for 長度、When 問哪一天。
   ============================================================ */
window.GVIDEO = window.GVIDEO || {};
window.GVIDEO_ART = window.GVIDEO_ART || {};

(function(){
  var D='#2b2118', A='#e8813a', C='#fdf6ec', L='#f7e3c9', R='#d9534f', B='#3b82c4', G='#3f9a62', Y='#f2c94c', S='#d6e8f8';
  var P='dg20260915b1p_';
  var st='stroke="'+D+'" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"';
  var th=function(w){ return 'stroke="'+D+'" stroke-width="'+w+'" stroke-linejoin="round" stroke-linecap="round"'; };
  var svg=function(inner){ return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+inner+'</svg>'; };
  var txt=function(x,y,t,sz,col){ return '<text x="'+x+'" y="'+y+'" text-anchor="middle" font-family="Arial,sans-serif" font-weight="700" font-size="'+sz+'" fill="'+(col||D)+'">'+t+'</text>'; };
  var qb=function(cx,cy){ return '<circle cx="'+cx+'" cy="'+cy+'" r="16" fill="'+A+'" '+st+'/>'+txt(cx,cy+7,'?',20,'#fff'); };
  var chk=function(cx,cy,r){ return '<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="'+G+'" '+st+'/><path d="M'+(cx-r*0.45)+' '+cy+' l'+(r*0.32)+' '+(r*0.34)+' l'+(r*0.6)+' -'+(r*0.7)+'" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>'; };
  /* 單張月曆頁 */
  var page=function(x,y,w,h){ return '<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" rx="7" fill="#fff" '+st+'/>'
    +'<path d="M'+x+' '+(y+20)+' V'+(y+7)+' a7 7 0 0 1 7 -7 H'+(x+w-7)+' a7 7 0 0 1 7 7 V'+(y+20)+' Z" fill="'+R+'" '+st+'/>'
    +'<line x1="'+(x+18)+'" y1="'+(y-7)+'" x2="'+(x+18)+'" y2="'+(y+7)+'" '+th(4)+'/><line x1="'+(x+w-18)+'" y1="'+(y-7)+'" x2="'+(x+w-18)+'" y2="'+(y+7)+'" '+th(4)+'/>'; };
  /* 坐著的狗 */
  var dog=function(x,y,col){ return '<path d="M'+(x-26)+' '+(y+52)+' q-4 -40 26 -44 q30 4 26 44 Z" fill="'+col+'" '+st+'/>'
    +'<circle cx="'+x+'" cy="'+(y-4)+'" r="20" fill="'+col+'" '+st+'/>'
    +'<path d="M'+(x-18)+' '+(y-14)+' q-14 4 -10 24 q8 -2 12 -12 Z M'+(x+18)+' '+(y-14)+' q14 4 10 24 q-8 -2 -12 -12 Z" fill="#8a5a3b" '+th(2.5)+'/>'
    +'<circle cx="'+(x-7)+'" cy="'+(y-7)+'" r="2.5" fill="'+D+'"/><circle cx="'+(x+7)+'" cy="'+(y-7)+'" r="2.5" fill="'+D+'"/>'
    +'<ellipse cx="'+x+'" cy="'+(y+2)+'" rx="4.5" ry="3.5" fill="'+D+'"/><path d="M'+(x-6)+' '+(y+8)+' q6 5 12 0" fill="none" '+th(2)+'/>'; };
  /* 腳印 */
  var paw=function(x,y,col){ return '<g fill="'+(col||D)+'"><ellipse cx="'+x+'" cy="'+(y+4)+'" rx="6" ry="5"/><circle cx="'+(x-6)+'" cy="'+(y-4)+'" r="2.4"/><circle cx="'+(x-2)+'" cy="'+(y-7)+'" r="2.4"/><circle cx="'+(x+2)+'" cy="'+(y-7)+'" r="2.4"/><circle cx="'+(x+6)+'" cy="'+(y-4)+'" r="2.4"/></g>'; };
  var sun=function(cx,cy){ return '<circle cx="'+cx+'" cy="'+cy+'" r="13" fill="'+Y+'" '+st+'/><g '+th(3)+'><line x1="'+cx+'" y1="'+(cy-20)+'" x2="'+cx+'" y2="'+(cy-25)+'"/><line x1="'+(cx+20)+'" y1="'+cy+'" x2="'+(cx+25)+'" y2="'+cy+'"/><line x1="'+(cx-20)+'" y1="'+cy+'" x2="'+(cx-25)+'" y2="'+cy+'"/><line x1="'+(cx+14)+'" y1="'+(cy-14)+'" x2="'+(cx+18)+'" y2="'+(cy-18)+'"/><line x1="'+(cx-14)+'" y1="'+(cy-14)+'" x2="'+(cx-18)+'" y2="'+(cy-18)+'"/></g>'; };

  var art={};
  /* ---- 核心觀念三張卡 ---- */
  /* since：起跑線＋綠旗 */
  art.start=svg(
    '<path d="M10 128 H190" '+st+'/>'
   +'<g>'+(function(){ var g=''; for(var i=0;i<6;i++) g+='<rect x="40" y="'+(32+i*16)+'" width="10" height="8" fill="'+D+'"/><rect x="50" y="'+(40+i*16)+'" width="10" height="8" fill="'+D+'"/>'; return g; })()+'</g>'
   +'<rect x="40" y="32" width="20" height="96" fill="none" '+th(2.5)+'/>'
   +'<line x1="76" y1="128" x2="76" y2="22" '+th(4)+'/><path d="M78 24 H138 L124 42 L138 60 H78 Z" fill="'+G+'" '+st+'/>'
   +'<path d="M96 100 H170" '+th(4)+' stroke-dasharray="2 10"/><path d="M164 92 l10 8 l-10 8" fill="none" '+th(4)+'/>'),
  /* for：捲尺 */
  art.tape=svg(
    '<rect x="96" y="82" width="90" height="16" fill="'+Y+'" '+st+'/>'
   +'<g '+th(2)+'><line x1="110" y1="82" x2="110" y2="92"/><line x1="124" y1="82" x2="124" y2="88"/><line x1="138" y1="82" x2="138" y2="92"/><line x1="152" y1="82" x2="152" y2="88"/><line x1="166" y1="82" x2="166" y2="92"/></g>'
   +'<rect x="184" y="78" width="8" height="24" rx="2" fill="#c9c2b8" '+st+'/>'
   +'<rect x="14" y="44" width="92" height="92" rx="22" fill="'+R+'" '+st+'/>'
   +'<circle cx="60" cy="90" r="24" fill="#fff" '+st+'/><circle cx="60" cy="90" r="8" fill="#c9c2b8" '+th(2.5)+'/>'
   +'<path d="M120 50 H176" '+th(4)+'/><path d="M128 40 l-10 10 l10 10 M168 40 l10 10 l-10 10" fill="none" '+th(4)+'/>'),
  /* When：月曆頁＋紅色圖釘 */
  art.pin=svg(
    page(46,30,108,104)
   +'<g fill="'+C+'"><rect x="58" y="62" width="18" height="14" rx="2"/><rect x="82" y="62" width="18" height="14" rx="2"/><rect x="106" y="62" width="18" height="14" rx="2"/><rect x="130" y="62" width="14" height="14" rx="2"/><rect x="58" y="84" width="18" height="14" rx="2"/><rect x="106" y="84" width="18" height="14" rx="2"/><rect x="130" y="84" width="14" height="14" rx="2"/><rect x="58" y="106" width="18" height="14" rx="2"/><rect x="82" y="106" width="18" height="14" rx="2"/><rect x="106" y="106" width="18" height="14" rx="2"/></g>'
   +'<rect x="82" y="84" width="18" height="14" rx="2" fill="'+B+'" opacity=".35"/>'
   +'<line x1="91" y1="91" x2="104" y2="74" '+th(3)+'/><circle cx="108" cy="68" r="10" fill="'+R+'" '+st+'/>'),

  /* ---- 情境對話：動物收容所 ---- */
  /* 0 收容所：房子＋腳印招牌 */
  art.shelter=svg(
    '<path d="M8 138 H192" '+st+'/>'
   +'<rect x="40" y="62" width="120" height="76" fill="'+L+'" '+st+'/>'
   +'<path d="M28 66 L100 18 L172 66 Z" fill="'+R+'" '+st+'/>'
   +'<circle cx="100" cy="48" r="13" fill="#fff" '+th(2.5)+'/>'+paw(100,48,D)
   +'<rect x="84" y="94" width="32" height="44" rx="3" fill="'+B+'" '+st+'/>'
   +'<rect x="52" y="80" width="22" height="20" fill="'+S+'" '+st+'/><rect x="126" y="80" width="22" height="20" fill="'+S+'" '+st+'/>'
   +paw(30,124,'#8a5a3b')+paw(178,116,'#8a5a3b')),
  /* 1 牠什麼時候來的？坐著的狗＋問號 */
  art.dogq=svg(
    '<path d="M20 136 H180" '+st+'/>'+dog(90,74,'#e0b27a')
   +'<path d="M116 122 q22 0 26 -18" fill="none" '+th(5)+'/>'
   +qb(160,36)),
  /* 2 六月二號一家人送來：寵物外出籠 */
  art.carrier=svg(
    '<path d="M14 136 H186" '+st+'/>'
   +'<path d="M70 44 q30 -26 60 0" fill="none" '+th(6)+'/>'
   +'<rect x="38" y="44" width="124" height="88" rx="14" fill="'+B+'" '+st+'/>'
   +'<rect x="56" y="62" width="70" height="56" rx="8" fill="#fff" '+st+'/>'
   +'<circle cx="91" cy="92" r="16" fill="#e0b27a" '+th(2.5)+'/><circle cx="85" cy="89" r="2" fill="'+D+'"/><circle cx="97" cy="89" r="2" fill="'+D+'"/><ellipse cx="91" cy="96" rx="3.5" ry="2.5" fill="'+D+'"/>'
   +'<g '+th(2.5)+'><line x1="70" y1="62" x2="70" y2="118"/><line x1="84" y1="62" x2="84" y2="76"/><line x1="98" y1="62" x2="98" y2="76"/><line x1="112" y1="62" x2="112" y2="118"/></g>'
   +'<circle cx="144" cy="90" r="5" fill="'+Y+'" '+th(2.5)+'/>'),
  /* 3 問哪一天 → 過去式：月曆圈起「2」 */
  art.day2=svg(
    page(30,28,104,106)
   +txt(82,104,'2',46)
   +'<ellipse cx="82" cy="88" rx="30" ry="28" fill="none" stroke="'+R+'" stroke-width="4"/>'
   +'<path d="M182 60 q-4 -34 -40 -30" fill="none" '+th(4)+'/><path d="M150 20 l-10 10 l12 8" fill="none" '+th(4)+'/>'
   +paw(164,112,'#8a5a3b')),
  /* 4 住了四個多月：狗窩＋碗 */
  art.kennel=svg(
    '<path d="M8 136 H192" '+st+'/>'
   +'<rect x="30" y="64" width="104" height="72" fill="'+A+'" '+st+'/>'
   +'<path d="M20 70 L82 26 L144 70 Z" fill="'+R+'" '+st+'/>'
   +'<path d="M62 136 V104 a20 20 0 0 1 40 0 V136 Z" fill="'+D+'" '+st+'/>'
   +'<path d="M146 124 h40 l-5 12 h-30 Z" fill="'+B+'" '+st+'/>'
   +'<ellipse cx="166" cy="124" rx="20" ry="5" fill="#8a5a3b" '+th(2.5)+'/>'
   +'<rect x="70" y="40" width="24" height="12" rx="3" fill="#fff" '+th(2.5)+'/>'),
  /* 5 每天早上帶牠散步：牽繩＋太陽＋腳印 */
  art.leash=svg(
    sun(160,34)
   +'<ellipse cx="38" cy="50" rx="14" ry="18" fill="none" stroke="'+R+'" stroke-width="7"/><rect x="38" y="60" width="14" height="10" rx="3" fill="'+D+'" transform="rotate(30 45 65)"/>'
   +'<path d="M46 66 C70 110 100 60 120 104" fill="none" stroke="'+R+'" stroke-width="5" stroke-linecap="round"/>'
   +'<circle cx="124" cy="110" r="9" fill="none" '+th(3.5)+'/>'
   +'<path d="M8 140 H192" '+st+'/>'
   +paw(40,128)+paw(78,118)+paw(150,128)+paw(184,118)),
  /* 6 for 長度＋since 接子句：門 → 一路腳印 → 太陽 */
  art.trail=svg(
    '<path d="M8 136 H192" '+st+'/>'
   +'<rect x="16" y="46" width="44" height="90" rx="3" fill="'+B+'" '+st+'/><circle cx="50" cy="92" r="3.5" fill="'+D+'"/>'
   +paw(78,118,'#8a5a3b')+paw(102,104,'#8a5a3b')+paw(126,118,'#8a5a3b')+paw(150,104,'#8a5a3b')
   +sun(170,46)
   +'<path d="M72 30 H128" '+th(4)+' stroke-dasharray="2 10"/><path d="M122 22 l10 8 l-10 8" fill="none" '+th(4)+'/>'),
  /* 7 你當志工多久了？綠色志工背心＋問號 */
  art.vestq=svg(
    '<path d="M58 22 L82 22 Q96 50 110 22 L134 22 L150 50 L140 132 H52 L42 50 Z" fill="'+G+'" '+st+'/>'
   +'<path d="M96 46 V132" '+th(2.5)+'/>'
   +'<path d="M56 84 H136" stroke="'+Y+'" stroke-width="7"/><path d="M54 104 H138" stroke="'+Y+'" stroke-width="7"/>'
   +'<path d="M58 22 L82 22 Q96 50 110 22 L134 22 L150 50 L140 132 H52 L42 50 Z" fill="none" '+st+'/>'
   +'<circle cx="118" cy="62" r="9" fill="#fff" '+th(2.5)+'/>'+paw(118,62,'#8a5a3b')
   +qb(170,34)),
  /* 8 三年了，大學時開始：學士帽＋證書 */
  art.gradcap=svg(
    '<path d="M100 22 L178 52 L100 82 L22 52 Z" fill="'+D+'" '+st+'/>'
   +'<path d="M58 66 V94 q42 22 84 0 V66" fill="'+D+'" '+st+'/>'
   +'<path d="M168 56 V92" '+th(3)+'/><circle cx="168" cy="96" r="5" fill="'+Y+'" '+th(2.5)+'/>'
   +'<g transform="rotate(-10 60 122)"><rect x="18" y="108" width="84" height="26" rx="12" fill="#fff" '+st+'/><rect x="54" y="106" width="10" height="30" fill="'+R+'" '+th(2.5)+'/></g>'),
  /* 9 回答 How long：疊起來的三本年曆 */
  art.years=svg(
    page(26,62,64,58)+page(66,44,64,58)+page(106,26,64,58)
   +'<path d="M30 140 H174" '+th(4)+'/><path d="M40 130 l-10 10 l10 10 M164 130 l10 10 l-10 10" fill="none" '+th(4)+'/>'
   +txt(138,74,'3',28,G));

  var out={}; for(var k in art) out[P+k]=art[k];
  Object.assign(window.GVIDEO_ART, out);
})();

/* ============================================================
   dg20260915b1p — For and Since; When ...? and How Long ...?
   Grammar in Use Unit 12（For and since, When...? and How long...?）
   ============================================================ */
window.GVIDEO.dg20260915b1p = {
  kind: 'gram',
  date: '2026-09-15',
  title: 'For or Since? When or How Long?',
  titleCn: 'for 還是 since？When 還是 How long？',
  titleArt: ['dg20260915b1p_start', 'dg20260915b1p_tape', 'dg20260915b1p_pin'],
  scene: '動物收容所 Animal shelter',
  sceneArt: 'dg20260915b1p_shelter',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Chloe', voice: 'f' },
    T: { name: 'Marcus', voice: 'm' }
  },
  expr: {
    since: { t: 'since + 起點', cn: '標出開始的那一刻', ex: 'Our office has had free coffee since March.', exCn: '我們辦公室從三月起就有免費咖啡。', note: '起點可以是日期、年份，或過去式子句：since I moved' },
    fr:    { t: 'for + 長度', cn: '量出到現在一共多長', ex: 'My aunt has taught yoga for twelve years.', exCn: '我阿姨教瑜伽十二年了。', note: 'for 後面接長度：for a week、for two hours' },
    when:  { t: 'When did…?', cn: '問哪一天開始 → 過去簡單式', ex: 'When did your cousin open his studio?', exCn: '你表哥是什麼時候開工作室的？', note: '回答用時間點：In 2022. / Last spring.' }
  },
  chapters: [
    { cn: '開場' }, { cn: '起點還是長度？' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  cardsKick: 'Starting point or length? 起點還是長度？',
  cards: [
    { art: 'dg20260915b1p_start', lab: 'since',    who: '標出起點' },
    { art: 'dg20260915b1p_tape',  lab: 'for',      who: '量出長度' },
    { art: 'dg20260915b1p_pin',   lab: 'When...?', who: '問哪一天 → 過去式' }
  ],
  flow: [
    { q: '延續到現在，後面接起點嗎？', a: 'since', en: 'have + p.p. + since + 起點／子句' },
    { q: '延續到現在，後面接長度嗎？', a: 'for',   en: 'have + p.p. + for + 長度' },
    { q: '在問哪一天開始的嗎？',       a: 'When',  en: 'When did + 主詞 + 原形（過去式）' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: 'for 和 since 都在講「多久」，後面接的東西卻完全不同。這支影片幫你一次分清楚。', vis: { type: 'title' } },

    /* ---- 1 核心：起點還是長度？ ---- */
    { ch: 1, sp: 'N', zh: '一件事從過去延續到現在，英文用現在完成式。接著看你要講起點，還是長度。', vis: { type: 'cards', show: 0 } },
    { ch: 1, sp: 'N', zh: 'since 標出起點，也就是事情從哪一天、哪一年開始。',
      hi: [{ t: 'since', k: 'since', c: 3 }], vis: { type: 'cards', show: 1, pop: true } },
    { ch: 1, sp: 'A', en: 'Grandpa has grown his own vegetables since 2015.', cn: '爺爺從 2015 年就自己種菜。',
      hi: [{ t: 'since 2015', cn: '起點', k: 'since', c: 3 }], vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'N', zh: 'for 量出長度，也就是從起點到現在，一共有多長。',
      hi: [{ t: 'for', k: 'fr', c: 4 }], vis: { type: 'cards', show: 2, pop: true } },
    { ch: 1, sp: 'T', en: 'He has grown them for more than ten years.', cn: '他自己種菜已經十幾年了。',
      hi: [{ t: 'for more than ten years', cn: '長度', k: 'fr', c: 4 }], vis: { type: 'cards', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: '這兩句講的是同一件事，差別只在你要講起點，還是講長度。',
      vis: { type: 'cards', show: 2 } },
    { ch: 1, sp: 'N', zh: '如果你想問的是哪一天開始，那是過去的一個點，就用 When 加過去式。',
      hi: [{ t: 'When', k: 'when', c: 2 }], vis: { type: 'cards', show: 3, pop: true } },
    { ch: 1, sp: 'A', en: 'When did your grandpa plant his first tomatoes?', cn: '你爺爺第一次種番茄是什麼時候？',
      hi: [{ t: 'When did', cn: '問那一天', k: 'when', c: 2 }], vis: { type: 'cards', show: 3, lit: 2 } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: 'since 的句型：現在完成式加 since，後面放起點，可以是日期、星期，或一個時刻。',
      hi: [{ t: 'since', k: 'since', c: 3 }],
      vis: { type: 'pattern', kick: 'since + 起點', rows: [
        { lab: '星期', blocks: [{ t: 'The café', k: 's' }, { t: 'has been', k: 'v' }, { t: 'closed', k: 'n' }, { t: 'since Monday', k: 'o' }] },
        { lab: '時刻', blocks: [{ t: 'I', k: 's' }, { t: 'have been', k: 'v' }, { t: 'awake', k: 'n' }, { t: 'since five', k: 'o' }] }
      ], note: '起點：since 2020、since Monday、since lunch' } },
    { ch: 2, sp: 'N', zh: 'for 的句型：一樣是現在完成式，for 後面放一段長度。',
      hi: [{ t: 'for', k: 'fr', c: 4 }],
      vis: { type: 'pattern', kick: 'for + 長度', rows: [
        { lab: '幾個月', blocks: [{ t: 'We', k: 's' }, { t: 'have lived', k: 'v' }, { t: 'here', k: 'n' }, { t: 'for six months', k: 'o' }] },
        { lab: '好幾年', blocks: [{ t: 'She', k: 's' }, { t: 'has played', k: 'v' }, { t: 'the violin', k: 'n' }, { t: 'for years', k: 'o' }] }
      ], note: '長度：for a week、for ages、for two hours' } },
    { ch: 2, sp: 'N', zh: 'since 也可以接一整句。那一句講起點，用過去式；主句還是現在完成式。',
      vis: { type: 'pattern', kick: 'since + 子句', rows: [
        { lab: '主句', blocks: [{ t: 'They', k: 's' }, { t: 'have been', k: 'v' }, { t: 'best friends', k: 'n' }] },
        { lab: '起點', blocks: [{ t: 'since', k: 'n' }, { t: 'they met at camp', k: 'o', add: true }] }
      ], note: '子句 met 用過去式，主句 have been 用完成式' } },
    { ch: 2, sp: 'N', zh: '問句也分兩種：When 問哪一天，用過去式；How long 問多長，用完成式。回答要配好。',
      vis: { type: 'pattern', kick: '兩種問法，兩種回答', rows: [
        { lab: '問哪一天', blocks: [{ t: 'When did you start?', k: 'v' }, { t: 'In April.', k: 'o' }] },
        { lab: '問多長', blocks: [{ t: 'How long have you been here?', k: 'v' }, { t: 'Since April.', k: 'o' }] },
        { lab: '也可以', blocks: [{ t: 'For six months.', k: 'o' }] }
      ] } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: '來聽 Chloe 到動物收容所看狗，跟志工 Marcus 聊天。注意 for、since 和兩種問句。', vis: { type: 'scene', art: 'dg20260915b1p_shelter' } },
    { ch: 3, sp: 'A', en: 'This dog is so calm. When did he arrive?', cn: '這隻狗好乖。牠是什麼時候來的？',
      hi: [{ t: 'When did he arrive', cn: '問哪一天', k: 'when', c: 2 }], vis: { type: 'scene', art: 'dg20260915b1p_dogq' } },
    { ch: 3, sp: 'T', en: 'A family brought him in on the second of June.', cn: '六月二號，有一家人把牠送來。',
      hi: [{ t: 'brought', cn: '過去式', k: 'when', c: 2 }], vis: { type: 'scene', art: 'dg20260915b1p_carrier' } },
    { ch: 3, sp: 'N', zh: 'Chloe 問的是哪一天來的，那是過去的一個點，所以兩句都用過去式。',
      hi: [{ t: '過去式', k: 'when', c: 2 }], vis: { type: 'scene', art: 'dg20260915b1p_day2' } },
    { ch: 3, sp: 'A', en: 'So he has lived here for over four months.', cn: '所以牠在這裡住了四個多月了。',
      hi: [{ t: 'for over four months', cn: '長度', k: 'fr', c: 4 }], vis: { type: 'scene', art: 'dg20260915b1p_kennel' } },
    { ch: 3, sp: 'T', en: "Right. And I've walked him every morning since he arrived.", cn: '對。而且從牠來了以後，我每天早上都帶牠散步。',
      hi: [{ t: 'since he arrived', cn: '起點是一件事', k: 'since', c: 3 }], vis: { type: 'scene', art: 'dg20260915b1p_leash' } },
    { ch: 3, sp: 'N', zh: '一句講長度，用 for；一句用 since 接一整句，從牠來的那一刻算起。',
      hi: [{ t: 'for', k: 'fr', c: 4 }, { t: 'since', k: 'since', c: 3 }], vis: { type: 'scene', art: 'dg20260915b1p_trail' } },
    { ch: 3, sp: 'A', en: 'How long have you volunteered here, Marcus?', cn: 'Marcus，你在這裡當志工多久了？',
      hi: [{ t: 'How long have you volunteered', cn: '問多長', c: 1 }], vis: { type: 'scene', art: 'dg20260915b1p_vestq' } },
    { ch: 3, sp: 'T', en: 'For three years. I started when I was still in college.', cn: '三年了。我還在念大學的時候就開始了。',
      hi: [{ t: 'For three years', cn: '長度', k: 'fr', c: 4 }], vis: { type: 'scene', art: 'dg20260915b1p_gradcap' } },
    { ch: 3, sp: 'N', zh: '回答 How long，直接說 for 加長度就好。後面講開始的那時候，又回到過去式。',
      hi: [{ t: 'for', k: 'fr', c: 4 }], vis: { type: 'scene', art: 'dg20260915b1p_years' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '同一部壞掉的電梯，可以講起點，也可以講長度。',
      vis: { type: 'vs', sm: true, kick: 'since 接起點，for 接長度',
        a: { w: 'The elevator has been broken since Tuesday.', def: '電梯從星期二就壞了。', cn: '起點 → since' },
        b: { w: 'The elevator has been broken for three days.', def: '電梯已經壞三天了。', cn: '長度 → for' } } },
    { ch: 4, sp: 'A', en: 'The elevator has been broken since Tuesday.', cn: '電梯從星期二就壞了。',
      hi: [{ t: 'since Tuesday', cn: '起點', k: 'since', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: 'since 接起點，for 接長度',
        a: { w: 'The elevator has been broken since Tuesday.', def: '電梯從星期二就壞了。', cn: '起點 → since' },
        b: { w: 'The elevator has been broken for three days.', def: '電梯已經壞三天了。', cn: '長度 → for' } } },
    { ch: 4, sp: 'T', en: 'The elevator has been broken for three days.', cn: '電梯已經壞三天了。',
      hi: [{ t: 'for three days', cn: '長度', k: 'fr', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: 'since 接起點，for 接長度',
        a: { w: 'The elevator has been broken since Tuesday.', def: '電梯從星期二就壞了。', cn: '起點 → since' },
        b: { w: 'The elevator has been broken for three days.', def: '電梯已經壞三天了。', cn: '長度 → for' } } },
    { ch: 4, sp: 'N', zh: '再看一組。同一台鋼琴，問買的那一天，跟問擁有多久，時態不一樣。',
      vis: { type: 'vs', sm: true, kick: 'When 還是 How long？',
        a: { w: 'When did you buy that piano?', def: '那台鋼琴你什麼時候買的？', cn: '問那一天 → 過去式' },
        b: { w: 'How long have you had that piano?', def: '那台鋼琴你有多久了？', cn: '問多長 → 現在完成式' } } },
    { ch: 4, sp: 'A', en: 'When did you buy that piano?', cn: '那台鋼琴你什麼時候買的？',
      hi: [{ t: 'When did you buy', cn: '問那一天', k: 'when', c: 2 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: 'When 還是 How long？',
        a: { w: 'When did you buy that piano?', def: '那台鋼琴你什麼時候買的？', cn: '問那一天 → 過去式' },
        b: { w: 'How long have you had that piano?', def: '那台鋼琴你有多久了？', cn: '問多長 → 現在完成式' } } },
    { ch: 4, sp: 'T', en: 'How long have you had that piano?', cn: '那台鋼琴你有多久了？',
      hi: [{ t: 'How long have you had', cn: '問多長', c: 1 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: 'When 還是 How long？',
        a: { w: 'When did you buy that piano?', def: '那台鋼琴你什麼時候買的？', cn: '問那一天 → 過去式' },
        b: { w: 'How long have you had that piano?', def: '那台鋼琴你有多久了？', cn: '問多長 → 現在完成式' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '最後給你一個判斷流程。講到「多久」的時候，照順序問自己三個問題。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一問：事情延續到現在，後面接的是起點嗎？是的話，用 since。',
      hi: [{ t: 'since', k: 'since', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'A', en: 'My brother has worked nights since January.', cn: '我哥從一月就開始上夜班。',
      hi: [{ t: 'since January', cn: '起點', k: 'since', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二問：後面接的是幾天、幾個月、幾年這種長度嗎？是的話，用 for。',
      hi: [{ t: 'for', k: 'fr', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'T', en: 'Our team has used this app for two weeks.', cn: '我們團隊用這個 app 兩個禮拜了。',
      hi: [{ t: 'for two weeks', cn: '長度', k: 'fr', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '第三問：是在問哪一天開始的嗎？那是過去的一個點，用 When 加過去式。',
      hi: [{ t: 'When', k: 'when', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'A', en: 'When did the new manager start?', cn: '新經理是什麼時候開始上班的？',
      hi: [{ t: 'When did', cn: '問那一天', k: 'when', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說說看。看到中文情境，先自己用英文說出來，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：你想說，這家拉麵店從 2019 年就開在這裡了。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '你想說，這家拉麵店從 2019 年就開在這裡了。' } },
    { ch: 6, sp: 'T', en: 'This ramen shop has been here since 2019.', cn: '這家拉麵店從 2019 年就開在這裡了。',
      hi: [{ t: 'since 2019', cn: '起點 → since', k: 'since', c: 3 }],
      vis: { type: 'speak', n: 1, show: true, sit: '你想說，這家拉麵店從 2019 年就開在這裡了。', a: 'This ramen shop has been here since 2019.' } },
    { ch: 6, sp: 'N', zh: '情境二：你想說，你認識你的室友已經六年了。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '你想說，你認識你的室友已經六年了。' } },
    { ch: 6, sp: 'A', en: "I've known my roommate for six years.", cn: '我認識我的室友六年了。',
      hi: [{ t: 'for six years', cn: '長度 → for', k: 'fr', c: 4 }],
      vis: { type: 'speak', n: 2, show: true, sit: '你想說，你認識你的室友已經六年了。', a: "I've known my roommate for six years." } },
    { ch: 6, sp: 'N', zh: '情境三：你想問朋友，她是什麼時候拿到駕照的。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '你想問朋友，她是什麼時候拿到駕照的。' } },
    { ch: 6, sp: 'T', en: "When did you get your driver's license?", cn: '你什麼時候拿到駕照的？',
      hi: [{ t: 'When did you get', cn: '問那一天 → 過去式', k: 'when', c: 2 }],
      vis: { type: 'speak', n: 3, show: true, sit: '你想問朋友，她是什麼時候拿到駕照的。', a: "When did you get your driver's license?" } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結一下：起點用 since，長度用 for，兩個都配現在完成式；問哪一天開始，就用 When 加過去式。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '下次講「多久」之前，先問一句：我要講起點，還是長度？', vis: { type: 'end' } }
  ]
};
