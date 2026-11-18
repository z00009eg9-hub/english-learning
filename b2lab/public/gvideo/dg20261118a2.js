/* ============================================================
   B2 Read 文法影片解說 — dg20261118a2（2026-11-18 每日文法 A2・will be doing）
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

  Object.assign(window.GVIDEO_ART, {
    /* 核心卡 1：掛鐘——先釘住一個時刻 */
    dg20261118a2_clock: svg(
      '<circle cx="100" cy="74" r="48" fill="#fff" '+st+'/>'
     +'<circle cx="100" cy="74" r="6" fill="'+A+'"/>'
     +'<g '+th(4)+'><line x1="100" y1="74" x2="100" y2="42"/><line x1="100" y1="74" x2="126" y2="86"/></g>'
     +'<path d="M66 26 l12 12 M134 26 l-12 12" fill="none" '+th(3)+'/>'),
    /* 核心卡 2：車窗外的海——那一刻正在做 */
    dg20261118a2_window: svg(
      '<rect x="28" y="30" width="144" height="92" rx="10" fill="'+S+'" '+st+'/>'
     +'<path d="M28 92 h144" fill="none" '+th(3)+'/>'
     +'<circle cx="146" cy="56" r="13" fill="'+Y+'" '+st+'/>'
     +'<path d="M40 104 q16 -10 32 0 q16 10 32 0 q16 -10 32 0" fill="none" stroke="'+B+'" stroke-width="4" stroke-linecap="round"/>'),
    /* 核心卡 3：手機——那段時間沒空 */
    dg20261118a2_phone: svg(
      '<rect x="66" y="18" width="68" height="114" rx="12" fill="#fff" '+st+'/>'
     +'<rect x="78" y="34" width="44" height="74" rx="4" fill="'+L+'" '+st+'/>'
     +'<circle cx="100" cy="120" r="6" fill="'+D+'"/>'
     +'<path d="M44 44 l-18 -14 M156 44 l18 -14" fill="none" '+th(3)+'/>'),
    /* 情境 1：車站時刻表看板 */
    dg20261118a2_board: svg(
      '<rect x="24" y="28" width="152" height="80" rx="6" fill="'+D+'"/>'
     +'<g stroke="'+Y+'" stroke-width="5" stroke-linecap="round"><line x1="42" y1="50" x2="96" y2="50"/><line x1="42" y1="68" x2="112" y2="68"/><line x1="42" y1="86" x2="84" y2="86"/></g>'
     +'<rect x="128" y="42" width="30" height="20" rx="3" fill="'+A+'"/>'
     +'<path d="M100 108 v22" fill="none" '+th(4)+'/>'),
    /* 情境 2：售票機 */
    dg20261118a2_machine: svg(
      '<rect x="56" y="20" width="88" height="112" rx="8" fill="'+L+'" '+st+'/>'
     +'<rect x="70" y="34" width="60" height="34" rx="4" fill="'+S+'" '+st+'/>'
     +'<circle cx="84" cy="86" r="7" fill="'+A+'" '+st+'/>'
     +'<circle cx="116" cy="86" r="7" fill="'+G+'" '+st+'/>'
     +'<rect x="74" y="106" width="52" height="8" rx="3" fill="#fff" '+st+'/>'),
    /* 情境 3：候車長椅 */
    dg20261118a2_bench: svg(
      '<rect x="30" y="66" width="140" height="14" rx="5" fill="'+Y+'" '+st+'/>'
     +'<rect x="30" y="44" width="140" height="12" rx="5" fill="'+Y+'" '+st+'/>'
     +'<g fill="none" '+th(4)+'><path d="M48 80 v38"/><path d="M152 80 v38"/></g>'),
    /* 情境 4：橘色問號徽章 */
    dg20261118a2_qmark: svg(
      '<rect x="36" y="34" width="128" height="84" rx="12" fill="#fff" '+st+'/>'+qb(100,76)),
    /* 情境 5：響起來的鬧鈴 */
    dg20261118a2_ringing: svg(
      '<path d="M100 22 a34 34 0 0 1 34 34 v34 h-68 V56 a34 34 0 0 1 34 -34 Z" fill="'+A+'" '+st+'/>'
     +'<path d="M54 98 h92" fill="none" '+th(4)+'/>'
     +'<circle cx="100" cy="116" r="9" fill="#fff" '+st+'/>'
     +'<g '+th(3)+'><line x1="40" y1="44" x2="30" y2="36"/><line x1="160" y1="44" x2="170" y2="36"/></g>'),
    /* 情境 6：背包 */
    dg20261118a2_backpack: svg(
      '<rect x="58" y="44" width="84" height="88" rx="16" fill="'+G+'" '+st+'/>'
     +'<path d="M78 44 q22 -26 44 0" fill="none" '+th(4)+'/>'
     +'<rect x="74" y="88" width="52" height="26" rx="6" fill="#fff" '+st+'/>'),
    /* 情境 7：車窗外的海岸 */
    dg20261118a2_seaview: svg(
      '<rect x="22" y="26" width="156" height="98" rx="12" fill="#fff" '+st+'/>'
     +'<path d="M34 98 q22 -14 44 0 q22 14 44 0 q22 -14 44 0" fill="none" stroke="'+B+'" stroke-width="5" stroke-linecap="round"/>'
     +'<path d="M34 72 l30 -26 l26 26 Z" fill="'+G+'" '+st+'/>'),
    /* 情境 8：鐵路便當 */
    dg20261118a2_bento: svg(
      '<rect x="34" y="52" width="132" height="66" rx="8" fill="'+L+'" '+st+'/>'
     +'<rect x="34" y="40" width="132" height="16" rx="6" fill="'+A+'" '+st+'/>'
     +'<g '+th(3)+'><line x1="78" y1="70" x2="78" y2="110"/><line x1="122" y1="70" x2="122" y2="110"/></g>'),
    /* 情境 9：月台閘門 */
    dg20261118a2_gate2: svg(
      '<rect x="26" y="52" width="48" height="70" rx="6" fill="'+L+'" '+st+'/>'
     +'<rect x="126" y="52" width="48" height="70" rx="6" fill="'+L+'" '+st+'/>'
     +'<path d="M74 86 h52" fill="none" stroke="'+A+'" stroke-width="6" stroke-linecap="round"/>'
     +'<circle cx="50" cy="40" r="8" fill="'+G+'" '+st+'/>'),
    /* 情境 10：揮手道別 */
    dg20261118a2_wave: svg(
      '<circle cx="100" cy="46" r="20" fill="#f4c9a0" '+st+'/>'
     +'<path d="M72 132 v-30 a28 28 0 0 1 56 0 v30" fill="'+B+'" '+st+'/>'
     +'<path d="M130 92 l24 -30" fill="none" '+th(4)+'/>'
     +'<circle cx="158" cy="54" r="10" fill="#f4c9a0" '+st+'/>')
  });
})();

window.GVIDEO.dg20261118a2 = {
  kind: 'gram',
  date: '2026-11-18',
  title: 'will be doing',
  titleCn: '明天這個時候，我正在做',
  titleArt: ['dg20261118a2_clock', 'dg20261118a2_window', 'dg20261118a2_phone'],
  scene: '車站 At the station',
  sceneArt: 'dg20261118a2_board',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Nina', voice: 'f' },
    T: { name: 'Leo', voice: 'm' }
  },
  expr: {
    cont: { t: 'will be + V-ing', cn: '那一刻正在做', ex: 'At nine I will be feeding the cat.', exCn: '九點我會正在餵貓。', note: 'will be 是一組，動詞加 ing' },
    base: { t: 'will + 原形動詞', cn: '只說會發生', ex: 'I will feed the cat tonight.', exCn: '我今天晚上會餵貓。', note: '沒有畫面，只有結果' },
    busy: { t: "won't be + V-ing", cn: '那段時間沒空', ex: "I won't be opening the shop on Sunday.", exCn: '星期天我不會開店。', note: 'not 縮在 will 後面' }
  },
  chapters: [
    { cn: '開場' }, { cn: '三張卡' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  cards: [
    { art: 'dg20261118a2_clock', lab: '先釘住時刻', who: 'at eight' },
    { art: 'dg20261118a2_window', lab: '那一刻正在做', who: 'will be + V-ing' },
    { art: 'dg20261118a2_phone', lab: '那段時間沒空', who: "won't be + V-ing" }
  ],
  flow: [
    { q: '句子裡有指定的時刻嗎？', a: '有', en: '主詞 + will be + V-ing' },
    { q: '那一刻動作還在跑嗎？', a: '還在跑', en: '主詞 + will be + V-ing' },
    { q: '只想說會不會發生？', a: '用 will', en: '主詞 + will + 原形動詞' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: '中文的「我明天八點搭公車」聽不出你是正在車上，還是八點才上車。英文分得很清楚。', vis: { type: 'title' } },

    /* ---- 1 三張卡 ---- */
    { ch: 1, sp: 'N', zh: '今天只要三張卡。三張講的都是未來，差的是有沒有畫面。', vis: { type: 'cards', show: 0 } },
    { ch: 1, sp: 'N', zh: '第一張：先在未來釘一個時刻，幾點、哪一天，先把它說出來。',
      hi: [{ t: '釘一個時刻', k: 'cont', c: 3 }], vis: { type: 'cards', show: 1, pop: true } },
    { ch: 1, sp: 'T', en: 'At nine I will be feeding the cat.', cn: '九點我會正在餵貓。',
      hi: [{ t: 'At nine', cn: '先釘住時刻', k: 'cont', c: 3 }], vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'N', zh: '第二張：那一刻動作還在跑，所以中間加一個 be，動詞加上 ing。',
      hi: [{ t: '動作還在跑', k: 'cont', c: 4 }], vis: { type: 'cards', show: 2, pop: true } },
    { ch: 1, sp: 'A', en: 'At noon they will be waiting outside the hall.', cn: '中午他們會在大廳外面等。',
      hi: [{ t: 'will be waiting', cn: '那一刻還在等', k: 'cont', c: 4 }], vis: { type: 'cards', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: '第三張最實用：告訴對方那段時間你沒空，請他換時間。',
      hi: [{ t: '那段時間你沒空', k: 'busy', c: 2 }], vis: { type: 'cards', show: 3, pop: true } },
    { ch: 1, sp: 'A', en: "I won't be opening the shop on Sunday.", cn: '星期天我不會開店。',
      hi: [{ t: "won't be opening", cn: '那天整天都不開', k: 'busy', c: 2 }], vis: { type: 'cards', show: 3, lit: 2 } },
    { ch: 1, sp: 'N', zh: '三張卡的動詞都加了 ing，而中間那個 be 一個字都不能少。', vis: { type: 'cards', show: 3 } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: '肯定句四塊：主詞、will、be，再加一個動詞加 ing。',
      hi: [{ t: 'will', k: 'cont', c: 3 }],
      vis: { type: 'pattern', kick: 'will be + V-ing', rows: [
        { lab: '我', blocks: [{ t: 'I', k: 's' }, { t: 'will be', k: 'n' }, { t: 'reading', k: 'v' }, { t: 'at eight', k: 'o' }] },
        { lab: '他們', blocks: [{ t: 'They', k: 's' }, { t: 'will be', k: 'n' }, { t: 'walking', k: 'v' }, { t: 'by then', k: 'o' }] }
      ], note: '主詞再怎麼換，中間永遠是 will be' } },
    { ch: 2, sp: 'N', zh: '否定把 not 縮在 will 後面，be 和 V-ing 完全不動。',
      hi: [{ t: 'not', k: 'busy', c: 2 }],
      vis: { type: 'pattern', kick: "won't be + V-ing", rows: [
        { lab: '肯定', blocks: [{ t: 'She', k: 's' }, { t: 'will be', k: 'n' }, { t: 'cooking', k: 'v' }, { t: 'at six', k: 'o' }] },
        { lab: '否定', blocks: [{ t: 'She', k: 's' }, { t: "won't be", k: 'n' }, { t: 'cooking', k: 'v' }, { t: 'at six', k: 'o' }] }
      ], note: '不要寫成 will be not' } },
    { ch: 2, sp: 'N', zh: '問句把 Will 搬到最前面，後面兩塊留在原位，問安排很客氣。',
      hi: [{ t: '搬到最前面', k: 'cont', c: 3 }],
      vis: { type: 'pattern', kick: 'Question', rows: [
        { lab: '陳述', blocks: [{ t: 'You', k: 's' }, { t: 'will be', k: 'n' }, { t: 'using', k: 'v' }, { t: 'the car', k: 'o' }] },
        { lab: '問句', blocks: [{ t: 'Will', k: 'n' }, { t: 'you', k: 's' }, { t: 'be using', k: 'v' }, { t: 'the car', k: 'o' }] }
      ] } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: '來聽 Nina 和 Leo 在車站，注意每一句前面的時刻。', vis: { type: 'scene', art: 'dg20261118a2_board' } },
    { ch: 3, sp: 'A', en: 'Our train leaves at six twenty.', cn: '我們的車六點二十分開。', vis: { type: 'scene', art: 'dg20261118a2_machine' } },
    { ch: 3, sp: 'T', en: 'Good. At seven I will be sleeping in my seat.', cn: '太好了，七點我會在座位上睡覺。',
      hi: [{ t: 'will be sleeping', cn: '七點那一刻還在睡', k: 'cont', c: 3 }], vis: { type: 'scene', art: 'dg20261118a2_bench' } },
    { ch: 3, sp: 'N', zh: '他先講七點，再講那一刻正在做的事，順序跟中文一樣。',
      hi: [{ t: '那一刻正在做', k: 'cont', c: 3 }], vis: { type: 'scene', art: 'dg20261118a2_qmark' } },
    { ch: 3, sp: 'A', en: "Don't sleep too long. I will be waking you at eight.", cn: '不要睡太久，八點我會叫你。',
      hi: [{ t: 'will be waking', cn: '八點那一刻在叫人', k: 'cont', c: 3 }], vis: { type: 'scene', art: 'dg20261118a2_ringing' } },
    { ch: 3, sp: 'T', en: 'Will you be reading the whole way?', cn: '你會一路都在看書嗎？',
      hi: [{ t: 'Will you be reading', cn: '問她的安排', k: 'cont', c: 4 }], vis: { type: 'scene', art: 'dg20261118a2_backpack' } },
    { ch: 3, sp: 'A', en: 'Yes, and I will be watching the coast as well.', cn: '會，而且我也會一邊看海岸。',
      hi: [{ t: 'will be watching', cn: '同一段時間兩件事', k: 'cont', c: 4 }], vis: { type: 'scene', art: 'dg20261118a2_seaview' } },
    { ch: 3, sp: 'N', zh: '問安排的時候用 Will you be，比直接問要不要客氣很多。',
      hi: [{ t: '問安排', k: 'cont', c: 4 }], vis: { type: 'scene', art: 'dg20261118a2_gate2' } },
    { ch: 3, sp: 'T', en: 'At noon we will be eating our lunch boxes.', cn: '中午我們會正在吃便當。',
      hi: [{ t: 'will be eating', cn: '中午那一刻在吃', k: 'cont', c: 3 }], vis: { type: 'scene', art: 'dg20261118a2_bento' } },
    { ch: 3, sp: 'A', en: "After that I won't be talking much.", cn: '吃完我就不太想講話了。',
      hi: [{ t: "won't be talking", cn: '那段時間安靜', k: 'busy', c: 2 }], vis: { type: 'scene', art: 'dg20261118a2_wave' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '同一件事，兩種形狀。中文都是「我會打電話給媽媽」，英文的畫面不一樣。',
      vis: { type: 'vs', sm: true, kick: '會發生 vs 正在做',
        a: { w: 'I will call my mother tonight.', def: '我今天晚上會打電話給媽媽。', cn: '只說會發生' },
        b: { w: 'At nine I will be calling my mother.', def: '九點我會正在打電話給媽媽。', cn: '那一刻正在做' } } },
    { ch: 4, sp: 'T', en: 'I will call my mother tonight.', cn: '我今天晚上會打電話給媽媽。',
      hi: [{ t: 'will call', cn: '只交代會做', k: 'base', c: 1 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '會發生 vs 正在做',
        a: { w: 'I will call my mother tonight.', def: '我今天晚上會打電話給媽媽。', cn: '只說會發生' },
        b: { w: 'At nine I will be calling my mother.', def: '九點我會正在打電話給媽媽。', cn: '那一刻正在做' } } },
    { ch: 4, sp: 'A', en: 'At nine I will be calling my mother.', cn: '九點我會正在打電話給媽媽。',
      hi: [{ t: 'will be calling', cn: '九點那一刻在講電話', k: 'cont', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '會發生 vs 正在做',
        a: { w: 'I will call my mother tonight.', def: '我今天晚上會打電話給媽媽。', cn: '只說會發生' },
        b: { w: 'At nine I will be calling my mother.', def: '九點我會正在打電話給媽媽。', cn: '那一刻正在做' } } },
    { ch: 4, sp: 'N', zh: '左邊只告訴你這件事會發生，右邊讓你看到九點那一秒的畫面。',
      vis: { type: 'vs', sm: true, kick: '會發生 vs 正在做',
        a: { w: 'I will call my mother tonight.', def: '我今天晚上會打電話給媽媽。', cn: '只說會發生' },
        b: { w: 'At nine I will be calling my mother.', def: '九點我會正在打電話給媽媽。', cn: '那一刻正在做' } } },
    { ch: 4, sp: 'N', zh: '再看一組，這次差在你是要答應別人，還是要請他換時間。',
      vis: { type: 'vs', sm: true, kick: '答應 vs 換時間',
        a: { w: 'We will clean the kitchen after dinner.', def: '晚餐後我們會打掃廚房。', cn: '答應會做' },
        b: { w: 'We will be cleaning the kitchen after dinner.', def: '晚餐後我們會正在打掃廚房。', cn: '那段時間在忙' } } },
    { ch: 4, sp: 'A', en: 'We will clean the kitchen after dinner.', cn: '晚餐後我們會打掃廚房。',
      hi: [{ t: 'will clean', cn: '答應會做', k: 'base', c: 1 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '答應 vs 換時間',
        a: { w: 'We will clean the kitchen after dinner.', def: '晚餐後我們會打掃廚房。', cn: '答應會做' },
        b: { w: 'We will be cleaning the kitchen after dinner.', def: '晚餐後我們會正在打掃廚房。', cn: '那段時間在忙' } } },
    { ch: 4, sp: 'T', en: 'We will be cleaning the kitchen after dinner.', cn: '晚餐後我們會正在打掃廚房。',
      hi: [{ t: 'will be cleaning', cn: '那段時間別來', k: 'cont', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '答應 vs 換時間',
        a: { w: 'We will clean the kitchen after dinner.', def: '晚餐後我們會打掃廚房。', cn: '答應會做' },
        b: { w: 'We will be cleaning the kitchen after dinner.', def: '晚餐後我們會正在打掃廚房。', cn: '那段時間在忙' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '不確定用哪一個的時候，照順序問自己三句話。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一句：句子裡有指定的時刻嗎？有的話先把它留著。',
      hi: [{ t: '指定的時刻', k: 'cont', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'T', en: 'At four she will be queuing for the bus.', cn: '四點她會在排公車。',
      hi: [{ t: 'At four', cn: '時刻先出現', k: 'cont', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二句：那一刻動作還在跑嗎？還在跑就加 be 和 ing。',
      hi: [{ t: '還在跑', k: 'cont', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'A', en: 'By then we will be standing on the bridge.', cn: '到那時候我們會站在橋上。',
      hi: [{ t: 'will be standing', cn: '那一刻人在橋上', k: 'cont', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '第三句：你只想說會不會發生？那就回到 will 加原形動詞。',
      hi: [{ t: '會不會發生', k: 'base', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'T', en: 'I will book two seats for us.', cn: '我會幫我們訂兩個位子。',
      hi: [{ t: 'will book', cn: '只交代結果', k: 'base', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說。看完中文先自己講一次英文，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：朋友問你明天七點方便講電話嗎，那時候你正在洗澡。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '朋友問你明天七點方便講電話嗎，那時候你正在洗澡。' } },
    { ch: 6, sp: 'A', en: 'At seven I will be taking a shower.', cn: '七點我會正在洗澡。',
      hi: [{ t: 'will be taking', cn: '那一刻正在做', k: 'cont', c: 3 }],
      vis: { type: 'speak', n: 1, show: true, sit: '朋友問你明天七點方便講電話嗎，那時候你正在洗澡。', a: 'At seven I will be taking a shower.' } },
    { ch: 6, sp: 'N', zh: '情境二：你想禮貌地問同事今天下午會不會用那台印表機。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '你想禮貌地問同事今天下午會不會用那台印表機。' } },
    { ch: 6, sp: 'T', en: 'Will you be using the printer this afternoon?', cn: '你今天下午會用印表機嗎？',
      hi: [{ t: 'Will you be using', cn: '問安排，比較客氣', k: 'cont', c: 4 }],
      vis: { type: 'speak', n: 2, show: true, sit: '你想禮貌地問同事今天下午會不會用那台印表機。', a: 'Will you be using the printer this afternoon?' } },
    { ch: 6, sp: 'N', zh: '情境三：你要告訴室友，電影那兩個小時你不會看手機。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '你要告訴室友，電影那兩個小時你不會看手機。' } },
    { ch: 6, sp: 'A', en: "I won't be looking at my phone during the movie.", cn: '看電影的時候我不會看手機。',
      hi: [{ t: "won't be looking", cn: '那段時間都不做', k: 'busy', c: 2 }],
      vis: { type: 'speak', n: 3, show: true, sit: '你要告訴室友，電影那兩個小時你不會看手機。', a: "I won't be looking at my phone during the movie." } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結：先釘一個時刻，那一刻動作還在跑就加 be 和 ing，只講結果就留 will 加原形動詞。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '下次講未來之前，先問自己一句：我要講結果，還是要給對方一個畫面。', vis: { type: 'end' } }
  ]
};
