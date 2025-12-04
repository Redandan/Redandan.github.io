import{i as u,c as a,a as f,T as i,R as b,M as g,x as p}from"./wallet-vendor.CHv2NQr2.js";import{n as v,r as m}from"./if-defined.Cm0iLOsI.js";const y=u`
  :host {
    width: 100%;
    display: block;
  }
`;var d=function(n,e,o,s){var l=arguments.length,t=l<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,o):s,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(n,e,o,s);else for(var c=n.length-1;c>=0;c--)(h=n[c])&&(t=(l<3?h(t):l>3?h(e,o,t):h(e,o))||t);return l>3&&t&&Object.defineProperty(e,o,t),t};let r=class extends f{constructor(){super(),this.unsubscribe=[],this.text="",this.open=i.state.open,this.unsubscribe.push(b.subscribeKey("view",()=>{i.hide()}),g.subscribeKey("open",e=>{e||i.hide()}),i.subscribeKey("open",e=>{this.open=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),i.hide()}render(){return p`
      <div
        @pointermove=${this.onMouseEnter.bind(this)}
        @pointerleave=${this.onMouseLeave.bind(this)}
      >
        ${this.renderChildren()}
      </div>
    `}renderChildren(){return p`<slot></slot> `}onMouseEnter(){const e=this.getBoundingClientRect();this.open||i.showTooltip({message:this.text,triggerRect:{width:e.width,height:e.height,left:e.left,top:e.top},variant:"shade"})}onMouseLeave(e){this.contains(e.relatedTarget)||i.hide()}};r.styles=[y];d([v()],r.prototype,"text",void 0);d([m()],r.prototype,"open",void 0);r=d([a("w3m-tooltip-trigger")],r);
