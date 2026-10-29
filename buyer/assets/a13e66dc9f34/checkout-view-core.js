// Presentation from CheckoutOrderGroupView and the original summary widgets.
// Backend groups remain authoritative, including separate SKUs of one product.
export const checkoutNumber=value=>typeof value==='number'&&Number.isFinite(value)?value:0;
export const checkoutMoney=(value,currency='USDT')=>typeof value==='number'&&Number.isFinite(value)?value.toFixed(2)+' '+currency:'—';
export function checkoutGroups(items,plan){
 if(plan)return(plan.groups||[]).map(group=>({...group,rows:(group.items||[]).map(row=>items.find(item=>item.cartItemId===row.cartItemId)).filter(Boolean),merged:group.canMerge===true&&(group.items||[]).length>1}));
 return items.map((item,index)=>({groupId:'fallback_'+index,rows:[item],merged:false,sellerName:item.cart?.sellerName}));
}
export function checkoutGroupName(group,copy){return String(group.sellerName||'').trim()||String(group.rows.find(row=>String(row.cart?.sellerName||'').trim())?.cart.sellerName||'').trim()||copy.t(group.merged?'checkoutSameStoreProducts':'store');}
export function checkoutWarnings(warnings=[]){return warnings.filter(value=>typeof value==='string'&&!['cart_snapshot_changed','snapshot changed','cart snapshot','stale cart','source price drift','source price changed','price drift','價格已變動','价格已变动','運費已變動','运费已变动','購物車快照','购物车快照','快照不同','快照落後','快照落后'].some(part=>value.trim().toLowerCase().includes(part)));}
export function checkoutItemPreview(item,previews=[]){return previews.find(value=>item.cartItemId!=null&&value.cartItemId===item.cartItemId&&value.selectedSku===item.selectedSku);}
