/* ============================================================
   B2 Read 文法影片解說 — g12 Linking Ideas: Contrast, Cause & Concession（核心單元，B2）
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
  var cal=function(x,y,w,h){
    var g='<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" rx="8" fill="#fff" '+st+'/>'
      +'<path d="M'+x+' '+(y+22)+' V'+(y+8)+' a8 8 0 0 1 8 -8 H'+(x+w-8)+' a8 8 0 0 1 8 8 V'+(y+22)+' Z" fill="'+R+'" '+st+'/>'
      +'<line x1="'+(x+22)+'" y1="'+(y-7)+'" x2="'+(x+22)+'" y2="'+(y+8)+'" '+th(4)+'/><line x1="'+(x+w-22)+'" y1="'+(y-7)+'" x2="'+(x+w-22)+'" y2="'+(y+8)+'" '+th(4)+'/>';
    for(var r=0;r<3;r++) for(var c=0;c<4;c++) g+='<rect x="'+(x+10+c*(w-20)/4)+'" y="'+(y+30+r*(h-38)/3)+'" width="'+((w-20)/4-6)+'" height="'+((h-38)/3-6)+'" rx="2" fill="'+C+'"/>';
    return g; };
  var heart=function(cx,cy,s,col){ return '<path d="M'+cx+' '+(cy+12*s)+' l-'+(14*s)+' -'+(12*s)+' c-'+(6*s)+' -'+(12*s)+' '+(8*s)+' -'+(18*s)+' '+(14*s)+' -'+(8*s)+' c'+(6*s)+' -'+(10*s)+' '+(20*s)+' -'+(4*s)+' '+(14*s)+' '+(8*s)+' Z" fill="'+(col||R)+'" '+th(2.5)+'/>'; };
  var flowers=function(pts){ var g=''; for(var i=0;i<pts.length;i+=2){ g+='<circle cx="'+pts[i]+'" cy="'+pts[i+1]+'" r="5" fill="'+(i%4===0?R:Y)+'" '+th(2)+'/>'; } return g; };

  Object.assign(window.GVIDEO_ART, {
    /* 核心 1：橋把兩岸接起來（連接詞接句子） */
    g12_bridge: svg(
      '<path d="M0 90 H44 V150 H0 Z M156 90 H200 V150 H156 Z" fill="#a0683c" '+st+'/>'
     +'<path d="M44 118 q14 -6 28 0 t28 0 t28 0 t28 0 V150 H44 Z" fill="'+B+'" '+st+'/>'
     +'<path d="M44 90 Q100 40 156 90" fill="none" '+th(5)+'/>'
     +'<rect x="40" y="84" width="120" height="10" rx="2" fill="'+A+'" '+st+'/>'
     +'<g '+th(2.5)+'><line x1="66" y1="66" x2="66" y2="84"/><line x1="86" y1="56" x2="86" y2="84"/><line x1="114" y1="56" x2="114" y2="84"/><line x1="134" y1="66" x2="134" y2="84"/></g>'),
    /* 核心 2：一個名詞方塊被夾住（介系詞接名詞） */
    g12_block: svg(
      '<rect x="64" y="50" width="72" height="62" rx="6" fill="'+Y+'" '+st+'/><path d="M64 70 H136" '+th(3)+'/>'
     +'<circle cx="100" cy="90" r="9" fill="#fff" '+th(2.5)+'/>'
     +'<path d="M30 40 V122 H50 M170 40 V122 H150" fill="none" '+th(5)+'/>'
     +'<line x1="14" y1="132" x2="186" y2="132" '+st+'/>'),
    /* 核心 3：路障＋句點（先斷句） */
    g12_stop: svg(
      '<circle cx="46" cy="76" r="22" fill="'+D+'"/>'
     +'<rect x="84" y="56" width="104" height="22" rx="4" fill="#fff" '+st+'/>'
     +'<path d="M94 56 l-10 22 M114 56 l-12 22 M136 56 l-12 22 M158 56 l-12 22 M180 56 l-12 22" stroke="'+R+'" stroke-width="7"/>'
     +'<rect x="84" y="56" width="104" height="22" rx="4" fill="none" '+st+'/>'
     +'<path d="M100 78 V132 M172 78 V132" '+th(5)+'/><path d="M88 132 h24 M160 132 h24" '+th(4)+'/>'),

    /* 情境 1：兩個場地——飯店和花園 */
    g12_venues: svg(
      '<line x1="8" y1="134" x2="192" y2="134" '+st+'/>'
     +'<rect x="20" y="34" width="68" height="100" fill="'+S+'" '+st+'/>'
     +'<g fill="#fff" '+th(2)+'><rect x="30" y="46" width="14" height="14"/><rect x="64" y="46" width="14" height="14"/><rect x="30" y="72" width="14" height="14"/><rect x="64" y="72" width="14" height="14"/></g>'
     +'<rect x="44" y="104" width="20" height="30" fill="'+L+'" '+st+'/>'
     +'<path d="M116 134 V86 a34 34 0 0 1 68 0 V134" fill="none" stroke="'+G+'" stroke-width="10"/>'
     +'<path d="M116 134 V86 a34 34 0 0 1 68 0 V134" fill="none" '+th(3)+'/>'
     +flowers([120,90,134,64,150,54,166,64,180,90])),
    /* 情境 2：花園拱門很漂亮 */
    g12_garden: svg(
      '<path d="M0 120 H200 V150 H0 Z" fill="#9bcf8f" '+st+'/>'
     +'<path d="M50 124 V64 a50 50 0 0 1 100 0 V124" fill="none" stroke="'+G+'" stroke-width="12"/>'
     +'<path d="M50 124 V64 a50 50 0 0 1 100 0 V124" fill="none" '+th(3)+'/>'
     +flowers([50,100,50,76,58,44,78,22,100,16,122,22,142,44,150,76,150,100])
     +'<path d="M86 124 h28 l-4 -14 h-20 Z" fill="'+L+'" '+th(2.5)+'/>'
     +'<path d="M20 120 v-16 M24 108 l-6 -6 M180 120 v-16 M176 108 l6 -6" '+th(2.5)+'/>'),
    /* 情境 3：那天下雨怎麼辦？ */
    g12_rain: svg(
      '<path d="M36 82 a20 20 0 0 1 6 -38 a28 28 0 0 1 52 -8 a22 22 0 0 1 32 22 a16 16 0 0 1 -4 24 Z" fill="#b8c4d0" '+st+'/>'
     +'<g stroke="'+B+'" stroke-width="4" stroke-linecap="round"><line x1="50" y1="94" x2="44" y2="112"/><line x1="74" y1="94" x2="68" y2="112"/><line x1="98" y1="94" x2="92" y2="112"/><line x1="62" y1="118" x2="56" y2="136"/><line x1="86" y1="118" x2="80" y2="136"/><line x1="110" y1="118" x2="104" y2="136"/></g>'
     +qb(160,56)),
    /* 情境 4：大帳篷，下雨也不怕 */
    g12_tent: svg(
      '<line x1="8" y1="132" x2="192" y2="132" '+st+'/>'
     +'<path d="M24 132 V82 L60 50 H140 L176 82 V132 Z" fill="'+C+'" '+st+'/><path d="M24 82 L60 50 H140 L176 82 Z" fill="'+R+'" '+st+'/>'
     +'<path d="M24 82 H176 M60 50 L76 82 M100 50 V82 M140 50 L124 82" fill="none" '+th(3)+'/>'
     +'<path d="M86 132 V100 a14 14 0 0 1 28 0 V132" fill="'+L+'" '+st+'/>'
     +'<g stroke="'+B+'" stroke-width="4" stroke-linecap="round"><line x1="40" y1="14" x2="36" y2="28"/><line x1="80" y1="10" x2="76" y2="24"/><line x1="120" y1="12" x2="116" y2="26"/><line x1="160" y1="16" x2="156" y2="30"/></g>'),
    /* 情境 5：飯店隔壁就是捷運站 */
    g12_subway: svg(
      '<line x1="8" y1="134" x2="192" y2="134" '+st+'/>'
     +'<rect x="24" y="24" width="80" height="110" fill="'+S+'" '+st+'/>'
     +'<g fill="#fff" '+th(2)+'><rect x="34" y="36" width="16" height="16"/><rect x="78" y="36" width="16" height="16"/><rect x="34" y="64" width="16" height="16"/><rect x="78" y="64" width="16" height="16"/></g>'
     +'<rect x="54" y="104" width="20" height="30" fill="'+L+'" '+st+'/>'
     +'<line x1="152" y1="62" x2="152" y2="134" '+th(4)+'/><circle cx="152" cy="46" r="18" fill="'+B+'" '+st+'/>'+txt(152,53,'M',20,'#fff')
     +'<path d="M120 134 V108 H184 V134" fill="'+L+'" '+st+'/><path d="M132 134 V120 h40 V134" fill="'+D+'"/>'),
    /* 情境 6：捷運列車 */
    g12_train: svg(
      '<line x1="8" y1="134" x2="192" y2="134" '+st+'/>'
     +'<rect x="50" y="22" width="100" height="102" rx="18" fill="#fff" '+st+'/>'
     +'<rect x="62" y="36" width="76" height="40" rx="6" fill="'+S+'" '+st+'/>'
     +'<rect x="50" y="84" width="100" height="10" fill="'+B+'" '+th(2.5)+'/>'
     +'<circle cx="72" cy="108" r="6" fill="'+Y+'" '+th(2.5)+'/><circle cx="128" cy="108" r="6" fill="'+Y+'" '+th(2.5)+'/>'
     +'<path d="M64 124 L56 134 M136 124 L144 134" '+th(3)+'/>'),
    /* 情境 7：心中想像的婚禮——想像泡泡＋心 */
    g12_dream: svg(
      '<path d="M40 92 a22 22 0 0 1 2 -40 a30 30 0 0 1 56 -14 a28 28 0 0 1 50 10 a22 22 0 0 1 8 42 a26 26 0 0 1 -40 10 a30 30 0 0 1 -46 0 a22 22 0 0 1 -30 -8 Z" fill="#fff" '+st+'/>'
     +'<circle cx="48" cy="118" r="8" fill="#fff" '+st+'/><circle cx="30" cy="136" r="5" fill="#fff" '+st+'/>'
     +heart(100,58,1.6)
     +flowers([62,74,138,74,76,50,124,50])),
    /* 情境 8：天平——先承認再翻轉 */
    g12_scale: svg(
      '<line x1="100" y1="30" x2="100" y2="124" '+th(5)+'/><path d="M76 132 H124 L114 120 H86 Z" fill="#c98b55" '+st+'/>'
     +'<line x1="40" y1="44" x2="160" y2="56" '+th(5)+'/><circle cx="100" cy="50" r="6" fill="'+Y+'" '+st+'/>'
     +'<path d="M40 44 L22 86 M40 44 L58 86 M160 56 L142 98 M160 56 L178 98" '+th(2.5)+'/>'
     +'<path d="M18 86 H62 a22 10 0 0 1 -44 0 Z" fill="'+S+'" '+st+'/><path d="M138 98 H182 a22 10 0 0 1 -44 0 Z" fill="'+L+'" '+st+'/>'
     +'<circle cx="40" cy="80" r="6" fill="'+G+'" '+th(2.5)+'/>'+heart(160,82,0.7)),
    /* 情境 9：在月曆上訂好日子 */
    g12_calendar: svg(
      cal(30,32,110,98)
     +'<rect x="88" y="90" width="24" height="24" rx="3" fill="'+R+'" opacity=".25"/>'
     +heart(100,96,0.6)
     +chk(160,100,20)),
    /* 情境 10：一對戒指 */
    g12_rings: svg(
      '<circle cx="78" cy="88" r="32" fill="none" stroke="'+Y+'" stroke-width="10"/><circle cx="78" cy="88" r="37" fill="none" '+th(2.5)+'/><circle cx="78" cy="88" r="27" fill="none" '+th(2.5)+'/>'
     +'<circle cx="124" cy="88" r="32" fill="none" stroke="#d8d8d8" stroke-width="10"/><circle cx="124" cy="88" r="37" fill="none" '+th(2.5)+'/><circle cx="124" cy="88" r="27" fill="none" '+th(2.5)+'/>'
     +'<path d="M66 50 L78 36 L90 50 L78 58 Z" fill="'+S+'" '+st+'/>'
     +'<path d="M40 30 l4 8 l8 2 l-8 3 l-4 8 l-4 -8 l-8 -3 l8 -2 Z M164 26 l3 6 l6 2 l-6 2 l-3 6 l-3 -6 l-6 -2 l6 -2 Z" fill="'+Y+'" '+th(2)+'/>')
  });
})();

/* ============================================================
   g12 — Linking Ideas（Grammar in Use：although / despite、because of、so that；however 等連接副詞）
   ============================================================ */
window.GVIDEO.g12 = {
  kind: 'gram',
  date: '',
  title: 'Although, Despite or However?',
  titleCn: '連接與轉折：先看後面接什麼',
  titleArt: ['g12_bridge', 'g12_block', 'g12_stop'],
  scene: '挑婚宴場地 Choosing a wedding venue',
  sceneArt: 'g12_venues',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Rachel', voice: 'f' },
    T: { name: 'Daniel', voice: 'm' }
  },
  expr: {
    conj: { t: 'although / even though / because', cn: '連接詞 → 後面接完整的句子', ex: 'Even though the store was closing, the staff let us in.', exCn: '雖然店快打烊了，店員還是讓我們進去。', note: 'whereas、while 也是連接詞，用來對比兩件事' },
    prep: { t: 'despite / in spite of / because of', cn: '介系詞 → 後面接名詞或 V-ing', ex: 'In spite of feeling nervous, Kelly gave a great presentation.', exCn: 'Kelly 雖然很緊張，簡報還是做得很棒。', note: '想接句子，就加 the fact that' },
    adv:  { t: 'however / therefore', cn: '副詞 → 前面先用句號或分號斷開', ex: 'The printer is broken. Therefore, please send the file by email.', exCn: '印表機壞了，所以請用 email 寄檔案。', note: 'nevertheless、on the other hand 也一樣' }
  },
  chapters: [
    { cn: '開場' }, { cn: '先看後面接什麼' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  cardsKick: '先看後面接什麼',
  cards: [
    { art: 'g12_bridge', lab: '接句子', who: '連接詞 although' },
    { art: 'g12_block',  lab: '接名詞', who: '介系詞 despite' },
    { art: 'g12_stop',   lab: '先斷句', who: '副詞 however' }
  ],
  flow: [
    { q: '後面接完整的句子嗎？',       a: '連接詞', en: 'although / because + 主詞 + 動詞' },
    { q: '後面只接名詞或 V-ing 嗎？',  a: '介系詞', en: 'despite / because of + 名詞' },
    { q: '前面已經用句號斷開了嗎？',   a: '副詞',   en: '. However, / . Therefore, + 句子' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: '雖然、儘管、不過、因為，英文都有好幾種說法。選哪一個，要看後面接什麼。', vis: { type: 'title' } },

    /* ---- 1 核心 ---- */
    { ch: 1, sp: 'N', zh: '雖然、儘管、不過，意思很像，用法卻不一樣。先看三種。', vis: { type: 'cards', show: 0 } },
    { ch: 1, sp: 'N', zh: '第一種：後面接完整句子，就用連接詞，像 although。',
      hi: [{ t: '連接詞', k: 'conj', c: 3 }], vis: { type: 'cards', show: 1, pop: true } },
    { ch: 1, sp: 'A', en: 'Although the tickets were pricey, they sold out fast.', cn: '雖然票很貴，還是很快就賣光了。',
      hi: [{ t: 'Although the tickets were pricey', cn: '接句子', k: 'conj', c: 3 }], vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'N', zh: '第二種：後面只接名詞或 ing，就用介系詞，像 despite。',
      hi: [{ t: '介系詞', k: 'prep', c: 4 }], vis: { type: 'cards', show: 2, pop: true } },
    { ch: 1, sp: 'T', en: 'Despite the long line, we decided to wait.', cn: '儘管隊伍很長，我們還是決定排。',
      hi: [{ t: 'Despite the long line', cn: '接名詞', k: 'prep', c: 4 }], vis: { type: 'cards', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: 'despite 後面直接放名詞；說 in spite of 也可以。', vis: { type: 'cards', show: 2 } },
    { ch: 1, sp: 'N', zh: '第三種：先用句號斷開，下一句再用 however。',
      hi: [{ t: 'however', k: 'adv', c: 2 }], vis: { type: 'cards', show: 3, pop: true } },
    { ch: 1, sp: 'A', en: 'The hotel was lovely. However, the Wi-Fi barely worked.', cn: '飯店很棒。不過，Wi-Fi 幾乎不能用。',
      hi: [{ t: 'However', cn: '先斷句', k: 'adv', c: 2 }], vis: { type: 'cards', show: 3, lit: 2 } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: '讓步：although、even though 接句子；despite 接名詞或 ing。',
      hi: [{ t: 'even though', k: 'conj', c: 3 }],
      vis: { type: 'pattern', kick: '讓步 Concession', rows: [
        { lab: '接句子',   blocks: [{ t: 'Even though', k: 'n' }, { t: 'she was sick,', k: 'v' }, { t: 'she gave the speech', k: 'o' }] },
        { lab: '接 V-ing', blocks: [{ t: 'In spite of', k: 'n' }, { t: 'being sick,', k: 'n' }, { t: 'she gave the speech', k: 'o' }] }
      ], note: 'even though 的語氣比 although 更強' } },
    { ch: 2, sp: 'N', zh: '因果也一樣：because 接句子；because of、due to 接名詞。',
      hi: [{ t: 'because of', k: 'prep', c: 4 }],
      vis: { type: 'pattern', kick: '因果 Cause', rows: [
        { lab: '接句子', blocks: [{ t: 'The game was canceled', k: 's' }, { t: 'because', k: 'n' }, { t: 'it was snowing', k: 'v' }] },
        { lab: '接名詞', blocks: [{ t: 'The game was canceled', k: 's' }, { t: 'because of', k: 'n' }, { t: 'the snow', k: 'n' }] }
      ] } },
    { ch: 2, sp: 'N', zh: 'despite 後面想放整個句子，就加 the fact that，把句子包起來。',
      hi: [{ t: 'the fact that', k: 'prep', c: 4 }],
      vis: { type: 'pattern', kick: '加 the fact that', rows: [
        { lab: '包起來', blocks: [{ t: 'Despite', k: 'n' }, { t: 'the fact that', k: 'n', add: true }, { t: 'we left early,', k: 'v' }, { t: 'we missed the ferry', k: 'o' }] }
      ], note: 'the fact that + 句子 = 一個名詞' } },
    { ch: 2, sp: 'N', zh: '副詞放在第二句開頭，後面通常加逗號。',
      vis: { type: 'family', kick: 'Linking adverbs 連接副詞', core: 'New sentence first', coreCn: '先斷句，再接副詞', art: 'g12_stop', items: [
        { t: 'however', cn: '不過' }, { t: 'nevertheless', cn: '儘管如此' }, { t: 'therefore', cn: '因此' }, { t: 'on the other hand', cn: '另一方面' }
      ] } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: '來聽 Rachel 和 Daniel 挑婚宴場地。', vis: { type: 'scene', art: 'g12_venues' } },
    { ch: 3, sp: 'A', en: 'The garden venue is beautiful, whereas the hotel feels a bit plain.', cn: '花園場地很漂亮，飯店相比之下有點普通。',
      hi: [{ t: 'whereas', cn: '對比', k: 'conj', c: 3 }], vis: { type: 'scene', art: 'g12_garden' } },
    { ch: 3, sp: 'T', en: 'True, but what if it rains that day?', cn: '沒錯，可是那天下雨怎麼辦？', vis: { type: 'scene', art: 'g12_rain' } },
    { ch: 3, sp: 'A', en: "They have a huge tent, so we'll stay dry.", cn: '他們有一頂超大的帳篷，所以我們不會淋濕。',
      hi: [{ t: 'so', cn: '所以', k: 'conj', c: 3 }], vis: { type: 'scene', art: 'g12_tent' } },
    { ch: 3, sp: 'T', en: 'The hotel is easier to reach because of the subway.', cn: '因為有捷運，飯店交通方便多了。',
      hi: [{ t: 'because of the subway', cn: '接名詞', k: 'prep', c: 4 }], vis: { type: 'scene', art: 'g12_subway' } },
    { ch: 3, sp: 'N', zh: 'because of 後面接名詞，所以不用 because。',
      hi: [{ t: 'because of', k: 'prep', c: 4 }], vis: { type: 'scene', art: 'g12_train' } },
    { ch: 3, sp: 'A', en: "Admittedly, the hotel is cheaper. However, I love the garden.", cn: '不可否認，飯店比較便宜。不過我就是喜歡花園。',
      hi: [{ t: 'However', cn: '翻轉', k: 'adv', c: 2 }], vis: { type: 'scene', art: 'g12_dream' } },
    { ch: 3, sp: 'N', zh: '先用 Admittedly 承認，再用 However 翻轉，這就是讓步。',
      hi: [{ t: 'However', k: 'adv', c: 2 }], vis: { type: 'scene', art: 'g12_scale' } },
    { ch: 3, sp: 'T', en: "In spite of the price, let's book the garden.", cn: '雖然比較貴，我們還是訂花園吧。',
      hi: [{ t: 'In spite of the price', cn: '接名詞', k: 'prep', c: 4 }], vis: { type: 'scene', art: 'g12_calendar' } },
    { ch: 3, sp: 'N', zh: 'In spite of 後面接名詞 the price，場地終於選好了。',
      hi: [{ t: 'In spite of', k: 'prep', c: 4 }], vis: { type: 'scene', art: 'g12_rings' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '同一個意思，although 和 despite 後面接的不一樣。',
      vis: { type: 'vs', sm: true, kick: 'although vs despite',
        a: { w: 'Although he had a cold, Jason ran the whole race.', def: '雖然感冒了，Jason 還是跑完全程。', cn: 'although + 主詞 + 動詞' },
        b: { w: 'Despite his cold, Jason ran the whole race.', def: '儘管感冒，Jason 還是跑完全程。', cn: 'despite + 名詞' } } },
    { ch: 4, sp: 'A', en: 'Although he had a cold, Jason ran the whole race.', cn: '雖然感冒了，Jason 還是跑完全程。',
      hi: [{ t: 'Although he had a cold', cn: '接句子', k: 'conj', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: 'although vs despite',
        a: { w: 'Although he had a cold, Jason ran the whole race.', def: '雖然感冒了，Jason 還是跑完全程。', cn: 'although + 主詞 + 動詞' },
        b: { w: 'Despite his cold, Jason ran the whole race.', def: '儘管感冒，Jason 還是跑完全程。', cn: 'despite + 名詞' } } },
    { ch: 4, sp: 'T', en: 'Despite his cold, Jason ran the whole race.', cn: '儘管感冒，Jason 還是跑完全程。',
      hi: [{ t: 'Despite his cold', cn: '接名詞', k: 'prep', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: 'although vs despite',
        a: { w: 'Although he had a cold, Jason ran the whole race.', def: '雖然感冒了，Jason 還是跑完全程。', cn: 'although + 主詞 + 動詞' },
        b: { w: 'Despite his cold, Jason ran the whole race.', def: '儘管感冒，Jason 還是跑完全程。', cn: 'despite + 名詞' } } },
    { ch: 4, sp: 'N', zh: 'although 後面有主詞有動詞；despite 後面只有名詞 his cold。',
      vis: { type: 'vs', sm: true, kick: 'although vs despite',
        a: { w: 'Although he had a cold, Jason ran the whole race.', def: '雖然感冒了，Jason 還是跑完全程。', cn: 'although + 主詞 + 動詞' },
        b: { w: 'Despite his cold, Jason ran the whole race.', def: '儘管感冒，Jason 還是跑完全程。', cn: 'despite + 名詞' } } },
    { ch: 4, sp: 'N', zh: '再看一組。whereas 是連接詞，接在同一句；however 是副詞，要先斷句。',
      vis: { type: 'vs', sm: true, kick: 'whereas vs however',
        a: { w: "My brother loves spicy food, whereas I can't eat it.", def: '我哥很愛吃辣，我卻完全不能吃。', cn: 'whereas → 連接詞，同一句' },
        b: { w: "My brother loves spicy food. However, I can't eat it.", def: '我哥很愛吃辣。不過我完全不能吃。', cn: 'however → 副詞，先用句號斷開' } } },
    { ch: 4, sp: 'A', en: "My brother loves spicy food, whereas I can't eat it.", cn: '我哥很愛吃辣，我卻完全不能吃。',
      hi: [{ t: 'whereas', cn: '連接詞', k: 'conj', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: 'whereas vs however',
        a: { w: "My brother loves spicy food, whereas I can't eat it.", def: '我哥很愛吃辣，我卻完全不能吃。', cn: 'whereas → 連接詞，同一句' },
        b: { w: "My brother loves spicy food. However, I can't eat it.", def: '我哥很愛吃辣。不過我完全不能吃。', cn: 'however → 副詞，先用句號斷開' } } },
    { ch: 4, sp: 'T', en: "My brother loves spicy food. However, I can't eat it.", cn: '我哥很愛吃辣。不過我完全不能吃。',
      hi: [{ t: 'However', cn: '副詞', k: 'adv', c: 2 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: 'whereas vs however',
        a: { w: "My brother loves spicy food, whereas I can't eat it.", def: '我哥很愛吃辣，我卻完全不能吃。', cn: 'whereas → 連接詞，同一句' },
        b: { w: "My brother loves spicy food. However, I can't eat it.", def: '我哥很愛吃辣。不過我完全不能吃。', cn: 'however → 副詞，先用句號斷開' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '最後是判斷流程。選字之前，照順序問三個問題。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一問：後面接完整的句子嗎？是的話，用連接詞。',
      hi: [{ t: '連接詞', k: 'conj', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'T', en: 'We stayed indoors because the air quality was terrible.', cn: '因為空氣品質很差，我們待在室內。',
      hi: [{ t: 'because the air quality was terrible', cn: '接句子', k: 'conj', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二問：後面只接名詞或動詞 ing 嗎？是的話，用介系詞。',
      hi: [{ t: '介系詞', k: 'prep', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'A', en: 'The match went ahead in spite of the strong wind.', cn: '儘管風很大，比賽還是照常進行。',
      hi: [{ t: 'in spite of the strong wind', cn: '接名詞', k: 'prep', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '第三問：前面已經斷句了嗎？是的話，用 however 這類副詞。',
      hi: [{ t: 'however', k: 'adv', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'T', en: 'Our budget was cut. Therefore, we have to hire fewer people.', cn: '我們的預算被砍了。因此我們得少請一些人。',
      hi: [{ t: 'Therefore', cn: '先斷句', k: 'adv', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說說看。看到中文情境，先自己用英文說出來，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：雖然你累壞了，還是去了健身房。用 although。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '雖然你累壞了，還是去了健身房。用 although。' } },
    { ch: 6, sp: 'A', en: 'Although I was exhausted, I still went to the gym.', cn: '雖然我累壞了，還是去了健身房。',
      hi: [{ t: 'Although I was exhausted', cn: '接句子 → 連接詞', k: 'conj', c: 3 }],
      vis: { type: 'speak', n: 1, show: true, sit: '雖然你累壞了，還是去了健身房。用 although。', a: 'Although I was exhausted, I still went to the gym.' } },
    { ch: 6, sp: 'N', zh: '情境二：因為大雨，戶外音樂會延期了。用 because of。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '因為大雨，戶外音樂會延期了。用 because of。' } },
    { ch: 6, sp: 'T', en: 'The outdoor concert was postponed because of the heavy rain.', cn: '戶外音樂會因為大雨延期了。',
      hi: [{ t: 'because of the heavy rain', cn: '接名詞 → 介系詞', k: 'prep', c: 4 }],
      vis: { type: 'speak', n: 2, show: true, sit: '因為大雨，戶外音樂會延期了。用 because of。', a: 'The outdoor concert was postponed because of the heavy rain.' } },
    { ch: 6, sp: 'N', zh: '情境三：房租很高，不過地點很完美。用 However。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '房租很高，不過地點很完美。用 However。' } },
    { ch: 6, sp: 'A', en: 'The rent is high. However, the location is perfect.', cn: '房租很高。不過，地點很完美。',
      hi: [{ t: 'However', cn: '先斷句 → 副詞', k: 'adv', c: 2 }],
      vis: { type: 'speak', n: 3, show: true, sit: '房租很高，不過地點很完美。用 However。', a: 'The rent is high. However, the location is perfect.' } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結：接句子用連接詞，像 although；接名詞用介系詞，像 despite；先斷句，才用 however。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '下次要說「雖然」或「因為」之前，先看看後面要接什麼。', vis: { type: 'end' } }
  ]
};
