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
        },
        extra: extra,
      };

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
