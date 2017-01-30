this.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        '/CluedoCardJS/',
        '/CluedoCardJS/index.html',
        '/CluedoCardJS/style.css',
        '/CluedoCardJS/app.js',
        '/CluedoCardJS/js.cookie.js',
        '/CluedoCardJS/favicon.jpg',
        '/CluedoCardJS/characterThemes.js'
      ]);
    })
  );
});

this.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
  );
});
