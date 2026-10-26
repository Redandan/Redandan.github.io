// AlertDialog sizes its content intrinsically; InputDecorator includes the
// unbounded hint width and multiline hint height, even while the hint is hidden.
export function promoDialogLayout(ctx,copy,edit){
 const measure=document.createElement('span');
 Object.assign(measure.style,{position:'fixed',visibility:'hidden',pointerEvents:'none',whiteSpace:'pre',fontFamily:'AgoraBuyerRoboto,AgoraBuyerCJK,AgoraBuyerThai,sans-serif',fontWeight:'400'});
 document.body.append(measure);
 ctx.cleanup(()=>measure.remove());
 const textWidth=(value,size,spacing)=>{measure.style.fontSize=size+'px';measure.style.letterSpacing=spacing+'px';measure.textContent=value;return measure.getBoundingClientRect().width;};
 const maxWidth=()=>48+Math.max(232,textWidth(copy.t(edit?'promoCodeImmutableNotice':'promoApplyReviewNotice'),12,.25),...(!edit?[copy.t('promoCodeNameHint'),copy.t('promoPreferredCodeHint'),copy.t('promoDescriptionHint')].map(text=>40+textWidth(text,16,.5)):[]));
 const lineCount=(text,width)=>{
  // The original paragraph breaker keeps closing punctuation (including a
  // solidus after a space) with the preceding word. CSS permits that break.
  const words=[];
  for(const {segment} of new Intl.Segmenter(copy.locale,{granularity:'word'}).segment(text)){
   if(/^[\s/!?,.;:)\]}]+$/u.test(segment)&&words.length)words[words.length-1]+=segment;else words.push(segment);
  }
  let lines=1,line='';
  for(const word of words){
   if(line&&textWidth(line+word,16,.5)>width){lines++;line='';}
   line+=word;
   if(textWidth(line.trimEnd(),16,.5)>width){
    line='';
    for(const char of word){if(line&&textWidth(line+char,16,.5)>width){lines++;line='';}line+=char;}
   }
  }
  return lines;
 };
 function bind(dialog){
  const textarea=dialog.querySelector('textarea');
  const resize=()=>{
   if(!dialog.open||!ctx.active())return;
   const width=Math.max(1,textarea.getBoundingClientRect().width-40);
   const lines=Math.max(2,Math.min(4,lineCount(textarea.value||(!edit?copy.t('promoDescriptionHint'):' '),width)));
   const compact=document.querySelector('#buyer-app').dataset.nativeDensity==='compact';
   textarea.style.height=(lines*24+(compact?20:28))+'px';
   Object.assign(measure.style,{whiteSpace:'pre',width:'auto'});
  };
  const observer=new ResizeObserver(resize);observer.observe(dialog);
  textarea.addEventListener('input',resize,{signal:ctx.signal});
  dialog.addEventListener('close',()=>{observer.disconnect();measure.remove();},{once:true});
  document.fonts.ready.then(()=>{if(dialog.open&&ctx.active()){resize();dispatchEvent(new Event('resize'));}});
  resize();
 }
 return{maxWidth,bind};
}
