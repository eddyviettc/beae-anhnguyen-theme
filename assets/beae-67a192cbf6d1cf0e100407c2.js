(() => { if (window.BEAEPAGEJS === undefined) {
            window.BEAEPAGEJS = [];
          }

          if(window.beaePageSetting == undefined) {
            window.beaePageSetting = {};
          }
          
          window.beaePageSetting.pageId = "67a192cbf6d1cf0e100407c2";
              window.beaePageSetting.pageTitle = "product-test123"; 
              window.beaePageSetting.pageType = "product";

          let js_D4L6489P = () => { let BeaeUseHooks = {};
      try {
        let argid = 'beae-3wk0bfc2section-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-3wk0bfc2',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-3wk0bfc2');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-3wk0bfc2: ', ex)
      };
    

      try {
        let argid = 'beae-6kzt23mlsection-featured-product',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-6kzt23ml',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-6kzt23ml');
        args.el = args.els[0];
        ((a) => { var $,B;const n=a.el.querySelector('script[data-id="Product-json-'+a.id+'"]')||a.el.querySelector("#Product-json-"+a.id);let t=!1;const o=JSON.parse(n!=null&&n.innerHTML?n==null?void 0:n.innerHTML:"{}");let r=o!=null&&o.selected_or_first_available_variant?o==null?void 0:o.selected_or_first_available_variant:($=o.variants)==null?void 0:$[0];window.BeaeMoneyFormat||(window.BeaeMoneyFormat=(B=a.el.querySelector(".beae-money-format"))==null?void 0:B.innerHTML),r&&(r=o.variants.find(k=>k.id==r.id)),y(r);function s(k){const x=a.el.querySelector(".beae-attr-sku");if(k){if(x){x.style.removeProperty("display");const M=x.querySelector(".beae-attr-value");M&&(M.innerHTML=`${k.sku?k.sku:"N/A"}`)}}else x&&(x.style.display="none")}function u(k){var x,M,L,V,T;if(k!=null&&k.unitPriceMeasurement){const N=(x=a.el)==null?void 0:x.querySelectorAll(".product__unit-price");if(N){let E="",P=window.BeaeFormatMoney(k.unitPrice);P&&typeof P=="string"&&(P=P.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'")),((M=k.unitPriceMeasurement)==null?void 0:M.referenceValue)!=1&&((L=k.unitPriceMeasurement)==null?void 0:L.referenceValue)!=0&&(E+=k.unitPriceMeasurement.referenceValue),((V=k.unitPriceMeasurement)==null?void 0:V.referenceUnit)!==null&&((T=k.unitPriceMeasurement)==null?void 0:T.referenceUnit)!==""&&(E+=k.unitPriceMeasurement.referenceUnit),N.forEach(H=>{P!=null&&P!=""&&E!=null&&E!=""?H.innerHTML=`${P}/${E}`:H.innerHTML="Price per unit not available"})}}}function c(k){if(!window.BeaeMoneyFormat)return;const x=a.el.querySelectorAll(".beae-product-single__price:not(.beae-recommendation-item .beae-product-single__price)");x&&x.forEach(L=>{if(L){let V=window.BeaeFormatMoney(k.price);V&&typeof V=="string"&&(V=V.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'")),L.innerHTML=V}});const M=a.el.querySelectorAll(".beae-product-single__price--regular:not(.beae-recommendation-item .beae-product-single__price--regular)");M&&M.forEach(L=>{var V,T;if(L){const N=L.parentNode;if(k.compare_at_price){L.style.display="block";let E=window.BeaeFormatMoney(k.compare_at_price);E&&typeof E=="string"&&(E=E.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'")),L.innerHTML=E,(V=N==null?void 0:N.querySelector(".beae-product-single__price"))==null||V.setAttribute("data-sale",!0)}else L.style.display="none",(T=N==null?void 0:N.querySelector(".beae-product-single__price"))==null||T.removeAttribute("data-sale")}})}function d(k){var V,T,N,E;const x=a.el.querySelectorAll(".beae-product-single__price--badged"),M=parseFloat((T=(V=k.price)==null?void 0:V.toString())==null?void 0:T.replace(",","")),L=parseFloat((E=(N=k.compare_at_price)==null?void 0:N.toString())==null?void 0:E.replace(",",""));x&&x.forEach(P=>{if(!P)return;const H=P.getAttribute("type"),I=P.getAttribute("data-sale")||"",z=P.getAttribute("data-sold-out");let O="";if(H=="percent")O=Math.floor((L-M)*100/L);else if(H=="dollar"){const Z=window.BeaeFormatDecimal(k.compare_at_price)-window.BeaeFormatDecimal(k.price);O=window.BeaeFormatMoney(window.BeaeReverseFormatDecimal(Z))}else if(H=="none"){P.classList.remove("beae-product-single__price--sale","beae-sale-sold-out"),P.classList.add("beae-sale-hidden"),P.innerHTML="";return}const A=k.inventory_quantity,F=k.inventory_policy;if(A>0||A<1&&F=="continue"||!k.inventory_management)if(L&&L>M){P.classList.remove("beae-sale-sold-out","beae-sale-hidden"),P.classList.add("beae-product-single__price--sale");let Z=I.replace(new RegExp("{\\s*?sale\\s*?}","g"),O);Z&&(Z=Z.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'")),P.innerHTML=Z}else P.classList.remove("beae-product-single__price--sale","beae-sale-sold-out"),P.classList.add("beae-sale-hidden"),P.innerHTML="";else P.classList.remove("beae-sale-hidden","beae-product-single__price--sale"),P.classList.add("beae-sale-sold-out"),P.innerHTML=z})}function l(k){var V,T,N,E;const x=parseFloat((T=(V=k.price)==null?void 0:V.toString())==null?void 0:T.replace(",","")),M=parseFloat((E=(N=k.compare_at_price)==null?void 0:N.toString())==null?void 0:E.replace(",",""));let L=a.el.querySelectorAll(".beae-badged-wrapper span");L&&L.forEach(P=>{if(!P)return;const H=P.getAttribute("type"),I=P.getAttribute("data-sale")||"",z=P.getAttribute("data-sold-out");let O="";if(H=="percent")O=Math.floor((M-x)*100/M);else if(H=="dollar"){const Z=window.BeaeFormatDecimal(k.compare_at_price)-window.BeaeFormatDecimal(k.price);O=window.BeaeFormatMoney(window.BeaeReverseFormatDecimal(Z))}else if(H=="none"){P.classList.remove("beae-product-single__price--sale","beae-sale-sold-out"),P.classList.add("beae-sale-hidden"),P.innerHTML="";return}const A=k.inventory_quantity,F=k.inventory_policy;if(A>0||A<1&&F=="continue"||!k.inventory_management){const Z=parseFloat(k.price),W=parseFloat(k.compare_at_price);if(W&&W>Z){P.classList.remove("beae-sale-sold-out","beae-sale-hidden"),P.classList.add("beae-product-single__price--sale");let U=I.replace(new RegExp("{\\s*?sale\\s*?}","g"),O);U&&(U=U.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'")),P.innerHTML=U}else P.classList.remove("beae-product-single__price--sale","beae-sale-sold-out"),P.classList.add("beae-sale-hidden"),P.innerHTML=""}else P.classList.remove("beae-sale-hidden","beae-product-single__price--sale"),P.classList.add("beae-sale-sold-out"),P.innerHTML=z})}function _(k){const x=a.el.querySelectorAll(".beae-x-product-gallery .beae-slider");x&&o&&k.featured_media&&x.forEach(M=>{const L=M.getAttribute("data-desktop-layout");if(window.innerWidth>=768&&L=="grid"){const V=M.querySelector('.beae-slide-item[data-media-id="'+k.featured_media.id+'"]');Array.from(M.querySelectorAll(".beae-slide-item.beae-grid-active")).filter(function(N){return N.nodeType===1&&N!==V}).forEach(N=>{N.classList.remove("beae-grid-active")}),v=="true"&&V.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),V&&!V.classList.contains("beae-grid-active")&&V.classList.add("beae-grid-active")}else v=="true"&&M.dispatchEvent(new CustomEvent("activeSlide",{detail:{id:k.featured_media.id},bubbles:!0,cancelable:!0,composed:!1}))})}function y(k){if(a.mode.value==="builder"&&k){const R=a.el.querySelector(".beae-x-featuted_product");R==null||R.setAttribute("data-variant-id",k.id)}const x=a.el.querySelector(".beae-x-inventory");if(!x||!k)return;const M=x.children[0],L=x.getAttribute("data-in-stock-text"),V=x.getAttribute("data-out-stock-text");x.getAttribute("data-inventory-text");const T=x.getAttribute("data-pre-order-text"),N=x.getAttribute("data-very-low-stock-text"),E=x.getAttribute("data-low-stock-text"),P=x.getAttribute("data-incoming-date-text"),H=x.getAttribute("data-low-number")??20,I=x.getAttribute("data-very-low-number")??5,z=x.getAttribute("data-show-next-incoming-date"),O=x.getAttribute("data-max-number")??60,A=x.querySelector(".beae-inventory-label"),F=x.querySelector(".beae-inventory-process-body");let Z=k.inventory_quantity;a.el.querySelector(".beae-x-variant")||a.el.querySelector(".beae-x-swatch-color")||a.el.querySelector(".beae-x-add-to-cart-with-option")||(Z=o.variants.reduce((R,D)=>R+(D.inventory_quantity||0),0));function U(R){return R?R.replace("{quantity}",Z).replace("{next_incoming_date}",k.next_incoming_date):""}!M||!A||(k.available?k.inventory_policy==="continue"&&Z<1?(A.innerHTML=U(T),M.classList="",M.classList.add("beae-inventory-pre-order")):Z<=I?(A.innerHTML=U(N),M.classList="",M.classList.add("beae-inventory-very-low")):Z<=H?(A.innerHTML=U(E),M.classList="",M.classList.add("beae-inventory-low")):(A.innerHTML=U(L),M.classList="",M.classList.add("beae-inventory-in-stock")):k.next_incoming_date&&z?(A.innerHTML=U(P),M.classList="",M.classList.add("beae-incoming-transfer")):(A.innerHTML=U(V),M.classList="",M.classList.add("beae-inventory-out-stock")),F&&(Z<=O?F.style.width=Z/O*100+"%":F.style.width="100%"))}function b(k){const x=a.el.querySelector(".beae-add-to-cart--submit");if(x){const L=x.querySelector(".beae-add-to-cart-text-content");k.available?x&&(x.removeAttribute("disabled"),L&&(L.innerHTML=x.getAttribute("data-add-to-cart-text"))):x&&(a.mode.value=="live"&&x.setAttribute("disabled","disabled"),L&&(L.innerHTML=x.getAttribute("data-sold-out-text")))}const M=a.el.querySelector(".shopify-payment-button__button");M&&(k.inventory_quantity>0?M.removeAttribute("disabled"):a.mode.value=="live"&&M.setAttribute("disabled","disabled"))}function h(k){const x=a.el.querySelector(".beae-quantity-input"),M=a.el.querySelectorAll(".beae-quantity-btn");if(M&&M.forEach(L=>{k&&k.available?L.removeAttribute("disabled"):a.mode.value=="live"&&L.setAttribute("disabled","disabled")}),x){if(k)k.available?x.removeAttribute("disabled"):a.mode.value=="live"&&x.setAttribute("disabled","disabled");else{x.value=1,a.mode.value=="live"&&x.setAttribute("disabled","disabled");return}const L=k.inventory_quantity,V=k.inventory_policy;let T=9999;k.inventory_management&&V==="deny"&&(T=L),L<1&&V=="continue"&&(T=999999);let N=parseInt(x.value);N>T&&(N=T),N=isNaN(N)||!N?1:N,x.value=N,x.setAttribute("max",T)}}function p(k){if(k){let x=a.el.querySelector(".beae-pa-container");if(x&&a.mode.value=="live"){const M=x.getAttribute("data-section-id-template");x.innerHTML="";const V=window.location.pathname.split("/").filter(N=>N);let T="";V.length>0&&(V[0].length===2||/^[a-z]{2}(-[A-Z]{2})?$/.test(V[0]))&&(T=V[0]+"/"),window.fetch(window.location.origin+"/"+T+"products/"+o.handle+"?variant="+k.id+"&section_id="+M,{method:"GET",headers:{"Content-Type":"text/html"}}).then(N=>N.text()).then(N=>{let E=N.match(/<Beae-custom-liquid-pickup>(|[\s\S]+?)<\/Beae-custom-liquid-pickup>/g);E&&E[0]&&(x.innerHTML=E[0]);let P=x.querySelector(".beae-pa--btn"),H=x.querySelector(".beae-pa--detail");if(P){const I=x.closest("section.beae-section");I&&I.getAttribute("data-sectionid"),P.addEventListener("click",()=>{window.BeaePopupLibrary.createPopup(H,{layout:x.getAttribute("data-layout"),layoutMobile:"bottom",width:x.getAttribute("data-width"),id:a.id})})}}).catch(N=>{console.warn(N.message)})}}}const f=a.el.querySelector(".beae-variant-size-guide");if(f){const k=f.querySelector(".beae-variant-size-guide-btn"),x=f.querySelector(".beae-variant-size-guide-content"),M=a.el.querySelector(".beae-content-size-chart-preview");let L=window.isPreviewTemplate&&M||x;if(k&&L){const V=a.el.getAttribute("data-sectionid");k.addEventListener("click",()=>{window!=null&&window.BeaePopupLibrary&&window.BeaePopupLibrary.createPopup(L,{layout:"center",layoutMobile:"bottom",width:"auto",sectionId:V})})}}const m=a.el.querySelectorAll(".beae-custom-select_wrp");m&&m.length&&a.mode.value=="live"&&m.forEach(k=>{const x=k.querySelector("button.beae-custom-select__btn"),M=k.closest("div.beae-block.beae-core");x.addEventListener("click",function(L){k.classList.toggle("active"),M.style.position="relative",M.style.zIndex="1"}),document.addEventListener("click",function(L){k.contains(L.target)||(k.classList.remove("active"),M.style={})})});function w(){const k=a.el.querySelector(".beae-custom-select_wrp.active");k&&k.classList.remove("active")}const g=a.el.querySelector(".beae-x-variant"),v=g==null?void 0:g.getAttribute("data-scroll");let C=!1;if(g){let k=function(O,A){if(!O)return[];let F=O.options.filter((Z,W)=>W!=A);return o.variants.filter(Z=>F.every(W=>Z.options.includes(W)))??[]},x=function(O,A,F){if(!O)return null;let Z=O.options.filter((W,U)=>U!=A);return o.variants.find(W=>W.options.every(U=>[F,...Z].includes(U)))},M=function(O){if(!O)return;const A=a.el.querySelector("form.beae-product-form-next");if(A){A.getAttribute("data-variant-id",O.id);const F=A.querySelector('input[type="hidden"][name="id"]');F&&F.setAttribute("value",O.id)}g.querySelectorAll(".beae-variant-label").forEach(F=>{const Z=parseInt(F.getAttribute("data-option-position"))-1;F.innerHTML=O.options[Z]}),P||g.querySelectorAll(".beae-product-images-list").forEach(F=>{const Z=parseInt(F.getAttribute("data-option-position"))-1;let W=[];k(O,Z).forEach(U=>{W.push(`
                <span
                  class="beae-product-swatch-item-image"
                  variant-id=${U.id}
                >
                  <img
                    src="${U.featured_image?U.featured_image.src:"//cdn.shopify.com/shopifycloud/shopify/assets/no-image-160-1cfae84eca4ba66892099dcd26e604f5801fdadb3693bc9977f476aa160931ac_120x120_crop_center.gif"}"
                    alt="${U.title}"
                    height="120"
                    width="120"
                    loading="lazy"
                  />
                </span>
              `)}),F.querySelectorAll(".beae-product-variant-item-image").forEach((U,R)=>{U.innerHTML=W[R]})}),g.querySelectorAll(".beae-product-variant-item").forEach(F=>{const Z=parseInt(F.getAttribute("data-option-position"))-1;let W="";const U=F.getAttribute("data-value");if(U)try{W=decodeURIComponent(U)}catch{W=U}const R=x(O,Z,W);R&&(F.setAttribute("data-variant-id",R.id),R.inventory_management&&R.inventory_quantity<1&&R.inventory_policy!="continue"?F.classList.add("variant-item-disable"):F.classList.remove("variant-item-disable"))})},L=function(O){O.options.forEach((A,F)=>{let Z=F+1;const W=g.querySelectorAll('.beae-variant-option-list[data-option-position="'+Z+'"] > li');let U=null;const R=g.querySelector("select#"+z+"-option-"+F);if(R){for(let j=0;j<W.length;j++)W[j].classList.remove("beae-product-variant-item--selected"),decodeURIComponent(W[j].getAttribute("data-value"))==A&&(U=W[j]);U&&U.classList.add("beae-product-variant-item--selected"),R.value=A}const D=U&&U.closest(".beae-custom-select_wrp");if(D){const j=U&&U.getAttribute("data-color"),q=D.querySelector(".beae-selected-color");q&&(q.style="--beae-color-variant: "+j);const G=D.querySelector(".beae-text-selected");G&&(G.innerHTML=A)}})},V=function(O,A){N(O),O&&(t=!0,r=O,y(O),h(O),b(O),d(O),l(O),M(O),c(O),s(O),u(O),E?(E=!1,new URLSearchParams(window.location.search).get("variant")&&!window.noUpdateImageFirstLoad&&setTimeout(()=>{_(O)})):_(O),p(O),a.el.dispatchEvent(new CustomEvent("changeVariant",{detail:{variant:O},bubbles:!0,cancelable:!0,composed:!1})))},T=function(){const O=a.el.querySelector('.beae-product-option-cont[data-swatch-type="variant_image"]');if(!O)return;const A=O.getAttribute("data-option-position"),F="//cdn.shopify.com/shopifycloud/shopify/assets/no-image-160-1cfae84eca4ba66892099dcd26e604f5801fdadb3693bc9977f476aa160931ac_120x120_crop_center.gif",Z=a.el.querySelectorAll('.beae-product-option-cont:not([data-swatch-type="variant_image"])'),W={};Z&&Z.length&&Z.forEach(D=>{const j=D.querySelector(".beae-product-variant-item--selected");if(!j)return;const q=j.getAttribute("data-option-position"),G=decodeURIComponent(j.getAttribute("data-value"));W["option"+q]=G});const U=o.variants.filter(D=>Object.keys(W).every(j=>W[j]==D[j])),R=O.querySelectorAll(".beae-product-variant-item");R&&R.length&&R.forEach(D=>{const j=decodeURIComponent(D.getAttribute("data-value")),q=U.find(G=>G["option"+A]==j);D.querySelector("img")||(D.innerHTML=`
                          <span class="beae-product-swatch-item-image">
                          <img
                          src="${q&&q.featured_image?q.featured_image.src:F}"
                          alt="${q&&q.title}"
                          height="100"
                          width="100"
                          loading="lazy"
                          />
                      </span>
                      `)})},N=function(O){let A=o.variants,F=O&&O.option1,Z=O&&O.option2;if(!O){const R=a.el.querySelector('.beae-variant-option-list[data-option-position="1"] .beae-product-variant-item--selected');R&&(F=decodeURIComponent(R.getAttribute("data-value")));const D=a.el.querySelector('.beae-variant-option-list[data-option-position="2"] .beae-product-variant-item--selected');D&&(Z=decodeURIComponent(D.getAttribute("data-value")))}let W=[],U=[];if(F&&(A=o.variants.filter(R=>R.option1==F),A.forEach(R=>{R.option2&&!(W!=null&&W.includes(R.option2))&&W.push(R.option2)}),A.forEach(R=>{R.option2==Z&&R.option3&&!(U!=null&&U.includes(R.option3))&&U.push(R.option3)})),[2,3].forEach(R=>{const D=a.el.querySelectorAll('.beae-variant-option-list[data-option-position="'+R+'"] .beae-product-variant-item');if(D){let j=R==2?W:U;D.forEach(q=>{const G=decodeURIComponent(q.getAttribute("data-value"));j.includes(G)?q.setAttribute("data-unavailable",!1):q.setAttribute("data-unavailable",!0)})}}),!O){if(W&&W.length){const R=a.el.querySelector('.beae-variant-option-list[data-option-position="2"] .beae-product-variant-item--selected[data-unavailable="false"]'),D=a.el.querySelector('.beae-variant-option-list[data-option-position="2"] .beae-product-variant-item[data-unavailable="false"]');!R&&D&&D.click()}if(U&&U.length){a.el.querySelector('.beae-variant-option-list[data-option-position="3"] .beae-product-variant-item--selected[data-unavailable="false"]');const R=a.el.querySelector('.beae-variant-option-list[data-option-position="3"] .beae-product-variant-item[data-unavailable="false"]');R&&R.click()}}T()},E=!0,P=!1,H=g.querySelector('select[name="id"]'),I=!0;a.el.addEventListener("activeVariant",function(O){if(I){I=!1;return}if(t){t=!1;return}if(!o.variants||!O.detail.id||r&&r.featured_media&&O.detail.id==r.featured_media.id)return;const A=o.variants.find(F=>!F||!F.featured_media||!F.featured_media.id||!O.detail.id?!1:F.featured_media.id==O.detail.id);!A||r.id==A.id||(L(A),N(A),r=A,y(A),h(A),b(A),M(A),c(A),d(A),l(A),p(A),s(A),u(A))});const z=H&&H.getAttribute("id");if(H&&window.Shopify&&window.Shopify.OptionSelectors){let O=function(A){var D;E=!1;const F=parseInt(A.getAttribute("data-option-position"))-1,Z=g.querySelector("select#"+z+"-option-"+F);let W=A.getAttribute("data-value")??A.value,U="";try{U=decodeURIComponent(W)}catch{U=W}if(Z){const j=((D=A.parentElement)==null?void 0:D.children)??[];for(let q=0;q<j.length;q++)j[q].classList.remove("beae-product-variant-item--selected");A.classList.add("beae-product-variant-item--selected"),Z.value=U,Z.onchange()}const R=A.closest(".beae-custom-select_wrp");if(R){const j=A.getAttribute("data-color"),q=R.querySelector(".beae-selected-color");q&&(q.style="--beae-color-variant: "+j);const G=R.querySelector(".beae-text-selected");G&&(G.innerHTML=U)}};new window.Shopify.OptionSelectors(z,{product:o,onVariantSelected:V,enableHistoryState:a.mode.value=="live"}),g.querySelectorAll(".beae-product-variant-item").forEach(A=>{A.querySelector("a.beae-variant--link")||A.addEventListener("click",function(F){P=!1,O(A),w()})}),g.querySelectorAll(".beae-product-variant-item-image").forEach(A=>{A.querySelector("a.beae-variant--link")||A.addEventListener("click",function(F){P=!0,O(A)})})}}else C=!0;o.has_only_default_variant&&(C=!0),C&&S();function S(){r&&((r==null?void 0:r.title)=="Default Title"&&(r=o.variants[0]),y(r),h(r),b(r),d(r),l(r))} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-6kzt23ml: ', ex)
      };
    

      try {
        let argid = 'beae-vf0wrjwxblock-gallery',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-vf0wrjwx',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-vf0wrjwx');
        args.el = args.els[0];
        ((a) => { setTimeout(()=>{a.el.querySelector("button.beae-media-zoom")&&a.el.querySelectorAll("button.beae-media-zoom").forEach(n=>n.addEventListener("click",t=>{a.mode.value,n.closest(".beae-slider-items")&&(a.el.querySelectorAll(".beae-slider-items>*.active").forEach(m=>m.classList.remove("active")),n.parentNode.classList.add("active"));let o=document.createElement("div"),r=a.el.querySelectorAll("div.beae-slider-items > *"),s=a.el.querySelector("div.beae-slider-content").getBoundingClientRect();o.setAttribute("class","beae-sections beae-content-wrapper"),o.innerHTML=`
        <div class="${a.id}">
          <div class="beae-gallery-zoom">
            <div class="beae-gallery-zoom-content" style="transform-origin: ${s.left}px ${s.top+s.height/2}px;">
              <div class="beae-gallery-zoom-items">
                ${Array.from(r).map((m,w)=>{const g=m.getAttribute("type");return!g||(g==null?void 0:g.toLowerCase())!="image"?"":`
                    <div class="beae-gallery-zoom-item${m.classList.contains("active")?" active":""}" style="${m.classList.contains("active")?"order: -1;":""}">
                      ${m.innerHTML}
                    </div>
                  `}).join("")}
              </div>
            </div>
            <div class="beae-gallery-zoom-controls">
              <div class="beae-gallery-zoom-pagination">
                <button class="pagination_item prev">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                  </svg>
                </button>
                <span class="pagination_item per">0 / 0</span>
                <button class="pagination_item next">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <button class="beae-gallery-zoom-close">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path>
              </svg>
            </button>
          </div>
        </div>
      `,document.body.appendChild(o),document.body.style.overflow="hidden";let u=o.querySelector("button.beae-gallery-zoom-close"),c=o.querySelector(".beae-gallery-zoom"),d=o.querySelector(".beae-gallery-zoom-content"),l=o.querySelector(".beae-gallery-zoom-pagination .pagination_item.per"),_=o.querySelector(".pagination_item.prev"),y=o.querySelector(".pagination_item.next"),b=o.querySelectorAll(".beae-gallery-zoom-item"),h=o.querySelector(".beae-gallery-zoom-controls"),p=()=>{let m=o.querySelector(".beae-gallery-zoom-item.active"),w=0;Array.from(r).forEach(g=>{var v;((v=g.getAttribute("type"))==null?void 0:v.toLowerCase())=="image"&&w++}),w<2?h.style.display="none":h.style.display="flex",l.textContent=`${Array.from(o.querySelectorAll(".beae-gallery-zoom-item")).indexOf(m)+1} / ${w}`};p(),u.addEventListener("click",m=>{c.classList.remove("opened")}),o.querySelectorAll(".beae-gallery-zoom-item img").forEach(m=>{m.addEventListener("mousemove",w=>{m.parentNode.classList.contains("beae-gallery-zoom-more")?m.parentNode.classList.contains("beae-gallery-zoom-more")&&(m.style.objectFit==="cover"?m.style.objectPosition=100*(w.clientX/m.offsetWidth)+"% "+100*((w.clientY-m.offsetTop)/m.offsetHeight)+"%":m.style.objectPosition&&(m.style.objectPosition="")):(m.parentNode.classList.add("beae-gallery-zoom-more"),m.style.cursor="zoom-in",m.addEventListener("click",g=>{m.style.objectFit==="cover"?(m.style.objectFit="contain",g.target.style.transition="",m.style.cursor="zoom-in",m.style.objectPosition=""):(m.style.objectFit="cover",m.style.cursor="zoom-out",m.style.objectPosition=100*(g.clientX/m.offsetWidth)+"% "+100*((g.clientY-m.offsetTop)/m.offsetHeight)+"%")}))})}),c.addEventListener("transitionend",m=>{m.propertyName==="opacity"&&(c.classList.contains("opened")?(u.style.opacity=1,o.querySelectorAll(".beae-gallery-zoom-item img").forEach(w=>{w.removeAttribute("srcset"),w.removeAttribute("sizes")}),o.querySelector(".beae-gallery-zoom-item.active").style.order="",d.scrollTo({left:o.querySelector(".beae-gallery-zoom-item.active").offsetLeft})):(o.remove(),document.body.style.overflow=""))});let f=0;d.addEventListener("scroll",m=>{clearTimeout(f),f=setTimeout(()=>{b.forEach(w=>{Math.abs(m.target.scrollLeft-w.offsetLeft)<2?(w.classList.add("active"),p()):w.classList.remove("active")})},250)}),_.addEventListener("click",()=>{let m=o.querySelector(".beae-gallery-zoom-item.active");if(m.previousElementSibling)m.previousElementSibling.classList.add("active");else if(b[b.length-1]&&b.length>1)b[b.length-1].classList.add("active");else return;m.classList.remove("active"),d.scrollTo({behavior:"smooth",left:o.querySelector(".beae-gallery-zoom-item.active").offsetLeft}),p()}),y.addEventListener("click",()=>{let m=o.querySelector(".beae-gallery-zoom-item.active");if(m&&m.nextElementSibling)m.nextElementSibling.classList.add("active");else if(b[0]&&b.length>1)b[0].classList.add("active");else return;m.classList.remove("active"),d.scrollTo({behavior:"smooth",left:o.querySelector(".beae-gallery-zoom-item.active").offsetLeft}),p()}),setTimeout(()=>{c.classList.add("opened")},10)}))},1e3) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-vf0wrjwx: ', ex)
      };
    

      try {
        let argid = 'beae-vf0wrjwxsection-slide-show',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-vf0wrjwx',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-vf0wrjwx');
        args.el = args.els[0];
        ((h) => { window.BeaeSlider&&!h.noRunJs&&window.BeaeSlider(h) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-vf0wrjwx: ', ex)
      };
    

      try {
        let argid = 'beae-qassddexblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-qassddex',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-qassddex');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let F=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(F)return F.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-qassddex: ', ex)
      };
    

      try {
        let argid = 'beae-3bij1romblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-3bij1rom',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-3bij1rom');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let F=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(F)return F.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-3bij1rom: ', ex)
      };
    

      try {
        let argid = 'beae-ka064izdblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-ka064izd',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-ka064izd');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let F=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(F)return F.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-ka064izd: ', ex)
      };
    

      try {
        let argid = 'beae-rp4txc2ublock-buy',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-rp4txc2u',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-rp4txc2u');
        args.el = args.els[0];
        ((d) => { d.els&&d.els.forEach(l=>{const _=l.querySelector('.beae-quantity-btn[name="plus"]'),y=l.querySelector('.beae-quantity-btn[name="minus"]'),b=l.querySelector(".beae-quantity-input");_&&y&&b&&(b.value===""&&(b.value="1"),_.addEventListener("click",function(){_.getAttribute("disabled")!="disabled"&&b.stepUp()}),y.addEventListener("click",function(){y.getAttribute("disabled")!="disabled"&&b.stepDown()}))}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-rp4txc2u: ', ex)
      };
    

      try {
        let argid = 'beae-0u0ekguqblock-add-to-cart',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-0u0ekguq',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-0u0ekguq');
        args.el = args.els[0];
        ((v) => { if(v.mode.value=="builder"){if(!v.els)return;for(let C=0;C<v.els.length;C++)if(C==v.loopIndex){const S=v.els[C].closest("form.beae-product-form-next");if(!S)return;const $=S.querySelector(".beae-add-to-cart--submit"),B=S.getAttribute("data-product_id"),k=S.querySelector('script[data-id="Product-json-'+B+'"]')||S.querySelector("#Product-json-"+B),M=JSON.parse(k!=null&&k.innerHTML?k==null?void 0:k.innerHTML:"{}").variants||[];let L=S.getAttribute("data-variant-id"),V=M[0];L&&(V=M.find(N=>N.id==L));const T=$.querySelector(".beae-add-to-cart-text-content");V!=null&&V.available?T&&(M.length>1?T.innerHTML=$.getAttribute("data-choose-options-text"):T.innerHTML=$.getAttribute("data-add-to-cart-text")):T&&(T.innerHTML=$.getAttribute("data-sold-out-text"))}} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-0u0ekguq: ', ex)
      };
    

      try {
        let argid = 'beae-k9epujtb',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-k9epujtb',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-k9epujtb');
        args.el = args.els[0];
        (($) => { setTimeout(()=>{const B=$.el.querySelector(".shopify-payment-button__button","");B&&B.classList.add($.buyItNowType)},1e3) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-k9epujtb: ', ex)
      };
    

      try {
        let argid = 'beae-vli0gjz7section-slide-show',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-vli0gjz7',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-vli0gjz7');
        args.el = args.els[0];
        ((h) => { window.BeaeSlider&&!h.noRunJs&&window.BeaeSlider(h) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-vli0gjz7: ', ex)
      };
    

      try {
        let argid = 'beae-uc0k6gb4block-textloop-0',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-uc0k6gb4',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-uc0k6gb4');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let F=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(F)return F.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-uc0k6gb4: ', ex)
      };
    

      try {
        let argid = 'beae-uc0k6gb4block-textloop-1',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-uc0k6gb4',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-uc0k6gb4');
        args.el = args.els[1];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let F=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(F)return F.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-uc0k6gb4: ', ex)
      };
    

      try {
        let argid = 'beae-uc0k6gb4block-textloop-2',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-uc0k6gb4',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-uc0k6gb4');
        args.el = args.els[2];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let F=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(F)return F.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-uc0k6gb4: ', ex)
      };
    

      try {
        let argid = 'beae-hcdr3tohblock-local-pickup',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-hcdr3toh',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-hcdr3toh');
        args.el = args.els[0];
        ((data) => { let btnPopup=data.el.querySelector(".beae-pa--btn"),contentPopup=data.el.querySelector(".beae-pa--detail"),extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(t){extOptions={},console.error(t)}if(btnPopup){const t=data.el.closest("section.beae-section");let o="";t&&(o=t.getAttribute("data-sectionid")),btnPopup.addEventListener("click",()=>{window.BeaePopupLibrary.createPopup(contentPopup,{sectionId:o,...extOptions})})} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-hcdr3toh: ', ex)
      };
    

      try {
        let argid = 'beae-6kkn5bisblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-6kkn5bis',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-6kkn5bis');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let F=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(F)return F.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-6kkn5bis: ', ex)
      };
    

      try {
        let argid = 'beae-1rhiay75section-featured-collection',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-1rhiay75',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-1rhiay75');
        args.el = args.els[0];
        ((a) => { var o;window.BeaeMoneyFormat&&(window.BeaeMoneyFormat=(o=a.el.querySelector(".beae-money-format"))==null?void 0:o.innerHTML);const n=a.el.closest(".beae-body--preview");if(a.mode.value=="live"){let r=a.el.querySelector(".beae-related-product-info");if(r){let s=r.getAttribute("section-id"),u=r.getAttribute("product-id");s&&u&&fetch(window.Shopify.routes.root+"recommendations/products?product_id="+u+"&section_id="+s+"&intent="+a.intent).then(c=>c.text()).then(c=>{const d=document.createElement("div");d.innerHTML=c;const l=d.querySelector("."+a.id);return new Promise(_=>{if(l){const y=l.querySelector(".beae-related-products-content"),b=a.el.querySelector(".beae-related-products-content");y&&b&&(b.innerHTML=y.innerHTML);const h=b==null?void 0:b.querySelectorAll(".beae-recommendation-item");if(h!=null&&h.length)for(let p=0;p<h.length;p++){const f=document.createElement("form");f.innerHTML=h[p].innerHTML,Array.from(h[p].attributes).forEach(m=>{f.setAttribute(m.name,m.value)}),f.setAttribute("method","post"),f.setAttribute("action","/cart/add"),h[p].replaceWith(f)}}_()})}).then(()=>{typeof window.handleSwatchForCardForm=="function"&&(window.handleEventFormProductCard(),window.handleSwatchForCardForm(a),window.BeaeSlider&&window.BeaeSlider(a))})}}else document.addEventListener("relatedReady",r=>{typeof window.handleSwatchForCardForm=="function"&&(window.handleEventFormProductCard(),window.handleSwatchForCardForm(a))});n&&setTimeout(()=>{typeof window.handleEventFormProductCard=="function"&&(window.handleEventFormProductCard(),window.handleSwatchForCardForm(a))},100),setTimeout(()=>{typeof(a==null?void 0:a.promotionPosition)=="number"&&t(a==null?void 0:a.promotionPosition)},100);function t(r){const s=a.el.querySelector(".beae-slider-items");if(!s||a.mode.value!="live")return;const u=a.el.querySelector(".beae-promotion > *"),c=s.children;r>=c.length?s.appendChild(u):s.insertBefore(u,c[r]);const d=a.el.querySelector(".beae-promotion");d&&d.remove()} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-1rhiay75: ', ex)
      };
    

      try {
        let argid = 'beae-1rhiay75section-slide-show',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-1rhiay75',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-1rhiay75');
        args.el = args.els[0];
        ((h) => { window.BeaeSlider&&!h.noRunJs&&window.BeaeSlider(h) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-1rhiay75: ', ex)
      };
    

      try {
        let argid = 'beae-mktzxk3wblock-image',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-mktzxk3w',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-mktzxk3w');
        args.el = args.els[0];
        ((P) => { var F;if(P.el){if(P.shape){const R=P.el.closest(".beae-slider-items");R&&!R.hasAttribute("data-svg")&&(R==null||R.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${P.id}" clipPathUnits="objectBoundingBox">
                                ${P.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),R.setAttribute("data-svg","true"))}let Z=P.el.querySelector(".beae-image-content-position"),W,U=window.innerWidth>=768&&P.autoHover;var H=Z.querySelector(".beae-img-ratio-control"),I=Z.querySelector(".beae-img-comp-container"),z=Z.querySelector(".beae-img-comp-container--second");if(H&&z){let R=function(D){let j=0,q;G(),U?Z.onmouseover=function(K){Y(K)}:D.onmousedown=function(K){Y(K)},Z.onmouseup=function(){X()},D.ontouchstart=function(K){Y(K)},Z.ontouchend=function(){X()};function G(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{W=z.offsetWidth})}).observe(z),D.style.left&&parseInt(D.style.left)}function Y(K){check=!1,K.preventDefault(),K.clientX?K.clientX:K.touches[0].clientX,parseInt(D.style.left),j=1,Z.onmousemove=function(re){oe(re)},Z.ontouchmove=function(re){oe(re)}}function X(){j=0,check=!0}function oe(K){if(j==0)return!1;q=te(K),q<0&&(q=0),q>100&&(q=100),ae(q)}function te(K){const re=Z.getBoundingClientRect(),ge=(K.changedTouches?K.changedTouches[0].clientX:K.clientX)-re.left;return Math.max(0,Math.min(100,Math.round(ge*100/W)))}function ae(K){D.style.left=K+"%",z.style.clipPath=`polygon(${K}% 0%, ${K}% 100%, 100% 100%, 100% 0)`,I.style.clipPath=`polygon(0% 100%, 0% 0%, ${K}% 0%, ${K}% 100%)`}};H&&z&&R(H),window.addEventListener("resize",function(){H&&z&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{W=z.offsetWidth})}).observe(z),R(H))})}}let O=(F=P.el)==null?void 0:F.querySelector("a.beae-x-image"),A=O==null?void 0:O.getAttribute("href");O&&P.mode.value!=="builder"&&(A!=null&&A.includes("#"))&&O.addEventListener("click",Z=>{let W=document.querySelector(A+","+(A==null?void 0:A.replace("#",".")));if(W)return W.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),Z.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-mktzxk3w: ', ex)
      };
    

      try {
        let argid = 'beae-13nrp53pblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-13nrp53p',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-13nrp53p');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let F=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(F)return F.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-13nrp53p: ', ex)
      };
    

      try {
        let argid = 'beae-9gexkltzblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-9gexkltz',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-9gexkltz');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let F=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(F)return F.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-9gexkltz: ', ex)
      };
    

      try {
        let argid = 'beae-bhj62h81block-add-to-cart',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-bhj62h81',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-bhj62h81');
        args.el = args.els[0];
        ((v) => { if(v.mode.value=="builder"){if(!v.els)return;for(let C=0;C<v.els.length;C++)if(C==v.loopIndex){const S=v.els[C].closest("form.beae-product-form-next");if(!S)return;const $=S.querySelector(".beae-add-to-cart--submit"),B=S.getAttribute("data-product_id"),k=S.querySelector('script[data-id="Product-json-'+B+'"]')||S.querySelector("#Product-json-"+B),M=JSON.parse(k!=null&&k.innerHTML?k==null?void 0:k.innerHTML:"{}").variants||[];let L=S.getAttribute("data-variant-id"),V=M[0];L&&(V=M.find(N=>N.id==L));const T=$.querySelector(".beae-add-to-cart-text-content");V!=null&&V.available?T&&(M.length>1?T.innerHTML=$.getAttribute("data-choose-options-text"):T.innerHTML=$.getAttribute("data-add-to-cart-text")):T&&(T.innerHTML=$.getAttribute("data-sold-out-text"))}} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-bhj62h81: ', ex)
      };
    

      try {
        let argid = 'beae-ojvhmhwyblock-tabs',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-ojvhmhwy',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-ojvhmhwy');
        args.el = args.els[0];
        ((data) => { const prefixClass=`div[data-id=${data.id}] > .beae-tab-wrp`;let tabs=data.el.querySelectorAll(`${prefixClass} > .beae-tab-items > .beae-tab-item`),contents=data.el.querySelectorAll(`${prefixClass} > .beae-tab-contents > .beae-tab-content`),rightside=data.el.querySelectorAll(`${prefixClass} .beae-rightside`),accordions=data.el.querySelectorAll(`${prefixClass} > .beae-tab-contents > .beae-tab-content > .beae-accordion-title--mobile`),activeTab=data.activeTab,toggleImg=data.toggleImg,layout=data.layout,accordionMode=data.accordionMode;function resetActive(){tabs.forEach(b=>b.classList.remove("active")),contents.forEach(b=>b.classList.remove("active")),accordions.forEach(b=>b.classList.remove("active")),toggleImg&&rightside.forEach(b=>b.classList.remove("active")),contents.forEach(b=>{const h=b.querySelector(".beae-accordion-body").style;layout=="accordions"?h.maxHeight="0px":(h.transform="scaleY(0)",h.opacity="0")})}function setActive(b){tabs[b].classList.add("active"),contents[b].classList.add("active"),accordions[b].classList.add("active"),toggleImg&&rightside[b].classList.add("active");const h=contents[b].querySelector(".beae-accordion-body");if(h){const p=h.style;layout=="accordions"?p.maxHeight=data.mode.value=="builder"?"":h.scrollHeight+"px":(p.transform="scaleY(1)",p.transformOrigin="top center",p.opacity="1")}}function removeActive(b){tabs[b].classList.remove("active"),contents[b].classList.remove("active"),accordions[b].classList.remove("active"),toggleImg&&rightside[b].classList.remove("active");const h=contents[b].querySelector(".beae-accordion-body").style;layout=="accordions"?h.maxHeight="0px":(h.transform="scaleY(0)",h.opacity="0")}resetActive(),activeTab!=="none"&&accordionMode!="popup"&&setActive(activeTab),tabs.forEach((b,h)=>{b.addEventListener("click",()=>{resetActive(),setActive(h)})});const section=data.el.closest("section.beae-section");let sectionId="";section&&(sectionId=section.getAttribute("data-sectionid"));let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(b){extOptions={},console.error(b)}if(accordions.forEach((b,h)=>{b.addEventListener("click",()=>{if(accordionMode=="popup"&&data.mode.value!="builder"){const p=b.closest(".beae-tab-content");if(p){let f=document.createElement("div");f.innerHTML=`
                            <h3 class="beae-popup__content-title">${b.querySelector("span").innerHTML}</h3>
                            <div class="beae-popup__content-body ${data.id}">${p.querySelector(".beae-accordion-body").innerHTML}</div>
                            `,window.BeaePopupLibrary.createPopup(f,{layout:extOptions.layout?extOptions.layout:"right",width:extOptions.width?extOptions.width:"400px",layoutMobile:extOptions.layoutMobile?extOptions.layoutMobile:"bottom",sectionId})}}else accordionMode=="single"?(resetActive(),setActive(h)):b.classList.contains("active")?removeActive(h):setActive(h)})}),layout=="tabs"){const b=data.el.querySelector(".beae-tab-contents"),h=b.querySelectorAll(".beae-tab-content-wrp");let p=0,f=-1;h.forEach((w,g)=>{const v=w.offsetHeight;v>p&&(f=g,p=v)}),new ResizeObserver(()=>{b.style.setProperty("--beae-tabs-max-height",`${h[f].offsetHeight}px`)}).observe(h[f])} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-ojvhmhwy: ', ex)
      };
    

      try {
        let argid = 'beae-syeoia2mblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-syeoia2m',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-syeoia2m');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let F=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(F)return F.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-syeoia2m: ', ex)
      };
    

      try {
        let argid = 'beae-trdlefdcblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-trdlefdc',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-trdlefdc');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let F=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(F)return F.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-trdlefdc: ', ex)
      };
    

      try {
        let argid = 'beae-zrz78r11block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-zrz78r11',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-zrz78r11');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let F=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(F)return F.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-zrz78r11: ', ex)
      };
    

      try {
        let argid = 'beae-9c2m5q0lblock-share',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-9c2m5q0l',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-9c2m5q0l');
        args.el = args.els[0];
        ((l) => { const _=window.location.href;if(l.type=="label_with_icon"){if(l.mode.value=="live"){let b=function(p){switch(p){case"facebook":return"https://www.facebook.com/sharer/sharer.php?u=";case"twitter":return"https://twitter.com/intent/tweet?url=";case"linkedIn":return"https://www.linkedin.com/shareArticle?mini=true&url=";case"pinterest":return"https://pinterest.com/pin/create/button/?url=";case"reddit":return"https://reddit.com/submit?url=";case"skype":return"https://web.skype.com/share?url=";case"telegram":return"https://t.me/share/url?url=";case"whatsApp":return"https://api.whatsapp.com/send/?phone&text=";case"email":return"mailto:?&subject=&cc=&bcc=&body=";default:return"#"}};const h=l.el.querySelectorAll(".beae-share-link");h.length>0&&h.forEach((p,f)=>{let m=p.getAttribute("type"),w="";w=b(m)+_,p.setAttribute("href",w)})}}else if(l.type=="copy_link"){const b=l.el.querySelector(".beae-share-wrp");b.onclick=()=>{window.navigator.clipboard.writeText(_),y()}}else{const b=l.el.querySelector(".beae-share-wrp"),h=l.el.querySelector(".beae-share-link-copy-link");if(h&&(h.innerHTML=_),navigator.share)b.addEventListener("click",()=>{navigator.share({url:_,title:document.title})});else{const p=l.el.querySelector(".beae-share--container");l.el.querySelector(".beae-share-link-copy-btn").addEventListener("click",()=>{window.navigator.clipboard.writeText(_),y(),p.classList.remove("active")}),b.addEventListener("click",()=>{p.classList.toggle("active")}),document.addEventListener("click",function(m){p.contains(m.target)||p.classList.remove("active")})}}function y(){const b=l.el.querySelector(".beae-share--toast");b&&(b.classList.add("active"),setTimeout(()=>{b.classList.remove("active")},1e3))} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-9c2m5q0l: ', ex)
      };
    

      try {
        let argid = 'beae-k8dcra9dbutton-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-k8dcra9d',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-k8dcra9d');
        args.el = args.els[0];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(n){extOptions={},console.error(n)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let n=document.querySelector(selector+","+selector.replace("#","."));if(n)return n.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let t=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(t,{id:data.id,...extOptions}),e.preventDefault();return}const n=window.createLoading(e.currentTarget);return window.BeaePopupLibrary.lightbox({id:data.id,url:((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(t=>{t.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(t),n.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let n=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(n=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(n,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-k8dcra9d: ', ex)
      };
    

      try {
        let argid = 'beae-3wj34ui0section-featured-collection',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-3wj34ui0',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-3wj34ui0');
        args.el = args.els[0];
        ((a) => { var o;window.BeaeMoneyFormat&&(window.BeaeMoneyFormat=(o=a.el.querySelector(".beae-money-format"))==null?void 0:o.innerHTML);const n=a.el.closest(".beae-body--preview");if(a.mode.value=="live"){let r=a.el.querySelector(".beae-related-product-info");if(r){let s=r.getAttribute("section-id"),u=r.getAttribute("product-id");s&&u&&fetch(window.Shopify.routes.root+"recommendations/products?product_id="+u+"&section_id="+s+"&intent="+a.intent).then(c=>c.text()).then(c=>{const d=document.createElement("div");d.innerHTML=c;const l=d.querySelector("."+a.id);return new Promise(_=>{if(l){const y=l.querySelector(".beae-related-products-content"),b=a.el.querySelector(".beae-related-products-content");y&&b&&(b.innerHTML=y.innerHTML);const h=b==null?void 0:b.querySelectorAll(".beae-recommendation-item");if(h!=null&&h.length)for(let p=0;p<h.length;p++){const f=document.createElement("form");f.innerHTML=h[p].innerHTML,Array.from(h[p].attributes).forEach(m=>{f.setAttribute(m.name,m.value)}),f.setAttribute("method","post"),f.setAttribute("action","/cart/add"),h[p].replaceWith(f)}}_()})}).then(()=>{typeof window.handleSwatchForCardForm=="function"&&(window.handleEventFormProductCard(),window.handleSwatchForCardForm(a),window.BeaeSlider&&window.BeaeSlider(a))})}}else document.addEventListener("relatedReady",r=>{typeof window.handleSwatchForCardForm=="function"&&(window.handleEventFormProductCard(),window.handleSwatchForCardForm(a))});n&&setTimeout(()=>{typeof window.handleEventFormProductCard=="function"&&(window.handleEventFormProductCard(),window.handleSwatchForCardForm(a))},100),setTimeout(()=>{typeof(a==null?void 0:a.promotionPosition)=="number"&&t(a==null?void 0:a.promotionPosition)},100);function t(r){const s=a.el.querySelector(".beae-slider-items");if(!s||a.mode.value!="live")return;const u=a.el.querySelector(".beae-promotion > *"),c=s.children;r>=c.length?s.appendChild(u):s.insertBefore(u,c[r]);const d=a.el.querySelector(".beae-promotion");d&&d.remove()} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-3wj34ui0: ', ex)
      };
    

      try {
        let argid = 'beae-3wj34ui0section-slide-show',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-3wj34ui0',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-3wj34ui0');
        args.el = args.els[0];
        ((h) => { window.BeaeSlider&&!h.noRunJs&&window.BeaeSlider(h) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-3wj34ui0: ', ex)
      };
    

      try {
        let argid = 'beae-3qt00hqyblock-image',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-3qt00hqy',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-3qt00hqy');
        args.el = args.els[0];
        ((P) => { var F;if(P.el){if(P.shape){const R=P.el.closest(".beae-slider-items");R&&!R.hasAttribute("data-svg")&&(R==null||R.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${P.id}" clipPathUnits="objectBoundingBox">
                                ${P.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),R.setAttribute("data-svg","true"))}let Z=P.el.querySelector(".beae-image-content-position"),W,U=window.innerWidth>=768&&P.autoHover;var H=Z.querySelector(".beae-img-ratio-control"),I=Z.querySelector(".beae-img-comp-container"),z=Z.querySelector(".beae-img-comp-container--second");if(H&&z){let R=function(D){let j=0,q;G(),U?Z.onmouseover=function(K){Y(K)}:D.onmousedown=function(K){Y(K)},Z.onmouseup=function(){X()},D.ontouchstart=function(K){Y(K)},Z.ontouchend=function(){X()};function G(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{W=z.offsetWidth})}).observe(z),D.style.left&&parseInt(D.style.left)}function Y(K){check=!1,K.preventDefault(),K.clientX?K.clientX:K.touches[0].clientX,parseInt(D.style.left),j=1,Z.onmousemove=function(re){oe(re)},Z.ontouchmove=function(re){oe(re)}}function X(){j=0,check=!0}function oe(K){if(j==0)return!1;q=te(K),q<0&&(q=0),q>100&&(q=100),ae(q)}function te(K){const re=Z.getBoundingClientRect(),ge=(K.changedTouches?K.changedTouches[0].clientX:K.clientX)-re.left;return Math.max(0,Math.min(100,Math.round(ge*100/W)))}function ae(K){D.style.left=K+"%",z.style.clipPath=`polygon(${K}% 0%, ${K}% 100%, 100% 100%, 100% 0)`,I.style.clipPath=`polygon(0% 100%, 0% 0%, ${K}% 0%, ${K}% 100%)`}};H&&z&&R(H),window.addEventListener("resize",function(){H&&z&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{W=z.offsetWidth})}).observe(z),R(H))})}}let O=(F=P.el)==null?void 0:F.querySelector("a.beae-x-image"),A=O==null?void 0:O.getAttribute("href");O&&P.mode.value!=="builder"&&(A!=null&&A.includes("#"))&&O.addEventListener("click",Z=>{let W=document.querySelector(A+","+(A==null?void 0:A.replace("#",".")));if(W)return W.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),Z.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-3qt00hqy: ', ex)
      };
    

      try {
        let argid = 'beae-gcydxlnzblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-gcydxlnz',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-gcydxlnz');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let F=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(F)return F.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-gcydxlnz: ', ex)
      };
    

      try {
        let argid = 'beae-yfhgiwu3block-add-to-cart',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-yfhgiwu3',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-yfhgiwu3');
        args.el = args.els[0];
        ((v) => { if(v.mode.value=="builder"){if(!v.els)return;for(let C=0;C<v.els.length;C++)if(C==v.loopIndex){const S=v.els[C].closest("form.beae-product-form-next");if(!S)return;const $=S.querySelector(".beae-add-to-cart--submit"),B=S.getAttribute("data-product_id"),k=S.querySelector('script[data-id="Product-json-'+B+'"]')||S.querySelector("#Product-json-"+B),M=JSON.parse(k!=null&&k.innerHTML?k==null?void 0:k.innerHTML:"{}").variants||[];let L=S.getAttribute("data-variant-id"),V=M[0];L&&(V=M.find(N=>N.id==L));const T=$.querySelector(".beae-add-to-cart-text-content");V!=null&&V.available?T&&(M.length>1?T.innerHTML=$.getAttribute("data-choose-options-text"):T.innerHTML=$.getAttribute("data-add-to-cart-text")):T&&(T.innerHTML=$.getAttribute("data-sold-out-text"))}} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-yfhgiwu3: ', ex)
      };
    

      try {
        let argid = 'beae-ioze3aqssection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-ioze3aqs',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-ioze3aqs');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-ioze3aqs: ', ex)
      };
    

      try {
        let argid = 'beae-vxsjtzrjblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-vxsjtzrj',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-vxsjtzrj');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let F=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(F)return F.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-vxsjtzrj: ', ex)
      };
    

      try {
        let argid = 'beae-sknjlzdisection-featured-collection',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-sknjlzdi',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-sknjlzdi');
        args.el = args.els[0];
        ((a) => { var c;window.BeaeMoneyFormat||(window.BeaeMoneyFormat=(c=a.el.querySelector(".beae-money-format"))==null?void 0:c.innerHTML);let n=a.el.querySelectorAll(".beae-featuted-collection-nav");const t=a.el.querySelectorAll(".beae-feature-collection-tab-content"),o=a.el.querySelector(".beae-featuted-collection-nav.nav-active"),r=a.el.closest(".beae-body--preview");n.forEach((d,l)=>{a.mode.value=="live"&&!o&&(l===0?(d.classList.add("nav-active"),t[l]&&(t[l].style.display="block",t[l].setAttribute("data-active","true"))):(d.classList.remove("nav-active"),t[l]&&(t[l].style.display="none",t[l].setAttribute("data-active","false"))));let _=!1;d.addEventListener("click",()=>{if(_)return;_=!0,n.forEach(f=>{f.classList.remove("nav-active")}),d.classList.add("nav-active");const y=d.getAttribute("data-handle"),b=a.el.querySelectorAll(".viewall-link");b&&b.forEach(f=>{f.setAttribute("href",`/collections/${y}`)});const h=a.el.querySelector(`.beae-feature-collection-tab-content[data-handle="${y}"]`),p=a.el.querySelector('.beae-feature-collection-tab-content[data-active="true"]');if(a.el.querySelector(".beae-feature-collection-tab-content.content-active")!==null&&a.el.querySelector(".beae-feature-collection-tab-content.content-active").classList.remove("content-active"),p){p.setAttribute("data-active","false");const f=s(p);setTimeout(()=>{p.style.display="none",h&&(h.style.display="block"),setTimeout(()=>{h&&h.setAttribute("data-active","true"),_=!1},50)},f)}else h&&(h.style.display="block"),setTimeout(()=>{h&&h.setAttribute("data-active","true"),_=!1},50)})});function s(d){const _=window.getComputedStyle(d).getPropertyValue("transition-duration");let y=parseFloat(_)*1e3;return _.includes("s")?y=parseFloat(_)*1e3:y=parseFloat(_),y||0}setTimeout(()=>{typeof window.handleSwatchForCardForm=="function"&&window.handleSwatchForCardForm(a),typeof(a==null?void 0:a.promotionPosition)=="number"&&u(a==null?void 0:a.promotionPosition)},100),(["builder"].includes(a.mode.value)||r)&&setTimeout(()=>{typeof window.handleEventFormProductCard=="function"&&window.handleEventFormProductCard()},100);function u(d){if(a.mode.value!="live")return;const l=a.el.querySelectorAll(".beae-slider-items");if(l&&l.length){l.forEach(y=>{const b=a.el.querySelector(".beae-promotion > *");if(!b)return;const h=b.cloneNode(!0),p=y.children;d>=p.length?y.appendChild(h):y.insertBefore(h,p[d])});const _=a.el.querySelector(".beae-promotion");_&&_.remove()}} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-sknjlzdi: ', ex)
      };
    

      try {
        let argid = 'beae-sknjlzdisection-slide-show',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-sknjlzdi',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-sknjlzdi');
        args.el = args.els[0];
        ((h) => { window.BeaeSlider&&!h.noRunJs&&window.BeaeSlider(h) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-sknjlzdi: ', ex)
      };
    

      try {
        let argid = 'beae-bfv4pf4eblock-image',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-bfv4pf4e',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-bfv4pf4e');
        args.el = args.els[0];
        ((P) => { var F;if(P.el){if(P.shape){const R=P.el.closest(".beae-slider-items");R&&!R.hasAttribute("data-svg")&&(R==null||R.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${P.id}" clipPathUnits="objectBoundingBox">
                                ${P.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),R.setAttribute("data-svg","true"))}let Z=P.el.querySelector(".beae-image-content-position"),W,U=window.innerWidth>=768&&P.autoHover;var H=Z.querySelector(".beae-img-ratio-control"),I=Z.querySelector(".beae-img-comp-container"),z=Z.querySelector(".beae-img-comp-container--second");if(H&&z){let R=function(D){let j=0,q;G(),U?Z.onmouseover=function(K){Y(K)}:D.onmousedown=function(K){Y(K)},Z.onmouseup=function(){X()},D.ontouchstart=function(K){Y(K)},Z.ontouchend=function(){X()};function G(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{W=z.offsetWidth})}).observe(z),D.style.left&&parseInt(D.style.left)}function Y(K){check=!1,K.preventDefault(),K.clientX?K.clientX:K.touches[0].clientX,parseInt(D.style.left),j=1,Z.onmousemove=function(re){oe(re)},Z.ontouchmove=function(re){oe(re)}}function X(){j=0,check=!0}function oe(K){if(j==0)return!1;q=te(K),q<0&&(q=0),q>100&&(q=100),ae(q)}function te(K){const re=Z.getBoundingClientRect(),ge=(K.changedTouches?K.changedTouches[0].clientX:K.clientX)-re.left;return Math.max(0,Math.min(100,Math.round(ge*100/W)))}function ae(K){D.style.left=K+"%",z.style.clipPath=`polygon(${K}% 0%, ${K}% 100%, 100% 100%, 100% 0)`,I.style.clipPath=`polygon(0% 100%, 0% 0%, ${K}% 0%, ${K}% 100%)`}};H&&z&&R(H),window.addEventListener("resize",function(){H&&z&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{W=z.offsetWidth})}).observe(z),R(H))})}}let O=(F=P.el)==null?void 0:F.querySelector("a.beae-x-image"),A=O==null?void 0:O.getAttribute("href");O&&P.mode.value!=="builder"&&(A!=null&&A.includes("#"))&&O.addEventListener("click",Z=>{let W=document.querySelector(A+","+(A==null?void 0:A.replace("#",".")));if(W)return W.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),Z.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-bfv4pf4e: ', ex)
      };
    

      try {
        let argid = 'beae-cgm5xgntblock-add-to-cart',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-cgm5xgnt',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-cgm5xgnt');
        args.el = args.els[0];
        ((v) => { if(v.mode.value=="builder"){if(!v.els)return;for(let C=0;C<v.els.length;C++)if(C==v.loopIndex){const S=v.els[C].closest("form.beae-product-form-next");if(!S)return;const $=S.querySelector(".beae-add-to-cart--submit"),B=S.getAttribute("data-product_id"),k=S.querySelector('script[data-id="Product-json-'+B+'"]')||S.querySelector("#Product-json-"+B),M=JSON.parse(k!=null&&k.innerHTML?k==null?void 0:k.innerHTML:"{}").variants||[];let L=S.getAttribute("data-variant-id"),V=M[0];L&&(V=M.find(N=>N.id==L));const T=$.querySelector(".beae-add-to-cart-text-content");V!=null&&V.available?T&&(M.length>1?T.innerHTML=$.getAttribute("data-choose-options-text"):T.innerHTML=$.getAttribute("data-add-to-cart-text")):T&&(T.innerHTML=$.getAttribute("data-sold-out-text"))}} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-cgm5xgnt: ', ex)
      };
    

      try {
        let argid = 'beae-1odj0mfeblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-1odj0mfe',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-1odj0mfe');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let F=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(F)return F.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-1odj0mfe: ', ex)
      };
    

      try {
        let argid = 'beae-7abyav2nblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-7abyav2n',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-7abyav2n');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let F=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(F)return F.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-7abyav2n: ', ex)
      };
    

      try {
        let argid = 'beae-jwfelywpblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-jwfelywp',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-jwfelywp');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let F=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(F)return F.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-jwfelywp: ', ex)
      };
    

      try {
        let argid = 'beae-3ocxta1zsection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-3ocxta1z',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-3ocxta1z');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-3ocxta1z: ', ex)
      };
    }; if (window.BEAEBASE) {js_D4L6489P()} else {window.BEAEPAGEJS.push(js_D4L6489P)} })(); 