/* ============================================================
   B2 Read 文法影片解說 — dg20260925b1p（Unit 15，B1+）
   格式與規則見 b2lab/tools/GVIDEO_SPEC.md
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
  /* 小房子：x,y＝左上角，w 寬，h 牆高 */
  var house=function(x,y,w,h,roof){
    return '<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" fill="'+C+'" '+st+'/>'
      +'<path d="M'+(x-10)+' '+(y+4)+' L'+(x+w/2)+' '+(y-w*0.45)+' L'+(x+w+10)+' '+(y+4)+' Z" fill="'+(roof||R)+'" '+st+'/>'
      +'<rect x="'+(x+w/2-11)+'" y="'+(y+h-34)+'" width="22" height="34" fill="'+A+'" '+st+'/>'
      +'<rect x="'+(x+8)+'" y="'+(y+12)+'" width="16" height="15" fill="'+S+'" '+th(2.5)+'/>'
      +'<rect x="'+(x+w-24)+'" y="'+(y+12)+'" width="16" height="15" fill="'+S+'" '+th(2.5)+'/>'; };

  Object.assign(window.GVIDEO_ART, {
    /* 主時間點：時鐘＋圖釘（過去簡單式） */
    dg20260925b1p_main: svg(
      '<circle cx="86" cy="84" r="48" fill="#fff" '+th(4)+'/>'
     +'<g '+th(4)+'><line x1="86" y1="40" x2="86" y2="48"/><line x1="130" y1="84" x2="122" y2="84"/><line x1="86" y1="128" x2="86" y2="120"/><line x1="42" y1="84" x2="50" y2="84"/></g>'
     +'<line x1="86" y1="84" x2="118" y2="84" '+th(4)+'/><line x1="86" y1="84" x2="92" y2="108" stroke="'+A+'" stroke-width="7" stroke-linecap="round"/>'
     +'<circle cx="86" cy="84" r="5" fill="'+D+'"/>'
     +'<path d="M156 14 a20 20 0 0 1 20 20 c0 16 -20 38 -20 38 c0 0 -20 -22 -20 -38 a20 20 0 0 1 20 -20 Z" fill="'+R+'" '+st+'/>'
     +'<circle cx="156" cy="34" r="7" fill="#fff" '+th(2.5)+'/>'),
    /* 更早的事：時鐘＋逆時針箭頭（退一格） */
    dg20260925b1p_earlier: svg(
      '<circle cx="100" cy="82" r="40" fill="#fff" '+th(4)+'/>'
     +'<g '+th(3.5)+'><line x1="100" y1="46" x2="100" y2="52"/><line x1="136" y1="82" x2="130" y2="82"/><line x1="100" y1="118" x2="100" y2="112"/><line x1="64" y1="82" x2="70" y2="82"/></g>'
     +'<path d="M100 82 V58 M100 82 L84 92" fill="none" '+th(4)+'/><circle cx="100" cy="82" r="4" fill="'+D+'"/>'
     +'<path d="M162 80 A62 62 0 0 0 44 58" fill="none" stroke="'+B+'" stroke-width="8" stroke-linecap="round"/>'
     +'<path d="M30 54 L56 50 L44 74 Z" fill="'+B+'" '+th(2.5)+'/>'),
    /* 照順序：1 → 2 → 3 */
    dg20260925b1p_order: svg(
      '<rect x="10" y="52" width="44" height="44" rx="9" fill="'+S+'" '+st+'/>'+txt(32,83,'1',24)
     +'<rect x="78" y="52" width="44" height="44" rx="9" fill="'+Y+'" '+st+'/>'+txt(100,83,'2',24)
     +'<rect x="146" y="52" width="44" height="44" rx="9" fill="'+L+'" '+st+'/>'+txt(168,83,'3',24)
     +'<path d="M58 74 H72 M66 68 L72 74 L66 80 M126 74 H140 M134 68 L140 74 L134 80" fill="none" '+th(3.5)+'/>'
     +'<path d="M22 120 H178" fill="none" stroke="'+G+'" stroke-width="5" stroke-linecap="round"/><path d="M170 112 L180 120 L170 128" fill="none" stroke="'+G+'" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>'),

    /* 情境 0：公寓大樓 */
    dg20260925b1p_building: svg(
      '<line x1="10" y1="136" x2="190" y2="136" '+st+'/>'
     +'<rect x="62" y="18" width="78" height="118" rx="4" fill="'+L+'" '+st+'/>'
     +'<g fill="'+S+'" '+th(2.5)+'><rect x="72" y="30" width="16" height="16"/><rect x="93" y="30" width="16" height="16"/><rect x="114" y="30" width="16" height="16"/>'
     +'<rect x="72" y="56" width="16" height="16"/><rect x="93" y="56" width="16" height="16"/><rect x="114" y="56" width="16" height="16"/>'
     +'<rect x="72" y="82" width="16" height="16"/><rect x="114" y="82" width="16" height="16"/></g>'
     +'<rect x="90" y="106" width="22" height="30" fill="'+A+'" '+st+'/>'
     +'<rect x="29" y="106" width="8" height="30" fill="#8a5a3c" '+th(2.5)+'/><circle cx="33" cy="94" r="18" fill="'+G+'" '+st+'/>'
     +'<line x1="166" y1="98" x2="166" y2="136" '+th(4)+'/><rect x="150" y="82" width="34" height="22" rx="3" fill="'+Y+'" '+st+'/>'
     +'<path d="M159 96 L167 88 L175 96" fill="none" '+th(2.5)+'/>'),
    /* 情境 1：看房順利嗎？——房子＋問號 */
    dg20260925b1p_askHouse: svg(
      '<line x1="14" y1="134" x2="186" y2="134" '+st+'/>'
     +house(48,74,92,60,R)
     +qb(170,32)),
    /* 情境 2：已經有人簽約——租約＋筆 */
    dg20260925b1p_lease: svg(
      '<rect x="40" y="14" width="96" height="124" rx="6" fill="#fff" '+st+'/>'
     +'<path d="M54 36 H122 M54 52 H122 M54 68 H108 M54 84 H118" fill="none" stroke="#c9b9a6" stroke-width="5" stroke-linecap="round"/>'
     +'<path d="M54 112 q8 -18 14 -3 t14 -5 t14 3" fill="none" stroke="'+B+'" stroke-width="3.5" stroke-linecap="round"/>'
     +'<line x1="52" y1="120" x2="124" y2="120" '+th(2)+'/>'
     +'<circle cx="116" cy="102" r="10" fill="'+R+'" opacity=".85" '+th(2.5)+'/>'
     +'<g transform="rotate(32 158 92)"><rect x="152" y="40" width="13" height="72" rx="3" fill="'+Y+'" '+st+'/><path d="M152 112 L158.5 128 L165 112 Z" fill="'+L+'" '+st+'/></g>'),
    /* 情境 3：已經租出去了——房子＋紅色掛牌 */
    dg20260925b1p_rented: svg(
      '<line x1="10" y1="134" x2="190" y2="134" '+st+'/>'
     +house(28,78,74,56,B)
     +'<line x1="152" y1="84" x2="152" y2="134" '+th(4)+'/>'
     +'<rect x="114" y="46" width="76" height="34" rx="5" fill="'+R+'" '+st+'/>'+txt(152,69,'RENTED',14,'#fff')),
    /* 情境 4：仲介沒打來？——手機＋問號 */
    dg20260925b1p_phoneQ: svg(
      '<rect x="66" y="16" width="62" height="118" rx="11" fill="'+D+'" '+st+'/><rect x="73" y="28" width="48" height="90" rx="3" fill="#fff"/>'
     +'<circle cx="97" cy="54" r="13" fill="'+L+'" '+th(2.5)+'/><path d="M84 80 a13 10 0 0 1 26 0" fill="'+L+'" '+th(2.5)+'/>'
     +'<circle cx="97" cy="100" r="10" fill="#c9c2b8" '+th(2.5)+'/><path d="M92 100 h10" stroke="#fff" stroke-width="3.5" stroke-linecap="round"/>'
     +qb(160,36)),
    /* 情境 5：廣告還掛著——筆電上的租屋廣告 */
    dg20260925b1p_laptopAd: svg(
      '<rect x="36" y="22" width="128" height="84" rx="6" fill="'+D+'" '+st+'/><rect x="44" y="30" width="112" height="68" rx="2" fill="#fff"/>'
     +'<rect x="52" y="40" width="44" height="40" rx="3" fill="'+S+'" '+th(2.5)+'/>'
     +'<path d="M60 74 V60 L74 50 L88 60 V74 Z" fill="'+C+'" '+th(2.5)+'/>'
     +'<path d="M106 46 H146 M106 58 H140 M106 70 H134" fill="none" stroke="#c9b9a6" stroke-width="5" stroke-linecap="round"/>'
     +'<rect x="104" y="80" width="34" height="12" rx="6" fill="'+G+'" '+th(2)+'/>'
     +'<path d="M20 106 H180 L170 122 H30 Z" fill="#c9c2b8" '+st+'/>'),
    /* 情境 6：忘了做——待辦清單有一格沒勾＋驚嘆號 */
    dg20260925b1p_todo: svg(
      '<rect x="46" y="22" width="100" height="116" rx="8" fill="#b98a5e" '+st+'/>'
     +'<rect x="56" y="36" width="80" height="94" rx="2" fill="#fff" '+th(2.5)+'/>'
     +'<rect x="78" y="14" width="36" height="16" rx="4" fill="#c9c2b8" '+st+'/>'
     +'<rect x="64" y="48" width="13" height="13" rx="2" fill="#fff" '+th(2.5)+'/><path d="M66 54 l4 4 l7 -9" fill="none" stroke="'+G+'" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>'
     +'<rect x="64" y="74" width="13" height="13" rx="2" fill="#fff" '+th(2.5)+'/><path d="M66 80 l4 4 l7 -9" fill="none" stroke="'+G+'" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>'
     +'<rect x="64" y="100" width="13" height="13" rx="2" fill="#fff" '+th(2.5)+'/>'
     +'<path d="M84 55 H126 M84 81 H122 M84 107 H128" fill="none" stroke="#c9b9a6" stroke-width="5" stroke-linecap="round"/>'
     +'<circle cx="166" cy="98" r="17" fill="'+R+'" '+st+'/>'+txt(166,106,'!',22,'#fff')),
    /* 情境 7：請了半天假？——早上那一段塗色的時鐘＋公事包＋問號 */
    dg20260925b1p_dayoff: svg(
      '<circle cx="86" cy="80" r="50" fill="#fff" '+th(4)+'/>'
     +'<path d="M86 80 L42.7 105 A50 50 0 0 1 86 30 Z" fill="'+Y+'" opacity=".7"/>'
     +'<circle cx="86" cy="80" r="50" fill="none" '+th(4)+'/>'
     +'<path d="M86 80 V44 M86 80 V58" fill="none" '+th(4)+'/><circle cx="86" cy="80" r="5" fill="'+D+'"/>'
     +'<rect x="132" y="98" width="54" height="38" rx="5" fill="#8a5a3c" '+st+'/><path d="M149 98 v-9 h20 v9" fill="none" '+st+'/><line x1="132" y1="114" x2="186" y2="114" '+th(2.5)+'/>'
     +qb(166,34)),
    /* 情境 8：之後去吃午餐——麵碗＋筷子 */
    dg20260925b1p_lunch: svg(
      '<path d="M34 80 H166 Q164 134 100 136 Q36 134 34 80 Z" fill="#fff" '+st+'/>'
     +'<path d="M44 104 H156" stroke="'+B+'" stroke-width="6"/>'
     +'<path d="M34 80 H166 Q164 134 100 136 Q36 134 34 80 Z" fill="none" '+st+'/>'
     +'<ellipse cx="100" cy="80" rx="66" ry="12" fill="'+Y+'" '+st+'/>'
     +'<path d="M54 80 q8 -6 16 0 t16 0 t16 0 t16 0 t16 0" fill="none" stroke="#c99a2e" stroke-width="3" stroke-linecap="round"/>'
     +'<circle cx="80" cy="76" r="8" fill="#fff" '+th(2.5)+'/><circle cx="80" cy="76" r="3.5" fill="'+A+'"/>'
     +'<line x1="112" y1="74" x2="176" y2="18" stroke="'+D+'" stroke-width="5" stroke-linecap="round"/><line x1="122" y1="78" x2="186" y2="28" stroke="'+D+'" stroke-width="5" stroke-linecap="round"/>'
     +'<path d="M60 52 q-6 -9 0 -18 t0 -18 M80 50 q-6 -9 0 -18 t0 -18" fill="none" stroke="#c9c2b8" stroke-width="4" stroke-linecap="round"/>'),
    /* 情境 9：走路回家——小路上的腳印通往房子 */
    dg20260925b1p_walkHome: svg(
      '<circle cx="40" cy="30" r="14" fill="'+Y+'" '+st+'/>'
     +'<path d="M6 144 C50 126 80 124 126 128" fill="none" stroke="'+L+'" stroke-width="20" stroke-linecap="round"/>'
     +'<g fill="'+D+'"><ellipse cx="30" cy="136" rx="4" ry="6" transform="rotate(-70 30 136)"/><ellipse cx="50" cy="128" rx="4" ry="6" transform="rotate(-70 50 128)"/>'
     +'<ellipse cx="72" cy="131" rx="4" ry="6" transform="rotate(-80 72 131)"/><ellipse cx="94" cy="125" rx="4" ry="6" transform="rotate(-80 94 125)"/></g>'
     +'<line x1="110" y1="134" x2="194" y2="134" '+st+'/>'
     +house(114,84,72,50,R))
  });
})();

/* ============================================================
   dg20260925b1p — Past Perfect: the Past Before the Past
   Grammar in Use Unit 15（Past perfect）
   ============================================================ */
window.GVIDEO.dg20260925b1p = {
  kind: 'gram',
  date: '2026-09-25',
  title: 'The Past Before the Past',
  titleCn: '過去的過去：had done 幫兩件舊事排先後',
  titleArt: ['dg20260925b1p_main', 'dg20260925b1p_earlier', 'dg20260925b1p_order'],
  scene: '看房子 Apartment viewing',
  sceneArt: 'dg20260925b1p_building',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Jade', voice: 'f' },
    T: { name: 'Ethan', voice: 'm' }
  },
  expr: {
    main: { t: '過去簡單式', cn: '主時間點：故事正在講的那一刻', ex: 'I opened the envelope right after lunch.', exCn: '我午餐一吃完就打開了那個信封。', note: '一段故事通常只有一條主線，用過去簡單式' },
    pp:   { t: 'had + 過去分詞', cn: '比主時間點更早 → 退一格', ex: 'The ice had melted by the time we opened the cooler.', exCn: '我們打開冰桶的時候，冰已經融化了。', note: '常配 already、just、never、by the time' },
    seq:  { t: '照順序講', cn: '先後很清楚 → 全部用過去簡單式', ex: 'She rinsed the cups, dried them, and put them away.', exCn: '她把杯子沖一沖、擦乾，然後收好。', note: 'before／after 已經把順序講清楚時，也可以不退格' }
  },
  chapters: [
    { cn: '開場' }, { cn: '先找主時間點' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  /* 過去式單元：「現在」放右邊，兩件事都在它左邊 */
  timelineNow: 86,
  timeline: [
    { x: 56, art: 'dg20260925b1p_main',    lab: '過去簡單式', who: '主時間點' },
    { x: 22, art: 'dg20260925b1p_earlier', lab: '過去完成式', who: '更早・退一格' }
  ],
  flow: [
    { q: '故事講到哪一刻？那就是主時間點', a: '過去簡單式', en: '主詞 + 動詞過去式' },
    { q: '有一件事比主時間點更早嗎？',     a: '過去完成式', en: '主詞 + had + 過去分詞' },
    { q: '照順序講，先後已經很清楚？',     a: '不必退格',   en: '全部用過去簡單式' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: '故事已經在過去，裡面又有一件更早的事，怎麼排先後？這支影片教你用 had 退一格。', vis: { type: 'title' } },

    /* ---- 1 核心：主時間點 ---- */
    { ch: 1, sp: 'N', zh: '講過去的故事，第一步是找出主時間點，也就是故事正在講的那一刻。',
      vis: { type: 'timeline', show: 0, kick: 'Which came first? 哪一件比較早？' } },
    { ch: 1, sp: 'N', zh: '主時間點用過去簡單式，它是整段故事的基準。',
      hi: [{ t: '過去簡單式', k: 'main', c: 3 }], vis: { type: 'timeline', show: 1, pop: true, kick: 'Which came first? 哪一件比較早？' } },
    { ch: 1, sp: 'A', en: 'I reached the bakery at six fifteen.', cn: '我六點十五分到了麵包店。',
      hi: [{ t: 'reached', cn: '主時間點', k: 'main', c: 3 }], vis: { type: 'timeline', show: 1, lit: 0, kick: 'Which came first? 哪一件比較早？' } },
    { ch: 1, sp: 'N', zh: '如果有一件事比主時間點還要早，就把它往回退一格，用 had 加過去分詞。',
      hi: [{ t: 'had 加過去分詞', k: 'pp', c: 4 }], vis: { type: 'timeline', show: 2, pop: true, kick: 'Which came first? 哪一件比較早？' } },
    { ch: 1, sp: 'T', en: 'The baker had sold the last croissant ten minutes earlier.', cn: '麵包師傅十分鐘前就把最後一個可頌賣掉了。',
      hi: [{ t: 'had sold', cn: '更早就賣掉', k: 'pp', c: 4 }], vis: { type: 'timeline', show: 2, lit: 1, kick: 'Which came first? 哪一件比較早？' } },
    { ch: 1, sp: 'N', zh: '兩件事都在現在之前。可是一聽到 had，就知道賣掉在前，我到在後。',
      vis: { type: 'timeline', show: 2, dec: true, decText: '兩件都在「現在」之前', kick: 'Which came first? 哪一件比較早？' } },
    { ch: 1, sp: 'N', zh: '要把兩件事放進同一句，用 when 或 by the time 接起來就好。',
      vis: { type: 'timeline', show: 2, kick: 'Which came first? 哪一件比較早？' } },
    { ch: 1, sp: 'A', en: 'When I reached the bakery, the baker had already sold the last croissant.', cn: '我到麵包店的時候，師傅已經把最後一個可頌賣掉了。',
      hi: [{ t: 'had already sold', cn: '退一格', k: 'pp', c: 4 }], vis: { type: 'timeline', show: 2, kick: 'Which came first? 哪一件比較早？' } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: '過去完成式的句型：主詞加 had，再加過去分詞。不管主詞是誰，一律用 had。',
      hi: [{ t: '過去完成式', k: 'pp', c: 4 }],
      vis: { type: 'pattern', kick: 'Past perfect 過去完成式', rows: [
        { lab: '肯定', blocks: [{ t: 'She', k: 's' }, { t: 'had finished', k: 'v' }, { t: 'the report', k: 'n' }] },
        { lab: '否定', blocks: [{ t: 'We', k: 's' }, { t: "hadn't met", k: 'v' }, { t: 'before', k: 'o' }] }
      ], note: '人稱不變：I、he、they 都用 had' } },
    { ch: 2, sp: 'N', zh: '已經、剛剛、從來沒有，這三個字常常夾在 had 和過去分詞中間。',
      vis: { type: 'family', kick: 'Words in the middle 夾在中間的字', core: 'had ___ done', coreCn: '放在 had 和分詞中間', art: 'dg20260925b1p_earlier', items: [
        { t: 'already', cn: '已經' }, { t: 'just', cn: '剛剛' }, { t: 'never', cn: '從來沒有' }
      ] } },
    { ch: 2, sp: 'N', zh: '主時間點那一句留在過去簡單式，常用 when 或 by the time 帶出來。',
      hi: [{ t: '過去簡單式', k: 'main', c: 3 }],
      vis: { type: 'pattern', kick: 'Main moment 主時間點', rows: [
        { lab: 'when', blocks: [{ t: 'The movie', k: 's' }, { t: 'had started', k: 'v' }, { t: 'when we sat down', k: 'o' }] },
        { lab: 'by the time', blocks: [{ t: 'By the time she called', k: 'o' }, { t: 'I', k: 's' }, { t: 'had left', k: 'v' }] }
      ], note: 'when、by the time 後面接過去簡單式' } },
    { ch: 2, sp: 'N', zh: '如果照時間順序一件一件講，就不用退格，全部用過去簡單式。',
      hi: [{ t: '不用退格', k: 'seq', c: 2 }],
      vis: { type: 'pattern', kick: 'In order 照順序講', rows: [
        { lab: '照順序', blocks: [{ t: 'I parked', k: 'v' }, { t: 'locked the car', k: 'v' }, { t: 'and walked in', k: 'v' }] }
      ], note: '先後本來就清楚，就不必退一格' } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: '來聽 Jade 和 Ethan 聊昨天去看房子的事，注意哪一件事被退了一格。', vis: { type: 'scene', art: 'dg20260925b1p_building' } },
    { ch: 3, sp: 'A', en: 'How did the apartment viewing go yesterday?', cn: '昨天去看房子還順利嗎？', vis: { type: 'scene', art: 'dg20260925b1p_askHouse' } },
    { ch: 3, sp: 'T', en: 'Not well. When we arrived, someone had already signed the lease.', cn: '不太好。我們到的時候，已經有人簽約了。',
      hi: [{ t: 'had already signed', cn: '比我們到更早', k: 'pp', c: 4 }], vis: { type: 'scene', art: 'dg20260925b1p_lease' } },
    { ch: 3, sp: 'N', zh: '主時間點是 we arrived；簽約比他們到得更早，所以用 had signed。',
      hi: [{ t: 'we arrived', k: 'main', c: 3 }, { t: 'had signed', k: 'pp', c: 4 }], vis: { type: 'scene', art: 'dg20260925b1p_rented' } },
    { ch: 3, sp: 'A', en: "Didn't the agent call you?", cn: '仲介沒打電話給你嗎？', vis: { type: 'scene', art: 'dg20260925b1p_phoneQ' } },
    { ch: 3, sp: 'T', en: 'No. He had forgotten to take the ad down.', cn: '沒有。他忘了把廣告撤下來。',
      hi: [{ t: 'had forgotten', cn: '更早就忘了', k: 'pp', c: 4 }], vis: { type: 'scene', art: 'dg20260925b1p_laptopAd' } },
    { ch: 3, sp: 'N', zh: '忘記撤廣告也在他們出門之前，所以一樣退一格。',
      hi: [{ t: '退一格', k: 'pp', c: 4 }], vis: { type: 'scene', art: 'dg20260925b1p_todo' } },
    { ch: 3, sp: 'A', en: 'Oh no. Had you taken the morning off for it?', cn: '噢，不會吧。你還為了這個請了半天假？',
      hi: [{ t: 'Had you taken', cn: '更早請的假', k: 'pp', c: 4 }], vis: { type: 'scene', art: 'dg20260925b1p_dayoff' } },
    { ch: 3, sp: 'T', en: 'Yes. Afterwards we grabbed lunch and walked home.', cn: '對啊。之後我們去吃了午餐，然後走回家。',
      hi: [{ t: 'grabbed lunch', cn: '照順序', k: 'seq', c: 2 }], vis: { type: 'scene', art: 'dg20260925b1p_lunch' } },
    { ch: 3, sp: 'N', zh: '最後這句照順序講，先吃飯再走回家，所以不用退格。',
      hi: [{ t: '不用退格', k: 'seq', c: 2 }], vis: { type: 'scene', art: 'dg20260925b1p_walkHome' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '同樣是 when，動詞換一個形狀，先後就完全不同。',
      vis: { type: 'vs', sm: true, kick: '同一個 when，兩種先後',
        a: { w: 'When I turned on the TV, the match had finished.', def: '我打開電視時，比賽已經結束了。', cn: '比賽先結束 → had finished' },
        b: { w: 'When I turned on the TV, the match finished.', def: '我一打開電視，比賽就結束了。', cn: '幾乎同時 → finished' } } },
    { ch: 4, sp: 'A', en: 'When I turned on the TV, the match had finished.', cn: '我打開電視的時候，比賽已經結束了。',
      hi: [{ t: 'had finished', cn: '早就結束', k: 'pp', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '同一個 when，兩種先後',
        a: { w: 'When I turned on the TV, the match had finished.', def: '我打開電視時，比賽已經結束了。', cn: '比賽先結束 → had finished' },
        b: { w: 'When I turned on the TV, the match finished.', def: '我一打開電視，比賽就結束了。', cn: '幾乎同時 → finished' } } },
    { ch: 4, sp: 'T', en: 'When I turned on the TV, the match finished.', cn: '我一打開電視，比賽就結束了。',
      hi: [{ t: 'the match finished', cn: '一打開就結束', k: 'main', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '同一個 when，兩種先後',
        a: { w: 'When I turned on the TV, the match had finished.', def: '我打開電視時，比賽已經結束了。', cn: '比賽先結束 → had finished' },
        b: { w: 'When I turned on the TV, the match finished.', def: '我一打開電視，比賽就結束了。', cn: '幾乎同時 → finished' } } },
    { ch: 4, sp: 'N', zh: '第一句，比賽早就打完了；第二句，我一打開，比賽剛好結束。',
      vis: { type: 'vs', sm: true, kick: '同一個 when，兩種先後',
        a: { w: 'When I turned on the TV, the match had finished.', def: '我打開電視時，比賽已經結束了。', cn: '比賽先結束 → had finished' },
        b: { w: 'When I turned on the TV, the match finished.', def: '我一打開電視，比賽就結束了。', cn: '幾乎同時 → finished' } } },
    { ch: 4, sp: 'N', zh: '再看一組。基準點在現在，用 have；基準點在過去，就退成 had。',
      vis: { type: 'vs', sm: true, kick: '基準在現在 vs 基準在過去',
        a: { w: "I've never been to Tainan before.", def: '我以前從來沒來過台南。', cn: '現在第一次來 → have been' },
        b: { w: "I'd never been to Tainan before.", def: '那之前我從來沒去過台南。', cn: '當時第一次去 → had been' } } },
    { ch: 4, sp: 'A', en: "It's my first time here. I've never been to Tainan before.", cn: '這是我第一次來這裡，我以前從來沒來過台南。',
      hi: [{ t: "I've never been", cn: '基準在現在', k: 'main', c: 1 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '基準在現在 vs 基準在過去',
        a: { w: "I've never been to Tainan before.", def: '我以前從來沒來過台南。', cn: '現在第一次來 → have been' },
        b: { w: "I'd never been to Tainan before.", def: '那之前我從來沒去過台南。', cn: '當時第一次去 → had been' } } },
    { ch: 4, sp: 'T', en: "It was my first time there. I'd never been to Tainan before.", cn: '那是我第一次去那裡，在那之前我從來沒去過台南。',
      hi: [{ t: "I'd never been", cn: '基準在過去', k: 'pp', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '基準在現在 vs 基準在過去',
        a: { w: "I've never been to Tainan before.", def: '我以前從來沒來過台南。', cn: '現在第一次來 → have been' },
        b: { w: "I'd never been to Tainan before.", def: '那之前我從來沒去過台南。', cn: '當時第一次去 → had been' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '最後給你一個判斷流程。講過去的故事時，照順序問自己三個問題。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一問：故事講到哪一刻？那一刻就是主時間點，用過去簡單式。',
      hi: [{ t: '過去簡單式', k: 'main', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'A', en: 'Our taxi pulled up at midnight.', cn: '我們的計程車半夜十二點到了門口。',
      hi: [{ t: 'pulled up', cn: '主時間點', k: 'main', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二問：有沒有哪件事比主時間點更早？有的話，退一格，用 had 加過去分詞。',
      hi: [{ t: 'had 加過去分詞', k: 'pp', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'T', en: 'Everyone in the house had gone to bed.', cn: '家裡的人都已經睡了。',
      hi: [{ t: 'had gone', cn: '更早就睡了', k: 'pp', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '第三問：如果你是照順序一件一件講，先後已經很清楚，就不必退格。',
      hi: [{ t: '不必退格', k: 'seq', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'A', en: 'We paid the driver, unlocked the door, and tiptoed upstairs.', cn: '我們付了車錢、打開門，然後躡手躡腳地上樓。',
      hi: [{ t: 'paid the driver', cn: '照順序', k: 'seq', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說說看。看到中文情境，先自己用英文說出來，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：你趕到電影院的時候，電影早就開演了。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '你趕到電影院的時候，電影早就開演了。' } },
    { ch: 6, sp: 'T', en: 'When I got to the cinema, the film had already started.', cn: '我到電影院的時候，電影已經開演了。',
      hi: [{ t: 'had already started', cn: '更早開演 → 退一格', k: 'pp', c: 4 }],
      vis: { type: 'speak', n: 1, show: true, sit: '你趕到電影院的時候，電影早就開演了。', a: 'When I got to the cinema, the film had already started.' } },
    { ch: 6, sp: 'N', zh: '情境二：去年那趟旅行，是你第一次搭飛機，在那之前從來沒搭過。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '去年那趟旅行，是你第一次搭飛機，在那之前從來沒搭過。' } },
    { ch: 6, sp: 'A', en: 'I had never been on a plane before that trip.', cn: '那趟旅行之前，我從來沒搭過飛機。',
      hi: [{ t: 'had never been', cn: '基準在過去', k: 'pp', c: 4 }],
      vis: { type: 'speak', n: 2, show: true, sit: '去年那趟旅行，是你第一次搭飛機，在那之前從來沒搭過。', a: 'I had never been on a plane before that trip.' } },
    { ch: 6, sp: 'N', zh: '情境三：同事走進會議室的時候，你已經把投影機架好了。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '同事走進會議室的時候，你已經把投影機架好了。' } },
    { ch: 6, sp: 'T', en: 'When my coworker walked in, I had set up the projector.', cn: '同事走進來的時候，我已經把投影機架好了。',
      hi: [{ t: 'had set up', cn: '先架好 → 退一格', k: 'pp', c: 4 }],
      vis: { type: 'speak', n: 3, show: true, sit: '同事走進會議室的時候，你已經把投影機架好了。', a: 'When my coworker walked in, I had set up the projector.' } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結：先找主時間點，用過去簡單式；更早的事才退一格，用 had 加過去分詞；照順序講就不必退格。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '下次講過去的故事，先問一句：哪一件比較早？', vis: { type: 'end' } }
  ]
};
