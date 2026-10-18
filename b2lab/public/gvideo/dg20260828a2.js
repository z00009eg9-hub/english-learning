/* ============================================================
   B2 Read 文法影片解說 — dg20260828a2（Unit 6 A2：過去進行式）
   格式與規則見 b2lab/tools/GVIDEO_SPEC.md；範本 gvideo/dg20261014b1.js。
   過去式單元：timelineNow 把「現在」放右邊，項目放在左邊的過去。
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
  /* 時鐘：h 點整（分針指 12） */
  var clk=function(cx,cy,r,h){ var a=h*30*Math.PI/180, hx=(cx+Math.sin(a)*r*0.55).toFixed(1), hy=(cy-Math.cos(a)*r*0.55).toFixed(1);
    return '<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="#fff" '+st+'/>'
      +'<line x1="'+cx+'" y1="'+cy+'" x2="'+cx+'" y2="'+(cy-r*0.75)+'" '+th(3)+'/>'
      +'<line x1="'+cx+'" y1="'+cy+'" x2="'+hx+'" y2="'+hy+'" stroke="'+A+'" stroke-width="5" stroke-linecap="round"/>'
      +'<circle cx="'+cx+'" cy="'+cy+'" r="3" fill="'+D+'"/>'; };
  var bub=function(cx,cy,r){ return '<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="#fff" '+th(2.5)+'/><path d="M'+(cx-r*0.45)+' '+(cy-r*0.2)+' a'+(r*0.5)+' '+(r*0.5)+' 0 0 1 '+(r*0.4)+' -'+(r*0.35)+'" fill="none" stroke="'+S+'" stroke-width="2" stroke-linecap="round"/>'; };
  var person=function(cx,cy,col){ return '<path d="M'+(cx-17)+' '+(cy+44)+' V'+(cy+30)+' a17 17 0 0 1 34 0 V'+(cy+44)+' Z" fill="'+col+'" '+st+'/><circle cx="'+cx+'" cy="'+cy+'" r="13" fill="'+L+'" '+st+'/>'; };

  Object.assign(window.GVIDEO_ART, {
    /* 那一刻正在做：爐子上煎蛋冒煙＋八點的時鐘（過去進行式） */
    dg20260828a2_inprog: svg(
      '<rect x="22" y="112" width="120" height="24" rx="4" fill="#c9c2b8" '+st+'/>'
     +'<path d="M50 112 q4 -8 8 0 M74 112 q4 -8 8 0 M98 112 q4 -8 8 0" fill="'+A+'" '+th(2)+'/>'
     +'<line x1="124" y1="98" x2="160" y2="88" '+th(7)+'/>'
     +'<ellipse cx="80" cy="98" rx="48" ry="12" fill="#5a5048" '+st+'/>'
     +'<ellipse cx="78" cy="95" rx="20" ry="6" fill="#fff" '+th(2)+'/><circle cx="78" cy="94" r="5" fill="'+Y+'" '+th(2)+'/>'
     +'<path d="M60 76 q-6 -8 0 -16 q6 -8 0 -16 M80 72 q-6 -8 0 -16 q6 -8 0 -16 M100 76 q-6 -8 0 -16 q6 -8 0 -16" fill="none" stroke="#b9b1a6" stroke-width="3.5" stroke-linecap="round"/>'
     +clk(164,40,22,8)),
    /* 做完了：吃光的盤子＋打勾（過去簡單式） */
    dg20260828a2_done: svg(
      '<ellipse cx="84" cy="88" rx="62" ry="40" fill="#fff" '+st+'/>'
     +'<ellipse cx="84" cy="88" rx="42" ry="25" fill="'+C+'" '+th(2.5)+'/>'
     +'<g fill="'+A+'"><circle cx="70" cy="84" r="2.5"/><circle cx="92" cy="94" r="2"/><circle cx="98" cy="80" r="2.5"/></g>'
     +'<path d="M150 112 L120 70 M118 60 l-6 12 M124 58 l-4 13 M130 58 l-2 14" fill="none" '+th(3.5)+'/>'
     +chk(158,40,20)),
    /* was／were：一個人 vs 兩個人 */
    dg20260828a2_people: svg(
      person(48,62,A)
     +'<line x1="100" y1="30" x2="100" y2="124" stroke="'+L+'" stroke-width="4" stroke-dasharray="2 8" stroke-linecap="round"/>'
     +person(134,62,B)+person(168,62,G)
     +txt(48,40,'was',16,A)+txt(151,40,'were',16,B)
     +'<line x1="16" y1="108" x2="190" y2="108" '+st+'/>'),

    /* 情境 1：未接來電——手機＋紅色未接徽章 */
    dg20260828a2_missed: svg(
      '<rect x="66" y="14" width="68" height="122" rx="12" fill="'+D+'" '+st+'/><rect x="73" y="26" width="54" height="96" rx="4" fill="#fff"/>'
     +'<path d="M86 60 c-3 14 6 30 20 36 l7 -8 l-8 -8 l-5 4 c-6 -4 -9 -10 -10 -16 l6 -3 l-3 -11 Z" fill="'+G+'" '+th(2.5)+'/>'
     +'<path d="M108 52 l12 12 M120 52 l-12 12" stroke="'+R+'" stroke-width="4" stroke-linecap="round"/>'
     +'<circle cx="134" cy="22" r="13" fill="'+R+'" '+st+'/>'+txt(134,28,'1',15,'#fff')),
    /* 情境 2：昨晚八點打電話——月亮、星星、手機響 */
    dg20260828a2_night: svg(
      '<rect x="10" y="10" width="180" height="130" rx="10" fill="#33405c" '+st+'/>'
     +'<path d="M62 30 a26 26 0 1 0 22 40 a20 20 0 1 1 -22 -40 Z" fill="'+Y+'" '+st+'/>'
     +'<g fill="#fff"><circle cx="110" cy="28" r="2.5"/><circle cx="160" cy="40" r="2"/><circle cx="34" cy="110" r="2"/><circle cx="96" cy="58" r="1.8"/></g>'
     +'<g transform="rotate(14 140 96)"><rect x="124" y="66" width="32" height="58" rx="6" fill="'+L+'" '+st+'/><rect x="129" y="74" width="22" height="38" rx="2" fill="'+S+'" '+th(2)+'/></g>'
     +'<path d="M110 80 q-6 10 0 22 M100 74 q-10 16 0 34 M174 74 q6 12 0 24" fill="none" stroke="#fff" stroke-width="3.5" stroke-linecap="round"/>'),
    /* 情境 3：在幫狗洗澡——浴盆裡的狗＋泡泡 */
    dg20260828a2_dogbath: svg(
      '<path d="M66 54 q-14 -2 -16 16 q8 6 16 -2 Z" fill="#a8743f" '+st+'/><path d="M134 54 q14 -2 16 16 q-8 6 -16 -2 Z" fill="#a8743f" '+st+'/>'
     +'<ellipse cx="100" cy="66" rx="36" ry="30" fill="'+L+'" '+st+'/>'
     +'<circle cx="88" cy="62" r="3.5" fill="'+D+'"/><circle cx="112" cy="62" r="3.5" fill="'+D+'"/>'
     +'<ellipse cx="100" cy="76" rx="7" ry="5" fill="'+D+'"/><path d="M93 84 q7 6 14 0" fill="none" '+th(2.5)+'/>'
     +'<path d="M24 88 H176 L166 128 a10 10 0 0 1 -10 8 H44 a10 10 0 0 1 -10 -8 Z" fill="#fff" '+st+'/>'
     +'<line x1="50" y1="136" x2="44" y2="146" '+th(4)+'/><line x1="150" y1="136" x2="156" y2="146" '+th(4)+'/>'
     +bub(44,84,10)+bub(64,80,8)+bub(140,82,9)+bub(160,84,11)+bub(78,30,7)+bub(150,30,8)+bub(40,46,6)),
    /* 情境 4：八點那一刻正在洗——時鐘被泡泡圍著 */
    dg20260828a2_bubbleclock: svg(
      clk(100,76,46,8)
     +bub(40,40,12)+bub(158,36,14)+bub(34,104,9)+bub(166,108,12)+bub(60,132,7)+bub(142,134,8)+bub(176,70,6)),
    /* 情境 5：九點在做什麼？——九點時鐘＋問號 */
    dg20260828a2_ask9: svg(
      clk(88,80,50,9)
     +'<g '+th(3)+'><line x1="88" y1="34" x2="88" y2="40"/><line x1="134" y1="80" x2="128" y2="80"/><line x1="88" y1="126" x2="88" y2="120"/><line x1="42" y1="80" x2="48" y2="80"/></g>'
     +qb(166,36)),
    /* 情境 6：在看籃球比賽——電視裡的籃框和球 */
    dg20260828a2_tvgame: svg(
      '<rect x="20" y="16" width="160" height="104" rx="10" fill="'+D+'" '+st+'/><rect x="30" y="26" width="140" height="84" rx="4" fill="#e9b97a"/>'
     +'<rect x="62" y="34" width="52" height="34" rx="2" fill="#fff" '+th(2.5)+'/><rect x="78" y="46" width="20" height="14" fill="none" stroke="'+R+'" stroke-width="2.5"/>'
     +'<line x1="72" y1="68" x2="104" y2="68" stroke="'+A+'" stroke-width="4" stroke-linecap="round"/>'
     +'<path d="M74 68 L80 86 H96 L102 68 M82 68 L86 86 M94 68 L90 86" fill="none" stroke="#fff" stroke-width="2"/>'
     +'<circle cx="138" cy="80" r="16" fill="'+A+'" '+st+'/><path d="M122 80 H154 M138 64 V96 M127 69 q8 11 0 22 M149 69 q-8 11 0 22" fill="none" '+th(2)+'/>'
     +'<line x1="80" y1="120" x2="70" y2="138" '+th(4)+'/><line x1="120" y1="120" x2="130" y2="138" '+th(4)+'/>'),
    /* 情境 7：兩個人一起看——沙發上的兩個背影 */
    dg20260828a2_two: svg(
      '<circle cx="78" cy="58" r="17" fill="'+D+'" '+st+'/><circle cx="124" cy="54" r="19" fill="#5a4030" '+st+'/>'
     +'<path d="M56 98 q0 -24 22 -24 q22 0 22 24 Z" fill="'+G+'" '+st+'/><path d="M100 98 q0 -26 24 -26 q24 0 24 26 Z" fill="'+B+'" '+st+'/>'
     +'<rect x="26" y="88" width="148" height="34" rx="10" fill="'+A+'" '+st+'/>'
     +'<rect x="14" y="76" width="22" height="50" rx="8" fill="'+A+'" '+st+'/><rect x="164" y="76" width="22" height="50" rx="8" fill="'+A+'" '+st+'/>'
     +'<line x1="40" y1="126" x2="40" y2="138" '+th(4)+'/><line x1="160" y1="126" x2="160" y2="138" '+th(4)+'/>'
     +txt(100,30,'2',22,R)),
    /* 情境 8：誰贏了？——獎盃＋問號 */
    dg20260828a2_whowon: svg(
      '<path d="M66 30 H134 V60 a34 34 0 0 1 -68 0 Z" fill="'+Y+'" '+st+'/>'
     +'<path d="M66 40 H48 q0 26 22 30 M134 40 H152 q0 26 -22 30" fill="none" '+th(4)+'/>'
     +'<rect x="92" y="94" width="16" height="16" fill="'+Y+'" '+st+'/><rect x="72" y="110" width="56" height="20" rx="3" fill="#a8743f" '+st+'/>'
     +'<path d="M86 44 l4 10 l10 1 l-8 6 l3 10 l-9 -6 l-9 6 l3 -10 l-8 -6 l10 -1 Z" fill="#fff" '+th(2)+'/>'
     +qb(168,36)),
    /* 情境 9：我們的隊贏了！——加油旗＋彩帶 */
    dg20260828a2_cheer: svg(
      '<line x1="60" y1="30" x2="60" y2="136" '+th(5)+'/>'
     +'<path d="M62 32 L170 58 L62 86 Z" fill="'+B+'" '+st+'/>'
     +'<path d="M100 50 l4 9 l10 1 l-7 6 l2 10 l-9 -5 l-9 5 l2 -10 l-7 -6 l10 -1 Z" fill="'+Y+'" '+th(2)+'/>'
     +'<g '+th(2.5)+'><rect x="24" y="24" width="8" height="14" fill="'+R+'" transform="rotate(20 28 31)"/><rect x="150" y="100" width="8" height="14" fill="'+G+'" transform="rotate(-25 154 107)"/><rect x="110" y="112" width="8" height="14" fill="'+Y+'" transform="rotate(35 114 119)"/><rect x="176" y="22" width="8" height="14" fill="'+A+'" transform="rotate(-15 180 29)"/></g>'
     +'<path d="M22 70 q8 -8 0 -16 M168 132 q8 -8 0 -16" fill="none" stroke="'+R+'" stroke-width="3.5" stroke-linecap="round"/>'),
    /* 情境 10：比賽結束了——計分板＋打勾 */
    dg20260828a2_score: svg(
      '<rect x="18" y="26" width="164" height="84" rx="10" fill="'+D+'" '+st+'/>'
     +'<rect x="30" y="40" width="60" height="56" rx="6" fill="#3d332a"/><rect x="110" y="40" width="60" height="56" rx="6" fill="#3d332a"/>'
     +txt(60,80,'98',34,Y)+txt(140,80,'95',34,'#e8e1d6')+txt(100,78,':',30,'#fff')
     +'<line x1="60" y1="110" x2="60" y2="138" '+th(5)+'/><line x1="140" y1="110" x2="140" y2="138" '+th(5)+'/>'
     +chk(166,24,15))
  });
})();

/* ============================================================
   dg20260828a2 — What Were You Doing?
   Grammar in Use Unit 6（Past continuous: I was doing）A2
   ============================================================ */
window.GVIDEO.dg20260828a2 = {
  kind: 'gram',
  date: '2026-08-28',
  title: 'What Were You Doing?',
  titleCn: '過去進行式：那一刻你正在做什麼？',
  titleArt: ['dg20260828a2_inprog', 'dg20260828a2_done', 'dg20260828a2_people'],
  scene: '沒接到的電話 A missed call',
  sceneArt: 'dg20260828a2_missed',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Lily', voice: 'f' },
    T: { name: 'Ken', voice: 'm' }
  },
  expr: {
    prog: { t: 'was / were + V-ing', cn: '過去那一刻正在做 → 過去進行式', ex: 'We were eating lunch at noon yesterday.', exCn: '我們昨天中午在吃午餐。', note: 'I / he / she / it 用 was；you / we / they 用 were' },
    done: { t: '過去簡單式 V-ed', cn: '事情做了、做完了 → 過去簡單式', ex: 'I cleaned my room on Sunday.', exCn: '我星期天打掃了房間。', note: '只報告做了這件事，不描述當時的畫面' }
  },
  chapters: [
    { cn: '開場' }, { cn: '那一刻正在做' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  /* 「現在」放在右邊，兩個項目都在過去 */
  timelineNow: 86,
  timeline: [
    { x: 30, art: 'dg20260828a2_inprog', lab: '過去進行式', who: '那一刻正在做' },
    { x: 58, art: 'dg20260828a2_done',   lab: '過去簡單式', who: '做了、做完了' }
  ],
  flow: [
    { q: '在講過去那一刻正在做的事？', a: '過去進行式', en: 'was / were + V-ing' },
    { q: '主詞是 I、he、she、it？',    a: 'was',        en: 'I / he / she / it + was + V-ing' },
    { q: '主詞是 you、we、they？',     a: 'were',       en: 'you / we / they + were + V-ing' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: '昨天晚上八點你在做什麼？回答這種問題，就要用過去進行式。', vis: { type: 'title' } },

    /* ---- 1 核心：那一刻正在做 ---- */
    { ch: 1, sp: 'N', zh: '先看這條時間線。最右邊是現在，左邊都是已經過去的時間。',
      vis: { type: 'timeline', show: 0, kick: 'In the middle or done? 正在做還是做完了？' } },
    { ch: 1, sp: 'N', zh: '想說過去某個時間點，你正在做什麼，就用過去進行式，也就是 was 或 were 加 V-ing。',
      hi: [{ t: '過去進行式', k: 'prog', c: 3 }], vis: { type: 'timeline', show: 1, pop: true, kick: 'In the middle or done? 正在做還是做完了？' } },
    { ch: 1, sp: 'A', en: 'I was washing my hair at eight last night.', cn: '昨晚八點我在洗頭。',
      hi: [{ t: 'was washing', cn: '那一刻正在洗', k: 'prog', c: 3 }], vis: { type: 'timeline', show: 1, lit: 0, kick: 'In the middle or done? 正在做還是做完了？' } },
    { ch: 1, sp: 'N', zh: '這句話就像一張照片：八點那一刻，她正在洗，還沒洗完。',
      vis: { type: 'timeline', show: 1, lit: 0, kick: 'In the middle or done? 正在做還是做完了？' } },
    { ch: 1, sp: 'N', zh: '如果只是想說，這件事做了、做完了，就用過去簡單式。',
      hi: [{ t: '過去簡單式', k: 'done', c: 4 }], vis: { type: 'timeline', show: 2, pop: true, kick: 'In the middle or done? 正在做還是做完了？' } },
    { ch: 1, sp: 'T', en: 'I washed the dishes after dinner.', cn: '我晚餐後洗了碗。',
      hi: [{ t: 'washed', cn: '做完了', k: 'done', c: 4 }], vis: { type: 'timeline', show: 2, lit: 1, kick: 'In the middle or done? 正在做還是做完了？' } },
    { ch: 1, sp: 'N', zh: '再來是 be 動詞。主詞是 I、he、she、it，用 was；主詞是 you、we、they，用 were。',
      hi: [{ t: 'was', k: 'prog', c: 3 }, { t: 'were', k: 'prog', c: 3 }], vis: { type: 'timeline', show: 2, lit: 0, kick: 'In the middle or done? 正在做還是做完了？' } },
    { ch: 1, sp: 'A', en: 'My parents were watching the news.', cn: '我爸媽那時在看新聞。',
      hi: [{ t: 'were watching', cn: '兩個人 → were', k: 'prog', c: 3 }], vis: { type: 'timeline', show: 2, lit: 0, kick: 'In the middle or done? 正在做還是做完了？' } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: '句型很簡單：主詞，加 was 或 were，再加動詞 ing。後面常常放一個過去的時間。',
      hi: [{ t: '過去的時間', k: 'prog', c: 1 }],
      vis: { type: 'pattern', kick: 'Past continuous 過去進行式', rows: [
        { lab: '一個人', blocks: [{ t: 'She', k: 's' }, { t: 'was', k: 'x' }, { t: 'reading', k: 'v' }, { t: 'at ten', k: 'o' }] },
        { lab: '兩個人以上', blocks: [{ t: 'We', k: 's' }, { t: 'were', k: 'x' }, { t: 'playing', k: 'v' }, { t: 'cards', k: 'n' }, { t: 'at ten', k: 'o' }] }
      ], note: 'was / were 後面一定接 V-ing：read → reading' } },
    { ch: 2, sp: 'N', zh: '最常跟它一起出現的時間有這幾個：at eight last night、at that time、at noon yesterday。',
      vis: { type: 'family', kick: 'Time words 常配的時間', core: 'A past moment', coreCn: '過去的某個時間點', art: 'dg20260828a2_inprog', items: [
        { t: 'at eight last night', cn: '昨晚八點' }, { t: 'at that time', cn: '那個時候' }, { t: 'at noon yesterday', cn: '昨天中午' }, { t: 'this time last week', cn: '上週的這個時候' }
      ] } },
    { ch: 2, sp: 'N', zh: '否定句，在 was 後面加 not，變成 wasn\'t；問句，就把 was 或 were 搬到最前面。',
      vis: { type: 'pattern', kick: '否定和問句 No and questions', rows: [
        { lab: '否定', blocks: [{ t: 'I', k: 's' }, { t: "wasn't", k: 'x' }, { t: 'sleeping', k: 'v' }] },
        { lab: '問句', blocks: [{ t: 'Were', k: 'x' }, { t: 'you', k: 's' }, { t: 'cooking', k: 'v' }, { t: 'at six?', k: 'o' }] }
      ], note: 'was not ＝ wasn\'t，were not ＝ weren\'t' } },
    { ch: 2, sp: 'N', zh: '時間點很重要。加上時間，聽的人馬上知道你說的是哪一刻的畫面。',
      vis: { type: 'pattern', kick: '加上時間 Add a time', rows: [
        { lab: '沒說哪一刻', blocks: [{ t: 'He was running', k: 'v' }] },
        { lab: '早上六點那一刻', blocks: [{ t: 'He was running', k: 'v' }, { t: 'at six this morning', k: 'o', add: true }] }
      ] } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: 'Ken 昨天晚上打了兩次電話給 Lily，她都沒接。來聽他們怎麼說。', vis: { type: 'scene', art: 'dg20260828a2_missed' } },
    { ch: 3, sp: 'T', en: 'I called you at eight last night.', cn: '我昨晚八點打給你。',
      hi: [{ t: 'called', cn: '打了電話', k: 'done', c: 4 }], vis: { type: 'scene', art: 'dg20260828a2_night' } },
    { ch: 3, sp: 'A', en: 'Sorry! I was giving my dog a bath.', cn: '抱歉！我那時在幫狗洗澡。',
      hi: [{ t: 'was giving', cn: '那一刻正在做', k: 'prog', c: 3 }], vis: { type: 'scene', art: 'dg20260828a2_dogbath' } },
    { ch: 3, sp: 'N', zh: 'Ken 打來的那一刻，Lily 正在幫狗洗澡，還沒洗完，所以用 was giving。',
      hi: [{ t: 'was giving', k: 'prog', c: 3 }], vis: { type: 'scene', art: 'dg20260828a2_bubbleclock' } },
    { ch: 3, sp: 'T', en: 'I called again at nine. What were you doing then?', cn: '我九點又打了一次。你那時在做什麼？',
      hi: [{ t: 'were you doing', cn: '問那一刻', k: 'prog', c: 3 }], vis: { type: 'scene', art: 'dg20260828a2_ask9' } },
    { ch: 3, sp: 'A', en: 'My brother and I were watching a basketball game.', cn: '我跟我哥在看籃球比賽。',
      hi: [{ t: 'were watching', cn: '正在看', k: 'prog', c: 3 }], vis: { type: 'scene', art: 'dg20260828a2_tvgame' } },
    { ch: 3, sp: 'N', zh: '主詞是 my brother and I，兩個人，所以用 were，不是 was。',
      hi: [{ t: 'were', k: 'prog', c: 3 }], vis: { type: 'scene', art: 'dg20260828a2_two' } },
    { ch: 3, sp: 'T', en: 'Oh, nice! Who won?', cn: '喔，不錯耶！誰贏了？',
      hi: [{ t: 'won', cn: '贏了', k: 'done', c: 4 }], vis: { type: 'scene', art: 'dg20260828a2_whowon' } },
    { ch: 3, sp: 'A', en: 'Our team won! We jumped up and cheered.', cn: '我們支持的隊贏了！我們跳起來歡呼。',
      hi: [{ t: 'won', cn: '結果', k: 'done', c: 4 }], vis: { type: 'scene', art: 'dg20260828a2_cheer' } },
    { ch: 3, sp: 'N', zh: '比賽打完、有結果了，是做完的事，所以用過去簡單式 won。',
      hi: [{ t: 'won', k: 'done', c: 4 }], vis: { type: 'scene', art: 'dg20260828a2_score' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '同一件事，換一個形狀，意思就不一樣。',
      vis: { type: 'vs', sm: true, kick: '做完了 vs 那一刻正在做',
        a: { w: 'I painted the fence on Saturday.', def: '我星期六把圍籬漆好了。', cn: '漆完了 → 過去簡單式' },
        b: { w: 'I was painting the fence at noon on Saturday.', def: '星期六中午我正在漆圍籬。', cn: '那一刻正在漆 → 過去進行式' } } },
    { ch: 4, sp: 'A', en: 'I painted the fence on Saturday.', cn: '我星期六把圍籬漆好了。',
      hi: [{ t: 'painted', cn: '漆完了', k: 'done', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '做完了 vs 那一刻正在做',
        a: { w: 'I painted the fence on Saturday.', def: '我星期六把圍籬漆好了。', cn: '漆完了 → 過去簡單式' },
        b: { w: 'I was painting the fence at noon on Saturday.', def: '星期六中午我正在漆圍籬。', cn: '那一刻正在漆 → 過去進行式' } } },
    { ch: 4, sp: 'T', en: 'I was painting the fence at noon on Saturday.', cn: '星期六中午我正在漆圍籬。',
      hi: [{ t: 'was painting', cn: '正在漆', k: 'prog', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '做完了 vs 那一刻正在做',
        a: { w: 'I painted the fence on Saturday.', def: '我星期六把圍籬漆好了。', cn: '漆完了 → 過去簡單式' },
        b: { w: 'I was painting the fence at noon on Saturday.', def: '星期六中午我正在漆圍籬。', cn: '那一刻正在漆 → 過去進行式' } } },
    { ch: 4, sp: 'N', zh: '第一句說圍籬漆好了；第二句只說中午那一刻正在漆，漆完了沒，這句沒有說。',
      vis: { type: 'vs', sm: true, kick: '做完了 vs 那一刻正在做',
        a: { w: 'I painted the fence on Saturday.', def: '我星期六把圍籬漆好了。', cn: '漆完了 → 過去簡單式' },
        b: { w: 'I was painting the fence at noon on Saturday.', def: '星期六中午我正在漆圍籬。', cn: '那一刻正在漆 → 過去進行式' } } },
    { ch: 4, sp: 'N', zh: '再看一組。主詞只有一個人，用 was；兩個人以上，就用 were。',
      vis: { type: 'vs', sm: true, kick: '一個人 vs 兩個人以上',
        a: { w: 'My sister was swimming.', def: '我妹妹那時在游泳。', cn: '一個人 → was' },
        b: { w: 'My sisters were swimming.', def: '我妹妹們那時在游泳。', cn: '兩個人以上 → were' } } },
    { ch: 4, sp: 'A', en: 'My sister was swimming.', cn: '我妹妹那時在游泳。',
      hi: [{ t: 'was swimming', cn: '一個人', k: 'prog', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '一個人 vs 兩個人以上',
        a: { w: 'My sister was swimming.', def: '我妹妹那時在游泳。', cn: '一個人 → was' },
        b: { w: 'My sisters were swimming.', def: '我妹妹們那時在游泳。', cn: '兩個人以上 → were' } } },
    { ch: 4, sp: 'T', en: 'My sisters were swimming.', cn: '我妹妹們那時在游泳。',
      hi: [{ t: 'were swimming', cn: '兩個人以上', k: 'prog', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '一個人 vs 兩個人以上',
        a: { w: 'My sister was swimming.', def: '我妹妹那時在游泳。', cn: '一個人 → was' },
        b: { w: 'My sisters were swimming.', def: '我妹妹們那時在游泳。', cn: '兩個人以上 → were' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '最後給你一個判斷流程。照順序問自己三個問題。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一問：在講過去那一刻正在做的事嗎？是的話，用過去進行式。',
      hi: [{ t: '過去進行式', k: 'prog', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'A', en: 'At seven this morning, I was waiting for the bus.', cn: '今天早上七點，我正在等公車。',
      hi: [{ t: 'was waiting', cn: '那一刻正在等', k: 'prog', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二問：主詞是 I、he、she、it 嗎？是的話，用 was。',
      hi: [{ t: 'was', k: 'prog', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'T', en: 'He was fixing his bike in the garage.', cn: '他那時在車庫修腳踏車。',
      hi: [{ t: 'was fixing', cn: 'he → was', k: 'prog', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '第三問：主詞是 you、we、they 嗎？是的話，用 were。',
      hi: [{ t: 'were', k: 'prog', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'A', en: 'They were singing in the car.', cn: '他們那時在車上唱歌。',
      hi: [{ t: 'were singing', cn: 'they → were', k: 'prog', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說說看。看到中文情境，先自己用英文說出來，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：昨天下午四點，你正在公園跑步。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '昨天下午四點，你正在公園跑步。' } },
    { ch: 6, sp: 'A', en: 'I was running in the park at four yesterday afternoon.', cn: '昨天下午四點我在公園跑步。',
      hi: [{ t: 'was running', cn: 'I → was', k: 'prog', c: 3 }],
      vis: { type: 'speak', n: 1, show: true, sit: '昨天下午四點，你正在公園跑步。', a: 'I was running in the park at four yesterday afternoon.' } },
    { ch: 6, sp: 'N', zh: '情境二：昨晚十點，你跟你妹妹正在玩電動。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '昨晚十點，你跟你妹妹正在玩電動。' } },
    { ch: 6, sp: 'T', en: 'My sister and I were playing video games at ten last night.', cn: '昨晚十點我跟我妹在玩電動。',
      hi: [{ t: 'were playing', cn: '兩個人 → were', k: 'prog', c: 3 }],
      vis: { type: 'speak', n: 2, show: true, sit: '昨晚十點，你跟你妹妹正在玩電動。', a: 'My sister and I were playing video games at ten last night.' } },
    { ch: 6, sp: 'N', zh: '情境三：上個星期六中午，你媽媽正在廚房包水餃。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '上個星期六中午，你媽媽正在廚房包水餃。' } },
    { ch: 6, sp: 'A', en: 'My mom was making dumplings in the kitchen at noon last Saturday.', cn: '上星期六中午我媽在廚房包水餃。',
      hi: [{ t: 'was making', cn: 'my mom → was', k: 'prog', c: 3 }],
      vis: { type: 'speak', n: 3, show: true, sit: '上個星期六中午，你媽媽正在廚房包水餃。', a: 'My mom was making dumplings in the kitchen at noon last Saturday.' } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結一下：過去那一刻正在做，用 was 或 were 加 V-ing；只說做完了，就用過去簡單式。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '下次有人問你昨天幾點在做什麼，記得用 was 或 were 加 ing 回答。', vis: { type: 'end' } }
  ]
};
