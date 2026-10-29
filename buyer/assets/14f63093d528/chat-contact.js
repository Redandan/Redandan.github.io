let pending;const conversations=new Map();
function clear(){pending=null;conversations.clear();}
addEventListener('agora-buyer-auth',clear);addEventListener('pagehide',clear);
export async function openProductChat(ctx,productId){await ctx.requireLogin();const value=await ctx.api.command('chat.contactProduct',{productId});if(ctx.active()){pending=value;ctx.go('/chat/new/'+value.receiverId);}}
export async function openOrderChat(ctx,orderId){const value=await ctx.api.command('chat.contactOrder',{orderId});if(ctx.active()){pending=value;ctx.go('/chat/new/'+value.receiverId);}}
export function takeContact(receiverId){const value=pending;pending=null;return value?.receiverId===receiverId?value:null;}
export function attachContact(sessionId,contactId){if(conversations.size>=24)conversations.delete(conversations.keys().next().value);conversations.set(sessionId,contactId);}
export function contactFor(sessionId){return conversations.get(sessionId);}
