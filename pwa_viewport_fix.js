/**
 * Legacy viewport fix stub.
 *
 * 你目前專案採用的唯一架構是：
 * - `visualViewport` 作為單一來源
 * - 只對 `#flutter-root` 做 transform（含 offsetTop filtering + delayed sync）
 * - 不再用 `--vh`/`ensureFlutterViewport`/`sceneHost fixed`/`canvas` 強制定位
 *
 * 此檔案保留僅為避免歷史引用或文件誤加入造成衝突；不再做任何修正。
 */
(function () {
  'use strict';
  // If the new synchronizer is installed, do nothing.
  if (window.__AGORA_VV_SYNC_INSTALLED) return;
  // Even if it isn't, we intentionally no-op to avoid reintroducing conflicting systems.
})();

