function parts(value){if(typeof value!=='string'||!/^(0|[1-9][0-9]*)([.][0-9]+)?$/.test(value))return null;let[whole,fraction='']=value.split('.');fraction=fraction.replace(/0+$/,'');if(whole.length>14||fraction.length>12)return null;return{whole,fraction};}
export function stakeExact(value){const parsed=parts(value);return parsed?parsed.whole+(parsed.fraction?'.'+parsed.fraction:''):'—';}
export function stakeFixed(value,digits=6){const parsed=parts(value);if(!parsed||parsed.fraction.length>digits)return'—';return parsed.whole+(digits?'.'+parsed.fraction.padEnd(digits,'0'):'');}
export function stakeScale(value){return parts(value)?.fraction.length??Infinity;}
export function stakeValidInput(value){const parsed=parts(value);return !!parsed&&value.length<=21&&parsed.fraction.length<=4&&BigInt(parsed.whole+parsed.fraction)>0n;}
export function stakePercent(value){const parsed=parts(value);if(!parsed)return'—';const digits=(parsed.whole+parsed.fraction).replace(/^0+(?=[0-9])/,'');if(digits==='0')return'0';let scale=parsed.fraction.length-2;if(scale<=0)return digits+'0'.repeat(-scale);const padded=digits.padStart(scale+1,'0'),whole=padded.slice(0,-scale),fraction=padded.slice(-scale).replace(/0+$/,'');return whole+(fraction?'.'+fraction:'');}
export function stakeResolved(value){return !!value&&(value.rejected===true||value.receipt!=null)&&value.resolved===true;}
export function stakeCanResume(value){return !!value&&!stakeResolved(value)&&value.rejected!==true&&value.receipt==null&&stakeScale(value.intent?.principal)<=4;}
export function stakeStatusKey(value){const keys={STAKING:'stakeStatusStaking',RETURNED:'stakeStatusReturned'};return Object.hasOwn(keys,value)?keys[value]:'stakeStatusUnknown';}
