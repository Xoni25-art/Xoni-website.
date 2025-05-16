self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('xoni-cache').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.json',
        '/icons/xoni-icon-192.png',
        '/icons/xoni-icon-512.png'
        // Ide adhatsz még további fájlokat
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
