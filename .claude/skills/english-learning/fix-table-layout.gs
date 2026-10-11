var DOC_ID = "1rKkl4yemKQDVgW7zQNU87mEJC7hrcjQanXhawG-ak-M";
var ORANGE = "#FFA726", STRIP = "#FFD54F", CALL = "#FFFDE7";

function fixTableLayout() {
  var doc = DocumentApp.openById(DOC_ID);
  var body = doc.getBody();

  for (var i = 0; i < body.getNumChildren(); i++) {
    var ch = body.getChild(i);
    if (ch.getType() !== DocumentApp.ElementType.TABLE) continue;
    var tb = ch.asTable();
    var rows = tb.getNumRows();
    if (!rows) continue;

    var firstRow = tb.getRow(0);
    var numCols = firstRow.getNumCells();

    // 1) 單字 Words: 5欄，中文意思(col3) ↔ 例句(col4)
    if (numCols === 5 && rows > 1) {
      var h3 = firstRow.getCell(3).getText().replace(/\s/g, "");
      var h4 = firstRow.getCell(4).getText().replace(/\s/g, "");
      if (h3 === "中文意思" && h4 === "例句") {
        swapCols(tb, 3, 4);
      }
    }

    // 2) 片語/食慾: 3欄，中文意思或中文(col1) ↔ 例句(col2)
    if (numCols === 3 && rows > 1) {
      var h1 = firstRow.getCell(1).getText().replace(/\s/g, "");
      var h2 = firstRow.getCell(2).getText().replace(/\s/g, "");
      if ((h1 === "中文意思" || h1 === "中文") && h2 === "例句") {
        swapCols(tb, 1, 2);
      }
    }

    // 4) 橘色 bar (單格表格): 靠左、上下置中
    if (numCols === 1 && rows === 1) {
      var cell = firstRow.getCell(0);
      if (cell.getBackgroundColor() === ORANGE) {
        for (var p = 0; p < cell.getNumChildren(); p++) {
          var para = cell.getChild(p);
          if (para.getType() === DocumentApp.ElementType.PARAGRAPH) {
            para.asParagraph().setAlignment(DocumentApp.HorizontalAlignment.LEFT);
          }
        }
        cell.setVerticalAlignment(DocumentApp.VerticalAlignment.CENTER);
      }
    }

    // 5) 黃底 callout: 第一欄寬改 0.4 cm ≈ 11 pt
    if (numCols === 2 && rows >= 1) {
      var c0 = firstRow.getCell(0);
      var c1 = firstRow.getCell(1);
      if (c0.getBackgroundColor() === STRIP && c1.getBackgroundColor() === CALL) {
        try { tb.setColumnWidth(0, 11); } catch (e) {}
      }
    }
  }

  doc.saveAndClose();
  Logger.log("Done — columns swapped, orange bars left-aligned, callout strip narrowed.");
}

function swapCols(tb, a, b) {
  var rows = tb.getNumRows();
  for (var r = 0; r < rows; r++) {
    var row = tb.getRow(r);
    var cA = row.getCell(a), cB = row.getCell(b);
    var tA = cA.editAsText(), tB = cB.editAsText();
    var sA = tA.getText(), sB = tB.getText();

    var aA = [], aB = [];
    for (var c = 0; c < sA.length; c++) aA.push(tA.getAttributes(c));
    for (var c = 0; c < sB.length; c++) aB.push(tB.getAttributes(c));

    tA.setText(sB);
    for (var c = 0; c < sB.length; c++) tA.setAttributes(c, c, aB[c]);

    tB.setText(sA);
    for (var c = 0; c < sA.length; c++) tB.setAttributes(c, c, aA[c]);
  }
}
