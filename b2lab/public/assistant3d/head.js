// 沿用既有本機引擎，讓頭像旋轉不增加外部服務請求。
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
  // 害羞表情獨立切換，關閉招呼後恢復原本的眼睛與微笑。
  const blush=new T.MeshBasicMaterial({color:0xff899b});
  const cheeks=[ball(-.46,-.14,1.11,.14,.065,.025,blush),ball(.46,-.14,1.11,.14,.065,.025,blush)];
  const shyEyes=[-.3,.3].map(x=>{const e=new T.Mesh(new T.TorusGeometry(.09,.018,8,24,Math.PI),mint);e.position.set(x,.1,1.125);group.add(e);return e;});
  let shy=false;
  let timer=null,dead=false,sleeping=false,running=false,dragging=false,returning=false,yaw=0;
  let last=performance.now(),idleStart=last,restUntil=0;
  function frame(speaking=false){
    if(dead)return;
    const now=performance.now();const blink=sleeping||now%4500<160;
    const dt=Math.min(.2,(now-last)/1000);last=now;
    eyes.forEach(e=>e.scale.y=blink?.025:.12);
    smile.scale.y=sleeping?.6:speaking?1+.6*Math.sin(now/110):1;
    if(running&&!sleeping&&!dragging){
      if(returning){
        yaw*=Math.exp(-dt*5);
        if(Math.abs(yaw)<.003){yaw=0;returning=false;restUntil=now+600;idleStart=restUntil;}
      }else if(now>=restUntil)yaw=.28*Math.sin((now-idleStart)/2600);
    }
    eyes.forEach(e=>e.visible=!shy||sleeping);shyEyes.forEach(e=>e.visible=shy&&!sleeping);cheeks.forEach(e=>e.visible=shy&&!sleeping);
    group.rotation.x=shy&&!sleeping?.10:0;group.rotation.z=shy&&!sleeping?-.12:0;
    smile.scale.x=shy?.65:1;if(shy&&!sleeping)smile.scale.y=.55;
    group.rotation.y=yaw;renderer.render(scene,camera);
  }
  frame();
  return {
    setShy(on){shy=on;frame();},
    setSleeping(on){sleeping=on;frame();},
    turn(angle){dragging=true;returning=false;yaw=Math.max(-.6,Math.min(.6,angle));frame();},
    endTurn(reset=false){dragging=false;returning=true;if(reset){yaw=0;returning=false;}frame();},
    animate(on,busy=()=>false){clearInterval(timer);timer=null;running=on;last=performance.now();if(on)timer=setInterval(()=>frame(busy()),66);else frame();},
    destroy(){dead=true;clearInterval(timer);group.traverse(o=>o.geometry?.dispose());[white,orange,dark,mint,blush].forEach(m=>m.dispose());renderer.dispose();renderer.domElement.remove();}
  };
}
