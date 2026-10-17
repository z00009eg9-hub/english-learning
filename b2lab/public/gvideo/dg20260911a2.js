/* ============================================================
   B2 Read 文法影片解說 — dg20260911a2（Grammar in Use Unit 10，A2）
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
  var face=function(cx,cy,r,col){ return '<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="'+(col||L)+'" '+st+'/><circle cx="'+(cx-r*0.35)+'" cy="'+(cy-r*0.1)+'" r="2.4" fill="'+D+'"/><circle cx="'+(cx+r*0.35)+'" cy="'+(cy-r*0.1)+'" r="2.4" fill="'+D+'"/><path d="M'+(cx-r*0.35)+' '+(cy+r*0.3)+' q'+(r*0.35)+' '+(r*0.3)+' '+(r*0.7)+' 0" fill="none" '+th(2.5)+'/>'; };
  var clk=function(cx,cy,r){ return '<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="#fff" '+st+'/><path d="M'+cx+' '+cy+' V'+(cy-r*0.62)+' M'+cx+' '+cy+' L'+(cx+r*0.45)+' '+(cy+r*0.25)+'" fill="none" '+th(3)+'/>'; };
  /* 氣球：中心 (cx,cy)，線往下到 ty */
  var bal=function(cx,cy,col,ty){ return '<path d="M'+cx+' '+(cy+17)+' Q'+(cx-5)+' '+((cy+17+ty)/2)+' '+cx+' '+ty+'" fill="none" '+th(2)+'/>'
      +'<ellipse cx="'+cx+'" cy="'+cy+'" rx="13" ry="16" fill="'+col+'" '+st+'/><path d="M'+(cx-3)+' '+(cy+19)+' h6 l-3 -4 Z" fill="'+col+'" '+th(2)+'/>'
      +'<path d="M'+(cx-6)+' '+(cy-7)+' q3 -5 7 -5" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"/>'; };
  /* 蛋糕：底部中心 (cx,by)，寬 w */
  var cake=function(cx,by,w){ var x=cx-w/2;
    return '<rect x="'+x+'" y="'+(by-44)+'" width="'+w+'" height="44" rx="5" fill="'+L+'" '+st+'/>'
      +'<path d="M'+x+' '+(by-30)+' q'+(w/8)+' 10 '+(w/4)+' 0 q'+(w/8)+' 10 '+(w/4)+' 0 q'+(w/8)+' 10 '+(w/4)+' 0 q'+(w/8)+' 10 '+(w/4)+' 0 V'+(by-39)+' a5 5 0 0 0 -5 -5 H'+(x+5)+' a5 5 0 0 0 -5 5 Z" fill="#f4a6b8" '+st+'/>'
      +'<rect x="'+(cx-3)+'" y="'+(by-62)+'" width="6" height="18" fill="'+S+'" '+th(2)+'/><path d="M'+cx+' '+(by-74)+' q6 6 0 11 q-6 -5 0 -11 Z" fill="'+Y+'" '+th(2)+'/>'; };
  /* 拼圖片：4 格 2x2，n＝已放好的片數 */
  var puz=function(x,y,s,n){ var cols=[B,G,Y,R], g='';
    for(var i=0;i<4;i++){ var px=x+(i%2)*s, py=y+Math.floor(i/2)*s;
      g+= i<n ? '<rect x="'+px+'" y="'+py+'" width="'+s+'" height="'+s+'" fill="'+cols[i]+'" '+st+'/>' : '<rect x="'+px+'" y="'+py+'" width="'+s+'" height="'+s+'" fill="#fff" stroke="'+D+'" stroke-width="2" stroke-dasharray="5 5"/>'; }
    return g; };

  Object.assign(window.GVIDEO_ART, {
    /* 核心 1：拼好的拼圖＋打勾（have done：做完了、看結果） */
    dg20260911a2_done: svg(
      puz(46,26,46,4)
     +chk(156,112,22)),
    /* 核心 2：拼到一半＋手上還拿著一片（have been doing：一直在做） */
    dg20260911a2_doing: svg(
      puz(30,26,46,3)
     +'<g transform="rotate(-15 160 70)"><rect x="140" y="50" width="40" height="40" fill="'+R+'" '+st+'/></g>'
     +'<path d="M150 112 A26 26 0 1 0 128 84" fill="none" stroke="'+A+'" stroke-width="5" stroke-linecap="round"/><path d="M126 80 l-4 14 l12 -6 Z" fill="'+A+'" '+th(2.5)+'/>'),
    /* 核心 3：三本書＋數字徽章（有數量 → have done） */
    dg20260911a2_count: svg(
      '<line x1="14" y1="134" x2="160" y2="134" '+st+'/>'
     +'<rect x="30" y="108" width="110" height="26" rx="3" fill="'+B+'" '+st+'/><rect x="40" y="82" width="96" height="26" rx="3" fill="'+G+'" '+st+'/><rect x="34" y="56" width="104" height="26" rx="3" fill="'+R+'" '+st+'/>'
     +'<path d="M46 108 v26 M56 82 v26 M50 56 v26" '+th(2.5)+'/>'
     +'<circle cx="164" cy="44" r="24" fill="'+Y+'" '+st+'/>'+txt(164,54,'3',28)),

    /* 情境 1：媽媽的生日派對——蛋糕＋氣球 */
    dg20260911a2_party: svg(
      '<rect x="40" y="118" width="120" height="10" rx="3" fill="#b07a45" '+st+'/>'
     +cake(100,118,80)
     +bal(28,44,R,118)+bal(172,40,B,118)+bal(150,60,Y,118)
     +'<path d="M20 14 L40 24 L60 14 L80 24 L100 14 L120 24 L140 14 L160 24 L180 14" fill="none" '+th(2.5)+'/>'
     +'<g '+th(2)+'><path d="M40 24 l-6 10 h12 Z" fill="'+G+'"/><path d="M80 24 l-6 10 h12 Z" fill="'+A+'"/><path d="M120 24 l-6 10 h12 Z" fill="'+G+'"/><path d="M160 24 l-6 10 h12 Z" fill="'+A+'"/></g>'),
    /* 情境 2：你臉好紅，剛剛在做什麼？——紅臉＋問號 */
    dg20260911a2_redq: svg(
      '<circle cx="86" cy="80" r="48" fill="'+L+'" '+st+'/>'
     +'<circle cx="68" cy="72" r="4" fill="'+D+'"/><circle cx="104" cy="72" r="4" fill="'+D+'"/>'
     +'<ellipse cx="58" cy="92" rx="12" ry="8" fill="'+R+'" opacity=".55"/><ellipse cx="114" cy="92" rx="12" ry="8" fill="'+R+'" opacity=".55"/>'
     +'<ellipse cx="86" cy="104" rx="8" ry="6" fill="#fff" '+th(2.5)+'/>'
     +'<path d="M128 44 q6 10 0 14 q-6 -4 0 -14 Z" fill="'+S+'" '+th(2)+'/>'
     +qb(166,36)),
    /* 情境 3：吹了二十分鐘氣球——打氣筒＋碼錶 */
    dg20260911a2_pump: svg(
      '<line x1="10" y1="136" x2="190" y2="136" '+st+'/>'
     +'<rect x="34" y="62" width="26" height="70" rx="4" fill="'+B+'" '+st+'/><rect x="24" y="128" width="46" height="8" rx="2" fill="'+D+'"/>'
     +'<line x1="47" y1="62" x2="47" y2="34" '+th(4)+'/><rect x="30" y="26" width="34" height="10" rx="4" fill="'+Y+'" '+st+'/>'
     +'<path d="M60 116 C84 116 84 92 98 86" fill="none" '+th(3)+'/>'
     +bal(110,66,R,86)
     +clk(160,84,26)+'<rect x="155" y="50" width="10" height="8" fill="'+D+'"/>'
     +'<rect x="140" y="116" width="40" height="18" rx="5" fill="'+A+'" '+th(2.5)+'/>'+txt(160,130,'20',13,'#fff')),
    /* 情境 4：臉紅是一直吹留下的痕跡——鼓起臉頰吹氣球 */
    dg20260911a2_puff: svg(
      '<circle cx="66" cy="78" r="40" fill="'+L+'" '+st+'/>'
     +'<path d="M50 66 q6 -5 12 0 M76 66 q6 -5 12 0" fill="none" '+th(3)+'/>'
     +'<ellipse cx="48" cy="88" rx="14" ry="11" fill="'+R+'" opacity=".55"/><ellipse cx="88" cy="88" rx="14" ry="11" fill="'+R+'" opacity=".55"/>'
     +'<circle cx="104" cy="88" r="5" fill="'+L+'" '+th(2.5)+'/>'
     +'<ellipse cx="146" cy="82" rx="36" ry="42" fill="'+B+'" '+st+'/><path d="M108 86 h4" '+th(3)+'/>'
     +'<path d="M132 56 q8 -10 18 -10" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round"/>'),
    /* 情境 5：吹了幾顆？——一串氣球＋問號 */
    dg20260911a2_manyq: svg(
      bal(56,44,R,136)+bal(84,36,Y,136)+bal(112,48,G,136)+bal(70,72,B,136)+bal(100,78,A,136)
     +qb(168,40)),
    /* 情境 6：十五顆，沙發上到處都是——沙發＋氣球 */
    dg20260911a2_sofa: svg(
      '<line x1="8" y1="138" x2="192" y2="138" '+st+'/>'
     +'<rect x="30" y="58" width="140" height="50" rx="12" fill="'+G+'" '+st+'/>'
     +'<rect x="20" y="88" width="160" height="34" rx="8" fill="#5fb07e" '+st+'/>'
     +'<rect x="12" y="76" width="22" height="50" rx="8" fill="'+G+'" '+st+'/><rect x="166" y="76" width="22" height="50" rx="8" fill="'+G+'" '+st+'/>'
     +'<line x1="34" y1="126" x2="30" y2="138" '+th(4)+'/><line x1="166" y1="126" x2="170" y2="138" '+th(4)+'/>'
     +'<g '+st+'><ellipse cx="56" cy="76" rx="12" ry="14" fill="'+R+'"/><ellipse cx="84" cy="72" rx="12" ry="14" fill="'+Y+'"/><ellipse cx="112" cy="78" rx="12" ry="14" fill="'+B+'"/><ellipse cx="140" cy="72" rx="12" ry="14" fill="'+A+'"/>'
     +'<ellipse cx="70" cy="44" rx="12" ry="14" fill="'+B+'"/><ellipse cx="98" cy="46" rx="12" ry="14" fill="'+R+'"/><ellipse cx="126" cy="44" rx="12" ry="14" fill="'+Y+'"/></g>'),
    /* 情境 7：講數量就是講結果——計數板 15 */
    dg20260911a2_tally: svg(
      '<rect x="24" y="22" width="124" height="106" rx="10" fill="#fff" '+st+'/>'
     +'<g '+th(4)+'><path d="M40 44 v28 M50 44 v28 M60 44 v28 M70 44 v28 M36 66 L76 48"/><path d="M90 44 v28 M100 44 v28 M110 44 v28 M120 44 v28 M86 66 L126 48"/><path d="M40 86 v28 M50 86 v28 M60 86 v28 M70 86 v28 M36 108 L76 90"/></g>'
     +'<circle cx="160" cy="104" r="26" fill="'+Y+'" '+st+'/>'+txt(160,114,'15',24)),
    /* 情境 8：蛋糕做好了嗎？——蛋糕＋問號 */
    dg20260911a2_cakeq: svg(
      '<ellipse cx="88" cy="128" rx="64" ry="10" fill="#fff" '+st+'/>'
     +cake(88,124,96)
     +qb(168,40)),
    /* 情境 9：做好了，正在放涼——蛋糕放在烤架上冒熱氣 */
    dg20260911a2_cool: svg(
      '<rect x="22" y="112" width="156" height="8" rx="3" fill="#c9c2b8" '+st+'/><path d="M36 120 v14 M164 120 v14" '+th(4)+'/>'
     +'<path d="M50 112 H150 V82 a18 18 0 0 0 -18 -18 H68 a18 18 0 0 0 -18 18 Z" fill="#c98a4b" '+st+'/>'
     +'<path d="M62 80 q10 -6 20 0 M98 76 q10 -6 20 0" fill="none" stroke="#a86a30" stroke-width="3" stroke-linecap="round"/>'
     +'<path d="M76 54 q-8 -10 0 -20 q8 -10 0 -20 M100 54 q-8 -10 0 -20 q8 -10 0 -20 M124 54 q-8 -10 0 -20 q8 -10 0 -20" fill="none" stroke="#aab" stroke-width="4" stroke-linecap="round"/>'),
    /* 情境 10：做好了、有結果——一塊蛋糕＋打勾 */
    dg20260911a2_slice: svg(
      '<ellipse cx="80" cy="118" rx="62" ry="14" fill="#fff" '+st+'/>'
     +'<path d="M40 110 L120 110 L120 72 L40 92 Z" fill="'+L+'" '+st+'/>'
     +'<path d="M40 92 L120 72 L120 64 L40 84 Z" fill="#f4a6b8" '+st+'/>'
     +'<path d="M40 101 L120 91" stroke="#f4a6b8" stroke-width="5"/>'
     +'<circle cx="108" cy="62" r="7" fill="'+R+'" '+st+'/>'
     +chk(158,56,24))
  });
})();

/* ============================================================
   dg20260911a2 — Done or Still Doing?
   Grammar in Use Unit 10（Present perfect continuous and simple）A2：have done／have been doing
   ============================================================ */
window.GVIDEO.dg20260911a2 = {
  kind: 'gram',
  date: '2026-09-11',
  title: 'Done or Still Doing?',
  titleCn: 'have done 還是 have been doing？做完了 vs 一直在做',
  titleArt: ['dg20260911a2_done', 'dg20260911a2_doing', 'dg20260911a2_count'],
  scene: '生日派對 Birthday party prep',
  sceneArt: 'dg20260911a2_party',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Jade', voice: 'f' },
    T: { name: 'Kevin', voice: 'm' }
  },
  expr: {
    done:  { t: 'have + 過去分詞', cn: '做完了、有結果 → have done', ex: "I've fixed the light in the bathroom.", exCn: '我把浴室的燈修好了。', note: '重點是現在的結果：燈現在會亮了' },
    doing: { t: 'have been + V-ing', cn: '一直在做、看過程 → have been doing', ex: "We've been walking around the night market for two hours.", exCn: '我們在夜市逛了兩個小時。', note: '常配 all day、for an hour、since；可能還沒做完' },
    count: { t: '幾個、幾次 → have done', cn: '有數量就是講結果', ex: 'She has made ten cards for the party.', exCn: '她已經為派對做了十張卡片。', note: 'How many…? 用 have done；How long…? 用 have been doing' }
  },
  chapters: [
    { cn: '開場' }, { cn: '結果還是過程？' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  cardsKick: 'Result or process? 結果還是過程？',
  cards: [
    { art: 'dg20260911a2_done',  lab: '做完了',   who: 'have + 過去分詞' },
    { art: 'dg20260911a2_doing', lab: '一直在做', who: 'have been + V-ing' },
    { art: 'dg20260911a2_count', lab: '幾個幾次', who: '有數量 → 做完的' }
  ],
  flow: [
    { q: '想強調一直在做、做了多久？',   a: '過程',    en: 'have been + V-ing' },
    { q: '事情做完了，或有幾個、幾次？', a: '結果',    en: 'have + 過去分詞' },
    { q: '動詞是 know、like 這種狀態？', a: '不加ing', en: 'have + 過去分詞' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: '現在完成式有兩種形狀：have done 和 have been doing。差別在哪？這支影片教你一秒分辨。', vis: { type: 'title' } },

    /* ---- 1 核心：結果還是過程？ ---- */
    { ch: 1, sp: 'N', zh: '開口之前先問自己：我要講的是結果，還是過程？', vis: { type: 'cards', show: 0 } },
    { ch: 1, sp: 'N', zh: '想讓人知道事情做完了、有結果，就用 have 加過去分詞。',
      hi: [{ t: 'have 加過去分詞', k: 'done', c: 3 }], vis: { type: 'cards', show: 1, pop: true } },
    { ch: 1, sp: 'A', en: "I've finished my homework. Can I go out now?", cn: '我功課寫完了，現在可以出去嗎？',
      hi: [{ t: "I've finished", cn: '做完了', k: 'done', c: 3 }], vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'N', zh: '想強調一直在做，就用 have been 加 V-ing。可能做完了，也可能還沒。',
      hi: [{ t: 'have been 加 V-ing', k: 'doing', c: 4 }], vis: { type: 'cards', show: 2, pop: true } },
    { ch: 1, sp: 'T', en: "I've been playing video games all afternoon.", cn: '我整個下午都在打電動。',
      hi: [{ t: "I've been playing", cn: '一直在做', k: 'doing', c: 4 }], vis: { type: 'cards', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: '句子裡說做了幾個、幾次，就是在講結果，用 have 加過去分詞。',
      hi: [{ t: '幾個、幾次', k: 'count', c: 2 }], vis: { type: 'cards', show: 3, pop: true } },
    { ch: 1, sp: 'A', en: "I've read three books this month.", cn: '我這個月看了三本書。',
      hi: [{ t: "I've read three books", cn: '有數量', k: 'count', c: 2 }], vis: { type: 'cards', show: 3, lit: 2 } },
    { ch: 1, sp: 'N', zh: '簡單說：做完了、有幾個，用 have done；一直在做，用 have been doing。',
      vis: { type: 'cards', show: 3 } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: '結果的句型：主詞加 have，再加過去分詞。主詞是他或她，要用 has。',
      hi: [{ t: '過去分詞', k: 'done', c: 3 }],
      vis: { type: 'pattern', kick: '結果 Result', rows: [
        { lab: '做完了', blocks: [{ t: 'I', k: 's' }, { t: 'have fed', k: 'v' }, { t: 'the fish', k: 'o' }] },
        { lab: '有數量', blocks: [{ t: 'Tim', k: 's' }, { t: 'has sent', k: 'v' }, { t: 'five messages', k: 'o' }] }
      ], note: '他、她、它 → has' } },
    { ch: 2, sp: 'N', zh: '過程的句型：主詞加 have been，再加 V-ing，後面常放一段時間。',
      hi: [{ t: 'have been', k: 'doing', c: 4 }],
      vis: { type: 'pattern', kick: '過程 Process', rows: [
        { lab: '一直在做', blocks: [{ t: 'I', k: 's' }, { t: 'have been sweeping', k: 'v' }, { t: 'the yard', k: 'n' }, { t: 'all morning', k: 'o' }] },
        { lab: '做多久', blocks: [{ t: 'Tim', k: 's' }, { t: 'has been texting', k: 'v' }, { t: 'for an hour', k: 'o' }] }
      ], note: '常配 all morning、for an hour、since' } },
    { ch: 2, sp: 'N', zh: '問問題也一樣：問多久，用 have been 加 V-ing；問幾個、幾次，用 have 加過去分詞。',
      vis: { type: 'family', kick: 'How long / How many 問多久還是問幾個', core: 'How long / How many', coreCn: '問多久還是問幾個', art: 'dg20260911a2_count', items: [
        { t: 'How long…?', cn: '問多久 → have been + V-ing' }, { t: 'How many…?', cn: '問幾個 → have + 過去分詞' }, { t: 'How many times…?', cn: '問幾次 → have + 過去分詞' }
      ] } },
    { ch: 2, sp: 'N', zh: '還有，know、like 這種狀態動詞不能加 ing，只能用 have 加過去分詞。',
      vis: { type: 'pattern', kick: '狀態動詞 State verbs', rows: [
        { lab: 'know', blocks: [{ t: 'I', k: 's' }, { t: 'have known', k: 'v' }, { t: 'Ella', k: 'n' }, { t: 'for six years', k: 'o' }] },
        { lab: 'have', blocks: [{ t: 'He', k: 's' }, { t: 'has had', k: 'v' }, { t: 'this watch', k: 'n' }, { t: 'since 2015', k: 'o' }] }
      ], note: 'know、like、want、have（擁有）都不加 ing' } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: 'Jade 和 Kevin 在家幫媽媽準備生日派對。注意誰在講過程、誰在講結果。', vis: { type: 'scene', art: 'dg20260911a2_party' } },
    { ch: 3, sp: 'A', en: 'Kevin, your face is red. What have you been doing?', cn: 'Kevin，你臉好紅，你剛剛在做什麼？',
      hi: [{ t: 'What have you been doing', cn: '問剛才一直在做什麼', k: 'doing', c: 4 }], vis: { type: 'scene', art: 'dg20260911a2_redq' } },
    { ch: 3, sp: 'T', en: "I've been blowing up balloons for twenty minutes.", cn: '我吹氣球吹了二十分鐘。',
      hi: [{ t: "I've been blowing up", cn: '一直在吹', k: 'doing', c: 4 }], vis: { type: 'scene', art: 'dg20260911a2_pump' } },
    { ch: 3, sp: 'N', zh: '臉紅，是一直吹氣球留下的痕跡。Kevin 講的是過程，所以用 have been blowing。',
      hi: [{ t: 'have been blowing', k: 'doing', c: 4 }], vis: { type: 'scene', art: 'dg20260911a2_puff' } },
    { ch: 3, sp: 'A', en: 'How many balloons have you blown up?', cn: '你吹了幾顆氣球？',
      hi: [{ t: 'How many', cn: '問數量', k: 'count', c: 2 }], vis: { type: 'scene', art: 'dg20260911a2_manyq' } },
    { ch: 3, sp: 'T', en: "I've blown up fifteen. They're all over the sofa.", cn: '我吹好十五顆了，沙發上到處都是。',
      hi: [{ t: "I've blown up fifteen", cn: '數量 → 結果', k: 'count', c: 2 }], vis: { type: 'scene', art: 'dg20260911a2_sofa' } },
    { ch: 3, sp: 'N', zh: '問幾顆，講的是數量，也就是結果，所以 Kevin 換成 have blown up。',
      hi: [{ t: 'have blown up', k: 'count', c: 2 }], vis: { type: 'scene', art: 'dg20260911a2_tally' } },
    { ch: 3, sp: 'T', en: 'Have you made the cake yet?', cn: '妳蛋糕做好了嗎？',
      hi: [{ t: 'Have you made', cn: '問做完了沒', k: 'done', c: 3 }], vis: { type: 'scene', art: 'dg20260911a2_cakeq' } },
    { ch: 3, sp: 'A', en: "Yes, I've made it. It's cooling in the kitchen.", cn: '做好了，正在廚房放涼。',
      hi: [{ t: "I've made it", cn: '做完了', k: 'done', c: 3 }], vis: { type: 'scene', art: 'dg20260911a2_cool' } },
    { ch: 3, sp: 'N', zh: 'Jade 要說的是蛋糕已經做好了，有結果，所以用 have made。',
      hi: [{ t: 'have made', k: 'done', c: 3 }], vis: { type: 'scene', art: 'dg20260911a2_slice' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '同一個動作，換一個形狀，重點就不一樣。',
      vis: { type: 'vs', sm: true, kick: '做完了 vs 一直在做',
        a: { w: 'Grandpa has planted the tomatoes.', def: '爺爺把番茄種好了。', cn: '做完了 → 看結果' },
        b: { w: 'Grandpa has been planting tomatoes all day.', def: '爺爺整天都在種番茄。', cn: '一直在做 → 看過程' } } },
    { ch: 4, sp: 'A', en: 'Grandpa has planted the tomatoes.', cn: '爺爺把番茄種好了。',
      hi: [{ t: 'has planted', cn: '種好了', k: 'done', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '做完了 vs 一直在做',
        a: { w: 'Grandpa has planted the tomatoes.', def: '爺爺把番茄種好了。', cn: '做完了 → 看結果' },
        b: { w: 'Grandpa has been planting tomatoes all day.', def: '爺爺整天都在種番茄。', cn: '一直在做 → 看過程' } } },
    { ch: 4, sp: 'T', en: 'Grandpa has been planting tomatoes all day.', cn: '爺爺整天都在種番茄。',
      hi: [{ t: 'has been planting', cn: '一直在種', k: 'doing', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '做完了 vs 一直在做',
        a: { w: 'Grandpa has planted the tomatoes.', def: '爺爺把番茄種好了。', cn: '做完了 → 看結果' },
        b: { w: 'Grandpa has been planting tomatoes all day.', def: '爺爺整天都在種番茄。', cn: '一直在做 → 看過程' } } },
    { ch: 4, sp: 'N', zh: '左邊是番茄都種好了；右邊強調爺爺忙了一整天，可能還沒種完。',
      vis: { type: 'vs', sm: true, kick: '做完了 vs 一直在做',
        a: { w: 'Grandpa has planted the tomatoes.', def: '爺爺把番茄種好了。', cn: '做完了 → 看結果' },
        b: { w: 'Grandpa has been planting tomatoes all day.', def: '爺爺整天都在種番茄。', cn: '一直在做 → 看過程' } } },
    { ch: 4, sp: 'N', zh: '再看一組。問多久，用 been 加 ing；問幾張，用過去分詞。',
      vis: { type: 'vs', sm: true, kick: '問多久 vs 問幾張',
        a: { w: 'How long have you been drawing?', def: '你畫畫畫多久了？', cn: '問多久 → have been + V-ing' },
        b: { w: 'How many pictures have you drawn?', def: '你畫了幾張？', cn: '問幾張 → have + 過去分詞' } } },
    { ch: 4, sp: 'A', en: 'How long have you been drawing?', cn: '你畫畫畫多久了？',
      hi: [{ t: 'have you been drawing', cn: '問過程', k: 'doing', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '問多久 vs 問幾張',
        a: { w: 'How long have you been drawing?', def: '你畫畫畫多久了？', cn: '問多久 → have been + V-ing' },
        b: { w: 'How many pictures have you drawn?', def: '你畫了幾張？', cn: '問幾張 → have + 過去分詞' } } },
    { ch: 4, sp: 'T', en: 'How many pictures have you drawn?', cn: '你畫了幾張？',
      hi: [{ t: 'have you drawn', cn: '問結果', k: 'count', c: 2 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '問多久 vs 問幾張',
        a: { w: 'How long have you been drawing?', def: '你畫畫畫多久了？', cn: '問多久 → have been + V-ing' },
        b: { w: 'How many pictures have you drawn?', def: '你畫了幾張？', cn: '問幾張 → have + 過去分詞' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '最後給你一個判斷流程，照順序問自己三個問題。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一問：想強調一直在做、做了多久嗎？是的話，用 have been 加 V-ing。',
      hi: [{ t: 'have been 加 V-ing', k: 'doing', c: 4 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'A', en: "My eyes hurt. I've been reading on my phone for hours.", cn: '我眼睛好痛，我看手機看了好幾個小時。',
      hi: [{ t: "I've been reading", cn: '過程', k: 'doing', c: 4 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二問：事情做完了，或有幾個、幾次嗎？是的話，用 have 加過去分詞。',
      hi: [{ t: '幾個、幾次', k: 'count', c: 2 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'T', en: "I've called Grandma twice today.", cn: '我今天打給奶奶兩次了。',
      hi: [{ t: "I've called Grandma twice", cn: '次數 → 結果', k: 'count', c: 2 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '第三問：動詞是 know、like 這種狀態嗎？是的話，不加 ing。',
      vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'A', en: 'My brother has wanted a puppy for years.', cn: '我弟弟想養小狗想好多年了。',
      vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說說看。看到中文情境，先自己用英文說出來，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：你手上都是泥土，因為你整個下午一直在整理花園。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '你手上都是泥土，因為你整個下午一直在整理花園。' } },
    { ch: 6, sp: 'A', en: "I've been working in the garden all afternoon.", cn: '我整個下午都在整理花園。',
      hi: [{ t: "I've been working", cn: '過程 → have been + V-ing', k: 'doing', c: 4 }],
      vis: { type: 'speak', n: 1, show: true, sit: '你手上都是泥土，因為你整個下午一直在整理花園。', a: "I've been working in the garden all afternoon." } },
    { ch: 6, sp: 'N', zh: '情境二：你今天已經喝了四杯水。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '你今天已經喝了四杯水。' } },
    { ch: 6, sp: 'T', en: "I've drunk four glasses of water today.", cn: '我今天已經喝了四杯水。',
      hi: [{ t: "I've drunk four glasses", cn: '數量 → have + 過去分詞', k: 'count', c: 2 }],
      vis: { type: 'speak', n: 2, show: true, sit: '你今天已經喝了四杯水。', a: "I've drunk four glasses of water today." } },
    { ch: 6, sp: 'N', zh: '情境三：你終於把行李打包好了，可以出發了。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '你終於把行李打包好了，可以出發了。' } },
    { ch: 6, sp: 'A', en: "I've packed my suitcase. Let's go!", cn: '我行李打包好了，走吧！',
      hi: [{ t: "I've packed", cn: '做完了 → have + 過去分詞', k: 'done', c: 3 }],
      vis: { type: 'speak', n: 3, show: true, sit: '你終於把行李打包好了，可以出發了。', a: "I've packed my suitcase. Let's go!" } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結一下：一直在做，用 have been doing；做完了、有幾個幾次，用 have done；狀態動詞不加 ing。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '下次開口之前，先問一句：我要講結果，還是過程？', vis: { type: 'end' } }
  ]
};
