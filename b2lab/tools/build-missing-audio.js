/* 補缺字音檔：掃 data-*.js 的所有 w: 欄位，找出 public/audio/ 沒有、gstatic 也沒有的字，
   用 Google Translate TTS 生成並統一響度（mean -20dB，同 build-word-audio.js）寫進 public/audio/。
   新課文加了多詞單字（gstatic 不會有）後跑一次即可。
   用法：cd tools && npm install ffmpeg-static && node build-missing-audio.js */
const fs=require('fs'),path=require('path'),{execFileSync,spawnSync}=require('child_process');
const FF=require('ffmpeg-static');
const PUB=path.join(__dirname,'..','public');
const OUT=path.join(PUB,'audio');
const RAW=path.join(__dirname,'tts-raw'); fs.mkdirSync(RAW,{recursive:true});
const GBASE='https://ssl.gstatic.com/dictionary/static/sounds/20200429/';
const sleep=ms=>new Promise(r=>setTimeout(r,ms));

/* 1. 掃出全站單字（含 "w": 與 w: 兩種寫法） */
const words=new Set();
for(const f of fs.readdirSync(PUB).filter(x=>/^data-.*\.js$/.test(x))){
  const s=fs.readFileSync(path.join(PUB,f),'utf8');
  for(const m of s.matchAll(/["']?\bw["']?\s*:\s*["']([^"']+)["']/g)){
    const w=m[1].trim().toLowerCase();
    if(/^[a-z]+(?:[ -][a-z]+){0,2}$/.test(w)) words.add(w);
  }
}
const have=new Set(fs.readdirSync(OUT).map(x=>x.replace(/\.mp3$/,'')));
const cand=[...words].filter(w=>!have.has(w.replace(/[ -]/g,'_')));
console.log('words:',words.size,'no local file:',cand.length);

async function onGstatic(key){
  for(const u of [GBASE+key+'--_us_1.mp3', GBASE+key+'_us_1.mp3']){
    try{ const r=await fetch(u,{method:'HEAD'}); if(r.ok) return true; }catch(e){}
  }
  return false;
}
async function dlTts(w){
  const raw=path.join(RAW,w.replace(/[ -]/g,'_')+'.mp3');
  if(fs.existsSync(raw)) return true;
  const u='https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=en&q='+encodeURIComponent(w);
  for(let t=0;t<3;t++){
    try{
      const r=await fetch(u,{headers:{'User-Agent':'Mozilla/5.0'}});
      if(r.ok){ const b=Buffer.from(await r.arrayBuffer()); if(b.length>1000){ fs.writeFileSync(raw,b); return true; } }
    }catch(e){}
    await sleep(1500*(t+1));
  }
  return false;
}

(async()=>{
  /* 2. gstatic 有的字執行時會線上播，跳過；真缺的才生成 */
  const miss=[];
  for(let i=0;i<cand.length;i+=16){
    const b=cand.slice(i,i+16);
    const rs=await Promise.all(b.map(w=>onGstatic(w.replace(/[ -]/g,'_'))));
    rs.forEach((ok,j)=>{ if(!ok) miss.push(b[j]); });
    if(i%160===0) process.stdout.write('.');
  }
  console.log('\nnot on gstatic:',miss.length);

  let got=0; const fail=[];
  for(const w of miss){
    if(await dlTts(w)) got++; else fail.push(w);
    if(got%40===0) process.stdout.write('.');
    await sleep(120);
  }
  console.log('\ndownloaded:',got,'failed:',fail.length,fail.slice(0,10).join(', '));

  /* 3. 兩段式響度正規化：volumedetect 量平均音量 → 補增益到 -20dB */
  let norm=0, nfail=[];
  for(const f of fs.readdirSync(RAW)){
    const dst=path.join(OUT,f);
    if(fs.existsSync(dst)){ continue; }
    const r=spawnSync(FF,['-i',path.join(RAW,f),'-af','volumedetect','-f','null','-'],{encoding:'utf8'});
    const m=(r.stderr||'').match(/mean_volume:\s*(-?[\d.]+) dB/);
    if(!m){ nfail.push(f); continue; }
    const gain=(-20-parseFloat(m[1])).toFixed(2);
    try{
      execFileSync(FF,['-y','-loglevel','error','-i',path.join(RAW,f),
        '-af','volume='+gain+'dB,alimiter=limit=0.89:level=false',
        '-ar','44100','-codec:a','libmp3lame','-q:a','5',dst]);
      norm++;
    }catch(e){ nfail.push(f); }
  }
  console.log('normalized:',norm,'failed:',nfail.length,nfail.slice(0,10).join(', '));
})();
