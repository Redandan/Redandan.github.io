// Public catalogue views only. Detached DOM and cursors live in this document;
// neither API responses nor account data enter persistent browser storage.
export function createCatalogViewMemory({maxViews=6,maxProducts=480,maxPerView=240,maxPages=24,now=()=>Date.now()}={}){
 let generation=0,revision=0,sequence=0;const views=new Map(),tickets=new Map();
 const copy=value=>JSON.parse(JSON.stringify(value));
 const current=t=>t?.generation===generation&&tickets.get(t.key)===t.serial;
 function clear(){generation++;revision=0;views.clear();tickets.clear();}
 function begin(key){const ticket={key,generation,serial:++sequence};tickets.set(key,ticket.serial);return Object.freeze(ticket);}
 function remember(ticket,state,node){
  if(!current(ticket))return false;
  const segmented=Array.isArray(state?.windowPages)&&state.windowPages.length<=maxPages&&state.windowPages.every((p,i,a)=>Number.isInteger(p.page)&&p.page>=1&&Number.isInteger(p.count)&&p.count>=0&&(!i||p.page===a[i-1].page+1))&&state.windowPages.reduce((n,p)=>n+p.count,0)===state.rows?.length&&state.windowPages.at(-1)?.page+1===state.page;
  if(state?.loaded!==true||node?.nodeType!==1||!Array.isArray(state.rows)||state.rows.length>maxPerView||!Number.isInteger(state.page)||state.page<2||(!segmented&&state.page>maxPages+1)||!Number.isFinite(state.readAt)||state.readAt<0||state.readAt>now()||!Number.isFinite(state.scroll)||state.scroll<0){views.delete(ticket.key);tickets.delete(ticket.key);return false;}
  views.delete(ticket.key);views.set(ticket.key,{state:{...copy(state),refreshRequired:state.refreshRequired===true||(state.revision??0)!==revision},node});
  while(views.size>maxViews||[...views.values()].reduce((n,v)=>n+v.state.rows.length,0)>maxProducts){const key=views.keys().next().value;views.delete(key);tickets.delete(key);}
  return views.has(ticket.key);
 }
 function restore(ticket){if(!current(ticket))return null;const view=views.get(ticket.key);if(!view)return null;if(view.state.readAt>now()){views.delete(ticket.key);return null;}views.delete(ticket.key);views.set(ticket.key,view);return{...copy(view.state),node:view.node};}
 function invalidate(){revision++;for(const view of views.values())view.state.refreshRequired=true;}
 return Object.freeze({begin,restore,remember,clear,invalidate,revision:()=>revision,has:key=>views.has(key)});
}
export const catalogViewMemory=createCatalogViewMemory();
