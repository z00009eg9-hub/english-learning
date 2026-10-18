/* ============================================================
   B2 Read 文法影片解說 — g06（使役動詞 make / have / let / get / cause，B1+）
   格式與規則見 b2lab/tools/GVIDEO_SPEC.md；範本 gvideo/dg20261014b1.js
   Grammar in Use：make and let、have / get something done、get someone to do
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
  var GR='#c9c2b8', SV='#b8c2cf', BR='#c8873f';
  /* 扳手：中心 (x,y)、旋轉角度 */
  var wrench=function(x,y,rot){ return '<g transform="rotate('+rot+' '+x+' '+y+')">'
      +'<path d="M'+(x-6)+' '+(y-30)+' H'+(x+6)+' V'+(y+26)+' H'+(x-6)+' Z" fill="'+SV+'" '+st+'/>'
      +'<path d="M'+(x-16)+' '+(y-34)+' a17 17 0 0 0 32 0 L'+(x+10)+' '+(y-46)+' L'+(x+4)+' '+(y-36)+' H'+(x-4)+' L'+(x-10)+' '+(y-46)+' Z" fill="'+SV+'" '+st+'/>'
      +'<circle cx="'+x+'" cy="'+(y+30)+'" r="11" fill="'+SV+'" '+st+'/><circle cx="'+x+'" cy="'+(y+30)+'" r="4" fill="#fff" '+th(2.5)+'/></g>'; };

  Object.assign(window.GVIDEO_ART, {
    /* make / have / let：教練的哨子（叫人去做） */
    g06_whistle: svg(
      '<path d="M40 30 C20 60 30 110 70 96" fill="none" stroke="'+R+'" stroke-width="5" stroke-linecap="round"/>'
     +'<path d="M70 70 H128 a30 30 0 1 1 -30 34 H70 a10 10 0 0 1 -10 -10 V80 a10 10 0 0 1 10 -10 Z" fill="'+SV+'" '+st+'/>'
     +'<rect x="62" y="62" width="24" height="12" rx="3" fill="'+SV+'" '+st+'/>'
     +'<circle cx="128" cy="100" r="12" fill="#fff" '+th(2.5)+'/>'
     +'<circle cx="70" cy="96" r="5" fill="'+Y+'" '+th(2.5)+'/>'
     +'<path d="M150 50 l14 -12 M160 66 l20 -4 M140 40 l4 -18" '+th(4)+'/>'),
    /* get / cause：骨牌一個推一個 */
    g06_domino: svg(
      '<line x1="10" y1="128" x2="190" y2="128" '+st+'/>'
     +'<g transform="translate(16 0)"><g transform="rotate(-62 52 128)"><rect x="44" y="70" width="16" height="58" rx="3" fill="'+B+'" '+st+'/><circle cx="52" cy="86" r="3" fill="#fff"/><circle cx="52" cy="110" r="3" fill="#fff"/></g>'
     +'<g transform="rotate(-38 88 128)"><rect x="80" y="70" width="16" height="58" rx="3" fill="'+G+'" '+st+'/><circle cx="88" cy="86" r="3" fill="#fff"/><circle cx="88" cy="110" r="3" fill="#fff"/></g>'
     +'<g transform="rotate(-16 124 128)"><rect x="116" y="70" width="16" height="58" rx="3" fill="'+Y+'" '+st+'/><circle cx="124" cy="86" r="3" fill="#fff"/><circle cx="124" cy="110" r="3" fill="#fff"/></g></g>'
     +'<rect x="152" y="70" width="16" height="58" rx="3" fill="'+R+'" '+st+'/><circle cx="160" cy="86" r="3" fill="#fff"/><circle cx="160" cy="110" r="3" fill="#fff"/>'
     +'<path d="M30 40 Q90 10 150 40" fill="none" stroke="'+A+'" stroke-width="5" stroke-linecap="round"/>'
     +'<path d="M140 30 L151 41 L136 46" fill="none" stroke="'+A+'" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>'),
    /* have / get + 物 + 過去分詞：工具箱＋修好了 */
    g06_toolbox: svg(
      '<path d="M76 58 V44 a8 8 0 0 1 8 -8 H116 a8 8 0 0 1 8 8 V58" fill="none" '+th(5)+'/>'
     +'<rect x="30" y="58" width="140" height="74" rx="8" fill="'+R+'" '+st+'/>'
     +'<line x1="30" y1="82" x2="170" y2="82" '+st+'/><rect x="90" y="76" width="20" height="12" rx="2" fill="'+Y+'" '+th(2.5)+'/>'
     +wrench(54,58,-30)
     +chk(160,36,22)),

    /* 情境 1：剛買的老公寓——舊大樓＋梯子 */
    g06_apt: svg(
      '<line x1="8" y1="138" x2="192" y2="138" '+st+'/>'
     +'<rect x="44" y="24" width="96" height="114" fill="'+L+'" '+st+'/>'
     +'<g fill="'+S+'" '+th(2.5)+'><rect x="56" y="38" width="20" height="18"/><rect x="108" y="38" width="20" height="18"/><rect x="56" y="70" width="20" height="18"/><rect x="108" y="70" width="20" height="18"/><rect x="56" y="102" width="20" height="18"/></g>'
     +'<rect x="104" y="104" width="24" height="34" fill="'+BR+'" '+st+'/>'
     +'<path d="M66 42 L72 52" '+th(2)+'/>'
     +'<g '+th(4)+'><line x1="150" y1="138" x2="166" y2="40"/><line x1="176" y1="138" x2="190" y2="40"/></g>'
     +'<g '+th(3)+'><line x1="153" y1="120" x2="179" y2="120"/><line x1="156" y1="100" x2="182" y2="100"/><line x1="159" y1="80" x2="185" y2="80"/><line x1="162" y1="60" x2="188" y2="60"/></g>'),
    /* 情境 2：客廳是你自己漆的嗎？——滾筒＋問號 */
    g06_roller: svg(
      '<rect x="20" y="22" width="110" height="112" fill="#fff" '+st+'/>'
     +'<rect x="24" y="26" width="58" height="104" fill="'+S+'"/>'
     +'<line x1="82" y1="26" x2="82" y2="130" stroke="'+B+'" stroke-width="3" stroke-dasharray="6 5"/>'
     +'<rect x="70" y="40" width="54" height="22" rx="8" fill="'+B+'" '+st+'/>'
     +'<path d="M124 51 H136 V78 H98 V96" fill="none" '+th(4)+'/>'
     +'<rect x="92" y="96" width="12" height="34" rx="5" fill="'+A+'" '+st+'/>'
     +qb(164,40)),
    /* 情境 3：請油漆師傅漆的——油漆桶＋刷子 */
    g06_painter: svg(
      '<path d="M40 64 H120 L114 132 H46 Z" fill="'+SV+'" '+st+'/>'
     +'<ellipse cx="80" cy="64" rx="40" ry="10" fill="'+B+'" '+st+'/>'
     +'<path d="M44 74 c6 10 2 18 6 24 c4 -6 2 -16 8 -22" fill="'+B+'" '+th(2.5)+'/>'
     +'<path d="M40 64 C40 30 120 30 120 64" fill="none" '+th(3.5)+'/>'
     +'<rect x="58" y="94" width="44" height="22" rx="3" fill="#fff" '+th(2.5)+'/>'
     +'<g transform="rotate(28 156 80)"><rect x="148" y="20" width="16" height="58" rx="6" fill="'+BR+'" '+st+'/><rect x="144" y="76" width="24" height="12" fill="'+SV+'" '+st+'/><path d="M144 88 H168 V112 a12 6 0 0 1 -24 0 Z" fill="'+B+'" '+st+'/></g>'),
    /* 情境 4：牆漆好了——新牆面＋畫框＋盆栽＋打勾 */
    g06_wall: svg(
      '<rect x="14" y="18" width="172" height="116" fill="#bfe0cb" '+st+'/>'
     +'<line x1="14" y1="112" x2="186" y2="112" '+st+'/>'
     +'<rect x="40" y="38" width="48" height="38" fill="#fff" '+st+'/><path d="M46 70 L60 54 L70 64 L78 56 L84 70 Z" fill="'+B+'"/>'
     +'<path d="M120 112 L124 92 H148 L152 112 Z" fill="'+A+'" '+st+'/>'
     +'<path d="M136 92 C126 76 128 62 136 56 C144 62 146 76 136 92 M136 90 C120 84 116 74 118 66 M136 90 C152 84 156 74 154 66" fill="'+G+'" '+th(2.5)+'/>'
     +chk(160,42,18)
     +'<path d="M100 30 v12 M94 36 h12" '+th(3)+'/>'),
    /* 情境 5：舊水管讓水變黃——水龍頭滴黃水進杯子 */
    g06_tap: svg(
      '<rect x="20" y="20" width="24" height="40" rx="4" fill="'+SV+'" '+st+'/>'
     +'<path d="M44 32 H100 a18 18 0 0 1 18 18 V60 H98 V54 a4 4 0 0 0 -4 -4 H44 Z" fill="'+SV+'" '+st+'/>'
     +'<rect x="60" y="20" width="10" height="12" fill="'+SV+'" '+st+'/><rect x="50" y="14" width="30" height="8" rx="3" fill="'+R+'" '+st+'/>'
     +'<path d="M108 66 c-5 8 -5 12 0 12 c5 0 5 -4 0 -12 Z" fill="#c9a24a" '+th(2)+'/>'
     +'<path d="M84 90 H132 L126 138 H90 Z" fill="#fff" '+st+'/>'
     +'<path d="M87 108 H129 L126 136 H90 Z" fill="#d9b860"/>'
     +'<path d="M84 90 H132 L126 138 H90 Z" fill="none" '+st+'/>'
     +'<path d="M150 96 q8 -8 16 0 q8 8 16 0" fill="none" stroke="#c9a24a" stroke-width="4" stroke-linecap="round"/>'),
    /* 情境 6：星期一請水電師傅來換——扳手＋MON 月曆頁 */
    g06_wrench: svg(
      '<rect x="104" y="34" width="72" height="74" rx="6" fill="#fff" '+st+'/><path d="M104 56 V40 a6 6 0 0 1 6 -6 H170 a6 6 0 0 1 6 6 V56 Z" fill="'+R+'" '+st+'/>'
     +txt(140,92,'MON',20)
     +wrench(60,76,-35)),
    /* 情境 7：造成 vs 安排——新的水管接好了 */
    g06_pipes: svg(
      '<path d="M20 50 H96 V122 H180" fill="none" '+th(22)+'/>'
     +'<path d="M20 50 H96 V122 H180" fill="none" stroke="'+SV+'" stroke-width="15" stroke-linejoin="round"/>'
     +'<g fill="'+GR+'" '+st+'><rect x="54" y="38" width="14" height="24" rx="2"/><rect x="84" y="80" width="24" height="14" rx="2"/><rect x="134" y="110" width="14" height="24" rx="2"/></g>'
     +'<path d="M30 45 H50 M120 117 H128" stroke="#fff" stroke-width="3" stroke-linecap="round"/>'
     +chk(152,52,24)),
    /* 情境 8：怎麼讓鄰居接受噪音？——鄰居家門＋問號 */
    g06_neighbors: svg(
      '<rect x="20" y="20" width="160" height="116" fill="'+L+'" '+st+'/>'
     +'<rect x="38" y="44" width="44" height="92" fill="'+B+'" '+st+'/><circle cx="74" cy="92" r="3.5" fill="'+Y+'" '+th(2)+'/>'
     +'<rect x="118" y="44" width="44" height="92" fill="'+G+'" '+st+'/><circle cx="126" cy="92" r="3.5" fill="'+Y+'" '+th(2)+'/>'
     +'<rect x="50" y="30" width="20" height="10" rx="2" fill="#fff" '+th(2)+'/><rect x="130" y="30" width="20" height="10" rx="2" fill="#fff" '+th(2)+'/>'
     +'<path d="M92 60 l6 -8 l6 8 l6 -8" fill="none" stroke="'+R+'" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>'
     +qb(100,100)),
    /* 情境 9：送餅乾——盤子上的餅乾 */
    g06_cookies: svg(
      '<ellipse cx="100" cy="112" rx="80" ry="22" fill="#fff" '+st+'/><ellipse cx="100" cy="108" rx="58" ry="13" fill="'+S+'"/>'
     +'<g fill="'+BR+'" '+st+'><circle cx="72" cy="88" r="22"/><circle cx="126" cy="88" r="22"/><circle cx="100" cy="66" r="22"/></g>'
     +'<g fill="'+D+'"><circle cx="64" cy="82" r="3"/><circle cx="78" cy="92" r="3"/><circle cx="70" cy="98" r="2.5"/><circle cx="120" cy="82" r="3"/><circle cx="132" cy="94" r="3"/><circle cx="94" cy="60" r="3"/><circle cx="106" cy="72" r="3"/><circle cx="100" cy="56" r="2.5"/></g>'
     +'<path d="M160 30 c-4 -7 -15 -4 -12 4 c2 6 12 12 12 12 c0 0 10 -6 12 -12 c3 -8 -8 -11 -12 -4 Z" fill="'+R+'" '+th(2.5)+'/>'),
    /* 情境 10：可以施工到六點——時鐘指在 6:00＋鐵鎚 */
    g06_clock6: svg(
      '<circle cx="78" cy="76" r="54" fill="#fff" '+th(4)+'/>'
     +'<g '+th(4)+'><line x1="78" y1="28" x2="78" y2="36"/><line x1="126" y1="76" x2="118" y2="76"/><line x1="78" y1="124" x2="78" y2="116"/><line x1="30" y1="76" x2="38" y2="76"/></g>'
     +'<line x1="78" y1="76" x2="78" y2="38" '+th(4)+'/><line x1="78" y1="76" x2="78" y2="106" stroke="'+A+'" stroke-width="7" stroke-linecap="round"/>'
     +'<circle cx="78" cy="76" r="5" fill="'+D+'"/>'
     +'<g transform="rotate(30 150 96)"><rect x="144" y="74" width="12" height="62" rx="4" fill="'+BR+'" '+st+'/><path d="M132 60 H170 V78 H132 Z" fill="'+SV+'" '+st+'/></g>'
     +txt(170,30,'6:00',18,A))
  });
})();

/* ============================================================
   g06 — Who Does It? make, have, let, get, cause
   ============================================================ */
window.GVIDEO.g06 = {
  kind: 'gram',
  date: '',
  title: 'Who Does It? Causative Verbs',
  titleCn: '叫別人做事：make、have、let、get、cause',
  titleArt: ['g06_whistle', 'g06_domino', 'g06_toolbox'],
  scene: '老屋整修 Renovating an old apartment',
  sceneArt: 'g06_apt',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Fiona', voice: 'f' },
    T: { name: 'Simon', voice: 'm' }
  },
  expr: {
    bare: { t: 'make / have / let + 人 + 原形', cn: '強迫或造成・安排・允許', ex: 'The smell of coffee makes me feel awake.', exCn: '咖啡的香味讓我覺得很清醒。', note: '後面直接接原形，不加 to；make 變被動要補 to：be made to V' },
    to:   { t: 'get / cause + 人 + to V', cn: '說服・造成（cause 較正式）', ex: 'She got her little brother to tidy up his toys.', exCn: '她說動弟弟把玩具收好。', note: 'get 帶「花了一番功夫」的感覺' },
    pp:   { t: 'have / get + 物 + 過去分詞', cn: '找人把東西處理好', ex: 'We had the windows cleaned before New Year.', exCn: '過年前我們請人把窗戶洗乾淨。', note: '在乎的是結果，不是誰做的；get 比較口語' }
  },
  chapters: [
    { cn: '開場' }, { cn: '加不加 to？' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  cardsKick: 'Who does it? 誰去做？',
  cards: [
    { art: 'g06_whistle', lab: 'make / have / let', who: '＋人＋原形動詞' },
    { art: 'g06_domino',  lab: 'get / cause',       who: '＋人＋to＋原形' },
    { art: 'g06_toolbox', lab: 'have / get＋物',    who: '＋過去分詞：找人弄好' }
  ],
  flow: [
    { q: '讓人去做：強迫、安排或允許？', a: 'make/have/let', en: '動詞 + 人 + 原形' },
    { q: '花功夫說服，或正式說造成？',   a: 'get / cause',   en: '動詞 + 人 + to + 原形' },
    { q: '只在乎東西被處理好？',         a: 'have / get',    en: 'have / get + 物 + 過去分詞' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: '叫別人做事，常用 make、have、let、get、cause。難的是後面要不要加 to。', vis: { type: 'title' } },

    /* ---- 1 核心：加不加 to ---- */
    { ch: 1, sp: 'N', zh: '這五個字可以分成三種。', vis: { type: 'cards', show: 0 } },
    { ch: 1, sp: 'N', zh: '第一種 make、have、let，後面接人，再接原形動詞。make 是硬要對方做，have 是安排，let 是允許。',
      hi: [{ t: 'make、have、let', k: 'bare', c: 3 }], vis: { type: 'cards', show: 1, pop: true } },
    { ch: 1, sp: 'A', en: 'The coach made us run ten laps.', cn: '教練要我們跑十圈。',
      hi: [{ t: 'made us run', cn: '硬要我們跑', k: 'bare', c: 3 }], vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'T', en: 'My parents let me stay up late on Fridays.', cn: '我爸媽星期五讓我晚一點睡。',
      hi: [{ t: 'let me stay up', cn: '允許', k: 'bare', c: 3 }], vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'N', zh: '第二種 get 和 cause，後面接人，再接 to 加原形。get 是花功夫說服，cause 是造成，比較正式。',
      hi: [{ t: 'get 和 cause', k: 'to', c: 4 }], vis: { type: 'cards', show: 2, pop: true } },
    { ch: 1, sp: 'A', en: 'After an hour, I got my roommate to wash the dishes.', cn: '磨了一個小時，我才讓室友去洗碗。',
      hi: [{ t: 'got my roommate to wash', cn: '說服', k: 'to', c: 4 }], vis: { type: 'cards', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: '第三種，只在乎東西被處理好、不管誰做的，就用 have 或 get 加東西，再加過去分詞。',
      hi: [{ t: '過去分詞', k: 'pp', c: 2 }], vis: { type: 'cards', show: 3, pop: true } },
    { ch: 1, sp: 'T', en: 'I had my bike fixed at the shop downstairs.', cn: '我把腳踏車拿去樓下的店修好了。',
      hi: [{ t: 'had my bike fixed', cn: '找人修好', k: 'pp', c: 2 }], vis: { type: 'cards', show: 3, lit: 2 } },
    { ch: 1, sp: 'N', zh: '注意順序：先放東西，再放過去分詞。',
      hi: [{ t: '過去分詞', k: 'pp', c: 2 }], vis: { type: 'cards', show: 3, lit: 2 } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: 'make、have、let 的句型：動詞加人，後面直接接原形動詞。',
      hi: [{ t: 'make、have、let', k: 'bare', c: 3 }],
      vis: { type: 'pattern', kick: 'make / have / let 句型', rows: [
        { lab: 'make 造成', blocks: [{ t: 'Her jokes', k: 's' }, { t: 'make', k: 'v' }, { t: 'me', k: 'n' }, { t: 'laugh', k: 'o' }] },
        { lab: 'have 安排', blocks: [{ t: "I'll", k: 's' }, { t: 'have', k: 'v' }, { t: 'the driver', k: 'n' }, { t: 'pick you up', k: 'o' }] },
        { lab: 'let 允許',  blocks: [{ t: 'Dad', k: 's' }, { t: 'lets', k: 'v' }, { t: 'us', k: 'n' }, { t: 'use his car', k: 'o' }] }
      ], note: '後面直接接原形，不加 to' } },
    { ch: 2, sp: 'N', zh: 'get 和 cause 的句型：動詞加人，再加 to 和原形動詞。',
      hi: [{ t: 'get 和 cause', k: 'to', c: 4 }],
      vis: { type: 'pattern', kick: 'get / cause 句型', rows: [
        { lab: 'get 說服',  blocks: [{ t: 'We', k: 's' }, { t: 'got', k: 'v' }, { t: 'the shop', k: 'n' }, { t: 'to', k: 'n', add: true }, { t: 'deliver it today', k: 'o' }] },
        { lab: 'cause 造成', blocks: [{ t: 'The heavy rain', k: 's' }, { t: 'caused', k: 'v' }, { t: 'the river', k: 'n' }, { t: 'to', k: 'n', add: true }, { t: 'rise', k: 'o' }] }
      ], note: 'cause 多半用在書面、正式的說明' } },
    { ch: 2, sp: 'N', zh: '找人把東西處理好：have 或 get，加東西，再加過去分詞。get 比較口語。',
      hi: [{ t: '過去分詞', k: 'pp', c: 2 }],
      vis: { type: 'pattern', kick: 'have / get + 物 + 過去分詞', rows: [
        { lab: 'have', blocks: [{ t: 'She', k: 's' }, { t: 'had', k: 'v' }, { t: 'her car', k: 'n' }, { t: 'washed', k: 'o', add: true }] },
        { lab: 'get',  blocks: [{ t: 'We', k: 's' }, { t: 'need to get', k: 'v' }, { t: 'the roof', k: 'n' }, { t: 'repaired', k: 'o', add: true }] }
      ], note: '東西在前，過去分詞在後' } },
    { ch: 2, sp: 'N', zh: '小提醒：make 變成被動的時候，要把 to 補回來。',
      hi: [{ t: 'make', k: 'bare', c: 3 }],
      vis: { type: 'pattern', kick: 'make 的被動', rows: [
        { lab: '主動', blocks: [{ t: 'They', k: 's' }, { t: 'made', k: 'v' }, { t: 'him', k: 'n' }, { t: 'pay', k: 'o' }] },
        { lab: '被動', blocks: [{ t: 'He', k: 's' }, { t: 'was made', k: 'v' }, { t: 'to', k: 'n', add: true }, { t: 'pay', k: 'o' }] }
      ], note: 'let 沒有這種被動，改說 be allowed to' } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: 'Fiona 和 Simon 買了一間老公寓，正在整修。', vis: { type: 'scene', art: 'g06_apt' } },
    { ch: 3, sp: 'A', en: 'Did you paint the living room yourself?', cn: '客廳是你自己漆的嗎？', vis: { type: 'scene', art: 'g06_roller' } },
    { ch: 3, sp: 'T', en: 'No, I had it painted by a local painter.', cn: '沒有，我請附近的油漆師傅漆的。',
      hi: [{ t: 'had it painted', cn: '請人漆好', k: 'pp', c: 2 }], vis: { type: 'scene', art: 'g06_painter' } },
    { ch: 3, sp: 'N', zh: '牆是被漆的，Simon 在乎的是結果，所以用 had it painted。',
      hi: [{ t: 'had it painted', k: 'pp', c: 2 }], vis: { type: 'scene', art: 'g06_wall' } },
    { ch: 3, sp: 'A', en: 'The old pipes made the water look brown.', cn: '舊水管讓水看起來黃黃的。',
      hi: [{ t: 'made the water look', cn: '造成', k: 'bare', c: 3 }], vis: { type: 'scene', art: 'g06_tap' } },
    { ch: 3, sp: 'T', en: "I know. I'll have a plumber replace them on Monday.", cn: '我知道，我星期一會請水電師傅來換。',
      hi: [{ t: 'have a plumber replace', cn: '安排', k: 'bare', c: 3 }], vis: { type: 'scene', art: 'g06_wrench' } },
    { ch: 3, sp: 'N', zh: '水管讓水變色是造成，用 make；請師傅來換是安排，用 have。後面都接原形。',
      hi: [{ t: 'make', k: 'bare', c: 3 }, { t: 'have', k: 'bare', c: 3 }], vis: { type: 'scene', art: 'g06_pipes' } },
    { ch: 3, sp: 'A', en: 'How did you get the neighbors to accept the noise?', cn: '你是怎麼讓鄰居接受施工噪音的？',
      hi: [{ t: 'get the neighbors to accept', cn: '說服', k: 'to', c: 4 }], vis: { type: 'scene', art: 'g06_neighbors' } },
    { ch: 3, sp: 'T', en: 'I gave them cookies, and they let us work until six.', cn: '我送他們餅乾，他們就讓我們施工到六點。',
      hi: [{ t: 'let us work', cn: '允許', k: 'bare', c: 3 }], vis: { type: 'scene', art: 'g06_cookies' } },
    { ch: 3, sp: 'N', zh: '說服鄰居要花功夫，用 get 加 to；鄰居點頭允許，用 let，後面不加 to。',
      hi: [{ t: 'get', k: 'to', c: 4 }, { t: 'let', k: 'bare', c: 3 }], vis: { type: 'scene', art: 'g06_clock6' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '同樣是核對數字，誰叫誰做，用的動詞就不一樣。',
      vis: { type: 'vs', sm: true, kick: '安排 vs 說服',
        a: { w: 'The manager had me check the numbers again.', def: '經理叫我再核對一次數字。', cn: '安排 → have + 人 + 原形' },
        b: { w: 'I got the manager to check the numbers again.', def: '我說動經理再核對一次數字。', cn: '說服 → get + 人 + to V' } } },
    { ch: 4, sp: 'A', en: 'The manager had me check the numbers again.', cn: '經理叫我再核對一次數字。',
      hi: [{ t: 'had me check', cn: '安排', k: 'bare', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '安排 vs 說服',
        a: { w: 'The manager had me check the numbers again.', def: '經理叫我再核對一次數字。', cn: '安排 → have + 人 + 原形' },
        b: { w: 'I got the manager to check the numbers again.', def: '我說動經理再核對一次數字。', cn: '說服 → get + 人 + to V' } } },
    { ch: 4, sp: 'T', en: 'I got the manager to check the numbers again.', cn: '我說動經理再核對一次數字。',
      hi: [{ t: 'got the manager to check', cn: '說服', k: 'to', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '安排 vs 說服',
        a: { w: 'The manager had me check the numbers again.', def: '經理叫我再核對一次數字。', cn: '安排 → have + 人 + 原形' },
        b: { w: 'I got the manager to check the numbers again.', def: '我說動經理再核對一次數字。', cn: '說服 → get + 人 + to V' } } },
    { ch: 4, sp: 'N', zh: '第一句是經理安排我做；第二句是我說動經理去做，多了一個 to。',
      vis: { type: 'vs', sm: true, kick: '安排 vs 說服',
        a: { w: 'The manager had me check the numbers again.', def: '經理叫我再核對一次數字。', cn: '安排 → have + 人 + 原形' },
        b: { w: 'I got the manager to check the numbers again.', def: '我說動經理再核對一次數字。', cn: '說服 → get + 人 + to V' } } },
    { ch: 4, sp: 'N', zh: '再看一組：一句講出是誰做的，一句只在乎東西處理好了。',
      vis: { type: 'vs', sm: true, kick: '誰做的重要嗎？',
        a: { w: 'I had the tailor shorten my pants.', def: '我請裁縫把褲子改短。', cn: '講出是誰 → have + 人 + 原形' },
        b: { w: 'I had my pants shortened.', def: '我把褲子拿去改短了。', cn: '只在乎結果 → have + 物 + 過去分詞' } } },
    { ch: 4, sp: 'A', en: 'I had the tailor shorten my pants.', cn: '我請裁縫把褲子改短。',
      hi: [{ t: 'had the tailor shorten', cn: '講出是誰', k: 'bare', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '誰做的重要嗎？',
        a: { w: 'I had the tailor shorten my pants.', def: '我請裁縫把褲子改短。', cn: '講出是誰 → have + 人 + 原形' },
        b: { w: 'I had my pants shortened.', def: '我把褲子拿去改短了。', cn: '只在乎結果 → have + 物 + 過去分詞' } } },
    { ch: 4, sp: 'T', en: 'I had my pants shortened.', cn: '我把褲子拿去改短了。',
      hi: [{ t: 'had my pants shortened', cn: '只在乎結果', k: 'pp', c: 2 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '誰做的重要嗎？',
        a: { w: 'I had the tailor shorten my pants.', def: '我請裁縫把褲子改短。', cn: '講出是誰 → have + 人 + 原形' },
        b: { w: 'I had my pants shortened.', def: '我把褲子拿去改短了。', cn: '只在乎結果 → have + 物 + 過去分詞' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '最後給你一個判斷流程，照順序問自己三個問題。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一問：是強迫、安排，或允許嗎？用 make、have、let，後面接原形。',
      hi: [{ t: 'make、have、let', k: 'bare', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'A', en: 'The doctor had me take a deep breath.', cn: '醫生叫我深呼吸。',
      hi: [{ t: 'had me take', cn: '安排', k: 'bare', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二問：是花功夫說服，或正式地說造成嗎？用 get 或 cause，後面加 to。',
      hi: [{ t: 'get 或 cause', k: 'to', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'T', en: 'The strong wind caused a tree to fall onto the road.', cn: '強風讓一棵樹倒在馬路上。',
      hi: [{ t: 'caused a tree to fall', cn: '造成', k: 'to', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '第三問：只在乎東西被處理好嗎？用 have 或 get 加東西，再加過去分詞。',
      hi: [{ t: '過去分詞', k: 'pp', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'A', en: 'We got the carpet cleaned before the party.', cn: '派對前我們請人把地毯洗乾淨了。',
      hi: [{ t: 'got the carpet cleaned', cn: '找人弄好', k: 'pp', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說說看。看到中文情境，先自己用英文說出來，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：室友答應讓你養一隻貓。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '室友答應讓你養一隻貓。' } },
    { ch: 6, sp: 'A', en: 'My roommate let me keep a cat.', cn: '我室友讓我養一隻貓。',
      hi: [{ t: 'let me keep', cn: '允許 → let + 人 + 原形', k: 'bare', c: 3 }],
      vis: { type: 'speak', n: 1, show: true, sit: '室友答應讓你養一隻貓。', a: 'My roommate let me keep a cat.' } },
    { ch: 6, sp: 'N', zh: '情境二：你花了一番功夫，終於說動爸爸去看醫生。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '你花了一番功夫，終於說動爸爸去看醫生。' } },
    { ch: 6, sp: 'T', en: 'I got my dad to see a doctor.', cn: '我說動我爸去看醫生了。',
      hi: [{ t: 'got my dad to see', cn: '說服 → get + 人 + to V', k: 'to', c: 4 }],
      vis: { type: 'speak', n: 2, show: true, sit: '你花了一番功夫，終於說動爸爸去看醫生。', a: 'I got my dad to see a doctor.' } },
    { ch: 6, sp: 'N', zh: '情境三：你把手機拿去店裡，請人換了新螢幕。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '你把手機拿去店裡，請人換了新螢幕。' } },
    { ch: 6, sp: 'A', en: 'I had my phone screen replaced.', cn: '我把手機螢幕拿去換了。',
      hi: [{ t: 'had my phone screen replaced', cn: '找人弄好 → have + 物 + 過去分詞', k: 'pp', c: 2 }],
      vis: { type: 'speak', n: 3, show: true, sit: '你把手機拿去店裡，請人換了新螢幕。', a: 'I had my phone screen replaced.' } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結一下：make、have、let 接原形；get、cause 要加 to；只在乎東西處理好，用 have 或 get 加過去分詞。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '下次叫別人做事之前，先想一想：這個動詞後面，要不要加 to？', vis: { type: 'end' } }
  ]
};
