// A bounded sliding window of server pages. Earlier/later pages can be read
// again without clearing the cards currently on screen or resetting a cursor.
export function cardSnapshot(product){const keys=['id','sellerId','title','localizedTitle','translationAvailable','thumbnailUrl','imageUrl','priceUsdt','price','stockQuantity','stock','viewCount','salesCount','enablePlatformDelivery','productType','rating','reviewCount','createdAt'];const value=Object.fromEntries(keys.filter(k=>Object.hasOwn(product,k)).map(k=>[k,product[k]]));if(Array.isArray(product.imageUrls))value.imageUrls=product.imageUrls.slice(0,1);return value;}
export function createProductPageWindow({maxRows=240,maxPages=24,rows=[],pages=[],offset=0}={}){
 let values=[],skipped=offset;
 let cursor=0;for(const meta of pages){values.push({...meta,rows:rows.slice(cursor,cursor+meta.count)});cursor+=meta.count;}
 const flat=()=>values.flatMap(p=>p.rows);
 function put(page,rows,{last=false,readAt=Date.now(),direction='next'}={}){
  if(!Number.isInteger(page)||page<1||!Array.isArray(rows)||rows.length>maxRows)throw Error('Invalid bounded product page');
  const old=values.find(p=>p.page===page);
  if(old){const incoming=new Set(rows.map(p=>String(p.id)));for(const p of values)if(p.page!==page)p.rows=p.rows.filter(row=>!incoming.has(String(row.id)));old.rows=rows;old.last=last;old.readAt=readAt;}
  else{const existing=new Set(flat().map(p=>String(p.id)));rows=rows.filter(row=>!existing.has(String(row.id)));if(direction==='previous')skipped=Math.max(0,skipped-rows.length);values.push({page,rows,last,readAt});}values.sort((a,b)=>a.page-b.page);
  while(values.length>1&&(flat().length>maxRows||values.length>maxPages)){if(direction==='previous'){values.pop();}else{const removed=values.shift();skipped+=removed.rows.length;}}
  return flat();
 }
 return Object.freeze({
  rows:flat,pages:()=>values.map(p=>({page:p.page,count:p.rows.length,last:p.last,readAt:p.readAt})),
  first:()=>values[0]?.page??1,next:()=>values.length?values.at(-1).page+1:1,
  hasMore:()=>values.length?!values.at(-1).last:true,hasPrevious:()=>!!values.length&&values[0].page>1,offset:()=>skipped,
  put,prepend(page,rows,options={}){return put(page,rows,{...options,direction:'previous'});},
  replace(page,rows,options={}){return put(page,rows,options);},
  markStale(){for(const page of values)page.readAt=0;},
  reset(){values=[];skipped=0;},
 });
}
// Keep a visible card fixed while complete old server pages leave the window.
export function captureProductAnchor(main,grid,selector){const frame=main.getBoundingClientRect();for(const node of grid.querySelectorAll(selector)){const rect=node.getBoundingClientRect();if(rect.bottom>frame.top&&rect.top<frame.bottom)return{node,top:rect.top};}return null;}
export function restoreProductAnchor(main,anchor){if(anchor?.node.isConnected)main.scrollTop+=anchor.node.getBoundingClientRect().top-anchor.top;}
export function alignProductWindow(grid,offset,selector){const nodes=grid.querySelectorAll(selector);for(const node of nodes)node.style.removeProperty('grid-column-start');if(!nodes.length||!offset)return;const columns=getComputedStyle(grid).gridTemplateColumns.split(' ').filter(Boolean).length||1;nodes[0].style.gridColumnStart=String(offset%columns+1);}
