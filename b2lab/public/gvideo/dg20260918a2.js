/* ============================================================
   B2 Read 文法影片解說 — dg20260918a2（Unit 12，A2）
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
  /* 一朵花（花心 x,y，r 花瓣大小，col 花瓣顏色） */
  var flower=function(x,y,r,col){ var g=''; for(var i=0;i<5;i++){ var a=i*72*Math.PI/180; g+='<circle cx="'+(x+Math.cos(a)*r).toFixed(1)+'" cy="'+(y+Math.sin(a)*r).toFixed(1)+'" r="'+r+'" fill="'+col+'" '+th(2.5)+'/>'; }
    return g+'<circle cx="'+x+'" cy="'+y+'" r="'+(r*0.8).toFixed(1)+'" fill="'+Y+'" '+th(2.5)+'/>'; };
  /* 星星 */
  var star=function(cx,cy,R1,col){ var p=[]; for(var i=0;i<10;i++){ var rr=i%2?R1*0.45:R1, a=(i*36-90)*Math.PI/180; p.push((cx+Math.cos(a)*rr).toFixed(1)+','+(cy+Math.sin(a)*rr).toFixed(1)); }
    return '<polygon points="'+p.join(' ')+'" fill="'+col+'" '+th(2.5)+'/>'; };

  Object.assign(window.GVIDEO_ART, {
    /* since：月曆上標出開始的那一天＋起點旗子 */
    dg20260918a2_start: svg(
      cal(18,32,112,98)
     +star(64,73,11,Y)
     +'<line x1="156" y1="40" x2="156" y2="132" '+th(4)+'/><path d="M156 42 L190 54 L156 66 Z" fill="'+R+'" '+st+'/>'
     +'<line x1="138" y1="132" x2="176" y2="132" '+th(4)+'/>'),
    /* for：尺＋兩頭箭頭（量一段長度） */
    dg20260918a2_length: svg((function(){
      var g='<rect x="18" y="78" width="164" height="38" rx="4" fill="'+Y+'" '+st+'/>';
      for(var i=0;i<=15;i++){ var x=28+i*9.6; g+='<line x1="'+x.toFixed(1)+'" y1="79" x2="'+x.toFixed(1)+'" y2="'+(i%5===0?96:88)+'" '+th(2)+'/>'; }
      return g+'<line x1="34" y1="50" x2="166" y2="50" stroke="'+G+'" stroke-width="5" stroke-linecap="round"/>'
        +'<path d="M46 38 L32 50 L46 62 M154 38 L168 50 L154 62" fill="none" stroke="'+G+'" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>'; })()),
    /* How long?：時鐘上掃過的一段＋問號 */
    dg20260918a2_howlong: svg(
      '<circle cx="88" cy="80" r="50" fill="#fff" '+th(4)+'/>'
     +'<path d="M88 80 L88 34 A46 46 0 0 1 134 80 Z" fill="'+A+'" opacity=".3"/>'
     +'<path d="M88 36 A44 44 0 0 1 132 80" fill="none" stroke="'+A+'" stroke-width="4" stroke-linecap="round"/>'
     +'<line x1="88" y1="80" x2="88" y2="46" '+th(4)+'/><line x1="88" y1="80" x2="118" y2="80" '+th(4)+'/>'
     +'<circle cx="88" cy="80" r="5" fill="'+D+'"/>'
     +qb(166,34)),

    /* 情境 0：花店門口——遮陽棚、花桶 */
    dg20260918a2_shop: svg(
      '<line x1="8" y1="134" x2="192" y2="134" '+st+'/>'
     +'<rect x="30" y="58" width="140" height="76" fill="'+C+'" '+st+'/>'
     +'<path d="M24 40 H176 L170 60 a10 10 0 0 1 -20 0 a10 10 0 0 1 -20 0 a10 10 0 0 1 -20 0 a10 10 0 0 1 -20 0 a10 10 0 0 1 -20 0 a10 10 0 0 1 -20 0 a10 10 0 0 1 -20 0 Z" fill="'+G+'" '+st+'/>'
     +'<rect x="82" y="80" width="36" height="54" fill="'+L+'" '+st+'/><circle cx="110" cy="108" r="2.5" fill="'+D+'"/>'
     +'<rect x="40" y="76" width="32" height="26" fill="'+S+'" '+st+'/><rect x="128" y="76" width="32" height="26" fill="'+S+'" '+st+'/>'
     +'<path d="M38 118 H70 L66 134 H42 Z M130 118 H162 L158 134 H134 Z" fill="'+B+'" '+st+'/>'
     +flower(48,110,5,R)+flower(62,108,5,'#f6b6c8')+flower(140,110,5,Y)+flower(154,108,5,R)),
    /* 情境 1：在這裡工作多久了？——澆水壺＋問號 */
    dg20260918a2_can: svg(
      '<path d="M50 70 H120 V126 a8 8 0 0 1 -8 8 H58 a8 8 0 0 1 -8 -8 Z" fill="'+B+'" '+st+'/>'
     +'<path d="M120 84 L160 56 L166 64 L124 102" fill="'+B+'" '+st+'/>'
     +'<ellipse cx="166" cy="56" rx="8" ry="12" transform="rotate(35 166 56)" fill="'+S+'" '+st+'/>'
     +'<path d="M58 70 a28 26 0 0 1 54 0" fill="none" '+th(5)+'/>'
     +'<path d="M50 96 a14 14 0 0 1 0 -20" fill="none" '+th(4)+'/>'
     +qb(40,36)),
    /* 情境 2：工作六年了——疊起來的日曆頁，最上面寫 6 */
    dg20260918a2_six: svg(
      '<rect x="62" y="24" width="96" height="100" rx="8" fill="#fff" '+st+'/>'
     +'<rect x="54" y="30" width="96" height="100" rx="8" fill="#fff" '+st+'/>'
     +'<rect x="46" y="36" width="96" height="100" rx="8" fill="#fff" '+st+'/>'
     +'<path d="M46 58 V44 a8 8 0 0 1 8 -8 H134 a8 8 0 0 1 8 8 V58 Z" fill="'+G+'" '+st+'/>'
     +txt(94,110,'6',46)+txt(94,128,'YEARS',12,G)),
    /* 情境 3：six years 是一段長度——起點到現在的括號 */
    dg20260918a2_span: svg(
      '<line x1="16" y1="104" x2="178" y2="104" '+th(4)+'/><path d="M176 96 L188 104 L176 112" fill="none" '+th(4)+'/>'
     +'<path d="M40 82 V70 H160 V82" fill="none" stroke="'+G+'" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>'
     +'<circle cx="40" cy="104" r="9" fill="'+B+'" '+st+'/><circle cx="160" cy="104" r="9" fill="'+A+'" '+st+'/>'
     +txt(100,56,'6 yrs',20,G)),
    /* 情境 4：什麼時候開始做花的？——花剪＋一朵花＋問號 */
    dg20260918a2_snip: svg(
      '<path d="M70 132 Q66 100 80 70" fill="none" stroke="'+G+'" stroke-width="5" stroke-linecap="round"/>'
     +'<path d="M72 104 q-18 -4 -22 -18 q16 0 22 18 Z" fill="'+G+'" '+th(2.5)+'/>'
     +flower(82,58,11,'#f6b6c8')
     +'<path d="M124 114 L156 62 L163 66 L131 118 Z" fill="#c9c2b8" '+st+'/>'
     +'<path d="M128 112 L178 84 L181 91 L132 118 Z" fill="#c9c2b8" '+st+'/>'
     +'<circle cx="114" cy="128" r="10" fill="none" stroke="'+R+'" stroke-width="6"/><circle cx="138" cy="132" r="10" fill="none" stroke="'+R+'" stroke-width="6"/>'
     +qb(170,34)),
    /* 情境 5：十八歲那年開始——生日蛋糕 18 */
    dg20260918a2_cake: svg(
      '<rect x="40" y="82" width="120" height="50" rx="6" fill="'+L+'" '+st+'/>'
     +'<path d="M40 92 V88 a6 6 0 0 1 6 -6 H154 a6 6 0 0 1 6 6 V92 q-10 10 -20 0 q-10 10 -20 0 q-10 10 -20 0 q-10 10 -20 0 q-10 10 -20 0 q-10 10 -20 0 Z" fill="#fff" '+st+'/>'
     +'<rect x="78" y="50" width="10" height="32" rx="2" fill="'+B+'" '+st+'/><rect x="112" y="50" width="10" height="32" rx="2" fill="'+R+'" '+st+'/>'
     +'<path d="M83 46 q-6 -8 0 -16 q6 8 0 16 Z M117 46 q-6 -8 0 -16 q6 8 0 16 Z" fill="'+Y+'" '+th(2)+'/>'
     +txt(100,124,'18',24,R)),
    /* 情境 6：開始的那一刻——起跑線上的方格旗 */
    dg20260918a2_flag: svg((function(){
      var g='<line x1="10" y1="132" x2="190" y2="132" '+st+'/>'
        +'<path d="M30 132 L50 112 M160 132 L140 112" fill="none" '+th(2.5)+'/>'
        +'<line x1="30" y1="122" x2="170" y2="122" stroke="'+R+'" stroke-width="5" stroke-dasharray="10 6"/>'
        +'<line x1="70" y1="20" x2="70" y2="132" '+th(5)+'/>'
        +'<rect x="70" y="22" width="80" height="48" fill="#fff" '+st+'/>';
      for(var r=0;r<3;r++) for(var c=0;c<5;c++) if((r+c)%2===0) g+='<rect x="'+(70+c*16)+'" y="'+(22+r*16)+'" width="16" height="16" fill="'+D+'"/>';
      return g+'<rect x="70" y="22" width="80" height="48" fill="none" '+st+'/>'; })()),
    /* 情境 7：三月就是我們的客人——集點卡 */
    dg20260918a2_stamp: svg((function(){
      var g='<rect x="22" y="32" width="156" height="94" rx="10" fill="#fff" '+st+'/><path d="M22 54 V42 a10 10 0 0 1 10 -10 H168 a10 10 0 0 1 10 10 V54 Z" fill="'+G+'" '+st+'/>';
      for(var i=0;i<10;i++){ var cx=44+(i%5)*28, cy=76+Math.floor(i/5)*30;
        g+= i<7 ? '<circle cx="'+cx+'" cy="'+cy+'" r="10" fill="'+R+'" '+th(2.5)+'/><circle cx="'+cx+'" cy="'+cy+'" r="4" fill="'+Y+'"/>'
                : '<circle cx="'+cx+'" cy="'+cy+'" r="10" fill="none" stroke="#c9c2b8" stroke-width="2.5" stroke-dasharray="4 3"/>'; }
      return g; })()),
    /* 情境 8：第一次來就愛上這家店——花束＋愛心 */
    dg20260918a2_bouquet: svg(
      '<path d="M76 84 L100 140 L124 84" fill="none" '+th(3)+'/>'
     +'<path d="M100 84 V120 M88 84 L98 120 M112 84 L102 120" stroke="'+G+'" stroke-width="4" stroke-linecap="round"/>'
     +flower(78,62,10,R)+flower(122,62,10,'#f6b6c8')+flower(100,44,10,Y)
     +'<path d="M74 92 L100 136 L126 92 Z" fill="'+L+'" '+st+'/><path d="M90 108 h20" '+th(3)+'/>'
     +'<path d="M162 48 c-8 -12 -26 -4 -18 10 l18 18 l18 -18 c8 -14 -10 -22 -18 -10 Z" fill="'+R+'" '+st+'/>'),
    /* 情境 9：三月是起點——三月的日曆頁＋往右的箭頭 */
    dg20260918a2_mar: svg(
      '<rect x="30" y="28" width="92" height="100" rx="10" fill="#fff" '+st+'/>'
     +'<path d="M30 54 V38 a10 10 0 0 1 10 -10 H112 a10 10 0 0 1 10 10 V54 Z" fill="'+R+'" '+st+'/>'
     +txt(76,100,'MAR',26)
     +'<path d="M134 78 H184" stroke="'+G+'" stroke-width="6" stroke-linecap="round"/><path d="M170 64 L186 78 L170 92" fill="none" stroke="'+G+'" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>'
     +chk(122,118,12))
  });
})();

/* ============================================================
   dg20260918a2 — For or Since? When or How Long?
   Grammar in Use Unit 12（For and since, When...? and How long...?）
   ============================================================ */
window.GVIDEO.dg20260918a2 = {
  kind: 'gram',
  date: '2026-09-18',
  title: 'For or Since? When or How Long?',
  titleCn: 'for 還是 since？When 還是 How long？',
  titleArt: ['dg20260918a2_start', 'dg20260918a2_length', 'dg20260918a2_howlong'],
  scene: '花店 At a flower shop',
  sceneArt: 'dg20260918a2_shop',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Lily', voice: 'f' },
    T: { name: 'Sam', voice: 'm' }
  },
  expr: {
    since: { t: 'since + 起點', cn: '從哪一刻開始', ex: "I've had this phone since June.", exCn: '我從六月就用這支手機了。', note: 'since Monday、since 2022、since last week' },
    for:   { t: 'for + 長度', cn: '一共有多長', ex: "We've lived here for five years.", exCn: '我們住在這裡五年了。', note: 'for two days、for ten years、for a long time' },
    q:     { t: 'When did…? / How long have…?', cn: '問哪一刻用過去式；問多久用現在完成式', ex: 'How long have you known Tina?', exCn: '你認識 Tina 多久了？', note: 'When 配 did；How long 配 have / has' }
  },
  chapters: [
    { cn: '開場' }, { cn: '起點還是長度？' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  /* 「現在」放在右邊：since 標起點，for 量到現在的長度 */
  timelineNow: 88,
  timeline: [
    { x: 16, art: 'dg20260918a2_start',  lab: 'since', who: '接一個起點' },
    { x: 52, art: 'dg20260918a2_length', lab: 'for',   who: '接一段長度', open: true }
  ],
  flow: [
    { q: '問的是哪一天開始的？', a: 'When',     en: 'When did + 主詞 + 原形？' },
    { q: '問的是到現在多久了？', a: 'How long', en: 'How long have + 主詞 + p.p.？' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: '講一件事做了多久，英文會用 for 或 since；問別人的時候，又分 When 和 How long。這支影片一次教你分清楚。', vis: { type: 'title' } },

    /* ---- 1 核心：起點還是長度？ ---- */
    { ch: 1, sp: 'N', zh: 'for 和 since 都在講「到現在多久了」，但後面接的東西不一樣。',
      vis: { type: 'timeline', show: 0, kick: 'Point or length? 起點還是長度？' } },
    { ch: 1, sp: 'N', zh: 'since 後面接一個起點，就是開始的那一刻，像星期一、2021 年。',
      hi: [{ t: 'since', k: 'since', c: 3 }], vis: { type: 'timeline', show: 1, pop: true, kick: 'Point or length? 起點還是長度？' } },
    { ch: 1, sp: 'A', en: "I've lived in Taipei since 2021.", cn: '我從 2021 年就住在台北。',
      hi: [{ t: 'since 2021', cn: '起點', k: 'since', c: 3 }], vis: { type: 'timeline', show: 1, lit: 0, kick: 'Point or length? 起點還是長度？' } },
    { ch: 1, sp: 'N', zh: 'for 後面接一段長度，就是一共多長，像兩天、五年。',
      hi: [{ t: 'for', k: 'for', c: 4 }], vis: { type: 'timeline', show: 2, pop: true, kick: 'Point or length? 起點還是長度？' } },
    { ch: 1, sp: 'T', en: "I've lived in Taipei for five years.", cn: '我住在台北五年了。',
      hi: [{ t: 'for five years', cn: '長度', k: 'for', c: 4 }], vis: { type: 'timeline', show: 2, lit: 1, kick: 'Point or length? 起點還是長度？' } },
    { ch: 1, sp: 'N', zh: '發現了嗎？兩句講的是同一件事：從 2021 年到現在，剛好五年。',
      vis: { type: 'timeline', show: 2, kick: 'Point or length? 起點還是長度？' } },
    { ch: 1, sp: 'N', zh: '問句也分兩種：How long 問的是整段多久，When 問的是開始那一刻。',
      hi: [{ t: 'How long', k: 'q', c: 4 }, { t: 'When', k: 'q', c: 3 }], vis: { type: 'timeline', show: 2, kick: 'Point or length? 起點還是長度？' } },
    { ch: 1, sp: 'A', en: 'How long have you been in Taipei?', cn: '你在台北多久了？',
      hi: [{ t: 'How long', cn: '問整段', k: 'q', c: 4 }], vis: { type: 'timeline', show: 2, lit: 1, kick: 'Point or length? 起點還是長度？' } },
    { ch: 1, sp: 'T', en: 'When did you move to Taipei?', cn: '你什麼時候搬到台北的？',
      hi: [{ t: 'When did', cn: '問那一刻', k: 'q', c: 3 }], vis: { type: 'timeline', show: 2, lit: 0, kick: 'Point or length? 起點還是長度？' } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: 'since 的句型：主詞加 have 或 has，再加過去分詞，最後放 since 和起點。',
      hi: [{ t: 'since', k: 'since', c: 3 }],
      vis: { type: 'pattern', kick: 'since + 起點', rows: [
        { lab: '從 2020', blocks: [{ t: 'We', k: 's' }, { t: 'have had', k: 'v' }, { t: 'this car', k: 'n' }, { t: 'since 2020', k: 'o' }] },
        { lab: '從星期一', blocks: [{ t: 'He', k: 's' }, { t: 'has been', k: 'v' }, { t: 'sick', k: 'n' }, { t: 'since Monday', k: 'o' }] }
      ] } },
    { ch: 2, sp: 'N', zh: 'for 的句型一樣，只是最後換成 for 加一段長度。',
      hi: [{ t: 'for', k: 'for', c: 4 }],
      vis: { type: 'pattern', kick: 'for + 長度', rows: [
        { lab: '六年', blocks: [{ t: 'We', k: 's' }, { t: 'have had', k: 'v' }, { t: 'this car', k: 'n' }, { t: 'for six years', k: 'o' }] },
        { lab: '三天', blocks: [{ t: 'He', k: 's' }, { t: 'has been', k: 'v' }, { t: 'sick', k: 'n' }, { t: 'for three days', k: 'o' }] }
      ], note: 'he / she / it 用 has' } },
    { ch: 2, sp: 'N', zh: '常見的組合記幾個：since 接星期幾、年份；for 接幾天、幾年。',
      vis: { type: 'family', kick: 'since 起點 · for 長度', core: 'since / for', coreCn: '後面接什麼？', art: 'dg20260918a2_start', items: [
        { t: 'since Monday', cn: '從星期一' }, { t: 'since 2020', cn: '從 2020 年' },
        { t: 'for two days', cn: '兩天' }, { t: 'for ten years', cn: '十年' }
      ] } },
    { ch: 2, sp: 'N', zh: '兩種問句也要記好：When 加 did，問哪一天；How long 加 have，問多久。',
      hi: [{ t: 'When', k: 'q', c: 3 }, { t: 'How long', k: 'q', c: 4 }],
      vis: { type: 'pattern', kick: 'When vs How long', rows: [
        { lab: '問哪一天', blocks: [{ t: 'When', k: 'x' }, { t: 'did', k: 'v' }, { t: 'you', k: 's' }, { t: 'start?', k: 'v' }] },
        { lab: '問多久',   blocks: [{ t: 'How long', k: 'x' }, { t: 'have', k: 'v' }, { t: 'you', k: 's' }, { t: 'worked here?', k: 'v' }] }
      ] } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: 'Lily 常去一家花店，今天她跟店員 Sam 聊天，聽聽他們怎麼用 for 和 since。', vis: { type: 'scene', art: 'dg20260918a2_shop' } },
    { ch: 3, sp: 'A', en: 'How long have you worked here, Sam?', cn: 'Sam，你在這裡工作多久了？',
      hi: [{ t: 'How long', cn: '問多久', k: 'q', c: 4 }], vis: { type: 'scene', art: 'dg20260918a2_can' } },
    { ch: 3, sp: 'T', en: "I've worked here for six years.", cn: '我在這裡工作六年了。',
      hi: [{ t: 'for six years', cn: '一段長度', k: 'for', c: 4 }], vis: { type: 'scene', art: 'dg20260918a2_six' } },
    { ch: 3, sp: 'N', zh: '六年是一段長度，所以 Sam 用 for。',
      hi: [{ t: 'for', k: 'for', c: 4 }], vis: { type: 'scene', art: 'dg20260918a2_span' } },
    { ch: 3, sp: 'A', en: 'So when did you start working with flowers?', cn: '那你什麼時候開始做花的？',
      hi: [{ t: 'when did', cn: '問那一刻', k: 'q', c: 3 }], vis: { type: 'scene', art: 'dg20260918a2_snip' } },
    { ch: 3, sp: 'T', en: 'I started at eighteen, right after high school.', cn: '我十八歲，高中一畢業就開始了。',
      hi: [{ t: 'started', cn: '過去那一刻', k: 'q', c: 3 }], vis: { type: 'scene', art: 'dg20260918a2_cake' } },
    { ch: 3, sp: 'N', zh: 'When 問的是開始的那一刻，那一刻已經過去了，所以用過去式 started。',
      hi: [{ t: 'started', k: 'q', c: 3 }], vis: { type: 'scene', art: 'dg20260918a2_flag' } },
    { ch: 3, sp: 'T', en: "You've been our customer since March, right?", cn: '你從三月就是我們的客人了，對吧？',
      hi: [{ t: 'since March', cn: '起點', k: 'since', c: 3 }], vis: { type: 'scene', art: 'dg20260918a2_stamp' } },
    { ch: 3, sp: 'A', en: "Yes! I've loved this shop since my first visit.", cn: '對！我第一次來就愛上這家店了。',
      hi: [{ t: 'since my first visit', cn: '起點', k: 'since', c: 3 }], vis: { type: 'scene', art: 'dg20260918a2_bouquet' } },
    { ch: 3, sp: 'N', zh: '三月和第一次來，都是開始的那一刻，所以兩句都用 since。',
      hi: [{ t: 'since', k: 'since', c: 3 }], vis: { type: 'scene', art: 'dg20260918a2_mar' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: 'Leo 九點就到圖書館，現在十一點了。同一件事，可以說起點，也可以說長度。',
      vis: { type: 'vs', sm: true, kick: 'since 起點 vs for 長度',
        a: { w: 'Leo has been at the library since nine.', def: 'Leo 從九點就在圖書館了。', cn: '九點是起點 → since' },
        b: { w: 'Leo has been at the library for two hours.', def: 'Leo 在圖書館兩個小時了。', cn: '兩小時是長度 → for' } } },
    { ch: 4, sp: 'A', en: 'Leo has been at the library since nine.', cn: 'Leo 從九點就在圖書館了。',
      hi: [{ t: 'since nine', cn: '起點', k: 'since', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: 'since 起點 vs for 長度',
        a: { w: 'Leo has been at the library since nine.', def: 'Leo 從九點就在圖書館了。', cn: '九點是起點 → since' },
        b: { w: 'Leo has been at the library for two hours.', def: 'Leo 在圖書館兩個小時了。', cn: '兩小時是長度 → for' } } },
    { ch: 4, sp: 'T', en: 'Leo has been at the library for two hours.', cn: 'Leo 在圖書館兩個小時了。',
      hi: [{ t: 'for two hours', cn: '長度', k: 'for', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: 'since 起點 vs for 長度',
        a: { w: 'Leo has been at the library since nine.', def: 'Leo 從九點就在圖書館了。', cn: '九點是起點 → since' },
        b: { w: 'Leo has been at the library for two hours.', def: 'Leo 在圖書館兩個小時了。', cn: '兩小時是長度 → for' } } },
    { ch: 4, sp: 'N', zh: '九點是一個點，用 since；兩個小時是一段，用 for。',
      vis: { type: 'vs', sm: true, kick: 'since 起點 vs for 長度',
        a: { w: 'Leo has been at the library since nine.', def: 'Leo 從九點就在圖書館了。', cn: '九點是起點 → since' },
        b: { w: 'Leo has been at the library for two hours.', def: 'Leo 在圖書館兩個小時了。', cn: '兩小時是長度 → for' } } },
    { ch: 4, sp: 'N', zh: '再看問句。同樣在問好朋友，一個問哪時候認識的，一個問認識多久了。',
      vis: { type: 'vs', sm: true, kick: 'When vs How long',
        a: { w: 'When did you meet your best friend?', def: '你什麼時候認識你最好的朋友的？', cn: '問那一刻 → 過去式' },
        b: { w: 'How long have you known your best friend?', def: '你認識你最好的朋友多久了？', cn: '問到現在多久 → 現在完成式' } } },
    { ch: 4, sp: 'A', en: 'When did you meet your best friend?', cn: '你什麼時候認識你最好的朋友的？',
      hi: [{ t: 'When did', cn: '問那一刻', k: 'q', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: 'When vs How long',
        a: { w: 'When did you meet your best friend?', def: '你什麼時候認識你最好的朋友的？', cn: '問那一刻 → 過去式' },
        b: { w: 'How long have you known your best friend?', def: '你認識你最好的朋友多久了？', cn: '問到現在多久 → 現在完成式' } } },
    { ch: 4, sp: 'T', en: 'How long have you known your best friend?', cn: '你認識你最好的朋友多久了？',
      hi: [{ t: 'How long have', cn: '問多久', k: 'q', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: 'When vs How long',
        a: { w: 'When did you meet your best friend?', def: '你什麼時候認識你最好的朋友的？', cn: '問那一刻 → 過去式' },
        b: { w: 'How long have you known your best friend?', def: '你認識你最好的朋友多久了？', cn: '問到現在多久 → 現在完成式' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '最後整理問句。開口問之前，先想清楚你要問哪一種。', vis: { type: 'flow', at: 0, kick: 'Which question? 要問哪一種？' } },
    { ch: 5, sp: 'N', zh: '第一種：問哪一天開始的，用 When，後面配過去式 did。',
      hi: [{ t: 'When', k: 'q', c: 3 }], vis: { type: 'flow', at: 1, kick: 'Which question? 要問哪一種？' } },
    { ch: 5, sp: 'A', en: 'When did you join the soccer team?', cn: '你什麼時候加入足球隊的？',
      hi: [{ t: 'When did', cn: '問那一刻', k: 'q', c: 3 }], vis: { type: 'flow', at: 1, kick: 'Which question? 要問哪一種？' } },
    { ch: 5, sp: 'T', en: 'I joined it last September.', cn: '我去年九月加入的。',
      hi: [{ t: 'joined', cn: '過去式', k: 'q', c: 3 }], vis: { type: 'flow', at: 1, kick: 'Which question? 要問哪一種？' } },
    { ch: 5, sp: 'N', zh: '第二種：問到現在多久了，用 How long，後面配現在完成式。',
      hi: [{ t: 'How long', k: 'q', c: 4 }], vis: { type: 'flow', at: 2, kick: 'Which question? 要問哪一種？' } },
    { ch: 5, sp: 'A', en: 'How long have you been on the team?', cn: '你在隊上多久了？',
      hi: [{ t: 'How long have', cn: '問多久', k: 'q', c: 4 }], vis: { type: 'flow', at: 2, kick: 'Which question? 要問哪一種？' } },
    { ch: 5, sp: 'T', en: "I've been on it for about a year.", cn: '大概一年了。',
      hi: [{ t: 'for about a year', cn: '長度', k: 'for', c: 4 }], vis: { type: 'flow', at: 2, kick: 'Which question? 要問哪一種？' } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說說看。看到中文情境，先自己用英文說出來，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：你從 2018 年就認識好朋友 Jenny 了。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '你從 2018 年就認識好朋友 Jenny 了。' } },
    { ch: 6, sp: 'A', en: "I've known Jenny since 2018.", cn: '我從 2018 年就認識 Jenny 了。',
      hi: [{ t: 'since 2018', cn: '起點 → since', k: 'since', c: 3 }],
      vis: { type: 'speak', n: 1, show: true, sit: '你從 2018 年就認識好朋友 Jenny 了。', a: "I've known Jenny since 2018." } },
    { ch: 6, sp: 'N', zh: '情境二：你養這隻貓已經兩年了。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '你養這隻貓已經兩年了。' } },
    { ch: 6, sp: 'T', en: "I've had my cat for two years.", cn: '我養這隻貓兩年了。',
      hi: [{ t: 'for two years', cn: '長度 → for', k: 'for', c: 4 }],
      vis: { type: 'speak', n: 2, show: true, sit: '你養這隻貓已經兩年了。', a: "I've had my cat for two years." } },
    { ch: 6, sp: 'N', zh: '情境三：你想問新同學，他是什麼時候來台灣的。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '你想問新同學，他是什麼時候來台灣的。' } },
    { ch: 6, sp: 'A', en: 'When did you come to Taiwan?', cn: '你什麼時候來台灣的？',
      hi: [{ t: 'When did', cn: '問那一刻 → 過去式', k: 'q', c: 3 }],
      vis: { type: 'speak', n: 3, show: true, sit: '你想問新同學，他是什麼時候來台灣的。', a: 'When did you come to Taiwan?' } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結一下：起點用 since，長度用 for；問哪一天用 When 加過去式，問多久用 How long 加現在完成式。',
      vis: { type: 'flow', at: 2, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '下次講多久之前，先想一想：我要說的是起點，還是長度？', vis: { type: 'end' } }
  ]
};
