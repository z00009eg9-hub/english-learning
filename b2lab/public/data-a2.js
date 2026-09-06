// ============================================================
//  A2 教材（Tom 的程度區間 A2 → B1+）
//  A2 的原則：短句（8–14 字）、現在／過去簡單式為主、高頻生活字彙、
//  100–160 字、每篇只帶一個文法重點。升級句是 A2 → B1，不是 B1 → B2。
//  全部原創撰寫。
// ============================================================
window.A2 = {

articles:[

/* ---------------------------------------------------------- 1 */
{
  id:"a01", level:"A2", topic:"日常作息", words:75, kind:"orig",
  title:"My Morning",
  titleCn:"我的早上",
  focus:"現在簡單式：第三人稱加 -s",
  upFrom:"A2", upTo:"B1",
  intro:"最基本的現在簡單式。注意主詞是 he / she / it 的時候，動詞要加 -s。",
  paras:[
    {en:"I get up at six thirty every morning. First I wash my face. Then I make coffee for me and my husband.",
     cn:"我每天早上六點半起床。我先洗臉，然後為我和我先生泡咖啡。"},
    {en:"My husband gets up at seven. He does not eat breakfast at home. He buys a sandwich near his office.",
     cn:"我先生七點起床。他不在家吃早餐，他在辦公室附近買三明治。"},
    {en:"I leave the house at seven forty. The bus takes twenty minutes. I usually read on the bus.",
     cn:"我七點四十出門。公車要二十分鐘。我通常在公車上看書。"},
    {en:"I start work at eight thirty. My morning is always busy, but I like it.",
     cn:"我八點半開始工作。我的早上總是很忙，但我喜歡這樣。"}
  ],
  target:[
    {w:"get up",ipa:"/ɡet ʌp/",pos:"phr.v.",cn:"起床",def:"To get out of bed.",ex:"I get up at six thirty.",exCn:"我六點半起床。"},
    {w:"wash",ipa:"/wɑːʃ/",pos:"v.",cn:"洗",def:"To clean something with water.",ex:"First I wash my face.",exCn:"我先洗臉。"},
    {w:"leave",ipa:"/liːv/",pos:"v.",cn:"離開",def:"To go away from a place.",ex:"I leave the house at seven forty.",exCn:"我七點四十分出門。"},
    {w:"usually",ipa:"/ˈjuːʒuəli/",pos:"adv.",cn:"通常",def:"Most of the time.",ex:"I usually read on the bus.",exCn:"我通常在公車上看書。"},
    {w:"busy",ipa:"/ˈbɪzi/",pos:"adj.",cn:"忙的",def:"Having a lot to do.",ex:"My morning is always busy.",exCn:"我的早上總是很忙。"}
  ],
  questions:[
    {q:"What time does the writer get up?",qCn:"作者幾點起床？",opts:["A. Six o'clock","B. Six thirty","C. Seven o'clock","D. Seven forty"],optsCn:["A. 六點", "B. 六點半", "C. 七點", "D. 七點四十"],ans:1,expl:"I get up at six thirty every morning."},
    {q:"Where does her husband eat breakfast?",qCn:"她先生在哪裡吃早餐？",opts:["A. At home","B. On the bus","C. Near his office","D. He does not eat breakfast"],optsCn:["A. 在家", "B. 在公車上", "C. 在公司附近", "D. 他不吃早餐"],ans:2,expl:"He buys a sandwich near his office."},
    {q:"Which sentence is correct?",qCn:"哪一句是正確的？",opts:["He get up at seven.","He gets up at seven.","He getting up at seven.","He are get up at seven."],ans:1,expl:"主詞是 He，現在簡單式動詞要加 -s → gets。"}
  ],
  upgrade:[
    {b1:"I get up at six thirty. I wash my face. I make coffee.",
     b2:"I get up at six thirty, wash my face, and then make coffee.",
     note:"三個動作共用同一個主詞時，可以只寫一次 I，用逗號和 and 連起來，句子就不會一直重複。", "sp": "I'm up at six thirty, wash my face, and get the coffee going.", "spNote": "I'm up at...（我…就起床）、get the coffee going（把咖啡煮上）是晨間口語。", "b1Cn": "我六點半起床。我洗臉。我泡咖啡。", "b2Cn": "我六點半起床、洗臉，然後泡咖啡。", "spCn": "我六點半就起來，洗把臉，把咖啡煮上。"},
    {b1:"My morning is busy. I like it.",
     b2:"My morning is always busy, but I like it.",
     note:"用 but 連接兩個相反的意思，比兩個短句自然得多。", "sp": "My mornings are crazy, but honestly, I love it.", "spNote": "crazy（忙翻）、honestly（老實說）是口語裡的情緒潤滑劑。", "b1Cn": "我的早晨很忙。我喜歡。", "b2Cn": "我的早晨總是很忙，但我喜歡。", "spCn": "我的早晨忙翻了，但老實說，我愛這樣。"}
  ]
},

/* ---------------------------------------------------------- 2 */
{
  id:"a02", level:"A2", topic:"購物", words:70, kind:"orig",
  title:"At the Convenience Store",
  titleCn:"在便利商店",
  focus:"可數與不可數名詞；some / any",
  upFrom:"A2", upTo:"B1",
  intro:"注意哪些字可以加 s（bottles, eggs），哪些不行（milk, rice）。肯定句用 some，否定與疑問用 any。",
  paras:[
    {en:"There is a convenience store next to my building. It is open twenty-four hours a day.",
     cn:"我家大樓旁邊有一間便利商店。它一天二十四小時營業。"},
    {en:"Last night I needed some milk and two bottles of water. I also wanted some rice, but they did not have any.",
     cn:"昨天晚上我需要一些牛奶和兩瓶水。我也想買一些米，但他們沒有。"},
    {en:"The store sells hot food, too. I often buy tea eggs there. They are cheap and they taste good.",
     cn:"這間店也賣熱食。我常在那裡買茶葉蛋。它們很便宜，而且很好吃。"},
    {en:"The staff are friendly. They always say \"Welcome!\" when I open the door.",
     cn:"店員很友善。我開門時他們總是說「歡迎光臨！」"}
  ],
  target:[
    {w:"convenience store",ipa:"/kənˈviːniəns stɔːr/",pos:"n.",cn:"便利商店",def:"A small shop that is open for many hours.",ex:"There is a convenience store next to my building.",exCn:"我住的大樓旁邊有一家便利商店。"},
    {w:"bottle",ipa:"/ˈbɑːtl/",pos:"n.",cn:"瓶",def:"A container for liquid.",ex:"I needed two bottles of water.",exCn:"我需要兩瓶水。"},
    {w:"cheap",ipa:"/tʃiːp/",pos:"adj.",cn:"便宜的",def:"Not expensive.",ex:"They are cheap and taste good.",exCn:"它們很便宜又好喝。"},
    {w:"staff",ipa:"/stæf/",pos:"n.",cn:"員工（總稱）",def:"The people who work in a place.",ex:"The staff are friendly.",exCn:"店員很親切。"},
    {w:"friendly",ipa:"/ˈfrendli/",pos:"adj.",cn:"友善的",def:"Kind and easy to talk to.",ex:"The staff are very friendly.",exCn:"店員非常親切。"}
  ],
  questions:[
    {q:"How long is the store open each day?",qCn:"這家店每天開多久？",opts:["A. Twelve hours","B. Sixteen hours","C. Twenty-four hours","D. Only at night"],optsCn:["A. 十二小時", "B. 十六小時", "C. 二十四小時", "D. 只有晚上開"],ans:2,expl:"It is open twenty-four hours a day."},
    {q:"What did the store NOT have?",qCn:"店裡沒有什麼？",opts:["A. Milk","B. Water","C. Rice","D. Tea eggs"],optsCn:["A. 牛奶", "B. 水", "C. 米", "D. 茶葉蛋"],ans:2,expl:"I also wanted some rice, but they did not have any."},
    {q:"Choose the correct sentence.",qCn:"選出正確的句子。",opts:["I need two milks.","I need some milk.","I need a milk.","I need many milk."],ans:1,expl:"milk 不可數，不能加 s、不能用 a／many，用 some。"}
  ],
  upgrade:[
    {b1:"I wanted rice. They did not have rice.",
     b2:"I wanted some rice, but they did not have any.",
     note:"用 but 連接，並用 any 代替重複的 rice，避免同一個字說兩次。", "sp": "I wanted rice, but they were all out.", "spNote": "be all out（賣完了）是點餐口語必備。", "b1Cn": "我想要飯。他們沒有飯。", "b2Cn": "我想要飯，但他們沒有了。", "spCn": "我想點飯，但他們賣完了。"},
    {b1:"The eggs are cheap. The eggs taste good.",
     b2:"The eggs are cheap and they taste good.",
     note:"第二次提到同一個東西時用代名詞 they，不要再重複名詞。", "sp": "The eggs are cheap and they taste great.", "spNote": "口語愛用 great 收尾，比 good 更有溫度。", "b1Cn": "蛋很便宜。蛋很好吃。", "b2Cn": "蛋很便宜也很好吃。", "spCn": "蛋便宜又好吃。"}
  ]
},

/* ---------------------------------------------------------- 3 */
{
  id:"a03", level:"A2", topic:"天氣與衣服", words:70, kind:"orig",
  title:"What Should I Wear Today?",
  titleCn:"今天該穿什麼？",
  focus:"現在進行式 vs. 現在簡單式（A2 版）",
  upFrom:"A2", upTo:"B1",
  intro:"「現在正在下雨」用 is raining，「這裡常下雨」用 rains。看到 now、at the moment 就想到 -ing。",
  paras:[
    {en:"It is raining now, so I am looking for my umbrella. I cannot find it.",
     cn:"現在正在下雨，所以我在找我的雨傘。我找不到。"},
    {en:"In summer it rains a lot in Taiwan. The weather is hot and wet. I usually wear a T-shirt and short pants.",
     cn:"夏天台灣常下雨。天氣又熱又潮濕。我通常穿 T 恤和短褲。"},
    {en:"Today is different. The wind is strong and the temperature is only twenty degrees. I am wearing a light jacket.",
     cn:"今天不一樣。風很強，溫度只有二十度。我穿了一件薄外套。"},
    {en:"My mother always says, \"Take a jacket with you.\" Today she is right.",
     cn:"我媽媽總是說：「帶件外套。」今天她說對了。"}
  ],
  target:[
    {w:"umbrella",ipa:"/ʌmˈbrelə/",pos:"n.",cn:"雨傘",def:"A thing you hold over your head in the rain.",ex:"I am looking for my umbrella.",exCn:"我正在找我的雨傘。"},
    {w:"wet",ipa:"/wet/",pos:"adj.",cn:"潮濕的",def:"Covered with water; not dry.",ex:"The weather is hot and wet.",exCn:"天氣又熱又潮濕。"},
    {w:"wind",ipa:"/wɪnd/",pos:"n.",cn:"風",def:"Air that moves.",ex:"The wind is strong today.",exCn:"今天風很大。"},
    {w:"temperature",ipa:"/ˈtemprətʃər/",pos:"n.",cn:"溫度",def:"How hot or cold something is.",ex:"The temperature is only twenty degrees.",exCn:"氣溫只有二十度。"},
    {w:"light jacket",ipa:"/laɪt ˈdʒækɪt/",pos:"n.",cn:"薄外套",def:"A thin coat.",ex:"I am wearing a light jacket.",exCn:"我穿著一件薄外套。"}
  ],
  questions:[
    {q:"What is the weather like right now?",qCn:"現在天氣怎麼樣？",opts:["A. Hot and dry","B. Raining and windy","C. Snowing","D. Sunny"],optsCn:["A. 又熱又乾", "B. 下雨又颳風", "C. 下雪", "D. 晴天"],ans:1,expl:"It is raining now... The wind is strong."},
    {q:"What does the writer usually wear in summer?",qCn:"作者夏天通常穿什麼？",opts:["A. A light jacket","B. A T-shirt and short pants","C. A coat","D. A sweater"],optsCn:["A. 薄外套", "B. T 恤和短褲", "C. 大衣", "D. 毛衣"],ans:1,expl:"I usually wear a T-shirt and short pants."},
    {q:"Choose the correct sentence for right now.",qCn:"選出描述「現在」的正確句子。",opts:["It rains now.","It is raining now.","It rain now.","It is rain now."],ans:1,expl:"now → 現在進行式 is raining。"}
  ],
  upgrade:[
    {b1:"It is raining. I want my umbrella. I cannot find it.",
     b2:"It is raining, so I am looking for my umbrella, but I cannot find it.",
     note:"用 so 表結果、but 表轉折，把三句合成一句有邏輯的長句。", "sp": "It's raining and I can't find my umbrella anywhere.", "spNote": "can't find ... anywhere（到處都找不到）是口語加強。", "b1Cn": "下雨了。我要我的傘。我找不到。", "b2Cn": "下雨了，所以我在找傘，但找不到。", "spCn": "下雨了，我的傘卻怎麼找都找不到。"},
    {b1:"Today the wind is strong. The temperature is twenty degrees.",
     b2:"Today the wind is strong and the temperature is only twenty degrees.",
     note:"only 加進去就多了「比平常低」的訊息，這是 B1 開始需要的細節。", "sp": "It's super windy today and only twenty degrees out.", "spNote": "super（超）、句尾 out（外面）是美式天氣口語。", "b1Cn": "今天風很強。氣溫二十度。", "b2Cn": "今天風很強，氣溫只有二十度。", "spCn": "今天風超大，外面才二十度。"}
  ]
},

/* ---------------------------------------------------------- 4 */
{
  id:"a04", level:"A2", topic:"健康", words:68, kind:"orig",
  title:"I Do Not Feel Well",
  titleCn:"我不太舒服",
  focus:"過去簡單式：was / were 與 -ed",
  upFrom:"A2", upTo:"B1",
  intro:"描述已經發生的事。be 動詞的過去式是 was / were，一般動詞多半加 -ed，但 have → had 是不規則的。",
  paras:[
    {en:"Yesterday I was very tired. I had a headache and my throat hurt.",
     cn:"昨天我很累。我頭痛，喉嚨也很痛。"},
    {en:"I called my office in the morning. I told my manager, \"I am sick today.\" He said, \"Go and see a doctor.\"",
     cn:"我早上打電話到辦公室。我跟主管說：「我今天生病了。」他說：「去看醫生。」"},
    {en:"The clinic was near my home. The doctor checked my throat and my temperature. My temperature was 38 degrees.",
     cn:"診所離我家很近。醫生檢查了我的喉嚨和體溫。我的體溫是 38 度。"},
    {en:"He gave me some medicine. I slept all afternoon. Today I feel much better.",
     cn:"他給了我一些藥。我整個下午都在睡。今天我覺得好多了。"}
  ],
  target:[
    {w:"tired",ipa:"/ˈtaɪərd/",pos:"adj.",cn:"疲累的",def:"Needing rest or sleep.",ex:"Yesterday I was very tired.",exCn:"我昨天很累。"},
    {w:"headache",ipa:"/ˈhedeɪk/",pos:"n.",cn:"頭痛",def:"A pain in your head.",ex:"I had a headache.",exCn:"我頭痛。"},
    {w:"throat",ipa:"/θroʊt/",pos:"n.",cn:"喉嚨",def:"The front part of your neck; the way food goes down.",ex:"My throat hurt.",exCn:"我喉嚨痛。"},
    {w:"clinic",ipa:"/ˈklɪnɪk/",pos:"n.",cn:"診所",def:"A small place where you see a doctor.",ex:"The clinic was near my home.",exCn:"那家診所離我家很近。"},
    {w:"medicine",ipa:"/ˈmedɪsn/",pos:"n.",cn:"藥",def:"Something you take when you are ill.",ex:"He gave me some medicine.",exCn:"他給了我一些藥。"},
    {w:"much better",ipa:"/mʌtʃ ˈbetər/",pos:"phr.",cn:"好多了",def:"A lot better than before.",ex:"Today I feel much better.",exCn:"我今天覺得好多了。"}
  ],
  questions:[
    {q:"What was wrong with the writer?",qCn:"作者哪裡不舒服？",opts:["A. A broken arm","B. A headache and a sore throat","C. A toothache","D. A stomach ache"],optsCn:["A. 手臂骨折", "B. 頭痛和喉嚨痛", "C. 牙痛", "D. 胃痛"],ans:1,expl:"I had a headache and my throat hurt."},
    {q:"What was her temperature?",qCn:"她的體溫是幾度？",opts:["A. 36 degrees","B. 37 degrees","C. 38 degrees","D. 39 degrees"],optsCn:["A. 36 度", "B. 37 度", "C. 38 度", "D. 39 度"],ans:2,expl:"My temperature was 38 degrees."},
    {q:"Choose the correct past form.",qCn:"選出正確的過去式。",opts:["Yesterday I am tired.","Yesterday I was tired.","Yesterday I were tired.","Yesterday I be tired."],ans:1,expl:"主詞 I 的過去式 be 動詞是 was。"}
  ],
  upgrade:[
    {b1:"I was sick. I called my office.",
     b2:"Because I was sick, I called my office in the morning.",
     note:"用 Because 開頭把原因說清楚，比兩個並列短句成熟。", "sp": "I was feeling sick, so I called in that morning.", "spNote": "call in（打電話請假）是職場口語，比 called my office 道地。", "b1Cn": "我生病了。我打給辦公室。", "b2Cn": "因為生病，我早上打電話到辦公室。", "spCn": "我覺得不舒服，早上就打電話請假了。"},
    {b1:"He gave me medicine. I slept. Now I am better.",
     b2:"After I took the medicine, I slept all afternoon and now I feel much better.",
     note:"用 After 標出時間順序，讀者立刻知道哪件事先發生。", "sp": "I took the medicine, slept all afternoon, and now I'm feeling way better.", "spNote": "way better（好多了）的 way 是口語加強詞。", "b1Cn": "他給我藥。我睡了。現在我好多了。", "b2Cn": "吃藥後我睡了一下午，現在感覺好多了。", "spCn": "我吃了藥，睡了一下午，現在感覺好多了。"}
  ]
},

/* ---------------------------------------------------------- 5 */
{
  id:"a05", level:"A2", topic:"交通", words:81, kind:"orig",
  title:"The Bus Was Late",
  titleCn:"公車遲到了",
  focus:"there is / there are；時間介系詞 at / in / on",
  upFrom:"A2", upTo:"B1",
  intro:"注意 there is（單數）和 there are（複數）的差別，以及時間怎麼配介系詞：at 7:15、in the morning、on Monday。",
  paras:[
    {en:"There is a bus stop in front of my building. There are three buses to my office.",
     cn:"我家大樓前面有一個公車站。有三班公車可以到我的辦公室。"},
    {en:"On Monday I waited at the bus stop for twenty minutes. There were many people. Everybody looked at their phone.",
     cn:"星期一我在公車站等了二十分鐘。有很多人。每個人都在看手機。"},
    {en:"The bus finally came at eight ten. It was very full. I stood all the way to the office.",
     cn:"公車終於在八點十分來了。車上非常滿。我一路站到辦公室。"},
    {en:"I arrived at eight forty. My meeting started at eight thirty, so I was ten minutes late. Next Monday I will take an earlier bus.",
     cn:"我八點四十到。我的會議八點半開始，所以我遲到了十分鐘。下週一我會搭早一點的公車。"}
  ],
  target:[
    {w:"bus stop",ipa:"/bʌs stɑːp/",pos:"n.",cn:"公車站",def:"A place where a bus stops for people.",ex:"There is a bus stop in front of my building.",exCn:"我住的大樓前面有一個公車站。"},
    {w:"in front of",ipa:"/ɪn frʌnt əv/",pos:"phr.",cn:"在…前面",def:"Directly before something.",ex:"The stop is in front of my building.",exCn:"那個站牌在我住的大樓前面。"},
    {w:"wait",ipa:"/weɪt/",pos:"v.",cn:"等",def:"To stay in a place until something happens.",ex:"I waited for twenty minutes.",exCn:"我等了二十分鐘。"},
    {w:"full",ipa:"/fʊl/",pos:"adj.",cn:"滿的",def:"With no more space inside.",ex:"The bus was very full.",exCn:"公車上非常擠。"},
    {w:"arrive",ipa:"/əˈraɪv/",pos:"v.",cn:"抵達",def:"To get to a place.",ex:"I arrived at eight forty.",exCn:"我八點四十分到。"},
    {w:"late",ipa:"/leɪt/",pos:"adj.",cn:"遲到的",def:"After the right time.",ex:"I was ten minutes late.",exCn:"我遲到了十分鐘。"}
  ],
  questions:[
    {q:"How long did the writer wait?",qCn:"作者等了多久？",opts:["A. Ten minutes","B. Twenty minutes","C. Thirty minutes","D. Forty minutes"],optsCn:["A. 十分鐘", "B. 二十分鐘", "C. 三十分鐘", "D. 四十分鐘"],ans:1,expl:"I waited at the bus stop for twenty minutes."},
    {q:"How late was she for the meeting?",qCn:"她開會遲到了多久？",opts:["A. Five minutes","B. Ten minutes","C. Twenty minutes","D. She was not late"],optsCn:["A. 五分鐘", "B. 十分鐘", "C. 二十分鐘", "D. 她沒有遲到"],ans:1,expl:"My meeting started at eight thirty... I was ten minutes late."},
    {q:"Choose the correct sentence.",qCn:"選出正確的句子。",opts:["There is three buses.","There are three buses.","There have three buses.","There is many buses."],ans:1,expl:"three buses 是複數 → There are。"}
  ],
  upgrade:[
    {b1:"The bus came at eight ten. It was very full.",
     b2:"When the bus finally came at eight ten, it was already full.",
     note:"用 When 子句加上 finally、already，把「等很久」和「還是很滿」的無奈感表達出來。", "sp": "When the bus finally showed up at eight ten, it was already jam-packed.", "spNote": "show up（來了）、jam-packed（擠到爆）是通勤口語。", "b1Cn": "公車八點十分來。它很滿。", "b2Cn": "公車終於在八點十分來時，已經很滿了。", "spCn": "公車八點十分終於來了，已經擠到爆。"},
    {b1:"I was late. Next Monday I take an earlier bus.",
     b2:"Because I was late, I will take an earlier bus next Monday.",
     note:"未來的計畫用 will，並用 Because 把原因和決定連起來。", "sp": "I was late, so next Monday I'm grabbing an earlier bus.", "spNote": "grab a bus（搭上一班車）與進行式表計畫是口語。", "b1Cn": "我遲到了。下週一我搭更早的公車。", "b2Cn": "因為遲到了，下週一我要搭更早的公車。", "spCn": "我遲到了，所以下週一我要改搭早一班的公車。"}
  ]
},

/* ---------------------------------------------------------- 6 */
{
  id:"a06", level:"A2", topic:"居家", words:64, kind:"orig",
  title:"Cleaning Day",
  titleCn:"打掃日",
  focus:"現在完成式入門：have / has + p.p.",
  upFrom:"A2", upTo:"B1",
  intro:"第一次接觸現在完成式。重點是「已經做完了」，常配 already 和 yet。",
  paras:[
    {en:"Every Saturday morning my family cleans the flat. We start at nine and finish before lunch.",
     cn:"每個星期六早上我家會打掃公寓。我們九點開始，午餐前結束。"},
    {en:"I have already washed the floor and cleaned the bathroom. My son has taken out the rubbish.",
     cn:"我已經洗好地板、清好浴室了。我兒子把垃圾拿出去了。"},
    {en:"My husband has not finished the kitchen yet. There are still some dishes in the sink.",
     cn:"我先生還沒把廚房弄完。水槽裡還有一些碗盤。"},
    {en:"After we finish, we always have tea together. A clean home makes me feel calm.",
     cn:"我們做完之後總是一起喝茶。乾淨的家讓我覺得平靜。"}
  ],
  target:[
    {w:"flat",ipa:"/flæt/",pos:"n.",cn:"公寓",def:"A home on one floor of a building.",ex:"My family cleans the flat.",exCn:"我家人一起打掃公寓。"},
    {w:"floor",ipa:"/flɔːr/",pos:"n.",cn:"地板",def:"The surface you walk on inside.",ex:"I have already washed the floor.",exCn:"我已經拖過地板了。"},
    {w:"rubbish",ipa:"/ˈrʌbɪʃ/",pos:"n.",cn:"垃圾",def:"Things you throw away.",ex:"My son has taken out the rubbish.",exCn:"我兒子已經把垃圾拿出去了。"},
    {w:"sink",ipa:"/sɪŋk/",pos:"n.",cn:"水槽",def:"The bowl in a kitchen where you wash dishes.",ex:"There are dishes in the sink.",exCn:"水槽裡有碗盤。"},
    {w:"already",ipa:"/ɔːlˈredi/",pos:"adv.",cn:"已經",def:"Before now.",ex:"I have already washed the floor.",exCn:"我已經拖過地板了。"},
    {w:"calm",ipa:"/kɑːm/",pos:"adj.",cn:"平靜的",def:"Quiet and relaxed.",ex:"A clean home makes me feel calm.",exCn:"乾淨的家讓我感到平靜。"}
  ],
  questions:[
    {q:"What has the son done?",qCn:"兒子已經做了什麼？",opts:["A. Washed the floor","B. Cleaned the bathroom","C. Taken out the rubbish","D. Washed the dishes"],optsCn:["A. 拖了地板", "B. 打掃了浴室", "C. 倒了垃圾", "D. 洗了碗"],ans:2,expl:"My son has taken out the rubbish."},
    {q:"What is NOT finished?",qCn:"什麼還沒做完？",opts:["A. The floor","B. The bathroom","C. The kitchen","D. The rubbish"],optsCn:["A. 地板", "B. 浴室", "C. 廚房", "D. 垃圾"],ans:2,expl:"My husband has not finished the kitchen yet."},
    {q:"Choose the correct sentence.",qCn:"選出正確的句子。",opts:["I have already wash the floor.","I have already washed the floor.","I already washed the floor yet.","I has already washed the floor."],ans:1,expl:"have + 過去分詞 washed；yet 用在否定句。"}
  ],
  upgrade:[
    {b1:"I washed the floor. I cleaned the bathroom.",
     b2:"I have already washed the floor and cleaned the bathroom.",
     note:"兩個動作共用一個 have，第二個動詞直接用過去分詞就好。", "sp": "I've already done the floor and the bathroom.", "spNote": "do the floor／the bathroom 的 do 是家事口語的萬用動詞。", "b1Cn": "我洗了地板。我打掃了浴室。", "b2Cn": "我已經洗好地板、打掃好浴室了。", "spCn": "地板跟浴室我都弄好了。"},
    {b1:"My husband did not finish the kitchen.",
     b2:"My husband has not finished the kitchen yet.",
     note:"加上 yet 表示「還沒，但預期會做」，語氣比單純的過去式精準。", "sp": "My husband still hasn't gotten around to the kitchen.", "spNote": "get around to（一直沒空做）是抱怨家事的經典口語。", "b1Cn": "我先生沒有弄完廚房。", "b2Cn": "我先生還沒弄完廚房。", "spCn": "我先生到現在還沒空弄廚房。"}
  ]
},

/* ---------------------------------------------------------- 7 */
{
  id:"a07", level:"A2", topic:"飲食", words:77, kind:"orig",
  title:"Ordering Lunch",
  titleCn:"點午餐",
  focus:"would like 與 can 的禮貌用法",
  upFrom:"A2", upTo:"B1",
  intro:"點餐、請求時最實用的兩個句型：I would like... 和 Can I...? 比 I want 客氣很多。",
  paras:[
    {en:"There is a small noodle shop near my office. I go there two or three times a week.",
     cn:"我辦公室附近有一間小麵店。我一週去兩三次。"},
    {en:"Yesterday I said, \"I would like beef noodles, please. Can I have it less spicy?\" The owner smiled and said, \"No problem.\"",
     cn:"昨天我說：「我想要一份牛肉麵，麻煩你。可以少辣一點嗎？」老闆笑著說：「沒問題。」"},
    {en:"The soup was hot and the beef was soft. It cost 130 dollars. That is not expensive for lunch.",
     cn:"湯很燙，牛肉很軟。花了 130 元。這個午餐價格不貴。"},
    {en:"I did not finish the noodles, so I asked for a box. I ate the rest for dinner.",
     cn:"我沒吃完麵，所以我要了一個盒子。剩下的我當晚餐吃了。"}
  ],
  target:[
    {w:"would like",ipa:"/wʊd laɪk/",pos:"phr.",cn:"想要（客氣）",def:"A polite way to say \"want\".",ex:"I would like beef noodles, please.",exCn:"我想要一碗牛肉麵，謝謝。"},
    {w:"spicy",ipa:"/ˈspaɪsi/",pos:"adj.",cn:"辣的",def:"With a hot, strong taste.",ex:"Can I have it less spicy?",exCn:"可以幫我做不要那麼辣嗎？"},
    {w:"owner",ipa:"/ˈoʊnər/",pos:"n.",cn:"老闆、擁有者",def:"The person who owns a shop or thing.",ex:"The owner smiled.",exCn:"老闆微笑了。"},
    {w:"soft",ipa:"/sɔːft/",pos:"adj.",cn:"軟的",def:"Easy to bite or press.",ex:"The beef was soft.",exCn:"牛肉很軟嫩。"},
    {w:"cost",ipa:"/kɔːst/",pos:"v.",cn:"花費",def:"To have a price.",ex:"It cost 130 dollars.",exCn:"它要一百三十元。"},
    {w:"the rest",ipa:"/ðə rest/",pos:"n.",cn:"剩下的部分",def:"The part that is left.",ex:"I ate the rest for dinner.",exCn:"剩下的我留到晚餐吃。"}
  ],
  questions:[
    {q:"How often does the writer go to the noodle shop?",qCn:"作者多久去一次麵店？",opts:["A. Every day","B. Two or three times a week","C. Once a month","D. Only on Sundays"],optsCn:["A. 每天", "B. 一週兩三次", "C. 一個月一次", "D. 只有星期天"],ans:1,expl:"I go there two or three times a week."},
    {q:"What did she ask the owner to change?",qCn:"她請老闆改什麼？",opts:["A. Less salt","B. Less spicy","C. More beef","D. A bigger bowl"],optsCn:["A. 少放鹽", "B. 不要那麼辣", "C. 多加牛肉", "D. 換大碗"],ans:1,expl:"Can I have it less spicy?"},
    {q:"Which is the most polite?",qCn:"哪一句最有禮貌？",opts:["I want beef noodles.","Give me beef noodles.","I would like beef noodles, please.","Beef noodles!"],optsCn:["A. 我要牛肉麵。", "B. 給我牛肉麵。", "C. 麻煩給我一碗牛肉麵，謝謝。", "D. 牛肉麵！"],ans:2,expl:"would like + please 是最客氣的說法。"}
  ],
  upgrade:[
    {b1:"I want beef noodles. Please make it not spicy.",
     b2:"I would like beef noodles, and could you make it less spicy, please?",
     note:"would like 與 could you 都是禮貌形式；less spicy 比 not spicy 自然。", "sp": "I'll do the beef noodles — can you go easy on the spice?", "spNote": "I'll do...（我要點…）、go easy on（少放點）是點餐口語二連發。", "b1Cn": "我要牛肉麵。請不要辣。", "b2Cn": "我想要牛肉麵，可以麻煩做得不那麼辣嗎？", "spCn": "我要牛肉麵——辣可以放少一點嗎？"},
    {b1:"I did not finish. I asked for a box.",
     b2:"Since I could not finish the noodles, I asked for a box to take home.",
     note:"用 Since 說明原因，並補上 to take home 讓目的更清楚。", "sp": "I couldn't finish, so I asked for a to-go box.", "spNote": "to-go box（打包盒）是美式餐廳必備單字。", "b1Cn": "我沒吃完。我要了盒子。", "b2Cn": "因為麵吃不完，我要了盒子帶回家。", "spCn": "我吃不完，就跟店家要了個打包盒。"}
  ]
},

/* ---------------------------------------------------------- 8 */
{
  id:"a08", level:"A2", topic:"職場", words:77, kind:"orig",
  title:"A Phone Call to the Office",
  titleCn:"打電話到辦公室",
  focus:"can / cannot 與簡單的未來式 will",
  upFrom:"A2", upTo:"B1",
  intro:"請假、約時間最常用的兩個助動詞。can 表能力或可能，will 表決定或承諾。",
  paras:[
    {en:"This morning my daughter had a fever, so I could not go to work.",
     cn:"今天早上我女兒發燒，所以我不能去上班。"},
    {en:"I called my manager at eight o'clock. I said, \"I am sorry. I cannot come today. My daughter is sick.\"",
     cn:"我八點打電話給主管。我說：「很抱歉。我今天不能來。我女兒生病了。」"},
    {en:"My manager was kind. He said, \"That is fine. Can you work from home this afternoon?\" I said, \"Yes, I can.\"",
     cn:"我的主管很親切。他說：「沒關係。你下午可以在家工作嗎？」我說：「可以。」"},
    {en:"I will finish the report tonight and send it before nine tomorrow morning. My daughter will stay home for one more day.",
     cn:"我今晚會完成報告，明天早上九點前寄出。我女兒會再待在家一天。"}
  ],
  target:[
    {w:"fever",ipa:"/ˈfiːvər/",pos:"n.",cn:"發燒",def:"A body temperature that is too high.",ex:"My daughter had a fever.",exCn:"我女兒發燒了。"},
    {w:"manager",ipa:"/ˈmænɪdʒər/",pos:"n.",cn:"主管",def:"A person who leads a team at work.",ex:"I called my manager.",exCn:"我打電話給我的主管。"},
    {w:"kind",ipa:"/kaɪnd/",pos:"adj.",cn:"親切的",def:"Nice to other people.",ex:"My manager was kind.",exCn:"我的主管人很好。"},
    {w:"work from home",ipa:"/wɜːrk frəm hoʊm/",pos:"phr.",cn:"在家工作",def:"To do your job at home, not at the office.",ex:"Can you work from home this afternoon?",exCn:"你今天下午可以在家工作嗎？"},
    {w:"report",ipa:"/rɪˈpɔːrt/",pos:"n.",cn:"報告",def:"A written piece of work about something.",ex:"I will finish the report tonight.",exCn:"我今天晚上會把報告完成。"},
    {w:"one more day",ipa:"/wʌn mɔːr deɪ/",pos:"phr.",cn:"再一天",def:"One extra day.",ex:"She will stay home for one more day.",exCn:"她會再在家待一天。"}
  ],
  questions:[
    {q:"Why could the writer not go to work?",qCn:"作者為什麼不能去上班？",opts:["A. She was sick","B. Her daughter had a fever","C. The bus was late","D. She had no work"],optsCn:["A. 她生病了", "B. 她女兒發燒", "C. 公車誤點", "D. 她沒有工作"],ans:1,expl:"my daughter had a fever, so I could not go to work."},
    {q:"What did the manager ask?",qCn:"主管要求什麼？",opts:["A. To come in the afternoon","B. To work from home in the afternoon","C. To take three days off","D. To call the doctor"],optsCn:["A. 下午再進公司", "B. 下午在家工作", "C. 休假三天", "D. 打電話給醫生"],ans:1,expl:"Can you work from home this afternoon?"},
    {q:"Choose the correct sentence.",qCn:"選出正確的句子。",opts:["I will to finish the report.","I will finish the report.","I will finishing the report.","I am will finish the report."],ans:1,expl:"will + 原形動詞，中間不加 to、不加 -ing。"}
  ],
  upgrade:[
    {b1:"My daughter is sick. I cannot come to work today.",
     b2:"I am afraid I cannot come in today because my daughter is sick.",
     note:"I am afraid 是英文裡表達壞消息的緩衝說法，職場信件與電話都很常用。", "sp": "My daughter's sick, so I can't make it in today.", "spNote": "make it in（進得了公司）是請假口語的標準說法。", "b1Cn": "我女兒生病了。我今天不能上班。", "b2Cn": "恐怕我今天不能進公司，因為我女兒生病了。", "spCn": "我女兒生病了，我今天進不了公司。"},
    {b1:"I will finish the report tonight. I will send it tomorrow.",
     b2:"I will finish the report tonight and send it to you before nine tomorrow morning.",
     note:"兩個動作共用一個 will；加上具體時間讓承諾更可信。", "sp": "I'll wrap up the report tonight and get it to you by nine tomorrow.", "spNote": "wrap up（收尾完成）、get it to you（給你）是辦公口語。", "b1Cn": "我今晚會寫完報告。我明天會寄出。", "b2Cn": "我今晚會完成報告，並在明天早上九點前寄給你。", "spCn": "我今晚把報告收尾，明天九點前給你。"}
  ]
}

],

grammar:[

/* ---------------------------------------------------------- A2 文法 1 */
{
  id:"ga01", level:"A2", title:"Present Simple (I do / He does)", titleCn:"現在簡單式（A2）",
  srcDays:[],
  summary:"講習慣和事實。最容易錯的只有一件事：主詞是 he / she / it 的時候動詞要加 -s。",
  sections:[
    {h:"基本形式", table:{head:["主詞","肯定","否定","疑問"],rows:[
      ["I / You / We / They","work","do not (don't) work","Do you work?"],
      ["He / She / It","works","does not (doesn't) work","Does he work?"]
    ]}},
    {h:"第三人稱 -s 的拼法", bullets:[
      "一般直接加 -s：work → works、live → lives",
      "字尾 -s, -sh, -ch, -x, -o 加 -es：wash → washes、go → goes、watch → watches",
      "子音 + y → 去 y 加 ies：study → studies、carry → carries",
      "母音 + y 直接加 s：play → plays、buy → buys",
      "特別的：have → has"
    ]},
    {h:"否定與疑問一定要用 do / does", bullets:[
      "有了 does，主要動詞就回到原形：✓ He does not work（✗ He does not works）",
      "疑問句也一樣：✓ Does she like coffee?（✗ Does she likes coffee?）",
      "be 動詞不用 do：✓ He is not busy（✗ He does not be busy）"
    ], examples:[
      {en:"My husband gets up at seven.",cn:"我先生七點起床。",note:"He → gets"},
      {en:"He does not eat breakfast at home.",cn:"他不在家吃早餐。",note:"does not + 原形 eat"},
      {en:"Does the bus come every ten minutes?",cn:"公車每十分鐘一班嗎？",note:"Does + 主詞 + 原形"}
    ]},
    {h:"常一起出現的時間詞", bullets:[
      "always, usually, often, sometimes, never（放在一般動詞前面、be 動詞後面）",
      "every day / every morning / on Mondays / twice a week（放句尾）"
    ]}
  ],
  traps:[
    {bad:"He get up at seven.",good:"He gets up at seven.",why:"第三人稱單數要加 -s，中文沒有這個變化所以最容易漏。"},
    {bad:"She doesn't likes coffee.",good:"She doesn't like coffee.",why:"已經有 doesn't 了，動詞回原形。"},
    {bad:"I am work in a factory.",good:"I work in a factory.",why:"一般動詞不需要 be 動詞幫忙。"},
    {bad:"He always is late.",good:"He is always late.",why:"頻率副詞放在 be 動詞後面。"}
  ],
  quiz:[
    {q:"My sister ____ in Taipei.",qCn:"我姊姊住在台北。",opts:["live","lives","living","is live"],ans:1,expl:"My sister = She → lives。"},
    {q:"____ your husband drink coffee?",qCn:"你先生喝咖啡嗎？",opts:["Do","Does","Is","Are"],ans:1,expl:"主詞是 your husband（第三人稱單數）→ Does。"},
    {q:"He ____ eat breakfast at home.",qCn:"他不在家吃早餐。",opts:["don't","doesn't","isn't","not"],ans:1,expl:"第三人稱單數的否定用 doesn't。"},
    {q:"She ____ her homework every evening.",qCn:"她每天晚上做功課。",opts:["do","does","dos","doing"],ans:1,expl:"do 的第三人稱單數是 does。"}
  ]
},

/* ---------------------------------------------------------- A2 文法 2 */
{
  id:"ga02", level:"A2", title:"Past Simple (was / were, -ed)", titleCn:"過去簡單式（A2）",
  srcDays:[],
  summary:"講已經結束的事。be 動詞用 was / were，一般動詞加 -ed，但常用字多半是不規則的。",
  sections:[
    {h:"be 動詞的過去式", table:{head:["主詞","肯定","否定"],rows:[
      ["I / He / She / It","was","was not (wasn't)"],
      ["You / We / They","were","were not (weren't)"]
    ]}},
    {h:"一般動詞：加 -ed", bullets:[
      "一般加 -ed：call → called、wait → waited",
      "字尾 e 只加 d：like → liked、live → lived",
      "子音 + y → ied：study → studied、carry → carried",
      "短母音 + 單子音要雙寫：stop → stopped、plan → planned"
    ]},
    {h:"一定要背的不規則動詞", table:{head:["原形","過去式","原形","過去式"],rows:[
      ["go","went","have","had"],
      ["eat","ate","take","took"],
      ["come","came","get","got"],
      ["say","said","see","saw"],
      ["buy","bought","give","gave"],
      ["sleep","slept","feel","felt"],
      ["hurt","hurt","cost","cost"]
    ]}},
    {h:"否定與疑問用 did", bullets:[
      "did not (didn't) + 原形：✓ I didn't go（✗ I didn't went）",
      "Did + 主詞 + 原形：✓ Did you eat?（✗ Did you ate?）",
      "be 動詞不用 did：Was she tired? / She wasn't tired."
    ], examples:[
      {en:"Yesterday I was very tired.",cn:"昨天我很累。",note:"I → was"},
      {en:"I called my office in the morning.",cn:"我早上打電話到辦公室。",note:"規則變化 called"},
      {en:"The doctor gave me some medicine.",cn:"醫生給了我一些藥。",note:"give → gave（不規則）"},
      {en:"I didn't finish the noodles.",cn:"我沒吃完麵。",note:"didn't + 原形 finish"}
    ]}
  ],
  traps:[
    {bad:"Yesterday I am tired.",good:"Yesterday I was tired.",why:"有 yesterday 就是過去，be 動詞要用 was。"},
    {bad:"I didn't went to work.",good:"I didn't go to work.",why:"有了 didn't，動詞回原形。"},
    {bad:"Did you ate lunch?",good:"Did you eat lunch?",why:"Did 後面接原形。"},
    {bad:"We was late.",good:"We were late.",why:"We 要配 were。"}
  ],
  quiz:[
    {q:"Last night I ____ a headache.",qCn:"昨天晚上我頭痛。",opts:["have","has","had","having"],ans:2,expl:"have 的過去式是 had。"},
    {q:"The clinic ____ near my home.",qCn:"診所在我家附近。",opts:["is","was","were","did"],ans:1,expl:"單數主詞的過去 be 動詞是 was。"},
    {q:"I ____ finish the report yesterday.",qCn:"我昨天沒有完成報告。",opts:["didn't","don't","wasn't","doesn't"],ans:0,expl:"過去式否定用 didn't。"},
    {q:"____ you see the doctor yesterday?",qCn:"你昨天有去看醫生嗎？",opts:["Do","Did","Was","Were"],ans:1,expl:"一般動詞的過去疑問句用 Did。"}
  ]
},

/* ---------------------------------------------------------- A2 文法 3 */
{
  id:"ga03", level:"A2", title:"there is / there are, some / any", titleCn:"there is / there are 與 some / any（A2）",
  srcDays:[],
  summary:"描述「某個地方有什麼」。單數用 there is，複數用 there are；不可數名詞一律用 there is。",
  sections:[
    {h:"單數還是複數，看後面那個名詞", table:{head:["","例句"],rows:[
      ["單數","There is a bus stop near my house."],
      ["複數","There are three buses to my office."],
      ["不可數","There is some milk in the fridge."],
      ["過去單數","There was a lot of rain last night."],
      ["過去複數","There were many people at the stop."]
    ]}},
    {h:"可數與不可數", bullets:[
      "可數：a bottle / two bottles、an egg / three eggs、a person / people",
      "不可數（不能加 s、不能加 a）：water, milk, rice, money, time, advice, information, homework",
      "不可數要數量時借容器或單位：a bottle of water、a bowl of rice、a piece of advice"
    ]},
    {h:"some 與 any 怎麼選", table:{head:["句型","用法","例句"],rows:[
      ["肯定句","some","I need some milk."],
      ["否定句","any","They didn't have any rice."],
      ["疑問句","any","Do you have any questions?"],
      ["請求／邀請（客氣）","some","Would you like some tea?"]
    ]}},
    {h:"常見搭配", bullets:[
      "many + 可數複數：many people｜much + 不可數：much time",
      "a lot of / lots of 兩種都可以：a lot of people / a lot of time",
      "a few + 可數：a few friends｜a little + 不可數：a little water"
    ], examples:[
      {en:"There are many people at the bus stop.",cn:"公車站有很多人。",note:"many + 可數複數"},
      {en:"There isn't much time before the meeting.",cn:"會議前沒有多少時間了。",note:"much + 不可數，用在否定句"},
      {en:"Would you like some hot tea?",cn:"你想喝點熱茶嗎？",note:"客氣的邀請用 some"}
    ]}
  ],
  traps:[
    {bad:"There is three buses.",good:"There are three buses.",why:"後面是複數 buses，要用 there are。"},
    {bad:"There have a bus stop near my house.",good:"There is a bus stop near my house.",why:"中文說「有」，英文的「某處有」要用 there is / there are，不是 have。"},
    {bad:"I need two milks.",good:"I need two bottles of milk.",why:"milk 不可數，要借單位。"},
    {bad:"Do you have some questions?",good:"Do you have any questions?",why:"疑問句一般用 any。"}
  ],
  quiz:[
    {q:"____ a convenience store next to my building.",qCn:"我住的大樓旁邊有一家便利商店。",opts:["There are","There is","There have","It has"],ans:1,expl:"a convenience store 是單數 → There is。"},
    {q:"They didn't have ____ rice.",qCn:"他們沒有任何米了。",opts:["some","any","many","a"],ans:1,expl:"否定句用 any。"},
    {q:"There ____ many people at the stop yesterday.",qCn:"昨天站牌那裡有很多人。",opts:["is","are","was","were"],ans:3,expl:"過去 + 複數 → were。"},
    {q:"I bought two ____ of water.",qCn:"我買了兩瓶水。",opts:["bottle","bottles","bottled","bottle's"],ans:1,expl:"two 後面名詞要複數 bottles。"}
  ]
}

]

};
