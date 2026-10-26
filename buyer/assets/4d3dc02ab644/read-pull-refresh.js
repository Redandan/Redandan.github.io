export function bindReadPullRefresh(ctx,main,{canRefresh,refresh}){
 let pull=null;
 main.addEventListener('touchstart',event=>{if(!ctx.active()||!canRefresh()||main.scrollTop>0||event.touches.length!==1||event.target.closest('dialog')){pull=null;return;}pull={x:event.touches[0].clientX,y:event.touches[0].clientY,distance:0};},{passive:true,signal:ctx.signal});
 main.addEventListener('touchmove',event=>{if(!pull||event.touches.length!==1)return;const dx=event.touches[0].clientX-pull.x,dy=event.touches[0].clientY-pull.y;if(Math.abs(dx)>Math.abs(dy)||main.scrollTop>0){pull=null;return;}pull.distance=Math.max(0,dy);if(dy>12&&event.cancelable)event.preventDefault();},{passive:false,signal:ctx.signal});
 main.addEventListener('touchend',()=>{const run=pull?.distance>=64;pull=null;if(run&&ctx.active()&&canRefresh())void refresh();},{passive:true,signal:ctx.signal});
 main.addEventListener('touchcancel',()=>pull=null,{passive:true,signal:ctx.signal});ctx.cleanup(()=>pull=null);
}
