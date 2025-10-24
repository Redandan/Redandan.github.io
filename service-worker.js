// Agora Market Service Worker
// ???券?蝺???

// ????蝺拙??迂嚗??怎??祈?
const getCacheName = () => {
  const version = '1.0.355'; // 敺?meta 璅惜?憓????
  return `agora-market-v${version}`;
};

const CACHE_NAME = getCacheName();
const urlsToCache = [
  '/',
  '/index.html',
  '/official.html',
  '/main.dart.js',
  '/flutter_bootstrap.js',
  '/icons/Icon-192.png',
  '/icons/Icon-512.png',
  '/icons/Icon-120.png',
];

// 摰? Service Worker
self.addEventListener('install', function(event) {
  console.log('Service Worker: 摰?銝?..');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Service Worker: 蝺拙??辣');
        return cache.addAll(urlsToCache);
      })
      .then(function() {
        console.log('Service Worker: 摰?摰?');
        return self.skipWaiting();
      })
  );
});

// 瞈瘣?Service Worker
self.addEventListener('activate', function(event) {
  console.log('Service Worker: 瞈瘣颱葉...');
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheName !== CACHE_NAME) {
            console.log('Service Worker: ?芷?楨摮?, cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(function() {
      console.log('Service Worker: 瞈瘣餃???);
      return self.clients.claim();
    })
  );
});

// ?蝬脩窗隢? - 蝬脩窗?芸?蝑
self.addEventListener('fetch', function(event) {
  // 撠 HTML ?辣嚗蝙?函雯蝯∪????
  if (event.request.destination === 'document' || 
      event.request.url.includes('index.html') ||
      event.request.url.includes('official.html')) {
    event.respondWith(
      fetch(event.request)
        .then(function(response) {
          // 憒?蝬脩窗隢???嚗?啁楨摮?
          if (response && response.status === 200) {
            const responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });
          }
          return response;
        })
        .catch(function() {
          // 蝬脩窗憭望???餈?蝺拙??
          return caches.match(event.request);
        })
    );
  } else {
    // 撠?嗡?鞈?嚗蝙?函楨摮????
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          if (response) {
            return response;
          }
          
          return fetch(event.request).then(function(response) {
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            
            const responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });
            
            return response;
          });
        })
    );
  }
});

// ???券
self.addEventListener('push', function(event) {
  console.log('?? [SERVICE_WORKER] ?嗅?券鈭辣');
  
  // 瑼Ｘ?臬??iOS PWA 璅∪?
  const isIOSPWA = event.data && event.data.json().isIOSPWA;
  
  // 瑼Ｘ?冽閮剔蔭嚗??蜓蝺??潮??荔?
  self.clients.matchAll().then(clients => {
    if (clients.length > 0) {
      clients[0].postMessage({
        type: 'CHECK_WEBPUSH_SETTING',
        timestamp: new Date().toISOString(),
        isIOSPWA: isIOSPWA
      });
    }
  });
  
  let notificationData = {
    title: 'Agora Market',
    body: '?冽??啁??',
    icon: '/icons/Icon-192.png',
    badge: '/icons/Icon-120.png',
    tag: 'agora-market-notification',
    requireInteraction: true,
    actions: [
      {
        action: 'open',
        title: '?亦?',
        icon: '/icons/Icon-120.png'
      },
      {
        action: 'close',
        title: '??',
        icon: '/icons/Icon-120.png'
      }
    ]
  };
  
  // 憒?????閫??銝虫蝙??
  if (event.data) {
    try {
      const data = event.data.json();
      notificationData = {
        ...notificationData,
        title: data.title || notificationData.title,
        body: data.body || notificationData.body,
        icon: data.icon || notificationData.icon,
        badge: data.badge || notificationData.badge,
        data: data.data || {},
        actions: data.actions || notificationData.actions
      };
    } catch (e) {
      const textData = event.data.text();
      notificationData.body = textData || notificationData.body;
    }
  }
  
  event.waitUntil(
    self.registration.showNotification(notificationData.title, notificationData)
      .then(() => {
        console.log('??[SERVICE_WORKER] ?憿舐內??');
      })
      .catch((error) => {
        console.error('??[SERVICE_WORKER] ?憿舐內憭望?:', error);
      })
  );
});

// ???暺?
self.addEventListener('notificationclick', function(event) {
  console.log('?? [SERVICE_WORKER] ?鋡恍???);
  
  event.notification.close();
  
  // ?潮???隞嗅銝餌?蝔?
  self.clients.matchAll().then(clients => {
    if (clients.length > 0) {
      clients[0].postMessage({
        type: 'NOTIFICATION_CLICKED',
        data: event.notification.data || {},
        timestamp: new Date().toISOString()
      });
    }
  });
  
  if (event.action === 'open' || !event.action) {
    // ???
    event.waitUntil(
      clients.matchAll({ type: 'window', includeUncontrolled: true })
        .then(function(clientList) {
          // 憒?撌脩??????????啗府蝒
          for (let i = 0; i < clientList.length; i++) {
            const client = clientList[i];
            if (client.url === '/' && 'focus' in client) {
              return client.focus();
            }
          }
          
          // 憒?瘝?蝒??嚗??蝒
          if (clients.openWindow) {
            return clients.openWindow('/');
          }
        })
        .catch((error) => {
          console.error('??[SERVICE_WORKER] 蝒??憭望?:', error);
        })
    );
  }
});

// ?????
self.addEventListener('notificationclose', function(event) {
  console.log('?? [SERVICE_WORKER] ?鋡恍???);
});

// ??敺?郊
self.addEventListener('sync', function(event) {
  console.log('Service Worker: 敺?郊', event.tag);
  
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

// 敺?郊?賣
function doBackgroundSync() {
  console.log('Service Worker: ?瑁?敺?郊');
  // ?券ㄐ?瑁??閬?甇亦?隞餃?
  return Promise.resolve();
}

// ??瘨
self.addEventListener('message', function(event) {
  console.log('Service Worker: ?嗅瘨', event.data);
  
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  // ??撘瑕?湔隢?
  if (event.data && event.data.type === 'FORCE_UPDATE') {
    console.log('Service Worker: 撘瑕?湔蝺拙?');
    event.waitUntil(
      caches.keys().then(function(cacheNames) {
        return Promise.all(
          cacheNames.map(function(cacheName) {
            console.log('Service Worker: 皜蝺拙?', cacheName);
            return caches.delete(cacheName);
          })
        );
      }).then(function() {
        console.log('Service Worker: 蝺拙?皜摰?嚗??啣?鋆?);
        return self.skipWaiting();
      })
    );
  }
});

// ?航炊??
self.addEventListener('error', function(event) {
  console.error('Service Worker: ?潛??航炊', event.error);
});

// ?芾??? Promise ??
self.addEventListener('unhandledrejection', function(event) {
  console.error('Service Worker: ?芾??? Promise ??', event.reason);
});

