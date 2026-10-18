/* ============================================================
   B2 Read 文法影片解說 — g04（現在完成式 for / since / already / yet，B1+）
   格式與規則見 b2lab/tools/GVIDEO_SPEC.md；範本 gvideo/dg20261014b1.js
   Grammar in Use：present perfect（already / yet）、How long have you…?、for and since
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
  var SK='#f3c9a0', GR='#c9c2b8';

  Object.assign(window.GVIDEO_ART, {
    /* since：插旗標起點，虛線一路往右到現在 */
    g04_flag: svg(
      '<line x1="10" y1="128" x2="190" y2="128" '+st+'/>'
     +'<path d="M66 106 H170" fill="none" stroke="'+B+'" stroke-width="5" stroke-linecap="round" stroke-dasharray="2 11"/>'
     +'<path d="M166 94 L182 106 L166 118" fill="none" stroke="'+B+'" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>'
     +'<ellipse cx="48" cy="128" rx="16" ry="5" fill="'+GR+'" '+st+'/>'
     +'<line x1="48" y1="126" x2="48" y2="24" '+th(4)+'/>'
     +'<path d="M48 26 L100 40 L48 56 Z" fill="'+R+'" '+st+'/>'
     +'<circle cx="48" cy="22" r="5" fill="'+Y+'" '+th(2.5)+'/>'),
    /* for：沙漏量長度 */
    g04_hourglass: svg(
      '<path d="M70 28 C70 60 95 66 95 75 C95 84 70 90 70 122 H130 C130 90 105 84 105 75 C105 66 130 60 130 28 Z" fill="'+S+'"/>'
     +'<path d="M79 42 H121 C117 56 104 63 100 69 C96 63 83 56 79 42 Z" fill="'+Y+'"/>'
     +'<line x1="100" y1="70" x2="100" y2="104" stroke="'+Y+'" stroke-width="3"/>'
     +'<path d="M74 120 C80 106 92 100 100 98 C108 100 120 106 126 120 Z" fill="'+Y+'"/>'
     +'<path d="M70 28 C70 60 95 66 95 75 C95 84 70 90 70 122 H130 C130 90 105 84 105 75 C105 66 130 60 130 28 Z" fill="none" '+st+'/>'
     +'<line x1="62" y1="28" x2="62" y2="122" '+th(5)+'/><line x1="138" y1="28" x2="138" y2="122" '+th(5)+'/>'
     +'<rect x="52" y="16" width="96" height="13" rx="4" fill="'+A+'" '+st+'/><rect x="52" y="121" width="96" height="13" rx="4" fill="'+A+'" '+st+'/>'),
    /* already / yet：清單上兩格打勾、一格還空著 */
    g04_checklist: svg(
      '<rect x="52" y="18" width="96" height="122" rx="8" fill="'+L+'" '+st+'/>'
     +'<rect x="62" y="32" width="76" height="100" rx="3" fill="#fff" '+st+'/>'
     +'<rect x="80" y="10" width="40" height="16" rx="4" fill="'+GR+'" '+st+'/>'
     +'<g fill="#fff" '+th(2.5)+'><rect x="70" y="44" width="16" height="16" rx="2"/><rect x="70" y="72" width="16" height="16" rx="2"/></g>'
     +'<rect x="70" y="100" width="16" height="16" rx="2" fill="#fff" stroke="'+A+'" stroke-width="3" stroke-dasharray="4 3"/>'
     +'<path d="M73 52 l4 5 l9 -11 M73 80 l4 5 l9 -11" fill="none" stroke="'+G+'" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>'
     +'<g stroke="'+GR+'" stroke-width="5" stroke-linecap="round"><line x1="94" y1="52" x2="128" y2="52"/><line x1="94" y1="80" x2="124" y2="80"/><line x1="94" y1="108" x2="128" y2="108"/></g>'
     +qb(166,104)),

    /* 情境 1：婚禮計畫本——愛心＋筆 */
    g04_plan: svg(
      '<path d="M100 38 Q68 26 26 32 V124 Q68 118 100 130 Z" fill="#fff" '+st+'/>'
     +'<path d="M100 38 Q132 26 174 32 V124 Q132 118 100 130 Z" fill="#fff" '+st+'/>'
     +'<path d="M62 66 c-5 -10 -22 -7 -19 6 c3 9 19 19 19 19 c0 0 16 -10 19 -19 c3 -13 -14 -16 -19 -6 Z" fill="'+R+'" '+th(2.5)+'/>'
     +'<g stroke="'+GR+'" stroke-width="4" stroke-linecap="round"><line x1="114" y1="56" x2="160" y2="52"/><line x1="114" y1="74" x2="160" y2="71"/><line x1="114" y1="92" x2="150" y2="90"/></g>'
     +'<path d="M114 56 l3 3 l5 -6" fill="none" stroke="'+G+'" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>'
     +'<g transform="rotate(35 150 112)"><rect x="140" y="76" width="16" height="56" rx="3" fill="'+B+'" '+st+'/><path d="M140 132 L148 146 L156 132 Z" fill="'+L+'" '+st+'/></g>'),
    /* 情境 2：喜帖寄了沒？——喜帖信封＋問號 */
    g04_envelope: svg(
      '<rect x="24" y="46" width="128" height="84" rx="6" fill="#fff" '+st+'/>'
     +'<path d="M24 52 L88 96 L152 52" fill="none" '+st+'/>'
     +'<path d="M24 128 L72 88 M152 128 L104 88" fill="none" '+th(2.5)+'/>'
     +'<circle cx="88" cy="96" r="13" fill="'+R+'" '+st+'/>'
     +'<path d="M88 102 c-8 -5 -9 -10 -6 -12 c2 -2 5 -1 6 2 c1 -3 4 -4 6 -2 c3 2 2 7 -6 12 Z" fill="#fff"/>'
     +qb(172,34)),
    /* 情境 3：九十張都寄了——郵筒旗子舉起、一疊信 */
    g04_mailbox: svg(
      '<line x1="10" y1="136" x2="190" y2="136" '+st+'/>'
     +'<rect x="88" y="94" width="16" height="42" fill="'+L+'" '+st+'/>'
     +'<path d="M40 96 H150 V64 a28 28 0 0 0 -28 -28 H68 a28 28 0 0 0 -28 28 Z" fill="'+B+'" '+st+'/>'
     +'<path d="M40 96 V64 a28 28 0 0 1 28 -28" fill="none" '+st+'/>'
     +'<ellipse cx="52" cy="70" rx="7" ry="20" fill="#2f6ca6" '+th(2.5)+'/>'
     +'<line x1="138" y1="80" x2="138" y2="30" '+th(4)+'/><rect x="138" y="30" width="26" height="16" fill="'+R+'" '+st+'/>'
     +'<g transform="rotate(-12 26 30)"><rect x="8" y="20" width="36" height="24" rx="3" fill="#fff" '+st+'/><path d="M8 22 L26 34 L44 22" fill="none" '+th(2.5)+'/></g>'
     +'<g transform="rotate(10 82 18)"><rect x="66" y="8" width="34" height="22" rx="3" fill="#fff" '+st+'/><path d="M66 10 L83 21 L100 10" fill="none" '+th(2.5)+'/></g>'),
    /* 情境 4：比預期還早做完——時鐘＋打勾 */
    g04_early: svg(
      '<circle cx="80" cy="80" r="50" fill="#fff" '+th(4)+'/>'
     +'<g '+th(4)+'><line x1="80" y1="34" x2="80" y2="42"/><line x1="126" y1="80" x2="118" y2="80"/><line x1="80" y1="126" x2="80" y2="118"/><line x1="34" y1="80" x2="42" y2="80"/></g>'
     +'<line x1="80" y1="80" x2="80" y2="50" '+th(4)+'/><line x1="80" y1="80" x2="58" y2="66" stroke="'+A+'" stroke-width="7" stroke-linecap="round"/>'
     +'<circle cx="80" cy="80" r="5" fill="'+D+'"/>'
     +'<path d="M14 40 h14 M8 56 h12 M10 104 h12" '+th(3.5)+'/>'
     +chk(152,48,26)),
    /* 情境 5：攝影師還沒回電——安靜的手機＋相機 */
    g04_phone: svg(
      '<rect x="92" y="14" width="66" height="122" rx="12" fill="'+D+'" '+st+'/><rect x="99" y="26" width="52" height="96" rx="4" fill="'+S+'"/>'
     +'<rect x="106" y="58" width="38" height="22" rx="10" fill="#fff" '+th(2.5)+'/>'
     +'<g fill="'+GR+'"><circle cx="116" cy="69" r="3.5"/><circle cx="125" cy="69" r="3.5"/><circle cx="134" cy="69" r="3.5"/></g>'
     +'<rect x="14" y="80" width="66" height="46" rx="7" fill="#5a6475" '+st+'/>'
     +'<rect x="26" y="70" width="22" height="12" rx="3" fill="#5a6475" '+st+'/>'
     +'<circle cx="47" cy="103" r="16" fill="'+S+'" '+st+'/><circle cx="47" cy="103" r="7" fill="#33405c" '+th(2.5)+'/>'
     +'<circle cx="70" cy="90" r="3.5" fill="'+Y+'"/>'),
    /* 情境 6：十五歲就認識——相框裡兩個女生 */
    g04_friends: svg(
      '<rect x="36" y="18" width="128" height="112" rx="6" fill="'+A+'" '+st+'/>'
     +'<rect x="48" y="30" width="104" height="88" rx="3" fill="'+S+'" '+st+'/>'
     +'<path d="M54 118 a22 18 0 0 1 44 0 Z" fill="'+R+'" '+th(2.5)+'/><path d="M102 118 a22 18 0 0 1 44 0 Z" fill="'+G+'" '+th(2.5)+'/>'
     +'<path d="M60 92 C56 62 92 58 92 84 V100 H60 Z" fill="#6b4a2f" '+th(2.5)+'/>'
     +'<circle cx="76" cy="80" r="14" fill="'+SK+'" '+th(2.5)+'/>'
     +'<path d="M110 80 C108 60 140 58 140 80 C138 74 120 66 110 80 Z" fill="'+D+'" '+th(2.5)+'/>'
     +'<circle cx="124" cy="82" r="14" fill="'+SK+'" '+th(2.5)+'/>'
     +'<path d="M108 76 C112 64 136 62 140 76 C132 70 116 70 108 76 Z" fill="'+D+'"/>'
     +'<g fill="'+D+'"><circle cx="71" cy="80" r="1.8"/><circle cx="81" cy="80" r="1.8"/><circle cx="119" cy="82" r="1.8"/><circle cx="129" cy="82" r="1.8"/></g>'
     +'<path d="M71 86 q5 4 10 0 M119 88 q5 4 10 0" fill="none" '+th(2)+'/>'
     +'<path d="M100 40 c-3 -5 -11 -3 -9 3 c1 4 9 9 9 9 c0 0 8 -5 9 -9 c2 -6 -6 -8 -9 -3 Z" fill="'+R+'" '+th(2)+'/>'),
    /* 情境 7：飯店兩週沒消息——飯店大樓＋空白對話框 */
    g04_hotel: svg(
      '<line x1="8" y1="136" x2="192" y2="136" '+st+'/>'
     +'<rect x="30" y="36" width="96" height="100" fill="'+L+'" '+st+'/>'
     +'<rect x="24" y="26" width="108" height="14" rx="3" fill="'+A+'" '+st+'/>'
     +'<g fill="'+S+'" '+th(2.5)+'><rect x="42" y="52" width="18" height="16"/><rect x="69" y="52" width="18" height="16"/><rect x="96" y="52" width="18" height="16"/><rect x="42" y="80" width="18" height="16"/><rect x="69" y="80" width="18" height="16"/><rect x="96" y="80" width="18" height="16"/></g>'
     +'<rect x="66" y="108" width="24" height="28" fill="'+B+'" '+st+'/>'
     +'<path d="M140 22 H184 a8 8 0 0 1 8 8 V56 a8 8 0 0 1 -8 8 H160 L148 76 V64 H140 a8 8 0 0 1 -8 -8 V30 a8 8 0 0 1 8 -8 Z" fill="#fff" '+st+'/>'
     +'<g fill="'+GR+'"><circle cx="150" cy="43" r="4"/><circle cx="162" cy="43" r="4"/><circle cx="174" cy="43" r="4"/></g>'),
    /* 情境 8：兩個禮拜＝一段長度——月曆塗滿 14 格 */
    g04_cal2w: svg(
      cal(30,30,124,104)
     +'<rect x="38" y="58" width="108" height="46" rx="4" fill="'+B+'" opacity=".22"/>'
     +'<path d="M42 82 H142" fill="none" stroke="'+B+'" stroke-width="5" stroke-linecap="round"/>'
     +'<path d="M132 72 L144 82 L132 92" fill="none" stroke="'+B+'" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>'
     +'<circle cx="166" cy="40" r="20" fill="'+A+'" '+st+'/>'+txt(166,47,'14',18,'#fff')),
    /* 情境 9：飯店寄來菜單——筆電上的盤子刀叉 */
    g04_menu: svg(
      '<rect x="36" y="20" width="128" height="84" rx="6" fill="'+D+'" '+st+'/><rect x="44" y="28" width="112" height="68" rx="2" fill="#fff"/>'
     +'<path d="M22 118 L36 104 H164 L178 118 Z" fill="'+GR+'" '+st+'/>'
     +'<rect x="52" y="40" width="34" height="24" rx="3" fill="'+L+'" '+th(2.5)+'/><path d="M52 42 L69 54 L86 42" fill="none" '+th(2.5)+'/>'
     +'<circle cx="119" cy="62" r="20" fill="'+C+'" '+th(2.5)+'/><circle cx="119" cy="62" r="12" fill="#fff" '+th(2)+'/>'
     +'<path d="M93 46 V80 M89 46 V56 a4 4 0 0 0 8 0 V46" fill="none" '+th(2.5)+'/>'
     +'<path d="M146 46 V80 M146 46 c5 4 5 16 0 20" fill="none" '+th(2.5)+'/>'
     +'<g stroke="'+GR+'" stroke-width="4" stroke-linecap="round"><line x1="54" y1="76" x2="80" y2="76"/><line x1="54" y1="86" x2="74" y2="86"/></g>'),
    /* 情境 10：做好了、還沒做——兩只戒指 */
    g04_rings: svg(
      '<circle cx="82" cy="90" r="30" fill="none" '+th(14)+'/><circle cx="82" cy="90" r="30" fill="none" stroke="'+Y+'" stroke-width="8"/>'
     +'<circle cx="122" cy="90" r="30" fill="none" '+th(14)+'/><circle cx="122" cy="90" r="30" fill="none" stroke="'+Y+'" stroke-width="8"/>'
     +'<path d="M104 68 a30 30 0 0 1 0 44" fill="none" stroke="'+Y+'" stroke-width="8"/>'
     +'<path d="M70 50 L82 38 L94 50 L82 62 Z" fill="'+S+'" '+st+'/>'
     +'<path d="M150 24 v14 M143 31 h14 M40 30 v10 M35 35 h10" '+th(3)+'/>'
     +'<path d="M166 66 l4 6 M176 56 l7 0" '+th(3)+'/>')
  });
})();

/* ============================================================
   g04 — Linked to Now: for, since, already, yet
   ============================================================ */
window.GVIDEO.g04 = {
  kind: 'gram',
  date: '',
  title: 'Linked to Now: for, since, already, yet',
  titleCn: '連到現在的四個小字：for、since、already、yet',
  titleArt: ['g04_flag', 'g04_hourglass', 'g04_checklist'],
  scene: '婚禮籌備 Wedding planning',
  sceneArt: 'g04_plan',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Megan', voice: 'f' },
    T: { name: 'Paul', voice: 'm' }
  },
  expr: {
    since: { t: 'since + 起點', cn: '從某個時間點開始，一直到現在', ex: 'Mr. Lin has coached the team since last summer.', exCn: '林教練從去年夏天就開始帶這支隊伍。', note: '起點可以是年份、星期幾、一件事，或一整句' },
    fr:    { t: 'for + 一段長度', cn: '持續了多久，一直到現在', ex: "Our family has owned this noodle shop for ten years.", exCn: '我們家開這間麵店已經十年了。', note: '回答 How long…?：for ten minutes、for two weeks、for a long time' },
    ay:    { t: 'already / yet', cn: '該做的事：已經做了／還沒做、做了沒', ex: "The shop has already closed, but my order hasn't arrived yet.", exCn: '店已經關了，可是我的訂單還沒到。', note: 'already 放 have 和過去分詞中間；yet 放句尾，用在否定句和問句' }
  },
  chapters: [
    { cn: '開場' }, { cn: '一路連到現在' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  /* 「現在」放右邊（86），左邊是過去 */
  timelineNow: 86,
  timeline: [
    { x: 22, art: 'g04_flag',      lab: 'since',       who: '標起點' },
    { x: 48, art: 'g04_hourglass', lab: 'for',         who: '量長度' },
    { x: 70, art: 'g04_checklist', lab: 'already·yet', who: '做了沒' }
  ],
  flow: [
    { q: '想說從什麼時候開始？',     a: 'since',       en: 'have / has + 過去分詞 + since + 起點' },
    { q: '想說持續了多久？',         a: 'for',         en: 'have / has + 過去分詞 + for + 長度' },
    { q: '在講該做的事，做了沒？',   a: 'already/yet', en: 'already 放中間・yet 放句尾' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: '現在完成式常跟四個小字一起出現：for、since、already、yet。這支影片一次幫你分清楚。', vis: { type: 'title' } },

    /* ---- 1 核心：一路連到現在 ---- */
    { ch: 1, sp: 'N', zh: '先看時間線，最右邊是現在。現在完成式的線，一定會連到現在。', vis: { type: 'timeline', show: 0, kick: 'Linked to now 一路連到現在' } },
    { ch: 1, sp: 'N', zh: '想說這件事從什麼時候開始，就用 since，後面接一個起點。',
      hi: [{ t: 'since', k: 'since', c: 3 }], vis: { type: 'timeline', show: 1, pop: true, kick: 'Linked to now 一路連到現在' } },
    { ch: 1, sp: 'A', en: 'Paul and I have been together since our first year of college.', cn: '我和 Paul 從大一就在一起了。',
      hi: [{ t: 'since our first year of college', cn: '起點', k: 'since', c: 3 }], vis: { type: 'timeline', show: 1, lit: 0, kick: 'Linked to now 一路連到現在' } },
    { ch: 1, sp: 'N', zh: '想說這件事已經持續多久，就用 for，後面接一段長度。',
      hi: [{ t: 'for', k: 'fr', c: 4 }], vis: { type: 'timeline', show: 2, pop: true, kick: 'Linked to now 一路連到現在' } },
    { ch: 1, sp: 'T', en: "We've been engaged for eight months now.", cn: '我們訂婚到現在已經八個月了。',
      hi: [{ t: 'for eight months', cn: '長度', k: 'fr', c: 4 }], vis: { type: 'timeline', show: 2, lit: 1, kick: 'Linked to now 一路連到現在' } },
    { ch: 1, sp: 'N', zh: '起點用 since 標出來，從起點到現在這一整段長度，就用 for 來量。',
      vis: { type: 'timeline', show: 2, dec: true, decText: '這一整段長度＝for', kick: 'Linked to now 一路連到現在' } },
    { ch: 1, sp: 'N', zh: '如果是一件該做的事，想說做了沒，就用 already 和 yet。',
      hi: [{ t: 'already', k: 'ay', c: 2 }, { t: 'yet', k: 'ay', c: 2 }], vis: { type: 'timeline', show: 3, pop: true, kick: 'Linked to now 一路連到現在' } },
    { ch: 1, sp: 'A', en: "We've already chosen the cake.", cn: '蛋糕我們已經選好了。',
      hi: [{ t: 'already', cn: '已經做了', k: 'ay', c: 2 }], vis: { type: 'timeline', show: 3, lit: 2, kick: 'Linked to now 一路連到現在' } },
    { ch: 1, sp: 'T', en: "But we haven't picked the music yet.", cn: '可是音樂我們還沒挑好。',
      hi: [{ t: 'yet', cn: '還沒', k: 'ay', c: 2 }], vis: { type: 'timeline', show: 3, lit: 2, kick: 'Linked to now 一路連到現在' } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: 'for 和 since 的句型一樣：主詞加 have 或 has，再加過去分詞，最後放時間。',
      hi: [{ t: 'since', k: 'since', c: 3 }, { t: 'for', k: 'fr', c: 4 }],
      vis: { type: 'pattern', kick: 'for / since 句型', rows: [
        { lab: 'since＋起點', blocks: [{ t: 'She', k: 's' }, { t: 'has taught', k: 'v' }, { t: 'piano', k: 'n' }, { t: 'since March', k: 'o' }] },
        { lab: 'for＋長度',   blocks: [{ t: 'They', k: 's' }, { t: 'have lived', k: 'v' }, { t: 'in Tainan', k: 'n' }, { t: 'for six years', k: 'o' }] }
      ], note: 'he / she / it 用 has，其他用 have' } },
    { ch: 2, sp: 'N', zh: 'since 後面的起點有很多種：可以是年份、星期幾、一件事，也可以是一整個句子。',
      hi: [{ t: 'since', k: 'since', c: 3 }],
      vis: { type: 'family', kick: 'since + 起點', core: 'since', coreCn: '後面接一個起點', art: 'g04_flag', items: [
        { t: 'since 2019', cn: '年份' }, { t: 'since Monday', cn: '星期幾' }, { t: 'since the party', cn: '一件事' }, { t: 'since I was ten', cn: '一整句' }
      ] } },
    { ch: 2, sp: 'N', zh: '問持續多久，用 How long 開頭，後面一樣接 have 加過去分詞。',
      vis: { type: 'pattern', kick: 'How long…? 問多久', rows: [
        { lab: '問',     blocks: [{ t: 'How long', k: 'n' }, { t: 'has she worked', k: 'v' }, { t: 'at the hotel', k: 'o' }] },
        { lab: '答',     blocks: [{ t: 'She', k: 's' }, { t: 'has worked', k: 'v' }, { t: 'there', k: 'n' }, { t: 'for two years', k: 'o', add: true }] }
      ], note: '還在做的事，問多久不用 do you work' } },
    { ch: 2, sp: 'N', zh: 'already 放在 have 和過去分詞中間；yet 放在句子最後面，用在否定句和問句。',
      hi: [{ t: 'already', k: 'ay', c: 2 }, { t: 'yet', k: 'ay', c: 2 }],
      vis: { type: 'pattern', kick: 'already / yet 放哪裡', rows: [
        { lab: '已經做了', blocks: [{ t: 'I', k: 's' }, { t: 'have', k: 'v' }, { t: 'already', k: 'n', add: true }, { t: 'paid', k: 'v' }, { t: 'the bill', k: 'o' }] },
        { lab: '還沒做',   blocks: [{ t: 'I', k: 's' }, { t: "haven't paid", k: 'v' }, { t: 'the bill', k: 'o' }, { t: 'yet', k: 'n', add: true }] },
        { lab: '做了沒',   blocks: [{ t: 'Have you', k: 'v' }, { t: 'paid', k: 'v' }, { t: 'the bill', k: 'o' }, { t: 'yet', k: 'n', add: true }] }
      ], note: 'already 常帶「比想的還早」的感覺' } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: '婚禮下個月就要辦了，Megan 和 Paul 正在對清單，看哪些做好了。', vis: { type: 'scene', art: 'g04_plan' } },
    { ch: 3, sp: 'A', en: 'Have you sent the invitations yet?', cn: '喜帖你寄了沒？',
      hi: [{ t: 'yet', cn: '做了沒', k: 'ay', c: 2 }], vis: { type: 'scene', art: 'g04_envelope' } },
    { ch: 3, sp: 'T', en: "Yes, I've already mailed all ninety of them.", cn: '寄了，九十張我全都寄出去了。',
      hi: [{ t: 'already', cn: '已經做了', k: 'ay', c: 2 }], vis: { type: 'scene', art: 'g04_mailbox' } },
    { ch: 3, sp: 'N', zh: 'Megan 問做了沒，yet 放在句尾；Paul 比她想的還早做完，所以用 already。',
      hi: [{ t: 'yet', k: 'ay', c: 2 }, { t: 'already', k: 'ay', c: 2 }], vis: { type: 'scene', art: 'g04_early' } },
    { ch: 3, sp: 'T', en: "But the photographer hasn't called me back yet.", cn: '可是攝影師還沒回我電話。',
      hi: [{ t: 'yet', cn: '還沒', k: 'ay', c: 2 }], vis: { type: 'scene', art: 'g04_phone' } },
    { ch: 3, sp: 'A', en: "Don't worry. I've known her since we were fifteen.", cn: '別擔心，我十五歲就認識她了。',
      hi: [{ t: 'since we were fifteen', cn: '起點', k: 'since', c: 3 }], vis: { type: 'scene', art: 'g04_friends' } },
    { ch: 3, sp: 'T', en: "OK. And we haven't heard from the hotel for two weeks.", cn: '好。還有，飯店那邊已經兩個禮拜沒消息了。',
      hi: [{ t: 'for two weeks', cn: '長度', k: 'fr', c: 4 }], vis: { type: 'scene', art: 'g04_hotel' } },
    { ch: 3, sp: 'N', zh: '十五歲那時候是一個起點，所以用 since；兩個禮拜是一段長度，所以用 for。',
      hi: [{ t: 'since', k: 'since', c: 3 }, { t: 'for', k: 'fr', c: 4 }], vis: { type: 'scene', art: 'g04_cal2w' } },
    { ch: 3, sp: 'A', en: "Actually, they've already emailed me the menu.", cn: '其實他們已經把菜單寄到我信箱了。',
      hi: [{ t: 'already', cn: '已經做了', k: 'ay', c: 2 }], vis: { type: 'scene', art: 'g04_menu' } },
    { ch: 3, sp: 'N', zh: '對清單的時候，最常用到 already 和 yet。',
      hi: [{ t: 'already', k: 'ay', c: 2 }, { t: 'yet', k: 'ay', c: 2 }], vis: { type: 'scene', art: 'g04_rings' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '同一件事，可以量長度，也可以標起點，後面接的東西跟著換。',
      vis: { type: 'vs', sm: true, kick: '量長度 vs 標起點',
        a: { w: 'She has played the violin for twenty years.', def: '她拉小提琴拉了二十年。', cn: '一段長度 → for' },
        b: { w: 'She has played the violin since she was six.', def: '她從六歲就開始拉小提琴。', cn: '一個起點 → since' } } },
    { ch: 4, sp: 'A', en: 'She has played the violin for twenty years.', cn: '她拉小提琴拉了二十年。',
      hi: [{ t: 'for twenty years', cn: '長度', k: 'fr', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '量長度 vs 標起點',
        a: { w: 'She has played the violin for twenty years.', def: '她拉小提琴拉了二十年。', cn: '一段長度 → for' },
        b: { w: 'She has played the violin since she was six.', def: '她從六歲就開始拉小提琴。', cn: '一個起點 → since' } } },
    { ch: 4, sp: 'T', en: 'She has played the violin since she was six.', cn: '她從六歲就開始拉小提琴。',
      hi: [{ t: 'since she was six', cn: '起點', k: 'since', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '量長度 vs 標起點',
        a: { w: 'She has played the violin for twenty years.', def: '她拉小提琴拉了二十年。', cn: '一段長度 → for' },
        b: { w: 'She has played the violin since she was six.', def: '她從六歲就開始拉小提琴。', cn: '一個起點 → since' } } },
    { ch: 4, sp: 'N', zh: '二十年是長度，六歲那年是起點。同一條線，一句量長度，一句標起點。',
      vis: { type: 'vs', sm: true, kick: '量長度 vs 標起點',
        a: { w: 'She has played the violin for twenty years.', def: '她拉小提琴拉了二十年。', cn: '一段長度 → for' },
        b: { w: 'She has played the violin since she was six.', def: '她從六歲就開始拉小提琴。', cn: '一個起點 → since' } } },
    { ch: 4, sp: 'N', zh: '再看一組。剛搬完家，有的箱子已經拆了，有的還沒。',
      vis: { type: 'vs', sm: true, kick: '做好了 vs 還沒做',
        a: { w: "We've already unpacked the kitchen boxes.", def: '廚房的箱子我們已經拆完了。', cn: '做好了 → already' },
        b: { w: "We haven't unpacked the books yet.", def: '書我們還沒拆。', cn: '還沒做 → yet' } } },
    { ch: 4, sp: 'A', en: "We've already unpacked the kitchen boxes.", cn: '廚房的箱子我們已經拆完了。',
      hi: [{ t: 'already', cn: '做好了', k: 'ay', c: 2 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '做好了 vs 還沒做',
        a: { w: "We've already unpacked the kitchen boxes.", def: '廚房的箱子我們已經拆完了。', cn: '做好了 → already' },
        b: { w: "We haven't unpacked the books yet.", def: '書我們還沒拆。', cn: '還沒做 → yet' } } },
    { ch: 4, sp: 'T', en: "We haven't unpacked the books yet.", cn: '書我們還沒拆。',
      hi: [{ t: 'yet', cn: '還沒', k: 'ay', c: 2 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '做好了 vs 還沒做',
        a: { w: "We've already unpacked the kitchen boxes.", def: '廚房的箱子我們已經拆完了。', cn: '做好了 → already' },
        b: { w: "We haven't unpacked the books yet.", def: '書我們還沒拆。', cn: '還沒做 → yet' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '最後給你一個判斷流程，照順序問自己三個問題。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一問：你想說的是從什麼時候開始嗎？是的話，用 since 加一個起點。',
      hi: [{ t: 'since', k: 'since', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'A', en: 'Our neighbor has worked at the fire station since last spring.', cn: '我們鄰居從去年春天就在消防隊上班。',
      hi: [{ t: 'since last spring', cn: '起點', k: 'since', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二問：你想說的是持續了多久嗎？是的話，用 for 加一段長度。',
      hi: [{ t: 'for', k: 'fr', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'T', en: 'My grandpa has collected stamps for forty years.', cn: '我爺爺集郵集了四十年。',
      hi: [{ t: 'for forty years', cn: '長度', k: 'fr', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '第三問：是在講一件該做的事嗎？做了用 already，還沒做或問做了沒，用 yet。',
      hi: [{ t: 'already', k: 'ay', c: 2 }, { t: 'yet', k: 'ay', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'A', en: 'Has the baby fallen asleep yet?', cn: '寶寶睡著了沒？',
      hi: [{ t: 'yet', cn: '做了沒', k: 'ay', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說說看。看到中文情境，先自己用英文說出來，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：你養你的狗已經五年了。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '你養你的狗已經五年了。' } },
    { ch: 6, sp: 'A', en: "I've had my dog for five years.", cn: '我的狗我已經養五年了。',
      hi: [{ t: 'for five years', cn: '長度 → for', k: 'fr', c: 4 }],
      vis: { type: 'speak', n: 1, show: true, sit: '你養你的狗已經五年了。', a: "I've had my dog for five years." } },
    { ch: 6, sp: 'N', zh: '情境二：你從二〇二〇年開始在這家銀行上班，現在還在。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '你從二〇二〇年開始在這家銀行上班，現在還在。' } },
    { ch: 6, sp: 'T', en: "I've worked at this bank since 2020.", cn: '我從二〇二〇年就在這家銀行上班。',
      hi: [{ t: 'since 2020', cn: '起點 → since', k: 'since', c: 3 }],
      vis: { type: 'speak', n: 2, show: true, sit: '你從二〇二〇年開始在這家銀行上班，現在還在。', a: "I've worked at this bank since 2020." } },
    { ch: 6, sp: 'N', zh: '情境三：朋友問你看過那部新電影沒，你還沒看。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '朋友問你看過那部新電影沒，你還沒看。' } },
    { ch: 6, sp: 'A', en: "I haven't seen it yet.", cn: '我還沒看。',
      hi: [{ t: 'yet', cn: '還沒 → yet', k: 'ay', c: 2 }],
      vis: { type: 'speak', n: 3, show: true, sit: '朋友問你看過那部新電影沒，你還沒看。', a: "I haven't seen it yet." } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結一下：since 標起點，for 量長度；already 是已經做了，yet 是還沒，或問做了沒。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '下次用現在完成式，先想一想：要講起點、長度，還是做了沒？', vis: { type: 'end' } }
  ]
};
