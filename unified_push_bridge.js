// 統一的 Web Push 橋接器
// 完全兼容 WASM 模式，提供完整的 Web Push 功能
// 支持權限請求、推送訂閱、狀態檢查等功能

(function() {
  'use strict';

  // 創建全局統一推送管理器
  window.UnifiedPushManager = {
    // 檢查瀏覽器支援
    isSupported: function() {
      const supported = 'serviceWorker' in navigator && 
                       'PushManager' in window && 
                       'Notification' in window;
      console.log('🔍 [UNIFIED_BRIDGE] 瀏覽器支援檢查:', supported);
      return supported;
    },

    // 獲取通知權限狀態
    getPermissionStatus: function() {
      const status = Notification.permission;
      console.log('🔍 [UNIFIED_BRIDGE] 當前權限狀態:', status);
      return status;
    },

    // 請求通知權限
    requestPermission: function() {
      console.log('🔔 [UNIFIED_BRIDGE] 開始請求通知權限...');
      
      const currentStatus = Notification.permission;
      console.log('🔔 [UNIFIED_BRIDGE] 當前權限狀態:', currentStatus);
      
      if (currentStatus === 'granted') {
        console.log('✅ [UNIFIED_BRIDGE] 權限已授權，無需重複請求');
        return Promise.resolve('granted');
      }
      
      if (currentStatus === 'denied') {
        console.log('❌ [UNIFIED_BRIDGE] 權限已被拒絕，無法再次請求');
        return Promise.resolve('denied');
      }
      
      console.log('🔔 [UNIFIED_BRIDGE] 調用瀏覽器權限請求對話框...');
      return Notification.requestPermission().then(function(result) {
        console.log('🔔 [UNIFIED_BRIDGE] 權限請求結果:', result);
        
        switch (result) {
          case 'granted':
            console.log('✅ [UNIFIED_BRIDGE] 用戶授權了通知權限');
            break;
          case 'denied':
            console.log('❌ [UNIFIED_BRIDGE] 用戶拒絕了通知權限');
            break;
          default:
            console.log('ℹ️ [UNIFIED_BRIDGE] 用戶取消了權限請求');
        }
        
        return result;
      }).catch(function(error) {
        console.error('❌ [UNIFIED_BRIDGE] 權限請求失敗:', error);
        return 'denied';
      });
    },

    // 獲取 VAPID 公鑰
    getVapidPublicKey: function() {
      console.log('🔑 [UNIFIED_BRIDGE] 獲取 VAPID 公鑰...');
      
      return fetch('/api/webpush/vapid-public-key')
        .then(response => {
          if (!response.ok) {
            throw new Error('HTTP ' + response.status);
          }
          return response.json();
        })
        .then(data => {
          console.log('✅ [UNIFIED_BRIDGE] VAPID 公鑰獲取成功');
          return data.publicKey;
        })
        .catch(error => {
          console.error('❌ [UNIFIED_BRIDGE] 獲取 VAPID 公鑰失敗:', error);
          return null;
        });
    },

    // 完整的推送訂閱流程
    completePushSubscription: async function() {
      try {
        console.log('🚀 [UNIFIED_BRIDGE] 開始完整推送訂閱流程...');

        // 1. 檢查瀏覽器支援
        if (!this.isSupported()) {
          console.error('❌ [UNIFIED_BRIDGE] 瀏覽器不支援推送通知');
          return { success: false, error: '瀏覽器不支援推送通知' };
        }

        // 2. 請求通知權限
        const permission = await this.requestPermission();
        console.log('📋 [UNIFIED_BRIDGE] 權限請求結果:', permission);
        
        if (permission !== 'granted') {
          console.error('❌ [UNIFIED_BRIDGE] 通知權限被拒絕');
          return { success: false, error: '通知權限被拒絕' };
        }

        // 3. 獲取 VAPID 公鑰
        const vapidPublicKey = await this.getVapidPublicKey();
        if (!vapidPublicKey) {
          console.error('❌ [UNIFIED_BRIDGE] 無法獲取 VAPID 公鑰');
          return { success: false, error: '無法獲取 VAPID 公鑰' };
        }

        // 4. 註冊 Service Worker
        const registration = await navigator.serviceWorker.ready;
        console.log('✅ [UNIFIED_BRIDGE] Service Worker 已準備就緒');

        // 5. 檢查現有訂閱
        let subscription = await registration.pushManager.getSubscription();
        if (subscription) {
          console.log('✅ [UNIFIED_BRIDGE] 已存在推送訂閱');
          const result = this._subscriptionToJson(subscription);
          return { success: true, subscription: result, isNew: false };
        }

        // 6. 創建新訂閱
        const applicationServerKey = this._urlBase64ToUint8Array(vapidPublicKey);

        subscription = await registration.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: applicationServerKey
        });

        console.log('✅ [UNIFIED_BRIDGE] 推送訂閱創建成功');
        const result = this._subscriptionToJson(subscription);
        
        return { success: true, subscription: result, isNew: true };

      } catch (error) {
        console.error('❌ [UNIFIED_BRIDGE] 推送訂閱流程失敗:', error);
        return { success: false, error: error.message };
      }
    },

    // 檢查訂閱狀態
    checkSubscriptionStatus: async function() {
      try {
        console.log('🔍 [UNIFIED_BRIDGE] 檢查訂閱狀態...');

        if (!this.isSupported()) {
          return { success: false, error: '瀏覽器不支援推送通知' };
        }

        const registration = await navigator.serviceWorker.ready;
        const subscription = await registration.pushManager.getSubscription();
        
        if (subscription) {
          const result = this._subscriptionToJson(subscription);
          console.log('✅ [UNIFIED_BRIDGE] 找到現有訂閱');
          return { success: true, subscription: result, isSubscribed: true };
        } else {
          console.log('ℹ️ [UNIFIED_BRIDGE] 未找到訂閱');
          return { success: true, subscription: null, isSubscribed: false };
        }
      } catch (error) {
        console.error('❌ [UNIFIED_BRIDGE] 檢查訂閱狀態失敗:', error);
        return { success: false, error: error.message };
      }
    },

    // 取消推送訂閱
    unsubscribeFromPush: async function() {
      try {
        console.log('🔔 [UNIFIED_BRIDGE] 取消推送訂閱...');

        if (!this.isSupported()) {
          return { success: false, error: '瀏覽器不支援推送通知' };
        }

        const registration = await navigator.serviceWorker.ready;
        const subscription = await registration.pushManager.getSubscription();
        
        if (subscription) {
          const success = await subscription.unsubscribe();
          if (success) {
            console.log('✅ [UNIFIED_BRIDGE] 推送訂閱已取消');
            return { success: true, message: '推送訂閱已取消' };
          } else {
            console.error('❌ [UNIFIED_BRIDGE] 取消訂閱失敗');
            return { success: false, error: '取消訂閱失敗' };
          }
        } else {
          console.log('ℹ️ [UNIFIED_BRIDGE] 沒有找到訂閱');
          return { success: true, message: '沒有找到訂閱' };
        }
      } catch (error) {
        console.error('❌ [UNIFIED_BRIDGE] 取消訂閱失敗:', error);
        return { success: false, error: error.message };
      }
    },

    // 顯示本地通知
    showLocalNotification: function(title, body, icon) {
      console.log('🔔 [UNIFIED_BRIDGE] 顯示本地通知:', title);
      
      if (Notification.permission !== 'granted') {
        console.error('❌ [UNIFIED_BRIDGE] 沒有通知權限');
        return false;
      }

      try {
        const notification = new Notification(title, {
          body: body,
          icon: icon || '/icons/Icon-192.png',
          badge: '/icons/Icon-192.png',
          tag: 'unified-push-notification',
          requireInteraction: false,
        });

        // 自動關閉通知
        setTimeout(() => {
          notification.close();
        }, 5000);

        console.log('✅ [UNIFIED_BRIDGE] 本地通知已顯示');
        return true;
      } catch (error) {
        console.error('❌ [UNIFIED_BRIDGE] 顯示本地通知失敗:', error);
        return false;
      }
    },

    // 獲取設備信息
    getDeviceInfo: function() {
      console.log('🔍 [UNIFIED_BRIDGE] 開始收集設備信息...');
      
      const userAgent = navigator.userAgent;
      const deviceType = this._getDeviceType(userAgent);
      const deviceName = this._getDeviceName(userAgent);
      
      const deviceInfo = {
        userAgent: userAgent,
        deviceType: deviceType,
        deviceName: deviceName
      };
      
      console.log('🔍 [UNIFIED_BRIDGE] 設備信息:', deviceInfo);
      return deviceInfo;
    },

    // 輔助方法：將訂閱對象轉換為 JSON
    _subscriptionToJson: function(subscription) {
      const keys = subscription.getKey('p256dh');
      const auth = subscription.getKey('auth');
      
      return {
        endpoint: subscription.endpoint,
        p256dh: keys ? this._arrayBufferToBase64(keys) : null,
        auth: auth ? this._arrayBufferToBase64(auth) : null,
      };
    },

    // 輔助方法：URL Base64 轉 Uint8Array
    _urlBase64ToUint8Array: function(base64String) {
      const padding = '='.repeat((4 - base64String.length % 4) % 4);
      const base64 = (base64String + padding)
        .replace(/\-/g, '+')
        .replace(/_/g, '/');

      const rawData = window.atob(base64);
      const outputArray = new Uint8Array(rawData.length);

      for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
      }
      return outputArray;
    },

    // 輔助方法：ArrayBuffer 轉 Base64
    _arrayBufferToBase64: function(buffer) {
      const bytes = new Uint8Array(buffer);
      let binary = '';
      for (let i = 0; i < bytes.byteLength; i++) {
        binary += String.fromCharCode(bytes[i]);
      }
      return window.btoa(binary);
    },

    // 輔助方法：獲取設備類型
    _getDeviceType: function(userAgent) {
      if (/Mobile|Android|iPhone|iPad/.test(userAgent)) {
        return 'mobile';
      } else if (/Tablet|iPad/.test(userAgent)) {
        return 'tablet';
      } else {
        return 'desktop';
      }
    },

    // 輔助方法：獲取設備名稱
    _getDeviceName: function(userAgent) {
      if (userAgent.includes('Chrome')) {
        return 'Chrome Browser';
      } else if (userAgent.includes('Firefox')) {
        return 'Firefox Browser';
      } else if (userAgent.includes('Safari')) {
        return 'Safari Browser';
      } else if (userAgent.includes('Edge')) {
        return 'Edge Browser';
      } else {
        return 'Unknown Browser';
      }
    }
  };

  // 初始化完成
  console.log('🚀 [UNIFIED_BRIDGE] 統一推送橋接器已載入');
  console.log('💡 [UNIFIED_BRIDGE] 使用方法: window.UnifiedPushManager.completePushSubscription()');

})();

