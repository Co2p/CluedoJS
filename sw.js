var version = 'v0.2.1';

self.addEventListener('install', (event) => {
  //console.log('WORKER: install event in progress.');
  event.waitUntil(
    caches.open(version + 'basics').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/css/style.css',
        '/css/material.blue_grey-red.min.css',
        '/css/material.min.css',
        '/js/app.js',
        '/js/js.cookie.js',
        '/js/characterThemes.js',
        '/res/favicon.png'
      ]);
    }).then(()=> {
      console.log('WORKER: install ' + version +' completed');
    })
  );
});

self.addEventListener("fetch", (event) => {
  //console.log('WORKER: fetch event in progress.');

  if (event.request.method !== 'GET') {
    /* If we don't block the event as shown below, then the request will go to the network as usual.*/
    console.log('WORKER: fetch event ignored.', event.request.method, event.request.url);
    return;
  }
  /* Similar to event.waitUntil in that it blocks the fetch event on a promise.
     Fulfillment result will be used as the response, and rejection will end in a
     HTTP response indicating failure.
  */
  event.respondWith(
    caches.match(event.request).then((cached) => {
        /* Even if the response is in our cache, we go to the network as well.
           This pattern is known for producing "eventually fresh" responses,
           where we return cached responses immediately, and meanwhile pull
           a network response and store that in the cache.
           Read more:
           https://ponyfoo.com/articles/progressive-networking-serviceworker
        */
        var networked = fetch(event.request)
          // We handle the network request with success and failure scenarios.
          .then(fetchedFromNetwork, unableToResolve)
          // We should catch errors on the fetchedFromNetwork handler as well.
          .catch(unableToResolve);

        /* We return the cached response immediately if there is one, and fall
           back to waiting on the network as usual.
        */
        //console.log('WORKER: fetch event', cached ? '(cached)' : '(network)', event.request.url);
        return cached || networked;

        function fetchedFromNetwork(response) {
          /* We copy the response before replying to the network request.
             This is the response that will be stored on the ServiceWorker cache.
          */
          var cacheCopy = response.clone();

          //console.log('WORKER: fetch response from network.', event.request.url);

          caches.open(version + 'pages').then(function add(cache) {
              /* We store the response for this request. It'll later become
                 available to caches.match(event.request) calls, when looking
                 for cached responses.
              */
              cache.put(event.request, cacheCopy);
            })
            .then(() => {
              //console.log('WORKER: fetch response stored in cache.', event.request.url);
            });

          // Return the response so that the promise is settled in fulfillment.
          return response;
        }

        /* When this method is called, it means we were unable to produce a response
           from either the cache or the network. This is our opportunity to produce
           a meaningful response even when all else fails. It's the last chance, so
           you probably want to display a "Service Unavailable" view or a generic
           error response.
        */
        function unableToResolve () {
          /* There's a couple of things we can do here.
             - Test the Accept header and then return one of the `offlineFundamentals`
               e.g: `return caches.match('/some/cached/image.png')`
             - You should also consider the origin. It's easier to decide what
               "unavailable" means for requests against your origins than for requests
               against a third party, such as an ad provider
             - Generate a Response programmaticaly, as shown below, and return that
          */

          console.log('WORKER: fetch request failed in both cache and network.', event.request.url);

          /* Here we're creating a response programmatically. The first parameter is the
             response body, and the second one defines the options for the response.
          */
          return new Response('<h1>Service Unavailable</h1>', {
            status: 503,
            statusText: 'Service Unavailable',
            headers: new Headers({
              'Content-Type': 'text/html'
            })
          });
        }
      })
  );
});

self.addEventListener("activate", (event) => {
  /* Just like with the install event, event.waitUntil blocks activate on a promise.
     Activation will fail unless the promise is fulfilled.
  */
  event.waitUntil(
    caches.keys()
      .then((keys) => {
        // We return a promise that settles when all outdated caches are deleted.
        return Promise.all(
          keys.filter((key) => {
              // Filter by keys that don't start with the latest version prefix.
              return !key.startsWith(version);
            })
            .map((key) => {
              /* Return a promise that's fulfilled
                 when each outdated cache is deleted.
              */
              return caches.delete(key);
            })
        );
      })
      .then(() => {
        console.log('WORKER: activate completed.');
      })
  );
});
