/**
 * wallet_panel.js — Shared deposit / withdraw panel for Agora Market games.
 *
 * Usage (inside a <script type="module">):
 *
 *   import {
 *     initWalletPanel, openWalletPanel, closeWalletPanel,
 *     walletIsOpen, walletUpdateBalance,
 *   } from './_runtime/wallet_panel.js';
 *
 *   initWalletPanel({
 *     getToken:         () => window.__agoraAuth?.token || localStorage.getItem('_flutter_game_jwt') || '',
 *     getBalance:       () => window.__gameHost?.getBalance?.(),
 *     onBalanceChange:  (usdt) => { /* update your own balance variable *\/ },
 *     onLog:            (msg, level) => { /* optional logging hook *\/ },
 *     onBeforeOpen:     () => { /* e.g. close other panels *\/ },
 *   });
 *
 *   // Then just call:
 *   openWalletPanel('deposit');  // or 'withdraw'
 */

const _WALLET_API_BASE_DEFAULT = 'https://agoramarketapi.purrtechllc.com/api';

const _NETWORKS = {
  TRC20: { label: 'USDT (TRC20)', min: 10,  fee: 1 },
  ERC20: { label: 'USDT (ERC20)', min: 50,  fee: 5 },
};

// ── Module-private state ──────────────────────────────────────────────────────
let _opts    = {};
let _balance = 0; // USDT float, kept in sync by _refreshBalance()

const _st = {
  mode:                   'deposit',
  selectedProtocol:       'TRC20',
  pendingRecharge:        null,
  pendingWithdraw:        null,
  rechargePaymentUrl:     '',
  rechargeSuggestedAmounts: [],
  flashTimer:             null,
  countdownTimer:         null,
};

// DOM refs — populated inside initWalletPanel()
let _panel, _backdrop, _flashEl;
let _depositView, _withdrawView;
let _depositForm, _depositActive;
let _withdrawForm, _withdrawActive;
let _depositAmountInput, _withdrawAmountInput, _withdrawAddressInput;
let _depositSuggestedEl;

// ── CSS (injected once into <head>) ──────────────────────────────────────────
const _CSS = `
#wallet-backdrop{
  display:none; position:fixed; inset:0; z-index:710;
  background:rgba(0,0,0,.62); backdrop-filter:blur(2px);
}
#wallet-backdrop.open{ display:block; }
#wallet-panel{
  display:none; position:fixed; left:0; right:0; bottom:0; z-index:711;
  background:linear-gradient(180deg,#140d39 0%,#090720 100%);
  border-top:1.5px solid #6065d8; border-radius:18px 18px 0 0;
  flex-direction:column; height:min(76vh,620px);
  transform:translateY(100%); transition:transform .28s cubic-bezier(.4,0,.2,1);
}
#wallet-panel.open{ transform:translateY(0); }
#wallet-handle{
  width:54px; height:4px; border-radius:999px; margin:8px auto 2px;
  background:rgba(183,190,255,.45); flex-shrink:0;
}
#wallet-header{
  display:flex; align-items:center; justify-content:flex-end;
  padding:10px 14px 12px; border-bottom:1px solid rgba(96,101,216,.2);
  gap:10px; flex-shrink:0;
}
#wallet-mode-label{ font-size:13px; font-weight:800; color:#eef1ff; margin-right:auto; letter-spacing:.2px; }
#wallet-balance-chip{
  display:inline-flex; align-items:center; min-width:0;
  padding:5px 10px; border-radius:999px; background:rgba(86,95,220,.14);
  border:1px solid rgba(116,121,234,.18); color:#cfd5ff; font-size:11px; font-weight:700;
}
#wallet-close{
  background:none; border:none; color:#aab3ff; font-size:18px; cursor:pointer;
  padding:8px 12px; line-height:1; border-radius:8px;
}
#wallet-close:active{ background:rgba(96,101,216,.18); }
#wallet-flash{
  margin:10px 14px 10px; padding:9px 11px; border-radius:10px; font-size:12px;
  line-height:1.45; color:#dce0ff; background:rgba(72,84,177,.16);
  border:1px solid rgba(96,101,216,.18); flex-shrink:0;
}
#wallet-flash.hidden{ display:none; }
#wallet-flash.success{ color:#cbffd9; background:rgba(37,122,70,.28); border-color:rgba(84,220,127,.35); }
#wallet-flash.error{ color:#ffd1d8; background:rgba(105,32,55,.34); border-color:rgba(255,122,148,.32); }
#wallet-flash.warn{ color:#ffe7b5; background:rgba(108,77,17,.34); border-color:rgba(255,196,92,.28); }
#wallet-body{ flex:1; min-height:0; overflow-y:auto; padding:0 14px 14px; }
.wallet-view.hidden{ display:none; }
.wallet-card{
  background:rgba(12,10,36,.76); border:1px solid rgba(96,101,216,.14);
  border-radius:14px; padding:14px; box-shadow:none;
}
.wallet-card + .wallet-card{ margin-top:12px; }
.wallet-card-title{ color:#eef1ff; font-size:14px; font-weight:800; margin-bottom:8px; }
.wallet-card-sub{ color:#9ea8e6; font-size:12px; line-height:1.5; }
.wallet-meta{ color:#9ca7e1; font-size:12px; line-height:1.5; margin-top:6px; }
.wallet-field{ margin-top:12px; }
.wallet-label{ display:block; color:#c9d0ff; font-size:12px; font-weight:600; margin-bottom:6px; }
.wallet-input, .wallet-textarea{
  width:100%; border:none; outline:none; border-radius:12px;
  background:rgba(255,255,255,.05); color:#fff; font-size:15px;
  padding:13px 14px; border:1px solid rgba(96,101,216,.24);
}
.wallet-input::placeholder, .wallet-textarea::placeholder{ color:rgba(220,224,255,.28); }
.wallet-textarea{ min-height:72px; resize:vertical; }
.wallet-chip-row, .wallet-network-row, .wallet-action-row{
  display:flex; gap:8px; flex-wrap:wrap; margin-top:10px;
}
.wallet-chip, .wallet-network-btn, .wallet-secondary-btn, .wallet-primary-btn{
  border:none; cursor:pointer; border-radius:10px;
}
.wallet-chip{
  background:rgba(48,56,120,.35); color:#c5cdff; padding:8px 12px;
  border:1px solid rgba(96,101,216,.26); font-size:12px; font-weight:700;
}
.wallet-chip:active{ background:rgba(96,101,216,.26); }
.wallet-network-btn{
  flex:1 1 140px; text-align:left; padding:10px 12px;
  background:rgba(30,35,90,.2); color:#dbe0ff;
  border:1px solid rgba(96,101,216,.22); border-radius:12px;
}
.wallet-network-btn.active{ background:rgba(86,95,220,.12); border-color:#7479ea; }
.wallet-network-name{ font-size:13px; font-weight:700; }
.wallet-network-meta{ color:#95a0df; font-size:11px; margin-top:4px; }
.wallet-hint-row{
  display:flex; justify-content:space-between; gap:8px; margin-top:8px;
  color:#9aa5df; font-size:11px;
}
.wallet-primary-btn{
  width:100%; padding:12px 14px; margin-top:14px;
  background:#6166da; color:#fff; font-size:14px; font-weight:800; letter-spacing:.3px; border-radius:10px;
}
.wallet-primary-btn:disabled{ opacity:.45; cursor:default; }
.wallet-danger-btn{
  width:100%; padding:11px 14px; margin-top:10px;
  background:rgba(130,25,50,.24); color:#ffb3c1;
  border:1px solid rgba(255,100,130,.28); border-radius:10px;
  font-size:13px; font-weight:700; cursor:pointer;
}
.wallet-danger-btn:active{ background:rgba(130,25,50,.42); }
.wallet-danger-btn:disabled{ opacity:.4; cursor:default; }
.wallet-secondary-btn{
  flex:1; padding:10px 12px; background:rgba(40,45,95,.24); color:#c7d0ff;
  border:1px solid rgba(96,101,216,.3); font-size:12px; font-weight:700;
}
.wallet-secondary-btn:disabled{ opacity:.4; cursor:default; }
.wallet-divider{ height:1px; margin:12px 0; background:rgba(96,101,216,.18); }
.wallet-empty-note{ color:#9ca7e1; font-size:12px; line-height:1.55; }
.wallet-badge{
  display:inline-flex; align-items:center; gap:6px; padding:5px 9px; border-radius:999px;
  font-size:11px; font-weight:800; letter-spacing:.3px;
  background:rgba(255,196,92,.16); color:#ffd07a; border:1px solid rgba(255,196,92,.18);
}
.wallet-badge.done{ background:rgba(84,220,127,.16); color:#9af0b0; border-color:rgba(84,220,127,.2); }
.wallet-badge.fail{ background:rgba(255,122,148,.15); color:#ffb3c1; border-color:rgba(255,122,148,.2); }
.wallet-address-box{
  margin-top:10px; padding:12px; border-radius:12px;
  background:rgba(7,8,28,.9); border:1px dashed rgba(115,126,230,.34);
}
.wallet-address-box code{ color:#f2f4ff; font-size:12px; word-break:break-all; }
.wallet-countdown{ margin-top:8px; color:#ffd07a; font-size:12px; font-weight:700; }
.wallet-inline-note{ margin-top:8px; color:#96a0dd; font-size:11px; line-height:1.5; }
@media (max-width:480px){
  #wallet-panel{ height:min(90vh,780px); }
}
`;

// ── HTML (injected once into <body>) ─────────────────────────────────────────
const _HTML = `
<div id="wallet-backdrop"></div>
<div id="wallet-panel">
  <div id="wallet-handle"></div>
  <div id="wallet-header">
    <span id="wallet-mode-label">充值</span>
    <span id="wallet-balance-chip">USDT —</span>
    <button id="wallet-close" aria-label="關閉">&#10005;</button>
  </div>
  <div id="wallet-flash" class="hidden"></div>
  <div id="wallet-body">
    <div id="wallet-deposit-view" class="wallet-view">
      <div id="wallet-deposit-active" class="wallet-card hidden">
        <span class="wallet-badge" id="wallet-deposit-status">待處理</span>
        <div class="wallet-meta" id="wallet-deposit-meta">—</div>
        <div class="wallet-address-box">
          <div class="wallet-label">收款地址</div>
          <code id="wallet-deposit-address">—</code>
        </div>
        <div class="wallet-countdown" id="wallet-deposit-countdown"></div>
        <div class="wallet-action-row">
          <button class="wallet-secondary-btn" id="wallet-deposit-copy">複製地址</button>
          <button class="wallet-secondary-btn hidden" id="wallet-deposit-open-url">打開支付連結</button>
        </div>
        <button class="wallet-danger-btn" id="wallet-deposit-cancel">取消本次充值</button>
      </div>
      <div id="wallet-deposit-form" class="wallet-card">
        <div class="wallet-field">
          <label class="wallet-label" for="wallet-deposit-amount-input">充值金額</label>
          <input class="wallet-input" id="wallet-deposit-amount-input" inputmode="decimal" placeholder="輸入 USDT 金額" />
        </div>
        <div class="wallet-chip-row">
          <button class="wallet-chip" data-deposit-amount="10">+10</button>
          <button class="wallet-chip" data-deposit-amount="50">+50</button>
          <button class="wallet-chip" data-deposit-amount="100">+100</button>
          <button class="wallet-chip" data-deposit-amount="500">+500</button>
          <button class="wallet-chip" data-deposit-amount="1000">+1000</button>
        </div>
        <div id="wallet-deposit-suggested" class="wallet-chip-row hidden"></div>
        <button class="wallet-primary-btn" id="wallet-deposit-create">建立充值</button>
      </div>
    </div>
    <div id="wallet-withdraw-view" class="wallet-view hidden">
      <div id="wallet-withdraw-active" class="wallet-card hidden">
        <span class="wallet-badge" id="wallet-withdraw-status">待處理</span>
        <div class="wallet-meta" id="wallet-withdraw-meta">—</div>
        <div class="wallet-address-box">
          <div class="wallet-label">提款地址</div>
          <code id="wallet-withdraw-address">—</code>
        </div>
      </div>
      <div id="wallet-withdraw-form" class="wallet-card">
        <div class="wallet-field">
          <label class="wallet-label" for="wallet-withdraw-amount-input">提款金額</label>
          <input class="wallet-input" id="wallet-withdraw-amount-input" inputmode="decimal" placeholder="輸入 USDT 金額" />
          <div class="wallet-hint-row" style="margin-top:6px">
            <span>可用餘額</span>
            <span id="wallet-avail-balance">USDT —</span>
          </div>
        </div>
        <div class="wallet-chip-row">
          <button class="wallet-chip" data-withdraw-amount="100">100</button>
          <button class="wallet-chip" data-withdraw-amount="500">500</button>
          <button class="wallet-chip" data-withdraw-amount="1000">1000</button>
          <button class="wallet-chip" data-withdraw-amount="5000">5000</button>
        </div>
        <div class="wallet-field">
          <label class="wallet-label" for="wallet-withdraw-address-input">提款地址</label>
          <input class="wallet-input" id="wallet-withdraw-address-input" placeholder="輸入收款地址" autocomplete="off" spellcheck="false" />
        </div>
        <div class="wallet-field">
          <span class="wallet-label">選擇網路</span>
          <div class="wallet-network-row">
            <button class="wallet-network-btn active" data-protocol="TRC20">
              <div class="wallet-network-name">USDT (TRC20)</div>
              <div class="wallet-network-meta">最小 10 USDT / 手續費 1 USDT</div>
            </button>
            <button class="wallet-network-btn" data-protocol="ERC20">
              <div class="wallet-network-name">USDT (ERC20)</div>
              <div class="wallet-network-meta">最小 50 USDT / 手續費 5 USDT</div>
            </button>
          </div>
          <div class="wallet-hint-row">
            <span id="wallet-withdraw-min">最小提現：10 USDT</span>
            <span id="wallet-withdraw-fee-hint">手續費：1 USDT</span>
          </div>
        </div>
        <button class="wallet-primary-btn" id="wallet-withdraw-create">提交提款</button>
      </div>
    </div>
  </div>
</div>
`;

// ── Helpers ───────────────────────────────────────────────────────────────────
function _log(msg, level = 'info') { _opts.onLog?.(msg, level); }

function _apiBase() {
  return localStorage.getItem('_flutter_game_api_base') || (_opts.apiBase || _WALLET_API_BASE_DEFAULT);
}

function _token() { return _opts.getToken?.() || ''; }

function _fmt(value, currency = 'USDT') {
  const n = Number(value || 0);
  return `${currency} ${Number.isFinite(n) ? n.toFixed(2) : '0.00'}`;
}

function _fmtTime(iso) {
  if (!iso) return '—';
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return '—';
  const pad = n => String(n).padStart(2, '0');
  return `${d.getFullYear()}/${pad(d.getMonth() + 1)}/${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

function _fmtStatus(kind, status) {
  const key = String(status || '').toUpperCase();
  if (kind === 'deposit') {
    if (key === 'PENDING')   return { text: '待處理', cls: '' };
    if (key === 'COMPLETED') return { text: '已完成', cls: 'done' };
    if (key === 'FAILED')    return { text: '失敗',   cls: 'fail' };
    return { text: '未知狀態', cls: '' };
  }
  if (key === 'PENDING')    return { text: '待處理', cls: '' };
  if (key === 'PROCESSING') return { text: '處理中', cls: '' };
  if (key === 'COMPLETED')  return { text: '已完成', cls: 'done' };
  if (key === 'FAILED' || key === 'CANCELLED') return { text: key === 'FAILED' ? '失敗' : '已取消', cls: 'fail' };
  return { text: '未知狀態', cls: '' };
}

// ── Flash toast ───────────────────────────────────────────────────────────────
function _showFlash(message, tone = 'info') {
  if (!message) {
    _flashEl.textContent = '';
    _flashEl.className = 'hidden';
    return;
  }
  _flashEl.textContent = message;
  _flashEl.className = tone || '';
  if (_st.flashTimer) clearTimeout(_st.flashTimer);
  _st.flashTimer = setTimeout(() => {
    _flashEl.textContent = '';
    _flashEl.className = 'hidden';
    _st.flashTimer = null;
  }, tone === 'error' ? 5200 : 3200);
}

// ── Countdown ─────────────────────────────────────────────────────────────────
function _stopCountdown() {
  if (_st.countdownTimer) { clearInterval(_st.countdownTimer); _st.countdownTimer = null; }
}

function _startCountdown(expireTime) {
  const el = document.getElementById('wallet-deposit-countdown');
  if (!el) return;
  if (!expireTime) { el.textContent = ''; return; }
  const expire = new Date(expireTime);
  const tick = () => {
    const diff = expire.getTime() - Date.now();
    if (diff <= 0) { el.textContent = '本次充值已過期'; _stopCountdown(); return; }
    const s = Math.floor(diff / 1000);
    el.textContent = `剩餘時間：${String(Math.floor(s / 3600)).padStart(2,'0')}:${String(Math.floor((s % 3600) / 60)).padStart(2,'0')}:${String(s % 60).padStart(2,'0')}`;
  };
  tick();
  _stopCountdown();
  _st.countdownTimer = setInterval(tick, 1000);
}

// ── API ───────────────────────────────────────────────────────────────────────
async function _request(path, { method = 'GET', body, allowNotFound = false } = {}) {
  const token = _token();
  if (!token) { const e = new Error('請先登入後再操作'); e.status = 401; throw e; }
  const resp = await fetch(_apiBase() + path, {
    method,
    headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token },
    body: body ? JSON.stringify(body) : undefined,
  });
  const text = await resp.text();
  const data = text ? (() => { try { return JSON.parse(text); } catch (_) { return { message: text }; } })() : null;
  if (allowNotFound && (resp.status === 404 || resp.status === 204)) return null;
  if (!resp.ok) {
    const e = new Error(data?.errorMessage || data?.message || data?.error || `請求失敗 (${resp.status})`);
    e.status = resp.status; e.data = data; throw e;
  }
  return data;
}

// ── Balance ───────────────────────────────────────────────────────────────────
async function _refreshBalance() {
  const usdt = await _opts.getBalance?.();
  if (Number.isFinite(usdt)) {
    _balance = usdt;
    _syncBalanceUI();
    _opts.onBalanceChange?.(usdt);
  }
}

function _syncBalanceUI() {
  const chip = document.getElementById('wallet-balance-chip');
  if (chip) chip.textContent = 'USDT ' + _balance.toFixed(2);
  const avail = document.getElementById('wallet-avail-balance');
  if (avail) avail.textContent = 'USDT ' + _balance.toFixed(2);
}

// ── Render ────────────────────────────────────────────────────────────────────
function _renderSuggestedAmounts() {
  const amounts = _st.rechargeSuggestedAmounts || [];
  _depositSuggestedEl.innerHTML = '';
  _depositSuggestedEl.classList.toggle('hidden', amounts.length === 0);
  amounts.forEach(amount => {
    const btn = document.createElement('button');
    btn.className = 'wallet-chip';
    btn.textContent = `可用 ${Number(amount).toFixed(2)}`;
    btn.addEventListener('click', () => {
      _depositAmountInput.value = Number(amount).toFixed(2);
      _createRecharge(Number(amount));
    });
    _depositSuggestedEl.appendChild(btn);
  });
}

function _renderDeposit() {
  const d = _st.pendingRecharge;
  const has = !!d;
  _depositActive.classList.toggle('hidden', !has);
  _depositForm.classList.toggle('hidden', has);
  if (!has) { _renderSuggestedAmounts(); return; }

  const s = _fmtStatus('deposit', d.status);
  const statusEl = document.getElementById('wallet-deposit-status');
  statusEl.textContent = s.text; statusEl.className = `wallet-badge ${s.cls}`.trim();
  document.getElementById('wallet-deposit-meta').textContent =
    `${_fmt(d.amount, d.currency || 'USDT')} · ${String(d.protocolEnum || 'TRC20')} · ${_fmtTime(d.createdAt)}`;
  document.getElementById('wallet-deposit-address').textContent = d.receiveAddress || '—';
  document.getElementById('wallet-deposit-open-url').classList.toggle('hidden', !_st.rechargePaymentUrl);
  document.getElementById('wallet-deposit-cancel').disabled = String(d.status || '').toUpperCase() !== 'PENDING';
  _startCountdown(d.expireTime);
}

function _renderWithdraw() {
  const w = _st.pendingWithdraw;
  const has = !!w;
  _withdrawActive.classList.toggle('hidden', !has);
  _withdrawForm.classList.toggle('hidden', has);

  const net = _NETWORKS[_st.selectedProtocol] || _NETWORKS.TRC20;
  document.getElementById('wallet-withdraw-min').textContent  = `最小提現：${net.min} USDT`;
  document.getElementById('wallet-withdraw-fee-hint').textContent = `手續費：${net.fee} USDT`;
  document.querySelectorAll('.wallet-network-btn').forEach(btn =>
    btn.classList.toggle('active', btn.dataset.protocol === _st.selectedProtocol)
  );
  if (!has) return;

  const s = _fmtStatus('withdraw', w.status);
  const statusEl = document.getElementById('wallet-withdraw-status');
  statusEl.textContent = s.text; statusEl.className = `wallet-badge ${s.cls}`.trim();
  document.getElementById('wallet-withdraw-meta').textContent =
    `${_fmt(w.amount, w.currency || 'USDT')} · 手續費 ${_fmt(w.fee, w.currency || 'USDT')} · ${String(w.protocolEnum || _st.selectedProtocol || 'TRC20')}`;
  document.getElementById('wallet-withdraw-address').textContent = w.toAddress || '—';
}

// ── State loading ─────────────────────────────────────────────────────────────
async function _loadState() {
  await _refreshBalance();
  try {
    _st.pendingRecharge = await _request('/recharge/pending', { allowNotFound: true });
  } catch (e) { _st.pendingRecharge = null; _log(`充值狀態載入失敗: ${e.message}`, 'warn'); }
  try {
    _st.pendingWithdraw = await _request('/withdraws/ongoing', { allowNotFound: true });
  } catch (e) { _st.pendingWithdraw = null; _log(`提款狀態載入失敗: ${e.message}`, 'warn'); }
  _renderDeposit();
  _renderWithdraw();
}

// ── Actions ───────────────────────────────────────────────────────────────────
async function _createRecharge(forcedAmount) {
  const amount = Number(forcedAmount || _depositAmountInput.value);
  if (!Number.isFinite(amount) || amount <= 0) { _showFlash('請輸入有效的充值金額', 'error'); return; }

  const btn = document.getElementById('wallet-deposit-create');
  btn.disabled = true; btn.textContent = '建立中...';
  try {
    const resp = await _request('/recharge', {
      method: 'POST',
      body: { amount, currency: 'USDT', protocolEnum: 'TRC20' },
    });
    if (resp?.success === false) {
      _st.rechargeSuggestedAmounts = Array.isArray(resp.suggestedAmounts) ? resp.suggestedAmounts : [];
      _renderSuggestedAmounts();
      _showFlash(resp.errorMessage || '充值建立失敗', resp.errorCode === 'NO_AVAILABLE_WALLET' ? 'warn' : 'error');
      return;
    }
    _st.rechargePaymentUrl = resp?.paymentUrl || '';
    _st.rechargeSuggestedAmounts = [];
    _depositAmountInput.value = '';
    _st.pendingRecharge = {
      id: resp?.rechargeId, amount: resp?.amount, currency: resp?.currency,
      status: resp?.status, protocolEnum: resp?.protocol,
      receiveAddress: resp?.receiveAddress, createdAt: resp?.createdAt, expireTime: resp?.expireTime,
    };
    try {
      const p = await _request('/recharge/pending', { allowNotFound: true });
      if (p) _st.pendingRecharge = p;
    } catch (_) {}
    _renderDeposit();
    _showFlash('充值單已建立，請使用下方地址完成轉帳', 'success');
  } catch (e) {
    _showFlash(e.message || '充值建立失敗', 'error');
    _log(`充值建立失敗: ${e.message}`, 'warn');
  } finally {
    btn.disabled = false; btn.textContent = '建立充值';
  }
}

async function _cancelRecharge() {
  const r = _st.pendingRecharge;
  if (!r?.id) { _showFlash('目前沒有可取消的充值', 'warn'); return; }
  if (!window.confirm('確定要取消這筆充值嗎？取消後需要重新建立。')) return;

  const btn = document.getElementById('wallet-deposit-cancel');
  btn.disabled = true; btn.textContent = '取消中...';
  try {
    await _request(`/recharge/${encodeURIComponent(r.id)}/cancel`, { method: 'POST' });
    _st.pendingRecharge = null;
    _st.rechargePaymentUrl = '';
    _renderDeposit();
    _showFlash('充值已取消', 'success');
  } catch (e) {
    _showFlash(e.message || '取消充值失敗', 'error');
  } finally {
    btn.disabled = false; btn.textContent = '取消本次充值';
  }
}

async function _createWithdraw() {
  const amount  = Number(_withdrawAmountInput.value);
  const address = String(_withdrawAddressInput.value || '').trim();
  const net     = _NETWORKS[_st.selectedProtocol] || _NETWORKS.TRC20;

  if (!Number.isFinite(amount) || amount <= 0) { _showFlash('請輸入有效的提款金額', 'error'); return; }
  if (amount < net.min)    { _showFlash(`當前網路最小提款為 ${net.min} USDT`, 'error'); return; }
  if (amount > _balance)   { _showFlash('提款金額不可超過可用餘額', 'error'); return; }
  if (!address)            { _showFlash('請輸入提款地址', 'error'); return; }
  if (!window.confirm('確認送出提款申請？送出後將進入審核流程。')) return;

  const btn = document.getElementById('wallet-withdraw-create');
  btn.disabled = true; btn.textContent = '提交中...';
  try {
    _st.pendingWithdraw = await _request('/withdraws', {
      method: 'POST',
      body: { amount, toAddress: address, protocolEnum: _st.selectedProtocol, currency: 'USDT' },
    });
    _withdrawAmountInput.value = '';
    _withdrawAddressInput.value = '';
    await _refreshBalance();
    _renderWithdraw();
    _showFlash('提款申請已送出', 'success');
  } catch (e) {
    _showFlash(e.message || '提款建立失敗', 'error');
    _log(`提款建立失敗: ${e.message}`, 'warn');
  } finally {
    btn.disabled = false; btn.textContent = '提交提款';
  }
}

// ── Mode ──────────────────────────────────────────────────────────────────────
function _setMode(mode) {
  _st.mode = mode === 'withdraw' ? 'withdraw' : 'deposit';
  _depositView.classList.toggle('hidden', _st.mode !== 'deposit');
  _withdrawView.classList.toggle('hidden', _st.mode !== 'withdraw');
  _showFlash('');
  const label = document.getElementById('wallet-mode-label');
  if (label) label.textContent = _st.mode === 'withdraw' ? '提款' : '充值';
}

// ── Public API ────────────────────────────────────────────────────────────────

/** Returns true if the wallet panel is currently open. */
export function walletIsOpen() {
  return _panel?.classList.contains('open') ?? false;
}

/** Open the wallet panel in 'deposit' or 'withdraw' mode. */
export async function openWalletPanel(mode) {
  _opts.onBeforeOpen?.();
  _setMode(mode);
  _panel.style.display = 'flex';
  _backdrop.classList.add('open');
  _panel.getBoundingClientRect(); // force reflow so CSS transition plays
  _panel.classList.add('open');
  await _loadState();
  if (_st.mode === 'deposit' && !_st.pendingRecharge) {
    setTimeout(() => _depositAmountInput.focus(), 50);
  } else if (_st.mode === 'withdraw' && !_st.pendingWithdraw) {
    setTimeout(() => _withdrawAmountInput.focus(), 50);
  }
}

/** Close the wallet panel. */
export function closeWalletPanel() {
  _panel.classList.remove('open');
  _backdrop.classList.remove('open');
  _panel.addEventListener('transitionend', () => {
    if (!_panel.classList.contains('open')) _panel.style.display = 'none';
  }, { once: true });
  _stopCountdown();
}

/**
 * Sync the balance chip + available-balance line from outside.
 * Call this whenever the game's own balance variable changes.
 * @param {number} usdt  Balance as USDT float.
 */
export function walletUpdateBalance(usdt) {
  if (!Number.isFinite(usdt)) return;
  _balance = usdt;
  _syncBalanceUI();
}

/**
 * Initialise the wallet panel. Must be called once before any other exports.
 *
 * @param {object}  opts
 * @param {string}  [opts.apiBase]             Override API base URL.
 * @param {()=>string}         opts.getToken   Returns the current JWT.
 * @param {()=>Promise<number>} opts.getBalance Returns USDT balance as float.
 * @param {(usdt:number)=>void} [opts.onBalanceChange] Called after every balance refresh.
 * @param {(msg:string, level:string)=>void} [opts.onLog]  Logging hook.
 * @param {()=>void}            [opts.onBeforeOpen]  Called before the panel opens.
 */
export function initWalletPanel(opts) {
  _opts = opts || {};

  // Inject CSS
  const style = document.createElement('style');
  style.dataset.walletPanel = '1';
  style.textContent = _CSS;
  document.head.appendChild(style);

  // Inject HTML
  document.body.insertAdjacentHTML('beforeend', _HTML);

  // Cache DOM refs
  _panel               = document.getElementById('wallet-panel');
  _backdrop            = document.getElementById('wallet-backdrop');
  _flashEl             = document.getElementById('wallet-flash');
  _depositView         = document.getElementById('wallet-deposit-view');
  _withdrawView        = document.getElementById('wallet-withdraw-view');
  _depositForm         = document.getElementById('wallet-deposit-form');
  _depositActive       = document.getElementById('wallet-deposit-active');
  _withdrawForm        = document.getElementById('wallet-withdraw-form');
  _withdrawActive      = document.getElementById('wallet-withdraw-active');
  _depositAmountInput  = document.getElementById('wallet-deposit-amount-input');
  _withdrawAmountInput = document.getElementById('wallet-withdraw-amount-input');
  _withdrawAddressInput= document.getElementById('wallet-withdraw-address-input');
  _depositSuggestedEl  = document.getElementById('wallet-deposit-suggested');

  // Wire up event listeners
  document.getElementById('wallet-close').addEventListener('click', closeWalletPanel);
  _backdrop.addEventListener('click', closeWalletPanel);

  document.querySelectorAll('[data-deposit-amount]').forEach(btn =>
    btn.addEventListener('click', () => {
      _depositAmountInput.value = Number(btn.dataset.depositAmount).toFixed(2);
    })
  );
  document.querySelectorAll('[data-withdraw-amount]').forEach(btn =>
    btn.addEventListener('click', () => {
      _withdrawAmountInput.value = Number(btn.dataset.withdrawAmount).toFixed(2);
    })
  );
  document.querySelectorAll('.wallet-network-btn').forEach(btn =>
    btn.addEventListener('click', () => {
      _st.selectedProtocol = btn.dataset.protocol || 'TRC20';
      _renderWithdraw();
    })
  );

  document.getElementById('wallet-deposit-create').addEventListener('click', () => _createRecharge());
  document.getElementById('wallet-deposit-cancel').addEventListener('click', _cancelRecharge);
  document.getElementById('wallet-withdraw-create').addEventListener('click', _createWithdraw);

  document.getElementById('wallet-deposit-copy').addEventListener('click', async () => {
    const text = document.getElementById('wallet-deposit-address').textContent || '';
    if (!text || text === '—') return;
    try {
      await navigator.clipboard.writeText(text);
      _showFlash('充值地址已複製', 'success');
    } catch (_) {
      _showFlash('複製失敗，請手動複製地址', 'warn');
    }
  });

  document.getElementById('wallet-deposit-open-url').addEventListener('click', () => {
    if (_st.rechargePaymentUrl)
      window.open(_st.rechargePaymentUrl, '_blank', 'noopener,noreferrer');
  });
}
