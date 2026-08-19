// ============================================================
//  🎧 聽力跟讀教材（純語音，無影片）
//
//  每一課都用「裝置內建的語音朗讀（TTS）」播放，站內不嵌入任何影片，
//  離線時也能練。
//
//   kind:"note"  — 本站自製對話。有 noteRef 的，聽前單字的音標／中文／
//                  英文定義都直接取自 data-notes.js 的課堂筆記，未自行杜撰；
//                  對話與理解題為原創撰寫。date 是每週三／五的更新日，
//                  「今日」分頁會取 <= 今天的最新一批。
//   kind:"scene" — 生活場景對話，主題參考 VOA 同名課程，句子為本站原創。
// ============================================================
window.LISTEN = {

/* ========== 依課堂筆記自製（每週三／五更新） ========== */
notes:[
{
  id:"dl20260819a2",
  date:"2026-08-19",
  level:"A2",
  minutes:2,
  kind:"note",
  title:"Grandma Feels Better",
  titleCn:"奶奶好多了",
  series:"本站自製聽力 · 家人與健康主題",
  topic:"👵 家人與健康",
  focus:"現在簡單式描述現在的狀況，過去簡單式描述昨天發生的事（did you see...?）",
  intro:"Tom打電話問候奶奶，昨天奶奶去看了醫生。這一課句子都很短，重點是聽出「現在」和「昨天」的差別：現在簡單式講現在的狀況，did 開頭的問句講昨天做了什麼。",
  tip:"第一次聽先抓「奶奶現在好不好」，第二次再聽「她昨天做了什麼」。聽到 did 就是在問過去的事。",
  pre:[
    {w:"feel",ipa:"/fiːl/",cn:"覺得",def:"To have a certain feeling in your body or mind."},
    {w:"medicine",ipa:"/ˈmedɪsn/",cn:"藥",def:"Something you take to help you feel better when you are sick."},
    {w:"headache",ipa:"/ˈhedeɪk/",cn:"頭痛",def:"A pain inside your head."},
    {w:"rest",ipa:"/rest/",cn:"休息",def:"To relax your body and stop working."},
    {w:"visit",ipa:"/ˈvɪzɪt/",cn:"拜訪",def:"To go and see a person or place."},
    {w:"warm",ipa:"/wɔːrm/",cn:"溫暖的",def:"A little hot, not cold."}
  ],
  script:[
    {sp:"Tom",en:"Hi Grandma! How are you feeling today?",cn:"嗨奶奶！你今天覺得怎麼樣？"},
    {sp:"Grandma",en:"Much better, Tom. Thank you for asking.",cn:"好多了，Tom。謝謝你關心。"},
    {sp:"Tom",en:"Did you see the doctor yesterday?",cn:"你昨天有去看醫生嗎？"},
    {sp:"Grandma",en:"Yes, I did. The doctor gave me some medicine.",cn:"有，我去了。醫生給了我一些藥。"},
    {sp:"Tom",en:"That's good. Do you still have a headache?",cn:"太好了。你還會頭痛嗎？"},
    {sp:"Grandma",en:"No, I don't. I feel much better now.",cn:"不會了。我現在感覺好多了。"},
    {sp:"Tom",en:"Are you resting today?",cn:"你今天有在休息嗎？"},
    {sp:"Grandma",en:"Yes, I am. I'm drinking warm tea and watching TV.",cn:"有。我正在喝溫茶、看電視。"},
    {sp:"Tom",en:"I can visit you again this weekend.",cn:"我這個週末可以再來看你。"},
    {sp:"Grandma",en:"I would love that, Tom.",cn:"我會很開心的，Tom。"}
  ],
  questions:[
    {q:"How does Grandma feel today?",qCn:"奶奶今天感覺怎麼樣？",opts:["A. Worse than yesterday","B. Much better","C. Exactly the same","D. Very sick"],optsCn:["A. 比昨天更糟","B. 好多了","C. 跟平常一樣","D. 非常不舒服"],ans:1,expl:"Grandma says \"Much better, Tom.\""},
    {q:"What did the doctor give Grandma?",qCn:"醫生給了奶奶什麼？",opts:["A. Some tea","B. Some medicine","C. A book","D. A new phone"],optsCn:["A. 一些茶","B. 一些藥","C. 一本書","D. 一支新手機"],ans:1,expl:"\"The doctor gave me some medicine.\""},
    {q:"Does Grandma still have a headache?",qCn:"奶奶還會頭痛嗎？",opts:["A. Yes, a little","B. No, she doesn't","C. She isn't sure","D. She didn't answer"],optsCn:["A. 會，還有一點","B. 不會了","C. 她不確定","D. 她沒有回答"],ans:1,expl:"\"No, I don't. I feel much better now.\""},
    {q:"Tom ____ visit his grandmother again this weekend.",qCn:"Tom這個週末可以再來看奶奶。",opts:["can","cans","canning","is can"],ans:0,expl:"can 是助動詞，後面直接加動詞原形 visit，不需要加 s。"},
    {q:"What is Grandma doing today?",qCn:"奶奶今天在做什麼？",opts:["A. Cooking dinner","B. Drinking tea and watching TV","C. Going shopping","D. Cleaning the house"],optsCn:["A. 煮晚餐","B. 喝茶、看電視","C. 去買東西","D. 打掃房子"],ans:1,expl:"\"I'm drinking warm tea and watching TV.\""}
  ]
},

{
  id:"dl20260819b1",
  date:"2026-08-19",
  level:"B1",
  minutes:3,
  kind:"note",
  title:"A Distracted Day at the Office",
  titleCn:"心不在焉的上班日",
  series:"本站自製聽力 · 家人與健康主題",
  topic:"💬 辦公室裡的關心",
  focus:"現在簡單式（習慣）vs 現在進行式／現在完成式（她已經有預約了）",
  intro:"Anita在越南的辦公室裡，同事Ben發現她今天心不在焉。這一課示範怎麼用英文簡短地聊「家人的健康狀況」，也複習現在簡單式跟現在完成式的差別。",
  tip:"第一次聽抓住「Anita的媽媽怎麼了」，第二次再聽Ben給了什麼建議、Anita最後決定怎麼做。",
  pre:[
    {w:"distracted",ipa:"/dɪˈstræktɪd/",cn:"分心的",def:"Not able to focus because you are thinking about something else."},
    {w:"cough",ipa:"/kɔːf/",cn:"咳嗽",def:"A sudden noise made when air is pushed out of the lungs."},
    {w:"tired",ipa:"/ˈtaɪərd/",cn:"疲累的",def:"Feeling like you need to rest."},
    {w:"appointment",ipa:"/əˈpɔɪntmənt/",cn:"預約（門診）",def:"A time you plan to see the doctor."},
    {w:"take care of",ipa:"/teɪk keər ʌv/",cn:"照顧",def:"To look after someone."},
    {w:"suggest",ipa:"/səˈdʒest/",cn:"建議",def:"To give an idea about what someone should do."}
  ],
  script:[
    {sp:"Ben",en:"You look a bit distracted today. Is everything okay?",cn:"你今天看起來有點心不在焉，還好嗎？"},
    {sp:"Anita",en:"Not really. I called my mother in Taiwan last night, and she didn't sound well.",cn:"不太好。我昨晚打給在台灣的媽媽，她聽起來不太對勁。"},
    {sp:"Ben",en:"What's wrong with her?",cn:"她怎麼了？"},
    {sp:"Anita",en:"She has a cough, and she's been feeling tired for a few days.",cn:"她咳嗽，而且已經覺得累好幾天了。"},
    {sp:"Ben",en:"Is she seeing a doctor?",cn:"她有要看醫生嗎？"},
    {sp:"Anita",en:"Yes, she is. I told her to go this week, and she already has an appointment.",cn:"有。我叫她這禮拜去看，她已經有預約了。"},
    {sp:"Ben",en:"That's good. Try not to worry too much.",cn:"那很好。試著別太擔心。"},
    {sp:"Anita",en:"I know, but she takes care of my brother's kids every day, so she never really rests.",cn:"我知道，但她每天都要照顧我哥的小孩，所以她從來沒真正休息過。"},
    {sp:"Ben",en:"Maybe you should ask your brother to help more this week.",cn:"也許你可以請你哥這禮拜多幫忙一點。"},
    {sp:"Anita",en:"That's a good idea. I'll call her again tonight and suggest it.",cn:"這是個好主意。我今晚再打給她，跟她提這件事。"}
  ],
  questions:[
    {q:"Why is Anita distracted at work?",qCn:"Anita今天上班為什麼心不在焉？",opts:["A. She lost her phone","B. Her mother didn't sound well on the phone last night","C. She has too much work","D. She is planning a trip"],optsCn:["A. 她的手機不見了","B. 昨晚媽媽電話裡聽起來不太對勁","C. 她工作太多","D. 她在計畫旅行"],ans:1,expl:"I called my mother in Taiwan last night, and she didn't sound well."},
    {q:"What symptoms does Anita's mother have?",qCn:"Anita媽媽有什麼症狀？",opts:["A. A headache and a fever","B. A cough and tiredness","C. A stomachache","D. A sore throat"],optsCn:["A. 頭痛和發燒","B. 咳嗽和疲累","C. 肚子痛","D. 喉嚨痛"],ans:1,expl:"She has a cough, and she's been feeling tired for a few days."},
    {q:"She ____ care of my brother's kids every day.",qCn:"她每天都要照顧我哥的小孩。",opts:["is taking","takes","took","take"],ans:1,expl:"every day 表示習慣，用現在簡單式，第三人稱加 s：takes。"},
    {q:"What does Ben suggest?",qCn:"Ben建議什麼？",opts:["A. Anita should fly back to Taiwan","B. Anita's brother should help more this week","C. Anita should stop calling her mother","D. Anita should take a day off"],optsCn:["A. Anita應該飛回台灣","B. Anita的哥哥這禮拜應該多幫忙","C. Anita應該不要再打給媽媽","D. Anita應該請一天假"],ans:1,expl:"Maybe you should ask your brother to help more this week."},
    {q:"What will Anita do tonight?",qCn:"Anita今晚會做什麼？",opts:["A. Book a flight to Taiwan","B. Call her mother again and suggest her brother help","C. Visit the clinic herself","D. Ask Ben to call her mother"],optsCn:["A. 訂機票回台灣","B. 再打給媽媽，建議哥哥幫忙","C. 自己去診所","D. 請Ben打給媽媽"],ans:1,expl:"I'll call her again tonight and suggest it."}
  ]
},

{
  id:"dl20260819b1p",
  date:"2026-08-19",
  level:"B1+",
  minutes:3,
  kind:"note",
  title:"Two Hours in the Waiting Room",
  titleCn:"在候診室等了兩小時",
  series:"本站自製聽力 · 健康與醫療主題",
  topic:"🏥 擁擠的診所",
  focus:"被動語態（was consulted）與現在完成式（have been crowded）",
  intro:"Sara跟Ben在辦公室聊起昨天在診所等了快兩小時的經驗，Ben提到遠距醫療（telemedicine）這個選項。留意對話裡的被動語態，還有「到目前為止一直如此」的現在完成式。",
  tip:"第一次聽抓住Sara等了多久、為什麼；第二次再聽Ben對遠距醫療的建議是什麼、什麼情況還是要親自去診所。",
  pre:[
    {w:"crowded",ipa:"/ˈkraʊdɪd/",cn:"擁擠的",def:"Full of people."},
    {w:"waiting room",ipa:"/ˈweɪtɪŋ ruːm/",cn:"候診室",def:"A room where people wait to see a doctor."},
    {w:"telemedicine",ipa:"/ˌtelɪˈmedɪsɪn/",cn:"遠距醫療",def:"Medical care given through a video call instead of an in-person visit."},
    {w:"consulted",ipa:"/kənˈsʌltɪd/",cn:"被看診、諮詢",def:"Given professional advice, such as by a doctor."},
    {w:"in person",ipa:"/ɪn ˈpɜːrsn/",cn:"親自、面對面",def:"Physically present, not by phone or video."},
    {w:"serious",ipa:"/ˈsɪriəs/",cn:"嚴重的",def:"Important or dangerous, not small."}
  ],
  script:[
    {sp:"Sara",en:"I waited almost two hours at the clinic yesterday.",cn:"我昨天在診所等了快兩個小時。"},
    {sp:"Ben",en:"I heard clinics have been really crowded this summer.",cn:"我聽說今年夏天診所真的很擁擠。"},
    {sp:"Sara",en:"Exactly. The nurse said the waiting room has been full since early morning.",cn:"沒錯。護理師說候診室從一大早就滿了。"},
    {sp:"Ben",en:"Have you tried telemedicine? A friend of mine was consulted by video call last week.",cn:"你試過遠距醫療嗎？我一個朋友上禮拜就是透過視訊看診的。"},
    {sp:"Sara",en:"Not yet. Is it as good as an in-person visit?",cn:"還沒試過。它跟親自去看診一樣好嗎？"},
    {sp:"Ben",en:"For small problems, yes. You still get seen by a real doctor.",cn:"小問題的話是可以的。你還是會由真正的醫生看診。"},
    {sp:"Sara",en:"That's good to know. I might try it next time instead of waiting two hours.",cn:"這個資訊很有用。下次我可能會試試看，不要再等兩個小時了。"},
    {sp:"Ben",en:"Just remember, if the problem seems serious, you should still go in person.",cn:"但要記得，如果問題看起來很嚴重，還是應該親自去一趟。"},
    {sp:"Sara",en:"Good point. I'll keep that in mind.",cn:"有道理，我會記住的。"}
  ],
  questions:[
    {q:"How long did Sara wait at the clinic?",qCn:"Sara在診所等了多久？",opts:["A. About 20 minutes","B. Almost two hours","C. All day","D. She didn't wait at all"],optsCn:["A. 大約20分鐘","B. 快兩個小時","C. 一整天","D. 完全沒等"],ans:1,expl:"I waited almost two hours at the clinic yesterday."},
    {q:"A friend of Ben's ____ by video call last week.",qCn:"Ben的一個朋友上禮拜是透過視訊看診的。",opts:["consulted","was consulted","consults","is consulting"],ans:1,expl:"「被看診」是被動語態：was consulted（be動詞過去式+過去分詞）。"},
    {q:"According to Ben, when should someone still go to the clinic in person?",qCn:"根據Ben的說法，什麼時候還是應該親自去診所？",opts:["A. Only on weekends","B. If the problem seems serious","C. Never, telemedicine is always better","D. Only if it's raining"],optsCn:["A. 只有週末","B. 如果問題看起來很嚴重","C. 從來不用，遠距醫療永遠比較好","D. 只有下雨天"],ans:1,expl:"if the problem seems serious, you should still go in person."},
    {q:"Why has the waiting room been so full recently, based on the conversation?",qCn:"根據對話，候診室最近為什麼一直很滿？",opts:["A. The clinic reduced its opening hours","B. Clinics have been crowded this summer","C. There is only one doctor working","D. The clinic is closing soon"],optsCn:["A. 診所縮短了看診時間","B. 今年夏天診所一直很擁擠","C. 只有一位醫生在看診","D. 診所快要關閉了"],ans:1,expl:"clinics have been really crowded this summer... the waiting room has been full since early morning."},
    {q:"What does Sara plan to do next time?",qCn:"Sara下次打算怎麼做？",opts:["A. Wait two hours again","B. Try telemedicine instead of waiting","C. Go to a different clinic","D. Stop seeing doctors"],optsCn:["A. 再等兩小時","B. 試試遠距醫療，不要再等","C. 換一間診所","D. 不再看醫生"],ans:1,expl:"I might try it next time instead of waiting two hours."}
  ]
},

{
  id:"dl20260819b2",
  date:"2026-08-19",
  level:"B2",
  minutes:4,
  kind:"note",
  title:"Extending the Vaccination Window",
  titleCn:"延長疫苗接種期",
  series:"本站自製聽力 · 健康與醫療主題",
  topic:"🎙️ 健康時事訪談",
  focus:"正式訪談語域：tend to / can 緩和語氣，被動語態與現在完成式在新聞討論中的用法",
  intro:"一段模擬的健康時事訪談：主持人訪問Lin醫生，討論台灣延長免費疫苗接種計畫的決定。留意訪談裡比較正式、留有餘地的說法，例如 tend to be more vulnerable，而不是直接斷言。",
  tip:"第一次聽抓住「為什麼延長」和「誰風險比較高」；第二次再注意Lin醫生怎麼用 tend to、can 這類詞讓陳述聽起來更嚴謹、不武斷。",
  pre:[
    {w:"variant",ipa:"/ˈveəriənt/",cn:"（病毒）變異株",def:"A slightly different form of a virus."},
    {w:"outpatient",ipa:"/ˈaʊtpeɪʃnt/",cn:"門診病患",def:"A patient who visits a hospital or clinic but does not stay overnight."},
    {w:"vulnerable",ipa:"/ˈvʌlnərəbl/",cn:"容易受傷害的",def:"More likely to be harmed or affected by something."},
    {w:"chronic",ipa:"/ˈkrɒnɪk/",cn:"慢性的",def:"Lasting a long time, often used for illnesses."},
    {w:"extension",ipa:"/ɪkˈstenʃn/",cn:"延長",def:"A longer period of time given for something."},
    {w:"available",ipa:"/əˈveɪləbl/",cn:"可取得的",def:"Able to be used or obtained."}
  ],
  script:[
    {sp:"Host",en:"Taiwan's CDC recently extended the free COVID-19 vaccination program through the end of September. Dr. Lin, why was this decision made?",cn:"台灣疾管署最近把免費COVID-19疫苗接種計畫延長到九月底。Lin醫生，為什麼會做這個決定？"},
    {sp:"Dr. Lin",en:"Case numbers climbed sharply in late July, and a new variant, nicknamed Nimbus, has been spreading quickly.",cn:"七月下旬病例數急遽上升，一款暱稱Nimbus的新變異株也一直快速傳播。"},
    {sp:"Host",en:"How serious is this wave, compared to previous ones?",cn:"跟之前幾波相比，這一波有多嚴重？"},
    {sp:"Dr. Lin",en:"Outpatient visits more than doubled in a single week, so it's a significant jump.",cn:"門診就診人次一週內就翻了一倍以上，所以這是相當顯著的上升。"},
    {sp:"Host",en:"Who is most at risk this season?",cn:"這一季誰的風險最高？"},
    {sp:"Dr. Lin",en:"Older adults and people with chronic illness tend to be more vulnerable, especially if they haven't been vaccinated.",cn:"年長者和慢性病患者往往比較容易受影響，尤其是還沒接種疫苗的人。"},
    {sp:"Host",en:"What would you say to someone who hasn't gotten this year's shot yet?",cn:"對還沒打今年疫苗的人，你會怎麼說？"},
    {sp:"Dr. Lin",en:"I'd say the extension gives you extra time, but don't wait until the peak arrives in mid-August.",cn:"我會說，這次延長給了大家多一點時間，但不要等到八月中的高峰才行動。"},
    {sp:"Host",en:"Any final advice?",cn:"還有什麼最後的建議嗎？"},
    {sp:"Dr. Lin",en:"Free vaccines are available at most clinics and community health stations. A short visit now can prevent a much longer illness later.",cn:"大部分診所與社區健康站都還有免費疫苗。現在去一趟，可能就能避免之後一場更長的病。"}
  ],
  questions:[
    {q:"Why did Taiwan's CDC extend the vaccination program?",qCn:"台灣疾管署為什麼延長疫苗接種計畫？",opts:["A. Because vaccine supplies ran out","B. Because cases climbed sharply due to a new variant","C. Because the previous program had errors","D. Because fewer clinics were open"],optsCn:["A. 因為疫苗供應用完了","B. 因為新變異株導致病例急遽上升","C. 因為之前的計畫有錯誤","D. 因為開放的診所變少了"],ans:1,expl:"Case numbers climbed sharply in late July, and a new variant, nicknamed Nimbus, has been spreading quickly."},
    {q:"According to Dr. Lin, who tends to be more vulnerable this season?",qCn:"根據Lin醫生，這一季誰往往比較容易受影響？",opts:["A. Young children only","B. Older adults and people with chronic illness","C. People who travel often","D. Office workers"],optsCn:["A. 只有幼童","B. 年長者和慢性病患者","C. 常常旅行的人","D. 上班族"],ans:1,expl:"Older adults and people with chronic illness tend to be more vulnerable."},
    {q:"In this conversation, what does \"tend to\" suggest?",qCn:"在這段對話中，「tend to」這個說法暗示什麼？",opts:["A. A rule with no exceptions","B. A general pattern, not an absolute rule","C. Something that happened only once","D. A personal opinion with no evidence"],optsCn:["A. 一個沒有例外的規則","B. 一種普遍傾向，不是絕對規則","C. 只發生過一次的事","D. 沒有根據的個人意見"],ans:1,expl:"tend to 是正式語域緩和武斷語氣的說法，表示「通常、往往」而非「every single time」。"},
    {q:"How much did outpatient visits increase in a single week?",qCn:"門診就診人次一週內增加了多少？",opts:["A. They stayed about the same","B. They more than doubled","C. They decreased slightly","D. They increased by ten percent"],optsCn:["A. 大致沒變","B. 翻了一倍以上","C. 略微下降","D. 增加了百分之十"],ans:1,expl:"Outpatient visits more than doubled in a single week."},
    {q:"What is Dr. Lin's final advice?",qCn:"Lin醫生最後的建議是什麼？",opts:["A. Wait until the peak to get vaccinated","B. Get vaccinated soon since free vaccines are available","C. Avoid clinics until October","D. Only vaccinate children"],optsCn:["A. 等到高峰再接種","B. 儘快接種，因為免費疫苗還可以取得","C. 十月前避免去診所","D. 只讓兒童接種"],ans:1,expl:"Free vaccines are available at most clinics... A short visit now can prevent a much longer illness later."}
  ]
},

{
  id:"au01",
  date:"2026-08-14",
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
  id:"au12",
  date:"2026-08-14",
  level:"B1+",
  minutes:3,
  kind:"note",
  title:"If I Won the Lottery",
  titleCn:"如果我中了樂透",
  series:"本站自製聽力 · 取材自課堂筆記",
  noteRef:"20251226 條件句文法解析",
  topic:"💭 條件句與想像",
  focus:"第二條件句（If + 過去式, would + 原形動詞）用來談想像、不真實的情況；第一條件句（If + 現在式, will + 原形動詞）則用來談真實會發生的可能性。順便聽 If I were you 的固定說法。",
  intro:"老師 Mia 用一個經典問題開場：如果你明天中了樂透，你會先做什麼？Anna 想馬上辭職，Ben 想搬去風景好的地方。兩個人在回答的同時，剛好把第二條件句整組句型示範了一遍。這一課要聽的不是內容有多誇張，而是「過去式」在這裡其實不是過去，而是「離現實有距離」。",
  tip:"第一次聽只抓 If 後面用什麼時態、主要子句用 will 還是 would。第二次再回頭比較 If it rains 和 If it rained 這兩句，感覺一下真實與想像的差別。",
  pre:[
    {w:"lottery",ipa:"/ˈlɑː.tər.i/",cn:"抽獎、彩券",def:"a game where people buy tickets with numbers, hoping to win a large amount of money"},
    {w:"daydream",ipa:"/ˈdeɪ.driːm/",cn:"做白日夢",def:"to let your mind wander and imagine pleasant things instead of focusing on what you should be doing"},
    {w:"scenery",ipa:"/ˈsiːnəri/",cn:"風景、景色",def:"the natural features of an area such as mountains and fields."},
    {w:"conditional",ipa:"/kənˈdɪʃ.ən.əl/",cn:"條件的；條件句（文法用語）",def:"a grammar term for a sentence that describes what happens if something else happens first"},
    {w:"imaginary",ipa:"/ɪˈmædʒ.ə.ner.i/",cn:"想像中的、虛構的",def:"existing only in your mind, not real"},
    {w:"possibility",ipa:"/ˌpɑː.səˈbɪl.ə.ti/",cn:"可能性",def:"a chance that something may happen or be true"},
    {w:"fluently",ipa:"/ˈfluː.ənt.li/",cn:"流利地",def:"in a smooth way, without stopping or making mistakes, when speaking a language"},
    {w:"effort",ipa:"/ˈef.ərt/",cn:"努力",def:"the physical or mental energy that you use to do something"}
  ],
  script:[
    {sp:"Mia",en:"Okay, quick warm-up before we start. If you won the lottery tomorrow, what would you do first?",cn:"好，開始上課前先來個暖身。如果你明天中了樂透，你會先做什麼？"},
    {sp:"Anna",en:"Ha, that's my favourite daydream. If I won, I would quit my job the same afternoon.",cn:"哈，那是我最愛的白日夢。如果我中了，我當天下午就辭職。"},
    {sp:"Ben",en:"Really? I would keep working. I'd just move somewhere with better scenery.",cn:"真的嗎？我會繼續工作。我只會搬去風景比較好的地方。"},
    {sp:"Mia",en:"Nice. And notice what you both just did - that's the second conditional.",cn:"很好。而且注意你們兩個剛剛做了什麼 - 那就是第二條件句。"},
    {sp:"Anna",en:"So the second conditional is for imaginary situations, right? Not real ones.",cn:"所以第二條件句是用在想像的情況，對吧？不是真實的情況。"},
    {sp:"Mia",en:"Exactly. If plus past simple, then would plus the base verb. The past tense here doesn't mean past time.",cn:"沒錯。If 加過去簡單式，然後 would 加原形動詞。這裡的過去式並不是指過去的時間。"},
    {sp:"Ben",en:"Then what does it mean?",cn:"那它是什麼意思？"},
    {sp:"Mia",en:"Distance from reality. The further from the truth, the further back the tense goes.",cn:"跟現實的距離。離事實越遠，時態就往後退得越遠。"},
    {sp:"Anna",en:"And the first conditional is for a real possibility?",cn:"那第一條件句是用在真實的可能性嗎？"},
    {sp:"Mia",en:"Right. If it rains tomorrow, we will stay inside. That's a genuine possibility.",cn:"對。If it rains tomorrow, we will stay inside. 那是真的有可能發生。"},
    {sp:"Ben",en:"But if it rained tomorrow, we would stay inside sounds softer somehow.",cn:"但是 if it rained tomorrow, we would stay inside 聽起來不知為何比較委婉。"},
    {sp:"Mia",en:"Softer and less likely. Same words, different level of reality.",cn:"比較委婉，也比較不可能。一樣的字，但現實程度不同。"},
    {sp:"Anna",en:"Let me try one. If I spoke English fluently, I would apply for that job in Singapore.",cn:"我試一句。如果我英文說得流利，我就會去應徵新加坡那個工作。"},
    {sp:"Mia",en:"Perfect. And you don't speak fluently yet, so the sentence stays imaginary - that's why we use would.",cn:"完美。而且你還沒說得流利，所以這句話還停留在想像 - 這就是為什麼用 would。"},
    {sp:"Ben",en:"If I had more time, I would study every single morning.",cn:"如果我有更多時間，我每天早上都會念書。"},
    {sp:"Mia",en:"Honestly, though, fluency is less about the lottery and more about effort.",cn:"不過老實說，流利這件事跟中樂透沒什麼關係，比較是靠努力。"},
    {sp:"Anna",en:"One last thing. Is it if I was rich, or if I were rich?",cn:"最後一個問題。是 if I was rich，還是 if I were rich？"},
    {sp:"Mia",en:"You hear both, but were is the safer form. If I were you, I would start tonight.",cn:"兩種都聽得到，但 were 比較保險。如果我是你，我今晚就開始。"}
  ],
  questions:[
    {q:"What would Anna do if she won the lottery?",opts:["A. Move to a place with better scenery.","B. Quit her job the same afternoon.","C. Apply for a job in Singapore.","D. Buy a house for her family."],ans:1,expl:"Anna 說 If I won, I would quit my job the same afternoon.（如果中了，我當天下午就辭職）。搬去風景好的地方是 Ben 的答案。"},
    {q:"According to Mia, what does the past tense show in a second conditional?",opts:["A. That the event happened last year.","B. That the speaker is being polite to a stranger.","C. That the situation is distant from reality.","D. That the sentence is a question."],ans:2,expl:"Mia 說 Distance from reality，第二條件句的過去式不是指過去時間，而是表示「離現實有距離」。"},
    {q:"Which sentence is a first conditional about a real possibility?",opts:["A. If it rained tomorrow, we would stay inside.","B. If I were you, I would start tonight.","C. If I had more time, I would study every morning.","D. If it rains tomorrow, we will stay inside."],ans:3,expl:"第一條件句是 If + 現在簡單式, will + 原形動詞，所以 If it rains tomorrow, we will stay inside 才是談真實可能性的那一句。"},
    {q:"Why does Mia say Anna's Singapore sentence must use would?",opts:["A. Because Anna does not speak fluently yet, so it is imaginary.","B. Because the job interview already happened.","C. Because Singapore is far away from Taiwan.","D. Because would is always more polite than will."],ans:0,expl:"Mia 說 you don't speak fluently yet, so the sentence stays imaginary - 因為還沒發生、只是想像，所以用 would。"},
    {q:"What does Mia say about becoming fluent?",opts:["A. It depends mostly on luck.","B. It depends more on effort than on the lottery.","C. It is impossible without moving abroad.","D. It only works if you have more free time."],ans:1,expl:"Mia 說 fluency is less about the lottery and more about effort，強調靠的是努力而不是運氣。"}
  ]
},

{
  id:"vlog01",
  date:"2026-08-14",
  level:"A2",
  minutes:3,
  kind:"note",
  title:"Morning Routine: Phrasal Verbs",
  titleCn:"早晨例行公事：片語動詞",
  series:"本站自製聽力 · 生活作息主題",
  topic:"🌅 早晨作息",
  focus:"早晨作息的片語動詞（wake up / get up / get dressed 這一類）",
  intro:"從鬧鐘響到出門，一連串動作全部用片語動詞講一遍。片語動詞要整組記，不要拆開背單字——wake up 是醒來（張開眼睛）、get up 是離開床鋪，差一個字意思就不一樣。",
  tip:"跟讀時把每個片語動詞念重一點，讓嘴巴記住整組的節奏。念完一次後試著閉上眼睛，用自己的話把今天早上的流程講一遍。",
  pre:[
    {w:"go off",ipa:"/ɡoʊ ɔːf/",cn:"（鬧鐘）響起",def:"When an alarm makes a sound to wake you."},
    {w:"wake up",ipa:"/weɪk ʌp/",cn:"醒來（張開眼睛）",def:"To stop sleeping."},
    {w:"get up",ipa:"/ɡet ʌp/",cn:"起床（離開床）",def:"To get out of bed."},
    {w:"turn off",ipa:"/tɜːrn ɔːf/",cn:"關掉",def:"To stop a machine, light, or alarm."},
    {w:"get dressed",ipa:"/ɡet drest/",cn:"穿衣服",def:"To put your clothes on."},
    {w:"brush your teeth",ipa:"/brʌʃ jɔːr tiːθ/",cn:"刷牙",def:"To clean your teeth with a toothbrush."},
    {w:"have breakfast",ipa:"/hæv ˈbrekfəst/",cn:"吃早餐",def:"To eat the first meal of the day."},
    {w:"leave the house",ipa:"/liːv ðə haʊs/",cn:"出門",def:"To go out of your home."}
  ],
  script:[
    {en:"My alarm goes off at six thirty.",cn:"我的鬧鐘六點半響。"},
    {en:"I wake up, but I don't get up right away.",cn:"我醒了，但沒有馬上起床。"},
    {en:"I turn off the alarm and lie there for five minutes.",cn:"我把鬧鐘關掉，躺著再五分鐘。"},
    {en:"Then I get up and go to the bathroom.",cn:"然後我起床，走去浴室。"},
    {en:"I brush my teeth and wash my face.",cn:"我刷牙、洗臉。"},
    {en:"I get dressed and go downstairs.",cn:"我穿好衣服下樓。"},
    {en:"I have breakfast and check my phone.",cn:"我吃早餐、看一下手機。"},
    {en:"I leave the house at half past seven.",cn:"我七點半出門。"}
  ],
  questions:[
    {q:"\"wake up\" 和 \"get up\" 差在哪裡？",opts:["A. 完全一樣，可互換","B. wake up 是醒來（張眼），get up 是離開床鋪","C. wake up 是起床，get up 是醒來","D. get up 只能用在早上"],ans:1,expl:"wake up = 從睡眠中醒過來；get up = 身體離開床。所以可以說 I wake up at six but I get up at six thirty（六點醒、六點半才爬起來）。"},
    {q:"鬧鐘「響了」英文怎麼說？",opts:["A. My alarm rings up.","B. My alarm goes off.","C. My alarm turns on.","D. My alarm wakes off."],ans:1,expl:"固定說法是 the alarm goes off。注意 go off 用在鬧鐘是「響起」，不是「關掉」——關掉是 turn off。"},
    {q:"下面哪一句的 turn off 用法正確？",opts:["A. I turn the alarm off.","B. I turn off the alarm.","C. A 和 B 都正確","D. 兩句都錯"],ans:2,expl:"turn off 是「可分離」的片語動詞，受詞可以放中間也可以放後面：turn off the alarm ＝ turn the alarm off。但受詞是代名詞時只能放中間：turn it off（不能說 turn off it）。"},
    {q:"「我穿好衣服」正確說法是？",opts:["A. I dress up my clothes.","B. I wear dressed.","C. I get dressed.","D. I get dress."],ans:2,expl:"get dressed 是固定用法（dressed 是形容詞）。注意 dress up 是「盛裝打扮」，意思不一樣。"},
    {q:"描述「每天的習慣」要用哪一種時態？",opts:["A. 現在進行式（I am getting up at seven.）","B. 現在簡單式（I get up at seven.）","C. 過去式（I got up at seven.）","D. 未來式（I will get up at seven.）"],ans:1,expl:"講固定的例行公事、習慣，用現在簡單式。現在進行式 I'm getting up 是指「此時此刻正在起床」。"}
  ]
},

{
  id:"au02",
  date:"2026-08-12",
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
  id:"au07",
  date:"2026-08-12",
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
  id:"vlog03",
  date:"2026-08-12",
  level:"B1+",
  minutes:6,
  kind:"note",
  title:"Talking About the Future",
  titleCn:"聊未來的計畫",
  series:"本站自製聽力 · 生活作息主題",
  topic:"📅 未來計畫",
  focus:"未來的講法：will / going to / 現在進行式表已排定的計畫",
  intro:"聊接下來的打算。同一件「未來的事」，英文有三種講法：已經訂好的用現在進行式、本來就有打算的用 going to、當下才決定的用 will。這一課把三種放在一起對照。",
  tip:"每聽一句就在心裡標記它用了哪一種未來式，以及為什麼是這一種。抓到三個不同的例子就算過關。",
  pre:[
    {w:"plan",ipa:"/plæn/",cn:"計畫、打算",def:"Something you have decided to do."},
    {w:"be going to",ipa:"/bi ˈɡoʊɪŋ tuː/",cn:"打算要…",def:"Used for something you have already decided to do."},
    {w:"look forward to",ipa:"/lʊk ˈfɔːrwərd tuː/",cn:"期待",def:"To feel happy about something that will happen."},
    {w:"book a table",ipa:"/bʊk ə ˈteɪbl/",cn:"訂位",def:"To reserve a place at a restaurant."},
    {w:"make up my mind",ipa:"/meɪk ʌp maɪ maɪnd/",cn:"下定決心、決定好",def:"To decide something."},
    {w:"probably",ipa:"/ˈprɑːbəbli/",cn:"大概、可能",def:"Likely, but not certain."},
    {w:"end up",ipa:"/end ʌp/",cn:"最後變成、結果是",def:"To finally be in a situation you did not plan."}
  ],
  script:[
    {en:"Do you have any plans for the summer?",cn:"你暑假有什麼計畫嗎？"},
    {en:"What are you doing this weekend?",cn:"你這週末要做什麼？"},
    {en:"I'm meeting some friends on Saturday.",cn:"我星期六要跟幾個朋友碰面。（已經約好了）"},
    {en:"We're going to try that new restaurant.",cn:"我們打算去試試那間新餐廳。（早就有打算）"},
    {en:"I'm really looking forward to it.",cn:"我非常期待。"},
    {en:"I haven't made up my mind yet. Maybe I'll just stay home.",cn:"我還沒決定。也許我就待在家吧。（當下才決定）"},
    {en:"I'm flying to Japan next month.",cn:"我下個月要飛日本。（機票已經訂好）"},
    {en:"I think it'll be busy, so I'll probably book a table for Friday.",cn:"我想會很多人，所以我大概會訂星期五的位子。（預測＋當下決定）"},
    {en:"She's going to look for a new job this year.",cn:"她今年打算找新工作。"},
    {en:"Don't worry — I'll help you with that.",cn:"別擔心，我會幫你。（當場答應）"},
    {en:"If we can't decide, we usually end up staying home anyway.",cn:"如果決定不了，反正我們最後通常都待在家。"}
  ],
  questions:[
    {q:"機票已經訂好了，要說「我下個月飛日本」，最自然的是？",opts:["A. I will fly to Japan next month.","B. I'm flying to Japan next month.","C. I fly to Japan next month.","D. I am going to flying to Japan next month."],ans:1,expl:"已經排定、訂好的行程用「現在進行式表未來」：I'm flying…。這是母語者最常用的講法。"},
    {q:"朋友說「這個袋子好重」，你當場決定要幫忙，要說？",opts:["A. I'm going to help you.","B. I'm helping you.","C. I'll help you.","D. I help you."],ans:2,expl:"說話當下才決定的事用 will（I'll help you）。going to 是「早就打算好」，用在這裡就不對了。"},
    {q:"\"I'm going to look for a new job.\" 表示什麼？",opts:["A. 我正在找新工作","B. 我已經有打算要找新工作","C. 我剛剛才決定要找工作","D. 我一定會找到新工作"],ans:1,expl:"be going to 表示「先前就已經有這個打算、意圖」，不是當下臨時決定（那是 will），也不是正在進行。"},
    {q:"下面哪一句是「預測」而不是「計畫」？",opts:["A. I'm meeting John at six.","B. I'm going to study tonight.","C. I think it'll rain tomorrow.","D. We're flying out on Monday."],ans:2,expl:"I think it'll rain 是根據判斷做的預測，用 will。其他三句都是已經排定或打算好的行動。"},
    {q:"\"I haven't made up my mind yet.\" 意思是？",opts:["A. 我還沒改變心意","B. 我還沒決定","C. 我不想去","D. 我忘記了"],ans:1,expl:"make up one's mind = 下定決心／做出決定。所以 haven't made up my mind = 還沒決定好。"}
  ]
},

{
  id:"au04",
  date:"2026-08-07",
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
  id:"au10",
  date:"2026-08-07",
  level:"B1",
  minutes:3,
  kind:"note",
  title:"One Way or Return?",
  titleCn:"單程還是來回？",
  series:"本站自製聽力 · 取材自課堂筆記",
  noteRef:"20260701 假設語氣與火車購票英文",
  topic:"🚆 火車購票",
  focus:"車站買票的實用問答，搭配 would / if 假設語氣：「如果我取消會怎樣」「我會建議你…」這類禮貌又不失明確的說法。",
  intro:"Kai 走到車站的售票櫃檯，想買一張去慕尼黑的票，但他還不確定什麼時候回來。站務員 Mia 幫他比較單程票和來回票，也說明取消和改票要付多少錢。整段對話都是真的在車站會用到的句子，而且大量出現 would 和 if。",
  tip:"第一次聽只要抓三個數字：幾點的車、加價多少、幾號月台。第二次再注意 Mia 每次給建議時是不是都用了 would 或 if。",
  pre:[
    {w:"ticket counter",ipa:"/ˈtɪkɪt ˈkaʊntər/",cn:"售票櫃檯",def:"The place at a station or airport where you buy tickets."},
    {w:"timetable",ipa:"/ˈtaɪmˌteɪbl/",cn:"時刻表",def:"A list showing when trains, buses, or planes arrive and leave."},
    {w:"one-way ticket",ipa:"/wʌn weɪ ˈtɪkɪt/",cn:"單程票",def:"A ticket for a trip to a place without coming back."},
    {w:"return ticket",ipa:"/rɪˈtɜːrn ˈtɪkɪt/",cn:"來回票",def:"A ticket for a trip to a place and back again."},
    {w:"cancellation fee",ipa:"/ˌkænsəˈleɪʃn fiː/",cn:"取消手續費",def:"Money you must pay if you cancel a booking."},
    {w:"penalty",ipa:"/ˈpenəlti/",cn:"罰款、處罰",def:"Money you must pay as a punishment for breaking a rule."},
    {w:"business class",ipa:"/ˈbɪznəs klæs/",cn:"商務艙",def:"A more expensive and comfortable class of travel on a plane, train, etc."},
    {w:"platform",ipa:"/ˈplætˌfɔːrm/",cn:"月台",def:"The area beside the tracks at a train station where people wait for trains."}
  ],
  script:[
    {sp:"Kai",en:"Excuse me, is this the ticket counter for the express trains?",cn:"不好意思，這裡是快車的售票櫃檯嗎？"},
    {sp:"Mia",en:"It is. You're at the right ticket counter. Where are you going today?",cn:"是的，你找對售票櫃檯了。你今天要去哪裡？"},
    {sp:"Kai",en:"Munich. I looked at the timetable online, but I couldn't tell which train is fastest.",cn:"慕尼黑。我在網路上看過時刻表，但我看不出來哪一班最快。"},
    {sp:"Mia",en:"The timetable changed on Monday, so that's normal. The 9:40 gets you there in three hours.",cn:"時刻表星期一改過了，所以這很正常。九點四十那班三個小時就到。"},
    {sp:"Kai",en:"Great. Would a one-way ticket be cheaper, or should I take a return ticket?",cn:"太好了。單程票會比較便宜，還是我應該買來回票？"},
    {sp:"Mia",en:"If you know when you're coming back, the return ticket saves you about twenty percent.",cn:"如果你知道自己什麼時候回來，來回票可以幫你省大約兩成。"},
    {sp:"Kai",en:"That's the problem. My meeting could run long.",cn:"問題就在這裡。我的會議可能會拖很久。"},
    {sp:"Mia",en:"Then I'd just take the one-way ticket now and buy the second half later.",cn:"那我會建議你現在先買單程票，回程之後再買。"},
    {sp:"Kai",en:"And if I booked the return and my plans changed, is there a cancellation fee?",cn:"那如果我訂了來回票、後來計畫變了，會有取消手續費嗎？"},
    {sp:"Mia",en:"There's a small cancellation fee, but only if you cancel less than one day before.",cn:"會有一筆小額的取消手續費，不過只有在出發前一天以內取消才要付。"},
    {sp:"Kai",en:"What if I simply miss the train? Would I have to pay a penalty?",cn:"那如果我只是錯過班車呢？我要付罰款嗎？"},
    {sp:"Mia",en:"You'd pay a ten-euro penalty and take the next one. It's not a disaster.",cn:"你要付十歐元的罰款，然後搭下一班。沒那麼嚴重。"},
    {sp:"Kai",en:"That's fair. Okay, one-way to Munich on the 9:40, please.",cn:"這算合理。好，那就麻煩九點四十到慕尼黑的單程票。"},
    {sp:"Mia",en:"Sure. And if you'd like more space, business class is only fifteen euros more today.",cn:"沒問題。另外如果你想要寬敞一點，今天升等商務艙只要多十五歐元。"},
    {sp:"Kai",en:"Fifteen? I'd be silly to say no. Business class, then.",cn:"十五？不加就太傻了。那就商務艙吧。"},
    {sp:"Mia",en:"Done. Here's your ticket. Your train leaves from platform 7.",cn:"好了，這是你的車票。你的車在七號月台發車。"},
    {sp:"Kai",en:"Platform 7. How early should I be there?",cn:"七號月台。我要提早多久到？"},
    {sp:"Mia",en:"Ten minutes is plenty. Have a good trip.",cn:"提早十分鐘就很夠了。旅途愉快。"}
  ],
  questions:[
    {q:"Why can't Kai decide between a one-way ticket and a return ticket?",opts:["A. He does not know how much money he has.","B. He is not sure when his meeting will finish.","C. He has never been to Munich before.","D. The return ticket is sold out."],ans:1,expl:"Kai 說 My meeting could run long，他不確定會議何時結束，所以無法決定回程時間。"},
    {q:"What does Mia advise Kai to do?",opts:["A. Buy the one-way ticket now and the return part later.","B. Buy the return ticket and cancel it if needed.","C. Wait until tomorrow to buy anything.","D. Book online instead of at the counter."],ans:0,expl:"Mia 說 I'd just take the one-way ticket now and buy the second half later，先買單程、之後再買回程。"},
    {q:"When does the passenger have to pay a cancellation fee?",opts:["A. Every time a ticket is cancelled.","B. Only for business class tickets.","C. Only if you cancel less than one day before.","D. Only if you cancel on the platform."],ans:2,expl:"Mia 說 only if you cancel less than one day before，出發前一天以內取消才要付。"},
    {q:"What happens if Kai misses his train?",opts:["A. His ticket becomes useless.","B. He pays a ten-euro penalty and takes the next train.","C. He must buy a new return ticket.","D. He gets a free upgrade to business class."],ans:1,expl:"Mia 說 You'd pay a ten-euro penalty and take the next one，付十歐元罰款後搭下一班。"},
    {q:"In this dialogue, \"timetable\" means:",opts:["A. the price list for tickets","B. the number of the platform","C. the list of train arrival and departure times","D. the rules about cancelling a ticket"],ans:2,expl:"timetable 是時刻表，也就是列出班次到站與發車時間的表，對應 The timetable changed on Monday。"}
  ]
},

{
  id:"vlog04",
  date:"2026-08-07",
  level:"B1+",
  minutes:8,
  kind:"note",
  title:"A Day in My Life",
  titleCn:"我的一天",
  series:"本站自製聽力 · 生活作息主題",
  topic:"🌞 一日作息",
  focus:"把日常動作講成完整句子（動詞片語 + 時間副詞）",
  intro:"把一天從早到晚的動作用完整句子講出來，每一句都是「時間副詞 + 動詞片語」。重點不是背單字，而是把整個語塊一起記住，開口時句子才會自然跑出來。",
  tip:"刻意模仿句子的長度，不要只講一個單字。練到不用想就能說出 In the afternoon, I… 這種完整句子就成功了。",
  pre:[
    {w:"curtains",ipa:"/ˈkɜːrtnz/",cn:"窗簾",def:"Cloth that covers a window."},
    {w:"take the dog for a walk",ipa:"/teɪk ðə dɔːɡ fɔːr ə wɔːk/",cn:"帶狗去散步",def:"To walk outside with your dog."},
    {w:"feed",ipa:"/fiːd/",cn:"餵（食）",def:"To give food to a person or animal."},
    {w:"chores",ipa:"/tʃɔːrz/",cn:"家事、雜務",def:"Small jobs you have to do at home."},
    {w:"do the dishes",ipa:"/duː ðə ˈdɪʃɪz/",cn:"洗碗",def:"To wash the plates and cups after a meal."},
    {w:"head out",ipa:"/hed aʊt/",cn:"出發、動身",def:"To leave a place and go somewhere."},
    {w:"wrap up",ipa:"/ræp ʌp/",cn:"收尾、結束",def:"To finish something."},
    {w:"go to bed",ipa:"/ɡoʊ tuː bed/",cn:"上床睡覺",def:"To get into bed to sleep."}
  ],
  script:[
    {en:"I wake up early and open the curtains.",cn:"我早起，把窗簾拉開。"},
    {en:"After breakfast, I take the dog for a walk.",cn:"吃完早餐，我帶狗去散步。"},
    {en:"In the morning, I answer emails at my desk.",cn:"早上我在書桌前回電子郵件。"},
    {en:"At noon, I make myself a simple lunch.",cn:"中午我幫自己做個簡單的午餐。"},
    {en:"In the afternoon, I head out and do some work outside.",cn:"下午我出門，到外面做點事。"},
    {en:"Before dinner, I feed the animals and do a few chores.",cn:"晚餐前我餵動物、做一些家事。"},
    {en:"After we eat, I do the dishes and wrap up for the day.",cn:"吃完飯，我洗碗，然後把一天收尾。"},
    {en:"In the evening, we sit down and watch TV together.",cn:"晚上我們坐下來一起看電視。"},
    {en:"I usually go to bed around eleven.",cn:"我通常十一點左右上床睡覺。"}
  ],
  questions:[
    {q:"時間副詞片語 in the morning / at noon 通常放在句子的哪裡？",opts:["A. 只能放句尾","B. 只能放句首","C. 句首或句尾都可以","D. 一定要放在動詞前面"],ans:2,expl:"In the morning, I answer emails. ＝ I answer emails in the morning. 兩種都對；放句首時後面通常加逗號，語氣上會強調時間。"},
    {q:"哪一個介系詞搭配正確？",opts:["A. in noon / at the morning","B. at noon / in the morning","C. on noon / on the morning","D. at noon / on the morning"],ans:1,expl:"固定搭配：at noon、at night，但 in the morning / in the afternoon / in the evening。這組很常考也很常錯。"},
    {q:"「帶狗去散步」正確說法是？",opts:["A. I walk with my dog outside.","B. I take my dog to walk.","C. I take the dog for a walk.","D. I bring the dog walking."],ans:2,expl:"固定用法是 take + 對象 + for a walk。也可以直接說 I walk the dog（walk 當及物動詞用）。"},
    {q:"\"do the dishes\" 是什麼意思？",opts:["A. 做菜","B. 洗碗","C. 擺餐具","D. 買碗盤"],ans:1,expl:"do the dishes = 洗碗（wash the dishes 也可以）。注意「做菜」是 cook 或 make dinner。"},
    {q:"Bob 用完整句子而不是單字描述動作，對學習者的好處是？",opts:["A. 可以背比較多單字","B. 動詞、介系詞、時間副詞整組一起記住，之後能直接說出整句","C. 影片會比較短","D. 不用學文法"],ans:1,expl:"跟讀整句的價值就在這裡：語塊（chunk）一起進腦袋，開口時不必臨時組裝文法，句子自然會出來。"}
  ]
},

{
  id:"au05",
  date:"2026-08-05",
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
  id:"au11",
  date:"2026-08-05",
  level:"B1",
  minutes:3,
  kind:"note",
  title:"A Pessimist Who Shows Up",
  titleCn:"一個會出現的悲觀者",
  series:"本站自製聽力 · 取材自課堂筆記",
  noteRef:"20260730 作業複習、樂觀悲觀與 Hugh Laurie",
  topic:"🙂 樂觀與悲觀",
  focus:"描述個性的形容詞與名詞（optimist / pessimist / talented / passionate），以及用 constantly、be passionate about 這類說法談一個人的習慣和熱情。",
  intro:"Lily 和 Ben 聊到影集《怪醫豪斯》的主角，順便聊起演員 Hugh Laurie 本人。House 醫生是有名的悲觀者，但演他的人其實既有才華又充滿熱忱。兩個人最後談到一個很實際的問題：你一定要樂觀，才能持續做下去嗎？",
  tip:"先聽出誰說自己是 optimist、誰比較像 pessimist。第二次再注意 constantly 和 passionate about 各出現在什麼句子裡。",
  pre:[
    {w:"optimist",ipa:"/ˈɒptɪmɪst/",cn:"樂觀者、樂天派",def:"A person who always expects good things to happen."},
    {w:"pessimist",ipa:"/ˈpesɪmɪst/",cn:"悲觀者",def:"A person who expects bad things to happen."},
    {w:"main character",ipa:"/meɪn ˈkærəktər/",cn:"主角",def:"The most important person in a story, film or TV series."},
    {w:"constantly",ipa:"/ˈkɑːnstəntli/",cn:"持續地、不斷地",def:"Happening again and again without stopping."},
    {w:"talented",ipa:"/ˈtæləntɪd/",cn:"有才華的",def:"Very good at doing something."},
    {w:"album",ipa:"/ˈælbəm/",cn:"專輯",def:"A collection of songs on a CD or online."},
    {w:"passionate",ipa:"/ˈpæʃənət/",cn:"充滿熱忱的",def:"Having very strong feelings about something you love."},
    {w:"hit",ipa:"/hɪt/",cn:"熱門作品（很成功、很受歡迎）",def:"Something very popular and successful, such as a TV series or song."}
  ],
  script:[
    {sp:"Lily",en:"Ben, be honest with me. Are you an optimist or a pessimist?",cn:"Ben，老實跟我說。你是樂觀的人還是悲觀的人？"},
    {sp:"Ben",en:"A realist. Which, according to my sister, is just a pessimist with better manners.",cn:"我是務實的人。不過照我姐的說法，那只是比較有禮貌的悲觀者。"},
    {sp:"Lily",en:"That sounds exactly like Dr. House.",cn:"這聽起來根本就是 House 醫生。"},
    {sp:"Ben",en:"The main character in that old medical series?",cn:"那部舊醫療影集的主角嗎？"},
    {sp:"Lily",en:"Yes. He's the main character, and he's constantly telling everyone that the worst thing will happen.",cn:"對。他就是主角，而且他不斷地告訴所有人最糟的事一定會發生。"},
    {sp:"Ben",en:"And he's usually right, isn't he? That's the annoying part.",cn:"而且他通常都說對了，對吧？這才是討厭的地方。"},
    {sp:"Lily",en:"Sometimes. But the actor is nothing like him. Hugh Laurie is incredibly talented.",cn:"有時候啦。不過演員本人跟他完全不一樣。Hugh Laurie 非常有才華。"},
    {sp:"Ben",en:"Talented how? I only know him from the show.",cn:"哪方面有才華？我只從那部戲認識他。"},
    {sp:"Lily",en:"He plays the piano, he sings, and he even recorded a blues album.",cn:"他會彈鋼琴、會唱歌，甚至還錄過一張藍調專輯。"},
    {sp:"Ben",en:"An album? Really? A grumpy doctor who makes records.",cn:"專輯？真的假的？一個脾氣很差的醫生還出唱片。"},
    {sp:"Lily",en:"He's passionate about music. He said acting paid the bills, but music kept him happy.",cn:"他對音樂充滿熱忱。他說演戲是為了生活，但音樂讓他保持快樂。"},
    {sp:"Ben",en:"Okay, that's impressive. Was the show a hit right from the start?",cn:"好吧，這確實厲害。那部戲一開始就很紅嗎？"},
    {sp:"Lily",en:"It became a huge hit, but he never expected it. He thought it would be cancelled in six weeks.",cn:"它後來變成超級熱門影集，但他從沒料到。他以為六個星期就會被停播。"},
    {sp:"Ben",en:"See? Pessimist.",cn:"你看吧？悲觀者。"},
    {sp:"Lily",en:"Maybe. But he kept working anyway. That's the part I actually like.",cn:"也許吧。但他還是繼續做下去。這才是我真正欣賞的地方。"},
    {sp:"Ben",en:"So an optimist says this will work, and he said this won't work and did it anyway.",cn:"所以樂觀的人會說「這會成功」，而他是說「這不會成功」然後照做不誤。"},
    {sp:"Lily",en:"Exactly. You don't have to feel hopeful every morning to keep going.",cn:"沒錯。你不必每天早上都充滿希望，才能繼續前進。"},
    {sp:"Ben",en:"Fine. I'll be a pessimist who shows up. That sounds achievable.",cn:"好吧。那我就當一個會出現的悲觀者。這聽起來做得到。"}
  ],
  questions:[
    {q:"How does Ben describe himself at the beginning?",opts:["A. As an optimist.","B. As a realist.","C. As a musician.","D. As a doctor."],ans:1,expl:"Ben 一開始說 A realist，並開玩笑說那只是比較有禮貌的悲觀者。"},
    {q:"What does Lily say about the main character of the medical series?",opts:["A. He constantly expects the worst to happen.","B. He is always kind to his patients.","C. He gave up medicine to play music.","D. He is the most hopeful person on the show."],ans:0,expl:"Lily 說 he's constantly telling everyone that the worst thing will happen，主角不斷預期最糟的結果。"},
    {q:"Why does Lily think Hugh Laurie is talented?",opts:["A. Because he wrote the TV series himself.","B. Because he speaks several languages.","C. Because he plays piano, sings, and recorded an album.","D. Because he trained as a real doctor."],ans:2,expl:"Lily 說他會彈鋼琴、唱歌，甚至錄過一張藍調專輯，所以說他非常有才華。"},
    {q:"What did the actor think about the show at the start?",opts:["A. He thought it would win many prizes.","B. He thought it would be cancelled in six weeks.","C. He thought it would run for ten years.","D. He refused to join the show."],ans:1,expl:"Lily 說 He thought it would be cancelled in six weeks，他沒想到這部戲會變成熱門作品。"},
    {q:"In this dialogue, \"passionate about\" means:",opts:["A. worried about something","B. having very strong feelings about something you love","C. very good at explaining something","D. paid a lot of money for something"],ans:1,expl:"be passionate about 是「對……充滿熱忱」，對應 He's passionate about music。"}
  ]
},

{
  id:"vlog02",
  date:"2026-08-05",
  level:"B1",
  minutes:5,
  kind:"note",
  title:"How to Talk About Your Daily Routine",
  titleCn:"怎麼談你的一天",
  series:"本站自製聽力 · 生活作息主題",
  topic:"🕘 日常作息",
  focus:"用現在簡單式描述習慣與例行公事",
  intro:"兩個人互相問「你每天都做什麼」，示範怎麼用現在簡單式講習慣，以及回答完之後怎麼把問題丟回去——這是英語會話最常用的接話方式。",
  tip:"特別注意頻率副詞的位置：usually、hardly ever 放在一般動詞前面，但 be 動詞要放後面。跟讀完，換成自己的作息再講一次。",
  pre:[
    {w:"routine",ipa:"/ruːˈtiːn/",cn:"例行公事、固定作息",def:"The things you normally do every day."},
    {w:"usually",ipa:"/ˈjuːʒuəli/",cn:"通常",def:"Most of the time."},
    {w:"hardly ever",ipa:"/ˈhɑːrdli ˈevər/",cn:"幾乎不",def:"Almost never."},
    {w:"sleep in",ipa:"/sliːp ɪn/",cn:"睡晚一點、賴床",def:"To sleep later than usual, often on weekends."},
    {w:"take it easy",ipa:"/teɪk ɪt ˈiːzi/",cn:"放輕鬆、不趕",def:"To relax and not work hard."},
    {w:"work from home",ipa:"/wɜːrk frʌm hoʊm/",cn:"在家工作",def:"To do your job at home instead of an office."},
    {w:"How about you?",ipa:"/haʊ əˈbaʊt juː/",cn:"那你呢？",def:"A way to ask the same question back."}
  ],
  script:[
    {en:"So what is your daily routine like?",cn:"那你每天的作息大概是怎樣？"},
    {en:"What do you usually do in the morning?",cn:"你早上通常都做什麼？"},
    {en:"I usually get up around seven.",cn:"我通常七點左右起床。"},
    {en:"I don't have much time, so I eat breakfast quickly.",cn:"我時間不多，所以早餐吃很快。"},
    {en:"How about you? What's your morning like?",cn:"那你呢？你早上都怎麼過？"},
    {en:"I work from home, so I start at nine.",cn:"我在家工作，所以九點才開始。"},
    {en:"On weekends I sleep in and take it easy.",cn:"週末我會賴床、放輕鬆。"},
    {en:"I hardly ever go out during the week.",cn:"平常上班日我幾乎不出門。"},
    {en:"That sounds nice. Mine is a lot busier.",cn:"聽起來不錯。我的行程忙多了。"}
  ],
  questions:[
    {q:"問對方「你的日常作息」最自然的說法是？",opts:["A. What do you do every day always?","B. What's your daily routine?","C. How is your everyday?","D. What you do in a day?"],ans:1,expl:"What's your daily routine? 是最自然的問法。也可以說 What do you usually do in the morning?"},
    {q:"頻率副詞 usually 應該放在哪裡？",opts:["A. I get up usually at seven.","B. Usually I get up at seven. / I usually get up at seven.","C. I get at seven usually up.","D. I am usually get up at seven."],ans:1,expl:"頻率副詞放在一般動詞「前面」（I usually get up），或整句開頭（Usually, I…）。但 be 動詞要放「後面」：I am usually tired."},
    {q:"\"I hardly ever go out.\" 的意思是？",opts:["A. 我很努力出門","B. 我幾乎不出門","C. 我常常出門","D. 我很難出門"],ans:1,expl:"hardly ever = 幾乎從不。注意 hardly 不是 hard（努力）的副詞，它本身就是否定意味的字。"},
    {q:"\"sleep in\" 是什麼意思？",opts:["A. 在室內睡覺","B. 睡過頭遲到","C. 比平常晚起（通常是週末刻意的）","D. 睡在別人家"],ans:2,expl:"sleep in = 刻意睡晚一點，通常是假日。不小心睡過頭是 oversleep。"},
    {q:"對方講完自己的作息後，要把問題丟回去，最自然的一句是？",opts:["A. And you too?","B. How about you?","C. Same you?","D. What about of you?"],ans:1,expl:"How about you? 或 What about you? 都可以，是英語會話裡最常用的接話方式。"}
  ]
},

{
  id:"au03",
  date:"2026-07-31",
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
  id:"au08",
  date:"2026-07-31",
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
  id:"au13",
  date:"2026-07-31",
  level:"B1",
  minutes:3,
  kind:"note",
  title:"Who Will Lead the Reading Program?",
  titleCn:"誰來帶這個閱讀計畫？",
  series:"本站自製聽力 · 取材自課堂筆記",
  noteRef:"20251016 社區教育計畫 Community Project",
  topic:"🤝 社區計畫",
  focus:"談社區計畫時常用的抽象名詞（opportunity、leadership、responsibility、confidence、achievement），以及怎麼用英文接下一個角色、同時誠實說出自己的緊張。",
  intro:"市政府核准了一年的補助，社區的課後閱讀計畫要正式開跑。Leo 想請 Grace 出來帶團隊，Grace 卻擔心自己沒帶過人，也怕站在四十位家長面前講話。這段對話示範了怎麼談責任、談自信，也示範了怎麼在答應之前先提出自己的條件。",
  tip:"第一次聽先抓「Grace 最後有沒有答應、她提出什麼條件」。第二次再注意那些 -ship、-ility、-ment 結尾的名詞，聽聽看它們各出現在什麼情境。",
  pre:[
    {w:"community",ipa:"/kəˈmjuː.nə.ti/",cn:"社區",def:"A group of people who live in the same area or share something in common."},
    {w:"opportunity",ipa:"/ˌɑː.pɚˈtuː.nə.t̬i/",cn:"機會、機遇",def:"a chance to do something."},
    {w:"leadership",ipa:"/ˈliː.də.ʃɪp/",cn:"領導力",def:"The ability to guide or direct a group of people."},
    {w:"responsibility",ipa:"/rɪˌspɒn.sɪˈbɪl.ə.ti/",cn:"責任感",def:"A duty or job that you are expected to do."},
    {w:"nervous",ipa:"/ˈnɜː.vəs/",cn:"緊張的",def:"Feeling worried or afraid about something that is going to happen."},
    {w:"audience",ipa:"/ˈɔː.di.əns/",cn:"觀眾",def:"A group of people who watch or listen to a show or speech."},
    {w:"confidence",ipa:"/ˈkɒn.fɪ.dəns/",cn:"自信",def:"A feeling of trust in your own abilities."},
    {w:"achievement",ipa:"/əˈtʃiːv.mənt/",cn:"成就",def:"Something good that you succeed in doing through effort."}
  ],
  script:[
    {sp:"Leo",en:"Grace, good news. The city office approved our funding. The community reading program runs for a whole year.",cn:"Grace，好消息。市政府核准我們的補助了。社區閱讀計畫可以辦整整一年。"},
    {sp:"Grace",en:"A whole year? That's a real opportunity for the kids around here.",cn:"整整一年？這對這附近的孩子來說是個真正的機會。"},
    {sp:"Leo",en:"I know. Most of them have never had a free class after school before.",cn:"我知道。他們大部分從來沒上過免費的課後班。"},
    {sp:"Grace",en:"So who takes the leadership role? Somebody has to organize the volunteers.",cn:"那誰來擔任領導的角色？總得有人來組織志工。"},
    {sp:"Leo",en:"I was hoping you would. You've been running the Saturday group since March.",cn:"我本來就希望是你。你從三月就一直在帶週六的班了。"},
    {sp:"Grace",en:"Honestly, that's a lot of responsibility. I've never managed a team before.",cn:"老實說，那是很大的責任。我沒有帶過團隊。"},
    {sp:"Leo",en:"Nobody has, the first time. You learn it by doing it.",cn:"第一次的時候大家都沒帶過。這種事是做中學的。"},
    {sp:"Grace",en:"I'm also a bit nervous about the parents' meeting on Friday.",cn:"我對星期五的家長會也有點緊張。"},
    {sp:"Leo",en:"Why? You know this program better than anyone in the room.",cn:"為什麼？在場沒有人比你更了解這個計畫。"},
    {sp:"Grace",en:"Standing in front of an audience of forty adults isn't the same as teaching eight children.",cn:"站在四十位大人面前，跟教八個小孩完全不是同一回事。"},
    {sp:"Leo",en:"That's fair. But your confidence has grown a lot this year. I've watched it happen.",cn:"這說得有理。但你今年的自信成長了很多。我都看在眼裡。"},
    {sp:"Grace",en:"Maybe. Last year I wouldn't even read the announcements out loud.",cn:"也許吧。去年我連公告都不敢念出來。"},
    {sp:"Leo",en:"Exactly. For someone that shy, that's already an achievement.",cn:"就是說啊。以一個那麼害羞的人來說，那已經算是一項成就了。"},
    {sp:"Grace",en:"All right, I'll take the role. But I want two co-leaders working with me.",cn:"好吧，我接下這個角色。但我要有兩位共同負責人跟我一起。"},
    {sp:"Leo",en:"Deal. Shall we ask Ray and Ms Lin?",cn:"成交。我們要不要問問 Ray 和林老師？"},
    {sp:"Grace",en:"Yes. And let's keep the talk short - twenty minutes, then open questions.",cn:"好。而且我們把報告講短一點 - 二十分鐘，然後開放提問。"},
    {sp:"Leo",en:"Good call. A short talk to a friendly audience. Nothing to be nervous about.",cn:"好主意。對著友善的聽眾講一小段。沒什麼好緊張的。"},
    {sp:"Grace",en:"We'll see on Friday. But I do think this community will get behind it.",cn:"星期五就知道了。不過我真的覺得這個社區會支持這件事。"}
  ],
  questions:[
    {q:"How long will the community reading program run?",opts:["A. Three months","B. Six months","C. One whole year","D. Two years"],ans:2,expl:"Leo 一開始就說 The community reading program runs for a whole year，市政府核准了一年的補助。"},
    {q:"Why does Leo want Grace to take the leadership role?",opts:["A. She has been running the Saturday group since March.","B. She works at the city office.","C. She is the only volunteer left.","D. She has managed several teams before."],ans:0,expl:"Leo 說 You've been running the Saturday group since March，理由是她已經帶了半年多的週六班；她自己也說從沒帶過團隊。"},
    {q:"What makes Grace nervous?",opts:["A. Teaching eight children on Saturday","B. Speaking to an audience of forty parents","C. Losing the funding from the city","D. Working together with Ray and Ms Lin"],ans:1,expl:"Grace 說對星期五的家長會緊張，因為 standing in front of an audience of forty adults 跟教八個小孩不一樣。"},
    {q:"What condition does Grace give before accepting the role?",opts:["A. She wants to be paid for the work.","B. She wants the meeting to be cancelled.","C. She wants two co-leaders to work with her.","D. She wants to start only next year."],ans:2,expl:"她說 I'll take the role. But I want two co-leaders working with me. 答應了，但要求有兩位共同負責人。"},
    {q:"In this dialogue, \"achievement\" means:",opts:["A. a duty that somebody expects you to do","B. a group of people listening to a speech","C. a chance to do something new","D. something good you succeed in doing through effort"],ans:3,expl:"achievement 是「成就」，指靠努力做成的好事；Leo 說對害羞的人來說，敢念公告已經是一項成就了。"}
  ]
},

{
  id:"au06",
  date:"2026-07-29",
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
  id:"au09",
  date:"2026-07-29",
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
    {en:"I also have a stomachache, so I can't eat much.",cn:"我還肚子痛，所以吃不太下。"},
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
    {en:"I really like this neighborhood. Everything is close by.",cn:"我很喜歡這個社區，什麼都很近。"},
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
    {en:"Let me check the recipe again.",cn:"讓我再看一次食譜。"},
    {en:"Good news — we already have every ingredient we need.",cn:"好消息，我們需要的食材都已經有了。"}
  ],
  questions:[
    {q:"Why is Anna going to the store?",opts:["A. To buy a gift","B. To get ingredients for dinner","C. To buy new clothes","D. To return something"],ans:1,expl:"Anna 和 Marsha 要辦晚餐派對，所以去買食材。"},
    {q:"What mistake does Anna make?",opts:["A. She forgets her wallet","B. She goes to the wrong store","C. She brings the wrong list","D. She buys too much food"],ans:2,expl:"Anna 拿錯了購物清單，買了不該買的東西。"},
    {q:"\"How much are the tomatoes?\" is asking about ___.",opts:["A. the color","B. the weight","C. the price","D. the number"],ans:2,expl:"How much 問價錢——多少錢。"},
    {q:"\"A pound of\" is used for ___.",opts:["A. 數量（幾個）","B. 重量（多重）","C. 長度（多長）","D. 時間（多久）"],ans:1,expl:"a pound of 是重量單位（約 0.45 公斤），用在肉、蔬菜、水果等秤重賣的東西。"},
    {q:"Which is correct at a store?",opts:["A. Give me tomato.","B. I need a pound of tomatoes, please.","C. Tomatoes me give.","D. I wanting tomatoes."],ans:1,expl:"正確又禮貌的說法是 I need + 量詞 + 東西 + please。"}
  ]
}
]

};
