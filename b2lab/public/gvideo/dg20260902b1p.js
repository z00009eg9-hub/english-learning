/* ============================================================
   B2 Read 文法影片解說 — dg20260902b1p（Unit 7，B1+）
   格式與規則見 b2lab/tools/GVIDEO_SPEC.md；範本 gvideo/dg20261014b1.js。
   核心圖用 cards：還沒過完的時間／已經結束的時間／for・since。
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
  /* 一週七格：done＝前幾格打勾，其餘空著 */
  var week=function(y,done,fill){
    var g='';
    for(var i=0;i<7;i++){ var x=16+i*25;
      g+='<rect x="'+x+'" y="'+y+'" width="20" height="26" rx="4" fill="'+(i<done?fill:'#fff')+'" '+(i<done?st:th(2.5)+' stroke-dasharray="4 4"')+'/>'; }
    return g; };
  var tom=function(cx,cy,r){ return '<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="'+R+'" '+th(2.5)+'/><path d="M'+(cx-r*0.5)+' '+(cy-r*0.8)+' l'+(r*0.5)+' '+(r*0.3)+' l'+(r*0.5)+' -'+(r*0.3)+'" fill="'+G+'" '+th(2)+'/>'; };

  Object.assign(window.GVIDEO_ART, {
    /* 還沒過完：一週七格，前四格打勾，後面空著，箭頭指今天 */
    dg20260902b1p_thisweek: svg(
      week(70,4,'#cfe9d6')
     +'<path d="M22 84 l3 4 l7 -9 M47 84 l3 4 l7 -9 M72 84 l3 4 l7 -9 M97 84 l3 4 l7 -9" fill="none" stroke="'+G+'" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>'
     +'<path d="M101 34 V60 M93 52 L101 62 L109 52" fill="none" '+th(4)+'/>'
     +'<circle cx="101" cy="26" r="9" fill="'+Y+'" '+st+'/>'
     +'<path d="M128 116 H184 M176 108 L186 116 L176 124" fill="none" stroke="'+A+'" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>'),
    /* 已經結束：一整週塗滿、外框鎖起來 */
    dg20260902b1p_lastweek: svg(
      '<rect x="8" y="58" width="184" height="50" rx="8" fill="'+C+'" '+st+'/>'
     +week(70,7,'#c9c2b8')
     +'<rect x="84" y="20" width="32" height="26" rx="4" fill="'+Y+'" '+st+'/>'
     +'<path d="M90 20 V12 a10 10 0 0 1 20 0 V20" fill="none" '+th(4)+'/>'
     +'<circle cx="100" cy="32" r="3" fill="'+D+'"/><line x1="100" y1="34" x2="100" y2="40" '+th(3)+'/>'
     +txt(100,134,'DONE',16,'#8a8178')),
    /* for / since：起點的旗子＋一路到現在的箭頭＋量長度的括號 */
    dg20260902b1p_since: svg(
      '<line x1="34" y1="22" x2="34" y2="90" '+th(4)+'/><path d="M34 24 H64 L56 34 L64 44 H34 Z" fill="'+G+'" '+st+'/>'
     +'<path d="M34 90 H176 M166 80 L178 90 L166 100" fill="none" stroke="'+B+'" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>'
     +'<circle cx="34" cy="90" r="6" fill="'+G+'" '+th(2.5)+'/>'
     +'<path d="M34 112 V122 H170 V112" fill="none" stroke="'+A+'" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>'
     +'<circle cx="170" cy="56" r="14" fill="#fff" '+st+'/><path d="M170 56 V47 M170 56 L177 60" fill="none" '+th(3)+'/>'),

    /* 情境 1：社區菜園——菜圃、木牌、澆水壺 */
    dg20260902b1p_garden: svg(
      '<rect x="10" y="98" width="180" height="38" rx="4" fill="#9b6b43" '+st+'/>'
     +'<g fill="'+G+'" '+th(2.5)+'><path d="M40 98 q-10 -24 0 -34 q10 10 0 34 Z"/><path d="M40 98 q14 -18 26 -16 q-6 14 -26 16 Z"/>'
     +'<path d="M96 98 q-10 -24 0 -34 q10 10 0 34 Z"/><path d="M96 98 q14 -18 26 -16 q-6 14 -26 16 Z"/></g>'
     +tom(60,84,7)+tom(116,84,7)
     +'<line x1="160" y1="98" x2="160" y2="62" '+th(4)+'/><rect x="142" y="44" width="36" height="22" rx="3" fill="'+L+'" '+st+'/>'
     +'<path d="M146 56 h28" '+th(2)+'/>'
     +'<path d="M14 66 H40 V88 H14 Z" fill="'+B+'" '+st+'/><path d="M40 70 L58 56" '+th(4)+'/><path d="M18 66 a9 9 0 0 1 18 0" fill="none" '+th(3)+'/>'),
    /* 情境 2：這星期摘了十二顆——滿滿一籃番茄 */
    dg20260902b1p_basket: svg(
      '<path d="M52 82 a48 56 0 0 1 96 0" fill="none" '+th(5)+'/>'
     +'<g transform="translate(0 -8)">'+tom(70,74,12)+tom(94,68,12)+tom(118,72,12)+tom(82,84,12)+tom(108,84,12)+tom(132,80,11)+'</g>'
     +'<path d="M36 82 H164 L150 132 H50 Z" fill="#d9a066" '+st+'/>'
     +'<path d="M44 100 H156 M48 116 H152" fill="none" stroke="#b9874d" stroke-width="3"/>'
     +'<path d="M36 82 H164 L150 132 H50 Z" fill="none" '+st+'/>'),
    /* 情境 3：上星期只摘了五顆——小盤子上五顆番茄 */
    dg20260902b1p_five: svg(
      '<ellipse cx="100" cy="112" rx="70" ry="16" fill="#fff" '+st+'/>'
     +tom(60,98,11)+tom(80,102,11)+tom(100,98,11)+tom(120,102,11)+tom(140,98,11)
     +txt(100,52,'5',36,R)),
    /* 情境 4：這星期還會增加——計數板上的正字記號，還有空位 */
    dg20260902b1p_tally: svg(
      '<rect x="24" y="26" width="152" height="100" rx="8" fill="#3d5a47" '+st+'/>'
     +'<rect x="16" y="120" width="168" height="10" rx="3" fill="#9b6b43" '+st+'/>'
     +'<g stroke="#fff" stroke-width="4" stroke-linecap="round"><path d="M44 50 V90 M54 50 V90 M64 50 V90 M74 50 V90 M38 84 L80 56"/>'
     +'<path d="M98 50 V90 M108 50 V90 M118 50 V90 M128 50 V90 M92 84 L134 56"/><path d="M150 50 V90 M160 50 V90"/></g>'
     +'<path d="M166 100 l8 -8" stroke="'+Y+'" stroke-width="5" stroke-linecap="round"/>'),
    /* 情境 5：這塊地用多久了？——圍起來的小菜圃＋問號 */
    dg20260902b1p_plot: svg(
      '<path d="M20 120 L60 70 H160 L182 120 Z" fill="#9b6b43" '+st+'/>'
     +'<path d="M50 104 H164 M66 88 H158" fill="none" stroke="#7a5233" stroke-width="3"/>'
     +'<g fill="'+G+'" '+th(2)+'><circle cx="70" cy="102" r="5"/><circle cx="100" cy="102" r="5"/><circle cx="130" cy="102" r="5"/><circle cx="84" cy="86" r="4"/><circle cx="112" cy="86" r="4"/><circle cx="140" cy="86" r="4"/></g>'
     +'<g '+th(3)+'><line x1="20" y1="120" x2="20" y2="100"/><line x1="60" y1="70" x2="60" y2="52"/><line x1="182" y1="120" x2="182" y2="100"/></g>'
     +qb(40,40)),
    /* 情境 6：搬來之後就有了——房子＋搬家紙箱 */
    dg20260902b1p_house: svg(
      '<line x1="10" y1="132" x2="190" y2="132" '+st+'/>'
     +'<rect x="30" y="70" width="80" height="62" fill="'+L+'" '+st+'/><path d="M22 74 L70 34 L118 74 Z" fill="'+R+'" '+st+'/>'
     +'<rect x="60" y="98" width="20" height="34" fill="#9b6b43" '+st+'/><rect x="38" y="82" width="16" height="14" fill="'+S+'" '+th(2.5)+'/><rect x="86" y="82" width="16" height="14" fill="'+S+'" '+th(2.5)+'/>'
     +'<rect x="124" y="100" width="40" height="32" fill="#d9a066" '+st+'/><path d="M124 108 H164 M144 100 V108" fill="none" '+th(2.5)+'/>'
     +'<rect x="132" y="74" width="30" height="26" fill="#e0b47a" '+st+'/><path d="M132 82 H162 M147 74 V82" fill="none" '+th(2.5)+'/>'),
    /* 情境 7：since 接起點——小芽一路長成大株 */
    dg20260902b1p_grow: svg(
      '<line x1="12" y1="126" x2="188" y2="126" '+st+'/>'
     +'<path d="M36 126 V112" '+th(3)+'/><path d="M36 114 q-10 -6 -12 -14 q10 0 12 14 Z M36 114 q10 -6 12 -14 q-10 0 -12 14 Z" fill="'+G+'" '+th(2.5)+'/>'
     +'<path d="M96 126 V86" '+th(3)+'/><path d="M96 104 q-16 -6 -18 -20 q14 2 18 20 Z M96 94 q16 -6 18 -20 q-14 2 -18 20 Z" fill="'+G+'" '+th(2.5)+'/>'
     +'<path d="M160 126 V44" '+th(3.5)+'/><path d="M160 96 q-22 -6 -26 -24 q20 2 26 24 Z M160 80 q22 -6 26 -24 q-20 2 -26 24 Z M160 60 q-16 -8 -16 -22 q14 6 16 22 Z" fill="'+G+'" '+th(2.5)+'/>'
     +tom(146,104,8)+tom(176,90,8)
     +'<path d="M50 140 H140 M132 134 L142 140 L132 146" fill="none" stroke="'+B+'" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>'),
    /* 情境 8：舊圍籬換新了——亮晶晶的新木柵欄 */
    dg20260902b1p_fence: svg(
      '<line x1="8" y1="128" x2="192" y2="128" '+st+'/>'
     +'<g fill="#e9c58f" '+st+'><path d="M24 128 V54 L36 42 L48 54 V128 Z"/><path d="M64 128 V54 L76 42 L88 54 V128 Z"/><path d="M104 128 V54 L116 42 L128 54 V128 Z"/><path d="M144 128 V54 L156 42 L168 54 V128 Z"/></g>'
     +'<rect x="14" y="70" width="166" height="12" rx="2" fill="#d9a066" '+st+'/><rect x="14" y="104" width="166" height="12" rx="2" fill="#d9a066" '+st+'/>'
     +'<path d="M182 24 l3 8 l8 3 l-8 3 l-3 8 l-3 -8 l-8 -3 l8 -3 Z" fill="'+Y+'" '+th(2)+'/>'
     +'<path d="M12 30 l2 5 l5 2 l-5 2 l-2 5 l-2 -5 l-5 -2 l5 -2 Z" fill="'+Y+'" '+th(2)+'/>'),
    /* 情境 9：工人裝好的——工具箱＋鐵鎚 */
    dg20260902b1p_tools: svg(
      '<rect x="30" y="76" width="120" height="54" rx="6" fill="'+R+'" '+st+'/>'
     +'<path d="M70 76 V62 a6 6 0 0 1 6 -6 H104 a6 6 0 0 1 6 6 V76" fill="none" '+th(5)+'/>'
     +'<rect x="30" y="94" width="120" height="8" fill="#b8423f" '+th(2.5)+'/><rect x="82" y="90" width="16" height="14" rx="2" fill="'+Y+'" '+th(2.5)+'/>'
     +'<g transform="rotate(30 160 70)"><rect x="156" y="52" width="9" height="66" rx="3" fill="#d9a066" '+st+'/><rect x="140" y="38" width="40" height="18" rx="3" fill="#9aa5b1" '+st+'/></g>'),
    /* 情境 10：說到星期二——月曆圈起 TUE */
    dg20260902b1p_tue: svg(
      cal(44,30,112,104)
     +'<rect x="70" y="66" width="60" height="40" rx="6" fill="#fff" '+st+'/>'
     +txt(100,93,'TUE',20,R)
     +'<ellipse cx="100" cy="86" rx="40" ry="28" fill="none" stroke="'+A+'" stroke-width="4"/>')
  });
})();

/* ============================================================
   dg20260902b1p — This Week or Last Week?
   Grammar in Use Unit 7（Present perfect）＋ 還沒結束的時間、for / since、完成式被動
   ============================================================ */
window.GVIDEO.dg20260902b1p = {
  kind: 'gram',
  date: '2026-09-02',
  title: 'This Week or Last Week?',
  titleCn: '現在完成式進階：時間過完了沒？還有 for 和 since',
  titleArt: ['dg20260902b1p_thisweek', 'dg20260902b1p_lastweek', 'dg20260902b1p_since'],
  scene: '社區菜園 Community garden',
  sceneArt: 'dg20260902b1p_garden',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Ivy', voice: 'f' },
    T: { name: 'Noah', voice: 'm' }
  },
  expr: {
    unf: { t: 'this week / today + have done', cn: '時間還沒過完 → 現在完成式', ex: "I've written two postcards today.", exCn: '我今天寫了兩張明信片。', note: 'today、this week、this month、so far 都還沒結束' },
    fin: { t: 'last week / yesterday + did', cn: '時間已經結束 → 過去簡單式', ex: 'We painted the kitchen last weekend.', exCn: '我們上週末把廚房漆好了。', note: '同一個 week，this 配完成式，last 配過去式' },
    fs:  { t: 'for + 長度／since + 起點', cn: '一路持續到現在 → 現在完成式', ex: 'She has played the cello for eight years.', exCn: '她拉大提琴拉了八年。', note: 'for eight years、since she was ten；since 也能接過去式的句子' }
  },
  chapters: [
    { cn: '開場' }, { cn: '時間過完了沒？' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  cardsKick: 'Is the time over? 時間過完了沒？',
  cards: [
    { art: 'dg20260902b1p_thisweek', lab: '還沒過完', who: 'this week・today' },
    { art: 'dg20260902b1p_lastweek', lab: '已經結束', who: 'last week・ago' },
    { art: 'dg20260902b1p_since',    lab: '持續到現在', who: 'for・since' }
  ],
  flow: [
    { q: '時間還沒過完？像 today', a: '現在完成式', en: 'have / has + p.p. + this week' },
    { q: '時間已經結束？像 yesterday', a: '過去簡單式', en: '主詞 + 過去式 + last week' },
    { q: '持續到現在？說多久或從何時', a: 'for／since', en: 'have / has + p.p. + for／since' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: '這星期、上星期，只差一個字，英文的時態就整個換掉。這支影片教你先看時間過完了沒。', vis: { type: 'title' } },

    /* ---- 1 核心：時間過完了沒？ ---- */
    { ch: 1, sp: 'N', zh: '講做過的事，先看句子裡的時間詞，問自己：這段時間過完了沒？', vis: { type: 'cards', show: 0 } },
    { ch: 1, sp: 'N', zh: '如果這段時間還沒過完，像今天、這星期、這個月，就用現在完成式。',
      hi: [{ t: '現在完成式', k: 'unf', c: 3 }], vis: { type: 'cards', show: 1, pop: true } },
    { ch: 1, sp: 'A', en: "I've baked four loaves of bread this week.", cn: '我這星期烤了四條吐司。',
      hi: [{ t: "I've baked", cn: '完成式', k: 'unf', c: 3 }, { t: 'this week', cn: '還沒過完', k: 'unf', c: 3 }], vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'N', zh: '如果這段時間已經結束，像昨天、上星期，數字就定了，用過去簡單式。',
      hi: [{ t: '過去簡單式', k: 'fin', c: 4 }], vis: { type: 'cards', show: 2, pop: true } },
    { ch: 1, sp: 'T', en: 'I baked only one loaf last week.', cn: '我上星期只烤了一條。',
      hi: [{ t: 'baked', cn: '過去式', k: 'fin', c: 4 }, { t: 'last week', cn: '已經結束', k: 'fin', c: 4 }], vis: { type: 'cards', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: '同樣是 week，前面放 this 還是 last，動詞就跟著換。',
      vis: { type: 'cards', show: 2 } },
    { ch: 1, sp: 'N', zh: '如果一件事從以前持續到現在，就用完成式，再用 for 說多久，或用 since 說從什麼時候開始。',
      hi: [{ t: 'for', k: 'fs', c: 2 }, { t: 'since', k: 'fs', c: 2 }], vis: { type: 'cards', show: 3, pop: true } },
    { ch: 1, sp: 'A', en: 'My uncle has driven a taxi for twenty years.', cn: '我叔叔開計程車開了二十年。',
      hi: [{ t: 'for twenty years', cn: '多久', k: 'fs', c: 2 }], vis: { type: 'cards', show: 3, lit: 2 } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: '還沒過完的時間：主詞加 have 或 has，再加過去分詞，時間詞放後面。',
      hi: [{ t: '還沒過完', k: 'unf', c: 3 }],
      vis: { type: 'pattern', kick: 'Unfinished time 還沒過完', rows: [
        { lab: '今天', blocks: [{ t: 'I', k: 's' }, { t: 'have answered', k: 'v' }, { t: 'thirty emails', k: 'n' }, { t: 'today', k: 'o' }] },
        { lab: '這個月', blocks: [{ t: 'She', k: 's' }, { t: 'has visited', k: 'v' }, { t: 'the dentist', k: 'n' }, { t: 'twice this month', k: 'o' }] }
      ], note: '時間還沒結束，數字還可能增加' } },
    { ch: 2, sp: 'N', zh: 'for 跟 since 都跟完成式一起用。for 後面接一段長度，since 後面接一個起點。',
      hi: [{ t: 'for', k: 'fs', c: 2 }, { t: 'since', k: 'fs', c: 2 }],
      vis: { type: 'pattern', kick: 'for 長度・since 起點', rows: [
        { lab: 'for + 長度', blocks: [{ t: 'We', k: 's' }, { t: 'have known', k: 'v' }, { t: 'each other', k: 'n' }, { t: 'for ten years', k: 'o', add: true }] },
        { lab: 'since + 起點', blocks: [{ t: 'We', k: 's' }, { t: 'have known', k: 'v' }, { t: 'each other', k: 'n' }, { t: 'since high school', k: 'o', add: true }] }
      ], note: 'since 也能接句子：since I moved here' } },
    { ch: 2, sp: 'N', zh: 'have 後面一定接過去分詞。很多過去分詞要另外記，像 go 變 gone，write 變 written。',
      vis: { type: 'family', kick: 'Past participles 過去分詞', core: 'have / has +', coreCn: '後面接過去分詞', art: 'dg20260902b1p_since', items: [
        { t: 'go → gone', cn: '去' }, { t: 'write → written', cn: '寫' }, { t: 'do → done', cn: '做' }, { t: 'eat → eaten', cn: '吃' }
      ] } },
    { ch: 2, sp: 'N', zh: '如果主詞是被做的那一方，就用被動：have 或 has 加 been，再加過去分詞。',
      vis: { type: 'pattern', kick: 'Passive 完成式被動', rows: [
        { lab: '主動', blocks: [{ t: 'Someone', k: 's' }, { t: 'has fixed', k: 'v' }, { t: 'the gate', k: 'n' }] },
        { lab: '被動', blocks: [{ t: 'The gate', k: 's' }, { t: 'has been', k: 'x', add: true }, { t: 'fixed', k: 'v' }] }
      ], note: '重點是結果，不是誰做的' } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: '來聽 Ivy 和 Noah 在社區菜園的對話，注意他們說的時間過完了沒。', vis: { type: 'scene', art: 'dg20260902b1p_garden' } },
    { ch: 3, sp: 'A', en: "We've picked twelve tomatoes this week!", cn: '我們這星期摘了十二顆番茄！',
      hi: [{ t: "We've picked", cn: '這星期還沒完', k: 'unf', c: 3 }], vis: { type: 'scene', art: 'dg20260902b1p_basket' } },
    { ch: 3, sp: 'T', en: 'Nice! We only got five last week.', cn: '不錯耶！上星期我們只摘到五顆。',
      hi: [{ t: 'got', cn: '上星期結束了', k: 'fin', c: 4 }], vis: { type: 'scene', art: 'dg20260902b1p_five' } },
    { ch: 3, sp: 'N', zh: '這星期還沒過完，番茄還會再多，所以用完成式；上星期已經結束，就用過去式。',
      hi: [{ t: '完成式', k: 'unf', c: 3 }, { t: '過去式', k: 'fin', c: 4 }], vis: { type: 'scene', art: 'dg20260902b1p_tally' } },
    { ch: 3, sp: 'A', en: 'How long have you had this plot?', cn: '這塊菜地你用多久了？',
      hi: [{ t: 'How long have you had', cn: '問多久', k: 'fs', c: 2 }], vis: { type: 'scene', art: 'dg20260902b1p_plot' } },
    { ch: 3, sp: 'T', en: "I've had it since we moved here.", cn: '我們搬來這裡之後，我就有這塊地了。',
      hi: [{ t: 'since we moved here', cn: '起點', k: 'fs', c: 2 }], vis: { type: 'scene', art: 'dg20260902b1p_house' } },
    { ch: 3, sp: 'N', zh: 'since 後面接起點，可以是一個時間，也可以是一個過去式的句子，像 since we moved here。',
      hi: [{ t: 'since', k: 'fs', c: 2 }], vis: { type: 'scene', art: 'dg20260902b1p_grow' } },
    { ch: 3, sp: 'A', en: 'Look, the old fence has been replaced.', cn: '你看，舊圍籬已經換新了。',
      hi: [{ t: 'has been replaced', cn: '完成式被動', k: 'unf', c: 1 }], vis: { type: 'scene', art: 'dg20260902b1p_fence' } },
    { ch: 3, sp: 'T', en: 'Yes, two workers installed it on Tuesday.', cn: '對，兩個工人星期二裝好的。',
      hi: [{ t: 'installed', cn: '說了星期二', k: 'fin', c: 4 }], vis: { type: 'scene', art: 'dg20260902b1p_tools' } },
    { ch: 3, sp: 'N', zh: '圍籬是被換的，所以用被動 has been replaced；一說到星期二那一天，就換回過去式。',
      hi: [{ t: 'has been replaced', k: 'unf', c: 1 }], vis: { type: 'scene', art: 'dg20260902b1p_tue' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '同樣在算喝了幾杯，今天跟昨天，時態不一樣。',
      vis: { type: 'vs', sm: true, kick: '今天 vs 昨天',
        a: { w: "I've had three cups of tea today.", def: '我今天喝了三杯茶。', cn: '今天還沒過完 → 完成式' },
        b: { w: 'I had five cups of tea yesterday.', def: '我昨天喝了五杯茶。', cn: '昨天已經結束 → 過去式' } } },
    { ch: 4, sp: 'A', en: "I've had three cups of tea today.", cn: '我今天喝了三杯茶。',
      hi: [{ t: "I've had", cn: '還沒過完', k: 'unf', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '今天 vs 昨天',
        a: { w: "I've had three cups of tea today.", def: '我今天喝了三杯茶。', cn: '今天還沒過完 → 完成式' },
        b: { w: 'I had five cups of tea yesterday.', def: '我昨天喝了五杯茶。', cn: '昨天已經結束 → 過去式' } } },
    { ch: 4, sp: 'T', en: 'I had five cups of tea yesterday.', cn: '我昨天喝了五杯茶。',
      hi: [{ t: 'had', cn: '已經結束', k: 'fin', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '今天 vs 昨天',
        a: { w: "I've had three cups of tea today.", def: '我今天喝了三杯茶。', cn: '今天還沒過完 → 完成式' },
        b: { w: 'I had five cups of tea yesterday.', def: '我昨天喝了五杯茶。', cn: '昨天已經結束 → 過去式' } } },
    { ch: 4, sp: 'N', zh: '今天還沒過完，晚上可能再喝一杯；昨天已經過去，五杯就是最後的數字。',
      vis: { type: 'vs', sm: true, kick: '今天 vs 昨天',
        a: { w: "I've had three cups of tea today.", def: '我今天喝了三杯茶。', cn: '今天還沒過完 → 完成式' },
        b: { w: 'I had five cups of tea yesterday.', def: '我昨天喝了五杯茶。', cn: '昨天已經結束 → 過去式' } } },
    { ch: 4, sp: 'N', zh: '再看 for 和 since。兩句都是完成式，差別在後面接的是長度，還是起點。',
      vis: { type: 'vs', sm: true, kick: 'for 長度 vs since 起點',
        a: { w: 'He has lived in Kaohsiung for six years.', def: '他住在高雄六年了。', cn: 'for + 一段長度' },
        b: { w: 'He has lived in Kaohsiung since he got married.', def: '他結婚後就一直住在高雄。', cn: 'since + 起點' } } },
    { ch: 4, sp: 'A', en: 'He has lived in Kaohsiung for six years.', cn: '他住在高雄六年了。',
      hi: [{ t: 'for six years', cn: '長度', k: 'fs', c: 2 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: 'for 長度 vs since 起點',
        a: { w: 'He has lived in Kaohsiung for six years.', def: '他住在高雄六年了。', cn: 'for + 一段長度' },
        b: { w: 'He has lived in Kaohsiung since he got married.', def: '他結婚後就一直住在高雄。', cn: 'since + 起點' } } },
    { ch: 4, sp: 'T', en: 'He has lived in Kaohsiung since he got married.', cn: '他結婚後就一直住在高雄。',
      hi: [{ t: 'since he got married', cn: '起點', k: 'fs', c: 2 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: 'for 長度 vs since 起點',
        a: { w: 'He has lived in Kaohsiung for six years.', def: '他住在高雄六年了。', cn: 'for + 一段長度' },
        b: { w: 'He has lived in Kaohsiung since he got married.', def: '他結婚後就一直住在高雄。', cn: 'since + 起點' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '最後給你一個判斷流程。看到時間詞，照順序問自己三個問題。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一問：這段時間還沒過完嗎？像今天、這一季。是的話，用現在完成式。',
      hi: [{ t: '現在完成式', k: 'unf', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'A', en: 'Our team has won two games this season.', cn: '我們隊這一季贏了兩場。',
      hi: [{ t: 'has won', cn: '這一季還沒完', k: 'unf', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二問：時間已經結束了嗎？像昨天、上一季。是的話，用過去簡單式。',
      hi: [{ t: '過去簡單式', k: 'fin', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'T', en: 'We lost almost every game last season.', cn: '我們上一季幾乎每場都輸。',
      hi: [{ t: 'lost', cn: '上一季結束了', k: 'fin', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '第三問：事情持續到現在嗎？說多久用 for，說從什麼時候開始用 since，都配完成式。',
      hi: [{ t: 'for', k: 'fs', c: 2 }, { t: 'since', k: 'fs', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'A', en: "I've known Maya since kindergarten.", cn: '我從幼稚園就認識 Maya 了。',
      hi: [{ t: 'since kindergarten', cn: '起點', k: 'fs', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說說看。看到中文情境，先自己用英文說出來，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：今天還沒結束，你已經走了一萬步。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '今天還沒結束，你已經走了一萬步。' } },
    { ch: 6, sp: 'T', en: "I've walked ten thousand steps today.", cn: '我今天走了一萬步。',
      hi: [{ t: "I've walked", cn: '今天還沒完 → 完成式', k: 'unf', c: 3 }],
      vis: { type: 'speak', n: 1, show: true, sit: '今天還沒結束，你已經走了一萬步。', a: "I've walked ten thousand steps today." } },
    { ch: 6, sp: 'N', zh: '情境二：你上個月看完了三本小說。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '你上個月看完了三本小說。' } },
    { ch: 6, sp: 'A', en: 'I finished three novels last month.', cn: '我上個月看完了三本小說。',
      hi: [{ t: 'finished', cn: '上個月 → 過去式', k: 'fin', c: 4 }],
      vis: { type: 'speak', n: 2, show: true, sit: '你上個月看完了三本小說。', a: 'I finished three novels last month.' } },
    { ch: 6, sp: 'N', zh: '情境三：你在這家公司已經工作五年了。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '你在這家公司已經工作五年了。' } },
    { ch: 6, sp: 'T', en: "I've worked for this company for five years.", cn: '我在這家公司工作五年了。',
      hi: [{ t: 'for five years', cn: '長度 → for', k: 'fs', c: 2 }],
      vis: { type: 'speak', n: 3, show: true, sit: '你在這家公司已經工作五年了。', a: "I've worked for this company for five years." } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結一下：時間還沒過完，用完成式；已經結束，用過去式；持續到現在，用完成式加 for 或 since。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '下次講做過的事，先看一眼時間詞：那段時間過完了沒？', vis: { type: 'end' } }
  ]
};
