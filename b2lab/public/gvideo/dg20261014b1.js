/* ============================================================
   B2 Read 文法影片解說 — dg20261014b1（2026-10-17 試做，之後所有單元的範本）
   格式與規則見 b2lab/tools/GVIDEO_SPEC.md；一個單元一個檔，放在 gvideo/<單元 id>.js。
   這支是試做版，插圖名沿用 gvTrain 這種舊命名；新的單元一律用「<單元 id>_名稱」。
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

  Object.assign(window.GVIDEO_ART, {
    /* 時刻表：火車＋月台時鐘（現在簡單式） */
    gvTrain: svg(
      '<line x1="8" y1="134" x2="192" y2="134" '+st+'/>'
     +'<rect x="22" y="46" width="124" height="76" rx="16" fill="'+B+'" '+st+'/>'
     +'<rect x="34" y="58" width="30" height="24" rx="4" fill="'+S+'" '+st+'/><rect x="72" y="58" width="30" height="24" rx="4" fill="'+S+'" '+st+'/>'
     +'<rect x="110" y="58" width="24" height="48" rx="3" fill="'+L+'" '+st+'/>'
     +'<rect x="23" y="92" width="86" height="7" fill="#fff"/>'
     +'<circle cx="48" cy="126" r="9" fill="'+D+'"/><circle cx="118" cy="126" r="9" fill="'+D+'"/>'
     +'<line x1="174" y1="58" x2="174" y2="134" '+th(4)+'/>'
     +'<circle cx="174" cy="44" r="18" fill="#fff" '+st+'/><path d="M174 44 V32 M174 44 L183 49" '+th(3.5)+' fill="none"/>'),
    /* 約好的事：月曆上一格打勾＋手機確認（現在進行式） */
    gvHandshake: svg(
      cal(26,32,108,96)
     +'<rect x="98" y="88" width="24" height="24" rx="3" fill="'+G+'" opacity=".25"/>'
     +chk(110,100,13)
     +'<rect x="148" y="58" width="36" height="66" rx="7" fill="'+L+'" '+st+'/><rect x="154" y="68" width="24" height="40" rx="2" fill="#fff" '+th(2.5)+'/>'
     +'<path d="M158 82 l5 6 l10 -12" fill="none" stroke="'+G+'" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>'),
    /* 還沒定：雲＋問號（will） */
    gvCloud: svg(
      '<path d="M46 108 a24 24 0 0 1 6 -46 a32 32 0 0 1 60 -10 a26 26 0 0 1 38 26 a20 20 0 0 1 -6 30 Z" fill="'+S+'" '+st+'/>'
     +'<g stroke="'+B+'" stroke-width="4" stroke-linecap="round" stroke-dasharray="1 9"><line x1="66" y1="118" x2="60" y2="140"/><line x1="96" y1="118" x2="90" y2="140"/><line x1="126" y1="118" x2="120" y2="140"/></g>'
     +qb(160,36)),

    /* 情境 1：約週末——手機聊天 */
    gvPhoneCal: svg(
      '<rect x="60" y="14" width="80" height="124" rx="13" fill="'+D+'" '+st+'/><rect x="67" y="26" width="66" height="98" rx="4" fill="#fff"/>'
     +'<rect x="72" y="34" width="40" height="16" rx="7" fill="'+L+'" '+th(2.5)+'/>'
     +'<rect x="88" y="56" width="40" height="16" rx="7" fill="'+S+'" '+th(2.5)+'/>'
     +'<rect x="72" y="78" width="34" height="16" rx="7" fill="'+L+'" '+th(2.5)+'/>'
     +'<rect x="92" y="100" width="36" height="16" rx="7" fill="'+S+'" '+th(2.5)+'/>'
     +'<circle cx="34" cy="62" r="16" fill="'+Y+'" '+st+'/><circle cx="166" cy="92" r="16" fill="'+A+'" '+st+'/>'
     +'<path d="M28 60 h0 M40 60 h0 M160 90 h0 M172 90 h0" '+th(4)+'/><path d="M29 68 q5 4 10 0 M161 98 q5 4 10 0" fill="none" '+th(2.5)+'/>'),
    /* 情境 2：星期六有空嗎？——對話框裡的星期六月曆頁 */
    gvAskFree: svg(
      '<path d="M26 22 H150 a14 14 0 0 1 14 14 V92 a14 14 0 0 1 -14 14 H70 L48 128 V106 H26 a14 14 0 0 1 -14 -14 V36 a14 14 0 0 1 14 -14 Z" fill="#fff" '+st+'/>'
     +'<rect x="60" y="36" width="56" height="58" rx="6" fill="#fff" '+st+'/><path d="M60 54 V42 a6 6 0 0 1 6 -6 H110 a6 6 0 0 1 6 6 V54 Z" fill="'+R+'" '+st+'/>'
     +txt(88,82,'SAT',17)
     +qb(176,34)),
    /* 情境 3：去爸爸的店幫忙——小店面 */
    gvShopDad: svg(
      '<line x1="10" y1="134" x2="190" y2="134" '+st+'/>'
     +'<rect x="34" y="62" width="132" height="72" fill="'+C+'" '+st+'/>'
     +'<path d="M28 46 H172 L166 66 a11 11 0 0 1 -22 0 a11 11 0 0 1 -22 0 a11 11 0 0 1 -22 0 a11 11 0 0 1 -22 0 a11 11 0 0 1 -22 0 a11 11 0 0 1 -22 0 Z" fill="'+A+'" '+st+'/>'
     +'<path d="M56 46 L56 66 M100 46 L100 66 M144 46 L144 66" stroke="#fff" stroke-width="10"/>'
     +'<path d="M28 46 H172 L166 66 a11 11 0 0 1 -22 0 a11 11 0 0 1 -22 0 a11 11 0 0 1 -22 0 a11 11 0 0 1 -22 0 a11 11 0 0 1 -22 0 a11 11 0 0 1 -22 0 Z" fill="none" '+st+'/>'
     +'<rect x="84" y="88" width="32" height="46" fill="'+L+'" '+st+'/><circle cx="109" cy="112" r="2.5" fill="'+D+'"/>'
     +'<rect x="44" y="84" width="30" height="26" fill="'+S+'" '+st+'/><rect x="126" y="84" width="30" height="26" fill="'+S+'" '+st+'/>'
     +'<rect x="66" y="22" width="68" height="18" rx="4" fill="'+L+'" '+st+'/>'),
    /* 情境 4：早就答應了——OK 對話框＋打勾 */
    gvPromise: svg(
      '<path d="M20 30 H104 a12 12 0 0 1 12 12 V80 a12 12 0 0 1 -12 12 H52 L36 108 V92 H20 a12 12 0 0 1 -12 -12 V42 a12 12 0 0 1 12 -12 Z" fill="'+L+'" '+st+'/>'
     +txt(62,72,'OK!',28)
     +chk(150,92,30)
     +'<path d="M128 30 l6 -12 M150 24 v-14 M172 30 l-6 -12" '+th(3.5)+'/>'),
    /* 情境 5：店幾點關？——店門＋掛牌＋問號 */
    gvShopSign: svg(
      '<rect x="62" y="20" width="76" height="116" rx="4" fill="'+L+'" '+st+'/><rect x="72" y="32" width="56" height="40" rx="3" fill="'+S+'" '+st+'/>'
     +'<circle cx="126" cy="96" r="4" fill="'+D+'"/>'
     +'<path d="M88 44 L100 36 L112 44" fill="none" '+th(2.5)+'/>'
     +'<rect x="78" y="44" width="44" height="28" rx="4" fill="#fff" '+st+'/>'
     +'<circle cx="100" cy="58" r="9" fill="#fff" '+th(2.5)+'/><path d="M100 58 V52 M100 58 L105 61" fill="none" '+th(2.5)+'/>'
     +qb(162,40)),
    /* 情境 6：五點關——大時鐘指在 5:00 */
    gvClock5: svg(
      '<circle cx="100" cy="75" r="54" fill="#fff" '+th(4)+'/>'
     +'<g '+th(4)+'><line x1="100" y1="27" x2="100" y2="35"/><line x1="148" y1="75" x2="140" y2="75"/><line x1="100" y1="123" x2="100" y2="115"/><line x1="52" y1="75" x2="60" y2="75"/></g>'
     +'<g fill="'+D+'"><circle cx="124" cy="33.4" r="2.5"/><circle cx="141.6" cy="51" r="2.5"/><circle cx="141.6" cy="99" r="2.5"/><circle cx="124" cy="116.6" r="2.5"/><circle cx="76" cy="116.6" r="2.5"/><circle cx="58.4" cy="99" r="2.5"/><circle cx="58.4" cy="51" r="2.5"/><circle cx="76" cy="33.4" r="2.5"/></g>'
     +'<line x1="100" y1="75" x2="100" y2="38" '+th(4)+'/><line x1="100" y1="75" x2="116" y2="102.7" stroke="'+A+'" stroke-width="7" stroke-linecap="round"/>'
     +'<circle cx="100" cy="75" r="5" fill="'+D+'"/>'
     +txt(170,40,'5:00',18,A)),
    /* 情境 7：營業時間是店家定的——營業時間牌 */
    gvHours: svg(
      '<rect x="46" y="16" width="108" height="120" rx="10" fill="#fff" '+st+'/>'
     +'<path d="M46 44 V26 a10 10 0 0 1 10 -10 H144 a10 10 0 0 1 10 10 V44 Z" fill="'+A+'" '+st+'/>'
     +'<circle cx="100" cy="30" r="7" fill="#fff" '+th(2.5)+'/><path d="M100 30 V26 M100 30 L103 32" fill="none" '+th(2)+'/>'
     +'<circle cx="64" cy="70" r="6" fill="'+G+'" '+th(2.5)+'/>'+txt(110,77,'10:00',20)
     +'<circle cx="64" cy="106" r="6" fill="'+R+'" '+th(2.5)+'/>'+txt(110,113,'5:00',20)
     +'<line x1="56" y1="88" x2="144" y2="88" stroke="'+L+'" stroke-width="3"/>'),
    /* 情境 8：電影七點半開演——銀幕＋票 */
    gvCinema: svg(
      '<rect x="18" y="16" width="150" height="76" rx="6" fill="#33405c" '+st+'/>'
     +'<path d="M84 38 L84 70 L110 54 Z" fill="#fff" '+th(2.5)+'/>'
     +'<g fill="'+R+'" '+th(2.5)+'><rect x="22" y="108" width="30" height="26" rx="6"/><rect x="60" y="108" width="30" height="26" rx="6"/><rect x="98" y="108" width="30" height="26" rx="6"/></g>'
     +'<g transform="rotate(-14 162 112)"><rect x="138" y="96" width="50" height="30" rx="4" fill="'+Y+'" '+st+'/><line x1="152" y1="96" x2="152" y2="126" stroke="'+D+'" stroke-width="2" stroke-dasharray="3 3"/>'+txt(170,116,'7:30',11)+'</g>'),
    /* 情境 9：那我帶零食——爆米花桶＋洋芋片 */
    gvSnacks: svg(
      '<path d="M50 60 L62 136 H118 L130 60 Z" fill="#fff" '+st+'/>'
     +'<path d="M68 60 L76 136 M90 60 V136 M112 60 L104 136" stroke="'+R+'" stroke-width="8"/>'
     +'<path d="M50 60 L62 136 H118 L130 60 Z" fill="none" '+st+'/>'
     +'<g fill="'+C+'" '+th(2.5)+'><circle cx="60" cy="54" r="10"/><circle cx="78" cy="46" r="11"/><circle cx="98" cy="44" r="11"/><circle cx="118" cy="52" r="10"/><circle cx="88" cy="58" r="9"/><circle cx="108" cy="60" r="8"/></g>'
     +'<path d="M146 76 L184 70 L188 132 L150 136 Z" fill="'+A+'" '+st+'/><path d="M146 76 l4 -8 l34 -4 l0 6" fill="'+Y+'" '+st+'/>'
     +'<circle cx="168" cy="104" r="9" fill="'+Y+'" '+th(2.5)+'/>'),
    /* 情境 10：當場才決定——燈泡亮起 */
    gvBulb: svg(
      '<path d="M100 22 a34 34 0 0 1 20 61 c-4 3 -6 8 -6 13 V102 H86 V96 c0 -5 -2 -10 -6 -13 a34 34 0 0 1 20 -61 Z" fill="'+Y+'" '+st+'/>'
     +'<rect x="86" y="102" width="28" height="10" rx="2" fill="#c9c2b8" '+st+'/><rect x="88" y="112" width="24" height="10" rx="3" fill="#c9c2b8" '+st+'/>'
     +'<path d="M92 80 l8 -14 l8 14" fill="none" '+th(3)+'/>'
     +'<g '+th(4)+'><line x1="100" y1="6" x2="100" y2="12"/><line x1="52" y1="26" x2="58" y2="32"/><line x1="148" y1="26" x2="142" y2="32"/><line x1="36" y1="60" x2="44" y2="60"/><line x1="164" y1="60" x2="156" y2="60"/></g>'
     +'<path d="M150 112 L174 108 L176 138 L152 140 Z" fill="'+A+'" '+st+'/>')
  });
})();

/* ============================================================
   dg20261014b1 — Timetable or Arrangement? Two Present Tenses, One Future
   Grammar in Use Unit 19（Present tenses for the future）＋ will 的位置
   ============================================================ */
window.GVIDEO.dg20261014b1 = {
  kind: 'gram',
  date: '2026-10-14',
  title: 'Timetable or Arrangement?',
  titleCn: '時刻表還是約好的事？兩種現在式都在講未來',
  titleArt: ['gvTrain', 'gvHandshake', 'gvCloud'],
  scene: '週末計畫 Weekend plans',
  sceneArt: 'gvPhoneCal',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Mia', voice: 'f' },
    T: { name: 'Ben', voice: 'm' }
  },
  expr: {
    tt:   { t: 'leaves / starts / closes', cn: '時刻表、公司定的 → 現在簡單式', ex: 'The museum opens at ten on Sunday.', exCn: '博物館星期日十點開門。', note: '常用動詞：start、begin、leave、arrive、open、close' },
    arr:  { t: 'be + V-ing', cn: '自己約好的 → 現在進行式', ex: "We're visiting my grandparents this weekend.", exCn: '我們這週末要去看爺爺奶奶。', note: '句子裡要有未來的時間，否則會聽成「現在正在做」' },
    will: { t: 'will + V', cn: '還沒定：猜測或當場決定 → will', ex: "I'll call you back in five minutes.", exCn: '我五分鐘後回電給你。', note: 'I think、maybe、probably 常跟 will 一起出現' }
  },
  chapters: [
    { cn: '開場' }, { cn: '先問：誰決定的？' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  /* 時間線上的三個位置（x＝橫軸百分比） */
  timeline: [
    { x: 38, art: 'gvTrain',     lab: '現在簡單式', who: '時刻表定的' },
    { x: 62, art: 'gvHandshake', lab: '現在進行式', who: '自己約好的' },
    { x: 86, art: 'gvCloud',     lab: 'will',       who: '還沒定・猜測', open: true }
  ],
  /* 判斷流程：照順序問 */
  flow: [
    { q: '是時刻表、課表，或公司、學校定的嗎？', a: '現在簡單式', en: '主詞 + 動詞(s) + 時間' },
    { q: '是你自己，或跟別人已經約好的嗎？',   a: '現在進行式', en: '主詞 + be + V-ing + 時間' },
    { q: '都不是：只是猜，或當場才決定？',     a: 'will',       en: 'will + 原形動詞' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: '同樣在講未來，英文有時候用現在簡單式，有時候用現在進行式。這支影片教你一秒分辨。', vis: { type: 'title' } },

    /* ---- 1 核心：誰決定的？ ---- */
    { ch: 1, sp: 'N', zh: '講未來的事之前，先問自己一句：這件事是誰決定的？', vis: { type: 'timeline', show: 0 } },
    { ch: 1, sp: 'N', zh: '如果是時刻表、公司或學校決定的，你只是照著走，就用現在簡單式。',
      hi: [{ t: '現在簡單式', k: 'tt', c: 3 }], vis: { type: 'timeline', show: 1, pop: true } },
    { ch: 1, sp: 'A', en: 'Our train leaves at nine fifteen on Saturday.', cn: '我們的火車星期六九點十五分開。',
      hi: [{ t: 'leaves', cn: '表定出發', k: 'tt', c: 3 }], vis: { type: 'timeline', show: 1, lit: 0 } },
    { ch: 1, sp: 'N', zh: '如果是你自己，或你跟別人已經談好的事，就用現在進行式。',
      hi: [{ t: '現在進行式', k: 'arr', c: 4 }], vis: { type: 'timeline', show: 2, pop: true } },
    { ch: 1, sp: 'T', en: "I'm meeting my cousin at the station.", cn: '我要在車站跟我表哥碰面。',
      hi: [{ t: "I'm meeting", cn: '約好要碰面', k: 'arr', c: 4 }], vis: { type: 'timeline', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: '這兩件事有個共同點：在說話的這一刻，就已經定好了。所以英文用現在的形狀，講的卻是未來。',
      vis: { type: 'timeline', show: 2, dec: true } },
    { ch: 1, sp: 'N', zh: '如果還沒有人決定，只是在猜，那就不是安排，要用 will。',
      hi: [{ t: 'will', k: 'will', c: 2 }], vis: { type: 'timeline', show: 3, pop: true } },
    { ch: 1, sp: 'A', en: 'I think it will rain in the afternoon.', cn: '我想下午會下雨。',
      hi: [{ t: 'will rain', cn: '猜會下雨', k: 'will', c: 2 }], vis: { type: 'timeline', show: 3, lit: 2 } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: '現在簡單式的句型：主詞加動詞，主詞是第三人稱單數要加 s，最後一定要放時間。',
      hi: [{ t: '現在簡單式', k: 'tt', c: 3 }],
      vis: { type: 'pattern', kick: 'Present simple 現在簡單式', rows: [
        { lab: '時刻表', blocks: [{ t: 'The film', k: 's' }, { t: 'starts', k: 'v' }, { t: 'at 7:30', k: 'o' }] },
        { lab: '課表',   blocks: [{ t: 'Classes', k: 's' }, { t: 'begin', k: 'v' }, { t: 'next Monday', k: 'o' }] }
      ], note: '第三人稱單數：start → starts' } },
    { ch: 2, sp: 'N', zh: '最常用的動詞就這幾個：start、begin、leave、arrive、open、close。',
      vis: { type: 'family', kick: 'Timetable verbs 時刻表動詞', core: 'Timetable verbs', coreCn: '時刻表最愛的動詞', art: 'gvTrain', items: [
        { t: 'start · begin', cn: '開始' }, { t: 'leave · arrive', cn: '出發・抵達' }, { t: 'open · close', cn: '開門・關門' }
      ] } },
    { ch: 2, sp: 'N', zh: '現在進行式的句型：主詞加 be 動詞，再加動詞 ing，後面放一個未來的時間。',
      hi: [{ t: '現在進行式', k: 'arr', c: 4 }],
      vis: { type: 'pattern', kick: 'Present continuous 現在進行式', rows: [
        { lab: '約好的', blocks: [{ t: 'I', k: 's' }, { t: 'am having', k: 'v' }, { t: 'dinner with Leo', k: 'n' }, { t: 'tonight', k: 'o' }] },
        { lab: '訂好的', blocks: [{ t: 'We', k: 's' }, { t: 'are flying', k: 'v' }, { t: 'to Tokyo', k: 'n' }, { t: 'next week', k: 'o' }] }
      ] } },
    { ch: 2, sp: 'N', zh: '時間很重要。沒有時間，聽的人會以為你在說現在正在做；加上時間，就變成已經約好的未來。',
      vis: { type: 'pattern', kick: '加上時間 Add a time', rows: [
        { lab: '現在正在打', blocks: [{ t: "I'm playing tennis", k: 'v' }] },
        { lab: '星期日要打', blocks: [{ t: "I'm playing tennis", k: 'v' }, { t: 'on Sunday', k: 'o', add: true }] }
      ], note: '時間一加，意思就從「現在」變成「約好的未來」' } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: '來聽 Mia 和 Ben 怎麼約週末，注意他們用的是哪一種形狀。', vis: { type: 'scene', art: 'gvPhoneCal' } },
    { ch: 3, sp: 'A', en: 'Are you free on Saturday afternoon?', cn: '你星期六下午有空嗎？', vis: { type: 'scene', art: 'gvAskFree' } },
    { ch: 3, sp: 'T', en: "Sorry, I'm helping my dad at his shop.", cn: '抱歉，我要去我爸的店幫忙。',
      hi: [{ t: "I'm helping", cn: '已經答應要幫忙', k: 'arr', c: 4 }], vis: { type: 'scene', art: 'gvShopDad' } },
    { ch: 3, sp: 'N', zh: "Ben 早就答應爸爸了，是約好的事，所以用 I'm helping。",
      hi: [{ t: "I'm helping", k: 'arr', c: 4 }], vis: { type: 'scene', art: 'gvPromise' } },
    { ch: 3, sp: 'A', en: 'Oh, OK. What time does the shop close?', cn: '喔，好。店幾點關？',
      hi: [{ t: 'does the shop close', cn: '店幾點關', k: 'tt', c: 3 }], vis: { type: 'scene', art: 'gvShopSign' } },
    { ch: 3, sp: 'T', en: 'It closes at five, so I can meet you after that.', cn: '五點關，所以之後我可以跟你碰面。',
      hi: [{ t: 'closes', cn: '營業時間', k: 'tt', c: 3 }], vis: { type: 'scene', art: 'gvClock5' } },
    { ch: 3, sp: 'N', zh: '店幾點關門是店家定的，Ben 只是照著走，所以用現在簡單式 closes。',
      hi: [{ t: 'closes', k: 'tt', c: 3 }], vis: { type: 'scene', art: 'gvHours' } },
    { ch: 3, sp: 'A', en: 'Great. The movie starts at seven thirty.', cn: '太好了，電影七點半開演。',
      hi: [{ t: 'starts', cn: '場次時間', k: 'tt', c: 3 }], vis: { type: 'scene', art: 'gvCinema' } },
    { ch: 3, sp: 'T', en: "Perfect. I'll bring some snacks.", cn: '太好了，那我帶點零食。',
      hi: [{ t: "I'll bring", cn: '當場決定', k: 'will', c: 2 }], vis: { type: 'scene', art: 'gvSnacks' } },
    { ch: 3, sp: 'N', zh: '最後這句，是 Ben 聽到電影時間才當場決定要帶零食，事先沒有安排，所以用 will。',
      hi: [{ t: 'will', k: 'will', c: 2 }], vis: { type: 'scene', art: 'gvBulb' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '同樣是八點，換一個形狀，意思就不一樣。',
      vis: { type: 'vs', sm: true, kick: '同一個時間，兩種未來',
        a: { w: 'The bus leaves at eight.', def: '公車八點開。', cn: '時刻表定的 → 現在簡單式' },
        b: { w: "I'm leaving at eight.", def: '我八點要出門。', cn: '自己排好的 → 現在進行式' } } },
    { ch: 4, sp: 'A', en: 'The bus leaves at eight.', cn: '公車八點開。',
      hi: [{ t: 'leaves', cn: '時刻表', k: 'tt', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '同一個時間，兩種未來',
        a: { w: 'The bus leaves at eight.', def: '公車八點開。', cn: '時刻表定的 → 現在簡單式' },
        b: { w: "I'm leaving at eight.", def: '我八點要出門。', cn: '自己排好的 → 現在進行式' } } },
    { ch: 4, sp: 'T', en: "I'm leaving at eight.", cn: '我八點要出門。',
      hi: [{ t: "I'm leaving", cn: '自己排好', k: 'arr', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '同一個時間，兩種未來',
        a: { w: 'The bus leaves at eight.', def: '公車八點開。', cn: '時刻表定的 → 現在簡單式' },
        b: { w: "I'm leaving at eight.", def: '我八點要出門。', cn: '自己排好的 → 現在進行式' } } },
    { ch: 4, sp: 'N', zh: '第一句說的是公車時刻表，誰都改不了；第二句是我自己決定八點出門，已經排進行程了。',
      vis: { type: 'vs', sm: true, kick: '同一個時間，兩種未來',
        a: { w: 'The bus leaves at eight.', def: '公車八點開。', cn: '時刻表定的 → 現在簡單式' },
        b: { w: "I'm leaving at eight.", def: '我八點要出門。', cn: '自己排好的 → 現在進行式' } } },
    { ch: 4, sp: 'N', zh: '再看一組。烤肉是人安排的，天氣卻沒辦法安排，只能用 will 去猜。',
      vis: { type: 'vs', sm: true, kick: '安排得了 vs 安排不了',
        a: { w: "We're having a barbecue on Sunday.", def: '我們星期日要烤肉。', cn: '人安排的 → 現在進行式' },
        b: { w: "I think it'll be sunny on Sunday.", def: '我想星期日會是晴天。', cn: '只能猜 → will' } } },
    { ch: 4, sp: 'A', en: "We're having a barbecue on Sunday.", cn: '我們星期日要烤肉。',
      hi: [{ t: "We're having", cn: '安排好了', k: 'arr', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '安排得了 vs 安排不了',
        a: { w: "We're having a barbecue on Sunday.", def: '我們星期日要烤肉。', cn: '人安排的 → 現在進行式' },
        b: { w: "I think it'll be sunny on Sunday.", def: '我想星期日會是晴天。', cn: '只能猜 → will' } } },
    { ch: 4, sp: 'T', en: "I think it'll be sunny on Sunday.", cn: '我想星期日會是晴天。',
      hi: [{ t: "it'll be", cn: '猜測', k: 'will', c: 2 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '安排得了 vs 安排不了',
        a: { w: "We're having a barbecue on Sunday.", def: '我們星期日要烤肉。', cn: '人安排的 → 現在進行式' },
        b: { w: "I think it'll be sunny on Sunday.", def: '我想星期日會是晴天。', cn: '只能猜 → will' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '最後給你一個判斷流程。遇到未來的事，照順序問自己三個問題。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一問：是時刻表、課表，或公司、學校定的嗎？是的話，用現在簡單式。',
      hi: [{ t: '現在簡單式', k: 'tt', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'A', en: 'The class starts at nine tomorrow.', cn: '明天的課九點開始。',
      hi: [{ t: 'starts', cn: '課表', k: 'tt', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二問：是你自己，或你跟別人已經約好的嗎？是的話，用現在進行式。',
      hi: [{ t: '現在進行式', k: 'arr', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'T', en: "I'm seeing the dentist on Tuesday.", cn: '我星期二要看牙醫。',
      hi: [{ t: "I'm seeing", cn: '約好了', k: 'arr', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '兩個都不是，代表還沒定下來，只是猜，或當場才決定，就用 will。',
      hi: [{ t: 'will', k: 'will', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'A', en: 'Maybe the traffic will be bad.', cn: '也許路上會塞車。',
      hi: [{ t: 'will be', cn: '猜測', k: 'will', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說說看。看到中文情境，先自己用英文說出來，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：你已經跟 Amy 約好，星期五晚上一起吃飯。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '你已經跟 Amy 約好，星期五晚上一起吃飯。' } },
    { ch: 6, sp: 'A', en: "I'm having dinner with Amy on Friday evening.", cn: '我星期五晚上要跟 Amy 吃飯。',
      hi: [{ t: "I'm having dinner", cn: '約好的 → 現在進行式', k: 'arr', c: 4 }],
      vis: { type: 'speak', n: 1, show: true, sit: '你已經跟 Amy 約好，星期五晚上一起吃飯。', a: "I'm having dinner with Amy on Friday evening." } },
    { ch: 6, sp: 'N', zh: '情境二：機場的螢幕上寫著，你的班機下午兩點起飛。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '機場的螢幕上寫著，你的班機下午兩點起飛。' } },
    { ch: 6, sp: 'T', en: 'My flight leaves at two in the afternoon.', cn: '我的班機下午兩點起飛。',
      hi: [{ t: 'leaves', cn: '時刻表 → 現在簡單式', k: 'tt', c: 3 }],
      vis: { type: 'speak', n: 2, show: true, sit: '機場的螢幕上寫著，你的班機下午兩點起飛。', a: 'My flight leaves at two in the afternoon.' } },
    { ch: 6, sp: 'N', zh: '情境三：朋友問你週末的比賽誰會贏，你猜台灣隊會贏。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '朋友問你週末的比賽誰會贏，你猜台灣隊會贏。' } },
    { ch: 6, sp: 'A', en: 'I think Taiwan will win.', cn: '我覺得台灣隊會贏。',
      hi: [{ t: 'will win', cn: '猜測 → will', k: 'will', c: 2 }],
      vis: { type: 'speak', n: 3, show: true, sit: '朋友問你週末的比賽誰會贏，你猜台灣隊會贏。', a: 'I think Taiwan will win.' } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結一下：表上定的，用現在簡單式；自己約好的，用現在進行式；還沒定的，才用 will。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '下次講未來之前，先問一句：這是誰決定的？', vis: { type: 'end' } }
  ]
};
