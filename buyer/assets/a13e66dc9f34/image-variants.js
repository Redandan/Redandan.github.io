import{imageVariants}from'./image-variant-manifest.js';
const checks=new Map();
export function cardImageMarkup(url,name,escape){return imageVariants[url]?`<img data-optimized-image="${escape(url)}" alt="${escape(name)}" loading="lazy" decoding="async">`:`<img src="${escape(url)}" alt="${escape(name)}" loading="lazy" decoding="async">`;}
async function validated(url){
 const entry=imageVariants[url];if(!entry)return null;
 const cached=checks.get(url);if(cached&&Date.now()-cached.at>=0&&Date.now()-cached.at<300000)return cached.promise;
 const promise=(async()=>{try{const response=await fetch(url,{method:'HEAD',credentials:'omit',cache:'no-cache',signal:AbortSignal.timeout(2000)});return response.status===200&&response.headers.get('etag')?.replace(/^W\//,'').replaceAll('"','')===entry.etag?entry:null;}catch{return null;}})();checks.set(url,{at:Date.now(),promise});return promise;
}
export function fallbackCardImage(img){const original=img.dataset.originalImage;if(!original)return false;if(img.dataset.imageFallback==='pending')return true;if(img.currentSrc===original&&img.dataset.imageFallback==='original')return false;img.dataset.imageFallback='pending';img.removeAttribute('srcset');img.removeAttribute('src');img.loading='eager';requestAnimationFrame(()=>{img.dataset.imageFallback='original';img.src=original;});return true;}
export function bindOptimizedImages(ctx){
 const main=document.querySelector('#buyer-main'),pending=new Set();
 async function load(img){if(img.dataset.optimizedState)return;img.dataset.optimizedState='pending';pending.add(img);const url=img.dataset.optimizedImage,entry=await validated(url);if(!ctx.active()||!img.isConnected)return;pending.delete(img);img.dataset.originalImage=url;if(entry){img.sizes='(min-width: 1440px) 280px, (min-width: 1100px) 25vw, (min-width: 650px) 33vw, 50vw';img.srcset=[...entry.variants.map(v=>new URL(v.file,import.meta.url).href+' '+v.width+'w'),...(entry.original_width>entry.variants.at(-1).width?[url+' '+entry.original_width+'w']:[])].join(', ');img.src=new URL(entry.variants[0].file,import.meta.url).href;}else img.src=url;delete img.dataset.optimizedImage;delete img.dataset.optimizedState;}
 const observer=typeof IntersectionObserver==='function'?new IntersectionObserver(entries=>{for(const entry of entries)if(entry.isIntersecting){observer.unobserve(entry.target);void load(entry.target);}},{root:main,rootMargin:'700px'}):null;
 const scan=node=>{for(const img of[node,...(node.querySelectorAll?.('.product-picture img')||[])])if(img.matches?.('.product-picture img')){if(img.complete&&img.naturalWidth>0){const placeholder=img.parentElement.querySelector('.product-card-placeholder');if(placeholder)placeholder.hidden=true;}else if(img.complete&&img.currentSrc&&!img.naturalWidth){if(!fallbackCardImage(img))img.remove();}if(img.dataset.optimizedImage){if(observer)observer.observe(img);else void load(img);}}};
 const mutations=new MutationObserver(rows=>{for(const row of rows)for(const node of row.addedNodes)if(node.nodeType===1)scan(node);});mutations.observe(main,{childList:true,subtree:true});scan(main);
 ctx.cleanup(()=>{observer?.disconnect();mutations.disconnect();for(const img of pending)delete img.dataset.optimizedState;pending.clear();});
}
