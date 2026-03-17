import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

class ClassList {
  constructor(el) {
    this.el = el;
    this.set = new Set();
  }

  _sync() {
    this.el.className = Array.from(this.set).join(' ').trim();
  }

  add(...names) {
    names.forEach((n) => n && this.set.add(n));
    this._sync();
  }

  remove(...names) {
    names.forEach((n) => this.set.delete(n));
    this._sync();
  }

  toggle(name, force) {
    if (force === true) {
      this.set.add(name);
      this._sync();
      return true;
    }
    if (force === false) {
      this.set.delete(name);
      this._sync();
      return false;
    }
    if (this.set.has(name)) {
      this.set.delete(name);
      this._sync();
      return false;
    }
    this.set.add(name);
    this._sync();
    return true;
  }

  contains(name) {
    return this.set.has(name);
  }
}

class FakeElement {
  constructor(tagName = 'div') {
    this.tagName = tagName.toUpperCase();
    this.id = '';
    this.className = '';
    this.classList = new ClassList(this);
    this.dataset = {};
    this.style = {};
    this.textContent = '';
    this.value = '';
    this.disabled = false;
    this.children = [];
    this._listeners = new Map();
  }

  addEventListener(type, fn) {
    if (!this._listeners.has(type)) this._listeners.set(type, []);
    this._listeners.get(type).push(fn);
  }

  dispatchEvent(event) {
    const type = event.type;
    const handlers = this._listeners.get(type) || [];
    handlers.forEach((h) => h.call(this, event));
    return true;
  }

  click() {
    this.dispatchEvent({ type: 'click' });
  }

  appendChild(child) {
    this.children.push(child);
    return child;
  }

  focus() {}

  getBoundingClientRect() {
    return { width: 0, height: 0, top: 0, left: 0 };
  }

  set innerHTML(_value) {
    this.children = [];
  }

  setAttribute(name, value) {
    if (name === 'id') this.id = value;
    if (name === 'class') {
      this.className = value;
      this.classList.set = new Set(value.split(/\s+/).filter(Boolean));
    }
  }
}

class FakeDocument {
  constructor() {
    this._byId = new Map();
    this._all = [];
    this.head = new FakeElement('head');
    this.body = new FakeElement('body');

    this.body.insertAdjacentHTML = (_position, html) => {
      if (!html.includes('wallet-panel')) return;
      this._mountWalletSkeleton();
    };
  }

  createElement(tagName) {
    const el = new FakeElement(tagName);
    if (tagName.toLowerCase() === 'style') el.dataset = {};
    this._all.push(el);
    return el;
  }

  getElementById(id) {
    return this._byId.get(id) || null;
  }

  querySelectorAll(selector) {
    if (selector === '[data-deposit-amount]') {
      return this._all.filter((e) => e.dataset && Object.prototype.hasOwnProperty.call(e.dataset, 'depositAmount'));
    }
    if (selector === '[data-withdraw-amount]') {
      return this._all.filter((e) => e.dataset && Object.prototype.hasOwnProperty.call(e.dataset, 'withdrawAmount'));
    }
    if (selector === '.wallet-network-btn') {
      return this._all.filter((e) => e.classList.contains('wallet-network-btn'));
    }
    return [];
  }

  _register(el, { id, classNames = '', dataset = {} } = {}) {
    if (id) {
      el.id = id;
      this._byId.set(id, el);
    }
    if (classNames) {
      classNames.split(/\s+/).filter(Boolean).forEach((c) => el.classList.add(c));
    }
    if (dataset) {
      Object.assign(el.dataset, dataset);
    }
    this._all.push(el);
    return el;
  }

  _mountWalletSkeleton() {
    const ids = [
      'wallet-panel', 'wallet-backdrop', 'wallet-flash',
      'wallet-deposit-view', 'wallet-withdraw-view',
      'wallet-deposit-form', 'wallet-deposit-active',
      'wallet-withdraw-form', 'wallet-withdraw-active',
      'wallet-deposit-amount-input', 'wallet-withdraw-amount-input',
      'wallet-withdraw-address-input', 'wallet-deposit-suggested',
      'wallet-deposit-status', 'wallet-deposit-meta', 'wallet-deposit-address',
      'wallet-deposit-open-url', 'wallet-deposit-cancel', 'wallet-deposit-countdown',
      'wallet-withdraw-status', 'wallet-withdraw-meta', 'wallet-withdraw-address',
      'wallet-withdraw-min', 'wallet-withdraw-fee-hint',
      'wallet-close', 'wallet-deposit-create', 'wallet-withdraw-create',
      'wallet-deposit-copy', 'wallet-mode-label',
      'wallet-balance-chip', 'wallet-avail-balance',
    ];

    ids.forEach((id) => this._register(new FakeElement('div'), { id }));

    this.getElementById('wallet-withdraw-view').classList.add('hidden');
    this.getElementById('wallet-deposit-active').classList.add('hidden');
    this.getElementById('wallet-withdraw-active').classList.add('hidden');
    this.getElementById('wallet-deposit-open-url').classList.add('hidden');
    this.getElementById('wallet-flash').classList.add('hidden');

    ['10', '50', '100', '500', '1000'].forEach((v) => {
      this._register(new FakeElement('button'), { classNames: 'wallet-chip', dataset: { depositAmount: v } });
    });
    ['100', '500', '1000', '5000'].forEach((v) => {
      this._register(new FakeElement('button'), { classNames: 'wallet-chip', dataset: { withdrawAmount: v } });
    });

    this._register(new FakeElement('button'), {
      classNames: 'wallet-network-btn active',
      dataset: { protocol: 'TRC20' },
    });
    this._register(new FakeElement('button'), {
      classNames: 'wallet-network-btn',
      dataset: { protocol: 'ERC20' },
    });
  }
}

function createLocalStorage() {
  const map = new Map();
  return {
    getItem(k) { return map.has(k) ? map.get(k) : null; },
    setItem(k, v) { map.set(k, String(v)); },
    removeItem(k) { map.delete(k); },
    clear() { map.clear(); },
  };
}

async function importFreshWalletModule() {
  const modPath = path.resolve('web/games/_runtime/wallet_panel.js');
  const fileUrl = pathToFileURL(modPath).href + `?t=${Date.now()}-${Math.random()}`;
  return import(fileUrl);
}

async function setup({ balance = 123.45 } = {}) {
  const document = new FakeDocument();
  const localStorage = createLocalStorage();

  global.document = document;
  global.window = {
    confirm: () => true,
    open: () => {},
  };
  Object.defineProperty(globalThis, 'navigator', {
    value: {
      clipboard: {
        writeText: async () => {},
      },
    },
    configurable: true,
    writable: true,
  });
  global.localStorage = localStorage;

  global.fetch = async (url) => {
    if (String(url).endsWith('/recharge/pending') || String(url).endsWith('/withdraws/ongoing')) {
      return {
        ok: false,
        status: 404,
        async text() { return ''; },
      };
    }
    throw new Error(`Unexpected fetch URL in test: ${url}`);
  };

  const mod = await importFreshWalletModule();
  const onBalanceChangeCalls = [];

  mod.initWalletPanel({
    getToken: () => 'jwt-token',
    getBalance: async () => balance,
    onBalanceChange: (usdt) => onBalanceChangeCalls.push(usdt),
    onLog: () => {},
    onBeforeOpen: () => {},
  });

  return { mod, document, onBalanceChangeCalls };
}

test('initWalletPanel should inject wallet root elements', async () => {
  const { document } = await setup();
  assert.ok(document.getElementById('wallet-panel'));
  assert.ok(document.getElementById('wallet-backdrop'));
  assert.equal(document.getElementById('wallet-mode-label').textContent, '');
});

test('walletUpdateBalance should update both balance labels', async () => {
  const { mod, document } = await setup();
  mod.walletUpdateBalance(88.5);

  assert.equal(document.getElementById('wallet-balance-chip').textContent, 'USDT 88.50');
  assert.equal(document.getElementById('wallet-avail-balance').textContent, 'USDT 88.50');
});

test('openWalletPanel in withdraw mode should switch view and refresh balance', async () => {
  const { mod, document, onBalanceChangeCalls } = await setup({ balance: 66.6 });

  await mod.openWalletPanel('withdraw');

  assert.equal(mod.walletIsOpen(), true);
  assert.equal(document.getElementById('wallet-panel').style.display, 'flex');
  assert.equal(document.getElementById('wallet-backdrop').classList.contains('open'), true);
  assert.equal(document.getElementById('wallet-mode-label').textContent, '提款');
  assert.equal(document.getElementById('wallet-withdraw-view').classList.contains('hidden'), false);
  assert.equal(document.getElementById('wallet-deposit-view').classList.contains('hidden'), true);
  assert.equal(document.getElementById('wallet-balance-chip').textContent, 'USDT 66.60');
  assert.deepEqual(onBalanceChangeCalls, [66.6]);
});

test('closeWalletPanel should close panel and hide it after transitionend', async () => {
  const { mod, document } = await setup();

  await mod.openWalletPanel('deposit');
  mod.closeWalletPanel();

  const panel = document.getElementById('wallet-panel');
  assert.equal(panel.classList.contains('open'), false);
  assert.equal(document.getElementById('wallet-backdrop').classList.contains('open'), false);

  panel.dispatchEvent({ type: 'transitionend' });
  assert.equal(panel.style.display, 'none');
  assert.equal(mod.walletIsOpen(), false);
});
