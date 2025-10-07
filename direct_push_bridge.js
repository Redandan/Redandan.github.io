// 直接推送橋接器 - 簡化版本
// 避免複雜的 Promise 轉換問題

(function() {
  'use strict';

  // 創建全局推送管理器
  window.DirectPushManager = {
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

    // 一鍵訂閱推送通知 - 同步版本
    subscribeToPushSync: function(vapidPublicKey, callback) {
      try {
        console.log('🚀 開始推送訂閱流程...');

        // 1. 檢查瀏覽器支援
        if (!this.isSupported()) {
          console.error('❌ 瀏覽器不支援推送通知');
          callback(null, '瀏覽器不支援推送通知');
          return;
        }

        // 2. 請求通知權限
        this.requestPermission().then(permission => {
          console.log('📋 通知權限狀態:', permission);
          
          if (permission !== 'granted') {
            console.error('❌ 通知權限被拒絕');
            callback(null, '通知權限被拒絕');
            return;
          }

          // 3. 註冊 Service Worker
          navigator.serviceWorker.ready.then(registration => {
            console.log('✅ Service Worker 已準備就緒');

            // 4. 檢查現有訂閱
            registration.pushManager.getSubscription().then(subscription => {
              if (subscription) {
                console.log('✅ 已存在推送訂閱');
                const result = this._subscriptionToJson(subscription);
                console.log('📦 訂閱數據:', result);
                callback(result, null);
                return;
              }

              // 5. 創建新訂閱
              if (!vapidPublicKey) {
                console.error('❌ 缺少 VAPID 公鑰');
                callback(null, '缺少 VAPID 公鑰');
                return;
              }

              console.log('🔑 使用 VAPID 公鑰創建訂閱:', vapidPublicKey.substring(0, 20) + '...');

              registration.pushManager.subscribe({
                userVisibleOnly: true,
                applicationServerKey: this._urlBase64ToUint8Array(vapidPublicKey)
              }).then(subscription => {
                console.log('✅ 推送訂閱創建成功');
                const result = this._subscriptionToJson(subscription);
                console.log('📦 新訂閱數據:', result);
                callback(result, null);
              }).catch(error => {
                console.error('❌ 創建訂閱失敗:', error);
                callback(null, '創建訂閱失敗: ' + error.message);
              });
            }).catch(error => {
              console.error('❌ 檢查訂閱失敗:', error);
              callback(null, '檢查訂閱失敗: ' + error.message);
            });
          }).catch(error => {
            console.error('❌ Service Worker 準備失敗:', error);
            callback(null, 'Service Worker 準備失敗: ' + error.message);
          });
        }).catch(error => {
          console.error('❌ 請求權限失敗:', error);
          callback(null, '請求權限失敗: ' + error.message);
        });

      } catch (error) {
        console.error('❌ 推送訂閱失敗:', error);
        callback(null, '推送訂閱失敗: ' + error.message);
      }
    },

    // 取消推送訂閱
    unsubscribeFromPush: function(callback) {
      try {
        navigator.serviceWorker.ready.then(registration => {
          registration.pushManager.getSubscription().then(subscription => {
            if (subscription) {
              subscription.unsubscribe().then(success => {
                if (success) {
                  console.log('✅ 推送訂閱已取消');
                  callback(true, null);
                } else {
                  callback(false, '取消訂閱失敗');
                }
              }).catch(error => {
                console.error('❌ 取消訂閱失敗:', error);
                callback(false, '取消訂閱失敗: ' + error.message);
              });
            } else {
              callback(true, null); // 沒有訂閱，視為成功
            }
          }).catch(error => {
            console.error('❌ 檢查訂閱失敗:', error);
            callback(false, '檢查訂閱失敗: ' + error.message);
          });
        }).catch(error => {
          console.error('❌ Service Worker 準備失敗:', error);
          callback(false, 'Service Worker 準備失敗: ' + error.message);
        });
      } catch (error) {
        console.error('❌ 取消訂閱失敗:', error);
        callback(false, '取消訂閱失敗: ' + error.message);
      }
    },

    // 檢查訂閱狀態
    isSubscribed: function(callback) {
      try {
        navigator.serviceWorker.ready.then(registration => {
          registration.pushManager.getSubscription().then(subscription => {
            callback(subscription !== null, null);
          }).catch(error => {
            console.error('❌ 檢查訂閱狀態失敗:', error);
            callback(false, '檢查訂閱狀態失敗: ' + error.message);
          });
        }).catch(error => {
          console.error('❌ Service Worker 準備失敗:', error);
          callback(false, 'Service Worker 準備失敗: ' + error.message);
        });
      } catch (error) {
        console.error('❌ 檢查訂閱狀態失敗:', error);
        callback(false, '檢查訂閱狀態失敗: ' + error.message);
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

  console.log('🔧 DirectPushManager 已載入');
})();
