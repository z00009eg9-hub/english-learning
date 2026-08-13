// ============================================================
//  文章插圖／圖表（全部由本站以 SVG 原創繪製，無版權問題、離線可看）
//  ⚠ 圖表裡的每一個數字都取自對應文章本身寫出來的內容，沒有另外編造數據。
//  key = 文章 id；svg = 內嵌 SVG；cap = 圖說（中文）
// ============================================================
window.ART = {

/* ---------- a01 My Morning（A2）：作息時間軸 ---------- */
a01:{
cap:"文章裡的四個時間點：6:30 起床 → 7:40 出門 → 公車 20 分鐘 → 8:30 開始工作。",
svg:`<svg viewBox="0 0 800 270" xmlns="http://www.w3.org/2000/svg" font-family="-apple-system,Segoe UI,Helvetica,Arial,sans-serif">
<rect width="800" height="270" rx="14" fill="#fdf6ec"/>
<circle cx="742" cy="52" r="26" fill="#ffd98a"/>
<g stroke="#f0b04e" stroke-width="4" stroke-linecap="round">
<line x1="742" y1="18" x2="742" y2="10"/><line x1="708" y1="52" x2="700" y2="52"/>
<line x1="718" y1="28" x2="712" y2="22"/><line x1="718" y1="76" x2="712" y2="82"/>
</g>
<line x1="70" y1="158" x2="730" y2="158" stroke="#e0d3c2" stroke-width="5" stroke-linecap="round"/>
<g text-anchor="middle">
  <!-- 6:30 起床 -->
  <circle cx="120" cy="158" r="15" fill="#e8813a"/>
  <rect x="82" y="76" width="76" height="34" rx="7" fill="#fff" stroke="#2b2118" stroke-width="2.5"/>
  <rect x="82" y="93" width="76" height="17" rx="3" fill="#cfe3e2"/>
  <circle cx="99" cy="87" r="8" fill="#f4c9a0" stroke="#2b2118" stroke-width="2"/>
  <text x="120" y="136" font-size="15" font-weight="800" fill="#c0561a">6:30</text>
  <text x="120" y="192" font-size="15" font-weight="700" fill="#2b2118">get up</text>
  <text x="120" y="212" font-size="13" fill="#6b6259">起床</text>
  <!-- 洗臉 -->
  <circle cx="272" cy="158" r="15" fill="#2b7a78"/>
  <path d="M245 104 h54 a6 6 0 0 1 -6 12 h-42 a6 6 0 0 1 -6 -12 z" fill="#cfe3e2" stroke="#2b2118" stroke-width="2.5"/>
  <line x1="272" y1="80" x2="272" y2="104" stroke="#2b2118" stroke-width="3"/>
  <path d="M262 88 q10 -14 20 0" fill="none" stroke="#3b82c4" stroke-width="3" stroke-linecap="round"/>
  <text x="272" y="192" font-size="15" font-weight="700" fill="#2b2118">wash my face</text>
  <text x="272" y="212" font-size="13" fill="#6b6259">洗臉</text>
  <!-- 咖啡 -->
  <circle cx="410" cy="158" r="15" fill="#e8813a"/>
  <path d="M388 88 h40 v22 a20 20 0 0 1 -40 0 z" fill="#fff" stroke="#2b2118" stroke-width="2.5"/>
  <path d="M428 92 q14 8 0 16" fill="none" stroke="#2b2118" stroke-width="2.5"/>
  <path d="M398 80 q6 -10 12 0" fill="none" stroke="#a08a74" stroke-width="2.5" stroke-linecap="round"/>
  <text x="410" y="192" font-size="15" font-weight="700" fill="#2b2118">make coffee</text>
  <text x="410" y="212" font-size="13" fill="#6b6259">泡咖啡</text>
  <!-- 7:40 公車 -->
  <circle cx="552" cy="158" r="15" fill="#3b82c4"/>
  <rect x="512" y="74" width="80" height="32" rx="7" fill="#3b82c4" stroke="#2b2118" stroke-width="2.5"/>
  <rect x="519" y="81" width="20" height="13" rx="2" fill="#e8f2fb"/>
  <rect x="545" y="81" width="20" height="13" rx="2" fill="#e8f2fb"/>
  <circle cx="530" cy="110" r="6.5" fill="#2b2118"/><circle cx="574" cy="110" r="6.5" fill="#2b2118"/>
  <text x="552" y="136" font-size="15" font-weight="800" fill="#c0561a">7:40</text>
  <text x="552" y="192" font-size="15" font-weight="700" fill="#2b2118">20 min by bus</text>
  <text x="552" y="212" font-size="13" fill="#6b6259">公車 20 分鐘</text>
  <!-- 8:30 上班 -->
  <circle cx="694" cy="158" r="15" fill="#c0392b"/>
  <rect x="668" y="72" width="52" height="34" rx="4" fill="#fff" stroke="#2b2118" stroke-width="2.5"/>
  <g fill="#cfe3e2"><rect x="675" y="79" width="12" height="9"/><rect x="693" y="79" width="12" height="9"/><rect x="675" y="92" width="12" height="9"/><rect x="693" y="92" width="12" height="9"/></g>
  <text x="694" y="136" font-size="15" font-weight="800" fill="#c0561a">8:30</text>
  <text x="694" y="192" font-size="15" font-weight="700" fill="#2b2118">start work</text>
  <text x="694" y="212" font-size="13" fill="#6b6259">開始工作</text>
</g>
<text x="70" y="42" font-size="24" font-weight="900" fill="#2b2118">MY MORNING</text>
<text x="70" y="64" font-size="14" font-weight="700" fill="#2b7a78">A weekday, minute by minute</text>
</svg>`
},

/* ---------- r06 颱風停電的那一夜（B1+）：情境插畫 ---------- */
r06:{
cap:"停電那一夜文章裡提到的東西：只有兩戶還有燈、冰箱失效、以及事後準備的行動電源、瓶裝水與紙本電話清單。",
svg:`<svg viewBox="0 0 800 300" xmlns="http://www.w3.org/2000/svg" font-family="-apple-system,Segoe UI,Helvetica,Arial,sans-serif">
<defs><linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#20304a"/><stop offset="1" stop-color="#3d5273"/></linearGradient></defs>
<rect width="800" height="300" rx="14" fill="url(#sky)"/>
<!-- 地面 -->
<rect x="0" y="268" width="800" height="32" fill="#16223a"/>
<line x1="0" y1="268" x2="800" y2="268" stroke="#0b1220" stroke-width="3"/>
<!-- 風（都放在標題下方，不穿過文字） -->
<g fill="none" stroke="#8fa6c9" stroke-width="3" stroke-linecap="round" opacity=".8">
<path d="M330 108 q60 -16 120 2 t90 -6"/>
<path d="M318 140 q70 -14 140 4"/>
<path d="M340 172 q54 -12 108 4"/>
</g>
<!-- 雨 -->
<g stroke="#a7bfe0" stroke-width="3" stroke-linecap="round" opacity=".85">
<line x1="330" y1="196" x2="318" y2="222"/><line x1="368" y1="188" x2="356" y2="214"/>
<line x1="352" y1="230" x2="340" y2="256"/><line x1="486" y1="196" x2="474" y2="222"/>
<line x1="470" y1="234" x2="458" y2="260"/><line x1="504" y1="150" x2="492" y2="176"/>
</g>
<!-- 被吹彎的樹 -->
<path d="M400 268 q-8 -46 24 -70" fill="none" stroke="#6b4f36" stroke-width="9" stroke-linecap="round"/>
<path d="M424 198 q34 -16 52 4 q-30 16 -52 -4z" fill="#3f7d5a"/>
<path d="M424 198 q26 -34 54 -26 q-20 30 -54 26z" fill="#4d9169"/>
<!-- 大樓：只有兩戶有燈 -->
<rect x="80" y="120" width="230" height="148" fill="#16223a" stroke="#0e1728" stroke-width="3"/>
<g>
<rect x="100" y="140" width="34" height="26" fill="#ffd98a"/>
<rect x="150" y="140" width="34" height="26" fill="#2b3a57"/>
<rect x="200" y="140" width="34" height="26" fill="#2b3a57"/>
<rect x="250" y="140" width="34" height="26" fill="#2b3a57"/>
<rect x="100" y="180" width="34" height="26" fill="#2b3a57"/>
<rect x="150" y="180" width="34" height="26" fill="#2b3a57"/>
<rect x="200" y="180" width="34" height="26" fill="#ffd98a"/>
<rect x="250" y="180" width="34" height="26" fill="#2b3a57"/>
<rect x="100" y="220" width="34" height="26" fill="#2b3a57"/>
<rect x="150" y="220" width="34" height="26" fill="#2b3a57"/>
<rect x="200" y="220" width="34" height="26" fill="#2b3a57"/>
<rect x="250" y="220" width="34" height="26" fill="#2b3a57"/>
</g>
<text x="80" y="46" font-size="24" font-weight="900" fill="#fff">THE LIGHTS WENT OUT</text>
<text x="80" y="70" font-size="14" font-weight="700" fill="#ffd98a">Two days without electricity 停電兩天</text>
<text x="195" y="288" font-size="13" font-weight="700" fill="#a7bfe0" text-anchor="middle">only 2 flats still had light</text>
<!-- 右側：事後的準備 -->
<rect x="510" y="96" width="252" height="176" rx="12" fill="#fdf6ec" stroke="#0e1728" stroke-width="3"/>
<text x="636" y="122" font-size="15" font-weight="900" fill="#c0561a" text-anchor="middle">NOW WE KEEP 現在會準備</text>
<g text-anchor="middle">
  <!-- 行動電源 -->
  <rect x="540" y="140" width="34" height="56" rx="6" fill="#3f9e64" stroke="#2b2118" stroke-width="2.5"/>
  <rect x="548" y="152" width="18" height="8" rx="2" fill="#fff"/>
  <rect x="548" y="164" width="18" height="8" rx="2" fill="#fff"/>
  <rect x="548" y="176" width="18" height="8" rx="2" fill="#d8ecdf"/>
  <text x="557" y="216" font-size="12" font-weight="700" fill="#2b2118">power bank</text>
  <text x="557" y="232" font-size="11.5" fill="#6b6259">行動電源</text>
  <!-- 瓶裝水 -->
  <path d="M626 148 h20 v6 q10 6 10 18 v24 a8 8 0 0 1 -8 8 h-24 a8 8 0 0 1 -8 -8 v-24 q0 -12 10 -18 z" fill="#a7d8f0" stroke="#2b2118" stroke-width="2.5"/>
  <rect x="628" y="140" width="16" height="9" rx="2" fill="#3b82c4" stroke="#2b2118" stroke-width="2"/>
  <text x="638" y="216" font-size="12" font-weight="700" fill="#2b2118">water</text>
  <text x="638" y="232" font-size="11.5" fill="#6b6259">瓶裝水</text>
  <!-- 紙本電話清單 -->
  <rect x="700" y="142" width="42" height="54" rx="4" fill="#fff" stroke="#2b2118" stroke-width="2.5"/>
  <g stroke="#c0392b" stroke-width="2.5" stroke-linecap="round">
  <line x1="708" y1="154" x2="734" y2="154"/><line x1="708" y1="164" x2="734" y2="164"/>
  <line x1="708" y1="174" x2="726" y2="174"/><line x1="708" y1="184" x2="730" y2="184"/></g>
  <text x="721" y="216" font-size="12" font-weight="700" fill="#2b2118">paper list</text>
  <text x="721" y="232" font-size="11.5" fill="#6b6259">紙本電話</text>
</g>
<text x="636" y="258" font-size="12" fill="#6b6259" text-anchor="middle" font-style="italic">a phone with no battery is just a piece of glass</text>
</svg>`
},

/* ---------- r03 食物浪費（B1+）：三分之一 pictogram ---------- */
r03:{
cap:"文章寫的兩個數字：全世界生產的食物約三分之一從未被吃掉；而規劃餐點、正確保存、善用剩菜可把家庭浪費減少一半。",
svg:`<svg viewBox="0 0 800 320" xmlns="http://www.w3.org/2000/svg" font-family="-apple-system,Segoe UI,Helvetica,Arial,sans-serif">
<rect width="800" height="320" rx="14" fill="#fdf6ec"/>
<text x="40" y="44" font-size="23" font-weight="900" fill="#2b2118">1 IN 3 IS NEVER EATEN</text>
<text x="40" y="66" font-size="14" font-weight="700" fill="#2b7a78">全世界生產的食物，約三分之一從未被吃掉</text>
<!-- 九個盤子：三個標紅 -->
<g>
${[0,1,2,3,4,5,6,7,8].map(i=>{
  const x=48+(i%3)*92, y=100+Math.floor(i/3)*66;
  const waste=i%3===2;
  return `<g><circle cx="${x+30}" cy="${y+24}" r="26" fill="${waste?'#f7d7d3':'#ffffff'}" stroke="${waste?'#c0392b':'#2b2118'}" stroke-width="${waste?3:2.5}"/>`
   +`<circle cx="${x+30}" cy="${y+24}" r="15" fill="${waste?'#e9b3ac':'#cfe3e2'}"/>`
   +(waste?`<g stroke="#c0392b" stroke-width="4" stroke-linecap="round"><line x1="${x+20}" y1="${y+14}" x2="${x+40}" y2="${y+34}"/><line x1="${x+40}" y1="${y+14}" x2="${x+20}" y2="${y+34}"/></g>`:'')
   +`</g>`;
}).join('')}
</g>
<text x="140" y="306" font-size="13" font-weight="700" fill="#c0392b" text-anchor="middle">✗ = wasted 被丟掉</text>
<!-- 右側：家庭浪費可減半 -->
<line x1="360" y1="96" x2="360" y2="290" stroke="#e0d3c2" stroke-width="3"/>
<text x="400" y="120" font-size="16" font-weight="900" fill="#2b2118">HOUSEHOLD WASTE 家庭浪費</text>
<text x="400" y="142" font-size="13" font-weight="700" fill="#6b6259">規劃餐點 · 正確保存 · 善用剩菜</text>
<g>
<text x="400" y="176" font-size="12.5" font-weight="700" fill="#6b6259">now 現在</text>
<rect x="400" y="184" width="330" height="30" rx="5" fill="#e9b3ac" stroke="#c0392b" stroke-width="2.5"/>
<text x="565" y="205" font-size="14" font-weight="800" fill="#8c261a" text-anchor="middle">100%</text>
<text x="400" y="242" font-size="12.5" font-weight="700" fill="#6b6259">with those habits 養成習慣後</text>
<rect x="400" y="250" width="165" height="30" rx="5" fill="#c8ebd4" stroke="#2f9e5f" stroke-width="2.5"/>
<text x="482" y="271" font-size="14" font-weight="800" fill="#1f7a45" text-anchor="middle">50%</text>
<path d="M745 199 h-8 M737 199 l0 51 M737 250 h-8" fill="none" stroke="#2f9e5f" stroke-width="2.5"/>
<text x="752" y="230" font-size="15" font-weight="900" fill="#2f9e5f">−½</text>
</g>
</svg>`
},

/* ---------- r12 兩種醫療制度（B2）：二十倍帳單對比 ---------- */
r12:{
cap:"文章明確寫出的對比：同樣的醫療建議，台灣付一筆小額固定費用，美國的帳單可能是它的二十倍，且三週後才寄到。",
svg:`<svg viewBox="0 0 800 320" xmlns="http://www.w3.org/2000/svg" font-family="-apple-system,Segoe UI,Helvetica,Arial,sans-serif">
<rect width="800" height="320" rx="14" fill="#fdf6ec"/>
<text x="40" y="42" font-size="23" font-weight="900" fill="#2b2118">SAME ADVICE, DIFFERENT PAPER</text>
<text x="40" y="64" font-size="14" font-weight="700" fill="#2b7a78">一樣的醫療建議，完全不同的單據</text>
<!-- 左：台灣 -->
<rect x="40" y="86" width="340" height="200" rx="12" fill="#fff" stroke="#2b7a78" stroke-width="3"/>
<text x="60" y="114" font-size="16" font-weight="900" fill="#2b7a78">TAIPEI 台北</text>
<text x="60" y="136" font-size="13" font-weight="700" fill="#6b6259">a small fixed fee 小額固定費用</text>
<rect x="60" y="150" width="16" height="28" rx="3" fill="#2b7a78"/>
<text x="86" y="172" font-size="15" font-weight="800" fill="#2b2118">×1</text>
<text x="60" y="204" font-size="13" fill="#2b2118">✓ nobody avoids care because of price</text>
<text x="60" y="224" font-size="12.5" fill="#6b6259">沒有人因為價格不敢就醫</text>
<text x="60" y="250" font-size="13" fill="#2b2118">✗ crowded waiting rooms, short visits</text>
<text x="60" y="270" font-size="12.5" fill="#6b6259">候診室擁擠、看診時間短</text>
<!-- 右：美國 -->
<rect x="400" y="86" width="360" height="200" rx="12" fill="#fff" stroke="#c0392b" stroke-width="3"/>
<text x="420" y="114" font-size="16" font-weight="900" fill="#c0392b">CHICAGO 芝加哥</text>
<text x="420" y="136" font-size="13" font-weight="700" fill="#6b6259">the bill arrives 3 weeks later 三週後才寄到</text>
<g>
${[0,1,2,3,4,5,6,7,8,9].map(i=>`<rect x="${420+i*17}" y="150" width="14" height="28" rx="3" fill="#c0392b" opacity="${i>6?'0.45':'1'}"/>`).join('')}
</g>
<text x="600" y="172" font-size="17" font-weight="900" fill="#c0392b">×20</text>
<text x="420" y="204" font-size="13" fill="#2b2118">✓ excellent care, longer appointments</text>
<text x="420" y="224" font-size="12.5" fill="#6b6259">品質可以很好、看診時間較長</text>
<text x="420" y="250" font-size="13" fill="#2b2118">✗ patients delay a check-up</text>
<text x="420" y="270" font-size="12.5" fill="#6b6259">病人把檢查一延再延</text>
<text x="400" y="308" font-size="13" font-weight="800" fill="#8a7f72" text-anchor="middle">the former buys access · the latter buys time and choice</text>
</svg>`
},

/* ---------- r18 為什麼存不了錢（B2）：住房佔比與通膨 ---------- */
r18:{
cap:"文章寫出的兩個數字：住房從佔收入五分之一變成三分之一；每年 3% 的通膨，讓活存帳戶裡的錢十年後只剩約四分之三的價值。",
svg:`<svg viewBox="0 0 800 330" xmlns="http://www.w3.org/2000/svg" font-family="-apple-system,Segoe UI,Helvetica,Arial,sans-serif">
<rect width="800" height="330" rx="14" fill="#fdf6ec"/>
<text x="40" y="42" font-size="23" font-weight="900" fill="#2b2118">WHERE THE MONEY GOES</text>
<text x="40" y="64" font-size="14" font-weight="700" fill="#2b7a78">錢跑到哪裡去了</text>
<!-- 兩個環：1/5 → 1/3 -->
<text x="40" y="98" font-size="15" font-weight="900" fill="#2b2118">HOUSING SHARE OF INCOME 住房佔收入</text>
<g transform="translate(112,190)">
<circle r="44" fill="none" stroke="#e6ded2" stroke-width="20"/>
<circle r="44" fill="none" stroke="#3f9e64" stroke-width="20" stroke-dasharray="55.3 221.2" transform="rotate(-90)" stroke-linecap="butt"/>
<text y="-2" font-size="19" font-weight="900" fill="#1f7a45" text-anchor="middle">1/5</text>
<text y="18" font-size="12" fill="#6b6259" text-anchor="middle">20%</text>
<text y="72" font-size="13" font-weight="700" fill="#2b2118" text-anchor="middle">before 以前</text>
</g>
<text x="212" y="196" font-size="26" font-weight="900" fill="#c0561a">→</text>
<g transform="translate(320,190)">
<circle r="44" fill="none" stroke="#e6ded2" stroke-width="20"/>
<circle r="44" fill="none" stroke="#c0392b" stroke-width="20" stroke-dasharray="92.2 184.3" transform="rotate(-90)" stroke-linecap="butt"/>
<text y="-2" font-size="19" font-weight="900" fill="#8c261a" text-anchor="middle">1/3</text>
<text y="18" font-size="12" fill="#6b6259" text-anchor="middle">33%</text>
<text y="72" font-size="13" font-weight="700" fill="#2b2118" text-anchor="middle">now 現在</text>
</g>
<text x="216" y="300" font-size="12.5" fill="#6b6259" text-anchor="middle">the money that used to become savings disappears</text>
<text x="216" y="318" font-size="12.5" fill="#6b6259" text-anchor="middle">原本會變成儲蓄的錢就這樣消失了</text>
<line x1="430" y1="86" x2="430" y2="300" stroke="#e0d3c2" stroke-width="3"/>
<!-- 通膨：3% 一年，十年剩約 3/4 -->
<text x="464" y="98" font-size="15" font-weight="900" fill="#2b2118">3% A YEAR, FOR 10 YEARS 每年 3%，十年後</text>
<text x="464" y="126" font-size="13" font-weight="700" fill="#6b6259">money left in a current account 放在活存帳戶的錢</text>
<rect x="464" y="140" width="280" height="34" rx="5" fill="#cfe3e2" stroke="#2b7a78" stroke-width="2.5"/>
<text x="604" y="163" font-size="14" font-weight="800" fill="#1f5f5d" text-anchor="middle">today 今天　100%</text>
<rect x="464" y="196" width="210" height="34" rx="5" fill="#e6ded2" stroke="#8a7f72" stroke-width="2.5"/>
<rect x="674" y="196" width="70" height="34" rx="5" fill="#f7d7d3" stroke="#c0392b" stroke-width="2.5" stroke-dasharray="5 4"/>
<text x="569" y="219" font-size="14" font-weight="800" fill="#4a4238" text-anchor="middle">in 10 years 十年後　≈75%</text>
<text x="709" y="219" font-size="13" font-weight="900" fill="#c0392b" text-anchor="middle">−25%</text>
<text x="464" y="262" font-size="13" font-weight="800" fill="#2b2118">Doing nothing is not a neutral choice.</text>
<text x="464" y="282" font-size="13" fill="#6b6259">「什麼都不做」並不是中立的選擇，</text>
<text x="464" y="300" font-size="13" fill="#6b6259">而是一個緩慢地讓自己變窮的決定。</text>
</svg>`
}

};
