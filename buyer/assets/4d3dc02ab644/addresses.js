import{attachAddressLocation,coordinates}from'./address-location.js';
import{escape,list,button}from'./ui.js';
import{originalCopy,commonText,currentLocale}from'./locale.js';
import{materialIcon as mi}from'./material-icons.js';
import{createBuyerDialogs}from'./native-dialog.js';
import{addressProviders,addressClipboard,validAddressType}from'./address-view-core.js';
import{addressListMarkup,addressEditorMarkup,addressSearchMarkup}from'./address-markup.js';
const extra={
 'zh-TW':{manual:'可使用門市搜尋，也可直接填寫門市資訊。',uncertain:'操作結果尚未確認。請先重新讀取地址清單，確認原操作結果。'},
 'zh-CN':{manual:'可使用门店搜索，也可直接填写门店信息。',uncertain:'操作结果尚未确认。请先重新读取地址列表，确认原操作结果。'},
 'en-US':{manual:'Search for a store, or enter its details directly.',uncertain:'The result is not confirmed. Read the address list again to check the original operation.'},
 'th-TH':{manual:'ค้นหาสาขาหรือกรอกข้อมูลสาขาได้โดยตรง',uncertain:'ยังไม่ยืนยันผล โปรดอ่านรายการที่อยู่อีกครั้งเพื่อตรวจสอบการดำเนินการเดิม'}
};
function addressError(error,copy){const message=String(error?.message||'');return['DATABASE_ERROR','ApiException 500','Database Error'].some(value=>message.includes(value))?copy.t('addressSaveTemporaryUnavailable'):message;}
export async function addresses(ctx){
 ctx.header(commonText('profile'),true,{nativeAppBar:true,nativeBack:"compact",shortcuts:false});const copy=await originalCopy(ctx.signal);if(!ctx.active())return;
 const editingId=ctx.query?.get('edit'),initial=ctx.query?.get('serviceType'),isEditor=ctx.query?.get('new')==='1'||!!editingId;
 ctx.header(copy.t(isEditor?editingId?'editAddress':'addAddress':'addressManagement'),true,{nativeAppBar:true,nativeBack:"compact",shortcuts:false,backLabel:copy.t('back'),backTooltip:copy.t('back'),actionMarkup:isEditor?`<button type="submit" form="address-form" class="address-save-header" disabled data-address-loading data-address-control aria-label="${escape(copy.t('saveAddress'))}">${escape(copy.t('save'))}</button>`:''});
 let values;
 try{values=list(await ctx.api.request('/user-addresses/list'));}catch(error){if(!ctx.active()||error.name==='AbortError')return;ctx.render(`<section class="buyer-address-list"><div class="panel error-panel"><p>${escape(addressError(error,copy)||copy.t('loadDataFailed'))}</p>${button(copy.t('retry'),'address-read-result','secondary')}</div></section>`,{navigation:false});ctx.action('address-read-result',()=>ctx.reload());return;}
 if(!ctx.active())return;
 const selected=editingId?values.find(value=>String(value.id)===editingId):null;
 if(editingId&&!selected)throw Error(copy.t('addressSessionChanged'));
 const lockedType=!selected&&validAddressType(initial),initialType=selected?.serviceType||(lockedType?initial:'');
 let busy=false,uncertain=false,searchRevision=0,stores=[],storePage=0,lastSearch=null,menu=null,menuFocus=null;
 const dialogs=createBuyerDialogs(ctx,{cancelLabel:copy.t('cancel')});
 ctx.render(isEditor?addressEditorMarkup(selected,initialType,lockedType,copy):addressListMarkup(values,copy),{navigation:false});
 const main=document.querySelector('#buyer-main'),form=ctx.find('#address-form');
 if(form){const save=document.querySelector('.address-save-header');if(save){save.disabled=false;save.removeAttribute('data-address-loading');}}
 function closeMenu(){if(menu){menu.remove();menu=null;if(menuFocus?.isConnected)menuFocus.focus({preventScroll:true});menuFocus=null;}}
 ctx.cleanup(closeMenu);main.addEventListener('scroll',closeMenu,{passive:true,signal:ctx.signal});addEventListener('resize',closeMenu,{signal:ctx.signal});visualViewport?.addEventListener('resize',closeMenu,{signal:ctx.signal});
 document.addEventListener('click',event=>{if(menu&&!menu.contains(event.target)&&!event.target.closest('[data-action=address-menu]'))closeMenu();},{signal:ctx.signal});
 ctx.action('address-new',element=>{if(busy||uncertain)return;const type=element.dataset.type;ctx.go('/addresses?new=1'+(validAddressType(type)?'&serviceType='+type:''));});
 ctx.action('toggle-address-provider',element=>{const expanded=element.getAttribute('aria-expanded')==='true';element.setAttribute('aria-expanded',String(!expanded));ctx.find('#'+element.getAttribute('aria-controls')).hidden=expanded;});
 ctx.action('address-menu',element=>{
  if(busy||uncertain)return;closeMenu();const address=values.find(value=>String(value.id)===element.dataset.id);if(!address)return;menuFocus=element;menu=document.createElement('div');menu.className='address-popup-menu';menu.setAttribute('role','menu');menu.setAttribute('aria-label',copy.t('editAddress')+' '+address.recipientName);
  const action=(key,name,icon)=>`<button type="button" role="menuitem" data-action="${name}" data-id="${address.id}" data-address-control>${mi(icon)}${escape(copy.t(key))}</button>`;
  menu.innerHTML=(address.isDefault?'':action('setAsDefault','default-address','star_outline'))+action('edit','edit-address','edit_outlined')+action('copyAddress','copy-address','content_copy')+action('delete','delete-address','delete_outline');main.append(menu);
  const frame=document.querySelector('#buyer-app').getBoundingClientRect(),anchor=element.getBoundingClientRect();menu.style.maxWidth=Math.max(0,frame.width-32)+'px';menu.style.maxHeight=Math.max(0,frame.height-32)+'px';const rect=menu.getBoundingClientRect();menu.style.left=Math.max(frame.left+16,Math.min(anchor.right-rect.width,frame.right-rect.width-16))+'px';menu.style.top=Math.max(frame.top+16,Math.min(anchor.bottom+4,frame.bottom-rect.height-16))+'px';menu.querySelector('button').focus({preventScroll:true});
  menu.addEventListener('keydown',event=>{const buttons=[...menu.querySelectorAll('button')],index=buttons.indexOf(document.activeElement);if(event.key==='Escape'){event.preventDefault();closeMenu();}else if(event.key==='Tab')closeMenu();else if(['ArrowDown','ArrowUp','Home','End'].includes(event.key)){event.preventDefault();buttons[event.key==='Home'?0:event.key==='End'?buttons.length-1:(index+(event.key==='ArrowDown'?1:-1)+buttons.length)%buttons.length].focus({preventScroll:true});}},{signal:ctx.signal});
 });
 ctx.action('copy-address',async element=>{const address=values.find(value=>String(value.id)===element.dataset.id);if(!address||busy||uncertain)return;closeMenu();await navigator.clipboard.writeText(addressClipboard(address));if(ctx.active())ctx.toast(copy.t('addressCopiedToClipboard'));});
 ctx.action('edit-address',element=>{if(busy||uncertain||!values.some(value=>String(value.id)===element.dataset.id))return;closeMenu();ctx.go('/addresses?edit='+encodeURIComponent(element.dataset.id));});
 function controls(locked){if(form)form.querySelector('fieldset').disabled=locked;for(const control of document.querySelectorAll('[data-address-control]')){const isLocked=locked||control.hasAttribute('data-action-locked');control.disabled=isLocked;control.setAttribute('aria-disabled',String(isLocked));if(control.tagName==='A')control.tabIndex=isLocked?-1:0;}}
 async function write(path,options){
  if(busy||uncertain)return;busy=true;closeMenu();controls(true);
  try{await ctx.api.request(path,options);if(ctx.active()){ctx.toast(copy.t(isEditor?selected?'addressUpdatedSuccessfully':'addressCreatedSuccessfully':options.method==='DELETE'?'addressDeleteSuccess':'defaultAddressSetSuccess'));if(isEditor){if(ctx.finishSecondary)ctx.finishSecondary('/addresses',['/addresses','/checkout']);else ctx.go('/addresses');}else await ctx.reload();}}
  catch(error){if(!ctx.active()||error.name==='AbortError')return;uncertain=true;ctx.toast(extra[currentLocale()].uncertain);ctx.find('#address-write-result').innerHTML=`<p class="form-errors">${escape(addressError(error,copy)||copy.t('addressSaveTemporaryUnavailable'))}</p><p>${escape(extra[currentLocale()].uncertain)}</p>${button(copy.t('retryLoadingAddresses'),'address-read-result','secondary')}`;}
  finally{busy=false;if(ctx.active())controls(uncertain);}
 }
 ctx.action('address-read-result',()=>ctx.reload());
 ctx.action('default-address',element=>values.some(value=>String(value.id)===element.dataset.id)&&write('/user-addresses/'+encodeURIComponent(element.dataset.id)+'/set-default',{method:'POST'}));
 ctx.action('delete-address',async element=>{const address=values.find(value=>String(value.id)===element.dataset.id);if(!address||busy||uncertain)return;closeMenu();const confirmed=await dialogs.confirm({title:copy.t('confirmDelete'),content:`<p>${escape(copy.t('confirmDeleteAddress'))}</p>`,confirmLabel:copy.t('delete')});if(confirmed&&ctx.active())await write('/user-addresses/'+encodeURIComponent(address.id),{method:'DELETE'});});
 if(!form)return;
 function toggleType(){
  const type=form.elements.serviceType.value,home=type==='HOME_DELIVERY',valid=validAddressType(type);ctx.find('#address-details-section').hidden=!valid;ctx.find('#address-details-title').textContent=copy.t(home?'addressInfo':'convenienceStoreInfo');ctx.find('#address-phone-label').textContent=copy.t('contactPhone')+(valid&&!home?' ('+copy.t('optional')+')':'');form.elements.recipientPhone.required=home;
  for(const[id,visible]of[['home-address-fields',valid&&home],['pickup-address-fields',valid&&!home]]){const node=ctx.find('#'+id);node.hidden=!visible;for(const input of node.querySelectorAll('input'))input.disabled=!visible;}
  for(const choice of main.querySelectorAll('.address-service-choice')){const chosen=choice.dataset.type===type;choice.setAttribute('aria-pressed',String(chosen));choice.querySelector('.address-service-radio').innerHTML=chosen?mi('check'):'';}
 }
 toggleType();const location=attachAddressLocation(ctx,{form,copy,dialogs,canUse:()=>!busy&&!uncertain});const hint=document.createElement('p');hint.className='muted address-manual-hint';hint.textContent=extra[currentLocale()].manual;ctx.find('#pickup-address-fields').append(hint);
 ctx.action('address-service-type',element=>{if(lockedType||busy||uncertain||!validAddressType(element.dataset.type))return;searchRevision++;dialogs.close();stores=[];lastSearch=null;form.elements.serviceType.value=element.dataset.type;location.retire();for(const name of['storeName','storeCode','storeAddress'])form.elements[name].value='';toggleType();});
 ctx.action('address-bangkok',()=>{if(busy||uncertain)return;for(const[name,value]of Object.entries({postalCode:'10110',city:'Bangkok',district:'Thailand'}))form.elements[name].value=value;if(!form.elements.detailedAddress.value.trim())form.elements.detailedAddress.value='Bangkok, Thailand 10110';location.refresh();});
 ctx.action('open-pickup-search',()=>{if(busy||uncertain||!validAddressType(form.elements.serviceType.value)||form.elements.serviceType.value==='HOME_DELIVERY')return;searchRevision++;stores=[];lastSearch=null;const provider=addressProviders.find(value=>value.type===form.elements.serviceType.value),node=dialogs.show(copy.t('pickupStoreSearchTitle',{storeType:copy.t(provider.name)}),addressSearchMarkup(copy));node.addEventListener('close',()=>{searchRevision++;stores=[];lastSearch=null;},{once:true});});
 async function search(data,more=false){
  const type=form.elements.serviceType.value;if(type==='HOME_DELIVERY'||busy||uncertain||!ctx.find('#pickup-search-results'))return;
  const revision=++searchRevision,page=more?storePage+1:0,body={storeType:type,page,size:30,returnCountOnly:false,...(data.storeCode?.trim()?{storeCode:data.storeCode.trim()}:{...Object.fromEntries(['city','district','keyword'].filter(key=>data[key]?.trim()).map(key=>[key,data[key].trim()]))})};
  ctx.find('#pickup-search-results').textContent=copy.t('loading');
  try{const result=await ctx.api.command('addresses.pickupSearch',body);if(!ctx.active()||revision!==searchRevision)return;const next=list(result).filter(value=>value.storeType===type&&value.isActive!==false),seen=new Set();stores=(more?[...stores,...next]:next).filter(value=>{const key=value.storeType+':'+value.storeCode;if(seen.has(key))return false;seen.add(key);return true;});lastSearch=data;storePage=page;ctx.find('#pickup-search-results').innerHTML=stores.map((store,index)=>`<div class="list-row"><div><strong>${escape(store.storeName)} · ${escape(store.storeCode)}</strong><p>${escape(store.storeAddress)}</p></div>${button(copy.t('confirmSelection'),'choose-pickup-store','secondary',`data-index="${index}"`)}</div>`).join('')||`<p>${escape(copy.t('noSearchResults'))}</p>`;if(result.last===false)ctx.find('#pickup-search-results').insertAdjacentHTML('beforeend',button(copy.t('txtaf90a08fec'),'pickup-more','secondary'));}
  catch(error){if(ctx.active()&&revision===searchRevision)ctx.find('#pickup-search-results').textContent=error.message;}
 }
 ctx.form('pickup-search',data=>search(data));ctx.action('pickup-more',()=>lastSearch&&search(lastSearch,true));
 ctx.action('choose-pickup-store',element=>{const store=stores[Number(element.dataset.index)];if(!store||store.storeType!==form.elements.serviceType.value||busy||uncertain)return;for(const name of['storeName','storeCode','storeAddress','city','district'])form.elements[name].value=store[name]||'';dialogs.close();form.elements.storeName.focus({preventScroll:true});});
 ctx.form('address',data=>{
  if(busy||uncertain)return;if(!validAddressType(data.serviceType))throw Error(copy.t('pleaseSelectServiceType'));
  const pickup=data.serviceType!=='HOME_DELIVERY',value=name=>String(data[name]||'').trim();
  const required=[['recipientName','pleaseEnterRecipientName'],...(pickup?[['storeName','pleaseEnterConvenienceStoreName'],['storeCode','pleaseEnterConvenienceStoreCode'],['storeAddress','pleaseEnterConvenienceStoreAddress']]:[['recipientPhone','pleaseEnterContactPhone'],['postalCode','pleaseEnterPostalCode'],['city','pleaseSelectCity'],['district','pleaseSelectDistrict'],['detailedAddress','pleaseEnterDetailedAddress']])];for(const[name,key]of required)if(!value(name))throw Error(copy.t(key));if(!pickup&&!/^\d{3,10}$/.test(value('postalCode')))throw Error(copy.t('homeDeliveryPostalCodeInvalid'));
  const fullAddress=pickup?`${value('storeName')} (${value('storeCode')})\n${value('storeAddress')}`:value('detailedAddress'),body={recipientName:value('recipientName'),recipientPhone:value('recipientPhone'),postalCode:value('postalCode'),city:value('city'),district:value('district'),detailedAddress:pickup?'':value('detailedAddress'),fullAddress,serviceType:data.serviceType,isDefault:data.isDefault==='on',isActive:true,remark:value('remark')||null,storeName:pickup?value('storeName'):null,storeCode:pickup?value('storeCode'):null,storeAddress:pickup?value('storeAddress'):null,...(selected?{id:selected.id}:{}),latitude:coordinates(form.elements.latitude.value,form.elements.longitude.value)?.lat??null,longitude:coordinates(form.elements.latitude.value,form.elements.longitude.value)?.lng??null};return write('/user-addresses/'+(selected?'update':'create'),{method:'POST',body});
 });
}
