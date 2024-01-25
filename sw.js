var GHPATH = '/Trening_intelektu';
var APP_PREFIX = 'TI_';
var VERSION = 'Beta11';
 
var URLS = [    
  `${GHPATH}/`,
  `${GHPATH}/index.html`,
  `${GHPATH}/styles.css`,
  `${GHPATH}/scrypt.js`,
  `${GHPATH}/icon.ico`,
  `${GHPATH}/styles.css`
]

self.addEventListener("install", (e) => {
  console.log("[Service Worker] Install");
  e.waitUntil((async () => {
    const cache = await caches.open(VERSION);
    console.log('[Service Worker] Caching all: app shell and content');
    await cache.addAll(URLS);
  })());
});

self.addEventListener('fetch', (e) => {

  if (!(
     e.request.url.startsWith('http:') || e.request.url.startsWith('https:')
  )) {
      return; 
  }

e.respondWith((async () => {
  const request = await caches.match(e.request);
  console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
  if (request) {
    return request;
  }
  const response = await fetch(e.request);
  const cache = await caches.open(VERSION);
  console.log(`[Service Worker] Caching new resource: ${e.request.url}`);
  cache.put(e.request, response.clone());
  return response;
})());
});

self.addEventListener("activate", (e) => {
  console.log(`active`);
  e.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key === VERSION) {
            return;
          }
          return caches.delete(key);
        }),
      );
    }),
  );
});