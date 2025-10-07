// 簡化的推送通知橋接器
// 直接在 Flutter 中調用，無需手動 Console 輸入

(function() {
  'use strict';

  // 創建全局推送管理器
  window.SimplePushManager = {
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
      return Notification.requestPermission();
    },

    // 一鍵訂閱推送通知
    subscribeToPush: async function(vapidPublicKey) {
      try {
        console.log('🚀 開始推送訂閱流程...');

        // 1. 檢查瀏覽器支援
        if (!this.isSupported()) {
          throw new Error('瀏覽器不支援推送通知');
        }

        // 2. 請求通知權限
        const permission = await this.requestPermission();
        if (permission !== 'granted') {
          throw new Error('通知權限被拒絕');
        }

        // 3. 註冊 Service Worker
        const registration = await navigator.serviceWorker.ready;
        console.log('✅ Service Worker 已準備就緒');

        // 4. 檢查現有訂閱
        let subscription = await registration.pushManager.getSubscription();
        if (subscription) {
          console.log('✅ 已存在推送訂閱');
          return this._subscriptionToJson(subscription);
        }

        // 5. 創建新訂閱
        if (!vapidPublicKey) {
          throw new Error('缺少 VAPID 公鑰');
        }

        subscription = await registration.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: this._urlBase64ToUint8Array(vapidPublicKey)
        });

        console.log('✅ 推送訂閱創建成功');
        return this._subscriptionToJson(subscription);

      } catch (error) {
        console.error('❌ 推送訂閱失敗:', error);
        throw error;
      }
    },

    // 取消推送訂閱
    unsubscribeFromPush: async function() {
      try {
        const registration = await navigator.serviceWorker.ready;
        const subscription = await registration.pushManager.getSubscription();

        if (subscription) {
          const success = await subscription.unsubscribe();
          if (success) {
            console.log('✅ 推送訂閱已取消');
            return true;
          }
        }
        return false;
      } catch (error) {
        console.error('❌ 取消訂閱失敗:', error);
        return false;
      }
    },

    // 檢查訂閱狀態
    isSubscribed: async function() {
      try {
        const registration = await navigator.serviceWorker.ready;
        const subscription = await registration.pushManager.getSubscription();
        return subscription !== null;
      } catch (error) {
        console.error('❌ 檢查訂閱狀態失敗:', error);
        return false;
      }
    },

    // 顯示本地通知
    showLocalNotification: function(title, body, icon) {
      if (Notification.permission === 'granted') {
        new Notification(title, {
          body: body,
          icon: icon || '/icons/Icon-192.png',
          tag: 'agora-market-notification'
        });
      }
    },

    // 輔助函數：URL Base64 轉 Uint8Array
    _urlBase64ToUint8Array: function(base64String) {
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

    // 輔助函數：訂閱對象轉 JSON
    _subscriptionToJson: function(subscription) {
      const key = subscription.getKey('p256dh');
      const auth = subscription.getKey('auth');
      
      return {
        endpoint: subscription.endpoint,
        keys: {
          p256dh: btoa(String.fromCharCode.apply(null, new Uint8Array(key))),
          auth: btoa(String.fromCharCode.apply(null, new Uint8Array(auth))),
        }
      };
    }
  };

  console.log('🔧 SimplePushManager 已載入');
})();
