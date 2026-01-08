// PWA 触摸坐标修复 - 基于社区最佳实践
// 参考：https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
// 问题：PWA standalone 模式下，100vh 不等于实际视口高度
// iOS 特殊问题：状态栏过渡导致白框、画面跳动和点击偏移

(function() {
  'use strict';
  
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
  
  // 设置真实的视口高度（CSS 变量方法）
  // 使用之前对 iPhone 12 有效的简单方法：直接使用 window.innerHeight
  function setRealViewportHeight() {
    // 简单方法：直接使用 window.innerHeight（之前对 iPhone 12 有效）
    // 不依赖 visualViewport.height，因为它可能不可靠
    const actualHeight = window.innerHeight;
    const vh = actualHeight * 0.01;
    
    // 设置 CSS 变量 --vh (1vh = 1% of viewport height)
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    
    // iOS standalone 模式下，强制设置 html 和 body 高度
    if (isIOSStandalone) {
      document.documentElement.style.height = actualHeight + 'px';
      if (document.body) {
        document.body.style.height = actualHeight + 'px';
      }
    }
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
  
  // 监听 visualViewport API（iOS Safari 支持，用于精确的视口变化）
  // 使用简单方法：只监听 resize，不依赖 visualViewport.height
  if (window.visualViewport) {
    window.visualViewport.addEventListener('resize', function() {
      setRealViewportHeight();
      // iOS 需要立即更新 Flutter 容器
      if (isIOSStandalone) {
        setTimeout(ensureFlutterViewport, 10);
      }
    });
    
    window.visualViewport.addEventListener('scroll', function() {
      // iOS 在滚动时也可能改变视口（状态栏相关）
      if (isIOSStandalone) {
        setRealViewportHeight();
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
  
  // 等待 Flutter 加载后，确保容器使用正确的视口高度和坐标
  function ensureFlutterViewport() {
    const sceneHost = document.querySelector('flt-scene-host');
    const canvas = sceneHost?.querySelector('canvas');
    const glassPane = document.querySelector('flt-glass-pane');
    
    if (sceneHost && canvas) {
      // 获取实际视口高度
      const actualHeight = window.innerHeight;
      const actualWidth = window.innerWidth;
      
      // 强制设置容器位置和尺寸
      sceneHost.style.position = 'fixed';
      sceneHost.style.top = '0px';
      sceneHost.style.left = '0px';
      sceneHost.style.width = actualWidth + 'px';
      sceneHost.style.height = actualHeight + 'px';
      sceneHost.style.margin = '0';
      sceneHost.style.padding = '0';
      sceneHost.style.transform = 'none';
      sceneHost.style.zIndex = '1';
      
      // 强制设置 Canvas 位置和尺寸
      const canvasRect = canvas.getBoundingClientRect();
      if (canvasRect.top !== 0 || canvasRect.left !== 0) {
        canvas.style.position = 'absolute';
        canvas.style.top = '0px';
        canvas.style.left = '0px';
      }
      canvas.style.width = actualWidth + 'px';
      canvas.style.height = actualHeight + 'px';
      canvas.style.margin = '0';
      canvas.style.padding = '0';
      canvas.style.transform = 'none';
      
      // iOS 特殊处理：确保 canvas 的坐标系统正确
      // 使用之前对 iPhone 12 有效的简单方法
      if (isIOSStandalone) {
        // 强制重置 canvas 的 transform-origin
        canvas.style.transformOrigin = '0 0';
        
        // 使用简单方法：直接修正到 (0, 0)，不依赖 visualViewport.offsetTop
        // 这是之前对 iPhone 12 有效的方法
        const rect = canvas.getBoundingClientRect();
        if (rect.top !== 0 || rect.left !== 0) {
          // 简单方法：直接使用 margin 修正（之前对 iPhone 12 有效）
          canvas.style.position = 'absolute';
          canvas.style.top = '0px';
          canvas.style.left = '0px';
          canvas.style.marginTop = (-rect.top) + 'px';
          canvas.style.marginLeft = (-rect.left) + 'px';
          
          // 调试日志
          if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            console.log('[PWA_VIEWPORT_FIX] Canvas position corrected (simple method):', {
              before: { top: rect.top, left: rect.left },
              correction: { marginTop: -rect.top, marginLeft: -rect.left },
              isIOS17: isIOS17Standalone,
              hasDynamicIsland: hasDynamicIslandDevice
            });
          }
        } else {
          // 如果位置正确，确保没有 margin
          canvas.style.marginTop = '0px';
          canvas.style.marginLeft = '0px';
        }
      }
      
      // 处理 glass pane
      if (glassPane) {
        glassPane.style.position = 'fixed';
        glassPane.style.top = '0px';
        glassPane.style.left = '0px';
        glassPane.style.width = actualWidth + 'px';
        glassPane.style.height = actualHeight + 'px';
        glassPane.style.margin = '0';
        glassPane.style.padding = '0';
        glassPane.style.transform = 'none';
      }
      
      // iOS 特殊处理：通知 Flutter 视口已更新（如果可能）
      if (isIOSStandalone && window.flutter) {
        try {
          // 触发一个自定义事件，让 Flutter 知道视口已更新
          window.dispatchEvent(new CustomEvent('pwa-viewport-updated', {
            detail: {
              width: actualWidth,
              height: actualHeight,
              innerHeight: window.innerHeight
            }
          }));
        } catch (e) {
          // 忽略错误
        }
      }
    } else {
      // 如果 Flutter 还没加载，等待一下
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
  
  // iOS 特殊处理：定期检查并修复（防止延迟的布局变化）
  // 使用之前对 iPhone 12 有效的简单方法：10 次检查，间隔 200ms
  if (isIOSStandalone) {
    let checkCount = 0;
    const maxChecks = 10; // 对所有 iOS 设备使用相同的检查次数
    const checkInterval = setInterval(function() {
      checkCount++;
      ensureFlutterViewport();
      if (checkCount >= maxChecks) {
        clearInterval(checkInterval);
      }
    }, 200); // 对所有 iOS 设备使用相同的检查间隔
  }
  
  // 导出调试函数（仅在开发环境）
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
            }
          };
        })() : null,
        cssVariable: {
          vh: getComputedStyle(document.documentElement).getPropertyValue('--vh')
        }
      });
    };
  }
})();

