const host=document.createElement('div');host.id='b2-assistant';document.body.append(host);
const root=host.attachShadow({mode:'open'});
root.innerHTML=`<style>
:host{position:fixed;right:18px;bottom:22px;z-index:90;font-family:system-ui,sans-serif;color:#302c27;font-size:14px;line-height:1.6}
*{box-sizing:border-box}button,input,textarea{font:inherit}button{cursor:pointer;color:inherit}button:focus-visible,input:focus-visible,textarea:focus-visible{outline:3px solid #bc6b2b;outline-offset:3px}[hidden]{display:none!important}
.launch{display:block;width:56px;height:56px;margin-left:auto;border:0;border-radius:50%;background:radial-gradient(circle at 30% 20%,#fff,#dddcd3);box-shadow:0 3px 14px #36261130;padding:0;position:relative}
.head{position:absolute;inset:4px;border-radius:50%;background:#2b393c;border:4px solid #eee9de;border-top-color:#ee893e}.head:before{content:'••';position:absolute;color:#b0e9d6;font-size:29px;letter-spacing:8px;left:6px;top:-7px}.head:after{content:'⌣';position:absolute;left:12px;top:12px;color:#b0e9d6;font-size:22px}
.launch canvas{position:absolute;inset:0;width:100%!important;height:100%!important}.launch.rendered .head{display:none}
.panel{position:absolute;right:0;bottom:70px;width:min(350px,calc(100vw - 28px));max-height:min(570px,calc(100dvh - 150px));overflow:auto;overscroll-behavior:contain;border:1px solid #dfd6c9;background:#fffcf7;border-radius:18px;box-shadow:0 10px 40px #36261126;padding:17px}
.top{display:flex;align-items:center;gap:8px}.top strong{flex:1}.icon{border:0;background:transparent;min-width:36px;min-height:36px;border-radius:8px}.sub{font-size:12px;color:#756c60;margin:5px 0 12px;overflow-wrap:anywhere}.actions{display:grid;grid-template-columns:1fr 1fr;gap:8px}.actions button,.control{background:#fff;border:1px solid #ddd1c1;border-radius:10px;padding:9px;min-height:42px}.actions button:hover,.control:hover{background:#fff0dc}.actions button[aria-pressed=true]{background:#fff0dc;border-color:#bc6b2b}.output{margin-top:14px;overflow-wrap:anywhere}.output p{margin:8px 0}.en{font-size:16px;color:#25383c}.note{font-size:12px;color:#756c60}.row{display:flex;gap:8px;flex-wrap:wrap;margin-top:10px}.word{padding:9px 0;border-bottom:1px solid #eee3d5}.word b{color:#a3541e}textarea{display:block;width:100%;min-height:80px;margin-top:10px;padding:9px;border:1px solid #ddd1c1;border-radius:9px;background:#fff;color:#302c27}.restore{border:1px solid #ddd1c1;border-radius:16px;background:#fffcf7;padding:4px 10px;font-size:12px}.feedback{color:#87511e}details{margin-top:9px}summary{cursor:pointer}
@media(max-width:768px){:host{right:12px;bottom:calc(82px + env(safe-area-inset-bottom,0px))}.launch{width:48px;height:48px}.panel{bottom:60px;max-height:calc(100dvh - 190px)}}
@media(prefers-reduced-motion:reduce){*{animation:none!important}}
</style>
<section class="panel" role="dialog" aria-label="Benny 英文助理" hidden>
<div class="top"><strong>Benny 英文助理</strong><button class="icon hide" aria-label="隱藏助理" title="隱藏助理">−</button><button class="icon close" aria-label="關閉助理面板">×</button></div>
<p class="sub"></p><div class="actions"><button data-action="hint">教材提示</button><button data-action="read">帶我跟讀</button><button data-action="quiz">單字小測</button><button data-action="practice">造句練習</button></div>
<div class="output" aria-live="polite"></div>
</section><button class="launch" aria-label="開啟 Benny 英文助理" aria-expanded="false"><span class="head" aria-hidden="true"></span></button><button class="restore" hidden>顯示助理</button>`;
const q=s=>root.querySelector(s), panel=q('.panel'),launch=q('.launch'),out=q('.output');
const api=window.b2Assistant;
let head=null,loading=false,opened=false,current=null,selection='',selectionKey='',mode='',cursor=0,ownedAudio=false,audioToken=0;
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const text=s=>{const e=document.createElement('div');e.innerHTML=String(s||'');return e.textContent.trim();};
function store(v){try{localStorage.setItem('b2lab_assistant_hidden',v?'1':'0');}catch{}}
function stop(){audioToken++;if(ownedAudio)api.stop();ownedAudio=false;}
function sync(){const next=api.context();if(!current||next.key!==current.key){stop();current=next;if(selectionKey!==next.key)selection='';cursor=0;mode='';out.textContent='選一個功能，從這一課開始練習。';root.querySelectorAll('[data-action]').forEach(b=>b.setAttribute('aria-pressed','false'));}else current=next;q('.sub').textContent=current.title;}
function animate(){head?.animate(opened&&!document.hidden&&!matchMedia('(prefers-reduced-motion: reduce)').matches,()=>ownedAudio&&api.busy());}
async function open(){opened=true;sync();panel.hidden=false;launch.setAttribute('aria-expanded','true');q('.close').focus();
  if(!head&&!loading){loading=true;try{const {mountHead}=await import('./head.js');head=await mountHead(launch);launch.classList.add('rendered');}catch{ /* WebGL 不可用時保留圓形頭像。 */ }finally{loading=false;animate();}}
  animate();
}
function close(){opened=false;panel.hidden=true;launch.setAttribute('aria-expanded','false');stop();animate();launch.focus();}
launch.onclick=()=>opened?close():open();q('.close').onclick=close;
q('.hide').onclick=()=>{close();launch.hidden=true;q('.restore').hidden=false;store(true);q('.restore').focus();};
q('.restore').onclick=()=>{launch.hidden=false;q('.restore').hidden=true;store(false);launch.focus();};
try{if(localStorage.getItem('b2lab_assistant_hidden')==='1'){launch.hidden=true;q('.restore').hidden=false;}}catch{}
root.addEventListener('keydown',e=>{if(e.key==='Escape')close();});
document.addEventListener('visibilitychange',()=>{if(document.hidden)stop();animate();});
// 只讀取教材區的選取文字，避免收集輸入框、其他面板或使用者私密內容。
document.addEventListener('selectionchange',()=>{
 const s=getSelection();const node=s?.anchorNode;const parent=node?.nodeType===1?node:node?.parentElement;
 if(!s?.isCollapsed&&parent?.closest('main')&&!parent.closest('input,textarea')){selection=s.toString().trim().slice(0,600);selectionKey=api.context().key;}
});
document.addEventListener('click',()=>{if(opened)setTimeout(()=>{sync();if(document.body.classList.contains('vd-lock'))close();},0);});
window.addEventListener('popstate',()=>{stop();if(opened)setTimeout(sync,0);});
const words=()=>{const seen=new Set();return(current.words||[]).filter(w=>{const k=w.w?.toLowerCase();if(!k||!w.cn||seen.has(k))return false;seen.add(k);return true;});};
function sentence(){const lines=current.lines||[];if(selection&&/[a-z]/i.test(selection))return {en:selection,cn:''};return lines[cursor%Math.max(1,lines.length)]||null;}
function speak(en,rate){stop();const token=audioToken;ownedAudio=true;api.speak(text(en),rate,()=>{if(token===audioToken)ownedAudio=false;});}
function read(){const s=sentence();if(!s){out.innerHTML='<p>請先開啟一篇課文，或選取教材中的英文句子。</p>';return;}
 out.innerHTML=`<p class="en">${esc(text(s.en))}</p>${s.cn?`<details><summary>看中文</summary><p>${esc(text(s.cn))}</p></details>`:''}<p class="note">先聽一次，再自己跟讀；這裡不錄音。</p><div class="row"><button class="control normal">播放</button><button class="control slow">慢速</button><button class="control stop">停止</button><button class="control next">下一句</button></div>`;
 q('.normal').onclick=()=>speak(s.en,1);q('.slow').onclick=()=>speak(s.en,.8);q('.stop').onclick=stop;q('.next').onclick=()=>{stop();selection='';cursor++;read();};
}
function hint(){const ws=words();const selected=selection.toLowerCase();const hits=selected?ws.filter(w=>selected.includes(w.w.toLowerCase())):ws.slice(0,4);
 out.innerHTML=(selection?`<p class="en">${esc(selection)}</p>`:'')+(hits.length?hits.slice(0,6).map(w=>`<div class="word"><b>${esc(w.w)}</b> · ${esc(w.cn)}${w.ex?`<p>${esc(text(w.ex))}</p>`:''}${w.exCn?`<p class="note">${esc(text(w.exCn))}</p>`:''}</div>`).join(''):'<p>請先開啟課本或閱讀文章；也可以選取一句英文，再按「帶我跟讀」。</p>')+'<p class="note">提示取自本課教材。選取英文後可查看其中收錄的單字。</p>';
}
function quiz(){const ws=words();if(ws.length<3){out.innerHTML='<p>這一頁的單字不足三個，請開啟課本或閱讀文章再練習。</p>';return;}
 const answer=ws[cursor%ws.length];const wrong=[...new Map(ws.filter(w=>w.cn!==answer.cn).map(w=>[w.cn,w])).values()];if(wrong.length<2){out.textContent='本課的不同字義不足，請換一課練習。';return;}
 const options=[answer,...wrong.slice(0,2)];
 for(let i=options.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[options[i],options[j]]=[options[j],options[i]];}
 out.innerHTML=`<p>哪個是 <b>${esc(answer.w)}</b> 在本課的意思？</p><div class="row">${options.map((w,i)=>`<button class="control option" data-i="${i}">${esc(w.cn)}</button>`).join('')}</div><p class="feedback" role="status"></p><button class="control next">下一題</button>`;
 root.querySelectorAll('.option').forEach(b=>b.onclick=()=>{q('.feedback').textContent=options[+b.dataset.i]===answer?'答對了！':'再想一下，或回到教材查看提示。';});q('.next').onclick=()=>{cursor++;quiz();};
}
function practice(){const ws=words(),w=ws[cursor%Math.max(1,ws.length)];if(!w){out.textContent='請先開啟有單字的課本或閱讀文章。';return;}
 out.innerHTML=`<p>用 <b>${esc(w.w)}</b>（${esc(w.cn)}）寫一句與自己有關的英文。</p><textarea aria-label="英文造句" placeholder="Write your sentence here…" maxlength="600"></textarea><p class="note">草稿只留在這次面板中，不會上傳。請自行核對用字與句型。</p>${w.ex?`<details><summary>參考本課例句</summary><p class="en">${esc(text(w.ex))}</p><p>${esc(text(w.exCn||''))}</p></details>`:''}<div class="row"><button class="control next">換一個字</button></div>`;
 q('.next').onclick=()=>{cursor++;practice();};
}
root.querySelectorAll('[data-action]').forEach(b=>b.onclick=()=>{sync();stop();mode=b.dataset.action;root.querySelectorAll('[data-action]').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));({hint,read,quiz,practice})[mode]();});
window.addEventListener('pagehide',()=>{stop();head?.destroy();head=null;launch.classList.remove('rendered');});
window.addEventListener('pageshow',()=>{if(opened&&!head){open();}});
