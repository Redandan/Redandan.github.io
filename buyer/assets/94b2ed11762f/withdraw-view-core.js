export const withdrawQuickAmounts=Object.freeze(['100','500','1000','5000','10000']);
export function withdrawStatusKey(value){const keys={PENDING:'withdrawStatusPending',PROCESSING:'withdrawStatusProcessing',COMPLETED:'withdrawStatusCompleted',CANCELLED:'withdrawStatusCancelled',FAILED:'withdrawStatusFailed'};return Object.hasOwn(keys,value)?keys[value]:'withdrawStatusUnknown';}
export function withdrawDraft(value={}){return{amount:typeof value.amount==='string'?value.amount:'',address:typeof value.address==='string'?value.address:'',protocol:['TRC20','ERC20'].includes(value.protocol)?value.protocol:'TRC20'};}
export function withdrawValidAmount(value){return typeof value==='string'&&/^[0-9]{1,9}([.][0-9]{1,2})?$/.test(value)&&Number(value)>0;}
