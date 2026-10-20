import { EQUIP } from './equip-data.js';

export function list() { return EQUIP.map(({ id, en, zh }) => ({ id, en, zh })); }

// 同步回傳控制器，讓尚在下載模組時離頁也能立即銷毀。
export function mount(containerEl, equipId, opts = {}) {
  const equip = EQUIP.find(e => e.id === equipId);
  if (!equip) throw new RangeError(`Unknown equipment: ${equipId}`);
  const root = document.createElement('section'); root.className = 'w3d-root';
  root.innerHTML = `<style>
.w3d-root{color:var(--w3d-fg,inherit);background:var(--w3d-bg,transparent);font:inherit;min-width:0}
.w3d-root .w3d-stage{height:clamp(320px,55vh,560px);position:relative;overflow:hidden;border:1px solid var(--w3d-border,#8886);border-radius:16px}
.w3d-root .w3d-canvas{display:block;width:100%;height:100%;touch-action:none}
.w3d-root .w3d-marker{position:absolute;transform:translate(-50%,-50%);border-radius:50%;width:36px;height:36px;padding:0;z-index:1}
.w3d-root .w3d-button{font:inherit;cursor:pointer;color:inherit;background:var(--w3d-button-bg,Canvas);border:1px solid var(--w3d-border,#8888);padding:8px 12px;border-radius:10px;min-height:40px}
.w3d-root .w3d-button[aria-pressed=true]{outline:2px solid var(--w3d-accent,#bd732e);outline-offset:-2px}
.w3d-root .w3d-toolbar,.w3d-root .w3d-parts{display:flex;flex-wrap:wrap;gap:8px;margin:12px 0}
.w3d-root .w3d-detail{border:1px solid var(--w3d-border,#8886);border-radius:12px;padding:16px;overflow-wrap:anywhere}
.w3d-root .w3d-title{font-size:1.2em;margin:0 0 8px}
.w3d-root .w3d-text{margin:8px 0;line-height:1.6}
.w3d-root .w3d-note{font-size:.85em;opacity:.75}
.w3d-root .w3d-status{position:absolute;inset:12px;pointer-events:none}
</style><h2 class="w3d-title"></h2><p class="w3d-note"></p><div class="w3d-toolbar"><button type="button" class="w3d-button w3d-reset">全景</button><button type="button" class="w3d-button w3d-rotate" aria-pressed="false">自動旋轉</button></div><div class="w3d-stage"><span class="w3d-status" role="status">正在載入 3D…</span></div><div class="w3d-parts" aria-label="設備部件"></div><div class="w3d-detail" aria-live="polite"></div>`;
  containerEl.append(root);
  const q = s => root.querySelector('.w3d-' + s);
  q('title').textContent = `${equip.en} · ${equip.zh}`; q('note').textContent = equip.note;
  let dead = false, cleanup = () => {}, select3d = () => {}, active = 0;
  const abort = new AbortController();
  const listen = (el, type, fn) => el.addEventListener(type, fn, { signal: abort.signal });
  const buttons = equip.parts.map((part, i) => {
    const b = document.createElement('button'); b.type = 'button'; b.className = 'w3d-button'; b.textContent = `${part.n} ${part.zh}`;
    listen(b, 'click', () => select(i)); q('parts').append(b); return b;
  });
  function select(i, move = true) {
    active = i; const part = equip.parts[i];
    buttons.forEach((b, j) => b.setAttribute('aria-pressed', String(i === j)));
    q('detail').replaceChildren();
    for (const [tag, text] of [['h3', `${part.n}. ${part.en} · ${part.zh}`], ['p', part.desc], ['p', part.ex], ['p', part.exCn]]) {
      const el = document.createElement(tag); el.className = tag === 'h3' ? 'w3d-title' : 'w3d-text'; el.textContent = text;
      if (text === part.ex && typeof opts.speak === 'function') {
        const b = document.createElement('button'); b.type = 'button'; b.className = 'w3d-button'; b.textContent = '🔊'; b.setAttribute('aria-label', '朗讀例句');
        // 舊部件的按鈕隨節點移除，避免反覆選取累積監聽。
        b.onclick = () => opts.speak(part.ex); el.append(' ', b);
      }
      q('detail').append(el);
    }
    select3d(i, move); opts.onPart?.(part);
  }
  select(0, false);
  Promise.all([import('./vendor/three.module.js'), import('./vendor/OrbitControls.js'), import('./model.js')]).then(([T, { OrbitControls }, { buildModel }]) => {
    if (dead) return;
    const scene = new T.Scene(), camera = new T.PerspectiveCamera(38, 1, .1, 100);
    let renderer, controls, resize, observer, frame = 0, visible = true;
    const markers = [], geometries = new Set(), materials = new Set();
    cleanup = () => {
      cancelAnimationFrame(frame); resize?.disconnect(); observer?.disconnect(); controls?.dispose();
      scene.traverse(o => { if (o.geometry) geometries.add(o.geometry); if (o.material) (Array.isArray(o.material) ? o.material : [o.material]).forEach(m => materials.add(m)); });
      geometries.forEach(g => g.dispose()); materials.forEach(m => m.dispose()); scene.clear();
      renderer?.dispose(); renderer?.forceContextLoss(); renderer?.domElement.remove();
    };
    try {
      renderer = new T.WebGLRenderer({ antialias: true, alpha: true }); renderer.domElement.className = 'w3d-canvas';
      renderer.domElement.setAttribute('aria-label', '設備 3D 模型；拖曳旋轉，雙指縮放');
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2)); q('stage').prepend(renderer.domElement);
      camera.position.set(5,4.4,6); controls = new OrbitControls(camera, renderer.domElement); controls.target.set(0,1.4,0);
      controls.enableDamping = true; controls.minDistance = 3; controls.maxDistance = 12; controls.maxPolarAngle = Math.PI * .48;
      scene.add(new T.HemisphereLight(0xffffff,0x78877c,2.5)); const light = new T.DirectionalLight(0xffffff,3); light.position.set(3,7,4); scene.add(light);
      buildModel(T, scene);
      let destination = null, previous = 0;
      function stopRotate() { controls.autoRotate = false; q('rotate').setAttribute('aria-pressed','false'); }
      equip.parts.forEach((part, i) => {
        const b = document.createElement('button'); b.type = 'button'; b.className = 'w3d-button w3d-marker'; b.textContent = part.n; b.setAttribute('aria-label', `${part.n} ${part.en} ${part.zh}`);
        listen(b,'click',() => select(i)); q('stage').append(b); markers.push(b);
      });
      select3d = (i, move) => {
        markers.forEach((b,j) => b.setAttribute('aria-pressed', String(i === j)));
        if (move) { stopRotate(); const p = equip.parts[i]; destination = { pos: new T.Vector3(...p.cam), target: new T.Vector3(...p.target) }; }
      };
      select3d(active, false);
      listen(q('reset'),'click',() => { stopRotate(); destination = { pos: new T.Vector3(5,4.4,6), target: new T.Vector3(0,1.4,0) }; });
      listen(q('rotate'),'click',() => { destination = null; controls.autoRotate = !controls.autoRotate; q('rotate').setAttribute('aria-pressed',String(controls.autoRotate)); });
      controls.addEventListener('start',() => { destination = null; });
      resize = new ResizeObserver(() => {
        const w = q('stage').clientWidth, h = q('stage').clientHeight; if (!w || !h) return;
        renderer.setSize(w,h); camera.aspect = w/h; camera.fov = T.MathUtils.radToDeg(2*Math.atan(Math.tan(T.MathUtils.degToRad(38)/2)/Math.min(camera.aspect,1))); camera.updateProjectionMatrix();
      }); resize.observe(q('stage'));
      function animate(now) {
        frame = 0; if (dead || !visible || document.hidden) return;
        const dt = Math.min((now - previous)/1000,.05); previous = now;
        if (destination) { const f = 1-Math.exp(-5*dt); camera.position.lerp(destination.pos,f); controls.target.lerp(destination.target,f); if (camera.position.distanceTo(destination.pos)<.01) destination = null; }
        controls.update(dt);
        equip.parts.forEach((p,i) => { const v = new T.Vector3(...p.point).project(camera); markers[i].style.left = (v.x*.5+.5)*q('stage').clientWidth+'px'; markers[i].style.top = (-v.y*.5+.5)*q('stage').clientHeight+'px'; markers[i].hidden = Math.abs(v.z)>1 || Math.abs(v.x)>1 || Math.abs(v.y)>1; });
        renderer.render(scene,camera); frame = requestAnimationFrame(animate);
      }
      function sync() { cancelAnimationFrame(frame); frame = 0; if (!dead && visible && !document.hidden) { previous = performance.now(); frame = requestAnimationFrame(animate); } }
      observer = new IntersectionObserver(entries => { visible = entries[0].isIntersecting; sync(); }); observer.observe(q('stage'));
      listen(document,'visibilitychange',sync); q('status').remove(); sync();
    } catch (error) { cleanup(); throw error; }
  }).catch(() => { if (!dead) q('status').textContent = '無法載入 3D，請確認瀏覽器支援 WebGL。仍可點選下方部件學英文。'; });
  return { destroy() { if (dead) return; dead = true; abort.abort(); cleanup(); select3d = () => {}; root.remove(); } };
}
