import{uiText}from'./ui-text.js';
import{currentLocale,setLocale,commonText}from'./locale.js';
import {escape,field,button,icon,list,route,money} from './ui.js';
export{login,register,oauthReturn}from'./account-sign-in.js';
export{profile}from'./profile-page.js';
export{editProfile}from'./profile-editor.js';
export async function addresses(ctx){const{addresses}=await import('./addresses.js');return addresses(ctx);}
export async function security(ctx){const{security}=await import('./account-security.js');return security(ctx);}
export async function devices(ctx){const{devices}=await import('./devices-page.js');return devices(ctx);}
