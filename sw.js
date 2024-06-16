// Cache name
const CACHE_NAME = 'pwa-sample-caches-v1';
// Cache targets
const urlsToCache = [
  './',
  './index.html',
  './class-exhibition.html',
  './important-message.html',
  'https://sites.google.com/edu.nishiyamato.ed.jp/41thj2-4/home',
  './css/style.css',
  './images/a.jpg',
  './images/b.jpg',
  './images/c.jpg',
];
 
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});
 
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => {
        return response ? response : fetch(event.request);
      })
  );
});
