// 沿用本機 Three.js 與已確認的人物造型，避免外部模型或付費服務。
export async function mountHead(host){
 const T=await import('../work3d/vendor/three.module.js');
 const renderer=new T.WebGLRenderer({alpha:true,antialias:true});renderer.setPixelRatio(Math.min(devicePixelRatio,2));renderer.setSize(56,56);renderer.setClearColor(0,0);renderer.outputColorSpace=T.SRGBColorSpace;renderer.toneMapping=T.ACESFilmicToneMapping;renderer.toneMappingExposure=1.22;host.append(renderer.domElement);
 const scene=new T.Scene(),camera=new T.OrthographicCamera(-1.52,1.52,1.52,-1.52,.1,30);camera.position.set(0,.04,9);camera.lookAt(0,.04,0);
 scene.add(new T.HemisphereLight(0xe6f3ff,0xb1a0a1,2.2));for(const [color,intensity,pos] of [[0xfff0dd,3,[-3,5,5]],[0xd7e8ff,1.2,[4,1,2]],[0xdceaff,2,[2,4,-4]]]){const l=new T.DirectionalLight(color,intensity);l.position.set(...pos);scene.add(l);}
 const model=new T.Group(),head=new T.Group();head.rotation.z=.10;model.add(head);scene.add(model);
const material=(color,roughness=.72)=>new T.MeshStandardMaterial({color,roughness,metalness:0});
function mesh(parent,geo,mat,x=0,y=0,z=0){const m=new T.Mesh(geo,mat);m.position.set(x,y,z);parent.add(m);return m;}
function ellipsoid(parent,mat,x,y,z,sx,sy,sz){const m=mesh(parent,new T.SphereGeometry(1,64,48),mat,x,y,z);m.scale.set(sx,sy,sz);return m;}
function tube(parent,points,r,mat,closed=false){const c=new T.CatmullRomCurve3(points.map(p=>new T.Vector3(...p)),closed,'centripetal');return mesh(parent,new T.TubeGeometry(c,Math.max(32,points.length*5),r,10,closed),mat);}
function rounded(parent,w,h,d,r,mat,x,y,z){const s=new T.Shape();s.moveTo(-w/2+r,-h/2);s.lineTo(w/2-r,-h/2);s.quadraticCurveTo(w/2,-h/2,w/2,-h/2+r);s.lineTo(w/2,h/2-r);s.quadraticCurveTo(w/2,h/2,w/2-r,h/2);s.lineTo(-w/2+r,h/2);s.quadraticCurveTo(-w/2,h/2,-w/2,h/2-r);s.lineTo(-w/2,-h/2+r);s.quadraticCurveTo(-w/2,-h/2,-w/2+r,-h/2);const bevel=Math.min(.045,d/3);const g=new T.ExtrudeGeometry(s,{depth:d-2*bevel,bevelEnabled:true,bevelThickness:bevel,bevelSize:bevel,bevelSegments:5,steps:1,curveSegments:18});g.translate(0,0,-d/2+bevel);return mesh(parent,g,mat,x,y,z);}
const skin=material(0xffcfad,.86),inner=material(0xf6ad91,.9),hair=material(0x25242e,.96),hairLight=material(0x2a2933,.96),frameMaterial=material(0x47434a,.94),eye=material(0x17191d,.78),shirt=material(0xfff0f2,.9),seam=material(0xf0d9de,.9),blue=material(0x527ec1,.72),navy=material(0x344f85,.74),gold=material(0xf4b74f,.55);
skin.emissive.setHex(0xffb987);skin.emissiveIntensity=.13;
const ry=1.02,rz=1.0;
ellipsoid(head,skin,0,0,0,1,ry,rz);
for(const s of [-1,1]){ellipsoid(head,skin,s*1.005,-.18,.035,.145,.195,.12);ellipsoid(head,inner,s*1.075,-.18,.105,.048,.10,.032);}
const faceZ=(x,y)=>rz*Math.sqrt(Math.max(.015,1-x*x-y*y/(ry*ry)));
function faceOval(x,y,sx,sy,mat,offset=.012){const m=ellipsoid(head,mat,x,y,faceZ(x,y)+offset,sx,sy,.025);const n=new T.Vector3(x,y/(ry*ry),faceZ(x,y)/(rz*rz)).normalize();m.quaternion.setFromUnitVectors(new T.Vector3(0,0,1),n);return m;}
const blushCanvas=document.createElement('canvas');blushCanvas.width=128;blushCanvas.height=128;const bc=blushCanvas.getContext('2d'),bg=bc.createRadialGradient(64,64,12,64,64,64);bg.addColorStop(0,'rgba(247,151,129,.73)');bg.addColorStop(.62,'rgba(247,151,129,.54)');bg.addColorStop(1,'rgba(247,151,129,0)');bc.fillStyle=bg;bc.fillRect(0,0,128,128);const blushTexture=new T.CanvasTexture(blushCanvas);blushTexture.colorSpace=T.SRGBColorSpace;const blushMat=new T.MeshBasicMaterial({map:blushTexture,transparent:true,depthWrite:false});
const eyes=[];for(const s of [-1,1]){eyes.push(faceOval(s*.34,-.015,.068,.157,eye,.027));const x=s*.57,y=-.31,z=faceZ(x,y),blush=mesh(head,new T.PlaneGeometry(.34,.20),blushMat,x,y,z+.013);blush.quaternion.setFromUnitVectors(new T.Vector3(0,0,1),new T.Vector3(x,y/(ry*ry),z/(rz*rz)).normalize());}
const lids=[];for(const s of [-1,1])lids.push(tube(head,Array.from({length:14},(_,i)=>{const x=s*.34-.075+i/13*.15,y=-.02-.025*Math.sin(i/13*Math.PI);return[x,y,faceZ(x,y)+.034]}),.012,eye));lids.forEach(m=>m.visible=false);
// 鏡框沿球面彎曲，細框與鏡腳都保留真正的厚度。
for(const s of [-1,1]){const pts=[];for(let i=0;i<80;i++){const t=i/80*Math.PI*2,x=s*.385+.322*Math.sign(Math.cos(t))*Math.pow(Math.abs(Math.cos(t)),.74),y=.04+.245*Math.sign(Math.sin(t))*Math.pow(Math.abs(Math.sin(t)),.85);pts.push([x,y,faceZ(x,y)+.037]);}tube(head,pts,.012,frameMaterial,true);tube(head,[[s*.67,.13,faceZ(s*.67,.13)+.06],[s*.85,.10,.51],[s*1.01,.02,.1],[s*.99,-.10,-.12]],.014,frameMaterial);}
tube(head,[[-.075,.105,faceZ(-.075,.105)+.038],[0,.14,faceZ(0,.14)+.04],[.075,.105,faceZ(.075,.105)+.038]],.012,frameMaterial);
const hairObjectsStart=head.children.length;
// 後腦髮線延伸到後頸，前側保留額頭；邊界只有柔和的小撮起伏。
function boundary(phi){const a=Math.abs(phi);if(a<.70)return 1.12+.04*Math.sin(phi*2);if(a<1.35){const t=(a-.70)/.65;return 1.15+.76*(t*t*(3-2*t));}const t=Math.min(1,(a-1.35)/.65);return 1.91+.22*(t*t*(3-2*t))+.055*Math.sin(phi*9+.6);}
function hp(phi,theta,extra=0){const sn=Math.sin(theta),rear=Math.max(0,-Math.cos(phi)),wave=.024*Math.pow(Math.max(0,Math.cos(phi*11+theta*1.9)),6)*Math.sin(theta);return new T.Vector3((1.065+extra+wave)*sn*Math.sin(phi),.055+(ry+.10+extra+wave)*Math.cos(theta),(rz+.075+extra+wave)*sn*Math.cos(phi));}
const hv=[],hi=[],U=144,V=48;for(let j=0;j<=V;j++)for(let i=0;i<=U;i++){const phi=-Math.PI+i/U*Math.PI*2;hv.push(...hp(phi,boundary(phi)*j/V).toArray());}for(let j=0;j<V;j++)for(let i=0;i<U;i++){const a=j*(U+1)+i,b=a+U+1;hi.push(a,b,a+1,b,b+1,a+1);}const hg=new T.BufferGeometry();hg.setAttribute('position',new T.Float32BufferAttribute(hv,3));hg.setIndex(hi);hg.computeVertexNormals();hair.side=T.DoubleSide;mesh(head,hg,hair);
// 直接沿原圖的外輪廓與瀏海描出曲線，保留不對稱髮量與每一束的方向。
const S=1/350,X=x=>(x-650)*S,Y=y=>((575-y)+Math.max(0,y-495)*.22)*S;
function commands(list){const s=new T.Shape();for(const c of list){if(c[0]==='M')s.moveTo(X(c[1]),Y(c[2]));else if(c[0]==='L')s.lineTo(X(c[1]),Y(c[2]));else if(c[0]==='C')s.bezierCurveTo(X(c[1]),Y(c[2]),X(c[3]),Y(c[4]),X(c[5]),Y(c[6]));else s.closePath();}return s;}
function outline(points){return commands(points.map((p,i)=>[i?'L':'M',...p]).concat([['Z']]));}
const frontHairZ=(x,y)=>{const px=X(x),py=Y(y);return Math.max(faceZ(px,py)+.025,1.055*Math.sqrt(Math.max(.014,1-(px/1.16)**2-((py-.04)/1.29)**2)));};
function surface(shape,zfn,color,parent=head){const source=new T.ShapeGeometry(shape,28),a=source.attributes.position,ix=source.index.array,verts=[];
function emit(p){verts.push(p[0],p[1],zfn(p[0]/S+650,((575-p[1]/S)>495?((575-p[1]/S)-108.9)/.78:(575-p[1]/S))));}
function split(p,q,r,n){const lengths=[Math.hypot(p[0]-q[0],p[1]-q[1]),Math.hypot(q[0]-r[0],q[1]-r[1]),Math.hypot(r[0]-p[0],r[1]-p[1])],mx=Math.max(...lengths),mid=(a,b)=>[(a[0]+b[0])/2,(a[1]+b[1])/2];if(n<9&&mx>.105){if(mx===lengths[0]){const m=mid(p,q);split(p,m,r,n+1);split(m,q,r,n+1);}else if(mx===lengths[1]){const m=mid(q,r);split(p,q,m,n+1);split(p,m,r,n+1);}else{const m=mid(r,p);split(p,q,m,n+1);split(m,q,r,n+1);}return;}emit(p);emit(q);emit(r);}
for(let i=0;i<ix.length;i+=3)split(...[ix[i],ix[i+1],ix[i+2]].map(j=>[a.getX(j),a.getY(j)]),0);source.dispose();const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(verts,3));g.computeVertexNormals();const mat=material(color,.96);mat.side=T.DoubleSide;mesh(parent,g,mat);}
function shell(shape){surface(shape,frontHairZ,0x292831);surface(shape,(x,y)=>frontHairZ(x,y)-.040,0x25242d);const p=shape.getPoints(220),v=[];for(let i=0;i<p.length;i++){const a=p[i],b=p[(i+1)%p.length],za=frontHairZ(a.x/S+650,((575-a.y/S)>495?((575-a.y/S)-108.9)/.78:(575-a.y/S))),zb=frontHairZ(b.x/S+650,((575-b.y/S)>495?((575-b.y/S)-108.9)/.78:(575-b.y/S)));v.push(a.x,a.y,za,b.x,b.y,zb,a.x,a.y,za-.040,a.x,a.y,za-.040,b.x,b.y,zb,b.x,b.y,zb-.040);}const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(v,3));g.computeVertexNormals();mesh(head,g,hair);}

  const hairOuter=[[457,239],[446,229],[447,205],[465,225],[473,199],[496,171],[527,151],[508,173],[500,193],[538,163],[571,145],[608,139],[584,159],[651,141],[677,142],[657,157],[713,148],[765,165],[744,175],[786,172],[836,192],[877,224],[842,212],[881,246],[848,233],[901,280],[932,321],[946,346],[923,325],[946,376],[961,416],[960,444],[943,413],[951,457],[951,501],[938,541],[925,571],[913,618],[895,645]];
  const hairLeft=[[344,619],[327,591],[307,552],[295,516],[287,477],[287,449],[294,411],[319,368],[302,366],[322,334],[343,308],[370,281],[402,261],[379,254],[409,239],[439,230]];
  const hairFringe=[[900,596],[894,555],[881,518],[859,472],[838,419],[837,451],[824,422],[800,393],[790,371],[794,411],[789,455],[772,420],[739,371],[757,427],[756,460],[723,431],[686,406],[654,383],[670,431],[719,476],[674,465],[637,446],[604,419],[591,402],[596,438],[603,477],[570,450],[547,428],[526,400],[521,437],[505,475],[492,499],[486,478],[479,518],[461,551],[448,582],[438,624],[444,656],[457,690],[435,673],[411,635],[405,612],[392,620],[369,630],[356,651]];

// 以長短不一的彎曲髮束取代直線鋸齒，尖端保持在鏡框上方。
const curvedFringe=[
 ['C',907,585,887,493,851,421],
 ['C',856,434,852,445,847,451],
 ['C',829,417,810,389,783,369],
 ['C',797,401,804,428,795,451],
 ['C',776,425,753,387,721,366],
 ['C',736,399,747,428,739,458],
 ['C',714,443,684,410,652,379],
 ['C',661,409,682,436,699,449],
 ['C',650,446,611,416,587,385],
 ['C',588,416,600,439,614,455],
 ['C',571,440,543,413,525,388],
 ['C',522,417,506,445,489,466],
 ['C',485,444,482,429,483,413],
 ['C',463,446,449,479,433,501],
 ['C',424,532,424,563,433,585],
 ['L',405,612],['L',392,620],['L',369,630],['L',356,651]
];
const frontHair=commands(hairOuter.map((p,i)=>[i?'L':'M',...p]).concat(curvedFringe,hairLeft.map(p=>['L',...p]),[['Z']]));
shell(frontHair);
  const locks=[
   [0x23232c,[['M',492,278],['C',490,230,500,191,529,151],['L',498,177],['C',474,198,462,220,462,251],['Z']]],
   [0x22222b,[['M',498,273],['C',520,213,574,188,622,208],['C',581,210,546,232,526,253],['C',563,244,604,247,627,264],['C',578,260,540,260,498,273],['Z']]],
   [0x23232c,[['M',630,187],['C',667,150,711,147,750,165],['C',699,163,665,176,630,187],['Z']]],
   [0x25252e,[['M',650,208],['C',741,186,825,221,880,276],['C',831,248,794,236,746,234],['C',807,269,844,322,856,369],['C',819,333,781,301,741,284],['C',781,328,794,365,794,402],['C',760,354,727,321,693,306],['C',722,347,734,382,738,415],['C',693,349,647,306,598,280],['Z']]],
   [0x22232b,[['M',473,290],['C',411,319,375,377,369,436],['C',363,395,375,354,407,316],['C',436,297,453,287,473,290],['Z']]],
   [0x22232b,[['M',445,354],['C',401,416,383,503,387,567],['C',362,531,357,469,375,413],['C',397,386,418,364,445,354],['Z']]],
   [0x24242d,[['M',482,318],['C',477,392,477,446,460,492],['C',460,442,452,421,457,384],['C',463,359,470,338,482,318],['Z']]],
   [0x24242d,[['M',846,278],['C',916,336,951,409,947,473],['C',933,418,907,390,893,363],['C',897,407,892,437,880,461],['C',875,383,860,331,846,278],['Z']]]
  ];
  locks.forEach(([color,p])=>surface(commands(p),(x,y)=>frontHairZ(x,y)+.007,color));

// 從略偏後側的髮旋散開，後腦與側面都有可見的圓潤分束。
function backLock(phiEnd,start,end,width,phase){const verts=[],indices=[],N=32,W=12;
for(let j=0;j<=N;j++){const t=j/N,th=start+(end-start)*t,phi=phiEnd-.52*(1-t)**1.4+.11*Math.sin(t*Math.PI+phase*.8)*Math.sin(t*Math.PI),w=width*Math.sin(Math.PI*t)**.72;for(let k=0;k<=W;k++){const a=k/W*Math.PI*2,p=hp(phi+w*Math.cos(a),th,.012+.025*Math.sin(a)*Math.sin(Math.PI*t));verts.push(...p.toArray());}}
for(let j=0;j<N;j++)for(let k=0;k<W;k++){const a=j*(W+1)+k,b=a+W+1;indices.push(a,b,a+1,a+1,b,b+1);}const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(verts,3));g.setIndex(indices);g.computeVertexNormals();mesh(head,g,phase%3===0?hairLight:hair);}
for(let i=0;i<12;i++){let phi=1.13+i*(Math.PI*2-2.26)/11;if(phi>Math.PI)phi-=Math.PI*2;backLock(phi,.63+(i%4)*.045,boundary(phi)+.015,.195,i);}
// 後頸的小髮尾延續同一髮流，避免一條水平切齊的帽緣。
for(let i=0;i<5;i++){const phi=2.26+i*.42;backLock(phi>Math.PI?phi-Math.PI*2:phi,1.68,2.17+.035*Math.cos(i*2),.10,i);}

// 額前保留明確空隙，兩側輪廓向外膨起，頂部增高。
for(const object of head.children.slice(hairObjectsStart)){
 const position=object.geometry?.attributes.position;if(!position)continue;
 for(let i=0;i<position.count;i++){
  let x=position.getX(i),y=position.getY(i),z=position.getZ(i);
  const upper=Math.max(0,Math.min(1,(y+.3)/1.3));
  x*=1.065+.035*upper;y+=.085*upper;z*=1.045;
  // 只抬高前額與鏡框附近，耳後仍保留原圖的短髮尾。
  if(z>.49&&Math.abs(x)<.86&&y<.46){
   const outer=Math.max(0,Math.min(1,(.86-Math.abs(x))/.10));
   const safe=.365+.008*Math.sin(x*16+.6);
   if(y<safe)y+=(safe-y)*outer;
  }
  // 瀏海根部微微隆起，髮尾保持輕薄，不改動鏡框上方的空隙。
  if(z>.45&&y>.38&&y<1.15){
   const airy=Math.sin(Math.PI*(y-.38)/.77)*Math.exp(-Math.pow(x/.95,4));
   z+=.055*airy;y+=.018*airy;
  }
  position.setXYZ(i,x,y,z);
 }
 position.needsUpdate=true;object.geometry.computeVertexNormals();object.geometry.computeBoundingSphere();
}
// 用圓弧耳側缺口保留完整耳廓，避免把髮束直接拉成直角。
const earMaterials=new Set(head.children.slice(hairObjectsStart).map(o=>o.material));
for(const mat of earMaterials){if(!mat)continue;mat.onBeforeCompile=shader=>{
 shader.vertexShader='varying vec3 earPosition;\n'+shader.vertexShader;
 shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\nearPosition=position;');
 shader.fragmentShader='varying vec3 earPosition;\n'+shader.fragmentShader;
 shader.fragmentShader=shader.fragmentShader.replace('#include <clipping_planes_fragment>','#include <clipping_planes_fragment>\nvec3 earCut=vec3((abs(earPosition.x)-1.055)/.145,(earPosition.y+.20)/.205,(earPosition.z-.065)/.34);if(dot(earCut,earCut)<1.0)discard;');
};mat.needsUpdate=true;}

 let timer=null,dead=false,sleeping=false,blend=0,running=false,dragging=false,returning=false,yaw=0;
 let last=performance.now(),idleStart=last,restUntil=0;const motion=matchMedia('(prefers-reduced-motion: reduce)');
 function frame(speaking=false){
  if(dead)return;const now=performance.now(),dt=Math.min(.12,(now-last)/1000);last=now;
  const target=sleeping?1:0;blend=motion.matches?target:blend+(target-blend)*(1-Math.exp(-dt*5.3));if(Math.abs(target-blend)<.002)blend=target;
  const t=now/1000,breathe=motion.matches?0:Math.sin(t*Math.PI*2/4.8),blink=sleeping||(!motion.matches&&now%5000<110);
  eyes.forEach(e=>{e.visible=!blink&&blend<.75;e.scale.y=.157*Math.max(.06,1-blend*.95);});lids.forEach(e=>e.visible=blink||blend>=.75);
  if(running&&!sleeping&&!dragging&&!motion.matches){if(returning){yaw*=Math.exp(-dt*5);if(Math.abs(yaw)<.003){yaw=0;returning=false;restUntil=now+600;idleStart=restUntil;}}else if(now>=restUntil)yaw=.20*Math.sin((now-idleStart)/2800);}
  model.rotation.set(blend*(.23+.008*breathe),yaw,-.16*blend);model.position.y=blend*(-.06+.013*breathe);renderer.render(scene,camera);
 }
 frame();
 return{
  setSleeping(on){if(sleeping===on)return;sleeping=on;if(on){yaw=0;dragging=false;returning=false;}frame();},
  turn(angle){dragging=true;returning=false;yaw=Math.max(-.6,Math.min(.6,angle));frame();},
  endTurn(reset=false){dragging=false;returning=true;if(reset){yaw=0;returning=false;}frame();},
  animate(on,busy=()=>false){clearInterval(timer);timer=null;running=on;last=performance.now();if(on&&!motion.matches)timer=setInterval(()=>frame(busy()),100);else frame();},
  destroy(){dead=true;clearInterval(timer);const gs=new Set(),ms=new Set(),textures=new Set();scene.traverse(o=>{if(o.geometry)gs.add(o.geometry);for(const m of Array.isArray(o.material)?o.material:[o.material])if(m){ms.add(m);for(const v of Object.values(m))if(v?.isTexture)textures.add(v);}});gs.forEach(g=>g.dispose());ms.forEach(m=>m.dispose());textures.forEach(t=>t.dispose());renderer.dispose();renderer.domElement.remove();}
 };
}
