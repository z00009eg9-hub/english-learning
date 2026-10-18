/* ============================================================
   B2 Read 文法影片解說 — dg20260821b1
   Grammar in Use Unit 3（I am doing / I do：暫時 vs 長期）B1＋狀態動詞
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
  var DB='#8b5a2b';
  var heart=function(cx,cy,s){ return '<path d="M'+cx+' '+(cy-8*s)+' c-'+(6*s)+' -'+(12*s)+' -'+(26*s)+' -'+(6*s)+' -'+(18*s)+' '+(10*s)+' l'+(18*s)+' '+(16*s)+' l'+(18*s)+' -'+(16*s)+' c'+(8*s)+' -'+(16*s)+' -'+(12*s)+' -'+(22*s)+' -'+(18*s)+' -'+(10*s)+' Z" fill="'+R+'" '+st+'/>'; };
  var key=function(x,y){ /* x,y＝鑰匙圈中心 */
    return '<rect x="'+(x+16)+'" y="'+(y-6)+'" width="70" height="12" rx="3" fill="'+Y+'" '+st+'/>'
      +'<path d="M'+(x+64)+' '+(y+6)+' v12 h8 v-12 M'+(x+76)+' '+(y+6)+' v8 h8 v-8" fill="'+Y+'" '+st+'/>'
      +'<circle cx="'+x+'" cy="'+y+'" r="22" fill="'+Y+'" '+st+'/><circle cx="'+x+'" cy="'+y+'" r="8" fill="#fff" '+st+'/>'; };
  var house=function(x,y,w,h,roof){ /* x,y＝牆左上 */
    return '<path d="M'+(x-10)+' '+(y+4)+' L'+(x+w/2)+' '+(y-h*0.6)+' L'+(x+w+10)+' '+(y+4)+' Z" fill="'+(roof||R)+'" '+st+'/>'
      +'<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" fill="'+C+'" '+st+'/>'
      +'<rect x="'+(x+w/2-w*0.12)+'" y="'+(y+h*0.44)+'" width="'+(w*0.24)+'" height="'+(h*0.56)+'" fill="'+L+'" '+st+'/>'; };

  Object.assign(window.GVIDEO_ART, {
    /* 長期：有煙囪的房子 */
    dg20260821b1_house: svg(
      '<line x1="10" y1="134" x2="190" y2="134" '+st+'/>'
     +'<rect x="126" y="30" width="16" height="30" fill="'+DB+'" '+st+'/>'
     +house(52,66,96,68)
     +'<rect x="62" y="80" width="20" height="18" fill="'+S+'" '+st+'/><rect x="118" y="80" width="20" height="18" fill="'+S+'" '+st+'/>'
     +'<circle cx="28" cy="112" r="16" fill="'+G+'" '+st+'/><circle cx="172" cy="114" r="14" fill="'+G+'" '+st+'/>'),
    /* 暫時：行李箱＋吊牌 */
    dg20260821b1_suitcase: svg(
      '<path d="M76 46 V34 a6 6 0 0 1 6 -6 H110 a6 6 0 0 1 6 6 V46" fill="none" '+th(5)+'/>'
     +'<rect x="44" y="46" width="104" height="80" rx="12" fill="'+A+'" '+st+'/>'
     +'<line x1="70" y1="50" x2="70" y2="122" stroke="'+L+'" stroke-width="7"/><line x1="122" y1="50" x2="122" y2="122" stroke="'+L+'" stroke-width="7"/>'
     +'<rect x="44" y="46" width="104" height="80" rx="12" fill="none" '+st+'/>'
     +'<circle cx="62" cy="132" r="6" fill="'+D+'"/><circle cx="130" cy="132" r="6" fill="'+D+'"/>'
     +'<path d="M116 40 Q150 40 158 64" fill="none" '+th(2.5)+'/>'
     +'<g transform="rotate(14 166 80)"><rect x="152" y="62" width="30" height="40" rx="5" fill="'+Y+'" '+st+'/><circle cx="167" cy="72" r="4" fill="#fff" '+th(2)+'/></g>'),
    /* 狀態動詞：想法泡泡裡的愛心 */
    dg20260821b1_think: svg(
      '<circle cx="40" cy="122" r="18" fill="'+L+'" '+st+'/><circle cx="34" cy="120" r="2.2" fill="'+D+'"/><circle cx="46" cy="120" r="2.2" fill="'+D+'"/>'
     +'<circle cx="64" cy="98" r="5" fill="#fff" '+th(2.5)+'/><circle cx="78" cy="84" r="7" fill="#fff" '+th(2.5)+'/>'
     +'<path d="M86 76 a20 20 0 0 1 4 -38 a26 26 0 0 1 48 -12 a22 22 0 0 1 36 18 a18 18 0 0 1 -4 34 Z" fill="#fff" '+st+'/>'
     +heart(130,58,1.15)),

    /* 情境開場：超市推車 */
    dg20260821b1_market: svg(
      '<circle cx="84" cy="48" r="13" fill="'+R+'" '+th(2.5)+'/><path d="M84 35 q4 -8 10 -8" fill="none" '+th(2.5)+'/>'
     +'<rect x="104" y="26" width="22" height="34" fill="#fff" '+th(2.5)+'/><path d="M104 26 l11 -10 l11 10" fill="#fff" '+th(2.5)+'/>'
     +'<rect x="132" y="40" width="30" height="20" rx="9" fill="'+Y+'" '+th(2.5)+'/>'
     +'<path d="M14 36 H36 L60 112 H160" fill="none" '+th(4)+'/>'
     +'<path d="M40 54 H176 L162 100 H56 Z" fill="'+S+'" '+st+'/>'
     +'<path d="M70 54 L76 100 M100 54 V100 M130 54 L126 100" '+th(2)+'/>'
     +'<circle cx="72" cy="128" r="9" fill="'+D+'"/><circle cx="148" cy="128" r="9" fill="'+D+'"/>'),
    /* 情境 1：你怎麼在台北？——城市裡的定位圖釘＋問號 */
    dg20260821b1_askwhy: svg(
      '<line x1="8" y1="134" x2="192" y2="134" '+st+'/>'
     +'<rect x="16" y="80" width="26" height="54" fill="'+S+'" '+st+'/><rect x="46" y="62" width="22" height="72" fill="'+S+'" '+st+'/>'
     +'<rect x="132" y="70" width="24" height="64" fill="'+S+'" '+st+'/><rect x="160" y="90" width="26" height="44" fill="'+S+'" '+st+'/>'
     +'<path d="M100 128 C80 98 66 84 66 62 a34 34 0 0 1 68 0 C134 84 120 98 100 128 Z" fill="'+R+'" '+st+'/>'
     +'<circle cx="100" cy="62" r="12" fill="#fff" '+st+'/>'
     +qb(170,34)),
    /* 情境 2：這個月在上培訓課——白板＋筆電 */
    dg20260821b1_course: svg(
      '<line x1="44" y1="96" x2="32" y2="138" '+th(4)+'/><line x1="110" y1="96" x2="122" y2="138" '+th(4)+'/>'
     +'<rect x="18" y="18" width="118" height="80" rx="4" fill="#fff" '+st+'/>'
     +'<rect x="34" y="62" width="16" height="24" fill="'+B+'" '+th(2.5)+'/><rect x="58" y="48" width="16" height="38" fill="'+G+'" '+th(2.5)+'/><rect x="82" y="36" width="16" height="50" fill="'+A+'" '+th(2.5)+'/>'
     +'<line x1="28" y1="86" x2="124" y2="86" '+th(2.5)+'/>'
     +'<rect x="140" y="88" width="50" height="34" rx="3" fill="'+S+'" '+st+'/><path d="M132 122 H198 L192 132 H138 Z" fill="#c9c2b8" '+st+'/>'),
    /* 情境 3：你還住高雄嗎？——對話框裡的房子＋問號 */
    dg20260821b1_askhome: svg(
      '<path d="M44 104 L36 130 L66 106" fill="#fff" '+st+'/>'
     +'<rect x="14" y="20" width="124" height="88" rx="16" fill="#fff" '+st+'/>'
     +house(52,62,48,34,A)
     +qb(170,36)),
    /* 情境 4：跟太太住那裡——房子＋椰子樹＋愛心 */
    dg20260821b1_home: svg(
      '<line x1="8" y1="134" x2="192" y2="134" '+st+'/>'
     +'<path d="M40 134 Q34 96 46 64" fill="none" stroke="'+DB+'" stroke-width="9" stroke-linecap="round"/>'
     +'<path d="M46 64 q-24 -6 -34 10 M46 64 q-16 -20 -36 -16 M46 64 q8 -24 30 -22 M46 64 q24 -4 32 14" fill="none" stroke="'+G+'" stroke-width="7" stroke-linecap="round"/>'
     +house(92,80,78,54)
     +'<rect x="100" y="92" width="16" height="14" fill="'+S+'" '+th(2.5)+'/><rect x="146" y="92" width="16" height="14" fill="'+S+'" '+th(2.5)+'/>'
     +heart(131,30,0.75)
     +'<circle cx="176" cy="22" r="10" fill="'+Y+'" '+th(2.5)+'/>'),
    /* 情境 5：長期 vs 這個月——房子對照沙漏 */
    dg20260821b1_hourglass: svg(
      '<line x1="10" y1="132" x2="96" y2="132" '+st+'/>'
     +house(26,86,54,46)
     +'<rect x="114" y="22" width="62" height="10" rx="3" fill="'+DB+'" '+st+'/><rect x="114" y="120" width="62" height="10" rx="3" fill="'+DB+'" '+st+'/>'
     +'<path d="M122 32 H168 Q168 62 145 76 Q168 90 168 120 H122 Q122 90 145 76 Q122 62 122 32 Z" fill="'+S+'" '+st+'/>'
     +'<path d="M132 52 H158 Q154 64 145 70 Q136 64 132 52 Z" fill="'+Y+'"/><path d="M128 118 Q145 96 162 118 Z" fill="'+Y+'"/>'
     +'<line x1="145" y1="76" x2="145" y2="104" stroke="'+Y+'" stroke-width="3"/>'),
    /* 情境 6：那你住哪裡？——鑰匙＋問號 */
    dg20260821b1_askstay: svg(
      key(58,80)
     +qb(168,36)),
    /* 情境 7：小旅館 */
    dg20260821b1_hotel: svg(
      '<line x1="10" y1="136" x2="190" y2="136" '+st+'/>'
     +'<rect x="54" y="30" width="92" height="106" fill="'+L+'" '+st+'/>'
     +'<rect x="62" y="12" width="76" height="22" rx="4" fill="'+B+'" '+st+'/>'+txt(100,29,'HOTEL',15,'#fff')
     +'<g fill="'+S+'" '+th(2.5)+'><rect x="64" y="44" width="18" height="16"/><rect x="91" y="44" width="18" height="16"/><rect x="118" y="44" width="18" height="16"/>'
     +'<rect x="64" y="70" width="18" height="16"/><rect x="91" y="70" width="18" height="16"/><rect x="118" y="70" width="18" height="16"/></g>'
     +'<rect x="86" y="102" width="28" height="34" fill="'+DB+'" '+st+'/>'
     +'<path d="M150 52 a10 10 0 0 1 18 -6 a12 12 0 0 1 20 10 a8 8 0 0 1 -4 14 H154 a8 8 0 0 1 -4 -18 Z" fill="#c9c2b8" '+th(2.5)+'/>'),
    /* 情境 8：我們有一間空房——床＋窗戶 */
    dg20260821b1_room: svg(
      '<rect x="112" y="18" width="62" height="46" rx="3" fill="'+S+'" '+st+'/><path d="M143 18 V64 M112 41 H174" '+th(2.5)+'/>'
     +'<rect x="22" y="58" width="16" height="74" rx="3" fill="'+DB+'" '+st+'/>'
     +'<line x1="168" y1="114" x2="168" y2="132" '+th(5)+'/>'
     +'<rect x="34" y="94" width="142" height="22" rx="4" fill="#fff" '+st+'/>'
     +'<ellipse cx="60" cy="90" rx="20" ry="9" fill="#fff" '+st+'/>'
     +'<rect x="84" y="86" width="94" height="32" rx="6" fill="'+G+'" '+st+'/>'),
    /* 情境 9：like 是感覺、have 是擁有——愛心＋鑰匙 */
    dg20260821b1_heartkey: svg(
      heart(46,86,1.4)
     +key(100,80))
  });
})();

/* ============================================================
   dg20260821b1 — For Now or for Good?
   Grammar in Use Unit 3（暫時 vs 長期）＋狀態動詞
   ============================================================ */
window.GVIDEO.dg20260821b1 = {
  kind: 'gram',
  date: '2026-08-21',
  title: 'For Now or for Good?',
  titleCn: '暫時還是長期？再加上不用進行式的狀態動詞',
  titleArt: ['dg20260821b1_house', 'dg20260821b1_suitcase', 'dg20260821b1_think'],
  scene: '巧遇老同學 Meeting an old friend',
  sceneArt: 'dg20260821b1_market',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Grace', voice: 'f' },
    T: { name: 'Kevin', voice: 'm' }
  },
  expr: {
    perm:  { t: 'live / work（長期）', cn: '長期、一直如此 → 現在簡單式', ex: 'My aunt runs a small bakery in Chiayi.', exCn: '我阿姨在嘉義開一家小麵包店。', note: '住哪裡、做什麼工作、身分，這些「基本設定」用簡單式' },
    temp:  { t: 'be + V-ing（這陣子）', cn: '只有這一陣子、之後會變 → 現在進行式', ex: "I'm sharing an office with Tina until our new desks arrive.", exCn: '在新桌子送來之前，我暫時跟 Tina 共用辦公室。', note: '常配 this week、this month、at the moment、for now' },
    state: { t: 'know / like / want / need …', cn: '想法、感覺、擁有 → 狀態動詞通常不用進行式', ex: 'I really need a vacation.', exCn: '我真的很需要放個假。', note: 'have 當「擁有」不用進行式；當「吃、喝、經歷」可以用' }
  },
  chapters: [
    { cn: '開場' }, { cn: '長期還是暫時？' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  cardsKick: 'For now or for good? 暫時還是長期？',
  cards: [
    { art: 'dg20260821b1_house',    lab: '現在簡單式', who: '長期、一直如此' },
    { art: 'dg20260821b1_suitcase', lab: '現在進行式', who: '只有這一陣子' },
    { art: 'dg20260821b1_think',    lab: '狀態動詞',   who: '想法・感覺・擁有' }
  ],
  flow: [
    { q: '這件事是長期、一直如此嗎？',   a: '現在簡單式', en: '主詞 + 動詞(s)' },
    { q: '只是這一陣子、之後會變嗎？',   a: '現在進行式', en: '主詞 + am / is / are + V-ing' },
    { q: '最後檢查：動詞是想法、感覺、擁有？', a: '用簡單式', en: 'know / like / want / need / have（擁有）' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: '現在簡單式和現在進行式，除了分「習慣」跟「現在」，還有一條線：長期還是暫時。', vis: { type: 'title' } },

    /* ---- 1 核心：長期還是暫時？ ---- */
    { ch: 1, sp: 'N', zh: '先問自己：這件事是長期的，還是只有這一陣子？', vis: { type: 'cards', show: 0 } },
    { ch: 1, sp: 'N', zh: '長期、一直都是這樣的事，像住在哪裡、在哪裡工作，用現在簡單式。',
      hi: [{ t: '現在簡單式', k: 'perm', c: 3 }], vis: { type: 'cards', show: 1, pop: true } },
    { ch: 1, sp: 'A', en: 'My parents live in Tainan.', cn: '我爸媽住在台南。',
      hi: [{ t: 'live', cn: '長期住', k: 'perm', c: 3 }], vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'N', zh: '只有這一陣子、之後會變的事，用現在進行式。進行式本身就帶著「暫時」的感覺。',
      hi: [{ t: '現在進行式', k: 'temp', c: 4 }], vis: { type: 'cards', show: 2, pop: true } },
    { ch: 1, sp: 'T', en: "I'm staying at a friend's place this month.", cn: '我這個月暫時住在朋友家。',
      hi: [{ t: "I'm staying", cn: '暫時住', k: 'temp', c: 4 }], vis: { type: 'cards', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: '還有一群動詞比較特別，講的是想法、感覺或擁有，叫做狀態動詞。',
      hi: [{ t: '狀態動詞', k: 'state', c: 2 }], vis: { type: 'cards', show: 3, pop: true } },
    { ch: 1, sp: 'A', en: 'I know what you mean.', cn: '我懂你的意思。',
      hi: [{ t: 'know', cn: '狀態動詞', k: 'state', c: 2 }], vis: { type: 'cards', show: 3, lit: 2 } },
    { ch: 1, sp: 'N', zh: '狀態動詞通常不用進行式。就算講的是現在這一刻，也用現在簡單式。',
      hi: [{ t: '狀態動詞', k: 'state', c: 2 }], vis: { type: 'cards', show: 3 } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: '長期跟暫時放在一起比：同一個動詞，簡單式是常態，進行式是這陣子。',
      vis: { type: 'pattern', kick: '常態 vs 這陣子', rows: [
        { lab: '常態', blocks: [{ t: 'She', k: 's' }, { t: 'works', k: 'v' }, { t: 'at a hospital', k: 'n' }] },
        { lab: '這陣子', blocks: [{ t: 'She', k: 's' }, { t: 'is working', k: 'v' }, { t: 'at a clinic', k: 'n' }, { t: 'this month', k: 'o', add: true }] }
      ], note: '暫時的常配 this week、this month、at the moment' } },
    { ch: 2, sp: 'N', zh: '常見的狀態動詞有這幾組：知道、了解；喜歡、想要、需要；相信、記得；屬於、意思是。',
      hi: [{ t: '狀態動詞', k: 'state', c: 2 }],
      vis: { type: 'family', kick: 'State verbs 狀態動詞', core: 'State verbs', coreCn: '通常不用進行式', art: 'dg20260821b1_think', items: [
        { t: 'know · understand', cn: '知道・了解' }, { t: 'like · want · need', cn: '喜歡・想要・需要' },
        { t: 'believe · remember', cn: '相信・記得' }, { t: 'belong · mean', cn: '屬於・意思是' }
      ] } },
    { ch: 2, sp: 'N', zh: 'have 要看意思：have 是「擁有」，是狀態，不用進行式；have 是吃、喝、經歷，是動作，就可以用進行式。',
      vis: { type: 'pattern', kick: 'have 的兩個意思', rows: [
        { lab: '擁有', blocks: [{ t: 'We', k: 's' }, { t: 'have', k: 'v' }, { t: 'two cats', k: 'n' }] },
        { lab: '吃飯', blocks: [{ t: 'We', k: 's' }, { t: 'are having', k: 'v' }, { t: 'lunch', k: 'n' }, { t: 'now', k: 'o' }] }
      ], note: 'have lunch、have a shower、have a good time 是動作' } },
    { ch: 2, sp: 'N', zh: 'think 也一樣：表示「我認為」，不用進行式；表示「正在考慮」，就可以說 thinking about。',
      vis: { type: 'pattern', kick: 'think 的兩個意思', rows: [
        { lab: '認為', blocks: [{ t: 'I', k: 's' }, { t: 'think', k: 'v' }, { t: "it's a good idea", k: 'n' }] },
        { lab: '考慮', blocks: [{ t: 'I', k: 's' }, { t: 'am thinking about', k: 'v' }, { t: 'a new job', k: 'n' }] }
      ] } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: 'Grace 在超市遇到老同學 Kevin。聽聽看，哪些是長期的，哪些只是暫時的。', vis: { type: 'scene', art: 'dg20260821b1_market' } },
    { ch: 3, sp: 'A', en: 'Kevin! What are you doing in Taipei?', cn: 'Kevin！你怎麼會在台北？', vis: { type: 'scene', art: 'dg20260821b1_askwhy' } },
    { ch: 3, sp: 'T', en: "I'm taking a training course here this month.", cn: '我這個月在這裡上培訓課。',
      hi: [{ t: "I'm taking", cn: '只有這個月', k: 'temp', c: 4 }], vis: { type: 'scene', art: 'dg20260821b1_course' } },
    { ch: 3, sp: 'A', en: 'So you still live in Kaohsiung?', cn: '所以你還是住高雄？',
      hi: [{ t: 'live', cn: '長期住', k: 'perm', c: 3 }], vis: { type: 'scene', art: 'dg20260821b1_askhome' } },
    { ch: 3, sp: 'T', en: 'Yes, I live there with my wife.', cn: '對，我跟我太太住那裡。',
      hi: [{ t: 'live', cn: '長期住', k: 'perm', c: 3 }], vis: { type: 'scene', art: 'dg20260821b1_home' } },
    { ch: 3, sp: 'N', zh: '住高雄是長期的，所以用 live；在台北上課只有這個月，所以用 I\'m taking。',
      hi: [{ t: 'live', k: 'perm', c: 3 }, { t: "I'm taking", k: 'temp', c: 4 }], vis: { type: 'scene', art: 'dg20260821b1_hourglass' } },
    { ch: 3, sp: 'A', en: 'Where are you staying?', cn: '那你現在住哪裡？',
      hi: [{ t: 'are you staying', cn: '暫時住', k: 'temp', c: 4 }], vis: { type: 'scene', art: 'dg20260821b1_askstay' } },
    { ch: 3, sp: 'T', en: "At a small hotel. I don't like it much.", cn: '住一間小旅館，我不太喜歡。',
      hi: [{ t: "don't like", cn: '感覺', k: 'state', c: 2 }], vis: { type: 'scene', art: 'dg20260821b1_hotel' } },
    { ch: 3, sp: 'A', en: 'Come and stay with us. We have a spare room.', cn: '來我們家住吧，我們有一間空房。',
      hi: [{ t: 'have', cn: '擁有', k: 'state', c: 2 }], vis: { type: 'scene', art: 'dg20260821b1_room' } },
    { ch: 3, sp: 'N', zh: 'like 是感覺，have 在這裡是擁有，都是狀態，所以都用簡單式。',
      hi: [{ t: 'like', k: 'state', c: 2 }, { t: 'have', k: 'state', c: 2 }], vis: { type: 'scene', art: 'dg20260821b1_heartkey' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '同樣是工作，換一個時態，聽的人就知道是長期還是暫時。',
      vis: { type: 'vs', sm: true, kick: '正職 vs 暫時',
        a: { w: 'My uncle drives a taxi.', def: '我舅舅是開計程車的。', cn: '長期的工作 → 簡單式' },
        b: { w: 'My uncle is driving a taxi for now.', def: '我舅舅暫時在開計程車。', cn: '暫時的工作 → 進行式' } } },
    { ch: 4, sp: 'A', en: 'My uncle drives a taxi.', cn: '我舅舅是開計程車的。',
      hi: [{ t: 'drives', cn: '長期', k: 'perm', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '正職 vs 暫時',
        a: { w: 'My uncle drives a taxi.', def: '我舅舅是開計程車的。', cn: '長期的工作 → 簡單式' },
        b: { w: 'My uncle is driving a taxi for now.', def: '我舅舅暫時在開計程車。', cn: '暫時的工作 → 進行式' } } },
    { ch: 4, sp: 'T', en: 'My uncle is driving a taxi for now.', cn: '我舅舅暫時在開計程車。',
      hi: [{ t: 'is driving', cn: '暫時', k: 'temp', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '正職 vs 暫時',
        a: { w: 'My uncle drives a taxi.', def: '我舅舅是開計程車的。', cn: '長期的工作 → 簡單式' },
        b: { w: 'My uncle is driving a taxi for now.', def: '我舅舅暫時在開計程車。', cn: '暫時的工作 → 進行式' } } },
    { ch: 4, sp: 'N', zh: '第一句，開計程車就是他的工作；第二句聽起來只是過渡期，之後他可能會換工作。',
      vis: { type: 'vs', sm: true, kick: '正職 vs 暫時',
        a: { w: 'My uncle drives a taxi.', def: '我舅舅是開計程車的。', cn: '長期的工作 → 簡單式' },
        b: { w: 'My uncle is driving a taxi for now.', def: '我舅舅暫時在開計程車。', cn: '暫時的工作 → 進行式' } } },
    { ch: 4, sp: 'N', zh: '再看 have。擁有是狀態，用簡單式；喝茶是動作，可以用進行式。',
      vis: { type: 'vs', sm: true, kick: 'have：擁有 vs 動作',
        a: { w: 'Nina has a lovely garden.', def: 'Nina 有一座很漂亮的花園。', cn: '擁有 → 簡單式' },
        b: { w: 'Nina is having tea in the garden.', def: 'Nina 正在花園裡喝茶。', cn: '喝茶是動作 → 進行式' } } },
    { ch: 4, sp: 'A', en: 'Nina has a lovely garden.', cn: 'Nina 有一座很漂亮的花園。',
      hi: [{ t: 'has', cn: '擁有', k: 'state', c: 2 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: 'have：擁有 vs 動作',
        a: { w: 'Nina has a lovely garden.', def: 'Nina 有一座很漂亮的花園。', cn: '擁有 → 簡單式' },
        b: { w: 'Nina is having tea in the garden.', def: 'Nina 正在花園裡喝茶。', cn: '喝茶是動作 → 進行式' } } },
    { ch: 4, sp: 'T', en: 'Nina is having tea in the garden.', cn: 'Nina 正在花園裡喝茶。',
      hi: [{ t: 'is having', cn: '動作', k: 'temp', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: 'have：擁有 vs 動作',
        a: { w: 'Nina has a lovely garden.', def: 'Nina 有一座很漂亮的花園。', cn: '擁有 → 簡單式' },
        b: { w: 'Nina is having tea in the garden.', def: 'Nina 正在花園裡喝茶。', cn: '喝茶是動作 → 進行式' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '最後給你一個判斷流程。前兩題看時間長短，最後一題檢查動詞。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一問：這件事是長期、一直如此嗎？是的話，用現在簡單式。',
      hi: [{ t: '現在簡單式', k: 'perm', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'A', en: 'Our company makes bike parts.', cn: '我們公司是做腳踏車零件的。',
      hi: [{ t: 'makes', cn: '長期', k: 'perm', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二問：只是這一陣子、之後會變嗎？是的話，用現在進行式。',
      hi: [{ t: '現在進行式', k: 'temp', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'T', en: "I'm sleeping on the sofa this week.", cn: '我這個禮拜暫時睡沙發。',
      hi: [{ t: "I'm sleeping", cn: '這陣子', k: 'temp', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '最後檢查動詞：如果是想法、感覺或擁有，通常用簡單式，不管長期還是暫時。',
      hi: [{ t: '想法、感覺或擁有', k: 'state', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'A', en: 'This umbrella belongs to my sister.', cn: '這把傘是我姊姊的。',
      hi: [{ t: 'belongs', cn: '狀態動詞', k: 'state', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說說看。看到中文情境，先自己用英文說出來，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：公司派你去花蓮支援，你跟朋友說，這個月你在花蓮上班。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '公司派你去花蓮支援，你跟朋友說，這個月你在花蓮上班。' } },
    { ch: 6, sp: 'A', en: "I'm working in Hualien this month.", cn: '我這個月在花蓮上班。',
      hi: [{ t: "I'm working", cn: '暫時 → 進行式', k: 'temp', c: 4 }],
      vis: { type: 'speak', n: 1, show: true, sit: '公司派你去花蓮支援，你跟朋友說，這個月你在花蓮上班。', a: "I'm working in Hualien this month." } },
    { ch: 6, sp: 'N', zh: '情境二：同事問你要不要幫忙，你說你現在真的需要一點幫忙。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '同事問你要不要幫忙，你說你現在真的需要一點幫忙。' } },
    { ch: 6, sp: 'T', en: 'I need some help right now.', cn: '我現在需要一點幫忙。',
      hi: [{ t: 'need', cn: '狀態動詞 → 簡單式', k: 'state', c: 2 }],
      vis: { type: 'speak', n: 2, show: true, sit: '同事問你要不要幫忙，你說你現在真的需要一點幫忙。', a: 'I need some help right now.' } },
    { ch: 6, sp: 'N', zh: '情境三：介紹你的表姊，她住在台中，在一間小學教書。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '介紹你的表姊，她住在台中，在一間小學教書。' } },
    { ch: 6, sp: 'A', en: 'My cousin lives in Taichung and teaches at an elementary school.', cn: '我表姊住在台中，在一間小學教書。',
      hi: [{ t: 'lives', cn: '長期 → 簡單式', k: 'perm', c: 3 }],
      vis: { type: 'speak', n: 3, show: true, sit: '介紹你的表姊，她住在台中，在一間小學教書。', a: 'My cousin lives in Taichung and teaches at an elementary school.' } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結一下：長期的用簡單式，暫時的用進行式；遇到 know、like、want 這種狀態動詞，通常用簡單式。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '下次開口前，先想想：這是長期的，還是只有這一陣子？', vis: { type: 'end' } }
  ]
};
