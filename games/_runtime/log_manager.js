export function createLogManager(config = {}) {
  const logPanel = config.logPanelEl;
  const logToggle = config.logToggleEl;
  if (!logPanel || !logToggle) {
    throw new Error('log_manager: logPanelEl and logToggleEl are required');
  }

  const MAX_LOGS = Number.isFinite(Number(config.maxLogs)) ? Number(config.maxLogs) : 200;
  const LOG_STORAGE_KEY = config.storageKey || 'slot_game_log';
  const LOG_ICONS = config.icons || { error: 'x', warn: '!', info: '.' };

  const rawLog = console.log.bind(console);
  const rawWarn = console.warn.bind(console);
  const rawError = console.error.bind(console);

  let logCount = 0;
  let logEntries = [];
  let saveTimer = 0;
  let unpatchConsole = null;

  function saveStoredLogs() {
    clearTimeout(saveTimer);
    saveTimer = setTimeout(() => {
      try {
        localStorage.setItem(LOG_STORAGE_KEY, JSON.stringify(logEntries));
      } catch (e) {
        rawWarn('slot_game: failed to persist logs:', e);
      }
    }, 300);
  }

  function restoreLogs() {
    try {
      const stored = JSON.parse(localStorage.getItem(LOG_STORAGE_KEY) || '[]');
      logEntries = Array.isArray(stored) ? stored.slice(-MAX_LOGS) : [];
    } catch (_) {
      logEntries = [];
    }

    for (const entry of logEntries) {
      const d = document.createElement('div');
      d.className = `log-${entry.type}`;
      d.textContent = entry.text;
      logPanel.appendChild(d);
      logCount++;
    }
  }

  function formatLogArgs(args) {
    return args.map((x) => (typeof x === 'object' ? JSON.stringify(x) : String(x))).join(' ');
  }

  function addLog(msg, type = 'info') {
    const text = `${LOG_ICONS[type] ?? '.'} [${new Date().toLocaleTimeString()}] ${msg}`;
    const d = document.createElement('div');
    d.className = `log-${type}`;
    d.textContent = text;
    logPanel.appendChild(d);

    if (++logCount > MAX_LOGS) {
      // Keep header toggle at index 0.
      logPanel.removeChild(logPanel.children[1]);
      logCount--;
    }

    logEntries.push({ type, text });
    if (logEntries.length > MAX_LOGS) logEntries.shift();
    saveStoredLogs();

    if (type === 'error') logPanel.classList.remove('collapsed');
    if (logPanel.offsetParent !== null) logPanel.scrollTop = logPanel.scrollHeight;
  }

  function clearLogs() {
    while (logPanel.children.length > 1) logPanel.removeChild(logPanel.lastChild);
    logCount = 0;
    logEntries = [];
    clearTimeout(saveTimer);
    try {
      localStorage.removeItem(LOG_STORAGE_KEY);
    } catch (e) {
      rawWarn('slot_game: failed to clear stored logs:', e);
    }
  }

  function getLogsText() {
    return logEntries.map((e) => e.text).join('\n') || '(no logs)';
  }

  function patchConsole() {
    if (unpatchConsole) return;

    const patchedLog = (...args) => {
      rawLog(...args);
      addLog(formatLogArgs(args), 'info');
    };
    const patchedWarn = (...args) => {
      rawWarn(...args);
      addLog(formatLogArgs(args), 'warn');
    };
    const patchedError = (...args) => {
      rawError(...args);
      addLog(formatLogArgs(args), 'error');
    };

    console.log = patchedLog;
    console.warn = patchedWarn;
    console.error = patchedError;

    const onError = (e) => addLog(`Runtime: ${e.message} at ${e.filename}:${e.lineno}`, 'error');
    const onUnhandled = (e) => addLog(`Unhandled: ${e.reason}`, 'error');
    window.addEventListener('error', onError);
    window.addEventListener('unhandledrejection', onUnhandled);

    unpatchConsole = () => {
      console.log = rawLog;
      console.warn = rawWarn;
      console.error = rawError;
      window.removeEventListener('error', onError);
      window.removeEventListener('unhandledrejection', onUnhandled);
    };
  }

  logToggle.addEventListener('click', () => logPanel.classList.toggle('collapsed'));
  logPanel.classList.add('collapsed');
  restoreLogs();

  return {
    addLog,
    clearLogs,
    getLogsText,
    patchConsole,
    rawWarn,
  };
}
