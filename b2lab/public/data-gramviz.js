// ============================================================
// 文法圖文說明（全部由本站以 SVG 原創繪製，仿「Gone to / Been to」
// 兩格對照卡的風格：左右各一格，上方藍色標題膠囊、中間圖、下方例句與中文）
// key = 文法單元 id；svg = 內嵌 SVG；cap = 圖說（中文）
// ============================================================
window.GRAMVIZ=(function(){

/* ---------- 小工具 ---------- */
const head=(x,y,ang,c)=>'<g transform="translate('+x+','+y+') rotate('+ang+')"><path d="M0 0 L-13 -6.5 L-13 6.5 Z" fill="'+(c||'#5b8fc0')+'"/></g>';
const dash=(d,c)=>'<path d="'+d+'" fill="none" stroke="'+(c||'#5b8fc0')+'" stroke-width="3.5" stroke-dasharray="8 8" stroke-linecap="round"/>';
const bub=(x,y,t,w)=>'<rect x="'+(x-w/2)+'" y="'+(y-17)+'" width="'+w+'" height="32" rx="15" fill="#fff" stroke="#2b5f92" stroke-width="2"/>'
  +'<text x="'+x+'" y="'+(y+5)+'" text-anchor="middle" font-size="14.5" font-weight="800" fill="#2b5f92">'+t+'</text>';
const em=(x,y,s,t)=>'<text x="'+x+'" y="'+y+'" text-anchor="middle" font-size="'+s+'">'+t+'</text>';
/* 時間軸：過去 ──────▶ 未來，NOW 在 x=210 */
const tl=y=>'<line x1="26" y1="'+y+'" x2="284" y2="'+y+'" stroke="#8aa8bf" stroke-width="3"/>'+head(296,y,0,'#8aa8bf')
  +'<text x="28" y="'+(y+24)+'" font-size="12.5" font-weight="700" fill="#7c8b96">過去</text>'
  +'<text x="262" y="'+(y+24)+'" font-size="12.5" font-weight="700" fill="#7c8b96">未來</text>'
  +'<line x1="210" y1="'+(y-13)+'" x2="210" y2="'+(y+13)+'" stroke="#d9534f" stroke-width="3.5"/>'
  +'<text x="210" y="'+(y-21)+'" text-anchor="middle" font-size="13.5" font-weight="900" fill="#d9534f">NOW</text>';

function side(ox,p){
  let s='<g transform="translate('+ox+',0)">'
   +'<rect x="'+(160-p.pw/2)+'" y="14" width="'+p.pw+'" height="32" rx="16" fill="#2b5f92"/>'
   +'<text x="160" y="36" text-anchor="middle" font-size="16" font-weight="800" fill="#fff">'+p.title+'</text>'
   +'<g transform="translate(0,-34)">'+p.draw+'</g>'
   +'<text x="160" y="236" text-anchor="middle" font-size="15.5" font-weight="800" fill="#1c3d5a">'+p.en+'</text>'
   +'<text x="160" y="258" text-anchor="middle" font-size="13" font-weight="700" fill="#4a5b68">'+p.cn+'</text>';
  if(p.cn2) s+='<text x="160" y="276" text-anchor="middle" font-size="13" font-weight="700" fill="#4a5b68">'+p.cn2+'</text>';
  return s+'</g>';
}
function card(p1,p2,cap){
  return {cap:cap, svg:'<svg viewBox="0 0 640 288" xmlns="http://www.w3.org/2000/svg" font-family="-apple-system,Segoe UI,Noto Sans TC,PingFang TC,Microsoft JhengHei,sans-serif">'
   +'<rect x="2" y="2" width="636" height="284" rx="18" fill="#eef6fc" stroke="#bcd8ec" stroke-width="2"/>'
   +'<line x1="320" y1="18" x2="320" y2="272" stroke="#bcd8ec" stroke-width="2" stroke-dasharray="6 6"/>'
   +side(0,p1)+side(320,p2)+'</svg>'};
}

const V={};

/* ---------- 現在進行式 vs 現在簡單式 ---------- */
V.nowVsAlways=card(
 {pw:170,title:'I am doing',
  draw:em(120,168,58,'🧑‍💻')
   +'<path d="M158 122 q14 -12 28 0 M162 138 q12 -10 24 0" fill="none" stroke="#e8913a" stroke-width="3" stroke-linecap="round"/>'
   +bub(226,110,'⏰ NOW',96)
   +'<text x="160" y="226" text-anchor="middle" font-size="14" font-weight="800" fill="#c9631f">講話的這一刻正在做</text>',
  en:'She is working now.', cn:'現在正在進行（等一下可能就停了）'},
 {pw:150,title:'I do',
  draw:(function(){
    const wd=['一','二','三','四','五','六','日'];
    let s='';
    wd.forEach((w,i)=>{
      const x=40+i*36;
      s+='<rect x="'+(x-15)+'" y="120" width="30" height="34" rx="6" fill="#fff" stroke="#8aa8bf" stroke-width="2"/>'
       +'<text x="'+x+'" y="112" text-anchor="middle" font-size="12" font-weight="700" fill="#7c8b96">'+w+'</text>'
       +'<text x="'+x+'" y="144" text-anchor="middle" font-size="16" font-weight="900" fill="#2f9e5f">✓</text>';
    });
    return s+'<text x="160" y="196" text-anchor="middle" font-size="14" font-weight="800" fill="#c9631f">每天都這樣（習慣、常態）</text>';
  })(),
  en:'She works every day.', cn:'平常的習慣，不一定此刻正在做'},
 '左邊：am/is/are + V-ing，講「這一刻」；右邊：現在簡單式，講「平常都這樣」。同一件事，看你想說的是哪一種。');
['g02','ga01'].forEach(k=>V[k]=V.nowVsAlways);

/* ---------- 過去進行式（背景）vs 過去簡單式（發生的事） ---------- */
V.pastBg=card(
 {pw:190,title:'was doing 背景',
  draw:tl(210)
   +'<rect x="60" y="150" width="150" height="26" rx="13" fill="#f0b04e" opacity=".55"/>'
   +'<text x="135" y="168" text-anchor="middle" font-size="13.5" font-weight="800" fill="#7a4a08">was watching TV</text>'
   +em(70,128,40,'📺'),
  en:'I was watching TV.', cn:'比較長的「背景」動作（進行中）'},
 {pw:190,title:'simple past 事件',
  draw:tl(210)
   +'<line x1="135" y1="150" x2="135" y2="182" stroke="#d9534f" stroke-width="4"/>'
   +em(135,128,40,'📞')
   +'<text x="135" y="145" text-anchor="middle" font-size="0"> </text>'
   +bub(210,120,'⚡ 突然！',100),
  en:'The phone rang.', cn:'在背景中「突然發生」的短動作'},
 '背景（比較長）用過去進行式，發生的事（比較短）用過去簡單式：While I was watching TV, the phone rang.');
V.g03=V.pastBg;

/* ---------- have gone to vs have been to ---------- */
V.goneBeen=card(
 {pw:150,title:'gone to',
  draw:em(56,150,44,'🏠')
   +dash('M84 132 Q160 84 234 122')+head(240,126,32)
   +em(250,150,46,'🍕')
   +em(250,214,44,'🧍')
   +bub(145,206,'Still here! 還在那裡',160),
  en:'James has gone to Italy.', cn:'去了「還沒回來」，人現在在義大利'},
 {pw:150,title:'been to',
  draw:em(250,150,46,'🍕')
   +dash('M84 128 Q160 80 226 116','#2f9e5f')+head(232,120,32,'#2f9e5f')
   +dash('M226 176 Q160 216 88 182','#2f9e5f')+head(82,178,205,'#2f9e5f')
   +em(56,150,44,'🏠')
   +em(56,214,44,'🙋')
   +bub(166,214,'Back home! 回來了',170),
  en:'Amy has been to Italy.', cn:'「去過」已經回來，講的是經驗'},
 'gone to＝去了還沒回來（人在那裡）；been to＝去過已經回來（經驗）。差一個字，人在哪裡完全不同。');
V.g04=V.goneBeen;

/* ---------- have been doing vs have done ---------- */
V.hbdHd=card(
 {pw:220,title:'have been doing',
  draw:tl(214)
   +'<rect x="80" y="154" width="130" height="26" rx="13" fill="#f0b04e" opacity=".6"/>'
   +'<path d="M80 146 L80 138 L210 138 L210 146" fill="none" stroke="#c9631f" stroke-width="2.5"/>'
   +'<text x="145" y="130" text-anchor="middle" font-size="13.5" font-weight="900" fill="#c9631f">for 3 hours 持續三小時</text>'
   +em(50,100,34,'🖌️'),
  en:'I have been painting for 3 hours.', cn:'重點是「持續了多久」，', cn2:'通常還在做或剛剛才停'},
 {pw:170,title:'have done',
  draw:tl(214)
   +em(140,150,52,'🖼️')
   +'<circle cx="196" cy="140" r="20" fill="#2f9e5f"/>'
   +'<text x="196" y="148" text-anchor="middle" font-size="22" font-weight="900" fill="#fff">✓</text>'
   +'<text x="160" y="84" text-anchor="middle" font-size="13.5" font-weight="800" fill="#1f8a4c">做完了！看得到結果</text>',
  en:'I have painted the wall.', cn:'重點是「完成的結果」，', cn2:'牆已經漆好了'},
 '完成進行式問「做多久了」（過程），完成式問「做完了沒」（結果）。How long → have been doing；How many/much → have done。');
V.dg20260813=V.hbdHd;

/* ---------- -ed vs -ing 形容詞 ---------- */
V.edIng=card(
 {pw:190,title:'-ed 人的感覺',
  draw:em(160,168,60,'😩')
   +bub(160,222,'I feel… 我覺得…',160),
  en:'I am bored.', cn:'-ed 形容「人」的感覺：我覺得無聊'},
 {pw:210,title:'-ing 事物的性質',
  draw:em(160,164,56,'📺')
   +'<text x="216" y="120" font-size="24" font-weight="800" fill="#8aa8bf">z z Z</text>'
   +bub(160,222,'It makes me… 它讓人…',196),
  en:'The movie is boring.', cn:'-ing 形容「造成感覺的東西」：電影很無聊'},
 '感覺在「人」身上用 -ed（bored / tired / surprised）；讓人產生感覺的「事物」用 -ing（boring / tiring / surprising）。說 I am boring 等於說「我這個人很無趣」！');
V.g07=V.edIng;

/* ---------- 主動 vs 被動 ---------- */
V.passive=card(
 {pw:170,title:'主動 Active',
  draw:em(76,158,52,'🐱')
   +dash('M110 140 L212 140','#c9631f')+head(222,140,0,'#c9631f')
   +em(252,158,44,'🐟')
   +'<text x="160" y="196" text-anchor="middle" font-size="14" font-weight="800" fill="#c9631f">重點：誰做的（貓）</text>',
  en:'The cat ate the fish.', cn:'知道也想強調「做的人」'},
 {pw:170,title:'被動 Passive',
  draw:'<circle cx="120" cy="146" r="46" fill="#fff" stroke="#8b5cf6" stroke-width="3"/>'
   +em(120,162,46,'🐟')
   +'<g opacity=".35">'+em(244,158,40,'🐱')+'</g>'
   +'<text x="244" y="196" text-anchor="middle" font-size="12.5" font-weight="700" fill="#7c8b96">(by the cat) 可省略</text>'
   +'<text x="120" y="214" text-anchor="middle" font-size="14" font-weight="800" fill="#6d3fd4">重點：發生了什麼事</text>',
  en:'The fish was eaten.', cn:'誰做的不重要、不知道，或想把焦點放在受詞'},
 '主動句焦點在「做的人」，被動句（be + p.p.）把焦點移到「被影響的東西」。新聞與正式文章特別常用被動。');
V.g09=V.passive;

/* ---------- B1 每日：現在進行式 vs 現在簡單式（同 nowVsAlways） ---------- */
V.dg20260814b1=V.nowVsAlways;

/* ---------- B2：正式與敘事語境中的現在式 ---------- */
V.dg20260814b2=card(
 {pw:190,title:'新聞標題 簡單式',
  draw:'<rect x="46" y="104" width="228" height="112" rx="10" fill="#fff" stroke="#8aa8bf" stroke-width="2.5"/>'
   +'<rect x="46" y="104" width="228" height="30" rx="10" fill="#2b5f92"/>'
   +'<text x="160" y="125" text-anchor="middle" font-size="14" font-weight="900" fill="#fff">DAILY NEWS</text>'
   +'<text x="160" y="164" text-anchor="middle" font-size="16" font-weight="900" fill="#1c3d5a">Typhoon Hits Coast</text>'
   +'<line x1="66" y1="182" x2="254" y2="182" stroke="#c9d6e2" stroke-width="5"/>'
   +'<line x1="66" y1="196" x2="230" y2="196" stroke="#c9d6e2" stroke-width="5"/>'
   +'<text x="160" y="242" text-anchor="middle" font-size="14" font-weight="800" fill="#c9631f">標題永遠用簡單式，短而有力</text>',
  en:'Typhoon Hits Coast', cn:'新聞標題：簡單式（不是 is hitting）'},
 {pw:190,title:'敘事場景 進行式',
  draw:em(120,166,54,'🌧️')+em(212,166,50,'🌬️')
   +'<rect x="60" y="196" width="200" height="24" rx="12" fill="#f0b04e" opacity=".55"/>'
   +'<text x="160" y="213" text-anchor="middle" font-size="13" font-weight="800" fill="#7a4a08">畫面在你眼前展開…</text>'
   +'<text x="160" y="248" text-anchor="middle" font-size="14" font-weight="800" fill="#c9631f">把讀者拉進「正在發生」的現場</text>',
  en:'Rain is falling. Wind is blowing.', cn:'說故事、描寫場景：進行式最生動'},
 '正式報告與新聞標題用簡單式（客觀、永恆感）；小說與遊記描寫現場用進行式（身歷其境）。同一個現在式，語境不同選擇就不同。');

/* ---------- A2：過去簡單式 ---------- */
V.ga02=card(
 {pw:170,title:'昨天發生了',
  draw:tl(214)
   +'<line x1="100" y1="152" x2="100" y2="184" stroke="#d9534f" stroke-width="4"/>'
   +em(100,130,40,'🤒')
   +'<text x="100" y="242" text-anchor="middle" font-size="13" font-weight="800" fill="#7c8b96">yesterday</text>'
   +'<text x="160" y="76" text-anchor="middle" font-size="14" font-weight="800" fill="#c9631f">事情發生「在過去」，已經結束</text>',
  en:'I had a headache last night.', cn:'動詞變過去式：have → had'},
 {pw:190,title:'疑問與否定用 did',
  draw:bub(160,130,'Did you see the doctor?',252)
   +em(96,196,48,'🙅')
   +'<text x="196" y="188" text-anchor="middle" font-size="15.5" font-weight="900" fill="#1c3d5a">didn&#39;t + 原形</text>'
   +'<text x="196" y="212" text-anchor="middle" font-size="13.5" font-weight="700" fill="#4a5b68">I didn&#39;t finish it.</text>'
   +'<text x="160" y="252" text-anchor="middle" font-size="14" font-weight="800" fill="#c9631f">did 出場，動詞就變回原形</text>',
  en:'Did you…? / I didn&#39;t…', cn:'疑問、否定交給 did，動詞用原形'},
 '過去簡單式：動詞變過去式（had / went / saw）。要問「有沒有」或說「沒有」時用 did / didn&#39;t，後面的動詞變回原形——不能說 didn&#39;t finished。');

/* ---------- A2：there is / are 與 some / any ---------- */
V.ga03=card(
 {pw:210,title:'there is / there are',
  draw:em(96,152,48,'🏪')
   +'<text x="96" y="196" text-anchor="middle" font-size="13.5" font-weight="800" fill="#2b5f92">There is a store</text>'
   +em(212,146,40,'🚌')+em(248,146,40,'🚌')
   +'<text x="230" y="196" text-anchor="middle" font-size="13.5" font-weight="800" fill="#2b5f92">There are two buses</text>'
   +'<text x="160" y="240" text-anchor="middle" font-size="14" font-weight="800" fill="#c9631f">一個 is，兩個以上 are</text>',
  en:'There is… / There are…', cn:'「有…」：單數 is、複數 are'},
 {pw:170,title:'some / any',
  draw:'<text x="88" y="136" text-anchor="middle" font-size="34">🍚</text>'
   +'<text x="88" y="176" text-anchor="middle" font-size="14" font-weight="800" fill="#1f8a4c">✓ some：肯定句</text>'
   +'<text x="88" y="196" text-anchor="middle" font-size="12.5" font-weight="700" fill="#4a5b68">I need some rice.</text>'
   +'<text x="232" y="136" text-anchor="middle" font-size="34">🚫</text>'
   +'<text x="232" y="176" text-anchor="middle" font-size="14" font-weight="800" fill="#c0392b">any：否定、疑問</text>'
   +'<text x="232" y="196" text-anchor="middle" font-size="12.5" font-weight="700" fill="#4a5b68">They don&#39;t have any rice.</text>'
   +'<text x="160" y="240" text-anchor="middle" font-size="14" font-weight="800" fill="#c9631f">數不清的東西兩個都能用</text>',
  en:'some ↔ any', cn:'肯定用 some；否定、疑問用 any'},
 'There is + 單數、There are + 複數。some 用在肯定句，any 用在否定句和問句：Is there any milk? — Yes, there is some.');

/* ---------- B1：八大時態總覽 ---------- */
V.g01=card(
 {pw:170,title:'簡單式家族',
  draw:tl(196)
   +'<line x1="80" y1="182" x2="80" y2="210" stroke="#2b5f92" stroke-width="4"/>'
   +'<text x="80" y="170" text-anchor="middle" font-size="13.5" font-weight="900" fill="#2b5f92">did</text>'
   +'<line x1="210" y1="182" x2="210" y2="210" stroke="#2f9e5f" stroke-width="4"/>'
   +'<text x="210" y="146" text-anchor="middle" font-size="13.5" font-weight="900" fill="#2f9e5f">do / does</text>'
   +'<line x1="268" y1="182" x2="268" y2="210" stroke="#8b5cf6" stroke-width="4"/>'
   +'<text x="268" y="170" text-anchor="middle" font-size="13.5" font-weight="900" fill="#8b5cf6">will do</text>'
   +'<text x="160" y="244" text-anchor="middle" font-size="14" font-weight="800" fill="#c9631f">一個「點」：事實、習慣、事件</text>',
  en:'did → do → will do', cn:'過去、現在、未來各是一個點'},
 {pw:170,title:'進行式家族',
  draw:tl(196)
   +'<rect x="52" y="176" width="60" height="20" rx="10" fill="#2b5f92" opacity=".45"/>'
   +'<text x="82" y="166" text-anchor="middle" font-size="13" font-weight="900" fill="#2b5f92">was doing</text>'
   +'<rect x="182" y="176" width="56" height="20" rx="10" fill="#2f9e5f" opacity=".45"/>'
   +'<text x="210" y="146" text-anchor="middle" font-size="13" font-weight="900" fill="#2f9e5f">am doing</text>'
   +'<rect x="242" y="176" width="56" height="20" rx="10" fill="#8b5cf6" opacity=".45"/>'
   +'<text x="274" y="166" text-anchor="middle" font-size="13" font-weight="900" fill="#8b5cf6">will be doing</text>'
   +'<text x="160" y="244" text-anchor="middle" font-size="14" font-weight="800" fill="#c9631f">一段「線」：那個時間正在做</text>',
  en:'was doing → am doing', cn:'把動作拉成一段正在進行的線'},
 '八大時態＝三個時間（過去／現在／未來）×「點或線」再加上完成式。簡單式是點，進行式是線；完成式（have done）則是「到某個時間點為止」的累積。先抓住點和線，其他就好懂了。');

/* ---------- B1+：used to / be used to / would ---------- */
V.g05=card(
 {pw:170,title:'used to 以前會',
  draw:em(120,150,50,'🚬')
   +'<line x1="88" y1="120 " x2="152" y2="178" stroke="#d9534f" stroke-width="6" stroke-linecap="round"/>'
   +'<text x="224" y="156" text-anchor="middle" font-size="30">➡️</text>'
   +em(224,208,40,'🙂')
   +'<text x="160" y="248" text-anchor="middle" font-size="14" font-weight="800" fill="#c9631f">過去有的習慣，現在沒有了</text>',
  en:'I used to smoke.', cn:'以前抽菸（現在戒了）'},
 {pw:210,title:'be used to 習慣了',
  draw:em(120,152,50,'🌃')+em(200,152,46,'💻')
   +bub(160,214,'No problem! 已經習慣',210),
  en:'I&#39;m used to working late.', cn:'be used to + V-ing：已經適應了'},
 'used to + 原形＝過去的習慣（現在沒了）；be used to + V-ing＝已經習慣、適應了。另外 would 也能講過去反覆做的事（When I was a kid, we would swim…），但狀態動詞只能用 used to。');

/* ---------- B1+：使役動詞 make / have / let / get ---------- */
V.g06=card(
 {pw:170,title:'make 強制',
  draw:em(96,148,52,'👨‍💼')
   +'<path d="M132 140 L196 140" stroke="#d9534f" stroke-width="4" stroke-linecap="round"/>'+head(206,140,0,'#d9534f')
   +em(240,152,46,'😓')
   +'<text x="160" y="212" text-anchor="middle" font-size="14.5" font-weight="900" fill="#c0392b">make + 人 + 原形</text>'
   +'<text x="160" y="240" text-anchor="middle" font-size="13" font-weight="700" fill="#4a5b68">不能加 to！</text>',
  en:'She made me redo it.', cn:'強迫、不做不行'},
 {pw:150,title:'let 允許',
  draw:'<rect x="196" y="108" width="16" height="112" rx="4" fill="#8aa8bf"/>'
   +'<rect x="130" y="108" width="70" height="112" rx="6" fill="#d7ead9" stroke="#2f9e5f" stroke-width="3"/>'
   +em(96,180,48,'🧒')
   +'<path d="M120 166 L172 166" stroke="#2f9e5f" stroke-width="4" stroke-linecap="round"/>'+head(182,166,0,'#2f9e5f')
   +'<text x="160" y="256" text-anchor="middle" font-size="14.5" font-weight="900" fill="#1f8a4c">let + 人 + 原形</text>',
  en:'Mom let me go out.', cn:'允許、開綠燈'},
 '四個使役動詞force感由強到弱：make（強迫）> have（交辦）> get（說服，要加 to）> let（允許）。make/have/let 後面接原形動詞，只有 get 要加 to：get him to help。');

/* ---------- B2：假設語氣 If 句型 ---------- */
V.g08=card(
 {pw:190,title:'真實條件 第一類',
  draw:em(110,146,48,'☀️')
   +'<path d="M142 138 L200 138" stroke="#2f9e5f" stroke-width="4" stroke-linecap="round"/>'+head(210,138,0,'#2f9e5f')
   +em(244,150,46,'🏖️')
   +'<text x="160" y="204" text-anchor="middle" font-size="14.5" font-weight="900" fill="#1f8a4c">If + 現在式, will + 原形</text>'
   +'<text x="160" y="240" text-anchor="middle" font-size="14" font-weight="800" fill="#c9631f">很可能發生，是真的在計畫</text>',
  en:'If it&#39;s sunny, I&#39;ll go.', cn:'第一類：有機會成真'},
 {pw:190,title:'與事實相反 第二類',
  draw:'<circle cx="160" cy="150" r="52" fill="#fff" stroke="#8b5cf6" stroke-width="3" stroke-dasharray="7 6"/>'
   +em(160,166,46,'🏝️')
   +'<text x="160" y="222" text-anchor="middle" font-size="14.5" font-weight="900" fill="#6d3fd4">If + 過去式, would + 原形</text>'
   +'<text x="160" y="248" text-anchor="middle" font-size="14" font-weight="800" fill="#c9631f">只是想像——現在其實沒有</text>',
  en:'If I had time, I would go.', cn:'第二類：白日夢（其實沒時間）'},
 '第一類（If + 現在式 → will）講「可能成真」的條件；第二類（If + 過去式 → would）講「跟現在事實相反」的想像。注意：第二類的過去式不是過去，是「不真實」的記號，be 動詞常用 were：If I were you…');

/* ---------- B2：關係子句 ---------- */
V.g10=card(
 {pw:210,title:'限定：指認是哪一個',
  draw:'<g opacity=".3">'+em(80,150,46,'🧍')+'</g>'
   +'<circle cx="160" cy="146" r="40" fill="#fff8ec" stroke="#e8813a" stroke-width="3"/>'
   +em(160,158,44,'🧍')+em(160,116,26,'🎩')
   +'<g opacity=".3">'+em(240,150,46,'🧍')+'</g>'
   +'<text x="160" y="222" text-anchor="middle" font-size="14" font-weight="800" fill="#c9631f">三個人裡「戴帽子的那一個」</text>',
  en:'the man who is wearing a hat', cn:'限定子句：不加逗號，缺它就不知道是誰'},
 {pw:210,title:'非限定：補充說明',
  draw:em(140,152,52,'👨')
   +bub(202,110,'住台北',86)
   +'<text x="160" y="216" text-anchor="middle" font-size="14.5" font-weight="900" fill="#2b5f92">, who lives in Taipei,</text>'
   +'<text x="160" y="244" text-anchor="middle" font-size="14" font-weight="800" fill="#c9631f">只有一個爸爸，順便多說一句</text>',
  en:'my father, who lives in Taipei', cn:'非限定子句：加逗號，拿掉也知道是誰'},
 '限定子句（不加逗號）幫你「指認是哪一個」；非限定子句（加逗號）只是補充資訊。非限定不能用 that：my father, that lives…（✗）。who 指人、which 指物、that 兩者都可（限定時）。');

/* ---------- B2：分詞構句與倒裝 ---------- */
V.g11=card(
 {pw:170,title:'分詞構句 壓縮',
  draw:'<rect x="52" y="112" width="216" height="30" rx="15" fill="#fff" stroke="#8aa8bf" stroke-width="2"/>'
   +'<text x="160" y="132" text-anchor="middle" font-size="12" font-weight="700" fill="#7c8b96">While I was walking home, I saw…</text>'
   +'<path d="M160 150 L160 172" stroke="#c9631f" stroke-width="3.5"/>'+head(160,180,90,'#c9631f')
   +'<rect x="76" y="188" width="168" height="30" rx="15" fill="#fff4e2" stroke="#e8813a" stroke-width="2.5"/>'
   +'<text x="160" y="208" text-anchor="middle" font-size="13" font-weight="900" fill="#c9631f">Walking home, I saw…</text>'
   +'<text x="160" y="248" text-anchor="middle" font-size="13.5" font-weight="800" fill="#c9631f">同主詞的兩句 → 砍掉連接詞和主詞</text>',
  en:'Walking home, I saw a cat.', cn:'V-ing 開頭：兩件事、同一個主詞'},
 {pw:150,title:'倒裝 強調',
  draw:em(160,150,54,'😲')
   +'<text x="160" y="204" text-anchor="middle" font-size="15" font-weight="900" fill="#6d3fd4">Never have I seen…</text>'
   +'<text x="160" y="228" text-anchor="middle" font-size="12.5" font-weight="700" fill="#4a5b68">（否定詞開頭，主詞動詞對調）</text>'
   +'<text x="160" y="252" text-anchor="middle" font-size="13.5" font-weight="800" fill="#c9631f">把 Never 甩到句首，語氣加倍</text>',
  en:'Never have I seen such rain!', cn:'倒裝：戲劇化的強調'},
 '分詞構句：兩句同主詞時，把其中一句壓成 V-ing（被動用 p.p.）。倒裝：Never / Rarely / Not only 放句首時，後面要像問句一樣把助動詞提前。兩個都是書面語的進階招式。');

/* ---------- B2：連接與轉折 ---------- */
V.g12=card(
 {pw:170,title:'although 讓步',
  draw:em(110,144,48,'🌧️')
   +'<text x="160" y="150" text-anchor="middle" font-size="26" font-weight="900" fill="#8aa8bf">↛</text>'
   +em(220,148,46,'🏃')
   +'<text x="160" y="206" text-anchor="middle" font-size="14" font-weight="800" fill="#c9631f">下雨「照樣」出門——出乎意料</text>',
  en:'Although it rained, I went out.', cn:'讓步：前後結果相反'},
 {pw:170,title:'because / so 因果',
  draw:em(110,144,48,'🌧️')
   +'<path d="M142 138 L196 138" stroke="#2b5f92" stroke-width="4" stroke-linecap="round"/>'+head(206,138,0)
   +em(240,148,46,'🏠')
   +'<text x="160" y="206" text-anchor="middle" font-size="14" font-weight="800" fill="#c9631f">下雨「所以」待在家——順理成章</text>',
  en:'It rained, so I stayed home.', cn:'因果：原因直接導向結果'},
 '因果用 because / so（一句只能用一個，不能 Because…so… 連用）；出乎意料的對比用 although / even though；書面對比還有 however / therefore，記得前面用句號或分號。');

/* ---------- B2：轉述句 ---------- */
V.g13=card(
 {pw:170,title:'直接引述',
  draw:em(96,160,52,'👩')
   +bub(210,120,'“I am tired.”',150)
   +'<text x="160" y="220" text-anchor="middle" font-size="14" font-weight="800" fill="#c9631f">當場原話，加引號</text>',
  en:'“I am tired,” she said.', cn:'一字不改抄下來'},
 {pw:170,title:'轉述句',
  draw:em(96,160,52,'🧑')
   +'<path d="M130 148 L200 148" stroke="#8aa8bf" stroke-width="3.5" stroke-linecap="round"/>'+head(210,148,0,'#8aa8bf')
   +'<text x="238" y="132" text-anchor="middle" font-size="13.5" font-weight="900" fill="#2b5f92">am → was</text>'
   +'<text x="238" y="156" text-anchor="middle" font-size="26">⏪</text>'
   +'<text x="160" y="220" text-anchor="middle" font-size="14" font-weight="800" fill="#c9631f">時態往回退一格</text>',
  en:'She said she was tired.', cn:'轉述時 am→was、will→would'},
 '把別人的話轉述出去：時態退一格（am→was、do→did、will→would、can→could），人稱跟著改（I→she）。問句轉述要變回直述語序：He asked where I lived（不是 where did I live）。');

/* ---------- B1+：比較級、最高級與倍數 ---------- */
V.g14=card(
 {pw:190,title:'比較級 -er / more',
  draw:em(110,178,46,'🧍')
   +'<text x="110" y="216" text-anchor="middle" font-size="12" font-weight="700" fill="#7c8b96">160cm</text>'
   +em(212,166,58,'🧍')
   +'<text x="212" y="216" text-anchor="middle" font-size="12" font-weight="700" fill="#7c8b96">180cm</text>'
   +'<text x="160" y="92" text-anchor="middle" font-size="15" font-weight="900" fill="#2b5f92">taller than</text>'
   +'<text x="160" y="248" text-anchor="middle" font-size="14" font-weight="800" fill="#c9631f">兩個東西比：比較級 + than</text>',
  en:'He is taller than me.', cn:'兩者相比：-er / more ~ + than'},
 {pw:190,title:'最高級 the -est',
  draw:em(90,182,40,'🧍')+em(160,170,50,'🧍')+em(232,158,60,'🧍')
   +em(232,112,30,'👑')
   +'<text x="160" y="248" text-anchor="middle" font-size="14" font-weight="800" fill="#c9631f">三個以上挑第一名：the + 最高級</text>',
  en:'He is the tallest of the three.', cn:'三者以上：the -est / the most ~'},
 '兩個比用比較級＋than；三個以上用 the＋最高級。倍數放在比較級前面：three times bigger than／twice as big as。「越來越…」用比較級疊字：It&#39;s getting hotter and hotter.');

/* ---------- B2：情態動詞的推測語氣 ---------- */
V.g15=card(
 {pw:170,title:'must be 九成確定',
  draw:'<rect x="118" y="108" width="84" height="96" rx="10" fill="#fff" stroke="#8aa8bf" stroke-width="2.5"/>'
   +'<rect x="130" y="120" width="60" height="50" rx="6" fill="#ffe9a8" stroke="#e8b13a" stroke-width="2"/>'
   +em(160,152,30,'💡')
   +'<text x="160" y="228" text-anchor="middle" font-size="15" font-weight="900" fill="#1f8a4c">must be ≈ 90%</text>'
   +'<text x="160" y="252" text-anchor="middle" font-size="13.5" font-weight="800" fill="#c9631f">燈亮著——他一定在家</text>',
  en:'He must be home.', cn:'有依據的推論：一定是'},
 {pw:190,title:'might be 五五波',
  draw:em(120,150,50,'🤔')
   +'<text x="212" y="132" text-anchor="middle" font-size="34" font-weight="900" fill="#8b5cf6">?</text>'
   +'<text x="244" y="164" text-anchor="middle" font-size="26" font-weight="900" fill="#c9b8f0">?</text>'
   +'<text x="160" y="228" text-anchor="middle" font-size="15" font-weight="900" fill="#6d3fd4">may / might ≈ 50%</text>'
   +'<text x="160" y="252" text-anchor="middle" font-size="13.5" font-weight="800" fill="#c9631f">可能在、可能不在</text>',
  en:'He might be home.', cn:'不確定的猜測：可能是'},
 '推測的確定度：must be（90%，一定是）> may / might / could be（50%，可能是）> can&#39;t be（90% 確定「不是」）。過去的推測用 must have + p.p.：He must have missed the bus.');

/* ---------- A2：現在進行式（基礎）—— be + V-ing 兩塊缺一不可 ---------- */
V.dg20260814a2=card(
 {pw:190,title:'be ＋ V-ing',
  draw:'<rect x="52" y="118" width="98" height="52" rx="12" fill="#2b5f92"/>'
   +'<text x="101" y="150" text-anchor="middle" font-size="17" font-weight="900" fill="#fff">am / is / are</text>'
   +'<text x="163" y="152" text-anchor="middle" font-size="26" font-weight="900" fill="#c9631f">＋</text>'
   +'<rect x="176" y="118" width="92" height="52" rx="12" fill="#e8913a"/>'
   +'<text x="222" y="150" text-anchor="middle" font-size="18" font-weight="900" fill="#fff">V-ing</text>'
   +'<text x="160" y="212" text-anchor="middle" font-size="14" font-weight="800" fill="#c9631f">兩塊都要有，缺一塊就不成立</text>'
   +em(160,254,34,'🧩'),
  en:'She is talking now.', cn:'be 動詞＋動詞-ing，一組出現'},
 {pw:170,title:'少一塊就錯',
  draw:'<text x="160" y="128" text-anchor="middle" font-size="16" font-weight="800" fill="#c0392b">✗ She talking.</text>'
   +'<text x="160" y="156" text-anchor="middle" font-size="12.5" font-weight="700" fill="#7c8b96">（少了 be）</text>'
   +'<text x="160" y="192" text-anchor="middle" font-size="16" font-weight="800" fill="#c0392b">✗ She is talk.</text>'
   +'<text x="160" y="220" text-anchor="middle" font-size="12.5" font-weight="700" fill="#7c8b96">（少了 -ing）</text>'
   +'<text x="160" y="256" text-anchor="middle" font-size="16.5" font-weight="900" fill="#1f8a4c">✓ She is talking.</text>',
  en:'✓ She is talking.', cn:'be 和 -ing 都到齊才是進行式'},
 '現在進行式＝be（am/is/are）＋動詞-ing，講「現在這一刻正在做的事」。兩塊缺一不可：She talking（✗ 少 be）、She is talk（✗ 少 -ing）。主詞換了，be 也要跟著換：I am / She is / They are。');

/* ---------- B1+：現在進行式的進階用法 —— 暫時狀態與已敲定的未來 ---------- */
V.dg20260814=card(
 {pw:210,title:'暫時狀態 this month',
  draw:tl(210)
   +'<rect x="150" y="150" width="120" height="24" rx="12" fill="#f0b04e" opacity=".6"/>'
   +'<text x="210" y="167" text-anchor="middle" font-size="12.5" font-weight="800" fill="#7a4a08">this month 這陣子</text>'
   +em(56,164,32,'🏠')+em(92,148,22,'🧳')
   +'<text x="190" y="88" text-anchor="middle" font-size="13.5" font-weight="800" fill="#c9631f">只是暫時的，不是永遠</text>',
  en:'I&#39;m living with my parents this month.', cn:'這陣子的暫時狀態（平常不是這樣）'},
 {pw:210,title:'已敲定的未來安排',
  draw:'<rect x="92" y="104" width="136" height="104" rx="12" fill="#fff" stroke="#8aa8bf" stroke-width="2.5"/>'
   +'<rect x="92" y="104" width="136" height="30" rx="12" fill="#2b5f92"/>'
   +'<text x="160" y="125" text-anchor="middle" font-size="13.5" font-weight="900" fill="#fff">THURSDAY 週四</text>'
   +em(160,178,42,'✈️')
   +'<circle cx="222" cy="112" r="13" fill="#d9534f"/>'
   +'<text x="222" y="117" text-anchor="middle" font-size="13" font-weight="900" fill="#fff">✓</text>'
   +'<text x="160" y="244" text-anchor="middle" font-size="13.5" font-weight="800" fill="#c9631f">機票訂好了＝用進行式，不用 will</text>',
  en:'I&#39;m flying to Taipei on Thursday.', cn:'已敲定的安排（will 聽起來像剛決定）'},
 '進階兩用法：①暫時狀態（this month / these days）——現在這陣子如此，平常未必；②已敲定的未來安排——票訂了、時間喬好了就用進行式。另外配 always 還能抱怨：He is always losing his keys!（他老是掉鑰匙）');

/* ---------- A2：現在簡單式（基礎）—— 第三人稱單數加 s ---------- */
V.dg20260819a2=card(
 {pw:190,title:'I / you / we / they',
  draw:em(160,150,54,'🧑')
   +bub(160,214,'visit 原形不變',150),
  en:'I visit my grandmother.', cn:'主詞是 I/you/we/they，動詞用原形'},
 {pw:190,title:'he / she / it',
  draw:em(160,150,54,'👵')
   +'<text x="160" y="196" text-anchor="middle" font-size="26" font-weight="900" fill="#d9534f">visit+s</text>'
   +'<text x="160" y="222" text-anchor="middle" font-size="13" font-weight="700" fill="#7c8b96">別忘了加 s！</text>',
  en:'She visits her grandmother.', cn:'主詞是 he/she/it，動詞一定要加 s'},
 '現在簡單式的重點在第三人稱單數：he/she/it 當主詞時，動詞要加 s（watch→watches、study→studies），這是最容易忘記的地方。');

/* ---------- B1：現在簡單式 vs 現在進行式（同 nowVsAlways） ---------- */
V.dg20260819b1=V.nowVsAlways;

/* ---------- B1+：普遍事實／定律 vs 已排定的未來時刻表 ---------- */
V.dg20260819b1p=card(
 {pw:190,title:'普遍事實／定律',
  draw:em(160,156,56,'🌡️')
   +'<text x="160" y="210" text-anchor="middle" font-size="13.5" font-weight="800" fill="#c9631f">不管什麼時候，一直都對</text>',
  en:'A fever means infection.', cn:'不受時間影響的事實、道理'},
 {pw:200,title:'已排定的未來時刻表',
  draw:em(160,150,54,'🗓️')
   +'<text x="160" y="200" text-anchor="middle" font-size="15" font-weight="900" fill="#2b5f92">9:00 → 18:00</text>'
   +'<text x="160" y="224" text-anchor="middle" font-size="13" font-weight="700" fill="#7c8b96">別人排好，不會臨時改</text>',
  en:'The clinic opens at nine tomorrow.', cn:'時刻表式的未來，不是臨時決定'},
 '現在簡單式除了習慣，還能講「永遠成立的事實」和「已經排定、不會臨時變動的未來時刻表」——這兩種都跟 will（臨時決定）不一樣。');

/* ---------- B2：現在簡單式的語域與修辭效果 ---------- */
V.dg20260819b2=card(
 {pw:210,title:'歷史現在式：口語敘事',
  draw:bub(160,130,'So I walk in… 🚶',190)
   +em(160,190,50,'😲')
   +'<text x="160" y="238" text-anchor="middle" font-size="13" font-weight="800" fill="#c9631f">講過去的事，卻用現在式，更生動</text>',
  en:'So I walk in, and the room is full.', cn:'明明是過去發生的事，用現在式說故事更有臨場感'},
 {pw:210,title:'正式寫作：緩和語氣',
  draw:'<text x="160" y="130" text-anchor="middle" font-size="14" font-weight="900" fill="#c0392b">❌ prevent（太武斷）</text>'
   +'<text x="160" y="170" text-anchor="middle" font-size="14" font-weight="900" fill="#1f8a4c">✓ tend to reduce（留餘地）</text>'
   +'<text x="160" y="220" text-anchor="middle" font-size="13" font-weight="800" fill="#7c8b96">學術與正式寫作偏好後者</text>',
  en:'Vaccines tend to reduce severe illness.', cn:'tend to / can 讓陳述留有例外空間，比直接斷言更嚴謹'},
 '同樣是現在簡單式：口語敘事可以用「歷史現在式」拉近距離、增加戲劇效果；正式與學術寫作則常用 tend to / can 緩和過度武斷的語氣。');

/* ---------- A2：現在進行式 vs 現在簡單式（同 nowVsAlways） ---------- */
V.dg20260821a2=V.nowVsAlways;

/* ---------- B1：長期習慣 vs 暫時的安排 ---------- */
V.dg20260821b1=card(
 {pw:190,title:'長期的習慣',
  draw:em(160,150,58,'🚇')
   +'<text x="160" y="212" text-anchor="middle" font-size="14" font-weight="800" fill="#c9631f">every day 每天都這樣</text>',
  en:'Mia takes the MRT every day.', cn:'長期不變的通勤方式'},
 {pw:200,title:'暫時的安排',
  draw:em(160,150,58,'🚕')
   +bub(160,214,'⏳ THIS WEEK',140),
  en:'Mia is taking a taxi this week.', cn:'加上 this week 這類字，表示暫時、之後會改回來'},
 '左邊：現在簡單式，長期不變的通勤習慣；右邊：現在進行式，加上 this week 這類字，表示暫時的安排，之後會改回來。');

/* ---------- B1+：已經約好的計畫 vs 時刻表 ---------- */
V.dg20260821b1p=card(
 {pw:200,title:'已經約好的計畫',
  draw:em(120,150,50,'🤝')
   +bub(226,120,'9:00 tomorrow',120)
   +'<text x="160" y="220" text-anchor="middle" font-size="13" font-weight="800" fill="#c9631f">自己安排、跟別人約好</text>',
  en:"I'm meeting my manager at nine tomorrow.", cn:'現在進行式：說話者自己安排的計畫'},
 {pw:190,title:'時刻表，不是決定',
  draw:em(160,148,54,'🕠')
   +'<text x="160" y="200" text-anchor="middle" font-size="15" font-weight="900" fill="#2b5f92">05:30 每天</text>'
   +'<text x="160" y="222" text-anchor="middle" font-size="12.5" font-weight="700" fill="#7c8b96">別人排好，不會臨時改</text>',
  en:'The first train leaves at five thirty every day.', cn:'現在簡單式：像時刻表一樣固定的未來'},
 '左邊：現在進行式，講自己已經安排、跟別人約好的計畫；右邊：現在簡單式，講像時刻表一樣、不是誰能臨時決定的固定行程。');

/* ---------- B2：always+進行式的抱怨語氣 vs 新聞標題的現在簡單式 ---------- */
V.dg20260821b2=card(
 {pw:210,title:'always + 進行式：抱怨',
  draw:em(140,140,50,'😤')
   +bub(190,190,'always having problems',196)
   +'<text x="160" y="238" text-anchor="middle" font-size="13" font-weight="800" fill="#c9631f">帶著不滿、抱怨的情緒</text>',
  en:'The Red Line is always having problems.', cn:'加上 always，現在進行式變成抱怨的語氣'},
 {pw:210,title:'新聞標題：現在簡單式',
  draw:'<rect x="30" y="96" width="260" height="66" rx="6" fill="#fff" stroke="#1c2c45" stroke-width="3"/>'
   +'<text x="160" y="126" text-anchor="middle" font-size="15" font-weight="900" fill="#1c2c45">Signal Fault</text>'
   +'<text x="160" y="150" text-anchor="middle" font-size="15" font-weight="900" fill="#1c2c45">Delays Thousands</text>'
   +'<text x="160" y="238" text-anchor="middle" font-size="13" font-weight="800" fill="#7c8b96">標題省略助動詞，製造即時感</text>',
  en:'Signal Fault Delays Thousands', cn:'新聞標題用現在簡單式，即使事情已發生'},
 'always/constantly + 現在進行式帶著抱怨、不滿的情緒；新聞標題則用現在簡單式製造「即時感」——兩種都不是字面上的「現在」，而是修辭效果。');


/* ---------- 2026-08-24 A2：狀態動詞不加 -ing vs 動作動詞 ---------- */
V.dg20260824a2=card(
 {pw:220,title:'狀態動詞：不用 -ing',
  draw:'<text x="160" y="92" text-anchor="middle" font-size="12.5" font-weight="800" fill="#7c8b96">Stative Verbs（感覺・想法）</text>'
   +em(110,150,54,'❤️')+em(210,150,54,'☕')
   +'<text x="160" y="206" text-anchor="middle" font-size="13.5" font-weight="800" fill="#c9631f">like / want / know → 現在簡單式（V / V-s）</text>',
  en:'He likes coffee.', cn:'感覺一直都在，用現在簡單式（不加 -ing）'},
 {pw:220,title:'動作動詞：可加 -ing',
  draw:'<text x="160" y="92" text-anchor="middle" font-size="12.5" font-weight="800" fill="#7c8b96">Action Verbs（動作）</text>'
   +em(160,152,54,'🍳')
   +'<path d="M146 108 q-5 -9 0 -18 M160 104 q-5 -9 0 -18 M174 108 q-5 -9 0 -18" fill="none" stroke="#8aa8bf" stroke-width="2.5" stroke-linecap="round" opacity=".85"/>'
   +bub(160,210,'⏰ NOW',96),
  en:'He is making eggs now.', cn:'正在進行 → 現在進行式（am/is/are + V-ing）'},
 '考點小撇步：千萬不要寫成 He is liking coffee（✗）——like、want、know 這類「狀態動詞（Stative Verbs）」不用進行式；make、eat 這類動作動詞，正在做的時候才用 am/is/are + V-ing。');

/* ---------- 2026-08-24 B1：have 的兩張臉 ---------- */
V.dg20260824b1=card(
 {pw:190,title:'have = 擁有（狀態）',
  draw:em(160,148,54,'🚗')
   +'<text x="160" y="208" text-anchor="middle" font-size="14" font-weight="800" fill="#c9631f">擁有不能「暫停」→ 不加 -ing</text>',
  en:'She has a car.', cn:'擁有、有：狀態動詞，用 has'},
 {pw:210,title:'have lunch = 吃（動作）',
  draw:em(160,148,54,'🍱')
   +bub(160,208,'⏰ NOW',96),
  en:'She is having lunch now.', cn:'吃飯是動作，正在吃 → is having'},
 '同一個 have：講「擁有」是狀態，不加 -ing；講 have lunch、have a shower 這種「做的事」是動作，正在做就用 is having。判斷方法：能暫停再繼續的是動作。');

/* ---------- 2026-08-24 B1+：You are quiet vs You are being quiet ---------- */
V.dg20260824b1p=card(
 {pw:190,title:'You are quiet：個性',
  draw:em(160,148,54,'😌')
   +'<text x="160" y="208" text-anchor="middle" font-size="14" font-weight="800" fill="#7c8b96">一直都這樣（個性、常態）</text>',
  en:'You are quiet.', cn:'評論個性：他本來就是安靜的人'},
 {pw:230,title:'You are being quiet：今天特別',
  draw:em(140,148,54,'🤐')
   +bub(212,120,'today?',86)
   +'<text x="160" y="208" text-anchor="middle" font-size="14" font-weight="800" fill="#c9631f">只有現在暫時這樣，怪怪的</text>',
  en:'You are being quiet today.', cn:'暫時的行為：平常不是這樣'},
 '左邊：are quiet 講個性，一直如此；右邊：are being quiet 講「此刻的行為表現」——今天特別安靜，平常不會，常帶一點「發生什麼事了？」的語氣。');

/* ---------- 2026-08-24 B2：正式 I love it vs 廣告口語 I'm loving it ---------- */
V.dg20260824b2=card(
 {pw:200,title:'正式・一般：I love it',
  draw:'<rect x="60" y="104" width="200" height="64" rx="8" fill="#fff" stroke="#1c2c45" stroke-width="3"/>'
   +'<text x="160" y="130" text-anchor="middle" font-size="15" font-weight="900" fill="#1c2c45">I love my job.</text>'
   +'<text x="160" y="152" text-anchor="middle" font-size="12.5" font-weight="700" fill="#7c8b96">報告、履歷、一般陳述</text>'
   +'<text x="160" y="208" text-anchor="middle" font-size="14" font-weight="800" fill="#7c8b96">恆常的事實，語氣客觀</text>',
  en:'I love my job.', cn:'狀態動詞用簡單式：不變的事實'},
 {pw:230,title:"廣告・口語：I'm loving it",
  draw:em(140,146,50,'🍔')
   +bub(210,116,'🔥 so far!',96)
   +'<text x="160" y="208" text-anchor="middle" font-size="14" font-weight="800" fill="#c9631f">故意加 -ing：把愛講成正在發生</text>',
  en:"I'm loving the new project so far.", cn:'刻意打破規則：強調此刻的熱度'},
 '左邊：正式語域中 love、mean、suggest 一律簡單式，陳述恆常事實；右邊：廣告與口語刻意加 -ing，把感覺講成「正在燃燒的動作」——不是文法錯誤，是修辭選擇。know、believe 則永遠不能這樣玩。');

return V;
})();
