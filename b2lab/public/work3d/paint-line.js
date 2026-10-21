// 依多角度照片還原外觀；未拍到的室內保持封閉，避免虛構製程設備。
export function buildPaintLine(T, scene) {
 const g=new T.Group();scene.add(g);
 const mat=(c,m=.25)=>new T.MeshStandardMaterial({color:c,metalness:m,roughness:.48});
 const white=mat('#e3e6e3'),yellow=mat('#edbd08'),orange=mat('#e49216'),red=mat('#b83128'),silver=mat('#9da8ab',.7),dark=mat('#293238'),floor=mat('#b6b6ac',.05),glass=mat('#56757d',.5);
 function box(w,h,d,x,y,z,m){const o=new T.Mesh(new T.BoxGeometry(w,h,d),m);o.position.set(x,y,z);g.add(o);return o;}
 function rod(a,b,r,m){const A=new T.Vector3(...a),B=new T.Vector3(...b),o=new T.Mesh(new T.CylinderGeometry(r,r,A.distanceTo(B),10),m);o.position.copy(A).add(B).multiplyScalar(.5);o.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),B.sub(A).normalize());g.add(o);return o;}
 function tube(points,r,m){const curve=new T.CatmullRomCurve3(points.map(p=>new T.Vector3(...p)));const o=new T.Mesh(new T.TubeGeometry(curve,Math.max(12,points.length*6),r,8,false),m);g.add(o);return o;}
 box(9,.06,5,0,-.05,0,floor);
 box(7.5,2.85,1.95,0,1.43,-.75,white);
 // 牆板接縫與黑框觀察窗維持照片的長向排列。
 for(let x=-3.65;x<3.8;x+=.45)box(.009,2.8,.012,x,1.43,.231,silver);
 for(const x of [-2.8,-1.2,.4,2]){box(.53,.65,.035,x,1.15,.25,dark);box(.47,.59,.04,x,1.15,.272,glass);}
 for(const x of [-2,.9]){box(.44,1.18,.04,x,.60,.26,silver);box(.12,.46,.05,x,.82,.29,dark);rod([x+.15,.52,.30],[x+.15,.64,.30],.016,dark);}
 // 橘色輸送軌繞過兩端，吊鉤用曲線幾何呈現。
 const path=[];for(let i=0;i<=90;i++){const a=i/90*Math.PI*2;const x=Math.cos(a)*3.65,z=.72+Math.sin(a)*.37;path.push([x,1.94,z]);}tube(path,.045,orange);
 for(let i=0;i<66;i++){const a=i/66*Math.PI*2,x=Math.cos(a)*3.65,z=.72+Math.sin(a)*.37;box(.10,.075,.09,x,1.86,z,silver);tube([[x,1.82,z],[x,1.66,z],[x+.04,1.57,z],[x+.11,1.59,z]],.014,silver);}
 for(const x of [-3,-1.8,-.6,.6,1.8,3]){box(.065,1.94,.065,x,.97,.57,white);rod([x,1.45,.57],[x,1.91,1.03],.025,white);box(.17,.035,.17,x,.02,.57,orange);}
 for(const x of [-2.8,-1.25,.3,1.85]){for(const z of [1.65,-.05]){box(.11,2.65,.11,x,1.325,z,yellow);box(.30,.04,.30,x,.02,z,yellow);for(const dx of [-.1,.1])rod([x+dx,.05,z],[x, .42,z],.025,yellow);}box(.14,.12,2.05,x,2.62,.78,yellow);}
 for(const z of [0,1.65])box(5,.075,.075,-.5,2.48,z,red);
 box(.12,.10,1.7,-1.2,2.37,.82,red);box(.22,.24,.2,-1.2,2.2,1.2,dark);rod([-1.2,2.1,1.2],[-1.2,1.45,1.2],.013,dark);
 // 端部集塵箱、錐斗與屋頂風管。
 box(.75,1.75,.75,3.35,.98,-1.45,white);box(.79,.045,.79,3.35,1.2,-1.45,silver);
 const hopper=new T.Mesh(new T.CylinderGeometry(.49,.17,.38,4),white);hopper.rotation.y=Math.PI/4;hopper.position.set(3.35,.2,-1.45);g.add(hopper);
 box(.4,.5,.025,3.35,.88,-1.06,silver);rod([3.35,1.88,-1.45],[3.35,3.25,-1.45],.19,silver);rod([2.45,3.25,-1.45],[3.35,3.25,-1.45],.19,silver);
 for(let y=1.95;y<3.25;y+=.09){const ring=new T.Mesh(new T.TorusGeometry(.192,.008,6,20),silver);ring.rotation.x=Math.PI/2;ring.position.set(3.35,y,-1.45);g.add(ring);}
 for(const x of [-1.8,0,1.7]){for(const dx of [-.26,.26])rod([x+dx,.02,1.18],[x+dx,.9,1.18],.018,dark);for(const y of [.08,.87])rod([x-.32,y,1.18],[x+.32,y,1.18],.018,dark);for(let j=0;j<12;j++)rod([x-.25+j*.045,.40,1.18],[x-.25+j*.045,.86,1.18],.009,dark);}
 box(.24,.64,.18,2.65,.32,.39,red);box(.17,.39,.02,2.65,.37,.49,glass);
 for(const z of [1.95,2.02])box(8,.005,.015,0,.002,z,yellow);
}
