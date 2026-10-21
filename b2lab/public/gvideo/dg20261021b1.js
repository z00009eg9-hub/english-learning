/* ============================================================
   B2 Read 文法影片解說 — dg20261021b1（going to 的兩張臉：我的決定，眼前的跡象）
   格式與規則見 b2lab/tools/GVIDEO_SPEC.md；一個單元一個檔。
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

  Object.assign(window.GVIDEO_ART, {
    /* 核心圖 1：筆記本上的決定 */
    dg20261021b1_notebook: svg(
      '<rect x="40" y="20" width="112" height="116" rx="8" fill="#fff" '+st+'/>'
     +'<rect x="40" y="20" width="18" height="116" rx="8" fill="'+A+'" '+st+'/>'
     +'<g stroke="'+D+'" stroke-width="3" stroke-linecap="round"><line x1="72" y1="46" x2="138" y2="46"/><line x1="72" y1="70" x2="138" y2="70"/><line x1="72" y1="94" x2="122" y2="94"/></g>'
     +chk(132,112,14)
     +'<line x1="166" y1="34" x2="150" y2="96" '+th(4)+'/><path d="M148 100 l4 -10 l6 4 Z" fill="'+D+'"/>'),
    /* 核心圖 2：低雲與雨絲 */
    dg20261021b1_cloud: svg(
      '<path d="M44 94 a22 22 0 0 1 6 -42 a30 30 0 0 1 56 -10 a24 24 0 0 1 36 24 a18 18 0 0 1 -6 28 Z" fill="'+S+'" '+st+'/>'
     +'<g stroke="'+B+'" stroke-width="4" stroke-linecap="round"><line x1="64" y1="104" x2="58" y2="132"/><line x1="94" y1="104" x2="88" y2="132"/><line x1="124" y1="104" x2="118" y2="132"/></g>'
     +'<circle cx="170" cy="40" r="15" fill="none" stroke="'+A+'" stroke-width="4"/>'
     +'<circle cx="170" cy="40" r="5" fill="'+A+'"/>'),
    /* 核心圖 3：兩人談定的日子 */
    dg20261021b1_agreed: svg(
      cal(30,34,104,94)
     +chk(100,104,13)
     +'<path d="M146 66 l16 10 l-6 12 l-18 -8 Z" fill="'+L+'" '+st+'/>'
     +'<path d="M188 62 l-18 12 l6 14 l20 -10 Z" fill="'+A+'" '+st+'/>'),

    /* 情境 1：辦公室長桌 */
    dg20261021b1_lunchtable: svg(
      '<rect x="20" y="76" width="160" height="14" rx="5" fill="'+L+'" '+st+'/>'
     +'<line x1="44" y1="90" x2="44" y2="132" '+th(4)+'/><line x1="156" y1="90" x2="156" y2="132" '+th(4)+'/>'
     +'<circle cx="68" cy="62" r="13" fill="#fff" '+st+'/><circle cx="100" cy="62" r="13" fill="'+A+'" '+st+'/><circle cx="132" cy="62" r="13" fill="#fff" '+st+'/>'
     +'<path d="M60 40 q8 -8 16 0 M92 40 q8 -8 16 0 M124 40 q8 -8 16 0" fill="none" '+th(2.5)+'/>'),
    /* 情境 2：春捲 */
    dg20261021b1_springroll: svg(
      '<g '+st+'><rect x="36" y="56" width="26" height="76" rx="13" fill="#fff"/><rect x="74" y="44" width="26" height="88" rx="13" fill="#fff"/><rect x="112" y="56" width="26" height="76" rx="13" fill="#fff"/></g>'
     +'<g fill="'+G+'"><rect x="44" y="62" width="10" height="12" rx="4"/><rect x="82" y="50" width="10" height="12" rx="4"/><rect x="120" y="62" width="10" height="12" rx="4"/></g>'
     +'<path d="M152 92 a20 20 0 1 0 0.1 0" fill="'+A+'" '+st+'/>'),
    /* 情境 3：市場攤子 */
    dg20261021b1_marketstall: svg(
      '<line x1="10" y1="132" x2="190" y2="132" '+st+'/>'
     +'<path d="M26 44 H174 L166 62 H34 Z" fill="'+A+'" '+st+'/>'
     +'<path d="M62 44 V62 M100 44 V62 M138 44 V62" stroke="#fff" stroke-width="9"/>'
     +'<path d="M26 44 H174 L166 62 H34 Z" fill="none" '+st+'/>'
     +'<rect x="40" y="78" width="120" height="54" fill="#fff" '+st+'/>'
     +'<g '+th(2.5)+'><circle cx="66" cy="98" r="10" fill="'+R+'"/><circle cx="96" cy="98" r="10" fill="'+G+'"/><circle cx="126" cy="98" r="10" fill="'+Y+'"/></g>'
     +'<line x1="40" y1="114" x2="160" y2="114" stroke="'+L+'" stroke-width="4"/>'),
    /* 情境 4：一把香菜 */
    dg20261021b1_herbs: svg(
      '<path d="M100 132 V74" '+th(5)+'/>'
     +'<g fill="'+G+'" '+st+'><path d="M100 76 q-34 -12 -36 -36 q30 0 36 36 Z"/><path d="M100 76 q34 -12 36 -36 q-30 0 -36 36 Z"/><path d="M100 60 q-26 -14 -24 -36 q24 8 24 36 Z"/><path d="M100 60 q26 -14 24 -36 q-24 8 -24 36 Z"/></g>'
     +'<rect x="78" y="112" width="44" height="16" rx="5" fill="'+A+'" '+st+'/>'),
    /* 情境 5：大鍋 */
    dg20261021b1_bigpot: svg(
      '<path d="M44 60 H156 V112 a16 16 0 0 1 -16 16 H60 a16 16 0 0 1 -16 -16 Z" fill="'+L+'" '+st+'/>'
     +'<rect x="36" y="48" width="128" height="14" rx="6" fill="#fff" '+st+'/>'
     +'<circle cx="100" cy="42" r="8" fill="'+A+'" '+st+'/>'
     +'<path d="M30 76 a12 12 0 0 0 0 20 M170 76 a12 12 0 0 1 0 20" fill="none" '+th(4)+'/>'
     +'<g stroke="'+B+'" stroke-width="3.5" stroke-linecap="round" fill="none"><path d="M76 28 q8 -10 0 -18"/><path d="M124 28 q8 -10 0 -18"/></g>'),
    /* 情境 6：沾醬小碗 */
    dg20261021b1_sauce: svg(
      '<path d="M50 70 H150 V92 a40 34 0 0 1 -100 0 Z" fill="#fff" '+st+'/>'
     +'<path d="M56 76 H144 V86 a36 24 0 0 1 -88 0 Z" fill="'+R+'" opacity=".5"/>'
     +'<rect x="40" y="124" width="120" height="10" rx="4" fill="'+L+'" '+st+'/>'
     +'<line x1="162" y1="34" x2="150" y2="74" '+th(4)+'/><ellipse cx="166" cy="30" rx="12" ry="8" fill="'+A+'" '+th(2.5)+'/>'),
    /* 情境 7：盤子上剩四個 */
    dg20261021b1_traycount: svg(
      '<rect x="28" y="54" width="144" height="70" rx="10" fill="#fff" '+st+'/>'
     +'<g '+th(2.5)+' fill="'+L+'"><rect x="46" y="70" width="22" height="38" rx="11"/><rect x="78" y="70" width="22" height="38" rx="11"/><rect x="110" y="70" width="22" height="38" rx="11"/><rect x="142" y="70" width="22" height="38" rx="11"/></g>'
     +txt(100,42,'4',20,A)),
    /* 情境 8：空盤子 */
    dg20261021b1_emptytray: svg(
      '<rect x="28" y="56" width="144" height="68" rx="10" fill="#fff" '+st+'/>'
     +'<line x1="46" y1="92" x2="154" y2="92" stroke="'+L+'" stroke-width="5"/>'
     +'<path d="M60 74 q14 10 28 0" fill="none" '+th(2.5)+'/>'
     +qb(168,38)),
    /* 情境 9：一碗麵 */
    dg20261021b1_noodles: svg(
      '<path d="M44 68 H156 V90 a44 38 0 0 1 -112 0 Z" fill="#fff" '+st+'/>'
     +'<g stroke="'+Y+'" stroke-width="5" stroke-linecap="round" fill="none"><path d="M60 64 q12 -16 26 -4"/><path d="M88 62 q12 -16 26 -4"/><path d="M114 66 q10 -14 24 -2"/></g>'
     +'<path d="M44 68 H156" '+th(4)+'/>'
     +'<line x1="150" y1="26" x2="128" y2="66" '+th(4)+'/><line x1="166" y1="30" x2="142" y2="68" '+th(4)+'/>'),
    /* 情境 10：門口聞到味道 */
    dg20261021b1_doorsniff: svg(
      '<rect x="56" y="18" width="78" height="118" rx="5" fill="'+L+'" '+st+'/>'
     +'<rect x="68" y="32" width="54" height="42" rx="4" fill="'+S+'" '+st+'/>'
     +'<circle cx="124" cy="98" r="4" fill="'+D+'"/>'
     +'<g stroke="'+A+'" stroke-width="3.5" stroke-linecap="round" fill="none"><path d="M148 70 q12 -12 0 -24"/><path d="M166 76 q12 -12 0 -24"/></g>'
     +'<path d="M24 96 q10 -10 20 0 q-4 14 -20 10 Z" fill="'+C+'" '+th(2.5)+'/>')
  });
})();

/* ============================================================
   dg20261021b1 — Two Faces of Going To
   Grammar in Use Unit 20（I'm going to (do)）往下延伸
   ============================================================ */
window.GVIDEO.dg20261021b1 = {
  kind: 'gram',
  date: '2026-10-21',
  title: 'Two Faces of Going To',
  titleCn: 'going to 的兩張臉：我的決定，眼前的跡象',
  titleArt: ['dg20261021b1_notebook', 'dg20261021b1_cloud', 'dg20261021b1_agreed'],
  scene: '辦公室午餐 Office lunch',
  sceneArt: 'dg20261021b1_lunchtable',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Clara', voice: 'f' },
    T: { name: 'Sam', voice: 'm' }
  },
  expr: {
    dec:  { t: 'going to（我決定的）', cn: '決定在開口之前就做好了', ex: 'Our team is going to retrain every packer in March.', exCn: '我們團隊三月要把每位包裝人員重新訓練一次。', note: '會議與面試報告計畫時的預設說法' },
    sign: { t: 'going to（看得到跡象）', cn: '從眼前的證據推出結論', ex: 'Half the chairs are gone. This room is going to feel empty.', exCn: '椅子少了一半，這間會議室會顯得很空。', note: '前面常先指出證據：look、only、already' },
    arr:  { t: 'be + V-ing（約好的）', cn: '雙方都同意、時間也定了', ex: 'I am collecting the certificate on Thursday morning.', exCn: '我星期四早上要去拿證書。', note: '講得出跟誰約、幾點，就升級成這個形狀' }
  },
  chapters: [
    { cn: '開場' }, { cn: '兩張臉' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  cards: [
    { art: 'dg20261021b1_notebook', lab: '我決定了', who: '決定早就做好了' },
    { art: 'dg20261021b1_cloud', lab: '跡象在眼前', who: '從證據推結論' },
    { art: 'dg20261021b1_agreed', lab: '我們約好了', who: '升級成現在進行式' }
  ],
  cardsKick: 'going to 的兩張臉，再加一格',
  flow: [
    { q: '這是你自己做好的決定嗎？', a: 'going to', en: '主詞 + be + going to + 原形' },
    { q: '眼前有看得到的跡象嗎？',   a: 'going to', en: '先給證據，再下結論' },
    { q: '雙方談定時間了嗎？',       a: '現在進行式', en: '主詞 + be + V-ing + 時間' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: 'going to 不只是講未來，它其實在做兩件完全不同的事。分清楚這兩件事，你的英文會立刻聽起來有把握。', vis: { type: 'title' } },

    /* ---- 1 兩張臉 ---- */
    { ch: 1, sp: 'N', zh: '先看第一張臉：決定。這個決定在你開口之前就做好了。', vis: { type: 'cards', show: 0, kick: 'going to 的兩張臉，再加一格' } },
    { ch: 1, sp: 'N', zh: '因為決定已經成立，你講得出細節，所以 going to 的句子通常帶時間或地點。',
      hi: [{ t: '決定', k: 'dec', c: 3 }], vis: { type: 'cards', show: 1, pop: true } },
    { ch: 1, sp: 'A', en: 'We are going to split the delivery into two runs.', cn: '我們要把那批貨分兩趟送。',
      hi: [{ t: 'are going to split', cn: '會議上定案了', k: 'dec', c: 3 }], vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'N', zh: '第二張臉跟你的決定無關，而是跟證據有關：你看到跡象，於是說出結論。',
      hi: [{ t: '證據', k: 'sign', c: 4 }], vis: { type: 'cards', show: 2, pop: true } },
    { ch: 1, sp: 'T', en: 'The lid is rattling hard. The soup is going to boil over.', cn: '蓋子跳得很厲害，湯要滾出來了。',
      hi: [{ t: 'is going to boil over', cn: '從聲音推出結論', k: 'sign', c: 4 }], vis: { type: 'cards', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: '還有第三格：如果另一個人也同意了，時間也談定了，形狀就再升一級。',
      hi: [{ t: '談定', k: 'arr', c: 2 }], vis: { type: 'cards', show: 3, pop: true } },
    { ch: 1, sp: 'A', en: 'We are tasting the samples at four with the buyer.', cn: '我們四點要跟採購一起試樣品。',
      hi: [{ t: 'are tasting', cn: '雙方談定時間', k: 'arr', c: 2 }], vis: { type: 'cards', show: 3, lit: 2 } },
    { ch: 1, sp: 'N', zh: '三格由左到右，確定的程度一路往上。', vis: { type: 'cards', show: 3 } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: '決定型的句子：主詞加 be 動詞加 going to，再接原形動詞，最後補上時間。',
      hi: [{ t: '決定', k: 'dec', c: 3 }],
      vis: { type: 'pattern', kick: '決定型 Decision', rows: [
        { lab: '我的決定', blocks: [{ t: 'I', k: 's' }, { t: 'am going to', k: 'v' }, { t: 'change the supplier', k: 'n' }, { t: 'next month', k: 'o' }] },
        { lab: '團隊的決定', blocks: [{ t: 'We', k: 's' }, { t: 'are going to', k: 'v' }, { t: 'print new labels', k: 'n' }, { t: 'this week', k: 'o' }] }
      ], note: '講得出時間，表示決定真的成立了' } },
    { ch: 2, sp: 'N', zh: '跡象型的句子有個固定節奏：先給證據，再下結論，兩句常常連在一起。',
      hi: [{ t: '證據', k: 'sign', c: 4 }],
      vis: { type: 'pattern', kick: '跡象型 Evidence', rows: [
        { lab: '先給證據', blocks: [{ t: 'The queue', k: 's' }, { t: 'is already', k: 'v' }, { t: 'round the corner', k: 'o' }] },
        { lab: '再下結論', blocks: [{ t: 'We', k: 's' }, { t: 'are going to', k: 'v' }, { t: 'miss the first show', k: 'o' }] }
      ] } },
    { ch: 2, sp: 'N', zh: '約定型就換成 be 動詞加動詞 ing，而且一定報出時間或對象。',
      hi: [{ t: '約定', k: 'arr', c: 2 }],
      vis: { type: 'pattern', kick: '約定型 Arrangement', rows: [
        { lab: '約好的', blocks: [{ t: 'She', k: 's' }, { t: 'is meeting', k: 'v' }, { t: 'the chef', k: 'n' }, { t: 'at six', k: 'o' }] }
      ], note: '對方也知道這件事，所以語氣最確定' } },
    { ch: 2, sp: 'N', zh: '句子裡出現這幾個字，幾乎都是在給證據。',
      vis: { type: 'family', kick: 'Evidence words 證據提示字', core: 'Evidence words', coreCn: '證據的提示字', art: 'dg20261021b1_cloud', items: [
        { t: 'look at · listen to', cn: '叫你看、叫你聽' }, { t: 'only · already', cn: '只剩、已經' }, { t: 'at this rate', cn: '照這個速度' }
      ] } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: '來聽 Clara 和 Sam 在辦公室討論星期五的午餐。', vis: { type: 'scene', art: 'dg20261021b1_lunchtable' } },
    { ch: 3, sp: 'A', en: 'I am going to feed the whole team on Friday.', cn: '我星期五要請整個團隊吃飯。',
      hi: [{ t: 'am going to feed', cn: '早就決定了', k: 'dec', c: 3 }], vis: { type: 'scene', art: 'dg20261021b1_springroll' } },
    { ch: 3, sp: 'T', en: 'When did you decide that?', cn: '你什麼時候決定的？', vis: { type: 'scene', art: 'dg20261021b1_notebook' } },
    { ch: 3, sp: 'A', en: 'On Monday. It is in my notebook already.', cn: '星期一。已經寫在我的筆記本上了。',
      hi: [{ t: 'already', cn: '決定早就成立', k: 'dec', c: 3 }], vis: { type: 'scene', art: 'dg20261021b1_marketstall' } },
    { ch: 3, sp: 'T', en: 'Then I am buying the herbs. I pass that stall daily.', cn: '那香菜我買，我每天都會經過那個攤子。',
      hi: [{ t: 'am buying', cn: '分工一談定就升級', k: 'arr', c: 2 }], vis: { type: 'scene', art: 'dg20261021b1_herbs' } },
    { ch: 3, sp: 'N', zh: '分工一談定，Sam 就從 going to 跳到現在進行式，因為兩個人都同意了。', vis: { type: 'scene', art: 'dg20261021b1_agreed' } },
    { ch: 3, sp: 'A', en: 'Great. I am also going to borrow the big pot.', cn: '太好了。我還要借那個大鍋子。',
      hi: [{ t: 'going to borrow', cn: '我自己的決定', k: 'dec', c: 3 }], vis: { type: 'scene', art: 'dg20261021b1_bigpot' } },
    { ch: 3, sp: 'T', en: 'For the sauce? Make a double batch.', cn: '裝醬嗎？做兩倍的量。', vis: { type: 'scene', art: 'dg20261021b1_sauce' } },
    { ch: 3, sp: 'A', en: 'Look, only four left on the tray already.', cn: '你看，盤子上已經只剩四個了。',
      hi: [{ t: 'only four left', cn: '這就是證據', k: 'sign', c: 4 }], vis: { type: 'scene', art: 'dg20261021b1_traycount' } },
    { ch: 3, sp: 'T', en: 'At this rate the tray is going to be empty by noon.', cn: '照這個速度，盤子中午前就會空了。',
      hi: [{ t: 'is going to be empty', cn: '從證據下結論', k: 'sign', c: 4 }], vis: { type: 'scene', art: 'dg20261021b1_emptytray' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '同一件事，有沒有證據，英文的語氣就不一樣。',
      vis: { type: 'vs', sm: true, kick: '有證據 vs 只是看法',
        a: { w: 'The pan is dry already. The garlic is going to burn.', def: '鍋子已經乾了，蒜頭要燒焦了。', cn: '有證據 → going to' },
        b: { w: 'I think the new sauce will sell well.', def: '我想新的醬會賣得不錯。', cn: '只是看法 → will' } } },
    { ch: 4, sp: 'A', en: 'The pan is dry already. The garlic is going to burn.', cn: '鍋子已經乾了，蒜頭要燒焦了。',
      hi: [{ t: 'is going to burn', cn: '眼前的跡象', k: 'sign', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '有證據 vs 只是看法',
        a: { w: 'The pan is dry already. The garlic is going to burn.', def: '鍋子已經乾了，蒜頭要燒焦了。', cn: '有證據 → going to' },
        b: { w: 'I think the new sauce will sell well.', def: '我想新的醬會賣得不錯。', cn: '只是看法 → will' } } },
    { ch: 4, sp: 'T', en: 'I think the new sauce will sell well.', cn: '我想新的醬會賣得不錯。',
      hi: [{ t: 'will sell', cn: '沒有證據的判斷', k: 'dec', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '有證據 vs 只是看法',
        a: { w: 'The pan is dry already. The garlic is going to burn.', def: '鍋子已經乾了，蒜頭要燒焦了。', cn: '有證據 → going to' },
        b: { w: 'I think the new sauce will sell well.', def: '我想新的醬會賣得不錯。', cn: '只是看法 → will' } } },
    { ch: 4, sp: 'N', zh: '再看一組。同一個決定，一旦對方也同意，形狀就要升級。',
      vis: { type: 'vs', sm: true, kick: '我決定 vs 我們約好',
        a: { w: 'I am going to call the caterer about Friday.', def: '我要為星期五的事打電話給外燴。', cn: '只有我知道 → going to' },
        b: { w: 'I am calling the caterer at ten tomorrow.', def: '我明天十點要打電話給外燴。', cn: '時間談定了 → be + V-ing' } } },
    { ch: 4, sp: 'A', en: 'I am going to call the caterer about Friday.', cn: '我要為星期五的事打電話給外燴。',
      hi: [{ t: 'am going to call', cn: '我的決定', k: 'dec', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '我決定 vs 我們約好',
        a: { w: 'I am going to call the caterer about Friday.', def: '我要為星期五的事打電話給外燴。', cn: '只有我知道 → going to' },
        b: { w: 'I am calling the caterer at ten tomorrow.', def: '我明天十點要打電話給外燴。', cn: '時間談定了 → be + V-ing' } } },
    { ch: 4, sp: 'T', en: 'I am calling the caterer at ten tomorrow.', cn: '我明天十點要打電話給外燴。',
      hi: [{ t: 'am calling', cn: '約定好了', k: 'arr', c: 2 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '我決定 vs 我們約好',
        a: { w: 'I am going to call the caterer about Friday.', def: '我要為星期五的事打電話給外燴。', cn: '只有我知道 → going to' },
        b: { w: 'I am calling the caterer at ten tomorrow.', def: '我明天十點要打電話給外燴。', cn: '時間談定了 → be + V-ing' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '寫句子前照順序問三個問題，時態就不用猜。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一問：這是你自己做好的決定嗎？是的話，用 going to。',
      hi: [{ t: '決定', k: 'dec', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'A', en: 'I am going to repack those cartons by hand.', cn: '我要用手把那些紙箱重新包一次。',
      hi: [{ t: 'am going to repack', cn: '我早上就決定了', k: 'dec', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二問：眼前有看得到的跡象嗎？也用 going to，而且先把證據說出來。',
      hi: [{ t: '跡象', k: 'sign', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'T', en: 'Only two cartons are left, so the line is going to stop.', cn: '只剩兩箱，所以產線要停了。',
      hi: [{ t: 'is going to stop', cn: '證據在前，結論在後', k: 'sign', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '第三問：雙方已經談定時間了嗎？那就升級成現在進行式。',
      hi: [{ t: '談定', k: 'arr', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'A', en: 'We are signing the new contract on Wednesday.', cn: '我們星期三要簽新合約。',
      hi: [{ t: 'are signing', cn: '時間雙方都知道', k: 'arr', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說說看。看到情境先自己說，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：你昨天開會決定，下個月要把包裝換成紙的。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '你昨天開會決定，下個月要把包裝換成紙的。' } },
    { ch: 6, sp: 'A', en: 'We are going to switch to paper packaging next month.', cn: '我們下個月要換成紙的包裝。',
      hi: [{ t: 'are going to switch', cn: '決定好了 → going to', k: 'dec', c: 3 }],
      vis: { type: 'speak', n: 1, show: true, sit: '你昨天開會決定，下個月要把包裝換成紙的。', a: 'We are going to switch to paper packaging next month.' } },
    { ch: 6, sp: 'N', zh: '情境二：你看到烤箱冒煙，判斷麵包要焦了。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '你看到烤箱冒煙，判斷麵包要焦了。' } },
    { ch: 6, sp: 'T', en: 'The oven is smoking. The bread is going to burn.', cn: '烤箱在冒煙，麵包要焦了。',
      hi: [{ t: 'is going to burn', cn: '有跡象 → going to', k: 'sign', c: 4 }],
      vis: { type: 'speak', n: 2, show: true, sit: '你看到烤箱冒煙，判斷麵包要焦了。', a: 'The oven is smoking. The bread is going to burn.' } },
    { ch: 6, sp: 'N', zh: '情境三：你跟供應商約好星期四早上九點看樣品。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '你跟供應商約好星期四早上九點看樣品。' } },
    { ch: 6, sp: 'A', en: 'I am seeing the samples at nine on Thursday.', cn: '我星期四九點要看樣品。',
      hi: [{ t: 'am seeing', cn: '約定好了 → be + V-ing', k: 'arr', c: 2 }],
      vis: { type: 'speak', n: 3, show: true, sit: '你跟供應商約好星期四早上九點看樣品。', a: 'I am seeing the samples at nine on Thursday.' } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結一下：我的決定和眼前的跡象都用 going to，雙方談定時間就升級成現在進行式，沒憑據的猜測才交給 will。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '下次開口之前，先問一句：我憑什麼這樣說？', vis: { type: 'end' } }
  ]
};
