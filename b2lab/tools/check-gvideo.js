/* 文法影片（b2lab/public/gvideo/<id>.js）檢查器。規格見 b2lab/tools/GVIDEO_SPEC.md。
   用法：
     node b2lab/tools/check-gvideo.js                 檢查全部
     node b2lab/tools/check-gvideo.js dg20261014a2 …  只檢查這幾個
   有任何 ✗ 就 exit 1；⚠ 只提醒。 */
const fs=require('fs'), path=require('path'), vm=require('vm');
const PUB=path.join(__dirname,'..','public'), DIR=path.join(PUB,'gvideo');
const LEGACY_ART=new Set(['dg20261014b1']);   // 試做版的插圖名沒有加單元前綴

function run(file, ctx){
  ctx=ctx||{}; ctx.window=ctx.window||ctx; ctx.self=ctx.window; ctx.console=console; ctx.document={}; ctx.navigator={userAgent:''};
  vm.runInNewContext(fs.readFileSync(file,'utf8'), ctx, {filename:path.basename(file)});
  return ctx;
}
/* 文法頁的資料：找單元本體＋疊加層，用來比對例句有沒有抄 */
const site={}; site.window=site;
for(const f of ['data-grammar.js','data-a2.js','data-gramvis.js','data-gvplus.js','data-gramviz.js','data-daily.js']){
  try{ run(path.join(PUB,f),site); }catch(e){ console.warn('略過',f,e.message); }
}
const UNITS={};
(site.GRAMMAR||[]).forEach(u=>UNITS[u.id]=u);
((site.A2||{}).grammar||[]).forEach(u=>UNITS[u.id]=u);
(site.GRAMVIS||[]).forEach(u=>UNITS[u.id]=u);
((site.DAILY||{}).grammar||[]).forEach(u=>UNITS[u.id]=u);
const strs=(o,acc,d)=>{ acc=acc||[]; d=d||0; if(o==null||d>30) return acc;
  if(typeof o==='string') acc.push(o); else if(typeof o==='object') for(const k in o) strs(o[k],acc,d+1); return acc; };
const norm=s=>String(s).toLowerCase().replace(/[’‘]/g,"'").replace(/<[^>]*>/g,' ').replace(/[^a-z0-9' ]+/g,' ').replace(/\s+/g,' ').trim();
const grams=(s,n)=>{ const w=norm(s).split(' ').filter(Boolean), out=[]; for(let i=0;i+n<=w.length;i++) out.push(w.slice(i,i+n).join(' ')); return out; };

/* 先把全部影片檔載入（插圖名不可跨檔重複） */
const files=fs.readdirSync(DIR).filter(f=>/\.js$/.test(f)&&f!=='index.js').sort();
const artOwner={}, V={}, ART={};
for(const f of files){
  const id=f.replace(/\.js$/,'');
  let c; try{ c=run(path.join(DIR,f),{}); }catch(e){ V[id]={err:'載入失敗：'+e.message}; continue; }
  const arts=c.GVIDEO_ART||{};
  for(const k in arts){ (artOwner[k]=artOwner[k]||[]).push(id); ART[k]=arts[k]; }
  V[id]={d:(c.GVIDEO||{})[id], ids:Object.keys(c.GVIDEO||{}), arts:Object.keys(arts)};
}
const want=process.argv.slice(2).filter(a=>!a.startsWith('-'));
const list=want.length?want:Object.keys(V);
const OK_VIS=new Set(['title','timeline','cards','pattern','family','scene','vs','flow','speak','end']);
let fail=0;

for(const id of list){
  const E=[], W=[]; const v=V[id];
  if(!v){ console.log('✗ '+id+'：找不到 gvideo/'+id+'.js'); fail++; continue; }
  if(v.err){ console.log('✗ '+id+'：'+v.err); fail++; continue; }
  const d=v.d;
  if(!d){ console.log('✗ '+id+'：檔案裡沒有 window.GVIDEO["'+id+'"]（有的是 '+v.ids.join(',')+'）'); fail++; continue; }
  if(v.ids.length!==1) E.push('一個檔只能放一個單元，這裡有 '+v.ids.join(','));
  const unit=UNITS[id]; if(!unit) E.push('網站資料裡找不到單元 '+id);
  if(d.kind!=='gram') E.push('kind 要是 "gram"');
  ['title','titleCn','chapters','lines','cast','expr'].forEach(k=>{ if(!d[k]) E.push('缺 '+k); });
  const cast=d.cast||{}; if(!cast.N||!cast.A||!cast.T) E.push('cast 要有 N（旁白）、A（女聲）、T（男聲）');
  if(cast.A&&cast.A.voice!=='f') E.push('cast.A.voice 要是 f'); if(cast.T&&cast.T.voice!=='m') E.push('cast.T.voice 要是 m');
  const L=d.lines||[], CH=(d.chapters||[]).length, expr=d.expr||{};
  const artOk=k=>!k||!!ART[k];
  const needArt=(k,where)=>{ if(k&&!ART[k]) E.push(where+'：插圖 '+k+' 不存在'); };
  (d.titleArt||[]).forEach(k=>needArt(k,'titleArt'));
  needArt(d.sceneArt,'sceneArt');
  (d.timeline||[]).forEach((x,i)=>needArt(x.art,'timeline['+i+']'));
  (d.cards||[]).forEach((x,i)=>needArt(x.art,'cards['+i+']'));
  if(L.length){ if((L[0].vis||{}).type!=='title') E.push('第 1 句要是 title'); if((L[L.length-1].vis||{}).type!=='end') E.push('最後一句要是 end'); }
  const sceneArts=[]; let speakN=0, t=0, zhChars=0;
  L.forEach((l,i)=>{
    const at='第 '+(i+1)+' 句', vis=l.vis||{}, ty=vis.type;
    if(!(l.ch>=0&&l.ch<CH)) E.push(at+'：ch 超出 chapters');
    if(!!l.zh===!!l.en) E.push(at+'：zh 和 en 要擇一（旁白寫 zh、例句寫 en）');
    if(l.zh&&l.sp!=='N') E.push(at+'：中文旁白的 sp 要是 N');
    if(l.en&&!(l.sp==='A'||l.sp==='T')) E.push(at+'：英文例句的 sp 要是 A 或 T');
    if(l.en&&!l.cn) E.push(at+'：英文例句缺 cn');
    if(l.zh&&/[A-Za-z][.!?](\s|$)/.test(l.zh)) W.push(at+'：zh 裡有英文句點，中文語音可能會停頓');
    if(!OK_VIS.has(ty)) E.push(at+'：vis.type「'+ty+'」不允許'+(ty==='fix'||ty==='quiz'?'（不放常見錯誤與小測驗）':''));
    (l.hi||[]).forEach(h=>{ const s=l.zh||l.en||''; if(s.indexOf(h.t)<0) E.push(at+'：hi「'+h.t+'」不在句子裡');
      if(h.k&&!expr[h.k]) E.push(at+'：hi.k「'+h.k+'」不在 expr'); if(!(h.c>=1&&h.c<=4)) E.push(at+'：hi.c 要 1–4'); });
    if(vis.art) needArt(vis.art,at);
    if(ty==='scene'){ if(!vis.art) E.push(at+'：scene 每句都要指定 vis.art'); else sceneArts.push(vis.art); }
    if(ty==='vs'){ if(!vis.a||!vis.b) E.push(at+'：vs 要有 a、b'); else { needArt(vis.a.art,at); needArt(vis.b.art,at); } }
    if(ty==='family'){ needArt(vis.art,at); if((vis.items||[]).length>4) E.push(at+'：family 最多 4 項（多了手機放不下）'); }
    if(ty==='pattern'&&(vis.rows||[]).some(r=>(r.blocks||[]).some(b=>b.k==='x'))) E.push(at+'：pattern 不可用 k:"x"（會顯示成紅色刪除線＝錯字）；連接詞、補充字用 k:"n"');
    if(ty==='timeline'&&!(d.timeline||[]).length) E.push(at+'：用了 timeline 但沒有 d.timeline');
    if(ty==='cards'&&!(d.cards||[]).length) E.push(at+'：用了 cards 但沒有 d.cards');
    if(ty==='flow'&&!(d.flow||[]).length) E.push(at+'：用了 flow 但沒有 d.flow');
    if(ty==='speak'&&vis.n){
      if(!vis.show){ speakN++; if(!(l.pause>=3000)) E.push(at+'：換你說的情境句要 pause ≥ 3000');
        if(!vis.sit) E.push(at+'：換你說缺 sit');
        const nx=L[i+1]||{}, nv=nx.vis||{};
        if(!(nv.type==='speak'&&nv.show&&nv.n===vis.n)) E.push(at+'：下一句要是同題的答案（show:true）');
        else if(nv.a!==nx.en) E.push('第 '+(i+2)+' 句：答案 a 要跟 en 一樣'); }
    }
    if(l.zh) zhChars+=String(l.zh).replace(/[\s，。、：；！？「」『』（）]/g,'').length;
    t+=(l.zh?String(l.zh).replace(/[\s，。、：；！？「」『』（）]/g,'').length/4.3:String(l.say||l.en||'').split(/\s+/).filter(Boolean).length/2.4)+0.35+(l.pause||0)/1000;
  });
  const dup=sceneArts.filter((k,i)=>sceneArts.indexOf(k)!==i);
  if(dup.length) E.push('情境插圖重複：'+[...new Set(dup)].join(','));
  if(new Set(sceneArts).size<9) E.push('情境插圖要 ≥ 9 張不重複（現在 '+new Set(sceneArts).size+'）');
  if(speakN!==3) E.push('換你說要 3 題（現在 '+speakN+'）');
  if(!(d.timeline||d.cards)) E.push('要有 d.timeline 或 d.cards（第 2 段核心圖）');
  if(t<170||t>290) E.push('估計長度 '+Math.round(t)+' 秒，要在 170–290 秒（3–4 分）');
  /* 插圖：命名、跨檔重複、SVG 基本檢查 */
  v.arts.forEach(k=>{
    if(!LEGACY_ART.has(id)&&k.indexOf(id+'_')!==0) E.push('插圖名要用「'+id+'_」開頭：'+k);
    if(artOwner[k].length>1) E.push('插圖名跟其他檔重複：'+k+'（'+artOwner[k].join(',')+'）');
    const s=ART[k];
    if(!/viewBox="0 0 (200 150|64 64)"/.test(s)) E.push('插圖 '+k+'：viewBox 要 0 0 200 150');
    if(/undefined|NaN/.test(s)) E.push('插圖 '+k+'：有 undefined／NaN');
    for(const tag of s.match(/<[a-z]+\s[^>]*>/gi)||[]){
      const names=(tag.match(/\s([a-z-]+)=/gi)||[]).map(x=>x.trim().slice(0,-1).toLowerCase());
      const rep=names.filter((n,i)=>names.indexOf(n)!==i);
      if(rep.length){ E.push('插圖 '+k+'：同一個元素重複屬性 '+[...new Set(rep)].join(',')+'（後者會失效，改用 th(w)）'); break; }
    }
    for(const m of s.matchAll(/<text[^>]*>([^<]*)<\/text>/g)) if(m[1].length>6) E.push('插圖 '+k+'：SVG 文字太長「'+m[1]+'」（只允許 6 字內的標記）');
  });
  /* 例句不可抄文法頁：連續 8 個字相同就算（6 字仍會擋到 how long has it been since 這種句型骨架，逼出不自然的句子） */
  if(unit){
    const page=new Set(); strs(unit).concat(strs((site.GVPLUS||{})[id])).forEach(s=>grams(s,8).forEach(g=>page.add(g)));
    const mine=[]; L.forEach(l=>{ if(l.en) mine.push(l.en); const vis=l.vis||{}; if(vis.a&&vis.a.w) mine.push(vis.a.w); if(vis.b&&vis.b.w) mine.push(vis.b.w); });
    Object.values(expr).forEach(e=>e.ex&&mine.push(e.ex));
    [...new Set(mine)].forEach(s=>{ const hit=grams(s,8).find(g=>page.has(g)); if(hit) E.push('例句跟文法頁重疊「'+hit+'」：'+s); });
  }
  if(E.length){ fail++; console.log('✗ '+id); E.forEach(x=>console.log('    ✗ '+x)); }
  else console.log('✓ '+id+'  '+L.length+' 句 · 約 '+Math.round(t)+' 秒 · 情境圖 '+new Set(sceneArts).size+' 張');
  W.forEach(x=>console.log('    ⚠ '+x));
}
/* gvideo/index.js 有沒有跟檔案一致 */
try{ const c=run(path.join(DIR,'index.js'),{}); const a=(c.GVIDEO_IDS||[]).slice().sort().join(','), b=files.map(f=>f.replace(/\.js$/,'')).join(',');
  if(a!==b){ console.log('✗ gvideo/index.js 跟檔案不一致，跑 node b2lab/tools/build-gvideo-index.js'); fail++; } }
catch(e){ console.log('✗ gvideo/index.js 讀不到：'+e.message); fail++; }
console.log(fail?'\n有 '+fail+' 項沒過':'\n全部通過');
process.exit(fail?1:0);
