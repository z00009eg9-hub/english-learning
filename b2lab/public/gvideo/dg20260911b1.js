/* ============================================================
   B2 Read 文法影片解說 — dg20260911b1（Unit 10，B1）
   格式與規則見 b2lab/tools/GVIDEO_SPEC.md；範本 gvideo/dg20261014b1.js。
   情境：湖邊晨跑、準備馬拉松（Nora／Eric）
   ============================================================ */
window.GVIDEO = window.GVIDEO || {};
window.GVIDEO_ART = window.GVIDEO_ART || {};

(function(){
  var D='#2b2118', A='#e8813a', C='#fdf6ec', L='#f7e3c9', R='#d9534f', B='#3b82c4', G='#3f9a62', Y='#f2c94c', S='#d6e8f8';
  var K='#f3c79a';
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
  var tree=function(x,y,s){ return '<rect x="'+(x-3*s)+'" y="'+(y-4*s)+'" width="'+(6*s)+'" height="'+(14*s)+'" fill="#9a6b3f" '+th(2.5)+'/><circle cx="'+x+'" cy="'+(y-12*s)+'" r="'+(13*s)+'" fill="'+G+'" '+th(2.5)+'/>'; };
  var P='dg20260911b1_';
  var art={};

  /* 有數字：寫字板上三格都打勾＋數字徽章 */
  art[P+'count']=svg(
    '<rect x="46" y="24" width="96" height="116" rx="8" fill="'+L+'" '+st+'/>'
   +'<rect x="74" y="14" width="40" height="18" rx="4" fill="#c9c2b8" '+st+'/>'
   +chk(70,56,10)+'<line x1="88" y1="56" x2="126" y2="56" '+th(4)+'/>'
   +chk(70,86,10)+'<line x1="88" y1="86" x2="126" y2="86" '+th(4)+'/>'
   +chk(70,116,10)+'<line x1="88" y1="116" x2="120" y2="116" '+th(4)+'/>'
   +'<circle cx="164" cy="40" r="20" fill="'+B+'" '+st+'/>'+txt(164,49,'3',24,'#fff'));
  /* 一直在做：碼錶外面繞一圈箭頭 */
  art[P+'doing']=svg(
    '<path d="M46 60 A58 58 0 1 1 60 124" fill="none" stroke="'+G+'" stroke-width="7" stroke-linecap="round"/>'
   +'<path d="M48 112 L68 120 L56 134 Z" fill="'+G+'" '+th(2.5)+'/>'
   +'<rect x="93" y="38" width="14" height="12" rx="2" fill="#c9c2b8" '+st+'/>'
   +'<circle cx="100" cy="86" r="34" fill="#fff" '+th(4)+'/>'
   +'<path d="M100 86 L100 62" '+th(4)+'/><path d="M100 86 L116 96" stroke="'+R+'" stroke-width="5" stroke-linecap="round"/>'
   +'<circle cx="100" cy="86" r="4" fill="'+D+'"/>'
   +'<g fill="'+D+'"><circle cx="100" cy="58" r="2.5"/><circle cx="128" cy="86" r="2.5"/><circle cx="100" cy="114" r="2.5"/><circle cx="72" cy="86" r="2.5"/></g>');
  /* 狀態動詞：小人頭上的想法雲，裡面一顆愛心 */
  art[P+'know']=svg(
    '<path d="M70 92 a20 20 0 0 1 4 -38 a28 28 0 0 1 52 -10 a24 24 0 0 1 36 22 a18 18 0 0 1 -6 26 Z" fill="#fff" '+st+'/>'
   +'<path d="M116 82 C96 70 90 58 98 52 C104 47 112 50 116 57 C120 50 128 47 134 52 C142 58 136 70 116 82 Z" fill="'+R+'" '+st+'/>'
   +'<circle cx="64" cy="102" r="6" fill="#fff" '+th(2.5)+'/><circle cx="52" cy="112" r="4" fill="#fff" '+th(2.5)+'/>'
   +'<circle cx="34" cy="126" r="16" fill="'+K+'" '+st+'/><path d="M28 124 h0 M40 124 h0" '+th(4)+'/><path d="M29 131 q5 4 10 0" fill="none" '+th(2.5)+'/>');

  /* 情境 0：湖邊公園跑道 */
  art[P+'park']=svg(
    '<rect x="6" y="70" width="188" height="72" rx="10" fill="'+G+'" opacity=".35"/>'
   +'<ellipse cx="100" cy="108" rx="84" ry="30" fill="'+R+'" '+st+'/>'
   +'<ellipse cx="100" cy="108" rx="62" ry="18" fill="'+G+'" '+st+'/>'
   +'<ellipse cx="100" cy="108" rx="73" ry="24" fill="none" stroke="#fff" stroke-width="2" stroke-dasharray="6 6"/>'
   +tree(30,60,1)+tree(170,58,1.1)+tree(150,66,0.8)
   +'<circle cx="64" cy="30" r="14" fill="'+Y+'" '+st+'/>');
  /* 情境 1：滿頭大汗、喘氣的臉＋問號 */
  art[P+'sweat']=svg(
    '<circle cx="88" cy="82" r="44" fill="'+K+'" '+st+'/>'
   +'<path d="M46 66 Q88 44 130 66 L130 56 Q88 34 46 56 Z" fill="'+R+'" '+st+'/>'
   +'<path d="M70 82 h0 M106 82 h0" '+th(6)+'/>'
   +'<ellipse cx="88" cy="106" rx="9" ry="7" fill="'+D+'"/>'
   +'<path d="M136 74 q6 10 0 14 q-6 -4 0 -14 Z" fill="'+S+'" '+th(2.5)+'/>'
   +'<path d="M146 96 q6 10 0 14 q-6 -4 0 -14 Z" fill="'+S+'" '+th(2.5)+'/>'
   +'<path d="M36 92 q6 10 0 14 q-6 -4 0 -14 Z" fill="'+S+'" '+th(2.5)+'/>'
   +qb(166,34));
  /* 情境 2：日出的湖、繞湖的虛線步道 */
  art[P+'lake']=svg(
    '<path d="M64 62 a36 36 0 0 1 72 0 Z" fill="'+Y+'" '+st+'/>'
   +'<g '+th(3.5)+'><line x1="100" y1="12" x2="100" y2="20"/><line x1="58" y1="28" x2="64" y2="34"/><line x1="142" y1="28" x2="136" y2="34"/></g>'
   +'<path d="M6 62 L44 40 L78 62 Z" fill="'+G+'" '+st+'/><path d="M120 62 L160 34 L194 62 Z" fill="'+G+'" '+st+'/>'
   +'<line x1="6" y1="62" x2="194" y2="62" '+st+'/>'
   +'<ellipse cx="100" cy="102" rx="70" ry="28" fill="'+B+'" '+st+'/>'
   +'<path d="M52 96 q6 -4 12 0 q6 4 12 0 q6 -4 12 0 M104 112 q6 -4 12 0 q6 4 12 0 q6 -4 12 0" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"/>'
   +'<ellipse cx="100" cy="102" rx="86" ry="40" fill="none" stroke="'+D+'" stroke-width="3" stroke-dasharray="2 8" stroke-linecap="round"/>');
  /* 情境 3：鬧鐘停在 6:00，旁邊小太陽 */
  art[P+'clock6']=svg(
    '<circle cx="62" cy="40" r="14" fill="'+Y+'" '+th(2.5)+'/><circle cx="138" cy="40" r="14" fill="'+Y+'" '+th(2.5)+'/>'
   +'<line x1="72" y1="132" x2="64" y2="142" '+th(4)+'/><line x1="128" y1="132" x2="136" y2="142" '+th(4)+'/>'
   +'<circle cx="100" cy="88" r="48" fill="'+R+'" '+st+'/><circle cx="100" cy="88" r="38" fill="#fff" '+st+'/>'
   +'<line x1="100" y1="88" x2="100" y2="58" '+th(4)+'/><line x1="100" y1="88" x2="100" y2="112" stroke="'+A+'" stroke-width="6" stroke-linecap="round"/>'
   +'<circle cx="100" cy="88" r="4" fill="'+D+'"/>'
   +txt(172,124,'6:00',17,A)
   +'<circle cx="174" cy="74" r="11" fill="'+Y+'" '+th(2.5)+'/><g '+th(3)+'><line x1="174" y1="52" x2="174" y2="58"/><line x1="174" y1="90" x2="174" y2="96"/><line x1="152" y1="74" x2="158" y2="74"/><line x1="190" y1="74" x2="196" y2="74"/></g>');
  /* 情境 4：跑了幾圈？——橢圓跑道上一面旗子＋問號 */
  art[P+'lapq']=svg(
    '<rect x="14" y="40" width="140" height="90" rx="45" fill="'+R+'" '+st+'/>'
   +'<rect x="38" y="62" width="92" height="46" rx="23" fill="'+G+'" '+st+'/>'
   +'<rect x="26" y="51" width="116" height="68" rx="34" fill="none" stroke="#fff" stroke-width="2" stroke-dasharray="6 6"/>'
   +'<line x1="84" y1="108" x2="84" y2="130" stroke="#fff" stroke-width="4"/>'
   +'<line x1="84" y1="40" x2="84" y2="18" '+th(3.5)+'/><path d="M84 18 L108 24 L84 30 Z" fill="'+Y+'" '+th(2.5)+'/>'
   +qb(176,36));
  /* 情境 5：運動手錶顯示 10K、五個小圓點＝五圈 */
  art[P+'watch']=svg(
    '<rect x="76" y="6" width="48" height="36" rx="6" fill="#33405c" '+st+'/><rect x="76" y="108" width="48" height="36" rx="6" fill="#33405c" '+st+'/>'
   +'<rect x="54" y="34" width="92" height="82" rx="18" fill="'+D+'" '+st+'/>'
   +'<rect x="64" y="44" width="72" height="62" rx="10" fill="#1f2a3d"/>'
   +txt(100,80,'10K',24,Y)
   +'<g fill="'+G+'"><circle cx="76" cy="95" r="4"/><circle cx="88" cy="95" r="4"/><circle cx="100" cy="95" r="4"/><circle cx="112" cy="95" r="4"/><circle cx="124" cy="95" r="4"/></g>'
   +'<rect x="146" y="64" width="8" height="18" rx="2" fill="#c9c2b8" '+th(2.5)+'/>');
  /* 情境 6：筆記本上的正字記號（五畫）＋打勾 */
  art[P+'tally']=svg(
    '<rect x="34" y="20" width="112" height="116" rx="6" fill="#fff" '+st+'/>'
   +'<g fill="'+D+'"><circle cx="34" cy="40" r="4"/><circle cx="34" cy="64" r="4"/><circle cx="34" cy="88" r="4"/><circle cx="34" cy="112" r="4"/></g>'
   +'<g stroke="'+B+'" stroke-width="7" stroke-linecap="round"><line x1="64" y1="48" x2="64" y2="108"/><line x1="82" y1="48" x2="82" y2="108"/><line x1="100" y1="48" x2="100" y2="108"/><line x1="118" y1="48" x2="118" y2="108"/></g>'
   +'<line x1="54" y1="96" x2="130" y2="58" stroke="'+R+'" stroke-width="7" stroke-linecap="round"/>'
   +chk(162,112,20));
  /* 情境 7：別在衣服上的號碼布 42K */
  art[P+'bib']=svg(
    '<path d="M50 30 L76 18 Q100 30 124 18 L150 30 L176 58 L156 74 L146 64 V138 H54 V64 L44 74 L24 58 Z" fill="'+B+'" '+st+'/>'
   +'<rect x="64" y="66" width="72" height="50" rx="4" fill="#fff" '+st+'/>'
   +txt(100,100,'42K',24,R)
   +'<g fill="#c9c2b8" '+th(2)+'><circle cx="72" cy="74" r="3.5"/><circle cx="128" cy="74" r="3.5"/><circle cx="72" cy="108" r="3.5"/><circle cx="128" cy="108" r="3.5"/></g>');
  /* 情境 8：夢想的終點拱門＋獎牌 */
  art[P+'finish']=svg(
    '<rect x="22" y="40" width="14" height="96" fill="'+R+'" '+st+'/><rect x="164" y="40" width="14" height="96" fill="'+R+'" '+st+'/>'
   +'<rect x="16" y="22" width="168" height="28" rx="6" fill="#fff" '+st+'/>'
   +'<g fill="'+D+'"><rect x="30" y="24" width="12" height="12"/><rect x="54" y="24" width="12" height="12"/><rect x="78" y="24" width="12" height="12"/><rect x="102" y="24" width="12" height="12"/><rect x="126" y="24" width="12" height="12"/><rect x="150" y="24" width="12" height="12"/>'
   +'<rect x="42" y="36" width="12" height="12"/><rect x="66" y="36" width="12" height="12"/><rect x="90" y="36" width="12" height="12"/><rect x="114" y="36" width="12" height="12"/><rect x="138" y="36" width="12" height="12"/><rect x="162" y="36" width="12" height="12"/></g>'
   +'<rect x="16" y="22" width="168" height="28" rx="6" fill="none" '+st+'/>'
   +'<line x1="36" y1="120" x2="164" y2="120" stroke="'+Y+'" stroke-width="5"/>'
   +'<path d="M88 58 L100 84 L112 58" fill="none" stroke="'+B+'" stroke-width="8" stroke-linejoin="round"/>'
   +'<circle cx="100" cy="98" r="16" fill="'+Y+'" '+st+'/><path d="M100 90 l2.5 5 l5.5 .8 l-4 3.9 l1 5.5 l-5 -2.6 l-5 2.6 l1 -5.5 l-4 -3.9 l5.5 -.8 Z" fill="'+A+'"/>');
  /* 情境 9：好幾年的月曆疊在一起，前面一顆愛心 */
  art[P+'years']=svg(
    '<g transform="rotate(-8 80 80)">'+cal(34,40,88,80)+'</g>'
   +'<g transform="rotate(4 100 80)">'+cal(54,36,88,80)+'</g>'
   +cal(76,34,88,80)
   +'<path d="M120 132 C92 114 84 98 96 90 C104 84 114 88 120 98 C126 88 136 84 144 90 C156 98 148 114 120 132 Z" fill="'+R+'" '+st+'/>');

  Object.assign(window.GVIDEO_ART, art);
})();

/* ============================================================
   dg20260911b1 — How Many or How Long?
   Grammar in Use Unit 10（I have been doing and I have done）
   ============================================================ */
window.GVIDEO.dg20260911b1 = {
  kind: 'gram',
  date: '2026-09-11',
  title: 'How Many or How Long?',
  titleCn: 'have done 跟 have been doing：看數字、看過程、看動詞',
  titleArt: ['dg20260911b1_count', 'dg20260911b1_doing', 'dg20260911b1_know'],
  scene: '湖邊晨跑 Morning run',
  sceneArt: 'dg20260911b1_park',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Nora', voice: 'f' },
    T: { name: 'Eric', voice: 'm' }
  },
  expr: {
    num:   { t: 'have + 過去分詞 + 數量', cn: '有數字、講做了多少 → have done', ex: "She's visited four museums on this trip.", exCn: '她這趟旅行已經去了四間博物館。', note: 'how many、how much、幾次的問題也用這個' },
    proc:  { t: 'have been + V-ing', cn: '沒數字、講一直在做 → have been doing', ex: "We've been waiting for the shuttle for twenty minutes.", exCn: '我們等接駁車已經等了二十分鐘。', note: '常跟 all day、since、for、how long 一起出現' },
    state: { t: 'know / want / like', cn: '狀態動詞 → 只能用 have done', ex: "I've always liked rainy afternoons.", exCn: '我一直都很喜歡下雨的午後。', note: '這些動詞講的是狀態，不是動作，所以不加 ing' }
  },
  chapters: [
    { cn: '開場' }, { cn: '三個線索' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  cardsKick: 'How many or how long? 做多少還是做多久？',
  cards: [
    { art: 'dg20260911b1_count', lab: '有數字',   who: 'have + 過去分詞' },
    { art: 'dg20260911b1_doing', lab: '一直在做', who: 'have been + V-ing' },
    { art: 'dg20260911b1_know',  lab: '狀態動詞', who: 'know、want' }
  ],
  flow: [
    { q: '句子裡有數字或數量嗎？',     a: '講多少', en: 'have + 過去分詞 + 數量' },
    { q: '沒數字，重點是一直在做？',   a: '講過程', en: 'have been + V-ing + 時間' },
    { q: '動詞是 know、want 這一類？', a: '不加ing', en: 'have + 過去分詞' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: '現在完成式什麼時候要加 been 和 ing？教你看三個線索：數字、過程、狀態動詞。', vis: { type: 'title' } },

    /* ---- 1 核心：三個線索 ---- */
    { ch: 1, sp: 'N', zh: '要選 have done 還是 have been doing，先看你想講的重點是什麼。', vis: { type: 'cards', show: 0 } },
    { ch: 1, sp: 'N', zh: '第一個線索：有數字、講做了多少，就用 have done。',
      hi: [{ t: 'have done', k: 'num', c: 3 }], vis: { type: 'cards', show: 1, pop: true } },
    { ch: 1, sp: 'A', en: "I've written six thank-you cards this morning.", cn: '我今天早上已經寫了六張感謝卡。',
      hi: [{ t: "I've written six", cn: '有數字', k: 'num', c: 3 }], vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'N', zh: '第二個線索：沒有數字，只講一直在做，就用 have been doing。',
      hi: [{ t: 'have been doing', k: 'proc', c: 4 }], vis: { type: 'cards', show: 2, pop: true } },
    { ch: 1, sp: 'T', en: "I've been cleaning the garage since lunch.", cn: '我從午餐後就一直在打掃車庫。',
      hi: [{ t: "I've been cleaning", cn: '一直在做', k: 'proc', c: 4 }], vis: { type: 'cards', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: '所以先看一眼：有沒有數字？這常常是最快的線索。', vis: { type: 'cards', show: 2 } },
    { ch: 1, sp: 'N', zh: '第三個線索：know、want、like 這種狀態動詞不加 ing，只能用 have 加過去分詞。',
      hi: [{ t: 'know、want、like', k: 'state', c: 2 }], vis: { type: 'cards', show: 3, pop: true } },
    { ch: 1, sp: 'A', en: "We've known each other since elementary school.", cn: '我們從小學就認識了。',
      hi: [{ t: "We've known", cn: '狀態動詞', k: 'state', c: 2 }], vis: { type: 'cards', show: 3, lit: 2 } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: '講做了多少：主詞加 have 或 has，再加過去分詞，後面放數量。',
      hi: [{ t: '數量', k: 'num', c: 3 }],
      vis: { type: 'pattern', kick: 'have + 過去分詞 + 數量', rows: [
        { lab: '幾張椅子', blocks: [{ t: "I've", k: 's' }, { t: 'fixed', k: 'v' }, { t: 'three chairs', k: 'o' }] },
        { lab: '幾張票',   blocks: [{ t: "She's", k: 's' }, { t: 'sold', k: 'v' }, { t: 'twenty tickets', k: 'o' }] }
      ], note: '主詞是第三人稱單數用 has：she has → she\'s' } },
    { ch: 2, sp: 'N', zh: '講一直在做：主詞加 have been，再加動詞 ing，後面常放一段時間。',
      hi: [{ t: 'have been', k: 'proc', c: 4 }],
      vis: { type: 'pattern', kick: 'have been + V-ing + 時間', rows: [
        { lab: '一整天', blocks: [{ t: "He's", k: 's' }, { t: 'been mowing', k: 'v' }, { t: 'the lawn', k: 'n' }, { t: 'all day', k: 'o' }] },
        { lab: '從九點', blocks: [{ t: "They've", k: 's' }, { t: 'been practicing', k: 'v' }, { t: 'since nine', k: 'o' }] }
      ] } },
    { ch: 2, sp: 'N', zh: '這幾組是常見的狀態動詞，講的是心裡的感覺或擁有，不是動作。',
      vis: { type: 'family', kick: 'State verbs 狀態動詞', core: 'State verbs', coreCn: '不加 ing 的動詞', art: 'dg20260911b1_know', items: [
        { t: 'know · understand', cn: '知道・懂' }, { t: 'like · love', cn: '喜歡・愛' }, { t: 'want · need', cn: '想要・需要' }, { t: 'believe · own', cn: '相信・擁有' }
      ] } },
    { ch: 2, sp: 'N', zh: '同一件事，一加上數字，就從 have been doing 換成 have done。',
      vis: { type: 'pattern', kick: '加上數字 Add a number', rows: [
        { lab: '一直在燙', blocks: [{ t: "I've been ironing shirts", k: 'v' }] },
        { lab: '燙好四件', blocks: [{ t: "I've ironed", k: 'v' }, { t: 'four shirts', k: 'o', add: true }] }
      ], note: '有了數字，重點就變成「完成了多少」' } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: '來聽 Nora 和 Eric 在湖邊晨跑時的對話，注意哪一句有數字。', vis: { type: 'scene', art: 'dg20260911b1_park' } },
    { ch: 3, sp: 'A', en: "You're out of breath, Eric. Have you been running long?", cn: 'Eric，你喘成這樣，跑很久了嗎？',
      hi: [{ t: 'Have you been running', cn: '問一直在做', k: 'proc', c: 4 }], vis: { type: 'scene', art: 'dg20260911b1_sweat' } },
    { ch: 3, sp: 'T', en: "Yes, I've been jogging around the lake since six.", cn: '對啊，我從六點就一直繞著湖慢跑。',
      hi: [{ t: "I've been jogging", cn: '一直在跑', k: 'proc', c: 4 }], vis: { type: 'scene', art: 'dg20260911b1_lake' } },
    { ch: 3, sp: 'N', zh: 'Eric 沒說跑了幾圈，只說從六點一直跑到現在，所以用 have been jogging。',
      hi: [{ t: 'have been jogging', k: 'proc', c: 4 }], vis: { type: 'scene', art: 'dg20260911b1_clock6' } },
    { ch: 3, sp: 'A', en: 'How many laps have you done?', cn: '你跑幾圈了？',
      hi: [{ t: 'How many laps', cn: '問數量', k: 'num', c: 3 }], vis: { type: 'scene', art: 'dg20260911b1_lapq' } },
    { ch: 3, sp: 'T', en: "I've done five laps. That's about ten kilometers.", cn: '我跑了五圈，大概十公里。',
      hi: [{ t: "I've done five laps", cn: '有數字', k: 'num', c: 3 }], vis: { type: 'scene', art: 'dg20260911b1_watch' } },
    { ch: 3, sp: 'N', zh: '問的是幾圈，答案也有數字，重點變成完成了多少，所以換成 have done。',
      hi: [{ t: 'have done', k: 'num', c: 3 }], vis: { type: 'scene', art: 'dg20260911b1_tally' } },
    { ch: 3, sp: 'A', en: 'Wow. Are you training for the marathon in December?', cn: '哇，你在為十二月的馬拉松做訓練嗎？', vis: { type: 'scene', art: 'dg20260911b1_bib' } },
    { ch: 3, sp: 'T', en: "Yes. I've wanted to run a full marathon for years.", cn: '對，我想跑一次全馬已經想好幾年了。',
      hi: [{ t: "I've wanted", cn: '狀態動詞', k: 'state', c: 2 }], vis: { type: 'scene', art: 'dg20260911b1_finish' } },
    { ch: 3, sp: 'N', zh: 'want 是狀態動詞，就算想了好幾年，也不能加 ing，只能說 have wanted。',
      hi: [{ t: 'have wanted', k: 'state', c: 2 }], vis: { type: 'scene', art: 'dg20260911b1_years' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '同樣在包水餃，講法不同，重點就不同。',
      vis: { type: 'vs', sm: true, kick: '講多少 vs 講過程',
        a: { w: 'Mom has made forty dumplings.', def: '媽媽已經包了四十顆水餃。', cn: '有數字 → have done' },
        b: { w: 'Mom has been making dumplings all afternoon.', def: '媽媽整個下午都在包水餃。', cn: '一直在做 → have been doing' } } },
    { ch: 4, sp: 'A', en: 'Mom has made forty dumplings.', cn: '媽媽已經包了四十顆水餃。',
      hi: [{ t: 'has made forty', cn: '完成的數量', k: 'num', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '講多少 vs 講過程',
        a: { w: 'Mom has made forty dumplings.', def: '媽媽已經包了四十顆水餃。', cn: '有數字 → have done' },
        b: { w: 'Mom has been making dumplings all afternoon.', def: '媽媽整個下午都在包水餃。', cn: '一直在做 → have been doing' } } },
    { ch: 4, sp: 'T', en: 'Mom has been making dumplings all afternoon.', cn: '媽媽整個下午都在包水餃。',
      hi: [{ t: 'has been making', cn: '一直在包', k: 'proc', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '講多少 vs 講過程',
        a: { w: 'Mom has made forty dumplings.', def: '媽媽已經包了四十顆水餃。', cn: '有數字 → have done' },
        b: { w: 'Mom has been making dumplings all afternoon.', def: '媽媽整個下午都在包水餃。', cn: '一直在做 → have been doing' } } },
    { ch: 4, sp: 'N', zh: '第一句講成果，包好四十顆了；第二句講過程，整個下午都沒停。',
      vis: { type: 'vs', sm: true, kick: '講多少 vs 講過程',
        a: { w: 'Mom has made forty dumplings.', def: '媽媽已經包了四十顆水餃。', cn: '有數字 → have done' },
        b: { w: 'Mom has been making dumplings all afternoon.', def: '媽媽整個下午都在包水餃。', cn: '一直在做 → have been doing' } } },
    { ch: 4, sp: 'N', zh: '再看一組。一直都住這裡，配 always 用 have lived；暫時借住，常用 have been staying。',
      vis: { type: 'vs', sm: true, kick: '一直以來 vs 暫時',
        a: { w: "I've always lived in this neighborhood.", def: '我一直都住在這一帶。', cn: '一直以來 → always + have lived' },
        b: { w: "I've been staying at my aunt's place for two weeks.", def: '我在阿姨家暫住兩個禮拜了。', cn: '暫時的 → have been staying' } } },
    { ch: 4, sp: 'A', en: "I've always lived in this neighborhood.", cn: '我一直都住在這一帶。',
      hi: [{ t: "I've always lived", cn: '一直以來', k: 'num', c: 1 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '一直以來 vs 暫時',
        a: { w: "I've always lived in this neighborhood.", def: '我一直都住在這一帶。', cn: '一直以來 → always + have lived' },
        b: { w: "I've been staying at my aunt's place for two weeks.", def: '我在阿姨家暫住兩個禮拜了。', cn: '暫時的 → have been staying' } } },
    { ch: 4, sp: 'T', en: "I've been staying at my aunt's place for two weeks.", cn: '我在阿姨家暫住兩個禮拜了。',
      hi: [{ t: "I've been staying", cn: '暫時住', k: 'proc', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '一直以來 vs 暫時',
        a: { w: "I've always lived in this neighborhood.", def: '我一直都住在這一帶。', cn: '一直以來 → always + have lived' },
        b: { w: "I've been staying at my aunt's place for two weeks.", def: '我在阿姨家暫住兩個禮拜了。', cn: '暫時的 → have been staying' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '最後給你一個判斷流程。照順序問自己三個問題。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一問：句子裡有數字或數量嗎？有的話，用 have 加過去分詞。',
      hi: [{ t: '數字或數量', k: 'num', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'A', en: 'Our class has collected eighty bottles for recycling.', cn: '我們班已經收集了八十個瓶子要回收。',
      hi: [{ t: 'has collected eighty', cn: '有數量', k: 'num', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二問：沒數字，重點是一直在做嗎？是的話，用 have been 加 ing。',
      hi: [{ t: '一直在做', k: 'proc', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'T', en: "It's been raining since early this morning.", cn: '從今天一大早就一直在下雨。',
      hi: [{ t: "It's been raining", cn: '一直在下', k: 'proc', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '第三問：是 know、want、own 這種狀態動詞嗎？那只能用 have 加過去分詞。',
      hi: [{ t: '狀態動詞', k: 'state', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'A', en: 'Dad has owned that old truck for twenty years.', cn: '那台老貨車爸爸已經擁有二十年了。',
      hi: [{ t: 'has owned', cn: '狀態動詞', k: 'state', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說說看。看到中文情境，先自己用英文說出來，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：你今天已經去郵局寄了五個包裹。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '你今天已經去郵局寄了五個包裹。' } },
    { ch: 6, sp: 'A', en: "I've mailed five packages today.", cn: '我今天已經寄了五個包裹。',
      hi: [{ t: "I've mailed five packages", cn: '有數字 → have done', k: 'num', c: 3 }],
      vis: { type: 'speak', n: 1, show: true, sit: '你今天已經去郵局寄了五個包裹。', a: "I've mailed five packages today." } },
    { ch: 6, sp: 'N', zh: '情境二：你從九點就一直在排隊買演唱會門票。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '你從九點就一直在排隊買演唱會門票。' } },
    { ch: 6, sp: 'T', en: "I've been standing in line for concert tickets since nine.", cn: '我從九點就一直在排隊買演唱會門票。',
      hi: [{ t: "I've been standing", cn: '一直在做 → have been doing', k: 'proc', c: 4 }],
      vis: { type: 'speak', n: 2, show: true, sit: '你從九點就一直在排隊買演唱會門票。', a: "I've been standing in line for concert tickets since nine." } },
    { ch: 6, sp: 'N', zh: '情境三：你認識你的室友已經三年了。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '你認識你的室友已經三年了。' } },
    { ch: 6, sp: 'A', en: "I've known my roommate for three years.", cn: '我認識我室友三年了。',
      hi: [{ t: "I've known", cn: '狀態動詞 → 不加 ing', k: 'state', c: 2 }],
      vis: { type: 'speak', n: 3, show: true, sit: '你認識你的室友已經三年了。', a: "I've known my roommate for three years." } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結：有數字用 have done；講一直在做用 have been doing；狀態動詞不加 ing。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '下次開口前，先看一眼：有沒有數字？是不是狀態動詞？', vis: { type: 'end' } }
  ]
};
