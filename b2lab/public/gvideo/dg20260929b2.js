/* ============================================================
   B2 Read 文法影片解說 — dg20260929b2（Unit 16，B2）
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
  var gray=function(d){ return '<path d="'+d+'" fill="none" stroke="#c9b9a6" stroke-width="5" stroke-linecap="round"/>'; };
  /* 雪花：cx,cy 中心，r 半徑，col 顏色 */
  var snow=function(cx,cy,r,col){
    var g='<g stroke="'+col+'" stroke-width="4" stroke-linecap="round">';
    for(var i=0;i<3;i++) g+='<line x1="'+cx+'" y1="'+(cy-r)+'" x2="'+cx+'" y2="'+(cy+r)+'" transform="rotate('+(i*60)+' '+cx+' '+cy+')"/>';
    return g+'</g>'; };
  /* 紙箱 */
  var box=function(x,y,w,h){
    return '<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" fill="#d9a066" '+st+'/>'
      +'<path d="M'+(x+w/2-7)+' '+y+' V'+(y+14)+' H'+(x+w/2+7)+' V'+y+'" fill="#f0d2a8" '+th(2.5)+'/>'; };

  Object.assign(window.GVIDEO_ART, {
    /* 過程：一條拉長的時間帶＋碼錶（had been doing） */
    dg20260929b2_process: svg(
      '<circle cx="40" cy="70" r="26" fill="#fff" '+th(4)+'/><rect x="34" y="34" width="12" height="9" rx="2" fill="'+D+'"/>'
     +'<path d="M40 70 V54 M40 70 L50 76" fill="none" '+th(3.5)+'/>'
     +'<rect x="76" y="58" width="112" height="24" rx="12" fill="'+S+'" '+st+'/>'
     +'<g stroke="'+B+'" stroke-width="5" stroke-linecap="round"><line x1="92" y1="64" x2="92" y2="76"/><line x1="110" y1="64" x2="110" y2="76"/><line x1="128" y1="64" x2="128" y2="76"/><line x1="146" y1="64" x2="146" y2="76"/><line x1="164" y1="64" x2="164" y2="76"/></g>'
     +'<path d="M80 106 H184 M80 98 V114 M184 98 V114" fill="none" '+th(3)+'/>'),
    /* 結果：長條圖上最後一根被圈出來（had done） */
    dg20260929b2_result: svg(
      '<line x1="34" y1="128" x2="170" y2="128" '+th(4)+'/><line x1="34" y1="128" x2="34" y2="22" '+th(4)+'/>'
     +'<g '+st+'><rect x="48" y="96" width="22" height="32" fill="'+S+'"/><rect x="80" y="82" width="22" height="46" fill="'+S+'"/><rect x="112" y="64" width="22" height="64" fill="'+S+'"/></g>'
     +'<rect x="144" y="40" width="22" height="88" fill="'+G+'" '+st+'/>'
     +'<circle cx="155" cy="40" r="20" fill="none" stroke="'+A+'" stroke-width="5"/>'),
    /* 被動：做事的人變成虛線，只留做好的箱子（had been done） */
    dg20260929b2_passive: svg(
      '<g fill="none" stroke="#a89a8a" stroke-width="3.5" stroke-dasharray="6 6" stroke-linecap="round"><circle cx="58" cy="46" r="18"/><path d="M28 124 V100 a30 30 0 0 1 60 0 V124"/></g>'
     +box(108,72,64,54)
     +chk(160,52,18)),

    /* 情境 0：冷凍倉庫 */
    dg20260929b2_warehouse: svg(
      '<line x1="8" y1="134" x2="192" y2="134" '+st+'/>'
     +'<path d="M24 134 V62 L100 30 L176 62 V134 Z" fill="'+S+'" '+st+'/>'
     +'<rect x="70" y="80" width="60" height="54" fill="#c9c2b8" '+st+'/>'
     +'<path d="M70 94 H130 M70 108 H130 M70 122 H130" fill="none" '+th(2.5)+'/>'
     +snow(100,56,13,B)
     +'<rect x="36" y="86" width="22" height="18" fill="#fff" '+th(2.5)+'/><rect x="142" y="86" width="22" height="18" fill="#fff" '+th(2.5)+'/>'),
    /* 情境 1：溫度升多久了？——溫度計＋問號 */
    dg20260929b2_thermoQ: svg(
      '<rect x="78" y="16" width="28" height="92" rx="14" fill="#fff" '+st+'/>'
     +'<circle cx="92" cy="114" r="20" fill="'+R+'" '+st+'/>'
     +'<rect x="87" y="48" width="10" height="64" fill="'+R+'"/>'
     +'<path d="M106 34 h10 M106 50 h10 M106 66 h10 M106 82 h10" fill="none" '+th(3)+'/>'
     +snow(46,60,14,B)
     +qb(160,36)),
    /* 情境 2：從週末就一點一點往上爬——上升折線圖 */
    dg20260929b2_graph: svg(
      '<rect x="24" y="16" width="152" height="118" rx="8" fill="#fff" '+st+'/>'
     +'<path d="M40 30 V118 H162" fill="none" '+th(3)+'/>'
     +'<path d="M40 104 H162 M40 82 H162 M40 60 H162" fill="none" stroke="#eadfce" stroke-width="2"/>'
     +'<path d="M46 108 L66 104 L86 98 L106 90 L126 80 L146 64 L158 46" fill="none" stroke="'+R+'" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>'
     +'<g fill="'+R+'" '+th(2)+'><circle cx="66" cy="104" r="4"/><circle cx="106" cy="90" r="4"/><circle cx="146" cy="64" r="4"/></g>'
     +'<path d="M150 42 L160 40 L160 50" fill="none" stroke="'+R+'" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>'),
    /* 情境 3：怎麼沒人發現？——放大鏡照著紀錄表 */
    dg20260929b2_magnifier: svg(
      '<rect x="30" y="20" width="90" height="112" rx="6" fill="#fff" '+st+'/>'
     +gray('M44 40 H106 M44 56 H106 M44 72 H100 M44 88 H106 M44 104 H96')
     +'<circle cx="122" cy="80" r="30" fill="'+S+'" fill-opacity=".55" '+th(5)+'/>'
     +'<path d="M106 80 H138" stroke="'+R+'" stroke-width="5" stroke-linecap="round"/>'
     +'<line x1="144" y1="102" x2="172" y2="130" stroke="'+D+'" stroke-width="12" stroke-linecap="round"/>'
     +'<line x1="144" y1="102" x2="172" y2="130" stroke="#8a5a3c" stroke-width="6" stroke-linecap="round"/>'),
    /* 情境 4：那客戶的信呢？——信封＋問號 */
    dg20260929b2_envelopeQ: svg(
      '<rect x="26" y="44" width="120" height="82" rx="6" fill="#fff" '+st+'/>'
     +'<path d="M26 50 L86 92 L146 50" fill="none" '+st+'/>'
     +'<path d="M26 122 L70 84 M146 122 L102 84" fill="none" '+th(2.5)+'/>'
     +'<circle cx="86" cy="96" r="9" fill="'+R+'" '+th(2.5)+'/>'
     +qb(166,36)),
    /* 情境 5：四十箱都換新了——一疊紙箱＋打勾 */
    dg20260929b2_boxes: svg(
      '<line x1="10" y1="134" x2="190" y2="134" '+st+'/>'
     +box(30,94,52,40)+box(84,94,52,40)+box(56,54,52,40)
     +chk(160,96,22)),
    /* 情境 6：對外語氣收斂——盾牌＋打勾 */
    dg20260929b2_shield: svg(
      '<path d="M100 16 L152 34 V72 C152 104 128 124 100 136 C72 124 48 104 48 72 V34 Z" fill="'+B+'" '+st+'/>'
     +'<path d="M100 30 L140 44 V72 C140 96 122 112 100 122 Z" fill="#6aa3da"/>'
     +'<path d="M100 16 L152 34 V72 C152 104 128 124 100 136 C72 124 48 104 48 72 V34 Z" fill="none" '+st+'/>'
     +'<path d="M78 74 l14 15 l30 -32" fill="none" stroke="#fff" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>'),
    /* 情境 7：壓縮機壞過兩次要提嗎？——室外機＋問號 */
    dg20260929b2_compressorQ: svg(
      '<rect x="24" y="44" width="122" height="84" rx="8" fill="#c9c2b8" '+st+'/>'
     +'<circle cx="70" cy="86" r="30" fill="#fff" '+st+'/>'
     +'<path d="M70 86 C70 70 80 62 86 66 C86 76 78 82 70 86 C84 86 92 96 88 102 C78 102 72 94 70 86 C70 100 60 108 54 104 C54 94 62 88 70 86 C56 86 48 76 52 70 C62 70 68 78 70 86 Z" fill="'+S+'" '+th(2.5)+'/>'
     +'<path d="M114 64 H134 M114 76 H134 M114 88 H134 M114 100 H134" fill="none" '+th(3)+'/>'
     +'<path d="M40 128 V138 M130 128 V138" '+th(4)+'/>'
     +qb(166,34)),
    /* 情境 8：內部要寫、對外給數字——兩份文件 */
    dg20260929b2_twoDocs: svg(
      '<rect x="18" y="22" width="76" height="104" rx="5" fill="#fff" '+st+'/>'
     +gray('M30 46 H82 M30 60 H82 M30 74 H78 M30 88 H82 M30 102 H74')
     +'<rect x="30" y="28" width="38" height="12" rx="3" fill="'+R+'"/>'
     +'<rect x="106" y="22" width="76" height="104" rx="5" fill="#fff" '+st+'/>'
     +gray('M118 46 H170 M118 60 H158')
     +'<rect x="118" y="28" width="38" height="12" rx="3" fill="'+B+'"/>'
     +txt(144,104,'40',26,G)),
    /* 情境 9：次數用結果式——扳手＋×2 */
    dg20260929b2_tally: svg(
      '<line x1="44" y1="128" x2="100" y2="72" stroke="'+D+'" stroke-width="20" stroke-linecap="round"/>'
     +'<line x1="44" y1="128" x2="100" y2="72" stroke="#c9c2b8" stroke-width="13" stroke-linecap="round"/>'
     +'<circle cx="110" cy="60" r="24" fill="#c9c2b8" '+st+'/>'
     +'<path d="M112 30 L140 58 L128 70 L104 46 Z" fill="#fff" '+th(3)+'/>'
     +'<circle cx="110" cy="60" r="24" fill="none" '+st+'/>'
     +'<path d="M112 30 L140 58 L128 70 L104 46 Z" fill="#fff"/>'
     +'<path d="M104 46 L128 70" fill="none" '+th(3)+'/>'
     +'<circle cx="156" cy="108" r="28" fill="'+R+'" '+st+'/>'+txt(156,118,'x2',26,'#fff'))
  });
})();

/* ============================================================
   dg20260929b2 — had been doing vs had done: Cause, Duration and Tone
   Grammar in Use Unit 16（Past perfect continuous）：過程、結果與語氣
   ============================================================ */
window.GVIDEO.dg20260929b2 = {
  kind: 'gram',
  date: '2026-09-29',
  title: 'Process or Result? Choosing the Tone',
  titleCn: 'had been doing 與 had done：原因、時長與語氣怎麼選',
  titleArt: ['dg20260929b2_process', 'dg20260929b2_result', 'dg20260929b2_passive'],
  scene: '冷凍倉庫 Cold storage',
  sceneArt: 'dg20260929b2_warehouse',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Claire', voice: 'f' },
    T: { name: 'Marcus', voice: 'm' }
  },
  expr: {
    proc: { t: 'had been + V-ing', cn: '攤開過程：持續了多久', ex: 'The website had been crashing every evening since the update.', exCn: '自從更新之後，網站每天晚上都會當機。', note: '常配 for、since、all week，或 before 子句' },
    res:  { t: 'had + 過去分詞', cn: '只給結果：次數、幅度、做完了', ex: 'By March, the team had cut delivery times by a third.', exCn: '到了三月，團隊已經把交貨時間縮短三分之一。', note: 'know、own、believe 這類狀態動詞也走這一型' },
    pass: { t: 'had been + 過去分詞', cn: '被動：拿掉做事的人', ex: 'All affected customers had been contacted by Thursday.', exCn: '所有受影響的客戶在星期四前都已經聯絡過了。', note: '對外信件、新聞稿最常用' }
  },
  chapters: [
    { cn: '開場' }, { cn: '同一件事三種語氣' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  cardsKick: 'Same facts, three tones 同一件事三種語氣',
  cards: [
    { art: 'dg20260929b2_process', lab: '過去完成進行式', who: '攤開持續的過程' },
    { art: 'dg20260929b2_result',  lab: '過去完成式',     who: '只給結果・數字' },
    { art: 'dg20260929b2_passive', lab: '完成式被動',     who: '拿掉做事的人' }
  ],
  flow: [
    { q: '想讓讀者看見持續了多久？', a: '完成進行式', en: '主詞 + had been + V-ing' },
    { q: '要給次數、幅度或結果？',   a: '過去完成式', en: '主詞 + had + 過去分詞' },
    { q: '對外文件，不想點名是誰？', a: '完成式被動', en: '主詞 + had been + 過去分詞' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: 'had been doing 和 had done，很多時候兩個都對，差別在你想讓讀者看見什麼。', vis: { type: 'title' } },

    /* ---- 1 核心：三種語氣 ---- */
    { ch: 1, sp: 'N', zh: '同一件事有三種寫法，語氣差很多。', vis: { type: 'cards', show: 0 } },
    { ch: 1, sp: 'N', zh: '過去完成進行式，是把一段時間攤開，讓讀者看到持續了多久。',
      hi: [{ t: '過去完成進行式', k: 'proc', c: 3 }], vis: { type: 'cards', show: 1, pop: true } },
    { ch: 1, sp: 'A', en: 'The printer had been jamming for two weeks.', cn: '那台印表機已經連續兩個星期一直卡紙。',
      hi: [{ t: 'had been jamming', cn: '持續兩週', k: 'proc', c: 3 }], vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'N', zh: '改用過去完成式，重點就變成結果，常常是一個數字或次數。',
      hi: [{ t: '過去完成式', k: 'res', c: 4 }], vis: { type: 'cards', show: 2, pop: true } },
    { ch: 1, sp: 'T', en: 'By Friday, it had ruined two hundred brochures.', cn: '到星期五，它已經弄壞了兩百份型錄。',
      hi: [{ t: 'had ruined', cn: '結果・數字', k: 'res', c: 4 }], vis: { type: 'cards', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: '前一句像在問：怎麼拖了兩週沒人處理？後一句只是紀錄。',
      vis: { type: 'cards', show: 2 } },
    { ch: 1, sp: 'N', zh: '如果連是誰做的都不想點名，就改成被動：had been 加過去分詞。',
      hi: [{ t: 'had been 加過去分詞', k: 'pass', c: 2 }], vis: { type: 'cards', show: 3, pop: true } },
    { ch: 1, sp: 'A', en: 'The faulty roller had been replaced by Monday.', cn: '故障的滾輪在星期一前就已經換掉了。',
      hi: [{ t: 'had been replaced', cn: '不點名是誰', k: 'pass', c: 2 }], vis: { type: 'cards', show: 3, lit: 2 } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: '過程的句型：had been 加動詞 ing，後面常接 for、since，或 before 子句。',
      hi: [{ t: 'had been 加動詞 ing', k: 'proc', c: 3 }],
      vis: { type: 'pattern', kick: 'Process 過程', rows: [
        { lab: 'for', blocks: [{ t: 'The alarm', k: 's' }, { t: 'had been beeping', k: 'v' }, { t: 'for an hour', k: 'o' }] },
        { lab: 'before', blocks: [{ t: 'Staff', k: 's' }, { t: 'had been working', k: 'v' }, { t: 'overtime', k: 'n' }, { t: 'before the audit', k: 'o' }] }
      ], note: '時間長度本身就是重點' } },
    { ch: 2, sp: 'N', zh: '結果的句型：had 加過去分詞，後面接次數、幅度或數量。',
      hi: [{ t: 'had 加過去分詞', k: 'res', c: 4 }],
      vis: { type: 'pattern', kick: 'Result 結果', rows: [
        { lab: '次數', blocks: [{ t: 'The door sensor', k: 's' }, { t: 'had failed', k: 'v' }, { t: 'three times', k: 'o' }] },
        { lab: '幅度', blocks: [{ t: 'Energy costs', k: 's' }, { t: 'had gone up', k: 'v' }, { t: 'by 15 percent', k: 'o' }] }
      ], note: '次數、幅度、數量 → 用結果式' } },
    { ch: 2, sp: 'N', zh: 'know、own、believe 這類動詞不用進行式，就算講持續多久，也用 had 加過去分詞。',
      vis: { type: 'family', kick: 'State verbs 狀態動詞', core: 'had known · had owned', coreCn: '狀態動詞用結果式', art: 'dg20260929b2_result', items: [
        { t: 'know', cn: '知道・認識' }, { t: 'own', cn: '擁有' }, { t: 'believe', cn: '相信' }, { t: 'belong', cn: '屬於' }
      ] } },
    { ch: 2, sp: 'N', zh: '對外文件常把做事的人拿掉，改成被動：had been 加過去分詞。',
      hi: [{ t: '被動', k: 'pass', c: 2 }],
      vis: { type: 'pattern', kick: 'Passive 被動', rows: [
        { lab: '主動', blocks: [{ t: 'The team', k: 's' }, { t: 'had cleaned', k: 'v' }, { t: 'the drains', k: 'n' }] },
        { lab: '被動', blocks: [{ t: 'The drains', k: 's' }, { t: 'had been cleaned', k: 'v' }, { t: 'before the audit', k: 'o' }] }
      ], note: '被動不寫是誰做的，語氣最收斂' } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: '來聽品管經理 Claire 和倉庫主管 Marcus 討論，冷凍庫出狀況後報告怎麼寫。', vis: { type: 'scene', art: 'dg20260929b2_warehouse' } },
    { ch: 3, sp: 'A', en: 'For the internal report, how long had the temperature been rising?', cn: '內部報告要寫：溫度已經上升多久了？',
      hi: [{ t: 'had the temperature been rising', cn: '問持續多久', k: 'proc', c: 3 }], vis: { type: 'scene', art: 'dg20260929b2_thermoQ' } },
    { ch: 3, sp: 'T', en: 'It had been creeping up since the weekend, but nobody had checked the log.', cn: '從週末就一點一點往上升，可是都沒有人看紀錄。',
      hi: [{ t: 'had been creeping up', cn: '攤開過程', k: 'proc', c: 3 }], vis: { type: 'scene', art: 'dg20260929b2_graph' } },
    { ch: 3, sp: 'N', zh: '內部報告要讓時間長度說話，所以用 had been creeping up，讀的人會問：怎麼沒人發現？',
      hi: [{ t: 'had been creeping up', k: 'proc', c: 3 }], vis: { type: 'scene', art: 'dg20260929b2_magnifier' } },
    { ch: 3, sp: 'A', en: 'And what about the customer email?', cn: '那寄給客戶的信呢？', vis: { type: 'scene', art: 'dg20260929b2_envelopeQ' } },
    { ch: 3, sp: 'T', en: 'Just say forty cartons had been affected and replaced.', cn: '只要說有四十箱受到影響，而且都已經換新了。',
      hi: [{ t: 'had been affected', cn: '被動・只給結果', k: 'pass', c: 2 }], vis: { type: 'scene', art: 'dg20260929b2_boxes' } },
    { ch: 3, sp: 'N', zh: '對外只交代結果，再用被動拿掉做事的人，語氣就收斂了。',
      hi: [{ t: '被動', k: 'pass', c: 2 }], vis: { type: 'scene', art: 'dg20260929b2_shield' } },
    { ch: 3, sp: 'A', en: 'Should we mention that the compressor had failed twice before?', cn: '要不要提壓縮機之前就壞過兩次？',
      hi: [{ t: 'had failed twice', cn: '次數', k: 'res', c: 4 }], vis: { type: 'scene', art: 'dg20260929b2_compressorQ' } },
    { ch: 3, sp: 'T', en: 'In our report, yes. For the client, the numbers are enough.', cn: '內部報告要寫。給客戶的話，數字就夠了。',
      vis: { type: 'scene', art: 'dg20260929b2_twoDocs' } },
    { ch: 3, sp: 'N', zh: '壞了幾次是次數，用 had failed 這種結果式。',
      hi: [{ t: 'had failed', k: 'res', c: 4 }], vis: { type: 'scene', art: 'dg20260929b2_tally' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '同一組評分，換一個形狀，讀者看到的重點就不一樣。',
      vis: { type: 'vs', sm: true, kick: '趨勢 vs 數字',
        a: { w: 'Our ratings had been sliding since spring.', def: '我們的評分從春天就一路下滑。', cn: '攤開過程 → 看到趨勢' },
        b: { w: 'Our ratings had fallen to three stars.', def: '我們的評分已經掉到三顆星。', cn: '只給結果 → 看到數字' } } },
    { ch: 4, sp: 'A', en: 'Our ratings had been sliding since spring.', cn: '我們的評分從春天就一路下滑。',
      hi: [{ t: 'had been sliding', cn: '趨勢', k: 'proc', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '趨勢 vs 數字',
        a: { w: 'Our ratings had been sliding since spring.', def: '我們的評分從春天就一路下滑。', cn: '攤開過程 → 看到趨勢' },
        b: { w: 'Our ratings had fallen to three stars.', def: '我們的評分已經掉到三顆星。', cn: '只給結果 → 看到數字' } } },
    { ch: 4, sp: 'T', en: 'Our ratings had fallen to three stars.', cn: '我們的評分已經掉到三顆星。',
      hi: [{ t: 'had fallen', cn: '數字', k: 'res', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '趨勢 vs 數字',
        a: { w: 'Our ratings had been sliding since spring.', def: '我們的評分從春天就一路下滑。', cn: '攤開過程 → 看到趨勢' },
        b: { w: 'Our ratings had fallen to three stars.', def: '我們的評分已經掉到三顆星。', cn: '只給結果 → 看到數字' } } },
    { ch: 4, sp: 'N', zh: '第一句讓人看見一段下滑的過程；第二句只給一個落點，三顆星。',
      vis: { type: 'vs', sm: true, kick: '趨勢 vs 數字',
        a: { w: 'Our ratings had been sliding since spring.', def: '我們的評分從春天就一路下滑。', cn: '攤開過程 → 看到趨勢' },
        b: { w: 'Our ratings had fallen to three stars.', def: '我們的評分已經掉到三顆星。', cn: '只給結果 → 看到數字' } } },
    { ch: 4, sp: 'N', zh: '再看一組。主動加過程，責任很重；被動加結果，語氣就收斂了。',
      vis: { type: 'vs', sm: true, kick: '點名 vs 不點名',
        a: { w: 'The night shift had been ignoring the alarm.', def: '夜班一直沒理會警報。', cn: '主動＋過程 → 責任很重' },
        b: { w: 'The alarm had been switched off.', def: '警報先前已經被關掉了。', cn: '被動＋結果 → 語氣收斂' } } },
    { ch: 4, sp: 'A', en: 'The night shift had been ignoring the alarm.', cn: '夜班一直沒理會警報。',
      hi: [{ t: 'had been ignoring', cn: '點名＋過程', k: 'proc', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '點名 vs 不點名',
        a: { w: 'The night shift had been ignoring the alarm.', def: '夜班一直沒理會警報。', cn: '主動＋過程 → 責任很重' },
        b: { w: 'The alarm had been switched off.', def: '警報先前已經被關掉了。', cn: '被動＋結果 → 語氣收斂' } } },
    { ch: 4, sp: 'T', en: 'The alarm had been switched off.', cn: '警報先前已經被關掉了。',
      hi: [{ t: 'had been switched off', cn: '不點名', k: 'pass', c: 2 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '點名 vs 不點名',
        a: { w: 'The night shift had been ignoring the alarm.', def: '夜班一直沒理會警報。', cn: '主動＋過程 → 責任很重' },
        b: { w: 'The alarm had been switched off.', def: '警報先前已經被關掉了。', cn: '被動＋結果 → 語氣收斂' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '最後給你一個判斷流程。下筆之前，照順序問自己三個問題。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一問：想讓讀者看見持續多久嗎？是的話，用 had been 加 ing。',
      hi: [{ t: 'had been 加 ing', k: 'proc', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'A', en: 'Our phone lines had been ringing nonstop since the outage.', cn: '停電之後，我們的電話就一直響個不停。',
      hi: [{ t: 'had been ringing', cn: '持續', k: 'proc', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二問：要給次數、幅度或結果嗎？是的話，用 had 加過去分詞。',
      hi: [{ t: 'had 加過去分詞', k: 'res', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'T', en: 'By the evening, the outage had cost us two major orders.', cn: '到了傍晚，這次停電已經讓我們丟了兩張大訂單。',
      hi: [{ t: 'had cost', cn: '結果', k: 'res', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '第三問：這是對外文件，不想點名是誰嗎？那就用被動。',
      hi: [{ t: '被動', k: 'pass', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'A', en: 'Service had been restored by six p.m.', cn: '服務在晚上六點前已經恢復了。',
      hi: [{ t: 'had been restored', cn: '不點名', k: 'pass', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說說看。看到中文情境，先自己用英文說出來，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：寫內部報告，強調輸送帶已經連續三週發出怪聲。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '寫內部報告，強調輸送帶已經連續三週發出怪聲。' } },
    { ch: 6, sp: 'T', en: 'The conveyor had been making a strange noise for three weeks.', cn: '輸送帶已經連續三個星期發出怪聲。',
      hi: [{ t: 'had been making', cn: '強調時長 → 過程', k: 'proc', c: 3 }],
      vis: { type: 'speak', n: 1, show: true, sit: '寫內部報告，強調輸送帶已經連續三週發出怪聲。', a: 'The conveyor had been making a strange noise for three weeks.' } },
    { ch: 6, sp: 'N', zh: '情境二：會議紀錄只寫結果：到星期五，已經處理完八十件退貨。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '會議紀錄只寫結果：到星期五，已經處理完八十件退貨。' } },
    { ch: 6, sp: 'A', en: 'By Friday, we had processed eighty returns.', cn: '到星期五，我們已經處理完八十件退貨。',
      hi: [{ t: 'had processed', cn: '數量 → 結果', k: 'res', c: 4 }],
      vis: { type: 'speak', n: 2, show: true, sit: '會議紀錄只寫結果：到星期五，已經處理完八十件退貨。', a: 'By Friday, we had processed eighty returns.' } },
    { ch: 6, sp: 'N', zh: '情境三：寫給客戶，不點名是誰：帳單錯誤在發票寄出前就修正了。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '寫給客戶，不點名是誰：帳單錯誤在發票寄出前就修正了。' } },
    { ch: 6, sp: 'T', en: 'The billing error had been fixed before the invoices went out.', cn: '帳單錯誤在發票寄出前就已經修正了。',
      hi: [{ t: 'had been fixed', cn: '不點名 → 被動', k: 'pass', c: 2 }],
      vis: { type: 'speak', n: 3, show: true, sit: '寫給客戶，不點名是誰：帳單錯誤在發票寄出前就修正了。', a: 'The billing error had been fixed before the invoices went out.' } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結：要看見時長，用 had been 加 ing；要給結果、次數，用 had 加過去分詞；對外不點名，用被動。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '下次寫報告之前，先問一句：我要讀者看見的，是過程還是結果？', vis: { type: 'end' } }
  ]
};
