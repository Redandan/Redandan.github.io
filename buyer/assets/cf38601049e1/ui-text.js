import{currentLocale}from'./locale.js';
import{strings}from'./ui-strings.js';
// Explicit source literals only. Never walk or rewrite the DOM, product values,
// messages, field values, API errors, names or other user-authored content.
export function uiText(source,args={}){
 const value=strings[currentLocale()]?.[source]??source;
 return value.replace(/\{(\w+)\}/g,(match,key)=>Object.hasOwn(args,key)?String(args[key]):match);
}
