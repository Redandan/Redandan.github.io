(function(global) {
  'use strict';

  // Read-only startup binaries only. Application/API requests keep their
  // original fetch behavior. Release preparation inlines this in the HTML head.
  function create(config, fetchImpl, baseURI, reportFailure) {
    var events = [];
    var resources = new Map();
    var disposed = false;
    var failed = false;
    var controllers = new Set();
    var fontManifestUrl = new URL('assets/FontManifest.json', baseURI).href;
    var fontManifest = config.fontManifest ? JSON.stringify(config.fontManifest) : null;
    var clock = function() { return performance.now(); };
    config.resources.forEach(function(item) {
      resources.set(new URL(item.asset, baseURI).href, { item: item, promise: null });
    });

    function fault(code, message) {
      var error = new Error(message || code);
      error.code = code;
      return error;
    }

    async function download(item, mirror) {
      var url = new URL(item.asset, mirror ? config.mirrorBase : baseURI).href;
      var record = { asset: item.asset, attempt: mirror ? 'mirror' : 'primary',
        origin: new URL(url).origin, start: clock(), bytes: 0, maxGapMs: 0,
        status: 'pending' };
      events.push(record);
      var controller = new AbortController();
      controllers.add(controller);
      var idleTimer, totalTimer, reason, reader;
      var lastProgress = clock();
      function abort(code) {
        record.maxGapMs = Math.max(record.maxGapMs, clock() - lastProgress);
        reason = fault(code);
        controller.abort(reason);
      }
      function progress() {
        var now = clock();
        record.maxGapMs = Math.max(record.maxGapMs, now - lastProgress);
        record.lastProgress = now;
        lastProgress = now;
        clearTimeout(idleTimer);
        idleTimer = setTimeout(function() { abort('IDLE_TIMEOUT'); }, config.idleTimeoutMs);
      }
      progress();
      totalTimer = setTimeout(function() { abort('TOTAL_TIMEOUT'); }, config.totalTimeoutMs);
      try {
        var response = await fetchImpl(url, { method: 'GET', mode: 'cors',
          credentials: mirror ? 'omit' : 'same-origin',
          cache: mirror ? 'force-cache' : 'default', priority: 'high',
          signal: controller.signal });
        controller.signal.throwIfAborted();
        record.headersAt = clock();
        if (!response.ok || response.status !== 200) throw fault('HTTP_' + response.status);
        if (!response.body) throw fault('BODY_UNAVAILABLE');
        progress();
        reader = response.body.getReader();
        var chunks = [], length = 0;
        while (true) {
          var next = await reader.read();
          if (next.done) break;
          length += next.value.byteLength;
          record.bytes = length;
          if (length > item.bytes) throw fault('SIZE_MISMATCH');
          chunks.push(next.value);
          progress();
        }
        if (length !== item.bytes) throw fault('SIZE_MISMATCH');
        clearTimeout(idleTimer);
        var bytes = new Uint8Array(length), offset = 0;
        chunks.forEach(function(chunk) { bytes.set(chunk, offset); offset += chunk.byteLength; });
        var digest = new Uint8Array(await crypto.subtle.digest('SHA-256', bytes));
        var hash = Array.from(digest, function(v) { return v.toString(16).padStart(2, '0'); }).join('');
        if (hash !== item.sha256) throw fault('HASH_MISMATCH');
        controller.signal.throwIfAborted();
        record.status = 'ok';
        record.end = clock();
        record.sha256 = hash;
        return bytes;
      } catch (error) {
        controller.abort();
        if (reader) reader.cancel().catch(function() {});
        record.status = 'failed';
        record.error = (reason || error).code || (reason || error).name || 'FETCH_FAILED';
        record.end = clock();
        throw reason || error;
      } finally {
        clearTimeout(idleTimer);
        clearTimeout(totalTimer);
        controllers.delete(controller);
      }
    }

    function prepare(entry) {
      if (!entry.promise) {
        entry.promise = download(entry.item, false).catch(function() {
          if (disposed) throw fault('CANCELLED');
          return download(entry.item, true);
        });
        // Warm-up errors may occur before Flutter consumes this asset. Keep a
        // rejection handler attached and report the terminal state exactly once.
        entry.promise.catch(function(error) {
          if (!disposed && !failed) {
            failed = true;
            reportFailure(error);
          }
        });
      }
      return entry.promise;
    }

    function match(input, init) {
      var request = typeof Request !== 'undefined' && input instanceof Request ? input : null;
      var method = init && init.method || request && request.method || 'GET';
      if (method.toUpperCase() !== 'GET') return null;
      var headers = new Headers(init && init.headers || request && request.headers || {});
      if (headers.has('range')) return null;
      var url = request ? request.url : String(input);
      var absolute = new URL(url, baseURI).href;
      if (fontManifest && absolute === fontManifestUrl) return { metadata: true };
      return resources.get(absolute) || null;
    }

    return {
      events: events,
      start: function() { resources.forEach(prepare); },
      handles: function(input, init) { return !!match(input, init); },
      fetch: function(input, init) {
        var entry = match(input, init);
        if (!entry) return fetchImpl(input, init);
        if (entry.metadata) return Promise.resolve(new Response(fontManifest, {
          status: 200, headers: { 'Content-Type': 'application/json' }
        }));
        return prepare(entry).then(function(bytes) {
          // Fresh responses let both consumers read the verified bytes. The
          // network encoding header must not be copied onto decoded data.
          return new Response(bytes, { status: 200,
            headers: { 'Content-Type': entry.item.contentType } });
        });
      },
      release: function() {
        disposed = true;
        controllers.forEach(function(controller) { controller.abort(fault('CANCELLED')); });
        resources.clear();
      }
    };
  }
  global.AgoraStartupResources = { create: create };
})(globalThis);
