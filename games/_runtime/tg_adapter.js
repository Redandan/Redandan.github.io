/**
 * tg_adapter.js
 *
 * Host adapter for Telegram Mini App entry point.
 * Implements the same window.__gameHost interface as flutter_adapter.js so
 * the game core (slot_game_moon_dance.html) needs no changes to support TG.
 *
 * Expected flow:
 *   1. Telegram.WebApp fires "ready" and provides initData.
 *   2. This adapter exchanges initData for a JWT via POST /auth/tg/exchange.
 *   3. Calls window._game_onHostInit({ jwt, balance, demoMode, username }).
 *   4. All subsequent calls (spin, getRtp, getBalance, getTransactions, navigate)
 *      go directly to the REST API using that JWT.
 *
 * To activate: load this script instead of flutter_adapter.js when the game
 * is opened inside Telegram (e.g. detect window.Telegram?.WebApp or ?tg=1).
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
  if (!tg) {
    console.error('[tg_adapter] Telegram.WebApp is not available. Wrong entry point?');
    return;
  }

  tg.ready();
  tg.expand(); // request full-screen layout

  // ── Exchange Telegram initData for a backend JWT ──────────────────────────

  async function _exchangeJwt() {
    const resp = await fetch(`${API_BASE}/auth/tg/exchange`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ initData: tg.initData }),
    });
    if (!resp.ok) throw new Error(`JWT exchange failed: HTTP ${resp.status}`);
    const json = await resp.json();
    // Accept { data: { token, balance } } or { token, balance }
    const payload = json?.data ?? json;
    if (!payload?.token) throw new Error('JWT exchange: no token in response');
    return payload; // { token, balance, username, ... }
  }

  // ── Pending-queue: same race condition as flutter_adapter ────────────────
  // bootstrap() awaits an HTTP request, by which time the ES module may not
  // have reached the window._game_onHostInit definition yet.  Use the same
  // 50 ms retry pattern to guarantee delivery.

  let _pendingInit    = null;
  let _initDelivered  = false;

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
    // module not ready — retry
    const h = setInterval(function () {
      if (typeof window._game_showAuthError !== 'function') return;
      clearInterval(h);
      window._game_showAuthError();
    }, 50);
    setTimeout(function () { clearInterval(h); }, 20000);
  }

  // ── Bootstrap: get JWT and fire _game_onHostInit ──────────────────────────

  (async function bootstrap() {
    try {
      const payload = await _exchangeJwt();
      const jwt     = payload.token;
      const balance = Number(payload.balance ?? 0);

      window.__agoraAuth = { token: jwt, firstName: payload.username || tg.initDataUnsafe?.user?.first_name };
      _log(`TG auth OK — balance USDT ${balance.toFixed(2)}`, 'info');

      const tgSafeAreaTop = tg.viewportStableHeight
        ? (tg.viewportHeight - tg.viewportStableHeight)
        : 0;

      _deliverHostInit({
        jwt,
        balance,
        demoMode:     balance < 0.25,
        username:     window.__agoraAuth.firstName || '',
        tgSafeAreaTop,
      });
    } catch (err) {
      _log(`TG bootstrap failed: ${err}`, 'error');
      _deliverAuthError();
    }
  })();

  // ── Helpers ───────────────────────────────────────────────────────────────

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

  // ── window.__gameHost implementation ──────────────────────────────────────

  window.__gameHost = {

    async spin({ betIndex, betAmount, mode, clientSeed, nonce, clientRoundId }) {
      _log(`SPIN(TG-REST) → ${mode} betIdx=${betIndex}`, 'info');
      const body = { betIndex, betAmount, mode, clientSeed, nonce };
      if (mode !== 'DEMO') body.clientRoundId = clientRoundId;
      try {
        const d = await _restFetch('/slot/spin', { method: 'POST', body: JSON.stringify(body) });
        if (!d || (!Array.isArray(d.symbols) && !Array.isArray(d.symbolIds))) {
          _log(`SPIN(TG-REST) 缺少 symbols: ${JSON.stringify(d).slice(0, 120)}`, 'error');
          return null;
        }
        _log(`SPIN(TG-REST) OK: ×${d.multiplier}`, 'info');
        return {
          symbols:    Array.isArray(d.symbols)   ? d.symbols                        : null,
          symbolIds:  Array.isArray(d.symbolIds) ? d.symbolIds.map(v => Number(v)) : null,
          multiplier: Number(d.multiplier ?? 0),
          prize:      Number(d.winAmount ?? d.prize ?? 0),
          newBalance: Number(d.balance ?? d.newBalance ?? NaN),
          mode:       d.mode || mode,
        };
      } catch (err) {
        _log(`SPIN(TG-REST) 失敗: ${err}`, 'error');
        return null;
      }
    },

    async getRtp() {
      try {
        return await _restFetch('/slot/rtp');
      } catch (err) {
        _log(`getRtp(TG-REST) 失敗: ${err}`, 'warn');
        return null;
      }
    },

    async getBalance() {
      try {
        const json     = await _restFetch('/auth/me');
        const userInfo = json?.userInfo ?? json;
        return Number(userInfo?.balance) || 0;
      } catch (err) {
        _log(`getBalance(TG-REST) 失敗: ${err}`, 'warn');
        return null;
      }
    },

    async getTransactions(page, size = 10) {
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
        _log(`getTransactions(TG-REST) 失敗: ${err}`, 'warn');
        throw err; // re-throw so _loadTxnPage shows error UI
      }
    },

    navigate(dest) {
      // In Telegram Mini App, navigate via tg.close() for back, or open a URL for deposit/withdraw.
      if (dest === 'back') {
        tg.close();
        return;
      }
      const PATHS = { deposit: '/wallet/deposit', withdraw: '/wallet/withdraw' };
      const path  = PATHS[dest];
      if (path) {
        // Open in the Telegram browser or the host web app.
        tg.openLink(`${window.location.origin}/#${path}`);
      }
    },
  };

  console.log('[tg_adapter] loaded');
})();
