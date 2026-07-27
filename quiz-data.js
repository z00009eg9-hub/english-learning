/* ==========================================================================
   quiz-data.js — 英文筆記考題資料庫
   由 english-learning skill 自動維護（流程 F）。
   新日期的題組一律插入在 ===SYNC:QUIZ_START=== 標記正下方，最新的在最上面。
   題目物件格式見 SKILL.md「流程 F」。請勿手動更動下方兩個 SYNC 標記行。
   ========================================================================== */
window.QUIZZES = {
// ===SYNC:QUIZ_START=== sync_date:2026-07-21 count:1
  "20260721": {
    title: "作業複習與機場旅遊英文",
    subtitle: "Homework Review · Airport / Domestic Flight English",
    questions: [
      { type:"mc", tag:"單字", q:"「fragile」的中文意思是？",
        options:["易碎的","大約的","嘔吐的","國內的"], answer:0,
        explain:"fragile /ˈfrædʒaɪl/ 易碎的，貨運常標示 FRAGILE。" },
      { type:"mc", tag:"單字", q:"飛機上遇到的「亂流」英文是？",
        options:["baggage","turbulence","allowance","intonation"], answer:1,
        explain:"turbulence /ˈtɜːrbjələns/ 亂流。" },
      { type:"mc", tag:"單字", q:"「approximately」的意思是？",
        options:["目前","大約","低估","購買"], answer:1,
        explain:"approximately /əˈprɑːksɪmətli/ 大約（⭐ B2 字）。" },
      { type:"mc", tag:"單字", q:"「廉價航空」最自然的說法是？",
        options:["cheap flight","budget airline","domestic flight","carry-on"], answer:1,
        explain:"budget airline＝廉價航空（＝low-cost carrier）；別說 cheap flight。" },
      { type:"mc", tag:"單字", q:"「purchase」在正式情境中的意思是？",
        options:["退貨","購買","托運","低估"], answer:1,
        explain:"purchase /ˈpɜːrtʃəs/ 購買（比 buy 正式）。" },
      { type:"fill", tag:"介系詞", q:"用材料包東西：I wrapped the sweet potato ___ aluminum foil.",
        cn:"我用鋁箔紙把地瓜包起來。", answer:["in"],
        explain:"wrap something IN + 材料（不是 with）。" },
      { type:"fill", tag:"文法", q:"表達「想吐」：I felt like ___ because of the turbulence.（vomit 變化）",
        cn:"因為亂流，我覺得想吐。", answer:["vomiting"],
        explain:"feel like + V-ing（動名詞）＝想做某事。" },
      { type:"fill", tag:"介系詞", q:"We have approximately 300 employees ___ our factory ___ Vietnam.（兩個介系詞，用 / 分隔）",
        cn:"我們在越南的工廠大約有 300 名員工。", answer:["at / in","at/in"],
        explain:"at our factory in Vietnam（不是 in Vietnam factory）。" },
      { type:"mc", tag:"改錯", q:"哪一句最正確自然？",
        options:[
          "We have 300 employees in Vietnam factory, and is still increasing.",
          "We have approximately 300 employees at our factory in Vietnam, and the number is still increasing."
        ], answer:1,
        explain:"要用 at our factory in Vietnam，且後半句需補主詞 the number。" },
      { type:"mc", tag:"改錯", q:"「廉價航空的隨身行李限重 7 公斤」哪句對？",
        options:[
          "The carry-on baggage weight limit is 7 kg on budget airlines.",
          "The carry-on bag weight limt is 7 kg for cheap flight."
        ], answer:0,
        explain:"budget airlines（非 cheap flight）；limit 正確拼字。" },
      { type:"mc", tag:"機場", q:"要「加購行李額度」，最恰當的問句是？",
        options:[
          "Can I purchase extra baggage?",
          "Can I buy more airplane?",
          "Where is my fragile?"
        ], answer:0,
        explain:"Can I purchase extra baggage? ＝我可以加購行李嗎？" },
      { type:"mc", tag:"句型", q:"「我後悔搬到越南」正確說法是？",
        options:["I regret to move to Vietnam.","I regret moving to Vietnam.","I regret moved to Vietnam."], answer:1,
        explain:"regret + V-ing＝後悔做過某事。" },
      { type:"fill", tag:"連接詞", q:"正式表達「在某種程度上」：I regret it ___ ___ extent.（兩個字）",
        cn:"我在某種程度上後悔。", answer:["to some","to some extent","some"],
        explain:"to some extent＝在某種程度上。" },
      { type:"mc", tag:"發音", q:"疑問句的語調（intonation）在句尾通常會？",
        options:["下降","上揚","不變"], answer:1,
        explain:"疑問句句尾上揚；直述句下降。" }
    ]
  },
// ===SYNC:QUIZ_END===
};
