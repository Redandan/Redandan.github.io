import{currentLocale}from'./locale.js';
import{categories,labels}from'./catalog-copy.js';
export{categories};
export const catalogText=(key,args={})=>{
 const value=labels[currentLocale()]?.[key]??labels['zh-TW'][key];
 if(typeof value!=='string')throw Error('Unknown catalogue label: '+key);
 return value.replace(/\{(\w+)\}/g,(match,name)=>Object.hasOwn(args,name)?String(args[name]):match);
};
export const filterFields=['keyword','category','brand','inStock','productType','sourceRegion','sourcePlatform'];
const types=new Set(['PHYSICAL','DIGITAL_SERVICE','CREATOR_SUBSCRIPTION']);
export function categoryValue(value){
 const clean=String(value||'').trim();
 const category=categories.find(c=>c.name.toLowerCase()===clean.toLowerCase()||c.value===clean||Object.values(labels).some(locale=>locale[c.label]===clean));
 return category?.value??null;
}
export function readFilters(query){
 const result={};
 for(const key of filterFields){const value=query.get(key)?.trim();if(value)result[key]=value;}
 if(!Object.hasOwn(result,'keyword')&&query.get('q')?.trim())result.keyword=query.get('q').trim();
 if(result.inStock?.toLowerCase()==='true')result.inStock=true;else delete result.inStock;
 if(!types.has(result.productType))delete result.productType;
 return result;
}
export function filterCount(filters){return['brand','productType','sourceRegion','sourcePlatform'].filter(k=>filters[k]?.trim()).length+(filters.inStock===true?1:0);}
export function filterRoute(filters,path='/home'){
 const query=new URLSearchParams();
 for(const key of filterFields){const value=filters[key];if(key==='inStock'){if(value===true)query.set(key,'true');}else if(typeof value==='string'&&value.trim())query.set(key,value.trim());}
 return path+(query.size?'?'+query:'');
}
// Match the original home/search query builder, which omits sorting and brand.
// The API supports sorting; seller storefronts use their own original sort values.
export function searchBody(filters,page=1,size=24){
 const body={page,size};
 for(const key of ['keyword','sourceRegion','sourcePlatform'])if(filters[key]?.trim())body[key]=filters[key].trim();
 const category=categoryValue(filters.category);if(category)body.category=category;
 if(filters.inStock===true)body.inStock=true;
 if(types.has(filters.productType))body.productType=filters.productType;
 return body;
}
const historyKey='flutter.search_history';
export function searchHistory(){try{const value=JSON.parse(localStorage.getItem(historyKey));return Array.isArray(value)?value.filter(v=>typeof v==='string'&&v.trim()).slice(0,10):[];}catch{return[];}}
export function updateSearchHistory(keyword,{remove=false,clear=false}={}){
 const clean=String(keyword||'').trim(),old=searchHistory();
 const next=clear?[]:remove?old.filter(v=>v!==clean):clean?[clean,...old.filter(v=>v!==clean)].slice(0,10):old;
 try{localStorage.setItem(historyKey,JSON.stringify(next));}catch{/* Search remains usable if storage is blocked. */}
 return next;
}
export function hotKeywords(response){
 const seen=new Set();return(Array.isArray(response)?response:[]).flatMap(row=>{
  const value=typeof row?.sampleQuery==='string'&&row.sampleQuery.trim()?row.sampleQuery.trim():typeof row?.keyword==='string'?row.keyword.trim():'';
  if(!value||seen.has(value.toLowerCase()))return[];seen.add(value.toLowerCase());return[value];
 });
}
