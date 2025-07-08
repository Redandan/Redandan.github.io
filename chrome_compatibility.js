// Chrome 兼容性檢查腳本
(function() {
    'use strict';
    
    console.log('Chrome compatibility check started');
    
    // 檢查瀏覽器類型
    const userAgent = navigator.userAgent;
    const isChrome = /Chrome/.test(userAgent) && !/Edge/.test(userAgent);
    const isEdge = /Edge/.test(userAgent);
    const isFirefox = /Firefox/.test(userAgent);
    const isSafari = /Safari/.test(userAgent) && !/Chrome/.test(userAgent);
    
    console.log('Browser detection:', {
        chrome: isChrome,
        edge: isEdge,
        firefox: isFirefox,
        safari: isSafari,
        userAgent: userAgent
    });
    
    // Chrome 特定的兼容性檢查
    if (isChrome) {
        console.log('Chrome detected, applying compatibility fixes');
        
        // 檢查 WebGL 支援
        try {
            const canvas = document.createElement('canvas');
            const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
            
            if (gl) {
                console.log('WebGL supported in Chrome');
                
                // 檢查 WebGL 版本
                const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
                if (debugInfo) {
                    const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
                    const vendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);
                    console.log('WebGL Renderer:', renderer);
                    console.log('WebGL Vendor:', vendor);
                }
            } else {
                console.warn('WebGL not supported in Chrome');
            }
        } catch (e) {
            console.error('WebGL check failed in Chrome:', e);
        }
        
        // 檢查 Flutter.js 載入
        function checkFlutterJS() {
            if (typeof flutter !== 'undefined') {
                console.log('Flutter.js loaded successfully in Chrome');
                return true;
            } else {
                console.warn('Flutter.js not loaded in Chrome');
                return false;
            }
        }
        
        // 延遲檢查 Flutter.js
        setTimeout(checkFlutterJS, 1000);
        
        // 監聽 Flutter 相關事件
        window.addEventListener('flutter-first-frame', function() {
            console.log('Flutter first frame rendered in Chrome');
        });
        
        window.addEventListener('flutter-initialize-error', function(e) {
            console.error('Flutter initialization error in Chrome:', e.detail);
        });
        
        // 監聽一般錯誤
        window.addEventListener('error', function(e) {
            console.error('JavaScript error in Chrome:', e.message);
        });
        
        // 監聽未處理的 Promise 拒絕
        window.addEventListener('unhandledrejection', function(e) {
            console.error('Unhandled promise rejection in Chrome:', e.reason);
        });
    }
    
    // 通用錯誤處理
    window.addEventListener('error', function(e) {
        console.error('Global error:', e.message, 'at', e.filename, 'line', e.lineno);
    });
    
    console.log('Chrome compatibility check completed');
})(); 