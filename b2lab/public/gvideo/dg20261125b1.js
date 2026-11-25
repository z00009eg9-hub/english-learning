/* ============================================================
   B2 Read 文法影片解說 — dg20261125b1（2026-11-25 每日文法 B1・when / if / when I've done）
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
    /* 核心卡 1：月曆——日期已經定了 */
    dg20261125b1_cal: svg(
      '<rect x="34" y="34" width="132" height="92" rx="8" fill="#fff" '+st+'/>'
     +'<rect x="34" y="34" width="132" height="22" rx="8" fill="'+A+'" '+st+'/>'
     +'<g '+th(3)+'><line x1="62" y1="22" x2="62" y2="40"/><line x1="138" y1="22" x2="138" y2="40"/></g>'
     +'<g fill="'+L+'"><rect x="50" y="68" width="22" height="18"/><rect x="88" y="68" width="22" height="18"/><rect x="126" y="68" width="22" height="18"/></g>'
     +'<rect x="88" y="94" width="22" height="18" fill="'+G+'"/>'),
    /* 核心卡 2：打勾的清單——做完才算 */
    dg20261125b1_tick: svg(
      '<rect x="44" y="26" width="112" height="100" rx="8" fill="#fff" '+st+'/>'
     +'<g stroke="'+D+'" stroke-width="3" stroke-linecap="round"><line x1="76" y1="52" x2="140" y2="52"/><line x1="76" y1="76" x2="140" y2="76"/><line x1="76" y1="100" x2="118" y2="100"/></g>'
     +chk(62,52,8)+chk(62,76,8)),
    /* 核心卡 3：骰子——不一定發生 */
    dg20261125b1_dice: svg(
      '<rect x="52" y="44" width="96" height="96" rx="14" fill="'+Y+'" '+st+'/>'
     +'<g fill="'+D+'"><circle cx="78" cy="70" r="7"/><circle cx="122" cy="70" r="7"/><circle cx="100" cy="92" r="7"/><circle cx="78" cy="114" r="7"/><circle cx="122" cy="114" r="7"/></g>'
     +'<path d="M52 30 h96" fill="none" '+th(3)+'/>'),
    /* 情境 1：咖啡店門面 */
    dg20261125b1_cafe: svg(
      '<rect x="28" y="56" width="144" height="72" rx="6" fill="'+L+'" '+st+'/>'
     +'<path d="M22 56 h156 l-14 -24 h-128z" fill="'+R+'" '+st+'/>'
     +'<rect x="44" y="76" width="48" height="40" rx="3" fill="'+S+'" '+st+'/>'
     +'<rect x="112" y="76" width="36" height="52" rx="3" fill="#fff" '+st+'/>'),
    /* 情境 2：磨豆機 */
    dg20261125b1_grinder: svg(
      '<rect x="68" y="30" width="64" height="40" rx="6" fill="'+S+'" '+st+'/>'
     +'<rect x="60" y="70" width="80" height="26" rx="4" fill="'+D+'"/>'
     +'<path d="M72 96 h56 l-6 30 h-44z" fill="'+L+'" '+st+'/>'
     +'<circle cx="100" cy="50" r="10" fill="'+A+'" '+st+'/>'),
    /* 情境 3：牛奶瓶 */
    dg20261125b1_milk: svg(
      '<path d="M76 46 h48 v76 a8 8 0 0 1 -8 8 h-32 a8 8 0 0 1 -8 -8z" fill="#fff" '+st+'/>'
     +'<rect x="84" y="24" width="32" height="22" rx="4" fill="'+S+'" '+st+'/>'
     +'<rect x="78" y="90" width="44" height="26" fill="'+S+'"/>'
     +'<path d="M78 90 h44" fill="none" '+th(3)+'/>'),
    /* 情境 4：收銀機捲紙 */
    dg20261125b1_tillroll: svg(
      '<rect x="52" y="24" width="96" height="36" rx="6" fill="'+L+'" '+st+'/>'
     +'<path d="M66 60 h68 v62 l-12 -10 l-12 10 l-12 -10 l-12 10 l-12 -10z" fill="#fff" '+st+'/>'
     +'<g stroke="'+D+'" stroke-width="3" stroke-linecap="round"><line x1="80" y1="78" x2="120" y2="78"/><line x1="80" y1="96" x2="112" y2="96"/></g>'),
    /* 情境 5：橘色問號 */
    dg20261125b1_qmark: svg(
      '<rect x="38" y="36" width="124" height="80" rx="12" fill="#fff" '+st+'/>'+qb(100,76)),
    /* 情境 6：班表 */
    dg20261125b1_roster: svg(
      '<rect x="30" y="28" width="140" height="98" rx="6" fill="#fff" '+st+'/>'
     +'<path d="M30 54 h140 M76 54 v72 M123 54 v72" fill="none" '+th(3)+'/>'
     +'<rect x="30" y="28" width="140" height="26" rx="6" fill="'+B+'" '+st+'/>'
     +'<rect x="80" y="60" width="38" height="24" fill="'+A+'"/>'),
    /* 情境 7：送來的箱子 */
    dg20261125b1_delivery: svg(
      '<rect x="44" y="60" width="112" height="64" rx="5" fill="'+L+'" '+st+'/>'
     +'<path d="M100 60 v64" fill="none" '+th(3)+'/>'
     +'<path d="M70 60 l14 -26 h32 l14 26" fill="'+A+'" '+st+'/>'
     +'<circle cx="100" cy="92" r="9" fill="#fff" '+st+'/>'),
    /* 情境 8：外帶杯 */
    dg20261125b1_cup: svg(
      '<path d="M72 48 h56 l-8 80 h-40z" fill="#fff" '+st+'/>'
     +'<rect x="66" y="34" width="68" height="16" rx="5" fill="'+A+'" '+st+'/>'
     +'<rect x="76" y="74" width="48" height="20" rx="3" fill="'+L+'" '+st+'/>'
     +'<path d="M100 20 v12" fill="none" '+th(3)+'/>'),
    /* 情境 9：一串鑰匙 */
    dg20261125b1_keys: svg(
      '<circle cx="76" cy="52" r="20" fill="none" '+th(5)+'/>'
     +'<path d="M90 66 l44 44" fill="none" '+th(5)+'/>'
     +'<path d="M118 94 l12 -12 M130 106 l12 -12" fill="none" '+th(4)+'/>'
     +'<circle cx="146" cy="118" r="10" fill="'+Y+'" '+st+'/>'),
    /* 情境 10：關燈 */
    dg20261125b1_lightsoff: svg(
      '<path d="M100 24 a30 30 0 0 1 18 54 h-36 a30 30 0 0 1 18 -54z" fill="'+L+'" '+st+'/>'
     +'<rect x="86" y="78" width="28" height="16" rx="3" fill="'+D+'"/>'
     +'<rect x="140" y="56" width="30" height="46" rx="5" fill="#fff" '+st+'/>'
     +'<rect x="148" y="78" width="14" height="16" rx="2" fill="'+D+'"/>')
  });
})();

window.GVIDEO.dg20261125b1 = {
  kind: 'gram',
  date: '2026-11-25',
  title: "when, if and when I've done",
  titleCn: '確定度決定連接詞，完成式決定順序',
  titleArt: ['dg20261125b1_cal', 'dg20261125b1_tick', 'dg20261125b1_dice'],
  scene: '咖啡店 At the café',
  sceneArt: 'dg20261125b1_cafe',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Clara', voice: 'f' },
    T: { name: 'Ryan', voice: 'm' }
  },
  expr: {
    sure: { t: 'when + 現在式', cn: '確定會到', ex: 'When the morning rush starts, both of us stay behind the bar.', exCn: '早上人潮一來，我們兩個都守在吧台。', note: '時間一定會到，只是還沒到' },
    done: { t: "when I've done", cn: '做完才算', ex: 'When I have counted the till, I will lock the drawer.', exCn: '等我數完收銀機，我就把抽屜鎖起來。', note: 'have 加過去分詞' },
    may: { t: 'if + 現在式', cn: '不一定發生', ex: 'If the milk runs out, I will borrow some next door.', exCn: '如果牛奶用完了，我會去隔壁借一點。', note: '留一個不發生的可能' }
  },
  chapters: [
    { cn: '開場' }, { cn: '三張卡' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  cards: [
    { art: 'dg20261125b1_cal', lab: '確定會到', who: 'when + 現在式' },
    { art: 'dg20261125b1_tick', lab: '做完才算', who: "when I've done" },
    { art: 'dg20261125b1_dice', lab: '不一定發生', who: 'if + 現在式' }
  ],
  flow: [
    { q: '這件事確定會發生嗎？', a: '確定', en: 'when + 現在式' },
    { q: '要強調做完以後嗎？', a: '要', en: 'when + have + 過去分詞' },
    { q: '其實不一定會發生？', a: '用 if', en: 'if + 現在式' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: '到了這一級，形狀你已經會了。今天練的是判斷：你有多確定，以及那件事要不要先做完。', vis: { type: 'title' } },

    /* ---- 1 三張卡 ---- */
    { ch: 1, sp: 'N', zh: '三張卡，三個判斷。形狀都一樣，差別在你心裡的那把尺。', vis: { type: 'cards', show: 0 } },
    { ch: 1, sp: 'N', zh: '第一張：日期已經定了、時間一定會到，用 when。',
      hi: [{ t: '一定會到', k: 'sure', c: 3 }], vis: { type: 'cards', show: 1, pop: true } },
    { ch: 1, sp: 'A', en: 'When the morning rush starts, both of us stay behind the bar.', cn: '早上人潮一來，我們兩個都守在吧台。',
      hi: [{ t: 'When the morning rush starts', cn: '每天都會來', k: 'sure', c: 3 }], vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'N', zh: '第二張：你要強調前面那件事必須先做完，就把現在式換成現在完成式。',
      hi: [{ t: '先做完', k: 'done', c: 4 }], vis: { type: 'cards', show: 2, pop: true } },
    { ch: 1, sp: 'T', en: 'When I have counted the till, I will lock the drawer.', cn: '等我數完收銀機，我就把抽屜鎖起來。',
      hi: [{ t: 'When I have counted', cn: '數完才鎖', k: 'done', c: 4 }], vis: { type: 'cards', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: '第三張：你其實不知道那件事會不會發生，就換成 if。',
      hi: [{ t: '不知道', k: 'may', c: 2 }], vis: { type: 'cards', show: 3, pop: true } },
    { ch: 1, sp: 'A', en: 'If the milk runs out, I will borrow some next door.', cn: '如果牛奶用完了，我會去隔壁借一點。',
      hi: [{ t: 'If the milk runs out', cn: '用不用完不知道', k: 'may', c: 2 }], vis: { type: 'cards', show: 3, lit: 2 } },
    { ch: 1, sp: 'N', zh: '三張卡的連接詞後面都沒有 will，一句話的 will 只有一個。', vis: { type: 'cards', show: 3 } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: '先看最基本的形狀：連接詞、主詞、現在式動詞，然後才是主句的 will。',
      hi: [{ t: '現在式動詞', k: 'sure', c: 3 }],
      vis: { type: 'pattern', kick: 'when + 現在式', rows: [
        { lab: '時間', blocks: [{ t: 'When', k: 'n' }, { t: 'the oven', k: 's' }, { t: 'heats up', k: 'v' }, { t: 'at seven', k: 'o' }] },
        { lab: '結果', blocks: [{ t: 'Clara', k: 's' }, { t: 'will slide', k: 'v' }, { t: 'the trays in', k: 'o' }] }
      ], note: 'heats 沒有 will，slide 前面才有' } },
    { ch: 2, sp: 'N', zh: '要強調做完以後，就把子句的動詞換成 have 加過去分詞。',
      hi: [{ t: 'have 加過去分詞', k: 'done', c: 4 }],
      vis: { type: 'pattern', kick: "when I've done", rows: [
        { lab: '只講順序', blocks: [{ t: 'When', k: 'n' }, { t: 'I', k: 's' }, { t: 'close', k: 'v' }, { t: 'the shutters', k: 'o' }] },
        { lab: '做完才算', blocks: [{ t: 'When', k: 'n' }, { t: 'I', k: 's' }, { t: 'have closed', k: 'v' }, { t: 'the shutters', k: 'o' }] }
      ], note: '口語常把 when 換成 once' } },
    { ch: 2, sp: 'N', zh: '這條規則還管 after、before、until、as soon as，全部不放 will。',
      hi: [{ t: '全部不放 will', k: 'may', c: 2 }],
      vis: { type: 'family', art: 'dg20261125b1_tick', kick: '同一套規則', items: [
        { t: 'after', c: '做完之後' }, { t: 'before', c: '在那之前' },
        { t: 'until', c: '直到' }, { t: 'as soon as', c: '一…就…' }
      ] } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: '來聽 Clara 和 Ryan 開店前對一次當天的安排。', vis: { type: 'scene', art: 'dg20261125b1_cafe' } },
    { ch: 3, sp: 'A', en: 'The grinder is due for service on the fifth.', cn: '磨豆機五號要保養。', vis: { type: 'scene', art: 'dg20261125b1_grinder' } },
    { ch: 3, sp: 'T', en: 'When the engineer comes on the fifth, I will keep the second grinder running.', cn: '五號工程師來的時候，我會讓第二台磨豆機繼續運轉。',
      hi: [{ t: 'When the engineer comes', cn: '日期定了，用 when', k: 'sure', c: 3 }], vis: { type: 'scene', art: 'dg20261125b1_roster' } },
    { ch: 3, sp: 'N', zh: '日期寫出來了，所以他用 when。換成 if，對方會以為保養可能取消。',
      hi: [{ t: '日期寫出來了', k: 'sure', c: 3 }], vis: { type: 'scene', art: 'dg20261125b1_qmark' } },
    { ch: 3, sp: 'A', en: 'If the supplier skips us again, we will be short of oat milk by Friday.', cn: '如果供應商又漏掉我們，星期五前燕麥奶就不夠了。',
      hi: [{ t: 'If the supplier skips us', cn: '會不會漏不確定', k: 'may', c: 2 }], vis: { type: 'scene', art: 'dg20261125b1_milk' } },
    { ch: 3, sp: 'T', en: 'I will call them as soon as the delivery window closes.', cn: '收貨時段一結束我就打電話給他們。',
      hi: [{ t: 'as soon as the delivery window closes', cn: '同一套規則', k: 'sure', c: 3 }], vis: { type: 'scene', art: 'dg20261125b1_delivery' } },
    { ch: 3, sp: 'A', en: 'When I have checked the receipts, I will tell you how many cups we sold.', cn: '等我核完單據，我會告訴你我們賣了幾杯。',
      hi: [{ t: 'When I have checked', cn: '核完才算', k: 'done', c: 4 }], vis: { type: 'scene', art: 'dg20261125b1_tillroll' } },
    { ch: 3, sp: 'T', en: 'Two hundred and ten yesterday, and we ran out of lids.', cn: '昨天兩百一十杯，而且杯蓋用完了。', vis: { type: 'scene', art: 'dg20261125b1_cup' } },
    { ch: 3, sp: 'A', en: 'Once we have locked up, leave the keys in the drawer.', cn: '我們一鎖好店，鑰匙就放在抽屜裡。',
      hi: [{ t: 'Once we have locked up', cn: 'once 更乾脆', k: 'done', c: 4 }], vis: { type: 'scene', art: 'dg20261125b1_keys' } },
    { ch: 3, sp: 'T', en: 'And I will switch the lights off before I set the alarm.', cn: '我設警報之前會先把燈關掉。',
      hi: [{ t: 'before I set the alarm', cn: 'before 也不放 will', k: 'sure', c: 3 }], vis: { type: 'scene', art: 'dg20261125b1_lightsoff' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '第一組：同一個時間子句，簡單式和完成式差在哪裡。',
      vis: { type: 'vs', sm: true, kick: '順序 vs 做完',
        a: { w: 'When I clean the machine, I will start the next batch.', def: '我清機器的時候，就會開下一批。', cn: '只講順序' },
        b: { w: 'When I have cleaned the machine, I will start the next batch.', def: '等我清完機器，我才會開下一批。', cn: '清完才開' } } },
    { ch: 4, sp: 'A', en: 'When I clean the machine, I will start the next batch.', cn: '我清機器的時候，就會開下一批。',
      hi: [{ t: 'When I clean', cn: '兩件事接著發生', k: 'sure', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '順序 vs 做完',
        a: { w: 'When I clean the machine, I will start the next batch.', def: '我清機器的時候，就會開下一批。', cn: '只講順序' },
        b: { w: 'When I have cleaned the machine, I will start the next batch.', def: '等我清完機器，我才會開下一批。', cn: '清完才開' } } },
    { ch: 4, sp: 'T', en: 'When I have cleaned the machine, I will start the next batch.', cn: '等我清完機器，我才會開下一批。',
      hi: [{ t: 'have cleaned', cn: '完成是前提', k: 'done', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '順序 vs 做完',
        a: { w: 'When I clean the machine, I will start the next batch.', def: '我清機器的時候，就會開下一批。', cn: '只講順序' },
        b: { w: 'When I have cleaned the machine, I will start the next batch.', def: '等我清完機器，我才會開下一批。', cn: '清完才開' } } },
    { ch: 4, sp: 'N', zh: '左邊的人可能邊清邊開，右邊的人一定是清完才開。工作現場這個差別很要緊。',
      vis: { type: 'vs', sm: true, kick: '順序 vs 做完',
        a: { w: 'When I clean the machine, I will start the next batch.', def: '我清機器的時候，就會開下一批。', cn: '只講順序' },
        b: { w: 'When I have cleaned the machine, I will start the next batch.', def: '等我清完機器，我才會開下一批。', cn: '清完才開' } } },
    { ch: 4, sp: 'N', zh: '第二組：換一個連接詞，你傳出去的訊息就不一樣了。',
      vis: { type: 'vs', sm: true, kick: 'when vs if',
        a: { w: 'When the inspector arrives, we will open the store room.', def: '檢查員到的時候我們會開倉庫。', cn: '已經排定' },
        b: { w: 'If the inspector arrives, we will open the store room.', def: '如果檢查員來了我們會開倉庫。', cn: '可能不來' } } },
    { ch: 4, sp: 'A', en: 'When the inspector arrives, we will open the store room.', cn: '檢查員到的時候我們會開倉庫。',
      hi: [{ t: 'When the inspector arrives', cn: '已經排定了', k: 'sure', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: 'when vs if',
        a: { w: 'When the inspector arrives, we will open the store room.', def: '檢查員到的時候我們會開倉庫。', cn: '已經排定' },
        b: { w: 'If the inspector arrives, we will open the store room.', def: '如果檢查員來了我們會開倉庫。', cn: '可能不來' } } },
    { ch: 4, sp: 'T', en: 'If the inspector arrives, we will open the store room.', cn: '如果檢查員來了我們會開倉庫。',
      hi: [{ t: 'If the inspector arrives', cn: '留了不來的可能', k: 'may', c: 2 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: 'when vs if',
        a: { w: 'When the inspector arrives, we will open the store room.', def: '檢查員到的時候我們會開倉庫。', cn: '已經排定' },
        b: { w: 'If the inspector arrives, we will open the store room.', def: '如果檢查員來了我們會開倉庫。', cn: '可能不來' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '寫之前照順序問自己三句話，三秒就選得出來。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一句：這件事確定會發生嗎？確定就用 when。',
      hi: [{ t: '確定', k: 'sure', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'T', en: 'When the new price list takes effect, we will reprint the menu.', cn: '新價目表生效的時候，我們會重印菜單。',
      hi: [{ t: 'When the new price list takes effect', cn: '生效日已定', k: 'sure', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二句：要強調做完以後嗎？要就用現在完成式。',
      hi: [{ t: '做完以後', k: 'done', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'A', en: 'When we have trained the two new staff, the roster gets much easier.', cn: '等我們把兩位新人帶完，班表就好排多了。',
      hi: [{ t: 'When we have trained', cn: '帶完才算', k: 'done', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '第三句：其實不一定會發生？那就老實用 if。',
      hi: [{ t: '不一定', k: 'may', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'T', en: 'If the rain keeps up all day, the terrace stays empty.', cn: '如果雨下一整天，露台就會一直空著。',
      hi: [{ t: 'If the rain keeps up', cn: '天氣不確定', k: 'may', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說。看完中文先自己講一次，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：訓練日期已經排在十號，你要說那天會把流程走一遍。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '訓練日期已經排在十號，你要說那天會把流程走一遍。' } },
    { ch: 6, sp: 'A', en: 'When the training starts on the tenth, I will walk them through the whole process.', cn: '十號訓練開始的時候，我會帶他們把整個流程走一遍。',
      hi: [{ t: 'When the training starts', cn: '日期定了用 when', k: 'sure', c: 3 }],
      vis: { type: 'speak', n: 1, show: true, sit: '訓練日期已經排在十號，你要說那天會把流程走一遍。', a: 'When the training starts on the tenth, I will walk them through the whole process.' } },
    { ch: 6, sp: 'N', zh: '情境二：你要強調「盤點做完以後」才會送出報表。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '你要強調「盤點做完以後」才會送出報表。' } },
    { ch: 6, sp: 'T', en: 'When I have finished the stock count, I will send the sheet over.', cn: '等我把盤點做完，我就把表單送出去。',
      hi: [{ t: 'When I have finished', cn: '做完才送', k: 'done', c: 4 }],
      vis: { type: 'speak', n: 2, show: true, sit: '你要強調「盤點做完以後」才會送出報表。', a: 'When I have finished the stock count, I will send the sheet over.' } },
    { ch: 6, sp: 'N', zh: '情境三：你不確定機器會不會再跳電，想說跳電就改用備用機。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '你不確定機器會不會再跳電，想說跳電就改用備用機。' } },
    { ch: 6, sp: 'A', en: 'If the power trips again, we will move to the spare machine.', cn: '如果又跳電，我們就換用備用機。',
      hi: [{ t: 'If the power trips again', cn: '不確定就用 if', k: 'may', c: 2 }],
      vis: { type: 'speak', n: 3, show: true, sit: '你不確定機器會不會再跳電，想說跳電就改用備用機。', a: 'If the power trips again, we will move to the spare machine.' } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結：確定度選 when 或 if，要強調做完就用現在完成式，will 永遠只在主句。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '下次寫信之前先問一句：這件事我真的確定嗎？選對字，訊息才不會走鐘。', vis: { type: 'end' } }
  ]
};
