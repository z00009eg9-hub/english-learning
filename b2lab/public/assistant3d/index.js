const host=document.createElement('div');host.id='b2-assistant';document.body.append(host);
const root=host.attachShadow({mode:'open'});
root.innerHTML=`<style>
:host{--size:56px;position:fixed;right:18px;bottom:22px;z-index:90;font-family:system-ui,sans-serif;color:#302c27;font-size:14px;line-height:1.6}
*{box-sizing:border-box}button,input{font:inherit}button{cursor:pointer;color:inherit}button:focus-visible,input:focus-visible{outline:3px solid #bc6b2b;outline-offset:3px}[hidden]{display:none!important}
.launch{display:block;width:var(--size);height:var(--size);margin-left:auto;border:0;border-radius:50%;background:radial-gradient(circle at 30% 20%,#fff,#dddcd3);box-shadow:0 3px 14px #36261130;padding:0;position:relative}
.head{position:absolute;inset:7%;border-radius:50%;background:#2b393c;border:3px solid #eee9de;border-top-color:#ee893e}.head:before{content:'••';position:absolute;color:#b0e9d6;font-size:calc(var(--size)*.52);letter-spacing:calc(var(--size)*.1);left:14%;top:-19%}.head:after{content:'⌣';position:absolute;left:33%;top:24%;color:#b0e9d6;font-size:calc(var(--size)*.4)}
.launch canvas{position:absolute;inset:0;width:100%!important;height:100%!important}.launch.rendered .head{display:none}
:host([data-sleeping]) .head:before{content:'––';font-size:calc(var(--size)*.35);top:3%}:host([data-sleeping]) .launch:after{content:'z';position:absolute;right:-2px;top:-7px;border-radius:50%;background:#fffcf7;color:#756c60;font-size:12px;padding:0 4px}
.panel{position:absolute;right:0;bottom:calc(var(--size) + 14px);width:min(350px,calc(100vw - 28px));max-height:min(590px,calc(100dvh - 150px));overflow:auto;overscroll-behavior:contain;border:1px solid #dfd6c9;background:#fffcf7;border-radius:18px;box-shadow:0 10px 40px #36261126;padding:17px}
.top{display:flex;align-items:center;gap:5px}.top strong{flex:1}.icon{border:0;background:transparent;min-width:36px;min-height:36px;border-radius:8px}.sub{font-size:12px;color:#756c60;margin:5px 0 12px;overflow-wrap:anywhere}.actions{display:grid;grid-template-columns:1fr 1fr;gap:8px}.actions button,.control{background:#fff;border:1px solid #ddd1c1;border-radius:10px;padding:9px;min-height:42px}.actions button:hover,.control:hover{background:#fff0dc}.actions button[aria-pressed=true]{background:#fff0dc;border-color:#bc6b2b}.news-action{grid-column:1/-1}.output{margin-top:14px;overflow-wrap:anywhere}.output p{margin:8px 0}.en{font-size:16px;color:#25383c}.note{font-size:12px;color:#756c60}.row{display:flex;gap:8px;flex-wrap:wrap;margin-top:10px}.word{padding:12px 0;border-bottom:1px solid #eee3d5}.word b{color:#a3541e}.word .row{align-items:center;margin-top:0}.word .control{padding:5px 9px}.search-row{display:flex;gap:8px;margin:8px 0}.search-row input{width:0;min-width:0;flex:1;padding:9px;border:1px solid #ddd1c1;border-radius:9px;background:#fff;color:#302c27}.restore{border:1px solid #ddd1c1;border-radius:16px;background:#fffcf7;padding:4px 10px;font-size:12px}.feedback{color:#87511e}details{margin-top:9px}summary{cursor:pointer}.foot{display:flex;flex-wrap:wrap;gap:8px;justify-content:space-between;border-top:1px solid #eee3d5;margin-top:14px;padding-top:8px}.foot button{border:0;background:transparent;color:#756c60;padding:5px;font-size:12px;min-height:32px}
.status{min-height:1.6em;color:#87511e;font-size:12px}.notice{position:absolute;right:0;bottom:calc(var(--size) + 12px);width:min(285px,calc(100vw - 28px));border:1px solid #e8c7a3;border-radius:14px;background:#fff8eb;box-shadow:0 3px 16px #36261120;padding:12px}.notice p{margin:0}.notice .row{margin-top:5px;align-items:center}.notice .control{padding:5px 10px;min-height:36px}.notice-dismiss{margin-left:auto}
.tray{min-height:64px;border:1px dashed #d3b592;background:#fff9f0;border-radius:10px;padding:8px;display:flex;gap:6px;flex-wrap:wrap;align-content:flex-start}.bank{display:flex;gap:6px;flex-wrap:wrap;margin-top:10px}.token{border:1px solid #ddd1c1;border-radius:8px;background:#fff;padding:7px 9px;min-height:38px}.token:disabled{opacity:.3;cursor:default}.token.wrong{border-color:#b34b30;background:#fff0e9}.token.correct{border-color:#658b63;background:#eff8ed}.article{display:block;width:100%;text-align:left;margin:8px 0}.article span{display:block}.article small{color:#756c60}.answer{border-left:3px solid #ee893e;padding-left:10px;margin-top:10px}
@media(max-width:768px){:host{--size:48px;right:12px;bottom:calc(82px + env(safe-area-inset-bottom,0px))}.panel{max-height:calc(100dvh - 190px)}}
:host([data-mini]){--size:32px}
@media(prefers-reduced-motion:reduce){*{animation:none!important}}
</style>
<aside class="notice" aria-label="新文章提醒" hidden><p class="notice-text" role="status"></p><div class="row"><button class="control notice-view">查看</button><button class="icon notice-dismiss" aria-label="關閉新文章提醒">×</button></div></aside>
<section class="panel" role="dialog" aria-label="Benny 英文助理" hidden>
<div class="top"><strong>Benny 英文助理</strong><button class="icon close" aria-label="縮小助理面板">縮小</button></div>
<p class="sub"></p><div class="actions"><button data-action="search">單字查詢</button><button data-action="read">帶我跟讀</button><button data-action="quiz">單字小測</button><button data-action="practice">句子重組</button><button class="news-action" data-action="news">新文章</button></div>
<div class="foot"><button class="size">縮成迷你（32px）</button><button class="hide">隱藏助理</button></div>
<div class="output" aria-live="polite"></div><p class="status" role="status"></p>
</section><button class="launch" aria-label="開啟 Benny 英文助理" aria-expanded="false"><span class="head" aria-hidden="true"></span></button><button class="restore" hidden>顯示助理</button>`;
const q=s=>root.querySelector(s),panel=q('.panel'),launch=q('.launch'),out=q('.output'),api=window.b2Assistant;
const IDLE_MS=5*60*1000;
let head=null,loading=false,opened=false,current=null,selection='',selectionKey='',mode='',cursor=0;
let ownedAudio=false,audioToken=0,sleeping=false,lastUsed=Date.now(),mini=false,query='',puzzle=null,newsKey='',idleTimer;
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const text=s=>{const e=document.createElement('div');e.innerHTML=String(s||'');return e.textContent.trim();};
const stored=k=>{try{return localStorage.getItem('b2lab_assistant_'+k);}catch{return null;}};
function store(k,v){try{localStorage.setItem('b2lab_assistant_'+k,v);}catch{}}
function stop(){audioToken++;if(ownedAudio)api.stop();ownedAudio=false;q('.status').textContent='';}
function animate(){head?.setSleeping(sleeping);head?.animate(opened&&!sleeping&&!document.hidden&&!matchMedia('(prefers-reduced-motion: reduce)').matches,()=>ownedAudio&&api.busy());}
function wake(){lastUsed=Date.now();clearTimeout(idleTimer);idleTimer=setTimeout(idle,IDLE_MS);if(sleeping){sleeping=false;host.removeAttribute('data-sleeping');launch.setAttribute('aria-label','開啟 Benny 英文助理');animate();}}
function sync(){
 const next=api.context();
 if(!current||next.key!==current.key){
  stop();current=next;if(selectionKey!==next.key)selection='';cursor=0;puzzle=null;
  // 換課時查詢結果仍可保留，教材練習則重新從該課開始。
  if(mode!=='search'&&mode!=='news'){mode='';out.textContent='選一個功能，從這一課開始練習。';markMode();}
 }else current=next;
 q('.sub').textContent=current.title;
}
function markMode(){root.querySelectorAll('[data-action]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.action===mode)));}
async function ensureHead(){
 if(head||loading)return;loading=true;
 try{const {mountHead}=await import('./head.js');head=await mountHead(launch);launch.classList.add('rendered');}
 catch{ /* WebGL 不可用時保留圓形頭像與教學操作。 */ }
 finally{loading=false;animate();}
}
function open(){wake();opened=true;sync();panel.hidden=false;q('.notice').hidden=true;launch.setAttribute('aria-expanded','true');q('.close').focus();ensureHead();animate();}
function close(focus=true){opened=false;panel.hidden=true;launch.setAttribute('aria-expanded','false');stop();animate();if(focus)launch.focus();}
function size(){host.toggleAttribute('data-mini',mini);q('.size').textContent=mini?'恢復一般大小':'縮成迷你（32px）';}
launch.onclick=()=>opened?close():open();q('.close').onclick=()=>close();
q('.size').onclick=()=>{mini=!mini;store('mini',mini?'1':'0');size();close();};
q('.hide').onclick=()=>{close(false);launch.hidden=true;q('.restore').hidden=false;store('hidden','1');q('.restore').focus();};
q('.restore').onclick=()=>{launch.hidden=false;q('.restore').hidden=true;store('hidden','0');wake();launch.focus();checkNews(true);};
mini=stored('mini')==='1';size();if(stored('hidden')==='1'){launch.hidden=true;q('.restore').hidden=false;}
root.addEventListener('keydown',e=>{if(e.key==='Escape')close();});
['pointerdown','keydown','input'].forEach(type=>root.addEventListener(type,wake,{capture:true}));
document.addEventListener('visibilitychange',()=>{if(document.hidden)stop();else{idle();checkNews();}animate();});
// 只讀教材的選取文字，避開其他面板與輸入框。
document.addEventListener('selectionchange',()=>{
 const s=getSelection(),node=s?.anchorNode,parent=node?.nodeType===1?node:node?.parentElement;
 if(!s?.isCollapsed&&parent?.closest('main')&&!parent.closest('input,textarea')){
  selection=s.toString().trim().slice(0,600);selectionKey=api.context().key;
  if(mode==='search'&&opened&&selection.length<=100&&!/[.!?]/.test(selection))search(selection);
 }
});
document.addEventListener('click',()=>{if(opened)setTimeout(()=>{sync();checkNews();if(document.body.classList.contains('vd-lock'))close(false);},0);});
window.addEventListener('popstate',()=>{stop();if(opened)setTimeout(sync,0);});
const words=()=>{const seen=new Set();return(current.words||[]).filter(w=>{const k=w.w?.toLowerCase();if(!k||!w.cn||seen.has(k))return false;seen.add(k);return true;});};
function sentence(){const lines=current.lines||[];if(selection&&/[a-z]/i.test(selection))return {en:selection,cn:''};return lines[cursor%Math.max(1,lines.length)]||null;}
function speak(en,rate=1){
 wake();stop();const token=audioToken;ownedAudio=true;q('.status').textContent=rate<1?'正在慢速朗讀…':'正在朗讀…';
 try{api.speak(text(en),rate,()=>{if(token===audioToken){ownedAudio=false;q('.status').textContent='朗讀完成，可以跟著唸一次。';}});}
 catch{ownedAudio=false;q('.status').textContent='暫時無法朗讀，請再試一次。';}
}
function speaker(en,label='朗讀'){const b=document.createElement('button');b.className='control speaker';b.type='button';b.textContent='🔊 '+label;b.setAttribute('aria-label',label);b.onclick=()=>speak(en);return b;}
function read(){
 const s=sentence();if(!s){out.innerHTML='<p>請先開啟一篇課文，或選取教材中的英文句子。</p>';return;}
 out.innerHTML=`<p class="en">${esc(text(s.en))}</p>${s.cn?`<details><summary>看中文</summary><p>${esc(text(s.cn))}</p></details>`:''}<p class="note">先聽一次，再自己跟讀；這裡不錄音。</p><div class="row"><button class="control normal" aria-label="朗讀這一句">🔊 朗讀</button><button class="control slow">🔊 慢速</button><button class="control stop">停止</button><button class="control next">下一句</button></div>`;
 q('.normal').onclick=()=>speak(s.en);q('.slow').onclick=()=>speak(s.en,.8);q('.stop').onclick=stop;q('.next').onclick=()=>{stop();selection='';cursor++;read();};
}
function search(prefill){
 if(typeof prefill==='string')query=prefill;
 out.innerHTML=`<form class="search-form"><label for="word-query">輸入英文單字或片語</label><div class="search-row"><input id="word-query" aria-label="英文單字或片語" placeholder="例如 manage to" maxlength="100" autocomplete="off" autocapitalize="off" spellcheck="false" value="${esc(query)}"><button class="control" type="submit">查詢</button></div></form><div class="results"></div><p class="note">先查本課，再查全站已收錄字庫。也可選取文章中的英文帶入查詢。</p>`;
 q('.search-form').onsubmit=e=>{e.preventDefault();stop();query=q('#word-query').value.trim();results();};
 q('#word-query').oninput=e=>{query=e.target.value;};results();
}
function results(){
 const box=q('.results');box.replaceChildren();if(!query.trim()){box.textContent='輸入單字後按「查詢」。';return;}
 const found=api.search(query);if(!found.length){box.innerHTML=`<p>字庫尚未收錄「${esc(query)}」。</p>`;return;}
 for(const w of found){
  const el=document.createElement('div');el.className='word';
  el.innerHTML=`<div class="row"><b>${esc(w.w)}</b></div><p class="note">${esc([w.ipa,w.pos].filter(Boolean).join(' · '))}</p><p>${esc(w.cn)}</p>${w.def?`<p>${esc(text(w.def))}</p>`:''}${w.ex?`<p class="en">${esc(text(w.ex))}</p>`:''}${w.exCn?`<p>${esc(text(w.exCn))}</p>`:''}<p class="note">${esc(w.src||'全站字庫')}</p>`;
  el.querySelector('.row').append(speaker(w.w,'單字發音'));if(w.ex)el.append(speaker(w.ex,'朗讀例句'));box.append(el);
 }
}
function shuffle(items){const a=items.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
function quiz(){
 const ws=words();if(ws.length<3){out.innerHTML='<p>這一頁的單字不足三個，請開啟課本或閱讀文章再練習。</p>';return;}
 const answer=ws[cursor%ws.length],wrong=[...new Map(ws.filter(w=>w.cn!==answer.cn).map(w=>[w.cn,w])).values()];
 if(wrong.length<2){out.textContent='本課的不同字義不足，請換一課練習。';return;}
 const options=shuffle([answer,...wrong.slice(0,2)]);
 out.innerHTML=`<p>哪個是 <b>${esc(answer.w)}</b> 在本課的意思？</p><div class="row">${options.map((w,i)=>`<button class="control option" data-i="${i}">${esc(w.cn)}</button>`).join('')}</div><p class="feedback" role="status"></p><button class="control next">下一題</button>`;
 root.querySelectorAll('.option').forEach(b=>b.onclick=()=>{q('.feedback').textContent=options[+b.dataset.i]===answer?'答對了！':'再想一下，或用「單字查詢」查看提示。';});q('.next').onclick=()=>{cursor++;quiz();};
}
function practice(){
 const seen=new Set(),examples=words().filter(w=>w.ex).map(w=>({en:w.ex,cn:w.exCn})).concat(current.lines||[]).filter(s=>{
  const en=text(s.en),n=en.split(/\s+/).length;if(n<4||n>18||/[\u3400-\u9fff]/.test(en)||seen.has(en))return false;seen.add(en);return true;
 });
 if(!examples.length){out.textContent='這一頁沒有適合的教材例句，請開啟課本或閱讀文章。';return;}
 const s=examples[cursor%examples.length],tokens=text(s.en).split(/\s+/);let order=shuffle(tokens.map((_,i)=>i));
 if(order.every((v,i)=>tokens[v]===tokens[i]))order=order.slice(1).concat(order[0]);puzzle={tokens,order,picked:[],s};
 out.innerHTML=`<p>依教材原句重組，點下方詞塊排列；點已選詞塊可退回。</p>${s.cn?`<p>${esc(text(s.cn))}</p>`:''}<div class="tray" role="group" aria-label="你的句子"></div><div class="bank" role="group" aria-label="可選詞塊"></div><p class="feedback" role="status"></p><div class="row"><button class="control check">檢查答案</button><button class="control reset">重排</button><button class="control reveal">看答案</button><button class="control next">下一題</button></div><div class="answer" hidden></div><p class="note">依本課原句核對詞序，不判斷其他自由造句的文法。</p>`;
 function render(){
  const tray=q('.tray'),bank=q('.bank');tray.replaceChildren();bank.replaceChildren();
  puzzle.picked.forEach((index,position)=>{const b=document.createElement('button');b.className='token';b.textContent=tokens[index];b.setAttribute('aria-label','移除 '+tokens[index]);b.onclick=()=>{puzzle.picked.splice(position,1);q('.feedback').textContent='';render();};tray.append(b);});
  order.forEach(index=>{const b=document.createElement('button');b.className='token';b.textContent=tokens[index];b.dataset.index=index;b.disabled=puzzle.picked.includes(index);b.onclick=()=>{puzzle.picked.push(index);q('.feedback').textContent='';render();};bank.append(b);});
 }
 q('.check').onclick=()=>{
  if(puzzle.picked.length!==tokens.length){q('.feedback').textContent='還有詞塊沒排進句子，完成後再檢查。';return;}
  let correct=true;q('.tray').querySelectorAll('button').forEach((b,i)=>{const ok=tokens[puzzle.picked[i]]===tokens[i];b.classList.add(ok?'correct':'wrong');if(!ok)correct=false;});
  q('.feedback').textContent=correct?'答對了！和教材原句相同。':'標色的位置與教材原句不同，調整後再檢查。';
 };
 q('.reset').onclick=()=>{puzzle.picked=[];q('.feedback').textContent='';q('.answer').hidden=true;render();};
 q('.reveal').onclick=()=>{const a=q('.answer');a.hidden=false;a.innerHTML=`<p class="en">${esc(text(s.en))}</p>${s.cn?`<p>${esc(text(s.cn))}</p>`:''}`;a.append(speaker(s.en,'朗讀答案'));};
 q('.next').onclick=()=>{stop();cursor++;practice();};render();
}
function news(){
 const n=api.news();out.innerHTML=`<p>${esc(n.date)}${n.articles.length?' · 今天有 '+n.articles.length+' 篇新文章':' · 今天尚無新文章'}</p><div class="articles"></div>`;
 n.articles.forEach(a=>{const b=document.createElement('button');b.className='control article';b.innerHTML=`<small>${esc(a.level||'')}</small><span>${esc(a.title)}</span><small>${esc(a.titleCn||'')}</small>`;b.onclick=()=>{close(false);api.openArticle(a.id);};q('.articles').append(b);});
}
function checkNews(force=false){
 const n=api.news(),key=n.profile+':'+n.date;if(!force&&newsKey===key)return;newsKey=key;
 q('.notice').hidden=true;q('.news-action').textContent='新文章'+(n.articles.length?'（'+n.articles.length+'）':'');if(mode==='news'&&opened)news();
 if(!n.articles.length||opened||sleeping||launch.hidden||document.hidden||stored('news_'+n.profile)===n.date)return;
 q('.notice-text').textContent='今天有 '+n.articles.length+' 篇新文章';q('.notice').hidden=false;store('news_'+n.profile,n.date);
}
q('.notice-dismiss').onclick=()=>{q('.notice').hidden=true;};q('.notice-view').onclick=()=>{open();mode='news';markMode();news();};
function idle(){
 clearTimeout(idleTimer);if(sleeping)return;
 const left=IDLE_MS-(Date.now()-lastUsed);
 if(left>0||api.busy()){idleTimer=setTimeout(idle,left>0?left:15000);return;}
 sleeping=true;host.setAttribute('data-sleeping','');q('.notice').hidden=true;close(false);launch.setAttribute('aria-label','Benny 正在睡眠，點一下喚醒');
}
root.querySelectorAll('[data-action]').forEach(b=>b.onclick=()=>{
 sync();stop();const next=b.dataset.action;if(next===mode&&next==='practice'&&puzzle)return;mode=next;markMode();
 if(mode==='search')search(selection&&selection.length<=100&&!/[.!?]/.test(selection)?selection:query);else ({read,quiz,practice,news})[mode]();
});
idleTimer=setTimeout(idle,IDLE_MS);setInterval(checkNews,15000);checkNews();
window.addEventListener('pagehide',()=>{stop();head?.destroy();head=null;launch.classList.remove('rendered');});
window.addEventListener('pageshow',()=>{idle();checkNews();if(opened&&!head)ensureHead();});
