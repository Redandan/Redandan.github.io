import{P as x,Q as $,u as b,i as w,r as d,c as m,a as v,x as y,U as f,E as S}from"./wallet-vendor.BYI0E9G4.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const z={attribute:!0,type:String,converter:$,reflect:!1,hasChanged:x},_=(e=z,i,n)=>{const{kind:r,metadata:a}=n;let t=globalThis.litPropertyMetadata.get(a);if(t===void 0&&globalThis.litPropertyMetadata.set(a,t=new Map),r==="setter"&&((e=Object.create(e)).wrapped=!0),t.set(n.name,e),r==="accessor"){const{name:o}=n;return{set(l){const h=i.get.call(this);i.set.call(this,l),this.requestUpdate(o,h,e)},init(l){return l!==void 0&&this.C(o,void 0,e,l),l}}}if(r==="setter"){const{name:o}=n;return function(l){const h=this[o];i.call(this,l),this.requestUpdate(o,h,e)}}throw Error("Unsupported decorator location: "+r)};function s(e){return(i,n)=>typeof n=="object"?_(e,i,n):((r,a,t)=>{const o=a.hasOwnProperty(t);return a.constructor.createProperty(t,r),o?Object.getOwnPropertyDescriptor(a,t):void 0})(e,i,n)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function G(e){return s({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const j={ATTRIBUTE:1,CHILD:2},T=e=>(...i)=>({_$litDirective$:e,values:i});class C{constructor(i){}get _$AU(){return this._$AM._$AU}_$AT(i,n,r){this._$Ct=i,this._$AM=n,this._$Ci=r}_$AS(i,n){return this.update(i,n)}update(i,n){return this.render(...n)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const O=T(class extends C{constructor(e){var i;if(super(e),e.type!==j.ATTRIBUTE||e.name!=="class"||((i=e.strings)==null?void 0:i.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(i=>e[i]).join(" ")+" "}update(e,[i]){var r,a;if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(t=>t!=="")));for(const t in i)i[t]&&!((r=this.nt)!=null&&r.has(t))&&this.st.add(t);return this.render(i)}const n=e.element.classList;for(const t of this.st)t in i||(n.remove(t),this.st.delete(t));for(const t in i){const o=!!i[t];o===this.st.has(t)||(a=this.nt)!=null&&a.has(t)||(o?(n.add(t),this.st.add(t)):(n.remove(t),this.st.delete(t)))}return b}}),P=w`
  :host {
    display: inline-flex !important;
  }

  slot {
    width: 100%;
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-line-clamp-1 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  .wui-line-clamp-2 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .wui-font-medium-400 {
    font-size: var(--wui-font-size-medium);
    font-weight: var(--wui-font-weight-light);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-medium-600 {
    font-size: var(--wui-font-size-medium);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-title-600 {
    font-size: var(--wui-font-size-title);
    letter-spacing: var(--wui-letter-spacing-title);
  }

  .wui-font-title-6-600 {
    font-size: var(--wui-font-size-title-6);
    letter-spacing: var(--wui-letter-spacing-title-6);
  }

  .wui-font-mini-700 {
    font-size: var(--wui-font-size-mini);
    letter-spacing: var(--wui-letter-spacing-mini);
    text-transform: uppercase;
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-2xl-500,
  .wui-font-2xl-600,
  .wui-font-2xl-700 {
    font-size: var(--wui-font-size-2xl);
    letter-spacing: var(--wui-letter-spacing-2xl);
  }

  .wui-font-paragraph-400,
  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-400,
  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600,
  .wui-font-micro-500 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-tiny-400,
  .wui-font-small-400,
  .wui-font-medium-400,
  .wui-font-paragraph-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700,
  .wui-font-mini-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-medium-600,
  .wui-font-medium-title-600,
  .wui-font-title-6-600,
  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }

  :host([disabled]) {
    opacity: 0.4;
  }
`;var g=function(e,i,n,r){var a=arguments.length,t=a<3?i:r===null?r=Object.getOwnPropertyDescriptor(i,n):r,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(e,i,n,r);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(t=(a<3?o(t):a>3?o(i,n,t):o(i,n))||t);return a>3&&t&&Object.defineProperty(i,n,t),t};let c=class extends v{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left",this.lineClamp=void 0}render(){const i={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0,[`wui-line-clamp-${this.lineClamp}`]:!!this.lineClamp};return this.style.cssText=`
      --local-align: ${this.align};
      --local-color: var(--wui-color-${this.color});
    `,y`<slot class=${O(i)}></slot>`}};c.styles=[d,P];g([s()],c.prototype,"variant",void 0);g([s()],c.prototype,"color",void 0);g([s()],c.prototype,"align",void 0);g([s()],c.prototype,"lineClamp",void 0);c=g([m("wui-text")],c);const U=w`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;var u=function(e,i,n,r){var a=arguments.length,t=a<3?i:r===null?r=Object.getOwnPropertyDescriptor(i,n):r,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(e,i,n,r);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(t=(a<3?o(t):a>3?o(i,n,t):o(i,n))||t);return a>3&&t&&Object.defineProperty(i,n,t),t};let p=class extends v{render(){return this.style.cssText=`
      flex-direction: ${this.flexDirection};
      flex-wrap: ${this.flexWrap};
      flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&f.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&f.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&f.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&f.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&f.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&f.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&f.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&f.getSpacingStyles(this.margin,3)};
    `,y`<slot></slot>`}};p.styles=[d,U];u([s()],p.prototype,"flexDirection",void 0);u([s()],p.prototype,"flexWrap",void 0);u([s()],p.prototype,"flexBasis",void 0);u([s()],p.prototype,"flexGrow",void 0);u([s()],p.prototype,"flexShrink",void 0);u([s()],p.prototype,"alignItems",void 0);u([s()],p.prototype,"justifyContent",void 0);u([s()],p.prototype,"columnGap",void 0);u([s()],p.prototype,"rowGap",void 0);u([s()],p.prototype,"gap",void 0);u([s()],p.prototype,"padding",void 0);u([s()],p.prototype,"margin",void 0);p=u([m("wui-flex")],p);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const E=e=>e??S;export{O as a,T as e,C as i,s as n,E as o,G as r,j as t};
