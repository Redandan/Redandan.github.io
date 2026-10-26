// Reconnect preserves Flutter state and never repeats business writes.
(function () {
  'use strict';
  if (window.__AGORA_RUNTIME_STATUS__) return;
  var pendingUpdate = null, postponedIdentity = '';
  var disconnected = !navigator.onLine, checking = false, applying = false;
  var surface, message, actions, probePromise = null, networkEpoch = 0;
  var updateFailed = false;

  function copy() {
    var language = document.documentElement.lang || 'zh-Hant';
    if (language.indexOf('th') === 0) return {
      offline: 'การเชื่อมต่อขัดข้อง หน้าปัจจุบันยังคงอยู่', checking: 'กำลังตรวจสอบการเชื่อมต่อ…', retry: 'ลองอีกครั้ง',
      update: 'มีเวอร์ชันใหม่ อัปเดตเมื่อคุณพร้อม', later: 'ภายหลัง', now: 'อัปเดต',
      notice: 'การอัปเดตจะโหลดหน้าใหม่ โปรดบันทึกข้อมูลก่อน', applying: 'กำลังอัปเดต…', failed: 'อัปเดตไม่สำเร็จ โปรดลองอีกครั้ง'
    };
    if (language.indexOf('en') === 0) return {
      offline: 'Connection interrupted. Your current page is preserved.', checking: 'Checking connection…', retry: 'Retry',
      update: 'A new version is available. Update when you are ready.', later: 'Later', now: 'Update now',
      notice: 'Updating reloads this page. Save your changes first.', applying: 'Updating…', failed: 'Update failed. Please try again.'
    };
    return {
      offline: '連線中斷，目前頁面已保留。', checking: '正在檢查連線…', retry: '重試',
      update: '有新版本，完成目前操作後再更新。', later: '稍後', now: '立即更新',
      notice: '更新將重新載入頁面，請先儲存目前內容。', applying: '正在更新…', failed: '更新失敗，請再試一次。'
    };
  }

  function position() {
    if (!surface) return;
    var viewport = window.visualViewport;
    var width = viewport ? viewport.width : window.innerWidth;
    var height = viewport ? viewport.height : window.innerHeight;
    var style = window.getComputedStyle(document.documentElement);
    var safeTop = parseFloat(style.getPropertyValue('--agora-safe-area-top')) || 0;
    var safeLeft = parseFloat(style.getPropertyValue('--agora-safe-area-left')) || 0;
    var safeRight = parseFloat(style.getPropertyValue('--agora-safe-area-right')) || 0;
    surface.style.top = (Math.max(viewport ? viewport.offsetTop : 0, safeTop) + 12) + 'px';
    surface.style.left = (Math.max(viewport ? viewport.offsetLeft : 0, safeLeft) + 12) + 'px';
    surface.style.width = Math.max(0, Math.min(420, width - safeLeft - safeRight - 24)) + 'px';
    surface.style.maxHeight = Math.max(44, height * 0.4) + 'px';
  }

  function ensureSurface() {
    if (surface) return;
    var style = document.createElement('style');
    style.textContent = '#agora-runtime-status{position:fixed;z-index:2147483000;box-sizing:border-box;' +
      'padding:12px 14px;border:1px solid #bba5df;border-radius:12px;background:#fff;color:#25212b;' +
      'box-shadow:0 4px 18px #0002;font:14px/1.5 system-ui,sans-serif;overflow:auto;overscroll-behavior:contain}' +
      '#agora-runtime-status[hidden]{display:none}#agora-runtime-status p{margin:0;overflow-wrap:anywhere}' +
      '#agora-runtime-status .actions{display:flex;gap:8px;flex-wrap:wrap;margin-top:8px}' +
      '#agora-runtime-status button{font:inherit;min-height:44px;padding:8px 12px;border:1px solid #bba5df;' +
      'border-radius:8px;background:#f4eefb;color:#39234f;cursor:pointer}' +
      '#agora-runtime-status button:focus-visible{outline:3px solid #6a4c93;outline-offset:2px}' +
      '#agora-runtime-status button:disabled{opacity:.6;cursor:wait}';
    document.head.appendChild(style);
    surface = document.createElement('section');
    surface.id = 'agora-runtime-status';
    surface.hidden = true;
    message = document.createElement('p');
    message.setAttribute('role', 'status');
    message.setAttribute('aria-live', 'polite');
    actions = document.createElement('div');
    actions.className = 'actions';
    surface.appendChild(message);
    surface.appendChild(actions);
    document.body.appendChild(surface);
    position();
  }

  function button(label, action) {
    var element = document.createElement('button');
    element.type = 'button';
    element.textContent = label;
    element.disabled = checking || applying;
    element.addEventListener('click', action);
    actions.appendChild(element);
  }

  function render() {
    if (!disconnected && (!pendingUpdate || pendingUpdate.identity === postponedIdentity)) {
      if (surface) surface.hidden = true;
      return;
    }
    ensureSurface();
    var text = copy();
    surface.hidden = false;
    actions.replaceChildren();
    if (disconnected) {
      surface.dataset.state = 'offline';
      message.textContent = checking ? text.checking : text.offline;
      button(text.retry, retryConnection);
    } else {
      surface.dataset.state = 'update';
      message.textContent = applying ? text.applying : (updateFailed ? text.failed : text.update) + ' ' + text.notice;
      button(text.later, function () { postponedIdentity = pendingUpdate.identity; render(); });
      button(text.now, async function () {
        if (applying) return;
        applying = true;
        updateFailed = false;
        render();
        try {
          var result = await pendingUpdate.apply();
          if (result === false) throw new Error('update not applied');
          // Stay busy until navigation replaces this document.
        } catch (_) {
          applying = false;
          updateFailed = true;
          render();
        }
      });
    }
    position();
  }

  async function retryConnection() {
    if (probePromise) return probePromise;
    if (!navigator.onLine) { disconnected = true; render(); return false; }
    checking = true;
    render();
    var epoch = networkEpoch;
    probePromise = (async function () {
      var controller = new AbortController();
      var timer = setTimeout(function () { controller.abort(); }, 8000);
      try {
        var url = new URL('version.json', document.baseURI);
        url.searchParams.set('connection_probe', String(Date.now()));
        var response = await window.fetch(url.toString(), {
          cache: 'no-store', credentials: 'omit', signal: controller.signal
        });
        if (!response.ok) throw new Error('connection probe failed');
        var payload = await response.json();
        if (!payload || !payload.version) throw new Error('invalid connection response');
        if (epoch !== networkEpoch || !navigator.onLine) return false;
        var wasDisconnected = disconnected;
        disconnected = false;
        if (wasDisconnected) window.dispatchEvent(new Event('agora-network-restored'));
        return true;
      } catch (_) { disconnected = true; return false; }
      finally { clearTimeout(timer); checking = false; probePromise = null; render(); }
    })();
    return probePromise;
  }

  window.__AGORA_RUNTIME_STATUS__ = {
    offerUpdate: function (identity, apply) {
      if (!identity || typeof apply !== 'function') return;
      if (pendingUpdate && pendingUpdate.identity === identity) return;
      pendingUpdate = { identity: identity, apply: apply };
      updateFailed = false;
      render();
    },
    retryConnection: retryConnection
  };
  window.addEventListener('offline', function () { networkEpoch += 1; disconnected = true; render(); });
  window.addEventListener('online', retryConnection);
  window.addEventListener('pageshow', function () { if (disconnected) retryConnection(); });
  document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'visible' && disconnected) retryConnection();
  });
  window.addEventListener('resize', position);
  if (window.visualViewport) {
    window.visualViewport.addEventListener('resize', position);
    window.visualViewport.addEventListener('scroll', position);
  }
  render();
})();
