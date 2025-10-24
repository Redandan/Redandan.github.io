// Agora Market Service Worker
// 處理推送通知和離線功能

// 動態生成緩存名稱，包含版本號
const getCacheName = () => {
  const version = '1.0.362'; // 從 meta 標籤或環境變量獲取
  return `agora-market-v${version}`;
};

const CACHE_NAME = getCacheName();
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icons/Icon-192.png',
  '/icons/Icon-512.png',
  '/icons/Icon-120.png',
];

// 安裝 Service Worker
self.addEventListener('install', function(event) {
  console.log('Service Worker: 安裝中...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Service Worker: 緩存文件');
        // 使用更安全的緩存策略，逐個添加文件
        return Promise.allSettled(
          urlsToCache.map(url => 
            cache.add(url).catch(err => {
              console.warn('Service Worker: 無法緩存文件', url, err);
              return null; // 繼續處理其他文件
            })
          )
        );
      })
      .then(function(results) {
        const successful = results.filter(r => r.status === 'fulfilled').length;
        const failed = results.filter(r => r.status === 'rejected').length;
        console.log(`Service Worker: 緩存完成 - 成功: ${successful}, 失敗: ${failed}`);
        console.log('Service Worker: 安裝完成');
        return self.skipWaiting();
      })
      .catch(function(error) {
        console.error('Service Worker: 安裝失敗', error);
        return self.skipWaiting(); // 即使緩存失敗也要繼續
      })
  );
});

// 激活 Service Worker
self.addEventListener('activate', function(event) {
  console.log('Service Worker: 激活中...');
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheName !== CACHE_NAME) {
            console.log('Service Worker: 刪除舊緩存', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(function() {
      console.log('Service Worker: 激活完成');
      return self.clients.claim();
    })
  );
});

// 攔截網絡請求 - 網絡優先策略
self.addEventListener('fetch', function(event) {
  // 對於 HTML 文件，使用網絡優先策略
  if (event.request.destination === 'document' || 
      event.request.url.includes('index.html') ||
      event.request.url.includes('official.html')) {
    event.respondWith(
      fetch(event.request)
        .then(function(response) {
          // 如果網絡請求成功，更新緩存
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
          // 網絡失敗時，返回緩存版本
          return caches.match(event.request);
        })
    );
  } else {
    // 對於其他資源，使用緩存優先策略
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

// 處理推送通知
self.addEventListener('push', function(event) {
  console.log('🔔 [SERVICE_WORKER] 收到推送通知事件');
  
  // 檢查是否為 iOS PWA 模式
  const isIOSPWA = event.data && event.data.json().isIOSPWA;
  
  // 檢查用戶設置（通過向主線程發送消息）
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
    body: '您有新的通知',
    icon: '/icons/Icon-192.png',
    badge: '/icons/Icon-120.png',
    tag: 'agora-market-notification',
    requireInteraction: true,
    actions: [
      {
        action: 'open',
        title: '查看',
        icon: '/icons/Icon-120.png'
      },
      {
        action: 'close',
        title: '關閉',
        icon: '/icons/Icon-120.png'
      }
    ]
  };
  
  // 如果有推送數據，解析並使用
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
        console.log('✅ [SERVICE_WORKER] 通知顯示成功');
      })
      .catch((error) => {
        console.error('❌ [SERVICE_WORKER] 通知顯示失敗:', error);
      })
  );
});

// 處理通知點擊
self.addEventListener('notificationclick', function(event) {
  console.log('🔔 [SERVICE_WORKER] 通知被點擊');
  
  event.notification.close();
  
  // 發送點擊事件到主線程
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
    // 打開應用
    event.waitUntil(
      clients.matchAll({ type: 'window', includeUncontrolled: true })
        .then(function(clientList) {
          // 如果已經有窗口打開，聚焦到該窗口
          for (let i = 0; i < clientList.length; i++) {
            const client = clientList[i];
            if (client.url === '/' && 'focus' in client) {
              return client.focus();
            }
          }
          
          // 如果沒有窗口打開，打開新窗口
          if (clients.openWindow) {
            return clients.openWindow('/');
          }
        })
        .catch((error) => {
          console.error('❌ [SERVICE_WORKER] 窗口操作失敗:', error);
        })
    );
  }
});

// 處理通知關閉
self.addEventListener('notificationclose', function(event) {
  console.log('🔔 [SERVICE_WORKER] 通知被關閉');
});

// 處理後台同步
self.addEventListener('sync', function(event) {
  console.log('Service Worker: 後台同步', event.tag);
  
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

// 後台同步函數
function doBackgroundSync() {
  console.log('Service Worker: 執行後台同步');
  // 在這裡執行需要同步的任務
  return Promise.resolve();
}

// 處理消息
self.addEventListener('message', function(event) {
  console.log('Service Worker: 收到消息', event.data);
  
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  // 處理強制更新請求
  if (event.data && event.data.type === 'FORCE_UPDATE') {
    console.log('Service Worker: 強制更新緩存');
    event.waitUntil(
      caches.keys().then(function(cacheNames) {
        return Promise.all(
          cacheNames.map(function(cacheName) {
            console.log('Service Worker: 清除緩存', cacheName);
            return caches.delete(cacheName);
          })
        );
      }).then(function() {
        console.log('Service Worker: 緩存清除完成，重新安裝');
        return self.skipWaiting();
      })
    );
  }
});

// 錯誤處理
self.addEventListener('error', function(event) {
  console.error('Service Worker: 發生錯誤', event.error);
});

// 未處理的 Promise 拒絕
self.addEventListener('unhandledrejection', function(event) {
  console.error('Service Worker: 未處理的 Promise 拒絕', event.reason);
});




