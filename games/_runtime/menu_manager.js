export function createMenuManager(config = {}) {
  const menuPopup = config.menuPopupEl;
  const menuButton = config.menuButtonEl;
  const copyButton = config.copyButtonEl;
  const clearButton = config.clearButtonEl;

  if (!menuPopup || !menuButton || !copyButton || !clearButton) {
    throw new Error('menu_manager: menuPopupEl/menuButtonEl/copyButtonEl/clearButtonEl are required');
  }

  const getLogsText = typeof config.getLogsText === 'function' ? config.getLogsText : () => '(no logs)';
  const onCopySuccess = typeof config.onCopySuccess === 'function' ? config.onCopySuccess : () => {};
  const onClear = typeof config.onClear === 'function' ? config.onClear : () => {};
  const promptFn = typeof config.promptFn === 'function' ? config.promptFn : null;

  function openMenu() {
    const rect = menuButton.getBoundingClientRect();
    // Position popup above the menu button and align to its right edge.
    menuPopup.style.bottom = `${window.innerHeight - rect.top + 6}px`;
    menuPopup.style.right = `${window.innerWidth - rect.right}px`;
    menuPopup.style.left = 'auto';
    menuPopup.classList.add('open');
  }

  function closeMenu() {
    menuPopup.classList.remove('open');
  }

  function copyByPrompt(text) {
    if (!promptFn) return;
    promptFn('複製以下日誌內容:', text);
  }

  function handleMenuButtonClick(e) {
    e.stopPropagation();
    if (menuPopup.classList.contains('open')) {
      closeMenu();
      return;
    }
    openMenu();
  }

  function handleDocumentClick(e) {
    if (!menuPopup.contains(e.target)) closeMenu();
  }

  function handleCopyClick() {
    closeMenu();
    const text = getLogsText();
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text)
        .then(() => onCopySuccess())
        .catch(() => copyByPrompt(text));
      return;
    }
    copyByPrompt(text);
  }

  function handleClearClick() {
    closeMenu();
    onClear();
  }

  menuButton.addEventListener('click', handleMenuButtonClick);
  document.addEventListener('click', handleDocumentClick);
  copyButton.addEventListener('click', handleCopyClick);
  clearButton.addEventListener('click', handleClearClick);

  return {
    openMenu,
    closeMenu,
    destroy() {
      menuButton.removeEventListener('click', handleMenuButtonClick);
      document.removeEventListener('click', handleDocumentClick);
      copyButton.removeEventListener('click', handleCopyClick);
      clearButton.removeEventListener('click', handleClearClick);
    },
  };
}
