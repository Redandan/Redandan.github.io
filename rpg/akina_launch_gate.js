(function (root, factory) {
  var api = factory(root);
  if (typeof module === 'object' && module.exports) {
    module.exports = api;
  }
  root.AkinaLaunchGate = api;
})(typeof window !== 'undefined' ? window : globalThis, function (root) {
  'use strict';

  var DEFAULT_EXCHANGE_ENDPOINT =
    'https://agoramarketapi.purrtechllc.com/api/tg-games/akina/launch/exchange';
  var EXPECTED_GAME_KEY = 'akina';

  function denied(reason) {
    return { allowed: false, reason: reason };
  }

  function isPositiveInteger(value) {
    return Number.isInteger(value) && value > 0;
  }

  function parseTimestamp(value) {
    if (typeof value !== 'string' || value.trim() === '') return NaN;
    return Date.parse(value);
  }

  function validateExchangeResponse(value, nowMs) {
    if (!value || typeof value !== 'object' || Array.isArray(value)) {
      return denied('invalid_response');
    }
    if (
      value.gameplayAllowed !== true ||
      value.gameKey !== EXPECTED_GAME_KEY ||
      value.status !== 'ACTIVE' ||
      !isPositiveInteger(value.sessionId) ||
      !isPositiveInteger(value.entitlementId) ||
      typeof value.clientSessionId !== 'string' ||
      value.clientSessionId.trim() === ''
    ) {
      return denied('invalid_response');
    }

    var verifiedAt = parseTimestamp(value.verifiedAt);
    var sessionExpiresAt = parseTimestamp(value.sessionExpiresAt);
    if (
      !Number.isFinite(verifiedAt) ||
      !Number.isFinite(sessionExpiresAt) ||
      sessionExpiresAt <= verifiedAt ||
      sessionExpiresAt <= nowMs
    ) {
      return denied('expired_response');
    }

    return {
      allowed: true,
      sessionId: value.sessionId,
      entitlementId: value.entitlementId,
      clientSessionId: value.clientSessionId,
      sessionExpiresAt: value.sessionExpiresAt,
    };
  }

  async function authorize(options) {
    var input = options || {};
    var initData = typeof input.initData === 'string' ? input.initData : '';
    if (!initData.trim()) return denied('telegram_required');

    var fetchImpl = input.fetchImpl || root.fetch;
    if (typeof fetchImpl !== 'function') return denied('exchange_unavailable');

    var endpoint = input.endpoint || DEFAULT_EXCHANGE_ENDPOINT;
    var nowMs =
      typeof input.nowMs === 'number' && Number.isFinite(input.nowMs)
        ? input.nowMs
        : Date.now();

    try {
      var response = await fetchImpl(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ initData: initData }),
        cache: 'no-store',
        credentials: 'omit',
        redirect: 'error',
        referrerPolicy: 'no-referrer',
      });
      if (!response || response.ok !== true) {
        return denied('exchange_rejected');
      }

      var payload = await response.json();
      return validateExchangeResponse(payload, nowMs);
    } catch (_) {
      return denied('exchange_failed');
    }
  }

  async function authorizeFrame(options) {
    var input = options || {};
    var frame = input.frame;
    if (
      !frame ||
      typeof frame.getAttribute !== 'function' ||
      typeof frame.removeAttribute !== 'function' ||
      typeof frame.setAttribute !== 'function'
    ) {
      return denied('frame_unavailable');
    }

    var pendingSource = String(frame.getAttribute('data-src') || '').trim();
    frame.removeAttribute('src');
    frame.removeAttribute('data-src');
    if (!pendingSource) return denied('frame_unavailable');

    var result = await authorize(input);
    if (result.allowed === true) {
      frame.setAttribute('data-src', pendingSource);
    }
    return result;
  }

  return {
    authorize: authorize,
    authorizeFrame: authorizeFrame,
    validateExchangeResponse: validateExchangeResponse,
    defaultExchangeEndpoint: DEFAULT_EXCHANGE_ENDPOINT,
  };
});
