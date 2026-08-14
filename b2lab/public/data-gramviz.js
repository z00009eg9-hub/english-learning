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
   +'<rect x="'+(160-p.pw/2)+'" y="20" width="'+p.pw+'" height="36" rx="18" fill="#2b5f92"/>'
   +'<text x="160" y="44" text-anchor="middle" font-size="17.5" font-weight="800" fill="#fff">'+p.title+'</text>'
   +p.draw
   +'<text x="160" y="302" text-anchor="middle" font-size="16.5" font-weight="800" fill="#1c3d5a">'+p.en+'</text>'
   +'<text x="160" y="328" text-anchor="middle" font-size="13.5" font-weight="700" fill="#4a5b68">'+p.cn+'</text>';
  if(p.cn2) s+='<text x="160" y="348" text-anchor="middle" font-size="13.5" font-weight="700" fill="#4a5b68">'+p.cn2+'</text>';
  return s+'</g>';
}
function card(p1,p2,cap){
  return {cap:cap, svg:'<svg viewBox="0 0 640 372" xmlns="http://www.w3.org/2000/svg" font-family="-apple-system,Segoe UI,Noto Sans TC,PingFang TC,Microsoft JhengHei,sans-serif">'
   +'<rect x="2" y="2" width="636" height="368" rx="18" fill="#eef6fc" stroke="#bcd8ec" stroke-width="2"/>'
   +'<line x1="320" y1="24" x2="320" y2="350" stroke="#bcd8ec" stroke-width="2" stroke-dasharray="6 6"/>'
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
['g02','ga01','dg20260814','dg20260814a2'].forEach(k=>V[k]=V.nowVsAlways);

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
   +bub(150,206,'Still here! 還在那裡',180),
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
   +em(60,110,38,'🖌️'),
  en:'I have been painting for 3 hours.', cn:'重點是「持續了多久」，', cn2:'通常還在做或剛剛才停'},
 {pw:170,title:'have done',
  draw:tl(214)
   +em(140,150,52,'🖼️')
   +'<circle cx="196" cy="140" r="20" fill="#2f9e5f"/>'
   +'<text x="196" y="148" text-anchor="middle" font-size="22" font-weight="900" fill="#fff">✓</text>'
   +'<text x="160" y="112" text-anchor="middle" font-size="13.5" font-weight="800" fill="#1f8a4c">做完了！看得到結果</text>',
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

return V;
})();
