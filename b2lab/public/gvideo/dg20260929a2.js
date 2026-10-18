/* ============================================================
   B2 Read 文法影片解說 — dg20260929a2（Unit 15 · A2）
   格式與規則見 b2lab/tools/GVIDEO_SPEC.md；範本 gvideo/dg20261014b1.js。
   註：播放器的 timeline 把「現在」固定在最左邊，過去完成式放上去會像在講未來，
   所以這支用 cards（依時間先後排）。
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
  /* 氣球 */
  var balloon=function(cx,cy,col){ return '<path d="M'+cx+' '+(cy+22)+' q-6 14 4 26" fill="none" '+th(2)+'/>'
      +'<ellipse cx="'+cx+'" cy="'+cy+'" rx="16" ry="20" fill="'+col+'" '+st+'/><path d="M'+(cx-4)+' '+(cy+22)+' h8 l-4 -4 Z" fill="'+col+'" '+th(2)+'/>'; };
  /* 蛋糕 */
  var cake=function(x,y,w){ return '<rect x="'+x+'" y="'+(y+22)+'" width="'+w+'" height="40" rx="6" fill="'+L+'" '+st+'/>'
      +'<path d="M'+x+' '+(y+34)+' q'+(w/8)+' 10 '+(w/4)+' 0 t'+(w/4)+' 0 t'+(w/4)+' 0 t'+(w/4)+' 0 V'+(y+28)+' a6 6 0 0 0 -6 -6 H'+(x+6)+' a6 6 0 0 0 -6 6 Z" fill="#f4a6b8" '+st+'/>'
      +'<rect x="'+(x+w/2-4)+'" y="'+y+'" width="8" height="22" rx="2" fill="'+B+'" '+th(2.5)+'/>'
      +'<path d="M'+(x+w/2)+' '+(y-14)+' c-6 6 -4 10 0 12 c4 -2 6 -6 0 -12 Z" fill="'+Y+'" '+th(2)+'/>'; };
  var clock=function(cx,cy,r,hA,mA){ var hx=cx+Math.sin(hA)*r*0.5, hy=cy-Math.cos(hA)*r*0.5, mx=cx+Math.sin(mA)*r*0.78, my=cy-Math.cos(mA)*r*0.78;
    return '<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="#fff" '+th(4)+'/>'
      +'<line x1="'+cx+'" y1="'+cy+'" x2="'+hx.toFixed(1)+'" y2="'+hy.toFixed(1)+'" '+th(5)+'/>'
      +'<line x1="'+cx+'" y1="'+cy+'" x2="'+mx.toFixed(1)+'" y2="'+my.toFixed(1)+'" stroke="'+A+'" stroke-width="5" stroke-linecap="round"/>'
      +'<circle cx="'+cx+'" cy="'+cy+'" r="4" fill="'+D+'"/>'; };
  var door=function(x,y,w,h){ return '<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" rx="3" fill="#a0673f" '+st+'/>'
      +'<rect x="'+(x+8)+'" y="'+(y+10)+'" width="'+(w-16)+'" height="'+(h*0.35)+'" rx="2" fill="#b97a50" '+th(2.5)+'/>'
      +'<circle cx="'+(x+w-10)+'" cy="'+(y+h*0.58)+'" r="4" fill="'+Y+'" '+th(2)+'/>'; };

  Object.assign(window.GVIDEO_ART, {
    /* 先發生：時鐘＋往回的箭頭＋1 */
    dg20260929a2_first: svg(
      clock(92,78,46,-1.0,-2.3)
     +'<path d="M30 46 a70 70 0 0 1 40 -30" fill="none" stroke="'+B+'" stroke-width="6" stroke-linecap="round"/>'
     +'<path d="M24 34 l6 14 l14 -4" fill="none" stroke="'+B+'" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>'
     +'<circle cx="164" cy="38" r="20" fill="'+B+'" '+st+'/>'+txt(164,46,'1',22,'#fff')),
    /* 後發生：月曆上插一根圖釘＋2 */
    dg20260929a2_then: svg(
      cal(28,36,104,94)
     +'<circle cx="94" cy="96" r="11" fill="'+R+'" '+st+'/><path d="M94 107 L94 122" '+th(3.5)+'/>'
     +'<circle cx="164" cy="38" r="20" fill="'+G+'" '+st+'/>'+txt(164,46,'2',22,'#fff')),
    /* 夾在中間：三塊積木，中間那塊是 already */
    dg20260929a2_mid: svg(
      '<rect x="12" y="66" width="52" height="44" rx="6" fill="'+S+'" '+st+'/>'
     +'<rect x="136" y="66" width="52" height="44" rx="6" fill="'+S+'" '+st+'/>'
     +'<rect x="74" y="40" width="52" height="44" rx="6" fill="#f4a6b8" '+st+'/>'
     +'<path d="M100 92 V112 M90 102 L100 112 L110 102" fill="none" '+th(4)+'/>'
     +txt(38,94,'had',16)+txt(162,94,'-ed',16)),

    /* 情境開場：生日派對——氣球＋彩旗 */
    dg20260929a2_party: svg(
      '<path d="M6 20 Q100 52 194 20" fill="none" '+th(2.5)+'/>'
     +'<g '+th(2.5)+'><path d="M26 26 l8 18 l8 -14 Z" fill="'+R+'"/><path d="M62 36 l8 18 l8 -14 Z" fill="'+Y+'"/><path d="M100 40 l8 18 l8 -16 Z" fill="'+B+'"/><path d="M138 34 l8 18 l8 -16 Z" fill="'+G+'"/><path d="M168 24 l8 18 l8 -16 Z" fill="'+A+'"/></g>'
     +balloon(50,82,R)+balloon(84,74,Y)+balloon(150,80,B)
     +cake(98,94,48)),
    /* 情境 1：派對好玩嗎？——派對帽＋問號 */
    dg20260929a2_funQ: svg(
      '<path d="M60 128 L96 22 L132 128 Z" fill="'+B+'" '+st+'/>'
     +'<path d="M74 88 L118 88 M66 110 L126 110 M84 56 L108 56" stroke="'+Y+'" stroke-width="7"/>'
     +'<path d="M60 128 L96 22 L132 128 Z" fill="none" '+st+'/>'
     +'<circle cx="96" cy="20" r="9" fill="'+R+'" '+st+'/>'
     +'<ellipse cx="96" cy="130" rx="40" ry="7" fill="'+L+'" '+st+'/>'
     +qb(166,40)),
    /* 情境 2：很晚才到——時鐘 9:30 */
    dg20260929a2_late: svg(
      clock(90,78,52,4.97,3.14)
     +txt(166,48,'9:30',20,A)
     +'<path d="M150 104 h30 M156 116 h24 M162 128 h18" stroke="'+A+'" stroke-width="4" stroke-linecap="round"/>'),
    /* 情境 3：到派對＝基準點——門口＋腳印＋圖釘 */
    dg20260929a2_door: svg(
      '<line x1="8" y1="136" x2="192" y2="136" '+st+'/>'
     +door(110,30,58,106)
     +'<g fill="'+D+'"><ellipse cx="30" cy="128" rx="6" ry="4"/><ellipse cx="52" cy="120" rx="6" ry="4"/><ellipse cx="74" cy="128" rx="6" ry="4"/><ellipse cx="94" cy="120" rx="6" ry="4"/></g>'
     +'<circle cx="60" cy="56" r="16" fill="'+G+'" '+st+'/><path d="M60 72 L60 96" '+th(4)+'/>'),
    /* 情境 4：有吃到蛋糕嗎？——蛋糕＋問號 */
    dg20260929a2_cakeQ: svg(
      '<ellipse cx="86" cy="128" rx="62" ry="10" fill="#fff" '+st+'/>'
     +cake(42,60,88)
     +qb(168,38)),
    /* 情境 5：吃光了——空盤子＋蛋糕屑＋叉子 */
    dg20260929a2_plate: svg(
      '<ellipse cx="96" cy="92" rx="72" ry="36" fill="#fff" '+st+'/><ellipse cx="96" cy="90" rx="46" ry="21" fill="'+C+'" '+th(2.5)+'/>'
     +'<g fill="#f4a6b8" '+th(1.5)+'><circle cx="82" cy="86" r="3"/><circle cx="104" cy="94" r="2.5"/><circle cx="112" cy="84" r="3"/><circle cx="92" cy="98" r="2"/></g>'
     +'<path d="M176 30 V76 M168 30 v18 a8 8 0 0 0 16 0 v-18 M176 76 V128" fill="none" '+th(4)+'/>'),
    /* 情境 6：蛋糕先、Kai 後——1 蛋糕 → 2 門 */
    dg20260929a2_order: svg(
      '<circle cx="48" cy="72" r="34" fill="'+C+'" '+st+'/>'+cake(28,56,40)
     +'<circle cx="24" cy="34" r="13" fill="'+B+'" '+st+'/>'+txt(24,40,'1',15,'#fff')
     +'<path d="M90 72 H118 M108 62 L120 72 L108 82" fill="none" '+th(5)+'/>'
     +door(138,38,40,76)
     +'<circle cx="182" cy="34" r="13" fill="'+G+'" '+st+'/>'+txt(182,40,'2',15,'#fff')
     +'<line x1="128" y1="114" x2="192" y2="114" '+st+'/>'),
    /* 情境 7：有見到奶奶嗎？——奶奶的臉＋眼鏡＋問號 */
    dg20260929a2_grandmaQ: svg(
      '<circle cx="86" cy="38" r="16" fill="#e4e0da" '+st+'/>'
     +'<path d="M46 140 v-16 a40 34 0 0 1 80 0 v16 Z" fill="#b48ad6" '+st+'/>'
     +'<circle cx="86" cy="80" r="34" fill="'+L+'" '+st+'/>'
     +'<path d="M54 74 q32 -40 64 0" fill="#e4e0da" '+st+'/>'
     +'<circle cx="74" cy="84" r="8" fill="#fff" '+th(2.5)+'/><circle cx="98" cy="84" r="8" fill="#fff" '+th(2.5)+'/><path d="M82 84 h8" '+th(2.5)+'/>'
     +'<path d="M78 100 q8 6 16 0" fill="none" '+th(2.5)+'/>'
     +qb(162,40)),
    /* 情境 8：奶奶已經回家了——計程車開走 */
    dg20260929a2_taxi: svg(
      '<line x1="8" y1="132" x2="192" y2="132" '+st+'/>'
     +'<path d="M40 112 V92 l18 -26 H124 l20 26 h14 a8 8 0 0 1 8 8 V112 Z" fill="'+Y+'" '+st+'/>'
     +'<path d="M66 72 H96 V92 H54 Z M104 72 H120 l14 20 H104 Z" fill="'+S+'" '+th(2.5)+'/>'
     +'<rect x="86" y="54" width="24" height="12" rx="3" fill="#fff" '+th(2.5)+'/>'
     +'<circle cx="66" cy="114" r="12" fill="'+D+'"/><circle cx="66" cy="114" r="4" fill="#c9c2b8"/><circle cx="140" cy="114" r="12" fill="'+D+'"/><circle cx="140" cy="114" r="4" fill="#c9c2b8"/>'
     +'<path d="M8 84 h22 M14 100 h18" stroke="'+B+'" stroke-width="4" stroke-linecap="round"/>'),
    /* 情境 9：already 夾中間——夜裡亮燈的房子 */
    dg20260929a2_house: svg(
      '<rect x="0" y="0" width="200" height="150" fill="#33405c"/>'
     +'<path d="M150 22 a16 16 0 1 0 12 26 a12 12 0 1 1 -12 -26 Z" fill="'+Y+'" '+st+'/>'
     +'<line x1="8" y1="134" x2="192" y2="134" stroke="#fff" stroke-width="3"/>'
     +'<rect x="44" y="70" width="88" height="64" fill="'+L+'" '+st+'/><path d="M34 74 L88 30 L142 74 Z" fill="'+R+'" '+st+'/>'
     +'<rect x="78" y="98" width="22" height="36" fill="#a0673f" '+st+'/>'
     +'<rect x="54" y="82" width="18" height="18" fill="'+Y+'" '+th(2.5)+'/><rect x="106" y="82" width="18" height="18" fill="'+Y+'" '+th(2.5)+'/>'
     +'<circle cx="24" cy="30" r="2.5" fill="#fff"/><circle cx="60" cy="16" r="2" fill="#fff"/><circle cx="182" cy="80" r="2.5" fill="#fff"/>')
  });
})();

/* ============================================================
   dg20260929a2 — Which Happened First?
   Grammar in Use Unit 15（Past perfect: I had done）
   ============================================================ */
window.GVIDEO.dg20260929a2 = {
  kind: 'gram',
  date: '2026-09-29',
  title: 'Which Happened First?',
  titleCn: '哪一件先發生？had 加過去分詞',
  titleArt: ['dg20260929a2_first', 'dg20260929a2_then', 'dg20260929a2_mid'],
  scene: '生日派對 Birthday party',
  sceneArt: 'dg20260929a2_party',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Hana', voice: 'f' },
    T: { name: 'Kai', voice: 'm' }
  },
  expr: {
    early: { t: 'had + 過去分詞', cn: '兩件過去的事，先發生的那一件', ex: 'The movie had ended when Grandpa woke up.', exCn: '爺爺醒來的時候，電影已經演完了。', note: '主詞是 I、she 還是 they，都用 had' },
    later: { t: '動詞過去式', cn: '後發生的那一件，也就是你正在講的那一刻', ex: 'I reached the café at noon.', exCn: '我中午到了咖啡店。', note: '後發生的那一件不加 had' },
    mid:   { t: 'had already / never / just', cn: '小字夾在 had 和過去分詞中間', ex: 'She had just washed her hair.', exCn: '她剛洗完頭。', note: '不要放在句尾' }
  },
  chapters: [
    { cn: '開場' }, { cn: '哪一件先發生？' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  cardsKick: '兩件過去的事 Two past actions',
  cards: [
    { art: 'dg20260929a2_first', lab: '先發生', who: 'had + 過去分詞' },
    { art: 'dg20260929a2_then',  lab: '後發生', who: '過去式・正在講的那一刻' },
    { art: 'dg20260929a2_mid',   lab: '夾在中間', who: 'already・never・just' }
  ],
  flow: [
    { q: '這件事比另一件更早發生嗎？',   a: '先發生',   en: 'had + 過去分詞' },
    { q: '這是你正在講的那一刻嗎？',     a: '後發生',   en: '動詞過去式' },
    { q: '有 already、never、just 嗎？', a: '放中間',   en: 'had + already + 過去分詞' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: '兩件事都發生在過去，英文怎麼讓人一聽就知道誰先誰後？這支影片教你。', vis: { type: 'title' } },

    /* ---- 1 核心：哪一件先發生 ---- */
    { ch: 1, sp: 'N', zh: '講過去的事，有時候一次有兩件。先問自己：哪一件先發生？', vis: { type: 'cards', show: 0 } },
    { ch: 1, sp: 'N', zh: '先發生的那一件，要換個形狀，用 had 加過去分詞。',
      hi: [{ t: 'had 加過去分詞', k: 'early', c: 3 }], vis: { type: 'cards', show: 1, pop: true } },
    { ch: 1, sp: 'A', en: 'Mom had made dinner when I came home.', cn: '我回到家的時候，媽媽已經煮好晚餐了。',
      hi: [{ t: 'had made', cn: '先煮好', k: 'early', c: 3 }], vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'N', zh: '後發生的那一件，就是你正在講的那一刻，用一般的過去式就好。',
      hi: [{ t: '過去式', k: 'later', c: 4 }], vis: { type: 'cards', show: 2, pop: true } },
    { ch: 1, sp: 'T', en: 'I came home at seven.', cn: '我七點回到家。',
      hi: [{ t: 'came', cn: '後發生', k: 'later', c: 4 }], vis: { type: 'cards', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: '所以通常只有先發生的那一件加 had，後發生的那一件不用加。',
      vis: { type: 'cards', show: 2 } },
    { ch: 1, sp: 'N', zh: '還有三個小字：already、never、just，都放在 had 和過去分詞的中間。',
      hi: [{ t: 'already', k: 'mid', c: 2 }], vis: { type: 'cards', show: 3, pop: true } },
    { ch: 1, sp: 'A', en: 'He had just woken up when I called.', cn: '我打給他的時候，他才剛起床。',
      hi: [{ t: 'had just woken', cn: 'just 在中間', k: 'mid', c: 2 }], vis: { type: 'cards', show: 3, lit: 2 } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: '句型很簡單：主詞加 had，再加過去分詞。主詞是誰，都用 had。',
      hi: [{ t: 'had', k: 'early', c: 3 }],
      vis: { type: 'pattern', kick: 'Past perfect 過去完成式', rows: [
        { lab: '我',   blocks: [{ t: 'I', k: 's' }, { t: 'had finished', k: 'v' }, { t: 'my homework', k: 'n' }] },
        { lab: '他們', blocks: [{ t: 'They', k: 's' }, { t: 'had gone', k: 'v' }, { t: 'out', k: 'o' }] }
      ], note: 'had 永遠不變' } },
    { ch: 2, sp: 'N', zh: '過去分詞有的加 ed 就好，有的要背，像 write 變 written，buy 變 bought。',
      vis: { type: 'family', kick: 'Past participles 過去分詞', core: 'had + ___', coreCn: 'had 後面放這個', art: 'dg20260929a2_first', items: [
        { t: 'play → played', cn: '玩' }, { t: 'write → written', cn: '寫' }, { t: 'take → taken', cn: '拿・搭' }, { t: 'buy → bought', cn: '買' }
      ] } },
    { ch: 2, sp: 'N', zh: 'already、never、just 這三個字，都夾在 had 和過去分詞中間。',
      hi: [{ t: 'already', k: 'mid', c: 2 }],
      vis: { type: 'pattern', kick: '小字放中間 In the middle', rows: [
        { lab: '已經',     blocks: [{ t: 'She', k: 's' }, { t: 'had', k: 'v' }, { t: 'already', k: 'n', add: true }, { t: 'left', k: 'v' }] },
        { lab: '從來沒有', blocks: [{ t: 'I', k: 's' }, { t: 'had', k: 'v' }, { t: 'never', k: 'n', add: true }, { t: 'flown', k: 'v' }, { t: 'before', k: 'o' }] }
      ] } },
    { ch: 2, sp: 'N', zh: '後發生的那一件，留在過去式，不要也加 had。',
      hi: [{ t: '過去式', k: 'later', c: 4 }],
      vis: { type: 'pattern', kick: '一句只加一個 had', rows: [
        { lab: '先發生', blocks: [{ t: 'The game', k: 's' }, { t: 'had ended', k: 'v' }] },
        { lab: '後發生', blocks: [{ t: 'we', k: 's' }, { t: 'turned on', k: 'v' }, { t: 'the TV', k: 'n' }] }
      ], note: '先發生的加 had，後發生的不加' } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: 'Hana 在問 Kai 週末的生日派對。注意哪一件事先發生。', vis: { type: 'scene', art: 'dg20260929a2_party' } },
    { ch: 3, sp: 'A', en: "Did you have fun at Ruby's party?", cn: '你在 Ruby 的派對玩得開心嗎？', vis: { type: 'scene', art: 'dg20260929a2_funQ' } },
    { ch: 3, sp: 'T', en: 'Not really. I got there very late.', cn: '還好。我很晚才到。',
      hi: [{ t: 'got', cn: '後發生', k: 'later', c: 4 }], vis: { type: 'scene', art: 'dg20260929a2_late' } },
    { ch: 3, sp: 'N', zh: 'Kai 到派對，是這段故事的那一刻，用過去式 got。',
      hi: [{ t: 'got', k: 'later', c: 4 }], vis: { type: 'scene', art: 'dg20260929a2_door' } },
    { ch: 3, sp: 'A', en: 'Did you have some cake?', cn: '你有吃到蛋糕嗎？', vis: { type: 'scene', art: 'dg20260929a2_cakeQ' } },
    { ch: 3, sp: 'T', en: 'No. They had eaten it all.', cn: '沒有，他們已經吃光了。',
      hi: [{ t: 'had eaten', cn: '先吃光', k: 'early', c: 3 }], vis: { type: 'scene', art: 'dg20260929a2_plate' } },
    { ch: 3, sp: 'N', zh: '蛋糕在 Kai 到之前就吃光了，比那一刻更早，所以用 had eaten。',
      hi: [{ t: 'had eaten', k: 'early', c: 3 }], vis: { type: 'scene', art: 'dg20260929a2_order' } },
    { ch: 3, sp: 'A', en: "Did you see Ruby's grandma?", cn: '你有見到 Ruby 的奶奶嗎？', vis: { type: 'scene', art: 'dg20260929a2_grandmaQ' } },
    { ch: 3, sp: 'T', en: 'No, she had already gone home.', cn: '沒有，她已經回家了。',
      hi: [{ t: 'had already gone', cn: '先回家', k: 'mid', c: 2 }], vis: { type: 'scene', art: 'dg20260929a2_taxi' } },
    { ch: 3, sp: 'N', zh: 'already 夾在 had 和 gone 中間。奶奶先走，Kai 後到，所以沒見到她。',
      hi: [{ t: 'already', k: 'mid', c: 2 }], vis: { type: 'scene', art: 'dg20260929a2_house' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '看這兩句，只差一個 had，順序就完全不一樣。',
      vis: { type: 'vs', sm: true, kick: '只差一個 had',
        a: { w: 'When Dad got home, we had eaten dinner.', def: '爸爸到家的時候，我們已經吃完晚餐了。', cn: '先吃完，爸爸才到' },
        b: { w: 'When Dad got home, we ate dinner.', def: '爸爸到家以後，我們才吃晚餐。', cn: '爸爸先到，再一起吃' } } },
    { ch: 4, sp: 'A', en: 'When Dad got home, we had eaten dinner.', cn: '爸爸到家的時候，我們已經吃完晚餐了。',
      hi: [{ t: 'had eaten', cn: '先吃完', k: 'early', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '只差一個 had',
        a: { w: 'When Dad got home, we had eaten dinner.', def: '爸爸到家的時候，我們已經吃完晚餐了。', cn: '先吃完，爸爸才到' },
        b: { w: 'When Dad got home, we ate dinner.', def: '爸爸到家以後，我們才吃晚餐。', cn: '爸爸先到，再一起吃' } } },
    { ch: 4, sp: 'T', en: 'When Dad got home, we ate dinner.', cn: '爸爸到家以後，我們才吃晚餐。',
      hi: [{ t: 'ate', cn: '後來才吃', k: 'later', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '只差一個 had',
        a: { w: 'When Dad got home, we had eaten dinner.', def: '爸爸到家的時候，我們已經吃完晚餐了。', cn: '先吃完，爸爸才到' },
        b: { w: 'When Dad got home, we ate dinner.', def: '爸爸到家以後，我們才吃晚餐。', cn: '爸爸先到，再一起吃' } } },
    { ch: 4, sp: 'N', zh: '第一句有 had，晚餐先吃完，爸爸才到家；第二句沒有 had，是爸爸到家以後，大家才一起吃。',
      vis: { type: 'vs', sm: true, kick: '只差一個 had',
        a: { w: 'When Dad got home, we had eaten dinner.', def: '爸爸到家的時候，我們已經吃完晚餐了。', cn: '先吃完，爸爸才到' },
        b: { w: 'When Dad got home, we ate dinner.', def: '爸爸到家以後，我們才吃晚餐。', cn: '爸爸先到，再一起吃' } } },
    { ch: 4, sp: 'N', zh: '再看一組。先講結果、再補原因，要用 had；照順序一件一件講，用過去式就好。',
      vis: { type: 'vs', sm: true, kick: '倒過來講 vs 照順序講',
        a: { w: 'Ben was sad because he had lost his hat.', def: 'Ben 很難過，因為他把帽子弄丟了。', cn: '先講結果 → 原因加 had' },
        b: { w: 'Ben lost his hat and felt sad.', def: 'Ben 弄丟了帽子，覺得很難過。', cn: '照順序講 → 都用過去式' } } },
    { ch: 4, sp: 'A', en: 'Ben was sad because he had lost his hat.', cn: 'Ben 很難過，因為他把帽子弄丟了。',
      hi: [{ t: 'had lost', cn: '更早', k: 'early', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '倒過來講 vs 照順序講',
        a: { w: 'Ben was sad because he had lost his hat.', def: 'Ben 很難過，因為他把帽子弄丟了。', cn: '先講結果 → 原因加 had' },
        b: { w: 'Ben lost his hat and felt sad.', def: 'Ben 弄丟了帽子，覺得很難過。', cn: '照順序講 → 都用過去式' } } },
    { ch: 4, sp: 'T', en: 'Ben lost his hat and felt sad.', cn: 'Ben 弄丟了帽子，覺得很難過。',
      hi: [{ t: 'lost', cn: '照順序', k: 'later', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '倒過來講 vs 照順序講',
        a: { w: 'Ben was sad because he had lost his hat.', def: 'Ben 很難過，因為他把帽子弄丟了。', cn: '先講結果 → 原因加 had' },
        b: { w: 'Ben lost his hat and felt sad.', def: 'Ben 弄丟了帽子，覺得很難過。', cn: '照順序講 → 都用過去式' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '最後給你一個判斷流程，照順序問自己三個問題。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一問：這件事比另一件更早發生嗎？是的話，用 had 加過去分詞。',
      hi: [{ t: 'had 加過去分詞', k: 'early', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'A', en: 'The kids had put away their books when the bell rang.', cn: '鐘響的時候，小朋友已經把書收好了。',
      hi: [{ t: 'had put away', cn: '先收好', k: 'early', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二問：這是你正在講的那一刻嗎？是的話，用過去式就好。',
      hi: [{ t: '過去式', k: 'later', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'T', en: 'When the bell rang, everyone ran outside.', cn: '鐘一響，大家都跑出去了。',
      hi: [{ t: 'rang', cn: '那一刻', k: 'later', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '第三問：有 already、never、just 嗎？有的話，放在 had 和過去分詞中間。',
      hi: [{ t: 'already', k: 'mid', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'A', en: 'I had just turned off the light when someone knocked.', cn: '我才剛關燈，就有人敲門。',
      hi: [{ t: 'had just turned', cn: 'just 在中間', k: 'mid', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說說看。看到中文情境，先自己用英文說出來，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：你還沒到，朋友就已經買好電影票了。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '你還沒到，朋友就已經買好電影票了。' } },
    { ch: 6, sp: 'T', en: 'My friend had bought the tickets before I arrived.', cn: '我到之前，朋友已經買好票了。',
      hi: [{ t: 'had bought', cn: '先發生 → had + 過去分詞', k: 'early', c: 3 }],
      vis: { type: 'speak', n: 1, show: true, sit: '你還沒到，朋友就已經買好電影票了。', a: 'My friend had bought the tickets before I arrived.' } },
    { ch: 6, sp: 'N', zh: '情境二：你昨天第一次吃臭豆腐，在那之前從來沒吃過。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '你昨天第一次吃臭豆腐，在那之前從來沒吃過。' } },
    { ch: 6, sp: 'A', en: 'I had never eaten stinky tofu before yesterday.', cn: '昨天之前，我從來沒吃過臭豆腐。',
      hi: [{ t: 'had never eaten', cn: 'never 在中間', k: 'mid', c: 2 }],
      vis: { type: 'speak', n: 2, show: true, sit: '你昨天第一次吃臭豆腐，在那之前從來沒吃過。', a: 'I had never eaten stinky tofu before yesterday.' } },
    { ch: 6, sp: 'N', zh: '情境三：你回來的時候，小狗已經把你的鞋子咬壞了。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '你回來的時候，小狗已經把你的鞋子咬壞了。' } },
    { ch: 6, sp: 'T', en: 'My dog had already chewed my shoes when I came back.', cn: '我回來的時候，小狗已經把我的鞋子咬壞了。',
      hi: [{ t: 'had already chewed', cn: '先發生 → had + 過去分詞', k: 'early', c: 3 }],
      vis: { type: 'speak', n: 3, show: true, sit: '你回來的時候，小狗已經把你的鞋子咬壞了。', a: 'My dog had already chewed my shoes when I came back.' } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結一下：先發生的，用 had 加過去分詞；後發生的，用過去式；already、never、just 放中間。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '下次講過去的兩件事，先問一句：哪一件先發生？', vis: { type: 'end' } }
  ]
};
