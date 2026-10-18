/* ============================================================
   B2 Read 文法影片解說 — dg20260909b2（Unit 10，B2）
   格式與規則見 b2lab/tools/GVIDEO_SPEC.md；範本 gvideo/dg20261014b1.js。
   情境：升遷申請草稿、主管給建議（Grace／Daniel）
   ============================================================ */
window.GVIDEO = window.GVIDEO || {};
window.GVIDEO_ART = window.GVIDEO_ART || {};

(function(){
  var D='#2b2118', A='#e8813a', C='#fdf6ec', L='#f7e3c9', R='#d9534f', B='#3b82c4', G='#3f9a62', Y='#f2c94c', S='#d6e8f8';
  var W='#c98c55', M='#9aa3ad', BX='#d9a066';
  var st='stroke="'+D+'" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"';
  var th=function(w){ return 'stroke="'+D+'" stroke-width="'+w+'" stroke-linejoin="round" stroke-linecap="round"'; };
  var svg=function(inner){ return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+inner+'</svg>'; };
  var txt=function(x,y,t,sz,col){ return '<text x="'+x+'" y="'+y+'" text-anchor="middle" font-family="Arial,sans-serif" font-weight="700" font-size="'+sz+'" fill="'+(col||D)+'">'+t+'</text>'; };
  var qb=function(cx,cy){ return '<circle cx="'+cx+'" cy="'+cy+'" r="16" fill="'+A+'" '+st+'/>'+txt(cx,cy+7,'?',20,'#fff'); };
  var chk=function(cx,cy,r){ return '<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="'+G+'" '+st+'/><path d="M'+(cx-r*0.45)+' '+cy+' l'+(r*0.32)+' '+(r*0.34)+' l'+(r*0.6)+' -'+(r*0.7)+'" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>'; };
  var f1=function(n){ return Math.round(n*10)/10; };
  /* 齒輪：cx,cy 中心、r 外半徑、n 齒數 */
  var gear=function(cx,cy,r,n,col){
    var pts=[], step=Math.PI*2/n, ri=r*0.78;
    for(var k=0;k<n;k++){ var b=k*step;
      [[b,ri],[b+step*0.12,r],[b+step*0.42,r],[b+step*0.54,ri]].forEach(function(p){ pts.push(f1(cx+p[1]*Math.cos(p[0]))+' '+f1(cy+p[1]*Math.sin(p[0]))); }); }
    return '<path d="M'+pts.join(' L')+' Z" fill="'+col+'" '+st+'/><circle cx="'+cx+'" cy="'+cy+'" r="'+f1(r*0.3)+'" fill="#fff" '+st+'/>'; };
  /* 長條圖：x0 左、yb 底、hs 各條高度 */
  var bars=function(x0,yb,hs,bw,gap,col){
    var g='<line x1="'+(x0-8)+'" y1="'+yb+'" x2="'+(x0+hs.length*(bw+gap)+4)+'" y2="'+yb+'" '+st+'/>';
    hs.forEach(function(h,i){ g+='<rect x="'+(x0+i*(bw+gap))+'" y="'+(yb-h)+'" width="'+bw+'" height="'+h+'" rx="3" fill="'+col+'" '+st+'/>'; });
    return g; };
  var star=function(cx,cy,r,col){ var pts=[]; for(var i=0;i<10;i++){ var a=-Math.PI/2+i*Math.PI/5, rr=i%2?r*0.45:r; pts.push(f1(cx+rr*Math.cos(a))+' '+f1(cy+rr*Math.sin(a))); }
    return '<path d="M'+pts.join(' L')+' Z" fill="'+col+'" '+th(2.5)+'/>'; };
  var P='dg20260909b2_';
  var art={};

  /* 持續投入：兩個咬合轉動的齒輪＋繞圈箭頭 */
  art[P+'effort']=svg(
    gear(78,82,40,10,B)+gear(136,58,26,8,Y)
   +'<path d="M150 104 A40 40 0 0 1 112 126" fill="none" stroke="'+G+'" stroke-width="6" stroke-linecap="round"/>'
   +'<path d="M116 116 L104 128 L118 136 Z" fill="'+G+'" '+th(2.5)+'/>'
   +'<path d="M40 30 A40 40 0 0 1 84 18" fill="none" stroke="'+G+'" stroke-width="6" stroke-linecap="round"/>'
   +'<path d="M80 8 L94 18 L80 28 Z" fill="'+G+'" '+th(2.5)+'/>');
  /* 具體成果：往上長的長條圖＋上升箭頭 */
  art[P+'result']=svg(
    bars(40,132,[30,52,76,100],24,10,G)
   +'<path d="M34 92 L76 70 L104 76 L156 30" fill="none" stroke="'+A+'" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>'
   +'<path d="M146 24 L166 20 L162 40 Z" fill="'+A+'" '+th(2.5)+'/>'
   +star(176,70,12,Y));
  /* 兩個搭配：齒輪＋長條圖 */
  art[P+'combo']=svg(
    gear(50,78,34,9,B)
   +'<path d="M100 64 V92 M86 78 H114" '+th(6)+'/>'
   +bars(132,118,[26,44,62],14,6,G)
   +'<path d="M128 74 L156 50 L180 36" fill="none" stroke="'+A+'" stroke-width="5" stroke-linecap="round"/>');

  /* 情境 0：辦公桌——筆電、馬克杯、盆栽 */
  art[P+'office']=svg(
    '<rect x="10" y="108" width="180" height="12" rx="3" fill="'+W+'" '+st+'/>'
   +'<path d="M24 120 V142 M176 120 V142" '+th(5)+'/>'
   +'<rect x="58" y="44" width="80" height="54" rx="5" fill="'+D+'" '+st+'/><rect x="64" y="50" width="68" height="42" rx="2" fill="'+S+'"/>'
   +'<path d="M70 60 H112 M70 70 H124 M70 80 H104" stroke="'+B+'" stroke-width="3" stroke-linecap="round"/>'
   +'<path d="M46 98 H150 L156 108 H40 Z" fill="'+M+'" '+st+'/>'
   +'<rect x="156" y="80" width="22" height="28" rx="4" fill="'+R+'" '+st+'/><path d="M178 86 q9 0 9 8 q0 7 -9 7" fill="none" '+th(3)+'/>'
   +'<path d="M20 108 L24 86 H44 L48 108 Z" fill="'+A+'" '+st+'/>'
   +'<path d="M34 86 Q20 70 22 56 Q34 64 34 86 Q38 62 52 58 Q50 76 34 86" fill="'+G+'" '+th(2.5)+'/>');
  /* 情境 1：倉庫專案做完了嗎？——疊起來的紙箱＋問號 */
  art[P+'boxq']=svg(
    '<line x1="8" y1="138" x2="160" y2="138" '+st+'/>'
   +'<rect x="20" y="86" width="56" height="52" fill="'+BX+'" '+st+'/><rect x="80" y="86" width="56" height="52" fill="'+BX+'" '+st+'/>'
   +'<rect x="50" y="34" width="56" height="52" fill="'+BX+'" '+st+'/>'
   +'<path d="M48 86 V100 M108 86 V100 M78 34 V48" stroke="'+L+'" stroke-width="6"/>'
   +'<path d="M30 124 H48 M90 124 H108 M60 72 H78" '+th(3)+'/>'
   +qb(170,36));
  /* 情境 2：從四月起帶專案——白板上的便利貼＋小旗 */
  art[P+'lead']=svg(
    '<rect x="20" y="30" width="160" height="96" rx="6" fill="#fff" '+st+'/>'
   +'<path d="M73 30 V126 M127 30 V126" '+th(2.5)+'/>'
   +'<g '+th(2.5)+'><rect x="30" y="42" width="34" height="22" fill="'+Y+'"/><rect x="30" y="72" width="34" height="22" fill="'+Y+'"/><rect x="83" y="42" width="34" height="22" fill="'+S+'"/><rect x="83" y="72" width="34" height="22" fill="'+S+'"/><rect x="137" y="42" width="34" height="22" fill="#cfe8d6"/></g>'
   +'<path d="M100 126 L84 146 M100 126 L116 146" '+th(4)+'/>'
   +'<line x1="174" y1="34" x2="174" y2="6" '+th(3.5)+'/><path d="M174 6 L194 12 L174 18 Z" fill="'+R+'" '+th(2.5)+'/>');
  /* 情境 3：進行中——進度條＋轉圈圖示 */
  art[P+'progress']=svg(
    '<rect x="16" y="90" width="168" height="28" rx="14" fill="#fff" '+st+'/>'
   +'<rect x="22" y="96" width="96" height="16" rx="8" fill="'+G+'"/>'
   +'<path d="M70 96 l-10 16 M90 96 l-10 16 M110 96 l-8 13" stroke="#fff" stroke-width="4" stroke-linecap="round" opacity=".6"/>'
   +'<circle cx="100" cy="46" r="30" fill="none" stroke="#e5ddd2" stroke-width="9"/>'
   +'<path d="M100 16 A30 30 0 0 1 128 56" fill="none" stroke="'+B+'" stroke-width="9" stroke-linecap="round"/>'
   );
  /* 情境 4：目前有什麼成果？——標靶＋問號 */
  art[P+'targetq']=svg(
    '<circle cx="86" cy="80" r="56" fill="#fff" '+st+'/><circle cx="86" cy="80" r="40" fill="'+R+'" '+st+'/>'
   +'<circle cx="86" cy="80" r="24" fill="#fff" '+st+'/><circle cx="86" cy="80" r="9" fill="'+R+'" '+st+'/>'
   +qb(170,34));
  /* 情境 5：出貨錯誤往下掉——遞減長條圖＋紅色下降箭頭 */
  art[P+'chartdown']=svg(
    bars(26,134,[96,74,52,30],22,10,B)
   +'<path d="M30 30 L70 50 L100 66 L148 92" fill="none" stroke="'+R+'" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>'
   +'<path d="M140 80 L160 98 L136 102 Z" fill="'+R+'" '+th(2.5)+'/>'
   +txt(168,40,'-40%',20,R));
  /* 情境 6：數字可以查證——放大鏡照在文件的 % 上 */
  art[P+'magnify']=svg(
    '<rect x="26" y="14" width="96" height="124" rx="6" fill="#fff" '+st+'/>'
   +'<path d="M40 34 H108 M40 48 H96 M40 62 H108 M40 118 H100" '+th(3)+'/>'
   +'<line x1="142" y1="108" x2="176" y2="140" stroke="'+D+'" stroke-width="12" stroke-linecap="round"/>'
   +'<circle cx="120" cy="86" r="32" fill="'+S+'" '+th(5)+'/>'
   +txt(120,98,'%',34,R));
  /* 情境 7：兩個想法合成一句？——兩片拼圖＋問號 */
  art[P+'puzzle']=svg(
    '<path d="M20 50 H52 a10 10 0 1 1 20 0 H84 V76 a10 10 0 1 0 0 20 V122 H20 Z" fill="'+B+'" '+st+'/>'
   +'<path d="M100 50 H132 a10 10 0 1 1 20 0 H164 V122 H100 V96 a10 10 0 1 1 0 -20 Z" fill="'+G+'" '+st+'/>'
   +qb(176,30));
  /* 情境 8：省下兩百個工時——沙漏＋200h */
  art[P+'hours']=svg(
    '<rect x="44" y="14" width="76" height="12" rx="4" fill="'+W+'" '+st+'/><rect x="44" y="126" width="76" height="12" rx="4" fill="'+W+'" '+st+'/>'
   +'<path d="M54 26 H110 Q110 62 86 76 Q110 90 110 126 H54 Q54 90 78 76 Q54 62 54 26 Z" fill="'+S+'" '+st+'/>'
   +'<path d="M66 46 H98 Q94 60 82 70 Q70 60 66 46 Z" fill="'+Y+'"/><path d="M62 124 Q82 100 102 124 Z" fill="'+Y+'"/>'
   +txt(160,70,'200h',22,G)
   +'<path d="M150 86 L160 100 L170 86" fill="none" stroke="'+G+'" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>');
  /* 情境 9：最有說服力——獎盃＋星星 */
  art[P+'trophy']=svg(
    '<path d="M66 20 H134 V54 Q134 88 100 92 Q66 88 66 54 Z" fill="'+Y+'" '+st+'/>'
   +'<path d="M66 32 H46 Q44 62 70 66 M134 32 H154 Q156 62 130 66" fill="none" '+th(4)+'/>'
   +'<rect x="92" y="92" width="16" height="18" fill="'+Y+'" '+st+'/>'
   +'<rect x="70" y="110" width="60" height="26" rx="4" fill="'+W+'" '+st+'/>'
   +star(100,52,16,'#fff')
   +star(166,100,10,Y)+star(34,100,8,Y));

  Object.assign(window.GVIDEO_ART, art);
})();

/* ============================================================
   dg20260909b2 — Effort or Results?
   Grammar in Use Unit 10（I have been doing and I have done），職場寫作的選擇
   ============================================================ */
window.GVIDEO.dg20260909b2 = {
  kind: 'gram',
  date: '2026-09-09',
  title: 'Effort or Results?',
  titleCn: '職場寫作裡的 have been doing 跟 have done：要讀者記住投入，還是成果？',
  titleArt: ['dg20260909b2_effort', 'dg20260909b2_result', 'dg20260909b2_combo'],
  scene: '升遷申請 Promotion application',
  sceneArt: 'dg20260909b2_office',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Grace', voice: 'f' },
    T: { name: 'Daniel', voice: 'm' }
  },
  expr: {
    proc: { t: 'have been + V-ing', cn: '目前還在進行的職責 → 讓讀者看到投入', ex: "I've been handling our key accounts in Japan.", exCn: '我一直在負責日本的重點客戶。', note: '還沒有最終數字時用它，聽起來務實、不誇大' },
    res:  { t: 'have + 過去分詞 + 數字', cn: '已經完成、可以驗證的成果', ex: "We've raised customer satisfaction to ninety-two percent.", exCn: '我們已經把顧客滿意度提高到百分之九十二。', note: '常用動詞：cut、raised、launched、saved' },
    mix:  { t: '..., and I\'ve already + 過去分詞', cn: '先交代投入，再拿出成果', ex: "I've been reorganizing the archive, and I've already digitized two thousand files.", exCn: '我一直在整理檔案室，而且已經把兩千份檔案數位化了。', note: 'already 放在 have 跟過去分詞中間' }
  },
  chapters: [
    { cn: '開場' }, { cn: '投入還是成果？' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  cardsKick: 'Effort or results? 投入還是成果？',
  cards: [
    { art: 'dg20260909b2_effort', lab: '持續投入', who: 'have been + V-ing' },
    { art: 'dg20260909b2_result', lab: '具體成果', who: 'have + 過去分詞＋數字' },
    { art: 'dg20260909b2_combo',  lab: '兩個搭配', who: '先投入，再成果' }
  ],
  flow: [
    { q: '這項工作現在還在進行嗎？',   a: '寫投入', en: 'have been + V-ing' },
    { q: '已經完成，有數字可以證明？', a: '寫成果', en: 'have + 過去分詞 + 數字' },
    { q: '兩個都有，想一句講清楚？',   a: '兩個搭配', en: 'have been V-ing, and have + 過去分詞' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: '寫履歷或升遷申請時，同一份工作可以寫成兩種樣子。教你怎麼挑。', vis: { type: 'title' } },

    /* ---- 1 核心：投入還是成果 ---- */
    { ch: 1, sp: 'N', zh: '動筆之前先想：你希望讀者記住的是你的投入，還是你的成果？', vis: { type: 'cards', show: 0 } },
    { ch: 1, sp: 'N', zh: '還在進行的職責，用 have been doing，讀者就知道你現在還在做。',
      hi: [{ t: 'have been doing', k: 'proc', c: 3 }], vis: { type: 'cards', show: 1, pop: true } },
    { ch: 1, sp: 'A', en: "I've been overseeing our vendor audits since last spring.", cn: '我從去年春天起一直負責督導供應商稽核。',
      hi: [{ t: "I've been overseeing", cn: '目前職責', k: 'proc', c: 3 }], vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'N', zh: '已經完成、拿得出數字的成果，用 have done，配上數字最有說服力。',
      hi: [{ t: 'have done', k: 'res', c: 4 }], vis: { type: 'cards', show: 2, pop: true } },
    { ch: 1, sp: 'T', en: 'Our team has shortened delivery times by three days.', cn: '我們團隊已經把交貨時間縮短了三天。',
      hi: [{ t: 'has shortened', cn: '完成的成果', k: 'res', c: 4 }], vis: { type: 'cards', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: '兩種都是正確的英文，只是重點不同：一個講過程，一個講結果。', vis: { type: 'cards', show: 2 } },
    { ch: 1, sp: 'N', zh: '最有說服力的寫法，常常是兩個一起用：先交代投入，再拿出成果。',
      hi: [{ t: '兩個一起用', k: 'mix', c: 2 }], vis: { type: 'cards', show: 3, pop: true } },
    { ch: 1, sp: 'A', en: "I've been streamlining our hiring process, and I've already cut costs by ten percent.", cn: '我一直在精簡招募流程，而且已經把成本降低了一成。',
      hi: [{ t: "I've already cut", cn: '再拿出成果', k: 'mix', c: 2 }], vis: { type: 'cards', show: 3, lit: 2 } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: '寫投入：have been 加動詞 ing，後面常接一個起點或一段時間。',
      hi: [{ t: '寫投入', k: 'proc', c: 3 }],
      vis: { type: 'pattern', kick: 'have / has + been + V-ing', rows: [
        { lab: '目前職責', blocks: [{ t: "I've", k: 's' }, { t: 'been coordinating', k: 'v' }, { t: 'our supplier meetings', k: 'n' }, { t: 'since June', k: 'o' }] },
        { lab: '持續投入', blocks: [{ t: "She's", k: 's' }, { t: 'been training', k: 'v' }, { t: 'new interns', k: 'n' }, { t: 'all quarter', k: 'o' }] }
      ] } },
    { ch: 2, sp: 'N', zh: '寫成果：have 加過去分詞，後面放上數字。',
      hi: [{ t: '寫成果', k: 'res', c: 4 }],
      vis: { type: 'pattern', kick: 'have / has + 過去分詞 + 數字', rows: [
        { lab: '降低', blocks: [{ t: "We've", k: 's' }, { t: 'cut', k: 'v' }, { t: 'overtime costs', k: 'n' }, { t: 'by half', k: 'o' }] },
        { lab: '簽下', blocks: [{ t: "He's", k: 's' }, { t: 'signed', k: 'v' }, { t: 'twelve new clients', k: 'o' }] }
      ], note: '數字一放進去，就用 have + 過去分詞' } },
    { ch: 2, sp: 'N', zh: '寫成果時，這幾組動詞最好用，看起來具體又有力。',
      vis: { type: 'family', kick: 'Result verbs 成果動詞', core: 'Result verbs', coreCn: '寫成果最常用', art: 'dg20260909b2_result', items: [
        { t: 'cut · lowered', cn: '降低' }, { t: 'raised · boosted', cn: '提高' }, { t: 'launched · completed', cn: '推出・完成' }, { t: 'saved · secured', cn: '省下・爭取到' }
      ] } },
    { ch: 2, sp: 'N', zh: '兩個搭配：先用 have been doing 講投入，再用 and 接上 have done 的成果。',
      hi: [{ t: '兩個搭配', k: 'mix', c: 2 }],
      vis: { type: 'pattern', kick: '先投入，再成果', rows: [
        { lab: '投入', blocks: [{ t: "I've been testing", k: 'v' }, { t: 'the new app', k: 'n' }] },
        { lab: '＋成果', blocks: [{ t: "and we've fixed", k: 'v', add: true }, { t: 'forty bugs', k: 'o', add: true }] }
      ], note: '一句話裡同時看到努力跟結果' } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: 'Daniel 在寫升遷申請，主管 Grace 幫他看草稿。注意他們怎麼挑時態。', vis: { type: 'scene', art: 'dg20260909b2_office' } },
    { ch: 3, sp: 'A', en: 'Have you finished the warehouse project?', cn: '倉庫那個專案做完了嗎？',
      hi: [{ t: 'Have you finished', cn: '問完成了沒', k: 'res', c: 4 }], vis: { type: 'scene', art: 'dg20260909b2_boxq' } },
    { ch: 3, sp: 'T', en: "Not yet. I've been leading it since April.", cn: '還沒，我從四月起一直在帶這個專案。',
      hi: [{ t: "I've been leading", cn: '還在進行', k: 'proc', c: 3 }], vis: { type: 'scene', art: 'dg20260909b2_lead' } },
    { ch: 3, sp: 'N', zh: '專案還在跑，所以用 have been leading，讀者一看就知道這是目前的職責。',
      hi: [{ t: 'have been leading', k: 'proc', c: 3 }], vis: { type: 'scene', art: 'dg20260909b2_progress' } },
    { ch: 3, sp: 'A', en: 'Then add some results. What have you achieved so far?', cn: '那就加一點成果。到目前為止有什麼成績？',
      hi: [{ t: 'What have you achieved', cn: '問成果', k: 'res', c: 4 }], vis: { type: 'scene', art: 'dg20260909b2_targetq' } },
    { ch: 3, sp: 'T', en: "We've cut shipping mistakes by forty percent.", cn: '我們已經把出貨錯誤減少了四成。',
      hi: [{ t: "We've cut", cn: '可驗證的成果', k: 'res', c: 4 }], vis: { type: 'scene', art: 'dg20260909b2_chartdown' } },
    { ch: 3, sp: 'N', zh: '有具體的百分比，主管可以去查證，所以用 have cut 這種完成的說法。',
      hi: [{ t: 'have cut', k: 'res', c: 4 }], vis: { type: 'scene', art: 'dg20260909b2_magnify' } },
    { ch: 3, sp: 'A', en: 'Good. Can you put both ideas into one sentence?', cn: '很好。你能把這兩個重點寫成一句嗎？', vis: { type: 'scene', art: 'dg20260909b2_puzzle' } },
    { ch: 3, sp: 'T', en: "I've been leading the project, and we've already saved two hundred work hours.", cn: '我一直在帶這個專案，而且已經省下兩百個工時。',
      hi: [{ t: "we've already saved", cn: '再拿出成果', k: 'mix', c: 2 }], vis: { type: 'scene', art: 'dg20260909b2_hours' } },
    { ch: 3, sp: 'N', zh: '先用 have been leading 交代投入，再用 have saved 拿出成果，這樣最有說服力。',
      hi: [{ t: 'have saved', k: 'mix', c: 2 }], vis: { type: 'scene', art: 'dg20260909b2_trophy' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '同一個網站改版，換一個形狀，讀者的期待就不一樣。',
      vis: { type: 'vs', sm: true, kick: '還在做 vs 做完了',
        a: { w: "I've been redesigning the company website.", def: '我一直在進行公司網站改版。', cn: '還在做 → 目前職責' },
        b: { w: "I've redesigned the company website.", def: '我完成了公司網站改版。', cn: '做完了 → 成果' } } },
    { ch: 4, sp: 'T', en: "I've been redesigning the company website.", cn: '我一直在進行公司網站改版。',
      hi: [{ t: "I've been redesigning", cn: '還在做', k: 'proc', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '還在做 vs 做完了',
        a: { w: "I've been redesigning the company website.", def: '我一直在進行公司網站改版。', cn: '還在做 → 目前職責' },
        b: { w: "I've redesigned the company website.", def: '我完成了公司網站改版。', cn: '做完了 → 成果' } } },
    { ch: 4, sp: 'A', en: "I've redesigned the company website.", cn: '我完成了公司網站改版。',
      hi: [{ t: "I've redesigned", cn: '做完了', k: 'res', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '還在做 vs 做完了',
        a: { w: "I've been redesigning the company website.", def: '我一直在進行公司網站改版。', cn: '還在做 → 目前職責' },
        b: { w: "I've redesigned the company website.", def: '我完成了公司網站改版。', cn: '做完了 → 成果' } } },
    { ch: 4, sp: 'N', zh: '第一句說工作還在進行，不誇大；第二句等於宣布完成，讀者會期待看到新網站。',
      vis: { type: 'vs', sm: true, kick: '還在做 vs 做完了',
        a: { w: "I've been redesigning the company website.", def: '我一直在進行公司網站改版。', cn: '還在做 → 目前職責' },
        b: { w: "I've redesigned the company website.", def: '我完成了公司網站改版。', cn: '做完了 → 成果' } } },
    { ch: 4, sp: 'N', zh: '再看一組。有沒有數字，也會影響你的選擇。',
      vis: { type: 'vs', sm: true, kick: '沒數字 vs 有數字',
        a: { w: "I've been answering customer reviews online.", def: '我一直在回覆網路上的顧客評論。', cn: '沒數字 → 講投入' },
        b: { w: "I've answered over three hundred customer reviews.", def: '我已經回覆了三百多則顧客評論。', cn: '有數字 → 講成果' } } },
    { ch: 4, sp: 'T', en: "I've been answering customer reviews online.", cn: '我一直在回覆網路上的顧客評論。',
      hi: [{ t: "I've been answering", cn: '講投入', k: 'proc', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '沒數字 vs 有數字',
        a: { w: "I've been answering customer reviews online.", def: '我一直在回覆網路上的顧客評論。', cn: '沒數字 → 講投入' },
        b: { w: "I've answered over three hundred customer reviews.", def: '我已經回覆了三百多則顧客評論。', cn: '有數字 → 講成果' } } },
    { ch: 4, sp: 'A', en: "I've answered over three hundred customer reviews.", cn: '我已經回覆了三百多則顧客評論。',
      hi: [{ t: "I've answered over three hundred", cn: '講成果', k: 'res', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '沒數字 vs 有數字',
        a: { w: "I've been answering customer reviews online.", def: '我一直在回覆網路上的顧客評論。', cn: '沒數字 → 講投入' },
        b: { w: "I've answered over three hundred customer reviews.", def: '我已經回覆了三百多則顧客評論。', cn: '有數字 → 講成果' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '最後給你一個判斷流程，下筆前照順序問三個問題。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一問：這項工作現在還在進行嗎？是的話，寫投入。',
      hi: [{ t: '寫投入', k: 'proc', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'A', en: "I've been negotiating a new contract with our main supplier.", cn: '我一直在跟主要供應商談新合約。',
      hi: [{ t: "I've been negotiating", cn: '還在進行', k: 'proc', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二問：已經完成，而且有數字可以證明嗎？是的話，寫成果。',
      hi: [{ t: '寫成果', k: 'res', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'T', en: "We've signed fifteen new distributors in Southeast Asia.", cn: '我們已經在東南亞簽下十五家新經銷商。',
      hi: [{ t: "We've signed fifteen", cn: '有數字', k: 'res', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '第三問：兩個都有，想一句講清楚嗎？那就先寫投入，再接成果。',
      hi: [{ t: '先寫投入，再接成果', k: 'mix', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'A', en: "I've been mentoring our interns, and three of them have joined us full-time.", cn: '我一直在帶實習生，其中三位已經轉成正職。',
      hi: [{ t: 'have joined', cn: '成果', k: 'mix', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說說看。看到中文情境，先自己用英文說出來，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：你在自評裡寫，從一月起你一直在負責公司的電子報。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '你在自評裡寫，從一月起你一直在負責公司的電子報。' } },
    { ch: 6, sp: 'T', en: "I've been running the company newsletter since January.", cn: '我從一月起一直在負責公司的電子報。',
      hi: [{ t: "I've been running", cn: '目前職責 → 投入', k: 'proc', c: 3 }],
      vis: { type: 'speak', n: 1, show: true, sit: '你在自評裡寫，從一月起你一直在負責公司的電子報。', a: "I've been running the company newsletter since January." } },
    { ch: 6, sp: 'N', zh: '情境二：履歷的成就欄要寫，你已經把產品退貨率降低了一半。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '履歷的成就欄要寫，你已經把產品退貨率降低了一半。' } },
    { ch: 6, sp: 'A', en: "I've cut our product return rate in half.", cn: '我已經把產品退貨率降低了一半。',
      hi: [{ t: "I've cut", cn: '有數字 → 成果', k: 'res', c: 4 }],
      vis: { type: 'speak', n: 2, show: true, sit: '履歷的成就欄要寫，你已經把產品退貨率降低了一半。', a: "I've cut our product return rate in half." } },
    { ch: 6, sp: 'N', zh: '情境三：一句話講完，你一直在建立新的客服團隊，而且已經縮短了等待時間。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '一句話講完，你一直在建立新的客服團隊，而且已經縮短了等待時間。' } },
    { ch: 6, sp: 'T', en: "I've been building a new support team, and we've already shortened wait times.", cn: '我一直在建立新的客服團隊，而且已經縮短了等待時間。',
      hi: [{ t: "we've already shortened", cn: '先投入再成果', k: 'mix', c: 2 }],
      vis: { type: 'speak', n: 3, show: true, sit: '一句話講完，你一直在建立新的客服團隊，而且已經縮短了等待時間。', a: "I've been building a new support team, and we've already shortened wait times." } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結：還在做的職責寫 have been doing；有數字的成果寫 have done；兩個都有，先投入再成果。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '下次動筆前先問：我想讓讀者記住投入，還是成果？', vis: { type: 'end' } }
  ]
};
