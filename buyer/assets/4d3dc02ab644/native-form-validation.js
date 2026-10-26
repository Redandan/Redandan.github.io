let sequence=0;
// The original managed Flutter forms keep error text beside their counters.
// Scoped capture validation prevents browser popups and never dispatches RPCs.
export function bindNativeFormValidation(form,rules,{signal}={}){
 form.noValidate=true;
 function paint(name,message){
  const input=form.elements.namedItem(name);if(!input)return;
  const label=input.closest('.field');if(!label)return;
  let error=label.querySelector('.security-native-field-error');
  label.classList.toggle('security-native-field-invalid',!!message);
  if(!message){input.removeAttribute('aria-invalid');input.removeAttribute('aria-describedby');error?.remove();return;}
  if(!error){error=document.createElement('small');error.className='security-native-field-error';error.id='security-field-error-'+(++sequence);error.setAttribute('role','alert');label.append(error);}
  error.textContent=message;input.setAttribute('aria-invalid','true');input.setAttribute('aria-describedby',error.id);
 }
 const validate=()=>{const errors=rules(form);for(const[name,message]of Object.entries(errors))paint(name,message);return !Object.values(errors).some(Boolean);};
 form.addEventListener('submit',event=>{if(!validate()){event.preventDefault();event.stopImmediatePropagation();}},{capture:true,signal});
 return validate;
}
