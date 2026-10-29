import{escape,route}from'./ui.js';
import{originalCopy}from'./locale.js';
import{materialIcon as mi}from'./material-icons.js';
import{secondaryFlow,secondarySection as section,informationAction}from'./secondary-flow.js';
import{publishedBuyerVersion}from'./published-version.js';
const privacyParts=['Collection','Use','Sharing','Security','Rights','Cookies','Retention','Children','Updates','Contact'];
const agreementParts=['Scope','Services','Account','Conduct','Trading','Fees','Ip','Disclaimer','Changes','Disputes','Contact'];
const p=value=>'<p>'+escape(value)+'</p>';
function requireCopy(copy,keys){for(const key of keys)if(!copy.t(key))throw Error('Original information copy unavailable: '+key);}

async function legal(ctx,kind){
 const c=await originalCopy(ctx.signal);if(!ctx.active())return;
 const privacy=kind==='privacy',prefix=privacy?'privacy':'agreement',parts=privacy?privacyParts:agreementParts,title=c.t(privacy?'privacyPolicy':'userAgreement'),subtitle=c.t(privacy?'privacyPolicySubtitle':'userAgreementSubtitle');
 requireCopy(c,parts.flatMap(part=>[prefix+'Section'+part+'Title',prefix+'Section'+part+'Content']));
 const content=parts.map(part=>'<section class="information-legal-section"><h2>'+escape(c.t(prefix+'Section'+part+'Title'))+'</h2>'+p(c.t(prefix+'Section'+part+'Content'))+'</section>').join('');
 secondaryFlow(ctx,c,{title,subtitle,icon:privacy?'privacy_tip_outlined':'gavel_outlined',kind,content:section(null,content,{subtitle:c.t(privacy?'privacyPolicyLastUpdated':'userAgreementLastUpdated',c.revision[kind]),className:'information-legal'})});
}
export const privacy=ctx=>legal(ctx,'privacy');export const agreement=ctx=>legal(ctx,'agreement');

export async function about(ctx){
 const c=await originalCopy(ctx.signal);if(!ctx.active())return;
 requireCopy(c,['aboutUs','aboutUsPageSubtitle','c2cTradingPlatform','aboutUsHeroTagline','contactUs','versionInfo']);
 let version=null;try{version=publishedBuyerVersion({version:document.querySelector('meta[name=app-version]')?.content,build_number:document.querySelector('meta[name=app-build-number]')?.content,source_commit:document.querySelector('meta[name=source-commit]')?.content});}catch{}
 const logo=new URL('../../icons/web-app-manifest-512x512.png',import.meta.url).href,official='/official.html';
 const hero='<div class="information-about-hero"><span class="information-about-logo"><img src="'+escape(logo)+'" alt="" width="90" height="90"></span><h2>Agora Market</h2><span class="information-about-badge">'+escape(c.t('c2cTradingPlatform'))+'</span>'+p(c.t('aboutUsHeroTagline'))+'</div>';
 const features=[['verified_user_rounded','txtd71e2b4e68','aboutUsFeatureSecureDescription','primary'],['flash_on_rounded','txt2c7888059c','aboutUsFeatureFastDescription','secondary'],['support_agent_rounded','txt42dd1b4427','aboutUsFeatureSupportDescription','tertiary'],['shield_rounded','txtec73dcb16a','aboutUsFeatureProtectionDescription','primary']].map(([icon,title,description,color])=>'<div class="information-feature" data-color="'+color+'"><span>'+mi(icon)+'</span><div><h3>'+escape(c.t(title))+'</h3>'+p(c.t(description))+'</div></div>').join('');
 const missions=[['flag_rounded','txt09659713f5','aboutUsMissionCardDescription','primary'],['visibility_rounded','txt12fcc94cbf','aboutUsVisionCardDescription','secondary']].map(([icon,title,description,color])=>'<section class="information-mission" data-color="'+color+'"><span>'+mi(icon)+'</span><h3>'+escape(c.t(title))+'</h3>'+p(c.t(description))+'</section>').join('');
 const contact='<div class="information-contact"><span>'+mi('email_rounded')+'</span><div><strong>'+escape(c.t('email'))+'</strong><small>contact@agora.com</small></div></div><hr><a class="information-contact" href="'+official+'"><span>'+mi('language_rounded')+'</span><div><strong>'+escape(c.t('officialWebsite'))+'</strong><small>agora.io</small></div>'+mi('chevron_right')+'</a>';
 const content=section('Agora Market',hero,{icon:'storefront_outlined',subtitle:c.t('c2cTradingPlatform')})+section(c.t('aboutUs'),'<div class="information-company">'+p(c.t('aboutUsCompanyDescription'))+p(c.t('aboutUsMissionDescription'))+'</div>',{icon:'business_center_rounded'})+section(c.t('platformFeatures'),features,{icon:'star_rounded'})+section(c.t('missionAndVision'),'<div class="information-missions">'+missions+'</div>',{icon:'flag_rounded'})+section(c.t('contactUs'),contact,{icon:'contact_mail_rounded'})+section(c.t('versionInfo'),'<div class="information-version"><span>'+escape(c.t('versionLabel',{version:version?.version||'—'}))+'</span><span aria-hidden="true"></span><span>'+escape(c.t('buildNumberLabel',{buildNumber:version?.buildNumber||'—'}))+'</span></div>',{icon:'info_outline_rounded'})+'<div class="information-legal-links"><a href="'+route('/privacy-policy')+'">'+escape(c.t('privacyPolicy'))+'</a><a href="'+route('/user-agreement')+'">'+escape(c.t('userAgreement'))+'</a></div>';
 secondaryFlow(ctx,c,{title:c.t('aboutUs'),subtitle:c.t('aboutUsPageSubtitle'),icon:'storefront_outlined',kind:'about',actions:informationAction(c.t('officialWebsite'),official),content});
}

const categories=[['GettingStarted','install_mobile_outlined',['AddToHomeQuestion','ConnectChatGptQuestion']],['AccountRelated','lock_person_outlined',['HowToChangePassword','HowToChangePhone']],['OrdersPayments','receipt_long_outlined',['HowToInitiateTransaction','SupportedPaymentMethods','HowToViewTransactionHistory']],['ProductsSellers','store_outlined',['PlatformFee','ProductListingRules','OrderProcessingRequirements','LearnMoreSellerGuidelines']],['ShippingRefunds','local_shipping_outlined',['HowToApplyRefund','RefundProcessingTime']]];
const helpStates=new Map();
const answers={AddToHomeQuestion:'AddToHomeAnswer',ConnectChatGptQuestion:'ConnectChatGptAnswer'};
function phoneGuide(c){
 const screens=[['Share','ios_share','helpCenterGuidePreviewShareFooter','helpCenterGuidePreviewAddToHome'],['Confirm','add_box_outlined',null,'helpCenterGuidePreviewAdd'],['Open','apps','helpCenterGuidePreviewHomeIconFooter',null]];
 return'<div class="information-phone-previews">'+screens.map(([name,icon,footer,highlight])=>'<div><strong>'+escape(c.t('helpCenterGuidePreview'+name+'Title'))+'</strong><div class="information-phone"><span class="information-phone-notch"></span><div class="information-phone-screen"><div class="information-phone-url">'+mi('lock_outline')+'<span></span></div><span class="information-phone-app">'+mi(icon)+'</span><strong>'+escape(highlight?c.t(highlight):'Agora')+'</strong><small>'+escape(footer?c.t(footer):'Agora Market')+'</small></div></div></div>').join('')+'</div>';
}
function installGuide(c){
 const platforms=[['ios_share','IosAddToHome'],['android','AndroidAddToHome'],['desktop_windows_outlined','DesktopInstall']];
 return'<div class="information-install-guide">'+phoneGuide(c)+platforms.map(([icon,prefix])=>'<section><h3><span>'+mi(icon)+'</span><span>'+escape(c.t('helpCenter'+prefix+'Title'))+'</span></h3><ol>'+[1,2,3,4].map(index=>'<li>'+escape(c.t('helpCenter'+prefix+'Step'+index))+'</li>').join('')+'</ol><p>'+mi('info_outline')+'<span>'+escape(c.t('helpCenter'+prefix+'Note'))+'</span></p></section>').join('')+'</div>';
}
function question(c,key,saved){
 let body=p(c.t('helpCenter'+(answers[key]||key+'Answer')));
 if(key==='AddToHomeQuestion')body+=installGuide(c);
 if(key==='ConnectChatGptQuestion')body+='<a class="information-filled" href="'+route('/help/mcp')+'">'+escape(c.t('helpCenterViewChatGptMcpGuide'))+'</a>';
 if(key==='LearnMoreSellerGuidelines')body+='<a class="information-filled" href="'+route('/help?section=seller-guidelines')+'">'+escape(c.t('helpCenterViewCompleteSellerGuidelines'))+'</a>';
 return'<details class="information-question" data-question="'+key+'" '+(saved?.questions.includes(key)?'open':'')+'><summary><span>'+escape(c.t('helpCenter'+key))+'</span>'+mi('keyboard_arrow_down')+'</summary><div>'+body+'</div></details>';
}
function quickAction(c,{icon,title,description,badge,href,highlighted=false}){
 return'<a class="information-quick-action" href="'+route(href)+'" data-highlighted="'+highlighted+'"><span class="information-quick-icon">'+mi(icon)+'</span><div><div><strong>'+escape(c.t(title))+'</strong><small>'+escape(c.t(badge))+'</small></div>'+p(c.t(description))+'</div>'+mi('chevron_right')+'</a>';
}
const guidelines=[['PlatformFees',['BaseFee','Fee1000','Fee5000','Fee10000']],['ProductListing',['ProductImages','ProductDescription','ProhibitedProducts','ReasonablePricing']],['OrderHandling',['OrderConfirmWithin24h','OrderUpdateLogistics','OrderCancelIfUnable','OrderNoUnjustifiedCancel']],['AfterSales',['AfterSalesReplyDuringHours','AfterSalesHandleReturnsWithin24h','AfterSalesNoUnjustifiedReject','AfterSalesQualityResponsibility']],['PenaltyRules',['PenaltyFirstViolation','PenaltySecondViolation','PenaltyThirdViolation','PenaltySevereViolation']],['SellerLevels',['SellerLevelBasic','SellerLevelSilver','SellerLevelGold','SellerLevelDiamond']]];
function sellerGuidelines(ctx,c){
 const keys=guidelines.flatMap(([title,items])=>['guidelines'+title,...items.map(item=>'guidelines'+item)]);requireCopy(c,['sellerGuidelines',...keys]);
 secondaryFlow(ctx,c,{title:c.t('sellerGuidelines'),subtitle:c.t('helpCenterLearnMoreSellerGuidelinesAnswer'),icon:'store_outlined',kind:'seller-guidelines',content:'<div class="information-guidelines">'+guidelines.map(([title,items])=>'<section><h2>'+escape(c.t('guidelines'+title))+'</h2><ul>'+items.map(item=>'<li>'+escape(c.t('guidelines'+item))+'</li>').join('')+'</ul></section>').join('')+'</div>'});
}
export async function help(ctx){
 const c=await originalCopy(ctx.signal);if(!ctx.active())return;
 if(ctx.query.get('section')==='seller-guidelines'){sellerGuidelines(ctx,c);return;}
 requireCopy(c,['helpCenterTitle','serviceSupportDesc','helpCenterQuickActions','helpCenterSearchSelfHelpSubtitle','helpCenterFaqSubtitle']);
 const shortcuts=quickAction(c,{icon:'chat_bubble_outline',title:'helpCenterSmartCustomerService',description:'helpCenterSmartCustomerServiceDesc',badge:'helpCenterChatAssistanceBadge',href:'/chat/new/0',highlighted:true})+quickAction(c,{icon:'support_agent',title:'helpCenterMyIssues',description:'helpCenterMyIssuesDesc',badge:'helpCenterHumanSupportBadge',href:'/customer-issues'});
 const search='<label class="information-help-search">'+mi('search')+'<input id="help-search" type="search" placeholder="'+escape(c.t('helpCenterSearchHint'))+'" aria-label="'+escape(c.t('helpCenterSearchSelfHelpTitle'))+'"></label>';
 const saved=helpStates.get(c.locale);
 const faq=categories.map(([title,icon,questions])=>'<details class="information-faq-category" data-category="'+title+'" '+(saved?.categories.includes(title)?'open':'')+'><summary><span>'+mi(icon)+'</span><strong>'+escape(c.t('helpCenter'+title))+'</strong>'+mi('keyboard_arrow_down')+'</summary><div>'+questions.map(key=>question(c,key,saved)).join('')+'</div></details>').join('');
 const content=section(c.t('helpCenterQuickActions'),'<div class="information-quick-actions">'+shortcuts+'</div>',{icon:'support_agent_outlined',subtitle:c.t('helpCenterQuickActionsSubtitle')})+'<div class="information-section-gap"></div>'+section(c.t('helpCenterSearchSelfHelpTitle'),search,{icon:'search',subtitle:c.t('helpCenterSearchSelfHelpSubtitle')})+'<div class="information-section-gap"></div>'+section(c.t('helpCenterFAQ'),'<div id="help-categories">'+faq+'</div>',{icon:'help_outline',subtitle:c.t('helpCenterFaqSubtitle')});
 secondaryFlow(ctx,c,{title:c.t('helpCenterTitle'),subtitle:c.t('serviceSupportDesc'),icon:'support_agent_outlined',kind:'help',content});
 const host=ctx.find('#help-categories');
 const filter=value=>{const term=value.trim().toLocaleLowerCase();for(const category of host.children){let matches=0;for(const question of category.querySelectorAll('.information-question')){question.hidden=!!term&&!question.textContent.toLocaleLowerCase().includes(term);if(!question.hidden)matches++;}category.hidden=matches===0;if(term&&matches)category.open=true;}};
 const field=ctx.find('#help-search');field.value=saved?.term||'';if(field.value)filter(field.value);field.addEventListener('input',event=>filter(event.target.value),{signal:ctx.signal});
 ctx.cleanup(()=>{helpStates.set(c.locale,{term:field.value,categories:[...host.querySelectorAll('.information-faq-category[open]')].map(node=>node.dataset.category),questions:[...host.querySelectorAll('.information-question[open]')].map(node=>node.dataset.question)});});
}
