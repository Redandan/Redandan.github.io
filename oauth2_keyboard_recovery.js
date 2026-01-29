/**
 * OAuth2 鍵盤恢復系統
 * 處理 OAuth2 重定向後的鍵盤和視口恢復
 * 
 * 流程：
 * 1. 用戶在登入頁點擊 Google 登入 → 打開新 TAB
 * 2. 在 Google 端點取消 → 回到登入頁
 * 3. 本腳本檢測頁面可見性變化 → 自動恢復視口
 */
(function() {
  'use strict';

  const ua = navigator.userAgent || '';
  const isIOS = /iPad|iPhone|iPod/.test(ua);
  const isAndroid = /Android/.test(ua);
  const isMobile = isIOS || isAndroid;

  if (!isMobile) {
    console.log('[OAUTH2_RECOVERY] Not a mobile device, skipping keyboard recovery');
    return;
  }

  console.log('[OAUTH2_RECOVERY] ✅ Initializing OAuth2 keyboard recovery system');
  console.log('[OAUTH2_RECOVERY] Platform:', isIOS ? 'iOS' : 'Android');

  /**
   * 立即記錄當前狀態（用於 DEBUG）
   */
  function logCurrentState(trigger) {
    try {
      const vv = window.visualViewport;
      const windowHeight = window.innerHeight || 0;
      const vvHeight = vv ? vv.height : 'N/A';
      const keyboardHeight = vv ? (windowHeight - vv.height) : 'N/A';
      
      console.log(`[OAUTH2_RECOVERY] ===== STATE: ${trigger} =====`);
      console.log(`[OAUTH2_RECOVERY] window.innerHeight: ${windowHeight}`);
      console.log(`[OAUTH2_RECOVERY] vv.height: ${vvHeight}`);
      console.log(`[OAUTH2_RECOVERY] Keyboard height: ${keyboardHeight}`);
      console.log(`[OAUTH2_RECOVERY] Active element: ${document.activeElement?.tagName} (${document.activeElement?.id || 'no-id'})`);
      console.log(`[OAUTH2_RECOVERY] URL: ${window.location.href}`);
      console.log('[OAUTH2_RECOVERY] ========================');
    } catch (e) {
      console.log('[OAUTH2_RECOVERY] Error logging state:', e);
    }
  }

  /**
   * 恢復視口狀態 - 主恢復邏輯
   */
  function recoverViewport() {
    console.log('[OAUTH2_RECOVERY] 🔄 Starting viewport recovery...');
    logCurrentState('Recovery Start');

    try {
      // 1. 移除所有輸入框焦點，關閉虛擬鍵盤
      const activeElement = document.activeElement;
      if (activeElement) {
        const isInput = activeElement.tagName === 'INPUT' || 
                        activeElement.tagName === 'TEXTAREA';
        
        if (isInput) {
          console.log('[OAUTH2_RECOVERY] ✅ Removing focus from', activeElement.tagName);
          activeElement.blur();
          logCurrentState('After Blur');
        }
      }

      // 2. 強制 Flutter root 重新渲染
      const flutterRoot = document.getElementById('flutter-root');
      if (flutterRoot) {
        const vv = window.visualViewport;
        if (vv) {
          console.log('[OAUTH2_RECOVERY] ✅ Updating flutter-root height from visualViewport');
          flutterRoot.style.height = vv.height + 'px';
          flutterRoot.style.width = vv.width + 'px';
          
          // 觸發 reflow
          flutterRoot.offsetHeight;
          console.log(`[OAUTH2_RECOVERY] ✅ Updated flutter-root to ${vv.width}x${vv.height}`);
        }
      }

      // 3. 延遲再次確認恢復
      setTimeout(() => {
        logCurrentState('Recovery After Delay');
        console.log('[OAUTH2_RECOVERY] ✅ Viewport recovery completed');
      }, 300);

    } catch (e) {
      console.warn('[OAUTH2_RECOVERY] ❌ Error during recovery:', e);
      logCurrentState('Recovery Error');
    }
  }

  /**
   * 監聽頁面可見性變化（從 Google OAuth TAB 回到當前 TAB）
   * 這是最可靠的恢復觸發點
   */
  if (document.visibilityState !== undefined) {
    document.addEventListener('visibilitychange', () => {
      const state = document.visibilityState;
      console.log(`[OAUTH2_RECOVERY] 🔍 visibilitychange event: ${state}`);
      
      if (state === 'visible') {
        console.log('[OAUTH2_RECOVERY] 📲 Page became visible (returning from Google OAuth)');
        logCurrentState('Visibility Change');
        
        // 立即執行恢復（不等待）
        recoverViewport();
        
        // 再次確認（延遲 500ms）
        setTimeout(() => {
          logCurrentState('Double Check');
          if (window.visualViewport && window.visualViewport.height < window.innerHeight - 100) {
            console.log('[OAUTH2_RECOVERY] ⚠️ Keyboard still visible, attempting second recovery');
            recoverViewport();
          }
        }, 500);
      }
    });
  }

  /**
   * 監聽視口焦點恢復（備用方案）
   */
  window.addEventListener('focus', () => {
    console.log('[OAUTH2_RECOVERY] 🔍 Window focus event');
    
    // 檢查是否有 OAuth 回調參數
    const params = new URLSearchParams(window.location.search);
    if (params.has('tokenId') || params.has('error')) {
      console.log('[OAUTH2_RECOVERY] 📲 OAuth2 callback detected, recovering viewport');
      logCurrentState('Window Focus + OAuth Callback');
      setTimeout(recoverViewport, 100);
    }
  });

  /**
   * 監聽 visualViewport 變化（實時監控）
   */
  const vv = window.visualViewport;
  if (vv) {
    let lastHeight = vv.height;
    let lastWidth = vv.width;

    vv.addEventListener('resize', () => {
      const currentHeight = vv.height;
      const currentWidth = vv.width;
      const heightChange = Math.abs(currentHeight - lastHeight);
      const widthChange = Math.abs(currentWidth - lastWidth);

      // 如果高度變化超過 50px，記錄（可能是鍵盤狀態變化）
      if (heightChange > 50 || widthChange > 50) {
        console.log(`[OAUTH2_RECOVERY] 📊 visualViewport resized: ${lastWidth}x${lastHeight} → ${currentWidth}x${currentHeight}`);
        logCurrentState('visualViewport Resize');
      }

      lastHeight = currentHeight;
      lastWidth = currentWidth;
    });

    vv.addEventListener('scroll', () => {
      console.log(`[OAUTH2_RECOVERY] 📊 visualViewport scrolled to (${vv.offsetLeft}, ${vv.offsetTop})`);
    });
  }

  /**
   * 監聽頁面加載完成
   */
  window.addEventListener('load', () => {
    console.log('[OAUTH2_RECOVERY] 📄 Page load complete');
    
    const params = new URLSearchParams(window.location.search);
    if (params.has('tokenId') || params.has('error')) {
      console.log('[OAUTH2_RECOVERY] 📲 OAuth2 callback detected at page load');
      logCurrentState('Page Load + OAuth Callback');
      setTimeout(recoverViewport, 200);
    }
  });

  /**
   * 監聽 DOM 加載完成
   */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      console.log('[OAUTH2_RECOVERY] 📄 DOM content loaded');
      
      const params = new URLSearchParams(window.location.search);
      if (params.has('tokenId') || params.has('error')) {
        console.log('[OAUTH2_RECOVERY] 📲 OAuth2 callback detected at DOMContentLoaded');
        logCurrentState('DOMContentLoaded + OAuth Callback');
        setTimeout(recoverViewport, 150);
      }
    });
  }

  /**
   * 暴露給 Flutter/Dart 調用
   */
  window.recoverViewportFromOAuth2 = function(debugMode) {
    console.log('[OAUTH2_RECOVERY] 🔗 Called from Dart/Flutter', debugMode ? '(DEBUG MODE)' : '');
    logCurrentState('Dart Call');
    recoverViewport();
  };

  /**
   * 暴露日誌收集函數（用於 DEBUG）
   */
  window.collectOAuth2RecoveryLogs = function() {
    const vv = window.visualViewport;
    const logs = {
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      platform: isIOS ? 'iOS' : (isAndroid ? 'Android' : 'Unknown'),
      windowSize: {
        width: window.innerWidth,
        height: window.innerHeight
      },
      visualViewport: vv ? {
        width: vv.width,
        height: vv.height,
        offsetLeft: vv.offsetLeft,
        offsetTop: vv.offsetTop,
        scale: vv.scale
      } : null,
      calculatedKeyboardHeight: vv ? (window.innerHeight - vv.height) : null,
      activeElement: document.activeElement ? {
        tagName: document.activeElement.tagName,
        id: document.activeElement.id,
        className: document.activeElement.className
      } : null,
      url: window.location.href,
      hasOAuth2Params: {
        tokenId: new URLSearchParams(window.location.search).has('tokenId'),
        error: new URLSearchParams(window.location.search).has('error')
      }
    };
    
    console.log('[OAUTH2_RECOVERY] 📋 Debug logs collected');
    console.log(JSON.stringify(logs, null, 2));
    
    return logs;
  };

  /**
   * 模糊焦點（用於 Dart 調用）
   */
  window.blurActiveElement = function() {
    try {
      const activeElement = document.activeElement;
      if (activeElement && typeof activeElement.blur === 'function') {
        activeElement.blur();
        console.log('[OAUTH2_RECOVERY] ✅ Blurred active element:', activeElement.tagName);
        return true;
      }
      return false;
    } catch (e) {
      console.log('[OAUTH2_RECOVERY] Error blurring active element:', e);
      return false;
    }
  };

  console.log('[OAUTH2_RECOVERY] ✅ OAuth2 keyboard recovery system fully initialized');
  console.log('[OAUTH2_RECOVERY] Available functions:');
  console.log('[OAUTH2_RECOVERY]   - window.recoverViewportFromOAuth2(debugMode)');
  console.log('[OAUTH2_RECOVERY]   - window.collectOAuth2RecoveryLogs()');
  console.log('[OAUTH2_RECOVERY]   - window.blurActiveElement()');
})();