/* ============================================================
   B2 Read 文法影片解說 — g09（被動語態，B2）
   格式與規則見 b2lab/tools/GVIDEO_SPEC.md；範本 gvideo/dg20261014b1.js
   Grammar in Use：Passive 1–3（is done / was done、be done / been done / being done、I was offered…）
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
  /* 小床（側面） */
  var bed=function(x,y,w,col){
    return '<rect x="'+x+'" y="'+(y+14)+'" width="'+w+'" height="16" rx="4" fill="'+(col||B)+'" '+st+'/>'
      +'<rect x="'+(x+4)+'" y="'+(y+4)+'" width="'+(w*0.3)+'" height="12" rx="5" fill="#fff" '+th(2.5)+'/>'
      +'<line x1="'+(x+3)+'" y1="'+(y+30)+'" x2="'+(x+3)+'" y2="'+(y+38)+'" '+th(3.5)+'/><line x1="'+(x+w-3)+'" y1="'+(y+30)+'" x2="'+(x+w-3)+'" y2="'+(y+38)+'" '+th(3.5)+'/>'; };

  Object.assign(window.GVIDEO_ART, {
    /* 核心 1：不知道是誰做的——車門上的刮痕＋虛線的神秘人 */
    g09_unknown: svg(
      '<path d="M14 112 V86 l20 -30 H104 l26 30 H170 a12 12 0 0 1 12 12 V112 Z" fill="'+R+'" '+st+'/>'
     +'<path d="M40 84 l12 -20 H74 V84 Z M82 84 V64 H100 l18 20 Z" fill="'+S+'" '+th(2.5)+'/>'
     +'<circle cx="50" cy="114" r="13" fill="'+D+'"/><circle cx="148" cy="114" r="13" fill="'+D+'"/>'
     +'<path d="M90 96 l14 4 l12 -3 l14 5" fill="none" stroke="#fff" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>'
     +'<circle cx="164" cy="32" r="12" fill="none" stroke="'+D+'" stroke-width="3" stroke-dasharray="5 4"/>'
     +'<path d="M144 70 q0 -22 20 -22 q20 0 20 22" fill="none" stroke="'+D+'" stroke-width="3" stroke-dasharray="5 4"/>'
     +txt(164,38,'?',16,A)
     +'<line x1="8" y1="128" x2="192" y2="128" '+st+'/>'),
    /* 核心 2：焦點在東西——聚光燈打在票上 */
    g09_focus: svg(
      '<path d="M84 8 L116 8 L172 128 H28 Z" fill="'+Y+'" opacity=".35"/>'
     +'<rect x="78" y="0" width="44" height="14" rx="4" fill="#33405c" '+st+'/>'
     +'<ellipse cx="100" cy="128" rx="72" ry="10" fill="'+Y+'" opacity=".6"/>'
     +'<g transform="rotate(-8 100 96)"><rect x="56" y="74" width="88" height="44" rx="6" fill="'+R+'" '+st+'/><line x1="78" y1="74" x2="78" y2="118" stroke="#fff" stroke-width="2.5" stroke-dasharray="4 4"/>'
     +'<path d="M112 84 l4 8 l9 1 l-6 6 l1.5 9 l-8.5 -4.5 l-8.5 4.5 l1.5 -9 l-6 -6 l9 -1 Z" fill="'+Y+'" '+th(2)+'/></g>'),
    /* 核心 3：加上 by——一幅畫，旁邊箭頭指向畫它的人 */
    g09_by: svg(
      '<rect x="18" y="20" width="96" height="78" rx="4" fill="#c9a26b" '+st+'/><rect x="28" y="30" width="76" height="58" fill="'+S+'" '+th(2.5)+'/>'
     +'<circle cx="86" cy="46" r="8" fill="'+Y+'" '+th(2)+'/><path d="M29 87 L52 58 L68 76 L80 64 L103 87 Z" fill="'+G+'" '+th(2.5)+'/>'
     +'<path d="M120 60 H140" stroke="'+A+'" stroke-width="5" stroke-linecap="round"/><path d="M132 52 L140 60 L132 68" fill="none" stroke="'+A+'" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>'
     +'<circle cx="168" cy="54" r="15" fill="'+L+'" '+st+'/><path d="M146 104 q0 -32 22 -32 q22 0 22 32 Z" fill="'+B+'" '+st+'/>'
     +'<line x1="186" y1="86" x2="192" y2="60" '+th(3)+'/><path d="M190 58 l4 -8 l1 9 Z" fill="'+R+'" '+th(2)+'/>'
     +'<line x1="8" y1="134" x2="192" y2="134" '+st+'/>'),

    /* 情境 1：飯店明天開幕——飯店外觀＋旗子 */
    g09_hotel: svg(
      '<line x1="8" y1="138" x2="192" y2="138" '+st+'/>'
     +'<rect x="44" y="30" width="112" height="108" fill="'+C+'" '+st+'/>'
     +'<rect x="40" y="20" width="120" height="14" fill="'+A+'" '+st+'/>'
     +'<g fill="'+S+'" '+th(2.5)+'><rect x="56" y="44" width="18" height="16"/><rect x="91" y="44" width="18" height="16"/><rect x="126" y="44" width="18" height="16"/><rect x="56" y="72" width="18" height="16"/><rect x="91" y="72" width="18" height="16"/><rect x="126" y="72" width="18" height="16"/></g>'
     +'<path d="M70 104 H130 L136 114 H64 Z" fill="'+R+'" '+st+'/>'
     +'<rect x="86" y="114" width="28" height="24" fill="'+L+'" '+st+'/><line x1="100" y1="114" x2="100" y2="138" '+th(2)+'/>'
     +'<line x1="24" y1="138" x2="24" y2="80" '+th(3)+'/><path d="M24 80 l18 6 l-18 6 Z" fill="'+G+'" '+th(2.5)+'/>'
     +'<line x1="176" y1="138" x2="176" y2="80" '+th(3)+'/><path d="M176 80 l18 6 l-18 6 Z" fill="'+B+'" '+th(2.5)+'/>'),
    /* 情境 2：新床送到了嗎？——一張床＋問號 */
    g09_bed: svg(
      '<rect x="22" y="66" width="20" height="62" rx="4" fill="#c9a26b" '+st+'/>'
     +'<rect x="34" y="88" width="132" height="26" rx="6" fill="#fff" '+st+'/>'
     +'<rect x="90" y="84" width="76" height="30" rx="6" fill="'+B+'" '+st+'/>'
     +'<rect x="46" y="74" width="36" height="16" rx="7" fill="'+L+'" '+st+'/>'
     +'<line x1="40" y1="114" x2="40" y2="130" '+th(4)+'/><line x1="160" y1="114" x2="160" y2="130" '+th(4)+'/>'
     +qb(160,40)),
    /* 情境 3：今天早上全部擺好了——一排床＋早晨的太陽 */
    g09_beds: svg(
      '<circle cx="168" cy="30" r="16" fill="'+Y+'" '+th(2.5)+'/>'
     +'<g '+th(3)+'><line x1="168" y1="4" x2="168" y2="9"/><line x1="142" y1="30" x2="147" y2="30"/><line x1="150" y1="12" x2="154" y2="16"/><line x1="186" y1="12" x2="182" y2="16"/></g>'
     +bed(14,64,52,B)+bed(74,64,52,G)+bed(134,64,52,R)
     +chk(40,124,10)+chk(100,124,10)+chk(160,124,10)),
    /* 情境 4：Isabel 只在意床到了沒——寫字板上打勾 */
    g09_check: svg(
      '<rect x="50" y="20" width="100" height="120" rx="8" fill="#c9a26b" '+st+'/>'
     +'<rect x="60" y="32" width="80" height="100" rx="3" fill="#fff" '+th(2.5)+'/>'
     +'<rect x="80" y="12" width="40" height="16" rx="4" fill="#9aa5b1" '+st+'/>'
     +'<g fill="none" stroke="'+G+'" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><path d="M68 52 l5 5 l9 -10"/><path d="M68 80 l5 5 l9 -10"/></g>'
     +'<g '+th(3)+'><line x1="92" y1="52" x2="130" y2="52"/><line x1="92" y1="80" x2="124" y2="80"/><line x1="92" y1="108" x2="128" y2="108"/></g>'
     +'<rect x="67" y="100" width="14" height="14" rx="2" fill="#fff" '+th(2.5)+'/>'),
    /* 情境 5：大廳呢？——堆滿紙箱的大廳＋問號 */
    g09_lobby: svg(
      '<line x1="8" y1="134" x2="192" y2="134" '+st+'/>'
     +'<g fill="#d9a066" '+st+'><rect x="26" y="96" width="40" height="38"/><rect x="62" y="104" width="34" height="30"/><rect x="34" y="66" width="34" height="30"/></g>'
     +'<g '+th(2)+'><line x1="46" y1="96" x2="46" y2="134"/><line x1="51" y1="66" x2="51" y2="96"/><line x1="79" y1="104" x2="79" y2="134"/></g>'
     +'<rect x="120" y="96" width="30" height="38" rx="4" fill="'+R+'" '+st+'/>'
     +'<path d="M135 96 q-16 -18 -6 -34 M135 96 q2 -22 14 -30 M135 96 q16 -10 22 -26" fill="none" stroke="'+G+'" stroke-width="5" stroke-linecap="round"/>'
     +'<path d="M100 132 q6 -6 14 -2 M162 130 q8 -8 16 0" fill="none" stroke="#9aa5b1" stroke-width="3" stroke-linecap="round"/>'
     +qb(170,34)),
    /* 情境 6：現在正在打掃——拖把＋水桶 */
    g09_mop: svg(
      '<line x1="8" y1="136" x2="192" y2="136" '+st+'/>'
     +'<line x1="70" y1="14" x2="104" y2="112" '+th(5)+'/>'
     +'<path d="M84 110 H126 L132 134 H78 Z" fill="'+S+'" '+st+'/>'
     +'<g '+th(3)+'><line x1="90" y1="112" x2="86" y2="134"/><line x1="102" y1="112" x2="100" y2="134"/><line x1="114" y1="112" x2="114" y2="134"/><line x1="124" y1="112" x2="126" y2="134"/></g>'
     +'<path d="M136 86 H180 L174 134 H142 Z" fill="'+B+'" '+st+'/><path d="M140 86 q18 -26 36 0" fill="none" '+th(3)+'/>'
     +'<ellipse cx="158" cy="88" rx="20" ry="4" fill="'+S+'" '+th(2)+'/>'
     +'<g fill="'+S+'" '+th(2)+'><circle cx="40" cy="120" r="5"/><circle cx="54" cy="128" r="3.5"/><circle cx="30" cy="104" r="3"/></g>'),
    /* 情境 7：正在進行的被動——地板濕滑的黃色立牌 */
    g09_sign: svg(
      '<line x1="8" y1="138" x2="192" y2="138" '+st+'/>'
     +'<path d="M70 138 L92 22 H108 L130 138" fill="'+Y+'" '+st+'/>'
     +'<path d="M100 56 L116 86 H84 Z" fill="#fff" '+th(2.5)+'/>'+txt(100,83,'!',18)
     +'<rect x="84" y="96" width="32" height="8" rx="3" fill="'+D+'"/>'
     +'<path d="M140 128 q10 -8 22 -2 q10 6 22 0" fill="none" stroke="'+B+'" stroke-width="3" stroke-linecap="round"/>'
     +'<path d="M24 128 q10 -8 22 -2 q8 4 16 0" fill="none" stroke="'+B+'" stroke-width="3" stroke-linecap="round"/>'),
    /* 情境 8：迎賓花明天七點送來——花瓶＋7:00 吊牌 */
    g09_flowers: svg(
      '<path d="M78 92 H122 L114 138 H86 Z" fill="'+S+'" '+st+'/>'
     +'<g '+th(3)+'><line x1="100" y1="92" x2="100" y2="52"/><line x1="92" y1="92" x2="74" y2="56"/><line x1="108" y1="92" x2="126" y2="58"/></g>'
     +'<g '+st+'><circle cx="100" cy="42" r="14" fill="'+R+'"/><circle cx="70" cy="50" r="12" fill="'+Y+'"/><circle cx="130" cy="52" r="12" fill="#e98fb0"/></g>'
     +'<g fill="'+D+'"><circle cx="100" cy="42" r="4"/><circle cx="70" cy="50" r="3.5"/><circle cx="130" cy="52" r="3.5"/></g>'
     +'<path d="M84 76 q-12 -6 -18 4 q10 6 18 -4 Z M116 78 q12 -6 18 4 q-10 6 -18 -4 Z" fill="'+G+'" '+th(2.5)+'/>'
     +'<line x1="122" y1="100" x2="150" y2="108" '+th(2)+'/>'
     +'<rect x="146" y="98" width="44" height="26" rx="5" fill="#fff" '+st+'/>'+txt(168,117,'7:00',14,A)),
    /* 情境 9：客人會由機器人迎接——揮手的機器人 */
    g09_robot: svg(
      '<line x1="100" y1="22" x2="100" y2="10" '+th(3)+'/><circle cx="100" cy="8" r="5" fill="'+R+'" '+th(2.5)+'/>'
     +'<rect x="70" y="22" width="60" height="42" rx="12" fill="#c9d4df" '+st+'/>'
     +'<rect x="78" y="32" width="44" height="22" rx="8" fill="#33405c" '+th(2.5)+'/>'
     +'<circle cx="90" cy="43" r="4" fill="'+S+'"/><circle cx="110" cy="43" r="4" fill="'+S+'"/>'
     +'<rect x="66" y="70" width="68" height="52" rx="10" fill="#c9d4df" '+st+'/>'
     +'<circle cx="100" cy="94" r="10" fill="'+Y+'" '+th(2.5)+'/>'
     +'<path d="M66 82 L46 104" '+th(6)+'/><path d="M134 82 L154 54" '+th(6)+'/>'
     +'<circle cx="156" cy="48" r="8" fill="#c9d4df" '+st+'/>'
     +'<path d="M168 36 q6 6 2 14 M176 30 q10 10 4 24" fill="none" stroke="'+A+'" stroke-width="3" stroke-linecap="round"/>'
     +'<rect x="74" y="122" width="52" height="14" rx="7" fill="#33405c" '+st+'/>'),
    /* 情境 10：by 後面是新消息——拖著行李的客人走進門 */
    g09_guest: svg(
      '<line x1="8" y1="138" x2="192" y2="138" '+st+'/>'
     +'<rect x="120" y="22" width="62" height="116" fill="'+L+'" '+st+'/><rect x="130" y="34" width="42" height="46" fill="'+S+'" '+th(2.5)+'/>'
     +'<circle cx="170" cy="96" r="3" fill="'+D+'"/>'
     +'<circle cx="66" cy="40" r="15" fill="'+L+'" '+st+'/>'
     +'<path d="M48 104 V72 a18 18 0 0 1 36 0 V104 Z" fill="'+G+'" '+st+'/>'
     +'<g '+th(5)+'><line x1="56" y1="104" x2="52" y2="134"/><line x1="76" y1="104" x2="80" y2="134"/></g>'
     +'<line x1="84" y1="80" x2="96" y2="96" '+th(4)+'/>'
     +'<rect x="88" y="96" width="26" height="34" rx="5" fill="'+A+'" '+st+'/><path d="M96 96 V90 H106 V96" fill="none" '+th(2.5)+'/>'
     +'<circle cx="94" cy="134" r="3.5" fill="'+D+'"/><circle cx="108" cy="134" r="3.5" fill="'+D+'"/>')
  });
})();

/* ============================================================
   g09 — Who Did It, or What Happened? The Passive Voice
   Grammar in Use：Passive（be + past participle）
   ============================================================ */
window.GVIDEO.g09 = {
  kind: 'gram',
  date: '',
  title: 'Who Did It, or What Happened?',
  titleCn: '被動語態：把被做的東西放到前面',
  titleArt: ['g09_unknown', 'g09_focus', 'g09_by'],
  scene: '飯店開幕前 Hotel opening',
  sceneArt: 'g09_hotel',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Isabel', voice: 'f' },
    T: { name: 'Hugo', voice: 'm' }
  },
  expr: {
    unk: { t: 'be + 過去分詞（不提誰做的）', cn: '不知道或不在乎是誰做的', ex: 'The windows were cleaned on Saturday.', exCn: '窗戶星期六擦過了。', note: '時態只改 be：is / was / has been / will be' },
    foc: { t: '東西放句首', cn: '想讓人先聽到被影響的東西', ex: 'Your order has been confirmed.', exCn: '您的訂單已經確認。', note: '正在進行用 is being + 過去分詞' },
    by:  { t: '+ by + 做的人', cn: '做的人是值得講的新消息', ex: 'The cake was made by my little sister.', exCn: '這個蛋糕是我妹妹做的。', note: '大多數被動句不需要 by' }
  },
  chapters: [
    { cn: '開場' }, { cn: '先問：重點是誰？' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  cardsKick: 'Why passive? 為什麼用被動？',
  cards: [
    { art: 'g09_unknown', lab: '不知道是誰', who: '誰做的不重要' },
    { art: 'g09_focus',   lab: '焦點在東西', who: '想讓人先聽到它' },
    { art: 'g09_by',      lab: '加上 by',    who: '做的人是新消息' }
  ],
  flow: [
    { q: '不知道，或不在乎誰做的？',   a: '用被動', en: '主詞 + be + 過去分詞' },
    { q: '想讓人先聽到那個東西？',     a: '放句首', en: '東西 + be + 過去分詞 + 其他' },
    { q: '做的人是值得講的新消息？',   a: '加 by',  en: '… + by + 做的人' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: '英文有時候會把做的人藏起來，把被做的東西放到最前面，這就是被動語態。', vis: { type: 'title' } },

    /* ---- 1 核心：重點是誰？ ---- */
    { ch: 1, sp: 'N', zh: '要不要用被動，先問自己：這句話的重點是誰做的，還是被做的那個東西？', vis: { type: 'cards', show: 0 } },
    { ch: 1, sp: 'N', zh: '不知道是誰做的，或誰做的根本不重要，就用被動，連 by 都不用說。',
      hi: [{ t: '被動', k: 'unk', c: 3 }], vis: { type: 'cards', show: 1, pop: true } },
    { ch: 1, sp: 'A', en: 'Our car was scratched in the parking lot last night.', cn: '我們的車昨晚在停車場被刮了。',
      hi: [{ t: 'was scratched', cn: '不知道是誰刮的', k: 'unk', c: 3 }], vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'N', zh: '想讓對方先聽到那個東西，也把它放到句首，用被動。',
      hi: [{ t: '句首', k: 'foc', c: 4 }], vis: { type: 'cards', show: 2, pop: true } },
    { ch: 1, sp: 'T', en: 'All the concert tickets were sold in ten minutes.', cn: '演唱會的票十分鐘就全賣光了。',
      hi: [{ t: 'were sold', cn: '重點是票', k: 'foc', c: 4 }], vis: { type: 'cards', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: '被動的骨架很簡單：be 動詞加過去分詞。時態全部交給 be 去變。',
      vis: { type: 'cards', show: 2 } },
    { ch: 1, sp: 'N', zh: '如果做的人是新消息，值得講出來，就在後面加 by。',
      hi: [{ t: 'by', k: 'by', c: 2 }], vis: { type: 'cards', show: 3, pop: true } },
    { ch: 1, sp: 'A', en: 'Our school song was written by a former student.', cn: '我們的校歌是一位校友寫的。',
      hi: [{ t: 'by a former student', cn: '做的人是新消息', k: 'by', c: 2 }], vis: { type: 'cards', show: 3, lit: 2 } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: '被動的句型：受影響的東西當主詞，加 be 動詞，再加過去分詞。',
      hi: [{ t: '過去分詞', k: 'unk', c: 3 }],
      vis: { type: 'pattern', kick: 'Passive 被動語態', rows: [
        { lab: '現在', blocks: [{ t: 'Tea', k: 's' }, { t: 'is grown', k: 'v' }, { t: 'in these hills', k: 'o' }] },
        { lab: '過去', blocks: [{ t: 'This temple', k: 's' }, { t: 'was built', k: 'v' }, { t: 'in 1750', k: 'o' }] }
      ], note: '時態只改 be：is → was' } },
    { ch: 2, sp: 'N', zh: '其他時態也一樣，只改 be 的部分：完成式用 has been，進行式用 is being，未來用 will be。',
      vis: { type: 'pattern', kick: 'Other tenses 其他時態', rows: [
        { lab: '完成式', blocks: [{ t: 'The order', k: 's' }, { t: 'has been shipped', k: 'v' }] },
        { lab: '進行式', blocks: [{ t: 'The elevator', k: 's' }, { t: 'is being fixed', k: 'v' }] },
        { lab: '未來',   blocks: [{ t: 'The results', k: 's' }, { t: 'will be announced', k: 'v' }, { t: 'on Friday', k: 'o' }] }
      ] } },
    { ch: 2, sp: 'N', zh: 'can、must、should 這些助動詞後面，一樣接 be，再加過去分詞。',
      vis: { type: 'family', kick: 'Modal + be + 過去分詞', core: 'can · must · should', coreCn: '助動詞的被動', art: 'g09_focus', items: [
        { t: 'can be done', cn: '可以被做' }, { t: 'must be done', cn: '一定要做' }, { t: 'should be done', cn: '應該要做' }
      ] } },
    { ch: 2, sp: 'N', zh: 'give、send、offer 這種有兩個受詞的動詞，兩個都能當主詞，用人當主詞比較常見。',
      vis: { type: 'pattern', kick: '兩個受詞 Two objects', rows: [
        { lab: '人當主詞', blocks: [{ t: 'Kai', k: 's' }, { t: 'was offered', k: 'v' }, { t: 'a scholarship', k: 'o' }] },
        { lab: '東西當主詞', blocks: [{ t: 'A scholarship', k: 's' }, { t: 'was offered', k: 'v' }, { t: 'to Kai', k: 'o' }] }
      ] } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: '飯店明天就要開幕，經理 Isabel 正在跟 Hugo 確認進度。', vis: { type: 'scene', art: 'g09_hotel' } },
    { ch: 3, sp: 'A', en: 'Have the new beds been delivered yet?', cn: '新的床送到了嗎？',
      hi: [{ t: 'been delivered', cn: '重點是床', k: 'foc', c: 4 }], vis: { type: 'scene', art: 'g09_bed' } },
    { ch: 3, sp: 'T', en: 'Yes, and they were all set up this morning.', cn: '到了，而且今天早上全部組好了。',
      hi: [{ t: 'were all set up', cn: '誰組的不重要', k: 'unk', c: 3 }], vis: { type: 'scene', art: 'g09_beds' } },
    { ch: 3, sp: 'N', zh: '床是誰送、誰組的不重要，Isabel 只在意床到了沒，所以兩句都用被動。',
      hi: [{ t: '被動', k: 'unk', c: 3 }], vis: { type: 'scene', art: 'g09_check' } },
    { ch: 3, sp: 'A', en: 'What about the lobby? It looked terrible yesterday.', cn: '那大廳呢？昨天看起來亂七八糟。', vis: { type: 'scene', art: 'g09_lobby' } },
    { ch: 3, sp: 'T', en: "Don't worry. It's being cleaned right now.", cn: '別擔心，現在正在打掃。',
      hi: [{ t: "It's being cleaned", cn: '正在被打掃', k: 'foc', c: 4 }], vis: { type: 'scene', art: 'g09_mop' } },
    { ch: 3, sp: 'N', zh: '正在進行的被動要兩層：is being，再加過去分詞。',
      hi: [{ t: 'is being', k: 'foc', c: 4 }], vis: { type: 'scene', art: 'g09_sign' } },
    { ch: 3, sp: 'A', en: 'Good. The welcome flowers will be dropped off at seven.', cn: '很好。迎賓的花七點會送來。',
      hi: [{ t: 'will be dropped off', cn: '未來的被動', k: 'foc', c: 4 }], vis: { type: 'scene', art: 'g09_flowers' } },
    { ch: 3, sp: 'T', en: 'And tomorrow, every guest will be greeted by a robot!', cn: '而且明天每位客人都會由機器人來迎接！',
      hi: [{ t: 'by a robot', cn: '新消息', k: 'by', c: 2 }], vis: { type: 'scene', art: 'g09_robot' } },
    { ch: 3, sp: 'N', zh: '機器人是大家沒想到的新消息，值得講出來，所以這次保留 by。',
      hi: [{ t: 'by', k: 'by', c: 2 }], vis: { type: 'scene', art: 'g09_guest' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '同一件事，用主動還是被動，重點就不一樣。',
      vis: { type: 'vs', sm: true, kick: '主動 vs 被動',
        a: { w: 'Our team built this app in six weeks.', def: '我們團隊六週就做出這個 app。', cn: '強調誰做的 → 主動' },
        b: { w: 'This app was built in six weeks.', def: '這個 app 六週就做出來了。', cn: '重點在 app → 被動' } } },
    { ch: 4, sp: 'A', en: 'Our team built this app in six weeks.', cn: '我們團隊六週就做出這個 app。',
      hi: [{ t: 'Our team built', cn: '主動：強調團隊', k: 'by', c: 1 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '主動 vs 被動',
        a: { w: 'Our team built this app in six weeks.', def: '我們團隊六週就做出這個 app。', cn: '強調誰做的 → 主動' },
        b: { w: 'This app was built in six weeks.', def: '這個 app 六週就做出來了。', cn: '重點在 app → 被動' } } },
    { ch: 4, sp: 'T', en: 'This app was built in six weeks.', cn: '這個 app 六週就做出來了。',
      hi: [{ t: 'was built', cn: '被動：重點是 app', k: 'foc', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '主動 vs 被動',
        a: { w: 'Our team built this app in six weeks.', def: '我們團隊六週就做出這個 app。', cn: '強調誰做的 → 主動' },
        b: { w: 'This app was built in six weeks.', def: '這個 app 六週就做出來了。', cn: '重點在 app → 被動' } } },
    { ch: 4, sp: 'N', zh: '第一句想讓人知道是我們團隊的功勞；第二句只在意這個 app，誰做的就不提了。',
      vis: { type: 'vs', sm: true, kick: '主動 vs 被動',
        a: { w: 'Our team built this app in six weeks.', def: '我們團隊六週就做出這個 app。', cn: '強調誰做的 → 主動' },
        b: { w: 'This app was built in six weeks.', def: '這個 app 六週就做出來了。', cn: '重點在 app → 被動' } } },
    { ch: 4, sp: 'N', zh: '再看一組。還在修跟已經修好，差在 being 和 been。',
      vis: { type: 'vs', sm: true, kick: '還在修 vs 已經修好',
        a: { w: 'The museum is being renovated.', def: '博物館正在整修。', cn: '還在進行 → is being' },
        b: { w: 'The museum has been renovated.', def: '博物館已經整修好了。', cn: '已經完成 → has been' } } },
    { ch: 4, sp: 'A', en: 'The museum is being renovated.', cn: '博物館正在整修。',
      hi: [{ t: 'is being renovated', cn: '還在修', k: 'foc', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '還在修 vs 已經修好',
        a: { w: 'The museum is being renovated.', def: '博物館正在整修。', cn: '還在進行 → is being' },
        b: { w: 'The museum has been renovated.', def: '博物館已經整修好了。', cn: '已經完成 → has been' } } },
    { ch: 4, sp: 'T', en: 'The museum has been renovated.', cn: '博物館已經整修好了。',
      hi: [{ t: 'has been renovated', cn: '修好了', k: 'unk', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '還在修 vs 已經修好',
        a: { w: 'The museum is being renovated.', def: '博物館正在整修。', cn: '還在進行 → is being' },
        b: { w: 'The museum has been renovated.', def: '博物館已經整修好了。', cn: '已經完成 → has been' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '最後給你一個判斷流程。開口之前，照順序問三個問題。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一問：做的人不知道，或不重要嗎？是的話，用被動。',
      hi: [{ t: '被動', k: 'unk', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'A', en: 'The trash is collected every Tuesday morning.', cn: '垃圾每週二早上收。',
      hi: [{ t: 'is collected', cn: '誰收的不重要', k: 'unk', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二問：你想讓對方先聽到那個東西嗎？那就把它放到句首。',
      hi: [{ t: '句首', k: 'foc', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'T', en: 'Your new passport will be mailed to you within two weeks.', cn: '你的新護照會在兩週內寄給你。',
      hi: [{ t: 'will be mailed', cn: '重點是護照', k: 'foc', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '第三問：做的人是新消息，值得講嗎？是的話，後面加 by。',
      hi: [{ t: 'by', k: 'by', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'A', en: 'This dress was designed by my aunt.', cn: '這件洋裝是我阿姨設計的。',
      hi: [{ t: 'by my aunt', cn: '做的人是重點', k: 'by', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說說看。先看中文情境，自己用英文講一次，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：你家附近的老戲院去年拆掉了，你不知道是誰拆的。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '你家附近的老戲院去年拆掉了，你不知道是誰拆的。' } },
    { ch: 6, sp: 'T', en: 'The old theater near my house was torn down last year.', cn: '我家附近的老戲院去年被拆掉了。',
      hi: [{ t: 'was torn down', cn: '不知道誰拆的 → 被動', k: 'unk', c: 3 }],
      vis: { type: 'speak', n: 1, show: true, sit: '你家附近的老戲院去年拆掉了，你不知道是誰拆的。', a: 'The old theater near my house was torn down last year.' } },
    { ch: 6, sp: 'N', zh: '情境二：你想告訴同事，會議室正在油漆，今天不能用。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '你想告訴同事，會議室正在油漆，今天不能用。' } },
    { ch: 6, sp: 'A', en: "The meeting room is being painted, so we can't use it today.", cn: '會議室正在油漆，所以我們今天不能用。',
      hi: [{ t: 'is being painted', cn: '正在進行 → is being', k: 'foc', c: 4 }],
      vis: { type: 'speak', n: 2, show: true, sit: '你想告訴同事，會議室正在油漆，今天不能用。', a: "The meeting room is being painted, so we can't use it today." } },
    { ch: 6, sp: 'N', zh: '情境三：你想介紹牆上這幅畫，是你奶奶畫的。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '你想介紹牆上這幅畫，是你奶奶畫的。' } },
    { ch: 6, sp: 'T', en: 'This picture was painted by my grandmother.', cn: '這幅畫是我奶奶畫的。',
      hi: [{ t: 'by my grandmother', cn: '做的人是重點 → by', k: 'by', c: 2 }],
      vis: { type: 'speak', n: 3, show: true, sit: '你想介紹牆上這幅畫，是你奶奶畫的。', a: 'This picture was painted by my grandmother.' } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結一下：不在乎誰做的，用被動；想讓東西先出場，放到句首；做的人值得講，才加 by。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '下次開口前想一想：這句話的主角，是做的人，還是被做的東西？', vis: { type: 'end' } }
  ]
};
