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
  
  if (!isStandaloneMode()) {
    return; // 非 PWA 模式，不需要修复
  }
  
  const isIOSStandalone = isIOS() && isStandaloneMode();
  const isIOS17Standalone = isIOSStandalone && isIOS17OrLater();
  
  // 设置真实的视口高度（CSS 变量方法）
  function setRealViewportHeight() {
    // iOS 17+ 在 PWA standalone 模式下，visualViewport.height 完全不可靠
    // 强制使用 window.innerHeight，忽略 visualViewport.height
    let actualHeight = window.innerHeight;
    let offsetTop = 0;
    
    if (window.visualViewport) {
      const vp = window.visualViewport;
      offsetTop = vp.offsetTop || 0;
      
      // iOS 17+ 特殊处理：完全忽略 visualViewport.height，只使用 window.innerHeight
      // 因为 visualViewport.height 在 iOS 17 上非常不可靠
      if (isIOS17Standalone) {
        // 强制使用 window.innerHeight，不考虑 visualViewport.height
        actualHeight = window.innerHeight;
      } else {
        // iOS 15/16：可以使用 visualViewport.height（如果可用）
        if (vp.height > 0 && vp.height <= window.innerHeight) {
          actualHeight = vp.height;
        }
      }
    }
    
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
    
    // 返回视口信息供其他函数使用
    return {
      height: actualHeight,
      offsetTop: offsetTop
    };
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
  if (window.visualViewport) {
    // iOS 17+ 特殊处理：visualViewport.resize 事件可能不可靠
    // 使用防抖来避免过度触发
    let visualViewportResizeTimer;
    window.visualViewport.addEventListener('resize', function() {
      clearTimeout(visualViewportResizeTimer);
      visualViewportResizeTimer = setTimeout(function() {
        const viewportInfo = setRealViewportHeight();
        // iOS 需要立即更新 Flutter 容器
        if (isIOSStandalone) {
          setTimeout(ensureFlutterViewport, 10);
        }
      }, isIOS17Standalone ? 100 : 10); // iOS 17+ 需要更长的防抖时间
    });
    
    window.visualViewport.addEventListener('scroll', function() {
      // iOS 在滚动时也可能改变视口（状态栏相关）
      if (isIOSStandalone) {
        const viewportInfo = setRealViewportHeight();
        // iOS 17+ 可能需要特殊处理
        if (isIOS17Standalone && viewportInfo.offsetTop !== 0) {
          setTimeout(ensureFlutterViewport, 50);
        }
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
      if (isIOSStandalone) {
        // 强制重置 canvas 的 transform-origin
        canvas.style.transformOrigin = '0 0';
        
        // iOS 17+ 特殊处理：强制 Canvas 在 (0, 0) 位置
        // 使用多重检查和修正，确保位置正确
        function correctCanvasPosition() {
          requestAnimationFrame(function() {
            const rect = canvas.getBoundingClientRect();
            const offsetY = rect.top;
            const offsetX = rect.left;
            
            // 允许 0.5px 的误差
            const tolerance = 0.5;
            
            if (Math.abs(offsetY) > tolerance || Math.abs(offsetX) > tolerance) {
              console.warn('[PWA_VIEWPORT_FIX] Canvas position mismatch detected:', {
                top: rect.top,
                left: rect.left,
                offsetY: offsetY,
                offsetX: offsetX,
                isIOS17: isIOS17Standalone
              });
              
              // iOS 17+：使用多重方法强制修正
              if (isIOS17Standalone) {
                // 方法 1：使用 transform（最可靠）
                canvas.style.transform = `translate(${-offsetX}px, ${-offsetY}px)`;
                
                // 方法 2：同时设置 margin（双重保险）
                canvas.style.marginTop = (-offsetY) + 'px';
                canvas.style.marginLeft = (-offsetX) + 'px';
                
                // 方法 3：强制设置 top 和 left
                canvas.style.top = '0px';
                canvas.style.left = '0px';
                
                // 验证修正是否成功（多次验证）
                requestAnimationFrame(function() {
                  const newRect = canvas.getBoundingClientRect();
                  const newOffsetY = newRect.top;
                  const newOffsetX = newRect.left;
                  if (Math.abs(newOffsetY) > tolerance || Math.abs(newOffsetX) > tolerance) {
                    console.warn('[PWA_VIEWPORT_FIX] First correction failed, trying again:', {
                      after: { top: newRect.top, left: newRect.left },
                      offsetY: newOffsetY,
                      offsetX: newOffsetX
                    });
                    // 再次尝试修正
                    canvas.style.transform = `translate(${-newOffsetX}px, ${-newOffsetY}px)`;
                    canvas.style.marginTop = (-newOffsetY) + 'px';
                    canvas.style.marginLeft = (-newOffsetX) + 'px';
                  }
                });
              } else {
                // iOS 15/16：使用 margin 修正
                canvas.style.top = '0px';
                canvas.style.left = '0px';
                canvas.style.marginTop = (-offsetY) + 'px';
                canvas.style.marginLeft = (-offsetX) + 'px';
              }
            } else {
              // 如果位置正确，确保没有 transform 和 margin
              canvas.style.transform = 'none';
              canvas.style.marginTop = '0px';
              canvas.style.marginLeft = '0px';
            }
          });
        }
        
        // 立即执行一次
        correctCanvasPosition();
        
        // iOS 17+ 需要多次检查和修正
        if (isIOS17Standalone) {
          // 在多个渲染帧后再次检查
          requestAnimationFrame(function() {
            requestAnimationFrame(correctCanvasPosition);
          });
          setTimeout(correctCanvasPosition, 100);
          setTimeout(correctCanvasPosition, 300);
          setTimeout(correctCanvasPosition, 500);
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
          const vp = window.visualViewport;
          const viewportInfo = setRealViewportHeight();
          
          // 触发一个自定义事件，让 Flutter 知道视口已更新
          window.dispatchEvent(new CustomEvent('pwa-viewport-updated', {
            detail: {
              width: actualWidth,
              height: viewportInfo.height,
              innerHeight: window.innerHeight,
              offsetTop: viewportInfo.offsetTop,
              isIOS17: isIOS17Standalone,
              visualViewport: vp ? {
                width: vp.width,
                height: vp.height,
                offsetTop: vp.offsetTop,
                offsetLeft: vp.offsetLeft,
                scale: vp.scale || 1
              } : null
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
  // iOS 17+ 需要更频繁的检查，因为 visualViewport 行为不稳定
  if (isIOSStandalone) {
    let checkCount = 0;
    const maxChecks = isIOS17Standalone ? 20 : 10; // iOS 17+ 需要更多检查
    const checkInterval = setInterval(function() {
      checkCount++;
      // 使用 requestAnimationFrame 确保在渲染后检查
      requestAnimationFrame(ensureFlutterViewport);
      if (checkCount >= maxChecks) {
        clearInterval(checkInterval);
      }
    }, isIOS17Standalone ? 100 : 200); // iOS 17+ 检查间隔更短（100ms）
  }
  
  // iOS 17+ 特殊处理：监听所有可能影响视口的事件
  if (isIOS17Standalone) {
    // 监听 orientationchange（屏幕旋转）
    window.addEventListener('orientationchange', function() {
      setTimeout(function() {
        setRealViewportHeight();
        ensureFlutterViewport();
      }, 200);
    });
    
    // 监听 focus 事件（可能触发视口变化）
    window.addEventListener('focus', function() {
      setTimeout(function() {
        setRealViewportHeight();
        ensureFlutterViewport();
      }, 100);
    });
    
    // 更频繁地监听 visualViewport 变化
    if (window.visualViewport) {
      // 监听 offsetTop 的变化（iOS 17 特有）
      let lastOffsetTop = window.visualViewport.offsetTop;
      const checkOffsetTop = setInterval(function() {
        const currentOffsetTop = window.visualViewport ? window.visualViewport.offsetTop : 0;
        if (Math.abs(currentOffsetTop - lastOffsetTop) > 1) {
          console.log('[PWA_VIEWPORT_FIX] offsetTop changed:', {
            from: lastOffsetTop,
            to: currentOffsetTop
          });
          lastOffsetTop = currentOffsetTop;
          setRealViewportHeight();
          ensureFlutterViewport();
        }
      }, 50); // 每 50ms 检查一次
      
      // 10 秒后停止检查（避免无限运行）
      setTimeout(function() {
        clearInterval(checkOffsetTop);
      }, 10000);
    }
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

