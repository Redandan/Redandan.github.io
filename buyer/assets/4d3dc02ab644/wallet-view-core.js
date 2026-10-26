// Presentation only. Original wallet amount, date and type semantics.
const numeric=value=>typeof value==='number'&&Number.isFinite(value)?value:0;
export const walletFixed=value=>numeric(value).toFixed(2);
export const walletTotal=user=>user.totalAssets??user.balance??0;
export function transactionPresentation(value){
 const map={DEPOSIT:['transactionDeposit','arrow_downward_rounded'],WITHDRAW:['transactionWithdraw','arrow_upward_rounded'],STAKING:['transactionStaking','lock_rounded'],UNSTAKING:['transactionUnstaking','lock_open_rounded'],PAYMENT:['transactionPayment','payment_rounded'],RECEIVE:['transactionReceive','payment_rounded'],REFUND:['transactionRefund','replay_rounded'],INTEREST:['transactionInterest','percent_rounded']},[label,icon]=map[value.type]||['transactionDefault','payment_rounded'],amount=numeric(value.amount);
 return{label,icon,sign:amount>0?'positive':amount<0?'negative':'zero',amount:(amount>=0?'+':'')+walletFixed(amount)+' '+(value.currency||'USDT')};
}
export function walletDate(value){
 if(!value)return'';const date=new Date(value);if(!Number.isFinite(date.getTime()))return'';
 const pad=value=>String(value).padStart(2,'0');
 return date.getFullYear()+'-'+pad(date.getMonth()+1)+'-'+pad(date.getDate())+' '+pad(date.getHours())+':'+pad(date.getMinutes())+':'+pad(date.getSeconds());
}
