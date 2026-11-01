#!/usr/bin/env node
/* ============================================================
   B2 Read — 每日內容驗證（文章／文法／視覺化教材／橫幅配圖）
   用法：node tools/check-daily.js [YYYY-MM-DD]     （預設今天 UTC）
   由 DAILY_TASK.md 第 5 步呼叫；沒過會 exit 1，沒過就不要 commit。
   聽力與縮圖另見 check-listen.js；音標見 check-ipa.js；橫幅圖示重複見 check-art.js。
   ============================================================ */
'use strict';
const path = require('path');
const pub = path.join(__dirname, '..', 'public');
const TODAY = process.argv[2] || new Date().toISOString().slice(0, 10);
global.window = {};
['data-daily.js', 'data-gvplus.js', 'data-art.js'].forEach(f => require(path.join(pub, f)));

function main() {
  const d = window.DAILY;
  const LV = ['A2', 'B1', 'B1+', 'B2'];
  const WORDS = { 'A2': [60, 120], 'B1': [110, 175], 'B1+': [140, 240], 'B2': [230, 320] };
  const UP = { 'A2': ['A2', 'B1'], 'B1': ['B1', 'B1+'], 'B1+': ['B1+', 'B2'] };
  const todays = d.articles.filter(a => a.date === TODAY);
  if (todays.length !== 4) throw '今天應該有四篇文章（A2/B1/B1+/B2），實際 ' + todays.length + ' 篇';
  LV.forEach(l => { if (todays.filter(a => a.level === l).length !== 1) throw '文章缺少或重複 ' + l + ' 這一級'; });
  todays.forEach(a => {
    const w = a.paras.reduce((n, p) => n + p.en.split(/\s+/).filter(Boolean).length, 0);
    const [lo, hi] = WORDS[a.level];
    if (w < lo || w > hi) throw a.level + ' 篇字數應在 ' + lo + '–' + hi + '，實際 ' + w;
    if (a.words !== w) throw a.id + ' words 欄位與實際字數不符（寫 ' + a.words + '，實際 ' + w + '）';
    if (UP[a.level] && (a.upFrom !== UP[a.level][0] || a.upTo !== UP[a.level][1])) throw a.level + ' 篇要有 upFrom:' + UP[a.level][0] + ' / upTo:' + UP[a.level][1];
    if (a.paras.length < 3) throw a.id + ' 段落不足';
    if (!a.paras.every(p => p.en && p.cn)) throw a.id + ' 有段落缺中譯';
    if (a.questions.length < 3) throw a.id + ' 題目不足';
    a.questions.forEach(q => { if (!q.qCn) throw a.id + ' 題目缺 qCn 中譯: ' + q.q; });
    a.questions.forEach(q => { if (q.ans < 0 || q.ans >= q.opts.length) throw a.id + ' ans 索引錯誤: ' + q.q; });
    if (a.target.length < 5) throw a.id + ' 重點字不足';
    a.target.forEach(t => { if (t.ex && !t.exCn) throw a.id + ' 重點字缺 exCn 中譯: ' + t.w; });
    /* 重點字例句不可照抄或改寫本文（2026-09-14 使用者指定）：與本文不能有連續 4 個字相同（重點字本身不算） */
    const nm = s => s.toLowerCase().replace(/[^a-z' ]/g, ' ').replace(/ +/g, ' ').trim();
    const bw = nm(a.paras.map(p => p.en).join(' ')).split(' ');
    const g4 = new Set();
    for (let i = 0; i + 4 <= bw.length; i++) g4.add(bw.slice(i, i + 4).join(' '));
    a.target.forEach(t => {
      if (!t.ex) return;
      const skip = new Set(nm(t.w).split(' ').map(x => x.slice(0, 4)));
      const ew = nm(t.ex).split(' ').filter(x => !skip.has(x.slice(0, 4)));
      for (let k = 0; k + 4 <= ew.length; k++) {
        if (g4.has(ew.slice(k, k + 4).join(' '))) throw a.id + ' 重點字例句跟本文重複，要換情境原創: ' + t.w + ' → ' + t.ex;
      }
    });
    if (a.upgrade.length < 2) throw a.id + ' 升級句不足';
  });

  const grams = d.grammar.filter(x => x.date === TODAY);
  if (grams.length !== 4) throw '今天應該有四個文法單元（A2/B1/B1+/B2），實際 ' + grams.length;
  LV.forEach(l => { if (grams.filter(g => g.level === l).length !== 1) throw '文法缺少或重複 ' + l + ' 這一級'; });
  grams.forEach(g => {
    if (g.quiz.length < 4) throw g.id + ' 文法題目不足';
    g.quiz.forEach(q => { if (!q.qCn) throw g.id + ' 文法題缺 qCn 中譯: ' + q.q; });
    g.quiz.forEach(q => { if (q.ans < 0 || q.ans >= q.opts.length) throw g.id + ' 文法 ans 索引錯誤: ' + q.q; });
    if (!g.sections.length || !g.traps.length) throw g.id + ' 文法單元不完整';
  });

  /* 視覺化教材（data-gvplus.js）：全站文法單元都走這個版面，新單元不能漏 */
  const GP = window.GVPLUS || {};
  const VT = ['timeline', 'matrix', 'cols', 'chain', 'merge', 'shift', 'scale', 'swap', 'branch'];
  const ICONS = 'house plane key calendar clock person bubble check cross arrow book tool pin star cycle balance link fork eye money flag'.split(' ');
  grams.forEach(g => {
    const p = GP[g.id];
    if (!p) throw g.id + ' 沒有視覺化教材（data-gvplus.js）';
    ['vis', 'oneLine', 'map', 'visual', 'scenarios', 'steps', 'comparison', 'quizMore'].forEach(k => {
      if (p[k] == null) throw g.id + ' 視覺化教材缺 ' + k;
    });
    if (!p.visual.type || VT.indexOf(p.visual.type) < 0) throw g.id + ' visual.type 不是支援的型別: ' + p.visual.type;
    if (!p.visual.cap) throw g.id + ' visual 缺 cap 圖說';
    if (p.scenarios.length < 4) throw g.id + ' 情境卡不足 4 張';
    p.scenarios.forEach(x => {
      if (ICONS.indexOf(x.icon) < 0) throw g.id + ' 情境卡 icon 無效: ' + x.icon;
      if (!x.ask || x.ask.indexOf('？') < 0) throw g.id + ' 情境卡 ask 要寫成問句: ' + x.title;
      if (!x.why) throw g.id + ' 情境卡缺 why 解說: ' + x.title;
    });
    if (p.steps.length < 5) throw g.id + ' 逐步理解不足 5 步';
    if (!p.comparison.left || !p.comparison.right || !p.comparison.note) throw g.id + ' comparison 不完整';
    if (p.quizMore.length < 2) throw g.id + ' quizMore 不足 2 題（quiz 4 + quizMore 2 = 6 題）';
    p.quizMore.forEach(q => { if (q.ans < 0 || q.ans >= q.opts.length) throw g.id + ' quizMore ans 索引錯誤: ' + q.q; });
    /* 資料裡不准出現 HTML 標籤與內嵌 SVG */
    if (/<[a-zA-Z\/]/.test(JSON.stringify(p))) throw g.id + ' 視覺化教材裡有 HTML 標籤或 SVG（一律寫純文字）';
    /* 重複文法、不重複句子：同一句完整英文例句（5 字以上）整頁最多 2 次；練習題選項只算一次 */
    const cnt = {};
    const key = s => s.toLowerCase().replace(/[^a-z ]/g, '').replace(/ +/g, ' ').trim();
    const grab = (o, fn) => {
      if (typeof o === 'string') { (o.match(/[A-Z][^.?!。？！]*[.?!]/g) || []).forEach(fn); }
      else if (o && typeof o === 'object') { Object.values(o).forEach(x => grab(x, fn)); }
    };
    grab([Object.assign({}, g, { quiz: null }), Object.assign({}, p, { quizMore: null })], s => {
      const k = key(s); if (k.split(' ').length >= 5) cnt[k] = (cnt[k] || 0) + 1;
    });
    const qs = new Set();
    grab([g.quiz || [], p.quizMore || []], s => qs.add(key(s)));
    qs.forEach(k => { if (k.split(' ').length >= 5) cnt[k] = (cnt[k] || 0) + 1; });
    Object.keys(cnt).forEach(k => { if (cnt[k] > 2) throw g.id + ' 同一句例句出現 ' + cnt[k] + ' 次（重複文法、不重複句子）: ' + k; });
  });

  /* 四篇文章都要有橫幅配圖 */
  const ART = window.ART || {};
  todays.forEach(a => {
    const v = ART[a.id];
    if (!v || !v.svg) throw a.id + ' 沒有配圖（data-art.js）';
    if (!/^<svg/.test(v.svg.trim())) throw a.id + ' 配圖不是 SVG';
    if (!v.cap) throw a.id + ' 配圖缺圖說 cap';
    if (/undefined|NaN/.test(v.svg)) throw a.id + ' 配圖有未展開的值';
    const o = (v.svg.match(/<(svg|g|text)\b/g) || []).length, c = (v.svg.match(/<\/(svg|g|text)>/g) || []).length;
    if (o !== c) throw a.id + ' 配圖標籤沒配對';
  });

  const byLv = l => todays.find(a => a.level === l);
  console.log('OK 文章:', LV.map(l => l + ' ' + byLv(l).id + ' (' + byLv(l).words + '字)').join(' | '));
  console.log('OK 文法:', LV.map(l => l + ' ' + grams.find(g => g.level === l).titleCn).join(' | '));
  console.log('OK 配圖:', todays.map(a => a.id).join(' | '));
}
try { main(); } catch (e) { console.error('✗ ' + (e && e.message || e)); process.exit(1); }
