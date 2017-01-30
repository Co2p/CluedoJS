this.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        '/CluedoCardJS/',
        '/CluedoCardJS/index.html',
        '/CluedoCardJS/css/style.css',
        '/CluedoCardJS/css/material.blue_grey-red.min.css',
        '/CluedoCardJS/app.js',
        '/CluedoCardJS/js.cookie.js',
        '/CluedoCardJS/characterThemes.js',
        '/CluedoCardJS/favicon.png'
      ]);
    })
  );
});

this.addEventListener('fetch', function(event) {
  var requestURL = new URL(event.request.url);

  if (requestURL.hostname == 'co2p.github.com') {
    event.respondWith(
      caches.match(event.request);
    );
  } else {
    //
  }
});
