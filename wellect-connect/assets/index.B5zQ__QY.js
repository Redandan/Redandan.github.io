import{i as O,c as R,a as I,x as l,r as T,C,J as h,m as j,K as A,R as W,O as z,n as E,l as F,W as P,L as U}from"./wallet-vendor.CHv2NQr2.js";import{n as c,o as B,r as v}from"./if-defined.Cm0iLOsI.js";import"./index.zc6-bE5x.js";import"./index.D94szjeW.js";import"./index.DNPD4e61.js";import"./index.B0xO4txX.js";import"./index.D9uRDNEr.js";var L;(function(r){r.approve="approved",r.bought="bought",r.borrow="borrowed",r.burn="burnt",r.cancel="canceled",r.claim="claimed",r.deploy="deployed",r.deposit="deposited",r.execute="executed",r.mint="minted",r.receive="received",r.repay="repaid",r.send="sent",r.sell="sold",r.stake="staked",r.trade="swapped",r.unstake="unstaked",r.withdraw="withdrawn"})(L||(L={}));const V=O`
  :host > wui-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-gray-glass-005);
  }

  :host > wui-flex wui-image {
    display: block;
  }

  :host > wui-flex,
  :host > wui-flex wui-image,
  .swap-images-container,
  .swap-images-container.nft,
  wui-image.nft {
    border-top-left-radius: var(--local-left-border-radius);
    border-top-right-radius: var(--local-right-border-radius);
    border-bottom-left-radius: var(--local-left-border-radius);
    border-bottom-right-radius: var(--local-right-border-radius);
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }

  wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }

  .swap-images-container {
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;
  }

  .swap-images-container wui-image:first-child {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 0;
    left: 0%;
    clip-path: inset(0px calc(50% + 2px) 0px 0%);
  }

  .swap-images-container wui-image:last-child {
    clip-path: inset(0px 0px 0px calc(50% + 2px));
  }
`;var g=function(r,t,e,o){var s=arguments.length,i=s<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(r,t,e,o);else for(var a=r.length-1;a>=0;a--)(n=r[a])&&(i=(s<3?n(i):s>3?n(t,e,i):n(t,e))||i);return s>3&&i&&Object.defineProperty(t,e,i),i};let f=class extends I{constructor(){super(...arguments),this.images=[],this.secondImage={type:void 0,url:""}}render(){const[t,e]=this.images,o=(t==null?void 0:t.type)==="NFT",s=e!=null&&e.url?e.type==="NFT":o,i=o?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)",n=s?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)";return this.style.cssText=`
    --local-left-border-radius: ${i};
    --local-right-border-radius: ${n};
    `,l`<wui-flex> ${this.templateVisual()} ${this.templateIcon()} </wui-flex>`}templateVisual(){const[t,e]=this.images,o=t==null?void 0:t.type;return this.images.length===2&&(t!=null&&t.url||e!=null&&e.url)?l`<div class="swap-images-container">
        ${t!=null&&t.url?l`<wui-image src=${t.url} alt="Transaction image"></wui-image>`:null}
        ${e!=null&&e.url?l`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:null}
      </div>`:t!=null&&t.url?l`<wui-image src=${t.url} alt="Transaction image"></wui-image>`:o==="NFT"?l`<wui-icon size="inherit" color="fg-200" name="nftPlaceholder"></wui-icon>`:l`<wui-icon size="inherit" color="fg-200" name="coinPlaceholder"></wui-icon>`}templateIcon(){let t="accent-100",e;return e=this.getIcon(),this.status&&(t=this.getStatusColor()),e?l`
      <wui-icon-box
        size="xxs"
        iconColor=${t}
        backgroundColor=${t}
        background="opaque"
        icon=${e}
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
    `:null}getDirectionIcon(){switch(this.direction){case"in":return"arrowBottom";case"out":return"arrowTop";default:return}}getIcon(){return this.onlyDirectionIcon?this.getDirectionIcon():this.type==="trade"?"swapHorizontalBold":this.type==="approve"?"checkmark":this.type==="cancel"?"close":this.getDirectionIcon()}getStatusColor(){switch(this.status){case"confirmed":return"success-100";case"failed":return"error-100";case"pending":return"inverse-100";default:return"accent-100"}}};f.styles=[V];g([c()],f.prototype,"type",void 0);g([c()],f.prototype,"status",void 0);g([c()],f.prototype,"direction",void 0);g([c({type:Boolean})],f.prototype,"onlyDirectionIcon",void 0);g([c({type:Array})],f.prototype,"images",void 0);g([c({type:Object})],f.prototype,"secondImage",void 0);f=g([R("wui-transaction-visual")],f);const G=O`
  :host > wui-flex:first-child {
    align-items: center;
    column-gap: var(--wui-spacing-s);
    padding: 6.5px var(--wui-spacing-xs) 6.5px var(--wui-spacing-xs);
    width: 100%;
  }

  :host > wui-flex:first-child wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  :host wui-flex wui-flex {
    overflow: hidden;
  }

  :host .description-container wui-text span {
    word-break: break-all;
  }

  :host .description-container wui-text {
    overflow: hidden;
  }

  :host .description-separator-icon {
    margin: 0px 6px;
  }

  :host wui-text > span {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
`;var w=function(r,t,e,o){var s=arguments.length,i=s<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(r,t,e,o);else for(var a=r.length-1;a>=0;a--)(n=r[a])&&(i=(s<3?n(i):s>3?n(t,e,i):n(t,e))||i);return s>3&&i&&Object.defineProperty(t,e,i),i};let p=class extends I{constructor(){super(...arguments),this.type="approve",this.onlyDirectionIcon=!1,this.images=[],this.price=[],this.amount=[],this.symbol=[]}render(){return l`
      <wui-flex>
        <wui-transaction-visual
          .status=${this.status}
          direction=${B(this.direction)}
          type=${this.type}
          onlyDirectionIcon=${B(this.onlyDirectionIcon)}
          .images=${this.images}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="3xs">
          <wui-text variant="paragraph-600" color="fg-100">
            ${L[this.type]||this.type}
          </wui-text>
          <wui-flex class="description-container">
            ${this.templateDescription()} ${this.templateSecondDescription()}
          </wui-flex>
        </wui-flex>
        <wui-text variant="micro-700" color="fg-300"><span>${this.date}</span></wui-text>
      </wui-flex>
    `}templateDescription(){var e;const t=(e=this.descriptions)==null?void 0:e[0];return t?l`
          <wui-text variant="small-500" color="fg-200">
            <span>${t}</span>
          </wui-text>
        `:null}templateSecondDescription(){var e;const t=(e=this.descriptions)==null?void 0:e[1];return t?l`
          <wui-icon class="description-separator-icon" size="xxs" name="arrowRight"></wui-icon>
          <wui-text variant="small-400" color="fg-200">
            <span>${t}</span>
          </wui-text>
        `:null}};p.styles=[T,G];w([c()],p.prototype,"type",void 0);w([c({type:Array})],p.prototype,"descriptions",void 0);w([c()],p.prototype,"date",void 0);w([c({type:Boolean})],p.prototype,"onlyDirectionIcon",void 0);w([c()],p.prototype,"status",void 0);w([c()],p.prototype,"direction",void 0);w([c({type:Array})],p.prototype,"images",void 0);w([c({type:Array})],p.prototype,"price",void 0);w([c({type:Array})],p.prototype,"amount",void 0);w([c({type:Array})],p.prototype,"symbol",void 0);p=w([R("wui-transaction-list-item")],p);const K=O`
  :host > wui-flex:first-child {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
  }

  wui-flex {
    display: flex;
    flex: 1;
  }
`;var M=function(r,t,e,o){var s=arguments.length,i=s<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(r,t,e,o);else for(var a=r.length-1;a>=0;a--)(n=r[a])&&(i=(s<3?n(i):s>3?n(t,e,i):n(t,e))||i);return s>3&&i&&Object.defineProperty(t,e,i),i};let N=class extends I{render(){return l`
      <wui-flex alignItems="center">
        <wui-shimmer width="40px" height="40px"></wui-shimmer>
        <wui-flex flexDirection="column" gap="2xs">
          <wui-shimmer width="72px" height="16px" borderRadius="4xs"></wui-shimmer>
          <wui-shimmer width="148px" height="14px" borderRadius="4xs"></wui-shimmer>
        </wui-flex>
        <wui-shimmer width="24px" height="12px" borderRadius="5xs"></wui-shimmer>
      </wui-flex>
    `}};N.styles=[T,K];N=M([R("wui-transaction-list-item-loader")],N);const H=O`
  :host {
    min-height: 100%;
  }

  .group-container[last-group='true'] {
    padding-bottom: var(--wui-spacing-m);
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }

  .emptyContainer {
    height: 100%;
  }
`;var x=function(r,t,e,o){var s=arguments.length,i=s<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(r,t,e,o);else for(var a=r.length-1;a>=0;a--)(n=r[a])&&(i=(s<3?n(i):s>3?n(t,e,i):n(t,e))||i);return s>3&&i&&Object.defineProperty(t,e,i),i};const D="last-transaction",q=7;let m=class extends I{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.page="activity",this.caipAddress=C.state.activeCaipAddress,this.transactionsByYear=h.state.transactionsByYear,this.loading=h.state.loading,this.empty=h.state.empty,this.next=h.state.next,h.clearCursor(),this.unsubscribe.push(C.subscribeKey("activeCaipAddress",t=>{t&&this.caipAddress!==t&&(h.resetTransactions(),h.fetchTransactions(t)),this.caipAddress=t}),C.subscribeKey("activeCaipNetwork",()=>{this.updateTransactionView()}),h.subscribe(t=>{this.transactionsByYear=t.transactionsByYear,this.loading=t.loading,this.empty=t.empty,this.next=t.next}))}firstUpdated(){this.updateTransactionView(),this.createPaginationObserver()}updated(){this.setPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return l` ${this.empty?null:this.templateTransactionsByYear()}
    ${this.loading?this.templateLoading():null}
    ${!this.loading&&this.empty?this.templateEmpty():null}`}updateTransactionView(){h.resetTransactions(),this.caipAddress&&h.fetchTransactions(j.getPlainAddress(this.caipAddress))}templateTransactionsByYear(){return Object.keys(this.transactionsByYear).sort().reverse().map(e=>{const o=parseInt(e,10),s=new Array(12).fill(null).map((i,n)=>{var u;const a=A.getTransactionGroupTitle(o,n),d=(u=this.transactionsByYear[o])==null?void 0:u[n];return{groupTitle:a,transactions:d}}).filter(({transactions:i})=>i).reverse();return s.map(({groupTitle:i,transactions:n},a)=>{const d=a===s.length-1;return n?l`
          <wui-flex
            flexDirection="column"
            class="group-container"
            last-group="${d?"true":"false"}"
            data-testid="month-indexes"
          >
            <wui-flex
              alignItems="center"
              flexDirection="row"
              .padding=${["xs","s","s","s"]}
            >
              <wui-text variant="paragraph-500" color="fg-200" data-testid="group-title"
                >${i}</wui-text
              >
            </wui-flex>
            <wui-flex flexDirection="column" gap="xs">
              ${this.templateTransactions(n,d)}
            </wui-flex>
          </wui-flex>
        `:null})})}templateRenderTransaction(t,e){const{date:o,descriptions:s,direction:i,isAllNFT:n,images:a,status:d,transfers:u,type:y}=this.getTransactionListItemProps(t),b=(u==null?void 0:u.length)>1;return(u==null?void 0:u.length)===2&&!n?l`
        <wui-transaction-list-item
          date=${o}
          .direction=${i}
          id=${e&&this.next?D:""}
          status=${d}
          type=${y}
          .images=${a}
          .descriptions=${s}
        ></wui-transaction-list-item>
      `:b?u.map(($,S)=>{const Y=A.getTransferDescription($),k=e&&S===u.length-1;return l` <wui-transaction-list-item
          date=${o}
          direction=${$.direction}
          id=${k&&this.next?D:""}
          status=${d}
          type=${y}
          .onlyDirectionIcon=${!0}
          .images=${[a[S]]}
          .descriptions=${[Y]}
        ></wui-transaction-list-item>`}):l`
      <wui-transaction-list-item
        date=${o}
        .direction=${i}
        id=${e&&this.next?D:""}
        status=${d}
        type=${y}
        .images=${a}
        .descriptions=${s}
      ></wui-transaction-list-item>
    `}templateTransactions(t,e){return t.map((o,s)=>{const i=e&&s===t.length-1;return l`${this.templateRenderTransaction(o,i)}`})}emptyStateActivity(){return l`<wui-flex
      class="emptyContainer"
      flexGrow="1"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      .padding=${["3xl","xl","3xl","xl"]}
      gap="xl"
      data-testid="empty-activity-state"
    >
      <wui-icon-box
        backgroundColor="gray-glass-005"
        background="gray"
        iconColor="fg-200"
        icon="wallet"
        size="lg"
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
      <wui-flex flexDirection="column" alignItems="center" gap="xs">
        <wui-text align="center" variant="paragraph-500" color="fg-100"
          >No Transactions yet</wui-text
        >
        <wui-text align="center" variant="small-500" color="fg-200"
          >Start trading on dApps <br />
          to grow your wallet!</wui-text
        >
      </wui-flex>
    </wui-flex>`}emptyStateAccount(){return l`<wui-flex
      class="contentContainer"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="l"
      data-testid="empty-account-state"
    >
      <wui-icon-box
        icon="swapHorizontal"
        size="inherit"
        iconColor="fg-200"
        backgroundColor="fg-200"
        iconSize="lg"
      ></wui-icon-box>
      <wui-flex
        class="textContent"
        gap="xs"
        flexDirection="column"
        justifyContent="center"
        flexDirection="column"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100">No activity yet</wui-text>
        <wui-text variant="small-400" align="center" color="fg-200"
          >Your next transactions will appear here</wui-text
        >
      </wui-flex>
      <wui-link @click=${this.onReceiveClick.bind(this)}>Trade</wui-link>
    </wui-flex>`}templateEmpty(){return this.page==="account"?l`${this.emptyStateAccount()}`:l`${this.emptyStateActivity()}`}templateLoading(){return this.page==="activity"?Array(q).fill(l` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map(t=>t):null}onReceiveClick(){W.push("WalletReceive")}createPaginationObserver(){const{projectId:t}=z.state;this.paginationObserver=new IntersectionObserver(([e])=>{e!=null&&e.isIntersecting&&!this.loading&&(h.fetchTransactions(j.getPlainAddress(this.caipAddress)),E.sendEvent({type:"track",event:"LOAD_MORE_TRANSACTIONS",properties:{address:j.getPlainAddress(this.caipAddress),projectId:t,cursor:this.next,isSmartAccount:F(C.state.activeChain)===P.ACCOUNT_TYPES.SMART_ACCOUNT}}))},{}),this.setPaginationObserver()}setPaginationObserver(){var e,o,s;(e=this.paginationObserver)==null||e.disconnect();const t=(o=this.shadowRoot)==null?void 0:o.querySelector(`#${D}`);t&&((s=this.paginationObserver)==null||s.observe(t))}getTransactionListItemProps(t){var d,u,y,b,_;const e=U.formatDate((d=t==null?void 0:t.metadata)==null?void 0:d.minedAt),o=A.getTransactionDescriptions(t),s=t==null?void 0:t.transfers,i=(u=t==null?void 0:t.transfers)==null?void 0:u[0],n=!!i&&((y=t==null?void 0:t.transfers)==null?void 0:y.every($=>!!$.nft_info)),a=A.getTransactionImages(s);return{date:e,direction:i==null?void 0:i.direction,descriptions:o,isAllNFT:n,images:a,status:(b=t.metadata)==null?void 0:b.status,transfers:s,type:(_=t.metadata)==null?void 0:_.operationType}}};m.styles=H;x([c()],m.prototype,"page",void 0);x([v()],m.prototype,"caipAddress",void 0);x([v()],m.prototype,"transactionsByYear",void 0);x([v()],m.prototype,"loading",void 0);x([v()],m.prototype,"empty",void 0);x([v()],m.prototype,"next",void 0);m=x([R("w3m-activity-list")],m);
