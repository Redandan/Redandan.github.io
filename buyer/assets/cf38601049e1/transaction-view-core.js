import{walletFixed,walletDate}from'./wallet-view-core.js';
// Direct equivalents of transaction_filter_helpers.dart and PurchaseMoneyFormatter.
export const transactionTypes=Object.freeze(['DEPOSIT','WITHDRAW','PAYMENT','RECEIVE','REFUND','STAKING','UNSTAKING','INTEREST','MARKET_CREATION','BET','BET_WIN','BET_REFUND','SLOT_BET','SLOT_WIN','MANUAL_ADJUST']);
const historyKeys={DEPOSIT:'deposit',WITHDRAW:'withdraw',PAYMENT:'payment',RECEIVE:'receipt',REFUND:'refund',STAKING:'stake',UNSTAKING:'unstake',INTEREST:'interest',MARKET_CREATION:'transactionMarketCreation',BET:'transactionBet',BET_WIN:'transactionBetWin',BET_REFUND:'transactionBetRefund',SLOT_BET:'transactionSlotBet',SLOT_WIN:'transactionSlotWin',MANUAL_ADJUST:'transactionManualAdjust'};
const detailKeys={...historyKeys,DEPOSIT:'transactionDeposit',WITHDRAW:'transactionWithdraw',PAYMENT:'transactionPayment',RECEIVE:'transactionReceive',REFUND:'transactionRefund',STAKING:'transactionStaking',UNSTAKING:'transactionUnstaking',INTEREST:'transactionInterest'};
export function transactionType(value){const type=typeof value==='string'?value.trim():'';return transactionTypes.includes(type)?type:null;}
export function transactionLabel(type,detail=false){const map=detail?detailKeys:historyKeys;return Object.hasOwn(map,type)?map[type]:'transactionUnknown';}
export function transactionCurrency(value){const code=typeof value==='string'?value.trim().toUpperCase():'';return!code||code==='TWD'||code==='THB'?'USDT':code;}
export function transactionMoney(value,currency,signed=false){return(signed&&value>0?'+':'')+walletFixed(value)+' '+transactionCurrency(currency);}
export function transactionTone(value,detail=false){return value>0?'positive':value<0?'negative':detail?'neutral':'zero';}
export function transactionIcon(type,amount,detail=false){return detail?(amount>0?'arrow_downward_rounded':'arrow_upward_rounded'):['DEPOSIT','RECEIVE','REFUND','INTEREST','UNSTAKING'].includes(type)?'arrow_upward':'arrow_downward';}
export function transactionDate(value,detail=false){const full=walletDate(value);return!full?'':detail?full:full.slice(0,10).replaceAll('-','/')+' '+full.slice(11,16);}
export function transactionDescription(value){return value.description??value.remark??'';}
export const transactionPageSize=width=>width>=1100?24:width>=650?16:10;
export function transactionDay(value,end=false){
 if(typeof value!=='string'||!/^\d{4}-\d{2}-\d{2}$/.test(value))return null;
 const[y,m,d]=value.split('-').map(Number),date=new Date(y,m-1,d,end?23:0,end?59:0,end?59:0,end?999:0);
 return date.getFullYear()===y&&date.getMonth()===m-1&&date.getDate()===d?date:null;
}
export function transactionRange(start,end){
 if(!start&&!end)return{startDate:null,endDate:null};
 const first=transactionDay(start),last=transactionDay(end,true);if(!first||!last||first>last)throw new RangeError('Invalid transaction date range');
 return{startDate:first.toISOString(),endDate:last.toISOString()};
}
export function transactionMerge(existing,incoming){const seen=new Set();return[...existing,...incoming].filter(value=>{if(value.id==null)return true;const key=String(value.id);if(seen.has(key))return false;seen.add(key);return true;});}
export function transactionHasMore(value,items,size,added,reset){return!reset&&items.length>0&&added===0?false:typeof value.last==='boolean'?!value.last:items.length>=size;}
