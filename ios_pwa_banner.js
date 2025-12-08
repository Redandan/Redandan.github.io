/**
 * iOS PWA 安裝提示橫幅控制腳本
 * 只在 iOS Safari 瀏覽器上顯示，且用戶未安裝 PWA 時顯示
 */
(function() {
    'use strict';

    // 檢查是否應該顯示提示
    function shouldShowBanner() {
        // 檢測是否為 iOS 設備 (iPhone 或 iPad)
        var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

        // 檢測是否為 Safari 瀏覽器
        var isSafari = navigator.vendor && navigator.vendor.indexOf('Apple') > -1 &&
                       navigator.userAgent && !navigator.userAgent.match('CriOS'); // 排除 iOS Chrome

        // 如果不是 iOS Safari，則不顯示
        if (!isIOS || !isSafari) {
            return false;
        }

        // 額外檢查：如果網站已經作為獨立 Web App 打開，也不顯示提示
        // 'standalone' 屬性在 Web App 模式下是 true
        if (window.matchMedia('(display-mode: standalone)').matches || 
            (window.navigator.standalone === true)) {
            return false;
        }

        // 檢查用戶是否已經關閉過提示（使用 localStorage）
        var dismissed = localStorage.getItem('ios_pwa_banner_dismissed');
        if (dismissed === 'true') {
            return false;
        }

        return true;
    }

    // 初始化橫幅
    function initBanner() {
        var guideBanner = document.getElementById('ios-guide-banner');
        
        if (!guideBanner) {
            return;
        }

        if (shouldShowBanner()) {
            guideBanner.style.display = 'block';
        } else {
            guideBanner.style.display = 'none';
        }
    }

    // 關閉按鈕處理
    function setupCloseButton() {
        var closeButton = document.querySelector('#ios-guide-banner button');
        if (closeButton) {
            closeButton.addEventListener('click', function() {
                var guideBanner = document.getElementById('ios-guide-banner');
                if (guideBanner) {
                    guideBanner.style.display = 'none';
                    // 保存用戶關閉狀態到 localStorage
                    localStorage.setItem('ios_pwa_banner_dismissed', 'true');
                }
            });
        }
    }

    // 當 DOM 加載完成後初始化
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            initBanner();
            setupCloseButton();
        });
    } else {
        // DOM 已經加載完成
        initBanner();
        setupCloseButton();
    }

    // 監聽 PWA 安裝事件（如果用戶安裝了，隱藏橫幅）
    window.addEventListener('appinstalled', function() {
        var guideBanner = document.getElementById('ios-guide-banner');
        if (guideBanner) {
            guideBanner.style.display = 'none';
        }
    });

})();

