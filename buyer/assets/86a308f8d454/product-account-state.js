import{materialIcon}from'./material-icons.js';

// Only the existing session core confirms the owner. Hints and DOM events never
// supply a user id or favorite value. A public product remains visible while
// these optional private reads run after its first frame.
export function bindProductAccountState(ctx,product){
 let epoch=0,read=0,mutation=0,userId=null,retired=false;
 const current=()=>!retired&&ctx.active();
 function favorite(value){if(!current())return;const button=ctx.find('.product-image-toolbar [data-action=favorite]');if(!button)return;button.setAttribute('aria-pressed',String(value));button.classList.toggle('is-favorite',value);button.innerHTML=materialIcon(value?'favorite':'favorite_border');}
 function contact(owner){if(!current())return;document.querySelectorAll('.product-purchase-actions [data-action=chat]').forEach(button=>button.hidden=owner===Number(product.sellerId));}
 function clear(){epoch++;read++;mutation++;userId=null;favorite(false);contact(null);}
 async function refresh(){
  if(!current()||!window.AgoraBuyerBridge)return;
  const own=epoch,request=++read;
  try{
   const state=await ctx.api.session();
   if(!current()||epoch!==own||read!==request)return;
   const id=state.authenticated===true&&!state.requiresReload&&Number.isInteger(state.user?.id)&&state.user.id>0?state.user.id:null;
   if(userId!==id){userId=id;mutation++;favorite(false);}
   contact(id);if(id===null)return;
   const beforeFavorite=mutation,values=await ctx.api.command('favorites.list');
   if(!current()||epoch!==own||read!==request||mutation!==beforeFavorite||userId!==id)return;
   if(!Array.isArray(values))return;
   favorite(values.some(value=>Number(value?.id)===Number(product.id)));
  }catch(error){if(!current()||epoch!==own||read!==request||error.name==='AbortError')return;/* An optional private read never replaces the public product. */}
 }
 const confirmed=()=>{void refresh();},changed=()=>{clear();queueMicrotask(confirmed);};
 addEventListener('agora-buyer-session-confirmed',confirmed,{signal:ctx.signal});
 addEventListener('agora-buyer-auth',changed,{signal:ctx.signal});
 ctx.cleanup(()=>{retired=true;epoch++;read++;});
 return Object.freeze({
  ready:confirmed,
  beginFavoriteChange(){mutation++;return{epoch,mutation};},
  confirmFavoriteChange(token,value){if(!current()||token.epoch!==epoch||token.mutation!==mutation||typeof value!=='boolean')return false;mutation++;favorite(value);return true;},
 });
}
