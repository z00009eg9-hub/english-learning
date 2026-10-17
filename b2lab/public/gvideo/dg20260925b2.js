/* ============================================================
   B2 Read 文法影片解說 — dg20260925b2（Unit 15，B2）
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
  var cal=function(x,y,w,h){
    var g='<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" rx="8" fill="#fff" '+st+'/>'
      +'<path d="M'+x+' '+(y+22)+' V'+(y+8)+' a8 8 0 0 1 8 -8 H'+(x+w-8)+' a8 8 0 0 1 8 8 V'+(y+22)+' Z" fill="'+R+'" '+st+'/>'
      +'<line x1="'+(x+22)+'" y1="'+(y-7)+'" x2="'+(x+22)+'" y2="'+(y+8)+'" '+th(4)+'/><line x1="'+(x+w-22)+'" y1="'+(y-7)+'" x2="'+(x+w-22)+'" y2="'+(y+8)+'" '+th(4)+'/>';
    for(var r=0;r<3;r++) for(var c=0;c<4;c++) g+='<rect x="'+(x+10+c*(w-20)/4)+'" y="'+(y+30+r*(h-38)/3)+'" width="'+((w-20)/4-6)+'" height="'+((h-38)/3-6)+'" rx="2" fill="'+C+'"/>';
    return g; };
  var gray=function(d){ return '<path d="'+d+'" fill="none" stroke="#c9b9a6" stroke-width="5" stroke-linecap="round"/>'; };
  /* 齒輪：cx,cy 圓心，r 半徑 */
  var gear=function(cx,cy,r,col){
    var g='';
    for(var i=0;i<8;i++) g+='<rect x="'+(cx-6)+'" y="'+(cy-r-9)+'" width="12" height="14" rx="2" fill="'+col+'" '+st+' transform="rotate('+(i*45)+' '+cx+' '+cy+')"/>';
    return g+'<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="'+col+'" '+st+'/><circle cx="'+cx+'" cy="'+cy+'" r="'+(r*0.35)+'" fill="#fff" '+st+'/>'; };

  Object.assign(window.GVIDEO_ART, {
    /* 主線：報紙頭版（過去簡單式） */
    dg20260925b2_main: svg(
      '<rect x="34" y="16" width="132" height="120" rx="4" fill="#fff" '+st+'/>'
     +'<path d="M34 40 V20 a4 4 0 0 1 4 -4 H162 a4 4 0 0 1 4 4 V40 Z" fill="'+R+'" '+st+'/>'+txt(100,34,'NEWS',15,'#fff')
     +'<rect x="46" y="50" width="108" height="12" rx="3" fill="'+D+'"/>'
     +'<rect x="46" y="72" width="50" height="50" rx="3" fill="'+S+'" '+th(2.5)+'/>'
     +'<path d="M50 118 L66 96 L78 110 L84 102 L92 118 Z" fill="'+G+'" '+th(2)+'/><circle cx="82" cy="84" r="5" fill="'+Y+'" '+th(2)+'/>'
     +gray('M106 78 H152 M106 92 H152 M106 106 H146 M106 120 H150')),
    /* 背景：檔案夾＋往回的箭頭（過去完成式） */
    dg20260925b2_bg: svg(
      '<path d="M30 52 H78 L90 64 H170 V130 H30 Z" fill="'+Y+'" '+st+'/>'
     +'<rect x="44" y="44" width="100" height="40" rx="2" fill="#fff" '+th(2.5)+'/>'+gray('M56 58 H132 M56 70 H118')
     +'<path d="M30 76 H170 V130 H30 Z" fill="#e3b23c" '+st+'/>'
     +'<circle cx="164" cy="34" r="20" fill="'+B+'" '+st+'/>'
     +'<path d="M174 34 H154 M161 26 L153 34 L161 42" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>'),
    /* 現況：今天圈起來的月曆（現在式） */
    dg20260925b2_now: svg(
      cal(40,32,120,100)
     +txt(100,49,'TODAY',13,'#fff')
     +'<circle cx="109.5" cy="90" r="14" fill="none" stroke="'+A+'" stroke-width="5"/>'),

    /* 情境 0：新聞編輯台——兩台螢幕的桌子 */
    dg20260925b2_newsroom: svg(
      '<rect x="22" y="30" width="72" height="52" rx="5" fill="'+D+'" '+st+'/><rect x="28" y="36" width="60" height="40" fill="#fff"/>'
     +gray('M34 46 H80 M34 56 H74 M34 66 H78')
     +'<rect x="104" y="30" width="72" height="52" rx="5" fill="'+D+'" '+st+'/><rect x="110" y="36" width="60" height="40" fill="#fff"/>'
     +'<rect x="116" y="42" width="24" height="18" fill="'+S+'" '+th(2)+'/>'+gray('M146 46 H162 M146 56 H160 M116 68 H162')
     +'<path d="M58 82 V96 M140 82 V96" '+th(4)+'/>'
     +'<rect x="12" y="96" width="176" height="12" rx="3" fill="#b98a5e" '+st+'/>'
     +'<path d="M24 108 V136 M176 108 V136" '+th(4)+'/>'
     +'<rect x="64" y="86" width="70" height="8" rx="2" fill="#c9c2b8" '+th(2)+'/>'
     +'<rect x="150" y="78" width="16" height="18" rx="3" fill="'+R+'" '+th(2.5)+'/>'),
    /* 情境 1：先講新聞——稿子被紅筆把最後一行拉到最上面 */
    dg20260925b2_draft: svg(
      '<rect x="40" y="14" width="96" height="124" rx="5" fill="#fff" '+st+'/>'
     +gray('M54 36 H122 M54 52 H122 M54 68 H116 M54 84 H120 M54 100 H110')
     +'<rect x="50" y="110" width="76" height="16" rx="8" fill="none" stroke="'+R+'" stroke-width="3.5"/>'
     +'<path d="M128 118 C156 110 158 40 130 30" fill="none" stroke="'+R+'" stroke-width="4" stroke-linecap="round"/>'
     +'<path d="M136 22 L126 30 L138 36" fill="none" stroke="'+R+'" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>'
     +'<g transform="rotate(28 172 90)"><rect x="166" y="54" width="12" height="62" rx="3" fill="'+R+'" '+st+'/><path d="M166 116 L172 130 L178 116 Z" fill="'+L+'" '+st+'/></g>'),
    /* 情境 2：渡輪停駛——渡輪＋禁止標誌 */
    dg20260925b2_ferry: svg(
      '<rect x="118" y="46" width="14" height="22" fill="'+R+'" '+st+'/>'
     +'<rect x="60" y="66" width="84" height="28" rx="4" fill="'+S+'" '+st+'/>'
     +'<g fill="#fff" '+th(2)+'><rect x="68" y="72" width="14" height="12"/><rect x="88" y="72" width="14" height="12"/><rect x="108" y="72" width="14" height="12"/><rect x="128" y="72" width="10" height="12"/></g>'
     +'<path d="M26 94 H176 L160 120 H42 Z" fill="#fff" '+st+'/><path d="M34 104 H170" stroke="'+B+'" stroke-width="5"/>'
     +'<path d="M26 94 H176 L160 120 H42 Z" fill="none" '+st+'/>'
     +'<path d="M8 130 q10 -8 20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0" fill="none" stroke="'+B+'" stroke-width="4" stroke-linecap="round"/>'
     +'<circle cx="38" cy="38" r="20" fill="'+R+'" '+st+'/><rect x="25" y="34" width="26" height="8" rx="2" fill="#fff"/>'),
    /* 情境 3：兩次沒通過——檢查表上兩個紅叉 */
    dg20260925b2_checklist: svg(
      '<rect x="48" y="22" width="104" height="116" rx="8" fill="#b98a5e" '+st+'/>'
     +'<rect x="58" y="36" width="84" height="94" rx="2" fill="#fff" '+th(2.5)+'/>'
     +'<rect x="80" y="14" width="40" height="16" rx="4" fill="#c9c2b8" '+st+'/>'
     +'<rect x="66" y="50" width="16" height="16" rx="2" fill="#fff" '+th(2.5)+'/><path d="M69 53 l10 10 M79 53 l-10 10" stroke="'+R+'" stroke-width="4" stroke-linecap="round"/>'
     +'<rect x="66" y="80" width="16" height="16" rx="2" fill="#fff" '+th(2.5)+'/><path d="M69 83 l10 10 M79 83 l-10 10" stroke="'+R+'" stroke-width="4" stroke-linecap="round"/>'
     +'<rect x="66" y="108" width="16" height="16" rx="2" fill="#fff" '+th(2.5)+'/>'
     +gray('M90 58 H132 M90 88 H128 M90 116 H130')),
    /* 情境 4：業者怎麼說？——麥克風＋問號 */
    dg20260925b2_micQ: svg(
      '<rect x="82" y="22" width="36" height="58" rx="18" fill="#c9c2b8" '+st+'/>'
     +'<path d="M90 38 H110 M90 50 H110 M90 62 H110" fill="none" '+th(2)+'/>'
     +'<path d="M70 62 a30 30 0 0 0 60 0" fill="none" '+th(4)+'/>'
     +'<line x1="100" y1="92" x2="100" y2="124" '+th(4)+'/><line x1="78" y1="126" x2="122" y2="126" '+th(5)+'/>'
     +qb(162,36)),
    /* 情境 5：五月換了引擎——兩個齒輪＋打勾 */
    dg20260925b2_engine: svg(
      gear(78,78,32,'#c9c2b8')
     +gear(140,50,18,Y)
     +chk(150,112,18)),
    /* 情境 6：轉述——引號對話框 */
    dg20260925b2_quote: svg(
      '<path d="M26 20 H164 a14 14 0 0 1 14 14 V88 a14 14 0 0 1 -14 14 H140 L156 128 L110 102 H26 a14 14 0 0 1 -14 -14 V34 a14 14 0 0 1 14 -14 Z" fill="#fff" '+st+'/>'
     +'<g fill="'+B+'" '+th(2.5)+'><path d="M68 84 h-18 v-18 c0 -10 6 -16 16 -18 l2 6 c-6 2 -8 6 -8 12 h8 Z"/><path d="M94 84 h-18 v-18 c0 -10 6 -16 16 -18 l2 6 c-6 2 -8 6 -8 12 h8 Z"/>'
     +'<path d="M110 40 h18 v18 c0 10 -6 16 -16 18 l-2 -6 c6 -2 8 -6 8 -12 h-8 Z"/><path d="M136 40 h18 v18 c0 10 -6 16 -16 18 l-2 -6 c6 -2 8 -6 8 -12 h-8 Z"/></g>'),
    /* 情境 7：交代現在的狀況——沙漏 */
    dg20260925b2_hourglass: svg(
      '<path d="M66 24 H134 C134 60 108 64 108 75 C108 86 134 90 134 126 H66 C66 90 92 86 92 75 C92 64 66 60 66 24 Z" fill="'+S+'" '+st+'/>'
     +'<path d="M78 42 H122 C118 56 106 62 100 68 C94 62 82 56 78 42 Z" fill="'+Y+'"/>'
     +'<path d="M76 124 Q100 96 124 124 Z" fill="'+Y+'"/>'
     +'<line x1="100" y1="70" x2="100" y2="110" stroke="'+Y+'" stroke-width="3"/>'
     +'<path d="M66 24 H134 C134 60 108 64 108 75 C108 86 134 90 134 126 H66 C66 90 92 86 92 75 C92 64 66 60 66 24 Z" fill="none" '+st+'/>'
     +'<rect x="54" y="14" width="92" height="12" rx="4" fill="#8a5a3c" '+st+'/><rect x="54" y="124" width="92" height="12" rx="4" fill="#8a5a3c" '+st+'/>'),
    /* 情境 8：通勤族改搭公車 */
    dg20260925b2_bus: svg(
      '<line x1="8" y1="134" x2="192" y2="134" '+st+'/>'
     +'<rect x="18" y="40" width="164" height="80" rx="12" fill="'+Y+'" '+st+'/>'
     +'<g fill="'+S+'" '+th(2.5)+'><rect x="30" y="52" width="28" height="26" rx="3"/><rect x="66" y="52" width="28" height="26" rx="3"/><rect x="102" y="52" width="28" height="26" rx="3"/></g>'
     +'<rect x="140" y="52" width="30" height="56" rx="3" fill="'+S+'" '+st+'/><line x1="155" y1="52" x2="155" y2="108" '+th(2.5)+'/>'
     +'<rect x="19" y="90" width="118" height="8" fill="'+A+'"/>'
     +'<circle cx="52" cy="122" r="12" fill="'+D+'"/><circle cx="52" cy="122" r="4" fill="#c9c2b8"/><circle cx="148" cy="122" r="12" fill="'+D+'"/><circle cx="148" cy="122" r="4" fill="#c9c2b8"/>'),
    /* 情境 9：三層分好——背景、主線、現況三張疊卡 */
    dg20260925b2_layers: svg(
      '<rect x="24" y="18" width="112" height="32" rx="6" fill="#cfe8d8" '+st+'/><circle cx="40" cy="34" r="7" fill="'+G+'" '+th(2.5)+'/>'+gray('M54 34 H122')
     +'<rect x="44" y="58" width="112" height="32" rx="6" fill="'+S+'" '+st+'/><circle cx="60" cy="74" r="7" fill="'+B+'" '+th(2.5)+'/>'+gray('M74 74 H142')
     +'<rect x="64" y="98" width="112" height="32" rx="6" fill="#f6d5d4" '+st+'/><circle cx="80" cy="114" r="7" fill="'+R+'" '+th(2.5)+'/>'+gray('M94 114 H162'))
  });
})();

/* ============================================================
   dg20260925b2 — Past Perfect as a Narrative Tool
   Grammar in Use Unit 15（Past perfect）：倒敘、轉述、一段話的分工
   ============================================================ */
window.GVIDEO.dg20260925b2 = {
  kind: 'gram',
  date: '2026-09-25',
  title: 'Past Perfect as a Narrative Tool',
  titleCn: '倒敘與交代背景：報導和報告裡的 had done',
  titleArt: ['dg20260925b2_main', 'dg20260925b2_bg', 'dg20260925b2_now'],
  scene: '新聞編輯台 Newsroom',
  sceneArt: 'dg20260925b2_newsroom',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Priya', voice: 'f' },
    T: { name: 'Daniel', voice: 'm' }
  },
  expr: {
    main: { t: '過去簡單式', cn: '主線：讀者最先看到的那件事', ex: 'The company recalled ten thousand chargers in March.', exCn: '那家公司三月回收了一萬個充電器。', note: '一段話裡通常只有一條主線' },
    bg:   { t: 'had + 過去分詞', cn: '比主線更早的背景 → 退一格', ex: 'Two customers had reported overheating by then.', exCn: '那時已經有兩位顧客回報過熱。', note: '有了它，背景可以放在主線後面，順序不會被讀錯' },
    now:  { t: '現在式', cn: '拉回今天的現況', ex: 'The new model ships with a safer battery.', exCn: '新款出貨時搭載更安全的電池。', note: '段落最後用它收尾，讀者知道現在怎麼樣' }
  },
  chapters: [
    { cn: '開場' }, { cn: '一段話的三種分工' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  cardsKick: 'Three jobs in one paragraph 一段話三種分工',
  cards: [
    { art: 'dg20260925b2_main', lab: '過去簡單式', who: '主線・新聞本身' },
    { art: 'dg20260925b2_bg',   lab: '過去完成式', who: '更早的背景・退一格' },
    { art: 'dg20260925b2_now',  lab: '現在式',     who: '拉回今天的現況' }
  ],
  flow: [
    { q: '這是讀者要先看到的主線嗎？',   a: '過去簡單式', en: '主詞 + 動詞過去式' },
    { q: '比主線更早，而且放在後面補？', a: '過去完成式', en: '主詞 + had + 過去分詞' },
    { q: '講的是今天還成立的狀況嗎？',   a: '現在式',     en: '主詞 + 現在式動詞' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: '在報導和報告裡，過去完成式最大的用處，是讓你先講結果、再補原因。', vis: { type: 'title' } },

    /* ---- 1 核心：三種分工 ---- */
    { ch: 1, sp: 'N', zh: '寫新聞或報告時，一段話裡的時態各有分工。', vis: { type: 'cards', show: 0 } },
    { ch: 1, sp: 'N', zh: '第一個是主線，也就是你要讀者最先看到的那件事，用過去簡單式。',
      hi: [{ t: '過去簡單式', k: 'main', c: 3 }], vis: { type: 'cards', show: 1, pop: true } },
    { ch: 1, sp: 'A', en: 'The city closed the old stadium on Friday.', cn: '市政府星期五關閉了舊體育場。',
      hi: [{ t: 'closed', cn: '主線', k: 'main', c: 3 }], vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'N', zh: '第二個是背景。比主線更早的事，退一格用 had 加過去分詞。',
      hi: [{ t: 'had 加過去分詞', k: 'bg', c: 4 }], vis: { type: 'cards', show: 2, pop: true } },
    { ch: 1, sp: 'T', en: 'Engineers had found cracks in the east stand.', cn: '工程師先前在東側看台發現了裂縫。',
      hi: [{ t: 'had found', cn: '更早的背景', k: 'bg', c: 4 }], vis: { type: 'cards', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: '有了這一格，背景放在主線後面也不會被讀錯。先講結果再補原因，這就是倒敘。',
      vis: { type: 'cards', show: 2 } },
    { ch: 1, sp: 'N', zh: '第三個是現況。最後拉回今天，用現在式告訴讀者事情現在怎麼樣。',
      hi: [{ t: '現在式', k: 'now', c: 2 }], vis: { type: 'cards', show: 3, pop: true } },
    { ch: 1, sp: 'A', en: 'The stadium remains closed to the public.', cn: '體育場目前仍不對外開放。',
      hi: [{ t: 'remains', cn: '今天的狀況', k: 'now', c: 2 }], vis: { type: 'cards', show: 3, lit: 2 } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: '背景句的句型：主詞加 had，再加過去分詞，常帶著次數或時間。',
      hi: [{ t: 'had', k: 'bg', c: 4 }],
      vis: { type: 'pattern', kick: 'Background 背景句', rows: [
        { lab: '時間', blocks: [{ t: 'The council', k: 's' }, { t: 'had approved', k: 'v' }, { t: 'the budget', k: 'n' }, { t: 'in May', k: 'o' }] },
        { lab: '次數', blocks: [{ t: 'The company', k: 's' }, { t: 'had warned', k: 'v' }, { t: 'its staff', k: 'n' }, { t: 'twice', k: 'o' }] }
      ], note: '人稱不變，一律用 had' } },
    { ch: 2, sp: 'N', zh: '倒敘最常見的兩種接法：用分號隔開，或用 because、after 把背景接在後面。',
      vis: { type: 'pattern', kick: 'Result first 先結果', rows: [
        { lab: '分號', blocks: [{ t: 'The mayor resigned', k: 'v' }, { t: ';', k: 'n' }, { t: 'two aides had quit', k: 'o' }] },
        { lab: 'because', blocks: [{ t: 'Fares rose', k: 'v' }, { t: 'because', k: 'n' }, { t: 'fuel prices had doubled', k: 'o' }] }
      ], note: '結果在前，背景退一格放在後面' } },
    { ch: 2, sp: 'N', zh: '轉述別人的話也一樣。said、told 這些動詞是過去，內容裡更早的事就退一格。',
      vis: { type: 'family', kick: 'Reporting verbs 轉述動詞', core: 'said that … had done', coreCn: '轉述更早的事', art: 'dg20260925b2_bg', items: [
        { t: 'said', cn: '說' }, { t: 'told', cn: '告訴' }, { t: 'reported', cn: '報告指出' }, { t: 'explained', cn: '解釋' }
      ] } },
    { ch: 2, sp: 'N', zh: '一段話的標準節奏：背景退一格，主線用過去式，最後拉回現在。',
      vis: { type: 'pattern', kick: 'Paragraph rhythm 段落節奏', rows: [
        { lab: '背景', blocks: [{ t: 'Rents', k: 's' }, { t: 'had doubled', k: 'v' }] },
        { lab: '主線', blocks: [{ t: 'In June', k: 'o' }, { t: 'the café', k: 's' }, { t: 'moved', k: 'v' }] },
        { lab: '現況', blocks: [{ t: 'It', k: 's' }, { t: 'is now', k: 'v' }, { t: 'on Main Street', k: 'o' }] }
      ] } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: '來聽記者 Priya 和編輯 Daniel 討論，一則新聞的第一句要怎麼寫。', vis: { type: 'scene', art: 'dg20260925b2_newsroom' } },
    { ch: 3, sp: 'T', en: 'Your draft opens with the safety checks. Lead with the news.', cn: '你的稿子一開頭在講安全檢查，改成先講新聞本身。',
      vis: { type: 'scene', art: 'dg20260925b2_draft' } },
    { ch: 3, sp: 'A', en: 'Fine. The city suspended the ferry on Monday; the boats had failed two safety checks.', cn: '好。市政府星期一暫停了渡輪服務；那些船先前有兩次沒通過安全檢查。',
      hi: [{ t: 'suspended', cn: '主線', k: 'main', c: 3 }, { t: 'had failed', cn: '更早的原因', k: 'bg', c: 4 }], vis: { type: 'scene', art: 'dg20260925b2_ferry' } },
    { ch: 3, sp: 'N', zh: '結果放前面，原因用 had failed 退一格放後面，先後不會被讀反。',
      hi: [{ t: 'had failed', k: 'bg', c: 4 }], vis: { type: 'scene', art: 'dg20260925b2_checklist' } },
    { ch: 3, sp: 'T', en: 'Good. What did the operator say?', cn: '很好。營運公司怎麼說？', vis: { type: 'scene', art: 'dg20260925b2_micQ' } },
    { ch: 3, sp: 'A', en: 'They told me they had replaced both engines in May.', cn: '他們跟我說，五月已經把兩具引擎都換掉了。',
      hi: [{ t: 'had replaced', cn: '比說話更早', k: 'bg', c: 4 }], vis: { type: 'scene', art: 'dg20260925b2_engine' } },
    { ch: 3, sp: 'N', zh: '這是轉述。told 是過去，換引擎又比說話更早，所以退一格，這是對方的說法。',
      hi: [{ t: '退一格', k: 'bg', c: 4 }], vis: { type: 'scene', art: 'dg20260925b2_quote' } },
    { ch: 3, sp: 'T', en: 'Keep that as their claim, and end with where things stand now.', cn: '把那句留作他們的說法，最後交代現在的狀況。',
      vis: { type: 'scene', art: 'dg20260925b2_hourglass' } },
    { ch: 3, sp: 'A', en: 'Sure. Commuters are taking the bus until the ferry returns.', cn: '好。渡輪恢復之前，通勤族都改搭公車。',
      hi: [{ t: 'are taking', cn: '現況', k: 'now', c: 2 }], vis: { type: 'scene', art: 'dg20260925b2_bus' } },
    { ch: 3, sp: 'N', zh: '最後一句拉回今天，用現在式。背景、主線、現況分好，讀者一路都跟得上。',
      hi: [{ t: '現在式', k: 'now', c: 2 }], vis: { type: 'scene', art: 'dg20260925b2_layers' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '同一組事實，換個順序，讀者第一眼看到的東西就不一樣。',
      vis: { type: 'vs', sm: true, kick: '照順序 vs 倒敘',
        a: { w: 'The head chef quit, and the restaurant lost its star.', def: '主廚辭職，後來餐廳掉了星。', cn: '照順序 → 先原因' },
        b: { w: 'The restaurant lost its star; the head chef had quit in spring.', def: '餐廳掉了星；主廚春天就已經辭職了。', cn: '倒敘 → 先結果，背景退一格' } } },
    { ch: 4, sp: 'A', en: 'The head chef quit, and the restaurant lost its star.', cn: '主廚辭職，後來餐廳掉了星。',
      hi: [{ t: 'quit', cn: '照順序', k: 'main', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '照順序 vs 倒敘',
        a: { w: 'The head chef quit, and the restaurant lost its star.', def: '主廚辭職，後來餐廳掉了星。', cn: '照順序 → 先原因' },
        b: { w: 'The restaurant lost its star; the head chef had quit in spring.', def: '餐廳掉了星；主廚春天就已經辭職了。', cn: '倒敘 → 先結果，背景退一格' } } },
    { ch: 4, sp: 'T', en: 'The restaurant lost its star; the head chef had quit in spring.', cn: '餐廳掉了星；主廚春天就已經辭職了。',
      hi: [{ t: 'had quit', cn: '背景退一格', k: 'bg', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '照順序 vs 倒敘',
        a: { w: 'The head chef quit, and the restaurant lost its star.', def: '主廚辭職，後來餐廳掉了星。', cn: '照順序 → 先原因' },
        b: { w: 'The restaurant lost its star; the head chef had quit in spring.', def: '餐廳掉了星；主廚春天就已經辭職了。', cn: '倒敘 → 先結果，背景退一格' } } },
    { ch: 4, sp: 'N', zh: '第一句照順序，重點壓在句尾；第二句結果在前，辭職退一格補在後面。',
      vis: { type: 'vs', sm: true, kick: '照順序 vs 倒敘',
        a: { w: 'The head chef quit, and the restaurant lost its star.', def: '主廚辭職，後來餐廳掉了星。', cn: '照順序 → 先原因' },
        b: { w: 'The restaurant lost its star; the head chef had quit in spring.', def: '餐廳掉了星；主廚春天就已經辭職了。', cn: '倒敘 → 先結果，背景退一格' } } },
    { ch: 4, sp: 'N', zh: '再看一組轉述。說話的時間不同，後面的形狀也跟著變。',
      vis: { type: 'vs', sm: true, kick: '現在說 vs 當時說',
        a: { w: 'The supplier says the parts have arrived.', def: '供應商說零件已經到了。', cn: 'says 現在說 → have arrived' },
        b: { w: 'The supplier said the parts had arrived.', def: '供應商當時說零件已經到了。', cn: 'said 過去說 → had arrived' } } },
    { ch: 4, sp: 'A', en: 'The supplier says the parts have arrived.', cn: '供應商說零件已經到了。',
      hi: [{ t: 'have arrived', cn: '基準在現在', k: 'now', c: 1 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '現在說 vs 當時說',
        a: { w: 'The supplier says the parts have arrived.', def: '供應商說零件已經到了。', cn: 'says 現在說 → have arrived' },
        b: { w: 'The supplier said the parts had arrived.', def: '供應商當時說零件已經到了。', cn: 'said 過去說 → had arrived' } } },
    { ch: 4, sp: 'T', en: 'The supplier said the parts had arrived.', cn: '供應商當時說零件已經到了。',
      hi: [{ t: 'had arrived', cn: '基準在過去', k: 'bg', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '現在說 vs 當時說',
        a: { w: 'The supplier says the parts have arrived.', def: '供應商說零件已經到了。', cn: 'says 現在說 → have arrived' },
        b: { w: 'The supplier said the parts had arrived.', def: '供應商當時說零件已經到了。', cn: 'said 過去說 → had arrived' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '最後給你一個判斷流程，每一句照順序問三個問題。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一問：這是你要讀者先看到的主線嗎？是的話，用過去簡單式。',
      hi: [{ t: '過去簡單式', k: 'main', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'A', en: 'The school board approved a four-day week in July.', cn: '教育委員會七月通過了一週上課四天的方案。',
      hi: [{ t: 'approved', cn: '主線', k: 'main', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二問：這件事比主線更早，而且你要放在後面補充嗎？是的話，退一格。',
      hi: [{ t: '退一格', k: 'bg', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'T', en: 'Teachers had asked for the change twice.', cn: '老師們先前已經兩度要求這項改變。',
      hi: [{ t: 'had asked', cn: '更早的背景', k: 'bg', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '第三問：講的是今天還成立的狀況嗎？那就拉回現在式。',
      hi: [{ t: '現在式', k: 'now', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'A', en: 'Most parents support the plan.', cn: '大部分家長支持這個方案。',
      hi: [{ t: 'support', cn: '現況', k: 'now', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說說看。看到中文情境，先自己用英文說出來，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：用倒敘寫新聞：市政府關掉了夜市，在那之前居民已經投訴過噪音。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '用倒敘寫新聞：市政府關掉了夜市，在那之前居民已經投訴過噪音。' } },
    { ch: 6, sp: 'T', en: 'The city closed the night market; residents had complained about the noise.', cn: '市政府關閉了夜市；居民先前已經投訴過噪音。',
      hi: [{ t: 'had complained', cn: '背景 → 退一格', k: 'bg', c: 4 }],
      vis: { type: 'speak', n: 1, show: true, sit: '用倒敘寫新聞：市政府關掉了夜市，在那之前居民已經投訴過噪音。', a: 'The city closed the night market; residents had complained about the noise.' } },
    { ch: 6, sp: 'N', zh: '情境二：轉述經理昨天說的話：他已經把報價寄出去了。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '轉述經理昨天說的話：他已經把報價寄出去了。' } },
    { ch: 6, sp: 'A', en: 'The manager said he had already sent the quote.', cn: '經理說他已經把報價寄出去了。',
      hi: [{ t: 'had already sent', cn: '轉述 → 退一格', k: 'bg', c: 4 }],
      vis: { type: 'speak', n: 2, show: true, sit: '轉述經理昨天說的話：他已經把報價寄出去了。', a: 'The manager said he had already sent the quote.' } },
    { ch: 6, sp: 'N', zh: '情境三：用倒敘寫：那家書店關門了，在那之前房東已經調漲兩次租金。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '用倒敘寫：那家書店關門了，在那之前房東已經調漲兩次租金。' } },
    { ch: 6, sp: 'T', en: 'The bookstore closed; the landlord had raised the rent twice.', cn: '那家書店關門了；房東先前已經調漲兩次租金。',
      hi: [{ t: 'had raised', cn: '背景 → 退一格', k: 'bg', c: 4 }],
      vis: { type: 'speak', n: 3, show: true, sit: '用倒敘寫：那家書店關門了，在那之前房東已經調漲兩次租金。', a: 'The bookstore closed; the landlord had raised the rent twice.' } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結：主線用過去簡單式；更早的背景退一格，用 had 加過去分詞；最後用現在式交代現況。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '下次動筆之前，先問一句：讀者最該先看到哪一句？', vis: { type: 'end' } }
  ]
};
