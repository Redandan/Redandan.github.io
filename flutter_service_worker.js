'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "e8382d3b30de2bc1b70240a688b47a66",
"assets/AssetManifest.bin.json": "98c02df4a1b0d916199cc1fc1968a62a",
"assets/AssetManifest.json": "ae1aa9fe22dd7bf01cde27b4c1bdd91e",
"assets/assets/a1.jpg": "022c9b02890a065a5af08b3455e5bae6",
"assets/assets/a2.jpg": "2ceb02cf8ee6086e5e74e15ec9e4b072",
"assets/assets/aromatherapy.png": "f7c99f6de934754910238d64d52d5428",
"assets/assets/as.png": "b4656379b41c2338453bee7fc35dc063",
"assets/assets/body.png": "05f938948e6716531f712c9b9f2c52e7",
"assets/assets/chicken.png": "8157f0769f0843822a8f3f78b005bb38",
"assets/assets/complete.json": "1cd5c9e8f2812ac193a418feebaf9b8f",
"assets/assets/cover.png": "0eb40cc51078d0ec35a83a1d1f95aac1",
"assets/assets/croissant.png": "f294fbb9b4786bdb137729a652418456",
"assets/assets/delivery_services.json": "e6a35adc8f9b18128979dc22cca74c4e",
"assets/assets/face.png": "b0a60b25cd26bd210aabaac8689262c4",
"assets/assets/food.json": "f922c2e2a913d1096cf2199df6561b02",
"assets/assets/foot.png": "592f4573b129591c1adfcc075eacf14b",
"assets/assets/full-body.png": "3d08b775c8dc27df82ff76ca0d1e766a",
"assets/assets/healthy-food.png": "75da16d578986d7abfdf0c95351213fc",
"assets/assets/hotCompress.png": "e40c9b6a90549a3a2acb7bea1c298b85",
"assets/assets/Keypoitem_10634.jpg": "9e1164a191a659d9b369d6aea8ec9ae2",
"assets/assets/Keypoitem_14130.jpg": "1721d600a20e730fb59d0c4e9c12d629",
"assets/assets/Keypoitem_6768.jpg": "05144b7616a0597a8c3698e962b1b635",
"assets/assets/logo.json": "0a55e8550f063ff80baf0964f81a53d2",
"assets/assets/logo1.png": "ec3ba5bb97c081f854aa5fcb95d5261a",
"assets/assets/Mask%2520Group%25201.png": "4d9921c6c57dea804fdaf2e44fc47ade",
"assets/assets/masseur.png": "89736489edcfe1c6f7e9bf863bfd0ea4",
"assets/assets/meat.png": "44311a78ac710b414bc2cb4aca3222fc",
"assets/assets/next.json": "2c48a3100600d86536600d2d20311580",
"assets/assets/payment-bitcoin.json": "60250382d4666580286e4ef99f3b2c9b",
"assets/assets/payment-cash.json": "a75b6c1f8b7f44a4a9c689fe0db60610",
"assets/assets/payment-credit-card.json": "0e78304901e719f82e03d51c110a0184",
"assets/assets/salad.png": "a83f82788ed72fa90e2365a7e82ea70a",
"assets/assets/selectFood.json": "76b2879fa3639c0ba88a8ca02dae8adf",
"assets/assets/shoulder.png": "1780446866a4356873174c43eafa02ba",
"assets/assets/soup.png": "1383fca4b1569d34b3ec60b5a66aa22e",
"assets/assets/sweet.png": "96d9d28ad95763e7f250d4b343497359",
"assets/assets/thai.png": "b3f854d0ea385b31d7c51987220f98bf",
"assets/assets/tok_sen.png": "a3bf6652aca0951f54695735d8a2324b",
"assets/assets/Vegetables.png": "394c1354bf83b7a5a0075dd33997aa90",
"assets/assets/wang1.jpg": "952018697048a584a5daade9c28b3865",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7370783950f7a2cb85291531fab5d0ad",
"assets/NOTICES": "b71438274199568feaaa04ab02d1fc8c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "4707f3b30abce8ef54ada8ee421e209e",
"assets/packages/timezone/data/2020a.tzf": "84285f1f81b999f1de349a723574b3e5",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "73f1ec3e64e72336db22c8758c5dbb6d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "930c8d678250a1eab3d83be9640b8275",
"/": "930c8d678250a1eab3d83be9640b8275",
"main.dart.js": "5c165100a1bf19ae606e05c9f83c2754",
"manifest.json": "d17c33cd5dbe489868900720465f2b63",
"version.json": "fba20cf5149772b8cd9a27ed24b55962"};
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
