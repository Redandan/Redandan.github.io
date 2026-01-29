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
   * 
   * 修復 iOS PWA visualViewport 延遲更新問題：
   * - 當用戶返回 OAuth2 頁面時，虛擬鍵盤關閉需要時間
   * - iOS 的 vv.height 更新延遲，直接用舊值會導致高度同步錯誤
   * - 解決方案：等待 vv.height 穩定後再設置
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

      // 2. 等待 visualViewport 高度穩定（iOS 延遲更新問題）
      const vv = window.visualViewport;
      if (!vv) {
        console.warn('[OAUTH2_RECOVERY] ⚠️ visualViewport not available');
        return;
      }

      // 等待鍵盤真正關閉並且 vv.height 穩定
      waitForStableHeight(function() {
        // 3. 現在 vv.height 已經穩定，更新 Flutter root
        const flutterRoot = document.getElementById('flutter-root');
        if (flutterRoot) {
          const stableHeight = vv.height;
          const stableWidth = vv.width;
          
          console.log('[OAUTH2_RECOVERY] ✅ Updating flutter-root to stable dimensions: ' + stableWidth + 'x' + stableHeight);
          flutterRoot.style.height = stableHeight + 'px';
          flutterRoot.style.width = stableWidth + 'px';
          
          // 觸發 reflow 確保 CSS 應用
          flutterRoot.offsetHeight;
          
          // 觸發手動事件給 visualViewport sync 脚本
          console.log('[OAUTH2_RECOVERY] ✅ Triggering viewport update event');
          try {
            window.dispatchEvent(new CustomEvent('_vv_recovery_height_stable', {
              detail: { width: stableWidth, height: stableHeight }
            }));
          } catch (_) {}
        }

        logCurrentState('Recovery After Stable Height');
        console.log('[OAUTH2_RECOVERY] ✅ Viewport recovery completed');
      });

    } catch (e) {
      console.warn('[OAUTH2_RECOVERY] ❌ Error during recovery:', e);
      logCurrentState('Recovery Error');
    }
  }

  /**
   * 等待 visualViewport.height 穩定
   * 
   * iOS PWA 鍵盤關閉時，vv.height 更新有延遲
   * 本函數輪詢 vv.height，直到連續 3 次讀數相同
   */
  function waitForStableHeight(callback) {
    const vv = window.visualViewport;
    if (!vv) {
      callback();
      return;
    }

    let stableCount = 0;
    let lastHeight = vv.height;
    let lastWidth = vv.width;
    let checkCount = 0;
    const maxChecks = 100; // 最多檢查 100 次 (5秒 @ 50ms 間隔)

    console.log('[OAUTH2_RECOVERY] 🔍 Waiting for visualViewport height to stabilize...');
    console.log('[OAUTH2_RECOVERY] Current height: ' + lastHeight + ', width: ' + lastWidth);

    const checkInterval = setInterval(function() {
      checkCount++;
      const currentHeight = vv.height;
      const currentWidth = vv.width;

      if (currentHeight === lastHeight && currentWidth === lastWidth) {
        stableCount++;
        console.log('[OAUTH2_RECOVERY] 📊 Height stable: ' + currentHeight + 'x' + currentWidth + ' (count: ' + stableCount + '/3)');
        
        if (stableCount >= 3) {
          // 穩定了！
          clearInterval(checkInterval);
          console.log('[OAUTH2_RECOVERY] ✅ visualViewport height is now stable!');
          callback();
          return;
        }
      } else {
        stableCount = 0;
        if (currentHeight !== lastHeight || currentWidth !== lastWidth) {
          console.log('[OAUTH2_RECOVERY] 📊 Height changed: ' + lastHeight + 'x' + lastWidth + ' → ' + currentHeight + 'x' + currentWidth);
        }
        lastHeight = currentHeight;
        lastWidth = currentWidth;
      }

      // 超過最大檢查次數，放棄等待
      if (checkCount >= maxChecks) {
        clearInterval(checkInterval);
        console.warn('[OAUTH2_RECOVERY] ⏱️ Timeout waiting for stable height, using current: ' + lastHeight + 'x' + lastWidth);
        callback();
        return;
      }
    }, 50); // 每 50ms 檢查一次
  }

  /**
   * 判斷是否需要恢復
   */
  function shouldRecover() {
    const vv = window.visualViewport;
    if (!vv) return false;
    const keyboardHeight = window.innerHeight - vv.height;
    const activeElement = document.activeElement;
    const isInputFocused = activeElement &&
      (activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA');

    // 鍵盤高度大於 40px 或存在可疑偏移時嘗試恢復
    return keyboardHeight > 40 || (!isInputFocused && keyboardHeight > 0);
  }

  /**
   * 安排多段恢復（避免 iOS PWA 事件延遲）
   * 
   * 修改：只調用一次 recoverViewport()，因為新版本已經有內部等待邏輯
   */
  function scheduleRecovery(tag) {
    console.log(`[OAUTH2_RECOVERY] 🧭 scheduleRecovery: ${tag}`);
    // 主恢復（含內部穩定性等待）
    recoverViewport();
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
        if (shouldRecover()) {
          scheduleRecovery('visibilitychange');
        }
      }
    });
  }

  /**
   * 監聽視口焦點恢復（備用方案）
   */
  window.addEventListener('focus', () => {
    console.log('[OAUTH2_RECOVERY] 🔍 Window focus event');
    logCurrentState('Window Focus');
    if (shouldRecover()) {
      scheduleRecovery('focus');
    }
  });

  window.addEventListener('pageshow', () => {
    console.log('[OAUTH2_RECOVERY] 🔍 pageshow event');
    logCurrentState('Page Show');
    if (shouldRecover()) {
      scheduleRecovery('pageshow');
    }
  });

  // iOS PWA: 用戶首次點擊時強制恢復一次
  document.addEventListener('touchstart', () => {
    if (shouldRecover()) {
      console.log('[OAUTH2_RECOVERY] 🔍 touchstart recovery trigger');
      scheduleRecovery('touchstart');
    }
  }, { passive: true, once: true });

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