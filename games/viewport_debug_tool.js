(function () {
  'use strict';

  if (window.installViewportDebugTool && window.installViewportDebugTool.__standaloneFile === true) {
    return;
  }

  function safeNum(value) {
    var n = Number(value);
    return Number.isFinite(n) ? n : 0;
  }

  function isLikelyIOSDevice() {
    var ua = navigator.userAgent || '';
    var maxTouchPoints = safeNum(navigator.maxTouchPoints);
    return /iPad|iPhone|iPod/.test(ua) || (/Macintosh/.test(ua) && maxTouchPoints > 1);
  }

  function readCssVarPx(varName) {
    try {
      var raw = getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
      var val = parseFloat(raw);
      return Number.isFinite(val) ? val : 0;
    } catch (_) {
      return 0;
    }
  }

  function readEnvInset(name) {
    var probe = document.createElement('div');
    probe.style.position = 'fixed';
    probe.style.pointerEvents = 'none';
    probe.style.visibility = 'hidden';
    probe.style.top = '0';
    probe.style.left = '0';
    probe.style.height = 'env(' + name + ', 0px)';
    document.body.appendChild(probe);
    var h = safeNum(getComputedStyle(probe).height.replace('px', ''));
    probe.remove();
    return h;
  }

  function rect(el) {
    if (!el) return null;
    var r = el.getBoundingClientRect();
    return {
      top: safeNum(r.top),
      left: safeNum(r.left),
      width: safeNum(r.width),
      height: safeNum(r.height),
      bottom: safeNum(r.bottom),
      right: safeNum(r.right),
    };
  }

  function computeViewportGaps() {
    var docRect = document.documentElement.getBoundingClientRect();
    var bodyRect = document.body.getBoundingClientRect();
    return {
      bodyTopGap: safeNum(bodyRect.top - docRect.top),
      bodyBottomGap: safeNum(docRect.bottom - bodyRect.bottom),
      bodyLeftGap: safeNum(bodyRect.left - docRect.left),
      bodyRightGap: safeNum(docRect.right - bodyRect.right),
    };
  }

  function computeGvOverflow(gvRect) {
    if (!gvRect) return null;
    var vh = safeNum(window.innerHeight);
    var vw = safeNum(window.innerWidth);
    return {
      bottomOverflow: safeNum(gvRect.bottom - vh),
      topOverflow: safeNum(-gvRect.top),
      rightOverflow: safeNum(gvRect.right - vw),
      leftOverflow: safeNum(-gvRect.left),
    };
  }

  function getTransformScale(el) {
    if (!el) return null;
    var style = getComputedStyle(el);
    var transform = style.transform;
    if (!transform || transform === 'none') return 1;

    var matrix2d = transform.match(/matrix\(([^)]+)\)/);
    if (matrix2d) {
      var values2d = matrix2d[1].split(',');
      var scaleX2d = parseFloat(values2d[0]);
      return Number.isFinite(scaleX2d) ? scaleX2d : 1;
    }

    var matrix3d = transform.match(/matrix3d\(([^)]+)\)/);
    if (matrix3d) {
      var values3d = matrix3d[1].split(',');
      var scaleX3d = parseFloat(values3d[0]);
      return Number.isFinite(scaleX3d) ? scaleX3d : 1;
    }

    return 1;
  }

  function readBodySafePadding() {
    var style = getComputedStyle(document.body);
    return {
      paddingTop: safeNum(String(style.paddingTop || '0').replace('px', '')),
      paddingBottom: safeNum(String(style.paddingBottom || '0').replace('px', '')),
    };
  }

  function detectCanvasOverflow() {
    // Prefer gameplay canvases first; fall back to any canvas.
    var canvas =
      document.querySelector('#reel-canvas-wrap canvas') ||
      document.querySelector('#char-canvas-wrap canvas') ||
      document.querySelector('canvas');
    if (!canvas) return null;

    var r = canvas.getBoundingClientRect();
    return {
      width: safeNum(r.width),
      height: safeNum(r.height),
      topOverflow: safeNum(-r.top),
      bottomOverflow: safeNum(r.bottom - window.innerHeight),
      leftOverflow: safeNum(-r.left),
      rightOverflow: safeNum(r.right - window.innerWidth),
    };
  }

  function detectLayoutIssues(payload) {
    var issues = [];
    var viewportGap = payload && payload.layout ? payload.layout.viewportGap : null;
    var gvOverflow = payload && payload.layout ? payload.layout.gvOverflow : null;
    var bodyPadding = payload && payload.layout ? payload.layout.bodyPadding : null;
    var gvRect = payload && payload.layout ? payload.layout.gvRect : null;
    var canvasOverflow = payload && payload.layout ? payload.layout.canvasOverflow : null;
    var envBottom = payload && payload.safeArea ? safeNum(payload.safeArea.envBottomProbe) : 0;

    if (viewportGap && viewportGap.bodyBottomGap > 5) {
      issues.push('BODY_BOTTOM_GAP');
    }
    if (gvOverflow && gvOverflow.bottomOverflow > 5) {
      issues.push('GAMEVIEW_OVERFLOW');
    }
    // Only flag safe-area-not-applied when there is a real bottom gap signal.
    if (envBottom > 0 && bodyPadding && bodyPadding.paddingBottom === 0 && viewportGap && viewportGap.bodyBottomGap > 0) {
      issues.push('SAFE_AREA_NOT_APPLIED');
    }
    if (gvRect && gvRect.top > 3) {
      issues.push('GAMEVIEW_NOT_TOP_ALIGNED');
    }
    if (canvasOverflow && canvasOverflow.bottomOverflow > 5) {
      issues.push('CANVAS_BOTTOM_OVERFLOW');
    }
    return issues;
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

  function installViewportDebugTool(options) {
    options = options || {};
    if (window.__viewportDebugTool && window.__viewportDebugTool.active) {
      return window.__viewportDebugTool;
    }

    var state = {
      active: true,
      startedAt: Date.now(),
      entries: [],
      cleanup: [],
      seq: 0,
      keyboardOpen: false,
      baseViewportHeight: safeNum(window.innerHeight),
      maxEntries: Number.isFinite(Number(options.maxEntries)) ? Math.max(50, Number(options.maxEntries)) : 1200,
    };

    function isKeyboardLikelyOpen(vvHeight) {
      var currentH = safeNum(vvHeight || window.innerHeight);
      var baseline = Math.max(state.baseViewportHeight, currentH);
      state.baseViewportHeight = baseline;
      return baseline > 0 ? (baseline - currentH) > 140 : false;
    }

    function snapshot(reason, extra) {
      extra = extra || {};
      var vv = window.visualViewport;
      var docEl = document.documentElement;
      var body = document.body;
      var gv = document.getElementById('gv');
      var controlBar = document.getElementById('control-bar');
      var spinWrap = document.getElementById('spin-wrap');
      var spinStatus = document.getElementById('spin-status');
      var tg = readTelegramWebApp();

      var vvHeight = vv ? safeNum(vv.height) : safeNum(window.innerHeight);
      state.keyboardOpen = isKeyboardLikelyOpen(vvHeight);

      var payload = {
        id: ++state.seq,
        ts: Date.now(),
        reason: String(reason || 'snapshot'),
        route: window.location.pathname + window.location.search,
        userAgent: navigator.userAgent,
        standalone: !!(window.matchMedia && window.matchMedia('(display-mode: standalone)').matches),
        ios: isLikelyIOSDevice(),
        keyboardLikelyOpen: state.keyboardOpen,
        window: {
          innerWidth: safeNum(window.innerWidth),
          innerHeight: safeNum(window.innerHeight),
          outerWidth: safeNum(window.outerWidth),
          outerHeight: safeNum(window.outerHeight),
          scrollX: safeNum(window.scrollX),
          scrollY: safeNum(window.scrollY),
          devicePixelRatio: safeNum(window.devicePixelRatio),
          orientation: (screen.orientation && screen.orientation.type) || '',
        },
        visualViewport: vv ? {
          width: safeNum(vv.width),
          height: safeNum(vv.height),
          offsetTop: safeNum(vv.offsetTop),
          offsetLeft: safeNum(vv.offsetLeft),
          pageTop: safeNum(vv.pageTop),
          pageLeft: safeNum(vv.pageLeft),
          scale: safeNum(vv.scale),
        } : null,
        document: {
          clientWidth: safeNum(docEl.clientWidth),
          clientHeight: safeNum(docEl.clientHeight),
          scrollWidth: safeNum(docEl.scrollWidth),
          scrollHeight: safeNum(docEl.scrollHeight),
          bodyClientHeight: safeNum(body && body.clientHeight),
          bodyScrollHeight: safeNum(body && body.scrollHeight),
        },
        safeArea: {
          cssTop: readCssVarPx('--sat'),
          cssBottom: readCssVarPx('--sab'),
          envTopProbe: readEnvInset('safe-area-inset-top'),
          envBottomProbe: readEnvInset('safe-area-inset-bottom'),
        },
        telegram: tg ? {
          viewportHeight: safeNum(tg.viewportHeight),
          viewportStableHeight: safeNum(tg.viewportStableHeight),
          safeTop: safeNum(tg.safeAreaInsets && tg.safeAreaInsets.top),
          safeBottom: safeNum(tg.safeAreaInsets && tg.safeAreaInsets.bottom),
          contentSafeTop: safeNum(tg.contentSafeAreaInsets && tg.contentSafeAreaInsets.top),
          contentSafeBottom: safeNum(tg.contentSafeAreaInsets && tg.contentSafeAreaInsets.bottom),
        } : null,
        layout: {
          gvRect: rect(gv),
          controlBarRect: rect(controlBar),
          spinWrapRect: rect(spinWrap),
          spinStatusRect: rect(spinStatus),
          bodyRect: rect(body),
          viewportGap: computeViewportGaps(),
          bodyPadding: readBodySafePadding(),
          gvTransformScale: getTransformScale(gv),
          canvasOverflow: detectCanvasOverflow(),
        },
        extra: extra,
      };

      payload.layout.gvOverflow = computeGvOverflow(payload.layout.gvRect);

      if (window.__vvDebugContext && typeof window.__vvDebugContext === 'object') {
        try {
          if (typeof window.__vvDebugContext.getGvScale === 'function') {
            payload.layout.gvScale = safeNum(window.__vvDebugContext.getGvScale());
          }
          if (typeof window.__vvDebugContext.getHostSafeTop === 'function') {
            payload.safeArea.hostSafeTop = safeNum(window.__vvDebugContext.getHostSafeTop());
          }
          if (typeof window.__vvDebugContext.getMode === 'function') {
            payload.mode = window.__vvDebugContext.getMode();
          }
        } catch (_) {}
      }

      payload.detectedIssues = detectLayoutIssues(payload);

      state.entries.push(payload);
      if (state.entries.length > state.maxEntries) state.entries.shift();

      console.log('[VV_DEBUG][SNAPSHOT]', payload);
      return payload;
    }

    function on(target, evt, handler, opts) {
      target.addEventListener(evt, handler, opts);
      state.cleanup.push(function () { target.removeEventListener(evt, handler, opts); });
    }

    function eventSnapshot(name, extra) {
      return function () { snapshot(name, extra || {}); };
    }

    on(window, 'resize', eventSnapshot('window.resize'), { passive: true });
    on(window, 'orientationchange', eventSnapshot('window.orientationchange'), { passive: true });
    on(window, 'scroll', eventSnapshot('window.scroll'), { passive: true });
    on(document, 'visibilitychange', eventSnapshot('document.visibilitychange', {
      visibilityState: document.visibilityState,
    }), { passive: true });
    on(window, 'focus', eventSnapshot('window.focus'), { passive: true });
    on(window, 'blur', eventSnapshot('window.blur'), { passive: true });

    if (window.visualViewport) {
      on(window.visualViewport, 'resize', eventSnapshot('visualViewport.resize'), { passive: true });
      on(window.visualViewport, 'scroll', eventSnapshot('visualViewport.scroll'), { passive: true });
    }

    on(document, 'focusin', function (e) {
      var t = e.target;
      snapshot('document.focusin', {
        targetTag: t && t.tagName ? String(t.tagName).toLowerCase() : '',
        targetType: t && typeof t.type === 'string' ? t.type : '',
        targetId: t && typeof t.id === 'string' ? t.id : '',
      });
    }, { passive: true });

    on(document, 'focusout', eventSnapshot('document.focusout'), { passive: true });

    var api = {
      active: true,
      snapshot: function (reason, extra) { return snapshot(reason, extra); },
      getLogs: function () { return state.entries.slice(); },
      exportJson: function () {
        return JSON.stringify({
          version: 1,
          startedAt: state.startedAt,
          count: state.entries.length,
          entries: state.entries,
        }, null, 2);
      },
      clear: function () {
        state.entries.length = 0;
        state.seq = 0;
        console.log('[VV_DEBUG] logs cleared');
      },
      destroy: function () {
        while (state.cleanup.length) {
          var fn = state.cleanup.pop();
          try { fn(); } catch (_) {}
        }
        state.active = false;
        api.active = false;
        console.log('[VV_DEBUG] tool destroyed');
      },
    };

    window.__viewportDebugTool = api;
    window.vvDebugSnapshot = api.snapshot;
    window.vvDebugExport = api.exportJson;
    window.vvDebugClear = api.clear;
    window.vvDebugDestroy = api.destroy;

    snapshot('vv_debug_installed', {
      maxEntries: state.maxEntries,
    });

    console.log('[VV_DEBUG] standalone tool installed. APIs: vvDebugSnapshot, vvDebugExport, vvDebugClear, vvDebugDestroy');
    return api;
  }

  installViewportDebugTool.__standaloneFile = true;
  window.installViewportDebugTool = installViewportDebugTool;

  if (window.__VV_DEBUG_AUTO_INSTALL !== false) {
    setTimeout(function () {
      try {
        installViewportDebugTool();
      } catch (e) {
        console.error('[VV_DEBUG] auto install failed:', e && e.message ? e.message : String(e));
      }
    }, 0);
  }
})();
