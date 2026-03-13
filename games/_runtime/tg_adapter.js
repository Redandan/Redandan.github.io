/**
 * tg_adapter.js
 *
 * Host adapter for Telegram Mini App entry point.
 * Implements the same window.__gameHost interface as flutter_adapter.js so
 * the game core (slot_game_moon_dance.html) needs no changes to support TG.
 *
 * Execution modes (auto-detected at runtime):
 *
 *   A. Flutter InAppWebView (bridge mode)
 *      Detected when window.flutter_inappwebview.callHandler is available.
 *      All API calls delegate to Dart SDK via bridge; JWT is managed by
 *      Flutter TokenManager (auto-refresh, no JS token storage needed).
 *
 *   B. Standalone Telegram browser (REST mode)
 *      No flutter_inappwebview available (e.g. pure Telegram WebApp context).
 *      All API calls go directly to the REST API with the locally stored JWT.
 *
 * To activate: load this script instead of flutter_adapter.js when the game
 * is opened inside Telegram (detect window.Telegram?.WebApp or ?tg=1 param).
 */
(function () {
  'use strict';

  const API_BASE = window.__AGORA_API_BASE_URL || 'https://agoramarketapi.purrtechllc.com/api';

  const _log = (msg, level = 'info') => {
    if (typeof window.__addLog === 'function') window.__addLog(msg, level);
    else console.log('[tg_adapter]', msg);
  };

  // ── Telegram WebApp bootstrap ─────────────────────────────────────────────

  const tg = window.Telegram?.WebApp;
  const _hasBridge = !!(window.flutter_inappwebview &&
    typeof window.flutter_inappwebview.callHandler === 'function');

  // Allow bridge-only mode (Flutter InAppWebView without Telegram browser).
  if (!tg && !_hasBridge) {
    console.error('[tg_adapter] Neither Telegram.WebApp nor Flutter bridge is available.');
    return;
  }

  if (tg) {
    tg.ready();
    tg.expand();
  }

  // ── Bridge helpers ────────────────────────────────────────────────────────

  function _bridge() {
    const b = window.flutter_inappwebview;
    return (b && typeof b.callHandler === 'function') ? b : null;
  }

  // Call a bridge handler and parse the JSON string response.
  // Returns { success, data, message } or throws on bridge/parse error.
  async function _callBridge(handlerName, arg) {
    const b = _bridge();
    if (!b) throw new Error('bridge unavailable');
    const raw = arg !== undefined
      ? await b.callHandler(handlerName, arg)
      : await b.callHandler(handlerName);
    return typeof raw === 'string' ? JSON.parse(raw) : raw;
  }

  // ── REST fallback helpers ─────────────────────────────────────────────────

  async function _exchangeJwtRest() {
    const resp = await fetch(`${API_BASE}/auth/telegram-webapp/exchange-jwt`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ initData: tg.initData }),
    });
    if (!resp.ok) throw new Error(`JWT exchange failed: HTTP ${resp.status}`);
    const json = await resp.json();
    const payload = json?.data ?? json;
    if (!payload?.token && !payload?.jwt) throw new Error('JWT exchange: no token in response');
    return payload;
  }

  async function _restFetch(path, options = {}) {
    const jwt = window.__agoraAuth?.token;
    const resp = await fetch(`${API_BASE}${path}`, {
      ...options,
      headers: {
        'Authorization': `Bearer ${jwt}`,
        'Content-Type': 'application/json',
        ...(options.headers || {}),
      },
    });
    if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
    const json = await resp.json();
    return json?.data ?? json;
  }

  // ── Pending-queue: race-safe _game_onHostInit delivery ───────────────────
  // bootstrap() is async; by the time it resolves the game module may not
  // have registered window._game_onHostInit yet. Retry every 50 ms.

  let _pendingInit   = null;
  let _initDelivered = false;

  function _deliverHostInit(data) {
    if (_initDelivered) return;
    if (typeof window._game_onHostInit === 'function') {
      _initDelivered = true;
      window._game_onHostInit(data);
    } else {
      _pendingInit = data;
      if (!_pendingInit._retryHandle) {
        _pendingInit._retryHandle = setInterval(function () {
          if (typeof window._game_onHostInit !== 'function') return;
          clearInterval(_pendingInit._retryHandle);
          if (_initDelivered) return;
          _initDelivered = true;
          window._game_onHostInit(_pendingInit);
        }, 50);
        setTimeout(function () { clearInterval(_pendingInit?._retryHandle); }, 20000);
      }
    }
  }

  function _deliverAuthError() {
    if (typeof window._game_showAuthError === 'function') {
      window._game_showAuthError();
      return;
    }
    const h = setInterval(function () {
      if (typeof window._game_showAuthError !== 'function') return;
      clearInterval(h);
      window._game_showAuthError();
    }, 50);
    setTimeout(function () { clearInterval(h); }, 20000);
  }

  // ── Bootstrap: auth → _game_onHostInit ───────────────────────────────────

  (async function bootstrap() {
    try {
      let jwt, balance, username;

      if (_bridge()) {
        if (tg && tg.initData) {
          // Mode A1: bridge + Telegram.WebApp — exchange initData via Dart SDK
          _log('bootstrap: bridge+TG mode', 'info');
          const result = await _callBridge('exchangeTgJwt', { initData: tg.initData });
          if (!result || !result.success) {
            throw new Error((result && result.message) || 'exchangeTgJwt failed');
          }
          const d = result.data || {};
          jwt      = d.jwt || '';
          balance  = Number(d.balanceUsdt ?? 0);
          username = d.username || tg.initDataUnsafe?.user?.first_name || '';
        } else {
          // Mode A2: bridge only (Flutter InAppWebView, user already authenticated)
          // Use getCurrentUser to get current session info — no initData needed.
          _log('bootstrap: bridge-only mode', 'info');
          const result = await _callBridge('getCurrentUser');
          if (!result || !result.success) {
            throw new Error((result && result.message) || 'getCurrentUser failed');
          }
          const info = (result.data && result.data.userInfo) || result.data || {};
          jwt      = ''; // JWT managed by Dart TokenManager
          balance  = Number(info.balance ?? 0);
          username = info.username || info.firstName || '';
        }
      } else {
        // Mode B: Standalone browser — raw REST exchange via Telegram.WebApp
        _log('bootstrap: REST mode (no bridge)', 'info');
        const payload = await _exchangeJwtRest();
        jwt      = payload.token || payload.jwt || '';
        balance  = Number(payload.balance ?? 0);
        username = payload.username || tg?.initDataUnsafe?.user?.first_name || '';
      }

      window.__agoraAuth = { token: jwt, firstName: username };
      _log(`auth OK — balance USDT ${balance.toFixed(2)}`, 'info');

      const tgSafeAreaTop = tg?.viewportStableHeight
        ? (tg.viewportHeight - tg.viewportStableHeight)
        : 0;

      _deliverHostInit({
        jwt,
        balance,
        demoMode:     balance < 0.25,
        username,
        tgSafeAreaTop,
      });
    } catch (err) {
      _log(`bootstrap failed: ${err}`, 'error');
      _deliverAuthError();
    }
  })();

  // ── window.__gameHost implementation ──────────────────────────────────────

  window.__gameHost = {

    async spin({ betIndex, betAmount, mode, clientSeed, nonce, clientRoundId }) {
      if (_bridge()) {
        // Mode A: bridge
        _log(`SPIN(bridge) → ${mode} betIdx=${betIndex}`, 'info');
        try {
          const result = await _callBridge('spin', {
            betIndex:      Number(betIndex) || 0,
            betAmount:     Number(betAmount) || 25,
            mode:          mode || 'REAL',
            clientSeed:    clientSeed || null,
            nonce:         nonce || null,
            clientRoundId: clientRoundId || null,
          });
          if (!result || !result.success) {
            _log(`SPIN(bridge) 失敗: ${result && result.message}`, 'error');
            return null;
          }
          const d = result.data || {};
          _log(`SPIN(bridge) OK: ×${d.multiplier}`, 'info');
          return {
            symbols:    Array.isArray(d.symbols)   ? d.symbols                        : null,
            symbolIds:  Array.isArray(d.symbolIds) ? d.symbolIds.map(v => Number(v)) : null,
            multiplier: Number(d.multiplier ?? 0),
            prize:      Number(d.winAmount ?? d.prize ?? 0),
            newBalance: Number(d.balance ?? d.newBalance ?? NaN),
            mode:       d.mode || mode,
          };
        } catch (err) {
          _log(`SPIN(bridge) 異常: ${err}`, 'error');
          return null;
        }
      }

      // Mode B: REST
      _log(`SPIN(REST) → ${mode} betIdx=${betIndex}`, 'info');
      try {
        const body = { betIndex, betAmount, mode, clientSeed, nonce };
        if (mode !== 'DEMO') body.clientRoundId = clientRoundId;
        const d = await _restFetch('/slot/spin', { method: 'POST', body: JSON.stringify(body) });
        if (!d || (!Array.isArray(d.symbols) && !Array.isArray(d.symbolIds))) {
          _log(`SPIN(REST) 缺少 symbols: ${JSON.stringify(d).slice(0, 120)}`, 'error');
          return null;
        }
        _log(`SPIN(REST) OK: ×${d.multiplier}`, 'info');
        return {
          symbols:    Array.isArray(d.symbols)   ? d.symbols                        : null,
          symbolIds:  Array.isArray(d.symbolIds) ? d.symbolIds.map(v => Number(v)) : null,
          multiplier: Number(d.multiplier ?? 0),
          prize:      Number(d.winAmount ?? d.prize ?? 0),
          newBalance: Number(d.balance ?? d.newBalance ?? NaN),
          mode:       d.mode || mode,
        };
      } catch (err) {
        _log(`SPIN(REST) 失敗: ${err}`, 'error');
        return null;
      }
    },

    async getRtp() {
      if (_bridge()) {
        try {
          const result = await _callBridge('getRtpTable');
          if (result && result.success) return result.data;
          _log(`getRtp(bridge) 失敗: ${result && result.message}`, 'warn');
        } catch (err) {
          _log(`getRtp(bridge) 異常: ${err}`, 'warn');
        }
        return null;
      }
      try {
        return await _restFetch('/slot/rtp');
      } catch (err) {
        _log(`getRtp(REST) 失敗: ${err}`, 'warn');
        return null;
      }
    },

    async getBalance() {
      if (_bridge()) {
        try {
          const result = await _callBridge('getCurrentUser');
          if (result && result.success) {
            const info = result.data?.userInfo ?? result.data ?? {};
            return Number(info.balance) || 0;
          }
          _log(`getBalance(bridge) 失敗: ${result && result.message}`, 'warn');
        } catch (err) {
          _log(`getBalance(bridge) 異常: ${err}`, 'warn');
        }
        return null;
      }
      try {
        const json     = await _restFetch('/auth/me');
        const userInfo = json?.userInfo ?? json;
        return Number(userInfo?.balance) || 0;
      } catch (err) {
        _log(`getBalance(REST) 失敗: ${err}`, 'warn');
        return null;
      }
    },

    async getTransactions(page, size = 10) {
      if (_bridge()) {
        try {
          const result = await _callBridge('getTransactions', { page, size });
          if (result && result.success) return result.data;
          throw new Error((result && result.message) || 'getTransactions failed');
        } catch (err) {
          _log(`getTransactions(bridge) 異常: ${err}`, 'warn');
          throw err;
        }
      }
      try {
        const d = await _restFetch('/transactions/list', {
          method: 'POST',
          body: JSON.stringify({ token: 'USDT', page, size }),
        });
        return {
          content:       d.content       ?? [],
          totalElements: d.totalElements ?? 0,
          hasMore:       (d.content?.length ?? 0) === size,
        };
      } catch (err) {
        _log(`getTransactions(REST) 失敗: ${err}`, 'warn');
        throw err;
      }
    },

    navigate(dest) {
      const b = _bridge();
      if (dest === 'back') {
        if (b) {
          b.callHandler('goBack').catch(function () {});
        } else {
          tg.close();
        }
        return;
      }
      if (dest === 'deposit') {
        if (b) {
          b.callHandler('goDeposit').catch(function () {});
        } else {
          tg.openLink(`${window.location.origin}/#/wallet/deposit`);
        }
        return;
      }
      if (dest === 'withdraw') {
        if (b) {
          b.callHandler('goWithdraw').catch(function () {});
        } else {
          tg.openLink(`${window.location.origin}/#/wallet/withdraw`);
        }
        return;
      }
    },
  };

  console.log('[tg_adapter] loaded');
})();
