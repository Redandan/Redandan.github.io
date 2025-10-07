// WASM 模式下手動創建 Web Push 訂閱的腳本
// 在瀏覽器 Console 中執行此腳本

class ManualPushSubscription {
  constructor() {
    this.vapidPublicKey = null;
    this.subscription = null;
  }

  // 檢查瀏覽器支援
  checkSupport() {
    const support = {
      serviceWorker: 'serviceWorker' in navigator,
      pushManager: 'PushManager' in window,
      notification: 'Notification' in window,
      https: location.protocol === 'https:' || location.hostname === 'localhost'
    };
    
    console.log('瀏覽器支援檢查:', support);
    return Object.values(support).every(Boolean);
  }

  // 獲取 VAPID 公鑰
  async getVapidPublicKey() {
    try {
      const response = await fetch('/api/webpush/vapid-public-key');
      const data = await response.json();
      this.vapidPublicKey = data.publicKey;
      console.log('VAPID 公鑰獲取成功:', this.vapidPublicKey);
      return this.vapidPublicKey;
    } catch (error) {
      console.error('獲取 VAPID 公鑰失敗:', error);
      throw error;
    }
  }

  // 請求通知權限
  async requestPermission() {
    try {
      const permission = await Notification.requestPermission();
      console.log('通知權限狀態:', permission);
      
      if (permission !== 'granted') {
        throw new Error('通知權限被拒絕');
      }
      
      return permission;
    } catch (error) {
      console.error('請求通知權限失敗:', error);
      throw error;
    }
  }

  // 創建推送訂閱
  async createSubscription() {
    try {
      // 1. 檢查支援
      if (!this.checkSupport()) {
        throw new Error('瀏覽器不支援 Web Push');
      }

      // 2. 請求權限
      await this.requestPermission();

      // 3. 獲取 VAPID 公鑰
      await this.getVapidPublicKey();

      // 4. 註冊 Service Worker
      const registration = await navigator.serviceWorker.ready;
      console.log('Service Worker 已準備就緒');

      // 5. 檢查現有訂閱
      const existingSubscription = await registration.pushManager.getSubscription();
      if (existingSubscription) {
        console.log('已存在推送訂閱:', existingSubscription);
        this.subscription = existingSubscription;
        return this.subscription;
      }

      // 6. 創建新訂閱
      this.subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: this.urlBase64ToUint8Array(this.vapidPublicKey)
      });

      console.log('推送訂閱創建成功:', this.subscription);
      return this.subscription;
    } catch (error) {
      console.error('創建推送訂閱失敗:', error);
      throw error;
    }
  }

  // 註冊到後端
  async registerToBackend() {
    if (!this.subscription) {
      throw new Error('沒有可用的推送訂閱');
    }

    try {
      // 獲取當前用戶的 token (需要從應用中獲取)
      const token = this.getCurrentUserToken();
      if (!token) {
        throw new Error('無法獲取用戶 token');
      }

      const subscriptionData = {
        endpoint: this.subscription.endpoint,
        p256dh: this.arrayBufferToBase64(this.subscription.getKey('p256dh')),
        auth: this.arrayBufferToBase64(this.subscription.getKey('auth'))
      };

      console.log('發送訂閱數據到後端:', subscriptionData);

      const response = await fetch('/api/webpush/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(subscriptionData)
      });

      const result = await response.json();
      console.log('後端註冊結果:', result);

      if (response.ok) {
        console.log('✅ 推送訂閱註冊成功！');
        return true;
      } else {
        console.error('❌ 後端註冊失敗:', result);
        return false;
      }
    } catch (error) {
      console.error('註冊到後端失敗:', error);
      throw error;
    }
  }

  // 獲取當前用戶 token (需要從應用中獲取)
  getCurrentUserToken() {
    // 這裡需要從 Flutter 應用中獲取 token
    // 可以通過 localStorage 或其他方式獲取
    const token = localStorage.getItem('auth_token') || 
                  sessionStorage.getItem('auth_token') ||
                  document.cookie.match(/auth_token=([^;]+)/)?.[1];
    
    console.log('獲取到的 token:', token ? '已獲取' : '未找到');
    return token;
  }

  // 完整的訂閱流程
  async subscribe() {
    try {
      console.log('🚀 開始 Web Push 訂閱流程...');
      
      // 1. 創建訂閱
      await this.createSubscription();
      
      // 2. 註冊到後端
      const success = await this.registerToBackend();
      
      if (success) {
        console.log('🎉 Web Push 訂閱完成！');
        console.log('現在您可以接收推送通知了');
      }
      
      return success;
    } catch (error) {
      console.error('❌ 訂閱流程失敗:', error);
      return false;
    }
  }

  // 取消訂閱
  async unsubscribe() {
    try {
      if (!this.subscription) {
        console.log('沒有可用的訂閱');
        return false;
      }

      // 取消本地訂閱
      await this.subscription.unsubscribe();
      console.log('本地訂閱已取消');

      // 通知後端取消訂閱
      const token = this.getCurrentUserToken();
      if (token) {
        const response = await fetch(`/api/webpush/unsubscribe?endpoint=${encodeURIComponent(this.subscription.endpoint)}`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        const result = await response.json();
        console.log('後端取消訂閱結果:', result);
      }

      this.subscription = null;
      console.log('✅ 推送訂閱已完全取消');
      return true;
    } catch (error) {
      console.error('取消訂閱失敗:', error);
      return false;
    }
  }

  // 檢查訂閱狀態
  async checkSubscription() {
    try {
      const registration = await navigator.serviceWorker.ready;
      const subscription = await registration.pushManager.getSubscription();
      
      if (subscription) {
        console.log('✅ 當前有推送訂閱');
        console.log('端點:', subscription.endpoint);
        this.subscription = subscription;
        return true;
      } else {
        console.log('❌ 沒有推送訂閱');
        return false;
      }
    } catch (error) {
      console.error('檢查訂閱狀態失敗:', error);
      return false;
    }
  }

  // 輔助函數
  urlBase64ToUint8Array(base64String) {
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

  arrayBufferToBase64(buffer) {
    const bytes = new Uint8Array(buffer);
    let binary = '';
    for (let i = 0; i < bytes.byteLength; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  }
}

// 創建全局實例
window.manualPushSubscription = new ManualPushSubscription();

// 提供便捷的全局函數
window.subscribeToPush = () => window.manualPushSubscription.subscribe();
window.unsubscribeFromPush = () => window.manualPushSubscription.unsubscribe();
window.checkPushSubscription = () => window.manualPushSubscription.checkSubscription();

console.log('🔧 手動推送訂閱腳本已載入');
console.log('可用函數:');
console.log('  - subscribeToPush() - 創建推送訂閱');
console.log('  - unsubscribeFromPush() - 取消推送訂閱');
console.log('  - checkPushSubscription() - 檢查訂閱狀態');
console.log('  - manualPushSubscription - 完整實例');
