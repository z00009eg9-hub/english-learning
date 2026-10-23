// 按需載入既有 Three.js，避免只讀文章也下載 3D 引擎。
export async function mountHead(host) {
  const T = await import('../work3d/vendor/three.module.js');
  const renderer = new T.WebGLRenderer({alpha:true,antialias:true});
  renderer.setPixelRatio(Math.min(devicePixelRatio,2)); renderer.setSize(56,56);
  renderer.setClearColor(0,0); host.append(renderer.domElement);
  const scene=new T.Scene(), camera=new T.PerspectiveCamera(32,1,.1,30);
  camera.position.set(0,0,4.5);
  scene.add(new T.HemisphereLight(0xffffff,0x777065,3));
  const light=new T.DirectionalLight(0xffffff,4); light.position.set(-3,5,6);scene.add(light);
  const group=new T.Group();scene.add(group);
  const white=new T.MeshStandardMaterial({color:0xf5f5ef,roughness:.38});
  const orange=new T.MeshStandardMaterial({color:0xee893e,roughness:.4});
  const dark=new T.MeshStandardMaterial({color:0x25383c,roughness:.32});
  const mint=new T.MeshBasicMaterial({color:0xb0e9d6});
  const ball=(x,y,z,sx,sy,sz,mat)=>{
    const m=new T.Mesh(new T.SphereGeometry(1,32,24),mat);m.position.set(x,y,z);m.scale.set(sx,sy,sz);group.add(m);return m;
  };
  ball(0,0,0,1,1,1,white);ball(0,-.03,.83,.77,.77,.28,dark);
  ball(-.98,0,0,.17,.36,.28,orange);ball(.98,0,0,.17,.36,.28,orange);
  const band=new T.Mesh(new T.TorusGeometry(1.01,.055,12,64,Math.PI),orange);group.add(band);
  const eyes=[ball(-.3,.15,1.1,.065,.12,.025,mint),ball(.3,.15,1.1,.065,.12,.025,mint)];
  const smile=new T.Mesh(new T.TorusGeometry(.19,.023,8,32,Math.PI),mint);smile.rotation.z=Math.PI;smile.position.set(0,-.17,1.12);group.add(smile);
  ball(.59,-.42,1,.11,.055,.05,dark);
  let timer=null,dead=false;
  function frame(speaking=false){
    if(dead)return;
    const now=performance.now();const blink=now%4500<160;
    eyes.forEach(e=>e.scale.y=blink?.025:.12);
    smile.scale.y=speaking?1+.6*Math.sin(now/110):1;
    group.rotation.y=.045*Math.sin(now/1300);renderer.render(scene,camera);
  }
  frame();
  return {
    animate(on,busy=()=>false){clearInterval(timer);timer=null;if(on)timer=setInterval(()=>frame(busy()),120);else frame();},
    destroy(){dead=true;clearInterval(timer);group.traverse(o=>o.geometry?.dispose());[white,orange,dark,mint].forEach(m=>m.dispose());renderer.dispose();renderer.domElement.remove();}
  };
}
