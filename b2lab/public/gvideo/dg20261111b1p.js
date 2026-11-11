/* ============================================================
   B2 Read 文法影片解說 — dg20261111b1p（2026-11-11 每日文法 B1+・will be doing and will have done）
   格式與規則見 b2lab/tools/GVIDEO_SPEC.md。
   ============================================================ */
window.GVIDEO = window.GVIDEO || {};
window.GVIDEO_ART = window.GVIDEO_ART || {};

(function(){
  var D='#2b2118', A='#e8813a', C='#fdf6ec', L='#f7e3c9', R='#d9534f', B='#3b82c4', G='#3f9a62', Y='#f2c94c', S='#d6e8f8';
  var st='stroke="'+D+'" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"';
  var th=function(w){ return 'stroke="'+D+'" stroke-width="'+w+'" stroke-linejoin="round" stroke-linecap="round"'; };
  var svg=function(inner){ return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+inner+'</svg>'; };
  var txt=function(x,y,t,sz,col){ return '<text x="'+x+'" y="'+y+'" text-anchor="middle" font-family="Arial,sans-serif" font-weight="700" font-size="'+sz+'" fill="'+(col||D)+'">'+t+'</text>'; };
  var chk=function(cx,cy,r){ return '<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="'+G+'" '+st+'/><path d="M'+(cx-r*0.45)+' '+cy+' l'+(r*0.32)+' '+(r*0.34)+' l'+(r*0.6)+' -'+(r*0.7)+'" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>'; };

  Object.assign(window.GVIDEO_ART, {
    /* 核心 1：圖釘插在鐘面上——先把未來那一刻釘住 */
    dg20261111b1p_clockpin: svg(
      '<circle cx="100" cy="76" r="48" fill="#fff" '+st+'/>'
     +'<path d="M100 76 V44 M100 76 l24 14" fill="none" '+th(4)+'/>'
     +'<path d="M100 20 l12 18 h-24 Z" fill="'+A+'" '+st+'/>'
     +'<circle cx="100" cy="76" r="5" fill="'+D+'"/>'),
    /* 核心 2：轉動的齒輪——那一刻動作還在跑 */
    dg20261111b1p_gear: svg(
      '<circle cx="100" cy="74" r="36" fill="'+S+'" '+st+'/>'
     +'<circle cx="100" cy="74" r="14" fill="#fff" '+st+'/>'
     +'<g fill="'+S+'" '+st+'><rect x="92" y="18" width="16" height="16" rx="3"/><rect x="92" y="114" width="16" height="16" rx="3"/><rect x="44" y="66" width="16" height="16" rx="3"/><rect x="140" y="66" width="16" height="16" rx="3"/></g>'),
    /* 核心 3：插在終點的旗子——到那時候已經完成 */
    dg20261111b1p_flagb: svg(
      '<path d="M62 128 V22" fill="none" '+th(5)+'/>'
     +'<path d="M62 28 h74 l-14 20 l14 20 H62 Z" fill="'+A+'" '+st+'/>'
     +chk(140,104,18)),
    /* 情境 1：工廠大門與夜色 */
    dg20261111b1p_gate: svg(
      '<rect x="20" y="52" width="160" height="72" rx="5" fill="#44536b" '+st+'/>'
     +'<g '+th(3)+'><line x1="60" y1="52" x2="60" y2="124"/><line x1="100" y1="52" x2="100" y2="124"/><line x1="140" y1="52" x2="140" y2="124"/></g>'
     +'<circle cx="152" cy="28" r="14" fill="'+Y+'" '+st+'/>'),
    /* 情境 2：交接白板 */
    dg20261111b1p_board: svg(
      '<rect x="24" y="24" width="152" height="94" rx="5" fill="#fff" '+st+'/>'
     +'<g '+th(2.5)+'><line x1="44" y1="52" x2="156" y2="52"/><line x1="44" y1="74" x2="156" y2="74"/><line x1="44" y1="96" x2="120" y2="96"/></g>'
     +'<rect x="78" y="124" width="44" height="10" rx="3" fill="'+L+'" '+st+'/>'),
    /* 情境 3：壓力量表 */
    dg20261111b1p_scale: svg(
      '<circle cx="100" cy="74" r="44" fill="#fff" '+st+'/>'
     +'<path d="M62 92 a44 44 0 0 1 76 0" fill="none" stroke="'+B+'" stroke-width="6" stroke-linecap="round"/>'
     +'<path d="M100 88 l26 -30" fill="none" stroke="'+R+'" stroke-width="5" stroke-linecap="round"/>'
     +'<circle cx="100" cy="88" r="6" fill="'+D+'"/>'),
    /* 情境 4：堆好的棧板 */
    dg20261111b1p_pallet: svg(
      '<rect x="36" y="40" width="128" height="48" rx="4" fill="'+L+'" '+st+'/>'
     +'<path d="M100 40 v48" fill="none" '+th(2.5)+'/>'
     +'<rect x="28" y="96" width="144" height="12" rx="3" fill="#b98d57" '+st+'/>'
     +'<g '+th(3)+'><line x1="48" y1="108" x2="48" y2="124"/><line x1="100" y1="108" x2="100" y2="124"/><line x1="152" y1="108" x2="152" y2="124"/></g>'),
    /* 情境 5：出貨標籤 */
    dg20261111b1p_label: svg(
      '<path d="M30 60 h94 l36 30 l-36 30 H30 Z" fill="#fff" '+st+'/>'
     +'<circle cx="52" cy="90" r="7" fill="'+A+'"/>'
     +'<g '+th(2.5)+'><line x1="70" y1="80" x2="124" y2="80"/><line x1="70" y1="100" x2="112" y2="100"/></g>'),
    /* 情境 6：堆高機 */
    dg20261111b1p_forklift: svg(
      '<path d="M30 56 h56 v50 H30 Z" fill="'+Y+'" '+st+'/>'
     +'<path d="M96 24 v82 M96 98 h56" fill="none" '+th(5)+'/>'
     +'<rect x="112" y="68" width="40" height="30" rx="3" fill="'+L+'" '+st+'/>'
     +'<circle cx="46" cy="118" r="12" fill="#fff" '+st+'/>'
     +'<circle cx="78" cy="118" r="9" fill="#fff" '+st+'/>'),
    /* 情境 7：反光背心 */
    dg20261111b1p_vest: svg(
      '<path d="M70 28 l-28 14 v76 h116 V42 l-28 -14 l-30 16 Z" fill="'+Y+'" '+st+'/>'
     +'<g stroke="#fff" stroke-width="7"><line x1="60" y1="70" x2="140" y2="70"/></g>'
     +'<path d="M100 44 v74" fill="none" '+th(3)+'/>'),
    /* 情境 8：交接紀錄簿與簽名 */
    dg20261111b1p_logbook: svg(
      '<rect x="34" y="26" width="132" height="98" rx="5" fill="#fff" '+st+'/>'
     +'<path d="M34 26 h18 v98 H34 Z" fill="'+S+'" '+st+'/>'
     +'<g '+th(2.5)+'><line x1="66" y1="54" x2="148" y2="54"/><line x1="66" y1="74" x2="148" y2="74"/></g>'
     +'<path d="M66 102 q14 -14 26 0 t26 0" fill="none" stroke="'+A+'" stroke-width="4" stroke-linecap="round"/>'),
    /* 情境 9：一杯咖啡 */
    dg20261111b1p_coffee: svg(
      '<path d="M48 56 h84 l-8 62 H56 Z" fill="#fff" '+st+'/>'
     +'<path d="M132 66 q24 18 0 36" fill="none" '+th(4)+'/>'
     +'<path d="M52 72 h74" fill="none" stroke="#8a5a33" stroke-width="8"/>'
     +'<path d="M78 40 q8 -14 0 -26 M104 40 q8 -14 0 -26" fill="none" '+th(3)+'/>'),
    /* 情境 10：清晨的太陽 */
    dg20261111b1p_sun2: svg(
      '<circle cx="100" cy="84" r="30" fill="'+A+'" '+st+'/>'
     +'<g '+th(4)+'><line x1="100" y1="28" x2="100" y2="42"/><line x1="52" y1="48" x2="62" y2="58"/><line x1="148" y1="48" x2="138" y2="58"/></g>'
     +'<path d="M18 124 h164" fill="none" '+th(4)+'/>')
  });
})();

window.GVIDEO.dg20261111b1p = {
  kind: 'gram',
  date: '2026-11-11',
  title: 'will be doing and will have done',
  titleCn: '未來進行式與未來完成式',
  titleArt: ['dg20261111b1p_clockpin', 'dg20261111b1p_gear', 'dg20261111b1p_flagb'],
  scene: '夜班交接 Night shift handover',
  sceneArt: 'dg20261111b1p_gate',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Clara', voice: 'f' },
    T: { name: 'Owen', voice: 'm' }
  },
  expr: {
    prg: { t: 'will be + V-ing', cn: '未來那一刻正在進行', ex: "At six I'll be checking the first pallet.", exCn: '六點的時候我正在檢查第一板。', note: '常配 at 幾點、this time tomorrow' },
    prf: { t: 'will have + 過去分詞', cn: '到那個時間點已經完成', ex: 'By Monday the lab will have released the batch.', exCn: '到星期一實驗室就把那批放行了。', note: '幾乎一定搭一個 by' },
    pol: { t: 'Will you be + V-ing', cn: '客氣地打聽對方的安排', ex: 'Will you be taking the van at noon?', exCn: '你中午本來就會開那台廂型車嗎？', note: '是打聽，不是請求' }
  },
  chapters: [
    { cn: '開場' }, { cn: '時間線' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  timelineNow: 8,
  timeline: [
    { x: 38, art: 'dg20261111b1p_clockpin', lab: '先釘時間點', who: 'at / by' },
    { x: 62, art: 'dg20261111b1p_gear', lab: '那一刻在跑', who: 'be doing' },
    { x: 86, art: 'dg20261111b1p_flagb', lab: '之前就完成', who: 'have done' }
  ],
  flow: [
    { q: '未來那個時間點是哪一刻？', a: '先釘住', en: '先定 at / by + 時間' },
    { q: '那一刻動作還在跑嗎？', a: 'be doing', en: '主詞 + will be + V-ing' },
    { q: '到那一刻已經結束了嗎？', a: 'have done', en: '主詞 + will have + 過去分詞' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: '這兩個形狀不是比較高級的未來式。它們講的不是時間，是進度。', vis: { type: 'title' } },

    /* ---- 1 時間線 ---- */
    { ch: 1, sp: 'N', zh: '先看時間線。這兩個形狀都要你先在未來釘一個點。', vis: { type: 'timeline', show: 0 } },
    { ch: 1, sp: 'N', zh: '第一步：把那一刻釘住。沒有這個點，兩個形狀都沒地方站。',
      hi: [{ t: '把那一刻釘住', k: 'prg', c: 3 }], vis: { type: 'timeline', show: 1, pop: true } },
    { ch: 1, sp: 'A', en: 'Our deadline is ten tomorrow morning.', cn: '我們的時限是明天早上十點。',
      hi: [{ t: 'ten tomorrow morning', cn: '先釘住這一刻', k: 'prg', c: 3 }], vis: { type: 'timeline', show: 1, lit: 0 } },
    { ch: 1, sp: 'N', zh: '第二步：問那一刻動作還在跑嗎。還在跑就加 be 和 V-ing。',
      hi: [{ t: '還在跑', k: 'prg', c: 3 }], vis: { type: 'timeline', show: 2, pop: true } },
    { ch: 1, sp: 'A', en: "At six I'll be checking the first pallet.", cn: '六點的時候我正在檢查第一板。',
      hi: [{ t: "I'll be checking", cn: '那一刻正在進行', k: 'prg', c: 4 }], vis: { type: 'timeline', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: '第三步：如果動作在那一刻之前就收尾了，換成完成式。',
      hi: [{ t: '之前就收尾', k: 'prf', c: 2 }], vis: { type: 'timeline', show: 3, pop: true } },
    { ch: 1, sp: 'T', en: 'By Monday the lab will have released the batch.', cn: '到星期一實驗室就把那批放行了。',
      hi: [{ t: 'will have released', cn: '截止線之前已完成', k: 'prf', c: 2 }], vis: { type: 'timeline', show: 3, lit: 2 } },
    { ch: 1, sp: 'N', zh: '所以順序永遠是：先釘點，再問動作有沒有跨過那個點。', vis: { type: 'timeline', show: 3 } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: '進行式有三塊：will，be，再加 V-ing。be 永遠是原形。',
      hi: [{ t: 'be 永遠是原形', k: 'prg', c: 3 }],
      vis: { type: 'pattern', kick: 'will be + V-ing', rows: [
        { lab: '那一刻在做', blocks: [{ t: 'I', k: 's' }, { t: 'will be', k: 'n' }, { t: 'loading', k: 'v' }, { t: 'at two', k: 'o' }] },
        { lab: '別人在做', blocks: [{ t: 'She', k: 's' }, { t: 'will be', k: 'n' }, { t: 'training', k: 'v' }, { t: 'all morning', k: 'o' }] }
      ], note: 'will 後面的 be 不隨主詞變化' } },
    { ch: 2, sp: 'N', zh: '完成式也有三塊：will，have，再加過去分詞，前面掛一條截止線。',
      hi: [{ t: '截止線', k: 'prf', c: 2 }],
      vis: { type: 'pattern', kick: 'by + will have + p.p.', rows: [
        { lab: '截止線在前', blocks: [{ t: 'By four', k: 'o' }, { t: 'we', k: 's' }, { t: 'will have', k: 'n' }, { t: 'sealed', k: 'v' }, { t: 'every box', k: 'n' }] },
        { lab: '子句當截止線', blocks: [{ t: 'By the time you arrive', k: 'o' }, { t: 'I', k: 's' }, { t: 'will have', k: 'n' }, { t: 'left', k: 'v' }] }
      ], note: 'by the time 後面的子句用現在式' } },
    { ch: 2, sp: 'N', zh: '把進行式改成問句，語氣就從請求變成純粹打聽。',
      hi: [{ t: '純粹打聽', k: 'pol', c: 1 }],
      vis: { type: 'pattern', kick: 'Will you be …?', rows: [
        { lab: '打聽安排', blocks: [{ t: 'Will', k: 'n' }, { t: 'you', k: 's' }, { t: 'be taking', k: 'v' }, { t: 'the van', k: 'o' }] },
        { lab: '請求幫忙', blocks: [{ t: 'Will', k: 'n' }, { t: 'you', k: 's' }, { t: 'take', k: 'v' }, { t: 'the van', k: 'o' }] }
      ], note: '多了 be 和 V-ing，要求的味道就不見了' } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: '來聽 Clara 和 Owen 在夜班交接，兩個人一直在釘時間點。', vis: { type: 'scene', art: 'dg20261111b1p_gate' } },
    { ch: 3, sp: 'A', en: "Don't look for me at two. I'll be running the leak test.", cn: '兩點別找我，那時候我在跑測漏。',
      hi: [{ t: "I'll be running", cn: '那一刻正在進行', k: 'prg', c: 3 }], vis: { type: 'scene', art: 'dg20261111b1p_board' } },
    { ch: 3, sp: 'N', zh: '她先釘住兩點，再說那一刻動作還在跑，對方就知道別敲門。',
      hi: [{ t: '還在跑', k: 'prg', c: 3 }], vis: { type: 'scene', art: 'dg20261111b1p_scale' } },
    { ch: 3, sp: 'T', en: 'By four we will have packed the whole order.', cn: '到四點我們會把整張單包完。',
      hi: [{ t: 'will have packed', cn: '四點是截止線', k: 'prf', c: 2 }], vis: { type: 'scene', art: 'dg20261111b1p_pallet' } },
    { ch: 3, sp: 'N', zh: '四點是一條界線，動作在界線之前結束，所以用完成式。',
      hi: [{ t: '界線之前結束', k: 'prf', c: 2 }], vis: { type: 'scene', art: 'dg20261111b1p_label' } },
    { ch: 3, sp: 'A', en: 'Will you be taking the van at noon?', cn: '你中午本來就會開那台廂型車嗎？',
      hi: [{ t: 'Will you be taking', cn: '只是打聽', k: 'pol', c: 1 }], vis: { type: 'scene', art: 'dg20261111b1p_forklift' } },
    { ch: 3, sp: 'T', en: 'No, so take it whenever you need it.', cn: '不會，你什麼時候要用都可以。', vis: { type: 'scene', art: 'dg20261111b1p_vest' } },
    { ch: 3, sp: 'A', en: 'By the time the day shift arrives, I will have signed the log.', cn: '白班來的時候，我已經把紀錄簿簽好了。',
      hi: [{ t: 'will have signed', cn: '子句當截止線', k: 'prf', c: 2 }], vis: { type: 'scene', art: 'dg20261111b1p_logbook' } },
    { ch: 3, sp: 'T', en: "At seven I'll be drinking coffee at home.", cn: '七點的時候我在家裡喝咖啡。',
      hi: [{ t: "I'll be drinking", cn: '鏡頭停在七點', k: 'prg', c: 3 }], vis: { type: 'scene', art: 'dg20261111b1p_coffee' } },
    { ch: 3, sp: 'N', zh: '同一段對話裡，兩個形狀各做自己的事，一個給畫面一個給結果。', vis: { type: 'scene', art: 'dg20261111b1p_sun2' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '第一組：同一個動作，同一個時間，鏡頭方向不同。',
      vis: { type: 'vs', sm: true, kick: '在跑 vs 已完成',
        a: { w: 'At nine she will be counting the samples.', def: '九點的時候她正在數樣品。', cn: '那一刻還在動' },
        b: { w: 'By nine she will have counted the samples.', def: '到九點她就數完樣品了。', cn: '九點之前結束' } } },
    { ch: 4, sp: 'A', en: 'At nine she will be counting the samples.', cn: '九點的時候她正在數樣品。',
      hi: [{ t: 'will be counting', cn: '那一刻還在動', k: 'prg', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '在跑 vs 已完成',
        a: { w: 'At nine she will be counting the samples.', def: '九點的時候她正在數樣品。', cn: '那一刻還在動' },
        b: { w: 'By nine she will have counted the samples.', def: '到九點她就數完樣品了。', cn: '九點之前結束' } } },
    { ch: 4, sp: 'T', en: 'By nine she will have counted the samples.', cn: '到九點她就數完樣品了。',
      hi: [{ t: 'will have counted', cn: '九點之前結束', k: 'prf', c: 2 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '在跑 vs 已完成',
        a: { w: 'At nine she will be counting the samples.', def: '九點的時候她正在數樣品。', cn: '那一刻還在動' },
        b: { w: 'By nine she will have counted the samples.', def: '到九點她就數完樣品了。', cn: '九點之前結束' } } },
    { ch: 4, sp: 'N', zh: '請注意介系詞也跟著換：進行式配 at，完成式配 by。',
      vis: { type: 'vs', sm: true, kick: '在跑 vs 已完成',
        a: { w: 'At nine she will be counting the samples.', def: '九點的時候她正在數樣品。', cn: '那一刻還在動' },
        b: { w: 'By nine she will have counted the samples.', def: '到九點她就數完樣品了。', cn: '九點之前結束' } } },
    { ch: 4, sp: 'N', zh: '第二組是語氣。多了 be 和 V-ing，要求就變成打聽。',
      vis: { type: 'vs', sm: true, kick: '打聽 vs 請求',
        a: { w: 'Will you be closing the gate tonight?', def: '你今晚本來就會關門嗎？', cn: '只是問你的安排' },
        b: { w: 'Will you close the gate tonight?', def: '你今晚可以關門嗎？', cn: '這是在拜託你' } } },
    { ch: 4, sp: 'A', en: 'Will you be closing the gate tonight?', cn: '你今晚本來就會關門嗎？',
      hi: [{ t: 'Will you be closing', cn: '打聽安排', k: 'pol', c: 1 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '打聽 vs 請求',
        a: { w: 'Will you be closing the gate tonight?', def: '你今晚本來就會關門嗎？', cn: '只是問你的安排' },
        b: { w: 'Will you close the gate tonight?', def: '你今晚可以關門嗎？', cn: '這是在拜託你' } } },
    { ch: 4, sp: 'T', en: 'Will you close the gate tonight?', cn: '你今晚可以關門嗎？',
      vis: { type: 'vs', sm: true, on: 'b', kick: '打聽 vs 請求',
        a: { w: 'Will you be closing the gate tonight?', def: '你今晚本來就會關門嗎？', cn: '只是問你的安排' },
        b: { w: 'Will you close the gate tonight?', def: '你今晚可以關門嗎？', cn: '這是在拜託你' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '動筆之前，照順序問自己三句話。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一句：未來那個時間點是哪一刻？先把它寫下來。',
      hi: [{ t: '哪一刻', k: 'prg', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'A', en: 'The handover starts at half past five.', cn: '交接是五點半開始。',
      hi: [{ t: 'half past five', cn: '這就是那個點', k: 'prg', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二句：那一刻動作還在跑嗎？是的話用 will be 加 V-ing。',
      hi: [{ t: 'will be', k: 'prg', c: 3 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'T', en: 'This time tomorrow I will be driving to the airport.', cn: '明天這個時候我正在開車去機場。',
      hi: [{ t: 'will be driving', cn: '那一刻在路上', k: 'prg', c: 3 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '第三句：到那一刻已經結束了嗎？那就換 will have 加過去分詞。',
      hi: [{ t: 'will have', k: 'prf', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'A', en: 'By Friday the new operator will have learned both machines.', cn: '到星期五新作業員就把兩台機器都學會了。',
      hi: [{ t: 'will have learned', cn: '星期五之前完成', k: 'prf', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說。看完中文先自己講一次英文，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：朋友想約你明天八點，但那時候你正在搭火車。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '朋友想約你明天八點，但那時候你正在搭火車。' } },
    { ch: 6, sp: 'A', en: 'At eight tomorrow I will be sitting on a train.', cn: '明天八點我在火車上。',
      hi: [{ t: 'will be sitting', cn: '那一刻在跑 → be doing', k: 'prg', c: 3 }],
      vis: { type: 'speak', n: 1, show: true, sit: '朋友想約你明天八點，但那時候你正在搭火車。', a: 'At eight tomorrow I will be sitting on a train.' } },
    { ch: 6, sp: 'N', zh: '情境二：你要說到月底就把三十份報告都寄出去了。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '你要說到月底就把三十份報告都寄出去了。' } },
    { ch: 6, sp: 'T', en: 'By the end of the month I will have sent thirty reports.', cn: '到月底我就寄出三十份報告了。',
      hi: [{ t: 'will have sent', cn: '截止線之前完成 → have done', k: 'prf', c: 2 }],
      vis: { type: 'speak', n: 2, show: true, sit: '你要說到月底就把三十份報告都寄出去了。', a: 'By the end of the month I will have sent thirty reports.' } },
    { ch: 6, sp: 'N', zh: '情境三：你想客氣地問同事明天下午本來是不是要用那間倉庫。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '你想客氣地問同事明天下午本來是不是要用那間倉庫。' } },
    { ch: 6, sp: 'A', en: 'Will you be using the warehouse tomorrow afternoon?', cn: '你明天下午本來就會用那間倉庫嗎？',
      hi: [{ t: 'Will you be using', cn: '打聽安排 → Will you be', k: 'pol', c: 1 }],
      vis: { type: 'speak', n: 3, show: true, sit: '你想客氣地問同事明天下午本來是不是要用那間倉庫。', a: 'Will you be using the warehouse tomorrow afternoon?' } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結：先釘住未來那一刻，動作還在跑用 be doing，之前就結束用 have done。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '看到 by 加時間，第一個反應就該是完成式。', vis: { type: 'end' } }
  ]
};
