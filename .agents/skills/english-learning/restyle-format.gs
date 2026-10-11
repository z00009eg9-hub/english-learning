var DOCS = [
 "1UFkFDs8J45yYGRmJUAFc__tpbBgYhDFAOGQaOGt6X_k",
 "1tWi_JV1pWPm357tYf6AXto7S2z5VguRAbVBvzjWHk98",
 "10XnHQvPrIO8oJ5v0VDxo4fvwAf02DcZhIBknWlJmni0",
 "1oGNJZOz172LErpatMuKzWS2u4psfU7uyvgiTNz6iZqQ",
 "1FpMM8jo358yOY4nSVYG-1vY3vGqgQwdTOfONURJNucA",
 "1y-yPv7tyMzaehigNBketCqamifUuKP4YcBOUQLPKiB4",
 "15XgZ9CDCxINd4xAOYB0NFiZsW6SP-luQa2uMhkOcuzs",
 "1LCwmjw0FGwM8DG-8oslxMBvug91_1GAHVUGLpWbiUcU",
 "1DrqvG6E994lcQxcL4TUDF4NBmro4QKnMjNLsd_-wAbY",
 "1zDUJX_1vpmTt2P-GhuJO20RYBWX-i28JR_7idNY1eRY",
 "1ytoMO9lMMXNCZ_BGxGm2gHeHIDEstpaw4S3Tpw0S_RY",
 "1-JSXJJj2zGaTcQdmFJqmmDYHwMDHaBhq3kEFfcUs9tU"
];
var ORANGE = "#FFA726", HDR = "#FFE0B2", STRIP = "#FFD54F", CALL = "#FFFDE7", F = "Google Sans";
var PH = DocumentApp.ParagraphHeading, ET = DocumentApp.ElementType;

function killChild(body, idx) {
  var t = body.getChild(idx);
  if (idx === body.getNumChildren() - 1 && t.getType() === ET.PARAGRAPH) { var tx = t.asParagraph().editAsText(); var L = tx.getText().length; if (L) tx.deleteText(0, L - 1); return false; }
  body.removeChild(t);
  return true;
}

function restyleNext() {
  var props = PropertiesService.getScriptProperties();
  var idx = parseInt(props.getProperty("cursor") || "0", 10);
  if (idx >= DOCS.length) { Logger.log("ALL DONE"); return; }
  restyleDoc(DOCS[idx]);
  idx++;
  props.setProperty("cursor", String(idx));
  Logger.log("restyled " + idx + "/" + DOCS.length + (idx >= DOCS.length ? " — ALL DONE" : " — run again for next"));
}

function resetCursor() {
  PropertiesService.getScriptProperties().setProperty("cursor", "0");
  Logger.log("cursor reset to 0");
}

function restyleDoc(id) {
  var doc = DocumentApp.openById(id), body = doc.getBody();
  for (var i = body.getNumChildren() - 1; i >= 0; i--) {
    var ch = body.getChild(i), t = ch.getType();
    if (t === ET.TABLE) { styleTable(ch.asTable()); continue; }
    if (t !== ET.PARAGRAPH) continue;
    var p = ch.asParagraph(), h = p.getHeading(), txt = p.getText();
    if (!txt) continue;
    if (h === PH.HEADING1) {
      p.editAsText().setFontFamily(F).setFontSize(20).setBold(true).setForegroundColor("#BF360C");
    } else if (h === PH.HEADING2) {
      secBar(body, i, txt);
    } else if (h === PH.HEADING3) {
      p.setHeading(PH.NORMAL);
      p.editAsText().setFontFamily(F).setFontSize(14).setBold(true).setForegroundColor("#000000");
    } else {
      p.editAsText().setFontFamily(F).setFontSize(13);
    }
  }
  makeCallouts(body);
  doc.saveAndClose();
}

function secBar(body, i, title) {
  var tb = body.insertTable(i, [[title]]);
  tb.setBorderWidth(0);
  var c = tb.getRow(0).getCell(0);
  c.setBackgroundColor(ORANGE);
  c.editAsText().setFontFamily(F).setFontSize(15).setBold(true).setForegroundColor("#000000");
  c.setVerticalAlignment(DocumentApp.VerticalAlignment.CENTER);
  for (var bp = 0; bp < c.getNumChildren(); bp++) {
    var bpc = c.getChild(bp);
    if (bpc.getType() === ET.PARAGRAPH) bpc.asParagraph().setAlignment(DocumentApp.HorizontalAlignment.LEFT).setSpacingBefore(0).setSpacingAfter(0);
  }
  killChild(body, i + 1);
}

function styleTable(tb) {
  var rows = tb.getNumRows();
  if (!rows) return;
  var first = tb.getRow(0);
  if (first.getNumCells() === 1) return;
  if (first.getNumCells() === 2 && first.getCell(1).getBackgroundColor() === CALL) return;
  for (var r = 0; r < rows; r++) {
    var row = tb.getRow(r), nc = row.getNumCells();
    for (var c = 0; c < nc; c++) {
      var cell = row.getCell(c), e = cell.editAsText();
      e.setFontFamily(F).setFontSize(13);
      if (r === 0) { cell.setBackgroundColor(HDR); e.setBold(true); e.setForegroundColor("#000000"); }
    }
  }
}

function isNoteStart(s) {
  s = String(s).replace(/^\s+/, "");
  return /^(文法解說|•|句型：|結構：|定義：|用法：|重點：|一句話先懂|常見搭配|學習重點|建議做法|回答結構)/.test(s);
}

function isNoteLine(s) {
  s = String(s).replace(/^\s+/, "");
  return /^(文法解說|•|句型：|結構：|定義：|用法：|重點：|例句|中文|英文|⚠|❌|✅|→|補充|關鍵|使用情境|一句話先懂|常見搭配|學習重點|建議做法|回答結構|改寫版本|Option|實用句型)/.test(s);
}

function makeCallouts(body) {
  var i = 0;
  while (i < body.getNumChildren()) {
    var ch = body.getChild(i);
    if (ch.getType() !== ET.PARAGRAPH) { i++; continue; }
    var p = ch.asParagraph();
    if (p.getHeading() !== PH.NORMAL || !isNoteStart(p.getText())) { i++; continue; }
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
        if (nx && nx.getHeading() === PH.NORMAL && isNoteLine(nx.getText())) { j++; continue; }
        break;
      }
      if (!isNoteLine(s)) break;
      lines.push(s);
      j++;
    }
    if (!lines.length) { i++; continue; }
    var rows = [];
    for (var q = 0; q < lines.length; q++) rows.push(["", lines[q]]);
    var tb = body.insertTable(i, rows);
    tb.setBorderWidth(0);
    try { tb.setColumnWidth(0, 11.34); } catch (e) {}
    for (var r = 0; r < rows.length; r++) {
      tb.getRow(r).getCell(0).setBackgroundColor(STRIP);
      var cell = tb.getRow(r).getCell(1);
      cell.setBackgroundColor(CALL);
      var e2 = cell.editAsText();
      e2.setFontFamily(F).setFontSize(13).setBold(false);
      var pos = lines[r].indexOf("：");
      if (pos > 0 && pos < 14) e2.setBold(0, pos, true);
    }
    var cnt = j - i;
    for (var d = 0; d < cnt; d++) { if (!killChild(body, i + 1)) break; }
    i = i + 1;
  }
}
