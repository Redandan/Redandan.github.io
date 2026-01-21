// PWA 触摸坐标修复 - 基于社区最佳实践
// 参考：https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
// 问题：PWA standalone 模式下，100vh 不等于实际视口高度
// iOS 特殊问题：状态栏过渡导致白框、画面跳动和点击偏移

(function() {
  'use strict';

  // Legacy script guard:
  // `web/index.html` now owns the iOS 17+ PWA visualViewport sync (transform root + offset filtering + delayed sync).
  // If that synchronizer is present, do nothing here to avoid double-applying conflicting styles.
  if (window.__AGORA_VV_SYNC_INSTALLED) {
    return;
  }
  
  // 检测是否在 PWA Standalone 模式
  function isStandaloneMode() {
    try {
      return window.matchMedia('(display-mode: standalone)').matches ||
             window.navigator.standalone === true ||
             window.matchMedia('(display-mode: fullscreen)').matches;
    } catch (e) {
      return false;
    }
  }
  
  // 检测是否在 iOS
  function isIOS() {
    return /iPad|iPhone|iPod|iOS/.test(navigator.userAgent);
  }
  
  // 检测 iOS 版本
  function getIOSVersion() {
    try {
      const match = navigator.userAgent.match(/OS (\d+)_(\d+)_?(\d+)?/);
      if (match) {
        return {
          major: parseInt(match[1], 10),
          minor: parseInt(match[2], 10),
          patch: parseInt(match[3] || '0', 10)
        };
      }
    } catch (e) {
      // 忽略错误
    }
    return null;
  }
  
  // 检测是否是 iOS 17 或更高版本
  function isIOS17OrLater() {
    const version = getIOSVersion();
    return version && version.major >= 17;
  }
  
  // 检测是否有 Dynamic Island（iPhone 14 Pro 及以后）
  function hasDynamicIsland() {
    try {
      const iosVersion = getIOSVersion();
      if (!iosVersion || iosVersion.major < 16) {
        return false; // iOS 16 之前没有 Dynamic Island
      }
      
      // 通过屏幕尺寸判断（Dynamic Island 设备通常是较新的 iPhone）
      const screenHeight = window.screen.height;
      const screenWidth = window.screen.width;
      
      // iPhone 14 Pro/15 Pro: 852x393, iPhone 14 Pro Max/15 Pro Max: 932x430
      // iPhone 16 Pro: 932x430, iPhone 16 Pro Max: 1068x480
      // 这些设备有 Dynamic Island
      const dynamicIslandDevices = [
        { width: 393, height: 852 }, // iPhone 14 Pro, 15 Pro
        { width: 430, height: 932 }, // iPhone 14 Pro Max, 15 Pro Max, 16 Pro
        { width: 480, height: 1068 } // iPhone 16 Pro Max
      ];
      
      return dynamicIslandDevices.some(device => 
        (screenWidth === device.width && screenHeight === device.height) ||
        (screenWidth === device.height && screenHeight === device.width) // 横屏
      );
    } catch (e) {
      return false;
    }
  }
  
  if (!isStandaloneMode()) {
    return; // 非 PWA 模式，不需要修复
  }
  
  const isIOSStandalone = isIOS() && isStandaloneMode();
  const isIOS17Standalone = isIOSStandalone && isIOS17OrLater();
  const hasDynamicIslandDevice = hasDynamicIsland();
  
  // 记录设备信息（调试用）
  if (isIOSStandalone && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')) {
    console.log('[PWA_VIEWPORT_FIX] Device Info:', {
      iosVersion: getIOSVersion(),
      isIOS17: isIOS17Standalone,
      hasDynamicIsland: hasDynamicIslandDevice,
      screen: {
        width: window.screen.width,
        height: window.screen.height
      },
      visualViewport: window.visualViewport ? {
        width: window.visualViewport.width,
        height: window.visualViewport.height,
        offsetTop: window.visualViewport.offsetTop
      } : null
    });
  }
  
  // Update viewport height using visualViewport.height as single source of truth
  // This fixes iOS 17+ touch offset issues without breaking iPhone 12
  function setRealViewportHeight() {
    let viewportHeight;
    
    // iOS 17+ requires visualViewport.height for accurate viewport
    // Fallback to innerHeight for older iOS or non-iOS devices
    if (window.visualViewport && window.visualViewport.height > 0) {
      viewportHeight = window.visualViewport.height;
    } else {
      // Fallback for devices without visualViewport support
      viewportHeight = window.innerHeight;
    }
    
    // Calculate 1vh unit
    const vh = viewportHeight * 0.01;
    
    // Set CSS variable --vh (1vh = 1% of viewport height)
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    
    // DO NOT set html/body height or position - causes touch offset issues
  }
  
  // 初始设置（立即执行）
  setRealViewportHeight();
  
  // iOS 特殊处理：在页面加载的各个阶段都更新视口高度
  if (isIOSStandalone) {
    // 在 DOMContentLoaded 时再次设置
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', setRealViewportHeight);
    } else {
      setRealViewportHeight();
    }
    
    // 在 window.load 时再次设置（确保所有资源加载完成）
    window.addEventListener('load', function() {
      setTimeout(setRealViewportHeight, 50);
    });
  }
  
  // 监听窗口大小变化（包括状态栏显示/隐藏）
  let resizeTimeout;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);
    // iOS 需要更快的响应
    resizeTimeout = setTimeout(setRealViewportHeight, isIOSStandalone ? 50 : 100);
  });
  
  // Listen to visualViewport API (critical for iOS 17+)
  // visualViewport.height is the single source of truth
  if (window.visualViewport) {
    window.visualViewport.addEventListener('resize', function() {
      setRealViewportHeight();
      // Immediately update Flutter containers on iOS
      if (isIOSStandalone) {
        setTimeout(ensureFlutterViewport, 10);
      }
    });
    
    window.visualViewport.addEventListener('scroll', function() {
      // iOS viewport may change on scroll (status bar related)
      if (isIOSStandalone) {
        setRealViewportHeight();
        setTimeout(ensureFlutterViewport, 10);
      }
    });
  }
  
  // 在页面可见性变化时更新（处理从后台恢复的情况）
  document.addEventListener('visibilitychange', function() {
    if (!document.hidden && isIOSStandalone) {
      setTimeout(function() {
        setRealViewportHeight();
        ensureFlutterViewport();
      }, 100);
    }
  });
  
  // Ensure Flutter containers match visualViewport exactly
  // No canvas offset workarounds needed - root cause is fixed via visualViewport.height
  function ensureFlutterViewport() {
    const sceneHost = document.querySelector('flt-scene-host');
    const canvas = sceneHost?.querySelector('canvas');
    const glassPane = document.querySelector('flt-glass-pane');
    
    if (sceneHost && canvas) {
      // Get viewport dimensions from visualViewport (single source of truth)
      let viewportWidth, viewportHeight;
      
      if (window.visualViewport && window.visualViewport.width > 0 && window.visualViewport.height > 0) {
        viewportWidth = window.visualViewport.width;
        viewportHeight = window.visualViewport.height;
      } else {
        // Fallback for devices without visualViewport support
        viewportWidth = window.innerWidth;
        viewportHeight = window.innerHeight;
      }
      
      // Ensure scene host matches visualViewport
      sceneHost.style.position = 'fixed';
      sceneHost.style.top = '0px';
      sceneHost.style.left = '0px';
      sceneHost.style.width = viewportWidth + 'px';
      // Height uses --vh CSS variable (calculated from visualViewport.height)
      sceneHost.style.height = 'calc(var(--vh, 1vh) * 100)';
      sceneHost.style.margin = '0';
      sceneHost.style.padding = '0';
      sceneHost.style.transform = 'none';
      sceneHost.style.zIndex = '1';
      
      // Ensure canvas matches visualViewport exactly
      // No offset corrections needed - visualViewport.height fixes root cause
      canvas.style.position = 'absolute';
      canvas.style.top = '0px';
      canvas.style.left = '0px';
      canvas.style.width = viewportWidth + 'px';
      // Height uses --vh CSS variable
      canvas.style.height = 'calc(var(--vh, 1vh) * 100)';
      canvas.style.margin = '0';
      canvas.style.padding = '0';
      canvas.style.transform = 'none';
      canvas.style.transformOrigin = '0 0';
      
      // Ensure glass pane matches visualViewport
      if (glassPane) {
        glassPane.style.position = 'fixed';
        glassPane.style.top = '0px';
        glassPane.style.left = '0px';
        glassPane.style.width = viewportWidth + 'px';
        // Height uses --vh CSS variable
        glassPane.style.height = 'calc(var(--vh, 1vh) * 100)';
        glassPane.style.margin = '0';
        glassPane.style.padding = '0';
        glassPane.style.transform = 'none';
      }
      
      // Notify Flutter of viewport update (if available)
      if (isIOSStandalone && window.flutter) {
        try {
          window.dispatchEvent(new CustomEvent('pwa-viewport-updated', {
            detail: {
              width: viewportWidth,
              height: viewportHeight,
              visualViewportHeight: window.visualViewport ? window.visualViewport.height : null
            }
          }));
        } catch (e) {
          // Ignore errors
        }
      }
    } else {
      // Flutter not loaded yet, retry
      setTimeout(ensureFlutterViewport, isIOSStandalone ? 50 : 100);
    }
  }
  
  // 监听 Flutter 第一帧
  window.addEventListener('flutter-first-frame', function() {
    setTimeout(function() {
      setRealViewportHeight();
      ensureFlutterViewport();
      // iOS 需要多次检查，确保坐标正确
      if (isIOSStandalone) {
        setTimeout(ensureFlutterViewport, 100);
        setTimeout(ensureFlutterViewport, 300);
      }
    }, isIOSStandalone ? 50 : 200);
  });
  
  // 立即尝试一次
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      setTimeout(ensureFlutterViewport, 100);
    });
  } else {
    setTimeout(ensureFlutterViewport, 100);
  }
  
  // iOS: Periodic checks to ensure viewport alignment (handles delayed layout changes)
  // Reduced checks since visualViewport.height fixes root cause
  if (isIOSStandalone) {
    let checkCount = 0;
    const maxChecks = 5; // Reduced from 10 - visualViewport.height is more reliable
    const checkInterval = setInterval(function() {
      checkCount++;
      setRealViewportHeight();
      ensureFlutterViewport();
      if (checkCount >= maxChecks) {
        clearInterval(checkInterval);
      }
    }, 200);
  }
  
  // Debug function (development only)
  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    window.debugPWAViewport = function() {
      const canvas = document.querySelector('flt-scene-host canvas');
      const visualViewport = window.visualViewport;
      const iosVersion = getIOSVersion();
      
      console.log('[PWA_VIEWPORT_DEBUG]', {
        iosVersion: iosVersion,
        isIOS17: isIOS17Standalone,
        window: {
          innerWidth: window.innerWidth,
          innerHeight: window.innerHeight,
          outerWidth: window.outerWidth,
          outerHeight: window.outerHeight
        },
        visualViewport: visualViewport ? {
          width: visualViewport.width,
          height: visualViewport.height,
          offsetTop: visualViewport.offsetTop,
          offsetLeft: visualViewport.offsetLeft,
          scale: visualViewport.scale
        } : null,
        canvas: canvas ? (function() {
          const rect = canvas.getBoundingClientRect();
          const computedStyle = window.getComputedStyle(canvas);
          return {
            boundingRect: {
              top: rect.top,
              left: rect.left,
              width: rect.width,
              height: rect.height
            },
            computedStyle: {
              position: computedStyle.position,
              top: computedStyle.top,
              left: computedStyle.left,
              transform: computedStyle.transform,
              transformOrigin: computedStyle.transformOrigin,
              marginTop: computedStyle.marginTop,
              marginLeft: computedStyle.marginLeft
            },
            // Check alignment with visualViewport
            alignment: visualViewport ? {
              topOffset: rect.top,
              leftOffset: rect.left,
              heightMatch: Math.abs(rect.height - visualViewport.height) < 1,
              widthMatch: Math.abs(rect.width - visualViewport.width) < 1
            } : null
          };
        })() : null,
        cssVariable: {
          vh: getComputedStyle(document.documentElement).getPropertyValue('--vh'),
          calculatedHeight: parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--vh')) * 100
        }
      });
    };
  }
})();

