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
  const _isFlutterMode = _params.get('flutter') === '1' || _params.get('hosted') === '1' || !!window._flutterNative;
  const _isV2HttpOnlyHost = _params.get('v2host') === '1';
  const _isNativeHost = !_isV2HttpOnlyHost && (window._flutterNative === true ||
    !!(window.flutter_inappwebview && typeof window.flutter_inappwebview.callHandler === 'function'));
  const _legacyWebHost = !_isV2HttpOnlyHost && !_isNativeHost;
  let _retired = false;
  const _pendingMessages = new Set();
  const _pendingHttp = new Set();
  let _slotRecovery = {status: _isV2HttpOnlyHost ? 'loading' : 'ready'};
  let _recoveryInitialized = false;
  let _recoveryBusy = false;
  let _recoverySequence = 0;
  const _DEFAULT_API_BASE = 'https://agoramarketapi.purrtechllc.com/api';

  function _allowed() {
    return !_retired && (!_legacyWebHost || (!!window.AgoraLegacyAuth &&
      typeof window.AgoraLegacyAuth.onRetire === 'function' && window.AgoraLegacyAuth.allows()));
  }
  function _requireActive() {
    if (_allowed()) return;
    const error = new Error('This game must reload before continuing with the current login');
    error.name = 'LegacyAuthRetiredError';
    throw error;
  }
  async function _fetch(url, options = {}) {
    _requireActive();
    const controller = typeof AbortController === 'function' ? new AbortController() : null;
    const relay = () => controller?.abort();
    if (controller) {
      _pendingHttp.add(controller);
      if (options.signal?.aborted) controller.abort();
      else options.signal?.addEventListener('abort', relay, {once:true});
    }
    try {
      const response = await fetch(url, {...options, signal:controller?.signal ?? options.signal});
      _requireActive();
      return response;
    } finally {
      if (controller) _pendingHttp.delete(controller);
      options.signal?.removeEventListener('abort', relay);
    }
  }

  function _storageGet(key) {
    if (!_legacyWebHost || !_allowed()) return null;
    try {
      return window.localStorage.getItem(key);
    } catch (_) {
      return null;
    }
  }

  function _storageSet(key, value) {
    if (!_legacyWebHost || !_allowed()) return false;
    try {
      window.localStorage.setItem(key, value);
      return true;
    } catch (_) {
      return false;
    }
  }

  // ── Flutter native bridge helpers ─────────────────────────────────────────

  function _hasBridge() {
    if (_isV2HttpOnlyHost) return false;
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
    _requireActive();
    return new Promise((resolve) => {
      let settled = false;
      let tOut;
      const retired = () => finish({result:null,timedOut:false,errorMessage:'LEGACY_AUTH_RETIRED'});
      function finish(result) {
        if (settled) return;
        settled = true;
        window.removeEventListener('message', onMsg);
        clearTimeout(tOut);
        _pendingMessages.delete(retired);
        resolve(result);
      }
      function onMsg(e) {
        if (!_allowed()) { retired(); return; }
        if (e.origin !== window.__gameOrigin) return;
        if (_isV2HttpOnlyHost && e.source !== window.parent) return;
        if (e.source !== window.parent && e.source !== window && e.source !== null) return;
        const d = e.data || {};
        if (d.type !== okType && d.type !== errType) return;
        if (payload.requestId && d.requestId !== payload.requestId) return;
        if (d.type === okType) {
          finish({ result: d, timedOut: false, errorMessage: null });
        } else {
          finish({ result: null, timedOut: false, errorMessage: d.message || d.error || `${errType} received` });
        }
      }
      window.addEventListener('message', onMsg);
      _pendingMessages.add(retired);
      tOut = setTimeout(() => {
        if (settled) return;
        _log(timeoutMsg, 'warn');
        finish({ result: null, timedOut: true, errorMessage: timeoutMsg });
      }, timeoutMs);
      window.parent.postMessage(payload, window.__gameOrigin);
    });
  }

  function _getApiBase() {
    return _storageGet('_flutter_game_api_base') || window.__AGORA_API_BASE_URL || _DEFAULT_API_BASE;
  }

  function _setRecovery(state) {
    if (!_isV2HttpOnlyHost || !_allowed()) return;
    _slotRecovery = state && ['ready', 'pending', 'resolved'].includes(state.status)
      ? state : {status:'unavailable'};
    document.getElementById('agora-slot-recovery')?.remove();
    if (_slotRecovery.status === 'ready') { window._game_onRecoveryReady?.(); return; }
    window._game_onRecoveryBlocked?.();
    if (!document.body) {
      document.addEventListener('DOMContentLoaded', () => _setRecovery(_slotRecovery), {once:true});
      return;
    }
    const overlay = document.createElement('div');
    overlay.id = 'agora-slot-recovery';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-label', '旋轉結果確認');
    Object.assign(overlay.style, {position:'fixed', inset:'0', zIndex:'99999',
      display:'flex', alignItems:'center', justifyContent:'center', background:'rgba(0,0,0,.82)',
      padding:'max(16px, env(safe-area-inset-top)) max(16px, env(safe-area-inset-right)) max(16px, env(safe-area-inset-bottom)) max(16px, env(safe-area-inset-left))', boxSizing:'border-box'});
    const card = document.createElement('section');
    Object.assign(card.style, {width:'100%', maxWidth:'420px', maxHeight:'100%', overflowY:'auto',
      padding:'20px', boxSizing:'border-box', background:'#17152e', color:'#fff', borderRadius:'16px',
      font:'16px/1.5 system-ui', overflowWrap:'anywhere'});
    const title = document.createElement('h2'); title.textContent = '旋轉結果確認';
    Object.assign(title.style, {fontSize:'20px', margin:'0 0 12px'}); card.append(title);
    const text = document.createElement('p');
    const stateValue = _slotRecovery;
    text.textContent = stateValue.status === 'resolved'
      ? (stateValue.rejected ? '這一局未成立。確認後可以繼續遊戲。'
        : `上一局投注 ${stateValue.amount} USDT，派彩 ${stateValue.winAmount} USDT。確認結果後可以繼續遊戲。`)
      : stateValue.status === 'pending'
        ? `上一局 ${stateValue.amount} USDT 的結果尚未確認。先查詢結果；如需重試，將使用原本的同一局。`
        : '目前無法確認上一局的結果。請重新查詢後再繼續遊戲。';
    if (stateValue.status === 'pending' && stateValue.retryAvailable === false) {
      text.textContent = `上一局 ${stateValue.amount} USDT 的結果尚未確認。目前無法查詢原回合收據，請聯絡客服並保留操作編號：${stateValue.operationId}`;
    }
    card.append(text);
    const button = (label, action) => {
      const b = document.createElement('button'); b.type = 'button'; b.textContent = label;
      b.disabled = _recoveryBusy;
      Object.assign(b.style, {display:'block', width:'100%', marginTop:'12px', minHeight:'46px',
        padding:'10px 14px', border:'1px solid #928ce0', borderRadius:'10px', background:'#3d357e',
        color:'#fff', font:'inherit', cursor:'pointer'});
      b.addEventListener('click', action); card.append(b); return b;
    };
    if (stateValue.status === 'resolved') {
      button('確認結果並繼續', async () => {
        if (await _acknowledgeSpin(stateValue.operationId)) {
          await window._game_onRecoveryComplete?.();
        }
      });
    } else {
      button('重新查詢結果', () => _recoverSpin());
      if (stateValue.status === 'pending' && stateValue.retryAvailable !== false) {
        button(`重試同一局（${stateValue.amount} USDT）`, () => _recoverSpin(stateValue.operationId));
      }
    }
    const back = button('返回商城', () => window.__gameHost.navigate('back'));
    back.disabled = false;
    overlay.append(card); document.body.append(overlay);
  }

  async function _recoverSpin(operationId) {
    if (!_isV2HttpOnlyHost || _recoveryBusy || !_allowed()) return;
    _recoveryBusy = true; _setRecovery(_slotRecovery);
    const reply = await _postAndWait({type: operationId ? 'SPIN_RETRY_REQUEST' : 'SPIN_RECOVERY_REQUEST',
      requestId:`slot-recovery-${++_recoverySequence}`, ...(operationId ? {operationId} : {})},
      'SPIN_RECOVERY_RESULT', 'SPIN_RECOVERY_ERROR', 25000, 'Spin recovery timed out');
    _recoveryBusy = false;
    _setRecovery(reply.result || {status:'unavailable'});
  }

  async function _acknowledgeSpin(operationId) {
    if (!_isV2HttpOnlyHost || !operationId) return true;
    if (_recoveryBusy || !_allowed()) return false;
    _recoveryBusy = true;
    const reply = await _postAndWait({type:'SPIN_ACK_REQUEST', operationId,
      requestId:`slot-ack-${++_recoverySequence}`}, 'SPIN_ACK_RESULT', 'SPIN_ACK_ERROR',
      8000, 'Spin acknowledgement timed out');
    _recoveryBusy = false;
    if (!_allowed()) return false;
    if (reply.result) { _setRecovery({status:'ready'}); return true; }
    _setRecovery({status:'unavailable'});
    return false;
  }

  let _hostRtpData = null;

  function _cacheHostRtpData(data, source) {
    if (!_allowed()) return false;
    if (!data || typeof data !== 'object') return false;
    _hostRtpData = data;
    _storageSet('_flutter_game_rtp', JSON.stringify(data));
    _log('getRtp(host) cache from ' + source, 'info');
    return true;
  }

  async function _fetchRtpRest(timeoutMs) {
    if (!_allowed()) return null;
    if (_hostRtpData) return _hostRtpData;
    // V2 keeps credentials in its HttpOnly parent session.  Its sandbox must
    // never fall through to a legacy REST origin, even when HOST_INIT is late.
    if (_isV2HttpOnlyHost) return null;

    const cached = _storageGet('_flutter_game_rtp');
    if (cached) {
      try {
        const parsed = JSON.parse(cached);
        if (parsed && typeof parsed === 'object') {
          _hostRtpData = parsed;
          return parsed;
        }
      } catch (_) {}
    }

    const apiBase = _getApiBase();
    const gameId = _storageGet('_flutter_game_id') || 'moon_dance';
    const jwt = _storageGet('_flutter_game_jwt') || '';
    const headers = jwt ? { 'Authorization': 'Bearer ' + jwt } : {};
    const controller = typeof AbortController === 'function' ? new AbortController() : null;
    const timeout = controller ? setTimeout(() => controller.abort(), timeoutMs) : null;
    try {
      const resp = await _fetch(
        apiBase + '/slot/rtp?gameId=' + encodeURIComponent(gameId),
        { headers, signal: controller ? controller.signal : undefined }
      );
      if (!resp.ok) {
        _log('getRtp(rest) HTTP ' + resp.status, 'warn');
        return null;
      }
      const json = await resp.json();
      _requireActive();
      const data = json.data ?? json;
      if (data) {
        _storageSet('_flutter_game_rtp', JSON.stringify(data));
        return data;
      }
    } catch (err) {
      _log('getRtp(rest) error: ' + err, 'warn');
    } finally {
      if (timeout) clearTimeout(timeout);
    }
    return null;
  }

  let _rtpRestPrefetchPromise = null;

  function _getRtpRestPrefetch(timeoutMs) {
    if (!_allowed()) return Promise.resolve(null);
    if (_hostRtpData) return Promise.resolve(_hostRtpData);

    if (!_rtpRestPrefetchPromise) {
      _log('getRtp(rest) prefetch start', 'info');
      _rtpRestPrefetchPromise = _fetchRtpRest(timeoutMs).then(
        (data) => {
          if (data) _log('getRtp(rest) prefetch OK', 'info');
          else _rtpRestPrefetchPromise = null;
          return data;
        },
        (err) => {
          _rtpRestPrefetchPromise = null;
          _log('getRtp(rest) prefetch error: ' + err, 'warn');
          return null;
        },
      );
    }
    return _rtpRestPrefetchPromise;
  }

  if (_isFlutterMode && _legacyWebHost) {
    window.__gameHostRtpPrefetch = _getRtpRestPrefetch(2500);
  }

  // ── HOST_INIT listener ────────────────────────────────────────────────────

  window.__gameOrigin = window.location.origin;

  window.addEventListener('message', (e) => {
    if (!_allowed()) return;
    if (e.origin !== window.__gameOrigin) return;
    if (_isV2HttpOnlyHost && e.source !== window.parent) return;
    if (e.source !== window.parent && e.source !== window && e.source !== null) return;

    const { type } = e.data || {};
    if (_isV2HttpOnlyHost && type === 'HOST_RETIRED') { retire(); return; }

    if (type === 'HOST_LOG') {
      const level = String((e.data && e.data.level) || 'info').toLowerCase();
      const logType = level === 'error' ? 'error' : (level === 'warn' ? 'warn' : 'info');
      _log(String((e.data && e.data.message) || '[HOST_LOG]'), logType);
      return;
    }

    if (type === 'HOST_INIT') {
      if (_isV2HttpOnlyHost && !_recoveryInitialized) {
        _recoveryInitialized = true;
        _setRecovery(e.data.slotOperation || {status:'unavailable'});
      }
      const {
        jwt,
        balance,
        demoMode,
        username,
        tgSafeAreaTop,
        rtp,
        authMode,
        hostAuthenticated,
      } = e.data;
      _cacheHostRtpData(rtp, 'HOST_INIT');
      _deliverHostInit({
        jwt: _isV2HttpOnlyHost ? undefined : jwt,
        balance,
        demoMode,
        username,
        tgSafeAreaTop,
        authMode,
        hostAuthenticated,
      });
    }
    // SPIN_RESULT / SPIN_ERROR / BALANCE_RESULT / TRANSACTION_RESULT etc.
    // are captured inside _postAndWait resolvers.
  });

  // ── Pending-queue: HOST_INIT may arrive before the ES module finishes loading ──
  // Plain <script> runs before `type="module"` (which defers CDN fetches).
  // Queue the payload and replay it once the module registers _game_onHostInit.
  let _pendingInit = null;
  let _initDelivered = false;
  let _initRetryTimeout = null;

  function _deliverHostInit(data) {
    if (!_allowed()) return;
    if (_initDelivered) return; // idempotent — only the first HOST_INIT wins
    if (typeof window._game_onHostInit === 'function') {
      _initDelivered = true;
      window._game_onHostInit(data);
    } else {
      // Module not ready yet — store and retry every 50 ms (max 20 s)
      _pendingInit = data;
      if (!_pendingInit._retryHandle) {
        _pendingInit._retryHandle = setInterval(function () {
          if (!_allowed()) { clearInterval(_pendingInit?._retryHandle); return; }
          if (typeof window._game_onHostInit !== 'function') return;
          clearInterval(_pendingInit._retryHandle);
          if (_initDelivered) return;
          _initDelivered = true;
          window._game_onHostInit(_pendingInit);
        }, 50);
        // Safety: stop retrying after 20 s
        _initRetryTimeout = setTimeout(function () { clearInterval(_pendingInit?._retryHandle); }, 20000);
      }
    }
  }

  // ── Flutter self-host fallback (mobile Flutter Web / TG redirect path) ──────
  // On mobile Flutter Web, SlotGamePage navigates the browser directly to the
  // game URL (no parent frame, no bridge).  Dart writes the JWT and balance to
  // localStorage before navigating; this poller delivers HOST_INIT once found.
  // Also used when TG host redirects to Flutter PWA and Flutter navigates the
  // browser to the game URL on mobile.
  if (_isFlutterMode && _legacyWebHost) {
    var _selfHostRetries = 0;
    var _selfHostTimer = setInterval(function () {
      if (!_allowed()) { clearInterval(_selfHostTimer); return; }
      if (_initDelivered) { clearInterval(_selfHostTimer); return; }
      var jwt = _storageGet('_flutter_game_jwt') || '';
      if (jwt) {
        clearInterval(_selfHostTimer);
        var bal = parseFloat(_storageGet('_flutter_game_balance') || '0');
        var tgSafeTop = parseFloat(_storageGet('_flutter_game_tg_safe_top') || '0');
        _deliverHostInit({ jwt: jwt, balance: bal, demoMode: bal < 0.25, username: '',
          tgSafeAreaTop: isNaN(tgSafeTop) ? 0 : tgSafeTop });
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
    if (!_allowed()) return;
    if (window.parent !== window && window.__gameOrigin) {
      window.parent.postMessage({ type: 'GAME_READY' }, window.__gameOrigin);
    }
    console.log('[flutter_adapter] GAME_READY sent');
  }, 0);

  // ── window.__gameHost implementation ──────────────────────────────────────

  window.__gameHost = {
    isRetired() { return !_allowed(); },
    isRecoveryBlocked() { return _isV2HttpOnlyHost && _slotRecovery.status !== 'ready'; },
    openRecovery() { return _recoverSpin(); },
    acknowledgeSpin(operationId) { return _acknowledgeSpin(operationId); },

    /**
     * Execute a spin.
     * Returns a normalised SpinResult or null on failure.
     * { symbols, symbolIds, multiplier, prize, newBalance, mode }
     */
    async spin({ betIndex, betAmount, mode, clientSeed, nonce, clientRoundId }) {
      if (_isV2HttpOnlyHost && _slotRecovery.status !== 'ready') {
        _setRecovery(_slotRecovery); return null;
      }
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
          {
            type: 'SPIN_REQUEST',
            requestId: clientRoundId,
            clientRoundId,
            clientSeed,
            nonce: Number(nonce),
            betIndex,
            betAmount,
            mode,
          },
          'SPIN_RESULT', 'SPIN_ERROR',
          TIMEOUT_MS, `SPIN_REQUEST timed out after ${TIMEOUT_MS / 1000}s`
        );
        if (r.result) {
          const d = r.result;
          if (_isV2HttpOnlyHost && mode === 'REAL' && typeof d.operationId !== 'string') {
            _setRecovery({status:'unavailable'}); await _recoverSpin(); return null;
          }
          return {
            operationId: _isV2HttpOnlyHost ? d.operationId : undefined,
            symbols:    Array.isArray(d.symbols)    ? d.symbols                        : null,
            symbolIds:  Array.isArray(d.symbolIds)  ? d.symbolIds.map(v => Number(v)) : null,
            multiplier: Number(d.multiplier ?? 0),
            prize:      Number(d.winAmount ?? d.prize ?? 0),
            newBalance: Number(d.newBalance ?? d.balance ?? NaN),
            mode:       d.mode || mode,
          };
        }
        if (_isV2HttpOnlyHost) {
          _setRecovery({status:'unavailable'});
          await _recoverSpin();
        }
        if (!r.timedOut) _log(`SPIN(postMsg) SPIN_ERROR: ${r.errorMessage}`, 'error');
        return null;
      }

      // ── Branch 3: self-host REST (mobile Flutter Web / PWA direct nav) ─
      // Flutter navigated the browser directly to the game URL; no bridge or
      // iframe is available.  Call the spin API directly with the JWT that
      // Flutter cached in localStorage before navigating.
      if (_isFlutterMode && _legacyWebHost) {
        var apiBase = _storageGet('_flutter_game_api_base') || '';
        var jwt     = _storageGet('_flutter_game_jwt') || '';
        if (!apiBase || !jwt) {
          _log('SPIN: runtime credentials unavailable in this sandbox', 'error');
          return null;
        }
        _log(`SPIN(rest) → ${mode} bet=${betIndex}`, 'info');
        try {
          var gameId = _storageGet('_flutter_game_id') || 'moon_dance';
          var body = {
            gameId,
            betAmount,
            mode,
            demoMode: mode === 'DEMO',
            clientSeed: clientSeed || undefined,
            nonce:      nonce ? Number(nonce) : Date.now(),
          };
          if (mode !== 'DEMO') body.clientRoundId = clientRoundId || undefined;
          var resp = await _fetch(apiBase + '/slot/spin', {
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
          _requireActive();
          var d = (json.data ?? json) || {};
          if (!(Array.isArray(d.symbols) || Array.isArray(d.symbolIds))) {
            _log('SPIN(rest) invalid response', 'error');
            return null;
          }
          // Update cached balance so getBalance() stays fresh.
          if (d.balance != null) {
            _storageSet('_flutter_game_balance', String(d.balance));
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
        if (_legacyWebHost) {
          const restData = await _getRtpRestPrefetch(2500);
          if (restData) return restData;
        }

        const RTP_TIMEOUT_MS = 3000;
        const r = await _postAndWait(
          { type: 'RTP_REQUEST' },
          'RTP_RESULT', 'RTP_ERROR',
          RTP_TIMEOUT_MS, `RTP_REQUEST timed out after ${RTP_TIMEOUT_MS / 1000}s`
        );
        if (r.result?.data != null) return r.result.data;
        if (!r.timedOut && r.errorMessage) _log(`RTP_ERROR: ${r.errorMessage}`, 'warn');
        return null;
      }

      // ── Branch 3: localStorage cache or REST (mobile Flutter / TG hosted) ─
      if (_isFlutterMode && _legacyWebHost) {
        const restData = await _getRtpRestPrefetch(2500);
        if (restData) return restData;
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
      if (_isFlutterMode && _legacyWebHost) {
        var cached = parseFloat(_storageGet('_flutter_game_balance') || '0');
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

      // ── Branch 3: REST (mobile Flutter Web / TG hosted path) ─────────────
      if (_isFlutterMode && _legacyWebHost) {
        var apiBase = _storageGet('_flutter_game_api_base') || '';
        var jwt     = _storageGet('_flutter_game_jwt') || '';
        if (!apiBase || !jwt) throw new Error('getTransactions: runtime credentials unavailable');
        var resp = await _fetch(apiBase + '/transactions/list', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + jwt },
          body: JSON.stringify({ token: 'USDT', page: page || 0, size: size }),
        });
        if (!resp.ok) throw new Error('getTransactions HTTP ' + resp.status);
        var json = await resp.json();
        _requireActive();
        var d = json.data != null ? json.data : json;
        return {
          content:       (d && d.content)       || [],
          totalElements: (d && d.totalElements) || 0,
          hasMore:       ((d && d.content && d.content.length) || 0) === size,
        };
      }

      throw new Error('getTransactions: 無可用入口（非 bridge / 非 iframe）');
    },

    /**
     * Navigate away from the game.
     * dest: 'back' | 'deposit' | 'withdraw'
     */
    navigate(dest) {
      if (dest !== 'back') _requireActive();
      const NAV = {
        back:     { handler: 'goBack',     msg: 'GO_BACK'     },
        deposit:  { handler: 'goDeposit',  msg: 'GO_DEPOSIT'  },
        withdraw: { handler: 'goWithdraw', msg: 'GO_WITHDRAW' },
        transactions: { handler: 'goTransactions', msg: 'GO_TRANSACTIONS' },
      };
      const cfg = NAV[dest];
      if (!cfg) { console.warn('[flutter_adapter] unknown nav dest:', dest); return; }

      if (_isFlutterMode && _hasBridge()) {
        window.flutter_inappwebview.callHandler(cfg.handler).catch(() => {});
      } else if (window.parent !== window) {
        if (window.__gameOrigin) window.parent.postMessage({ type: cfg.msg }, window.__gameOrigin);
      } else if (_isFlutterMode) {
        // Branch 3: self-host / TG hosted — no bridge or parent frame.
        if (dest === 'back') {
          // Try TG Mini App close (native injection); fall back to history.back().
          try {
            if (window.Telegram && window.Telegram.WebApp) {
              window.Telegram.WebApp.close();
              return;
            }
          } catch (_) {}
          window.history.back();
        } else if (dest === 'deposit' || dest === 'withdraw') {
          // Navigate to the Flutter PWA route for deposit/withdraw.
          window.location.replace('/#/' + dest);
        }
      } else {
        _log(`navigate(${dest}): 無可用入口（非 bridge / 非 iframe）`, 'warn');
      }
    },
  };

  // Recheck after every asynchronous branch, including native-body parsing,
  // iframe replies and cached reads. Native/V2 retain their original authority.
  for (const name of ['spin', 'getRtp', 'getBalance', 'getTransactions']) {
    const original = window.__gameHost[name];
    window.__gameHost[name] = async function (...args) {
      _requireActive();
      try {
        const result = await original.apply(this, args);
        _requireActive();
        return result;
      } catch (error) { _requireActive(); throw error; }
    };
  }
  function retire() {
    if (_retired) return;
    _retired = true;
    clearInterval(_selfHostTimer);
    clearInterval(_pendingInit?._retryHandle);
    clearTimeout(_initRetryTimeout);
    _pendingInit = null;
    _slotRecovery = {status:'unavailable'};
    document.getElementById('agora-slot-recovery')?.remove();
    _hostRtpData = null;
    _rtpRestPrefetchPromise = null;
    window.__gameHostRtpPrefetch = null;
    delete window.__agoraAuth;
    delete window.__hostDemoMode;
    for (const finish of _pendingMessages) finish();
    for (const controller of _pendingHttp) controller.abort();
    if (typeof window._game_onHostRetired === 'function') window._game_onHostRetired();
  }
  if (_legacyWebHost) {
    if (typeof window.AgoraLegacyAuth?.onRetire === 'function') window.AgoraLegacyAuth.onRetire(retire);
    else retire();
  }

  console.log('[flutter_adapter] loaded, _isFlutterMode =', _isFlutterMode);
})();
