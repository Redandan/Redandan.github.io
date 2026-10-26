import{nativeOrderText as t,commerceText as c}from'./order-ui.js';
import{escape,title,imageUrl,money,list,productCard,button,route,positiveId}from'./ui.js';
const blockPattern=/<\s*agora-product-list\b([^>]*)>([\s\S]*?)<\s*\/\s*agora-product-list\s*>/gi;
const clamp=(value,fallback,min,max)=>Number.isFinite(Number(value))&&String(value).trim()?Math.max(min,Math.min(max,Number(value))):fallback;
function inert(html){const template=document.createElement('template');template.innerHTML=html;return template;}
function attributes(raw){const template=inert('<agora-product-list '+raw+'></agora-product-list>');return template.content.querySelector('agora-product-list');}
function cleanPreview(raw){
 const template=inert(raw);for(const node of template.content.querySelectorAll('script,iframe,form,object,embed,base,meta[http-equiv],link[rel=preload],link[rel=modulepreload]'))node.remove();
 for(const node of template.content.querySelectorAll('*'))for(const attr of [...node.attributes])if(/^on/i.test(attr.name)||attr.name==='srcdoc')node.removeAttribute(attr.name);
 return template.innerHTML;
}
export function previewDocument(raw){
 const policy="default-src 'none'; script-src 'none'; connect-src 'none'; frame-src 'none'; object-src 'none'; form-action 'none'; base-uri 'none'; img-src https: data:; style-src 'unsafe-inline' https:; font-src https: data:";
 return '<!doctype html><meta charset="utf-8"><meta http-equiv="Content-Security-Policy" content="'+policy+'"><meta name="referrer" content="no-referrer"><meta name="viewport" content="width=device-width,initial-scale=1"><style>html,body{margin:0;padding:0;overflow:hidden;overflow-wrap:anywhere}*,*:before,*:after{box-sizing:border-box}img,video,svg{max-width:100%}body{font-family:system-ui,sans-serif}</style>'+cleanPreview(raw);
}
export function splitStorefront(html){
 const segments=[];let cursor=0;
 for(const match of String(html).matchAll(blockPattern)){
  if(match.index>cursor)segments.push({kind:'html',html:html.slice(cursor,match.index)});
  const node=attributes(match[1]),body=inert(match[2]);segments.push({kind:'products',limit:Math.floor(clamp(node.getAttribute('limit'),8,1,24)),title:node.getAttribute('title')||'店家商品',description:node.getAttribute('description')||'',background:node.getAttribute('section-background'),color:node.getAttribute('title-color'),maxWidth:clamp(node.getAttribute('max-width'),920,320,1280),template:node.getAttribute('card')==='custom'?body.content.querySelector('template')?.innerHTML:null});cursor=match.index+match[0].length;
 }
 if(cursor<html.length)segments.push({kind:'html',html:html.slice(cursor)});return segments;
}
function frame(ctx,raw,{minimum=120,card=false}={}){
 const iframe=document.createElement('iframe');iframe.className=card?'storefront-card-preview':'storefront-brand-preview';iframe.title=card?'店家商品版面':'店家介紹版面';iframe.setAttribute('sandbox','allow-same-origin');iframe.setAttribute('referrerpolicy','no-referrer');iframe.setAttribute('loading','lazy');iframe.setAttribute('scrolling','no');iframe.style.cssText=`border:0;width:100%;display:block;pointer-events:none;height:${minimum}px;overflow:hidden`;
 let observer,timer;
 function resize(){if(!ctx.active()||!iframe.isConnected)return;try{const doc=iframe.contentDocument,height=Math.max(doc.body?.scrollHeight||0,doc.documentElement?.scrollHeight||0);iframe.style.height=Math.max(minimum,Math.min(12000,height))+'px';}catch{iframe.style.height=minimum+'px';}}
 iframe.addEventListener('load',()=>{if(!ctx.active())return;resize();try{observer?.disconnect();observer=new ResizeObserver(resize);if(iframe.contentDocument?.body)observer.observe(iframe.contentDocument.body);}catch{}timer=setTimeout(resize,250);},{signal:ctx.signal});
 iframe.srcdoc=previewDocument(raw);ctx.cleanup(()=>{observer?.disconnect();clearTimeout(timer);iframe.remove();});return iframe;
}
function customCard(template,p){
 const values={'product.id':String(p.id),'product.title':title(p),'product.priceUsdt':money(p.priceUsdt),'product.imageUrl':imageUrl(p.imageUrls?.[0]||p.imageUrl)||'','product.viewCount':String(p.viewCount||0),'product.stock':String(p.stockQuantity??p.stock??0)};
 let html=template;for(const[k,v]of Object.entries(values))html=html.split('{{'+k+'}}').join(escape(v));
 const fragment=inert(html),actions=[];for(const node of fragment.content.querySelectorAll('agora-action')){if(['open-product','add-to-cart'].includes(node.getAttribute('type')))actions.push({type:node.getAttribute('type'),label:node.textContent.trim().slice(0,100)});node.remove();}
 return{html:fragment.innerHTML,actions:actions.length?actions:[{type:'open-product',label:c('viewProduct')},{type:'add-to-cart',label:c('addCart')}]};
}
export async function storefront(ctx){
 const id=positiveId(ctx.params.id);if(!id)throw Error('無效店家編號');ctx.header(t('publicStorefrontHomeTitle'),true,{nativeAppBar:true,shortcuts:false});ctx.render('<section class="panel"><p role="status">'+escape(t('loading'))+'</p></section>');
 let home;try{home=await ctx.api.publicRequest('/storefront/home/'+id,{signal:ctx.signal});}catch(error){if(error.status===404){if(ctx.active())ctx.render(`<section class="panel"><h1>${escape(t('storefrontHomeNotPublishedTitle'))}</h1><a class="secondary" href="${route('/stores/'+id)}">${escape(c('backStore'))}</a></section>`);return;}throw error;}
 if(!ctx.active())return;if(!home?.html?.trim())throw Error(t('storefrontHomeNotPublishedTitle'));
 const segments=splitStorefront(home.html);ctx.render(`<div class="inline-actions"><a class="secondary" href="${route('/stores/'+id)}">${escape(c('storeProducts'))}</a></div><div id="storefront-content"></div>`);
 const host=ctx.find('#storefront-content');const cards=new Map();let counter=0;
 ctx.action('storefront-open',el=>{const p=cards.get(el.dataset.card);if(p)ctx.go('/products/'+p.id);});
 ctx.action('storefront-add',async el=>{const p=cards.get(el.dataset.card);if(!p)return;if(p.productType==='CREATOR_SUBSCRIPTION'||p.skus?.length){ctx.go('/products/'+p.id);return;}
  await ctx.api.command('cart.add',{productId:p.id,quantity:1});if(ctx.active())ctx.toast(c('addedCart'));
 });
 const loads=[];
 for(const segment of segments){
  if(segment.kind==='html'){
   const visible=inert(segment.html);for(const node of visible.content.querySelectorAll('style,link,meta,script'))node.remove();if(!visible.content.textContent.trim()&&!visible.content.querySelector('img,svg,video,canvas'))continue;
   const hint=inert(segment.html).content.querySelector('[data-agora-preview-height]');const minimum=clamp(hint?.getAttribute(innerWidth<=640?'data-agora-preview-height-mobile':'data-agora-preview-height'),120,40,12000);host.append(frame(ctx,segment.html,{minimum}));continue;
  }
  const section=document.createElement('section');section.className='panel storefront-products';section.style.maxWidth=segment.maxWidth+'px';section.style.marginInline='auto';section.style.width='100%';
  if(/^#[\da-f]{6}$/i.test(segment.background||''))section.style.background=segment.background;if(/^#[\da-f]{6}$/i.test(segment.color||''))section.style.color=segment.color;
  section.innerHTML=`<h2>${escape(segment.title)}</h2>${segment.description?`<p>${escape(segment.description)}</p>`:''}<div class="product-grid" role="status">${escape(c('loadProducts'))}</div>`;host.append(section);const grid=section.querySelector('.product-grid');
  loads.push((async()=>{try{const products=list(await ctx.api.publicRequest('/products/search',{method:'POST',body:{sellerId:Number(id),page:1,size:segment.limit,sortBy:'createdAt',sortDirection:'DESC'},signal:ctx.signal}));if(!ctx.active())return;grid.removeAttribute('role');
   if(!segment.template){grid.innerHTML=products.map(productCard).join('')||'<p>'+escape(c('noProducts'))+'</p>';return;}
   grid.replaceChildren();for(const p of products){const value=customCard(segment.template,p),key=String(++counter);cards.set(key,p);const article=document.createElement('article');article.className='panel';article.style.padding='8px';article.append(frame(ctx,value.html,{minimum:180,card:true}));const actions=document.createElement('div');actions.className='stack';actions.innerHTML=value.actions.map(v=>button(v.type==='add-to-cart'&&(p.skus?.length||p.productType==='CREATOR_SUBSCRIPTION')?c('selectPlan'):v.label||c('viewProduct'),v.type==='open-product'?'storefront-open':'storefront-add',v.type==='open-product'?'secondary':'primary',`data-card="${key}"`)).join('');article.append(actions);grid.append(article);}if(!products.length)grid.textContent=c('noProducts');
  }catch(error){if(ctx.active())grid.textContent=error.message;}})());
 }
 await Promise.all(loads);
}
