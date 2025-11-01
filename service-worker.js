// Agora Market Service Worker
// 處理推送通知和離線功能

// 動態生成緩存名稱，包含版本號（從 URL 參數或時間戳獲取）
const getCacheName = () => {
  // 嘗試從 URL 參數獲取版本號，如果沒有則使用時間戳
  const urlParams = new URL(self.location.href).searchParams;
  const version = urlParams.get('v') || Date.now().toString();
  return `agora-market-v${version}`;
};

// 使用時間戳作為版本，確保每次更新都會創建新緩存
const VERSION = new Date().getTime().toString();
const CACHE_NAME = `agora-market-v${VERSION}`;
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

// 定期檢查清除標記（每30秒檢查一次）
let cacheCheckInterval = null;

function startCacheClearChecker() {
  if (cacheCheckInterval) return; // 已經在運行
  
  cacheCheckInterval = setInterval(async function() {
    try {
      // 檢查所有客戶端的 localStorage（通過消息）
      const clients = await self.clients.matchAll({ includeUncontrolled: true });
      
      for (const client of clients) {
        // 請求客戶端檢查清除標記
        client.postMessage({
          type: 'CHECK_CACHE_CLEAR_FLAG'
        });
      }
    } catch (error) {
      console.error('Service Worker: 檢查清除標記失敗', error);
    }
  }, 30000); // 每30秒檢查一次
  
  console.log('Service Worker: 緩存清除檢查器已啟動（每30秒檢查）');
}

// 激活 Service Worker
self.addEventListener('activate', function(event) {
  console.log('Service Worker: 激活中...', CACHE_NAME);
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      console.log('Service Worker: 找到的緩存:', cacheNames);
      // 刪除所有舊的 agora-market 緩存
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheName.startsWith('agora-market-') && cacheName !== CACHE_NAME) {
            console.log('Service Worker: 刪除舊緩存', cacheName);
            return caches.delete(cacheName);
          }
          // 同時刪除 Flutter 相關的舊緩存
          if (cacheName.startsWith('flutter-toolkit-cache-') || 
              cacheName.startsWith('flutter_deploy-')) {
            console.log('Service Worker: 刪除 Flutter 舊緩存', cacheName);
            return caches.delete(cacheName);
          }
          return Promise.resolve();
        })
      );
    }).then(function() {
      console.log('Service Worker: 激活完成，立即接管所有客戶端');
      // 立即接管所有客戶端，不需要等待下次導航
      return self.clients.claim();
    }).then(function() {
      // 通知所有客戶端 Service Worker 已更新
      return self.clients.matchAll().then(function(clients) {
        clients.forEach(function(client) {
          client.postMessage({
            type: 'SW_ACTIVATED',
            version: VERSION,
            cacheName: CACHE_NAME
          });
        });
      });
    }).then(function() {
      // 啟動緩存清除檢查器
      startCacheClearChecker();
    })
  );
});

// 攔截網絡請求 - 網絡優先策略
self.addEventListener('fetch', function(event) {
  const url = new URL(event.request.url);
  
  // 對於 HTML 文件，始終從網絡獲取，避免緩存問題
  if (event.request.destination === 'document' || 
      url.pathname.includes('index.html') ||
      url.pathname.includes('official.html') ||
      url.pathname.includes('register.html')) {
    event.respondWith(
      fetch(event.request, { 
        cache: 'no-store', // 不緩存 HTML 文件
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache'
        }
      })
        .then(function(response) {
          // HTML 文件不緩存，總是返回最新版本
          return response;
        })
        .catch(function(error) {
          console.error('Service Worker: 網絡請求失敗', event.request.url, error);
          // 網絡失敗時，嘗試返回緩存版本（僅作為最後手段）
          return caches.match(event.request).then(function(cachedResponse) {
            if (cachedResponse) {
              console.log('Service Worker: 使用緩存版本', event.request.url);
              return cachedResponse;
            }
            // 如果也沒有緩存，返回錯誤響應
            return new Response('網絡連接失敗', {
              status: 503,
              statusText: 'Service Unavailable',
              headers: { 'Content-Type': 'text/plain; charset=utf-8' }
            });
          });
        })
    );
    return; // 提前返回，不執行後續邏輯
  }
  
  // 對於其他資源（JS, CSS, 圖片等），使用網絡優先策略
  event.respondWith(
    fetch(event.request)
      .then(function(response) {
        // 如果網絡請求成功，緩存資源（但不緩存 HTML）
        if (response && response.status === 200 && response.type === 'basic') {
          const responseToCache = response.clone();
          caches.open(CACHE_NAME)
            .then(function(cache) {
              cache.put(event.request, responseToCache);
            });
        }
        return response;
      })
      .catch(function(error) {
        // 網絡失敗時，嘗試返回緩存版本
        return caches.match(event.request).then(function(cachedResponse) {
          if (cachedResponse) {
            console.log('Service Worker: 使用緩存資源', event.request.url);
            return cachedResponse;
          }
          // 如果沒有緩存，返回網絡錯誤
          throw error;
        });
      })
  );
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
  
  // 處理清除緩存請求（來自主線程）
  if (event.data && event.data.type === 'CLEAR_ALL_CACHES') {
    console.log('Service Worker: 收到清除所有緩存請求');
    event.waitUntil(
      caches.keys().then(function(cacheNames) {
        console.log('Service Worker: 找到', cacheNames.length, '個緩存');
        return Promise.all(
          cacheNames.map(function(cacheName) {
            console.log('Service Worker: 清除緩存', cacheName);
            return caches.delete(cacheName);
          })
        );
      }).then(function() {
        console.log('Service Worker: 所有緩存已清除');
        // 通知所有客戶端緩存已清除
        return self.clients.matchAll().then(function(clients) {
          clients.forEach(function(client) {
            client.postMessage({
              type: 'CACHES_CLEARED',
              timestamp: Date.now()
            });
          });
        });
      }).catch(function(error) {
        console.error('Service Worker: 清除緩存失敗', error);
      })
    );
  }
  
  // 處理同步清除請求（響應瀏覽器緩存清除）
  if (event.data && event.data.type === 'SYNC_CLEAR_CACHE') {
    console.log('Service Worker: 收到同步清除緩存請求');
    event.waitUntil(
      (async function() {
        try {
          // 清除所有緩存
          const cacheNames = await caches.keys();
          console.log('Service Worker: 同步清除', cacheNames.length, '個緩存');
          await Promise.all(cacheNames.map(name => caches.delete(name)));
          
          // 通知所有客戶端
          const clients = await self.clients.matchAll();
          clients.forEach(function(client) {
            client.postMessage({
              type: 'CACHES_SYNC_CLEARED',
              timestamp: Date.now()
            });
          });
          
          console.log('Service Worker: 同步清除完成');
        } catch (error) {
          console.error('Service Worker: 同步清除失敗', error);
        }
      })()
    );
  }
});

// 定期檢查清除標記（每30秒檢查一次）
let cacheCheckInterval = null;

function startCacheClearChecker() {
  if (cacheCheckInterval) return; // 已經在運行
  
  cacheCheckInterval = setInterval(async function() {
    try {
      // 檢查所有客戶端的 localStorage（通過消息）
      const clients = await self.clients.matchAll({ includeUncontrolled: true });
      
      for (const client of clients) {
        // 請求客戶端檢查清除標記
        client.postMessage({
          type: 'CHECK_CACHE_CLEAR_FLAG'
        });
      }
    } catch (error) {
      console.error('Service Worker: 檢查清除標記失敗', error);
    }
  }, 30000); // 每30秒檢查一次
  
  console.log('Service Worker: 緩存清除檢查器已啟動（每30秒檢查）');
}

// 注意: 檢查器已在 activate 事件的最後啟動（見上方）

// 錯誤處理
self.addEventListener('error', function(event) {
  console.error('Service Worker: 發生錯誤', event.error);
});

// 未處理的 Promise 拒絕
self.addEventListener('unhandledrejection', function(event) {
  console.error('Service Worker: 未處理的 Promise 拒絕', event.reason);
});





















































