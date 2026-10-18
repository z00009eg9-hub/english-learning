/* ============================================================
   B2 Read 文法影片解說 — dg20260925a2（Unit 14，A2）
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
  /* 小亮點 */
  var spk=function(x,y,s){ return '<path d="M'+x+' '+(y-s)+' Q'+x+' '+y+' '+(x+s)+' '+y+' Q'+x+' '+y+' '+x+' '+(y+s)+' Q'+x+' '+y+' '+(x-s)+' '+y+' Q'+x+' '+y+' '+x+' '+(y-s)+' Z" fill="'+Y+'" '+th(2)+'/>'; };
  /* 貓掌印 */
  var paw=function(x,y,s,col){ return '<g fill="'+(col||D)+'"><ellipse cx="'+x+'" cy="'+(y+s*0.35)+'" rx="'+(s*0.55)+'" ry="'+(s*0.45)+'"/><circle cx="'+(x-s*0.62)+'" cy="'+(y-s*0.3)+'" r="'+(s*0.2)+'"/><circle cx="'+(x-s*0.22)+'" cy="'+(y-s*0.62)+'" r="'+(s*0.2)+'"/><circle cx="'+(x+s*0.22)+'" cy="'+(y-s*0.62)+'" r="'+(s*0.2)+'"/><circle cx="'+(x+s*0.62)+'" cy="'+(y-s*0.3)+'" r="'+(s*0.2)+'"/></g>'; };
  /* 貓碗 */
  var bowl=function(x,y,w,col){ return '<path d="M'+x+' '+y+' H'+(x+w)+' L'+(x+w-10)+' '+(y+26)+' H'+(x+10)+' Z" fill="'+(col||R)+'" '+st+'/>'; };

  /* 已經過完的日子：月曆上一格一格打叉 */
  var calX=cal(40,30,120,104);
  [[0,0],[0,1],[0,2],[0,3],[1,0],[1,1]].forEach(function(p){ var cx=50+p[1]*25, cy=60+p[0]*22;
    calX+='<path d="M'+(cx+3)+' '+(cy+3)+' L'+(cx+16)+' '+(cy+13)+' M'+(cx+16)+' '+(cy+3)+' L'+(cx+3)+' '+(cy+13)+'" fill="none" stroke="'+B+'" stroke-width="3" stroke-linecap="round"/>'; });
  calX+='<rect x="98" y="80" width="21" height="18" rx="3" fill="none" stroke="'+G+'" stroke-width="3"/>';

  Object.assign(window.GVIDEO_ART, {
    /* 過去式：月曆上已經過完的日子 */
    dg20260925a2_cal: svg(calX),
    /* When did：對話框裡的時鐘＋問號 */
    dg20260925a2_when: svg(
      '<path d="M26 22 H150 a14 14 0 0 1 14 14 V92 a14 14 0 0 1 -14 14 H70 L48 128 V106 H26 a14 14 0 0 1 -14 -14 V36 a14 14 0 0 1 14 -14 Z" fill="#fff" '+st+'/>'
     +'<circle cx="88" cy="64" r="28" fill="'+S+'" '+st+'/><path d="M88 64 V44 M88 64 L102 72" fill="none" '+th(4)+'/><circle cx="88" cy="64" r="3.5" fill="'+D+'"/>'
     +qb(176,34)),
    /* 完成式：房間整理好了——整齊的床＋打勾 */
    dg20260925a2_room: svg(
      '<line x1="10" y1="134" x2="190" y2="134" '+st+'/>'
     +'<rect x="22" y="56" width="16" height="78" rx="4" fill="'+L+'" '+st+'/>'
     +'<rect x="36" y="86" width="118" height="30" rx="6" fill="'+B+'" '+st+'/>'
     +'<rect x="36" y="80" width="40" height="14" rx="6" fill="#fff" '+st+'/>'
     +'<line x1="46" y1="116" x2="46" y2="134" '+th(4)+'/><line x1="146" y1="116" x2="146" y2="134" '+th(4)+'/>'
     +'<path d="M84 96 H150" stroke="#fff" stroke-width="3" stroke-linecap="round"/>'
     +chk(160,44,18)+spk(118,44,9)+spk(32,32,7)),

    /* 情境 1：家裡的貓 Mochi */
    dg20260925a2_cat: svg(
      '<line x1="10" y1="138" x2="190" y2="138" '+st+'/>'
     +'<path d="M134 122 C170 120 176 92 158 74" fill="none" '+th(13)+'/><path d="M134 122 C170 120 176 92 158 74" fill="none" stroke="'+A+'" stroke-width="7" stroke-linecap="round"/>'
     +'<ellipse cx="100" cy="104" rx="38" ry="32" fill="'+A+'" '+st+'/>'
     +'<path d="M80 42 L76 16 L98 32 Z" fill="'+A+'" '+st+'/><path d="M120 42 L124 16 L102 32 Z" fill="'+A+'" '+st+'/>'
     +'<circle cx="100" cy="56" r="27" fill="'+A+'" '+st+'/>'
     +'<path d="M92 32 v8 M100 30 v9 M108 32 v8" fill="none" '+th(2.5)+'/>'
     +'<circle cx="90" cy="54" r="3.5" fill="'+D+'"/><circle cx="110" cy="54" r="3.5" fill="'+D+'"/>'
     +'<path d="M96 62 h8 l-4 5 Z" fill="'+R+'" '+th(2)+'/><path d="M92 70 q4 4 8 0 q4 4 8 0" fill="none" '+th(2)+'/>'
     +'<path d="M68 62 h-16 M68 68 h-14 M132 62 h16 M132 68 h14" '+th(2)+'/>'
     +'<ellipse cx="86" cy="132" rx="11" ry="6" fill="'+A+'" '+st+'/><ellipse cx="114" cy="132" rx="11" ry="6" fill="'+A+'" '+st+'/>'
     +'<rect x="88" y="78" width="24" height="6" rx="3" fill="'+R+'" '+th(2)+'/>'),
    /* 情境 2：上學前有餵嗎？——空碗＋問號 */
    dg20260925a2_askfeed: svg(
      '<ellipse cx="96" cy="128" rx="62" ry="8" fill="'+L+'"/>'
     +bowl(46,96,100,R)
     +'<path d="M46 96 H146" '+th(4)+'/>'
     +paw(96,58,22,'#c9a77c')
     +qb(166,40)),
    /* 情境 3：七點餵了——時鐘 7:00＋滿滿的碗 */
    dg20260925a2_clock7: svg(
      '<circle cx="68" cy="66" r="46" fill="#fff" '+th(4)+'/>'
     +'<g '+th(4)+'><line x1="68" y1="24" x2="68" y2="31"/><line x1="110" y1="66" x2="103" y2="66"/><line x1="68" y1="108" x2="68" y2="101"/><line x1="26" y1="66" x2="33" y2="66"/></g>'
     +'<line x1="68" y1="66" x2="68" y2="32" '+th(4)+'/><line x1="68" y1="66" x2="55" y2="88" stroke="'+A+'" stroke-width="7" stroke-linecap="round"/>'
     +'<circle cx="68" cy="66" r="5" fill="'+D+'"/>'
     +'<g fill="#a0632d" '+th(2)+'><circle cx="134" cy="104" r="6"/><circle cx="148" cy="100" r="6"/><circle cx="162" cy="102" r="6"/><circle cx="176" cy="106" r="6"/><circle cx="142" cy="110" r="5"/><circle cx="168" cy="111" r="5"/></g>'
     +bowl(122,108,66,B)
     +txt(158,52,'7:00',22,A)),
    /* 情境 4：fed——飼料袋倒進碗裡 */
    dg20260925a2_food: svg(
      '<g transform="rotate(-32 76 62)"><rect x="46" y="26" width="62" height="80" rx="6" fill="'+G+'" '+st+'/><rect x="46" y="18" width="62" height="14" rx="3" fill="#2f7a4d" '+st+'/>'
     +'<ellipse cx="74" cy="68" rx="15" ry="9" fill="#fff" '+th(2.5)+'/><path d="M89 68 l10 -7 v14 Z" fill="#fff" '+th(2.5)+'/><circle cx="68" cy="66" r="2" fill="'+D+'"/></g>'
     +'<g fill="#a0632d" '+th(2)+'><circle cx="128" cy="78" r="4.5"/><circle cx="134" cy="92" r="4.5"/><circle cx="126" cy="100" r="4.5"/><circle cx="140" cy="106" r="4.5"/></g>'
     +'<g fill="#a0632d" '+th(2)+'><circle cx="124" cy="114" r="5"/><circle cx="138" cy="112" r="5"/><circle cx="152" cy="114" r="5"/></g>'
     +bowl(104,116,68,R)),
    /* 情境 5：兩天前去看獸醫——寵物外出籠＋紅十字 */
    dg20260925a2_vet: svg(
      '<line x1="10" y1="136" x2="190" y2="136" '+st+'/>'
     +'<path d="M66 50 V38 a8 8 0 0 1 8 -8 H96 a8 8 0 0 1 8 8 V50" fill="none" '+th(5)+'/>'
     +'<rect x="26" y="50" width="118" height="84" rx="14" fill="'+B+'" '+st+'/>'
     +'<rect x="40" y="66" width="58" height="54" rx="6" fill="#33405c" '+st+'/>'
     +'<circle cx="60" cy="90" r="4" fill="'+Y+'"/><circle cx="78" cy="90" r="4" fill="'+Y+'"/>'
     +'<g stroke="#fff" stroke-width="3" stroke-linecap="round"><line x1="54" y1="70" x2="54" y2="116"/><line x1="69" y1="70" x2="69" y2="116"/><line x1="84" y1="70" x2="84" y2="116"/></g>'
     +'<rect x="40" y="66" width="58" height="54" rx="6" fill="none" '+st+'/>'
     +'<circle cx="122" cy="80" r="5" fill="#fff" '+th(2.5)+'/><circle cx="122" cy="102" r="5" fill="#fff" '+th(2.5)+'/>'
     +'<circle cx="166" cy="40" r="22" fill="#fff" '+st+'/><rect x="160" y="26" width="12" height="28" rx="2" fill="'+R+'"/><rect x="152" y="34" width="28" height="12" rx="2" fill="'+R+'"/>'),
    /* 情境 6：獸醫怎麼說？——聽診器＋問號 */
    dg20260925a2_askvet: svg(
      '<path d="M54 26 V58 a30 30 0 0 0 60 0 V26" fill="none" '+th(6)+'/>'
     +'<circle cx="54" cy="24" r="6" fill="'+D+'"/><circle cx="114" cy="24" r="6" fill="'+D+'"/>'
     +'<path d="M84 88 C84 120 108 128 128 116" fill="none" '+th(6)+'/>'
     +'<circle cx="138" cy="110" r="16" fill="#c9c2b8" '+st+'/><circle cx="138" cy="110" r="7" fill="#fff" '+th(2.5)+'/>'
     +qb(168,40)),
    /* 情境 7：毯子洗好了——摺好的乾淨毯子＋亮點 */
    dg20260925a2_blanket: svg(
      '<rect x="30" y="98" width="140" height="30" rx="9" fill="'+B+'" '+st+'/>'
     +'<rect x="36" y="72" width="128" height="28" rx="9" fill="'+S+'" '+st+'/>'
     +'<rect x="44" y="48" width="112" height="26" rx="9" fill="'+L+'" '+st+'/>'
     +paw(100,61,12,'#c9a77c')
     +'<path d="M50 114 H150" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-dasharray="6 6"/>'
     +spk(170,36,11)+spk(32,40,8)+spk(146,24,6)),
    /* 情境 8：I've washed——洗衣機轉著毯子 */
    dg20260925a2_washer: svg(
      '<rect x="50" y="18" width="100" height="120" rx="10" fill="#fff" '+st+'/>'
     +'<line x1="50" y1="42" x2="150" y2="42" '+st+'/>'
     +'<circle cx="68" cy="30" r="5" fill="'+R+'" '+th(2)+'/><rect x="92" y="25" width="44" height="10" rx="4" fill="'+S+'" '+th(2)+'/>'
     +'<circle cx="100" cy="90" r="34" fill="'+S+'" '+st+'/>'
     +'<path d="M76 96 q12 -16 24 -4 q12 12 24 -6" fill="none" stroke="'+B+'" stroke-width="7" stroke-linecap="round"/>'
     +'<circle cx="100" cy="90" r="24" fill="none" '+th(2.5)+'/>'
     +'<g fill="#fff" '+th(2.5)+'><circle cx="166" cy="34" r="8"/><circle cx="176" cy="56" r="6"/><circle cx="162" cy="66" r="4.5"/><circle cx="34" cy="50" r="6"/></g>'),
    /* 情境 9：上週末買的新玩具——毛線球＋玩具老鼠 */
    dg20260925a2_toy: svg(
      '<line x1="10" y1="134" x2="190" y2="134" '+st+'/>'
     +'<path d="M96 120 C114 132 118 104 132 118" fill="none" stroke="'+R+'" stroke-width="3" stroke-linecap="round"/>'
     +'<circle cx="64" cy="98" r="34" fill="'+R+'" '+st+'/>'
     +'<path d="M36 82 q28 -10 56 8 M34 100 q30 -14 62 6 M44 122 q22 -24 44 -46" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" opacity=".8"/>'
     +'<path d="M174 116 c14 2 16 -14 6 -18" fill="none" '+th(3)+'/>'
     +'<path d="M114 120 C116 96 136 88 152 92 C166 96 176 108 174 120 Z" fill="#c9c2b8" '+st+'/>'
     +'<circle cx="136" cy="88" r="10" fill="#f4b6b6" '+st+'/>'
     +'<circle cx="124" cy="108" r="3" fill="'+D+'"/><circle cx="114" cy="118" r="3" fill="'+R+'"/>'),
    /* 情境 10：last weekend——星期六的月曆頁＋購物袋 */
    dg20260925a2_weekend: svg(
      '<rect x="22" y="34" width="62" height="64" rx="7" fill="#fff" '+st+'/><path d="M22 52 V41 a7 7 0 0 1 7 -7 H77 a7 7 0 0 1 7 7 V52 Z" fill="'+R+'" '+st+'/>'
     +txt(53,84,'SAT',17)
     +'<path d="M112 66 V54 a20 20 0 0 1 40 0 V66" fill="none" '+th(5)+'/>'
     +'<rect x="98" y="64" width="70" height="72" rx="5" fill="'+A+'" '+st+'/>'
     +'<circle cx="133" cy="98" r="15" fill="'+R+'" '+th(2.5)+'/><path d="M122 92 q11 -4 22 4 M121 102 q12 -4 24 2" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/>'
     +'<line x1="10" y1="136" x2="190" y2="136" '+st+'/>')
  });
})();

/* ============================================================
   dg20260925a2 — Finished Time Needs the Past Simple
   Grammar in Use Unit 14（Present perfect and past 2）A2 版
   ============================================================ */
window.GVIDEO.dg20260925a2 = {
  kind: 'gram',
  date: '2026-09-25',
  title: 'Finished Time, Past Simple',
  titleCn: '說到昨天，動詞就要變過去式',
  titleArt: ['dg20260925a2_cal', 'dg20260925a2_when', 'dg20260925a2_room'],
  scene: '家裡的貓 Our cat',
  sceneArt: 'dg20260925a2_cat',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Lily', voice: 'f' },
    T: { name: 'Max', voice: 'm' }
  },
  expr: {
    past: { t: 'yesterday / last … / … ago', cn: '講了過去的時間 → 過去式', ex: 'We played badminton after dinner yesterday.', exCn: '我們昨天晚餐後打了羽毛球。', note: '不規則動詞要背：go → went、buy → bought' },
    did:  { t: 'When did + 原形', cn: '問過去什麼時候 → did，動詞回原形', ex: 'When did you come home?', exCn: '你幾點回到家的？', note: 'did 已經是過去式，後面的動詞不再變' },
    perf: { t: 'have / has + 過去分詞', cn: '不講時間，只講現在的結果', ex: "I've packed my school bag.", exCn: '我書包收好了。', note: '一加上 yesterday 這類時間，就要換成過去式' }
  },
  chapters: [
    { cn: '開場' }, { cn: '時間過完了嗎？' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  /* 「現在」放在最右邊，左邊都是已經過完的時間 */
  timelineNow: 88,
  timeline: [
    { x: 18, art: 'dg20260925a2_cal',  lab: '過去式', who: '講了時間' },
    { x: 42, art: 'dg20260925a2_when', lab: '問時間', who: 'When did' },
    { x: 68, art: 'dg20260925a2_room', lab: '完成式', who: '沒講時間' }
  ],
  flow: [
    { q: '句子裡有過去的時間嗎？',     a: '過去式',   en: '主詞 + 動詞過去式 + 時間' },
    { q: '你在問「什麼時候」嗎？',     a: 'When did', en: 'When did + 主詞 + 原形' },
    { q: '不講時間，只講現在的結果？', a: '完成式',   en: 'have / has + 過去分詞' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: '「我昨天吃了」、「我吃過了」，中文都用一個「了」。英文卻要先看一件事：有沒有講到過去的時間。', vis: { type: 'title' } },

    /* ---- 1 核心：時間過完了嗎？ ---- */
    { ch: 1, sp: 'N', zh: '先看這條時間線。最右邊是現在，左邊都是已經過完的時間。', vis: { type: 'timeline', show: 0, kick: 'Is the time over? 時間過完了嗎？' } },
    { ch: 1, sp: 'N', zh: '句子裡只要有 yesterday、last week、two days ago 這種過完的時間，動詞就用過去式。',
      hi: [{ t: '過去式', k: 'past', c: 3 }], vis: { type: 'timeline', show: 1, pop: true, kick: 'Is the time over? 時間過完了嗎？' } },
    { ch: 1, sp: 'A', en: 'I visited my grandma last Sunday.', cn: '我上星期日去看了奶奶。',
      hi: [{ t: 'visited', cn: '上星期日・過去式', k: 'past', c: 3 }], vis: { type: 'timeline', show: 1, lit: 0, kick: 'Is the time over? 時間過完了嗎？' } },
    { ch: 1, sp: 'N', zh: '想問過去「什麼時候」，就用 When did 開頭，後面的動詞回到原形。',
      hi: [{ t: 'When did', k: 'did', c: 4 }], vis: { type: 'timeline', show: 2, pop: true, kick: 'Is the time over? 時間過完了嗎？' } },
    { ch: 1, sp: 'T', en: 'When did you get your new phone?', cn: '你的新手機什麼時候買的？',
      hi: [{ t: 'When did you get', cn: '問過去的時間', k: 'did', c: 4 }], vis: { type: 'timeline', show: 2, lit: 1, kick: 'Is the time over? 時間過完了嗎？' } },
    { ch: 1, sp: 'N', zh: '這兩種句子都在講「現在」左邊的時間，那段時間已經關上了。',
      vis: { type: 'timeline', show: 2, kick: 'Is the time over? 時間過完了嗎？' } },
    { ch: 1, sp: 'N', zh: '如果完全不講時間，只想說「現在已經好了」，才用 have 加過去分詞。',
      hi: [{ t: 'have 加過去分詞', k: 'perf', c: 2 }], vis: { type: 'timeline', show: 3, pop: true, kick: 'Is the time over? 時間過完了嗎？' } },
    { ch: 1, sp: 'A', en: "I've cleaned my room.", cn: '我房間打掃好了。',
      hi: [{ t: "I've cleaned", cn: '不講時間・現在乾淨了', k: 'perf', c: 2 }], vis: { type: 'timeline', show: 3, lit: 2, kick: 'Is the time over? 時間過完了嗎？' } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: '過去式的句型：主詞加動詞過去式，再加過去的時間。規則動詞加 ed，不規則的要背起來。',
      hi: [{ t: '過去式', k: 'past', c: 3 }],
      vis: { type: 'pattern', kick: 'Past simple 過去式', rows: [
        { lab: '規則',   blocks: [{ t: 'We', k: 's' }, { t: 'watched', k: 'v' }, { t: 'a cartoon', k: 'n' }, { t: 'last night', k: 'o' }] },
        { lab: '不規則', blocks: [{ t: 'My dad', k: 's' }, { t: 'made', k: 'v' }, { t: 'pancakes', k: 'n' }, { t: 'on Saturday', k: 'o' }] }
      ], note: 'watch → watched・make → made' } },
    { ch: 2, sp: 'N', zh: '常見的過去時間有這幾種：yesterday、last night、three days ago，還有 in 加年份。',
      vis: { type: 'family', kick: 'Finished time 過完的時間', core: 'Finished time', coreCn: '已經過完的時間', art: 'dg20260925a2_cal', items: [
        { t: 'yesterday', cn: '昨天' }, { t: 'last night · last week', cn: '昨晚・上星期' }, { t: 'three days ago', cn: '三天前' }, { t: 'in 2020', cn: '在 2020 年' }
      ] } },
    { ch: 2, sp: 'N', zh: '問句用 When did 開頭。did 已經是過去式了，所以後面的動詞要回到原形。',
      hi: [{ t: 'When did', k: 'did', c: 4 }],
      vis: { type: 'pattern', kick: 'When did…? 什麼時候', rows: [
        { lab: '問人', blocks: [{ t: 'When did', k: 'n' }, { t: 'you', k: 's' }, { t: 'call', k: 'v' }, { t: 'Grandpa', k: 'n' }] },
        { lab: '問事', blocks: [{ t: 'When did', k: 'n' }, { t: 'the rain', k: 's' }, { t: 'stop', k: 'v' }] }
      ], note: '過去只標一次：did 標了，動詞就用原形' } },
    { ch: 2, sp: 'N', zh: '不講時間的時候：主詞加 have 或 has，再加過去分詞。一加上時間，就換回過去式。',
      hi: [{ t: '過去分詞', k: 'perf', c: 2 }],
      vis: { type: 'pattern', kick: '加上時間 Add a time', rows: [
        { lab: '只講結果', blocks: [{ t: 'She', k: 's' }, { t: 'has finished', k: 'v' }, { t: 'her lunch', k: 'n' }] },
        { lab: '講了時間', blocks: [{ t: 'She', k: 's' }, { t: 'finished', k: 'v' }, { t: 'her lunch', k: 'n' }, { t: 'at noon', k: 'o', add: true }] }
      ], note: '時間一加上去，has finished 就變成 finished' } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: '來聽 Lily 和弟弟 Max 聊家裡的貓 Mochi，注意動詞什麼時候變成過去式。', vis: { type: 'scene', art: 'dg20260925a2_cat' } },
    { ch: 3, sp: 'A', en: 'Max, did you feed Mochi before school?', cn: 'Max，你上學前有餵 Mochi 嗎？',
      hi: [{ t: 'did you feed', cn: '問過去・動詞原形', k: 'did', c: 4 }], vis: { type: 'scene', art: 'dg20260925a2_askfeed' } },
    { ch: 3, sp: 'T', en: 'Yes, I fed her at seven.', cn: '有，我七點餵了牠。',
      hi: [{ t: 'fed', cn: 'feed 的過去式', k: 'past', c: 3 }], vis: { type: 'scene', art: 'dg20260925a2_clock7' } },
    { ch: 3, sp: 'N', zh: '七點是講明的時間，所以 Max 用過去式 fed。feed 是不規則動詞，要記住。',
      hi: [{ t: 'fed', k: 'past', c: 3 }], vis: { type: 'scene', art: 'dg20260925a2_food' } },
    { ch: 3, sp: 'A', en: 'Good. Mom took her to the vet two days ago.', cn: '很好。媽媽兩天前帶牠去看獸醫。',
      hi: [{ t: 'took', cn: 'two days ago・過去式', k: 'past', c: 3 }], vis: { type: 'scene', art: 'dg20260925a2_vet' } },
    { ch: 3, sp: 'T', en: 'Oh, right. What did the vet say?', cn: '喔，對耶。獸醫怎麼說？',
      hi: [{ t: 'What did the vet say', cn: 'did＋原形 say', k: 'did', c: 4 }], vis: { type: 'scene', art: 'dg20260925a2_askvet' } },
    { ch: 3, sp: 'A', en: "She's healthy. And I've washed her blanket.", cn: '牠很健康。還有，我把牠的毯子洗好了。',
      hi: [{ t: "I've washed", cn: '不講時間・現在乾淨了', k: 'perf', c: 2 }], vis: { type: 'scene', art: 'dg20260925a2_blanket' } },
    { ch: 3, sp: 'N', zh: 'Lily 沒說什麼時候洗的，只想說毯子現在是乾淨的，所以用 I\'ve washed。',
      hi: [{ t: "I've washed", k: 'perf', c: 2 }], vis: { type: 'scene', art: 'dg20260925a2_washer' } },
    { ch: 3, sp: 'T', en: 'Thanks. I bought her a new toy last weekend, too.', cn: '謝啦。我上週末也買了一個新玩具給牠。',
      hi: [{ t: 'bought', cn: 'buy 的過去式', k: 'past', c: 3 }], vis: { type: 'scene', art: 'dg20260925a2_toy' } },
    { ch: 3, sp: 'N', zh: '上週末已經過完了，所以 buy 變成 bought。聽到過去的時間，動詞就跟著變。',
      hi: [{ t: 'bought', k: 'past', c: 3 }], vis: { type: 'scene', art: 'dg20260925a2_weekend' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '同樣是弄丟鑰匙，有沒有講時間，句子就不一樣。',
      vis: { type: 'vs', sm: true, kick: '講了時間 vs 沒講時間',
        a: { w: 'I lost my key last night.', def: '我昨晚把鑰匙弄丟了。', cn: '講了時間 → 過去式' },
        b: { w: "I've lost my key.", def: '我鑰匙弄丟了（現在找不到）。', cn: '沒講時間 → have 加過去分詞' } } },
    { ch: 4, sp: 'A', en: 'I lost my key last night.', cn: '我昨晚把鑰匙弄丟了。',
      hi: [{ t: 'lost', cn: '昨晚・過去式', k: 'past', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '講了時間 vs 沒講時間',
        a: { w: 'I lost my key last night.', def: '我昨晚把鑰匙弄丟了。', cn: '講了時間 → 過去式' },
        b: { w: "I've lost my key.", def: '我鑰匙弄丟了（現在找不到）。', cn: '沒講時間 → have 加過去分詞' } } },
    { ch: 4, sp: 'T', en: "I've lost my key.", cn: '我鑰匙弄丟了（現在找不到）。',
      hi: [{ t: "I've lost", cn: '現在的結果', k: 'perf', c: 2 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '講了時間 vs 沒講時間',
        a: { w: 'I lost my key last night.', def: '我昨晚把鑰匙弄丟了。', cn: '講了時間 → 過去式' },
        b: { w: "I've lost my key.", def: '我鑰匙弄丟了（現在找不到）。', cn: '沒講時間 → have 加過去分詞' } } },
    { ch: 4, sp: 'N', zh: '第一句講了昨晚，是過去的一件事；第二句不講時間，重點是我現在進不了家門。',
      vis: { type: 'vs', sm: true, kick: '講了時間 vs 沒講時間',
        a: { w: 'I lost my key last night.', def: '我昨晚把鑰匙弄丟了。', cn: '講了時間 → 過去式' },
        b: { w: "I've lost my key.", def: '我鑰匙弄丟了（現在找不到）。', cn: '沒講時間 → have 加過去分詞' } } },
    { ch: 4, sp: 'N', zh: '再看一組問句。問「什麼時候」用 When did；只問「好了沒」，才用 Have you。',
      vis: { type: 'vs', sm: true, kick: '問時間 vs 問好了沒',
        a: { w: 'When did you do your homework?', def: '你什麼時候寫功課的？', cn: '問時間 → When did' },
        b: { w: 'Have you done your homework?', def: '你功課寫好了沒？', cn: '只問結果 → Have you' } } },
    { ch: 4, sp: 'A', en: 'When did you do your homework?', cn: '你什麼時候寫功課的？',
      hi: [{ t: 'When did', cn: '問時間', k: 'did', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '問時間 vs 問好了沒',
        a: { w: 'When did you do your homework?', def: '你什麼時候寫功課的？', cn: '問時間 → When did' },
        b: { w: 'Have you done your homework?', def: '你功課寫好了沒？', cn: '只問結果 → Have you' } } },
    { ch: 4, sp: 'T', en: 'Have you done your homework?', cn: '你功課寫好了沒？',
      hi: [{ t: 'Have you done', cn: '只問結果', k: 'perf', c: 2 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '問時間 vs 問好了沒',
        a: { w: 'When did you do your homework?', def: '你什麼時候寫功課的？', cn: '問時間 → When did' },
        b: { w: 'Have you done your homework?', def: '你功課寫好了沒？', cn: '只問結果 → Have you' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '最後給你一個判斷流程。講過去的事之前，照順序問自己。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一問：句子裡有 yesterday、ago 這種過去的時間嗎？有的話，用過去式。',
      hi: [{ t: '過去式', k: 'past', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'A', en: 'Our school opened a new library in 2018.', cn: '我們學校 2018 年開了一間新圖書館。',
      hi: [{ t: 'opened', cn: 'in 2018・過去式', k: 'past', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二問：你在問「什麼時候」嗎？是的話，用 When did，動詞回到原形。',
      hi: [{ t: 'When did', k: 'did', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'T', en: 'When did your sister learn to ride a bike?', cn: '你妹妹什麼時候學會騎腳踏車的？',
      hi: [{ t: 'When did', cn: '問時間', k: 'did', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '兩個都不是：你不講時間，只想說現在的結果，就用 have 加過去分詞。',
      hi: [{ t: 'have 加過去分詞', k: 'perf', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'A', en: 'Mom has made dinner.', cn: '媽媽把晚餐煮好了。',
      hi: [{ t: 'has made', cn: '現在可以吃了', k: 'perf', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說說看。看到中文情境，先自己用英文說出來，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：你想說，你兩個星期前去了墾丁。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '你想說，你兩個星期前去了墾丁。' } },
    { ch: 6, sp: 'T', en: 'I went to Kenting two weeks ago.', cn: '我兩個星期前去了墾丁。',
      hi: [{ t: 'went', cn: 'ago → 過去式', k: 'past', c: 3 }],
      vis: { type: 'speak', n: 1, show: true, sit: '你想說，你兩個星期前去了墾丁。', a: 'I went to Kenting two weeks ago.' } },
    { ch: 6, sp: 'N', zh: '情境二：你想問朋友，他是什麼時候學會游泳的。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '你想問朋友，他是什麼時候學會游泳的。' } },
    { ch: 6, sp: 'A', en: 'When did you learn to swim?', cn: '你什麼時候學會游泳的？',
      hi: [{ t: 'When did', cn: '問時間 → did＋原形', k: 'did', c: 4 }],
      vis: { type: 'speak', n: 2, show: true, sit: '你想問朋友，他是什麼時候學會游泳的。', a: 'When did you learn to swim?' } },
    { ch: 6, sp: 'N', zh: '情境三：拼圖拼完了。你不講時間，只想說「我拼好了」。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '拼圖拼完了。你不講時間，只想說「我拼好了」。' } },
    { ch: 6, sp: 'T', en: "I've finished the puzzle.", cn: '我把拼圖拼好了。',
      hi: [{ t: "I've finished", cn: '不講時間 → 完成式', k: 'perf', c: 2 }],
      vis: { type: 'speak', n: 3, show: true, sit: '拼圖拼完了。你不講時間，只想說「我拼好了」。', a: "I've finished the puzzle." } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結一下：講了過去的時間，用過去式；問什麼時候，用 When did 加原形；不講時間只講結果，才用 have 加過去分詞。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '下次開口之前，先找找看：句子裡有沒有過去的時間？', vis: { type: 'end' } }
  ]
};
