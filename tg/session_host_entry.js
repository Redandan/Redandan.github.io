// Runs synchronously after Telegram's SDK and before Flutter/analytics. The
// SDK keeps its launch proof in this document; this code persists no proof.
(function () {
  'use strict';
  var marker = document.querySelector('meta[name="agora-telegram-host"]');
  if (!marker) return;
  var host = marker.content;
  var location = window.location;
  // A reload/Back of an existing Flutter route belongs to that route and its
  // pending operation. Never restart a provider just because the SDK remains.
  if (String(location.hash || '').indexOf('#/') === 0 &&
      !/(?:^|[?&])tgWebApp(?:Data|Version|Platform)=/.test(location.search || '')) return;
  var tg = window.Telegram && window.Telegram.WebApp;
  var target;
  var routeTarget;
  if (host === 'store') {
    routeTarget = window.TgStoreRouting.resolveTarget({
      search: location.search,
      initDataUnsafe: tg && tg.initDataUnsafe,
    });
    target = routeTarget.targetPath;
  } else if (host === 'group/admin') {
    target = '/tg/group/admin';
    var start = String(tg && tg.initDataUnsafe && tg.initDataUnsafe.start_param || '');
    if (start.indexOf('partner_invite_') === 0 && start.length > 15) {
      target += '?invite=' + encodeURIComponent(start.substring(15));
    }
  } else if (host === 'slot') {
    // The Flutter parent owns Cookie API requests and the existing game bridge.
    target = '/games/moon_dance';
  } else {
    throw new Error('Unknown Telegram host');
  }
  // Routing data grants no identity. The route guard first checks the actual
  // Cookie and signed host correspondence; another account needs explicit login.
  var signedLaunch = tg && typeof tg.initData === 'string' && tg.initData.trim();
  var path = signedLaunch && location.origin !== 'https://redandan.github.io'
    ? '/login?returnTo=' + encodeURIComponent(target)
    : target;
  // Flutter reads the outer language before resolving a nested login returnTo.
  // Preserve only supported language hints, never the Telegram launch proof.
  var language = new URLSearchParams(location.search || '').get('lang');
  var query = target.indexOf('?');
  if (!language && query >= 0) language = new URLSearchParams(target.substring(query + 1)).get('lang');
  language = String(language || '').trim().replace(/_/g, '-').toLowerCase();
  var languageQuery = /^(en|en-us|zh|zh-tw|zh-hant|zh-cn|zh-hans|th|th-th)$/.test(language)
    ? '?lang=' + encodeURIComponent(language) : '';
  // Keep this document/SDK alive, remove launch data from the visible URL,
  // and retain the host path so subsequent reloads load the same Flutter shell.
  window.history.replaceState(null, '', location.pathname + languageQuery + '#' + path);

  // Only non-secret launch metadata reaches diagnostics/readiness. It grants no
  // identity and is never a replacement for the signed server-side attribution.
  if (host === 'store' && location.origin !== 'https://redandan.github.io') {
    window.AgoraTelegramSessionHost = Object.freeze({
      probe: routeTarget.probe,
      targetPath: /^\/home(?:\?|$)/.test(target) ? '/home' : '',
    });
    if (routeTarget.probe) {
      var diagnostic = {
        source: 'tg-store-ref-probe',
        protocol: 'web-session-v2',
        launchProofPresent: Boolean(signedLaunch),
        // These are routing hints, not evidence that login or referral capture succeeded.
        routingHints: {
          targetPath: target.split('?')[0],
          referrerGroupId: routeTarget.referrerGroupId,
        },
        authentication: 'Use the normal sign-in confirmation; this probe issues no credentials.',
      };
      document.addEventListener('DOMContentLoaded', function () {
        try {
          var dialog = document.createElement('dialog');
          dialog.id = 'agora-telegram-session-probe';
          dialog.style.cssText = 'box-sizing:border-box;width:calc(100% - 32px);max-width:560px;max-height:80vh;overflow:auto;padding:20px;border:1px solid #777;border-radius:12px;background:Canvas;color:CanvasText;color-scheme:light dark;';
          var title = document.createElement('h1'); title.textContent = 'TG Referrer Probe';
          var note = document.createElement('p');
          note.textContent = 'Routing diagnostics only. Sign-in has not been verified by this panel.';
          var pre = document.createElement('pre');
          pre.style.cssText = 'white-space:pre-wrap;overflow-wrap:anywhere;font-size:12px;';
          pre.textContent = JSON.stringify(diagnostic, null, 2);
          var copy = document.createElement('button'); copy.textContent = 'Copy Evidence';
          copy.onclick = function () {
            Promise.resolve().then(function () { return navigator.clipboard.writeText(pre.textContent); })
              .then(function () { copy.textContent = 'Copied'; }, function () { copy.textContent = 'Copy Failed'; });
          };
          var next = document.createElement('button'); next.textContent = 'Continue';
          next.style.marginLeft = '12px';
          next.onclick = function () { dialog.close(); dialog.remove(); };
          [title, note, pre, copy, next].forEach(function (node) { dialog.appendChild(node); });
          document.body.appendChild(dialog);
          dialog.showModal();
        } catch (_) { /* Optional diagnostics cannot block the normal app. */ }
      }, { once: true });
    } else if (typeof window.fetch === 'function') {
      // Preserve landing attribution without a legacy JWT or Telegram proof.
      // Failures are detached from navigation and retry only the same event ID.
      Promise.resolve().then(function () {
        var id = window.crypto && typeof window.crypto.randomUUID === 'function'
          ? window.crypto.randomUUID() : 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var n = Math.floor(Math.random() * 16); return (c === 'x' ? n : (n & 3) | 8).toString(16);
          });
        var event = window.TgStoreRouting.buildStartappReceivedEvent(routeTarget, id);
        if (!event) return;
        function send(attempt) {
          return Promise.resolve().then(function () {
            return window.fetch('https://agoramarketapi.purrtechllc.com/api/public/traffic/usdt-landing/events', {
              method: 'POST', mode: 'cors', credentials: 'omit', cache: 'no-store', keepalive: true,
              headers: { Accept: 'application/json', 'Content-Type': 'application/json' }, body: JSON.stringify(event),
            });
          }).then(function (response) { if (!response.ok) throw new Error('Telemetry unavailable'); })
            .catch(function () {
              if (attempt === 0) window.setTimeout(function () { send(1); }, 250);
            });
        }
        return send(0);
      }).catch(function () { /* Do not log request data or block entry. */ });
    }
  }
})();
