(function (root, factory) {
  var api = factory();
  if (typeof module === 'object' && module.exports) {
    module.exports = api;
  }
  root.AgoraStorefrontReadiness = api;
  if (root.document && typeof root.addEventListener === 'function') {
    api.install(root);
  }
})(typeof window !== 'undefined' ? window : globalThis, function () {
  'use strict';

  var STORAGE_KEY = '_agora_storefront_readiness_v1';
  var ENDPOINT =
    'https://agoramarketapi.purrtechllc.com/api/public/traffic/storefront-readiness/events';
  var MAX_AGE_MS = 10 * 60 * 1000;
  var MAX_DURATION_MS = 300000;
  var EVENTS = {
    attempt: 'STOREFRONT_OPEN_ATTEMPT',
    productsVisible: 'STOREFRONT_PRODUCTS_VISIBLE',
    catalogEmpty: 'STOREFRONT_CATALOG_EMPTY',
    catalogFailed: 'STOREFRONT_CATALOG_FAILED',
  };
  var DOM_EVENTS = {
    productsVisible: 'agora-storefront-products-visible',
    catalogEmpty: 'agora-storefront-catalog-empty',
    catalogFailed: 'agora-storefront-catalog-failed',
  };

  function uuid(rootObject) {
    if (rootObject.crypto && typeof rootObject.crypto.randomUUID === 'function') {
      return rootObject.crypto.randomUUID();
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (token) {
      var random = Math.floor(Math.random() * 16);
      var value = token === 'x' ? random : (random & 0x3) | 0x8;
      return value.toString(16);
    });
  }

  function storage(rootObject) {
    try {
      return rootObject.sessionStorage || null;
    } catch (_) {
      return null;
    }
  }

  function save(rootObject, context) {
    var target = storage(rootObject);
    if (!target) return false;
    try {
      target.setItem(STORAGE_KEY, JSON.stringify(context));
      return true;
    } catch (_) {
      return false;
    }
  }

  function clear(rootObject) {
    var target = storage(rootObject);
    if (!target) return;
    try { target.removeItem(STORAGE_KEY); } catch (_) {}
  }

  function read(rootObject, nowMs) {
    var target = storage(rootObject);
    if (!target) return null;
    try {
      var context = JSON.parse(target.getItem(STORAGE_KEY) || 'null');
      var age = nowMs - Number(context && context.startedAtMs);
      if (!context || typeof context.journeyId !== 'string' ||
          typeof context.attemptEventId !== 'string' ||
          !Number.isFinite(age) || age < 0 || age > MAX_AGE_MS) {
        clear(rootObject);
        return null;
      }
      return context;
    } catch (_) {
      clear(rootObject);
      return null;
    }
  }

  function beginLaunch(rootObject, options) {
    var targetPath = String((options && options.targetPath) || '');
    if ((options && options.probe) || !/^\/home(?:\?|$)/.test(targetPath)) {
      clear(rootObject);
      return null;
    }
    var context = {
      journeyId: uuid(rootObject),
      attemptEventId: uuid(rootObject),
      startedAtMs: Date.now(),
    };
    save(rootObject, context);
    return context;
  }

  function transport(rootObject, event, attempt) {
    if (!event || typeof rootObject.fetch !== 'function') return Promise.resolve(null);
    var headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    try {
      var token = String(
        (rootObject.localStorage &&
          (rootObject.localStorage.getItem('_tg_store_jwt') ||
            rootObject.localStorage.getItem('access_token'))) ||
        '',
      ).trim();
      if (token && token.length <= 4096 && !/[\u0000-\u001f\u007f]/.test(token)) {
        headers.Authorization = 'Bearer ' + token;
      }
    } catch (_) {}
    return Promise.resolve().then(function () {
      return rootObject.fetch(ENDPOINT, {
        method: 'POST',
        mode: 'cors',
        credentials: 'omit',
        cache: 'no-store',
        keepalive: true,
        headers: headers,
        body: JSON.stringify(event),
      });
    }).then(function (response) {
      if (!response.ok) throw new Error('status ' + response.status);
      return typeof response.json === 'function' ? response.json() : null;
    }).catch(function () {
      if (attempt >= 1) return null;
      return new Promise(function (resolve) {
        rootObject.setTimeout(function () {
          resolve(transport(rootObject, event, attempt + 1));
        }, 250);
      });
    });
  }

  function recordAttempt(rootObject, context) {
    if (!context) return Promise.resolve(null);
    return transport(rootObject, {
      eventId: context.attemptEventId,
      journeyId: context.journeyId,
      event: EVENTS.attempt,
    }, 0);
  }

  function recordOutcome(rootObject, eventType) {
    var nowMs = Date.now();
    var context = read(rootObject, nowMs);
    if (!context) return Promise.resolve(null);
    if (context.outcomeEventType && context.outcomeEventType !== eventType) {
      return Promise.resolve(null);
    }
    if (!context.outcomeEventId) context.outcomeEventId = uuid(rootObject);
    context.outcomeEventType = eventType;
    context.durationMs = Math.min(
      MAX_DURATION_MS,
      Math.max(0, Math.round(nowMs - Number(context.startedAtMs))),
    );
    save(rootObject, context);
    return Promise.all([
      recordAttempt(rootObject, context),
      transport(rootObject, {
        eventId: context.outcomeEventId,
        journeyId: context.journeyId,
        event: context.outcomeEventType,
        durationMs: context.durationMs,
      }, 0),
    ]);
  }

  function install(rootObject) {
    if (rootObject.__agoraStorefrontReadinessInstalled) return;
    rootObject.__agoraStorefrontReadinessInstalled = true;
    var context = read(rootObject, Date.now());
    if (context) recordAttempt(rootObject, context);
    rootObject.addEventListener(DOM_EVENTS.productsVisible, function () {
      recordOutcome(rootObject, EVENTS.productsVisible);
    });
    rootObject.addEventListener(DOM_EVENTS.catalogEmpty, function () {
      recordOutcome(rootObject, EVENTS.catalogEmpty);
    });
    rootObject.addEventListener(DOM_EVENTS.catalogFailed, function () {
      recordOutcome(rootObject, EVENTS.catalogFailed);
    });
  }

  return {
    STORAGE_KEY: STORAGE_KEY,
    ENDPOINT: ENDPOINT,
    EVENTS: EVENTS,
    DOM_EVENTS: DOM_EVENTS,
    beginLaunch: beginLaunch,
    read: read,
    recordAttempt: recordAttempt,
    recordOutcome: recordOutcome,
    install: install,
  };
});
