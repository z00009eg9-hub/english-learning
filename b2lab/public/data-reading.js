// ============================================================
//  原創分級閱讀 B1 → B2
//  全部文章為本站原創撰寫（非課堂筆記內容），主題呼應筆記所學，
//  難度由 B1 逐步推進到 B2，並標註每篇的文法焦點與 B1→B2 句型升級。
// ============================================================
window.READING = [

/* ---------------------------------------------------------- 01 */
{
  id:"r01", level:"B1", topic:"交通與旅行", words:205,
  title:"The Man Who Missed His Train",
  titleCn:"錯過火車的男人",
  focus:"過去簡單式 vs. 過去進行式",
  intro:"用一個小故事練習「過去某個時間點正在做什麼」與「當時發生了什麼」的搭配。注意 while / when 後面接的時態。",
  "spoken": [{"en":"Daniel had a big meeting in Taichung, but his morning totally fell apart.","cn":"Daniel 在台中有個重要會議，但他的早晨整個崩盤。"},{"en":"His manager called while he was making breakfast, and he completely lost track of time.","cn":"他做早餐時主管打來，他就完全忘了時間。"},{"en":"Then halfway to the station it hit him — his wallet was still on the kitchen table. He got there at 7:42. Train was gone.","cn":"跑到半路他才猛然想到——皮夾還在餐桌上。他 7:42 到月台，車已經走了。"},{"en":"Ever since, he's got one rule: never pick up the phone while you're getting ready to leave.","cn":"從那天起他就一條鐵則：出門前準備時絕不接電話。"}],
  paras:[
    {en:"Daniel had an important meeting in Taichung, so he booked a ticket for the 7:40 train. He usually arrives early, but that morning everything went wrong.",
     cn:"Daniel 在台中有一場重要的會議，所以他訂了 7 點 40 分的火車票。他平常都會提早到，但那天早上一切都出錯了。"},
    {en:"While he was making breakfast, his phone rang. It was his manager, who wanted to talk about the meeting. Daniel was listening carefully, so he did not notice the time.",
     cn:"當他正在做早餐的時候，他的手機響了。是他的主管打來的，想討論會議的事。Daniel 聽得很專心，所以沒有注意到時間。"},
    {en:"When he finally left the house, it was already 7:15. He was running to the station when he realized that he had left his wallet on the kitchen table. He turned around and went back.",
     cn:"當他終於離開家時，已經 7 點 15 分了。他正跑向車站時，才發現自己把錢包留在廚房桌上。他轉身回去拿。"},
    {en:"He reached the platform at 7:42. The train was gone. A station worker told him that the next train would leave in fifty minutes. Daniel sat down, took a deep breath, and sent his manager a short message: \"I am going to be late. I am sorry.\"",
     cn:"他 7 點 42 分抵達月台。火車已經開走了。一位站務人員告訴他，下一班車五十分鐘後才發車。Daniel 坐下來，深呼吸，並傳了一則簡短訊息給主管：「我會遲到，很抱歉。」"},
    {en:"Since that day, Daniel has kept one simple rule: he never answers the phone while he is getting ready to leave.",
     cn:"從那天起，Daniel 就守著一個簡單的規則：準備出門的時候，他絕不接電話。"}
  ],
  target:[
    {w:"book",ipa:"/bʊk/",pos:"v.",cn:"預訂",def:"To arrange to have a seat, room, or ticket kept for you.",ex:"We booked a table at the Italian restaurant for Saturday.",exCn:"我們在那家義大利餐廳訂了週六的位子。"},
    {w:"platform",ipa:"/ˈplætˌfɔːrm/",pos:"n.",cn:"月台",def:"The raised area beside a railway track where you get on a train.",ex:"The train to Kaohsiung departs from platform three.",exCn:"往高雄的火車從第三月台發車。"},
    {w:"realize",ipa:"/ˈriːəlaɪz/",pos:"v.",cn:"意識到、發現",def:"To suddenly understand or become aware of something.",ex:"I did not realize how late it was until I looked at the clock.",exCn:"直到看了時鐘，我才意識到已經這麼晚了。"},
    {w:"turn around",ipa:"/tɝːn əˈraʊnd/",pos:"phr.v.",cn:"轉身、折返",def:"To change direction so that you face or go the opposite way.",ex:"The road was closed, so we had to turn around and find another way.",exCn:"那條路封閉了，我們只好折返另找路線。"},
    {w:"take a deep breath",ipa:"/teɪk ə diːp breθ/",pos:"phr.",cn:"深呼吸",def:"To breathe in slowly to calm yourself down.",ex:"Before the job interview, she took a deep breath and walked in.",exCn:"面試前，她深吸了一口氣然後走進去。"},
    {w:"get ready",ipa:"/ɡet ˈredi/",pos:"phr.",cn:"做準備",def:"To prepare yourself for something.",ex:"It takes my sister an hour to get ready in the morning.",exCn:"我妹妹早上要花一個小時做準備。"}
  ],
  questions:[
    {q:"What was Daniel doing when his phone rang?",
     opts:["A. He was running to the station","B. He was making breakfast","C. He was talking to a station worker","D. He was sitting on the train"],
     ans:1, expl:"文章寫 While he was making breakfast, his phone rang. → 電話響的當下，他正在做早餐。"},
    {q:"Why did Daniel turn around and go back home?",
     opts:["A. He forgot his ticket","B. His manager called again","C. He had left his wallet on the table","D. The train was cancelled"],
     ans:2, expl:"he realized that he had left his wallet on the kitchen table：他發現錢包留在廚房桌上。"},
    {q:"How long did he have to wait for the next train?",
     opts:["A. Fifteen minutes","B. Forty minutes","C. Fifty minutes","D. Seventy minutes"],
     ans:2, expl:"the next train would leave in fifty minutes → 五十分鐘。"}
  ],
  upgrade:[
    {b1:"He left his wallet. Then he realized it.",
     b2:"He was running to the station when he realized that he had left his wallet at home.",
     note:"用 was V-ing ... when + 過去完成式，把三個時間層次（正在做／突然發現／更早發生）放進一句。", "sp": "He was halfway to the station when it hit him — he'd left his wallet at home.", "spNote": "it hit me（我猛然想到）是口語講「突然意識到」的經典說法。", "b1Cn": "他忘了皮夾。然後他才發現。", "b2Cn": "他跑向車站時，才發現皮夾忘在家裡。", "spCn": "他跑到半路才猛然想到——皮夾忘在家裡了。"},
    {b1:"He was late. He sent a message.",
     b2:"Realizing that he would be late, he sent his manager a short message.",
     note:"分詞開頭（Realizing that...）取代 and 連接，句子更精簡，是 B2 常見寫法。", "sp": "He could tell he was gonna be late, so he shot his manager a quick message.", "spNote": "could tell（看得出來）、gonna、shoot a message 都是口語。", "b1Cn": "他遲到了。他傳了訊息。", "b2Cn": "他意識到自己會遲到，便傳了封簡短訊息給主管。", "spCn": "他看出自己要遲到了，趕緊傳了個訊息給主管。"}
  ]
},

/* ---------------------------------------------------------- 02 */
{
  id:"r02", level:"B1", topic:"健康與習慣", words:215,
  title:"One Small Change in the Morning",
  titleCn:"早晨的一個小改變",
  focus:"現在簡單式 vs. 現在進行式；頻率副詞",
  intro:"描述「習慣」用現在簡單式，描述「最近正在改變的事」用現在進行式。注意頻率副詞的位置。",
  "spoken": [{"en":"Mei stares at a screen nine hours a day and used to crash every afternoon.","cn":"Mei 每天盯螢幕九小時，以前每天下午都累癱。"},{"en":"Her doctor's advice sounded way too easy: drink some water and walk ten minutes before you touch your phone.","cn":"醫生的建議聽起來簡單過頭：碰手機前先喝杯水、走十分鐘。"},{"en":"She tried it anyway — now she's up earlier, drinking more water, and her phone stays away from the breakfast table.","cn":"她還是試了——現在起得更早、水喝得更多，手機也不上早餐桌了。"},{"en":"Tiny change, big difference. Like she says: 'I'm just starting the day in a different order.'","cn":"小改變，大不同。像她說的：「我只是用不同的順序開始一天。」"}],
  paras:[
    {en:"Mei works in an office and spends about nine hours a day in front of a screen. She often feels tired by three o'clock, and her eyes usually hurt at the end of the day.",
     cn:"Mei 在辦公室工作，每天大約有九個小時面對螢幕。她常常到三點就覺得累，眼睛通常在一天結束時會不舒服。"},
    {en:"Last month her doctor gave her simple advice: drink a glass of water and walk for ten minutes before you check your phone. Mei thought it sounded too easy to work, but she decided to try it.",
     cn:"上個月醫生給了她一個簡單的建議：在看手機之前，先喝一杯水並走十分鐘。Mei 覺得這聽起來簡單得不像會有效，但她決定試試看。"},
    {en:"These days she is getting up twenty minutes earlier than before. She is also drinking much more water, and she rarely brings her phone to the breakfast table any more.",
     cn:"最近她比以前早起二十分鐘。她也喝了多很多的水，而且幾乎不再把手機帶到早餐桌上了。"},
    {en:"The change is small, but the result is clear. She hardly ever feels sleepy in the afternoon now, and she says her mind feels quieter. \"I am not doing anything difficult,\" she explains. \"I am just starting the day in a different order.\"",
     cn:"這個改變很小，但結果很明顯。她現在幾乎不會在下午覺得睏，她說自己的思緒感覺比較平靜。「我沒有在做什麼困難的事，」她解釋，「我只是換了一個開始一天的順序。」"}
  ],
  target:[
    {w:"screen",ipa:"/skriːn/",pos:"n.",cn:"螢幕",def:"The flat surface of a phone or computer where you see pictures and words.",ex:"The doctor said I should take a break from the screen every twenty minutes.",exCn:"醫生說我應該每二十分鐘離開螢幕休息一下。"},
    {w:"advice",ipa:"/ədˈvaɪs/",pos:"n.",cn:"建議（不可數）",def:"An opinion about what someone should do.",ex:"My teacher gave me some useful advice about studying vocabulary.",exCn:"老師給了我一些關於背單字的實用建議。"},
    {w:"rarely",ipa:"/ˈrerli/",pos:"adv.",cn:"很少地",def:"Almost never.",ex:"He rarely eats out because he prefers cooking at home.",exCn:"他很少在外面吃，因為他比較喜歡在家做飯。"},
    {w:"hardly ever",ipa:"/ˈhɑːrdli ˈevɚ/",pos:"phr.",cn:"幾乎從不",def:"Almost never; very seldom.",ex:"We hardly ever eat out on weekdays.",exCn:"我們平日幾乎從不在外面吃飯。"},
    {w:"result",ipa:"/rɪˈzʌlt/",pos:"n.",cn:"結果",def:"Something that happens because of an action.",ex:"Hard work does not always lead to the result you expect.",exCn:"努力不一定會帶來你預期的結果。"},
    {w:"in a different order",ipa:"/ɪn ə ˈdɪfrənt ˈɔːrdɚ/",pos:"phr.",cn:"以不同的順序",def:"Doing the same things but not in the same sequence.",ex:"The teacher asked us to arrange the pictures in a different order.",exCn:"老師要我們把圖片重新排列順序。"}
  ],
  questions:[
    {q:"What did the doctor tell Mei to do first in the morning?",
     opts:["A. Check her phone","B. Eat a big breakfast","C. Drink water and walk for ten minutes","D. Sleep twenty minutes longer"],
     ans:2, expl:"drink a glass of water and walk for ten minutes before you check your phone。"},
    {q:"Which sentence describes a temporary change, not a permanent habit?",
     opts:["A. She often feels tired by three o'clock","B. She is getting up twenty minutes earlier","C. Her eyes usually hurt at the end of the day","D. She works in an office"],
     ans:1, expl:"is getting up 是現在進行式，表示「最近一段時間正在變化」；其他三句是現在簡單式的習慣或事實。"},
    {q:"What does Mei say about her new routine?",
     opts:["A. It is very difficult","B. It costs a lot of money","C. It is just a different order of the same things","D. It does not really help"],
     ans:2, expl:"I am just starting the day in a different order.：只是換了順序。"}
  ],
  upgrade:[
    {b1:"She is tired every afternoon. She looks at the screen too much.",
     b2:"She feels tired every afternoon because she spends too much time in front of a screen.",
     note:"用 because 把兩個短句合成因果關係，並用 spend time doing 這個 B1+ 搭配。", "sp": "She crashes every afternoon from staring at a screen all day.", "spNote": "crash（累癱）、stare at a screen（盯螢幕）是上班族口語。", "b1Cn": "她每天下午都很累。她看螢幕看太久。", "b2Cn": "她每天下午都覺得累，因為花太多時間盯著螢幕。", "spCn": "她每天下午都累癱，因為整天盯著螢幕。"},
    {b1:"The change is small. The result is good.",
     b2:"Although the change is small, the result is surprisingly clear.",
     note:"Although 讓步句 + surprisingly（程度副詞）是 B2 常見的評論方式。", "sp": "It's a tiny change, but it makes a surprisingly big difference.", "spNote": "make a big difference（效果差很多）是口語裡最常用的因果表達。", "b1Cn": "改變很小。結果很好。", "b2Cn": "雖然改變很小，結果卻出乎意料地明顯。", "spCn": "只是個小改變，效果卻好得驚人。"}
  ]
},

/* ---------------------------------------------------------- 03 */
{
  id:"r03", level:"B1+", topic:"食物與浪費", words:240,
  title:"Why Do We Throw Away So Much Food?",
  titleCn:"我們為什麼丟掉這麼多食物？",
  focus:"被動語態；數量詞 (much / a great deal of / a third of)",
  intro:"說明性文章。注意被動語態（is thrown away / are labelled）以及不可數名詞的數量表達。",
  "spoken": [{"en":"Get this — about a third of all the food we produce never gets eaten.","cn":"你聽聽——全球生產的食物大概有三分之一根本沒被吃掉。"},{"en":"A big reason is the 'best before' label — it's about quality, not safety, but people toss perfectly good food anyway.","cn":"一大原因是「最佳賞味期限」——那是品質不是安全問題，但大家還是把好好的食物扔了。"},{"en":"And we all do it: shop hungry, buy too much, shove the veggies in the back of the fridge and forget them.","cn":"而且我們都幹過：餓著肚子採買、買太多、把菜塞到冰箱深處然後忘掉。"},{"en":"The fix is easy though — plan your meals, store stuff right, cook your leftovers. That alone can cut waste in half.","cn":"解法其實很簡單——規劃餐點、好好保存、把剩菜煮掉。光這樣就能少浪費一半。"}],
  paras:[
    {en:"Around the world, roughly a third of the food that is produced every year is never eaten. Some of it is lost on farms, some is damaged during transport, and a surprising amount is simply thrown away in ordinary kitchens.",
     cn:"在全世界，每年生產的食物大約有三分之一從未被吃掉。有些在農場就損失了，有些在運送過程中受損，而令人意外的是，還有相當多是在普通家庭的廚房裡被直接丟掉。"},
    {en:"One common reason is confusion about dates. Many products are labelled \"best before\", which is about quality, not safety. Food that is past this date is often still perfectly good, but people throw it away because they are worried.",
     cn:"一個常見的原因是對日期的誤解。許多產品標示「best before（最佳風味期限）」，那指的是品質，而不是安全。過了這個日期的食物通常還是完全可以吃，但人們因為擔心而把它丟掉。"},
    {en:"Another reason is shopping habits. When we are hungry, we buy more than we need. Fresh vegetables are put at the back of the fridge, they are forgotten for a week, and by the time they are found, they have gone bad.",
     cn:"另一個原因是購物習慣。當我們餓的時候，就會買得比需要的多。新鮮蔬菜被放到冰箱後面，被遺忘了一個星期，等到被發現時，已經壞掉了。"},
    {en:"The good news is that small habits make a great deal of difference. Planning meals before you shop, storing food properly, and cooking with leftovers can cut household waste by half. None of these actions is difficult; they simply need to become normal.",
     cn:"好消息是，小習慣就能造成很大的差別。購物前先規劃餐點、正確地保存食物、用剩菜做料理，都能把家庭的食物浪費減少一半。這些做法都不困難，只是需要變成日常而已。"}
  ],
  target:[
    {w:"roughly",ipa:"/ˈrʌfli/",pos:"adv.",cn:"大約",def:"Approximately; not exactly.",ex:"Roughly two hundred people attended the meeting.",exCn:"大約兩百人參加了那場會議。"},
    {w:"be thrown away",ipa:"/bi θroʊn əˈweɪ/",pos:"phr.",cn:"被丟掉",def:"To be put in the rubbish because it is not wanted.",ex:"Food that passes its expiry date should be thrown away.",exCn:"過了保存期限的食物應該丟掉。"},
    {w:"label",ipa:"/ˈleɪ.bəl/",pos:"v.",cn:"標示",def:"To put information on a product.",ex:"Please label each box with its contents before moving day.",exCn:"搬家前請在每個箱子上標明裡面裝了什麼。"},
    {w:"go bad",ipa:"/ɡoʊ bæd/",pos:"phr.v.",cn:"（食物）壞掉",def:"To become unfit to eat.",ex:"If you leave milk outside the fridge, it will go bad overnight.",exCn:"牛奶放在冰箱外面的話，一個晚上就會壞掉。"},
    {w:"leftovers",ipa:"/ˈleftˌovɚz/",pos:"n.",cn:"剩菜",def:"Food that has not been eaten at the end of a meal.",ex:"My mum always turns yesterday's leftovers into a new dish.",exCn:"我媽總是把昨天的剩菜變出一道新料理。"},
    {w:"a great deal of",ipa:"/ə ɡreɪt diːl əv/",pos:"phr.",cn:"大量的（接不可數）",def:"A large amount of something uncountable.",ex:"Learning to play the violin well takes a great deal of patience and practice.",exCn:"要把小提琴拉好，需要大量的耐心和練習。"},
    {w:"household",ipa:"/ˈhaʊshoʊld/",pos:"adj./n.",cn:"家庭的；一戶人家",def:"Relating to a house and the people living in it.",ex:"The average household in Taipei spends about 30,000 a month on rent.",exCn:"台北一般家庭每月大約花三萬元在房租上。"}
  ],
  questions:[
    {q:"What does \"best before\" mainly tell us about?",
     opts:["A. Safety","B. Quality","C. Price","D. Weight"],
     ans:1, expl:"which is about quality, not safety。"},
    {q:"Why do vegetables often go bad at home?",
     opts:["A. They are washed too often","B. They are cooked too early","C. They are put at the back of the fridge and forgotten","D. Shops sell them already damaged"],
     ans:2, expl:"are put at the back of the fridge, they are forgotten for a week。"},
    {q:"Which of these is NOT suggested in the last paragraph?",
     opts:["A. Planning meals before shopping","B. Storing food properly","C. Cooking with leftovers","D. Buying only frozen food"],
     ans:3, expl:"文章沒有提到只買冷凍食品。"},
    {q:"Choose the sentence with correct passive voice.",
     opts:["A. A third of the food never eats","B. A third of the food is never eaten","C. A third of the food has never eating","D. A third of the food is never eating"],
     ans:1, expl:"被動語態 = be + p.p.，food 是被吃的對象，所以用 is never eaten。"}
  ],
  upgrade:[
    {b1:"People throw away a lot of food. This is a big problem.",
     b2:"A great deal of food is thrown away every year, which has become a serious problem.",
     note:"改成被動語態把焦點放在「食物」上，再用 which 引導的關係子句做評論。", "sp": "We toss out a crazy amount of food every year, and it's become a real problem.", "spNote": "toss out（丟掉）、a crazy amount of（多到誇張）是口語量詞。", "b1Cn": "人們丟掉很多食物。這是個大問題。", "b2Cn": "每年有大量食物被丟棄，這已成為嚴重的問題。", "spCn": "我們每年丟掉的食物多到誇張，已經變成大問題了。"},
    {b1:"You should plan your meals. Then you will waste less.",
     b2:"Planning your meals before you shop can cut household waste by half.",
     note:"動名詞當主詞（Planning...）＋ cut ... by half 的量化說法，比 you should 客觀許多。", "sp": "If you plan your meals before you hit the store, you can cut your waste in half.", "spNote": "hit the store（去採買）、cut...in half（砍半）是生活口語。", "b1Cn": "你應該規劃餐點。這樣浪費會變少。", "b2Cn": "購物前先規劃餐點，能讓家庭浪費減半。", "spCn": "去採買前先規劃好餐點，浪費能直接砍半。"}
  ]
},

/* ---------------------------------------------------------- 04 */
{
  id:"r04", level:"B1+", topic:"職場", words:250,
  title:"Working From Home: Two Sides of the Story",
  titleCn:"在家工作：故事的兩面",
  focus:"對比連接詞 however / whereas / on the other hand",
  intro:"對比型文章。B2 寫作很重視「兩面呈現」，請特別注意 whereas、however、on the other hand 的位置與標點。",
  "spoken": [{"en":"Working from home went from weird to totally normal here in like five years.","cn":"在家工作在這裡大概五年內從稀奇變成常態。"},{"en":"The fans love it — no ninety-minute bus ride, and nobody's interrupting them every ten minutes.","cn":"喜歡的人愛死了——不用擠九十分鐘公車，也沒人每十分鐘打斷一次。"},{"en":"Managers see it differently — the little hallway chats that build trust just disappear, and new hires have no one to ask.","cn":"主管的看法就不同了——建立信任的走廊閒聊全沒了，新人也找不到人問。"},{"en":"So most companies landed in the middle: a few office days for the people stuff, home days for the focus stuff.","cn":"所以多數公司折衷：幾天進辦公室處理人的事，其他天在家專心做事。"}],
  paras:[
    {en:"Five years ago, working from home was unusual in Taiwan. Today it is a normal option in many companies, and employees have strong opinions about it on both sides.",
     cn:"五年前，在家工作在台灣還很少見。如今在許多公司這已是常見的選項，而員工對此的看法兩極。"},
    {en:"Those who like it talk first about time. A worker who used to spend ninety minutes a day on a crowded bus can now use that time to sleep, exercise, or have breakfast with the family. They also say they concentrate better, because nobody interrupts them every ten minutes.",
     cn:"喜歡的人首先談的是時間。以前每天要在擁擠公車上花九十分鐘的員工，現在可以把那些時間用來睡覺、運動，或和家人一起吃早餐。他們也說自己更能專心，因為沒有人每十分鐘來打斷他們。"},
    {en:"Managers, however, often see a different picture. Meetings are easy to arrange online, whereas the short conversations that build trust almost disappear. New employees suffer the most: they have no one sitting next to them to ask small questions.",
     cn:"然而，主管們常看到不一樣的畫面。線上會議很容易安排，但那些能建立信任的短暫對話幾乎消失了。新進員工受影響最大：他們身邊沒有可以隨口問小問題的人。"},
    {en:"Most companies have therefore chosen something in the middle. Staff come to the office two or three days a week for discussion and training, and work at home on the other days, when they need quiet time to finish a task. It is not a perfect answer, but it keeps both the focus and the friendships.",
     cn:"因此，多數公司選擇了折衷方案。員工每週到辦公室兩三天進行討論與訓練，其他天在家工作，處理需要安靜完成的任務。這不是完美的答案，但它同時保住了專注力和同事情誼。"}
  ],
  target:[
    {w:"employee",ipa:"/ɪmˈplɔɪiː/",pos:"n.",cn:"員工",def:"A person who is paid to work for a company.",ex:"Every new employee at the hotel gets two days of customer service training.",exCn:"飯店每位新員工都會接受兩天的客服訓練。"},
    {w:"concentrate",ipa:"/ˈkɑːn.sən.treɪt/",pos:"v.",cn:"專心",def:"To give all your attention to one thing.",ex:"I find it hard to concentrate when my neighbours play loud music.",exCn:"鄰居放很大聲的音樂時，我很難專心。"},
    {w:"interrupt",ipa:"/ˌɪntəˈrʌpt/",pos:"v.",cn:"打斷",def:"To stop someone while they are speaking or working.",ex:"Please do not interrupt me while I am on the phone.",exCn:"我講電話的時候請不要打斷我。"},
    {w:"whereas",ipa:"/werˈæz/",pos:"conj.",cn:"然而、相對地",def:"Used to compare two different facts.",ex:"My brother loves spicy hot pot, whereas I can't handle even a little chili.",exCn:"我哥很愛吃麻辣鍋，而我連一點辣椒都受不了。"},
    {w:"build trust",ipa:"/bɪld trʌst/",pos:"phr.",cn:"建立信任",def:"To slowly create a feeling of confidence between people.",ex:"Keeping your promises is the easiest way to build trust with clients.",exCn:"遵守承諾是跟客戶建立信任最簡單的方式。"},
    {w:"suffer",ipa:"/ˈsʌfɚ/",pos:"v.",cn:"受苦、受到不良影響",def:"To experience something bad.",ex:"Your health will suffer if you keep skipping sleep.",exCn:"如果你一直不睡覺，健康會受到影響。"},
    {w:"something in the middle",ipa:"/ˈsʌmθɪŋ ɪn ðə ˈmɪdl/",pos:"phr.",cn:"折衷方案",def:"A compromise between two choices.",ex:"I wanted a large pizza and she wanted a small one, so we picked something in the middle.",exCn:"我想要大的披薩，她想要小的，所以我們選了折衷的。"}
  ],
  questions:[
    {q:"According to paragraph 2, what is the first advantage employees mention?",
     opts:["A. Money","B. Time","C. Equipment","D. Promotion"],
     ans:1, expl:"Those who like it talk first about time.。"},
    {q:"Why do new employees find working from home harder?",
     opts:["A. Their internet is slow","B. They have no one nearby to ask small questions","C. They are given more work","D. They cannot join meetings"],
     ans:1, expl:"they have no one sitting next to them to ask small questions。"},
    {q:"Which word correctly completes this sentence: \"Online meetings are efficient, ____ informal chats are difficult to replace.\"",
     opts:["A. because","B. so","C. whereas","D. therefore"],
     ans:2, expl:"前後是對比關係，用 whereas；because 表原因、so/therefore 表結果。"},
    {q:"What is the writer's attitude to the hybrid model?",
     opts:["A. It is perfect","B. It is useless","C. It is imperfect but reasonable","D. It will disappear soon"],
     ans:2, expl:"It is not a perfect answer, but it keeps both the focus and the friendships. → 不完美但合理。"}
  ],
  upgrade:[
    {b1:"Some people like working from home. Some managers do not like it.",
     b2:"While many employees welcome working from home, managers often take a different view.",
     note:"用 While 開頭的讓步子句取代兩個獨立句，一句就呈現對比。", "sp": "Lots of folks love working from home — their managers, not so much.", "spNote": "not so much（就沒那麼…）的反差收尾是美式口語幽默的招牌。", "b1Cn": "有些人喜歡在家工作。有些主管不喜歡。", "b2Cn": "雖然許多員工樂於在家工作，主管的看法往往不同。", "spCn": "很多人愛死在家工作了——他們的主管就沒那麼愛。"},
    {b1:"Workers save time. They do not take the bus.",
     b2:"By not commuting, workers save up to ninety minutes a day.",
     note:"By + V-ing 表方法，加上具體數字（up to ninety minutes）讓論述更有力。", "sp": "Skipping the commute saves people up to an hour and a half a day.", "spNote": "skip（省掉）、an hour and a half 比 ninety minutes 更像美國人講時間的方式。", "b1Cn": "員工節省時間。他們不搭公車。", "b2Cn": "不用通勤讓員工每天省下多達九十分鐘。", "spCn": "省掉通勤，每天最多能多出一個半小時。"}
  ]
},

/* ---------------------------------------------------------- 05 */
{
  id:"r05", level:"B1+", topic:"居家修繕與鄰居", words:245,
  title:"The Neighbour Who Could Fix Anything",
  titleCn:"什麼都會修的鄰居",
  focus:"關係子句 who / which / whose；使役 have / get something done",
  intro:"敘事＋人物描寫。重點是關係子句的連接，以及「請人做某事」的 have / get + 物 + p.p. 結構。",
  "spoken": [{"en":"Mr. Lin downstairs used to be a plumber — the guy can fix anything.","cn":"樓下的林先生以前是水電工——什麼都會修。"},{"en":"When my kitchen pipe started leaking, the repair company said two days. Mr. Lin heard the drip and knocked on my door.","cn":"我廚房水管漏水，維修公司說要等兩天。林先生聽到滴水聲就來敲門了。"},{"en":"Fifteen minutes, a piece of rubber, a metal clip — leak stopped. And he wouldn't take a dime.","cn":"十五分鐘、一片橡膠、一個金屬夾——漏水止住了。他還一毛錢都不收。"},{"en":"That's when it hit me: a building isn't concrete and pipes. It's the people who notice when something's wrong.","cn":"那時我才明白：一棟樓不是水泥和管線，而是那些會注意到不對勁的人。"}],
  paras:[
    {en:"Mr. Lin, whose flat is on the ground floor, has lived in our building for thirty years. He was a plumber before he retired, and he keeps a wooden box of tools that is older than most of his neighbours.",
     cn:"林先生的公寓在一樓，他在我們這棟樓已經住了三十年。退休前他是水管工，他有一個木製工具箱，比大部分鄰居的年紀都大。"},
    {en:"Last winter, the pipe under my kitchen sink started leaking. I called a company which promised to send someone within two days, but the water was already dripping onto the floor. My neighbour heard the noise and knocked on my door.",
     cn:"去年冬天，我廚房水槽下的水管開始漏水。我打電話給一家公司，他們承諾兩天內派人來，但水已經滴到地板上了。我的鄰居聽到聲音，來敲我的門。"},
    {en:"In fifteen minutes he had stopped the leak with a piece of rubber and a metal clip. He refused to take any money. \"Get it repaired properly next week,\" he said, \"but tonight you can sleep.\"",
     cn:"十五分鐘內，他用一塊橡膠和一個金屬夾就止住了漏水。他不肯收任何錢。「下週還是要請人好好修，」他說，「但今晚你可以安心睡了。」"},
    {en:"Since then I have had two things fixed by professionals and three things fixed by Mr. Lin. What I have learned is that a building is not only concrete and pipes. It is the people who notice when something is wrong.",
     cn:"從那之後，我請專業師傅修了兩樣東西，請林先生修了三樣。我學到的是：一棟樓不只是水泥和管線，而是那些會注意到有東西出問題的人。"}
  ],
  target:[
    {w:"plumber",ipa:"/ˈplʌmɚ/",pos:"n.",cn:"水管工",def:"A person whose job is to fit and repair water pipes.",ex:"We called a plumber because the kitchen sink was blocked.",exCn:"我們叫了水電工來，因為廚房水槽堵住了。"},
    {w:"retire",ipa:"/rɪˈtaɪr/",pos:"v.",cn:"退休",def:"To stop working, usually because of age.",ex:"My father plans to retire when he turns sixty-five.",exCn:"我父親打算六十五歲時退休。"},
    {w:"leak",ipa:"/liːk/",pos:"v./n.",cn:"漏（水）；漏洞",def:"To let liquid or gas escape through a hole.",ex:"The roof has been leaking every time it rains.",exCn:"每次下雨屋頂就在漏水。"},
    {w:"drip",ipa:"/drɪp/",pos:"v.",cn:"滴落",def:"To fall in small drops.",ex:"The tap in the bathroom has been dripping all night.",exCn:"浴室的水龍頭滴了一整晚。"},
    {w:"refuse",ipa:"/rɪˈfjuːz/",pos:"v.",cn:"拒絕",def:"To say you will not do or accept something.",ex:"She refused to sign the contract without reading it first.",exCn:"她拒絕在沒看過合約的情況下簽字。"},
    {w:"get something repaired",ipa:"/ɡet ˈsʌmθɪŋ rɪˈperd/",pos:"phr.",cn:"請人修好某物",def:"To arrange for someone else to repair something.",ex:"I need to get my watch repaired before the trip.",exCn:"出發前我得把手錶拿去修。"},
    {w:"notice",ipa:"/ˈnoʊtɪs/",pos:"v.",cn:"注意到",def:"To see or become aware of something.",ex:"Did you notice that the shop has changed its name?",exCn:"你有注意到那家店改名字了嗎？"}
  ],
  questions:[
    {q:"What was Mr. Lin's job before he retired?",
     opts:["A. A carpenter","B. An electrician","C. A plumber","D. A builder"],
     ans:2, expl:"He was a plumber before he retired.。"},
    {q:"How long did Mr. Lin need to stop the leak?",
     opts:["A. Fifteen minutes","B. Two hours","C. Two days","D. One week"],
     ans:0, expl:"In fifteen minutes he had stopped the leak。"},
    {q:"Which sentence uses the causative structure correctly?",
     opts:["A. I had fixed the pipe by a plumber","B. I had the pipe fixed by a plumber","C. I had the pipe fixing by a plumber","D. I had fix the pipe by a plumber"],
     ans:1, expl:"have + 物 + p.p.（have the pipe fixed）表示「請人把東西修好」。"},
    {q:"What is the main idea of the last paragraph?",
     opts:["A. Professionals are always better","B. Old tools work better than new ones","C. A community is made of people who care","D. Buildings need more repairs than before"],
     ans:2, expl:"It is the people who notice when something is wrong. → 社區靠的是會關心的人。"}
  ],
  upgrade:[
    {b1:"Mr. Lin lives on the ground floor. He has lived here for thirty years.",
     b2:"Mr. Lin, whose flat is on the ground floor, has lived here for thirty years.",
     note:"用 whose 引導的非限定關係子句，把補充資訊塞進主句中間，避免短句堆疊。", "sp": "Mr. Lin's got the ground-floor place — he's been there thirty years.", "spNote": "口語用 's got（有）、the place（那間房子），破折號帶出補充。", "b1Cn": "林先生住一樓。他住在這裡三十年了。", "b2Cn": "住在一樓的林先生已在此住了三十年。", "spCn": "林先生住一樓那間——他在那住三十年了。"},
    {b1:"I asked a plumber. He repaired my pipe.",
     b2:"I had my pipe repaired by a plumber.",
     note:"使役 have + 物 + p.p.，主詞是「請人做」的人，不是動手做的人。", "sp": "I got a plumber in to fix my pipe.", "spNote": "get someone in（請人來家裡處理）是居家修繕的道地口語。", "b1Cn": "我找了水電工。他修好我的水管。", "b2Cn": "我請水電工修好了水管。", "spCn": "我找了水電工來家裡修水管。"}
  ]
},

/* ---------------------------------------------------------- 06 */
{
  id:"r06", level:"B1+", topic:"天災", words:255,
  title:"The Night the Typhoon Cut the Power",
  titleCn:"颱風停電的那一夜",
  focus:"過去完成式；used to / would 表過去習慣",
  intro:"敘事文。用過去完成式標示「更早發生的事」，並用 used to / would 描述已不存在的過去習慣。",
  "spoken": [{"en":"As kids we thought typhoons were awesome — instant noodles, candles, watching the trees whip around from the window.","cn":"小時候我們覺得颱風超棒——泡麵、蠟燭、趴在窗邊看樹被吹得東倒西歪。"},{"en":"The 2023 one killed that feeling. Our power went out at nine and stayed out for two days.","cn":"2023 那次把這種感覺徹底毀了。晚上九點停電，一停就是兩天。"},{"en":"Everything in the fridge went bad, we couldn't flush the toilet, and grandma had to walk six blocks to keep her meds cold.","cn":"冰箱的東西全壞了、馬桶沖不了，奶奶還得走六條街去冰她的藥。"},{"en":"Now we keep a power bank, bottled water, and phone numbers on paper — 'cause a dead phone is just a piece of glass.","cn":"現在我們備著行動電源、瓶裝水和紙本電話清單——因為沒電的手機就只是塊玻璃。"}],
  paras:[
    {en:"We used to think that a typhoon meant a free day at home. When I was a child, my mother would buy instant noodles and candles, and my brother and I would sit by the window watching the trees bend. It felt like an adventure.",
     cn:"我們以前總覺得颱風就代表在家放一天假。我小時候，媽媽會去買泡麵和蠟燭，我和弟弟則會坐在窗邊看樹被吹彎。那感覺像一場冒險。"},
    {en:"The typhoon of 2023 changed that feeling. By the time the wind reached the city, it had already destroyed part of a bridge in the mountains. Our lights went out at nine in the evening, and they did not come back for two days.",
     cn:"2023 年的那場颱風改變了那種感覺。等到強風抵達城市時，它已經摧毀了山區一段橋樑。我們家的燈在晚上九點熄滅，而且兩天都沒恢復。"},
    {en:"Without electricity, everything in the fridge went bad. We had not filled the bathtub with water, so we could not flush the toilet. My grandmother, who takes medicine that must be kept cold, had to walk to a relative's house six streets away.",
     cn:"沒有電，冰箱裡的東西全壞了。我們沒有先在浴缸裝水，所以馬桶沖不了。我奶奶必須服用需要冷藏的藥，只好走到六條街外的親戚家。"},
    {en:"Now our preparation is different. We keep a power bank, bottled water, and a paper list of phone numbers, because a phone with no battery is just a piece of glass. I no longer think of a typhoon as a holiday, but I am also no longer afraid of one.",
     cn:"現在我們的準備方式不同了。我們會備好行動電源、瓶裝水，以及一份紙本的電話清單，因為沒電的手機只是一塊玻璃。我不再把颱風當成假日，但也不再害怕颱風了。"}
  ],
  target:[
    {w:"bend",ipa:"/bend/",pos:"v.",cn:"彎曲",def:"To become curved instead of straight.",ex:"If you push the plastic ruler too hard, it will bend and maybe snap.",exCn:"如果你太用力壓那把塑膠尺，它會彎曲，甚至可能斷掉。"},
    {w:"destroy",ipa:"/dɪˈstrɔɪ/",pos:"v.",cn:"摧毀",def:"To damage something so badly that it no longer exists.",ex:"The fire destroyed most of the old factory buildings.",exCn:"那場火燒毀了大部分的老廠房。"},
    {w:"go out",ipa:"/ɡoʊ aʊt/",pos:"phr.v.",cn:"（燈/火）熄滅",def:"To stop shining or burning.",ex:"The candle went out as soon as the wind blew in.",exCn:"風一吹進來，蠟燭就熄了。"},
    {w:"flush",ipa:"/flʌʃ/",pos:"v.",cn:"沖（馬桶）",def:"To clean a toilet by sending water through it.",ex:"Remember to flush the toilet after you use it.",exCn:"用完廁所記得沖水。"},
    {w:"relative",ipa:"/ˈrelətɪv/",pos:"n.",cn:"親戚",def:"A member of your family.",ex:"During Lunar New Year, we visit almost every relative on my mother's side.",exCn:"農曆新年期間，我們幾乎會拜訪媽媽那邊的每一位親戚。"},
    {w:"power bank",ipa:"/ˈpaʊr bæŋk/",pos:"n.",cn:"行動電源",def:"A portable battery for charging a phone.",ex:"My phone died on the train, but luckily I had a power bank in my bag.",exCn:"我的手機在火車上沒電了，幸好包裡有行動電源。"},
    {w:"preparation",ipa:"/ˌprepəˈreɪʃn/",pos:"n.",cn:"準備",def:"The act of getting ready for something.",ex:"Good preparation is the key to a successful interview.",exCn:"充分的準備是面試成功的關鍵。"}
  ],
  questions:[
    {q:"What had the typhoon already done before it reached the city?",
     opts:["A. Cut the phone lines","B. Destroyed part of a mountain bridge","C. Flooded the subway","D. Closed the airport"],
     ans:1, expl:"By the time the wind reached the city, it had already destroyed part of a bridge in the mountains.。"},
    {q:"Why did the grandmother have to leave the house?",
     opts:["A. The roof was broken","B. She was afraid of the wind","C. Her medicine had to be kept cold","D. There was no food left"],
     ans:2, expl:"who takes medicine that must be kept cold。"},
    {q:"Which sentence correctly describes a past habit that has stopped?",
     opts:["A. My mother uses to buy candles","B. My mother would buy candles before every typhoon","C. My mother is used to buy candles","D. My mother used buy candles"],
     ans:1, expl:"would + 原形 可描述過去反覆的習慣；used to 也可以，但 uses to / used buy 皆為錯誤形式。"},
    {q:"How does the writer feel about typhoons now?",
     opts:["A. Excited, like a child","B. Still terrified","C. Not excited, but not afraid","D. Completely uninterested"],
     ans:2, expl:"I no longer think of a typhoon as a holiday, but I am also no longer afraid of one.。"}
  ],
  upgrade:[
    {b1:"The wind came to the city. Before that, it broke a bridge.",
     b2:"By the time the wind reached the city, it had already destroyed part of a bridge.",
     note:"By the time + 過去簡單式，主句用過去完成式（had + p.p.），清楚標出先後。", "sp": "By the time the wind hit the city, it had already taken out part of a bridge.", "spNote": "hit（襲擊）、take out（摧毀）是災害新聞的口語動詞。", "b1Cn": "風來到城市。在那之前，它弄壞了一座橋。", "b2Cn": "風抵達城市時，已經摧毀了部分橋梁。", "spCn": "風掃到城裡之前，就已經先毀了半座橋。"},
    {b1:"When I was young, my mother bought candles every typhoon.",
     b2:"When I was young, my mother would buy candles before every typhoon.",
     note:"would 表過去反覆習慣，語氣比過去簡單式更有「回憶感」。", "sp": "When I was a kid, my mom would stock up on candles before every typhoon.", "spNote": "when I was a kid、stock up on（囤貨）是回憶往事的口語標配。", "b1Cn": "我小時候，我媽媽每次颱風都買蠟燭。", "b2Cn": "我小時候，媽媽每逢颱風前都會買蠟燭。", "spCn": "我小時候，我媽每次颱風前都會囤蠟燭。"}
  ]
},

/* ---------------------------------------------------------- 07 */
{
  id:"r07", level:"B2", topic:"面試與職涯", words:270,
  title:"The Interview That Changed Her Mind",
  titleCn:"改變她想法的那場面試",
  focus:"假設語氣（if I were / would have）；轉述句",
  intro:"進入 B2：注意第二、第三條件句的動詞形式，以及轉述句中時態往後退一格的規則。",
  "spoken": [{"en":"Claire was all set to take this job — better pay, ten minutes from home, fancy title.","cn":"Claire 本來鐵了心要接那份工作——薪水更高、離家十分鐘、頭銜好聽。"},{"en":"Then in the interview she found out four people had quit in eighteen months, and weekends were basically mandatory.","cn":"結果面試時她發現一年半內走了四個人，週末基本上都要上班。"},{"en":"When she asked why everyone left, the manager just said they 'weren't the right fit.' Huge red flag.","cn":"她問為什麼大家都離職，主管只說他們「不合適」。超大警訊。"},{"en":"She turned it down and never looked back. Her line: 'A salary is easy to measure. A manager who can't explain why people leave tells you way more.'","cn":"她婉拒了，也從沒後悔。她的名言：「薪水好衡量。一個說不清員工為何離開的主管，透露的訊息多得多。」"}],
  paras:[
    {en:"When Claire applied for the position, she was almost certain that she wanted it. The salary was higher than her current one, the office was ten minutes from her flat, and the job title sounded impressive on paper.",
     cn:"Claire 應徵那個職位時，幾乎確定自己想要這份工作。薪水比現在高，辦公室離她的公寓只要十分鐘，而職稱寫在紙上也很體面。"},
    {en:"The interview lasted an hour. The manager explained that the team had lost four people in eighteen months and that the person they hired would be expected to work most weekends. When Claire asked why so many staff had left, he said that they had simply \"not been the right fit\".",
     cn:"面試持續了一個小時。主管解釋說，團隊在十八個月內走了四個人，而錄取的人將必須大多數週末都要工作。當 Claire 問為什麼這麼多員工離職，他說他們只是「不太適合」。"},
    {en:"Walking home, she realized that she had been asking the wrong question all along. If she had only compared the two salaries, she would probably have accepted the offer within a day. What she really needed to compare was how she would feel on a Sunday evening.",
     cn:"走回家的路上，她意識到自己一直問錯了問題。如果她只比較兩份薪水，她大概一天內就會接受那份工作。她真正需要比較的，是自己在星期天晚上會有什麼感覺。"},
    {en:"She turned the offer down politely. Her friends thought she was being too cautious, and perhaps, if the team had been stable, she would have said yes. But she has never regretted the decision. \"A higher salary is easy to measure,\" she says. \"A manager who cannot explain why people leave is a much more useful piece of information.\"",
     cn:"她客氣地拒絕了這份工作。朋友們覺得她太過謹慎；或許，如果那個團隊穩定一些，她真的會答應。但她從未後悔這個決定。「薪水高低很容易衡量，」她說，「而一個無法解釋員工為何離職的主管，才是更有用的資訊。」"}
  ],
  target:[
    {w:"apply for",ipa:"/əˈplaɪ fɔːr/",pos:"phr.v.",cn:"應徵、申請",def:"To make a formal request for a job or place.",ex:"Many seniors in my high school plan to apply for scholarships to study abroad.",exCn:"我們高中很多高三生打算申請出國留學的獎學金。"},
    {w:"impressive",ipa:"/ɪmˈpresɪv/",pos:"adj.",cn:"令人印象深刻的",def:"Causing admiration because it is very good or large.",ex:"Her presentation was so impressive that the whole room applauded.",exCn:"她的簡報令人印象深刻，全場都鼓掌了。"},
    {w:"be expected to",ipa:"/bi ɪkˈspektɪd tuː/",pos:"phr.",cn:"被要求、被預期要",def:"To be required or believed likely to do something.",ex:"All employees are expected to attend the safety training.",exCn:"所有員工都應該參加安全訓練。"},
    {w:"the right fit",ipa:"/ðə raɪt fɪt/",pos:"phr.",cn:"適合的人／契合",def:"A person who suits a job or team well.",ex:"The jacket looked nice, but it was not the right fit for her.",exCn:"那件外套好看，但不太合她的身。"},
    {w:"turn down",ipa:"/tɝːn daʊn/",pos:"phr.v.",cn:"拒絕",def:"To refuse an offer or request.",ex:"She turned down the invitation because she already had plans.",exCn:"她拒絕了邀請，因為她已經有安排了。"},
    {w:"cautious",ipa:"/ˈkɔːʃəs/",pos:"adj.",cn:"謹慎的",def:"Careful to avoid risk.",ex:"My father is a cautious driver who never goes over the speed limit.",exCn:"我爸是個謹慎的駕駛，從不超速。"},
    {w:"stable",ipa:"/ˈsteɪbl/",pos:"adj.",cn:"穩定的",def:"Not likely to change or move suddenly.",ex:"After years of moving around, she finally found a stable job in Taichung.",exCn:"漂泊了好幾年之後，她終於在台中找到一份穩定的工作。"},
    {w:"regret",ipa:"/rɪˈɡret/",pos:"v.",cn:"後悔",def:"To feel sorry about something you did or did not do.",ex:"I regret not learning to swim when I was younger.",exCn:"我後悔小時候沒學游泳。"}
  ],
  questions:[
    {q:"What did the manager reveal about the team?",
     opts:["A. It had won several awards","B. It had lost four people in eighteen months","C. It was about to double in size","D. It never worked at weekends"],
     ans:1, expl:"the team had lost four people in eighteen months。"},
    {q:"What does \"she had been asking the wrong question all along\" suggest?",
     opts:["A. She had focused only on salary and location","B. She had not prepared for the interview","C. She had asked the manager too many questions","D. She had applied to the wrong company"],
     ans:0, expl:"下一句說 If she had only compared the two salaries... 說明她原本只比較薪水與條件。"},
    {q:"Choose the correct third conditional.",
     opts:["A. If the team was stable, she would say yes","B. If the team had been stable, she would have said yes","C. If the team is stable, she would have said yes","D. If the team would be stable, she said yes"],
     ans:1, expl:"第三條件句（與過去事實相反）= If + had + p.p., would have + p.p.。"},
    {q:"What does Claire value most as information?",
     opts:["A. The size of the office","B. The job title","C. Whether a manager can explain why people leave","D. The length of the interview"],
     ans:2, expl:"A manager who cannot explain why people leave is a much more useful piece of information.。"}
  ],
  upgrade:[
    {b1:"She only looked at the money. So she nearly took the job.",
     b2:"If she had only compared the two salaries, she would probably have accepted the offer.",
     note:"第三條件句：談「過去沒發生的假設」，if 子句用 had + p.p.，主句用 would have + p.p.。", "sp": "If she'd only looked at the paycheck, she probably would've taken the job.", "spNote": "paycheck（薪水）、would've 縮寫是口語假設句的樣子。", "b1Cn": "她只看錢。所以她差點接受那份工作。", "b2Cn": "如果她只比較兩份薪水，大概就會接受那份工作了。", "spCn": "她要是只看薪水，八成就把那份工作接下來了。"},
    {b1:"He said: \"They were not the right fit.\"",
     b2:"He said that they had not been the right fit.",
     note:"轉述句時態退一格：were → had been；並去掉引號、加 that。", "sp": "He said they just weren't the right fit.", "spNote": "just（就是）緩和語氣；not the right fit 本身已是口語慣用。", "b1Cn": "他說：「他們不合適。」", "b2Cn": "他說他們當時並不合適。", "spCn": "他說他們就是不合適。"}
  ]
},

/* ---------------------------------------------------------- 08 */
{
  id:"r08", level:"B2", topic:"社會議題／意見表達", words:280,
  title:"Is Cosmetic Surgery a Personal Choice?",
  titleCn:"整形手術是個人選擇嗎？",
  focus:"讓步與情態動詞（admittedly / it may be true that / arguably）",
  intro:"議論文。B2 的核心能力是「先承認對方有理，再提出自己的立場」。注意 admittedly、arguably、to some extent 的用法。",
  "spoken": [{"en":"Cosmetic surgery is one of those topics where everyone's got an opinion.","cn":"整形手術就是那種人人都有意見的話題。"},{"en":"Sure, it's your body, your call — and for accident patients it's basically medical treatment, not a luxury.","cn":"當然，你的身體你決定——對意外傷患來說那根本是治療，不是奢侈。"},{"en":"But here's the thing: when teens grow up on edited faces and the ads never stop, 'free choice' starts looking a lot like pressure.","cn":"但問題來了：當青少年看著修過的臉長大、廣告又轟炸不停，「自由選擇」看起來就很像壓力了。"},{"en":"So the middle ground makes sense — keep it legal, but be straight about the risks, set an age floor, and rein in the ads.","cn":"所以中間立場才合理——維持合法，但風險要說清楚、訂年齡下限、廣告要管緊。"}],
  paras:[
    {en:"Few subjects divide opinion as quickly as cosmetic surgery. Supporters argue that what a person does with their own body is nobody else's business, and that argument is difficult to dismiss.",
     cn:"很少有話題像整形手術一樣，能這麼快讓意見分裂。支持者主張，一個人如何對待自己的身體不干別人的事，而這個論點很難反駁。"},
    {en:"Admittedly, surgery can do far more than change an appearance. A patient whose face has been damaged in an accident may recover not only skin but also the confidence to go outside. In such cases the operation is arguably a form of medical treatment rather than a luxury.",
     cn:"不可否認，手術能做的遠不只是改變外貌。一位臉部在意外中受傷的病人，可能不只恢復了皮膚，也恢復了走出家門的自信。在這類情況下，手術可以說是一種醫療，而不是奢侈。"},
    {en:"It may be true that adults can decide for themselves. The problem is that the decision is rarely made in a vacuum. When teenagers grow up seeing edited faces every day, \"free choice\" starts to look more like pressure, and clinics that advertise heavily to young people are not simply meeting demand; to some extent they are creating it.",
     cn:"成年人可以自己做決定，這或許是真的。問題在於，這個決定很少是在真空中做出的。當青少年每天看到修過的臉長大，「自由選擇」開始看起來更像壓力，而大量向年輕人廣告的診所並不只是滿足需求；某種程度上，他們是在創造需求。"},
    {en:"A reasonable position, therefore, is neither to ban nor to celebrate. Surgery should remain legal and available, but it should be accompanied by honest information about risks, a minimum age for non-medical operations, and stricter rules on advertising. Choice matters, yet a choice made under pressure is not really free.",
     cn:"因此，一個合理的立場既不是禁止，也不是讚揚。手術應該保持合法且可取得，但同時必須搭配誠實的風險說明、非醫療性手術的最低年齡限制，以及更嚴格的廣告規範。選擇很重要，但在壓力下做出的選擇，並不真的算是自由。"}
  ],
  target:[
    {w:"divide opinion",ipa:"/dɪˈvaɪd əˈpɪnjən/",pos:"phr.",cn:"引起意見分歧",def:"To make people disagree strongly.",ex:"The new school uniform design has divided opinion among parents.",exCn:"新的校服設計在家長之間引起了意見分歧。"},
    {w:"dismiss",ipa:"/dɪsˈmɪs/",pos:"v.",cn:"駁回、不予考慮",def:"To refuse to accept that something is important or true.",ex:"The manager dismissed the idea without even hearing the details.",exCn:"經理連細節都沒聽就駁回了那個想法。"},
    {w:"admittedly",ipa:"/ədˈmɪtɪdli/",pos:"adv.",cn:"不可否認地",def:"Used to admit that something is true before saying something else.",ex:"The course is, admittedly, quite challenging for beginners.",exCn:"這門課對初學者來說，確實蠻有挑戰性的。"},
    {w:"arguably",ipa:"/ˈɑːrɡjuəbli/",pos:"adv.",cn:"可以說、可論證地",def:"Used to say something can reasonably be argued.",ex:"Taipei is arguably the best city in Asia for street food.",exCn:"台北可以說是亞洲街頭小吃最棒的城市。"},
    {w:"luxury",ipa:"/ˈlʌkʃɚi/",pos:"n.",cn:"奢侈品",def:"Something expensive that is pleasant but not necessary.",ex:"A holiday abroad is still a luxury for many working families.",exCn:"出國度假對很多上班族家庭來說仍是一種奢侈。"},
    {w:"in a vacuum",ipa:"/ɪn ə ˈvækjuəm/",pos:"phr.",cn:"在真空中（不受外界影響）",def:"Separately from other people or events.",ex:"A company's hiring decisions never exist in a vacuum; the local job market shapes them too.",exCn:"公司的招聘決策從來不是憑空存在的，當地的就業市場也會影響這些決定。"},
    {w:"meet demand",ipa:"/miːt dɪˈmænd/",pos:"phr.",cn:"滿足需求",def:"To supply what people want.",ex:"The factory hired extra workers to meet demand during the holiday season.",exCn:"工廠在假期旺季多雇了人手來滿足需求。"},
    {w:"to some extent",ipa:"/tə sʌm ɪkˈstent/",pos:"phr.",cn:"某種程度上",def:"Partly but not completely.",ex:"To some extent, I agree with you, but the plan still has risks.",exCn:"某種程度上我同意你，但這個計畫仍有風險。"},
    {w:"be accompanied by",ipa:"/bi əˈkʌmpənid baɪ/",pos:"phr.",cn:"伴隨著",def:"To happen or exist at the same time as something else.",ex:"The new policy will be accompanied by a series of public talks.",exCn:"新政策將伴隨一系列公開說明會推出。"}
  ],
  questions:[
    {q:"Why does the writer mention a patient injured in an accident?",
     opts:["A. To prove surgery is dangerous","B. To show surgery can be medical, not decorative","C. To argue surgery should be free","D. To criticise clinics"],
     ans:1, expl:"the operation is arguably a form of medical treatment rather than a luxury。"},
    {q:"What does \"the decision is rarely made in a vacuum\" mean?",
     opts:["A. People decide too slowly","B. People are influenced by what surrounds them","C. Doctors decide for patients","D. The decision costs a lot"],
     ans:1, expl:"接著說青少年天天看到修圖的臉，free choice 變得像壓力 → 決定受環境影響。"},
    {q:"Which is the writer's final position?",
     opts:["A. Ban all cosmetic surgery","B. Encourage everyone to have it","C. Keep it legal but regulate information, age and advertising","D. Leave it entirely to the market"],
     ans:2, expl:"neither to ban nor to celebrate... honest information, a minimum age, stricter rules on advertising。"},
    {q:"Which phrase signals a concession (admitting the other side)?",
     opts:["A. therefore","B. admittedly","C. in such cases","D. the problem is"],
     ans:1, expl:"admittedly = 不可否認地，是典型的讓步標記。"}
  ],
  upgrade:[
    {b1:"Some people think surgery is good. I do not agree completely.",
     b2:"Admittedly, surgery can restore confidence; the difficulty is that few decisions are made without pressure.",
     note:"先讓步（Admittedly...）再轉折（the difficulty is that...），是 B2 議論文的標準節奏。", "sp": "Sure, surgery can give people their confidence back — the catch is, almost nobody decides this stuff without feeling pressured.", "spNote": "Sure,... 開頭讓步、the catch is（問題就在）是口語論證的常見骨架。", "b1Cn": "有些人覺得手術好。我不完全同意。", "b2Cn": "誠然，手術能找回自信；難處在於很少有決定是在沒有壓力下做的。", "spCn": "手術確實能讓人找回自信——問題是，幾乎沒有人做這種決定時是毫無壓力的。"},
    {b1:"Clinics advertise a lot. Young people want surgery.",
     b2:"Clinics that advertise heavily to young people are not simply meeting demand; to some extent they are creating it.",
     note:"用 that 關係子句壓縮資訊，並用 not simply A; to some extent B 的對比句型提高論述層次。", "sp": "These clinics aren't just meeting demand with all those ads — they're creating it.", "spNote": "aren't just... they're...（不只是…根本是…）是口語加強對比。", "b1Cn": "診所大量打廣告。年輕人想動手術。", "b2Cn": "向年輕人大量投放廣告的診所，不只是滿足需求；某種程度上是在創造需求。", "spCn": "這些猛打廣告的診所不只是滿足需求——他們根本是在製造需求。"}
  ]
},

/* ---------------------------------------------------------- 09 */
{
  id:"r09", level:"B2", topic:"金錢與保險", words:275,
  title:"The Real Cost of Cheap Insurance",
  titleCn:"便宜保險的真正代價",
  focus:"名詞化與複雜名詞片語；比較結構",
  intro:"說明／分析文。B2 寫作常把動作變成名詞（decide → decision, exclude → exclusion）讓句子更緊密。留意名詞片語有多長。",
  "spoken": [{"en":"Cheap insurance looks great till you actually read the fine print.","cn":"便宜的保險看起來很香，直到你真的去讀那些小字。"},{"en":"One travel policy covers cancellation for any reason; the cheap one only pays if the airline cancels. Big difference when things go south.","cn":"一份旅平險任何原因取消都賠；便宜那份只有航空公司取消才賠。出事時差很大。"},{"en":"And watch the deductible — some are so high that small claims aren't even worth filing.","cn":"還要注意自負額——有些高到小額理賠根本不值得申請。"},{"en":"The right question isn't 'how much is it?' It's 'what exactly happens if I need it?'","cn":"該問的不是「多少錢？」，而是「真出事的時候到底會怎樣？」"}],
  paras:[
    {en:"The attraction of a cheap policy is obvious: a lower monthly payment. What most buyers never examine is the list of exclusions printed on the final pages, and it is there that the true price is hidden.",
     cn:"便宜保單的吸引力很明顯：月付金額較低。但大多數購買者從不細看的，是印在最後幾頁的除外條款清單，而真正的代價就藏在那裡。"},
    {en:"Consider two travel policies. The first costs twice as much as the second, but it covers the cancellation of a flight for any reason, including illness in the family. The cheaper one covers cancellation only if the airline itself cancels the flight, a difference that becomes expensive the moment something goes wrong.",
     cn:"以兩份旅遊保單為例。第一份的價格是第二份的兩倍，但它涵蓋任何原因造成的航班取消，包括家人生病。較便宜的那份只在航空公司自己取消班機時才理賠——這個差別在事情出錯的那一刻就變得非常昂貴。"},
    {en:"A second hidden cost is the deductible, the amount you must pay yourself before the company pays anything. A policy with a very low premium often carries a deductible so high that small claims are effectively pointless. The saving is real, but so is the risk transfer: it moves from the company to you.",
     cn:"第二個隱藏成本是自付額，也就是保險公司理賠之前你必須自己先付的金額。保費極低的保單，往往搭配高到讓小額理賠實質上毫無意義的自付額。省下的錢是真的，但風險的轉移也是真的：它從公司轉到了你身上。"},
    {en:"None of this means that expensive insurance is automatically better. It means that a price cannot be judged without the conditions attached to it. The most useful question is not \"How much is it?\" but \"What exactly happens if I need it?\"",
     cn:"這一切並不表示貴的保險自動就比較好。它的意思是：價格無法脫離附帶條件被評斷。最有用的問題不是「這要多少錢？」而是「如果我真的需要用到，究竟會發生什麼？」"}
  ],
  target:[
    {w:"policy",ipa:"/ˈpɑːləsi/",pos:"n.",cn:"保單",def:"A written insurance agreement.",ex:"Read your policy carefully before you buy a new phone abroad.",exCn:"在國外買新手機之前，先仔細讀一下你的保單。"},
    {w:"exclusion",ipa:"/ɪkˈskluːʒn/",pos:"n.",cn:"除外條款",def:"Something an insurance policy does not cover.",ex:"Read the list of exclusions carefully before signing any contract.",exCn:"簽任何合約前，請仔細閱讀除外條款。"},
    {w:"cover",ipa:"/ˈkʌvɚ/",pos:"v.",cn:"（保險）涵蓋、理賠",def:"To include and pay for a particular risk.",ex:"Does this insurance cover lost luggage?",exCn:"這份保險有理賠行李遺失嗎？"},
    {w:"cancellation",ipa:"/ˌkænsəˈleɪʃn/",pos:"n.",cn:"取消",def:"A decision to stop something that was planned.",ex:"The airline offered a full refund after the cancellation of the flight.",exCn:"航班取消後，航空公司提供了全額退費。"},
    {w:"deductible",ipa:"/dɪˈdʌktəbl/",pos:"n.",cn:"自付額",def:"The amount you pay yourself before insurance pays.",ex:"With a lower deductible, your monthly premium will be higher.",exCn:"自付額越低，你的月繳保費就越高。"},
    {w:"premium",ipa:"/ˈpriːmiəm/",pos:"n.",cn:"保費",def:"The amount you pay regularly for insurance.",ex:"Our car insurance premium went up after the accident.",exCn:"那次事故之後，我們的汽車保費上漲了。"},
    {w:"claim",ipa:"/kleɪm/",pos:"n./v.",cn:"理賠（申請）",def:"A request for money from an insurance company.",ex:"After the storm damaged their roof, the couple filed a claim with their home insurer.",exCn:"暴風雨毀損屋頂後，這對夫妻向住宅保險公司提出了理賠申請。"},
    {w:"effectively",ipa:"/ɪˈfektɪvli/",pos:"adv.",cn:"實質上",def:"In practice, although not officially.",ex:"The store closes at eight, so it is effectively a day shop.",exCn:"那家店八點關門，實質上就是一間白天營業的店。"},
    {w:"risk transfer",ipa:"/rɪsk ˈtrænsfɝː/",pos:"n.",cn:"風險轉移",def:"Moving the possibility of loss from one party to another.",ex:"Insurance is a basic form of risk transfer from the individual to the insurer.",exCn:"保險是一種基本的風險轉移，從個人轉到保險公司身上。"}
  ],
  questions:[
    {q:"Where is the true price of a cheap policy hidden, according to the writer?",
     opts:["A. In the advertisement","B. In the monthly payment","C. In the list of exclusions","D. In the company's name"],
     ans:2, expl:"the list of exclusions printed on the final pages... it is there that the true price is hidden。"},
    {q:"What is a deductible?",
     opts:["A. A discount on the premium","B. The amount you pay before the company pays","C. A tax on insurance","D. Money returned at the end of the year"],
     ans:1, expl:"the amount you must pay yourself before the company pays anything。"},
    {q:"Why can a high deductible make small claims pointless?",
     opts:["A. The company refuses all claims","B. The claim costs more than it returns","C. Claims take too long","D. The policy expires quickly"],
     ans:1, expl:"自付額高於小額損失，等於申請也拿不到錢，所以 effectively pointless。"},
    {q:"What does the writer suggest asking instead of \"How much is it?\"",
     opts:["A. Which company is biggest?","B. Can I pay yearly?","C. What exactly happens if I need it?","D. Is it popular?"],
     ans:2, expl:"最後一句明說。"}
  ],
  upgrade:[
    {b1:"They cancelled the flight. The insurance paid.",
     b2:"The policy covers the cancellation of a flight for any reason.",
     note:"名詞化：cancel → the cancellation of...，讓句子更緊密、更書面。", "sp": "This policy's got you covered if your flight gets canceled — no matter the reason.", "spNote": "have you covered（保障你）是保險與客服的口語慣用。", "b1Cn": "他們取消了班機。保險理賠了。", "b2Cn": "這份保單涵蓋任何原因的班機取消。", "spCn": "只要班機被取消，不管什麼原因，這份保單都罩你。"},
    {b1:"This policy is cheap. But you must pay a lot first.",
     b2:"A policy with a very low premium often carries a deductible so high that small claims are pointless.",
     note:"so + adj. + that 結果句 ＋ 長名詞片語（a policy with a very low premium），是 B2 的句子重量。", "sp": "A dirt-cheap policy usually comes with a deductible so high that small claims aren't worth the hassle.", "spNote": "dirt-cheap（便宜到不行）、not worth the hassle（不值得麻煩）是口語評價。", "b1Cn": "這份保單便宜。但你要先付很多錢。", "b2Cn": "保費極低的保單，自負額往往高到讓小額理賠毫無意義。", "spCn": "便宜到不行的保單通常自負額高到爆，小額理賠根本不值得跑一趟。"}
  ]
},

/* ---------------------------------------------------------- 10 */
{
  id:"r10", level:"B2", topic:"睡眠與健康", words:285,
  title:"Sleep Debt: The Habit We Cannot Repay",
  titleCn:"睡眠負債：還不了的習慣",
  focus:"分詞構句；倒裝（Not only... / Only when...）",
  intro:"科普說明文。注意分詞開頭的句子（Having slept... / Lying in bed...）與倒裝句的動詞位置——這兩者是 B2 閱讀最常卡住的地方。",
  "spoken": [{"en":"Losing an hour of sleep a night sounds like nothing — but stack up a week of it and your attention takes a real hit.","cn":"每晚少睡一小時聽起來沒什麼——但累積一週，專注力就真的垮了。"},{"en":"They tested drivers after five short nights, and their reactions looked like they'd been drinking — and they thought they were fine.","cn":"研究測了連續五天睡不夠的駕駛，反應跟喝了酒差不多——而他們還自以為沒事。"},{"en":"And no, sleeping in twelve hours on Saturday doesn't fix it. Memory needs deep sleep spread over several nights.","cn":"還有，週六補睡十二小時沒用。記憶需要的是連續好幾晚的深層睡眠。"},{"en":"The fix is boring: same wake-up time every day, even after a rough night. Bragging about four hours of sleep isn't toughness — it's debt.","cn":"解法很無聊：每天同一時間起床，睡爛了也一樣。炫耀只睡四小時不是強悍——是欠債。"}],
  paras:[
    {en:"Losing an hour of sleep sounds harmless. Repeated for a week, however, it produces a measurable drop in attention, and the person affected is usually the last to notice it. Researchers call this accumulated shortage \"sleep debt\".",
     cn:"少睡一個小時聽起來無傷大雅。然而，連續一週如此，就會造成注意力可測量的下降，而受影響的人通常是最後才察覺的。研究者把這種累積的不足稱為「睡眠負債」。"},
    {en:"Having tested drivers after five short nights, one research team found reaction times similar to those of people who had been drinking. Not only did the drivers respond more slowly; they also rated their own performance as normal. Confidence, it seems, recovers faster than the brain.",
     cn:"某研究團隊在測試了連續五個短眠夜之後的駕駛人後發現，他們的反應時間近似於飲酒者。這些駕駛不僅反應更慢，還把自己的表現評為正常。看來自信恢復得比大腦快。"},
    {en:"Sleeping twelve hours at the weekend helps less than most people hope. Some functions do recover, but memory formation, which depends on deep sleep spread across several nights, cannot simply be caught up. Only when sleep becomes regular do these systems return to normal.",
     cn:"週末睡十二小時的幫助，比大多數人期待的少。有些功能確實會恢復，但記憶的形成依賴分布在數個夜晚的深層睡眠，無法只靠補眠追回。只有當睡眠變得規律，這些系統才會回到正常狀態。"},
    {en:"The practical advice is unglamorous. Keep the same waking time, even after a bad night; treat light as a signal rather than a nuisance; and stop treating tiredness as a sign of effort. A society that admires people who sleep four hours a night is not admiring health. It is admiring a debt that has not yet been called in.",
     cn:"實務上的建議並不迷人：即使前一晚沒睡好，也維持同樣的起床時間；把光線當成訊號而不是干擾；並停止把疲累當成努力的象徵。一個崇拜每晚只睡四小時的人的社會，崇拜的並不是健康，而是一筆尚未被追討的債。"}
  ],
  target:[
    {w:"harmless",ipa:"/ˈhɑːrmləs/",pos:"adj.",cn:"無害的",def:"Not able to cause damage.",ex:"The snake looks scary, but it is completely harmless.",exCn:"那條蛇看起來很嚇人，但其實完全無害。"},
    {w:"measurable",ipa:"/ˈmeʒɚəbl/",pos:"adj.",cn:"可測量的",def:"Large enough to be noticed or measured.",ex:"After a month of practice, she saw a measurable improvement in her speaking.",exCn:"練習一個月後，她的口說出現了可測量的進步。"},
    {w:"accumulate",ipa:"/əˈkjuːmjəleɪt/",pos:"v.",cn:"累積",def:"To increase in amount over time.",ex:"Interest on the loan will accumulate if you miss a payment.",exCn:"如果你漏繳一期，貸款利息就會開始累積。"},
    {w:"reaction time",ipa:"/riˈækʃn taɪm/",pos:"n.",cn:"反應時間",def:"How long you take to respond to something.",ex:"Professional gamers practice for hours to improve their reaction time during fast-paced matches.",exCn:"職業電競選手會練習好幾個小時，以提升自己在快節奏比賽中的反應時間。"},
    {w:"rate",ipa:"/reɪt/",pos:"v.",cn:"評價、評分",def:"To judge the quality or level of something.",ex:"Customers rated the new restaurant four out of five stars.",exCn:"顧客給這家新餐廳打了四顆星（滿分五顆）。"},
    {w:"catch up",ipa:"/kætʃ ʌp/",pos:"phr.v.",cn:"補回、趕上",def:"To do something you did not have time to do earlier.",ex:"I missed two classes and now I need to catch up on the reading.",exCn:"我缺了兩堂課，現在得補上那些閱讀進度。"},
    {w:"nuisance",ipa:"/ˈnuːsns/",pos:"n.",cn:"惱人的事物",def:"Something annoying or inconvenient.",ex:"The construction noise next door has been a real nuisance all week.",exCn:"隔壁工地的噪音整個禮拜都讓人很煩。"},
    {w:"unglamorous",ipa:"/ʌnˈɡlæmɚəs/",pos:"adj.",cn:"不吸引人的、平淡的",def:"Not exciting or attractive.",ex:"Most of a chef's day is spent on unglamorous tasks like chopping onions.",exCn:"廚師一天大部分時間都在做切洋蔥這類平淡的工作。"},
    {w:"call in (a debt)",ipa:"/kɔːl ɪn/",pos:"phr.v.",cn:"追討（債務）",def:"To ask for money that is owed to be paid back.",ex:"The bank called in the loan when the company missed three payments.",exCn:"公司三次未付款後，銀行便追討了那筆貸款。"}
  ],
  questions:[
    {q:"What did the research team find about tired drivers?",
     opts:["A. They drove more carefully","B. Their reaction times resembled those of drinkers","C. They refused to drive","D. They slept while driving"],
     ans:1, expl:"reaction times similar to those of people who had been drinking。"},
    {q:"What is surprising about the drivers' self-assessment?",
     opts:["A. They said they were dangerous","B. They said their performance was normal","C. They could not answer","D. They blamed the road"],
     ans:1, expl:"they also rated their own performance as normal。"},
    {q:"Why is weekend sleeping not a complete solution?",
     opts:["A. It makes you more tired","B. Memory formation needs deep sleep across several nights","C. It is bad for the heart","D. It changes your diet"],
     ans:1, expl:"memory formation, which depends on deep sleep spread across several nights, cannot simply be caught up。"},
    {q:"Which sentence shows correct inversion?",
     opts:["A. Not only the drivers responded more slowly","B. Not only did the drivers respond more slowly","C. Not only drivers did respond more slowly","D. Not only responded the drivers slowly"],
     ans:1, expl:"Not only 置句首時要倒裝：Not only + 助動詞 + 主詞 + 原形動詞。"}
  ],
  upgrade:[
    {b1:"The team tested drivers. Then they found slow reaction times.",
     b2:"Having tested drivers after five short nights, the team found much slower reaction times.",
     note:"Having + p.p. 分詞構句表示「先做完的動作」，取代 After they had tested...。", "sp": "After five short nights, the drivers they tested were way slower to react.", "spNote": "way slower（慢超多）的 way 是美式口語的加強副詞。", "b1Cn": "團隊測試了駕駛。然後他們發現反應變慢。", "b2Cn": "在五個短眠夜後測試駕駛，團隊發現反應時間慢了許多。", "spCn": "連續五天睡不夠之後，受測駕駛的反應慢了一大截。"},
    {b1:"Your sleep must be regular. Then your memory works well.",
     b2:"Only when sleep becomes regular do these systems return to normal.",
     note:"Only when 置句首要倒裝主句：do + 主詞 + 原形動詞。", "sp": "Your body doesn't get back to normal until your sleep does.", "spNote": "get back to normal（恢復正常）；句尾 until your sleep does 的替代省略乾淨又口語。", "b1Cn": "你的睡眠必須規律。然後記憶力才會好。", "b2Cn": "唯有睡眠變得規律，這些系統才會恢復正常。", "spCn": "睡眠沒回到正軌，身體就不會回到正常。"}
  ]
},

/* ============================================================
   主題延伸 B2 系列 ①　健康、醫療與身體
   ============================================================ */

/* ---------------------------------------------------------- 11 */
{
  id:"r11", level:"B2", topic:"健康醫療", words:280,
  title:"What the Doctor Does Not Have Time to Ask",
  titleCn:"醫生沒時間問的那些事",
  focus:"轉述句；委婉推測語氣（seem / tend to / appear）",
  intro:"看診溝通。B2 的重點是把「我覺得可能是…」說得專業而不武斷：注意 seem to、tend to、appear to、it could be that 的用法，以及把醫生說的話轉述出來時的時態變化。",
  "spoken": [{"en":"A clinic visit lasts under six minutes, so how you describe your symptoms really matters.","cn":"看診時間不到六分鐘，所以你怎麼描述症狀真的很重要。"},{"en":"Give the doctor four things: where it is, what it feels like, how long it's been going on, and what makes it better or worse.","cn":"給醫生四件事：哪裡不舒服、什麼感覺、持續多久、什麼會讓它變好或變糟。"},{"en":"And don't leave out the meds you're already on — my uncle's dizziness turned out to be from doubling his own blood-pressure pills.","cn":"還有別漏掉你正在吃的藥——我叔叔的頭暈後來發現是他自己把血壓藥加倍吃造成的。"},{"en":"Before you leave, ask: what's the most likely cause, what should bring me back, and should I stop taking anything?","cn":"離開前問三件事：最可能的原因是什麼、什麼狀況要回診、有沒有該停的藥？"}],
  paras:[
    {en:"The average consultation in a busy clinic lasts under six minutes. In that time a doctor must listen, examine, decide, and explain — which means the patient who describes symptoms clearly gets far better care than the patient who simply says \"I don't feel well.\"",
     cn:"在忙碌的診所裡，平均看診時間不到六分鐘。在這段時間內，醫生必須聆聽、檢查、判斷並解釋——這意味著能清楚描述症狀的病人，會得到比只說「我不舒服」的病人好得多的照顧。"},
    {en:"Useful descriptions have four parts: where the problem is, what it feels like, how long it has lasted, and what makes it better or worse. \"It hurts here when I breathe in, and it has been getting worse for three days\" tells a doctor more than ten minutes of general complaint.",
     cn:"有用的描述包含四個部分：問題在哪裡、感覺像什麼、持續多久，以及什麼會讓它好轉或惡化。「我吸氣時這裡會痛，而且已經惡化三天了」比十分鐘的籠統抱怨提供了更多資訊。"},
    {en:"Patients also tend to leave out the two things doctors most need: the medicines they are already taking, and the symptoms they consider embarrassing. My uncle once described his dizziness for five minutes without mentioning that he had doubled his own blood-pressure tablets. The doctor said that the dizziness had probably been caused by the extra dose, not by the illness itself.",
     cn:"病人也往往會漏掉醫生最需要知道的兩件事：目前正在服用的藥，以及他們覺得難以開口的症狀。我叔叔曾花五分鐘描述他的暈眩，卻沒提到自己把血壓藥加倍。醫生說，那個暈眩很可能是額外劑量造成的，而不是疾病本身。"},
    {en:"Before you leave, it is worth asking three questions: What is the most likely cause? What should make me come back? And is there anything I should stop taking? A consultation that appears to be about a diagnosis is really about a plan — and a plan you cannot remember is not a plan at all.",
     cn:"離開之前，值得問三個問題：最可能的原因是什麼？出現什麼情況我該回診？有沒有什麼藥我該停掉？一場看起來是在做診斷的看診，其實是在訂一個計畫——而你記不住的計畫，根本不算計畫。"}
  ],
  target:[
    {w:"consultation",ipa:"/ˌkɑːnslˈteɪʃn/",pos:"n.",cn:"看診、諮詢",def:"A meeting with a doctor to discuss a health problem.",ex:"The lawyer charges 3,000 dollars for a one-hour consultation.",exCn:"那位律師一小時的諮詢費是三千元。"},
    {w:"symptom",ipa:"/ˈsɪmp.təm/",pos:"n.",cn:"症狀",def:"A sign that you have an illness.",ex:"A sore throat is often the first symptom of a cold, followed a day later by a runny nose.",exCn:"喉嚨痛往往是感冒的第一個症狀，隔天接著就會流鼻水。"},
    {w:"examine",ipa:"/ɪɡˈzæmɪn/",pos:"v.",cn:"檢查",def:"To look at someone carefully to find out what is wrong.",ex:"The doctor examined my throat.",exCn:"醫生檢查了我的喉嚨。"},
    {w:"breathe in",ipa:"/briːð ɪn/",pos:"phr.v.",cn:"吸氣",def:"To take air into your lungs.",ex:"Breathe in slowly through your nose, then breathe out through your mouth.",exCn:"用鼻子慢慢吸氣，再用嘴巴吐氣。"},
    {w:"leave out",ipa:"/liːv aʊt/",pos:"phr.v.",cn:"遺漏、省略",def:"To fail to include something.",ex:"Patients often leave out important details.",exCn:"病人常常會漏掉重要的細節。"},
    {w:"tend to",ipa:"/tend tuː/",pos:"phr.",cn:"往往、傾向於",def:"To usually do something.",ex:"People who work from home tend to skip lunch or eat it in front of their laptops.",exCn:"在家工作的人往往會跳過午餐，或是在筆電前面邊工作邊吃。"},
    {w:"dose",ipa:"/doʊs/",pos:"n.",cn:"劑量",def:"A measured amount of medicine.",ex:"Take one dose of the medicine three times a day after meals.",exCn:"每天飯後服用一次劑量，一天三次。"},
    {w:"dizziness",ipa:"/ˈdɪzinəs/",pos:"n.",cn:"暈眩",def:"The feeling that everything is spinning.",ex:"Standing up too quickly can cause a brief feeling of dizziness.",exCn:"站得太快可能會短暫地覺得頭暈。"},
    {w:"diagnosis",ipa:"/ˌdaɪəɡˈnoʊsɪs/",pos:"n.",cn:"診斷",def:"A doctor's judgement about what illness you have.",ex:"After running several tests, the doctor gave her a clear diagnosis.",exCn:"做了幾項檢查之後，醫生給了她明確的診斷。"}
  ],
  questions:[
    {q:"According to the writer, what makes a description of symptoms useful?",
     opts:["A. Using medical words","B. Location, feeling, duration, and what changes it","C. Speaking for at least ten minutes","D. Bringing a written list of illnesses"],
     ans:1, expl:"where the problem is, what it feels like, how long it has lasted, and what makes it better or worse。"},
    {q:"What had actually caused the uncle's dizziness?",
     opts:["A. His illness","B. Lack of sleep","C. The extra dose of his own tablets","D. Low blood pressure from birth"],
     ans:2, expl:"The doctor said that the dizziness had probably been caused by the extra dose。"},
    {q:"Which sentence correctly reports \"Your dizziness is caused by the extra dose\"?",
     opts:["A. The doctor said my dizziness is caused by the extra dose yesterday","B. The doctor said that my dizziness had been caused by the extra dose","C. The doctor said that my dizziness was cause by the extra dose","D. The doctor say my dizziness had caused by the extra dose"],
     ans:1, expl:"轉述時時態退一格，被動保持 be + p.p. → had been caused。"},
    {q:"What does the writer mean by \"a plan you cannot remember is not a plan at all\"?",
     opts:["A. You should not trust doctors","B. You should write down or confirm what to do next","C. Diagnoses are usually wrong","D. Consultations should be longer"],
     ans:1, expl:"重點在於離開前要確認接下來要做什麼，記不住等於沒有計畫。"}
  ],
  upgrade:[
    {b1:"Patients often forget to say what medicine they take.",
     b2:"Patients tend to leave out the medicines they are already taking.",
     note:"tend to 比 often 更書面；leave out 是道地的片語動詞；they are already taking 是省略關係詞的關係子句。", "sp": "Patients tend to leave out the meds they're already on.", "spNote": "meds（藥的簡稱）、be on（正在服用）是就醫口語。", "b1Cn": "病人常常忘記說他們吃什麼藥。", "b2Cn": "病人往往漏掉他們已在服用的藥物。", "spCn": "病人常常漏講自己正在吃的藥。"},
    {b1:"Maybe the extra tablets made him dizzy.",
     b2:"The dizziness appears to have been caused by the extra dose.",
     note:"appear to have been + p.p. 是 B2 的委婉推測：不下斷言，但語氣專業。", "sp": "Looks like the extra pills were what made him dizzy.", "spNote": "Looks like...（看起來是…）是口語推測的萬用開頭。", "b1Cn": "也許多吃的藥片讓他頭暈。", "b2Cn": "暈眩似乎是多出的劑量造成的。", "spCn": "看起來就是多吃的那幾顆藥讓他頭暈的。"}
  ]
},

/* ---------------------------------------------------------- 12 */
{
  id:"r12", level:"B2", topic:"健康醫療", words:290,
  title:"Two Systems, Two Waiting Rooms",
  titleCn:"兩種制度，兩間候診室",
  focus:"比較結構（twice as ... as / by contrast / whereas）",
  intro:"制度比較文。B2 寫作最常需要的就是「精準比較」：注意 twice as much as、far more likely to、by contrast、the former / the latter 這些工具。",
  "spoken": [{"en":"Same illness, two cities: in Taipei you pay a small fixed fee; in Chicago the bill shows up three weeks later at twenty times the price.","cn":"同樣的病，兩個城市：在台北付少少的固定費用；在芝加哥帳單三週後才來，貴二十倍。"},{"en":"Taiwan's system covers basically everyone — visits are cheap and quick, so waiting rooms are packed but nobody skips the doctor over money.","cn":"台灣的制度幾乎涵蓋所有人——看病便宜又快，候診室雖擠，但沒人因為錢不敢看醫生。"},{"en":"In the States it runs on employer insurance — longer appointments, but switch jobs and you might lose your doctor, so people put off check-ups.","cn":"美國靠雇主保險運作——看診時間較長，但換工作可能連醫生都換掉，所以大家拖著不檢查。"},{"en":"Neither one wins. You're trading time and depth for access, or security for choice. The real price is never just the bill.","cn":"沒有哪邊完勝。你不是用時間深度換可近性，就是用保障換選擇。真正的代價從來不只是帳單。"}],
  paras:[
    {en:"A visit to a doctor in Taipei and a visit to a doctor in Chicago can produce almost the same medical advice and completely different pieces of paper. In the first case the patient usually pays a small fixed fee; in the second, the bill may arrive three weeks later and cost twenty times as much.",
     cn:"在台北看醫生和在芝加哥看醫生，可能得到幾乎相同的醫療建議，卻拿到完全不同的單據。前者病人通常付一筆小額固定費用；後者的帳單可能三週後才寄到，金額是前者的二十倍。"},
    {en:"Taiwan's national system covers almost the entire population and is funded mainly through payroll contributions. Because the cost of a single visit is low, people go often — sometimes for problems that would disappear on their own. Waiting rooms are crowded, appointments are short, but nobody avoids treatment because of price.",
     cn:"台灣的全民健保涵蓋幾乎全部人口，主要透過薪資扣繳來支撐。由於單次看診費用低，人們就診頻繁——有時是為了本來就會自己好的問題。候診室很擁擠、看診時間很短，但沒有人因為價格而不敢就醫。"},
    {en:"The American system, by contrast, is built on private insurance, usually provided through an employer. Care can be excellent and appointments longer, yet a change of job may change your doctor, and patients are far more likely to delay a check-up until a small problem has become an expensive one.",
     cn:"相對地，美國的制度建立在私人保險上，通常由雇主提供。醫療品質可以很好、看診時間也較長，但換工作可能就得換醫生，而病人更容易把檢查一延再延，直到小問題變成昂貴的問題。"},
    {en:"Neither model is simply better. The former buys access at the cost of time and depth; the latter buys time and choice at the cost of security. What both systems show is that the real price of healthcare is never only the number printed on the bill.",
     cn:"兩種模式都不是單純哪個比較好。前者用時間與深度換來了可及性；後者用安全感換來了時間與選擇。兩種制度共同說明的是：醫療真正的代價，從來不只是帳單上印的那個數字。"}
  ],
  target:[
    {w:"fixed fee",ipa:"/fɪkst fiː/",pos:"n.",cn:"固定費用",def:"An amount that does not change.",ex:"The lawyer charges a fixed fee of five thousand dollars per case.",exCn:"那位律師每個案子收取五千元的固定費用。"},
    {w:"fund",ipa:"/fʌnd/",pos:"v.",cn:"提供資金",def:"To provide money for something.",ex:"The scholarship is funded by donations from local businesses.",exCn:"這筆獎學金是由當地企業捐款資助的。"},
    {w:"contribution",ipa:"/ˌkɑːntrɪˈbjuːʃn/",pos:"n.",cn:"（保費）分攤、繳款",def:"Money paid regularly into a system.",ex:"Freelancers in many countries must pay their own pension contribution every month without help from a boss.",exCn:"在許多國家，自由工作者每個月必須自己繳納退休金提撥款，沒有老闆幫忙分擔。"},
    {w:"by contrast",ipa:"/baɪ ˈkɑːntræst/",pos:"phr.",cn:"相對地、對比之下",def:"Used to show a clear difference.",ex:"Summer in Taipei is humid; winter in Hokkaido, by contrast, is dry and freezing.",exCn:"台北的夏天很潮濕；相比之下，北海道的冬天又乾又冷。"},
    {w:"delay",ipa:"/dɪˈleɪ/",pos:"v.",cn:"延遲、拖延",def:"To not do something until later.",ex:"Don't delay — the deadline for the application is next Friday.",exCn:"別再拖了——申請截止日是下週五。"},
    {w:"check-up",ipa:"/ˈtʃek ʌp/",pos:"n.",cn:"健康檢查",def:"A medical examination to see if you are healthy.",ex:"He delayed his yearly check-up.",exCn:"他拖著沒去做年度健康檢查。"},
    {w:"access",ipa:"/ˈækses/",pos:"n.",cn:"可及性、取得的機會",def:"The chance or right to use something.",ex:"Students need a library card to get access to the online journals.",exCn:"學生需要圖書證才能使用線上期刊。"},
    {w:"the former / the latter",ipa:"/ðə ˈfɔːrmɚ/",pos:"phr.",cn:"前者／後者",def:"The first one mentioned / the second one mentioned.",ex:"The former is cheap; the latter is faster.",exCn:"前者便宜，後者快速。"}
  ],
  questions:[
    {q:"How is Taiwan's system mainly funded?",
     opts:["A. Private insurance","B. Payroll contributions","C. Hospital donations","D. Tourist taxes"],
     ans:1, expl:"funded mainly through payroll contributions。"},
    {q:"What is one consequence of low visit costs in Taiwan?",
     opts:["A. Doctors earn nothing","B. People visit often, even for minor problems","C. Nobody visits doctors","D. Appointments are very long"],
     ans:1, expl:"Because the cost of a single visit is low, people go often。"},
    {q:"According to the text, what risk comes with the American model?",
     opts:["A. Appointments are too short","B. Everyone must change doctors yearly","C. Patients delay care until it becomes expensive","D. Insurance is illegal"],
     ans:2, expl:"patients are far more likely to delay a check-up until a small problem has become an expensive one。"},
    {q:"In the last paragraph, \"the latter\" refers to:",
     opts:["A. Taiwan's system","B. The American system","C. The waiting room","D. The bill"],
     ans:1, expl:"the former = 前面提到的台灣制度；the latter = 後提到的美國制度。"}
  ],
  upgrade:[
    {b1:"The American bill is much more expensive.",
     b2:"The bill may arrive three weeks later and cost twenty times as much.",
     note:"twenty times as much (as) 是精準的倍數比較，比 much more expensive 有力得多。", "sp": "The bill might not show up for three weeks — and it can run twenty times as much.", "spNote": "show up（寄來）、run（金額高達）是帳單話題的口語動詞。", "b1Cn": "美國的帳單貴很多。", "b2Cn": "帳單可能三週後才寄到，金額高出二十倍。", "spCn": "帳單可能三週後才出現——而且金額能高到二十倍。"},
    {b1:"Taiwan's system is cheap but the visits are short. America is the opposite.",
     b2:"The former buys access at the cost of time and depth; the latter buys time and choice at the cost of security.",
     note:"the former / the latter + at the cost of，用一句話對稱地收束兩種制度的取捨。", "sp": "In Taiwan you get in fast but the visits fly by; in the States you get time and options, but you pay through the nose.", "spNote": "fly by（一下就結束）、pay through the nose（貴到流血）是口語對比講法。", "b1Cn": "台灣的制度便宜但看診很短。美國相反。", "b2Cn": "前者用時間和深度換取可近性；後者用保障換取時間與選擇。", "spCn": "在台灣看病快但一下就結束；在美國有時間有選擇，但貴到流血。"}
  ]
},

/* ---------------------------------------------------------- 13 */
{
  id:"r13", level:"B2", topic:"健康醫療", words:285,
  title:"The Quiet Kind of Tired",
  titleCn:"安靜的那種累",
  focus:"名詞化；情態動詞推測（may well / might have been）",
  intro:"心理健康主題。注意名詞化（exhaust → exhaustion, recover → recovery）如何讓句子更緊密，以及 may well、might have been 這類推測語氣。",
  "spoken": [{"en":"There's regular tired, and then there's the kind sleep doesn't fix — everything works, nothing feels interesting.","cn":"有一種是普通的累，另一種是睡覺也治不好的累——身體還能動，但什麼都提不起勁。"},{"en":"That's burnout, and it sneaks up on you. By the time you notice, you've probably been running on empty for months.","cn":"那就是倦怠，而且它是悄悄逼近的。等你察覺，八成已經透支好幾個月了。"},{"en":"A vacation won't cut it either — you come back to the same workload and the whole thing starts over.","cn":"放假也沒用——你回到同樣的工作量，一切又重來一遍。"},{"en":"Start small: track which tasks drain you for two weeks. Usually it's not the amount of work — it's two or three specific things. Name them and you can finally talk about them.","cn":"從小處開始：花兩週記錄哪些工作最耗你。通常問題不在量，而在兩三個特定情境。把它們點名出來，才有辦法討論。"}],
  paras:[
    {en:"Everybody knows the tiredness that follows a long day. Fewer people recognise the other kind: the exhaustion that sleep does not fix, in which the body works but nothing feels interesting. It builds slowly, and by the time it is obvious, it may well have been developing for months.",
     cn:"每個人都熟悉忙了一整天之後的疲累。比較少人認得出另外一種：睡覺也解決不了的耗竭——身體還在運作，但什麼都提不起興趣。它慢慢累積，等到明顯的時候，可能已經發展了好幾個月。"},
    {en:"Burnout is not a medical illness in every country's system, but the pattern is consistent: emotional exhaustion, a growing distance from the work itself, and a quiet loss of confidence in one's own competence. The people most affected are rarely lazy. They are usually the ones who found it hardest to say no.",
     cn:"「職業倦怠」並不在每個國家的醫療制度中被列為疾病，但模式是一致的：情緒耗竭、對工作本身越來越疏離，以及對自身能力安靜地失去信心。受影響最深的人很少是懶惰的人，通常正是那些最難說出「不」的人。"},
    {en:"What makes recovery difficult is that the usual advice — take a holiday, sleep more, exercise — treats a symptom. A week away might have helped in the first month; after a year, the return to the same workload simply restarts the process. Real recovery normally requires a change in what is expected, not only in what is endured.",
     cn:"讓恢復變困難的是：常見的建議——去度假、多睡、運動——處理的是症狀。放一週假在第一個月或許有效；一年後，回到同樣的工作量只會讓整個過程重新開始。真正的恢復通常需要改變「被期待的事」，而不只是改變「被忍受的事」。"},
    {en:"The first practical step is unglamorous and specific: write down, for two weeks, which tasks drain you and which ones do not. Most people discover that the problem is not the amount of work but two or three particular situations. Naming them is not a cure, but it turns a vague heaviness into something that can actually be discussed.",
     cn:"第一個實際的步驟並不迷人，而且很具體：連續兩週寫下哪些任務會消耗你、哪些不會。多數人會發現問題不在工作量，而在兩三個特定情境。把它們指認出來不是治療，但它能把一團模糊的沉重感，變成真正可以被討論的東西。"}
  ],
  target:[
    {w:"exhaustion",ipa:"/ɪɡˈzɔːstʃən/",pos:"n.",cn:"耗竭、極度疲勞",def:"The state of being extremely tired.",ex:"After working twelve-hour shifts for a month, she collapsed from exhaustion.",exCn:"連續上了一個月十二小時的班後，她累到倒下了。"},
    {w:"burnout",ipa:"/ˈbɝːnaʊt/",pos:"n.",cn:"職業倦怠",def:"Extreme tiredness caused by long-term stress at work.",ex:"Working sixty hours a week without a break can lead to burnout.",exCn:"一週工作六十小時又不休息，可能會導致職業倦怠。"},
    {w:"consistent",ipa:"/kənˈsɪstənt/",pos:"adj.",cn:"一致的",def:"Always the same; not changing.",ex:"His answers were consistent with what the other witnesses said.",exCn:"他的回答和其他證人所說的一致。"},
    {w:"competence",ipa:"/ˈkɑːmpɪtəns/",pos:"n.",cn:"能力",def:"The ability to do something well.",ex:"The training course is designed to improve your competence in data analysis.",exCn:"這個訓練課程是為了提升你在數據分析方面的能力。"},
    {w:"may well",ipa:"/meɪ wel/",pos:"phr.",cn:"很可能",def:"Used to say something is quite likely.",ex:"The meeting may well be canceled if the boss is still sick.",exCn:"如果老闆還在生病，會議很可能會取消。"},
    {w:"workload",ipa:"/ˈwɝːkloʊd/",pos:"n.",cn:"工作量",def:"The amount of work a person has to do.",ex:"After two coworkers quit, my workload doubled and I started staying late every night.",exCn:"兩位同事離職後，我的工作量加倍，開始每天晚上加班到很晚。"},
    {w:"drain",ipa:"/dreɪn/",pos:"v.",cn:"消耗（精力）",def:"To make someone lose energy.",ex:"Long meetings with no clear agenda really drain my energy.",exCn:"沒有明確議程的冗長會議真的很消耗我的精力。"},
    {w:"endure",ipa:"/ɪnˈdʊr/",pos:"v.",cn:"忍受",def:"To suffer something difficult patiently.",ex:"The runners had to endure heavy rain throughout the marathon.",exCn:"跑者在整場馬拉松中都得忍受大雨。"},
    {w:"vague",ipa:"/veɪɡ/",pos:"adj.",cn:"模糊的",def:"Not clear or exact.",ex:"The directions were so vague that we got lost twice.",exCn:"指示太模糊了，我們迷路了兩次。"}
  ],
  questions:[
    {q:"How is the second kind of tiredness different from ordinary tiredness?",
     opts:["A. It only happens at night","B. Sleep does not fix it","C. It causes fever","D. It disappears after a holiday"],
     ans:1, expl:"the exhaustion that sleep does not fix。"},
    {q:"Who does the writer say is most affected?",
     opts:["A. Lazy workers","B. New employees only","C. People who find it hardest to refuse","D. People who work alone"],
     ans:2, expl:"They are usually the ones who found it hardest to say no。"},
    {q:"Why is a holiday often not enough?",
     opts:["A. Holidays are too expensive","B. Returning to the same workload restarts the process","C. People cannot sleep on holiday","D. Employers do not allow it"],
     ans:1, expl:"the return to the same workload simply restarts the process。"},
    {q:"What is the first practical step suggested?",
     opts:["A. Change jobs immediately","B. Sleep twelve hours a night","C. Record for two weeks which tasks drain you","D. Tell nobody about it"],
     ans:2, expl:"write down, for two weeks, which tasks drain you and which ones do not。"}
  ],
  upgrade:[
    {b1:"He was very tired and it probably started months ago.",
     b2:"By the time it is obvious, the exhaustion may well have been developing for months.",
     note:"名詞化 tired → exhaustion，加上 may well have been V-ing 表「很可能一直在…」。", "sp": "By the time you notice, you've probably been running on empty for months.", "spNote": "running on empty（油箱見底、身心透支）是講過勞的經典口語。", "b1Cn": "他很累，而且可能幾個月前就開始了。", "b2Cn": "等到明顯的時候，倦怠可能已經累積好幾個月了。", "spCn": "等你察覺的時候，八成已經透支好幾個月了。"},
    {b1:"You cannot recover if the work does not change.",
     b2:"Real recovery normally requires a change in what is expected, not only in what is endured.",
     note:"recover → recovery（名詞化）＋ what 子句當受詞，句子更抽象也更精準。", "sp": "You can't really bounce back if the job stays exactly the same.", "spNote": "bounce back（恢復元氣）是口語；stays exactly the same 平實直接。", "b1Cn": "如果工作不改變，你無法恢復。", "b2Cn": "真正的復原通常需要改變被期待的事，而不只是改變忍受的方式。", "spCn": "工作要是完全不變，你根本好不起來。"}
  ]
},

/* ============================================================
   主題延伸 B2 系列 ②　旅遊與跨文化
   ============================================================ */

/* ---------------------------------------------------------- 14 */
{
  id:"r14", level:"B2", topic:"旅遊跨文化", words:290,
  title:"When the Plan Falls Apart",
  titleCn:"當行程整個垮掉",
  focus:"混合條件句；should have + p.p. 的檢討語氣",
  intro:"旅遊危機處理。注意 should have done（早該做卻沒做）與混合條件句（過去的假設 → 現在的結果）的組合，這是 B2 敘事最有力的工具。",
  "spoken": [{"en":"Our flight to Hanoi got scrapped forty minutes before boarding, and two hundred people jumped into the same line.","cn":"我們飛河內的班機登機前四十分鐘被取消，兩百個人瞬間排進同一條隊伍。"},{"en":"My colleague was smart — she skipped the line, called the airline's overseas number, and got rebooked in four minutes.","cn":"我同事很聰明——她不排隊，直接打航空公司的海外專線，四分鐘就改好票。"},{"en":"We should've saved digital copies of our bookings, and we didn't know they owed us meal vouchers after three hours — so we paid for dinner ourselves.","cn":"我們早該存好訂位資料的數位檔，也不知道延誤三小時他們就該給餐券——晚餐錢白花了。"},{"en":"Now before every flight I save the booking reference, both airline numbers, and a backup route offline. Learned that one the hard way.","cn":"現在每次飛行前我都會離線存好訂位編號、兩支航空公司電話和一條備案路線。這是吃過虧才學會的。"}],
  paras:[
    {en:"Our flight to Hanoi was cancelled forty minutes before boarding. The announcement gave no reason, and within a minute two hundred people were standing in the same queue. If we had joined that queue, we would still be waiting when the last hotel room in the area was taken.",
     cn:"我們飛河內的班機在登機前四十分鐘被取消。廣播沒有說原因，一分鐘內就有兩百人排在同一條隊伍裡。如果我們也去排那條隊，等到附近最後一間飯店房間被訂走時，我們還會站在那裡。"},
    {en:"My colleague did something I would not have thought of. Instead of queuing, she phoned the airline's overseas number and was rebooked in four minutes while the desk was still processing the first family. Staff at a counter can only help one passenger at a time; a phone line, by contrast, is answered somewhere else entirely.",
     cn:"我同事做了一件我沒想到的事。她沒有排隊，而是打了航空公司的海外客服電話，在櫃檯還在處理第一組家庭時，她四分鐘內就改好了機位。櫃檯人員一次只能服務一位旅客；相對地，電話線是由完全不同的地方接起來的。"},
    {en:"We should have kept digital copies of the booking references, and we should have known that the airline was obliged to provide a meal voucher after a three-hour delay. Because we did not ask, we paid for dinner ourselves — a small loss, but an avoidable one.",
     cn:"我們早該保存訂位代號的電子檔，也早該知道航班延誤三小時後航空公司有義務提供餐券。因為我們沒問，晚餐是自己付的——損失不大，但本來可以避免。"},
    {en:"The trip itself was excellent. What stayed with me, though, was a habit rather than a memory: before every flight I now save the booking reference, the airline's local and overseas numbers, and one alternative route offline. Had I done that a year earlier, that evening would have cost me nothing at all.",
     cn:"那趟旅行本身很棒。但真正留在我身上的不是回憶，而是一個習慣：現在每趟飛行前，我都會離線存好訂位代號、航空公司的當地與海外電話，以及一條備用路線。要是我早一年就這麼做，那個晚上完全不會讓我損失任何東西。"}
  ],
  target:[
    {w:"boarding",ipa:"/ˈbɔːrdɪŋ/",pos:"n.",cn:"登機",def:"Getting onto a plane, ship, or train.",ex:"Passengers with small children may begin boarding first.",exCn:"帶小孩的旅客可以優先登機。"},
    {w:"announcement",ipa:"/əˈnaʊnsmənt/",pos:"n.",cn:"廣播、公告",def:"A public statement giving information.",ex:"Please listen for the announcement about platform changes.",exCn:"請留意有關月台變更的廣播。"},
    {w:"queue",ipa:"/kjuː/",pos:"n./v.",cn:"排隊（的隊伍）",def:"A line of people waiting.",ex:"There was a long queue outside the bakery before it even opened.",exCn:"麵包店還沒開門，外面就已經排了長長的隊伍。"},
    {w:"rebook",ipa:"/ˌriːˈbʊk/",pos:"v.",cn:"改訂、重新訂位",def:"To arrange a new ticket after a change.",ex:"The hotel let us rebook our stay for the following weekend at no extra charge.",exCn:"飯店讓我們免費改訂到下個週末入住。"},
    {w:"booking reference",ipa:"/ˈbʊkɪŋ ˈrefrəns/",pos:"n.",cn:"訂位代號",def:"The code that identifies your reservation.",ex:"You will need your booking reference to check in at the counter.",exCn:"你需要訂位編號才能在櫃台辦理報到。"},
    {w:"be obliged to",ipa:"/bi əˈblaɪdʒd tuː/",pos:"phr.",cn:"有義務、被規定要",def:"To be required by rule or law to do something.",ex:"Visitors are obliged to sign in at the front desk.",exCn:"訪客必須在櫃檯登記。"},
    {w:"voucher",ipa:"/ˈvaʊtʃɚ/",pos:"n.",cn:"兌換券",def:"A paper you exchange for goods or services.",ex:"The department store gave me a voucher for a free coffee after I spent over two thousand dollars.",exCn:"我在百貨公司消費超過兩千元後，拿到一張免費咖啡兌換券。"},
    {w:"avoidable",ipa:"/əˈvɔɪdəbl/",pos:"adj.",cn:"可避免的",def:"Able to be prevented.",ex:"Most kitchen accidents are completely avoidable with a little care.",exCn:"大部分的廚房意外只要稍微注意就完全可以避免。"},
    {w:"alternative route",ipa:"/ɔːlˈtɝːnətɪv ruːt/",pos:"n.",cn:"替代路線",def:"A different way of reaching the same place.",ex:"The GPS suggested an alternative route to avoid the traffic jam.",exCn:"導航建議走另一條替代路線來避開塞車。"}
  ],
  questions:[
    {q:"What did the colleague do instead of queuing?",
     opts:["A. She booked a hotel","B. She phoned the airline's overseas number","C. She complained to security","D. She bought a new ticket at full price"],
     ans:1, expl:"she phoned the airline's overseas number and was rebooked in four minutes。"},
    {q:"Why was the phone line faster than the counter?",
     opts:["A. It was free of charge","B. It was answered by staff somewhere else","C. Only VIP members could call","D. The counter was closed"],
     ans:1, expl:"a phone line, by contrast, is answered somewhere else entirely。"},
    {q:"Why did they pay for their own dinner?",
     opts:["A. The airline had no food","B. They did not know they could ask for a voucher","C. The delay was under one hour","D. They preferred a restaurant"],
     ans:1, expl:"we should have known that the airline was obliged to provide a meal voucher... Because we did not ask。"},
    {q:"Which sentence expresses regret about the past correctly?",
     opts:["A. We should keep copies of the booking reference","B. We should have kept copies of the booking reference","C. We should having kept copies","D. We must keep copies yesterday"],
     ans:1, expl:"should have + p.p. 表示「早該做卻沒做」。"}
  ],
  upgrade:[
    {b1:"We did not save the booking number. That was a mistake.",
     b2:"We should have kept digital copies of the booking references.",
     note:"should have + p.p. 一句就同時表達「沒做」和「後悔」。", "sp": "We really should've saved digital copies of the booking numbers. Lesson learned.", "spNote": "should've 縮寫加 Lesson learned.（學到了）是口語自嘲收尾。", "b1Cn": "我們沒有存訂位編號。那是個錯誤。", "b2Cn": "我們當時應該保存訂位編號的數位副本。", "spCn": "我們真該把訂位編號存成數位檔的。學到了。"},
    {b1:"If I had this habit before, that night would be cheaper.",
     b2:"Had I done that a year earlier, that evening would have cost me nothing.",
     note:"Had I done... 是省略 if 的倒裝條件句，語氣正式且精煉。", "sp": "If I'd started that habit a year earlier, that night wouldn't have cost me a dime.", "spNote": "not cost a dime（一毛都不用花）是美式金錢口語。", "b1Cn": "如果我以前有這個習慣，那晚會便宜一點。", "b2Cn": "要是我早一年那麼做，那晚就不用花錢了。", "spCn": "我要是早一年養成那習慣，那晚一毛錢都不用花。"}
  ]
},

/* ---------------------------------------------------------- 15 */
{
  id:"r15", level:"B2", topic:"旅遊跨文化", words:285,
  title:"The Guest Who Never Asked",
  titleCn:"從不開口問的客人",
  focus:"分詞構句；關係子句壓縮資訊",
  intro:"跨文化溝通。注意 Not wanting to..., Having lived... 這類分詞開頭的句子，以及用關係子句把兩三個訊息塞進一句話。",
  "spoken": [{"en":"This Japanese engineer at our Vietnam factory barely ate lunch for two weeks — turned out he couldn't eat chilli and never said a word.","cn":"我們越南廠的日本工程師兩週午餐幾乎沒吃——後來才知道他不能吃辣，卻一個字都沒提。"},{"en":"It wasn't shyness. Where he's from, a guest who states a preference makes work for the host — and that's worse than going hungry.","cn":"那不是害羞。在他的文化裡，客人提出偏好會給主人添麻煩——那比餓肚子還糟。"},{"en":"The fix cost nothing: we stopped asking 'Is everything OK?' and started asking 'Which of these three would you like?'","cn":"解法零成本：我們不再問「還好嗎？」，改問「這三個你想要哪個？」"},{"en":"Cross-cultural work isn't about memorizing customs — it's noticing which questions your habits make impossible to answer honestly.","cn":"跨文化工作不是背習俗清單——而是察覺你的習慣讓哪些問題根本無法誠實回答。"}],
  paras:[
    {en:"A Japanese engineer who had been sent to our Vietnam factory for three months spent his first two weeks eating almost nothing at lunch. Not wanting to seem difficult, he never mentioned that he could not eat chilli. We only discovered the problem when a colleague noticed how much food was left on his plate.",
     cn:"一位被派到我們越南廠三個月的日本工程師，前兩週午餐幾乎什麼都沒吃。因為不想顯得難相處，他從沒提過自己不能吃辣。我們是在一位同事注意到他盤子裡剩下多少食物後才發現問題。"},
    {en:"His silence was not shyness. In the culture he had grown up in, a guest who states a preference risks creating work for the host, and creating work is worse than going hungry. Our team, having assumed that anyone with a problem would simply say so, had read his politeness as satisfaction.",
     cn:"他的沉默不是害羞。在他成長的文化裡，表達偏好的客人有可能給主人添麻煩，而添麻煩比餓肚子更糟。我們團隊則假設有問題的人自然會直說，於是把他的客氣讀成了滿意。"},
    {en:"The fix cost nothing. We stopped asking \"Is everything OK?\" — a question that almost forces a yes — and started asking \"Which of these three would you prefer?\" Given a choice rather than a verdict, he answered immediately, and he ate normally for the rest of the assignment.",
     cn:"解決方法不花一毛錢。我們不再問「一切都好嗎？」——這種問題幾乎是逼人回答「好」——而改成問「這三個你比較想要哪一個？」當他得到的是選項而不是判斷題時，他立刻就回答了，而且接下來的派駐期間都吃得很正常。"},
    {en:"Working across cultures is rarely about learning a list of customs. It is about noticing which questions your own habits make impossible to answer honestly — and then asking a different one.",
     cn:"跨文化工作很少是靠背一張習俗清單。它靠的是察覺自己的習慣讓哪些問題無法被誠實回答——然後換一個問法。"}
  ],
  target:[
    {w:"assume",ipa:"/əˈsuːm/",pos:"v.",cn:"假設、以為",def:"To believe something is true without proof.",ex:"Don't assume everyone speaks English when you travel abroad.",exCn:"出國旅行時，不要假設每個人都會說英文。"},
    {w:"preference",ipa:"/ˈprefrəns/",pos:"n.",cn:"偏好",def:"The thing you like better than another.",ex:"I have no strong preference; either restaurant is fine with me.",exCn:"我沒有特別偏好，哪家餐廳都可以。"},
    {w:"host",ipa:"/hoʊst/",pos:"n.",cn:"主人、招待方",def:"A person who receives and looks after guests.",ex:"As the host of the dinner party, Mark made sure every guest had something to drink.",exCn:"身為晚宴的主人，馬克確保每位客人都有飲料可喝。"},
    {w:"politeness",ipa:"/pəˈlaɪtnəs/",pos:"n.",cn:"客氣、禮貌",def:"Behaviour that shows respect for others.",ex:"In Taiwan, offering your seat to an elderly person is basic politeness.",exCn:"在台灣，讓座給長輩是基本的禮貌。"},
    {w:"satisfaction",ipa:"/ˌsætɪsˈfækʃn/",pos:"n.",cn:"滿意",def:"The feeling of being pleased with something.",ex:"Finishing a difficult jigsaw puzzle always gives my father a deep sense of satisfaction.",exCn:"完成一幅困難的拼圖，總是讓我爸爸感到非常滿足。"},
    {w:"verdict",ipa:"/ˈvɝːdɪkt/",pos:"n.",cn:"判定、結論",def:"A decision or judgement about something.",ex:"The jury reached a verdict after three days of deliberation.",exCn:"陪審團經過三天的審議後做出了裁決。"},
    {w:"assignment",ipa:"/əˈsaɪnmənt/",pos:"n.",cn:"派任、任務",def:"A job or task given to someone.",ex:"Her first overseas assignment was a six-month post in Singapore.",exCn:"她的第一個海外派任是到新加坡工作六個月。"},
    {w:"custom",ipa:"/ˈkʌstəm/",pos:"n.",cn:"習俗",def:"A traditional way of behaving in a society.",ex:"In Japanese custom, you take off your shoes before entering a home.",exCn:"按照日本的習俗，進門前要先脫鞋。"}
  ],
  questions:[
    {q:"Why did the engineer say nothing about the food?",
     opts:["A. He did not speak English","B. He did not want to create work for his hosts","C. He disliked his colleagues","D. He was on a diet"],
     ans:1, expl:"a guest who states a preference risks creating work for the host。"},
    {q:"How did the team originally interpret his behaviour?",
     opts:["A. As rudeness","B. As illness","C. As satisfaction","D. As a language problem"],
     ans:2, expl:"had read his politeness as satisfaction。"},
    {q:"What change actually solved the problem?",
     opts:["A. Hiring a translator","B. Cooking Japanese food every day","C. Offering a choice instead of asking a yes/no question","D. Sending him home early"],
     ans:2, expl:"started asking \"Which of these three would you prefer?\"。"},
    {q:"Which sentence uses a participle clause correctly?",
     opts:["A. Not wanting to seem difficult, he said nothing","B. Not wanting to seem difficult, the food was left","C. Not want to seem difficult, he said nothing","D. Not wanting seem difficult, he said nothing"],
     ans:0, expl:"分詞的主詞必須與主句主詞一致（he），且 want 要用 V-ing。"}
  ],
  upgrade:[
    {b1:"He did not want to seem difficult. So he said nothing.",
     b2:"Not wanting to seem difficult, he never mentioned that he could not eat chilli.",
     note:"否定分詞構句 Not wanting to...，取代 Because he did not want to...。", "sp": "He didn't want to come across as picky, so he never brought up the chilli thing.", "spNote": "come across as（給人…的感覺）、bring up（提起）、the ... thing（那件事）都是口語。", "b1Cn": "他不想顯得難搞。所以他什麼都沒說。", "b2Cn": "因為不想顯得難搞，他始終沒提自己不能吃辣。", "spCn": "他不想給人難搞的感覺，所以從沒提過吃辣那件事。"},
    {b1:"Our team thought people would say if there was a problem. So we misunderstood him.",
     b2:"Our team, having assumed that anyone with a problem would say so, had read his politeness as satisfaction.",
     note:"Having assumed... 插在主詞後面補充背景，read A as B 是道地的搭配。", "sp": "We just figured anyone with an issue would speak up — so we read his politeness as him being happy.", "spNote": "figure（以為）、speak up（有話直說）是口語溝通用語。", "b1Cn": "我們團隊以為有問題的人會說。所以我們誤會了他。", "b2Cn": "我們團隊假設有問題的人自然會說，因而把他的客氣讀成了滿意。", "spCn": "我們以為有問題的人自然會開口——結果把他的客氣當成了滿意。"}
  ]
},

/* ---------------------------------------------------------- 16 */
{
  id:"r16", level:"B2", topic:"旅遊跨文化", words:295,
  title:"Who Pays for the View?",
  titleCn:"風景的帳單誰來付？",
  focus:"被動語態的正式用法；讓步論述",
  intro:"議題型文章：過度旅遊。留意被動語態如何讓論述客觀（is blamed / has been priced out），以及 while / granted / that said 的讓步功能。",
  "spoken": [{"en":"A village with four hundred visitors a day is a success story. The same village with four thousand? Whole different thing.","cn":"一天四百個遊客的村子是成功故事。同一個村子來四千個？完全是另一回事。"},{"en":"It's not really the tourists' fault — when a flat rents to visitors for triple what locals can pay, it stops being housing.","cn":"這其實不能怪遊客——當房子租給觀光客的價錢是在地人的三倍，它就不再是住房了。"},{"en":"Yeah, tourism pays for the ferries and festivals. The real question is who gets to decide how much a place can take.","cn":"對，觀光養活了渡輪和節慶。真正的問題是：誰有權決定一個地方能承載多少。"},{"en":"The places that got it right all did the same things: cap the short-term rentals, keep the visitor fees local, and ask the residents first.","cn":"處理得好的地方都做了同樣的事：限制短租、觀光費留在地方、先問過居民。"}],
  paras:[
    {en:"A fishing village that receives four hundred visitors a day is a success story. The same village receiving four thousand is something else. Across Asia and Europe, towns that were once promoted as hidden gems are now discussed in a different vocabulary: crowds, pressure, and residents who have been priced out of the streets they grew up on.",
     cn:"一個每天接待四百名遊客的漁村是成功故事。同一個漁村每天接待四千人，就是另一回事了。在亞洲與歐洲各地，曾被宣傳為「秘境」的小鎮，如今是用另一套詞彙被討論的：人潮、壓力，以及那些被高房價擠出自己成長街區的居民。"},
    {en:"Tourists are often blamed, but the mechanism is not really their fault. When a flat can be rented to visitors for three times what a local family can pay, it stops being housing. When every second shop sells the same souvenirs, the bakery that served the neighbourhood for forty years closes — not because it was bad, but because the rent was raised.",
     cn:"遊客常被責怪，但這個機制其實不是他們的錯。當一間公寓出租給旅客可以拿到本地家庭所能負擔的三倍租金時，它就不再是「住宅」了。當每隔一間店都在賣一樣的紀念品時，那間服務了社區四十年的麵包店就會關門——不是因為它不好，而是因為房租被調漲了。"},
    {en:"Granted, tourism pays for a great deal. Ferries, festivals and small museums in remote places survive on visitor money, and jobs that would otherwise not exist are created every season. The question is not whether tourism should happen but who decides how much of it a place can hold.",
     cn:"誠然，觀光支撐了很多事。偏遠地區的渡輪、節慶與小型博物館靠遊客的錢維生，每一季都創造了原本不會存在的工作。問題不在於「該不該有觀光」，而在於「一個地方能承載多少，由誰來決定」。"},
    {en:"Places that have handled this well tend to share three features: limits on short-term rentals, a visitor fee that is spent locally rather than nationally, and — most importantly — residents who are consulted before the numbers are set, not after the complaints begin. Tourism is not the problem. Tourism that nobody was asked about is.",
     cn:"處理得好的地方往往有三個共同點：對短租的限制、一筆用在當地而非上繳中央的觀光費，以及——最重要的——在人數上限被訂出來之前就被徵詢意見的居民，而不是等抱怨開始才問。觀光本身不是問題，沒人被問過的觀光才是。"}
  ],
  target:[
    {w:"hidden gem",ipa:"/ˈhɪdn dʒem/",pos:"n.",cn:"秘境、未被發現的好地方",def:"A good place that few people know about.",ex:"This small coffee shop on the side street is a real hidden gem.",exCn:"巷子裡這家小咖啡店真的是個隱藏版寶藏。"},
    {w:"resident",ipa:"/ˈrezɪdənt/",pos:"n.",cn:"居民",def:"A person who lives in a place.",ex:"Only residents of this building are allowed to use the parking garage.",exCn:"只有這棟大樓的住戶才能使用停車場。"},
    {w:"be priced out",ipa:"/bi praɪst aʊt/",pos:"phr.",cn:"因價格上漲而被迫離開",def:"To be unable to afford to stay somewhere.",ex:"Young people are being priced out of the housing market in many big cities.",exCn:"在很多大城市，年輕人因為高房價而買不起房子。"},
    {w:"be blamed",ipa:"/bi bleɪmd/",pos:"phr.",cn:"被責怪",def:"To be said to be responsible for something bad.",ex:"The driver was blamed for the accident, but the road was icy.",exCn:"司機被責怪造成事故，但路面其實結冰了。"},
    {w:"mechanism",ipa:"/ˈmekənɪzəm/",pos:"n.",cn:"機制",def:"The way a process works.",ex:"The company set up a feedback mechanism so customers can report problems.",exCn:"公司建立了一套回饋機制，讓顧客可以回報問題。"},
    {w:"souvenir",ipa:"/ˌsuːvəˈnɪr/",pos:"n.",cn:"紀念品",def:"An object you keep to remember a place.",ex:"I bought a small wooden boat as a souvenir of the trip.",exCn:"我買了一艘小木船作為這趟旅行的紀念品。"},
    {w:"granted",ipa:"/ˈɡræntɪd/",pos:"adv.",cn:"誠然、的確",def:"Used to admit that something is true.",ex:"Granted, the plan is not perfect, but it is the best we have.",exCn:"誠然，這個計畫不完美，但這是我們最好的方案了。"},
    {w:"short-term rental",ipa:"/ʃɔːrt tɝːm ˈrentl/",pos:"n.",cn:"短期出租",def:"A flat rented to visitors for a few nights.",ex:"The government is considering new rules for short-term rental properties.",exCn:"政府正在考慮針對短期租賃物件制定新規定。"},
    {w:"consult",ipa:"/kənˈsʌlt/",pos:"v.",cn:"徵詢意見",def:"To ask someone for their opinion before deciding.",ex:"You should consult a doctor before taking any new supplements.",exCn:"服用任何新的保健食品之前，你應該先諮詢醫生。"}
  ],
  questions:[
    {q:"Why did the neighbourhood bakery close?",
     opts:["A. The bread was poor","B. The owner retired","C. The rent was raised","D. Tourists disliked it"],
     ans:2, expl:"not because it was bad, but because the rent was raised。"},
    {q:"What does \"priced out\" mean here?",
     opts:["A. Given a discount","B. Unable to afford to stay","C. Charged the wrong price","D. Sold at auction"],
     ans:1, expl:"居民因為房價房租上漲而無法繼續住下去。"},
    {q:"What does the word \"Granted\" signal at the start of paragraph 3?",
     opts:["A. A conclusion","B. A concession to the other side","C. A contradiction of paragraph 2","D. A statistic"],
     ans:1, expl:"Granted = 誠然，先承認觀光確實有好處，是讓步標記。"},
    {q:"According to the last paragraph, what matters most?",
     opts:["A. Banning tourism completely","B. Charging the highest possible fee","C. Consulting residents before limits are set","D. Building more hotels"],
     ans:2, expl:"most importantly — residents who are consulted before the numbers are set。"}
  ],
  upgrade:[
    {b1:"Local people cannot afford the rent now, so they moved away.",
     b2:"Residents have been priced out of the streets they grew up on.",
     note:"被動 have been priced out 讓「誰造成的」留白，焦點放在受影響的居民；後面接省略關係詞的子句。", "sp": "Locals can't afford their own neighborhoods anymore — they've been priced out.", "spNote": "priced out（被房價擠走）是口語新聞常用詞；their own neighborhoods 帶情感。", "b1Cn": "當地人現在付不起房租，所以搬走了。", "b2Cn": "居民被房價擠出了自己從小長大的街區。", "spCn": "在地人再也住不起自己的社區——他們被房價擠走了。"},
    {b1:"Tourism is good in some ways. But there are problems too.",
     b2:"Granted, tourism pays for a great deal; the question is who decides how much a place can hold.",
     note:"Granted, ... ; the question is ... 是 B2 議論文很乾淨的讓步＋聚焦結構。", "sp": "Yeah, tourism brings in a lot of money — but who gets to decide how much a place can take?", "spNote": "Yeah,...but 讓步反問、bring in（帶來收入）、get to decide（有權決定）是口語。", "b1Cn": "觀光在某些方面很好。但也有問題。", "b2Cn": "誠然，觀光帶來大量收入；問題在於由誰決定一個地方能承載多少。", "spCn": "對啦，觀光確實帶進很多錢——但誰有權決定一個地方能塞多少人？"}
  ]
},

/* ============================================================
   主題延伸 B2 系列 ③　金錢、居住與社會議題
   ============================================================ */

/* ---------------------------------------------------------- 17 */
{
  id:"r17", level:"B2", topic:"金錢與居住", words:295,
  title:"The Deposit That Never Came Back",
  titleCn:"再也沒回來的押金",
  focus:"被動語態＋條件句；正式書面語氣",
  intro:"實用主題：租屋押金爭議。注意正式書信裡大量使用被動（was informed / has been deducted）與條件句（If the deposit is not returned...），語氣要堅定但不情緒化。",
  "spoken": [{"en":"Yiting moved out, left the place spotless, photographed every room — and still got told they were keeping half her deposit for 'cleaning and wear.'","cn":"Yiting 搬走時房子乾乾淨淨，每個房間都拍了照——結果還是被告知要扣一半押金當「清潔與耗損」費。"},{"en":"But she had receipts: dated photos and the signed move-in inventory. Normal wear isn't damage — landlords just bet on you not knowing that.","cn":"但她有證據：有日期的照片和簽過的點交清單。正常耗損不是損壞——房東只是賭你不懂。"},{"en":"Her email was three calm sentences: here's the deduction, here's my evidence, send an itemized receipt or the money in fourteen days — or we go to mediation.","cn":"她的信就三句冷靜的話：扣了多少、我的證據在此、十四天內給明細或還錢——不然就調解見。"},{"en":"Full refund, nine days, no apology. Moral of the story: a deposit is protected by evidence, not fairness.","cn":"九天後全額退回，連個道歉都沒有。教訓是：押金靠的是證據，不是公道。"}],
  paras:[
    {en:"When Yiting moved out of her flat, the walls were clean, the floor was undamaged, and she had photographed every room. Six weeks later she was informed that half of her two-month deposit had been kept for \"general cleaning and wear\".",
     cn:"怡庭搬出公寓時，牆壁乾淨、地板沒有損壞，而且她把每個房間都拍了照。六週後她被告知，兩個月押金的一半已被扣下，理由是「一般清潔與損耗」。"},
    {en:"Two things made her case strong. First, the photographs were dated, which meant the condition of the flat at handover could not reasonably be disputed. Second, she had kept the inventory signed at move-in — a document most tenants never look at again. Normal wear from ordinary living is not damage, and a landlord who deducts for it is usually relying on the tenant not knowing the difference.",
     cn:"有兩件事讓她站得住腳。第一，照片有日期，意味著交屋時房屋的狀況難以被合理質疑。第二，她保留了入住時簽署的財物清單——那是大多數房客再也不會看第二眼的文件。日常居住造成的正常損耗不算損壞，而會為此扣款的房東，通常是在指望房客分不出兩者的差別。"},
    {en:"Her email was three sentences long and contained no anger. It stated the amount deducted, referred to the dated photographs and the signed inventory, and asked for either an itemised receipt for the cleaning or the return of the money within fourteen days. If the deposit is not returned, she added, the matter will be taken to the local mediation committee.",
     cn:"她的信只有三句話，沒有任何怒氣。信中說明被扣的金額，引用了有日期的照片與簽署的清單，並要求對方在十四天內提供清潔費用的逐項收據，或退還款項。她補充：若押金未退還，此事將提交當地調解委員會。"},
    {en:"The full amount arrived nine days later, with no explanation and no apology. The lesson is not that landlords are dishonest — most are not — but that a deposit is protected by evidence rather than by fairness. Photograph the flat on the day you arrive, keep the inventory, and put every request in writing.",
     cn:"全額在九天後入帳，沒有解釋也沒有道歉。這件事的教訓不是房東不誠實——多數並非如此——而是押金靠的是證據，而不是靠公道。到租屋的第一天就把房子拍下來，留好財物清單，並且每一次要求都用書面提出。"}
  ],
  target:[
    {w:"deposit",ipa:"/dɪˈpɑːzɪt/",pos:"n.",cn:"押金",def:"Money paid in advance and returned if nothing is damaged.",ex:"We paid a two-month deposit when we signed the rental agreement.",exCn:"我們簽租約時付了兩個月的押金。"},
    {w:"deduct",ipa:"/dɪˈdʌkt/",pos:"v.",cn:"扣除",def:"To take an amount away from a total.",ex:"The company will deduct income tax directly from your salary.",exCn:"公司會直接從你的薪水裡扣除所得稅。"},
    {w:"wear",ipa:"/wer/",pos:"n.",cn:"損耗",def:"Damage caused by normal use over time.",ex:"The carpet shows signs of wear after ten years of daily use.",exCn:"那塊地毯用了十年，已經有磨損的痕跡了。"},
    {w:"handover",ipa:"/ˈhændoʊvɚ/",pos:"n.",cn:"交屋、移交",def:"The act of giving something to another person officially.",ex:"The handover of the new office took place on Monday morning.",exCn:"新辦公室的交屋在週一早上完成。"},
    {w:"dispute",ipa:"/dɪˈspjuːt/",pos:"v.",cn:"爭執、質疑",def:"To say that something is not true or fair.",ex:"The two neighbours have been disputing over the boundary line for years.",exCn:"那兩個鄰居為了地界線爭了好幾年。"},
    {w:"inventory",ipa:"/ˈɪnvəntɔːri/",pos:"n.",cn:"財物清單",def:"A written list of the items in a property.",ex:"The shop manager does a full inventory check at the end of every month.",exCn:"店長每個月底都會做一次完整的盤點。"},
    {w:"tenant",ipa:"/ˈtenənt/",pos:"n.",cn:"房客",def:"A person who pays rent to live somewhere.",ex:"The tenant on the third floor always pays rent on time.",exCn:"三樓的房客每次都準時繳房租。"},
    {w:"itemised receipt",ipa:"/ˈaɪtəmaɪzd rɪˈsiːt/",pos:"n.",cn:"逐項收據",def:"A receipt showing the cost of each separate item.",ex:"Can I have an itemised receipt so I can claim the expense from my company?",exCn:"可以給我一張逐項列明的收據嗎？我要跟公司報帳。"},
    {w:"mediation",ipa:"/ˌmiːdiˈeɪʃn/",pos:"n.",cn:"調解",def:"A process in which a third person helps solve a dispute.",ex:"Both sides agreed to try mediation before going to court.",exCn:"雙方同意在上法院之前先嘗試調解。"}
  ],
  questions:[
    {q:"What reason was given for keeping half the deposit?",
     opts:["A. Unpaid rent","B. General cleaning and wear","C. A broken window","D. Late notice of moving out"],
     ans:1, expl:"kept for \"general cleaning and wear\"。"},
    {q:"Why were the photographs so useful?",
     opts:["A. They were taken by a professional","B. They were dated, so the condition could not be disputed","C. They showed the neighbours","D. They were printed and framed"],
     ans:1, expl:"the photographs were dated, which meant the condition... could not reasonably be disputed。"},
    {q:"What tone did her email have?",
     opts:["A. Angry and threatening","B. Apologetic","C. Short, factual and firm","D. Long and emotional"],
     ans:2, expl:"three sentences long and contained no anger，只陳述事實與要求。"},
    {q:"What is the writer's main conclusion?",
     opts:["A. All landlords are dishonest","B. Deposits are protected by evidence, not fairness","C. Tenants should never pay a deposit","D. Photographs are useless in disputes"],
     ans:1, expl:"a deposit is protected by evidence rather than by fairness。"}
  ],
  upgrade:[
    {b1:"The landlord told her he kept half of the deposit.",
     b2:"She was informed that half of her deposit had been kept for \"general cleaning and wear\".",
     note:"正式書面常用被動 was informed + 轉述子句（時態退一格 → had been kept）。", "sp": "The landlord told her he was keeping half her deposit for 'cleaning and wear and tear.'", "spNote": "wear and tear（正常耗損）是租屋口語必備詞。", "b1Cn": "房東告訴她，他扣了一半押金。", "b2Cn": "她被告知一半押金因「一般清潔與耗損」被扣留。", "spCn": "房東跟她說要扣一半押金，理由是「清潔跟正常耗損」。"},
    {b1:"If they do not give the money back, she will go to mediation.",
     b2:"If the deposit is not returned within fourteen days, the matter will be taken to mediation.",
     note:"第一條件句 ＋ 兩個被動，語氣正式、不針對個人，正是爭議信件該有的分寸。", "sp": "If they don't give the deposit back in two weeks, she's taking it to mediation.", "spNote": "口語用現在進行式 she's taking 表達已決定的下一步。", "b1Cn": "如果他們不還錢，她會去調解。", "b2Cn": "若押金十四天內未歸還，此事將提交調解。", "spCn": "要是兩週內不把押金還來，她就要申請調解了。"}
  ]
},

/* ---------------------------------------------------------- 18 */
{
  id:"r18", level:"B2", topic:"金錢與居住", words:290,
  title:"Why Saving Feels Impossible",
  titleCn:"為什麼存錢感覺不可能",
  focus:"數據描述與比較；名詞化",
  intro:"財經說明文。注意描述數字的語言（rise by / rise to、a fifth of、outpace）以及把動作變成名詞的寫法，這是讀懂財經文章的關鍵。",
  "spoken": [{"en":"Ask anyone under forty why they can't save — it's not discipline. Rents shot up way faster than paychecks.","cn":"問任何四十歲以下的人為什麼存不了錢——不是不自律，是房租漲得遠比薪水快。"},{"en":"And inflation quietly makes it worse: money sitting in your account loses about a quarter of its value in ten years.","cn":"通膨還在偷偷加碼：錢放在帳戶裡不動，十年會蒸發大概四分之一的價值。"},{"en":"Skipping your daily coffee saves like two percent. Renegotiating rent or switching one insurance policy? Ten or fifteen.","cn":"戒掉每天那杯咖啡大概省 2%。重談房租或換一張保單？10% 到 15%。"},{"en":"The trick that actually works is boring: move a fixed amount out on payday, before you spend anything. Save first, spend what's left.","cn":"真正有效的方法很無聊：發薪日當天先轉走固定金額，再花剩下的。先存再花。"}],
  paras:[
    {en:"Ask anyone under forty why they cannot save, and the answer is rarely a lack of discipline. Between 2015 and 2025, average rents in most Asian cities rose considerably faster than average wages. When housing takes a third of your income instead of a fifth, the money that used to become savings simply disappears into somebody else's mortgage.",
     cn:"問任何四十歲以下的人為什麼存不了錢，答案很少是缺乏自制力。2015 到 2025 年間，多數亞洲城市的平均房租上漲速度遠快於平均薪資。當住房佔掉你收入的三分之一而不是五分之一時，原本會變成儲蓄的錢，就這樣消失進了別人的房貸裡。"},
    {en:"Inflation makes the problem harder to see. A price rise of three per cent a year sounds trivial, yet it means that money left in a current account loses roughly a quarter of its value over ten years. Doing nothing is therefore not a neutral choice; it is a slow decision to become poorer.",
     cn:"通膨讓這個問題更難被看見。一年三個百分點的漲幅聽起來微不足道，但它意味著放在活存帳戶裡的錢，十年會失去大約四分之一的價值。因此「什麼都不做」並不是中立的選擇，而是一個緩慢地讓自己變窮的決定。"},
    {en:"That said, the advice usually offered — cut small luxuries — targets the wrong number. Cancelling a daily coffee saves perhaps two per cent of a monthly budget, whereas renegotiating rent, changing a commute, or moving one insurance policy can save ten or fifteen. Big fixed costs, reviewed once a year, matter more than small variable ones watched every day.",
     cn:"話說回來，常見的建議——省掉小奢侈——瞄準的是錯的數字。取消每天一杯咖啡大約省下月預算的百分之二，而重新談房租、改變通勤方式，或換一份保單，可以省下百分之十到十五。每年檢視一次的大筆固定支出，比每天盯著的小額變動支出重要得多。"},
    {en:"The most reliable method is also the least exciting: move a fixed amount out of the account on the day you are paid, before any spending decision is made. People who save what is left at the end of the month almost never save. People who spend what is left after saving almost always do.",
     cn:"最可靠的方法也是最不刺激的：在領薪水的當天，就把一筆固定金額移出帳戶，早於任何消費決定。月底才存剩下的錢的人幾乎存不到錢；先存錢再花剩下的錢的人，幾乎都存得到。"}
  ],
  target:[
    {w:"discipline",ipa:"/ˈdɪsəplɪn/",pos:"n.",cn:"自制力、紀律",def:"The ability to control your own behaviour.",ex:"Learning a new language requires a lot of patience and discipline.",exCn:"學一門新語言需要很多耐心和自律。"},
    {w:"wage",ipa:"/weɪdʒ/",pos:"n.",cn:"薪資",def:"Money paid regularly for work.",ex:"The minimum wage in Taiwan was raised again at the start of this year.",exCn:"台灣的基本工資今年初又調漲了。"},
    {w:"mortgage",ipa:"/ˈmɔːrɡɪdʒ/",pos:"n.",cn:"房貸",def:"A loan used to buy a house.",ex:"They applied for a thirty-year mortgage to buy their first apartment.",exCn:"他們申請了三十年的房貸來買第一間公寓。"},
    {w:"inflation",ipa:"/ɪnˈfleɪʃn/",pos:"n.",cn:"通膨",def:"A general rise in prices over time.",ex:"Because of inflation, the same lunch now costs twenty dollars more.",exCn:"因為通膨，同樣一份午餐現在貴了二十元。"},
    {w:"trivial",ipa:"/ˈtrɪviəl/",pos:"adj.",cn:"微不足道的",def:"Not important or serious.",ex:"It may seem like a trivial mistake, but it cost the company a big client.",exCn:"這看起來像是個小錯誤，但它讓公司失去了一個大客戶。"},
    {w:"current account",ipa:"/ˈkɝːənt əˈkaʊnt/",pos:"n.",cn:"活期存款帳戶",def:"A bank account for everyday money.",ex:"I keep my savings separate and only use the current account for daily expenses.",exCn:"我把存款分開放，活期帳戶只用來支付日常開銷。"},
    {w:"that said",ipa:"/ðæt sed/",pos:"phr.",cn:"話說回來",def:"Used before saying something that partly contradicts what you just said.",ex:"The restaurant is expensive; that said, the food is outstanding.",exCn:"那家餐廳很貴；話雖如此，菜色非常出色。"},
    {w:"renegotiate",ipa:"/ˌriːnɪˈɡoʊʃieɪt/",pos:"v.",cn:"重新談（條件）",def:"To discuss an agreement again in order to change it.",ex:"After five years with the same provider, we decided to renegotiate the contract.",exCn:"跟同一家廠商合作五年後，我們決定重新談合約。"},
    {w:"fixed cost",ipa:"/fɪkst kɔːst/",pos:"n.",cn:"固定支出",def:"A cost that stays the same each month.",ex:"Rent and insurance are fixed costs that stay the same every month.",exCn:"房租和保險是固定支出，每個月都一樣。"}
  ],
  questions:[
    {q:"What does the writer say is usually NOT the reason people cannot save?",
     opts:["A. High rent","B. Inflation","C. Lack of discipline","D. Low wages"],
     ans:2, expl:"the answer is rarely a lack of discipline。"},
    {q:"According to paragraph 2, what happens to money left in a current account?",
     opts:["A. It doubles in ten years","B. It loses about a quarter of its value in ten years","C. It stays exactly the same","D. It is taxed twice"],
     ans:1, expl:"loses roughly a quarter of its value over ten years。"},
    {q:"Why does the writer criticise the advice to cut small luxuries?",
     opts:["A. Coffee is necessary","B. It saves far less than reviewing big fixed costs","C. It is impossible to do","D. It increases inflation"],
     ans:1, expl:"約 2% vs. 10–15%，大筆固定支出影響大得多。"},
    {q:"What is the method the writer recommends?",
     opts:["A. Save whatever is left at month end","B. Move a fixed amount out on payday","C. Invest everything immediately","D. Keep cash at home"],
     ans:1, expl:"move a fixed amount out of the account on the day you are paid。"}
  ],
  upgrade:[
    {b1:"Rents went up a lot. Wages did not go up so much.",
     b2:"Average rents rose considerably faster than average wages.",
     note:"rise + 程度副詞 + faster than 是描述趨勢的標準句型，比 went up a lot 精準。", "sp": "Rents shot up way faster than paychecks did.", "spNote": "shoot up（飆漲）對比 paychecks（薪水）是口語經濟話題標配。", "b1Cn": "房租漲很多。薪水沒漲那麼多。", "b2Cn": "平均房租的漲幅遠高於平均薪資。", "spCn": "房租飆漲的速度遠比薪水快。"},
    {b1:"If you do nothing, you slowly lose money.",
     b2:"Doing nothing is not a neutral choice; it is a slow decision to become poorer.",
     note:"動名詞當主詞（Doing nothing）＋ 名詞化 decision，把行為變成可以被評價的東西。", "sp": "Sitting on your hands isn't neutral — it's just a slow way of getting poorer.", "spNote": "sit on your hands（什麼都不做）是口語慣用語。", "b1Cn": "如果你什麼都不做，你會慢慢損失錢。", "b2Cn": "什麼都不做並非中立的選擇；那是慢慢變窮的決定。", "spCn": "兩手一攤不是中立——那只是慢慢變窮的另一種方式。"}
  ]
},

/* ---------------------------------------------------------- 19 */
{
  id:"r19", level:"B2", topic:"金錢與居住", words:290,
  title:"The Empty Flats Above the Shops",
  titleCn:"店面樓上的空屋",
  focus:"倒裝與強調句（It is ... that / Nowhere is ... more visible）",
  intro:"都市議題。注意 It is X that ... 的分裂句（強調某個成分）與 Nowhere is / Rarely does 的倒裝，這兩種結構在社論裡出現頻率很高。",
  "spoken": [{"en":"Walk down an old shopping street after nine and count the lit windows upstairs — in some districts it's less than half.","cn":"晚上九點後走過老商店街，數數樓上亮燈的窗戶——有些區連一半都不到。"},{"en":"Owners keep flats empty on purpose: a place sells for more without a tenant, and a bad tenancy can trap you for years.","cn":"屋主是故意空著的：沒有房客的房子賣相更好，碰上難搞的租約還可能被困好幾年。"},{"en":"But the shops downstairs pay the price — a street where nobody sleeps loses its bakeries, its clinics, its evening buses.","cn":"但代價由樓下的店面承擔——一條沒人過夜的街，會失去麵包店、診所和晚班公車。"},{"en":"Some cities tax empty homes now, and it's slowly working. A city isn't a pile of assets — it's a place people need to be able to sleep.","cn":"有些城市開始課空屋稅了，效果慢但真實。城市不是一堆資產——是人必須能睡覺的地方。"}],
  paras:[
    {en:"Walk down any older commercial street after nine in the evening and count the lit windows above the shops. In many districts fewer than half are lit. It is not a shortage of buildings that keeps rents high in these areas; it is the number of usable homes that are being held empty.",
     cn:"晚上九點過後走在任何一條較老的商業街上，數一數店面樓上亮著的窗戶。在許多區域，亮著的不到一半。讓這些地區房租居高不下的，不是建築物不夠，而是那些明明可以住、卻被空置的住宅數量。"},
    {en:"Owners keep flats empty for reasons that are individually rational. A property held for resale is worth more without a tenant in it. Repairs cost money that a rising land price will earn anyway. In places where a landlord can be trapped for years by a difficult tenancy, leaving a flat unused looks like caution rather than waste.",
     cn:"屋主讓房子空著的理由，就個別來看都是合理的。等著轉售的房子，裡面沒有房客反而更值錢。修繕要花錢，而上漲的地價本來就會賺回來。在房東可能被難處理的租約困住好幾年的地方，讓房子空著看起來像謹慎，而不像浪費。"},
    {en:"Nowhere is the cost of this more visible than in the shops below. A street where nobody sleeps loses its bakeries, its clinics and its evening buses, because none of them can survive on daytime customers alone. What follows is a slow emptying that no single owner intended and no single owner can reverse.",
     cn:"這件事的代價，在樓下的店面看得最清楚。沒有人居住的街道會失去麵包店、診所與晚間公車，因為它們都無法只靠白天的客人存活。接著發生的，是一種沒有任何單一屋主打算造成、也沒有任何單一屋主能夠逆轉的緩慢空洞化。"},
    {en:"Several cities have responded with a vacancy tax: a rising charge on homes left empty beyond a set number of months, with exemptions for renovation and genuine sale. Results have been modest but real — a few per cent of units returning to the rental market each year. It is worth remembering that a city is not a collection of assets. It is a place where people have to be able to sleep.",
     cn:"有些城市以「空屋稅」回應：對超過一定月數仍空置的住宅逐步加重課徵，並對整修中與真正待售者設有豁免。成效不大但真實——每年有百分之幾的單位回到租賃市場。值得記住的是：城市不是一堆資產的集合，而是一個人必須有辦法睡覺的地方。"}
  ],
  target:[
    {w:"commercial",ipa:"/kəˈmɝːʃl/",pos:"adj.",cn:"商業的",def:"Connected with buying and selling.",ex:"The ground floor is zoned for commercial use, not residential.",exCn:"一樓的用途規劃是商業用，不是住宅。"},
    {w:"district",ipa:"/ˈdɪstrɪkt/",pos:"n.",cn:"區、地段",def:"An area of a town or city.",ex:"The old district is famous for its narrow streets and tea houses.",exCn:"這個老街區以窄巷和茶館聞名。"},
    {w:"shortage",ipa:"/ˈʃɔːrtɪdʒ/",pos:"n.",cn:"短缺",def:"A situation in which there is not enough of something.",ex:"The hospital is facing a serious shortage of nurses.",exCn:"這家醫院面臨嚴重的護理人員短缺。"},
    {w:"resale",ipa:"/ˈriːseɪl/",pos:"n.",cn:"轉售",def:"Selling something you bought earlier.",ex:"The resale value of the car dropped quickly after the first year.",exCn:"這輛車第一年過後轉售價值就快速下跌。"},
    {w:"tenancy",ipa:"/ˈtenənsi/",pos:"n.",cn:"租約、租賃關係",def:"The period or agreement of renting a property.",ex:"The tenancy agreement runs for twelve months and can be renewed.",exCn:"這份租約為期十二個月，可以續約。"},
    {w:"caution",ipa:"/ˈkɔːʃn/",pos:"n.",cn:"謹慎",def:"Care taken to avoid risk.",ex:"The sign says 'Caution: wet floor' — be careful not to slip.",exCn:"告示牌寫著「小心：地板濕滑」——注意別滑倒。"},
    {w:"vacancy tax",ipa:"/ˈveɪkənsi tæks/",pos:"n.",cn:"空屋稅",def:"A tax on homes that are left empty.",ex:"Supporters say vacancy taxes push owners of unused apartments to rent them out or sell.",exCn:"支持者認為，空屋稅會促使閒置公寓的屋主把房子出租或賣掉。"},
    {w:"exemption",ipa:"/ɪɡˈzempʃn/",pos:"n.",cn:"豁免",def:"Permission not to pay or obey something.",ex:"First-time buyers can apply for a tax exemption on their new home.",exCn:"首次購屋者可以申請新屋的稅務豁免。"},
    {w:"modest",ipa:"/ˈmɑːdɪst/",pos:"adj.",cn:"不大的、有限的",def:"Not large in size or amount.",ex:"The company reported a modest increase in sales this quarter.",exCn:"公司本季銷售出現小幅成長。"},
    {w:"asset",ipa:"/ˈæset/",pos:"n.",cn:"資產",def:"Something valuable that a person or company owns.",ex:"For many families, their house is their most valuable asset.",exCn:"對許多家庭來說，房子是他們最有價值的資產。"}
  ],
  questions:[
    {q:"According to the writer, what keeps rents high in these areas?",
     opts:["A. Too few buildings","B. The number of usable homes kept empty","C. High construction costs","D. Foreign tourists"],
     ans:1, expl:"It is not a shortage of buildings... it is the number of usable homes that are being held empty。"},
    {q:"Why might a landlord prefer to leave a flat empty?",
     opts:["A. It is illegal to rent it","B. It is worth more for resale and avoids a difficult tenancy","C. Tenants pay nothing","D. Electricity is too expensive"],
     ans:1, expl:"worth more without a tenant... leaving a flat unused looks like caution。"},
    {q:"What happens to the shops below when nobody lives on the street?",
     opts:["A. They raise prices","B. They open later","C. Bakeries, clinics and evening buses disappear","D. They become hotels"],
     ans:2, expl:"loses its bakeries, its clinics and its evening buses。"},
    {q:"Which sentence shows correct inversion?",
     opts:["A. Nowhere the cost is more visible than in the shops","B. Nowhere is the cost more visible than in the shops","C. Nowhere the cost more visible is","D. Nowhere does the cost is more visible"],
     ans:1, expl:"Nowhere 置句首要倒裝：be 動詞提到主詞之前。"}
  ],
  upgrade:[
    {b1:"There are enough buildings. The problem is the empty ones.",
     b2:"It is not a shortage of buildings that keeps rents high; it is the number of homes being held empty.",
     note:"It is ... that ... 分裂句，用來明確否定一個原因並指出另一個。", "sp": "It's not that we're short on buildings — it's all the places sitting empty.", "spNote": "be short on（缺）、sit empty（空著）是房市口語。", "b1Cn": "建築物夠多。問題是空著的那些。", "b2Cn": "讓租金居高不下的不是房屋短缺，而是被空置的房子數量。", "spCn": "我們不是缺房子——是太多房子空在那裡。"},
    {b1:"The shops below suffer the most from this.",
     b2:"Nowhere is the cost of this more visible than in the shops below.",
     note:"Nowhere is ... more ... than ... 是社論常見的強調倒裝，比 the most 更有份量。", "sp": "You can see the damage most clearly in the shops downstairs.", "spNote": "口語把 Nowhere is...more visible 的倒裝還原成 You can see...，最自然。", "b1Cn": "樓下的商店受害最深。", "b2Cn": "這個代價在樓下的商店最清楚可見。", "spCn": "傷害最明顯的地方，就是樓下那排店面。"}
  ]
},

/* ---------------------------------------------------------- 20 */
{
  id:"r20", level:"B1", topic:"網購與生活", words:205,
  title:"The Parcel That Went to the Wrong Floor",
  titleCn:"送錯樓層的包裹",
  focus:"現在完成式 vs. 過去簡單式（just / already / yet / ever）",
  intro:"網購收不到貨的小事件。注意哪些句子講「到現在為止的狀態或結果」（用現在完成式），哪些句子講「已經結束的某個時間」（用過去簡單式）。",
  spoken:[
    {en:"Anita ordered a desk lamp online, and the app said it was delivered — but there was nothing at her door.",cn:"Anita 網購了一盞檯燈，App 說已經送達，可是她門口什麼都沒有。"},
    {en:"She asked the security guard, but he hadn't seen any parcel.",cn:"她去問警衛，但他沒看到任何包裹。"},
    {en:"The delivery photo showed door 603, and she lives in 503.",cn:"送貨照片拍的是 603 號門，而她住 503。"},
    {en:"Now she writes her floor number on every order.",cn:"現在她每筆訂單都會寫上自己的樓層。"}
  ],
  paras:[
    {en:"Anita ordered a new desk lamp online last Friday. The shop promised to deliver it in three days, so she was not worried. On Monday evening her phone showed a message: “Your parcel has been delivered.” But when she opened her door, there was nothing outside.",
     cn:"上週五，Anita 在網路上訂了一盞新的檯燈。商家承諾三天內送到，所以她一點也不擔心。週一晚上，她的手機跳出一則訊息：「您的包裹已送達。」但她打開門，外面什麼都沒有。"},
    {en:"She has lived in the building for two years, and this has never happened before. First she looked on the stairs. Then she asked the security guard downstairs. He said he had not seen any parcel today, and the delivery man had already left.",
     cn:"她在這棟大樓已經住了兩年，從來沒發生過這種事。她先看了樓梯間，接著去問樓下的警衛。警衛說今天沒看到任何包裹，而且送貨員已經離開了。"},
    {en:"Anita sent a message to the delivery company. Five minutes later, a worker wrote back. He had just checked the photo from the delivery. The door in the photo was number 603. Anita lives in 503.",
     cn:"Anita 傳訊息給物流公司。五分鐘後，一位職員回覆了。他剛剛查了送貨時拍的照片，照片裡的門牌是 603 號，但 Anita 住的是 503。"},
    {en:"She walked up to the sixth floor and knocked. A young man opened the door and looked embarrassed. “I have not opened it yet,” he said. “I was going to bring it down to you tomorrow. I am so sorry!” Anita laughed and took her lamp.",
     cn:"她走上六樓敲門。一位年輕男子開了門，看起來很不好意思。「我還沒拆開，」他說，「我本來打算明天拿下去給妳。真的很抱歉！」Anita 笑了笑，把檯燈拿了回去。"},
    {en:"Since that evening, Anita has added one line to every order: “Please check the floor number.” It took her ten seconds to write, but it has already saved her a lot of trouble.",
     cn:"從那天晚上起，Anita 在每張訂單都加了一行字：「請確認樓層。」這行字她只花了十秒鐘寫，卻已經替她省下不少麻煩。"}
  ],
  target:[
    {w:"parcel",ipa:"/ˈpɑːrsl/",pos:"n.",cn:"包裹",def:"A package that is sent by post or delivered to someone's home.",ex:"I picked up a parcel from my cousin at the post office.",exCn:"我在郵局領了表哥寄來的包裹。"},
    {w:"promise",ipa:"/ˈprɑː.mɪs/",pos:"v.",cn:"承諾",def:"To say that you will definitely do something.",ex:"My boss promised me a day off after the busy season.",exCn:"老闆答應我旺季結束後讓我休一天假。"},
    {w:"deliver",ipa:"/dɪˈlɪvɚ/",pos:"v.",cn:"遞送",def:"To take something to a person or a place.",ex:"This restaurant delivers lunch boxes to offices until two o'clock.",exCn:"這家餐廳到兩點前都會把便當送到辦公室。"},
    {w:"worried",ipa:"/ˈwɝːid/",pos:"adj.",cn:"擔心的",def:"Feeling that something bad might happen.",ex:"Mom was worried because the bus was an hour late.",exCn:"公車晚了一小時，媽媽很擔心。"},
    {w:"embarrassed",ipa:"/ɪmˈberəst/",pos:"adj.",cn:"尷尬的",def:"Feeling shy or uncomfortable because of something that happened.",ex:"Tom felt embarrassed when he called his teacher by the wrong name.",exCn:"Tom 叫錯老師的名字，覺得很尷尬。"},
    {w:"trouble",ipa:"/ˈtrʌbl/",pos:"n.",cn:"麻煩",def:"Problems or difficulties.",ex:"We had trouble finding a taxi after the concert.",exCn:"演唱會結束後，我們很難攔到計程車。"}
  ],
  questions:[
    {q:"Where was Anita's parcel?",
     opts:["A. Downstairs with the security guard","B. In front of her own door","C. In a neighbour's flat on the sixth floor","D. At the delivery company"],
     ans:2,
     expl:"送貨照片拍的是 603 號門，Anita 到六樓敲門，年輕男子說包裹還在他那裡。"},
    {q:"How did Anita find out which door the parcel went to?",
     opts:["A. The security guard told her","B. She saw it on the stairs","C. The delivery company checked a photo","D. A neighbour called her"],
     ans:2,
     expl:"文章寫 He had just checked the photo from the delivery. The door in the photo was number 603. → 物流職員查了送貨照片。"},
    {q:"Choose the correct sentence: Anita ___ the lamp last Friday.",
     opts:["A. has ordered","B. ordered","C. orders","D. is ordering"],
     ans:1,
     expl:"有明確的過去時間 last Friday，要用過去簡單式 ordered，不能用現在完成式。"}
  ],
  upgrade:[
    {b1:"Anita has lived here for two years. This never happened.",
     b2:"Anita has lived here for two years, and nothing like this has ever happened before.",
     note:"現在完成式搭配 ever / never，表示「到現在為止的經驗」；用 and 把兩個完成式接在一起，句子更完整。",
     sp:"I've been here two years and this has never happened — not once.",
     spNote:"not once（一次也沒有）放句尾，是口語強調「從來沒有」的常見說法。",
     b1Cn:"Anita 住在這裡兩年了。這件事從沒發生過。",
     b2Cn:"Anita 在這裡住了兩年，這種事以前從來沒發生過。",
     spCn:"我住這兩年了，這種事從來沒發生過——連一次都沒有。"},
    {b1:"I did not open it. I will bring it tomorrow.",
     b2:"I haven't opened it yet — I was going to bring it down to you tomorrow.",
     note:"否定句句尾加 yet 表示「到現在還沒」；was going to 表示「原本打算要做」。",
     sp:"Haven't touched it, honest — I was gonna drop it off tomorrow.",
     spNote:"gonna 是 going to 的口語縮讀；honest 當插入語，表示「真的啦」。",
     b1Cn:"我沒有拆。我明天會拿過去。",
     b2Cn:"我還沒拆開——我本來打算明天拿下去給妳。",
     spCn:"我完全沒碰，真的——我本來打算明天幫你送過去。"}
  ]
},

/* ---------------------------------------------------------- 21 */
{
  id:"r21", level:"B1", topic:"運動與習慣", words:222,
  title:"Tom Decides to Run",
  titleCn:"Tom 決定開始跑步",
  focus:"be going to 與 will：事先的計畫 vs. 當下的決定",
  intro:"一個「說了很久卻一直沒開始」的運動故事。注意 I'm going to ... 是已經有的打算，I'll ... 則是說話當下才做的決定。",
  spoken:[
    {en:"Tom's doctor told him to walk more, so he said he was going to start running.",cn:"Tom 的醫生叫他多走路，所以他說他要開始跑步。"},
    {en:"But first it rained, then it was cold, and he kept saying, “I'll start tomorrow.”",cn:"但先是下雨、後來太冷，他一直說「我明天再開始」。"},
    {en:"Then his neighbour invited him to the park, and Tom decided on the spot — “OK, I'll get my shoes.”",cn:"後來鄰居約他去公園，Tom 當場就決定：「好，我去拿鞋。」"},
    {en:"Now there's a card on his fridge with his weekly plan.",cn:"現在他冰箱上貼著一張寫著每週計畫的卡片。"}
  ],
  paras:[
    {en:"Tom works at a desk all day, and last month his doctor gave him some simple advice: walk more. “I'm going to start running,” Tom told his sister that night. She laughed. “You said that last year, too.”",
     cn:"Tom 整天坐在辦公桌前工作，上個月醫生給了他一個簡單的建議：多走路。「我打算開始跑步，」那天晚上 Tom 對姊姊說。姊姊笑了。「你去年也這樣說過。」"},
    {en:"The next morning he put on his old running shoes. It was raining, so he said, “I'll start tomorrow.” But the next day was too cold, and the day after that he was too tired. He was not ready to give up, but he was not really moving, either.",
     cn:"隔天早上，他穿上舊的跑鞋。外面在下雨，所以他說：「我明天再開始。」但第二天太冷，再隔天他又太累。他還不想放棄，但也沒真的動起來。"},
    {en:"On Saturday his neighbour Mr. Lin knocked on the door. “I'm going to the park for a walk,” he said. “Do you want to come?” Tom looked at the sky. It was grey, but it was not raining. “OK, I'll get my shoes,” he said.",
     cn:"週六，鄰居林先生來敲門。「我要去公園散步，」他說，「你要一起來嗎？」Tom 看了看天空，雖然是灰的，但沒有下雨。「好，我去拿鞋，」他說。"},
    {en:"They walked for twenty minutes, and then Tom tried to run. After ten minutes he had to stop. His legs were shaking, and he was breathing hard. But he felt happy. “Same time next Saturday?” Mr. Lin asked. “Yes,” Tom said. “And I think I'll try a short run on Wednesday, too.”",
     cn:"他們走了二十分鐘，然後 Tom 試著跑起來。十分鐘後他不得不停下來，雙腿發抖，呼吸急促，但他覺得很開心。「下週六同一時間？」林先生問。「好，」Tom 說，「而且我想週三也試著跑一小段。」"},
    {en:"It is still a small plan. But this time Tom wrote it on a card and put it on the fridge: “Saturday — park. Wednesday — 10 minutes.” He says the card is more useful than his promise.",
     cn:"這還只是個小計畫。但這次 Tom 把它寫在一張卡片上，貼在冰箱門：「週六——公園。週三——十分鐘。」他說這張卡片比他的承諾更有用。"}
  ],
  target:[
    {w:"advice",ipa:"/ədˈvaɪs/",pos:"n.",cn:"建議",def:"An opinion about what someone should do.",ex:"The old taxi driver gave us good advice about the night market.",exCn:"那位老計程車司機給了我們關於夜市的好建議。"},
    {w:"neighbour",ipa:"/ˈneɪbɚ/",pos:"n.",cn:"鄰居",def:"A person who lives near you.",ex:"Our neighbour waters the plants when we go away.",exCn:"我們出遠門時，鄰居會幫忙澆花。"},
    {w:"give up",ipa:"/ɡɪv ˈʌp/",pos:"phr. v.",cn:"放棄",def:"To stop trying to do something.",ex:"Don't give up on your English — you get better every week.",exCn:"別放棄英文——你每週都在進步。"},
    {w:"breathe",ipa:"/briːð/",pos:"v.",cn:"呼吸",def:"To take air into your body and let it out again.",ex:"Breathe in slowly, and then count to four.",exCn:"慢慢吸氣，然後數到四。"},
    {w:"shake",ipa:"/ʃeɪk/",pos:"v.",cn:"發抖；搖動",def:"To move quickly from side to side or up and down.",ex:"My hands shake a little when I speak in front of a big group.",exCn:"在一大群人面前說話時，我的手會微微發抖。"},
    {w:"useful",ipa:"/ˈjuːsfəl/",pos:"adj.",cn:"有用的",def:"Helpful for doing or getting something.",ex:"A small flashlight is useful during a power cut.",exCn:"停電時，一支小手電筒很有用。"}
  ],
  questions:[
    {q:"What advice did Tom's doctor give him?",
     opts:["A. Sleep more","B. Walk more","C. Eat less","D. Work less"],
     ans:1,
     expl:"文章寫 his doctor gave him some simple advice: walk more。"},
    {q:"Why did Tom say, “OK, I'll get my shoes”?",
     opts:["A. He had planned it a week before","B. It already happened yesterday","C. He decided at that moment","D. It is a fact about him"],
     ans:2,
     expl:"鄰居剛邀請他，Tom 看看天空後當場決定去。這種「說話當下的決定」用 will，不用 be going to。"},
    {q:"What did Tom put on the fridge?",
     opts:["A. A photo of Mr. Lin","B. A new pair of shoes","C. A card with his weekly plan","D. A note from his doctor"],
     ans:2,
     expl:"最後一段：he wrote it on a card and put it on the fridge。"}
  ],
  upgrade:[
    {b1:"I want to run. I will start tomorrow.",
     b2:"I'm going to start running, but I'll wait until the rain stops.",
     note:"be going to 表示已經有的打算；will 表示說話當下才做的決定或附帶條件。",
     sp:"I'm gonna get into running — just not while it's pouring.",
     spNote:"get into 是「開始迷上」，pouring 是「下傾盆大雨」，都是口語常用字。",
     b1Cn:"我想跑步。我明天開始。",
     b2Cn:"我打算開始跑步，但我會等雨停了再說。",
     spCn:"我打算開始跑步——只是不要在下大雨的時候。"},
    {b1:"Tom wrote a plan. A plan is better than only saying it.",
     b2:"Tom wrote the plan on a card, which is more useful than just promising.",
     note:"用 which 接在前面整句後面補充說明，再用 more + 形容詞 + than 做比較。",
     sp:"Writing it down beats just promising yourself.",
     spNote:"beat 在口語裡是「勝過」的意思，比 is better than 更簡短有力。",
     b1Cn:"Tom 寫了一個計畫。寫下來比只用說的好。",
     b2Cn:"Tom 把計畫寫在卡片上，這比光是承諾更有用。",
     spCn:"寫下來比只在心裡答應自己有效多了。"}
  ]
},

/* ---------------------------------------------------------- 22 */
{
  id:"r22", level:"B1+", topic:"手機與社交", words:220,
  title:"The Café Where Nobody Checks Their Phone",
  titleCn:"沒人滑手機的咖啡店",
  focus:"現在完成進行式 vs. 現在完成式（has been doing / has done）",
  intro:"一間要客人把手機放進盒子的咖啡店。注意 has been running / has been watching 強調「從過去持續到現在的過程」，而 has chosen / has become 強調「已經有的結果」。",
  spoken:[
    {en:"A café in Taipei has been asking customers to put their phones in a box since March.",cn:"台北有間咖啡店從三月起，就請客人把手機放進盒子裡。"},
    {en:"If you do it, you get a free cookie.",cn:"放進去的話，就送你一片免費餅乾。"},
    {en:"Some students refused at first, so the owner let people who needed their phones keep them at the counter.",cn:"一開始有些學生拒絕，所以老闆讓需要手機的人把手機放在櫃檯。"},
    {en:"Now the place is louder, and some regulars say they've finally made friends there.",cn:"現在店裡變吵了，有些常客說他們終於在那裡交到朋友。"}
  ],
  paras:[
    {en:"A small café near a Taipei university has been running an unusual experiment since March. At the door, customers are asked to put their phones in a wooden box. Nobody is forced to do it, but those who agree get a free cookie. The owner, Ms. Chen, has been watching the results closely ever since.",
     cn:"台北一所大學附近的小咖啡店，從三月起就在進行一項特別的實驗。在門口，客人會被請求把手機放進一個木盒子裡。沒有人被強迫，但願意配合的人可以拿到一片免費餅乾。老闆陳小姐從那時起就一直仔細觀察結果。"},
    {en:"At first, many students refused. They had been using their phones to study, they explained, or to wait for messages from family. Ms. Chen listened carefully and changed one rule: anyone who needed to stay in touch could keep a phone at the counter. Since then, more than half of the customers have chosen the box.",
     cn:"一開始，很多學生拒絕。他們解釋說，自己一直是用手機在念書，或是在等家人的訊息。陳小姐聽了之後改了一條規則：需要保持聯絡的人，可以把手機放在櫃檯。從那之後，超過一半的客人選擇了放進盒子。"},
    {en:"The change has been noticeable. The café has become louder in a pleasant way, with more laughter and the sound of cups instead of keyboards. Some regular customers say they have made friends there for the first time in years. One student has been coming every Thursday and has already finished two books.",
     cn:"這個改變相當明顯。咖啡店變得更吵了，但是吵得很舒服，有更多笑聲，還有杯子的聲音取代了鍵盤聲。有些常客說，他們多年來第一次在這裡交到朋友。有一位學生每週四都來，已經讀完了兩本書。"},
    {en:"Not everyone is happy. A few people have complained that the idea is old-fashioned, and one customer has stopped coming altogether. Ms. Chen is not worried. “I haven't been trying to change the world,” she says. “I have only been trying to give people one quiet hour. That seems to be enough. Most evenings, it is.”",
     cn:"並不是每個人都滿意。少數人抱怨這個點子太老派，還有一位客人完全不來了。陳小姐並不擔心。「我並不是想改變世界，」她說，「我只是想讓大家有一個安靜的小時。這樣似乎就夠了。大多數晚上，確實是夠的。」"}
  ],
  target:[
    {w:"experiment",ipa:"/ɪkˈsper.ə.mənt/",pos:"n.",cn:"實驗",def:"A test that you do to find out if an idea works.",ex:"Our science teacher did an experiment with ice and salt.",exCn:"我們的自然老師用冰和鹽做了一個實驗。"},
    {w:"owner",ipa:"/ˈoʊnɚ/",pos:"n.",cn:"老闆；擁有者",def:"A person who owns something, such as a shop.",ex:"The owner of the bakery remembers every customer's favorite bread.",exCn:"麵包店老闆記得每位客人最愛的麵包。"},
    {w:"refuse",ipa:"/rɪˈfjuːz/",pos:"v.",cn:"拒絕",def:"To say that you will not do or accept something.",ex:"The bank refused to lend him money without a guarantor.",exCn:"沒有保證人，銀行拒絕借錢給他。"},
    {w:"regular",ipa:"/ˈreɡjəlɚ/",pos:"n.",cn:"常客",def:"A person who goes to the same place often.",ex:"As a regular at the gym, Jason knows all the trainers by name.",exCn:"身為健身房常客，Jason 叫得出所有教練的名字。"},
    {w:"noticeable",ipa:"/ˈnoʊtɪsəbl/",pos:"adj.",cn:"明顯的",def:"Easy to see or to feel.",ex:"There has been a noticeable drop in traffic since the new subway opened.",exCn:"新地鐵開通以後，車流量明顯減少。"},
    {w:"complain",ipa:"/kəmˈpleɪn/",pos:"v.",cn:"抱怨",def:"To say that you are not satisfied with something.",ex:"Several tenants complained about the noise from the construction site.",exCn:"好幾位房客抱怨工地的噪音。"},
    {w:"old-fashioned",ipa:"/ˌoʊldˈfæʃnd/",pos:"adj.",cn:"老派的；過時的",def:"Not modern; belonging to an earlier time.",ex:"My grandmother still uses an old-fashioned sewing machine.",exCn:"我奶奶還在用一台老式縫紉機。"},
    {w:"altogether",ipa:"/ˌɔːltəˈɡeðɚ/",pos:"adv.",cn:"完全；總共",def:"Completely; in total.",ex:"The trip cost five thousand dollars altogether, including meals.",exCn:"這趟旅行含餐費總共花了五千元。"}
  ],
  questions:[
    {q:"What do customers get if they put their phones in the box?",
     opts:["A. A free drink","B. A free cookie","C. A discount card","D. A free book"],
     ans:1,
     expl:"文章寫 those who agree get a free cookie。"},
    {q:"What rule did Ms. Chen change after some students refused?",
     opts:["A. Phones were banned completely","B. Phones could stay on the table","C. People who needed to stay in touch could keep a phone at the counter","D. The box was moved outside"],
     ans:2,
     expl:"第二段：anyone who needed to stay in touch could keep a phone at the counter。"},
    {q:"Why does the writer say “One student has been coming every Thursday”?",
     opts:["A. To show an action that began in the past and continues until now","B. To show a finished action in the past","C. To talk about a future plan","D. To describe a single event last Thursday"],
     ans:0,
     expl:"has been coming + every Thursday 表示從過去持續到現在的重複行為，這是現在完成進行式的典型用法。"},
    {q:"How does Ms. Chen feel about the criticism?",
     opts:["A. She is angry","B. She plans to close the café","C. She is not worried","D. She wants to ban phones everywhere"],
     ans:2,
     expl:"文章寫 Ms. Chen is not worried，她只是想讓大家有一個安靜的小時。"}
  ],
  upgrade:[
    {b1:"The café started this idea in March. It still does it now.",
     b2:"The café has been running this experiment since March.",
     note:"現在完成進行式 has been V-ing + since，一句話就說完「從過去開始、到現在仍在進行」。",
     sp:"They've been doing this phone-box thing since March.",
     spNote:"thing 在口語裡可以代替較正式的名詞，像 phone-box thing（手機盒那套做法）。",
     b1Cn:"這家咖啡店三月開始這個點子。現在還在做。",
     b2Cn:"這家咖啡店從三月起就一直在進行這項實驗。",
     spCn:"他們從三月就一直在搞這個手機盒的玩意兒。"},
    {b1:"They give a free cookie to people who put their phones in the box.",
     b2:"Nobody is forced to do it, but those who agree get a free cookie.",
     note:"用被動語態 is forced 淡化「誰在強迫」，再用 those who 代替 people who，語氣更正式。",
     sp:"No one's making you — but if you do, you get a free cookie.",
     spNote:"No one's making you 是口語把被動還原成「沒人逼你」，一聽就懂。",
     b1Cn:"他們把免費餅乾送給把手機放進盒子的人。",
     b2Cn:"沒有人被強迫這麼做，但願意配合的人可以拿到免費餅乾。",
     spCn:"沒人逼你——不過你放了，就送你一片免費餅乾。"}
  ]
},

/* ---------------------------------------------------------- 23 */
{
  id:"r23", level:"B1+", topic:"語言學習與職場", words:228,
  title:"Learning Vietnamese Five Minutes at a Time",
  titleCn:"一次五分鐘的越南語",
  focus:"第二條件句與 wish（If I had ..., I would ... / I wish I could ...）",
  intro:"在越南工作的 Anita 想學當地語言，卻總說「沒時間」。注意 If + 過去式, would + 原形 如何談「和現在事實相反的假設」，以及 wish 後面的時態。",
  spoken:[
    {en:"Anita's Vietnamese is still basic, and she says she'd take a class if she had more time.",cn:"Anita 的越南語還很基礎，她說如果有更多時間，就會去上課。"},
    {en:"Her colleague Mai told her, “If I were you, I'd learn five minutes at a time.”",cn:"同事 Mai 對她說：「如果我是妳，我會一次只學五分鐘。」"},
    {en:"So now she learns one sentence on the shuttle bus and tries it out at lunch.",cn:"所以她現在在交通車上學一句，午餐時就拿來用。"},
    {en:"After six weeks she knows about forty sentences, and she wishes she'd started in January.",cn:"六週後她會了大約四十句，也希望自己一月就開始了。"}
  ],
  paras:[
    {en:"Anita has lived in Vietnam for eight months, but her Vietnamese is still very basic. She can order coffee, ask for a price, and say thank you politely. If she had more free time, she would take a proper class, she often tells herself. But after ten hours at the factory, she is usually too tired to open a textbook.",
     cn:"Anita 在越南住了八個月，但她的越南語仍然非常基礎。她會點咖啡、問價錢，還會禮貌地說謝謝。她常對自己說，如果有更多空閒時間，她就會去上正式的課。但在工廠待了十個小時之後，她通常累得連課本都打不開。"},
    {en:"Last month her colleague Mai offered a different idea. “If I were you, I wouldn't wait for free time,” Mai said. “I'd learn five minutes at a time.” She suggested one new sentence every morning on the shuttle bus, and a short chat at lunch. Anita wished she had thought of it earlier.",
     cn:"上個月，同事 Mai 提出了不同的想法。「如果我是妳，我不會等有空閒時間，」Mai 說，「我會一次只學五分鐘。」她建議每天早上在交通車上學一個新句子，午餐時再聊幾句。Anita 後悔自己沒有早點想到。"},
    {en:"The plan sounded too small to matter, but Anita tried it. On the bus she repeats one sentence about her day. At lunch she uses it with Mai, who corrects her gently. Some days she makes mistakes and everyone laughs. If she were afraid of looking silly, she would stop, but she has decided that laughing is part of learning.",
     cn:"這個計畫聽起來小到沒什麼用，但 Anita 還是試了。在車上，她會重複一句關於自己這一天的話。午餐時，她把這句話用在 Mai 身上，Mai 會溫和地糾正她。有些日子她犯了錯，大家一起笑。如果她害怕看起來很蠢，她早就放棄了，但她已經決定，笑也是學習的一部分。"},
    {en:"After six weeks, Anita knows about forty sentences. It is not much, yet the market vendors now smile when she speaks. “I wish I could say more,” she admits, “but if someone had told me this in January, I would have started then.” Her next goal is simple: a full conversation with a taxi driver.",
     cn:"六週後，Anita 會了大約四十個句子。數量不多，但市場的攤販現在聽她開口就會微笑。「我真希望自己能說得更多，」她承認，「但如果一月有人告訴我這個方法，我當時就會開始了。」她的下一個目標很簡單：和計程車司機進行一段完整的對話。"}
  ],
  target:[
    {w:"proper",ipa:"/ˈprɑːpɚ/",pos:"adj.",cn:"正式的；適當的",def:"Right or suitable for a particular purpose.",ex:"You need proper shoes for hiking in the mountains.",exCn:"去山裡健行需要一雙合適的鞋。"},
    {w:"colleague",ipa:"/ˈkɑː.liːɡ/",pos:"n.",cn:"同事",def:"A person who works with you.",ex:"My colleague from the sales team brought us mango cake.",exCn:"業務部的同事帶了芒果蛋糕給我們。"},
    {w:"suggest",ipa:"/səˈdʒest/",pos:"v.",cn:"建議",def:"To offer an idea for someone to think about.",ex:"The waiter suggested the grilled fish, so we ordered it.",exCn:"服務生推薦了烤魚，所以我們就點了。"},
    {w:"correct",ipa:"/kəˈrekt/",pos:"v.",cn:"糾正",def:"To show and fix a mistake.",ex:"The teacher corrected my pronunciation of the word “comfortable.”",exCn:"老師糾正了我 comfortable 這個字的發音。"},
    {w:"silly",ipa:"/ˈsɪli/",pos:"adj.",cn:"傻的；愚蠢的",def:"Not serious or sensible.",ex:"It felt silly to wear a raincoat on such a sunny day.",exCn:"在這麼晴朗的日子穿雨衣，感覺很傻。"},
    {w:"vendor",ipa:"/ˈvendɚ/",pos:"n.",cn:"小販；攤商",def:"A person who sells things, often outdoors.",ex:"A street vendor sold us two cups of fresh sugarcane juice.",exCn:"一位街頭小販賣給我們兩杯現榨甘蔗汁。"},
    {w:"admit",ipa:"/ədˈmɪt/",pos:"v.",cn:"承認",def:"To say that something is true, often unwillingly.",ex:"Paul finally admitted that he had forgotten the password.",exCn:"Paul 終於承認他忘了密碼。"},
    {w:"goal",ipa:"/ɡoʊl/",pos:"n.",cn:"目標",def:"Something you want to achieve.",ex:"Her goal this year is to save enough for a short trip to Japan.",exCn:"她今年的目標是存夠錢去日本玩幾天。"}
  ],
  questions:[
    {q:"Why does Anita not take a proper class?",
     opts:["A. Classes are too expensive","B. She is usually too tired after work","C. She already speaks Vietnamese well","D. There are no classes near the factory"],
     ans:1,
     expl:"第一段：after ten hours at the factory, she is usually too tired to open a textbook。"},
    {q:"What did Mai suggest?",
     opts:["A. Waiting for more free time","B. Studying five minutes at a time","C. Watching Vietnamese TV all night","D. Asking the manager for a day off"],
     ans:1,
     expl:"Mai 說 I'd learn five minutes at a time，並建議在交通車上學一句、午餐時練習。"},
    {q:"“If she were afraid of looking silly, she would stop.” What does this tell us?",
     opts:["A. She is afraid, so she has stopped","B. She is not afraid, so she keeps going","C. She will stop tomorrow","D. She stopped last week"],
     ans:1,
     expl:"If + were ... would 是第二條件句，表示和現在事實相反：她其實不怕出糗，所以沒有放棄。"},
    {q:"What is Anita's next goal?",
     opts:["A. To pass an exam","B. To teach Mai English","C. To have a full conversation with a taxi driver","D. To move to another city"],
     ans:2,
     expl:"最後一句：a full conversation with a taxi driver。"}
  ],
  upgrade:[
    {b1:"I do not have free time, so I cannot take a class.",
     b2:"If I had more free time, I would take a proper class.",
     note:"第二條件句：If + 過去式, would + 原形，用來談和現在事實相反的假設，比直接說「做不到」更委婉。",
     sp:"If I had the time, I'd be in a class by now.",
     spNote:"by now（到現在早就）讓語氣帶著一點遺憾，口語很常用。",
     b1Cn:"我沒有空閒時間，所以不能去上課。",
     b2Cn:"如果我有更多空閒時間，我就會去上一堂正式的課。",
     spCn:"要是我有時間，現在早就在上課了。"},
    {b1:"I want to say more, but I cannot.",
     b2:"I wish I could say more.",
     note:"wish + could / 過去式，表達對現在情況的遺憾；wish + 過去完成式則是對過去的後悔。",
     sp:"Man, I wish I could just say what I'm thinking.",
     spNote:"Man 是口語感嘆詞，just 加強「就是想直接說出來」的語氣。",
     b1Cn:"我想多說一點，但是我不行。",
     b2Cn:"我真希望自己能說得更多。",
     spCn:"唉，我真希望能直接把心裡想的說出來。"}
  ]
},

/* ---------------------------------------------------------- 24 */
{
  id:"r24", level:"B2", topic:"職場與時間", words:285,
  title:"Why We Keep Saying Yes",
  titleCn:"為什麼我們總是說好",
  focus:"動名詞與不定詞的意義差別（stop / remember / regret）；the more..., the more...",
  intro:"關於加班和「說好」的習慣。注意 stop to ask（停下來去問）和 stop treating（不再當成）意思完全不同，另外 remember promising（記得曾經答應）與 remember to ask（記得要去問）也是同一組對比。",
  spoken:[
    {en:"Anita was about to leave at 6:40 when her manager asked her to stay and finish one more report.",cn:"Anita 6 點 40 分正要下班，主管卻問她能不能留下來再做一份報告。"},
    {en:"She said yes again — it's easier to agree than to refuse.",cn:"她又答應了——答應總是比拒絕容易。"},
    {en:"The next week, she stopped to ask when the report was actually due.",cn:"隔週，她停下來問這份報告到底什麼時候要。"},
    {en:"Surprisingly often, the answer was Friday, not tonight.",cn:"出乎意料的是，答案常常是週五，不是今晚。"}
  ],
  paras:[
    {en:"At 6:40 p.m., Anita was about to leave when her manager asked whether she could stay and finish one more report. She remembered promising herself to stop working late on weekdays, yet she heard herself say yes. It was the third time that week, and she walked back to her desk feeling both annoyed and oddly relieved. The report was not even difficult; it was simply one more task that had arrived at the end of the day.",
     cn:"晚上 6 點 40 分，Anita 正要下班，主管問她能不能留下來再完成一份報告。她記得自己答應過自己要停止在平日加班，但她卻聽見自己說了好。這已經是那週第三次，她走回座位，心裡既惱火又莫名地鬆了一口氣。那份報告其實並不難，只是一天快結束時又多出來的一件事。"},
    {en:"Psychologists have long observed that most people find it easier to agree than to refuse, especially when the request comes from someone senior. Refusing means risking an awkward silence; agreeing costs only an hour, or so it seems. Each yes looks reasonable on its own, which is exactly why the pattern is so hard to notice. The trouble is that these hours accumulate, and the more we agree, the more others expect us to agree.",
     cn:"心理學家早就觀察到，大多數人覺得同意比拒絕容易，尤其當請求來自職位較高的人。拒絕意味著要冒尷尬沉默的風險；答應似乎只需要花一個小時。每一次答應單獨來看都很合理，這正是這種模式如此難以察覺的原因。問題是這些小時會累積，而且我們答應得越多，別人就越期待我們答應。"},
    {en:"Anita tried a different approach the following week. Instead of answering at once, she stopped to ask when the report was actually due. Several times the answer was Friday, not tonight. She did not regret asking, and her manager seemed relieved to have a clearer deadline. Not every request can wait, of course, but she had stopped treating every request as an emergency.",
     cn:"隔週 Anita 試了不同的做法。她不再立刻回答，而是停下來問這份報告實際上什麼時候要交。好幾次答案都是週五，而不是今晚。她並不後悔開口問，而她的主管似乎也因為有了更明確的期限而鬆了口氣。當然，不是每件事都能等，但她已經不再把每個要求都當成緊急狀況。"},
    {en:"It would be naive to claim that one habit can change a workplace culture. Still, Anita no longer regrets saying yes, because she now says it deliberately, and sometimes she says no with a smile. Remembering to ask one simple question has given her something she thought she had lost: the sense that her evenings belong to her. Perhaps that is all most of us are trying to protect.",
     cn:"如果宣稱一個習慣就能改變職場文化，那未免太天真。儘管如此，Anita 不再為答應而後悔，因為她現在是有意識地答應，有時候也能帶著微笑說不。記得問一個簡單的問題，讓她找回了她以為已經失去的東西：晚上的時間屬於自己的那種感覺。或許，這正是我們大多數人想守住的東西。"}
  ],
  target:[
    {w:"accumulate",ipa:"/əˈkjuːmjəleɪt/",pos:"v.",cn:"累積",def:"To gradually get more and more of something.",ex:"Dust had accumulated on the shelves during the long summer.",exCn:"漫長的夏天裡，架子上積了一層灰塵。"},
    {w:"annoyed",ipa:"/əˈnɔɪd/",pos:"adj.",cn:"惱火的",def:"Slightly angry about something.",ex:"She was annoyed that the train was cancelled again.",exCn:"火車又被取消了，她很惱火。"},
    {w:"awkward",ipa:"/ˈɔːkwɚd/",pos:"adj.",cn:"尷尬的",def:"Uncomfortable or difficult to deal with.",ex:"There was an awkward pause when nobody knew the answer.",exCn:"沒有人知道答案時，出現了一陣尷尬的停頓。"},
    {w:"senior",ipa:"/ˈsiːnjɚ/",pos:"adj.",cn:"資深的；職位較高的",def:"Higher in rank or position.",ex:"He was promoted to senior engineer after five years.",exCn:"他工作五年後晉升為資深工程師。"},
    {w:"deadline",ipa:"/ˈdedlaɪn/",pos:"n.",cn:"截止期限",def:"The latest time by which something must be done.",ex:"We extended the deadline by two days because of the typhoon.",exCn:"因為颱風，我們把截止期限延了兩天。"},
    {w:"regret",ipa:"/rɪˈɡret/",pos:"v.",cn:"後悔",def:"To feel sorry about something you did or did not do.",ex:"I regret not learning to swim when I was young.",exCn:"我後悔小時候沒學游泳。"},
    {w:"deliberately",ipa:"/dɪˈlɪbɚətli/",pos:"adv.",cn:"刻意地",def:"On purpose, not by accident.",ex:"He deliberately arrived early to find a quiet seat.",exCn:"他刻意提早到，好找個安靜的座位。"},
    {w:"naive",ipa:"/naɪˈiːv/",pos:"adj.",cn:"天真的",def:"Believing things too easily; lacking experience.",ex:"It was naive of us to think the road would be empty on a holiday.",exCn:"我們以為假日路上會沒什麼車，真是太天真了。"},
    {w:"emergency",ipa:"/ɪˈmɝː.dʒən.si/",pos:"n.",cn:"緊急狀況",def:"A serious situation that needs action right away.",ex:"In an emergency, call the hotel desk first.",exCn:"遇到緊急狀況，請先打給飯店櫃檯。"}
  ],
  questions:[
    {q:"What had Anita promised herself?",
     opts:["A. To ask for a raise","B. To stop working late on weekdays","C. To change her job","D. To finish every report early"],
     ans:1,
     expl:"第一段：She remembered promising herself to stop working late on weekdays。"},
    {q:"According to the writer, why do the extra hours accumulate?",
     opts:["A. Managers cannot plan their work","B. Agreeing seems cheap, and the more we agree, the more others expect","C. Reports are always urgent","D. Employees enjoy working late"],
     ans:1,
     expl:"第二段：agreeing costs only an hour, or so it seems ... the more we agree, the more others expect us to agree。"},
    {q:"What did Anita do differently the following week?",
     opts:["A. She refused every request","B. She left the office early","C. She stopped to ask when the report was due","D. She asked another colleague to do it"],
     ans:2,
     expl:"第三段：she stopped to ask when the report was actually due。"},
    {q:"What is the difference between “stopped to ask” and “stopped treating”?",
     opts:["A. They mean exactly the same","B. “Stopped to ask” = paused in order to ask; “stopped treating” = ended a habit","C. “Stopped to ask” = ended a habit; “stopped treating” = paused in order to ask","D. Both mean she asked a question"],
     ans:1,
     expl:"stop + to V 是「停下來去做某事」；stop + V-ing 是「不再做某事」。文章裡兩種用法同時出現。"}
  ],
  upgrade:[
    {b1:"Saying no is hard. Saying yes is easy.",
     b2:"Most people find it easier to agree than to refuse.",
     note:"find it + 形容詞 + to V：用 it 當形式受詞，再用比較級 easier ... than ... 做對比，一句涵蓋整個論點。",
     sp:"Honestly, it's way easier to just say yes than to say no.",
     spNote:"way easier 是口語的「遠比…容易」，just 帶出「乾脆答應算了」的語氣。",
     b1Cn:"說不很難。說好很容易。",
     b2Cn:"大多數人覺得同意比拒絕容易。",
     spCn:"說真的，直接說好比說不容易多了。"},
    {b1:"If we say yes a lot, people ask us for more.",
     b2:"The more we agree, the more others expect us to agree.",
     note:"the + 比較級 ..., the + 比較級 ... 表示「越……就越……」，兩件事同步增加。",
     sp:"Say yes once and suddenly everyone expects it every time.",
     spNote:"口語把 If 省掉，直接用祈使句 Say yes once and ... 表達條件。",
     b1Cn:"如果我們常常說好，別人就會要求更多。",
     b2Cn:"我們答應得越多，別人就越期待我們答應。",
     spCn:"答應一次，突然大家就覺得你每次都會答應。"}
  ]
},

/* ---------------------------------------------------------- 25 */
{
  id:"r25", level:"B2", topic:"環境與都市", words:260,
  title:"The Truck That Plays Music Every Evening",
  titleCn:"每晚唱歌的垃圾車",
  focus:"目的與結果子句（in order to / so that / so ... that / such ... that）",
  intro:"從台北的垃圾車說到都市政策。注意表示「目的」的 in order to、so as to、so that，以及表示「結果」的 so ... that、such ... that，它們在說明政策動機時非常好用。",
  spoken:[
    {en:"In Taiwan, a truck plays music every evening, and people bring their rubbish down to hand it over.",cn:"在台灣，垃圾車每天傍晚放著音樂，大家把垃圾帶下樓親手交給清潔人員。"},
    {en:"Taipei started charging for general rubbish bags so people would throw away less.",cn:"台北開始對一般垃圾袋收費，好讓大家少丟一點。"},
    {en:"Recycling is free, so sorting is worth the effort.",cn:"回收是免費的，所以花力氣分類很划算。"},
    {en:"It takes time, but most residents think it's a fair price for clean streets.",cn:"這很花時間，但大多數居民覺得為了乾淨的街道，這樣很值得。"}
  ],
  paras:[
    {en:"In Taiwan, rubbish collection is a small daily event. Official bags are sold in convenience stores in several sizes, so even the smallest apartment has to think about how much it throws away. Every evening a truck plays a tune, and residents carry their bags down to hand them over in person. The system is so familiar that most locals never think about it, yet visitors are often surprised by how much effort it involves.",
     cn:"在台灣，收垃圾是一件小小的每日大事。官方垃圾袋在便利商店就買得到，有好幾種尺寸，所以就算是再小的住家，也得想想自己到底丟了多少東西。每天傍晚，垃圾車會播放一段旋律，居民提著垃圾袋下樓，親手交給清潔人員。這套制度對本地人來說太熟悉了，大家根本不會多想，但訪客常常驚訝於它需要花多少功夫。"},
    {en:"The system was designed in order to solve a real problem. In the early 2000s, Taipei was producing such large amounts of waste that its landfills were almost full. The city introduced a charge for general rubbish bags so that people would have a reason to throw away less. Recyclables, by contrast, were collected free of charge.",
     cn:"這套制度是為了解決一個真實的問題而設計的。在 2000 年代初期，台北製造的垃圾量大到讓掩埋場幾乎滿載。市政府對一般垃圾袋開始收費，讓大家有理由少丟一點；相對地，資源回收物則是免費收取。"},
    {en:"The results were encouraging. Recycling rates climbed steadily, and the amount of household waste per person fell. The system works partly because it is so predictable: residents sort their rubbish carefully so as to avoid fines, and collectors check bags to make sure the rules are followed. Neighbours often chat while they wait for the truck, which gives the routine an unexpected social side.",
     cn:"成果令人鼓舞。回收率穩定攀升，每人的家戶垃圾量也下降了。這套制度之所以有效，部分原因在於它太可預期：居民仔細分類垃圾以避免罰款，清潔人員也會檢查垃圾袋，確保大家遵守規則。鄰居們常在等垃圾車的時候聊天，讓這個例行公事多了一層意想不到的社交面向。"},
    {en:"Critics point out that the approach demands a lot of time, particularly from working people who cannot be home at the right hour. Even so, many residents defend it. Such a routine, they argue, is a small price to pay for clean streets and a shared sense of responsibility. It is a system inconvenient enough to change habits, and simple enough to keep them.",
     cn:"批評者指出，這種做法需要花很多時間，尤其對無法在固定時間待在家的上班族來說。即便如此，仍有許多居民為它辯護。他們認為，這樣的日常，是為了乾淨的街道和共同的責任感而付出的小小代價。這套制度夠不方便，足以改變習慣；又夠簡單，足以讓習慣持續下去。"}
  ],
  target:[
    {w:"collection",ipa:"/kəˈlekʃn/",pos:"n.",cn:"收集；收取",def:"The act of taking things away from many places.",ex:"The museum has a large collection of old coins.",exCn:"這間博物館有大量的古錢幣收藏。"},
    {w:"resident",ipa:"/ˈrezɪdənt/",pos:"n.",cn:"居民",def:"A person who lives in a particular place.",ex:"Residents of the tower can use the rooftop garden.",exCn:"大樓的住戶可以使用頂樓花園。"},
    {w:"landfill",ipa:"/ˈlændfɪl/",pos:"n.",cn:"垃圾掩埋場",def:"A large area where waste is buried under the ground.",ex:"Most of the old furniture ended up in a landfill outside the city.",exCn:"大部分舊家具最後都被送到城外的掩埋場。"},
    {w:"charge",ipa:"/tʃɑːrdʒ/",pos:"n.",cn:"費用",def:"An amount of money that you must pay for something.",ex:"There is no charge for children under six.",exCn:"六歲以下兒童免費。"},
    {w:"recyclable",ipa:"/riːˈsaɪkləbl/",pos:"adj.",cn:"可回收的",def:"Able to be processed and used again.",ex:"Check that the cup is recyclable before you put it in the blue bin.",exCn:"把杯子丟進藍色回收桶之前，先確認它可以回收。"},
    {w:"predictable",ipa:"/prɪˈdɪktəbl/",pos:"adj.",cn:"可預測的",def:"Happening in a way that you expect.",ex:"The ending of the film was so predictable that we laughed.",exCn:"這部電影的結局太好猜，我們都笑了。"},
    {w:"fine",ipa:"/faɪn/",pos:"n.",cn:"罰款",def:"Money that you must pay as a punishment.",ex:"She paid a small fine for returning the book late.",exCn:"她因為太晚還書，繳了一小筆罰款。"},
    {w:"critic",ipa:"/ˈkrɪtɪk/",pos:"n.",cn:"批評者；評論家",def:"A person who says what is wrong or good about something.",ex:"The critic gave the new restaurant three stars out of five.",exCn:"那位評論家給了這家新餐廳五顆星裡的三顆。"},
    {w:"responsibility",ipa:"/rɪˌspɑːnsəˈbɪləti/",pos:"n.",cn:"責任",def:"A duty to take care of something or someone.",ex:"Taking care of the shared kitchen is everyone's responsibility.",exCn:"照顧共用廚房是每個人的責任。"}
  ],
  questions:[
    {q:"What happens in Taiwan every evening, according to the first paragraph?",
     opts:["A. Streets are closed to traffic","B. A truck plays a tune and residents hand over their rubbish","C. Residents leave bags outside their doors","D. Factories stop producing waste"],
     ans:1,
     expl:"第一段：Every evening a truck plays a tune, and residents carry their bags down to hand them over in person。"},
    {q:"Why did the city introduce a charge for general rubbish bags?",
     opts:["A. To earn more money from tourists","B. To give people a reason to throw away less","C. To close the recycling centres","D. To replace the garbage trucks"],
     ans:1,
     expl:"第二段：so that people would have a reason to throw away less。"},
    {q:"What do critics say about the system?",
     opts:["A. It costs too much for the city","B. It demands a lot of time from working people","C. It produces more waste","D. It is too difficult to understand"],
     ans:1,
     expl:"第四段：the approach demands a lot of time, particularly from working people。"},
    {q:"In “so that people would have a reason”, what does “so that” express?",
     opts:["A. Purpose","B. Contrast","C. Condition","D. Time"],
     ans:0,
     expl:"so that + would 表示「為了讓……」的目的，不是結果或條件。"}
  ],
  upgrade:[
    {b1:"The city made people pay for bags. People will use fewer bags.",
     b2:"The city introduced a charge so that people would have a reason to throw away less.",
     note:"so that + 子句表示目的，而且主詞可以和主要子句不同（city / people）；用 would 是因為主要動詞是過去式。",
     sp:"They put a price on the bags to get people to throw less away.",
     spNote:"get people to V（讓人去做某事）是口語最自然的「為了讓大家……」。",
     b1Cn:"市府讓人們為垃圾袋付費。人們會少用垃圾袋。",
     b2Cn:"市府開始收費，好讓人們有理由少丟一點垃圾。",
     spCn:"他們幫垃圾袋定了價，讓大家少丟一點東西。"},
    {b1:"There was a lot of waste. The landfills were nearly full.",
     b2:"Taipei was producing such large amounts of waste that its landfills were almost full.",
     note:"such + 形容詞 + 名詞 + that 子句：前面說程度，that 後面說結果，一句連貫。",
     sp:"There was so much trash the landfills were basically full.",
     spNote:"口語常把 so much ... that 的 that 省略；basically 是口語常見的緩和副詞。",
     b1Cn:"垃圾很多。掩埋場快滿了。",
     b2Cn:"台北製造的垃圾量大到掩埋場幾乎滿了。",
     spCn:"垃圾多到掩埋場基本上都滿了。"}
  ]
},

/* ---------------------------------------------------------- 26 */
{
  id:"r26", level:"B1", topic:"家庭與童年", words:200,
  title:"Summers at Grandpa's House",
  titleCn:"在爺爺家過暑假",
  focus:"used to / would 與 be used to（過去的習慣 vs. 習慣某件事）",
  intro:"Anita 回想小時候在爺爺家的暑假，再對照現在的城市生活。注意 used to / would 說「以前常常這樣（現在不了）」，而 be used to + 名詞 / V-ing 說「現在已經習慣了」。",
  spoken:[
    {en:"I used to spend every summer at my grandparents' place near Tainan.",cn:"我以前每年暑假都會待在台南附近的爺爺奶奶家。"},
    {en:"Grandpa would go to the market before six and come back with hot soy milk.",cn:"爺爺六點前就會去市場，回來時帶著熱豆漿。"},
    {en:"These days I'm used to the noise in Taipei, so the quiet felt weird.",cn:"我現在已經習慣台北的吵雜，所以那種安靜反而很怪。"},
    {en:"But I used to love that quiet, you know?",cn:"不過我以前其實很愛那種安靜，你知道嗎？"}
  ],
  paras:[
    {en:"When Anita was a child, she spent every summer at her grandparents' house in a small town near Tainan. Life there was very different from her life in the city.",
     cn:"Anita 小時候，每年暑假都待在台南附近小鎮的爺爺奶奶家。那裡的生活和她在城市的生活很不一樣。"},
    {en:"Her grandfather used to wake up at five o'clock every morning. He would walk to the market, buy fresh fish, and bring home hot soy milk for everyone. Anita never used to get up so early at home, but in the village she always did.",
     cn:"她的爺爺以前每天早上五點就起床。他會走去市場，買新鮮的魚，再帶熱豆漿回家給大家喝。Anita 在家從來不會這麼早起，但在鄉下她總是起得來。"},
    {en:"In the afternoons, the children used to play outside until it got dark. They would catch small fish in the river and ride old bicycles along the rice fields. There were no tablets or video games, and nobody missed them.",
     cn:"下午，孩子們以前都在外面玩到天黑。他們會在小河裡抓小魚，騎著舊腳踏車穿過稻田。那時沒有平板電腦或電動，也沒有人想念它們。"},
    {en:"Now Anita is thirty, and she lives in a busy apartment in Taipei. She is used to the noise of the city, and she is used to eating dinner at her desk. But last month she visited her grandparents again, and the quiet felt strange.",
     cn:"現在 Anita 三十歲，住在台北一間熱鬧的公寓裡。她習慣了城市的吵雜，也習慣坐在書桌前吃晚餐。但上個月她再回去看爺爺奶奶時，那份安靜讓她覺得很陌生。"},
    {en:"She could not sleep on the first night. Then she remembered something. She used to love that silence! On the second morning she got up early, walked to the market, and bought hot soy milk. Some habits never really disappear.",
     cn:"第一個晚上她睡不著。接著她想起一件事：她以前明明很愛那份寧靜！第二天早上，她很早起床，走去市場，買了熱豆漿。有些習慣其實永遠不會消失。"}
  ],
  target:[
    {w:"fresh",ipa:"/freʃ/",pos:"adj.",cn:"新鮮的",def:"Recently made, picked or caught; not old.",ex:"The vegetables at this stall are always cheap and fresh.",exCn:"這個攤位的蔬菜總是又便宜又新鮮。"},
    {w:"river",ipa:"/ˈrɪvɚ/",pos:"n.",cn:"河；河流",def:"A long natural stream of water that flows to the sea.",ex:"We had a picnic by the river last Sunday.",exCn:"我們上週日在河邊野餐。"},
    {w:"strange",ipa:"/streɪndʒ/",pos:"adj.",cn:"奇怪的；陌生的",def:"Unusual or not familiar in a way that is hard to understand.",ex:"It felt strange to hear my own voice on the recording.",exCn:"聽到錄音裡自己的聲音，感覺很奇怪。"},
    {w:"silence",ipa:"/ˈsaɪləns/",pos:"n.",cn:"寂靜；沉默",def:"A time when there is no sound at all.",ex:"After the music stopped, a long silence filled the hall.",exCn:"音樂停止後，長長的寂靜充滿了大廳。"},
    {w:"habit",ipa:"/ˈhæbɪt/",pos:"n.",cn:"習慣",def:"Something you do often, usually without thinking.",ex:"Drinking a glass of water before breakfast is a good habit.",exCn:"早餐前喝一杯水是個好習慣。"},
    {w:"disappear",ipa:"/ˌdɪsəˈpɪr/",pos:"v.",cn:"消失",def:"To go away so that you cannot be seen any more.",ex:"The stars disappear when the morning sky gets bright.",exCn:"早晨天空變亮時，星星就消失了。"}
  ],
  questions:[
    {q:"What did Anita's grandfather bring home from the market?",
     opts:["A. Fresh fruit","B. Hot soy milk","C. Rice and eggs","D. A new bicycle"],
     ans:1,
     expl:"第二段：He would walk to the market, buy fresh fish, and bring home hot soy milk for everyone。"},
    {q:"Which sentence means that Anita is comfortable with the city noise now?",
     opts:["A. She used to live in the city.","B. She is used to the noise of the city.","C. She would hear the noise of the city.","D. She used the noise of the city."],
     ans:1,
     expl:"be used to + 名詞表示「已經習慣了」；used to + 原形動詞才是「以前常常（現在不了）」。"},
    {q:"What did Anita do on the second morning at her grandparents' house?",
     opts:["A. She caught fish in the river","B. She stayed in bed until noon","C. She went to the market and bought soy milk","D. She went back to Taipei"],
     ans:2,
     expl:"最後一段：On the second morning she got up early, walked to the market, and bought hot soy milk。"}
  ],
  upgrade:[
    {b1:"Anita lived in the city, and she liked the noise there.",
     b2:"Anita is used to the noise of the city.",
     note:"be used to + 名詞 / V-ing 表示「習慣了某件事」，比 liked 更貼近「久了就自然」的感覺。注意這裡的 to 是介系詞，後面不能接原形動詞。",
     sp:"I've gotten used to the noise — it doesn't bother me anymore.",
     spNote:"get / have gotten used to 強調「從不習慣變成習慣」的過程，口語很常用。",
     b1Cn:"Anita 住在城市裡，而且她喜歡那裡的吵雜。",
     b2Cn:"Anita 已經習慣了城市的吵雜。",
     spCn:"我已經習慣那種吵雜了——現在一點也不會被影響。"},
    {b1:"Every morning her grandfather walked to the market. He did it for many years.",
     b2:"Her grandfather used to wake up at five and would walk to the market.",
     note:"used to 說過去的狀態或習慣，would 只能說過去重複的動作；兩個都在說「以前是這樣，現在不了」。",
     sp:"Back then, Grandpa was always up at five, heading to the market.",
     spNote:"口語常用 back then 和 was always ...ing 來說「那時候總是……」，不用刻意背 used to。",
     b1Cn:"每天早上，她的爺爺都走去市場。他這樣做了很多年。",
     b2Cn:"她的爺爺以前五點就起床，而且會走去市場。",
     spCn:"那時候爺爺總是五點就起床，往市場走去。"}
  ]
},

/* ---------------------------------------------------------- 27 */
{
  id:"r27", level:"B1+", topic:"夜市與小生意", words:224,
  title:"The Dark Stall at the Night Market",
  titleCn:"夜市裡暗著的攤位",
  focus:"情態動詞推測（must / might / could / can't + have p.p.）",
  intro:"Tom 在夜市發現熟悉的攤位沒開，開始猜原因。注意 must / can't 表示很有把握的推測，might / could 表示沒那麼確定；猜過去的事用 must have / might have / can't have + p.p.。",
  spoken:[
    {en:"The chicken stall was closed, which is weird. He's always there by six.",cn:"炸雞攤今天沒開，很奇怪，他六點前一定都在。"},
    {en:"He might have caught a cold. It's been freezing all week.",cn:"他可能感冒了。整個禮拜都冷得要命。"},
    {en:"It can't have been the license — I just saw a new certificate on the wall.",cn:"不可能是執照的問題——我才剛看到牆上貼了新的證書。"},
    {en:"Turns out his wife was having a baby. He must have been so excited!",cn:"原來他太太要生了。他一定超興奮的！"}
  ],
  paras:[
    {en:"Last Saturday, Tom went to his favorite night market in Kaohsiung to buy his usual fried chicken. When he arrived, the stall was dark, and the metal door was closed. Around him, the street was busy and full of the smell of grilled food. “That's strange,” he thought. “The owner is always here by six o'clock.”",
     cn:"上週六，Tom 去了他最愛的高雄夜市，想買平常吃的炸雞。他到的時候，攤位黑漆漆的，鐵門也拉下來了。四周的街道熱鬧擁擠，空氣中滿是烤肉的香味。「好奇怪，」他想。「老闆六點前一定都會在。」"},
    {en:"Tom stood there and made some guesses. The owner might have caught a cold, because the weather had been freezing all week. Or perhaps there was a family emergency. It couldn't be a holiday, since the other stalls were all open. And it can't have been a problem with the license, because Tom had seen a new certificate on the wall only a week earlier.",
     cn:"Tom 站在那裡，開始猜原因。老闆可能感冒了，因為整個禮拜天氣都冷得要命。或者也許是家裡出了緊急狀況。不可能是放假，因為其他攤位都有開。也不可能是執照出問題，因為 Tom 才在一個禮拜前看到牆上貼了新的證書。"},
    {en:"A woman at the next stall noticed him looking worried. “You must be looking for Mr. Lin,” she said. “He's at the hospital with his wife. She's having a baby tonight!” Tom laughed with relief. The owner must have been very excited when he left in such a hurry.",
     cn:"隔壁攤的一位女士注意到他一臉擔心。「你一定是在找林老闆，」她說。「他和太太在醫院。她今晚要生了！」Tom 鬆了一口氣，笑了出來。老闆匆匆離開時，心情一定非常興奮。"},
    {en:"Tom bought dinner from another stall, but the chicken wasn't as good. On his way home, he wrote a short note: “Congratulations, Mr. Lin! We'll wait for you.” He stuck it on the closed door, hoping the family would see it on Monday. “Next time,” he thought, “I'll stop guessing and just ask someone.”",
     cn:"Tom 在別的攤位買了晚餐，但那裡的雞肉沒那麼好吃。回家的路上，他寫了一張短短的字條：「恭喜林老闆！我們等你回來。」他把字條貼在拉下來的鐵門上，希望一家人週一能看到。「下次，」他想，「我不要再亂猜了，直接問人就好。」"}
  ],
  target:[
    {w:"stall",ipa:"/stɑːl/",pos:"n.",cn:"攤位；小攤",def:"A small open shop where goods are sold, often in a market.",ex:"My aunt runs a tea stall near the train station.",exCn:"我阿姨在火車站附近經營一個茶攤。"},
    {w:"emergency",ipa:"/ɪˈmɝː.dʒən.si/",pos:"n.",cn:"緊急狀況",def:"A serious situation that needs quick action.",ex:"Call this number if you have a medical emergency.",exCn:"如果有醫療上的緊急狀況，請撥這支電話。"},
    {w:"guess",ipa:"/ɡes/",pos:"v.",cn:"猜測",def:"To give an answer without knowing for sure.",ex:"Can you guess how old my neighbor's dog is?",exCn:"你猜得出我鄰居的狗幾歲嗎？"},
    {w:"certificate",ipa:"/sɚˈtɪfɪkət/",pos:"n.",cn:"證書；證明",def:"An official paper that shows something is true or allowed.",ex:"She hung her swimming certificate above her desk.",exCn:"她把游泳證書掛在書桌上方。"},
    {w:"worried",ipa:"/ˈwɝːid/",pos:"adj.",cn:"擔心的",def:"Unhappy because you think something bad may happen.",ex:"Mom was worried when I didn't answer my phone.",exCn:"我沒接電話，媽媽很擔心。"},
    {w:"relief",ipa:"/rɪˈliːf/",pos:"n.",cn:"鬆一口氣；寬慰",def:"A happy feeling when something bad did not happen.",ex:"It was a relief to find my keys in the car.",exCn:"在車子裡找到鑰匙，讓我鬆了一口氣。"},
    {w:"hurry",ipa:"/ˈhɝːi/",pos:"n.",cn:"匆忙",def:"A need to do something very quickly.",ex:"The students ran out of the classroom in a hurry.",exCn:"學生們匆匆忙忙跑出教室。"},
    {w:"congratulations",ipa:"/kənˌɡrætʃəˈleɪʃənz/",pos:"n.",cn:"恭喜",def:"Words you say to show that you are happy about someone's good news.",ex:"Congratulations on your new job at the bank!",exCn:"恭喜你在銀行找到新工作！"}
  ],
  questions:[
    {q:"Why was Tom surprised when he got to the stall?",
     opts:["A. The chicken was very expensive","B. The stall was dark and closed even though the owner is always there","C. The market was closed on Saturdays","D. There was a long line"],
     ans:1,
     expl:"第一段：the stall was dark... The owner is always here by six o'clock。"},
    {q:"Why does Tom think it can't have been a problem with the license?",
     opts:["A. The other stalls were closed too","B. The owner told him last week","C. He saw a new certificate on the wall a week earlier","D. He had called the owner"],
     ans:2,
     expl:"第二段：it can't have been a problem with the license, because Tom had seen a new certificate on the wall。"},
    {q:"What does “The owner must have been very excited” show?",
     opts:["A. A strong guess about the past","B. A rule that the owner must follow","C. A plan for the future","D. A polite request"],
     ans:0,
     expl:"must have + p.p. 表示對過去的事「很有把握的推測」，不是「必須」。"},
    {q:"What did Tom do before he went home?",
     opts:["A. He waited until the owner came back","B. He called the hospital","C. He wrote a note and stuck it on the closed door","D. He bought the stall"],
     ans:2,
     expl:"最後一段：he wrote a short note ... He stuck it on the closed door。"}
  ],
  upgrade:[
    {b1:"Maybe the owner was sick. Maybe he caught a cold.",
     b2:"The owner might have caught a cold.",
     note:"might / could + have p.p. 表示「過去可能發生，但不太確定」；把 maybe 的猜測濃縮成一個情態動詞。",
     sp:"Maybe he came down with something — it's been so cold lately.",
     spNote:"come down with + 病名是口語說「生病了」的常見講法，聽起來更自然。",
     b1Cn:"也許老闆生病了。也許他感冒了。",
     b2Cn:"老闆可能感冒了。",
     spCn:"也許他染上了什麼病——最近真的好冷。"},
    {b1:"I am sure it was not a problem with the license, because I saw a new certificate.",
     b2:"It can't have been a problem with the license; I saw a new certificate.",
     note:"can't have + p.p. 表示「根據證據，我確定過去不可能是這樣」，語氣比 I am sure ... not 更簡潔有力。",
     sp:"No way it was the license — I literally just saw the new certificate.",
     spNote:"No way + 子句是口語說「不可能」的方式，搭配 literally just 強調剛剛才看到。",
     b1Cn:"我確定不是執照出問題，因為我看到了新的證書。",
     b2Cn:"不可能是執照出問題；我看到了新的證書。",
     spCn:"不可能是執照啦——我才剛看到新的證書。"}
  ]
},

/* ---------------------------------------------------------- 28 */
{
  id:"r28", level:"B2", topic:"志工與社區服務", words:280,
  title:"Two Hours Every Saturday",
  titleCn:"每個星期六的兩個小時",
  focus:"未來完成式與未來進行式（will have done / will have been doing / will be doing）",
  intro:"Anita 在越南的社區中心當了一年志工。注意 by + 未來時間點搭配 will have + p.p.（到那時已完成）與 will have been + V-ing（到那時已持續多久），以及 will be + V-ing 交代「那天正在進行的事」；by the time 後面的時間子句一律用現在簡單式。",
  spoken:[
    {en:"I started helping out at the community centre almost by accident.",cn:"我會去社區中心幫忙，幾乎是個意外。"},
    {en:"By the end of this month I'll have been going for a whole year.",cn:"到這個月底，我就整整去了一年了。"},
    {en:"Next Saturday I'll be reading with a group of six-year-olds.",cn:"下個星期六我會跟一群六歲的孩子一起讀故事。"},
    {en:"Two hours a week isn't much, but I keep turning up.",cn:"一週兩小時不算多，但我一直都有出現。"}
  ],
  paras:[
    {en:"Anita started volunteering almost by accident. A colleague mentioned that a community centre near the industrial park needed someone to sit with the workers' children on Saturday mornings, while their parents queued downstairs for free health checks. She agreed to try it once. By the end of this month she will have been going for a full year, and those two hours have quietly become the part of her week she protects most carefully.",
     cn:"Anita 會開始當志工，幾乎是個意外。一位同事提起，工業區附近的社區中心需要有人在星期六早上陪工人的孩子，那時他們的父母正在樓下排隊等免費健康檢查。她答應去試一次。到這個月底，她就已經持續去滿一年了，而那兩個小時也悄悄變成她一週裡守得最緊的時段。"},
    {en:"The room above a laundry holds twelve low chairs, a whiteboard and a shelf of battered picture books. Local shops donate what they can, so almost nothing in the room was bought. Anita follows no syllabus. She reads aloud, asks the children to retell the story in their own words, and lets them copy whichever sentences they like. Next Saturday she will be working with a new group of six-year-olds.",
     cn:"洗衣店樓上那個房間裡有十二張矮椅、一塊白板，還有一櫃翻得破破爛爛的故事書。附近的店家捐出他們拿得出來的東西，所以房間裡幾乎沒有一件是買的。Anita 不照任何課程大綱走。她唸故事給孩子聽，請他們用自己的話把故事重說一遍，想抄哪幾句就抄哪幾句。下個星期六，她就會在帶一組新的六歲孩子了。"},
    {en:"The centre plans carefully, because volunteers come and go. By December it will have trained nine new helpers, and by the time the rainy season ends, every Saturday slot will have been filled twice over. The coordinator says this matters far more than enthusiasm: a child who arrives to find the door locked rarely comes back, however warmly the adults talked about helping.",
     cn:"社區中心把事情排得很仔細，因為志工來來去去。到十二月，它就已經訓練完九位新幫手；等雨季結束的時候，每一個星期六的時段都會被排滿兩輪。那位統籌的人說，這件事遠比熱情重要：一個孩子來了卻發現門鎖著，就很少會再來，不管當初大人把「要來幫忙」講得多熱切。"},
    {en:"Anita is honest about the limits of two hours a week. She will not have taught anyone to read by next summer, and she knows it. What she can offer is a room that opens when it says it will. Next year, if nothing changes, she will still be sitting on the same low chair with the same worn books. Some kinds of usefulness, she says, only appear when you keep turning up.",
     cn:"對於一週兩小時的限度，Anita 很誠實。到明年夏天，她不會已經教會任何人閱讀，這點她自己清楚。她能給的，是一個「說會開就真的會開」的房間。明年，如果沒什麼變化，她還是會坐在同一張矮椅上，手裡還是那幾本翻舊的書。她說，有些用處只有在你一直出現的時候才會浮出來。"}
  ],
  target:[
    {w:"volunteer",ipa:"/ˌvɑː.lənˈtɪr/",pos:"n./v.",cn:"志工；自願幫忙",def:"A person who works without pay to help others.",ex:"Three volunteers carried the boxes up to the second floor.",exCn:"三位志工把箱子搬上二樓。"},
    {w:"colleague",ipa:"/ˈkɑː.liːɡ/",pos:"n.",cn:"同事",def:"A person you work with.",ex:"My colleague lent me her umbrella when the rain started.",exCn:"下雨的時候，我同事把她的傘借給我。"},
    {w:"queue",ipa:"/kjuː/",pos:"v.",cn:"排隊",def:"To stand in a line and wait for your turn.",ex:"We queued outside the bakery for twenty minutes.",exCn:"我們在麵包店外排了二十分鐘的隊。"},
    {w:"syllabus",ipa:"/ˈsɪl.ə.bəs/",pos:"n.",cn:"課程大綱",def:"A plan that shows what a course will teach.",ex:"The teacher handed out the syllabus on the first day.",exCn:"老師在第一天就把課程大綱發下來。"},
    {w:"donate",ipa:"/doʊˈneɪt/",pos:"v.",cn:"捐贈",def:"To give something in order to help people.",ex:"Several families donate rice to the temple every winter.",exCn:"每年冬天都有幾戶人家捐米給廟裡。"},
    {w:"coordinator",ipa:"/koʊˈɔːrdɪneɪtɚ/",pos:"n.",cn:"統籌者；協調人",def:"A person who organizes people and work.",ex:"Ask the coordinator which bus will take us to the site.",exCn:"去問統籌的人，哪一班公車會載我們到現場。"},
    {w:"enthusiasm",ipa:"/ɪnˈθuːziæzəm/",pos:"n.",cn:"熱情；熱忱",def:"A strong feeling of interest and excitement.",ex:"His enthusiasm for cooking faded after he burned the fish.",exCn:"他把魚烤焦之後，對做菜的熱情就退了。"},
    {w:"battered",ipa:"/ˈbæt̬.ɚd/",pos:"adj.",cn:"破舊的；用得很舊的",def:"Old and damaged because it has been used a lot.",ex:"She still drives a battered blue van from the nineties.",exCn:"她到現在還開著一台九〇年代的破舊藍色廂型車。"},
    {w:"slot",ipa:"/slɑːt/",pos:"n.",cn:"（安排好的）時段",def:"A period of time kept for one thing.",ex:"Only the eight o'clock slot was still free.",exCn:"只剩八點那個時段還空著。"},
    {w:"limit",ipa:"/ˈlɪmɪt/",pos:"n.",cn:"限度；極限",def:"The point where something stops being possible.",ex:"Everyone has a limit, and he reached his after three night shifts.",exCn:"每個人都有極限，他上了三個夜班之後就到了。"}
  ],
  questions:[
    {q:"Why did Anita first go to the community centre?",
     opts:["A. She wanted to teach English professionally","B. A colleague told her the centre needed someone on Saturday mornings","C. The centre offered to pay her","D. Her own children went there"],
     ans:1,
     expl:"第一段：A colleague mentioned that a community centre near the industrial park needed someone to sit with the workers' children on Saturday mornings。"},
    {q:"Where do most of the things in the room come from?",
     opts:["A. The city government buys them","B. The children bring them from home","C. Local shops give them away","D. They are rented from a bookshop"],
     ans:2,
     expl:"第二段：Local shops donate what they can, so almost nothing in the room was bought。"},
    {q:"According to the coordinator, what matters most?",
     opts:["A. Having as many volunteers as possible","B. Following a clear syllabus","C. Being there reliably, so the door is never locked","D. Collecting more picture books"],
     ans:2,
     expl:"第三段：a child who arrives to find the door locked rarely comes back, however warmly the adults talked about helping。"},
    {q:"In “she will have been going for a full year”, what does the sentence tell us?",
     opts:["A. How long the activity will have lasted by a future point","B. That she is going there right now","C. That she went there only once in the past","D. That she has decided to stop going"],
     ans:0,
     expl:"will have been + V-ing（未來完成進行式）是站在未來的時間點回看，說「到那時已經持續多久」，所以後面接 for a full year。"}
  ],
  upgrade:[
    {b1:"She has gone there for almost a year. This month it will be one year.",
     b2:"By the end of this month she will have been going for a full year.",
     note:"未來完成進行式 will have been + V-ing：站在未來的時間點（這個月底）回看一段持續到那時的時間，一句就把起點、持續與終點講完；時間長度用 for。",
     sp:"This month makes it a year — she's been going every Saturday.",
     spNote:"口語常用 this month makes it ... 代替未來完成式，再用現在完成進行式補上「一直持續」的感覺。",
     b1Cn:"她去那裡快一年了。這個月就滿一年。",
     b2Cn:"到這個月底，她就已經持續去滿一年了。",
     spCn:"這個月就滿一年了——她每個星期六都去。"},
    {b1:"Next Saturday she is going to work with a new group of six-year-olds.",
     b2:"Next Saturday she will be working with a new group of six-year-olds.",
     note:"will be + V-ing（未來進行式）把未來的事當成「到那個時間點正在進行中」的背景，語氣比 be going to 中性，不帶「我已經決定」的味道。",
     sp:"She's with the new six-year-olds this Saturday.",
     spNote:"口語常直接用現在進行式講已經排定的未來，連 will 都省掉。",
     b1Cn:"下個星期六她要帶一組新的六歲孩子。",
     b2Cn:"下個星期六，她就會在帶一組新的六歲孩子了。",
     spCn:"這個星期六她帶那群新來的六歲小孩。"}
  ]
},

/* ---------------------------------------------------------- 29 */
{
  id:"r29", level:"B1", topic:"寵物與照顧", words:216,
  title:"A Cat for Three Weeks",
  titleCn:"只借住三個星期的貓",
  focus:"第一條件句與 unless / as long as / in case",
  intro:"Tom 答應當三個星期的貓中途。注意 if 子句用現在簡單式、主句用 will 或祈使句；unless 等於 if ... not，as long as 是「只要……就」，in case 則是「以防萬一」，事情還沒發生。",
  spoken:[
    {en:"I never planned to have a pet, but the shelter needed a foster home.",cn:"我從來沒打算養寵物，但收容所需要中途之家。"},
    {en:"If he hides under the bed, just leave him alone.",cn:"如果他躲到床底下，就別去管他。"},
    {en:"Keep the windows shut in case he tries to climb out.",cn:"把窗戶關好，以防他想爬出去。"},
    {en:"As long as you sit still, he will come to you.",cn:"只要你坐著不動，他就會自己過來。"}
  ],
  paras:[
    {en:"Tom never planned to have a pet. Then an animal shelter near his office asked for foster homes for three weeks, and he said yes before he had time to think. The cat arrived on a Friday evening in a cardboard box.",
     cn:"Tom 從來沒打算養寵物。後來辦公室附近一間動物收容所在找三個星期的中途之家，他還沒來得及細想就答應了。那隻貓在一個星期五的傍晚到了，裝在一個硬紙板箱裡。"},
    {en:"The staff gave him three simple rules. If the cat hides, leave him alone. If he does not eat anything for a whole day, call the clinic. And keep the windows shut in case he tries to climb out.",
     cn:"工作人員給了他三條簡單的規則。如果貓躲起來，就別去管他。如果他一整天什麼都不吃，就打電話給診所。還有，窗戶要關好，以防他想爬出去。"},
    {en:"For two days the cat stayed behind the washing machine. Tom put a small bowl of food and some water nearby and waited. On Sunday night he heard a soft sound in the kitchen, and in the morning the bowl was empty.",
     cn:"頭兩天，那隻貓都待在洗衣機後面。Tom 在旁邊放了一小碗食物和一些水，然後等。星期天晚上，他聽見廚房傳來輕輕的聲音，到了早上，碗就空了。"},
    {en:"By the second week the cat slept on the sofa. Tom learned something useful: cats do not come when you call them, but as long as you sit still and say nothing, they will come to you. He gave the cat a name, Momo. That was probably a mistake.",
     cn:"到了第二個星期，那隻貓已經睡在沙發上。Tom 學到一件很有用的事：你叫貓，貓不會過來；但只要你坐著不動、什麼都不說，牠們就會自己走過來。他給那隻貓取了名字，叫 Momo。這大概是個錯誤。"},
    {en:"The three weeks ended last Saturday. A family came to meet Momo, and Tom agreed, as long as they promised to send photos. They do, almost every week. Tom tells everyone he is not going to foster again — unless the shelter calls him.",
     cn:"三個星期在上個星期六結束。一家人來看 Momo，Tom 答應了，條件是他們要答應寄照片來。他們真的有寄，幾乎每個星期都寄。Tom 跟每個人說他不會再當中途了——除非收容所打電話來找他。"}
  ],
  target:[
    {w:"shelter",ipa:"/ˈʃel.t̬ɚ/",pos:"n.",cn:"收容所；避難所",def:"A safe place where animals or people can stay.",ex:"The dog spent two months at the shelter before someone took him home.",exCn:"那隻狗在收容所待了兩個月，才有人把牠帶回家。"},
    {w:"foster",ipa:"/ˈfɔːstɚ/",pos:"v.",cn:"（短期）寄養；當中途",def:"To look after someone else's child or animal for a while.",ex:"Her neighbours foster puppies every spring.",exCn:"她的鄰居每年春天都會寄養小狗。"},
    {w:"cardboard",ipa:"/ˈkɑːrdbɔːrd/",pos:"n.",cn:"硬紙板",def:"Thick stiff paper used to make boxes.",ex:"We cut the cardboard into squares and painted them green.",exCn:"我們把硬紙板剪成方塊，再塗成綠色。"},
    {w:"clinic",ipa:"/ˈklɪnɪk/",pos:"n.",cn:"診所",def:"A small place where people see a doctor.",ex:"The clinic opens at nine and closes for lunch at twelve.",exCn:"那間診所九點開門，十二點休息吃午飯。"},
    {w:"bowl",ipa:"/boʊl/",pos:"n.",cn:"碗",def:"A round deep dish for food or water.",ex:"He filled the bowl with hot noodles and sat down.",exCn:"他把碗裝滿熱麵，然後坐了下來。"},
    {w:"promise",ipa:"/ˈprɑː.mɪs/",pos:"v.",cn:"承諾；答應",def:"To say that you will certainly do something.",ex:"I promise I will return your charger tomorrow.",exCn:"我保證明天把你的充電器還你。"}
  ],
  questions:[
    {q:"Why did the cat come to Tom's home?",
     opts:["A. He bought it from a pet shop","B. The shelter needed a foster home for three weeks","C. A neighbour moved away and left it","D. He found it in the street"],
     ans:1,
     expl:"第一段：an animal shelter near his office asked for foster homes for three weeks。"},
    {q:"“Keep the windows shut in case he tries to climb out.” What does “in case” mean here?",
     opts:["A. Because he has already climbed out","B. Only if he climbs out","C. To be ready for something that might happen","D. After he climbs out"],
     ans:2,
     expl:"in case 是「為了預防可能發生的事」，事情還沒發生；because（因為）和 only if（只有在……才）都不是這個意思。"},
    {q:"What did Tom ask the family to do?",
     opts:["A. To pay the shelter","B. To bring the cat back every month","C. To send him photos","D. To keep the windows shut"],
     ans:2,
     expl:"最後一段：Tom agreed, as long as they promised to send photos。"}
  ],
  upgrade:[
    {b1:"Maybe he will try to climb out of the window. So close it.",
     b2:"Keep the windows shut in case he tries to climb out.",
     note:"in case + 現在簡單式表示「為了預防某件可能發生的事」，事情還沒發生；注意 in case 後面不用 will。",
     sp:"Shut the windows — he might try to get out.",
     spNote:"口語常直接用 might 講可能性，再用破折號接原因，比 in case 輕鬆得多。",
     b1Cn:"他可能會想從窗戶爬出去。所以把窗戶關起來。",
     b2Cn:"把窗戶關好，以防他想爬出去。",
     spCn:"把窗戶關上——他可能會想跑出去。"},
    {b1:"Sit still and say nothing. Then the cat will come to you.",
     b2:"As long as you sit still and say nothing, they will come to you.",
     note:"as long as 就是「只要……就」，後面接現在簡單式、主句用 will；它比 if 更強調「這個條件一成立，結果就一定成立」。",
     sp:"Just sit there quietly and he'll come over.",
     spNote:"口語用 just ... and he'll ... 兩句並列，就等於 as long as 的條件句。",
     b1Cn:"坐著不動、什麼都不要說。然後貓就會走過來。",
     b2Cn:"只要你坐著不動、什麼都不說，牠們就會自己走過來。",
     spCn:"你就安靜坐在那，他自然會過來。"}
  ]
},
/* ---------------------------------------------------------- 30 */
{
  id:"r30", level:"B1+", topic:"二手與回收", words:239,
  title:"The Shelf Nobody Wanted",
  titleCn:"沒人想要的那個書架",
  focus:"-ed 與 -ing 形容詞（worried / worrying）",
  intro:"Tom 把家裡那個舊書架貼上二手社團送人。注意 -ing 形容詞（surprising、annoying、confusing）說的是「造成感覺的事物」，-ed 形容詞（disappointed、relieved、excited）說的是「有這種感覺的人」；find + 受詞 + -ing 也是很常見的句型。",
  spoken:[
    {en:"My place was so crowded that I finally put the old shelf online.",cn:"我家實在太擠了，最後我把那個舊書架貼上網。"},
    {en:"I was surprised — eleven people replied in one night.",cn:"我很驚訝——一個晚上就有十一個人回我。"},
    {en:"Some of the messages were really confusing, so I made one rule for everybody.",cn:"有些訊息真的很令人困惑，所以我訂了一條規則給所有人。"},
    {en:"Giving it away was more satisfying than selling it, honestly.",cn:"老實說，送出去比賣掉更讓人滿足。"}
  ],
  paras:[
    {en:"Tom's apartment in Taichung had become too crowded. A wooden shelf he had bought eight years earlier now held nothing but dusty boxes, so one evening he took a photo of it and posted it in a second-hand group online. He expected silence. The result was surprising: eleven people replied before midnight.",
     cn:"Tom 在台中的公寓變得太擠了。一個八年前買的木頭書架，現在上面除了積灰塵的紙箱什麼都沒有，所以某天傍晚他拍了張照，貼到網路上的二手社團。他以為不會有人理。結果令人意外：半夜之前就有十一個人回覆。"},
    {en:"The next two days were tiring. Several people asked for the exact size and then disappeared. One man offered half the price and called it a bargain, which Tom found annoying rather than funny. The messages became so confusing that in the end he wrote one short line to everybody: first come, first served, and please bring your own car.",
     cn:"接下來兩天很累人。好幾個人問了確切尺寸，然後就消失了。有個男的出了一半的價，還說這很划算，Tom 覺得這很惱人，而不是好笑。訊息多到讓人一頭亂，最後他乾脆寫了一句話給所有人：先到先得，而且請自己開車來載。"},
    {en:"On Saturday morning a young couple arrived. They were moving into their first apartment and were clearly excited about every piece of furniture they could find. Tom warned them about a long scratch down one side. They were not disappointed at all; the man said he would sand it down and polish it, because repairing old wood was relaxing for him.",
     cn:"星期六早上來了一對年輕夫妻。他們正要搬進人生第一間公寓，對於每一件能找到的家具都明顯興奮。Tom 先提醒他們側面有一道長長的刮痕。他們一點也不失望；那位先生說他會把刮痕磨平再上蠟，因為修舊木頭對他來說很放鬆。"},
    {en:"In the end they paid nothing. Tom decided to donate the shelf once he saw how carefully they wrapped it, and the couple left two bags of mangoes on his table instead. Standing in his suddenly empty corner, Tom felt relieved and, to his own surprise, a little proud. He has posted three more things since then. Nothing in that group is ever really thrown away.",
     cn:"最後他們一塊錢都沒付。Tom 看見他們包得那麼小心，就決定把書架直接送出去，那對夫妻則留了兩袋芒果在他桌上。站在那個突然空出來的角落，Tom 覺得鬆了一口氣，而且出乎自己意料地有點驕傲。從那之後他又貼出了三樣東西。那個社團裡沒有一樣東西是真的被丟掉的。"}
  ],
  target:[
    {w:"crowded",ipa:"/ˈkraʊdɪd/",pos:"adj.",cn:"擁擠的；塞滿東西的",def:"Too full of people or things.",ex:"The night bus to Hualien was so crowded that we stood all the way.",exCn:"開往花蓮的夜間巴士太擠了，我們一路都站著。"},
    {w:"surprising",ipa:"/sɚˈpraɪzɪŋ/",pos:"adj.",cn:"令人驚訝的",def:"Causing a feeling that you did not expect.",ex:"It is surprising how quickly children pick up a second language.",exCn:"孩子學第二語言的速度快得令人驚訝。"},
    {w:"bargain",ipa:"/ˈbɑːr.ɡɪn/",pos:"n.",cn:"便宜貨；划算的買賣",def:"Something you buy for much less than its usual price.",ex:"Two kilos of apples for fifty dollars is a real bargain.",exCn:"兩公斤蘋果五十元，真的很划算。"},
    {w:"annoying",ipa:"/əˈnɔɪ.ɪŋ/",pos:"adj.",cn:"惱人的；讓人不耐煩的",def:"Making you feel a little angry or impatient.",ex:"The alarm next door rings every morning, and it is really annoying.",exCn:"隔壁的警報器每天早上都響，真的很惱人。"},
    {w:"confusing",ipa:"/kənˈfjuːzɪŋ/",pos:"adj.",cn:"令人困惑的",def:"Hard to understand because it is not clear.",ex:"The map at the station was so confusing that we asked a guard.",exCn:"車站的地圖太令人困惑，我們只好去問站務員。"},
    {w:"scratch",ipa:"/skrætʃ/",pos:"n.",cn:"刮痕",def:"A thin mark made on a surface by something sharp.",ex:"There is a small scratch on the screen of my new phone.",exCn:"我新手機的螢幕上有一道小刮痕。"},
    {w:"furniture",ipa:"/ˈfɝː.nɪ.tʃɚ/",pos:"n.",cn:"家具",def:"Tables, chairs, beds and other large things in a room.",ex:"They bought all their furniture from one small shop near the market.",exCn:"他們所有的家具都在市場附近一家小店買的。"},
    {w:"donate",ipa:"/doʊˈneɪt/",pos:"v.",cn:"捐出；捐贈",def:"To give something to a person or group that needs it.",ex:"Our office donates old computers to a primary school every year.",exCn:"我們辦公室每年都把舊電腦捐給一所小學。"}
  ],
  questions:[
    {q:"Why did Tom put the shelf online?",
     opts:["A. It was broken and dangerous","B. His apartment was too crowded and the shelf only held dusty boxes","C. He needed to get his money back","D. His landlord told him to"],
     ans:1,
     expl:"第一段：Tom's apartment ... had become too crowded ... now held nothing but dusty boxes。"},
    {q:"“Tom found the low offer annoying.” Why “annoying” and not “annoyed”?",
     opts:["A. Because the offer is the thing that caused the feeling","B. Because Tom is the one who had the feeling","C. Because it happened in the past","D. Because it comes after “found”"],
     ans:0,
     expl:"-ing 形容詞描述「造成感覺的人或事」，這裡是那個出價；-ed 形容詞才是描述有感覺的人，所以 Tom was annoyed. 也對，但主詞不同。"},
    {q:"How did the couple react to the scratch?",
     opts:["A. They asked for a lower price","B. They refused to take the shelf","C. They were not disappointed, and the man planned to sand and polish it","D. They did not notice it"],
     ans:2,
     expl:"第三段：They were not disappointed at all; the man said he would sand it down and polish it。"},
    {q:"What happened at the end of the story?",
     opts:["A. Tom sold the shelf for half the price","B. Tom gave the shelf away and was given mangoes","C. The couple changed their minds and left","D. Tom kept the shelf in the corner"],
     ans:1,
     expl:"最後一段：Tom decided to donate the shelf ... the couple left two bags of mangoes on his table instead。"}
  ],
  upgrade:[
    {b1:"I was very surprised. Eleven people wrote to me that night.",
     b2:"The response was surprising: eleven people replied before midnight.",
     note:"同一件事可以從「人的感覺」(I was surprised) 或「事物的性質」(The response was surprising) 兩個角度講；-ed 說人、-ing 說造成感覺的事物，後者聽起來更客觀。",
     sp:"I couldn't believe it — like eleven people messaged me that night.",
     spNote:"口語常用 I couldn't believe it 代替 surprising，like 在這裡是「大概、就」的語氣詞，不是「像」。",
     b1Cn:"我很驚訝。那天晚上有十一個人寫訊息給我。",
     b2Cn:"回應令人意外：半夜之前就有十一個人回覆。",
     spCn:"我真不敢相信——那天晚上大概有十一個人傳訊息給我。"},
    {b1:"The scratch was not a problem for them. The man said he could fix it.",
     b2:"They did not find the scratch disappointing; the man said he would sand it down.",
     note:"find + 受詞 + -ing 形容詞（find it confusing / tiring / disappointing）是講「覺得某樣東西令人……」的常用句型，比 It was not a problem 精準得多。",
     sp:"They were totally fine with the scratch — he said he'd just sand it.",
     spNote:"be fine with something 是口語「不介意某件事」的說法，後面接名詞或 V-ing。",
     b1Cn:"那道刮痕對他們來說不是問題。那位先生說他可以修。",
     b2Cn:"他們不覺得那道刮痕令人失望；那位先生說他會把它磨平。",
     spCn:"他們完全不介意那道刮痕——他說他磨一下就好。"}
  ]
},

/* ---------------------------------------------------------- 31 */
{
  id:"r31", level:"B2", topic:"自動化與技能", words:294,
  title:"The Camera That Took Half Her Job",
  titleCn:"接走她一半工作的那台相機",
  focus:"使役與 have / get something done（have / make / let / get）",
  intro:"Anita 的包裝線裝上自動檢查相機，她的工作被重新切了一刀。注意 have / get + 受詞 + p.p.（had the lighting adjusted）是「安排別人做、事情被做完」，have / make / let + 人 + 原形動詞則是「要求、逼得、允許」；受詞在動作裡是主動還是被動，決定後面用原形還是 p.p.。",
  spoken:[
    {en:"They had a camera system installed on our line last spring.",cn:"去年春天他們在我們的生產線上裝了一套相機系統。"},
    {en:"For a month it stopped the line for every shadow. I had the lighting adjusted three times.",cn:"有一個月，它看到影子就停線。我請人把燈光調了三次。"},
    {en:"My manager let me run the training myself, which I really did not expect.",cn:"我的主管讓我自己帶訓練，這真的是我沒想到的。"},
    {en:"It did not take my job. It just made me do the harder half of it.",cn:"它沒有搶走我的工作，只是逼我去做比較難的那一半。"}
  ],
  paras:[
    {en:"Last spring the factory where Anita works had an automatic camera system installed above the packing line. The supplier promised that the cameras would read every label and find every defect in less than a second. Anita, who had spent six years doing that inspection by hand, read the specification twice and then could not sleep. If a machine could count faults faster than she could, what was left for her?",
     cn:"去年春天，Anita 工作的工廠在包裝線上方裝了一套自動相機系統。供應商保證那些相機能在不到一秒內讀完每一張標籤、找出每一個瑕疵。Anita 用手工做那項檢驗已經六年，她把規格書讀了兩遍，然後就睡不著了。如果機器數瑕疵比她還快，那還剩下什麼是她的工作？"},
    {en:"The first month was humbling rather than frightening. The system caught scratches she would certainly have missed, but it also stopped the line for shadows and dust. Anita had the lighting adjusted three times, got two of the cameras moved twenty centimeters higher, and made the engineers write down every setting they changed. By June the false alarms had dropped by half, and nobody asked to switch the system off any more.",
     cn:"第一個月讓人謙卑，而不是恐懼。那套系統抓到了她肯定會漏掉的刮痕，但它也會因為陰影和灰塵就停線。Anita 請人把燈光調了三次，請人把其中兩台相機往上移了二十公分，並且要求工程師把每一個改過的設定都寫下來。到了六月，誤判已經少了一半，也沒有人再要求把系統關掉。"},
    {en:"What surprised her most was where her day went. She no longer counted defects, because the machine did that better. Instead she spent her mornings asking why the same defect kept coming back, and her afternoons getting operators trained on the new screens. Her manager let her run those sessions herself, and later had her write a short guide for two new trainees. Reading a spreadsheet had quietly become the most important part of her routine.",
     cn:"最讓她意外的，是她一天的時間跑去哪裡了。她不再數瑕疵，因為機器做得更好。她改成用早上問「為什麼同一種瑕疵一直回來」，用下午帶作業員學新的操作畫面。她的主管讓她自己主持那些課，後來還請她為兩位新來的實習工程師寫一份簡短的指南。看懂試算表，已經悄悄變成她例行工作裡最重要的一環。"},
    {en:"Anita still has the cameras calibrated every month, and she still argues with the supplier about software updates. But she describes her job differently now. The machine did not replace her; it took over the part of the work that a machine does better, and left her the part that needs someone to ask why. “It made me a better engineer,” she told her sister, “though I would never let it hear me say that.”",
     cn:"Anita 現在還是每個月請人校正那些相機，也還是為了軟體更新跟供應商吵。但她現在講自己的工作，說法不一樣了。機器沒有取代她；它接走了機器本來就做得比較好的那一段，留給她的是需要有人追問「為什麼」的那一段。「它讓我變成更好的工程師，」她跟妹妹說，「不過我絕對不會讓它聽到我這麼說。」"}
  ],
  target:[
    {w:"install",ipa:"/ɪnˈstɑːl/",pos:"v.",cn:"安裝",def:"To put a machine or program in place so that it can be used.",ex:"The landlord promised to install a new water heater before winter.",exCn:"房東答應在冬天前裝一台新的熱水器。"},
    {w:"supplier",ipa:"/səˈplaɪɚ/",pos:"n.",cn:"供應商",def:"A company that provides goods or parts to another company.",ex:"Our main supplier in Hanoi closes for a week every Lunar New Year.",exCn:"我們在河內的主要供應商每年農曆新年都休一個星期。"},
    {w:"defect",ipa:"/ˈdiː.fekt/",pos:"n.",cn:"瑕疵；缺陷",def:"A fault that makes something not good enough to sell or use.",ex:"A tiny defect in the zip meant the whole bag was sent back.",exCn:"拉鍊上一個小瑕疵，讓整個包包被退回。"},
    {w:"inspection",ipa:"/ɪnˈspek.ʃən/",pos:"n.",cn:"檢驗；檢查",def:"The act of looking at something carefully to see if it is correct or safe.",ex:"The lift passed its yearly inspection on Tuesday.",exCn:"那部電梯星期二通過了年度檢查。"},
    {w:"adjust",ipa:"/əˈdʒʌst/",pos:"v.",cn:"調整",def:"To change something a little so that it works better.",ex:"Please adjust your chair before you start typing.",exCn:"開始打字前，請先調整你的椅子。"},
    {w:"operator",ipa:"/ˈɑːpəreɪtɚ/",pos:"n.",cn:"操作員；作業員",def:"A person whose job is to use a machine.",ex:"Each operator signs the log sheet at the end of the night.",exCn:"每位操作員在夜班結束時都要在紀錄表上簽名。"},
    {w:"calibrate",ipa:"/ˈkæl.ə.breɪt/",pos:"v.",cn:"校正；校準",def:"To set a measuring tool so that it gives correct numbers.",ex:"We calibrate the kitchen scales once a season.",exCn:"我們每季校正一次廚房的秤。"},
    {w:"spreadsheet",ipa:"/ˈspred.ʃiːt/",pos:"n.",cn:"試算表",def:"A computer file with rows and columns of numbers.",ex:"He keeps all his travel costs in one spreadsheet.",exCn:"他把所有旅費都記在同一份試算表裡。"},
    {w:"routine",ipa:"/ruːˈtiːn/",pos:"n.",cn:"例行作業；固定做事的方式",def:"The usual way you do things, in the same order.",ex:"A short walk after dinner is part of my evening routine.",exCn:"晚餐後散散步是我晚間作息的一部分。"},
    {w:"replace",ipa:"/rɪˈpleɪs/",pos:"v.",cn:"取代；更換",def:"To take the place of someone or something else.",ex:"Nothing can replace a good night's sleep.",exCn:"沒有什麼能取代一夜好眠。"}
  ],
  questions:[
    {q:"Why could Anita not sleep after reading the specification?",
     opts:["A. She had been moved to the night shift","B. She was afraid the machine would leave nothing for her to do","C. The new cameras were far too noisy","D. The supplier had sent the wrong system"],
     ans:1,
     expl:"第一段：If a machine could count faults faster than she could, what was left for her?"},
    {q:"What did Anita do about the false alarms?",
     opts:["A. She switched the system off at night","B. She had the lighting adjusted, had two cameras moved higher, and made the engineers record every change","C. She asked the supplier to replace all the cameras","D. She went back to checking every box by hand"],
     ans:1,
     expl:"第二段：Anita had the lighting adjusted three times, got two of the cameras moved ... and made the engineers write down every setting。"},
    {q:"“Anita had the lighting adjusted three times.” Who most probably did the adjusting?",
     opts:["A. Anita did it herself","B. Somebody else did it, and Anita arranged it","C. Nobody did it; it was only a plan","D. The lighting changed by itself"],
     ans:1,
     expl:"have + 受詞 + p.p.（have something done）表示「安排別人做」，動作不是主詞自己做的；若是自己動手，要寫 She adjusted the lighting herself。"},
    {q:"How does Anita describe her job in the last paragraph?",
     opts:["A. The machine has completely replaced her","B. The machine took the part it does better and left her the questions","C. Her work is exactly the same as six years ago","D. She is planning to leave the factory"],
     ans:1,
     expl:"最後一段：it took over the part of the work that a machine does better, and left her the part that needs someone to ask why。"}
  ],
  upgrade:[
    {b1:"She asked the engineers to change the lighting. They changed it three times.",
     b2:"She had the lighting adjusted three times.",
     note:"have + 受詞 + p.p. 把「請人做、而且做完了」壓成一句；重點放在「燈光被調了」，所以不必說是誰動手的。",
     sp:"She got them to tweak the lighting like three times.",
     spNote:"get someone to do 是口語版的使役，tweak 是「小幅調一下」的口語說法，比 adjust 輕鬆。",
     b1Cn:"她請工程師改燈光。他們改了三次。",
     b2Cn:"她請人把燈光調了三次。",
     spCn:"她叫他們把燈光調了大概三次。"},
    {b1:"Her manager said yes, so she ran the training sessions herself.",
     b2:"Her manager let her run those sessions herself.",
     note:"let + 人 + 原形動詞（不加 to）直接點出「是誰給的許可」，比 said yes, so ... 緊湊；make 是「要求、逼得」，have 是「交辦」。",
     sp:"Her boss was cool with her running the sessions.",
     spNote:"be cool with something 是口語的「不反對、沒問題」，後面常接名詞或 V-ing。",
     b1Cn:"她的主管同意了，所以那些訓練課是她自己帶的。",
     b2Cn:"她的主管讓她自己主持那些課。",
     spCn:"她老闆對她帶那些課沒什麼意見。"}
  ]
}

];
