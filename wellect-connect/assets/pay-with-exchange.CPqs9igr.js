import{i as h,a as g,C as f,d as e,x as c,A as w,S as d,R as x,c as y}from"./wallet-vendor.DRrETt-y.js";import{r}from"./if-defined.C6qmlwLl.js";import"./index.DwR25OEY.js";import"./index.Dow0WVp9.js";import"./index.PFnuGiP0.js";import"./index.5seUMunG.js";import"./index.7O-iy-LA.js";import"./react-vendor.C14am9Lm.js";import"./index.BhvZ9Rxq.js";import"./index.D7bRkklL.js";import"./index.tibbWxUB.js";const P=h`
  .amount-input-container {
    border-radius: var(--wui-border-radius-m);
    border-top-right-radius: 0;
    border-top-left-radius: 0;
    border-bottom: 1px solid var(--wui-color-gray-glass-010);
    background-color: var(--wui-color-bg-100);
  }

  .container {
    background-color: var(--wui-color-bg-125);
  }
`;var s=function(m,t,i,o){var u=arguments.length,a=u<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(m,t,i,o);else for(var p=m.length-1;p>=0;p--)(l=m[p])&&(a=(u<3?l(a):u>3?l(t,i,a):l(t,i))||a);return u>3&&a&&Object.defineProperty(t,i,a),a};const I=[10,50,100];let n=class extends g{constructor(){super(),this.unsubscribe=[],this.network=f.state.activeCaipNetwork,this.exchanges=e.state.exchanges,this.isLoading=e.state.isLoading,this.amount=e.state.amount,this.tokenAmount=e.state.tokenAmount,this.priceLoading=e.state.priceLoading,this.isPaymentInProgress=e.state.isPaymentInProgress,this.currentPayment=e.state.currentPayment,this.paymentId=e.state.paymentId,this.unsubscribe.push(e.subscribe(t=>{var o,u;this.exchanges=t.exchanges,this.isLoading=t.isLoading,this.amount=t.amount,this.tokenAmount=t.tokenAmount,this.priceLoading=t.priceLoading,this.paymentId=t.paymentId,this.isPaymentInProgress=t.isPaymentInProgress,this.currentPayment=t.currentPayment,t.isPaymentInProgress&&((o=t.currentPayment)==null?void 0:o.exchangeId)&&((u=t.currentPayment)==null?void 0:u.sessionId)&&t.paymentId&&this.handlePaymentInProgress()}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t()),e.reset()}firstUpdated(){e.fetchExchanges(),e.fetchTokenPrice()}render(){return c`
      <wui-flex flexDirection="column" gap="xs" class="container">
        ${this.amountInputTemplate()} ${this.exchangesTemplate()}
      </wui-flex>
    `}exchangesTemplate(){return c`
      <wui-flex
        flexDirection="column"
        gap="xs"
        .padding=${["xs","s","s","s"]}
        class="exchanges-container"
      >
        ${this.exchanges.map(t=>c`<wui-list-item
              @click=${()=>this.onExchangeClick(t)}
              chevron
              variant="image"
              imageSrc=${t.imageUrl}
              ?loading=${this.isLoading}
              ?disabled=${!this.amount}
            >
              <wui-text variant="paragraph-500" color="fg-200">
                Deposit from ${t.name}
              </wui-text>
            </wui-list-item>`)}
      </wui-flex>
    `}amountInputTemplate(){var t;return c`
      <wui-flex flexDirection="column" gap="s" .padding=${["0","s","s","s"]} class="amount-input-container">
        <wui-flex justifyContent="space-between">
          <wui-text variant="paragraph-500" color="fg-200">Asset</wui-text>
          <wui-chip-button
            data-testid="deposit-from-exchange-asset-button"
            text=${((t=this.network)==null?void 0:t.nativeCurrency.symbol)||""}
            imageSrc=${w.getNetworkImage(this.network)}
            size="sm"
            variant="gray"
            icon=${null}
          ></wui-chip-button>
        </wui-flex>
        <wui-flex flexDirection="column" alignItems="center" justifyContent="center">
          <wui-flex alignItems="center" gap="4xs">
            <wui-text variant="2xl-500" color="fg-200">${this.amount}</wui-text>
            <wui-text variant="paragraph-500" color="fg-200">USD</wui-text>
          </wui-flex>
          ${this.tokenAmountTemplate()}
          </wui-flex>
          <wui-flex justifyContent="space-between" gap="xs">
            ${I.map(i=>c`<wui-button @click=${()=>this.onPresetAmountClick(i)} variant=${this.amount===i?"accent":"shade"} size="sm" fullWidth>$${i}</wui-button>`)}
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}tokenAmountTemplate(){var t;return this.priceLoading?c`<wui-shimmer
        width="65px"
        height="20px"
        borderRadius="xxs"
        variant="light"
      ></wui-shimmer>`:c`
      <wui-text variant="paragraph-500" color="fg-200">
        ${this.tokenAmount} ${(t=this.network)==null?void 0:t.nativeCurrency.symbol}
      </wui-text>
    `}async onExchangeClick(t){this.amount&&await e.handlePayWithExchange(t.id)}handlePaymentInProgress(){var t,i;this.isPaymentInProgress&&((t=this.currentPayment)!=null&&t.exchangeId)&&((i=this.currentPayment)!=null&&i.sessionId)&&this.paymentId&&(d.showLoading("Deposit in progress..."),x.replace("Account"),e.waitUntilComplete({exchangeId:this.currentPayment.exchangeId,sessionId:this.currentPayment.sessionId,paymentId:this.paymentId}).then(o=>{o.status==="SUCCESS"?d.showSuccess("Deposit completed"):o.status==="FAILED"&&d.showError("Deposit failed")}))}onPresetAmountClick(t){e.setAmount(t)}};n.styles=P;s([r()],n.prototype,"network",void 0);s([r()],n.prototype,"exchanges",void 0);s([r()],n.prototype,"isLoading",void 0);s([r()],n.prototype,"amount",void 0);s([r()],n.prototype,"tokenAmount",void 0);s([r()],n.prototype,"priceLoading",void 0);s([r()],n.prototype,"isPaymentInProgress",void 0);s([r()],n.prototype,"currentPayment",void 0);s([r()],n.prototype,"paymentId",void 0);n=s([y("w3m-deposit-from-exchange-view")],n);export{n as W3mDepositFromExchangeView};
