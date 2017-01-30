this.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        '/CluedoCardJS/',
        '/CluedoCardJS/index.html',
        '/CluedoCardJS/style.css',
        '/CluedoCardJS/app.js',
        '/CluedoCardJS/js.cookie.js',
        '/CluedoCardJS/favicon.png',
        '/CluedoCardJS/characterThemes.js',
        'https://code.jquery.com/jquery-3.1.0.min.js'
      ]);
    })
  );
});

this.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
  );
});
