/* ============================================================
   B2 Read 文法影片解說 — dg20260904a2（Unit 8，A2）
   格式與規則見 b2lab/tools/GVIDEO_SPEC.md；範本 gvideo/dg20261014b1.js
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
  var clock=function(cx,cy,r,h,m){
    var a1=(h%12+m/60)*30*Math.PI/180, a2=m*6*Math.PI/180;
    return '<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="#fff" '+th(3.5)+'/>'
      +'<g '+th(3)+'><line x1="'+cx+'" y1="'+(cy-r+4)+'" x2="'+cx+'" y2="'+(cy-r+10)+'"/><line x1="'+(cx+r-4)+'" y1="'+cy+'" x2="'+(cx+r-10)+'" y2="'+cy+'"/><line x1="'+cx+'" y1="'+(cy+r-4)+'" x2="'+cx+'" y2="'+(cy+r-10)+'"/><line x1="'+(cx-r+4)+'" y1="'+cy+'" x2="'+(cx-r+10)+'" y2="'+cy+'"/></g>'
      +'<line x1="'+cx+'" y1="'+cy+'" x2="'+(cx+Math.sin(a2)*r*0.72).toFixed(1)+'" y2="'+(cy-Math.cos(a2)*r*0.72).toFixed(1)+'" '+th(3.5)+'/>'
      +'<line x1="'+cx+'" y1="'+cy+'" x2="'+(cx+Math.sin(a1)*r*0.5).toFixed(1)+'" y2="'+(cy-Math.cos(a1)*r*0.5).toFixed(1)+'" stroke="'+A+'" stroke-width="6" stroke-linecap="round"/>'
      +'<circle cx="'+cx+'" cy="'+cy+'" r="4" fill="'+D+'"/>'; };
  /* 手機：x,y 左上角，scr 螢幕顏色 */
  var phone=function(x,y,scr){ return '<rect x="'+x+'" y="'+y+'" width="50" height="92" rx="10" fill="'+D+'" '+st+'/><rect x="'+(x+6)+'" y="'+(y+10)+'" width="38" height="68" rx="3" fill="'+(scr||S)+'"/>'; };
  /* 電池：level 0–1 */
  var battery=function(x,y,w,h,level,col){
    var g='<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" rx="8" fill="#fff" '+th(4)+'/><rect x="'+(x+w)+'" y="'+(y+h*0.3)+'" width="10" height="'+(h*0.4)+'" rx="3" fill="'+D+'"/>';
    if(level>0) g+='<rect x="'+(x+7)+'" y="'+(y+7)+'" width="'+((w-14)*level)+'" height="'+(h-14)+'" rx="4" fill="'+col+'"/>';
    return g; };

  Object.assign(window.GVIDEO_ART, {
    /* 時間線 1：說出時間點——三點的時鐘（過去式） */
    dg20260904a2_when: svg(
      clock(90,78,54,3,0)
     +'<path d="M150 22 h40 v26 h-40 Z" fill="'+Y+'" '+st+'/>'+txt(170,41,'3:00',15)),
    /* 時間線 2：結果還在——破掉的杯子（現在完成式） */
    dg20260904a2_cup: svg(
      '<line x1="10" y1="132" x2="190" y2="132" '+st+'/>'
     +'<path d="M48 64 L54 124 a6 6 0 0 0 6 6 H86 L80 96 L92 78 L84 64 Z" fill="#fff" '+st+'/>'
     +'<path d="M104 64 L114 80 L102 98 L110 130 H128 a6 6 0 0 0 6 -6 L140 64 Z" fill="#fff" '+st+'/>'
     +'<path d="M140 76 a14 14 0 0 1 0 30" fill="none" '+th(5)+'/>'
     +'<path d="M54 82 H82 M110 82 H138" stroke="'+B+'" stroke-width="6"/>'
     +'<path d="M150 124 l10 -6 l4 8 Z M30 124 l10 -8 l6 8 Z" fill="#fff" '+th(2.5)+'/>'
     +'<path d="M94 30 v14 M74 36 l6 10 M114 36 l-6 10" '+th(3.5)+'/>'),
    /* 奶奶包好水餃——一盤熱騰騰的水餃 */
    dg20260904a2_dumpling: svg(
      '<ellipse cx="100" cy="108" rx="82" ry="24" fill="#fff" '+st+'/><ellipse cx="100" cy="104" rx="62" ry="15" fill="'+S+'" '+th(2)+'/>'
     +'<g fill="'+C+'" '+st+'><path d="M40 108 q24 -56 52 0 Z"/><path d="M108 108 q24 -56 52 0 Z"/><path d="M72 102 q28 -60 56 0 Z"/></g>'
     +'<path d="M54 90 q3 -5 6 0 q3 -5 6 0 q3 -5 6 0 M122 90 q3 -5 6 0 q3 -5 6 0 q3 -5 6 0 M88 80 q3 -5 6 0 q3 -5 6 0 q3 -5 6 0 q3 -5 6 0" fill="none" '+th(2.5)+'/>'
     +'<path d="M70 46 q-6 -8 0 -16 q6 -8 0 -16 M100 38 q-6 -8 0 -16 q6 -8 0 -16 M130 46 q-6 -8 0 -16 q6 -8 0 -16" fill="none" stroke="#b9ad9f" stroke-width="4" stroke-linecap="round"/>'),

    /* 情境 1：準備出門——門口＋兩雙鞋 */
    dg20260904a2_door: svg(
      '<line x1="8" y1="134" x2="192" y2="134" '+st+'/>'
     +'<rect x="62" y="14" width="76" height="120" rx="4" fill="'+A+'" '+st+'/><rect x="74" y="28" width="52" height="38" rx="3" fill="'+L+'" '+th(2.5)+'/>'
     +'<circle cx="126" cy="84" r="5" fill="'+Y+'" '+th(2.5)+'/>'
     +'<path d="M20 134 v-12 a6 6 0 0 1 6 -6 h10 l14 10 v8 Z" fill="'+R+'" '+st+'/>'
     +'<path d="M150 134 v-12 a6 6 0 0 1 6 -6 h10 l14 10 v8 Z" fill="'+B+'" '+st+'/>'),
    /* 情境 2：該出門了——手錶 */
    dg20260904a2_watch: svg(
      '<rect x="80" y="8" width="40" height="34" rx="6" fill="'+B+'" '+st+'/><rect x="80" y="108" width="40" height="34" rx="6" fill="'+B+'" '+st+'/>'
     +clock(100,75,38,6,55)
     +'<path d="M150 50 l14 -8 M154 74 h16 M150 98 l14 8" '+th(3.5)+'/>'),
    /* 情境 3：手機不見了——沙發＋放大鏡 */
    dg20260904a2_search: svg(
      '<rect x="14" y="70" width="120" height="44" rx="10" fill="'+R+'" '+st+'/><rect x="24" y="50" width="100" height="34" rx="10" fill="'+R+'" '+st+'/>'
     +'<rect x="8" y="76" width="22" height="46" rx="8" fill="'+R+'" '+st+'/><rect x="118" y="76" width="22" height="46" rx="8" fill="'+R+'" '+st+'/>'
     +'<path d="M30 122 v10 M118 122 v10" '+th(4)+'/>'
     +'<circle cx="152" cy="54" r="24" fill="'+S+'" '+th(4)+'/><path d="M169 71 L188 92" '+th(8)+'/>'
     +txt(152,62,'?',24,D)),
    /* 情境 4：現在找不到——空空的手＋問號 */
    dg20260904a2_nophone: svg(
      '<path d="M44 132 V92 a10 10 0 0 1 20 0 V70 a9 9 0 0 1 18 0 V64 a9 9 0 0 1 18 0 V70 a9 9 0 0 1 18 0 V96 a40 40 0 0 1 -14 36 Z" fill="'+L+'" '+st+'/>'
     +'<rect x="128" y="40" width="44" height="76" rx="9" fill="#fff" '+th(3)+' stroke-dasharray="8 7"/>'
     +qb(150,78)),
    /* 情境 5：午餐時還在用——餐盤旁邊的手機 */
    dg20260904a2_lunch: svg(
      '<ellipse cx="78" cy="96" rx="58" ry="36" fill="#fff" '+st+'/><ellipse cx="78" cy="94" rx="38" ry="22" fill="'+L+'" '+th(2.5)+'/>'
     +'<path d="M58 90 q20 -16 40 0 q-20 12 -40 0 Z" fill="'+Y+'" '+th(2.5)+'/><circle cx="86" cy="100" r="7" fill="'+G+'" '+th(2.5)+'/>'
     +'<path d="M14 60 v-36 M10 24 v14 a4 4 0 0 0 8 0 v-14" fill="none" '+th(3)+'/>'
     +'<g transform="rotate(12 162 84)">'+phone(138,40,S)+'</g>'),
    /* 情境 6：說出了時間——中午十二點的時鐘 */
    dg20260904a2_noon: svg(
      clock(86,78,54,12,0)
     +'<circle cx="160" cy="40" r="20" fill="'+Y+'" '+st+'/>'
     +'<path d="M160 8 v6 M160 66 v6 M128 40 h6 M186 40 h6 M138 18 l4 4 M182 18 l-4 4" '+th(3)+'/>'),
    /* 情境 7：電池沒電了——空電池 */
    dg20260904a2_dead: svg(
      battery(36,46,116,58,0.12,R)
     +'<path d="M100 22 l-14 22 h14 l-10 22" fill="none" stroke="#b9ad9f" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>'
     +'<circle cx="94" cy="128" r="14" fill="'+R+'" '+st+'/><path d="M88 122 l12 12 M100 122 l-12 12" stroke="#fff" stroke-width="4" stroke-linecap="round"/>'),
    /* 情境 8：我的充好電了——滿格電池＋閃電 */
    dg20260904a2_full: svg(
      battery(36,46,116,58,1,G)
     +'<path d="M102 52 l-16 24 h14 l-8 22 l20 -28 h-14 Z" fill="'+Y+'" '+th(2.5)+'/>'
     +chk(164,118,16)),
    /* 情境 9：開始下雨了——窗外下雨 */
    dg20260904a2_rain: svg(
      '<rect x="30" y="16" width="140" height="118" rx="6" fill="'+L+'" '+st+'/><rect x="42" y="28" width="116" height="94" fill="'+S+'" '+th(2.5)+'/>'
     +'<path d="M54 52 a14 14 0 0 1 14 -14 a18 18 0 0 1 32 4 a12 12 0 0 1 8 22 H62 a10 10 0 0 1 -8 -12 Z" fill="#fff" '+th(2.5)+'/>'
     +'<g stroke="'+B+'" stroke-width="4" stroke-linecap="round"><line x1="66" y1="76" x2="60" y2="92"/><line x1="86" y1="76" x2="80" y2="92"/><line x1="106" y1="76" x2="100" y2="92"/><line x1="76" y1="98" x2="70" y2="114"/><line x1="96" y1="98" x2="90" y2="114"/><line x1="134" y1="60" x2="128" y2="76"/><line x1="144" y1="86" x2="138" y2="102"/></g>'
     +'<line x1="100" y1="28" x2="100" y2="122" '+th(2.5)+'/><line x1="42" y1="75" x2="158" y2="75" '+th(2.5)+'/>'),
    /* 情境 10：要帶傘——打開的雨傘 */
    dg20260904a2_umbrella: svg(
      '<path d="M24 82 a76 64 0 0 1 152 0 a19 12 0 0 0 -38 0 a19 12 0 0 0 -38 0 a19 12 0 0 0 -38 0 a19 12 0 0 0 -38 0 Z" fill="'+R+'" '+st+'/>'
     +'<path d="M100 18 C86 40 82 60 81 82 M100 18 C114 40 118 60 119 82" fill="none" '+th(2.5)+'/>'
     +'<path d="M100 18 V128 a10 10 0 0 1 -20 0" fill="none" '+th(4)+'/>'
     +'<g stroke="'+B+'" stroke-width="4" stroke-linecap="round"><line x1="30" y1="104" x2="26" y2="116"/><line x1="166" y1="104" x2="162" y2="116"/><line x1="148" y1="122" x2="144" y2="134"/></g>')
  });
})();

/* ============================================================
   dg20260904a2 — Present Perfect: A Result You Can See Now
   Grammar in Use Unit 7–8（Present perfect：結果留到現在；說出時間改用過去式）
   ============================================================ */
window.GVIDEO.dg20260904a2 = {
  kind: 'gram',
  date: '2026-09-04',
  title: 'A Result You Can See Now',
  titleCn: '現在完成式：重點是現在看得到的結果',
  titleArt: ['dg20260904a2_cup', 'dg20260904a2_when', 'dg20260904a2_dumpling'],
  scene: '準備出門 Getting ready to go',
  sceneArt: 'dg20260904a2_door',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Ivy', voice: 'f' },
    T: { name: 'Pete', voice: 'm' }
  },
  expr: {
    past: { t: 'broke / used + 時間', cn: '說出什麼時候 → 過去式', ex: 'I saw Amy at the bus stop this morning.', exCn: '我今天早上在公車站看到 Amy。', note: 'yesterday、at three、last night 這種時間，配過去式' },
    done: { t: 'have / has + 過去分詞', cn: '沒說時間，重點是現在的結果', ex: 'Someone has opened the window. It feels cold in here.', exCn: '有人把窗戶打開了，這裡好冷。', note: 'I / you / we / they 用 have；he / she / it 用 has' },
    yet:  { t: "haven't / hasn't … yet", cn: '還沒發生，現在還是原樣', ex: "The pizza hasn't come yet.", exCn: '披薩還沒送來。', note: 'yet 放在句子最後；問句說 Has it…yet?' }
  },
  chapters: [
    { cn: '開場' }, { cn: '時間，還是結果？' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  /* 「現在」放右邊：過去式停在過去那一點；完成式的結果一路帶到現在 */
  timelineNow: 86,
  timeline: [
    { x: 24, art: 'dg20260904a2_when', lab: '過去式',     who: '說出時間點' },
    { x: 56, art: 'dg20260904a2_cup',  lab: '現在完成式', who: '結果還在' }
  ],
  flow: [
    { q: '句子裡有說出明確的時間嗎？', a: '過去式',     en: '動詞過去式 + 時間' },
    { q: '沒說時間，重點是現在的結果？', a: '現在完成式', en: 'have / has + 過去分詞' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: '「杯子破了」、「鑰匙不見了」，英文常用 have 加過去分詞。這支影片告訴你，它的重點其實是現在。', vis: { type: 'title' } },

    /* ---- 1 核心：時間，還是結果？ ---- */
    { ch: 1, sp: 'N', zh: '講一件做完的事，先問自己：我想講的是「什麼時候發生」，還是「現在變成怎樣」？',
      vis: { type: 'timeline', show: 0, kick: 'When or now? 講時間，還是講現在？' } },
    { ch: 1, sp: 'N', zh: '如果你要說出時間，像昨天、三點、早上，就用過去式。',
      hi: [{ t: '過去式', k: 'past', c: 3 }], vis: { type: 'timeline', show: 1, pop: true, kick: 'When or now? 講時間，還是講現在？' } },
    { ch: 1, sp: 'A', en: 'My cat broke a cup yesterday.', cn: '我的貓昨天打破了一個杯子。',
      hi: [{ t: 'broke', cn: '昨天發生', k: 'past', c: 3 }], vis: { type: 'timeline', show: 1, lit: 0, kick: 'When or now? 講時間，還是講現在？' } },
    { ch: 1, sp: 'N', zh: '如果不講時間，只想說「現在變成這樣了」，就用 have 或 has，再加過去分詞。',
      hi: [{ t: '再加過去分詞', k: 'done', c: 4 }], vis: { type: 'timeline', show: 2, pop: true, kick: 'When or now? 講時間，還是講現在？' } },
    { ch: 1, sp: 'T', en: 'Oh no! The cat has broken my favorite cup.', cn: '糟了！貓把我最愛的杯子打破了。',
      hi: [{ t: 'has broken', cn: '現在破了', k: 'done', c: 4 }], vis: { type: 'timeline', show: 2, lit: 1, kick: 'When or now? 講時間，還是講現在？' } },
    { ch: 1, sp: 'N', zh: '杯子是剛剛破的，可是說這句話的時候，它現在還是破的。做完的結果，一直留到現在。',
      vis: { type: 'timeline', show: 2, dec: true, decText: '結果一直留到現在', kick: 'When or now? 講時間，還是講現在？' } },
    { ch: 1, sp: 'N', zh: '再聽一句。奶奶的水餃現在就擺在桌上，重點是現在可以吃了。',
      vis: { type: 'timeline', show: 2, lit: 1, kick: 'When or now? 講時間，還是講現在？' } },
    { ch: 1, sp: 'A', en: 'Grandma has made dumplings. Come and eat!', cn: '奶奶包好水餃了，快來吃！',
      hi: [{ t: 'has made', cn: '現在做好了', k: 'done', c: 4 }], vis: { type: 'timeline', show: 2, lit: 1, kick: 'When or now? 講時間，還是講現在？' } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: 'have 和 has 怎麼選？I、you、we、they 用 have；he、she、it 用 has。後面的過去分詞都一樣。',
      hi: [{ t: 'has', k: 'done', c: 4 }],
      vis: { type: 'pattern', kick: 'Present perfect 現在完成式', rows: [
        { lab: 'I · we · they', blocks: [{ t: 'We', k: 's' }, { t: 'have washed', k: 'v' }, { t: 'the dog', k: 'n' }] },
        { lab: 'he · she · it', blocks: [{ t: 'Mom', k: 's' }, { t: 'has washed', k: 'v' }, { t: 'the dog', k: 'n' }] }
      ], note: '過去分詞不跟著主詞變：都是 washed' } },
    { ch: 2, sp: 'N', zh: '有些過去分詞長得不規則，要三個一起記，例如 break、broke、broken。',
      vis: { type: 'family', kick: 'Three forms 動詞三態', core: 'Verb forms', coreCn: '原形・過去式・過去分詞', art: 'dg20260904a2_cup', items: [
        { t: 'break · broke · broken', cn: '打破' }, { t: 'lose · lost · lost', cn: '弄丟' },
        { t: 'fall · fell · fallen', cn: '掉下來' }, { t: 'forget · forgot · forgotten', cn: '忘記' }
      ] } },
    { ch: 2, sp: 'N', zh: '否定句在 have 後面加 not，常縮成 haven\'t、hasn\'t，句尾常加 yet；問句把 have、has 搬到最前面。',
      hi: [{ t: 'yet', k: 'yet', c: 1 }],
      vis: { type: 'pattern', kick: "Negative & question 否定與問句", rows: [
        { lab: '還沒', blocks: [{ t: 'The mail', k: 's' }, { t: "hasn't arrived", k: 'v' }, { t: 'yet', k: 'n', add: true }] },
        { lab: '了沒', blocks: [{ t: 'Has', k: 'v' }, { t: 'the mail', k: 's' }, { t: 'arrived', k: 'v' }, { t: 'yet?', k: 'n', add: true }] }
      ] } },
    { ch: 2, sp: 'N', zh: '要注意：句子裡一說出明確的時間，像 at ten、yesterday，就要換回過去式。',
      hi: [{ t: '過去式', k: 'past', c: 3 }],
      vis: { type: 'pattern', kick: '說出時間 Add a time', rows: [
        { lab: '沒說時間', blocks: [{ t: 'The mail', k: 's' }, { t: 'has arrived', k: 'v' }] },
        { lab: '說了時間', blocks: [{ t: 'The mail', k: 's' }, { t: 'arrived', k: 'v' }, { t: 'at ten', k: 'o', add: true }] }
      ], note: '時間一出現，has arrived 就換成 arrived' } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: 'Ivy 和弟弟 Pete 要出門看電影。注意聽，哪些句子在講現在的結果。', vis: { type: 'scene', art: 'dg20260904a2_door' } },
    { ch: 3, sp: 'A', en: 'Pete, are you ready? We need to go.', cn: 'Pete，好了嗎？我們得出門了。', vis: { type: 'scene', art: 'dg20260904a2_watch' } },
    { ch: 3, sp: 'T', en: "Wait! I've lost my phone.", cn: '等一下！我的手機不見了。',
      hi: [{ t: "I've lost", cn: '現在找不到', k: 'done', c: 4 }], vis: { type: 'scene', art: 'dg20260904a2_search' } },
    { ch: 3, sp: 'N', zh: 'Pete 不是在講什麼時候弄丟的，是說他現在找不到手機，所以用 have lost。',
      hi: [{ t: 'have lost', k: 'done', c: 4 }], vis: { type: 'scene', art: 'dg20260904a2_nophone' } },
    { ch: 3, sp: 'A', en: 'You used it at lunch. Check the kitchen.', cn: '你午餐時還在用，去廚房找找。',
      hi: [{ t: 'used', cn: '午餐那時候', k: 'past', c: 3 }], vis: { type: 'scene', art: 'dg20260904a2_lunch' } },
    { ch: 3, sp: 'N', zh: 'Ivy 說出 at lunch 這個時間，講的是過去那個時候的事，所以用過去式 used。',
      hi: [{ t: 'used', k: 'past', c: 3 }], vis: { type: 'scene', art: 'dg20260904a2_noon' } },
    { ch: 3, sp: 'T', en: 'Found it! But the battery has died.', cn: '找到了！可是電池沒電了。',
      hi: [{ t: 'has died', cn: '現在沒電', k: 'done', c: 4 }], vis: { type: 'scene', art: 'dg20260904a2_dead' } },
    { ch: 3, sp: 'A', en: "Don't worry. I've charged mine, so we can use it.", cn: '別擔心，我的充好電了，可以用我的。',
      hi: [{ t: "I've charged", cn: '現在有電', k: 'done', c: 4 }], vis: { type: 'scene', art: 'dg20260904a2_full' } },
    { ch: 3, sp: 'T', en: "Oh no, it's started to rain!", cn: '糟了，開始下雨了！',
      hi: [{ t: "it's started", cn: '現在在下', k: 'done', c: 4 }], vis: { type: 'scene', art: 'dg20260904a2_rain' } },
    { ch: 3, sp: 'N', zh: '雨是剛剛才開始下的，重點是現在外面在下雨，要帶傘。這裡的 it\'s 是 it has 的縮寫。',
      hi: [{ t: 'it has', k: 'done', c: 4 }], vis: { type: 'scene', art: 'dg20260904a2_umbrella' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '同一件事，有沒有說出時間，用的形狀就不同。',
      vis: { type: 'vs', sm: true, kick: '沒說時間 vs 說了時間',
        a: { w: 'Ken has painted the fence.', def: 'Ken 把圍籬漆好了。', cn: '重點是現在 → 現在完成式' },
        b: { w: 'Ken painted the fence on Sunday.', def: 'Ken 星期天漆了圍籬。', cn: '說出時間 → 過去式' } } },
    { ch: 4, sp: 'A', en: 'Ken has painted the fence.', cn: 'Ken 把圍籬漆好了。',
      hi: [{ t: 'has painted', cn: '現在是新的', k: 'done', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '沒說時間 vs 說了時間',
        a: { w: 'Ken has painted the fence.', def: 'Ken 把圍籬漆好了。', cn: '重點是現在 → 現在完成式' },
        b: { w: 'Ken painted the fence on Sunday.', def: 'Ken 星期天漆了圍籬。', cn: '說出時間 → 過去式' } } },
    { ch: 4, sp: 'T', en: 'Ken painted the fence on Sunday.', cn: 'Ken 星期天漆了圍籬。',
      hi: [{ t: 'painted', cn: '星期天', k: 'past', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '沒說時間 vs 說了時間',
        a: { w: 'Ken has painted the fence.', def: 'Ken 把圍籬漆好了。', cn: '重點是現在 → 現在完成式' },
        b: { w: 'Ken painted the fence on Sunday.', def: 'Ken 星期天漆了圍籬。', cn: '說出時間 → 過去式' } } },
    { ch: 4, sp: 'N', zh: '第一句的重點是，圍籬現在看起來是新的；第二句說了星期天，在講那一天發生的事。',
      vis: { type: 'vs', sm: true, kick: '沒說時間 vs 說了時間',
        a: { w: 'Ken has painted the fence.', def: 'Ken 把圍籬漆好了。', cn: '重點是現在 → 現在完成式' },
        b: { w: 'Ken painted the fence on Sunday.', def: 'Ken 星期天漆了圍籬。', cn: '說出時間 → 過去式' } } },
    { ch: 4, sp: 'N', zh: '再看一組。發生了跟還沒發生，講的都是現在的樣子。',
      vis: { type: 'vs', sm: true, kick: '已經發生 vs 還沒發生',
        a: { w: 'The ice has melted.', def: '冰塊融化了。', cn: '現在變成水了' },
        b: { w: "The ice hasn't melted yet.", def: '冰塊還沒融化。', cn: '現在還是冰塊' } } },
    { ch: 4, sp: 'A', en: 'The ice has melted.', cn: '冰塊融化了。',
      hi: [{ t: 'has melted', cn: '現在是水', k: 'done', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '已經發生 vs 還沒發生',
        a: { w: 'The ice has melted.', def: '冰塊融化了。', cn: '現在變成水了' },
        b: { w: "The ice hasn't melted yet.", def: '冰塊還沒融化。', cn: '現在還是冰塊' } } },
    { ch: 4, sp: 'T', en: "The ice hasn't melted yet.", cn: '冰塊還沒融化。',
      hi: [{ t: "hasn't melted yet", cn: '現在還是冰', k: 'yet', c: 1 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '已經發生 vs 還沒發生',
        a: { w: 'The ice has melted.', def: '冰塊融化了。', cn: '現在變成水了' },
        b: { w: "The ice hasn't melted yet.", def: '冰塊還沒融化。', cn: '現在還是冰塊' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '最後給你一個判斷流程。講做完的事，照順序問自己兩個問題。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一問：句子裡有說出明確的時間嗎？有的話，用過去式。',
      hi: [{ t: '過去式', k: 'past', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'A', en: 'Our plane landed at six this morning.', cn: '我們的飛機今天早上六點降落。',
      hi: [{ t: 'landed', cn: '說了時間', k: 'past', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二問：沒說時間，重點是現在的結果嗎？是的話，用 have 或 has 加過去分詞。',
      hi: [{ t: '加過去分詞', k: 'done', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'T', en: 'Hey! Someone has eaten my cake!', cn: '喂！有人把我的蛋糕吃掉了！',
      hi: [{ t: 'has eaten', cn: '現在沒了', k: 'done', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '他看到的是一個空盤子。誰吃的、幾點吃的都不知道，重點是蛋糕現在沒了。',
      vis: { type: 'flow', at: 2 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說說看。看到中文情境，先自己用英文說出來，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：你想告訴媽媽，你的房間打掃好了。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '你想告訴媽媽，你的房間打掃好了。' } },
    { ch: 6, sp: 'A', en: "I've cleaned my room.", cn: '我把房間打掃好了。',
      hi: [{ t: "I've cleaned", cn: '現在很乾淨 → 現在完成式', k: 'done', c: 4 }],
      vis: { type: 'speak', n: 1, show: true, sit: '你想告訴媽媽，你的房間打掃好了。', a: "I've cleaned my room." } },
    { ch: 6, sp: 'N', zh: '情境二：你想說，你昨天晚上弄丟了錢包。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '你想說，你昨天晚上弄丟了錢包。' } },
    { ch: 6, sp: 'T', en: 'I lost my wallet last night.', cn: '我昨天晚上把錢包弄丟了。',
      hi: [{ t: 'lost', cn: '說了時間 → 過去式', k: 'past', c: 3 }],
      vis: { type: 'speak', n: 2, show: true, sit: '你想說，你昨天晚上弄丟了錢包。', a: 'I lost my wallet last night.' } },
    { ch: 6, sp: 'N', zh: '情境三：好朋友頂著新髮型出現，你發現她剪頭髮了。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '好朋友頂著新髮型出現，你發現她剪頭髮了。' } },
    { ch: 6, sp: 'A', en: "You've cut your hair!", cn: '你剪頭髮了！',
      hi: [{ t: "You've cut", cn: '眼前看得到 → 現在完成式', k: 'done', c: 4 }],
      vis: { type: 'speak', n: 3, show: true, sit: '好朋友頂著新髮型出現，你發現她剪頭髮了。', a: "You've cut your hair!" } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結一下：說出時間，用過去式；沒說時間、重點是現在的結果，用 have 或 has 加過去分詞。',
      vis: { type: 'flow', at: 2, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '下次說「了」之前，先問一句：我要講時間，還是講現在？', vis: { type: 'end' } }
  ]
};
