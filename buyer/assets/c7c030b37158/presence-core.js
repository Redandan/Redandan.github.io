// Presentation hints can schedule a session read; they never select an account.
export function createBuyerPresence({visible,hasHint,schedule,cancel,confirm,start,remember,report}){
 let generation=0,timer=null,busy=false,force=false,confirmedAnonymous=false,stopped=false;
 function clear(){if(timer!==null){cancel(timer);timer=null;}}
 async function run(){
  timer=null;if(stopped||busy||!visible())return;
  if(!force&&(confirmedAnonymous||!hasHint()))return;
  force=false;busy=true;const own=generation;report('checking');
  try{
   const value=await confirm();if(stopped||own!==generation||!visible())return;
   if(!value.authenticated){if(value.requiresReload||!['anonymous','AUTH_REQUIRED'].includes(value.availability)){report('unavailable');return;}confirmedAnonymous=true;remember(false);report('anonymous');return;}
   remember(true);await start();if(own===generation&&!stopped)report('listening');
  }catch(error){if(own===generation&&!stopped)report(error.name==='AbortError'?'deferred':'unavailable');}
  finally{busy=false;if(own!==generation&&!stopped)ready();}
 }
 function ready(){if(stopped||timer!==null||busy||!visible())return;if(!force&&(confirmedAnonymous||!hasHint()))return;timer=schedule(run);}
 function invalidate({retry=false}={}){generation++;clear();confirmedAnonymous=false;force=retry;if(visible())ready();}
 function stop(){stopped=true;generation++;clear();report('stopped');}
 return Object.freeze({ready,invalidate,stop});
}
