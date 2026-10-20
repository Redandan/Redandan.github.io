// Cooperative legacy pages never change authentication authority in place.
// This protects newly loaded pages; old bundles and already-sent writes still
// require server-side retirement. localStorage checks are not an atomic lock.
(function (root) {
  'use strict';
  if (root.AgoraLegacyAuth) return;
  var host = root.document && root.document.currentScript &&
    root.document.currentScript.getAttribute('data-agora-auth-host');
  var nativeBridge = !!(root.flutter_inappwebview && typeof root.flutter_inappwebview.callHandler === 'function');
  if (host === 'game' && (new URLSearchParams(root.location.search).get('v2host') === '1' ||
      root._flutterNative === true || nativeBridge)) return;
  if (host === 'wallet' && nativeBridge) return;
  var retired = false;
  var listeners = new Set();
  // A cooperating legacy document also owns its original credential snapshot.
  // Another page's login/logout must stop late responses before V2 adoption.
  // Derived game handoffs use their parent runtime's separate ownership check.
  var credentialKeys = ['flutter.auth_token', 'flutter.refresh_token',
    'access_token', 'refresh_token', '_tg_store_jwt'];
  var credentials = Object.create(null);
  try {
    credentialKeys.forEach(function (key) { credentials[key] = root.localStorage.getItem(key); });
  } catch (_) { retired = true; }
  var keys = ['agora.webSession.v2', 'agora.webSession.adopted',
    'agora.webSession.legacyMigration', 'agora.guestCart.v2', 'agora.guestCart.adopted',
    // Canonical selection precedes adoption. Independent legacy documents
    // must retire during that interval too, including malformed selections.
    'agora.webSession.selection', 'agora.webSession.selectionJournal',
    'agora.webSession.sourceSelection'];

  function retire() {
    if (retired) return;
    retired = true;
    listeners.forEach(function (listener) { try { listener(); } catch (_) {} });
    listeners.clear();
  }
  function allows() {
    if (!retired) {
      try {
        if (keys.some(function (key) { return root.localStorage.getItem(key) !== null; }) ||
            credentialKeys.some(function (key) { return root.localStorage.getItem(key) !== credentials[key]; })) retire();
      } catch (_) { retire(); }
    }
    return !retired;
  }
  function requireActive() {
    if (allows()) return;
    var error = new Error('This page must reload before using the current login');
    error.name = 'LegacyAuthRetiredError';
    throw error;
  }
  function changed(event) {
    try {
      if (event.storageArea === root.localStorage && (event.key === null ||
          keys.indexOf(event.key) !== -1 && event.newValue !== null ||
          credentialKeys.indexOf(event.key) !== -1 && event.newValue !== credentials[event.key])) {
        retire();
      }
    } catch (_) { retire(); }
    allows();
  }
  if (typeof root.addEventListener === 'function') {
    root.addEventListener('storage', changed);
    root.addEventListener('pageshow', allows);
  }
  if (root.document && typeof root.document.addEventListener === 'function') {
    root.document.addEventListener('visibilitychange', allows);
  }
  function written(key, value) {
    try {
      if (credentialKeys.indexOf(key) !== -1) {
        if (root.localStorage.getItem(key) !== value) retire();
        else credentials[key] = value;
      }
    } catch (_) { retire(); }
    requireActive();
  }
  Object.defineProperty(root, 'AgoraLegacyAuth', { value: Object.freeze({
    allows: allows,
    requireActive: requireActive,
    onRetire: function (listener) {
      if (typeof listener !== 'function') throw new TypeError('Retirement listener required');
      if (!allows()) { listener(); return function () {}; }
      listeners.add(listener);
      return function () { listeners.delete(listener); };
    },
    setItem: function (key, value) {
      requireActive(); root.localStorage.setItem(key, value); written(key, String(value));
    },
    removeItem: function (key) {
      requireActive(); root.localStorage.removeItem(key); written(key, null);
    }
  }) });
  allows();
})(window);
