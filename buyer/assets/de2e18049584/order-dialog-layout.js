import{nativeDialogTextWidth}from'./native-dialog.js';

export function orderActionDialogWidth(title,buttons){
 const footer=buttons.reduce((width,button)=>width+nativeDialogTextWidth(button.text,14,button.filled ? .3 : 0,600)+(button.filled?48:24),0)+Math.max(0,buttons.length-1)*8;
 return Math.min(560,Math.max(280,48+nativeDialogTextWidth(title,20,-.3,600),48+footer));
}
// Flutter OverflowBar places every action on its own row when their combined
// intrinsic widths do not fit. CSS flex-wrap alone produces a different layout.
export function fitOrderDialogActions(node){
 const footer=node.querySelector('.profile-dialog-actions');if(!footer)return;
 const update=()=>{if(!node.open||!node.isConnected)return;const buttons=[...footer.querySelectorAll('button:not([hidden])')],width=buttons.reduce((sum,button)=>sum+button.getBoundingClientRect().width,0)+Math.max(0,buttons.length-1)*8;footer.classList.toggle('order-actions-overflow',width>footer.clientWidth+1);};
 const observer=new ResizeObserver(update);observer.observe(footer);document.fonts.ready.then(()=>{if(node.open)requestAnimationFrame(update);});node.addEventListener('close',()=>observer.disconnect(),{once:true});requestAnimationFrame(update);
}
