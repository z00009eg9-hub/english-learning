var ADOCS = [
 "1UFkFDs8J45yYGRmJUAFc__tpbBgYhDFAOGQaOGt6X_k",
 "1tWi_JV1pWPm357tYf6AXto7S2z5VguRAbVBvzjWHk98",
 "1y-yPv7tyMzaehigNBketCqamifUuKP4YcBOUQLPKiB4",
 "15XgZ9CDCxINd4xAOYB0NFiZsW6SP-luQa2uMhkOcuzs"
];
var AF = "Google Sans";
var APH = DocumentApp.ParagraphHeading, AET = DocumentApp.ElementType;

function articleNext() {
  var props = PropertiesService.getScriptProperties();
  var idx = parseInt(props.getProperty("acursor") || "0", 10);
  if (idx >= ADOCS.length) { Logger.log("ALL DONE"); return; }
  var n = articleDoc(ADOCS[idx]);
  idx++;
  props.setProperty("acursor", String(idx));
  Logger.log("doc " + idx + "/" + ADOCS.length + ": converted " + n + " article table(s)" + (idx >= ADOCS.length ? " — ALL DONE" : " — run again"));
}

function resetArticleCursor() {
  PropertiesService.getScriptProperties().setProperty("acursor", "0");
  Logger.log("acursor reset to 0");
}

function articleDoc(id) {
  var doc = DocumentApp.openById(id), body = doc.getBody();
  var section = "", done = 0;
  var i = 0;
  while (i < body.getNumChildren()) {
    var ch = body.getChild(i);
    if (ch.getType() !== AET.TABLE) { i++; continue; }
    var tb = ch.asTable();
    var nc = tb.getRow(0).getNumCells();
    if (nc === 1) { section = tb.getRow(0).getCell(0).getText(); i++; continue; }
    if (section.indexOf("閱讀文章") >= 0 && (nc === 2 || nc === 3) && tb.getNumRows() > 1) {
      var added = toParagraphs(body, i, tb);
      done++;
      i = i + added;
      continue;
    }
    i++;
  }
  doc.saveAndClose();
  return done;
}

function toParagraphs(body, idx, tb) {
  var nc = tb.getRow(0).getNumCells();
  var data = [];
  for (var r = 1; r < tb.getNumRows(); r++) {
    var row = tb.getRow(r);
    var en = nc >= 3 ? row.getCell(1).getText() : row.getCell(0).getText();
    var cn = nc >= 3 ? row.getCell(2).getText() : row.getCell(1).getText();
    if (en) data.push([en, cn]);
  }
  body.removeChild(tb);
  var at = idx, count = 0;
  for (var k = 0; k < data.length; k++) {
    var pe = body.insertParagraph(at++, data[k][0]);
    pe.setHeading(APH.NORMAL);
    pe.editAsText().setFontFamily(AF).setFontSize(13).setBold(true).setForegroundColor("#000000");
    count++;
    if (data[k][1]) {
      var pc = body.insertParagraph(at++, data[k][1]);
      pc.setHeading(APH.NORMAL);
      pc.editAsText().setFontFamily(AF).setFontSize(13).setBold(true).setForegroundColor("#000000");
      count++;
    }
    var sp = body.insertParagraph(at++, " ");
    sp.setHeading(APH.NORMAL);
    sp.editAsText().setFontFamily(AF).setFontSize(6);
    count++;
  }
  return count;
}
