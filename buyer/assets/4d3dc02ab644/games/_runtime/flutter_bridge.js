/* ============================================================================
 * flutter_bridge.js — Shared Flutter ↔ WebView back-navigation bridge
 *
 * Exposes window._flutterBridge with two members:
 *   .isNative  — true when running inside a Flutter InAppWebView
 *   .goBack()  — navigate back to the Flutter Shell (multi-platform)
 *
 * Platform routing:
 *   Native InAppWebView (iOS)     → callHandler('goBack')         [no page-nav, safe on WKWebView]
 *   Native InAppWebView (Android) → flutter://goback URL scheme   [intercepted by Dart shouldOverrideUrlLoading]
 *   Flutter Web iframe            → postMessage to parent window  [handled by listenForGoBack in Dart]
 *   Mobile / standalone browser   → history.back()
 *
 * Usage (game HTML files):
 *   Load this script BEFORE any game script that calls goBack().
 *   Then call window._flutterBridge.goBack() to navigate back.
 *
 *   slot_game_moon_dance.html → <script src="_runtime/flutter_bridge.js"></script>
 *   _template/index.html      → <script src="../_runtime/flutter_bridge.js"></script>
 * ========================================================================= */
(function () {
  'use strict';

  window._flutterBridge = {
    /** True when running inside a native Flutter InAppWebView.
     *  window._flutterNative is injected by Dart at document-start via
     *  initialUserScripts (AT_DOCUMENT_START) with evaluateJavascript as fallback. */
    get isNative() { return !!window._flutterNative; },

    /** Navigate back to the Flutter Shell. */
    goBack() {
      if (window._flutterNative) {
        if (window.flutter_inappwebview) {
          // iOS WKWebView: callHandler sends a message without triggering
          // page navigation — safe on iOS 17+ where location.href can
          // cause WKWebView to reload the current page.
          window.flutter_inappwebview.callHandler('goBack');
        } else {
          // Android where the JS bridge object may be absent:
          // navigate to the custom scheme, intercepted by
          // shouldOverrideUrlLoading in slot_game_page.dart.
          window.location.href = 'flutter://goback';
        }
      } else if (window.parent !== window) {
        // Desktop Flutter Web: game runs in an InAppWebView iframe.
        // postMessage is handled by listenForGoBack() in Dart.
        try {
          window.parent.postMessage(
            { action: 'slotGameGoBack' },
            window.location.origin
          );
        } catch (_) {}
      } else {
        // Mobile browser (direct full-page navigation, not in iframe).
        window.history.back();
      }
    },
  };
}());
