// 依六張設備近照補充外觀；管路配置僅呈現可見的分支，不推測閥門操作方式。
export function addInteriorDetails(T,root){
 const mat=(color,m=.3,r=.5)=>new T.MeshStandardMaterial({color,metalness:m,roughness:r});
 const steel=mat('#c6ced0',.5,.35),white=mat('#e4e5df'),gray=mat('#747c7b'),dark=mat('#252c2c'),red=mat('#c6292e'),yellow=mat('#ddb414'),blue=mat('#24598e'),resin=mat('#c2cbb5',.08,.6),cyan=mat('#6db9c7'),black=mat('#161d1d');
 const mesh=(geo,m)=>{const o=new T.Mesh(geo,m);root.add(o);return o;};
 function box(w,h,d,x,y,z,m){const o=mesh(new T.BoxGeometry(w,h,d),m);o.position.set(x,y,z);return o;}
 function rounded(w,h,d,x,y,z,m){const r=.045,sh=new T.Shape();sh.moveTo(-w/2+r,-h/2);sh.lineTo(w/2-r,-h/2);sh.quadraticCurveTo(w/2,-h/2,w/2,-h/2+r);sh.lineTo(w/2,h/2-r);sh.quadraticCurveTo(w/2,h/2,w/2-r,h/2);sh.lineTo(-w/2+r,h/2);sh.quadraticCurveTo(-w/2,h/2,-w/2,h/2-r);sh.lineTo(-w/2,-h/2+r);sh.quadraticCurveTo(-w/2,-h/2,-w/2+r,-h/2);const o=mesh(new T.ExtrudeGeometry(sh,{depth:d,bevelEnabled:false,curveSegments:6}),m);o.position.set(x,y,z-d/2);return o;}
 function cyl(r,h,x,y,z,m){const o=mesh(new T.CylinderGeometry(r,r,h,20),m);o.position.set(x,y,z);return o;}
 function rod(a,b,r,m){const A=new T.Vector3(...a),B=new T.Vector3(...b),o=mesh(new T.CylinderGeometry(r,r,A.distanceTo(B),10),m);o.position.copy(A).add(B).multiplyScalar(.5);o.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),B.sub(A).normalize());return o;}
 function tube(p,r,m){return mesh(new T.TubeGeometry(new T.CatmullRomCurve3(p.map(v=>new T.Vector3(...v))),p.length*8,r,8,false),m);}
 function capsule(x,y,z,r,h,m){cyl(r,h,x,y,z,m);for(const sign of [-1,1]){const o=mesh(new T.SphereGeometry(r,20,12),m);o.scale.y=.5;o.position.set(x,y+sign*h/2,z);}}
 function gauge(x,y,z){rod([x,y-.10,z],[x,y,z],.008,steel);const o=cyl(.035,.016,x,y,z,steel);o.rotation.x=Math.PI/2;const face=cyl(.030,.018,x,y,z+.004,white);face.rotation.x=Math.PI/2;rod([x,y,z+.016],[x+.016,y+.014,z+.016],.002,dark);}
 function fan(x,y,z,r){const base=cyl(r,.018,x,y,z,dark);base.rotation.x=Math.PI/2;for(let i=1;i<=3;i++){const o=mesh(new T.TorusGeometry(r*i/3,.0025,5,24),black);o.position.set(x,y,z+.012);}for(const a of [0,Math.PI/2]){const o=box(r*1.7,.005,.008,x,y,z+.02,black);o.rotation.z=a;}}
 function label(w,h,x,y,z,m){box(w,h,.007,x,y,z,m);}
 // 帶紅色燃燒器的兩個金屬箱，前板框、燃燒器外殼與金屬軟管。
 for(const x of [-3.25,-2.20]){box(.82,.91,.65,x,.52,-2.05,steel);box(.74,.82,.018,x,.52,-1.715,white);for(const dx of [-.37,.37])box(.012,.82,.015,x+dx,.52,-1.70,steel);for(const y of [.12,.93])box(.74,.014,.015,x,y,-1.70,steel);for(const dx of [-.31,.31])box(.065,.12,.52,x+dx,.07,-2.05,steel);rounded(.27,.19,.19,x,.56,-1.60,red);const cap=cyl(.095,.055,x+.12,.56,-1.60,red);cap.rotation.z=Math.PI/2;for(const dx of [-.06,.035])box(.055,.037,.012,x+dx,.61,-1.498,dark);box(.025,.012,.012,x,.55,-1.498,gray);box(.10,.075,.08,x,.42,-1.6,black);rod([x+.18,.53,-1.65],[x+.48,.53,-1.65],.015,steel);gauge(x+.35,.64,-1.64);tube([[x-.08,.48,-1.57],[x-.04,.32,-1.52],[x+.12,.31,-1.52],[x+.18,.53,-1.62]],.009,steel);tube([[x+.48,.53,-1.65],[x+.50,.72,-1.68],[x+.50,1.42,-1.75]],.012,steel);box(.54,.10,.44,x,1.02,-2.05,steel);}
 // 過濾／軟化組：兩支淺綠筒、黑色頂閥、固定帶及旁側不鏽鋼控制架。
 box(1.78,.055,.65,-.12,.045,-2.12,steel);
 for(const x of [-.69,-.22]){capsule(x,.64,-2.15,.19,.82,resin);cyl(.16,.18,x,.14,-2.15,dark);for(const y of [.40,.85])cyl(.194,.026,x,y,-2.15,dark);box(.17,.12,.16,x,1.17,-2.15,black);label(.105,.045,x,1.19,-2.063,gray);label(.16,.08,x,.90,-1.954,blue);}
 rod([-.86,1.12,-2.15],[.10,1.12,-2.15],.026,dark);tube([[.1,1.12,-2.15],[.21,1.07,-2.15],[.21,.20,-2.15],[.73,.20,-2.15]],.022,dark);
 for(const x of [.12,.86])for(const z of [-2.40,-1.87])box(.025,1.18,.025,x,.61,z,steel);for(const y of [.10,.49,1.19]){box(.77,.025,.025,.49,y,-1.87,steel);box(.77,.025,.025,.49,y,-2.40,steel);}
 box(.43,.43,.09,.40,.89,-1.84,steel);label(.29,.17,.40,.89,-1.789,gray);label(.17,.085,.40,.90,-1.780,cyan);for(const x of [.25,.35,.48]){const o=cyl(.014,.015,x,.73,-1.776,x===.35?red:dark);o.rotation.x=Math.PI/2;}
 for(const x of [.65,.78]){cyl(.035,.36,x,.91,-1.86,white);for(const y of [.73,1.09])cyl(.045,.035,x,y,-1.86,dark);rod([x,.77,-1.82],[x,.91,-1.82],.008,red);}
 cyl(.055,.35,.51,.29,-2.1,blue);cyl(.075,.22,.51,.25,-1.96,steel);rod([.51,.14,-1.96],[.84,.14,-1.96],.022,steel);
 // 濾芯筒、背面的橫向白色膜殼與左側圓桶。
 for(const x of [.26,.66])cyl(.055,.28,x,.40,-2.25,dark);
 for(const y of [.58,.78])rod([.19,y,-2.32],[.87,y,-2.32],.058,white);
 cyl(.20,.67,-1.22,.38,-2.10,white);cyl(.205,.03,-1.22,.72,-2.10,black);
 // 後側不鏽鋼槽體：三道折邊、上蓋、馬達散熱片與壓力表。
 const X=1.90,Z=-2.08;box(1.28,.72,.50,X,.46,Z,steel);for(const x of [X-.56,X+.56])box(.065,.16,.43,x,.10,Z,steel);for(const y of [.25,.48,.71]){box(1.30,.045,.04,X,y,Z+.27,steel);box(1.30,.045,.04,X,y,Z-.27,steel);}box(1.32,.035,.54,X,.84,Z,steel);
 for(const x of [X-.44,X+.15]){tube([[x-.045,.86,Z],[x-.045,.90,Z],[x+.045,.90,Z],[x+.045,.86,Z]],.006,dark);}
 cyl(.085,.24,X+.30,1.02,Z,gray);cyl(.094,.045,X+.30,1.16,Z,white);cyl(.105,.035,X+.30,.89,Z,steel);for(let i=0;i<12;i++){const a=i*Math.PI/6;box(.013,.18,.013,X+.30+Math.cos(a)*.086,1.02,Z+Math.sin(a)*.086,steel);}tube([[X+.33,1.05,Z],[X+.48,1.08,Z],[X+.50,1.32,Z]],.008,black);gauge(X-.40,1.04,Z+.06);
 // 藍色儲桶的加強環、上蓋與接管。
 cyl(.24,.94,3.0,.52,-2.12,blue);for(const y of [.20,.43,.67,.90])cyl(.246,.024,3.0,y,-2.12,blue);cyl(.20,.035,3.0,1.01,-2.12,blue);tube([[3,1.04,-2.12],[3,1.24,-2.12],[2.83,1.24,-2.12]],.022,dark);
 // 灰色高控制櫃的圓形風扇、下方百葉、燈號與側邊鉸鏈。
 box(.35,1.22,.28,3.39,.68,.10,gray);box(.32,1.19,.015,3.39,.68,.249,steel);box(.35,.08,.28,3.39,.06,.10,dark);fan(3.39,1.05,.268,.058);for(let row=0;row<8;row++)for(const dx of [-.09,-.03,.03,.09])box(.043,.007,.01,3.39+dx,.24+row*.025,.264,dark);for(const y of [.40,1.16])box(.02,.045,.02,3.22,y,.26,dark);for(let j=0;j<3;j++)cyl(.012,.027,3.39,1.32+j*.027,.10,[yellow,blue,red][j]);
 // 黃色供應管線與紅色頂管依近照沿走道上方排列，不指定供應介質。
 tube([[-3.65,1.42,-1.76],[-3.5,1.52,-1.76],[2.9,1.52,-1.76],[3.15,1.42,-1.76],[3.15,1.10,-1.76]],.026,yellow);
 for(const x of [-3.2,-2.1,-.9,.4,1.8,3])box(.09,.04,.09,x,1.55,-1.76,steel);
 tube([[-3.8,1.61,-1.3],[3.2,1.61,-1.3],[3.2,1.61,-.52]],.015,red);
 const light=new T.MeshStandardMaterial({color:'#f7ffff',emissive:'#e8ffff',emissiveIntensity:.7});for(const x of [-3,-1.8,-.6,.6,1.8,2.8])box(.62,.018,.022,x,1.60,-1.62,light);
 for(const x of [-1.91,-1.71])gauge(x,1.29,-.76);cyl(.018,.04,-1.96,1.22,-.93,red);
 // 灰色機櫃補上前板把手與兩組底部排放彎管。
 box(.014,.065,.014,-1.73,.65,-.635,black);for(const x of [-2.35,-1.76]){tube([[x,.14,-.65],[x,.08,-.58],[x+.07,.08,-.58]],.010,red);rod([x-.025,.19,-.65],[x+.025,.19,-.65],.005,yellow);}
}
