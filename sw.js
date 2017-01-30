this.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/style.css',
        '/app.js',
        '/js.cookie.js',
        '/sw-test/star-wars-logo.jpg',
        '/sw-test/gallery/',
        '/favicon.jpg',
        '/characterThemes.js'
      ]);
    })
  );
});
