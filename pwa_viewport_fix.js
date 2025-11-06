// PWA 触摸坐标修复 - 基于社区最佳实践
// 参考：https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
// 问题：PWA standalone 模式下，100vh 不等于实际视口高度

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
  
  if (!isStandaloneMode()) {
    return; // 非 PWA 模式，不需要修复
  }
  
  console.log('[PWA_FIX] Standalone mode detected, applying viewport fix...');
  
  // 设置真实的视口高度（CSS 变量方法）
  function setRealViewportHeight() {
    // 获取实际视口高度
    const vh = window.innerHeight * 0.01;
    
    // 设置 CSS 变量 --vh (1vh = 1% of viewport height)
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    
    console.log('[PWA_FIX] Viewport height set:', window.innerHeight, 'px');
    console.log('[PWA_FIX] CSS variable --vh set to:', vh, 'px');
  }
  
  // 初始设置
  setRealViewportHeight();
  
  // 监听窗口大小变化
  let resizeTimeout;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(setRealViewportHeight, 100);
  });
  
  // 监听 visualViewport API（如果支持）
  if (window.visualViewport) {
    window.visualViewport.addEventListener('resize', function() {
      setRealViewportHeight();
    });
  }
  
  // 等待 Flutter 加载后，确保容器使用正确的视口高度
  function ensureFlutterViewport() {
    const sceneHost = document.querySelector('flt-scene-host');
    const canvas = sceneHost?.querySelector('canvas');
    
    if (sceneHost && canvas) {
      // 确保 Flutter 容器使用实际视口高度
      const actualHeight = window.innerHeight;
      
      // 检查并修复 Canvas 位置
      const canvasRect = canvas.getBoundingClientRect();
      if (canvasRect.top !== 0) {
        console.log('[PWA_FIX] Canvas position offset detected:', canvasRect.top);
        // 强制 Canvas 位置为 top: 0
        canvas.style.position = 'absolute';
        canvas.style.top = '0px';
        canvas.style.left = '0px';
      }
      
      // 确保容器高度正确
      if (sceneHost.style.height !== actualHeight + 'px') {
        sceneHost.style.height = actualHeight + 'px';
        canvas.style.height = actualHeight + 'px';
        console.log('[PWA_FIX] Flutter container height set to:', actualHeight + 'px');
      }
    } else {
      // 如果 Flutter 还没加载，等待一下
      setTimeout(ensureFlutterViewport, 100);
    }
  }
  
  // 监听 Flutter 第一帧
  window.addEventListener('flutter-first-frame', function() {
    console.log('[PWA_FIX] Flutter first frame detected');
    setTimeout(ensureFlutterViewport, 200);
  });
  
  // 立即尝试一次
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ensureFlutterViewport);
  } else {
    ensureFlutterViewport();
  }
})();

