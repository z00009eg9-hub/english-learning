/* ============================================================
   B2 Read 文法影片解說 — dg20261104b1p（2026-11-04 每日文法 B1+・I will and I'm going to）
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
  var person=function(x,y,s,col){ return '<g transform="translate('+x+','+y+') scale('+s+')" '+st+'>'
      +'<circle cx="0" cy="0" r="12" fill="'+(col||'#fff')+'"/>'
      +'<path d="M0 12 v26 M-13 64 l13 -26 l13 26" fill="none"/></g>'; };

  Object.assign(window.GVIDEO_ART, {
    /* 核心卡 1：上週就寫在筆記本上的計畫 */
    dg20261104b1p_plan: svg(
      '<rect x="40" y="24" width="120" height="104" rx="7" fill="#fff" '+st+'/>'
     +'<path d="M62 24 v104" fill="none" '+th(3)+'/>'
     +'<g '+th(2.5)+'><line x1="76" y1="48" x2="142" y2="48"/><line x1="76" y1="70" x2="142" y2="70"/><line x1="76" y1="92" x2="118" y2="92"/></g>'
     +chk(142,96,12)),
    /* 核心卡 2：這一秒的火花 */
    dg20261104b1p_spark: svg(
      '<circle cx="100" cy="72" r="26" fill="'+A+'" '+st+'/>'
     +'<g '+th(4)+'><line x1="100" y1="22" x2="100" y2="38"/><line x1="100" y1="106" x2="100" y2="122"/>'
     +'<line x1="50" y1="72" x2="66" y2="72"/><line x1="134" y1="72" x2="150" y2="72"/>'
     +'<line x1="64" y1="36" x2="76" y2="48"/><line x1="124" y1="96" x2="136" y2="108"/>'
     +'<line x1="136" y1="36" x2="124" y2="48"/><line x1="76" y1="96" x2="64" y2="108"/></g>'),
    /* 核心卡 3：動作真的發生——起飛的飛機 */
    dg20261104b1p_action: svg(
      '<path d="M22 96 l150 -46 l-16 30 l-54 10 l-18 28 l-14 -4 l4 -20 Z" fill="'+S+'" '+st+'/>'
     +'<path d="M26 126 h148" fill="none" '+th(3)+'/>'
     +'<circle cx="162" cy="34" r="9" fill="'+A+'" '+st+'/>'),
    /* 情境 0：候機室 */
    dg20261104b1p_gate: svg(
      '<rect x="14" y="26" width="172" height="62" rx="5" fill="'+S+'" '+st+'/>'
     +'<path d="M14 88 h172" fill="none" '+th(3)+'/>'
     +person(48,100,0.8,'#fff')+person(100,100,0.8,Y)+person(152,100,0.8,'#fff')
     +'<circle cx="150" cy="50" r="14" fill="#fff" '+st+'/>'),
    /* 情境 1：航班看板 */
    dg20261104b1p_board: svg(
      '<rect x="24" y="22" width="152" height="92" rx="6" fill="'+D+'" stroke="'+D+'" stroke-width="3"/>'
     +'<g stroke="'+Y+'" stroke-width="5" stroke-linecap="round"><line x1="42" y1="44" x2="92" y2="44"/><line x1="42" y1="66" x2="110" y2="66"/><line x1="42" y1="88" x2="78" y2="88"/></g>'
     +'<g stroke="'+A+'" stroke-width="5" stroke-linecap="round"><line x1="118" y1="44" x2="158" y2="44"/><line x1="126" y1="88" x2="158" y2="88"/></g>'
     +'<path d="M70 114 v16 M50 134 h100" fill="none" '+th(3)+'/>'),
    /* 情境 2：行李箱 */
    dg20261104b1p_suitcase: svg(
      '<rect x="52" y="44" width="96" height="76" rx="8" fill="'+L+'" '+st+'/>'
     +'<path d="M78 44 v-16 h44 v16" fill="none" '+th(4)+'/>'
     +'<path d="M52 72 h96" fill="none" '+th(2.5)+'/>'
     +'<rect x="90" y="84" width="20" height="14" rx="3" fill="'+A+'" '+st+'/>'
     +'<path d="M66 120 v10 M134 120 v10" fill="none" '+th(4)+'/>'),
    /* 情境 3：護照與登機證 */
    dg20261104b1p_passport: svg(
      '<rect x="34" y="34" width="72" height="96" rx="6" fill="'+B+'" '+st+'/>'
     +'<circle cx="70" cy="72" r="16" fill="#fff" '+st+'/>'
     +'<path d="M48 108 h44" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round"/>'
     +'<path d="M106 58 l62 14 l-10 44 l-62 -14 Z" fill="#fff" '+st+'/>'
     +'<path d="M118 82 h32" fill="none" '+th(2.5)+'/>'),
    /* 情境 4：外帶咖啡 */
    dg20261104b1p_coffee: svg(
      '<path d="M70 48 h60 l-7 72 h-46 z" fill="#fff" '+st+'/>'
     +'<rect x="64" y="36" width="72" height="14" rx="4" fill="'+A+'" '+st+'/>'
     +'<path d="M74 78 h52" fill="none" '+th(2.5)+'/>'
     +'<path d="M86 26 q6 -12 12 0 M106 26 q6 -12 12 0" fill="none" '+th(3)+'/>'),
    /* 情境 5：窗外的雨 */
    dg20261104b1p_rain: svg(
      '<rect x="30" y="24" width="140" height="92" rx="6" fill="'+S+'" '+st+'/>'
     +'<path d="M100 24 v92 M30 70 h140" fill="none" '+th(3)+'/>'
     +'<g stroke="'+B+'" stroke-width="4" stroke-linecap="round"><line x1="52" y1="38" x2="44" y2="58"/><line x1="78" y1="40" x2="70" y2="60"/><line x1="126" y1="80" x2="118" y2="100"/><line x1="152" y1="82" x2="144" y2="102"/></g>'
     +'<path d="M26 128 h148" fill="none" '+th(3)+'/>'),
    /* 情境 6：停在機坪上的飛機 */
    dg20261104b1p_plane: svg(
      '<path d="M30 70 h110 l26 18 h-136 z" fill="#fff" '+st+'/>'
     +'<path d="M66 70 l14 -30 h14 l-6 30 Z" fill="'+S+'" '+st+'/>'
     +'<path d="M26 110 h148" fill="none" '+th(4)+'/>'
     +'<circle cx="62" cy="96" r="7" fill="'+L+'" '+st+'/><circle cx="128" cy="96" r="7" fill="'+L+'" '+st+'/>'),
    /* 情境 7：手機上的訊息 */
    dg20261104b1p_phone: svg(
      '<rect x="66" y="16" width="68" height="118" rx="10" fill="#fff" '+st+'/>'
     +'<path d="M88 16 h24" fill="none" '+th(3)+'/>'
     +'<rect x="78" y="40" width="44" height="14" rx="4" fill="'+S+'" '+st+'/>'
     +'<rect x="78" y="62" width="34" height="14" rx="4" fill="'+A+'" '+st+'/>'
     +'<rect x="78" y="84" width="44" height="14" rx="4" fill="'+S+'" '+st+'/>'
     +'<circle cx="100" cy="118" r="6" fill="'+L+'" '+st+'/>'),
    /* 情境 8：候機室的座位 */
    dg20261104b1p_seat: svg(
      '<path d="M26 112 h148 v10 H26 Z" fill="'+L+'" '+st+'/>'
     +'<path d="M34 112 V66 h30 v46 M84 112 V66 h30 v46 M134 112 V66 h30 v46" fill="#fff" '+st+'/>'
     +'<path d="M34 122 v12 M166 122 v12" fill="none" '+th(4)+'/>'
     +'<circle cx="99" cy="48" r="10" fill="'+A+'" '+st+'/>'),
    /* 情境 9：問號——在猜 */
    dg20261104b1p_guess: svg(
      '<path d="M54 92 a22 22 0 0 1 6 -42 a30 30 0 0 1 56 -8 a24 24 0 0 1 34 24 a18 18 0 0 1 -6 26 Z" fill="#fff" '+st+'/>'
     +qb(100,66)
     +'<circle cx="44" cy="110" r="9" fill="#fff" '+st+'/><circle cx="28" cy="128" r="6" fill="#fff" '+st+'/>')
  });
})();

window.GVIDEO.dg20261104b1p = {
  kind: 'gram',
  date: '2026-11-04',
  title: 'Where Does the Decision Sit?',
  titleCn: '那個決定站在哪裡',
  titleArt: ['dg20261104b1p_plan', 'dg20261104b1p_spark', 'dg20261104b1p_action'],
  scene: '候機室 Airport gate',
  sceneArt: 'dg20261104b1p_gate',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Clara', voice: 'f' },
    T: { name: 'Marco', voice: 'm' }
  },
  expr: {
    gt: { t: 'be going to + 原形動詞', cn: '開口之前就決定好了', ex: "We're going to drive down the coast on Sunday.", exCn: '星期天我們要沿著海岸開下去。', note: 'be 動詞是必要零件，不能省' },
    wl: { t: "I'll + 原形動詞", cn: '說著說著才決定', ex: "The gate changed. I'll go and look.", exCn: '登機門換了，我去看一下。', note: '前面常有一句描述現況的話' },
    ev: { t: '跡象 ＋ be going to', cn: '照現在的狀況看下去', ex: 'Half the flights are red. We are going to wait.', exCn: '一半的班機都是紅的，我們得等。', note: '證據在眼前就不要用 will' }
  },
  chapters: [
    { cn: '開場' }, { cn: '決定的位置' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  timelineNow: 62,
  timeline: [
    { x: 38, art: 'dg20261104b1p_plan', lab: '先決定', who: '上週' },
    { x: 86, art: 'dg20261104b1p_action', lab: '動作發生', who: '之後' }
  ],
  flow: [
    { q: '開口之前就決定好了嗎？', a: '早就定', en: '主詞 + be going to + 原形動詞' },
    { q: '是說著說著才決定的嗎？', a: '剛剛定', en: '主詞 + will + 原形動詞' },
    { q: '預測時跡象在眼前嗎？', a: '有跡象', en: '現況 + 主詞 + be going to + 原形動詞' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: '兩個都在講未來，動作也都落在同一段未來。真正不一樣的，是那個決定站在哪裡。', vis: { type: 'title' } },

    /* ---- 1 決定的位置 ---- */
    { ch: 1, sp: 'N', zh: '把時間畫成一條線。中間是說話的這一刻，右邊是動作真正發生的時候。', vis: { type: 'timeline', show: 0 } },
    { ch: 1, sp: 'N', zh: '如果決定落在這一刻的左邊，也就是你開口之前就定了，用 be going to。',
      hi: [{ t: '開口之前就定了', k: 'gt', c: 3 }], vis: { type: 'timeline', show: 1, pop: true, dec: true, decText: '這一刻才決定：will' } },
    { ch: 1, sp: 'A', en: "We're going to drive down the coast on Sunday.", cn: '星期天我們要沿著海岸開下去。',
      hi: [{ t: "We're going to", cn: '上週就講好了', k: 'gt', c: 3 }], vis: { type: 'timeline', show: 1, lit: 0 } },
    { ch: 1, sp: 'N', zh: '如果決定就剛好落在這一刻，用 will。這種句子前面通常有一句描述現況的話。',
      hi: [{ t: '就剛好落在這一刻', k: 'wl', c: 4 }], vis: { type: 'timeline', show: 2, pop: true } },
    { ch: 1, sp: 'T', en: "The gate changed. I'll go and look.", cn: '登機門換了，我去看一下。',
      hi: [{ t: "I'll go", cn: '看到才決定', k: 'wl', c: 4 }], vis: { type: 'timeline', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: '預測也用同一條線。跡象已經攤在眼前的時候，一樣選 be going to。',
      hi: [{ t: '跡象已經攤在眼前', k: 'ev', c: 2 }], vis: { type: 'timeline', show: 2, dec: true, decText: '有跡象：going to' } },
    { ch: 1, sp: 'A', en: 'Half the flights are red. We are going to wait.', cn: '一半的班機都是紅的，我們得等。',
      hi: [{ t: 'are going to wait', cn: '看板就是證據', k: 'ev', c: 2 }], vis: { type: 'timeline', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: '所以問自己的永遠是同一句：這個決定，是現在才有的嗎。', vis: { type: 'timeline', show: 2 } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: 'be going to 有三塊零件，最容易漏掉的是第一塊 be 動詞。',
      hi: [{ t: 'be 動詞', k: 'gt', c: 3 }],
      vis: { type: 'pattern', kick: 'be + going to + base verb', rows: [
        { lab: '肯定', blocks: [{ t: 'They', k: 's' }, { t: 'are going to extend', k: 'v' }, { t: 'the lease', k: 'n' }] },
        { lab: '否定', blocks: [{ t: 'They', k: 's' }, { t: 'are not going to extend', k: 'v' }, { t: 'it', k: 'n' }] }
      ], note: '中文的「要」前面沒有字，所以 be 動詞特別容易蒸發' } },
    { ch: 2, sp: 'N', zh: '問句只要把 be 動詞搬到主詞前面，後面一個字都不改。',
      vis: { type: 'pattern', kick: 'Question', rows: [
        { lab: '問句', blocks: [{ t: 'Are', k: 'v' }, { t: 'you', k: 's' }, { t: 'going to take', k: 'v' }, { t: 'the night train', k: 'n' }] },
        { lab: '簡答', blocks: [{ t: 'Yes,', k: 'n' }, { t: 'we', k: 's' }, { t: 'are', k: 'v' }] }
      ] } },
    { ch: 2, sp: 'N', zh: 'will 那一側只有兩塊：主詞加 will，再加原形動詞。',
      hi: [{ t: 'will', k: 'wl', c: 4 }],
      vis: { type: 'pattern', kick: 'will + base verb', rows: [
        { lab: '當場決定', blocks: [{ t: 'I', k: 's' }, { t: "'ll swap", k: 'v' }, { t: 'the seats', k: 'n' }] },
        { lab: '個人判斷', blocks: [{ t: 'The delay', k: 's' }, { t: 'will probably end', k: 'v' }, { t: 'by noon', k: 'o' }] }
      ], note: '兩套做法不能疊在一起用' } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: '來聽 Clara 和 Marco 在候機室，注意每一句的決定站在哪裡。', vis: { type: 'scene', art: 'dg20261104b1p_gate' } },
    { ch: 3, sp: 'A', en: 'Our luggage tags were printed last Tuesday.', cn: '我們的行李條上星期二就印好了。', vis: { type: 'scene', art: 'dg20261104b1p_suitcase' } },
    { ch: 3, sp: 'T', en: 'Right, and we are going to check in two bags, not three.', cn: '對，而且我們要托運兩件，不是三件。',
      hi: [{ t: 'are going to check in', cn: '早就算好了', k: 'gt', c: 3 }], vis: { type: 'scene', art: 'dg20261104b1p_passport' } },
    { ch: 3, sp: 'N', zh: '件數是出發前就算好的，所以他用的是開口前那一側的形狀。',
      hi: [{ t: '出發前就算好', k: 'gt', c: 3 }], vis: { type: 'scene', art: 'dg20261104b1p_plan' } },
    { ch: 3, sp: 'A', en: 'Look at the board. Our gate has moved to B12.', cn: '你看看板，我們的登機門換到 B12 了。', vis: { type: 'scene', art: 'dg20261104b1p_board' } },
    { ch: 3, sp: 'T', en: "Then I'll carry the coffee and you take the tickets.", cn: '那咖啡我拿，票你拿。',
      hi: [{ t: "I'll carry", cn: '看到看板才決定', k: 'wl', c: 4 }], vis: { type: 'scene', art: 'dg20261104b1p_coffee' } },
    { ch: 3, sp: 'N', zh: '這個分工是看到看板那一刻才生出來的，所以站在這一刻。',
      hi: [{ t: '才生出來', k: 'wl', c: 4 }], vis: { type: 'scene', art: 'dg20261104b1p_spark' } },
    { ch: 3, sp: 'A', en: 'The rain has not stopped since we arrived.', cn: '我們到了之後雨就沒停過。', vis: { type: 'scene', art: 'dg20261104b1p_rain' } },
    { ch: 3, sp: 'T', en: 'Four flights are already red, so we are going to sit here a while.', cn: '已經有四班是紅的了，我們會在這裡坐一陣子。',
      hi: [{ t: 'are going to sit', cn: '證據在看板上', k: 'ev', c: 2 }], vis: { type: 'scene', art: 'dg20261104b1p_seat' } },
    { ch: 3, sp: 'N', zh: '這是預測，但證據就在眼前，所以不是純粹的個人看法。', vis: { type: 'scene', art: 'dg20261104b1p_guess' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '同樣在講換位子，一句是出發前就安排好的，一句是剛剛才想到的。',
      vis: { type: 'vs', sm: true, kick: '決定的位置',
        a: { w: 'We are going to swap seats after takeoff.', def: '起飛後我們要換位子。', cn: '開口前就說好 → going to' },
        b: { w: "This row is too noisy. I'll swap with you.", def: '這一排太吵，我跟你換。', cn: '剛剛才決定 → will' } } },
    { ch: 4, sp: 'A', en: 'We are going to swap seats after takeoff.', cn: '起飛後我們要換位子。',
      hi: [{ t: 'are going to swap', cn: '事先說好', k: 'gt', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '決定的位置',
        a: { w: 'We are going to swap seats after takeoff.', def: '起飛後我們要換位子。', cn: '開口前就說好 → going to' },
        b: { w: "This row is too noisy. I'll swap with you.", def: '這一排太吵，我跟你換。', cn: '剛剛才決定 → will' } } },
    { ch: 4, sp: 'T', en: "This row is too noisy. I'll swap with you.", cn: '這一排太吵，我跟你換。',
      hi: [{ t: "I'll swap", cn: '當下決定', k: 'wl', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '決定的位置',
        a: { w: 'We are going to swap seats after takeoff.', def: '起飛後我們要換位子。', cn: '開口前就說好 → going to' },
        b: { w: "This row is too noisy. I'll swap with you.", def: '這一排太吵，我跟你換。', cn: '剛剛才決定 → will' } } },
    { ch: 4, sp: 'N', zh: '動作一樣、人一樣，只有決定的位置不同，英文的形狀就跟著換。',
      vis: { type: 'vs', sm: true, kick: '決定的位置',
        a: { w: 'We are going to swap seats after takeoff.', def: '起飛後我們要換位子。', cn: '開口前就說好 → going to' },
        b: { w: "This row is too noisy. I'll swap with you.", def: '這一排太吵，我跟你換。', cn: '剛剛才決定 → will' } } },
    { ch: 4, sp: 'N', zh: '再看預測。手上有證據和心裡有想法，選的字也不一樣。',
      vis: { type: 'vs', sm: true, kick: '有證據 vs 只有想法',
        a: { w: 'The runway is flooded, so the flight is going to be late.', def: '跑道積水了，這班會延誤。', cn: '跡象在眼前 → going to' },
        b: { w: 'I think the flight will be on time.', def: '我想這班會準時。', cn: '只是看法 → will' } } },
    { ch: 4, sp: 'A', en: 'The runway is flooded, so the flight is going to be late.', cn: '跑道積水了，這班會延誤。',
      hi: [{ t: 'is going to be late', cn: '證據在眼前', k: 'ev', c: 2 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '有證據 vs 只有想法',
        a: { w: 'The runway is flooded, so the flight is going to be late.', def: '跑道積水了，這班會延誤。', cn: '跡象在眼前 → going to' },
        b: { w: 'I think the flight will be on time.', def: '我想這班會準時。', cn: '只是看法 → will' } } },
    { ch: 4, sp: 'T', en: 'I think the flight will be on time.', cn: '我想這班會準時。',
      hi: [{ t: 'I think', cn: '只是看法', k: 'wl', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '有證據 vs 只有想法',
        a: { w: 'The runway is flooded, so the flight is going to be late.', def: '跑道積水了，這班會延誤。', cn: '跡象在眼前 → going to' },
        b: { w: 'I think the flight will be on time.', def: '我想這班會準時。', cn: '只是看法 → will' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '動筆之前照順序問三句，答案就會自己跳出來。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一問：這件事我開口之前就決定好了嗎？是的話走 going to。',
      hi: [{ t: '開口之前', k: 'gt', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'A', en: 'I am going to renew my passport in January.', cn: '我一月要換護照。',
      hi: [{ t: 'am going to renew', cn: '計畫早就有了', k: 'gt', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二問：是說著說著才決定的嗎？那就用 will。',
      hi: [{ t: 'will', k: 'wl', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'T', en: "Your phone is at two percent. I'll lend you mine.", cn: '你手機只剩百分之二，我借你我的。',
      hi: [{ t: "I'll lend", cn: '看到才決定', k: 'wl', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '第三問：這是預測嗎？跡象在眼前就用 going to，只有想法就用 will。',
      hi: [{ t: '跡象在眼前', k: 'ev', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'A', en: 'Both engines are off, so nobody is going to board soon.', cn: '兩具引擎都關了，短時間內沒人登機。',
      hi: [{ t: 'is going to board', cn: '證據在眼前', k: 'ev', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說。看完中文先自己講一次，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：你上個月就報名了十二月的檢定考。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '你上個月就報名了十二月的檢定考。' } },
    { ch: 6, sp: 'A', en: 'I am going to take the exam in December.', cn: '我十二月要去考試。',
      hi: [{ t: 'am going to take', cn: '開口前就定 → going to', k: 'gt', c: 3 }],
      vis: { type: 'speak', n: 1, show: true, sit: '你上個月就報名了十二月的檢定考。', a: 'I am going to take the exam in December.' } },
    { ch: 6, sp: 'N', zh: '情境二：你發現同事的水瓶倒了，當場決定去拿布。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '你發現同事的水瓶倒了，當場決定去拿布。' } },
    { ch: 6, sp: 'T', en: "I'll fetch a towel.", cn: '我去拿條毛巾。',
      hi: [{ t: "I'll fetch", cn: '這一刻決定 → will', k: 'wl', c: 4 }],
      vis: { type: 'speak', n: 2, show: true, sit: '你發現同事的水瓶倒了，當場決定去拿布。', a: "I'll fetch a towel." } },
    { ch: 6, sp: 'N', zh: '情境三：天空黑了一半，你覺得等一下會下大雨。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '天空黑了一半，你覺得等一下會下大雨。' } },
    { ch: 6, sp: 'A', en: 'It is going to pour in a minute.', cn: '等一下就會下大雨。',
      hi: [{ t: 'is going to pour', cn: '跡象在眼前 → going to', k: 'ev', c: 2 }],
      vis: { type: 'speak', n: 3, show: true, sit: '天空黑了一半，你覺得等一下會下大雨。', a: 'It is going to pour in a minute.' } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結：決定在開口之前就用 going to，決定就在這一刻就用 will；預測看證據在不在眼前。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '下次寫未來之前，先把那個決定放上時間線。', vis: { type: 'end' } }
  ]
};
