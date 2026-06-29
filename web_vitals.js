// Web Vitals 性能监控
// 监控 Core Web Vitals 指标：LCP, FID/INP, CLS
// 参考：https://web.dev/vitals/

(function() {
  'use strict';
  
  // 只在生产环境或需要监控时启用
  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    // 开发环境可以禁用或启用调试模式
    // return; // 取消注释以禁用开发环境监控
  }
  
  // 将指标发送到分析服务（可根据需要修改）
  function sendToAnalytics(metric) {
    // 可以发送到 Google Analytics、自定义后端等
    if (typeof console !== 'undefined' && console.log) {
      console.log('[Web Vitals]', metric.name, metric.value, metric.id);
    }
    
    // 示例：发送到后端 API
    // fetch('/api/web-vitals', {
    //   method: 'POST',
    //   body: JSON.stringify(metric),
    //   headers: { 'Content-Type': 'application/json' }
    // }).catch(() => {});
    
    // 示例：发送到 Google Analytics
    // if (typeof gtag !== 'undefined') {
    //   gtag('event', metric.name, {
    //     event_category: 'Web Vitals',
    //     value: Math.round(metric.value),
    //     event_label: metric.id,
    //     non_interaction: true
    //   });
    // }
  }
  
  // 获取 LCP (Largest Contentful Paint)
  function getLCP() {
    if (!('PerformanceObserver' in window)) return;
    
    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        
        sendToAnalytics({
          name: 'LCP',
          value: lastEntry.renderTime || lastEntry.loadTime,
          id: lastEntry.id,
          url: window.location.href
        });
      });
      
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch (e) {
      console.warn('[Web Vitals] LCP monitoring failed:', e);
    }
  }
  
  // 获取 FID (First Input Delay) 或 INP (Interaction to Next Paint)
  function getFID() {
    if (!('PerformanceObserver' in window)) return;
    
    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          sendToAnalytics({
            name: 'FID',
            value: entry.processingStart - entry.startTime,
            id: entry.name,
            url: window.location.href
          });
        });
      });
      
      observer.observe({ entryTypes: ['first-input'] });
    } catch (e) {
      console.warn('[Web Vitals] FID monitoring failed:', e);
    }
  }
  
  // 获取 CLS (Cumulative Layout Shift)
  function getCLS() {
    if (!('PerformanceObserver' in window)) return;
    
    try {
      let clsValue = 0;
      let clsEntries = [];
      
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
            clsEntries.push(entry);
          }
        });
        
        // 定期发送 CLS 值
        sendToAnalytics({
          name: 'CLS',
          value: clsValue,
          id: 'cls-' + Date.now(),
          url: window.location.href,
          entries: clsEntries.length
        });
      });
      
      observer.observe({ entryTypes: ['layout-shift'] });
      
      // 页面卸载时发送最终的 CLS 值
      window.addEventListener('beforeunload', () => {
        sendToAnalytics({
          name: 'CLS',
          value: clsValue,
          id: 'cls-final',
          url: window.location.href
        });
      });
    } catch (e) {
      console.warn('[Web Vitals] CLS monitoring failed:', e);
    }
  }
  
  // 获取 FCP (First Contentful Paint)
  function getFCP() {
    if (!('PerformanceObserver' in window)) return;
    
    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
            sendToAnalytics({
              name: 'FCP',
              value: entry.startTime,
              id: entry.name,
              url: window.location.href
            });
          }
        });
      });
      
      observer.observe({ entryTypes: ['paint'] });
    } catch (e) {
      console.warn('[Web Vitals] FCP monitoring failed:', e);
    }
  }
  
  // 获取 TTFB (Time to First Byte)
  function getTTFB() {
    if (!('PerformanceObserver' in window)) return;
    
    try {
      const navigationTiming = performance.getEntriesByType('navigation')[0];
      if (navigationTiming) {
        const ttfb = navigationTiming.responseStart - navigationTiming.requestStart;
        sendToAnalytics({
          name: 'TTFB',
          value: ttfb,
          id: 'ttfb',
          url: window.location.href
        });
      }
    } catch (e) {
      console.warn('[Web Vitals] TTFB monitoring failed:', e);
    }
  }
  
  // 初始化监控
  function initWebVitals() {
    // 等待页面加载完成
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function() {
        getLCP();
        getFID();
        getCLS();
        getFCP();
        getTTFB();
      });
    } else {
      getLCP();
      getFID();
      getCLS();
      getFCP();
      getTTFB();
    }
  }
  
  // 立即开始监控
  initWebVitals();
})();

