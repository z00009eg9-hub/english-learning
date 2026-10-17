/* 產生 b2lab/public/gvideo/index.js：有文法影片的單元清單（window.GVIDEO_IDS）。
   網站一開就載入這份小清單，文法卡片與單元標題才知道要不要放「▶ 影片版」；影片本體點了才載 gvideo/<id>.js。
   用法：node b2lab/tools/build-gvideo-index.js        （新增或刪除 gvideo/*.js 後都要跑，結果要 commit）
   輸出依檔名排序、不寫時間戳：同樣的檔案跑幾次都一樣，不會產生假的 git 改動。 */
const fs=require('fs'), path=require('path');
const DIR=path.join(__dirname,'..','public','gvideo');
const ids=fs.readdirSync(DIR).filter(f=>/\.js$/.test(f)&&f!=='index.js').map(f=>f.replace(/\.js$/,'')).sort();
const out='/* 自動產生（b2lab/tools/build-gvideo-index.js），不要手改：有文法影片的單元 */\n'
  +'window.GVIDEO_IDS = '+JSON.stringify(ids)+';\n';
const dst=path.join(DIR,'index.js');
const old=fs.existsSync(dst)?fs.readFileSync(dst,'utf8'):'';
if(old!==out){ fs.writeFileSync(dst,out); console.log('gvideo/index.js 更新：'+ids.length+' 個單元'); }
else console.log('gvideo/index.js 沒變：'+ids.length+' 個單元');
