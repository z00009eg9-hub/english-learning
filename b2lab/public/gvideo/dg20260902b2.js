/* ============================================================
   B2 Read 文法影片解說 — dg20260902b2（Unit 7，B2）
   格式與規則見 b2lab/tools/GVIDEO_SPEC.md；範本 gvideo/dg20261014b1.js。
   核心圖用 cards：前導句／細節句／至今有效。
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
  /* 小汽車（x,y＝車身左上） */
  var car=function(x,y,col){
    return '<path d="M'+x+' '+(y+24)+' V'+(y+12)+' l10 -2 l8 -10 H'+(x+38)+' l10 10 l8 2 V'+(y+24)+' Z" fill="'+col+'" '+st+'/>'
      +'<path d="M'+(x+20)+' '+(y+3)+' H'+(x+36)+' l6 7 H'+(x+16)+' Z" fill="'+S+'" '+th(2)+'/>'
      +'<circle cx="'+(x+14)+'" cy="'+(y+25)+'" r="6" fill="'+D+'"/><circle cx="'+(x+44)+'" cy="'+(y+25)+'" r="6" fill="'+D+'"/>'; };
  var clock=function(cx,cy,r,hx,hy,mx,my){ return '<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="#fff" '+th(4)+'/>'
      +'<line x1="'+cx+'" y1="'+cy+'" x2="'+hx+'" y2="'+hy+'" stroke="'+A+'" stroke-width="7" stroke-linecap="round"/>'
      +'<line x1="'+cx+'" y1="'+cy+'" x2="'+mx+'" y2="'+my+'" '+th(4)+'/><circle cx="'+cx+'" cy="'+cy+'" r="5" fill="'+D+'"/>'; };

  Object.assign(window.GVIDEO_ART, {
    /* 前導句：報紙頭版，大標題＋紅色快訊旗 */
    dg20260902b2_lead: svg(
      '<rect x="30" y="20" width="140" height="114" rx="4" fill="#fff" '+st+'/>'
     +'<rect x="42" y="32" width="116" height="20" rx="3" fill="'+D+'"/>'
     +'<rect x="42" y="62" width="52" height="40" rx="3" fill="'+S+'" '+th(2.5)+'/>'
     +'<path d="M104 66 H158 M104 78 H158 M104 90 H150 M42 114 H158 M42 124 H130" fill="none" stroke="#c9c2b8" stroke-width="4" stroke-linecap="round"/>'
     +'<path d="M150 8 L182 8 L176 20 L182 32 L150 32 Z" fill="'+R+'" '+st+'/>'),
    /* 細節句：記者筆記本＋時鐘＋地點針 */
    dg20260902b2_detail: svg(
      '<rect x="34" y="24" width="88" height="112" rx="6" fill="'+Y+'" '+st+'/>'
     +'<g fill="'+C+'" '+th(2.5)+'><circle cx="52" cy="24" r="5"/><circle cx="78" cy="24" r="5"/><circle cx="104" cy="24" r="5"/></g>'
     +'<path d="M46 52 H110 M46 70 H110 M46 88 H100 M46 106 H110" fill="none" stroke="#c99a2e" stroke-width="3" stroke-linecap="round"/>'
     +clock(152,52,22,152,40,164,58)
     +'<path d="M152 132 c-14 -16 -18 -24 -18 -32 a18 18 0 0 1 36 0 c0 8 -4 16 -18 32 Z" fill="'+R+'" '+st+'/><circle cx="152" cy="100" r="6" fill="#fff" '+th(2.5)+'/>'),
    /* 至今有效：正式文件＋紅色印章 */
    dg20260902b2_seal: svg(
      '<path d="M44 16 H136 L160 40 V136 H44 Z" fill="#fff" '+st+'/><path d="M136 16 V40 H160" fill="'+L+'" '+st+'/>'
     +'<path d="M58 46 H120 M58 62 H146 M58 78 H146 M58 94 H112" fill="none" stroke="#c9c2b8" stroke-width="4" stroke-linecap="round"/>'
     +'<circle cx="122" cy="112" r="20" fill="none" stroke="'+R+'" stroke-width="4"/><circle cx="122" cy="112" r="12" fill="none" stroke="'+R+'" stroke-width="3"/>'
     +'<path d="M116 112 l4 5 l9 -10" fill="none" stroke="'+R+'" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>'),

    /* 情境 1：電台錄音室——麥克風＋ON AIR 燈 */
    dg20260902b2_studio: svg(
      '<rect x="44" y="12" width="112" height="30" rx="8" fill="'+R+'" '+st+'/>'+txt(100,33,'ON AIR',17,'#fff')
     +'<rect x="78" y="54" width="44" height="58" rx="22" fill="#9aa5b1" '+st+'/>'
     +'<path d="M86 72 H114 M86 84 H114 M86 96 H114" fill="none" stroke="#6e7883" stroke-width="3" stroke-linecap="round"/>'
     +'<path d="M66 86 a34 34 0 0 0 68 0" fill="none" '+th(4)+'/>'
     +'<line x1="100" y1="120" x2="100" y2="134" '+th(4)+'/><rect x="72" y="132" width="56" height="8" rx="4" fill="'+D+'"/>'
     +'<path d="M30 72 a24 24 0 0 0 0 30 M18 64 a36 36 0 0 0 0 46 M170 72 a24 24 0 0 1 0 30 M182 64 a36 36 0 0 1 0 46" fill="none" stroke="'+A+'" stroke-width="4" stroke-linecap="round"/>'),
    /* 情境 2：河邊有什麼消息？——收音機＋問號 */
    dg20260902b2_radio: svg(
      '<line x1="60" y1="56" x2="40" y2="18" '+th(4)+'/><circle cx="40" cy="18" r="4" fill="'+D+'"/>'
     +'<rect x="26" y="56" width="132" height="74" rx="12" fill="'+A+'" '+st+'/>'
     +'<circle cx="68" cy="93" r="24" fill="'+C+'" '+st+'/>'
     +'<g fill="'+D+'"><circle cx="60" cy="86" r="2.5"/><circle cx="68" cy="86" r="2.5"/><circle cx="76" cy="86" r="2.5"/><circle cx="60" cy="94" r="2.5"/><circle cx="68" cy="94" r="2.5"/><circle cx="76" cy="94" r="2.5"/><circle cx="60" cy="102" r="2.5"/><circle cx="68" cy="102" r="2.5"/><circle cx="76" cy="102" r="2.5"/></g>'
     +'<rect x="104" y="72" width="40" height="18" rx="3" fill="'+S+'" '+th(2.5)+'/><line x1="118" y1="74" x2="118" y2="88" stroke="'+R+'" stroke-width="3"/>'
     +'<circle cx="114" cy="110" r="7" fill="'+L+'" '+th(2.5)+'/><circle cx="136" cy="110" r="7" fill="'+L+'" '+th(2.5)+'/>'
     +qb(172,34)),
    /* 情境 3：大橋恢復通車——橋上有車在跑 */
    dg20260902b2_bridge: svg(
      '<path d="M0 118 Q50 110 100 118 T200 118 V150 H0 Z" fill="'+S+'"/>'
     +'<path d="M10 128 q12 -6 24 0 M80 136 q12 -6 24 0 M150 128 q12 -6 24 0" fill="none" stroke="'+B+'" stroke-width="3" stroke-linecap="round"/>'
     +'<path d="M20 146 Q100 66 180 146" fill="none" '+th(5)+'/>'
     +'<rect x="8" y="80" width="184" height="12" fill="#c9c2b8" '+st+'/>'
     +'<g '+th(3)+'><line x1="52" y1="92" x2="52" y2="118"/><line x1="100" y1="92" x2="100" y2="118"/><line x1="148" y1="92" x2="148" y2="118"/></g>'
     +car(30,50,B)+car(112,50,Y)),
    /* 情境 4：先給結果——綠燈＋打勾 */
    dg20260902b2_green: svg(
      '<rect x="62" y="12" width="48" height="112" rx="12" fill="#4a4f57" '+st+'/>'
     +'<circle cx="86" cy="36" r="12" fill="#7a3a38" '+th(2.5)+'/><circle cx="86" cy="68" r="12" fill="#7a6a3a" '+th(2.5)+'/><circle cx="86" cy="100" r="12" fill="#5fd08a" '+th(2.5)+'/>'
     +'<line x1="86" y1="124" x2="86" y2="142" '+th(5)+'/>'
     +chk(150,92,24)),
    /* 情境 5：星期四深夜修好——安全帽＋扳手＋月亮 */
    dg20260902b2_crew: svg(
      '<path d="M150 18 a20 20 0 1 0 22 26 a16 16 0 0 1 -22 -26 Z" fill="'+Y+'" '+st+'/>'
     +'<path d="M30 106 a46 46 0 0 1 92 0 Z" fill="'+Y+'" '+st+'/>'
     +'<rect x="20" y="104" width="112" height="14" rx="5" fill="'+Y+'" '+st+'/>'
     +'<path d="M76 62 V104" fill="none" '+th(3)+'/>'
     +'<g transform="rotate(-35 150 104)"><rect x="144" y="76" width="12" height="56" rx="4" fill="#9aa5b1" '+st+'/><path d="M138 82 a14 14 0 1 1 24 0 l-6 -8 h-12 Z" fill="#9aa5b1" '+st+'/></g>'),
    /* 情境 6：第一批車什麼時候過？——一台車＋問號 */
    dg20260902b2_firstcar: svg(
      '<line x1="8" y1="128" x2="192" y2="128" '+st+'/>'
     +'<path d="M20 138 H60 M90 138 H130" stroke="'+Y+'" stroke-width="4" stroke-linecap="round"/>'
     +'<g transform="translate(-12 -10) scale(1.7)">'+car(20,52,R)+'</g>'
     +'<path d="M14 92 H30 M8 104 H26" stroke="#c9c2b8" stroke-width="4" stroke-linecap="round"/>'
     +qb(166,40)),
    /* 情境 7：六點就過了——時鐘指在 6:00 */
    dg20260902b2_clock6: svg(
      clock(90,76,54,90,120,90,30)
     +'<g '+th(4)+'><line x1="90" y1="28" x2="90" y2="36"/><line x1="138" y1="76" x2="130" y2="76"/><line x1="42" y1="76" x2="50" y2="76"/></g>'
     +txt(168,40,'6:00',18,A)
     +'<path d="M150 110 a18 18 0 0 1 36 0 Z" fill="'+Y+'" '+st+'/><g '+th(3)+'><line x1="168" y1="84" x2="168" y2="76"/><line x1="148" y1="92" x2="142" y2="86"/><line x1="188" y1="92" x2="194" y2="86"/></g>'
     +'<line x1="140" y1="112" x2="196" y2="112" '+th(3)+'/>'),
    /* 情境 8：細節全部換成過去式——筆記本上一條條寫下＋筆 */
    dg20260902b2_notes: svg(
      '<rect x="40" y="20" width="104" height="116" rx="6" fill="#fff" '+st+'/>'
     +'<path d="M40 20 H144 V40 H40 Z" fill="'+B+'" '+st+'/>'
     +'<g fill="'+A+'"><circle cx="56" cy="58" r="4"/><circle cx="56" cy="80" r="4"/><circle cx="56" cy="102" r="4"/></g>'
     +'<path d="M68 58 H128 M68 80 H122 M68 102 H116" fill="none" stroke="#9aa5b1" stroke-width="4" stroke-linecap="round"/>'
     +'<g transform="rotate(35 160 96)"><rect x="154" y="44" width="14" height="80" rx="3" fill="'+Y+'" '+st+'/><path d="M154 124 L161 140 L168 124 Z" fill="'+L+'" '+st+'/><rect x="154" y="40" width="14" height="10" rx="2" fill="'+R+'" '+th(2.5)+'/></g>'),
    /* 情境 9：大卡車禁止上橋——卡車＋禁止標誌 */
    dg20260902b2_truckban: svg(
      '<line x1="6" y1="130" x2="110" y2="130" '+st+'/>'
     +'<rect x="8" y="66" width="66" height="50" rx="4" fill="'+L+'" '+st+'/>'
     +'<path d="M74 80 H94 L106 96 V116 H74 Z" fill="'+B+'" '+st+'/><path d="M80 86 H92 L100 98 H80 Z" fill="'+S+'" '+th(2)+'/>'
     +'<circle cx="26" cy="118" r="9" fill="'+D+'"/><circle cx="54" cy="118" r="9" fill="'+D+'"/><circle cx="92" cy="118" r="9" fill="'+D+'"/>'
     +'<line x1="154" y1="86" x2="154" y2="136" '+th(5)+'/>'
     +'<circle cx="154" cy="56" r="34" fill="#fff" '+th(4)+'/><circle cx="154" cy="56" r="27" fill="none" stroke="'+R+'" stroke-width="8"/>'
     +'<line x1="135" y1="37" x2="173" y2="75" stroke="'+R+'" stroke-width="8"/>'
     +'<rect x="136" y="46" width="24" height="16" rx="2" fill="'+D+'"/><path d="M160 50 H166 L172 56 V62 H160 Z" fill="'+D+'"/><circle cx="142" cy="64" r="4" fill="'+D+'"/><circle cx="166" cy="64" r="4" fill="'+D+'"/>'),
    /* 情境 10：正式公告——布告欄上蓋章的公告 */
    dg20260902b2_notice: svg(
      '<rect x="16" y="20" width="168" height="104" rx="6" fill="#c08a5a" '+st+'/>'
     +'<line x1="40" y1="124" x2="40" y2="144" '+th(5)+'/><line x1="160" y1="124" x2="160" y2="144" '+th(5)+'/>'
     +'<rect x="34" y="32" width="76" height="84" fill="#fff" '+st+'/>'
     +'<path d="M44 48 H100 M44 62 H100 M44 76 H90" fill="none" stroke="#c9c2b8" stroke-width="4" stroke-linecap="round"/>'
     +'<circle cx="88" cy="98" r="11" fill="none" stroke="'+R+'" stroke-width="3"/>'
     +'<rect x="122" y="40" width="50" height="40" fill="'+S+'" '+st+'/><path d="M130 52 H164 M130 64 H156" fill="none" stroke="#9aa5b1" stroke-width="3" stroke-linecap="round"/>'
     +'<circle cx="72" cy="34" r="5" fill="'+R+'" '+th(2)+'/><circle cx="147" cy="42" r="5" fill="'+G+'" '+th(2)+'/>')
  });
})();

/* ============================================================
   dg20260902b2 — The News Lead and Beyond
   Grammar in Use Unit 7（Present perfect：新消息、結果在現在）＋ 新聞前導句、正式報告、美式口語
   ============================================================ */
window.GVIDEO.dg20260902b2 = {
  kind: 'gram',
  date: '2026-09-02',
  title: 'The News Lead and Beyond',
  titleCn: '現在完成式的語域：新聞前導句、正式報告與美式口語',
  titleArt: ['dg20260902b2_lead', 'dg20260902b2_detail', 'dg20260902b2_seal'],
  scene: '電台晨間新聞 Morning radio news',
  sceneArt: 'dg20260902b2_studio',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Ava', voice: 'f' },
    T: { name: 'Julian', voice: 'm' }
  },
  expr: {
    lead:  { t: 'have / has + p.p.（前導句）', cn: '先給結果、不給時間 → 現在完成式', ex: 'Two local schools have won national science awards.', exCn: '兩所本地學校拿下了全國科學獎。', note: '前導句刻意不說什麼時候，讀者先知道現在的結果' },
    det:   { t: 'did + 時間地點（細節句）', cn: '補上時間 → 過去簡單式', ex: 'The judges announced the results on Friday evening.', exCn: '評審在星期五晚上公布了結果。', note: 'on Monday、at 3 a.m.、last night 一出現，就不能用完成式' },
    still: { t: 'has remained / has been + since', cn: '正式報告：狀態到現在還有效', ex: 'The ban has remained in place since the inquiry.', exCn: '這項禁令自調查以來一直有效。', note: '常跟 since、so far、to date 一起出現' }
  },
  chapters: [
    { cn: '開場' }, { cn: '新聞的時態分工' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  cardsKick: 'Lead, detail, still true 開場・細節・至今',
  cards: [
    { art: 'dg20260902b2_lead',   lab: '前導句',   who: '先給結果・不給時間' },
    { art: 'dg20260902b2_detail', lab: '細節句',   who: '補時間地點・過去式' },
    { art: 'dg20260902b2_seal',   lab: '至今有效', who: '狀態到現在還算數' }
  ],
  flow: [
    { q: '要先給結果、不說時間嗎？', a: '現在完成式', en: 'have / has + p.p.（不放時間）' },
    { q: '要補時間、地點、經過嗎？', a: '過去簡單式', en: '主詞 + 過去式 + 時間／地點' },
    { q: '這個狀態到現在還有效嗎？', a: '現在完成式', en: 'have / has + p.p. + since／so far' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: '同一則新聞，第一句用現在完成式，後面卻換成過去式。這支影片帶你看懂這種分工。', vis: { type: 'title' } },

    /* ---- 1 核心：新聞的時態分工 ---- */
    { ch: 1, sp: 'N', zh: '英文新聞的時態是有分工的。先看這三張卡。', vis: { type: 'cards', show: 0 } },
    { ch: 1, sp: 'N', zh: '第一句叫前導句。它先告訴你現在的結果，刻意不說什麼時候，所以用現在完成式。',
      hi: [{ t: '現在完成式', k: 'lead', c: 3 }], vis: { type: 'cards', show: 1, pop: true } },
    { ch: 1, sp: 'A', en: 'A powerful storm has toppled hundreds of trees across the county.', cn: '一場強烈暴風雨吹倒了全縣好幾百棵樹。',
      hi: [{ t: 'has toppled', cn: '現在的結果', k: 'lead', c: 3 }], vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'N', zh: '接下來的細節句，要交代時間、地點和經過。時間一出現，就換成過去簡單式。',
      hi: [{ t: '過去簡單式', k: 'det', c: 4 }], vis: { type: 'cards', show: 2, pop: true } },
    { ch: 1, sp: 'T', en: 'The storm struck the coast early on Sunday.', cn: '暴風雨在星期日清晨登陸沿海地區。',
      hi: [{ t: 'struck', cn: '過去式', k: 'det', c: 4 }, { t: 'early on Sunday', cn: '明確時間', k: 'det', c: 4 }], vis: { type: 'cards', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: '前導句先讓你知道出了什麼事，細節句再一層一層補上來。',
      vis: { type: 'cards', show: 2 } },
    { ch: 1, sp: 'N', zh: '正式報告還有第三種用法：用完成式，表示這個狀態到現在都還有效。',
      hi: [{ t: '到現在都還有效', k: 'still', c: 2 }], vis: { type: 'cards', show: 3, pop: true } },
    { ch: 1, sp: 'A', en: 'Access to the old pier has been restricted since the storm.', cn: '自從那場暴風雨之後，舊碼頭就一直限制進入。',
      hi: [{ t: 'has been restricted', cn: '到現在還在限制', k: 'still', c: 2 }], vis: { type: 'cards', show: 3, lit: 2 } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: '前導句的句型：主詞加 have 或 has，再加過去分詞，不放時間。',
      hi: [{ t: '前導句', k: 'lead', c: 3 }],
      vis: { type: 'pattern', kick: 'The lead 前導句', rows: [
        { lab: '主動', blocks: [{ t: 'A local bakery', k: 's' }, { t: 'has donated', k: 'v' }, { t: 'ten thousand meals', k: 'n' }] },
        { lab: '被動', blocks: [{ t: 'Two climbers', k: 's' }, { t: 'have been rescued', k: 'v' }, { t: 'from the mountain', k: 'n' }] }
      ], note: '前導句不放 yesterday、on Monday' } },
    { ch: 2, sp: 'N', zh: '細節句的句型：主詞加過去式，後面放時間或地點。',
      hi: [{ t: '細節句', k: 'det', c: 4 }],
      vis: { type: 'pattern', kick: 'The details 細節句', rows: [
        { lab: '時間', blocks: [{ t: 'Rescuers', k: 's' }, { t: 'found', k: 'v' }, { t: 'them', k: 'n' }, { t: 'late on Friday', k: 'o' }] },
        { lab: '地點', blocks: [{ t: 'The bakery', k: 's' }, { t: 'started', k: 'v' }, { t: 'the project', k: 'n' }, { t: 'in a church hall', k: 'o' }] }
      ], note: '時間一出現，就用過去簡單式' } },
    { ch: 2, sp: 'N', zh: '正式報告的句型：完成式後面加 since，或在句子裡放 so far，表示從那時到現在都成立。',
      hi: [{ t: 'since', k: 'still', c: 2 }],
      vis: { type: 'pattern', kick: 'Still true 至今有效', rows: [
        { lab: 'since', blocks: [{ t: 'The discount', k: 's' }, { t: 'has been available', k: 'v' }, { t: 'to students', k: 'n' }, { t: 'since spring', k: 'o', add: true }] },
        { lab: 'so far', blocks: [{ t: 'So far,', k: 'o', add: true }, { t: 'the program', k: 's' }, { t: 'has saved', k: 'v' }, { t: 'two million dollars', k: 'n' }] }
      ] } },
    { ch: 2, sp: 'N', zh: '在新聞和報告裡，這幾個字常常跟現在完成式一起出現。',
      vis: { type: 'family', kick: 'Report words 報告常用字', core: 'have / has + p.p.', coreCn: '常跟這些字一起出現', art: 'dg20260902b2_seal', items: [
        { t: 'so far', cn: '到目前為止' }, { t: 'to date', cn: '至今' }, { t: 'since …', cn: '自從…' }, { t: 'recently', cn: '最近' }
      ] } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: '來聽電台主持人 Ava 和現場記者 Julian 的連線，注意他們什麼時候換時態。', vis: { type: 'scene', art: 'dg20260902b2_studio' } },
    { ch: 3, sp: 'A', en: "Julian, what's the news from the riverside?", cn: 'Julian，河邊有什麼最新消息？', vis: { type: 'scene', art: 'dg20260902b2_radio' } },
    { ch: 3, sp: 'T', en: 'The Westgate Bridge has reopened to traffic.', cn: '西門大橋已經恢復通車了。',
      hi: [{ t: 'has reopened', cn: '先給結果', k: 'lead', c: 3 }], vis: { type: 'scene', art: 'dg20260902b2_bridge' } },
    { ch: 3, sp: 'N', zh: '這就是前導句。Julian 先給結果：橋現在通了。沒說時間，所以用 has reopened。',
      hi: [{ t: 'has reopened', k: 'lead', c: 3 }], vis: { type: 'scene', art: 'dg20260902b2_green' } },
    { ch: 3, sp: 'T', en: 'Crews finished the last repairs late on Thursday night.', cn: '工程人員在星期四深夜完成了最後的修繕。',
      hi: [{ t: 'finished', cn: '細節', k: 'det', c: 4 }], vis: { type: 'scene', art: 'dg20260902b2_crew' } },
    { ch: 3, sp: 'A', en: 'When did the first cars go across?', cn: '第一批車是什麼時候過橋的？',
      hi: [{ t: 'When did', cn: '問那一刻', k: 'det', c: 4 }], vis: { type: 'scene', art: 'dg20260902b2_firstcar' } },
    { ch: 3, sp: 'T', en: 'They crossed at six, right after a final safety check.', cn: '六點就過了，就在最後一次安全檢查之後。',
      hi: [{ t: 'crossed', cn: '細節', k: 'det', c: 4 }], vis: { type: 'scene', art: 'dg20260902b2_clock6' } },
    { ch: 3, sp: 'N', zh: '一進到細節，出現星期四深夜、六點，就換成過去簡單式。',
      hi: [{ t: '過去簡單式', k: 'det', c: 4 }], vis: { type: 'scene', art: 'dg20260902b2_notes' } },
    { ch: 3, sp: 'T', en: 'Heavy trucks have been banned from the bridge since the flood.', cn: '自從那次水災之後，大卡車就一直禁止上橋。',
      hi: [{ t: 'have been banned', cn: '至今有效', k: 'still', c: 2 }], vis: { type: 'scene', art: 'dg20260902b2_truckban' } },
    { ch: 3, sp: 'N', zh: '最後這句像正式公告：禁令從水災到現在都還有效，所以用完成式配 since。',
      hi: [{ t: 'since', k: 'still', c: 2 }], vis: { type: 'scene', art: 'dg20260902b2_notice' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '同一個事件，放在新聞的哪個位置，時態就不一樣。',
      vis: { type: 'vs', sm: true, kick: '前導句 vs 細節句',
        a: { w: 'A burst pipe has closed the central library.', def: '水管爆裂，中央圖書館暫停開放。', cn: '先給結果・不給時間 → 完成式' },
        b: { w: 'The pipe burst in the basement at 4 a.m.', def: '水管凌晨四點在地下室爆裂。', cn: '有時間地點 → 過去式' } } },
    { ch: 4, sp: 'A', en: 'A burst pipe has closed the central library.', cn: '水管爆裂，中央圖書館暫停開放。',
      hi: [{ t: 'has closed', cn: '現在的結果', k: 'lead', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '前導句 vs 細節句',
        a: { w: 'A burst pipe has closed the central library.', def: '水管爆裂，中央圖書館暫停開放。', cn: '先給結果・不給時間 → 完成式' },
        b: { w: 'The pipe burst in the basement at 4 a.m.', def: '水管凌晨四點在地下室爆裂。', cn: '有時間地點 → 過去式' } } },
    { ch: 4, sp: 'T', en: 'The pipe burst in the basement at 4 a.m.', cn: '水管凌晨四點在地下室爆裂。',
      hi: [{ t: 'at 4 a.m.', cn: '明確時間', k: 'det', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '前導句 vs 細節句',
        a: { w: 'A burst pipe has closed the central library.', def: '水管爆裂，中央圖書館暫停開放。', cn: '先給結果・不給時間 → 完成式' },
        b: { w: 'The pipe burst in the basement at 4 a.m.', def: '水管凌晨四點在地下室爆裂。', cn: '有時間地點 → 過去式' } } },
    { ch: 4, sp: 'N', zh: '第一句告訴你現在圖書館關著；第二句交代凌晨四點、地下室，就用過去式。',
      vis: { type: 'vs', sm: true, kick: '前導句 vs 細節句',
        a: { w: 'A burst pipe has closed the central library.', def: '水管爆裂，中央圖書館暫停開放。', cn: '先給結果・不給時間 → 完成式' },
        b: { w: 'The pipe burst in the basement at 4 a.m.', def: '水管凌晨四點在地下室爆裂。', cn: '有時間地點 → 過去式' } } },
    { ch: 4, sp: 'N', zh: '再看口語。講剛發生的事，美式口語常直接用過去式，這不是錯；正式寫作就用完成式。',
      vis: { type: 'vs', sm: true, kick: '美式口語 vs 正式寫法',
        a: { w: 'I just sent you the script.', def: '我剛把稿子傳給你了。', cn: '美式口語・很常見' },
        b: { w: 'I have just sent you the script.', def: '我剛把稿子傳給你了。', cn: '正式寫作・英式偏好' } } },
    { ch: 4, sp: 'A', en: 'I just sent you the script.', cn: '我剛把稿子傳給你了。',
      hi: [{ t: 'just sent', cn: '美式口語', k: 'lead', c: 1 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '美式口語 vs 正式寫法',
        a: { w: 'I just sent you the script.', def: '我剛把稿子傳給你了。', cn: '美式口語・很常見' },
        b: { w: 'I have just sent you the script.', def: '我剛把稿子傳給你了。', cn: '正式寫作・英式偏好' } } },
    { ch: 4, sp: 'T', en: 'I have just sent you the script.', cn: '我剛把稿子傳給你了。',
      hi: [{ t: 'have just sent', cn: '正式寫法', k: 'lead', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '美式口語 vs 正式寫法',
        a: { w: 'I just sent you the script.', def: '我剛把稿子傳給你了。', cn: '美式口語・很常見' },
        b: { w: 'I have just sent you the script.', def: '我剛把稿子傳給你了。', cn: '正式寫作・英式偏好' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '最後給你一個判斷流程。寫新聞或報告時，照順序問自己三個問題。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一問：要先給結果、不說時間嗎？是的話，用現在完成式。',
      hi: [{ t: '現在完成式', k: 'lead', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'A', en: 'Scientists have discovered a new species of frog in Taiwan.', cn: '科學家在台灣發現了一種新的青蛙。',
      hi: [{ t: 'have discovered', cn: '先給結果', k: 'lead', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二問：要補上時間、地點或經過嗎？是的話，用過去簡單式。',
      hi: [{ t: '過去簡單式', k: 'det', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'T', en: 'A research team spotted it near a mountain stream in May.', cn: '一支研究團隊五月在山區溪流附近發現了牠。',
      hi: [{ t: 'spotted', cn: '細節', k: 'det', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '第三問：這個狀態到現在還有效嗎？是的話，用完成式，配 since 或 so far。',
      hi: [{ t: 'since', k: 'still', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'A', en: 'Sales have risen steadily since the merger.', cn: '自從合併以來，營業額一直穩定成長。',
      hi: [{ t: 'have risen', cn: '至今', k: 'still', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說說看。看到中文情境，先自己用英文說出來，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：你在寫新聞第一句，要說市立動物園來了一隻熊貓寶寶，先不說時間。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '你在寫新聞第一句，要說市立動物園來了一隻熊貓寶寶，先不說時間。' } },
    { ch: 6, sp: 'T', en: 'A baby panda has arrived at the city zoo.', cn: '一隻熊貓寶寶來到了市立動物園。',
      hi: [{ t: 'has arrived', cn: '前導句 → 完成式', k: 'lead', c: 3 }],
      vis: { type: 'speak', n: 1, show: true, sit: '你在寫新聞第一句，要說市立動物園來了一隻熊貓寶寶，先不說時間。', a: 'A baby panda has arrived at the city zoo.' } },
    { ch: 6, sp: 'N', zh: '情境二：接著補細節，說牠是星期二早上到的。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '接著補細節，說牠是星期二早上到的。' } },
    { ch: 6, sp: 'A', en: 'It arrived on Tuesday morning.', cn: '牠是星期二早上抵達的。',
      hi: [{ t: 'arrived', cn: '有時間 → 過去式', k: 'det', c: 4 }],
      vis: { type: 'speak', n: 2, show: true, sit: '接著補細節，說牠是星期二早上到的。', a: 'It arrived on Tuesday morning.' } },
    { ch: 6, sp: 'N', zh: '情境三：在正式報告裡，你要寫這套系統從三月起一直使用到現在。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '在正式報告裡，你要寫這套系統從三月起一直使用到現在。' } },
    { ch: 6, sp: 'T', en: 'The system has been in use since March.', cn: '這套系統從三月起一直在使用。',
      hi: [{ t: 'has been in use', cn: '至今有效 → 完成式', k: 'still', c: 2 }],
      vis: { type: 'speak', n: 3, show: true, sit: '在正式報告裡，你要寫這套系統從三月起一直使用到現在。', a: 'The system has been in use since March.' } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結一下：前導句用完成式先給結果；細節有了時間，就換過去式；狀態至今有效，用完成式配 since。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '下次讀英文新聞，比一比第一句和第二句的時態。', vis: { type: 'end' } }
  ]
};
