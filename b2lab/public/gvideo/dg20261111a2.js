/* ============================================================
   B2 Read 文法影片解說 — dg20261111a2（2026-11-11 每日文法 A2・I will and I'm going to）
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
    /* 核心卡 1：燈泡——這一秒才決定 */
    dg20261111a2_bulb: svg(
      '<path d="M100 20 a30 30 0 0 1 17 55 c-4 3 -5 6 -5 10 v8 H88 v-8 c0 -4 -1 -7 -5 -10 a30 30 0 0 1 17 -55 Z" fill="'+Y+'" '+st+'/>'
     +'<rect x="88" y="93" width="24" height="9" rx="2" fill="#c9c2b8" '+st+'/>'
     +'<g '+th(4)+'><line x1="100" y1="6" x2="100" y2="12"/><line x1="54" y1="26" x2="60" y2="32"/><line x1="146" y1="26" x2="140" y2="32"/></g>'
     +'<path d="M74 126 h52" fill="none" '+th(3)+'/>'),
    /* 核心卡 2：購物清單——昨天就寫好的打算 */
    dg20261111a2_list: svg(
      '<rect x="56" y="16" width="88" height="116" rx="6" fill="#fff" '+st+'/>'
     +'<rect x="84" y="8" width="32" height="14" rx="5" fill="'+A+'" '+st+'/>'
     +'<g '+th(3)+'><line x1="76" y1="48" x2="124" y2="48"/><line x1="76" y1="72" x2="124" y2="72"/><line x1="76" y1="96" x2="112" y2="96"/></g>'
     +'<circle cx="66" cy="48" r="5" fill="'+A+'"/>'),
    /* 核心卡 3：烏雲——眼前就有證據 */
    dg20261111a2_clouds: svg(
      '<path d="M48 76 a22 22 0 0 1 10 -40 a28 28 0 0 1 52 -4 a20 20 0 0 1 10 44 Z" fill="#aab4bf" '+st+'/>'
     +'<g stroke="'+B+'" stroke-width="5" stroke-linecap="round"><line x1="62" y1="92" x2="56" y2="116"/><line x1="90" y1="92" x2="84" y2="116"/><line x1="118" y1="92" x2="112" y2="116"/></g>'),
    /* 情境 1：超市自動門 */
    dg20261111a2_door: svg(
      '<rect x="22" y="30" width="156" height="100" rx="6" fill="'+C+'" '+st+'/>'
     +'<rect x="34" y="52" width="60" height="78" rx="3" fill="'+S+'" '+st+'/>'
     +'<rect x="106" y="52" width="60" height="78" rx="3" fill="'+S+'" '+st+'/>'
     +'<path d="M22 30 h156 l-10 -14 H32 Z" fill="'+A+'" '+st+'/>'),
    /* 情境 2：便條紙上的購物清單 */
    dg20261111a2_memo: svg(
      '<rect x="44" y="28" width="112" height="96" rx="5" fill="'+Y+'" '+st+'/>'
     +'<g '+th(2.5)+'><line x1="62" y1="54" x2="138" y2="54"/><line x1="62" y1="74" x2="138" y2="74"/><line x1="62" y1="94" x2="118" y2="94"/></g>'
     +'<path d="M150 112 l20 14" fill="none" '+th(3)+'/>'),
    /* 情境 3：湯鍋 */
    dg20261111a2_pot: svg(
      '<path d="M40 60 h120 l-10 64 H50 Z" fill="'+S+'" '+st+'/>'
     +'<path d="M30 60 h140" fill="none" '+th(4)+'/>'
     +'<path d="M78 42 q8 -14 0 -26 M110 42 q8 -14 0 -26" fill="none" '+th(3)+'/>'),
    /* 情境 4：牆上的月曆 */
    dg20261111a2_calendar2: svg(
      '<rect x="36" y="32" width="128" height="96" rx="6" fill="#fff" '+st+'/>'
     +'<path d="M36 58 h128" fill="none" '+th(3)+'/>'
     +'<g '+th(3)+'><line x1="66" y1="20" x2="66" y2="40"/><line x1="134" y1="20" x2="134" y2="40"/></g>'
     +'<rect x="92" y="74" width="26" height="24" rx="4" fill="'+A+'"/>'),
    /* 情境 5：購物推車 */
    dg20261111a2_cart: svg(
      '<path d="M28 36 h18 l20 62 h70 l14 -44 H58" fill="none" '+th(4)+'/>'
     +'<path d="M62 60 h82 l-12 32 H72 Z" fill="'+L+'" '+st+'/>'
     +'<circle cx="76" cy="118" r="10" fill="#fff" '+st+'/>'
     +'<circle cx="126" cy="118" r="10" fill="#fff" '+st+'/>'),
    /* 情境 6：靈光一閃的對話框 */
    dg20261111a2_idea2: svg(
      '<path d="M26 28 H158 a14 14 0 0 1 14 14 V84 a14 14 0 0 1 -14 14 H72 L50 120 V98 H26 a14 14 0 0 1 -14 -14 V42 a14 14 0 0 1 14 -14 Z" fill="#fff" '+st+'/>'
     +'<circle cx="92" cy="62" r="18" fill="'+Y+'" '+st+'/>'
     +'<g '+th(3)+'><line x1="92" y1="30" x2="92" y2="38"/><line x1="124" y1="62" x2="132" y2="62"/></g>'),
    /* 情境 7：盒子裡的雞蛋 */
    dg20261111a2_eggs: svg(
      '<rect x="34" y="66" width="132" height="52" rx="6" fill="'+L+'" '+st+'/>'
     +'<ellipse cx="66" cy="62" rx="15" ry="19" fill="#fff" '+st+'/>'
     +'<ellipse cx="100" cy="62" rx="15" ry="19" fill="#fff" '+st+'/>'
     +'<ellipse cx="134" cy="62" rx="15" ry="19" fill="#fff" '+st+'/>'),
    /* 情境 8：伸出去扶住的手 */
    dg20261111a2_hand: svg(
      '<path d="M62 130 V76 a9 9 0 0 1 18 0 V42 a9 9 0 0 1 18 0 V74 a9 9 0 0 1 18 0 V80 a9 9 0 0 1 18 0 v32 a26 26 0 0 1 -26 26 Z" fill="'+L+'" '+st+'/>'
     +'<path d="M62 98 l-20 -14" fill="none" '+th(4)+'/>'),
    /* 情境 9：結帳隊伍 */
    dg20261111a2_queue: svg(
      '<rect x="20" y="92" width="160" height="14" rx="4" fill="'+L+'" '+st+'/>'
     +'<g '+st+' fill="#fff"><circle cx="54" cy="52" r="12"/><circle cx="100" cy="52" r="12"/><circle cx="146" cy="52" r="12"/></g>'
     +'<g fill="none" '+th(3)+'><path d="M54 64 v26"/><path d="M100 64 v26"/><path d="M146 64 v26"/></g>'),
    /* 情境 10：零錢與鈔票 */
    dg20261111a2_coins: svg(
      '<rect x="30" y="76" width="92" height="44" rx="5" fill="'+G+'" '+st+'/>'
     +'<circle cx="76" cy="98" r="12" fill="#fff" '+st+'/>'
     +'<circle cx="146" cy="60" r="20" fill="'+Y+'" '+st+'/>'
     +'<circle cx="146" cy="96" r="20" fill="'+Y+'" '+st+'/>')
  });
})();

window.GVIDEO.dg20261111a2 = {
  kind: 'gram',
  date: '2026-11-11',
  title: "I'll or I'm going to",
  titleCn: '你是什麼時候決定的',
  titleArt: ['dg20261111a2_bulb', 'dg20261111a2_list', 'dg20261111a2_clouds'],
  scene: '超市 At the supermarket',
  sceneArt: 'dg20261111a2_door',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Lily', voice: 'f' },
    T: { name: 'Sam', voice: 'm' }
  },
  expr: {
    now: { t: "I'll + 原形動詞", cn: '我來做（這一秒決定）', ex: "I'll take the small basket.", exCn: '我拿小籃子。', note: '決定和說話同時發生' },
    gon: { t: 'be going to + 原形動詞', cn: '開口之前就打算好了', ex: "We're going to make soup tonight.", exCn: '我們今天晚上要煮湯。', note: '中間的 to 不能省' },
    prd: { t: 'be going to（看得出來）', cn: '照現在這樣就會這樣', ex: 'That paper bag is going to tear.', exCn: '那個紙袋要破了。', note: '眼前有東西可以指' }
  },
  chapters: [
    { cn: '開場' }, { cn: '三張卡' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  cards: [
    { art: 'dg20261111a2_bulb', lab: '這一秒決定', who: "用 I'll" },
    { art: 'dg20261111a2_list', lab: '早就打算好', who: '用 going to' },
    { art: 'dg20261111a2_clouds', lab: '看得出來', who: '也用 going to' }
  ],
  flow: [
    { q: '這是我剛剛才決定的嗎？', a: "I'll", en: '主詞 + will + 原形動詞' },
    { q: '我開口前就打算好了嗎？', a: 'going to', en: '主詞 + be going to + 原形動詞' },
    { q: '眼前有東西可以指嗎？', a: 'going to', en: '主詞 + be going to + 原形動詞' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: '中文的「我要去買菜」聽不出你是什麼時候決定的。英文一定要講清楚。', vis: { type: 'title' } },

    /* ---- 1 三張卡 ---- */
    { ch: 1, sp: 'N', zh: '今天只要記三張卡。三張講的都是未來，差的是決定。', vis: { type: 'cards', show: 0 } },
    { ch: 1, sp: 'N', zh: '第一張：你看到眼前的狀況，這一秒才決定要做。',
      hi: [{ t: '這一秒才決定', k: 'now', c: 3 }], vis: { type: 'cards', show: 1, pop: true } },
    { ch: 1, sp: 'T', en: "I'll take the small basket.", cn: '我拿小籃子。',
      hi: [{ t: "I'll take", cn: '剛剛才決定', k: 'now', c: 3 }], vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'N', zh: '第二張：決定在你開口之前就做好了，你只是把它說出來。',
      hi: [{ t: '開口之前就做好了', k: 'gon', c: 4 }], vis: { type: 'cards', show: 2, pop: true } },
    { ch: 1, sp: 'A', en: "We're going to make soup tonight.", cn: '我們今天晚上要煮湯。',
      hi: [{ t: 'going to make', cn: '早就打算好', k: 'gon', c: 4 }], vis: { type: 'cards', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: '第三張：眼前已經有東西讓你看出結果，也用同一個形狀。',
      hi: [{ t: '看出結果', k: 'prd', c: 2 }], vis: { type: 'cards', show: 3, pop: true } },
    { ch: 1, sp: 'A', en: 'That paper bag is going to tear.', cn: '那個紙袋要破了。',
      hi: [{ t: 'is going to tear', cn: '袋子已經鼓起來了', k: 'prd', c: 2 }], vis: { type: 'cards', show: 3, lit: 2 } },
    { ch: 1, sp: 'N', zh: '三張卡後面的動詞都是字典上那個形狀，一個字母都不改。', vis: { type: 'cards', show: 3 } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: '當場決定只有兩塊：主詞加 will，再加原形動詞。',
      hi: [{ t: 'will', k: 'now', c: 3 }],
      vis: { type: 'pattern', kick: "will + base verb", rows: [
        { lab: '我來做', blocks: [{ t: 'I', k: 's' }, { t: "'ll push", k: 'v' }, { t: 'the cart', k: 'n' }] },
        { lab: '他來做', blocks: [{ t: 'Sam', k: 's' }, { t: 'will queue', k: 'v' }, { t: 'for us', k: 'o' }] }
      ], note: 'will 不隨主詞變化，動詞也不加 s' } },
    { ch: 2, sp: 'N', zh: '早就打算的那個形狀多一塊，而且前面的 be 動詞要跟主詞變。',
      hi: [{ t: 'be 動詞', k: 'gon', c: 4 }],
      vis: { type: 'pattern', kick: 'be going to + base verb', rows: [
        { lab: '我的打算', blocks: [{ t: 'I', k: 's' }, { t: 'am', k: 'n' }, { t: 'going to', k: 'n' }, { t: 'bake', k: 'v' }, { t: 'bread', k: 'o' }] },
        { lab: '她的打算', blocks: [{ t: 'She', k: 's' }, { t: 'is', k: 'n' }, { t: 'going to', k: 'n' }, { t: 'drive', k: 'v' }, { t: 'home', k: 'o' }] }
      ], note: '中間的 to 不能省，動詞還是原形' } },
    { ch: 2, sp: 'N', zh: '問句把 be 動詞搬到主詞前面，going to 三個字一起留在原位。',
      hi: [{ t: '搬到主詞前面', k: 'gon', c: 4 }],
      vis: { type: 'pattern', kick: 'Question', rows: [
        { lab: '陳述', blocks: [{ t: 'You', k: 's' }, { t: 'are', k: 'n' }, { t: 'going to', k: 'n' }, { t: 'pay', k: 'v' }, { t: 'by card', k: 'o' }] },
        { lab: '問句', blocks: [{ t: 'Are', k: 'n' }, { t: 'you', k: 's' }, { t: 'going to', k: 'n' }, { t: 'pay', k: 'v' }, { t: 'by card', k: 'o' }] }
      ] } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: '來聽 Lily 和 Sam 在超市，注意每一句的決定是什麼時候做的。', vis: { type: 'scene', art: 'dg20261111a2_door' } },
    { ch: 3, sp: 'A', en: 'I wrote this list last night.', cn: '這張清單是我昨天晚上寫的。', vis: { type: 'scene', art: 'dg20261111a2_memo' } },
    { ch: 3, sp: 'A', en: "We're going to cook for six people.", cn: '我們要煮六個人的份。',
      hi: [{ t: 'going to cook', cn: '清單昨天就寫好了', k: 'gon', c: 4 }], vis: { type: 'scene', art: 'dg20261111a2_pot' } },
    { ch: 3, sp: 'N', zh: '清單昨天晚上就寫好了，所以她用「早就打算」那個形狀。',
      hi: [{ t: '早就打算', k: 'gon', c: 4 }], vis: { type: 'scene', art: 'dg20261111a2_calendar2' } },
    { ch: 3, sp: 'T', en: "The basket is full. I'll get a cart.", cn: '籃子滿了，我去拿推車。',
      hi: [{ t: "I'll get", cn: '看到才決定', k: 'now', c: 3 }], vis: { type: 'scene', art: 'dg20261111a2_cart' } },
    { ch: 3, sp: 'N', zh: 'Sam 是低頭看到籃子滿了才決定去拿推車，決定就在那一秒。',
      hi: [{ t: '那一秒', k: 'now', c: 3 }], vis: { type: 'scene', art: 'dg20261111a2_idea2' } },
    { ch: 3, sp: 'A', en: 'Look, the eggs are going to roll off.', cn: '你看，那些蛋要滾下去了。',
      hi: [{ t: 'going to roll', cn: '已經在邊邊了', k: 'prd', c: 2 }], vis: { type: 'scene', art: 'dg20261111a2_eggs' } },
    { ch: 3, sp: 'T', en: "I'll hold the box for you.", cn: '我幫你扶著盒子。',
      hi: [{ t: "I'll hold", cn: '當場出手', k: 'now', c: 3 }], vis: { type: 'scene', art: 'dg20261111a2_hand' } },
    { ch: 3, sp: 'A', en: 'Are you going to pay by card?', cn: '你要刷卡嗎？',
      hi: [{ t: 'Are you going to', cn: '問他原本的打算', k: 'gon', c: 4 }], vis: { type: 'scene', art: 'dg20261111a2_queue' } },
    { ch: 3, sp: 'T', en: "No, I'll use cash today.", cn: '不用，今天我付現金。',
      hi: [{ t: "I'll use", cn: '排隊時才改主意', k: 'now', c: 3 }], vis: { type: 'scene', art: 'dg20261111a2_coins' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '同一件事，兩個形狀。中文都是「我去拿水」，英文的訊息不一樣。',
      vis: { type: 'vs', sm: true, kick: '這一秒 vs 早就打算',
        a: { w: "I'll fetch the water.", def: '我去拿水。', cn: '剛剛才決定' },
        b: { w: "I'm going to fetch the water.", def: '我要去拿水。', cn: '本來就打算去' } } },
    { ch: 4, sp: 'T', en: "I'll fetch the water.", cn: '我去拿水。',
      hi: [{ t: "I'll fetch", cn: '當場決定', k: 'now', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '這一秒 vs 早就打算',
        a: { w: "I'll fetch the water.", def: '我去拿水。', cn: '剛剛才決定' },
        b: { w: "I'm going to fetch the water.", def: '我要去拿水。', cn: '本來就打算去' } } },
    { ch: 4, sp: 'A', en: "I'm going to fetch the water.", cn: '我要去拿水。',
      hi: [{ t: 'going to fetch', cn: '進門前就想好了', k: 'gon', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '這一秒 vs 早就打算',
        a: { w: "I'll fetch the water.", def: '我去拿水。', cn: '剛剛才決定' },
        b: { w: "I'm going to fetch the water.", def: '我要去拿水。', cn: '本來就打算去' } } },
    { ch: 4, sp: 'N', zh: '左邊是你剛剛看到水沒了，右邊是你出門前就記得要買。',
      vis: { type: 'vs', sm: true, kick: '這一秒 vs 早就打算',
        a: { w: "I'll fetch the water.", def: '我去拿水。', cn: '剛剛才決定' },
        b: { w: "I'm going to fetch the water.", def: '我要去拿水。', cn: '本來就打算去' } } },
    { ch: 4, sp: 'N', zh: '再看一組，這次是預測。有證據和沒證據，形狀也不一樣。',
      vis: { type: 'vs', sm: true, kick: '有證據 vs 沒證據',
        a: { w: 'The queue is going to be long.', def: '隊伍會很長。', cn: '人已經排到門口' },
        b: { w: 'I think Friday will be busy.', def: '我覺得星期五會很忙。', cn: '只是我的想法' } } },
    { ch: 4, sp: 'A', en: 'The queue is going to be long.', cn: '隊伍會很長。',
      hi: [{ t: 'going to be', cn: '眼前就有證據', k: 'prd', c: 2 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '有證據 vs 沒證據',
        a: { w: 'The queue is going to be long.', def: '隊伍會很長。', cn: '人已經排到門口' },
        b: { w: 'I think Friday will be busy.', def: '我覺得星期五會很忙。', cn: '只是我的想法' } } },
    { ch: 4, sp: 'T', en: 'I think Friday will be busy.', cn: '我覺得星期五會很忙。',
      hi: [{ t: 'will be', cn: '沒有東西可以指', k: 'now', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '有證據 vs 沒證據',
        a: { w: 'The queue is going to be long.', def: '隊伍會很長。', cn: '人已經排到門口' },
        b: { w: 'I think Friday will be busy.', def: '我覺得星期五會很忙。', cn: '只是我的想法' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '不確定用哪一個的時候，照順序問自己三句話。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一句：這是我剛剛才決定的嗎？是的話，主詞加 will。',
      hi: [{ t: 'will', k: 'now', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'T', en: "The shelf is empty. I'll ask someone.", cn: '架上空了，我去問人。',
      hi: [{ t: "I'll ask", cn: '當場決定', k: 'now', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二句：我開口之前就打算好了嗎？那就換成 going to。',
      hi: [{ t: 'going to', k: 'gon', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'A', en: "I'm going to freeze half of the fish.", cn: '我要把一半的魚冷凍起來。',
      hi: [{ t: 'going to freeze', cn: '早就打算', k: 'gon', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '第三句：眼前有東西可以指嗎？有的話也用 going to。',
      hi: [{ t: '可以指', k: 'prd', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'T', en: 'The milk is going to spill.', cn: '牛奶要翻了。',
      hi: [{ t: 'going to spill', cn: '瓶子已經倒了', k: 'prd', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說。看完中文先自己講一次英文，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：你走到門口才發現在下雨，決定回去拿傘。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '你走到門口才發現在下雨，決定回去拿傘。' } },
    { ch: 6, sp: 'A', en: "I'll go back for my umbrella.", cn: '我回去拿傘。',
      hi: [{ t: "I'll go", cn: "當場決定 → I'll", k: 'now', c: 3 }],
      vis: { type: 'speak', n: 1, show: true, sit: '你走到門口才發現在下雨，決定回去拿傘。', a: "I'll go back for my umbrella." } },
    { ch: 6, sp: 'N', zh: '情境二：你上個星期就決定這個週末要去剪頭髮。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '你上個星期就決定這個週末要去剪頭髮。' } },
    { ch: 6, sp: 'T', en: "I'm going to cut my hair this weekend.", cn: '我這個週末要去剪頭髮。',
      hi: [{ t: 'going to cut', cn: '早就打算 → going to', k: 'gon', c: 4 }],
      vis: { type: 'speak', n: 2, show: true, sit: '你上個星期就決定這個週末要去剪頭髮。', a: "I'm going to cut my hair this weekend." } },
    { ch: 6, sp: 'N', zh: '情境三：你看到手機只剩一格電，想說它快沒電了。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '你看到手機只剩一格電，想說它快沒電了。' } },
    { ch: 6, sp: 'A', en: 'My phone is going to die.', cn: '我手機快沒電了。',
      hi: [{ t: 'going to die', cn: '有證據 → going to', k: 'prd', c: 2 }],
      vis: { type: 'speak', n: 3, show: true, sit: '你看到手機只剩一格電，想說它快沒電了。', a: 'My phone is going to die.' } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: "總結：剛剛才決定用 I'll，開口前就決定好或眼前有證據，都用 going to。",
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '下次講未來之前，先問自己一秒：我是什麼時候決定的。', vis: { type: 'end' } }
  ]
};
