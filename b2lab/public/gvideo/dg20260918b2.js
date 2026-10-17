/* ============================================================
   B2 Read 文法影片解說 — dg20260918b2（Unit 13，B2）
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
  /* 灰色文字線（假裝是內文） */
  var lines=function(x,y,w,n,gap){ var g=''; for(var i=0;i<n;i++) g+='<line x1="'+x+'" y1="'+(y+i*gap)+'" x2="'+(x+(i===n-1?w*0.6:w))+'" y2="'+(y+i*gap)+'" stroke="#c9c2b8" stroke-width="4" stroke-linecap="round"/>'; return g; };
  /* 腳踏車（後輪中心 x,y） */
  var bike=function(x,y,col){ return '<circle cx="'+x+'" cy="'+y+'" r="15" fill="none" '+th(4)+'/><circle cx="'+(x+44)+'" cy="'+y+'" r="15" fill="none" '+th(4)+'/>'
      +'<path d="M'+x+' '+y+' L'+(x+16)+' '+(y-26)+' H'+(x+36)+' L'+(x+44)+' '+y+' M'+(x+16)+' '+(y-26)+' L'+(x+22)+' '+y+' L'+(x+36)+' '+(y-26)+'" fill="none" stroke="'+col+'" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>'
      +'<path d="M'+(x+10)+' '+(y-34)+' H'+(x+22)+' M'+(x+16)+' '+(y-34)+' V'+(y-26)+' M'+(x+36)+' '+(y-26)+' L'+(x+33)+' '+(y-38)+' H'+(x+42)+'" fill="none" '+th(3.5)+'/>'; };
  /* 圖釘（針尖 x,y） */
  var pin=function(x,y){ return '<line x1="'+x+'" y1="'+y+'" x2="'+(x+12)+'" y2="'+(y-16)+'" '+th(3)+'/><circle cx="'+(x+16)+'" cy="'+(y-22)+'" r="11" fill="'+R+'" '+st+'/><circle cx="'+(x+13)+'" cy="'+(y-25)+'" r="3" fill="#fff"/>'; };

  Object.assign(window.GVIDEO_ART, {
    /* 鏡頭推到現在：攝影機對著 NOW（現在完成式） */
    dg20260918b2_camera: svg(
      '<circle cx="50" cy="44" r="15" fill="'+C+'" '+st+'/><circle cx="88" cy="44" r="15" fill="'+C+'" '+st+'/>'
     +'<rect x="26" y="58" width="88" height="54" rx="8" fill="#33405c" '+st+'/>'
     +'<path d="M114 72 L144 58 V112 L114 98 Z" fill="'+S+'" '+st+'/>'
     +'<circle cx="42" cy="72" r="5" fill="'+R+'"/>'
     +'<line x1="40" y1="112" x2="30" y2="138" '+th(4)+'/><line x1="70" y1="112" x2="70" y2="138" '+th(4)+'/><line x1="100" y1="112" x2="110" y2="138" '+th(4)+'/>'
     +'<rect x="150" y="70" width="44" height="30" rx="6" fill="'+A+'" '+st+'/>'+txt(172,91,'NOW',15,'#fff')),
    /* 鏡頭留在當時：月曆上釘住一天（過去簡單式） */
    dg20260918b2_pin: svg(
      cal(40,32,116,98)
     +'<rect x="102" y="82" width="18" height="14" rx="2" fill="'+Y+'" '+th(2)+'/>'
     +pin(111,89)),
    /* 正式、不點名：蓋了印章的公文（完成式被動） */
    dg20260918b2_seal: svg(
      '<rect x="40" y="14" width="98" height="122" rx="6" fill="#fff" '+st+'/>'
     +'<rect x="54" y="28" width="52" height="10" rx="3" fill="'+B+'"/>'
     +lines(54,54,70,5,13)
     +'<circle cx="138" cy="108" r="26" fill="'+R+'" '+st+'/><circle cx="138" cy="108" r="17" fill="none" stroke="#fff" stroke-width="2.5"/>'
     +'<path d="M138 97 l3.5 7 l7.5 1 l-5.5 5 l1.5 7.5 l-7 -3.5 l-7 3.5 l1.5 -7.5 l-5.5 -5 l7.5 -1 Z" fill="#fff"/>'),

    /* 情境 0：辦公桌——筆電、稿子、咖啡 */
    dg20260918b2_desk: svg(
      '<rect x="8" y="118" width="184" height="10" rx="3" fill="#b07a4a" '+st+'/>'
     +'<rect x="40" y="48" width="86" height="58" rx="5" fill="#33405c" '+st+'/><rect x="47" y="55" width="72" height="44" rx="2" fill="'+S+'"/>'
     +lines(54,65,56,3,11)
     +'<path d="M30 106 H136 L142 118 H24 Z" fill="#c9c2b8" '+st+'/>'
     +'<rect x="150" y="84" width="26" height="34" rx="4" fill="'+R+'" '+st+'/><path d="M176 92 a8 8 0 0 1 0 16" fill="none" '+th(3)+'/>'
     +'<path d="M156 76 q-4 -8 2 -14 M168 76 q-4 -8 2 -14" fill="none" '+th(2.5)+'/>'),
    /* 情境 1：第一句怎麼寫？——新聞稿＋問號 */
    dg20260918b2_draft: svg(
      '<rect x="40" y="18" width="94" height="118" rx="6" fill="#fff" '+st+'/>'
     +'<rect x="52" y="32" width="58" height="12" rx="3" fill="'+A+'"/>'
     +'<rect x="52" y="54" width="70" height="8" rx="2" fill="none" stroke="'+B+'" stroke-width="2.5" stroke-dasharray="4 4"/>'
     +lines(52,78,70,4,13)
     +qb(162,40)),
    /* 情境 2：推出共享單車——站點旁的兩台車 */
    dg20260918b2_bikes: svg(
      '<line x1="6" y1="128" x2="194" y2="128" '+st+'/>'
     +bike(22,112,G)
     +'<rect x="88" y="54" width="22" height="74" rx="4" fill="'+B+'" '+st+'/><rect x="92" y="62" width="14" height="18" rx="2" fill="'+S+'" '+th(2)+'/>'
     +bike(130,112,G)),
    /* 情境 3：開場講現況——報紙頭條 */
    dg20260918b2_paper: svg(
      '<rect x="22" y="20" width="156" height="112" rx="4" fill="#fff" '+st+'/>'
     +'<rect x="32" y="30" width="136" height="12" rx="2" fill="'+D+'"/>'
     +'<rect x="32" y="50" width="136" height="12" rx="3" fill="'+R+'"/>'
     +'<rect x="32" y="70" width="64" height="52" fill="'+S+'" '+th(2.5)+'/>'
     +'<circle cx="50" cy="106" r="8" fill="none" '+th(2.5)+'/><circle cx="78" cy="106" r="8" fill="none" '+th(2.5)+'/><path d="M50 106 L60 90 H72 L78 106 M60 90 L64 106 H78" fill="none" stroke="'+G+'" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>'
     +lines(104,76,62,4,13)),
    /* 情境 4：要提星期一的典禮嗎？——彩帶＋問號 */
    dg20260918b2_ribbon: svg(
      '<line x1="8" y1="134" x2="192" y2="134" '+st+'/>'
     +'<line x1="34" y1="64" x2="34" y2="134" '+th(5)+'/><line x1="146" y1="64" x2="146" y2="134" '+th(5)+'/>'
     +'<path d="M34 78 Q90 92 146 78" fill="none" stroke="'+R+'" stroke-width="8" stroke-linecap="round"/>'
     +'<path d="M90 86 l-18 -12 v20 Z M90 86 l18 -12 v20 Z" fill="'+R+'" '+st+'/><circle cx="90" cy="86" r="5" fill="'+R+'" '+st+'/>'
     +'<path d="M88 90 l-8 22 M92 90 l8 22" stroke="'+R+'" stroke-width="5" stroke-linecap="round"/>'
     +qb(174,40)),
    /* 情境 5：市長剪綵——剪刀剪斷彩帶 */
    dg20260918b2_scissors: svg(
      '<path d="M8 72 Q44 80 80 74" fill="none" stroke="'+R+'" stroke-width="8" stroke-linecap="round"/>'
     +'<path d="M120 80 Q156 92 192 104" fill="none" stroke="'+R+'" stroke-width="8" stroke-linecap="round"/>'
     +'<path d="M94 104 L120 48 L127 52 L102 108 Z" fill="#c9c2b8" '+st+'/>'
     +'<path d="M106 104 L80 48 L73 52 L98 108 Z" fill="#c9c2b8" '+st+'/>'
     +'<circle cx="82" cy="122" r="11" fill="none" stroke="'+A+'" stroke-width="7"/><circle cx="118" cy="122" r="11" fill="none" stroke="'+A+'" stroke-width="7"/>'
     +'<circle cx="100" cy="98" r="3.5" fill="'+D+'"/>'
     +'<path d="M150 40 l4 -10 l4 10 l10 4 l-10 4 l-4 10 l-4 -10 l-10 -4 Z M44 34 l3 -8 l3 8 l8 3 l-8 3 l-3 8 l-3 -8 l-8 -3 Z" fill="'+Y+'" '+th(2)+'/>'),
    /* 情境 6：時間一寫出來就釘住了——時鐘被圖釘釘住 */
    dg20260918b2_clock: svg(
      '<circle cx="92" cy="80" r="52" fill="#fff" '+th(4)+'/>'
     +'<g '+th(4)+'><line x1="92" y1="32" x2="92" y2="40"/><line x1="140" y1="80" x2="132" y2="80"/><line x1="92" y1="128" x2="92" y2="120"/><line x1="44" y1="80" x2="52" y2="80"/></g>'
     +'<line x1="92" y1="80" x2="92" y2="50" '+th(4)+'/><line x1="92" y1="80" x2="114" y2="92" stroke="'+A+'" stroke-width="6" stroke-linecap="round"/>'
     +'<circle cx="92" cy="80" r="5" fill="'+D+'"/>'
     +'<line x1="128" y1="44" x2="150" y2="22" '+th(3)+'/><circle cx="156" cy="18" r="12" fill="'+R+'" '+st+'/><circle cx="152" cy="14" r="3" fill="#fff"/>'),
    /* 情境 7：到目前為止的反應呢？——兩個對話框＋問號 */
    dg20260918b2_chat: svg(
      '<path d="M20 26 H100 a10 10 0 0 1 10 10 V64 a10 10 0 0 1 -10 10 H48 L34 88 V74 H20 a10 10 0 0 1 -10 -10 V36 a10 10 0 0 1 10 -10 Z" fill="'+L+'" '+st+'/>'
     +'<path d="M96 70 H176 a10 10 0 0 1 10 10 V108 a10 10 0 0 1 -10 10 H162 V132 L148 118 H96 a10 10 0 0 1 -10 -10 V80 a10 10 0 0 1 10 -10 Z" fill="'+S+'" '+st+'/>'
     +'<g fill="'+D+'"><circle cx="44" cy="50" r="4"/><circle cx="60" cy="50" r="4"/><circle cx="76" cy="50" r="4"/></g>'
     +'<path d="M116 94 l8 0 M132 94 l30 0" '+th(4)+'/>'
     +qb(166,36)),
    /* 情境 8：兩千多人註冊——手機上的會員＋數字 */
    dg20260918b2_signup: svg((function(){
      var g='<rect x="58" y="14" width="74" height="124" rx="12" fill="'+D+'" '+st+'/><rect x="65" y="26" width="60" height="98" rx="3" fill="#fff"/>';
      for(var i=0;i<3;i++){ var y=42+i*28; g+='<circle cx="80" cy="'+y+'" r="8" fill="'+L+'" '+th(2.5)+'/><line x1="94" y1="'+(y-2)+'" x2="112" y2="'+(y-2)+'" stroke="#c9c2b8" stroke-width="4" stroke-linecap="round"/>'
        +'<path d="M106 '+(y+6)+' l3 3 l6 -6" fill="none" stroke="'+G+'" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>'; }
      return g+'<rect x="128" y="28" width="62" height="28" rx="14" fill="'+G+'" '+st+'/>'+txt(159,48,'2000+',15,'#fff'); })()),
    /* 情境 9：數字還在增加——上升的長條圖 */
    dg20260918b2_chart: svg(
      '<path d="M24 20 V128 H184" fill="none" '+th(4)+'/>'
     +'<rect x="38" y="100" width="24" height="28" fill="'+S+'" '+st+'/><rect x="72" y="84" width="24" height="44" fill="'+S+'" '+st+'/>'
     +'<rect x="106" y="64" width="24" height="64" fill="'+B+'" '+st+'/><rect x="140" y="40" width="24" height="88" fill="'+B+'" '+st+'/>'
     +'<path d="M40 82 L80 66 L114 46 L156 20" fill="none" stroke="'+G+'" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>'
     +'<path d="M142 18 L158 18 L154 34" fill="none" stroke="'+G+'" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>')
  });
})();

/* ============================================================
   dg20260918b2 — Where Is the Camera?
   Grammar in Use Unit 13（Present perfect and past 1）＋新聞與正式寫作
   ============================================================ */
window.GVIDEO.dg20260918b2 = {
  kind: 'gram',
  date: '2026-09-18',
  title: 'Where Is the Camera?',
  titleCn: '鏡頭在哪裡？新聞與正式寫作裡的完成式和過去式',
  titleArt: ['dg20260918b2_camera', 'dg20260918b2_pin', 'dg20260918b2_seal'],
  scene: '新聞稿 Press release',
  sceneArt: 'dg20260918b2_desk',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Claire', voice: 'f' },
    T: { name: 'Victor', voice: 'm' }
  },
  expr: {
    now:  { t: 'have / has + p.p.', cn: '開場、現況、還沒結案 → 現在完成式', ex: 'The airline has cancelled all flights to the island.', exCn: '航空公司已經取消所有飛往該島的航班。', note: '不寫明確時間，或搭配 since、so far' },
    past: { t: 'V-ed + 明確時間', cn: '補細節、回顧 → 過去簡單式', ex: 'The storm reached the coast on Thursday night.', exCn: '颱風在星期四晚上抵達沿海。', note: '一寫出 on Monday、in 2024、ago，就切回過去式' },
    pass: { t: 'It has been + p.p. that…', cn: '正式書面，不點名是誰 → 完成式被動', ex: 'It has been confirmed that the venue will change.', exCn: '已確認場地將會更換。', note: '口語通常直接說 they decided…' }
  },
  chapters: [
    { cn: '開場' }, { cn: '鏡頭放在哪？' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  cardsKick: 'Where is the camera? 鏡頭放在哪',
  cards: [
    { art: 'dg20260918b2_camera', lab: '現在完成式', who: '鏡頭推到現在' },
    { art: 'dg20260918b2_pin',    lab: '過去簡單式', who: '鏡頭留在當時' },
    { art: 'dg20260918b2_seal',   lab: '完成式被動', who: '正式、不點名' }
  ],
  flow: [
    { q: '沒寫時間，要講現在的狀況？', a: '現在完成式', en: 'have/has + p.p.（不帶時間）' },
    { q: '要寫出明確的過去時間？',     a: '過去簡單式', en: '主詞 + V-ed + 明確時間' },
    { q: '正式書面，不想點名是誰？',   a: '完成式被動', en: 'It has been + p.p. + that…' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: '同一件事，英文可以用完成式寫，也能用過去式寫。差別在讀者的鏡頭放哪裡。', vis: { type: 'title' } },

    /* ---- 1 核心：鏡頭放在哪？ ---- */
    { ch: 1, sp: 'N', zh: '寫新聞、寫報告之前，先決定一件事：你要讀者看現在，還是看當時？', vis: { type: 'cards', show: 0 } },
    { ch: 1, sp: 'N', zh: '想讓讀者看到現在的狀況、現在的結果，就用現在完成式，把鏡頭推到現在。',
      hi: [{ t: '現在完成式', k: 'now', c: 3 }], vis: { type: 'cards', show: 1, pop: true } },
    { ch: 1, sp: 'A', en: 'The museum has reopened after a two-year renovation.', cn: '博物館整修兩年後重新開放了。',
      hi: [{ t: 'has reopened', cn: '現在的狀況', k: 'now', c: 3 }], vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'N', zh: '一旦要交代是哪一天、哪一年發生的，鏡頭就留在當時，改用過去簡單式。',
      hi: [{ t: '過去簡單式', k: 'past', c: 4 }], vis: { type: 'cards', show: 2, pop: true } },
    { ch: 1, sp: 'T', en: 'It welcomed over four thousand visitors on Saturday.', cn: '星期六就迎來四千多名參觀者。',
      hi: [{ t: 'welcomed', cn: '釘在星期六', k: 'past', c: 4 }], vis: { type: 'cards', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: '新聞最常見的節奏：第一句用完成式講現況，第二句補上時間，切回過去式。',
      vis: { type: 'cards', show: 2 } },
    { ch: 1, sp: 'N', zh: '正式書面還有一種常見寫法：It has been 加過去分詞，不說是誰做的，語氣比較中性。',
      hi: [{ t: 'It has been', k: 'pass', c: 2 }], vis: { type: 'cards', show: 3, pop: true } },
    { ch: 1, sp: 'A', en: 'It has been announced that admission will remain free.', cn: '已經宣布入場將維持免費。',
      hi: [{ t: 'It has been announced', cn: '不點名誰宣布', k: 'pass', c: 2 }], vis: { type: 'cards', show: 3, lit: 2 } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: '開場句用現在完成式：主詞加 have 或 has，再加過去分詞，通常不帶明確的時間。',
      hi: [{ t: '現在完成式', k: 'now', c: 3 }],
      vis: { type: 'pattern', kick: 'Lead sentence 開場句', rows: [
        { lab: '開場', blocks: [{ t: 'The council', k: 's' }, { t: 'has approved', k: 'v' }, { t: 'a new budget', k: 'n' }] },
        { lab: '到現在', blocks: [{ t: 'Ticket prices', k: 's' }, { t: 'have fallen', k: 'v' }, { t: 'since spring', k: 'o' }] }
      ], note: '帶 since 的期間一路延伸到現在，也用完成式' } },
    { ch: 2, sp: 'N', zh: '補細節用過去簡單式：主詞加過去式，後面帶明確時間，像 on Monday、in 2024。',
      hi: [{ t: '過去簡單式', k: 'past', c: 4 }],
      vis: { type: 'pattern', kick: 'Details 補細節', rows: [
        { lab: '那一天', blocks: [{ t: 'The vote', k: 's' }, { t: 'took place', k: 'v' }, { t: 'on Monday', k: 'o' }] },
        { lab: '那一年', blocks: [{ t: 'Prices', k: 's' }, { t: 'peaked', k: 'v' }, { t: 'in 2024', k: 'o' }] }
      ] } },
    { ch: 2, sp: 'N', zh: '正式的被動寫法：It has been 加過去分詞，後面接 that 子句。',
      hi: [{ t: 'It has been', k: 'pass', c: 2 }],
      vis: { type: 'pattern', kick: 'Formal passive 完成式被動', rows: [
        { lab: '決定', blocks: [{ t: 'It', k: 's' }, { t: 'has been decided', k: 'v' }, { t: 'that', k: 'x' }, { t: 'the plan will continue', k: 'n' }] },
        { lab: '報導', blocks: [{ t: 'It', k: 's' }, { t: 'has been reported', k: 'v' }, { t: 'that', k: 'x' }, { t: 'two roads are closed', k: 'n' }] }
      ], note: '主詞是 It，所以用 has' } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: '新聞官 Victor 寫了一份新聞稿，編輯 Claire 幫他看稿，注意時態怎麼排。', vis: { type: 'scene', art: 'dg20260918b2_desk' } },
    { ch: 3, sp: 'T', en: 'How should I open the press release?', cn: '新聞稿的第一句該怎麼寫？', vis: { type: 'scene', art: 'dg20260918b2_draft' } },
    { ch: 3, sp: 'A', en: 'Start with the news. The city has launched a bike-share program.', cn: '先講新聞本身：市政府推出了共享單車計畫。',
      hi: [{ t: 'has launched', cn: '開場講現況', k: 'now', c: 3 }], vis: { type: 'scene', art: 'dg20260918b2_bikes' } },
    { ch: 3, sp: 'N', zh: '第一句不放日期，讓讀者直接看到現在的狀況，所以用現在完成式。',
      hi: [{ t: '現在完成式', k: 'now', c: 3 }], vis: { type: 'scene', art: 'dg20260918b2_paper' } },
    { ch: 3, sp: 'T', en: 'Should I mention the opening ceremony on Monday?', cn: '要提到星期一的啟用典禮嗎？',
      vis: { type: 'scene', art: 'dg20260918b2_ribbon' } },
    { ch: 3, sp: 'A', en: 'Yes, in sentence two. The mayor opened the first station on Monday.', cn: '要，放在第二句：市長星期一啟用了第一個站。',
      hi: [{ t: 'opened', cn: '寫出星期一', k: 'past', c: 4 }], vis: { type: 'scene', art: 'dg20260918b2_scissors' } },
    { ch: 3, sp: 'N', zh: '一寫出星期一，時間就被釘住了，所以切回過去簡單式 opened。',
      hi: [{ t: 'opened', k: 'past', c: 4 }], vis: { type: 'scene', art: 'dg20260918b2_clock' } },
    { ch: 3, sp: 'T', en: 'And what about the response so far?', cn: '那到目前為止的反應呢？',
      hi: [{ t: 'so far', cn: '到現在為止', k: 'now', c: 1 }], vis: { type: 'scene', art: 'dg20260918b2_chat' } },
    { ch: 3, sp: 'A', en: 'More than two thousand people have signed up since the launch.', cn: '啟用以來，已經有兩千多人註冊了。',
      hi: [{ t: 'have signed up', cn: '延續到現在', k: 'now', c: 3 }], vis: { type: 'scene', art: 'dg20260918b2_signup' } },
    { ch: 3, sp: 'N', zh: 'since the launch 一路延伸到現在，人數還在增加，所以又回到現在完成式。',
      hi: [{ t: 'since the launch', k: 'now', c: 3 }], vis: { type: 'scene', art: 'dg20260918b2_chart' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '同一個數字，換個時態，讀者的感覺就不一樣。',
      vis: { type: 'vs', sm: true, kick: '已經翻頁 vs 還沒結案',
        a: { w: 'Water bills went up ten percent last year.', def: '水費去年漲了一成。', cn: '回顧：已經翻頁 → 過去簡單式' },
        b: { w: 'Water bills have gone up ten percent since last year.', def: '水費從去年到現在漲了一成。', cn: '現況：問題還在 → 現在完成式' } } },
    { ch: 4, sp: 'A', en: 'Water bills went up ten percent last year.', cn: '水費去年漲了一成。',
      hi: [{ t: 'went up', cn: '回顧去年', k: 'past', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '已經翻頁 vs 還沒結案',
        a: { w: 'Water bills went up ten percent last year.', def: '水費去年漲了一成。', cn: '回顧：已經翻頁 → 過去簡單式' },
        b: { w: 'Water bills have gone up ten percent since last year.', def: '水費從去年到現在漲了一成。', cn: '現況：問題還在 → 現在完成式' } } },
    { ch: 4, sp: 'T', en: 'Water bills have gone up ten percent since last year.', cn: '水費從去年到現在漲了一成。',
      hi: [{ t: 'have gone up', cn: '延續到現在', k: 'now', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '已經翻頁 vs 還沒結案',
        a: { w: 'Water bills went up ten percent last year.', def: '水費去年漲了一成。', cn: '回顧：已經翻頁 → 過去簡單式' },
        b: { w: 'Water bills have gone up ten percent since last year.', def: '水費從去年到現在漲了一成。', cn: '現況：問題還在 → 現在完成式' } } },
    { ch: 4, sp: 'N', zh: '左邊像回顧舊帳，已經翻頁；右邊讓讀者覺得，這個負擔現在還在。',
      vis: { type: 'vs', sm: true, kick: '已經翻頁 vs 還沒結案',
        a: { w: 'Water bills went up ten percent last year.', def: '水費去年漲了一成。', cn: '回顧：已經翻頁 → 過去簡單式' },
        b: { w: 'Water bills have gone up ten percent since last year.', def: '水費從去年到現在漲了一成。', cn: '現況：問題還在 → 現在完成式' } } },
    { ch: 4, sp: 'N', zh: '再看一組。口語會直接點名是誰決定的；正式公告則用完成式被動，不點名。',
      vis: { type: 'vs', sm: true, kick: '口語 vs 正式公告',
        a: { w: 'They decided to close the old pier.', def: '他們決定關閉舊碼頭。', cn: '口語：直接點名 → 過去簡單式' },
        b: { w: 'It has been decided to close the old pier.', def: '已決定關閉舊碼頭。', cn: '正式：不點名 → 完成式被動' } } },
    { ch: 4, sp: 'A', en: 'They decided to close the old pier.', cn: '他們決定關閉舊碼頭。',
      hi: [{ t: 'decided', cn: '點名 they', k: 'past', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '口語 vs 正式公告',
        a: { w: 'They decided to close the old pier.', def: '他們決定關閉舊碼頭。', cn: '口語：直接點名 → 過去簡單式' },
        b: { w: 'It has been decided to close the old pier.', def: '已決定關閉舊碼頭。', cn: '正式：不點名 → 完成式被動' } } },
    { ch: 4, sp: 'T', en: 'It has been decided to close the old pier.', cn: '已決定關閉舊碼頭。',
      hi: [{ t: 'It has been decided', cn: '不點名', k: 'pass', c: 2 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '口語 vs 正式公告',
        a: { w: 'They decided to close the old pier.', def: '他們決定關閉舊碼頭。', cn: '口語：直接點名 → 過去簡單式' },
        b: { w: 'It has been decided to close the old pier.', def: '已決定關閉舊碼頭。', cn: '正式：不點名 → 完成式被動' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '最後給你一個判斷流程。動筆之前，照順序問自己三個問題。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一問：沒寫時間，想讓讀者看現況嗎？是的話，用現在完成式。',
      hi: [{ t: '現在完成式', k: 'now', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'A', en: 'The company has recalled its new phone charger.', cn: '這家公司已經召回新款手機充電器。',
      hi: [{ t: 'has recalled', cn: '現況', k: 'now', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二問：要寫出明確的過去時間嗎？是的話，切回過去簡單式。',
      hi: [{ t: '過去簡單式', k: 'past', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'T', en: 'The problem first appeared in early August.', cn: '這個問題八月初第一次出現。',
      hi: [{ t: 'appeared', cn: '八月初', k: 'past', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '第三問：是正式書面，又不想點名是誰嗎？就用 It has been 加過去分詞。',
      hi: [{ t: 'It has been', k: 'pass', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'A', en: 'It has been suggested that the launch should wait.', cn: '有人建議延後上市。',
      hi: [{ t: 'It has been suggested', cn: '不點名', k: 'pass', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說說看。看到中文情境，先自己用英文說出來，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：新聞第一句，要說工廠已經恢復生產，不提日期。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '新聞第一句，要說工廠已經恢復生產，不提日期。' } },
    { ch: 6, sp: 'A', en: 'The factory has resumed production.', cn: '工廠已經恢復生產。',
      hi: [{ t: 'has resumed', cn: '開場講現況 → 完成式', k: 'now', c: 3 }],
      vis: { type: 'speak', n: 1, show: true, sit: '新聞第一句，要說工廠已經恢復生產，不提日期。', a: 'The factory has resumed production.' } },
    { ch: 6, sp: 'N', zh: '情境二：第二句補充，生產線是星期二早上重新啟動的。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '第二句補充，生產線是星期二早上重新啟動的。' } },
    { ch: 6, sp: 'T', en: 'The lines restarted on Tuesday morning.', cn: '生產線在星期二早上重新啟動。',
      hi: [{ t: 'restarted', cn: '有明確時間 → 過去式', k: 'past', c: 4 }],
      vis: { type: 'speak', n: 2, show: true, sit: '第二句補充，生產線是星期二早上重新啟動的。', a: 'The lines restarted on Tuesday morning.' } },
    { ch: 6, sp: 'N', zh: '情境三：正式通知裡說，已經決定延後年會，不說是誰決定的。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '正式通知裡說，已經決定延後年會，不說是誰決定的。' } },
    { ch: 6, sp: 'A', en: 'It has been decided that our annual meeting will be postponed.', cn: '已決定延後我們的年會。',
      hi: [{ t: 'It has been decided', cn: '正式、不點名', k: 'pass', c: 2 }],
      vis: { type: 'speak', n: 3, show: true, sit: '正式通知裡說，已經決定延後年會，不說是誰決定的。', a: 'It has been decided that our annual meeting will be postponed.' } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結一下：講現況、講結果，用現在完成式；寫出明確時間，切回過去簡單式；正式又不點名，用 It has been 加過去分詞。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '下次動筆前，先決定讀者的鏡頭，要放在現在，還是放在當時。', vis: { type: 'end' } }
  ]
};
