/* ============================================================
   B2 Read 文法影片解說 — dg20261118b1p（2026-11-18 每日文法 B1+・when I do and when I've done）
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
    /* 核心卡 1：時鐘——時間子句只負責報時 */
    dg20261118b1p_dial: svg(
      '<circle cx="100" cy="76" r="46" fill="'+S+'" '+st+'/>'
     +'<circle cx="100" cy="76" r="5" fill="'+D+'"/>'
     +'<g '+th(4)+'><line x1="100" y1="76" x2="100" y2="44"/><line x1="100" y1="76" x2="124" y2="76"/></g>'
     +'<path d="M100 18 v10" fill="none" '+th(3)+'/>'),
    /* 核心卡 2：旗子——主句才放 will */
    dg20261118b1p_flagpost: svg(
      '<path d="M66 20 v110" fill="none" '+th(5)+'/>'
     +'<path d="M66 24 h76 l-16 20 l16 20 H66 Z" fill="'+A+'" '+st+'/>'
     +'<path d="M44 130 h48" fill="none" '+th(4)+'/>'),
    /* 核心卡 3：打勾的方盒——先做完才接下去 */
    dg20261118b1p_tickbox: svg(
      '<rect x="36" y="40" width="128" height="76" rx="10" fill="#fff" '+st+'/>'
     +'<rect x="50" y="56" width="30" height="30" rx="5" fill="'+L+'" '+st+'/>'
     +chk(132,78,20)),
    /* 情境 1：修車廠 */
    dg20261118b1p_garage: svg(
      '<rect x="22" y="48" width="156" height="78" rx="6" fill="'+L+'" '+st+'/>'
     +'<path d="M22 48 l78 -28 l78 28" fill="'+A+'" '+st+'/>'
     +'<rect x="58" y="82" width="84" height="44" rx="4" fill="#fff" '+st+'/>'),
    /* 情境 2：扳手 */
    dg20261118b1p_wrench2: svg(
      '<path d="M38 112 l62 -62" fill="none" '+th(12)+'/>'
     +'<path d="M112 26 a22 22 0 1 0 30 30 l-14 -14 l-16 -16 Z" fill="'+A+'" '+st+'/>'
     +'<circle cx="40" cy="114" r="10" fill="#fff" '+st+'/>'),
    /* 情境 3：零件盒 */
    dg20261118b1p_partbox: svg(
      '<rect x="34" y="52" width="132" height="70" rx="6" fill="#d9a34a" '+st+'/>'
     +'<path d="M34 76 h132" fill="none" '+th(3)+'/>'
     +'<circle cx="74" cy="100" r="12" fill="#c9c2b8" '+st+'/>'
     +'<circle cx="126" cy="100" r="12" fill="#c9c2b8" '+st+'/>'),
    /* 情境 4：橘色問號 */
    dg20261118b1p_qm3: svg(
      '<rect x="42" y="32" width="116" height="86" rx="14" fill="'+C+'" '+st+'/>'+qb(100,75)),
    /* 情境 5：引擎 */
    dg20261118b1p_engine: svg(
      '<rect x="40" y="60" width="86" height="56" rx="6" fill="#c9c2b8" '+st+'/>'
     +'<rect x="126" y="76" width="34" height="40" rx="5" fill="'+B+'" '+st+'/>'
     +'<g '+th(4)+'><line x1="58" y1="60" x2="58" y2="40"/><line x1="82" y1="60" x2="82" y2="40"/><line x1="106" y1="60" x2="106" y2="40"/></g>'),
    /* 情境 6：估價單 */
    dg20261118b1p_invoice: svg(
      '<rect x="52" y="18" width="96" height="114" rx="6" fill="#fff" '+st+'/>'
     +'<g '+th(3)+'><line x1="68" y1="46" x2="132" y2="46"/><line x1="68" y1="68" x2="132" y2="68"/><line x1="68" y1="90" x2="110" y2="90"/></g>'
     +'<rect x="100" y="104" width="32" height="14" rx="4" fill="'+A+'"/>'),
    /* 情境 7：路邊的指示牌 */
    dg20261118b1p_roadsign: svg(
      '<path d="M100 132 v-54" fill="none" '+th(6)+'/>'
     +'<rect x="34" y="28" width="132" height="50" rx="8" fill="'+G+'" '+st+'/>'
     +'<path d="M62 53 h58 l-14 -14 M120 53 l-14 14" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>'),
    /* 情境 8：窗外下雨 */
    dg20261118b1p_rain: svg(
      '<path d="M46 72 a22 22 0 0 1 12 -40 a28 28 0 0 1 52 -2 a20 20 0 0 1 8 42 Z" fill="#aab4bf" '+st+'/>'
     +'<g stroke="'+B+'" stroke-width="5" stroke-linecap="round"><line x1="60" y1="88" x2="54" y2="114"/><line x1="92" y1="88" x2="86" y2="114"/><line x1="124" y1="88" x2="118" y2="114"/></g>'),
    /* 情境 9：刷卡機 */
    dg20261118b1p_card2: svg(
      '<rect x="56" y="30" width="88" height="100" rx="10" fill="'+L+'" '+st+'/>'
     +'<rect x="70" y="44" width="60" height="28" rx="4" fill="'+S+'" '+st+'/>'
     +'<rect x="74" y="86" width="52" height="30" rx="4" fill="#fff" '+st+'/>'
     +'<rect x="100" y="20" width="56" height="18" rx="5" fill="'+A+'" '+st+'/>'),
    /* 情境 10：車鑰匙 */
    dg20261118b1p_keys2: svg(
      '<circle cx="66" cy="60" r="26" fill="none" '+th(8)+'/>'
     +'<path d="M88 76 l48 48" fill="none" '+th(8)+'/>'
     +'<path d="M118 106 l16 -16 M132 120 l16 -16" fill="none" '+th(5)+'/>'
     +'<circle cx="66" cy="60" r="8" fill="'+A+'"/>')
  });
})();

window.GVIDEO.dg20261118b1p = {
  kind: 'gram',
  date: '2026-11-18',
  title: 'when I do and when I have done',
  titleCn: 'will 不進 when',
  titleArt: ['dg20261118b1p_dial', 'dg20261118b1p_flagpost', 'dg20261118b1p_tickbox'],
  scene: '修車廠 At the repair shop',
  sceneArt: 'dg20261118b1p_garage',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Rita', voice: 'f' },
    T: { name: 'Owen', voice: 'm' }
  },
  expr: {
    clause: { t: 'when + 現在式', cn: '時間子句不放 will', ex: 'When the part arrives, we will fit it.', exCn: '零件到的時候我們就會裝上去。', note: 'will 不進 when' },
    done: { t: 'when + 現在完成式', cn: '強調前一件先做完', ex: 'When I have paid, I will drive it home.', exCn: '我付完錢就把車開回家。', note: '順序寫進動詞' },
    cond: { t: 'if + 現在式', cn: '不確定會不會發生', ex: 'If the engine leaks again, bring it back.', exCn: '如果引擎又漏油，就再開回來。', note: 'if 留給沒把握的事' }
  },
  chapters: [
    { cn: '開場' }, { cn: '三張卡' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  cards: [
    { art: 'dg20261118b1p_dial', lab: '時間子句', who: '只用現在式' },
    { art: 'dg20261118b1p_flagpost', lab: '主句', who: 'will 住在這裡' },
    { art: 'dg20261118b1p_tickbox', lab: '先做完', who: '換現在完成式' }
  ],
  flow: [
    { q: '哪一句只是時間標記？', a: '用現在式', en: 'when / until + 現在式' },
    { q: '哪一句才是你要宣告的？', a: '放 will', en: '主詞 + will + 原形動詞' },
    { q: '要強調前一件先做完嗎？', a: '用完成式', en: 'when + have + 過去分詞' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: '中文說「等零件到了，我就會打電話給你」，兩邊都聽得出未來。英文只准標一次。', vis: { type: 'title' } },

    /* ---- 1 三張卡 ---- */
    { ch: 1, sp: 'N', zh: '今天三張卡講的是同一個句子裡的分工。', vis: { type: 'cards', show: 0 } },
    { ch: 1, sp: 'N', zh: '第一張：負責報時的那一句叫時間子句，裡面只用現在式。',
      hi: [{ t: '只用現在式', k: 'clause', c: 3 }], vis: { type: 'cards', show: 1, pop: true } },
    { ch: 1, sp: 'T', en: 'When the part arrives, we will fit it.', cn: '零件到的時候我們就會裝上去。',
      hi: [{ t: 'When the part arrives', cn: '子句回到現在式', k: 'clause', c: 3 }], vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'N', zh: '第二張：真正要宣告的那一句才是主句，will 只住在這裡。',
      hi: [{ t: 'will 只住在這裡', k: 'clause', c: 4 }], vis: { type: 'cards', show: 2, pop: true } },
    { ch: 1, sp: 'A', en: 'Until the test is over, I will stay in the office.', cn: '測試結束之前我會待在辦公室。',
      hi: [{ t: 'I will stay', cn: '未來標在主句', k: 'clause', c: 4 }], vis: { type: 'cards', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: '第三張：如果你想強調前一件事必須先收尾，子句換成現在完成式。',
      hi: [{ t: '先收尾', k: 'done', c: 2 }], vis: { type: 'cards', show: 3, pop: true } },
    { ch: 1, sp: 'A', en: 'When I have paid, I will drive it home.', cn: '我付完錢就把車開回家。',
      hi: [{ t: 'When I have paid', cn: '付完才開走', k: 'done', c: 2 }], vis: { type: 'cards', show: 3, lit: 2 } },
    { ch: 1, sp: 'N', zh: '三張卡加起來只有一條規則：整句的未來標一次，標在主句。', vis: { type: 'cards', show: 3 } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: '基本形狀：連接詞、子句的現在式動詞，逗號之後才是 will。',
      hi: [{ t: '現在式', k: 'clause', c: 3 }],
      vis: { type: 'pattern', kick: 'when + 現在式 → will', rows: [
        { lab: '子句', blocks: [{ t: 'When', k: 'n' }, { t: 'the bell', k: 's' }, { t: 'rings', k: 'v' }] },
        { lab: '主句', blocks: [{ t: 'we', k: 's' }, { t: 'will open', k: 'v' }, { t: 'the door', k: 'o' }] }
      ], note: '子句裡沒有 will，一個都沒有' } },
    { ch: 2, sp: 'N', zh: '強調先做完的時候，子句的動詞換成 have 加過去分詞。',
      hi: [{ t: 'have 加過去分詞', k: 'done', c: 2 }],
      vis: { type: 'pattern', kick: 'when + have + 過去分詞', rows: [
        { lab: '同時', blocks: [{ t: 'When', k: 'n' }, { t: 'he', k: 's' }, { t: 'calls', k: 'v' }, { t: 'I will go', k: 'o' }] },
        { lab: '先做完', blocks: [{ t: 'When', k: 'n' }, { t: 'he', k: 's' }, { t: 'has called', k: 'v' }, { t: 'I will go', k: 'o' }] }
      ], note: '完成式只負責順序，不負責未來' } },
    { ch: 2, sp: 'N', zh: '同一個形狀也收 until、once、as soon as 和 by the time。',
      hi: [{ t: 'until', k: 'clause', c: 3 }],
      vis: { type: 'family', art: 'dg20261118b1p_dial', kick: '一整家族', items: [
        { t: 'when' }, { t: 'until' }, { t: 'as soon as' }, { t: 'by the time' }
      ] } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: '來聽 Rita 和 Owen 在修車廠，注意每一句的 will 落在哪一邊。', vis: { type: 'scene', art: 'dg20261118b1p_garage' } },
    { ch: 3, sp: 'T', en: 'The brake pad is worn. You need a new one.', cn: '煞車來令片磨平了，要換一片新的。', vis: { type: 'scene', art: 'dg20261118b1p_wrench2' } },
    { ch: 3, sp: 'A', en: 'How soon can you get the part?', cn: '零件多快拿得到？', vis: { type: 'scene', art: 'dg20261118b1p_partbox' } },
    { ch: 3, sp: 'T', en: 'Tomorrow morning. When it comes in, we will fit it the same day.', cn: '明天早上。一到貨我們當天就裝。',
      hi: [{ t: 'When it comes in', cn: '子句用現在式', k: 'clause', c: 3 }], vis: { type: 'scene', art: 'dg20261118b1p_qm3' } },
    { ch: 3, sp: 'N', zh: '他的 will 在主句，when 後面回到現在式，整句只標一次未來。',
      hi: [{ t: '只標一次未來', k: 'clause', c: 3 }], vis: { type: 'scene', art: 'dg20261118b1p_engine' } },
    { ch: 3, sp: 'A', en: 'And if the shop has none in stock?', cn: '那如果店裡沒有庫存呢？',
      hi: [{ t: 'if', cn: '沒把握的事', k: 'cond', c: 1 }], vis: { type: 'scene', art: 'dg20261118b1p_invoice' } },
    { ch: 3, sp: 'T', en: 'Then we will order one from Taichung.', cn: '那我們就從台中調一片。',
      hi: [{ t: 'we will order', cn: '未來還是在主句', k: 'cond', c: 1 }], vis: { type: 'scene', art: 'dg20261118b1p_roadsign' } },
    { ch: 3, sp: 'N', zh: '她用 if，因為缺不缺貨沒人說得準；形狀跟 when 一樣是現在式。',
      hi: [{ t: '沒人說得準', k: 'cond', c: 1 }], vis: { type: 'scene', art: 'dg20261118b1p_rain' } },
    { ch: 3, sp: 'A', en: 'Call me when you have finished the test drive, not before.', cn: '試車做完再打給我，不要提早。',
      hi: [{ t: 'when you have finished', cn: '做完才打', k: 'done', c: 2 }], vis: { type: 'scene', art: 'dg20261118b1p_card2' } },
    { ch: 3, sp: 'T', en: 'Understood. Until that is done, I will keep the keys here.', cn: '了解。在那之前我會把鑰匙留在這裡。',
      hi: [{ t: 'Until that is done', cn: 'until 也用現在式', k: 'clause', c: 4 }], vis: { type: 'scene', art: 'dg20261118b1p_keys2' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '同一個連接詞，子句裡換一種時態，順序就不一樣了。',
      vis: { type: 'vs', sm: true, kick: '幾乎同時 vs 先做完',
        a: { w: 'When the mechanic calls, I will go over.', def: '技師打電話來我就過去。', cn: '兩件事幾乎同時' },
        b: { w: 'When the mechanic has called, I will go over.', def: '技師打完電話我才過去。', cn: '打完才過去' } } },
    { ch: 4, sp: 'A', en: 'When the mechanic calls, I will go over.', cn: '技師打電話來我就過去。',
      hi: [{ t: 'calls', cn: '單純報時', k: 'clause', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '幾乎同時 vs 先做完',
        a: { w: 'When the mechanic calls, I will go over.', def: '技師打電話來我就過去。', cn: '兩件事幾乎同時' },
        b: { w: 'When the mechanic has called, I will go over.', def: '技師打完電話我才過去。', cn: '打完才過去' } } },
    { ch: 4, sp: 'T', en: 'When the mechanic has called, I will go over.', cn: '技師打完電話我才過去。',
      hi: [{ t: 'has called', cn: '先做完才接下去', k: 'done', c: 2 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '幾乎同時 vs 先做完',
        a: { w: 'When the mechanic calls, I will go over.', def: '技師打電話來我就過去。', cn: '兩件事幾乎同時' },
        b: { w: 'When the mechanic has called, I will go over.', def: '技師打完電話我才過去。', cn: '打完才過去' } } },
    { ch: 4, sp: 'N', zh: '左邊電話一響你就動身，右邊要等那通電話講完。兩句都沒有 will 在子句裡。',
      vis: { type: 'vs', sm: true, kick: '幾乎同時 vs 先做完',
        a: { w: 'When the mechanic calls, I will go over.', def: '技師打電話來我就過去。', cn: '兩件事幾乎同時' },
        b: { w: 'When the mechanic has called, I will go over.', def: '技師打完電話我才過去。', cn: '打完才過去' } } },
    { ch: 4, sp: 'N', zh: '再看一組。形狀一模一樣，差的是你對那件事有多少把握。',
      vis: { type: 'vs', sm: true, kick: 'when 確定 vs if 不確定',
        a: { w: 'When the invoice comes, I will pay it.', def: '帳單來的時候我會付。', cn: '帳單一定會來' },
        b: { w: 'If the invoice is wrong, I will call them.', def: '帳單如果有錯我會打電話。', cn: '不一定會有錯' } } },
    { ch: 4, sp: 'A', en: 'When the invoice comes, I will pay it.', cn: '帳單來的時候我會付。',
      hi: [{ t: 'When', cn: '一定會發生', k: 'clause', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: 'when 確定 vs if 不確定',
        a: { w: 'When the invoice comes, I will pay it.', def: '帳單來的時候我會付。', cn: '帳單一定會來' },
        b: { w: 'If the invoice is wrong, I will call them.', def: '帳單如果有錯我會打電話。', cn: '不一定會有錯' } } },
    { ch: 4, sp: 'T', en: 'If the invoice is wrong, I will call them.', cn: '帳單如果有錯我會打電話。',
      hi: [{ t: 'If', cn: '不確定會不會', k: 'cond', c: 1 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: 'when 確定 vs if 不確定',
        a: { w: 'When the invoice comes, I will pay it.', def: '帳單來的時候我會付。', cn: '帳單一定會來' },
        b: { w: 'If the invoice is wrong, I will call them.', def: '帳單如果有錯我會打電話。', cn: '不一定會有錯' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '一句話裡有兩個動作的時候，照順序問自己三句話。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一句：哪一邊只是時間標記？那一邊回到現在式。',
      hi: [{ t: '時間標記', k: 'clause', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'T', en: 'As soon as the oil is changed, the car is yours.', cn: '油一換好，車就可以牽走。',
      hi: [{ t: 'As soon as the oil is changed', cn: '子句用現在式', k: 'clause', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二句：哪一邊才是你要宣告的？那一邊放 will，而且只放一次。',
      hi: [{ t: '放 will', k: 'clause', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'A', en: 'Once the bill is settled, we will post the receipt.', cn: '帳一結清，我們就會寄出收據。',
      hi: [{ t: 'we will post', cn: '未來只在主句', k: 'clause', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '第三句：要不要強調前一件先做完？要的話子句換成現在完成式。',
      hi: [{ t: '前一件先做完', k: 'done', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'T', en: 'After the shop has closed, the gate locks itself.', cn: '店打烊之後，門會自己上鎖。',
      hi: [{ t: 'has closed', cn: '打烊在前', k: 'done', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說。看完中文先自己講一次英文，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：你要說「公車到的時候我會傳訊息給你」。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '你要說「公車到的時候我會傳訊息給你」。' } },
    { ch: 6, sp: 'A', en: 'When the bus gets here, I will send you a message.', cn: '公車到的時候我會傳訊息給你。',
      hi: [{ t: 'gets', cn: '子句用現在式', k: 'clause', c: 3 }],
      vis: { type: 'speak', n: 1, show: true, sit: '你要說「公車到的時候我會傳訊息給你」。', a: 'When the bus gets here, I will send you a message.' } },
    { ch: 6, sp: 'N', zh: '情境二：你要說「我把合約看完才會簽」，強調看完在前。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '你要說「我把合約看完才會簽」，強調看完在前。' } },
    { ch: 6, sp: 'T', en: 'When I have read the contract, I will sign it.', cn: '我把合約看完才會簽。',
      hi: [{ t: 'have read', cn: '看完在前', k: 'done', c: 2 }],
      vis: { type: 'speak', n: 2, show: true, sit: '你要說「我把合約看完才會簽」，強調看完在前。', a: 'When I have read the contract, I will sign it.' } },
    { ch: 6, sp: 'N', zh: '情境三：你要說「萬一下雨，我們就改成星期天」。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '你要說「萬一下雨，我們就改成星期天」。' } },
    { ch: 6, sp: 'A', en: 'If it rains, we will move it to Sunday.', cn: '萬一下雨，我們就改到星期天。',
      hi: [{ t: 'If it rains', cn: '不確定的事用 if', k: 'cond', c: 1 }],
      vis: { type: 'speak', n: 3, show: true, sit: '你要說「萬一下雨，我們就改成星期天」。', a: 'If it rains, we will move it to Sunday.' } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結：時間子句用現在式，強調先做完就換現在完成式，will 只留在主句。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '寫完一句話回頭數一數，整句應該只有一個 will。', vis: { type: 'end' } }
  ]
};
