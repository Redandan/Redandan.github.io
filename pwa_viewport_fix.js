(function PWAViewportFix() {
  'use strict';

  /* ============================
   * Environment Detection
   * ============================ */

  const Env = {
    isIOS: /iPad|iPhone|iPod/.test(navigator.userAgent),
    isIPhone17: /iPhone\s?17/i.test(navigator.userAgent), // ⚠️ 新機專用
    isStandalone() {
      try {
        return (
          window.matchMedia('(display-mode: standalone)').matches ||
          window.navigator.standalone === true ||
          window.matchMedia('(display-mode: fullscreen)').matches
        );
      } catch {
        return false;
      }
    }
  };

  if (!Env.isStandalone()) return;

  const isIOSStandalone = Env.isIOS && Env.isStandalone();

  /* ============================
   * Viewport Manager
   * ============================ */

  const Viewport = {
    lastHeight: 0,

    apply() {
      const height = window.innerHeight;
      if (height === this.lastHeight) return;

      this.lastHeight = height;
      document.documentElement.style.setProperty('--vh', `${height * 0.01}px`);

      if (isIOSStandalone) {
        document.documentElement.style.height = height + 'px';
        document.body && (document.body.style.height = height + 'px');
      }
    }
  };

  /* ============================
   * Flutter DOM Fixer
   * ============================ */

  const FlutterFix = {
    lastRect: null,
    stableCount: 0,
    maxStable: 3,

    get() {
      const sceneHost = document.querySelector('flt-scene-host');
      const glassPane = document.querySelector('flt-glass-pane');
      const canvas = sceneHost?.querySelector('canvas');
      return { sceneHost, glassPane, canvas };
    },

    isStable(rect) {
      if (!this.lastRect) {
        this.lastRect = rect;
        return false;
      }
      const stable =
        Math.abs(rect.top - this.lastRect.top) < 1 &&
        Math.abs(rect.left - this.lastRect.left) < 1;
      this.lastRect = rect;
      return stable;
    },

    apply() {
      const { sceneHost, canvas, glassPane } = this.get();
      if (!sceneHost || !canvas) return false;

      const width = window.innerWidth;
      const height = window.innerHeight;

      /* ----------------------------
       * visualViewport compensation
       * iPhone 17 必殺補丁
       * ---------------------------- */
      const vv = window.visualViewport;
      const offsetTop = vv ? vv.offsetTop : 0;
      const offsetLeft = vv ? vv.offsetLeft : 0;

      /* Scene Host */
      Object.assign(sceneHost.style, {
        position: 'fixed',
        top: -offsetTop + 'px',
        left: -offsetLeft + 'px',
        width: width + 'px',
        height: height + 'px',
        margin: '0',
        padding: '0',
        transform: 'none',
        zIndex: '1'
      });

      /* Canvas DPR 同步（iPhone 17 關鍵） */
      const dpr = window.devicePixelRatio || 1;

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);

      Object.assign(canvas.style, {
        position: 'absolute',
        top: offsetTop + 'px',
        left: offsetLeft + 'px',
        width: width + 'px',
        height: height + 'px',
        margin: '0',
        padding: '0',
        transform: 'none',
        transformOrigin: '0 0'
      });

      const rect = canvas.getBoundingClientRect();

      /* 偏移補救（只在不穩定時） */
      if (!this.isStable(rect) && isIOSStandalone) {
        canvas.style.marginTop = -rect.top + 'px';
        canvas.style.marginLeft = -rect.left + 'px';
        this.stableCount = 0;
      } else {
        this.stableCount++;
      }

      /* Glass Pane */
      if (glassPane) {
        Object.assign(glassPane.style, {
          position: 'fixed',
          inset: '0',
          width: width + 'px',
          height: height + 'px',
          margin: '0',
          padding: '0',
          transform: 'none'
        });
      }

      /* 通知 Flutter 重算 metrics */
      if (isIOSStandalone) {
        window.dispatchEvent(
          new CustomEvent('pwa-viewport-updated', {
            detail: {
              width,
              height,
              dpr,
              offsetTop,
              offsetLeft
            }
          })
        );
      }

      return this.stableCount >= this.maxStable;
    }
  };

  /* ============================
   * Scheduler（避免無限修）
   * ============================ */

  function stabilize(max = 10, interval = 120) {
    let count = 0;
    const timer = setInterval(() => {
      count++;
      const done = FlutterFix.apply();
      if (done || count >= max) clearInterval(timer);
    }, interval);
  }

  function onViewportChange() {
    Viewport.apply();
    stabilize();
  }

  /* ============================
   * Lifecycle Hooks
   * ============================ */

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', onViewportChange);
  } else {
    onViewportChange();
  }

  window.addEventListener('resize', onViewportChange);

  document.addEventListener('visibilitychange', () => {
    if (!document.hidden && isIOSStandalone) {
      setTimeout(onViewportChange, 100);
    }
  });

  if (window.visualViewport) {
    visualViewport.addEventListener('resize', onViewportChange);
    visualViewport.addEventListener('scroll', () => {
      if (isIOSStandalone) onViewportChange();
    });
  }

  window.addEventListener('flutter-first-frame', () => {
    setTimeout(onViewportChange, 50);
    if (Env.isIPhone17) {
      setTimeout(onViewportChange, 150);
      setTimeout(onViewportChange, 300);
    }
  });

})();
