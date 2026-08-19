// ============================================================
//  每日新內容（由每日排程自動追加，最新的放在最前面）
//  articles：真實新聞改寫成 B1+/B2（附原文連結）或依筆記主題原創
//  grammar ：依 syllabus.json 的單元順序，每天一個新文法點（不重複）
//  ⚠ 文法解說、例句、練習題全部原創撰寫，不重製任何教科書內容
// ============================================================
window.DAILY = {

articles:[

{
  id:"d20260819a2", date:"2026-08-19", level:"A2", topic:"家人與朋友", words:98, kind:"orig",
  title:"A Visit to Grandma",
  titleCn:"探望奶奶",
  focus:"現在簡單式描述習慣，過去簡單式描述上週六發生的特定事件",
  upFrom:"A2", upTo:"B1",
  intro:"這篇文章前半段用現在簡單式講Tom平常的習慣，後半段換成過去簡單式講「上週六」發生的一件特定的事。讀的時候注意兩種時態怎麼切換。",
  paras:[
    {en:"Tom visits his grandmother every Saturday afternoon after English class. She lives alone in a small house near the market.",
     cn:"Tom每個星期六下午上完英文課後都會去看奶奶。她一個人住在市場附近的一間小房子裡。"},
    {en:"Last Saturday, Tom saw that grandma looked very tired. She had a headache and felt a little sick.",
     cn:"上週六，Tom發現奶奶看起來很累。她頭痛，而且覺得有點不舒服。"},
    {en:"Tom took her to a small clinic near their house. There were many people in the waiting room that morning. The doctor checked her carefully and asked some questions.",
     cn:"Tom帶她去他們家附近的一間小診所。那天早上候診室裡有很多人。醫生仔細幫她檢查，也問了一些問題。"},
    {en:"Now grandma is resting at home and drinking warm tea. She will feel better soon, so Tom isn't worried now. Tom can visit her again this weekend to check on her.",
     cn:"現在奶奶在家休息，喝著溫茶。她很快就會好轉，所以Tom現在不擔心了。Tom這個週末可以再去看她，關心她的狀況。"}
  ],
  target:[
    {w:"alone",ipa:"/əˈloʊn/",pos:"adj.",cn:"單獨的、獨自",def:"Without other people with you.",ex:"She lives alone in a small house near the market.",exCn:"她一個人住在市場附近的一間小房子裡。"},
    {w:"tired",ipa:"/ˈtaɪərd/",pos:"adj.",cn:"疲累的",def:"Feeling like you need to rest.",ex:"Last Saturday, Tom saw that grandma looked very tired.",exCn:"上週六，Tom發現奶奶看起來很累。"},
    {w:"headache",ipa:"/ˈhedeɪk/",pos:"n.",cn:"頭痛",def:"A pain inside your head.",ex:"She had a headache and felt a little sick.",exCn:"她頭痛，而且覺得有點不舒服。"},
    {w:"clinic",ipa:"/ˈklɪnɪk/",pos:"n.",cn:"診所",def:"A small place where doctors see patients.",ex:"Tom took her to a small clinic near their house.",exCn:"Tom帶她去他們家附近的一間小診所。"},
    {w:"worried",ipa:"/ˈwɜːrid/",pos:"adj.",cn:"擔心的",def:"Feeling nervous about something.",ex:"She will feel better soon, so Tom isn't worried now.",exCn:"她很快就會好轉，所以Tom現在不擔心了。"},
    {w:"check on",ipa:"/tʃek ɒn/",pos:"phr.",cn:"去看看（某人）、關心狀況",def:"To visit someone to see if they are okay.",ex:"Tom can visit her again this weekend to check on her.",exCn:"Tom這個週末可以再去看她，關心她的狀況。"}
  ],
  questions:[
    {q:"Why did Tom take his grandmother to the clinic?",qCn:"Tom為什麼帶奶奶去診所？",opts:["A. Because she wanted to buy medicine","B. Because she had a headache and felt sick","C. Because it was her regular checkup day","D. Because the doctor called her"],optsCn:["A. 因為她想買藥","B. 因為她頭痛又不舒服","C. 因為那天是她固定回診的日子","D. 因為醫生打電話給她"],ans:1,expl:"Tom saw that grandma looked very tired. She had a headache and felt a little sick."},
    {q:"Tom ___ his grandmother every Saturday.",qCn:"Tom每個星期六都會去看奶奶。（選出正確的動詞形式）",opts:["A. visit","B. visits","C. visited","D. is visiting"],ans:1,expl:"主詞是Tom（第三人稱單數），描述習慣要用現在簡單式並加s：visits。"},
    {q:"What did the doctor do?",qCn:"醫生做了什麼？",opts:["A. Gave grandma some tea","B. Sent grandma home immediately","C. Checked her carefully and asked questions","D. Called Tom's mother"],optsCn:["A. 給奶奶一些茶","B. 立刻叫奶奶回家","C. 仔細幫她檢查並問問題","D. 打電話給Tom的媽媽"],ans:2,expl:"The doctor checked her carefully and asked some questions."}
  ],
  upgrade:[
    {b1:"Grandma felt tired. She had a headache.",
     b2:"Grandma felt tired and had a headache.",
     note:"兩個動作同一個主詞時，用 and 連起來、主詞只寫一次，句子更順。"},
    {b1:"There were many people. The waiting room was full.",
     b2:"There were many people in the waiting room that morning.",
     note:"把地點（in the waiting room）和時間（that morning）直接加進同一句，比分成兩句更自然。"}
  ]
},

{
  id:"d20260819b1", date:"2026-08-19", level:"B1", topic:"家庭與健康", words:132, kind:"orig",
  title:"A Call Across the Distance",
  titleCn:"一通越洋電話",
  focus:"現在簡單式（習慣）vs 現在完成式（基礎）；who 引導的關係子句；比較級",
  upFrom:"B1", upTo:"B1+",
  intro:"這篇換成Anita的角度，講她每週打給台灣媽媽的越洋電話。留意 who 開頭的關係子句怎麼補充資訊，還有 harder / more tired than 這種比較級的用法。",
  paras:[
    {en:"Anita has worked in Vietnam for almost two years now. She calls her mother in Taiwan every Sunday evening, because video calls make the distance feel shorter. They talk about small things, like food, weather, and what happened during the week.",
     cn:"Anita在越南工作快兩年了。她每週日晚上都會打電話給在台灣的媽媽，因為視訊通話讓距離感覺變近了。他們會聊一些小事，像是食物、天氣，還有這一週發生了什麼事。"},
    {en:"Last weekend, however, her mother sounded quite different on the phone. She had a cough and felt very tired, but she said it was nothing serious.",
     cn:"不過上週末，她媽媽在電話裡聽起來完全不一樣。她有點咳嗽，也覺得很累，但她說沒什麼大礙。"},
    {en:"Anita knew her mother, who takes care of two grandchildren every day, was more tired than usual. Taking care of small children is harder work than most people think.",
     cn:"Anita知道媽媽每天要照顧兩個孫子，比平常更累。照顧小小孩比大部分人想的還要辛苦。"},
    {en:"Anita told her mother to see a doctor as soon as possible. Her mother has already seen a doctor and has started taking some medicine. Now she feels much better, and Anita feels relieved and happy.",
     cn:"Anita叫媽媽儘快去看醫生。媽媽已經看過醫生了，也開始吃一些藥。現在她感覺好多了，Anita也鬆了一口氣、很開心。"}
  ],
  target:[
    {w:"distance",ipa:"/ˈdɪstəns/",pos:"n.",cn:"距離",def:"The amount of space between two places.",ex:"She calls her mother in Taiwan every Sunday evening, because video calls make the distance feel shorter.",exCn:"她每週日晚上都會打電話給在台灣的媽媽，因為視訊通話讓距離感覺變近了。"},
    {w:"cough",ipa:"/kɔːf/",pos:"n.",cn:"咳嗽",def:"A sudden noise made when air is pushed out of the lungs.",ex:"She had a cough and felt very tired, but she said it was nothing serious.",exCn:"她有點咳嗽，也覺得很累，但她說沒什麼大礙。"},
    {w:"serious",ipa:"/ˈsɪriəs/",pos:"adj.",cn:"嚴重的",def:"Important or dangerous, not small.",ex:"She had a cough and felt very tired, but she said it was nothing serious.",exCn:"她有點咳嗽，也覺得很累，但她說沒什麼大礙。"},
    {w:"grandchildren",ipa:"/ˈɡrænˌtʃɪldrən/",pos:"n.",cn:"孫子孫女",def:"The children of your son or daughter.",ex:"Anita knew her mother, who takes care of two grandchildren every day, was more tired than usual.",exCn:"Anita知道媽媽每天要照顧兩個孫子，比平常更累。"},
    {w:"harder",ipa:"/ˈhɑːrdər/",pos:"adj.",cn:"比較辛苦的（hard的比較級）",def:"Needing more effort; the comparative form of hard.",ex:"Taking care of small children is harder work than most people think.",exCn:"照顧小小孩比大部分人想的還要辛苦。"},
    {w:"relieved",ipa:"/rɪˈliːvd/",pos:"adj.",cn:"鬆了一口氣的",def:"Feeling less worried after a problem is solved.",ex:"Now she feels much better, and Anita feels relieved and happy.",exCn:"現在她感覺好多了，Anita也鬆了一口氣、很開心。"}
  ],
  questions:[
    {q:"Why did Anita feel worried about her mother during the phone call?",qCn:"Anita在通話中為什麼會擔心媽媽？",
     opts:["A. Her mother said she was moving to Vietnam","B. Her mother sounded different, with a cough and tiredness","C. Her mother forgot to call her","D. Her mother lost her job"],
     optsCn:["A. 媽媽說她要搬去越南","B. 媽媽聲音不一樣，還咳嗽又疲累","C. 媽媽忘了打給她","D. 媽媽失業了"],ans:1,expl:"her mother sounded quite different on the phone. She had a cough and felt very tired."},
    {q:"Her mother ___ a doctor already this week.",qCn:"她媽媽這週已經看過醫生了。（選出正確的動詞形式）",opts:["A. see","B. saw","C. has seen","D. seeing"],ans:2,expl:"already + 到目前為止的動作，要用現在完成式：has seen。"},
    {q:"What does Anita do every Sunday evening?",qCn:"Anita每週日晚上會做什麼？",
     opts:["A. Visit her mother in person","B. Video call her mother in Taiwan","C. Take her mother to the clinic","D. Write a letter to her mother"],
     optsCn:["A. 親自去看媽媽","B. 視訊給在台灣的媽媽","C. 帶媽媽去診所","D. 寫信給媽媽"],ans:1,expl:"She calls her mother in Taiwan every Sunday evening (video calls)."}
  ],
  upgrade:[
    {b1:"Her mother said it was nothing serious.",
     b2:"Her mother's illness turned out not to be serious, which was a relief for the whole family.",
     note:"用 turned out（結果證明）與 which 引導的補充子句，句子更像B1+程度的敘事寫法，不再只是簡單的直述句。"},
    {b1:"Anita told her mother to see a doctor.",
     b2:"Anita's mother was persuaded to see a doctor, and the appointment was made the same afternoon.",
     note:"用被動語態（was persuaded / was made）強調「被說服」與「被安排」的動作接受者，是B1+才開始練習的句型。"}
  ]
},

{
  id:"d20260819b1p", date:"2026-08-19", level:"B1+", topic:"健康與醫療", words:178, kind:"orig",
  title:"Why Clinics Get So Crowded in Summer",
  titleCn:"為什麼夏天診所總是人擠人",
  focus:"被動語態、現在完成式＋被動、關係子句（who / that）",
  upFrom:"B1+", upTo:"B2",
  intro:"完全原創，從「一個家庭的故事」拉遠到「一個普遍的現象」。注意被動語態（are filled、have been affected、have been asked）怎麼把焦點放在「發生了什麼事」而不是「誰做的」，還有 who / that 引導的關係子句怎麼補充資訊。",
  paras:[
    {en:"Every summer, clinics across Taiwan are filled with more patients than usual. Hot weather, crowded transportation, and frequent travel all help spread seasonal illnesses quickly. In just a few weeks, waiting rooms that were once quiet can suddenly become packed.",
     cn:"每年夏天，台灣各地的診所都會擠滿比平常更多的病患。炎熱的天氣、擁擠的交通，加上頻繁的旅行，都讓季節性疾病快速傳播。短短幾週內，原本安靜的候診室可能突然變得人滿為患。"},
    {en:"Doctors say that more people have been affected by seasonal viruses this year than last year. Because hospitals have been receiving so many visits, several clinics have extended their opening hours. Some clinics have even been asked by local health departments to prepare extra staff.",
     cn:"醫生說今年受季節性病毒影響的人比去年更多。因為醫院收到太多看診人次，好幾家診所都延長了看診時間。有些診所甚至被地方衛生單位要求準備額外的人手。"},
    {en:"Nurses who work the evening shift often say the waiting room never really empties. Patients who arrive after six in the morning may still wait for over an hour before being consulted. To ease the pressure, some people now choose telemedicine, a video call with a doctor from home.",
     cn:"上晚班的護理師常說候診室幾乎沒有真正空過。六點以後才到的病人，可能還要再等超過一小時才輪到看診。為了減輕負擔，有些人現在選擇遠距醫療，也就是在家透過視訊看診。"},
    {en:"Health experts remind everyone that small habits make a real difference. Washing your hands often and getting enough sleep can lower the risk of infection. For people like Anita, who works far from her family, staying healthy means one less worry for her mother.",
     cn:"健康專家提醒大家，微小的習慣真的會帶來不同的結果。常洗手、睡眠充足可以降低感染的風險。對像Anita這樣在外地工作的人來說，保持健康也代表讓媽媽少一件事情擔心。"}
  ],
  target:[
    {w:"filled",ipa:"/fɪld/",pos:"adj.",cn:"擠滿的",def:"Completely full of something.",ex:"Every summer, clinics across Taiwan are filled with more patients than usual.",exCn:"每年夏天，台灣各地的診所都會擠滿比平常更多的病患。"},
    {w:"affected",ipa:"/əˈfektɪd/",pos:"adj.",cn:"受影響的",def:"Influenced or changed by something, often in a bad way.",ex:"Doctors say that more people have been affected by seasonal viruses this year than last year.",exCn:"醫生說今年受季節性病毒影響的人比去年更多。"},
    {w:"extended",ipa:"/ɪkˈstendɪd/",pos:"v.",cn:"延長了",def:"Made something longer in time.",ex:"Several clinics have extended their opening hours.",exCn:"好幾家診所都延長了看診時間。"},
    {w:"telemedicine",ipa:"/ˌtelɪˈmedɪsɪn/",pos:"n.",cn:"遠距醫療",def:"Medical care given through a video call instead of an in-person visit.",ex:"Some people now choose telemedicine, a video call with a doctor from home.",exCn:"有些人現在選擇遠距醫療，也就是在家透過視訊看診。"},
    {w:"consulted",ipa:"/kənˈsʌltɪd/",pos:"v.",cn:"（被）看診、諮詢",def:"Given professional advice, such as by a doctor.",ex:"Patients who arrive after six in the morning may still wait for over an hour before being consulted.",exCn:"六點以後才到的病人，可能還要再等超過一小時才輪到看診。"},
    {w:"infection",ipa:"/ɪnˈfekʃn/",pos:"n.",cn:"感染",def:"An illness caused by germs entering the body.",ex:"Washing your hands often and getting enough sleep can lower the risk of infection.",exCn:"常洗手、睡眠充足可以降低感染的風險。"},
    {w:"pressure",ipa:"/ˈpreʃər/",pos:"n.",cn:"壓力、負擔",def:"A difficult situation that needs a lot of effort to deal with.",ex:"To ease the pressure, some people now choose telemedicine, a video call with a doctor from home.",exCn:"為了減輕負擔，有些人現在選擇遠距醫療，也就是在家透過視訊看診。"},
    {w:"habits",ipa:"/ˈhæbɪts/",pos:"n.",cn:"習慣",def:"Things you regularly do, often without thinking.",ex:"Health experts remind everyone that small habits make a real difference.",exCn:"健康專家提醒大家，微小的習慣真的會帶來不同的結果。"}
  ],
  questions:[
    {q:"Why do clinics get so crowded in summer, according to the article?",qCn:"根據文章，為什麼夏天診所會這麼擁擠？",
     opts:["A. Doctors take more holidays in summer","B. Hot weather, crowded transportation, and travel help spread illness","C. Clinics reduce their opening hours","D. Fewer nurses work in summer"],
     optsCn:["A. 醫生夏天休更多假","B. 炎熱天氣、擁擠交通與旅行助長疾病傳播","C. 診所縮短看診時間","D. 夏天護理師變少"],ans:1,expl:"Hot weather, crowded transportation, and frequent travel all help spread seasonal illnesses quickly."},
    {q:"What do some people choose to do to ease the pressure on clinics?",qCn:"有些人為了減輕診所的負擔會選擇做什麼？",
     opts:["A. Stop seeing a doctor completely","B. Choose telemedicine, a video call with a doctor","C. Only visit clinics at night","D. Ask their neighbours for medicine"],
     optsCn:["A. 完全不看醫生","B. 選擇遠距醫療，透過視訊看診","C. 只在晚上去診所","D. 向鄰居要藥"],ans:1,expl:"some people now choose telemedicine, a video call with a doctor from home."},
    {q:"Which sentence uses the passive voice?",qCn:"哪一句用了被動語態？",
     opts:["A. Nurses often say the waiting room never really empties.","B. Every summer, clinics across Taiwan are filled with more patients than usual.","C. Health experts remind everyone that small habits make a real difference.","D. Anita works far from her family."],
     optsCn:["A. 護理師常說候診室幾乎沒空過。","B. 每年夏天，台灣各地的診所都擠滿比平常更多的病患。","C. 健康專家提醒大家微小習慣很重要。","D. Anita在外地工作。"],ans:1,expl:"are filled ＝ be動詞＋過去分詞，是被動語態；其他三句主詞都是動作的執行者。"},
    {q:"What does the article suggest about people like Anita, who work far from their family?",qCn:"文章對像Anita這種在外地工作的人提出了什麼看法？",
     opts:["A. They should move back home immediately","B. Staying healthy means one less worry for their family","C. They cannot get sick because they work abroad","D. Telemedicine does not work for them"],
     optsCn:["A. 他們應該立刻搬回家","B. 保持健康代表讓家人少一件事擔心","C. 因為在國外工作所以不會生病","D. 遠距醫療對他們沒用"],ans:1,expl:"staying healthy also means one less worry for her mother."}
  ],
  upgrade:[
    {b1:"More people got sick this year. Last year fewer people got sick.",
     b2:"More people have been affected by seasonal viruses this year than last year.",
     note:"用現在完成式的被動（have been affected）把「過去到現在的比較」壓成一句，比兩個簡單句更精簡。"},
    {b1:"Some clinics stay open longer now.",
     b2:"Several clinics have extended their opening hours because hospitals have been receiving so many visits.",
     note:"加上 because 子句與現在完成（進行）式，說明「延長時間」背後的原因，資訊更完整、更像B2程度的說明文。"}
  ]
},

{
  id:"d20260819b2", date:"2026-08-19", level:"B2", topic:"新聞·健康", words:281, kind:"news",
  title:"Taiwan Extends Free COVID-19 Vaccination Program",
  titleCn:"台灣延長免費COVID-19疫苗接種計畫",
  focus:"被動語態、現在完成式在新聞報導中的用法；正式語域的用字選擇",
  source:"改寫自 Focus Taiwan 報導（2026/07/25）— 事實取自原文，英文由本站重寫",
  sourceUrl:"https://focustaiwan.tw/society/202607250008",
  intro:"這是一篇真實新聞的改寫，講台灣疾管署延長免費疫苗接種計畫的決定。注意新聞報導怎麼引用官方數字（over ten thousand visits）、描述變異株（nicknamed \"Nimbus\"），以及用被動語態保持客觀、不特別強調是「誰」做的決定。",
  paras:[
    {en:"Taiwan's health authorities announced in late July that the country's free COVID-19 vaccination program, originally scheduled to end in July, would continue through the end of September. The decision came as case numbers climbed sharply across the island. Health officials said the extension was meant to give more time for people who have not yet received this year's shot.",
     cn:"台灣衛生主管機關在七月下旬宣布，原訂七月結束的全民免費COVID-19疫苗接種計畫將延長至九月底。這項決定是在全台病例數急遽攀升之際做出的。衛生官員表示，延長接種期是為了讓還沒打今年疫苗的人有更多時間。"},
    {en:"According to the Centers for Disease Control, weekly outpatient and emergency room visits linked to COVID-19 reached over ten thousand in late July, more than double the number recorded the previous week. Officials said the sudden jump was largely driven by a new variant, nicknamed \"Nimbus,\" which has been spreading quickly since early summer. The Centers for Disease Control also noted that vaccination rates among older adults and people with chronic illness remained lower than expected.",
     cn:"根據疾病管制署的資料，與COVID-19相關的每週門診與急診就診人次在七月下旬超過一萬，是前一週的兩倍以上。官員表示，這波急遽上升主要是由一款暱稱「Nimbus」的新變異株所驅動，自初夏以來一直快速傳播。疾管署也指出，年長者與慢性病患者的疫苗接種率仍低於預期。"},
    {en:"Health officials expect the current wave to peak around the middle of August before slowly declining. They also pointed to a worrying pattern: more than ninety percent of people who developed severe symptoms this season had not received this year's updated vaccine. Most of these serious cases involved adults over sixty-five or people with chronic illnesses. Officials urged anyone who has not been vaccinated this season, particularly older residents, to make an appointment soon.",
     cn:"衛生官員預期這波疫情將在八月中旬左右達到高峰，之後才會慢慢趨緩。他們也指出一個令人擔憂的現象：這一季出現重症症狀的人當中，超過九成都還沒接種今年更新版的疫苗。這些重症病例大多發生在六十五歲以上的長者，或本身有慢性病的人身上。官員呼籲今年還沒接種疫苗的人，尤其是年長的居民，儘快預約接種。"},
    {en:"By extending the vaccination window, the CDC hopes more people, especially those in high-risk groups, will get vaccinated before the peak arrives. Free vaccines remain available at hospitals, clinics, and many community health stations across the country. For residents like Tom's family and for Taiwanese living abroad, such as Anita, the message is the same: a short visit to a clinic now could prevent a much longer and more serious illness later.",
     cn:"透過延長接種期，疾管署希望更多人，尤其是高風險族群，能在高峰來臨前完成接種。免費疫苗目前仍可在全國各醫院、診所與許多社區健康站施打。對於像Tom一家這樣的居民，以及像Anita這樣旅居海外的台灣人來說，訊息是一樣的：現在到診所走一趟，可能就能避免之後更長、更嚴重的一場病。"}
  ],
  target:[
    {w:"authorities",ipa:"/əˈθɒrətiz/",pos:"n.",cn:"當局、主管機關",def:"The government or officials in charge of something.",ex:"Taiwan's health authorities announced in late July that the country's free COVID-19 vaccination program, originally scheduled to end in July, would continue through the end of September.",exCn:"台灣衛生主管機關在七月下旬宣布，原訂七月結束的全民免費COVID-19疫苗接種計畫將延長至九月底。"},
    {w:"extension",ipa:"/ɪkˈstenʃn/",pos:"n.",cn:"延長",def:"A longer period of time given for something.",ex:"Health officials said the extension was meant to give more time for people who have not yet received this year's shot.",exCn:"衛生官員表示，延長接種期是為了讓還沒打今年疫苗的人有更多時間。"},
    {w:"variant",ipa:"/ˈveəriənt/",pos:"n.",cn:"（病毒）變異株",def:"A slightly different form of a virus.",ex:"Officials said the sudden jump was largely driven by a new variant, nicknamed \"Nimbus,\" which has been spreading quickly since early summer.",exCn:"官員表示，這波急遽上升主要是由一款暱稱「Nimbus」的新變異株所驅動，自初夏以來一直快速傳播。"},
    {w:"peak",ipa:"/piːk/",pos:"n./v.",cn:"高峰、達到高峰",def:"The highest point of something.",ex:"Health officials expect the current wave to peak around the middle of August before slowly declining.",exCn:"衛生官員預期這波疫情將在八月中旬左右達到高峰，之後才會慢慢趨緩。"},
    {w:"severe",ipa:"/sɪˈvɪr/",pos:"adj.",cn:"嚴重的",def:"Very bad or serious.",ex:"They also pointed to a worrying pattern: more than ninety percent of people who developed severe symptoms this season had not received this year's updated vaccine.",exCn:"他們也指出一個令人擔憂的現象：這一季出現重症症狀的人當中，超過九成都還沒接種今年更新版的疫苗。"},
    {w:"chronic",ipa:"/ˈkrɒnɪk/",pos:"adj.",cn:"慢性的",def:"Lasting a long time, often used for illnesses.",ex:"Most of these serious cases involved adults over sixty-five or people with chronic illnesses.",exCn:"這些重症病例大多發生在六十五歲以上的長者，或本身有慢性病的人身上。"},
    {w:"vaccinated",ipa:"/ˈvæksɪneɪtɪd/",pos:"adj.",cn:"接種疫苗的",def:"Having received a vaccine.",ex:"Officials urged anyone who has not been vaccinated this season, particularly older residents, to make an appointment soon.",exCn:"官員呼籲今年還沒接種疫苗的人，尤其是年長的居民，儘快預約接種。"},
    {w:"available",ipa:"/əˈveɪləbl/",pos:"adj.",cn:"可取得的",def:"Able to be used or obtained.",ex:"Free vaccines remain available at hospitals, clinics, and many community health stations across the country.",exCn:"免費疫苗目前仍可在全國各醫院、診所與許多社區健康站施打。"}
  ],
  questions:[
    {q:"Why did Taiwan's CDC decide to extend the free vaccination program?",qCn:"台灣疾管署為什麼決定延長免費疫苗接種計畫？",
     opts:["A. Because too few vaccines had been produced","B. Because case numbers were rising sharply and many high-risk people were still unvaccinated","C. Because the previous program was too expensive","D. Because a new law required it"],
     optsCn:["A. 因為疫苗生產數量太少","B. 因為病例數急遽上升，且許多高風險族群仍未接種","C. 因為原本的計畫太昂貴","D. 因為新法律要求"],ans:1,expl:"case numbers climbed sharply... the extension was meant to give more time for people who have not yet received this year's shot."},
    {q:"What is largely responsible for the recent sharp rise in COVID-19 cases?",qCn:"最近COVID-19病例急遽上升，主要是什麼原因造成的？",
     opts:["A. A new variant nicknamed \"Nimbus\"","B. Fewer hospital beds","C. A change in the weather season","D. A shortage of doctors"],
     optsCn:["A. 一款暱稱「Nimbus」的新變異株","B. 醫院床位變少","C. 季節天氣的變化","D. 醫生短缺"],ans:0,expl:"the sudden jump was largely driven by a new variant, nicknamed \"Nimbus.\""},
    {q:"According to the article, who makes up most of the severe cases this season?",qCn:"根據文章，這一季的重症病例大多是哪些人？",
     opts:["A. Young children under five","B. Adults over sixty-five or people with chronic illnesses who are unvaccinated","C. Fully vaccinated adults","D. Health care workers"],
     optsCn:["A. 五歲以下的幼童","B. 六十五歲以上或有慢性病、且未接種的長者","C. 已完整接種的成年人","D. 醫護人員"],ans:1,expl:"Most of these serious cases involved adults over sixty-five or people with chronic illnesses... had not received this year's updated vaccine."},
    {q:"In this article, what does \"peak\" mean?",qCn:"在這篇文章中，「peak」是什麼意思？",
     opts:["A. The lowest point of a wave","B. The highest point of a wave, before it declines","C. A type of vaccine","D. A government department"],
     optsCn:["A. 一波疫情的最低點","B. 一波疫情的最高點，之後就會下降","C. 一種疫苗","D. 一個政府部門"],ans:1,expl:"peak（高峰）指最高點；文中 the current wave to peak... before slowly declining 就是先達到高峰、再逐漸下降。"}
  ],
  upgrade:[
    {b1:"Cases went up a lot, so officials extended the free vaccine program.",
     b2:"As case numbers climbed sharply, health authorities extended the free vaccination program through the end of September.",
     note:"加入 as 子句與明確的時間資訊（through the end of September），語氣更正式、更像新聞報導的寫法。"},
    {b1:"Most people who got very sick didn't have the vaccine.",
     b2:"More than ninety percent of people who developed severe symptoms this season had not received this year's updated vaccine.",
     note:"用具體數字（ninety percent）與更精確的說法（developed severe symptoms／had not received）取代籠統的 got very sick／didn't have，是新聞報導追求精確的典型寫法。"}
  ]
},

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
    {q:"How did the writer go to the night market?",qCn:"作者是怎麼去夜市的？",opts:["A. By car","B. By bus","C. By train","D. On foot"],optsCn:["A. 開車", "B. 搭公車", "C. 搭火車", "D. 走路"],ans:1,expl:"We took the bus and got there at seven."},
    {q:"What did the friend buy?",qCn:"朋友買了什麼？",opts:["A. A camera","B. Fried chicken","C. A jacket","D. Papaya milk"],optsCn:["A. 相機", "B. 炸雞", "C. 外套", "D. 木瓜牛奶"],ans:2,expl:"My friend bought a jacket at a small store."},
    {q:"Which sentence is correct?",qCn:"哪一句是正確的？",opts:["A. I goed to the night market.","B. I went to the night market.","C. I go to the night market yesterday.","D. I was go to the night market."],ans:1,expl:"go 的過去式是不規則的 went，不能加 -ed，也不能配 was。"}
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
    {q:"Why did they not go to work?",qCn:"他們為什麼沒去上班？",opts:["A. It was a holiday","B. There was a typhoon","C. The office was closed for cleaning","D. They were sick"],optsCn:["A. 那天是假日", "B. 有颱風", "C. 辦公室關閉打掃", "D. 他們生病了"],ans:1,expl:"Last Wednesday there was a typhoon, so we did not go to work."},
    {q:"What did the writer do first at home?",qCn:"作者在家先做了什麼？",opts:["A. Watched TV","B. Called his mother","C. Cleaned the kitchen","D. Went outside"],optsCn:["A. 看電視", "B. 打電話給媽媽", "C. 打掃廚房", "D. 出門"],ans:2,expl:"I stayed home and cleaned the kitchen. Then I watched the news."},
    {q:"What happened when the rain stopped?",qCn:"雨停之後發生了什麼事？",opts:["A. More trees fell down","B. The writer went outside to check","C. The flooding got worse","D. The writer went to work"],optsCn:["A. 更多樹倒了", "B. 作者出門查看", "C. 淹水變嚴重", "D. 作者去上班"],ans:1,expl:"When the rain stopped in the afternoon, I went outside to check."}
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
    {q:"Why has the writer's trip been cancelled?",qCn:"作者的行程為什麼被取消？",
     opts:["A. The train broke down","B. Because of the typhoon","C. The ticket was too expensive","D. The office is closed today"],
     optsCn:["A. 火車故障", "B. 因為颱風", "C. 車票太貴", "D. 辦公室今天關門"],ans:1,expl:"my trip has been cancelled because of the typhoon。"},
    {q:"What has the writer's colleague done?",qCn:"作者的同事做了什麼？",
     opts:["A. Gone to work anyway","B. Stayed in her flooded house","C. Moved to her parents' house","D. Taken the train to Taipei"],
     optsCn:["A. 照樣去上班", "B. 留在淹水的家裡", "C. 搬去爸媽家", "D. 搭火車去台北"],ans:2,expl:"She has moved to her parents' house on higher ground."},
    {q:"Which sentence uses the present perfect passive?",qCn:"哪一句用了現在完成式的被動語態？",
     opts:["A. I was supposed to take the train.","B. Several highways have been closed.","C. The typhoon is expected to turn north.","D. I am working from home."],
     optsCn:["A. 我本來應該搭火車。", "B. 好幾條公路已經被封閉。", "C. 颱風預計轉向北方。", "D. 我正在家工作。"],ans:1,expl:"have been closed ＝ have been + 過去分詞，是現在完成式的被動語態。"}
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
    {q:"Why was the writer's flight cancelled?",qCn:"作者的班機為什麼被取消？",
     opts:["A. The plane had a technical problem","B. A typhoon was approaching Taiwan","C. The airline overbooked the flight","D. The airport in Vietnam was flooded"],
     optsCn:["A. 飛機有技術問題", "B. 颱風正在接近台灣", "C. 航空公司超賣機位", "D. 越南的機場淹水"],ans:1, expl:"廣播說 a typhoon was approaching the north coast of Taiwan，所以所有早班機 had been grounded。"},
    {q:"What did the writer ask the airline to do?",qCn:"作者請航空公司做什麼？",
     opts:["A. Give a full refund","B. Provide a free hotel","C. Put her on the waiting list for the next evening","D. Book a flight two days later"],
     optsCn:["A. 全額退費", "B. 提供免費旅館", "C. 把她排進隔天晚上的候補名單", "D. 訂兩天後的班機"],ans:2, expl:"I asked to be put on the waiting list for the next evening instead——她拒絕了兩天後的機位。"},
    {q:"According to the news, what happened in Taiwan overnight?",qCn:"根據新聞，台灣一夜之間發生了什麼？",
     opts:["A. The airport was closed for a week","B. Several coastal towns were flooded","C. All hotels were evacuated","D. The typhoon changed direction"],
     optsCn:["A. 機場關閉一週", "B. 好幾個沿海城鎮淹水", "C. 所有旅館都撤離", "D. 颱風改變方向"],ans:1, expl:"Several coastal towns had been flooded overnight, and thousands of homes were left without power。"},
    {q:"Which sentence uses the passive voice?",qCn:"哪一句用了被動語態？",
     opts:["A. The terminal filled quickly.","B. I understood why the airline was careful.","C. Meal vouchers were handed out around noon.","D. The whole experience taught me two things."],
     optsCn:["A. 航廈很快就擠滿了人。", "B. 我理解航空公司為何謹慎。", "C. 中午時發放了餐券。", "D. 整個經歷教了我兩件事。"],ans:2, expl:"were handed out ＝ be 動詞 + 過去分詞，是被動語態；其他三句都是主動。"}
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
    {q:"Where was Typhoon Dolphin expected to make landfall?",qCn:"颱風「海豚」預計在哪裡登陸？",
     opts:["A. Northern Taiwan","B. Green Island","C. Zhejiang Province, China","D. The Hengchun Peninsula"],
     optsCn:["A. 台灣北部", "B. 綠島", "C. 中國浙江省", "D. 恆春半島"],ans:2, expl:"Forecasters said it would probably reach China's Zhejiang Province instead。"},
    {q:"Which area was under the highest rainfall alert?",qCn:"哪個地區的降雨警戒最高？",
     opts:["A. Southwestern plains","B. Mountainous areas north of Taichung","C. Orchid Island","D. Taipei city centre"],
     optsCn:["A. 西南平原", "B. 台中以北的山區", "C. 蘭嶼", "D. 台北市中心"],ans:1, expl:"the mountainous areas north of Taichung were placed under the highest rainfall alert。"},
    {q:"What does \"a storm radius of 280 kilometres\" tell us?",qCn:"「暴風半徑 280 公里」告訴我們什麼？",
     opts:["A. How fast the storm moved","B. How far the storm's edge is from its centre","C. How much rain fell","D. How long the warning lasted"],
     optsCn:["A. 颱風移動多快", "B. 暴風邊緣離中心多遠", "C. 下了多少雨", "D. 警報持續多久"],ans:1, expl:"radius ＝ 半徑，指風暴中心到外緣的距離。"},
    {q:"Why were forecasters fairly confident about the storm's path?",qCn:"預報員為什麼對路徑相當有把握？",
     opts:["A. It was very small","B. It was moving slowly, at only 10 kph","C. It had already landed","D. It changed direction often"],
     optsCn:["A. 它非常小", "B. 它移動得很慢，時速只有 10 公里", "C. 它已經登陸了", "D. 它常常改變方向"],ans:1, expl:"had been moving west at only 10 kilometres per hour — slow enough for forecasters to be confident。"}
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
  id:"dg20260819a2", date:"2026-08-19", unitNo:2,
  level:"A2", title:"Present Simple (I do)", titleCn:"現在簡單式（基礎）",
  srcDays:[],
  summary:"主詞+動詞原形，用來說「平常都這樣」的事：習慣、事實。主詞是 he/she/it 時，動詞要加 s。",
  sections:[
    {h:"基本形式", body:[
      "I / you / we / they + 動詞原形：I visit my grandmother.",
      "he / she / it + 動詞+s：She visits her grandmother.",
      "否定：don't / doesn't + 動詞原形　|　疑問：Do / Does + 主詞 + 動詞原形?"
    ]},
    {h:"第三人稱單數怎麼加 s", table:{head:["規則","原形","加 s/es 後"],rows:[
      ["大部分動詞直接加 s","visit / like","visits / likes"],
      ["字尾 s, x, ch, sh, o 加 es","watch / go","watches / goes"],
      ["子音字母+y，把 y 改成 ies","study / worry","studies / worries"]
    ]}},
    {h:"什麼時候用現在簡單式", bullets:[
      "① 常常做的事（習慣）：I visit my grandmother every Saturday.",
      "② 一直都對的事實：She lives near the market.",
      "③ 常跟 always / usually / every day 這類字一起出現"
    ], examples:[
      {en:"Tom visits his grandmother every Saturday.",cn:"Tom每個星期六都會去看奶奶。",note:"習慣"},
      {en:"She lives alone near the market.",cn:"她一個人住在市場附近。",note:"事實"},
      {en:"Do you visit your family every weekend?",cn:"你每個週末都會去看家人嗎？",note:"疑問句用 Do"}
    ]}
  ],
  traps:[
    {bad:"She visit her grandmother every Saturday.",good:"She visits her grandmother every Saturday.",why:"主詞是 she（第三人稱單數），動詞一定要加 s，中文的「拜訪」沒有這種變化，很容易忘記。"},
    {bad:"She don't live with her parents.",good:"She doesn't live with her parents.",why:"第三人稱單數的否定要用 doesn't，不能用 don't；而且 doesn't 後面的動詞要用原形（不是 lives）。"},
    {bad:"Does she lives near the market?",good:"Does she live near the market?",why:"疑問句已經有 Does 表示第三人稱單數了，後面的動詞要用原形，不能再加 s。"},
    {bad:"I am like tea.",good:"I like tea.",why:"like 本身就是動詞，前面不需要再加 am／is／are，這是受中文「我是喜歡」影響的常見錯誤。"}
  ],
  quiz:[
    {q:"Tom ____ his grandmother every Saturday.",qCn:"Tom每個星期六都會去看奶奶。",opts:["visit","visits","visiting","is visit"],ans:1,expl:"主詞是 Tom（第三人稱單數），動詞要加 s：visits。"},
    {q:"____ she live near the market?",qCn:"她住在市場附近嗎？",opts:["Do","Does","Is","Are"],ans:1,expl:"主詞是 she，疑問句用 Does。"},
    {q:"My grandmother ____ tea every morning.",qCn:"我奶奶每天早上都喝茶。",opts:["drink","drinks","is drink","are drinking"],ans:1,expl:"習慣性動作，主詞第三人稱單數要加 s：drinks。"},
    {q:"He ____ to see a doctor when he feels sick.",qCn:"他覺得不舒服的時候會去看醫生。",opts:["go","goes","going","is go"],ans:1,expl:"當…就會…是一種習慣性的事實，用現在簡單式，第三人稱加 s：goes。"}
  ]
},

{
  id:"dg20260819b1", date:"2026-08-19", unitNo:2,
  level:"B1", title:"Present Simple vs Present Continuous (Habits vs Now)", titleCn:"現在簡單式 vs 現在進行式（習慣 vs 現在）",
  srcDays:[],
  summary:"現在簡單式講「平常、一直都這樣」；現在進行式講「現在、這陣子」。同一件事用不同時態，意思會不一樣。",
  sections:[
    {h:"核心對照", table:{head:["","現在簡單式","現在進行式"],rows:[
      ["意思","習慣、事實","此刻、暫時的狀況"],
      ["時間詞","every day, usually, always","now, this week, these days"],
      ["例句","She calls her mother every Sunday.","She's calling her mother right now."]
    ]}},
    {h:"同一個動詞，意思隨時態改變", examples:[
      {en:"Anita works in Vietnam.",cn:"Anita在越南工作。",note:"長期事實"},
      {en:"Anita is working from home this week because she isn't feeling well.",cn:"Anita這禮拜在家工作，因為她不太舒服。",note:"這週的暫時狀況"},
      {en:"Her mother takes care of two grandchildren every day.",cn:"她媽媽每天都要照顧兩個孫子。",note:"習慣、常態"},
      {en:"Her mother is resting today because she has a cough.",cn:"她媽媽今天因為咳嗽在休息。",note:"今天的特殊狀況"}
    ]},
    {h:"⚠ 狀態動詞不能用進行式", bullets:[
      "know, believe, want, need, like, love, have（擁有）這類動詞描述「狀態」而不是「動作」",
      "✓ Anita knows her mother is tired. ✗ Anita is knowing her mother is tired.",
      "have 例外：have 當「經歷、吃」的意思時可以用進行式：She is having a hard week."
    ]},
    {h:"頻率副詞放哪裡", bullets:[
      "一般動詞前：Anita usually calls her mother on Sundays.",
      "be 動詞後：Her mother is always busy with the grandchildren."
    ]}
  ],
  traps:[
    {bad:"Anita is knowing her mother is worried.",good:"Anita knows her mother is worried.",why:"know 是狀態動詞，不能加 -ing，不管句子聽起來多「現在」都一樣。"},
    {bad:"Her mother rests today because she is sick.",good:"Her mother is resting today because she is sick.",why:"today 是特定的今天，屬於暫時的狀況，要用現在進行式，不能用習慣性的現在簡單式。"},
    {bad:"Anita is calling her mother every Sunday.",good:"Anita calls her mother every Sunday.",why:"every Sunday 是固定的習慣，要用現在簡單式；用進行式會讓人以為只是「這個星期」剛好在打。"},
    {bad:"Anita usually is worried about her mother.",good:"Anita is usually worried about her mother.",why:"頻率副詞 usually 要放在 be 動詞後面，不是前面。"}
  ],
  quiz:[
    {q:"Anita usually ____ her mother on Sundays, but this week she ____ her every day.",qCn:"Anita平常星期天才打給媽媽，但這禮拜她每天都打。",opts:["calls / is calling","is calling / calls","calls / calls","is calling / is calling"],ans:0,expl:"usually＝習慣用簡單式；this week＝暫時的例外用進行式。"},
    {q:"Her mother ____ two grandchildren every day.",qCn:"她媽媽每天都要照顧兩個孫子。",opts:["is taking care of","takes care of","take care of","took care of"],ans:1,expl:"every day 表示習慣，用現在簡單式，第三人稱加 s：takes。"},
    {q:"Why ____ Anita's mother resting today?",qCn:"Anita的媽媽今天為什麼在休息？",opts:["do","does","is","are"],ans:2,expl:"resting 是進行式，疑問句要用 is（配合 mother 第三人稱單數）。"},
    {q:"Which sentence is correct?",qCn:"哪一句是正確的？",opts:["Anita is knowing her mother is tired.","Anita knows her mother is tired.","Anita know her mother is tired.","Anita is know her mother is tired."],ans:1,expl:"know 是狀態動詞，第三人稱單數要加 s，也不能用進行式。"}
  ]
},

{
  id:"dg20260819b1p", date:"2026-08-19", unitNo:2,
  level:"B1+", title:"Present Simple: Advanced Uses", titleCn:"現在簡單式的進階用法",
  srcDays:[],
  summary:"現在簡單式不只講習慣：它還能講「永遠是真的事實」、「排定好的未來時刻表」，也能靠位置細微地改變語氣。共同核心是「可靠、固定、不會變」。",
  sections:[
    {h:"① 普遍事實／科學定律", body:[
      "跟時間無關、永遠成立的事，用現在簡單式：",
      "Clinics get busier when the weather changes quickly.（天氣一變，診所就會變忙——這是普遍觀察到的模式）",
      "A fever usually means the body is fighting an infection.（發燒通常代表身體在對抗感染）"
    ]},
    {h:"② 已排定的未來時刻表", bullets:[
      "交通工具、營業時間、正式行程表用現在簡單式講「未來」：The clinic opens at nine tomorrow.",
      "跟 be going to／will 不同：時刻表是「別人排好、不會變」；will 是個人的臨時決定。",
      "常見於：航班時刻、看診時間、學校課表、火車時刻"
    ], examples:[
      {en:"The clinic opens at nine and closes at six on weekdays.",cn:"這間診所平日九點開門、六點打烊。",note:"營業時間表"},
      {en:"Her flight to Taipei leaves at seven tomorrow morning.",cn:"她明天早上七點的班機飛往台北。",note:"時刻表式的未來"}
    ]},
    {h:"③ 頻率副詞的細微差別", table:{head:["副詞","位置","語氣"],rows:[
      ["always","be動詞後 / 一般動詞前","中性、100%"],
      ["hardly ever","同上，本身已含否定","幾乎不"],
      ["never","同上，本身已含否定","從不，句中不能再加 not"]
    ]}, examples:[
      {en:"Anita hardly ever misses her mother's calls.",cn:"Anita幾乎不會漏接媽媽的電話。",note:"hardly ever＝幾乎不，不用再加 not"}
    ]},
    {h:"④ 條件句與 if / when 子句", bullets:[
      "談「只要…就會…」這種一般性規則時，if / when 子句裡也用現在簡單式，即使講的是未來：",
      "If her mother feels sick, she calls the clinic right away.（只要她媽媽不舒服，她就會馬上打給診所）",
      "When you have a fever for more than two days, you should see a doctor.（發燒超過兩天就該看醫生）"
    ]}
  ],
  traps:[
    {bad:"The clinic will open at nine tomorrow. (照表定的營業時間)",good:"The clinic opens at nine tomorrow.",why:"固定的營業時間表用現在簡單式講未來；will 聽起來像是臨時的預測或決定。"},
    {bad:"Anita hardly ever doesn't answer her phone.",good:"Anita hardly ever answers her phone late.",why:"hardly ever 本身已經是否定的意思，後面不能再加 doesn't，等於雙重否定。"},
    {bad:"If her mother will feel sick, she calls the clinic.",good:"If her mother feels sick, she calls the clinic.",why:"if / when 子句講一般性規則時，就算指未來也不能用 will，要用現在簡單式。"},
    {bad:"A fever is meaning the body is fighting an infection.",good:"A fever means the body is fighting an infection.",why:"mean 是狀態動詞，描述普遍事實用簡單式，不能加 -ing。"}
  ],
  quiz:[
    {q:"The clinic ____ at nine every weekday morning, according to the schedule on the door.",qCn:"根據門上的時刻表，這間診所平日每天早上九點開門。",opts:["will open","opens","is opening","opened"],ans:1,expl:"固定的營業時刻表用現在簡單式講未來。"},
    {q:"Anita ____ misses her mother's calls — she always answers within a minute.",qCn:"Anita幾乎不會漏接媽媽的電話——她總是一分鐘內就接。",opts:["never not","hardly ever","doesn't hardly","not ever"],ans:1,expl:"hardly ever 本身已含否定，是「幾乎不」的固定用法。"},
    {q:"If her mother ____ sick, she ____ the clinic right away.",qCn:"只要她媽媽不舒服，她就會馬上打給診所。",opts:["feels / calls","will feel / will call","feels / will call","will feel / calls"],ans:0,expl:"if 子句講一般性規則，兩邊都用現在簡單式，不能用 will。"},
    {q:"Which sentence describes a general truth?",qCn:"哪一句在描述一個普遍事實？",opts:["A fever is meaning an infection.","A fever usually means the body is fighting an infection.","A fever was meaning an infection.","A fever means infection yesterday."],ans:1,expl:"mean 是狀態動詞，描述普遍成立的事實要用現在簡單式，不能用進行式。"}
  ]
},

{
  id:"dg20260819b2", date:"2026-08-19", unitNo:2,
  level:"B2", title:"Present Simple: Register and Rhetorical Effect", titleCn:"現在簡單式的語域與修辭效果",
  srcDays:[],
  summary:"到了 B2，現在簡單式不只是文法規則，更是一種修辭選擇：說故事時用「歷史現在式」製造臨場感、寫指示或食譜時用「泛稱 you」、寫學術或正式文章時用簡單式陳述通則、並用 tend to / can 這類詞緩和過度武斷的語氣。",
  sections:[
    {h:"① 歷史現在式（historical present）：說故事更生動", body:[
      "明明講的是過去的事，卻刻意用現在簡單式，讓聽者感覺「事情正在眼前發生」：",
      "So I walk into the clinic, and the waiting room is already full.（口語敘事，明明是過去發生的）",
      "In 1979, the WHO declares smallpox eradicated worldwide.（歷史敘述也可以用現在式，增加戲劇效果）",
      "這種用法常見於口語故事、新聞回顧、紀錄片旁白，正式書面報告則避免使用。"
    ]},
    {h:"② 泛稱 you：指示與食譜的現在簡單式", bullets:[
      "說明步驟、寫食譜或操作手冊時，用現在簡單式＋泛稱 you，等於「任何人都是這樣做」：",
      "You take your temperature, and if it's above 38 degrees, you call the clinic.（描述一般流程）",
      "First you fill out the form, then you wait to be called.（步驟說明，不是在講某個特定的人）",
      "這種 you 不是指「讀者你」，而是「任何人、一般人」——比祈使句（Take your temperature.）多了一點客觀敘述的距離感。"
    ]},
    {h:"③ 正式寫作中的通則化語氣：緩和武斷", table:{head:["寫法","效果"],rows:[
      ["Vaccines prevent severe illness.（直接陳述）","武斷、不留餘地"],
      ["Vaccines tend to reduce the risk of severe illness.","加了 tend to，留有例外空間，較嚴謹"],
      ["Vaccines can reduce the risk of severe illness.","can 表示「有可能」，語氣更保守、學術"]
    ]}, examples:[
      {en:"Older adults tend to be more vulnerable to seasonal viruses.",cn:"年長者往往比較容易受到季節性病毒影響。",note:"tend to 緩和絕對語氣，比 are always 更嚴謹"},
      {en:"Regular check-ups can catch problems before they become serious.",cn:"定期健檢有可能在問題變嚴重前就發現。",note:"can 表示可能性，不是保證"}
    ]},
    {h:"④ 何時該避免歷史現在式", bullets:[
      "正式報告、新聞內文（非標題）、學術論文的敘事部分，仍然用過去式報告已發生的事，維持客觀距離。",
      "歷史現在式適合口語轉述、部落格、紀錄片旁白這類「想拉近距離」的文體，寫求職信或研究報告時不要用。"
    ]}
  ],
  traps:[
    {bad:"Vaccines prevent severe illness. (寫學術報告時想強調嚴謹)",good:"Vaccines tend to reduce the risk of severe illness.",why:"學術寫作習慣用 tend to / can 這類詞留餘地，直接斷言 prevent 反而顯得不夠嚴謹、容易被挑戰。"},
    {bad:"In the report, I walk into the clinic and see the empty waiting room. (正式報告)",good:"In the report, I walked into the clinic and saw the empty waiting room.",why:"正式報告要用過去式維持客觀敘述的距離；歷史現在式只適合口語或非正式的敘事文體。"},
    {bad:"Take your temperature. If it is high, you call the clinic. (指示文混用祈使句與泛稱you，語氣不一致)",good:"You take your temperature, and if it's high, you call the clinic.",why:"同一段說明步驟時，泛稱 you 和祈使句最好不要混用，選一種維持一致的語氣。"}
  ],
  quiz:[
    {q:"Which sentence uses the historical present for a vivid, informal story?",qCn:"哪一句用「歷史現在式」讓故事更生動、口語？",opts:["A. Yesterday I walked into the clinic and waited an hour.","B. So I walk into the clinic, and the waiting room is already full.","C. I have walked into the clinic many times.","D. I will walk into the clinic tomorrow."],ans:1,expl:"用現在簡單式敘述過去發生的事，是口語敘事常見的歷史現在式，增加臨場感。"},
    {q:"Which sentence sounds more careful and academic?",qCn:"哪一句聽起來更嚴謹、更像學術寫作？",opts:["A. Vaccines prevent severe illness completely.","B. Vaccines tend to reduce the risk of severe illness.","C. Vaccines always prevent severe illness.","D. Vaccines will prevent severe illness."],ans:1,expl:"tend to 留有例外空間，是正式／學術寫作緩和武斷語氣的常見用法。"},
    {q:"In instructions, what does the generic \"you\" in \"You take your temperature first\" refer to?",qCn:"說明步驟裡的泛稱 you（如 You take your temperature first）指的是誰？",opts:["A. The reader specifically","B. Any person in general","C. The doctor only","D. The writer"],ans:1,expl:"泛稱 you 指「任何人、一般人」，不是特定指讀者本人。"},
    {q:"When should you avoid the historical present?",qCn:"什麼情況應該避免使用歷史現在式？",opts:["A. When telling a story to a friend","B. In a formal report describing what happened","C. In a documentary narration","D. In a casual blog post"],ans:1,expl:"正式報告需要維持客觀距離，通常用過去式報告已發生的事，不用歷史現在式。"}
  ]
},

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
    {q:"Look! It ____ outside.",qCn:"你看！外面正在下雨。",opts:["rain","rains","is raining","raining"],ans:2,expl:"Look! 表示眼前正在發生 → is raining。"},
    {q:"— What are you doing? — I ____ TV.",qCn:"—你在做什麼？—我正在看電視。",opts:["watch","am watching","watching","is watching"],ans:1,expl:"問句是進行式，答句也用進行式；主詞 I 配 am。"},
    {q:"She ____ on the phone right now.",qCn:"她現在正在講電話。",opts:["talk","is talking","talking","are talking"],ans:1,expl:"right now ＝ 現在這一刻；she 配 is。"},
    {q:"run 的 -ing 是哪一個？",qCn:"run 的 -ing 形式是哪一個？",opts:["runing","runeing","running","runnning"],ans:2,expl:"短母音＋子音結尾，字尾 n 要重複再加 -ing → running。"}
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
    {q:"I usually ____ tea, but today I ____ coffee.",qCn:"我平常喝茶，但今天在喝咖啡。",opts:["drink / am drinking","am drinking / drink","drink / drink","am drinking / am drinking"],ans:0,expl:"usually ＝ 習慣用簡單式；today ＝ 暫時的例外用進行式。"},
    {q:"She ____ three languages: Chinese, English, and Japanese.",qCn:"她會說三種語言：中文、英文和日文。",opts:["is speaking","speaks","is knowing","speak"],ans:1,expl:"會講幾種語言是長期能力，用簡單式。"},
    {q:"Don't call me at 12:30 — I ____ lunch.",qCn:"12 點半不要打給我——那時我正在吃午餐。",opts:["have","am having","having","has"],ans:1,expl:"have ＝ 吃（動作），12:30 是特定時刻正在做的事 → 進行式。"},
    {q:"He ____ to change jobs. He's happy where he is.",qCn:"他不想換工作。他在現在的地方很開心。",opts:["isn't wanting","doesn't want","don't want","not wants"],ans:1,expl:"want 是狀態動詞，不用進行式；第三人稱用 doesn't want。"}
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
    {q:"My car is at the garage, so I ____ the bus to work this week.",qCn:"我的車在修車廠，所以這禮拜我都搭公車上班。",opts:["take","am taking","will take","took"],ans:1,expl:"this week ＝ 暫時狀態（車修好就結束），用現在進行式。"},
    {q:"We ____ the new client at 10 a.m. tomorrow — the meeting room is already booked.",qCn:"我們明天早上十點要見新客戶——會議室已經訂好了。",opts:["will meet","meet","are meeting","met"],ans:2,expl:"會議室都訂了＝敲定的安排 → are meeting。"},
    {q:"選出「抱怨」語氣最強的一句：",qCn:"選出「抱怨」語氣最強的一句：",opts:["My roommate always leaves dishes in the sink.","My roommate is always leaving dishes in the sink.","My roommate left dishes in the sink.","My roommate leaves dishes in the sink sometimes."],optsCn:["A. 我室友總是把碗盤留在水槽。", "B. 我室友老是把碗盤留在水槽（抱怨語氣）。", "C. 我室友把碗盤留在水槽了。", "D. 我室友有時候把碗盤留在水槽。"],ans:1,expl:"always ＋ 進行式 ＝ 「老是這樣、受不了」的抱怨語氣。"},
    {q:"Why ____ so quiet today? You're usually the loudest person in the office.",qCn:"你今天怎麼這麼安靜？你平常是辦公室最大聲的人。",opts:["are you","are you being","do you be","you are"],ans:1,expl:"be 的進行式 are you being 表示「今天暫時的表現」，跟平常不同——後句的 usually 就是線索。"}
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
    {q:"Which is a typical news headline?",qCn:"哪一個是典型的新聞標題？",opts:["A. Typhoon Is Hitting Coast","B. Typhoon Hits Coast","C. Typhoon Has Hit Coast","D. Typhoon Was Hitting Coast"],ans:1,expl:"新聞標題用現在簡單式報導已發生的事。"},
    {q:"Fill in for a formal report: The data ____ a clear pattern.",qCn:"正式報告的填空：數據顯示出清楚的模式。",opts:["are suggesting","suggest","suggested","have been suggesting"],ans:1,expl:"正式報告用 suggest（簡單式）陳述客觀事實。"},
    {q:"Which creates a vivid narrative scene?",qCn:"哪一句營造出生動的敘事場景？",opts:["A. Rain falls and wind blows.","B. Rain is falling and wind is blowing.","C. Rain fell and wind blew.","D. Rain has fallen and wind has blown."],ans:1,expl:"進行式建立「此刻正在發生」的畫面感，是敘事的標準手法。"},
    {q:"Prices ____ faster than expected this quarter.",qCn:"這一季價格上漲得比預期快。",opts:["rise","are rising","rose","rising"],ans:1,expl:"this quarter 表示趨勢還在持續中，用進行式強調「還在漲」。"}
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
    {q:"My hands are dirty. I ____ the car.",qCn:"我的手很髒。我剛剛一直在洗車。",opts:["have washed","have been washing","wash","am washed"],ans:1,expl:"手還是髒的＝剛停止且結果看得見 → have been washing。"},
    {q:"How long ____ Chinese?",qCn:"你學中文多久了？",opts:["are you learning","do you learn","have you been learning","have you learn"],ans:2,expl:"問持續到現在的時間長度。"},
    {q:"She ____ him since primary school.",qCn:"她從小學就認識他了。",opts:["has been knowing","has known","is knowing","knows"],ans:1,expl:"know 是狀態動詞，用 has known。"},
    {q:"I ____ this book twice, so I know the ending.",qCn:"這本書我讀過兩次了，所以我知道結局。",opts:["have been reading","have read","am reading","had been reading"],ans:1,expl:"講次數與完成 → have read。"}
  ]
}

]

};
