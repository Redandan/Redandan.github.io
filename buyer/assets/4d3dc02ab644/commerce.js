import{uiText}from'./ui-text.js';
import {escape,money,list,positiveId,imageUrl,title,productCard,empty,field,button,route} from './ui.js';
const idOf=o=>encodeURIComponent(o.id||o.orderId||'');
export{favorites}from'./favorites.js';
export{cart}from'./cart-page.js';
export{checkout}from'./checkout-page.js';
export {orders,order,returnOrder,reviewOrder} from './orders.js';
