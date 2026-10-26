import{escape,positiveId,productCard,list}from'./ui.js';
import{catalogText as t}from'./catalog-core.js';
import{materialIcon}from'./material-icons.js';

export async function homeRecommendations(ctx){
 try{
  const response=await ctx.api.publicRequest('/products/recommendations',{query:{scene:'HOME',limit:12},signal:AbortSignal.any([ctx.signal,AbortSignal.timeout(6000)])});
  return{products:list(response?.items).map(item=>item?.product).filter(product=>positiveId(product?.id)),personal:response?.fallbackUsed!==true&&Number(response?.profileConfidence??0)>=.2};
 }catch{return{products:[],personal:false};}
}
// Original ProductHomeSelection freezes four unique candidates, excluding the
// first visible page. Future catalogue pages exclude these frozen ids.
export function selectHomeRecommendations(firstPage,result){
 if(!firstPage.length||!result)return[];
 const seen=new Set(firstPage.map(product=>String(product.id)));
 return(result.products||[]).filter(product=>{const id=positiveId(product?.id);if(!id||seen.has(id))return false;seen.add(id);return true;}).slice(0,4);
}
export function recommendationMarkup(products,{personal=false}={}){
 if(!products.length)return'';
 return`<section class="home-recommendations" aria-labelledby="home-recommendation-title"><h2 id="home-recommendation-title">${materialIcon('auto_awesome_outlined')}<span>${escape(t(personal?'productListRecommendationPersonalizedTitle':'productListRecommendationTitle'))}</span></h2><p>${escape(t(personal?'productListRecommendationPersonalizedSubtitle':'productListRecommendationSubtitle'))}</p><div class="home-recommendation-products">${products.map(product=>productCard(product,{density:'listing',sales:true,share:true})).join('')}</div></section>`;
}
export function bindRecommendationLayout(ctx){
 const host=ctx.find('#home-recommendation-host'),grid=ctx.find('#catalog-results');let frame=0;
 function update(){if(!ctx.active())return;const section=host.querySelector('.home-recommendations');if(!section)return;const columns=getComputedStyle(grid).gridTemplateColumns.split(' ').length,count=section.querySelectorAll('.product-card').length;section.dataset.layout=columns<=2?'grid':columns>=4&&count<=2?'compact':'rail';section.style.setProperty('--recommendation-card-width',columns>=4?'220px':'156px');}
 const observer=new ResizeObserver(()=>{if(frame)return;frame=requestAnimationFrame(()=>{frame=0;update();});});observer.observe(grid);observer.observe(host);ctx.cleanup(()=>{observer.disconnect();cancelAnimationFrame(frame);});return update;
}
