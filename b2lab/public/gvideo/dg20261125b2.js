/* ============================================================
   B2 Read 文法影片解說 — dg20261125b2（2026-11-25 每日文法 B2・could vs was able to 的焦點與語域）
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
  var qb=function(cx,cy){ return '<circle cx="'+cx+'" cy="'+cy+'" r="16" fill="'+A+'" '+st+'/>'+txt(cx,cy+7,'?',20,'#fff'); };
  var chk=function(cx,cy,r){ return '<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="'+G+'" '+st+'/><path d="M'+(cx-r*0.45)+' '+cy+' l'+(r*0.32)+' '+(r*0.34)+' l'+(r*0.6)+' -'+(r*0.7)+'" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>'; };

  Object.assign(window.GVIDEO_ART, {
    /* 核心卡 1：人物側寫——鏡頭對準人 */
    dg20261125b2_portrait: svg(
      '<rect x="44" y="22" width="112" height="106" rx="8" fill="#fff" '+st+'/>'
     +'<circle cx="100" cy="62" r="20" fill="#f4c9a0" '+st+'/>'
     +'<path d="M70 118 v-10 a30 30 0 0 1 60 0 v10" fill="'+B+'" '+st+'/>'
     +'<path d="M44 22 l-16 -12 M156 22 l16 -12" fill="none" '+th(3)+'/>'),
    /* 核心卡 2：成果數字——鏡頭對準結果 */
    dg20261125b2_result: svg(
      '<rect x="32" y="28" width="136" height="98" rx="8" fill="#fff" '+st+'/>'
     +'<path d="M48 108 l28 -26 l24 16 l36 -46" fill="none" stroke="'+G+'" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>'
     +'<circle cx="136" cy="52" r="8" fill="'+A+'" '+st+'/>'
     +'<path d="M48 118 h104" fill="none" '+th(3)+'/>'),
    /* 核心卡 3：正式信——壞消息 */
    dg20261125b2_letter: svg(
      '<rect x="36" y="42" width="128" height="80" rx="6" fill="'+L+'" '+st+'/>'
     +'<path d="M36 46 l64 44 l64 -44" fill="none" '+th(3)+'/>'
     +'<circle cx="152" cy="46" r="14" fill="'+R+'" '+st+'/>'
     +'<path d="M146 46 h12" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round"/>'),
    /* 情境 1：會議室長桌 */
    dg20261125b2_meeting: svg(
      '<ellipse cx="100" cy="92" rx="70" ry="26" fill="'+L+'" '+st+'/>'
     +'<g fill="#f4c9a0" stroke="'+D+'" stroke-width="3"><circle cx="54" cy="62" r="11"/><circle cx="100" cy="54" r="11"/><circle cx="146" cy="62" r="11"/></g>'
     +'<rect x="84" y="84" width="32" height="14" rx="3" fill="#fff" '+st+'/>'),
    /* 情境 2：投影片 */
    dg20261125b2_slide: svg(
      '<rect x="28" y="28" width="144" height="82" rx="5" fill="#fff" '+st+'/>'
     +'<rect x="44" y="44" width="60" height="12" rx="3" fill="'+A+'"/>'
     +'<g stroke="'+D+'" stroke-width="3" stroke-linecap="round"><line x1="44" y1="70" x2="152" y2="70"/><line x1="44" y1="88" x2="124" y2="88"/></g>'
     +'<path d="M100 110 v18" fill="none" '+th(4)+'/>'),
    /* 情境 3：履歷 */
    dg20261125b2_resume2: svg(
      '<rect x="48" y="20" width="104" height="112" rx="6" fill="#fff" '+st+'/>'
     +'<circle cx="74" cy="46" r="12" fill="'+S+'" '+st+'/>'
     +'<g stroke="'+D+'" stroke-width="3" stroke-linecap="round"><line x1="96" y1="40" x2="136" y2="40"/><line x1="96" y1="52" x2="128" y2="52"/><line x1="64" y1="76" x2="136" y2="76"/><line x1="64" y1="94" x2="136" y2="94"/><line x1="64" y1="112" x2="112" y2="112"/></g>'),
    /* 情境 4：紅筆改稿 */
    dg20261125b2_redline: svg(
      '<rect x="40" y="26" width="112" height="100" rx="6" fill="#fff" '+st+'/>'
     +'<g stroke="'+D+'" stroke-width="3" stroke-linecap="round"><line x1="58" y1="52" x2="134" y2="52"/><line x1="58" y1="92" x2="134" y2="92"/></g>'
     +'<path d="M54 72 h84" fill="none" stroke="'+R+'" stroke-width="5" stroke-linecap="round"/>'
     +'<path d="M120 112 l34 -28 l10 12 l-34 28z" fill="'+R+'" '+st+'/>'),
    /* 情境 5：橘色問號 */
    dg20261125b2_qmark: svg(
      '<rect x="38" y="36" width="124" height="80" rx="12" fill="#fff" '+st+'/>'+qb(100,76)),
    /* 情境 6：寄出的信 */
    dg20261125b2_outbox: svg(
      '<path d="M34 72 h132 v50 h-132z" fill="'+L+'" '+st+'/>'
     +'<path d="M34 72 l66 -34 l66 34" fill="#fff" '+st+'/>'
     +'<path d="M34 122 l50 -32 M166 122 l-50 -32" fill="none" '+th(3)+'/>'
     +'<path d="M100 20 v14 m-8 -6 l8 -8 l8 8" fill="none" '+th(4)+'/>'),
    /* 情境 7：日期圈起來 */
    dg20261125b2_date: svg(
      '<rect x="34" y="36" width="132" height="90" rx="8" fill="#fff" '+st+'/>'
     +'<rect x="34" y="36" width="132" height="20" rx="8" fill="'+B+'" '+st+'/>'
     +'<g fill="'+L+'"><rect x="50" y="68" width="24" height="18"/><rect x="88" y="68" width="24" height="18"/><rect x="126" y="68" width="24" height="18"/></g>'
     +'<circle cx="100" cy="104" r="14" fill="none" stroke="'+R+'" stroke-width="4"/>'),
    /* 情境 8：交棒 */
    dg20261125b2_handoff: svg(
      '<path d="M30 92 q26 -26 52 0" fill="none" '+th(5)+'/>'
     +'<path d="M118 92 q26 -26 52 0" fill="none" '+th(5)+'/>'
     +'<rect x="78" y="72" width="44" height="16" rx="8" fill="'+A+'" '+st+'/>'
     +'<path d="M100 114 v16" fill="none" '+th(4)+'/>'),
    /* 情境 9：折線圖上的兩個點 */
    dg20261125b2_graph: svg(
      '<path d="M36 124 v-96 M36 124 h132" fill="none" '+th(4)+'/>'
     +'<path d="M50 108 l34 -14 l30 -30 l36 -14" fill="none" stroke="'+B+'" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>'
     +'<circle cx="84" cy="94" r="7" fill="'+Y+'" '+st+'/>'
     +chk(150,50,11)),
    /* 情境 10：麥克風 */
    dg20261125b2_mic2: svg(
      '<rect x="84" y="22" width="32" height="54" rx="16" fill="'+D+'"/>'
     +'<path d="M68 64 a32 32 0 0 0 64 0" fill="none" '+th(4)+'/>'
     +'<path d="M100 96 v26" fill="none" '+th(4)+'/>'
     +'<path d="M76 128 h48" fill="none" '+th(5)+'/>')
  });
})();

window.GVIDEO.dg20261125b2 = {
  kind: 'gram',
  date: '2026-11-25',
  title: 'could, was able to, unable to',
  titleCn: '鏡頭對準人，還是對準結果',
  titleArt: ['dg20261125b2_portrait', 'dg20261125b2_result', 'dg20261125b2_letter'],
  scene: '會議室 In the meeting room',
  sceneArt: 'dg20261125b2_meeting',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Helen', voice: 'f' },
    T: { name: 'Marcus', voice: 'm' }
  },
  expr: {
    cap: { t: 'could', cn: '鏡頭對準人', ex: 'In that role Marcus could brief a board without notes.', exCn: '在那個職位上，Marcus不用小抄就能向董事會簡報。', note: '描述本事，沒有交代結果' },
    out: { t: 'was able to', cn: '鏡頭對準結果', ex: 'At the June review Helen was able to retire two open risks.', exCn: '六月那次審查，Helen把兩項未結風險結掉了。', note: '一次事件，最好帶一個量' },
    ref: { t: 'unable to', cn: '正式的壞消息', ex: 'We are unable to confirm the budget until the board meets.', exCn: '董事會開會之前我們無法確認預算。', note: '比 not able to 緊，時態要用現在式' }
  },
  chapters: [
    { cn: '開場' }, { cn: '三張卡' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  cards: [
    { art: 'dg20261125b2_portrait', lab: '鏡頭對準人', who: 'could' },
    { art: 'dg20261125b2_result', lab: '鏡頭對準結果', who: 'was able to' },
    { art: 'dg20261125b2_letter', lab: '正式的壞消息', who: 'unable to' }
  ],
  flow: [
    { q: '這一句要讀者看人嗎？', a: '看人', en: 'could + 原形動詞' },
    { q: '要讀者看那一次的結果？', a: '看結果', en: 'was able to + 原形動詞' },
    { q: '要正式地說不行嗎？', a: '說不行', en: 'be unable to + 原形動詞' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: '到了這一級，規則你早就背過了。今天談的是選擇：同一件事，你要讓讀者記住人，還是記住結果。', vis: { type: 'title' } },

    /* ---- 1 三張卡 ---- */
    { ch: 1, sp: 'N', zh: '三張卡，三種鏡頭。差別不在對錯，在你把焦點放哪裡。', vis: { type: 'cards', show: 0 } },
    { ch: 1, sp: 'N', zh: '第一張：鏡頭對準人。描述他當時具備什麼，用 could。',
      hi: [{ t: '鏡頭對準人', k: 'cap', c: 3 }], vis: { type: 'cards', show: 1, pop: true } },
    { ch: 1, sp: 'T', en: 'In that role Marcus could brief a board without notes.', cn: '在那個職位上，Marcus不用小抄就能向董事會簡報。',
      hi: [{ t: 'could brief', cn: '一種長期的本事', k: 'cap', c: 3 }], vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'N', zh: '第二張：鏡頭對準結果。鎖定一次事件，再補一個具體的量。',
      hi: [{ t: '鏡頭對準結果', k: 'out', c: 4 }], vis: { type: 'cards', show: 2, pop: true } },
    { ch: 1, sp: 'A', en: 'At the June review Helen was able to retire two open risks.', cn: '六月那次審查，Helen把兩項未結風險結掉了。',
      hi: [{ t: 'was able to retire', cn: '一次事件，有數字', k: 'out', c: 4 }], vis: { type: 'cards', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: '第三張是語域：正式信件裡要說不行，用 unable to。',
      hi: [{ t: '正式信件', k: 'ref', c: 2 }], vis: { type: 'cards', show: 3, pop: true } },
    { ch: 1, sp: 'A', en: 'We are unable to confirm the budget until the board meets.', cn: '董事會開會之前我們無法確認預算。',
      hi: [{ t: 'are unable to confirm', cn: '客觀限制，不是我不要', k: 'ref', c: 2 }], vis: { type: 'cards', show: 3, lit: 2 } },
    { ch: 1, sp: 'N', zh: '三張卡換的是焦點與語域，不是文法對錯。', vis: { type: 'cards', show: 3 } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: '先看最常用的兩種收尾：描述本事，和報告結果。',
      hi: [{ t: '報告結果', k: 'out', c: 4 }],
      vis: { type: 'pattern', kick: '本事 vs 結果', rows: [
        { lab: '本事', blocks: [{ t: 'She', k: 's' }, { t: 'could', k: 'n' }, { t: 'chair', k: 'v' }, { t: 'any review', k: 'o' }] },
        { lab: '結果', blocks: [{ t: 'She', k: 's' }, { t: 'was able to', k: 'n' }, { t: 'chair', k: 'v' }, { t: 'the April review', k: 'o' }] }
      ], note: '結果那一列有一個具體的事件' } },
    { ch: 2, sp: 'N', zh: '要寫壞消息，請用現在式的 unable to，不要寫成過去式。',
      hi: [{ t: '不要寫成過去式', k: 'ref', c: 2 }],
      vis: { type: 'pattern', kick: '正式拒絕', rows: [
        { lab: '現在還不行', blocks: [{ t: 'We', k: 's' }, { t: 'are unable to', k: 'n' }, { t: 'approve', k: 'v' }, { t: 'the change', k: 'o' }] },
        { lab: '條件成立就行', blocks: [{ t: 'We', k: 's' }, { t: 'would be able to', k: 'n' }, { t: 'approve', k: 'v' }, { t: 'it next week', k: 'o' }] }
      ], note: 'would be able to 搭條件句' } },
    { ch: 2, sp: 'N', zh: '同一條線上還有兩個鄰居，語氣一個比一個重。',
      hi: [{ t: '語氣', k: 'cap', c: 3 }],
      vis: { type: 'family', art: 'dg20261125b2_result', kick: '從中性到吃力', items: [
        { t: 'could', c: '描述本事' }, { t: 'was able to', c: '中性報告結果' },
        { t: 'managed to', c: '費了勁才做到' }, { t: 'unable to', c: '正式說不行' }
      ] } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: '來聽 Helen 和 Marcus 在會議室修一份專案回顧。', vis: { type: 'scene', art: 'dg20261125b2_meeting' } },
    { ch: 3, sp: 'A', en: 'Your draft says you could reduce the backlog. Did you?', cn: '你的草稿寫說你有辦法減少積壓。你做到了嗎？',
      hi: [{ t: 'could reduce', cn: '只講本事', k: 'cap', c: 3 }], vis: { type: 'scene', art: 'dg20261125b2_slide' } },
    { ch: 3, sp: 'T', en: 'I did. Three hundred items down to forty in one quarter.', cn: '做到了。一季內從三百件降到四十件。', vis: { type: 'scene', art: 'dg20261125b2_graph' } },
    { ch: 3, sp: 'A', en: 'Then write that you were able to clear the backlog in one quarter.', cn: '那就寫你在一季內把積壓清掉了。',
      hi: [{ t: 'were able to clear', cn: '結果加上時間', k: 'out', c: 4 }], vis: { type: 'scene', art: 'dg20261125b2_redline' } },
    { ch: 3, sp: 'N', zh: '同樣的事實，前一種寫法只給印象，後一種給了一個可以查的結果。',
      hi: [{ t: '可以查的結果', k: 'out', c: 4 }], vis: { type: 'scene', art: 'dg20261125b2_qmark' } },
    { ch: 3, sp: 'T', en: 'What about the part where the data was missing?', cn: '那資料不齊的那一段呢？', vis: { type: 'scene', art: 'dg20261125b2_resume2' } },
    { ch: 3, sp: 'A', en: 'Keep could there. The point is that nobody could check the old entries.', cn: '那裡留著 could。重點是當時沒有人查得到舊的紀錄。',
      hi: [{ t: 'nobody could check', cn: '鋪陳當時的限制', k: 'cap', c: 3 }], vis: { type: 'scene', art: 'dg20261125b2_date' } },
    { ch: 3, sp: 'T', en: 'And the reply to the client? They still want a date.', cn: '那回給客戶的信呢？他們還在要一個日期。', vis: { type: 'scene', art: 'dg20261125b2_outbox' } },
    { ch: 3, sp: 'A', en: 'Say we are unable to give a date this week, then offer Tuesday.', cn: '就說這個星期無法給日期，然後提議星期二。',
      hi: [{ t: 'are unable to give', cn: '正式但不生硬', k: 'ref', c: 2 }], vis: { type: 'scene', art: 'dg20261125b2_handoff' } },
    { ch: 3, sp: 'T', en: 'Understood. I will read the whole thing aloud once before I send it.', cn: '了解。寄出去之前我會把整份唸一遍。', vis: { type: 'scene', art: 'dg20261125b2_mic2' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '第一組是履歷裡最常見的取捨。',
      vis: { type: 'vs', sm: true, kick: '印象 vs 事實',
        a: { w: 'I could manage several audits at the same time.', def: '我有辦法同時處理好幾個稽核案。', cn: '只有印象' },
        b: { w: 'Last year I was able to close nine audits without a single overdue finding.', def: '去年我結了九個稽核案，沒有一項缺失逾期。', cn: '有事實' } } },
    { ch: 4, sp: 'T', en: 'I could manage several audits at the same time.', cn: '我有辦法同時處理好幾個稽核案。',
      hi: [{ t: 'could manage', cn: '讀者無從查證', k: 'cap', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '印象 vs 事實',
        a: { w: 'I could manage several audits at the same time.', def: '我有辦法同時處理好幾個稽核案。', cn: '只有印象' },
        b: { w: 'Last year I was able to close nine audits without a single overdue finding.', def: '去年我結了九個稽核案，沒有一項缺失逾期。', cn: '有事實' } } },
    { ch: 4, sp: 'A', en: 'Last year I was able to close nine audits without a single overdue finding.', cn: '去年我結了九個稽核案，沒有一項缺失逾期。',
      hi: [{ t: 'was able to close nine audits', cn: '時間、數量、結果', k: 'out', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '印象 vs 事實',
        a: { w: 'I could manage several audits at the same time.', def: '我有辦法同時處理好幾個稽核案。', cn: '只有印象' },
        b: { w: 'Last year I was able to close nine audits without a single overdue finding.', def: '去年我結了九個稽核案，沒有一項缺失逾期。', cn: '有事實' } } },
    { ch: 4, sp: 'N', zh: '右邊多的不是形容詞，是一個時間、一個數量，還有一句可以被反駁的事實。',
      vis: { type: 'vs', sm: true, kick: '印象 vs 事實',
        a: { w: 'I could manage several audits at the same time.', def: '我有辦法同時處理好幾個稽核案。', cn: '只有印象' },
        b: { w: 'Last year I was able to close nine audits without a single overdue finding.', def: '去年我結了九個稽核案，沒有一項缺失逾期。', cn: '有事實' } } },
    { ch: 4, sp: 'N', zh: '第二組是語域：同樣在拒絕，一句是信件，一句是口語。',
      vis: { type: 'vs', sm: true, kick: '書面 vs 口語',
        a: { w: 'We are unable to take new orders this month.', def: '這個月我們無法接新訂單。', cn: '正式書面' },
        b: { w: 'We cannot take new orders this month.', def: '這個月我們不能接新訂單。', cn: '中性直接' } } },
    { ch: 4, sp: 'A', en: 'We are unable to take new orders this month.', cn: '這個月我們無法接新訂單。',
      hi: [{ t: 'are unable to take', cn: '焦點在客觀限制', k: 'ref', c: 2 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '書面 vs 口語',
        a: { w: 'We are unable to take new orders this month.', def: '這個月我們無法接新訂單。', cn: '正式書面' },
        b: { w: 'We cannot take new orders this month.', def: '這個月我們不能接新訂單。', cn: '中性直接' } } },
    { ch: 4, sp: 'T', en: 'We cannot take new orders this month.', cn: '這個月我們不能接新訂單。',
      hi: [{ t: 'cannot take', cn: '短、直接、不失禮', k: 'cap', c: 1 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '書面 vs 口語',
        a: { w: 'We are unable to take new orders this month.', def: '這個月我們無法接新訂單。', cn: '正式書面' },
        b: { w: 'We cannot take new orders this month.', def: '這個月我們不能接新訂單。', cn: '中性直接' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '動筆之前問自己三句話，順序照這樣走。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一句：這一句要讀者看人嗎？要就用 could，鋪陳處境。',
      hi: [{ t: '鋪陳處境', k: 'cap', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'T', en: 'The spreadsheet had no version history, so we could only guess.', cn: '那份表單沒有版本紀錄，所以我們只能猜。',
      hi: [{ t: 'could only guess', cn: '先交代限制', k: 'cap', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二句：要讀者看那一次的結果嗎？要就換 was able to，並補一個量。',
      hi: [{ t: '補一個量', k: 'out', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'A', en: 'Even so, we were able to rebuild the trail from six e-mails.', cn: '即使這樣，我們還是從六封信把軌跡重建起來。',
      hi: [{ t: 'were able to rebuild', cn: '收在結果上', k: 'out', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '第三句：你要正式地說不行嗎？那就用 unable to，而且要用現在式。',
      hi: [{ t: '現在式', k: 'ref', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'T', en: 'We are unable to sign off the change without the test data.', cn: '沒有測試資料，我們無法核准這項變更。',
      hi: [{ t: 'are unable to sign off', cn: '壞消息加原因', k: 'ref', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說。看完中文先自己講一次，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：你要在自評裡寫，上一季你把客訴回覆時間縮到兩天。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '你要在自評裡寫，上一季你把客訴回覆時間縮到兩天。' } },
    { ch: 6, sp: 'A', en: 'Last quarter I was able to bring the complaint response time down to two days.', cn: '上一季我把客訴回覆時間縮短到兩天。',
      hi: [{ t: 'was able to bring', cn: '一次、有量、有結果', k: 'out', c: 4 }],
      vis: { type: 'speak', n: 1, show: true, sit: '你要在自評裡寫，上一季你把客訴回覆時間縮到兩天。', a: 'Last quarter I was able to bring the complaint response time down to two days.' } },
    { ch: 6, sp: 'N', zh: '情境二：你要描述舊系統的限制：那時候沒有人追得到序號。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '你要描述舊系統的限制：那時候沒有人追得到序號。' } },
    { ch: 6, sp: 'T', en: 'Back then nobody could trace a serial number across two plants.', cn: '那時候沒有人追得到跨兩間廠的序號。',
      hi: [{ t: 'nobody could trace', cn: '描述當時的處境', k: 'cap', c: 3 }],
      vis: { type: 'speak', n: 2, show: true, sit: '你要描述舊系統的限制：那時候沒有人追得到序號。', a: 'Back then nobody could trace a serial number across two plants.' } },
    { ch: 6, sp: 'N', zh: '情境三：你要在正式信裡說，這個星期無法提供報價。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '你要在正式信裡說，這個星期無法提供報價。' } },
    { ch: 6, sp: 'A', en: 'We are unable to issue a quotation this week, but I will send one on Monday.', cn: '我們這個星期無法出報價，但我星期一會寄出。',
      hi: [{ t: 'are unable to issue', cn: '拒絕後面接下一步', k: 'ref', c: 2 }],
      vis: { type: 'speak', n: 3, show: true, sit: '你要在正式信裡說，這個星期無法提供報價。', a: 'We are unable to issue a quotation this week, but I will send one on Monday.' } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結：看人用 could，看那一次的結果用 was able to，正式說不行用 unable to。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '下次寫成果之前先問一句：讀者讀完會記住我是誰，還是記住我交出了什麼。', vis: { type: 'end' } }
  ]
};
