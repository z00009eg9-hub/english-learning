/* ============================================================
   B2 Read 文法影片解說 — dg20260922a2（A2）
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
  /* 閃亮小星：spk(x,y,s) */
  var spk=function(x,y,s){ return '<path d="M'+x+' '+(y-s)+' Q'+x+' '+y+' '+(x+s)+' '+y+' Q'+x+' '+y+' '+x+' '+(y+s)+' Q'+x+' '+y+' '+(x-s)+' '+y+' Q'+x+' '+y+' '+x+' '+(y-s)+' Z" fill="'+Y+'" '+th(2)+'/>'; };
  /* 盤子：plate(cx,cy,rx) */
  var plate=function(cx,cy,rx){ return '<ellipse cx="'+cx+'" cy="'+cy+'" rx="'+rx+'" ry="'+(rx*0.36)+'" fill="#fff" '+st+'/><ellipse cx="'+cx+'" cy="'+(cy-1)+'" rx="'+(rx*0.62)+'" ry="'+(rx*0.2)+'" fill="'+C+'" '+th(2)+'/>'; };

  Object.assign(window.GVIDEO_ART, {
    /* 說出時間：月曆上圈起某一天＋往回的箭頭（過去式） */
    dg20260922a2_cal: svg(
      cal(30,34,104,94)
     +'<circle cx="68" cy="84" r="13" fill="none" stroke="'+R+'" stroke-width="4"/>'
     +'<path d="M184 70 H150 M160 58 L148 70 L160 82" fill="none" '+th(5)+'/>'),
    /* 做好了：亮晶晶的乾淨盤子＋打勾（現在完成式） */
    dg20260922a2_done: svg(
      plate(84,96,60)
     +spk(50,52,10)+spk(112,40,13)+spk(80,30,7)
     +chk(160,52,22)),
    /* 家事：掃把＋畚箕 */
    dg20260922a2_broom: svg(
      '<line x1="10" y1="136" x2="190" y2="136" '+st+'/>'
     +'<line x1="70" y1="14" x2="96" y2="94" stroke="#a5703c" stroke-width="7" stroke-linecap="round"/>'
     +'<line x1="70" y1="14" x2="96" y2="94" fill="none" '+th(1.5)+' opacity=".35"/>'
     +'<path d="M84 92 L110 86 L132 132 L84 136 Z" fill="'+Y+'" '+st+'/>'
     +'<path d="M96 100 L104 134 M108 96 L118 133" fill="none" '+th(2)+'/>'
     +'<path d="M138 112 H178 L186 136 H138 Z" fill="'+B+'" '+st+'/><line x1="178" y1="112" x2="186" y2="94" '+th(4)+'/>'
     +'<circle cx="150" cy="130" r="2.5" fill="'+D+'"/><circle cx="160" cy="128" r="2" fill="'+D+'"/>'),

    /* 情境 1：請朋友來吃飯——房子窗戶裡有冒煙的鍋 */
    dg20260922a2_home: svg(
      '<line x1="8" y1="136" x2="192" y2="136" '+st+'/>'
     +'<path d="M30 70 L100 18 L170 70" fill="'+R+'" '+st+'/>'
     +'<rect x="42" y="66" width="116" height="70" fill="'+C+'" '+st+'/>'
     +'<rect x="56" y="80" width="48" height="36" rx="3" fill="'+S+'" '+st+'/>'
     +'<path d="M68 104 h24 v6 a4 4 0 0 1 -4 4 h-16 a4 4 0 0 1 -4 -4 Z" fill="'+A+'" '+th(2.5)+'/>'
     +'<path d="M74 98 q-3 -5 0 -10 M86 98 q-3 -5 0 -10" fill="none" '+th(2)+'/>'
     +'<rect x="118" y="88" width="28" height="48" fill="'+L+'" '+st+'/><circle cx="140" cy="113" r="2.5" fill="'+D+'"/>'
     +'<rect x="132" y="24" width="14" height="26" fill="'+L+'" '+st+'/>'),
    /* 情境 2：浴室打掃好了嗎？——洗手台＋鏡子＋問號 */
    dg20260922a2_sink: svg(
      '<rect x="44" y="16" width="70" height="50" rx="24" fill="'+S+'" '+st+'/>'
     +'<path d="M60 30 l12 -6 M58 42 l22 -12" stroke="#fff" stroke-width="4" stroke-linecap="round"/>'
     +'<rect x="28" y="80" width="102" height="18" rx="6" fill="#fff" '+st+'/>'
     +'<path d="M40 98 H118 L110 134 H48 Z" fill="'+L+'" '+st+'/>'
     +'<path d="M72 80 V70 H90 V76" fill="none" '+th(4)+'/>'
     +qb(160,40)),
    /* 情境 3：現在很乾淨——浴缸滿是泡泡＋閃亮 */
    dg20260922a2_tub: svg(
      '<line x1="8" y1="138" x2="192" y2="138" '+st+'/>'
     +'<g fill="#fff" '+th(2.5)+'><circle cx="52" cy="72" r="13"/><circle cx="74" cy="64" r="15"/><circle cx="98" cy="70" r="12"/><circle cx="120" cy="62" r="14"/><circle cx="142" cy="72" r="12"/></g>'
     +'<path d="M24 78 H176 V96 a30 30 0 0 1 -30 30 H54 a30 30 0 0 1 -30 -30 Z" fill="'+S+'" '+st+'/>'
     +'<line x1="56" y1="126" x2="50" y2="138" '+th(4)+'/><line x1="144" y1="126" x2="150" y2="138" '+th(4)+'/>'
     +'<path d="M30 78 V36 a10 10 0 0 1 20 0" fill="none" '+th(4)+'/>'
     +spk(170,30,12)+spk(150,46,7)+spk(88,30,8)),
    /* 情境 4：只問現在好了沒——夾板清單，兩格打勾 */
    dg20260922a2_list: svg(
      '<rect x="46" y="20" width="108" height="122" rx="8" fill="#c98f52" '+st+'/>'
     +'<rect x="56" y="34" width="88" height="100" rx="2" fill="#fff" '+th(2.5)+'/>'
     +'<rect x="80" y="12" width="40" height="18" rx="5" fill="#c9c2b8" '+st+'/>'
     +'<rect x="64" y="46" width="16" height="16" rx="3" fill="#fff" '+th(2.5)+'/><path d="M66 54 l5 5 l9 -11" fill="none" stroke="'+G+'" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>'
     +'<rect x="64" y="74" width="16" height="16" rx="3" fill="#fff" '+th(2.5)+'/><path d="M66 82 l5 5 l9 -11" fill="none" stroke="'+G+'" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>'
     +'<rect x="64" y="102" width="16" height="16" rx="3" fill="#fff" '+th(2.5)+'/>'
     +'<g fill="'+L+'"><rect x="88" y="50" width="46" height="8" rx="3"/><rect x="88" y="78" width="40" height="8" rx="3"/><rect x="88" y="106" width="44" height="8" rx="3"/></g>'),
    /* 情境 5：那飲料呢？——兩瓶飲料＋易開罐＋問號 */
    dg20260922a2_drinks: svg(
      '<line x1="10" y1="136" x2="150" y2="136" '+st+'/>'
     +'<path d="M36 136 V70 q0 -10 8 -16 V36 h12 v18 q8 6 8 16 V136 Z" fill="'+G+'" '+st+'/><rect x="42" y="26" width="16" height="10" rx="2" fill="'+R+'" '+st+'/>'
     +'<rect x="38" y="86" width="24" height="24" fill="#fff" '+th(2)+'/>'
     +'<path d="M76 136 V60 q0 -10 8 -16 V30 h12 v14 q8 6 8 16 V136 Z" fill="'+A+'" '+st+'/><rect x="82" y="20" width="16" height="10" rx="2" fill="'+B+'" '+st+'/>'
     +'<rect x="78" y="80" width="24" height="26" fill="#fff" '+th(2)+'/>'
     +'<rect x="116" y="92" width="28" height="44" rx="5" fill="'+R+'" '+st+'/><line x1="118" y1="102" x2="142" y2="102" stroke="#fff" stroke-width="3"/>'
     +qb(170,46)),
    /* 情境 6：昨天買了，在冰箱——打開的冰箱裡有飲料 */
    dg20260922a2_fridge: svg(
      '<rect x="40" y="12" width="78" height="128" rx="8" fill="#fff" '+st+'/>'
     +'<line x1="40" y1="56" x2="118" y2="56" '+st+'/>'
     +'<line x1="48" y1="90" x2="110" y2="90" '+th(2.5)+'/><line x1="48" y1="118" x2="110" y2="118" '+th(2.5)+'/>'
     +'<rect x="54" y="68" width="12" height="22" rx="3" fill="'+G+'" '+th(2.5)+'/><rect x="72" y="64" width="12" height="26" rx="3" fill="'+A+'" '+th(2.5)+'/><rect x="90" y="74" width="12" height="16" rx="3" fill="'+R+'" '+th(2.5)+'/>'
     +'<rect x="56" y="100" width="22" height="18" rx="4" fill="'+Y+'" '+th(2.5)+'/>'
     +'<rect x="56" y="24" width="20" height="22" rx="3" fill="'+S+'" '+th(2.5)+'/>'
     +'<path d="M118 14 L170 28 V128 L118 140 Z" fill="'+S+'" '+st+'/>'
     +'<line x1="128" y1="60" x2="128" y2="84" '+th(4)+'/>'),
    /* 情境 7：說出 yesterday——購物袋＋收據 */
    dg20260922a2_bag: svg(
      '<path d="M40 54 H120 L128 138 H32 Z" fill="'+L+'" '+st+'/>'
     +'<path d="M60 54 V44 a20 20 0 0 1 40 0 V54" fill="none" '+th(4)+'/>'
     +'<rect x="50" y="34" width="12" height="28" rx="3" fill="'+G+'" '+th(2.5)+'/><rect x="94" y="30" width="14" height="30" rx="3" fill="'+A+'" '+th(2.5)+'/>'
     +'<path d="M140 30 H178 V128 l-6 -5 l-6 5 l-6 -5 l-7 5 l-6 -5 l-7 5 Z" fill="#fff" '+st+'/>'
     +'<g fill="'+L+'"><rect x="146" y="42" width="26" height="6" rx="2"/><rect x="146" y="56" width="20" height="6" rx="2"/><rect x="146" y="70" width="24" height="6" rx="2"/></g>'
     +'<line x1="146" y1="88" x2="172" y2="88" '+th(2)+'/>'
     +'<rect x="154" y="96" width="18" height="7" rx="2" fill="'+R+'"/>'),
    /* 情境 8：貓把起司吃掉了——貓臉＋被咬一口的起司 */
    dg20260922a2_cat: svg(
      '<path d="M30 70 L36 30 L60 52 Q78 46 96 52 L120 30 L126 70 Q130 116 78 118 Q26 116 30 70 Z" fill="'+A+'" '+st+'/>'
     +'<path d="M42 44 L44 58 M114 44 L112 58" fill="none" '+th(2)+'/>'
     +'<circle cx="62" cy="80" r="5" fill="'+D+'"/><circle cx="94" cy="80" r="5" fill="'+D+'"/>'
     +'<path d="M74 92 L82 92 L78 97 Z" fill="'+R+'" '+th(2)+'/>'
     +'<path d="M78 97 q-6 8 -12 4 M78 97 q6 8 12 4" fill="none" '+th(2.5)+'/>'
     +'<path d="M36 92 H14 M38 100 L16 106 M120 92 H142 M118 100 L140 106" fill="none" '+th(2)+'/>'
     +'<path d="M140 128 L188 128 L188 100 L140 118 Z" fill="'+Y+'" '+st+'/>'
     +'<path d="M140 118 a8 8 0 0 1 0 10" fill="#fff" '+th(2.5)+'/>'
     +'<circle cx="168" cy="118" r="3.5" fill="#e0a92e"/><circle cx="180" cy="110" r="2.5" fill="#e0a92e"/>'),
    /* 情境 9：已經另外弄好一盤——盤子上的起司塊和餅乾 */
    dg20260922a2_plate: svg(
      plate(96,104,70)
     +'<g fill="'+Y+'" '+th(2.5)+'><rect x="62" y="80" width="18" height="18" rx="2"/><rect x="88" y="74" width="18" height="18" rx="2"/><rect x="114" y="80" width="18" height="18" rx="2"/></g>'
     +'<g fill="#d9a35a" '+th(2.5)+'><circle cx="74" cy="104" r="9"/><circle cx="98" cy="102" r="9"/><circle cx="122" cy="104" r="9"/></g>'
     +chk(168,42,20)+spk(40,48,9)),
    /* 情境 10：現在起司沒了——空盤子、碎屑和貓腳印 */
    dg20260922a2_empty: svg(
      plate(84,92,62)
     +'<g fill="'+Y+'"><circle cx="70" cy="90" r="2.5"/><circle cx="92" cy="88" r="2"/><circle cx="102" cy="93" r="2.5"/><circle cx="80" cy="95" r="1.8"/></g>'
     +'<g fill="'+A+'" '+th(2)+'><ellipse cx="160" cy="58" rx="9" ry="8"/><circle cx="149" cy="45" r="4"/><circle cx="158" cy="40" r="4"/><circle cx="168" cy="41" r="4"/><circle cx="175" cy="49" r="4"/>'
     +'<ellipse cx="150" cy="122" rx="9" ry="8"/><circle cx="139" cy="109" r="4"/><circle cx="148" cy="104" r="4"/><circle cx="158" cy="105" r="4"/><circle cx="165" cy="113" r="4"/></g>')
  });
})();

/* ============================================================
   dg20260922a2 — I Have Done or I Did?
   Grammar in Use Unit 13（Present perfect and past simple 1）A2
   ============================================================ */
window.GVIDEO.dg20260922a2 = {
  kind: 'gram',
  date: '2026-09-22',
  title: 'I Have Done or I Did?',
  titleCn: '「做好了」還是「昨天做了」？先看有沒有說時間',
  titleArt: ['dg20260922a2_cal', 'dg20260922a2_done', 'dg20260922a2_broom'],
  scene: '家事分工 Home chores',
  sceneArt: 'dg20260922a2_home',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Rosa', voice: 'f' },
    T: { name: 'Kevin', voice: 'm' }
  },
  expr: {
    did:   { t: '動詞過去式 + 時間', cn: '說出什麼時候 → 過去式', ex: 'I cleaned my shoes on Monday.', exCn: '我星期一把鞋子刷乾淨了。', note: 'yesterday、last week、two days ago 一出現，就用過去式' },
    done:  { t: 'have / has + 過去分詞', cn: '做好了、做過了（沒說什麼時候）', ex: 'I have cleaned my shoes.', exCn: '我把鞋子刷乾淨了。', note: 'I / you / we / they 用 have，he / she / it 用 has' },
    never: { t: 'already / never / yet', cn: '完成式最常搭的三個字', ex: 'Have you met the new neighbor yet?', exCn: '你見過新鄰居了嗎？', note: 'already、never 放在 have 後面；yet 放在句子最後' }
  },
  chapters: [
    { cn: '開場' }, { cn: '先問：有說時間嗎？' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  /* 「現在」放右邊：兩件事都發生在現在左邊（過去） */
  timelineNow: 86,
  timeline: [
    { x: 28, art: 'dg20260922a2_cal',  lab: '過去式',     who: '說出時間' },
    { x: 58, art: 'dg20260922a2_done', lab: '現在完成式', who: '沒說時間' }
  ],
  flow: [
    { q: '句子裡有說出過去的時間嗎？', a: '過去式', en: '主詞 + 過去式 + 時間' },
    { q: '沒說時間，重點是現在的結果？', a: '完成式', en: '主詞 + have / has + 過去分詞' },
    { q: '主詞是 he、she、it 嗎？',     a: '用 has', en: 'he / she / it + has + 過去分詞' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: '昨天做了、已經做好了，中文都說「了」。英文卻有兩種形狀，這支影片幫你分清楚。', vis: { type: 'title' } },

    /* ---- 1 核心：有說時間嗎？ ---- */
    { ch: 1, sp: 'N', zh: '想說一件做過的事，先問自己一句：我有沒有說出是什麼時候？', vis: { type: 'timeline', show: 0, kick: 'Time word? 有沒有說出時間？' } },
    { ch: 1, sp: 'N', zh: '有說出時間，像昨天、上星期、三天前，就用過去式。',
      hi: [{ t: '過去式', k: 'did', c: 3 }], vis: { type: 'timeline', show: 1, pop: true, kick: 'Time word? 有沒有說出時間？' } },
    { ch: 1, sp: 'A', en: 'I watered the plants yesterday.', cn: '我昨天幫植物澆了水。',
      hi: [{ t: 'watered', cn: '昨天澆的', k: 'did', c: 3 }], vis: { type: 'timeline', show: 1, lit: 0, kick: 'Time word? 有沒有說出時間？' } },
    { ch: 1, sp: 'N', zh: '沒說時間，只想講「做好了」，重點是現在的結果，就用 have 加過去分詞。',
      hi: [{ t: 'have 加過去分詞', k: 'done', c: 4 }], vis: { type: 'timeline', show: 2, pop: true, kick: 'Time word? 有沒有說出時間？' } },
    { ch: 1, sp: 'T', en: 'I have watered the plants.', cn: '我已經幫植物澆好水了。',
      hi: [{ t: 'have watered', cn: '現在澆好了', k: 'done', c: 4 }], vis: { type: 'timeline', show: 2, lit: 1, kick: 'Time word? 有沒有說出時間？' } },
    { ch: 1, sp: 'N', zh: '這句的意思是：水澆好了，現在不用再澆。做完的結果，一直留到現在。',
      vis: { type: 'timeline', show: 2, dec: true, decText: '結果留到現在', kick: 'Time word? 有沒有說出時間？' } },
    { ch: 1, sp: 'N', zh: '像你走進客廳，發現燈又亮了。重點是現在燈好了，不用管是哪天修的。',
      vis: { type: 'timeline', show: 2, lit: 1, kick: 'Time word? 有沒有說出時間？' } },
    { ch: 1, sp: 'A', en: 'Look! Dad has fixed the light.', cn: '你看！爸爸把燈修好了。',
      hi: [{ t: 'has fixed', cn: '現在燈好了', k: 'done', c: 4 }], vis: { type: 'timeline', show: 2, lit: 1, kick: 'Time word? 有沒有說出時間？' } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: '完成式的句型：主詞加 have，再加過去分詞。主詞是 he、she、it，就換成 has。',
      hi: [{ t: 'has', k: 'done', c: 4 }],
      vis: { type: 'pattern', kick: 'Present perfect 現在完成式', rows: [
        { lab: 'I · we · they', blocks: [{ t: 'They', k: 's' }, { t: 'have cleaned', k: 'v' }, { t: 'the car', k: 'n' }] },
        { lab: 'he · she · it', blocks: [{ t: 'He', k: 's' }, { t: 'has cleaned', k: 'v' }, { t: 'the car', k: 'n' }] }
      ], note: '後面的過去分詞不跟著主詞變：都是 cleaned' } },
    { ch: 2, sp: 'N', zh: '過去式的句型更簡單：動詞換成過去式，後面放一個已經過去的時間。',
      hi: [{ t: '過去式', k: 'did', c: 3 }],
      vis: { type: 'pattern', kick: 'Past simple 過去式', rows: [
        { lab: '昨天',   blocks: [{ t: 'I', k: 's' }, { t: 'cleaned', k: 'v' }, { t: 'the car', k: 'n' }, { t: 'yesterday', k: 'o' }] },
        { lab: '兩天前', blocks: [{ t: 'She', k: 's' }, { t: 'cleaned', k: 'v' }, { t: 'the car', k: 'n' }, { t: 'two days ago', k: 'o' }] }
      ] } },
    { ch: 2, sp: 'N', zh: '有些動詞的過去分詞長得不一樣，要三個一起背，例如 eat、ate、eaten。',
      vis: { type: 'family', kick: 'Three forms 動詞三態', core: 'Verb forms', coreCn: '原形・過去式・過去分詞', art: 'dg20260922a2_done', items: [
        { t: 'eat · ate · eaten', cn: '吃' }, { t: 'see · saw · seen', cn: '看見' },
        { t: 'go · went · gone', cn: '去' }, { t: 'buy · bought · bought', cn: '買' }
      ] } },
    { ch: 2, sp: 'N', zh: '完成式最常搭三個字：already 和 never 放在 have 後面，yet 放在句子最後。',
      hi: [{ t: 'already', k: 'never', c: 1 }, { t: 'never', k: 'never', c: 1 }, { t: 'yet', k: 'never', c: 1 }],
      vis: { type: 'pattern', kick: 'already · never · yet', rows: [
        { lab: '已經',     blocks: [{ t: 'I', k: 's' }, { t: 'have', k: 'v' }, { t: 'already', k: 'n', add: true }, { t: 'eaten', k: 'v' }] },
        { lab: '從來沒有', blocks: [{ t: 'We', k: 's' }, { t: 'have', k: 'v' }, { t: 'never', k: 'n', add: true }, { t: 'seen a bear', k: 'v' }] },
        { lab: '了沒',     blocks: [{ t: 'Have', k: 'v' }, { t: 'you', k: 's' }, { t: 'eaten', k: 'v' }, { t: 'yet?', k: 'n', add: true }] }
      ] } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: '室友 Rosa 和 Kevin 今晚要請朋友來家裡吃飯。注意聽，哪一句有說出時間。', vis: { type: 'scene', art: 'dg20260922a2_home' } },
    { ch: 3, sp: 'A', en: 'Kevin, have you cleaned the bathroom?', cn: 'Kevin，你把浴室打掃好了嗎？',
      hi: [{ t: 'have you cleaned', cn: '現在好了沒', k: 'done', c: 4 }], vis: { type: 'scene', art: 'dg20260922a2_sink' } },
    { ch: 3, sp: 'T', en: 'Yes, I have. It looks great now.', cn: '好了，現在看起來很乾淨。',
      hi: [{ t: 'I have', cn: '用 have 回答', k: 'done', c: 4 }], vis: { type: 'scene', art: 'dg20260922a2_tub' } },
    { ch: 3, sp: 'N', zh: 'Rosa 只想知道浴室現在好了沒，沒問是什麼時候掃的，所以用 have you cleaned。',
      hi: [{ t: 'have you cleaned', k: 'done', c: 4 }], vis: { type: 'scene', art: 'dg20260922a2_list' } },
    { ch: 3, sp: 'A', en: 'Great. What about the drinks?', cn: '太好了。那飲料呢？', vis: { type: 'scene', art: 'dg20260922a2_drinks' } },
    { ch: 3, sp: 'T', en: "I bought them yesterday. They're in the fridge.", cn: '我昨天買了，放在冰箱裡。',
      hi: [{ t: 'bought', cn: '昨天買的', k: 'did', c: 3 }], vis: { type: 'scene', art: 'dg20260922a2_fridge' } },
    { ch: 3, sp: 'N', zh: 'Kevin 說出了 yesterday，時間已經過去了，所以用過去式 bought。',
      hi: [{ t: 'bought', k: 'did', c: 3 }], vis: { type: 'scene', art: 'dg20260922a2_bag' } },
    { ch: 3, sp: 'A', en: 'Oh no! The cat has eaten the cheese!', cn: '糟了！貓把起司吃掉了！',
      hi: [{ t: 'has eaten', cn: '現在起司沒了', k: 'done', c: 4 }], vis: { type: 'scene', art: 'dg20260922a2_cat' } },
    { ch: 3, sp: 'T', en: "Don't worry. I have already made a new plate.", cn: '別擔心，我已經另外弄好一盤了。',
      hi: [{ t: 'have already made', cn: '已經弄好了', k: 'never', c: 1 }], vis: { type: 'scene', art: 'dg20260922a2_plate' } },
    { ch: 3, sp: 'N', zh: '貓吃掉起司，重點是現在起司沒了。already 放在 have 後面，強調新的一盤已經弄好了。',
      hi: [{ t: 'already', k: 'never', c: 1 }], vis: { type: 'scene', art: 'dg20260922a2_empty' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '同一件事，加不加時間，形狀就不一樣。',
      vis: { type: 'vs', sm: true, kick: '沒說時間 vs 說出時間',
        a: { w: 'I have washed my hair.', def: '我洗好頭了。', cn: '沒說時間 → have + 過去分詞' },
        b: { w: 'I washed my hair last night.', def: '我昨晚洗了頭。', cn: '說出時間 → 過去式' } } },
    { ch: 4, sp: 'A', en: 'I have washed my hair.', cn: '我洗好頭了。',
      hi: [{ t: 'have washed', cn: '現在頭髮是乾淨的', k: 'done', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '沒說時間 vs 說出時間',
        a: { w: 'I have washed my hair.', def: '我洗好頭了。', cn: '沒說時間 → have + 過去分詞' },
        b: { w: 'I washed my hair last night.', def: '我昨晚洗了頭。', cn: '說出時間 → 過去式' } } },
    { ch: 4, sp: 'T', en: 'I washed my hair last night.', cn: '我昨晚洗了頭。',
      hi: [{ t: 'washed', cn: '昨晚', k: 'did', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '沒說時間 vs 說出時間',
        a: { w: 'I have washed my hair.', def: '我洗好頭了。', cn: '沒說時間 → have + 過去分詞' },
        b: { w: 'I washed my hair last night.', def: '我昨晚洗了頭。', cn: '說出時間 → 過去式' } } },
    { ch: 4, sp: 'N', zh: '第一句的重點是現在頭髮是乾淨的；第二句說出了昨晚，就換成過去式。',
      vis: { type: 'vs', sm: true, kick: '沒說時間 vs 說出時間',
        a: { w: 'I have washed my hair.', def: '我洗好頭了。', cn: '沒說時間 → have + 過去分詞' },
        b: { w: 'I washed my hair last night.', def: '我昨晚洗了頭。', cn: '說出時間 → 過去式' } } },
    { ch: 4, sp: 'N', zh: '再看一組。主詞是爺爺，所以用 has；一說出兩個星期前，還是要換回過去式。',
      hi: [{ t: 'has', k: 'done', c: 4 }],
      vis: { type: 'vs', sm: true, kick: 'has 和過去式',
        a: { w: 'Grandpa has bought a new phone.', def: '爺爺買了新手機。', cn: 'he / she → has' },
        b: { w: 'Grandpa bought a new phone two weeks ago.', def: '爺爺兩個星期前買了新手機。', cn: 'two weeks ago → 過去式' } } },
    { ch: 4, sp: 'A', en: 'Grandpa has bought a new phone.', cn: '爺爺買了新手機。',
      hi: [{ t: 'has bought', cn: '現在有新手機', k: 'done', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: 'has 和過去式',
        a: { w: 'Grandpa has bought a new phone.', def: '爺爺買了新手機。', cn: 'he / she → has' },
        b: { w: 'Grandpa bought a new phone two weeks ago.', def: '爺爺兩個星期前買了新手機。', cn: 'two weeks ago → 過去式' } } },
    { ch: 4, sp: 'T', en: 'Grandpa bought a new phone two weeks ago.', cn: '爺爺兩個星期前買了新手機。',
      hi: [{ t: 'bought', cn: '兩週前', k: 'did', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: 'has 和過去式',
        a: { w: 'Grandpa has bought a new phone.', def: '爺爺買了新手機。', cn: 'he / she → has' },
        b: { w: 'Grandpa bought a new phone two weeks ago.', def: '爺爺兩個星期前買了新手機。', cn: 'two weeks ago → 過去式' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '最後給你一個判斷流程。想說做過的事，照順序問自己三個問題。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一問：句子裡有說出過去的時間嗎？有的話，用過去式。',
      hi: [{ t: '過去式', k: 'did', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'A', en: 'We moved to this town in 2022.', cn: '我們2022年搬到這個小鎮。',
      hi: [{ t: 'moved', cn: '2022 年', k: 'did', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二問：沒說時間，重點是現在的結果嗎？是的話，用完成式。',
      hi: [{ t: '完成式', k: 'done', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'T', en: 'I have lost my umbrella.', cn: '我把雨傘弄丟了。',
      hi: [{ t: 'have lost', cn: '現在沒傘', k: 'done', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '第三問：主詞是 he、she、it 嗎？是的話，have 要換成 has。',
      hi: [{ t: 'has', k: 'done', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'A', en: 'My sister has started a new job.', cn: '我姊姊開始一份新工作了。',
      hi: [{ t: 'has started', cn: 'she → has', k: 'done', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說說看。看到中文情境，先自己用英文說出來，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：你想告訴媽媽，你已經把功課寫完了。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '你想告訴媽媽，你已經把功課寫完了。' } },
    { ch: 6, sp: 'T', en: 'I have finished my homework.', cn: '我把功課寫完了。',
      hi: [{ t: 'have finished', cn: '沒說時間 → 完成式', k: 'done', c: 4 }],
      vis: { type: 'speak', n: 1, show: true, sit: '你想告訴媽媽，你已經把功課寫完了。', a: 'I have finished my homework.' } },
    { ch: 6, sp: 'N', zh: '情境二：你上個星期六去看了一場電影。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '你上個星期六去看了一場電影。' } },
    { ch: 6, sp: 'A', en: 'I saw a movie last Saturday.', cn: '我上星期六看了一場電影。',
      hi: [{ t: 'saw', cn: '說出時間 → 過去式', k: 'did', c: 3 }],
      vis: { type: 'speak', n: 2, show: true, sit: '你上個星期六去看了一場電影。', a: 'I saw a movie last Saturday.' } },
    { ch: 6, sp: 'N', zh: '情境三：你的弟弟從來沒去過動物園。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '你的弟弟從來沒去過動物園。' } },
    { ch: 6, sp: 'T', en: 'My little brother has never been to the zoo.', cn: '我弟弟從來沒去過動物園。',
      hi: [{ t: 'has never been', cn: '從來沒有 → has never', k: 'never', c: 1 }],
      vis: { type: 'speak', n: 3, show: true, sit: '你的弟弟從來沒去過動物園。', a: 'My little brother has never been to the zoo.' } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結一下：說出過去的時間，用過去式；沒說時間、重點在現在，用 have 或 has 加過去分詞。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '下次想說「了」之前，先問一句：我有說出時間嗎？', vis: { type: 'end' } }
  ]
};
