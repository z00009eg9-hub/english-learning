/* ============================================================
   B2 Read 文法影片解說 — dg20260821b1p
   文法頁 unitNo 3（B1+）：現在進行式＝約好的計畫、現在簡單式＝時刻表（內容對應 Grammar in Use Unit 19）
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
  var NV='#33405c';
  var star=function(cx,cy,r){ return '<path d="M'+cx+' '+(cy-r)+' Q'+cx+' '+cy+' '+(cx+r)+' '+cy+' Q'+cx+' '+cy+' '+cx+' '+(cy+r)+' Q'+cx+' '+cy+' '+(cx-r)+' '+cy+' Q'+cx+' '+cy+' '+cx+' '+(cy-r)+' Z" fill="'+Y+'" '+th(2.5)+'/>'; };
  var car=function(x,y,col){ /* x,y＝車身左下 */
    return '<path d="M'+x+' '+y+' V'+(y-18)+' Q'+x+' '+(y-24)+' '+(x+8)+' '+(y-26)+' L'+(x+26)+' '+(y-28)+' L'+(x+40)+' '+(y-46)+' H'+(x+82)+' L'+(x+98)+' '+(y-28)+' Q'+(x+116)+' '+(y-26)+' '+(x+116)+' '+(y-16)+' V'+y+' Z" fill="'+(col||R)+'" '+st+'/>'
      +'<path d="M'+(x+32)+' '+(y-28)+' L'+(x+43)+' '+(y-41)+' H'+(x+58)+' V'+(y-28)+' Z M'+(x+64)+' '+(y-28)+' V'+(y-41)+' H'+(x+79)+' L'+(x+90)+' '+(y-28)+' Z" fill="'+S+'" '+th(2.5)+'/>'
      +'<circle cx="'+(x+26)+'" cy="'+y+'" r="11" fill="'+D+'"/><circle cx="'+(x+26)+'" cy="'+y+'" r="4" fill="#c9c2b8"/>'
      +'<circle cx="'+(x+92)+'" cy="'+y+'" r="11" fill="'+D+'"/><circle cx="'+(x+92)+'" cy="'+y+'" r="4" fill="#c9c2b8"/>'; };
  var pin=function(cx,cy,col){ return '<path d="M'+cx+' '+(cy+22)+' C'+(cx-8)+' '+(cy+10)+' '+(cx-14)+' '+(cy+4)+' '+(cx-14)+' '+(cy-4)+' a14 14 0 0 1 28 0 C'+(cx+14)+' '+(cy+4)+' '+(cx+8)+' '+(cy+10)+' '+cx+' '+(cy+22)+' Z" fill="'+col+'" '+th(2.5)+'/><circle cx="'+cx+'" cy="'+(cy-4)+'" r="5" fill="#fff" '+th(2)+'/>'; };

  Object.assign(window.GVIDEO_ART, {
    /* 我的安排：攤開的行事曆，一格打勾＋筆 */
    dg20260821b1p_planner: svg(
      '<rect x="22" y="28" width="78" height="100" rx="4" fill="#fff" '+st+'/><rect x="100" y="28" width="78" height="100" rx="4" fill="#fff" '+st+'/>'
     +'<g '+th(2.5)+'><line x1="34" y1="50" x2="88" y2="50"/><line x1="34" y1="68" x2="88" y2="68"/><line x1="34" y1="86" x2="78" y2="86"/><line x1="34" y1="104" x2="84" y2="104"/>'
     +'<line x1="112" y1="50" x2="140" y2="50"/><line x1="112" y1="92" x2="166" y2="92"/><line x1="112" y1="110" x2="160" y2="110"/></g>'
     +'<rect x="110" y="60" width="60" height="20" rx="4" fill="'+G+'" opacity=".25"/>'
     +chk(158,52,12)
     +'<g transform="rotate(35 160 112)"><rect x="152" y="80" width="12" height="52" rx="2" fill="'+B+'" '+st+'/><path d="M152 132 L158 144 L164 132 Z" fill="'+L+'" '+st+'/></g>'),
    /* 時刻表：車站出發看板 */
    dg20260821b1p_board: svg(
      '<line x1="54" y1="118" x2="54" y2="142" '+th(5)+'/><line x1="146" y1="118" x2="146" y2="142" '+th(5)+'/>'
     +'<rect x="16" y="20" width="168" height="100" rx="8" fill="'+NV+'" '+st+'/>'
     +txt(100,42,'DEP',16,Y)
     +'<g fill="'+Y+'"><rect x="30" y="54" width="34" height="12" rx="2"/><rect x="30" y="76" width="34" height="12" rx="2"/><rect x="30" y="98" width="34" height="12" rx="2"/></g>'
     +'<g fill="#fff"><rect x="74" y="54" width="94" height="12" rx="2"/><rect x="74" y="76" width="74" height="12" rx="2"/><rect x="74" y="98" width="86" height="12" rx="2"/></g>'),
    /* 當下才決定：驚嘆號對話框＋閃光 */
    dg20260821b1p_spark: svg(
      '<path d="M72 92 L60 120 L96 94" fill="'+Y+'" '+st+'/>'
     +'<rect x="40" y="24" width="112" height="72" rx="18" fill="'+Y+'" '+st+'/>'
     +txt(96,78,'!',50)
     +star(172,34,13)+star(28,112,10)+star(178,98,8)),

    /* 情境開場：出差——公事包＋地圖 */
    dg20260821b1p_trip: svg(
      '<path d="M70 22 L110 32 L150 22 L190 32 V118 L150 108 L110 118 L70 108 Z" fill="'+S+'" '+st+'/>'
     +'<path d="M110 32 V118 M150 22 V108" '+th(2.5)+'/>'
     +'<path d="M84 90 Q110 56 132 74 T174 50" fill="none" stroke="'+R+'" stroke-width="3.5" stroke-dasharray="2 7" stroke-linecap="round"/>'
     +pin(174,44,R)
     +'<path d="M36 70 V60 a6 6 0 0 1 6 -6 H66 a6 6 0 0 1 6 6 V70" fill="none" '+th(5)+'/>'
     +'<rect x="14" y="70" width="86" height="62" rx="8" fill="'+'#8b5a2b'+'" '+st+'/>'
     +'<line x1="14" y1="92" x2="100" y2="92" '+th(2.5)+'/><rect x="50" y="86" width="14" height="12" rx="2" fill="'+Y+'" '+th(2.5)+'/>'),
    /* 情境 1：下週會去展覽嗎？——展覽攤位＋問號 */
    dg20260821b1p_askfair: svg(
      '<line x1="8" y1="134" x2="192" y2="134" '+st+'/>'
     +'<line x1="30" y1="40" x2="30" y2="134" '+th(4)+'/><line x1="138" y1="40" x2="138" y2="134" '+th(4)+'/>'
     +'<path d="M20 30 H148 V48 a10 10 0 0 1 -16 0 a10 10 0 0 1 -16 0 a10 10 0 0 1 -16 0 a10 10 0 0 1 -16 0 a10 10 0 0 1 -16 0 a10 10 0 0 1 -16 0 a10 10 0 0 1 -16 0 a10 10 0 0 1 -16 0 Z" fill="'+B+'" '+st+'/>'
     +'<rect x="36" y="64" width="40" height="30" rx="3" fill="'+S+'" '+st+'/><rect x="92" y="64" width="40" height="30" rx="3" fill="'+L+'" '+st+'/>'
     +'<rect x="26" y="100" width="116" height="34" fill="'+C+'" '+st+'/>'
     +qb(172,40)),
    /* 情境 2：星期二早上開車下去——車子在路上 */
    dg20260821b1p_car: svg(
      '<line x1="6" y1="124" x2="194" y2="124" '+th(4)+'/>'
     +'<path d="M20 138 h24 M70 138 h24 M120 138 h24 M170 138 h20" stroke="'+Y+'" stroke-width="4" stroke-linecap="round"/>'
     +car(54,112,R)
     +'<path d="M14 72 h28 M8 86 h34 M18 100 h24" fill="none" '+th(3)+'/>'
     +'<circle cx="172" cy="30" r="14" fill="'+Y+'" '+st+'/>'),
    /* 情境 3：他自己排好的行程——路線圖：家 → 展場 */
    dg20260821b1p_route: svg(
      '<rect x="12" y="16" width="176" height="118" rx="10" fill="'+C+'" '+st+'/>'
     +'<path d="M30 112 C70 112 60 60 100 66 S150 40 160 40" fill="none" stroke="'+B+'" stroke-width="5" stroke-dasharray="2 9" stroke-linecap="round"/>'
     +'<path d="M18 112 L36 96 L54 112 Z" fill="'+R+'" '+th(2.5)+'/><rect x="24" y="110" width="24" height="16" fill="#fff" '+th(2.5)+'/>'
     +'<line x1="160" y1="44" x2="160" y2="20" '+th(3)+'/><path d="M160 20 L180 26 L160 32 Z" fill="'+G+'" '+th(2.5)+'/>'
     +'<circle cx="160" cy="44" r="6" fill="'+G+'" '+th(2.5)+'/>'
     +'<rect x="88" y="54" width="26" height="16" rx="6" fill="'+R+'" '+th(2.5)+'/><circle cx="94" cy="72" r="4" fill="'+D+'"/><circle cx="108" cy="72" r="4" fill="'+D+'"/>'),
    /* 情境 4：展覽幾點開？——綁緞帶的大門＋問號 */
    dg20260821b1p_askopen: svg(
      '<line x1="8" y1="134" x2="192" y2="134" '+st+'/>'
     +'<rect x="26" y="34" width="116" height="100" fill="'+L+'" '+st+'/>'
     +'<rect x="44" y="58" width="38" height="76" fill="'+S+'" '+st+'/><rect x="86" y="58" width="38" height="76" fill="'+S+'" '+st+'/>'
     +'<line x1="26" y1="92" x2="142" y2="92" stroke="'+R+'" stroke-width="7"/>'
     +'<path d="M84 92 l-16 -12 v24 Z M84 92 l16 -12 v24 Z" fill="'+R+'" '+th(2.5)+'/>'
     +'<rect x="40" y="18" width="88" height="18" rx="4" fill="'+B+'" '+st+'/>'
     +qb(172,40)),
    /* 情境 5：九點開、六點關——立牌上的時間 */
    dg20260821b1p_hours: svg(
      '<path d="M50 140 L70 20 H130 L150 140" fill="none" '+th(5)+'/>'
     +'<rect x="44" y="30" width="112" height="90" rx="10" fill="#fff" '+st+'/>'
     +'<circle cx="66" cy="58" r="7" fill="'+G+'" '+th(2.5)+'/>'+txt(112,66,'9:00',22)
     +'<circle cx="66" cy="96" r="7" fill="'+R+'" '+th(2.5)+'/>'+txt(112,104,'6:00',22)
     +'<line x1="56" y1="77" x2="144" y2="77" stroke="'+L+'" stroke-width="3"/>'),
    /* 情境 6：主辦單位定的——三角旗串＋清單夾板 */
    dg20260821b1p_flag: svg(
      '<path d="M6 20 Q100 52 194 20" fill="none" '+th(2.5)+'/>'
     +'<path d="M22 25 L34 50 L44 30 Z" fill="'+R+'" '+th(2.5)+'/><path d="M58 34 L66 60 L80 38 Z" fill="'+Y+'" '+th(2.5)+'/><path d="M94 38 L100 64 L114 39 Z" fill="'+B+'" '+th(2.5)+'/>'
     +'<path d="M128 37 L136 63 L148 34 Z" fill="'+G+'" '+th(2.5)+'/><path d="M162 30 L168 55 L180 25 Z" fill="'+A+'" '+th(2.5)+'/>'
     +'<rect x="66" y="66" width="68" height="78" rx="6" fill="'+'#c98a4b'+'" '+st+'/><rect x="74" y="76" width="52" height="62" fill="#fff" '+th(2.5)+'/>'
     +'<rect x="86" y="62" width="28" height="10" rx="3" fill="#c9c2b8" '+th(2.5)+'/>'
     +'<path d="M80 92 l3 3 l6 -7 M80 108 l3 3 l6 -7 M80 124 l3 3 l6 -7" fill="none" stroke="'+G+'" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>'
     +'<g '+th(2.5)+'><line x1="94" y1="92" x2="118" y2="92"/><line x1="94" y1="108" x2="118" y2="108"/><line x1="94" y1="124" x2="112" y2="124"/></g>'),
    /* 情境 7：火車八點十五分到——火車正面＋時間 */
    dg20260821b1p_train: svg(
      '<path d="M40 140 L58 118 M120 140 L102 118" '+th(4)+'/>'
     +'<rect x="30" y="18" width="100" height="104" rx="22" fill="'+B+'" '+st+'/>'
     +'<rect x="42" y="32" width="76" height="40" rx="8" fill="'+S+'" '+st+'/>'
     +'<circle cx="52" cy="98" r="8" fill="'+Y+'" '+th(2.5)+'/><circle cx="108" cy="98" r="8" fill="'+Y+'" '+th(2.5)+'/>'
     +'<rect x="68" y="92" width="24" height="12" rx="3" fill="#fff" '+th(2.5)+'/>'
     +'<rect x="140" y="44" width="54" height="30" rx="6" fill="#fff" '+st+'/>'+txt(167,66,'8:15',18,A)),
    /* 情境 8：我去車站接你——車站＋車子 */
    dg20260821b1p_pickup: svg(
      '<line x1="6" y1="134" x2="194" y2="134" '+st+'/>'
     +'<rect x="18" y="56" width="104" height="78" fill="'+L+'" '+st+'/>'
     +'<path d="M10 60 L70 24 L130 60 Z" fill="'+G+'" '+st+'/>'
     +'<circle cx="70" cy="46" r="9" fill="#fff" '+th(2.5)+'/><path d="M70 46 V40 M70 46 L74 48" fill="none" '+th(2)+'/>'
     +'<rect x="54" y="92" width="32" height="42" fill="'+S+'" '+st+'/>'
     +'<g transform="translate(118 46) scale(0.62)">'+car(10,140,A)+'</g>'
     +'<path d="M178 70 l6 -8 M186 80 l8 -2" '+th(3)+'/>'),
    /* 情境 9：當場才決定——車鑰匙＋閃光 */
    dg20260821b1p_keys: svg(
      '<circle cx="62" cy="56" r="16" fill="none" '+th(4)+'/>'
     +'<rect x="68" y="66" width="56" height="70" rx="22" fill="'+D+'" '+st+'/>'
     +'<circle cx="96" cy="88" r="8" fill="'+R+'"/><circle cx="96" cy="114" r="8" fill="#c9c2b8"/>'
     +'<path d="M124 100 H170 v8 h-8 v6 h-8 v-6 H124 Z" fill="#c9c2b8" '+st+'/>'
     +star(158,46,14)+star(36,104,9))
  });
})();

/* ============================================================
   dg20260821b1p — My Plan or the Timetable?
   文法頁 unitNo 3（B1+）：兩種現在式講未來
   ============================================================ */
window.GVIDEO.dg20260821b1p = {
  kind: 'gram',
  date: '2026-08-21',
  title: 'My Plan or the Timetable?',
  titleCn: '我約好的，還是班表排的？用現在式講未來',
  titleArt: ['dg20260821b1p_planner', 'dg20260821b1p_board', 'dg20260821b1p_spark'],
  scene: '出差行程 Business trip',
  sceneArt: 'dg20260821b1p_trip',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Rachel', voice: 'f' },
    T: { name: 'Daniel', voice: 'm' }
  },
  expr: {
    arr:  { t: 'be + V-ing + 時間', cn: '自己安排好、跟人約好的 → 現在進行式', ex: "We're interviewing two candidates on Friday morning.", exCn: '我們星期五早上要面試兩位應徵者。', note: '通常會帶時間，最好連對象、地點都講出來' },
    tt:   { t: 'arrives / opens / finishes', cn: '班表、議程、課表排定的 → 現在簡單式', ex: 'The ferry to Penghu departs at seven tomorrow.', exCn: '往澎湖的船明天七點開。', note: '常用動詞：leave、arrive、start、finish、open、close' },
    will: { t: 'will + V', cn: '說話這一刻才決定，或只是預測 → will', ex: "I'll send you the file right away.", exCn: '我馬上把檔案寄給你。', note: '已經約好的事改用 will，聽起來像你剛剛才想到' }
  },
  chapters: [
    { cn: '開場' }, { cn: '這是誰排的？' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  cardsKick: 'Who planned it? 這是誰排的？',
  cards: [
    { art: 'dg20260821b1p_planner', lab: '現在進行式', who: '我自己約好的' },
    { art: 'dg20260821b1p_board',   lab: '現在簡單式', who: '班表、議程排的' },
    { art: 'dg20260821b1p_spark',   lab: 'will',       who: '當下才決定' }
  ],
  flow: [
    { q: '是你自己排好、跟人約好的嗎？', a: '現在進行式', en: '主詞 + be + V-ing + 時間' },
    { q: '是班表、議程排的，你改不了？', a: '現在簡單式', en: '主詞 + 動詞(s) + 時間' },
    { q: '是說話這一刻才決定的嗎？',     a: 'will',       en: 'will + 原形動詞' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: '講未來，不一定要用 will。英文的現在進行式和現在簡單式，也都能講明天的事。', vis: { type: 'title' } },

    /* ---- 1 核心：這是誰排的？ ---- */
    { ch: 1, sp: 'N', zh: '要講一件未來的事，先問一句：這是誰排的？', vis: { type: 'cards', show: 0 } },
    { ch: 1, sp: 'N', zh: '如果是你自己安排好、跟別人約好的，用現在進行式，後面通常帶一個時間。',
      hi: [{ t: '現在進行式', k: 'arr', c: 3 }], vis: { type: 'cards', show: 1, pop: true } },
    { ch: 1, sp: 'A', en: "I'm visiting a client in Kaohsiung on Thursday.", cn: '我星期四要去高雄拜訪客戶。',
      hi: [{ t: "I'm visiting", cn: '約好的', k: 'arr', c: 3 }], vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'N', zh: '如果是班表、議程、課表排好的，不是你能改的，就用現在簡單式。',
      hi: [{ t: '現在簡單式', k: 'tt', c: 4 }], vis: { type: 'cards', show: 2, pop: true } },
    { ch: 1, sp: 'T', en: 'The high-speed train gets in at ten forty.', cn: '高鐵十點四十分到站。',
      hi: [{ t: 'gets in', cn: '班表', k: 'tt', c: 4 }], vis: { type: 'cards', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: '這兩種都是說話之前就定好的，所以英文直接用現在式來講未來。',
      vis: { type: 'cards', show: 2 } },
    { ch: 1, sp: 'N', zh: 'will 就不一樣了。will 通常是說話這一刻才決定，或只是在預測。',
      hi: [{ t: 'will', k: 'will', c: 2 }], vis: { type: 'cards', show: 3, pop: true } },
    { ch: 1, sp: 'A', en: "It's pouring. I'll call a taxi, then.", cn: '雨下好大，那我叫計程車好了。',
      hi: [{ t: "I'll call", cn: '當場決定', k: 'will', c: 2 }], vis: { type: 'cards', show: 3, lit: 2 } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: '約好的計畫：主詞加 be 動詞，再加動詞 ing，最後放時間。能講出對象或地點更好。',
      hi: [{ t: '約好的計畫', k: 'arr', c: 3 }],
      vis: { type: 'pattern', kick: 'Arrangements 約好的計畫', rows: [
        { lab: '跟人約', blocks: [{ t: 'We', k: 's' }, { t: 'are meeting', k: 'v' }, { t: 'the designers', k: 'n' }, { t: 'on Monday', k: 'o' }] },
        { lab: '排好的', blocks: [{ t: 'I', k: 's' }, { t: 'am picking up', k: 'v' }, { t: 'my parents', k: 'n' }, { t: 'at noon', k: 'o' }] }
      ], note: '沒有時間的話，聽起來會像「現在正在做」' } },
    { ch: 2, sp: 'N', zh: '班表的未來：直接用現在簡單式，主詞是第三人稱單數，動詞要加 s。就算講的是明天，也用現在式。',
      hi: [{ t: '現在簡單式', k: 'tt', c: 4 }],
      vis: { type: 'pattern', kick: 'Timetables 班表・議程', rows: [
        { lab: '船班', blocks: [{ t: 'The ferry', k: 's' }, { t: 'departs', k: 'v' }, { t: 'at 6:15', k: 'o' }] },
        { lab: '議程', blocks: [{ t: 'The workshop', k: 's' }, { t: 'finishes', k: 'v' }, { t: 'at noon', k: 'o' }] }
      ], note: '常用動詞：leave、arrive、start、finish、open、close' } },
    { ch: 2, sp: 'N', zh: '問句也分兩種：問對方的計畫，用進行式；問班表或活動時間，就用 do 或 does。',
      vis: { type: 'pattern', kick: 'Questions 兩種問法', rows: [
        { lab: '問計畫', blocks: [{ t: 'What', k: 'x' }, { t: 'are', k: 'x' }, { t: 'you', k: 's' }, { t: 'doing', k: 'v' }, { t: 'on Saturday?', k: 'o' }] },
        { lab: '問班表', blocks: [{ t: 'When', k: 'x' }, { t: 'does', k: 'x' }, { t: 'the exhibition', k: 's' }, { t: 'end?', k: 'v' }] }
      ] } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: 'Rachel 和同事 Daniel 在確認下星期的出差行程。注意每句是誰排的。', vis: { type: 'scene', art: 'dg20260821b1p_trip' } },
    { ch: 3, sp: 'A', en: 'Are you coming to the trade fair in Tainan next week?', cn: '你下星期會去台南的商展嗎？',
      hi: [{ t: 'Are you coming', cn: '問對方的安排', k: 'arr', c: 3 }], vis: { type: 'scene', art: 'dg20260821b1p_askfair' } },
    { ch: 3, sp: 'T', en: "Yes, I'm driving down on Tuesday morning.", cn: '會，我星期二早上開車下去。',
      hi: [{ t: "I'm driving", cn: '自己排好的', k: 'arr', c: 3 }], vis: { type: 'scene', art: 'dg20260821b1p_car' } },
    { ch: 3, sp: 'N', zh: 'Daniel 已經決定好哪天去、怎麼去，是他自己的安排，所以用 I\'m driving。',
      hi: [{ t: "I'm driving", k: 'arr', c: 3 }], vis: { type: 'scene', art: 'dg20260821b1p_route' } },
    { ch: 3, sp: 'A', en: 'What time does the fair open on Wednesday?', cn: '商展星期三幾點開？',
      hi: [{ t: 'does the fair open', cn: '問開展時間', k: 'tt', c: 4 }], vis: { type: 'scene', art: 'dg20260821b1p_askopen' } },
    { ch: 3, sp: 'T', en: 'It opens at nine and closes at six.', cn: '九點開，六點關。',
      hi: [{ t: 'opens', cn: '主辦單位定的', k: 'tt', c: 4 }], vis: { type: 'scene', art: 'dg20260821b1p_hours' } },
    { ch: 3, sp: 'N', zh: '開展時間是主辦單位定的，Daniel 只是照著講，所以用現在簡單式 opens。',
      hi: [{ t: 'opens', k: 'tt', c: 4 }], vis: { type: 'scene', art: 'dg20260821b1p_flag' } },
    { ch: 3, sp: 'A', en: 'My train arrives at eight fifteen that morning.', cn: '我的火車那天早上八點十五分到。',
      hi: [{ t: 'arrives', cn: '班表', k: 'tt', c: 4 }], vis: { type: 'scene', art: 'dg20260821b1p_train' } },
    { ch: 3, sp: 'T', en: "Great. I'll pick you up at the station.", cn: '太好了，那我去車站接你。',
      hi: [{ t: "I'll pick you up", cn: '當場決定', k: 'will', c: 2 }], vis: { type: 'scene', art: 'dg20260821b1p_pickup' } },
    { ch: 3, sp: 'N', zh: 'Daniel 聽到她的班次，才當場決定要去接她，事先沒有排，所以用 will。',
      hi: [{ t: 'will', k: 'will', c: 2 }], vis: { type: 'scene', art: 'dg20260821b1p_keys' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '同一班船，有兩種說法，看你講的是船班，還是你的行程。',
      vis: { type: 'vs', sm: true, kick: '船班 vs 我的行程',
        a: { w: 'The ferry leaves at noon.', def: '渡輪中午開。', cn: '班表 → 簡單式' },
        b: { w: "We're taking the ferry at noon.", def: '我們中午要搭渡輪。', cn: '我們的安排 → 進行式' } } },
    { ch: 4, sp: 'A', en: 'The ferry leaves at noon.', cn: '渡輪中午開。',
      hi: [{ t: 'leaves', cn: '班表', k: 'tt', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '船班 vs 我的行程',
        a: { w: 'The ferry leaves at noon.', def: '渡輪中午開。', cn: '班表 → 簡單式' },
        b: { w: "We're taking the ferry at noon.", def: '我們中午要搭渡輪。', cn: '我們的安排 → 進行式' } } },
    { ch: 4, sp: 'T', en: "We're taking the ferry at noon.", cn: '我們中午要搭渡輪。',
      hi: [{ t: "We're taking", cn: '我們的安排', k: 'arr', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '船班 vs 我的行程',
        a: { w: 'The ferry leaves at noon.', def: '渡輪中午開。', cn: '班表 → 簡單式' },
        b: { w: "We're taking the ferry at noon.", def: '我們中午要搭渡輪。', cn: '我們的安排 → 進行式' } } },
    { ch: 4, sp: 'N', zh: '第一句在講船公司的班表；第二句在講你們已經決定好的行程。兩句都對，重點不一樣。',
      vis: { type: 'vs', sm: true, kick: '船班 vs 我的行程',
        a: { w: 'The ferry leaves at noon.', def: '渡輪中午開。', cn: '班表 → 簡單式' },
        b: { w: "We're taking the ferry at noon.", def: '我們中午要搭渡輪。', cn: '我們的安排 → 進行式' } } },
    { ch: 4, sp: 'N', zh: '問句也一樣。問對方的打算用進行式，問固定的規定用 do 或 does。',
      vis: { type: 'vs', sm: true, kick: '問打算 vs 問規定',
        a: { w: 'Are you working this Saturday?', def: '你這個星期六要上班嗎？', cn: '問對方的安排 → 進行式' },
        b: { w: 'Does the library open on Saturdays?', def: '圖書館星期六有開嗎？', cn: '問固定規定 → 簡單式' } } },
    { ch: 4, sp: 'A', en: 'Are you working this Saturday?', cn: '你這個星期六要上班嗎？',
      hi: [{ t: 'Are you working', cn: '問安排', k: 'arr', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '問打算 vs 問規定',
        a: { w: 'Are you working this Saturday?', def: '你這個星期六要上班嗎？', cn: '問對方的安排 → 進行式' },
        b: { w: 'Does the library open on Saturdays?', def: '圖書館星期六有開嗎？', cn: '問固定規定 → 簡單式' } } },
    { ch: 4, sp: 'T', en: 'Does the library open on Saturdays?', cn: '圖書館星期六有開嗎？',
      hi: [{ t: 'Does the library open', cn: '問規定', k: 'tt', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '問打算 vs 問規定',
        a: { w: 'Are you working this Saturday?', def: '你這個星期六要上班嗎？', cn: '問對方的安排 → 進行式' },
        b: { w: 'Does the library open on Saturdays?', def: '圖書館星期六有開嗎？', cn: '問固定規定 → 簡單式' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '最後整理成一個判斷流程。遇到未來的事，照順序問三題。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一問：是你自己排好、跟人約好的嗎？是的話，用現在進行式。',
      hi: [{ t: '現在進行式', k: 'arr', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'A', en: "I'm getting my hair cut on Friday afternoon.", cn: '我星期五下午約了剪頭髮。',
      hi: [{ t: "I'm getting", cn: '約好了', k: 'arr', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二問：是班表、議程排的，你改不了嗎？是的話，用現在簡單式。',
      hi: [{ t: '現在簡單式', k: 'tt', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'T', en: 'The conference starts the day after tomorrow.', cn: '研討會後天開始。',
      hi: [{ t: 'starts', cn: '議程', k: 'tt', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '第三問：是說話這一刻才決定的嗎？是的話，用 will。',
      hi: [{ t: 'will', k: 'will', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'A', en: "Someone's at the door. I'll get it.", cn: '有人在門口，我去開。',
      hi: [{ t: "I'll get it", cn: '當場決定', k: 'will', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說說看。看到中文情境，先自己用英文說出來，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：你已經跟同事約好，星期六下午一起打羽球。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '你已經跟同事約好，星期六下午一起打羽球。' } },
    { ch: 6, sp: 'A', en: "I'm playing badminton with my coworkers on Saturday afternoon.", cn: '我星期六下午要跟同事打羽球。',
      hi: [{ t: "I'm playing", cn: '約好的 → 進行式', k: 'arr', c: 3 }],
      vis: { type: 'speak', n: 1, show: true, sit: '你已經跟同事約好，星期六下午一起打羽球。', a: "I'm playing badminton with my coworkers on Saturday afternoon." } },
    { ch: 6, sp: 'N', zh: '情境二：同事問最後一班接駁車幾點，班表上寫十一點半。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '同事問最後一班接駁車幾點，班表上寫十一點半。' } },
    { ch: 6, sp: 'T', en: 'The last shuttle leaves at eleven thirty.', cn: '最後一班接駁車十一點半開。',
      hi: [{ t: 'leaves', cn: '班表 → 簡單式', k: 'tt', c: 4 }],
      vis: { type: 'speak', n: 2, show: true, sit: '同事問最後一班接駁車幾點，班表上寫十一點半。', a: 'The last shuttle leaves at eleven thirty.' } },
    { ch: 6, sp: 'N', zh: '情境三：朋友說他好渴，你當場決定去幫他買杯飲料。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '朋友說他好渴，你當場決定去幫他買杯飲料。' } },
    { ch: 6, sp: 'A', en: "I'll get you something to drink.", cn: '我去幫你買點喝的。',
      hi: [{ t: "I'll get", cn: '當場決定 → will', k: 'will', c: 2 }],
      vis: { type: 'speak', n: 3, show: true, sit: '朋友說他好渴，你當場決定去幫他買杯飲料。', a: "I'll get you something to drink." } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結一下：自己約好的，用進行式；班表排的，用簡單式；說話當下才決定的，才用 will。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '下次要講行程，先看它是寫在你的行事曆上，還是寫在班表上。', vis: { type: 'end' } }
  ]
};
