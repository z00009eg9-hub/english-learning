/* ============================================================
   B2 Read 文法影片解說 — dg20260918b1p（Unit 13，B1+）
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
  /* 月曆格子的中心（跟 cal() 同一套座標） */
  var cell=function(x,y,w,h,r,c){ return [x+10+c*(w-20)/4+((w-20)/4-6)/2, y+30+r*(h-38)/3+((h-38)/3-6)/2]; };
  /* 啞鈴（cx,cy 中心，s 縮放） */
  var bell=function(cx,cy,s,rot){ return '<g transform="translate('+cx+' '+cy+') rotate('+(rot||0)+') scale('+s+')">'
      +'<rect x="-36" y="-5" width="72" height="10" rx="3" fill="#c9c2b8" '+st+'/>'
      +'<rect x="-48" y="-24" width="14" height="48" rx="4" fill="'+B+'" '+st+'/><rect x="34" y="-24" width="14" height="48" rx="4" fill="'+B+'" '+st+'/>'
      +'<rect x="-58" y="-16" width="10" height="32" rx="3" fill="'+B+'" '+st+'/><rect x="48" y="-16" width="10" height="32" rx="3" fill="'+B+'" '+st+'/></g>'; };

  Object.assign(window.GVIDEO_ART, {
    /* 時間框關上了：月曆每格打叉＋鎖上的鎖頭（過去簡單式） */
    dg20260918b1p_closed: svg((function(){
      var g=cal(18,30,112,100);
      for(var r=0;r<3;r++) for(var c=0;c<4;c++){ var p=cell(18,30,112,100,r,c);
        g+='<path d="M'+(p[0]-5)+' '+(p[1]-5)+' l10 10 M'+(p[0]+5)+' '+(p[1]-5)+' l-10 10" stroke="'+R+'" stroke-width="3" stroke-linecap="round"/>'; }
      return g+'<path d="M146 96 V82 a14 14 0 0 1 28 0 V96" fill="none" '+th(6)+'/>'
        +'<rect x="138" y="94" width="44" height="38" rx="6" fill="'+Y+'" '+st+'/><circle cx="160" cy="110" r="5" fill="'+D+'"/><rect x="158" y="112" width="4" height="10" fill="'+D+'"/>'; })()),
    /* 時間框還開著：只打勾了兩格，後面還空著＋打開的鎖頭（現在完成式） */
    dg20260918b1p_open: svg((function(){
      var g=cal(18,30,112,100);
      [[0,0],[0,1]].forEach(function(q){ var p=cell(18,30,112,100,q[0],q[1]);
        g+='<path d="M'+(p[0]-6)+' '+p[1]+' l4 5 l8 -9" fill="none" stroke="'+G+'" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>'; });
      return g+'<path d="M146 92 V70 a14 14 0 0 1 28 0 V76" fill="none" '+th(6)+'/>'
        +'<rect x="138" y="94" width="44" height="38" rx="6" fill="'+G+'" '+st+'/><circle cx="160" cy="110" r="5" fill="'+D+'"/><rect x="158" y="112" width="4" height="10" fill="'+D+'"/>'; })()),
    /* 只講現在的結果：裂掉的眼鏡 */
    dg20260918b1p_glasses: svg(
      '<path d="M40 70 L16 58 M160 70 L184 58" fill="none" '+th(4)+'/>'
     +'<circle cx="68" cy="80" r="28" fill="'+S+'" '+th(4)+'/><circle cx="132" cy="80" r="28" fill="'+S+'" '+th(4)+'/>'
     +'<path d="M96 76 q4 -8 8 0" fill="none" '+th(4)+'/>'
     +'<path d="M118 58 l9 14 l-7 9 l12 13 l-6 12" fill="none" '+th(2.5)+'/><path d="M127 72 l14 -4 M120 81 l-10 4" fill="none" '+th(2)+'/>'
     +'<path d="M120 128 l10 -6 l4 9 Z M146 132 l6 -8 l5 6 Z" fill="'+S+'" '+th(2)+'/>'),

    /* 情境 0：健身房——啞鈴、壺鈴、水壺 */
    dg20260918b1p_gym: svg(
      '<line x1="8" y1="134" x2="192" y2="134" '+st+'/>'
     +'<rect x="16" y="72" width="20" height="62" rx="6" fill="'+S+'" '+st+'/><rect x="20" y="62" width="12" height="10" rx="2" fill="'+B+'" '+st+'/>'
     +bell(92,118,0.9,0)
     +'<path d="M160 104 a12 14 0 0 1 24 0" fill="none" '+th(6)+'/><circle cx="172" cy="114" r="20" fill="'+R+'" '+st+'/>'
     +'<rect x="40" y="20" width="120" height="44" rx="6" fill="'+L+'" '+st+'/><path d="M58 50 l16 -16 l14 10 l18 -18 l16 12 l18 -10" fill="none" stroke="'+G+'" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>'),
    /* 情境 1：這星期練了幾次？——啞鈴＋問號 */
    dg20260918b1p_ask: svg(bell(88,88,1.15,-18)+qb(168,36)),
    /* 情境 2：到目前練了三次——一週七格，前三格打勾 */
    dg20260918b1p_week: svg((function(){
      var g='<rect x="10" y="40" width="180" height="70" rx="10" fill="#fff" '+st+'/><path d="M10 60 V50 a10 10 0 0 1 10 -10 H180 a10 10 0 0 1 10 10 V60 Z" fill="'+B+'" '+st+'/>';
      for(var i=0;i<7;i++){ var x=18+i*25; g+='<rect x="'+x+'" y="68" width="20" height="32" rx="4" fill="'+(i<3?'#e3f1e7':C)+'" '+th(2)+'/>'; if(i<3) g+=chk(x+10,84,9); }
      return g+bell(100,128,0.4,0); })()),
    /* 情境 3：so far——沙漏，沙還在往下流 */
    dg20260918b1p_hourglass: svg(
      '<path d="M70 28 H130 Q130 60 104 75 Q130 90 130 122 H70 Q70 90 96 75 Q70 60 70 28 Z" fill="'+S+'" '+st+'/>'
     +'<path d="M82 46 H118 Q112 60 100 69 Q88 60 82 46 Z" fill="'+Y+'"/><path d="M78 121 Q100 100 122 121 Z" fill="'+Y+'"/>'
     +'<line x1="100" y1="74" x2="100" y2="108" stroke="'+Y+'" stroke-width="3" stroke-dasharray="3 4"/>'
     +'<path d="M70 28 H130 Q130 60 104 75 Q130 90 130 122 H70 Q70 90 96 75 Q70 60 70 28 Z" fill="none" '+st+'/>'
     +'<rect x="58" y="16" width="84" height="12" rx="4" fill="'+A+'" '+st+'/><rect x="58" y="122" width="84" height="12" rx="4" fill="'+A+'" '+st+'/>'
     +'<path d="M156 60 a24 24 0 1 1 -6 32" fill="none" stroke="'+G+'" stroke-width="5" stroke-linecap="round"/><path d="M144 88 l6 6 l8 -4" fill="none" stroke="'+G+'" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>'),
    /* 情境 4：上次用跑步機是什麼時候？——跑步機＋問號 */
    dg20260918b1p_treadmill: svg(
      '<line x1="8" y1="134" x2="192" y2="134" '+st+'/>'
     +'<line x1="150" y1="112" x2="164" y2="56" '+th(6)+'/><line x1="160" y1="70" x2="124" y2="74" '+th(5)+'/>'
     +'<rect x="146" y="38" width="40" height="20" rx="4" fill="'+S+'" '+st+'/>'
     +'<rect x="22" y="108" width="146" height="18" rx="9" fill="#6b5d50" '+st+'/>'
     +'<circle cx="34" cy="117" r="5" fill="#c9c2b8"/><circle cx="156" cy="117" r="5" fill="#c9c2b8"/>'
     +'<line x1="44" y1="108" x2="144" y2="108" stroke="'+Y+'" stroke-width="3" stroke-dasharray="8 8"/>'
     +qb(42,44)),
    /* 情境 5：星期二早上——日曆頁 TUE＋早晨太陽 */
    dg20260918b1p_tue: svg(
      '<rect x="40" y="26" width="104" height="104" rx="10" fill="#fff" '+st+'/>'
     +'<path d="M40 52 V36 a10 10 0 0 1 10 -10 H134 a10 10 0 0 1 10 10 V52 Z" fill="'+R+'" '+st+'/>'
     +txt(92,98,'TUE',30)
     +'<circle cx="166" cy="50" r="14" fill="'+Y+'" '+st+'/>'
     +'<g '+th(3)+'><line x1="166" y1="24" x2="166" y2="30"/><line x1="186" y1="50" x2="192" y2="50"/><line x1="182" y1="34" x2="186" y2="30"/><line x1="182" y1="66" x2="186" y2="70"/></g>'),
    /* 情境 6：那一天已經翻過去了——撕下來飄走的日曆頁 */
    dg20260918b1p_torn: svg(
      '<rect x="22" y="44" width="92" height="92" rx="6" fill="#fff" '+st+'/>'
     +'<path d="M22 66 V50 a6 6 0 0 1 6 -6 H108 a6 6 0 0 1 6 6 V66 Z" fill="'+R+'" '+st+'/>'
     +'<path d="M30 76 l6 4 l6 -4 l6 4 l6 -4 l6 4 l6 -4 l6 4 l6 -4 l6 4 l6 -4" fill="none" '+th(2)+'/>'
     +'<g transform="rotate(18 150 80)"><path d="M118 52 l6 4 l6 -4 l6 4 l6 -4 l6 4 l6 -4 l6 4 l6 -4 l6 4 l4 -2 V118 H118 Z" fill="#fff" '+st+'/>'+txt(150,94,'TUE',18,'#9a8f84')+'</g>'
     +'<path d="M168 30 q10 -6 18 2 M176 140 q8 -4 14 2" fill="none" '+th(2.5)+'/>'),
    /* 情境 7：背痛不見了——痠痛貼布丟進垃圾桶 */
    dg20260918b1p_patch: svg(
      '<path d="M112 70 H176 L168 136 H120 Z" fill="#c9c2b8" '+st+'/><rect x="106" y="60" width="76" height="12" rx="4" fill="#a59c91" '+st+'/>'
     +'<path d="M132 84 V124 M144 84 V124 M156 84 V124" '+th(2.5)+'/>'
     +'<g transform="rotate(-24 62 52)"><rect x="24" y="36" width="76" height="34" rx="8" fill="'+L+'" '+st+'/><rect x="48" y="42" width="28" height="22" rx="4" fill="#fff" '+th(2)+'/></g>'
     +'<path d="M96 66 q16 -6 22 6" fill="none" stroke="'+A+'" stroke-width="3" stroke-dasharray="4 5" stroke-linecap="round"/>'
     +chk(40,116,16)),
    /* 情境 8：伸展真的有幫助——瑜伽墊＋水壺 */
    dg20260918b1p_mat: svg(
      '<line x1="8" y1="134" x2="192" y2="134" '+st+'/>'
     +'<rect x="22" y="124" width="132" height="10" rx="3" fill="'+G+'" '+st+'/>'
     +'<circle cx="154" cy="114" r="20" fill="'+G+'" '+st+'/><circle cx="154" cy="114" r="11" fill="none" stroke="#fff" stroke-width="3"/><circle cx="154" cy="114" r="3" fill="'+D+'"/>'
     
     +'<rect x="48" y="64" width="22" height="58" rx="7" fill="'+S+'" '+st+'/><rect x="52" y="54" width="14" height="10" rx="2" fill="'+B+'" '+st+'/>'
     +'<path d="M96 46 l6 -16 l6 16 l16 6 l-16 6 l-6 16 l-6 -16 l-16 -6 Z" fill="'+Y+'" '+th(2.5)+'/>'
     +'<path d="M150 40 l4 -10 l4 10 l10 4 l-10 4 l-4 10 l-4 -10 l-10 -4 Z" fill="'+Y+'" '+th(2)+'/>'),
    /* 情境 9：現在不痛了——笑臉＋打勾 */
    dg20260918b1p_smile: svg(
      '<circle cx="90" cy="78" r="50" fill="'+Y+'" '+th(4)+'/>'
     +'<path d="M70 66 q6 -8 12 0 M98 66 q6 -8 12 0" fill="none" '+th(4)+'/>'
     +'<path d="M64 88 q26 30 52 0 Z" fill="#fff" '+st+'/>'
     +'<circle cx="62" cy="86" r="6" fill="#f2a3a0"/><circle cx="118" cy="86" r="6" fill="#f2a3a0"/>'
     +chk(156,40,18))
  });
})();

/* ============================================================
   dg20260918b1p — Is the Time Frame Closed?
   Grammar in Use Unit 13（Present perfect and past 1）＋時間訊號
   ============================================================ */
window.GVIDEO.dg20260918b1p = {
  kind: 'gram',
  date: '2026-09-18',
  title: 'Is the Time Frame Closed?',
  titleCn: '時間框關上了沒？現在完成式 vs 過去簡單式',
  titleArt: ['dg20260918b1p_closed', 'dg20260918b1p_open', 'dg20260918b1p_glasses'],
  scene: '健身房 At the gym',
  sceneArt: 'dg20260918b1p_gym',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Nora', voice: 'f' },
    T: { name: 'Owen', voice: 'm' }
  },
  expr: {
    past: { t: 'V-ed + 過去時間', cn: '時間框已經關上 → 過去簡單式', ex: 'I fixed the printer two days ago.', exCn: '我兩天前把印表機修好了。', note: 'yesterday、last week、in 2020、ago 都是關上的框' },
    open: { t: 'have / has + p.p. + this week', cn: '時間框還開著 → 現在完成式', ex: "We've had three meetings this week.", exCn: '我們這星期已經開了三次會。', note: 'today、this week、this year、so far 都還沒結束' },
    res:  { t: 'have / has + p.p.（不說時間）', cn: '只講現在的結果 → 現在完成式', ex: 'Someone has taken my umbrella.', exCn: '有人把我的雨傘拿走了。', note: '一補上明確的過去時間，就要改回過去式' }
  },
  chapters: [
    { cn: '開場' }, { cn: '先問：時間框關上了沒？' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  /* 「現在」放在右邊，項目都在現在的左邊 */
  timelineNow: 90,
  timeline: [
    { x: 16, art: 'dg20260918b1p_closed',  lab: '過去簡單式', who: '框已經關上' },
    { x: 44, art: 'dg20260918b1p_open',    lab: '現在完成式', who: '框還開著', open: true },
    { x: 70, art: 'dg20260918b1p_glasses', lab: '現在完成式', who: '只看結果' }
  ],
  flow: [
    { q: '句子裡有已經結束的時間嗎？', a: '過去簡單式', en: '主詞 + V-ed + 過去時間' },
    { q: '時間還沒結束，像今天、這星期？', a: '現在完成式', en: '主詞 + have/has + p.p. + 時間' },
    { q: '沒說時間，只講現在的結果？', a: '現在完成式', en: '主詞 + have/has + p.p.' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: '中文一句「已經」，英文有時候用過去式，有時候用現在完成式。這支影片教你看時間框來分辨。', vis: { type: 'title' } },

    /* ---- 1 核心：時間框關上了沒？ ---- */
    { ch: 1, sp: 'N', zh: '判斷之前，先問一句：句子裡的那段時間，關上了沒有？',
      vis: { type: 'timeline', show: 0, kick: 'Is the frame closed? 時間框關上了沒？' } },
    { ch: 1, sp: 'N', zh: '像 yesterday、last week、two days ago，那段時間已經過去、關起來了，就用過去簡單式。',
      hi: [{ t: '過去簡單式', k: 'past', c: 3 }], vis: { type: 'timeline', show: 1, pop: true, kick: 'Is the frame closed? 時間框關上了沒？' } },
    { ch: 1, sp: 'A', en: 'I watched that cooking show last night.', cn: '我昨天晚上看了那個烹飪節目。',
      hi: [{ t: 'watched', cn: '昨晚已經過去', k: 'past', c: 3 }], vis: { type: 'timeline', show: 1, lit: 0, kick: 'Is the frame closed? 時間框關上了沒？' } },
    { ch: 1, sp: 'N', zh: '如果是 today、this week、this year，這段時間還在跑、還沒結束，就用現在完成式。',
      hi: [{ t: '現在完成式', k: 'open', c: 4 }], vis: { type: 'timeline', show: 2, pop: true, kick: 'Is the frame closed? 時間框關上了沒？' } },
    { ch: 1, sp: 'T', en: "I've watched two episodes today.", cn: '我今天已經看了兩集。',
      hi: [{ t: "I've watched", cn: '今天還沒過完', k: 'open', c: 4 }], vis: { type: 'timeline', show: 2, lit: 1, kick: 'Is the frame closed? 時間框關上了沒？' } },
    { ch: 1, sp: 'N', zh: '今天還沒過完，到現在為止看了兩集，等一下說不定還會再看。',
      vis: { type: 'timeline', show: 2, dec: true, decText: '這段時間還沒結束', kick: 'Is the frame closed? 時間框關上了沒？' } },
    { ch: 1, sp: 'N', zh: '還有第三種：根本沒說時間，你在乎的是現在的結果，也用現在完成式。',
      hi: [{ t: '現在的結果', k: 'res', c: 2 }], vis: { type: 'timeline', show: 3, pop: true, kick: 'Is the frame closed? 時間框關上了沒？' } },
    { ch: 1, sp: 'A', en: "Oh no, I've broken my glasses.", cn: '糟了，我把眼鏡弄壞了。',
      hi: [{ t: "I've broken", cn: '現在的結果', k: 'res', c: 2 }], vis: { type: 'timeline', show: 3, lit: 2, kick: 'Is the frame closed? 時間框關上了沒？' } },
    { ch: 1, sp: 'N', zh: '重點不是哪時候壞的，而是她現在看不清楚。補上過去的時間，就要改回過去式。',
      vis: { type: 'timeline', show: 3, kick: 'Is the frame closed? 時間框關上了沒？' } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: '過去簡單式的句型：主詞加動詞過去式，後面常常跟著一個已經結束的時間。',
      hi: [{ t: '過去簡單式', k: 'past', c: 3 }],
      vis: { type: 'pattern', kick: 'Past simple 過去簡單式', rows: [
        { lab: '昨天',   blocks: [{ t: 'She', k: 's' }, { t: 'called', k: 'v' }, { t: 'her landlord', k: 'n' }, { t: 'yesterday', k: 'o' }] },
        { lab: '三天前', blocks: [{ t: 'We', k: 's' }, { t: 'moved', k: 'v' }, { t: 'the sofa', k: 'n' }, { t: 'three days ago', k: 'o' }] }
      ] } },
    { ch: 2, sp: 'N', zh: '現在完成式的句型：主詞加 have 或 has，再加過去分詞；時間要選還沒結束的。',
      hi: [{ t: '現在完成式', k: 'open', c: 4 }],
      vis: { type: 'pattern', kick: 'Present perfect 現在完成式', rows: [
        { lab: '今天',   blocks: [{ t: 'I', k: 's' }, { t: 'have sent', k: 'v' }, { t: 'five texts', k: 'n' }, { t: 'today', k: 'o' }] },
        { lab: '這個月', blocks: [{ t: 'It', k: 's' }, { t: 'has rained', k: 'v' }, { t: 'a lot', k: 'n' }, { t: 'this month', k: 'o' }] }
      ], note: '主詞是 he / she / it，用 has' } },
    { ch: 2, sp: 'N', zh: '時間訊號記這兩組就好：關上的有 yesterday、last week、ago；還開著的有 today、this week、so far。',
      vis: { type: 'family', kick: 'Time words 時間訊號', core: 'Time words', coreCn: '先看時間詞', art: 'dg20260918b1p_closed', items: [
        { t: 'yesterday · last week', cn: '關上了 → 過去式' }, { t: 'in 2020 · two days ago', cn: '關上了 → 過去式' },
        { t: 'today · this week', cn: '還開著 → 完成式' }, { t: 'so far · this year', cn: '還開著 → 完成式' }
      ] } },
    { ch: 2, sp: 'N', zh: '同一件事，一加上過去的時間，時態就要跟著換。',
      vis: { type: 'pattern', kick: '加上時間 Add a time', rows: [
        { lab: '只講結果', blocks: [{ t: "I've cut my finger", k: 'v' }] },
        { lab: '加了昨天', blocks: [{ t: 'I cut my finger', k: 'v' }, { t: 'yesterday', k: 'o', add: true }] }
      ], note: '時間框一關上，have 就要拿掉' } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: '健身教練 Nora 正在跟會員 Owen 聊這星期的狀況，聽聽他們怎麼切換時態。', vis: { type: 'scene', art: 'dg20260918b1p_gym' } },
    { ch: 3, sp: 'A', en: 'How many times have you trained this week?', cn: '你這星期練了幾次？',
      hi: [{ t: 'have you trained', cn: '這星期還沒過完', k: 'open', c: 4 }], vis: { type: 'scene', art: 'dg20260918b1p_ask' } },
    { ch: 3, sp: 'T', en: "I've trained three times so far.", cn: '到目前為止練了三次。',
      hi: [{ t: "I've trained", cn: '到現在為止', k: 'open', c: 4 }], vis: { type: 'scene', art: 'dg20260918b1p_week' } },
    { ch: 3, sp: 'N', zh: '這星期還沒過完，so far 也是到現在為止，所以兩人都用現在完成式。',
      hi: [{ t: 'so far', k: 'open', c: 4 }], vis: { type: 'scene', art: 'dg20260918b1p_hourglass' } },
    { ch: 3, sp: 'A', en: 'Nice. When did you last use the treadmill?', cn: '很好。你上次用跑步機是什麼時候？',
      hi: [{ t: 'When did you', cn: '問過去的時間點', k: 'past', c: 3 }], vis: { type: 'scene', art: 'dg20260918b1p_treadmill' } },
    { ch: 3, sp: 'T', en: 'I used it on Tuesday morning.', cn: '星期二早上用的。',
      hi: [{ t: 'used', cn: '星期二已經過去', k: 'past', c: 3 }], vis: { type: 'scene', art: 'dg20260918b1p_tue' } },
    { ch: 3, sp: 'N', zh: 'When 問過去的時間點，回答也有星期二早上，那段時間關上了，所以用過去式。',
      hi: [{ t: '過去式', k: 'past', c: 3 }], vis: { type: 'scene', art: 'dg20260918b1p_torn' } },
    { ch: 3, sp: 'T', en: 'Oh, and my back pain has gone!', cn: '喔，還有，我的背痛不見了！',
      hi: [{ t: 'has gone', cn: '現在不痛了', k: 'res', c: 2 }], vis: { type: 'scene', art: 'dg20260918b1p_patch' } },
    { ch: 3, sp: 'A', en: 'Great news. The stretching has really helped.', cn: '真是好消息，伸展真的有幫助。',
      hi: [{ t: 'has really helped', cn: '看得到效果', k: 'res', c: 2 }], vis: { type: 'scene', art: 'dg20260918b1p_mat' } },
    { ch: 3, sp: 'N', zh: 'Owen 沒說背痛是哪一天好的，他在乎的是現在不痛了，所以用 has gone。',
      hi: [{ t: 'has gone', k: 'res', c: 2 }], vis: { type: 'scene', art: 'dg20260918b1p_smile' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '同樣是打電話給媽媽，時間框一換，時態就跟著換。',
      vis: { type: 'vs', sm: true, kick: '關上了 vs 還開著',
        a: { w: 'I called my mom yesterday.', def: '我昨天打了電話給我媽。', cn: '昨天已經過去 → 過去簡單式' },
        b: { w: "I've called my mom twice today.", def: '我今天已經打給我媽兩次了。', cn: '今天還沒過完 → 現在完成式' } } },
    { ch: 4, sp: 'A', en: 'I called my mom yesterday.', cn: '我昨天打了電話給我媽。',
      hi: [{ t: 'called', cn: '昨天', k: 'past', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '關上了 vs 還開著',
        a: { w: 'I called my mom yesterday.', def: '我昨天打了電話給我媽。', cn: '昨天已經過去 → 過去簡單式' },
        b: { w: "I've called my mom twice today.", def: '我今天已經打給我媽兩次了。', cn: '今天還沒過完 → 現在完成式' } } },
    { ch: 4, sp: 'T', en: "I've called my mom twice today.", cn: '我今天已經打給我媽兩次了。',
      hi: [{ t: "I've called", cn: '今天還開著', k: 'open', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '關上了 vs 還開著',
        a: { w: 'I called my mom yesterday.', def: '我昨天打了電話給我媽。', cn: '昨天已經過去 → 過去簡單式' },
        b: { w: "I've called my mom twice today.", def: '我今天已經打給我媽兩次了。', cn: '今天還沒過完 → 現在完成式' } } },
    { ch: 4, sp: 'N', zh: '昨天已經結束，用 called；今天還沒過完，晚上可能還會再打，用完成式。',
      vis: { type: 'vs', sm: true, kick: '關上了 vs 還開著',
        a: { w: 'I called my mom yesterday.', def: '我昨天打了電話給我媽。', cn: '昨天已經過去 → 過去簡單式' },
        b: { w: "I've called my mom twice today.", def: '我今天已經打給我媽兩次了。', cn: '今天還沒過完 → 現在完成式' } } },
    { ch: 4, sp: 'N', zh: '再看一組。左邊說了上週末，右邊不提時間，只讓你看到廚房現在是新的。',
      vis: { type: 'vs', sm: true, kick: '有時間 vs 沒時間',
        a: { w: 'We painted the kitchen last weekend.', def: '我們上週末油漆了廚房。', cn: '有過去的時間 → 過去簡單式' },
        b: { w: "We've painted the kitchen.", def: '我們把廚房漆好了。', cn: '只講現在的結果 → 現在完成式' } } },
    { ch: 4, sp: 'A', en: 'We painted the kitchen last weekend.', cn: '我們上週末油漆了廚房。',
      hi: [{ t: 'painted', cn: '上週末', k: 'past', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '有時間 vs 沒時間',
        a: { w: 'We painted the kitchen last weekend.', def: '我們上週末油漆了廚房。', cn: '有過去的時間 → 過去簡單式' },
        b: { w: "We've painted the kitchen.", def: '我們把廚房漆好了。', cn: '只講現在的結果 → 現在完成式' } } },
    { ch: 4, sp: 'T', en: "We've painted the kitchen.", cn: '我們把廚房漆好了。',
      hi: [{ t: "We've painted", cn: '現在的結果', k: 'res', c: 2 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '有時間 vs 沒時間',
        a: { w: 'We painted the kitchen last weekend.', def: '我們上週末油漆了廚房。', cn: '有過去的時間 → 過去簡單式' },
        b: { w: "We've painted the kitchen.", def: '我們把廚房漆好了。', cn: '只講現在的結果 → 現在完成式' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '最後給你一個判斷流程。想說「已經」時，照順序問三個問題。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一問：句子裡有已經結束的時間嗎？有的話，用過去簡單式。',
      hi: [{ t: '過去簡單式', k: 'past', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'A', en: 'The meeting ended an hour ago.', cn: '會議一個小時前結束了。',
      hi: [{ t: 'ended', cn: 'ago 已經關上', k: 'past', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二問：時間還沒結束嗎？像今天、這星期、今年，就用現在完成式。',
      hi: [{ t: '現在完成式', k: 'open', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'T', en: "We've had a lot of rain this year.", cn: '今年雨下得很多。',
      hi: [{ t: "We've had", cn: '今年還沒過完', k: 'open', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '第三問：沒說時間，只想講現在的結果嗎？一樣用現在完成式。',
      hi: [{ t: '現在的結果', k: 'res', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'A', en: 'The rain has stopped, so we can go out.', cn: '雨停了，我們可以出門了。',
      hi: [{ t: 'has stopped', cn: '現在的結果', k: 'res', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說說看。看到中文情境，先自己用英文說出來，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：你想告訴朋友，昨天晚上雨下得很大。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '你想告訴朋友，昨天晚上雨下得很大。' } },
    { ch: 6, sp: 'A', en: 'It rained really hard last night.', cn: '昨天晚上雨下得好大。',
      hi: [{ t: 'rained', cn: '昨晚關上了 → 過去式', k: 'past', c: 3 }],
      vis: { type: 'speak', n: 1, show: true, sit: '你想告訴朋友，昨天晚上雨下得很大。', a: 'It rained really hard last night.' } },
    { ch: 6, sp: 'N', zh: '情境二：今天還沒結束，你已經走了一萬步。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '今天還沒結束，你已經走了一萬步。' } },
    { ch: 6, sp: 'T', en: "I've walked ten thousand steps today.", cn: '我今天已經走了一萬步。',
      hi: [{ t: "I've walked", cn: '今天還開著 → 完成式', k: 'open', c: 4 }],
      vis: { type: 'speak', n: 2, show: true, sit: '今天還沒結束，你已經走了一萬步。', a: "I've walked ten thousand steps today." } },
    { ch: 6, sp: 'N', zh: '情境三：你出門忘了帶錢包，想跟朋友說你現在身上沒錢包。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '你出門忘了帶錢包，想跟朋友說你現在身上沒錢包。' } },
    { ch: 6, sp: 'A', en: "I've forgotten my wallet.", cn: '我忘了帶錢包。',
      hi: [{ t: "I've forgotten", cn: '現在的結果 → 完成式', k: 'res', c: 2 }],
      vis: { type: 'speak', n: 3, show: true, sit: '你出門忘了帶錢包，想跟朋友說你現在身上沒錢包。', a: "I've forgotten my wallet." } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結一下：時間框關上了，用過去簡單式；還開著，或根本沒說時間、只講結果，就用現在完成式。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '下次想說「已經」之前，先問一句：那段時間關上了沒？', vis: { type: 'end' } }
  ]
};
