let epoch=0;const hot=new Map();
export async function publicHotKeywords(locale,read,{now=()=>Date.now()}={}){const entry=hot.get(locale);if(entry&&now()-entry.at>=0&&now()-entry.at<60000)return entry.promise;const owned=epoch,promise=Promise.resolve().then(read).then(values=>{if(epoch!==owned)return values;return values;}).catch(error=>{if(hot.get(locale)?.promise===promise)hot.delete(locale);throw error;});hot.set(locale,{at:now(),promise});if(hot.size>16)hot.delete(hot.keys().next().value);return promise;}
export function clearPublicSearchMemory(){epoch++;hot.clear();}
for(const type of['pagehide','agora-buyer-auth'])globalThis.addEventListener?.(type,clearPublicSearchMemory);
