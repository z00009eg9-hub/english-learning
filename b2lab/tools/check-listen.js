#!/usr/bin/env node
/* ============================================================
   B2 Read — 每日聽力驗證（四課對話＋ index.html 的 LS_THUMB 縮圖）
   用法：node tools/check-listen.js [YYYY-MM-DD]     （預設今天 UTC）
   由 DAILY_TASK.md 第 5 步呼叫；沒過會 exit 1，沒過就不要 commit。
   （全站縮圖重複另見 check-listen-thumb.js）
   ============================================================ */
'use strict';
const fs = require('fs'), path = require('path');
const pub = path.join(__dirname, '..', 'public');
const TODAY = process.argv[2] || new Date().toISOString().slice(0, 10);
global.window = {};
['data-book.js', 'data-listen.js'].forEach(f => require(path.join(pub, f)));

function main() {
  const L = window.LISTEN.notes || [];
  const LV = ['A2', 'B1', 'B1+', 'B2'];
  const todays = L.filter(x => x.date === TODAY);
  if (todays.length !== 4) throw '今天聽力應該有四課（A2/B1/B1+/B2），實際 ' + todays.length + ' 課';
  LV.forEach(l => { if (todays.filter(x => x.level === l).length !== 1) throw '聽力缺少或重複 ' + l + ' 這一級'; });
  const MIN = { 'A2': 12, 'B1': 14, 'B1+': 16, 'B2': 16 };
  todays.forEach(x => {
    if (!/^dl\d{8}(a2|b1|b1p|b2)$/.test(x.id)) throw 'id 格式錯: ' + x.id;
    if (x.kind !== 'note') throw x.id + " kind 要是 'note'（本站自製 TTS 對話），實際 " + x.kind;
    ['date', 'level', 'minutes', 'title', 'titleCn', 'series', 'topic', 'focus', 'intro', 'tip'].forEach(k => {
      if (!x[k]) throw x.id + ' 缺欄位 ' + k;
    });
    if (x.yt || x.sourceUrl || x.keyLines || x.cc || x.needsSubs) throw x.id + ' 不該有外部影片的欄位（yt/sourceUrl/keyLines/cc/needsSubs）';
    const sc = x.script || [];
    if (sc.length < MIN[x.level]) throw x.id + ' 對話不足 ' + MIN[x.level] + ' 句，實際 ' + sc.length;
    sc.forEach((s, i) => { if (!s.en || !s.cn) throw x.id + ' 第 ' + (i + 1) + ' 句缺英文或中譯'; });
    if (new Set(sc.map(s => s.sp).filter(Boolean)).size < 2) throw x.id + ' 對話至少要有兩個說話者';
    const pre = x.pre || [];
    if (pre.length < 5 || pre.length > 7) throw x.id + ' 聽前單字要 5–7 個，實際 ' + pre.length;
    pre.forEach(t => {
      if (!t.w || !t.ipa || !t.cn || !t.def) throw x.id + ' 聽前單字欄位不全: ' + t.w;
      if (!/^\/.*\/$/.test(t.ipa)) throw x.id + ' 音標要用 /…/ 包起來: ' + t.w + ' ' + t.ipa;
    });
    if ((x.questions || []).length < 4) throw x.id + ' 理解題不足 4 題';
    x.questions.forEach(q => {
      if (!q.qCn) throw x.id + ' 題目缺 qCn 中譯: ' + q.q;
      if (q.ans < 0 || q.ans >= q.opts.length) throw x.id + ' ans 索引錯誤: ' + q.q;
    });
  });
  const ids = todays.map(x => x.id);
  if (new Set(ids).size !== ids.length) throw '今天有重複的聽力 id';

  /* LS_THUMB：四課都要登記線稿圖示，漏了卡片會退回 emoji（見 DAILY_TASK 3.6.1） */
  const I = window.BOOK_ICONS || {};
  const src = fs.readFileSync(path.join(pub, 'index.html'), 'utf8');
  const m = /const LS_THUMB=\{([\s\S]*?)\n\};/.exec(src);
  if (!m) throw '在 index.html 找不到 LS_THUMB';
  const map = {};
  [...m[1].matchAll(/([A-Za-z0-9_]+)\s*:\s*'([A-Za-z0-9]+)'/g)].forEach(x => map[x[1]] = x[2]);
  const picks = [];
  todays.forEach(x => {
    const k = map[x.id];
    if (!k) throw x.id + ' 沒有在 index.html 的 LS_THUMB 登記圖示（卡片會退回 emoji，見 3.6.1）';
    if (!I[k]) throw x.id + ' 的圖示 ' + k + ' 不在 BOOK_ICONS 裡';
    picks.push(k);
  });
  if (new Set(picks).size !== picks.length) throw '今天四課的圖示有重複: ' + picks.join(',');
  /* 冷卻期：最近 COOL 批（比今天早的）用過的圖示不可以再用 */
  const COOL = 6, today = TODAY.replace(/-/g, '');
  const rows = [...m[1].matchAll(/(dl(\d{8})[a-z0-9]*)\s*:\s*'([a-zA-Z0-9]+)'/g)];
  const days = [...new Set(rows.map(r => r[2]))].filter(d => d < today).sort().reverse().slice(0, COOL);
  const cooling = new Map();
  rows.filter(r => days.includes(r[2])).forEach(r => { if (!cooling.has(r[3])) cooling.set(r[3], r[2]); });
  todays.forEach(x => {
    const k = map[x.id];
    if (cooling.has(k)) throw x.id + ' 用的圖示 ' + k + ' 還在冷卻期（' + cooling.get(k) + ' 那批用過，最近 ' + COOL + ' 批不可重複），換一個';
  });
  console.log('listen ok', todays.map(x => x.id + '(' + x.level + ', ' + x.script.length + '句, ' + x.questions.length + '題)').join(' | '));
  console.log('thumb ok', todays.map(x => x.id + '→' + map[x.id]).join(' | '), '| 冷卻中 ' + cooling.size + ' 個，可選 ' + (Object.keys(I).length - cooling.size) + ' 個');
}
try { main(); } catch (e) { console.error('✗ ' + (e && e.message || e)); process.exit(1); }
