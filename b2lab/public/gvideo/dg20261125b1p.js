/* ============================================================
   B2 Read 文法影片解說 — dg20261125b1p（2026-11-25 每日文法 B1+・can, could and (be) able to）
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
    /* 核心卡 1：堆高機——現在的能力 */
    dg20261125b1p_forklift: svg(
      '<rect x="40" y="70" width="62" height="38" rx="5" fill="'+A+'" '+st+'/>'
     +'<path d="M102 36 v72 h34" fill="none" '+th(5)+'/>'
     +'<rect x="112" y="78" width="30" height="20" rx="3" fill="'+L+'" '+st+'/>'
     +'<g fill="#fff">'+'<circle cx="56" cy="118" r="12" stroke="'+D+'" stroke-width="3"/><circle cx="92" cy="118" r="12" stroke="'+D+'" stroke-width="3"/></g>'),
    /* 核心卡 2：證照徽章——過去的本事 */
    dg20261125b1p_badge: svg(
      '<circle cx="100" cy="66" r="38" fill="'+Y+'" '+st+'/>'
     +'<circle cx="100" cy="66" r="20" fill="#fff" '+st+'/>'
     +'<path d="M84 102 l-10 34 l26 -14 l26 14 l-10 -34" fill="'+R+'" '+st+'/>'),
    /* 核心卡 3：簽收單——那一次的結果 */
    dg20261125b1p_slip: svg(
      '<rect x="48" y="24" width="104" height="104" rx="6" fill="#fff" '+st+'/>'
     +'<g stroke="'+D+'" stroke-width="3" stroke-linecap="round"><line x1="66" y1="50" x2="134" y2="50"/><line x1="66" y1="70" x2="120" y2="70"/></g>'
     +'<path d="M66 102 q14 -16 28 0 q14 16 28 0" fill="none" stroke="'+B+'" stroke-width="4" stroke-linecap="round"/>'
     +chk(136,110,12)),
    /* 情境 1：倉庫內部 */
    dg20261125b1p_warehouse: svg(
      '<rect x="24" y="56" width="152" height="70" rx="4" fill="'+L+'" '+st+'/>'
     +'<path d="M18 56 l82 -30 l82 30" fill="'+S+'" '+st+'/>'
     +'<rect x="44" y="84" width="40" height="42" rx="3" fill="#fff" '+st+'/>'
     +'<rect x="116" y="84" width="40" height="42" rx="3" fill="#fff" '+st+'/>'),
    /* 情境 2：棧板 */
    dg20261125b1p_pallet: svg(
      '<g fill="#d9a34a" stroke="'+D+'" stroke-width="3"><rect x="30" y="98" width="140" height="10"/><rect x="30" y="116" width="140" height="10"/></g>'
     +'<g fill="#8a5a33" stroke="'+D+'" stroke-width="3"><rect x="36" y="108" width="14" height="8"/><rect x="92" y="108" width="14" height="8"/><rect x="148" y="108" width="14" height="8"/></g>'
     +'<rect x="56" y="44" width="88" height="54" rx="4" fill="'+A+'" '+st+'/>'),
    /* 情境 3：條碼掃描槍 */
    dg20261125b1p_scanner: svg(
      '<path d="M66 34 h50 v34 h-18 v56 h-32z" fill="'+D+'"/>'
     +'<rect x="120" y="40" width="48" height="24" rx="3" fill="#fff" '+st+'/>'
     +'<g stroke="'+D+'" stroke-width="3"><line x1="128" y1="44" x2="128" y2="60"/><line x1="136" y1="44" x2="136" y2="60"/><line x1="146" y1="44" x2="146" y2="60"/><line x1="156" y1="44" x2="156" y2="60"/></g>'
     +'<circle cx="82" cy="52" r="7" fill="'+R+'"/>'),
    /* 情境 4：橘色問號 */
    dg20261125b1p_qmark: svg(
      '<rect x="38" y="36" width="124" height="80" rx="12" fill="#fff" '+st+'/>'+qb(100,76)),
    /* 情境 5：高架貨架 */
    dg20261125b1p_rack: svg(
      '<g fill="none" '+th(4)+'><path d="M40 20 v112"/><path d="M160 20 v112"/><path d="M40 52 h120"/><path d="M40 86 h120"/><path d="M40 120 h120"/></g>'
     +'<rect x="52" y="28" width="38" height="22" fill="'+A+'" stroke="'+D+'" stroke-width="3"/>'
     +'<rect x="110" y="62" width="38" height="22" fill="'+S+'" stroke="'+D+'" stroke-width="3"/>'),
    /* 情境 6：盤點清單 */
    dg20261125b1p_count: svg(
      '<rect x="46" y="26" width="108" height="104" rx="6" fill="#fff" '+st+'/>'
     +'<rect x="78" y="16" width="44" height="18" rx="5" fill="'+A+'" '+st+'/>'
     +'<g stroke="'+D+'" stroke-width="3" stroke-linecap="round"><line x1="64" y1="60" x2="136" y2="60"/><line x1="64" y1="82" x2="136" y2="82"/><line x1="64" y1="104" x2="112" y2="104"/></g>'),
    /* 情境 7：卡車進站 */
    dg20261125b1p_lorry: svg(
      '<rect x="22" y="56" width="92" height="50" rx="4" fill="'+L+'" '+st+'/>'
     +'<path d="M114 72 h30 l22 20 v14 h-52z" fill="'+B+'" '+st+'/>'
     +'<g fill="#fff"><circle cx="54" cy="116" r="11" stroke="'+D+'" stroke-width="3"/><circle cx="138" cy="116" r="11" stroke="'+D+'" stroke-width="3"/></g>'),
    /* 情境 8：冷藏庫門 */
    dg20261125b1p_cold: svg(
      '<rect x="56" y="22" width="88" height="110" rx="6" fill="'+S+'" '+st+'/>'
     +'<path d="M100 22 v110" fill="none" '+th(3)+'/>'
     +'<g stroke="'+B+'" stroke-width="4" stroke-linecap="round"><path d="M78 60 v20 M70 70 h16 M72 64 l12 12 M84 64 l-12 12"/></g>'
     +'<circle cx="124" cy="78" r="6" fill="'+A+'" '+st+'/>'),
    /* 情境 9：捲尺 */
    dg20261125b1p_tape: svg(
      '<rect x="46" y="60" width="66" height="58" rx="10" fill="'+Y+'" '+st+'/>'
     +'<circle cx="79" cy="88" r="14" fill="#fff" '+st+'/>'
     +'<path d="M112 76 h50" fill="none" '+th(5)+'/>'
     +'<g stroke="'+D+'" stroke-width="3"><line x1="124" y1="70" x2="124" y2="82"/><line x1="138" y1="70" x2="138" y2="82"/><line x1="152" y1="70" x2="152" y2="82"/></g>'),
    /* 情境 10：交接簽名 */
    dg20261125b1p_sign2: svg(
      '<rect x="36" y="48" width="100" height="72" rx="5" fill="#fff" '+st+'/>'
     +'<path d="M54 98 q18 -22 36 0 q18 22 36 0" fill="none" stroke="'+B+'" stroke-width="4" stroke-linecap="round"/>'
     +'<path d="M132 44 l28 -22 l10 12 l-28 22z" fill="'+A+'" '+st+'/>'
     +'<path d="M132 44 l10 12" fill="none" '+th(3)+'/>')
  });
})();

window.GVIDEO.dg20261125b1p = {
  kind: 'gram',
  date: '2026-11-25',
  title: 'can, could and (be) able to',
  titleCn: '三個工具，一個能力',
  titleArt: ['dg20261125b1p_forklift', 'dg20261125b1p_badge', 'dg20261125b1p_slip'],
  scene: '倉庫 At the warehouse',
  sceneArt: 'dg20261125b1p_warehouse',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Grace', voice: 'f' },
    T: { name: 'Victor', voice: 'm' }
  },
  expr: {
    now: { t: 'can', cn: '現在的能力', ex: 'Grace can handle the reach truck on her own.', exCn: 'Grace可以自己操作高架堆高機。', note: '現在式的預設值，不要換成 is able to' },
    past: { t: 'could', cn: '過去的本事', ex: 'In his twenties Victor could shift a full sack with one arm.', exCn: '二十幾歲的時候，Victor單手就搬得動一整袋。', note: '一段時間的能力，沒說結果' },
    once: { t: 'was able to', cn: '那一次真的做到', ex: 'Last Thursday she was able to locate the missing pallet in forty minutes.', exCn: '上星期四她四十分鐘內就找出那塊不見的棧板。', note: '有結果，最好帶一個數字' }
  },
  chapters: [
    { cn: '開場' }, { cn: '三張卡' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  cards: [
    { art: 'dg20261125b1p_forklift', lab: '現在的能力', who: 'can' },
    { art: 'dg20261125b1p_badge', lab: '過去的本事', who: 'could' },
    { art: 'dg20261125b1p_slip', lab: '那一次的結果', who: 'was able to' }
  ],
  flow: [
    { q: '句子需要未來或完成式嗎？', a: '需要', en: 'will / have + been able to' },
    { q: '是一段時間的本事嗎？', a: '是', en: 'could + 原形動詞' },
    { q: '是某一次真的做到？', a: '是', en: 'was / were able to' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: '中文的「能」一個字打天下，英文卻有三個工具。選錯不會被說文法錯，但你想講的事情會變掉。', vis: { type: 'title' } },

    /* ---- 1 三張卡 ---- */
    { ch: 1, sp: 'N', zh: '三張卡，三個工作。先看它們各自負責什麼。', vis: { type: 'cards', show: 0 } },
    { ch: 1, sp: 'N', zh: '第一張是 can，管現在的能力。短、自然，是預設值。',
      hi: [{ t: '現在的能力', k: 'now', c: 3 }], vis: { type: 'cards', show: 1, pop: true } },
    { ch: 1, sp: 'A', en: 'Grace can handle the reach truck on her own.', cn: 'Grace可以自己操作高架堆高機。',
      hi: [{ t: 'can handle', cn: '現在就有這個能力', k: 'now', c: 3 }], vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'N', zh: '第二張是 could，管過去一段時間的本事，像一張證照。',
      hi: [{ t: '一段時間的本事', k: 'past', c: 4 }], vis: { type: 'cards', show: 2, pop: true } },
    { ch: 1, sp: 'T', en: 'In his twenties Victor could shift a full sack with one arm.', cn: '二十幾歲的時候，Victor單手就搬得動一整袋。',
      hi: [{ t: 'could shift', cn: '那幾年都辦得到', k: 'past', c: 4 }], vis: { type: 'cards', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: '第三張是 was able to，管某一次真的做到，像一張收據。',
      hi: [{ t: '真的做到', k: 'once', c: 2 }], vis: { type: 'cards', show: 3, pop: true } },
    { ch: 1, sp: 'A', en: 'Last Thursday she was able to locate the missing pallet in forty minutes.', cn: '上星期四她四十分鐘內就找出那塊不見的棧板。',
      hi: [{ t: 'was able to locate', cn: '那一次有結果', k: 'once', c: 2 }], vis: { type: 'cards', show: 3, lit: 2 } },
    { ch: 1, sp: 'N', zh: '證照跟收據的差別，就是這個單元全部的重點。', vis: { type: 'cards', show: 3 } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: 'can 是助動詞，只有兩個形狀：現在 can、過去 could。其他格子都空著。',
      hi: [{ t: '只有兩個形狀', k: 'now', c: 3 }],
      vis: { type: 'pattern', kick: 'can / could', rows: [
        { lab: '現在', blocks: [{ t: 'Grace', k: 's' }, { t: 'can', k: 'n' }, { t: 'load', k: 'v' }, { t: 'two bays', k: 'o' }] },
        { lab: '過去', blocks: [{ t: 'Victor', k: 's' }, { t: 'could', k: 'n' }, { t: 'load', k: 'v' }, { t: 'four bays', k: 'o' }] }
      ], note: '後面一律接原形動詞' } },
    { ch: 2, sp: 'N', zh: '空著的格子由 be able to 補。它是一般動詞，想接在哪裡都行。',
      hi: [{ t: '一般動詞', k: 'once', c: 2 }],
      vis: { type: 'pattern', kick: 'be able to', rows: [
        { lab: '未來', blocks: [{ t: 'She', k: 's' }, { t: 'will be able to', k: 'n' }, { t: 'train', k: 'v' }, { t: 'the new crew', k: 'o' }] },
        { lab: '完成式', blocks: [{ t: 'We', k: 's' }, { t: 'have been able to', k: 'n' }, { t: 'halve', k: 'v' }, { t: 'the picking time', k: 'o' }] }
      ], note: 'will can 和 have could 都不存在' } },
    { ch: 2, sp: 'N', zh: '還有一個常用的鄰居：managed to，意思接近，但多了「費了勁」。',
      hi: [{ t: '費了勁', k: 'once', c: 2 }],
      vis: { type: 'family', art: 'dg20261125b1p_slip', kick: '同一條線上的說法', items: [
        { t: 'can', c: '現在' }, { t: 'could', c: '過去的本事' },
        { t: 'was able to', c: '那一次做到' }, { t: 'managed to', c: '辛苦才做到' }
      ] } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: '來聽 Grace 和 Victor 在倉庫交班，注意他們換工具的時機。', vis: { type: 'scene', art: 'dg20261125b1p_warehouse' } },
    { ch: 3, sp: 'T', en: 'Can you read the small codes on the top bay?', cn: '最上層那排小代碼你看得清楚嗎？',
      hi: [{ t: 'Can you read', cn: '問現在的能力', k: 'now', c: 3 }], vis: { type: 'scene', art: 'dg20261125b1p_rack' } },
    { ch: 3, sp: 'A', en: 'Not from the floor. But I can scan them from the platform.', cn: '站在地面看不到。但我在平台上掃得到。',
      hi: [{ t: 'can scan', cn: '現在就辦得到', k: 'now', c: 3 }], vis: { type: 'scene', art: 'dg20261125b1p_scanner' } },
    { ch: 3, sp: 'T', en: 'Two years ago nobody could read that row at all.', cn: '兩年前根本沒有人看得懂那一排。',
      hi: [{ t: 'could read', cn: '當時整段時間都這樣', k: 'past', c: 4 }], vis: { type: 'scene', art: 'dg20261125b1p_qmark' } },
    { ch: 3, sp: 'A', en: 'Yesterday I was able to clear the whole aisle before the lorry came.', cn: '昨天我在卡車來之前就把整條通道清空了。',
      hi: [{ t: 'was able to clear', cn: '昨天那一次有結果', k: 'once', c: 2 }], vis: { type: 'scene', art: 'dg20261125b1p_lorry' } },
    { ch: 3, sp: 'N', zh: '聽到了嗎？昨天那一次用 was able to，兩年前的狀況用 could。',
      hi: [{ t: '那一次', k: 'once', c: 2 }], vis: { type: 'scene', art: 'dg20261125b1p_pallet' } },
    { ch: 3, sp: 'T', en: 'How long will the count take once the new scanners arrive?', cn: '新的掃描槍到了以後，盤點要多久？', vis: { type: 'scene', art: 'dg20261125b1p_count' } },
    { ch: 3, sp: 'A', en: 'With six of them we will be able to finish in one shift.', cn: '有六支的話，我們一個班就做完了。',
      hi: [{ t: 'will be able to finish', cn: '未來沒有 will can', k: 'once', c: 2 }], vis: { type: 'scene', art: 'dg20261125b1p_tape' } },
    { ch: 3, sp: 'T', en: 'I could smell the leak in the cold room before the alarm went off.', cn: '警報響之前我就聞得到冷藏庫在漏。',
      hi: [{ t: 'could smell', cn: '感官動詞留 could', k: 'past', c: 4 }], vis: { type: 'scene', art: 'dg20261125b1p_cold' } },
    { ch: 3, sp: 'A', en: 'And you managed to get the engineer in on a Sunday.', cn: '而你還想辦法在星期天把工程師找來。',
      hi: [{ t: 'managed to get', cn: '不容易才做到', k: 'once', c: 2 }], vis: { type: 'scene', art: 'dg20261125b1p_sign2' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '第一組最關鍵：同一件事，用 could 和用 was able to 的差別。',
      vis: { type: 'vs', sm: true, kick: '本事 vs 結果',
        a: { w: 'She could run the whole night count alone.', def: '她當時有辦法一個人跑完整個夜間盤點。', cn: '沒說結果' },
        b: { w: 'That night she was able to run the whole count alone.', def: '那一晚她真的一個人把盤點跑完了。', cn: '結果出來了' } } },
    { ch: 4, sp: 'A', en: 'She could run the whole night count alone.', cn: '她當時有辦法一個人跑完整個夜間盤點。',
      hi: [{ t: 'could run', cn: '只描述本事', k: 'past', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '本事 vs 結果',
        a: { w: 'She could run the whole night count alone.', def: '她當時有辦法一個人跑完整個夜間盤點。', cn: '沒說結果' },
        b: { w: 'That night she was able to run the whole count alone.', def: '那一晚她真的一個人把盤點跑完了。', cn: '結果出來了' } } },
    { ch: 4, sp: 'T', en: 'That night she was able to run the whole count alone.', cn: '那一晚她真的一個人把盤點跑完了。',
      hi: [{ t: 'was able to run', cn: '鎖定一次，有結果', k: 'once', c: 2 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '本事 vs 結果',
        a: { w: 'She could run the whole night count alone.', def: '她當時有辦法一個人跑完整個夜間盤點。', cn: '沒說結果' },
        b: { w: 'That night she was able to run the whole count alone.', def: '那一晚她真的一個人把盤點跑完了。', cn: '結果出來了' } } },
    { ch: 4, sp: 'N', zh: '左邊的人聽完還會問「那後來呢」，右邊的人已經知道事情辦成了。',
      vis: { type: 'vs', sm: true, kick: '本事 vs 結果',
        a: { w: 'She could run the whole night count alone.', def: '她當時有辦法一個人跑完整個夜間盤點。', cn: '沒說結果' },
        b: { w: 'That night she was able to run the whole count alone.', def: '那一晚她真的一個人把盤點跑完了。', cn: '結果出來了' } } },
    { ch: 4, sp: 'N', zh: '第二組看時態：現在用 can，未來就只有一條路。',
      vis: { type: 'vs', sm: true, kick: '現在 vs 未來',
        a: { w: 'He can operate three of the four machines.', def: '四台機器裡他會操作三台。', cn: '現在用 can' },
        b: { w: 'By March he will be able to operate all four.', def: '到三月他四台都會操作了。', cn: '未來要 be able to' } } },
    { ch: 4, sp: 'A', en: 'He can operate three of the four machines.', cn: '四台機器裡他會操作三台。',
      hi: [{ t: 'can operate', cn: '現在式的預設值', k: 'now', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '現在 vs 未來',
        a: { w: 'He can operate three of the four machines.', def: '四台機器裡他會操作三台。', cn: '現在用 can' },
        b: { w: 'By March he will be able to operate all four.', def: '到三月他四台都會操作了。', cn: '未來要 be able to' } } },
    { ch: 4, sp: 'T', en: 'By March he will be able to operate all four.', cn: '到三月他四台都會操作了。',
      hi: [{ t: 'will be able to', cn: '助動詞不能並排', k: 'once', c: 2 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '現在 vs 未來',
        a: { w: 'He can operate three of the four machines.', def: '四台機器裡他會操作三台。', cn: '現在用 can' },
        b: { w: 'By March he will be able to operate all four.', def: '到三月他四台都會操作了。', cn: '未來要 be able to' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '寫之前照順序問三句話，順序很重要。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一句：句子需要未來式或完成式嗎？需要就只能用 be able to。',
      hi: [{ t: '只能用 be able to', k: 'once', c: 2 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'T', en: 'Since April we have been able to ship on the same day.', cn: '四月以來我們都能夠當日出貨。',
      hi: [{ t: 'have been able to', cn: '完成式只有這條路', k: 'once', c: 2 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二句：你在講一段時間的本事嗎？是的話用 could。',
      hi: [{ t: '一段時間', k: 'past', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'A', en: 'Before the rebuild we could only stack three high.', cn: '改建之前我們只堆得到三層。',
      hi: [{ t: 'could only stack', cn: '那段時間的狀態', k: 'past', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '第三句：是某一次真的做到嗎？那就換 was able to，而且補一個數字。',
      hi: [{ t: '補一個數字', k: 'once', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'T', en: 'On the second attempt we were able to cut the error list to two.', cn: '第二次嘗試我們就把錯誤清單縮到兩項。',
      hi: [{ t: 'were able to cut', cn: '一次、有結果、有數字', k: 'once', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說。看完中文先自己講一次，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：你要說受訓之後，下個月你就可以自己簽收貨單。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '你要說受訓之後，下個月你就可以自己簽收貨單。' } },
    { ch: 6, sp: 'A', en: 'After the course I will be able to sign the goods receipts myself.', cn: '上完課以後，我就可以自己簽收貨單了。',
      hi: [{ t: 'will be able to sign', cn: '未來只有這條路', k: 'once', c: 2 }],
      vis: { type: 'speak', n: 1, show: true, sit: '你要說受訓之後，下個月你就可以自己簽收貨單。', a: 'After the course I will be able to sign the goods receipts myself.' } },
    { ch: 6, sp: 'N', zh: '情境二：你要報告上星期五那一次，你們在截止前把貨全部出完。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '你要報告上星期五那一次，你們在截止前把貨全部出完。' } },
    { ch: 6, sp: 'T', en: 'Last Friday we were able to dispatch every order before the cut-off.', cn: '上星期五我們在截止前把每一張訂單都出完了。',
      hi: [{ t: 'were able to dispatch', cn: '一次，而且有結果', k: 'once', c: 2 }],
      vis: { type: 'speak', n: 2, show: true, sit: '你要報告上星期五那一次，你們在截止前把貨全部出完。', a: 'Last Friday we were able to dispatch every order before the cut-off.' } },
    { ch: 6, sp: 'N', zh: '情境三：你要描述以前的狀況：舊系統只查得到當天的紀錄。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '你要描述以前的狀況：舊系統只查得到當天的紀錄。' } },
    { ch: 6, sp: 'A', en: 'With the old system we could only look up the same day.', cn: '用舊系統的時候我們只查得到當天。',
      hi: [{ t: 'could only look up', cn: '一段時間的限制', k: 'past', c: 4 }],
      vis: { type: 'speak', n: 3, show: true, sit: '你要描述以前的狀況：舊系統只查得到當天的紀錄。', a: 'With the old system we could only look up the same day.' } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結：時態缺位用 be able to，一段時間的本事用 could，某一次的結果用 was able to。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '下次講自己的能力之前先問一句：我是在給證照，還是在給收據。', vis: { type: 'end' } }
  ]
};
