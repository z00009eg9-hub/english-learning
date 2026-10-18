/* ============================================================
   B2 Read 文法影片解說 — dg20260819b1p（Grammar in Use Unit 2，B1+）
   格式見 b2lab/tools/GVIDEO_SPEC.md；範本 gvideo/dg20261014b1.js。
   核心圖用 cards：普遍事實／時刻表／if・when 子句。
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
  var GR='#9aa3ad', WD='#a0673a';
  var clock=function(cx,cy,r,ha,ma){
    var p=function(a,len){ var t=(a-90)*Math.PI/180; return (cx+len*Math.cos(t)).toFixed(1)+' '+(cy+len*Math.sin(t)).toFixed(1); };
    return '<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="#fff" '+th(4)+'/>'
      +'<path d="M'+cx+' '+cy+' L'+p(ha,r*0.5)+'" fill="none" '+th(4.5)+'/>'
      +'<path d="M'+cx+' '+cy+' L'+p(ma,r*0.76)+'" fill="none" '+th(3.5)+'/>'
      +'<circle cx="'+cx+'" cy="'+cy+'" r="4" fill="'+D+'"/>'; };
  var cloud=function(dx,dy,fill){ return '<path transform="translate('+dx+' '+dy+')" d="M30 70 a20 20 0 0 1 4 -38 a28 28 0 0 1 52 -8 a22 22 0 0 1 32 22 a18 18 0 0 1 -4 24 Z" fill="'+fill+'" '+st+'/>'; };

  Object.assign(window.GVIDEO_ART, {
    /* 卡 1：普遍事實——地球＋打勾 */
    dg20260819b1p_fact: svg(
      '<circle cx="92" cy="78" r="56" fill="'+B+'" '+st+'/>'
     +'<path d="M58 40 C70 34 86 40 84 52 C82 62 66 62 66 74 C66 86 52 90 44 84 C38 70 44 50 58 40 Z" fill="'+G+'" '+th(2.5)+'/>'
     +'<path d="M104 70 C118 62 136 70 140 84 C134 104 120 118 104 124 C100 110 112 102 104 92 C98 84 96 76 104 70 Z" fill="'+G+'" '+th(2.5)+'/>'
     +'<path d="M100 30 C110 28 120 34 118 42 C110 46 100 40 100 30 Z" fill="'+G+'" '+th(2.5)+'/>'
     +chk(160,112,20)),
    /* 卡 2：時刻表——出發看板 */
    dg20260819b1p_table: svg(
      '<line x1="60" y1="118" x2="60" y2="140" '+th(5)+'/><line x1="140" y1="118" x2="140" y2="140" '+th(5)+'/>'
     +'<rect x="20" y="18" width="160" height="102" rx="8" fill="#33405c" '+st+'/>'
     +'<rect x="20" y="18" width="160" height="22" rx="8" fill="'+A+'" '+st+'/>'
     +'<g fill="'+Y+'"><rect x="34" y="52" width="50" height="8" rx="2"/><rect x="34" y="74" width="62" height="8" rx="2"/><rect x="34" y="96" width="44" height="8" rx="2"/></g>'
     +txt(146,61,'7:15',15,Y)+txt(146,83,'8:40',15,Y)+txt(146,105,'9:05',15,Y)),
    /* 卡 3：if / when——岔路路標 */
    dg20260819b1p_ifwhen: svg(
      '<line x1="8" y1="138" x2="192" y2="138" '+st+'/>'
     +'<rect x="94" y="30" width="12" height="108" fill="'+WD+'" '+st+'/>'
     +'<path d="M30 40 H96 V66 H30 L16 53 Z" fill="'+B+'" '+st+'/>'+txt(60,60,'IF',18,'#fff')
     +'<path d="M104 74 H170 L184 87 L170 100 H104 Z" fill="'+G+'" '+st+'/>'+txt(140,94,'WHEN',15,'#fff')),

    /* 情境 1：山上露營——帳篷＋松樹＋月亮 */
    dg20260819b1p_tent: svg(
      '<path d="M0 108 L40 70 L70 92 L110 54 L160 96 L200 74 V150 H0 Z" fill="'+S+'" opacity=".6"/>'
     +'<line x1="8" y1="136" x2="192" y2="136" '+st+'/>'
     +'<path d="M150 22 a16 16 0 1 0 14 26 a12 12 0 1 1 -14 -26 Z" fill="'+Y+'" '+st+'/>'
     +'<path d="M50 136 L96 64 L142 136 Z" fill="'+A+'" '+st+'/>'
     +'<path d="M96 64 L84 136 H108 Z" fill="'+C+'" '+st+'/>'
     +'<path d="M24 136 V122 M14 122 L24 92 L34 122 Z M16 108 L24 84 L32 108" fill="'+G+'" '+st+'/>'
     +'<path d="M170 136 V124 M158 124 L170 88 L182 124 Z" fill="'+G+'" '+st+'/>'),
    /* 情境 2：明天接駁車幾點開？——小巴＋問號 */
    dg20260819b1p_shuttle: svg(
      '<line x1="8" y1="134" x2="192" y2="134" '+st+'/>'
     +'<path d="M20 120 V60 a14 14 0 0 1 14 -14 H136 a14 14 0 0 1 14 14 L162 92 V120 Z" fill="'+G+'" '+st+'/>'
     +'<rect x="32" y="58" width="28" height="24" rx="4" fill="'+S+'" '+st+'/><rect x="68" y="58" width="28" height="24" rx="4" fill="'+S+'" '+st+'/>'
     +'<path d="M104 58 H134 L146 88 H104 Z" fill="'+S+'" '+st+'/>'
     +'<rect x="21" y="96" width="140" height="7" fill="#fff"/>'
     +'<circle cx="52" cy="122" r="11" fill="'+D+'"/><circle cx="130" cy="122" r="11" fill="'+D+'"/>'
     +'<circle cx="52" cy="122" r="4" fill="'+GR+'"/><circle cx="130" cy="122" r="4" fill="'+GR+'"/>'
     +qb(176,32)),
    /* 情境 3：六點十五分開——時鐘 6:15 */
    dg20260819b1p_clock615: svg(
      clock(82,76,54,187.5,90)
     +'<g fill="'+D+'"><circle cx="82" cy="30" r="3"/><circle cx="128" cy="76" r="3"/><circle cx="82" cy="122" r="3"/><circle cx="36" cy="76" r="3"/></g>'
     +'<rect x="140" y="20" width="54" height="30" rx="6" fill="'+D+'" '+st+'/>'+txt(167,42,'6:15',18,Y)
     +chk(167,104,18)),
    /* 情境 4：時間是表定的——站牌上的時刻表 */
    dg20260819b1p_board: svg(
      '<line x1="8" y1="138" x2="192" y2="138" '+st+'/>'
     +'<line x1="70" y1="40" x2="70" y2="138" '+th(6)+'/>'
     +'<circle cx="70" cy="32" r="20" fill="'+G+'" '+st+'/>'
     +'<rect x="60" y="24" width="20" height="14" rx="3" fill="#fff" '+th(2)+'/><circle cx="64" cy="40" r="2" fill="#fff"/><circle cx="76" cy="40" r="2" fill="#fff"/>'
     +'<rect x="92" y="54" width="90" height="72" rx="6" fill="#fff" '+st+'/>'
     +'<rect x="92" y="54" width="90" height="16" rx="6" fill="'+G+'" '+st+'/>'
     +txt(137,92,'6:15',16)+'<path d="M106 104 h62 M106 114 h50" stroke="'+GR+'" stroke-width="4" stroke-linecap="round"/>'
     +'<rect x="100" y="78" width="74" height="20" rx="4" fill="none" stroke="'+A+'" stroke-width="3"/>'),
    /* 情境 5：要帶厚外套嗎？——羽絨外套＋問號 */
    dg20260819b1p_jacket: svg(
      '<path d="M70 26 L58 32 L30 50 L22 112 L42 116 L48 72 L52 130 H128 L132 72 L138 116 L158 112 L150 50 L122 32 L110 26 C104 36 76 36 70 26 Z" fill="'+R+'" '+st+'/>'
     +'<path d="M54 62 H126 M53 84 H127 M52 106 H128" fill="none" '+th(2.5)+'/>'
     +'<line x1="90" y1="34" x2="90" y2="130" '+th(3)+'/>'
     +'<path d="M70 26 C76 18 104 18 110 26 C104 36 76 36 70 26 Z" fill="'+GR+'" '+st+'/>'
     +qb(176,34)),
    /* 情境 6：越高越冷——雪山＋向上箭頭＋溫度計 */
    dg20260819b1p_peak: svg(
      '<path d="M10 136 L74 30 L138 136 Z" fill="'+GR+'" '+st+'/>'
     +'<path d="M54 63 L74 30 L94 63 L84 56 L74 66 L64 56 Z" fill="#fff" '+st+'/>'
     +'<line x1="8" y1="136" x2="192" y2="136" '+st+'/>'
     +'<path d="M120 110 V54 M110 66 L120 52 L130 66" fill="none" stroke="'+B+'" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>'
     +'<rect x="156" y="30" width="16" height="74" rx="8" fill="#fff" '+st+'/>'
     +'<circle cx="164" cy="112" r="13" fill="'+B+'" '+st+'/><rect x="160" y="80" width="8" height="26" fill="'+B+'"/>'
     +'<path d="M172 46 h6 M172 60 h6 M172 74 h6" '+th(2.5)+'/>'),
    /* 情境 7：一直都成立——雪花＋冷冷的溫度計 */
    dg20260819b1p_cold: svg(
      '<g '+th(5)+'><line x1="70" y1="30" x2="70" y2="122"/><line x1="30" y1="53" x2="110" y2="99"/><line x1="30" y1="99" x2="110" y2="53"/></g>'
     +'<g stroke="'+S+'" stroke-width="2.5" stroke-linecap="round"><line x1="70" y1="30" x2="70" y2="122"/><line x1="30" y1="53" x2="110" y2="99"/><line x1="30" y1="99" x2="110" y2="53"/></g>'
     +'<path d="M60 36 L70 46 L80 36 M60 116 L70 106 L80 116 M34 66 L48 62 L44 48 M106 86 L92 90 L96 104 M34 86 L48 90 L44 104 M106 66 L92 62 L96 48" fill="none" '+th(3.5)+'/>'
     +'<circle cx="70" cy="76" r="9" fill="'+S+'" '+st+'/>'
     +'<rect x="146" y="24" width="18" height="84" rx="9" fill="#fff" '+st+'/>'
     +'<circle cx="155" cy="116" r="14" fill="'+B+'" '+st+'/><rect x="151" y="96" width="8" height="12" fill="'+B+'"/>'
     +chk(180,40,13)),
    /* 情境 8：萬一下雨呢？——雨雲＋問號 */
    dg20260819b1p_rain: svg(
      cloud(16,10,GR)
     +'<g stroke="'+B+'" stroke-width="5" stroke-linecap="round"><line x1="54" y1="96" x2="46" y2="116"/><line x1="78" y1="96" x2="70" y2="116"/><line x1="102" y1="96" x2="94" y2="116"/><line x1="126" y1="96" x2="118" y2="116"/><line x1="66" y1="124" x2="62" y2="134"/><line x1="110" y1="124" x2="106" y2="134"/></g>'
     +qb(170,30)),
    /* 情境 9：下雨就在小木屋玩牌——小木屋＋撲克牌 */
    dg20260819b1p_cards: svg(
      '<line x1="8" y1="134" x2="192" y2="134" '+st+'/>'
     +'<rect x="16" y="66" width="86" height="68" fill="'+WD+'" '+st+'/>'
     +'<path d="M16 82 H102 M16 98 H102 M16 114 H102" '+th(2)+'/>'
     +'<path d="M6 70 L59 30 L112 70 Z" fill="'+R+'" '+st+'/>'
     +'<rect x="44" y="96" width="28" height="38" fill="'+L+'" '+st+'/>'
     +'<g transform="rotate(-16 150 96)"><rect x="128" y="64" width="40" height="58" rx="6" fill="#fff" '+st+'/><path d="M140 84 c-4 -6 -12 -2 -8 4 l8 8 l8 -8 c4 -6 -4 -10 -8 -4 Z" fill="'+R+'"/></g>'
     +'<g transform="rotate(12 166 96)"><rect x="146" y="62" width="40" height="58" rx="6" fill="#fff" '+st+'/><path d="M166 80 l8 10 l-8 10 l-8 -10 Z" fill="'+R+'"/></g>'),
    /* 情境 10：if 子句用現在式，will 放主句——IF 方塊 → WILL 方塊 */
    dg20260819b1p_branch: svg(
      '<rect x="12" y="50" width="70" height="50" rx="10" fill="'+B+'" '+st+'/>'+txt(47,83,'IF',22,'#fff')
     +'<path d="M90 75 H116" '+th(5)+'/><path d="M108 63 L122 75 L108 87" fill="none" '+th(5)+'/>'
     +'<rect x="128" y="50" width="62" height="50" rx="10" fill="'+G+'" '+st+'/>'+txt(159,82,'WILL',17,'#fff')
     +cloud(-6,92,GR).replace('translate(-6 92)','translate(18 104) scale(.32)')
     +'<path d="M158 112 l10 10 l12 -16" fill="none" stroke="'+G+'" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>')
  });
})();

/* ============================================================
   dg20260819b1p — Fixed and Reliable: Advanced Present Simple
   Grammar in Use Unit 2（Present simple）＋ Unit 19、25 的時刻表與 if/when 子句，B1+
   ============================================================ */
window.GVIDEO.dg20260819b1p = {
  kind: 'gram',
  date: '2026-08-19',
  title: 'Fixed and Reliable',
  titleCn: '固定、可靠、不會變：現在簡單式的進階用法',
  titleArt: ['dg20260819b1p_fact', 'dg20260819b1p_table', 'dg20260819b1p_ifwhen'],
  scene: '山上露營 Camping trip',
  sceneArt: 'dg20260819b1p_tent',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Hannah', voice: 'f' },
    T: { name: 'Marcus', voice: 'm' }
  },
  expr: {
    fact: { t: 'V / V-s（事實）', cn: '永遠成立的事 → 現在簡單式', ex: 'Ice cream melts quickly in the sun.', exCn: '冰淇淋在太陽底下很快就融化。', note: '科學定律、自然現象、普遍觀察都用簡單式' },
    tt:   { t: 'starts / leaves / closes', cn: '排好的時刻表 → 用現在式講未來', ex: 'The library closes early this Friday.', exCn: '圖書館這個星期五提早關門。', note: '班表、營業時間、課表、節目表：不是我能決定的' },
    ifw:  { t: 'if / when + 現在式', cn: 'if、when 子句講未來 → 不放 will', ex: "I'll text you as soon as the package arrives.", exCn: '包裹一到我就傳訊息給你。', note: 'as soon as、until、before、after 也一樣；will 只放主句' }
  },
  chapters: [
    { cn: '開場' }, { cn: '三個進階用法' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  cardsKick: 'Facts, timetables, if/when 事實・時刻表・子句',
  cards: [
    { art: 'dg20260819b1p_fact',   lab: '普遍事實', who: '永遠都成立' },
    { art: 'dg20260819b1p_table',  lab: '時刻表',   who: '排好的未來' },
    { art: 'dg20260819b1p_ifwhen', lab: 'if/when',  who: '子句裡不放 will' }
  ],
  flow: [
    { q: '是永遠成立的事實嗎？',     a: '現在簡單式',   en: '主詞 + V(s)' },
    { q: '是班表、課表排好的未來？', a: '現在簡單式',   en: '主詞 + V(s) + 未來時間' },
    { q: '在 if、when 子句裡嗎？',   a: '子句用現在式', en: 'if / when + 現在式，主句 + will' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: '現在簡單式不只講習慣，還能講事實，甚至講未來。這支影片帶你看三個進階用法。', vis: { type: 'title' } },

    /* ---- 1 核心：三個進階用法 ---- */
    { ch: 1, sp: 'N', zh: '這三個用法的共同點，是固定、不會變。先看這三張卡。', vis: { type: 'cards', show: 0 } },
    { ch: 1, sp: 'N', zh: '第一張是普遍事實。科學定律、自然現象，永遠都成立，用現在簡單式。',
      hi: [{ t: '普遍事實', k: 'fact', c: 3 }], vis: { type: 'cards', show: 1, pop: true } },
    { ch: 1, sp: 'A', en: 'Sound travels faster in water than in air.', cn: '聲音在水裡傳得比在空氣中快。',
      hi: [{ t: 'travels', cn: '永遠成立', k: 'fact', c: 3 }], vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'N', zh: '第二張是時刻表。班表、課表都是別人排好的，就算講明天，也用現在簡單式。',
      hi: [{ t: '時刻表', k: 'tt', c: 4 }], vis: { type: 'cards', show: 2, pop: true } },
    { ch: 1, sp: 'T', en: 'The museum tour starts at two this afternoon.', cn: '博物館導覽今天下午兩點開始。',
      hi: [{ t: 'starts', cn: '表定時間', k: 'tt', c: 4 }], vis: { type: 'cards', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: '第三張是 if 和 when 子句。講未來的條件或時間點，子句裡不放 will，一樣用現在簡單式。',
      hi: [{ t: '不放 will', k: 'ifw', c: 2 }], vis: { type: 'cards', show: 3, pop: true } },
    { ch: 1, sp: 'A', en: "We'll start dinner as soon as Dad gets home.", cn: '爸爸一到家，我們就開飯。',
      hi: [{ t: 'gets home', cn: '子句用現在式', k: 'ifw', c: 2 }], vis: { type: 'cards', show: 3, lit: 2 } },
    { ch: 1, sp: 'N', zh: '爸爸到家明明是等一下才發生，子句卻用現在式 gets；will 只放在另一半的主句。',
      vis: { type: 'cards', show: 3 } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: '時刻表的句型：主詞加動詞，後面放一個未來的時間。常用的動詞有 start、leave、open、close。',
      hi: [{ t: '時刻表', k: 'tt', c: 4 }],
      vis: { type: 'pattern', kick: 'Timetables 時刻表', rows: [
        { lab: '交通', blocks: [{ t: 'The ferry', k: 's' }, { t: 'departs', k: 'v' }, { t: 'at noon tomorrow', k: 'o' }] },
        { lab: '考試', blocks: [{ t: 'The exam', k: 's' }, { t: 'begins', k: 'v' }, { t: 'next Monday', k: 'o' }] }
      ], note: '別人排好、不是我能決定的' } },
    { ch: 2, sp: 'N', zh: 'if 和 when 的句型：子句用現在式，主句才用 will。兩半的順序可以對調。',
      hi: [{ t: '子句用現在式', k: 'ifw', c: 2 }],
      vis: { type: 'pattern', kick: 'if / when clauses 子句', rows: [
        { lab: 'if 子句', blocks: [{ t: 'If', k: 'n' }, { t: 'it', k: 's' }, { t: 'snows', k: 'v' }, { t: "we'll stay home", k: 'o' }] },
        { lab: 'when 子句', blocks: [{ t: 'When', k: 'n' }, { t: 'she', k: 's' }, { t: 'lands', k: 'v' }, { t: "she'll call us", k: 'o' }] }
      ], note: '子句：現在式　主句：will' } },
    { ch: 2, sp: 'N', zh: '跟 if、when 同一條規則的，還有 as soon as、until、before、after。',
      vis: { type: 'family', kick: 'Same rule 同一條規則', core: 'if / when …', coreCn: '子句裡用現在式', art: 'dg20260819b1p_ifwhen', items: [
        { t: 'if · unless', cn: '如果・除非' }, { t: 'when · as soon as', cn: '當…時・一…就' }, { t: 'before · after', cn: '之前・之後' }, { t: 'until', cn: '直到' }
      ] } },
    { ch: 2, sp: 'N', zh: '頻率副詞也有細微差別。hardly ever 和 never 本身就是否定，句子裡不用再加 not。',
      vis: { type: 'pattern', kick: 'Frequency 頻率副詞', rows: [
        { lab: '幾乎不', blocks: [{ t: 'My boss', k: 's' }, { t: 'hardly ever', k: 'n', add: true }, { t: 'takes', k: 'v' }, { t: 'a day off', k: 'o' }] },
        { lab: '從不', blocks: [{ t: 'He', k: 's' }, { t: 'never', k: 'n', add: true }, { t: 'drinks', k: 'v' }, { t: 'soda', k: 'o' }] }
      ], note: 'always > usually > often > sometimes > rarely > hardly ever > never' } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: '來聽 Hannah 和 Marcus 準備去山上露營。注意他們怎麼講明天的事。', vis: { type: 'scene', art: 'dg20260819b1p_tent' } },
    { ch: 3, sp: 'A', en: 'What time does the shuttle bus leave tomorrow?', cn: '明天的接駁車幾點開？',
      hi: [{ t: 'does the shuttle bus leave', cn: '問班表', k: 'tt', c: 4 }], vis: { type: 'scene', art: 'dg20260819b1p_shuttle' } },
    { ch: 3, sp: 'T', en: 'It leaves at six fifteen, so we need to get up early.', cn: '六點十五分開，所以我們得早起。',
      hi: [{ t: 'leaves', cn: '表定時間', k: 'tt', c: 4 }], vis: { type: 'scene', art: 'dg20260819b1p_clock615' } },
    { ch: 3, sp: 'N', zh: '接駁車時間是表定的，所以講明天也用簡單式 leaves。',
      hi: [{ t: 'leaves', k: 'tt', c: 4 }], vis: { type: 'scene', art: 'dg20260819b1p_board' } },
    { ch: 3, sp: 'A', en: 'Do I really need a heavy jacket?', cn: '我真的需要帶厚外套嗎？',
      vis: { type: 'scene', art: 'dg20260819b1p_jacket' } },
    { ch: 3, sp: 'T', en: 'Yes. The air gets colder as you go higher.', cn: '要。越往高處走，空氣就越冷。',
      hi: [{ t: 'gets colder', cn: '普遍事實', k: 'fact', c: 3 }], vis: { type: 'scene', art: 'dg20260819b1p_peak' } },
    { ch: 3, sp: 'N', zh: '越高越冷是一直都成立的事實，所以用簡單式 gets。',
      hi: [{ t: 'gets', k: 'fact', c: 3 }], vis: { type: 'scene', art: 'dg20260819b1p_cold' } },
    { ch: 3, sp: 'A', en: 'And what if it rains?', cn: '那萬一下雨呢？',
      vis: { type: 'scene', art: 'dg20260819b1p_rain' } },
    { ch: 3, sp: 'T', en: "If it rains, we'll play cards in the cabin.", cn: '如果下雨，我們就在小木屋裡玩牌。',
      hi: [{ t: 'If it rains', cn: '子句用現在式', k: 'ifw', c: 2 }], vis: { type: 'scene', art: 'dg20260819b1p_cards' } },
    { ch: 3, sp: 'N', zh: "下雨是明天的事，但 if 子句裡用現在式 rains；will 放在後面的主句 we'll play。",
      hi: [{ t: 'rains', k: 'ifw', c: 2 }], vis: { type: 'scene', art: 'dg20260819b1p_branch' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '同樣在講未來，先問一句：這是誰決定的？',
      vis: { type: 'vs', sm: true, kick: '時刻表 vs 我的安排',
        a: { w: 'The conference starts on Monday.', def: '研討會星期一開始。', cn: '主辦單位排的 → 簡單式' },
        b: { w: "I'm flying to Seoul on Sunday.", def: '我星期天飛首爾。', cn: '我自己訂的 → 進行式' } } },
    { ch: 4, sp: 'A', en: 'The conference starts on Monday.', cn: '研討會星期一開始。',
      hi: [{ t: 'starts', cn: '時刻表', k: 'tt', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '時刻表 vs 我的安排',
        a: { w: 'The conference starts on Monday.', def: '研討會星期一開始。', cn: '主辦單位排的 → 簡單式' },
        b: { w: "I'm flying to Seoul on Sunday.", def: '我星期天飛首爾。', cn: '我自己訂的 → 進行式' } } },
    { ch: 4, sp: 'T', en: "I'm flying to Seoul on Sunday.", cn: '我星期天飛首爾。',
      hi: [{ t: "I'm flying", cn: '我的安排', k: 'tt', c: 1 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '時刻表 vs 我的安排',
        a: { w: 'The conference starts on Monday.', def: '研討會星期一開始。', cn: '主辦單位排的 → 簡單式' },
        b: { w: "I'm flying to Seoul on Sunday.", def: '我星期天飛首爾。', cn: '我自己訂的 → 進行式' } } },
    { ch: 4, sp: 'N', zh: '研討會日期是主辦單位排的；飛首爾是我自己訂的行程，所以用進行式。',
      vis: { type: 'vs', sm: true, kick: '時刻表 vs 我的安排',
        a: { w: 'The conference starts on Monday.', def: '研討會星期一開始。', cn: '主辦單位排的 → 簡單式' },
        b: { w: "I'm flying to Seoul on Sunday.", def: '我星期天飛首爾。', cn: '我自己訂的 → 進行式' } } },
    { ch: 4, sp: 'N', zh: '再看一組。兩句的 if 子句都用現在式；差別在後半句：通則用簡單式，特定的未來才用 will。',
      vis: { type: 'vs', sm: true, kick: '通則 vs 特定的未來',
        a: { w: 'If you heat ice, it melts.', def: '冰一加熱就會融化。', cn: '通則 → 兩半都用簡單式' },
        b: { w: "If it's sunny tomorrow, we'll go hiking.", def: '如果明天天氣好，我們就去爬山。', cn: '特定的未來 → 主句用 will' } } },
    { ch: 4, sp: 'A', en: 'If you heat ice, it melts.', cn: '冰一加熱就會融化。',
      hi: [{ t: 'it melts', cn: '通則', k: 'fact', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '通則 vs 特定的未來',
        a: { w: 'If you heat ice, it melts.', def: '冰一加熱就會融化。', cn: '通則 → 兩半都用簡單式' },
        b: { w: "If it's sunny tomorrow, we'll go hiking.", def: '如果明天天氣好，我們就去爬山。', cn: '特定的未來 → 主句用 will' } } },
    { ch: 4, sp: 'T', en: "If it's sunny tomorrow, we'll go hiking.", cn: '如果明天天氣好，我們就去爬山。',
      hi: [{ t: "If it's sunny", cn: '子句用現在式', k: 'ifw', c: 2 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '通則 vs 特定的未來',
        a: { w: 'If you heat ice, it melts.', def: '冰一加熱就會融化。', cn: '通則 → 兩半都用簡單式' },
        b: { w: "If it's sunny tomorrow, we'll go hiking.", def: '如果明天天氣好，我們就去爬山。', cn: '特定的未來 → 主句用 will' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '最後給你一個判斷流程。想用現在簡單式之前，照順序問自己三個問題。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一問：這是永遠成立的事實嗎？是的話，用現在簡單式。',
      hi: [{ t: '現在簡單式', k: 'fact', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'A', en: 'Plants need sunlight to grow.', cn: '植物需要陽光才能生長。',
      hi: [{ t: 'need', cn: '普遍事實', k: 'fact', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二問：這是班表、課表這種排好的未來嗎？是的話，也用現在簡單式。',
      hi: [{ t: '排好的未來', k: 'tt', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'T', en: 'Registration closes next Friday.', cn: '報名下星期五截止。',
      hi: [{ t: 'closes', cn: '排好的期限', k: 'tt', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '第三問：這句話在 if 或 when 這類子句裡嗎？是的話，子句用現在式，will 留給主句。',
      hi: [{ t: '子句用現在式', k: 'ifw', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'A', en: "I'll wait here until you come back.", cn: '我會在這裡等到你回來。',
      hi: [{ t: 'until you come back', cn: '子句用現在式', k: 'ifw', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說說看。看到中文情境，先自己用英文說出來，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：你的瑜伽課，明天早上七點開始。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '你的瑜伽課，明天早上七點開始。' } },
    { ch: 6, sp: 'T', en: 'My yoga class starts at seven tomorrow morning.', cn: '我的瑜伽課明天早上七點開始。',
      hi: [{ t: 'starts', cn: '課表 → 簡單式', k: 'tt', c: 4 }],
      vis: { type: 'speak', n: 1, show: true, sit: '你的瑜伽課，明天早上七點開始。', a: 'My yoga class starts at seven tomorrow morning.' } },
    { ch: 6, sp: 'N', zh: '情境二：跟朋友說，等你下班，就去接他。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '跟朋友說，等你下班，就去接他。' } },
    { ch: 6, sp: 'A', en: "I'll pick you up when I finish work.", cn: '我下班就去接你。',
      hi: [{ t: 'when I finish', cn: '子句 → 現在式', k: 'ifw', c: 2 }],
      vis: { type: 'speak', n: 2, show: true, sit: '跟朋友說，等你下班，就去接他。', a: "I'll pick you up when I finish work." } },
    { ch: 6, sp: 'N', zh: '情境三：跟小朋友解釋，熱空氣會往上升。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '跟小朋友解釋，熱空氣會往上升。' } },
    { ch: 6, sp: 'T', en: 'Hot air rises.', cn: '熱空氣會上升。',
      hi: [{ t: 'rises', cn: '事實 → 簡單式', k: 'fact', c: 3 }],
      vis: { type: 'speak', n: 3, show: true, sit: '跟小朋友解釋，熱空氣會往上升。', a: 'Hot air rises.' } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結一下：永遠成立的事實、排好的時刻表、if 和 when 子句，這三個地方都用現在簡單式。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '記住現在簡單式的個性：固定、可靠、不會變。', vis: { type: 'end' } }
  ]
};
