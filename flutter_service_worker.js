'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"404.html": "b1bce09f61275eec622c1dfde9492493",
"assets/AssetManifest.bin": "8457ad641890bd2a0f13c7cac1003180",
"assets/AssetManifest.bin.json": "1d631e574e510b4dab6e672cfbc44396",
"assets/assets/icons/app_icon.svg": "76a6260661d55d6a346779d42ebfb4b2",
"assets/assets/icons/google.png": "4fff0b13826e8c0e38863d9914240792",
"assets/assets/icons/metamask_icon.jpg": "e241d498521a40660fc87f671c40c7dd",
"assets/assets/icons/TronLink_icon.jpg": "55434079a07346d5a0cd5b0dc1fc3f74",
"assets/assets/templates/costco_template.js": "1c1b3042c6f146ce388dd4205e244e2f",
"assets/config/windows_download.json": "56126f3941ff348e79c055c2949a2620",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "097b042a46db941517de6f1bf93d8d12",
"assets/NOTICES": "33937a5a1eb171194e13ebf30917b000",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/flutter_js/assets/js/fetch.js": "277e0c5ec36810cbe57371a4b7e26be0",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/web/icons/browserconfig.xml": "43e3550ceb260111057d1d4e21bf00d7",
"assets/web/icons/manifest.json": "89081af0792a3aec73ca67ec7964ccf5",
"assets/web/icons/new_favicon/apple-touch-icon.png": "d1b1aad4b437dd1a142691b79d1752b6",
"assets/web/icons/new_favicon/favicon-96x96.png": "88b4acedf9c17ae806bf2cf0aa8ed70d",
"assets/web/icons/new_favicon/web-app-manifest-192x192.png": "37c2c3392fcf3d579acb57937f7b4828",
"assets/web/icons/new_favicon/web-app-manifest-512x512.png": "74d8a30cb4ed444700c7ae0c55b1ca2a",
"assets/web/qrcode.min.js": "68e44053fbd78decc69706f88c79c1d7",
"assets/web/tronlink_login.html": "254117e7692490f1890487fe7e4f0a75",
"audio_analyzer.js": "f542ba89f78f0563dae27ea3f7389c69",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "544a71e94b6be8c448f7e5f28b0deaf9",
"icons/browserconfig.xml": "43e3550ceb260111057d1d4e21bf00d7",
"icons/manifest.json": "89081af0792a3aec73ca67ec7964ccf5",
"icons/new_favicon/app-icon.svg.svg": "670d0c41339c5561d22dafad8fddb5f9",
"icons/new_favicon/apple-touch-icon.png": "d1b1aad4b437dd1a142691b79d1752b6",
"icons/new_favicon/favicon-96x96.png": "88b4acedf9c17ae806bf2cf0aa8ed70d",
"icons/new_favicon/favicon.ico": "5f2c12a956d7a3b466424ad71ea05876",
"icons/new_favicon/favicon.svg": "e0b866d4b346aea3917b41db1db1495b",
"icons/new_favicon/site.webmanifest": "9090e674d41e265d5f03c180fe5f6721",
"icons/new_favicon/web-app-manifest-192x192.png": "37c2c3392fcf3d579acb57937f7b4828",
"icons/new_favicon/web-app-manifest-512x512.png": "74d8a30cb4ed444700c7ae0c55b1ca2a",
"index.html": "5040c992b7952478abee8d0ef53b23d6",
"/": "5040c992b7952478abee8d0ef53b23d6",
"main.dart.js": "deeb56405f106bd199ca25e558a77491",
"manifest.json": "ee760e3d48699e0f7376450fb6da2aeb",
"official.html": "8d9f1ea643c08f7c8e25b200fa52e173",
"offline.html": "b087704827a6d51f6dc2d77948b1dd5c",
"offline_handler.js": "50f6e0202859f8df908f279658a051fb",
"pwa_viewport_fix.js": "d5c4caac7b22cd22ef48731b36f9e2f0",
"qrcode.min.js": "68e44053fbd78decc69706f88c79c1d7",
"register.html": "2d1fd710acdbde1488faad3f465589b1",
"splash/iPhone_14_Plus_portrait.png": "96e752610906ba2a93c65f8abe1645f1",
"splash/iPhone_14_portrait.png": "96e752610906ba2a93c65f8abe1645f1",
"splash/iPhone_14_Pro_Max_portrait.png": "96e752610906ba2a93c65f8abe1645f1",
"splash/iPhone_14_Pro_portrait.png": "96e752610906ba2a93c65f8abe1645f1",
"tronlink_login.css": "68e5eed433fb4a5ea5e34df6e351c6ac",
"tronlink_login.html": "254117e7692490f1890487fe7e4f0a75",
"version.json": "0e8b7ece175a96dc554818864595bbfb",
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
