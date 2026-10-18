/* ============================================================
   B2 Read 文法影片解說 — dg20260902a2（Grammar in Use Unit 7，A2）
   格式與規則見 b2lab/tools/GVIDEO_SPEC.md；範本 gvideo/dg20261014b1.js。
   A2 基礎：核心圖用 cards（have／has／過去分詞），不做時態對比時間線。
   ============================================================ */
window.GVIDEO = window.GVIDEO || {};
window.GVIDEO_ART = window.GVIDEO_ART || {};

(function(){
  var D='#2b2118', A='#e8813a', C='#fdf6ec', L='#f7e3c9', R='#d9534f', B='#3b82c4', G='#3f9a62', Y='#f2c94c', S='#d6e8f8';
  var P='dg20260902a2_';
  var st='stroke="'+D+'" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"';
  var th=function(w){ return 'stroke="'+D+'" stroke-width="'+w+'" stroke-linejoin="round" stroke-linecap="round"'; };
  var svg=function(inner){ return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+inner+'</svg>'; };
  var txt=function(x,y,t,sz,col){ return '<text x="'+x+'" y="'+y+'" text-anchor="middle" font-family="Arial,sans-serif" font-weight="700" font-size="'+sz+'" fill="'+(col||D)+'">'+t+'</text>'; };
  var qb=function(cx,cy){ return '<circle cx="'+cx+'" cy="'+cy+'" r="16" fill="'+A+'" '+st+'/>'+txt(cx,cy+7,'?',20,'#fff'); };
  var chk=function(cx,cy,r){ return '<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="'+G+'" '+st+'/><path d="M'+(cx-r*0.45)+' '+cy+' l'+(r*0.32)+' '+(r*0.34)+' l'+(r*0.6)+' -'+(r*0.7)+'" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>'; };
  /* 簡單人物：頭＋身體（x＝中心，y＝頭中心） */
  var kid=function(x,y,shirt,s){ s=s||1;
    return '<path d="M'+(x-20*s)+' '+(y+58*s)+' q0 -30 '+(20*s)+' -30 q'+(20*s)+' 0 '+(20*s)+' 30 Z" fill="'+shirt+'" '+st+'/>'
      +'<circle cx="'+x+'" cy="'+y+'" r="'+(15*s)+'" fill="'+L+'" '+st+'/>'
      +'<circle cx="'+(x-5*s)+'" cy="'+(y-2*s)+'" r="2" fill="'+D+'"/><circle cx="'+(x+5*s)+'" cy="'+(y-2*s)+'" r="2" fill="'+D+'"/>'
      +'<path d="M'+(x-5*s)+' '+(y+6*s)+' q'+(5*s)+' '+(4*s)+' '+(10*s)+' 0" fill="none" '+th(2.5)+'/>'; };
  /* 帳篷 */
  var tent=function(x,y,w,h,col){ return '<path d="M'+x+' '+(y+h)+' L'+(x+w/2)+' '+y+' L'+(x+w)+' '+(y+h)+' Z" fill="'+col+'" '+st+'/>'
    +'<path d="M'+(x+w/2)+' '+y+' L'+(x+w*0.38)+' '+(y+h)+' H'+(x+w*0.62)+' Z" fill="'+D+'" opacity=".75"/>'; };
  /* 車子側面 */
  var car=function(x,y,col){ return '<path d="M'+x+' '+(y+44)+' V'+(y+24)+' Q'+x+' '+(y+16)+' '+(x+10)+' '+(y+16)+' H'+(x+36)+' L'+(x+54)+' '+y+' H'+(x+108)+' L'+(x+124)+' '+(y+16)+' H'+(x+144)+' Q'+(x+152)+' '+(y+16)+' '+(x+152)+' '+(y+26)+' V'+(y+44)+' Z" fill="'+col+'" '+st+'/>'
    +'<path d="M'+(x+44)+' '+(y+16)+' L'+(x+58)+' '+(y+5)+' H'+(x+78)+' V'+(y+16)+' Z M'+(x+86)+' '+(y+16)+' V'+(y+5)+' H'+(x+104)+' L'+(x+116)+' '+(y+16)+' Z" fill="'+S+'" '+th(2.5)+'/>'
    +'<circle cx="'+(x+34)+'" cy="'+(y+46)+'" r="12" fill="#4a4f5c" '+st+'/><circle cx="'+(x+120)+'" cy="'+(y+46)+'" r="12" fill="#4a4f5c" '+st+'/>'
    +'<circle cx="'+(x+34)+'" cy="'+(y+46)+'" r="4" fill="#c9c2b8"/><circle cx="'+(x+120)+'" cy="'+(y+46)+'" r="4" fill="#c9c2b8"/>'; };
  /* 水壺：fill＝裡面的水位（0–1） */
  var bottle=function(x,y,lv,col){ var h=60, top=y+14+(1-lv)*(h-6);
    return '<rect x="'+(x-16)+'" y="'+(y+10)+'" width="32" height="'+h+'" rx="8" fill="#fff" '+st+'/>'
      +(lv>0?'<rect x="'+(x-13)+'" y="'+top.toFixed(1)+'" width="26" height="'+(y+10+h-3-top).toFixed(1)+'" rx="5" fill="'+S+'"/>':'')
      +'<rect x="'+(x-16)+'" y="'+(y+10)+'" width="32" height="'+h+'" rx="8" fill="none" '+st+'/>'
      +'<rect x="'+(x-10)+'" y="'+y+'" width="20" height="12" rx="3" fill="'+col+'" '+st+'/>'; };

  var art={};
  /* 卡片 1：I / you / we / they → have——兩個人＋打勾 */
  art[P+'have']=svg(
    kid(70,58,B)+kid(124,62,G,0.92)
   +'<line x1="20" y1="118" x2="180" y2="118" '+th(3)+'/>'
   +chk(166,30,18)),
  /* 卡片 2：he / she / it → has——一個人＋打勾 */
  art[P+'has']=svg(
    kid(92,58,R)
   +'<line x1="30" y1="118" x2="170" y2="118" '+th(3)+'/>'
   +chk(152,34,18)),
  /* 卡片 3：過去分詞——三張單字卡 V1 V2 V3 */
  art[P+'vpp']=svg(
    '<g transform="rotate(-10 52 80)"><rect x="26" y="52" width="52" height="64" rx="6" fill="#fff" '+st+'/>'+txt(52,92,'V1',20)+'</g>'
   +'<g transform="rotate(-2 100 76)"><rect x="74" y="44" width="52" height="64" rx="6" fill="'+L+'" '+st+'/>'+txt(100,84,'V2',20)+'</g>'
   +'<g transform="rotate(8 148 80)"><rect x="122" y="48" width="52" height="64" rx="6" fill="'+Y+'" '+st+'/>'+txt(148,88,'V3',20,R)+'</g>'
   +'<path d="M134 28 l4 -10 M150 30 v-14 M166 28 l-4 -10" '+th(3)+'/>'),

  /* 情境 1（兼 sceneArt）：出發去露營——車頂載著帳篷和行李 */
  art[P+'trip']=svg(
    '<path d="M0 150 V118 Q100 108 200 118 V150 Z" fill="#9fd08a" '+th(3)+'/>'
   +'<circle cx="164" cy="30" r="14" fill="'+Y+'" '+st+'/>'
   +'<rect x="104" y="60" width="44" height="14" rx="7" fill="'+G+'" '+st+'/><path d="M116 60 V74 M136 60 V74" '+th(2)+'/>'
   +'<rect x="40" y="56" width="60" height="16" rx="4" fill="'+A+'" '+st+'/>'
   +'<line x1="44" y1="72" x2="44" y2="78" '+th(3)+'/><line x1="96" y1="72" x2="96" y2="78" '+th(3)+'/>'
   +car(20,76,Y)),
  /* 情境 2：帳篷打包了嗎？——帳篷＋問號 */
  art[P+'asktent']=svg(
    tent(22,38,124,86,A)
   +'<line x1="10" y1="124" x2="160" y2="124" '+st+'/>'
   +'<path d="M22 124 L10 136 M146 124 L158 136" '+th(2.5)+'/>'
   +qb(170,36)),
  /* 情境 3：已經放進車裡了——打開的後車廂裡有帳篷袋 */
  art[P+'trunk']=svg(
    '<path d="M30 60 L50 18 H150 L170 60 Z" fill="'+Y+'" '+st+'/>'
   +'<path d="M56 26 H144 L160 56 H40 Z" fill="'+S+'" '+th(2.5)+'/>'
   +'<rect x="24" y="60" width="152" height="62" rx="8" fill="'+Y+'" '+st+'/>'
   +'<rect x="38" y="68" width="124" height="40" rx="4" fill="#4a4f5c" '+st+'/>'
   +'<rect x="50" y="72" width="70" height="30" rx="14" fill="'+G+'" '+st+'/><path d="M64 72 V102 M106 72 V102" '+th(2.5)+'/>'
   +'<rect x="126" y="80" width="26" height="22" rx="3" fill="'+A+'" '+st+'/>'
   +'<circle cx="54" cy="128" r="10" fill="#4a4f5c" '+st+'/><circle cx="146" cy="128" r="10" fill="#4a4f5c" '+st+'/>'),
  /* 情境 4：重點是帳篷現在在車上——帳篷袋＋大勾 */
  art[P+'tentok']=svg(
    '<rect x="26" y="62" width="110" height="52" rx="24" fill="'+G+'" '+st+'/>'
   +'<path d="M48 62 V114 M114 62 V114" '+th(3)+'/>'
   +'<path d="M136 80 q14 -4 12 12" fill="none" '+th(3)+'/>'
   +'<line x1="16" y1="122" x2="150" y2="122" '+th(3)+'/>'
   +chk(156,48,26)),
  /* 情境 5：爸爸買食物了嗎？——購物袋＋問號 */
  art[P+'askfood']=svg(
    '<path d="M40 54 H130 L122 136 H48 Z" fill="#d9a066" '+st+'/>'
   +'<path d="M66 54 q0 -22 19 -22 q19 0 19 22" fill="none" '+th(4)+'/>'
   +'<path d="M54 54 l6 -16 l10 16 M110 54 l8 -20 l8 20" fill="'+G+'" '+st+'/>'
   +qb(166,38)),
  /* 情境 6：他買了熱狗和玉米——熱狗＋玉米 */
  art[P+'hotdog']=svg(
    '<g transform="rotate(-12 70 92)"><rect x="18" y="80" width="104" height="30" rx="15" fill="#e0a85a" '+st+'/>'
   +'<rect x="10" y="70" width="120" height="20" rx="10" fill="'+R+'" '+st+'/>'
   +'<path d="M26 78 q10 -8 20 0 t20 0 t20 0 t20 0" fill="none" stroke="'+Y+'" stroke-width="4" stroke-linecap="round"/></g>'
   +'<g transform="rotate(20 160 80)"><ellipse cx="160" cy="76" rx="16" ry="40" fill="'+Y+'" '+st+'/>'
   +'<path d="M152 50 V104 M160 42 V112 M168 50 V104" stroke="#d9a520" stroke-width="2"/>'
   +'<path d="M144 92 Q140 124 160 128 Q180 124 176 92 Q168 112 160 112 Q152 112 144 92 Z" fill="'+G+'" '+st+'/></g>'),
  /* 情境 7：主詞是 he，所以用 has——爸爸提著購物袋 */
  art[P+'dad']=svg(
    kid(80,40,B,1.1)
   +'<path d="M70 26 q10 -12 22 0" fill="none" '+th(3)+'/>'
   +'<line x1="40" y1="128" x2="170" y2="128" '+th(3)+'/>'
   +'<path d="M100 72 L118 92" '+th(4)+'/>'
   +'<path d="M108 92 H150 L146 128 H112 Z" fill="#d9a066" '+st+'/>'
   +'<path d="M120 92 q0 -12 9 -12 q9 0 9 12" fill="none" '+th(3)+'/>'
   +'<path d="M118 92 l4 -12 l6 12 M136 92 l6 -14 l4 14" fill="'+Y+'" '+th(2.5)+'/>'),
  /* 情境 8：水壺還沒裝——兩個空水壺 */
  art[P+'empty']=svg(
    bottle(70,40,0,B)+bottle(126,40,0,R)
   +'<line x1="30" y1="114" x2="170" y2="114" '+th(3)+'/>'
   +'<circle cx="170" cy="34" r="16" fill="'+R+'" '+st+'/>'+txt(170,42,'!',22,'#fff')),
  /* 情境 9：我已經裝好了——兩個滿的水壺＋水滴 */
  art[P+'full']=svg(
    bottle(70,40,0.95,B)+bottle(126,40,0.95,R)
   +'<line x1="30" y1="114" x2="170" y2="114" '+th(3)+'/>'
   +'<path d="M170 30 q10 14 0 22 q-10 -8 0 -22 Z" fill="'+S+'" '+th(2.5)+'/>'
   +'<path d="M30 30 q8 11 0 17 q-8 -6 0 -17 Z" fill="'+S+'" '+th(2.5)+'/>'),
  /* 情境 10：還沒做 yet、已經做 already——檢查清單 */
  art[P+'list']=svg(
    '<rect x="44" y="20" width="112" height="120" rx="8" fill="#d9a066" '+st+'/>'
   +'<rect x="56" y="34" width="88" height="98" rx="3" fill="#fff" '+th(2.5)+'/>'
   +'<rect x="80" y="12" width="40" height="18" rx="4" fill="#c9c2b8" '+st+'/>'
   +'<g '+th(2.5)+' fill="#fff"><rect x="64" y="46" width="14" height="14" rx="2"/><rect x="64" y="72" width="14" height="14" rx="2"/><rect x="64" y="98" width="14" height="14" rx="2"/></g>'
   +'<path d="M66 52 l4 5 l9 -11 M66 78 l4 5 l9 -11 M66 104 l4 5 l9 -11" fill="none" stroke="'+G+'" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>'
   +'<g stroke="#b9b2a8" stroke-width="3" stroke-linecap="round"><line x1="86" y1="53" x2="134" y2="53"/><line x1="86" y1="79" x2="128" y2="79"/><line x1="86" y1="105" x2="132" y2="105"/></g>')
  ;
  Object.assign(window.GVIDEO_ART, art);
})();

/* ============================================================
   dg20260902a2 — I Have Done It!
   Grammar in Use Unit 7（Present perfect 1：have/has + 過去分詞，already／yet）
   ============================================================ */
window.GVIDEO.dg20260902a2 = {
  kind: 'gram',
  date: '2026-09-02',
  title: 'I Have Done It!',
  titleCn: '現在完成式入門：have / has ＋過去分詞',
  titleArt: ['dg20260902a2_have', 'dg20260902a2_has', 'dg20260902a2_vpp'],
  scene: '露營出發前 Before the camping trip',
  sceneArt: 'dg20260902a2_trip',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Hannah', voice: 'f' },
    T: { name: 'Danny', voice: 'm' }
  },
  expr: {
    have: { t: 'I / you / we / they + have + Vpp', cn: '已經做完了，主詞用 have', ex: 'We have painted the gate.', exCn: '我們已經把大門漆好了。', note: '否定 haven\'t；問句 Have you…?' },
    has:  { t: 'he / she / it + has + Vpp', cn: '主詞是一個人或一個東西，用 has', ex: 'The baby has fallen asleep.', exCn: '小寶寶已經睡著了。', note: '否定 hasn\'t；問句 Has she…?' },
    vpp:  { t: '過去分詞 Vpp', cn: '動詞的第三態，要另外記', ex: 'I have taken my medicine.', exCn: '我已經吃過藥了。', note: 'eat-ate-eaten、go-went-gone、buy-bought-bought' }
  },
  chapters: [
    { cn: '開場' }, { cn: '已經做完了' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  cardsKick: 'Done now! 現在已經做完了',
  cards: [
    { art: 'dg20260902a2_have', lab: 'have+Vpp', who: 'I/you/we/they' },
    { art: 'dg20260902a2_has',  lab: 'has+Vpp',  who: 'he/she/it' },
    { art: 'dg20260902a2_vpp',  lab: '過去分詞', who: 'eat→eaten' }
  ],
  flow: [
    { q: '已經做完，而且不說時間？', a: '完成式', en: '主詞 + have/has + Vpp' },
    { q: '主詞是 he／she／it 嗎？', a: '用 has', en: 'he / she / it + has + Vpp' },
    { q: '還沒做？',               a: '加 yet', en: "haven't / hasn't + Vpp + yet" }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: '「我已經做好了」、「我還沒做」，英文常用現在完成式。這支影片從最基本的地方，一步一步教你。', vis: { type: 'title' } },

    /* ---- 1 核心：已經做完了 ---- */
    { ch: 1, sp: 'N', zh: '現在完成式講的是：事情已經做完了。重點是現在的結果，不是什麼時候做的。', vis: { type: 'cards', show: 0 } },
    { ch: 1, sp: 'N', zh: '主詞是 I、you、we、they，就用 have，後面再加過去分詞。',
      hi: [{ t: '用 have', k: 'have', c: 3 }], vis: { type: 'cards', show: 1, pop: true } },
    { ch: 1, sp: 'A', en: 'I have watered the plants.', cn: '我已經澆過花了。',
      hi: [{ t: 'have watered', cn: '已經澆了', k: 'have', c: 3 }], vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'N', zh: '主詞是 he、she、it，或是一個人、一個東西，就換成 has。',
      hi: [{ t: '換成 has', k: 'has', c: 4 }], vis: { type: 'cards', show: 2, pop: true } },
    { ch: 1, sp: 'T', en: 'My sister has made breakfast.', cn: '我姊姊已經做好早餐了。',
      hi: [{ t: 'has made', cn: '已經做好', k: 'has', c: 4 }], vis: { type: 'cards', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: '後面的過去分詞要另外記。有些跟過去式一樣，有些不一樣，像 write 變 written。',
      hi: [{ t: '過去分詞', k: 'vpp', c: 2 }], vis: { type: 'cards', show: 3, pop: true } },
    { ch: 1, sp: 'A', en: 'Mom has written a shopping list.', cn: '媽媽已經寫好購物清單了。',
      hi: [{ t: 'written', cn: '過去分詞', k: 'vpp', c: 2 }], vis: { type: 'cards', show: 3, lit: 2 } },
    { ch: 1, sp: 'N', zh: '所以組合就是：主詞，加 have 或 has，再加過去分詞。', vis: { type: 'cards', show: 3 } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: '肯定句：主詞加 have 或 has，再加過去分詞。have 和 has 只看主詞。',
      hi: [{ t: 'have 或 has', k: 'have', c: 3 }],
      vis: { type: 'pattern', kick: '肯定句 Positive', rows: [
        { lab: 'we',  blocks: [{ t: 'We', k: 's' }, { t: 'have washed', k: 'v' }, { t: 'the car', k: 'n' }] },
        { lab: 'Tom', blocks: [{ t: 'Tom', k: 's' }, { t: 'has taken', k: 'v' }, { t: 'a shower', k: 'n' }] }
      ], note: 'I / you / we / they → have；he / she / it → has' } },
    { ch: 2, sp: 'N', zh: '還沒做，就用 haven\'t 或 hasn\'t，句尾加 yet。',
      hi: [{ t: 'yet', k: 'have', c: 1 }],
      vis: { type: 'pattern', kick: "否定句 haven't … yet", rows: [
        { lab: 'I',   blocks: [{ t: 'I', k: 's' }, { t: "haven't read", k: 'v' }, { t: 'the email', k: 'n' }, { t: 'yet', k: 'o', add: true }] },
        { lab: 'she', blocks: [{ t: 'She', k: 's' }, { t: "hasn't called", k: 'v' }, { t: 'yet', k: 'o', add: true }] }
      ], note: 'yet 放在句尾' } },
    { ch: 2, sp: 'N', zh: '問句很簡單：把 Have 或 Has 移到最前面，句尾可以加 yet。',
      vis: { type: 'pattern', kick: '問句 Questions', rows: [
        { lab: 'you',   blocks: [{ t: 'Have', k: 'v' }, { t: 'you', k: 's' }, { t: 'seen', k: 'v' }, { t: 'my keys', k: 'n' }] },
        { lab: 'Kevin', blocks: [{ t: 'Has', k: 'v' }, { t: 'Kevin', k: 's' }, { t: 'arrived', k: 'v' }, { t: 'yet', k: 'o' }] }
      ] } },
    { ch: 2, sp: 'N', zh: '這幾個常用的過去分詞，一起記起來。',
      vis: { type: 'family', kick: '常用過去分詞', core: 'have / has + Vpp', coreCn: '第三態要另外記', art: 'dg20260902a2_vpp', items: [
        { t: 'eat · ate · eaten', cn: '吃' }, { t: 'go · went · gone', cn: '去' }, { t: 'see · saw · seen', cn: '看見' }, { t: 'buy · bought · bought', cn: '買' }
      ] } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: '來聽 Hannah 和 Danny 出發去露營前，怎麼確認東西準備好了沒。', vis: { type: 'scene', art: 'dg20260902a2_trip' } },
    { ch: 3, sp: 'A', en: 'Have you packed the tent?', cn: '你帳篷打包了嗎？',
      hi: [{ t: 'Have you packed', cn: '問做好了沒', k: 'have', c: 3 }], vis: { type: 'scene', art: 'dg20260902a2_asktent' } },
    { ch: 3, sp: 'T', en: "Yes, I've put it in the car.", cn: '有，我已經放進車裡了。',
      hi: [{ t: "I've put", cn: '已經放好', k: 'have', c: 3 }], vis: { type: 'scene', art: 'dg20260902a2_trunk' } },
    { ch: 3, sp: 'N', zh: 'Danny 沒說是幾點放的。他要講的是：帳篷現在已經在車上了，不用再找。',
      vis: { type: 'scene', art: 'dg20260902a2_tentok' } },
    { ch: 3, sp: 'A', en: 'Great. Has Dad bought the food?', cn: '太好了。爸爸買食物了嗎？',
      hi: [{ t: 'Has Dad bought', cn: '問爸爸買了沒', k: 'has', c: 4 }], vis: { type: 'scene', art: 'dg20260902a2_askfood' } },
    { ch: 3, sp: 'T', en: 'Yes. He has bought hot dogs and corn.', cn: '買了，他買了熱狗和玉米。',
      hi: [{ t: 'He has bought', cn: '已經買好', k: 'has', c: 4 }], vis: { type: 'scene', art: 'dg20260902a2_hotdog' } },
    { ch: 3, sp: 'N', zh: '主詞是 he，所以用 has。buy 的過去分詞是 bought。',
      hi: [{ t: 'bought', k: 'vpp', c: 2 }], vis: { type: 'scene', art: 'dg20260902a2_dad' } },
    { ch: 3, sp: 'A', en: "Oh no! I haven't filled the water bottles yet.", cn: '糟糕！我還沒把水壺裝滿。',
      hi: [{ t: "haven't filled", cn: '還沒做', k: 'have', c: 3 }], vis: { type: 'scene', art: 'dg20260902a2_empty' } },
    { ch: 3, sp: 'T', en: "Don't worry. I've already filled them.", cn: '別擔心，我已經裝好了。',
      hi: [{ t: "I've already filled", cn: '已經做好', k: 'have', c: 3 }], vis: { type: 'scene', art: 'dg20260902a2_full' } },
    { ch: 3, sp: 'N', zh: '還沒做，用 haven\'t 加 yet；已經做了，用 already，放在 have 和過去分詞中間。',
      vis: { type: 'scene', art: 'dg20260902a2_list' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '先看一組。有沒有說出時間，用的形狀就不一樣。',
      vis: { type: 'vs', sm: true, kick: '不說時間 vs 說出時間',
        a: { w: "I've called Grandma.", def: '我已經打電話給奶奶了。', cn: '不說時間 → have + Vpp' },
        b: { w: 'I called Grandma yesterday.', def: '我昨天打電話給奶奶。', cn: '說出 yesterday → 過去式' } } },
    { ch: 4, sp: 'A', en: "I've called Grandma.", cn: '我已經打電話給奶奶了。',
      hi: [{ t: "I've called", cn: '已經打了', k: 'have', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '不說時間 vs 說出時間',
        a: { w: "I've called Grandma.", def: '我已經打電話給奶奶了。', cn: '不說時間 → have + Vpp' },
        b: { w: 'I called Grandma yesterday.', def: '我昨天打電話給奶奶。', cn: '說出 yesterday → 過去式' } } },
    { ch: 4, sp: 'T', en: 'I called Grandma yesterday.', cn: '我昨天打電話給奶奶。',
      hi: [{ t: 'called', cn: '過去式', k: 'vpp', c: 1 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '不說時間 vs 說出時間',
        a: { w: "I've called Grandma.", def: '我已經打電話給奶奶了。', cn: '不說時間 → have + Vpp' },
        b: { w: 'I called Grandma yesterday.', def: '我昨天打電話給奶奶。', cn: '說出 yesterday → 過去式' } } },
    { ch: 4, sp: 'N', zh: '第一句重點是現在：電話打過了。第二句說出 yesterday，就要用過去式 called。',
      vis: { type: 'vs', sm: true, kick: '不說時間 vs 說出時間',
        a: { w: "I've called Grandma.", def: '我已經打電話給奶奶了。', cn: '不說時間 → have + Vpp' },
        b: { w: 'I called Grandma yesterday.', def: '我昨天打電話給奶奶。', cn: '說出 yesterday → 過去式' } } },
    { ch: 4, sp: 'N', zh: '再看一組。只要換主詞，have 和 has 就跟著換，過去分詞不變。',
      vis: { type: 'vs', sm: true, kick: 'have 還是 has',
        a: { w: 'We have finished the puzzle.', def: '我們已經拼完拼圖了。', cn: '主詞 we → have' },
        b: { w: 'Leo has finished the puzzle.', def: 'Leo 已經拼完拼圖了。', cn: '主詞 Leo → has' } } },
    { ch: 4, sp: 'A', en: 'We have finished the puzzle.', cn: '我們已經拼完拼圖了。',
      hi: [{ t: 'have finished', cn: 'we 用 have', k: 'have', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: 'have 還是 has',
        a: { w: 'We have finished the puzzle.', def: '我們已經拼完拼圖了。', cn: '主詞 we → have' },
        b: { w: 'Leo has finished the puzzle.', def: 'Leo 已經拼完拼圖了。', cn: '主詞 Leo → has' } } },
    { ch: 4, sp: 'T', en: 'Leo has finished the puzzle.', cn: 'Leo 已經拼完拼圖了。',
      hi: [{ t: 'has finished', cn: '一個人用 has', k: 'has', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: 'have 還是 has',
        a: { w: 'We have finished the puzzle.', def: '我們已經拼完拼圖了。', cn: '主詞 we → have' },
        b: { w: 'Leo has finished the puzzle.', def: 'Leo 已經拼完拼圖了。', cn: '主詞 Leo → has' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '最後給你一個判斷流程。想說已經做了、還沒做的事，照順序問自己。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一問：事情已經做完，而且不說時間嗎？是的話，用現在完成式。',
      hi: [{ t: '現在完成式', k: 'have', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'A', en: 'I have done the laundry.', cn: '我已經洗好衣服了。',
      hi: [{ t: 'have done', cn: '做完了', k: 'have', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二問：主詞是 he、she、it 嗎？是的話，用 has。',
      hi: [{ t: '用 has', k: 'has', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'T', en: 'The train has left.', cn: '火車已經開走了。',
      hi: [{ t: 'has left', cn: '一個東西用 has', k: 'has', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '第三問：還沒做嗎？用 haven\'t 或 hasn\'t，句尾加 yet。',
      hi: [{ t: 'yet', k: 'have', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'A', en: "We haven't had lunch yet.", cn: '我們還沒吃午餐。',
      hi: [{ t: "haven't had", cn: '還沒做', k: 'have', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說說看。看到中文情境，先自己用英文說出來，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：朋友約你去看一部電影，可是你已經看過了。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '朋友約你去看一部電影，可是你已經看過了。' } },
    { ch: 6, sp: 'A', en: "Sorry, I've already seen it.", cn: '抱歉，我已經看過了。',
      hi: [{ t: "I've already seen", cn: '已經做了 → have + Vpp', k: 'have', c: 3 }],
      vis: { type: 'speak', n: 1, show: true, sit: '朋友約你去看一部電影，可是你已經看過了。', a: "Sorry, I've already seen it." } },
    { ch: 6, sp: 'N', zh: '情境二：有人找你哥哥，你說，他已經出門了。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '有人找你哥哥，你說，他已經出門了。' } },
    { ch: 6, sp: 'T', en: 'He has gone out.', cn: '他已經出門了。',
      hi: [{ t: 'has gone', cn: 'he → has', k: 'has', c: 4 }],
      vis: { type: 'speak', n: 2, show: true, sit: '有人找你哥哥，你說，他已經出門了。', a: 'He has gone out.' } },
    { ch: 6, sp: 'N', zh: '情境三：你想問弟弟，他餵狗了沒？用 yet 問問看。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '你想問弟弟，他餵狗了沒？用 yet 問問看。' } },
    { ch: 6, sp: 'A', en: 'Have you fed the dog yet?', cn: '你餵狗了嗎？',
      hi: [{ t: 'Have you fed', cn: '問句 → Have 放前面', k: 'have', c: 3 }],
      vis: { type: 'speak', n: 3, show: true, sit: '你想問弟弟，他餵狗了沒？用 yet 問問看。', a: 'Have you fed the dog yet?' } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結：已經做完用 have 或 has 加過去分詞；he、she、it 用 has；還沒做就加 yet。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '下次想說「我已經做好了」，記得用 have 加過去分詞。', vis: { type: 'end' } }
  ]
};
