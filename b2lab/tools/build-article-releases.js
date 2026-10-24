// 用首次加入版本的時間辨識新文章，避免補日期或修改舊文時重複提醒。
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const {execFileSync}=require('node:child_process');
const repo=path.resolve(__dirname,'../..'),pub=path.join(repo,'b2lab/public');
const files=['data-reading.js','data-daily.js','data-a2.js','data-notes.js'];
const scope={window:{}};
for(const file of files)vm.runInNewContext(fs.readFileSync(path.join(pub,file),'utf8'),scope,{filename:file,timeout:5000});
const w=scope.window;
const articles=[...(w.READING||[]),...(w.DAILY?.articles||[]),...(w.A2?.articles||[])];
const notes=(w.NOTES?.articles||[]).map((a,i)=>({...a,id:'n'+String(i+1).padStart(2,'0')}));
const ids=new Set(articles.map(a=>a.id)),noteTitles=new Set(notes.map(a=>a.title));
const first=new Map(),firstTitle=new Map();
const history=execFileSync('git',['log','--reverse','--format=RELEASE %H %cI','--unified=0','-p','--',...files.map(f=>'b2lab/public/'+f)],{cwd:repo,encoding:'utf8',maxBuffer:128*1024*1024});
let stamp='',isNotes=false;
for(const line of history.split(/\r?\n/)){
  if(line.startsWith('RELEASE ')){stamp=line.split(' ')[2];continue;}
  if(line.startsWith('diff --git ')){isNotes=line.includes('/data-notes.js');continue;}
  if(!line.startsWith('+')||line.startsWith('+++'))continue;
  if(!isNotes){
    for(const m of line.matchAll(/\b["']?id["']?\s*:\s*["']([^"']+)["']/g))if(ids.has(m[1])&&!first.has(m[1]))first.set(m[1],stamp);
  }else{
    for(const m of line.matchAll(/\b["']?title["']?\s*:\s*("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*')/g)){
      const title=vm.runInNewContext(m[1],{}, {timeout:100});
      if(noteTitles.has(title)&&!firstTitle.has(title))firstTitle.set(title,stamp);
    }
  }
}
const releases={};
for(const a of articles.concat(notes)){
  const publishedAt=a.id.startsWith('n')?firstTitle.get(a.title):first.get(a.id);
  if(!publishedAt)throw new Error('找不到文章首次版本：'+a.id+'；請使用完整 Git 歷史產生清單。');
  releases[a.id]={publishedAt};
}
fs.writeFileSync(path.join(pub,'article-releases.json'),JSON.stringify({version:1,articles:releases},null,2)+'\n');
console.log('文章首次版本清單：'+Object.keys(releases).length+' 篇');
