/* ============================================================
   B2 Read 文法影片解說 — dg20260813
   Grammar in Use Unit 9（Present perfect continuous）B1+
   格式與規則見 b2lab/tools/GVIDEO_SPEC.md
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
  /* 木吉他（以 (0,0) 為琴頭頂端，總高約 126） */
  var guitar='<rect x="-5" y="8" width="10" height="64" fill="#a0714f" '+th(2.5)+'/>'
    +'<rect x="-8" y="0" width="16" height="14" rx="3" fill="#7a5238" '+th(2.5)+'/>'
    +'<circle cx="0" cy="102" r="24" fill="'+A+'" '+st+'/><circle cx="0" cy="76" r="17" fill="'+A+'" '+st+'/>'
    +'<ellipse cx="0" cy="90" rx="15" ry="9" fill="'+A+'"/>'
    +'<circle cx="0" cy="92" r="7" fill="'+D+'"/><rect x="-10" y="110" width="20" height="5" rx="2" fill="'+D+'"/>'
    +'<line x1="-2" y1="10" x2="-2" y2="112" stroke="#fff" stroke-width="1"/><line x1="2" y1="10" x2="2" y2="112" stroke="#fff" stroke-width="1"/>';
  var note=function(x,y,s){ return '<g transform="translate('+x+' '+y+') scale('+(s||1)+')"><path d="M0 0 V-22 L14 -26 V-4" fill="none" '+th(3)+'/><ellipse cx="-4" cy="0" rx="6" ry="4.5" fill="'+D+'"/><ellipse cx="10" cy="-4" rx="6" ry="4.5" fill="'+D+'"/></g>'; };

  Object.assign(window.GVIDEO_ART, {
    /* 還在做：沙漏＋一路往右延伸的箭頭 */
    dg20260813_hourglass: svg(
      '<circle cx="18" cy="75" r="7" fill="'+B+'" '+st+'/>'
     +'<line x1="26" y1="75" x2="50" y2="75" stroke="'+B+'" stroke-width="5" stroke-linecap="round"/>'
     +'<path d="M54 30 H106 M54 120 H106" '+th(5)+'/>'
     +'<path d="M60 32 C60 62 75 66 75 75 C75 84 60 88 60 118 H100 C100 88 85 84 85 75 C85 66 100 62 100 32 Z" fill="'+S+'" '+st+'/>'
     +'<path d="M66 50 H94 C92 61 84 65 80 71 C76 65 68 61 66 50 Z" fill="'+Y+'"/>'
     +'<path d="M64 116 C68 104 74 100 80 100 C86 100 92 104 96 116 Z" fill="'+Y+'"/>'
     +'<line x1="80" y1="76" x2="80" y2="98" stroke="'+Y+'" stroke-width="2.5"/>'
     +'<line x1="112" y1="75" x2="176" y2="75" stroke="'+B+'" stroke-width="5" stroke-linecap="round" stroke-dasharray="10 8"/>'
     +'<path d="M174 62 L190 75 L174 88" fill="none" '+th(4)+'/>'),
    /* 剛剛才停：滿頭大汗、喘氣的臉 */
    dg20260813_sweat: svg(
      '<circle cx="92" cy="80" r="46" fill="'+Y+'" '+st+'/>'
     +'<path d="M70 72 q7 -7 14 0 M100 72 q7 -7 14 0" fill="none" '+th(3.5)+'/>'
     +'<ellipse cx="92" cy="100" rx="10" ry="8" fill="'+D+'"/>'
     +'<circle cx="64" cy="90" r="6" fill="'+R+'" opacity=".45"/><circle cx="120" cy="90" r="6" fill="'+R+'" opacity=".45"/>'
     +'<path d="M128 30 q9 13 0 20 q-9 -7 0 -20 Z" fill="'+S+'" '+th(2.5)+'/>'
     +'<path d="M152 50 q7 10 0 15 q-7 -5 0 -15 Z" fill="'+S+'" '+th(2.5)+'/>'
     +'<path d="M48 40 q7 10 0 15 q-7 -5 0 -15 Z" fill="'+S+'" '+th(2.5)+'/>'
     +'<path d="M150 100 h18 M154 112 h14" '+th(3)+'/>'),
    /* 一直反覆：一直傳出去的訊息＋驚嘆號 */
    dg20260813_repeat: svg(
      '<rect x="62" y="14" width="76" height="124" rx="12" fill="'+D+'" '+st+'/><rect x="69" y="26" width="62" height="98" rx="4" fill="#fff"/>'
     +'<rect x="88" y="34" width="38" height="16" rx="7" fill="'+S+'" '+th(2.5)+'/>'
     +'<rect x="88" y="56" width="38" height="16" rx="7" fill="'+S+'" '+th(2.5)+'/>'
     +'<rect x="88" y="78" width="38" height="16" rx="7" fill="'+S+'" '+th(2.5)+'/>'
     +'<rect x="88" y="100" width="38" height="16" rx="7" fill="'+S+'" '+th(2.5)+'/>'
     +'<circle cx="162" cy="36" r="16" fill="'+R+'" '+st+'/>'+txt(162,43,'!',20,'#fff')
     +'<path d="M24 66 A16 16 0 1 1 30 90" fill="none" '+th(3.5)+'/><path d="M22 84 L30 92 L38 84" fill="none" '+th(3.5)+'/>'),

    /* 情境 1：練團室——音箱、吉他、麥克風 */
    dg20260813_studio: svg(
      '<line x1="8" y1="134" x2="192" y2="134" '+st+'/>'
     +'<rect x="16" y="72" width="62" height="62" rx="6" fill="'+D+'" '+st+'/><rect x="24" y="84" width="46" height="42" rx="4" fill="#5a4a3a" '+th(2.5)+'/>'
     +'<circle cx="47" cy="105" r="14" fill="#3a2e24" '+th(2.5)+'/><g fill="'+Y+'"><circle cx="28" cy="78" r="2.5"/><circle cx="38" cy="78" r="2.5"/><circle cx="48" cy="78" r="2.5"/></g>'
     +'<g transform="translate(110 8)">'+guitar+'</g>'
     +'<line x1="164" y1="58" x2="164" y2="134" '+th(4)+'/><path d="M150 134 L164 122 L178 134" fill="none" '+th(4)+'/>'
     +'<rect x="156" y="28" width="16" height="30" rx="8" fill="#c9c2b8" '+st+'/>'
     +note(30,50,0.9)),
    /* 情境 2：一整個下午打了五通——手機未接來電 5 */
    dg20260813_missed: svg(
      '<rect x="66" y="16" width="68" height="122" rx="12" fill="'+D+'" '+st+'/><rect x="73" y="28" width="54" height="96" rx="4" fill="#fff"/>'
     +'<path d="M86 50 c0 22 14 38 30 40 l6 -9 l-10 -8 l-5 5 c-7 -3 -11 -9 -13 -15 l5 -5 l-8 -11 Z" fill="'+G+'" '+th(2.5)+'/>'
     +'<g stroke="#c9c2b8" stroke-width="5" stroke-linecap="round"><line x1="82" y1="104" x2="118" y2="104"/><line x1="82" y1="114" x2="108" y2="114"/></g>'
     +'<circle cx="134" cy="22" r="15" fill="'+R+'" '+st+'/>'+txt(134,29,'5',18,'#fff')
     +'<path d="M52 56 q-7 12 0 24 M40 48 q-10 20 0 40 M148 64 q7 12 0 24 M160 56 q10 20 0 40" fill="none" '+th(3)+'/>'),
    /* 情境 3：手機在包包裡——背包前袋露出手機 */
    dg20260813_bag: svg(
      '<path d="M84 36 a16 16 0 0 1 32 0" fill="none" '+th(4)+'/>'
     +'<rect x="56" y="32" width="88" height="104" rx="22" fill="'+B+'" '+st+'/>'
     +'<rect x="104" y="64" width="20" height="34" rx="4" fill="'+D+'" '+st+'/><rect x="108" y="70" width="12" height="18" fill="'+S+'"/>'
     +'<rect x="70" y="84" width="60" height="42" rx="10" fill="#2f6aa3" '+st+'/>'
     +'<line x1="76" y1="94" x2="124" y2="94" stroke="'+Y+'" stroke-width="3" stroke-linecap="round"/>'
     +'<path d="M132 60 l8 -5 M134 72 h10 M132 84 l8 5" '+th(3)+'/>'),
    /* 情境 4：從兩點練到現在——鼓組＋兩點的時鐘 */
    dg20260813_drums: svg(
      '<line x1="8" y1="134" x2="192" y2="134" '+st+'/>'
     +'<path d="M58 60 V72 a22 8 0 0 0 44 0 V60" fill="'+R+'" '+st+'/><ellipse cx="80" cy="60" rx="22" ry="8" fill="#fff" '+st+'/>'
     +'<circle cx="80" cy="102" r="30" fill="'+R+'" '+st+'/><circle cx="80" cy="102" r="20" fill="#fff" '+th(2.5)+'/>'
     +'<line x1="140" y1="52" x2="140" y2="134" '+th(4)+'/><ellipse cx="140" cy="50" rx="26" ry="6" fill="'+Y+'" '+st+'/>'
     +'<circle cx="32" cy="32" r="20" fill="#fff" '+st+'/><path d="M32 32 L40.7 27 M32 32 V18" fill="none" '+th(3)+'/>'
     +'<path d="M162 104 L192 128 M162 128 L192 104" stroke="#a0714f" stroke-width="5" stroke-linecap="round"/>'),
    /* 情境 5：手指紅紅的——指尖發紅的手＋問號 */
    dg20260813_fingers: svg(
      '<g fill="#f6c9a0" '+st+'><rect x="64" y="34" width="16" height="56" rx="8"/><rect x="82" y="26" width="16" height="64" rx="8"/><rect x="100" y="28" width="16" height="62" rx="8"/><rect x="118" y="38" width="16" height="52" rx="8"/></g>'
     +'<g fill="'+R+'" opacity=".55"><rect x="65.5" y="35.5" width="13" height="12" rx="6"/><rect x="83.5" y="27.5" width="13" height="12" rx="6"/><rect x="101.5" y="29.5" width="13" height="12" rx="6"/><rect x="119.5" y="39.5" width="13" height="12" rx="6"/></g>'
     +'<path d="M66 96 L42 80 a8 8 0 0 0 -9 13 L62 122" fill="#f6c9a0" '+st+'/>'
     +'<rect x="60" y="74" width="78" height="62" rx="18" fill="#f6c9a0" '+st+'/>'
     +qb(168,34)),
    /* 情境 6：獨奏很難——密密麻麻的樂譜 */
    dg20260813_solo: svg(
      '<rect x="22" y="28" width="132" height="100" rx="6" fill="#fff" '+st+'/>'
     +'<g stroke="#c9c2b8" stroke-width="2"><line x1="32" y1="56" x2="144" y2="56"/><line x1="32" y1="64" x2="144" y2="64"/><line x1="32" y1="72" x2="144" y2="72"/><line x1="32" y1="80" x2="144" y2="80"/><line x1="32" y1="88" x2="144" y2="88"/></g>'
     +'<g fill="'+D+'"><ellipse cx="44" cy="84" rx="5" ry="4"/><ellipse cx="58" cy="76" rx="5" ry="4"/><ellipse cx="72" cy="68" rx="5" ry="4"/><ellipse cx="86" cy="80" rx="5" ry="4"/><ellipse cx="100" cy="60" rx="5" ry="4"/><ellipse cx="114" cy="72" rx="5" ry="4"/><ellipse cx="128" cy="64" rx="5" ry="4"/></g>'
     +'<g '+th(2.5)+'><line x1="49" y1="84" x2="49" y2="60"/><line x1="63" y1="76" x2="63" y2="52"/><line x1="77" y1="68" x2="77" y2="44"/><line x1="91" y1="80" x2="91" y2="56"/><line x1="105" y1="60" x2="105" y2="40"/><line x1="119" y1="72" x2="119" y2="48"/><line x1="133" y1="64" x2="133" y2="42"/></g>'
     +'<path d="M49 60 L63 52 M77 44 L91 56 M105 40 L119 48" '+th(4)+'/>'
     +'<g stroke="#c9c2b8" stroke-width="5" stroke-linecap="round"><line x1="34" y1="106" x2="140" y2="106"/><line x1="34" y1="116" x2="110" y2="116"/></g>'
     +'<circle cx="172" cy="44" r="18" fill="'+R+'" '+st+'/>'+txt(172,52,'!!',20,'#fff')),
    /* 情境 7：彈到手指痛——吉他撥片＋OK 繃 */
    dg20260813_pick: svg(
      '<path d="M76 126 C56 104 38 74 42 52 C46 34 106 34 110 52 C114 74 96 104 76 126 Z" fill="'+A+'" '+st+'/>'
     +'<path d="M58 54 C62 46 90 46 94 54" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" opacity=".7"/>'
     +'<g transform="rotate(-25 148 96)"><rect x="112" y="84" width="72" height="24" rx="12" fill="#f2d2a9" '+st+'/><rect x="136" y="86" width="24" height="20" fill="#e8b98a"/>'
     +'<g fill="'+D+'"><circle cx="143" cy="92" r="1.6"/><circle cx="153" cy="92" r="1.6"/><circle cx="143" cy="100" r="1.6"/><circle cx="153" cy="100" r="1.6"/></g></g>'),
    /* 情境 8：學吉他多久了？——斜放的吉他＋問號 */
    dg20260813_qguitar: svg(
      '<g transform="translate(96 14) rotate(30 0 63)">'+guitar+'</g>'
     +qb(162,36)
     +note(40,60,0.9)),
    /* 情境 9：每個星期六上課——月曆的星期六整排打勾 */
    dg20260813_saturday: svg(
      cal(28,30,124,104)
     +txt(128,48,'SAT',11,'#fff')
     +chk(127,68,8)+chk(127,90,8)+chk(127,112,8)
     +note(172,96,0.9)),
    /* 情境 10：從高中到現在——學校 → 虛線箭頭 → 吉他 */
    dg20260813_path: svg(
      '<line x1="8" y1="134" x2="192" y2="134" '+st+'/>'
     +'<rect x="14" y="72" width="62" height="62" fill="'+L+'" '+st+'/><path d="M8 74 L45 46 L82 74 Z" fill="'+R+'" '+st+'/>'
     +'<rect x="37" y="104" width="16" height="30" fill="'+B+'" '+th(2.5)+'/>'
     +'<rect x="22" y="82" width="12" height="12" fill="'+S+'" '+th(2.5)+'/><rect x="56" y="82" width="12" height="12" fill="'+S+'" '+th(2.5)+'/>'
     +'<line x1="45" y1="46" x2="45" y2="24" '+th(3)+'/><path d="M45 24 H62 L57 30 L62 36 H45 Z" fill="'+Y+'" '+th(2.5)+'/>'
     +'<line x1="88" y1="104" x2="132" y2="104" stroke="'+D+'" stroke-width="4" stroke-linecap="round" stroke-dasharray="8 7"/>'
     +'<path d="M130 94 L142 104 L130 114" fill="none" '+th(4)+'/>'
     +'<g transform="translate(166 30) scale(0.8)">'+guitar+'</g>')
  });
})();

/* ============================================================
   dg20260813 — How Long, Just Stopped, or Again and Again?
   Grammar in Use Unit 9（Present perfect continuous: I have been doing）
   ============================================================ */
window.GVIDEO.dg20260813 = {
  kind: 'gram',
  date: '2026-08-13',
  title: 'I Have Been Doing',
  titleCn: '現在完成進行式：做了多久、剛剛才停、一直反覆',
  titleArt: ['dg20260813_hourglass', 'dg20260813_sweat', 'dg20260813_repeat'],
  scene: '練團室 Band practice',
  sceneArt: 'dg20260813_studio',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Chloe', voice: 'f' },
    T: { name: 'Ryan', voice: 'm' }
  },
  expr: {
    hl:   { t: 'have / has been + V-ing（還在做）', cn: '從以前做到現在，還在做', ex: 'Kevin has been driving for a delivery company since March.', exCn: 'Kevin 從三月開始就在一家物流公司開車。', note: 'for＋一段時間、since＋起點；問句用 How long' },
    just: { t: 'have / has been + V-ing（剛剛才停）', cn: '動作剛停，結果還看得見', ex: 'Your shoes are muddy. Have you been walking in the rain?', exCn: '你的鞋子都是泥巴，你剛剛是不是在雨裡走路？', note: '很累、很髒、全身濕的時候，用它解釋是怎麼來的' },
    rep:  { t: 'have / has been + V-ing（一直反覆）', cn: '一直重複做，帶著情緒', ex: 'The printer has been jamming all morning.', exCn: '印表機一整個早上一直卡紙。', note: '常配 all day、all week、for hours' }
  },
  chapters: [
    { cn: '開場' }, { cn: '三種用法' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  cardsKick: 'have been + V-ing 三種用法',
  cards: [
    { art: 'dg20260813_hourglass', lab: '還在做', who: '做了多久' },
    { art: 'dg20260813_sweat',     lab: '剛剛才停', who: '結果還看得見' },
    { art: 'dg20260813_repeat',    lab: '一直反覆', who: '帶著情緒' }
  ],
  flow: [
    { q: '從以前做到現在，還在做？',   a: '還在做',   en: 'have / has been + V-ing + for / since' },
    { q: '剛剛才停，結果還看得見？',   a: '剛剛才停', en: 'have / has been + V-ing' },
    { q: '一直重複做，帶著情緒？',     a: '一直反覆', en: 'have / has been + V-ing + all day' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: '現在完成進行式，問的不是做完了沒，而是做了多久。這支影片帶你看它的三種用法。', vis: { type: 'title' } },

    /* ---- 1 核心：三種用法 ---- */
    { ch: 1, sp: 'N', zh: '它的形狀是 have been 加動詞 ing，最常出現在這三種情況。', vis: { type: 'cards', show: 0 } },
    { ch: 1, sp: 'N', zh: '第一種：從以前開始，一直做到現在，而且還在做。',
      hi: [{ t: '還在做', k: 'hl', c: 3 }], vis: { type: 'cards', show: 1, pop: true } },
    { ch: 1, sp: 'A', en: 'My cousin has been learning the violin for six years.', cn: '我表妹學小提琴學了六年，現在還在學。',
      hi: [{ t: 'has been learning', cn: '到現在還在學', k: 'hl', c: 3 }], vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'N', zh: '第二種：動作剛剛才停，可是結果還看得見，像是很累、很髒、全身濕。',
      hi: [{ t: '剛剛才停', k: 'just', c: 4 }], vis: { type: 'cards', show: 2, pop: true } },
    { ch: 1, sp: 'T', en: "My shirt is soaking wet. I've been washing the dog.", cn: '我的衣服濕透了，我剛剛在幫狗洗澡。',
      hi: [{ t: "I've been washing", cn: '剛洗完', k: 'just', c: 4 }], vis: { type: 'cards', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: '這時候重點不是洗完了沒，而是解釋眼前的樣子是怎麼來的。', vis: { type: 'cards', show: 2 } },
    { ch: 1, sp: 'N', zh: '第三種：一直反覆做同一件事，常帶著不耐煩、抱歉或驕傲的語氣。',
      hi: [{ t: '一直反覆', k: 'rep', c: 2 }], vis: { type: 'cards', show: 3, pop: true } },
    { ch: 1, sp: 'A', en: "I've been sending you messages since lunch!", cn: '我從中午就一直傳訊息給你！',
      hi: [{ t: "I've been sending", cn: '一直傳', k: 'rep', c: 2 }], vis: { type: 'cards', show: 3, lit: 2 } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: '句型：主詞加 have 或 has，加 been，再加動詞 ing。he、she、it 用 has。',
      vis: { type: 'pattern', kick: 'have / has + been + V-ing', rows: [
        { lab: 'I / we / they', blocks: [{ t: 'We', k: 's' }, { t: 'have been rehearsing', k: 'v' }, { t: 'all evening', k: 'o' }] },
        { lab: 'he / she / it', blocks: [{ t: 'She', k: 's' }, { t: 'has been jogging', k: 'v' }, { t: 'since six', k: 'o' }] }
      ], note: "I've = I have，she's = she has" } },
    { ch: 2, sp: 'N', zh: '問多久用 How long，have 搬到主詞前面；否定在 have 後面加 not。',
      hi: [{ t: 'How long', k: 'hl', c: 3 }],
      vis: { type: 'pattern', kick: 'Questions & negatives 問句與否定', rows: [
        { lab: '問句', blocks: [{ t: 'How long', k: 'n' }, { t: 'have', k: 'v' }, { t: 'you', k: 's' }, { t: 'been playing', k: 'v' }, { t: 'the drums?', k: 'o' }] },
        { lab: '否定', blocks: [{ t: 'I', k: 's' }, { t: "haven't been sleeping", k: 'v' }, { t: 'well', k: 'o' }] }
      ] } },
    { ch: 2, sp: 'N', zh: '時間怎麼說：for 加一段時間，since 加起點，也可以說 all day、all morning。',
      vis: { type: 'family', kick: 'Time words 時間說法', core: 'How long?', coreCn: '做了多久', art: 'dg20260813_hourglass', items: [
        { t: 'for two hours', cn: 'for＋一段時間' }, { t: 'since Monday', cn: 'since＋起點' }, { t: 'all morning', cn: '整個早上' }, { t: 'How long …?', cn: '問做了多久' }
      ] } },
    { ch: 2, sp: 'N', zh: 'know、own 這種狀態動詞不用進行式，要說 have known；live、work 兩種都可以。',
      vis: { type: 'pattern', kick: 'State verbs 狀態動詞', rows: [
        { lab: 'know → have known', blocks: [{ t: 'We', k: 's' }, { t: 'have known', k: 'v' }, { t: 'each other', k: 'o' }, { t: 'for ten years', k: 'n' }] },
        { lab: 'live 兩種都行', blocks: [{ t: 'They', k: 's' }, { t: 'have lived · have been living', k: 'v' }, { t: 'by the sea', k: 'o' }] }
      ], note: 'know、own、believe、understand 只用 have done' } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: '來聽 Chloe 到練團室找 Ryan，注意 have been 加動詞 ing 怎麼用。', vis: { type: 'scene', art: 'dg20260813_studio' } },
    { ch: 3, sp: 'A', en: "Ryan! I've been calling you all afternoon. Where's your phone?", cn: 'Ryan！我打了你一整個下午。你的手機呢？',
      hi: [{ t: "I've been calling", cn: '一直打', k: 'rep', c: 2 }], vis: { type: 'scene', art: 'dg20260813_missed' } },
    { ch: 3, sp: 'T', en: "Sorry, it's in my bag. We've been rehearsing since two.", cn: '抱歉，在我包包裡。我們從兩點練到現在。',
      hi: [{ t: "We've been rehearsing", cn: '練到現在', k: 'hl', c: 3 }], vis: { type: 'scene', art: 'dg20260813_bag' } },
    { ch: 3, sp: 'N', zh: 'Chloe 打了好幾通，語氣有點急；Ryan 從兩點練到現在還沒停。',
      hi: [{ t: '還沒停', k: 'hl', c: 3 }], vis: { type: 'scene', art: 'dg20260813_drums' } },
    { ch: 3, sp: 'A', en: 'Your fingers look red. Have you been playing that new song?', cn: '你的手指紅紅的。你是不是一直在彈那首新歌？',
      hi: [{ t: 'Have you been playing', cn: '剛剛在彈？', k: 'just', c: 4 }], vis: { type: 'scene', art: 'dg20260813_fingers' } },
    { ch: 3, sp: 'T', en: 'Yeah, for about three hours. The solo is really hard.', cn: '對啊，彈了大概三個小時。那段獨奏真的很難。', vis: { type: 'scene', art: 'dg20260813_solo' } },
    { ch: 3, sp: 'N', zh: '手指紅紅的，是剛剛彈吉他留下的結果，所以 Chloe 這樣問。',
      hi: [{ t: '剛剛彈吉他', k: 'just', c: 4 }], vis: { type: 'scene', art: 'dg20260813_pick' } },
    { ch: 3, sp: 'A', en: 'How long have you been learning the guitar, anyway?', cn: '話說，你學吉他學多久了？',
      hi: [{ t: 'How long have you been learning', cn: '問多久', k: 'hl', c: 3 }], vis: { type: 'scene', art: 'dg20260813_qguitar' } },
    { ch: 3, sp: 'T', en: "Since high school. I've been taking lessons every Saturday.", cn: '從高中開始。我每個星期六都去上課。',
      hi: [{ t: "I've been taking", cn: '一直持續', k: 'hl', c: 3 }], vis: { type: 'scene', art: 'dg20260813_saturday' } },
    { ch: 3, sp: 'N', zh: '問多久用 How long，回答用 since 加起點，或 for 加一段時間。',
      hi: [{ t: 'How long', k: 'hl', c: 3 }], vis: { type: 'scene', art: 'dg20260813_path' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '跟現在完成式比一比：一個看過程，一個看結果。',
      vis: { type: 'vs', sm: true, kick: '過程 vs 結果',
        a: { w: "I've been writing song lyrics.", def: '我最近一直在寫歌詞。', cn: '過程：寫了一段時間，不知道寫完沒' },
        b: { w: "I've written three songs.", def: '我已經寫好三首歌。', cn: '結果：完成了幾首' } } },
    { ch: 4, sp: 'A', en: "I've been writing song lyrics.", cn: '我最近一直在寫歌詞。',
      hi: [{ t: "I've been writing", cn: '過程', k: 'hl', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '過程 vs 結果',
        a: { w: "I've been writing song lyrics.", def: '我最近一直在寫歌詞。', cn: '過程：寫了一段時間，不知道寫完沒' },
        b: { w: "I've written three songs.", def: '我已經寫好三首歌。', cn: '結果：完成了幾首' } } },
    { ch: 4, sp: 'T', en: "I've written three songs.", cn: '我已經寫好三首歌。',
      vis: { type: 'vs', sm: true, on: 'b', kick: '過程 vs 結果',
        a: { w: "I've been writing song lyrics.", def: '我最近一直在寫歌詞。', cn: '過程：寫了一段時間，不知道寫完沒' },
        b: { w: "I've written three songs.", def: '我已經寫好三首歌。', cn: '結果：完成了幾首' } } },
    { ch: 4, sp: 'N', zh: '講做了多久，用 have been 加 ing；講完成了幾個，就用 have 加過去分詞。',
      vis: { type: 'vs', sm: true, kick: '過程 vs 結果',
        a: { w: "I've been writing song lyrics.", def: '我最近一直在寫歌詞。', cn: '過程：寫了一段時間，不知道寫完沒' },
        b: { w: "I've written three songs.", def: '我已經寫好三首歌。', cn: '結果：完成了幾首' } } },
    { ch: 4, sp: 'N', zh: '再跟現在進行式比：一個只說現在正在做，一個說從什麼時候做到現在。',
      vis: { type: 'vs', sm: true, kick: '正在做 vs 做多久了',
        a: { w: 'The neighbors are practicing the trumpet.', def: '鄰居正在練小號。', cn: '只說現在正在做' },
        b: { w: 'The neighbors have been practicing the trumpet since dinner.', def: '鄰居從晚餐後就一直在練小號。', cn: '從晚餐做到現在' } } },
    { ch: 4, sp: 'A', en: 'The neighbors are practicing the trumpet.', cn: '鄰居正在練小號。',
      vis: { type: 'vs', sm: true, on: 'a', kick: '正在做 vs 做多久了',
        a: { w: 'The neighbors are practicing the trumpet.', def: '鄰居正在練小號。', cn: '只說現在正在做' },
        b: { w: 'The neighbors have been practicing the trumpet since dinner.', def: '鄰居從晚餐後就一直在練小號。', cn: '從晚餐做到現在' } } },
    { ch: 4, sp: 'T', en: 'The neighbors have been practicing the trumpet since dinner.', cn: '鄰居從晚餐後就一直在練小號。',
      hi: [{ t: 'have been practicing', cn: '做到現在', k: 'hl', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '正在做 vs 做多久了',
        a: { w: 'The neighbors are practicing the trumpet.', def: '鄰居正在練小號。', cn: '只說現在正在做' },
        b: { w: 'The neighbors have been practicing the trumpet since dinner.', def: '鄰居從晚餐後就一直在練小號。', cn: '從晚餐做到現在' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '最後是判斷流程。遇到這些情況，問自己三個問題。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一問：從以前做到現在，還在做嗎？配 for 或 since。',
      hi: [{ t: '還在做', k: 'hl', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'A', en: 'Our drummer has been playing in bands since he was fifteen.', cn: '我們的鼓手從十五歲就開始在樂團打鼓。',
      hi: [{ t: 'has been playing', cn: '到現在還在', k: 'hl', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二問：剛剛才停，結果還看得見嗎？也用 have been 加 ing。',
      hi: [{ t: '剛剛才停', k: 'just', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'T', en: "My voice is almost gone. I've been singing all evening.", cn: '我的聲音快沒了，我唱了一整個晚上。',
      hi: [{ t: "I've been singing", cn: '結果還在', k: 'just', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '第三問：一直重複做，帶著情緒嗎？一樣用它，常配 all week、all day。',
      hi: [{ t: '一直重複做', k: 'rep', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'A', en: 'My little brother has been borrowing my headphones all week!', cn: '我弟弟這整個禮拜一直借我的耳機！',
      hi: [{ t: 'has been borrowing', cn: '一直借', k: 'rep', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說說看。先自己用英文說出來，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：你從去年九月開始學鋼琴，到現在還在學。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '你從去年九月開始學鋼琴，到現在還在學。' } },
    { ch: 6, sp: 'T', en: "I've been learning the piano since last September.", cn: '我從去年九月就開始學鋼琴。',
      hi: [{ t: "I've been learning", cn: '還在做 → since 起點', k: 'hl', c: 3 }],
      vis: { type: 'speak', n: 1, show: true, sit: '你從去年九月開始學鋼琴，到現在還在學。', a: "I've been learning the piano since last September." } },
    { ch: 6, sp: 'N', zh: '情境二：朋友看你滿頭大汗，你說你剛剛在打籃球。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '朋友看你滿頭大汗，你說你剛剛在打籃球。' } },
    { ch: 6, sp: 'A', en: "I've been playing basketball.", cn: '我剛剛在打籃球。',
      hi: [{ t: "I've been playing", cn: '剛停，結果還在', k: 'just', c: 4 }],
      vis: { type: 'speak', n: 2, show: true, sit: '朋友看你滿頭大汗，你說你剛剛在打籃球。', a: "I've been playing basketball." } },
    { ch: 6, sp: 'N', zh: '情境三：你想抱怨，你的筆電這個禮拜一直當機。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '你想抱怨，你的筆電這個禮拜一直當機。' } },
    { ch: 6, sp: 'T', en: 'My laptop has been crashing all week!', cn: '我的筆電整個禮拜一直當機！',
      hi: [{ t: 'has been crashing', cn: '一直反覆 → 帶情緒', k: 'rep', c: 2 }],
      vis: { type: 'speak', n: 3, show: true, sit: '你想抱怨，你的筆電這個禮拜一直當機。', a: 'My laptop has been crashing all week!' } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結：還在做、剛剛才停、一直反覆，三種都用 have been 加動詞 ing。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '下次開口前先問一句：我要講的是做了多久，還是做完了沒？', vis: { type: 'end' } }
  ]
};
