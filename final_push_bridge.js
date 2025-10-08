// 最終推送橋接器 - 完全自包含的解決方案
// 避免複雜的 Dart-JavaScript 通信問題

(function() {
  'use strict';

  // 創建全局推送管理器
  window.FinalPushManager = {
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
      console.log('🔔 [JS_BRIDGE] 開始請求通知權限...');
      
      const currentStatus = Notification.permission;
      console.log('🔔 [JS_BRIDGE] 當前權限狀態: ' + currentStatus);
      
      if (currentStatus === 'granted') {
        console.log('✅ [JS_BRIDGE] 權限已授權，無需重複請求');
        return Promise.resolve('granted');
      }
      
      if (currentStatus === 'denied') {
        console.log('❌ [JS_BRIDGE] 權限已被拒絕，無法再次請求');
        return Promise.resolve('denied');
      }
      
      console.log('🔔 [JS_BRIDGE] 調用瀏覽器權限請求對話框...');
      return Notification.requestPermission().then(function(result) {
        console.log('🔔 [JS_BRIDGE] 權限請求結果: ' + result);
        
        switch (result) {
          case 'granted':
            console.log('✅ [JS_BRIDGE] 用戶授權了通知權限');
            break;
          case 'denied':
            console.log('❌ [JS_BRIDGE] 用戶拒絕了通知權限');
            break;
          default:
            console.log('ℹ️ [JS_BRIDGE] 用戶取消了權限請求');
        }
        
        return result;
      }).catch(function(error) {
        console.error('❌ [JS_BRIDGE] 權限請求失敗:', error);
        return 'denied';
      });
    },

    // 檢查權限狀態並返回詳細信息
    checkPermissionStatus: function() {
      console.log('🔍 [JS_BRIDGE] 開始檢查權限狀態...');
      
      const status = Notification.permission;
      const isSupported = this.isSupported();
      
      console.log('🔍 [JS_BRIDGE] 權限狀態檢查結果:');
      console.log('  - 瀏覽器支援: ' + isSupported);
      console.log('  - 權限狀態: ' + status);
      console.log('  - Service Worker 支援: ' + ('serviceWorker' in navigator));
      console.log('  - PushManager 支援: ' + ('PushManager' in window));
      console.log('  - Notification 支援: ' + ('Notification' in window));
      
      const result = {
        status: status,
        isSupported: isSupported,
        canRequest: status === 'default',
        isGranted: status === 'granted',
        isDenied: status === 'denied',
        message: this._getPermissionMessage(status, isSupported)
      };
      
      console.log('🔍 [JS_BRIDGE] 權限狀態詳細信息:', result);
      return result;
    },

    // 獲取設備信息
    getDeviceInfo: function() {
      console.log('🔍 [JS_BRIDGE] 開始收集設備信息...');
      
      const userAgent = navigator.userAgent;
      const deviceType = this._getDeviceType(userAgent);
      const deviceName = this._getDeviceName(userAgent);
      
      const deviceInfo = {
        userAgent: userAgent,
        deviceType: deviceType,
        deviceName: deviceName
      };
      
      console.log('🔍 [JS_BRIDGE] 設備信息:', deviceInfo);
      return deviceInfo;
    },

    // 獲取設備類型
    _getDeviceType: function(userAgent) {
      const ua = userAgent.toLowerCase();
      if (ua.includes('mobile') || ua.includes('android') || ua.includes('iphone')) {
        return 'mobile';
      } else if (ua.includes('tablet') || ua.includes('ipad')) {
        return 'tablet';
      } else {
        return 'desktop';
      }
    },

    // 獲取設備名稱
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
    },

    // 獲取權限狀態的說明文字
    _getPermissionMessage: function(status, isSupported) {
      if (!isSupported) {
        return '瀏覽器不支援推送通知';
      }
      
      switch (status) {
        case 'granted':
          return '已授權推送通知';
        case 'denied':
          return '已拒絕推送通知，請在瀏覽器設置中手動啟用';
        case 'default':
          return '尚未請求推送通知權限';
        default:
          return '未知權限狀態';
      }
    },

    // 完整的推送訂閱流程 - 自包含版本
    completePushSubscription: async function(vapidPublicKey) {
      try {
        console.log('🚀 [JS_BRIDGE] 開始推送訂閱流程...');

        // 1. 檢查瀏覽器支援
        const isSupported = this.isSupported();
        if (!isSupported) {
          console.error('❌ [JS_BRIDGE] 瀏覽器不支援推送通知');
          return { success: false, error: '瀏覽器不支援推送通知' };
        }

        // 2. 請求通知權限
        const permission = await this.requestPermission();
        console.log('📋 [JS_BRIDGE] 權限請求結果:', permission);
        
        if (permission !== 'granted') {
          console.error('❌ [JS_BRIDGE] 通知權限被拒絕');
          return { success: false, error: '通知權限被拒絕' };
        }

        // 3. 註冊 Service Worker
        const registration = await navigator.serviceWorker.ready;
        console.log('✅ [JS_BRIDGE] Service Worker 已準備就緒');

        // 4. 檢查現有訂閱
        let subscription = await registration.pushManager.getSubscription();
        if (subscription) {
          console.log('✅ [JS_BRIDGE] 已存在推送訂閱');
          const result = this._subscriptionToJson(subscription);
          return { success: true, subscription: result };
        }

        // 5. 創建新訂閱
        if (!vapidPublicKey) {
          console.error('❌ [JS_BRIDGE] 缺少 VAPID 公鑰');
          return { success: false, error: '缺少 VAPID 公鑰' };
        }

        const applicationServerKey = this._urlBase64ToUint8Array(vapidPublicKey);

        subscription = await registration.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: applicationServerKey
        });

        console.log('✅ [JS_BRIDGE] 推送訂閱創建成功');
        const result = this._subscriptionToJson(subscription);
        
        return { success: true, subscription: result };

      } catch (error) {
        console.error('❌ [JS_BRIDGE] 推送訂閱失敗:', error);
        console.error('❌ [JS_BRIDGE] 錯誤詳情:', {
          name: error.name,
          message: error.message,
          stack: error.stack
        });
        return { success: false, error: '推送訂閱失敗: ' + error.message };
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
            return { success: true };
          } else {
            return { success: false, error: '取消訂閱失敗' };
          }
        } else {
          return { success: true }; // 沒有訂閱，視為成功
        }
      } catch (error) {
        console.error('❌ 取消訂閱失敗:', error);
        return { success: false, error: '取消訂閱失敗: ' + error.message };
      }
    },

    // 檢查訂閱狀態
    isSubscribed: async function() {
      try {
        console.log('🔍 [JS_BRIDGE] 檢查推送訂閱狀態...');
        const registration = await navigator.serviceWorker.ready;
        const subscription = await registration.pushManager.getSubscription();
        const isSubscribed = subscription !== null;
        
        console.log('🔍 [JS_BRIDGE] 訂閱狀態檢查結果:', {
          isSubscribed: isSubscribed,
          hasSubscription: !!subscription,
          endpoint: subscription ? subscription.endpoint.substring(0, 50) + '...' : 'null'
        });
        
        return isSubscribed;
      } catch (error) {
        console.error('❌ [JS_BRIDGE] 檢查訂閱狀態失敗:', error);
        return false;
      }
    },

    // 顯示本地通知
    showLocalNotification: function(title, body, icon) {
      console.log('🔔 [JS_BRIDGE] 嘗試顯示本地通知:', { title, body, icon });
      console.log('🔔 [JS_BRIDGE] 當前通知權限:', Notification.permission);
      
      if (Notification.permission === 'granted') {
        try {
          const notification = new Notification(title, {
            body: body,
            icon: icon || '/icons/Icon-192.png',
            tag: 'agora-market-notification'
          });
          
          console.log('✅ [JS_BRIDGE] 本地通知創建成功:', {
            title: notification.title,
            body: notification.body,
            tag: notification.tag
          });
          
          // 添加事件監聽器
          notification.onclick = function() {
            console.log('🔔 [JS_BRIDGE] 本地通知被點擊');
            notification.close();
          };
          
          notification.onclose = function() {
            console.log('🔔 [JS_BRIDGE] 本地通知被關閉');
          };
          
          notification.onshow = function() {
            console.log('🔔 [JS_BRIDGE] 本地通知已顯示');
          };
          
        } catch (error) {
          console.error('❌ [JS_BRIDGE] 創建本地通知失敗:', error);
        }
      } else {
        console.warn('⚠️ [JS_BRIDGE] 通知權限未授予，無法顯示本地通知');
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

  // 監聽 Service Worker 消息
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.addEventListener('message', function(event) {
      if (event.data && event.data.type === 'PUSH_NOTIFICATION_RECEIVED') {
        console.log('🔔 [JS_BRIDGE] 收到 Service Worker 推送通知消息:', event.data);
      } else if (event.data && event.data.type === 'CHECK_WEBPUSH_SETTING') {
        console.log('🔔 [JS_BRIDGE] Service Worker 請求檢查 Web Push 設置');
        // 這裡可以添加檢查用戶設置的邏輯
        // 目前先允許所有通知，實際實現中需要與 Dart 層通信
      }
    });
  }

  console.log('🔧 FinalPushManager 已載入');
})();
