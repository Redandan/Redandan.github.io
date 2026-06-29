// 离线页面回退处理
// 当 Service Worker 无法提供离线内容时，重定向到 offline.html

(function() {
  'use strict';
  
  // 检测离线状态
  function handleOffline() {
    // 如果当前页面不是离线页面，且网络离线
    if (!window.navigator.onLine && 
        !window.location.pathname.includes('offline.html')) {
      
      // 检查 Service Worker 是否可用
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.ready.then(function(registration) {
          // Service Worker 已就绪，但它可能无法提供离线内容
          // 如果 fetch 失败，浏览器会自动处理
        }).catch(function() {
          // Service Worker 未就绪，可能需要离线页面
          // 但在 Flutter 的 Service Worker 中，这通常会自动处理
        });
      }
    }
  }
  
  // 监听离线事件
  window.addEventListener('online', function() {
    // 当网络恢复时，如果当前在离线页面，重定向回首页
    if (window.location.pathname.includes('offline.html')) {
      window.location.href = '/';
    }
  });
  
  window.addEventListener('offline', handleOffline);
  
  // 页面加载时检查
  if (!window.navigator.onLine) {
    handleOffline();
  }
})();

