/* ============================================================
   B2 Read 文法影片解說 — g08（假設語氣 If 句型，B2）
   格式與規則見 b2lab/tools/GVIDEO_SPEC.md；範本 gvideo/dg20261014b1.js
   Grammar in Use：if and when／If I do… and If I did…／If I knew…／If I had known…
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
  var xm=function(cx,cy,r){ return '<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="'+R+'" '+st+'/><path d="M'+(cx-r*0.4)+' '+(cy-r*0.4)+' L'+(cx+r*0.4)+' '+(cy+r*0.4)+' M'+(cx+r*0.4)+' '+(cy-r*0.4)+' L'+(cx-r*0.4)+' '+(cy+r*0.4)+'" stroke="#fff" stroke-width="4" stroke-linecap="round"/>'; };

  Object.assign(window.GVIDEO_ART, {
    /* 核心 1：真的可能——實線小路一路通到旗子 */
    g08_real: svg(
      '<path d="M20 136 C60 120 40 92 90 84 C140 76 120 50 150 40" fill="none" stroke="'+D+'" stroke-width="16" stroke-linecap="round"/>'
     +'<path d="M20 136 C60 120 40 92 90 84 C140 76 120 50 150 40" fill="none" stroke="'+Y+'" stroke-width="9" stroke-linecap="round"/>'
     +'<line x1="152" y1="44" x2="152" y2="8" '+th(4)+'/><path d="M152 8 L182 16 L152 26 Z" fill="'+G+'" '+st+'/>'
     +chk(46,46,16)),
    /* 核心 2：只是想像——想像泡泡裡的小島（虛線） */
    g08_dream: svg(
      '<path d="M40 92 a22 22 0 0 1 4 -40 a30 30 0 0 1 56 -12 a26 26 0 0 1 46 10 a22 22 0 0 1 4 42 Z" fill="'+S+'" stroke="'+D+'" stroke-width="3" stroke-dasharray="7 6" stroke-linejoin="round"/>'
     +'<path d="M66 86 Q96 66 128 86 Z" fill="'+Y+'" '+th(2.5)+'/>'
     +'<path d="M98 78 Q96 58 90 46" fill="none" '+th(3)+'/><path d="M90 46 q-14 -2 -20 8 M90 46 q12 -8 22 0 M90 46 q-4 -12 -14 -14" fill="none" stroke="'+G+'" stroke-width="5" stroke-linecap="round"/>'
     +'<circle cx="50" cy="112" r="7" fill="'+S+'" '+th(2.5)+'/><circle cx="36" cy="132" r="4.5" fill="'+S+'" '+th(2.5)+'/>'),
    /* 核心 3：已經來不及——時鐘＋倒轉箭頭＋紅叉 */
    g08_past: svg(
      '<circle cx="92" cy="78" r="48" fill="#fff" '+th(4)+'/>'
     +'<line x1="92" y1="78" x2="92" y2="46" '+th(4)+'/><line x1="92" y1="78" x2="70" y2="90" stroke="'+A+'" stroke-width="6" stroke-linecap="round"/><circle cx="92" cy="78" r="5" fill="'+D+'"/>'
     +'<path d="M48 40 A62 62 0 0 1 140 30" fill="none" stroke="'+B+'" stroke-width="5" stroke-linecap="round"/><path d="M38 34 L48 42 L56 30" fill="none" stroke="'+B+'" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>'
     +xm(156,110,20)),

    /* 情境 1：展覽攤位 */
    g08_booth: svg(
      '<line x1="8" y1="138" x2="192" y2="138" '+st+'/>'
     +'<rect x="26" y="30" width="148" height="80" fill="'+C+'" '+st+'/>'
     +'<rect x="26" y="16" width="148" height="20" fill="'+B+'" '+st+'/>'
     +'<rect x="44" y="46" width="44" height="34" rx="3" fill="'+S+'" '+st+'/><path d="M58 56 L58 72 L72 64 Z" fill="#fff" '+th(2)+'/>'
     +'<rect x="104" y="46" width="56" height="10" rx="3" fill="'+L+'" '+th(2.5)+'/><rect x="104" y="62" width="40" height="10" rx="3" fill="'+L+'" '+th(2.5)+'/>'
     +'<rect x="60" y="96" width="80" height="42" fill="'+A+'" '+st+'/><line x1="60" y1="108" x2="140" y2="108" '+th(2.5)+'/>'
     +'<rect x="150" y="104" width="16" height="34" fill="'+L+'" '+th(2.5)+'/>'),
    /* 情境 2：布條中午前沒到——捲起的布條筒＋時鐘 */
    g08_banner: svg(
      '<g transform="rotate(-20 80 90)"><rect x="24" y="76" width="112" height="30" rx="15" fill="'+R+'" '+st+'/><ellipse cx="136" cy="91" rx="9" ry="15" fill="#f4a5a2" '+st+'/><line x1="60" y1="76" x2="60" y2="106" stroke="'+D+'" stroke-width="2"/><line x1="100" y1="76" x2="100" y2="106" stroke="'+D+'" stroke-width="2"/></g>'
     +'<circle cx="150" cy="44" r="30" fill="#fff" '+th(4)+'/>'
     +'<line x1="150" y1="44" x2="150" y2="20" '+th(4)+'/><line x1="150" y1="44" x2="150" y2="26" stroke="'+A+'" stroke-width="6" stroke-linecap="round"/><circle cx="150" cy="44" r="4" fill="'+D+'"/>'
     +'<line x1="12" y1="138" x2="190" y2="138" '+st+'/>'),
    /* 情境 3：攤位要是大一點，就能擺整台機器——機器比攤位框還大 */
    g08_machine: svg(
      '<line x1="8" y1="138" x2="192" y2="138" '+st+'/>'
     +'<rect x="30" y="54" width="150" height="84" rx="6" fill="#9aa5b1" '+st+'/>'
     +'<rect x="44" y="68" width="44" height="30" rx="4" fill="'+S+'" '+st+'/>'
     +'<circle cx="126" cy="86" r="18" fill="'+Y+'" '+st+'/><circle cx="126" cy="86" r="6" fill="'+D+'"/>'
     +'<g fill="'+G+'" '+th(2.5)+'><circle cx="60" cy="118" r="6"/></g><circle cx="80" cy="118" r="6" fill="'+R+'" '+th(2.5)+'/>'
     +'<rect x="40" y="24" width="96" height="114" fill="none" stroke="'+B+'" stroke-width="4" stroke-dasharray="8 6"/>'
     +'<path d="M146 30 h34 M150 24 l-6 6 l6 6 M176 24 l6 6 l-6 6" fill="none" stroke="'+A+'" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>'),
    /* 情境 4：有多可能？——可能性儀表 */
    g08_dial: svg(
      '<path d="M30 112 A70 70 0 0 1 170 112 Z" fill="#fff" '+st+'/>'
     +'<path d="M40 112 A60 60 0 0 1 70 60" fill="none" stroke="'+R+'" stroke-width="12"/>'
     +'<path d="M72 59 A60 60 0 0 1 128 59" fill="none" stroke="'+Y+'" stroke-width="12"/>'
     +'<path d="M130 60 A60 60 0 0 1 160 112" fill="none" stroke="'+G+'" stroke-width="12"/>'
     +'<path d="M30 112 A70 70 0 0 1 170 112 Z" fill="none" '+st+'/>'
     +'<line x1="100" y1="112" x2="146" y2="78" '+th(5)+'/><circle cx="100" cy="112" r="9" fill="'+A+'" '+st+'/>'
     +'<rect x="70" y="122" width="60" height="16" rx="5" fill="'+L+'" '+th(2.5)+'/>'),
    /* 情境 5：早點報名就拿到角落的位子——平面圖上的角落攤位 */
    g08_corner: svg(
      '<rect x="20" y="16" width="160" height="120" rx="6" fill="#fff" '+st+'/>'
     +'<g fill="'+S+'" '+th(2.5)+'><rect x="54" y="30" width="34" height="26"/><rect x="96" y="30" width="34" height="26"/><rect x="54" y="66" width="34" height="26"/><rect x="96" y="66" width="34" height="26"/><rect x="54" y="102" width="34" height="22"/><rect x="96" y="102" width="34" height="22"/></g>'
     +'<rect x="138" y="30" width="34" height="26" fill="'+Y+'" '+th(2.5)+'/>'
     +'<path d="M155 34 l3 6 l7 1 l-5 5 l1 7 l-6 -3 l-6 3 l1 -7 l-5 -5 l7 -1 Z" fill="'+A+'" '+th(1.5)+'/>'
     +'<rect x="26" y="66" width="20" height="58" fill="'+L+'" '+th(2.5)+'/>'
     +'<circle cx="36" cy="40" r="9" fill="'+G+'" '+th(2.5)+'/>'),
    /* 情境 6：大家喜歡展示就會找上門——大螢幕展示＋圍觀的人 */
    g08_demo: svg(
      '<rect x="44" y="14" width="112" height="70" rx="6" fill="#33405c" '+st+'/>'
     +'<path d="M90 34 L90 64 L116 49 Z" fill="'+Y+'" '+th(2.5)+'/>'
     +'<line x1="100" y1="84" x2="100" y2="100" '+th(4)+'/>'
     +'<g '+st+'><circle cx="30" cy="104" r="12" fill="'+L+'"/><path d="M12 140 q0 -22 18 -22 q18 0 18 22 Z" fill="'+R+'"/>'
     +'<circle cx="100" cy="112" r="12" fill="'+L+'"/><path d="M82 148 q0 -22 18 -22 q18 0 18 22 Z" fill="'+G+'"/>'
     +'<circle cx="170" cy="104" r="12" fill="'+L+'"/><path d="M152 140 q0 -22 18 -22 q18 0 18 22 Z" fill="'+B+'"/></g>'),
    /* 情境 7：報名期限早就過了——月曆上被圈起又打叉的日子 */
    g08_calendar: svg(
      cal(24,30,112,100)
     +'<circle cx="92" cy="94" r="15" fill="none" stroke="'+R+'" stroke-width="4"/>'
     +xm(162,58,22)
     +'<path d="M148 104 h28 M154 116 h16" fill="none" '+th(3)+'/>'),
    /* 情境 8：換作是我，就回家睡覺——枕頭＋月亮 */
    g08_moon: svg(
      '<path d="M142 12 a26 26 0 1 0 30 34 a21 21 0 0 1 -30 -34 Z" fill="'+Y+'" '+st+'/>'
     +txt(176,30,'Zz',20,B)
     +'<rect x="18" y="96" width="164" height="30" rx="8" fill="'+B+'" '+st+'/>'
     +'<path d="M26 96 q-4 -26 20 -26 h44 q20 0 16 26 Z" fill="#fff" '+st+'/>'
     +'<line x1="24" y1="126" x2="24" y2="140" '+th(4)+'/><line x1="176" y1="126" x2="176" y2="140" '+th(4)+'/>'),
    /* 情境 9：你走我就走——車鑰匙 */
    g08_keys: svg(
      '<circle cx="62" cy="58" r="24" fill="none" '+th(5)+'/>'
     +'<rect x="78" y="60" width="44" height="60" rx="14" fill="#33405c" '+st+'/><circle cx="100" cy="80" r="6" fill="'+R+'" '+th(2)+'/><circle cx="100" cy="100" r="6" fill="'+G+'" '+th(2)+'/>'
     +'<path d="M128 70 H176 V80 H168 V88 H160 V80 H150 V88 H140 V80 H128 Z" fill="'+Y+'" '+st+'/>'
     +'<circle cx="128" cy="75" r="10" fill="'+Y+'" '+st+'/>'),
    /* 情境 10：If I were you＝給建議——兩個對話框，一個裡有燈泡 */
    g08_advice: svg(
      '<path d="M20 22 H110 a12 12 0 0 1 12 12 V74 a12 12 0 0 1 -12 12 H56 L38 104 V86 H20 a12 12 0 0 1 -12 -12 V34 a12 12 0 0 1 12 -12 Z" fill="'+L+'" '+st+'/>'
     +'<path d="M65 32 a16 16 0 0 1 10 29 v6 h-20 v-6 a16 16 0 0 1 10 -29 Z" fill="'+Y+'" '+th(2.5)+'/><rect x="57" y="68" width="16" height="7" rx="2" fill="#c9c2b8" '+th(2)+'/>'
     +'<path d="M180 72 H120 a10 10 0 0 0 -10 10 V116 a10 10 0 0 0 10 10 H156 L170 140 V126 H180 a10 10 0 0 0 10 -10 V82 a10 10 0 0 0 -10 -10 Z" fill="'+S+'" '+st+'/>'
     +chk(150,99,13))
  });
})();

/* ============================================================
   g08 — How Likely Is It? Conditionals with If
   Grammar in Use：if/when（一類）、If I did（二類）、If I had done（三類）
   ============================================================ */
window.GVIDEO.g08 = {
  kind: 'gram',
  date: '',
  title: 'How Likely Is It?',
  titleCn: 'If 句型：可能、想像、來不及',
  titleArt: ['g08_real', 'g08_dream', 'g08_past'],
  scene: '展覽攤位 Trade fair booth',
  sceneArt: 'g08_booth',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Vivian', voice: 'f' },
    T: { name: 'Gabriel', voice: 'm' }
  },
  expr: {
    real:   { t: 'If + 現在式, will + V', cn: '真的可能發生（一類）；一定這樣的規則，兩邊都用現在式（零類）', ex: "If you need a ride, I'll pick you up.", exCn: '如果你需要人載，我去接你。', note: 'if 後面講未來，通常也用現在式；unless ＝ if … not' },
    unreal: { t: 'If + 過去式, would + V', cn: '想像、不太可能（二類），講的是現在', ex: "If we had a garden, we'd grow tomatoes.", exCn: '要是我們有院子，就會種番茄。', note: 'be 動詞常用 were：If I were you…' },
    past:   { t: 'If + had p.p., would have p.p.', cn: '已經過去、改不了（三類）', ex: "If he had set an alarm, he wouldn't have missed the interview.", exCn: '如果他有設鬧鐘，就不會錯過面試了。', note: '主句也可以用 could have、might have' }
  },
  chapters: [
    { cn: '開場' }, { cn: '先問：有多可能？' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  cardsKick: 'How likely? 有多可能？',
  cards: [
    { art: 'g08_real',  lab: '真的可能',   who: '零類・一類' },
    { art: 'g08_dream', lab: '只是想像',   who: '二類：講現在' },
    { art: 'g08_past',  lab: '已經來不及', who: '三類：講過去' }
  ],
  flow: [
    { q: '真的可能發生，或一定這樣？',   a: '零・一類', en: 'If + 現在式, will / 現在式' },
    { q: '講現在，但只是想像？',         a: '二類',     en: 'If + 過去式, would + 原形' },
    { q: '講過去，已經改不了？',         a: '三類',     en: 'If + had p.p., would have p.p.' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: 'If 句型有好幾種，差別在於你覺得這件事有多可能。', vis: { type: 'title' } },

    /* ---- 1 核心：有多可能？ ---- */
    { ch: 1, sp: 'N', zh: '說 if 之前，先問自己：這件事真的可能發生、只是想像，還是已經過去、改不了了？', vis: { type: 'cards', show: 0 } },
    { ch: 1, sp: 'N', zh: '真的可能發生，if 後面用現在式，主句用 will；一定會這樣的規則，兩邊都用現在式。',
      hi: [{ t: '現在式', k: 'real', c: 3 }], vis: { type: 'cards', show: 1, pop: true } },
    { ch: 1, sp: 'A', en: "If my flight lands on time, I'll call you from the taxi.", cn: '如果我的班機準時降落，我會在計程車上打給你。',
      hi: [{ t: 'lands', cn: '真的可能準時', k: 'real', c: 3 }], vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'N', zh: '只是想像的事，if 後面用過去式，主句用 would，講的卻是現在。',
      hi: [{ t: '過去式', k: 'unreal', c: 4 }], vis: { type: 'cards', show: 2, pop: true } },
    { ch: 1, sp: 'T', en: "If I spoke Japanese, I'd spend a year in Osaka.", cn: '要是我會說日文，我就去大阪住一年。',
      hi: [{ t: 'If I spoke', cn: '其實不會說', k: 'unreal', c: 4 }], vis: { type: 'cards', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: '已經改不了的過去，if 後面用 had 加過去分詞，主句用 would have。',
      hi: [{ t: 'would have', k: 'past', c: 2 }], vis: { type: 'cards', show: 3, pop: true } },
    { ch: 1, sp: 'A', en: "If I had checked the map, we wouldn't have gotten lost.", cn: '如果我當時有看地圖，我們就不會迷路了。',
      hi: [{ t: 'had checked', cn: '當時沒看', k: 'past', c: 2 }], vis: { type: 'cards', show: 3, lit: 2 } },
    { ch: 1, sp: 'N', zh: '發現了嗎？if 後面的時態每往後退一格，這件事就離現實更遠一點。',
      vis: { type: 'cards', show: 3 } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: '零類、一類的 if 後面都用現在式。規則用現在式收尾，可能的未來用 will。',
      hi: [{ t: '現在式', k: 'real', c: 3 }],
      vis: { type: 'pattern', kick: 'Zero & first 零類・一類', rows: [
        { lab: '零類', blocks: [{ t: 'If you mix red and blue,', k: 's' }, { t: 'you get', k: 'v' }, { t: 'purple', k: 'o' }] },
        { lab: '一類', blocks: [{ t: 'If the bus is late,', k: 's' }, { t: "I'll take", k: 'v' }, { t: 'a taxi', k: 'o' }] }
      ], note: 'if 後面講未來，通常不放 will' } },
    { ch: 2, sp: 'N', zh: '二類：if 加過去式，主句 would 加原形。be 動詞常用 were。',
      hi: [{ t: '過去式', k: 'unreal', c: 4 }],
      vis: { type: 'pattern', kick: 'Second 二類', rows: [
        { lab: '想像', blocks: [{ t: 'If I had a car,', k: 's' }, { t: "I'd drive", k: 'v' }, { t: 'to work', k: 'o' }] },
        { lab: '建議', blocks: [{ t: 'If I were you,', k: 's' }, { t: "I'd wait", k: 'v' }, { t: 'a week', k: 'o' }] }
      ], note: "I'd ＝ I would" } },
    { ch: 2, sp: 'N', zh: '三類：兩邊都退到完成式，had 配 would have。',
      hi: [{ t: 'would have', k: 'past', c: 2 }],
      vis: { type: 'pattern', kick: 'Third 三類', rows: [
        { lab: '後悔', blocks: [{ t: 'If she had asked,', k: 's' }, { t: 'she would have gotten', k: 'v' }, { t: 'a discount', k: 'o' }] }
      ], note: 'had 跟 would have 要成對出現' } },
    { ch: 2, sp: 'N', zh: '主句也能換成 could「就能」，或 might「也許會」。',
      vis: { type: 'family', kick: 'would · could · might', core: 'would · could · might', coreCn: '主句可以換的字', art: 'g08_dream', items: [
        { t: 'would', cn: '就會' }, { t: 'could', cn: '就能' }, { t: 'might', cn: '也許會' }
      ] } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: '展覽前一晚，Vivian 和 Gabriel 還在布置攤位。', vis: { type: 'scene', art: 'g08_booth' } },
    { ch: 3, sp: 'A', en: "If the banner doesn't arrive by noon, we'll print one nearby.", cn: '布條如果中午前沒送到，我們就在附近印一張。',
      hi: [{ t: "doesn't arrive", cn: '還有可能送到', k: 'real', c: 3 }], vis: { type: 'scene', art: 'g08_banner' } },
    { ch: 3, sp: 'T', en: 'Fine. If we had a bigger booth, we could show the whole machine.', cn: '好。要是我們的攤位大一點，就能把整台機器擺出來。',
      hi: [{ t: 'had a bigger booth', cn: '攤位就是這麼小', k: 'unreal', c: 4 }], vis: { type: 'scene', art: 'g08_machine' } },
    { ch: 3, sp: 'N', zh: '布條還可能送到，用一類；攤位變大只是想像，用過去式。',
      hi: [{ t: '一類', k: 'real', c: 3 }, { t: '過去式', k: 'unreal', c: 4 }], vis: { type: 'scene', art: 'g08_dial' } },
    { ch: 3, sp: 'A', en: 'True. If we had registered earlier, we would have gotten a corner spot.', cn: '是啊。如果我們早點報名，就能拿到角落的位子了。',
      hi: [{ t: 'had registered', cn: '當時太晚報名', k: 'past', c: 2 }], vis: { type: 'scene', art: 'g08_corner' } },
    { ch: 3, sp: 'T', en: "Well, if people like the demo, they'll find us anyway.", cn: '算了，如果大家喜歡我們的展示，還是會找過來的。',
      hi: [{ t: 'if people like', cn: '真的可能', k: 'real', c: 3 }], vis: { type: 'scene', art: 'g08_demo' } },
    { ch: 3, sp: 'N', zh: '早點報名這件事已經過去了，改不了，所以兩邊都退到完成式。',
      hi: [{ t: '完成式', k: 'past', c: 2 }], vis: { type: 'scene', art: 'g08_calendar' } },
    { ch: 3, sp: 'A', en: "If I were you, I'd go home and rest. The doors open at eight.", cn: '換作是我，我會先回家休息。明天八點就開門了。',
      hi: [{ t: 'If I were you', cn: '給建議', k: 'unreal', c: 4 }], vis: { type: 'scene', art: 'g08_moon' } },
    { ch: 3, sp: 'T', en: "I'll go if you go too.", cn: '你走我就走。',
      hi: [{ t: 'if you go', cn: '真的可能', k: 'real', c: 3 }], vis: { type: 'scene', art: 'g08_keys' } },
    { ch: 3, sp: 'N', zh: 'If I were you 是給建議的固定說法：換作是我，我會這樣做。',
      hi: [{ t: 'If I were you', k: 'unreal', c: 4 }], vis: { type: 'scene', art: 'g08_advice' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '同一份工作，用一類跟二類，聽起來的機會完全不一樣。',
      vis: { type: 'vs', sm: true, kick: '你覺得機會有多大？',
        a: { w: "If I get the job, I'll move to Kaohsiung.", def: '如果我拿到那份工作，我會搬去高雄。', cn: '覺得很有機會 → 一類' },
        b: { w: "If I got the job, I'd move to Kaohsiung.", def: '要是我拿到那份工作，我就會搬去高雄。', cn: '覺得機會不大 → 二類' } } },
    { ch: 4, sp: 'A', en: "If I get the job, I'll move to Kaohsiung.", cn: '如果我拿到那份工作，我會搬去高雄。',
      hi: [{ t: 'If I get', cn: '有機會', k: 'real', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '你覺得機會有多大？',
        a: { w: "If I get the job, I'll move to Kaohsiung.", def: '如果我拿到那份工作，我會搬去高雄。', cn: '覺得很有機會 → 一類' },
        b: { w: "If I got the job, I'd move to Kaohsiung.", def: '要是我拿到那份工作，我就會搬去高雄。', cn: '覺得機會不大 → 二類' } } },
    { ch: 4, sp: 'T', en: "If I got the job, I'd move to Kaohsiung.", cn: '要是我拿到那份工作，我就會搬去高雄。',
      hi: [{ t: 'If I got', cn: '不太可能', k: 'unreal', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '你覺得機會有多大？',
        a: { w: "If I get the job, I'll move to Kaohsiung.", def: '如果我拿到那份工作，我會搬去高雄。', cn: '覺得很有機會 → 一類' },
        b: { w: "If I got the job, I'd move to Kaohsiung.", def: '要是我拿到那份工作，我就會搬去高雄。', cn: '覺得機會不大 → 二類' } } },
    { ch: 4, sp: 'N', zh: '第一句覺得很有希望；第二句覺得不太可能，只是想想。',
      vis: { type: 'vs', sm: true, kick: '你覺得機會有多大？',
        a: { w: "If I get the job, I'll move to Kaohsiung.", def: '如果我拿到那份工作，我會搬去高雄。', cn: '覺得很有機會 → 一類' },
        b: { w: "If I got the job, I'd move to Kaohsiung.", def: '要是我拿到那份工作，我就會搬去高雄。', cn: '覺得機會不大 → 二類' } } },
    { ch: 4, sp: 'N', zh: '再看一組。一句講現在的想像，一句講已經過去的事。',
      vis: { type: 'vs', sm: true, kick: '現在 vs 過去',
        a: { w: "If the café were open, we'd go in.", def: '如果咖啡店有開，我們就進去。', cn: '現在沒開 → 二類' },
        b: { w: "If the café had been open, we'd have gone in.", def: '如果咖啡店當時有開，我們就進去了。', cn: '當時沒開 → 三類' } } },
    { ch: 4, sp: 'A', en: "If the café were open, we'd go in.", cn: '如果咖啡店有開，我們就進去。',
      hi: [{ t: 'were open', cn: '現在沒開', k: 'unreal', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '現在 vs 過去',
        a: { w: "If the café were open, we'd go in.", def: '如果咖啡店有開，我們就進去。', cn: '現在沒開 → 二類' },
        b: { w: "If the café had been open, we'd have gone in.", def: '如果咖啡店當時有開，我們就進去了。', cn: '當時沒開 → 三類' } } },
    { ch: 4, sp: 'T', en: "If the café had been open, we'd have gone in.", cn: '如果咖啡店當時有開，我們就進去了。',
      hi: [{ t: 'had been open', cn: '當時沒開', k: 'past', c: 2 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '現在 vs 過去',
        a: { w: "If the café were open, we'd go in.", def: '如果咖啡店有開，我們就進去。', cn: '現在沒開 → 二類' },
        b: { w: "If the café had been open, we'd have gone in.", def: '如果咖啡店當時有開，我們就進去了。', cn: '當時沒開 → 三類' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '最後給你一個判斷流程。說 if 之前，照順序問三個問題。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一問：真的可能，或一定會這樣？if 後面用現在式。',
      hi: [{ t: '現在式', k: 'real', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'A', en: "If the store has my size, I'll buy two pairs.", cn: '如果那家店有我的尺寸，我要買兩雙。',
      hi: [{ t: 'If the store has', cn: '真的可能', k: 'real', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二問：講現在，但只是想像？用過去式配 would。',
      hi: [{ t: '過去式', k: 'unreal', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'T', en: "If I lived closer to the office, I'd ride my bike.", cn: '要是我住得離公司近一點，我就騎腳踏車上班。',
      hi: [{ t: 'If I lived closer', cn: '其實住很遠', k: 'unreal', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '第三問：講過去，已經改不了？用 had 配 would have。',
      hi: [{ t: 'would have', k: 'past', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'A', en: 'If you had told me earlier, I could have helped.', cn: '如果你早點告訴我，我就能幫忙了。',
      hi: [{ t: 'had told', cn: '當時沒說', k: 'past', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說說看。看到中文情境，先自己用英文講一次，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：這個週末如果天氣好，你打算去騎腳踏車。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '這個週末如果天氣好，你打算去騎腳踏車。' } },
    { ch: 6, sp: 'T', en: "If the weather is nice this weekend, I'll go cycling.", cn: '如果這週末天氣好，我會去騎腳踏車。',
      hi: [{ t: 'If the weather is nice', cn: '真的可能 → 一類', k: 'real', c: 3 }],
      vis: { type: 'speak', n: 1, show: true, sit: '這個週末如果天氣好，你打算去騎腳踏車。', a: "If the weather is nice this weekend, I'll go cycling." } },
    { ch: 6, sp: 'N', zh: '情境二：朋友在煩惱要不要跟老闆談加薪，你建議他去談。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '朋友在煩惱要不要跟老闆談加薪，你建議他去談。' } },
    { ch: 6, sp: 'A', en: "If I were you, I'd ask for a raise.", cn: '換作是我，我會去要求加薪。',
      hi: [{ t: 'If I were you', cn: '給建議 → 二類', k: 'unreal', c: 4 }],
      vis: { type: 'speak', n: 2, show: true, sit: '朋友在煩惱要不要跟老闆談加薪，你建議他去談。', a: "If I were you, I'd ask for a raise." } },
    { ch: 6, sp: 'N', zh: '情境三：你昨天沒帶傘，淋得全身濕，現在很後悔。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '你昨天沒帶傘，淋得全身濕，現在很後悔。' } },
    { ch: 6, sp: 'T', en: "If I had brought an umbrella, I wouldn't have gotten wet.", cn: '如果我昨天有帶傘，就不會淋濕了。',
      hi: [{ t: 'had brought', cn: '改不了 → 三類', k: 'past', c: 2 }],
      vis: { type: 'speak', n: 3, show: true, sit: '你昨天沒帶傘，淋得全身濕，現在很後悔。', a: "If I had brought an umbrella, I wouldn't have gotten wet." } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結：真的可能用現在式；只是想像用過去式；改不了的過去用 had 配 would have。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '下次說 if 之前，先問自己一句：這件事有多可能？', vis: { type: 'end' } }
  ]
};
