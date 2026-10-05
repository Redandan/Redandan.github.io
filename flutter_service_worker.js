// Temporary no-op service worker for AgoraMarket.
//
// The previous custom SW cached Flutter bootstrap/main/chunk files and could
// keep serving stale route chunks after a deploy. Keep this file registered only
// long enough for browsers with the old SW to update, unregister, and release
// control back to the network. Existing tabs keep their state until the user
// chooses to reload; this worker never navigates clients during activation.

'use strict';

const BUILD_VERSION = '7125c6f05d22';
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
    Promise.allSettled([
      caches.keys()
      .then((keys) => Promise.all(
        keys
          .filter(isStaleRuntimeCache)
          .map((key) => caches.delete(key)),
      )),
      self.registration.unregister(),
    ])
      .then((results) => {
        for (const result of results) {
          if (result.status === 'rejected') {
            console.warn('[SW_NOOP]', BUILD_VERSION, result.reason);
          }
        }
      })
      .catch((err) => console.warn('[SW_NOOP]', BUILD_VERSION, err)),
  );
});

self.addEventListener('fetch', () => {
  // Intentionally do not intercept requests.
});
