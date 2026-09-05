/* ============================================================================
 * game.js – Game Implementation  (JS layer)
 *
 * This is the Game Implementation layer that sits atop the Game Runtime
 * provided by index.html.  Copy this file when creating a new game, replace
 * the spin / win logic, and wire up your own canvas / Three.js scene.
 *
 * The Game Runtime exposes window._gameEngine with the following API:
 *
 *   engine.config          – merged manifest.config + Flutter _gameConfig
 *   engine.manifest        – parsed manifest.json
 *   engine.bridge.goBack() – navigate back to the Flutter Shell
 *   engine.bridge.isNative – true inside Flutter InAppWebView
 *   engine.setAutoSpin(v)  – enable / disable auto-spin
 *   engine.isAutoSpin()    – current auto-spin state
 *   engine.cancelAutoSpin()– cancel auto-spin; returns true if it was active
 *
 * window.cancelAutoSpin() is also available at window scope so the Flutter
 * Shell can cancel auto-spin via evaluateJavascript without referencing the
 * engine object directly.
 * ========================================================================= */
(function (engine) {
  'use strict';

  if (!engine) {
    console.error('[game.js] window._gameEngine not found — is index.html loaded?');
    return;
  }

  // ── Config (resolved by the Game Runtime from manifest + Flutter) ─────────
  const cfg = engine.config;
  const BETS = (function () {
    const min  = cfg.minBet  || 100;
    const max  = cfg.maxBet  || 5000;
    // Build a simple ascending bet ladder between min and max.
    const steps = [min, min * 2, min * 5, Math.round(max / 2), max];
    return [...new Set(steps.filter((v) => v <= max))].sort((a, b) => a - b);
  }());
  const WIN_PROBABILITY = cfg.winProbability || 0.35;
  const MIN_MULTIPLIER  = cfg.minMultiplier  || 2;
  const MAX_MULTIPLIER  = cfg.maxMultiplier  || 10;

  // ── State ──────────────────────────────────────────────────────────────────
  let balance   = cfg.initialBalance || 10000;
  let betIndex  = 0;
  let isSpinning = false;
  let autoTimer  = null;
  let pressTimer = null;

  // ── DOM refs ───────────────────────────────────────────────────────────────
  const balanceEl = document.getElementById('balance');
  const winEl     = document.getElementById('win-amount');
  const betEl     = document.getElementById('bet-display');
  const spinBtn   = document.getElementById('btn-spin');
  const backBtn   = document.getElementById('btn-back');
  const betUpBtn  = document.getElementById('btn-bet-up');
  const betDnBtn  = document.getElementById('btn-bet-down');

  // ── UI helpers ─────────────────────────────────────────────────────────────
  function refreshUI() {
    if (balanceEl) balanceEl.textContent = '¥' + balance.toLocaleString();
    if (betEl)     betEl.textContent     = '¥' + BETS[betIndex].toLocaleString();
  }

  // ── Spin logic ─────────────────────────────────────────────────────────────
  function doSpin() {
    if (isSpinning) return;
    if (balance < BETS[betIndex]) {
      // Replenish balance when out of funds.
      balance = cfg.initialBalance || 10000;
      refreshUI();
    }

    isSpinning = true;
    if (spinBtn) spinBtn.disabled = true;
    if (winEl)   winEl.textContent = '';

    balance -= BETS[betIndex];
    refreshUI();

    // TODO: replace setTimeout with your actual reel / animation logic.
    setTimeout(() => {
      isSpinning = false;
      if (spinBtn) spinBtn.disabled = false;

      if (Math.random() < WIN_PROBABILITY) {
        const multiplier = MIN_MULTIPLIER +
          Math.floor(Math.random() * (MAX_MULTIPLIER - MIN_MULTIPLIER + 1));
        const prize = BETS[betIndex] * multiplier;
        balance += prize;
        if (winEl) winEl.textContent = '+¥' + prize.toLocaleString();
        refreshUI();

        // Mobile haptic feedback on win.
        if (navigator.vibrate) navigator.vibrate([80, 40, 160]);
      }

      // Continue auto-spin after a short pause.
      if (engine.isAutoSpin()) {
        autoTimer = setTimeout(doSpin, 500);
      }
    }, 1500);
  }

  // ── Back button ────────────────────────────────────────────────────────────
  // First tap while auto-spin is active → cancel auto-spin only (stay on page).
  // Tap when not auto-spinning → navigate back to the Flutter Shell.
  if (backBtn) {
    backBtn.addEventListener('click', () => {
      clearTimeout(autoTimer);
      if (engine.cancelAutoSpin()) {
        updateAutoSpinOutline();
      } else {
        engine.bridge.goBack();
      }
    });
  }

  // ── Spin button ────────────────────────────────────────────────────────────
  if (spinBtn) {
    // Normal tap → single spin (only when auto-spin is off).
    spinBtn.addEventListener('click', () => {
      if (!engine.isAutoSpin()) doSpin();
    });

    // Long-press (≥ 600 ms) → toggle auto-spin.
    spinBtn.addEventListener('pointerdown', () => {
      pressTimer = setTimeout(() => {
        engine.setAutoSpin(true);
        updateAutoSpinOutline();
        if (!isSpinning) doSpin();
      }, 600);
    });
    ['pointerup', 'pointerleave', 'pointercancel'].forEach((ev) =>
      spinBtn.addEventListener(ev, () => clearTimeout(pressTimer))
    );
  }

  // Keep spin button outline in sync with auto-spin state.
  // Rather than patching the engine's API, we update the outline directly
  // wherever auto-spin is toggled or cancelled within this implementation.
  function updateAutoSpinOutline() {
    if (spinBtn) spinBtn.style.outline = engine.isAutoSpin() ? '3px solid #c0ccff' : '';
  }

  // ── Bet controls ───────────────────────────────────────────────────────────
  if (betUpBtn) {
    betUpBtn.addEventListener('click', () => {
      betIndex = Math.min(betIndex + 1, BETS.length - 1);
      refreshUI();
    });
  }
  if (betDnBtn) {
    betDnBtn.addEventListener('click', () => {
      betIndex = Math.max(betIndex - 1, 0);
      refreshUI();
    });
  }

  // ── Init ───────────────────────────────────────────────────────────────────
  refreshUI();

}(window._gameEngine));
