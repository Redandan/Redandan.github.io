import{list}from'./ui.js';
// Wallet history endpoints use one-based pages. A reset retires every earlier
// response; only the accepted page can advance the cursor or change controls.
export function historyPager(ctx,{target,more,request,row,empty,unavailable}){
 let next=1,revision=0,loading=false;const seen=new Set();
 return async function load(reset=false){
  if(!ctx.active()||loading&&!reset)return;
  if(reset)next=1;const page=next,ticket=++revision;loading=true;
  ctx.find(more).disabled=true;
  try{
   const value=await request(page);if(!ctx.active()||ticket!==revision)return;
   if(value?.available===false){ctx.find(target).innerHTML=unavailable||empty;ctx.find(more).hidden=true;return;}
   const items=list(value);if(page===1)seen.clear();
   const accepted=items.filter(v=>{if(v.id==null)return true;const key=String(v.id);if(seen.has(key))return false;seen.add(key);return true;});
   const html=accepted.map(row).join(''),container=ctx.find(target);
   if(page===1)container.innerHTML=html||empty;else container.insertAdjacentHTML('beforeend',html);
   next=page+1;ctx.find(more).hidden=value?.last===true||value?.last!==false&&items.length<20;
  }finally{if(ctx.active()&&ticket===revision){loading=false;ctx.find(more).disabled=false;}}
 };
}
