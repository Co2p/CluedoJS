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
        'https://code.jquery.com/jquery-3.1.0.min.js',
        'https://fonts.googleapis.com/icon?family=Material+Icons',
        'https://code.getmdl.io/1.2.1/material.min.js'
      ]);
    })
  );
});

this.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
  );
});
