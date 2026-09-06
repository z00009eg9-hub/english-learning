/* 下載全站單字的真人發音音檔，統一響度（EBU R128 loudnorm I=-16），輸出到 out/ */
const fs=require('fs'),path=require('path'),{execFileSync}=require('child_process');
const FF=require('ffmpeg-static');
const WORDS_FILE=path.join(__dirname,'..','words.txt');
const RAW=path.join(__dirname,'raw'), OUT=path.join(__dirname,'out');
fs.mkdirSync(RAW,{recursive:true}); fs.mkdirSync(OUT,{recursive:true});

const extra=['box','intersection','block','corridor','route','road']; // 實景 vocab
const words=[...new Set(
  fs.readFileSync(WORDS_FILE,'utf8').split(/\r?\n/).map(w=>w.trim().toLowerCase())
    .concat(extra)
    .filter(w=>/^[a-z]+(?:[ -][a-z]+){0,2}$/.test(w))
)];
console.log('words:',words.length);

const BASE='https://ssl.gstatic.com/dictionary/static/sounds/20200429/';
async function dl(key){
  for(const u of [BASE+key+'--_us_1.mp3', BASE+key+'_us_1.mp3']){
    try{
      const r=await fetch(u);
      if(r.ok){ fs.writeFileSync(path.join(RAW,key+'.mp3'),Buffer.from(await r.arrayBuffer())); return true; }
    }catch(e){}
  }
  return false;
}

(async()=>{
  let got=0, miss=[];
  // 併發 8 下載
  for(let i=0;i<words.length;i+=8){
    const batch=words.slice(i,i+8);
    const rs=await Promise.all(batch.map(w=>dl(w.replace(/[ -]/g,'_'))));
    rs.forEach((ok,j)=>{ if(ok) got++; else miss.push(batch[j]); });
    if(i%80===0) process.stdout.write('.');
  }
  console.log('\ndownloaded:',got,'missing:',miss.length);
  fs.writeFileSync(path.join(__dirname,'missing.txt'),miss.join('\n'));
  // 正規化
  let norm=0, fail=0;
  for(const f of fs.readdirSync(RAW)){
    try{
      execFileSync(FF,['-y','-loglevel','error','-i',path.join(RAW,f),
        '-af','loudnorm=I=-16:TP=-1.5:LRA=11',
        '-ar','44100','-codec:a','libmp3lame','-q:a','5',
        path.join(OUT,f)]);
      norm++;
    }catch(e){ fail++; console.error('ffmpeg fail:',f); }
  }
  console.log('normalized:',norm,'failed:',fail);
})();
