// ============================================================
//  每日新內容（由每日排程自動追加，最新的放在最前面）
//  articles：真實新聞改寫成 B1+/B2（附原文連結）或依筆記主題原創
//  grammar ：依 syllabus.json 的單元順序，每天一個新文法點（不重複）
//  ⚠ 文法解說、例句、練習題全部原創撰寫，不重製任何教科書內容
// ============================================================
window.DAILY = {

articles:[

{
  id:"d20260814a2", date:"2026-08-14", level:"A2", topic:"週末活動", words:71, kind:"orig",
  title:"My Saturday at the Night Market",
  titleCn:"我的夜市星期六",
  focus:"過去簡單式：不規則動詞（went, took, ate, bought, saw）",
  upFrom:"A2", upTo:"B1",
  intro:"講「上週末做了什麼」一定會用到過去式，而最常用的動詞偏偏都是不規則變化：go→went、take→took、eat→ate、buy→bought、see→saw。讀的時候把這五個字圈出來。",
  paras:[
    {en:"Last Saturday I went to the night market with my friend. We took the bus and got there at seven.",
     cn:"上週六我和朋友去逛夜市。我們搭公車，七點到那裡。"},
    {en:"First we ate fried chicken and drank papaya milk. The food was hot and very good.",
     cn:"我們先吃了炸雞、喝了木瓜牛奶。食物熱騰騰的，非常好吃。"},
    {en:"My friend bought a jacket at a small store. I saw a cheap camera, but I did not buy it.",
     cn:"我朋友在一家小店買了一件外套。我看到一台便宜的相機，但我沒有買。"},
    {en:"We came home at ten thirty. I was tired, but I had a great time.",
     cn:"我們十點半回到家。我很累，但玩得很開心。"}
  ],
  target:[
    {w:"night market",ipa:"/naɪt ˈmɑːrkɪt/",pos:"n.",cn:"夜市",def:"A street market that opens at night.",ex:"I went to the night market with my friend.",exCn:"我和朋友去逛夜市。"},
    {w:"take the bus",ipa:"/teɪk ðə bʌs/",pos:"phr.",cn:"搭公車",def:"To travel by bus.",ex:"We took the bus and got there at seven.",exCn:"我們搭公車，七點到那裡。"},
    {w:"buy",ipa:"/baɪ/",pos:"v.",cn:"買（過去式 bought）",def:"To get something with money.",ex:"My friend bought a jacket at a small store.",exCn:"我朋友在一家小店買了一件外套。"},
    {w:"cheap",ipa:"/tʃiːp/",pos:"adj.",cn:"便宜的",def:"Not costing a lot of money.",ex:"I saw a cheap camera.",exCn:"我看到一台便宜的相機。"},
    {w:"tired",ipa:"/ˈtaɪərd/",pos:"adj.",cn:"累的",def:"Needing rest or sleep.",ex:"I was tired, but I had a great time.",exCn:"我很累，但玩得很開心。"},
    {w:"have a great time",ipa:"/hæv ə ɡreɪt taɪm/",pos:"phr.",cn:"玩得很開心",def:"To enjoy yourself very much.",ex:"I had a great time.",exCn:"我玩得很開心。"}
  ],
  questions:[
    {q:"How did the writer go to the night market?",opts:["A. By car","B. By bus","C. By train","D. On foot"],ans:1,expl:"We took the bus and got there at seven."},
    {q:"What did the friend buy?",opts:["A. A camera","B. Fried chicken","C. A jacket","D. Papaya milk"],ans:2,expl:"My friend bought a jacket at a small store."},
    {q:"Which sentence is correct?",opts:["A. I goed to the night market.","B. I went to the night market.","C. I go to the night market yesterday.","D. I was go to the night market."],ans:1,expl:"go 的過去式是不規則的 went，不能加 -ed，也不能配 was。"}
  ],
  upgrade:[
    {b1:"We ate fried chicken. We drank papaya milk.",
     b2:"We ate fried chicken and drank papaya milk.",
     note:"兩個動作同一個主詞時，用 and 連起來、主詞只寫一次，句子馬上變順。"},
    {b1:"I saw a cheap camera. I did not buy it.",
     b2:"I saw a cheap camera, but I did not buy it.",
     note:"前後意思相反（看到了→卻沒買），用 but 接起來最自然。"}
  ]
},

{
  id:"d20260814b1", date:"2026-08-14", level:"B1", topic:"天氣與日常", words:122, kind:"orig",
  title:"A Rainy Typhoon Day at Home",
  titleCn:"颱風天在家",
  focus:"過去簡單式＋連接詞 because / so / when",
  upFrom:"B1", upTo:"B1+",
  intro:"颱風天不上班不上課，你在家做了什麼？讀的時候注意三個連接詞：because 說原因、so 說結果、when 說時間先後。",
  paras:[
    {en:"Last Wednesday there was a typhoon, so we did not go to work. The wind was very strong and the rain was heavy all morning. My mother called me because she was worried about the flooding near our house.",
     cn:"上週三有颱風，所以我們沒有去上班。風很大，整個早上雨都下得很大。我媽打電話給我，因為她擔心我們家附近會淹水。"},
    {en:"I stayed home and cleaned the kitchen. Then I watched the news on TV. The reporter said several roads were closed and some trees fell down. When the rain stopped in the afternoon, I went outside to check.",
     cn:"我待在家裡打掃廚房，然後看電視新聞。記者說好幾條路被封了，有些樹倒了。下午雨停的時候，我出去看了一下。"},
    {en:"There was water on the street, but it was not too deep. My neighbour was cleaning leaves from the drain. I helped him for about twenty minutes. After that, the sky became clear and we could see the sunset. It was actually a beautiful evening.",
     cn:"街上有積水，但不算太深。鄰居在清水溝裡的落葉，我幫他清了大約二十分鐘。之後天空放晴，我們看到了夕陽。那其實是個很美的傍晚。"}
  ],
  target:[
    {w:"typhoon",ipa:"/taɪˈfuːn/",pos:"n.",cn:"颱風",def:"A very strong storm with heavy rain and wind.",ex:"Last Wednesday there was a typhoon.",exCn:"上週三有颱風。"},
    {w:"flooding",ipa:"/ˈflʌdɪŋ/",pos:"n.",cn:"淹水、水災",def:"When water covers an area that is usually dry.",ex:"She was worried about the flooding near our house.",exCn:"她擔心我們家附近會淹水。"},
    {w:"fall down",ipa:"/fɔːl daʊn/",pos:"phr.v.",cn:"倒下、掉下來",def:"To drop from a standing position to the ground.",ex:"Some trees fell down.",exCn:"有些樹倒了。"},
    {w:"drain",ipa:"/dreɪn/",pos:"n.",cn:"排水溝",def:"A pipe or channel that carries water away.",ex:"My neighbour was cleaning leaves from the drain.",exCn:"鄰居在清水溝裡的落葉。"},
    {w:"sunset",ipa:"/ˈsʌnset/",pos:"n.",cn:"日落、夕陽",def:"The time when the sun goes down and the sky turns red or orange.",ex:"We could see the sunset.",exCn:"我們看到了夕陽。"}
  ],
  questions:[
    {q:"Why did they not go to work?",opts:["A. It was a holiday","B. There was a typhoon","C. The office was closed for cleaning","D. They were sick"],ans:1,expl:"Last Wednesday there was a typhoon, so we did not go to work."},
    {q:"What did the writer do first at home?",opts:["A. Watched TV","B. Called his mother","C. Cleaned the kitchen","D. Went outside"],ans:2,expl:"I stayed home and cleaned the kitchen. Then I watched the news."},
    {q:"What happened when the rain stopped?",opts:["A. More trees fell down","B. The writer went outside to check","C. The flooding got worse","D. The writer went to work"],ans:1,expl:"When the rain stopped in the afternoon, I went outside to check."}
  ],
  upgrade:[
    {b1:"The wind was strong. The rain was heavy.",
     b2:"The wind was very strong and the rain was heavy all morning.",
     note:"用 and 把兩個描述合在一起，再加上 all morning 點出時間長度，資訊更完整。"},
    {b1:"My mother called me. She was worried.",
     b2:"My mother called me because she was worried about the flooding.",
     note:"用 because 把原因接在後面，不用分兩句講，讀起來更流暢。"}
  ]
},

{
  id:"d20260814b1p", date:"2026-08-14", level:"B1+", topic:"天氣與交通", words:146, kind:"orig",
  title:"The Typhoon That Changed My Plans",
  titleCn:"颱風打亂了我的計畫",
  focus:"現在完成式 + 被動語態：描述「到目前為止」的天氣影響",
  upFrom:"B1+", upTo:"B2",
  intro:"同一個颱風，這次從「通勤族」的角度來看。注意現在完成式搭配被動的用法：have been cancelled、has been closed——事情已經發生了，而且影響還在。讀的時候找出哪些句子是「已經發生且仍在持續」的。",
  paras:[
    {en:"I was supposed to take the train to Taipei this morning, but my trip has been cancelled because of the typhoon. The weather bureau issued a sea warning yesterday, and since then the situation has got worse. More than 200 millimetres of rain has fallen in the northern mountains overnight.",
     cn:"我今天早上本來要搭火車去台北，但因為颱風我的行程被取消了。氣象局昨天發布了海上警報，從那之後情況越來越糟。北部山區一個晚上降了超過 200 毫米的雨。"},
    {en:"Several highways have been closed, and train services on the east coast have been suspended until further notice. My colleague texted me that her neighbourhood has been flooded since 5 a.m. She has moved to her parents' house on higher ground. I have never seen this much rain in August before.",
     cn:"好幾條高速公路已經封閉，東海岸的火車也停駛到另行通知為止。我同事傳訊息跟我說，她家那一帶從早上五點就開始淹水。她已經搬去住在高處的爸媽家了。我從來沒有在八月看過這麼大的雨。"},
    {en:"The good news is that the typhoon is expected to turn north tonight and move away from Taiwan by tomorrow afternoon. I have already rebooked my train ticket for Friday. For now, I am working from home and hoping the power does not go out.",
     cn:"好消息是颱風預計今晚會轉向北方，明天下午就會離開台灣。我已經把火車票改訂到週五了。現在我先在家工作，希望不要停電。"}
  ],
  target:[
    {w:"weather bureau",ipa:"/ˈweðər ˈbjʊroʊ/",pos:"n.",cn:"氣象局",def:"A government office that studies and reports the weather.",ex:"The weather bureau issued a sea warning.",exCn:"氣象局發布了海上警報。"},
    {w:"sea warning",ipa:"/siː ˈwɔːrnɪŋ/",pos:"n.",cn:"海上警報",def:"An official notice about dangerous weather near the coast.",ex:"The weather bureau issued a sea warning yesterday.",exCn:"氣象局昨天發布了海上警報。"},
    {w:"suspend",ipa:"/səˈspend/",pos:"v.",cn:"暫停",def:"To stop something for a period of time.",ex:"Train services have been suspended.",exCn:"火車停駛了。"},
    {w:"higher ground",ipa:"/ˈhaɪər ɡraʊnd/",pos:"n.",cn:"高處、地勢較高的地方",def:"Land that is above the level that floods reach.",ex:"She moved to her parents' house on higher ground.",exCn:"她搬去住在高處的爸媽家。"},
    {w:"rebook",ipa:"/ˌriːˈbʊk/",pos:"v.",cn:"改訂、重新訂位",def:"To book a ticket again for a different time.",ex:"I have already rebooked my train ticket for Friday.",exCn:"我已經把火車票改訂到週五了。"},
    {w:"work from home",ipa:"/wɜːrk frəm hoʊm/",pos:"phr.",cn:"在家工作",def:"To do your job at home instead of going to the office.",ex:"I am working from home.",exCn:"我在家工作。"}
  ],
  questions:[
    {q:"Why has the writer's trip been cancelled?",
     opts:["A. The train broke down","B. Because of the typhoon","C. The ticket was too expensive","D. The office is closed today"],
     ans:1,expl:"my trip has been cancelled because of the typhoon。"},
    {q:"What has the writer's colleague done?",
     opts:["A. Gone to work anyway","B. Stayed in her flooded house","C. Moved to her parents' house","D. Taken the train to Taipei"],
     ans:2,expl:"She has moved to her parents' house on higher ground."},
    {q:"Which sentence uses the present perfect passive?",
     opts:["A. I was supposed to take the train.","B. Several highways have been closed.","C. The typhoon is expected to turn north.","D. I am working from home."],
     ans:1,expl:"have been closed ＝ have been + 過去分詞，是現在完成式的被動語態。"}
  ],
  upgrade:[
    {b1:"They cancelled my trip. The typhoon is very bad.",
     b2:"My trip has been cancelled because of the typhoon.",
     note:"重點是「我的行程」不是「誰取消的」，用被動把受影響的事放前面；because of 接名詞比分兩句簡潔。"},
    {b1:"The rain started last night. It is still raining now.",
     b2:"More than 200 millimetres of rain has fallen overnight.",
     note:"現在完成式把「過去到現在」壓成一句，加上具體數字讓描述更有力。"}
  ]
},

{
  id:"d20260814", date:"2026-08-14", level:"B2", topic:"天災與天氣", words:259, kind:"original",
  title:"Grounded by the Flood",
  titleCn:"被風雨困在機場",
  focus:"被動語態：描述天氣造成的取消、延誤與官方安排",
  intro:"完全原創的機場情境文。注意「事情發生在我身上、但不是我做的」全部用被動：was cancelled、were grounded、were told、was rebooked。讀的時候把每個 be + 過去分詞畫出來，想一想動作的執行者是誰、為什麼不用說出來。",
  paras:[
    {en:"When I arrived at the airport on Tuesday morning, the departure board was covered in red. My flight to Taipei had been cancelled, and at first no explanation was given. Ten minutes later an announcement was made in three languages: a typhoon was approaching the north coast of Taiwan, and every morning flight to the island had been grounded until further notice.",
     cn:"週二早上我抵達機場時，出境看板一片紅字。我飛台北的航班被取消了，而且一開始沒有給任何說明。十分鐘後，機場用三種語言廣播：颱風正在接近台灣北部海岸，所有飛往台灣的早班機都被停飛，直到另行通知。"},
    {en:"The terminal filled quickly. Long queues formed at the service counters, where we were told that nothing could be confirmed until the storm's path became clearer. Meal vouchers were handed out around noon, which calmed people down a little. I was offered a seat on a flight two days later, but I asked to be put on the waiting list for the next evening instead.",
     cn:"航廈很快就擠滿了人。服務櫃檯前排起長長的隊伍，我們被告知在颱風路徑明朗之前，什麼都無法確認。中午前後發放了餐券，人群才稍微冷靜下來。航空公司給我兩天後的機位，但我要求改排隔天晚上的候補名單。"},
    {en:"Meanwhile, the news from Taiwan was worrying. Several coastal towns had been flooded overnight, and thousands of homes were left without power. Train services along the east coast were suspended, and residents in low-lying areas were advised to move to higher ground. Watching the videos on my phone, I understood why the airline was being so careful.",
     cn:"與此同時，來自台灣的消息令人擔心。幾個沿海城鎮一夜之間被淹，數千戶人家停電。東海岸的火車停駛，低窪地區的居民被勸告撤往高處。看著手機裡的影片，我明白航空公司為什麼這麼謹慎。"},
    {en:"In the end, I was rebooked on Thursday's evening flight, and my hotel in Taipei was changed without any extra charge. The whole experience taught me two things. First, travel plans can be destroyed by weather at any time, so important meetings should never be booked for the day you land. Second, when everything is out of your control, the calmest person in the queue is usually served first — or at least treated best.",
     cn:"最後，我被改訂到週四晚上的航班，台北的飯店也免費改期。整件事教了我兩件事：第一，旅行計畫隨時可能被天氣毀掉，重要會議絕對不要排在落地當天；第二，當一切都不在你的掌控之中時，隊伍裡最冷靜的人通常最先被服務——至少會被對待得最好。"}
  ],
  target:[
    {w:"departure board",ipa:"/dɪˈpɑːrtʃər bɔːrd/",pos:"n.",cn:"出境航班看板",def:"A screen at an airport that shows which flights are leaving.",ex:"The departure board was covered in red.",exCn:"出境看板一片紅字。"},
    {w:"ground (a flight)",ipa:"/ɡraʊnd/",pos:"v.",cn:"（航班）停飛",def:"To stop a plane from flying.",ex:"Every morning flight to the island had been grounded.",exCn:"所有飛往該島的早班機都被停飛。"},
    {w:"until further notice",ipa:"/ənˈtɪl ˈfɜːrðər ˈnoʊtɪs/",pos:"phr.",cn:"直到另行通知",def:"From now until an official change is announced.",ex:"Flights had been grounded until further notice.",exCn:"航班被停飛，直到另行通知。"},
    {w:"voucher",ipa:"/ˈvaʊtʃər/",pos:"n.",cn:"券、兌換券",def:"A piece of paper you can use instead of money.",ex:"Meal vouchers were handed out around noon.",exCn:"中午前後發放了餐券。"},
    {w:"waiting list",ipa:"/ˈweɪtɪŋ lɪst/",pos:"n.",cn:"候補名單",def:"A list of people waiting for something to become available.",ex:"I asked to be put on the waiting list.",exCn:"我要求排進候補名單。"},
    {w:"suspend",ipa:"/səˈspend/",pos:"v.",cn:"暫停、停駛",def:"To stop a service for a period of time.",ex:"Train services along the east coast were suspended.",exCn:"東海岸的火車停駛。"},
    {w:"low-lying",ipa:"/ˌloʊ ˈlaɪɪŋ/",pos:"adj.",cn:"低窪的",def:"Close to sea level and easy to flood.",ex:"Residents in low-lying areas were advised to move.",exCn:"低窪地區的居民被勸告撤離。"},
    {w:"rebook",ipa:"/ˌriːˈbʊk/",pos:"v.",cn:"改訂、重新訂位",def:"To book a ticket again for a different time.",ex:"I was rebooked on Thursday's evening flight.",exCn:"我被改訂到週四晚上的航班。"},
    {w:"out of your control",ipa:"/aʊt əv jər kənˈtroʊl/",pos:"phr.",cn:"不在你的掌控之中",def:"Something you cannot change or decide.",ex:"When everything is out of your control, stay calm.",exCn:"當一切都不在你的掌控中時，保持冷靜。"}
  ],
  questions:[
    {q:"Why was the writer's flight cancelled?",
     opts:["A. The plane had a technical problem","B. A typhoon was approaching Taiwan","C. The airline overbooked the flight","D. The airport in Vietnam was flooded"],
     ans:1, expl:"廣播說 a typhoon was approaching the north coast of Taiwan，所以所有早班機 had been grounded。"},
    {q:"What did the writer ask the airline to do?",
     opts:["A. Give a full refund","B. Provide a free hotel","C. Put her on the waiting list for the next evening","D. Book a flight two days later"],
     ans:2, expl:"I asked to be put on the waiting list for the next evening instead——她拒絕了兩天後的機位。"},
    {q:"According to the news, what happened in Taiwan overnight?",
     opts:["A. The airport was closed for a week","B. Several coastal towns were flooded","C. All hotels were evacuated","D. The typhoon changed direction"],
     ans:1, expl:"Several coastal towns had been flooded overnight, and thousands of homes were left without power。"},
    {q:"Which sentence uses the passive voice?",
     opts:["A. The terminal filled quickly.","B. I understood why the airline was careful.","C. Meal vouchers were handed out around noon.","D. The whole experience taught me two things."],
     ans:2, expl:"were handed out ＝ be 動詞 + 過去分詞，是被動語態；其他三句都是主動。"}
  ],
  upgrade:[
    {b1:"The airline cancelled my flight because of the typhoon.",
     b2:"My flight was cancelled, and no explanation was given at first.",
     note:"報告壞消息時，重點是「我的航班」而不是「誰取消的」，用被動把受影響的東西放到句首，語氣也更客觀。"},
    {b1:"They told us to wait until they knew the storm's path.",
     b2:"We were told that nothing could be confirmed until the storm's path became clearer.",
     note:"we were told that... 是轉述官方訊息的標準寫法，比模糊的 they told us 正式得多。"}
  ]
},

{
  id:"d20260813", date:"2026-08-13", level:"B1+", topic:"新聞·天災", words:215,
  title:"A Sea Warning, but No Landfall",
  titleCn:"發布海上警報，但沒有登陸",
  focus:"現在完成進行式與距離／速度的描述",
  kind:"news",
  source:"改寫自 Taipei Times 報導（2026/08/08）— 事實取自原文，英文由本站重寫成 B1+ 程度",
  sourceUrl:"https://www.taipeitimes.com/News/front/archives/2026/08/08/2003862135",
  intro:"這是一篇真實新聞的改寫。注意氣象報導怎麼描述位置（680 km east-northeast of Taipei）、速度（moving west at 10 kph）與範圍（a storm radius of 280 km）——這三種說法幾乎每篇颱風新聞都會出現。",
  paras:[
    {en:"Last Saturday the Central Weather Administration issued a sea warning for Typhoon Dolphin. At five in the afternoon the storm was about 680 kilometres east-northeast of Taipei and had been moving west at only 10 kilometres per hour — slow enough for forecasters to be confident about its path.",
     cn:"上週六，中央氣象署對颱風 Dolphin 發布了海上警報。下午五點時，這個風暴位於台北東北東方約 680 公里處，並且一直以每小時僅 10 公里的速度向西移動——慢得足以讓預報人員對它的路徑有信心。"},
    {en:"Dolphin was a moderate typhoon with maximum sustained winds of 144 kilometres per hour and a storm radius of 280 kilometres. It came closest to Taiwan on Saturday and Sunday, but it was never expected to make landfall here. Forecasters said it would probably reach China's Zhejiang Province instead.",
     cn:"Dolphin 是一個中度颱風，最大持續風速為每小時 144 公里，暴風半徑 280 公里。它在週六與週日最接近台灣，但從未預期會在此登陸。預報人員說它應該會轉而抵達中國浙江省。"},
    {en:"A typhoon does not have to land to cause problems. The heaviest rain fell on northern Taiwan and the central mountains, and the mountainous areas north of Taichung were placed under the highest rainfall alert. Long swells were expected along the north and east coasts, as well as around Green Island, Orchid Island and the Hengchun Peninsula, until Monday.",
     cn:"颱風不需要登陸也能造成問題。最強的降雨落在台灣北部與中央山區，台中以北的山區被列入最高等級的降雨警戒。北部與東部海岸，以及綠島、蘭嶼與恆春半島一帶，預期到週一都會有長浪。"},
    {en:"The advice was simple: stay away from the coastline and avoid all water activities. After the storm passed, southwesterly winds brought scattered showers to the southwest, while most of the island stayed hot and sunny with afternoon thunderstorms in the north and centre.",
     cn:"官方建議很簡單：遠離海岸線，避免所有水域活動。風暴過後，西南風為西南部帶來零星陣雨，而全島大部分地區則維持炎熱晴朗，北部與中部午後有雷雨。"}
  ],
  target:[
    {w:"issue a warning",ipa:"/ˈɪʃuː ə ˈwɔːrnɪŋ/",pos:"phr.",cn:"發布警報",def:"To officially tell the public about a danger.",ex:"The agency issued a sea warning.",exCn:"氣象單位發布了海上警報。"},
    {w:"sustained winds",ipa:"/səˈsteɪnd wɪndz/",pos:"n.",cn:"持續風速",def:"Wind speed measured over a period of time, not a single gust.",ex:"Maximum sustained winds of 144 kph.",exCn:"最大持續風速為每小時 144 公里。"},
    {w:"storm radius",ipa:"/stɔːrm ˈreɪdiəs/",pos:"n.",cn:"暴風半徑",def:"The distance from the centre of a storm to its outer edge.",ex:"A storm radius of 280 kilometres.",exCn:"暴風半徑為 280 公里。"},
    {w:"make landfall",ipa:"/meɪk ˈlændfɔːl/",pos:"phr.",cn:"登陸",def:"When a storm reaches land from the sea.",ex:"It was not expected to make landfall in Taiwan.",exCn:"預計不會在台灣登陸。"},
    {w:"forecaster",ipa:"/ˈfɔːrkæstər/",pos:"n.",cn:"預報人員",def:"A person whose job is to say what the weather will be.",ex:"Forecasters were confident about its path.",exCn:"預報人員對它的路徑很有把握。"},
    {w:"alert",ipa:"/əˈlɜːrt/",pos:"n.",cn:"警戒（等級）",def:"An official warning about a possible danger.",ex:"The area was placed under the highest rainfall alert.",exCn:"該地區被列入最高等級的降雨警報。"},
    {w:"swell",ipa:"/swel/",pos:"n.",cn:"長浪、湧浪",def:"Long, slow waves far from where the wind is blowing.",ex:"Long swells were expected along the east coast.",exCn:"東岸預計會有長浪。"},
    {w:"scattered showers",ipa:"/ˈskætərd ˈʃaʊərz/",pos:"n.",cn:"零星陣雨",def:"Short periods of rain in some places but not others.",ex:"Southwesterly winds brought scattered showers.",exCn:"西南風帶來零星陣雨。"}
  ],
  questions:[
    {q:"Where was Typhoon Dolphin expected to make landfall?",
     opts:["A. Northern Taiwan","B. Green Island","C. Zhejiang Province, China","D. The Hengchun Peninsula"],
     ans:2, expl:"Forecasters said it would probably reach China's Zhejiang Province instead。"},
    {q:"Which area was under the highest rainfall alert?",
     opts:["A. Southwestern plains","B. Mountainous areas north of Taichung","C. Orchid Island","D. Taipei city centre"],
     ans:1, expl:"the mountainous areas north of Taichung were placed under the highest rainfall alert。"},
    {q:"What does \"a storm radius of 280 kilometres\" tell us?",
     opts:["A. How fast the storm moved","B. How far the storm's edge is from its centre","C. How much rain fell","D. How long the warning lasted"],
     ans:1, expl:"radius ＝ 半徑，指風暴中心到外緣的距離。"},
    {q:"Why were forecasters fairly confident about the storm's path?",
     opts:["A. It was very small","B. It was moving slowly, at only 10 kph","C. It had already landed","D. It changed direction often"],
     ans:1, expl:"had been moving west at only 10 kilometres per hour — slow enough for forecasters to be confident。"}
  ],
  upgrade:[
    {b1:"The storm moved west. It was slow.",
     b2:"The storm had been moving west at only 10 kilometres per hour.",
     note:"had been + V-ing 表示「到那個時間點為止一直在進行」，是氣象與新聞報導的標準寫法。"},
    {b1:"A typhoon can cause problems even if it does not land.",
     b2:"A typhoon does not have to land to cause problems.",
     note:"用 does not have to + 原形 把讓步關係壓成一個簡潔的主句，比 even if 子句更有力。"}
  ]
}

],

grammar:[

{
  id:"dg20260814a2", date:"2026-08-14", unitNo:1,
  level:"A2", title:"Present Continuous (I am doing)", titleCn:"現在進行式（基礎）",
  srcDays:[],
  summary:"be（am / is / are）＋動詞-ing。講「現在這一刻正在做的事」，兩塊缺一不可：be 不能少，-ing 也不能少。",
  sections:[
    {h:"基本形式", body:[
      "I am working　|　he / she / it is working　|　you / we / they are working",
      "否定：I'm not working / He isn't working / They aren't working",
      "疑問：Are you working? / What is she doing?"
    ]},
    {h:"什麼時候用", bullets:[
      "① 講話的這一刻正在發生：I am eating lunch now.（我現在正在吃午餐）",
      "② 對方問你「在幹嘛」：— What are you doing? — I'm watching TV.",
      "③ 描述眼前看到的畫面：Look! It is raining.（你看，正在下雨）"
    ]},
    {h:"-ing 的拼字規則", table:{head:["規則","原形","-ing"],rows:[
      ["直接加 -ing","work / eat","working / eating"],
      ["字尾 e 去掉再加","make / write","making / writing"],
      ["短母音+子音要重複字尾","sit / run","sitting / running"],
      ["字尾 ie 改 y","lie / die","lying / dying"]
    ]}},
    {h:"跟現在簡單式比一比", table:{head:["","現在進行式","現在簡單式"],rows:[
      ["意思","現在這一刻","平常的習慣"],
      ["例句","I am drinking tea now.","I drink tea every morning."],
      ["常見時間詞","now / right now / Look!","every day / usually / always"]
    ]}, examples:[
      {en:"I am cooking dinner now.",cn:"我現在正在煮晚餐。",note:"now ＝ 進行式的訊號字"},
      {en:"She is talking on the phone.",cn:"她正在講電話。",note:"主詞是 she，be 動詞用 is"},
      {en:"They are waiting for the bus.",cn:"他們正在等公車。",note:"主詞是 they，be 動詞用 are"}
    ]}
  ],
  traps:[
    {bad:"I working now.",good:"I am working now.",why:"中文的「在」只有一個字，所以很容易忘記英文要兩塊：be ＋ V-ing。be 動詞不能省。"},
    {bad:"He is play basketball.",good:"He is playing basketball.",why:"有了 be 動詞卻忘了 -ing 也不行，兩塊要一起出現。"},
    {bad:"She cooking dinner.",good:"She is cooking dinner.",why:"-ing 有了、be 動詞卻不見了，這句在英文裡不是完整句子。"},
    {bad:"I am go to work now.",good:"I am going to work now.",why:"be 後面的動詞一定要變 -ing，不能放原形。"}
  ],
  quiz:[
    {q:"Look! It ____ outside.",opts:["rain","rains","is raining","raining"],ans:2,expl:"Look! 表示眼前正在發生 → is raining。"},
    {q:"— What are you doing? — I ____ TV.",opts:["watch","am watching","watching","is watching"],ans:1,expl:"問句是進行式，答句也用進行式；主詞 I 配 am。"},
    {q:"She ____ on the phone right now.",opts:["talk","is talking","talking","are talking"],ans:1,expl:"right now ＝ 現在這一刻；she 配 is。"},
    {q:"run 的 -ing 是哪一個？",opts:["runing","runeing","running","runnning"],ans:2,expl:"短母音＋子音結尾，字尾 n 要重複再加 -ing → running。"}
  ]
},

{
  id:"dg20260814b1", date:"2026-08-14", unitNo:1,
  level:"B1", title:"Present Continuous vs Present Simple", titleCn:"現在進行式 vs 現在簡單式",
  srcDays:[],
  summary:"什麼時候用 I am doing，什麼時候用 I do？進行式講「現在這段時間」的事，簡單式講「一直都這樣」的事。搞混了意思就不一樣。",
  sections:[
    {h:"核心差別", table:{head:["","現在進行式 (I am doing)","現在簡單式 (I do)"],rows:[
      ["感覺","暫時的、正在發生","永久的、一直都這樣"],
      ["時間","now / this week / today","every day / usually / always"],
      ["例句","I'm reading a good book.（最近在讀）","I read before bed every night.（習慣）"]
    ]}},
    {h:"比較：同一個動詞，不同意思", examples:[
      {en:"I'm living with my parents this month.",cn:"這個月我暫時住在爸媽家。",note:"this month ＝ 暫時的 → 進行式"},
      {en:"I live in Taoyuan.",cn:"我住在桃園。",note:"住在哪裡 ＝ 長期事實 → 簡單式"},
      {en:"She's working at a café this summer.",cn:"她這個暑假在咖啡廳打工。",note:"this summer ＝ 暫時的 → 進行式"},
      {en:"She works at a bank.",cn:"她在銀行工作。",note:"職業 ＝ 長期 → 簡單式"}
    ]},
    {h:"⚠ 狀態動詞不用進行式", bullets:[
      "有些動詞描述的是「狀態」而不是「動作」，不能加 -ing：",
      "✓ I know the answer. ✗ I am knowing the answer.",
      "✓ She likes coffee. ✗ She is liking coffee.",
      "✓ I want to go home. ✗ I am wanting to go home.",
      "常見狀態動詞：know / like / love / want / need / believe / understand / have（擁有）"
    ]},
    {h:"have 的特殊情況", examples:[
      {en:"I have a car.",cn:"我有一台車。",note:"have ＝ 擁有 → 狀態動詞，用簡單式"},
      {en:"I'm having lunch.",cn:"我正在吃午餐。",note:"have ＝ 吃 → 動作動詞，可以用進行式"},
      {en:"We're having a meeting at 3.",cn:"我們三點有個會議。",note:"have ＝ 進行（活動）→ 可以用進行式"}
    ]}
  ],
  traps:[
    {bad:"I am knowing the answer.",good:"I know the answer.",why:"know 是狀態動詞，不能用進行式。中文的「我知道」不分進行不進行，但英文一定用簡單式。"},
    {bad:"I live with my parents this month.",good:"I'm living with my parents this month.",why:"this month 表示暫時的情況，用進行式才自然。用簡單式會變成「我一直住爸媽家」。"},
    {bad:"She is working at a bank. (指她的職業)",good:"She works at a bank.",why:"講職業這種長期事實要用簡單式。進行式暗示「暫時的」，面試官可能以為你馬上要離職。"},
    {bad:"I have dinner now.",good:"I'm having dinner now.",why:"have 當「吃」的意思時是動作動詞，配 now 要用進行式。"}
  ],
  quiz:[
    {q:"I usually ____ tea, but today I ____ coffee.",opts:["drink / am drinking","am drinking / drink","drink / drink","am drinking / am drinking"],ans:0,expl:"usually ＝ 習慣用簡單式；today ＝ 暫時的例外用進行式。"},
    {q:"She ____ three languages: Chinese, English, and Japanese.",opts:["is speaking","speaks","is knowing","speak"],ans:1,expl:"會講幾種語言是長期能力，用簡單式。"},
    {q:"Don't call me at 12:30 — I ____ lunch.",opts:["have","am having","having","has"],ans:1,expl:"have ＝ 吃（動作），12:30 是特定時刻正在做的事 → 進行式。"},
    {q:"He ____ to change jobs. He's happy where he is.",opts:["isn't wanting","doesn't want","don't want","not wants"],ans:1,expl:"want 是狀態動詞，不用進行式；第三人稱用 doesn't want。"}
  ]
},

{
  id:"dg20260814", date:"2026-08-14", unitNo:1,
  level:"B1+", title:"Present Continuous: Advanced Uses", titleCn:"現在進行式的進階用法",
  srcDays:[],
  summary:"進行式不只講「此刻正在做」：它還能講「這陣子的暫時狀態」、「已敲定的未來安排」，配 always 甚至能表達抱怨。共同核心是「暫時、未完成、有溫度」。",
  sections:[
    {h:"① 暫時狀態：不是此刻，而是「這陣子」", body:[
      "動作不必發生在講話的當下，只要是圍繞現在的一段暫時期間就能用進行式。",
      "I'm staying with a colleague while my apartment is being repaired.（這陣子暫住同事家）",
      "She's working in Vietnam this year.（今年在越南工作——暗示是暫時的外派）"
    ]},
    {h:"② 已敲定的未來安排", bullets:[
      "跟人約好、訂好票的未來計畫，用現在進行式＋未來時間：I'm flying to Taipei on Thursday.",
      "跟 will 的差別：will 是當場決定或預測；進行式是「早就安排好了」。",
      "面試、出差、看醫生這類有明確時間地點的行程，母語者幾乎都用進行式講。"
    ]},
    {h:"③ always + 進行式：帶情緒的抱怨", body:[
      "He is always losing his keys. ＝ 他老是搞丟鑰匙（受不了）。",
      "跟 He always loses his keys.（中性描述習慣）不同，加了進行式就多了「太常了、很誇張」的情緒。",
      "也可以是正面的誇獎：She is always helping new colleagues.（她總是熱心幫新同事）"
    ]},
    {h:"簡單式 vs. 進行式：同一句話兩種溫度", table:{head:["","現在簡單式","現在進行式"],rows:[
      ["性質","長期、永久、事實","暫時、階段性、會結束"],
      ["住","I live in Taoyuan.（家在這）","I'm living in Hanoi.（外派暫住）"],
      ["工作","She works in QA.（職業）","She's working on an audit this week.（手上這件事）"],
      ["未來","The flight leaves at 9:00.（時刻表）","I'm leaving on Thursday.（個人安排）"],
      ["always","He always loses his keys.（中性）","He's always losing his keys.（抱怨）"]
    ]}, examples:[
      {en:"I'm renting a room near the factory until my contract ends.",cn:"合約結束前我先在工廠附近租個房間。",note:"until 點出「暫時」，所以用進行式"},
      {en:"We're meeting the supplier at 2 p.m. tomorrow.",cn:"我們明天下午兩點要見供應商。",note:"敲定的安排，比 will meet 自然"},
      {en:"My landlord is always raising the rent without notice.",cn:"我房東老是不通知就漲房租。",note:"always + 進行式 ＝ 抱怨"}
    ]},
    {h:"⚠ 狀態動詞的界線", bullets:[
      "know / believe / own / belong 仍然不能用進行式：✓ I know the answer.（✗ I'm knowing）",
      "但有些動詞兩種都可以、意思不同：I think it's a good plan.（我認為）vs. I'm thinking about the plan.（我正在考慮）",
      "be 也能進行：He's being very polite today.（今天特別客氣——平常未必），暗示這是暫時的表現。"
    ]}
  ],
  traps:[
    {bad:"I will fly to Taipei on Thursday. (機票早就訂好)",good:"I'm flying to Taipei on Thursday.",why:"已敲定的安排用進行式；will 聽起來像剛剛才決定。中文都是「我週四飛台北」，但英文靠時態區分「早就訂好」跟「臨時決定」。"},
    {bad:"He always is losing his keys.",good:"He is always losing his keys.",why:"always 要放在 be 動詞後面、V-ing 前面，位置錯了整句就垮。"},
    {bad:"I'm living in Taoyuan all my life.",good:"I have lived in Taoyuan all my life.",why:"all my life 是「一輩子」，不是暫時狀態；進行式只能配暫時的期間（this year / these days）。"},
    {bad:"She is knowing the new process very well.",good:"She knows the new process very well.",why:"know 是狀態動詞，再進階的用法也救不了它——狀態動詞就是不用進行式。"}
  ],
  quiz:[
    {q:"My car is at the garage, so I ____ the bus to work this week.",opts:["take","am taking","will take","took"],ans:1,expl:"this week ＝ 暫時狀態（車修好就結束），用現在進行式。"},
    {q:"We ____ the new client at 10 a.m. tomorrow — the meeting room is already booked.",opts:["will meet","meet","are meeting","met"],ans:2,expl:"會議室都訂了＝敲定的安排 → are meeting。"},
    {q:"選出「抱怨」語氣最強的一句：",opts:["My roommate always leaves dishes in the sink.","My roommate is always leaving dishes in the sink.","My roommate left dishes in the sink.","My roommate leaves dishes in the sink sometimes."],ans:1,expl:"always ＋ 進行式 ＝ 「老是這樣、受不了」的抱怨語氣。"},
    {q:"Why ____ so quiet today? You're usually the loudest person in the office.",opts:["are you","are you being","do you be","you are"],ans:1,expl:"be 的進行式 are you being 表示「今天暫時的表現」，跟平常不同——後句的 usually 就是線索。"}
  ]
},

{
  id:"dg20260814b2", date:"2026-08-14", unitNo:1,
  level:"B2", title:"Present Tenses in Formal and Narrative Contexts", titleCn:"正式與敘事語境中的現在式",
  srcDays:[],
  summary:"到了 B2，現在簡單式和進行式不只區分「習慣 vs 暫時」，還牽涉語域、敘事手法和修辭選擇。新聞標題用簡單式寫「已經發生的事」、敘事用進行式建立背景、正式報告用簡單式陳述事實——選哪一個取決於你想達到什麼效果。",
  sections:[
    {h:"① 新聞標題的現在簡單式", body:[
      "英文新聞標題用現在簡單式報導「已經發生的事」——這叫 headline present：",
      "Typhoon Hits Northern Coast, Flights Grounded（颱風襲擊北部海岸，航班停飛）",
      "Company Cuts 500 Jobs After Profit Drop（利潤下滑後公司裁員 500 人）",
      "讀新聞時看到標題的 hits、cuts，不要以為是「習慣」——它是「剛發生」。"
    ]},
    {h:"② 現在進行式建立敘事背景", body:[
      "在說故事或描述場景時，進行式建立「正在進行的背景」，讓讀者/聽者感覺身臨其境：",
      "I'm standing at the airport. People are running in every direction. An announcement is playing but nobody is listening.",
      "這不是「暫時的」，而是「讓你看到畫面」。寫作和口說都很實用。"
    ]},
    {h:"③ 正式報告用簡單式陳述事實", bullets:[
      "The report shows that 40% of residents were affected.（報告顯示…）",
      "The data suggest a strong link between rainfall and flooding.（數據指出…）",
      "用 shows / suggests / indicates 而不是 is showing，因為這是「客觀事實的陳述」，不是「暫時的情況」。",
      "但如果趨勢還在持續：Prices are rising faster than expected.（進行式強調「還在漲」）"
    ]},
    {h:"④ 選擇的效果：同一件事，不同溫度", table:{head:["寫法","效果"],rows:[
      ["The company fires 200 workers.（標題式）","冷、客觀、新聞感"],
      ["The company is firing 200 workers.（進行式）","正在發生、可能還會繼續"],
      ["The company has fired 200 workers.（完成式）","結果已經出來、強調影響"]
    ]}, examples:[
      {en:"Floodwater is rising in three districts as rescuers work through the night.",cn:"三個區的洪水正在上漲，救援人員徹夜工作。",note:"進行式讓讀者感覺「現在正在發生」"},
      {en:"The weather bureau issues a sea warning for the north coast.",cn:"氣象局針對北部海岸發布海上警報。",note:"標題式簡單式：已發生的事，寫成「正在發生」的感覺"},
      {en:"The survey indicates that most commuters prefer working from home during typhoons.",cn:"調查顯示多數通勤者偏好颱風天在家工作。",note:"正式陳述用簡單式"}
    ]}
  ],
  traps:[
    {bad:"The report is showing that 40% of residents were affected.",good:"The report shows that 40% of residents were affected.",why:"報告的內容是固定的事實，不是「正在改變的趨勢」，用簡單式。"},
    {bad:"Typhoon is hitting northern coast. (標題)",good:"Typhoon Hits Northern Coast.",why:"新聞標題用簡單式、大寫開頭、省略冠詞。用進行式反而不像標題。"},
    {bad:"I stand at the airport. People run in every direction. (想營造場景感)",good:"I'm standing at the airport. People are running in every direction.",why:"要讓讀者「看到畫面」，用進行式營造臨場感；簡單式聽起來像在陳述事實而不是說故事。"}
  ],
  quiz:[
    {q:"Which is a typical news headline?",opts:["A. Typhoon Is Hitting Coast","B. Typhoon Hits Coast","C. Typhoon Has Hit Coast","D. Typhoon Was Hitting Coast"],ans:1,expl:"新聞標題用現在簡單式報導已發生的事。"},
    {q:"Fill in for a formal report: The data ____ a clear pattern.",opts:["are suggesting","suggest","suggested","have been suggesting"],ans:1,expl:"正式報告用 suggest（簡單式）陳述客觀事實。"},
    {q:"Which creates a vivid narrative scene?",opts:["A. Rain falls and wind blows.","B. Rain is falling and wind is blowing.","C. Rain fell and wind blew.","D. Rain has fallen and wind has blown."],ans:1,expl:"進行式建立「此刻正在發生」的畫面感，是敘事的標準手法。"},
    {q:"Prices ____ faster than expected this quarter.",opts:["rise","are rising","rose","rising"],ans:1,expl:"this quarter 表示趨勢還在持續中，用進行式強調「還在漲」。"}
  ]
},

{
  id:"dg20260813", date:"2026-08-13", unitNo:9,
  level:"B1+", title:"Present Perfect Continuous (I have been doing)", titleCn:"現在完成進行式",
  srcDays:[],
  summary:"have/has been + V-ing。重點不是「做完了沒」，而是「這件事持續了多久」，而且通常還在進行或剛剛才停。",
  sections:[
    {h:"基本形式", body:[
      "肯定：I / you / we / they have been working　|　he / she / it has been working",
      "否定：haven't been working / hasn't been working",
      "疑問：Have you been working? / How long has she been working?"
    ]},
    {h:"三個主要用法", bullets:[
      "① 從過去持續到現在，而且還在繼續：I have been studying English for three years.（現在還在學）",
      "② 剛剛才停止，結果還看得見：Your eyes are red — have you been crying?",
      "③ 強調「一直反覆在做」帶有情緒（不耐、抱歉、驕傲）：I have been trying to call you all morning."
    ]},
    {h:"與現在完成式（have done）的差別", table:{head:["","have been doing","have done"],rows:[
      ["重點","持續的過程、多久","完成的結果、幾次"],
      ["例句","I have been reading this book.","I have read this book."],
      ["意思","還在讀，讀了一段時間","已經讀完了"],
      ["搭配","for / since / all day / how long","already / yet / just / three times"],
      ["常見問句","How long have you been learning?","How many books have you read?"]
    ]}},
    {h:"不能用進行式的動詞", bullets:[
      "狀態動詞（know, believe, understand, own, belong）沒有進行式：✓ I have known her for years.（✗ have been knowing）",
      "live / work / study / teach 兩種都可以，意思幾乎一樣：I have lived / have been living here for five years.",
      "但如果是「短期、暫時」，用進行式比較自然：I have been staying with my sister this week."
    ], examples:[
      {en:"How long have you been waiting?",cn:"你等了多久了？",note:"問持續時間的標準句"},
      {en:"She has been working here since 2019.",cn:"她從 2019 年就在這裡工作。",note:"since + 起點"},
      {en:"I'm tired because I have been cleaning all morning.",cn:"我很累，因為我整個早上都在打掃。",note:"剛停止，結果還在"},
      {en:"The storm had been moving west at 10 kph.",cn:"這個風暴一直以每小時 10 公里向西移動。",note:"過去完成進行式，同一個邏輯往前推一格"}
    ]}
  ],
  traps:[
    {bad:"I am working here for five years.",good:"I have been working here for five years.",why:"「持續到現在」不能用現在進行式，要用現在完成進行式。"},
    {bad:"I have been knowing her since 2020.",good:"I have known her since 2020.",why:"know 是狀態動詞，沒有進行式。"},
    {bad:"How long are you waiting?",good:"How long have you been waiting?",why:"問「到現在為止多久」要用完成進行式。"},
    {bad:"I have been reading three books this month.",good:"I have read three books this month.",why:"講「數量／完成幾個」用 have done，不用進行式。"}
  ],
  quiz:[
    {q:"My hands are dirty. I ____ the car.",opts:["have washed","have been washing","wash","am washed"],ans:1,expl:"手還是髒的＝剛停止且結果看得見 → have been washing。"},
    {q:"How long ____ Chinese?",opts:["are you learning","do you learn","have you been learning","have you learn"],ans:2,expl:"問持續到現在的時間長度。"},
    {q:"She ____ him since primary school.",opts:["has been knowing","has known","is knowing","knows"],ans:1,expl:"know 是狀態動詞，用 has known。"},
    {q:"I ____ this book twice, so I know the ending.",opts:["have been reading","have read","am reading","had been reading"],ans:1,expl:"講次數與完成 → have read。"}
  ]
}

]

};
