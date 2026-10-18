/* ============================================================
   B2 Read 文法影片解說 — dg20260819a2（Grammar in Use Unit 2，A2）
   格式見 b2lab/tools/GVIDEO_SPEC.md；範本 gvideo/dg20261014b1.js。
   核心圖用 cards：習慣／事實／他她它加 s。
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
  var TAN='#c98b4f', DK='#8a5a33', SK='#f6d2b0';
  /* 小狗（側面，朝右），原點在身體中心 */
  var dog=function(x,y,s){ return '<g transform="translate('+x+' '+y+') scale('+s+')">'
    +'<path d="M-32 -4 q-12 -8 -8 -22" fill="none" '+th(4)+'/>'
    +'<rect x="-27" y="6" width="10" height="22" rx="4" fill="'+TAN+'" '+st+'/><rect x="-13" y="6" width="10" height="22" rx="4" fill="'+TAN+'" '+st+'/>'
    +'<rect x="8" y="6" width="10" height="22" rx="4" fill="'+TAN+'" '+st+'/><rect x="20" y="6" width="10" height="22" rx="4" fill="'+TAN+'" '+st+'/>'
    +'<ellipse cx="0" cy="0" rx="34" ry="17" fill="'+TAN+'" '+st+'/>'
    +'<circle cx="32" cy="-16" r="15" fill="'+TAN+'" '+st+'/>'
    +'<path d="M22 -29 q-9 10 -3 22 q8 -4 7 -20 Z" fill="'+DK+'" '+th(2.5)+'/>'
    +'<circle cx="36" cy="-19" r="2.4" fill="'+D+'"/><circle cx="46" cy="-13" r="3.2" fill="'+D+'"/>'
    +'<path d="M36 -8 q5 3 9 -1" fill="none" '+th(2)+'/></g>'; };

  Object.assign(window.GVIDEO_ART, {
    /* 卡 1：習慣——月曆每天打勾＋循環箭頭 */
    dg20260819a2_habit: svg((function(){
      var g=cal(24,34,116,100), w=116, h=100;
      for(var r=0;r<3;r++) for(var c=0;c<4;c++){ if(r===2&&c===3) continue;
        var cx=24+10+c*(w-20)/4+((w-20)/4-6)/2, cy=34+30+r*(h-38)/3+((h-38)/3-6)/2;
        g+='<path d="M'+(cx-5)+' '+cy+' l4 4 l7 -8" fill="none" stroke="'+G+'" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>'; }
      g+='<path d="M150 50 a20 20 0 1 1 8 26" fill="none" '+th(4)+'/><path d="M150 38 L150 52 L163 49" fill="none" '+th(4)+'/>';
      return g; })()),
    /* 卡 2：事實——房子＋定位針（住在哪裡） */
    dg20260819a2_fact: svg(
      '<line x1="10" y1="134" x2="190" y2="134" '+st+'/>'
     +'<rect x="36" y="74" width="92" height="60" fill="'+C+'" '+st+'/>'
     +'<path d="M26 78 L82 36 L138 78 Z" fill="'+R+'" '+st+'/>'
     +'<rect x="70" y="98" width="24" height="36" fill="'+L+'" '+st+'/><rect x="104" y="90" width="16" height="16" fill="'+S+'" '+th(2.5)+'/><rect x="44" y="90" width="16" height="16" fill="'+S+'" '+th(2.5)+'/>'
     +'<path d="M162 96 C150 80 142 70 142 58 a20 20 0 0 1 40 0 C182 70 174 80 162 96 Z" fill="'+B+'" '+st+'/>'
     +'<circle cx="162" cy="58" r="7" fill="#fff" '+th(2.5)+'/>'),
    /* 卡 3：he / she / it ＋ 動詞加 s */
    dg20260819a2_s: svg(
      '<circle cx="40" cy="50" r="16" fill="'+SK+'" '+st+'/><path d="M14 112 a26 30 0 0 1 52 0 Z" fill="'+B+'" '+st+'/>'
     +'<rect x="80" y="56" width="62" height="40" rx="8" fill="#fff" '+st+'/>'+txt(111,83,'work',18)
     +'<rect x="150" y="50" width="40" height="52" rx="8" fill="'+A+'" '+st+'/>'+txt(170,85,'+s',24,'#fff')
     +'<path d="M144 34 l6 -10 M170 26 v-12 M190 34 l-4 -10" '+th(3)+'/>'),

    /* 情境 1：公園——樹、長椅、太陽 */
    dg20260819a2_park: svg(
      '<line x1="8" y1="134" x2="192" y2="134" '+st+'/>'
     +'<circle cx="164" cy="32" r="16" fill="'+Y+'" '+st+'/>'
     +'<rect x="40" y="84" width="14" height="50" fill="'+DK+'" '+st+'/>'
     +'<circle cx="47" cy="62" r="32" fill="'+G+'" '+st+'/><circle cx="34" cy="56" r="5" fill="#fff" opacity=".35"/>'
     +'<rect x="92" y="96" width="84" height="10" rx="3" fill="'+A+'" '+st+'/><rect x="92" y="80" width="84" height="10" rx="3" fill="'+A+'" '+st+'/>'
     +'<line x1="100" y1="106" x2="100" y2="134" '+th(4)+'/><line x1="168" y1="106" x2="168" y2="134" '+th(4)+'/>'),
    /* 情境 2：你每天遛狗嗎？——狗＋牽繩＋問號 */
    dg20260819a2_askwalk: svg(
      '<line x1="8" y1="136" x2="192" y2="136" '+st+'/>'
     +dog(86,96,1.1)
     +'<path d="M108 88 q8 6 16 -2" fill="none" stroke="'+R+'" stroke-width="5" stroke-linecap="round"/>'
     +'<path d="M118 90 Q150 70 170 26" fill="none" stroke="'+R+'" stroke-width="4" stroke-linecap="round"/>'
     +'<rect x="162" y="12" width="18" height="20" rx="6" fill="'+R+'" '+th(2.5)+'/>'
     +qb(34,34)),
    /* 情境 3：每天早上遛狗——日出＋小狗＋腳印 */
    dg20260819a2_morning: svg(
      '<path d="M120 100 a34 34 0 0 1 68 0 Z" fill="'+Y+'" '+st+'/>'
     +'<g '+th(4)+'><line x1="154" y1="52" x2="154" y2="40"/><line x1="124" y1="66" x2="114" y2="58"/><line x1="184" y1="66" x2="194" y2="58"/></g>'
     +'<line x1="8" y1="100" x2="192" y2="100" '+st+'/>'
     +dog(62,82,0.75)
     +'<g fill="'+DK+'"><circle cx="40" cy="122" r="4"/><circle cx="62" cy="128" r="4"/><circle cx="86" cy="120" r="4"/><circle cx="110" cy="126" r="4"/><circle cx="134" cy="118" r="4"/></g>'),
    /* 情境 4：每天都做＝習慣——鬧鐘＋循環箭頭 */
    dg20260819a2_routine: svg(
      '<path d="M44 64 a58 58 0 0 1 104 -18" fill="none" '+th(4)+'/><path d="M140 30 L150 48 L132 52" fill="none" '+th(4)+'/>'
     +'<path d="M156 92 a58 58 0 0 1 -104 18" fill="none" '+th(4)+'/><path d="M60 124 L50 106 L68 102" fill="none" '+th(4)+'/>'
     +'<circle cx="74" cy="44" r="10" fill="'+Y+'" '+st+'/><circle cx="126" cy="44" r="10" fill="'+Y+'" '+st+'/>'
     +'<circle cx="100" cy="78" r="34" fill="'+R+'" '+st+'/><circle cx="100" cy="78" r="25" fill="#fff" '+th(2.5)+'/>'
     +'<path d="M100 78 V62 M100 78 L111 84" fill="none" '+th(3.5)+'/>'
     +'<line x1="80" y1="108" x2="72" y2="118" '+th(4)+'/><line x1="120" y1="108" x2="128" y2="118" '+th(4)+'/>'),
    /* 情境 5：你妹妹會幫你嗎？——綁辮子的女生＋問號 */
    dg20260819a2_asksis: svg(
      '<circle cx="52" cy="62" r="13" fill="'+DK+'" '+st+'/><circle cx="148" cy="62" r="13" fill="'+DK+'" '+st+'/>'
     +'<circle cx="100" cy="70" r="40" fill="'+SK+'" '+st+'/>'
     +'<path d="M60 66 a40 40 0 0 1 80 0 q-22 -10 -40 -24 q-16 16 -40 24 Z" fill="'+DK+'" '+st+'/>'
     +'<circle cx="86" cy="76" r="4" fill="'+D+'"/><circle cx="114" cy="76" r="4" fill="'+D+'"/>'
     +'<path d="M88 94 q12 9 24 0" fill="none" '+th(3)+'/>'
     +'<path d="M64 134 a36 24 0 0 1 72 0 Z" fill="'+R+'" '+st+'/>'
     +qb(170,30)),
    /* 情境 6：她十點才起床——床＋時鐘 10:00 */
    dg20260819a2_ten: svg(
      '<rect x="18" y="64" width="14" height="70" rx="3" fill="'+DK+'" '+st+'/>'
     +'<rect x="30" y="96" width="150" height="22" rx="4" fill="#fff" '+st+'/>'
     +'<path d="M70 96 q40 -26 108 -6 V112 H70 Z" fill="'+B+'" '+st+'/>'
     +'<ellipse cx="50" cy="88" rx="16" ry="9" fill="#fff" '+st+'/><circle cx="58" cy="80" r="11" fill="'+SK+'" '+st+'/>'
     +'<line x1="40" y1="118" x2="40" y2="134" '+th(4)+'/><line x1="172" y1="118" x2="172" y2="134" '+th(4)+'/>'
     +txt(84,62,'Z',16)+txt(98,46,'Z',20)
     +'<rect x="122" y="16" width="66" height="34" rx="6" fill="'+D+'" '+st+'/>'+txt(155,41,'10:00',19,Y)),
    /* 情境 7：s 跑到 does 上——eat 的 s 移到 does */
    dg20260819a2_does: svg(
      '<rect x="18" y="62" width="76" height="46" rx="9" fill="'+A+'" '+st+'/>'+txt(56,93,'does',22,'#fff')
     +'<rect x="112" y="62" width="70" height="46" rx="9" fill="#fff" '+st+'/>'+txt(147,93,'eat',22)
     +'<path d="M160 56 C150 18 98 14 82 50" fill="none" '+th(3.5)+' stroke-dasharray="2 8"/>'
     +'<path d="M76 40 L82 52 L92 44" fill="none" '+th(3.5)+'/>'
     +'<circle cx="122" cy="26" r="14" fill="'+Y+'" '+st+'/>'+txt(122,33,'s',20)
     +chk(56,128,14)),
    /* 情境 8：牠吃什麼？——狗碗＋問號 */
    dg20260819a2_bowl: svg(
      '<line x1="10" y1="132" x2="190" y2="132" '+st+'/>'
     +'<path d="M40 96 H150 L138 132 H52 Z" fill="'+R+'" '+st+'/>'
     +'<ellipse cx="95" cy="96" rx="55" ry="10" fill="#fff" '+st+'/>'
     +'<g fill="'+DK+'" '+th(2)+'><circle cx="74" cy="92" r="6"/><circle cx="88" cy="88" r="6"/><circle cx="102" cy="91" r="6"/><circle cx="116" cy="88" r="6"/><circle cx="96" cy="82" r="6"/></g>'
     +'<ellipse cx="95" cy="96" rx="55" ry="10" fill="none" '+st+'/>'
     +'<path d="M78 116 a5 5 0 1 1 6 -6 h22 a5 5 0 1 1 6 6 a5 5 0 1 1 -6 6 h-22 a5 5 0 1 1 -6 -6 Z" fill="#fff" '+th(2.5)+'/>'
     +qb(160,46)),
    /* 情境 9：牠吃紅蘿蔔——三根紅蘿蔔 */
    dg20260819a2_carrot: svg(
      '<g transform="rotate(-20 70 80)"><path d="M58 50 L82 50 L70 132 Z" fill="'+A+'" '+st+'/><path d="M70 50 q-12 -20 -4 -32 M70 50 q2 -24 12 -30 M70 50 q16 -14 22 -10" fill="none" stroke="'+G+'" stroke-width="5" stroke-linecap="round"/><path d="M63 74 h8 M66 96 h6" '+th(2.5)+'/></g>'
     +'<g><path d="M88 46 L114 46 L101 134 Z" fill="'+A+'" '+st+'/><path d="M101 46 q-12 -20 -4 -32 M101 46 q2 -24 12 -30 M101 46 q16 -14 22 -10" fill="none" stroke="'+G+'" stroke-width="5" stroke-linecap="round"/><path d="M95 72 h8 M97 96 h6" '+th(2.5)+'/></g>'
     +'<g transform="rotate(20 132 80)"><path d="M120 50 L144 50 L132 132 Z" fill="'+A+'" '+st+'/><path d="M132 50 q-12 -20 -4 -32 M132 50 q2 -24 12 -30 M132 50 q16 -14 22 -10" fill="none" stroke="'+G+'" stroke-width="5" stroke-linecap="round"/><path d="M126 76 h8 M128 98 h6" '+th(2.5)+'/></g>'),
    /* 情境 10：牠超愛——狗臉＋愛心 */
    dg20260819a2_heart: svg(
      '<path d="M56 54 q-24 10 -18 46 q14 0 22 -22 Z" fill="'+DK+'" '+st+'/><path d="M144 54 q24 10 18 46 q-14 0 -22 -22 Z" fill="'+DK+'" '+st+'/>'
     +'<circle cx="100" cy="82" r="44" fill="'+TAN+'" '+st+'/>'
     +'<ellipse cx="100" cy="102" rx="22" ry="16" fill="'+C+'" '+th(2.5)+'/>'
     +'<circle cx="84" cy="74" r="4.5" fill="'+D+'"/><circle cx="116" cy="74" r="4.5" fill="'+D+'"/>'
     +'<ellipse cx="100" cy="94" rx="7" ry="5" fill="'+D+'"/><path d="M90 108 q10 8 20 0" fill="none" '+th(2.5)+'/>'
     +'<path d="M166 30 c-6 -10 -22 -6 -18 8 c3 8 18 18 18 18 c0 0 15 -10 18 -18 c4 -14 -12 -18 -18 -8 Z" fill="'+R+'" '+st+'/>'
     +'<path d="M30 26 c-4 -7 -15 -4 -12 5 c2 5 12 12 12 12 c0 0 10 -7 12 -12 c3 -9 -8 -12 -12 -5 Z" fill="'+R+'" '+th(2.5)+'/>')
  });
})();

/* ============================================================
   dg20260819a2 — Present Simple: Habits, Facts and the -s
   Grammar in Use Unit 2（Present simple, I do）A2
   ============================================================ */
window.GVIDEO.dg20260819a2 = {
  kind: 'gram',
  date: '2026-08-19',
  title: 'Present Simple (I do)',
  titleCn: '現在簡單式：習慣、事實，還有那個 s',
  titleArt: ['dg20260819a2_habit', 'dg20260819a2_fact', 'dg20260819a2_s'],
  scene: '公園遛狗 At the park',
  sceneArt: 'dg20260819a2_park',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Nina', voice: 'f' },
    T: { name: 'Kevin', voice: 'm' }
  },
  expr: {
    use: { t: 'V / V-s', cn: '習慣和事實 → 現在簡單式', ex: 'We eat dinner at seven every evening.', exCn: '我們每天晚上七點吃晚餐。', note: '常跟 every day、usually、always 一起出現' },
    s:   { t: 'he / she / it + V-s', cn: '主詞是他、她、它 → 動詞加 s', ex: 'My brother washes the car on Sundays.', exCn: '我哥哥星期天洗車。', note: 'ch、sh、s、x、o 結尾加 es；子音 + y 改成 ies' },
    do:  { t: "don't / doesn't · Do / Does", cn: '否定和疑問 → 借 do / does', ex: 'Does your teacher give much homework?', exCn: '你們老師會出很多作業嗎？', note: '用了 does，後面的動詞就回到原形' }
  },
  chapters: [
    { cn: '開場' }, { cn: '什麼時候用？' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  cardsKick: 'Habits, facts, the -s 習慣・事實・加 s',
  cards: [
    { art: 'dg20260819a2_habit', lab: '習慣',      who: '平常一直重複' },
    { art: 'dg20260819a2_fact',  lab: '事實',      who: '一直都對的事' },
    { art: 'dg20260819a2_s',     lab: '他她它加 s', who: 'he / she / it' }
  ],
  flow: [
    { q: '主詞是他、她、它嗎？', a: '動詞加 s', en: 'he / she / it + V-s' },
    { q: '要說「不」嗎？',       a: '否定句',   en: "don't / doesn't + 原形" },
    { q: '要問問題嗎？',         a: '疑問句',   en: 'Do / Does + 主詞 + 原形?' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: '英文最基本的時態，就是現在簡單式。這支影片教你什麼時候用，還有那個最容易忘記的 s。', vis: { type: 'title' } },

    /* ---- 1 核心：什麼時候用 ---- */
    { ch: 1, sp: 'N', zh: '現在簡單式最常用在兩種事。先看這三張卡。', vis: { type: 'cards', show: 0 } },
    { ch: 1, sp: 'N', zh: '第一種是習慣，就是你平常一直重複在做的事。',
      hi: [{ t: '習慣', k: 'use', c: 3 }], vis: { type: 'cards', show: 1, pop: true } },
    { ch: 1, sp: 'A', en: 'I drink milk before bed every night.', cn: '我每天晚上睡前都喝牛奶。',
      hi: [{ t: 'every night', cn: '每天晚上', k: 'use', c: 3 }], vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'N', zh: '第二種是事實，就是一直都對、不太會改變的事。',
      hi: [{ t: '事實', k: 'use', c: 4 }], vis: { type: 'cards', show: 2, pop: true } },
    { ch: 1, sp: 'T', en: 'My uncle lives in Hualien.', cn: '我叔叔住在花蓮。',
      hi: [{ t: 'lives', cn: '住在哪＝事實', k: 'use', c: 4 }], vis: { type: 'cards', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: '你注意到了嗎？叔叔是一個人，等於 he，所以 live 後面多了一個 s。',
      vis: { type: 'cards', show: 2 } },
    { ch: 1, sp: 'N', zh: '這就是第三張卡：主詞是他、她、它的時候，動詞要加 s。',
      hi: [{ t: '動詞要加 s', k: 's', c: 2 }], vis: { type: 'cards', show: 3, pop: true } },
    { ch: 1, sp: 'A', en: 'Our cat sleeps on the sofa all afternoon.', cn: '我們的貓整個下午都睡在沙發上。',
      hi: [{ t: 'sleeps', cn: 'it → 加 s', k: 's', c: 2 }], vis: { type: 'cards', show: 3, lit: 2 } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: '句型很簡單：主詞加動詞原形。主詞換成他、她、它，動詞就加 s。',
      hi: [{ t: '動詞就加 s', k: 's', c: 2 }],
      vis: { type: 'pattern', kick: 'Present simple 現在簡單式', rows: [
        { lab: 'I / we / they', blocks: [{ t: 'We', k: 's' }, { t: 'play', k: 'v' }, { t: 'basketball on Fridays', k: 'o' }] },
        { lab: 'he / she / it', blocks: [{ t: 'Jack', k: 's' }, { t: 'plays', k: 'v', add: true }, { t: 'basketball on Fridays', k: 'o' }] }
      ], note: 'Jack ＝ he：play → plays' } },
    { ch: 2, sp: 'N', zh: '加 s 有三種寫法。大部分直接加 s；字尾是 ch、sh、s、x、o 的加 es；子音加 y 的，把 y 改成 ies。',
      vis: { type: 'family', kick: 'Adding -s 加 s 的寫法', core: '-s · -es · -ies', coreCn: '他她它的動詞', art: 'dg20260819a2_s', items: [
        { t: 'reads · eats', cn: '直接加 s' }, { t: 'washes · goes', cn: '加 es' }, { t: 'cries · carries', cn: 'y 改成 ies' }
      ] } },
    { ch: 2, sp: 'N', zh: "要說「不」，就用 don't 或 doesn't，後面的動詞一律用原形。",
      hi: [{ t: "doesn't", k: 'do', c: 1 }],
      vis: { type: 'pattern', kick: 'Negative 否定句', rows: [
        { lab: 'I / we / they', blocks: [{ t: 'I', k: 's' }, { t: "don't", k: 'n' }, { t: 'eat', k: 'v' }, { t: 'spicy food', k: 'o' }] },
        { lab: 'he / she / it', blocks: [{ t: 'My mom', k: 's' }, { t: "doesn't", k: 'n', add: true }, { t: 'eat', k: 'v' }, { t: 'spicy food', k: 'o' }] }
      ], note: "doesn't 已經帶了 s，eat 不用再加" } },
    { ch: 2, sp: 'N', zh: '要問問題，就把 Do 或 Does 放在最前面。一樣，s 跑到 does 身上，動詞回到原形。',
      hi: [{ t: 'Does', k: 'do', c: 1 }],
      vis: { type: 'pattern', kick: 'Questions 疑問句', rows: [
        { lab: 'you / they', blocks: [{ t: 'Do', k: 'n' }, { t: 'you', k: 's' }, { t: 'like', k: 'v' }, { t: 'cartoons?', k: 'o' }] },
        { lab: 'he / she / it', blocks: [{ t: 'Does', k: 'n', add: true }, { t: 'Ben', k: 's' }, { t: 'like', k: 'v' }, { t: 'cartoons?', k: 'o' }] }
      ], note: 's 只出現一次：在動詞上，或在 does 上' } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: '來聽 Nina 和 Kevin 在公園的對話。Kevin 每天都會帶狗出來散步，注意他們哪裡有加 s。', vis: { type: 'scene', art: 'dg20260819a2_park' } },
    { ch: 3, sp: 'A', en: 'Do you walk your dog every day?', cn: '你每天都會遛狗嗎？',
      hi: [{ t: 'Do you walk', cn: '問習慣', k: 'do', c: 1 }], vis: { type: 'scene', art: 'dg20260819a2_askwalk' } },
    { ch: 3, sp: 'T', en: 'Yes, I walk him every morning.', cn: '對，我每天早上都遛牠。',
      hi: [{ t: 'I walk', cn: '習慣', k: 'use', c: 3 }], vis: { type: 'scene', art: 'dg20260819a2_morning' } },
    { ch: 3, sp: 'N', zh: '每天早上都做，是習慣，所以用現在簡單式。主詞是 I，動詞用原形 walk。',
      hi: [{ t: '習慣', k: 'use', c: 3 }], vis: { type: 'scene', art: 'dg20260819a2_routine' } },
    { ch: 3, sp: 'A', en: 'Does your sister help you?', cn: '你妹妹會幫你嗎？',
      hi: [{ t: 'Does', cn: 'sister ＝ she', k: 'do', c: 1 }], vis: { type: 'scene', art: 'dg20260819a2_asksis' } },
    { ch: 3, sp: 'T', en: "No, she doesn't. She gets up at ten!", cn: '不會，她十點才起床！',
      hi: [{ t: "doesn't", cn: '否定', k: 'do', c: 1 }, { t: 'gets', cn: '加 s', k: 's', c: 2 }], vis: { type: 'scene', art: 'dg20260819a2_ten' } },
    { ch: 3, sp: 'N', zh: "主詞是 she，問句用 Does，否定用 doesn't。s 跑到 does 身上了。",
      hi: [{ t: "doesn't", k: 'do', c: 1 }], vis: { type: 'scene', art: 'dg20260819a2_does' } },
    { ch: 3, sp: 'A', en: 'What does he eat?', cn: '那牠吃什麼？',
      hi: [{ t: 'does he eat', cn: 'does + 原形', k: 'do', c: 1 }], vis: { type: 'scene', art: 'dg20260819a2_bowl' } },
    { ch: 3, sp: 'T', en: 'He eats carrots. He loves them.', cn: '牠吃紅蘿蔔，牠超愛的。',
      hi: [{ t: 'eats', cn: '加 s', k: 's', c: 2 }, { t: 'loves', cn: '加 s', k: 's', c: 2 }], vis: { type: 'scene', art: 'dg20260819a2_carrot' } },
    { ch: 3, sp: 'N', zh: '主詞是 he，eat 變 eats，love 變 loves。看到他、她、它，記得加 s。',
      hi: [{ t: '記得加 s', k: 's', c: 2 }], vis: { type: 'scene', art: 'dg20260819a2_heart' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '同一件事，主詞一換，動詞就跟著變。',
      vis: { type: 'vs', sm: true, kick: '很多人 vs 一個人',
        a: { w: 'My parents cook on weekends.', def: '我爸媽週末會煮飯。', cn: 'they → 原形' },
        b: { w: 'My aunt cooks on weekends.', def: '我阿姨週末會煮飯。', cn: 'she → 加 s' } } },
    { ch: 4, sp: 'A', en: 'My parents cook on weekends.', cn: '我爸媽週末會煮飯。',
      hi: [{ t: 'cook', cn: '原形', k: 'use', c: 1 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '很多人 vs 一個人',
        a: { w: 'My parents cook on weekends.', def: '我爸媽週末會煮飯。', cn: 'they → 原形' },
        b: { w: 'My aunt cooks on weekends.', def: '我阿姨週末會煮飯。', cn: 'she → 加 s' } } },
    { ch: 4, sp: 'T', en: 'My aunt cooks on weekends.', cn: '我阿姨週末會煮飯。',
      hi: [{ t: 'cooks', cn: '加 s', k: 's', c: 2 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '很多人 vs 一個人',
        a: { w: 'My parents cook on weekends.', def: '我爸媽週末會煮飯。', cn: 'they → 原形' },
        b: { w: 'My aunt cooks on weekends.', def: '我阿姨週末會煮飯。', cn: 'she → 加 s' } } },
    { ch: 4, sp: 'N', zh: '爸媽是兩個人，等於 they，用原形；阿姨是一個人，等於 she，動詞就要加 s。',
      vis: { type: 'vs', sm: true, kick: '很多人 vs 一個人',
        a: { w: 'My parents cook on weekends.', def: '我爸媽週末會煮飯。', cn: 'they → 原形' },
        b: { w: 'My aunt cooks on weekends.', def: '我阿姨週末會煮飯。', cn: 'she → 加 s' } } },
    { ch: 4, sp: 'N', zh: "否定句也一樣。先看主詞，再決定用 don't 還是 doesn't。",
      vis: { type: 'vs', sm: true, kick: "don't vs doesn't",
        a: { w: "My friends don't watch TV.", def: '我的朋友們不看電視。', cn: "they → don't" },
        b: { w: "My grandpa doesn't watch TV.", def: '我爺爺不看電視。', cn: "he → doesn't" } } },
    { ch: 4, sp: 'A', en: "My friends don't watch TV.", cn: '我的朋友們不看電視。',
      hi: [{ t: "don't watch", cn: 'they', k: 'do', c: 1 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: "don't vs doesn't",
        a: { w: "My friends don't watch TV.", def: '我的朋友們不看電視。', cn: "they → don't" },
        b: { w: "My grandpa doesn't watch TV.", def: '我爺爺不看電視。', cn: "he → doesn't" } } },
    { ch: 4, sp: 'T', en: "My grandpa doesn't watch TV.", cn: '我爺爺不看電視。',
      hi: [{ t: "doesn't watch", cn: 'he', k: 'do', c: 1 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: "don't vs doesn't",
        a: { w: "My friends don't watch TV.", def: '我的朋友們不看電視。', cn: "they → don't" },
        b: { w: "My grandpa doesn't watch TV.", def: '我爺爺不看電視。', cn: "he → doesn't" } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '最後給你一個判斷流程。用現在簡單式造句的時候，不用想太多，照順序問自己三個問題就好。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一問：主詞是他、她、它嗎？是的話，動詞加 s。',
      hi: [{ t: '動詞加 s', k: 's', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'A', en: 'Lucy teaches piano on Saturdays.', cn: 'Lucy 星期六教鋼琴。',
      hi: [{ t: 'teaches', cn: 'ch 結尾加 es', k: 's', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: "第二問：要說「不」嗎？用 don't 或 doesn't，後面接原形。",
      hi: [{ t: "doesn't", k: 'do', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'T', en: "This bus doesn't stop here.", cn: '這班公車不停這裡。',
      hi: [{ t: "doesn't stop", cn: '否定 + 原形', k: 'do', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '第三問：要問問題嗎？把 Do 或 Does 放最前面，動詞一樣用原形。',
      hi: [{ t: 'Does', k: 'do', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'A', en: 'Does this shop sell batteries?', cn: '這家店有賣電池嗎？',
      hi: [{ t: 'Does', cn: 'shop ＝ it', k: 'do', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說說看。看到中文情境，先自己用英文說出來，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：你每天都搭公車上學。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '你每天都搭公車上學。' } },
    { ch: 6, sp: 'T', en: 'I take the bus to school every day.', cn: '我每天搭公車上學。',
      hi: [{ t: 'take', cn: 'I → 原形', k: 'use', c: 3 }],
      vis: { type: 'speak', n: 1, show: true, sit: '你每天都搭公車上學。', a: 'I take the bus to school every day.' } },
    { ch: 6, sp: 'N', zh: '情境二：你姊姊每天晚上都會練吉他。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '你姊姊每天晚上都會練吉他。' } },
    { ch: 6, sp: 'A', en: 'My sister practices the guitar every evening.', cn: '我姊姊每天晚上練吉他。',
      hi: [{ t: 'practices', cn: 'she → 加 s', k: 's', c: 2 }],
      vis: { type: 'speak', n: 2, show: true, sit: '你姊姊每天晚上都會練吉他。', a: 'My sister practices the guitar every evening.' } },
    { ch: 6, sp: 'N', zh: '情境三：你想問朋友，他爸爸平常喝不喝咖啡。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '你想問朋友，他爸爸平常喝不喝咖啡。' } },
    { ch: 6, sp: 'T', en: 'Does your dad drink coffee?', cn: '你爸爸喝咖啡嗎？',
      hi: [{ t: 'Does', cn: 'dad ＝ he', k: 'do', c: 1 }],
      vis: { type: 'speak', n: 3, show: true, sit: '你想問朋友，他爸爸平常喝不喝咖啡。', a: 'Does your dad drink coffee?' } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結一下：習慣和事實，用現在簡單式。主詞是他、她、它，動詞加 s；否定和疑問，s 就跑到 does 身上。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '下次開口之前，先看一眼主詞：要不要加那個 s？', vis: { type: 'end' } }
  ]
};
