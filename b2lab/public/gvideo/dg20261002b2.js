/* ============================================================
   B2 Read 文法影片解說 — dg20261002b2（Grammar in Use Unit 17，B2）
   格式與規則見 b2lab/tools/GVIDEO_SPEC.md；範本 gvideo/dg20261014b1.js。
   不是時態的單元，核心圖用 cards。
   ============================================================ */
window.GVIDEO = window.GVIDEO || {};
window.GVIDEO_ART = window.GVIDEO_ART || {};

(function(){
  var D='#2b2118', A='#e8813a', C='#fdf6ec', L='#f7e3c9', R='#d9534f', B='#3b82c4', G='#3f9a62', Y='#f2c94c', S='#d6e8f8';
  var P='dg20261002b2_';
  var st='stroke="'+D+'" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"';
  var th=function(w){ return 'stroke="'+D+'" stroke-width="'+w+'" stroke-linejoin="round" stroke-linecap="round"'; };
  var svg=function(inner){ return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+inner+'</svg>'; };
  var txt=function(x,y,t,sz,col){ return '<text x="'+x+'" y="'+y+'" text-anchor="middle" font-family="Arial,sans-serif" font-weight="700" font-size="'+sz+'" fill="'+(col||D)+'">'+t+'</text>'; };
  var qb=function(cx,cy){ return '<circle cx="'+cx+'" cy="'+cy+'" r="16" fill="'+A+'" '+st+'/>'+txt(cx,cy+7,'?',20,'#fff'); };
  var chk=function(cx,cy,r){ return '<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="'+G+'" '+st+'/><path d="M'+(cx-r*0.45)+' '+cy+' l'+(r*0.32)+' '+(r*0.34)+' l'+(r*0.6)+' -'+(r*0.7)+'" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>'; };
  /* 紙張上的橫線 */
  var lines=function(x,y,w,n,gap){ var g=''; for(var i=0;i<n;i++) g+='<line x1="'+x+'" y1="'+(y+i*gap)+'" x2="'+(x+w-(i%2?14:0))+'" y2="'+(y+i*gap)+'" '+th(3)+'/>'; return g; };
  /* 證件卡 */
  var idcard=function(x,y){ return '<rect x="'+x+'" y="'+y+'" width="96" height="62" rx="8" fill="#fff" '+st+'/>'
    +'<rect x="'+x+'" y="'+y+'" width="96" height="14" rx="6" fill="'+B+'" '+st+'/>'
    +'<circle cx="'+(x+24)+'" cy="'+(y+34)+'" r="9" fill="'+L+'" '+th(2.5)+'/><path d="M'+(x+10)+' '+(y+56)+' q14 -16 28 0" fill="'+L+'" '+th(2.5)+'/>'
    +'<line x1="'+(x+46)+'" y1="'+(y+30)+'" x2="'+(x+84)+'" y2="'+(y+30)+'" '+th(3)+'/><line x1="'+(x+46)+'" y1="'+(y+44)+'" x2="'+(x+76)+'" y2="'+(y+44)+'" '+th(3)+'/>'; };

  var art={};
  /* ---- 核心觀念三張卡 ---- */
  /* 口語：兩個聊天泡泡 */
  art.chat=svg(
    '<path d="M18 22 H102 a12 12 0 0 1 12 12 V68 a12 12 0 0 1 -12 12 H48 L32 96 V80 H18 a12 12 0 0 1 -12 -12 V34 a12 12 0 0 1 12 -12 Z" fill="'+L+'" '+st+'/>'
   +'<path d="M98 60 H182 a12 12 0 0 1 12 12 V106 a12 12 0 0 1 -12 12 H168 V134 L152 118 H98 a12 12 0 0 1 -12 -12 V72 a12 12 0 0 1 12 -12 Z" fill="'+S+'" '+st+'/>'
   +'<g fill="'+D+'"><circle cx="40" cy="51" r="5"/><circle cx="60" cy="51" r="5"/><circle cx="80" cy="51" r="5"/></g>'
   +'<path d="M124 86 q4 -4 8 0 M152 86 q4 -4 8 0 M126 98 q16 12 32 0" fill="none" '+th(3)+'/>'),
  /* 中性書面：信封＋信紙 */
  art.mail=svg(
    '<rect x="56" y="14" width="88" height="80" rx="4" fill="#fff" '+st+'/>'
   +lines(68,32,64,4,14)
   +'<path d="M30 64 H170 V132 H30 Z" fill="'+L+'" '+st+'/>'
   +'<path d="M30 64 L100 108 L170 64" fill="none" '+st+'/>'
   +'<path d="M30 132 L82 96 M170 132 L118 96" fill="none" '+th(2.5)+'/>'),
  /* 正式：合約＋印章＋鋼筆 */
  art.contract=svg(
    '<path d="M40 14 H130 L152 36 V138 H40 Z" fill="#fff" '+st+'/><path d="M130 14 V36 H152" fill="'+C+'" '+st+'/>'
   +lines(54,44,80,4,14)
   +'<circle cx="122" cy="112" r="16" fill="'+R+'" '+st+'/><circle cx="122" cy="112" r="9" fill="none" stroke="#fff" stroke-width="2.5"/>'
   +'<path d="M54 118 q10 -10 18 0 t18 0" fill="none" stroke="'+B+'" stroke-width="3" stroke-linecap="round"/>'
   +'<g transform="rotate(35 172 82)"><rect x="164" y="40" width="16" height="70" rx="6" fill="'+D+'" '+st+'/><path d="M164 110 L172 130 L180 110 Z" fill="'+Y+'" '+st+'/></g>'),

  /* ---- 情境對話：研討會籌備 ---- */
  /* 1 研討會講台 */
  art.podium=svg(
    '<rect x="20" y="14" width="160" height="56" rx="6" fill="'+S+'" '+st+'/>'
   +'<path d="M36 56 l26 -22 l18 14 l24 -20 l30 28" fill="none" stroke="'+B+'" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>'
   +'<path d="M72 84 H128 L120 138 H80 Z" fill="'+A+'" '+st+'/>'
   +'<rect x="66" y="76" width="68" height="12" rx="3" fill="'+L+'" '+st+'/>'
   +'<path d="M100 76 V64 q0 -6 6 -8" fill="none" '+th(3)+'/><circle cx="108" cy="55" r="4" fill="'+D+'"/>'
   +'<circle cx="100" cy="110" r="9" fill="#fff" '+th(2.5)+'/>'
   +'<line x1="10" y1="138" x2="190" y2="138" '+st+'/>'),
  /* 2 飯店剛打來：手機響＋問號 */
  art.phoneq=svg(
    '<rect x="64" y="20" width="62" height="114" rx="12" fill="'+D+'" '+st+'/><rect x="70" y="32" width="50" height="88" rx="4" fill="#fff"/>'
   +'<path d="M84 82 c0 -14 22 -14 22 0 v8 h-8 v-6 c0 -4 -6 -4 -6 0 v6 h-8 Z" fill="'+G+'" '+th(2.5)+'/>'
   +'<path d="M48 50 l-10 -6 M48 72 h-12 M48 94 l-10 6" '+th(4)+'/>'
   +qb(160,40)),
  /* 3 他們的房間夠嗎？飯店大樓 */
  art.hotel=svg(
    '<line x1="10" y1="138" x2="190" y2="138" '+st+'/>'
   +'<rect x="50" y="22" width="100" height="116" fill="'+L+'" '+st+'/>'
   +'<rect x="40" y="14" width="120" height="14" rx="3" fill="'+R+'" '+st+'/>'
   +'<g fill="'+S+'" '+th(2.5)+'><rect x="62" y="40" width="18" height="16"/><rect x="91" y="40" width="18" height="16"/><rect x="120" y="40" width="18" height="16"/><rect x="62" y="66" width="18" height="16"/><rect x="91" y="66" width="18" height="16"/><rect x="120" y="66" width="18" height="16"/><rect x="62" y="92" width="18" height="16"/><rect x="120" y="92" width="18" height="16"/></g>'
   +'<rect x="88" y="104" width="24" height="34" fill="'+B+'" '+st+'/>'
   +'<path d="M80 100 H120 L114 92 H86 Z" fill="'+A+'" '+st+'/>'),
  /* 4 三十間，要三十五間：房卡＋數字 */
  art.keys=svg(
    '<g transform="rotate(-10 60 76)"><rect x="22" y="46" width="76" height="52" rx="8" fill="'+B+'" '+st+'/><rect x="22" y="58" width="76" height="10" fill="'+D+'"/>'+txt(60,90,'30',16,'#fff')+'</g>'
   +'<g transform="rotate(8 140 80)"><rect x="102" y="54" width="76" height="52" rx="8" fill="'+Y+'" '+st+'/><rect x="102" y="66" width="76" height="10" fill="'+D+'"/>'+txt(140,98,'35',16)+'</g>'
   +'<path d="M84 128 H120" '+th(4)+'/><path d="M112 120 l10 8 l-10 8" fill="none" '+th(4)+'/>'
   +txt(150,30,'+5',22,R)),
  /* 5 同事當面聊：兩杯咖啡＋聊天泡泡 */
  art.coffee=svg(
    '<path d="M30 76 h44 v34 a16 16 0 0 1 -16 16 h-12 a16 16 0 0 1 -16 -16 Z" fill="#fff" '+st+'/><path d="M74 86 h6 a8 8 0 0 1 0 16 h-6" fill="none" '+th(3)+'/>'
   +'<path d="M114 76 h44 v34 a16 16 0 0 1 -16 16 h-12 a16 16 0 0 1 -16 -16 Z" fill="'+A+'" '+st+'/><path d="M158 86 h6 a8 8 0 0 1 0 16 h-6" fill="none" '+th(3)+'/>'
   +'<path d="M44 66 q-6 -8 0 -16 M58 66 q-6 -8 0 -16 M128 66 q-6 -8 0 -16 M142 66 q-6 -8 0 -16" fill="none" stroke="#c9c2b8" stroke-width="3" stroke-linecap="round"/>'
   +'<path d="M70 12 H130 a10 10 0 0 1 10 10 V38 a10 10 0 0 1 -10 10 H106 L96 58 V48 H70 a10 10 0 0 1 -10 -10 V22 a10 10 0 0 1 10 -10 Z" fill="'+L+'" '+st+'/>'
   +'<g fill="'+D+'"><circle cx="84" cy="30" r="4"/><circle cx="100" cy="30" r="4"/><circle cx="116" cy="30" r="4"/></g>'
   +'<line x1="16" y1="128" x2="184" y2="128" '+st+'/>'),
  /* 6 寫正式的信：筆電 */
  art.laptop=svg(
    '<rect x="40" y="22" width="120" height="80" rx="6" fill="'+D+'" '+st+'/><rect x="48" y="30" width="104" height="64" rx="2" fill="#fff"/>'
   +'<rect x="56" y="38" width="40" height="8" rx="2" fill="'+B+'"/>'
   +lines(56,58,88,3,11)
   +'<path d="M24 104 H176 L186 124 H14 Z" fill="#c9c2b8" '+st+'/>'
   +'<rect x="86" y="110" width="28" height="6" rx="2" fill="'+D+'"/>'),
  /* 7 語氣穩重：信封寄出＋打勾 */
  art.sent=svg(
    '<path d="M20 50 H130 V122 H20 Z" fill="#fff" '+st+'/>'
   +'<path d="M20 50 L75 92 L130 50" fill="none" '+st+'/>'
   +'<path d="M144 40 h30 M150 54 h30 M156 68 h30" stroke="'+B+'" stroke-width="4" stroke-linecap="round"/>'
   +chk(150,108,22)),
  /* 8 講者得出示證件嗎？ */
  art.idq=svg(
    idcard(30,52)
   +'<path d="M140 128 a20 20 0 0 1 40 0 Z" fill="'+Y+'" '+st+'/><rect x="134" y="128" width="52" height="8" rx="3" fill="#c9c2b8" '+st+'/><circle cx="160" cy="104" r="4" fill="'+D+'"/>'
   +qb(162,36)),
  /* 9 講者手冊：are required to */
  art.guide=svg(
    '<path d="M100 30 Q70 18 26 24 V128 Q70 122 100 134 Z" fill="#fff" '+st+'/>'
   +'<path d="M100 30 Q130 18 174 24 V128 Q130 122 100 134 Z" fill="#fff" '+st+'/>'
   +'<g transform="translate(8 0) scale(0.5) translate(40 90)">'+idcard(30,30)+'</g>'
   +lines(116,44,46,4,16)
   +'<line x1="40" y1="104" x2="86" y2="104" '+th(3)+'/><line x1="40" y1="116" x2="78" y2="116" '+th(3)+'/>'),
  /* 10 寫成規定，不針對人：夾板＋印章 */
  art.stamp=svg(
    '<rect x="24" y="22" width="96" height="118" rx="6" fill="'+L+'" '+st+'/>'
   +'<rect x="34" y="34" width="76" height="98" rx="2" fill="#fff" '+th(2.5)+'/>'
   +'<rect x="52" y="14" width="40" height="16" rx="4" fill="#c9c2b8" '+st+'/>'
   +lines(44,52,56,4,14)
   +'<circle cx="86" cy="116" r="12" fill="none" stroke="'+R+'" stroke-width="4"/>'
   +'<rect x="140" y="30" width="22" height="40" rx="10" fill="'+A+'" '+st+'/>'
   +'<rect x="132" y="70" width="38" height="12" rx="3" fill="'+D+'" '+st+'/>'
   +'<rect x="128" y="82" width="46" height="14" rx="3" fill="'+R+'" '+st+'/>'
   +'<path d="M151 104 v12" '+th(3)+'/>');

  var out={}; for(var k in art) out[P+k]=art[k];
  Object.assign(window.GVIDEO_ART, out);
})();

/* ============================================================
   dg20261002b2 — have or have got? Choosing the Register
   Grammar in Use Unit 17（have and have got）＋ have to / must 的分工
   ============================================================ */
window.GVIDEO.dg20261002b2 = {
  kind: 'gram',
  date: '2026-10-02',
  title: 'have or have got? Choosing the Register',
  titleCn: 'have 還是 have got？看場合選距離',
  titleArt: ['dg20261002b2_chat', 'dg20261002b2_mail', 'dg20261002b2_contract'],
  scene: '研討會籌備 Conference planning',
  sceneArt: 'dg20261002b2_podium',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Rachel', voice: 'f' },
    T: { name: 'Daniel', voice: 'm' }
  },
  expr: {
    got:    { t: 'have got / have got to', cn: '口語：跟熟人當面講', ex: "I've got a few ideas for the new logo.", exCn: '我對新商標有幾個想法。', note: "問句 Have you got…?；常縮寫成 I've got、she's got" },
    have:   { t: 'have / have to', cn: '中性：郵件、會議紀錄', ex: 'The clinic has extended opening hours on Thursdays.', exCn: '診所星期四有延長看診時間。', note: "問句和否定交給 do：Do you have…? / We don't have…" },
    formal: { t: 'hold / carry / be required to', cn: '正式：合約、規定、對外文件', ex: 'Every company vehicle carries a first-aid kit.', exCn: '每一輛公司車都備有急救箱。', note: '動詞越具體越好；寫規定時，把人從句子裡拿掉' }
  },
  chapters: [
    { cn: '開場' }, { cn: '同一件事，三種距離' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  cardsKick: 'Same fact, three registers 同一件事，三種距離',
  cards: [
    { art: 'dg20261002b2_chat',     lab: '口語',     who: 'have got' },
    { art: 'dg20261002b2_mail',     lab: '中性書面', who: 'have' },
    { art: 'dg20261002b2_contract', lab: '正式文件', who: 'hold・carry' }
  ],
  flow: [
    { q: '是跟熟人當面講嗎？',         a: 'have got', en: 'have got / have got to' },
    { q: '是內部郵件或書面紀錄嗎？',   a: 'have',     en: 'have / have to（問句用 do）' },
    { q: '是合約、規定或對外文件嗎？', a: '具體動詞', en: 'hold・carry・include・be required to' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: 'have 和 have got 文法上常常都對。什麼場合該挑哪一個？這支影片告訴你。', vis: { type: 'title' } },

    /* ---- 1 核心：三種距離 ---- */
    { ch: 1, sp: 'N', zh: '講「擁有」時兩個都對，這時你挑的不是文法，而是距離感。', vis: { type: 'cards', show: 0 } },
    { ch: 1, sp: 'N', zh: '跟熟的同事當面講，用 have got 最自然，聽起來像在聊天。',
      hi: [{ t: 'have got', k: 'got', c: 3 }], vis: { type: 'cards', show: 1, pop: true } },
    { ch: 1, sp: 'T', en: "I've got a spare charger if you need one.", cn: '我有一個備用充電器，你要的話可以用。',
      hi: [{ t: "I've got", cn: '口語', k: 'got', c: 3 }], vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'N', zh: '寫進內部郵件或會議紀錄，就換成中性的 have，不會太隨便。',
      hi: [{ t: 'have', k: 'have', c: 4 }], vis: { type: 'cards', show: 2, pop: true } },
    { ch: 1, sp: 'A', en: 'The design team has two open positions at the moment.', cn: '設計團隊目前有兩個職缺。',
      hi: [{ t: 'has', cn: '中性書面', k: 'have', c: 4 }], vis: { type: 'cards', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: '事實一樣，變的是語域。讀的人會從你的用字，判斷你跟他有多熟。',
      vis: { type: 'cards', show: 2 } },
    { ch: 1, sp: 'N', zh: '再往上一格，合約和對外文件常常連 have 都換掉，改用 hold、carry 這種具體動詞。',
      hi: [{ t: 'hold、carry', k: 'formal', c: 2 }], vis: { type: 'cards', show: 3, pop: true } },
    { ch: 1, sp: 'A', en: 'Our Taichung plant holds two environmental permits.', cn: '我們台中廠持有兩張環保許可證。',
      hi: [{ t: 'holds', cn: '正式：持有', k: 'formal', c: 2 }], vis: { type: 'cards', show: 3, lit: 2 } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: '口語版：主詞加 have got，常縮寫成 I\'ve got。問句把 have 搬到最前面。',
      hi: [{ t: 'have got', k: 'got', c: 3 }],
      vis: { type: 'pattern', kick: '口語 Spoken', rows: [
        { lab: '直述', blocks: [{ t: 'I', k: 's' }, { t: "'ve got", k: 'v' }, { t: 'a call at two', k: 'o' }] },
        { lab: '問句', blocks: [{ t: 'Have', k: 'x' }, { t: 'you', k: 's' }, { t: 'got', k: 'v' }, { t: 'a minute?', k: 'o' }] }
      ], note: '過去式不用 had got，直接用 had' } },
    { ch: 2, sp: 'N', zh: '書面版：直接用 have，問句和否定交給 do。',
      hi: [{ t: 'have', k: 'have', c: 4 }],
      vis: { type: 'pattern', kick: '書面 Written', rows: [
        { lab: '直述', blocks: [{ t: 'The hotel', k: 's' }, { t: 'has', k: 'v' }, { t: 'a free shuttle', k: 'o' }] },
        { lab: '問句', blocks: [{ t: 'Does', k: 'x' }, { t: 'the hotel', k: 's' }, { t: 'have', k: 'v' }, { t: 'a gym?', k: 'o' }] }
      ], note: 'do 和 got 不會同時出現' } },
    { ch: 2, sp: 'N', zh: '想更正式，就把 have 換成更具體的動詞，常用的有這四個。',
      vis: { type: 'family', kick: 'More precise verbs 更具體的動詞', core: 'Instead of have', coreCn: '取代 have', art: 'dg20261002b2_contract', items: [
        { t: 'hold', cn: '持有證照、許可' }, { t: 'carry', cn: '備有、標示' }, { t: 'include', cn: '包含' }, { t: 'be required to', cn: '規定必須' }
      ] } },
    { ch: 2, sp: 'N', zh: '「必須」也分三格：have got to 最口語，have to 中性，正式規定寫 be required to。',
      hi: [{ t: 'have got to', k: 'got', c: 3 }, { t: 'be required to', k: 'formal', c: 2 }],
      vis: { type: 'pattern', kick: '必須 Obligation', rows: [
        { lab: '口語', blocks: [{ t: 'We', k: 's' }, { t: 'have got to', k: 'v' }, { t: 'leave by four', k: 'o' }] },
        { lab: '中性', blocks: [{ t: 'We', k: 's' }, { t: 'have to', k: 'v' }, { t: 'leave by four', k: 'o' }] },
        { lab: '正式', blocks: [{ t: 'Guests', k: 's' }, { t: 'are required to', k: 'v' }, { t: 'check out by noon', k: 'o' }] }
      ] } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: '來聽 Rachel 和 Daniel 籌備研討會，注意講話和寫信時用字怎麼換。', vis: { type: 'scene', art: 'dg20261002b2_podium' } },
    { ch: 3, sp: 'T', en: 'Have you got five minutes? The hotel just called about the rooms.', cn: '你有五分鐘嗎？飯店剛剛打來講房間的事。',
      hi: [{ t: 'Have you got', cn: '口語問句', k: 'got', c: 3 }], vis: { type: 'scene', art: 'dg20261002b2_phoneq' } },
    { ch: 3, sp: 'A', en: 'Sure. Have they got enough rooms for all our speakers?', cn: '好啊。他們的房間夠我們所有講者住嗎？',
      hi: [{ t: 'Have they got', cn: '口語問句', k: 'got', c: 3 }], vis: { type: 'scene', art: 'dg20261002b2_hotel' } },
    { ch: 3, sp: 'T', en: "They've got thirty, but we need thirty-five.", cn: '他們有三十間，但我們需要三十五間。',
      hi: [{ t: "They've got", cn: '口語', k: 'got', c: 3 }], vis: { type: 'scene', art: 'dg20261002b2_keys' } },
    { ch: 3, sp: 'N', zh: '當面講用 have got 很自然。接著 Rachel 要把這件事寫成正式的信。',
      hi: [{ t: 'have got', k: 'got', c: 3 }], vis: { type: 'scene', art: 'dg20261002b2_coffee' } },
    { ch: 3, sp: 'A', en: 'Our group currently has thirty rooms on hold and would like five more.', cn: '我們團體目前保留了三十間房，希望再加五間。',
      hi: [{ t: 'has', cn: '書面', k: 'have', c: 4 }], vis: { type: 'scene', art: 'dg20261002b2_laptop' } },
    { ch: 3, sp: 'N', zh: '寫給飯店的信，她把 have got 換成中性的 has，語氣立刻穩重起來。',
      hi: [{ t: 'has', k: 'have', c: 4 }], vis: { type: 'scene', art: 'dg20261002b2_sent' } },
    { ch: 3, sp: 'T', en: 'Oh, and speakers have got to show ID when they check in, right?', cn: '對了，講者入住時得出示證件，對吧？',
      hi: [{ t: 'have got to', cn: '口語：得', k: 'got', c: 3 }], vis: { type: 'scene', art: 'dg20261002b2_idq' } },
    { ch: 3, sp: 'A', en: 'Yes. The speaker guide says all guests are required to show photo ID.', cn: '對，講者手冊寫著：所有房客都必須出示有照片的證件。',
      hi: [{ t: 'are required to', cn: '正式規定', k: 'formal', c: 2 }], vis: { type: 'scene', art: 'dg20261002b2_guide' } },
    { ch: 3, sp: 'N', zh: '口頭講 have got to，寫進手冊就換成 are required to，要求落在規定上，不針對人。',
      hi: [{ t: 'are required to', k: 'formal', c: 2 }], vis: { type: 'scene', art: 'dg20261002b2_stamp' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '同樣是「必須」，壓力從哪裡來，決定你用哪個字。',
      vis: { type: 'vs', sm: true, kick: '壓力從哪裡來',
        a: { w: "I've got to leave early; my train is at six.", def: '我得早點走，我的火車六點開。', cn: '外在現實逼我 → have got to' },
        b: { w: 'I must call my grandmother more often.', def: '我真的該多打電話給奶奶。', cn: '我自己的判斷 → must' } } },
    { ch: 4, sp: 'A', en: "I've got to leave early; my train is at six.", cn: '我得早點走，我的火車六點開。',
      hi: [{ t: "I've got to", cn: '外在壓力', k: 'got', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '壓力從哪裡來',
        a: { w: "I've got to leave early; my train is at six.", def: '我得早點走，我的火車六點開。', cn: '外在現實逼我 → have got to' },
        b: { w: 'I must call my grandmother more often.', def: '我真的該多打電話給奶奶。', cn: '我自己的判斷 → must' } } },
    { ch: 4, sp: 'T', en: 'I must call my grandmother more often.', cn: '我真的該多打電話給奶奶。',
      hi: [{ t: 'must', cn: '自己覺得應該', c: 1 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '壓力從哪裡來',
        a: { w: "I've got to leave early; my train is at six.", def: '我得早點走，我的火車六點開。', cn: '外在現實逼我 → have got to' },
        b: { w: 'I must call my grandmother more often.', def: '我真的該多打電話給奶奶。', cn: '我自己的判斷 → must' } } },
    { ch: 4, sp: 'N', zh: '第一句是火車時間逼你走；第二句是你自己覺得應該，壓力來自心裡。',
      vis: { type: 'vs', sm: true, kick: '壓力從哪裡來',
        a: { w: "I've got to leave early; my train is at six.", def: '我得早點走，我的火車六點開。', cn: '外在現實逼我 → have got to' },
        b: { w: 'I must call my grandmother more often.', def: '我真的該多打電話給奶奶。', cn: '我自己的判斷 → must' } } },
    { ch: 4, sp: 'N', zh: '再看一組。同一個問題，會議上講和寫進維修單，用字不一樣。',
      vis: { type: 'vs', sm: true, kick: '講出來 vs 寫下來',
        a: { w: "We've got an issue with the projector.", def: '投影機出了點問題。', cn: '會議上講 → have got' },
        b: { w: 'The projector in Room B has a faulty power cable.', def: 'B 會議室的投影機電源線故障。', cn: '寫進維修單 → have＋具體細節' } } },
    { ch: 4, sp: 'A', en: "We've got an issue with the projector.", cn: '投影機出了點問題。',
      hi: [{ t: "We've got", cn: '口頭講', k: 'got', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '講出來 vs 寫下來',
        a: { w: "We've got an issue with the projector.", def: '投影機出了點問題。', cn: '會議上講 → have got' },
        b: { w: 'The projector in Room B has a faulty power cable.', def: 'B 會議室的投影機電源線故障。', cn: '寫進維修單 → have＋具體細節' } } },
    { ch: 4, sp: 'T', en: 'The projector in Room B has a faulty power cable.', cn: 'B 會議室的投影機電源線故障。',
      hi: [{ t: 'has', cn: '書面', k: 'have', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '講出來 vs 寫下來',
        a: { w: "We've got an issue with the projector.", def: '投影機出了點問題。', cn: '會議上講 → have got' },
        b: { w: 'The projector in Room B has a faulty power cable.', def: 'B 會議室的投影機電源線故障。', cn: '寫進維修單 → have＋具體細節' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '最後給你一個判斷流程，先想這句話會被誰讀到。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一問：是跟熟人當面講嗎？是的話，用 have got 最自然。',
      hi: [{ t: 'have got', k: 'got', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'T', en: "I've got a dentist appointment at four.", cn: '我四點要看牙醫。',
      hi: [{ t: "I've got", cn: '口語', k: 'got', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二問：是內部郵件，或要存檔的紀錄嗎？是的話，換成中性的 have。',
      hi: [{ t: 'have', k: 'have', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'A', en: 'The finance team has three new members this quarter.', cn: '財務部這一季有三位新同事。',
      hi: [{ t: 'has', cn: '中性', k: 'have', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '第三問：是合約、規定或對外文件嗎？是的話，挑一個更具體的動詞。',
      hi: [{ t: '更具體的動詞', k: 'formal', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'T', en: 'The registration fee includes lunch.', cn: '報名費包含午餐。',
      hi: [{ t: 'includes', cn: '具體動詞', k: 'formal', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說說看。看到中文情境，先自己用英文說出來，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：在走廊遇到同事，你跟他說，你三點有個會。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '在走廊遇到同事，你跟他說，你三點有個會。' } },
    { ch: 6, sp: 'A', en: "I've got a meeting at three.", cn: '我三點有個會。',
      hi: [{ t: "I've got", cn: '當面講 → have got', k: 'got', c: 3 }],
      vis: { type: 'speak', n: 1, show: true, sit: '在走廊遇到同事，你跟他說，你三點有個會。', a: "I've got a meeting at three." } },
    { ch: 6, sp: 'N', zh: '情境二：寫內部郵件通知大家，新的會議室有一台投影機和一塊白板。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '寫內部郵件通知大家，新的會議室有一台投影機和一塊白板。' } },
    { ch: 6, sp: 'T', en: 'The new meeting room has a projector and a whiteboard.', cn: '新的會議室有一台投影機和一塊白板。',
      hi: [{ t: 'has', cn: '書面 → have', k: 'have', c: 4 }],
      vis: { type: 'speak', n: 2, show: true, sit: '寫內部郵件通知大家，新的會議室有一台投影機和一塊白板。', a: 'The new meeting room has a projector and a whiteboard.' } },
    { ch: 6, sp: 'N', zh: '情境三：在員工手冊裡寫，所有員工都必須完成資安訓練。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '在員工手冊裡寫，所有員工都必須完成資安訓練。' } },
    { ch: 6, sp: 'A', en: 'All employees are required to complete security training.', cn: '所有員工都必須完成資安訓練。',
      hi: [{ t: 'are required to', cn: '規定 → be required to', k: 'formal', c: 2 }],
      vis: { type: 'speak', n: 3, show: true, sit: '在員工手冊裡寫，所有員工都必須完成資安訓練。', a: 'All employees are required to complete security training.' } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結一下：當面講用 have got；書面用 have；合約和規定，換成 hold、carry、be required to。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '下次開口或下筆之前，先問一句：這句話會被誰讀到？', vis: { type: 'end' } }
  ]
};
