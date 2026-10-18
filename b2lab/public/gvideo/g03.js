/* ============================================================
   B2 Read 文法影片解說 — g03 過去簡單式 vs. 過去進行式（while / when）（B1）
   格式與規則見 b2lab/tools/GVIDEO_SPEC.md；範本 gvideo/dg20261014b1.js。
   過去式單元：timelineNow 把「現在」放右邊，項目都在左邊的過去。
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
  /* 機車（朝右）；flat＝後輪扁掉 */
  var scooter=function(x,y,s,flat){
    var wh=(flat?'<ellipse cx="-38" cy="24" rx="19" ry="8" fill="'+D+'" '+st+'/><ellipse cx="-38" cy="24" rx="7" ry="3" fill="#c9c2b8"/>'
            :'<circle cx="-38" cy="17" r="15" fill="'+D+'" '+st+'/><circle cx="-38" cy="17" r="5.5" fill="#c9c2b8"/>')
      +'<circle cx="40" cy="17" r="15" fill="'+D+'" '+st+'/><circle cx="40" cy="17" r="5.5" fill="#c9c2b8"/>';
    return '<g transform="translate('+x+' '+y+') scale('+s+')">'
      +'<path d="M-58 12 C-60 -8 -42 -16 -22 -16 H-4 L4 4 H20 L30 -34 H40 L34 12 Z" fill="'+B+'" '+st+'/>'
      +'<path d="M-48 -16 H-10 a6 6 0 0 1 0 10 H-48 a6 6 0 0 1 0 -10 Z" fill="'+D+'" '+th(2)+'/>'
      +'<path d="M-6 12 H22" fill="none" '+th(3)+'/>'
      +'<line x1="26" y1="-34" x2="44" y2="-40" '+th(4)+'/>'
      +'<circle cx="44" cy="-24" r="5" fill="'+Y+'" '+th(2)+'/>'+wh+'</g>'; };
  /* 時鐘 */
  var clock=function(cx,cy,r,hx,hy,mx,my){
    return '<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="#fff" '+st+'/>'
      +'<line x1="'+cx+'" y1="'+cy+'" x2="'+(cx+hx)+'" y2="'+(cy+hy)+'" '+th(4)+'/>'
      +'<line x1="'+cx+'" y1="'+cy+'" x2="'+(cx+mx)+'" y2="'+(cy+my)+'" stroke="'+A+'" stroke-width="4" stroke-linecap="round"/>'
      +'<circle cx="'+cx+'" cy="'+cy+'" r="3" fill="'+D+'"/>'; };

  Object.assign(window.GVIDEO_ART, {
    /* 過去進行式：背景那一段——麥克風＋一長串音符 */
    g03_bg: svg(
      '<g transform="rotate(-24 70 80)"><rect x="56" y="30" width="28" height="40" rx="14" fill="#c9c2b8" '+st+'/>'
     +'<path d="M60 44 H80 M60 54 H80" '+th(2)+'/>'
     +'<path d="M62 70 L66 128 H74 L78 70 Z" fill="'+D+'" '+st+'/></g>'
     +'<path d="M110 36 Q132 22 150 36 T190 36" fill="none" stroke="'+B+'" stroke-width="4" stroke-dasharray="2 8" stroke-linecap="round"/>'
     +'<g fill="'+B+'" '+th(2.5)+'><ellipse cx="124" cy="78" rx="9" ry="7"/><ellipse cx="162" cy="96" rx="9" ry="7"/></g>'
     +'<path d="M132 78 V50 L150 46 V70 M170 96 V68" fill="none" '+th(3)+'/>'
     +'<ellipse cx="142" cy="70" rx="8" ry="6" fill="'+B+'" '+th(2.5)+'/>'),
    /* 過去簡單式：插進來的那一下——門＋敲門的衝擊線 */
    g03_event: svg(
      '<rect x="46" y="16" width="78" height="122" rx="4" fill="#b98b5e" '+st+'/>'
     +'<rect x="58" y="28" width="54" height="40" rx="3" fill="#d4a373" '+th(2.5)+'/><rect x="58" y="80" width="54" height="44" rx="3" fill="#d4a373" '+th(2.5)+'/>'
     +'<circle cx="112" cy="76" r="5" fill="'+Y+'" '+th(2.5)+'/>'
     +'<g stroke="'+G+'" stroke-width="6" stroke-linecap="round"><line x1="138" y1="60" x2="160" y2="48"/><line x1="142" y1="76" x2="168" y2="76"/><line x1="138" y1="92" x2="160" y2="104"/></g>'
     +'<path d="M168 30 l8 -14 l4 12 l10 -6" fill="none" stroke="'+A+'" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>'),
    /* 兩段同時：一邊看書、一邊想睡——書本＋枕頭 Z */
    g03_both: svg(
      '<path d="M18 92 Q46 80 74 92 V128 Q46 116 18 128 Z" fill="#fff" '+st+'/><path d="M74 92 Q102 80 130 92 V128 Q102 116 74 128 Z" fill="#fff" '+st+'/>'
     +'<path d="M28 100 Q46 94 64 100 M28 110 Q46 104 64 110 M84 100 Q102 94 120 100 M84 110 Q102 104 120 110" fill="none" stroke="#c9c2b8" stroke-width="2.5"/>'
     +'<rect x="112" y="30" width="76" height="40" rx="18" fill="'+S+'" '+st+'/><path d="M124 42 q26 10 52 0" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round"/>'
     +txt(150,26,'Z',16,R)+txt(170,16,'z',13,R)
     +'<path d="M96 74 V44 M88 52 L96 44 L104 52" fill="none" stroke="'+R+'" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>'),

    /* 情境 0：辦公室——牆上時鐘九點四十 */
    g03_office: svg(
      '<rect x="0" y="0" width="200" height="150" rx="14" fill="'+C+'"/>'
     +clock(150,40,24,-10,-12,0,22)
     +'<rect x="14" y="88" width="132" height="12" rx="3" fill="#b98b5e" '+st+'/>'
     +'<line x1="28" y1="100" x2="28" y2="138" '+th(5)+'/><line x1="132" y1="100" x2="132" y2="138" '+th(5)+'/>'
     +'<rect x="44" y="46" width="62" height="40" rx="4" fill="'+D+'" '+st+'/><rect x="50" y="52" width="50" height="28" fill="'+S+'"/>'
     +'<rect x="160" y="84" width="28" height="54" rx="4" fill="'+G+'" '+st+'/><path d="M174 84 c-14 -16 -10 -30 0 -36 c10 6 14 20 0 36 Z" fill="'+G+'" '+st+'/>'),
    /* 情境 1：你遲到了！——跑動的時鐘＋問號 */
    g03_late: svg(
      clock(84,78,46,-20,-24,26,10)
     +'<g stroke="'+A+'" stroke-width="5" stroke-linecap="round"><line x1="18" y1="58" x2="32" y2="58"/><line x1="12" y1="78" x2="30" y2="78"/><line x1="18" y1="98" x2="32" y2="98"/></g>'
     +'<path d="M62 22 l-10 -10 M106 22 l10 -10" '+th(4)+'/>'
     +qb(166,34)),
    /* 情境 2：騎車時爆胎——機車後輪扁掉 */
    g03_flat: svg(
      '<line x1="8" y1="134" x2="192" y2="134" '+st+'/>'
     +scooter(104,102,1,true)
     +'<g stroke="'+R+'" stroke-width="4" stroke-linecap="round"><line x1="42" y1="128" x2="28" y2="126"/><line x1="44" y1="118" x2="32" y2="110"/><line x1="52" y1="112" x2="46" y2="100"/></g>'),
    /* 情境 3：爆胎那一下——輪胎上的釘子 */
    g03_nail: svg(
      '<circle cx="96" cy="78" r="54" fill="'+D+'" '+st+'/><circle cx="96" cy="78" r="26" fill="#c9c2b8" '+st+'/><circle cx="96" cy="78" r="8" fill="'+D+'"/>'
     +'<g stroke="#5a4a3c" stroke-width="3"><line x1="96" y1="28" x2="96" y2="38"/><line x1="46" y1="78" x2="56" y2="78"/><line x1="136" y1="78" x2="146" y2="78"/><line x1="96" y1="118" x2="96" y2="128"/></g>'
     +'<g transform="rotate(30 142 40)"><rect x="138" y="14" width="8" height="34" fill="#8b8f96" '+th(2.5)+'/><rect x="130" y="8" width="24" height="8" rx="2" fill="#8b8f96" '+th(2.5)+'/></g>'
     +'<g stroke="'+A+'" stroke-width="5" stroke-linecap="round"><line x1="168" y1="56" x2="186" y2="62"/><line x1="160" y1="70" x2="176" y2="84"/><line x1="172" y1="40" x2="190" y2="38"/></g>'),
    /* 情境 4：有人幫你嗎？——伸出的手＋問號 */
    g03_help: svg(
      '<path d="M20 100 H70 C78 100 84 96 90 90 L118 66 a8 8 0 0 1 12 10 L110 98 H140 a8 8 0 0 1 0 16 H72 C56 114 40 118 20 118 Z" fill="'+L+'" '+st+'/>'
     +'<path d="M96 106 H136" fill="none" '+th(2)+'/>'
     +'<rect x="6" y="94" width="20" height="30" rx="4" fill="'+B+'" '+st+'/>'
     +qb(162,38)),
    /* 情境 5：推車推了一段路——機車＋腳印箭頭 */
    g03_push: svg(
      '<line x1="8" y1="134" x2="192" y2="134" '+st+'/>'
     +scooter(120,102,0.86,true)
     +'<path d="M20 120 H60" fill="none" stroke="'+A+'" stroke-width="5" stroke-dasharray="8 8" stroke-linecap="round"/>'
     +'<path d="M14 92 H54" fill="none" stroke="'+A+'" stroke-width="5" stroke-dasharray="8 8" stroke-linecap="round"/>'
     +'<circle cx="168" cy="30" r="14" fill="'+Y+'" '+st+'/>'
     +'<g '+th(3)+'><line x1="168" y1="8" x2="168" y2="12"/><line x1="146" y1="30" x2="150" y2="30"/><line x1="190" y1="30" x2="186" y2="30"/></g>'),
    /* 情境 6：老先生停下來——戴帽子拄拐杖的老先生 */
    g03_oldman: svg(
      '<line x1="8" y1="138" x2="192" y2="138" '+st+'/>'
     +'<path d="M78 138 V112 M102 138 V112" '+th(6)+'/>'
     +'<path d="M70 116 V74 a20 20 0 0 1 40 0 V116 Z" fill="'+G+'" '+st+'/>'
     +'<circle cx="90" cy="44" r="18" fill="'+L+'" '+st+'/>'
     +'<path d="M82 52 q8 6 16 0" fill="none" '+th(2.5)+'/><path d="M84 42 h0 M96 42 h0" '+th(4)+'/>'
     +'<path d="M68 32 H112 M76 32 V22 a14 8 0 0 1 28 0 V32" fill="#b98b5e" '+st+'/>'
     +'<path d="M120 86 V138" '+th(5)+'/><path d="M110 86 Q120 74 128 86" fill="none" '+th(5)+'/>'
     +'<path d="M110 84 L120 88" '+th(5)+'/>'
     +'<path d="M140 44 a14 14 0 0 1 22 -4 M146 54 a8 8 0 0 1 12 -2" fill="none" stroke="'+A+'" stroke-width="4" stroke-linecap="round"/>'),
    /* 情境 7：他是修車師傅嗎？——扳手＋問號 */
    g03_wrench: svg(
      '<g transform="rotate(-40 92 82)"><rect x="84" y="46" width="16" height="84" rx="6" fill="#8b8f96" '+st+'/>'
     +'<path d="M72 24 a22 22 0 0 0 40 0 V44 a8 8 0 0 1 -8 8 H80 a8 8 0 0 1 -8 -8 Z" fill="#8b8f96" '+st+'/>'
     +'<rect x="85" y="18" width="14" height="18" fill="'+C+'" '+th(2.5)+'/></g>'
     +qb(162,36)),
    /* 情境 8：修好了——輪胎＋打勾 */
    g03_fixed: svg(
      '<line x1="8" y1="134" x2="192" y2="134" '+st+'/>'
     +scooter(88,102,1,false)
     +chk(162,40,22)),
    /* 情境 9：一件接一件——1、2、3 順序箭頭 */
    g03_steps: svg(
      '<circle cx="34" cy="76" r="22" fill="'+B+'" '+st+'/>'+txt(34,84,'1',22,'#fff')
     +'<circle cx="100" cy="76" r="22" fill="'+G+'" '+st+'/>'+txt(100,84,'2',22,'#fff')
     +'<circle cx="166" cy="76" r="22" fill="'+A+'" '+st+'/>'+txt(166,84,'3',22,'#fff')
     +'<path d="M58 76 H72 M124 76 H138" fill="none" '+th(4)+'/><path d="M68 70 L76 76 L68 82 M134 70 L142 76 L134 82" fill="none" '+th(4)+'/>'
     +'<path d="M30 124 H170" fill="none" stroke="#c9c2b8" stroke-width="4" stroke-linecap="round"/>')
  });
})();

/* ============================================================
   g03 — Background or What Happened?
   過去進行式（背景）vs. 過去簡單式（插進來的事）；while / when；兩段同時
   Grammar in Use Units 5–6
   ============================================================ */
window.GVIDEO.g03 = {
  kind: 'gram',
  date: '',
  title: 'Background or What Happened?',
  titleCn: '背景還是插進來的事？過去兩種時態',
  titleArt: ['g03_bg', 'g03_event', 'g03_both'],
  scene: '上班遲到 Late for work',
  sceneArt: 'g03_office',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Vera', voice: 'f' },
    T: { name: 'Derek', voice: 'm' }
  },
  expr: {
    bg:   { t: 'was / were + V-ing', cn: '當時正在進行的背景 → 過去進行式', ex: 'At six this morning, the street was still dark.', exCn: '今天早上六點，街上還是暗的。', note: 'while 後面常接這一段背景' },
    ev:   { t: 'V-ed / 不規則過去式', cn: '一下子發生、做完的事 → 過去簡單式', ex: 'Someone honked behind me, and I jumped.', exCn: '後面有人按喇叭，我嚇了一跳。', note: 'when 後面常接這一下' },
    both: { t: 'While … was V-ing, … was V-ing', cn: '兩段同時在進行 → 兩邊都用進行式', ex: 'While the kids were swimming, we were grilling corn.', exCn: '孩子們在游泳的時候，我們在烤玉米。', note: 'while 接子句；名詞用 during，時間長度用 for' }
  },
  chapters: [
    { cn: '開場' }, { cn: '背景和插進來的事' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  timelineNow: 90,
  timeline: [
    { x: 22, art: 'g03_bg',    lab: '過去進行式', who: '背景那一段' },
    { x: 48, art: 'g03_event', lab: '過去簡單式', who: '插進來的事' },
    { x: 72, art: 'g03_both',  lab: '兩邊進行式', who: '兩段同時', open: true }
  ],
  flow: [
    { q: '是那一刻正在進行的背景嗎？', a: '過去進行式', en: '主詞 + was/were + V-ing' },
    { q: '是一下子發生、做完的事嗎？', a: '過去簡單式', en: '主詞 + V-ed／不規則過去式' },
    { q: '兩件事都是一段，同時進行？', a: '兩邊進行式', en: 'While + was V-ing, was V-ing' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: '講過去的事，何時用過去進行式，何時用過去簡單式？這支影片教你分清楚。', vis: { type: 'title' } },

    /* ---- 1 核心 ---- */
    { ch: 1, sp: 'N', zh: '講過去的故事，常常有兩層：一層是當時的背景，一層是突然插進來的事。',
      vis: { type: 'timeline', show: 0, kick: '背景還是插進來的事？' } },
    { ch: 1, sp: 'N', zh: '背景是那一刻正在進行的一段，用過去進行式，也就是 was 或 were 加 ing。',
      hi: [{ t: '過去進行式', k: 'bg', c: 3 }], vis: { type: 'timeline', show: 1, pop: true, kick: '背景還是插進來的事？' } },
    { ch: 1, sp: 'A', en: 'At midnight, my neighbors were still singing karaoke.', cn: '半夜十二點，我鄰居還在唱卡拉 OK。',
      hi: [{ t: 'were still singing', cn: '當時的背景', k: 'bg', c: 3 }], vis: { type: 'timeline', show: 1, lit: 0, kick: '背景還是插進來的事？' } },
    { ch: 1, sp: 'N', zh: '插進來的事，是一下子就發生、做完的，用過去簡單式。',
      hi: [{ t: '過去簡單式', k: 'ev', c: 4 }], vis: { type: 'timeline', show: 2, pop: true, kick: '背景還是插進來的事？' } },
    { ch: 1, sp: 'T', en: 'They were singing a love song when somebody knocked on their door.', cn: '他們正在唱情歌的時候，有人去敲他們家的門。',
      hi: [{ t: 'were singing', cn: '背景', k: 'bg', c: 3 }, { t: 'knocked', cn: '那一下', k: 'ev', c: 4 }], vis: { type: 'timeline', show: 2, lit: 1, kick: '背景還是插進來的事？' } },
    { ch: 1, sp: 'N', zh: '長的那件當背景，用進行式；短的那件插進來，用簡單式。這個分工不要顛倒。',
      vis: { type: 'timeline', show: 2, kick: '背景還是插進來的事？' } },
    { ch: 1, sp: 'N', zh: '如果兩件事都是一段，而且同時在進行，那就兩邊都用過去進行式。',
      hi: [{ t: '兩邊都用過去進行式', k: 'both', c: 2 }], vis: { type: 'timeline', show: 3, pop: true, kick: '背景還是插進來的事？' } },
    { ch: 1, sp: 'A', en: 'While my roommate was reading, I was trying to fall asleep.', cn: '我室友在看書的時候，我在努力想睡著。',
      hi: [{ t: 'was reading', cn: '一段', k: 'both', c: 2 }, { t: 'was trying', cn: '同時另一段', k: 'both', c: 2 }], vis: { type: 'timeline', show: 3, lit: 2, kick: '背景還是插進來的事？' } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: '過去進行式：I、he、she、it 用 was；you、we、they 用 were，再加動詞 ing。',
      hi: [{ t: '過去進行式', k: 'bg', c: 3 }],
      vis: { type: 'pattern', kick: 'Past continuous 過去進行式', rows: [
        { lab: 'I / he / she / it', blocks: [{ t: 'She', k: 's' }, { t: 'was jogging', k: 'v' }, { t: 'in the park', k: 'o' }] },
        { lab: 'you / we / they', blocks: [{ t: 'We', k: 's' }, { t: 'were jogging', k: 'v' }, { t: 'in the park', k: 'o' }] }
      ] } },
    { ch: 2, sp: 'N', zh: 'when 通常接短的那件，while 通常接長的那件。while 放句首，中間加逗號。',
      vis: { type: 'pattern', kick: 'when / while 接哪一邊', rows: [
        { lab: 'when ＋ 短的', blocks: [{ t: 'I', k: 's' }, { t: 'was jogging', k: 'v' }, { t: 'when', k: 'n' }, { t: 'I saw a rainbow', k: 'o' }] },
        { lab: 'while ＋ 長的', blocks: [{ t: 'While', k: 'n' }, { t: 'I was jogging,', k: 'v' }, { t: 'I saw a rainbow', k: 'o' }] }
      ], note: '兩句意思一樣，只是把背景放在不同位置' } },
    { ch: 2, sp: 'N', zh: 'while 後面一定是主詞加動詞。如果後面只是名詞，要用 during；講多長的時間，用 for。',
      vis: { type: 'pattern', kick: 'while · during · for', rows: [
        { lab: 'while ＋ 子句', blocks: [{ t: 'while', k: 'n' }, { t: 'Mom was driving', k: 'v' }] },
        { lab: 'during ＋ 名詞', blocks: [{ t: 'during', k: 'n' }, { t: 'the concert', k: 'o' }] },
        { lab: 'for ＋ 時間長度', blocks: [{ t: 'for', k: 'n' }, { t: 'three hours', k: 'o' }] }
      ] } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: 'Derek 今天上班遲到，同事 Vera 問他怎麼了。注意哪件是背景。', vis: { type: 'scene', art: 'g03_office' } },
    { ch: 3, sp: 'A', en: "You're late today! What happened?", cn: '你今天遲到了！發生什麼事？', vis: { type: 'scene', art: 'g03_late' } },
    { ch: 3, sp: 'T', en: 'I was riding to the office when my back tire went flat.', cn: '我騎車來公司的路上，後輪突然爆胎了。',
      hi: [{ t: 'was riding', cn: '背景', k: 'bg', c: 3 }, { t: 'went flat', cn: '那一下', k: 'ev', c: 4 }], vis: { type: 'scene', art: 'g03_flat' } },
    { ch: 3, sp: 'N', zh: '騎車是一段背景，用 was riding；爆胎是一下子插進來的事，用 went flat。',
      hi: [{ t: 'was riding', k: 'bg', c: 3 }, { t: 'went flat', k: 'ev', c: 4 }], vis: { type: 'scene', art: 'g03_nail' } },
    { ch: 3, sp: 'A', en: 'Oh no! Did anyone help you?', cn: '天啊！有人幫你嗎？',
      hi: [{ t: 'Did anyone help', cn: '問發生的事', k: 'ev', c: 4 }], vis: { type: 'scene', art: 'g03_help' } },
    { ch: 3, sp: 'T', en: 'Yes. While I was pushing it along the road, an old man stopped.', cn: '有。我在路邊推車的時候，一位老先生停了下來。',
      hi: [{ t: 'While I was pushing', cn: '長的那段', k: 'bg', c: 3 }, { t: 'stopped', cn: '短的那下', k: 'ev', c: 4 }], vis: { type: 'scene', art: 'g03_push' } },
    { ch: 3, sp: 'N', zh: 'while 後面接長的那件事，推車推了一段路；老先生停下來，是插進來的那一下。',
      hi: [{ t: 'while', k: 'bg', c: 3 }], vis: { type: 'scene', art: 'g03_oldman' } },
    { ch: 3, sp: 'A', en: 'Lucky you! Was he a mechanic?', cn: '你運氣真好！他是修車師傅嗎？', vis: { type: 'scene', art: 'g03_wrench' } },
    { ch: 3, sp: 'T', en: 'Yes! He fixed the tire, and I rode straight here.', cn: '對！他把輪胎修好，我就直接騎過來了。',
      hi: [{ t: 'fixed', cn: '做完', k: 'ev', c: 4 }, { t: 'rode', cn: '接著做完', k: 'ev', c: 4 }], vis: { type: 'scene', art: 'g03_fixed' } },
    { ch: 3, sp: 'N', zh: '修好、騎過來，是一件接一件做完的事，全部用過去簡單式就好。',
      hi: [{ t: '過去簡單式', k: 'ev', c: 4 }], vis: { type: 'scene', art: 'g03_steps' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '同樣是阿姨到的時候，換一個時態，事情的順序就不一樣。',
      vis: { type: 'vs', sm: true, kick: '已經在做 vs 才開始做',
        a: { w: 'When my aunt arrived, we were making tea.', def: '阿姨到的時候，我們正在泡茶。', cn: '早就在泡 → 過去進行式' },
        b: { w: 'When my aunt arrived, we made tea.', def: '阿姨到了，我們才去泡茶。', cn: '到了才泡 → 過去簡單式' } } },
    { ch: 4, sp: 'A', en: 'When my aunt arrived, we were making tea.', cn: '阿姨到的時候，我們正在泡茶。',
      hi: [{ t: 'were making', cn: '早就在泡', k: 'bg', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '已經在做 vs 才開始做',
        a: { w: 'When my aunt arrived, we were making tea.', def: '阿姨到的時候，我們正在泡茶。', cn: '早就在泡 → 過去進行式' },
        b: { w: 'When my aunt arrived, we made tea.', def: '阿姨到了，我們才去泡茶。', cn: '到了才泡 → 過去簡單式' } } },
    { ch: 4, sp: 'T', en: 'When my aunt arrived, we made tea.', cn: '阿姨到了，我們才去泡茶。',
      hi: [{ t: 'made', cn: '到了才泡', k: 'ev', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '已經在做 vs 才開始做',
        a: { w: 'When my aunt arrived, we were making tea.', def: '阿姨到的時候，我們正在泡茶。', cn: '早就在泡 → 過去進行式' },
        b: { w: 'When my aunt arrived, we made tea.', def: '阿姨到了，我們才去泡茶。', cn: '到了才泡 → 過去簡單式' } } },
    { ch: 4, sp: 'N', zh: '第一句，阿姨進門前，我們已經在泡了；第二句，阿姨先到，我們接著才去泡。',
      vis: { type: 'vs', sm: true, kick: '已經在做 vs 才開始做',
        a: { w: 'When my aunt arrived, we were making tea.', def: '阿姨到的時候，我們正在泡茶。', cn: '早就在泡 → 過去進行式' },
        b: { w: 'When my aunt arrived, we made tea.', def: '阿姨到了，我們才去泡茶。', cn: '到了才泡 → 過去簡單式' } } },
    { ch: 4, sp: 'N', zh: '再看一組。後面接主詞加動詞，用 while；後面只接名詞，就換成 during。',
      vis: { type: 'vs', sm: true, kick: 'while vs during',
        a: { w: 'While we were hiking, it got foggy.', def: '我們在爬山的時候，起霧了。', cn: '接子句 → while' },
        b: { w: 'During the hike, it got foggy.', def: '爬山途中起霧了。', cn: '接名詞 → during' } } },
    { ch: 4, sp: 'A', en: 'While we were hiking, it got foggy.', cn: '我們在爬山的時候，起霧了。',
      hi: [{ t: 'While we were hiking', cn: 'while + 子句', k: 'bg', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: 'while vs during',
        a: { w: 'While we were hiking, it got foggy.', def: '我們在爬山的時候，起霧了。', cn: '接子句 → while' },
        b: { w: 'During the hike, it got foggy.', def: '爬山途中起霧了。', cn: '接名詞 → during' } } },
    { ch: 4, sp: 'T', en: 'During the hike, it got foggy.', cn: '爬山途中起霧了。',
      hi: [{ t: 'During the hike', cn: 'during + 名詞', k: 'both', c: 1 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: 'while vs during',
        a: { w: 'While we were hiking, it got foggy.', def: '我們在爬山的時候，起霧了。', cn: '接子句 → while' },
        b: { w: 'During the hike, it got foggy.', def: '爬山途中起霧了。', cn: '接名詞 → during' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '最後給你一個判斷流程。講過去的事，照順序問自己三個問題。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一問：這是那一刻正在進行的背景嗎？是的話，用過去進行式。',
      hi: [{ t: '過去進行式', k: 'bg', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'A', en: 'At noon, we were having a picnic by the river.', cn: '中午的時候，我們正在河邊野餐。',
      hi: [{ t: 'were having', cn: '背景', k: 'bg', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二問：這是一下子發生、做完的事嗎？是的話，用過去簡單式。',
      hi: [{ t: '過去簡單式', k: 'ev', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'T', en: 'Then a big dog ran off with our sandwiches.', cn: '結果一隻大狗把我們的三明治叼走了。',
      hi: [{ t: 'ran off', cn: '插進來的事', k: 'ev', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '第三問：兩件事都是一段，而且同時在進行嗎？是的話，兩邊都用過去進行式。',
      hi: [{ t: '兩邊都用過去進行式', k: 'both', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'A', en: 'While Dad was grilling the meat, the kids were playing frisbee.', cn: '爸爸在烤肉的時候，孩子們在玩飛盤。',
      hi: [{ t: 'was grilling', cn: '一段', k: 'both', c: 2 }, { t: 'were playing', cn: '同時另一段', k: 'both', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說說看。看到中文情境，先自己用英文說出來，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：你在慢跑的時候，耳機突然掉出來了。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '你在慢跑的時候，耳機突然掉出來了。' } },
    { ch: 6, sp: 'A', en: 'My earphones fell out while I was jogging.', cn: '我在慢跑的時候，耳機掉出來了。',
      hi: [{ t: 'fell out', cn: '那一下 → 過去簡單式', k: 'ev', c: 4 }, { t: 'was jogging', cn: '背景 → 過去進行式', k: 'bg', c: 3 }],
      vis: { type: 'speak', n: 1, show: true, sit: '你在慢跑的時候，耳機突然掉出來了。', a: 'My earphones fell out while I was jogging.' } },
    { ch: 6, sp: 'N', zh: '情境二：你在洗碗，同一段時間，你先生在倒垃圾。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '你在洗碗，同一段時間，你先生在倒垃圾。' } },
    { ch: 6, sp: 'T', en: 'While I was washing the dishes, my husband was taking out the trash.', cn: '我在洗碗的時候，我先生在倒垃圾。',
      hi: [{ t: 'was washing', cn: '一段', k: 'both', c: 2 }, { t: 'was taking out', cn: '同時另一段', k: 'both', c: 2 }],
      vis: { type: 'speak', n: 2, show: true, sit: '你在洗碗，同一段時間，你先生在倒垃圾。', a: 'While I was washing the dishes, my husband was taking out the trash.' } },
    { ch: 6, sp: 'N', zh: '情境三：你回到家的時候，你的狗正在咬你的拖鞋。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '你回到家的時候，你的狗正在咬你的拖鞋。' } },
    { ch: 6, sp: 'A', en: 'When I got home, my dog was chewing my slippers.', cn: '我回到家的時候，我的狗正在咬我的拖鞋。',
      hi: [{ t: 'got home', cn: '那一下', k: 'ev', c: 4 }, { t: 'was chewing', cn: '背景', k: 'bg', c: 3 }],
      vis: { type: 'speak', n: 3, show: true, sit: '你回到家的時候，你的狗正在咬你的拖鞋。', a: 'When I got home, my dog was chewing my slippers.' } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結一下：背景那一段，用過去進行式；插進來的那一下，用過去簡單式；兩段同時，兩邊都用進行式。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '下次講故事前，先分清楚：哪件是布景，哪件是主角？', vis: { type: 'end' } }
  ]
};
