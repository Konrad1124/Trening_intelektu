var VERSION = 'Beta19';
 
var URLS = [    
  ``,
  `index.html`,
  `style.css`,
  `scrypt.js`,
  `worker.js`,
  `assets/begin-game.png`,
  `assets/come-back.png`,
  `assets/delate-file.png`,
  `assets/exit.png`,
  `assets/my-results.png`,
  `assets/start-intellect-exercise.png`,
  `assets/training-of-intellect.png`,
  `assets/trening-of-mind48.png`,
  `assets/trening-of-mind72.png`,
  `assets/trening-of-mind96.png`,
  `assets/trening-of-mind144.png`,
  `assets/trening-of-mind168.png`,
  `assets/trening-of-mind192.png`,
  `assets/trening-of-mind512.png`,
]

self.addEventListener("install", (e) => {
  console.log("[Service Worker] Install");
  e.waitUntil((async () => {
    const cache = await caches.open(VERSION).then(filesUpdate);
    console.log('[Service Worker] Caching all: app shell and content');
    

  })());
});

const filesUpdate = cache => {
  const stack = [];
  URLS.forEach(file => stack.push(
      cache.add(file).catch(_=>console.error(`can't load ${file} to cache`))
  ));
  return Promise.all(stack);
};

self.addEventListener('fetch', (e) => {
  
  e.respondWith(
    caches.match(e.request).then(async (response) => {
      if (response) {
        return response;
      }
      return fetch(e.request);
    })
  );

});

self.addEventListener('activate', (e) => {
  e.waitUntil(self.registration.navigationPreload.enable());
  console.log("caches");
  async function onActivate() {
    const keys = await caches.keys();
    return await Promise.all(
      keys.filter((key) => key !== VERSION).map((key_1) => caches.delete(key_1))
    );
  }
 
  e.waitUntil(onActivate(e));
});
