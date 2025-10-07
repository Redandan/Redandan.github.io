// WASM Web Push 橋接器
// 為 WASM 模式提供 Web Push 功能支援

(function() {
  'use strict';

  // 創建全局 WASM 推送橋接器
  window.WasmPushBridge = {
    // 檢查瀏覽器支援
    isSupported: function() {
      return 'serviceWorker' in navigator && 
             'PushManager' in window && 
             'Notification' in window;
    },

    // 獲取通知權限狀態
    getPermissionStatus: function() {
      return Notification.permission;
    },

    // 請求通知權限
    requestPermission: function() {
      console.log('🔔 [WASM_BRIDGE] 請求通知權限...');
      
      if (Notification.permission === 'granted') {
        return Promise.resolve('granted');
      }
      
      if (Notification.permission === 'denied') {
        return Promise.resolve('denied');
      }
      
      return Notification.requestPermission().then(function(result) {
        console.log('🔔 [WASM_BRIDGE] 權限請求結果: ' + result);
        return result;
      });
    },

    // 獲取 VAPID 公鑰
    getVapidPublicKey: function() {
      return fetch('/api/webpush/vapid-public-key')
        .then(response => response.json())
        .then(data => data.publicKey)
        .catch(error => {
          console.error('❌ [WASM_BRIDGE] 獲取 VAPID 公鑰失敗:', error);
          return null;
        });
    },

    // 創建推送訂閱
    subscribeToPush: function() {
      console.log('🚀 [WASM_BRIDGE] 開始創建推送訂閱...');
      
      return this.getVapidPublicKey().then(publicKey => {
        if (!publicKey) {
          throw new Error('無法獲取 VAPID 公鑰');
        }

        return navigator.serviceWorker.ready.then(registration => {
          return registration.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: this.urlBase64ToUint8Array(publicKey)
          });
        });
      }).then(subscription => {
        console.log('✅ [WASM_BRIDGE] 推送訂閱創建成功');
        
        // 將訂閱數據轉換為可傳遞的格式
        return {
          endpoint: subscription.endpoint,
          p256dh: this.arrayBufferToBase64(subscription.getKey('p256dh')),
          auth: this.arrayBufferToBase64(subscription.getKey('auth'))
        };
      }).catch(error => {
        console.error('❌ [WASM_BRIDGE] 推送訂閱失敗:', error);
        throw error;
      });
    },

    // 註冊訂閱到後端
    registerSubscription: function(subscriptionData) {
      console.log('📤 [WASM_BRIDGE] 註冊訂閱到後端...');
      
      return fetch('/api/webpush/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(subscriptionData)
      }).then(response => response.json())
        .then(data => {
          console.log('✅ [WASM_BRIDGE] 後端註冊成功:', data);
          return data;
        })
        .catch(error => {
          console.error('❌ [WASM_BRIDGE] 後端註冊失敗:', error);
          throw error;
        });
    },

    // 完整的推送訂閱流程
    completeSubscription: function() {
      console.log('🔄 [WASM_BRIDGE] 開始完整訂閱流程...');
      
      return this.subscribeToPush()
        .then(subscriptionData => {
          return this.registerSubscription(subscriptionData);
        })
        .then(result => {
          console.log('🎉 [WASM_BRIDGE] 完整訂閱流程成功');
          return { success: true, data: result };
        })
        .catch(error => {
          console.error('💥 [WASM_BRIDGE] 完整訂閱流程失敗:', error);
          return { success: false, error: error.message };
        });
    },

    // 工具函數：Base64 轉 Uint8Array
    urlBase64ToUint8Array: function(base64String) {
      const padding = '='.repeat((4 - base64String.length % 4) % 4);
      const base64 = (base64String + padding)
        .replace(/-/g, '+')
        .replace(/_/g, '/');

      const rawData = window.atob(base64);
      const outputArray = new Uint8Array(rawData.length);

      for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
      }
      return outputArray;
    },

    // 工具函數：ArrayBuffer 轉 Base64
    arrayBufferToBase64: function(buffer) {
      const bytes = new Uint8Array(buffer);
      let binary = '';
      for (let i = 0; i < bytes.byteLength; i++) {
        binary += String.fromCharCode(bytes[i]);
      }
      return window.btoa(binary);
    },

    // 檢查訂閱狀態
    checkSubscriptionStatus: function() {
      return navigator.serviceWorker.ready.then(registration => {
        return registration.pushManager.getSubscription();
      }).then(subscription => {
        if (subscription) {
          return {
            subscribed: true,
            endpoint: subscription.endpoint
          };
        } else {
          return {
            subscribed: false
          };
        }
      });
    },

    // 顯示本地通知
    showLocalNotification: function(title, body, icon) {
      console.log('🔔 [WASM_BRIDGE] 嘗試顯示本地通知:', { title, body, icon });
      
      if (Notification.permission === 'granted') {
        try {
          const notification = new Notification(title, {
            body: body,
            icon: icon || '/icons/Icon-192.png',
            tag: 'agora-market-notification'
          });
          
          console.log('✅ [WASM_BRIDGE] 本地通知創建成功');
          
          notification.onclick = function() {
            console.log('🔔 [WASM_BRIDGE] 本地通知被點擊');
            notification.close();
          };
          
        } catch (error) {
          console.error('❌ [WASM_BRIDGE] 創建本地通知失敗:', error);
        }
      } else {
        console.warn('⚠️ [WASM_BRIDGE] 通知權限未授予，無法顯示本地通知');
      }
    }
  };

  console.log('✅ [WASM_BRIDGE] WASM Web Push 橋接器已初始化');
  console.log('💡 使用方法: window.WasmPushBridge.completeSubscription()');

})();
