/* ============================================================
   B2 Read 文法影片解說 — dg20260909b1p（Unit 10，B1+）
   格式與規則見 b2lab/tools/GVIDEO_SPEC.md；範本 gvideo/dg20261014b1.js。
   情境：陶藝教室（Lily／Owen）
   ============================================================ */
window.GVIDEO = window.GVIDEO || {};
window.GVIDEO_ART = window.GVIDEO_ART || {};

(function(){
  var D='#2b2118', A='#e8813a', C='#fdf6ec', L='#f7e3c9', R='#d9534f', B='#3b82c4', G='#3f9a62', Y='#f2c94c', S='#d6e8f8';
  var K='#f3c79a', CL='#b5703f', CD='#8e5228', W='#c98c55', M='#9aa3ad';
  var st='stroke="'+D+'" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"';
  var th=function(w){ return 'stroke="'+D+'" stroke-width="'+w+'" stroke-linejoin="round" stroke-linecap="round"'; };
  var svg=function(inner){ return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+inner+'</svg>'; };
  var txt=function(x,y,t,sz,col){ return '<text x="'+x+'" y="'+y+'" text-anchor="middle" font-family="Arial,sans-serif" font-weight="700" font-size="'+sz+'" fill="'+(col||D)+'">'+t+'</text>'; };
  var qb=function(cx,cy){ return '<circle cx="'+cx+'" cy="'+cy+'" r="16" fill="'+A+'" '+st+'/>'+txt(cx,cy+7,'?',20,'#fff'); };
  var chk=function(cx,cy,r){ return '<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="'+G+'" '+st+'/><path d="M'+(cx-r*0.45)+' '+cy+' l'+(r*0.32)+' '+(r*0.34)+' l'+(r*0.6)+' -'+(r*0.7)+'" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>'; };
  /* 小碗：x＝中心、y＝碗口、w＝半寬 */
  var bowl=function(x,y,w,crack){
    return '<path d="M'+(x-w)+' '+y+' H'+(x+w)+' Q'+(x+w-2)+' '+(y+w*1.15)+' '+x+' '+(y+w*1.15)+' Q'+(x-w+2)+' '+(y+w*1.15)+' '+(x-w)+' '+y+' Z" fill="'+CL+'" '+st+'/>'
      +'<ellipse cx="'+x+'" cy="'+y+'" rx="'+w+'" ry="'+(w*0.24)+'" fill="'+CD+'" '+th(2.5)+'/>'
      +(crack?'<path d="M'+(x-3)+' '+(y+3)+' l5 6 l-4 6 l5 6" fill="none" stroke="'+C+'" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>':''); };
  /* 花瓶：cx＝中心、y＝瓶口上緣、s＝縮放 */
  var vase=function(cx,y,s,col){
    var p=function(dx,dy){ return (cx+dx*s)+' '+(y+dy*s); };
    return '<path d="M'+p(-14,10)+' V'+(y+18*s)+' Q'+p(-14,26)+' '+p(-24,36)+' Q'+p(-46,58)+' '+p(-38,90)+' Q'+p(-32,114)+' '+p(0,116)+' Q'+p(32,114)+' '+p(38,90)+' Q'+p(46,58)+' '+p(24,36)+' Q'+p(14,26)+' '+p(14,18)+' V'+(y+10*s)+' Z" fill="'+(col||B)+'" '+st+'/>'
      +'<rect x="'+(cx-18*s)+'" y="'+y+'" width="'+(36*s)+'" height="'+(10*s)+'" rx="3" fill="'+(col||B)+'" '+st+'/>'
      +'<path d="M'+p(-36,70)+' q'+(9*s)+' '+(-7*s)+' '+(18*s)+' 0 q'+(9*s)+' '+(7*s)+' '+(18*s)+' 0 q'+(9*s)+' '+(-7*s)+' '+(18*s)+' 0 q'+(9*s)+' '+(7*s)+' '+(18*s)+' 0" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round"/>'; };
  var spark=function(x,y,r){ return '<path d="M'+x+' '+(y-r)+' Q'+x+' '+y+' '+(x+r)+' '+y+' Q'+x+' '+y+' '+x+' '+(y+r)+' Q'+x+' '+y+' '+(x-r)+' '+y+' Q'+x+' '+y+' '+x+' '+(y-r)+' Z" fill="'+Y+'" '+th(2)+'/>'; };
  var P='dg20260909b1p_';
  var art={};

  /* 過程：轉個不停的拉坯機 */
  art[P+'wheel']=svg(
    '<path d="M48 138 L66 100 H134 L152 138 Z" fill="#c9c2b8" '+st+'/>'
   +'<ellipse cx="100" cy="96" rx="58" ry="12" fill="'+M+'" '+st+'/>'
   +'<path d="M74 94 Q76 56 100 52 Q124 56 126 94 Z" fill="'+CL+'" '+st+'/>'
   +'<ellipse cx="100" cy="54" rx="12" ry="4" fill="'+CD+'" '+th(2.5)+'/>'
   +'<path d="M36 112 Q100 140 164 112" fill="none" stroke="'+G+'" stroke-width="6" stroke-linecap="round"/>'
   +'<path d="M156 102 L172 110 L158 122 Z" fill="'+G+'" '+th(2.5)+'/>'
   +'<path d="M30 60 q-10 14 0 28 M170 60 q10 14 0 28" fill="none" stroke="'+G+'" stroke-width="5" stroke-linecap="round"/>');
  /* 結果：完成的藍色花瓶＋閃亮＋打勾 */
  art[P+'vase']=svg(
    vase(92,14,1.05)
   +spark(150,34,12)+spark(36,50,9)
   +chk(158,112,18));
  /* 數量：層架上三個杯子，上面標 1、2、3 */
  art[P+'shelf']=svg(
    '<rect x="16" y="104" width="168" height="12" rx="3" fill="'+W+'" '+st+'/>'
   +'<path d="M36 116 V132 H52 M164 116 V132 H148" fill="none" '+th(3.5)+'/>'
   +'<rect x="30" y="66" width="34" height="38" rx="5" fill="'+A+'" '+st+'/><path d="M64 74 q14 0 14 12 q0 10 -14 10" fill="none" '+th(3.5)+'/>'
   +'<rect x="88" y="66" width="34" height="38" rx="5" fill="'+G+'" '+st+'/><path d="M122 74 q14 0 14 12 q0 10 -14 10" fill="none" '+th(3.5)+'/>'
   +'<rect x="146" y="66" width="34" height="38" rx="5" fill="'+B+'" '+st+'/>'
   +'<circle cx="47" cy="38" r="13" fill="#fff" '+th(2.5)+'/>'+txt(47,44,'1',16)
   +'<circle cx="105" cy="38" r="13" fill="#fff" '+th(2.5)+'/>'+txt(105,44,'2',16)
   +'<circle cx="163" cy="38" r="13" fill="#fff" '+th(2.5)+'/>'+txt(163,44,'3',16));

  /* 情境 0：陶藝教室——窗、層架上的陶器、工作桌 */
  art[P+'studio']=svg(
    '<rect x="18" y="16" width="64" height="52" rx="4" fill="'+S+'" '+st+'/><path d="M50 16 V68 M18 42 H82" '+th(3)+'/>'
   +'<rect x="106" y="50" width="84" height="8" rx="2" fill="'+W+'" '+st+'/>'
   +'<path d="M118 50 V32 Q118 26 124 26 H128 Q134 26 134 32 V50 Z" fill="'+A+'" '+st+'/>'
   +bowl(160,38,14,false)
   +'<rect x="12" y="98" width="176" height="12" rx="3" fill="'+W+'" '+st+'/>'
   +'<path d="M24 110 V140 M176 110 V140" '+th(5)+'/>'
   +'<path d="M54 98 Q50 80 66 78 Q82 76 82 98 Z" fill="'+CL+'" '+st+'/>'
   +bowl(130,84,18,false));
  /* 情境 1：沾滿泥巴的圍裙＋問號 */
  art[P+'apron']=svg(
    '<path d="M78 22 Q100 4 122 22" fill="none" '+th(4)+'/>'
   +'<path d="M76 22 H124 V46 L150 54 V138 H50 V54 L76 46 Z" fill="'+L+'" '+st+'/>'
   +'<rect x="78" y="94" width="44" height="28" rx="4" fill="'+C+'" '+st+'/>'
   +'<g fill="'+CL+'"><ellipse cx="70" cy="72" rx="9" ry="7"/><ellipse cx="102" cy="60" rx="7" ry="5"/><ellipse cx="130" cy="82" rx="10" ry="7"/><ellipse cx="64" cy="118" rx="6" ry="8"/><ellipse cx="136" cy="124" rx="7" ry="6"/><ellipse cx="98" cy="134" rx="8" ry="3"/></g>'
   +qb(172,36));
  /* 情境 2：雙手扶著拉坯機上的陶土 */
  art[P+'hands']=svg(
    '<ellipse cx="100" cy="118" rx="74" ry="14" fill="'+M+'" '+st+'/>'
   +'<rect x="72" y="60" width="56" height="58" fill="'+CL+'" '+st+'/>'
   +'<ellipse cx="100" cy="60" rx="28" ry="7" fill="'+CD+'" '+st+'/><ellipse cx="100" cy="60" rx="16" ry="3.5" fill="#6b3b1c"/>'
   +'<rect x="18" y="58" width="40" height="48" rx="16" fill="'+K+'" '+st+'/>'
   +'<rect x="52" y="60" width="30" height="12" rx="6" fill="'+K+'" '+th(2.5)+'/>'
   +'<rect x="52" y="73" width="30" height="12" rx="6" fill="'+K+'" '+th(2.5)+'/>'
   +'<rect x="52" y="86" width="30" height="12" rx="6" fill="'+K+'" '+th(2.5)+'/>'
   +'<ellipse cx="40" cy="56" rx="7" ry="11" transform="rotate(40 40 56)" fill="'+K+'" '+th(2.5)+'/>'
   +'<rect x="142" y="58" width="40" height="48" rx="16" fill="'+K+'" '+st+'/>'
   +'<rect x="118" y="60" width="30" height="12" rx="6" fill="'+K+'" '+th(2.5)+'/>'
   +'<rect x="118" y="73" width="30" height="12" rx="6" fill="'+K+'" '+th(2.5)+'/>'
   +'<rect x="118" y="86" width="30" height="12" rx="6" fill="'+K+'" '+th(2.5)+'/>'
   +'<ellipse cx="160" cy="56" rx="7" ry="11" transform="rotate(-40 160 56)" fill="'+K+'" '+th(2.5)+'/>'
   +'<g fill="'+CL+'"><ellipse cx="70" cy="79" rx="6" ry="3.5"/><ellipse cx="130" cy="66" rx="6" ry="3.5"/><ellipse cx="36" cy="94" rx="5" ry="4"/><ellipse cx="162" cy="86" rx="5" ry="4"/></g>');
  /* 情境 3：時鐘上從十點到現在的一整段 */
  art[P+'clock']=svg(
    '<circle cx="100" cy="76" r="58" fill="#fff" '+th(4)+'/>'
   +'<path d="M100 76 L58.4 52 A48 48 0 0 1 124 34.4 Z" fill="'+G+'" opacity=".35"/>'
   +'<path d="M58.4 52 A48 48 0 0 1 124 34.4" fill="none" stroke="'+G+'" stroke-width="5" stroke-linecap="round"/>'
   +'<g '+th(4)+'><line x1="100" y1="22" x2="100" y2="30"/><line x1="154" y1="76" x2="146" y2="76"/><line x1="100" y1="130" x2="100" y2="122"/><line x1="46" y1="76" x2="54" y2="76"/></g>'
   +'<circle cx="58.4" cy="52" r="5" fill="'+G+'" '+th(2.5)+'/>'
   +'<line x1="100" y1="76" x2="100" y2="38" '+th(4)+'/><line x1="100" y1="76" x2="114" y2="52" stroke="'+A+'" stroke-width="7" stroke-linecap="round"/>'
   +'<circle cx="100" cy="76" r="5" fill="'+D+'"/>');
  /* 情境 4：一個碗＋問號（做了幾個？） */
  art[P+'bowlq']=svg(
    '<path d="M40 70 H152 Q148 128 96 128 Q44 128 40 70 Z" fill="'+CL+'" '+st+'/>'
   +'<ellipse cx="96" cy="70" rx="56" ry="12" fill="'+CD+'" '+st+'/>'
   +'<path d="M60 100 q12 -6 24 0 q12 6 24 0 q12 -6 24 0" fill="none" stroke="'+C+'" stroke-width="3" stroke-linecap="round"/>'
   +qb(170,34));
  /* 情境 5：六個碗，其中兩個裂了 */
  art[P+'bowls']=svg(
    '<line x1="12" y1="70" x2="188" y2="70" stroke="'+W+'" stroke-width="6" stroke-linecap="round"/>'
   +'<line x1="12" y1="136" x2="188" y2="136" stroke="'+W+'" stroke-width="6" stroke-linecap="round"/>'
   +bowl(42,42,22,false)+bowl(100,42,22,false)+bowl(158,42,22,true)
   +bowl(42,108,22,false)+bowl(100,108,22,true)+bowl(158,108,22,false));
  /* 情境 6：疊起來的碗，掛著數字牌 6 */
  art[P+'stack']=svg(
    bowl(80,96,34,false)+bowl(80,78,34,false)+bowl(80,60,34,false)+bowl(80,42,34,false)
   +'<path d="M114 46 L150 44" fill="none" '+th(2.5)+'/>'
   +'<g transform="rotate(12 162 60)"><path d="M146 40 H186 V84 H146 L138 62 Z" fill="'+Y+'" '+st+'/><circle cx="150" cy="62" r="3" fill="'+D+'"/>'+txt(168,74,'6',30)+'</g>');
  /* 情境 7：要送媽媽的藍花瓶（愛心吊牌）＋問號 */
  art[P+'vaseq']=svg(
    vase(84,18,0.98)
   +'<path d="M98 36 Q120 44 126 62" fill="none" '+th(2)+'/>'
   +'<path d="M128 92 C110 80 104 70 112 64 C118 60 124 62 128 68 C132 62 138 60 144 64 C152 70 146 80 128 92 Z" fill="'+R+'" '+st+'/>'
   +qb(172,34));
  /* 情境 8：窗邊層架上晾乾的花瓶 */
  art[P+'vasedry']=svg(
    '<rect x="96" y="10" width="92" height="74" rx="4" fill="'+S+'" '+st+'/><path d="M142 10 V84 M96 47 H188" '+th(3)+'/>'
   +'<circle cx="168" cy="30" r="10" fill="'+Y+'" '+th(2.5)+'/>'
   +'<rect x="12" y="120" width="176" height="10" rx="3" fill="'+W+'" '+st+'/>'
   +vase(60,44,0.66)
   +'<path d="M92 66 q-6 -8 0 -16 q6 -8 0 -16 M108 70 q-6 -8 0 -16 q6 -8 0 -16" fill="none" stroke="'+A+'" stroke-width="3" stroke-linecap="round"/>');
  /* 情境 9：綁上蝴蝶結的花瓶＝完成的成品 */
  art[P+'gift']=svg(
    vase(84,16,1.0)
   +'<path d="M84 40 L62 30 Q56 40 62 50 Z M84 40 L106 30 Q112 40 106 50 Z" fill="'+R+'" '+st+'/>'
   +'<path d="M80 44 L72 64 M88 44 L96 64" fill="none" stroke="'+R+'" stroke-width="5" stroke-linecap="round"/>'
   +'<circle cx="84" cy="40" r="5" fill="'+R+'" '+st+'/>'
   +chk(160,108,22));

  Object.assign(window.GVIDEO_ART, art);
})();

/* ============================================================
   dg20260909b1p — Process or Result?
   Grammar in Use Unit 10（I have been doing and I have done）
   ============================================================ */
window.GVIDEO.dg20260909b1p = {
  kind: 'gram',
  date: '2026-09-09',
  title: 'Process or Result?',
  titleCn: 'have been doing 跟 have done：你想讓人注意過程，還是結果？',
  titleArt: ['dg20260909b1p_wheel', 'dg20260909b1p_vase', 'dg20260909b1p_shelf'],
  scene: '陶藝教室 Pottery studio',
  sceneArt: 'dg20260909b1p_studio',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Lily', voice: 'f' },
    T: { name: 'Owen', voice: 'm' }
  },
  expr: {
    proc: { t: 'have been + V-ing', cn: '這段時間一直在做的過程，常用來解釋現在的樣子', ex: "Sorry I'm late. I've been looking for my keys.", exCn: '抱歉我遲到了，我一直在找鑰匙。', note: '做完沒有不是重點；常跟 all day、since、how long 一起出現' },
    res:  { t: 'have + 過去分詞', cn: '已經做完、看得到結果', ex: "I've found my keys. They were in my coat pocket.", exCn: '我找到鑰匙了，原來在外套口袋裡。', note: '聽的人會知道：事情已經完成了' },
    num:  { t: 'how many + have done', cn: '講完成了多少、幾次', ex: "She's read four chapters since dinner.", exCn: '她晚餐後已經讀了四章。', note: '問 how many、how much，或講幾次，用 have + 過去分詞' }
  },
  chapters: [
    { cn: '開場' }, { cn: '過程還是結果？' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  cardsKick: 'What should they notice? 你想讓人注意什麼？',
  cards: [
    { art: 'dg20260909b1p_wheel', lab: '過程', who: 'have been + V-ing' },
    { art: 'dg20260909b1p_vase',  lab: '結果', who: 'have + 過去分詞' },
    { art: 'dg20260909b1p_shelf', lab: '數量', who: 'how many → 完成' }
  ],
  flow: [
    { q: '想解釋現在累了、髒了、亂了？', a: '講過程', en: 'have been + V-ing' },
    { q: '事情做完了，看得到結果？',     a: '講結果', en: 'have + 過去分詞' },
    { q: '有數量，或問 how many？',      a: '講數量', en: 'have + 過去分詞 + 數量' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: '同一件事，英文可以說成 have been doing，也可以說成 have done。差別在你想讓對方注意什麼。', vis: { type: 'title' } },

    /* ---- 1 核心：過程還是結果 ---- */
    { ch: 1, sp: 'N', zh: '開口之前先想一下：你要對方看到過程，還是結果？', vis: { type: 'cards', show: 0 } },
    { ch: 1, sp: 'N', zh: '想讓人注意這段時間一直在做，做完沒有不重要，就用 have been doing。',
      hi: [{ t: 'have been doing', k: 'proc', c: 3 }], vis: { type: 'cards', show: 1, pop: true } },
    { ch: 1, sp: 'A', en: "I've been sewing curtains all weekend.", cn: '我整個週末都在縫窗簾。',
      hi: [{ t: "I've been sewing", cn: '一直在縫', k: 'proc', c: 3 }], vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'N', zh: '這種說法很常拿來解釋現在看到的樣子，例如累了、髒了，或是很亂。', vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'T', en: "Sorry about the sawdust. I've been building a bookshelf.", cn: '抱歉地上都是木屑，我一直在做書架。',
      hi: [{ t: "I've been building", cn: '解釋木屑', k: 'proc', c: 3 }], vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'N', zh: '想讓人注意事情已經做完、看得到結果，就用 have done。',
      hi: [{ t: 'have done', k: 'res', c: 4 }], vis: { type: 'cards', show: 2, pop: true } },
    { ch: 1, sp: 'T', en: "I've finished the bookshelf, so the books are off the floor now.", cn: '書架做好了，書終於不用堆在地上了。',
      hi: [{ t: "I've finished", cn: '做好了', k: 'res', c: 4 }], vis: { type: 'cards', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: '如果講的是做了多少、做了幾次，重點也是完成的部分，一樣用 have done。',
      hi: [{ t: '做了多少', k: 'num', c: 2 }], vis: { type: 'cards', show: 3, pop: true } },
    { ch: 1, sp: 'A', en: 'How many pages have you translated so far?', cn: '你到目前為止翻譯了幾頁？',
      hi: [{ t: 'How many pages', cn: '問數量', k: 'num', c: 2 }], vis: { type: 'cards', show: 3, lit: 2 } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: '講過程：have 或 has，加 been，再加動詞 ing。',
      hi: [{ t: '講過程', k: 'proc', c: 3 }],
      vis: { type: 'pattern', kick: 'have / has + been + V-ing', rows: [
        { lab: '從早餐後', blocks: [{ t: "I've", k: 's' }, { t: 'been sewing', k: 'v' }, { t: 'since breakfast', k: 'o' }] },
        { lab: '一整天',   blocks: [{ t: "She's", k: 's' }, { t: 'been studying', k: 'v' }, { t: 'in the library', k: 'n' }, { t: 'all day', k: 'o' }] }
      ], note: 'been 後面一定接 V-ing' } },
    { ch: 2, sp: 'N', zh: '講結果：have 或 has，直接加過去分詞。',
      hi: [{ t: '講結果', k: 'res', c: 4 }],
      vis: { type: 'pattern', kick: 'have / has + 過去分詞', rows: [
        { lab: '漆好了', blocks: [{ t: "We've", k: 's' }, { t: 'painted', k: 'v' }, { t: 'the hallway', k: 'o' }] },
        { lab: '回完了', blocks: [{ t: "He's", k: 's' }, { t: 'replied', k: 'v' }, { t: 'to every message', k: 'o' }] }
      ] } },
    { ch: 2, sp: 'N', zh: '這幾個常見的字，可以幫你判斷要講過程還是結果。',
      vis: { type: 'family', kick: 'Clue words 線索字', core: 'Clue words', coreCn: '看到這些字就知道', art: 'dg20260909b1p_shelf', items: [
        { t: 'all morning · all week', cn: '一整段 → 過程' }, { t: 'how long', cn: '問多久 → 過程' }, { t: 'how many · how much', cn: '問多少 → 結果' }, { t: 'twice · three times', cn: '幾次 → 結果' }
      ] } },
    { ch: 2, sp: 'N', zh: '同一件事換個說法：身上還濕濕的，講過程；狗已經乾淨了，講結果。',
      vis: { type: 'pattern', kick: '同一件事，兩種重點', rows: [
        { lab: '身上濕濕的', blocks: [{ t: "I've been washing the dog", k: 'v' }] },
        { lab: '狗乾淨了',   blocks: [{ t: "I've washed the dog", k: 'v', add: true }] }
      ], note: '過程 → 解釋現在的樣子；結果 → 事情完成了' } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: 'Owen 走進陶藝教室，看到 Lily 滿身都是泥巴。聽聽他們怎麼說。', vis: { type: 'scene', art: 'dg20260909b1p_studio' } },
    { ch: 3, sp: 'T', en: 'Why is there clay all over your apron?', cn: '你的圍裙怎麼全是泥巴？', vis: { type: 'scene', art: 'dg20260909b1p_apron' } },
    { ch: 3, sp: 'A', en: "I've been working at the wheel since ten.", cn: '我從十點就一直在拉坯。',
      hi: [{ t: "I've been working", cn: '一直在做', k: 'proc', c: 3 }], vis: { type: 'scene', art: 'dg20260909b1p_hands' } },
    { ch: 3, sp: 'N', zh: 'Lily 用 have been working 解釋圍裙為什麼髒，重點是這段時間一直在做。',
      hi: [{ t: 'have been working', k: 'proc', c: 3 }], vis: { type: 'scene', art: 'dg20260909b1p_clock' } },
    { ch: 3, sp: 'T', en: 'How many bowls have you made?', cn: '你做了幾個碗？',
      hi: [{ t: 'How many bowls', cn: '問數量', k: 'num', c: 2 }], vis: { type: 'scene', art: 'dg20260909b1p_bowlq' } },
    { ch: 3, sp: 'A', en: "I've made six, but two of them cracked.", cn: '我做了六個，可是有兩個裂掉了。',
      hi: [{ t: "I've made six", cn: '有數量', k: 'num', c: 2 }], vis: { type: 'scene', art: 'dg20260909b1p_bowls' } },
    { ch: 3, sp: 'N', zh: 'Owen 問 how many，Lily 回答有數字，講的是完成的數量，所以用 have made。',
      hi: [{ t: 'have made', k: 'num', c: 2 }], vis: { type: 'scene', art: 'dg20260909b1p_stack' } },
    { ch: 3, sp: 'T', en: 'Have you finished the blue vase for your mom?', cn: '要送你媽媽的藍色花瓶做好了嗎？',
      hi: [{ t: 'Have you finished', cn: '問結果', k: 'res', c: 4 }], vis: { type: 'scene', art: 'dg20260909b1p_vaseq' } },
    { ch: 3, sp: 'A', en: "Yes, I've finished it. It's drying on the shelf.", cn: '做好了，正在架子上晾乾。',
      hi: [{ t: "I've finished it", cn: '已完成', k: 'res', c: 4 }], vis: { type: 'scene', art: 'dg20260909b1p_vasedry' } },
    { ch: 3, sp: 'N', zh: '花瓶已經做好，看得到成品，所以用 have finished，這就是結果的說法。',
      hi: [{ t: 'have finished', k: 'res', c: 4 }], vis: { type: 'scene', art: 'dg20260909b1p_gift' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '只差一個 been 和 ing，聽的人想到的畫面就不一樣。',
      vis: { type: 'vs', sm: true, kick: '還在寫 vs 寫好了',
        a: { w: 'Sam has been writing a song.', def: 'Sam 這陣子一直在寫一首歌。', cn: '過程 → 可能還沒寫完' },
        b: { w: 'Sam has written a song.', def: 'Sam 寫好一首歌了。', cn: '結果 → 現在就能聽' } } },
    { ch: 4, sp: 'T', en: 'Sam has been writing a song.', cn: 'Sam 這陣子一直在寫一首歌。',
      hi: [{ t: 'has been writing', cn: '過程', k: 'proc', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '還在寫 vs 寫好了',
        a: { w: 'Sam has been writing a song.', def: 'Sam 這陣子一直在寫一首歌。', cn: '過程 → 可能還沒寫完' },
        b: { w: 'Sam has written a song.', def: 'Sam 寫好一首歌了。', cn: '結果 → 現在就能聽' } } },
    { ch: 4, sp: 'A', en: 'Sam has written a song.', cn: 'Sam 寫好一首歌了。',
      hi: [{ t: 'has written', cn: '結果', k: 'res', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '還在寫 vs 寫好了',
        a: { w: 'Sam has been writing a song.', def: 'Sam 這陣子一直在寫一首歌。', cn: '過程 → 可能還沒寫完' },
        b: { w: 'Sam has written a song.', def: 'Sam 寫好一首歌了。', cn: '結果 → 現在就能聽' } } },
    { ch: 4, sp: 'N', zh: '第一句只說他一直在寫，可能還沒寫完；第二句是歌已經寫好，現在就能聽。',
      vis: { type: 'vs', sm: true, kick: '還在寫 vs 寫好了',
        a: { w: 'Sam has been writing a song.', def: 'Sam 這陣子一直在寫一首歌。', cn: '過程 → 可能還沒寫完' },
        b: { w: 'Sam has written a song.', def: 'Sam 寫好一首歌了。', cn: '結果 → 現在就能聽' } } },
    { ch: 4, sp: 'N', zh: '再看一組。問多久，用 have been doing；問多少，用 have done。',
      vis: { type: 'vs', sm: true, kick: '問多久 vs 問多少',
        a: { w: 'How long have you been learning Japanese?', def: '你學日文學多久了？', cn: 'how long → 過程' },
        b: { w: 'How many words have you learned?', def: '你學了多少個單字？', cn: 'how many → 數量' } } },
    { ch: 4, sp: 'A', en: 'How long have you been learning Japanese?', cn: '你學日文學多久了？',
      hi: [{ t: 'How long', cn: '問多久', k: 'proc', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '問多久 vs 問多少',
        a: { w: 'How long have you been learning Japanese?', def: '你學日文學多久了？', cn: 'how long → 過程' },
        b: { w: 'How many words have you learned?', def: '你學了多少個單字？', cn: 'how many → 數量' } } },
    { ch: 4, sp: 'T', en: 'How many words have you learned?', cn: '你學了多少個單字？',
      hi: [{ t: 'How many words', cn: '問多少', k: 'num', c: 2 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '問多久 vs 問多少',
        a: { w: 'How long have you been learning Japanese?', def: '你學日文學多久了？', cn: 'how long → 過程' },
        b: { w: 'How many words have you learned?', def: '你學了多少個單字？', cn: 'how many → 數量' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '最後給你一個判斷流程，照順序問自己三個問題。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一問：你是在解釋現在為什麼累、為什麼髒、為什麼亂嗎？是的話，講過程。',
      hi: [{ t: '講過程', k: 'proc', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'T', en: "My legs are sore. I've been cycling up the hills.", cn: '我腿好痠，因為一直在騎上坡。',
      hi: [{ t: "I've been cycling", cn: '過程', k: 'proc', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二問：事情已經做完，看得到結果嗎？是的話，講結果。',
      hi: [{ t: '講結果', k: 'res', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'A', en: "I've cleaned the windows. Now you can see the mountains.", cn: '我把窗戶擦乾淨了，現在看得到山了。',
      hi: [{ t: "I've cleaned", cn: '結果', k: 'res', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '第三問：有數量，或是在問 how many 嗎？一樣用 have 加過去分詞。',
      hi: [{ t: 'how many', k: 'num', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'T', en: "We've planted thirty trees in the schoolyard.", cn: '我們已經在校園裡種了三十棵樹。',
      hi: [{ t: "We've planted thirty", cn: '數量', k: 'num', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說說看。看到中文情境，先自己用英文說出來，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：你身上都是油漆，因為你一直在漆圍牆。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '你身上都是油漆，因為你一直在漆圍牆。' } },
    { ch: 6, sp: 'A', en: "I've been painting the fence.", cn: '我一直在漆圍牆。',
      hi: [{ t: "I've been painting", cn: '解釋現在的樣子 → 過程', k: 'proc', c: 3 }],
      vis: { type: 'speak', n: 1, show: true, sit: '你身上都是油漆，因為你一直在漆圍牆。', a: "I've been painting the fence." } },
    { ch: 6, sp: 'N', zh: '情境二：車已經洗好了，你跟家人說可以出門了。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '車已經洗好了，你跟家人說可以出門了。' } },
    { ch: 6, sp: 'T', en: "I've washed the car, so we can leave now.", cn: '我把車洗好了，我們可以出發了。',
      hi: [{ t: "I've washed", cn: '做完了 → 結果', k: 'res', c: 4 }],
      vis: { type: 'speak', n: 2, show: true, sit: '車已經洗好了，你跟家人說可以出門了。', a: "I've washed the car, so we can leave now." } },
    { ch: 6, sp: 'N', zh: '情境三：這個月你已經看了五部電影。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '這個月你已經看了五部電影。' } },
    { ch: 6, sp: 'A', en: "I've watched five movies this month.", cn: '我這個月已經看了五部電影。',
      hi: [{ t: "I've watched five movies", cn: '有數量 → have done', k: 'num', c: 2 }],
      vis: { type: 'speak', n: 3, show: true, sit: '這個月你已經看了五部電影。', a: "I've watched five movies this month." } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結：講過程、解釋現在的樣子，用 have been doing；講結果、講數量，用 have done。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '下次開口前先想：我要對方看到過程，還是結果？', vis: { type: 'end' } }
  ]
};
