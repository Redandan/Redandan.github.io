// Presentation-only layout helpers. Never read input values, send requests,
// rewrite API data or change disabled/ownership/business-state decisions.
const areas=[
 ['authentication',/^\/(?:login|oauth2-callback|register|forgot-password|reset-password|session-recovery)(?:\/|$)/],
 ['profile_security',/^\/(?:profile|security|settings\/devices|bindings)(?:\/|$)/],
 ['addresses',/^\/addresses(?:\/|$)/],
 ['favorites_cart',/^\/(?:favorites|cart)(?:\/|$)/],
 ['checkout',/^\/checkout(?:\/|$)/],
 ['orders',/^\/orders(?:\/|$)/],
 ['wallet_transactions',/^\/(?:wallet|transactions)(?:\/|$)/],
 ['chat_calls',/^\/chat(?:\/|$)/],
 ['notifications',/^\/(?:settings\/notifications|messages|notifications)(?:\/|$)/],
 ['demands',/^\/demands(?:\/|$)/],
 ['subscriptions_games',/^\/(?:products\/[^/]+\/game-access|subscriptions|betting|my-bets|games)(?:\/|$)/],
 ['promotion',/^\/promo-code(?:\/|$)/],
 ['help_support',/^\/(?:help|customer-issues)(?:\/|$)/],
 ['information_download',/^\/(?:about|privacy-policy|user-agreement|app-download|not-found)(?:\/|$)/],
 ['catalog_store',/^\/(?:$|home\/?$|search\/?$|products\/[^/]+\/?$|stores\/[^/]+(?:\/(?:home|posts))?\/?$)/],
];
export function buyerSurface(path){return areas.find(([,pattern])=>pattern.test(path))?.[0]||'information_download';}

const amountSelector=[
 '.wallet-total','.wallet-metrics strong','.wallet-tx-amount',
 '.cart-unit-price','.cart-store-footer strong','.cart-selection-amount',
 '.transaction-detail-money','.transaction-history-money',
 '.order-next-summary strong','.deposit-balance strong','.staking-balance strong',
].join(',');
const originalFont=new WeakMap();
export function fitBuyerAmounts(root){
 for(const el of root.querySelectorAll(amountSelector)){
  if(!el.getClientRects().length||!/[0-9]/.test(el.textContent))continue;
  if(!originalFont.has(el))originalFont.set(el,el.style.fontSize);
  el.style.fontSize=originalFont.get(el);el.classList.add('buyer-amount-fit');
  const base=parseFloat(getComputedStyle(el).fontSize),width=el.clientWidth;
  if(!width||!Number.isFinite(base))continue;
  if(el.scrollWidth>width)el.style.fontSize=Math.max(12,Math.floor(base*width/el.scrollWidth*100)/100)+'px';
  const overflow=el.scrollWidth>el.clientWidth+1;
  el.dataset.amountOverflow=String(overflow);
  if(overflow&&!el.hasAttribute('tabindex')){el.tabIndex=0;el.dataset.amountTabstop='true';}
  else if(!overflow&&el.dataset.amountTabstop){el.removeAttribute('tabindex');delete el.dataset.amountTabstop;}
 }
}
export function startBuyerDesign(root){
 root.dataset.design='original';let frame=0;
 const schedule=()=>{if(!frame)frame=requestAnimationFrame(()=>{frame=0;fitBuyerAmounts(root);});};
 const mutation=new MutationObserver(schedule);mutation.observe(root,{childList:true,subtree:true,characterData:true});
 const resize=new ResizeObserver(schedule);resize.observe(root);resize.observe(root.querySelector('#buyer-main'));
 document.fonts?.ready.then(schedule);document.fonts?.addEventListener('loadingdone',schedule);
 schedule();
 return()=>{mutation.disconnect();resize.disconnect();cancelAnimationFrame(frame);document.fonts?.removeEventListener('loadingdone',schedule);};
}
