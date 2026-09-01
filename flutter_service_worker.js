"use strict";

const destinationFor = (url) => {
  const source = new URL(url);
  const path = source.pathname === "/index.html" ? "/" : source.pathname;
  return new URL(path + source.search + source.hash, "https://agoramarket.purrtechllc.com").href;
};

self.addEventListener("install", () => self.skipWaiting());

self.addEventListener("activate", (event) => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.allSettled(names.map((name) => caches.delete(name)));
    const windows = await self.clients.matchAll({ type: "window", includeUncontrolled: true });
    await Promise.allSettled(windows.map((client) => client.navigate(destinationFor(client.url))));
    await self.registration.unregister();
  })());
});

self.addEventListener("fetch", (event) => {
  if (event.request.mode === "navigate") {
    event.respondWith(Response.redirect(destinationFor(event.request.url), 302));
  }
});
