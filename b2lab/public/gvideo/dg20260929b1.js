/* ============================================================
   B2 Read 文法影片解說 — dg20260929b1（Unit 15 · B1）
   格式與規則見 b2lab/tools/GVIDEO_SPEC.md；範本 gvideo/dg20261014b1.js。
   註：播放器的 timeline 把「現在」固定在最左邊，過去完成式放上去會像在講未來，
   所以這支用 cards。
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
  var shirt=function(cx,y,col){ return '<path d="M'+(cx-14)+' '+y+' L'+(cx-36)+' '+(y+12)+' L'+(cx-28)+' '+(y+30)+' L'+(cx-20)+' '+(y+26)+' V'+(y+70)+' H'+(cx+20)+' V'+(y+26)+' L'+(cx+28)+' '+(y+30)+' L'+(cx+36)+' '+(y+12)+' L'+(cx+14)+' '+y+' q-14 12 -28 0 Z" fill="'+col+'" '+st+'/>'; };
  var hanger=function(cx,y){ return '<path d="M'+cx+' '+y+' v-6 a5 5 0 1 1 5 -5 M'+cx+' '+y+' L'+(cx-18)+' '+(y+14)+' H'+(cx+18)+' Z" fill="none" '+th(2.5)+'/>'; };

  Object.assign(window.GVIDEO_ART, {
    /* 主時間點：地圖圖釘釘在一個點上 */
    dg20260929b1_pin: svg(
      '<line x1="10" y1="118" x2="190" y2="118" '+th(4)+'/>'
     +'<g fill="'+D+'"><circle cx="30" cy="118" r="4"/><circle cx="60" cy="118" r="4"/><circle cx="140" cy="118" r="4"/><circle cx="170" cy="118" r="4"/></g>'
     +'<path d="M100 116 C82 90 70 76 70 56 a30 30 0 0 1 60 0 C130 76 118 90 100 116 Z" fill="'+B+'" '+st+'/>'
     +'<circle cx="100" cy="56" r="11" fill="#fff" '+st+'/>'),
    /* 更早的事：從圖釘往回指的箭頭 */
    dg20260929b1_back: svg(
      '<line x1="10" y1="118" x2="190" y2="118" '+th(4)+'/>'
     +'<path d="M150 116 C138 98 130 88 130 74 a20 20 0 0 1 40 0 C170 88 162 98 150 116 Z" fill="#c9c2b8" '+st+'/>'
     +'<circle cx="150" cy="74" r="7" fill="#fff" '+th(2.5)+'/>'
     +'<path d="M118 80 C96 50 70 50 50 76" fill="none" stroke="'+G+'" stroke-width="7" stroke-linecap="round"/>'
     +'<path d="M40 64 L48 82 L64 74" fill="none" stroke="'+G+'" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>'
     +'<circle cx="50" cy="104" r="12" fill="'+G+'" '+st+'/>'),
    /* 照順序講：1 → 2 → 3 */
    dg20260929b1_steps: svg(
      '<rect x="10" y="54" width="44" height="44" rx="8" fill="#f4a6b8" '+st+'/>'+txt(32,84,'1',22)
     +'<rect x="78" y="54" width="44" height="44" rx="8" fill="#f4a6b8" '+st+'/>'+txt(100,84,'2',22)
     +'<rect x="146" y="54" width="44" height="44" rx="8" fill="#f4a6b8" '+st+'/>'+txt(168,84,'3',22)
     +'<path d="M58 76 H74 M66 69 L74 76 L66 83 M126 76 H142 M134 69 L142 76 L134 83" fill="none" '+th(3.5)+'/>'),

    /* 情境開場：演唱會舞台＋聚光燈 */
    dg20260929b1_stage: svg(
      '<rect x="0" y="0" width="200" height="150" fill="#33405c"/>'
     +'<path d="M40 10 L18 104 H62 Z" fill="'+Y+'" opacity=".45"/><path d="M160 10 L138 104 H182 Z" fill="'+Y+'" opacity=".45"/>'
     +'<rect x="10" y="104" width="180" height="20" fill="#a0673f" '+st+'/>'
     +'<circle cx="100" cy="70" r="12" fill="'+L+'" '+st+'/><path d="M84 104 v-12 a16 16 0 0 1 32 0 v12 Z" fill="'+R+'" '+st+'/>'
     +'<g fill="'+D+'"><circle cx="30" cy="142" r="10"/><circle cx="62" cy="144" r="10"/><circle cx="96" cy="142" r="10"/><circle cx="130" cy="144" r="10"/><circle cx="166" cy="142" r="10"/></g>'),
    /* 情境 1：有趕上演唱會嗎？——門票＋問號 */
    dg20260929b1_ticketQ: svg(
      '<g transform="rotate(-10 90 80)"><path d="M24 50 H156 V68 a12 12 0 0 0 0 24 V110 H24 V92 a12 12 0 0 0 0 -24 Z" fill="'+Y+'" '+st+'/>'
     +'<line x1="120" y1="52" x2="120" y2="108" stroke="'+D+'" stroke-width="2" stroke-dasharray="4 4"/>'
     +'<path d="M54 92 V66 l24 -6 V86" fill="none" '+th(3.5)+'/><circle cx="50" cy="92" r="6" fill="'+D+'"/><circle cx="74" cy="86" r="6" fill="'+D+'"/></g>'
     +qb(172,36)),
    /* 情境 2：已經唱了兩首——吉他＋音符 */
    dg20260929b1_guitar: svg(
      '<g transform="rotate(-35 90 84)">'
     +'<rect x="84" y="10" width="14" height="70" fill="#a0673f" '+st+'/><rect x="80" y="2" width="22" height="16" rx="3" fill="'+D+'"/>'
     +'<path d="M91 74 c-26 0 -34 18 -24 32 c-14 14 -6 38 24 38 c30 0 38 -24 24 -38 c10 -14 2 -32 -24 -32 Z" fill="'+A+'" '+st+'/>'
     +'<circle cx="91" cy="104" r="8" fill="'+D+'"/></g>'
     +'<path d="M150 70 V36 l26 -8 V62" fill="none" '+th(3.5)+'/><circle cx="145" cy="70" r="7" fill="'+B+'" '+st+'/><circle cx="171" cy="62" r="7" fill="'+B+'" '+st+'/>'
     +txt(162,110,'x2',22,R)),
    /* 情境 3：進場＝主時間點——入口＋箭頭＋圖釘 */
    dg20260929b1_doorIn: svg(
      '<line x1="8" y1="136" x2="192" y2="136" '+st+'/>'
     +'<rect x="92" y="30" width="76" height="106" rx="4" fill="#33405c" '+st+'/>'
     +'<path d="M92 30 h76 v14 h-76 Z" fill="'+R+'" '+st+'/>'
     +'<path d="M20 96 H74 M60 82 L76 96 L60 110" fill="none" stroke="'+G+'" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>'
     +'<path d="M130 120 C120 106 114 98 114 88 a16 16 0 0 1 32 0 C146 98 140 106 130 120 Z" fill="'+B+'" '+st+'/><circle cx="130" cy="88" r="6" fill="#fff" '+th(2.5)+'/>'),
    /* 情境 4：怎麼遲到了？——時鐘＋問號 */
    dg20260929b1_clockQ: svg(
      '<circle cx="86" cy="80" r="50" fill="#fff" '+th(4)+'/>'
     +'<path d="M86 80 V44" '+th(5)+'/><path d="M86 80 L114 92" stroke="'+A+'" stroke-width="6" stroke-linecap="round"/>'
     +'<circle cx="86" cy="80" r="5" fill="'+D+'"/>'
     +'<path d="M48 28 l-12 -10 M124 28 l12 -10" '+th(5)+'/>'
     +qb(164,34)),
    /* 情境 5：火車停了二十分鐘——火車＋停止號誌 */
    dg20260929b1_train: svg(
      '<line x1="8" y1="134" x2="192" y2="134" '+st+'/>'
     +'<rect x="14" y="54" width="120" height="66" rx="14" fill="'+G+'" '+st+'/>'
     +'<rect x="26" y="66" width="26" height="22" rx="3" fill="'+S+'" '+st+'/><rect x="60" y="66" width="26" height="22" rx="3" fill="'+S+'" '+st+'/><rect x="94" y="66" width="26" height="22" rx="3" fill="'+S+'" '+st+'/>'
     +'<circle cx="40" cy="124" r="9" fill="'+D+'"/><circle cx="108" cy="124" r="9" fill="'+D+'"/>'
     +'<line x1="168" y1="62" x2="168" y2="134" '+th(4)+'/>'
     +'<path d="M156 26 h24 l12 12 v20 l-12 12 h-24 l-12 -12 v-20 Z" fill="'+R+'" '+st+'/>'
     +'<path d="M158 48 h20" stroke="#fff" stroke-width="5" stroke-linecap="round"/>'),
    /* 情境 6：照順序：先停車，再錯過——1 火車 → 2 錯過的音符 */
    dg20260929b1_seq: svg(
      '<rect x="12" y="44" width="62" height="62" rx="10" fill="#fff" '+st+'/>'
     +'<rect x="20" y="62" width="46" height="28" rx="7" fill="'+G+'" '+th(2.5)+'/><rect x="26" y="68" width="12" height="9" fill="'+S+'" '+th(2)+'/><rect x="44" y="68" width="12" height="9" fill="'+S+'" '+th(2)+'/>'
     +'<circle cx="20" cy="42" r="12" fill="#f4a6b8" '+st+'/>'+txt(20,48,'1',14)
     +'<path d="M82 75 H112 M102 66 L114 75 L102 84" fill="none" '+th(4)+'/>'
     +'<rect x="124" y="44" width="62" height="62" rx="10" fill="#fff" '+st+'/>'
     +'<path d="M146 92 V62 l20 -6 V86" fill="none" '+th(3.5)+'/><circle cx="142" cy="92" r="5" fill="'+D+'"/><circle cx="162" cy="86" r="5" fill="'+D+'"/>'
     +'<path d="M134 54 L178 98" stroke="'+R+'" stroke-width="5" stroke-linecap="round"/>'
     +'<circle cx="132" cy="42" r="12" fill="#f4a6b8" '+st+'/>'+txt(132,48,'2',14)),
    /* 情境 7：有買到 T 恤嗎？——T 恤＋問號 */
    dg20260929b1_shirtQ: svg(
      shirt(88,40,B)
     +'<path d="M78 70 l10 -8 l10 8 l-10 8 Z" fill="'+Y+'" '+th(2.5)+'/>'
     +qb(166,40)),
    /* 情境 8：已經賣光了——空衣架 */
    dg20260929b1_rack: svg(
      '<line x1="20" y1="30" x2="180" y2="30" '+th(5)+'/>'
     +'<line x1="28" y1="30" x2="28" y2="136" '+th(4)+'/><line x1="172" y1="30" x2="172" y2="136" '+th(4)+'/>'
     +'<line x1="14" y1="136" x2="42" y2="136" '+th(4)+'/><line x1="158" y1="136" x2="186" y2="136" '+th(4)+'/>'
     +hanger(60,46)+hanger(100,46)+hanger(140,46)
     +'<rect x="70" y="92" width="60" height="30" rx="5" fill="#fff" '+st+'/>'+txt(100,114,'0',20,R)),
    /* 情境 9：賣光比走到攤位更早——攤位＋SOLD 牌 */
    dg20260929b1_soldSign: svg(
      '<line x1="8" y1="136" x2="192" y2="136" '+st+'/>'
     +'<rect x="30" y="76" width="140" height="60" fill="'+L+'" '+st+'/>'
     +'<path d="M22 50 H178 L170 72 H30 Z" fill="'+B+'" '+st+'/>'
     +'<path d="M56 50 L52 72 M100 50 V72 M144 50 L148 72" stroke="#fff" stroke-width="8"/>'
     +'<path d="M22 50 H178 L170 72 H30 Z" fill="none" '+st+'/>'
     +'<g transform="rotate(-8 100 104)"><rect x="54" y="88" width="92" height="34" rx="5" fill="'+R+'" '+st+'/>'+txt(100,113,'SOLD',22,'#fff')+'</g>')
  });
})();

/* ============================================================
   dg20260929b1 — Find the Main Moment
   Grammar in Use Unit 15（Past perfect: I had done）
   ============================================================ */
window.GVIDEO.dg20260929b1 = {
  kind: 'gram',
  date: '2026-09-29',
  title: 'Find the Main Moment',
  titleCn: 'had done 還是 did？先找主時間點',
  titleArt: ['dg20260929b1_pin', 'dg20260929b1_back', 'dg20260929b1_steps'],
  scene: '演唱會之夜 Concert night',
  sceneArt: 'dg20260929b1_stage',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Zoe', voice: 'f' },
    T: { name: 'Victor', voice: 'm' }
  },
  expr: {
    main:  { t: '過去簡單式', cn: '主時間點：你正在講的那一刻', ex: 'The taxi arrived at six.', exCn: '計程車六點到了。', note: '一段話通常只有一條主線' },
    early: { t: 'had + 過去分詞', cn: '比主時間點更早的事', ex: "Grace couldn't sleep because she had drunk too much coffee.", exCn: 'Grace 睡不著，因為她喝了太多咖啡。', note: '常出現在 because、by the time、who 的句子裡' },
    seq:   { t: 'did, did, did', cn: '照時間順序講，不用退格', ex: 'He washed the car, dried it, and drove to work.', exCn: '他洗好車、擦乾，然後開車去上班。', note: 'before、after 已經講清楚順序時，加不加 had 都可以' }
  },
  chapters: [
    { cn: '開場' }, { cn: '先找主時間點' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  cardsKick: '先找主時間點 Find the main moment',
  cards: [
    { art: 'dg20260929b1_pin',   lab: '主時間點', who: '過去簡單式・整段的基準' },
    { art: 'dg20260929b1_back',  lab: '更早的事', who: 'had + 過去分詞' },
    { art: 'dg20260929b1_steps', lab: '照順序講', who: '不用退格・全用過去式' }
  ],
  flow: [
    { q: '這是你正在講的那一刻嗎？', a: '主時間點', en: '動詞過去式' },
    { q: '這件事比主時間點更早嗎？', a: '退一格',   en: 'had + 過去分詞' },
    { q: '本來就照時間順序講嗎？',   a: '不用退格', en: '全部用過去式' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: '過去完成式不是「很久以前」的意思。這支影片教你，先找出主時間點，再決定誰要退一格。', vis: { type: 'title' } },

    /* ---- 1 核心：主時間點 ---- */
    { ch: 1, sp: 'N', zh: '講一段過去的故事，第一步是找出主時間點。', vis: { type: 'cards', show: 0 } },
    { ch: 1, sp: 'N', zh: '主時間點就是你正在講的那一刻，用一般的過去簡單式，是整段話的基準。',
      hi: [{ t: '過去簡單式', k: 'main', c: 3 }], vis: { type: 'cards', show: 1, pop: true } },
    { ch: 1, sp: 'A', en: 'I checked my phone after the meeting.', cn: '開完會之後，我看了一下手機。',
      hi: [{ t: 'checked', cn: '主時間點', k: 'main', c: 3 }], vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'N', zh: '只有比主時間點更早的事，才退一格，用 had 加過去分詞。',
      hi: [{ t: 'had 加過去分詞', k: 'early', c: 4 }], vis: { type: 'cards', show: 2, pop: true } },
    { ch: 1, sp: 'T', en: 'My boss had sent me six messages.', cn: '老闆已經傳了六則訊息給我。',
      hi: [{ t: 'had sent', cn: '更早', k: 'early', c: 4 }], vis: { type: 'cards', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: '所以順序是：先釘住主時間點，再往前看。有東西比它更早，才需要退格。',
      vis: { type: 'cards', show: 2 } },
    { ch: 1, sp: 'N', zh: '如果事情本來就照時間順序講，就不用退格，全部用過去式就好。',
      hi: [{ t: '照時間順序', k: 'seq', c: 2 }], vis: { type: 'cards', show: 3, pop: true } },
    { ch: 1, sp: 'A', en: 'I put down my bag, made some tea, and called him back.', cn: '我放下包包、泡了杯茶，然後回電給他。',
      hi: [{ t: 'put down', cn: '照順序', k: 'seq', c: 2 }], vis: { type: 'cards', show: 3, lit: 2 } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: '主時間點用過去式；更早的事，用 had 加過去分詞。',
      hi: [{ t: 'had 加過去分詞', k: 'early', c: 4 }],
      vis: { type: 'pattern', kick: 'Past perfect 過去完成式', rows: [
        { lab: '主時間點', blocks: [{ t: 'She', k: 's' }, { t: 'arrived', k: 'v' }, { t: 'at the hotel', k: 'o' }] },
        { lab: '更早的事', blocks: [{ t: 'Her brother', k: 's' }, { t: 'had booked', k: 'v' }, { t: 'the room', k: 'n' }] }
      ], note: 'had 後面一定是過去分詞' } },
    { ch: 2, sp: 'N', zh: '退格最常出現在三個地方：because 後面、by the time 的另一半，還有補充背景的 who。',
      vis: { type: 'family', kick: 'Where it shows up 常出現的位置', core: 'had + 過去分詞', coreCn: '更早的事', art: 'dg20260929b1_back', items: [
        { t: 'because + had done', cn: '解釋原因' }, { t: 'By the time…, had done', cn: '等到那時，早就' }, { t: 'who + had done', cn: '補充背景' }
      ] } },
    { ch: 2, sp: 'N', zh: 'by the time 要特別注意：它後面接的是主時間點，用過去式；另一半才用 had。',
      vis: { type: 'pattern', kick: 'By the time 等到那時', rows: [
        { lab: '主時間點', blocks: [{ t: 'By the time', k: 'n' }, { t: 'they', k: 's' }, { t: 'reached', k: 'v' }, { t: 'the beach', k: 'o' }] },
        { lab: '更早的事', blocks: [{ t: 'the sun', k: 's' }, { t: 'had set', k: 'v', add: true }] }
      ], note: 'by the time 那一半不退格' } },
    { ch: 2, sp: 'N', zh: '不想說是誰做的，就用被動：had been 加過去分詞。',
      vis: { type: 'pattern', kick: 'Passive 被動', rows: [
        { lab: '被動', blocks: [{ t: 'The windows', k: 's' }, { t: 'had been cleaned', k: 'v' }, { t: 'before the party', k: 'o' }] }
      ], note: 'had、been、過去分詞，三塊都要有' } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: 'Zoe 在問 Victor 上週五的演唱會。先找主時間點在哪裡。', vis: { type: 'scene', art: 'dg20260929b1_stage' } },
    { ch: 3, sp: 'A', en: 'Did you make it to the concert on Friday?', cn: '你星期五有趕上演唱會嗎？', vis: { type: 'scene', art: 'dg20260929b1_ticketQ' } },
    { ch: 3, sp: 'T', en: 'Yes, but the band had already played two songs when we got in.', cn: '有，可是我們進場的時候，樂團已經唱了兩首。',
      hi: [{ t: 'had already played', cn: '更早', k: 'early', c: 4 }], vis: { type: 'scene', art: 'dg20260929b1_guitar' } },
    { ch: 3, sp: 'N', zh: '主時間點是他們進場，用過去式 got in；樂團開唱比它更早，所以用 had played。',
      hi: [{ t: 'got in', k: 'main', c: 3 }, { t: 'had played', k: 'early', c: 4 }], vis: { type: 'scene', art: 'dg20260929b1_doorIn' } },
    { ch: 3, sp: 'A', en: 'Oh no. Why were you late?', cn: '喔不，你們怎麼遲到了？', vis: { type: 'scene', art: 'dg20260929b1_clockQ' } },
    { ch: 3, sp: 'T', en: 'The train stopped for twenty minutes, so we missed the start.', cn: '火車停了二十分鐘，所以我們錯過了開場。',
      hi: [{ t: 'stopped', cn: '照順序', k: 'seq', c: 2 }], vis: { type: 'scene', art: 'dg20260929b1_train' } },
    { ch: 3, sp: 'N', zh: '這句是照順序講：火車先停，他們再錯過開場，所以都用過去式就好。',
      hi: [{ t: '照順序講', k: 'seq', c: 2 }], vis: { type: 'scene', art: 'dg20260929b1_seq' } },
    { ch: 3, sp: 'A', en: 'Did you get a T-shirt at least?', cn: '那你至少有買到 T 恤吧？', vis: { type: 'scene', art: 'dg20260929b1_shirtQ' } },
    { ch: 3, sp: 'T', en: 'No. When I went to the stand, they had sold out.', cn: '沒有。我走到攤位的時候，已經賣光了。',
      hi: [{ t: 'had sold out', cn: '更早', k: 'early', c: 4 }], vis: { type: 'scene', art: 'dg20260929b1_rack' } },
    { ch: 3, sp: 'N', zh: '主時間點是 Victor 走到攤位，用過去式 went；賣光比它更早，所以用 had sold out。',
      hi: [{ t: 'went', k: 'main', c: 3 }, { t: 'had sold out', k: 'early', c: 4 }], vis: { type: 'scene', art: 'dg20260929b1_soldSign' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '有 after 或 before 的時候，順序已經講清楚了，加不加 had 都對。',
      vis: { type: 'vs', sm: true, kick: 'after 已經說了順序',
        a: { w: 'After the guests left, we cleaned the kitchen.', def: '客人走了以後，我們把廚房整理乾淨。', cn: '兩邊都用過去式' },
        b: { w: 'After the guests had left, we cleaned the kitchen.', def: '等客人都走了，我們才整理廚房。', cn: '加 had，更強調先走' } } },
    { ch: 4, sp: 'A', en: 'After the guests left, we cleaned the kitchen.', cn: '客人走了以後，我們把廚房整理乾淨。',
      hi: [{ t: 'left', cn: '過去式', k: 'seq', c: 2 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: 'after 已經說了順序',
        a: { w: 'After the guests left, we cleaned the kitchen.', def: '客人走了以後，我們把廚房整理乾淨。', cn: '兩邊都用過去式' },
        b: { w: 'After the guests had left, we cleaned the kitchen.', def: '等客人都走了，我們才整理廚房。', cn: '加 had，更強調先走' } } },
    { ch: 4, sp: 'T', en: 'After the guests had left, we cleaned the kitchen.', cn: '等客人都走了，我們才整理廚房。',
      hi: [{ t: 'had left', cn: '強調先走', k: 'early', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: 'after 已經說了順序',
        a: { w: 'After the guests left, we cleaned the kitchen.', def: '客人走了以後，我們把廚房整理乾淨。', cn: '兩邊都用過去式' },
        b: { w: 'After the guests had left, we cleaned the kitchen.', def: '等客人都走了，我們才整理廚房。', cn: '加 had，更強調先走' } } },
    { ch: 4, sp: 'N', zh: '兩句意思一樣，第二句只是更強調，客人是先走的。',
      vis: { type: 'vs', sm: true, kick: 'after 已經說了順序',
        a: { w: 'After the guests left, we cleaned the kitchen.', def: '客人走了以後，我們把廚房整理乾淨。', cn: '兩邊都用過去式' },
        b: { w: 'After the guests had left, we cleaned the kitchen.', def: '等客人都走了，我們才整理廚房。', cn: '加 had，更強調先走' } } },
    { ch: 4, sp: 'N', zh: '再看一組。同樣兩件事，先講結果、後補原因，就要退格；照順序講，就不用。',
      vis: { type: 'vs', sm: true, kick: '倒過來講 vs 照順序講',
        a: { w: 'Tina was upset because someone had taken her umbrella.', def: 'Tina 很不高興，因為有人拿走了她的傘。', cn: '先講結果 → 原因退格' },
        b: { w: "Someone took Tina's umbrella, and she got upset.", def: '有人拿走了 Tina 的傘，她就不高興了。', cn: '照順序講 → 全用過去式' } } },
    { ch: 4, sp: 'A', en: 'Tina was upset because someone had taken her umbrella.', cn: 'Tina 很不高興，因為有人拿走了她的傘。',
      hi: [{ t: 'had taken', cn: '更早', k: 'early', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '倒過來講 vs 照順序講',
        a: { w: 'Tina was upset because someone had taken her umbrella.', def: 'Tina 很不高興，因為有人拿走了她的傘。', cn: '先講結果 → 原因退格' },
        b: { w: "Someone took Tina's umbrella, and she got upset.", def: '有人拿走了 Tina 的傘，她就不高興了。', cn: '照順序講 → 全用過去式' } } },
    { ch: 4, sp: 'T', en: "Someone took Tina's umbrella, and she got upset.", cn: '有人拿走了 Tina 的傘，她就不高興了。',
      hi: [{ t: 'took', cn: '照順序', k: 'seq', c: 2 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '倒過來講 vs 照順序講',
        a: { w: 'Tina was upset because someone had taken her umbrella.', def: 'Tina 很不高興，因為有人拿走了她的傘。', cn: '先講結果 → 原因退格' },
        b: { w: "Someone took Tina's umbrella, and she got upset.", def: '有人拿走了 Tina 的傘，她就不高興了。', cn: '照順序講 → 全用過去式' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '最後給你一個判斷流程，照順序問自己三個問題。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一問：這是你正在講的那一刻嗎？是的話，它就是主時間點，用過去式。',
      hi: [{ t: '主時間點', k: 'main', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'A', en: 'The lights went out during dinner.', cn: '吃晚餐的時候突然停電了。',
      hi: [{ t: 'went out', cn: '主時間點', k: 'main', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二問：這件事比主時間點更早嗎？是的話，退一格，用 had 加過去分詞。',
      hi: [{ t: 'had 加過去分詞', k: 'early', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'T', en: 'Luckily, we had charged our phones that afternoon.', cn: '還好，我們那天下午已經把手機充好電了。',
      hi: [{ t: 'had charged', cn: '更早', k: 'early', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '第三問：事情本來就照時間順序講嗎？是的話，不用退格，全部用過去式。',
      hi: [{ t: '照時間順序', k: 'seq', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'A', en: 'We found some candles, lit them, and finished our meal.', cn: '我們找到幾根蠟燭，點起來，把飯吃完。',
      hi: [{ t: 'found', cn: '照順序', k: 'seq', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說說看。看到中文情境，先自己用英文說出來，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：你打開信箱的時候，房東已經寄信給你了。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '你打開信箱的時候，房東已經寄信給你了。' } },
    { ch: 6, sp: 'T', en: 'When I checked my inbox, my landlord had already emailed me.', cn: '我打開信箱的時候，房東已經寄信給我了。',
      hi: [{ t: 'had already emailed', cn: '更早 → had + 過去分詞', k: 'early', c: 4 }],
      vis: { type: 'speak', n: 1, show: true, sit: '你打開信箱的時候，房東已經寄信給你了。', a: 'When I checked my inbox, my landlord had already emailed me.' } },
    { ch: 6, sp: 'N', zh: '情境二：你跟同事說，你昨天很累，因為前一晚沒睡好。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '你跟同事說，你昨天很累，因為前一晚沒睡好。' } },
    { ch: 6, sp: 'A', en: "I was tired because I hadn't slept well the night before.", cn: '我很累，因為前一晚沒睡好。',
      hi: [{ t: "hadn't slept", cn: 'because 後面退格', k: 'early', c: 4 }],
      vis: { type: 'speak', n: 2, show: true, sit: '你跟同事說，你昨天很累，因為前一晚沒睡好。', a: "I was tired because I hadn't slept well the night before." } },
    { ch: 6, sp: 'N', zh: '情境三：等你哥哥找到停車位的時候，婚禮已經開始了。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '等你哥哥找到停車位的時候，婚禮已經開始了。' } },
    { ch: 6, sp: 'T', en: 'By the time my brother found a parking space, the ceremony had begun.', cn: '等我哥哥找到停車位，婚禮已經開始了。',
      hi: [{ t: 'found', cn: '主時間點 → 過去式', k: 'main', c: 3 }, { t: 'had begun', cn: '更早 → had + 過去分詞', k: 'early', c: 4 }],
      vis: { type: 'speak', n: 3, show: true, sit: '等你哥哥找到停車位的時候，婚禮已經開始了。', a: 'By the time my brother found a parking space, the ceremony had begun.' } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結一下：先找主時間點，用過去式；比它更早的才退一格，用 had 加過去分詞；照順序講的，全部用過去式。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '下次講過去的故事，先問一句：我正在講的是哪一刻？', vis: { type: 'end' } }
  ]
};
