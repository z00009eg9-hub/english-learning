// 以門、窗、輸送軌的相對尺度對齊照片；缺乏實測的背面不補製程機構。
export function buildPaintLine(T, scene) {
 const g=new T.Group();scene.add(g);
 const mat=(color,metalness=.25,roughness=.48)=>new T.MeshStandardMaterial({color,metalness,roughness});
 const white=mat('#e8e9e4'),yellow=mat('#efbe09'),orange=mat('#e69a13'),red=mat('#bd3028'),silver=mat('#a5adb0',.72,.3),dark=mat('#252a2c'),floor=mat('#b5b3a9',.04,.9),glass=mat('#66868d',.45,.22),black=mat('#151a1c'),green=mat('#17785c');
 function mesh(geo,m){const o=new T.Mesh(geo,m);g.add(o);return o;}
 function box(w,h,d,x,y,z,m){const o=mesh(new T.BoxGeometry(w,h,d),m);o.position.set(x,y,z);return o;}
 function rod(a,b,r,m){const A=new T.Vector3(...a),B=new T.Vector3(...b),o=mesh(new T.CylinderGeometry(r,r,A.distanceTo(B),10),m);o.position.copy(A).add(B).multiplyScalar(.5);o.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),B.sub(A).normalize());return o;}
 function tube(points,r,m){const c=new T.CatmullRomCurve3(points.map(p=>new T.Vector3(...p)));return mesh(new T.TubeGeometry(c,Math.max(16,points.length*8),r,8,false),m);}
 function taper(w,d,wt,dt,h,x,y,z,m){const geo=new T.BoxGeometry(1,h,1);const a=geo.attributes.position;for(let i=0;i<a.count;i++){const top=a.getY(i)>0;a.setX(i,a.getX(i)*(top?wt:w));a.setZ(i,a.getZ(i)*(top?dt:d));}geo.computeVertexNormals();const o=mesh(geo,m);o.position.set(x,y,z);return o;}
 function handle(x,y,z){tube([[x-.025,y+.05,z],[x-.055,y+.05,z+.025],[x-.055,y-.05,z+.025],[x-.025,y-.05,z]],.009,black);}
 function bolt(x,y,z){const o=mesh(new T.CylinderGeometry(.009,.009,.008,6),silver);o.rotation.x=Math.PI/2;o.position.set(x,y,z);}
 box(10,.06,5.3,.3,-.05,0,floor);
 // 分段牆面保留真正的窗洞，玻璃後能看到兩側軌道與支架。
 box(7.5,.055,1.95,0,2.86,-.75,white);box(7.5,2.85,.055,0,1.425,-1.72,white);box(.055,.82,1.95,-3.75,.41,-.75,white);box(.055,1.22,1.95,-3.75,2.24,-.75,white);
 for(const z of [-1.57,.07])box(.055,.81,.31,-3.75,1.225,z,white);
 box(.065,.84,1.36,-3.76,1.225,-.75,silver);box(.07,.79,1.31,-3.78,1.225,-.75,black);box(.02,.73,1.25,-3.825,1.225,-.75,glass);
 const holes=[[-3.75,-3.08,0,2.85],[-3.08,-2.52,1.50,2.85],[-3.08,-2.52,0,.82],[-2.52,-2.23,0,2.85],[-2.23,-1.77,1.34,2.85],[-1.77,-1.48,0,2.85],[-1.48,-.92,1.50,2.85],[-1.48,-.92,0,.82],[-.92,.12,0,2.85],[.12,.68,1.50,2.85],[.12,.68,0,.82]];
 for(const [a,b,lo,hi] of holes)if(b>a&&hi>lo)box(b-a,hi-lo,.055,(a+b)/2,(lo+hi)/2,.23,white);
 box(3.07,2.85,.055,2.215,1.425,.23,white);
 for(const x of [-2.8,-1.2,.4]){box(.59,.73,.045,x,1.16,.242,silver);box(.55,.69,.052,x,1.16,.26,black);box(.50,.64,.015,x,1.16,.29,glass);}
 for(let x=-3.6;x<3.7;x+=.45)box(.006,1.25,.006,x,2.19,.263,silver);
 box(.43,1.3,.035,-2,.65,.24,white);box(.10,.45,.02,-2,.88,.27,black);handle(-1.86,.55,.28);
 // 端牆的抬高入口、窄長工件開口與大觀察窗。
 box(.06,2.85,.50,3.75,1.425,-1.47,white);box(.06,2.85,.28,3.75,1.425,.09,white);box(.06,1.34,.94,3.75,2.18,-.80,white);box(.06,.32,.94,3.75,.16,-.80,white);
 box(.025,1.14,.55,3.78,.91,-.95,black);box(.025,.88,.24,3.80,1,-.49,glass);
 for(let i=0;i<3;i++)box(.16,.055,.47,3.88+i*.15,.32-i*.09,-.95,silver);
 for(const z of [-1.22,-.68]){rod([3.85,.80,z],[4.30,.52,z],.012,yellow);rod([4.30,.04,z],[4.30,.52,z],.012,yellow);rod([3.85,.30,z],[3.85,.80,z],.012,yellow);}
 // 白色側柱與斜撐採方管，並加底板和螺栓。
 for(const x of [-3,-1.8,-.6,.6,1.8,3]){box(.055,1.94,.055,x,.97,.62,white);const b=box(.045,.65,.045,x,1.64,.86,white);b.rotation.x=-.78;box(.16,.025,.16,x,.015,.62,orange);for(const dx of [-.055,.055])bolt(x+dx,.025,.71);}
 // 槽鋼軌沿外牆直行，端部抬升轉彎再穿入房體；不再以橢圓管代替。
 const pts=[[-3.75,1.96,.96],[-3.3,1.96,.96],[-2,1.96,.96],[0,1.96,.96],[2.5,1.96,.96],[3.25,2.08,.96],[3.65,2.20,.94],[3.98,2.20,.72],[4.03,2.20,.3],[4.03,2.20,-.3],[4.03,2.20,-.85],[3.75,2.20,-.9],[2.4,2.20,-.9],[-2.8,2.20,-.9]];
 const c=new T.CatmullRomCurve3(pts.map(p=>new T.Vector3(...p)),false,'centripetal');const len=c.getLength();
 for(let i=0;i<200;i++){const p=c.getPointAt(i/200),q=c.getPointAt((i+1)/200),mid=p.clone().add(q).multiplyScalar(.5),dir=q.clone().sub(p),segmentLength=dir.length();for(const y of [-.045,.045]){const o=box(segmentLength+.006,.014,.105,mid.x,mid.y+y,mid.z,orange);o.quaternion.setFromUnitVectors(new T.Vector3(1,0,0),dir.normalize());}const o=box(p.distanceTo(q)+.006,.09,.012,mid.x,mid.y,mid.z-.045,orange);o.quaternion.setFromUnitVectors(new T.Vector3(1,0,0),q.clone().sub(p).normalize());}
 for(let i=0;i<Math.floor(len/.23);i++){const t=i/Math.floor(len/.23),p=c.getPointAt(t),tan=c.getTangentAt(t),side=new T.Vector3(-tan.z,0,tan.x);const pos=(a,b)=>[p.x+side.x*a,p.y+b,p.z+side.z*a];box(.095,.045,.09,p.x,p.y-.09,p.z,silver);for(const a of [-.035,.035])rod(pos(a,-.04),pos(a,-.14),.018,dark);tube([pos(0,-.12),pos(.035,-.17),pos(.045,-.25),pos(.015,-.34),pos(-.035,-.38),pos(-.06,-.36)],.011,silver);rod(pos(-.065,-.38),pos(-.015,-.38),.016,dark);}
 for(const x of [-2.8,-1.25,.3,1.85]){for(const z of [1.65,-.05]){box(.11,2.65,.11,x,1.325,z,yellow);box(.29,.025,.29,x,.02,z,yellow);for(const dx of [-.1,.1]){const o=box(.015,.38,.15,x+dx*.45,.20,z,yellow);o.rotation.z=dx>0?-.22:.22;}for(const dx of [-.1,.1])for(const dz of [-.1,.1])bolt(x+dx,.04,z+dz);}box(.14,.12,2.05,x,2.62,.78,yellow);}
 for(const z of [0,1.65])box(5,.075,.075,-.5,2.48,z,red);box(.12,.10,1.7,-1.2,2.37,.82,red);box(.22,.24,.2,-1.2,2.2,1.2,dark);tube([[-1.2,2.1,1.2],[-1.2,1.48,1.2],[-1.16,1.43,1.2],[-1.12,1.48,1.2]],.012,dark);
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
 for(const x of [-1.8,0,1.7]){for(const dx of [-.26,.26])rod([x+dx,.02,1.18],[x+dx,.9,1.18],.018,dark);for(const y of [.08,.87])rod([x-.32,y,1.18],[x+.32,y,1.18],.018,dark);for(let j=0;j<12;j++)rod([x-.25+j*.045,.40,1.18],[x-.25+j*.045,.86,1.18],.009,dark);}
 for(const z of [1.95,2.02])box(8,.005,.015,0,.002,z,yellow);
}
