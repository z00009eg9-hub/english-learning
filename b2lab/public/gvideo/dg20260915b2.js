/* ============================================================
   B2 Read 文法影片解說 — dg20260915b2（Grammar in Use Unit 12，B2）
   格式與規則見 b2lab/tools/GVIDEO_SPEC.md；範本 gvideo/dg20261014b1.js。
   語域單元，核心圖用 cards：口語誇飾／精準數字／時間放句首。
   ============================================================ */
window.GVIDEO = window.GVIDEO || {};
window.GVIDEO_ART = window.GVIDEO_ART || {};

(function(){
  var D='#2b2118', A='#e8813a', C='#fdf6ec', L='#f7e3c9', R='#d9534f', B='#3b82c4', G='#3f9a62', Y='#f2c94c', S='#d6e8f8';
  var P='dg20260915b2_';
  var st='stroke="'+D+'" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"';
  var th=function(w){ return 'stroke="'+D+'" stroke-width="'+w+'" stroke-linejoin="round" stroke-linecap="round"'; };
  var svg=function(inner){ return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+inner+'</svg>'; };
  var txt=function(x,y,t,sz,col){ return '<text x="'+x+'" y="'+y+'" text-anchor="middle" font-family="Arial,sans-serif" font-weight="700" font-size="'+sz+'" fill="'+(col||D)+'">'+t+'</text>'; };
  var qb=function(cx,cy){ return '<circle cx="'+cx+'" cy="'+cy+'" r="16" fill="'+A+'" '+st+'/>'+txt(cx,cy+7,'?',20,'#fff'); };
  var chk=function(cx,cy,r){ return '<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="'+G+'" '+st+'/><path d="M'+(cx-r*0.45)+' '+cy+' l'+(r*0.32)+' '+(r*0.34)+' l'+(r*0.6)+' -'+(r*0.7)+'" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>'; };
  /* 紙上的橫線 */
  var lines=function(x,y,w,n,gap){ var g=''; for(var i=0;i<n;i++) g+='<line x1="'+x+'" y1="'+(y+i*gap)+'" x2="'+(x+w-(i%2?14:0))+'" y2="'+(y+i*gap)+'" '+th(3)+'/>'; return g; };
  /* 茶葉 */
  var leaf=function(x,y,rot){ return '<g transform="rotate('+rot+' '+x+' '+y+')"><path d="M'+x+' '+(y+14)+' q-12 -14 0 -28 q12 14 0 28 Z" fill="'+G+'" '+th(2.5)+'/><line x1="'+x+'" y1="'+(y+12)+'" x2="'+x+'" y2="'+(y-10)+'" stroke="#fff" stroke-width="2" stroke-linecap="round"/></g>'; };
  /* 打開的雜誌 */
  var mag=function(){ return '<path d="M100 28 Q70 18 22 22 V126 Q70 122 100 132 Z" fill="#fff" '+st+'/>'
    +'<path d="M100 28 Q130 18 178 22 V126 Q130 122 100 132 Z" fill="#fff" '+st+'/>'
    +'<rect x="32" y="34" width="56" height="34" rx="3" fill="'+S+'" '+th(2.5)+'/>'
    +lines(34,82,52,3,12); };
  /* 茶杯 */
  var cup=function(x,y,col){ return '<path d="M'+(x-18)+' '+y+' h36 l-4 24 a6 6 0 0 1 -6 5 h-16 a6 6 0 0 1 -6 -5 Z" fill="'+col+'" '+st+'/><ellipse cx="'+x+'" cy="'+(y+2)+'" rx="14" ry="3" fill="#b5762f"/>'; };

  var art={};
  /* ---- 核心觀念三張卡 ---- */
  /* 口語誇飾：大笑的聊天泡泡＋誇張的線條 */
  art.casual=svg(
    '<path d="M30 24 H150 a16 16 0 0 1 16 16 V88 a16 16 0 0 1 -16 16 H76 L50 128 V104 H30 a16 16 0 0 1 -16 -16 V40 a16 16 0 0 1 16 -16 Z" fill="'+L+'" '+st+'/>'
   +'<path d="M56 54 q8 -8 16 0 M104 54 q8 -8 16 0" fill="none" '+th(3.5)+'/>'
   +'<path d="M62 70 H114 q-4 22 -26 22 q-22 0 -26 -22 Z" fill="'+R+'" '+th(3)+'/>'
   +'<path d="M176 30 l14 -10 M180 52 h16 M176 74 l14 10" '+th(4)+'/>'),
  /* 精準數字：履歷紙＋印章＋年份 */
  art.precise=svg(
    '<rect x="40" y="16" width="104" height="122" rx="6" fill="#fff" '+st+'/>'
   +'<circle cx="64" cy="42" r="12" fill="'+L+'" '+th(2.5)+'/>'
   +'<line x1="84" y1="36" x2="130" y2="36" '+th(3)+'/><line x1="84" y1="48" x2="118" y2="48" '+th(3)+'/>'
   +'<rect x="52" y="64" width="54" height="22" rx="4" fill="'+S+'" '+th(2.5)+'/>'+txt(79,81,'2019',15,B)
   +lines(52,100,80,3,12)
   +chk(150,112,22)),
  /* 時間放句首：時鐘在一排字塊的最前面 */
  art.front=svg(
    '<circle cx="40" cy="64" r="26" fill="#fff" '+th(4)+'/><path d="M40 64 V48 M40 64 L52 70" fill="none" '+th(3.5)+'/>'
   +'<rect x="76" y="52" width="38" height="24" rx="6" fill="'+S+'" '+st+'/>'
   +'<rect x="120" y="52" width="30" height="24" rx="6" fill="'+L+'" '+st+'/>'
   +'<rect x="156" y="52" width="32" height="24" rx="6" fill="'+L+'" '+st+'/>'
   +'<path d="M170 112 H40" stroke="'+A+'" stroke-width="6" stroke-linecap="round"/>'
   +'<path d="M54 98 L38 112 L54 126" fill="none" stroke="'+A+'" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>'),

  /* ---- 情境對話：雜誌採訪老茶行 ---- */
  /* 0 老茶行店面 */
  art.teashop=svg(
    '<path d="M8 138 H192" '+st+'/>'
   +'<rect x="30" y="50" width="140" height="88" fill="'+L+'" '+st+'/>'
   +'<path d="M22 50 L40 24 H160 L178 50 Z" fill="'+D+'" '+st+'/>'
   +'<rect x="66" y="30" width="68" height="16" rx="3" fill="'+R+'" '+th(2.5)+'/>'
   +'<rect x="80" y="76" width="40" height="62" fill="#8a5a3b" '+st+'/><line x1="100" y1="76" x2="100" y2="138" '+th(2.5)+'/>'
   +'<rect x="40" y="80" width="28" height="24" fill="'+S+'" '+st+'/><rect x="132" y="80" width="28" height="24" fill="'+S+'" '+st+'/>'
   +'<path d="M48 62 v6 M152 62 v6" '+th(2.5)+'/>'
   +'<ellipse cx="48" cy="58" rx="7" ry="9" fill="'+R+'" '+th(2.5)+'/><ellipse cx="152" cy="58" rx="7" ry="9" fill="'+R+'" '+th(2.5)+'/>'
   +leaf(54,122,-20)+leaf(146,122,20)),
  /* 1 你們家做多久了？採訪筆記本＋筆＋問號 */
  art.noteq=svg(
    '<rect x="30" y="26" width="96" height="110" rx="6" fill="#fff" '+st+'/>'
   +'<g fill="none" '+th(3)+'><circle cx="48" cy="26" r="5"/><circle cx="68" cy="26" r="5"/><circle cx="88" cy="26" r="5"/><circle cx="108" cy="26" r="5"/></g>'
   +lines(44,52,68,5,15)
   +'<g transform="rotate(30 140 96)"><rect x="132" y="56" width="14" height="70" rx="5" fill="'+B+'" '+st+'/><path d="M132 126 L139 142 L146 126 Z" fill="'+L+'" '+st+'/></g>'
   +qb(166,34)),
  /* 2 從祖父那一代：泛黃的老照片 */
  art.photo=svg(
    '<rect x="44" y="18" width="112" height="118" rx="4" fill="#8a5a3b" '+st+'/>'
   +'<rect x="56" y="30" width="88" height="94" fill="#e9d3a8" '+th(2.5)+'/>'
   +'<path d="M70 124 q0 -34 30 -34 q30 0 30 34 Z" fill="#a07850" '+th(2.5)+'/>'
   +'<circle cx="100" cy="66" r="18" fill="#f1dfbd" '+th(2.5)+'/>'
   +'<path d="M84 60 q16 -18 32 0" fill="#c9c2b8" '+th(2.5)+'/>'
   +'<circle cx="93" cy="68" r="4" fill="none" '+th(2)+'/><circle cx="107" cy="68" r="4" fill="none" '+th(2)+'/>'
   +'<path d="M94 78 q6 4 12 0" fill="none" '+th(2)+'/>'),
  /* 3 記者需要查得到的數字：雜誌上空著的格子 */
  art.magblank=svg(
    mag()
   +'<rect x="112" y="40" width="54" height="40" rx="4" fill="none" stroke="'+A+'" stroke-width="3.5" stroke-dasharray="6 5"/>'
   +lines(114,96,52,2,12)),
  /* 4 可以給我確切的年份嗎？月曆＋問號 */
  art.yearq=svg(
    '<rect x="30" y="32" width="100" height="98" rx="8" fill="#fff" '+st+'/>'
   +'<path d="M30 54 V40 a8 8 0 0 1 8 -8 H122 a8 8 0 0 1 8 8 V54 Z" fill="'+R+'" '+st+'/>'
   +'<line x1="52" y1="24" x2="52" y2="40" '+th(4)+'/><line x1="108" y1="24" x2="108" y2="40" '+th(4)+'/>'
   +'<g fill="'+C+'"><rect x="42" y="64" width="18" height="16" rx="2"/><rect x="66" y="64" width="18" height="16" rx="2"/><rect x="90" y="64" width="18" height="16" rx="2"/><rect x="42" y="88" width="18" height="16" rx="2"/><rect x="90" y="88" width="18" height="16" rx="2"/><rect x="42" y="110" width="18" height="12" rx="2"/><rect x="66" y="110" width="18" height="12" rx="2"/></g>'
   +'<rect x="66" y="88" width="18" height="16" rx="2" fill="'+A+'" opacity=".5"/>'
   +qb(166,40)),
  /* 5 since 1958：茶葉罐 */
  art.tin=svg(
    '<rect x="56" y="34" width="88" height="102" rx="8" fill="'+R+'" '+st+'/>'
   +'<rect x="50" y="22" width="100" height="18" rx="5" fill="'+Y+'" '+st+'/>'
   +'<rect x="68" y="58" width="64" height="58" rx="6" fill="'+C+'" '+th(2.5)+'/>'
   +leaf(100,78,0)
   +txt(100,108,'1958',16)
   +leaf(166,120,30)+leaf(30,118,-30)),
  /* 6 可以登上雜誌了：雜誌＋打勾 */
  art.magok=svg(
    mag()
   +'<rect x="112" y="40" width="54" height="40" rx="4" fill="'+Y+'" '+th(2.5)+'/>'+txt(139,66,'1958',13)
   +lines(114,96,52,2,12)
   +chk(168,124,18)),
  /* 7 從祖父開店到現在 68 年：老店門＋紅燈籠 */
  art.oldshop=svg(
    '<path d="M10 138 H190" '+st+'/>'
   +'<rect x="44" y="40" width="112" height="98" fill="#c9a77a" '+st+'/>'
   +'<path d="M36 44 H164 L156 30 H44 Z" fill="'+G+'" '+st+'/>'
   +'<rect x="70" y="60" width="60" height="78" fill="#8a5a3b" '+st+'/>'
   +'<g '+th(2)+'><line x1="80" y1="60" x2="80" y2="138"/><line x1="90" y1="60" x2="90" y2="138"/><line x1="100" y1="60" x2="100" y2="138"/><line x1="110" y1="60" x2="110" y2="138"/><line x1="120" y1="60" x2="120" y2="138"/></g>'
   +'<line x1="58" y1="44" x2="58" y2="56" '+th(2.5)+'/><ellipse cx="58" cy="68" rx="9" ry="12" fill="'+R+'" '+th(2.5)+'/>'
   +'<line x1="142" y1="44" x2="142" y2="56" '+th(2.5)+'/><ellipse cx="142" cy="68" rx="9" ry="12" fill="'+R+'" '+th(2.5)+'/>'
   ),
  /* 8 在父親身邊做了二十年：茶壺＋兩個茶杯 */
  art.cups=svg(
    '<path d="M10 132 H190" '+st+'/>'
   +'<g transform="translate(-12 0)">'
   +'<path d="M62 70 q-30 0 -30 30 q0 32 30 32 h40 q30 0 30 -32 q0 -30 -30 -30 Z" fill="'+B+'" '+st+'/>'
   +'<path d="M132 88 q20 -4 26 -22" fill="none" '+th(5)+'/>'
   +'<path d="M34 86 q-18 4 -16 22 q2 14 18 14" fill="none" '+th(4)+'/>'
   +'<rect x="70" y="56" width="24" height="14" rx="4" fill="'+B+'" '+st+'/><circle cx="82" cy="52" r="5" fill="'+Y+'" '+th(2.5)+'/>'
   +'</g>'
   +cup(150,104,'#fff')+cup(178,104,L)
   +'<path d="M150 92 q-4 -8 0 -14 M178 92 q-4 -8 0 -14" fill="none" stroke="#c9c2b8" stroke-width="3" stroke-linecap="round"/>'),
  /* 9 時間一放前面，語氣有分量：交接的鑰匙 */
  art.key=svg(
    '<circle cx="62" cy="70" r="30" fill="'+Y+'" '+st+'/><circle cx="62" cy="70" r="12" fill="#fff" '+st+'/>'
   +'<path d="M92 64 H172 V76 H160 V92 H148 V76 H136 V88 H124 V76 H92 Z" fill="'+Y+'" '+st+'/>'
   +'<path d="M40 100 q-10 26 -24 34 M48 102 q0 22 10 36" fill="none" stroke="'+R+'" stroke-width="6" stroke-linecap="round"/>'
   +'<path d="M30 92 q12 14 30 6" fill="'+R+'" '+st+'/>'
   +'<path d="M150 22 l6 12 l13 2 l-10 9 l3 13 l-12 -7 l-12 7 l3 -13 l-10 -9 l13 -2 Z" fill="'+A+'" '+th(2.5)+'/>');

  var out={}; for(var k in art) out[P+k]=art[k];
  Object.assign(window.GVIDEO_ART, out);
})();

/* ============================================================
   dg20260915b2 — For and Since in Register and Rhetoric
   Grammar in Use Unit 12（For and since; It's been … since）＋語域與時間前置
   ============================================================ */
window.GVIDEO.dg20260915b2 = {
  kind: 'gram',
  date: '2026-09-15',
  title: 'For and Since: Register and Rhetoric',
  titleCn: 'for 與 since：看場合，把時間講得有分量',
  titleArt: ['dg20260915b2_casual', 'dg20260915b2_precise', 'dg20260915b2_front'],
  scene: '雜誌採訪老茶行 Interview at a tea shop',
  sceneArt: 'dg20260915b2_teashop',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Natalie', voice: 'f' },
    T: { name: 'Victor', voice: 'm' }
  },
  expr: {
    casual:  { t: 'for ages / forever', cn: '口語誇飾：親切但模糊', ex: 'My cousin has lived in Berlin for ages.', exCn: '我表哥住柏林住超久了。', note: '聊天很自然；正式場合聽起來像沒算過' },
    precise: { t: 'for + 確切長度 / since + 起點', cn: '正式：精準、查得到', ex: 'Ms. Lin has chaired the safety committee since 2021.', exCn: '林小姐從 2021 年起擔任安全委員會主席。', note: 'over、nearly、just under 讓數字精準又不死板' },
    front:   { t: "It's been … since / Having + p.p.", cn: '把時間放句首，製造張力', ex: "It's been a decade since the bridge last closed for repairs.", exCn: '這座橋上一次封閉維修，已經是十年前的事了。', note: 'since 後面接過去式子句；Having 的主詞＝主句的主詞' }
  },
  chapters: [
    { cn: '開場' }, { cn: '同一段時間，三種說法' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  cardsKick: 'Same span, three registers 同一段時間，三種說法',
  cards: [
    { art: 'dg20260915b2_casual',  lab: '口語誇飾',   who: 'for ages' },
    { art: 'dg20260915b2_precise', lab: '精準數字',   who: 'since 2019' },
    { art: 'dg20260915b2_front',   lab: '時間放句首', who: "It's been…since" }
  ],
  flow: [
    { q: '是跟熟人聊天嗎？',             a: '可以誇飾', en: 'for ages・forever' },
    { q: '是面試、報告或正式文件嗎？',   a: '講精準',   en: 'for + 確切長度・since + 起點' },
    { q: '想強調時間流逝或資歷分量？',   a: '時間前置', en: "It's been + 時間 + since・Having + p.p." }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: '同一段資歷，說「超久了」跟說出確切年份，印象完全不同。這支影片教你看場合挑說法。', vis: { type: 'title' } },

    /* ---- 1 核心：三種說法 ---- */
    { ch: 1, sp: 'N', zh: '交代持續多久，好幾種說法都對，差別在語域，也就是場合。', vis: { type: 'cards', show: 0 } },
    { ch: 1, sp: 'N', zh: '跟朋友聊天，常用 for ages 或 forever 誇張一下，親切但不精準。',
      hi: [{ t: 'for ages', k: 'casual', c: 3 }], vis: { type: 'cards', show: 1, pop: true } },
    { ch: 1, sp: 'T', en: "I've been fixing old radios for ages.", cn: '我修老收音機修超久了。',
      hi: [{ t: 'for ages', cn: '口語誇飾', k: 'casual', c: 3 }], vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'N', zh: '面試或正式文件，就講精準：for 加確切長度，或 since 加起點。',
      hi: [{ t: 'since', k: 'precise', c: 4 }], vis: { type: 'cards', show: 2, pop: true } },
    { ch: 1, sp: 'A', en: 'I have worked as a sound engineer since 2014.', cn: '我從 2014 年起擔任音響工程師。',
      hi: [{ t: 'since 2014', cn: '精準起點', k: 'precise', c: 4 }], vis: { type: 'cards', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: '精準的數字讓人知道你真的算過，可信度就出來了。',
      vis: { type: 'cards', show: 2 } },
    { ch: 1, sp: 'N', zh: '想要張力，可以把時間放句首，用 It\'s been 加時間，再接 since。',
      hi: [{ t: "It's been", k: 'front', c: 2 }], vis: { type: 'cards', show: 3, pop: true } },
    { ch: 1, sp: 'T', en: "It's been twelve years since this theater last sold out.", cn: '這間劇院上一次滿座，已經是十二年前的事了。',
      hi: [{ t: "It's been twelve years since", cn: '時間放句首', k: 'front', c: 2 }], vis: { type: 'cards', show: 3, lit: 2 } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: '精準版：現在完成式，加 for 和確切長度，或 since 和起點。',
      hi: [{ t: 'since', k: 'precise', c: 4 }],
      vis: { type: 'pattern', kick: '精準交代 Precise', rows: [
        { lab: '長度', blocks: [{ t: 'I', k: 's' }, { t: 'have managed', k: 'v' }, { t: 'the archive', k: 'n' }, { t: 'for nearly nine years', k: 'o' }] },
        { lab: '起點', blocks: [{ t: 'The clinic', k: 's' }, { t: 'has offered', k: 'v' }, { t: 'night appointments', k: 'n' }, { t: 'since 2020', k: 'o' }] }
      ], note: 'over、just over、nearly：精準但不死板' } },
    { ch: 2, sp: 'N', zh: '時間前置第一種：It\'s been 加時間，再加 since 和過去式子句。正式寫作寫 It has been。',
      hi: [{ t: "It's been", k: 'front', c: 2 }],
      vis: { type: 'pattern', kick: "It's been + 時間 + since", rows: [
        { lab: '口語', blocks: [{ t: "It's been", k: 'v' }, { t: 'six months', k: 'o' }, { t: 'since', k: 'x' }, { t: 'we last spoke', k: 'n' }] },
        { lab: '正式', blocks: [{ t: 'It has been', k: 'v' }, { t: 'two decades', k: 'o' }, { t: 'since', k: 'x' }, { t: 'the law changed', k: 'n' }] }
      ], note: 'since 後面的子句用過去式' } },
    { ch: 2, sp: 'N', zh: '第二種：Having 加過去分詞，再加 for 或 since，資歷放句首，後面接結果。',
      hi: [{ t: 'Having', k: 'front', c: 2 }],
      vis: { type: 'pattern', kick: 'Having + p.p. + for／since', rows: [
        { lab: '句首', blocks: [{ t: 'Having coached', k: 'v' }, { t: 'for a decade,', k: 'o' }] },
        { lab: '結果', blocks: [{ t: 'she', k: 's' }, { t: 'spotted', k: 'v' }, { t: 'the weakness', k: 'n' }, { t: 'right away', k: 'o' }] }
      ], note: 'Having 那一段的主詞，就是後面主句的主詞' } },
    { ch: 2, sp: 'N', zh: '強調一直在做的過程，用完成進行式；講狀態，用完成式。',
      vis: { type: 'pattern', kick: '過程還是狀態？', rows: [
        { lab: '過程', blocks: [{ t: 'We', k: 's' }, { t: 'have been testing', k: 'v' }, { t: 'the new battery', k: 'n' }, { t: 'since spring', k: 'o' }] },
        { lab: '狀態', blocks: [{ t: 'The battery', k: 's' }, { t: 'has been', k: 'v' }, { t: 'on sale', k: 'n' }, { t: 'since spring', k: 'o' }] }
      ], note: 'be、know、have 這類狀態動詞用完成式' } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: '來聽記者 Natalie 採訪老茶行老闆 Victor，注意他怎麼從口語換成精準說法。', vis: { type: 'scene', art: 'dg20260915b2_teashop' } },
    { ch: 3, sp: 'A', en: 'How long has your family been in the tea business?', cn: '你們家做茶葉生意多久了？',
      hi: [{ t: 'How long has your family been', cn: '問多久', c: 1 }], vis: { type: 'scene', art: 'dg20260915b2_noteq' } },
    { ch: 3, sp: 'T', en: "Oh, forever. Since my grandfather's time, really.", cn: '喔，超久了。其實從我祖父那一代就開始了。',
      hi: [{ t: 'forever', cn: '口語誇飾', k: 'casual', c: 3 }], vis: { type: 'scene', art: 'dg20260915b2_photo' } },
    { ch: 3, sp: 'N', zh: 'forever 很親切，但要寫進文章，需要查得到的數字。',
      hi: [{ t: 'forever', k: 'casual', c: 3 }], vis: { type: 'scene', art: 'dg20260915b2_magblank' } },
    { ch: 3, sp: 'A', en: 'For the article, could you give me the exact year?', cn: '為了寫文章，可以給我確切的年份嗎？',
      vis: { type: 'scene', art: 'dg20260915b2_yearq' } },
    { ch: 3, sp: 'T', en: 'Certainly. We have blended our own tea since 1958.', cn: '當然。我們從 1958 年就開始自己拼配茶葉。',
      hi: [{ t: 'since 1958', cn: '精準起點', k: 'precise', c: 4 }], vis: { type: 'scene', art: 'dg20260915b2_tin' } },
    { ch: 3, sp: 'N', zh: 'Victor 改用 since 加年份，馬上變成能登上雜誌的說法。',
      hi: [{ t: 'since', k: 'precise', c: 4 }], vis: { type: 'scene', art: 'dg20260915b2_magok' } },
    { ch: 3, sp: 'A', en: "So it's been sixty-eight years since your grandfather opened the shop.", cn: '所以從你祖父開店到現在，已經六十八年了。',
      hi: [{ t: "it's been sixty-eight years since", cn: '時間放句首', k: 'front', c: 2 }], vis: { type: 'scene', art: 'dg20260915b2_oldshop' } },
    { ch: 3, sp: 'T', en: "That's right. Having worked beside my father for twenty years, I took over in 2019.", cn: '沒錯。我在父親身邊做了二十年，2019 年接手。',
      hi: [{ t: 'Having worked', cn: '資歷放句首', k: 'front', c: 2 }], vis: { type: 'scene', art: 'dg20260915b2_cups' } },
    { ch: 3, sp: 'N', zh: 'Natalie 用 It\'s been，Victor 用 Having，時間一放前面，語氣就有分量。',
      hi: [{ t: "It's been", k: 'front', c: 2 }, { t: 'Having', k: 'front', c: 2 }], vis: { type: 'scene', art: 'dg20260915b2_key' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '同一段經歷，聊天跟寫履歷，說法不同。',
      vis: { type: 'vs', sm: true, kick: '聊天 vs 履歷',
        a: { w: "I've been into photography forever.", def: '我玩攝影玩超久了。', cn: '聊天 → 誇飾、親切' },
        b: { w: 'I have worked as a freelance photographer since 2017.', def: '我從 2017 年起擔任自由攝影師。', cn: '履歷 → 精準、查得到' } } },
    { ch: 4, sp: 'A', en: "I've been into photography forever.", cn: '我玩攝影玩超久了。',
      hi: [{ t: 'forever', cn: '誇飾', k: 'casual', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '聊天 vs 履歷',
        a: { w: "I've been into photography forever.", def: '我玩攝影玩超久了。', cn: '聊天 → 誇飾、親切' },
        b: { w: 'I have worked as a freelance photographer since 2017.', def: '我從 2017 年起擔任自由攝影師。', cn: '履歷 → 精準、查得到' } } },
    { ch: 4, sp: 'T', en: 'I have worked as a freelance photographer since 2017.', cn: '我從 2017 年起擔任自由攝影師。',
      hi: [{ t: 'since 2017', cn: '精準', k: 'precise', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '聊天 vs 履歷',
        a: { w: "I've been into photography forever.", def: '我玩攝影玩超久了。', cn: '聊天 → 誇飾、親切' },
        b: { w: 'I have worked as a freelance photographer since 2017.', def: '我從 2017 年起擔任自由攝影師。', cn: '履歷 → 精準、查得到' } } },
    { ch: 4, sp: 'N', zh: '第一句適合聚會；第二句放進履歷，年資一目了然。',
      vis: { type: 'vs', sm: true, kick: '聊天 vs 履歷',
        a: { w: "I've been into photography forever.", def: '我玩攝影玩超久了。', cn: '聊天 → 誇飾、親切' },
        b: { w: 'I have worked as a freelance photographer since 2017.', def: '我從 2017 年起擔任自由攝影師。', cn: '履歷 → 精準、查得到' } } },
    { ch: 4, sp: 'N', zh: '再看一組。時間放到句首，讀起來更有重量。',
      vis: { type: 'vs', sm: true, kick: '平鋪直敘 vs 時間前置',
        a: { w: "The village hasn't had a doctor for five years.", def: '這個村子五年沒有醫生了。', cn: '平鋪直敘 → 交代事實' },
        b: { w: "It's been five years since the village last had a doctor.", def: '這個村子上一次有醫生，已經是五年前的事了。', cn: '時間前置 → 強調時間流逝' } } },
    { ch: 4, sp: 'A', en: "The village hasn't had a doctor for five years.", cn: '這個村子五年沒有醫生了。',
      hi: [{ t: 'for five years', cn: '長度', k: 'precise', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '平鋪直敘 vs 時間前置',
        a: { w: "The village hasn't had a doctor for five years.", def: '這個村子五年沒有醫生了。', cn: '平鋪直敘 → 交代事實' },
        b: { w: "It's been five years since the village last had a doctor.", def: '這個村子上一次有醫生，已經是五年前的事了。', cn: '時間前置 → 強調時間流逝' } } },
    { ch: 4, sp: 'T', en: "It's been five years since the village last had a doctor.", cn: '這個村子上一次有醫生，已經是五年前的事了。',
      hi: [{ t: "It's been five years since", cn: '時間前置', k: 'front', c: 2 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '平鋪直敘 vs 時間前置',
        a: { w: "The village hasn't had a doctor for five years.", def: '這個村子五年沒有醫生了。', cn: '平鋪直敘 → 交代事實' },
        b: { w: "It's been five years since the village last had a doctor.", def: '這個村子上一次有醫生，已經是五年前的事了。', cn: '時間前置 → 強調時間流逝' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '最後給你一個判斷流程，照順序問三個問題。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一問：是跟熟人聊天嗎？是的話，for ages、forever 都很自然。',
      hi: [{ t: 'for ages', k: 'casual', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'T', en: "We've lived next to that noisy bar for ages.", cn: '我們住在那間吵死人的酒吧隔壁超久了。',
      hi: [{ t: 'for ages', cn: '口語', k: 'casual', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二問：是面試或正式文件嗎？是的話，用 for 或 since 講出數字。',
      hi: [{ t: 'since', k: 'precise', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'A', en: 'The committee has reviewed this policy every year since 2016.', cn: '委員會從 2016 年起每年審查這項政策。',
      hi: [{ t: 'since 2016', cn: '精準起點', k: 'precise', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '第三問：想強調時間或資歷嗎？是的話，把時間放到句首。',
      hi: [{ t: '句首', k: 'front', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'T', en: 'Having taught in rural schools for eight years, he knew which books would work.', cn: '他在偏鄉學校教了八年書，知道哪些書會有用。',
      hi: [{ t: 'Having taught', cn: '資歷放句首', k: 'front', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說說看。看到中文情境，先自己用英文說出來，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：面試時，你要說你從 2018 年起就在物流業工作。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '面試時，你要說你從 2018 年起就在物流業工作。' } },
    { ch: 6, sp: 'A', en: 'I have worked in logistics since 2018.', cn: '我從 2018 年起就在物流業工作。',
      hi: [{ t: 'since 2018', cn: '面試 → 精準', k: 'precise', c: 4 }],
      vis: { type: 'speak', n: 1, show: true, sit: '面試時，你要說你從 2018 年起就在物流業工作。', a: 'I have worked in logistics since 2018.' } },
    { ch: 6, sp: 'N', zh: '情境二：寫正式的信，開頭說，距離我們上次合作已經四年了。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '寫正式的信，開頭說，距離我們上次合作已經四年了。' } },
    { ch: 6, sp: 'T', en: 'It has been four years since we last worked together.', cn: '距離我們上次合作，已經四年了。',
      hi: [{ t: 'It has been four years since', cn: '正式 → 時間前置', k: 'front', c: 2 }],
      vis: { type: 'speak', n: 2, show: true, sit: '寫正式的信，開頭說，距離我們上次合作已經四年了。', a: 'It has been four years since we last worked together.' } },
    { ch: 6, sp: 'N', zh: '情境三：跟老朋友聊天，你誇張地說，你等這張專輯等超久了。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '跟老朋友聊天，你誇張地說，你等這張專輯等超久了。' } },
    { ch: 6, sp: 'A', en: "I've been waiting for this album forever.", cn: '我等這張專輯等超久了。',
      hi: [{ t: 'forever', cn: '聊天 → 誇飾', k: 'casual', c: 3 }],
      vis: { type: 'speak', n: 3, show: true, sit: '跟老朋友聊天，你誇張地說，你等這張專輯等超久了。', a: "I've been waiting for this album forever." } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結：聊天可以誇飾；正式場合用 for 和 since 講精準；想要張力，時間放句首。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '下次交代「多久」之前，先問一句：這句話是說給誰聽的？', vis: { type: 'end' } }
  ]
};
