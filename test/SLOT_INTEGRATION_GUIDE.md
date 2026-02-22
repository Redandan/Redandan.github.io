# 🎰 月光舞台拉霸遊戲 — Flutter 整合指南

> 本文件說明如何將 `web/games/slot_game.html`（含 Three.js WebGPU 3D 模型）整合到現有的 Flutter 專案中。

---

## 一、整合架構概覽

```
Flutter App
│
├── flutter_inappwebview          ← 已在 pubspec.yaml
│       └── InAppWebView          ← 渲染 slot_game.html
│
├── web/games/
│       ├── slot_game.html        ← 主遊戲 HTML（已複製）
│       └── moon_dance.glb        ← 3D 模型（已複製）
│
├── lib/features/slot_game/
│       └── presentation/pages/
│               └── slot_game_page.dart   ← Flutter 頁面（已建立）
│
└── lib/core/router/app_router.dart       ← 需要加入路由
```

### 為何用 WebView 而不是重寫 Flutter？

| 方式 | 工作量 | 效果 |
|------|--------|------|
| 直接用 InAppWebView 包 HTML | **1天** | 完整 3D + WebGPU 效果 |
| 用 Flutter_three / 重寫 3D | 2–4週 | 需要放棄 WebGPU |
| 用 Unity / Cocos 插件 | 2週 | 需要額外 SDK 授權 |

**結論：WebView 是最快、最保真的整合方式。**

---

## 二、已完成的工作

- [x] `web/games/slot_game.html` — 遊戲 HTML（從 `web/test/emotion_arena.html` 複製）  
- [x] `web/games/moon_dance.glb` — 3D 舞台角色模型  
- [x] `lib/features/slot_game/presentation/pages/slot_game_page.dart` — Flutter 頁面  

---

## 三、需要手動完成的步驟

### 步驟 1：在 `app_router.dart` 加入路由

**位置**：`lib/core/router/app_router.dart`

**第一步**：加入 import（在其他 feature imports 附近）：
```dart
import 'package:agora_market/features/slot_game/presentation/pages/slot_game_page.dart';
```

**第二步**：在 `routes` list 中加入（建議放在 `/wallet` 附近）：
```dart
AutoRoute(
  path: '/games/slot',
  page: SlotGameRoute.page,
  guards: [_adminRouteGuard],
),
```

**第三步**：執行 build_runner 生成路由：
```bash
dart run build_runner build --delete-conflicting-outputs
```

---

### 步驟 2：加入 Flutter Assets（手機版需要）

在 `pubspec.yaml` 的 `flutter.assets` 區塊加入：
```yaml
flutter:
  assets:
    # ... 現有 assets ...
    - web/games/slot_game.html
    - web/games/moon_dance.glb
```

> ⚠️ 注意：`moon_dance.glb` 約 30MB，會增加 APK/IPA 大小。  
> 建議只在 Flutter Web 版本啟用，手機版可改用遠端 URL 載入。

---

### 步驟 3：Flutter Web 部署設定

遊戲使用 Three.js ES Module 從 CDN 載入（`https://cdn.jsdelivr.net/npm/three@0.160`），
所以需要確認 Content Security Policy（CSP）允許：

在 `web/index.html` 的 `<head>` 加入（如果有 CSP 限制的話）：
```html
<meta http-equiv="Content-Security-Policy" 
  content="default-src 'self'; 
           script-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net; 
           worker-src blob:;
           connect-src 'self' https://cdn.jsdelivr.net;
           style-src 'self' 'unsafe-inline';">
```

---

### 步驟 4：從其他頁面開啟遊戲

```dart
// 方式一：直接 navigate（需要 auto_route context）
context.router.push(const SlotGameRoute());

// 方式二：作為 bottom sheet 彈出（避免 AppBar 擋住）
showModalBottomSheet(
  context: context,
  isScrollControlled: true,
  backgroundColor: Colors.transparent,
  builder: (_) => const FractionallySizedBox(
    heightFactor: 0.95,
    child: ClipRRect(
      borderRadius: BorderRadius.vertical(top: Radius.circular(16)),
      child: SlotGamePage(),
    ),
  ),
);
```

---

## 四、平台相容性

| 平台 | 支援 | 說明 |
|------|------|------|
| Flutter Web (Chrome) | ✅ 完整 | 直接瀏覽器渲染，最佳效果 |
| Flutter Web (Safari) | ⚠️ 部分 | WebGPU 需 Safari 18+；舊版回退到 WebGL |
| Android (API 26+) | ✅ | 需 WebView v117+ 支援 WebGPU |
| Android (API < 26) | ⚠️ | WebGPU 不支援，自動回退 |
| iOS 17+ | ✅ | Safari WebGPU 支援 |
| iOS < 17 | ⚠️ | 自動回退模式 |
| Windows / macOS | ✅ | 通過 Flutter WebView 渲染 |

> 遊戲已內建 WebGPU 回退機制（`gpuMode = false`），所有平台均可執行，只是部分平台無 3D 效果。

---

## 五、遊戲與 Flutter 的通訊（選用）

如果需要從 Flutter 控制遊戲（例如：設定餘額、觸發特效），可以透過 JavaScript Bridge：

### Flutter → 遊戲（設定餘額）
```dart
_webViewController?.evaluateJavascript(
  source: 'window.setGameBalance(1000);',
);
```

### 在 `slot_game.html` 中暴露 API
在遊戲的 `<script>` 末尾加入：
```javascript
// Flutter 可呼叫的 API
window.setGameBalance = function(amount) {
  balance = amount;
  updateUI();
};
window.getGameBalance = function() {
  return balance;
};
```

### 遊戲 → Flutter（中獎通知）
```dart
// 在 SlotGamePage 的 InAppWebView 加入 handler
onWebViewCreated: (controller) {
  controller.addJavaScriptHandler(
    handlerName: 'onWin',
    callback: (args) {
      final winAmount = args[0] as int;
      // 處理中獎邏輯（記帳、通知等）
      debugPrint('Player won: $winAmount');
    },
  );
},
```

在遊戲 JS 中呼叫：
```javascript
// 在 showBigWin() 函數中加入
if (window.flutter_inappwebview) {
  window.flutter_inappwebview.callHandler('onWin', winAmount);
}
```

---

## 六、目錄結構（完整）

```
lib/
└── features/
    └── slot_game/
        └── presentation/
            └── pages/
                └── slot_game_page.dart   ← Flutter WebView 包裝頁面

web/
└── games/
    ├── slot_game.html                    ← 遊戲主檔案（Three.js + WebGPU）
    └── moon_dance.glb                    ← 3D 角色模型（~30MB）
```

---

## 七、已知限制

1. **WebGPU 在 WebView 上的支援** — Android WebView 的 WebGPU 支援從 Chrome 117 開始，舊設備會自動回退到無 3D 的模式（遊戲仍可執行）。
2. **GLB 模型大小** — `moon_dance.glb` 約 30MB，手機版建議從伺服器動態載入而不是打包進 App。
3. **跨域限制** — 如果遊戲需要呼叫後端 API，需確保 CORS 設定允許 Flutter WebView 的 origin。
4. **iOS Safari 限制** — WebGPU 需要 iOS 17.4+，較舊的 iOS 版本會使用 fallback renderer。

---

## 八、快速測試

部署 Flutter Web 版本後，直接訪問：
```
https://your-domain.com/games/slot_game.html
```

或在 Flutter 應用中：
```
https://your-domain.com/#/games/slot
```
