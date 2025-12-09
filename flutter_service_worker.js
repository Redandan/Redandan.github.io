'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"404.html": "b1bce09f61275eec622c1dfde9492493",
"assets/AssetManifest.bin": "cc1586e5d7e9c27f2b932b8168f82436",
"assets/AssetManifest.bin.json": "6a297bb98261a0ef46c593d7ea63b843",
"assets/AssetManifest.json": "8879d146290fa265fc48f36788b5f97a",
"assets/assets/icons/google.png": "4fff0b13826e8c0e38863d9914240792",
"assets/assets/icons/metamask_icon.jpg": "e241d498521a40660fc87f671c40c7dd",
"assets/assets/icons/TronLink_icon.jpg": "55434079a07346d5a0cd5b0dc1fc3f74",
"assets/assets/templates/costco_template.js": "1c1b3042c6f146ce388dd4205e244e2f",
"assets/config/windows_download.json": "56126f3941ff348e79c055c2949a2620",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "99c0e0953b7e42b34b81c4844aee140a",
"assets/NOTICES": "7c240921d0deb787a7e4377f0ab88e71",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/flutter_js/assets/js/fetch.js": "277e0c5ec36810cbe57371a4b7e26be0",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/web/icons/android-icon-144x144.jpg": "950a35f5d961570cac99946c46516bde",
"assets/web/icons/android-icon-192x192.jpg": "e6364997725a0d179f8a93e963fff49b",
"assets/web/icons/android-icon-36x36.jpg": "e9da2f732ad79d32c315d0ad2479deed",
"assets/web/icons/android-icon-48x48.jpg": "39ebf547981ed442aa173e72ba5ce4ea",
"assets/web/icons/android-icon-72x72.jpg": "8d77eb4e1305f516f14fb15111b29114",
"assets/web/icons/android-icon-96x96.jpg": "fac86ed89f45c9faceda594efe8bafab",
"assets/web/icons/apple-icon-114x114.jpg": "a953130a96cc4f33afdafa09ca30de72",
"assets/web/icons/apple-icon-120x120.jpg": "847e6ddcbd7143aa9d63223436e09263",
"assets/web/icons/apple-icon-144x144.jpg": "950a35f5d961570cac99946c46516bde",
"assets/web/icons/apple-icon-152x152.jpg": "50754c3e03444bb750d81547aa18016f",
"assets/web/icons/apple-icon-180x180.jpg": "3ce350787d62634f60c94574ce26fd5c",
"assets/web/icons/apple-icon-57x57.jpg": "c0d4a29517f7c9eb5665fdfc33339467",
"assets/web/icons/apple-icon-60x60.jpg": "0ea0a8d6c5cda176d31fae794e275e6a",
"assets/web/icons/apple-icon-72x72.jpg": "8d77eb4e1305f516f14fb15111b29114",
"assets/web/icons/apple-icon-76x76.jpg": "4380021314e73872a1bcf653668a1930",
"assets/web/icons/apple-icon-precomposed.jpg": "e6364997725a0d179f8a93e963fff49b",
"assets/web/icons/apple-icon.jpg": "e6364997725a0d179f8a93e963fff49b",
"assets/web/icons/browserconfig.xml": "5cd22b5fed88fa1108a52f9c65b89ce1",
"assets/web/icons/favicon-16x16.jpg": "854440adcc6a3a11273e9be338ebef5f",
"assets/web/icons/favicon-32x32.jpg": "62cd9d07883980670d7014cd2abc6792",
"assets/web/icons/favicon-96x96.jpg": "fac86ed89f45c9faceda594efe8bafab",
"assets/web/icons/favicon.ico": "f869a2c9ecc2350eb82a6e12ca6f2750",
"assets/web/icons/manifest.json": "89081af0792a3aec73ca67ec7964ccf5",
"assets/web/icons/ms-icon-70x70.jpg": "7b33aee710d7c2f0a4625e453799b8f3",
"assets/web/qrcode.min.js": "68e44053fbd78decc69706f88c79c1d7",
"assets/web/tronlink_login.html": "55884d0216a9f1b875b5348819b330c7",
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
"flutter_bootstrap.js": "148ece9fd35fde023ee2c36a0f7ca40d",
"icons/android-icon-144x144.jpg": "950a35f5d961570cac99946c46516bde",
"icons/android-icon-192x192.jpg": "e6364997725a0d179f8a93e963fff49b",
"icons/android-icon-36x36.jpg": "e9da2f732ad79d32c315d0ad2479deed",
"icons/android-icon-48x48.jpg": "39ebf547981ed442aa173e72ba5ce4ea",
"icons/android-icon-72x72.jpg": "8d77eb4e1305f516f14fb15111b29114",
"icons/android-icon-96x96.jpg": "fac86ed89f45c9faceda594efe8bafab",
"icons/apple-icon-114x114.jpg": "a953130a96cc4f33afdafa09ca30de72",
"icons/apple-icon-120x120.jpg": "847e6ddcbd7143aa9d63223436e09263",
"icons/apple-icon-144x144.jpg": "950a35f5d961570cac99946c46516bde",
"icons/apple-icon-152x152.jpg": "50754c3e03444bb750d81547aa18016f",
"icons/apple-icon-180x180.jpg": "3ce350787d62634f60c94574ce26fd5c",
"icons/apple-icon-57x57.jpg": "c0d4a29517f7c9eb5665fdfc33339467",
"icons/apple-icon-60x60.jpg": "0ea0a8d6c5cda176d31fae794e275e6a",
"icons/apple-icon-72x72.jpg": "8d77eb4e1305f516f14fb15111b29114",
"icons/apple-icon-76x76.jpg": "4380021314e73872a1bcf653668a1930",
"icons/apple-icon-precomposed.jpg": "e6364997725a0d179f8a93e963fff49b",
"icons/apple-icon.jpg": "e6364997725a0d179f8a93e963fff49b",
"icons/browserconfig.xml": "5cd22b5fed88fa1108a52f9c65b89ce1",
"icons/favicon-16x16.jpg": "854440adcc6a3a11273e9be338ebef5f",
"icons/favicon-32x32.jpg": "62cd9d07883980670d7014cd2abc6792",
"icons/favicon-96x96.jpg": "fac86ed89f45c9faceda594efe8bafab",
"icons/favicon.ico": "f869a2c9ecc2350eb82a6e12ca6f2750",
"icons/manifest.json": "89081af0792a3aec73ca67ec7964ccf5",
"icons/ms-icon-70x70.jpg": "7b33aee710d7c2f0a4625e453799b8f3",
"index.html": "3080ff965192f584d3c531710bde55fd",
"/": "3080ff965192f584d3c531710bde55fd",
"main.dart.js": "c71f976457bb86a9ef12a464775ed924",
"manifest.json": "802eca008d32e52d71d26919fb05aacd",
"official.html": "8d9f1ea643c08f7c8e25b200fa52e173",
"offline.html": "b087704827a6d51f6dc2d77948b1dd5c",
"offline_handler.js": "50f6e0202859f8df908f279658a051fb",
"pwa_viewport_fix.js": "2a451a8b76bd509d5335b9abdebc9976",
"qrcode.min.js": "68e44053fbd78decc69706f88c79c1d7",
"register.html": "2d1fd710acdbde1488faad3f465589b1",
"splash/iPhone_14_Plus_portrait.png": "96e752610906ba2a93c65f8abe1645f1",
"splash/iPhone_14_portrait.png": "96e752610906ba2a93c65f8abe1645f1",
"splash/iPhone_14_Pro_Max_portrait.png": "96e752610906ba2a93c65f8abe1645f1",
"splash/iPhone_14_Pro_portrait.png": "96e752610906ba2a93c65f8abe1645f1",
"tronlink_login.css": "68e5eed433fb4a5ea5e34df6e351c6ac",
"tronlink_login.html": "55884d0216a9f1b875b5348819b330c7",
"version.json": "96b7a35d8aa402567ce7589474f72753",
"wallet_api.js": "656af3c87d2f77dac3cdf1b9db85d531",
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
