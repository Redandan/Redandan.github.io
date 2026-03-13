/**
 * flutter_adapter.js
 *
 * Host adapter for Flutter Native WebView + Flutter Web iframe + Standalone PWA.
 * Sets up window.__gameHost so the game core (slot_game_moon_dance.html) is
 * decoupled from transport (bridge vs postMessage vs REST).
 *
 * Timing safety:
 *   This script is a plain <script> and runs before the ES module (which loads
 *   Three.js from CDN and may take 500 ms+).  HOST_INIT can therefore arrive
 *   before window._game_onHostInit is defined.  We queue it and replay as soon
 *   as the module registers the callback.
 *
 * Interface provided:
 *   window.__gameHost.spin(params)            → Promise<SpinResult | null>
 *   window.__gameHost.getRtp()               → Promise<RtpRaw | null>
 *   window.__gameHost.getBalance()           → Promise<number | null>
 *   window.__gameHost.getTransactions(p, sz) → Promise<TxnPage | null>
 *   window.__gameHost.navigate(dest)         → void  ('back'|'deposit'|'withdraw')
 */
(function () {
  'use strict';

  // ── Shared helpers ────────────────────────────────────────────────────────

  const _log = (msg, level = 'info') => {
    if (typeof window.__addLog === 'function') window.__addLog(msg, level);
    else if (level === 'error') console.error('[flutter_adapter]', msg);
    else console.log('[flutter_adapter]', msg);
  };

  const API_BASE = window.__AGORA_API_BASE_URL || 'https://agoramarketapi.purrtechllc.com/api';

  const _params       = new URLSearchParams(window.location.search);
  const _isFlutterMode = _params.get('flutter') === '1' || !!window._flutterNative;

  // ── Flutter native bridge helpers ─────────────────────────────────────────

  function _hasBridge() {
    const b = window.flutter_inappwebview;
    return !!( b && typeof b.callHandler === 'function');
  }

  async function _bridge(name, payload) {
    if (!_isFlutterMode || !_hasBridge()) return null;
    const b = window.flutter_inappwebview;
    try {
      const raw = payload === undefined
        ? await b.callHandler(name)
        : await b.callHandler(name, payload);
      return typeof raw === 'string' ? JSON.parse(raw) : raw;
    } catch (err) {
      _log(`Flutter handler "${name}" failed: ${err}`, 'warn');
      return null;
    }
  }

  // ── postMessage helper ─────────────────────────────────────────────────────

  function _postAndWait(payload, okType, errType, timeoutMs, timeoutMsg) {
    return new Promise((resolve) => {
      let settled = false;
      function onMsg(e) {
        if (e.origin !== window.__gameOrigin) return;
        if (e.source !== window.parent && e.source !== window && e.source !== null) return;
        const d = e.data || {};
        if (d.type !== okType && d.type !== errType) return;
        if (settled) return;
        settled = true;
        window.removeEventListener('message', onMsg);
        clearTimeout(tOut);
        if (d.type === okType) {
          resolve({ result: d, timedOut: false, errorMessage: null });
        } else {
          resolve({ result: null, timedOut: false, errorMessage: d.message || d.error || `${errType} received` });
        }
      }
      window.addEventListener('message', onMsg);
      const tOut = setTimeout(() => {
        if (settled) return;
        settled = true;
        window.removeEventListener('message', onMsg);
        _log(timeoutMsg, 'warn');
        resolve({ result: null, timedOut: true, errorMessage: timeoutMsg });
      }, timeoutMs);
      window.parent.postMessage(payload, window.__gameOrigin);
    });
  }

  // ── HOST_INIT listener ────────────────────────────────────────────────────

  window.__gameOrigin = window.location.origin;

  window.addEventListener('message', (e) => {
    if (e.origin !== window.__gameOrigin) return;
    if (e.source !== window.parent && e.source !== window && e.source !== null) return;

    const { type } = e.data || {};

    if (type === 'HOST_LOG') {
      const level = String((e.data && e.data.level) || 'info').toLowerCase();
      const logType = level === 'error' ? 'error' : (level === 'warn' ? 'warn' : 'info');
      _log(String((e.data && e.data.message) || '[HOST_LOG]'), logType);
      return;
    }

    if (type === 'HOST_INIT') {
      const { jwt, balance, demoMode, username, tgSafeAreaTop } = e.data;
      _deliverHostInit({ jwt, balance, demoMode, username, tgSafeAreaTop });
    }
    // SPIN_RESULT / SPIN_ERROR are captured inside _postAndWait resolvers.
  });

  // ── Pending-queue: HOST_INIT may arrive before the ES module finishes loading ──
  // Plain <script> runs before `type="module"` (which defers CDN fetches).
  // Queue the payload and replay it once the module registers _game_onHostInit.
  let _pendingInit = null;
  let _initDelivered = false;

  function _deliverHostInit(data) {
    if (_initDelivered) return; // idempotent — only the first HOST_INIT wins
    if (typeof window._game_onHostInit === 'function') {
      _initDelivered = true;
      window._game_onHostInit(data);
    } else {
      // Module not ready yet — store and retry every 50 ms (max 20 s)
      _pendingInit = data;
      if (!_pendingInit._retryHandle) {
        _pendingInit._retryHandle = setInterval(function () {
          if (typeof window._game_onHostInit !== 'function') return;
          clearInterval(_pendingInit._retryHandle);
          if (_initDelivered) return;
          _initDelivered = true;
          window._game_onHostInit(_pendingInit);
        }, 50);
        // Safety: stop retrying after 20 s
        setTimeout(function () { clearInterval(_pendingInit?._retryHandle); }, 20000);
      }
    }
  }

  // Send GAME_READY so the Flutter/TG host knows the iframe is alive.
  setTimeout(() => {
    if (window.parent !== window && window.__gameOrigin) {
      window.parent.postMessage({ type: 'GAME_READY' }, window.__gameOrigin);
    }
    console.log('[flutter_adapter] GAME_READY sent');
  }, 0);

  // ── Flutter self-host fallback ────────────────────────────────────────────
  // When the page is opened with ?flutter=1 (PWA / mobile browser), Dart writes
  // the JWT to localStorage asynchronously.  Retry every 300 ms for up to 15 s
  // so we catch the JWT even on slow first-launch writes.
  if (_isFlutterMode) {
    var _selfHostRetries = 0;
    var _selfHostTimer = setInterval(function () {
      if (_initDelivered) { clearInterval(_selfHostTimer); return; }
      var jwt = localStorage.getItem('_flutter_game_jwt') || '';
      if (jwt) {
        clearInterval(_selfHostTimer);
        var bal = parseFloat(localStorage.getItem('_flutter_game_balance') || '0');
        _deliverHostInit({ jwt: jwt, balance: bal, demoMode: bal < 0.25, username: '' });
        return;
      }
      if (++_selfHostRetries >= 50) { // 50 × 300 ms = 15 s
        clearInterval(_selfHostTimer);
        console.warn('[flutter_adapter] JWT not found in localStorage after 15 s');
      }
    }, 300);
  }

  // ── window.__gameHost implementation ──────────────────────────────────────

  window.__gameHost = {

    /**
     * Execute a spin.
     * Returns a normalised SpinResult or null on failure.
     * { symbols, symbolIds, multiplier, prize, newBalance, mode }
     */
    async spin({ betIndex, betAmount, mode, clientSeed, nonce, clientRoundId }) {
      const params = { betIndex, betAmount, mode, clientSeed, nonce };
      if (mode !== 'DEMO') params.clientRoundId = clientRoundId;

      // ── Branch 1: Flutter native bridge ────────────────────────────────
      if (_isFlutterMode && _hasBridge()) {
        _log(`SPIN(bridge) → ${mode} bet=${betIndex}`, 'info');
        const res = await _bridge('spin', params);
        const d = res?.data ?? null;
        if (d && (Array.isArray(d.symbols) || Array.isArray(d.symbolIds))) {
          _log(`SPIN(bridge) OK: ×${d.multiplier}`, 'info');
          return {
            symbols:    Array.isArray(d.symbols)    ? d.symbols                        : null,
            symbolIds:  Array.isArray(d.symbolIds)  ? d.symbolIds.map(v => Number(v)) : null,
            multiplier: Number(d.multiplier ?? 0),
            prize:      Number(d.winAmount ?? d.prize ?? 0),
            newBalance: Number(d.balance ?? d.newBalance ?? NaN),
            mode:       d.mode || mode,
          };
        }
        if (res?.success === false) _log(`SPIN(bridge) failed: ${res.message}`, 'error');
        return null;
      }

      // ── Branch 2: iframe postMessage (Flutter Web / TG host) ───────────
      if (window.parent !== window) {
        _log(`SPIN(postMsg) → ${mode} betIdx=${betIndex} origin=${window.__gameOrigin}`, 'info');
        const TIMEOUT_MS = 8000;
        const r = await _postAndWait(
          { type: 'SPIN_REQUEST', betIndex, betAmount, mode },
          'SPIN_RESULT', 'SPIN_ERROR',
          TIMEOUT_MS, `SPIN_REQUEST timed out after ${TIMEOUT_MS / 1000}s`
        );
        if (r.result) {
          const d = r.result;
          return {
            symbols:    Array.isArray(d.symbols)    ? d.symbols                        : null,
            symbolIds:  Array.isArray(d.symbolIds)  ? d.symbolIds.map(v => Number(v)) : null,
            multiplier: Number(d.multiplier ?? 0),
            prize:      Number(d.winAmount ?? d.prize ?? 0),
            newBalance: Number(d.newBalance ?? d.balance ?? NaN),
            mode:       d.mode || mode,
          };
        }
        if (!r.timedOut) _log(`SPIN(postMsg) SPIN_ERROR: ${r.errorMessage}`, 'error');
        return null;
      }

      // ── Branch 3: Standalone / iOS PWA — direct REST ───────────────────
      const jwt = window.__agoraAuth?.token;
      if (!jwt) { _log('SPIN(REST) 缺少 JWT', 'error'); return null; }
      _log(`SPIN(REST) → ${mode} betIdx=${betIndex}`, 'info');
      try {
        const resp = await fetch(`${API_BASE}/slot/spin`, {
          method: 'POST',
          headers: { 'Authorization': `Bearer ${jwt}`, 'Content-Type': 'application/json' },
          body: JSON.stringify(params),
        });
        if (!resp.ok) { _log(`SPIN(REST) HTTP ${resp.status}`, 'error'); return null; }
        const json = await resp.json();
        const d = json?.data ?? json;
        if (d && (Array.isArray(d.symbols) || Array.isArray(d.symbolIds))) {
          _log(`SPIN(REST) OK: ×${d.multiplier}`, 'info');
          return {
            symbols:    Array.isArray(d.symbols)    ? d.symbols                        : null,
            symbolIds:  Array.isArray(d.symbolIds)  ? d.symbolIds.map(v => Number(v)) : null,
            multiplier: Number(d.multiplier ?? 0),
            prize:      Number(d.winAmount ?? d.prize ?? 0),
            newBalance: Number(d.balance ?? d.newBalance ?? NaN),
            mode:       d.mode || mode,
          };
        }
        _log(`SPIN(REST) 缺少 symbols: ${JSON.stringify(d).slice(0, 120)}`, 'error');
        return null;
      } catch (err) {
        _log(`SPIN(REST) 網路錯誤: ${err}`, 'error');
        return null;
      }
    },

    /**
     * Fetch paytable RTP data.
     * Returns raw API payload or null.
     */
    async getRtp() {
      // ── Branch 1: Flutter native bridge ────────────────────────────────
      if (_isFlutterMode && _hasBridge()) {
        const res = await _bridge('getRtpTable');
        if (res?.success) {
          const data = res.data ?? null;
          // Flutter bridge serialisation bug: Dart model objects lose all
          // fields when JS-serialised, producing entries:[{},{},{},...].
          // Detect and fall through to REST fallback below.
          const hasEmptyEntries =
            data &&
            Array.isArray(data.entries) &&
            data.entries.length > 0 &&
            Object.keys(data.entries[0] || {}).length === 0;

          if (!hasEmptyEntries) return data; // good data — use it
          _log('RTP(bridge) entries 全為空物件，改用 REST 獲取', 'warn');
          // fall through to REST
        }
        // Bridge failed or returned bad data — try REST directly
      }

      // ── Branch 2: iframe postMessage ───────────────────────────────────
      if (!_isFlutterMode && window.parent !== window) {
        const r = await _postAndWait(
          { type: 'RTP_REQUEST' },
          'RTP_RESULT', 'RTP_ERROR',
          6000, 'RTP_REQUEST timed out'
        );
        if (r.result?.data != null) return r.result.data;
        if (!r.timedOut && r.errorMessage) _log(`RTP_ERROR: ${r.errorMessage}`, 'warn');
        return null;
      }

      // ── Branch 3: REST (standalone, or bridge fallback) ───────────────
      const jwt = window.__agoraAuth?.token;
      if (!jwt) { _log('getRtp: 無 JWT', 'warn'); return null; }
      try {
        const resp = await fetch(`${API_BASE}/slot/rtp`, {
          headers: { 'Authorization': `Bearer ${jwt}` },
        });
        if (!resp.ok) { _log(`getRtp HTTP ${resp.status}`, 'warn'); return null; }
        const json = await resp.json();
        const data = json?.data ?? json;
        _log('RTP(REST) 獲取成功', 'info');
        return data;
      } catch (err) {
        _log(`getRtp(REST) 失敗: ${err}`, 'warn');
        return null;
      }
    },

    /**
     * Fetch current user balance (USDT float).
     * Returns number or null on failure.
     */
    async getBalance() {
      // ── Flutter native bridge ─────────────────────────────────────────
      if (_isFlutterMode && _hasBridge()) {
        const res = await _bridge('getCurrentUser');
        if (!res || res.success === false) {
          _log(`getBalance(bridge) failed: ${res?.message || 'unavailable'}`, 'warn');
          return null;
        }
        return Number((res.data || {}).balance) || 0;
      }

      // ── REST (iframe or standalone — iframe mode calls /auth/me via JWT) ─
      const jwt = window.__agoraAuth?.token;
      if (!jwt) return null;
      try {
        const resp = await fetch(`${API_BASE}/auth/me`, {
          headers: { 'Authorization': `Bearer ${jwt}` },
        });
        if (!resp.ok) { _log(`getBalance HTTP ${resp.status}`, 'warn'); return null; }
        const json       = await resp.json();
        const data       = json?.data    ?? json;
        const userInfo   = data?.userInfo ?? data;
        return Number(userInfo?.balance) || 0;
      } catch (err) {
        _log(`getBalance 失敗: ${err}`, 'warn');
        return null;
      }
    },

    /**
     * Fetch a page of transactions.
     * Returns { content, totalElements, hasMore } or null on failure.
     */
    async getTransactions(page, size = 10) {
      // ── Flutter native bridge ─────────────────────────────────────────
      if (_isFlutterMode && _hasBridge()) {
        const raw    = await window.flutter_inappwebview.callHandler('getTransactions', { page, size });
        const parsed = typeof raw === 'string' ? JSON.parse(raw) : raw;
        if (!parsed?.success) throw new Error(parsed?.message || 'getTransactions failed');
        return parsed.data;
      }

      // ── iframe postMessage ────────────────────────────────────────────
      if (window.parent !== window) {
        const r = await _postAndWait(
          { type: 'TRANSACTION_REQUEST', page, size },
          'TRANSACTION_RESULT', 'TRANSACTION_ERROR',
          8000, 'TRANSACTION_REQUEST timed out'
        );
        if (r.result) return r.result.data;
        throw new Error(r.errorMessage || 'TRANSACTION_REQUEST failed');
      }

      // ── Standalone REST ───────────────────────────────────────────────
      const jwt = window.__agoraAuth?.token;
      if (!jwt) throw new Error('無 JWT，請重新登入');
      const resp = await fetch(`${API_BASE}/transactions/list`, {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${jwt}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: 'USDT', page, size }),
      });
      if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
      const json = await resp.json();
      const d    = json?.data ?? json;
      return {
        content:       d.content       ?? [],
        totalElements: d.totalElements ?? 0,
        hasMore:       (d.content?.length ?? 0) === size,
      };
    },

    /**
     * Navigate away from the game.
     * dest: 'back' | 'deposit' | 'withdraw'
     */
    navigate(dest) {
      const NAV = {
        back:     { handler: 'goBack',     msg: 'GO_BACK',     path: '/'               },
        deposit:  { handler: 'goDeposit',  msg: 'GO_DEPOSIT',  path: '/wallet/deposit' },
        withdraw: { handler: 'goWithdraw', msg: 'GO_WITHDRAW', path: '/wallet/withdraw'},
      };
      const cfg = NAV[dest];
      if (!cfg) { console.warn('[flutter_adapter] unknown nav dest:', dest); return; }

      if (_isFlutterMode && _hasBridge()) {
        window.flutter_inappwebview.callHandler(cfg.handler).catch(() => {});
      } else if (window.parent !== window) {
        if (window.__gameOrigin) window.parent.postMessage({ type: cfg.msg }, window.__gameOrigin);
      } else {
        window.location.href = `${window.location.origin}/#${cfg.path}`;
      }
    },
  };

  console.log('[flutter_adapter] loaded, _isFlutterMode =', _isFlutterMode);
})();
