// Temporary no-op service worker for AgoraMarket.
//
// The previous custom SW cached Flutter bootstrap/main/chunk files and could
// keep serving stale route chunks after a deploy. Keep this file registered only
// long enough for browsers with the old SW to update, unregister, and release
// control back to the network.

'use strict';

const BUILD_VERSION = '__BUILD_VERSION__';
const LEGACY_FLUTTER_CACHES = new Set([
  'flutter-app-cache',
  'flutter-temp-cache',
  'flutter-app-manifest',
]);

function isStaleRuntimeCache(key) {
  return key.startsWith('agora-') || LEGACY_FLUTTER_CACHES.has(key);
}

self.addEventListener('install', (event) => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys
          .filter(isStaleRuntimeCache)
          .map((key) => caches.delete(key)),
      ))
      .then(() => self.registration.unregister())
      .then(() => self.clients.matchAll({ type: 'window', includeUncontrolled: true }))
      .then((clients) => Promise.all(clients.map((client) => client.navigate(client.url))))
      .catch((err) => console.warn('[SW_NOOP]', BUILD_VERSION, err)),
  );
});

self.addEventListener('fetch', () => {
  // Intentionally do not intercept requests.
});
