(function (root, factory) {
  var api = factory(root);
  if (typeof module === 'object' && module.exports) {
    module.exports = api;
  }
  root.AgoraUsdtLanding = api;
})(typeof window !== 'undefined' ? window : globalThis, function (root) {
  'use strict';

  var PRODUCTION_ORIGIN = 'https://agoramarket.purrtechllc.com';
  var OFFICIAL_TELEGRAM_ORIGIN = 'https://t.me';
  var OFFICIAL_BOT_PATH = '/agora_login_bot/store';
  var TELEMETRY_ENDPOINT =
    'https://agoramarketapi.purrtechllc.com/api/public/traffic/usdt-landing/events';
  var allowedPageIds = {
    USDT_COSTCO_TW: true,
    USDT_TELEGRAM_SHOP: true,
  };
  var allowedEvents = {
    USDT_LANDING_VIEW: true,
    USDT_MODULE_IMPRESSION: true,
    USDT_PRIMARY_CTA_CLICK: true,
    USDT_SECONDARY_CTA_CLICK: true,
    USDT_PRODUCT_CLICK: true,
    USDT_TG_OPEN_CLICK: true,
  };
  var allowedStartappCodes = {
    usdt_shop: true,
    catalog_costco_tw_household: true,
    catalog_costco_tw_pet: true,
    catalog_makro_th_household: true,
  };
  var moduleIds = {
    costco_products: 'PRODUCT_GRID',
    tg_products: 'PRODUCT_GRID',
  };
  var landingRoutePrefixes = {
    USDT_COSTCO_TW: 'usdt_costco_',
    USDT_TELEGRAM_SHOP: 'usdt_telegram_',
  };

  function bounded(value, maxLength) {
    if (value == null) return null;
    var cleaned = String(value).replace(/[\u0000-\u001f\u007f]/g, ' ').trim();
    if (!cleaned) return null;
    return cleaned.length <= maxLength ? cleaned : cleaned.slice(0, maxLength);
  }

  function eventId() {
    if (root.crypto && typeof root.crypto.randomUUID === 'function') {
      return root.crypto.randomUUID();
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (token) {
      var random = Math.floor(Math.random() * 16);
      var value = token === 'x' ? random : (random & 0x3) | 0x8;
      return value.toString(16);
    });
  }

  function ctaFor(pageId, eventName) {
    if (pageId === 'USDT_COSTCO_TW') {
      if (eventName === 'USDT_PRIMARY_CTA_CLICK') return 'COSTCO_BROWSE_PRODUCTS';
      if (eventName === 'USDT_SECONDARY_CTA_CLICK' ||
          eventName === 'USDT_TG_OPEN_CLICK') return 'COSTCO_OPEN_TELEGRAM';
    }
    if (pageId === 'USDT_TELEGRAM_SHOP') {
      if (eventName === 'USDT_PRIMARY_CTA_CLICK' ||
          eventName === 'USDT_TG_OPEN_CLICK') return 'TELEGRAM_OPEN_SHOP';
      if (eventName === 'USDT_SECONDARY_CTA_CLICK') return 'TELEGRAM_BROWSE_WEB';
    }
    return null;
  }

  function startappFor(code) {
    if (code === 'usdt_shop') return 'USDT_SHOP';
    if (code === 'catalog_costco_tw_household') {
      return 'CATALOG_COSTCO_TW_HOUSEHOLD';
    }
    if (code === 'catalog_costco_tw_pet') return 'CATALOG_COSTCO_TW_PET';
    if (code === 'catalog_makro_th_household') {
      return 'CATALOG_MAKRO_TH_HOUSEHOLD';
    }
    return /^product_\d+$/.test(code || '') ? 'PRODUCT' : null;
  }

  function landingRouteCode(pageId, startappCode) {
    var prefix = landingRoutePrefixes[pageId];
    if (!prefix || (!allowedStartappCodes[startappCode] &&
        !/^product_\d+$/.test(startappCode || ''))) {
      return null;
    }
    return prefix + startappCode;
  }

  function buildEvent(pageId, eventName, detail) {
    if (!allowedPageIds[pageId] || !allowedEvents[eventName]) return null;
    detail = detail || {};
    var startappCode = bounded(detail.startappCode, 64);
    var productId = /^\d+$/.test(String(detail.productId || ''))
      ? Number(detail.productId)
      : null;
    var payload = {
      eventId: eventId(),
      page: pageId,
      event: eventName,
    };

    if (eventName === 'USDT_MODULE_IMPRESSION') {
      payload.module = moduleIds[bounded(detail.moduleId, 64)];
      if (!payload.module) return null;
    } else if (eventName === 'USDT_PRIMARY_CTA_CLICK' ||
               eventName === 'USDT_SECONDARY_CTA_CLICK') {
      payload.cta = ctaFor(pageId, eventName);
      if (!payload.cta) return null;
    } else if (eventName === 'USDT_PRODUCT_CLICK') {
      if (productId == null) return null;
      payload.productId = productId;
    } else if (eventName === 'USDT_TG_OPEN_CLICK') {
      payload.cta = ctaFor(pageId, eventName);
      payload.startapp = startappFor(startappCode);
      if (!payload.cta || !payload.startapp) return null;
      if (payload.startapp === 'PRODUCT') {
        if (productId == null) return null;
        payload.productId = productId;
      }
    }
    return Object.freeze(payload);
  }

  function sendEvent(event, attempt) {
    return root.fetch(TELEMETRY_ENDPOINT, {
      method: 'POST',
      mode: 'cors',
      credentials: 'omit',
      cache: 'no-store',
      keepalive: true,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(event),
    }).then(function (response) {
      if (!response.ok) throw new Error('telemetry status ' + response.status);
      return response.json();
    }).catch(function (error) {
      if (attempt < 1) {
        return new Promise(function (resolve) {
          root.setTimeout(function () {
            resolve(sendEvent(event, attempt + 1));
          }, 250);
        });
      }
      return {
        accepted: false,
        duplicate: false,
        errorType: error && error.name ? error.name : 'TelemetryError',
      };
    });
  }

  function record(pageId, eventName, detail) {
    var event = buildEvent(pageId, eventName, detail);
    if (!event) return { accepted: false, sent: false, reason: 'not_allowlisted' };

    // The backend has no confirmed landing-event endpoint. Keep this contract
    // local until a real, reviewed endpoint exists; do not reinterpret the
    // existing page-visit endpoint as CTA or conversion telemetry.
    if (root && typeof root.CustomEvent === 'function' && root.dispatchEvent) {
      root.dispatchEvent(new root.CustomEvent('agora:usdt-landing-event', {
        detail: event,
      }));
    }
    if (!root.location || root.location.origin !== PRODUCTION_ORIGIN ||
        typeof root.fetch !== 'function') {
      return {
        accepted: true,
        sent: false,
        reason: 'non_production_origin',
        event: event,
      };
    }
    var delivery = sendEvent(event, 0);
    return {
      accepted: true,
      sent: true,
      reason: 'queued',
      event: event,
      delivery: delivery,
    };
  }

  function productFromEntry(entry, mode) {
    var atom = 'http://www.w3.org/2005/Atom';
    var titleNode = entry.getElementsByTagNameNS(atom, 'title')[0];
    var summaryNode = entry.getElementsByTagNameNS(atom, 'summary')[0];
    var updatedNode = entry.getElementsByTagNameNS(atom, 'updated')[0];
    var categoryNode = entry.getElementsByTagNameNS(atom, 'category')[0];
    var links = entry.getElementsByTagNameNS(atom, 'link');
    var href = '';
    for (var i = 0; i < links.length; i += 1) {
      if ((links[i].getAttribute('rel') || 'alternate') === 'alternate') {
        href = links[i].getAttribute('href') || '';
        break;
      }
    }

    var title = bounded(titleNode && titleNode.textContent, 180);
    var summary = bounded(summaryNode && summaryNode.textContent, 1200) || '';
    if (mode === 'costco' && !/(?:Costco Taiwan|台灣\s*Costco)/i.test(summary)) {
      return null;
    }

    var url;
    try {
      url = new URL(href);
    } catch (_) {
      return null;
    }
    var match = /^\/preview\/products\/(\d+)$/.exec(url.pathname);
    if (!title || url.origin !== PRODUCTION_ORIGIN || !match) return null;

    var updated = bounded(updatedNode && updatedNode.textContent, 64);
    if (updated && Number.isNaN(Date.parse(updated))) updated = null;
    return {
      id: match[1],
      title: title,
      href: url.toString(),
      category: bounded(categoryNode && categoryNode.getAttribute('label'), 80),
      updated: updated,
    };
  }

  function parseFeed(xmlText, mode, limit) {
    if (!root.DOMParser) return [];
    var documentNode = new root.DOMParser().parseFromString(xmlText, 'application/xml');
    if (documentNode.getElementsByTagName('parsererror').length) return [];
    var entries = documentNode.getElementsByTagNameNS(
      'http://www.w3.org/2005/Atom',
      'entry'
    );
    var products = [];
    for (var i = 0; i < entries.length && products.length < limit; i += 1) {
      var product = productFromEntry(entries[i], mode);
      if (product) products.push(product);
    }
    return products;
  }

  function officialTelegramUrl(startappCode, pageId) {
    var routedCode = landingRouteCode(pageId, startappCode);
    if (!routedCode) return null;
    var url = new URL(OFFICIAL_BOT_PATH, OFFICIAL_TELEGRAM_ORIGIN);
    url.searchParams.set('startapp', routedCode);
    return url.toString();
  }

  function createElement(tagName, className, text) {
    var node = root.document.createElement(tagName);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  }

  function bindRecordedLink(link, pageId, eventName, detail) {
    link.addEventListener('click', function () {
      record(pageId, eventName, detail);
    });
  }

  function updateStructuredData(scriptId, products) {
    var script = root.document.getElementById(scriptId);
    if (!script) return;
    try {
      var schema = JSON.parse(script.textContent);
      if (!schema.mainEntity || schema.mainEntity['@type'] !== 'ItemList') return;
      schema.mainEntity.itemListElement = products.map(function (product, index) {
        return {
          '@type': 'ListItem',
          position: index + 1,
          url: product.href,
          name: product.title,
        };
      });
      script.textContent = JSON.stringify(schema);
    } catch (_) {}
  }

  function renderProducts(options, products) {
    var container = root.document.getElementById(options.productContainerId);
    if (!container) return;
    container.replaceChildren();
    container.removeAttribute('aria-busy');

    products.forEach(function (product) {
      var article = createElement('article', 'product-card');
      var title = createElement('h3', '', product.title);
      article.appendChild(title);

      var meta = createElement('div', 'product-meta');
      if (product.category) meta.appendChild(createElement('span', 'pill', product.category));
      if (product.updated) {
        var time = createElement('time', '', '更新 ' + new Date(product.updated).toLocaleDateString('zh-TW'));
        time.dateTime = product.updated;
        meta.appendChild(time);
      }
      article.appendChild(meta);

      var actions = createElement('div', 'card-actions');
      var webLink = createElement('a', 'button', '查看商品');
      webLink.href = product.href;
      bindRecordedLink(webLink, options.pageId, 'USDT_PRODUCT_CLICK', {
        moduleId: options.moduleId,
        productId: product.id,
      });
      actions.appendChild(webLink);

      if (options.telegramProductLinks) {
        var startappCode = 'product_' + product.id;
        var telegramHref = officialTelegramUrl(startappCode, options.pageId);
        if (telegramHref) {
          var telegramLink = createElement('a', 'button', '在 Telegram 開啟');
          telegramLink.href = telegramHref;
          telegramLink.rel = 'noopener';
          bindRecordedLink(telegramLink, options.pageId, 'USDT_TG_OPEN_CLICK', {
            moduleId: options.moduleId,
            productId: product.id,
            startappCode: startappCode,
          });
          actions.appendChild(telegramLink);
        }
      }
      article.appendChild(actions);
      container.appendChild(article);
    });

    updateStructuredData(options.structuredDataId, products);
    record(options.pageId, 'USDT_MODULE_IMPRESSION', { moduleId: options.moduleId });
  }

  function failProducts(options) {
    var container = root.document.getElementById(options.productContainerId);
    if (!container) return;
    container.replaceChildren();
    container.removeAttribute('aria-busy');
    var status = createElement(
      'p',
      'product-status',
      '目前無法載入最新商品。請使用下方商城入口查看即時商品與供貨狀態。'
    );
    status.setAttribute('role', 'status');
    container.appendChild(status);
  }

  function loadProducts(options) {
    var feedUrl = new URL('/feed.xml', root.location && root.location.origin
      ? root.location.origin
      : PRODUCTION_ORIGIN);
    return root.fetch(feedUrl.toString(), {
      method: 'GET',
      credentials: 'omit',
      cache: 'no-store',
      headers: { Accept: 'application/atom+xml, application/xml;q=0.9' },
    }).then(function (response) {
      if (!response.ok) throw new Error('feed unavailable');
      return response.text();
    }).then(function (xmlText) {
      var products = parseFeed(xmlText, options.productMode, options.productLimit);
      if (!products.length) throw new Error('feed has no valid products');
      renderProducts(options, products);
      return products;
    }).catch(function () {
      failProducts(options);
      return [];
    });
  }

  function bindStaticLinks(options) {
    var links = root.document.querySelectorAll('[data-usdt-event]');
    Array.prototype.forEach.call(links, function (link) {
      var eventName = link.getAttribute('data-usdt-event');
      var startappCode = link.getAttribute('data-startapp-code');
      bindRecordedLink(link, options.pageId, eventName, {
        ctaId: link.getAttribute('data-cta-id'),
        moduleId: link.getAttribute('data-module-id'),
        startappCode: startappCode,
      });
      if (startappCode && eventName !== 'USDT_TG_OPEN_CLICK') {
        bindRecordedLink(link, options.pageId, 'USDT_TG_OPEN_CLICK', {
          ctaId: link.getAttribute('data-cta-id'),
          moduleId: link.getAttribute('data-module-id'),
          startappCode: startappCode,
        });
      }
    });
  }

  function init(options) {
    if (!options || !allowedPageIds[options.pageId]) return Promise.resolve([]);
    bindStaticLinks(options);
    record(options.pageId, 'USDT_LANDING_VIEW');
    return loadProducts(options);
  }

  return Object.freeze({
    productionOrigin: PRODUCTION_ORIGIN,
    officialBotPath: OFFICIAL_BOT_PATH,
    telemetryEndpoint: TELEMETRY_ENDPOINT,
    allowedPageIds: Object.freeze(allowedPageIds),
    allowedEvents: Object.freeze(allowedEvents),
    buildEvent: buildEvent,
    record: record,
    landingRouteCode: landingRouteCode,
    officialTelegramUrl: officialTelegramUrl,
    parseFeed: parseFeed,
    init: init,
  });
});
