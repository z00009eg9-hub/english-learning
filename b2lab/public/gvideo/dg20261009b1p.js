/* ============================================================
   B2 Read 文法影片解說 — dg20261009b1p（B1+）
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
  var f=function(n){ return Math.round(n*10)/10; };
  /* 時鐘：clk(圓心x, 圓心y, 半徑, 時, 分) */
  var clk=function(cx,cy,r,h,m){
    var g='<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="#fff" '+st+'/>';
    for(var i=0;i<12;i++){ var a=i*Math.PI/6;
      g+='<line x1="'+f(cx+Math.sin(a)*r*0.76)+'" y1="'+f(cy-Math.cos(a)*r*0.76)+'" x2="'+f(cx+Math.sin(a)*r*0.88)+'" y2="'+f(cy-Math.cos(a)*r*0.88)+'" '+th(i%3?2:3)+'/>'; }
    var ha=((h%12)+m/60)*Math.PI/6, ma=m*Math.PI/30;
    g+='<line x1="'+cx+'" y1="'+cy+'" x2="'+f(cx+Math.sin(ma)*r*0.7)+'" y2="'+f(cy-Math.cos(ma)*r*0.7)+'" '+th(3.5)+'/>';
    g+='<line x1="'+cx+'" y1="'+cy+'" x2="'+f(cx+Math.sin(ha)*r*0.48)+'" y2="'+f(cy-Math.cos(ha)*r*0.48)+'" stroke="'+A+'" stroke-width="'+f(Math.max(3,r/8))+'" stroke-linecap="round"/>';
    return g+'<circle cx="'+cx+'" cy="'+cy+'" r="'+f(Math.max(2.5,r/11))+'" fill="'+D+'"/>'; };
  var face=function(cx,cy,r,col){ return '<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="'+col+'" '+st+'/>'
    +'<circle cx="'+f(cx-r*0.35)+'" cy="'+f(cy-r*0.1)+'" r="'+f(Math.max(2.2,r*0.1))+'" fill="'+D+'"/><circle cx="'+f(cx+r*0.35)+'" cy="'+f(cy-r*0.1)+'" r="'+f(Math.max(2.2,r*0.1))+'" fill="'+D+'"/>'
    +'<path d="M'+f(cx-r*0.32)+' '+f(cy+r*0.3)+' q'+f(r*0.32)+' '+f(r*0.28)+' '+f(r*0.64)+' 0" fill="none" '+th(2.5)+'/>'; };

  Object.assign(window.GVIDEO_ART, {
    /* 公告的時程：公布欄上的班表＋時鐘（現在簡單式） */
    dg20261009b1p_schedule: svg(
      '<rect x="24" y="44" width="152" height="94" rx="6" fill="#c98f52" '+st+'/>'
     +'<rect x="33" y="53" width="134" height="76" rx="3" fill="#e2b77f"/>'
     +'<rect x="42" y="60" width="50" height="62" fill="#fff" '+th(2.5)+'/>'
     +'<g stroke="'+L+'" stroke-width="4" stroke-linecap="round"><line x1="50" y1="74" x2="84" y2="74"/><line x1="50" y1="88" x2="84" y2="88"/><line x1="50" y1="102" x2="76" y2="102"/></g>'
     +'<rect x="104" y="62" width="54" height="30" fill="'+Y+'" '+th(2.5)+'/><rect x="108" y="98" width="44" height="26" fill="'+S+'" '+th(2.5)+'/>'
     +'<circle cx="67" cy="62" r="4" fill="'+R+'" '+th(2)+'/><circle cx="131" cy="64" r="4" fill="'+B+'" '+th(2)+'/><circle cx="130" cy="100" r="4" fill="'+G+'" '+th(2)+'/>'
     +clk(100,24,18,8,30)),
    /* 談好的安排：筆電行事曆上的一格會議＋打勾（現在進行式） */
    dg20261009b1p_meeting: svg(
      '<rect x="36" y="22" width="128" height="84" rx="6" fill="'+D+'" '+st+'/><rect x="44" y="30" width="112" height="68" rx="2" fill="#fff"/>'
     +'<rect x="44" y="30" width="112" height="12" fill="'+B+'"/>'
     +'<g stroke="'+L+'" stroke-width="2"><line x1="66" y1="42" x2="66" y2="98"/><line x1="88" y1="42" x2="88" y2="98"/><line x1="110" y1="42" x2="110" y2="98"/><line x1="132" y1="42" x2="132" y2="98"/><line x1="44" y1="70" x2="156" y2="70"/></g>'
     +'<rect x="90" y="52" width="18" height="34" rx="3" fill="'+G+'"/>'
     +'<path d="M22 106 H178 L170 122 H30 Z" fill="#c9c2b8" '+st+'/>'
     +chk(172,30,15)),
    /* 還沒定：叉路路標＋問號（will） */
    dg20261009b1p_maybe: svg(
      '<line x1="8" y1="138" x2="192" y2="138" '+st+'/>'
     +'<rect x="94" y="40" width="12" height="98" fill="#9a6a3c" '+st+'/>'
     +'<path d="M36 46 H120 L134 59 L120 72 H36 Z" fill="'+B+'" '+st+'/>'
     +'<path d="M164 82 H80 L66 95 L80 108 H164 Z" fill="'+G+'" '+st+'/>'
     +qb(162,28)),

    /* 情境 1：辦公室座位 */
    dg20261009b1p_office: svg(
      '<rect x="120" y="14" width="64" height="50" rx="4" fill="'+S+'" '+st+'/><line x1="152" y1="14" x2="152" y2="64" '+th(2.5)+'/>'
     +'<line x1="28" y1="104" x2="28" y2="140" '+th(4)+'/><line x1="172" y1="104" x2="172" y2="140" '+th(4)+'/>'
     +'<rect x="16" y="94" width="168" height="10" fill="#c98f52" '+st+'/>'
     +'<rect x="40" y="44" width="70" height="44" rx="4" fill="'+D+'" '+st+'/><rect x="46" y="50" width="58" height="32" fill="'+S+'"/>'
     +'<path d="M70 88 h10 l4 6 h-18 Z" fill="#c9c2b8" '+th(2.5)+'/>'
     +'<rect x="116" y="78" width="14" height="16" rx="2" fill="#fff" '+th(2.5)+'/>'
     +'<path d="M154 74 q-14 -12 -10 -28 q10 10 10 28 q4 -20 16 -26 q0 18 -16 26" fill="'+G+'" '+th(2.5)+'/>'
     +'<path d="M140 94 L144 74 H164 L168 94 Z" fill="'+A+'" '+st+'/>'),
    /* 情境 2：我星期一要做什麼？——新人識別證＋問號 */
    dg20261009b1p_badgeq: svg(
      '<path d="M70 8 L92 60 M130 8 L108 60" fill="none" stroke="'+B+'" stroke-width="6" stroke-linecap="round"/>'
     +'<rect x="68" y="58" width="64" height="84" rx="8" fill="#fff" '+st+'/>'
     +'<rect x="82" y="70" width="36" height="36" rx="4" fill="'+S+'" '+th(2.5)+'/>'
     +'<circle cx="100" cy="84" r="7" fill="'+L+'" '+th(2.5)+'/><path d="M88 106 a12 10 0 0 1 24 0" fill="'+B+'" '+th(2.5)+'/>'
     +'<g stroke="'+L+'" stroke-width="5" stroke-linecap="round"><line x1="80" y1="118" x2="120" y2="118"/><line x1="86" y1="130" x2="114" y2="130"/></g>'
     +qb(164,44)),
    /* 情境 3：跟陳先生在檢測室——試管架＋燒瓶 */
    dg20261009b1p_lab: svg(
      '<path d="M36 40 V104 a8 8 0 0 0 16 0 V40" fill="#fff" '+st+'/><path d="M39 74 V104 a5 5 0 0 0 10 0 V74 Z" fill="'+B+'"/>'
     +'<path d="M62 40 V104 a8 8 0 0 0 16 0 V40" fill="#fff" '+st+'/><path d="M65 64 V104 a5 5 0 0 0 10 0 V64 Z" fill="'+G+'"/>'
     +'<path d="M88 40 V104 a8 8 0 0 0 16 0 V40" fill="#fff" '+st+'/><path d="M91 82 V104 a5 5 0 0 0 10 0 V82 Z" fill="'+R+'"/>'
     +'<rect x="26" y="84" width="88" height="10" rx="2" fill="#c98f52" '+st+'/>'
     +'<line x1="32" y1="94" x2="32" y2="134" '+th(4)+'/><line x1="108" y1="94" x2="108" y2="134" '+th(4)+'/><line x1="20" y1="134" x2="120" y2="134" '+st+'/>'
     +'<path d="M144 34 V64 L120 120 a8 8 0 0 0 7 12 H175 a8 8 0 0 0 7 -12 L158 64 V34 Z" fill="#fff" '+st+'/>'
     +'<path d="M132 94 H170 L180 118 a5 5 0 0 1 -5 8 H127 a5 5 0 0 1 -5 -8 Z" fill="'+Y+'"/>'
     +'<path d="M144 34 V64 L120 120 a8 8 0 0 0 7 12 H175 a8 8 0 0 0 7 -12 L158 64 V34 Z" fill="none" '+st+'/>'
     +'<rect x="138" y="26" width="26" height="8" rx="2" fill="#c9c2b8" '+st+'/>'),
    /* 情境 4：主管早就跟陳先生講好了——兩個人＋中間打勾的行事曆 */
    dg20261009b1p_agreed: svg(
      '<path d="M14 138 a26 26 0 0 1 52 0 Z" fill="'+B+'" '+st+'/>'+face(40,82,22,Y)
     +'<path d="M134 138 a26 26 0 0 1 52 0 Z" fill="'+G+'" '+st+'/>'+face(160,82,22,'#e9b48a')
     +'<path d="M64 70 Q70 50 76 54 M136 70 Q130 50 124 54" fill="none" stroke="'+D+'" stroke-width="2.5" stroke-dasharray="4 5" stroke-linecap="round"/>'
     +'<rect x="76" y="30" width="48" height="48" rx="6" fill="#fff" '+st+'/>'
     +'<path d="M76 46 V36 a6 6 0 0 1 6 -6 H118 a6 6 0 0 1 6 6 V46 Z" fill="'+R+'" '+st+'/>'
     +chk(100,63,11)),
    /* 情境 5：安全課程幾點開始？——工地安全帽＋問號 */
    dg20261009b1p_helmetq: svg(
      '<path d="M44 102 a56 54 0 0 1 112 0 Z" fill="'+Y+'" '+st+'/>'
     +'<path d="M86 52 q14 -6 28 0 V102 H86 Z" fill="'+A+'" '+st+'/>'
     +'<rect x="28" y="100" width="144" height="14" rx="7" fill="'+Y+'" '+st+'/>'
     +qb(172,34)),
    /* 情境 6：兩點開始——時鐘指在 2:00 */
    dg20261009b1p_clock2: svg(
      clk(92,78,56,2,0)
     +txt(168,36,'2:00',18,A)),
    /* 情境 7：課程是公司排的——教室白板＋長條圖 */
    dg20261009b1p_course: svg(
      '<line x1="60" y1="92" x2="52" y2="140" '+th(4)+'/><line x1="140" y1="92" x2="148" y2="140" '+th(4)+'/>'
     +'<rect x="30" y="16" width="140" height="76" rx="5" fill="#fff" '+st+'/>'
     +'<rect x="50" y="56" width="16" height="28" fill="'+B+'"/><rect x="76" y="44" width="16" height="40" fill="'+G+'"/><rect x="102" y="34" width="16" height="50" fill="'+A+'"/>'
     +'<line x1="44" y1="84" x2="126" y2="84" '+th(2.5)+'/>'
     +'<path d="M138 58 a14 13 0 0 1 28 0 Z" fill="'+Y+'" '+th(2.5)+'/><rect x="134" y="57" width="36" height="6" rx="3" fill="'+Y+'" '+th(2.5)+'/>'
     +'<rect x="40" y="92" width="120" height="7" rx="3" fill="#c9c2b8" '+th(2.5)+'/>'),
    /* 情境 8：餐廳一點半收——餐盤＋時鐘 */
    dg20261009b1p_tray: svg(
      '<rect x="18" y="64" width="164" height="70" rx="10" fill="#9aa7b8" '+st+'/>'
     +'<circle cx="64" cy="99" r="24" fill="#fff" '+st+'/><path d="M50 98 q14 -16 28 0 Z" fill="'+Y+'" '+th(2)+'/><circle cx="58" cy="108" r="5" fill="'+G+'"/><circle cx="71" cy="108" r="5" fill="'+R+'"/>'
     +'<path d="M102 94 H150 a24 20 0 0 1 -48 0 Z" fill="'+L+'" '+st+'/>'
     +'<line x1="104" y1="84" x2="164" y2="76" '+th(3)+'/><line x1="106" y1="88" x2="166" y2="82" '+th(3)+'/>'
     +clk(40,32,20,1,30)),
    /* 情境 9：那我中午就去吃——三明治＋咖啡 */
    dg20261009b1p_lunch: svg(
      '<rect x="22" y="112" width="90" height="16" rx="6" fill="#e8c27a" '+st+'/>'
     +'<path d="M20 112 q8 -8 16 0 q8 -8 16 0 q8 -8 16 0 q8 -8 16 0 q8 -8 16 0 q8 -8 16 0 Z" fill="'+G+'" '+th(2.5)+'/>'
     +'<rect x="24" y="96" width="86" height="10" fill="'+R+'" '+th(2.5)+'/>'
     +'<path d="M22 96 a45 26 0 0 1 90 0 Z" fill="#e8c27a" '+st+'/>'
     +'<path d="M130 70 H178 L172 130 H136 Z" fill="#fff" '+st+'/>'
     +'<path d="M132.4 90 H175.6 L174 108 H134 Z" fill="'+A+'" '+th(2.5)+'/>'
     +'<rect x="126" y="60" width="56" height="12" rx="4" fill="'+D+'" '+st+'/>'
     +'<path d="M146 50 q-6 -8 0 -16 M162 50 q-6 -8 0 -16" fill="none" '+th(3)+'/>'),
    /* 情境 10：當場才決定——隨手寫下的便利貼＋筆 */
    dg20261009b1p_note: svg(
      '<g transform="rotate(-6 86 74)"><rect x="38" y="26" width="96" height="96" fill="'+Y+'" '+st+'/>'
     +'<path d="M134 98 L110 122 V98 Z" fill="#d9ad2f" '+st+'/>'
     +txt(86,70,'12:00',24)
     +'<line x1="56" y1="90" x2="104" y2="90" stroke="'+A+'" stroke-width="5" stroke-linecap="round"/></g>'
     +'<g transform="rotate(38 162 92)"><rect x="155" y="44" width="14" height="66" rx="3" fill="'+R+'" '+st+'/><path d="M155 110 L162 126 L169 110 Z" fill="'+L+'" '+st+'/></g>')
  });
})();

/* ============================================================
   dg20261009b1p — Scheduled, Arranged, or Not Yet?（B1+）
   Grammar in Use Unit 19（Present tenses for the future）＋ will 的位置
   ============================================================ */
window.GVIDEO.dg20261009b1p = {
  kind: 'gram',
  date: '2026-10-09',
  title: 'Scheduled, Arranged, or Not Yet?',
  titleCn: '公告的、談好的、還沒定的：用現在式講未來',
  titleArt: ['dg20261009b1p_schedule', 'dg20261009b1p_meeting', 'dg20261009b1p_maybe'],
  scene: '新人第一週 First week at work',
  sceneArt: 'dg20261009b1p_office',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Grace', voice: 'f' },
    T: { name: 'Kevin', voice: 'm' }
  },
  expr: {
    tt:   { t: 'starts / ends / closes', cn: '公告的時程 → 現在簡單式', ex: 'The online course ends on the last day of June.', exCn: '線上課程六月最後一天結束。', note: '常用動詞：start、begin、finish、end、leave、arrive、open、close' },
    arr:  { t: 'be + V-ing', cn: '跟人談好的安排 → 現在進行式', ex: 'My manager is flying back from Bangkok on Monday.', exCn: '我主管星期一從曼谷飛回來。', note: '一定要有時間詞：tomorrow、on Monday、next week' },
    will: { t: 'will + V', cn: '當下決定、承諾、預測 → will', ex: "I'll print the forms for you.", exCn: '我幫你把表格印出來。', note: '還沒有日期的事，不要用現在式假裝已經排好' }
  },
  chapters: [
    { cn: '開場' }, { cn: '先問：定了沒有？' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  timeline: [
    { x: 38, art: 'dg20261009b1p_schedule', lab: '現在簡單式', who: '公告的時程' },
    { x: 62, art: 'dg20261009b1p_meeting',  lab: '現在進行式', who: '跟人談好的' },
    { x: 86, art: 'dg20261009b1p_maybe',    lab: 'will',       who: '還沒定・預測', open: true }
  ],
  flow: [
    { q: '是公告的時程：班車、課程、營業時間？', a: '現在簡單式', en: '主詞 + 動詞(s) + 時間' },
    { q: '是你跟別人已經談好的安排？',         a: '現在進行式', en: '主詞 + be + V-ing + 時間' },
    { q: '都不是：當下決定、承諾或預測？',     a: 'will',       en: 'will + 原形動詞' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: '同樣是下禮拜的事，英文會換不同的動詞形狀，告訴對方這件事定了沒有。', vis: { type: 'title' } },

    /* ---- 1 核心：定了沒有？ ---- */
    { ch: 1, sp: 'N', zh: '英文選哪一種未來，重點不是時間遠近，而是這件事定了沒有、是誰定的。', vis: { type: 'timeline', show: 0 } },
    { ch: 1, sp: 'N', zh: '公告出來的時程，像班車、課程、營業時間，個人改不了，用現在簡單式。',
      hi: [{ t: '現在簡單式', k: 'tt', c: 3 }], vis: { type: 'timeline', show: 1, pop: true } },
    { ch: 1, sp: 'A', en: 'The orientation begins at eight thirty on Monday.', cn: '新人說明會星期一八點半開始。',
      hi: [{ t: 'begins', cn: '公司排的', k: 'tt', c: 3 }], vis: { type: 'timeline', show: 1, lit: 0 } },
    { ch: 1, sp: 'N', zh: '你跟別人已經談好的安排，日期也講定了，用現在進行式。',
      hi: [{ t: '現在進行式', k: 'arr', c: 4 }], vis: { type: 'timeline', show: 2, pop: true } },
    { ch: 1, sp: 'T', en: "We're having a video call with the Penang office on Wednesday.", cn: '我們星期三要跟檳城辦公室開視訊會議。',
      hi: [{ t: "We're having", cn: '雙方約好', k: 'arr', c: 4 }], vis: { type: 'timeline', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: '這兩種都是說話當下已經定案的事，所以英文直接拿現在式來講未來。',
      vis: { type: 'timeline', show: 2, dec: true } },
    { ch: 1, sp: 'N', zh: '還沒排進行程的事，像當下決定、答應別人或預測，就交給 will。',
      hi: [{ t: 'will', k: 'will', c: 2 }], vis: { type: 'timeline', show: 3, pop: true } },
    { ch: 1, sp: 'A', en: 'Sales will probably slow down after the holidays.', cn: '假期過後業績大概會變慢。',
      hi: [{ t: 'will probably slow down', cn: '預測', k: 'will', c: 2 }], vis: { type: 'timeline', show: 3, lit: 2 } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: '現在簡單式的句型：主詞加動詞，再加時間；主詞是第三人稱單數，動詞記得加 s。',
      hi: [{ t: '現在簡單式', k: 'tt', c: 3 }],
      vis: { type: 'pattern', kick: 'Present simple 現在簡單式', rows: [
        { lab: '交通車', blocks: [{ t: 'The staff bus', k: 's' }, { t: 'leaves', k: 'v' }, { t: 'at 5:40', k: 'o' }] },
        { lab: '課程',   blocks: [{ t: 'The workshop', k: 's' }, { t: 'ends', k: 'v' }, { t: 'at noon', k: 'o' }] }
      ], note: '第三人稱單數：leave → leaves、end → ends' } },
    { ch: 2, sp: 'N', zh: '公告時程最常見的動詞就這幾組：start、begin、finish、end、open、close、leave、arrive。',
      vis: { type: 'family', kick: 'Schedule verbs 時程動詞', core: 'Schedule verbs', coreCn: '公告時程常用動詞', art: 'dg20261009b1p_schedule', items: [
        { t: 'start · begin', cn: '開始' }, { t: 'finish · end', cn: '結束' }, { t: 'open · close', cn: '開門・關門' }, { t: 'leave · arrive', cn: '出發・抵達' }
      ] } },
    { ch: 2, sp: 'N', zh: '現在進行式的句型：主詞加 be 動詞，再加動詞 ing，後面接一個未來的時間。',
      hi: [{ t: '現在進行式', k: 'arr', c: 4 }],
      vis: { type: 'pattern', kick: 'Present continuous 現在進行式', rows: [
        { lab: '談好的', blocks: [{ t: 'Mr. Lin', k: 's' }, { t: 'is visiting', k: 'v' }, { t: 'our lab', k: 'n' }, { t: 'next Thursday', k: 'o' }] },
        { lab: '定案的', blocks: [{ t: 'We', k: 's' }, { t: 'are moving', k: 'v' }, { t: 'to the new office', k: 'n' }, { t: 'in March', k: 'o' }] }
      ] } },
    { ch: 2, sp: 'N', zh: '時間詞不能省。少了它，會被聽成現在正在做；加上時間，才是排好的未來。',
      vis: { type: 'pattern', kick: '時間詞是定位器 Add a time', rows: [
        { lab: '現在正在檢查', blocks: [{ t: "She's checking the samples", k: 'v' }] },
        { lab: '明早要檢查',   blocks: [{ t: "She's checking the samples", k: 'v' }, { t: 'tomorrow morning', k: 'o', add: true }] }
      ], note: 'tomorrow、on Monday、next week 都是讓句子跳到未來的訊號' } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: '來聽主管 Grace 怎麼跟新同事 Kevin 交代第一週的行程。', vis: { type: 'scene', art: 'dg20261009b1p_office' } },
    { ch: 3, sp: 'T', en: 'So what am I doing on Monday?', cn: '那我星期一要做什麼？',
      hi: [{ t: 'am I doing', cn: '問安排', k: 'arr', c: 4 }], vis: { type: 'scene', art: 'dg20261009b1p_badgeq' } },
    { ch: 3, sp: 'A', en: "You're working with Mr. Chen in the testing lab all morning.", cn: '你整個早上要跟陳先生在檢測室工作。',
      hi: [{ t: "You're working", cn: '已經安排好', k: 'arr', c: 4 }], vis: { type: 'scene', art: 'dg20261009b1p_lab' } },
    { ch: 3, sp: 'N', zh: "這是 Grace 早就跟陳先生講好的安排，所以用現在進行式 You're working。",
      hi: [{ t: "You're working", k: 'arr', c: 4 }], vis: { type: 'scene', art: 'dg20261009b1p_agreed' } },
    { ch: 3, sp: 'T', en: 'Got it. When does the safety course start?', cn: '了解。安全課程什麼時候開始？',
      hi: [{ t: 'does the safety course start', cn: '問課表', k: 'tt', c: 3 }], vis: { type: 'scene', art: 'dg20261009b1p_helmetq' } },
    { ch: 3, sp: 'A', en: 'It starts at two and finishes at four thirty.', cn: '兩點開始，四點半結束。',
      hi: [{ t: 'starts', cn: '課表時間', k: 'tt', c: 3 }, { t: 'finishes', cn: '課表時間', k: 'tt', c: 3 }], vis: { type: 'scene', art: 'dg20261009b1p_clock2' } },
    { ch: 3, sp: 'N', zh: '安全課程是公司排好的課表，每個新人都一樣，所以用現在簡單式 starts、finishes。',
      hi: [{ t: 'starts', k: 'tt', c: 3 }], vis: { type: 'scene', art: 'dg20261009b1p_course' } },
    { ch: 3, sp: 'A', en: 'Oh, and the cafeteria closes at one thirty.', cn: '喔，還有，員工餐廳一點半就收了。',
      hi: [{ t: 'closes', cn: '營業時間', k: 'tt', c: 3 }], vis: { type: 'scene', art: 'dg20261009b1p_tray' } },
    { ch: 3, sp: 'T', en: "Thanks. I'll grab lunch at noon, then.", cn: '謝謝，那我中午就去吃。',
      hi: [{ t: "I'll grab", cn: '當場決定', k: 'will', c: 2 }], vis: { type: 'scene', art: 'dg20261009b1p_lunch' } },
    { ch: 3, sp: 'N', zh: '最後這句，是 Kevin 聽到餐廳時間才當場決定的，事先沒有安排，所以用 will。',
      hi: [{ t: 'will', k: 'will', c: 2 }], vis: { type: 'scene', art: 'dg20261009b1p_note' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '同樣是明天十點，換一個形狀，意思就不一樣。',
      vis: { type: 'vs', sm: true, kick: '同一個十點，兩種未來',
        a: { w: "Tomorrow's meeting starts at ten.", def: '明天的會議十點開始。', cn: '公司排的時程 → 現在簡單式' },
        b: { w: "I'm seeing a client at ten tomorrow.", def: '我明天十點要見客戶。', cn: '自己約好的 → 現在進行式' } } },
    { ch: 4, sp: 'A', en: "Tomorrow's meeting starts at ten.", cn: '明天的會議十點開始。',
      hi: [{ t: 'starts', cn: '公司排的', k: 'tt', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '同一個十點，兩種未來',
        a: { w: "Tomorrow's meeting starts at ten.", def: '明天的會議十點開始。', cn: '公司排的時程 → 現在簡單式' },
        b: { w: "I'm seeing a client at ten tomorrow.", def: '我明天十點要見客戶。', cn: '自己約好的 → 現在進行式' } } },
    { ch: 4, sp: 'T', en: "I'm seeing a client at ten tomorrow.", cn: '我明天十點要見客戶。',
      hi: [{ t: "I'm seeing", cn: '跟客戶約好', k: 'arr', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '同一個十點，兩種未來',
        a: { w: "Tomorrow's meeting starts at ten.", def: '明天的會議十點開始。', cn: '公司排的時程 → 現在簡單式' },
        b: { w: "I'm seeing a client at ten tomorrow.", def: '我明天十點要見客戶。', cn: '自己約好的 → 現在進行式' } } },
    { ch: 4, sp: 'N', zh: '第一句是公司排的會議，大家行事曆上都有；第二句是我自己跟客戶約好的。',
      vis: { type: 'vs', sm: true, kick: '同一個十點，兩種未來',
        a: { w: "Tomorrow's meeting starts at ten.", def: '明天的會議十點開始。', cn: '公司排的時程 → 現在簡單式' },
        b: { w: "I'm seeing a client at ten tomorrow.", def: '我明天十點要見客戶。', cn: '自己約好的 → 現在進行式' } } },
    { ch: 4, sp: 'N', zh: '再看一組。出貨日期已經跟客戶談好了；寄追蹤號碼，是當下才答應的，所以用 will。',
      vis: { type: 'vs', sm: true, kick: '談好的 vs 當下答應的',
        a: { w: "We're shipping the order on Friday.", def: '我們星期五出貨。', cn: '跟客戶談好 → 現在進行式' },
        b: { w: "I'll email you the tracking number.", def: '我會把追蹤號碼寄給你。', cn: '當下答應 → will' } } },
    { ch: 4, sp: 'A', en: "We're shipping the order on Friday.", cn: '我們星期五出貨。',
      hi: [{ t: "We're shipping", cn: '談好的日期', k: 'arr', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '談好的 vs 當下答應的',
        a: { w: "We're shipping the order on Friday.", def: '我們星期五出貨。', cn: '跟客戶談好 → 現在進行式' },
        b: { w: "I'll email you the tracking number.", def: '我會把追蹤號碼寄給你。', cn: '當下答應 → will' } } },
    { ch: 4, sp: 'T', en: "I'll email you the tracking number.", cn: '我會把追蹤號碼寄給你。',
      hi: [{ t: "I'll email", cn: '當下答應', k: 'will', c: 2 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '談好的 vs 當下答應的',
        a: { w: "We're shipping the order on Friday.", def: '我們星期五出貨。', cn: '跟客戶談好 → 現在進行式' },
        b: { w: "I'll email you the tracking number.", def: '我會把追蹤號碼寄給你。', cn: '當下答應 → will' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '最後給你一個判斷流程。遇到未來的事，照順序問自己三個問題。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一問：是公告的時程嗎？像班車、課程、營業時間。是的話，用現在簡單式。',
      hi: [{ t: '現在簡單式', k: 'tt', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'A', en: 'The night shift starts at ten tonight.', cn: '夜班今晚十點開始。',
      hi: [{ t: 'starts', cn: '班表', k: 'tt', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二問：是你跟別人已經談好的安排嗎？是的話，用現在進行式。',
      hi: [{ t: '現在進行式', k: 'arr', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'T', en: "We're meeting the designers on Thursday afternoon.", cn: '我們星期四下午要跟設計師開會。',
      hi: [{ t: "We're meeting", cn: '談好了', k: 'arr', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '兩個都不是，就是還沒排進行程：當下決定、承諾或預測，用 will。',
      hi: [{ t: 'will', k: 'will', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'A', en: "Don't worry. I'll finish the slides tonight.", cn: '別擔心，我今晚會把簡報做完。',
      hi: [{ t: "I'll finish", cn: '承諾', k: 'will', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說說看。看到中文情境，先自己用英文說出來，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：你已經跟 Peter 約好，星期五下午一起去看新廠區。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '你已經跟 Peter 約好，星期五下午一起去看新廠區。' } },
    { ch: 6, sp: 'A', en: "I'm visiting the new site with Peter on Friday afternoon.", cn: '我星期五下午要跟 Peter 去看新廠區。',
      hi: [{ t: "I'm visiting", cn: '談好的 → 現在進行式', k: 'arr', c: 4 }],
      vis: { type: 'speak', n: 1, show: true, sit: '你已經跟 Peter 約好，星期五下午一起去看新廠區。', a: "I'm visiting the new site with Peter on Friday afternoon." } },
    { ch: 6, sp: 'N', zh: '情境二：公司公告寫著，年度健康檢查下禮拜二早上八點開始。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '公司公告寫著，年度健康檢查下禮拜二早上八點開始。' } },
    { ch: 6, sp: 'T', en: 'The health check starts at eight next Tuesday.', cn: '健康檢查下星期二八點開始。',
      hi: [{ t: 'starts', cn: '公告的時程 → 現在簡單式', k: 'tt', c: 3 }],
      vis: { type: 'speak', n: 2, show: true, sit: '公司公告寫著，年度健康檢查下禮拜二早上八點開始。', a: 'The health check starts at eight next Tuesday.' } },
    { ch: 6, sp: 'N', zh: '情境三：同事說印表機又卡紙了，你當場決定幫她看一下。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '同事說印表機又卡紙了，你當場決定幫她看一下。' } },
    { ch: 6, sp: 'A', en: "I'll take a look at it.", cn: '我來看一下。',
      hi: [{ t: "I'll take a look", cn: '當下決定 → will', k: 'will', c: 2 }],
      vis: { type: 'speak', n: 3, show: true, sit: '同事說印表機又卡紙了，你當場決定幫她看一下。', a: "I'll take a look at it." } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結一下：公告的時程，用現在簡單式；跟人談好的，用現在進行式；當下決定、承諾或預測，才用 will。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '下次講未來之前，先問自己：這件事定了沒有？是誰定的？', vis: { type: 'end' } }
  ]
};
