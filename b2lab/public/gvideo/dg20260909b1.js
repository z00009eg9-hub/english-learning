/* ============================================================
   B2 Read 文法影片解說 — dg20260909b1（Unit 9，B1）
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
  /* 時鐘：h、m 是指針角度用的時、分 */
  var clock=function(cx,cy,r,h,m){
    var a1=(h%12+m/60)*30*Math.PI/180, a2=m*6*Math.PI/180;
    return '<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="#fff" '+th(3.5)+'/>'
      +'<g '+th(3)+'><line x1="'+cx+'" y1="'+(cy-r+4)+'" x2="'+cx+'" y2="'+(cy-r+10)+'"/><line x1="'+(cx+r-4)+'" y1="'+cy+'" x2="'+(cx+r-10)+'" y2="'+cy+'"/><line x1="'+cx+'" y1="'+(cy+r-4)+'" x2="'+cx+'" y2="'+(cy+r-10)+'"/><line x1="'+(cx-r+4)+'" y1="'+cy+'" x2="'+(cx-r+10)+'" y2="'+cy+'"/></g>'
      +'<line x1="'+cx+'" y1="'+cy+'" x2="'+(cx+Math.sin(a2)*r*0.72).toFixed(1)+'" y2="'+(cy-Math.cos(a2)*r*0.72).toFixed(1)+'" '+th(3.5)+'/>'
      +'<line x1="'+cx+'" y1="'+cy+'" x2="'+(cx+Math.sin(a1)*r*0.5).toFixed(1)+'" y2="'+(cy-Math.cos(a1)*r*0.5).toFixed(1)+'" stroke="'+A+'" stroke-width="6" stroke-linecap="round"/>'
      +'<circle cx="'+cx+'" cy="'+cy+'" r="4" fill="'+D+'"/>'; };
  /* 油漆滾筒（握把朝下） */
  var roller=function(x,y,col){
    return '<rect x="'+x+'" y="'+y+'" width="44" height="18" rx="7" fill="'+col+'" '+st+'/>'
      +'<path d="M'+(x+44)+' '+(y+9)+' h6 v16 h-28 v12" fill="none" '+th(3)+'/>'
      +'<rect x="'+(x+17)+'" y="'+(y+37)+'" width="10" height="26" rx="4" fill="'+A+'" '+st+'/>'; };

  Object.assign(window.GVIDEO_ART, {
    /* 核心 1：這一刻——時鐘＋NOW 標籤 */
    dg20260909b1_now: svg(
      clock(84,80,48,3,0)
     +'<path d="M128 26 h52 a8 8 0 0 1 8 8 v18 a8 8 0 0 1 -8 8 h-52 a8 8 0 0 1 -8 -8 v-18 a8 8 0 0 1 8 -8 Z" fill="'+R+'" '+st+'/>'
     +txt(154,50,'NOW',17,'#fff')),
    /* 核心 2：從過去一路到現在——起點小旗＋長箭頭＋現在的點 */
    dg20260909b1_span: svg(
      '<line x1="14" y1="104" x2="186" y2="104" '+th(3)+' stroke-dasharray="2 8"/>'
     +'<line x1="34" y1="104" x2="34" y2="40" '+th(4)+'/><path d="M34 40 h40 l-10 12 l10 12 h-40 Z" fill="'+G+'" '+st+'/>'
     +'<path d="M40 104 H150" stroke="'+B+'" stroke-width="12" stroke-linecap="round"/>'
     +'<path d="M146 90 L170 104 L146 118 Z" fill="'+B+'" '+st+'/>'
     +'<circle cx="34" cy="104" r="8" fill="#fff" '+st+'/><circle cx="174" cy="104" r="10" fill="'+R+'" '+st+'/>'
     +'<path d="M174 82 v-14 M162 86 l-8 -10 M186 86 l8 -10" '+th(3)+'/>'),
    /* 核心 3：多久？——沙漏＋問號 */
    dg20260909b1_howlong: svg(
      '<rect x="56" y="18" width="76" height="12" rx="4" fill="'+A+'" '+st+'/><rect x="56" y="120" width="76" height="12" rx="4" fill="'+A+'" '+st+'/>'
     +'<path d="M66 30 H122 C122 58 104 66 100 75 C104 84 122 92 122 120 H66 C66 92 84 84 88 75 C84 66 66 58 66 30 Z" fill="'+S+'" '+st+'/>'
     +'<path d="M76 46 H112 C108 60 98 66 94 72 C90 66 80 60 76 46 Z" fill="'+Y+'"/>'
     +'<path d="M94 82 L94 104 M74 116 C80 104 108 104 114 116 Z" stroke="'+Y+'" stroke-width="3" fill="'+Y+'"/>'
     +'<path d="M66 30 H122 C122 58 104 66 100 75 C104 84 122 92 122 120 H66 C66 92 84 84 88 75 C84 66 66 58 66 30 Z" fill="none" '+st+'/>'
     +qb(162,44)),

    /* 情境 1：Tessa 打電話——手機＋聲波 */
    dg20260909b1_call: svg(
      '<rect x="70" y="16" width="60" height="118" rx="12" fill="'+D+'" '+st+'/><rect x="76" y="28" width="48" height="90" rx="4" fill="'+S+'"/>'
     +'<circle cx="100" cy="58" r="14" fill="'+Y+'" '+th(2.5)+'/><path d="M80 112 a20 18 0 0 1 40 0" fill="'+R+'" '+th(2.5)+'/>'
     +'<circle cx="95" cy="56" r="1.8" fill="'+D+'"/><circle cx="105" cy="56" r="1.8" fill="'+D+'"/><path d="M95 63 q5 4 10 0" fill="none" '+th(2)+'/>'
     +'<path d="M146 50 q10 16 0 32 M158 40 q18 26 0 52" fill="none" '+th(3.5)+'/>'
     +'<path d="M54 50 q-10 16 0 32 M42 40 q-18 26 0 52" fill="none" '+th(3.5)+'/>'),
    /* 情境 2：你在做什麼？——對話框＋問號 */
    dg20260909b1_ask: svg(
      '<path d="M24 26 H140 a14 14 0 0 1 14 14 V88 a14 14 0 0 1 -14 14 H72 L50 124 V102 H24 a14 14 0 0 1 -14 -14 V40 a14 14 0 0 1 14 -14 Z" fill="#fff" '+st+'/>'
     +'<circle cx="82" cy="52" r="12" fill="'+Y+'" '+th(2.5)+'/><path d="M64 92 V80 a18 14 0 0 1 36 0 V92 Z" fill="'+B+'" '+th(2.5)+'/>'
     +'<g fill="'+D+'"><circle cx="112" cy="72" r="4"/><circle cx="126" cy="72" r="4"/><circle cx="140" cy="72" r="4"/></g>'
     +qb(172,40)),
    /* 情境 3：在油漆房間——滾筒在牆上刷出一道 */
    dg20260909b1_roller: svg(
      '<rect x="14" y="14" width="172" height="122" rx="6" fill="'+L+'" '+st+'/>'
     +'<path d="M50 16 V134" stroke="'+S+'" stroke-width="30"/><path d="M98 16 V66" stroke="'+S+'" stroke-width="40"/>'
     +roller(76,58,S)
     +'<rect x="14" y="14" width="172" height="122" rx="6" fill="none" '+st+'/>'
     +'<path d="M130 120 q4 -10 8 0 q-4 6 -8 0 Z M150 110 q3 -8 6 0 q-3 5 -6 0 Z" fill="'+S+'" '+th(2)+'/>'),
    /* 情境 4：只講這一刻——漆到一半的牆＋油漆桶 */
    dg20260909b1_wall: svg(
      '<line x1="8" y1="136" x2="192" y2="136" '+st+'/>'
     +'<rect x="20" y="20" width="160" height="116" fill="'+C+'" '+st+'/>'
     +'<rect x="21.5" y="21.5" width="78" height="113" fill="'+S+'"/>'
     +'<path d="M100 21.5 V134.5" stroke="'+S+'" stroke-width="6" stroke-dasharray="6 6"/>'
     +'<path d="M120 96 h44 l-4 40 h-36 Z" fill="#fff" '+st+'/><path d="M120 96 h44" '+th(3)+'/><ellipse cx="142" cy="96" rx="22" ry="5" fill="'+S+'" '+th(2.5)+'/>'
     +'<path d="M124 96 q18 -26 36 0" fill="none" '+th(3)+'/>'
     +roller(78,46,S)),
    /* 情境 5：漆多久了？——時鐘＋問號 */
    dg20260909b1_clockq: svg(
      clock(88,80,52,10,40)
     +'<path d="M150 70 a22 22 0 1 1 -6 -24" fill="none" stroke="'+B+'" stroke-width="5" stroke-linecap="round"/><path d="M140 38 l6 10 l-11 2" fill="none" stroke="'+B+'" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>'
     +qb(170,112)),
    /* 情境 6：從九點一直漆——九點的時鐘＋箭頭指向現在 */
    dg20260909b1_since9: svg(
      clock(54,72,40,9,0)
     +txt(54,136,'9:00',16,A)
     +'<path d="M104 44 H160" stroke="'+B+'" stroke-width="10" stroke-linecap="round"/><path d="M154 30 L178 44 L154 58 Z" fill="'+B+'" '+st+'/>'
     +roller(124,74,S)),
    /* 情境 7：手好痠——流汗的臉＋油漆斑點 */
    dg20260909b1_tired: svg(
      '<circle cx="96" cy="78" r="46" fill="'+Y+'" '+st+'/>'
     +'<path d="M76 70 q6 -6 12 0 M104 70 q6 -6 12 0" fill="none" '+th(3)+'/>'
     +'<path d="M82 100 q14 -10 28 0" fill="none" '+th(3)+'/>'
     +'<circle cx="74" cy="52" r="7" fill="'+S+'" '+th(2)+'/><circle cx="118" cy="98" r="5" fill="'+S+'" '+th(2)+'/>'
     +'<path d="M146 46 q8 12 0 18 q-8 -6 0 -18 Z M160 70 q7 10 0 15 q-7 -5 0 -15 Z" fill="'+S+'" '+th(2.5)+'/>'
     +'<path d="M40 30 l10 8 M34 50 l12 2" '+th(3)+'/>'),
    /* 情境 8：剛好走過你家樓下——公寓＋走路的腳印 */
    dg20260909b1_building: svg(
      '<line x1="8" y1="134" x2="192" y2="134" '+st+'/>'
     +'<rect x="34" y="20" width="80" height="114" fill="'+L+'" '+st+'/>'
     +'<g fill="'+S+'" '+th(2.5)+'><rect x="46" y="32" width="18" height="16"/><rect x="84" y="32" width="18" height="16"/><rect x="46" y="60" width="18" height="16"/><rect x="84" y="60" width="18" height="16"/><rect x="46" y="88" width="18" height="16"/></g>'
     +'<rect x="84" y="102" width="20" height="32" fill="'+A+'" '+th(2.5)+'/>'
     +'<rect x="46" y="60" width="18" height="16" fill="'+Y+'" '+th(2.5)+'/>'
     +'<g fill="'+D+'"><ellipse cx="132" cy="124" rx="5" ry="8"/><ellipse cx="148" cy="112" rx="5" ry="8"/><ellipse cx="164" cy="124" rx="5" ry="8"/><ellipse cx="180" cy="112" rx="5" ry="8"/></g>'),
    /* 情境 9：一直希望有人打來——手機＋愛心 */
    dg20260909b1_hope: svg(
      '<rect x="46" y="22" width="60" height="112" rx="12" fill="'+D+'" '+st+'/><rect x="52" y="34" width="48" height="84" rx="4" fill="#fff"/>'
     +'<path d="M66 70 a8 8 0 0 1 10 -10 a8 8 0 0 1 10 10 l-10 12 Z" fill="'+R+'" '+th(2.5)+'/>'
     +'<path d="M138 70 a14 14 0 0 1 20 -20 a14 14 0 0 1 20 20 l-20 24 Z" fill="'+R+'" '+st+'/>'
     +'<path d="M118 56 l10 4 M118 84 l10 -4" '+th(3)+'/>'),
    /* 情境 10：兩個人一起漆——交叉的兩支滾筒 */
    dg20260909b1_team: svg(
      '<g transform="rotate(-24 70 78)">'+roller(44,44,S)+'</g>'
     +'<g transform="rotate(24 130 78)">'+roller(108,44,Y)+'</g>'
     +'<path d="M100 18 v12 M86 22 l5 9 M114 22 l-5 9" '+th(3)+'/>'
     +chk(100,122,14))
  });
})();

/* ============================================================
   dg20260909b1 — Have Been Doing vs Am Doing
   Grammar in Use Unit 9（Present perfect continuous），對照 I am doing
   ============================================================ */
window.GVIDEO.dg20260909b1 = {
  kind: 'gram',
  date: '2026-09-09',
  title: 'Right Now or How Long?',
  titleCn: 'am doing 還是 have been doing？現在在做，還是做多久了',
  titleArt: ['dg20260909b1_now', 'dg20260909b1_span', 'dg20260909b1_howlong'],
  scene: '週末油漆房間 Painting day',
  sceneArt: 'dg20260909b1_call',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Tessa', voice: 'f' },
    T: { name: 'Jonah', voice: 'm' }
  },
  expr: {
    now:  { t: 'am / is / are + V-ing', cn: '這一刻正在做，不講多久', ex: 'My sister is taking a shower.', exCn: '我妹妹正在洗澡。', note: '回答「你在做什麼？」就用這個' },
    dur:  { t: 'have / has been + V-ing', cn: '從以前一直做到現在，講多久', ex: "We've been walking along the river for an hour.", exCn: '我們已經沿著河邊走了一個小時。', note: 'been 後面接 V-ing；he / she / it 用 has been' },
    long: { t: 'for · since · How long…?', cn: '看到「多久」的線索，就用 have been doing', ex: 'How long has Ivan been playing the guitar?', exCn: 'Ivan 彈吉他彈多久了？', note: 'for 接一段長度；since 接開始的那一刻' }
  },
  chapters: [
    { cn: '開場' }, { cn: '現在，還是多久？' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  cardsKick: 'Right now or how long? 現在，還是多久？',
  cards: [
    { art: 'dg20260909b1_now',     lab: 'am doing',        who: '只講這一刻' },
    { art: 'dg20260909b1_span',    lab: 'have been doing', who: '從以前做到現在' },
    { art: 'dg20260909b1_howlong', lab: '多久的線索',       who: 'for・since・how long' }
  ],
  flow: [
    { q: '只想講這一刻在做什麼？',     a: '現在進行式', en: '主詞 + am/is/are + V-ing' },
    { q: '要講從以前做到現在多久？',   a: '完成進行式', en: '主詞 + have/has been + V-ing' },
    { q: '拿不準？找 for、since、how long', a: '有就用 been', en: 'for / since / How long + have been V-ing' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: '中文說「我在油漆」，可能是正在漆，也可能已經漆很久了。英文要分成兩種說法。', vis: { type: 'title' } },

    /* ---- 1 核心：現在，還是多久？ ---- */
    { ch: 1, sp: 'N', zh: '開口前先問自己：我要講「現在在做什麼」，還是「做多久了」？', vis: { type: 'cards', show: 0 } },
    { ch: 1, sp: 'N', zh: '只講這一刻在做的事，就用 am、is、are 加 V-ing。',
      hi: [{ t: 'am、is、are 加 V-ing', k: 'now', c: 3 }], vis: { type: 'cards', show: 1, pop: true } },
    { ch: 1, sp: 'A', en: 'Shh, the baby is sleeping.', cn: '噓，寶寶在睡覺。',
      hi: [{ t: 'is sleeping', cn: '這一刻在睡', k: 'now', c: 3 }], vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'N', zh: '從以前一直做到現在，要講做了多久，就用 have been 加 V-ing。',
      hi: [{ t: 'have been 加 V-ing', k: 'dur', c: 4 }], vis: { type: 'cards', show: 2, pop: true } },
    { ch: 1, sp: 'T', en: 'She has been sleeping for three hours.', cn: '她已經睡了三個小時了。',
      hi: [{ t: 'has been sleeping', cn: '睡到現在', k: 'dur', c: 4 }], vis: { type: 'cards', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: '同一個寶寶。第一句只說她現在在睡；第二句多了時間，從三小時前睡到現在。',
      vis: { type: 'cards', show: 2 } },
    { ch: 1, sp: 'N', zh: '線索就是 for、since，還有問多久的 how long。',
      hi: [{ t: 'how long', k: 'long', c: 2 }], vis: { type: 'cards', show: 3, pop: true } },
    { ch: 1, sp: 'A', en: 'How long has your brother been living in Australia?', cn: '你哥哥住在澳洲多久了？',
      hi: [{ t: 'How long', cn: '問多久', k: 'long', c: 2 }, { t: 'has your brother been living', cn: '一直住到現在', k: 'dur', c: 4 }], vis: { type: 'cards', show: 3, lit: 2 } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: '現在進行式的句型：主詞加 am、is、are，再加動詞 ing。',
      vis: { type: 'pattern', kick: 'Present continuous 現在進行式', rows: [
        { lab: '我',     blocks: [{ t: 'I', k: 's' }, { t: 'am writing', k: 'v' }, { t: 'an email', k: 'n' }] },
        { lab: '他們',   blocks: [{ t: 'They', k: 's' }, { t: 'are playing', k: 'v' }, { t: 'outside', k: 'o' }] }
      ] } },
    { ch: 2, sp: 'N', zh: '現在完成進行式：主詞加 have been，再加動詞 ing。主詞是 he、she、it，就換成 has been。',
      hi: [{ t: 'has been', k: 'dur', c: 4 }],
      vis: { type: 'pattern', kick: 'Present perfect continuous 現在完成進行式', rows: [
        { lab: 'I · we · they', blocks: [{ t: 'We', k: 's' }, { t: 'have been cleaning', k: 'v' }, { t: 'for an hour', k: 'o' }] },
        { lab: 'he · she · it', blocks: [{ t: 'He', k: 's' }, { t: 'has been working', k: 'v' }, { t: 'since eight', k: 'o' }] }
      ], note: 'been 後面一定接 V-ing' } },
    { ch: 2, sp: 'N', zh: 'for 接一段長度，since 接開始的那一刻。',
      vis: { type: 'family', kick: 'for · since', core: 'for / since', coreCn: '一段長度・開始的那一刻', art: 'dg20260909b1_span', items: [
        { t: 'for two hours', cn: '兩個小時' }, { t: 'for a week', cn: '一個星期' },
        { t: 'since Monday', cn: '從星期一' }, { t: 'since this morning', cn: '從今天早上' }
      ] } },
    { ch: 2, sp: 'N', zh: '問多久：how long 開頭，再把 have 或 has 搬到主詞前面。',
      hi: [{ t: 'how long', k: 'long', c: 2 }],
      vis: { type: 'pattern', kick: 'How long…? 問多久', rows: [
        { lab: 'you',  blocks: [{ t: 'How long', k: 'n' }, { t: 'have', k: 'v' }, { t: 'you', k: 's' }, { t: 'been learning', k: 'v' }, { t: 'piano?', k: 'n' }] },
        { lab: 'she',  blocks: [{ t: 'How long', k: 'n' }, { t: 'has', k: 'v' }, { t: 'she', k: 's' }, { t: 'been running?', k: 'v' }] }
      ] } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: 'Tessa 打電話給 Jonah。注意聽，哪句只講現在，哪句在講多久。', vis: { type: 'scene', art: 'dg20260909b1_call' } },
    { ch: 3, sp: 'A', en: 'Hi, Jonah! What are you doing?', cn: '嗨，Jonah！你在做什麼？',
      hi: [{ t: 'What are you doing', cn: '問這一刻', k: 'now', c: 3 }], vis: { type: 'scene', art: 'dg20260909b1_ask' } },
    { ch: 3, sp: 'T', en: "I'm painting my bedroom. It's a mess in here!", cn: '我在油漆我的房間，這裡亂成一團！',
      hi: [{ t: "I'm painting", cn: '這一刻在漆', k: 'now', c: 3 }], vis: { type: 'scene', art: 'dg20260909b1_roller' } },
    { ch: 3, sp: 'N', zh: "Tessa 只問現在，Jonah 也只講這一刻，所以說 I'm painting 就好。",
      hi: [{ t: "I'm painting", k: 'now', c: 3 }], vis: { type: 'scene', art: 'dg20260909b1_wall' } },
    { ch: 3, sp: 'A', en: 'Oh no. How long have you been painting?', cn: '天啊，你漆多久了？',
      hi: [{ t: 'How long', cn: '問多久', k: 'long', c: 2 }], vis: { type: 'scene', art: 'dg20260909b1_clockq' } },
    { ch: 3, sp: 'T', en: "I've been painting since nine. My arms really hurt.", cn: '我從九點就一直在漆，手好痠。',
      hi: [{ t: "I've been painting", cn: '漆到現在', k: 'dur', c: 4 }, { t: 'since nine', cn: '從九點', k: 'long', c: 2 }], vis: { type: 'scene', art: 'dg20260909b1_since9' } },
    { ch: 3, sp: 'N', zh: '這次問的是多久。Jonah 從九點漆到現在還沒停，所以用 have been painting。',
      hi: [{ t: 'have been painting', k: 'dur', c: 4 }], vis: { type: 'scene', art: 'dg20260909b1_tired' } },
    { ch: 3, sp: 'A', en: "Do you need help? I'm walking past your building right now.", cn: '要幫忙嗎？我現在剛好走過你家那棟樓。',
      hi: [{ t: "I'm walking", cn: '這一刻在走', k: 'now', c: 3 }], vis: { type: 'scene', art: 'dg20260909b1_building' } },
    { ch: 3, sp: 'T', en: "Yes, please! I've been hoping somebody would call.", cn: '好啊，拜託！我一直希望有人打來。',
      hi: [{ t: "I've been hoping", cn: '一直在希望', k: 'dur', c: 4 }], vis: { type: 'scene', art: 'dg20260909b1_hope' } },
    { ch: 3, sp: 'N', zh: '走過樓下是這一刻，用 am walking；希望有人打來，是從剛才持續到現在，用 have been hoping。',
      hi: [{ t: 'am walking', k: 'now', c: 3 }, { t: 'have been hoping', k: 'dur', c: 4 }], vis: { type: 'scene', art: 'dg20260909b1_team' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '同一個動作，多了一段時間，形狀就跟著變。',
      vis: { type: 'vs', sm: true, kick: '這一刻 vs 做了多久',
        a: { w: 'Grandpa is fishing by the lake.', def: '爺爺正在湖邊釣魚。', cn: '只講現在 → is doing' },
        b: { w: 'Grandpa has been fishing since dawn.', def: '爺爺從天一亮就一直在釣魚。', cn: '講多久 → has been doing' } } },
    { ch: 4, sp: 'A', en: 'Grandpa is fishing by the lake.', cn: '爺爺正在湖邊釣魚。',
      hi: [{ t: 'is fishing', cn: '這一刻', k: 'now', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '這一刻 vs 做了多久',
        a: { w: 'Grandpa is fishing by the lake.', def: '爺爺正在湖邊釣魚。', cn: '只講現在 → is doing' },
        b: { w: 'Grandpa has been fishing since dawn.', def: '爺爺從天一亮就一直在釣魚。', cn: '講多久 → has been doing' } } },
    { ch: 4, sp: 'T', en: 'Grandpa has been fishing since dawn.', cn: '爺爺從天一亮就一直在釣魚。',
      hi: [{ t: 'has been fishing', cn: '釣到現在', k: 'dur', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '這一刻 vs 做了多久',
        a: { w: 'Grandpa is fishing by the lake.', def: '爺爺正在湖邊釣魚。', cn: '只講現在 → is doing' },
        b: { w: 'Grandpa has been fishing since dawn.', def: '爺爺從天一亮就一直在釣魚。', cn: '講多久 → has been doing' } } },
    { ch: 4, sp: 'N', zh: '第一句只說他現在在做什麼；第二句說他從天亮釣到現在。',
      vis: { type: 'vs', sm: true, kick: '這一刻 vs 做了多久',
        a: { w: 'Grandpa is fishing by the lake.', def: '爺爺正在湖邊釣魚。', cn: '只講現在 → is doing' },
        b: { w: 'Grandpa has been fishing since dawn.', def: '爺爺從天一亮就一直在釣魚。', cn: '講多久 → has been doing' } } },
    { ch: 4, sp: 'N', zh: '問句也一樣：問在做什麼，跟問做多久，形狀不同。',
      vis: { type: 'vs', sm: true, kick: '問現在 vs 問多久',
        a: { w: 'What is Leo baking?', def: 'Leo 在烤什麼？', cn: '問這一刻 → is doing' },
        b: { w: 'How long has Leo been baking?', def: 'Leo 烤多久了？', cn: '問多久 → has been doing' } } },
    { ch: 4, sp: 'A', en: 'What is Leo baking?', cn: 'Leo 在烤什麼？',
      hi: [{ t: 'is Leo baking', cn: '這一刻', k: 'now', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '問現在 vs 問多久',
        a: { w: 'What is Leo baking?', def: 'Leo 在烤什麼？', cn: '問這一刻 → is doing' },
        b: { w: 'How long has Leo been baking?', def: 'Leo 烤多久了？', cn: '問多久 → has been doing' } } },
    { ch: 4, sp: 'T', en: 'How long has Leo been baking?', cn: 'Leo 烤多久了？',
      hi: [{ t: 'How long', cn: '問多久', k: 'long', c: 2 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '問現在 vs 問多久',
        a: { w: 'What is Leo baking?', def: 'Leo 在烤什麼？', cn: '問這一刻 → is doing' },
        b: { w: 'How long has Leo been baking?', def: 'Leo 烤多久了？', cn: '問多久 → has been doing' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '最後是判斷流程，照順序問自己三個問題。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一問：只講這一刻在做什麼？是的話，用現在進行式。',
      hi: [{ t: '現在進行式', k: 'now', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'A', en: 'Look! The kids are building a snowman.', cn: '你看！孩子們在堆雪人。',
      hi: [{ t: 'are building', cn: '這一刻', k: 'now', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二問：要講從以前做到現在多久？是的話，用現在完成進行式。',
      hi: [{ t: '現在完成進行式', k: 'dur', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'T', en: 'Mom has been sewing costumes all afternoon.', cn: '媽媽整個下午都在縫戲服。',
      hi: [{ t: 'has been sewing', cn: '縫到現在', k: 'dur', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '還拿不準就找線索：有 for、since，或在問 how long，就用 have been 加 V-ing。',
      hi: [{ t: 'how long', k: 'long', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'A', en: "We've been driving since six, so let's stop for lunch.", cn: '我們從六點一直開到現在，停下來吃午餐吧。',
      hi: [{ t: "We've been driving", cn: '開到現在', k: 'dur', c: 4 }, { t: 'since six', cn: '線索', k: 'long', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說說看。看到中文情境，先自己用英文說出來，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：朋友傳訊息問你在幹嘛，你正在洗碗。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '朋友傳訊息問你在幹嘛，你正在洗碗。' } },
    { ch: 6, sp: 'A', en: "I'm washing the dishes.", cn: '我在洗碗。',
      hi: [{ t: "I'm washing", cn: '這一刻 → 現在進行式', k: 'now', c: 3 }],
      vis: { type: 'speak', n: 1, show: true, sit: '朋友傳訊息問你在幹嘛，你正在洗碗。', a: "I'm washing the dishes." } },
    { ch: 6, sp: 'N', zh: '情境二：你從下午一點開始讀書，到現在都還在讀。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '你從下午一點開始讀書，到現在都還在讀。' } },
    { ch: 6, sp: 'T', en: "I've been studying since one o'clock.", cn: '我從一點就一直在讀書。',
      hi: [{ t: "I've been studying", cn: '讀到現在 → 完成進行式', k: 'dur', c: 4 }],
      vis: { type: 'speak', n: 2, show: true, sit: '你從下午一點開始讀書，到現在都還在讀。', a: "I've been studying since one o'clock." } },
    { ch: 6, sp: 'N', zh: '情境三：你想問新同事，他在這裡工作多久了。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '你想問新同事，他在這裡工作多久了。' } },
    { ch: 6, sp: 'A', en: 'How long have you been working here?', cn: '你在這裡工作多久了？',
      hi: [{ t: 'How long', cn: '問多久 → have been doing', k: 'long', c: 2 }],
      vis: { type: 'speak', n: 3, show: true, sit: '你想問新同事，他在這裡工作多久了。', a: 'How long have you been working here?' } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結：只講這一刻，用 am doing；講做到現在多久，用 have been doing；for、since、how long 就是線索。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '下次說「我在做」之前，先問一句：我要講現在，還是講多久？', vis: { type: 'end' } }
  ]
};
