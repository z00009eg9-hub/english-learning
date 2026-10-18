/* ============================================================
   B2 Read 文法影片解說 — dg20261002b1p（Unit 17 have and have got，B1+）
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
  /* 咖啡色小狗的頭，cx,cy＝臉中心，s＝縮放 */
  var dog=function(cx,cy,s){ s=s||1;
    return '<g transform="translate('+cx+' '+cy+') scale('+s+')">'
     +'<path d="M-30 -24 C-50 -20 -52 10 -40 22 C-34 12 -30 0 -26 -10 Z" fill="#8a5a33" '+st+'/>'
     +'<path d="M30 -24 C50 -20 52 10 40 22 C34 12 30 0 26 -10 Z" fill="#8a5a33" '+st+'/>'
     +'<ellipse cx="0" cy="0" rx="32" ry="30" fill="#c8894a" '+st+'/>'
     +'<ellipse cx="0" cy="14" rx="16" ry="12" fill="'+C+'" '+th(2.5)+'/>'
     +'<circle cx="-12" cy="-6" r="4" fill="'+D+'"/><circle cx="12" cy="-6" r="4" fill="'+D+'"/>'
     +'<ellipse cx="0" cy="8" rx="6" ry="4" fill="'+D+'"/><path d="M0 12 V18 M-6 20 q6 4 12 0" fill="none" '+th(2.5)+'/></g>'; };
  var P='dg20261002b1p_';
  var art={};

  /* 卡片 1：現在的擁有——房子＋愛心 */
  art[P+'home']=svg(
    '<line x1="10" y1="134" x2="190" y2="134" '+st+'/>'
   +'<rect x="48" y="66" width="104" height="68" fill="'+C+'" '+st+'/>'
   +'<path d="M36 70 L100 22 L164 70 Z" fill="'+R+'" '+st+'/>'
   +'<rect x="88" y="96" width="26" height="38" fill="'+L+'" '+st+'/>'
   +'<rect x="60" y="82" width="20" height="18" fill="'+S+'" '+th(2.5)+'/><rect x="122" y="82" width="20" height="18" fill="'+S+'" '+th(2.5)+'/>'
   +'<path d="M100 60 c-4 -8 -16 -6 -14 2 c2 6 14 12 14 12 c0 0 12 -6 14 -12 c2 -8 -10 -10 -14 -2 Z" fill="'+Y+'" '+th(2.5)+'/>');
  /* 卡片 2：動作片語——咖啡杯＋聊天泡泡 */
  art[P+'coffee']=svg(
    '<path d="M36 64 H116 V108 a24 24 0 0 1 -24 24 H60 a24 24 0 0 1 -24 -24 Z" fill="#fff" '+st+'/>'
   +'<path d="M116 76 h8 a14 14 0 0 1 0 28 h-10" fill="none" '+th(4)+'/>'
   +'<ellipse cx="76" cy="66" rx="36" ry="6" fill="#8a5a33" '+th(2.5)+'/>'
   +'<path d="M62 52 q-6 -8 0 -16 M84 52 q-6 -8 0 -16" fill="none" stroke="#c9c2b8" stroke-width="4" stroke-linecap="round"/>'
   +'<path d="M136 18 H184 a8 8 0 0 1 8 8 V52 a8 8 0 0 1 -8 8 H170 V72 L158 60 H136 a8 8 0 0 1 -8 -8 V26 a8 8 0 0 1 8 -8 Z" fill="'+G+'" '+st+'/>'
   +'<circle cx="148" cy="39" r="4" fill="#fff"/><circle cx="160" cy="39" r="4" fill="#fff"/><circle cx="172" cy="39" r="4" fill="#fff"/>');
  /* 卡片 3：離開現在——沙漏 */
  art[P+'hourglass']=svg(
    '<rect x="56" y="14" width="88" height="12" rx="4" fill="#a0673a" '+st+'/><rect x="56" y="124" width="88" height="12" rx="4" fill="#a0673a" '+st+'/>'
   +'<path d="M66 26 H134 C134 56 108 64 108 75 C108 86 134 94 134 124 H66 C66 94 92 86 92 75 C92 64 66 56 66 26 Z" fill="'+S+'" '+st+'/>'
   +'<path d="M80 44 H120 C116 56 104 62 100 70 C96 62 84 56 80 44 Z" fill="'+Y+'"/>'
   +'<path d="M74 122 C78 104 92 98 100 96 C108 98 122 104 126 122 Z" fill="'+Y+'"/>'
   +'<line x1="100" y1="76" x2="100" y2="96" stroke="'+Y+'" stroke-width="3"/>');

  /* 情境 0：動物收容所——房子＋腳印招牌 */
  art[P+'shelter']=svg(
    '<line x1="6" y1="134" x2="194" y2="134" '+st+'/>'
   +'<rect x="30" y="60" width="140" height="74" fill="'+L+'" '+st+'/>'
   +'<path d="M20 64 L100 22 L180 64 Z" fill="'+G+'" '+st+'/>'
   +'<rect x="84" y="90" width="32" height="44" fill="#a0673a" '+st+'/>'
   +'<circle cx="100" cy="48" r="11" fill="#fff" '+th(2.5)+'/>'
   +'<g fill="#8a5a33"><ellipse cx="100" cy="51" rx="5" ry="4"/><circle cx="94" cy="44" r="2.2"/><circle cx="100" cy="42" r="2.2"/><circle cx="106" cy="44" r="2.2"/></g>'
   +'<rect x="42" y="76" width="28" height="24" fill="'+S+'" '+th(2.5)+'/><rect x="130" y="76" width="28" height="24" fill="'+S+'" '+th(2.5)+'/>');
  /* 情境 1：那隻狗有名字嗎？——狗舍柵欄後的狗＋問號 */
  art[P+'dogq']=svg(
    '<rect x="14" y="20" width="148" height="116" rx="6" fill="'+L+'" '+st+'/>'
   +dog(88,82,1.3)
   +'<g '+th(5)+'><line x1="40" y1="20" x2="40" y2="136"/><line x1="70" y1="20" x2="70" y2="136"/><line x1="106" y1="20" x2="106" y2="136"/><line x1="136" y1="20" x2="136" y2="136"/></g>'
   +'<rect x="14" y="20" width="148" height="116" rx="6" fill="none" '+st+'/>'
   +qb(176,30));
  /* 情境 2：耳朵很軟——狗＋旁邊小愛心 */
  art[P+'ears']=svg(dog(100,82,1.5)
   +'<path d="M30 30 c-3 -6 -12 -5 -11 1 c1 5 11 10 11 10 c0 0 10 -5 11 -10 c1 -6 -8 -7 -11 -1 Z" fill="'+R+'" '+th(2.5)+'/>'
   +'<path d="M170 30 c-3 -6 -12 -5 -11 1 c1 5 11 10 11 10 c0 0 10 -5 11 -10 c1 -6 -8 -7 -11 -1 Z" fill="'+R+'" '+th(2.5)+'/>');
  /* 情境 3：名字和特徵＝擁有——項圈名牌 */
  art[P+'tag']=svg(
    '<path d="M30 40 Q100 96 170 40" fill="none" stroke="'+R+'" stroke-width="14" stroke-linecap="round"/>'
   +'<path d="M30 40 Q100 96 170 40" fill="none" '+th(2)+'/>'
   +'<circle cx="100" cy="72" r="6" fill="#c9c2b8" '+st+'/>'
   +'<path d="M100 128 C70 108 62 96 68 86 C74 76 90 78 100 90 C110 78 126 76 132 86 C138 96 130 108 100 128 Z" fill="'+Y+'" '+st+'/>');
  /* 情境 4：可以看看她嗎？——眼睛＋問號 */
  art[P+'look']=svg(
    '<path d="M14 76 Q90 10 166 76 Q90 142 14 76 Z" fill="#fff" '+st+'/>'
   +'<circle cx="90" cy="76" r="26" fill="'+B+'" '+st+'/><circle cx="90" cy="76" r="11" fill="'+D+'"/><circle cx="98" cy="68" r="5" fill="#fff"/>'
   +qb(176,30));
  /* 情境 5：她正在吃午餐——狗碗＋飼料 */
  art[P+'dogbowl']=svg(
    '<path d="M30 92 H170 L156 132 H44 Z" fill="'+B+'" '+st+'/>'
   +'<ellipse cx="100" cy="92" rx="70" ry="12" fill="#fff" '+st+'/>'
   +'<g fill="#a0673a" '+th(2)+'><circle cx="74" cy="88" r="6"/><circle cx="90" cy="84" r="6"/><circle cx="108" cy="86" r="6"/><circle cx="124" cy="90" r="6"/><circle cx="98" cy="94" r="6"/></g>'
   +'<path d="M120 30 c-8 -10 4 -18 10 -10 l24 24 c8 -6 18 4 10 10 c6 8 -4 18 -10 10 l-24 -24 c-8 6 -18 -4 -10 -10 Z" fill="'+C+'" '+st+'/>');
  /* 情境 6：動作才能用 having——時鐘＋叉子（吃飯時間） */
  art[P+'mealtime']=svg(
    '<circle cx="84" cy="76" r="54" fill="#fff" '+th(4)+'/>'
   +'<g '+th(4)+'><line x1="84" y1="28" x2="84" y2="36"/><line x1="132" y1="76" x2="124" y2="76"/><line x1="84" y1="124" x2="84" y2="116"/><line x1="36" y1="76" x2="44" y2="76"/></g>'
   +'<path d="M84 76 V40 M84 76 L106 76" fill="none" '+th(4)+'/><circle cx="84" cy="76" r="5" fill="'+D+'"/>'
   +'<path d="M168 20 V56 M160 20 V44 q0 10 8 10 q8 0 8 -10 V20 M168 56 V134" fill="none" '+th(4)+'/>');
  /* 情境 7：她剛來時有健康問題嗎？——聽診器＋問號 */
  art[P+'vet']=svg(
    '<path d="M50 20 V60 a30 30 0 0 0 60 0 V20" fill="none" '+th(5)+'/>'
   +'<circle cx="50" cy="18" r="6" fill="#c9c2b8" '+st+'/><circle cx="110" cy="18" r="6" fill="#c9c2b8" '+st+'/>'
   +'<path d="M80 90 V112 a20 20 0 0 0 40 0" fill="none" '+th(5)+'/>'
   +'<circle cx="128" cy="108" r="16" fill="#c9c2b8" '+st+'/><circle cx="128" cy="108" r="7" fill="#fff" '+th(2.5)+'/>'
   +qb(168,40));
  /* 情境 8：腳掌受傷過，現在好了——包紮的腳掌 */
  art[P+'paw']=svg(
    '<ellipse cx="96" cy="96" rx="40" ry="34" fill="#c8894a" '+st+'/>'
   +'<g fill="#c8894a" '+st+'><ellipse cx="50" cy="52" rx="14" ry="18"/><ellipse cx="80" cy="34" rx="14" ry="18"/><ellipse cx="114" cy="34" rx="14" ry="18"/><ellipse cx="144" cy="52" rx="14" ry="18"/></g>'
   +'<rect x="56" y="86" width="80" height="22" rx="6" fill="#fff" '+st+' transform="rotate(-12 96 97)"/>'
   +'<path d="M84 92 v14 M96 90 v14 M108 88 v14" stroke="'+L+'" stroke-width="3" transform="rotate(-12 96 97)"/>'
   +chk(166,116,18));
  /* 情境 9：問過去要走 do 那套——月曆＋往回的箭頭 */
  art[P+'calback']=svg(
    cal(76,30,96,96)
   +'<path d="M64 78 H14 M30 62 L14 78 L30 94" fill="none" stroke="'+R+'" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>');

  Object.assign(window.GVIDEO_ART, art);
})();

/* ============================================================
   dg20261002b1p — Where have got Can and Can't Go
   Grammar in Use Unit 17（have and have got）
   ============================================================ */
window.GVIDEO.dg20261002b1p = {
  kind: 'gram',
  date: '2026-10-02',
  title: 'Where have got Fits',
  titleCn: 'have 與 have got：哪裡可以互換，哪裡不行',
  titleArt: ['dg20261002b1p_home', 'dg20261002b1p_coffee', 'dg20261002b1p_hourglass'],
  scene: '動物收容所 Animal shelter',
  sceneArt: 'dg20261002b1p_shelter',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Grace', voice: 'f' },
    T: { name: 'Ryan', voice: 'm' }
  },
  expr: {
    st:    { t: 'have (got)', cn: '現在的擁有、特徵、病痛 → 兩種都行', ex: 'This old house has got a creaky staircase.', exCn: '這棟老房子的樓梯會嘎吱響。', note: 'have got 比較口語，書面用 have' },
    act:   { t: 'have a break / a chat', cn: '動作片語 → 只用 have，可以有進行式', ex: 'The twins are having a nap upstairs.', exCn: '雙胞胎正在樓上睡午覺。', note: '測試：能說 is having 的就是動作' },
    tense: { t: 'had / Did … have / will have', cn: '離開現在式 → got 拿掉', ex: 'Did your grandparents have a TV back then?', exCn: '你爺爺奶奶那時候有電視嗎？', note: '不定詞也只用 to have' }
  },
  chapters: [
    { cn: '開場' }, { cn: 'have got 的地盤' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  cardsKick: 'Where have got fits 地盤在哪',
  cards: [
    { art: 'dg20261002b1p_home',      lab: '現在的擁有', who: '兩種都行' },
    { art: 'dg20261002b1p_coffee',    lab: '動作片語',   who: '只用 have，不加 got' },
    { art: 'dg20261002b1p_hourglass', lab: '離開現在式', who: '過去未來去掉 got' }
  ],
  flow: [
    { q: '是現在的擁有、特徵、病痛嗎？', a: '兩種都行', en: 'have／have got' },
    { q: '改成 is having 講得通嗎？',    a: '動作',     en: 'have（不加 got）' },
    { q: '句子離開現在式了嗎？',         a: '拿掉 got', en: 'had／Did…have／will have' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: 'have 跟 have got，哪裡能互換、哪裡不行？一起畫出 have got 的地盤。', vis: { type: 'title' } },

    /* ---- 1 核心：have got 的地盤 ---- */
    { ch: 1, sp: 'N', zh: 'have got 不是新時態，只是 have 的口語替身，而且只在一個地方上場。', vis: { type: 'cards', show: 0 } },
    { ch: 1, sp: 'N', zh: '這個地方就是現在的擁有：東西、家人、長相、身體不舒服。這時兩種說法意思一樣。',
      hi: [{ t: '現在的擁有', k: 'st', c: 3 }], vis: { type: 'cards', show: 1, pop: true } },
    { ch: 1, sp: 'A', en: 'My little brother has got freckles on his nose.', cn: '我弟弟鼻子上有雀斑。',
      hi: [{ t: 'has got', cn: '特徵', k: 'st', c: 3 }], vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'N', zh: '可是很多片語其實是動作，像休息一下、聊一聊。這種 have 不能加 got，還能用進行式。',
      hi: [{ t: '動作', k: 'act', c: 4 }], vis: { type: 'cards', show: 2, pop: true } },
    { ch: 1, sp: 'T', en: "I'm having a late breakfast with my aunt.", cn: '我正在跟阿姨吃很晚的早餐。',
      hi: [{ t: "I'm having a late breakfast", cn: '動作', k: 'act', c: 4 }], vis: { type: 'cards', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: '分辨方法：改成 is having 試試看。講得通就是動作；講不通，才輪到 have got 上場。',
      vis: { type: 'cards', show: 2 } },
    { ch: 1, sp: 'N', zh: '第三個邊界是時間。have got 只有現在式，過去、未來、不定詞，全部只用 have。',
      hi: [{ t: '只用 have', k: 'tense', c: 2 }], vis: { type: 'cards', show: 3, pop: true } },
    { ch: 1, sp: 'A', en: "I'd love to have a bigger kitchen someday.", cn: '我好希望有一天能有個更大的廚房。',
      hi: [{ t: 'to have', cn: '不定詞', k: 'tense', c: 2 }], vis: { type: 'cards', show: 3, lit: 2 } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: '現在的擁有，兩種都對：have 中性，寫文件用；have got 口語，聊天用。',
      hi: [{ t: '兩種都對', k: 'st', c: 3 }],
      vis: { type: 'pattern', kick: '現在的擁有 · 兩種都行', rows: [
        { lab: '中性', blocks: [{ t: 'Our building', k: 's' }, { t: 'has', k: 'v' }, { t: 'a rooftop garden', k: 'o' }] },
        { lab: '口語', blocks: [{ t: 'Our building', k: 's' }, { t: 'has got', k: 'v' }, { t: 'a rooftop garden', k: 'o' }] }
      ], note: "縮寫：it's got、we've got" } },
    { ch: 2, sp: 'N', zh: '問句和否定有兩套：一套借 do，一套把 have 搬到前面。兩套不要各拿一半。',
      vis: { type: 'pattern', kick: '問句與否定 · 兩套', rows: [
        { lab: 'do・問句', blocks: [{ t: 'Do', k: 'n' }, { t: 'you', k: 's' }, { t: 'have', k: 'v' }, { t: 'a spare one?', k: 'o' }] },
        { lab: 'do・否定', blocks: [{ t: 'I', k: 's' }, { t: "don't have", k: 'v' }, { t: 'one', k: 'o' }] },
        { lab: 'have・問句', blocks: [{ t: 'Have', k: 'n' }, { t: 'you', k: 's' }, { t: 'got', k: 'v' }, { t: 'a spare one?', k: 'o' }] },
        { lab: 'have・否定', blocks: [{ t: 'I', k: 's' }, { t: "haven't got", k: 'v' }, { t: 'one', k: 'o' }] }
      ], note: '美式英文日常更常用 do 這套' } },
    { ch: 2, sp: 'N', zh: '一離開現在，got 就消失：過去的問句用 Did you have，未來用 will have。',
      hi: [{ t: 'Did you have', k: 'tense', c: 2 }],
      vis: { type: 'pattern', kick: '換時態 · 只剩 have', rows: [
        { lab: '過去', blocks: [{ t: 'Did', k: 'n' }, { t: 'you', k: 's' }, { t: 'have', k: 'v' }, { t: 'a bike', k: 'n' }, { t: 'in high school?', k: 'o' }] },
        { lab: '未來', blocks: [{ t: 'We', k: 's' }, { t: 'will have', k: 'v' }, { t: 'a new coach', k: 'n' }, { t: 'soon', k: 'o' }] }
      ] } },
    { ch: 2, sp: 'N', zh: '這些動作片語裡的 have，都不能加 got。',
      vis: { type: 'family', kick: '動作片語 · 不加 got', core: 'have = do', coreCn: '動作的 have', art: 'dg20261002b1p_coffee', items: [
        { t: 'have a break · a rest', cn: '休息' }, { t: 'have a chat · a look', cn: '聊一下・看一下' },
        { t: 'have a party · a good time', cn: '開派對・玩得開心' }, { t: 'have trouble · difficulty', cn: '遇到困難' }
      ] } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: '來聽 Ryan 到動物收容所想領養狗，跟志工 Grace 的對話。', vis: { type: 'scene', art: 'dg20261002b1p_shelter' } },
    { ch: 3, sp: 'T', en: 'Has that brown dog got a name?', cn: '那隻咖啡色的狗有名字嗎？',
      hi: [{ t: 'got a name', cn: '擁有', k: 'st', c: 3 }], vis: { type: 'scene', art: 'dg20261002b1p_dogq' } },
    { ch: 3, sp: 'A', en: "Yes, she has. She's called Mocha, and she's got really soft ears.", cn: '有，她叫 Mocha，耳朵超軟的。',
      hi: [{ t: "she's got", cn: '特徵', k: 'st', c: 3 }], vis: { type: 'scene', art: 'dg20261002b1p_ears' } },
    { ch: 3, sp: 'N', zh: '名字、耳朵都是 Mocha 現在擁有的，正好是 have got 的地盤。',
      hi: [{ t: 'have got 的地盤', k: 'st', c: 3 }], vis: { type: 'scene', art: 'dg20261002b1p_tag' } },
    { ch: 3, sp: 'T', en: 'Can I have a look at her?', cn: '我可以看看她嗎？',
      hi: [{ t: 'have a look', cn: '看一下', k: 'act', c: 4 }], vis: { type: 'scene', art: 'dg20261002b1p_look' } },
    { ch: 3, sp: 'A', en: "Sure, but she's having her lunch right now.", cn: '可以，不過她現在正在吃午餐。',
      hi: [{ t: "she's having her lunch", cn: '正在吃', k: 'act', c: 4 }], vis: { type: 'scene', art: 'dg20261002b1p_dogbowl' } },
    { ch: 3, sp: 'N', zh: "看一下、吃午餐都是動作，所以能說 she's having，這裡就不加 got。",
      hi: [{ t: "she's having", k: 'act', c: 4 }], vis: { type: 'scene', art: 'dg20261002b1p_mealtime' } },
    { ch: 3, sp: 'T', en: 'Did she have any health problems when she arrived?', cn: '她剛來的時候有健康問題嗎？',
      hi: [{ t: 'Did she have', cn: '過去的問句', k: 'tense', c: 2 }], vis: { type: 'scene', art: 'dg20261002b1p_vet' } },
    { ch: 3, sp: 'A', en: "She had a hurt paw, but it's fine now.", cn: '她那時腳掌受傷，不過現在好了。',
      hi: [{ t: 'She had', cn: '過去的擁有', k: 'tense', c: 2 }], vis: { type: 'scene', art: 'dg20261002b1p_paw' } },
    { ch: 3, sp: 'N', zh: '問的是她剛來的時候，離開現在了，所以問句用 Did she have，回答也只用 had。',
      hi: [{ t: 'Did she have', k: 'tense', c: 2 }], vis: { type: 'scene', art: 'dg20261002b1p_calback' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '同一個人，一句講他的特徵，一句講他正在做的事。',
      vis: { type: 'vs', sm: true, kick: '狀態 vs 動作',
        a: { w: 'My grandpa has got a loud laugh.', def: '我爺爺笑聲很大。', cn: '特徵（狀態）→ 可以用 has got' },
        b: { w: 'My grandpa is having a nap on the sofa.', def: '我爺爺正在沙發上睡午覺。', cn: '睡午覺（動作）→ 可以用 is having' } } },
    { ch: 4, sp: 'A', en: 'My grandpa has got a loud laugh.', cn: '我爺爺笑聲很大。',
      hi: [{ t: 'has got', cn: '特徵', k: 'st', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '狀態 vs 動作',
        a: { w: 'My grandpa has got a loud laugh.', def: '我爺爺笑聲很大。', cn: '特徵（狀態）→ 可以用 has got' },
        b: { w: 'My grandpa is having a nap on the sofa.', def: '我爺爺正在沙發上睡午覺。', cn: '睡午覺（動作）→ 可以用 is having' } } },
    { ch: 4, sp: 'T', en: 'My grandpa is having a nap on the sofa.', cn: '我爺爺正在沙發上睡午覺。',
      hi: [{ t: 'is having a nap', cn: '動作', k: 'act', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '狀態 vs 動作',
        a: { w: 'My grandpa has got a loud laugh.', def: '我爺爺笑聲很大。', cn: '特徵（狀態）→ 可以用 has got' },
        b: { w: 'My grandpa is having a nap on the sofa.', def: '我爺爺正在沙發上睡午覺。', cn: '睡午覺（動作）→ 可以用 is having' } } },
    { ch: 4, sp: 'N', zh: '笑聲大是一直都在的特徵；睡午覺有開始有結束，是動作，所以能說 is having。',
      vis: { type: 'vs', sm: true, kick: '狀態 vs 動作',
        a: { w: 'My grandpa has got a loud laugh.', def: '我爺爺笑聲很大。', cn: '特徵（狀態）→ 可以用 has got' },
        b: { w: 'My grandpa is having a nap on the sofa.', def: '我爺爺正在沙發上睡午覺。', cn: '睡午覺（動作）→ 可以用 is having' } } },
    { ch: 4, sp: 'N', zh: '再看問句。同樣問有沒有護照，時間一換，整套問法就跟著換。',
      vis: { type: 'vs', sm: true, kick: '現在 vs 過去的問句',
        a: { w: 'Have you got your passport?', def: '你護照有帶嗎？', cn: '現在的擁有 → Have you got' },
        b: { w: 'Did you have your own passport back then?', def: '你那時候有自己的護照嗎？', cn: '過去的擁有 → Did you have' } } },
    { ch: 4, sp: 'A', en: 'Have you got your passport?', cn: '你護照有帶嗎？',
      hi: [{ t: 'Have you got', cn: '現在', k: 'st', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '現在 vs 過去的問句',
        a: { w: 'Have you got your passport?', def: '你護照有帶嗎？', cn: '現在的擁有 → Have you got' },
        b: { w: 'Did you have your own passport back then?', def: '你那時候有自己的護照嗎？', cn: '過去的擁有 → Did you have' } } },
    { ch: 4, sp: 'T', en: 'Did you have your own passport back then?', cn: '你那時候有自己的護照嗎？',
      hi: [{ t: 'Did you have', cn: '過去', k: 'tense', c: 2 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '現在 vs 過去的問句',
        a: { w: 'Have you got your passport?', def: '你護照有帶嗎？', cn: '現在的擁有 → Have you got' },
        b: { w: 'Did you have your own passport back then?', def: '你那時候有自己的護照嗎？', cn: '過去的擁有 → Did you have' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '最後給你一個判斷流程，照順序問三個問題。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一問：是現在的擁有、長相或病痛嗎？是的話兩種都行，看場合挑語氣。',
      hi: [{ t: '兩種都行', k: 'st', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'A', en: "I've got a stiff neck this morning.", cn: '我今天早上脖子好僵。',
      hi: [{ t: "I've got", cn: '病痛', k: 'st', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二問：改成 is having 講得通嗎？講得通就是動作，只用 have，不加 got。',
      hi: [{ t: '動作', k: 'act', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'T', en: "They're having a party on the roof right now.", cn: '他們現在正在屋頂上開派對。',
      hi: [{ t: "They're having a party", cn: '動作', k: 'act', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '第三問：講的是過去、未來，或前面有 to 嗎？那就拿掉 got，只用 have。',
      hi: [{ t: '拿掉 got', k: 'tense', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'A', en: 'By summer, the park will have a new playground.', cn: '到夏天，公園就會有一座新的遊樂場。',
      hi: [{ t: 'will have', cn: '未來', k: 'tense', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說說看。看到中文情境，先自己用英文說出來，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：你想問朋友有沒有 OK 繃。用 have got 問。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '你手指被紙割到，想問朋友有沒有 OK 繃。用 have got 問。' } },
    { ch: 6, sp: 'T', en: 'Have you got any bandages?', cn: '你有 OK 繃嗎？',
      hi: [{ t: 'Have you got', cn: '現在的擁有 → have got', k: 'st', c: 3 }],
      vis: { type: 'speak', n: 1, show: true, sit: '你手指被紙割到，想問朋友有沒有 OK 繃。用 have got 問。', a: 'Have you got any bandages?' } },
    { ch: 6, sp: 'N', zh: '情境二：朋友打來找你哥哥，他正在洗澡。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '朋友打電話找你哥哥，他正在洗澡，你幫他接。' } },
    { ch: 6, sp: 'A', en: "He's having a shower right now.", cn: '他現在正在洗澡。',
      hi: [{ t: "He's having a shower", cn: '動作 → 不加 got', k: 'act', c: 4 }],
      vis: { type: 'speak', n: 2, show: true, sit: '朋友打電話找你哥哥，他正在洗澡，你幫他接。', a: "He's having a shower right now." } },
    { ch: 6, sp: 'N', zh: '情境三：你想問朋友，小時候有沒有養過寵物。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '你想問朋友，小時候有沒有養過寵物。' } },
    { ch: 6, sp: 'T', en: 'Did you have any pets when you were little?', cn: '你小時候有養寵物嗎？',
      hi: [{ t: 'Did you have', cn: '過去 → Did you have', k: 'tense', c: 2 }],
      vis: { type: 'speak', n: 3, show: true, sit: '你想問朋友，小時候有沒有養過寵物。', a: 'Did you have any pets when you were little?' } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結：現在的擁有，have 和 have got 都行；動作片語只用 have；一離開現在式，got 就拿掉。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: 'have got 只在一個地方上場：現在的擁有。其他時候，交給 have 就對了。', vis: { type: 'end' } }
  ]
};
