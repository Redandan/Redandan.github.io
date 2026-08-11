(function (root, factory) {
  var api = factory();
  if (typeof module === 'object' && module.exports) {
    module.exports = api;
  }
  root.TgStoreRouting = api;
})(typeof window !== 'undefined' ? window : globalThis, function () {
  var catalogRoutes = {
    catalog_costco_tw_pet: {
      catalogRoute: 'catalog_costco_tw_pet',
      sourcePlatform: 'COSTCO_TW',
      category: 'PET_SUPPLIES',
      inStock: 'true',
    },
    catalog_costco_tw_household: {
      catalogRoute: 'catalog_costco_tw_household',
      sourcePlatform: 'COSTCO_TW',
      inStock: 'true',
    },
    catalog_makro_th_household: {
      catalogRoute: 'catalog_makro_th_household',
      sourcePlatform: 'MAKRO_TH',
      inStock: 'true',
    },
  };
  var storefrontRoutes = {
    usdt_shop: '/home',
  };
  var landingRoutePrefixes = {
    usdt_costco_: 'USDT_COSTCO_TW',
    usdt_telegram_: 'USDT_TELEGRAM_SHOP',
  };

  function firstNonEmpty(values) {
    for (var i = 0; i < values.length; i += 1) {
      var value = values[i];
      if (value == null) continue;
      var trimmed = String(value).trim();
      if (trimmed) return trimmed;
    }
    return '';
  }

  function parseQuery(value) {
    var out = {};
    if (!value) return out;
    var search = String(value);
    if (search.charAt(0) === '?') search = search.slice(1);
    if (!search) return out;

    var params = new URLSearchParams(search);
    params.forEach(function (paramValue, key) {
      out[key] = paramValue;
    });
    return out;
  }

  function decodeRefToken(token) {
    var value = firstNonEmpty([token]);
    if (!value) return '';
    if (value.charAt(0) === 'm' && /^\d+$/.test(value.slice(1))) {
      return '-' + value.slice(1);
    }
    return value;
  }

  function splitRefSuffix(route) {
    var value = firstNonEmpty([route]);
    var match = /^(.*)_ref_([m-]?\d+)$/.exec(value);
    if (!match || !match[1]) {
      return { route: value, params: {} };
    }
    return {
      route: match[1],
      params: { ref: decodeRefToken(match[2]) },
    };
  }

  function splitEmbeddedRoute(route) {
    var value = firstNonEmpty([route]);
    if (!value) return { route: '', params: {} };

    var questionIndex = value.indexOf('?');
    var ampIndex = value.indexOf('&');
    var splitIndex = -1;
    if (questionIndex >= 0 && ampIndex >= 0) {
      splitIndex = Math.min(questionIndex, ampIndex);
    } else {
      splitIndex = Math.max(questionIndex, ampIndex);
    }
    if (splitIndex < 0) return splitRefSuffix(value);

    var suffix = splitRefSuffix(value.slice(0, splitIndex));
    return {
      route: suffix.route,
      params: Object.assign({}, suffix.params, parseQuery(value.slice(splitIndex + 1))),
    };
  }

  function normalizeRoute(route) {
    var value = firstNonEmpty([route]);
    if (!value) return '';
    return value.charAt(0) === '/' ? value.slice(1) : value;
  }

  function splitProbePrefix(route) {
    var value = firstNonEmpty([route]);
    if (value.indexOf('probe_') !== 0 || value.length <= 'probe_'.length) {
      return { route: value, probe: false };
    }
    return { route: value.slice('probe_'.length), probe: true };
  }

  function splitLandingRoute(route) {
    var value = firstNonEmpty([route]);
    var prefixes = Object.keys(landingRoutePrefixes);
    for (var i = 0; i < prefixes.length; i += 1) {
      var prefix = prefixes[i];
      if (value.indexOf(prefix) === 0 && value.length > prefix.length) {
        return {
          route: value.slice(prefix.length),
          landingPageId: landingRoutePrefixes[prefix],
        };
      }
    }
    return { route: value, landingPageId: null };
  }

  function buildStartappReceivedEvent(target, eventId) {
    if (!target || !target.landingPageId || !eventId) return null;
    var route = normalizeRoute(target.route);
    var startapp = null;
    var productId = null;
    if (route === 'usdt_shop') {
      startapp = 'USDT_SHOP';
    } else if (route.indexOf('product_') === 0) {
      var productValue = route.slice('product_'.length);
      if (!/^\d+$/.test(productValue)) return null;
      startapp = 'PRODUCT';
      productId = Number(productValue);
    } else if (route === 'catalog_costco_tw_household') {
      startapp = 'CATALOG_COSTCO_TW_HOUSEHOLD';
    } else if (route === 'catalog_costco_tw_pet') {
      startapp = 'CATALOG_COSTCO_TW_PET';
    } else if (route === 'catalog_makro_th_household') {
      startapp = 'CATALOG_MAKRO_TH_HOUSEHOLD';
    } else {
      return null;
    }
    var event = {
      eventId: eventId,
      page: target.landingPageId,
      event: 'USDT_STARTAPP_RECEIVED',
      startapp: startapp,
    };
    if (productId != null) event.productId = productId;
    return event;
  }

  function appendQuery(path, query) {
    var keys = Object.keys(query).filter(function (key) {
      return query[key] != null && String(query[key]).trim() !== '';
    });
    if (!keys.length) return path;
    var params = new URLSearchParams();
    keys.forEach(function (key) {
      params.set(key, String(query[key]));
    });
    return path + '?' + params.toString();
  }

  function targetPathForRoute(route, ref) {
    var normalized = normalizeRoute(route);
    var query = {};
    if (ref) query.ref = ref;

    if (normalized.indexOf('product_') === 0) {
      var productId = normalized.slice('product_'.length).trim();
      return productId ? appendQuery('/products/' + encodeURIComponent(productId), query) : '/home';
    }

    if (normalized.indexOf('seller_') === 0) {
      var sellerId = normalized.slice('seller_'.length).trim();
      return sellerId ? appendQuery('/store/' + encodeURIComponent(sellerId), query) : '/home';
    }

    if (normalized.indexOf('support_') === 0) {
      var token = normalized.slice('support_'.length).trim();
      return token
        ? appendQuery('/support/workbench', { token: token })
        : '/home';
    }

    var catalog = catalogRoutes[normalized];
    if (catalog) {
      return appendQuery('/home', Object.assign({}, catalog, query));
    }

    var storefrontPath = storefrontRoutes[normalized];
    if (storefrontPath) {
      return appendQuery(storefrontPath, query);
    }

    return '/home';
  }

  function resolveTarget(input) {
    input = input || {};
    var urlParams = parseQuery(input.search || '');
    var unsafe = input.initDataUnsafe || {};
    var startParam = firstNonEmpty([
      unsafe.start_param,
      input.startParam,
      urlParams.startapp,
      urlParams.start,
    ]);
    var embedded = splitEmbeddedRoute(startParam);
    var params = Object.assign({}, urlParams, embedded.params);
    var probe = splitProbePrefix(firstNonEmpty([embedded.route, startParam]));
    var landingRoute = splitLandingRoute(probe.route);
    var route = normalizeRoute(landingRoute.route);

    if (!route && params.type === 'product' && params.id) {
      route = 'product_' + params.id;
    } else if (!route && params.type === 'seller' && params.id) {
      route = 'seller_' + params.id;
    }

    var ref = firstNonEmpty([params.ref]);
    var targetPath = targetPathForRoute(route, ref);
    var referrerGroupId = /^-?\d+$/.test(ref) ? parseInt(ref, 10) : null;

    var target = {
      route: route,
      ref: ref,
      referrerGroupId: referrerGroupId,
      targetPath: targetPath,
      hashTarget: '/#' + targetPath,
      probe: probe.probe,
    };
    if (landingRoute.landingPageId) {
      target.landingPageId = landingRoute.landingPageId;
    }
    return target;
  }

  return {
    catalogRoutes: catalogRoutes,
    storefrontRoutes: storefrontRoutes,
    splitEmbeddedRoute: splitEmbeddedRoute,
    splitProbePrefix: splitProbePrefix,
    splitLandingRoute: splitLandingRoute,
    buildStartappReceivedEvent: buildStartappReceivedEvent,
    targetPathForRoute: targetPathForRoute,
    resolveTarget: resolveTarget,
  };
});
