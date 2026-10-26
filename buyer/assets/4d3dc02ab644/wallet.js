import{walletHome}from'./wallet-home.js';
import{withdrawalPendingMarkup}from'./withdraw-markup.js';
export{deposit}from'./deposit-page.js';
export{withdraw}from'./withdraw-page.js';
export{transactions,transaction}from'./transaction-pages.js';
export{stake}from'./staking-page.js';
export async function wallet(ctx){return walletHome(ctx,{withdrawalPanel:(value,copy)=>withdrawalPendingMarkup(value,copy,{cancel:false})});}
