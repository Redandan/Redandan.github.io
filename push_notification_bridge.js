// Web Push 通知橋接器
// 處理前端推送訂閱邏輯，與 Flutter 應用通信

class PushNotificationBridge {
  constructor() {
    this.isSupported = this.checkSupport();
    this.permissionStatus = this.getPermissionStatus();
  }

  // 檢查瀏覽器支援
  checkSupport() {
    return 'serviceWorker' in navigator && 
           'PushManager' in window && 
           'Notification' in window;
  }

  // 獲取通知權限狀態
  getPermissionStatus() {
    return Notification.permission;
  }

  // 請求通知權限
  async requestPermission() {
    try {
      const permission = await Notification.requestPermission();
      this.permissionStatus = permission;
      return permission;
    } catch (error) {
      console.error('請求通知權限失敗:', error);
      return 'denied';
    }
  }

  // 獲取 VAPID 公鑰
  async getVapidPublicKey() {
    try {
      // 這裡應該調用您的後端 API
      const response = await fetch('/api/webpush/vapid-public-key');
      const data = await response.json();
      return data.publicKey;
    } catch (error) {
      console.error('獲取 VAPID 公鑰失敗:', error);
      return null;
    }
  }

  // 訂閱推送服務
  async subscribeToPush() {
    try {
      if (!this.isSupported) {
        throw new Error('瀏覽器不支援推送通知');
      }

      // 檢查權限
      if (this.permissionStatus !== 'granted') {
        const permission = await this.requestPermission();
        if (permission !== 'granted') {
          throw new Error('用戶拒絕通知權限');
        }
      }

      // 獲取 Service Worker 註冊
      const registration = await navigator.serviceWorker.ready;

      // 檢查是否已訂閱
      const existingSubscription = await registration.pushManager.getSubscription();
      if (existingSubscription) {
        console.log('已存在推送訂閱');
        return this.subscriptionToObject(existingSubscription);
      }

      // 獲取 VAPID 公鑰
      const vapidPublicKey = await this.getVapidPublicKey();
      if (!vapidPublicKey) {
        throw new Error('無法獲取 VAPID 公鑰');
      }

      // 創建新訂閱
      const subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: this.base64ToUint8Array(vapidPublicKey)
      });

      console.log('推送訂閱成功');
      return this.subscriptionToObject(subscription);
    } catch (error) {
      console.error('訂閱推送服務失敗:', error);
      throw error;
    }
  }

  // 取消推送訂閱
  async unsubscribeFromPush() {
    try {
      const registration = await navigator.serviceWorker.ready;
      const subscription = await registration.pushManager.getSubscription();

      if (subscription) {
        await subscription.unsubscribe();
        console.log('推送訂閱已取消');
        return true;
      }
      return false;
    } catch (error) {
      console.error('取消推送訂閱失敗:', error);
      throw error;
    }
  }

  // 檢查訂閱狀態
  async isSubscribed() {
    try {
      const registration = await navigator.serviceWorker.ready;
      const subscription = await registration.pushManager.getSubscription();
      return subscription !== null;
    } catch (error) {
      console.error('檢查訂閱狀態失敗:', error);
      return false;
    }
  }

  // 顯示本地通知
  showLocalNotification(title, body, icon = '/icons/Icon-192.png') {
    try {
      if (this.permissionStatus === 'granted') {
        const notification = new Notification(title, {
          body: body,
          icon: icon,
          tag: 'agora-market-notification'
        });

        // 5秒後自動關閉
        setTimeout(() => {
          notification.close();
        }, 5000);

        console.log('本地通知已顯示:', title);
        return true;
      }
      return false;
    } catch (error) {
      console.error('顯示本地通知失敗:', error);
      return false;
    }
  }

  // 將訂閱對象轉換為可序列化的格式
  subscriptionToObject(subscription) {
    return {
      endpoint: subscription.endpoint,
      keys: {
        p256dh: this.uint8ArrayToBase64(subscription.getKey('p256dh')),
        auth: this.uint8ArrayToBase64(subscription.getKey('auth'))
      }
    };
  }

  // Base64 轉 Uint8Array
  base64ToUint8Array(base64String) {
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
  }

  // Uint8Array 轉 Base64
  uint8ArrayToBase64(uint8Array) {
    let binary = '';
    const bytes = new Uint8Array(uint8Array);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  }
}

// 創建全局實例
window.pushNotificationBridge = new PushNotificationBridge();

// 導出給 Flutter 使用
window.flutterWebPush = {
  // 檢查支援
  isSupported: () => window.pushNotificationBridge.isSupported,
  
  // 獲取權限狀態
  getPermissionStatus: () => window.pushNotificationBridge.permissionStatus,
  
  // 請求權限
  requestPermission: () => window.pushNotificationBridge.requestPermission(),
  
  // 訂閱推送
  subscribeToPush: () => window.pushNotificationBridge.subscribeToPush(),
  
  // 取消訂閱
  unsubscribeFromPush: () => window.pushNotificationBridge.unsubscribeFromPush(),
  
  // 檢查訂閱狀態
  isSubscribed: () => window.pushNotificationBridge.isSubscribed(),
  
  // 顯示本地通知
  showLocalNotification: (title, body, icon) => 
    window.pushNotificationBridge.showLocalNotification(title, body, icon)
};
