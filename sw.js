var GHPATH = '/Trening_intelektu';
var APP_PREFIX = 'TI_';
var VERSION = 'Beta15';
 
var URLS = [    
  `${GHPATH}/`,
  `${GHPATH}/index.html`,
  `${GHPATH}/styles.css`,
  `${GHPATH}/scrypt.js`,
  `${GHPATH}/worker.js`,
  `${GHPATH}assets/begin-game.png`,
  `${GHPATH}assets/come-back.png`,
  `${GHPATH}assets/delate-file.png`,
  `${GHPATH}assets/exit.png`,
  `${GHPATH}assets/my-results.png`,
  `${GHPATH}assets/start-intellect-exercise.png`,
  `${GHPATH}assets/training-of-intellect.png`,
  `${GHPATH}assets/trening-of-mind48.png`,
  `${GHPATH}assets/trening-of-mind72.png`,
  `${GHPATH}assets/trening-of-mind96.png`,
  `${GHPATH}assets/trening-of-mind144.png`,
  `${GHPATH}assets/trening-of-mind168.png`,
  `${GHPATH}assets/trening-of-mind192.png`,
  `${GHPATH}assets/trening-of-mind512.png`,
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
  console.log(caches);
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
  e.waitUntil(self.registration?.navigationPreload.enable());
  console.log(caches);
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
