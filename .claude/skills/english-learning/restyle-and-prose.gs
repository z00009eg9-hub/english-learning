var CDOCS = [
 "1x_MB6AOgxWSNPijj4kqQ0H-LDJM95kC7B5lkTiLNM-Q",
 "1BDrHoM_thTkJyExJHlp8ZddFZ4jl2XLe92ytuhBVWbk",
 "1MzEp2I1i3KP6eOcnjoOkISDp3lgzip-KlLcDQtkODvw",
 "1butLMCdPbRjI9RhqcKnpal9KdqN6vRzsqANrcQdJhlM",
 "1U_eA5_whXCg0dP9BipR3AFHWt-wZuwaCjRrVaszA5hw"
];
var SECTS = ["閱讀文章", "論述練習", "向外國同事介紹", "公司活動介紹", "本章導讀"];
var OR = "#FFA726", HD = "#FFE0B2", ST = "#FFD54F", CA = "#FFFDE7", FF = "Google Sans";
var PH = DocumentApp.ParagraphHeading, ET = DocumentApp.ElementType;

function comboNext() {
  var pr = PropertiesService.getScriptProperties();
  var i = parseInt(pr.getProperty("ccursor") || "0", 10);
  if (i >= CDOCS.length) { Logger.log("ALL DONE"); return; }
  reDoc(CDOCS[i]);
  var n = prDoc(CDOCS[i]);
  i++;
  pr.setProperty("ccursor", String(i));
  Logger.log("doc " + i + "/" + CDOCS.length + ": restyled + " + n + " prose table(s)" + (i >= CDOCS.length ? " — ALL DONE" : " — run again"));
}

function resetCombo() {
  PropertiesService.getScriptProperties().setProperty("ccursor", "0");
  Logger.log("ccursor reset");
}

function kill(body, idx) {
  var t = body.getChild(idx);
  if (idx === body.getNumChildren() - 1 && t.getType() === ET.PARAGRAPH) {
    var tx = t.asParagraph().editAsText(), L = tx.getText().length;
    if (L) tx.deleteText(0, L - 1);
    return false;
  }
  body.removeChild(t);
  return true;
}

function reDoc(id) {
  var doc = DocumentApp.openById(id), body = doc.getBody();
  for (var i = body.getNumChildren() - 1; i >= 0; i--) {
    var ch = body.getChild(i), t = ch.getType();
    if (t === ET.TABLE) { styleTb(ch.asTable()); continue; }
    if (t !== ET.PARAGRAPH) continue;
    var p = ch.asParagraph(), h = p.getHeading(), txt = p.getText();
    if (!txt) continue;
    if (h === PH.HEADING1) p.editAsText().setFontFamily(FF).setFontSize(20).setBold(true).setForegroundColor("#BF360C");
    else if (h === PH.HEADING2) bar(body, i, txt);
    else if (h === PH.HEADING3) { p.setHeading(PH.NORMAL); p.editAsText().setFontFamily(FF).setFontSize(14).setBold(true).setForegroundColor("#000000"); }
    else p.editAsText().setFontFamily(FF).setFontSize(13);
  }
  callouts(body);
  doc.saveAndClose();
}

function bar(body, i, title) {
  var tb = body.insertTable(i, [[title]]);
  tb.setBorderWidth(0);
  var c = tb.getRow(0).getCell(0);
  c.setBackgroundColor(OR);
  c.editAsText().setFontFamily(FF).setFontSize(15).setBold(true).setForegroundColor("#000000");
  kill(body, i + 1);
}

function styleTb(tb) {
  var rows = tb.getNumRows();
  if (!rows) return;
  var f = tb.getRow(0);
  if (f.getNumCells() === 1) return;
  if (f.getNumCells() === 2 && f.getCell(1).getBackgroundColor() === CA) return;
  for (var r = 0; r < rows; r++) {
    var row = tb.getRow(r), nc = row.getNumCells();
    for (var c = 0; c < nc; c++) {
      var cell = row.getCell(c), e = cell.editAsText();
      e.setFontFamily(FF).setFontSize(13);
      if (r === 0) { cell.setBackgroundColor(HD); e.setBold(true); e.setForegroundColor("#000000"); }
    }
  }
}

function nStart(s) {
  s = String(s).replace(/^\s+/, "");
  return /^(文法解說|•|句型：|結構：|定義：|用法：|重點：|一句話先懂|常見搭配|學習重點|建議做法|回答結構|使用時機)/.test(s);
}

function nLine(s) {
  s = String(s).replace(/^\s+/, "");
  return /^(文法解說|•|句型：|結構：|定義：|用法：|重點：|例句|中文|英文|⚠|❌|✅|→|補充|關鍵|使用情境|使用時機|一句話先懂|常見搭配|學習重點|建議做法|回答結構|改寫版本|Option|實用句型|自己造句|課文原句|職場情境)/.test(s);
}

function callouts(body) {
  var i = 0;
  while (i < body.getNumChildren()) {
    var ch = body.getChild(i);
    if (ch.getType() !== ET.PARAGRAPH) { i++; continue; }
    var p = ch.asParagraph();
    if (p.getHeading() !== PH.NORMAL || !nStart(p.getText())) { i++; continue; }
    var lines = [], j = i;
    while (j < body.getNumChildren()) {
      var c2 = body.getChild(j);
      if (c2.getType() !== ET.PARAGRAPH) break;
      var p2 = c2.asParagraph();
      if (p2.getHeading() !== PH.NORMAL) break;
      var s = p2.getText();
      if (!s) {
        var nx = null;
        if (j + 1 < body.getNumChildren() && body.getChild(j + 1).getType() === ET.PARAGRAPH) nx = body.getChild(j + 1).asParagraph();
        if (nx && nx.getHeading() === PH.NORMAL && nLine(nx.getText())) { j++; continue; }
        break;
      }
      if (!nLine(s)) break;
      lines.push(s);
      j++;
    }
    if (!lines.length) { i++; continue; }
    var rows = [];
    for (var q = 0; q < lines.length; q++) rows.push(["", lines[q]]);
    var tb = body.insertTable(i, rows);
    tb.setBorderWidth(0);
    try { tb.setColumnWidth(0, 10); } catch (e) {}
    for (var r = 0; r < rows.length; r++) {
      tb.getRow(r).getCell(0).setBackgroundColor(ST);
      var cell = tb.getRow(r).getCell(1);
      cell.setBackgroundColor(CA);
      var e2 = cell.editAsText();
      e2.setFontFamily(FF).setFontSize(13).setBold(false);
      var pos = lines[r].indexOf("：");
      if (pos > 0 && pos < 14) e2.setBold(0, pos, true);
    }
    var cnt = j - i;
    for (var d = 0; d < cnt; d++) { if (!kill(body, i + 1)) break; }
    i = i + 1;
  }
}

function wanted(s) {
  for (var k = 0; k < SECTS.length; k++) if (s.indexOf(SECTS[k]) >= 0) return true;
  return false;
}

function prDoc(id) {
  var doc = DocumentApp.openById(id), body = doc.getBody();
  var sec = "", done = 0, i = 0;
  while (i < body.getNumChildren()) {
    var ch = body.getChild(i);
    if (ch.getType() !== ET.TABLE) { i++; continue; }
    var tb = ch.asTable(), nc = tb.getRow(0).getNumCells();
    if (nc === 1) { sec = tb.getRow(0).getCell(0).getText(); i++; continue; }
    if (!wanted(sec) || (nc !== 2 && nc !== 3) || tb.getNumRows() < 2) { i++; continue; }
    if (tb.getRow(0).getCell(0).getBackgroundColor() === ST) { i++; continue; }
    var head = "";
    for (var c = 0; c < nc; c++) head += tb.getRow(0).getCell(c).getText();
    if (head.indexOf("英文") < 0 && head.indexOf("English") < 0) { i++; continue; }
    i = i + toPara(body, i, tb);
    done++;
  }
  doc.saveAndClose();
  return done;
}

function toPara(body, idx, tb) {
  var nc = tb.getRow(0).getNumCells(), data = [];
  for (var r = 1; r < tb.getNumRows(); r++) {
    var row = tb.getRow(r);
    var lab = nc >= 3 ? row.getCell(0).getText() : "";
    var en = nc >= 3 ? row.getCell(1).getText() : row.getCell(0).getText();
    var cn = nc >= 3 ? row.getCell(2).getText() : row.getCell(1).getText();
    if (/^(Paragraph|段落|Phase)/.test(lab)) lab = "";
    if (en) data.push([lab, en, cn]);
  }
  body.removeChild(tb);
  var at = idx, count = 0;
  for (var k = 0; k < data.length; k++) {
    if (data[k][0]) {
      var pl = body.insertParagraph(at++, data[k][0]);
      pl.setHeading(PH.NORMAL);
      pl.editAsText().setFontFamily(FF).setFontSize(13).setBold(true).setForegroundColor("#BF360C");
      count++;
    }
    var pe = body.insertParagraph(at++, data[k][1]);
    pe.setHeading(PH.NORMAL);
    pe.editAsText().setFontFamily(FF).setFontSize(13).setBold(true).setForegroundColor("#000000");
    count++;
    if (data[k][2]) {
      var pc = body.insertParagraph(at++, data[k][2]);
      pc.setHeading(PH.NORMAL);
      pc.editAsText().setFontFamily(FF).setFontSize(13).setBold(true).setForegroundColor("#000000");
      count++;
    }
    var sp = body.insertParagraph(at++, " ");
    sp.setHeading(PH.NORMAL);
    sp.editAsText().setFontFamily(FF).setFontSize(6);
    count++;
  }
  return count;
}
