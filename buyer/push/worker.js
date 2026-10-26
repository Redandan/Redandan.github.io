'use strict';

// A dedicated /push/ scope receives notifications without controlling Flutter,
// caching assets, refreshing credentials, or changing the session lifetime.
self.addEventListener('install', event => event.waitUntil(self.skipWaiting()));
self.addEventListener('activate', event => event.waitUntil((async () => {
  // Retire private previews left by an earlier version of this registration.
  // This does not access other applications' notifications or take page control.
  for (const notification of await self.registration.getNotifications()) {
    if (notification.title !== 'AgoraMarket' || notification.body !== '你有新通知' ||
        !/^[A-Za-z0-9_-]{43}$/.test(notification.data?.receipt || '')) notification.close();
  }
})()));

self.addEventListener('push', event => {
  event.waitUntil((async () => {
    let payload = {};
    try { payload = event.data?.json() || {}; } catch (_) {}
    const receipt = payload.version === 2 && typeof payload.receipt === 'string' &&
      /^[A-Za-z0-9_-]{43}$/.test(payload.receipt) ? payload.receipt : null;
    await self.registration.showNotification('AgoraMarket', {
      body: '你有新通知',
      icon: '/icons/new_favicon/web-app-manifest-192x192.png',
      // A duplicate delivery replaces the same visible hint. The receipt is
      // not a credential; only the original authenticated login can resolve it.
      ...(receipt ? {tag: 'notification-' + receipt} : {}),
      data: receipt ? {receipt} : {},
    });
  })());
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil((async () => {
    const receipt = event.notification.data?.receipt;
    const destination = typeof receipt === 'string' && /^[A-Za-z0-9_-]{43}$/.test(receipt)
      ? new URL('/#/messages?push=' + receipt, self.location.origin).href
      : new URL('/#/home', self.location.origin).href;
    const windows = await self.clients.matchAll({type: 'window', includeUncontrolled: true});
    const existing = windows.find(client => client.url === destination);
    if (existing) return existing.focus();
    // The foreground App must resolve the original receipt; old payload URLs
    // are not sufficient authority after logout or an account switch.
    return self.clients.openWindow(destination);
  })());
});
