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
  for(const u of [BASE+key+'--_us_1.mp3', BASE+key+'_us_1.mp3', BASE+key+'--_us_1_rr.mp3', BASE+key+'_us_1_rr.mp3', BASE+key+'--_us_2.mp3']){
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
  // 正規化：短音檔（~1 秒）用 loudnorm 量不準，改成兩段式 —
  // 先 volumedetect 量平均音量，再精準補增益到 -20 dB（含限幅防爆音）
  const {spawnSync}=require('child_process');
  let norm=0, fail=0;
  for(const f of fs.readdirSync(RAW)){
    const r=spawnSync(FF,['-i',path.join(RAW,f),'-af','volumedetect','-f','null','-'],{encoding:'utf8'});
    const m=(r.stderr||'').match(/mean_volume:s*(-?[d.]+) dB/);
    if(!m){ fail++; continue; }
    const gain=(-20-parseFloat(m[1])).toFixed(2);
    try{
      execFileSync(FF,['-y','-loglevel','error','-i',path.join(RAW,f),
        '-af','volume='+gain+'dB,alimiter=limit=0.89:level=false',
        '-ar','44100','-codec:a','libmp3lame','-q:a','5',
        path.join(OUT,f)]);
      norm++;
    }catch(e){ fail++; }
  }
  console.log('normalized:',norm,'failed:',fail);
})();
