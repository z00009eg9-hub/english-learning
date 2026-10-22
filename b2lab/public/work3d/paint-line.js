import { buildPaintInterior } from './paint-interior.js';
// 以門、窗、輸送軌的相對尺度對齊照片；新增內部照片以獨立視圖呈現，避免外牆遮擋設備。
export function buildPaintLine(T, scene) {
 const g=new T.Group();g.name='paint-exterior';scene.add(g);
 const interior=buildPaintInterior(T,scene);
 const mat=(color,metalness=.25,roughness=.48)=>new T.MeshStandardMaterial({color,metalness,roughness});
 const white=mat('#e8e9e4'),yellow=mat('#efbe09'),orange=mat('#e69a13'),red=mat('#bd3028'),silver=mat('#a5adb0',.72,.3),dark=mat('#252a2c'),floor=mat('#b5b3a9',.04,.9),glass=mat('#66868d',.45,.22),black=mat('#151a1c'),green=mat('#17785c'),cardboard=mat('#c2a47a',.02,.95),blue=mat('#245d9b');
 function mesh(geo,m){const o=new T.Mesh(geo,m);g.add(o);return o;}
 function box(w,h,d,x,y,z,m){const o=mesh(new T.BoxGeometry(w,h,d),m);o.position.set(x,y,z);return o;}
 function rod(a,b,r,m){const A=new T.Vector3(...a),B=new T.Vector3(...b),o=mesh(new T.CylinderGeometry(r,r,A.distanceTo(B),10),m);o.position.copy(A).add(B).multiplyScalar(.5);o.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),B.sub(A).normalize());return o;}
 function tube(points,r,m){const c=new T.CatmullRomCurve3(points.map(p=>new T.Vector3(...p)));return mesh(new T.TubeGeometry(c,Math.max(16,points.length*8),r,8,false),m);}
 function taper(w,d,wt,dt,h,x,y,z,m){const geo=new T.BoxGeometry(1,h,1);const a=geo.attributes.position;for(let i=0;i<a.count;i++){const top=a.getY(i)>0;a.setX(i,a.getX(i)*(top?wt:w));a.setZ(i,a.getZ(i)*(top?dt:d));}geo.computeVertexNormals();const o=mesh(geo,m);o.position.set(x,y,z);return o;}
 function handle(x,y,z){tube([[x-.025,y+.05,z],[x-.055,y+.05,z+.025],[x-.055,y-.05,z+.025],[x-.025,y-.05,z]],.009,black);}
 function bolt(x,y,z){const o=mesh(new T.CylinderGeometry(.009,.009,.008,6),silver);o.rotation.x=Math.PI/2;o.position.set(x,y,z);}
 box(11.2,.06,5.3,0,-.05,0,floor);
 // 分段牆面保留真正的窗洞，玻璃後能看到兩側軌道與支架。
 box(7.5,.055,1.95,0,2.86,-.75,white);box(7.5,2.85,.055,0,1.425,-1.72,white);box(.055,.82,1.95,-3.75,.41,-.75,white);box(.055,1.22,1.95,-3.75,2.24,-.75,white);
 for(const z of [-1.57,.07])box(.055,.81,.31,-3.75,1.225,z,white);
 box(.065,.84,1.36,-3.76,1.225,-.75,silver);box(.07,.79,1.31,-3.78,1.225,-.75,black);box(.02,.73,1.25,-3.825,1.225,-.75,glass);
 // 窗與門集中定義，牆面依洞口分段，避免新窗被整片牆遮住。
 const openings=[{x:-2.8,w:.56,lo:.78,hi:1.50},{x:-2,w:.44,lo:0,hi:1.34},{x:-1.2,w:.52,lo:.82,hi:1.48},{x:.4,w:.52,lo:.82,hi:1.48},{x:1.35,w:.44,lo:0,hi:1.34},{x:2.4,w:.52,lo:.82,hi:1.48}];
 let edge=-3.75;for(const o of openings){const left=o.x-o.w/2,right=o.x+o.w/2;box(left-edge,2.85,.055,(edge+left)/2,1.425,.23,white);box(o.w,2.85-o.hi,.055,o.x,(2.85+o.hi)/2,.23,white);if(o.lo)box(o.w,o.lo,.055,o.x,o.lo/2,.23,white);edge=right;
 if(o.lo){for(const dx of [-o.w/2,o.w/2])box(.022,o.hi-o.lo+.035,.04,o.x+dx,(o.hi+o.lo)/2,.265,silver);for(const y of [o.lo,o.hi])box(o.w+.035,.025,.04,o.x,y,.265,silver);box(o.w-.025,o.hi-o.lo-.025,.022,o.x,(o.hi+o.lo)/2,.27,black);box(o.w-.055,o.hi-o.lo-.055,.015,o.x,(o.hi+o.lo)/2,.29,glass);}
 else{box(o.w,1.32,.035,o.x,.66,.25,white);box(.11,.48,.025,o.x,.88,.28,black);box(.08,.45,.01,o.x,.88,.30,glass);handle(o.x+.14,.55,.29);box(.26,.105,.02,o.x,1.45,.27,green);}}
 box(3.75-edge,2.85,.055,(edge+3.75)/2,1.425,.23,white);
 for(let x=-3.6;x<3.7;x+=.30)box(.004,1.24,.006,x,2.21,.263,silver);
 // 屋頂線槽、三角支架與消防支管是全景照片中的連續長向構件。
 for(const z of [-.25,-.52])box(7.45,.055,.035,0,2.99,z,silver);
 for(let x=-3.5;x<3.7;x+=.16)box(.018,.022,.30,x,2.97,-.385,silver);
 for(const x of [-3.1,-1.6,.1,1.7,3.25]){box(.045,.25,.045,x,2.99,.16,white);box(.045,.045,.45,x,3.10,-.04,white);rod([x,2.9,.16],[x,3.10,-.27],.014,white);tube([[x,3.15,-.14],[x,3.15,.29],[x,2.95,.30],[x,.47,.30]],.018,red);box(.055,.06,.05,x,.5,.33,silver);rod([x-.045,.51,.36],[x+.045,.51,.36],.008,red);}
 // 端牆的抬高入口、窄長工件開口與大觀察窗。
 box(.06,2.85,.50,3.75,1.425,-1.47,white);box(.06,2.85,.28,3.75,1.425,.09,white);box(.06,1.34,.94,3.75,2.18,-.80,white);box(.06,.32,.94,3.75,.16,-.80,white);
 box(.025,1.14,.55,3.78,.91,-.95,black);box(.025,.88,.24,3.80,1,-.49,glass);
 for(let i=0;i<3;i++)box(.16,.055,.47,3.88+i*.15,.32-i*.09,-.95,silver);
 for(const z of [-1.22,-.68]){rod([3.85,.80,z],[4.30,.52,z],.012,yellow);rod([4.30,.04,z],[4.30,.52,z],.012,yellow);rod([3.85,.30,z],[3.85,.80,z],.012,yellow);}
 // 白色側柱與斜撐採方管，並加底板和螺栓。
 for(const x of [-3,-1.8,-.6,.6,1.8,3]){box(.055,1.94,.055,x,.97,.62,white);const b=box(.045,.65,.045,x,1.64,.86,white);b.rotation.x=-.78;box(.16,.025,.16,x,.015,.62,orange);for(const dx of [-.055,.055])bolt(x+dx,.025,.71);}
 // 前端另一座房體與通道對應前端近照，保留兩座房體之間的間隔。
 box(.94,2.25,1.95,-4.52,1.125,-.75,white);box(.40,1.29,.025,-4.52,.655,.24,silver);box(.09,.43,.015,-4.52,.88,.26,black);handle(-4.38,.54,.27);
 const lamp=new T.MeshStandardMaterial({color:'#f7ffff',emissive:'#efffff',emissiveIntensity:.5,roughness:.8});
 for(const x of [-2.4,-1.2,0,1.2,2.4])box(.68,.018,.025,x,1.86,.70,lamp);
 // 槽鋼軌沿外牆直行，端部抬升轉彎再穿入房體；不再以橢圓管代替。
 const pts=[[-3.78,1.96,-.58],[-4.0,1.96,-.36],[-4.0,1.96,.52],[-3.75,1.96,.96],[-3.3,1.96,.96],[-2,1.96,.96],[0,1.96,.96],[2.5,1.96,.96],[3.25,2.08,.96],[3.65,2.20,.94],[3.98,2.20,.72],[4.03,2.20,.3],[4.03,2.20,-.3],[4.03,2.20,-.85],[3.75,2.20,-.9],[2.4,2.20,-.9],[-2.8,2.20,-.9]];
 tube(pts.map(([x,y,z])=>[x,y-.17,z]),.009,silver);
 const c=new T.CatmullRomCurve3(pts.map(p=>new T.Vector3(...p)),false,'centripetal');const len=c.getLength();
 for(let i=0;i<200;i++){const p=c.getPointAt(i/200),q=c.getPointAt((i+1)/200),mid=p.clone().add(q).multiplyScalar(.5),dir=q.clone().sub(p),segmentLength=dir.length();for(const y of [-.045,.045]){const o=box(segmentLength+.006,.014,.105,mid.x,mid.y+y,mid.z,orange);o.quaternion.setFromUnitVectors(new T.Vector3(1,0,0),dir.normalize());}const o=box(p.distanceTo(q)+.006,.09,.012,mid.x+.045*dir.z,mid.y,mid.z-.045*dir.x,orange);o.quaternion.setFromUnitVectors(new T.Vector3(1,0,0),q.clone().sub(p).normalize());}
 for(let i=0;i<Math.floor(len/.23);i++){const t=i/Math.floor(len/.23),p=c.getPointAt(t),tan=c.getTangentAt(t),side=new T.Vector3(-tan.z,0,tan.x);const pos=(a,b)=>[p.x+side.x*a,p.y+b,p.z+side.z*a];box(.095,.045,.09,p.x,p.y-.09,p.z,silver);for(const a of [-.035,.035])rod(pos(a,-.04),pos(a,-.14),.018,dark);tube([pos(0,-.12),pos(.035,-.17),pos(.045,-.25),pos(.015,-.34),pos(-.035,-.38),pos(-.06,-.36)],.011,silver);rod(pos(-.065,-.38),pos(-.015,-.38),.016,dark);}
 // 吊架集中於裝卸區，外柱加四面三角肋板；長向黃樑支撐紅色移動橋樑。
 const bays=[-.5,.7,1.9,3.1];
 function gusset(x,z,axis,sign){const sh=new T.Shape();sh.moveTo(0,0);sh.lineTo(.15,0);sh.lineTo(0,.44);sh.closePath();const o=mesh(new T.ExtrudeGeometry(sh,{depth:.014,bevelEnabled:false}),yellow);o.position.set(x,.035,z);if(axis==='x')o.rotation.y=sign>0?0:Math.PI;else o.rotation.y=sign>0?-Math.PI/2:Math.PI/2;}
 for(const x of bays){for(const z of [1.95,-.05]){box(.105,2.65,.105,x,1.325,z,yellow);box(.32,.025,.32,x,.02,z,yellow);for(const axis of ['x','z'])for(const sign of [-1,1])gusset(x,z,axis,sign);for(const dx of [-.12,.12])for(const dz of [-.12,.12]){const o=mesh(new T.CylinderGeometry(.014,.014,.015,6),silver);o.position.set(x+dx,.04,z+dz);}}box(.13,.12,2.35,x,2.65,.95,yellow);}
 for(const z of [-.05,1.95])box(3.98,.105,.105,1.3,2.72,z,yellow);
 for(const x of [.12,2.50]){box(.095,.11,2.04,x,2.43,.95,red);for(const z of [-.05,1.95]){box(.17,.20,.15,x,2.57,z,silver);for(const dx of [-.055,.055])rod([x+dx,2.65,z-.075],[x+dx,2.65,z+.075],.025,dark);}box(.18,.22,.20,x,2.27,1.18,dark);const o=mesh(new T.CylinderGeometry(.10,.10,.18,18),black);o.rotation.z=Math.PI/2;o.position.set(x,2.28,1.18);tube([[x,2.17,1.18],[x,1.48,1.18],[x+.03,1.43,1.18],[x+.07,1.48,1.18]],.010,dark);for(let z=.15;z<1.7;z+=.35)tube([[x,2.39,z],[x,2.22,z+.17],[x,2.39,z+.34]],.005,black);}
 // 集塵箱放在端牆外側：上下箱、法蘭、錐斗、兩片落地側腳。
 const X=4.35,Z=-1.5;box(.85,1.92,.78,X,1.33,Z,white);
 taper(.30,.26,.78,.72,.40,X,.25,Z,white);for(const x of [X-.38,X+.38])box(.07,.55,.78,x,.275,Z,white);
 for(const y of [.53,1.25]){box(.88,.025,.81,X,y,Z,silver);for(const x of [X-.39,X+.39])for(const dy of [-.018,.018])bolt(x,y+dy,Z+.413);}
 for(const [y,w,h] of [[.87,.43,.51],[1.40,.65,.16]]){box(w+.015,h+.015,.02,X,y,Z+.401,silver);box(w,h,.025,X,y,Z+.42,white);handle(X-w*.32,y,Z+.45);for(const yy of [y-h*.35,y+h*.35])box(.022,.035,.027,X+w*.5,yy,Z+.45,dark);}
 // 側面凸出的防撞罩有黑黃條紋框。
 box(.23,.40,.43,X+.48,.88,Z,black);for(let i=0;i<6;i++){const o=box(.013,.065,.42,X+.602,.70+i*.065,Z,i%2?yellow:black);o.rotation.x=-.12;}box(.05,.29,.31,X+.63,.88,Z,white);
 taper(.82,.76,.32,.32,.28,X,2.43,Z,silver);rod([X,2.57,Z],[X,3.3,Z],.16,silver);for(let y=2.62;y<3.3;y+=.055){const o=mesh(new T.TorusGeometry(.162,.005,5,24),silver);o.rotation.x=Math.PI/2;o.position.set(X,y,Z);}
 // 由牆頂向下彎入側管的白色風管。
 tube([[3.35,2.72,-1.35],[3.65,2.72,-1.35],[3.8,2.55,-1.35],[3.8,1.80,-1.35]],.15,white);
 // 移動式供粉機、盤繞軟管與把手。
 box(.25,.40,.30,3.94,.25,-.15,silver);for(const x of [3.84,4.04])for(const z of [-.25,-.05]){const o=mesh(new T.SphereGeometry(.035,10,8),dark);o.position.set(x,.04,z);}for(let i=0;i<5;i++){const o=mesh(new T.TorusGeometry(.15,.009,5,28),black);o.position.set(3.94,.48+i*.012,.025);}tube([[3.94,.43,0],[3.75,.75,.1],[3.70,.42,.23],[4.07,.37,.22]],.012,black);
 // 消防箱位置依端部照片，白色水帶在玻璃內可見。
 box(.34,.87,.18,3.49,.435,.41,red);box(.27,.67,.018,3.49,.45,.51,black);for(let i=0;i<8;i++)tube([[3.39,.50-i*.018,.53],[3.44,.55-i*.018,.53],[3.54,.50-i*.018,.53]],.009,white);rod([3.54,.10,.54],[3.54,.26,.54],.035,red);rod([3.48,.87,.34],[3.48,3.15,.34],.025,red);box(.24,.12,.02,3.47,1.68,.30,green);
 // 存放架採前後落地橫腳，吊具以細長 U 形呈現，保留中央走道。
 for(const x of [.85,1.60,2.35,3.10]){for(const dx of [-.29,.29]){box(.022,.99,.022,x+dx,.50,.61,dark);box(.035,.025,.43,x+dx,.02,.61,dark);}for(const y of [.16,.98])box(.65,.022,.022,x,y,.61,dark);for(let j=0;j<19;j++){const px=x-.27+j*.03;tube([[px,.99,.61],[px,.51,.62],[px+.008,.48,.64],[px+.016,.51,.66],[px+.016,.98,.66]],.0045,black);}}
 // 左端品質看板與綠色雙層檢驗桌，位置依前端近照。
 box(.61,.63,.035,-3.4,.99,.285,silver);box(.57,.06,.014,-3.4,1.26,.31,white);
 for(let row=0;row<3;row++)for(let col=0;col<4;col++){const x=-3.615+col*.143,y=1.14-row*.17;box(.125,.135,.013,x,y,.312,black);box(.125,.023,.015,x,y-.056,.325,red);}
 for(const y of [.13,.58]){box(.64,.025,.38,-3.4,y,.60,silver);box(.61,.012,.35,-3.4,y+.018,.60,green);}
 for(const x of [-3.69,-3.11])for(const z of [.44,.76]){box(.025,.49,.025,x,.33,z,silver);const o=mesh(new T.CylinderGeometry(.035,.035,.025,12),dark);o.rotation.z=Math.PI/2;o.position.set(x,.055,z);}
 box(.25,.33,.25,-3.46,.31,.60,cardboard);rod([-3.56,.61,.61],[-3.56,.79,.61],.028,black);box(.10,.12,.10,-3.20,.67,.56,silver);
 const reel=mesh(new T.CylinderGeometry(.085,.085,.045,20),blue);reel.rotation.x=Math.PI/2;reel.position.set(-3.85,.09,.65);const hub=mesh(new T.CylinderGeometry(.035,.035,.048,16),orange);hub.rotation.x=Math.PI/2;hub.position.copy(reel.position);
 // 裝卸區低鋼棧板與紙板不阻擋懸吊輸送軌，保留照片的前後層次。
 for(const [x,z,layers] of [[-.75,1.35,1],[.5,1.45,2],[1.75,1.48,1]])for(let k=0;k<layers;k++){const y=.04+k*.09;for(const dz of [-.23,.23])box(.88,.06,.045,x,y,z+dz,silver);for(const dx of [-.40,0,.40])box(.045,.06,.50,x+dx,y,z,silver);for(let j=0;j<6;j++)box(.045,.025,.50,x-.39+j*.156,y+.04,z,silver);const sheet=box(.80,.005,.44,x,y+.057,z,cardboard);sheet.rotation.y=.035*(k+1);}
 // 懸吊顯示器與消火器組沿外牆配置。
 rod([2.86,2.9,.29],[2.86,2.12,.52],.009,silver);box(.38,.27,.035,2.86,2.08,.54,black);box(.34,.23,.009,2.86,2.08,.565,dark);
 box(.20,.04,.13,1.03,.03,.42,red);for(const x of [.98,1.08]){rod([x,.06,.42],[x,.29,.42],.035,red);rod([x,.29,.42],[x,.34,.42],.012,dark);}
 for(const z of [1.95,2.02])box(8,.005,.015,0,.002,z,yellow);
 return {setInterior(on){g.visible=!on;interior.root.visible=on;}};
}
