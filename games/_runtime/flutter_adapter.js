/**
 * flutter_adapter.js
 *
 * Host adapter for Flutter Native WebView + Flutter Web iframe.
 * Sets up window.__gameHost so the game core (slot_game_moon_dance.html) is
 * decoupled from transport (bridge vs postMessage).
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
 *
 * Entry points:
 *   Branch 1 — Flutter Native WebView: window.flutter_inappwebview bridge
 *   Branch 2 — Flutter Web iframe / TG host: postMessage protocol
 */
(function () {
  'use strict';

  // ── Shared helpers ────────────────────────────────────────────────────────

  const _log = (msg, level = 'info') => {
    if (typeof window.__addLog === 'function') window.__addLog(msg, level);
    else if (level === 'error') console.error('[flutter_adapter]', msg);
    else console.log('[flutter_adapter]', msg);
  };

  const _params        = new URLSearchParams(window.location.search);
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
    // SPIN_RESULT / SPIN_ERROR / BALANCE_RESULT / TRANSACTION_RESULT etc.
    // are captured inside _postAndWait resolvers.
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

  // ── Flutter self-host fallback (mobile Flutter Web / TG redirect path) ──────
  // On mobile Flutter Web, SlotGamePage navigates the browser directly to the
  // game URL (no parent frame, no bridge).  Dart writes the JWT and balance to
  // localStorage before navigating; this poller delivers HOST_INIT once found.
  // Also used when TG host redirects to Flutter PWA and Flutter navigates the
  // browser to the game URL on mobile.
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

  // Send GAME_READY so the Flutter/TG host knows the iframe is alive.
  setTimeout(() => {
    if (window.parent !== window && window.__gameOrigin) {
      window.parent.postMessage({ type: 'GAME_READY' }, window.__gameOrigin);
    }
    console.log('[flutter_adapter] GAME_READY sent');
  }, 0);

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

      // ── Branch 3: self-host REST (mobile Flutter Web / PWA direct nav) ─
      // Flutter navigated the browser directly to the game URL; no bridge or
      // iframe is available.  Call the spin API directly with the JWT that
      // Flutter cached in localStorage before navigating.
      if (_isFlutterMode) {
        var apiBase = localStorage.getItem('_flutter_game_api_base') || '';
        var jwt     = localStorage.getItem('_flutter_game_jwt') || '';
        if (!apiBase || !jwt) {
          _log('SPIN: no apiBase or JWT in localStorage', 'error');
          return null;
        }
        _log(`SPIN(rest) → ${mode} bet=${betIndex}`, 'info');
        try {
          var gameId = localStorage.getItem('_flutter_game_id') || 'moon_dance';
          var body = {
            gameId,
            betAmount,
            mode,
            demoMode: mode === 'DEMO',
            clientSeed: clientSeed || undefined,
            nonce:      nonce ? Number(nonce) : Date.now(),
          };
          if (mode !== 'DEMO') body.clientRoundId = clientRoundId || undefined;
          var resp = await fetch(apiBase + '/slot/spin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json',
                       'Authorization': 'Bearer ' + jwt },
            body: JSON.stringify(body),
          });
          if (!resp.ok) {
            var errText = '';
            try { errText = await resp.text(); } catch (_) {}
            _log(`SPIN(rest) HTTP ${resp.status}: ${errText.slice(0, 200)}`, 'error');
            return null;
          }
          var json = await resp.json();
          var d = (json.data ?? json) || {};
          if (!(Array.isArray(d.symbols) || Array.isArray(d.symbolIds))) {
            _log('SPIN(rest) invalid response', 'error');
            return null;
          }
          // Update cached balance so getBalance() stays fresh.
          if (d.balance != null) {
            localStorage.setItem('_flutter_game_balance', String(d.balance));
          }
          _log(`SPIN(rest) OK: ×${d.multiplier}`, 'info');
          return {
            symbols:    Array.isArray(d.symbols)    ? d.symbols                        : null,
            symbolIds:  Array.isArray(d.symbolIds)  ? d.symbolIds.map(v => Number(v)) : null,
            multiplier: Number(d.multiplier ?? 0),
            prize:      Number(d.winAmount ?? d.prize ?? 0),
            newBalance: Number(d.balance ?? d.newBalance ?? NaN),
            mode:       d.mode || mode,
          };
        } catch (err) {
          _log('SPIN(rest) error: ' + err, 'error');
          return null;
        }
      }

      _log('SPIN: 無可用入口（非 bridge / 非 iframe）', 'error');
      return null;
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
          // Detect and return null so the caller falls back gracefully.
          const hasEmptyEntries =
            data &&
            Array.isArray(data.entries) &&
            data.entries.length > 0 &&
            Object.keys(data.entries[0] || {}).length === 0;

          if (!hasEmptyEntries) return data;
          _log('RTP(bridge) entries 全為空物件', 'warn');
        }
        return null;
      }

      // ── Branch 2: iframe postMessage ───────────────────────────────────
      if (window.parent !== window) {
        const r = await _postAndWait(
          { type: 'RTP_REQUEST' },
          'RTP_RESULT', 'RTP_ERROR',
          6000, 'RTP_REQUEST timed out'
        );
        if (r.result?.data != null) return r.result.data;
        if (!r.timedOut && r.errorMessage) _log(`RTP_ERROR: ${r.errorMessage}`, 'warn');
        return null;
      }

      // ── Branch 3: localStorage cache (mobile Flutter Web / PWA direct nav) ─
      // Flutter pre-fetches RTP via Dart SDK and stores it in localStorage
      // before navigating the browser directly to the game URL.
      if (_isFlutterMode) {
        var cached = localStorage.getItem('_flutter_game_rtp');
        if (cached) {
          try { return JSON.parse(cached); } catch (_) {}
        }
      }

      _log('getRtp: 無可用入口（非 bridge / 非 iframe）', 'warn');
      return null;
    },

    /**
     * Fetch current user balance (USDT float).
     * Returns number or null on failure.
     */
    async getBalance() {
      // ── Branch 1: Flutter native bridge ─────────────────────────────────
      if (_isFlutterMode && _hasBridge()) {
        const res = await _bridge('getCurrentUser');
        if (!res || res.success === false) {
          _log(`getBalance(bridge) failed: ${res?.message || 'unavailable'}`, 'warn');
          return null;
        }
        return Number((res.data || {}).balance) || 0;
      }

      // ── Branch 2: iframe postMessage ──────────────────────────────────
      if (window.parent !== window) {
        const r = await _postAndWait(
          { type: 'BALANCE_REQUEST' },
          'BALANCE_RESULT', 'BALANCE_ERROR',
          6000, 'BALANCE_REQUEST timed out'
        );
        if (r.result) return Number(r.result.balance) || 0;
        if (!r.timedOut && r.errorMessage) _log(`BALANCE_ERROR: ${r.errorMessage}`, 'warn');
        return null;
      }

      // ── Branch 3: localStorage cache (mobile Flutter Web / PWA direct nav) ─
      if (_isFlutterMode) {
        var cached = parseFloat(localStorage.getItem('_flutter_game_balance') || '0');
        return isNaN(cached) ? 0 : cached;
      }

      _log('getBalance: 無可用入口（非 bridge / 非 iframe）', 'warn');
      return null;
    },

    /**
     * Fetch a page of transactions.
     * Returns { content, totalElements, hasMore } or null on failure.
     */
    async getTransactions(page, size = 10) {
      // ── Branch 1: Flutter native bridge ─────────────────────────────────
      if (_isFlutterMode && _hasBridge()) {
        const raw    = await window.flutter_inappwebview.callHandler('getTransactions', { page, size });
        const parsed = typeof raw === 'string' ? JSON.parse(raw) : raw;
        if (!parsed?.success) throw new Error(parsed?.message || 'getTransactions failed');
        return parsed.data;
      }

      // ── Branch 2: iframe postMessage ──────────────────────────────────
      if (window.parent !== window) {
        const r = await _postAndWait(
          { type: 'TRANSACTION_REQUEST', page, size },
          'TRANSACTION_RESULT', 'TRANSACTION_ERROR',
          8000, 'TRANSACTION_REQUEST timed out'
        );
        if (r.result) return r.result.data;
        throw new Error(r.errorMessage || 'TRANSACTION_REQUEST failed');
      }

      throw new Error('getTransactions: 無可用入口（非 bridge / 非 iframe）');
    },

    /**
     * Navigate away from the game.
     * dest: 'back' | 'deposit' | 'withdraw'
     */
    navigate(dest) {
      const NAV = {
        back:     { handler: 'goBack',     msg: 'GO_BACK'     },
        deposit:  { handler: 'goDeposit',  msg: 'GO_DEPOSIT'  },
        withdraw: { handler: 'goWithdraw', msg: 'GO_WITHDRAW' },
      };
      const cfg = NAV[dest];
      if (!cfg) { console.warn('[flutter_adapter] unknown nav dest:', dest); return; }

      if (_isFlutterMode && _hasBridge()) {
        window.flutter_inappwebview.callHandler(cfg.handler).catch(() => {});
      } else if (window.parent !== window) {
        if (window.__gameOrigin) window.parent.postMessage({ type: cfg.msg }, window.__gameOrigin);
      } else {
        _log(`navigate(${dest}): 無可用入口（非 bridge / 非 iframe）`, 'warn');
      }
    },
  };

  console.log('[flutter_adapter] loaded, _isFlutterMode =', _isFlutterMode);
})();
