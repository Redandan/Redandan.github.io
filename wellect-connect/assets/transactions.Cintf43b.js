import{i as f,a as m,x as a,c as p}from"./wallet-vendor.Dr8nAaoe.js";import"./if-defined.DUgTVufX.js";import"./index.uVSJk_T6.js";import"./react-vendor.C14am9Lm.js";import"./index.DViLvMu2.js";import"./index._7FJpGjb.js";import"./index.d97TINW0.js";import"./index.DJDTCYGR.js";import"./index.BKhG0gzr.js";const d=f`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }
`;var u=function(o,t,i,r){var n=arguments.length,e=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(o,t,i,r);else for(var c=o.length-1;c>=0;c--)(l=o[c])&&(e=(n<3?l(e):n>3?l(t,i,e):l(t,i))||e);return n>3&&e&&Object.defineProperty(t,i,e),e};let s=class extends m{render(){return a`
      <wui-flex flexDirection="column" .padding=${["0","m","m","m"]} gap="s">
        <w3m-activity-list page="activity"></w3m-activity-list>
      </wui-flex>
    `}};s.styles=d;s=u([p("w3m-transactions-view")],s);export{s as W3mTransactionsView};
