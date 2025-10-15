/**
 * Cloudflare Turnstile WASM 橋接腳本
 * 用於在 WASM 模式下提供 JavaScript 互操作功能
 */

(function() {
    'use strict';
    
    console.log('🔧 [TURNSTILE_WASM_BRIDGE] 初始化 WASM 橋接...');
    
    // 全局 Turnstile WASM 橋接對象
    window.TurnstileWasmBridge = {
        
        /**
         * 載入 Turnstile 腳本
         * @param {string} scriptUrl - 腳本 URL
         * @returns {Promise<boolean>} 載入結果
         */
        async loadTurnstileScript(scriptUrl) {
            console.log('📥 [TURNSTILE_WASM_BRIDGE] 載入 Turnstile 腳本:', scriptUrl);
            
            try {
                // 檢查腳本是否已經存在
                const existingScript = document.querySelector(`script[src="${scriptUrl}"]`);
                if (existingScript) {
                    console.log('✅ [TURNSTILE_WASM_BRIDGE] 腳本已存在，跳過載入');
                    return true;
                }
                
                // 創建並載入腳本
                const script = document.createElement('script');
                script.src = scriptUrl;
                script.async = true;
                script.defer = true;
                
                // 等待腳本載入完成
                await new Promise((resolve, reject) => {
                    script.onload = () => {
                        console.log('✅ [TURNSTILE_WASM_BRIDGE] 腳本載入成功');
                        resolve();
                    };
                    script.onerror = () => {
                        console.error('❌ [TURNSTILE_WASM_BRIDGE] 腳本載入失敗');
                        reject(new Error('腳本載入失敗'));
                    };
                    
                    document.head.appendChild(script);
                });
                
                return true;
                
            } catch (error) {
                console.error('❌ [TURNSTILE_WASM_BRIDGE] 載入腳本失敗:', error);
                return false;
            }
        },
        
        /**
         * 檢查 Turnstile 是否可用
         * @returns {Promise<boolean>} 是否可用
         */
        async checkTurnstileAvailable() {
            try {
                // 等待 turnstile 對象可用
                let attempts = 0;
                const maxAttempts = 50;
                
                while (attempts < maxAttempts) {
                    if (window.turnstile) {
                        console.log('✅ [TURNSTILE_WASM_BRIDGE] Turnstile 對象可用');
                        return true;
                    }
                    
                    await new Promise(resolve => setTimeout(resolve, 100));
                    attempts++;
                }
                
                console.warn('⚠️ [TURNSTILE_WASM_BRIDGE] Turnstile 對象載入超時');
                return false;
                
            } catch (error) {
                console.error('❌ [TURNSTILE_WASM_BRIDGE] 檢查 Turnstile 可用性失敗:', error);
                return false;
            }
        },
        
        /**
         * 渲染 Turnstile 組件
         * @param {string} containerId - 容器 ID
         * @param {string} siteKey - 站點密鑰
         * @param {string} theme - 主題
         * @param {string} size - 大小
         * @returns {Promise<boolean>} 渲染結果
         */
        async renderTurnstile(containerId, siteKey, theme, size) {
            console.log('🎨 [TURNSTILE_WASM_BRIDGE] 渲染 Turnstile:', {
                containerId,
                siteKey: siteKey.substring(0, 10) + '...',
                theme,
                size
            });
            
            try {
                // 確保容器存在
                await this.ensureContainer(containerId);
                
                // 檢查 turnstile 對象
                if (!window.turnstile) {
                    throw new Error('Turnstile 對象不可用');
                }
                
                // 渲染 Turnstile
                const widgetId = window.turnstile.render(`#${containerId}`, {
                    sitekey: siteKey,
                    theme: theme,
                    size: size,
                    callback: (token, widgetId) => {
                        console.log('✅ [TURNSTILE_WASM_BRIDGE] 驗證成功');
                        this.handleSuccess(containerId, token);
                    },
                    'error-callback': (error, widgetId) => {
                        console.error('❌ [TURNSTILE_WASM_BRIDGE] 驗證失敗:', error);
                        this.handleError(containerId, error);
                    },
                    'expired-callback': () => {
                        console.warn('⚠️ [TURNSTILE_WASM_BRIDGE] Token 過期');
                        this.handleExpired(containerId);
                    }
                });
                
                console.log('✅ [TURNSTILE_WASM_BRIDGE] Turnstile 渲染成功, Widget ID:', widgetId);
                return true;
                
            } catch (error) {
                console.error('❌ [TURNSTILE_WASM_BRIDGE] 渲染失敗:', error);
                return false;
            }
        },
        
        /**
         * 確保容器存在
         * @param {string} containerId - 容器 ID
         * @returns {Promise<void>}
         */
        async ensureContainer(containerId) {
            let container = document.getElementById(containerId);
            
            if (!container) {
                console.log('📦 [TURNSTILE_WASM_BRIDGE] 創建容器:', containerId);
                container = document.createElement('div');
                container.id = containerId;
                container.style.width = '300px';
                container.style.height = '65px';
                container.style.margin = '10px auto';
                
                document.body.appendChild(container);
                
                // 等待 DOM 更新
                await new Promise(resolve => setTimeout(resolve, 50));
            }
        },
        
        /**
         * 重置 Turnstile
         * @param {string|null} containerId - 容器 ID，null 表示重置所有
         * @returns {Promise<boolean>} 重置結果
         */
        async resetTurnstile(containerId) {
            console.log('🔄 [TURNSTILE_WASM_BRIDGE] 重置 Turnstile:', containerId || 'all');
            
            try {
                if (!window.turnstile) {
                    throw new Error('Turnstile 對象不可用');
                }
                
                if (containerId) {
                    window.turnstile.reset(containerId);
                } else {
                    window.turnstile.reset();
                }
                
                console.log('✅ [TURNSTILE_WASM_BRIDGE] Turnstile 重置成功');
                return true;
                
            } catch (error) {
                console.error('❌ [TURNSTILE_WASM_BRIDGE] 重置失敗:', error);
                return false;
            }
        },
        
        /**
         * 處理成功回調
         * @param {string} containerId - 容器 ID
         * @param {string} token - 驗證 Token
         */
        handleSuccess(containerId, token) {
            console.log('🎉 [TURNSTILE_WASM_BRIDGE] 處理成功回調:', {
                containerId,
                token: token.substring(0, 20) + '...'
            });
            
            // 通知 Flutter WASM 服務 (dart:js_interop 兼容)
            if (window.turnstileSuccessCallback) {
                window.turnstileSuccessCallback(containerId, token);
            } else if (window.flutter_inappwebview) {
                window.flutter_inappwebview.callHandler('turnstileSuccess', {
                    containerId: containerId,
                    token: token
                });
            } else if (window.turnstileWasmCallback) {
                window.turnstileWasmCallback('success', containerId, token);
            }
        },
        
        /**
         * 處理錯誤回調
         * @param {string} containerId - 容器 ID
         * @param {string} error - 錯誤信息
         */
        handleError(containerId, error) {
            console.error('💥 [TURNSTILE_WASM_BRIDGE] 處理錯誤回調:', {
                containerId,
                error
            });
            
            // 通知 Flutter WASM 服務 (dart:js_interop 兼容)
            if (window.turnstileErrorCallback) {
                window.turnstileErrorCallback(containerId, error);
            } else if (window.flutter_inappwebview) {
                window.flutter_inappwebview.callHandler('turnstileError', {
                    containerId: containerId,
                    error: error
                });
            } else if (window.turnstileWasmCallback) {
                window.turnstileWasmCallback('error', containerId, error);
            }
        },
        
        /**
         * 處理過期回調
         * @param {string} containerId - 容器 ID
         */
        handleExpired(containerId) {
            console.warn('⏰ [TURNSTILE_WASM_BRIDGE] 處理過期回調:', containerId);
            
            // 通知 Flutter WASM 服務 (dart:js_interop 兼容)
            if (window.turnstileExpiredCallback) {
                window.turnstileExpiredCallback(containerId);
            } else if (window.flutter_inappwebview) {
                window.flutter_inappwebview.callHandler('turnstileExpired', {
                    containerId: containerId
                });
            } else if (window.turnstileWasmCallback) {
                window.turnstileWasmCallback('expired', containerId, null);
            }
        }
    };
    
    // 暴露全局函數供 Flutter 調用
    window.loadTurnstileScript = window.TurnstileWasmBridge.loadTurnstileScript.bind(window.TurnstileWasmBridge);
    window.checkTurnstileAvailable = window.TurnstileWasmBridge.checkTurnstileAvailable.bind(window.TurnstileWasmBridge);
    window.renderTurnstile = window.TurnstileWasmBridge.renderTurnstile.bind(window.TurnstileWasmBridge);
    window.resetTurnstile = window.TurnstileWasmBridge.resetTurnstile.bind(window.TurnstileWasmBridge);
    
    // 設置回調處理器
    window.turnstileWasmCallback = function(type, containerId, data) {
        console.log('📞 [TURNSTILE_WASM_BRIDGE] 收到回調:', { type, containerId, data });
        // 這裡可以添加更多的回調處理邏輯
    };
    
    console.log('✅ [TURNSTILE_WASM_BRIDGE] WASM 橋接初始化完成');
    
})();
