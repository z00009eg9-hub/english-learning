/* ============================================================
   B2 Read 文法影片解說 — dg20261006b1（Unit 17 have and have got，B1）
   格式與規則見 b2lab/tools/GVIDEO_SPEC.md；範本 gvideo/dg20261014b1.js。
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
  /* 手電筒（橫放，燈頭朝右），x,y＝筒身左上 */
  var torch=function(x,y){ return '<rect x="'+x+'" y="'+y+'" width="74" height="26" rx="6" fill="'+B+'" '+st+'/>'
    +'<path d="M'+(x+72)+' '+y+' L'+(x+98)+' '+(y-10)+' V'+(y+36)+' L'+(x+72)+' '+(y+26)+' Z" fill="#c9c2b8" '+st+'/>'
    +'<line x1="'+(x+98)+'" y1="'+(y-10)+'" x2="'+(x+98)+'" y2="'+(y+36)+'" '+th(5)+'/>'
    +'<rect x="'+(x+22)+'" y="'+(y+7)+'" width="14" height="12" rx="3" fill="'+R+'" '+th(2.5)+'/>'; };
  var P='dg20261006b1_';
  var art={};

  /* 卡片 1：擁有（狀態）——綁蝴蝶結的禮物盒 */
  art[P+'gift']=svg(
    '<rect x="44" y="62" width="112" height="74" rx="4" fill="'+R+'" '+st+'/>'
   +'<rect x="36" y="44" width="128" height="22" rx="4" fill="'+R+'" '+st+'/>'
   +'<rect x="92" y="44" width="16" height="92" fill="'+Y+'" '+st+'/>'
   +'<path d="M100 44 C80 20 58 26 68 40 C74 48 90 46 100 44 Z M100 44 C120 20 142 26 132 40 C126 48 110 46 100 44 Z" fill="'+Y+'" '+st+'/>');
  /* 卡片 2：做事（動作）——盤子＋刀叉 */
  art[P+'plate']=svg(
    '<circle cx="100" cy="78" r="50" fill="#fff" '+st+'/><circle cx="100" cy="78" r="34" fill="'+C+'" '+th(2.5)+'/>'
   +'<path d="M84 72 q16 -18 32 0 q-16 18 -32 0 Z" fill="'+A+'" '+th(2.5)+'/>'
   +'<path d="M28 30 V64 M20 30 V50 q0 10 8 10 q8 0 8 -10 V30 M28 64 V128" fill="none" '+th(4)+'/>'
   +'<path d="M172 128 V30 q-14 10 -14 40 q0 10 14 10" fill="#c9c2b8" '+th(4)+'/>');
  /* 卡片 3：離開現在式——時鐘＋往回、往前的箭頭 */
  art[P+'clock']=svg(
    '<circle cx="100" cy="70" r="40" fill="#fff" '+th(4)+'/>'
   +'<path d="M100 70 V44 M100 70 L118 80" fill="none" '+th(4)+'/><circle cx="100" cy="70" r="5" fill="'+D+'"/>'
   +'<path d="M70 126 H20 M34 114 L20 126 L34 138" fill="none" stroke="'+R+'" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>'
   +'<path d="M130 126 H180 M166 114 L180 126 L166 138" fill="none" stroke="'+B+'" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>');

  /* 情境 0：露營——帳篷＋松樹＋月亮 */
  art[P+'camp']=svg(
    '<line x1="6" y1="134" x2="194" y2="134" '+st+'/>'
   +'<path d="M30 134 L80 52 L130 134 Z" fill="'+A+'" '+st+'/><path d="M80 52 L68 134 H92 Z" fill="#33405c" '+st+'/>'
   +'<path d="M162 30 L140 76 H152 L134 110 H190 L172 76 H184 Z" fill="'+G+'" '+st+'/><rect x="156" y="110" width="12" height="24" fill="#a0673a" '+st+'/>'
   +'<path d="M40 14 a16 16 0 1 0 18 22 a13 13 0 1 1 -18 -22 Z" fill="'+Y+'" '+st+'/>');
  /* 情境 1：有手電筒嗎？——手電筒＋問號 */
  art[P+'torchq']=svg(torch(26,70)+qb(166,40));
  /* 情境 2：還有多的電池——三顆電池 */
  art[P+'battery']=svg(
    '<g '+st+'><rect x="30" y="44" width="34" height="84" rx="6" fill="'+G+'"/><rect x="83" y="44" width="34" height="84" rx="6" fill="'+G+'"/><rect x="136" y="44" width="34" height="84" rx="6" fill="'+G+'"/></g>'
   +'<g fill="#c9c2b8" '+th(2.5)+'><rect x="40" y="34" width="14" height="10" rx="2"/><rect x="93" y="34" width="14" height="10" rx="2"/><rect x="146" y="34" width="14" height="10" rx="2"/></g>'
   +'<path d="M30 70 H64 M83 70 H117 M136 70 H170" stroke="#fff" stroke-width="4"/>'
   +txt(47,108,'+',22,'#fff')+txt(100,108,'+',22,'#fff')+txt(153,108,'+',22,'#fff'));
  /* 情境 3：都是擁有的東西——亮起來的手電筒 */
  art[P+'beam']=svg(
    '<rect x="0" y="0" width="200" height="150" rx="10" fill="#33405c"/>'
   +'<path d="M104 60 L196 22 V132 L104 92 Z" fill="'+Y+'" opacity=".55"/>'
   +torch(8,63)
   +chk(160,114,18));
  /* 情境 4：隔壁在生營火嗎？——飄來的煙＋問號 */
  art[P+'smoke']=svg(
    '<line x1="10" y1="136" x2="150" y2="136" '+st+'/>'
   +'<path d="M30 136 L56 96 L82 136 Z" fill="'+A+'" '+st+'/>'
   +'<path d="M112 136 C100 124 104 112 114 102 C116 114 124 116 126 108 C134 120 130 132 122 136 Z" fill="'+A+'" '+st+'/>'
   +'<g fill="#e4ddd3" '+st+'><circle cx="112" cy="86" r="11"/><circle cx="100" cy="64" r="14"/><circle cx="114" cy="40" r="17"/></g>'
   +qb(166,40));
  /* 情境 5：他們玩得很開心——營火 */
  art[P+'fire']=svg(
    '<path d="M100 20 C130 54 140 70 132 96 C126 116 74 116 68 96 C60 70 80 60 84 40 C92 54 96 58 100 20 Z" fill="'+A+'" '+st+'/>'
   +'<path d="M100 60 C114 76 118 86 112 100 C106 110 94 110 88 100 C84 90 92 80 100 60 Z" fill="'+Y+'" '+th(2.5)+'/>'
   +'<rect x="40" y="110" width="120" height="16" rx="8" fill="#a0673a" '+st+' transform="rotate(10 100 118)"/>'
   +'<rect x="40" y="110" width="120" height="16" rx="8" fill="#c8894a" '+st+' transform="rotate(-10 100 118)"/>');
  /* 情境 6：正在發生的動作——吉他＋音符 */
  art[P+'guitar']=svg(
    '<g transform="rotate(-30 90 90)">'
   +'<circle cx="70" cy="104" r="28" fill="#c8894a" '+st+'/><circle cx="104" cy="104" r="22" fill="#c8894a" '+st+'/>'
   +'<rect x="104" y="98" width="70" height="12" fill="#a0673a" '+st+'/><rect x="172" y="94" width="18" height="20" rx="3" fill="#a0673a" '+st+'/>'
   +'<circle cx="82" cy="104" r="9" fill="'+D+'"/></g>'
   +'<path d="M40 50 V18 L64 12 V42" fill="none" '+th(3)+'/><circle cx="34" cy="50" r="7" fill="'+D+'"/><circle cx="58" cy="42" r="7" fill="'+D+'"/>'
   +'<path d="M84 30 V8" fill="none" '+th(3)+'/><circle cx="78" cy="30" r="6" fill="'+D+'"/>');
  /* 情境 7：去年也有一頂一樣的帳篷——舊照片 */
  art[P+'photo']=svg(
    '<g transform="rotate(-6 100 75)"><rect x="34" y="18" width="132" height="116" rx="4" fill="#fff" '+st+'/>'
   +'<rect x="46" y="30" width="108" height="76" fill="'+S+'" '+th(2.5)+'/>'
   +'<path d="M70 106 L100 56 L130 106 Z" fill="'+A+'" '+th(2.5)+'/><path d="M100 56 L92 106 H108 Z" fill="#33405c" '+th(2)+'/>'
   +'<circle cx="138" cy="44" r="8" fill="'+Y+'" '+th(2)+'/></g>'
   +'<rect x="84" y="8" width="34" height="14" fill="'+Y+'" opacity=".8" transform="rotate(-6 100 15)"/>');
  /* 情境 8：明年會有自己的車——小汽車 */
  art[P+'car']=svg(
    '<line x1="6" y1="132" x2="194" y2="132" '+st+'/>'
   +'<path d="M24 112 V90 a10 10 0 0 1 10 -10 H54 L74 52 H130 L150 80 H168 a10 10 0 0 1 10 10 V112 Z" fill="'+R+'" '+st+'/>'
   +'<path d="M80 60 H100 V80 H64 Z M108 60 H126 L140 80 H108 Z" fill="'+S+'" '+th(2.5)+'/>'
   +'<circle cx="60" cy="114" r="14" fill="'+D+'"/><circle cx="60" cy="114" r="5" fill="#c9c2b8"/>'
   +'<circle cx="144" cy="114" r="14" fill="'+D+'"/><circle cx="144" cy="114" r="5" fill="#c9c2b8"/>'
   +'<rect x="166" y="88" width="12" height="8" rx="2" fill="'+Y+'" '+th(2)+'/>');
  /* 情境 9：離開現在，got 拿掉——月曆＋兩頭箭頭 */
  art[P+'cal']=svg(
    cal(56,30,88,94)
   +'<path d="M46 76 H10 M22 64 L10 76 L22 88" fill="none" stroke="'+R+'" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>'
   +'<path d="M154 76 H190 M178 64 L190 76 L178 88" fill="none" stroke="'+B+'" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>');

  Object.assign(window.GVIDEO_ART, art);
})();

/* ============================================================
   dg20261006b1 — Owning or Doing?
   Grammar in Use Unit 17（have and have got）
   ============================================================ */
window.GVIDEO.dg20261006b1 = {
  kind: 'gram',
  date: '2026-10-06',
  title: 'Owning or Doing?',
  titleCn: '擁有還是在做？have 的兩個身分',
  titleArt: ['dg20261006b1_gift', 'dg20261006b1_plate', 'dg20261006b1_clock'],
  scene: '露營 Camping trip',
  sceneArt: 'dg20261006b1_camp',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Emma', voice: 'f' },
    T: { name: 'Jake', voice: 'm' }
  },
  expr: {
    own:  { t: 'have / have got', cn: '擁有（狀態）→ 可以加 got，不能變 having', ex: 'Our neighbor has got three noisy parrots.', exCn: '我們鄰居養了三隻很吵的鸚鵡。', note: '東西、家人、長相、生病都算擁有' },
    act:  { t: 'be having', cn: '做事（動作）→ 可以用進行式，不能加 got', ex: 'The kids are having a pillow fight upstairs.', exCn: '小孩們正在樓上打枕頭仗。', note: 'have lunch、have a look、have a good time、have trouble' },
    past: { t: 'had / will have', cn: '離開現在式 → got 拿掉', ex: 'As a teenager, I had a pet turtle.', exCn: '我十幾歲的時候養過一隻烏龜。', note: 'have got 只有現在式' }
  },
  chapters: [
    { cn: '開場' }, { cn: 'have 的兩個身分' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  cardsKick: 'Two jobs of have 兩個身分',
  cards: [
    { art: 'dg20261006b1_gift',  lab: '擁有（狀態）', who: '可以加 got' },
    { art: 'dg20261006b1_plate', lab: '做事（動作）', who: '可以用 having' },
    { art: 'dg20261006b1_clock', lab: '離開現在式',   who: '只剩 had' }
  ],
  flow: [
    { q: '這個 have 是「擁有」嗎？',     a: '狀態',     en: 'have／have got（不加 -ing）' },
    { q: '是吃飯、看一下這類動作嗎？',   a: '動作',     en: 'have／be having（不加 got）' },
    { q: '句子在講過去或未來嗎？',       a: '拿掉 got', en: 'had／will have' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: '同一個 have，有時能加 got，有時能變 having。一起來分清楚 have 的兩個身分。', vis: { type: 'title' } },

    /* ---- 1 核心：兩個身分 ---- */
    { ch: 1, sp: 'N', zh: '用 have 之前，先問自己：它是在「擁有」，還是在「做事」？', vis: { type: 'cards', show: 0 } },
    { ch: 1, sp: 'N', zh: '第一個身分是擁有。東西、家人、長相、生病都算，這時候可以換成 have got。',
      hi: [{ t: '擁有', k: 'own', c: 3 }], vis: { type: 'cards', show: 1, pop: true } },
    { ch: 1, sp: 'A', en: 'My uncle has got a really old camera.', cn: '我叔叔有一台很舊的相機。',
      hi: [{ t: 'has got', cn: '擁有', k: 'own', c: 3 }], vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'N', zh: '第二個身分是做事。吃飯、看一下，整組是一個動作，所以可以用進行式。',
      hi: [{ t: '做事', k: 'act', c: 4 }], vis: { type: 'cards', show: 2, pop: true } },
    { ch: 1, sp: 'T', en: 'My parents are having dinner right now.', cn: '我爸媽現在正在吃晚餐。',
      hi: [{ t: 'are having dinner', cn: '正在吃', k: 'act', c: 4 }], vis: { type: 'cards', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: '兩個身分規則相反：擁有沒有「正在進行」的畫面，不會變 having；做事的 have，不能加 got。',
      vis: { type: 'cards', show: 2 } },
    { ch: 1, sp: 'N', zh: '還有一條邊界：have got 只活在現在。講過去或未來，got 就拿掉，用 had 或 will have。',
      hi: [{ t: 'got 就拿掉', k: 'past', c: 2 }], vis: { type: 'cards', show: 3, pop: true } },
    { ch: 1, sp: 'A', en: 'Back in college, I had a really slow laptop.', cn: '大學的時候，我有一台超慢的筆電。',
      hi: [{ t: 'I had', cn: '過去的擁有', k: 'past', c: 2 }], vis: { type: 'cards', show: 3, lit: 2 } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: "擁有的句型：主詞加 have 或 has，口語就加 got，常縮寫成 I've got。",
      hi: [{ t: '擁有', k: 'own', c: 3 }],
      vis: { type: 'pattern', kick: 'Owning 擁有', rows: [
        { lab: '中性', blocks: [{ t: 'She', k: 's' }, { t: 'has', k: 'v' }, { t: 'two kids', k: 'o' }] },
        { lab: '口語', blocks: [{ t: 'She', k: 's' }, { t: "'s got", k: 'v' }, { t: 'two kids', k: 'o' }] }
      ], note: '擁有不加 -ing' } },
    { ch: 2, sp: 'N', zh: '做事的句型：have 加名詞，整組是動作。正在做，就用 be 動詞加 having。',
      hi: [{ t: '做事', k: 'act', c: 4 }],
      vis: { type: 'pattern', kick: 'Doing 做事', rows: [
        { lab: '習慣', blocks: [{ t: 'We', k: 's' }, { t: 'have', k: 'v' }, { t: 'a picnic', k: 'n' }, { t: 'every spring', k: 'o' }] },
        { lab: '正在做', blocks: [{ t: 'We', k: 's' }, { t: 'are having', k: 'v' }, { t: 'a picnic', k: 'n' }, { t: 'right now', k: 'o' }] }
      ], note: '做事的 have 不加 got' } },
    { ch: 2, sp: 'N', zh: '問句分兩套：have 那套借 do，have got 那套把 have 搬到前面。回答看問句第一個字。',
      vis: { type: 'pattern', kick: 'Questions 問句兩套', rows: [
        { lab: 'do 這套', blocks: [{ t: 'Do', k: 'x' }, { t: 'you', k: 's' }, { t: 'have', k: 'v' }, { t: 'a tent?', k: 'o' }, { t: 'Yes, I do.', k: 'n' }] },
        { lab: 'have 這套', blocks: [{ t: 'Have', k: 'x' }, { t: 'you', k: 's' }, { t: 'got', k: 'v' }, { t: 'a tent?', k: 'o' }, { t: 'Yes, I have.', k: 'n' }] }
      ] } },
    { ch: 2, sp: 'N', zh: '做事的 have 常見這幾組，都能變成 having。',
      vis: { type: 'family', kick: 'have = do · 可以用 having', core: 'have = do', coreCn: '做事的 have', art: 'dg20261006b1_plate', items: [
        { t: 'have lunch · dinner', cn: '吃飯' }, { t: 'have a look', cn: '看一下' },
        { t: 'have a good time', cn: '玩得開心' }, { t: 'have trouble', cn: '遇到麻煩' }
      ] } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: '來聽 Emma 和 Jake 去露營，注意每個 have 是哪個身分。', vis: { type: 'scene', art: 'dg20261006b1_camp' } },
    { ch: 3, sp: 'A', en: "Have you got a flashlight? It's getting dark.", cn: '你有手電筒嗎？天快黑了。',
      hi: [{ t: 'Have you got', cn: '有沒有', k: 'own', c: 3 }], vis: { type: 'scene', art: 'dg20261006b1_torchq' } },
    { ch: 3, sp: 'T', en: "Yes, I have. And I've got extra batteries too.", cn: '有啊，我還有多的電池。',
      hi: [{ t: "I've got", cn: '擁有', k: 'own', c: 3 }], vis: { type: 'scene', art: 'dg20261006b1_battery' } },
    { ch: 3, sp: 'N', zh: '手電筒、電池都是擁有的東西，所以用 have got；用 Have 問，就用 Yes, I have 答。',
      hi: [{ t: 'have got', k: 'own', c: 3 }], vis: { type: 'scene', art: 'dg20261006b1_beam' } },
    { ch: 3, sp: 'A', en: 'Are the people next to us having a campfire?', cn: '我們隔壁那群人在生營火嗎？',
      hi: [{ t: 'having a campfire', cn: '正在生營火', k: 'act', c: 4 }], vis: { type: 'scene', art: 'dg20261006b1_smoke' } },
    { ch: 3, sp: 'T', en: "Yeah, they're having a great time over there.", cn: '對啊，他們在那邊玩得超開心。',
      hi: [{ t: "they're having a great time", cn: '正在玩得開心', k: 'act', c: 4 }], vis: { type: 'scene', art: 'dg20261006b1_fire' } },
    { ch: 3, sp: 'N', zh: '生營火、玩得開心，都是正在發生的動作，所以用 having。',
      hi: [{ t: 'having', k: 'act', c: 4 }], vis: { type: 'scene', art: 'dg20261006b1_guitar' } },
    { ch: 3, sp: 'A', en: 'Last summer, my family had a tent just like this one.', cn: '去年夏天，我們家有一頂跟這個一模一樣的帳篷。',
      hi: [{ t: 'had', cn: '過去的擁有', k: 'past', c: 2 }], vis: { type: 'scene', art: 'dg20261006b1_photo' } },
    { ch: 3, sp: 'T', en: "Next year, I'll have my own car.", cn: '明年我就會有自己的車了。',
      hi: [{ t: "I'll have", cn: '未來的擁有', k: 'past', c: 2 }], vis: { type: 'scene', art: 'dg20261006b1_car' } },
    { ch: 3, sp: 'N', zh: '一句講去年，一句講明年，都離開了現在，所以只剩 had 和 will have。',
      hi: [{ t: '離開了現在', k: 'past', c: 2 }], vis: { type: 'scene', art: 'dg20261006b1_cal' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '同一隻狗，一句說牠有什麼，一句說牠正在做什麼。',
      vis: { type: 'vs', sm: true, kick: '同一隻狗，兩個身分',
        a: { w: "Our dog's got a fluffy tail.", def: '我們家的狗有一條毛茸茸的尾巴。', cn: '擁有（特徵）→ 可以加 got' },
        b: { w: 'Our dog is having a bath.', def: '我們家的狗正在洗澡。', cn: '做事（動作）→ 可以用 having' } } },
    { ch: 4, sp: 'A', en: "Our dog's got a fluffy tail.", cn: '我們家的狗有一條毛茸茸的尾巴。',
      hi: [{ t: "'s got", cn: '擁有', k: 'own', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '同一隻狗，兩個身分',
        a: { w: "Our dog's got a fluffy tail.", def: '我們家的狗有一條毛茸茸的尾巴。', cn: '擁有（特徵）→ 可以加 got' },
        b: { w: 'Our dog is having a bath.', def: '我們家的狗正在洗澡。', cn: '做事（動作）→ 可以用 having' } } },
    { ch: 4, sp: 'T', en: 'Our dog is having a bath.', cn: '我們家的狗正在洗澡。',
      hi: [{ t: 'is having a bath', cn: '正在洗澡', k: 'act', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '同一隻狗，兩個身分',
        a: { w: "Our dog's got a fluffy tail.", def: '我們家的狗有一條毛茸茸的尾巴。', cn: '擁有（特徵）→ 可以加 got' },
        b: { w: 'Our dog is having a bath.', def: '我們家的狗正在洗澡。', cn: '做事（動作）→ 可以用 having' } } },
    { ch: 4, sp: 'N', zh: '尾巴是一直都在的特徵，可以加 got；洗澡有開始有結束，是動作，能用 is having。',
      vis: { type: 'vs', sm: true, kick: '同一隻狗，兩個身分',
        a: { w: "Our dog's got a fluffy tail.", def: '我們家的狗有一條毛茸茸的尾巴。', cn: '擁有（特徵）→ 可以加 got' },
        b: { w: 'Our dog is having a bath.', def: '我們家的狗正在洗澡。', cn: '做事（動作）→ 可以用 having' } } },
    { ch: 4, sp: 'N', zh: '再看一組。時間點一換，形狀就跟著換。',
      vis: { type: 'vs', sm: true, kick: '現在 vs 過去',
        a: { w: "I've got lots of free time these days.", def: '我最近有很多空閒時間。', cn: '現在的擁有 → 可以加 got' },
        b: { w: 'I had very little free time last year.', def: '我去年幾乎沒什麼空閒時間。', cn: '過去的擁有 → 只用 had' } } },
    { ch: 4, sp: 'A', en: "I've got lots of free time these days.", cn: '我最近有很多空閒時間。',
      hi: [{ t: "I've got", cn: '現在', k: 'own', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '現在 vs 過去',
        a: { w: "I've got lots of free time these days.", def: '我最近有很多空閒時間。', cn: '現在的擁有 → 可以加 got' },
        b: { w: 'I had very little free time last year.', def: '我去年幾乎沒什麼空閒時間。', cn: '過去的擁有 → 只用 had' } } },
    { ch: 4, sp: 'T', en: 'I had very little free time last year.', cn: '我去年幾乎沒什麼空閒時間。',
      hi: [{ t: 'I had', cn: '過去', k: 'past', c: 2 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '現在 vs 過去',
        a: { w: "I've got lots of free time these days.", def: '我最近有很多空閒時間。', cn: '現在的擁有 → 可以加 got' },
        b: { w: 'I had very little free time last year.', def: '我去年幾乎沒什麼空閒時間。', cn: '過去的擁有 → 只用 had' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '最後給你一個判斷流程。看到 have，照順序問自己三個問題。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一問：是在講擁有嗎？那是狀態，have 和 have got 都行，但不能變 having。',
      hi: [{ t: '狀態', k: 'own', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'A', en: "My cousin's got a twin brother.", cn: '我表妹有一個雙胞胎哥哥。',
      hi: [{ t: "'s got", cn: '擁有', k: 'own', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二問：是吃飯、看一下這類動作嗎？那就能用 having，但不能加 got。',
      hi: [{ t: '動作', k: 'act', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'T', en: "Hold on, I'm having a look at the map.", cn: '等一下，我正在看地圖。',
      hi: [{ t: "I'm having a look", cn: '正在看', k: 'act', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '第三問：在講過去或未來嗎？那就拿掉 got，用 had 或 will have。',
      hi: [{ t: '拿掉', k: 'past', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'A', en: "We'll have more time after the exam.", cn: '考完試我們就會有比較多時間。',
      hi: [{ t: "We'll have", cn: '未來', k: 'past', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說說看。看到中文情境，先自己用英文說出來，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：跟朋友抱怨，你有一個很煩的室友。用口語說。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '你想跟朋友抱怨，你有一個很煩的室友。用口語的說法。' } },
    { ch: 6, sp: 'T', en: "I've got a really annoying roommate.", cn: '我有一個超煩的室友。',
      hi: [{ t: "I've got", cn: '擁有 → 可以加 got', k: 'own', c: 3 }],
      vis: { type: 'speak', n: 1, show: true, sit: '你想跟朋友抱怨，你有一個很煩的室友。用口語的說法。', a: "I've got a really annoying roommate." } },
    { ch: 6, sp: 'N', zh: '情境二：朋友來電，你正在吃午餐，想請他晚點再打。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '朋友打電話來，你正在吃午餐，想請他晚點再打。' } },
    { ch: 6, sp: 'A', en: "Sorry, I'm having lunch. Can I call you later?", cn: '抱歉，我正在吃午餐，晚點打給你好嗎？',
      hi: [{ t: "I'm having lunch", cn: '動作 → 可以用 having', k: 'act', c: 4 }],
      vis: { type: 'speak', n: 2, show: true, sit: '朋友打電話來，你正在吃午餐，想請他晚點再打。', a: "Sorry, I'm having lunch. Can I call you later?" } },
    { ch: 6, sp: 'N', zh: '情境三：你想說，小時候你養過一隻叫 Lucky 的狗。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '你想說，小時候你養過一隻叫 Lucky 的狗。' } },
    { ch: 6, sp: 'T', en: 'As a kid, I had a dog named Lucky.', cn: '我小時候養過一隻叫 Lucky 的狗。',
      hi: [{ t: 'I had', cn: '過去 → 只用 had', k: 'past', c: 2 }],
      vis: { type: 'speak', n: 3, show: true, sit: '你想說，小時候你養過一隻叫 Lucky 的狗。', a: 'As a kid, I had a dog named Lucky.' } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結：擁有能加 got，不能變 having；做事能用 having，不能加 got；離開現在，只剩 had 和 will have。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '下次用 have 之前，先問一句：我是在擁有，還是在做事？', vis: { type: 'end' } }
  ]
};
