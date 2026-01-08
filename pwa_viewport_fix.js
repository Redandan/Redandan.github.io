/**
 * ==========================================
 * PWA + Flutter Web
 * iPhone 17 HARD POINTER OFFSET FIX (方案 C)
 * ==========================================
 * 用途：
 * - 修正 iPhone 17 / 新 iOS 上 Flutter Web 點擊偏移
 * - 強制修正 pointer / touch 事件座標
 * - 不碰 viewport / canvas / DPR（最穩）
 *
 * 移除時機：
 * - Flutter Web / iOS WebKit 修好後
 */

(function IOS17HardPointerOffsetFix() {
  'use strict';

  /* ============================
   * 環境判斷
   * ============================ */

  const UA = navigator.userAgent || '';
  const isIOS = /iPad|iPhone|iPod/.test(UA);
  const isIPhone17 = /iPhone\s?17/i.test(UA);

  if (!isIOS || !isIPhone17) {
    return;
  }

  console.warn('[IOS17_FIX] Hard pointer offset patch ENABLED');

  /* ============================
   * 🔧 手動調整區（唯一需要改的地方）
   * ============================ */

  const OFFSET_X = 0;
  const OFFSET_Y = 20;
  // 👆 實測調這個，常見 16 ~ 32

  /* ============================
   * 事件座標修正核心
   * ============================ */

  function patchEvent(e) {
    try {
      Object.defineProperties(e, {
        clientX: { value: e.clientX - OFFSET_X, configurable: true },
        clientY: { value: e.clientY - OFFSET_Y, configurable: true },
        pageX:   { value: e.pageX   - OFFSET_X, configurable: true },
        pageY:   { value: e.pageY   - OFFSET_Y, configurable: true }
      });
    } catch (_) {
      // 某些事件物件可能不可寫，忽略
    }
  }

  /* ============================
   * Pointer Events（Flutter Web 主要來源）
   * ============================ */

  document.addEventListener('pointerdown', patchEvent, true);
  document.addEventListener('pointermove', patchEvent, true);
  document.addEventListener('pointerup',   patchEvent, true);
  document.addEventListener('pointercancel', patchEvent, true);

  /* ============================
   * Touch Events（保險）
   * ============================ */

  document.addEventListener(
    'touchstart',
    (e) => {
      if (!e.touches || !e.touches.length) return;
      patchEvent(e.touches[0]);
    },
    true
  );

  document.addEventListener(
    'touchmove',
    (e) => {
      if (!e.touches || !e.touches.length) return;
      patchEvent(e.touches[0]);
    },
    true
  );

  /* ============================
   * Debug（可留著）
   * ============================ */

  console.table({
    device: 'iPhone 17',
    OFFSET_X,
    OFFSET_Y,
    devicePixelRatio: window.devicePixelRatio,
    visualViewportOffsetTop: window.visualViewport?.offsetTop
  });

})();
