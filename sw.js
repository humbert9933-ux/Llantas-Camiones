const CACHE_NAME = 'global-tyre-v1';
const assets = [
  '/',
  '/index.html',
  '/logo.jpg',
  '/llantas_maxell_camion.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
