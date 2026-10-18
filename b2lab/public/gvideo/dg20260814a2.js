/* ============================================================
   B2 Read 文法影片解說 — dg20260814a2（Grammar in Use Unit 1・A2）
   格式與規則見 b2lab/tools/GVIDEO_SPEC.md；範本 gvideo/dg20261014b1.js。
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
  var phone=function(x,y,scr){ return '<rect x="'+x+'" y="'+y+'" width="44" height="80" rx="8" fill="'+D+'" '+st+'/><rect x="'+(x+5)+'" y="'+(y+10)+'" width="34" height="56" rx="3" fill="'+(scr||'#fff')+'"/>'; };

  Object.assign(window.GVIDEO_ART, {
    /* 說話的這一刻：時鐘＋NOW */
    dg20260814a2_now: svg(
      '<circle cx="84" cy="80" r="52" fill="#fff" '+th(4)+'/>'
     +'<g '+th(4)+'><line x1="84" y1="32" x2="84" y2="40"/><line x1="132" y1="80" x2="124" y2="80"/><line x1="84" y1="128" x2="84" y2="120"/><line x1="36" y1="80" x2="44" y2="80"/></g>'
     +'<line x1="84" y1="80" x2="62" y2="62" '+th(5)+'/><line x1="84" y1="80" x2="110" y2="58" stroke="'+A+'" stroke-width="6" stroke-linecap="round"/>'
     +'<circle cx="84" cy="80" r="5" fill="'+D+'"/>'
     +'<rect x="128" y="14" width="62" height="30" rx="15" fill="'+R+'" '+st+'/>'+txt(159,35,'NOW',17,'#fff')),
    /* 在幹嘛？：一問一答兩個對話框 */
    dg20260814a2_ask: svg(
      '<path d="M18 16 H92 a10 10 0 0 1 10 10 V62 a10 10 0 0 1 -10 10 H48 L32 90 V72 H18 a10 10 0 0 1 -10 -10 V26 a10 10 0 0 1 10 -10 Z" fill="'+L+'" '+st+'/>'
     +txt(55,58,'?',34,A)
     +'<path d="M108 62 H182 a10 10 0 0 1 10 10 V108 a10 10 0 0 1 -10 10 H168 V136 L150 118 H108 a10 10 0 0 1 -10 -10 V72 a10 10 0 0 1 10 -10 Z" fill="'+S+'" '+st+'/>'
     +'<g fill="'+D+'"><circle cx="127" cy="90" r="5"/><circle cx="145" cy="90" r="5"/><circle cx="163" cy="90" r="5"/></g>'),
    /* 你看！：望遠鏡 */
    dg20260814a2_look: svg(
      '<rect x="40" y="44" width="46" height="58" rx="10" fill="'+B+'" '+st+'/><rect x="114" y="44" width="46" height="58" rx="10" fill="'+B+'" '+st+'/>'
     +'<rect x="84" y="58" width="32" height="22" rx="4" fill="'+D+'"/>'
     +'<circle cx="63" cy="106" r="24" fill="'+S+'" '+th(4)+'/><circle cx="137" cy="106" r="24" fill="'+S+'" '+th(4)+'/>'
     +'<path d="M52 98 q6 -8 14 -6 M126 98 q6 -8 14 -6" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round"/>'
     +'<g '+th(3.5)+'><line x1="100" y1="12" x2="100" y2="28"/><line x1="70" y1="18" x2="76" y2="32"/><line x1="130" y1="18" x2="124" y2="32"/></g>'),

    /* 情境 1：星期六早上打電話——兩支手機＋聲波 */
    dg20260814a2_call: svg(
      phone(18,36,S)+'<circle cx="40" cy="64" r="11" fill="'+Y+'" '+th(2.5)+'/>'
     +phone(138,36,L)+'<circle cx="160" cy="64" r="11" fill="'+A+'" '+th(2.5)+'/>'
     +'<path d="M76 62 q8 14 0 28 M88 54 q12 22 0 44 M124 62 q-8 14 0 28 M112 54 q-12 22 0 44" fill="none" '+th(3)+'/>'),
    /* 情境 2：你在做什麼？——手機畫面上的對話框＋問號 */
    dg20260814a2_askwhat: svg(
      '<rect x="56" y="14" width="78" height="124" rx="13" fill="'+D+'" '+st+'/><rect x="63" y="26" width="64" height="98" rx="4" fill="#fff"/>'
     +'<rect x="68" y="36" width="44" height="18" rx="8" fill="'+L+'" '+th(2.5)+'/>'
     +'<rect x="80" y="62" width="42" height="18" rx="8" fill="'+S+'" '+th(2.5)+'/>'
     +'<g fill="'+D+'"><circle cx="90" cy="71" r="2.5"/><circle cx="101" cy="71" r="2.5"/><circle cx="112" cy="71" r="2.5"/></g>'
     +qb(162,40)),
    /* 情境 3：正在做鬆餅——平底鍋＋鬆餅＋熱氣 */
    dg20260814a2_pancake: svg(
      '<line x1="10" y1="132" x2="190" y2="132" '+st+'/>'
     +'<rect x="30" y="116" width="120" height="16" rx="3" fill="#c9c2b8" '+st+'/>'
     +'<rect x="140" y="92" width="52" height="10" rx="5" fill="'+D+'" '+st+'/>'
     +'<ellipse cx="88" cy="100" rx="58" ry="16" fill="#5a5048" '+st+'/>'
     +'<ellipse cx="88" cy="94" rx="40" ry="10" fill="#e3a857" '+th(2.5)+'/>'
     +'<rect x="80" y="86" width="14" height="8" rx="2" fill="'+Y+'" '+th(2)+'/>'
     +'<path d="M66 64 q-8 -10 0 -20 q8 -10 0 -20 M90 66 q-8 -10 0 -20 q8 -10 0 -20 M114 64 q-8 -10 0 -20 q8 -10 0 -20" fill="none" stroke="#b9b0a5" stroke-width="4" stroke-linecap="round"/>'),
    /* 情境 4：還沒做完——攪拌碗＋打蛋器＋蛋 */
    dg20260814a2_whisk: svg(
      '<path d="M36 74 H164 a64 54 0 0 1 -128 0 Z" fill="'+S+'" '+st+'/>'
     +'<ellipse cx="100" cy="74" rx="64" ry="11" fill="#f3d9a4" '+st+'/>'
     +'<line x1="122" y1="58" x2="166" y2="14" '+th(6)+'/>'
     +'<g transform="rotate(45 112 68)"><ellipse cx="112" cy="68" rx="9" ry="20" fill="none" '+th(2.5)+'/><ellipse cx="112" cy="68" rx="4" ry="20" fill="none" '+th(2.5)+'/></g>'
     +'<ellipse cx="26" cy="126" rx="12" ry="15" fill="#fff" '+st+'/><ellipse cx="176" cy="130" rx="11" ry="13" fill="#fff" '+st+'/>'),
    /* 情境 5：妹妹有在幫忙嗎？——掛著的兩件圍裙＋問號 */
    dg20260814a2_aprons: svg(
      '<line x1="14" y1="24" x2="150" y2="24" '+th(4)+'/>'
     +'<path d="M44 42 q14 -26 28 0" fill="none" '+st+'/><path d="M44 42 h28 v12 l14 8 v58 q0 8 -8 8 h-40 q-8 0 -8 -8 v-58 l14 -8 Z" fill="'+R+'" '+st+'/>'
     +'<rect x="44" y="92" width="28" height="18" rx="3" fill="#fff" '+th(2.5)+'/>'
     +'<path d="M102 42 q14 -26 28 0" fill="none" '+st+'/><path d="M102 42 h28 v12 l14 8 v58 q0 8 -8 8 h-40 q-8 0 -8 -8 v-58 l14 -8 Z" fill="'+Y+'" '+st+'/>'
     +'<rect x="102" y="92" width="28" height="18" rx="3" fill="#fff" '+th(2.5)+'/>'
     +qb(172,48)),
    /* 情境 6：她在沙發上睡覺——沙發＋蓋被子的人＋Zz */
    dg20260814a2_sofa: svg(
      '<rect x="30" y="56" width="140" height="40" rx="10" fill="'+B+'" '+st+'/>'
     +'<rect x="18" y="84" width="164" height="34" rx="8" fill="'+B+'" '+st+'/>'
     +'<rect x="12" y="70" width="22" height="50" rx="8" fill="'+B+'" '+st+'/><rect x="166" y="70" width="22" height="50" rx="8" fill="'+B+'" '+st+'/>'
     +'<line x1="26" y1="120" x2="26" y2="132" '+th(4)+'/><line x1="174" y1="120" x2="174" y2="132" '+th(4)+'/>'
     +'<circle cx="52" cy="76" r="12" fill="'+L+'" '+st+'/><path d="M46 76 h4 M56 76 h4" '+th(2.5)+'/>'
     +'<path d="M64 70 H156 a8 8 0 0 1 8 8 V90 H64 Z" fill="'+Y+'" '+st+'/>'
     +txt(70,46,'Z',18)+txt(86,32,'z',14)),
    /* 情境 7：她沒有在幫忙——餐桌旁空著的椅子 */
    dg20260814a2_chair: svg(
      '<line x1="10" y1="134" x2="190" y2="134" '+st+'/>'
     +'<rect x="16" y="66" width="104" height="10" rx="3" fill="#c98b4f" '+st+'/>'
     +'<line x1="28" y1="76" x2="28" y2="134" '+th(5)+'/><line x1="108" y1="76" x2="108" y2="134" '+th(5)+'/>'
     +'<ellipse cx="66" cy="62" rx="26" ry="6" fill="#fff" '+st+'/><ellipse cx="66" cy="56" rx="16" ry="5" fill="#e3a857" '+th(2.5)+'/>'
     +'<rect x="168" y="30" width="10" height="104" rx="3" fill="'+A+'" '+st+'/>'
     +'<rect x="136" y="84" width="42" height="10" rx="3" fill="'+A+'" '+st+'/>'
     +'<line x1="142" y1="94" x2="142" y2="134" '+th(5)+'/>'),
    /* 情境 8：狗對著大門叫——狗＋叫聲線＋門 */
    dg20260814a2_dog: svg(
      '<line x1="8" y1="134" x2="192" y2="134" '+st+'/>'
     +'<rect x="140" y="20" width="50" height="114" fill="'+L+'" '+st+'/><circle cx="150" cy="80" r="4" fill="'+D+'"/>'
     +'<path d="M84 96 l14 -12" '+th(4)+'/>'
     +'<ellipse cx="58" cy="104" rx="30" ry="16" fill="#c98b4f" '+st+'/>'
     +'<line x1="40" y1="116" x2="40" y2="134" '+th(5)+'/><line x1="76" y1="116" x2="76" y2="134" '+th(5)+'/>'
     +'<circle cx="86" cy="80" r="16" fill="#c98b4f" '+st+'/>'
     +'<path d="M76 70 q-6 -10 2 -16 l6 12" fill="#8a5a30" '+th(2.5)+'/>'
     +'<path d="M92 84 l10 4 l-8 4" fill="#fff" '+th(2.5)+'/><circle cx="90" cy="76" r="2.5" fill="'+D+'"/>'
     +'<path d="M30 98 q-12 -6 -10 -18" fill="none" '+th(4)+'/>'
     +'<path d="M110 70 l14 -8 M112 84 h16 M110 98 l14 8" '+th(3.5)+'/>'),
    /* 情境 9：可能有人站在門外——門上玻璃透出人影＋門墊 */
    dg20260814a2_door: svg(
      '<line x1="8" y1="134" x2="192" y2="134" '+st+'/>'
     +'<rect x="56" y="14" width="88" height="120" rx="3" fill="#a9744a" '+st+'/>'
     +'<rect x="70" y="26" width="60" height="48" rx="4" fill="'+S+'" '+st+'/>'
     +'<circle cx="100" cy="46" r="9" fill="#7b8696"/><path d="M84 74 q0 -18 16 -18 q16 0 16 18 Z" fill="#7b8696"/>'
     +'<rect x="70" y="26" width="60" height="48" rx="4" fill="none" '+st+'/>'
     +'<circle cx="132" cy="96" r="4.5" fill="'+Y+'" '+th(2)+'/>'
     +'<rect x="44" y="128" width="112" height="8" rx="3" fill="'+G+'" '+th(2.5)+'/>'),
    /* 情境 10：描述眼前的畫面——窗戶看出去的樹和小鳥 */
    dg20260814a2_window: svg(
      '<rect x="34" y="16" width="132" height="104" rx="4" fill="'+S+'" '+th(4)+'/>'
     +'<circle cx="138" cy="40" r="11" fill="'+Y+'" '+th(2.5)+'/>'
     +'<rect x="74" y="78" width="10" height="40" fill="#8a5a30" '+th(2.5)+'/><circle cx="79" cy="66" r="22" fill="'+G+'" '+st+'/>'
     +'<path d="M112 66 q6 -6 12 0 q6 -6 12 0" fill="none" '+th(3)+'/>'
     +'<line x1="100" y1="16" x2="100" y2="120" '+th(4)+'/>'
     +'<path d="M34 16 H58 Q50 70 34 96 Z" fill="'+R+'" '+st+'/><path d="M166 16 H142 Q150 70 166 96 Z" fill="'+R+'" '+st+'/>'
     +'<rect x="24" y="118" width="152" height="12" rx="3" fill="'+L+'" '+st+'/>')
  });
})();

/* ============================================================
   dg20260814a2 — What Are You Doing Now?
   Grammar in Use Unit 1（Present continuous: I am doing）A2
   ============================================================ */
window.GVIDEO.dg20260814a2 = {
  kind: 'gram',
  date: '2026-08-14',
  title: 'What Are You Doing Now?',
  titleCn: '現在進行式：此刻正在做的事',
  titleArt: ['dg20260814a2_now', 'dg20260814a2_ask', 'dg20260814a2_look'],
  scene: '星期六早上 Saturday morning',
  sceneArt: 'dg20260814a2_call',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Amber', voice: 'f' },
    T: { name: 'Luke', voice: 'm' }
  },
  expr: {
    now:  { t: 'am / is / are + V-ing', cn: '說話這一刻正在做的事', ex: "We're having breakfast now.", exCn: '我們現在正在吃早餐。', note: 'be 動詞跟著主詞變：I am、she is、they are' },
    ask:  { t: 'What are you doing?', cn: '問對方現在在做什麼', ex: 'What is your brother doing?', exCn: '你哥哥在做什麼？', note: "回答也用進行式：He's playing games." },
    look: { t: 'Look! / Listen! + 進行式', cn: '描述眼前正在發生的畫面', ex: 'Listen! The phone is ringing.', exCn: '你聽！電話在響。', note: '看到或聽到的事正在發生，就用 be + V-ing' }
  },
  chapters: [
    { cn: '開場' }, { cn: '三種時候' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  cardsKick: 'Three times to use it 三種時候',
  cards: [
    { art: 'dg20260814a2_now',  lab: '正在做',   who: '說話的這一刻' },
    { art: 'dg20260814a2_ask',  lab: '在幹嘛？', who: '回答對方的問題' },
    { art: 'dg20260814a2_look', lab: '你看！',   who: '眼前看到的畫面' }
  ],
  flow: [
    { q: '是現在正在發生的事嗎？', a: '用進行式', en: '主詞 + be + V-ing' },
    { q: '主詞是誰？',             a: 'be 動詞',  en: 'I am · he is · they are' },
    { q: '動詞怎麼結尾？',         a: '加 -ing',  en: 'make → making · sit → sitting' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: '你現在正在看這支影片。英文要講「正在做」的事，就用現在進行式。', vis: { type: 'title' } },

    /* ---- 1 核心：三種時候 ---- */
    { ch: 1, sp: 'N', zh: '現在進行式最常出現在三種時候，我們一個一個看。', vis: { type: 'cards', show: 0 } },
    { ch: 1, sp: 'N', zh: '第一種：事情就在說話的這一刻發生，而且還沒做完。',
      hi: [{ t: '這一刻', k: 'now', c: 3 }], vis: { type: 'cards', show: 1, pop: true } },
    { ch: 1, sp: 'A', en: "I'm drinking hot chocolate right now.", cn: '我現在正在喝熱可可。',
      hi: [{ t: "I'm drinking", cn: '正在喝', k: 'now', c: 3 }], vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'N', zh: '第二種：別人問你在幹嘛，你就回答現在正在做的事。',
      hi: [{ t: '在幹嘛', k: 'ask', c: 4 }], vis: { type: 'cards', show: 2, pop: true } },
    { ch: 1, sp: 'A', en: 'What are you doing up there?', cn: '你在上面做什麼？',
      hi: [{ t: 'What are you doing', cn: '你在做什麼', k: 'ask', c: 4 }], vis: { type: 'cards', show: 2, lit: 1 } },
    { ch: 1, sp: 'T', en: "I'm changing the light bulb.", cn: '我在換燈泡。',
      hi: [{ t: "I'm changing", cn: '正在換', k: 'ask', c: 4 }], vis: { type: 'cards', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: '第三種：看到眼前的畫面，想叫別人一起看，常常用 Look 或 Listen 開頭。',
      hi: [{ t: 'Look', k: 'look', c: 2 }], vis: { type: 'cards', show: 3, pop: true } },
    { ch: 1, sp: 'A', en: 'Look! A cat is climbing that tree.', cn: '你看！有一隻貓正在爬那棵樹。',
      hi: [{ t: 'is climbing', cn: '正在爬', k: 'look', c: 2 }], vis: { type: 'cards', show: 3, lit: 2 } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: '句型就兩塊：be 動詞，加上動詞 ing。be 動詞要跟著主詞變。',
      vis: { type: 'pattern', kick: 'am / is / are + V-ing', rows: [
        { lab: 'I → am',            blocks: [{ t: 'I', k: 's' }, { t: 'am eating', k: 'v' }, { t: 'noodles', k: 'n' }] },
        { lab: 'he / she / it → is', blocks: [{ t: 'Grandpa', k: 's' }, { t: 'is washing', k: 'v' }, { t: 'the car', k: 'n' }] },
        { lab: 'you / we / they → are', blocks: [{ t: 'We', k: 's' }, { t: 'are watching', k: 'v' }, { t: 'a movie', k: 'n' }] }
      ], note: 'be 動詞和 -ing，兩塊都要有' } },
    { ch: 2, sp: 'N', zh: '要說「沒有在做」，就在 be 後面加 not。要問問題，就把 be 搬到最前面。',
      vis: { type: 'pattern', kick: '否定與疑問 Not / Question', rows: [
        { lab: '否定', blocks: [{ t: 'They', k: 's' }, { t: "aren't dancing", k: 'v' }] },
        { lab: '疑問', blocks: [{ t: 'Is', k: 'v' }, { t: 'he', k: 's' }, { t: 'driving?', k: 'v' }] }
      ], note: "isn't = is not，aren't = are not" } },
    { ch: 2, sp: 'N', zh: '動詞加 ing 有四個拼字小規則：大部分直接加；字尾是 e，先去掉 e；短母音加一個子音，要重複字尾；ie 結尾改成 y。',
      vis: { type: 'family', kick: 'Adding -ing 拼字規則', core: '-ing spelling', coreCn: '加 -ing 的拼法', art: 'dg20260814a2_now', items: [
        { t: 'play → playing', cn: '直接加' }, { t: 'ride → riding', cn: '去掉 e' },
        { t: 'swim → swimming', cn: '重複字尾' }, { t: 'lie → lying', cn: 'ie 改 y' }
      ] } },
    { ch: 2, sp: 'N', zh: '常跟進行式一起出現的字有 now、right now、at the moment。看到它們，就想到 be 加 ing。',
      vis: { type: 'pattern', kick: '訊號字 Signal words', rows: [
        { lab: '加上 now',         blocks: [{ t: "He's cooking", k: 'v' }, { t: 'right now', k: 'o', add: true }] },
        { lab: 'at the moment', blocks: [{ t: 'My sister is studying', k: 'v' }, { t: 'at the moment', k: 'o', add: true }] }
      ] } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: '星期六早上，Amber 打電話給 Luke。仔細聽，他們都在講現在正在做的事。', vis: { type: 'scene', art: 'dg20260814a2_call' } },
    { ch: 3, sp: 'A', en: 'Hi, Luke! What are you doing?', cn: '嗨，Luke！你在做什麼？',
      hi: [{ t: 'What are you doing', cn: '你在做什麼', k: 'ask', c: 4 }], vis: { type: 'scene', art: 'dg20260814a2_askwhat' } },
    { ch: 3, sp: 'T', en: "I'm making pancakes in the kitchen.", cn: '我在廚房做鬆餅。',
      hi: [{ t: "I'm making", cn: '正在做', k: 'now', c: 3 }], vis: { type: 'scene', art: 'dg20260814a2_pancake' } },
    { ch: 3, sp: 'N', zh: "鬆餅還沒做完，所以說 I'm making。make 字尾是 e，要先去掉 e 再加 ing。",
      hi: [{ t: "I'm making", k: 'now', c: 3 }], vis: { type: 'scene', art: 'dg20260814a2_whisk' } },
    { ch: 3, sp: 'A', en: 'Is your sister helping you?', cn: '你妹妹有在幫你嗎？',
      hi: [{ t: 'Is your sister helping', cn: 'be 放前面來問', k: 'ask', c: 4 }], vis: { type: 'scene', art: 'dg20260814a2_aprons' } },
    { ch: 3, sp: 'T', en: "No, she isn't. She's sleeping on the sofa.", cn: '沒有，她在沙發上睡覺。',
      hi: [{ t: "She's sleeping", cn: '正在睡', k: 'now', c: 3 }], vis: { type: 'scene', art: 'dg20260814a2_sofa' } },
    { ch: 3, sp: 'N', zh: "說「沒有在做」，就在 be 後面加 not。she isn't 的意思就是：她現在沒有在幫忙。",
      hi: [{ t: "she isn't", c: 1 }], vis: { type: 'scene', art: 'dg20260814a2_chair' } },
    { ch: 3, sp: 'A', en: 'Oh no, my dog is barking at the front door.', cn: '糟了，我的狗正對著大門叫。',
      hi: [{ t: 'is barking', cn: '正在叫', k: 'look', c: 2 }], vis: { type: 'scene', art: 'dg20260814a2_dog' } },
    { ch: 3, sp: 'T', en: 'Maybe someone is standing outside.', cn: '可能有人站在門外喔。',
      hi: [{ t: 'is standing', cn: '正站著', k: 'look', c: 2 }], vis: { type: 'scene', art: 'dg20260814a2_door' } },
    { ch: 3, sp: 'N', zh: '眼睛看到、耳朵聽到正在發生的事，也用進行式來描述，像 is barking、is standing。',
      hi: [{ t: 'is barking', k: 'look', c: 2 }], vis: { type: 'scene', art: 'dg20260814a2_window' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '每天做的事，跟現在正在做的事，英文用不同的形狀。',
      vis: { type: 'vs', sm: true, kick: '每天 vs 現在',
        a: { w: 'I walk my dog every evening.', def: '我每天傍晚遛狗。', cn: '每天的習慣 → 現在簡單式' },
        b: { w: "I'm walking my dog now.", def: '我現在正在遛狗。', cn: '這一刻 → 現在進行式' } } },
    { ch: 4, sp: 'A', en: 'I walk my dog every evening.', cn: '我每天傍晚遛狗。',
      hi: [{ t: 'every evening', cn: '每天', c: 1 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '每天 vs 現在',
        a: { w: 'I walk my dog every evening.', def: '我每天傍晚遛狗。', cn: '每天的習慣 → 現在簡單式' },
        b: { w: "I'm walking my dog now.", def: '我現在正在遛狗。', cn: '這一刻 → 現在進行式' } } },
    { ch: 4, sp: 'T', en: "I'm walking my dog now.", cn: '我現在正在遛狗。',
      hi: [{ t: "I'm walking", cn: '正在遛', k: 'now', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '每天 vs 現在',
        a: { w: 'I walk my dog every evening.', def: '我每天傍晚遛狗。', cn: '每天的習慣 → 現在簡單式' },
        b: { w: "I'm walking my dog now.", def: '我現在正在遛狗。', cn: '這一刻 → 現在進行式' } } },
    { ch: 4, sp: 'N', zh: '第一句講習慣，天天都這樣；第二句講的是這一秒，我人就在外面遛狗。',
      vis: { type: 'vs', sm: true, kick: '每天 vs 現在',
        a: { w: 'I walk my dog every evening.', def: '我每天傍晚遛狗。', cn: '每天的習慣 → 現在簡單式' },
        b: { w: "I'm walking my dog now.", def: '我現在正在遛狗。', cn: '這一刻 → 現在進行式' } } },
    { ch: 4, sp: 'N', zh: '再看一組。同一件事，說明的時候 be 放在主詞後面；問問題的時候，be 搬到最前面。',
      vis: { type: 'vs', sm: true, kick: '說明 vs 發問',
        a: { w: 'The baby is sleeping.', def: '寶寶在睡覺。', cn: '說明 → 主詞 + be + V-ing' },
        b: { w: 'Is the baby sleeping?', def: '寶寶在睡覺嗎？', cn: '發問 → be + 主詞 + V-ing' } } },
    { ch: 4, sp: 'A', en: 'The baby is sleeping.', cn: '寶寶在睡覺。',
      hi: [{ t: 'is sleeping', cn: '正在睡', k: 'now', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '說明 vs 發問',
        a: { w: 'The baby is sleeping.', def: '寶寶在睡覺。', cn: '說明 → 主詞 + be + V-ing' },
        b: { w: 'Is the baby sleeping?', def: '寶寶在睡覺嗎？', cn: '發問 → be + 主詞 + V-ing' } } },
    { ch: 4, sp: 'T', en: 'Is the baby sleeping?', cn: '寶寶在睡覺嗎？',
      hi: [{ t: 'Is the baby sleeping', cn: 'be 搬到前面', k: 'ask', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '說明 vs 發問',
        a: { w: 'The baby is sleeping.', def: '寶寶在睡覺。', cn: '說明 → 主詞 + be + V-ing' },
        b: { w: 'Is the baby sleeping?', def: '寶寶在睡覺嗎？', cn: '發問 → be + 主詞 + V-ing' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '最後，用三個問題，一步一步組出一句進行式。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一問：這件事是不是現在正在發生、還沒做完？是的話，就用進行式。',
      hi: [{ t: '現在正在發生', k: 'now', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'A', en: "I'm talking to my teacher right now.", cn: '我現在正在跟老師說話。',
      hi: [{ t: "I'm talking", cn: '正在說話', k: 'now', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二問：主詞是誰？I 配 am；he、she、it 配 is；you、we、they 配 are。',
      hi: [{ t: '主詞是誰', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'T', en: 'My parents are working in the garden.', cn: '我爸媽正在花園裡工作。',
      hi: [{ t: 'are working', cn: 'they → are', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '第三問：動詞怎麼結尾？記得拼字規則，像 sit 要變成 sitting。',
      hi: [{ t: 'sitting', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'A', en: 'The kids are sitting under the big tree.', cn: '孩子們正坐在大樹下。',
      hi: [{ t: 'are sitting', cn: '重複 t 再加 -ing', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說說看。看到中文情境，先自己用英文說出來，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：朋友打電話來，你正在寫功課。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '朋友打電話來，你正在寫功課。' } },
    { ch: 6, sp: 'A', en: "I'm doing my homework.", cn: '我在寫功課。',
      hi: [{ t: "I'm doing", cn: 'I → am + V-ing', k: 'now', c: 3 }],
      vis: { type: 'speak', n: 1, show: true, sit: '朋友打電話來，你正在寫功課。', a: "I'm doing my homework." } },
    { ch: 6, sp: 'N', zh: '情境二：你看到窗外有個男生正在跑步，想叫家人一起看。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '你看到窗外有個男生正在跑步，想叫家人一起看。' } },
    { ch: 6, sp: 'T', en: 'Look! A boy is running outside.', cn: '你看！有個男生在外面跑步。',
      hi: [{ t: 'is running', cn: '眼前的畫面', k: 'look', c: 2 }],
      vis: { type: 'speak', n: 2, show: true, sit: '你看到窗外有個男生正在跑步，想叫家人一起看。', a: 'Look! A boy is running outside.' } },
    { ch: 6, sp: 'N', zh: '情境三：你想問弟弟，他現在是不是在看電視。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '你想問弟弟，他現在是不是在看電視。' } },
    { ch: 6, sp: 'A', en: 'Are you watching TV?', cn: '你在看電視嗎？',
      hi: [{ t: 'Are you watching', cn: 'be 放最前面', k: 'ask', c: 4 }],
      vis: { type: 'speak', n: 3, show: true, sit: '你想問弟弟，他現在是不是在看電視。', a: 'Are you watching TV?' } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結一下：現在進行式是兩塊，be 動詞加上動詞 ing。講這一刻、回答在幹嘛、描述眼前的畫面，都用它。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '下次想說「正在」，記得 be 和 ing 兩塊一起帶上。', vis: { type: 'end' } }
  ]
};
