/* ============================================================
   雲端課堂筆記音標統一美式（Apps Script，2026-09-21 建立，2026-09-27 存進 repo）

   用途：掃過 Google 雲端硬碟「英文筆記」資料夾（含一層子資料夾）裡的所有 Google 文件，
   把英式音標換成美式 Cambridge 記法，跟 B2 Read／Speak Up 網站同一套寫法。
   只改「用斜線包起來、而且含音標專用符號」的字串，不動表格結構、不清空儲存格。

   為什麼存在 repo：原本只放在 Apps Script 專案「英文筆記-音標統一美式」裡，
   2026-09-22 被另一個 session 的函式覆蓋掉了。這份是正本，要用時貼回 Apps Script 執行。

   怎麼用：
     1. 開 https://script.google.com/home/projects/1w55ELa-l1xFXypMoW3WJNc9rmvkxbvEh_-yZTtbdAYlTZkb026kTV2Ax/edit
        （或新建一個專案），把這整份貼進去。專案裡若有別人的函式，貼在最上面、不要刪掉別人的。
     2. ⚠ 函式下拉選單常「看起來選好了但執行的是舊函式」：把 pass2 放在檔案第一個函式，
        存檔後重新載入編輯器，下拉選單預設就是它，再按「執行」。跑完到「執行項目」頁確認函式名稱。
     3. 第一次會要求授權（Drive、Docs、外部網址）。
   對照表：精確對照放在 b2lab/public/us-ipa-map.json（線上 MAP_URL），
     新發現的例外字寫進那個 json 再 push，這支腳本不用改。
   可以重跑：已經是美式的字串不會再被改，所以重跑只會補新出現的英式音標。
   ============================================================ */
var NOTES_ROOT = "1YtpOmtpwi7Mogdu5XR5_nNjnzEOOMe9C";   // 雲端硬碟「英文筆記」資料夾
var MAP_URL = "https://english-b2-lab.web.app/us-ipa-map.json";

/* 音標專用符號：整串至少要有一個，才認定是音標（避免動到 9/17、A/B 這類普通斜線） */
var IPA_SIGN = /[ˈˌːəɪʊæɑɔɜɝɚʃʒθðŋʌɡɒ]/;
/* 換完之後還像英式的：ɒ ɜ ɛ əʊ ə(r)、或 ər 後面不是母音 */
var LEFT = /[ɒɜɛ]|əʊ|ə\(r\)|ər[^aeiouæɑɔəɪʊʌɛɜɝɚ]/;

var EXACT = null;
function exact_() { if (!EXACT) EXACT = JSON.parse(UrlFetchApp.fetch(MAP_URL).getContentText()); return EXACT; }

/* 對照表有收錄就用對照表；沒有才走機械規則 */
function toUs_(s) {
  var e = exact_(); if (e[s]) return e[s];
  var x = s;
  x = x.replace(/əʊ/g, "oʊ");                        // əʊ → oʊ
  x = x.replace(/ɛər?|eər/g, "er");                  // ɛə(r)／eər → er
  x = x.replace(/ɪər/g, "ɪr");                       // ɪər → ɪr
  x = x.replace(/ʊər/g, "ʊr");                       // ʊər → ʊr
  x = x.replace(/ɜːr|ɜr|ɜː/g, "ɝː"); // ɜːr／ɜr／ɜː → ɝː
  x = x.replace(/ə\(r\)/g, "ɚ");                          // ə(r) → ɚ
  x = x.replace(/ɒ/g, "ɑː");                         // ɒ → ɑː
  x = x.replace(/ɛ/g, "e");                                    // ɛ → e
  /* ər → ɚ，但 r 後面接母音時 r 是下一個音節的開頭（operator /ˈɑː.pə.reɪ.t̬ɚ/），不能換 */
  x = x.replace(/ər(?![aeiouæɑɔəɪʊʌɛɜɝɚ])/g, "ɚ");
  return x;
}

function pushDocs_(f, out) { var it = f.getFilesByType(MimeType.GOOGLE_DOCS); while (it.hasNext()) { var x = it.next(); out.push({ id: x.getId(), name: x.getName() }); } }
function scanDocs_() { var out = [], root = DriveApp.getFolderById(NOTES_ROOT); pushDocs_(root, out); var s = root.getFolders(); while (s.hasNext()) pushDocs_(s.next(), out); return out; }

/* 掃全部文件：能換的就換，換完仍像英式的列在最後，拿去補進 us-ipa-map.json */
function pass2() {
  var docs = scanDocs_(), changed = 0, left = {}, t0 = new Date().getTime();
  for (var i = 0; i < docs.length; i++) {
    if (new Date().getTime() - t0 > 280000) { Logger.log("時間到，停在第 " + i + " 份，再跑一次會從頭掃（已改過的不會重複改）"); break; }
    var doc = DocumentApp.openById(docs[i].id), body = doc.getBody();
    var hits = [], r = body.findText("/[^/\\s][^/]*/");
    while (r) {
      var el = r.getElement(), a = r.getStartOffset(), b = r.getEndOffsetInclusive();
      var t = el.asText().getText().substring(a, b + 1);
      if (IPA_SIGN.test(t)) { var n = toUs_(t); if (n !== t) hits.push({ el: el, start: a, end: b, neu: n }); else if (LEFT.test(t)) left[t] = (left[t] || 0) + 1; }
      r = body.findText("/[^/\\s][^/]*/", r);
    }
    var n2 = 0;
    for (var j = hits.length - 1; j >= 0; j--) {   // 由後往前改，前面的偏移量才不會跑掉
      var tx = hits[j].el.asText(); tx.deleteText(hits[j].start, hits[j].end); tx.insertText(hits[j].start, hits[j].neu); n2++;
    }
    if (n2) { doc.saveAndClose(); changed += n2; Logger.log(docs[i].name + "  補改 " + n2 + " 處"); }
  }
  var ks = Object.keys(left);
  Logger.log("==== 本次改 " + changed + " 處；仍疑似非美式 " + ks.length + " 種 ====");
  Logger.log(ks.join("  "));
}
