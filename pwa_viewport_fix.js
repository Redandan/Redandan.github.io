(function PWAViewportFix() {
  'use strict';

  /* ============================
   * Environment Detection
   * ============================ */

  const Env = {
    isIOS: /iPad|iPhone|iPod|iOS/.test(navigator.userAgent),
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

    applyCSSVH() {
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
    stableCount: 0,
    maxStableChecks: 3,
    lastRect: null,

    getElements() {
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
      const { sceneHost, canvas, glassPane } = this.getElements();
      if (!sceneHost || !canvas) return false;

      const width = window.innerWidth;
      const height = window.innerHeight;

      /* Scene Host */
      Object.assign(sceneHost.style, {
        position: 'fixed',
        inset: '0',
        width: width + 'px',
        height: height + 'px',
        margin: '0',
        padding: '0',
        transform: 'none',
        zIndex: '1'
      });

      /* Canvas */
      Object.assign(canvas.style, {
        position: 'absolute',
        inset: '0',
        width: width + 'px',
        height: height + 'px',
        margin: '0',
        padding: '0',
        transform: 'none',
        transformOrigin: '0 0'
      });

      const rect = canvas.getBoundingClientRect();

      if (!this.isStable(rect) && isIOSStandalone) {
        console.warn('[PWA_FIX] Canvas offset detected', rect);
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

      return this.stableCount >= this.maxStableChecks;
    }
  };

  /* ============================
   * Scheduler (No Infinite Loop)
   * ============================ */

  function stabilizeFlutter(maxAttempts = 10, interval = 120) {
    let attempts = 0;
    const timer = setInterval(() => {
      attempts++;
      const done = FlutterFix.apply();
      if (done || attempts >= maxAttempts) {
        clearInterval(timer);
      }
    }, interval);
  }

  /* ============================
   * Lifecycle Hooks
   * ============================ */

  function onViewportChange() {
    Viewport.applyCSSVH();
    stabilizeFlutter();
  }

  /* DOM Ready */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', onViewportChange);
  } else {
    onViewportChange();
  }

  /* Window Events */
  window.addEventListener('resize', onViewportChange);

  document.addEventListener('visibilitychange', () => {
    if (!document.hidden && isIOSStandalone) {
      setTimeout(onViewportChange, 100);
    }
  });

  /* visualViewport */
  if (window.visualViewport) {
    visualViewport.addEventListener('resize', onViewportChange);
    visualViewport.addEventListener('scroll', () => {
      if (isIOSStandalone) onViewportChange();
    });
  }

  /* Flutter First Frame */
  window.addEventListener('flutter-first-frame', () => {
    setTimeout(onViewportChange, 50);
    if (isIOSStandalone) {
      setTimeout(onViewportChange, 150);
      setTimeout(onViewportChange, 300);
    }
  });

})();
