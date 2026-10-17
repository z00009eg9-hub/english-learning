/* ============================================================
   B2 Read 文法影片解說 — dg20261009b2（B2）
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
  /* 飛機：plane(中心x, 中心y, 旋轉角度, 縮放) */
  var plane=function(x,y,r,s){ return '<g transform="translate('+x+' '+y+') rotate('+r+') scale('+s+')">'
    +'<path d="M-2 -6 L-14 -30 H-4 L14 -6 Z M-2 6 L-14 30 H-4 L14 6 Z" fill="'+B+'" '+th(2.5)+'/>'
    +'<path d="M-26 -5 L-34 -18 H-27 L-16 -6 Z" fill="'+B+'" '+th(2.5)+'/>'
    +'<path d="M-30 0 Q-30 -7 -20 -7 H22 Q34 -7 36 0 Q34 7 22 7 H-20 Q-30 7 -30 0 Z" fill="#fff" '+st+'/>'
    +'<circle cx="24" cy="-1" r="2" fill="'+D+'"/><circle cx="14" cy="-1" r="2" fill="'+D+'"/><circle cx="4" cy="-1" r="2" fill="'+D+'"/></g>'; };
  var pin=function(x,y,col){ return '<path d="M'+x+' '+(y+14)+' L'+(x-8)+' '+(y+2)+' A10 10 0 1 1 '+(x+8)+' '+(y+2)+' Z" fill="'+col+'" '+th(2.5)+'/><circle cx="'+x+'" cy="'+(y-4)+'" r="3.5" fill="#fff"/>'; };

  Object.assign(window.GVIDEO_ART, {
    /* 議程：夾板上的時間表（現在簡單式） */
    dg20261009b2_agenda: svg(
      '<rect x="44" y="20" width="112" height="124" rx="8" fill="#c98f52" '+st+'/>'
     +'<rect x="54" y="34" width="92" height="102" rx="2" fill="#fff" '+th(2.5)+'/>'
     +'<rect x="78" y="12" width="44" height="18" rx="5" fill="#c9c2b8" '+st+'/>'
     +txt(74,62,'9:00',11)+'<rect x="94" y="53" width="44" height="11" rx="3" fill="'+S+'"/>'
     +txt(76,88,'10:30',11)+'<rect x="94" y="79" width="44" height="11" rx="3" fill="'+Y+'"/>'
     +txt(76,114,'12:00',11)+'<rect x="94" y="105" width="44" height="11" rx="3" fill="'+L+'"/>'),
    /* 談好的安排：信封＋打勾的行事曆（現在進行式） */
    dg20261009b2_email: svg(
      '<rect x="22" y="44" width="134" height="88" rx="6" fill="#fff" '+st+'/>'
     +'<path d="M22 50 L89 96 L156 50" fill="none" '+st+'/>'
     +'<path d="M22 126 L72 84 M156 126 L106 84" fill="none" '+th(2.5)+'/>'
     +'<rect x="134" y="16" width="50" height="48" rx="6" fill="#fff" '+st+'/>'
     +'<path d="M134 30 V22 a6 6 0 0 1 6 -6 H178 a6 6 0 0 1 6 6 V30 Z" fill="'+R+'" '+st+'/>'
     +chk(159,47,11)),
    /* 承諾・預測：圖表上實線接虛線往上（will） */
    dg20261009b2_forecast: svg(
      '<path d="M30 18 V128 H184" fill="none" '+th(3.5)+'/>'
     +'<path d="M36 112 L64 98 L92 104 L116 84" fill="none" stroke="'+B+'" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>'
     +'<path d="M116 84 L144 64 L166 46" fill="none" stroke="'+A+'" stroke-width="5" stroke-linecap="round" stroke-dasharray="2 10"/>'
     +'<path d="M154 42 L170 42 L170 58" fill="none" stroke="'+A+'" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>'
     +'<circle cx="116" cy="84" r="7" fill="#fff" '+st+'/>'),

    /* 情境 1：客戶參訪——公司大樓＋旗子＋飛機 */
    dg20261009b2_visit: svg(
      '<line x1="8" y1="138" x2="192" y2="138" '+st+'/>'
     +'<rect x="62" y="58" width="80" height="80" fill="'+S+'" '+st+'/>'
     +'<g fill="'+L+'" '+th(2)+'><rect x="72" y="68" width="16" height="14"/><rect x="94" y="68" width="16" height="14"/><rect x="116" y="68" width="16" height="14"/><rect x="72" y="90" width="16" height="14"/><rect x="116" y="90" width="16" height="14"/></g>'
     +'<rect x="92" y="108" width="20" height="30" fill="'+A+'" '+st+'/>'
     +'<line x1="30" y1="138" x2="30" y2="72" '+th(3)+'/><path d="M30 74 H52 L46 82 L52 90 H30 Z" fill="'+R+'" '+th(2.5)+'/>'
     +'<line x1="170" y1="138" x2="170" y2="72" '+th(3)+'/><path d="M170 74 H148 L154 82 L148 90 H170 Z" fill="'+B+'" '+th(2.5)+'/>'
     +plane(120,28,-10,0.8)),
    /* 情境 2：客戶什麼時候到？——飛機＋問號 */
    dg20261009b2_planeq: svg(
      '<path d="M22 118 a12 12 0 0 1 12 -12 a16 16 0 0 1 30 2 a10 10 0 0 1 4 18 H30 a8 8 0 0 1 -8 -8 Z" fill="#fff" '+th(2.5)+'/>'
     +'<path d="M130 120 a10 10 0 0 1 10 -10 a14 14 0 0 1 26 2 a9 9 0 0 1 3 16 H138 a8 8 0 0 1 -8 -8 Z" fill="#fff" '+th(2.5)+'/>'
     +plane(92,72,-14,1.5)
     +qb(172,32)),
    /* 情境 3：星期二早上落地、去機場接——跑道＋降落中的飛機 */
    dg20261009b2_arrivals: svg(
      '<line x1="8" y1="140" x2="192" y2="140" '+st+'/>'
     +'<path d="M70 140 L92 98 H112 L134 140 Z" fill="#9aa7b8" '+st+'/>'
     +'<g stroke="#fff" stroke-width="3" stroke-linecap="round"><line x1="102" y1="104" x2="102" y2="110"/><line x1="102" y1="118" x2="102" y2="125"/><line x1="102" y1="132" x2="102" y2="139"/></g>'
     +'<rect x="156" y="62" width="14" height="78" fill="#c9c2b8" '+st+'/><path d="M146 46 H180 L174 62 H152 Z" fill="'+S+'" '+st+'/>'
     +plane(72,48,16,1.1)
     +'<circle cx="40" cy="22" r="10" fill="'+Y+'" '+th(2.5)+'/>'),
    /* 情境 4：接機講好了——車子＋打勾 */
    dg20261009b2_car: svg(
      '<line x1="8" y1="128" x2="192" y2="128" '+st+'/>'
     +'<path d="M22 114 V94 a8 8 0 0 1 8 -8 H50 L70 64 H124 L146 86 H168 a8 8 0 0 1 8 8 V114 Z" fill="'+R+'" '+st+'/>'
     +'<path d="M76 72 H96 V86 H62 Z" fill="'+S+'" '+th(2.5)+'/><path d="M104 72 H120 L134 86 H104 Z" fill="'+S+'" '+th(2.5)+'/>'
     +'<circle cx="58" cy="114" r="13" fill="'+D+'"/><circle cx="58" cy="114" r="5" fill="#c9c2b8"/>'
     +'<circle cx="142" cy="114" r="13" fill="'+D+'"/><circle cx="142" cy="114" r="5" fill="#c9c2b8"/>'
     +'<rect x="166" y="94" width="10" height="6" rx="2" fill="'+Y+'"/>'
     +chk(170,36,18)),
    /* 情境 5：參觀工廠幾點開始？——攤開的地圖＋路線＋問號 */
    dg20261009b2_tourq: svg(
      '<path d="M20 40 L68 28 L120 40 L168 28 V120 L120 132 L68 120 L20 132 Z" fill="'+L+'" '+st+'/>'
     +'<path d="M68 28 V120 M120 40 V132" fill="none" '+th(2)+'/>'
     +'<path d="M40 112 Q60 80 92 92 T146 62" fill="none" stroke="'+B+'" stroke-width="4" stroke-linecap="round" stroke-dasharray="3 8"/>'
     +pin(40,98,G)+pin(146,50,R)
     +qb(176,28)),
    /* 情境 6：議程上寫十點到中午——平板上的時段 */
    dg20261009b2_tablet: svg(
      '<rect x="32" y="16" width="136" height="120" rx="12" fill="'+D+'" '+st+'/>'
     +'<rect x="42" y="26" width="116" height="100" rx="3" fill="#fff"/>'
     +txt(64,52,'10:00',12)+'<rect x="88" y="40" width="60" height="38" rx="4" fill="'+G+'" opacity=".85"/>'
     +txt(64,100,'12:00',12)+'<rect x="88" y="88" width="60" height="16" rx="4" fill="'+Y+'"/>'
     +'<line x1="86" y1="82" x2="150" y2="82" stroke="'+L+'" stroke-width="2"/>'
     +'<circle cx="100" cy="131" r="2.5" fill="#c9c2b8"/>'),
    /* 情境 7：議程語氣要中性——會議室：投影幕＋長桌 */
    dg20261009b2_hall: svg(
      '<rect x="50" y="12" width="100" height="56" rx="4" fill="#fff" '+st+'/>'
     +'<path d="M62 54 L84 40 L104 48 L136 26" fill="none" stroke="'+B+'" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>'
     +'<g fill="'+B+'" '+th(2.5)+'><rect x="54" y="76" width="18" height="18" rx="4"/><rect x="91" y="76" width="18" height="18" rx="4"/><rect x="128" y="76" width="18" height="18" rx="4"/></g>'
     +'<path d="M24 120 L44 88 H156 L176 120 Z" fill="#c98f52" '+st+'/>'
     +'<g fill="'+B+'" '+th(2.5)+'><rect x="44" y="124" width="22" height="18" rx="4"/><rect x="89" y="124" width="22" height="18" rx="4"/><rect x="134" y="124" width="22" height="18" rx="4"/></g>'),
    /* 情境 8：新實驗室到時候會好嗎？——吊車＋蓋到一半的樓＋問號 */
    dg20261009b2_crane: svg(
      '<line x1="8" y1="138" x2="192" y2="138" '+st+'/>'
     +'<rect x="40" y="30" width="14" height="108" fill="'+Y+'" '+st+'/>'
     +'<path d="M40 40 L54 54 L40 68 L54 82 L40 96 L54 110 L40 124" fill="none" '+th(2)+'/>'
     +'<rect x="26" y="22" width="134" height="10" fill="'+Y+'" '+st+'/>'
     +'<line x1="132" y1="32" x2="132" y2="72" '+th(2)+'/><path d="M132 72 v6 a5 5 0 1 1 -6 4" fill="none" '+th(3)+'/>'
     +'<rect x="94" y="96" width="80" height="42" fill="#c9c2b8" '+st+'/>'
     +'<path d="M114 96 V138 M134 96 V138 M154 96 V138 M94 117 H174" fill="none" '+th(2)+'/>'
     +'<path d="M94 96 V80 M174 96 V80 M134 96 V84" fill="none" '+th(3)+'/>'
     +qb(176,58)),
    /* 情境 9：我下午打給包商——響鈴的桌上電話 */
    dg20261009b2_phone: svg(
      '<path d="M44 130 L56 84 H144 L156 130 Z" fill="'+R+'" '+st+'/>'
     +'<path d="M36 76 q0 -18 18 -18 H146 q18 0 18 18 v6 h-26 v-8 H62 v8 H36 Z" fill="'+R+'" '+st+'/>'
     +'<rect x="76" y="94" width="48" height="28" rx="4" fill="#fff" '+th(2.5)+'/>'
     +'<g fill="'+D+'"><circle cx="88" cy="102" r="2.5"/><circle cx="100" cy="102" r="2.5"/><circle cx="112" cy="102" r="2.5"/><circle cx="88" cy="114" r="2.5"/><circle cx="100" cy="114" r="2.5"/><circle cx="112" cy="114" r="2.5"/></g>'
     +'<g '+th(3.5)+'><line x1="22" y1="40" x2="32" y2="50"/><line x1="14" y1="64" x2="26" y2="66"/><line x1="178" y1="40" x2="168" y2="50"/><line x1="186" y1="64" x2="174" y2="66"/><line x1="100" y1="22" x2="100" y2="38"/></g>'),
    /* 情境 10：還沒排進行程——月曆上的虛線空格＋問號 */
    dg20261009b2_unset: svg(
      cal(36,32,120,100)
     +'<rect x="98" y="96" width="30" height="26" rx="3" fill="#fff" stroke="'+A+'" stroke-width="3" stroke-dasharray="5 4"/>'
     +qb(166,30))
  });
})();

/* ============================================================
   dg20261009b2 — Agenda, Arrangement, or Will?（B2）
   Grammar in Use Unit 19（Present tenses for the future）＋ 文件語感與 will 的位置
   ============================================================ */
window.GVIDEO.dg20261009b2 = {
  kind: 'gram',
  date: '2026-10-09',
  title: 'Agenda, Arrangement, or Will?',
  titleCn: '議程、約定還是 will？看文件選對未來的寫法',
  titleArt: ['dg20261009b2_agenda', 'dg20261009b2_email', 'dg20261009b2_forecast'],
  scene: '客戶參訪 Client visit',
  sceneArt: 'dg20261009b2_visit',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Rachel', voice: 'f' },
    T: { name: 'Daniel', voice: 'm' }
  },
  expr: {
    tt:   { t: 'starts / takes place / closes', cn: '議程、公告的時程 → 現在簡單式', ex: 'The awards dinner takes place on the evening of the 20th.', exCn: '頒獎晚宴在二十號晚上舉行。', note: '語氣中性；同一份議程每一列用同一種形狀' },
    arr:  { t: 'be + V-ing', cn: '跟人談好的安排 → 現在進行式', ex: "We're opening a branch in Kaohsiung in the spring.", exCn: '我們春天要在高雄開分公司。', note: '寫給對方看，表示已經定案、不用再確認' },
    will: { t: 'will + V', cn: '承諾、條件、預測 → will', ex: "I'll update the figures as soon as I hear back.", exCn: '一有回音我就更新數字。', note: '沒有日期、還沒定案的事，交給 will' }
  },
  chapters: [
    { cn: '開場' }, { cn: '先問：定案了沒？' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  timeline: [
    { x: 38, art: 'dg20261009b2_agenda',   lab: '現在簡單式', who: '議程・公告' },
    { x: 62, art: 'dg20261009b2_email',    lab: '現在進行式', who: '談好的安排' },
    { x: 86, art: 'dg20261009b2_forecast', lab: 'will',       who: '承諾・預測', open: true }
  ],
  flow: [
    { q: '是議程、公告或時刻表上的時程？', a: '現在簡單式', en: '主詞 + 動詞(s) + 時間' },
    { q: '是你跟對方已經談好的安排？',     a: '現在進行式', en: '主詞 + be + V-ing + 時間' },
    { q: '都不是：承諾、條件或預測？',     a: 'will',       en: 'will + 原形動詞' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: '已經排定的未來，寫進議程、寫進信裡，英文各有習慣的寫法。這支影片幫你選對。', vis: { type: 'title' } },

    /* ---- 1 核心：定案了沒？ ---- */
    { ch: 1, sp: 'N', zh: '先問兩件事：這件事定案了沒有？是誰定的？', vis: { type: 'timeline', show: 0 } },
    { ch: 1, sp: 'N', zh: '議程、公告、行程表上的時程，是機構定的，語氣中性，用現在簡單式。',
      hi: [{ t: '現在簡單式', k: 'tt', c: 3 }], vis: { type: 'timeline', show: 1, pop: true } },
    { ch: 1, sp: 'A', en: 'The keynote begins at nine fifteen in Hall B.', cn: '主題演講九點十五分在 B 廳開始。',
      hi: [{ t: 'begins', cn: '議程時間', k: 'tt', c: 3 }], vis: { type: 'timeline', show: 1, lit: 0 } },
    { ch: 1, sp: 'N', zh: '你跟對方已經談好的安排，用現在進行式，對方一聽就知道是定案。',
      hi: [{ t: '現在進行式', k: 'arr', c: 4 }], vis: { type: 'timeline', show: 2, pop: true } },
    { ch: 1, sp: 'T', en: "I'm presenting our results to the board on Friday.", cn: '我星期五要向董事會報告成果。',
      hi: [{ t: "I'm presenting", cn: '已經排定', k: 'arr', c: 4 }], vis: { type: 'timeline', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: '這兩種都表示已經定案，只是語氣不同：一個像公告，一個像人跟人的約定。',
      vis: { type: 'timeline', show: 2, dec: true } },
    { ch: 1, sp: 'N', zh: '還沒定案的事，還有承諾、條件和預測，就交給 will。',
      hi: [{ t: 'will', k: 'will', c: 2 }], vis: { type: 'timeline', show: 3, pop: true } },
    { ch: 1, sp: 'A', en: 'If the figures look good, the board will approve the budget.', cn: '如果數字好看，董事會就會核准預算。',
      hi: [{ t: 'will approve', cn: '條件下的結果', k: 'will', c: 2 }], vis: { type: 'timeline', show: 3, lit: 2 } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: '現在簡單式的句型：主詞加動詞，再加時間。議程每一列都用這個形狀。',
      hi: [{ t: '現在簡單式', k: 'tt', c: 3 }],
      vis: { type: 'pattern', kick: 'Present simple 現在簡單式', rows: [
        { lab: '議程', blocks: [{ t: 'The panel', k: 's' }, { t: 'starts', k: 'v' }, { t: 'at 10:30', k: 'o' }] },
        { lab: '公告', blocks: [{ t: 'The new policy', k: 's' }, { t: 'takes effect', k: 'v' }, { t: 'on May 1', k: 'o' }] }
      ], note: '第三人稱單數：start → starts、take → takes' } },
    { ch: 2, sp: 'N', zh: '議程和公告常見的動詞：start、begin、end、finish、open、close，還有 take place。',
      vis: { type: 'family', kick: 'Schedule verbs 時程動詞', core: 'Schedule verbs', coreCn: '議程公告常用動詞', art: 'dg20261009b2_agenda', items: [
        { t: 'start · begin', cn: '開始' }, { t: 'end · finish', cn: '結束' }, { t: 'open · close', cn: '開放・截止' }, { t: 'take place', cn: '舉行' }
      ] } },
    { ch: 2, sp: 'N', zh: '現在進行式的句型：主詞加 be 動詞，再加動詞 ing，後面帶一個未來的時間。',
      hi: [{ t: '現在進行式', k: 'arr', c: 4 }],
      vis: { type: 'pattern', kick: 'Present continuous 現在進行式', rows: [
        { lab: '信裡交代', blocks: [{ t: 'We', k: 's' }, { t: 'are sending', k: 'v' }, { t: 'two engineers', k: 'n' }, { t: 'next week', k: 'o' }] },
        { lab: '跟客戶確認', blocks: [{ t: 'I', k: 's' }, { t: 'am picking you up', k: 'v' }, { t: 'at the airport', k: 'n' }, { t: 'on Monday', k: 'o' }] }
      ] } },
    { ch: 2, sp: 'N', zh: '一樣要帶時間詞。少了它，對方會以為你此刻正在做這件事。',
      vis: { type: 'pattern', kick: '加上時間 Add a time', rows: [
        { lab: '此刻正在看', blocks: [{ t: "We're reviewing the contract", k: 'v' }] },
        { lab: '星期四要看', blocks: [{ t: "We're reviewing the contract", k: 'v' }, { t: 'on Thursday', k: 'o', add: true }] }
      ], note: '時間詞一加，就從「此刻」變成「已排定的未來」' } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: '來聽 Rachel 和 Daniel 怎麼準備下週首爾客戶的參訪。', vis: { type: 'scene', art: 'dg20261009b2_visit' } },
    { ch: 3, sp: 'T', en: 'When are the visitors arriving?', cn: '客戶什麼時候到？',
      hi: [{ t: 'are the visitors arriving', cn: '問安排', k: 'arr', c: 4 }], vis: { type: 'scene', art: 'dg20261009b2_planeq' } },
    { ch: 3, sp: 'A', en: "They're landing on Tuesday morning, and I'm meeting them at the airport.", cn: '他們星期二早上落地，我會去機場接他們。',
      hi: [{ t: "I'm meeting", cn: '講好要接機', k: 'arr', c: 4 }], vis: { type: 'scene', art: 'dg20261009b2_arrivals' } },
    { ch: 3, sp: 'N', zh: '機票訂了、接機也講好了，都是人跟人談好的安排，所以 Rachel 用現在進行式。',
      hi: [{ t: '現在進行式', k: 'arr', c: 4 }], vis: { type: 'scene', art: 'dg20261009b2_car' } },
    { ch: 3, sp: 'T', en: 'What time does the plant tour start on Wednesday?', cn: '星期三參觀工廠幾點開始？',
      hi: [{ t: 'does the plant tour start', cn: '問議程', k: 'tt', c: 3 }], vis: { type: 'scene', art: 'dg20261009b2_tourq' } },
    { ch: 3, sp: 'A', en: 'The agenda says it starts at ten and ends at noon.', cn: '議程上寫十點開始、中午結束。',
      hi: [{ t: 'starts', cn: '議程時間', k: 'tt', c: 3 }, { t: 'ends', cn: '議程時間', k: 'tt', c: 3 }], vis: { type: 'scene', art: 'dg20261009b2_tablet' } },
    { ch: 3, sp: 'N', zh: '寫進議程的時程，語氣要中性，像公告一樣，所以用現在簡單式 starts、ends。',
      hi: [{ t: 'starts', k: 'tt', c: 3 }], vis: { type: 'scene', art: 'dg20261009b2_hall' } },
    { ch: 3, sp: 'T', en: "They want to see the new lab. Do you think it'll be ready?", cn: '他們想看新實驗室，你覺得到時候會好嗎？',
      hi: [{ t: "it'll be ready", cn: '預測', k: 'will', c: 2 }], vis: { type: 'scene', art: 'dg20261009b2_crane' } },
    { ch: 3, sp: 'A', en: "Hard to say. I'll call the contractor this afternoon.", cn: '很難說，我今天下午打給包商。',
      hi: [{ t: "I'll call", cn: '當下決定', k: 'will', c: 2 }], vis: { type: 'scene', art: 'dg20261009b2_phone' } },
    { ch: 3, sp: 'N', zh: '實驗室何時完工只能預測；打給包商是 Rachel 當下的決定。兩件都沒排進行程，所以用 will。',
      hi: [{ t: 'will', k: 'will', c: 2 }], vis: { type: 'scene', art: 'dg20261009b2_unset' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '同一件定案的事，寫給不同的人看，形狀也可以不一樣。',
      vis: { type: 'vs', sm: true, kick: '同一件事，兩種文件',
        a: { w: "We're launching the new model on March 3.", def: '我們三月三日要推出新機種。', cn: '內部信、自己人 → 現在進行式' },
        b: { w: 'The new model goes on sale on March 3.', def: '新機種三月三日開賣。', cn: '新聞稿、公告 → 現在簡單式' } } },
    { ch: 4, sp: 'A', en: "We're launching the new model on March 3.", cn: '我們三月三日要推出新機種。',
      hi: [{ t: "We're launching", cn: '自己人交代', k: 'arr', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '同一件事，兩種文件',
        a: { w: "We're launching the new model on March 3.", def: '我們三月三日要推出新機種。', cn: '內部信、自己人 → 現在進行式' },
        b: { w: 'The new model goes on sale on March 3.', def: '新機種三月三日開賣。', cn: '新聞稿、公告 → 現在簡單式' } } },
    { ch: 4, sp: 'T', en: 'The new model goes on sale on March 3.', cn: '新機種三月三日開賣。',
      hi: [{ t: 'goes on sale', cn: '對外公告', k: 'tt', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '同一件事，兩種文件',
        a: { w: "We're launching the new model on March 3.", def: '我們三月三日要推出新機種。', cn: '內部信、自己人 → 現在進行式' },
        b: { w: 'The new model goes on sale on March 3.', def: '新機種三月三日開賣。', cn: '新聞稿、公告 → 現在簡單式' } } },
    { ch: 4, sp: 'N', zh: '兩句都對，日期也都定了。第一句是自己人交代安排，第二句是對外公告，比較中性。',
      vis: { type: 'vs', sm: true, kick: '同一件事，兩種文件',
        a: { w: "We're launching the new model on March 3.", def: '我們三月三日要推出新機種。', cn: '內部信、自己人 → 現在進行式' },
        b: { w: 'The new model goes on sale on March 3.', def: '新機種三月三日開賣。', cn: '新聞稿、公告 → 現在簡單式' } } },
    { ch: 4, sp: 'N', zh: '再看一則報導。通車日期已經公告，用現在簡單式；能不能改善塞車，只是預測，所以用 will。',
      vis: { type: 'vs', sm: true, kick: '已公告 vs 預測',
        a: { w: 'The new metro line opens on July 1.', def: '新捷運線七月一日通車。', cn: '已公告的日期 → 現在簡單式' },
        b: { w: 'Experts believe it will ease traffic downtown.', def: '專家認為它會紓解市區交通。', cn: '預測 → will' } } },
    { ch: 4, sp: 'A', en: 'The new metro line opens on July 1.', cn: '新捷運線七月一日通車。',
      hi: [{ t: 'opens', cn: '已公告', k: 'tt', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '已公告 vs 預測',
        a: { w: 'The new metro line opens on July 1.', def: '新捷運線七月一日通車。', cn: '已公告的日期 → 現在簡單式' },
        b: { w: 'Experts believe it will ease traffic downtown.', def: '專家認為它會紓解市區交通。', cn: '預測 → will' } } },
    { ch: 4, sp: 'T', en: 'Experts believe it will ease traffic downtown.', cn: '專家認為它會紓解市區交通。',
      hi: [{ t: 'will ease', cn: '預測', k: 'will', c: 2 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '已公告 vs 預測',
        a: { w: 'The new metro line opens on July 1.', def: '新捷運線七月一日通車。', cn: '已公告的日期 → 現在簡單式' },
        b: { w: 'Experts believe it will ease traffic downtown.', def: '專家認為它會紓解市區交通。', cn: '預測 → will' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '最後給你一個判斷流程。寫到未來的事，照順序問自己三個問題。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一問：是議程、公告或時刻表上的時程嗎？是的話，用現在簡單式。',
      hi: [{ t: '現在簡單式', k: 'tt', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'A', en: 'Registration closes at midnight on Friday.', cn: '報名星期五午夜截止。',
      hi: [{ t: 'closes', cn: '公告的截止時間', k: 'tt', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二問：是你跟對方已經談好的安排嗎？是的話，用現在進行式。',
      hi: [{ t: '現在進行式', k: 'arr', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'T', en: 'Our CEO is visiting the Hsinchu site on Monday.', cn: '我們執行長星期一要去新竹廠區。',
      hi: [{ t: 'is visiting', cn: '已排定', k: 'arr', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '兩個都不是：承諾、條件句，或是預測，就用 will。',
      hi: [{ t: 'will', k: 'will', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'A', en: 'If shipping costs keep rising, our prices will go up too.', cn: '如果運費繼續漲，我們的價格也會跟著漲。',
      hi: [{ t: 'will go up', cn: '條件下的結果', k: 'will', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說說看。看到中文情境，先自己用英文說出來，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：你已經跟律師約好，星期三上午一起看合約。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '你已經跟律師約好，星期三上午一起看合約。' } },
    { ch: 6, sp: 'A', en: "I'm going over the contract with our lawyer on Wednesday morning.", cn: '我星期三上午要跟我們的律師看合約。',
      hi: [{ t: "I'm going over", cn: '談好的 → 現在進行式', k: 'arr', c: 4 }],
      vis: { type: 'speak', n: 1, show: true, sit: '你已經跟律師約好，星期三上午一起看合約。', a: "I'm going over the contract with our lawyer on Wednesday morning." } },
    { ch: 6, sp: 'N', zh: '情境二：你在寫研討會議程，午餐後的分組討論兩點開始。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '你在寫研討會議程，午餐後的分組討論兩點開始。' } },
    { ch: 6, sp: 'T', en: 'The breakout sessions start at two.', cn: '分組討論兩點開始。',
      hi: [{ t: 'start', cn: '議程 → 現在簡單式', k: 'tt', c: 3 }],
      vis: { type: 'speak', n: 2, show: true, sit: '你在寫研討會議程，午餐後的分組討論兩點開始。', a: 'The breakout sessions start at two.' } },
    { ch: 6, sp: 'N', zh: '情境三：客戶要報價單，你當場答應今天五點前給他。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '客戶要報價單，你當場答應今天五點前給他。' } },
    { ch: 6, sp: 'A', en: "I'll get the quote to you by five today.", cn: '我今天五點前把報價單給你。',
      hi: [{ t: "I'll get", cn: '承諾 → will', k: 'will', c: 2 }],
      vis: { type: 'speak', n: 3, show: true, sit: '客戶要報價單，你當場答應今天五點前給他。', a: "I'll get the quote to you by five today." } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結：議程和公告，用現在簡單式；談好的安排，用現在進行式；承諾、條件和預測，才用 will。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '下次寫信或排議程之前，先問一句：這件事定案了嗎？是誰定的？', vis: { type: 'end' } }
  ]
};
