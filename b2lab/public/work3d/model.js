// 量測工作站：依照片手工建模（量測臂＋花崗石平台＋鋼架＋支承治具）。
// 幾何放在 model 群組內，整組縮 0.6 並左移 0.6，讓畫面中心落在原點附近；equip-data.js 的座標已換算成世界座標。
import { buildPaintLine } from './paint-line.js';
export function buildModel(THREE,scene,id){
if(id==='paint-line') return buildPaintLine(THREE,scene);
const model=new THREE.Group();model.scale.setScalar(.6);model.position.set(-.6,0,0);scene.add(model);
const mat=(color,metalness=.4,roughness=.36)=>new THREE.MeshStandardMaterial({color,metalness,roughness});const blue=mat('#164b7c',.6,.3),pedestal=mat('#1438a0',.6,.23),silver=mat('#a6aaa9',.72,.3),gray=mat('#41464b',.45,.42),dark=mat('#171d22',.25,.52),rubber=mat('#10151b',.05,.75),orange=mat('#d85424',.3,.4),red=mat('#ca2424'),green=mat('#1fad68');const led=new THREE.MeshStandardMaterial({color:'#008cff',emissive:'#0077ff',emissiveIntensity:2});
function mesh(g,m,parent=model){const o=new THREE.Mesh(g,m);parent.add(o);o.castShadow=true;o.receiveShadow=true;return o}
function cyl(r,h,x,y,z,m,r2=r,parent=model){const o=mesh(new THREE.CylinderGeometry(r2,r,h,64),m,parent);o.position.set(x,y,z);return o}
function rod(a,b,r,m,parent=model,r2=r){const A=new THREE.Vector3(...a),B=new THREE.Vector3(...b);const o=mesh(new THREE.CylinderGeometry(r2,r,A.distanceTo(B),48),m,parent);o.position.copy(A).add(B).multiplyScalar(.5);o.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),B.sub(A).normalize());return o}
function box(w,h,d,x,y,z,m,r=.035,parent=model){const s=new THREE.Shape();s.moveTo(-w/2+r,-h/2);s.lineTo(w/2-r,-h/2);s.quadraticCurveTo(w/2,-h/2,w/2,-h/2+r);s.lineTo(w/2,h/2-r);s.quadraticCurveTo(w/2,h/2,w/2-r,h/2);s.lineTo(-w/2+r,h/2);s.quadraticCurveTo(-w/2,h/2,-w/2,h/2-r);s.lineTo(-w/2,-h/2+r);s.quadraticCurveTo(-w/2,-h/2,-w/2+r,-h/2);const g=new THREE.ExtrudeGeometry(s,{depth:d-2*r,bevelEnabled:true,bevelSegments:3,steps:1,bevelSize:r,bevelThickness:r,curveSegments:12});g.translate(0,0,-(d-2*r)/2);const o=mesh(g,m,parent);o.position.set(x,y,z);return o}
function disk(r,d,x,y,z,m,parent=model){const o=cyl(r,d,x,y,z,m,r,parent);o.rotation.x=Math.PI/2;return o}
function cable(points,r=.018){const curve=new THREE.CatmullRomCurve3(points.map(p=>new THREE.Vector3(...p)));return mesh(new THREE.TubeGeometry(curve,64,r,8,false),rubber)}
// 三支腳以照片的圓頭厚底板與調整腳呈現，不把底座簡化成三根細桿。
for(const a of [Math.PI/2,Math.PI/2+2.094,Math.PI/2+4.189]){const x=Math.cos(a)*.83,z=Math.sin(a)*.83;const foot=box(.44,.15,1.05,Math.cos(a)*.43,.24,Math.sin(a)*.43,pedestal,.1);foot.rotation.y=Math.PI/2-a;cyl(.21,.14,x,.24,z,pedestal);cyl(.075,.18,x,.10,z,silver);cyl(.105,.065,x,.035,z,rubber);cyl(.028,.17,x,.40,z,silver);cyl(.085,.025,x,.49,z,silver);const wheel=cyl(.10,.075,x*.8,.13,z*.8,rubber);wheel.rotation.z=Math.PI/2;}
cyl(.225,2.06,0,1.33,0,pedestal);cyl(.27,.08,0,.34,0,pedestal);cyl(.37,.09,0,2.40,0,pedestal);cyl(.36,.04,0,2.465,0,silver);
for(let i=0;i<8;i++){const a=i*Math.PI/4;cyl(.028,.006,Math.cos(a)*.29,2.489,Math.sin(a)*.29,dark)}
box(.24,.34,.26,.50,.49,.29,orange,.015);cyl(.085,.03,.5,.675,.29,silver);cyl(.058,.035,.5,.692,.29,dark);disk(.065,.045,.50,.48,.45,dark);
cyl(.23,.12,0,2.55,0,silver);cyl(.19,.08,0,2.63,0,gray);
// 控制箱：藍色外殼、灰色側板、前方燈環與背面接頭。
box(.49,.64,.43,0,2.98,0,blue,.065);box(.34,.56,.025,0,2.98,-.237,gray,.035);box(.38,.035,.40,0,2.69,0,silver,.016);box(.39,.06,.39,0,3.32,0,silver,.02);
disk(.115,.012,0,2.99,.247,led);disk(.096,.017,0,2.99,.26,blue);
for(const y of [3.14,3.03]){disk(.025,.014,-.10,y,-.265,led)}box(.025,.06,.015,.10,3.03,-.259,green,.006);box(.23,.085,.015,0,2.89,-.26,silver,.005);
for(const x of [-.13,0,.13]){disk(.033,.055,x,2.76,-.27,dark);cable([[x,2.76,-.29],[x,2.62,-.43],[.18,2.51,-.46],[.36,1.65,-.48],[.46,.30,-.55]])}
// 下關節與固定臂段；兩段長臂折回成照片中的窄 U 形。
box(.28,.19,.30,0,3.43,0,silver,.06);disk(.205,.30,0,3.61,0,silver);disk(.17,.025,0,3.61,.17,blue);disk(.142,.012,0,3.61,.19,blue);disk(.17,.025,0,3.61,-.17,gray);
cyl(.14,.18,0,3.82,0,silver,.11);rod([0,3.87,0],[0,5.88,0],.108,gray);cyl(.12,.10,0,5.88,0,silver);box(.053,.44,.012,0,4.07,.109,silver,.023);
// 上端肘關節與向下折回的第二臂。
disk(.145,.20,-.15,6.00,0,silver);disk(.105,.018,-.15,6,.115,blue);rod([0,5.88,0],[-.15,6,0],.117,silver);rod([-.15,6,0],[-.36,5.85,0],.11,silver);
rod([-.36,5.85,0],[-.36,4.16,0],.105,gray);rod([-.36,5.85,0],[-.36,5.69,0],.115,silver);box(.048,.57,.012,-.36,4.76,.108,silver,.023);
disk(.13,.22,-.36,4.08,0,silver);disk(.10,.018,-.36,4.08,.125,blue);rod([-.36,4.08,0],[-.49,3.96,0],.10,silver);
box(.39,.065,.08,-.17,4.07,0,blue,.025);
// 握把與紅綠按鈕、狀態燈、金屬探針。
const hand=new THREE.Group();hand.position.set(-.49,3.96,0);hand.rotation.z=-.21;model.add(hand);cyl(.095,.43,0,-.25,0,blue,.108,hand);cyl(.10,.10,0,-.035,0,silver,.11,hand);box(.055,.27,.025,0,-.22,-.10,silver,.013,hand);box(.035,.052,.014,.047,-.30,.087,red,.006,hand);box(.035,.052,.014,.047,-.37,.087,green,.006,hand);cyl(.094,.017,0,-.465,0,led,.094,hand);cyl(.076,.11,0,-.53,0,silver,.088,hand);cyl(.038,.10,0,-.635,0,gray,.065,hand);rod([0,-.685,0],[0,-.76,0],.012,silver,hand,.023);const tip=mesh(new THREE.SphereGeometry(.015,20,12),silver,hand);tip.position.set(0,-.77,0);

// 完整量測平台：依照片補上厚石板、黑色鋼架、橫梁與磁性支承治具。
const stone=mat('#838586',.08,.91),frame=mat('#252c30',.55,.46),fixture=mat('#939b9e',.72,.34);
// 平台在量測臂右側，頂面與控制箱附近高度一致。
box(2.65,.25,1.75,1.95,2.60,0,stone,.025);
for(const x of [.83,3.07])for(const z of [-.69,.69]){box(.12,2.36,.12,x,1.27,z,frame,.012);box(.20,.07,.20,x,.08,z,dark,.012)}
for(const z of [-.69,.69]){box(2.34,.16,.10,1.95,2.38,z,frame,.012);box(2.34,.11,.10,1.95,.60,z,frame,.012)}
for(const x of [.83,3.07]){box(.12,.16,1.48,x,2.38,0,frame,.012);box(.12,.11,1.48,x,.60,0,frame,.012)}
// 照片中的長型工件、直立框架與支承塊。
box(2.38,.11,.14,1.95,2.91,.35,frame,.012);
for(const x of [1.05,2.88]){
box(.30,.17,.29,x,2.80,.35,fixture,.012);
box(.28,.29,.28,x,2.89,-.38,fixture,.012);
box(.105,.11,.012,x,2.91,-.228,red,.005);
const knob=box(.025,.105,.025,x,2.91,-.211,dark,.005);knob.rotation.z=-.55;
}
box(2.35,.09,.12,1.95,3.06,-.38,frame,.012);
for(const x of [1.32,2.58])box(.09,1.05,.12,x,3.47,.35,frame,.012);
box(1.35,.09,.12,1.95,3.99,.35,frame,.012);
rod([1.32,3.05,.35],[2.58,3.99,.35],.032,frame);
rod([2.58,3.05,.35],[1.32,3.99,.35],.032,frame);
// 以環形金屬件提示照片中的孔位，不把未知細節當成精確尺寸。
for(const x of [1.32,2.58]){const ring=mesh(new THREE.TorusGeometry(.095,.025,12,40),fixture);ring.position.set(x,3.47,.43)}
}
