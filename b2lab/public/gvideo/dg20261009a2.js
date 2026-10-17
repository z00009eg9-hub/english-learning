/* ============================================================
   B2 Read 文法影片解說 — dg20261009a2（Unit 18，A2）
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
  /* 冰淇淋甜筒（x,y＝甜筒尖端，s＝縮放） */
  var cone=function(x,y,s){ return '<g transform="translate('+x+' '+y+') scale('+s+')">'
      +'<path d="M-20 -50 L0 0 L20 -50 Z" fill="#e0a85e" '+st+'/>'
      +'<circle cx="-9" cy="-60" r="15" fill="#f6b6c8" '+st+'/><circle cx="10" cy="-62" r="15" fill="'+C+'" '+st+'/><circle cx="0" cy="-80" r="14" fill="#8a5a33" '+st+'/></g>'; };
  /* 手機（x,y 左上） */
  var phone=function(x,y,w,h){ return '<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" rx="8" fill="'+D+'" '+st+'/><rect x="'+(x+5)+'" y="'+(y+10)+'" width="'+(w-10)+'" height="'+(h-22)+'" rx="2" fill="'+S+'"/>'; };

  Object.assign(window.GVIDEO_ART, {
    /* used to：繞圈的箭頭（以前一再發生）＋停止（現在停了） */
    dg20261009a2_loop: svg(
      '<path d="M60 52 A44 44 0 0 1 140 52" fill="none" stroke="'+B+'" stroke-width="10" stroke-linecap="round"/>'
     +'<path d="M140 98 A44 44 0 0 1 60 98" fill="none" stroke="'+B+'" stroke-width="10" stroke-linecap="round"/>'
     +'<path d="M128 40 L144 56 L150 34" fill="none" stroke="'+B+'" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>'
     +'<path d="M72 110 L56 94 L50 116" fill="none" stroke="'+B+'" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>'
     +'<rect x="80" y="55" width="40" height="40" rx="6" fill="'+R+'" '+st+'/>'
     +'<rect x="91" y="65" width="7" height="20" rx="2" fill="#fff"/><rect x="102" y="65" width="7" height="20" rx="2" fill="#fff"/>'),
    /* 現在簡單式：現在每天早上的習慣——太陽＋慢跑鞋 */
    dg20261009a2_now: svg(
      '<circle cx="150" cy="44" r="22" fill="'+Y+'" '+st+'/>'
     +'<g '+th(3.5)+'><line x1="150" y1="8" x2="150" y2="14"/><line x1="186" y1="44" x2="180" y2="44"/><line x1="176" y1="18" x2="171" y2="23"/><line x1="124" y1="18" x2="129" y2="23"/><line x1="176" y1="70" x2="171" y2="65"/></g>'
     +'<path d="M24 120 V92 a8 8 0 0 1 8 -8 H58 L80 100 H112 a16 16 0 0 1 16 16 V128 H24 Z" fill="'+G+'" '+st+'/>'
     +'<path d="M24 128 H128" '+th(4)+'/><rect x="24" y="118" width="104" height="10" fill="#fff" '+th(2.5)+'/>'
     +'<path d="M54 92 l8 6 M62 88 l8 6" '+th(2.5)+'/>'),
    /* 過去簡單式：一條線上只插一根釘（只有一次） */
    dg20261009a2_once: svg(
      '<line x1="16" y1="112" x2="184" y2="112" '+th(4)+'/>'
     +'<g fill="#c9c2b8"><circle cx="36" cy="112" r="5"/><circle cx="68" cy="112" r="5"/><circle cx="132" cy="112" r="5"/><circle cx="164" cy="112" r="5"/></g>'
     +'<path d="M100 112 C88 92 76 80 76 62 a24 24 0 0 1 48 0 C124 80 112 92 100 112 Z" fill="'+R+'" '+st+'/>'
     +'<circle cx="100" cy="62" r="9" fill="#fff" '+th(2.5)+'/>'),

    /* 情境 1：小時候住的社區——一排房子＋路燈 */
    dg20261009a2_street: svg(
      '<line x1="8" y1="134" x2="192" y2="134" '+st+'/>'
     +'<rect x="16" y="76" width="44" height="58" fill="'+L+'" '+st+'/><path d="M10 78 L38 52 L66 78 Z" fill="'+R+'" '+st+'/>'
     +'<rect x="70" y="64" width="48" height="70" fill="'+S+'" '+st+'/><path d="M64 66 L94 38 L124 66 Z" fill="'+A+'" '+st+'/>'
     +'<rect x="128" y="84" width="40" height="50" fill="'+C+'" '+st+'/><path d="M122 86 L148 62 L174 86 Z" fill="'+G+'" '+st+'/>'
     +'<rect x="30" y="104" width="16" height="30" fill="#8a5a33" '+th(2.5)+'/><rect x="84" y="80" width="20" height="18" fill="#fff" '+th(2.5)+'/><rect x="140" y="100" width="16" height="14" fill="#fff" '+th(2.5)+'/>'
     +'<line x1="184" y1="134" x2="184" y2="50" '+th(4)+'/><path d="M184 50 h-12" '+th(4)+'/><circle cx="172" cy="58" r="7" fill="'+Y+'" '+st+'/>'),
    /* 情境 2：以前天天在這裡玩——盪鞦韆 */
    dg20261009a2_swing: svg(
      '<line x1="8" y1="136" x2="192" y2="136" '+st+'/>'
     +'<path d="M30 136 L56 24 L82 136 M118 136 L144 24 L170 136" fill="none" stroke="'+B+'" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>'
     +'<line x1="50" y1="24" x2="150" y2="24" stroke="'+B+'" stroke-width="8" stroke-linecap="round"/>'
     +'<line x1="84" y1="27" x2="80" y2="100" '+th(2.5)+'/><line x1="116" y1="27" x2="120" y2="100" '+th(2.5)+'/>'
     +'<rect x="74" y="98" width="52" height="10" rx="3" fill="'+A+'" '+st+'/>'),
    /* 情境 3：以前會爬的大樹 */
    dg20261009a2_tree: svg(
      '<line x1="8" y1="136" x2="192" y2="136" '+st+'/>'
     +'<path d="M88 136 L92 88 L76 74 M108 136 L106 92 L126 76 M98 90 V68" fill="#8a5a33" '+th(4)+'/>'
     +'<rect x="88" y="84" width="22" height="52" fill="#8a5a33" '+st+'/>'
     +'<path d="M54 82 a28 28 0 0 1 10 -46 a34 34 0 0 1 62 -6 a28 28 0 0 1 22 46 a24 24 0 0 1 -30 14 H70 a20 20 0 0 1 -16 -8 Z" fill="'+G+'" '+st+'/>'
     +'<g fill="'+R+'" '+th(2)+'><circle cx="78" cy="50" r="5"/><circle cx="122" cy="44" r="5"/><circle cx="108" cy="70" r="5"/></g>'
     +'<path d="M142 136 V112 M142 120 H170 M170 136 V112" fill="none" '+th(3)+'/>'),
    /* 情境 4：以前的回憶——想法泡泡裡的皮球和風箏 */
    dg20261009a2_memory: svg(
      '<path d="M40 96 a22 22 0 0 1 6 -42 a30 30 0 0 1 56 -14 a28 28 0 0 1 50 14 a22 22 0 0 1 4 42 Z" fill="'+L+'" '+st+'/>'
     +'<circle cx="74" cy="76" r="16" fill="'+R+'" '+st+'/><path d="M58 76 h32 M74 60 q-8 16 0 32" fill="none" '+th(2.5)+'/>'
     +'<path d="M128 46 L144 66 L128 92 L112 66 Z" fill="'+Y+'" '+st+'/><path d="M128 92 q-6 8 2 14 q8 6 0 14" fill="none" '+th(2.5)+'/>'
     +'<circle cx="62" cy="116" r="6" fill="'+L+'" '+th(2.5)+'/><circle cx="48" cy="132" r="4" fill="'+L+'" '+th(2.5)+'/>'),
    /* 情境 5：那家店以前賣冰淇淋 */
    dg20261009a2_icecream: svg(
      '<line x1="8" y1="136" x2="192" y2="136" '+st+'/>'
     +'<rect x="20" y="58" width="96" height="78" fill="'+C+'" '+st+'/>'
     +'<path d="M14 44 H122 L116 62 H20 Z" fill="#f6b6c8" '+st+'/>'
     +'<rect x="34" y="78" width="30" height="30" fill="'+S+'" '+th(2.5)+'/><rect x="74" y="86" width="28" height="50" fill="'+L+'" '+th(2.5)+'/>'
     +cone(156,136,1.05)),
    /* 情境 6：現在賣手機 */
    dg20261009a2_phone: svg(
      phone(64,18,72,118)
     +'<rect x="78" y="44" width="44" height="30" rx="4" fill="#fff" '+th(2)+'/><circle cx="100" cy="94" r="10" fill="'+G+'" '+th(2)+'/>'
     +'<path d="M150 46 a20 20 0 0 1 0 30 M162 36 a34 34 0 0 1 0 50" fill="none" stroke="'+B+'" stroke-width="5" stroke-linecap="round"/>'
     +'<path d="M50 46 a20 20 0 0 0 0 30 M38 36 a34 34 0 0 0 0 50" fill="none" stroke="'+B+'" stroke-width="5" stroke-linecap="round"/>'),
    /* 情境 7：以前 → 現在：冰淇淋換成手機 */
    dg20261009a2_switch: svg(
      cone(48,128,0.85)
     +'<path d="M80 76 H120" '+th(6)+'/><path d="M110 62 L124 76 L110 90" fill="none" '+th(6)+'/>'
     +phone(138,34,44,84)
     +'<circle cx="48" cy="22" r="10" fill="#c9c2b8" '+th(2.5)+'/><path d="M48 16 V22 L52 25" fill="none" '+th(2)+'/>'
     +'<circle cx="160" cy="22" r="10" fill="'+Y+'" '+th(2.5)+'/>'),
    /* 情境 8：去年夏天回來過一次——太陽＋行李箱 */
    dg20261009a2_summer: svg(
      '<circle cx="56" cy="50" r="24" fill="'+Y+'" '+st+'/>'
     +'<g '+th(3.5)+'><line x1="56" y1="12" x2="56" y2="18"/><line x1="18" y1="50" x2="24" y2="50"/><line x1="94" y1="50" x2="88" y2="50"/><line x1="29" y1="23" x2="34" y2="28"/><line x1="83" y1="23" x2="78" y2="28"/><line x1="29" y1="77" x2="34" y2="72"/><line x1="83" y1="77" x2="78" y2="72"/></g>'
     +'<rect x="110" y="64" width="64" height="70" rx="8" fill="'+A+'" '+st+'/>'
     +'<path d="M128 64 V50 a6 6 0 0 1 6 -6 H150 a6 6 0 0 1 6 6 V64" fill="none" '+th(4)+'/>'
     +'<line x1="130" y1="74" x2="130" y2="126" stroke="#fff" stroke-width="4"/><line x1="154" y1="74" x2="154" y2="126" stroke="#fff" stroke-width="4"/>'
     +'<circle cx="122" cy="138" r="5" fill="'+D+'"/><circle cx="162" cy="138" r="5" fill="'+D+'"/>'),
    /* 情境 9：星期天遇到鄰居陳太太——揮手的阿姨 */
    dg20261009a2_neighbor: svg(
      '<path d="M50 140 V122 a40 30 0 0 1 80 0 V140 Z" fill="'+B+'" '+st+'/>'
     +'<circle cx="90" cy="30" r="13" fill="#5b4636" '+st+'/>'
     +'<circle cx="90" cy="66" r="28" fill="'+L+'" '+st+'/>'
     +'<path d="M62 60 a28 28 0 0 1 56 0 q-14 -10 -28 -6 q-14 -4 -28 6 Z" fill="#5b4636" '+st+'/>'
     +'<path d="M80 66 h0 M100 66 h0" '+th(5)+'/><path d="M80 78 q10 8 20 0" fill="none" '+th(3)+'/>'
     +'<path d="M128 112 L154 70" '+th(10)+'/><circle cx="158" cy="62" r="11" fill="'+L+'" '+st+'/>'
     +'<path d="M176 50 l8 -6 M180 66 l10 0" '+th(3)+'/>'),
    /* 情境 10：只圈一天的月曆＝只有一次 */
    dg20261009a2_pin: svg(
      cal(40,28,120,108)
     +'<circle cx="114" cy="99" r="17" fill="none" stroke="'+R+'" stroke-width="5"/>'
     +txt(114,106,'1',18,R))
  });
})();

/* ============================================================
   dg20261009a2 — used to (do)
   Grammar in Use Unit 18（used to (do)），A2 只講肯定句
   ============================================================ */
window.GVIDEO.dg20261009a2 = {
  kind: 'gram',
  date: '2026-10-09',
  title: 'Then and Now: used to',
  titleCn: 'used to：以前常常這樣，現在不了',
  titleArt: ['dg20261009a2_loop', 'dg20261009a2_now', 'dg20261009a2_once'],
  scene: '老社區散步 Old neighborhood',
  sceneArt: 'dg20261009a2_street',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Nina', voice: 'f' },
    T: { name: 'Kevin', voice: 'm' }
  },
  expr: {
    used: { t: 'used to + 原形', cn: '以前常常，現在停了', ex: 'My uncle used to fish on weekends.', exCn: '我叔叔以前週末都去釣魚。', note: '不管主詞是誰，都是 used to；後面接原形動詞' },
    now:  { t: '動詞(s)', cn: '現在的習慣 → 現在簡單式', ex: 'Kevin takes the MRT now.', exCn: 'Kevin 現在搭捷運。', note: '主詞是 he、she 的時候，動詞要加 s' },
    once: { t: '動詞過去式', cn: '只有一次 → 過去簡單式', ex: 'I lost my umbrella on Tuesday.', exCn: '我星期二弄丟了雨傘。', note: '常跟 yesterday、last week、on Sunday 一起出現' }
  },
  chapters: [
    { cn: '開場' }, { cn: '以前、現在、某一天' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  cardsKick: 'Then or now? 以前還是現在？',
  cards: [
    { art: 'dg20261009a2_loop', lab: 'used to',   who: '以前常常，現在停了' },
    { art: 'dg20261009a2_now',  lab: '現在簡單式', who: '現在的習慣' },
    { art: 'dg20261009a2_once', lab: '過去簡單式', who: '某一天，只有一次' }
  ],
  flow: [
    { q: '以前一再發生，現在停了嗎？', a: 'used to',   en: '主詞 + used to + 原形' },
    { q: '現在還常常在做嗎？',         a: '現在簡單式', en: '主詞 + 動詞(s)' },
    { q: '只有一次，說得出哪一天？',   a: '過去簡單式', en: '主詞 + 動詞過去式 + 時間' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: '想說「我以前常常這樣，現在不這樣了」，英文要怎麼講？這支影片教你一個好用的片語。', vis: { type: 'title' } },

    /* ---- 1 核心：以前、現在、某一天 ---- */
    { ch: 1, sp: 'N', zh: '先分清楚三件事：以前的習慣、現在的習慣，還有只發生一次的事。', vis: { type: 'cards', show: 0 } },
    { ch: 1, sp: 'N', zh: '第一種：以前一再發生，現在已經停了，就用 used to。',
      hi: [{ t: 'used to', k: 'used', c: 3 }], vis: { type: 'cards', show: 1, pop: true } },
    { ch: 1, sp: 'A', en: 'I used to live in Kaohsiung.', cn: '我以前住在高雄。',
      hi: [{ t: 'used to live', cn: '以前住，現在沒有', k: 'used', c: 3 }], vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'N', zh: '第二種：現在還在做的習慣，不用 used to，用最簡單的現在簡單式。',
      hi: [{ t: '現在簡單式', k: 'now', c: 4 }], vis: { type: 'cards', show: 2, pop: true } },
    { ch: 1, sp: 'T', en: 'Now I jog every morning.', cn: '我現在每天早上慢跑。',
      hi: [{ t: 'jog', cn: '現在的習慣', k: 'now', c: 4 }], vis: { type: 'cards', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: '記住一件事：used to 後面一定接原形動詞，不管主詞是誰，都是 used to。',
      hi: [{ t: 'used to', k: 'used', c: 3 }], vis: { type: 'cards', show: 2 } },
    { ch: 1, sp: 'N', zh: '第三種：只是某一天發生一次，就用過去簡單式。',
      hi: [{ t: '過去簡單式', k: 'once', c: 2 }], vis: { type: 'cards', show: 3, pop: true } },
    { ch: 1, sp: 'A', en: 'I went to the zoo last Sunday.', cn: '我上星期天去了動物園。',
      hi: [{ t: 'went', cn: '只有一次', k: 'once', c: 2 }], vis: { type: 'cards', show: 3, lit: 2 } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: '句型很簡單：主詞，加 used to，再加原形動詞。',
      hi: [{ t: 'used to', k: 'used', c: 3 }],
      vis: { type: 'pattern', kick: 'used to 句型', rows: [
        { lab: '以前常做', blocks: [{ t: 'I', k: 's' }, { t: 'used to', k: 'v' }, { t: 'collect', k: 'v' }, { t: 'stickers', k: 'n' }] },
        { lab: '以前常做', blocks: [{ t: 'We', k: 's' }, { t: 'used to', k: 'v' }, { t: 'play', k: 'v' }, { t: 'in the park', k: 'o' }] }
      ], note: 'used to 後面是原形：collect、play' } },
    { ch: 2, sp: 'N', zh: '主詞換成 he、she 也一樣，used to 完全不用變。',
      vis: { type: 'pattern', kick: '主詞換了也不變', rows: [
        { lab: 'she', blocks: [{ t: 'My mom', k: 's' }, { t: 'used to', k: 'v' }, { t: 'sing', k: 'v' }, { t: 'in the car', k: 'o' }] },
        { lab: 'he', blocks: [{ t: 'Ken', k: 's' }, { t: 'used to', k: 'v' }, { t: 'ride', k: 'v' }, { t: 'a red scooter', k: 'n' }] }
      ], note: '不管主詞是誰，都是 used to' } },
    { ch: 2, sp: 'N', zh: 'used to 常常跟這些詞一起出現：每天、常常、我小時候。',
      hi: [{ t: 'used to', k: 'used', c: 3 }],
      vis: { type: 'family', kick: 'used to 的好朋友', core: 'used to', coreCn: '常跟這些詞一起出現', art: 'dg20261009a2_loop', items: [
        { t: 'every day', cn: '每天' }, { t: 'often', cn: '常常' }, { t: 'when I was a kid', cn: '我小時候' }
      ] } },
    { ch: 2, sp: 'N', zh: 'used to 只能講過去。現在的習慣，要換回現在簡單式。',
      hi: [{ t: '現在簡單式', k: 'now', c: 4 }],
      vis: { type: 'pattern', kick: '以前 vs 現在', rows: [
        { lab: '以前', blocks: [{ t: 'I', k: 's' }, { t: 'used to', k: 'v' }, { t: 'drink', k: 'v' }, { t: 'juice', k: 'n' }] },
        { lab: '現在', blocks: [{ t: 'I', k: 's' }, { t: 'drink', k: 'v', add: true }, { t: 'water', k: 'n' }] }
      ], note: '現在的習慣：動詞直接用，he、she 加 s' } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: 'Nina 和 Kevin 回到小時候住的社區散步，聽聽他們怎麼聊以前的事。', vis: { type: 'scene', art: 'dg20261009a2_street' } },
    { ch: 3, sp: 'A', en: 'Look! We used to play here every day.', cn: '你看！我們以前天天在這裡玩。',
      hi: [{ t: 'used to play', cn: '以前天天玩', k: 'used', c: 3 }], vis: { type: 'scene', art: 'dg20261009a2_swing' } },
    { ch: 3, sp: 'T', en: 'Yes! And I used to climb that big tree.', cn: '對！我以前還會爬那棵大樹。',
      hi: [{ t: 'used to climb', cn: '以前常爬', k: 'used', c: 3 }], vis: { type: 'scene', art: 'dg20261009a2_tree' } },
    { ch: 3, sp: 'N', zh: '在這裡玩、爬那棵樹，都是以前常常做、現在不做的事，所以用 used to。',
      hi: [{ t: 'used to', k: 'used', c: 3 }], vis: { type: 'scene', art: 'dg20261009a2_memory' } },
    { ch: 3, sp: 'A', en: 'That shop used to sell ice cream.', cn: '那家店以前賣冰淇淋。',
      hi: [{ t: 'used to sell', cn: '以前賣', k: 'used', c: 3 }], vis: { type: 'scene', art: 'dg20261009a2_icecream' } },
    { ch: 3, sp: 'T', en: 'Now it sells phones.', cn: '現在它賣手機。',
      hi: [{ t: 'sells', cn: '現在的樣子', k: 'now', c: 4 }], vis: { type: 'scene', art: 'dg20261009a2_phone' } },
    { ch: 3, sp: 'N', zh: '賣冰淇淋是以前的事；現在賣手機，是現在的樣子，所以用現在簡單式 sells。',
      hi: [{ t: 'sells', k: 'now', c: 4 }], vis: { type: 'scene', art: 'dg20261009a2_switch' } },
    { ch: 3, sp: 'A', en: 'I came back here once last summer.', cn: '我去年夏天回來過一次。',
      hi: [{ t: 'came', cn: '只有一次', k: 'once', c: 2 }], vis: { type: 'scene', art: 'dg20261009a2_summer' } },
    { ch: 3, sp: 'T', en: 'Really? I saw Mrs. Chen here on Sunday.', cn: '真的？我星期天在這裡遇到陳太太。',
      hi: [{ t: 'saw', cn: '只有那一天', k: 'once', c: 2 }], vis: { type: 'scene', art: 'dg20261009a2_neighbor' } },
    { ch: 3, sp: 'N', zh: '去年夏天、星期天，都只有一次，所以用過去簡單式 came 和 saw，不用 used to。',
      hi: [{ t: 'came', k: 'once', c: 2 }, { t: 'saw', k: 'once', c: 2 }], vis: { type: 'scene', art: 'dg20261009a2_pin' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '同一個人、同一副眼鏡，換一個形狀，意思就不一樣。',
      vis: { type: 'vs', sm: true, kick: '以前 vs 現在',
        a: { w: 'Kevin used to wear glasses.', def: 'Kevin 以前戴眼鏡。', cn: '現在不戴了 → used to' },
        b: { w: 'Kevin wears glasses.', def: 'Kevin 戴眼鏡。', cn: '現在還戴 → 現在簡單式' } } },
    { ch: 4, sp: 'A', en: 'Kevin used to wear glasses.', cn: 'Kevin 以前戴眼鏡。',
      hi: [{ t: 'used to wear', cn: '現在不戴了', k: 'used', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '以前 vs 現在',
        a: { w: 'Kevin used to wear glasses.', def: 'Kevin 以前戴眼鏡。', cn: '現在不戴了 → used to' },
        b: { w: 'Kevin wears glasses.', def: 'Kevin 戴眼鏡。', cn: '現在還戴 → 現在簡單式' } } },
    { ch: 4, sp: 'T', en: 'Kevin wears glasses.', cn: 'Kevin 戴眼鏡。',
      hi: [{ t: 'wears', cn: '現在還戴', k: 'now', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '以前 vs 現在',
        a: { w: 'Kevin used to wear glasses.', def: 'Kevin 以前戴眼鏡。', cn: '現在不戴了 → used to' },
        b: { w: 'Kevin wears glasses.', def: 'Kevin 戴眼鏡。', cn: '現在還戴 → 現在簡單式' } } },
    { ch: 4, sp: 'N', zh: '第一句是說 Kevin 以前戴，現在不戴了；第二句是說他現在就戴著眼鏡。',
      vis: { type: 'vs', sm: true, kick: '以前 vs 現在',
        a: { w: 'Kevin used to wear glasses.', def: 'Kevin 以前戴眼鏡。', cn: '現在不戴了 → used to' },
        b: { w: 'Kevin wears glasses.', def: 'Kevin 戴眼鏡。', cn: '現在還戴 → 現在簡單式' } } },
    { ch: 4, sp: 'N', zh: '再看一組。一句是以前常常去露營，另一句是上個週末去了一次。',
      vis: { type: 'vs', sm: true, kick: '常常 vs 一次',
        a: { w: 'We used to go camping in summer.', def: '我們以前夏天常去露營。', cn: '以前常常 → used to' },
        b: { w: 'We went camping last weekend.', def: '我們上週末去露營了。', cn: '只有一次 → 過去簡單式' } } },
    { ch: 4, sp: 'A', en: 'We used to go camping in summer.', cn: '我們以前夏天常去露營。',
      hi: [{ t: 'used to go', cn: '以前常常', k: 'used', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '常常 vs 一次',
        a: { w: 'We used to go camping in summer.', def: '我們以前夏天常去露營。', cn: '以前常常 → used to' },
        b: { w: 'We went camping last weekend.', def: '我們上週末去露營了。', cn: '只有一次 → 過去簡單式' } } },
    { ch: 4, sp: 'T', en: 'We went camping last weekend.', cn: '我們上週末去露營了。',
      hi: [{ t: 'went', cn: '只有一次', k: 'once', c: 2 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '常常 vs 一次',
        a: { w: 'We used to go camping in summer.', def: '我們以前夏天常去露營。', cn: '以前常常 → used to' },
        b: { w: 'We went camping last weekend.', def: '我們上週末去露營了。', cn: '只有一次 → 過去簡單式' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '最後給你一個判斷流程。照順序問自己三個問題。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一問：以前一再發生，現在停了嗎？是的話，用 used to。',
      hi: [{ t: 'used to', k: 'used', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'A', en: 'Grandpa used to tell me stories at bedtime.', cn: '爺爺以前睡前都會講故事給我聽。',
      hi: [{ t: 'used to tell', cn: '以前常常', k: 'used', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二問：現在還常常在做嗎？是的話，用現在簡單式。',
      hi: [{ t: '現在簡單式', k: 'now', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'T', en: 'He reads the news every morning.', cn: '他每天早上看新聞。',
      hi: [{ t: 'reads', cn: '現在的習慣', k: 'now', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '第三問：只有一次，說得出是哪一天？是的話，用過去簡單式。',
      hi: [{ t: '過去簡單式', k: 'once', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'A', en: 'He called me last night.', cn: '他昨天晚上打電話給我。',
      hi: [{ t: 'called', cn: '只有一次', k: 'once', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說說看。看到中文情境，先自己用英文說出來，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：你小時候常常吃很多糖果，現在已經不吃了。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '你小時候常常吃很多糖果，現在已經不吃了。' } },
    { ch: 6, sp: 'A', en: 'I used to eat a lot of candy.', cn: '我以前吃很多糖果。',
      hi: [{ t: 'used to eat', cn: '以前常常 → used to', k: 'used', c: 3 }],
      vis: { type: 'speak', n: 1, show: true, sit: '你小時候常常吃很多糖果，現在已經不吃了。', a: 'I used to eat a lot of candy.' } },
    { ch: 6, sp: 'N', zh: '情境二：你現在每天騎腳踏車上班。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '你現在每天騎腳踏車上班。' } },
    { ch: 6, sp: 'T', en: 'I ride my bike to work every day.', cn: '我每天騎腳踏車上班。',
      hi: [{ t: 'ride', cn: '現在的習慣 → 現在簡單式', k: 'now', c: 4 }],
      vis: { type: 'speak', n: 2, show: true, sit: '你現在每天騎腳踏車上班。', a: 'I ride my bike to work every day.' } },
    { ch: 6, sp: 'N', zh: '情境三：你昨天晚上看了一部電影。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '你昨天晚上看了一部電影。' } },
    { ch: 6, sp: 'A', en: 'I watched a movie last night.', cn: '我昨天晚上看了一部電影。',
      hi: [{ t: 'watched', cn: '只有一次 → 過去簡單式', k: 'once', c: 2 }],
      vis: { type: 'speak', n: 3, show: true, sit: '你昨天晚上看了一部電影。', a: 'I watched a movie last night.' } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結一下：以前常常、現在停了，用 used to；現在的習慣，用現在簡單式；只有一次，用過去簡單式。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '下次想說「我以前常常」，就用 used to，後面接原形動詞。', vis: { type: 'end' } }
  ]
};
