// Schedule the existing state-preserving root worker after the buyer is ready.
// That worker owns cache retirement and unregisters only itself. This helper
// never clears storage, reloads a page, claims clients, or replaces another app.
export async function retireLegacyRuntime({serviceWorker=globalThis.navigator?.serviceWorker,storage=globalThis.caches,origin=globalThis.location?.origin}={}){
 if(!serviceWorker||!storage||!origin)return{status:'unsupported'};
 const root=new URL('/',origin).href,script=new URL('/flutter_service_worker.js',origin).href;
 const registrations=await serviceWorker.getRegistrations(),existing=registrations.find(r=>r.scope===root);
 const owns=worker=>{if(!worker)return true;try{const url=new URL(worker.scriptURL);return url.origin===origin&&url.pathname==='/flutter_service_worker.js';}catch{return false;}};
 if(existing&&(!owns(existing.active)||!owns(existing.waiting)||!owns(existing.installing)))return{status:'unrelated-root-worker'};
 const keys=await storage.keys(),stale=keys.some(name=>!name.startsWith('agora-buyer-static:')&&(name.startsWith('agora-')||['flutter-app-cache','flutter-temp-cache','flutter-app-manifest'].includes(name)));
 if(!existing&&!stale)return{status:'not-needed'};
 await serviceWorker.register(script,{scope:root,updateViaCache:'none'});
 return{status:'scheduled'};
}
