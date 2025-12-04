import{i as f,a as m,x as a,c as p}from"./wallet-vendor.DlQjiyY5.js";import"./if-defined.C4RTiUVf.js";import"./index.ZpuCvyXp.js";import"./react-vendor.Bj0G0Oyz.js";import"./buffer-polyfill.ErO7y5re.js";import"./index.DK2cimqs.js";import"./index.PEun02IH.js";import"./index.BrflsJxy.js";import"./index.090uVsL8.js";import"./index.K1qrSDzm.js";const d=f`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }
`;var u=function(o,e,i,r){var n=arguments.length,t=n<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,i):r,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(o,e,i,r);else for(var c=o.length-1;c>=0;c--)(l=o[c])&&(t=(n<3?l(t):n>3?l(e,i,t):l(e,i))||t);return n>3&&t&&Object.defineProperty(e,i,t),t};let s=class extends m{render(){return a`
      <wui-flex flexDirection="column" .padding=${["0","m","m","m"]} gap="s">
        <w3m-activity-list page="activity"></w3m-activity-list>
      </wui-flex>
    `}};s.styles=d;s=u([p("w3m-transactions-view")],s);export{s as W3mTransactionsView};
