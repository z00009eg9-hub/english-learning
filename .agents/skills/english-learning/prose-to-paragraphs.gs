var BDOCS = [
 "15XgZ9CDCxINd4xAOYB0NFiZsW6SP-luQa2uMhkOcuzs",
 "1DrqvG6E994lcQxcL4TUDF4NBmro4QKnMjNLsd_-wAbY",
 "1zDUJX_1vpmTt2P-GhuJO20RYBWX-i28JR_7idNY1eRY",
 "1-JSXJJj2zGaTcQdmFJqmmDYHwMDHaBhq3kEFfcUs9tU"
];
var BSECTS = ["閱讀文章", "論述練習", "向外國同事介紹", "公司活動介紹", "本章導讀"];
var BF = "Google Sans", BSTRIP = "#FFD54F";
var BPH = DocumentApp.ParagraphHeading, BET = DocumentApp.ElementType;

function proseNext() {
  var props = PropertiesService.getScriptProperties();
  var idx = parseInt(props.getProperty("bcursor") || "0", 10);
  if (idx >= BDOCS.length) { Logger.log("ALL DONE"); return; }
  var n = proseDoc(BDOCS[idx]);
  idx++;
  props.setProperty("bcursor", String(idx));
  Logger.log("doc " + idx + "/" + BDOCS.length + ": converted " + n + " table(s)" + (idx >= BDOCS.length ? " — ALL DONE" : " — run again"));
}

function resetProseCursor() {
  PropertiesService.getScriptProperties().setProperty("bcursor", "0");
  Logger.log("bcursor reset to 0");
}

function wantedSection(s) {
  for (var k = 0; k < BSECTS.length; k++) if (s.indexOf(BSECTS[k]) >= 0) return true;
  return false;
}

function proseDoc(id) {
  var doc = DocumentApp.openById(id), body = doc.getBody();
  var section = "", done = 0, i = 0;
  while (i < body.getNumChildren()) {
    var ch = body.getChild(i);
    if (ch.getType() !== BET.TABLE) { i++; continue; }
    var tb = ch.asTable();
    var nc = tb.getRow(0).getNumCells();
    if (nc === 1) { section = tb.getRow(0).getCell(0).getText(); i++; continue; }
    if (!wantedSection(section) || (nc !== 2 && nc !== 3) || tb.getNumRows() < 2) { i++; continue; }
    if (tb.getRow(0).getCell(0).getBackgroundColor() === BSTRIP) { i++; continue; }
    var head = "";
    for (var c = 0; c < nc; c++) head += tb.getRow(0).getCell(c).getText();
    if (head.indexOf("英文") < 0 && head.indexOf("English") < 0) { i++; continue; }
    i = i + proseToParagraphs(body, i, tb);
    done++;
  }
  doc.saveAndClose();
  return done;
}

function proseToParagraphs(body, idx, tb) {
  var nc = tb.getRow(0).getNumCells();
  var data = [];
  for (var r = 1; r < tb.getNumRows(); r++) {
    var row = tb.getRow(r);
    var lab = nc >= 3 ? row.getCell(0).getText() : "";
    var en = nc >= 3 ? row.getCell(1).getText() : row.getCell(0).getText();
    var cn = nc >= 3 ? row.getCell(2).getText() : row.getCell(1).getText();
    if (/^(Paragraph|段落)/.test(lab)) lab = "";
    if (en) data.push([lab, en, cn]);
  }
  body.removeChild(tb);
  var at = idx, count = 0;
  for (var k = 0; k < data.length; k++) {
    if (data[k][0]) {
      var pl = body.insertParagraph(at++, data[k][0]);
      pl.setHeading(BPH.NORMAL);
      pl.editAsText().setFontFamily(BF).setFontSize(13).setBold(true).setForegroundColor("#BF360C");
      count++;
    }
    var pe = body.insertParagraph(at++, data[k][1]);
    pe.setHeading(BPH.NORMAL);
    pe.editAsText().setFontFamily(BF).setFontSize(13).setBold(true).setForegroundColor("#000000");
    count++;
    if (data[k][2]) {
      var pc = body.insertParagraph(at++, data[k][2]);
      pc.setHeading(BPH.NORMAL);
      pc.editAsText().setFontFamily(BF).setFontSize(13).setBold(true).setForegroundColor("#000000");
      count++;
    }
    var sp = body.insertParagraph(at++, " ");
    sp.setHeading(BPH.NORMAL);
    sp.editAsText().setFontFamily(BF).setFontSize(6);
    count++;
  }
  return count;
}
