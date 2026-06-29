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

    var catalog = catalogRoutes[normalized];
    if (catalog) {
      return appendQuery('/home', Object.assign({}, catalog, query));
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
    var route = normalizeRoute(probe.route);

    if (!route && params.type === 'product' && params.id) {
      route = 'product_' + params.id;
    } else if (!route && params.type === 'seller' && params.id) {
      route = 'seller_' + params.id;
    }

    var ref = firstNonEmpty([params.ref]);
    var targetPath = targetPathForRoute(route, ref);
    var referrerGroupId = /^-?\d+$/.test(ref) ? parseInt(ref, 10) : null;

    return {
      route: route,
      ref: ref,
      referrerGroupId: referrerGroupId,
      targetPath: targetPath,
      hashTarget: '/#' + targetPath,
      probe: probe.probe,
    };
  }

  return {
    catalogRoutes: catalogRoutes,
    splitEmbeddedRoute: splitEmbeddedRoute,
    splitProbePrefix: splitProbePrefix,
    targetPathForRoute: targetPathForRoute,
    resolveTarget: resolveTarget,
  };
});
