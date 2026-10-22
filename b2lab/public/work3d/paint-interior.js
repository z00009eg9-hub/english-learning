import { addInteriorDetails } from './paint-details.js';
// 內部配置取自新增四張照片；設備功能不明處以外觀命名。
export function buildPaintInterior(T,scene){
 const root=new T.Group();root.name='paint-interior';root.visible=false;scene.add(root);
 const mat=(color,metalness=.3,roughness=.45)=>new T.MeshStandardMaterial({color,metalness,roughness});
 const white=mat('#e5e7e3'),steel=mat('#cbd2d3',.5,.35),blue=mat('#145b8c',.55),cabBlue=mat('#234da2',.4),gray=mat('#444f56'),orange=mat('#e6a015'),black=mat('#20282c'),red=mat('#b43227'),yellow=mat('#dfb629'),floor=mat('#b5b3a9',.02,.9);
 const mesh=(geo,m)=>{const o=new T.Mesh(geo,m);root.add(o);return o;};
 function box(w,h,d,x,y,z,m){const o=mesh(new T.BoxGeometry(w,h,d),m);o.position.set(x,y,z);return o;}
 function cyl(r,h,x,y,z,m){const o=mesh(new T.CylinderGeometry(r,r,h,20),m);o.position.set(x,y,z);return o;}
 function rod(a,b,r,m){const A=new T.Vector3(...a),B=new T.Vector3(...b),o=mesh(new T.CylinderGeometry(r,r,A.distanceTo(B),10),m);o.position.copy(A).add(B).multiplyScalar(.5);o.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),B.sub(A).normalize());return o;}
 function tube(points,r,m){return mesh(new T.TubeGeometry(new T.CatmullRomCurve3(points.map(p=>new T.Vector3(...p))),points.length*10,r,8,false),m);}
 function frameBeam(a,b,w,m){const A=new T.Vector3(...a),B=new T.Vector3(...b),o=mesh(new T.BoxGeometry(w,A.distanceTo(B),w),m);o.position.copy(A).add(B).multiplyScalar(.5);o.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),B.sub(A).normalize());return o;}
 box(9.5,.05,5.2,0,-.04,-.75,floor);
 // 長金屬箱體下方是開放鋼架；端部黑色通道保留照片的雙片遮簾。
 for(const z of [-1.45,-.50])box(6.1,1.12,.025,0,2.25,z,steel);
 box(6.1,.025,.95,0,2.82,-.975,steel);box(6.1,.04,.95,0,1.67,-.975,steel);
 for(let x=-2.85;x<3.0;x+=.48)for(const z of [-1.466,-.484])box(.005,1.08,.006,x,2.25,z,gray);
 box(.02,1.04,.84,-3.065,2.25,-.975,black);
 for(const z of [-1.22,-.73]){const o=box(.015,.96,.38,-3.083,2.22,z,black);o.rotation.z=.04;cyl(.21,.035,-3.09,2.83,z,gray);}
 for(const x of [-2.9,-1.7,-.5,.7,1.9,3]){for(const z of [-1.5,-.43]){box(.065,1.67,.065,x,.835,z,white);box(.15,.025,.15,x,.015,z,orange);frameBeam([x,1.45,z],[x+.18,1.66,z],.035,white);}box(.07,.07,1.2,x,1.64,-.975,white);}
 // 橘色上框與白色梯子，間距依箱體支柱對齊。
 for(const z of [-1.48,-.47])box(6.2,.065,.05,0,2.85,z,orange);
 for(const x of [-3.06,3.06])box(.05,.065,1.04,x,2.85,-.975,orange);
 for(const x of [-2.7,1.5]){for(const dx of [-.14,.14])box(.024,1.75,.024,x+dx,.875,.08,white);for(let y=.12;y<1.73;y+=.15)box(.30,.018,.024,x,y,.08,white);}
 // 高架維修平台的網片以線段繪製，避免大量網格拖慢手機。
 box(1.25,.055,1.45,-3.55,1.67,-.85,orange);
 const grid=[];function line(a,b){grid.push(...a,...b);}
 for(let x=-4.15;x<-2.95;x+=.065)line([x,1.704,-1.55],[x,1.704,-.15]);
 for(let z=-1.55;z<-.12;z+=.065)line([-4.16,1.704,z],[-2.94,1.704,z]);
 for(const z of [-1.56,-.14]){for(const y of [1.74,2.16])box(1.25,.025,.025,-3.55,y,z,orange);for(let x=-4.16;x<-2.93;x+=.065)line([x,1.75,z],[x,2.15,z]);for(let y=1.79;y<2.16;y+=.065)line([-4.16,y,z],[-2.94,y,z]);}
 for(const x of [-4.16,-3.55,-2.94])for(const z of [-1.56,-.14])box(.028,.47,.028,x,1.94,z,orange);
 const gg=new T.BufferGeometry();gg.setAttribute('position',new T.Float32BufferAttribute(grid,3));root.add(new T.LineSegments(gg,new T.LineBasicMaterial({color:'#d39423'})));
 // 高低兩段輸送軌沿照片的彎道與上升段連接，吊鉤不穿進金屬側板。
 const tracks=[[[3.55,1.55,.05],[3.05,1.55,.27],[1.5,1.55,.27],[-.3,1.55,.27],[-2.6,1.55,.27],[-3.45,1.75,.02],[-3.65,2.5,-.1],[-3.55,3.04,-.45],[-2.9,3.04,-.97],[0,3.04,-.97],[2.7,3.04,-.97]],[[3.55,1.55,.05],[3.4,1.55,-.25],[2.7,1.55,-.31],[1.7,1.55,-.31],[1.1,1.55,-.1],[1.7,1.55,.05],[2.9,1.55,.05]]];
 for(const pts of tracks){const c=new T.CatmullRomCurve3(pts.map(p=>new T.Vector3(...p)));const count=Math.ceil(c.getLength()/.07);for(let i=0;i<count;i++){const a=c.getPointAt(i/count),b=c.getPointAt((i+1)/count);frameBeam(a.toArray(),b.toArray(),.055,orange);}const hooks=Math.floor(c.getLength()/.26);for(let i=0;i<hooks;i++){const p=c.getPointAt(i/hooks);box(.08,.045,.07,p.x,p.y-.06,p.z,steel);tube([[p.x,p.y-.08,p.z],[p.x,p.y-.22,p.z],[p.x+.05,p.y-.29,p.z],[p.x+.09,p.y-.26,p.z]],.009,steel);}}
 for(const x of [-3.5,-2.65,-1.5,.6,2.9]){box(.045,3.12,.045,x,1.56,.4,white);frameBeam([x,3.1,.4],[x,3.1,-1.0],.045,white);frameBeam([x,2.7,.4],[x,3.1,-.05],.035,white);}
 // 藍灰機櫃的散熱槽、側門與金屬排氣管。
 box(.85,1.13,.57,-2.05,.63,-.93,cabBlue);box(.44,1.08,.018,-2.25,.64,-.635,gray);box(.16,.025,.02,-2.26,.63,-.62,cabBlue);
 for(const y of [.23,.31,.39,.47,.83,.91,.99,1.07])for(const x of [-2.37,-2.22])box(.07,.012,.012,x,y,-.62,black);
 for(const x of [-2.39,-1.71])box(.065,.08,.48,x,.08,-.93,black);
 cyl(.12,.52,-2.23,1.46,-.93,steel);for(let y=1.25;y<1.72;y+=.055){const o=mesh(new T.TorusGeometry(.123,.004,5,24),steel);o.rotation.x=Math.PI/2;o.position.set(-2.23,y,-.93);}
 // 雙塔與上下共用管、法蘭、控制盒；不推斷未確認的設備型號。
 box(.84,.06,.51,-.73,.05,-.93,black);
 for(const x of [-.95,-.51]){cyl(.135,.73,x,.58,-.93,blue);for(const y of [.215,.945]){const o=mesh(new T.SphereGeometry(.135,20,12),blue);o.scale.y=.45;o.position.set(x,y,-.93);}for(const y of [.12,1.04]){rod([x,y,-.93],[x,y,-.69],.047,blue);}const gauge=cyl(.023,.014,x,.86,-.784,steel);gauge.rotation.x=Math.PI/2;box(.06,.025,.01,x,.34,-.786,yellow);}
 for(const y of [.12,1.04]){rod([-1.12,y,-.69],[-.14,y,-.69],.035,blue);for(const x of [-1.06,-.31]){const flange=cyl(.065,.023,x,y,-.69,blue);flange.rotation.z=Math.PI/2;}}
 tube([[-.14,1.04,-.69],[.03,1.04,-.69],[.06,.88,-.69]],.028,blue);tube([[-.14,.12,-.69],[.17,.12,-.69],[.17,.88,-.69],[.06,.88,-.69]],.028,blue);
 box(.22,.31,.07,-.73,.68,-.64,white);box(.15,.06,.012,-.73,.77,-.599,black);box(.12,.07,.014,-.73,.66,-.599,yellow);tube([[-.73,.52,-.63],[-.69,.39,-.58],[-.58,.27,-.7]],.009,black);
 // 格柵工作區、後方不鏽鋼槽體與橫向加強肋。
 box(2.65,.08,1.02,1.53,.08,-.80,steel);const grate=[];for(let x=.24;x<2.85;x+=.035)grate.push(x,.127,-1.3,x,.127,-.30);for(let z=-1.3;z<-.28;z+=.10)grate.push(.22,.128,z,2.86,.128,z);const gr=new T.BufferGeometry();gr.setAttribute('position',new T.Float32BufferAttribute(grate,3));root.add(new T.LineSegments(gr,new T.LineBasicMaterial({color:'#424b4d'})));
 box(1.12,.86,.30,2.20,.56,-1.18,steel);for(const y of [.35,.64,.92])box(1.14,.028,.035,2.20,y,-1.01,steel);frameBeam([1.65,.15,-.98],[2.75,.95,-.98],.035,steel);
 // 照片中的移動式冷風機採保守外觀名稱。
 box(.34,.49,.30,.12,.36,.07,white);box(.31,.32,.018,.12,.40,.231,black);box(.34,.20,.30,.12,.15,.07,blue);
 for(let x=-.02;x<.28;x+=.04)box(.005,.30,.01,x,.40,.244,steel);for(let y=.26;y<.55;y+=.04)box(.30,.005,.01,.12,y,.245,steel);
 // 小型桶裝容器與橘色控制櫃保留現場設備層次，不寫入推測的化學品名稱。
 for(const x of [3.45,3.65,3.85]){box(.18,.27,.16,x,.19,-1.65,white);box(.10,.035,.12,x,.34,-1.65,white);cyl(.018,.02,x+.045,.365,-1.65,red);}
 box(.48,.96,.32,3.20,.50,-1.50,orange);box(.33,.18,.018,3.20,.79,-1.33,gray);
 addInteriorDetails(T,root);
 return {root};
}
