/* ============================================================
   B2 Read 文法影片解說 — dg20260821a2
   Grammar in Use Unit 3（Present continuous and present simple）A2：現在 vs 每天
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
  var BR='#c98a4b', DB='#8b5a2b';
  /* 站著的狗（cx,cy＝身體中心） */
  var dog=function(cx,cy){
    return '<g '+th(5)+'><line x1="'+(cx-20)+'" y1="'+(cy+8)+'" x2="'+(cx-20)+'" y2="'+(cy+26)+'"/><line x1="'+(cx-8)+'" y1="'+(cy+10)+'" x2="'+(cx-8)+'" y2="'+(cy+26)+'"/>'
      +'<line x1="'+(cx+10)+'" y1="'+(cy+10)+'" x2="'+(cx+10)+'" y2="'+(cy+26)+'"/><line x1="'+(cx+22)+'" y1="'+(cy+8)+'" x2="'+(cx+22)+'" y2="'+(cy+26)+'"/></g>'
      +'<path d="M'+(cx-28)+' '+(cy-4)+' q-12 -8 -8 -22" fill="none" '+th(4)+'/>'
      +'<ellipse cx="'+cx+'" cy="'+cy+'" rx="30" ry="15" fill="'+BR+'" '+st+'/>'
      +'<circle cx="'+(cx+30)+'" cy="'+(cy-16)+'" r="14" fill="'+BR+'" '+st+'/>'
      +'<ellipse cx="'+(cx+24)+'" cy="'+(cy-24)+'" rx="5" ry="9" fill="'+DB+'" '+th(2.5)+'/>'
      +'<circle cx="'+(cx+34)+'" cy="'+(cy-19)+'" r="2.2" fill="'+D+'"/><circle cx="'+(cx+43)+'" cy="'+(cy-13)+'" r="3" fill="'+D+'"/>'
      +'<path d="M'+(cx+20)+' '+(cy-5)+' q6 4 12 0" fill="none" stroke="'+R+'" stroke-width="4" stroke-linecap="round"/>'; };
  var clock=function(cx,cy,r,hx,hy,mx,my){
    return '<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="#fff" '+th(4)+'/>'
      +'<g '+th(3.5)+'><line x1="'+cx+'" y1="'+(cy-r+4)+'" x2="'+cx+'" y2="'+(cy-r+11)+'"/><line x1="'+(cx+r-4)+'" y1="'+cy+'" x2="'+(cx+r-11)+'" y2="'+cy+'"/><line x1="'+cx+'" y1="'+(cy+r-4)+'" x2="'+cx+'" y2="'+(cy+r-11)+'"/><line x1="'+(cx-r+4)+'" y1="'+cy+'" x2="'+(cx-r+11)+'" y2="'+cy+'"/></g>'
      +'<line x1="'+cx+'" y1="'+cy+'" x2="'+mx+'" y2="'+my+'" '+th(4)+'/><line x1="'+cx+'" y1="'+cy+'" x2="'+hx+'" y2="'+hy+'" stroke="'+A+'" stroke-width="7" stroke-linecap="round"/>'
      +'<circle cx="'+cx+'" cy="'+cy+'" r="5" fill="'+D+'"/>'; };
  var phone=function(x,y,w,h){ return '<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" rx="9" fill="'+D+'" '+st+'/><rect x="'+(x+6)+'" y="'+(y+10)+'" width="'+(w-12)+'" height="'+(h-22)+'" rx="3" fill="#fff"/>'; };
  var cup=function(x,y){ /* x,y＝杯口左上 */
    return '<path d="M'+(x+46)+' '+(y+6)+' a10 10 0 0 1 0 20" fill="none" '+th(4)+'/>'
      +'<path d="M'+x+' '+y+' H'+(x+48)+' V'+(y+20)+' a16 16 0 0 1 -16 16 H'+(x+16)+' a16 16 0 0 1 -16 -16 Z" fill="#fff" '+st+'/>'
      +'<rect x="'+(x+4)+'" y="'+(y+4)+'" width="40" height="6" rx="2" fill="'+DB+'"/>'; };

  var checks='';
  for(var r=0;r<3;r++) for(var c=0;c<4;c++){ var cx=36+10+c*23+8.5, cy=34+30+r*(62/3)+7.3;
    checks+='<path d="M'+(cx-5)+' '+cy+' l4 4 l7 -8" fill="none" stroke="'+G+'" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>'; }

  Object.assign(window.GVIDEO_ART, {
    /* 現在正在做：平底鍋正在煎鬆餅＋NOW 牌 */
    dg20260821a2_now: svg(
      '<rect x="24" y="112" width="136" height="18" rx="4" fill="#c9c2b8" '+st+'/>'
     +'<rect x="138" y="88" width="50" height="10" rx="5" fill="'+D+'"/>'
     +'<path d="M38 90 Q42 112 90 112 Q138 112 142 90 Z" fill="#4a4f57" '+st+'/>'
     +'<ellipse cx="90" cy="90" rx="52" ry="12" fill="#6b7280" '+st+'/>'
     +'<ellipse cx="90" cy="88" rx="34" ry="8" fill="'+Y+'" '+th(2.5)+'/>'
     +'<path d="M72 66 q-6 -8 0 -16 q6 -8 0 -16 M92 62 q-6 -8 0 -16 q6 -8 0 -16 M112 66 q-6 -8 0 -16 q6 -8 0 -16" fill="none" '+th(3)+'/>'
     +'<rect x="136" y="14" width="54" height="26" rx="13" fill="'+R+'" '+st+'/>'+txt(163,33,'NOW',15,'#fff')),
    /* 每天都這樣：整個月都打勾的月曆＋循環箭頭 */
    dg20260821a2_every: svg(
      cal(36,34,112,100)+checks
     +'<path d="M162 52 a16 16 0 1 1 6 16" fill="none" '+th(4)+'/><path d="M156 46 l6 8 l8 -6" fill="none" '+th(4)+'/>'),
    /* 問句不一樣：Do? 和 Are? 兩個對話框 */
    dg20260821a2_ask: svg(
      '<path d="M30 74 L22 98 L50 75" fill="'+L+'" '+st+'/>'
     +'<rect x="10" y="22" width="88" height="56" rx="14" fill="'+L+'" '+st+'/>'+txt(54,59,'Do?',24)
     +'<path d="M170 110 L180 134 L150 111" fill="'+S+'" '+st+'/>'
     +'<rect x="102" y="58" width="90" height="56" rx="14" fill="'+S+'" '+st+'/>'+txt(147,95,'Are?',23)),

    /* 情境開場：兩支手機在通話 */
    dg20260821a2_call: svg(
      phone(22,34,46,84)+'<circle cx="45" cy="70" r="12" fill="'+Y+'" '+th(2.5)+'/><path d="M33 98 q12 -14 24 0" fill="'+Y+'" '+th(2.5)+'/>'
     +phone(132,34,46,84)+'<circle cx="155" cy="70" r="12" fill="'+A+'" '+th(2.5)+'/><path d="M143 98 q12 -14 24 0" fill="'+A+'" '+th(2.5)+'/>'
     +'<path d="M80 62 q8 14 0 28 M92 54 q12 22 0 44 M120 62 q-8 14 0 28 M108 54 q-12 22 0 44" fill="none" '+th(3.5)+'/>'),
    /* 情境 1：你在做什麼？——手機來電＋問號 */
    dg20260821a2_askdo: svg(
      phone(62,18,64,116)
     +'<circle cx="94" cy="62" r="16" fill="'+A+'" '+th(2.5)+'/><path d="M74 100 q20 -22 40 0" fill="'+A+'" '+th(2.5)+'/>'
     +'<circle cx="94" cy="118" r="7" fill="'+G+'" '+th(2)+'/>'
     +'<path d="M48 54 q-8 14 0 28 M36 46 q-12 22 0 44" fill="none" '+th(3.5)+'/>'
     +qb(162,38)),
    /* 情境 2：在公園遛狗 */
    dg20260821a2_dogpark: svg(
      '<line x1="6" y1="132" x2="194" y2="132" '+st+'/>'
     +'<rect x="160" y="72" width="12" height="60" fill="'+DB+'" '+st+'/><circle cx="166" cy="52" r="28" fill="'+G+'" '+st+'/>'
     +'<path d="M104 92 Q60 66 30 56" fill="none" stroke="'+R+'" stroke-width="3.5" stroke-linecap="round"/>'
     +'<circle cx="26" cy="54" r="9" fill="'+L+'" '+st+'/>'
     +dog(82,106)),
    /* 情境 3：講的是電話這一刻——響著的手機＋腳印 */
    dg20260821a2_ring: svg(
      '<g transform="rotate(-12 70 76)">'+phone(44,30,52,92)+'<circle cx="70" cy="64" r="11" fill="'+Y+'" '+th(2.5)+'/><path d="M56 96 q14 -18 28 0" fill="'+Y+'" '+th(2.5)+'/></g>'
     +'<path d="M30 52 q-10 20 0 40 M18 44 q-14 28 0 56" fill="none" '+th(3.5)+'/>'
     +'<ellipse cx="152" cy="102" rx="22" ry="17" fill="'+DB+'" '+st+'/>'
     +'<g fill="'+DB+'" '+th(2.5)+'><circle cx="128" cy="74" r="8"/><circle cx="143" cy="62" r="8"/><circle cx="161" cy="62" r="8"/><circle cx="176" cy="74" r="8"/></g>'),
    /* 情境 4：每天早上都遛嗎？——日出＋牽繩＋問號 */
    dg20260821a2_askwalk: svg(
      '<circle cx="64" cy="104" r="26" fill="'+Y+'" '+st+'/>'
     +'<g '+th(3.5)+'><line x1="64" y1="64" x2="64" y2="54"/><line x1="34" y1="76" x2="27" y2="69"/><line x1="94" y1="76" x2="101" y2="69"/><line x1="22" y1="102" x2="12" y2="102"/><line x1="106" y1="102" x2="116" y2="102"/></g>'
     +'<path d="M0 124 Q50 100 104 120 T200 112 V150 H0 Z" fill="'+G+'" '+st+'/>'
     +'<circle cx="140" cy="100" r="16" fill="'+BR+'" '+st+'/><ellipse cx="131" cy="92" rx="5" ry="9" fill="'+DB+'" '+th(2.5)+'/>'
     +'<circle cx="144" cy="97" r="2.2" fill="'+D+'"/><circle cx="153" cy="103" r="3" fill="'+D+'"/>'
     +qb(174,36)),
    /* 情境 5：每天七點出門——時鐘指 7:00 */
    dg20260821a2_seven: svg(
      clock(96,78,54,86,102,96,38)
     +'<circle cx="26" cy="28" r="12" fill="'+Y+'" '+th(2.5)+'/>'
     +txt(172,40,'7:00',20,A)),
    /* 情境 6：每天的習慣——門邊掛著牽繩、窗外有太陽 */
    dg20260821a2_door: svg(
      '<line x1="10" y1="136" x2="190" y2="136" '+st+'/>'
     +'<rect x="54" y="18" width="72" height="118" rx="4" fill="'+L+'" '+st+'/>'
     +'<rect x="68" y="30" width="44" height="32" rx="3" fill="'+S+'" '+st+'/><circle cx="90" cy="48" r="8" fill="'+Y+'" '+th(2)+'/>'
     +'<circle cx="114" cy="84" r="4" fill="'+D+'"/>'
     +'<circle cx="156" cy="44" r="5" fill="#c9c2b8" '+th(2.5)+'/>'
     +'<path d="M156 49 c-12 6 -12 24 0 30 c12 6 12 24 0 34" fill="none" stroke="'+R+'" stroke-width="5" stroke-linecap="round"/>'
     +'<ellipse cx="156" cy="124" rx="18" ry="8" fill="'+B+'" '+st+'/>'),
    /* 情境 7：坐在咖啡店——桌上的咖啡和可頌 */
    dg20260821a2_cafe: svg(
      '<rect x="22" y="104" width="156" height="9" rx="3" fill="'+DB+'" '+st+'/>'
     +'<line x1="44" y1="113" x2="44" y2="140" '+th(5)+'/><line x1="156" y1="113" x2="156" y2="140" '+th(5)+'/>'
     +'<ellipse cx="74" cy="102" rx="36" ry="5" fill="#fff" '+st+'/>'+cup(50,64)
     +'<path d="M62 54 q-6 -8 0 -16 q6 -8 0 -16 M82 54 q-6 -8 0 -16 q6 -8 0 -16" fill="none" '+th(3)+'/>'
     +'<path d="M120 98 q24 -36 50 0 q-10 6 -25 6 q-15 0 -25 -6 Z" fill="'+Y+'" '+st+'/><path d="M135 86 l4 12 M152 84 l-2 14" fill="none" '+th(2.5)+'/>'),
    /* 情境 8：狗正拉著我走——繃緊的牽繩＋速度線 */
    dg20260821a2_pull: svg(
      '<line x1="6" y1="134" x2="194" y2="134" '+st+'/>'
     +'<line x1="24" y1="58" x2="128" y2="96" stroke="'+R+'" stroke-width="3.5" stroke-linecap="round"/>'
     +'<circle cx="20" cy="56" r="9" fill="'+L+'" '+st+'/>'
     +'<g transform="rotate(-8 106 108)">'+dog(106,108)+'</g>'
     +'<path d="M40 104 h26 M34 116 h30 M44 128 h20" fill="none" '+th(3)+'/>'
     +'<path d="M160 52 h26 M178 44 l8 8 l-8 8" fill="none" '+th(4)+'/>'),
    /* 情境 9：眼前正在發生——狗坐在咖啡桌旁＋愛心 */
    dg20260821a2_meet: svg(
      '<line x1="6" y1="134" x2="194" y2="134" '+st+'/>'
     +'<path d="M48 110 q-14 4 -10 -14" fill="none" '+th(4)+'/>'
     +'<ellipse cx="62" cy="108" rx="18" ry="25" fill="'+BR+'" '+st+'/>'
     +'<circle cx="68" cy="76" r="15" fill="'+BR+'" '+st+'/><ellipse cx="60" cy="68" rx="5" ry="9" fill="'+DB+'" '+th(2.5)+'/>'
     +'<circle cx="72" cy="73" r="2.2" fill="'+D+'"/><circle cx="82" cy="79" r="3" fill="'+D+'"/>'
     +'<rect x="104" y="100" width="80" height="8" rx="3" fill="'+DB+'" '+st+'/><line x1="144" y1="108" x2="144" y2="134" '+th(5)+'/>'
     +cup(120,62)
     +'<path d="M96 40 c-6 -12 -26 -6 -18 10 l18 16 l18 -16 c8 -16 -12 -22 -18 -10 Z" fill="'+R+'" '+st+'/>')
  });
})();

/* ============================================================
   dg20260821a2 — Now or Every Day?
   Grammar in Use Unit 3（I am doing / I do）A2
   ============================================================ */
window.GVIDEO.dg20260821a2 = {
  kind: 'gram',
  date: '2026-08-21',
  title: 'Now or Every Day?',
  titleCn: '現在正在做，還是每天都這樣？',
  titleArt: ['dg20260821a2_now', 'dg20260821a2_every', 'dg20260821a2_ask'],
  scene: '週六早上 Saturday morning',
  sceneArt: 'dg20260821a2_call',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Lily', voice: 'f' },
    T: { name: 'Sam', voice: 'm' }
  },
  expr: {
    now:   { t: 'am / is / are + V-ing', cn: '現在這一刻正在做 → 現在進行式', ex: 'Shh, the baby is sleeping.', exCn: '噓，寶寶在睡覺。', note: '常跟 now、right now、Look!、Listen! 一起出現' },
    every: { t: '動詞 / 動詞 + s', cn: '每天、平常都這樣 → 現在簡單式', ex: 'My grandma drinks tea every afternoon.', exCn: '我奶奶每天下午都喝茶。', note: 'he、she、it 後面的動詞要加 s；常跟 every day、usually 一起出現' },
    ask:   { t: 'Do …? / Are …?', cn: '問習慣借 do，問現在搬 be', ex: 'Are you cooking dinner right now?', exCn: '你現在在煮晚餐嗎？', note: '問習慣：Do / Does + 主詞 + 原形；問現在：Am / Is / Are + 主詞 + V-ing' }
  },
  chapters: [
    { cn: '開場' }, { cn: '現在還是每天？' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  cardsKick: 'Now or every day? 現在還是每天？',
  cards: [
    { art: 'dg20260821a2_now',   lab: '現在進行式', who: '現在正在做' },
    { art: 'dg20260821a2_every', lab: '現在簡單式', who: '每天、平常都這樣' },
    { art: 'dg20260821a2_ask',   lab: '問句不一樣', who: 'Do 還是 Are？' }
  ],
  flow: [
    { q: '是現在這一刻正在做的嗎？', a: '現在進行式', en: '主詞 + am / is / are + V-ing' },
    { q: '是每天、平常的習慣嗎？',   a: '現在簡單式', en: '主詞 + 動詞(s)' },
    { q: '要問問題：問習慣還是問現在？', a: 'do／be', en: 'Do / Does …?　Am / Is / Are … V-ing?' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: '同一個動詞，可以說 I read，也可以說 I\'m reading。兩個差在哪裡？這支影片一次講清楚。', vis: { type: 'title' } },

    /* ---- 1 核心：現在還是每天？ ---- */
    { ch: 1, sp: 'N', zh: '開口之前，先問自己：我講的是現在這一刻，還是每天都這樣？', vis: { type: 'cards', show: 0 } },
    { ch: 1, sp: 'N', zh: '現在這一刻正在做的事，用現在進行式，也就是 am、is、are，再加動詞 ing。',
      hi: [{ t: '現在進行式', k: 'now', c: 3 }], vis: { type: 'cards', show: 1, pop: true } },
    { ch: 1, sp: 'A', en: "I'm making pancakes right now.", cn: '我現在正在做鬆餅。',
      hi: [{ t: "I'm making", cn: '正在做', k: 'now', c: 3 }], vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'N', zh: '每天、平常都會做的事，是習慣，用現在簡單式。主詞是他或她，動詞要加 s。',
      hi: [{ t: '現在簡單式', k: 'every', c: 4 }], vis: { type: 'cards', show: 2, pop: true } },
    { ch: 1, sp: 'T', en: 'My brother makes breakfast every Sunday.', cn: '我哥每個星期日都做早餐。',
      hi: [{ t: 'makes', cn: '每週的習慣', k: 'every', c: 4 }], vis: { type: 'cards', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: '同一個動詞 make，一個講現在，一個講習慣，形狀就不一樣。',
      vis: { type: 'cards', show: 2 } },
    { ch: 1, sp: 'N', zh: '問問題的時候也不同：問習慣，前面借 do 或 does；問現在，就把 be 動詞搬到前面。',
      hi: [{ t: 'do 或 does', k: 'ask', c: 2 }], vis: { type: 'cards', show: 3, pop: true } },
    { ch: 1, sp: 'A', en: 'Do you cook at home every day?', cn: '你每天都在家煮飯嗎？',
      hi: [{ t: 'Do you cook', cn: '問習慣', k: 'ask', c: 2 }], vis: { type: 'cards', show: 3, lit: 2 } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: '現在進行式的句型：主詞加 am、is、are，再加動詞 ing。否定就在 be 動詞後面加 not。',
      hi: [{ t: '現在進行式', k: 'now', c: 3 }],
      vis: { type: 'pattern', kick: 'Present continuous 現在進行式', rows: [
        { lab: '肯定', blocks: [{ t: 'She', k: 's' }, { t: 'is drawing', k: 'v' }, { t: 'a cat', k: 'n' }, { t: 'now', k: 'o' }] },
        { lab: '否定', blocks: [{ t: 'He', k: 's' }, { t: "isn't watching", k: 'v' }, { t: 'TV', k: 'n' }] }
      ], note: 'I → am，he / she / it → is，you / we / they → are' } },
    { ch: 2, sp: 'N', zh: '現在簡單式的句型：主詞加動詞，他、她、它要加 s。否定用 don\'t 或 doesn\'t，後面的動詞回到原形。',
      hi: [{ t: '現在簡單式', k: 'every', c: 4 }],
      vis: { type: 'pattern', kick: 'Present simple 現在簡單式', rows: [
        { lab: '肯定', blocks: [{ t: 'Tom', k: 's' }, { t: 'walks', k: 'v' }, { t: 'to school', k: 'n' }, { t: 'every day', k: 'o' }] },
        { lab: '否定', blocks: [{ t: 'Tom', k: 's' }, { t: "doesn't walk", k: 'v' }, { t: 'to school', k: 'n' }] }
      ], note: "doesn't 後面用原形：walks → doesn't walk" } },
    { ch: 2, sp: 'N', zh: '時間詞是最好的提示：now、Look 配進行式；every day、usually 配簡單式。',
      vis: { type: 'family', kick: 'Time words 時間詞', core: 'Time words', coreCn: '看時間詞選時態', art: 'dg20260821a2_every', items: [
        { t: 'now · right now', cn: '現在 → 進行式' }, { t: 'Look! · Listen!', cn: '你看・你聽 → 進行式' },
        { t: 'every day · on Sundays', cn: '每天・每週日 → 簡單式' }, { t: 'usually · always', cn: '通常・總是 → 簡單式' }
      ] } },
    { ch: 2, sp: 'N', zh: '問句記一句話：問習慣，先放 do 或 does；問現在，先放 am、is、are。',
      hi: [{ t: 'do 或 does', k: 'ask', c: 2 }],
      vis: { type: 'pattern', kick: 'Questions 問句', rows: [
        { lab: '問習慣', blocks: [{ t: 'Does', k: 'n' }, { t: 'she', k: 's' }, { t: 'play', k: 'v' }, { t: 'the piano', k: 'n' }, { t: '?', k: 'n' }] },
        { lab: '問現在', blocks: [{ t: 'Is', k: 'n' }, { t: 'she', k: 's' }, { t: 'playing', k: 'v' }, { t: 'the piano', k: 'n' }, { t: 'now?', k: 'o' }] }
      ], note: 'Does 後面用原形 play；Is 後面用 playing' } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: '星期六早上，Sam 打電話給 Lily。聽聽看，誰在講現在，誰在講習慣。', vis: { type: 'scene', art: 'dg20260821a2_call' } },
    { ch: 3, sp: 'T', en: 'Hi, Lily! What are you doing?', cn: '嗨，Lily！你在做什麼？',
      hi: [{ t: 'are you doing', cn: '問現在', k: 'now', c: 3 }], vis: { type: 'scene', art: 'dg20260821a2_askdo' } },
    { ch: 3, sp: 'A', en: "I'm walking my dog in the park.", cn: '我在公園遛狗。',
      hi: [{ t: "I'm walking", cn: '正在遛狗', k: 'now', c: 3 }], vis: { type: 'scene', art: 'dg20260821a2_dogpark' } },
    { ch: 3, sp: 'N', zh: 'Lily 講的是接電話這一刻正在做的事，所以用 I\'m walking。',
      hi: [{ t: "I'm walking", k: 'now', c: 3 }], vis: { type: 'scene', art: 'dg20260821a2_ring' } },
    { ch: 3, sp: 'T', en: 'Do you walk him every morning?', cn: '你每天早上都遛牠嗎？',
      hi: [{ t: 'Do you walk', cn: '問習慣', k: 'ask', c: 2 }], vis: { type: 'scene', art: 'dg20260821a2_askwalk' } },
    { ch: 3, sp: 'A', en: 'Yes, we go out at seven every day.', cn: '對，我們每天七點出門。',
      hi: [{ t: 'go out', cn: '每天的習慣', k: 'every', c: 4 }], vis: { type: 'scene', art: 'dg20260821a2_seven' } },
    { ch: 3, sp: 'N', zh: '每天七點出門，是 Lily 和狗狗的習慣，所以用現在簡單式 go out。',
      hi: [{ t: '現在簡單式', k: 'every', c: 4 }], vis: { type: 'scene', art: 'dg20260821a2_door' } },
    { ch: 3, sp: 'T', en: "Cool. I'm sitting in a café near the park.", cn: '酷，我正坐在公園附近的咖啡店。',
      hi: [{ t: "I'm sitting", cn: '正坐著', k: 'now', c: 3 }], vis: { type: 'scene', art: 'dg20260821a2_cafe' } },
    { ch: 3, sp: 'A', en: 'Oh! My dog is pulling me to the café!', cn: '喔！我的狗正拉著我往咖啡店走！',
      hi: [{ t: 'is pulling', cn: '眼前正在發生', k: 'now', c: 3 }], vis: { type: 'scene', art: 'dg20260821a2_pull' } },
    { ch: 3, sp: 'N', zh: '最後這句，是 Lily 眼前正在發生的事，所以又用進行式 is pulling。',
      hi: [{ t: 'is pulling', k: 'now', c: 3 }], vis: { type: 'scene', art: 'dg20260821a2_meet' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '同一個動詞 play，時間不一樣，意思就不一樣。',
      vis: { type: 'vs', sm: true, kick: '平常 vs 現在',
        a: { w: 'Mark plays the guitar on weekends.', def: 'Mark 週末都會彈吉他。', cn: '平常的習慣 → 簡單式' },
        b: { w: 'Mark is playing the guitar right now.', def: 'Mark 現在正在彈吉他。', cn: '這一刻正在做 → 進行式' } } },
    { ch: 4, sp: 'A', en: 'Mark plays the guitar on weekends.', cn: 'Mark 週末都會彈吉他。',
      hi: [{ t: 'plays', cn: '習慣', k: 'every', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '平常 vs 現在',
        a: { w: 'Mark plays the guitar on weekends.', def: 'Mark 週末都會彈吉他。', cn: '平常的習慣 → 簡單式' },
        b: { w: 'Mark is playing the guitar right now.', def: 'Mark 現在正在彈吉他。', cn: '這一刻正在做 → 進行式' } } },
    { ch: 4, sp: 'T', en: 'Mark is playing the guitar right now.', cn: 'Mark 現在正在彈吉他。',
      hi: [{ t: 'is playing', cn: '正在彈', k: 'now', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '平常 vs 現在',
        a: { w: 'Mark plays the guitar on weekends.', def: 'Mark 週末都會彈吉他。', cn: '平常的習慣 → 簡單式' },
        b: { w: 'Mark is playing the guitar right now.', def: 'Mark 現在正在彈吉他。', cn: '這一刻正在做 → 進行式' } } },
    { ch: 4, sp: 'N', zh: '第一句講的是他週末常做的事；第二句是你現在打開門，就聽得到他在彈。',
      vis: { type: 'vs', sm: true, kick: '平常 vs 現在',
        a: { w: 'Mark plays the guitar on weekends.', def: 'Mark 週末都會彈吉他。', cn: '平常的習慣 → 簡單式' },
        b: { w: 'Mark is playing the guitar right now.', def: 'Mark 現在正在彈吉他。', cn: '這一刻正在做 → 進行式' } } },
    { ch: 4, sp: 'N', zh: '再看否定句。簡單式用 doesn\'t 加原形，進行式在 is 後面加 not。',
      vis: { type: 'vs', sm: true, kick: '兩種否定',
        a: { w: "My cat doesn't eat fish.", def: '我的貓不吃魚。', cn: '平常就不吃 → doesn\'t + 原形' },
        b: { w: "My cat isn't eating today.", def: '我的貓今天沒在吃東西。', cn: '今天這樣 → isn\'t + V-ing' } } },
    { ch: 4, sp: 'A', en: "My cat doesn't eat fish.", cn: '我的貓不吃魚。',
      hi: [{ t: "doesn't eat", cn: '平常不吃', k: 'every', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '兩種否定',
        a: { w: "My cat doesn't eat fish.", def: '我的貓不吃魚。', cn: '平常就不吃 → doesn\'t + 原形' },
        b: { w: "My cat isn't eating today.", def: '我的貓今天沒在吃東西。', cn: '今天這樣 → isn\'t + V-ing' } } },
    { ch: 4, sp: 'T', en: "My cat isn't eating today.", cn: '我的貓今天沒在吃東西。',
      hi: [{ t: "isn't eating", cn: '今天沒在吃', k: 'now', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '兩種否定',
        a: { w: "My cat doesn't eat fish.", def: '我的貓不吃魚。', cn: '平常就不吃 → doesn\'t + 原形' },
        b: { w: "My cat isn't eating today.", def: '我的貓今天沒在吃東西。', cn: '今天這樣 → isn\'t + V-ing' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '最後給你一個判斷流程，照順序問自己三個問題。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一問：是現在這一刻正在做的嗎？是的話，用現在進行式。',
      hi: [{ t: '現在進行式', k: 'now', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'A', en: 'Listen! Someone is knocking on the door.', cn: '你聽！有人在敲門。',
      hi: [{ t: 'is knocking', cn: '正在敲', k: 'now', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二問：是每天、平常的習慣嗎？是的話，用現在簡單式。',
      hi: [{ t: '現在簡單式', k: 'every', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'T', en: 'I usually take a shower at night.', cn: '我通常晚上洗澡。',
      hi: [{ t: 'usually take', cn: '平常的習慣', k: 'every', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '第三問：要問問題的話，問習慣放 do 或 does，問現在放 am、is、are。',
      hi: [{ t: 'do 或 does', k: 'ask', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'A', en: 'Are your kids doing their homework?', cn: '你的孩子在寫功課嗎？',
      hi: [{ t: 'Are your kids doing', cn: '問現在', k: 'ask', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說說看。看到中文情境，先自己用英文說出來，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：朋友打電話來，你現在正在洗碗。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '朋友打電話來，你現在正在洗碗。' } },
    { ch: 6, sp: 'A', en: "I'm washing the dishes right now.", cn: '我現在正在洗碗。',
      hi: [{ t: "I'm washing", cn: '正在做 → 進行式', k: 'now', c: 3 }],
      vis: { type: 'speak', n: 1, show: true, sit: '朋友打電話來，你現在正在洗碗。', a: "I'm washing the dishes right now." } },
    { ch: 6, sp: 'N', zh: '情境二：介紹你妹妹，她每天騎腳踏車上學。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '介紹你妹妹，她每天騎腳踏車上學。' } },
    { ch: 6, sp: 'T', en: 'My sister rides her bike to school every day.', cn: '我妹妹每天騎腳踏車上學。',
      hi: [{ t: 'rides', cn: '習慣 → 簡單式', k: 'every', c: 4 }],
      vis: { type: 'speak', n: 2, show: true, sit: '介紹你妹妹，她每天騎腳踏車上學。', a: 'My sister rides her bike to school every day.' } },
    { ch: 6, sp: 'N', zh: '情境三：你想問朋友，他早上通常會不會喝咖啡。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '你想問朋友，他早上通常會不會喝咖啡。' } },
    { ch: 6, sp: 'A', en: 'Do you usually drink coffee in the morning?', cn: '你早上通常會喝咖啡嗎？',
      hi: [{ t: 'Do you usually drink', cn: '問習慣 → do', k: 'ask', c: 2 }],
      vis: { type: 'speak', n: 3, show: true, sit: '你想問朋友，他早上通常會不會喝咖啡。', a: 'Do you usually drink coffee in the morning?' } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結一下：現在正在做的，用 be 加 ing；每天都這樣的，用現在簡單式；問問題前，先想是問習慣還是問現在。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '下次開口前，先想一下：我講的是現在，還是每天？', vis: { type: 'end' } }
  ]
};
