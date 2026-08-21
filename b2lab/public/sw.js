/* B2 Read — Service Worker
   策略：同源檔案用 network-first（有網路一定拿到最新的每日內容），
   離線時回退到快取，所以在飛機上或沒訊號也能讀已載入過的內容。
   Firestore / gstatic 等跨網域請求完全不攔截，避免影響雲端同步。 */
const CACHE = 'b2lab-v42';
const SHELL = [
  './',
  './index.html',
  './manifest.json',
  './data-notes.js',
  './data-reading.js',
  './data-grammar.js',
  './data-focus.js',
  './data-daily.js',
  './data-book.js',
  './data-a2.js',
  './data-art.js',
  './data-gramviz.js',
  './data-listen.js',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/apple-touch-icon.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => Promise.all(SHELL.map(u => c.add(u).catch(() => null))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;   // 不碰 Firestore / CDN

  e.respondWith(
    fetch(req)
      .then(res => {
        if (res && res.status === 200) {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(req, copy)).catch(() => {});
        }
        return res;
      })
      .catch(() => caches.match(req).then(hit => hit || caches.match('./index.html')))
  );
});
