'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "d71158da1c0b7cfc181c2f13eaaa95db",
"assets/AssetManifest.bin.json": "d2978d81790dbf51dec4636be15f0d6d",
"assets/AssetManifest.json": "18e14113b8152f3a496aa0a6d6cb5bf3",
"assets/assets/icons/app_icon.svg": "6492dc8b5846efeb8beea5b43a08e4db",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "47e00fee3adfc1344d8ab0ded8a680a5",
"assets/NOTICES": "e70f054a32f6bce92376c1f9c501d11c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/web/icons/agora-market-icon.svg": "0809310c9c8ce8213a71b912864eb06c",
"assets/web/icons/android-icon-144x144.png": "63fa5dc585dccfddad1550ea018e4ce3",
"assets/web/icons/android-icon-192x192.png": "a5813fca5d400b7712cd910d9a868f31",
"assets/web/icons/android-icon-36x36.png": "5c350f57baf001af4bc9772f35b1cebb",
"assets/web/icons/android-icon-48x48.png": "760cb099828f455c2bf133cd917756fa",
"assets/web/icons/android-icon-72x72.png": "710ce6d2b582678e2602ec2d1c79f337",
"assets/web/icons/android-icon-96x96.png": "6f7c650497e0f06cb9563ffde8b1487b",
"assets/web/icons/apple-icon-114x114.png": "5d64b140f3390937171be2c6807582f9",
"assets/web/icons/apple-icon-120x120.png": "d9b16a7cc293c6cbccc85c35c7e1f2a9",
"assets/web/icons/apple-icon-144x144.png": "63fa5dc585dccfddad1550ea018e4ce3",
"assets/web/icons/apple-icon-152x152.png": "dfcfdeea88ba372a11401e86b5b29584",
"assets/web/icons/apple-icon-180x180.png": "8c7c5b979e2fdc20c9d728e60eb5cfe2",
"assets/web/icons/apple-icon-57x57.png": "ac04327359e662db4a84ddb889fe089d",
"assets/web/icons/apple-icon-60x60.png": "b0a6768649a4754d1a6931aec3a3ab9d",
"assets/web/icons/apple-icon-72x72.png": "710ce6d2b582678e2602ec2d1c79f337",
"assets/web/icons/apple-icon-76x76.png": "83caf1a683fe0d87b08ead4e6c03c2f2",
"assets/web/icons/apple-icon-precomposed.png": "10e144acf9e6a36cf67bc48009bc18d0",
"assets/web/icons/apple-icon.png": "10e144acf9e6a36cf67bc48009bc18d0",
"assets/web/icons/browserconfig.xml": "97775b1fd3b6e6c13fc719c2c7dd0ffe",
"assets/web/icons/favicon-16x16.png": "5130e0b0029e0ccdf2c8015df3e2b811",
"assets/web/icons/favicon-32x32.png": "8e92b5aa7e6180eb663effd80d7646b4",
"assets/web/icons/favicon-96x96.png": "28387b5b0f0ba58749ed538f0c2ef6a2",
"assets/web/icons/favicon.ico": "f869a2c9ecc2350eb82a6e12ca6f2750",
"assets/web/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"assets/web/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"assets/web/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"assets/web/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"assets/web/icons/manifest.json": "e50e6a1c9ed6452635d3211f39501e0d",
"assets/web/icons/ms-icon-144x144.png": "63fa5dc585dccfddad1550ea018e4ce3",
"assets/web/icons/ms-icon-150x150.png": "9223022b000ee835a7c091cefd0197a2",
"assets/web/icons/ms-icon-310x310.png": "0d56d3ab620dd4e6ace7b00bf4aaa962",
"assets/web/icons/ms-icon-70x70.png": "d950bf1443b00a5c8391e8ffc7ff3eeb",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "ba198539fd11f07f30930664a6ac73f1",
"icons/agora-market-icon.svg": "0809310c9c8ce8213a71b912864eb06c",
"icons/android-icon-144x144.png": "63fa5dc585dccfddad1550ea018e4ce3",
"icons/android-icon-192x192.png": "a5813fca5d400b7712cd910d9a868f31",
"icons/android-icon-36x36.png": "5c350f57baf001af4bc9772f35b1cebb",
"icons/android-icon-48x48.png": "760cb099828f455c2bf133cd917756fa",
"icons/android-icon-72x72.png": "710ce6d2b582678e2602ec2d1c79f337",
"icons/android-icon-96x96.png": "6f7c650497e0f06cb9563ffde8b1487b",
"icons/apple-icon-114x114.png": "5d64b140f3390937171be2c6807582f9",
"icons/apple-icon-120x120.png": "d9b16a7cc293c6cbccc85c35c7e1f2a9",
"icons/apple-icon-144x144.png": "63fa5dc585dccfddad1550ea018e4ce3",
"icons/apple-icon-152x152.png": "dfcfdeea88ba372a11401e86b5b29584",
"icons/apple-icon-180x180.png": "8c7c5b979e2fdc20c9d728e60eb5cfe2",
"icons/apple-icon-57x57.png": "ac04327359e662db4a84ddb889fe089d",
"icons/apple-icon-60x60.png": "b0a6768649a4754d1a6931aec3a3ab9d",
"icons/apple-icon-72x72.png": "710ce6d2b582678e2602ec2d1c79f337",
"icons/apple-icon-76x76.png": "83caf1a683fe0d87b08ead4e6c03c2f2",
"icons/apple-icon-precomposed.png": "10e144acf9e6a36cf67bc48009bc18d0",
"icons/apple-icon.png": "10e144acf9e6a36cf67bc48009bc18d0",
"icons/browserconfig.xml": "97775b1fd3b6e6c13fc719c2c7dd0ffe",
"icons/favicon-16x16.png": "5130e0b0029e0ccdf2c8015df3e2b811",
"icons/favicon-32x32.png": "8e92b5aa7e6180eb663effd80d7646b4",
"icons/favicon-96x96.png": "28387b5b0f0ba58749ed538f0c2ef6a2",
"icons/favicon.ico": "f869a2c9ecc2350eb82a6e12ca6f2750",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/manifest.json": "e50e6a1c9ed6452635d3211f39501e0d",
"icons/ms-icon-144x144.png": "63fa5dc585dccfddad1550ea018e4ce3",
"icons/ms-icon-150x150.png": "9223022b000ee835a7c091cefd0197a2",
"icons/ms-icon-310x310.png": "0d56d3ab620dd4e6ace7b00bf4aaa962",
"icons/ms-icon-70x70.png": "d950bf1443b00a5c8391e8ffc7ff3eeb",
"index.html": "ebb25ac592e3cd232a1a67c80205ae56",
"/": "ebb25ac592e3cd232a1a67c80205ae56",
"main.dart.js": "22d0ea5b941a54774f5bc1dd2e792aa8",
"manifest.json": "696357d72b3c34dfc7d0c3abb5e81fef",
"version.json": "eafd936937158ae403028cbbd5fed865"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
