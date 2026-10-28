/* ============================================================
   全站 emoji → 線稿圖示（2026-10-25）
   - 網頁畫出來的文字裡只要有 EMO_MAP 認得的 emoji，就換成同一套線稿 SVG
     （深咖啡外框＋本色，和課本封面 BOOK_ICONS 同風格）
   - 資料檔（data-*.js）照舊寫 emoji 就好，不用改；排程新增的課也會自動轉
   - 小符號（✅❌⚠⭐▶🔊…）用下面 UI 這組 24 格粗線條，文字大小也看得清楚；
     其他用 '@key' 指到 BOOK_ICONS（64 格）
   - 箭頭（↔ ↗ → ▼）、©® 這類單色文字符號刻意不轉
   - 沒對照到的 emoji 原樣保留；跑 tools/check-emoji.js 會列出來
   ============================================================ */
(function(){
  var D='#2b2118', Y='#f0b04e', A='#e8813a', G='#3f9e64', R='#d9534f', B='#3b82c4', L='#f7e3c9', M='#9aa5b1', W='#fff';
  var st='stroke="'+D+'" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"';
  var ln=function(c,w){ return 'fill="none" stroke="'+c+'" stroke-width="'+w+'" stroke-linecap="round" stroke-linejoin="round"'; };
  var star=function(cx,cy,ro,ri,col){ var p=[]; for(var k=0;k<10;k++){ var r=k%2?ri:ro, a=-Math.PI/2+k*Math.PI/5; p.push((cx+r*Math.cos(a)).toFixed(1)+' '+(cy+r*Math.sin(a)).toFixed(1)); } return '<path d="M'+p.join(' L')+'Z" fill="'+col+'" '+st+'/>'; };
  var book=function(col){ return '<path d="M6 3.5h12v17H6a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2z" fill="'+col+'" '+st+'/><path d="M4 18.5a2 2 0 0 1 2-2h12" '+ln(D,1.8)+'/><path d="M8.5 8h6" '+ln(W,1.8)+'/>'; };
  var face=function(m,col){ var s='<circle cx="12" cy="12" r="9" fill="'+(col||Y)+'" '+st+'/>';
    var eyes='<circle cx="9" cy="10" r="1.2" fill="'+D+'"/><circle cx="15" cy="10" r="1.2" fill="'+D+'"/>';
    if(m==='sleep') return s+'<path d="M7.6 10.3h2.8M13.6 10.3h2.8M10 15.5h4" '+ln(D,1.6)+'/>';
    if(m==='angry') s+='<path d="M7.5 7.5l3 1.4M16.5 7.5l-3 1.4" '+ln(D,1.6)+'/>';
    if(m==='think') s+='<path d="M13.5 7.2l3-.6" '+ln(D,1.6)+'/>';
    s+=eyes;
    return s+({ smile:'<path d="M8.5 14a4 4 0 0 0 7 0" '+ln(D,1.7)+'/>',
      sad:'<path d="M8.5 16.5a4 4 0 0 1 7 0" '+ln(D,1.7)+'/>',
      wow:'<ellipse cx="12" cy="15.6" rx="2" ry="2.4" fill="'+D+'"/>',
      zip:'<path d="M8.5 15.5h7M10 14.3v2.4M12 14.3v2.4M14 14.3v2.4" '+ln(D,1.4)+'/>' }[m]||'<path d="M9 15.5h6" '+ln(D,1.7)+'/>'); };
  var person=function(col){ return '<circle cx="12" cy="7.2" r="3.8" fill="'+L+'" '+st+'/><path d="M5 21v-2.5a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5V21z" fill="'+col+'" '+st+'/>'; };
  var tri=function(dir,x,col){ return dir>0? '<path d="M'+x+' 5.5l8 6.5-8 6.5z" fill="'+col+'" '+st+'/>' : '<path d="M'+x+' 5.5l-8 6.5 8 6.5z" fill="'+col+'" '+st+'/>'; };

  var UI={
    ok:'<rect x="3" y="3" width="18" height="18" rx="4.5" fill="'+G+'" '+st+'/><path d="M7.5 12.3l3 3 6-6.6" '+ln(W,2.4)+'/>',
    tick:'<path d="M5 12.5l4.5 4.5 9.5-10" '+ln(D,5)+'/><path d="M5 12.5l4.5 4.5 9.5-10" '+ln(G,2.6)+'/>',
    no:'<rect x="3" y="3" width="18" height="18" rx="4.5" fill="'+R+'" '+st+'/><path d="M8.5 8.5l7 7M15.5 8.5l-7 7" '+ln(W,2.4)+'/>',
    warn:'<path d="M12 3.5L21.5 20h-19z" fill="'+Y+'" '+st+'/><path d="M12 9.5v5" '+ln(D,2.2)+'/><circle cx="12" cy="17.3" r="1.2" fill="'+D+'"/>',
    star:star(12,12.8,9.6,4.3,Y),
    bulb:'<path d="M12 2.8a6 6 0 0 1 3.6 10.8V16H8.4v-2.4A6 6 0 0 1 12 2.8z" fill="'+Y+'" '+st+'/><path d="M9 19h6M10.2 21.4h3.6" '+ln(D,1.8)+'/><path d="M10.4 9.6l1.6 2 1.6-2" '+ln(W,1.5)+'/>',
    spk:'<path d="M3.5 9.5h3.5L11.5 5.5v13L7 14.5H3.5z" fill="'+M+'" '+st+'/><path d="M15 9a4 4 0 0 1 0 6M17.8 6.4a7.6 7.6 0 0 1 0 11.2" '+ln(D,1.8)+'/>',
    play:'<path d="M7 4.5l12 7.5-12 7.5z" fill="'+G+'" '+st+'/>',
    pause:'<rect x="5.5" y="4.5" width="4.6" height="15" rx="1.2" fill="'+A+'" '+st+'/><rect x="13.9" y="4.5" width="4.6" height="15" rx="1.2" fill="'+A+'" '+st+'/>',
    stop:'<rect x="5" y="5" width="14" height="14" rx="2.5" fill="'+R+'" '+st+'/>',
    prev:'<rect x="4" y="5.5" width="3" height="13" rx="1" fill="'+D+'"/>'+tri(-1,19,A),
    next:'<rect x="17" y="5.5" width="3" height="13" rx="1" fill="'+D+'"/>'+tri(1,5,A),
    rew:tri(-1,12.5,A)+tri(-1,21,A),
    pushpin:'<path d="M8.5 15.5l-4 5" '+ln(D,2.2)+'/><path d="M14.5 3.5l6 6-2.5 1-3 3 .5 3.5-1.5 1.5-9-9 1.5-1.5 3.5.5 3-3z" fill="'+R+'" '+st+'/>',
    ring:'<circle cx="12" cy="12" r="8" fill="none" stroke="'+D+'" stroke-width="5"/><circle cx="12" cy="12" r="8" fill="none" stroke="'+R+'" stroke-width="2.6"/>',
    dotG:'<circle cx="12" cy="12" r="8" fill="'+G+'" '+st+'/>',
    micro:'<path d="M4.5 20.5h15M7.5 17.5h7.5a4.5 4.5 0 0 0 1.5-8.5M8 14h6" '+ln(D,1.8)+'/><rect x="8.6" y="2.6" width="4.6" height="10" rx="1.2" transform="rotate(-25 10.9 7.6)" fill="'+B+'" '+st+'/>',
    ruler:'<path d="M4 3.5v17h17z" fill="'+Y+'" '+st+'/><path d="M8 12.5v4.5h4.5z" fill="'+W+'" '+st+'/><path d="M4 8h2.5M4 12h2M4 16h2.5" '+ln(D,1.4)+'/>',
    timer:'<circle cx="12" cy="13.5" r="7.5" fill="'+W+'" '+st+'/><path d="M10 2.8h4M12 2.8V6M18 6.8l1.4-1.4" '+ln(D,1.8)+'/><path d="M12 13.5V9.6" '+ln(A,2.2)+'/>',
    repeat:'<path d="M4.5 11.5V10a3.5 3.5 0 0 1 3.5-3.5h10.5M16 4l2.5 2.5L16 9M19.5 12.5V14a3.5 3.5 0 0 1-3.5 3.5H5.5M8 20l-2.5-2.5L8 15" '+ln(D,4.2)+'/><path d="M4.5 11.5V10a3.5 3.5 0 0 1 3.5-3.5h10.5M16 4l2.5 2.5L16 9M19.5 12.5V14a3.5 3.5 0 0 1-3.5 3.5H5.5M8 20l-2.5-2.5L8 15" '+ln(B,2)+'/>',
    party:'<path d="M3.5 20.5l4.5-12 7.5 7.5z" fill="'+Y+'" '+st+'/><path d="M13 4.5l1 2M18.5 9.5l2-1M16.5 4l-.8 3.5" '+ln(R,1.8)+'/><circle cx="20" cy="4.5" r="1.3" fill="'+B+'"/><circle cx="11" cy="3.5" r="1.1" fill="'+G+'"/><circle cx="20.5" cy="14" r="1.1" fill="'+A+'"/>',
    sparkle:'<path d="M10 3l1.8 5.2L17 10l-5.2 1.8L10 17l-1.8-5.2L3 10l5.2-1.8z" fill="'+Y+'" '+st+'/><path d="M18 14l.9 2.1 2.1.9-2.1.9L18 20l-.9-2.1-2.1-.9 2.1-.9z" fill="'+Y+'" '+st+'/>',
    bookR:book(R), bookG:book(G), bookB:book(B), bookY:book(Y), bookD:book(M),
    openbook:'<path d="M12 6.5C9.5 4.8 6.5 4.5 3 5v13.5c3.5-.5 6.5-.2 9 1.5z" fill="'+L+'" '+st+'/><path d="M12 6.5c2.5-1.7 5.5-2 9-1.5v13.5c-3.5-.5-6.5-.2-9 1.5z" fill="'+W+'" '+st+'/><path d="M14.5 9.5c1.5-.6 3-.8 4.5-.7M14.5 13c1.5-.6 3-.8 4.5-.7" '+ln(M,1.4)+'/>',
    memo:'<rect x="3.5" y="3.5" width="12" height="17" rx="1.5" fill="'+W+'" '+st+'/><path d="M6.5 8h6M6.5 11.5h6M6.5 15h3" '+ln(M,1.6)+'/><path d="M20.6 8.4l-7.5 7.5-3.1 1 1-3.1 7.5-7.5z" fill="'+A+'" '+st+'/>',
    speak:'<path d="M3.5 20.5v-3a6.5 6.5 0 1 1 10-5.5l1.6 2.6-1.6.8v2.1h-2.8v3" fill="'+L+'" '+st+'/><path d="M17.5 8.5a4 4 0 0 1 0 5M20 6.5a7 7 0 0 1 0 9" '+ln(D,1.8)+'/>',
    plus:'<path d="M12 5v14M5 12h14" '+ln(D,5.2)+'/><path d="M12 5v14M5 12h14" '+ln(G,2.8)+'/>',
    info:'<circle cx="12" cy="12" r="9" fill="'+B+'" '+st+'/><circle cx="12" cy="7.6" r="1.3" fill="'+W+'"/><path d="M12 11v6" '+ln(W,2.4)+'/>',
    newb:'<rect x="2.5" y="5.5" width="19" height="13" rx="3" fill="'+B+'" '+st+'/><path d="M8.5 15.5v-7l7 7v-7" '+ln(W,2)+'/>',
    zh:'<rect x="3" y="3.5" width="18" height="15" rx="3.5" fill="'+B+'" '+st+'/><path d="M8 18.5l-1 3 4-3" fill="'+B+'" '+st+'/><path d="M8 8.5h8v5H8zM12 6.5v9.5" '+ln(W,1.7)+'/>',
    smile:face('smile'), sad:face('sad'), flat:face('flat'), wow:face('wow'), sleep:face('sleep'), think:face('think'), angry:face('angry'), zip:face('zip'), sick:face('flat','#b9d98a'),
    person:person(B), personA:person(A), personG:person(G), personR:person(R),
    point:'<rect x="3" y="9.5" width="9.5" height="9" rx="2.5" fill="'+L+'" '+st+'/><path d="M11.5 10h8.5a1.7 1.7 0 0 1 0 3.4h-8" fill="'+L+'" '+st+'/>',
    pointUp:'<g transform="rotate(-90 12 12)"><rect x="3" y="9.5" width="9.5" height="9" rx="2.5" fill="'+L+'" '+st+'/><path d="M11.5 10h8.5a1.7 1.7 0 0 1 0 3.4h-8" fill="'+L+'" '+st+'/></g>',
    ear:'<path d="M7.5 9.5a5 5 0 0 1 10 0c0 3-3 4-3 7a3 3 0 0 1-6 0" fill="'+L+'" '+st+'/><path d="M10.5 10a2 2 0 0 1 4 0c0 1.2-1 1.8-1.8 2.6" '+ln(D,1.6)+'/>',
    drop:'<path d="M12 3c3.5 4.5 6 7.8 6 10.8a6 6 0 0 1-12 0C6 10.8 8.5 7.5 12 3z" fill="'+B+'" '+st+'/><path d="M9.3 14.5a2.8 2.8 0 0 0 2 2.4" '+ln(W,1.5)+'/>',
    cloud:'<path d="M7 18.5a4 4 0 0 1-.6-8 5.6 5.6 0 0 1 10.8-1.4 4.7 4.7 0 0 1 .3 9.4z" fill="'+W+'" '+st+'/>',
    news:'<rect x="3" y="4.5" width="18" height="15" rx="2" fill="'+W+'" '+st+'/><rect x="5.8" y="7.5" width="5.5" height="5" fill="'+A+'"/><path d="M13.5 8h4.5M13.5 11.5h4.5M6 15.5h12" '+ln(M,1.6)+'/>',
    flask:'<path d="M9.5 3h5M10.5 3v6.5l-5 8.8a1.6 1.6 0 0 0 1.4 2.4h10.2a1.6 1.6 0 0 0 1.4-2.4l-5-8.8V3" fill="'+W+'" '+st+'/><path d="M7.6 15.5h8.8l1.4 2.8a.9.9 0 0 1-.8 1.4H7a.9.9 0 0 1-.8-1.4z" fill="'+G+'"/>',
    crystal:'<circle cx="12" cy="10.5" r="7" fill="#b9a7e8" '+st+'/><path d="M9 8.5a3.5 3.5 0 0 1 3-2.2" '+ln(W,1.6)+'/><path d="M6.5 21h11l-2-4h-7z" fill="'+L+'" '+st+'/>',
    abc:'<rect x="3" y="3" width="18" height="18" rx="4" fill="'+B+'" '+st+'/><path d="M8 17l4-10 4 10M9.6 13.4h4.8" '+ln(W,2)+'/>',
    nosign:'<circle cx="12" cy="12" r="8.5" fill="'+W+'" stroke="'+R+'" stroke-width="3"/><path d="M6.2 6.2l11.6 11.6" '+ln(R,3)+'/>',
    link:'<rect x="2.5" y="8.5" width="11" height="7" rx="3.5" fill="none" stroke="'+D+'" stroke-width="4.2"/><rect x="10.5" y="8.5" width="11" height="7" rx="3.5" fill="none" stroke="'+D+'" stroke-width="4.2"/><rect x="2.5" y="8.5" width="11" height="7" rx="3.5" fill="none" stroke="'+M+'" stroke-width="2"/><rect x="10.5" y="8.5" width="11" height="7" rx="3.5" fill="none" stroke="'+M+'" stroke-width="2"/>',
    tray:'<path d="M3.5 13.5l2.5-7h12l2.5 7v6h-17z" fill="'+L+'" '+st+'/><path d="M3.5 13.5h5l1 2h5l1-2h5" '+ln(D,1.8)+'/>',
    seeno:'<circle cx="12" cy="12" r="9" fill="'+A+'" '+st+'/><rect x="5.5" y="8" width="13" height="5" rx="2.5" fill="'+L+'" '+st+'/><path d="M10 16.5h4" '+ln(D,1.6)+'/>'
  };

  /* emoji → UI key，或 '@' 開頭＝BOOK_ICONS key */
  var MAP={
    '✅':'ok','☑':'ok','✔':'tick','❌':'no','✖':'no','❎':'no','⚠':'warn','⭐':'star','🌟':'star','💡':'bulb','🔊':'spk','🔈':'spk','🔉':'spk',
    '▶':'play','⏸':'pause','⏹':'stop','⏮':'prev','⏭':'next','⏪':'rew','⏩':'next','📌':'pushpin','⭕':'ring','🟢':'dotG',
    '🔬':'micro','📐':'ruler','📏':'ruler','⏱':'timer','🔁':'repeat','🔄':'repeat','🔀':'repeat','🎉':'party','🎊':'party','✨':'sparkle',
    '📕':'bookR','📗':'bookG','📘':'bookB','📒':'bookY','📓':'bookD','📙':'bookY','📖':'openbook','📝':'memo','🗣':'speak','➕':'plus','ℹ':'info','🆕':'newb','🈶':'zh',
    '🙂':'smile','😊':'smile','😌':'smile','😋':'smile','😀':'smile','😄':'smile','😓':'sad','😩':'sad','😢':'sad','😞':'sad','😐':'flat','😲':'wow','😮':'wow','😴':'sleep','🤔':'think','😤':'angry','😈':'angry','🤐':'zip','🤒':'sick','🤧':'sick','😷':'sick','🙈':'seeno','👅':'smile',
    '🧑':'person','🧍':'person','👨':'person','🤵':'person','🦱':'person','🧒':'personG','👩':'personA','👵':'personR','🙋':'personA','🙅':'personR','🏃':'personG','🚶':'person','🧑\u200D💻':'person','👥':'@people',
    '👉':'point','👆':'pointUp','👂':'ear','💧':'drop','💦':'drop','☁':'cloud','📰':'news','🧪':'flask','🔮':'crystal','🔤':'abc','🚫':'nosign','🔗':'link','📤':'tray','📥':'tray',
    '📚':'@booksL','⏳':'@hourglass','⌛':'@hourglass','🧠':'@brainL','🍽':'@plateL','📦':'@box','🍎':'@apple','🐻':'@bear','🐱':'@paw','🐴':'@paw','🪳':'@paw','🦎':'@paw',
    '💻':'@laptop','✍':'@pencil','✏':'@pencil','🖌':'@pencil','🎨':'@pencil','🧳':'@suitcase','🌧':'@cloudRain','🌦':'@cloudRain','☕':'@coffee','🛒':'@cart',
    '🚆':'@train','🚄':'@train','🚇':'@train','⚙':'@gear','📜':'@doc','📄':'@doc','📃':'@doc','📊':'@chartUp','📈':'@chartUp','📉':'@chartDown','⚖':'@scalesL','📋':'@clipboard','🗂':'@clipboard','📎':'@clipboard',
    '🧴':'@bottleL','🌞':'@sun','☀':'@sun','🌅':'@sun','🏖':'@sun','🏝':'@sun','🌡':'@thermo','📞':'@phone','☎':'@phone','📱':'@phone','📲':'@phone','🏪':'@storeL','🍳':'@pot','🍲':'@pot',
    '🚗':'@car','🚕':'@car','💳':'@card','🗺':'@map','🎬':'@camera','🖼':'@camera','📷':'@camera','🕐':'@clock','🕘':'@clock','🕠':'@clock','🕰':'@clock','💉':'@syringe','🧾':'@receipt',
    '🛠':'@toolboxL','🔧':'@wrench','🔩':'@wrench','🧧':'@redpacket','🩺':'@stethoL','⚕':'@cross','🌿':'@sprout','🌸':'@sprout','🥕':'@sprout','🥬':'@sprout','🧹':'@broomL','🧺':'@basket',
    '💭':'@talk','💬':'@talk','🚧':'@signL','🍱':'@bowl','🥣':'@bowl','🍚':'@rice','🌏':'@globe','🌐':'@globe','🌍':'@globe','🌎':'@globe','🌪':'@tornadoL','🌀':'@typhoon',
    '🛂':'@passport','🛫':'@plane','✈':'@plane','🚀':'@plane','💺':'@sofa','🪑':'@sofa','🔑':'@key','🦺':'@shirt','👔':'@shirt','🎩':'@shirt','🎓':'@gradcap','🏋':'@dumbbell',
    '🏷':'@nametag','📺':'@tv','🎮':'@tv','🍕':'@food','🍔':'@food','🐟':'@fish','🗓':'@calendar','📅':'@calendar','📆':'@calendar','🍞':'@bread','🏙':'@building','🏢':'@building','🏦':'@building',
    '🎫':'@ticket','🎤':'@mic','🎙':'@mic','📣':'@mic','📢':'@mic','🎁':'@gift','🧨':'@firework','🎆':'@firework','🕯':'@candle','🏘':'@house','🏠':'@house','🏡':'@house',
    '📶':'@chartUp','🦠':'@mask','🌩':'@bolt','⚡':'@bolt','💈':'@scissors','🪒':'@scissors','✂':'@scissors','💨':'@wind','🌬':'@wind','🌋':'@mountain','⛰':'@mountain','🏔':'@mountain',
    '🛶':'@ship','🚢':'@ship','🎭':'@facesL','🎵':'@music','🎶':'@music','🔌':'@plug','🚲':'@bike','🛵':'@scooter','🚬':'@flame','🔥':'@flame','🌃':'@moon','🌙':'@moon','👑':'@trophy','🏆':'@trophy','🧩':'@board',
    '🗳':'@ballot','🚐':'@bus','🚌':'@bus','🪞':'@mirror','🥮':'@cake','🎂':'@cake','🛍':'@bag','🎒':'@bag','🛼':'@scooter','🎰':'@coin','🪙':'@coin','💰':'@moneyL','💵':'@moneyL',
    '🪥':'@tooth','🚿':'@faucet','🛏':'@bed','🍝':'@noodles','🍜':'@noodles','🗑':'@trash','🏥':'@hospital','🎯':'@target','🔍':'@search','🔎':'@search','🤝':'@handshake','🏭':'@factory',
    '👁':'@eye','👀':'@eye','⏰':'@alarm','🎧':'@headphones','💼':'@briefcase','📍':'@pin','❓':'@question','❔':'@question','👋':'@thumb','👍':'@thumb','❤':'@heart','💖':'@heart',
    '📧':'@mail','✉':'@mail','📨':'@mail','🔒':'@lock','🔐':'@lock','🛡':'@shield','🚩':'@flag','🏁':'@flag','🔔':'@alarm','💊':'@pill','🧯':'@flame','🚚':'@truck','🚛':'@truck','🔋':'@bolt',
    '🏫':'@school','🍵':'@teacupL','🥤':'@glassL','🍷':'@glassL','🎸':'@guitar','☂':'@umbrella','☔':'@umbrella','❄':'@snow','🌲':'@tree','🌳':'@tree','🍃':'@leaf','🍂':'@leaf','🏮':'@lantern'
  };

  var KEEP=/^[↔↗↘↙↖↕➡⬅⬆⬇©®™‼⁉〰〽]$/;
  var RE=/(?:[\u{1F1E6}-\u{1F1FF}]{2}|\p{Extended_Pictographic}|[\u{1F200}-\u{1F2FF}])(?:\uFE0F|[\u{1F3FB}-\u{1F3FF}])?(?:\u200D\p{Extended_Pictographic}\uFE0F?)*/gu;
  var TEST=/\p{Extended_Pictographic}|[\u{1F200}-\u{1F2FF}]/u;

  var keep=function(e){ return KEEP.test(e.replace(/\uFE0F/g,'')); };
  /* 國旗（🇺🇸 等兩個區域字母）→ 線稿小旗子＋國碼 */
  function flag(e){ var c=Array.from(e).map(function(ch){ return String.fromCharCode(ch.codePointAt(0)-0x1F1E6+65); }).join('');
    return '<path d="M4 3v18.5" '+ln(D,1.8)+'/><path d="M4 4h16v11H4z" fill="'+L+'" '+st+'/><text x="12" y="12.4" text-anchor="middle" font-family="sans-serif" font-size="7" font-weight="700" fill="'+D+'">'+c+'</text>'; }
  function keyOf(e){ var k=MAP[e]; if(k) return k; var b=e.replace(/\uFE0F/g,''); k=MAP[b]; if(k) return k; var first=Array.from(b)[0]; return MAP[first]||null; }
  /* 回傳 {vb, inner}；BOOK_ICONS 還沒載入時回傳 null（保留原 emoji） */
  function art(e){
    if(/^[\u{1F1E6}-\u{1F1FF}]{2}$/u.test(e)) return {vb:'0 0 24 24', inner:flag(e)};
    var k=keyOf(e); if(!k) return null;
    if(k.charAt(0)==='@'){ var I=window.BOOK_ICONS||{}, s=I[k.slice(1)]; return s? {vb:'2 2 60 60', inner:s} : null; }
    return UI[k]? {vb:'0 0 24 24', inner:UI[k]} : null;
  }
  function emoSvg(e,cls){ var a=art(e); if(!a) return null;
    return '<svg class="'+(cls||'emo-ic')+'" viewBox="'+a.vb+'" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">'+a.inner+'</svg>'; }
  /* 字串版：給要直接組 HTML 的地方用 */
  function emoHTML(str){ return String(str).replace(RE,function(e){ if(keep(e)) return e; return emoSvg(e)||e; }); }

  var SKIP='script,style,textarea,option,select,title,noscript,[contenteditable="true"],.no-emo';
  function convText(n){
    var p=n.parentNode; if(!p||!TEST.test(n.data)) return;
    var el=p.nodeType===1?p:null; if(!el) return;
    if(el.closest(SKIP)) return;
    if(el.namespaceURI==='http://www.w3.org/2000/svg'){ svgText(n,el); return; }
    var s=n.data, out='', last=0, hit=false, m; RE.lastIndex=0;
    while((m=RE.exec(s))){ var e=m[0]; if(keep(e)) continue; var h=emoSvg(e); if(!h) continue;
      out+=escT(s.slice(last,m.index))+h; last=m.index+e.length; hit=true; }
    if(!hit) return;
    out+=escT(s.slice(last));
    var t=document.createElement('template'); t.innerHTML=out;
    p.replaceChild(t.content,n);
  }
  function escT(s){ return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
  /* SVG <text> 裡只有一個 emoji（文法插圖 em()）→ 換成同位置、同大小的巢狀 svg */
  function svgText(n,el){
    var t=el.closest('text'); if(!t) return;
    var e=n.data.trim(); RE.lastIndex=0; var m=RE.exec(e);
    /* 跟文字混在一起（例：「⏰ NOW」）：SVG 文字裡塞不進圖，拿掉 emoji、留文字 */
    if(!m||m[0]!==e||t.textContent.trim()!==e){
      var s2=n.data.replace(RE,function(x){ return keep(x)||!art(x)?x:'\u0000'; }).replace(/\u0000\s?/g,'');
      if(s2!==n.data) n.data=s2;
      return;
    }
    if(keep(e)) return;
    var a=art(e); if(!a) return;
    var fs=parseFloat(t.getAttribute('font-size'))||16, x=parseFloat(t.getAttribute('x'))||0, y=parseFloat(t.getAttribute('y'))||0;
    var anc=t.getAttribute('text-anchor')||'start', sz=fs*1.05;
    var X=anc==='middle'?x-sz/2:(anc==='end'?x-sz:x), Y=y-fs*0.88;
    var NS='http://www.w3.org/2000/svg', s=document.createElementNS(NS,'svg');
    s.setAttribute('x',X.toFixed(1)); s.setAttribute('y',Y.toFixed(1)); s.setAttribute('width',sz.toFixed(1)); s.setAttribute('height',sz.toFixed(1));
    s.setAttribute('viewBox',a.vb); s.setAttribute('class','emo-in'); s.innerHTML=a.inner;
    t.parentNode.replaceChild(s,t);
  }
  function walk(root){
    if(!root) return;
    if(root.nodeType===3){ convText(root); return; }
    if(root.nodeType!==1&&root.nodeType!==11) return;
    if(root.nodeType===1&&root.closest&&root.closest(SKIP)) return;
    var tw=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,null), list=[], n;
    while((n=tw.nextNode())) if(TEST.test(n.data)) list.push(n);
    list.forEach(convText);
  }
  function start(){
    walk(document.body);
    new MutationObserver(function(ms){
      for(var i=0;i<ms.length;i++){ var m=ms[i];
        if(m.type==='characterData'){ convText(m.target); continue; }
        for(var j=0;j<m.addedNodes.length;j++) walk(m.addedNodes[j]);
      }
    }).observe(document.body,{childList:true,subtree:true,characterData:true});
    /* '@' 圖示要等 data-book.js 的 BOOK_ICONS；載入前就畫好的再補轉一次 */
    var again=function(){ walk(document.body); };
    document.addEventListener('DOMContentLoaded',again); window.addEventListener('load',again);
  }
  window.EMO_MAP=MAP; window.EMO_UI=UI; window.emoSvg=emoSvg; window.emoHTML=emoHTML; window.emoKeep=KEEP;
  if(typeof document!=='undefined'&&document.body) start();
  else if(typeof document!=='undefined') document.addEventListener('DOMContentLoaded',start);
})();
