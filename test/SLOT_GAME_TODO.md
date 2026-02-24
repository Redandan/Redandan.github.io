# 電子遊戲功能未實現分析

> 生成時間：2026-02-22 | 基於代碼全量掃描

---

## 一、路由未啟用（阻塞入口）

**問題：** `app_router.dart` 中兩個路由仍被 `//` 注釋，玩家完全無法通過 URL 進入遊戲大廳。

```dart
// TODO: 解除注釋前先執行：
// dart run build_runner build --delete-conflicting-outputs
// 然後把下面兩段注釋去掉：

// AutoRoute(path: '/games',         page: SlotGameListRoute.page, guards: [...])
// AutoRoute(path: '/games/:gameId', page: SlotGameRoute.page,     guards: [...])
```

**修復步驟：**
1. 在 `lib/features/slot_game/presentation/pages/` 確認兩個 `@RoutePage()` 類名正確
2. 執行 `dart run build_runner build --delete-conflicting-outputs`
3. 解除 `app_router.dart` 第 558–568 行注釋

---

## 二、主頁沒有遊戲入口（用戶無法發現遊戲）

**問題：** `user_home_page.dart` 和 `unified_navigation_config.dart` 均沒有「電子遊戲」Tab 或入口按鈕。
玩家必須手動輸入 `/games` URL 才能訪問，等同於功能不存在。

**需要實現：**
- [ ] 在 `UnifiedTabType` enum 新增 `games` case
- [ ] 在 `user_home_page.dart` 的 `_buildUserPage` switch 加入 `SlotGameListPage`
- [ ] 在底部導航欄新增「遊戲🎮」Tab 圖標
- [ ] 或者：在現有主頁首屏新增「電子遊戲」Banner/快捷入口卡片

---

## 三、餘額是假的（未連接錢包）

**問題：** `slot_game_moon_dance.html` 中的餘額系統完全是本地假數據：

```js
const INITIAL_BALANCE = 10000;   // 固定假金額
let balance = INITIAL_BALANCE;

// 餘額歸零後自動補充（測試用）
if (balance < currentBet()) {
  balance = INITIAL_BALANCE;     // ← 作弊補充，生產環境不應存在
}
```

**需要實現：**
- [ ] Flutter → HTML JS Bridge：初始化時注入真實餘額
  ```js
  // HTML 側接收
  window.FlutterBridge = { setBalance: (v) => { balance = v; updateUI(); } };
  ```
- [ ] HTML → Flutter 通知：每次下注/中獎後回傳扣款/入帳請求
  ```js
  window.flutter_inappwebview.callHandler('onBet', { amount: currentBet() });
  window.flutter_inappwebview.callHandler('onWin', { amount: winAmount });
  ```
- [ ] `slot_game_page.dart` 添加 `addJavaScriptHandler` 接收並調用 Wallet API
- [ ] 移除自動補充邏輯（`balance = INITIAL_BALANCE` 那行）

---

## 四、中獎概率硬編碼（無法後台配置）

**問題：**
```js
const WIN_PROBABILITY = 0.5;    // 50% 中獎率 — 寫死
const MIN_MULTIPLIER  = 5;
const MULTIPLIER_RANGE = 12;    // 倍率 5x–17x — 寫死
```

**需要實現：**
- [ ] TG API（`TGApi`）新增接口：獲取遊戲賠率配置
- [ ] 在遊戲加載時通過 JS Bridge 注入概率/倍率配置
- [ ] 或由 Flutter 生成每次轉動結果，HTML 只做動畫展示（Server-side RNG）

---

## 五、遊戲記錄未存儲（無歷史/審計）

**問題：** 每次轉動的結果（下注、中獎金額、符號組合）完全沒有上報到後端。

**需要實現：**
- [ ] 定義 `SlotSpinResult` 數據模型
- [ ] HTML 在每次 spin 完成後 postMessage 給 Flutter
- [ ] Flutter 調用 `TGApi` 或新建 `SlotGameApi` 存儲每局記錄
- [ ] Admin 後台新增「遊戲記錄」管理頁（參考 `tg_player_rounds_page.dart` 模式）

---

## 六、遊戲大廳缺少真實預覽圖（只有 Emoji）

**問題：** `_GameCard` 的預覽區域只顯示 `game.previewEmoji`（一個 Emoji 字符）。

**需要實現：**
- [ ] 為每個遊戲截圖，存至 `web/games/thumbnails/<id>.jpg`
- [ ] `SlotGameModel` 新增 `thumbnailAsset` 字段
- [ ] `_GameCard` 改用 `Image.network` / `Image.asset` 顯示縮略圖
- [ ] 佔位方案：用 `previewEmoji` 作 fallback（已有，保留）

---

## 七、遊戲大廳缺少分類/篩選

**問題：** 目前只有「全部遊戲」一個分類，未來多款遊戲時難以瀏覽。

**需要實現（可延後）：**
- [ ] `SlotGameModel` 新增 `category` 字段（`'slot' | 'card' | 'arcade'`）
- [ ] `SlotGameListPage` 頂部新增分類 Tab 篩選欄
- [ ] 支持搜索

---

## 八、iOS 不支持 WebGPU

**問題：** `slot_game_moon_dance.html` 使用 `WebGPURenderer`，iOS Safari/WKWebView 截至 2026 年仍不支持 WebGPU。
目前已有 WebGL fallback 邏輯，但 3D 字符模型在 iOS 上可能渲染異常。

**需要實現：**
- [ ] 測試 iOS 設備上的實際效果
- [ ] 若 WebGL fallback 有問題，為 iOS 提供靜態角色圖片替代
- [ ] `SlotGamePage` 添加 `userAgent` 檢測，iOS 設備隱藏 3D canvas 區域

---

## 九、遊戲資產未優化（GLB 過大）

**問題：** `moon_dance.glb` 文件約 **2.3 MB**，通過網絡加載可能較慢（已有加載畫面緩解）。

**需要實現（可延後）：**
- [ ] 使用 `gltfpack` 壓縮 GLB（通常可減小 60–80%）
- [ ] 或改用 Draco 壓縮格式

---

## 優先級總結

| # | 項目 | 優先級 | 難度 |
|---|------|--------|------|
| 1 | 解除路由注釋 + 運行 build_runner | 🔴 P0 | 簡單 |
| 2 | 主頁遊戲入口 | 🔴 P0 | 簡單 |
| 3 | 餘額連接錢包 | 🔴 P0 | 中等 |
| 4 | 中獎概率後台配置 | 🟠 P1 | 中等 |
| 5 | 遊戲記錄存儲 | 🟠 P1 | 中等 |
| 6 | 真實預覽圖 | 🟡 P2 | 簡單 |
| 7 | 分類/篩選 | 🟡 P2 | 簡單 |
| 8 | iOS 兼容性 | 🟡 P2 | 中等 |
| 9 | GLB 壓縮 | 🟢 P3 | 需工具 |
