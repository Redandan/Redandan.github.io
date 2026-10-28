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
// Public release metadata only, held for this document. No account data or
// failed result is persisted, and every explicit check still reaches the server.
const publications=new Map();
const validTag=value=>typeof value==='string'&&/^(?:W\/)?"[\x21\x23-\x7e]{0,160}"$/.test(value);
export async function readPublishedBuyerVersion(base,signal,{request=fetch,timeout=8000}={}){
 const url=new URL(base);url.search='';url.hash='';const key=url.href,previous=publications.get(key),ticket={value:previous?.value,etag:previous?.etag};
 publications.delete(key);publications.set(key,ticket);if(publications.size>8)publications.delete(publications.keys().next().value);
 const controller=new AbortController(),cancel=()=>controller.abort(signal.reason),timer=setTimeout(()=>controller.abort(new DOMException('Version read timed out','TimeoutError')),timeout);
 if(signal.aborted)cancel();else signal.addEventListener('abort',cancel,{once:true});
 try{
  const headers={Accept:'application/json','Cache-Control':'no-cache'};if(previous?.etag)headers['If-None-Match']=previous.etag;
  const response=await request(url,{headers,cache:'no-cache',credentials:'omit',signal:controller.signal});
  if(controller.signal.aborted)throw controller.signal.reason;
  if(response.status===304){if(!previous?.etag)throw Error('Version manifest returned 304 without a validated prior result');return previous.value;}
  if(response.status!==200)throw Error('Version manifest returned HTTP '+response.status);
  const value=publishedBuyerVersion(await response.json());if(controller.signal.aborted)throw controller.signal.reason;
  const etag=response.headers?.get?.('ETag');
  if(publications.get(key)===ticket){ticket.value=value;ticket.etag=validTag(etag)?etag:null;}
  return value;
 }finally{clearTimeout(timer);signal.removeEventListener('abort',cancel);}
}
