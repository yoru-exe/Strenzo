/* STRENZO service worker — caches the app shell only.
   Live data (API) and stream embeds always go to the network so nothing stale is served. */
const VERSION = 'strenzo-v2';
const SHELL = [
  './', './index.html', './manifest.webmanifest', './logo.png',
  './favicon.ico', './favicon-16.png', './favicon-32.png',
  './apple-touch-icon.png', './icon-192.png', './icon-512.png',
  './icon-maskable-192.png', './icon-maskable-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(VERSION).then(cache => cache.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(key => key !== VERSION).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  // Only handle same-origin requests; API calls, embeds and remote thumbnails pass straight through.
  if (url.origin !== self.location.origin) return;

  // Page navigations: network first, fall back to the cached shell when offline.
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then(response => {
          const copy = response.clone();
          caches.open(VERSION).then(cache => cache.put('./index.html', copy));
          return response;
        })
        .catch(() => caches.match('./index.html').then(hit => hit || caches.match('./')))
    );
    return;
  }

  // Static assets: cache first, refresh in the background.
  event.respondWith(
    caches.match(request).then(hit => {
      const refresh = fetch(request).then(response => {
        if (response && response.ok) { const copy = response.clone(); caches.open(VERSION).then(cache => cache.put(request, copy)); }
        return response;
      }).catch(() => hit);
      return hit || refresh;
    })
  );
});
