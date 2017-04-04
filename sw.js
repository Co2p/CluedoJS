var version = 'v0.1';

self.addEventListener('install', function(event) {
  console.log('WORKER: install event in progress.');
  event.waitUntil(
    caches.open(version + 'basics').then(function(cache) {
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
    }).then(()=> {
      console.log('WORKER: install completed');
    })
  );
});

this.addEventListener('fetch', function(event) {
  console.log('WORKER: fetch event in progress.');

  var requestURL = new URL(event.request.url);
  if (requestURL.hostname == 'co2p.github.com') {
    event.respondWith(
      caches.match(event.request);
    );
  } else {
    //
  }
});
