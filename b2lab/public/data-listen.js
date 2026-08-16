// ============================================================
//  🎧 聽力跟讀教材（純語音，無影片）
//
//  這個檔案裡的每一課都用「裝置內建的語音朗讀（TTS）」播放，
//  站內不再嵌入任何 YouTube 影片，離線時也能練。
//
//  三種來源：
//   kind:"note"  — 依 data-notes.js 裡的課堂筆記單字自製的對話。
//                  pre 的音標／中文／英文定義都直接取自筆記，未自行杜撰；
//                  對話與理解題為本站原創撰寫。noteRef 標明取材自哪一堂課。
//   kind:"scene" — 生活場景對話，主題參考 VOA 同名課程，但句子是本站原創。
//   kind:"voa"   — VOA Learning English（美國政府出版物，公共領域），
//                  逐字稿原文放在 data-scripts.js，中譯為本站撰寫。
// ============================================================
window.LISTEN = {

/* ========== 依課堂筆記自製 ========== */
notes:[
{
  id:"au01",
  level:"B1",
  minutes:3,
  kind:"note",
  title:"When One Angry Video Goes Viral",
  titleCn:"當一支客訴影片爆紅",
  series:"本站自製聽力 · 取材自課堂筆記",
  noteRef:"20260813 客訴處理與品牌曝光",
  topic:"💼 客訴處理",
  focus:"客訴回應的語氣與句型：公開道歉、承擔責任（accountability）、以及「先處理情緒、再處理細節」的說法。",
  intro:"一位顧客把收到的破損包裹拍成影片放上網，短時間內就衝到五萬次觀看。社群負責人 Ryan 慌了，主管 Emma 卻很冷靜。這段對話示範了真實職場裡怎麼用英文快速決定「說什麼、什麼時候說、誰負責」，對做客服、行銷或品保的人都很實用。",
  tip:"第一次聽先抓 Emma 給的三個行動：道歉、換貨、不推責。第二次再注意她為什麼說 transparent 比 perfect 更重要。",
  pre:[
    {w:"damaged",ipa:"/ˈdæmɪdʒd/",cn:"損壞的",def:"Broken or harmed."},
    {w:"go viral",ipa:"/goʊ ˈvaɪrəl/",cn:"爆紅、瘋傳",def:"To spread very quickly on the internet."},
    {w:"escalate",ipa:"/ˈeskəleɪt/",cn:"（問題）擴大、惡化",def:"To become bigger or more serious."},
    {w:"exposure",ipa:"/ɪkˈspoʊʒər/",cn:"曝光度",def:"Being seen or noticed by many people."},
    {w:"apologize",ipa:"/əˈpɒlədʒaɪz/",cn:"道歉",def:"to say that you are sorry for something you have done wrong"},
    {w:"transparent",ipa:"/trænsˈpærənt/",cn:"透明的、公開清楚的",def:"Open and easy for people to understand."},
    {w:"accountability",ipa:"/əˌkaʊntəˈbɪləti/",cn:"當責、負起責任",def:"Being willing to accept responsibility for what you do."},
    {w:"proactive",ipa:"/proʊˈæktɪv/",cn:"主動積極的",def:"Acting before a problem happens instead of waiting."}
  ],
  script:[
    {sp:"Ryan",en:"Emma, we've got a problem. A customer posted a video about a damaged package, and it already has fifty thousand views.",cn:"Emma，我們有麻煩了。有位顧客把破損的包裹拍成影片放上網，現在已經五萬次觀看了。"},
    {sp:"Emma",en:"Fifty thousand? Okay. How bad is the comment section?",cn:"五萬？好。留言區的狀況有多糟？"},
    {sp:"Ryan",en:"Bad. People are asking why we haven't said anything yet.",cn:"很糟。大家都在問我們為什麼到現在還不出聲。"},
    {sp:"Emma",en:"Then staying silent is the worst option. If we wait, this will escalate fast.",cn:"那保持沉默就是最糟的選擇。我們再等下去，事情會很快擴大。"},
    {sp:"Ryan",en:"You really think it could go viral?",cn:"你真的覺得這會爆紅嗎？"},
    {sp:"Emma",en:"It's already going viral. The question is what kind of exposure we get from it.",cn:"它已經在瘋傳了。問題是我們從中拿到什麼樣的曝光。"},
    {sp:"Ryan",en:"So what do we do first?",cn:"所以我們第一步要做什麼？"},
    {sp:"Emma",en:"We apologize publicly, and we do it today. No excuses, no legal language.",cn:"我們公開道歉，而且今天就要做。不要找藉口，也不要用法律用語。"},
    {sp:"Ryan",en:"Won't that make us look guilty?",cn:"那樣不會讓我們看起來像有錯嗎？"},
    {sp:"Emma",en:"No, it makes us look transparent. Customers forgive mistakes. They don't forgive hiding.",cn:"不會，那會讓我們顯得公開透明。顧客可以原諒犯錯，但不會原諒隱瞞。"},
    {sp:"Ryan",en:"Okay. Should I mention the shipping company? Technically it was their fault.",cn:"好。那我要不要提到物流公司？嚴格來說是他們的問題。"},
    {sp:"Emma",en:"Never in public. Accountability means we take responsibility outside and sort out the details inside.",cn:"公開場合絕對不行。當責的意思是我們對外承擔責任，細節在內部處理。"},
    {sp:"Ryan",en:"Got it. I'll write a short reply and send her a replacement.",cn:"了解。我會寫一則簡短回覆，然後寄一個替換品給她。"},
    {sp:"Emma",en:"Send the replacement first, then reply. Being proactive is worth more than a perfect sentence.",cn:"先寄替換品，再回覆。主動出擊比一句完美的話還有價值。"},
    {sp:"Ryan",en:"And what if she's already outside the return period?",cn:"那如果她已經超過退貨期限了呢？"},
    {sp:"Emma",en:"Then we make an exception. One angry video costs us more than one free product.",cn:"那我們就破例。一支生氣的影片，代價比一個免費商品高多了。"},
    {sp:"Ryan",en:"Honestly, this could turn into good exposure if we handle it right.",cn:"老實說，如果處理得好，這反而可能變成不錯的曝光。"},
    {sp:"Emma",en:"Exactly. Now go and write it.",cn:"沒錯。現在去寫吧。"}
  ],
  questions:[
    {q:"Why is the customer's video a problem for the company?",opts:["A. It was made by a paid sponsor.","B. It shows a damaged package and already has many views.","C. It complains about a late delivery.","D. It shows the wrong price on the website."],ans:1,expl:"Ryan 第一句就說顧客拍的是 a damaged package，而且已經有五萬次觀看，所以問題在於「破損 + 高曝光」。"},
    {q:"Why does Emma want to apologize publicly today?",opts:["A. Because the law requires a public statement.","B. Because the shipping company asked her to.","C. Because staying silent makes the company look like it is hiding.","D. Because the customer refused a replacement."],ans:2,expl:"Emma 說沉默是最糟的選擇，而且顧客不會原諒隱瞞（They don't forgive hiding），所以公開道歉是為了顯得透明。"},
    {q:"What does Emma say about mentioning the shipping company?",opts:["A. They should never mention it in public.","B. They should mention it because it is true.","C. They should mention it after the video is deleted.","D. Only the manager is allowed to mention it."],ans:0,expl:"Emma 說 Never in public，強調當責是對外承擔、對內處理細節，不推給別人。"},
    {q:"In this dialogue, \"escalate\" means:",opts:["A. to reply politely to a customer","B. to become bigger and more serious","C. to send a message to a manager","D. to give the money back"],ans:1,expl:"escalate 在這裡是「問題擴大、惡化」的意思，對應 If we wait, this will escalate fast。"},
    {q:"What does Emma decide about the return period?",opts:["A. She refuses to help the customer.","B. She asks the customer to pay half the price.","C. She extends the return period for all customers.","D. She makes an exception for this customer."],ans:3,expl:"Emma 說 Then we make an exception，因為一支客訴影片的代價比一個免費商品高。"}
  ]
},

{
  id:"au02",
  level:"B1",
  minutes:3,
  kind:"note",
  title:"The Quality Engineer Interview",
  titleCn:"品質工程師的面試現場",
  series:"本站自製聽力 · 取材自課堂筆記",
  noteRef:"20260210 quality engineer 面試詞彙",
  topic:"🔧 面試與職涯",
  focus:"面試回答的結構：用具體例子回答問題，並區分 cosmetic 與 functional defect 等專業對比詞。",
  intro:"David 去應徵品質工程師，面試官 Karen 問的都是實務問題：你最常遇到什麼問題？怎麼判斷嚴不嚴重？出事之後你怎麼做？這段對話幾乎就是一份英文面試講稿範本，每個回答都是「先講原則、再舉一個例子」。",
  tip:"聽的時候注意 David 每次都不是只回答 yes/no，而是多補一句例子或原因。這是英文面試最重要的節奏。",
  pre:[
    {w:"quality engineer",ipa:"/ˈkwɑːləti ˌɛndʒɪˈnɪr/",cn:"品質工程師",def:"someone whose job is to make sure products meet certain standards before they are sold"},
    {w:"identify",ipa:"/aɪˈdɛntɪfaɪ/",cn:"辨認/確認/找出",def:"to recognize and name what something is"},
    {w:"dimensional issues",ipa:"/daɪˈmɛnʃənl ˈɪʃuːz/",cn:"尺寸問題",def:"problems related to the size or measurements of a product"},
    {w:"cosmetic",ipa:"/kɒzˈmet.ɪk/",cn:"外觀的、表面的",def:"relating to the way something looks on the outside, not how it works."},
    {w:"functional defect",ipa:"/ˈfʌŋk.ʃən.əl ˈdiː.fekt/",cn:"功能性缺陷",def:"a fault that stops a product from working the way it should."},
    {w:"investigate",ipa:"/ɪnˈvɛstɪɡeɪt/",cn:"調查/深入研究",def:"to look into something carefully in order to find out the truth"},
    {w:"root cause",ipa:"/ruːt kɔːz/",cn:"根本原因",def:"the real reason something bad or unexpected happens, not just a surface-level reason."},
    {w:"cross-functional",ipa:"/ˌkrɒs ˈfʌŋk.ʃən.əl/",cn:"跨部門的、跨職能的",def:"involving people from different teams or departments working together."}
  ],
  script:[
    {sp:"Karen",en:"Thanks for coming in, David. Can you tell me what you actually do as a quality engineer?",cn:"謝謝你今天過來，David。可以說說你身為品質工程師實際上在做什麼嗎？"},
    {sp:"David",en:"Sure. My main job is to identify problems before the product reaches the customer.",cn:"當然。我的主要工作是在產品送到客戶手上之前，先找出問題。"},
    {sp:"Karen",en:"What kind of problems do you see most often?",cn:"你最常遇到哪一類的問題？"},
    {sp:"David",en:"Mostly dimensional issues. Parts that are half a millimetre off and then don't fit properly.",cn:"大多是尺寸問題。零件差個半毫米，就裝不進去。"},
    {sp:"Karen",en:"And how do you decide whether a problem is serious or not?",cn:"那你怎麼判斷一個問題嚴不嚴重？"},
    {sp:"David",en:"I look at whether it's cosmetic or a functional defect. A small scratch is one thing. A part that stops working is completely different.",cn:"我會看它是外觀問題還是功能性缺陷。一道小刮痕是一回事，零件不能運作就完全是另一回事。"},
    {sp:"Karen",en:"Can you give me an example?",cn:"可以舉個例子嗎？"},
    {sp:"David",en:"Last year we had a batch where the housing looked perfect, but the switch failed. That was a functional defect, so we stopped the line.",cn:"去年有一批貨的外殼看起來很完美，但開關失效。那是功能性缺陷，所以我們停線。"},
    {sp:"Karen",en:"That's a brave call. What happened next?",cn:"那是很有膽識的決定。後來呢？"},
    {sp:"David",en:"We investigate. I pull the process data, talk to the operators, and try to find the root cause instead of just replacing the bad parts.",cn:"我們展開調查。我會調製程數據、跟線上作業員談，設法找出根本原因，而不是只把壞掉的零件換掉。"},
    {sp:"Karen",en:"A lot of people stop at the symptom.",cn:"很多人只處理到表面症狀就停了。"},
    {sp:"David",en:"Right, and then the same issue comes back three months later. If you don't fix the root cause, you're only cleaning up.",cn:"對，然後同樣的問題三個月後又回來。如果不修正根本原因，你只是在善後而已。"},
    {sp:"Karen",en:"Do you handle that alone?",cn:"這些你是自己一個人處理嗎？"},
    {sp:"David",en:"Never. It's cross-functional work. Production, engineering and purchasing all sit in the same meeting.",cn:"從來不是。那是跨部門的工作。生產、工程和採購都會坐在同一個會議裡。"},
    {sp:"Karen",en:"Is that difficult?",cn:"那會很困難嗎？"},
    {sp:"David",en:"Sometimes. Everyone wants to protect their own department. But I've learned to bring data, not opinions.",cn:"有時候會。每個人都想保護自己的部門。但我學會了帶數據去，而不是帶意見去。"},
    {sp:"Karen",en:"Last question. Why do you want to move to a global company?",cn:"最後一個問題。你為什麼想進到一間全球性的公司？"},
    {sp:"David",en:"I want to broaden my experience. Same job, bigger scale, and I think I can contribute a lot.",cn:"我想拓展我的經驗。一樣的工作，但規模更大，而且我認為我可以有很多貢獻。"}
  ],
  questions:[
    {q:"What does David say is his main responsibility?",opts:["A. Selling products to global customers.","B. Finding problems before the product reaches the customer.","C. Training new operators on the line.","D. Designing new machines for production."],ans:1,expl:"David 第一個回答就是 to identify problems before the product reaches the customer。"},
    {q:"Which problem does David see most often?",opts:["A. Software errors","B. Late deliveries","C. Dimensional issues","D. Packaging damage"],ans:2,expl:"他說 Mostly dimensional issues，也就是零件差半毫米導致裝不進去的尺寸問題。"},
    {q:"In the switch example, why did the team stop the line?",opts:["A. The colour of the housing was wrong.","B. It was only a cosmetic problem.","C. A customer had already complained.","D. It was a functional defect."],ans:3,expl:"外殼看起來完美，但開關失效，David 判斷那是 functional defect（影響功能），所以停線。"},
    {q:"What does \"root cause\" mean in this dialogue?",opts:["A. The real reason behind the problem","B. The first person who reported the problem","C. The cost of repairing the parts","D. The final report sent to the customer"],ans:0,expl:"root cause 是根本原因；David 強調不修正根本原因，同樣的問題三個月後會再出現。"},
    {q:"Why does David want to join a global company?",opts:["A. To earn a much higher salary.","B. To work alone more often.","C. To broaden his experience on a bigger scale.","D. To stop doing quality work."],ans:2,expl:"他說 I want to broaden my experience，同樣的工作但規模更大。"}
  ]
},

{
  id:"au03",
  level:"B1",
  minutes:3,
  kind:"note",
  title:"Is Money Really the Root of All Evil?",
  titleCn:"金錢真的是萬惡之源嗎？",
  series:"本站自製聽力 · 取材自課堂筆記",
  noteRef:"20260122 Money Makes the World Go Round",
  topic:"💰 金錢觀",
  focus:"表達不同意與提出反例的句型：That's not... that's...、So you'd blame...、如何用一個比喻收尾。",
  intro:"Nina 和 Tom 在爭論一句老話：「金錢是萬惡之源。」Tom 舉貪污和血汗勞工當證據，Nina 卻認為問題不在錢，而在人的貪婪和分配方式。這是一段很典型的英文觀點辯論，語速自然、句子不長，很適合練習「聽出立場」。",
  tip:"聽的時候把兩個人的立場各記一句話。特別注意 Nina 每次反駁都用同一個句型：That's not X, that's Y。",
  pre:[
    {w:"root of all evil",ipa:"/ruːt əv ɔːl ˈiː.vəl/",cn:"萬惡之源",def:"a saying used to describe something believed to be the main cause of bad things"},
    {w:"expression",ipa:"/ɪkˈspreʃ.ən/",cn:"詞語、措詞",def:"a word or phrase used in a particular way."},
    {w:"evil",ipa:"/ˈiː.vəl/",cn:"邪惡；壞事",def:"morally very bad, or something morally very bad"},
    {w:"greed",ipa:"/ɡriːd/",cn:"貪婪",def:"a strong desire to have more money or things than you need"},
    {w:"corruption",ipa:"/kəˈrʌp.ʃən/",cn:"貪污；腐敗",def:"dishonest or illegal behavior by people in power, especially for money"},
    {w:"slave labour",ipa:"/sleɪv ˈleɪ.bər/",cn:"奴工；強迫勞動",def:"work that people are forced to do for little or no pay"},
    {w:"loads of",ipa:"/loʊdz əv/",cn:"許多的（口語）",def:"a large amount or number of something, used in informal speech"},
    {w:"share out",ipa:"/ʃer aʊt/",cn:"分配；分享",def:"to divide something among a group of people so everyone gets a part"}
  ],
  script:[
    {sp:"Nina",en:"Tom, do you know the expression “money is the root of all evil”?",cn:"Tom，你知道那句話嗎：「金錢是萬惡之源」？"},
    {sp:"Tom",en:"Of course. My grandmother said it about once a week.",cn:"當然知道。我奶奶大概每週都要講一次。"},
    {sp:"Nina",en:"I've never really agreed with it. Money is just paper.",cn:"我其實從來不同意這句話。錢不過就是紙。"},
    {sp:"Tom",en:"Maybe, but look at the news. Corruption, politicians taking money under the table...",cn:"也許吧，但你看看新聞。貪污、政治人物私下收錢……"},
    {sp:"Nina",en:"That's not money being evil. That's people being greedy.",cn:"那不是錢在作惡，那是人在貪心。"},
    {sp:"Tom",en:"So you'd blame greed instead?",cn:"所以你反而會怪貪婪囉？"},
    {sp:"Nina",en:"Yes. Greed is the problem, not the money itself.",cn:"對。問題出在貪婪，而不是錢本身。"},
    {sp:"Tom",en:"Fair enough. But some companies make loads of money using slave labour. That feels pretty evil to me.",cn:"有道理。可是有些公司靠奴工賺了大把的錢。這在我看來就相當邪惡。"},
    {sp:"Nina",en:"It is evil. But that's a choice someone made. The money didn't decide anything.",cn:"那確實是邪惡。但那是有人做出的選擇，錢自己什麼都沒決定。"},
    {sp:"Tom",en:"Okay, then if money is neutral, why does it cause so much trouble?",cn:"好，那如果錢是中立的，它為什麼會造成這麼多麻煩？"},
    {sp:"Nina",en:"Because we never share out anything fairly. A small group holds most of it.",cn:"因為我們從來沒有公平地分配過任何東西。一小群人握著大部分的錢。"},
    {sp:"Tom",en:"So the real question is how we share out what we already have.",cn:"所以真正的問題是，我們怎麼分配已經有的東西。"},
    {sp:"Nina",en:"Exactly. Give the same money to a good government and you get schools and hospitals.",cn:"完全正確。把同樣的錢給一個好政府，你得到的是學校和醫院。"},
    {sp:"Tom",en:"And give it to a bad one and you get corruption.",cn:"給一個壞政府，你得到的就是貪污。"},
    {sp:"Nina",en:"Right. So the expression is wrong. Money isn't the root of all evil. It's a mirror.",cn:"沒錯。所以那句話是錯的。金錢不是萬惡之源，它是一面鏡子。"},
    {sp:"Tom",en:"A mirror. I like that. I'm still going to worry about my rent, though.",cn:"一面鏡子。我喜歡這個說法。不過我還是會擔心我的房租。"},
    {sp:"Nina",en:"That's not greed. That's Taipei.",cn:"那不是貪婪，那叫台北。"}
  ],
  questions:[
    {q:"Which expression are Nina and Tom discussing?",opts:["A. Time is money.","B. Money is the root of all evil.","C. Money talks.","D. Money can't buy happiness."],ans:1,expl:"Nina 一開頭就問 do you know the expression “money is the root of all evil”。"},
    {q:"What does Nina believe is the real problem?",opts:["A. Money itself","B. Banks and interest rates","C. Human greed and the choices people make","D. Old sayings from grandparents"],ans:2,expl:"Nina 說 That's not money being evil. That's people being greedy.，並且說 Greed is the problem, not the money itself。"},
    {q:"What example does Tom use to argue that money can be evil?",opts:["A. Companies making loads of money using slave labour","B. People saving too much for retirement","C. Governments building schools and hospitals","D. His grandmother's weekly advice"],ans:0,expl:"Tom 舉的例子是有些公司靠 slave labour 賺 loads of money。"},
    {q:"In this dialogue, \"share out\" means:",opts:["A. to tell someone a secret","B. to divide something among a group of people","C. to sell something at a low price","D. to keep money in a bank"],ans:1,expl:"share out 是把東西分配給一群人；Nina 說 we never share out anything fairly，指分配不公。"},
    {q:"What does Nina compare money to at the end?",opts:["A. A weapon","B. A river","C. A mirror","D. A machine"],ans:2,expl:"Nina 最後說 Money isn't the root of all evil. It's a mirror.（錢是一面鏡子，映照出人的樣子）。"}
  ]
},

{
  id:"au04",
  level:"B1",
  minutes:3,
  kind:"note",
  title:"Check-in, Gate, and Takeoff",
  titleCn:"報到、登機門與起飛",
  series:"本站自製聽力 · 取材自課堂筆記",
  noteRef:"20260716 搭機英文 On the Plane",
  topic:"✈️ 搭機英文",
  focus:"機場報到與機上服務的固定說法：行李超重、座位選擇、置物與起飛前的安全要求。",
  intro:"Mia 要飛東京。她先在報到櫃檯遇到行李超重的問題，接著在機上被空服員提醒收起小桌板、繫好安全帶。這段對話把「地面報到」和「機上互動」兩個最常用的情境接在一起，是出國最需要聽懂的英文。",
  tip:"聽到數字時（重量、班機號碼、登機門、時間）先在心裡默念一次再往下聽。機場英文的關鍵訊息幾乎都藏在數字和地點名稱裡。",
  pre:[
    {w:"boarding pass",ipa:"/ˈbɔːrdɪŋ pæs/",cn:"登機證",def:"A card that lets you get on a plane."},
    {w:"departure gate",ipa:"/dɪˈpɑːtʃər ɡeɪt/",cn:"登機門",def:"The door where you board your plane."},
    {w:"excess baggage fee",ipa:"/ɪkˈses ˈbæɡɪdʒ fiː/",cn:"超重行李費",def:"Extra money you pay when your bag is too heavy."},
    {w:"carry-on bag",ipa:"/ˈkæri ɒn bæɡ/",cn:"隨身行李",def:"A small bag you take onto the plane with you."},
    {w:"overhead compartment",ipa:"/ˌoʊvərˈhɛd kəmˈpɑːrtmənt/",cn:"頭頂置物櫃",def:"The storage space above your seat on a plane."},
    {w:"aisle seat",ipa:"/aɪl siːt/",cn:"靠走道座位",def:"A seat next to the aisle on a plane."},
    {w:"tray table",ipa:"/treɪ ˈteɪbl/",cn:"小桌板",def:"The small folding table on the back of the seat in front of you."},
    {w:"fasten",ipa:"/ˈfæsən/",cn:"繫緊、扣上",def:"To close or attach something firmly."}
  ],
  script:[
    {sp:"Agent",en:"Good morning. May I see your passport? This is the check-in counter for Flight 725 to Tokyo.",cn:"早安，可以看一下您的護照嗎？這裡是飛往東京 725 班機的報到櫃檯。"},
    {sp:"Mia",en:"Here you are. I'd like an aisle seat if that's possible.",cn:"在這裡。如果可以的話，我想要靠走道座位。"},
    {sp:"Agent",en:"Let me check. Yes, I can give you an aisle seat near the front. Are you checking any luggage today?",cn:"我查一下。可以，我可以給您前面一點的靠走道座位。今天有要託運行李嗎？"},
    {sp:"Mia",en:"Just this one suitcase. Is it too heavy?",cn:"只有這一個行李箱。會太重嗎？"},
    {sp:"Agent",en:"It's twenty-four kilos, so it exceeds our limit by one kilo. I'm afraid there's an excess baggage fee.",cn:"是二十四公斤，超過我們的限重一公斤。恐怕要收超重行李費。"},
    {sp:"Mia",en:"Oh no. How much is the excess baggage fee?",cn:"糟糕。超重行李費要多少錢？"},
    {sp:"Agent",en:"It's usually eight hundred dollars, but you could move something into your carry-on bag instead.",cn:"通常是八百元，不過您也可以把一些東西移到隨身行李裡。"},
    {sp:"Mia",en:"Good idea. I'll take my books out and put them in my carry-on bag.",cn:"好主意。我把書拿出來放進隨身行李。"},
    {sp:"Agent",en:"Perfect, it's twenty-three kilos now. Here's your boarding pass. Your departure gate is C12, and boarding starts at ten forty.",cn:"很好，現在是二十三公斤。這是您的登機證。您的登機門是 C12，十點四十開始登機。"},
    {sp:"Mia",en:"Thank you. Is the departure gate far from here?",cn:"謝謝。登機門離這裡遠嗎？"},
    {sp:"Agent",en:"About fifteen minutes on foot after the security check. Have a good flight!",cn:"過了安檢之後大約走十五分鐘。祝您旅途愉快！"},
    {sp:"Attendant",en:"Excuse me, could you put your bag in the overhead compartment, please?",cn:"不好意思，可以請您把包包放進頭頂置物櫃嗎？"},
    {sp:"Mia",en:"Of course. Sorry, but the overhead compartment above my seat is already full.",cn:"當然。不好意思，我座位上方的頭頂置物櫃已經滿了。"},
    {sp:"Attendant",en:"No problem, I'll find space a few rows back. Also, please close your tray table before takeoff.",cn:"沒問題，我幫您找後面幾排的空位。另外，起飛前請把小桌板收起來。"},
    {sp:"Mia",en:"I've closed the tray table. Do I need to keep my seat upright too?",cn:"我已經收好小桌板了。椅背也需要保持直立嗎？"},
    {sp:"Attendant",en:"Yes, please, and fasten your seat belt. We'll be taking off in about ten minutes.",cn:"是的，麻煩您，並且繫好安全帶。我們大約十分鐘後起飛。"},
    {sp:"Mia",en:"Got it. Could I have a blanket after takeoff? It's a bit cold in the cabin.",cn:"了解。起飛後可以給我一條毯子嗎？客艙裡有點冷。"},
    {sp:"Attendant",en:"Certainly. I'll bring one once the seat belt sign is off.",cn:"沒問題。安全帶指示燈熄滅後我就拿一條給您。"}
  ],
  questions:[
    {q:"Why does Mia move her books into her carry-on bag?",opts:["A. Because she wants to read them on the plane.","B. Because her suitcase is one kilo over the weight limit.","C. Because the airline does not allow books in suitcases.","D. Because her suitcase is broken."],ans:1,expl:"櫃檯人員說行李二十四公斤、超過限重一公斤（exceeds our limit by one kilo），所以 Mia 把書移到隨身行李來避開超重費。"},
    {q:"What kind of seat does Mia ask for?",opts:["A. A window seat.","B. A seat with extra legroom.","C. An aisle seat.","D. A seat at the back."],ans:2,expl:"Mia 第二句就說 I'd like an aisle seat，也就是靠走道座位。"},
    {q:"What is the departure gate number and boarding time?",opts:["A. Gate C2 at ten fourteen.","B. Gate C12 at ten forty.","C. Gate D12 at ten forty.","D. Gate C12 at eleven forty."],ans:1,expl:"櫃檯人員說 Your departure gate is C12, and boarding starts at ten forty，登機門 C12、十點四十開始登機。"},
    {q:"What does \"overhead compartment\" mean?",opts:["A. The space under the seat in front of you.","B. The storage space above your seat.","C. The area near the plane door.","D. The small table on the seat back."],ans:1,expl:"overhead compartment 是座位「上方」的置物櫃；座位前方的小桌板叫 tray table。"},
    {q:"What does the flight attendant ask Mia to do before takeoff?",opts:["A. Recline her seat and open the tray table.","B. Move to another row.","C. Close the tray table and fasten her seat belt.","D. Put her blanket away."],ans:2,expl:"空服員要求 close your tray table 並 fasten your seat belt，同時椅背要保持 upright。"}
  ]
},

{
  id:"au05",
  level:"B1",
  minutes:3,
  kind:"note",
  title:"Should We Cancel the Hike?",
  titleCn:"這趟登山要取消嗎？",
  series:"本站自製聽力 · 取材自課堂筆記",
  noteRef:"20260604 各種天氣描述",
  topic:"🌦️ 天氣與天災",
  focus:"看天氣預報做決定：雨的強弱說法、天氣多變的形容詞，以及用 due to 說明原因。",
  intro:"Lisa 和 Ben 本來週末要去爬山，但預報說會有雷雨。他們一邊討論山區的落石與土石流風險，一邊考慮要不要改期。這段對話把「天氣形容詞」和「天災後果」自然地串在一起。",
  tip:"先抓住三個關鍵：星期幾、天氣狀況、他們的決定。聽到 due to 時，後面接的就是「原因」，可以直接記下來。",
  pre:[
    {w:"forecast",ipa:"/ˈfɔːrkæst/",cn:"預報",def:"對未來天氣等狀況的預測說明"},
    {w:"thunderstorm",ipa:"/ˈθʌndərstɔːrm/",cn:"雷雨、雷暴",def:"伴隨雷電的強烈暴風雨"},
    {w:"pour",ipa:"/pɔːr/",cn:"傾盆大雨；（雨）下得很大",def:"to rain heavily; 'it is pouring' = it is raining very hard"},
    {w:"humid",ipa:"/ˈhjuːmɪd/",cn:"潮濕的",def:"containing a lot of water in the air; warm and wet"},
    {w:"changeable",ipa:"/ˈtʃeɪndʒəbl/",cn:"多變的（天氣）",def:"likely to change frequently; = unpredictable (for weather)"},
    {w:"landslide",ipa:"/ˈlændslaɪd/",cn:"山崩、土石流",def:"a mass of earth or rock sliding down a mountain slope"},
    {w:"get stuck",ipa:"/ɡɛt stʌk/",cn:"卡住、動彈不得",def:"to be unable to move or progress"},
    {w:"due to",ipa:"/duː tu/",cn:"由於、因為",def:"用於說明原因，後面接名詞，相當於 because of"}
  ],
  script:[
    {sp:"Lisa",en:"Have you seen the forecast for this weekend? We're supposed to go hiking on Saturday.",cn:"你看了這個週末的天氣預報嗎？我們星期六本來要去爬山。"},
    {sp:"Ben",en:"I checked it this morning. The forecast says heavy rain, with a thunderstorm in the afternoon.",cn:"我今天早上看過了。預報說會下大雨，下午還有雷雨。"},
    {sp:"Lisa",en:"A thunderstorm in the mountains sounds dangerous.",cn:"在山上遇到雷雨聽起來很危險。"},
    {sp:"Ben",en:"It is. And when it pours for hours, there's often a landslide on the mountain road.",cn:"確實危險。而且雨連下好幾個小時的時候，山路常常會發生土石流。"},
    {sp:"Lisa",en:"Really? Has that happened before?",cn:"真的嗎？以前發生過嗎？"},
    {sp:"Ben",en:"Last summer a landslide closed the road for two days. Some drivers got stuck up there overnight.",cn:"去年夏天有一次土石流讓那條路封閉了兩天，有些駕駛在山上卡了一整晚。"},
    {sp:"Lisa",en:"I really don't want to get stuck in the mountains. Maybe we should just cancel.",cn:"我真的不想被困在山上。也許我們乾脆取消好了。"},
    {sp:"Ben",en:"Let's not cancel yet. The weather here is so changeable — it can be pouring at ten and sunny at noon.",cn:"先別急著取消。這裡的天氣很多變，可能十點還在下大雨，中午就出太陽了。"},
    {sp:"Lisa",en:"That's true. Taiwan's summer weather is really changeable.",cn:"也對。台灣夏天的天氣真的很多變。"},
    {sp:"Ben",en:"Sunday looks much better, but it will be very humid.",cn:"星期天看起來好多了，不過會非常潮濕。"},
    {sp:"Lisa",en:"Humid weather makes hiking so tiring. I start sweating after five minutes.",cn:"潮濕的天氣讓爬山特別累，我走五分鐘就開始流汗。"},
    {sp:"Ben",en:"Then let's start early and rest in the shade when it gets hot.",cn:"那我們就早點出發，熱起來的時候在陰涼處休息。"},
    {sp:"Lisa",en:"Good plan. By the way, my train was forty minutes late yesterday due to the rain.",cn:"好主意。對了，我昨天的火車因為下雨誤點了四十分鐘。"},
    {sp:"Ben",en:"Mine too. Half the buses were delayed due to flooding near the station.",cn:"我的也是。車站附近淹水，害一半的公車都誤點了。"},
    {sp:"Lisa",en:"Okay. Let's decide on Friday night, after we see the latest forecast.",cn:"好，我們星期五晚上看過最新的天氣預報再決定。"},
    {sp:"Ben",en:"Agreed. If there's a thunderstorm warning, we'll go to the museum instead.",cn:"同意。如果有雷雨警報，我們就改去博物館。"}
  ],
  questions:[
    {q:"What were Lisa and Ben planning to do on Saturday?",opts:["A. Go hiking in the mountains.","B. Visit a museum.","C. Take a train to the beach.","D. Stay home and watch the news."],ans:0,expl:"Lisa 一開始就說 We're supposed to go hiking on Saturday，週六原本要去爬山。"},
    {q:"What happened on the mountain road last summer?",opts:["A. A thunderstorm damaged some cars.","B. A landslide closed the road for two days.","C. The road was closed for repairs.","D. A bus broke down near the top."],ans:1,expl:"Ben 說 a landslide closed the road for two days，還有駕駛困在山上過夜。"},
    {q:"Why is Sunday not a perfect day either?",opts:["A. There will be a thunderstorm.","B. The road will still be closed.","C. It will be very humid.","D. It will be too cold."],ans:2,expl:"Ben 說 Sunday looks much better, but it will be very humid，星期天天氣較好但很潮濕。"},
    {q:"When we talk about weather, \"changeable\" is closest in meaning to which word?",opts:["A. humid","B. unpredictable","C. sunny","D. freezing"],ans:1,expl:"形容天氣時 changeable（多變的）和 unpredictable（難以預測的）意思幾乎相同。"},
    {q:"What will they do if there is a thunderstorm warning?",opts:["A. Go hiking anyway.","B. Take an early train.","C. Go to the museum.","D. Wait at the bus station."],ans:2,expl:"最後一句 Ben 說 If there's a thunderstorm warning, we'll go to the museum instead。"}
  ]
},

{
  id:"au06",
  level:"B1",
  minutes:3,
  kind:"note",
  title:"Water Through the Ceiling",
  titleCn:"天花板漏水了",
  series:"本站自製聽力 · 取材自課堂筆記",
  noteRef:"20260106 Landlord and Tenant",
  topic:"🔧 居家修繕與房東房客",
  focus:"向房東報修的說法：描述故障、要求安排師傅，以及房東與房客的責任分工。",
  intro:"房客 Emma 發現浴室天花板漏水，牆上開始出現濕氣，插座也壞了。她打電話給房東 Mr. Lin，兩人討論該找水電師傅還是木工、什麼時候修、誰要付錢。這是租屋族最實用的一段對話。",
  tip:"注意描述「壞掉」的形容詞（faulty）和「安排」的動詞（arrange）。聽的時候把「問題」和「解決方式」分成兩欄記，理解會快很多。",
  pre:[
    {w:"landlord",ipa:"/ˈlændˌlɔːrd/",cn:"房東",def:"A person who owns a property and rents it to other people."},
    {w:"tenant",ipa:"/ˈtenənt/",cn:"房客、租客",def:"A person who pays rent to live in a building owned by someone else."},
    {w:"plumber",ipa:"/ˈplʌmər/",cn:"水管工人",def:"A person who fixes water pipes, toilets, and bathrooms."},
    {w:"faulty",ipa:"/ˈfɔlti/",cn:"故障的、有缺陷的",def:"Not working correctly because of a problem or defect."},
    {w:"socket",ipa:"/ˈsɑkɪt/",cn:"插座",def:"A device on a wall that you plug an electrical device into."},
    {w:"ceiling",ipa:"/ˈsiːlɪŋ/",cn:"天花板",def:"The surface that forms the top of the inside of a room."},
    {w:"dampness",ipa:"/ˈdæmpnəs/",cn:"潮濕、濕氣",def:"The condition of being slightly wet, often inside a building."},
    {w:"arrange",ipa:"/əˈreɪndʒ/",cn:"安排",def:"To plan or organize something so it can happen."}
  ],
  script:[
    {sp:"Emma",en:"Hello, Mr. Lin. It's Emma from apartment 5B. Sorry to call so late.",cn:"哈囉，林先生。我是 5B 的 Emma，抱歉這麼晚打給您。"},
    {sp:"Landlord",en:"No problem, Emma. What's wrong?",cn:"沒關係，Emma。發生什麼事了？"},
    {sp:"Emma",en:"There's water coming through the ceiling in the bathroom, and the wall feels wet.",cn:"浴室的天花板一直在漏水，牆壁摸起來也是濕的。"},
    {sp:"Landlord",en:"Water through the ceiling? That sounds serious. Is it still dripping now?",cn:"從天花板漏水？聽起來很嚴重。現在還在滴嗎？"},
    {sp:"Emma",en:"Yes. There's dampness on the wall too, and the paint is starting to come off.",cn:"對。牆上也有濕氣，油漆開始剝落了。"},
    {sp:"Landlord",en:"Dampness like that usually means a pipe is leaking upstairs. I'll call a plumber first thing tomorrow.",cn:"這種濕氣通常代表樓上有水管在漏。我明天一早就打給水管工人。"},
    {sp:"Emma",en:"Thank you. There's one more thing — the socket next to the sink stopped working last week.",cn:"謝謝您。還有一件事，洗手台旁邊的插座上星期就不能用了。"},
    {sp:"Landlord",en:"A faulty socket near water isn't safe at all. Please don't use it.",cn:"靠近水的插座故障非常不安全，請千萬不要用它。"},
    {sp:"Emma",en:"I haven't touched it since Monday. Should I call an electrician myself?",cn:"我從星期一就沒碰過了。我要自己找電工來嗎？"},
    {sp:"Landlord",en:"No, I'll arrange one. As the landlord, I'm responsible for repairs like this.",cn:"不用，我會安排。身為房東，這類維修是我的責任。"},
    {sp:"Emma",en:"I really appreciate that. My last landlord took three weeks to fix anything.",cn:"真的很感謝。我上一個房東修任何東西都要拖三個星期。"},
    {sp:"Landlord",en:"I don't want a dispute with a good tenant. If I delay, the damage only gets worse.",cn:"我不想和好房客起糾紛。我要是拖延，損害只會更嚴重。"},
    {sp:"Emma",en:"That's very fair. When can the plumber come?",cn:"這樣很合理。水管工人什麼時候可以來？"},
    {sp:"Landlord",en:"I'll arrange for him to come at nine tomorrow morning. Will you be home?",cn:"我會安排他明天早上九點過來。你會在家嗎？"},
    {sp:"Emma",en:"I'll work from home so I can let him in.",cn:"我會在家工作，這樣就能幫他開門。"},
    {sp:"Landlord",en:"Great. I'll come and inspect the ceiling myself while he's there.",cn:"太好了。他在的時候我也會過去親自檢查天花板。"},
    {sp:"Emma",en:"Honestly, I feel so relieved. I was worried I'd have to pay for all of it.",cn:"老實說我鬆了一口氣。我本來很擔心要自己付全部的費用。"},
    {sp:"Landlord",en:"Not at all. A tenant pays the rent; the landlord maintains the building.",cn:"完全不用。房客付房租，房東負責維護房子。"}
  ],
  questions:[
    {q:"What is Emma's main problem?",opts:["A. Her neighbors are too noisy.","B. Water is coming through the bathroom ceiling.","C. There is no hot water in the kitchen.","D. Her front door is broken."],ans:1,expl:"Emma 第三句說 There's water coming through the ceiling in the bathroom，浴室天花板漏水是主要問題。"},
    {q:"Why does the landlord tell Emma not to use the socket?",opts:["A. It is too far from the sink.","B. He will charge her extra for the electricity.","C. It is faulty and it is close to water.","D. The plumber needs to use it."],ans:2,expl:"房東說 A faulty socket near water isn't safe at all，故障插座又靠近水源，非常危險。"},
    {q:"Who will pay for the repairs?",opts:["A. Emma, because she is the tenant.","B. The plumber and the electrician.","C. Emma and the landlord will share the cost.","D. The landlord, because he is responsible for repairs."],ans:3,expl:"房東說 As the landlord, I'm responsible for repairs like this，最後也說房客付房租、房東維護房子。"},
    {q:"What does \"dampness\" mean?",opts:["A. Being completely dry.","B. Being slightly wet, often inside a building.","C. A thick layer of dust.","D. A crack in the wall."],ans:1,expl:"dampness 是「潮濕、濕氣」，指建築物內部略為潮濕的狀態。"},
    {q:"When will the plumber come?",opts:["A. Tonight.","B. At nine tomorrow morning.","C. Next Monday.","D. In three weeks."],ans:1,expl:"房東說 I'll arrange for him to come at nine tomorrow morning，明天早上九點。"}
  ]
},

{
  id:"au07",
  level:"B1",
  minutes:3,
  kind:"note",
  title:"At the Doctor's Office",
  titleCn:"在診所看醫生",
  series:"本站自製聽力 · 取材自課堂筆記",
  noteRef:"20260305 問候與健康詞彙 Greetings & Health",
  topic:"🏥 身體症狀",
  focus:"描述身體不適的症狀，以及醫生問診、給建議的常見說法。",
  intro:"Anna 昨晚吃了油膩的炸雞，隔天開始發燒、頭暈又想吐。她到診所看醫生，把自己的症狀一項一項描述出來。這段對話示範了「我覺得…」的症狀說法，以及醫生如何診斷與給藥。",
  tip:"第一次聽先抓「她哪裡不舒服」這條主線，不要急著聽懂每個字。第二次再專心聽數字（體溫、天數）和醫生的建議。",
  pre:[
    {w:"symptom",ipa:"/ˈsɪmp.təm/",cn:"症狀",def:"a sign that you have an illness."},
    {w:"fever",ipa:"/ˈfiː.vɚ/",cn:"發燒",def:"a body temperature that is higher than normal."},
    {w:"nauseous",ipa:"/ˈnɔː.ʃəs/",cn:"噁心想吐的",def:"feeling like you might vomit."},
    {w:"dizzy",ipa:"/ˈdɪz.i/",cn:"頭暈的",def:"feeling like everything is turning around you."},
    {w:"stomach pain",ipa:"/ˈstʌm.ək peɪn/",cn:"胃痛、肚子痛",def:"a pain in the area of your stomach."},
    {w:"food poisoning",ipa:"/ˈfuːd ˌpɔɪ.zən.ɪŋ/",cn:"食物中毒",def:"an illness caused by eating food that contains harmful bacteria."},
    {w:"painkiller",ipa:"/ˈpeɪnˌkɪlər/",cn:"止痛藥",def:"a medicine that reduces or stops pain in your body"},
    {w:"relieve",ipa:"/rɪˈliːv/",cn:"緩解、減輕",def:"to make an unpleasant feeling or situation less severe"}
  ],
  script:[
    {sp:"Doctor",en:"Good morning, Anna. Please sit down. What brings you in today?",cn:"早安，Anna。請坐。今天是哪裡不舒服呢？"},
    {sp:"Anna",en:"I've been feeling unwell since yesterday evening. I think I have a fever.",cn:"我從昨天傍晚就一直不太舒服。我覺得我在發燒。"},
    {sp:"Doctor",en:"Let me check your temperature. Yes, it's 38.5 degrees. You're definitely running a fever.",cn:"我幫你量一下體溫。嗯，38.5 度。你確實在發燒。"},
    {sp:"Anna",en:"I also feel dizzy when I stand up, and I feel nauseous almost all the time.",cn:"我站起來的時候會頭暈，而且幾乎一直覺得噁心想吐。"},
    {sp:"Doctor",en:"Do you have any stomach pain?",cn:"你有肚子痛嗎？"},
    {sp:"Anna",en:"Yes, quite a lot. The stomach pain started after dinner last night.",cn:"有，滿嚴重的。肚子痛是昨天晚餐之後開始的。"},
    {sp:"Doctor",en:"What did you have for dinner?",cn:"你晚餐吃了什麼？"},
    {sp:"Anna",en:"A big plate of fried chicken from a night market stall. It was very greasy.",cn:"夜市攤子買的一大盤炸雞。非常油膩。"},
    {sp:"Doctor",en:"That's a very common symptom pattern after greasy street food. I think you have food poisoning.",cn:"吃完油膩的路邊小吃之後，這是很常見的症狀組合。我認為你是食物中毒。"},
    {sp:"Anna",en:"Is food poisoning serious? Do I need to stay in the hospital?",cn:"食物中毒嚴重嗎？我需要住院嗎？"},
    {sp:"Doctor",en:"No, not in your case. Drink plenty of water, eat plain rice, and rest at home for two days.",cn:"不用，你的情況不需要。多喝水、吃清淡的白飯，在家休息兩天。"},
    {sp:"Anna",en:"Can I take a painkiller for the stomach pain? I have some at home.",cn:"我可以吃止痛藥止肚子痛嗎？我家裡有一些。"},
    {sp:"Doctor",en:"You can, but only after eating something light. I'll also give you medicine to relieve the nausea.",cn:"可以，但一定要先吃點清淡的東西再吃。我也會開藥幫你緩解噁心的感覺。"},
    {sp:"Anna",en:"Thank you. How long will it take before I feel normal again?",cn:"謝謝。大概要多久我才會恢復正常？"},
    {sp:"Doctor",en:"Most people recover in two or three days. If the fever doesn't go down by Friday, come back and see me.",cn:"大部分的人兩三天就會好。如果到星期五還沒退燒，就再回來找我。"},
    {sp:"Anna",en:"I will. Thank you very much, Doctor.",cn:"我會的。非常謝謝你，醫生。"}
  ],
  questions:[
    {q:"What does the doctor think is wrong with Anna?",opts:["A. She has a migraine.","B. She has food poisoning.","C. She has motion sickness.","D. She broke her arm."],ans:1,expl:"醫生說「I think you have food poisoning.」，因為她吃了油膩的夜市炸雞。"},
    {q:"What is Anna's temperature?",opts:["A. 36.5 degrees","B. 37.5 degrees","C. 38.5 degrees","D. 39.5 degrees"],ans:2,expl:"醫生量完體溫後說「it's 38.5 degrees」。"},
    {q:"What did Anna eat for dinner the night before?",opts:["A. Fried chicken from a night market","B. A fresh salad","C. Plain rice porridge","D. Nothing at all"],ans:0,expl:"Anna 說她吃了夜市攤子的一大盤炸雞（fried chicken），而且很油膩。"},
    {q:"In the dialogue, what does \"relieve\" mean?",opts:["A. To make an unpleasant feeling less severe","B. To make the pain much worse","C. To measure someone's temperature","D. To cancel an appointment"],ans:0,expl:"relieve 是「緩解、減輕」，醫生開藥是為了減輕噁心的感覺。"},
    {q:"When should Anna go back to the doctor?",opts:["A. Tomorrow morning, no matter what","B. If the fever is still there on Friday","C. Only if she loses her medicine","D. In two weeks for a check-up"],ans:1,expl:"醫生說「If the fever doesn't go down by Friday, come back and see me.」"}
  ]
},

{
  id:"au08",
  level:"B1",
  minutes:3,
  kind:"note",
  title:"Understanding Taiwan's Health Insurance",
  titleCn:"認識台灣的健保",
  series:"本站自製聽力 · 取材自課堂筆記",
  noteRef:"20260226 健康保險 Health Insurance",
  topic:"💳 健康保險",
  focus:"用簡單的英文解釋制度：誰付錢、保險給付什麼、和私人保險的差別。",
  intro:"David 是剛來台灣工作的外國同事，他看到薪資單上有一筆看不懂的扣款。同事 Lisa 用簡單的英文向他解釋全民健保是什麼、怎麼收費、又給付哪些項目。",
  tip:"這種「解釋制度」的對話會有很多數字和專有名詞。聽的時候先分清楚「誰付錢」和「付什麼」兩件事，數字可以第二次再補。",
  pre:[
    {w:"National Health Insurance (NHI)",ipa:"/ˈnæʃənəl hɛlθ ɪnˈʃʊrəns/",cn:"全民健康保險",def:"Taiwan's government program that helps everyone pay for medical care."},
    {w:"government program",ipa:"/ˈgʌvərnmənt ˈproʊˌgræm/",cn:"政府計畫",def:"a system or plan that is organized and run by the government."},
    {w:"monthly fee",ipa:"/ˈmʌnθli fi/",cn:"每月費用",def:"an amount of money that you have to pay every month."},
    {w:"employer",ipa:"/ɪmˈplɔɪər/",cn:"雇主",def:"the person or company that you work for and that pays your salary."},
    {w:"covered by insurance",ipa:"/ˈkʌvərd baɪ ɪnˈʃʊrəns/",cn:"由保險支付",def:"paid for by an insurance plan instead of by yourself."},
    {w:"medical expenses",ipa:"/ˈmɛdɪkəl ɪkˈspɛnsɪz/",cn:"醫療費用／醫療開銷",def:"the total money spent on healthcare, doctors, and medicine, often emphasizing the cost or spending."},
    {w:"private insurance",ipa:"/ˈpraɪvɪt ɪnˈʃʊrəns/",cn:"私人保險",def:"an insurance plan that a person buys themselves rather than getting from the government."},
    {w:"affordable",ipa:"/əˈfɔːrdəbl/",cn:"負擔得起的／便宜的",def:"not too expensive, so that ordinary people can pay for it."}
  ],
  script:[
    {sp:"David",en:"Lisa, I just got my first payslip in Taiwan, and there's one deduction I don't understand.",cn:"Lisa，我剛拿到在台灣的第一張薪資單，上面有一筆扣款我看不懂。"},
    {sp:"Lisa",en:"Let me have a look. Ah, that one is for the National Health Insurance (NHI).",cn:"我看看。啊，那一筆是全民健康保險的費用。"},
    {sp:"David",en:"What exactly is that? Is it the same as buying insurance from a company?",cn:"那到底是什麼？跟向保險公司買保險一樣嗎？"},
    {sp:"Lisa",en:"No, it's a government program that helps everyone in Taiwan pay for medical care.",cn:"不一樣，那是一個政府計畫，幫助在台灣的每個人負擔醫療照護的費用。"},
    {sp:"David",en:"So everyone has to join? Even foreign workers like me?",cn:"所以每個人都要加入？連我這種外籍工作者也要嗎？"},
    {sp:"Lisa",en:"Yes, everyone. You pay a small monthly fee, and your employer pays part of it too.",cn:"對，每個人都要。你每個月付一筆小額費用，你的雇主也會幫你負擔一部分。"},
    {sp:"David",en:"That explains why my company took some money as well. How much do they pay?",cn:"難怪我的公司也扣了一些錢。他們付多少？"},
    {sp:"Lisa",en:"Your employer covers about sixty percent, so your own part stays affordable.",cn:"你的雇主大約負擔六成，所以你自己要付的部分是負擔得起的。"},
    {sp:"David",en:"And what does the card actually pay for?",cn:"那這張卡實際上給付什麼？"},
    {sp:"Lisa",en:"Most doctor visits, medicine, and hospital stays are covered by insurance. You only pay a small fee at the counter.",cn:"大部分的看診、藥品和住院都由保險支付。你在櫃檯只需要付一小筆錢。"},
    {sp:"David",en:"In my country, medical expenses can be really high. One night in the hospital costs a fortune.",cn:"在我的國家，醫療費用可能非常高。住院一晚就要花一大筆錢。"},
    {sp:"Lisa",en:"Here it's much cheaper. That's why many people say the NHI is one of the best things about living in Taiwan.",cn:"這裡便宜多了。所以很多人說健保是住在台灣最棒的事情之一。"},
    {sp:"David",en:"Do people still buy private insurance, then?",cn:"那大家還會買私人保險嗎？"},
    {sp:"Lisa",en:"Some do. Private insurance helps with things the NHI doesn't cover, like a single room or expensive cancer drugs.",cn:"有些人會。私人保險可以支付健保不給付的項目，像是單人病房或昂貴的癌症用藥。"},
    {sp:"David",en:"I see. So the government plan is the base, and private insurance is the extra layer.",cn:"我懂了。所以政府的計畫是基礎，私人保險是額外的一層。"},
    {sp:"Lisa",en:"Exactly. For most families, that monthly fee is definitely worth it.",cn:"沒錯。對大多數家庭來說，那筆每月費用絕對值得。"}
  ],
  questions:[
    {q:"What was the deduction on David's payslip for?",opts:["A. Income tax","B. National Health Insurance","C. His apartment rent","D. A company lunch plan"],ans:1,expl:"Lisa 說「that one is for the National Health Insurance (NHI)」。"},
    {q:"Who helps David pay for the insurance?",opts:["A. His landlord","B. His employer","C. His family back home","D. Nobody — he pays it all"],ans:1,expl:"Lisa 說「your employer pays part of it too」，而且大約負擔六成。"},
    {q:"About what percentage does the employer cover?",opts:["A. About 20 percent","B. About 40 percent","C. About 60 percent","D. 100 percent"],ans:2,expl:"對話中提到「Your employer covers about sixty percent」。"},
    {q:"According to Lisa, what does private insurance help with?",opts:["A. Things the NHI does not cover","B. Exactly the same things as the NHI","C. Paying the rent","D. Buying plane tickets home"],ans:0,expl:"Lisa 說私人保險用來支付健保不給付的項目，例如單人病房或昂貴的癌症用藥。"},
    {q:"What does \"affordable\" mean?",opts:["A. Very expensive","B. Not too expensive to pay for","C. Completely free","D. Against the law"],ans:1,expl:"affordable 是「負擔得起的」，指價格不會太貴，一般人付得起。"}
  ]
},

{
  id:"au09",
  level:"B1",
  minutes:3,
  kind:"note",
  title:"The Year-End Banquet",
  titleCn:"公司的尾牙",
  series:"本站自製聽力 · 取材自課堂筆記",
  noteRef:"20260129 尾牙 Year-End Banquet",
  topic:"🎉 尾牙與春節",
  focus:"用英文介紹台灣的尾牙與過年習俗，以及活動流程的說法。",
  intro:"Emma 是公司新來的同事，這是她第一次參加尾牙。Kevin 向她介紹尾牙的流程：圓桌合菜、服裝規定、老闆敬酒、主持人抽獎，還有接下來的年夜飯和紅包。",
  tip:"這一課的重點是「活動順序」。聽的時候可以在心裡排出時間軸：吃飯 → 敬酒 → 抽獎 → 回家團圓。這樣細節就會自己歸位。",
  pre:[
    {w:"annual banquet",ipa:"/ˈænjuəl ˈbæŋkwɪt/",cn:"年度/年終宴會",def:"a large formal dinner that a company holds once a year for its staff"},
    {w:"festive",ipa:"/ˈfestɪv/",cn:"節慶的/歡樂的",def:"having a happy, celebratory feeling, like at a holiday party"},
    {w:"lively",ipa:"/ˈlaɪvli/",cn:"熱鬧的/活躍的",def:"full of energy, activity, and excitement"},
    {w:"make a toast",ipa:"/meɪk ə toʊst/",cn:"敬酒",def:"to raise your glass and say something nice before drinking, to celebrate someone or something"},
    {w:"dress code",ipa:"/dres koʊd/",cn:"服裝規定",def:"a set of rules about what kind of clothes you should wear to an event"},
    {w:"lucky draw",ipa:"/ˈlʌki drɔː/",cn:"抽獎",def:"a game where winners are chosen randomly to receive prizes"},
    {w:"gift voucher",ipa:"/ɡɪft ˈvaʊtʃər/",cn:"禮券",def:"a piece of paper or card that can be used like money to buy things at a certain store"},
    {w:"red envelope",ipa:"/red ˈɑːn.və.loʊp/",cn:"紅包",def:"a red paper packet containing money, given as a gift especially during Chinese New Year."}
  ],
  script:[
    {sp:"Kevin",en:"Emma, are you coming to the annual banquet on Friday night?",cn:"Emma，你星期五晚上會來尾牙嗎？"},
    {sp:"Emma",en:"Of course! It's my first one. What is it like?",cn:"當然！這是我第一次參加。尾牙是什麼樣子？"},
    {sp:"Kevin",en:"Very lively. The whole company sits at big round tables and shares a set menu.",cn:"非常熱鬧。全公司坐在大圓桌旁，一起吃合菜套餐。"},
    {sp:"Emma",en:"Is there a dress code? I don't want to wear the wrong thing.",cn:"有服裝規定嗎？我不想穿錯衣服。"},
    {sp:"Kevin",en:"Semi-formal is fine. Most people wear red or something festive.",cn:"半正式就可以了。大部分的人會穿紅色或有節慶感的衣服。"},
    {sp:"Emma",en:"Red is for good luck, right?",cn:"紅色代表好運，對吧？"},
    {sp:"Kevin",en:"Exactly. At the beginning our manager always likes to make a toast to the whole team.",cn:"沒錯。一開始我們經理總是喜歡向全體同仁敬酒。"},
    {sp:"Emma",en:"Do I have to say anything when that happens?",cn:"到那個時候我需要說什麼嗎？"},
    {sp:"Kevin",en:"No, you just stand up and raise your glass. After dinner, the MC starts the lucky draw.",cn:"不用，你只要站起來舉杯就好。晚餐後，主持人就會開始抽獎。"},
    {sp:"Emma",en:"What kind of prizes do they give?",cn:"他們會送什麼樣的獎品？"},
    {sp:"Kevin",en:"Last year the top prize was a new phone, and everyone went home with a gift voucher for a department store.",cn:"去年的頭獎是一支新手機，而且每個人都帶了一張百貨公司的禮券回家。"},
    {sp:"Emma",en:"Nice! Is the banquet part of Chinese New Year?",cn:"太好了！尾牙算是農曆新年的一部分嗎？"},
    {sp:"Kevin",en:"It comes just before it. A week later, most people go home for the reunion dinner with their family.",cn:"它就在過年前。一週後，大部分的人會回家和家人吃年夜飯。"},
    {sp:"Emma",en:"And that's when the children get a red envelope?",cn:"那也就是小孩子收到紅包的時候？"},
    {sp:"Kevin",en:"Yes, with money inside for good luck. Families also decorate their doors with couplets and hang lanterns.",cn:"對，裡面放錢代表好運。家家戶戶也會在門上貼對聯、掛燈籠。"},
    {sp:"Emma",en:"I can't wait. It sounds like a really festive two weeks.",cn:"我等不及了。聽起來是非常有節慶氣氛的兩個星期。"}
  ],
  questions:[
    {q:"When is the annual banquet?",opts:["A. Monday afternoon","B. Wednesday evening","C. Friday night","D. Sunday lunchtime"],ans:2,expl:"Kevin 一開始就問「are you coming to the annual banquet on Friday night?」"},
    {q:"What is the dress code for the banquet?",opts:["A. Very casual, like shorts","B. Semi-formal, often red","C. Black suits only","D. There is no dress code"],ans:1,expl:"Kevin 說「Semi-formal is fine. Most people wear red or something festive.」"},
    {q:"Who starts the lucky draw?",opts:["A. The manager","B. Emma","C. The MC","D. The restaurant chef"],ans:2,expl:"對話中提到「the MC starts the lucky draw」，MC 就是活動主持人。"},
    {q:"What did everyone receive at last year's banquet?",opts:["A. A new phone","B. A gift voucher for a department store","C. A red envelope from the manager","D. A free lantern"],ans:1,expl:"新手機是頭獎（top prize），但每個人都拿到的是百貨公司的禮券（gift voucher）。"},
    {q:"What does \"lively\" mean?",opts:["A. Quiet and a little boring","B. Full of energy and excitement","C. Very expensive","D. Strictly formal"],ans:1,expl:"lively 是「熱鬧的、活躍的」，形容充滿活力與興奮感的場面。"}
  ]
}
],

/* ========== 生活場景（本站自製對話） ========== */
scenes:[
{
  id:"sc01",
  level:"B1",
  minutes:5,
  kind:"scene",
  title:"I Can't Come In",
  titleCn:"我沒辦法去上班",
  series:"本站自製對話 · 主題參考 VOA Let's Learn English",
  topic:"🏥 看醫生",
  focus:"描述身體症狀：I feel / I have a / My ~ hurts",
  source:"本站自製教材（對話與中譯皆為原創撰寫）",
  intro:"Anna 早上起來不舒服，先打電話跟主管請假，再打給醫生描述症狀。這一課會教你最實用的「我哪裡不舒服」英文——出國旅行如果需要看醫生，這些句子就是你的救命句。",
  tip:"跟讀的時候刻意把症狀說慢一點、清楚一點。真的看醫生時，醫生最怕病人說了一大串但聽不清楚在哪裡痛。練到可以一句接一句講出來就過關。",
  pre:[
    {w:"feel well",ipa:"/fiːl wel/",cn:"覺得身體還好",def:"To feel healthy and normal."},
    {w:"headache",ipa:"/ˈhedeɪk/",cn:"頭痛",def:"A pain in your head."},
    {w:"stomachache",ipa:"/ˈstʌməkeɪk/",cn:"肚子痛",def:"A pain in your stomach."},
    {w:"sore throat",ipa:"/sɔːr θroʊt/",cn:"喉嚨痛",def:"When your throat hurts, often from a cold."},
    {w:"cough",ipa:"/kɔːf/",cn:"咳嗽",def:"To push air out of your lungs noisily."},
    {w:"fever",ipa:"/ˈfiːvər/",cn:"發燒",def:"A body temperature that is higher than normal."},
    {w:"appointment",ipa:"/əˈpɔɪntmənt/",cn:"預約（門診）",def:"A time you plan to see the doctor."},
    {w:"take medicine",ipa:"/teɪk ˈmedɪsn/",cn:"吃藥",def:"To use pills or liquid to get better."}
  ],
  keyLines:[
    {en:"I don't feel well today. I can't come in.",cn:"我今天不舒服，沒辦法去上班。"},
    {en:"What's wrong? What are your symptoms?",cn:"怎麼了？你有什麼症狀？"},
    {en:"I have a really bad headache.",cn:"我頭痛得很厲害。"},
    {en:"My throat is sore and I have a cough.",cn:"我喉嚨痛，而且一直咳嗽。"},
    {en:"I think I have a fever, too.",cn:"我覺得我也發燒了。"},
    {en:"You should see a doctor.",cn:"你應該去看醫生。"},
    {en:"I'd like to make an appointment, please.",cn:"我想預約看診。"},
    {en:"Take this medicine and drink lots of water.",cn:"吃這個藥，然後多喝水。"},
    {en:"Get some rest and you'll feel better soon.",cn:"好好休息，你很快就會好起來。"}
  ],
  questions:[
    {q:"Why can't Anna come to work?",opts:["A. She is on vacation","B. She doesn't feel well","C. She overslept","D. The office is closed"],ans:1,expl:"她打電話說 I don't feel well today. I can't come in."},
    {q:"Which symptom does Anna NOT mention?",opts:["A. Headache","B. Sore throat","C. Broken arm","D. Cough"],ans:2,expl:"她說了頭痛、喉嚨痛、咳嗽和發燒，但沒提到手臂骨折。"},
    {q:"What does the doctor tell Anna to do?",opts:["A. Go to the hospital immediately","B. Take medicine and rest","C. Keep working from home","D. Take a hot bath"],ans:1,expl:"醫生說 Take this medicine and drink lots of water. Get some rest."},
    {q:"\"I have a sore throat\" 的意思是？",opts:["A. 我胃痛","B. 我喉嚨痛","C. 我流鼻水","D. 我頭暈"],ans:1,expl:"sore throat 是喉嚨痛。sore = 疼痛的、throat = 喉嚨。"},
    {q:"Which is the correct way to describe feeling sick?",opts:["A. I am not feel well.","B. I don't feel well.","C. I no feel well.","D. I not feeling good."],ans:1,expl:"正確句型是 I don't feel well（否定用 do not）。也可以說 I'm not feeling well（進行式）。"}
  ]
},

{
  id:"sc02",
  level:"B1",
  minutes:5,
  kind:"scene",
  title:"This Is My Neighborhood",
  titleCn:"我的社區",
  series:"本站自製對話 · 主題參考 VOA Let's Learn English",
  topic:"🗺️ 問路",
  focus:"Where is the ~? / near / far from / next to / across from",
  source:"本站自製教材（對話與中譯皆為原創撰寫）",
  intro:"Anna 要去圖書館、郵局、銀行和商店，Marsha 告訴她這些地方在社區的哪裡。這一課的句型在旅行中超常用——不管是在國外找超市還是找地鐵站，開口第一句幾乎都是 Where is the…?",
  tip:"注意方位詞怎麼搭配使用：near（附近）、next to（旁邊）、across from（對面）、between A and B（在 A 和 B 之間）。跟讀時試著邊說邊用手比方向，身體記憶比只用腦袋記有效。",
  pre:[
    {w:"neighborhood",ipa:"/ˈneɪbərhʊd/",cn:"社區、街坊",def:"The area around where you live."},
    {w:"library",ipa:"/ˈlaɪbreri/",cn:"圖書館",def:"A place where you borrow books."},
    {w:"post office",ipa:"/poʊst ˈɔːfɪs/",cn:"郵局",def:"A place where you send letters and packages."},
    {w:"across from",ipa:"/əˈkrɔːs frʌm/",cn:"在…對面",def:"On the other side of the street."},
    {w:"next to",ipa:"/nekst tuː/",cn:"在…旁邊",def:"Very close to, right beside."},
    {w:"between",ipa:"/bɪˈtwiːn/",cn:"在…之間",def:"In the middle of two things."},
    {w:"far from",ipa:"/fɑːr frʌm/",cn:"離…很遠",def:"A long way from a place."}
  ],
  keyLines:[
    {en:"Where is the library?",cn:"圖書館在哪裡？"},
    {en:"The library is near the park.",cn:"圖書館在公園附近。"},
    {en:"Is the post office far from here?",cn:"郵局離這裡遠嗎？"},
    {en:"No, it's not far. It's next to the bank.",cn:"不遠，就在銀行旁邊。"},
    {en:"The store is across from the library.",cn:"商店在圖書館對面。"},
    {en:"It's between the bank and the coffee shop.",cn:"它在銀行和咖啡廳之間。"},
    {en:"Excuse me, how do I get to the post office?",cn:"不好意思，請問郵局怎麼走？"},
    {en:"Go straight and turn right at the corner.",cn:"直走，到路口右轉。"}
  ],
  questions:[
    {q:"Where does Anna need to go?",opts:["A. The airport","B. The library, post office, bank, and store","C. A restaurant","D. The hospital"],ans:1,expl:"Anna 一一問了圖書館、郵局、銀行和商店的位置。"},
    {q:"Where is the library?",opts:["A. Far from the park","B. Near the park","C. Next to the bank","D. Across from the school"],ans:1,expl:"Marsha 說 The library is near the park."},
    {q:"\"Next to\" means ___.",opts:["A. 在…對面","B. 在…旁邊","C. 離…很遠","D. 在…之間"],ans:1,expl:"next to = 在旁邊，就是緊挨著的意思。"},
    {q:"Which is the best way to ask for directions?",opts:["A. Where is library?","B. Excuse me, where is the library?","C. Library where?","D. I go library."],ans:1,expl:"禮貌問路：Excuse me 開頭，Where is the + 地點？別忘了冠詞 the。"},
    {q:"\"Across from\" means the place is ___.",opts:["A. behind you","B. on the other side of the street","C. very far away","D. upstairs"],ans:1,expl:"across from = 在對面（馬路的另一邊）。"}
  ]
},

{
  id:"sc03",
  level:"B1",
  minutes:5,
  kind:"scene",
  title:"Let's Make Dinner!",
  titleCn:"一起做晚餐！",
  series:"本站自製對話 · 主題參考 VOA Let's Learn English",
  topic:"🛒 購物做飯",
  focus:"食物單字、量詞、購物對話：I need / How much / a pound of",
  source:"本站自製教材（對話與中譯皆為原創撰寫）",
  intro:"Anna 和 Marsha 要辦一場晚餐派對。Anna 負責去買菜，但她拿錯了清單！這一課會教你逛超市和菜市場最需要的英文：食物的名字、量詞（a pound of / a bottle of）、還有問價錢怎麼問。",
  tip:"超市購物是最容易「現學現用」的場景。跟讀的時候想像自己站在菜市場，練到不用想就能說出 I need a pound of tomatoes 就成功了。",
  pre:[
    {w:"grocery store",ipa:"/ˈɡroʊsəri stɔːr/",cn:"雜貨店、超市",def:"A store that sells food."},
    {w:"recipe",ipa:"/ˈresəpi/",cn:"食譜",def:"Instructions for cooking food."},
    {w:"ingredient",ipa:"/ɪnˈɡriːdiənt/",cn:"食材",def:"One of the foods you need to make a dish."},
    {w:"a pound of",ipa:"/ə paʊnd ʌv/",cn:"一磅的…",def:"A unit of weight (about 0.45 kg)."},
    {w:"a bottle of",ipa:"/ə ˈbɑːtl ʌv/",cn:"一瓶…",def:"A glass or plastic container of liquid."},
    {w:"fresh",ipa:"/freʃ/",cn:"新鮮的",def:"Not old, recently picked or made."},
    {w:"shopping list",ipa:"/ˈʃɑːpɪŋ lɪst/",cn:"購物清單",def:"A list of things you need to buy."},
    {w:"How much is ~?",ipa:"/haʊ mʌtʃ/",cn:"…多少錢？",def:"What you ask to know the price."}
  ],
  keyLines:[
    {en:"We need to go to the grocery store.",cn:"我們得去超市買東西。"},
    {en:"Here's the shopping list. Don't forget anything!",cn:"購物清單在這裡，什麼都別忘了！"},
    {en:"I need a pound of tomatoes, please.",cn:"請給我一磅番茄。"},
    {en:"How much are the tomatoes?",cn:"番茄多少錢？"},
    {en:"Do you have any fresh fish?",cn:"你們有新鮮的魚嗎？"},
    {en:"We also need a bottle of olive oil.",cn:"我們還需要一瓶橄欖油。"},
    {en:"Oh no! I brought the wrong list!",cn:"糟了！我拿錯清單了！"},
    {en:"Let me check the recipe again.",cn:"讓我再看一次食譜。"}
  ],
  questions:[
    {q:"Why is Anna going to the store?",opts:["A. To buy a gift","B. To get ingredients for dinner","C. To buy new clothes","D. To return something"],ans:1,expl:"Anna 和 Marsha 要辦晚餐派對，所以去買食材。"},
    {q:"What mistake does Anna make?",opts:["A. She forgets her wallet","B. She goes to the wrong store","C. She brings the wrong list","D. She buys too much food"],ans:2,expl:"Anna 拿錯了購物清單，買了不該買的東西。"},
    {q:"\"How much are the tomatoes?\" is asking about ___.",opts:["A. the color","B. the weight","C. the price","D. the number"],ans:2,expl:"How much 問價錢——多少錢。"},
    {q:"\"A pound of\" is used for ___.",opts:["A. 數量（幾個）","B. 重量（多重）","C. 長度（多長）","D. 時間（多久）"],ans:1,expl:"a pound of 是重量單位（約 0.45 公斤），用在肉、蔬菜、水果等秤重賣的東西。"},
    {q:"Which is correct at a store?",opts:["A. Give me tomato.","B. I need a pound of tomatoes, please.","C. Tomatoes me give.","D. I wanting tomatoes."],ans:1,expl:"正確又禮貌的說法是 I need + 量詞 + 東西 + please。"}
  ]
}
],

/* ========== VOA 課程教材（公共領域逐字稿在 data-scripts.js） ========== */
lessons:[
{
  id:"dl20260814a2",
  date:"2026-08-14",
  level:"A2",
  minutes:5,
  kind:"voa",
  title:"Hello, I'm Anna!",
  titleCn:"哈囉，我是 Anna！",
  series:"VOA Let's Learn English · Level 1 · Lesson 2",
  topic:"認識新鄰居",
  focus:"be 動詞：I am / She is 與 Where are you from?",
  source:"VOA Learning English（美國之音，美國政府出版物／公共領域）",
  intro:"Anna 搬到華盛頓特區，在新公寓前認識了鄰居 Jonathan。整段對話都在做同一件事：用 I am... 介紹自己、用 Where are you from? 問對方來自哪裡，還互相報了公寓號碼。這正是上一課 be 動詞的延伸練習。",
  tip:"第一次聽先數「一共有幾個人講話」。第二次聽抓三個公寓號碼（B4、C2、D7）分別是誰的——數字聽力就是這樣練起來的。",
  pre:[
    {w:"new to ...",ipa:"/njuː tuː/",cn:"剛到…、對…還不熟",def:"Arrived at a place for the first time not long ago."},
    {w:"small town",ipa:"/smɔːl taʊn/",cn:"小鎮",def:"A town that is not big."},
    {w:"apartment",ipa:"/əˈpɑːrtmənt/",cn:"公寓",def:"A home inside a bigger building."},
    {w:"roommate",ipa:"/ˈruːmmeɪt/",cn:"室友",def:"A person who lives with you."},
    {w:"welcome to ...",ipa:"/ˈwelkəm tuː/",cn:"歡迎來到…",def:"What you say when someone arrives at a new place."},
    {w:"remember to ...",ipa:"/rɪˈmembər tuː/",cn:"記得要…",def:"Do not forget to do something."}
  ],
  keyLines:[
    {en:"Hey, Pete! Who's your friend?",cn:"嘿，Pete！你朋友是誰？"},
    {en:"She is Anna. She is new to D.C.",cn:"她是 Anna。她剛到華盛頓特區。"},
    {en:"Where are you from?",cn:"你來自哪裡？"},
    {en:"I am from a small town.",cn:"我來自一個小鎮。"},
    {en:"I am Jonathan. I am in apartment B4.",cn:"我是 Jonathan。我住 B4 公寓。"},
    {en:"I am in apartment C2. Marsha is my roommate.",cn:"我住 C2 公寓。Marsha 是我的室友。"},
    {en:"Remember to call Marsha at work. Tell her you're here.",cn:"記得打電話到 Marsha 公司，跟她說你到了。"}
  ],
  questions:[
    {q:"Where is Anna from?",opts:["A. Washington, D.C.","B. A small town","C. New York","D. Apartment B4"],ans:1,expl:"Jonathan 問 Where are you from?，Anna 回答 I am from a small town."},
    {q:"Which apartment is Jonathan in?",opts:["A. B4","B. C2","C. D7","D. A1"],ans:0,expl:"他自我介紹：I am Jonathan. I am in apartment B4."},
    {q:"Who is Anna's roommate?",opts:["A. Pete","B. Jonathan","C. Marsha","D. Nobody"],ans:2,expl:"Anna 說 I am in apartment C2. Marsha is my roommate."},
    {q:"What does Pete ask Anna to remember?",opts:["A. To buy food","B. To call Marsha at work","C. To lock the door","D. To take the bus"],ans:1,expl:"Pete 離開前說 Remember to call Marsha at work. Tell her you're here."},
    {q:"Which sentence is correct?",opts:["A. She are new to D.C.","B. She is new to D.C.","C. She am new to D.C.","D. She be new to D.C."],ans:1,expl:"主詞 she 配 be 動詞 is——這一課從頭到尾都在練這件事。"}
  ]
},

{
  id:"dl20260814",
  date:"2026-08-14",
  level:"B1",
  minutes:5,
  kind:"voa",
  title:"The Interview",
  titleCn:"面試",
  series:"VOA Let's Learn English · Level 2 · Lesson 2",
  topic:"求職面試",
  focus:"兩字動詞（phrasal verbs）：give out / find out / take on / tear up / throw away",
  source:"VOA Learning English（美國之音，美國政府出版物／公共領域）",
  intro:"Ms. Weaver 要 Anna 找一個「跟她完全不同」的人一起主持節目，Anna 想到了 Pete——一個自認不愛講話的人，卻要去面試主持人。這集的語言焦點是兩字動詞：give out、find out、take on、tear up、throw away，有的能拆開（give assignments out）、有的不能，聽的時候特別留意。",
  tip:"每聽到一個兩字動詞就在心裡記一筆，聽完對答案（影片結尾 Professor Bot 會自己列清單）。第二遍再聽 Pete 在面試裡的兩個回答——為什麼「誠實到不利於自己」反而讓他錄取？這種弦外之音正是 B1 → B2 的聽力關鍵。",
  pre:[
    {w:"assignment",ipa:"/əˈsaɪnmənt/",cn:"任務、派工",def:"A piece of work given to someone."},
    {w:"team up with",ipa:"/tiːm ʌp wɪð/",cn:"與…搭檔",def:"To work together with someone."},
    {w:"people person",ipa:"/ˈpiːpl ˈpɜːrsn/",cn:"擅長與人相處的人",def:"Someone who likes and is good with people."},
    {w:"want ads",ipa:"/wɑːnt ædz/",cn:"求職廣告",def:"Newspaper ads that list jobs."},
    {w:"job offer",ipa:"/dʒɑːb ˈɔːfər/",cn:"工作機會",def:"When someone offers you a job."},
    {w:"grumpy",ipa:"/ˈɡrʌmpi/",cn:"愛發脾氣的、臭臉的",def:"Easily annoyed and not friendly."},
    {w:"opportunity",ipa:"/ˌɑːpərˈtuːnəti/",cn:"機會",def:"A chance to do something good."}
  ],
  keyLines:[
    {en:"Ms. Weaver is giving new assignments out. I am ready to take on anything she gives me.",cn:"Ms. Weaver 正在發新任務。她給我什麼我都準備好接下來。"},
    {en:"I want you to team up with someone who is very \"different\" from you.",cn:"我要你跟一個和你非常「不同」的人搭檔。"},
    {en:"Pete, you can tear these want ads up and throw them away! I have good news!",cn:"Pete，你可以把這些求職廣告撕掉丟了！我有好消息！"},
    {en:"I need to find out if you have the skills for this job. And I want you to be completely honest.",cn:"我得弄清楚你有沒有這份工作需要的能力。而且我要你完全誠實。"},
    {en:"Well, okay, sometimes I think people talk too much.",cn:"呃，好吧，有時候我覺得人們話太多了。"},
    {en:"Well, she said I was grumpy and not good with people. And, I got the job!",cn:"嗯，她說我臭臉又不擅長跟人相處。然後——我錄取了！"}
  ],
  questions:[
    {q:"What kind of person does Ms. Weaver want Anna to team up with?",opts:["A. Someone cheerful like Anna","B. Someone very different from Anna","C. Someone from another company","D. Someone with TV experience"],ans:1,expl:"Ms. Weaver 說 I want you to team up with someone who is very \"different\" from you——因為 Anna 是 cheerful 的 people person，要找一個不是這樣的人。"},
    {q:"What is Pete doing when Anna meets him?",opts:["A. Writing a book","B. Hosting a show","C. Looking for work","D. Recording a podcast"],ans:2,expl:"Pete 說 I'm busy looking for work（雖然 Anna 發現他其實在玩填字遊戲）。"},
    {q:"What did Pete do last year that he is most proud of?",opts:["A. He hosted a talk show","B. He locked himself in a cabin and wrote a book","C. He travelled around the world","D. He won a crossword competition"],ans:1,expl:"他說 Last year, I locked myself in a cabin and wrote a book. I didn't speak to anybody the entire time!"},
    {q:"What was the result of Pete's interview?",opts:["A. He was rejected for being grumpy","B. He was asked to interview again","C. He got the job","D. He turned the job down"],ans:2,expl:"Pete 說 she said I was grumpy and not good with people. And, I got the job!——「跟 Anna 完全不同」正是這份工作要的。"},
    {q:"\"You can tear these want ads up.\" 這句裡的兩字動詞用法說明了什麼？",opts:["A. tear up 永遠不能拆開","B. 受詞可以放在 tear 和 up 中間","C. tear up 後面不能接受詞","D. up 可以省略"],ans:1,expl:"tear ... up 是可分離的兩字動詞：tear these want ads up ＝ tear up these want ads，受詞可以夾在中間。"}
  ]
},

{
  id:"L01",
  level:"A2",
  minutes:5,
  kind:"voa",
  title:"Welcome!",
  titleCn:"歡迎！",
  series:"VOA Let's Learn English · Level 1 · Lesson 1",
  topic:"自我介紹",
  focus:"Are you...? / I am... 與拼出名字",
  source:"VOA Learning English（美國之音，美國政府出版物／公共領域）",
  intro:"最基礎的初次見面對話。Anna 第一次見到 Pete，兩個人確認彼此的名字，還拼了一次名字的字母。聽的時候注意 Are you...? 和 I am... 的一問一答，以及英文母語者怎麼拼名字。",
  tip:"第一次聽先不要看字，只抓「他們在打招呼還是在道別」。第二次聽再抓名字和地址的數字。",
  pre:[
    {w:"Nice to meet you.",ipa:"/naɪs tə miːt juː/",cn:"很高興認識你",def:"What you say when you meet someone for the first time."},
    {w:"Welcome to ...",ipa:"/ˈwelkəm tuː/",cn:"歡迎來到…",def:"What you say when someone arrives at your place."},
    {w:"apartment",ipa:"/əˈpɑːrtmənt/",cn:"公寓",def:"A home inside a bigger building."},
    {w:"Hi there!",ipa:"/haɪ ðer/",cn:"嗨！（輕鬆的招呼）",def:"A friendly way to say hello."},
    {w:"try that again",ipa:"/traɪ ðæt əˈɡen/",cn:"再試一次",def:"To do something one more time."}
  ],
  keyLines:[
    {en:"Hi! Are you Anna?",cn:"嗨！你是 Anna 嗎？"},
    {en:"Yes! Hi there! Are you Pete?",cn:"是的！嗨！你是 Pete 嗎？"},
    {en:"Nice to meet you.",cn:"很高興認識你。"},
    {en:"Let's try that again. I'm Anna.",cn:"我們再來一次。我是 Anna。"},
    {en:"Welcome to 1400 Irving Street!",cn:"歡迎來到 Irving 街 1400 號！"}
  ],
  questions:[
    {q:"Who are the two people in this lesson?",opts:["A. Anna and Pete","B. Anna and Caty","C. Pete and Jonathan","D. Anna and Amelia"],ans:0,expl:"對話一開始 Pete 問 Are you Anna?，兩人互相確認名字。"},
    {q:"How does Anna spell her name?",opts:["A. A-N-A","B. A-N-N-A","C. A-N-N-E","D. A-N-A-H"],ans:1,expl:"Pete 先猜 A-N-A，Anna 說 No. A-N-N-A（兩個 n）。"},
    {q:"What is at 1400 Irving Street?",opts:["A. Anna's office","B. Anna's new apartment","C. A coffee shop","D. Pete's house"],ans:1,expl:"Anna 說 My new apartment! Yes!"},
    {q:"Which sentence is the correct answer to \"Are you Pete?\"",opts:["A. Yes, I Pete.","B. Yes, I am Pete.","C. Yes, I am Pete?","D. Yes, am I Pete."],ans:1,expl:"回答 Are you...? 要用 I am + 名字。"}
  ]
},

{
  id:"L02",
  level:"A2",
  minutes:5,
  kind:"voa",
  title:"What Are You Doing?",
  titleCn:"你在做什麼？",
  series:"VOA Let's Learn English · Level 1 · Lesson 7",
  topic:"職場初見面",
  focus:"現在進行式：What are you doing? / I'm V-ing",
  source:"VOA Learning English（美國之音，美國政府出版物／公共領域）",
  intro:"Anna 第一天上班，見了主管，然後一個一個問同事在做什麼。整集就是同一個句型 What are you doing? 的反覆練習——這正是 A2 最該練熟的現在進行式。",
  tip:"每次有人回答 I'm ...ing，就在心裡跟著念一次。這集的答句短，很適合直接跟讀。",
  pre:[
    {w:"boss",ipa:"/bɔːs/",cn:"主管、老闆",def:"The person who leads you at work."},
    {w:"co-worker",ipa:"/ˈkoʊwɜːrkər/",cn:"同事",def:"A person who works with you."},
    {w:"busy",ipa:"/ˈbɪzi/",cn:"忙的",def:"Having a lot to do."},
    {w:"record",ipa:"/rɪˈkɔːrd/",cn:"錄音、錄影",def:"To keep sound or pictures to use later."},
    {w:"Oh dear.",ipa:"/oʊ dɪr/",cn:"糟糕、哎呀",def:"What you say when something small goes wrong."},
    {w:"Sure thing.",ipa:"/ʃʊr θɪŋ/",cn:"當然、沒問題",def:"A friendly way to say yes."}
  ],
  keyLines:[
    {en:"I am your boss, Caty Weaver. But please call me Caty.",cn:"我是你的主管 Caty Weaver，不過請叫我 Caty。"},
    {en:"Please meet your co-workers. But remember, they are busy working.",cn:"去認識你的同事吧。但記得，他們在忙著工作。"},
    {en:"Nice to meet you. What are you doing?",cn:"很高興認識你。你在做什麼？"},
    {en:"Um, I'm writing.",cn:"嗯，我在寫東西。"},
    {en:"I am doing my show!",cn:"我在做我的節目！"},
    {en:"Are you reading the news?",cn:"你在讀新聞嗎？"}
  ],
  questions:[
    {q:"What does Anna's boss ask Anna to call her?",opts:["A. Ms. Weaver","B. Caty","C. Boss","D. Anne"],ans:1,expl:"她說 I am your boss, Caty Weaver. But please call me Caty.（Anna 一直叫 Ms. Weaver，被糾正了兩次。）"},
    {q:"What is Anne doing?",opts:["A. Reading","B. Recording","C. Writing","D. Eating"],ans:2,expl:"Anne 回答 Um, I'm writing."},
    {q:"Why is Jonathan not happy with Anna?",opts:["A. She spilled his coffee","B. She interrupted his recording","C. She took his desk","D. She is late"],ans:1,expl:"他說 I am doing my show! 接著 And, now I have to record again!——被打斷所以要重錄。"},
    {q:"Which question means \"你正在做什麼？\"",opts:["A. What do you do?","B. What are you doing?","C. What did you do?","D. What you doing?"],ans:1,expl:"問此刻正在做的事用現在進行式 What are you doing?；What do you do? 是問職業。"}
  ]
},

{
  id:"L03",
  level:"B1",
  minutes:5,
  kind:"voa",
  title:"Budget Cuts",
  titleCn:"預算削減",
  series:"VOA Let's Learn English · Level 2 · Lesson 1",
  topic:"職場謠言",
  focus:"現在完成進行式與職業名稱的字尾 -er / -or",
  source:"VOA Learning English（美國之音，美國政府出版物／公共領域）",
  intro:"辦公室收到一封「重要會議，全員必到」的信，謠言就開始傳了。這集大量使用 has been talking / have been worrying 這類現在完成進行式，正好接你學過的那個單元；也順便教「動詞加字尾變成職業名稱」。",
  tip:"聽的時候特別注意 have / has been + V-ing 出現幾次。另外注意謠言怎麼從一個人傳成「大家都在說」。",
  pre:[
    {w:"budget cuts",ipa:"/ˈbʌdʒɪt kʌts/",cn:"預算削減",def:"When a company decides to spend less money."},
    {w:"gossip",ipa:"/ˈɡɑːsɪp/",cn:"閒話、說人是非",def:"To talk about other people's private business."},
    {w:"rumor",ipa:"/ˈruːmər/",cn:"謠言",def:"A story that people tell but nobody has proved."},
    {w:"raise",ipa:"/reɪz/",cn:"加薪",def:"More money for the same job."},
    {w:"résumé",ipa:"/ˈrezəmeɪ/",cn:"履歷",def:"A paper that lists your work experience."},
    {w:"fire (someone)",ipa:"/ˈfaɪər/",cn:"解僱",def:"To make someone leave their job."},
    {w:"assignment",ipa:"/əˈsaɪnmənt/",cn:"任務、派工",def:"A piece of work given to someone."}
  ],
  keyLines:[
    {en:"I have heard people in the building talking about budget cuts.",cn:"我聽到樓裡有人在說預算要削減。"},
    {en:"Wait, who has been talking about budget cuts?",cn:"等等，是誰一直在說預算削減的事？"},
    {en:"That's one person. That's not \"people.\"",cn:"那只是一個人，不算「大家」。"},
    {en:"We shouldn't gossip. That's how rumors start.",cn:"我們不該說人是非，謠言就是這樣開始的。"},
    {en:"We've been worrying that you are going to fire us!",cn:"我們一直在擔心你要解僱我們！"},
    {en:"Budget cuts have been happening. But only one person has lost their job.",cn:"預算削減一直在進行，但只有一個人失去了工作。"}
  ],
  questions:[
    {q:"Who did Jonathan actually hear the news from?",opts:["A. Ms. Weaver","B. Mark in Accounting","C. Amelia","D. Kaveh"],ans:1,expl:"Jonathan 說 people in the building 在說，但被 Anna 追問後承認只有 Mark in Accounting 一個人。"},
    {q:"What was Kaveh's job before he became a reporter?",opts:["A. A detective","B. A videographer","C. A teacher","D. An accountant"],ans:2,expl:"他說 I can't go back to being a teacher! High school kids scare me!"},
    {q:"Why did Ms. Weaver call the meeting?",opts:["A. To fire everyone","B. To praise the team and give new assignments","C. To announce her own resignation","D. To cut everyone's pay"],ans:1,expl:"她說開會是 to tell you what a good job you've been doing and give out new assignments."},
    {q:"Who actually lost their job?",opts:["A. Nobody","B. Penelope","C. Kaveh","D. Mark in Accounting"],ans:3,expl:"Ms. Weaver 說 only one person has lost their job -- Mark in Accounting?——散播謠言的那個人自己被裁了。"},
    {q:"Choose the sentence with the present perfect continuous.",opts:["A. Budget cuts happened last year.","B. Budget cuts have been happening.","C. Budget cuts will happen.","D. Budget cuts happen often."],ans:1,expl:"have been + V-ing 才是現在完成進行式。"}
  ]
},

{
  id:"L04",
  level:"B1+",
  minutes:5,
  kind:"voa",
  title:"He Said - She Said",
  titleCn:"他說 — 她說",
  series:"VOA Let's Learn English · Level 2 · Lesson 3",
  topic:"遲到與各說各話",
  focus:"過去完成式（had + p.p.）與轉述",
  source:"VOA Learning English（美國之音，美國政府出版物／公共領域）",
  intro:"Anna 和 Pete 開會遲到 43 分鐘，然後對同一個早上講出兩個完全不同的版本。這集的文法焦點是過去完成式：兩件過去的事，先發生的那件用 had + 過去分詞。聽的時候把每個 had 都抓出來。",
  tip:"這集適合練「聽出立場」。同一件事兩個人講，注意各自省略了什麼、強調了什麼——這是 B2 聽力的核心能力。",
  pre:[
    {w:"consultant",ipa:"/kənˈsʌltənt/",cn:"顧問",def:"An expert who is paid to give advice."},
    {w:"on time",ipa:"/ɑːn taɪm/",cn:"準時",def:"Not late."},
    {w:"take turns",ipa:"/teɪk tɜːrnz/",cn:"輪流",def:"To do something one after another."},
    {w:"waste time",ipa:"/weɪst taɪm/",cn:"浪費時間",def:"To use time badly."},
    {w:"commute",ipa:"/kəˈmjuːt/",cn:"通勤",def:"The journey between home and work."},
    {w:"point of view",ipa:"/pɔɪnt əv vjuː/",cn:"觀點",def:"The way one person sees something."},
    {w:"leave a message",ipa:"/liːv ə ˈmesɪdʒ/",cn:"留言",def:"To leave words for someone who is not there."}
  ],
  keyLines:[
    {en:"Yesterday, Pete had promised to meet me here at 8:00 a.m., but he did not come on time.",cn:"昨天 Pete 答應八點在這裡跟我碰面，但他沒有準時來。"},
    {en:"You two are late — exactly 43 minutes late! What happened?",cn:"你們兩個遲到了——整整 43 分鐘！發生什麼事？"},
    {en:"You can't both talk at the same time. You have to take turns.",cn:"你們不能同時講話，必須輪流。"},
    {en:"I had waited 15 minutes when Pete arrived!",cn:"Pete 到的時候我已經等了十五分鐘！"},
    {en:"After Pete had wasted time waiting for coffee, we were late.",cn:"Pete 浪費時間排咖啡之後，我們就遲到了。"},
    {en:"By the time she had fed all the birds, we were late.",cn:"等她把鳥全部餵完，我們已經遲到了。"},
    {en:"It's good to see things differently.",cn:"用不同角度看事情是好事。"}
  ],
  questions:[
    {q:"How late were Anna and Pete?",opts:["A. 15 minutes","B. 30 minutes","C. 43 minutes","D. An hour"],ans:2,expl:"Kelly 說 exactly 43 minutes late!"},
    {q:"According to Anna, why were they late?",opts:["A. She was feeding birds","B. Pete waited for his special coffee","C. The scooter broke","D. Kelly changed the time"],ans:1,expl:"Anna 說 After Pete had wasted time waiting for coffee, we were late."},
    {q:"According to Pete, what did Anna do on the way?",opts:["A. She slept late","B. She stopped to feed the birds","C. She forgot the address","D. She lost her phone"],ans:1,expl:"Pete 說 Anna stopped by a pond to feed the birds，還幫鳥取了 Romeo、Juliet、Sherlock 這些名字。"},
    {q:"What does Kelly decide to do with their disagreement?",opts:["A. Fire both of them","B. Make it the name of the show","C. Ask them to work separately","D. Report them to the boss"],ans:1,expl:"她說 we will call the show \"He Said, She Said.\"——把缺點變成節目特色。"},
    {q:"Which sentence uses the past perfect correctly?",opts:["A. I had waited 15 minutes when Pete arrived.","B. I have waited 15 minutes when Pete arrived.","C. I was waiting 15 minutes when Pete had arrived.","D. I waited 15 minutes when Pete had arrived."],ans:0,expl:"先發生的動作（等）用 had + p.p.，後發生的（到達）用過去簡單式。"}
  ]
}
]

};
