// The original PublishedWebVersion contract, shared by the buyer settings UI.
// Source: lib/core/services/published_web_version.dart. Rollbacks count as a
// different publication too; no successful result is invented after a timeout.
export function publishedBuyerVersion(data){
 if(!data||typeof data!=='object'||Array.isArray(data))throw Error('Invalid version manifest');
 const match=/^(\d+\.\d+\.\d+)(?:\+(\d+))?$/.exec(String(data.version??''));
 if(data.build_number!=null&&!['string','number'].includes(typeof data.build_number))throw Error('Invalid published build identity');
 if(data.source_commit!=null&&typeof data.source_commit!=='string')throw Error('Invalid published build identity');
 const build=String(data.build_number??match?.[2]??''),source=String(data.source_commit??'').toLowerCase();
 if(!match||!/^\d+$/.test(build)||match[2]!=null&&match[2]!==build||source&&!/^[0-9a-f]{40}$/.test(source))throw Error('Invalid published build identity');
 return Object.freeze({version:match[1],buildNumber:build,sourceCommit:source,fullVersion:match[1]+'+'+build});
}
export function publishedBuyerDiffers(published,runningVersion,sourceCommit=''){
 return published.fullVersion!==runningVersion||!!published.sourceCommit&&!!sourceCommit&&published.sourceCommit!==sourceCommit.toLowerCase();
}
export async function readPublishedBuyerVersion(base,signal,{request=fetch,timeout=8000}={}){
 const url=new URL(base);url.search='';url.hash='';url.searchParams.set('probe',Date.now().toString());
 const controller=new AbortController(),cancel=()=>controller.abort(signal.reason),timer=setTimeout(()=>controller.abort(new DOMException('Version read timed out','TimeoutError')),timeout);
 if(signal.aborted)cancel();else signal.addEventListener('abort',cancel,{once:true});
 try{
  const response=await request(url,{headers:{Accept:'application/json','Cache-Control':'no-cache'},cache:'no-store',credentials:'omit',signal:controller.signal});
  if(response.status!==200)throw Error('Version manifest returned HTTP '+response.status);
  return publishedBuyerVersion(await response.json());
 }finally{clearTimeout(timer);signal.removeEventListener('abort',cancel);}
}
