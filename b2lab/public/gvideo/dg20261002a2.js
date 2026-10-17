/* ============================================================
   B2 Read 文法影片解說 — dg20261002a2（Grammar in Use Unit 16，A2）
   格式與規則見 b2lab/tools/GVIDEO_SPEC.md；範本 gvideo/dg20261014b1.js。
   註：播放器的 timeline 固定把「現在」放在最左邊、往右是未來，畫不出「過去」，
       所以這個過去時態的單元改用 cards。
   ============================================================ */
window.GVIDEO = window.GVIDEO || {};
window.GVIDEO_ART = window.GVIDEO_ART || {};

(function(){
  var D='#2b2118', A='#e8813a', C='#fdf6ec', L='#f7e3c9', R='#d9534f', B='#3b82c4', G='#3f9a62', Y='#f2c94c', S='#d6e8f8';
  var M='#7a5230', P='dg20261002a2_';
  var st='stroke="'+D+'" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"';
  var th=function(w){ return 'stroke="'+D+'" stroke-width="'+w+'" stroke-linejoin="round" stroke-linecap="round"'; };
  var svg=function(inner){ return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+inner+'</svg>'; };
  var txt=function(x,y,t,sz,col){ return '<text x="'+x+'" y="'+y+'" text-anchor="middle" font-family="Arial,sans-serif" font-weight="700" font-size="'+sz+'" fill="'+(col||D)+'">'+t+'</text>'; };
  var qb=function(cx,cy){ return '<circle cx="'+cx+'" cy="'+cy+'" r="16" fill="'+A+'" '+st+'/>'+txt(cx,cy+7,'?',20,'#fff'); };
  var chk=function(cx,cy,r){ return '<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="'+G+'" '+st+'/><path d="M'+(cx-r*0.45)+' '+cy+' l'+(r*0.32)+' '+(r*0.34)+' l'+(r*0.6)+' -'+(r*0.7)+'" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>'; };
  /* 時鐘：h 點 m 分 */
  var clock=function(cx,cy,r,h,m){
    var ha=((h%12)+m/60)*30*Math.PI/180, ma=m*6*Math.PI/180;
    var hx=(cx+Math.sin(ha)*r*0.5).toFixed(1), hy=(cy-Math.cos(ha)*r*0.5).toFixed(1);
    var mx=(cx+Math.sin(ma)*r*0.75).toFixed(1), my=(cy-Math.cos(ma)*r*0.75).toFixed(1);
    return '<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="#fff" '+th(3.5)+'/>'
      +'<line x1="'+cx+'" y1="'+cy+'" x2="'+hx+'" y2="'+hy+'" '+th(4)+'/><line x1="'+cx+'" y1="'+cy+'" x2="'+mx+'" y2="'+my+'" '+th(3)+'/>'
      +'<circle cx="'+cx+'" cy="'+cy+'" r="3.5" fill="'+D+'"/>'; };
  /* 泥巴腳印 */
  var paw=function(cx,cy,s,col){ col=col||M;
    return '<g fill="'+col+'"><ellipse cx="'+cx+'" cy="'+cy+'" rx="'+(7*s)+'" ry="'+(6*s)+'"/>'
      +'<circle cx="'+(cx-8*s)+'" cy="'+(cy-8*s)+'" r="'+(3*s)+'"/><circle cx="'+(cx-3*s)+'" cy="'+(cy-12*s)+'" r="'+(3*s)+'"/>'
      +'<circle cx="'+(cx+3*s)+'" cy="'+(cy-12*s)+'" r="'+(3*s)+'"/><circle cx="'+(cx+8*s)+'" cy="'+(cy-8*s)+'" r="'+(3*s)+'"/></g>'; };
  /* 小狗側身（Max） */
  var dog=function(mud){
    return '<path d="M44 82 q-22 -8 -18 -32" fill="none" '+th(5)+'/>'
      +'<g fill="'+L+'" '+st+'><rect x="56" y="100" width="14" height="32" rx="6"/><rect x="78" y="104" width="14" height="28" rx="6"/><rect x="104" y="104" width="14" height="28" rx="6"/><rect x="124" y="100" width="14" height="32" rx="6"/></g>'
      +'<ellipse cx="96" cy="90" rx="52" ry="26" fill="'+L+'" '+st+'/>'
      +'<circle cx="148" cy="60" r="24" fill="'+L+'" '+st+'/>'
      +'<path d="M134 42 q-14 6 -12 28 q11 -2 15 -15 Z" fill="#a0673a" '+st+'/>'
      +'<circle cx="154" cy="56" r="3" fill="'+D+'"/><circle cx="171" cy="66" r="4.5" fill="'+D+'"/>'
      +'<path d="M156 74 q6 4 12 0" fill="none" '+th(2.5)+'/>'
      +(mud?'<g fill="'+M+'"><ellipse cx="80" cy="82" rx="11" ry="7"/><ellipse cx="112" cy="98" rx="9" ry="6"/><ellipse cx="63" cy="124" rx="6" ry="5"/><ellipse cx="131" cy="124" rx="6" ry="5"/><ellipse cx="146" cy="76" rx="6" ry="4"/><ellipse cx="98" cy="72" rx="5" ry="3"/></g>':''); };

  var art={};
  /* ---- 核心觀念三張卡 ---- */
  /* 那一刻：電話響了 */
  art.phone=svg(
    '<path d="M50 124 L62 78 H138 L150 124 Z" fill="'+R+'" '+st+'/>'
   +'<path d="M38 64 q0 -24 24 -24 H138 q24 0 24 24 v8 h-26 v-10 H64 v10 H38 Z" fill="'+R+'" '+st+'/>'
   +'<circle cx="100" cy="102" r="17" fill="#fff" '+st+'/>'
   +'<g fill="'+D+'"><circle cx="100" cy="91" r="2.5"/><circle cx="110" cy="96" r="2.5"/><circle cx="111" cy="107" r="2.5"/><circle cx="100" cy="113" r="2.5"/><circle cx="89" cy="107" r="2.5"/><circle cx="90" cy="96" r="2.5"/></g>'
   +'<path d="M30 34 l-12 -10 M170 34 l12 -10 M24 58 h-14 M176 58 h14 M100 22 v-14" '+th(4)+'/>'),
  /* 之前那一段：沙漏 */
  art.span=svg(
    '<path d="M60 18 H140 M60 132 H140" '+th(7)+'/>'
   +'<path d="M72 22 C72 58 96 66 96 75 C96 84 72 92 72 128 H128 C128 92 104 84 104 75 C104 66 128 58 128 22 Z" fill="'+S+'"/>'
   +'<path d="M82 42 H118 C114 58 104 64 100 70 C96 64 86 58 82 42 Z" fill="'+Y+'"/>'
   +'<path d="M76 126 C80 106 96 100 100 98 C104 100 120 106 124 126 Z" fill="'+Y+'"/>'
   +'<line x1="100" y1="72" x2="100" y2="100" stroke="'+Y+'" stroke-width="3"/>'
   +'<path d="M72 22 C72 58 96 66 96 75 C96 84 72 92 72 128 H128 C128 92 104 84 104 75 C104 66 128 58 128 22 Z" fill="none" '+st+'/>'
   +'<path d="M150 40 a40 40 0 0 1 0 70" fill="none" stroke="'+G+'" stroke-width="5" stroke-linecap="round"/><path d="M142 106 l8 6 l4 -10" fill="none" stroke="'+G+'" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>'),
  /* 多久：碼錶 */
  art.watch=svg(
    '<rect x="88" y="14" width="24" height="14" rx="3" fill="'+A+'" '+st+'/><line x1="100" y1="28" x2="100" y2="36" '+th(5)+'/>'
   +'<path d="M140 36 l10 -10" '+th(5)+'/>'
   +'<circle cx="100" cy="86" r="50" fill="#fff" '+th(4)+'/>'
   +'<path d="M100 86 V42 A44 44 0 0 1 141 102 Z" fill="'+G+'" opacity=".3"/>'
   +'<g '+th(3)+'><line x1="100" y1="40" x2="100" y2="48"/><line x1="146" y1="86" x2="138" y2="86"/><line x1="100" y1="132" x2="100" y2="124"/><line x1="54" y1="86" x2="62" y2="86"/></g>'
   +'<line x1="100" y1="86" x2="137" y2="100" stroke="'+R+'" stroke-width="5" stroke-linecap="round"/>'
   +'<circle cx="100" cy="86" r="5" fill="'+D+'"/>');

  /* ---- 情境對話：Max 全身泥巴 ---- */
  /* 1 Max 全身是泥巴 */
  art.dogmud=svg(
    '<ellipse cx="100" cy="136" rx="80" ry="8" fill="'+M+'" opacity=".55"/>'+dog(true));
  /* 2 Max 怎麼那麼髒？ */
  art.askdog=svg(
    '<circle cx="86" cy="80" r="44" fill="'+L+'" '+st+'/>'
   +'<path d="M50 50 q-20 10 -16 46 q16 -2 22 -22 Z" fill="#a0673a" '+st+'/><path d="M122 50 q20 10 16 46 q-16 -2 -22 -22 Z" fill="#a0673a" '+st+'/>'
   +'<circle cx="72" cy="74" r="4" fill="'+D+'"/><circle cx="100" cy="74" r="4" fill="'+D+'"/>'
   +'<ellipse cx="86" cy="92" rx="8" ry="6" fill="'+D+'"/><path d="M78 104 q8 6 16 0" fill="none" '+th(2.5)+'/>'
   +'<g fill="'+M+'"><ellipse cx="62" cy="104" rx="9" ry="6"/><ellipse cx="108" cy="56" rx="7" ry="5"/><ellipse cx="114" cy="106" rx="5" ry="4"/></g>'
   +qb(162,36)),
  /* 3 在院子裡挖土 */
  art.dig=svg(
    '<line x1="8" y1="118" x2="192" y2="118" '+st+'/>'
   +'<ellipse cx="80" cy="120" rx="44" ry="12" fill="#4a3424" '+st+'/>'
   +'<path d="M120 118 q14 -34 44 -30 q22 4 24 30 Z" fill="'+M+'" '+st+'/>'
   +'<g fill="'+M+'"><circle cx="40" cy="104" r="4"/><circle cx="54" cy="96" r="3"/><circle cx="110" cy="100" r="3.5"/></g>'
   +'<line x1="30" y1="30" x2="70" y2="96" '+th(5)+'/>'
   +'<path d="M62 92 l16 -10 l14 22 q-6 10 -18 6 Z" fill="#c9c2b8" '+st+'/>'
   +'<rect x="20" y="22" width="22" height="10" rx="4" fill="'+A+'" '+st+' transform="rotate(-30 31 27)"/>'
   +'<path d="M142 66 h22 a5 5 0 1 1 4 -6 a5 5 0 1 1 4 8 a5 5 0 1 1 -4 8 a5 5 0 1 1 -4 -6 h-22 a5 5 0 1 1 -4 6 a5 5 0 1 1 -4 -8 a5 5 0 1 1 4 -8 a5 5 0 1 1 4 6 Z" fill="#fff" '+th(2.5)+'/>'),
  /* 4 一整個下午：腳印一路到洞口、太陽西下 */
  art.pawtrail=svg(
    '<rect x="0" y="0" width="200" height="104" fill="'+S+'" opacity=".5"/>'
   +'<path d="M150 104 a28 28 0 0 1 56 0 Z" fill="'+A+'" '+st+'/>'
   +'<path d="M30 30 a14 14 0 0 1 28 0" fill="none" stroke="'+Y+'" stroke-width="6" stroke-linecap="round" stroke-dasharray="2 8"/>'
   +'<line x1="0" y1="104" x2="200" y2="104" '+st+'/>'
   +paw(28,132,0.9)+paw(54,120,0.9)+paw(80,134,0.9)+paw(106,122,0.9)
   +'<ellipse cx="152" cy="128" rx="30" ry="10" fill="#4a3424" '+st+'/>'
   +'<path d="M40 60 Q100 30 160 74" fill="none" stroke="'+A+'" stroke-width="4" stroke-dasharray="5 7" stroke-linecap="round"/>'),
  /* 5 那你怎麼也那麼累？ */
  art.tiredq=svg(
    '<path d="M44 132 q0 -36 46 -36 q46 0 46 36 Z" fill="'+B+'" '+st+'/>'
   +'<path d="M50 62 q0 -40 40 -40 q40 0 40 40 v24 h-80 Z" fill="#5b3a24" '+st+'/>'
   +'<circle cx="90" cy="66" r="30" fill="'+L+'" '+st+'/>'
   +'<path d="M70 64 q6 5 12 0 M98 64 q6 5 12 0" fill="none" '+th(3)+'/>'
   +'<path d="M80 84 q10 -5 20 0" fill="none" '+th(3)+'/>'
   +'<path d="M124 50 q6 10 0 14 q-6 -4 0 -14 Z" fill="'+S+'" '+th(2)+'/>'
   +qb(160,30)),
  /* 6 在浴缸裡洗了四十分鐘 */
  art.bath=svg(
    '<circle cx="74" cy="62" r="20" fill="'+L+'" '+st+'/><path d="M60 48 q-10 4 -8 20 q8 -2 10 -10 Z" fill="#a0673a" '+st+'/>'
   +'<circle cx="80" cy="58" r="2.5" fill="'+D+'"/><circle cx="92" cy="66" r="3.5" fill="'+D+'"/>'
   +'<path d="M22 78 H178 V96 a30 30 0 0 1 -30 30 H52 a30 30 0 0 1 -30 -30 Z" fill="#fff" '+st+'/>'
   +'<line x1="56" y1="126" x2="50" y2="138" '+th(5)+'/><line x1="144" y1="126" x2="150" y2="138" '+th(5)+'/>'
   +'<g fill="'+S+'" '+th(2.5)+'><circle cx="44" cy="74" r="12"/><circle cx="104" cy="72" r="13"/><circle cx="126" cy="70" r="10"/><circle cx="148" cy="74" r="12"/><circle cx="118" cy="50" r="6"/><circle cx="140" cy="40" r="8"/></g>'
   +'<path d="M170 78 V40 q0 -12 -12 -12 h-6" fill="none" '+th(4)+'/>'),
  /* 7 累是結果：毛巾、汗水、40 分鐘 */
  art.towel=svg(
    '<line x1="20" y1="30" x2="110" y2="30" '+th(5)+'/>'
   +'<path d="M32 30 H98 V112 H32 Z" fill="'+A+'" '+st+'/>'
   +'<path d="M32 94 H98 M32 102 H98" stroke="#fff" stroke-width="4"/>'
   +'<path d="M32 30 H98 V112 H32 Z" fill="none" '+st+'/>'
   +'<g fill="'+S+'" '+th(2.5)+'><path d="M52 124 q6 10 0 14 q-6 -4 0 -14 Z"/><path d="M76 120 q6 10 0 14 q-6 -4 0 -14 Z"/></g>'
   +clock(150,74,34,0,40)
   +'<path d="M150 74 V40 A34 34 0 1 1 120.6 57 Z" fill="'+G+'" opacity=".25"/>'
   +txt(150,132,'40',20,G)),
  /* 8 他在外面玩多久了？ */
  art.gardenq=svg(
    '<line x1="8" y1="112" x2="192" y2="112" '+st+'/>'
   +'<rect x="16" y="112" width="168" height="24" fill="'+M+'" opacity=".6"/>'
   +'<g '+th(3)+'><line x1="40" y1="112" x2="40" y2="80"/><line x1="70" y1="112" x2="78" y2="86"/><line x1="118" y1="112" x2="106" y2="88"/></g>'
   +'<g '+st+'><circle cx="40" cy="74" r="9" fill="'+R+'"/><circle cx="80" cy="80" r="9" fill="'+Y+'"/><circle cx="104" cy="82" r="9" fill="'+R+'"/></g>'
   +'<ellipse cx="146" cy="116" rx="22" ry="7" fill="#4a3424" '+st+'/>'
   +paw(60,130,0.6)+paw(90,128,0.6)
   +qb(160,40)),
  /* 9 從午餐時間就在那裡玩 */
  art.lunch=svg(
    '<ellipse cx="70" cy="114" rx="56" ry="16" fill="#fff" '+st+'/>'
   +'<path d="M30 104 L70 60 L110 104 Z" fill="'+C+'" '+st+'/>'
   +'<path d="M38 96 L70 64 L102 96" fill="none" stroke="'+G+'" stroke-width="5"/>'
   +'<path d="M42 100 L70 70 L98 100" fill="none" stroke="'+R+'" stroke-width="4"/>'
   +'<path d="M30 104 L70 60 L110 104 Z" fill="none" '+st+'/>'
   +clock(152,58,34,12,0)
   +txt(152,118,'12:00',18,A)),
  /* 10 since：從 12:00 一路到 6:00 */
  art.clocks=svg(
    clock(44,64,28,12,0)+clock(156,64,28,6,0)
   +'<path d="M78 64 H118" '+th(5)+'/><path d="M110 54 l10 10 l-10 10" fill="none" '+th(5)+'/>'
   +'<rect x="44" y="104" width="112" height="10" rx="5" fill="'+G+'" '+st+'/>'
   +txt(44,138,'12:00',15,A)+txt(156,138,'6:00',15,A));

  var out={}; for(var k in art) out[P+k]=art[k];
  Object.assign(window.GVIDEO_ART, out);
})();

/* ============================================================
   dg20261002a2 — How Long Before That Moment?
   Grammar in Use Unit 16（Past perfect continuous: I had been doing）
   ============================================================ */
window.GVIDEO.dg20261002a2 = {
  kind: 'gram',
  date: '2026-10-02',
  title: 'How Long Before That Moment?',
  titleCn: '那一刻之前，已經做了多久？',
  titleArt: ['dg20261002a2_phone', 'dg20261002a2_span', 'dg20261002a2_watch'],
  scene: '泥巴小狗 A muddy dog',
  sceneArt: 'dg20261002a2_dogmud',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Lily', voice: 'f' },
    T: { name: 'Sam', voice: 'm' }
  },
  expr: {
    pt:   { t: 'when I got home', cn: '過去的那一刻 → 過去簡單式', ex: 'The rain stopped when we reached the beach.', exCn: '我們到海邊的時候，雨停了。', note: '那一刻常用 when 或 before 帶出來' },
    span: { t: 'had been + V-ing', cn: '那一刻之前，一直在做的事', ex: 'The cat had been sleeping on my chair, so it was warm.', exCn: '貓一直睡在我的椅子上，所以椅子暖暖的。', note: 'had 和 been 都不變，動詞一定要加 -ing' },
    how:  { t: 'for / since / all', cn: '說出做了多久', ex: 'We had been driving for five hours when we saw the sea.', exCn: '看到大海的時候，我們已經開了五個小時的車。', note: 'for 加一段長度、since 加起點、all 加一整段時間' }
  },
  chapters: [
    { cn: '開場' }, { cn: '三步驟：那一刻之前' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  cardsKick: 'Before that moment 那一刻之前',
  /* 核心觀念三張卡：那一刻 → 之前那一段 → 多久 */
  cards: [
    { art: 'dg20261002a2_phone', lab: '過去那一刻', who: '過去簡單式' },
    { art: 'dg20261002a2_span',  lab: '之前那一段', who: 'had been+ing' },
    { art: 'dg20261002a2_watch', lab: '做了多久',   who: 'for・since・all' }
  ],
  /* 判斷流程：照順序問 */
  flow: [
    { q: '過去的那一刻是什麼？',       a: '過去式',   en: '主詞 + 過去式（when / before）' },
    { q: '那一刻之前，有事一直在做嗎？', a: '畫成一段', en: '主詞 + had been + V-ing' },
    { q: '講得出做了多久嗎？',         a: '加上時間', en: 'for / since / all + 時間' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: '到過去某一刻為止，一件事已經做了多久？這支影片教你怎麼說。', vis: { type: 'title' } },

    /* ---- 1 核心：三步驟 ---- */
    { ch: 1, sp: 'N', zh: '我們分三步來看。先想一個過去的畫面。', vis: { type: 'cards', show: 0 } },
    { ch: 1, sp: 'N', zh: '第一步，先找出過去的那一刻，用最簡單的過去式。',
      hi: [{ t: '過去式', k: 'pt', c: 3 }], vis: { type: 'cards', show: 1, pop: true } },
    { ch: 1, sp: 'A', en: "The phone rang at ten o'clock.", cn: '電話十點響了。',
      hi: [{ t: 'rang', cn: '那一刻', k: 'pt', c: 3 }], vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'N', zh: '第二步，看那一刻之前，有什麼事一直在做。這一段，用 had been 加 V-ing。',
      hi: [{ t: 'had been', k: 'span', c: 4 }], vis: { type: 'cards', show: 2, pop: true } },
    { ch: 1, sp: 'T', en: "I had been napping, so I didn't hear it at first.", cn: '我剛才一直在睡午覺，所以一開始沒聽到。',
      hi: [{ t: 'had been napping', cn: '之前一直在睡', k: 'span', c: 4 }], vis: { type: 'cards', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: '睡午覺是一整段，一路接到電話響的那一刻；電話響，只是一個點。',
      vis: { type: 'cards', show: 2 } },
    { ch: 1, sp: 'N', zh: '第三步，想講清楚做了多久，就加上 for、since 或 all。',
      hi: [{ t: 'for', k: 'how', c: 2 }], vis: { type: 'cards', show: 3, pop: true } },
    { ch: 1, sp: 'A', en: 'My brother had been napping for nearly two hours when the phone rang.', cn: '電話響的時候，我弟弟已經睡了快兩個小時。',
      hi: [{ t: 'for nearly two hours', cn: '睡了多久', k: 'how', c: 2 }], vis: { type: 'cards', show: 3, lit: 2 } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: '句型很固定：主詞加 had been，再加動詞 ing。had 和 been 都不會變。',
      hi: [{ t: 'had been', k: 'span', c: 4 }],
      vis: { type: 'pattern', kick: 'Past perfect continuous 過去完成進行式', rows: [
        { lab: '我',   blocks: [{ t: 'I', k: 's' }, { t: 'had been cooking', k: 'v' }, { t: 'for an hour', k: 'o' }] },
        { lab: '他們', blocks: [{ t: 'They', k: 's' }, { t: 'had been running', k: 'v' }, { t: 'since seven', k: 'o' }] }
      ], note: 'had ＋ been ＋ 動詞 ing，三個零件都要有' } },
    { ch: 2, sp: 'N', zh: '要說做了多久，最常用這三個小幫手：for、since、all。',
      hi: [{ t: 'since', k: 'how', c: 2 }],
      vis: { type: 'family', kick: 'How long? 做了多久', core: 'How long?', coreCn: '說出持續多久', art: 'dg20261002a2_watch', items: [
        { t: 'for ten minutes', cn: 'for 加一段長度' }, { t: 'since nine', cn: 'since 加起點' }, { t: 'all day', cn: 'all 加一整段' }
      ] } },
    { ch: 2, sp: 'N', zh: '那一刻常用 when 或 before 帶出來，後面用過去式。',
      hi: [{ t: '過去式', k: 'pt', c: 3 }],
      vis: { type: 'pattern', kick: '加上那一刻 Add the moment', rows: [
        { lab: '用 when',   blocks: [{ t: 'She had been cooking', k: 'v' }, { t: 'when', k: 'x' }, { t: 'I arrived', k: 'o' }] },
        { lab: '用 before', blocks: [{ t: 'We had been walking', k: 'v' }, { t: 'before', k: 'x' }, { t: 'it got dark', k: 'o' }] }
      ], note: 'when／before 後面那一句用過去式' } },
    { ch: 2, sp: 'N', zh: '一下子就發生的事，講不出多久，直接用過去式就好。',
      vis: { type: 'pattern', kick: '一下子 vs 一整段', rows: [
        { lab: '一下子', blocks: [{ t: 'He', k: 's' }, { t: 'opened', k: 'v' }, { t: 'the door', k: 'n' }] },
        { lab: '一整段', blocks: [{ t: 'He had been knocking', k: 'v' }, { t: 'for five minutes', k: 'o', add: true }] }
      ], note: '講得出多久，才用 had been 加 V-ing' } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: 'Sam 下班回家，發現狗狗 Max 全身都是泥巴。來聽他和 Lily 的對話。', vis: { type: 'scene', art: 'dg20261002a2_dogmud' } },
    { ch: 3, sp: 'T', en: 'Why was Max so dirty when I got home?', cn: '我回家的時候，Max 怎麼那麼髒？',
      hi: [{ t: 'when I got home', cn: '那一刻', k: 'pt', c: 3 }], vis: { type: 'scene', art: 'dg20261002a2_askdog' } },
    { ch: 3, sp: 'A', en: 'He had been digging in the garden all afternoon.', cn: '他整個下午都在院子裡挖土。',
      hi: [{ t: 'had been digging', cn: '一直在挖', k: 'span', c: 4 }, { t: 'all afternoon', cn: '一整個下午', k: 'how', c: 2 }], vis: { type: 'scene', art: 'dg20261002a2_dig' } },
    { ch: 3, sp: 'N', zh: '挖了一整個下午，一路挖到 Sam 回家，所以用 had been digging。',
      hi: [{ t: 'had been digging', k: 'span', c: 4 }], vis: { type: 'scene', art: 'dg20261002a2_pawtrail' } },
    { ch: 3, sp: 'T', en: 'Oh no. And why were you so tired?', cn: '天啊。那你怎麼也那麼累？', vis: { type: 'scene', art: 'dg20261002a2_tiredq' } },
    { ch: 3, sp: 'A', en: 'I had been washing him in the bathtub for forty minutes!', cn: '我已經在浴缸幫他洗了四十分鐘！',
      hi: [{ t: 'had been washing', cn: '一直在洗', k: 'span', c: 4 }, { t: 'for forty minutes', cn: '洗了多久', k: 'how', c: 2 }], vis: { type: 'scene', art: 'dg20261002a2_bath' } },
    { ch: 3, sp: 'N', zh: '累是結果，洗狗是之前一直在做的那一段；for forty minutes 說出洗了多久。',
      hi: [{ t: 'for forty minutes', k: 'how', c: 2 }], vis: { type: 'scene', art: 'dg20261002a2_towel' } },
    { ch: 3, sp: 'T', en: 'How long had he been playing out there?', cn: '他在外面玩多久了？',
      hi: [{ t: 'had he been playing', cn: '玩了多久', k: 'span', c: 4 }], vis: { type: 'scene', art: 'dg20261002a2_gardenq' } },
    { ch: 3, sp: 'A', en: 'He had been playing there since lunch.', cn: '他從午餐時間就一直在那裡玩。',
      hi: [{ t: 'since lunch', cn: '從午餐開始', k: 'how', c: 2 }], vis: { type: 'scene', art: 'dg20261002a2_lunch' } },
    { ch: 3, sp: 'N', zh: 'since 後面放起點。從午餐開始，一路玩到被 Lily 發現為止。',
      hi: [{ t: 'since', k: 'how', c: 2 }], vis: { type: 'scene', art: 'dg20261002a2_clocks' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '同樣是「我回到家的時候」，動詞換個形狀，事情的先後就不一樣。',
      vis: { type: 'vs', sm: true, kick: '同一刻，先後不一樣',
        a: { w: 'When I got home, Dad cooked dinner.', def: '我回到家，爸爸才去煮晚餐。', cn: '我先到家 → 過去簡單式' },
        b: { w: 'When I got home, Dad had been cooking for an hour.', def: '我回到家時，爸爸已經煮了一小時。', cn: '爸爸先在煮 → had been V-ing' } } },
    { ch: 4, sp: 'A', en: 'When I got home, Dad cooked dinner.', cn: '我回到家，爸爸才去煮晚餐。',
      hi: [{ t: 'cooked', cn: '回家之後才煮', k: 'pt', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '同一刻，先後不一樣',
        a: { w: 'When I got home, Dad cooked dinner.', def: '我回到家，爸爸才去煮晚餐。', cn: '我先到家 → 過去簡單式' },
        b: { w: 'When I got home, Dad had been cooking for an hour.', def: '我回到家時，爸爸已經煮了一小時。', cn: '爸爸先在煮 → had been V-ing' } } },
    { ch: 4, sp: 'T', en: 'When I got home, Dad had been cooking for an hour.', cn: '我回到家時，爸爸已經煮了一小時。',
      hi: [{ t: 'had been cooking', cn: '之前就在煮', k: 'span', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '同一刻，先後不一樣',
        a: { w: 'When I got home, Dad cooked dinner.', def: '我回到家，爸爸才去煮晚餐。', cn: '我先到家 → 過去簡單式' },
        b: { w: 'When I got home, Dad had been cooking for an hour.', def: '我回到家時，爸爸已經煮了一小時。', cn: '爸爸先在煮 → had been V-ing' } } },
    { ch: 4, sp: 'N', zh: '第一句，我先到家，爸爸才開始煮；第二句，我到家前，爸爸已經忙了一小時。',
      vis: { type: 'vs', sm: true, kick: '同一刻，先後不一樣',
        a: { w: 'When I got home, Dad cooked dinner.', def: '我回到家，爸爸才去煮晚餐。', cn: '我先到家 → 過去簡單式' },
        b: { w: 'When I got home, Dad had been cooking for an hour.', def: '我回到家時，爸爸已經煮了一小時。', cn: '爸爸先在煮 → had been V-ing' } } },
    { ch: 4, sp: 'N', zh: '再看一組。have been 一路做到現在；had been 只做到過去的某一刻。',
      vis: { type: 'vs', sm: true, kick: '到現在 vs 到過去那一刻',
        a: { w: 'Kate has been playing the piano since 2020.', def: 'Kate 從 2020 年彈鋼琴彈到現在。', cn: '接到現在 → have been' },
        b: { w: 'Kate had been playing the piano for six years when she joined the band.', def: 'Kate 加入樂團的時候，已經彈了六年鋼琴。', cn: '接到過去那一刻 → had been' } } },
    { ch: 4, sp: 'A', en: 'Kate has been playing the piano since 2020.', cn: 'Kate 從 2020 年彈鋼琴彈到現在。',
      hi: [{ t: 'has been playing', cn: '一路到現在', c: 1 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '到現在 vs 到過去那一刻',
        a: { w: 'Kate has been playing the piano since 2020.', def: 'Kate 從 2020 年彈鋼琴彈到現在。', cn: '接到現在 → have been' },
        b: { w: 'Kate had been playing the piano for six years when she joined the band.', def: 'Kate 加入樂團的時候，已經彈了六年鋼琴。', cn: '接到過去那一刻 → had been' } } },
    { ch: 4, sp: 'T', en: 'Kate had been playing the piano for six years when she joined the band.', cn: 'Kate 加入樂團的時候，已經彈了六年鋼琴。',
      hi: [{ t: 'had been playing', cn: '到加入樂團為止', k: 'span', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '到現在 vs 到過去那一刻',
        a: { w: 'Kate has been playing the piano since 2020.', def: 'Kate 從 2020 年彈鋼琴彈到現在。', cn: '接到現在 → have been' },
        b: { w: 'Kate had been playing the piano for six years when she joined the band.', def: 'Kate 加入樂團的時候，已經彈了六年鋼琴。', cn: '接到過去那一刻 → had been' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '最後給你一個判斷流程，照順序問自己三個問題。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一問：故事裡，過去的那一刻是什麼？那一刻用過去式。',
      hi: [{ t: '過去式', k: 'pt', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'A', en: 'Our plane landed at midnight.', cn: '我們的飛機半夜降落。',
      hi: [{ t: 'landed', cn: '那一刻', k: 'pt', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二問：那一刻之前，有事一直在做嗎？有的話，用 had been 加 V-ing。',
      hi: [{ t: 'had been', k: 'span', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'T', en: 'We had been flying all day, so we went straight to bed.', cn: '我們飛了一整天，所以直接上床睡覺。',
      hi: [{ t: 'had been flying', cn: '一直在飛', k: 'span', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '第三問：講得出做了多久嗎？講得出來，就加上 for、since 或 all。',
      hi: [{ t: 'since', k: 'how', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'A', en: 'Our kids had been sitting in the car since six in the morning.', cn: '孩子們從早上六點就一直坐在車上。',
      hi: [{ t: 'since six in the morning', cn: '從六點開始', k: 'how', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說說看。看到中文情境，先自己用英文說出來，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：朋友問你，昨天怎麼滿身大汗？你說，因為你剛才一直在跑步。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '朋友問你，昨天怎麼滿身大汗？你說，因為你剛才一直在跑步。' } },
    { ch: 6, sp: 'A', en: 'I had been running, so I was sweaty.', cn: '我剛才一直在跑步，所以滿身大汗。',
      hi: [{ t: 'had been running', cn: '之前一直在跑', k: 'span', c: 4 }],
      vis: { type: 'speak', n: 1, show: true, sit: '朋友問你，昨天怎麼滿身大汗？你說，因為你剛才一直在跑步。', a: 'I had been running, so I was sweaty.' } },
    { ch: 6, sp: 'N', zh: '情境二：你昨天到公司的時候，雨已經下了三個小時。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '你昨天到公司的時候，雨已經下了三個小時。' } },
    { ch: 6, sp: 'T', en: 'It had been raining for three hours when I got to work.', cn: '我到公司的時候，雨已經下了三個小時。',
      hi: [{ t: 'for three hours', cn: '下了多久', k: 'how', c: 2 }],
      vis: { type: 'speak', n: 2, show: true, sit: '你昨天到公司的時候，雨已經下了三個小時。', a: 'It had been raining for three hours when I got to work.' } },
    { ch: 6, sp: 'N', zh: '情境三：昨天晚上朋友打給你的時候，你從八點就一直在讀書。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '昨天晚上朋友打給你的時候，你從八點就一直在讀書。' } },
    { ch: 6, sp: 'A', en: 'I had been studying since eight when my friend called.', cn: '朋友打來的時候，我從八點就一直在讀書。',
      hi: [{ t: 'since eight', cn: '從八點開始', k: 'how', c: 2 }],
      vis: { type: 'speak', n: 3, show: true, sit: '昨天晚上朋友打給你的時候，你從八點就一直在讀書。', a: 'I had been studying since eight when my friend called.' } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結一下：先找出那一刻；之前一直在做的那一段，用 had been 加 V-ing；再用 for、since、all 說出多久。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '下次講過去的事，先問一句：到那一刻為止，已經做了多久？', vis: { type: 'end' } }
  ]
};
