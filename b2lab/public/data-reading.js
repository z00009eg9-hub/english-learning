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
    {w:"book",ipa:"/bʊk/",pos:"v.",cn:"預訂",def:"To arrange to have a seat, room, or ticket kept for you.",ex:"I booked a ticket for the 7:40 train.",exCn:"我訂了七點四十分那班火車的票。"},
    {w:"platform",ipa:"/ˈplætfɔːrm/",pos:"n.",cn:"月台",def:"The raised area beside a railway track where you get on a train.",ex:"He reached the platform at 7:42.",exCn:"他七點四十二分才到月台。"},
    {w:"realize",ipa:"/ˈriːəlaɪz/",pos:"v.",cn:"意識到、發現",def:"To suddenly understand or become aware of something.",ex:"I did not realize how late it was until I looked at the clock.",exCn:"直到看了時鐘，我才意識到已經這麼晚了。"},
    {w:"turn around",ipa:"/tɜːrn əˈraʊnd/",pos:"phr.v.",cn:"轉身、折返",def:"To change direction so that you face or go the opposite way.",ex:"The road was closed, so we had to turn around and find another way.",exCn:"那條路封閉了，我們只好折返另找路線。"},
    {w:"take a deep breath",ipa:"/teɪk ə diːp breθ/",pos:"phr.",cn:"深呼吸",def:"To breathe in slowly to calm yourself down.",ex:"Daniel sat down and took a deep breath.",exCn:"丹尼爾坐下來，深吸了一口氣。"},
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
    {w:"screen",ipa:"/skriːn/",pos:"n.",cn:"螢幕",def:"The flat surface of a phone or computer where you see pictures and words.",ex:"She spends nine hours a day in front of a screen.",exCn:"她每天有九個小時盯著螢幕。"},
    {w:"advice",ipa:"/ədˈvaɪs/",pos:"n.",cn:"建議（不可數）",def:"An opinion about what someone should do.",ex:"My teacher gave me some useful advice about studying vocabulary.",exCn:"老師給了我一些關於背單字的實用建議。"},
    {w:"rarely",ipa:"/ˈrerli/",pos:"adv.",cn:"很少地",def:"Almost never.",ex:"She rarely brings her phone to the table.",exCn:"她很少把手機帶到餐桌上。"},
    {w:"hardly ever",ipa:"/ˈhɑːrdli ˈevər/",pos:"phr.",cn:"幾乎從不",def:"Almost never; very seldom.",ex:"We hardly ever eat out on weekdays.",exCn:"我們平日幾乎從不在外面吃飯。"},
    {w:"result",ipa:"/rɪˈzʌlt/",pos:"n.",cn:"結果",def:"Something that happens because of an action.",ex:"The change is small, but the result is clear.",exCn:"改變很小，但效果很明顯。"},
    {w:"in a different order",ipa:"/ɪn ə ˈdɪfrənt ˈɔːrdər/",pos:"phr.",cn:"以不同的順序",def:"Doing the same things but not in the same sequence.",ex:"Try doing the steps in a different order and see if it works.",exCn:"試著以不同的順序做這些步驟，看看行不行。"}
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
    {w:"roughly",ipa:"/ˈrʌfli/",pos:"adv.",cn:"大約",def:"Approximately; not exactly.",ex:"Roughly a third of the food is never eaten.",exCn:"大約三分之一的食物根本沒被吃掉。"},
    {w:"be thrown away",ipa:"/bi θroʊn əˈweɪ/",pos:"phr.",cn:"被丟掉",def:"To be put in the rubbish because it is not wanted.",ex:"Food that passes its expiry date should be thrown away.",exCn:"過了保存期限的食物應該丟掉。"},
    {w:"label",ipa:"/ˈleɪbl/",pos:"v.",cn:"標示",def:"To put information on a product.",ex:"Many products are labelled \"best before\".",exCn:"很多產品都標示著「賞味期限」。"},
    {w:"go bad",ipa:"/ɡoʊ bæd/",pos:"phr.v.",cn:"（食物）壞掉",def:"To become unfit to eat.",ex:"By the time they are found, they have gone bad.",exCn:"等到被發現時，它們已經壞了。"},
    {w:"leftovers",ipa:"/ˈleftoʊvərz/",pos:"n.",cn:"剩菜",def:"Food that has not been eaten at the end of a meal.",ex:"Cooking with leftovers reduces waste.",exCn:"用剩菜下廚可以減少浪費。"},
    {w:"a great deal of",ipa:"/ə ɡreɪt diːl əv/",pos:"phr.",cn:"大量的（接不可數）",def:"A large amount of something uncountable.",ex:"Learning a language takes a great deal of patience.",exCn:"學一門語言需要大量的耐心。"},
    {w:"household",ipa:"/ˈhaʊshoʊld/",pos:"adj./n.",cn:"家庭的；一戶人家",def:"Relating to a house and the people living in it.",ex:"These habits can cut household waste by half.",exCn:"這些習慣能把家庭的浪費減少一半。"}
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
    {w:"employee",ipa:"/ɪmˈplɔɪiː/",pos:"n.",cn:"員工",def:"A person who is paid to work for a company.",ex:"Every new employee gets two days of training.",exCn:"每位新員工都會接受兩天的訓練。"},
    {w:"concentrate",ipa:"/ˈkɑːnsntreɪt/",pos:"v.",cn:"專心",def:"To give all your attention to one thing.",ex:"They say they concentrate better at home.",exCn:"他們說自己在家比較能專心。"},
    {w:"interrupt",ipa:"/ˌɪntəˈrʌpt/",pos:"v.",cn:"打斷",def:"To stop someone while they are speaking or working.",ex:"Please do not interrupt me while I am on the phone.",exCn:"我講電話的時候請不要打斷我。"},
    {w:"whereas",ipa:"/werˈæz/",pos:"conj.",cn:"然而、相對地",def:"Used to compare two different facts.",ex:"Meetings are easy online, whereas casual chats disappear.",exCn:"線上開會很方便，但隨口閒聊卻不見了。"},
    {w:"build trust",ipa:"/bɪld trʌst/",pos:"phr.",cn:"建立信任",def:"To slowly create a feeling of confidence between people.",ex:"Short conversations build trust.",exCn:"簡短的交談能建立信任。"},
    {w:"suffer",ipa:"/ˈsʌfər/",pos:"v.",cn:"受苦、受到不良影響",def:"To experience something bad.",ex:"Your health will suffer if you keep skipping sleep.",exCn:"如果你一直不睡覺，健康會受到影響。"},
    {w:"something in the middle",ipa:"/ˈsʌmθɪŋ ɪn ðə ˈmɪdl/",pos:"phr.",cn:"折衷方案",def:"A compromise between two choices.",ex:"Most companies have chosen something in the middle.",exCn:"大多數公司都選擇了折衷的做法。"}
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
    {w:"plumber",ipa:"/ˈplʌmər/",pos:"n.",cn:"水管工",def:"A person whose job is to fit and repair water pipes.",ex:"The plumber fixed the leaking pipe in twenty minutes.",exCn:"水管工二十分鐘就修好了漏水的水管。"},
    {w:"retire",ipa:"/rɪˈtaɪər/",pos:"v.",cn:"退休",def:"To stop working, usually because of age.",ex:"My father plans to retire when he turns sixty-five.",exCn:"我父親打算六十五歲時退休。"},
    {w:"leak",ipa:"/liːk/",pos:"v./n.",cn:"漏（水）；漏洞",def:"To let liquid or gas escape through a hole.",ex:"The pipe under the sink started leaking.",exCn:"水槽下面的水管開始漏水了。"},
    {w:"drip",ipa:"/drɪp/",pos:"v.",cn:"滴落",def:"To fall in small drops.",ex:"Water was dripping onto the floor.",exCn:"水一滴一滴地滴到地板上。"},
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
    {w:"bend",ipa:"/bend/",pos:"v.",cn:"彎曲",def:"To become curved instead of straight.",ex:"We watched the trees bend in the wind.",exCn:"我們看著樹在風中彎下腰。"},
    {w:"destroy",ipa:"/dɪˈstrɔɪ/",pos:"v.",cn:"摧毀",def:"To damage something so badly that it no longer exists.",ex:"It had destroyed part of a bridge.",exCn:"它摧毀了一座橋的一部分。"},
    {w:"go out",ipa:"/ɡoʊ aʊt/",pos:"phr.v.",cn:"（燈/火）熄滅",def:"To stop shining or burning.",ex:"The candle went out as soon as the wind blew in.",exCn:"風一吹進來，蠟燭就熄了。"},
    {w:"flush",ipa:"/flʌʃ/",pos:"v.",cn:"沖（馬桶）",def:"To clean a toilet by sending water through it.",ex:"Remember to flush the toilet after you use it.",exCn:"用完廁所記得沖水。"},
    {w:"relative",ipa:"/ˈrelətɪv/",pos:"n.",cn:"親戚",def:"A member of your family.",ex:"She walked to a relative's house.",exCn:"她走路去了親戚家。"},
    {w:"power bank",ipa:"/ˈpaʊər bæŋk/",pos:"n.",cn:"行動電源",def:"A portable battery for charging a phone.",ex:"We keep a power bank at home.",exCn:"我們家裡會備一個行動電源。"},
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
    {w:"apply for",ipa:"/əˈplaɪ fɔːr/",pos:"phr.v.",cn:"應徵、申請",def:"To make a formal request for a job or place.",ex:"She applied for the position last month.",exCn:"她上個月應徵了那個職位。"},
    {w:"impressive",ipa:"/ɪmˈpresɪv/",pos:"adj.",cn:"令人印象深刻的",def:"Causing admiration because it is very good or large.",ex:"Her presentation was so impressive that the whole room applauded.",exCn:"她的簡報令人印象深刻，全場都鼓掌了。"},
    {w:"be expected to",ipa:"/bi ɪkˈspektɪd tuː/",pos:"phr.",cn:"被要求、被預期要",def:"To be required or believed likely to do something.",ex:"The new hire would be expected to work weekends.",exCn:"新進的人會被要求週末上班。"},
    {w:"the right fit",ipa:"/ðə raɪt fɪt/",pos:"phr.",cn:"適合的人／契合",def:"A person who suits a job or team well.",ex:"He said they had not been the right fit.",exCn:"他說他們並不合適。"},
    {w:"turn down",ipa:"/tɜːrn daʊn/",pos:"phr.v.",cn:"拒絕",def:"To refuse an offer or request.",ex:"He turned down the job because the salary was too low.",exCn:"他因為薪水太低而拒絕了那份工作。"},
    {w:"cautious",ipa:"/ˈkɔːʃəs/",pos:"adj.",cn:"謹慎的",def:"Careful to avoid risk.",ex:"Her friends thought she was too cautious.",exCn:"她的朋友覺得她太過謹慎了。"},
    {w:"stable",ipa:"/ˈsteɪbl/",pos:"adj.",cn:"穩定的",def:"Not likely to change or move suddenly.",ex:"If the team had been stable, she would have said yes.",exCn:"如果那個團隊夠穩定，她就會答應了。"},
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
    {w:"divide opinion",ipa:"/dɪˈvaɪd əˈpɪnjən/",pos:"phr.",cn:"引起意見分歧",def:"To make people disagree strongly.",ex:"Few subjects divide opinion so quickly.",exCn:"很少有話題能這麼快就讓大家意見分歧。"},
    {w:"dismiss",ipa:"/dɪsˈmɪs/",pos:"v.",cn:"駁回、不予考慮",def:"To refuse to accept that something is important or true.",ex:"The manager dismissed the idea without even hearing the details.",exCn:"經理連細節都沒聽就駁回了那個想法。"},
    {w:"admittedly",ipa:"/ədˈmɪtɪdli/",pos:"adv.",cn:"不可否認地",def:"Used to admit that something is true before saying something else.",ex:"Admittedly, surgery can do more than change an appearance.",exCn:"不可否認，手術能做的不只是改變外貌。"},
    {w:"arguably",ipa:"/ˈɑːrɡjuəbli/",pos:"adv.",cn:"可以說、可論證地",def:"Used to say something can reasonably be argued.",ex:"It is arguably a form of medical treatment.",exCn:"可以說它是一種醫療。"},
    {w:"luxury",ipa:"/ˈlʌkʃəri/",pos:"n.",cn:"奢侈品",def:"Something expensive that is pleasant but not necessary.",ex:"Not a luxury but a treatment.",exCn:"這不是奢侈的享受，而是一種治療。"},
    {w:"in a vacuum",ipa:"/ɪn ə ˈvækjuəm/",pos:"phr.",cn:"在真空中（不受外界影響）",def:"Separately from other people or events.",ex:"No decision is made in a vacuum; every choice affects someone else.",exCn:"沒有任何決定是在真空中做出的，每個選擇都會影響到別人。"},
    {w:"meet demand",ipa:"/miːt dɪˈmænd/",pos:"phr.",cn:"滿足需求",def:"To supply what people want.",ex:"Clinics are not simply meeting demand.",exCn:"診所並不只是在滿足需求而已。"},
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
    {w:"exclusion",ipa:"/ɪkˈskluːʒn/",pos:"n.",cn:"除外條款",def:"Something an insurance policy does not cover.",ex:"Buyers never examine the list of exclusions.",exCn:"買家從不去細看那份不保事項清單。"},
    {w:"cover",ipa:"/ˈkʌvər/",pos:"v.",cn:"（保險）涵蓋、理賠",def:"To include and pay for a particular risk.",ex:"Does this insurance cover lost luggage?",exCn:"這份保險有理賠行李遺失嗎？"},
    {w:"cancellation",ipa:"/ˌkænsəˈleɪʃn/",pos:"n.",cn:"取消",def:"A decision to stop something that was planned.",ex:"It covers cancellation for any reason.",exCn:"它理賠任何原因造成的取消。"},
    {w:"deductible",ipa:"/dɪˈdʌktəbl/",pos:"n.",cn:"自付額",def:"The amount you pay yourself before insurance pays.",ex:"The policy carries a very high deductible.",exCn:"這份保單的自負額非常高。"},
    {w:"premium",ipa:"/ˈpriːmiəm/",pos:"n.",cn:"保費",def:"The amount you pay regularly for insurance.",ex:"Our car insurance premium went up after the accident.",exCn:"那次事故之後，我們的汽車保費上漲了。"},
    {w:"claim",ipa:"/kleɪm/",pos:"n./v.",cn:"理賠（申請）",def:"A request for money from an insurance company.",ex:"Small claims become pointless.",exCn:"小額理賠變得毫無意義。"},
    {w:"effectively",ipa:"/ɪˈfektɪvli/",pos:"adv.",cn:"實質上",def:"In practice, although not officially.",ex:"The store closes at eight, so it is effectively a day shop.",exCn:"那家店八點關門，實質上就是一間白天營業的店。"},
    {w:"risk transfer",ipa:"/rɪsk ˈtrænsfɜːr/",pos:"n.",cn:"風險轉移",def:"Moving the possibility of loss from one party to another.",ex:"The risk transfer moves from the company to you.",exCn:"風險就從保險公司轉移到了你身上。"}
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
    {w:"measurable",ipa:"/ˈmeʒərəbl/",pos:"adj.",cn:"可測量的",def:"Large enough to be noticed or measured.",ex:"After a month of practice, she saw a measurable improvement in her speaking.",exCn:"練習一個月後，她的口說出現了可測量的進步。"},
    {w:"accumulate",ipa:"/əˈkjuːmjəleɪt/",pos:"v.",cn:"累積",def:"To increase in amount over time.",ex:"The accumulated shortage is called sleep debt.",exCn:"累積下來的不足就叫做睡眠債。"},
    {w:"reaction time",ipa:"/riˈækʃn taɪm/",pos:"n.",cn:"反應時間",def:"How long you take to respond to something.",ex:"Their reaction times were slower.",exCn:"他們的反應時間變慢了。"},
    {w:"rate",ipa:"/reɪt/",pos:"v.",cn:"評價、評分",def:"To judge the quality or level of something.",ex:"They rated their own performance as normal.",exCn:"他們卻認為自己的表現很正常。"},
    {w:"catch up",ipa:"/kætʃ ʌp/",pos:"phr.v.",cn:"補回、趕上",def:"To do something you did not have time to do earlier.",ex:"Memory formation cannot simply be caught up.",exCn:"記憶的形成沒辦法事後補回來。"},
    {w:"nuisance",ipa:"/ˈnuːsns/",pos:"n.",cn:"惱人的事物",def:"Something annoying or inconvenient.",ex:"Treat light as a signal, not a nuisance.",exCn:"把光線當成一種訊號，而不是一種干擾。"},
    {w:"unglamorous",ipa:"/ʌnˈɡlæmərəs/",pos:"adj.",cn:"不吸引人的、平淡的",def:"Not exciting or attractive.",ex:"Most of a chef's day is spent on unglamorous tasks like chopping onions.",exCn:"廚師一天大部分時間都在做切洋蔥這類平淡的工作。"},
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
    {w:"consultation",ipa:"/ˌkɑːnslˈteɪʃn/",pos:"n.",cn:"看診、諮詢",def:"A meeting with a doctor to discuss a health problem.",ex:"The average consultation lasts under six minutes.",exCn:"平均一次看診不到六分鐘。"},
    {w:"symptom",ipa:"/ˈsɪmptəm/",pos:"n.",cn:"症狀",def:"A sign that you have an illness.",ex:"Describe your symptoms clearly.",exCn:"把你的症狀說清楚。"},
    {w:"examine",ipa:"/ɪɡˈzæmɪn/",pos:"v.",cn:"檢查",def:"To look at someone carefully to find out what is wrong.",ex:"The doctor examined my throat.",exCn:"醫生檢查了我的喉嚨。"},
    {w:"breathe in",ipa:"/briːð ɪn/",pos:"phr.v.",cn:"吸氣",def:"To take air into your lungs.",ex:"Breathe in slowly through your nose, then breathe out through your mouth.",exCn:"用鼻子慢慢吸氣，再用嘴巴吐氣。"},
    {w:"leave out",ipa:"/liːv aʊt/",pos:"phr.v.",cn:"遺漏、省略",def:"To fail to include something.",ex:"Patients often leave out important details.",exCn:"病人常常會漏掉重要的細節。"},
    {w:"tend to",ipa:"/tend tuː/",pos:"phr.",cn:"往往、傾向於",def:"To usually do something.",ex:"Patients tend to leave out their current medicines.",exCn:"病人往往會漏講自己目前在吃的藥。"},
    {w:"dose",ipa:"/doʊs/",pos:"n.",cn:"劑量",def:"A measured amount of medicine.",ex:"He had doubled his own dose.",exCn:"他自己把劑量加倍了。"},
    {w:"dizziness",ipa:"/ˈdɪzinəs/",pos:"n.",cn:"暈眩",def:"The feeling that everything is spinning.",ex:"He described his dizziness for five minutes.",exCn:"他花了五分鐘描述自己的頭暈。"},
    {w:"diagnosis",ipa:"/ˌdaɪəɡˈnoʊsɪs/",pos:"n.",cn:"診斷",def:"A doctor's judgement about what illness you have.",ex:"The consultation is not only about a diagnosis.",exCn:"看診並不只是為了得到一個診斷。"}
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
    {w:"fixed fee",ipa:"/fɪkst fiː/",pos:"n.",cn:"固定費用",def:"An amount that does not change.",ex:"Patients pay a small fixed fee.",exCn:"病人只付一筆小額的固定費用。"},
    {w:"fund",ipa:"/fʌnd/",pos:"v.",cn:"提供資金",def:"To provide money for something.",ex:"The system is funded through payroll contributions.",exCn:"這套制度是靠薪資扣繳來支應的。"},
    {w:"contribution",ipa:"/ˌkɑːntrɪˈbjuːʃn/",pos:"n.",cn:"（保費）分攤、繳款",def:"Money paid regularly into a system.",ex:"Payroll contributions fund the system.",exCn:"薪資扣繳的金額支撐著整個制度。"},
    {w:"by contrast",ipa:"/baɪ ˈkɑːntræst/",pos:"phr.",cn:"相對地、對比之下",def:"Used to show a clear difference.",ex:"The American system, by contrast, is private.",exCn:"相較之下，美國的制度是私人的。"},
    {w:"delay",ipa:"/dɪˈleɪ/",pos:"v.",cn:"延遲、拖延",def:"To not do something until later.",ex:"Patients delay a check-up.",exCn:"病人會拖著不去做檢查。"},
    {w:"check-up",ipa:"/ˈtʃek ʌp/",pos:"n.",cn:"健康檢查",def:"A medical examination to see if you are healthy.",ex:"He delayed his yearly check-up.",exCn:"他拖著沒去做年度健康檢查。"},
    {w:"access",ipa:"/ˈækses/",pos:"n.",cn:"可及性、取得的機會",def:"The chance or right to use something.",ex:"The system buys access at the cost of time.",exCn:"這套制度用時間為代價換來了看病的機會。"},
    {w:"the former / the latter",ipa:"/ðə ˈfɔːrmər/",pos:"phr.",cn:"前者／後者",def:"The first one mentioned / the second one mentioned.",ex:"The former is cheap; the latter is faster.",exCn:"前者便宜，後者快速。"}
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
    {w:"exhaustion",ipa:"/ɪɡˈzɔːstʃən/",pos:"n.",cn:"耗竭、極度疲勞",def:"The state of being extremely tired.",ex:"An exhaustion that sleep does not fix.",exCn:"一種睡再多也好不了的疲憊。"},
    {w:"burnout",ipa:"/ˈbɜːrnaʊt/",pos:"n.",cn:"職業倦怠",def:"Extreme tiredness caused by long-term stress at work.",ex:"Burnout builds slowly.",exCn:"職業倦怠是慢慢累積起來的。"},
    {w:"consistent",ipa:"/kənˈsɪstənt/",pos:"adj.",cn:"一致的",def:"Always the same; not changing.",ex:"His answers were consistent with what the other witnesses said.",exCn:"他的回答和其他證人所說的一致。"},
    {w:"competence",ipa:"/ˈkɑːmpɪtəns/",pos:"n.",cn:"能力",def:"The ability to do something well.",ex:"A loss of confidence in one's own competence.",exCn:"對自己能力失去信心。"},
    {w:"may well",ipa:"/meɪ wel/",pos:"phr.",cn:"很可能",def:"Used to say something is quite likely.",ex:"The meeting may well be canceled if the boss is still sick.",exCn:"如果老闆還在生病，會議很可能會取消。"},
    {w:"workload",ipa:"/ˈwɜːrkloʊd/",pos:"n.",cn:"工作量",def:"The amount of work a person has to do.",ex:"He returned to the same workload.",exCn:"他又回到了一樣繁重的工作量。"},
    {w:"drain",ipa:"/dreɪn/",pos:"v.",cn:"消耗（精力）",def:"To make someone lose energy.",ex:"Write down which tasks drain you.",exCn:"把哪些工作讓你精疲力盡寫下來。"},
    {w:"endure",ipa:"/ɪnˈdʊr/",pos:"v.",cn:"忍受",def:"To suffer something difficult patiently.",ex:"A change in what is expected, not only in what is endured.",exCn:"要改變的是被期待的內容，而不只是硬撐下來的部分。"},
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
    {w:"boarding",ipa:"/ˈbɔːrdɪŋ/",pos:"n.",cn:"登機",def:"Getting onto a plane, ship, or train.",ex:"The flight was cancelled before boarding.",exCn:"那班飛機在登機前就被取消了。"},
    {w:"announcement",ipa:"/əˈnaʊnsmənt/",pos:"n.",cn:"廣播、公告",def:"A public statement giving information.",ex:"Please listen for the announcement about platform changes.",exCn:"請留意有關月台變更的廣播。"},
    {w:"queue",ipa:"/kjuː/",pos:"n./v.",cn:"排隊（的隊伍）",def:"A line of people waiting.",ex:"There was a long queue outside the bakery before it even opened.",exCn:"麵包店還沒開門，外面就已經排了長長的隊伍。"},
    {w:"rebook",ipa:"/riːˈbʊk/",pos:"v.",cn:"改訂、重新訂位",def:"To arrange a new ticket after a change.",ex:"She was rebooked in four minutes.",exCn:"她在四分鐘內就被重新訂好了位。"},
    {w:"booking reference",ipa:"/ˈbʊkɪŋ ˈrefrəns/",pos:"n.",cn:"訂位代號",def:"The code that identifies your reservation.",ex:"Keep digital copies of the booking references.",exCn:"把訂位代碼存成電子檔備份。"},
    {w:"be obliged to",ipa:"/bi əˈblaɪdʒd tuː/",pos:"phr.",cn:"有義務、被規定要",def:"To be required by rule or law to do something.",ex:"Visitors are obliged to sign in at the front desk.",exCn:"訪客必須在櫃檯登記。"},
    {w:"voucher",ipa:"/ˈvaʊtʃər/",pos:"n.",cn:"兌換券",def:"A paper you exchange for goods or services.",ex:"They give a meal voucher after a long delay.",exCn:"延誤很久之後他們會發餐券。"},
    {w:"avoidable",ipa:"/əˈvɔɪdəbl/",pos:"adj.",cn:"可避免的",def:"Able to be prevented.",ex:"A small loss, but an avoidable one.",exCn:"雖然損失不大，但這是可以避免的。"},
    {w:"alternative route",ipa:"/ɔːlˈtɜːrnətɪv ruːt/",pos:"n.",cn:"替代路線",def:"A different way of reaching the same place.",ex:"Save one alternative route offline.",exCn:"把一條替代路線離線存起來。"}
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
    {w:"assume",ipa:"/əˈsuːm/",pos:"v.",cn:"假設、以為",def:"To believe something is true without proof.",ex:"We had assumed he would simply say so.",exCn:"我們原本以為他會直接說出來。"},
    {w:"preference",ipa:"/ˈprefrəns/",pos:"n.",cn:"偏好",def:"The thing you like better than another.",ex:"I have no strong preference; either restaurant is fine with me.",exCn:"我沒有特別偏好，哪家餐廳都可以。"},
    {w:"host",ipa:"/hoʊst/",pos:"n.",cn:"主人、招待方",def:"A person who receives and looks after guests.",ex:"He did not want to create work for the host.",exCn:"他不想給主人添麻煩。"},
    {w:"politeness",ipa:"/pəˈlaɪtnəs/",pos:"n.",cn:"客氣、禮貌",def:"Behaviour that shows respect for others.",ex:"We read his politeness as satisfaction.",exCn:"我們把他的客氣當成了滿意。"},
    {w:"satisfaction",ipa:"/ˌsætɪsˈfækʃn/",pos:"n.",cn:"滿意",def:"The feeling of being pleased with something.",ex:"His silence was mistaken for satisfaction.",exCn:"他的沉默被誤以為是滿意。"},
    {w:"verdict",ipa:"/ˈvɜːrdɪkt/",pos:"n.",cn:"判定、結論",def:"A decision or judgement about something.",ex:"Given a choice rather than a verdict, he answered.",exCn:"當給他的是選擇而不是評斷時，他就回答了。"},
    {w:"assignment",ipa:"/əˈsaɪnmənt/",pos:"n.",cn:"派任、任務",def:"A job or task given to someone.",ex:"Her first overseas assignment was a six-month post in Singapore.",exCn:"她的第一個海外派任是到新加坡工作六個月。"},
    {w:"custom",ipa:"/ˈkʌstəm/",pos:"n.",cn:"習俗",def:"A traditional way of behaving in a society.",ex:"It is not about learning a list of customs.",exCn:"重點不在於背下一堆風俗習慣。"}
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
    {w:"hidden gem",ipa:"/ˈhɪdn dʒem/",pos:"n.",cn:"秘境、未被發現的好地方",def:"A good place that few people know about.",ex:"Towns once promoted as hidden gems.",exCn:"曾經被宣傳為私房景點的小鎮。"},
    {w:"resident",ipa:"/ˈrezɪdənt/",pos:"n.",cn:"居民",def:"A person who lives in a place.",ex:"Residents have been priced out.",exCn:"居民因為物價被迫遷離了。"},
    {w:"be priced out",ipa:"/bi praɪst aʊt/",pos:"phr.",cn:"因價格上漲而被迫離開",def:"To be unable to afford to stay somewhere.",ex:"Residents have been priced out of their own streets.",exCn:"居民在自己住的街上都被高物價逼得住不下去了。"},
    {w:"be blamed",ipa:"/bi bleɪmd/",pos:"phr.",cn:"被責怪",def:"To be said to be responsible for something bad.",ex:"The driver was blamed for the accident, but the road was icy.",exCn:"司機被責怪造成事故，但路面其實結冰了。"},
    {w:"mechanism",ipa:"/ˈmekənɪzəm/",pos:"n.",cn:"機制",def:"The way a process works.",ex:"The mechanism is not their fault.",exCn:"這個運作機制並不是他們的錯。"},
    {w:"souvenir",ipa:"/ˌsuːvəˈnɪr/",pos:"n.",cn:"紀念品",def:"An object you keep to remember a place.",ex:"I bought a small wooden boat as a souvenir of the trip.",exCn:"我買了一艘小木船作為這趟旅行的紀念品。"},
    {w:"granted",ipa:"/ˈɡræntɪd/",pos:"adv.",cn:"誠然、的確",def:"Used to admit that something is true.",ex:"Granted, tourism pays for a great deal.",exCn:"誠然，觀光業帶來了很多收入。"},
    {w:"short-term rental",ipa:"/ʃɔːrt tɜːrm ˈrentl/",pos:"n.",cn:"短期出租",def:"A flat rented to visitors for a few nights.",ex:"Limits on short-term rentals help.",exCn:"限制短期出租是有幫助的。"},
    {w:"consult",ipa:"/kənˈsʌlt/",pos:"v.",cn:"徵詢意見",def:"To ask someone for their opinion before deciding.",ex:"Residents are consulted before the numbers are set.",exCn:"在訂出數字之前會先徵詢居民的意見。"}
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
    {w:"deposit",ipa:"/dɪˈpɑːzɪt/",pos:"n.",cn:"押金",def:"Money paid in advance and returned if nothing is damaged.",ex:"Half of her deposit had been kept.",exCn:"她的押金被扣了一半。"},
    {w:"deduct",ipa:"/dɪˈdʌkt/",pos:"v.",cn:"扣除",def:"To take an amount away from a total.",ex:"A landlord who deducts for normal wear.",exCn:"一個因為正常損耗就扣錢的房東。"},
    {w:"wear",ipa:"/wer/",pos:"n.",cn:"損耗",def:"Damage caused by normal use over time.",ex:"Normal wear is not damage.",exCn:"正常的損耗不算是損壞。"},
    {w:"handover",ipa:"/ˈhændoʊvər/",pos:"n.",cn:"交屋、移交",def:"The act of giving something to another person officially.",ex:"The handover of the new office took place on Monday morning.",exCn:"新辦公室的交屋在週一早上完成。"},
    {w:"dispute",ipa:"/dɪˈspjuːt/",pos:"v.",cn:"爭執、質疑",def:"To say that something is not true or fair.",ex:"The condition could not be disputed.",exCn:"那個狀況是無從爭辯的。"},
    {w:"inventory",ipa:"/ˈɪnvəntɔːri/",pos:"n.",cn:"財物清單",def:"A written list of the items in a property.",ex:"She kept the inventory signed at move-in.",exCn:"她保留了入住時簽好的財物清單。"},
    {w:"tenant",ipa:"/ˈtenənt/",pos:"n.",cn:"房客",def:"A person who pays rent to live somewhere.",ex:"Most tenants never look at it again.",exCn:"大多數房客再也不會去看它一眼。"},
    {w:"itemised receipt",ipa:"/ˈaɪtəmaɪzd rɪˈsiːt/",pos:"n.",cn:"逐項收據",def:"A receipt showing the cost of each separate item.",ex:"She asked for an itemised receipt.",exCn:"她要求對方提供逐項列明的收據。"},
    {w:"mediation",ipa:"/ˌmiːdiˈeɪʃn/",pos:"n.",cn:"調解",def:"A process in which a third person helps solve a dispute.",ex:"The matter will be taken to mediation.",exCn:"這件事將會交付調解。"}
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
    {w:"discipline",ipa:"/ˈdɪsəplɪn/",pos:"n.",cn:"自制力、紀律",def:"The ability to control your own behaviour.",ex:"Saving money every month takes real discipline.",exCn:"每個月存錢需要真正的自制力。"},
    {w:"wage",ipa:"/weɪdʒ/",pos:"n.",cn:"薪資",def:"Money paid regularly for work.",ex:"Rents rose faster than wages.",exCn:"房租漲得比薪水還快。"},
    {w:"mortgage",ipa:"/ˈmɔːrɡɪdʒ/",pos:"n.",cn:"房貸",def:"A loan used to buy a house.",ex:"It disappears into somebody else's mortgage.",exCn:"那些錢都流進了別人的房貸裡。"},
    {w:"inflation",ipa:"/ɪnˈfleɪʃn/",pos:"n.",cn:"通膨",def:"A general rise in prices over time.",ex:"Because of inflation, the same lunch now costs twenty dollars more.",exCn:"因為通膨，同樣一份午餐現在貴了二十元。"},
    {w:"trivial",ipa:"/ˈtrɪviəl/",pos:"adj.",cn:"微不足道的",def:"Not important or serious.",ex:"Three per cent sounds trivial.",exCn:"百分之三聽起來微不足道。"},
    {w:"current account",ipa:"/ˈkɜːrənt əˈkaʊnt/",pos:"n.",cn:"活期存款帳戶",def:"A bank account for everyday money.",ex:"Money left in a current account loses value.",exCn:"放在活期帳戶裡的錢會貶值。"},
    {w:"that said",ipa:"/ðæt sed/",pos:"phr.",cn:"話說回來",def:"Used before saying something that partly contradicts what you just said.",ex:"That said, the usual advice targets the wrong number.",exCn:"話說回來，一般的建議都針對錯了對象。"},
    {w:"renegotiate",ipa:"/ˌriːnɪˈɡoʊʃieɪt/",pos:"v.",cn:"重新談（條件）",def:"To discuss an agreement again in order to change it.",ex:"Renegotiating rent can save ten per cent.",exCn:"重新談房租可以省下百分之十。"},
    {w:"fixed cost",ipa:"/fɪkst kɔːst/",pos:"n.",cn:"固定支出",def:"A cost that stays the same each month.",ex:"Big fixed costs matter more.",exCn:"龐大的固定支出更重要。"}
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
    {w:"commercial",ipa:"/kəˈmɜːrʃl/",pos:"adj.",cn:"商業的",def:"Connected with buying and selling.",ex:"Walk down an older commercial street.",exCn:"沿著一條比較老的商店街走一走。"},
    {w:"district",ipa:"/ˈdɪstrɪkt/",pos:"n.",cn:"區、地段",def:"An area of a town or city.",ex:"The old district is famous for its narrow streets and tea houses.",exCn:"這個老街區以窄巷和茶館聞名。"},
    {w:"shortage",ipa:"/ˈʃɔːrtɪdʒ/",pos:"n.",cn:"短缺",def:"A situation in which there is not enough of something.",ex:"The hospital is facing a serious shortage of nurses.",exCn:"這家醫院面臨嚴重的護理人員短缺。"},
    {w:"resale",ipa:"/ˈriːseɪl/",pos:"n.",cn:"轉售",def:"Selling something you bought earlier.",ex:"The resale value of the car dropped quickly after the first year.",exCn:"這輛車第一年過後轉售價值就快速下跌。"},
    {w:"tenancy",ipa:"/ˈtenənsi/",pos:"n.",cn:"租約、租賃關係",def:"The period or agreement of renting a property.",ex:"The tenancy agreement runs for twelve months and can be renewed.",exCn:"這份租約為期十二個月，可以續約。"},
    {w:"caution",ipa:"/ˈkɔːʃn/",pos:"n.",cn:"謹慎",def:"Care taken to avoid risk.",ex:"It looks like caution rather than waste.",exCn:"這看起來像是謹慎，而不是浪費。"},
    {w:"vacancy tax",ipa:"/ˈveɪkənsi tæks/",pos:"n.",cn:"空屋稅",def:"A tax on homes that are left empty.",ex:"Several cities introduced a vacancy tax.",exCn:"有好幾個城市開徵了空屋稅。"},
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
}

];
