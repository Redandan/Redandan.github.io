export function createViewportManager(config = {}) {
  const gvEl = config.gvEl;
  if (!gvEl) throw new Error('viewport_manager: gvEl is required');

  const hostedMode = !!config.hostedMode;
  const enableVvFixLog = config.enableVvFixLog !== false;
  const onScaleChange = typeof config.onScaleChange === 'function' ? config.onScaleChange : () => {};
  const onLog = typeof config.onLog === 'function' ? config.onLog : () => {};

  const vv = window.visualViewport;
  const vvFixEnabled = !!vv;
  const vvFixNeedPersistentSync = vvFixEnabled && (('ontouchstart' in window) || Number(navigator.maxTouchPoints || 0) > 0);

  let fitRaf = 0;
  let gvScale = Math.min(window.innerWidth / 430, window.innerHeight / 900);
  let hostSafeTop = 0;
  let lastViewportFixDetected = null;
  let lastViewportFixLogAt = 0;
  let stubbornSyncTimer = 0;
  let initialized = false;
  let renderedLayout = null;

  function safeNum(value) {
    const n = Number(value);
    return Number.isFinite(n) ? n : 0;
  }

  function isLikelyIOSDevice() {
    const ua = navigator.userAgent || '';
    const maxTouchPoints = safeNum(navigator.maxTouchPoints);
    return /iPad|iPhone|iPod/.test(ua) || (/Macintosh/.test(ua) && maxTouchPoints > 1);
  }

  function readTelegramWebApp() {
    try {
      if (window.Telegram && window.Telegram.WebApp) return window.Telegram.WebApp;
    } catch (_) {}
    try {
      if (window.parent && window.parent.Telegram && window.parent.Telegram.WebApp) {
        return window.parent.Telegram.WebApp;
      }
    } catch (_) {}
    return null;
  }

  function readCssSafeAreaTop() {
    try {
      const raw = getComputedStyle(document.documentElement).getPropertyValue('--sat').trim();
      const val = parseFloat(raw);
      return Number.isFinite(val) ? val : 0;
    } catch (_) {
      return 0;
    }
  }

  function readCssSafeAreaBottom() {
    try {
      const raw = getComputedStyle(document.documentElement).getPropertyValue('--sab').trim();
      const val = parseFloat(raw);
      return Number.isFinite(val) ? val : 0;
    } catch (_) {
      return 0;
    }
  }

  function resolveTopInsetForLayout() {
    const cssTop = readCssSafeAreaTop();
    const vvTop = (vvFixEnabled && vv) ? safeNum(vv.offsetTop) : 0;
    let fallbackUsed = false;
    let tgSafeTop = 0;

    if (!hostedMode) {
      return {
        resolvedTop: cssTop,
        cssTop,
        vvTop,
        tgSafeTop: 0,
        fallbackUsed: false,
      };
    }

    const tg = readTelegramWebApp();
    tgSafeTop = tg
      ? safeNum(tg.safeAreaInsets && tg.safeAreaInsets.top) +
        safeNum(tg.contentSafeAreaInsets && tg.contentSafeAreaInsets.top)
      : 0;

    let resolvedTop = Math.max(cssTop, safeNum(hostSafeTop), tgSafeTop);

    if (resolvedTop < 1 && isLikelyIOSDevice()) {
      resolvedTop = 44;
      fallbackUsed = true;
    }

    resolvedTop = Math.max(0, Math.min(80, resolvedTop));
    return {
      resolvedTop,
      cssTop,
      vvTop,
      tgSafeTop,
      fallbackUsed,
    };
  }

  function getViewportSafeOffsets() {
    if (!vvFixEnabled || !vv) {
      return {
        safeTop: 0,
        safeLeft: 0,
        detected: false,
        vvTop: 0,
        vvLeft: 0,
        docTop: 0,
        docLeft: 0,
        bodyTop: 0,
        bodyLeft: 0,
      };
    }

    const offsetTop = safeNum(vv.offsetTop);
    const offsetLeft = safeNum(vv.offsetLeft);
    const docRect = document.documentElement.getBoundingClientRect();
    const bodyRect = document.body.getBoundingClientRect();
    const docTop = safeNum(docRect.top);
    const docLeft = safeNum(docRect.left);
    const bodyTop = safeNum(bodyRect.top);
    const bodyLeft = safeNum(bodyRect.left);

    const safeTop = -offsetTop - docTop;
    const safeLeft = -offsetLeft - docLeft;

    const detected =
      Math.abs(offsetTop) > 10 ||
      Math.abs(offsetLeft) > 10 ||
      Math.abs(docTop) > 2 ||
      Math.abs(docLeft) > 2 ||
      Math.abs(bodyTop) > 2 ||
      Math.abs(bodyLeft) > 2;

    return {
      safeTop,
      safeLeft,
      detected,
      vvTop: offsetTop,
      vvLeft: offsetLeft,
      docTop,
      docLeft,
      bodyTop,
      bodyLeft,
    };
  }

  function syncAppViewportHeight() {
    const vvH = (vvFixEnabled && vv) ? safeNum(vv.height) : 0;
    const appH = Math.max(100, vvH || safeNum(window.innerHeight));
    const px = `${appH}px`;
    document.documentElement.style.setProperty('--app-height', px);
    document.documentElement.style.height = px;
    document.body.style.height = px;
  }

  function fit() {
    cancelAnimationFrame(fitRaf);
    fitRaf = requestAnimationFrame(() => {
      const viewportW = (vvFixEnabled && vv && vv.width) ? Number(vv.width) : window.innerWidth;
      const viewportH = (vvFixEnabled && vv && vv.height) ? Number(vv.height) : window.innerHeight;
      const topInset = resolveTopInsetForLayout();
      const layoutSafeTop = hostedMode ? topInset.resolvedTop : 0;
      const contentSafeTop = hostedMode ? 0 : topInset.cssTop;
      const cssBottom = readCssSafeAreaBottom();
      const usableH = Math.max(viewportH - layoutSafeTop, 100);

      gvEl.style.setProperty('--layout-safe-top', `${contentSafeTop}px`);

      gvScale = Math.min(viewportW / 430, usableH / 900);
      onScaleChange(gvScale);

      // Expose bottom safe area in design-space px so the control bar can push
      // its content above the home indicator without changing the canvas scale.
      const layoutSafeBottomDesign = gvScale > 0 ? cssBottom / gvScale : 0;
      gvEl.style.setProperty('--layout-safe-bottom', `${layoutSafeBottomDesign.toFixed(2)}px`);

      const offsetX = (viewportW - 430 * gvScale) / 2;
      const offsetY = layoutSafeTop;
      const vvOffsets = getViewportSafeOffsets();

      if (vvOffsets.detected) {
        try {
          document.documentElement.scrollTop = 0;
          document.body.scrollTop = 0;
        } catch (_) {}
      }

      gvEl.style.transform = `translate(${offsetX + vvOffsets.safeLeft}px,${offsetY + vvOffsets.safeTop}px) scale(${gvScale})`;

      const gvRect = gvEl.getBoundingClientRect();
      const controlBarRect = document.getElementById('control-bar')?.getBoundingClientRect?.();
      const spinWrapRect = document.getElementById('spin-wrap')?.getBoundingClientRect?.();
      const gvTop = safeNum(gvRect.top);
      const gvLeft = safeNum(gvRect.left);
      const gvW = safeNum(gvRect.width);
      const gvH = safeNum(gvRect.height);
      const gvBottomGap = safeNum(viewportH - gvRect.bottom);
      const controlBarBottomGap = controlBarRect ? safeNum(viewportH - controlBarRect.bottom) : 0;
      const spinBottomGap = spinWrapRect ? safeNum(viewportH - spinWrapRect.bottom) : 0;

      renderedLayout = {
        viewportW: safeNum(viewportW),
        viewportH: safeNum(viewportH),
        gvRect: {
          top: gvTop,
          left: gvLeft,
          width: gvW,
          height: gvH,
          right: safeNum(gvRect.right),
          bottom: safeNum(gvRect.bottom),
        },
        gaps: {
          gv: gvBottomGap,
          controlBar: controlBarBottomGap,
          spin: spinBottomGap,
        },
        scale: safeNum(gvScale),
      };
      const now = Date.now();
        if (enableVvFixLog && (vvOffsets.detected !== lastViewportFixDetected ||
          (vvOffsets.detected && now - lastViewportFixLogAt > 2000))) {
        lastViewportFixDetected = vvOffsets.detected;
        lastViewportFixLogAt = now;
        onLog(
          `[VV_FIX][GAME] detected=${vvOffsets.detected} safeTop=${vvOffsets.safeTop.toFixed(1)} safeLeft=${vvOffsets.safeLeft.toFixed(1)} tgSafeAreaTop=${hostSafeTop.toFixed(1)} resolvedTop=${layoutSafeTop.toFixed(1)} cssTop=${topInset.cssTop.toFixed(1)} cssBottom=${cssBottom.toFixed(1)} tgApiTop=${topInset.tgSafeTop.toFixed(1)} vvTop=${topInset.vvTop.toFixed(1)} fallback44=${topInset.fallbackUsed} offsetY=${offsetY.toFixed(1)} vv=(${vvOffsets.vvTop.toFixed(1)},${vvOffsets.vvLeft.toFixed(1)}) doc=(${vvOffsets.docTop.toFixed(1)},${vvOffsets.docLeft.toFixed(1)}) body=(${vvOffsets.bodyTop.toFixed(1)},${vvOffsets.bodyLeft.toFixed(1)}) gv=(${gvTop.toFixed(1)},${gvLeft.toFixed(1)},${gvW.toFixed(1)}x${gvH.toFixed(1)}) gaps(gv=${gvBottomGap.toFixed(1)},ctrl=${controlBarBottomGap.toFixed(1)},spin=${spinBottomGap.toFixed(1)}) scale=${gvScale.toFixed(3)}`,
          vvOffsets.detected ? 'warn' : 'info'
        );
      }
    });
  }

  function buildDebugData(reason) {
    const tg = readTelegramWebApp();
    const screenH = safeNum(window.screen && window.screen.height);
    const innerH = safeNum(window.innerHeight);
    return {
      reason: String(reason || 'unknown'),
      screenHeight: screenH,
      bottomGap: safeNum(screenH - innerH),
      innerHeight: innerH,
      vvHeight: (vvFixEnabled && vv) ? safeNum(vv.height) : 0,
      vvOffsetTop: (vvFixEnabled && vv) ? safeNum(vv.offsetTop) : 0,
      tgViewport: tg ? safeNum(tg.viewportHeight) : 0,
      tgSafe: tg ? safeNum(tg.safeAreaInsets && tg.safeAreaInsets.top) : 0,
      tgContentSafe: tg ? safeNum(tg.contentSafeAreaInsets && tg.contentSafeAreaInsets.top) : 0,
      hostSafeTop: safeNum(hostSafeTop),
      cssSafeTop: readCssSafeAreaTop(),
      isHosted: hostedMode,
    };
  }

  function logDebug(reason, logger = console.log) {
    logger('[VV_FIX][GAME][DEBUG]', buildDebugData(reason));
  }

  function init() {
    if (initialized) return;
    initialized = true;

    syncAppViewportHeight();
    fit();

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize, { passive: true });

    if (vv) {
      vv.addEventListener('resize', handleResize, { passive: true });
      vv.addEventListener('scroll', fit, { passive: true });
    }

    if (vvFixNeedPersistentSync) {
      stubbornSyncTimer = window.setInterval(() => {
        fit();
      }, 900);
      window.addEventListener('pagehide', stopStubbornSync, { once: true });
    }
  }

  function handleResize() {
    syncAppViewportHeight();
    fit();
  }

  function stopStubbornSync() {
    if (stubbornSyncTimer) {
      clearInterval(stubbornSyncTimer);
      stubbornSyncTimer = 0;
    }
  }

  function destroy() {
    if (!initialized) return;
    initialized = false;

    cancelAnimationFrame(fitRaf);
    fitRaf = 0;

    window.removeEventListener('resize', handleResize);
    window.removeEventListener('orientationchange', handleResize, { passive: true });

    if (vv) {
      vv.removeEventListener('resize', handleResize, { passive: true });
      vv.removeEventListener('scroll', fit, { passive: true });
    }

    stopStubbornSync();
  }

  function createDebugContext(getMode, getRenderedLayout) {
    const modeProvider = typeof getMode === 'function' ? getMode : () => ({});
    const layoutProvider = typeof getRenderedLayout === 'function'
      ? getRenderedLayout
      : () => window.__vvRenderedLayout || null;
    return {
      getGvScale: () => gvScale,
      getHostSafeTop: () => hostSafeTop,
      getRenderedLayout: () => layoutProvider(),
      getMode: () => modeProvider(),
    };
  }

  return {
    init,
    fit,
    destroy,
    setHostSafeTop(value) {
      hostSafeTop = Math.max(0, safeNum(value));
    },
    getHostSafeTop() {
      return hostSafeTop;
    },
    getScale() {
      return gvScale;
    },
    buildDebugData,
    logDebug,
    getRenderedLayout() {
      return renderedLayout;
    },
    createDebugContext,
  };
}
