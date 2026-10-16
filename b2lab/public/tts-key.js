/* AI 語音檔的切句與檔名規則：網站（index.html 的 say）和產生腳本（b2lab-audio/build.js）共用這一份，
   兩邊算出來的檔名才會一樣。改這裡的規則＝所有音檔都要重產，非必要不要動。
   檔名：<聲音>/<雜湊前 2 碼>/<其餘>.mp3，聲音 f＝Aria 女聲（一般句子、影片女聲與旁白）、m＝Guy 男聲（影片男聲） */
(function(root){
  function ttsNorm(t){
    return String(t==null?'':t).replace(/<[^>]*>/g,' ')
      .replace(/[‘’]/g,"'").replace(/[“”]/g,'"')
      .replace(/\s+/g,' ').trim();
  }
  /* 切成一句一句：句號／問號／驚嘆號後面接空白才算句尾（3.5、U.S.A 不會斷），常見縮寫不斷 */
  var ABBR=/\b(?:Mr|Mrs|Ms|Dr|St|vs|e\.g|i\.e|a\.m|p\.m|No|approx)\.$/i;
  function ttsSplit(t){
    t=ttsNorm(t);
    var out=[], start=0, re=/[.!?]+["')\]]*(?=\s|$)/g, m;
    while((m=re.exec(t))){
      var end=m.index+m[0].length, s=t.slice(start,end);
      if(end<t.length && ABBR.test(s)) continue;
      if(s.trim()) out.push(s.trim());
      start=end;
    }
    if(t.slice(start).trim()) out.push(t.slice(start).trim());
    return out;
  }
  /* cyrb53：快、穩定、碰撞機率極低，瀏覽器和 Node 算出來一樣 */
  function cyrb53(str){
    var h1=0xdeadbeef, h2=0x41c6ce57;
    for(var i=0;i<str.length;i++){ var c=str.charCodeAt(i); h1=Math.imul(h1^c,2654435761); h2=Math.imul(h2^c,1597334677); }
    h1=Math.imul(h1^(h1>>>16),2246822507)^Math.imul(h2^(h2>>>13),3266489909);
    h2=Math.imul(h2^(h2>>>16),2246822507)^Math.imul(h1^(h1>>>13),3266489909);
    return (h2>>>0).toString(16).padStart(8,'0')+(h1>>>0).toString(16).padStart(8,'0');
  }
  function ttsFile(voice,sentence){
    var h=cyrb53(voice+'|'+ttsNorm(sentence));
    return voice+'/'+h.slice(0,2)+'/'+h.slice(2)+'.mp3';
  }
  var api={ttsNorm:ttsNorm, ttsSplit:ttsSplit, ttsFile:ttsFile};
  if(typeof module!=='undefined' && module.exports) module.exports=api;
  else for(var k in api) root[k]=api[k];
})(typeof window!=='undefined'?window:this);
