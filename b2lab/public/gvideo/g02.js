/* ============================================================
   B2 Read 文法影片解說 — g02 現在簡單式 vs. 現在進行式（B1）
   格式與規則見 b2lab/tools/GVIDEO_SPEC.md；範本 gvideo/dg20261014b1.js。
   不是時間點的問題（一直如此 vs 這一陣子），核心觀念用 cards。
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
  var cal=function(x,y,w,h){
    var g='<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" rx="8" fill="#fff" '+st+'/>'
      +'<path d="M'+x+' '+(y+22)+' V'+(y+8)+' a8 8 0 0 1 8 -8 H'+(x+w-8)+' a8 8 0 0 1 8 8 V'+(y+22)+' Z" fill="'+R+'" '+st+'/>'
      +'<line x1="'+(x+22)+'" y1="'+(y-7)+'" x2="'+(x+22)+'" y2="'+(y+8)+'" '+th(4)+'/><line x1="'+(x+w-22)+'" y1="'+(y-7)+'" x2="'+(x+w-22)+'" y2="'+(y+8)+'" '+th(4)+'/>';
    for(var r=0;r<3;r++) for(var c=0;c<4;c++) g+='<rect x="'+(x+10+c*(w-20)/4)+'" y="'+(y+30+r*(h-38)/3)+'" width="'+((w-20)/4-6)+'" height="'+((h-38)/3-6)+'" rx="2" fill="'+C+'"/>';
    return g; };
  /* 月餅（俯視） */
  var cake=function(cx,cy,r){
    return '<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="#c98a3d" '+st+'/>'
      +'<circle cx="'+cx+'" cy="'+cy+'" r="'+(r*0.62)+'" fill="none" stroke="#8a5a1f" stroke-width="2.5"/>'
      +'<path d="M'+(cx-r*0.3)+' '+cy+' H'+(cx+r*0.3)+' M'+cx+' '+(cy-r*0.3)+' V'+(cy+r*0.3)+'" stroke="#8a5a1f" stroke-width="2.5" stroke-linecap="round"/>'; };
  /* 禮盒 */
  var box=function(x,y,w,h,col){
    return '<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" rx="4" fill="'+col+'" '+st+'/>'
      +'<rect x="'+(x+w/2-5)+'" y="'+y+'" width="10" height="'+h+'" fill="'+Y+'" '+th(2)+'/>'
      +'<path d="M'+(x+w/2)+' '+y+' c-14 -14 -24 -2 -12 4 Z M'+(x+w/2)+' '+y+' c14 -14 24 -2 12 4 Z" fill="'+Y+'" '+th(2.5)+'/>'; };

  Object.assign(window.GVIDEO_ART, {
    /* 現在簡單式：一直重複的循環箭頭＋太陽（每天都這樣） */
    g02_habit: svg(
      '<path d="M100 22 a53 53 0 1 1 -46 26" fill="none" stroke="'+B+'" stroke-width="8" stroke-linecap="round"/>'
     +'<path d="M40 38 L54 50 L64 32" fill="none" stroke="'+B+'" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>'
     +'<circle cx="100" cy="75" r="22" fill="'+Y+'" '+st+'/>'
     +'<g '+th(3.5)+'><line x1="100" y1="42" x2="100" y2="48"/><line x1="100" y1="102" x2="100" y2="108"/><line x1="67" y1="75" x2="73" y2="75"/><line x1="127" y1="75" x2="133" y2="75"/></g>'),
    /* 現在進行式：這一陣子——沙漏流著（暫時） */
    g02_now: svg(
      '<rect x="62" y="16" width="76" height="12" rx="4" fill="#b98b5e" '+st+'/><rect x="62" y="122" width="76" height="12" rx="4" fill="#b98b5e" '+st+'/>'
     +'<path d="M72 28 H128 C128 58 108 64 104 75 C108 86 128 92 128 122 H72 C72 92 92 86 96 75 C92 64 72 58 72 28 Z" fill="'+S+'" '+st+'/>'
     +'<path d="M80 40 H120 C116 54 104 60 100 68 C96 60 84 54 80 40 Z" fill="'+Y+'"/>'
     +'<path d="M100 74 V112" stroke="'+Y+'" stroke-width="3" stroke-dasharray="3 4"/>'
     +'<path d="M78 120 Q100 98 122 120 Z" fill="'+Y+'"/>'
     +'<path d="M72 28 H128 C128 58 108 64 104 75 C108 86 128 92 128 122 H72 C72 92 92 86 96 75 C92 64 72 58 72 28 Z" fill="none" '+st+'/>'
     +'<path d="M150 50 a30 30 0 0 1 0 50" fill="none" stroke="'+G+'" stroke-width="5" stroke-linecap="round"/><path d="M50 50 a30 30 0 0 0 0 50" fill="none" stroke="'+G+'" stroke-width="5" stroke-linecap="round"/>'),
    /* 狀態動詞：心＋燈泡（喜歡、知道——不是動作） */
    g02_state: svg(
      '<path d="M70 128 c-40 -26 -56 -48 -40 -66 c12 -13 30 -8 40 6 c10 -14 28 -19 40 -6 c16 18 0 40 -40 66 Z" fill="'+R+'" '+st+'/>'
     +'<path d="M140 22 a24 24 0 0 1 14 43 c-3 2 -4 6 -4 9 V80 H130 V74 c0 -3 -1 -7 -4 -9 a24 24 0 0 1 14 -43 Z" fill="'+Y+'" '+st+'/>'
     +'<rect x="130" y="80" width="20" height="8" rx="2" fill="#c9c2b8" '+st+'/><rect x="132" y="88" width="16" height="8" rx="3" fill="#c9c2b8" '+st+'/>'
     +'<g '+th(3)+'><line x1="140" y1="8" x2="140" y2="12"/><line x1="108" y1="20" x2="112" y2="24"/><line x1="172" y1="20" x2="168" y2="24"/></g>'),

    /* 情境 0：麵包店門口 */
    g02_bakery: svg(
      '<line x1="8" y1="134" x2="192" y2="134" '+st+'/>'
     +'<rect x="30" y="58" width="140" height="76" fill="'+C+'" '+st+'/>'
     +'<path d="M24 42 H176 L170 62 a10 10 0 0 1 -20 0 a10 10 0 0 1 -20 0 a10 10 0 0 1 -20 0 a10 10 0 0 1 -20 0 a10 10 0 0 1 -20 0 a10 10 0 0 1 -20 0 a10 10 0 0 1 -20 0 Z" fill="'+G+'" '+st+'/>'
     +'<rect x="40" y="76" width="64" height="40" rx="3" fill="'+S+'" '+st+'/>'
     +'<path d="M50 108 c0 -14 18 -14 18 0 Z" fill="#d9a35b" '+th(2.5)+'/><ellipse cx="86" cy="104" rx="12" ry="7" fill="#c98a3d" '+th(2.5)+'/>'
     +'<rect x="118" y="80" width="36" height="54" fill="'+L+'" '+st+'/><circle cx="146" cy="108" r="2.5" fill="'+D+'"/>'
     +'<ellipse cx="100" cy="24" rx="26" ry="12" fill="#d9a35b" '+st+'/><path d="M88 18 l-4 10 M100 14 v12 M112 18 l4 10" fill="none" '+th(2.5)+'/>'),
    /* 情境 1：你平常不是晚上班——夜晚的店＋月亮 */
    g02_moon: svg(
      '<rect x="0" y="0" width="200" height="150" rx="14" fill="#33405c"/>'
     +'<path d="M150 18 a22 22 0 1 0 22 30 a18 18 0 1 1 -22 -30 Z" fill="'+Y+'" '+st+'/>'
     +'<g fill="#fff"><circle cx="30" cy="24" r="2.5"/><circle cx="70" cy="16" r="2"/><circle cx="110" cy="32" r="2.5"/></g>'
     +'<line x1="10" y1="134" x2="190" y2="134" stroke="#fff" stroke-width="3"/>'
     +'<rect x="40" y="70" width="104" height="64" fill="'+C+'" '+st+'/>'
     +'<rect x="52" y="84" width="46" height="34" rx="3" fill="'+Y+'" '+st+'/>'
     +'<rect x="108" y="88" width="26" height="46" fill="'+L+'" '+st+'/>'
     +'<path d="M34 70 H150 L144 56 H40 Z" fill="'+G+'" '+st+'/>'),
    /* 情境 2：這禮拜幫同事代班——兩張名牌＋交換箭頭 */
    g02_swap: svg(
      '<rect x="16" y="40" width="70" height="46" rx="6" fill="#fff" '+st+'/><rect x="16" y="40" width="70" height="14" rx="6" fill="'+G+'" '+st+'/>'
     +'<circle cx="38" cy="70" r="8" fill="'+L+'" '+th(2.5)+'/><line x1="52" y1="66" x2="76" y2="66" '+th(3)+'/><line x1="52" y1="76" x2="70" y2="76" '+th(3)+'/>'
     +'<rect x="114" y="64" width="70" height="46" rx="6" fill="#fff" '+st+'/><rect x="114" y="64" width="70" height="14" rx="6" fill="'+B+'" '+st+'/>'
     +'<circle cx="136" cy="94" r="8" fill="'+L+'" '+th(2.5)+'/><line x1="150" y1="90" x2="174" y2="90" '+th(3)+'/><line x1="150" y1="100" x2="168" y2="100" '+th(3)+'/>'
     +'<path d="M84 26 Q120 14 146 46" fill="none" stroke="'+A+'" stroke-width="5" stroke-linecap="round"/><path d="M136 46 L148 50 L150 36" fill="none" stroke="'+A+'" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>'
     +'<path d="M116 124 Q80 136 54 104" fill="none" stroke="'+A+'" stroke-width="5" stroke-linecap="round"/><path d="M64 104 L52 100 L50 114" fill="none" stroke="'+A+'" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>'),
    /* 情境 3：只有這一週——月曆上圈起一整排 */
    g02_week: svg(
      cal(36,30,128,106)
     +'<rect x="40" y="70" width="120" height="26" rx="10" fill="none" stroke="'+A+'" stroke-width="5"/>'
     +'<path d="M168 82 h18" stroke="'+A+'" stroke-width="5" stroke-linecap="round"/>'),
    /* 情境 4：現在在烤什麼？——發光的烤箱＋問號 */
    g02_oven: svg(
      '<rect x="24" y="30" width="122" height="108" rx="8" fill="#c9c2b8" '+st+'/>'
     +'<rect x="24" y="30" width="122" height="22" rx="8" fill="#8b8f96" '+st+'/>'
     +'<g fill="'+D+'"><circle cx="44" cy="41" r="4"/><circle cx="60" cy="41" r="4"/></g>'
     +'<rect x="38" y="62" width="94" height="62" rx="5" fill="'+A+'" '+st+'/>'
     +'<rect x="46" y="70" width="78" height="46" rx="3" fill="'+Y+'" opacity=".7"/>'
     +'<line x1="46" y1="102" x2="124" y2="102" '+th(2.5)+'/><g fill="#c98a3d" '+th(2)+'><circle cx="62" cy="96" r="6"/><circle cx="85" cy="96" r="6"/><circle cx="108" cy="96" r="6"/></g>'
     +'<path d="M60 22 q-6 -8 0 -14 M84 22 q-6 -8 0 -14" fill="none" '+th(2.5)+'/>'
     +qb(170,36)),
    /* 情境 5：在做月餅——烤盤上的月餅 */
    g02_mooncake: svg(
      '<path d="M14 112 L26 128 H174 L186 112 Z" fill="#8b8f96" '+st+'/>'
     +cake(52,92,22)+cake(100,88,22)+cake(148,92,22)
     +'<path d="M92 54 q-6 -10 0 -18 M108 54 q-6 -10 0 -18" fill="none" '+th(2.5)+'/>'),
    /* 情境 6：每年都做嗎？——九月的月曆頁＋問號 */
    g02_year: svg(
      '<rect x="30" y="30" width="96" height="100" rx="8" fill="#fff" '+st+'/>'
     +'<path d="M30 56 V38 a8 8 0 0 1 8 -8 H118 a8 8 0 0 1 8 8 V56 Z" fill="'+R+'" '+st+'/>'
     +txt(78,50,'SEP',16,'#fff')
     +'<circle cx="78" cy="92" r="20" fill="'+Y+'" '+st+'/>'
     +'<path d="M146 92 a26 26 0 1 1 10 -20" fill="none" stroke="'+B+'" stroke-width="5" stroke-linecap="round"/><path d="M148 64 L157 72 L164 62" fill="none" stroke="'+B+'" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>'
     +qb(166,30)),
    /* 情境 7：每年中秋前都做——月餅禮盒 */
    g02_giftbox: svg(
      '<rect x="30" y="58" width="140" height="74" rx="8" fill="'+R+'" '+st+'/>'
     +'<rect x="40" y="68" width="120" height="54" rx="5" fill="'+C+'" '+th(2.5)+'/>'
     +cake(70,95,16)+cake(130,95,16)
     +'<path d="M24 50 L100 20 L176 50" fill="none" stroke="'+Y+'" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>'
     +'<path d="M24 50 L100 20 L176 50" fill="none" '+th(2)+'/>'
     +'<circle cx="100" cy="20" r="7" fill="'+Y+'" '+st+'/>'),
    /* 情境 8：我要兩盒——兩個禮盒疊在一起 */
    g02_two: svg(
      box(46,84,108,48,R)+box(60,40,80,40,B)
     +'<path d="M168 54 l10 -6 M170 72 h12 M164 38 l6 -10" '+th(3.5)+'/>'),
    /* 情境 9：want 是狀態——想法泡泡裡的禮盒＋心 */
    g02_want: svg(
      '<circle cx="46" cy="116" r="20" fill="'+L+'" '+st+'/><path d="M38 114 h0 M54 114 h0" '+th(4)+'/><path d="M40 124 q6 5 12 0" fill="none" '+th(2.5)+'/>'
     +'<circle cx="72" cy="86" r="5" fill="#fff" '+th(2.5)+'/><circle cx="86" cy="72" r="7" fill="#fff" '+th(2.5)+'/>'
     +'<path d="M98 70 a24 24 0 0 1 8 -44 a28 28 0 0 1 50 2 a22 22 0 0 1 12 40 Z" fill="#fff" '+st+'/>'
     +box(112,40,38,26,R)
     +'<path d="M168 40 c-8 -6 -12 -11 -8 -15 c3 -3 7 -1 8 2 c2 -3 6 -5 9 -2 c4 4 0 9 -9 15 Z" fill="'+R+'" '+th(2.5)+'/>')
  });
})();

/* ============================================================
   g02 — Always or Just These Days?
   現在簡單式 vs. 現在進行式：一直如此 vs 這一陣子；頻率副詞位置；狀態動詞
   Grammar in Use Units 1–4
   ============================================================ */
window.GVIDEO.g02 = {
  kind: 'gram',
  date: '',
  title: 'Always or Just These Days?',
  titleCn: '一直都這樣，還是這陣子才這樣？',
  titleArt: ['g02_habit', 'g02_now', 'g02_state'],
  scene: '麵包店 At the bakery',
  sceneArt: 'g02_bakery',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Ruby', voice: 'f' },
    T: { name: 'Hugo', voice: 'm' }
  },
  expr: {
    simple: { t: 'V / V-s', cn: '一直都這樣：習慣、事實 → 現在簡單式', ex: 'My cousin teaches piano on weekends.', exCn: '我表姊週末教鋼琴。', note: '常跟 always、usually、often、every day 一起出現' },
    cont:   { t: 'am / is / are + V-ing', cn: '此刻、這一陣子 → 現在進行式', ex: "I'm reading a mystery novel this week.", exCn: '我這禮拜在看一本推理小說。', note: '常跟 now、right now、at the moment、these days、this week 一起出現' },
    state:  { t: 'know · want · need · belong', cn: '狀態動詞 → 用簡單式', ex: 'This bike belongs to my neighbor.', exCn: '這台腳踏車是我鄰居的。', note: 'have 當「擁有」用簡單式；當「吃、經歷」可以用進行式' }
  },
  chapters: [
    { cn: '開場' }, { cn: '一直如此，還是這一陣子？' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  cardsKick: '一直如此，還是這一陣子？',
  cards: [
    { art: 'g02_habit', lab: '現在簡單式', who: '一直都這樣' },
    { art: 'g02_now',   lab: '現在進行式', who: '此刻・這一陣子' },
    { art: 'g02_state', lab: '狀態動詞',   who: 'know、want 用簡單式' }
  ],
  flow: [
    { q: '是習慣、事實，一直都這樣嗎？', a: '現在簡單式', en: '主詞 + V(s)' },
    { q: '只有此刻或這一陣子這樣？',     a: '現在進行式', en: '主詞 + am/is/are + V-ing' },
    { q: '是 know、want 這類動詞嗎？',   a: '用簡單式',   en: '主詞 + know／want／need…' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: '同樣在講現在，英文有時候用現在簡單式，有時候用現在進行式。差別就在一個問題。', vis: { type: 'title' } },

    /* ---- 1 核心 ---- */
    { ch: 1, sp: 'N', zh: '先問自己：這件事是一直都這樣，還是只有現在這一陣子這樣？', vis: { type: 'cards', show: 0 } },
    { ch: 1, sp: 'N', zh: '如果是習慣、事實，以後也還是這樣，就用現在簡單式。',
      hi: [{ t: '現在簡單式', k: 'simple', c: 3 }], vis: { type: 'cards', show: 1, pop: true } },
    { ch: 1, sp: 'A', en: 'My dad drinks green tea after dinner.', cn: '我爸晚餐後都喝綠茶。',
      hi: [{ t: 'drinks', cn: '每天的習慣', k: 'simple', c: 3 }], vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'N', zh: '如果是說話的這一刻正在做，就用現在進行式。',
      hi: [{ t: '現在進行式', k: 'cont', c: 4 }], vis: { type: 'cards', show: 2, pop: true } },
    { ch: 1, sp: 'T', en: 'Shh, Grandma is taking a nap.', cn: '噓，奶奶在睡午覺。',
      hi: [{ t: 'is taking', cn: '這一刻', k: 'cont', c: 4 }], vis: { type: 'cards', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: '進行式還有一個常被忽略的用法：不是這一秒，而是最近這一陣子暫時這樣。',
      hi: [{ t: '進行式', k: 'cont', c: 4 }], vis: { type: 'cards', show: 2, lit: 1 } },
    { ch: 1, sp: 'A', en: 'My mom is learning to swim this summer.', cn: '我媽這個夏天在學游泳。',
      hi: [{ t: 'is learning', cn: '這一陣子', k: 'cont', c: 4 }], vis: { type: 'cards', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: '還要注意一群動詞，像 know、want、need。它們講的是狀態，不是動作，所以用簡單式。',
      hi: [{ t: '狀態', k: 'state', c: 2 }], vis: { type: 'cards', show: 3, pop: true } },
    { ch: 1, sp: 'T', en: 'I really need a new pair of shoes.', cn: '我真的需要一雙新鞋。',
      hi: [{ t: 'need', cn: '狀態動詞', k: 'state', c: 2 }], vis: { type: 'cards', show: 3, lit: 2 } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: '現在簡單式：主詞加動詞。主詞是他、她、它，動詞後面要加 s。',
      hi: [{ t: '現在簡單式', k: 'simple', c: 3 }],
      vis: { type: 'pattern', kick: 'Present simple 現在簡單式', rows: [
        { lab: 'I / we / they', blocks: [{ t: 'We', k: 's' }, { t: 'eat', k: 'v' }, { t: 'dinner at seven', k: 'o' }] },
        { lab: 'he / she / it', blocks: [{ t: 'She', k: 's' }, { t: 'eats', k: 'v' }, { t: 'dinner at seven', k: 'o' }] }
      ], note: '第三人稱單數：eat → eats、watch → watches' } },
    { ch: 2, sp: 'N', zh: '現在進行式：主詞加 am、is、are，再加動詞 ing。可以是此刻，也可以是這一陣子。',
      hi: [{ t: '現在進行式', k: 'cont', c: 4 }],
      vis: { type: 'pattern', kick: 'Present continuous 現在進行式', rows: [
        { lab: '此刻',     blocks: [{ t: 'The kids', k: 's' }, { t: 'are playing', k: 'v' }, { t: 'outside', k: 'n' }, { t: 'right now', k: 'o' }] },
        { lab: '這一陣子', blocks: [{ t: 'I', k: 's' }, { t: 'am taking', k: 'v' }, { t: 'a yoga class', k: 'n' }, { t: 'this month', k: 'o' }] }
      ] } },
    { ch: 2, sp: 'N', zh: '頻率副詞放哪裡？遇到 be 動詞，放在它後面；遇到一般動詞，放在它前面。',
      vis: { type: 'pattern', kick: '頻率副詞的位置', rows: [
        { lab: 'be 動詞之後', blocks: [{ t: 'He', k: 's' }, { t: 'is', k: 'v' }, { t: 'usually', k: 'o', add: true }, { t: 'calm', k: 'n' }] },
        { lab: '一般動詞之前', blocks: [{ t: 'He', k: 's' }, { t: 'usually', k: 'o', add: true }, { t: 'walks', k: 'v' }, { t: 'to school', k: 'n' }] }
      ], note: 'hardly ever 本身就是否定，不用再加 not' } },
    { ch: 2, sp: 'N', zh: '聽到這些字，就是提示：頻率字配簡單式；now 這類字，還有這禮拜、最近，配進行式。',
      vis: { type: 'family', kick: 'Signal words 提示字', core: 'Signal words', coreCn: '看到就知道', art: 'g02_habit', items: [
        { t: 'always · usually · every day', cn: '簡單式' }, { t: 'now · right now · at the moment', cn: '進行式：此刻' }, { t: 'this week · these days', cn: '進行式：這一陣子' }
      ] } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: 'Hugo 晚上走進常去的麵包店，遇到店員 Ruby。注意每一句是常態，還是暫時。', vis: { type: 'scene', art: 'g02_bakery' } },
    { ch: 3, sp: 'T', en: "Hi, Ruby! You don't usually work at night.", cn: '嗨，Ruby！你平常不是晚上上班的。',
      hi: [{ t: "don't usually work", cn: '平常的班', k: 'simple', c: 3 }], vis: { type: 'scene', art: 'g02_moon' } },
    { ch: 3, sp: 'A', en: "No, but I'm covering for a coworker this week.", cn: '對，不過這禮拜我在幫同事代班。',
      hi: [{ t: "I'm covering", cn: '暫時代班', k: 'cont', c: 4 }], vis: { type: 'scene', art: 'g02_swap' } },
    { ch: 3, sp: 'N', zh: "平常的班是常態，用簡單式；代班只有這禮拜，是暫時的，所以用 I'm covering。",
      hi: [{ t: "I'm covering", k: 'cont', c: 4 }], vis: { type: 'scene', art: 'g02_week' } },
    { ch: 3, sp: 'T', en: 'What are you baking right now? It smells amazing.', cn: '你現在在烤什麼？好香喔。',
      hi: [{ t: 'are you baking', cn: '這一刻', k: 'cont', c: 4 }, { t: 'smells', cn: '狀態', k: 'state', c: 2 }], vis: { type: 'scene', art: 'g02_oven' } },
    { ch: 3, sp: 'A', en: "I'm making mooncakes for the Mid-Autumn Festival.", cn: '我在做中秋節的月餅。',
      hi: [{ t: "I'm making", cn: '正在做', k: 'cont', c: 4 }], vis: { type: 'scene', art: 'g02_mooncake' } },
    { ch: 3, sp: 'T', en: 'Oh, nice. Do you make them every year?', cn: '喔，不錯。你們每年都做嗎？',
      hi: [{ t: 'Do you make', cn: '問習慣', k: 'simple', c: 3 }], vis: { type: 'scene', art: 'g02_year' } },
    { ch: 3, sp: 'A', en: 'Yes, we always make them before the festival.', cn: '對，我們每年中秋節前都會做。',
      hi: [{ t: 'always make', cn: '每年都這樣', k: 'simple', c: 3 }], vis: { type: 'scene', art: 'g02_giftbox' } },
    { ch: 3, sp: 'T', en: 'Great. I want two boxes, please.', cn: '太好了，我要兩盒。',
      hi: [{ t: 'I want', cn: '狀態動詞', k: 'state', c: 2 }], vis: { type: 'scene', art: 'g02_two' } },
    { ch: 3, sp: 'N', zh: "想要是一種狀態，沒辦法做到一半停下來，所以就用 I want，用簡單式。",
      hi: [{ t: 'I want', k: 'state', c: 2 }], vis: { type: 'scene', art: 'g02_want' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '同一個人，換一個形狀，意思就從長久變成暫時。',
      vis: { type: 'vs', sm: true, kick: '長久 vs 暫時',
        a: { w: 'My uncle works at a bank in Taipei.', def: '我叔叔在台北的銀行上班。', cn: '他的工作 → 現在簡單式' },
        b: { w: 'My uncle is working in Japan this year.', def: '我叔叔今年在日本工作。', cn: '只有今年 → 現在進行式' } } },
    { ch: 4, sp: 'A', en: 'My uncle works at a bank in Taipei.', cn: '我叔叔在台北的銀行上班。',
      hi: [{ t: 'works', cn: '長久的工作', k: 'simple', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '長久 vs 暫時',
        a: { w: 'My uncle works at a bank in Taipei.', def: '我叔叔在台北的銀行上班。', cn: '他的工作 → 現在簡單式' },
        b: { w: 'My uncle is working in Japan this year.', def: '我叔叔今年在日本工作。', cn: '只有今年 → 現在進行式' } } },
    { ch: 4, sp: 'T', en: 'My uncle is working in Japan this year.', cn: '我叔叔今年在日本工作。',
      hi: [{ t: 'is working', cn: '只有今年', k: 'cont', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '長久 vs 暫時',
        a: { w: 'My uncle works at a bank in Taipei.', def: '我叔叔在台北的銀行上班。', cn: '他的工作 → 現在簡單式' },
        b: { w: 'My uncle is working in Japan this year.', def: '我叔叔今年在日本工作。', cn: '只有今年 → 現在進行式' } } },
    { ch: 4, sp: 'N', zh: '第一句講的是他的工作，一直都是這樣；第二句只有今年，明年可能就回來了。',
      vis: { type: 'vs', sm: true, kick: '長久 vs 暫時',
        a: { w: 'My uncle works at a bank in Taipei.', def: '我叔叔在台北的銀行上班。', cn: '他的工作 → 現在簡單式' },
        b: { w: 'My uncle is working in Japan this year.', def: '我叔叔今年在日本工作。', cn: '只有今年 → 現在進行式' } } },
    { ch: 4, sp: 'N', zh: '再看 have。當擁有的時候是狀態，用簡單式；當吃東西的時候是動作，就可以用進行式。',
      vis: { type: 'vs', sm: true, kick: 'have：擁有 vs 吃',
        a: { w: 'We have a big kitchen.', def: '我們家有一個大廚房。', cn: '擁有 → 簡單式' },
        b: { w: "We're having breakfast in the kitchen.", def: '我們正在廚房吃早餐。', cn: '在吃 → 進行式' } } },
    { ch: 4, sp: 'A', en: 'We have a big kitchen.', cn: '我們家有一個大廚房。',
      hi: [{ t: 'have', cn: '擁有', k: 'state', c: 2 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: 'have：擁有 vs 吃',
        a: { w: 'We have a big kitchen.', def: '我們家有一個大廚房。', cn: '擁有 → 簡單式' },
        b: { w: "We're having breakfast in the kitchen.", def: '我們正在廚房吃早餐。', cn: '在吃 → 進行式' } } },
    { ch: 4, sp: 'T', en: "We're having breakfast in the kitchen.", cn: '我們正在廚房吃早餐。',
      hi: [{ t: "We're having", cn: '正在吃', k: 'cont', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: 'have：擁有 vs 吃',
        a: { w: 'We have a big kitchen.', def: '我們家有一個大廚房。', cn: '擁有 → 簡單式' },
        b: { w: "We're having breakfast in the kitchen.", def: '我們正在廚房吃早餐。', cn: '在吃 → 進行式' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '最後給你一個判斷流程，照順序問自己三個問題。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一問：這是習慣、事實，一直都這樣嗎？是的話，用現在簡單式。',
      hi: [{ t: '現在簡單式', k: 'simple', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'A', en: 'The library closes early on Sundays.', cn: '圖書館星期天都提早關門。',
      hi: [{ t: 'closes', cn: '固定如此', k: 'simple', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二問：只有此刻，或這一陣子才這樣？是的話，用現在進行式。',
      hi: [{ t: '現在進行式', k: 'cont', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'T', en: "I'm sharing a desk with Tom this week.", cn: '我這禮拜跟 Tom 共用一張桌子。',
      hi: [{ t: "I'm sharing", cn: '這一陣子', k: 'cont', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '第三問：再檢查動詞，是 know、want 這類狀態動詞嗎？是的話，就算講的是現在，還是用簡單式。',
      hi: [{ t: '狀態動詞', k: 'state', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'A', en: 'I remember his phone number.', cn: '我記得他的電話號碼。',
      hi: [{ t: 'remember', cn: '狀態動詞', k: 'state', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說說看。看到中文情境，先自己用英文說出來，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：你阿姨每天早上都去公園跳舞。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '你阿姨每天早上都去公園跳舞。' } },
    { ch: 6, sp: 'A', en: 'My aunt goes dancing in the park every morning.', cn: '我阿姨每天早上都去公園跳舞。',
      hi: [{ t: 'goes dancing', cn: '習慣 → 簡單式', k: 'simple', c: 3 }],
      vis: { type: 'speak', n: 1, show: true, sit: '你阿姨每天早上都去公園跳舞。', a: 'My aunt goes dancing in the park every morning.' } },
    { ch: 6, sp: 'N', zh: '情境二：你的手機送修了，這幾天你在用爸爸的舊手機。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '你的手機送修了，這幾天你在用爸爸的舊手機。' } },
    { ch: 6, sp: 'T', en: "I'm using my dad's old phone these days.", cn: '我這幾天在用我爸的舊手機。',
      hi: [{ t: "I'm using", cn: '暫時 → 進行式', k: 'cont', c: 4 }],
      vis: { type: 'speak', n: 2, show: true, sit: '你的手機送修了，這幾天你在用爸爸的舊手機。', a: "I'm using my dad's old phone these days." } },
    { ch: 6, sp: 'N', zh: '情境三：朋友問桌上那把傘是誰的，你說是你哥哥的。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '朋友問桌上那把傘是誰的，你說是你哥哥的。' } },
    { ch: 6, sp: 'A', en: 'It belongs to my brother.', cn: '那是我哥哥的。',
      hi: [{ t: 'belongs', cn: '狀態動詞 → 簡單式', k: 'state', c: 2 }],
      vis: { type: 'speak', n: 3, show: true, sit: '朋友問桌上那把傘是誰的，你說是你哥哥的。', a: 'It belongs to my brother.' } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結一下：一直都這樣，用現在簡單式；此刻或這一陣子，用現在進行式；狀態動詞，用簡單式。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '下次開口前，先問一句：這是一直都這樣，還是這陣子才這樣？', vis: { type: 'end' } }
  ]
};
