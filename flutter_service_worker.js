'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"404.html": "b1bce09f61275eec622c1dfde9492493",
"assets/AssetManifest.bin": "409c83c8ea3222382671240279559b9b",
"assets/AssetManifest.bin.json": "f19bd32d8141b166a2771dd57f92b924",
"assets/AssetManifest.json": "9fae96b3073c2003bd29c967a298e8b9",
"assets/assets/icons/app_icon.svg": "6492dc8b5846efeb8beea5b43a08e4db",
"assets/assets/icons/favicon.ico": "f869a2c9ecc2350eb82a6e12ca6f2750",
"assets/assets/templates/costco_template.js": "1c1b3042c6f146ce388dd4205e244e2f",
"assets/config/windows_download.json": "56126f3941ff348e79c055c2949a2620",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1f244f3a1521bc21b0289db9c61b588e",
"assets/NOTICES": "e9158e5c7a88fd7498414129fdc0d36b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_js/assets/js/fetch.js": "277e0c5ec36810cbe57371a4b7e26be0",
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
"audio_analyzer.js": "f542ba89f78f0563dae27ea3f7389c69",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "9bdefaf366f0cb80788dcdeb7112b160",
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
"index.html": "6e1e1c63fdd600322635939461838739",
"/": "6e1e1c63fdd600322635939461838739",
"main.dart.js": "f860c3edb63de418f67007d442cb967d",
"manifest.json": "295fdc01af0bb2a5299af31d35118ea3",
"official.html": "8d9f1ea643c08f7c8e25b200fa52e173",
"offline.html": "b087704827a6d51f6dc2d77948b1dd5c",
"offline_handler.js": "50f6e0202859f8df908f279658a051fb",
"pwa_viewport_fix.js": "2a451a8b76bd509d5335b9abdebc9976",
"register.html": "2d1fd710acdbde1488faad3f465589b1",
"splash/iPhone_14_Plus_portrait.png": "96e752610906ba2a93c65f8abe1645f1",
"splash/iPhone_14_portrait.png": "96e752610906ba2a93c65f8abe1645f1",
"splash/iPhone_14_Pro_Max_portrait.png": "96e752610906ba2a93c65f8abe1645f1",
"splash/iPhone_14_Pro_portrait.png": "96e752610906ba2a93c65f8abe1645f1",
"version.json": "a4d2464ac2bcce68b5e68d9ca4b6dcb4",
"web_vitals.js": "7c0c4e6144e1544cdd6cf55db9a4f6c4"};
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
