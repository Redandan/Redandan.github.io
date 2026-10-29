import{escape,field,button}from'./ui.js';
import{materialIcon as mi}from'./material-icons.js';
import{taiwanAddressData}from'./taiwan-address-data.js';
import{coordinates,project,unproject}from'./address-map-geometry.js';
export{coordinates}from'./address-map-geometry.js';
export function addressLocationMarkup(copy,selected){
 const action=(key,name,icon)=>`<button type="button" class="secondary" data-action="${name}" data-address-control aria-label="${escape(copy.t(key))}" title="${escape(copy.t(key))}">${mi(icon)}</button>`;
 return `<input type="hidden" name="latitude" value="${escape(selected?.latitude??'')}"><input type="hidden" name="longitude" value="${escape(selected?.longitude??'')}"><div class="address-location-actions">${action('refreshCurrentLocation','address-current-location','my_location')}${action('chooseOnMap','address-map','map')}${action('clearAddress','address-clear-location','close')}</div><p id="address-coordinates" class="address-coordinate-label" hidden></p><p id="address-location-status" role="status"></p><details class="address-taiwan"><summary>${escape(copy.t('traditionalAddressSelection'))}</summary><div id="address-taiwan-fields"></div></details>`;
}
export function attachAddressLocation(ctx,{form,copy,dialogs,canUse}){
 let revision=0,mapDialog=null,locating=false,synchronizeTaiwan=()=>{};
 const input=name=>form.elements[name],live=()=>ctx.active()&&form.isConnected&&input('serviceType').value==='HOME_DELIVERY'&&canUse();
 const read=()=>coordinates(input('latitude').value,input('longitude').value);
 const status=message=>{if(ctx.active()){ctx.find('#address-location-status').textContent=message;if(mapDialog?.isConnected)mapDialog.querySelector('[data-map-location-status]').textContent=message;}};
 function refresh(){const value=read(),label=ctx.find('#address-coordinates');label.hidden=!value;label.textContent=value?copy.t('latitudeLongitude',{latitude:value.lat,longitude:value.lng}):'';synchronizeTaiwan();}
 function write(point){input('latitude').value=point?.lat??'';input('longitude').value=point?.lng??'';refresh();}
 function retireMap(){revision++;locating=false;if(mapDialog?.isConnected)mapDialog.close();mapDialog=null;}
 ctx.cleanup(retireMap);
 input('serviceType').addEventListener('change',retireMap,{signal:ctx.signal});
 // The controller also changes this hidden field directly; observe its page event.
 form.addEventListener('address-type-change',retireMap,{signal:ctx.signal});
 async function locate(apply,stillCurrent){
  if(!live()||locating||!stillCurrent())return;locating=true;const request=++revision;
  const current=()=>request===revision&&live()&&stillCurrent();
  status(copy.t('loading'));
  try{
   const point=await new Promise((resolve,reject)=>{if(!navigator.geolocation){reject({code:2});return;}navigator.geolocation.getCurrentPosition(value=>resolve(coordinates(value.coords.latitude,value.coords.longitude)),reject,{enableHighAccuracy:true,timeout:10000,maximumAge:0});});
   if(!current())return;if(!point)throw Error();apply(point);status(copy.t('pleaseEnterDetailedAddress'));
  }catch(error){if(current())status(error.code===1?copy.t('locationPermissionDeniedCurrentLocation'):copy.t('locationGetFailedWithError',{error:copy.t('operationFailed')}));}
  finally{if(request===revision)locating=false;}
 }
 ctx.action('address-current-location',()=>locate(write,()=>!mapDialog));
 ctx.action('address-clear-location',()=>{if(!live())return;retireMap();input('detailedAddress').value='';write(null);status('');input('detailedAddress').focus({preventScroll:true});});
 ctx.action('address-map',()=>{
  if(!live())return;retireMap();let selected=read(),center=selected||{lat:25.017029,lng:121.502496},zoom=13,closed=false,drag=null,frame;
  const node=dialogs.show(copy.t('selectLocation'),`<div class="address-map-canvas" tabindex="0" role="application" aria-label="${escape(copy.t('selectLocation'))}"><div class="address-map-tiles" aria-hidden="true"></div><span class="address-map-pin" aria-hidden="true">${mi('location_on')}</span></div><div class="address-map-toolbar"><button type="button" data-map-zoom="1" aria-label="+">+</button><button type="button" data-map-zoom="-1" aria-label="−">−</button>${button(copy.t('refreshCurrentLocation'),'map-current-location','secondary')}</div><p class="address-map-attribution">© <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a></p><p data-map-coordinates></p><p class="muted" data-map-location-status>${escape(copy.t('pleaseEnterDetailedAddress'))}</p>${field(copy.t('detailedAddress'),'mapAddress','text',input('detailedAddress').value,'maxlength="500" autocomplete="street-address"')}`);
  mapDialog=node;node.classList.add('address-map-dialog');
  const canvas=node.querySelector('.address-map-canvas'),tiles=node.querySelector('.address-map-tiles'),label=node.querySelector('[data-map-coordinates]'),detail=node.querySelector('[name=mapAddress]'),confirm=document.createElement('button');
  confirm.type='button';confirm.className='primary';confirm.dataset.mapConfirm='true';confirm.textContent=copy.t('confirmSelection');node.querySelector('.profile-dialog-actions').append(confirm);
  function render(){
   if(closed)return;const width=canvas.clientWidth,height=canvas.clientHeight,p=project(center,zoom),count=2**zoom,content=document.createDocumentFragment();
   for(let x=Math.floor((p.x-width/2)/256);x<=Math.floor((p.x+width/2)/256);x++)for(let y=Math.max(0,Math.floor((p.y-height/2)/256));y<=Math.min(count-1,Math.floor((p.y+height/2)/256));y++){
    const image=document.createElement('img');image.alt='';image.draggable=false;image.decoding='async';image.src='https://tile.openstreetmap.org/'+zoom+'/'+((x%count+count)%count)+'/'+y+'.png';image.style.left=(x*256-p.x+width/2)+'px';image.style.top=(y*256-p.y+height/2)+'px';content.append(image);
   }
   tiles.replaceChildren(content);label.textContent=selected?copy.t('latitudeLongitude',{latitude:selected.lat.toFixed(6),longitude:selected.lng.toFixed(6)}):copy.t('selectLocationOnMapFirst');confirm.disabled=!selected||!detail.value.trim();canvas.dataset.selected=String(!!selected);
  }
  const schedule=()=>{cancelAnimationFrame(frame);frame=requestAnimationFrame(render);};
  const resize=new ResizeObserver(schedule);resize.observe(canvas);
  function pick(point){if(!live()||closed)return;selected=center=point;schedule();}
  canvas.addEventListener('pointerdown',event=>{if(!live()||event.button!==0)return;drag={id:event.pointerId,x:event.clientX,y:event.clientY,center:project(center,zoom),moved:false};canvas.setPointerCapture(event.pointerId);canvas.focus({preventScroll:true});});
  canvas.addEventListener('pointermove',event=>{if(!drag||drag.id!==event.pointerId||!live())return;const dx=event.clientX-drag.x,dy=event.clientY-drag.y;if(Math.hypot(dx,dy)>4)drag.moved=true;if(drag.moved)pick(unproject({x:drag.center.x-dx,y:drag.center.y-dy},zoom));});
  canvas.addEventListener('pointerup',event=>{if(!drag||drag.id!==event.pointerId)return;if(!drag.moved){const r=canvas.getBoundingClientRect(),p=project(center,zoom);pick(unproject({x:p.x+event.clientX-r.left-r.width/2,y:p.y+event.clientY-r.top-r.height/2},zoom));}drag=null;});
  canvas.addEventListener('pointercancel',()=>{drag=null;});
  canvas.addEventListener('keydown',event=>{const delta={ArrowLeft:[-32,0],ArrowRight:[32,0],ArrowUp:[0,-32],ArrowDown:[0,32]}[event.key];if(!delta||!live())return;event.preventDefault();const p=project(center,zoom);pick(unproject({x:p.x+delta[0],y:p.y+delta[1]},zoom));});
  node.addEventListener('click',event=>{const target=event.target.closest('[data-map-zoom]');if(target&&live()){zoom=Math.min(18,Math.max(3,zoom+Number(target.dataset.mapZoom)));schedule();}});
  ctx.action('map-current-location',()=>locate(point=>pick(point),()=>mapDialog===node&&!closed));
  detail.addEventListener('input',()=>{confirm.disabled=!selected||!detail.value.trim();});
  confirm.addEventListener('click',()=>{if(!live()||closed||!selected||!detail.value.trim())return;write(selected);input('detailedAddress').value=detail.value.trim();dialogs.close();status('');});
  node.addEventListener('close',()=>{closed=true;revision++;locating=false;cancelAnimationFrame(frame);resize.disconnect();if(mapDialog===node)mapDialog=null;},{once:true});render();
 });
 const chooser=ctx.find('.address-taiwan');
 chooser.addEventListener('toggle',()=>{
  if(!chooser.open||!live()||chooser.dataset.loaded)return;chooser.dataset.loaded='true';
  const host=ctx.find('#address-taiwan-fields'),options=items=>'<option value=""></option>'+items.map(value=>`<option value="${escape(value)}">${escape(value)}</option>`).join('');
  host.innerHTML=`<label class="field">${escape(copy.t('city'))}<select data-taiwan-city>${options(Object.keys(taiwanAddressData))}</select></label><label class="field">${escape(copy.t('district'))}<select data-taiwan-district></select></label>${field(copy.t('searchPostalCode'),'taiwanPostalSearch','search','','inputmode="numeric" maxlength="10"')}<div data-taiwan-results></div>`;
  const city=host.querySelector('[data-taiwan-city]'),district=host.querySelector('[data-taiwan-district]'),results=host.querySelector('[data-taiwan-results]');
  function setDistricts(){district.innerHTML=options(Object.keys(taiwanAddressData[city.value]||{}));district.disabled=!city.value;}
  synchronizeTaiwan=()=>{city.value=Object.hasOwn(taiwanAddressData,input('city').value)?input('city').value:'';setDistricts();district.value=input('district').value;};synchronizeTaiwan();for(const name of['city','district'])input(name).addEventListener('input',synchronizeTaiwan,{signal:ctx.signal});
  city.addEventListener('change',()=>{if(!live())return;input('city').value=city.value;input('district').value='';input('postalCode').value='';setDistricts();});
  district.addEventListener('change',()=>{if(!live())return;input('district').value=district.value;input('postalCode').value=taiwanAddressData[city.value]?.[district.value]||'';});
  host.querySelector('[name=taiwanPostalSearch]').addEventListener('input',event=>{
   results.replaceChildren();const term=event.target.value.trim();if(!term||!live())return;
   for(const[c,rows]of Object.entries(taiwanAddressData))for(const[d,code]of Object.entries(rows))if(code.includes(term)){
    const choice=document.createElement('button');choice.type='button';choice.className='secondary';choice.textContent=code+' '+c+' '+d;choice.addEventListener('click',()=>{if(!live())return;city.value=c;setDistricts();district.value=d;input('city').value=c;input('district').value=d;input('postalCode').value=code;results.replaceChildren();});results.append(choice);
   }
  });
 },{signal:ctx.signal});
 refresh();
 return{retire:retireMap,refresh};
}
