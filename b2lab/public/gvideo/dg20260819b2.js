/* ============================================================
   B2 Read 文法影片解說 — dg20260819b2（Grammar in Use Unit 2，B2）
   格式見 b2lab/tools/GVIDEO_SPEC.md；範本 gvideo/dg20261014b1.js。
   核心圖用 cards：歷史現在式／泛稱 you／緩和語氣。
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
  var SK='#f6d2b0', GR='#9aa3ad', NV='#33405c';
  /* 齒輪：中心、半徑、齒數、顏色 */
  var gear=function(cx,cy,r,n,fill){
    var g='';
    for(var i=0;i<n;i++){ var a=360/n*i; g+='<rect x="'+(cx-6)+'" y="'+(cy-r-9)+'" width="12" height="14" rx="2" fill="'+fill+'" '+st+' transform="rotate('+a+' '+cx+' '+cy+')"/>'; }
    return g+'<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="'+fill+'" '+st+'/><circle cx="'+cx+'" cy="'+cy+'" r="'+(r*0.35)+'" fill="#fff" '+st+'/>'; };
  /* 文件：左上角、寬、高 */
  var doc=function(x,y,w,h){ return '<path d="M'+x+' '+y+' H'+(x+w-18)+' L'+(x+w)+' '+(y+18)+' V'+(y+h)+' H'+x+' Z" fill="#fff" '+st+'/><path d="M'+(x+w-18)+' '+y+' V'+(y+18)+' H'+(x+w)+'" fill="'+L+'" '+st+'/>'; };

  Object.assign(window.GVIDEO_ART, {
    /* 卡 1：歷史現在式——對話框裡的播放鍵（故事像正在播放） */
    dg20260819b2_story: svg(
      '<path d="M30 20 H150 a16 16 0 0 1 16 16 V92 a16 16 0 0 1 -16 16 H76 L50 132 V108 H30 a16 16 0 0 1 -16 -16 V36 a16 16 0 0 1 16 -16 Z" fill="'+L+'" '+st+'/>'
     +'<circle cx="90" cy="64" r="30" fill="'+B+'" '+st+'/><path d="M80 48 L106 64 L80 80 Z" fill="#fff" '+th(2.5)+'/>'
     +'<path d="M176 40 l14 -8 M180 64 h16 M176 88 l14 8" '+th(3.5)+'/>'),
    /* 卡 2：泛稱 you——步驟清單 1 2 3 */
    dg20260819b2_steps: svg(
      '<rect x="40" y="18" width="120" height="122" rx="8" fill="'+C+'" '+st+'/>'
     +'<rect x="74" y="10" width="52" height="18" rx="5" fill="'+GR+'" '+st+'/>'
     +'<circle cx="64" cy="54" r="11" fill="'+G+'" '+th(2.5)+'/>'+txt(64,59,'1',13,'#fff')
     +'<circle cx="64" cy="84" r="11" fill="'+G+'" '+th(2.5)+'/>'+txt(64,89,'2',13,'#fff')
     +'<circle cx="64" cy="114" r="11" fill="'+G+'" '+th(2.5)+'/>'+txt(64,119,'3',13,'#fff')
     +'<path d="M84 54 H142 M84 84 H134 M84 114 H140" '+th(5)+'/>'),
    /* 卡 3：緩和語氣——天平 */
    dg20260819b2_scale: svg(
      '<line x1="100" y1="30" x2="100" y2="126" '+th(5)+'/>'
     +'<path d="M70 132 H130 L120 122 H80 Z" fill="'+A+'" '+st+'/>'
     +'<circle cx="100" cy="26" r="7" fill="'+Y+'" '+st+'/>'
     +'<line x1="36" y1="44" x2="164" y2="44" '+th(5)+'/>'
     +'<path d="M44 44 L24 90 M44 44 L64 90 M156 44 L136 90 M156 44 L176 90" '+th(2.5)+'/>'
     +'<path d="M18 90 H70 a26 14 0 0 1 -52 0 Z" fill="'+S+'" '+st+'/><path d="M130 90 H182 a26 14 0 0 1 -52 0 Z" fill="'+S+'" '+st+'/>'),

    /* 情境 1：茶水間——咖啡機＋兩杯咖啡 */
    dg20260819b2_pantry: svg(
      '<line x1="8" y1="132" x2="192" y2="132" '+st+'/>'
     +'<rect x="22" y="22" width="70" height="110" rx="8" fill="'+GR+'" '+st+'/>'
     +'<rect x="32" y="32" width="50" height="26" rx="4" fill="'+NV+'" '+st+'/><circle cx="46" cy="45" r="4" fill="'+G+'"/><circle cx="60" cy="45" r="4" fill="'+Y+'"/>'
     +'<rect x="44" y="64" width="26" height="10" rx="2" fill="'+D+'"/>'
     +'<rect x="44" y="96" width="26" height="28" rx="4" fill="#fff" '+st+'/>'
     +'<path d="M112 96 H146 L142 132 H116 Z" fill="'+R+'" '+st+'/><path d="M146 104 a8 8 0 0 1 0 16" fill="none" '+th(3.5)+'/>'
     +'<path d="M156 100 H188 L184 132 H160 Z" fill="'+B+'" '+st+'/>'
     +'<path d="M122 86 q-5 -8 0 -16 M136 86 q-5 -8 0 -16 M168 90 q-5 -8 0 -16" fill="none" '+th(2.5)+'/>'),
    /* 情境 2：大廳整個是暗的——窗戶全黑的辦公大樓 */
    dg20260819b2_dark: svg(
      '<line x1="8" y1="136" x2="192" y2="136" '+st+'/>'
     +'<rect x="50" y="16" width="100" height="120" fill="'+GR+'" '+st+'/>'
     +[30,54,78].map(function(y){ return '<rect x="62" y="'+y+'" width="20" height="16" fill="'+NV+'" '+th(2.5)+'/><rect x="90" y="'+y+'" width="20" height="16" fill="'+NV+'" '+th(2.5)+'/><rect x="118" y="'+y+'" width="20" height="16" fill="'+NV+'" '+th(2.5)+'/>'; }).join('')
     +'<rect x="80" y="104" width="40" height="32" fill="'+NV+'" '+st+'/><line x1="100" y1="104" x2="100" y2="136" '+th(2.5)+'/>'
     +'<path d="M166 30 a16 16 0 1 0 14 26 a12 12 0 1 1 -14 -26 Z" fill="'+Y+'" '+st+'/>'),
    /* 情境 3：然後呢？——驚訝的臉＋問號 */
    dg20260819b2_wow: svg(
      '<circle cx="90" cy="80" r="48" fill="'+SK+'" '+st+'/>'
     +'<path d="M44 70 C46 40 70 28 92 30 C116 30 136 46 136 70 C120 56 100 50 80 52 C66 54 54 60 44 70 Z" fill="#3a2a20" '+st+'/>'
     +'<circle cx="72" cy="80" r="6" fill="#fff" '+th(2.5)+'/><circle cx="108" cy="80" r="6" fill="#fff" '+th(2.5)+'/>'
     +'<circle cx="72" cy="80" r="2.5" fill="'+D+'"/><circle cx="108" cy="80" r="2.5" fill="'+D+'"/>'
     +'<path d="M64 66 q8 -6 16 0 M100 66 q8 -6 16 0" fill="none" '+th(2.5)+'/>'
     +'<ellipse cx="90" cy="106" rx="9" ry="12" fill="'+R+'" '+st+'/>'
     +qb(166,34)),
    /* 情境 4：經理拿著手電筒走出來——手電筒＋光束 */
    dg20260819b2_torch: svg(
      '<rect x="0" y="0" width="200" height="150" fill="'+NV+'" opacity=".12"/>'
     +'<path d="M96 64 L196 22 V128 L96 86 Z" fill="'+Y+'" opacity=".55"/>'
     +'<rect x="16" y="62" width="62" height="26" rx="6" fill="'+GR+'" '+st+'/>'
     +'<path d="M78 58 L98 52 V98 L78 92 Z" fill="'+R+'" '+st+'/>'
     +'<rect x="34" y="68" width="14" height="8" rx="2" fill="'+D+'"/>'
     +'<path d="M98 56 V94" stroke="#fff" stroke-width="4" stroke-linecap="round"/>'),
    /* 情境 5：聽起來像在現場——場記板 */
    dg20260819b2_live: svg(
      '<rect x="36" y="58" width="128" height="78" rx="6" fill="'+D+'" '+st+'/>'
     +'<path d="M48 76 H152 M48 96 H122 M48 116 H138" stroke="#fff" stroke-width="4" stroke-linecap="round"/>'
     +'<g transform="rotate(-14 38 54)"><rect x="36" y="34" width="128" height="22" rx="4" fill="#fff" '+st+'/>'
     +'<path d="M56 34 L70 56 M84 34 L98 56 M112 34 L126 56 M140 34 L154 56" stroke="'+D+'" stroke-width="8"/>'
     +'<rect x="36" y="34" width="128" height="22" rx="4" fill="none" '+st+'/></g>'
     +'<circle cx="38" cy="56" r="5" fill="'+R+'" '+th(2.5)+'/>'),
    /* 情境 6：計程車費怎麼報帳？——收據＋問號 */
    dg20260819b2_receipt: svg(
      '<path d="M50 16 H130 V128 l-10 8 l-10 -8 l-10 8 l-10 -8 l-10 8 l-10 -8 l-10 8 l-10 -8 Z" fill="#fff" '+st+'/>'
     +'<rect x="62" y="28" width="56" height="18" rx="4" fill="'+Y+'" '+th(2.5)+'/>'
     +'<path d="M62 62 H100 M62 76 H110 M62 90 H96" stroke="'+GR+'" stroke-width="4" stroke-linecap="round"/>'
     +'<path d="M62 110 H118" '+th(3.5)+'/>'
     +qb(164,40)),
    /* 情境 7：掃描收據再上傳——手機掃描框 */
    dg20260819b2_scan: svg(
      '<rect x="20" y="40" width="58" height="78" rx="3" fill="#fff" '+st+'/>'
     +'<path d="M30 56 H66 M30 70 H60 M30 84 H64" stroke="'+GR+'" stroke-width="4" stroke-linecap="round"/>'
     +'<rect x="104" y="14" width="74" height="124" rx="12" fill="'+D+'" '+st+'/><rect x="111" y="26" width="60" height="98" rx="4" fill="'+S+'"/>'
     +'<path d="M120 40 V34 H128 M154 34 H162 V40 M162 108 V114 H154 M128 114 H120 V108" fill="none" stroke="'+G+'" stroke-width="4" stroke-linecap="round"/>'
     +'<line x1="118" y1="74" x2="164" y2="74" stroke="'+R+'" stroke-width="3"/>'
     +'<path d="M141 66 V50 M133 58 L141 48 L149 58" fill="none" stroke="'+B+'" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>'
     +'<path d="M84 80 H98 M92 72 L100 80 L92 88" fill="none" '+th(3.5)+'/>'),
    /* 情境 8：任何人都照這個流程——兩個咬合的齒輪 */
    dg20260819b2_gears: svg(
      gear(74,82,34,9,Y)+gear(140,54,24,7,B)
     +'<path d="M150 110 a26 26 0 0 1 -30 18" fill="none" '+th(3.5)+'/><path d="M126 120 L118 129 L129 133" fill="none" '+th(3.5)+'/>'),
    /* 情境 9：書面報告——文件上的長條圖 */
    dg20260819b2_report: svg(
      doc(46,14,108,124)
     +'<path d="M60 36 H120 M60 48 H108" stroke="'+GR+'" stroke-width="4" stroke-linecap="round"/>'
     +'<line x1="62" y1="122" x2="140" y2="122" '+th(2.5)+'/>'
     +'<rect x="68" y="96" width="14" height="26" fill="'+B+'" '+th(2.5)+'/><rect x="90" y="82" width="14" height="40" fill="'+G+'" '+th(2.5)+'/><rect x="112" y="70" width="14" height="52" fill="'+A+'" '+th(2.5)+'/>'),
    /* 情境 10：結論加上 can——文件＋筆＋can */
    dg20260819b2_pen: svg(
      doc(28,16,104,122)
     +'<path d="M42 40 H104 M42 54 H112 M42 68 H96" stroke="'+GR+'" stroke-width="4" stroke-linecap="round"/>'
     +'<rect x="42" y="84" width="54" height="26" rx="6" fill="'+Y+'" '+th(2.5)+'/>'+txt(69,103,'can',18)
     +'<g transform="rotate(35 150 80)"><rect x="140" y="26" width="20" height="86" rx="4" fill="'+B+'" '+st+'/><path d="M140 112 L150 132 L160 112 Z" fill="'+L+'" '+st+'/><rect x="140" y="26" width="20" height="14" rx="4" fill="'+D+'"/></g>')
  });
})();

/* ============================================================
   dg20260819b2 — Present Simple as a Tool: Stories, Steps, Careful Claims
   Grammar in Use Unit 2（Present simple）的 B2 延伸：語域與修辭效果
   ============================================================ */
window.GVIDEO.dg20260819b2 = {
  kind: 'gram',
  date: '2026-08-19',
  title: 'Present Simple as a Tool',
  titleCn: '把現在簡單式當工具：說故事、講流程、寫結論',
  titleArt: ['dg20260819b2_story', 'dg20260819b2_steps', 'dg20260819b2_scale'],
  scene: '茶水間閒聊 Office pantry',
  sceneArt: 'dg20260819b2_pantry',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Olivia', voice: 'f' },
    T: { name: 'Daniel', voice: 'm' }
  },
  expr: {
    hist:  { t: 'So I walk in…', cn: '說過去的故事用現在式 → 歷史現在式', ex: 'So the waiter comes over and drops the whole tray.', exCn: '結果服務生走過來，整個托盤都掉了。', note: '口語故事、紀錄片旁白才用；正式報告用過去式' },
    you:   { t: 'You + V, then you + V', cn: '泛稱 you → 任何人都這樣做', ex: 'You rinse the rice twice, then you let it soak.', exCn: '米先洗兩次，再泡一下。', note: '正式的說明書通常改用祈使句' },
    hedge: { t: 'tend to / can / may', cn: '加緩和詞 → 結論不說死', ex: 'Short breaks can improve concentration.', exCn: '短暫休息可能有助於專注。', note: 'often、generally、in most cases 也很常用' }
  },
  chapters: [
    { cn: '開場' }, { cn: '三種修辭用法' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  cardsKick: 'Stories, steps, claims 故事・步驟・結論',
  cards: [
    { art: 'dg20260819b2_story', lab: '歷史現在式', who: '說故事有臨場感' },
    { art: 'dg20260819b2_steps', lab: '泛稱 you',   who: '講流程・指任何人' },
    { art: 'dg20260819b2_scale', lab: '緩和語氣',   who: '正式結論不說死' }
  ],
  flow: [
    { q: '在講過去的故事、想要臨場感？', a: '歷史現在式', en: 'So + 主詞 + V(s)…' },
    { q: '在說明步驟、指的是任何人？',   a: '泛稱 you',   en: 'You + V, then you + V' },
    { q: '在寫正式結論、怕說得太滿？',   a: '加緩和詞',   en: 'tend to / can / may + V' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: '到了 B2，現在簡單式也是一種表達技巧。來看它在故事、說明和正式寫作裡怎麼用。', vis: { type: 'title' } },

    /* ---- 1 核心：三種修辭用法 ---- */
    { ch: 1, sp: 'N', zh: '先看這三張卡，每張都是借現在簡單式做一件事。', vis: { type: 'cards', show: 0 } },
    { ch: 1, sp: 'N', zh: '第一張是歷史現在式。講過去的事卻用現在式，聽起來就像在眼前發生。',
      hi: [{ t: '歷史現在式', k: 'hist', c: 3 }], vis: { type: 'cards', show: 1, pop: true } },
    { ch: 1, sp: 'A', en: 'So my neighbor knocks on my door at midnight and asks for sugar.', cn: '結果我鄰居半夜來敲門，跟我借糖。',
      hi: [{ t: 'knocks', cn: '過去的事用現在式', k: 'hist', c: 3 }], vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'N', zh: '第二張是泛稱 you。說明步驟時，這個 you 指的是任何人。',
      hi: [{ t: '泛稱 you', k: 'you', c: 4 }], vis: { type: 'cards', show: 2, pop: true } },
    { ch: 1, sp: 'T', en: 'You soak the beans overnight, then you boil them for an hour.', cn: '豆子先泡一個晚上，再煮一個小時。',
      hi: [{ t: 'You soak', cn: '任何人都這樣做', k: 'you', c: 4 }], vis: { type: 'cards', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: '第三張是緩和語氣。正式寫作下結論時，加上 tend to 或 can，就不會把話說死。',
      hi: [{ t: '緩和語氣', k: 'hedge', c: 2 }], vis: { type: 'cards', show: 3, pop: true } },
    { ch: 1, sp: 'A', en: 'Small teams tend to make decisions faster.', cn: '小團隊往往比較快做出決定。',
      hi: [{ t: 'tend to make', cn: '留一點例外空間', k: 'hedge', c: 2 }], vis: { type: 'cards', show: 3, lit: 2 } },
    { ch: 1, sp: 'N', zh: '注意：歷史現在式只適合口語和故事，正式報告還是用過去式。',
      vis: { type: 'cards', show: 3 } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: '歷史現在式常用 So 開頭，後面的動詞整段都用現在式。',
      hi: [{ t: '歷史現在式', k: 'hist', c: 3 }],
      vis: { type: 'pattern', kick: 'Historical present 歷史現在式', rows: [
        { lab: '一般敘述', blocks: [{ t: 'I', k: 's' }, { t: 'opened', k: 'v' }, { t: 'the box', k: 'n' }, { t: 'and it was empty', k: 'o' }] },
        { lab: '說故事', blocks: [{ t: 'So I', k: 's' }, { t: 'open', k: 'v', add: true }, { t: 'the box', k: 'n' }, { t: "and it's empty", k: 'o', add: true }] }
      ], note: '過去的事、現在的動詞；不要中途跳回過去式' } },
    { ch: 2, sp: 'N', zh: '泛稱 you 是口語版；正式說明書通常用祈使句，省掉 you。',
      hi: [{ t: '泛稱 you', k: 'you', c: 4 }],
      vis: { type: 'pattern', kick: 'Generic you 泛稱 you', rows: [
        { lab: '口語版', blocks: [{ t: 'You', k: 's' }, { t: 'press', k: 'v' }, { t: 'the red button', k: 'o' }] },
        { lab: '正式版', blocks: [{ t: 'Press', k: 'v' }, { t: 'the red button', k: 'o' }] }
      ], note: '同一段說明選一種，語氣才一致' } },
    { ch: 2, sp: 'N', zh: '緩和語氣有三個層次：直接斷言最強，加 tend to 留點空間，用 can 最保守。',
      hi: [{ t: '緩和語氣', k: 'hedge', c: 2 }],
      vis: { type: 'pattern', kick: 'Hedging 緩和語氣', rows: [
        { lab: '斷言', blocks: [{ t: 'Online classes', k: 's' }, { t: 'save', k: 'v' }, { t: 'time', k: 'o' }] },
        { lab: '緩和', blocks: [{ t: 'Online classes', k: 's' }, { t: 'tend to save', k: 'v', add: true }, { t: 'time', k: 'o' }] },
        { lab: '更保守', blocks: [{ t: 'Online classes', k: 's' }, { t: 'can save', k: 'v', add: true }, { t: 'time', k: 'o' }] }
      ] } },
    { ch: 2, sp: 'N', zh: '常用的緩和詞就這幾組，寫報告時挑一個放進結論。',
      vis: { type: 'family', kick: 'Hedging words 緩和詞', core: 'Hedging', coreCn: '讓結論站得住腳', art: 'dg20260819b2_scale', items: [
        { t: 'tend to', cn: '往往、傾向' }, { t: 'can · may', cn: '可能' }, { t: 'often · generally', cn: '常常・一般來說' }, { t: 'in most cases', cn: '大多數情況' }
      ] } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: '開完會，Daniel 在茶水間跟 Olivia 說昨天拜訪客戶的事。注意他怎麼講故事。', vis: { type: 'scene', art: 'dg20260819b2_pantry' } },
    { ch: 3, sp: 'T', en: "So I get to the client's office, and the lobby is completely dark.", cn: '結果我一到客戶的辦公室，大廳整個是暗的。',
      hi: [{ t: 'I get', cn: '昨天的事', k: 'hist', c: 3 }], vis: { type: 'scene', art: 'dg20260819b2_dark' } },
    { ch: 3, sp: 'A', en: 'No way. What happens next?', cn: '不會吧，然後呢？',
      hi: [{ t: 'What happens', cn: '跟著用現在式', k: 'hist', c: 3 }], vis: { type: 'scene', art: 'dg20260819b2_wow' } },
    { ch: 3, sp: 'T', en: 'The manager walks out with a flashlight and says the power is out.', cn: '經理拿著手電筒走出來，說停電了。',
      hi: [{ t: 'walks', cn: '現在式', k: 'hist', c: 3 }, { t: 'says', cn: '現在式', k: 'hist', c: 3 }], vis: { type: 'scene', art: 'dg20260819b2_torch' } },
    { ch: 3, sp: 'N', zh: '昨天的事，Daniel 卻用 get、walks、says，像在現場一樣。這就是歷史現在式。',
      hi: [{ t: '歷史現在式', k: 'hist', c: 3 }], vis: { type: 'scene', art: 'dg20260819b2_live' } },
    { ch: 3, sp: 'A', en: 'By the way, how do you claim taxi fares?', cn: '對了，計程車費要怎麼報帳？',
      vis: { type: 'scene', art: 'dg20260819b2_receipt' } },
    { ch: 3, sp: 'T', en: 'You scan the receipt, and then you upload it to the system.', cn: '把收據掃描起來，再上傳到系統就好。',
      hi: [{ t: 'You scan', cn: '任何人', k: 'you', c: 4 }], vis: { type: 'scene', art: 'dg20260819b2_scan' } },
    { ch: 3, sp: 'N', zh: '這裡的 you 不是指 Olivia，而是任何要報帳的人，這就是泛稱 you。',
      hi: [{ t: '泛稱 you', k: 'you', c: 4 }], vis: { type: 'scene', art: 'dg20260819b2_gears' } },
    { ch: 3, sp: 'A', en: "In the report, though, let's say power cuts can delay installations.", cn: '不過報告裡，我們就寫停電可能會延誤安裝。',
      hi: [{ t: 'can delay', cn: '緩和語氣', k: 'hedge', c: 2 }], vis: { type: 'scene', art: 'dg20260819b2_report' } },
    { ch: 3, sp: 'N', zh: '寫進正式報告就收起故事口吻：發生過的事用過去式，結論加上 can。',
      hi: [{ t: 'can', k: 'hedge', c: 2 }], vis: { type: 'scene', art: 'dg20260819b2_pen' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '同一件事，寫進報告和跟同事聊，時態不一樣。',
      vis: { type: 'vs', sm: true, kick: '正式報告 vs 口語故事',
        a: { w: 'The inspector arrived at nine and checked every line.', def: '稽查員九點抵達，檢查了每一條產線。', cn: '報告 → 過去式' },
        b: { w: 'So the inspector shows up at nine and checks every line.', def: '結果稽查員九點就來了，每條產線都查。', cn: '口語故事 → 歷史現在式' } } },
    { ch: 4, sp: 'A', en: 'The inspector arrived at nine and checked every line.', cn: '稽查員九點抵達，檢查了每一條產線。',
      hi: [{ t: 'arrived', cn: '過去式', k: 'hist', c: 1 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '正式報告 vs 口語故事',
        a: { w: 'The inspector arrived at nine and checked every line.', def: '稽查員九點抵達，檢查了每一條產線。', cn: '報告 → 過去式' },
        b: { w: 'So the inspector shows up at nine and checks every line.', def: '結果稽查員九點就來了，每條產線都查。', cn: '口語故事 → 歷史現在式' } } },
    { ch: 4, sp: 'T', en: 'So the inspector shows up at nine and checks every line.', cn: '結果稽查員九點就來了，每條產線都查。',
      hi: [{ t: 'shows up', cn: '歷史現在式', k: 'hist', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '正式報告 vs 口語故事',
        a: { w: 'The inspector arrived at nine and checked every line.', def: '稽查員九點抵達，檢查了每一條產線。', cn: '報告 → 過去式' },
        b: { w: 'So the inspector shows up at nine and checks every line.', def: '結果稽查員九點就來了，每條產線都查。', cn: '口語故事 → 歷史現在式' } } },
    { ch: 4, sp: 'N', zh: '報告用過去式保持距離；聊天用現在式，故事就活起來。',
      vis: { type: 'vs', sm: true, kick: '正式報告 vs 口語故事',
        a: { w: 'The inspector arrived at nine and checked every line.', def: '稽查員九點抵達，檢查了每一條產線。', cn: '報告 → 過去式' },
        b: { w: 'So the inspector shows up at nine and checks every line.', def: '結果稽查員九點就來了，每條產線都查。', cn: '口語故事 → 歷史現在式' } } },
    { ch: 4, sp: 'N', zh: '再看一組。兩句都對，但第一句說得太滿，一個反例就被推翻。',
      vis: { type: 'vs', sm: true, kick: '說太滿 vs 留餘地',
        a: { w: 'Flexible hours improve productivity.', def: '彈性工時會提升生產力。', cn: '斷言 → 容易被挑戰' },
        b: { w: 'Flexible hours can improve productivity for many staff.', def: '彈性工時對許多員工可能有助於提升生產力。', cn: '緩和 → 站得住腳' } } },
    { ch: 4, sp: 'A', en: 'Flexible hours improve productivity.', cn: '彈性工時會提升生產力。',
      hi: [{ t: 'improve', cn: '斷言', k: 'hedge', c: 1 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '說太滿 vs 留餘地',
        a: { w: 'Flexible hours improve productivity.', def: '彈性工時會提升生產力。', cn: '斷言 → 容易被挑戰' },
        b: { w: 'Flexible hours can improve productivity for many staff.', def: '彈性工時對許多員工可能有助於提升生產力。', cn: '緩和 → 站得住腳' } } },
    { ch: 4, sp: 'T', en: 'Flexible hours can improve productivity for many staff.', cn: '彈性工時對許多員工可能有助於提升生產力。',
      hi: [{ t: 'can improve', cn: '緩和', k: 'hedge', c: 2 }, { t: 'for many staff', cn: '限定範圍', k: 'hedge', c: 2 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '說太滿 vs 留餘地',
        a: { w: 'Flexible hours improve productivity.', def: '彈性工時會提升生產力。', cn: '斷言 → 容易被挑戰' },
        b: { w: 'Flexible hours can improve productivity for many staff.', def: '彈性工時對許多員工可能有助於提升生產力。', cn: '緩和 → 站得住腳' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '最後給你一個判斷流程，照順序問三個問題。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一問：在講過去的故事，想要臨場感嗎？是的話，用歷史現在式。',
      hi: [{ t: '歷史現在式', k: 'hist', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'A', en: "So we're halfway through the presentation, and the projector dies.", cn: '結果簡報講到一半，投影機就掛了。',
      hi: [{ t: 'the projector dies', cn: '故事用現在式', k: 'hist', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二問：在說明步驟，指的是任何人嗎？是的話，用泛稱 you。',
      hi: [{ t: '泛稱 you', k: 'you', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'T', en: 'You log in, then you choose a date.', cn: '先登入，再選日期。',
      hi: [{ t: 'You log in', cn: '任何人', k: 'you', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '第三問：在寫正式結論，怕說得太滿嗎？加上 tend to、can 或 may。',
      hi: [{ t: 'tend to', k: 'hedge', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'A', en: 'Longer trials may produce more reliable results.', cn: '試驗時間拉長，結果可能比較可靠。',
      hi: [{ t: 'may produce', cn: '緩和', k: 'hedge', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說說看。看到中文情境，先自己用英文說出來，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：用說故事的口氣講，昨天你一走進電梯，老闆就在裡面。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '用說故事的口氣跟朋友講，昨天你一走進電梯，老闆就站在裡面。' } },
    { ch: 6, sp: 'T', en: 'So I step into the elevator, and my boss is standing right there.', cn: '結果我一走進電梯，老闆就站在那裡。',
      hi: [{ t: 'I step', cn: '歷史現在式', k: 'hist', c: 3 }],
      vis: { type: 'speak', n: 1, show: true, sit: '用說故事的口氣跟朋友講，昨天你一走進電梯，老闆就站在裡面。', a: 'So I step into the elevator, and my boss is standing right there.' } },
    { ch: 6, sp: 'N', zh: '情境二：教新同事請假：先在線上填表，再等主管核准。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '教新同事請假：先在線上填表，再等主管核准。' } },
    { ch: 6, sp: 'A', en: 'You fill in the form online, and then you wait for approval.', cn: '先在線上填表，然後等核准。',
      hi: [{ t: 'You fill in', cn: '泛稱 you', k: 'you', c: 4 }],
      vis: { type: 'speak', n: 2, show: true, sit: '教新同事請假：先在線上填表，再等主管核准。', a: 'You fill in the form online, and then you wait for approval.' } },
    { ch: 6, sp: 'N', zh: '情境三：報告裡要寫，網購的人往往比較喜歡免運。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '報告裡要寫，網購的人往往比較喜歡免運。' } },
    { ch: 6, sp: 'T', en: 'Online shoppers tend to prefer free delivery.', cn: '網購消費者往往偏好免運。',
      hi: [{ t: 'tend to prefer', cn: '緩和語氣', k: 'hedge', c: 2 }],
      vis: { type: 'speak', n: 3, show: true, sit: '報告裡要寫，網購的人往往比較喜歡免運。', a: 'Online shoppers tend to prefer free delivery.' } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結：說故事用歷史現在式，講流程用泛稱 you，寫結論加緩和詞；正式報告仍用過去式。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '同一個時態，換一個場合，就是不同的效果。', vis: { type: 'end' } }
  ]
};
