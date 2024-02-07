var GHPATH = '/Trening_intelektu';
var APP_PREFIX = 'TI_';
var VERSION = 'Beta14';
 
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
  async function onInstall() {
    const cache = await caches
      .open(VERSION);
    return await cache.addAll(URLS);
  }
 
  e.waitUntil(onInstall(e));
});

self.addEventListener('fetch', (e) => {

  e.respondWith(
    caches.match(e.request).then((response) => {
      if (response) {
        return response;
      }
      return fetch(e.request);
    })
  );

});

self.addEventListener("activate", (e) => {
  async function onActivate() {
    console.log(`active`);
    const keys = await caches.keys();
    return await Promise.all(
      keys.filter((key) => key !== VERSION).map((key_1) => caches.delete(key_1))
    );
  }
 
  e.waitUntil(onActivate(e));
});


self.addEventListener("sync", (event) => {
  if (event.tag === "event1") {
    console.log("event1")
    event.waitUntil(doSomething());
  }
});