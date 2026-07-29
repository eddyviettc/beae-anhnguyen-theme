(() => { if (window.BEAEPAGEJS === undefined) {
            window.BEAEPAGEJS = [];
          }

          if(window.beaePageSetting == undefined) {
            window.beaePageSetting = {};
          }
          
          window.beaePageSetting.pageId = "undefined";
              window.beaePageSetting.pageTitle = "undefined"; 
              window.beaePageSetting.pageType = "undefined";

          let js_4E59RFAT = () => { let BeaeUseHooks = {};
      try {
        let argid = 'beae-ndj29jbxsection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-ndj29jbx',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-ndj29jbx');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-ndj29jbx: ', ex)
      };
    

      try {
        let argid = 'beae-dtiwh81ksection-featured-product',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-dtiwh81k',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-dtiwh81k');
        args.el = args.els[0];
        ((a) => { var k,$;const n=a.el.querySelector('script[data-id="Product-json-'+a.id+'"]')||a.el.querySelector("#Product-json-"+a.id);let t=!1;const o=JSON.parse(n!=null&&n.innerHTML?n==null?void 0:n.innerHTML:"{}");let r=o!=null&&o.selected_or_first_available_variant?o==null?void 0:o.selected_or_first_available_variant:(k=o.variants)==null?void 0:k[0];window.BeaeMoneyFormat||(window.BeaeMoneyFormat=($=a.el.querySelector(".beae-money-format"))==null?void 0:$.innerHTML),r&&(r=o.variants.find(w=>w.id==r.id)),y(r);function s(w){const x=a.el.querySelector(".beae-attr-sku");if(w){if(x){x.style.removeProperty("display");const M=x.querySelector(".beae-attr-value");M&&(M.innerHTML=`${w.sku?w.sku:"N/A"}`)}}else x&&(x.style.display="none")}function u(w){var x,M,L,V,T;if(w!=null&&w.unitPriceMeasurement){const N=(x=a.el)==null?void 0:x.querySelectorAll(".product__unit-price");if(N){let E="",P=window.BeaeFormatMoney(w.unitPrice);P&&typeof P=="string"&&(P=P.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'")),((M=w.unitPriceMeasurement)==null?void 0:M.referenceValue)!=1&&((L=w.unitPriceMeasurement)==null?void 0:L.referenceValue)!=0&&(E+=w.unitPriceMeasurement.referenceValue),((V=w.unitPriceMeasurement)==null?void 0:V.referenceUnit)!==null&&((T=w.unitPriceMeasurement)==null?void 0:T.referenceUnit)!==""&&(E+=w.unitPriceMeasurement.referenceUnit),N.forEach(H=>{P!=null&&P!=""&&E!=null&&E!=""?H.innerHTML=`${P}/${E}`:H.innerHTML="Price per unit not available"})}}}function c(w){if(!window.BeaeMoneyFormat)return;const x=a.el.querySelectorAll(".beae-product-single__price:not(.beae-recommendation-item .beae-product-single__price)");x&&x.forEach(L=>{if(L){let V=window.BeaeFormatMoney(w.price);V&&typeof V=="string"&&(V=V.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'")),L.innerHTML=V}});const M=a.el.querySelectorAll(".beae-product-single__price--regular:not(.beae-recommendation-item .beae-product-single__price--regular)");M&&M.forEach(L=>{var V,T;if(L){const N=L.parentNode;if(w.compare_at_price){L.style.display="block";let E=window.BeaeFormatMoney(w.compare_at_price);E&&typeof E=="string"&&(E=E.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'")),L.innerHTML=E,(V=N==null?void 0:N.querySelector(".beae-product-single__price"))==null||V.setAttribute("data-sale",!0)}else L.style.display="none",(T=N==null?void 0:N.querySelector(".beae-product-single__price"))==null||T.removeAttribute("data-sale")}})}function d(w){var V,T,N,E;const x=a.el.querySelectorAll(".beae-product-single__price--badged"),M=parseFloat((T=(V=w.price)==null?void 0:V.toString())==null?void 0:T.replace(",","")),L=parseFloat((E=(N=w.compare_at_price)==null?void 0:N.toString())==null?void 0:E.replace(",",""));x&&x.forEach(P=>{if(!P)return;const H=P.getAttribute("type"),I=P.getAttribute("data-sale")||"",A=P.getAttribute("data-sold-out");let O="";if(H=="percent")O=Math.floor((L-M)*100/L);else if(H=="dollar"){const q=window.BeaeFormatDecimal(w.compare_at_price)-window.BeaeFormatDecimal(w.price);O=window.BeaeFormatMoney(window.BeaeReverseFormatDecimal(q))}else if(H=="none"){P.classList.remove("beae-product-single__price--sale","beae-sale-sold-out"),P.classList.add("beae-sale-hidden"),P.innerHTML="";return}const z=w.inventory_quantity,D=w.inventory_policy;if(z>0||z<1&&D=="continue"||!w.inventory_management)if(L&&L>M){P.classList.remove("beae-sale-sold-out","beae-sale-hidden"),P.classList.add("beae-product-single__price--sale");let q=I.replace(new RegExp("{\\s*?sale\\s*?}","g"),O);q&&(q=q.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'")),P.innerHTML=q}else P.classList.remove("beae-product-single__price--sale","beae-sale-sold-out"),P.classList.add("beae-sale-hidden"),P.innerHTML="";else P.classList.remove("beae-sale-hidden","beae-product-single__price--sale"),P.classList.add("beae-sale-sold-out"),P.innerHTML=A})}function l(w){var V,T,N,E;const x=parseFloat((T=(V=w.price)==null?void 0:V.toString())==null?void 0:T.replace(",","")),M=parseFloat((E=(N=w.compare_at_price)==null?void 0:N.toString())==null?void 0:E.replace(",",""));let L=a.el.querySelectorAll(".beae-badged-wrapper span");L&&L.forEach(P=>{if(!P)return;const H=P.getAttribute("type"),I=P.getAttribute("data-sale")||"",A=P.getAttribute("data-sold-out");let O="";if(H=="percent")O=Math.floor((M-x)*100/M);else if(H=="dollar"){const q=window.BeaeFormatDecimal(w.compare_at_price)-window.BeaeFormatDecimal(w.price);O=window.BeaeFormatMoney(window.BeaeReverseFormatDecimal(q))}else if(H=="none"){P.classList.remove("beae-product-single__price--sale","beae-sale-sold-out"),P.classList.add("beae-sale-hidden"),P.innerHTML="";return}const z=w.inventory_quantity,D=w.inventory_policy;if(z>0||z<1&&D=="continue"||!w.inventory_management){const q=parseFloat(w.price),R=parseFloat(w.compare_at_price);if(R&&R>q){P.classList.remove("beae-sale-sold-out","beae-sale-hidden"),P.classList.add("beae-product-single__price--sale");let Z=I.replace(new RegExp("{\\s*?sale\\s*?}","g"),O);Z&&(Z=Z.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'")),P.innerHTML=Z}else P.classList.remove("beae-product-single__price--sale","beae-sale-sold-out"),P.classList.add("beae-sale-hidden"),P.innerHTML=""}else P.classList.remove("beae-sale-hidden","beae-product-single__price--sale"),P.classList.add("beae-sale-sold-out"),P.innerHTML=A})}function _(w){const x=a.el.querySelectorAll(".beae-x-product-gallery .beae-slider");x&&o&&w.featured_media&&x.forEach(M=>{const L=M.getAttribute("data-desktop-layout");if(window.innerWidth>=768&&L=="grid"){const V=M.querySelector('.beae-slide-item[data-media-id="'+w.featured_media.id+'"]');Array.from(M.querySelectorAll(".beae-slide-item.beae-grid-active")).filter(function(N){return N.nodeType===1&&N!==V}).forEach(N=>{N.classList.remove("beae-grid-active")}),v=="true"&&V.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),V&&!V.classList.contains("beae-grid-active")&&V.classList.add("beae-grid-active")}else v=="true"&&M.dispatchEvent(new CustomEvent("activeSlide",{detail:{id:w.featured_media.id},bubbles:!0,cancelable:!0,composed:!1}))})}function y(w){if(a.mode.value==="builder"&&w){const U=a.el.querySelector(".beae-x-featuted_product");U==null||U.setAttribute("data-variant-id",w.id)}const x=a.el.querySelector(".beae-x-inventory");if(!x||!w)return;const M=x.children[0],L=x.getAttribute("data-in-stock-text"),V=x.getAttribute("data-out-stock-text");x.getAttribute("data-inventory-text");const T=x.getAttribute("data-pre-order-text"),N=x.getAttribute("data-very-low-stock-text"),E=x.getAttribute("data-low-stock-text"),P=x.getAttribute("data-incoming-date-text"),H=x.getAttribute("data-low-number")??20,I=x.getAttribute("data-very-low-number")??5,A=x.getAttribute("data-show-next-incoming-date"),O=x.getAttribute("data-max-number")??60,z=x.querySelector(".beae-inventory-label"),D=x.querySelector(".beae-inventory-process-body");let q=w.inventory_quantity;a.el.querySelector(".beae-x-variant")||a.el.querySelector(".beae-x-swatch-color")||a.el.querySelector(".beae-x-add-to-cart-with-option")||(q=o.variants.reduce((U,j)=>U+(j.inventory_quantity||0),0));function Z(U){return U?U.replace("{quantity}",q).replace("{next_incoming_date}",w.next_incoming_date):""}!M||!z||(w.available?w.inventory_policy==="continue"&&q<1?(z.innerHTML=Z(T),M.classList="",M.classList.add("beae-inventory-pre-order")):q<=I?(z.innerHTML=Z(N),M.classList="",M.classList.add("beae-inventory-very-low")):q<=H?(z.innerHTML=Z(E),M.classList="",M.classList.add("beae-inventory-low")):(z.innerHTML=Z(L),M.classList="",M.classList.add("beae-inventory-in-stock")):w.next_incoming_date&&A?(z.innerHTML=Z(P),M.classList="",M.classList.add("beae-incoming-transfer")):(z.innerHTML=Z(V),M.classList="",M.classList.add("beae-inventory-out-stock")),D&&(q<=O?D.style.width=q/O*100+"%":D.style.width="100%"))}function g(w){const x=a.el.querySelector(".beae-add-to-cart--submit");if(x){const L=x.querySelector(".beae-add-to-cart-text-content");w.available?x&&(x.removeAttribute("disabled"),L&&(L.innerHTML=x.getAttribute("data-add-to-cart-text"))):x&&(a.mode.value=="live"&&x.setAttribute("disabled","disabled"),L&&(L.innerHTML=x.getAttribute("data-sold-out-text")))}const M=a.el.querySelector(".shopify-payment-button__button");M&&(w.inventory_quantity>0?M.removeAttribute("disabled"):a.mode.value=="live"&&M.setAttribute("disabled","disabled"))}function h(w){const x=a.el.querySelector(".beae-quantity-input"),M=a.el.querySelectorAll(".beae-quantity-btn");if(M&&M.forEach(L=>{w&&w.available?L.removeAttribute("disabled"):a.mode.value=="live"&&L.setAttribute("disabled","disabled")}),x){if(w)w.available?x.removeAttribute("disabled"):a.mode.value=="live"&&x.setAttribute("disabled","disabled");else{x.value=1,a.mode.value=="live"&&x.setAttribute("disabled","disabled");return}const L=w.inventory_quantity,V=w.inventory_policy;let T=9999;w.inventory_management&&V==="deny"&&(T=L),L<1&&V=="continue"&&(T=999999);let N=parseInt(x.value);N>T&&(N=T),N=isNaN(N)||!N?1:N,x.value=N,x.setAttribute("max",T)}}function p(w){if(w){let x=a.el.querySelector(".beae-pa-container");if(x&&a.mode.value=="live"){const M=x.getAttribute("data-section-id-template");x.innerHTML="";const V=window.location.pathname.split("/").filter(N=>N);let T="";V.length>0&&(V[0].length===2||/^[a-z]{2}(-[A-Z]{2})?$/.test(V[0]))&&(T=V[0]+"/"),window.fetch(window.location.origin+"/"+T+"products/"+o.handle+"?variant="+w.id+"&section_id="+M,{method:"GET",headers:{"Content-Type":"text/html"}}).then(N=>N.text()).then(N=>{let E=N.match(/<Beae-custom-liquid-pickup>(|[\s\S]+?)<\/Beae-custom-liquid-pickup>/g);E&&E[0]&&(x.innerHTML=E[0]);let P=x.querySelector(".beae-pa--btn"),H=x.querySelector(".beae-pa--detail");if(P){const I=x.closest("section.beae-section");I&&I.getAttribute("data-sectionid"),P.addEventListener("click",()=>{window.BeaePopupLibrary.createPopup(H,{layout:x.getAttribute("data-layout"),layoutMobile:"bottom",width:x.getAttribute("data-width"),id:a.id})})}}).catch(N=>{console.warn(N.message)})}}}const f=a.el.querySelector(".beae-variant-size-guide");if(f){const w=f.querySelector(".beae-variant-size-guide-btn"),x=f.querySelector(".beae-variant-size-guide-content"),M=a.el.querySelector(".beae-content-size-chart-preview");let L=window.isPreviewTemplate&&M||x;if(w&&L){const V=a.el.getAttribute("data-sectionid");w.addEventListener("click",()=>{window!=null&&window.BeaePopupLibrary&&window.BeaePopupLibrary.createPopup(L,{layout:"center",layoutMobile:"bottom",width:"auto",sectionId:V})})}}const b=a.el.querySelectorAll(".beae-custom-select_wrp");b&&b.length&&a.mode.value=="live"&&b.forEach(w=>{const x=w.querySelector("button.beae-custom-select__btn"),M=w.closest("div.beae-block.beae-core");x.addEventListener("click",function(L){w.classList.toggle("active"),M.style.position="relative",M.style.zIndex="1"}),document.addEventListener("click",function(L){w.contains(L.target)||(w.classList.remove("active"),M.style={})})});function C(){const w=a.el.querySelector(".beae-custom-select_wrp.active");w&&w.classList.remove("active")}const m=a.el.querySelector(".beae-x-variant"),v=m==null?void 0:m.getAttribute("data-scroll");let S=!1;if(m){let w=function(O,z){if(!O)return[];let D=O.options.filter((q,R)=>R!=z);return o.variants.filter(q=>D.every(R=>q.options.includes(R)))??[]},x=function(O,z,D){if(!O)return null;let q=O.options.filter((R,Z)=>Z!=z);return o.variants.find(R=>R.options.every(Z=>[D,...q].includes(Z)))},M=function(O){if(!O)return;const z=a.el.querySelector("form.beae-product-form-next");if(z){z.getAttribute("data-variant-id",O.id);const D=z.querySelector('input[type="hidden"][name="id"]');D&&D.setAttribute("value",O.id)}m.querySelectorAll(".beae-variant-label").forEach(D=>{const q=parseInt(D.getAttribute("data-option-position"))-1;D.innerHTML=O.options[q]}),P||m.querySelectorAll(".beae-product-images-list").forEach(D=>{const q=parseInt(D.getAttribute("data-option-position"))-1;let R=[];w(O,q).forEach(Z=>{R.push(`
                      <span
                        class="beae-product-swatch-item-image"
                        variant-id=${Z.id}
                      >
                        <img
                          src="${Z.featured_image?Z.featured_image.src:"//cdn.shopify.com/shopifycloud/shopify/assets/no-image-160-1cfae84eca4ba66892099dcd26e604f5801fdadb3693bc9977f476aa160931ac_120x120_crop_center.gif"}"
                          alt="${Z.title}"
                          height="120"
                          width="120"
                          loading="lazy"
                        />
                      </span>
                    `)}),D.querySelectorAll(".beae-product-variant-item-image").forEach((Z,U)=>{Z.innerHTML=R[U]})}),m.querySelectorAll(".beae-product-variant-item").forEach(D=>{const q=parseInt(D.getAttribute("data-option-position"))-1;let R="";const Z=D.getAttribute("data-value");if(Z)try{R=decodeURIComponent(Z)}catch{R=Z}const U=x(O,q,R);U&&(D.setAttribute("data-variant-id",U.id),U.inventory_management&&U.inventory_quantity<1&&U.inventory_policy!="continue"?D.classList.add("variant-item-disable"):D.classList.remove("variant-item-disable"))})},L=function(O){O.options.forEach((z,D)=>{let q=D+1;const R=m.querySelectorAll('.beae-variant-option-list[data-option-position="'+q+'"] > li');let Z=null;const U=m.querySelector("select#"+A+"-option-"+D);if(U){for(let G=0;G<R.length;G++)R[G].classList.remove("beae-product-variant-item--selected"),decodeURIComponent(R[G].getAttribute("data-value"))==z&&(Z=R[G]);Z&&Z.classList.add("beae-product-variant-item--selected"),U.value=z}const j=Z&&Z.closest(".beae-custom-select_wrp");if(j){const G=Z&&Z.getAttribute("data-color"),F=j.querySelector(".beae-selected-color");F&&(F.style="--beae-color-variant: "+G);const W=j.querySelector(".beae-text-selected");W&&(W.innerHTML=z)}})},V=function(O,z){N(O),O&&(t=!0,r=O,y(O),h(O),g(O),d(O),l(O),M(O),c(O),s(O),u(O),E?(E=!1,new URLSearchParams(window.location.search).get("variant")&&!window.noUpdateImageFirstLoad&&setTimeout(()=>{_(O)})):_(O),p(O),a.el.dispatchEvent(new CustomEvent("changeVariant",{detail:{variant:O},bubbles:!0,cancelable:!0,composed:!1})))},T=function(){const O=a.el.querySelector('.beae-product-option-cont[data-swatch-type="variant_image"]');if(!O)return;const z=O.getAttribute("data-option-position"),D="//cdn.shopify.com/shopifycloud/shopify/assets/no-image-160-1cfae84eca4ba66892099dcd26e604f5801fdadb3693bc9977f476aa160931ac_120x120_crop_center.gif",q=a.el.querySelectorAll('.beae-product-option-cont:not([data-swatch-type="variant_image"])'),R={};q&&q.length&&q.forEach(j=>{const G=j.querySelector(".beae-product-variant-item--selected");if(!G)return;const F=G.getAttribute("data-option-position"),W=decodeURIComponent(G.getAttribute("data-value"));R["option"+F]=W});const Z=o.variants.filter(j=>Object.keys(R).every(G=>R[G]==j[G])),U=O.querySelectorAll(".beae-product-variant-item");U&&U.length&&U.forEach(j=>{const G=decodeURIComponent(j.getAttribute("data-value")),F=Z.find(W=>W["option"+z]==G);j.querySelector("img")||(j.innerHTML=`
                          <span class="beae-product-swatch-item-image">
                          <img
                          src="${F&&F.featured_image?F.featured_image.src:D}"
                          alt="${F&&F.title}"
                          height="100"
                          width="100"
                          loading="lazy"
                          />
                      </span>
                      `)})},N=function(O){let z=o.variants,D=O&&O.option1,q=O&&O.option2;if(!O){const U=a.el.querySelector('.beae-variant-option-list[data-option-position="1"] .beae-product-variant-item--selected');U&&(D=decodeURIComponent(U.getAttribute("data-value")));const j=a.el.querySelector('.beae-variant-option-list[data-option-position="2"] .beae-product-variant-item--selected');j&&(q=decodeURIComponent(j.getAttribute("data-value")))}let R=[],Z=[];if(D&&(z=o.variants.filter(U=>U.option1==D),z.forEach(U=>{U.option2&&!(R!=null&&R.includes(U.option2))&&R.push(U.option2)}),z.forEach(U=>{U.option2==q&&U.option3&&!(Z!=null&&Z.includes(U.option3))&&Z.push(U.option3)})),[2,3].forEach(U=>{const j=a.el.querySelectorAll('.beae-variant-option-list[data-option-position="'+U+'"] .beae-product-variant-item');if(j){let G=U==2?R:Z;j.forEach(F=>{const W=decodeURIComponent(F.getAttribute("data-value"));G.includes(W)?F.setAttribute("data-unavailable",!1):F.setAttribute("data-unavailable",!0)})}}),!O){if(R&&R.length){const U=a.el.querySelector('.beae-variant-option-list[data-option-position="2"] .beae-product-variant-item--selected[data-unavailable="false"]'),j=a.el.querySelector('.beae-variant-option-list[data-option-position="2"] .beae-product-variant-item[data-unavailable="false"]');!U&&j&&j.click()}if(Z&&Z.length){a.el.querySelector('.beae-variant-option-list[data-option-position="3"] .beae-product-variant-item--selected[data-unavailable="false"]');const U=a.el.querySelector('.beae-variant-option-list[data-option-position="3"] .beae-product-variant-item[data-unavailable="false"]');U&&U.click()}}T()},E=!0,P=!1,H=m.querySelector('select[name="id"]'),I=!0;a.el.addEventListener("activeVariant",function(O){if(I){I=!1;return}if(t){t=!1;return}if(!o.variants||!O.detail.id||r&&r.featured_media&&O.detail.id==r.featured_media.id)return;const z=o.variants.find(D=>!D||!D.featured_media||!D.featured_media.id||!O.detail.id?!1:D.featured_media.id==O.detail.id);!z||r.id==z.id||(L(z),N(z),r=z,y(z),h(z),g(z),M(z),c(z),d(z),l(z),p(z),s(z),u(z))});const A=H&&H.getAttribute("id");if(H&&window.Shopify&&window.Shopify.OptionSelectors){let O=function(z){var j;E=!1;const D=parseInt(z.getAttribute("data-option-position"))-1,q=m.querySelector("select#"+A+"-option-"+D);let R=z.getAttribute("data-value")??z.value,Z="";try{Z=decodeURIComponent(R)}catch{Z=R}if(q){const G=((j=z.parentElement)==null?void 0:j.children)??[];for(let F=0;F<G.length;F++)G[F].classList.remove("beae-product-variant-item--selected");z.classList.add("beae-product-variant-item--selected"),q.value=Z,q.onchange()}const U=z.closest(".beae-custom-select_wrp");if(U){const G=z.getAttribute("data-color"),F=U.querySelector(".beae-selected-color");F&&(F.style="--beae-color-variant: "+G);const W=U.querySelector(".beae-text-selected");W&&(W.innerHTML=Z)}};new window.Shopify.OptionSelectors(A,{product:o,onVariantSelected:V,enableHistoryState:a.mode.value=="live"}),m.querySelectorAll(".beae-product-variant-item").forEach(z=>{if(z.querySelector("a.beae-variant--link"))return;const D=z.getAttribute("data-link");z.addEventListener("click",q=>{if(q.target.closest(".beae-product-variant-item-image")){if(D&&D!=="#"){window.location.href=D;return}P=!0,O(z);return}(!D||D==="#")&&(P=!1,O(z),C())})})}}else S=!0;o.has_only_default_variant&&(S=!0),S&&B();function B(){r&&((r==null?void 0:r.title)=="Default Title"&&(r=o.variants[0]),y(r),h(r),g(r),d(r),l(r))} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-dtiwh81k: ', ex)
      };
    

      try {
        let argid = 'beae-0ypq883pblock-image',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-0ypq883p',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-0ypq883p');
        args.el = args.els[0];
        ((M) => { var P;if(M.el){if(M.shape){const O=M.el.closest(".beae-slider-items");O&&!O.hasAttribute("data-svg")&&(O==null||O.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${M.id}" clipPathUnits="objectBoundingBox">
                                ${M.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),O.setAttribute("data-svg","true"))}let H=M.el.querySelector(".beae-image-content-position"),I,A=window.innerWidth>=768&&M.autoHover;var L=H.querySelector(".beae-img-ratio-control"),V=H.querySelector(".beae-img-comp-container"),T=H.querySelector(".beae-img-comp-container--second");if(L&&T){let O=function(z){let D=0,q;R(),A?H.onmouseover=function(W){Z(W)}:z.onmousedown=function(W){Z(W)},H.onmouseup=function(){U()},z.ontouchstart=function(W){Z(W)},H.ontouchend=function(){U()};function R(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),z.style.left&&parseInt(z.style.left)}function Z(W){check=!1,W.preventDefault(),W.clientX?W.clientX:W.touches[0].clientX,parseInt(z.style.left),D=1,H.onmousemove=function(X){j(X)},H.ontouchmove=function(X){j(X)}}function U(){D=0,check=!0}function j(W){if(D==0)return!1;q=G(W),q<0&&(q=0),q>100&&(q=100),F(q)}function G(W){const X=H.getBoundingClientRect(),ae=(W.changedTouches?W.changedTouches[0].clientX:W.clientX)-X.left;return Math.max(0,Math.min(100,Math.round(ae*100/I)))}function F(W){z.style.left=W+"%",T.style.clipPath=`polygon(${W}% 0%, ${W}% 100%, 100% 100%, 100% 0)`,V.style.clipPath=`polygon(0% 100%, 0% 0%, ${W}% 0%, ${W}% 100%)`}};L&&T&&O(L),window.addEventListener("resize",function(){L&&T&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),O(L))})}}let N=(P=M.el)==null?void 0:P.querySelector("a.beae-x-image"),E=N==null?void 0:N.getAttribute("href");N&&M.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&N.addEventListener("click",H=>{let I=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(I)return I.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),H.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-0ypq883p: ', ex)
      };
    

      try {
        let argid = 'beae-0r6rgy3wblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-0r6rgy3w',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-0r6rgy3w');
        args.el = args.els[0];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-0r6rgy3w: ', ex)
      };
    

      try {
        let argid = 'beae-us0cdmyeblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-us0cdmye',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-us0cdmye');
        args.el = args.els[0];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-us0cdmye: ', ex)
      };
    

      try {
        let argid = 'beae-a24jjusdsection-slide-show',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-a24jjusd',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-a24jjusd');
        args.el = args.els[0];
        ((h) => { window.BeaeSlider&&!h.noRunJs&&window.BeaeSlider(h) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-a24jjusd: ', ex)
      };
    

      try {
        let argid = 'beae-gxmd8xd1block-imageloop-0',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-gxmd8xd1',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-gxmd8xd1');
        args.el = args.els[0];
        ((M) => { var P;if(M.el){if(M.shape){const O=M.el.closest(".beae-slider-items");O&&!O.hasAttribute("data-svg")&&(O==null||O.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${M.id}" clipPathUnits="objectBoundingBox">
                                ${M.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),O.setAttribute("data-svg","true"))}let H=M.el.querySelector(".beae-image-content-position"),I,A=window.innerWidth>=768&&M.autoHover;var L=H.querySelector(".beae-img-ratio-control"),V=H.querySelector(".beae-img-comp-container"),T=H.querySelector(".beae-img-comp-container--second");if(L&&T){let O=function(z){let D=0,q;R(),A?H.onmouseover=function(W){Z(W)}:z.onmousedown=function(W){Z(W)},H.onmouseup=function(){U()},z.ontouchstart=function(W){Z(W)},H.ontouchend=function(){U()};function R(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),z.style.left&&parseInt(z.style.left)}function Z(W){check=!1,W.preventDefault(),W.clientX?W.clientX:W.touches[0].clientX,parseInt(z.style.left),D=1,H.onmousemove=function(X){j(X)},H.ontouchmove=function(X){j(X)}}function U(){D=0,check=!0}function j(W){if(D==0)return!1;q=G(W),q<0&&(q=0),q>100&&(q=100),F(q)}function G(W){const X=H.getBoundingClientRect(),ae=(W.changedTouches?W.changedTouches[0].clientX:W.clientX)-X.left;return Math.max(0,Math.min(100,Math.round(ae*100/I)))}function F(W){z.style.left=W+"%",T.style.clipPath=`polygon(${W}% 0%, ${W}% 100%, 100% 100%, 100% 0)`,V.style.clipPath=`polygon(0% 100%, 0% 0%, ${W}% 0%, ${W}% 100%)`}};L&&T&&O(L),window.addEventListener("resize",function(){L&&T&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),O(L))})}}let N=(P=M.el)==null?void 0:P.querySelector("a.beae-x-image"),E=N==null?void 0:N.getAttribute("href");N&&M.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&N.addEventListener("click",H=>{let I=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(I)return I.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),H.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-gxmd8xd1: ', ex)
      };
    

      try {
        let argid = 'beae-yjdu06hvblock-textloop-0',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-yjdu06hv',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-yjdu06hv');
        args.el = args.els[0];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-yjdu06hv: ', ex)
      };
    

      try {
        let argid = 'beae-gxmd8xd1block-imageloop-1',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-gxmd8xd1',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-gxmd8xd1');
        args.el = args.els[1];
        ((M) => { var P;if(M.el){if(M.shape){const O=M.el.closest(".beae-slider-items");O&&!O.hasAttribute("data-svg")&&(O==null||O.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${M.id}" clipPathUnits="objectBoundingBox">
                                ${M.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),O.setAttribute("data-svg","true"))}let H=M.el.querySelector(".beae-image-content-position"),I,A=window.innerWidth>=768&&M.autoHover;var L=H.querySelector(".beae-img-ratio-control"),V=H.querySelector(".beae-img-comp-container"),T=H.querySelector(".beae-img-comp-container--second");if(L&&T){let O=function(z){let D=0,q;R(),A?H.onmouseover=function(W){Z(W)}:z.onmousedown=function(W){Z(W)},H.onmouseup=function(){U()},z.ontouchstart=function(W){Z(W)},H.ontouchend=function(){U()};function R(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),z.style.left&&parseInt(z.style.left)}function Z(W){check=!1,W.preventDefault(),W.clientX?W.clientX:W.touches[0].clientX,parseInt(z.style.left),D=1,H.onmousemove=function(X){j(X)},H.ontouchmove=function(X){j(X)}}function U(){D=0,check=!0}function j(W){if(D==0)return!1;q=G(W),q<0&&(q=0),q>100&&(q=100),F(q)}function G(W){const X=H.getBoundingClientRect(),ae=(W.changedTouches?W.changedTouches[0].clientX:W.clientX)-X.left;return Math.max(0,Math.min(100,Math.round(ae*100/I)))}function F(W){z.style.left=W+"%",T.style.clipPath=`polygon(${W}% 0%, ${W}% 100%, 100% 100%, 100% 0)`,V.style.clipPath=`polygon(0% 100%, 0% 0%, ${W}% 0%, ${W}% 100%)`}};L&&T&&O(L),window.addEventListener("resize",function(){L&&T&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),O(L))})}}let N=(P=M.el)==null?void 0:P.querySelector("a.beae-x-image"),E=N==null?void 0:N.getAttribute("href");N&&M.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&N.addEventListener("click",H=>{let I=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(I)return I.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),H.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-gxmd8xd1: ', ex)
      };
    

      try {
        let argid = 'beae-yjdu06hvblock-textloop-1',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-yjdu06hv',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-yjdu06hv');
        args.el = args.els[1];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-yjdu06hv: ', ex)
      };
    

      try {
        let argid = 'beae-gxmd8xd1block-imageloop-2',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-gxmd8xd1',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-gxmd8xd1');
        args.el = args.els[2];
        ((M) => { var P;if(M.el){if(M.shape){const O=M.el.closest(".beae-slider-items");O&&!O.hasAttribute("data-svg")&&(O==null||O.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${M.id}" clipPathUnits="objectBoundingBox">
                                ${M.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),O.setAttribute("data-svg","true"))}let H=M.el.querySelector(".beae-image-content-position"),I,A=window.innerWidth>=768&&M.autoHover;var L=H.querySelector(".beae-img-ratio-control"),V=H.querySelector(".beae-img-comp-container"),T=H.querySelector(".beae-img-comp-container--second");if(L&&T){let O=function(z){let D=0,q;R(),A?H.onmouseover=function(W){Z(W)}:z.onmousedown=function(W){Z(W)},H.onmouseup=function(){U()},z.ontouchstart=function(W){Z(W)},H.ontouchend=function(){U()};function R(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),z.style.left&&parseInt(z.style.left)}function Z(W){check=!1,W.preventDefault(),W.clientX?W.clientX:W.touches[0].clientX,parseInt(z.style.left),D=1,H.onmousemove=function(X){j(X)},H.ontouchmove=function(X){j(X)}}function U(){D=0,check=!0}function j(W){if(D==0)return!1;q=G(W),q<0&&(q=0),q>100&&(q=100),F(q)}function G(W){const X=H.getBoundingClientRect(),ae=(W.changedTouches?W.changedTouches[0].clientX:W.clientX)-X.left;return Math.max(0,Math.min(100,Math.round(ae*100/I)))}function F(W){z.style.left=W+"%",T.style.clipPath=`polygon(${W}% 0%, ${W}% 100%, 100% 100%, 100% 0)`,V.style.clipPath=`polygon(0% 100%, 0% 0%, ${W}% 0%, ${W}% 100%)`}};L&&T&&O(L),window.addEventListener("resize",function(){L&&T&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),O(L))})}}let N=(P=M.el)==null?void 0:P.querySelector("a.beae-x-image"),E=N==null?void 0:N.getAttribute("href");N&&M.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&N.addEventListener("click",H=>{let I=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(I)return I.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),H.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-gxmd8xd1: ', ex)
      };
    

      try {
        let argid = 'beae-yjdu06hvblock-textloop-2',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-yjdu06hv',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-yjdu06hv');
        args.el = args.els[2];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-yjdu06hv: ', ex)
      };
    

      try {
        let argid = 'beae-gxmd8xd1block-imageloop-3',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-gxmd8xd1',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-gxmd8xd1');
        args.el = args.els[3];
        ((M) => { var P;if(M.el){if(M.shape){const O=M.el.closest(".beae-slider-items");O&&!O.hasAttribute("data-svg")&&(O==null||O.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${M.id}" clipPathUnits="objectBoundingBox">
                                ${M.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),O.setAttribute("data-svg","true"))}let H=M.el.querySelector(".beae-image-content-position"),I,A=window.innerWidth>=768&&M.autoHover;var L=H.querySelector(".beae-img-ratio-control"),V=H.querySelector(".beae-img-comp-container"),T=H.querySelector(".beae-img-comp-container--second");if(L&&T){let O=function(z){let D=0,q;R(),A?H.onmouseover=function(W){Z(W)}:z.onmousedown=function(W){Z(W)},H.onmouseup=function(){U()},z.ontouchstart=function(W){Z(W)},H.ontouchend=function(){U()};function R(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),z.style.left&&parseInt(z.style.left)}function Z(W){check=!1,W.preventDefault(),W.clientX?W.clientX:W.touches[0].clientX,parseInt(z.style.left),D=1,H.onmousemove=function(X){j(X)},H.ontouchmove=function(X){j(X)}}function U(){D=0,check=!0}function j(W){if(D==0)return!1;q=G(W),q<0&&(q=0),q>100&&(q=100),F(q)}function G(W){const X=H.getBoundingClientRect(),ae=(W.changedTouches?W.changedTouches[0].clientX:W.clientX)-X.left;return Math.max(0,Math.min(100,Math.round(ae*100/I)))}function F(W){z.style.left=W+"%",T.style.clipPath=`polygon(${W}% 0%, ${W}% 100%, 100% 100%, 100% 0)`,V.style.clipPath=`polygon(0% 100%, 0% 0%, ${W}% 0%, ${W}% 100%)`}};L&&T&&O(L),window.addEventListener("resize",function(){L&&T&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),O(L))})}}let N=(P=M.el)==null?void 0:P.querySelector("a.beae-x-image"),E=N==null?void 0:N.getAttribute("href");N&&M.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&N.addEventListener("click",H=>{let I=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(I)return I.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),H.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-gxmd8xd1: ', ex)
      };
    

      try {
        let argid = 'beae-yjdu06hvblock-textloop-3',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-yjdu06hv',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-yjdu06hv');
        args.el = args.els[3];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-yjdu06hv: ', ex)
      };
    

      try {
        let argid = 'beae-gxmd8xd1block-imageloop-4',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-gxmd8xd1',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-gxmd8xd1');
        args.el = args.els[4];
        ((M) => { var P;if(M.el){if(M.shape){const O=M.el.closest(".beae-slider-items");O&&!O.hasAttribute("data-svg")&&(O==null||O.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${M.id}" clipPathUnits="objectBoundingBox">
                                ${M.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),O.setAttribute("data-svg","true"))}let H=M.el.querySelector(".beae-image-content-position"),I,A=window.innerWidth>=768&&M.autoHover;var L=H.querySelector(".beae-img-ratio-control"),V=H.querySelector(".beae-img-comp-container"),T=H.querySelector(".beae-img-comp-container--second");if(L&&T){let O=function(z){let D=0,q;R(),A?H.onmouseover=function(W){Z(W)}:z.onmousedown=function(W){Z(W)},H.onmouseup=function(){U()},z.ontouchstart=function(W){Z(W)},H.ontouchend=function(){U()};function R(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),z.style.left&&parseInt(z.style.left)}function Z(W){check=!1,W.preventDefault(),W.clientX?W.clientX:W.touches[0].clientX,parseInt(z.style.left),D=1,H.onmousemove=function(X){j(X)},H.ontouchmove=function(X){j(X)}}function U(){D=0,check=!0}function j(W){if(D==0)return!1;q=G(W),q<0&&(q=0),q>100&&(q=100),F(q)}function G(W){const X=H.getBoundingClientRect(),ae=(W.changedTouches?W.changedTouches[0].clientX:W.clientX)-X.left;return Math.max(0,Math.min(100,Math.round(ae*100/I)))}function F(W){z.style.left=W+"%",T.style.clipPath=`polygon(${W}% 0%, ${W}% 100%, 100% 100%, 100% 0)`,V.style.clipPath=`polygon(0% 100%, 0% 0%, ${W}% 0%, ${W}% 100%)`}};L&&T&&O(L),window.addEventListener("resize",function(){L&&T&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),O(L))})}}let N=(P=M.el)==null?void 0:P.querySelector("a.beae-x-image"),E=N==null?void 0:N.getAttribute("href");N&&M.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&N.addEventListener("click",H=>{let I=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(I)return I.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),H.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-gxmd8xd1: ', ex)
      };
    

      try {
        let argid = 'beae-yjdu06hvblock-textloop-4',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-yjdu06hv',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-yjdu06hv');
        args.el = args.els[4];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-yjdu06hv: ', ex)
      };
    

      try {
        let argid = 'beae-ywjp9vmybutton-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-ywjp9vmy',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-ywjp9vmy');
        args.el = args.els[0];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{var n,t;let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(o){extOptions={},console.error(o)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let o=document.querySelector(selector+","+selector.replace("#","."));if(o)return o.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let s=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(s,{id:data.id,...extOptions}),e.preventDefault();return}const o=window.createLoading(e.currentTarget);let r=(t=(n=window.BEAE_HELPER)==null?void 0:n.routes)==null?void 0:t.root_url;return window.BeaePopupLibrary.lightbox({id:data.id,url:(r!=="/"?r:"")+((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(s=>{s.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(s),o.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let o=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(o=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(o,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-ywjp9vmy: ', ex)
      };
    

      try {
        let argid = 'beae-c4ez3qvgblock-image',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-c4ez3qvg',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-c4ez3qvg');
        args.el = args.els[0];
        ((M) => { var P;if(M.el){if(M.shape){const O=M.el.closest(".beae-slider-items");O&&!O.hasAttribute("data-svg")&&(O==null||O.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${M.id}" clipPathUnits="objectBoundingBox">
                                ${M.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),O.setAttribute("data-svg","true"))}let H=M.el.querySelector(".beae-image-content-position"),I,A=window.innerWidth>=768&&M.autoHover;var L=H.querySelector(".beae-img-ratio-control"),V=H.querySelector(".beae-img-comp-container"),T=H.querySelector(".beae-img-comp-container--second");if(L&&T){let O=function(z){let D=0,q;R(),A?H.onmouseover=function(W){Z(W)}:z.onmousedown=function(W){Z(W)},H.onmouseup=function(){U()},z.ontouchstart=function(W){Z(W)},H.ontouchend=function(){U()};function R(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),z.style.left&&parseInt(z.style.left)}function Z(W){check=!1,W.preventDefault(),W.clientX?W.clientX:W.touches[0].clientX,parseInt(z.style.left),D=1,H.onmousemove=function(X){j(X)},H.ontouchmove=function(X){j(X)}}function U(){D=0,check=!0}function j(W){if(D==0)return!1;q=G(W),q<0&&(q=0),q>100&&(q=100),F(q)}function G(W){const X=H.getBoundingClientRect(),ae=(W.changedTouches?W.changedTouches[0].clientX:W.clientX)-X.left;return Math.max(0,Math.min(100,Math.round(ae*100/I)))}function F(W){z.style.left=W+"%",T.style.clipPath=`polygon(${W}% 0%, ${W}% 100%, 100% 100%, 100% 0)`,V.style.clipPath=`polygon(0% 100%, 0% 0%, ${W}% 0%, ${W}% 100%)`}};L&&T&&O(L),window.addEventListener("resize",function(){L&&T&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),O(L))})}}let N=(P=M.el)==null?void 0:P.querySelector("a.beae-x-image"),E=N==null?void 0:N.getAttribute("href");N&&M.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&N.addEventListener("click",H=>{let I=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(I)return I.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),H.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-c4ez3qvg: ', ex)
      };
    

      try {
        let argid = 'beae-dbs5wdtsblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-dbs5wdts',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-dbs5wdts');
        args.el = args.els[0];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-dbs5wdts: ', ex)
      };
    

      try {
        let argid = 'beae-r3hvnuanblock-image',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-r3hvnuan',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-r3hvnuan');
        args.el = args.els[0];
        ((M) => { var P;if(M.el){if(M.shape){const O=M.el.closest(".beae-slider-items");O&&!O.hasAttribute("data-svg")&&(O==null||O.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${M.id}" clipPathUnits="objectBoundingBox">
                                ${M.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),O.setAttribute("data-svg","true"))}let H=M.el.querySelector(".beae-image-content-position"),I,A=window.innerWidth>=768&&M.autoHover;var L=H.querySelector(".beae-img-ratio-control"),V=H.querySelector(".beae-img-comp-container"),T=H.querySelector(".beae-img-comp-container--second");if(L&&T){let O=function(z){let D=0,q;R(),A?H.onmouseover=function(W){Z(W)}:z.onmousedown=function(W){Z(W)},H.onmouseup=function(){U()},z.ontouchstart=function(W){Z(W)},H.ontouchend=function(){U()};function R(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),z.style.left&&parseInt(z.style.left)}function Z(W){check=!1,W.preventDefault(),W.clientX?W.clientX:W.touches[0].clientX,parseInt(z.style.left),D=1,H.onmousemove=function(X){j(X)},H.ontouchmove=function(X){j(X)}}function U(){D=0,check=!0}function j(W){if(D==0)return!1;q=G(W),q<0&&(q=0),q>100&&(q=100),F(q)}function G(W){const X=H.getBoundingClientRect(),ae=(W.changedTouches?W.changedTouches[0].clientX:W.clientX)-X.left;return Math.max(0,Math.min(100,Math.round(ae*100/I)))}function F(W){z.style.left=W+"%",T.style.clipPath=`polygon(${W}% 0%, ${W}% 100%, 100% 100%, 100% 0)`,V.style.clipPath=`polygon(0% 100%, 0% 0%, ${W}% 0%, ${W}% 100%)`}};L&&T&&O(L),window.addEventListener("resize",function(){L&&T&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),O(L))})}}let N=(P=M.el)==null?void 0:P.querySelector("a.beae-x-image"),E=N==null?void 0:N.getAttribute("href");N&&M.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&N.addEventListener("click",H=>{let I=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(I)return I.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),H.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-r3hvnuan: ', ex)
      };
    

      try {
        let argid = 'beae-sh5frc8kblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-sh5frc8k',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-sh5frc8k');
        args.el = args.els[0];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-sh5frc8k: ', ex)
      };
    

      try {
        let argid = 'beae-izrjl4xzblock-image',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-izrjl4xz',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-izrjl4xz');
        args.el = args.els[0];
        ((M) => { var P;if(M.el){if(M.shape){const O=M.el.closest(".beae-slider-items");O&&!O.hasAttribute("data-svg")&&(O==null||O.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${M.id}" clipPathUnits="objectBoundingBox">
                                ${M.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),O.setAttribute("data-svg","true"))}let H=M.el.querySelector(".beae-image-content-position"),I,A=window.innerWidth>=768&&M.autoHover;var L=H.querySelector(".beae-img-ratio-control"),V=H.querySelector(".beae-img-comp-container"),T=H.querySelector(".beae-img-comp-container--second");if(L&&T){let O=function(z){let D=0,q;R(),A?H.onmouseover=function(W){Z(W)}:z.onmousedown=function(W){Z(W)},H.onmouseup=function(){U()},z.ontouchstart=function(W){Z(W)},H.ontouchend=function(){U()};function R(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),z.style.left&&parseInt(z.style.left)}function Z(W){check=!1,W.preventDefault(),W.clientX?W.clientX:W.touches[0].clientX,parseInt(z.style.left),D=1,H.onmousemove=function(X){j(X)},H.ontouchmove=function(X){j(X)}}function U(){D=0,check=!0}function j(W){if(D==0)return!1;q=G(W),q<0&&(q=0),q>100&&(q=100),F(q)}function G(W){const X=H.getBoundingClientRect(),ae=(W.changedTouches?W.changedTouches[0].clientX:W.clientX)-X.left;return Math.max(0,Math.min(100,Math.round(ae*100/I)))}function F(W){z.style.left=W+"%",T.style.clipPath=`polygon(${W}% 0%, ${W}% 100%, 100% 100%, 100% 0)`,V.style.clipPath=`polygon(0% 100%, 0% 0%, ${W}% 0%, ${W}% 100%)`}};L&&T&&O(L),window.addEventListener("resize",function(){L&&T&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),O(L))})}}let N=(P=M.el)==null?void 0:P.querySelector("a.beae-x-image"),E=N==null?void 0:N.getAttribute("href");N&&M.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&N.addEventListener("click",H=>{let I=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(I)return I.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),H.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-izrjl4xz: ', ex)
      };
    

      try {
        let argid = 'beae-lf6mpzkablock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-lf6mpzka',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-lf6mpzka');
        args.el = args.els[0];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-lf6mpzka: ', ex)
      };
    

      try {
        let argid = 'beae-svhrohkxsection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-svhrohkx',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-svhrohkx');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-svhrohkx: ', ex)
      };
    

      try {
        let argid = 'beae-fg29vth5section-slide-show',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-fg29vth5',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-fg29vth5');
        args.el = args.els[0];
        ((h) => { window.BeaeSlider&&!h.noRunJs&&window.BeaeSlider(h) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-fg29vth5: ', ex)
      };
    

      try {
        let argid = 'beae-2pixwjfbblock-videoloop-0',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-2pixwjfb',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-2pixwjfb');
        args.el = args.els[0];
        ((data) => { if(data.mode.value==="builder")return;if(data.source=="self hosted"&&data.el.querySelector(".beae_video")&&data.mute){const f=data.el.querySelector(".beae_video");f.muted=!0,f.play().catch(b=>{console.warn("Autoplay bị chặn:",b)})}const playButton=data.el.querySelector(".beae-video_overlay-icon"),playIcon=playButton&&playButton.querySelector(".beae-video-icon-play"),closePlayingButton=data.el.querySelector(".beae-close-video"),closeVideoFn=()=>{let f=playButton.closest(".beae-grid-block"),b=data.el.querySelector(".beae-x-video--wrapper");b&&b.classList.remove("playing"),f&&(f.style.zIndex=""),data.lightbox&&(document.querySelector("div.beae-builder")&&(document.querySelector("div.beae-builder").style.zIndex=""),f&&f.setAttribute("style",""),document.body.style.overflow="",document.documentElement.style.overflow="");let C=data.el.querySelector(".beae_video");C&&(C.autoplay=!1,C.pause());let m=data.el.querySelector(".beae_iframe");m&&m.getAttribute("src").indexOf("&autoplay=1")>-1&&m.setAttribute("src",m.getAttribute("src").replace("&autoplay=1",""))};if(playButton&&(playIcon&&playIcon.addEventListener("click",e=>{if(data.source=="self hosted"){let f=data.el.querySelector(".beae_video");f.autoplay=!0,f.load(),playButton.classList.remove("beae-overlay"),data.play_icon&&(data.el.querySelector(".beae-video-icon-play").style.display="none")}else{let f=data.el.querySelector(".beae_iframe"),b=f.getAttribute("src")+"&autoplay=1";f.setAttribute("src",b),playButton.classList.remove("beae-overlay"),data.play_icon&&(data.el.querySelector(".beae-video-icon-play").style.display="none")}let gridBlock=playButton.closest(".beae-grid-block"),wrapper=data.el.querySelector(".beae-x-video--wrapper");if(wrapper&&wrapper.classList.add("playing"),gridBlock&&(gridBlock.style.zIndex=1e8),data.lightbox){let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(f){extOptions={},console.error(f)}window.BeaePopupLibrary.createPopup(data.el.querySelector(".beae-block_video-player"),{width:"1070px",sectionId:data.id,...extOptions}),closeVideoFn()}}),closePlayingButton&&closePlayingButton.addEventListener("click",closeVideoFn)),["youtube","vimeo"].includes(data.source)&&(data.autoplay||data.loop)){let f=data.el.querySelector(".beae_iframe"),b={isloop:data.loop,autoplay:data.autoplay,idBlock:data.uniqueId||data.id,controls:data.player_controls?1:0,muted:data.mute};if(data.source=="youtube"){const C=/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;let m=data.srcYoutube.match(C),v=m&&m[2].length===11?m[2]:null;const S=/[?&]t=(\d+)s/,B=data.srcYoutube.match(S),k=B?B[1]:0;b.start=k,b.id=v,b.src=location.protocol+"//www.youtube.com/embed/"+v}switch(data.source){case"youtube":setTimeout(()=>{window.BEAEVIDEO.handleLoopYoutube&&window.BEAEVIDEO.handleLoopYoutube(b,data.uniqueId||data.id)});break;case"vimeo":setTimeout(()=>{window.BEAEVIDEO.handleLoopVimeo&&window.BEAEVIDEO.handleLoopVimeo(b,f)});break}} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-2pixwjfb: ', ex)
      };
    

      try {
        let argid = 'beae-2pixwjfbblock-videoloop-1',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-2pixwjfb',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-2pixwjfb');
        args.el = args.els[1];
        ((data) => { if(data.mode.value==="builder")return;if(data.source=="self hosted"&&data.el.querySelector(".beae_video")&&data.mute){const f=data.el.querySelector(".beae_video");f.muted=!0,f.play().catch(b=>{console.warn("Autoplay bị chặn:",b)})}const playButton=data.el.querySelector(".beae-video_overlay-icon"),playIcon=playButton&&playButton.querySelector(".beae-video-icon-play"),closePlayingButton=data.el.querySelector(".beae-close-video"),closeVideoFn=()=>{let f=playButton.closest(".beae-grid-block"),b=data.el.querySelector(".beae-x-video--wrapper");b&&b.classList.remove("playing"),f&&(f.style.zIndex=""),data.lightbox&&(document.querySelector("div.beae-builder")&&(document.querySelector("div.beae-builder").style.zIndex=""),f&&f.setAttribute("style",""),document.body.style.overflow="",document.documentElement.style.overflow="");let C=data.el.querySelector(".beae_video");C&&(C.autoplay=!1,C.pause());let m=data.el.querySelector(".beae_iframe");m&&m.getAttribute("src").indexOf("&autoplay=1")>-1&&m.setAttribute("src",m.getAttribute("src").replace("&autoplay=1",""))};if(playButton&&(playIcon&&playIcon.addEventListener("click",e=>{if(data.source=="self hosted"){let f=data.el.querySelector(".beae_video");f.autoplay=!0,f.load(),playButton.classList.remove("beae-overlay"),data.play_icon&&(data.el.querySelector(".beae-video-icon-play").style.display="none")}else{let f=data.el.querySelector(".beae_iframe"),b=f.getAttribute("src")+"&autoplay=1";f.setAttribute("src",b),playButton.classList.remove("beae-overlay"),data.play_icon&&(data.el.querySelector(".beae-video-icon-play").style.display="none")}let gridBlock=playButton.closest(".beae-grid-block"),wrapper=data.el.querySelector(".beae-x-video--wrapper");if(wrapper&&wrapper.classList.add("playing"),gridBlock&&(gridBlock.style.zIndex=1e8),data.lightbox){let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(f){extOptions={},console.error(f)}window.BeaePopupLibrary.createPopup(data.el.querySelector(".beae-block_video-player"),{width:"1070px",sectionId:data.id,...extOptions}),closeVideoFn()}}),closePlayingButton&&closePlayingButton.addEventListener("click",closeVideoFn)),["youtube","vimeo"].includes(data.source)&&(data.autoplay||data.loop)){let f=data.el.querySelector(".beae_iframe"),b={isloop:data.loop,autoplay:data.autoplay,idBlock:data.uniqueId||data.id,controls:data.player_controls?1:0,muted:data.mute};if(data.source=="youtube"){const C=/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;let m=data.srcYoutube.match(C),v=m&&m[2].length===11?m[2]:null;const S=/[?&]t=(\d+)s/,B=data.srcYoutube.match(S),k=B?B[1]:0;b.start=k,b.id=v,b.src=location.protocol+"//www.youtube.com/embed/"+v}switch(data.source){case"youtube":setTimeout(()=>{window.BEAEVIDEO.handleLoopYoutube&&window.BEAEVIDEO.handleLoopYoutube(b,data.uniqueId||data.id)});break;case"vimeo":setTimeout(()=>{window.BEAEVIDEO.handleLoopVimeo&&window.BEAEVIDEO.handleLoopVimeo(b,f)});break}} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-2pixwjfb: ', ex)
      };
    

      try {
        let argid = 'beae-2pixwjfbblock-videoloop-2',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-2pixwjfb',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-2pixwjfb');
        args.el = args.els[2];
        ((data) => { if(data.mode.value==="builder")return;if(data.source=="self hosted"&&data.el.querySelector(".beae_video")&&data.mute){const f=data.el.querySelector(".beae_video");f.muted=!0,f.play().catch(b=>{console.warn("Autoplay bị chặn:",b)})}const playButton=data.el.querySelector(".beae-video_overlay-icon"),playIcon=playButton&&playButton.querySelector(".beae-video-icon-play"),closePlayingButton=data.el.querySelector(".beae-close-video"),closeVideoFn=()=>{let f=playButton.closest(".beae-grid-block"),b=data.el.querySelector(".beae-x-video--wrapper");b&&b.classList.remove("playing"),f&&(f.style.zIndex=""),data.lightbox&&(document.querySelector("div.beae-builder")&&(document.querySelector("div.beae-builder").style.zIndex=""),f&&f.setAttribute("style",""),document.body.style.overflow="",document.documentElement.style.overflow="");let C=data.el.querySelector(".beae_video");C&&(C.autoplay=!1,C.pause());let m=data.el.querySelector(".beae_iframe");m&&m.getAttribute("src").indexOf("&autoplay=1")>-1&&m.setAttribute("src",m.getAttribute("src").replace("&autoplay=1",""))};if(playButton&&(playIcon&&playIcon.addEventListener("click",e=>{if(data.source=="self hosted"){let f=data.el.querySelector(".beae_video");f.autoplay=!0,f.load(),playButton.classList.remove("beae-overlay"),data.play_icon&&(data.el.querySelector(".beae-video-icon-play").style.display="none")}else{let f=data.el.querySelector(".beae_iframe"),b=f.getAttribute("src")+"&autoplay=1";f.setAttribute("src",b),playButton.classList.remove("beae-overlay"),data.play_icon&&(data.el.querySelector(".beae-video-icon-play").style.display="none")}let gridBlock=playButton.closest(".beae-grid-block"),wrapper=data.el.querySelector(".beae-x-video--wrapper");if(wrapper&&wrapper.classList.add("playing"),gridBlock&&(gridBlock.style.zIndex=1e8),data.lightbox){let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(f){extOptions={},console.error(f)}window.BeaePopupLibrary.createPopup(data.el.querySelector(".beae-block_video-player"),{width:"1070px",sectionId:data.id,...extOptions}),closeVideoFn()}}),closePlayingButton&&closePlayingButton.addEventListener("click",closeVideoFn)),["youtube","vimeo"].includes(data.source)&&(data.autoplay||data.loop)){let f=data.el.querySelector(".beae_iframe"),b={isloop:data.loop,autoplay:data.autoplay,idBlock:data.uniqueId||data.id,controls:data.player_controls?1:0,muted:data.mute};if(data.source=="youtube"){const C=/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;let m=data.srcYoutube.match(C),v=m&&m[2].length===11?m[2]:null;const S=/[?&]t=(\d+)s/,B=data.srcYoutube.match(S),k=B?B[1]:0;b.start=k,b.id=v,b.src=location.protocol+"//www.youtube.com/embed/"+v}switch(data.source){case"youtube":setTimeout(()=>{window.BEAEVIDEO.handleLoopYoutube&&window.BEAEVIDEO.handleLoopYoutube(b,data.uniqueId||data.id)});break;case"vimeo":setTimeout(()=>{window.BEAEVIDEO.handleLoopVimeo&&window.BEAEVIDEO.handleLoopVimeo(b,f)});break}} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-2pixwjfb: ', ex)
      };
    

      try {
        let argid = 'beae-6bvfu0zbsection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-6bvfu0zb',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-6bvfu0zb');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-6bvfu0zb: ', ex)
      };
    

      try {
        let argid = 'beae-7hae4a86block-image',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-7hae4a86',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-7hae4a86');
        args.el = args.els[0];
        ((M) => { var P;if(M.el){if(M.shape){const O=M.el.closest(".beae-slider-items");O&&!O.hasAttribute("data-svg")&&(O==null||O.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${M.id}" clipPathUnits="objectBoundingBox">
                                ${M.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),O.setAttribute("data-svg","true"))}let H=M.el.querySelector(".beae-image-content-position"),I,A=window.innerWidth>=768&&M.autoHover;var L=H.querySelector(".beae-img-ratio-control"),V=H.querySelector(".beae-img-comp-container"),T=H.querySelector(".beae-img-comp-container--second");if(L&&T){let O=function(z){let D=0,q;R(),A?H.onmouseover=function(W){Z(W)}:z.onmousedown=function(W){Z(W)},H.onmouseup=function(){U()},z.ontouchstart=function(W){Z(W)},H.ontouchend=function(){U()};function R(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),z.style.left&&parseInt(z.style.left)}function Z(W){check=!1,W.preventDefault(),W.clientX?W.clientX:W.touches[0].clientX,parseInt(z.style.left),D=1,H.onmousemove=function(X){j(X)},H.ontouchmove=function(X){j(X)}}function U(){D=0,check=!0}function j(W){if(D==0)return!1;q=G(W),q<0&&(q=0),q>100&&(q=100),F(q)}function G(W){const X=H.getBoundingClientRect(),ae=(W.changedTouches?W.changedTouches[0].clientX:W.clientX)-X.left;return Math.max(0,Math.min(100,Math.round(ae*100/I)))}function F(W){z.style.left=W+"%",T.style.clipPath=`polygon(${W}% 0%, ${W}% 100%, 100% 100%, 100% 0)`,V.style.clipPath=`polygon(0% 100%, 0% 0%, ${W}% 0%, ${W}% 100%)`}};L&&T&&O(L),window.addEventListener("resize",function(){L&&T&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),O(L))})}}let N=(P=M.el)==null?void 0:P.querySelector("a.beae-x-image"),E=N==null?void 0:N.getAttribute("href");N&&M.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&N.addEventListener("click",H=>{let I=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(I)return I.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),H.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-7hae4a86: ', ex)
      };
    

      try {
        let argid = 'beae-8oibfkbablock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-8oibfkba',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-8oibfkba');
        args.el = args.els[0];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-8oibfkba: ', ex)
      };
    

      try {
        let argid = 'beae-tiavd7csblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-tiavd7cs',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-tiavd7cs');
        args.el = args.els[0];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-tiavd7cs: ', ex)
      };
    

      try {
        let argid = 'beae-qgcykqo9section-slide-show',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-qgcykqo9',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-qgcykqo9');
        args.el = args.els[0];
        ((h) => { window.BeaeSlider&&!h.noRunJs&&window.BeaeSlider(h) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-qgcykqo9: ', ex)
      };
    

      try {
        let argid = 'beae-6xhaufyqblock-imageloop-0',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-6xhaufyq',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-6xhaufyq');
        args.el = args.els[0];
        ((M) => { var P;if(M.el){if(M.shape){const O=M.el.closest(".beae-slider-items");O&&!O.hasAttribute("data-svg")&&(O==null||O.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${M.id}" clipPathUnits="objectBoundingBox">
                                ${M.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),O.setAttribute("data-svg","true"))}let H=M.el.querySelector(".beae-image-content-position"),I,A=window.innerWidth>=768&&M.autoHover;var L=H.querySelector(".beae-img-ratio-control"),V=H.querySelector(".beae-img-comp-container"),T=H.querySelector(".beae-img-comp-container--second");if(L&&T){let O=function(z){let D=0,q;R(),A?H.onmouseover=function(W){Z(W)}:z.onmousedown=function(W){Z(W)},H.onmouseup=function(){U()},z.ontouchstart=function(W){Z(W)},H.ontouchend=function(){U()};function R(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),z.style.left&&parseInt(z.style.left)}function Z(W){check=!1,W.preventDefault(),W.clientX?W.clientX:W.touches[0].clientX,parseInt(z.style.left),D=1,H.onmousemove=function(X){j(X)},H.ontouchmove=function(X){j(X)}}function U(){D=0,check=!0}function j(W){if(D==0)return!1;q=G(W),q<0&&(q=0),q>100&&(q=100),F(q)}function G(W){const X=H.getBoundingClientRect(),ae=(W.changedTouches?W.changedTouches[0].clientX:W.clientX)-X.left;return Math.max(0,Math.min(100,Math.round(ae*100/I)))}function F(W){z.style.left=W+"%",T.style.clipPath=`polygon(${W}% 0%, ${W}% 100%, 100% 100%, 100% 0)`,V.style.clipPath=`polygon(0% 100%, 0% 0%, ${W}% 0%, ${W}% 100%)`}};L&&T&&O(L),window.addEventListener("resize",function(){L&&T&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),O(L))})}}let N=(P=M.el)==null?void 0:P.querySelector("a.beae-x-image"),E=N==null?void 0:N.getAttribute("href");N&&M.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&N.addEventListener("click",H=>{let I=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(I)return I.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),H.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-6xhaufyq: ', ex)
      };
    

      try {
        let argid = 'beae-lza8xvb8block-textloop-0',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-lza8xvb8',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-lza8xvb8');
        args.el = args.els[0];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-lza8xvb8: ', ex)
      };
    

      try {
        let argid = 'beae-6xhaufyqblock-imageloop-1',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-6xhaufyq',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-6xhaufyq');
        args.el = args.els[1];
        ((M) => { var P;if(M.el){if(M.shape){const O=M.el.closest(".beae-slider-items");O&&!O.hasAttribute("data-svg")&&(O==null||O.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${M.id}" clipPathUnits="objectBoundingBox">
                                ${M.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),O.setAttribute("data-svg","true"))}let H=M.el.querySelector(".beae-image-content-position"),I,A=window.innerWidth>=768&&M.autoHover;var L=H.querySelector(".beae-img-ratio-control"),V=H.querySelector(".beae-img-comp-container"),T=H.querySelector(".beae-img-comp-container--second");if(L&&T){let O=function(z){let D=0,q;R(),A?H.onmouseover=function(W){Z(W)}:z.onmousedown=function(W){Z(W)},H.onmouseup=function(){U()},z.ontouchstart=function(W){Z(W)},H.ontouchend=function(){U()};function R(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),z.style.left&&parseInt(z.style.left)}function Z(W){check=!1,W.preventDefault(),W.clientX?W.clientX:W.touches[0].clientX,parseInt(z.style.left),D=1,H.onmousemove=function(X){j(X)},H.ontouchmove=function(X){j(X)}}function U(){D=0,check=!0}function j(W){if(D==0)return!1;q=G(W),q<0&&(q=0),q>100&&(q=100),F(q)}function G(W){const X=H.getBoundingClientRect(),ae=(W.changedTouches?W.changedTouches[0].clientX:W.clientX)-X.left;return Math.max(0,Math.min(100,Math.round(ae*100/I)))}function F(W){z.style.left=W+"%",T.style.clipPath=`polygon(${W}% 0%, ${W}% 100%, 100% 100%, 100% 0)`,V.style.clipPath=`polygon(0% 100%, 0% 0%, ${W}% 0%, ${W}% 100%)`}};L&&T&&O(L),window.addEventListener("resize",function(){L&&T&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),O(L))})}}let N=(P=M.el)==null?void 0:P.querySelector("a.beae-x-image"),E=N==null?void 0:N.getAttribute("href");N&&M.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&N.addEventListener("click",H=>{let I=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(I)return I.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),H.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-6xhaufyq: ', ex)
      };
    

      try {
        let argid = 'beae-lza8xvb8block-textloop-1',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-lza8xvb8',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-lza8xvb8');
        args.el = args.els[1];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-lza8xvb8: ', ex)
      };
    

      try {
        let argid = 'beae-6xhaufyqblock-imageloop-2',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-6xhaufyq',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-6xhaufyq');
        args.el = args.els[2];
        ((M) => { var P;if(M.el){if(M.shape){const O=M.el.closest(".beae-slider-items");O&&!O.hasAttribute("data-svg")&&(O==null||O.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${M.id}" clipPathUnits="objectBoundingBox">
                                ${M.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),O.setAttribute("data-svg","true"))}let H=M.el.querySelector(".beae-image-content-position"),I,A=window.innerWidth>=768&&M.autoHover;var L=H.querySelector(".beae-img-ratio-control"),V=H.querySelector(".beae-img-comp-container"),T=H.querySelector(".beae-img-comp-container--second");if(L&&T){let O=function(z){let D=0,q;R(),A?H.onmouseover=function(W){Z(W)}:z.onmousedown=function(W){Z(W)},H.onmouseup=function(){U()},z.ontouchstart=function(W){Z(W)},H.ontouchend=function(){U()};function R(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),z.style.left&&parseInt(z.style.left)}function Z(W){check=!1,W.preventDefault(),W.clientX?W.clientX:W.touches[0].clientX,parseInt(z.style.left),D=1,H.onmousemove=function(X){j(X)},H.ontouchmove=function(X){j(X)}}function U(){D=0,check=!0}function j(W){if(D==0)return!1;q=G(W),q<0&&(q=0),q>100&&(q=100),F(q)}function G(W){const X=H.getBoundingClientRect(),ae=(W.changedTouches?W.changedTouches[0].clientX:W.clientX)-X.left;return Math.max(0,Math.min(100,Math.round(ae*100/I)))}function F(W){z.style.left=W+"%",T.style.clipPath=`polygon(${W}% 0%, ${W}% 100%, 100% 100%, 100% 0)`,V.style.clipPath=`polygon(0% 100%, 0% 0%, ${W}% 0%, ${W}% 100%)`}};L&&T&&O(L),window.addEventListener("resize",function(){L&&T&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),O(L))})}}let N=(P=M.el)==null?void 0:P.querySelector("a.beae-x-image"),E=N==null?void 0:N.getAttribute("href");N&&M.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&N.addEventListener("click",H=>{let I=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(I)return I.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),H.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-6xhaufyq: ', ex)
      };
    

      try {
        let argid = 'beae-lza8xvb8block-textloop-2',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-lza8xvb8',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-lza8xvb8');
        args.el = args.els[2];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-lza8xvb8: ', ex)
      };
    

      try {
        let argid = 'beae-6xhaufyqblock-imageloop-3',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-6xhaufyq',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-6xhaufyq');
        args.el = args.els[3];
        ((M) => { var P;if(M.el){if(M.shape){const O=M.el.closest(".beae-slider-items");O&&!O.hasAttribute("data-svg")&&(O==null||O.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${M.id}" clipPathUnits="objectBoundingBox">
                                ${M.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),O.setAttribute("data-svg","true"))}let H=M.el.querySelector(".beae-image-content-position"),I,A=window.innerWidth>=768&&M.autoHover;var L=H.querySelector(".beae-img-ratio-control"),V=H.querySelector(".beae-img-comp-container"),T=H.querySelector(".beae-img-comp-container--second");if(L&&T){let O=function(z){let D=0,q;R(),A?H.onmouseover=function(W){Z(W)}:z.onmousedown=function(W){Z(W)},H.onmouseup=function(){U()},z.ontouchstart=function(W){Z(W)},H.ontouchend=function(){U()};function R(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),z.style.left&&parseInt(z.style.left)}function Z(W){check=!1,W.preventDefault(),W.clientX?W.clientX:W.touches[0].clientX,parseInt(z.style.left),D=1,H.onmousemove=function(X){j(X)},H.ontouchmove=function(X){j(X)}}function U(){D=0,check=!0}function j(W){if(D==0)return!1;q=G(W),q<0&&(q=0),q>100&&(q=100),F(q)}function G(W){const X=H.getBoundingClientRect(),ae=(W.changedTouches?W.changedTouches[0].clientX:W.clientX)-X.left;return Math.max(0,Math.min(100,Math.round(ae*100/I)))}function F(W){z.style.left=W+"%",T.style.clipPath=`polygon(${W}% 0%, ${W}% 100%, 100% 100%, 100% 0)`,V.style.clipPath=`polygon(0% 100%, 0% 0%, ${W}% 0%, ${W}% 100%)`}};L&&T&&O(L),window.addEventListener("resize",function(){L&&T&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),O(L))})}}let N=(P=M.el)==null?void 0:P.querySelector("a.beae-x-image"),E=N==null?void 0:N.getAttribute("href");N&&M.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&N.addEventListener("click",H=>{let I=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(I)return I.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),H.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-6xhaufyq: ', ex)
      };
    

      try {
        let argid = 'beae-lza8xvb8block-textloop-3',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-lza8xvb8',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-lza8xvb8');
        args.el = args.els[3];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-lza8xvb8: ', ex)
      };
    

      try {
        let argid = 'beae-6xhaufyqblock-imageloop-4',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-6xhaufyq',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-6xhaufyq');
        args.el = args.els[4];
        ((M) => { var P;if(M.el){if(M.shape){const O=M.el.closest(".beae-slider-items");O&&!O.hasAttribute("data-svg")&&(O==null||O.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${M.id}" clipPathUnits="objectBoundingBox">
                                ${M.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),O.setAttribute("data-svg","true"))}let H=M.el.querySelector(".beae-image-content-position"),I,A=window.innerWidth>=768&&M.autoHover;var L=H.querySelector(".beae-img-ratio-control"),V=H.querySelector(".beae-img-comp-container"),T=H.querySelector(".beae-img-comp-container--second");if(L&&T){let O=function(z){let D=0,q;R(),A?H.onmouseover=function(W){Z(W)}:z.onmousedown=function(W){Z(W)},H.onmouseup=function(){U()},z.ontouchstart=function(W){Z(W)},H.ontouchend=function(){U()};function R(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),z.style.left&&parseInt(z.style.left)}function Z(W){check=!1,W.preventDefault(),W.clientX?W.clientX:W.touches[0].clientX,parseInt(z.style.left),D=1,H.onmousemove=function(X){j(X)},H.ontouchmove=function(X){j(X)}}function U(){D=0,check=!0}function j(W){if(D==0)return!1;q=G(W),q<0&&(q=0),q>100&&(q=100),F(q)}function G(W){const X=H.getBoundingClientRect(),ae=(W.changedTouches?W.changedTouches[0].clientX:W.clientX)-X.left;return Math.max(0,Math.min(100,Math.round(ae*100/I)))}function F(W){z.style.left=W+"%",T.style.clipPath=`polygon(${W}% 0%, ${W}% 100%, 100% 100%, 100% 0)`,V.style.clipPath=`polygon(0% 100%, 0% 0%, ${W}% 0%, ${W}% 100%)`}};L&&T&&O(L),window.addEventListener("resize",function(){L&&T&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),O(L))})}}let N=(P=M.el)==null?void 0:P.querySelector("a.beae-x-image"),E=N==null?void 0:N.getAttribute("href");N&&M.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&N.addEventListener("click",H=>{let I=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(I)return I.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),H.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-6xhaufyq: ', ex)
      };
    

      try {
        let argid = 'beae-lza8xvb8block-textloop-4',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-lza8xvb8',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-lza8xvb8');
        args.el = args.els[4];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-lza8xvb8: ', ex)
      };
    

      try {
        let argid = 'beae-i02rltmyblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-i02rltmy',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-i02rltmy');
        args.el = args.els[0];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-i02rltmy: ', ex)
      };
    

      try {
        let argid = 'beae-b09ea7b1section-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-b09ea7b1',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-b09ea7b1');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-b09ea7b1: ', ex)
      };
    

      try {
        let argid = 'beae-kzd1q5q5button-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-kzd1q5q5',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-kzd1q5q5');
        args.el = args.els[0];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{var n,t;let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(o){extOptions={},console.error(o)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let o=document.querySelector(selector+","+selector.replace("#","."));if(o)return o.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let s=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(s,{id:data.id,...extOptions}),e.preventDefault();return}const o=window.createLoading(e.currentTarget);let r=(t=(n=window.BEAE_HELPER)==null?void 0:n.routes)==null?void 0:t.root_url;return window.BeaePopupLibrary.lightbox({id:data.id,url:(r!=="/"?r:"")+((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(s=>{s.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(s),o.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let o=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(o=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(o,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-kzd1q5q5: ', ex)
      };
    

      try {
        let argid = 'beae-gy2s3fi4section-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-gy2s3fi4',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-gy2s3fi4');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-gy2s3fi4: ', ex)
      };
    

      try {
        let argid = 'beae-19ioprhiblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-19ioprhi',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-19ioprhi');
        args.el = args.els[0];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-19ioprhi: ', ex)
      };
    

      try {
        let argid = 'beae-wk4cuabtblock-image',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-wk4cuabt',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-wk4cuabt');
        args.el = args.els[0];
        ((M) => { var P;if(M.el){if(M.shape){const O=M.el.closest(".beae-slider-items");O&&!O.hasAttribute("data-svg")&&(O==null||O.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${M.id}" clipPathUnits="objectBoundingBox">
                                ${M.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),O.setAttribute("data-svg","true"))}let H=M.el.querySelector(".beae-image-content-position"),I,A=window.innerWidth>=768&&M.autoHover;var L=H.querySelector(".beae-img-ratio-control"),V=H.querySelector(".beae-img-comp-container"),T=H.querySelector(".beae-img-comp-container--second");if(L&&T){let O=function(z){let D=0,q;R(),A?H.onmouseover=function(W){Z(W)}:z.onmousedown=function(W){Z(W)},H.onmouseup=function(){U()},z.ontouchstart=function(W){Z(W)},H.ontouchend=function(){U()};function R(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),z.style.left&&parseInt(z.style.left)}function Z(W){check=!1,W.preventDefault(),W.clientX?W.clientX:W.touches[0].clientX,parseInt(z.style.left),D=1,H.onmousemove=function(X){j(X)},H.ontouchmove=function(X){j(X)}}function U(){D=0,check=!0}function j(W){if(D==0)return!1;q=G(W),q<0&&(q=0),q>100&&(q=100),F(q)}function G(W){const X=H.getBoundingClientRect(),ae=(W.changedTouches?W.changedTouches[0].clientX:W.clientX)-X.left;return Math.max(0,Math.min(100,Math.round(ae*100/I)))}function F(W){z.style.left=W+"%",T.style.clipPath=`polygon(${W}% 0%, ${W}% 100%, 100% 100%, 100% 0)`,V.style.clipPath=`polygon(0% 100%, 0% 0%, ${W}% 0%, ${W}% 100%)`}};L&&T&&O(L),window.addEventListener("resize",function(){L&&T&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),O(L))})}}let N=(P=M.el)==null?void 0:P.querySelector("a.beae-x-image"),E=N==null?void 0:N.getAttribute("href");N&&M.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&N.addEventListener("click",H=>{let I=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(I)return I.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),H.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-wk4cuabt: ', ex)
      };
    

      try {
        let argid = 'beae-9fuzpvrxblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-9fuzpvrx',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-9fuzpvrx');
        args.el = args.els[0];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-9fuzpvrx: ', ex)
      };
    

      try {
        let argid = 'beae-fhg0f2gfsection-slide-show',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-fhg0f2gf',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-fhg0f2gf');
        args.el = args.els[0];
        ((h) => { window.BeaeSlider&&!h.noRunJs&&window.BeaeSlider(h) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-fhg0f2gf: ', ex)
      };
    

      try {
        let argid = 'beae-3ak8n9jcblock-imageloop-0',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-3ak8n9jc',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-3ak8n9jc');
        args.el = args.els[0];
        ((M) => { var P;if(M.el){if(M.shape){const O=M.el.closest(".beae-slider-items");O&&!O.hasAttribute("data-svg")&&(O==null||O.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${M.id}" clipPathUnits="objectBoundingBox">
                                ${M.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),O.setAttribute("data-svg","true"))}let H=M.el.querySelector(".beae-image-content-position"),I,A=window.innerWidth>=768&&M.autoHover;var L=H.querySelector(".beae-img-ratio-control"),V=H.querySelector(".beae-img-comp-container"),T=H.querySelector(".beae-img-comp-container--second");if(L&&T){let O=function(z){let D=0,q;R(),A?H.onmouseover=function(W){Z(W)}:z.onmousedown=function(W){Z(W)},H.onmouseup=function(){U()},z.ontouchstart=function(W){Z(W)},H.ontouchend=function(){U()};function R(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),z.style.left&&parseInt(z.style.left)}function Z(W){check=!1,W.preventDefault(),W.clientX?W.clientX:W.touches[0].clientX,parseInt(z.style.left),D=1,H.onmousemove=function(X){j(X)},H.ontouchmove=function(X){j(X)}}function U(){D=0,check=!0}function j(W){if(D==0)return!1;q=G(W),q<0&&(q=0),q>100&&(q=100),F(q)}function G(W){const X=H.getBoundingClientRect(),ae=(W.changedTouches?W.changedTouches[0].clientX:W.clientX)-X.left;return Math.max(0,Math.min(100,Math.round(ae*100/I)))}function F(W){z.style.left=W+"%",T.style.clipPath=`polygon(${W}% 0%, ${W}% 100%, 100% 100%, 100% 0)`,V.style.clipPath=`polygon(0% 100%, 0% 0%, ${W}% 0%, ${W}% 100%)`}};L&&T&&O(L),window.addEventListener("resize",function(){L&&T&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),O(L))})}}let N=(P=M.el)==null?void 0:P.querySelector("a.beae-x-image"),E=N==null?void 0:N.getAttribute("href");N&&M.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&N.addEventListener("click",H=>{let I=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(I)return I.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),H.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-3ak8n9jc: ', ex)
      };
    

      try {
        let argid = 'beae-78b7l2crblock-textloop-0',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-78b7l2cr',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-78b7l2cr');
        args.el = args.els[0];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-78b7l2cr: ', ex)
      };
    

      try {
        let argid = 'beae-3ak8n9jcblock-imageloop-1',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-3ak8n9jc',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-3ak8n9jc');
        args.el = args.els[1];
        ((M) => { var P;if(M.el){if(M.shape){const O=M.el.closest(".beae-slider-items");O&&!O.hasAttribute("data-svg")&&(O==null||O.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${M.id}" clipPathUnits="objectBoundingBox">
                                ${M.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),O.setAttribute("data-svg","true"))}let H=M.el.querySelector(".beae-image-content-position"),I,A=window.innerWidth>=768&&M.autoHover;var L=H.querySelector(".beae-img-ratio-control"),V=H.querySelector(".beae-img-comp-container"),T=H.querySelector(".beae-img-comp-container--second");if(L&&T){let O=function(z){let D=0,q;R(),A?H.onmouseover=function(W){Z(W)}:z.onmousedown=function(W){Z(W)},H.onmouseup=function(){U()},z.ontouchstart=function(W){Z(W)},H.ontouchend=function(){U()};function R(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),z.style.left&&parseInt(z.style.left)}function Z(W){check=!1,W.preventDefault(),W.clientX?W.clientX:W.touches[0].clientX,parseInt(z.style.left),D=1,H.onmousemove=function(X){j(X)},H.ontouchmove=function(X){j(X)}}function U(){D=0,check=!0}function j(W){if(D==0)return!1;q=G(W),q<0&&(q=0),q>100&&(q=100),F(q)}function G(W){const X=H.getBoundingClientRect(),ae=(W.changedTouches?W.changedTouches[0].clientX:W.clientX)-X.left;return Math.max(0,Math.min(100,Math.round(ae*100/I)))}function F(W){z.style.left=W+"%",T.style.clipPath=`polygon(${W}% 0%, ${W}% 100%, 100% 100%, 100% 0)`,V.style.clipPath=`polygon(0% 100%, 0% 0%, ${W}% 0%, ${W}% 100%)`}};L&&T&&O(L),window.addEventListener("resize",function(){L&&T&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),O(L))})}}let N=(P=M.el)==null?void 0:P.querySelector("a.beae-x-image"),E=N==null?void 0:N.getAttribute("href");N&&M.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&N.addEventListener("click",H=>{let I=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(I)return I.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),H.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-3ak8n9jc: ', ex)
      };
    

      try {
        let argid = 'beae-78b7l2crblock-textloop-1',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-78b7l2cr',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-78b7l2cr');
        args.el = args.els[1];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-78b7l2cr: ', ex)
      };
    

      try {
        let argid = 'beae-3ak8n9jcblock-imageloop-2',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-3ak8n9jc',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-3ak8n9jc');
        args.el = args.els[2];
        ((M) => { var P;if(M.el){if(M.shape){const O=M.el.closest(".beae-slider-items");O&&!O.hasAttribute("data-svg")&&(O==null||O.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${M.id}" clipPathUnits="objectBoundingBox">
                                ${M.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),O.setAttribute("data-svg","true"))}let H=M.el.querySelector(".beae-image-content-position"),I,A=window.innerWidth>=768&&M.autoHover;var L=H.querySelector(".beae-img-ratio-control"),V=H.querySelector(".beae-img-comp-container"),T=H.querySelector(".beae-img-comp-container--second");if(L&&T){let O=function(z){let D=0,q;R(),A?H.onmouseover=function(W){Z(W)}:z.onmousedown=function(W){Z(W)},H.onmouseup=function(){U()},z.ontouchstart=function(W){Z(W)},H.ontouchend=function(){U()};function R(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),z.style.left&&parseInt(z.style.left)}function Z(W){check=!1,W.preventDefault(),W.clientX?W.clientX:W.touches[0].clientX,parseInt(z.style.left),D=1,H.onmousemove=function(X){j(X)},H.ontouchmove=function(X){j(X)}}function U(){D=0,check=!0}function j(W){if(D==0)return!1;q=G(W),q<0&&(q=0),q>100&&(q=100),F(q)}function G(W){const X=H.getBoundingClientRect(),ae=(W.changedTouches?W.changedTouches[0].clientX:W.clientX)-X.left;return Math.max(0,Math.min(100,Math.round(ae*100/I)))}function F(W){z.style.left=W+"%",T.style.clipPath=`polygon(${W}% 0%, ${W}% 100%, 100% 100%, 100% 0)`,V.style.clipPath=`polygon(0% 100%, 0% 0%, ${W}% 0%, ${W}% 100%)`}};L&&T&&O(L),window.addEventListener("resize",function(){L&&T&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),O(L))})}}let N=(P=M.el)==null?void 0:P.querySelector("a.beae-x-image"),E=N==null?void 0:N.getAttribute("href");N&&M.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&N.addEventListener("click",H=>{let I=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(I)return I.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),H.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-3ak8n9jc: ', ex)
      };
    

      try {
        let argid = 'beae-78b7l2crblock-textloop-2',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-78b7l2cr',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-78b7l2cr');
        args.el = args.els[2];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-78b7l2cr: ', ex)
      };
    

      try {
        let argid = 'beae-3ak8n9jcblock-imageloop-3',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-3ak8n9jc',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-3ak8n9jc');
        args.el = args.els[3];
        ((M) => { var P;if(M.el){if(M.shape){const O=M.el.closest(".beae-slider-items");O&&!O.hasAttribute("data-svg")&&(O==null||O.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${M.id}" clipPathUnits="objectBoundingBox">
                                ${M.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),O.setAttribute("data-svg","true"))}let H=M.el.querySelector(".beae-image-content-position"),I,A=window.innerWidth>=768&&M.autoHover;var L=H.querySelector(".beae-img-ratio-control"),V=H.querySelector(".beae-img-comp-container"),T=H.querySelector(".beae-img-comp-container--second");if(L&&T){let O=function(z){let D=0,q;R(),A?H.onmouseover=function(W){Z(W)}:z.onmousedown=function(W){Z(W)},H.onmouseup=function(){U()},z.ontouchstart=function(W){Z(W)},H.ontouchend=function(){U()};function R(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),z.style.left&&parseInt(z.style.left)}function Z(W){check=!1,W.preventDefault(),W.clientX?W.clientX:W.touches[0].clientX,parseInt(z.style.left),D=1,H.onmousemove=function(X){j(X)},H.ontouchmove=function(X){j(X)}}function U(){D=0,check=!0}function j(W){if(D==0)return!1;q=G(W),q<0&&(q=0),q>100&&(q=100),F(q)}function G(W){const X=H.getBoundingClientRect(),ae=(W.changedTouches?W.changedTouches[0].clientX:W.clientX)-X.left;return Math.max(0,Math.min(100,Math.round(ae*100/I)))}function F(W){z.style.left=W+"%",T.style.clipPath=`polygon(${W}% 0%, ${W}% 100%, 100% 100%, 100% 0)`,V.style.clipPath=`polygon(0% 100%, 0% 0%, ${W}% 0%, ${W}% 100%)`}};L&&T&&O(L),window.addEventListener("resize",function(){L&&T&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),O(L))})}}let N=(P=M.el)==null?void 0:P.querySelector("a.beae-x-image"),E=N==null?void 0:N.getAttribute("href");N&&M.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&N.addEventListener("click",H=>{let I=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(I)return I.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),H.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-3ak8n9jc: ', ex)
      };
    

      try {
        let argid = 'beae-78b7l2crblock-textloop-3',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-78b7l2cr',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-78b7l2cr');
        args.el = args.els[3];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-78b7l2cr: ', ex)
      };
    

      try {
        let argid = 'beae-3ak8n9jcblock-imageloop-4',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-3ak8n9jc',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-3ak8n9jc');
        args.el = args.els[4];
        ((M) => { var P;if(M.el){if(M.shape){const O=M.el.closest(".beae-slider-items");O&&!O.hasAttribute("data-svg")&&(O==null||O.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${M.id}" clipPathUnits="objectBoundingBox">
                                ${M.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),O.setAttribute("data-svg","true"))}let H=M.el.querySelector(".beae-image-content-position"),I,A=window.innerWidth>=768&&M.autoHover;var L=H.querySelector(".beae-img-ratio-control"),V=H.querySelector(".beae-img-comp-container"),T=H.querySelector(".beae-img-comp-container--second");if(L&&T){let O=function(z){let D=0,q;R(),A?H.onmouseover=function(W){Z(W)}:z.onmousedown=function(W){Z(W)},H.onmouseup=function(){U()},z.ontouchstart=function(W){Z(W)},H.ontouchend=function(){U()};function R(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),z.style.left&&parseInt(z.style.left)}function Z(W){check=!1,W.preventDefault(),W.clientX?W.clientX:W.touches[0].clientX,parseInt(z.style.left),D=1,H.onmousemove=function(X){j(X)},H.ontouchmove=function(X){j(X)}}function U(){D=0,check=!0}function j(W){if(D==0)return!1;q=G(W),q<0&&(q=0),q>100&&(q=100),F(q)}function G(W){const X=H.getBoundingClientRect(),ae=(W.changedTouches?W.changedTouches[0].clientX:W.clientX)-X.left;return Math.max(0,Math.min(100,Math.round(ae*100/I)))}function F(W){z.style.left=W+"%",T.style.clipPath=`polygon(${W}% 0%, ${W}% 100%, 100% 100%, 100% 0)`,V.style.clipPath=`polygon(0% 100%, 0% 0%, ${W}% 0%, ${W}% 100%)`}};L&&T&&O(L),window.addEventListener("resize",function(){L&&T&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),O(L))})}}let N=(P=M.el)==null?void 0:P.querySelector("a.beae-x-image"),E=N==null?void 0:N.getAttribute("href");N&&M.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&N.addEventListener("click",H=>{let I=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(I)return I.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),H.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-3ak8n9jc: ', ex)
      };
    

      try {
        let argid = 'beae-78b7l2crblock-textloop-4',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-78b7l2cr',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-78b7l2cr');
        args.el = args.els[4];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-78b7l2cr: ', ex)
      };
    

      try {
        let argid = 'beae-3ak8n9jcblock-imageloop-5',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-3ak8n9jc',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-3ak8n9jc');
        args.el = args.els[5];
        ((M) => { var P;if(M.el){if(M.shape){const O=M.el.closest(".beae-slider-items");O&&!O.hasAttribute("data-svg")&&(O==null||O.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${M.id}" clipPathUnits="objectBoundingBox">
                                ${M.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),O.setAttribute("data-svg","true"))}let H=M.el.querySelector(".beae-image-content-position"),I,A=window.innerWidth>=768&&M.autoHover;var L=H.querySelector(".beae-img-ratio-control"),V=H.querySelector(".beae-img-comp-container"),T=H.querySelector(".beae-img-comp-container--second");if(L&&T){let O=function(z){let D=0,q;R(),A?H.onmouseover=function(W){Z(W)}:z.onmousedown=function(W){Z(W)},H.onmouseup=function(){U()},z.ontouchstart=function(W){Z(W)},H.ontouchend=function(){U()};function R(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),z.style.left&&parseInt(z.style.left)}function Z(W){check=!1,W.preventDefault(),W.clientX?W.clientX:W.touches[0].clientX,parseInt(z.style.left),D=1,H.onmousemove=function(X){j(X)},H.ontouchmove=function(X){j(X)}}function U(){D=0,check=!0}function j(W){if(D==0)return!1;q=G(W),q<0&&(q=0),q>100&&(q=100),F(q)}function G(W){const X=H.getBoundingClientRect(),ae=(W.changedTouches?W.changedTouches[0].clientX:W.clientX)-X.left;return Math.max(0,Math.min(100,Math.round(ae*100/I)))}function F(W){z.style.left=W+"%",T.style.clipPath=`polygon(${W}% 0%, ${W}% 100%, 100% 100%, 100% 0)`,V.style.clipPath=`polygon(0% 100%, 0% 0%, ${W}% 0%, ${W}% 100%)`}};L&&T&&O(L),window.addEventListener("resize",function(){L&&T&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),O(L))})}}let N=(P=M.el)==null?void 0:P.querySelector("a.beae-x-image"),E=N==null?void 0:N.getAttribute("href");N&&M.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&N.addEventListener("click",H=>{let I=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(I)return I.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),H.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-3ak8n9jc: ', ex)
      };
    

      try {
        let argid = 'beae-78b7l2crblock-textloop-5',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-78b7l2cr',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-78b7l2cr');
        args.el = args.els[5];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-78b7l2cr: ', ex)
      };
    

      try {
        let argid = 'beae-cnl5l9sbblock-image',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-cnl5l9sb',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-cnl5l9sb');
        args.el = args.els[0];
        ((M) => { var P;if(M.el){if(M.shape){const O=M.el.closest(".beae-slider-items");O&&!O.hasAttribute("data-svg")&&(O==null||O.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${M.id}" clipPathUnits="objectBoundingBox">
                                ${M.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),O.setAttribute("data-svg","true"))}let H=M.el.querySelector(".beae-image-content-position"),I,A=window.innerWidth>=768&&M.autoHover;var L=H.querySelector(".beae-img-ratio-control"),V=H.querySelector(".beae-img-comp-container"),T=H.querySelector(".beae-img-comp-container--second");if(L&&T){let O=function(z){let D=0,q;R(),A?H.onmouseover=function(W){Z(W)}:z.onmousedown=function(W){Z(W)},H.onmouseup=function(){U()},z.ontouchstart=function(W){Z(W)},H.ontouchend=function(){U()};function R(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),z.style.left&&parseInt(z.style.left)}function Z(W){check=!1,W.preventDefault(),W.clientX?W.clientX:W.touches[0].clientX,parseInt(z.style.left),D=1,H.onmousemove=function(X){j(X)},H.ontouchmove=function(X){j(X)}}function U(){D=0,check=!0}function j(W){if(D==0)return!1;q=G(W),q<0&&(q=0),q>100&&(q=100),F(q)}function G(W){const X=H.getBoundingClientRect(),ae=(W.changedTouches?W.changedTouches[0].clientX:W.clientX)-X.left;return Math.max(0,Math.min(100,Math.round(ae*100/I)))}function F(W){z.style.left=W+"%",T.style.clipPath=`polygon(${W}% 0%, ${W}% 100%, 100% 100%, 100% 0)`,V.style.clipPath=`polygon(0% 100%, 0% 0%, ${W}% 0%, ${W}% 100%)`}};L&&T&&O(L),window.addEventListener("resize",function(){L&&T&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),O(L))})}}let N=(P=M.el)==null?void 0:P.querySelector("a.beae-x-image"),E=N==null?void 0:N.getAttribute("href");N&&M.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&N.addEventListener("click",H=>{let I=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(I)return I.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),H.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-cnl5l9sb: ', ex)
      };
    

      try {
        let argid = 'beae-p88t66poblock-image',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-p88t66po',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-p88t66po');
        args.el = args.els[0];
        ((M) => { var P;if(M.el){if(M.shape){const O=M.el.closest(".beae-slider-items");O&&!O.hasAttribute("data-svg")&&(O==null||O.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${M.id}" clipPathUnits="objectBoundingBox">
                                ${M.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),O.setAttribute("data-svg","true"))}let H=M.el.querySelector(".beae-image-content-position"),I,A=window.innerWidth>=768&&M.autoHover;var L=H.querySelector(".beae-img-ratio-control"),V=H.querySelector(".beae-img-comp-container"),T=H.querySelector(".beae-img-comp-container--second");if(L&&T){let O=function(z){let D=0,q;R(),A?H.onmouseover=function(W){Z(W)}:z.onmousedown=function(W){Z(W)},H.onmouseup=function(){U()},z.ontouchstart=function(W){Z(W)},H.ontouchend=function(){U()};function R(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),z.style.left&&parseInt(z.style.left)}function Z(W){check=!1,W.preventDefault(),W.clientX?W.clientX:W.touches[0].clientX,parseInt(z.style.left),D=1,H.onmousemove=function(X){j(X)},H.ontouchmove=function(X){j(X)}}function U(){D=0,check=!0}function j(W){if(D==0)return!1;q=G(W),q<0&&(q=0),q>100&&(q=100),F(q)}function G(W){const X=H.getBoundingClientRect(),ae=(W.changedTouches?W.changedTouches[0].clientX:W.clientX)-X.left;return Math.max(0,Math.min(100,Math.round(ae*100/I)))}function F(W){z.style.left=W+"%",T.style.clipPath=`polygon(${W}% 0%, ${W}% 100%, 100% 100%, 100% 0)`,V.style.clipPath=`polygon(0% 100%, 0% 0%, ${W}% 0%, ${W}% 100%)`}};L&&T&&O(L),window.addEventListener("resize",function(){L&&T&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),O(L))})}}let N=(P=M.el)==null?void 0:P.querySelector("a.beae-x-image"),E=N==null?void 0:N.getAttribute("href");N&&M.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&N.addEventListener("click",H=>{let I=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(I)return I.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),H.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-p88t66po: ', ex)
      };
    

      try {
        let argid = 'beae-3dkidgewblock-image',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-3dkidgew',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-3dkidgew');
        args.el = args.els[0];
        ((M) => { var P;if(M.el){if(M.shape){const O=M.el.closest(".beae-slider-items");O&&!O.hasAttribute("data-svg")&&(O==null||O.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${M.id}" clipPathUnits="objectBoundingBox">
                                ${M.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),O.setAttribute("data-svg","true"))}let H=M.el.querySelector(".beae-image-content-position"),I,A=window.innerWidth>=768&&M.autoHover;var L=H.querySelector(".beae-img-ratio-control"),V=H.querySelector(".beae-img-comp-container"),T=H.querySelector(".beae-img-comp-container--second");if(L&&T){let O=function(z){let D=0,q;R(),A?H.onmouseover=function(W){Z(W)}:z.onmousedown=function(W){Z(W)},H.onmouseup=function(){U()},z.ontouchstart=function(W){Z(W)},H.ontouchend=function(){U()};function R(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),z.style.left&&parseInt(z.style.left)}function Z(W){check=!1,W.preventDefault(),W.clientX?W.clientX:W.touches[0].clientX,parseInt(z.style.left),D=1,H.onmousemove=function(X){j(X)},H.ontouchmove=function(X){j(X)}}function U(){D=0,check=!0}function j(W){if(D==0)return!1;q=G(W),q<0&&(q=0),q>100&&(q=100),F(q)}function G(W){const X=H.getBoundingClientRect(),ae=(W.changedTouches?W.changedTouches[0].clientX:W.clientX)-X.left;return Math.max(0,Math.min(100,Math.round(ae*100/I)))}function F(W){z.style.left=W+"%",T.style.clipPath=`polygon(${W}% 0%, ${W}% 100%, 100% 100%, 100% 0)`,V.style.clipPath=`polygon(0% 100%, 0% 0%, ${W}% 0%, ${W}% 100%)`}};L&&T&&O(L),window.addEventListener("resize",function(){L&&T&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),O(L))})}}let N=(P=M.el)==null?void 0:P.querySelector("a.beae-x-image"),E=N==null?void 0:N.getAttribute("href");N&&M.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&N.addEventListener("click",H=>{let I=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(I)return I.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),H.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-3dkidgew: ', ex)
      };
    

      try {
        let argid = 'beae-vfyixce5block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-vfyixce5',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-vfyixce5');
        args.el = args.els[0];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-vfyixce5: ', ex)
      };
    

      try {
        let argid = 'beae-ykotc2m8section-slide-show',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-ykotc2m8',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-ykotc2m8');
        args.el = args.els[0];
        ((h) => { window.BeaeSlider&&!h.noRunJs&&window.BeaeSlider(h) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-ykotc2m8: ', ex)
      };
    

      try {
        let argid = 'beae-kbz2td8eblock-imageloop-0',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-kbz2td8e',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-kbz2td8e');
        args.el = args.els[0];
        ((M) => { var P;if(M.el){if(M.shape){const O=M.el.closest(".beae-slider-items");O&&!O.hasAttribute("data-svg")&&(O==null||O.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${M.id}" clipPathUnits="objectBoundingBox">
                                ${M.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),O.setAttribute("data-svg","true"))}let H=M.el.querySelector(".beae-image-content-position"),I,A=window.innerWidth>=768&&M.autoHover;var L=H.querySelector(".beae-img-ratio-control"),V=H.querySelector(".beae-img-comp-container"),T=H.querySelector(".beae-img-comp-container--second");if(L&&T){let O=function(z){let D=0,q;R(),A?H.onmouseover=function(W){Z(W)}:z.onmousedown=function(W){Z(W)},H.onmouseup=function(){U()},z.ontouchstart=function(W){Z(W)},H.ontouchend=function(){U()};function R(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),z.style.left&&parseInt(z.style.left)}function Z(W){check=!1,W.preventDefault(),W.clientX?W.clientX:W.touches[0].clientX,parseInt(z.style.left),D=1,H.onmousemove=function(X){j(X)},H.ontouchmove=function(X){j(X)}}function U(){D=0,check=!0}function j(W){if(D==0)return!1;q=G(W),q<0&&(q=0),q>100&&(q=100),F(q)}function G(W){const X=H.getBoundingClientRect(),ae=(W.changedTouches?W.changedTouches[0].clientX:W.clientX)-X.left;return Math.max(0,Math.min(100,Math.round(ae*100/I)))}function F(W){z.style.left=W+"%",T.style.clipPath=`polygon(${W}% 0%, ${W}% 100%, 100% 100%, 100% 0)`,V.style.clipPath=`polygon(0% 100%, 0% 0%, ${W}% 0%, ${W}% 100%)`}};L&&T&&O(L),window.addEventListener("resize",function(){L&&T&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),O(L))})}}let N=(P=M.el)==null?void 0:P.querySelector("a.beae-x-image"),E=N==null?void 0:N.getAttribute("href");N&&M.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&N.addEventListener("click",H=>{let I=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(I)return I.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),H.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-kbz2td8e: ', ex)
      };
    

      try {
        let argid = 'beae-vejcg8zublock-textloop-0',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-vejcg8zu',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-vejcg8zu');
        args.el = args.els[0];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-vejcg8zu: ', ex)
      };
    

      try {
        let argid = 'beae-kbz2td8eblock-imageloop-1',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-kbz2td8e',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-kbz2td8e');
        args.el = args.els[1];
        ((M) => { var P;if(M.el){if(M.shape){const O=M.el.closest(".beae-slider-items");O&&!O.hasAttribute("data-svg")&&(O==null||O.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${M.id}" clipPathUnits="objectBoundingBox">
                                ${M.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),O.setAttribute("data-svg","true"))}let H=M.el.querySelector(".beae-image-content-position"),I,A=window.innerWidth>=768&&M.autoHover;var L=H.querySelector(".beae-img-ratio-control"),V=H.querySelector(".beae-img-comp-container"),T=H.querySelector(".beae-img-comp-container--second");if(L&&T){let O=function(z){let D=0,q;R(),A?H.onmouseover=function(W){Z(W)}:z.onmousedown=function(W){Z(W)},H.onmouseup=function(){U()},z.ontouchstart=function(W){Z(W)},H.ontouchend=function(){U()};function R(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),z.style.left&&parseInt(z.style.left)}function Z(W){check=!1,W.preventDefault(),W.clientX?W.clientX:W.touches[0].clientX,parseInt(z.style.left),D=1,H.onmousemove=function(X){j(X)},H.ontouchmove=function(X){j(X)}}function U(){D=0,check=!0}function j(W){if(D==0)return!1;q=G(W),q<0&&(q=0),q>100&&(q=100),F(q)}function G(W){const X=H.getBoundingClientRect(),ae=(W.changedTouches?W.changedTouches[0].clientX:W.clientX)-X.left;return Math.max(0,Math.min(100,Math.round(ae*100/I)))}function F(W){z.style.left=W+"%",T.style.clipPath=`polygon(${W}% 0%, ${W}% 100%, 100% 100%, 100% 0)`,V.style.clipPath=`polygon(0% 100%, 0% 0%, ${W}% 0%, ${W}% 100%)`}};L&&T&&O(L),window.addEventListener("resize",function(){L&&T&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),O(L))})}}let N=(P=M.el)==null?void 0:P.querySelector("a.beae-x-image"),E=N==null?void 0:N.getAttribute("href");N&&M.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&N.addEventListener("click",H=>{let I=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(I)return I.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),H.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-kbz2td8e: ', ex)
      };
    

      try {
        let argid = 'beae-vejcg8zublock-textloop-1',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-vejcg8zu',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-vejcg8zu');
        args.el = args.els[1];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-vejcg8zu: ', ex)
      };
    

      try {
        let argid = 'beae-kbz2td8eblock-imageloop-2',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-kbz2td8e',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-kbz2td8e');
        args.el = args.els[2];
        ((M) => { var P;if(M.el){if(M.shape){const O=M.el.closest(".beae-slider-items");O&&!O.hasAttribute("data-svg")&&(O==null||O.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${M.id}" clipPathUnits="objectBoundingBox">
                                ${M.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),O.setAttribute("data-svg","true"))}let H=M.el.querySelector(".beae-image-content-position"),I,A=window.innerWidth>=768&&M.autoHover;var L=H.querySelector(".beae-img-ratio-control"),V=H.querySelector(".beae-img-comp-container"),T=H.querySelector(".beae-img-comp-container--second");if(L&&T){let O=function(z){let D=0,q;R(),A?H.onmouseover=function(W){Z(W)}:z.onmousedown=function(W){Z(W)},H.onmouseup=function(){U()},z.ontouchstart=function(W){Z(W)},H.ontouchend=function(){U()};function R(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),z.style.left&&parseInt(z.style.left)}function Z(W){check=!1,W.preventDefault(),W.clientX?W.clientX:W.touches[0].clientX,parseInt(z.style.left),D=1,H.onmousemove=function(X){j(X)},H.ontouchmove=function(X){j(X)}}function U(){D=0,check=!0}function j(W){if(D==0)return!1;q=G(W),q<0&&(q=0),q>100&&(q=100),F(q)}function G(W){const X=H.getBoundingClientRect(),ae=(W.changedTouches?W.changedTouches[0].clientX:W.clientX)-X.left;return Math.max(0,Math.min(100,Math.round(ae*100/I)))}function F(W){z.style.left=W+"%",T.style.clipPath=`polygon(${W}% 0%, ${W}% 100%, 100% 100%, 100% 0)`,V.style.clipPath=`polygon(0% 100%, 0% 0%, ${W}% 0%, ${W}% 100%)`}};L&&T&&O(L),window.addEventListener("resize",function(){L&&T&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),O(L))})}}let N=(P=M.el)==null?void 0:P.querySelector("a.beae-x-image"),E=N==null?void 0:N.getAttribute("href");N&&M.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&N.addEventListener("click",H=>{let I=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(I)return I.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),H.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-kbz2td8e: ', ex)
      };
    

      try {
        let argid = 'beae-vejcg8zublock-textloop-2',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-vejcg8zu',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-vejcg8zu');
        args.el = args.els[2];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-vejcg8zu: ', ex)
      };
    

      try {
        let argid = 'beae-kbz2td8eblock-imageloop-3',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-kbz2td8e',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-kbz2td8e');
        args.el = args.els[3];
        ((M) => { var P;if(M.el){if(M.shape){const O=M.el.closest(".beae-slider-items");O&&!O.hasAttribute("data-svg")&&(O==null||O.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${M.id}" clipPathUnits="objectBoundingBox">
                                ${M.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),O.setAttribute("data-svg","true"))}let H=M.el.querySelector(".beae-image-content-position"),I,A=window.innerWidth>=768&&M.autoHover;var L=H.querySelector(".beae-img-ratio-control"),V=H.querySelector(".beae-img-comp-container"),T=H.querySelector(".beae-img-comp-container--second");if(L&&T){let O=function(z){let D=0,q;R(),A?H.onmouseover=function(W){Z(W)}:z.onmousedown=function(W){Z(W)},H.onmouseup=function(){U()},z.ontouchstart=function(W){Z(W)},H.ontouchend=function(){U()};function R(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),z.style.left&&parseInt(z.style.left)}function Z(W){check=!1,W.preventDefault(),W.clientX?W.clientX:W.touches[0].clientX,parseInt(z.style.left),D=1,H.onmousemove=function(X){j(X)},H.ontouchmove=function(X){j(X)}}function U(){D=0,check=!0}function j(W){if(D==0)return!1;q=G(W),q<0&&(q=0),q>100&&(q=100),F(q)}function G(W){const X=H.getBoundingClientRect(),ae=(W.changedTouches?W.changedTouches[0].clientX:W.clientX)-X.left;return Math.max(0,Math.min(100,Math.round(ae*100/I)))}function F(W){z.style.left=W+"%",T.style.clipPath=`polygon(${W}% 0%, ${W}% 100%, 100% 100%, 100% 0)`,V.style.clipPath=`polygon(0% 100%, 0% 0%, ${W}% 0%, ${W}% 100%)`}};L&&T&&O(L),window.addEventListener("resize",function(){L&&T&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),O(L))})}}let N=(P=M.el)==null?void 0:P.querySelector("a.beae-x-image"),E=N==null?void 0:N.getAttribute("href");N&&M.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&N.addEventListener("click",H=>{let I=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(I)return I.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),H.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-kbz2td8e: ', ex)
      };
    

      try {
        let argid = 'beae-vejcg8zublock-textloop-3',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-vejcg8zu',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-vejcg8zu');
        args.el = args.els[3];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-vejcg8zu: ', ex)
      };
    

      try {
        let argid = 'beae-kbz2td8eblock-imageloop-4',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-kbz2td8e',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-kbz2td8e');
        args.el = args.els[4];
        ((M) => { var P;if(M.el){if(M.shape){const O=M.el.closest(".beae-slider-items");O&&!O.hasAttribute("data-svg")&&(O==null||O.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${M.id}" clipPathUnits="objectBoundingBox">
                                ${M.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),O.setAttribute("data-svg","true"))}let H=M.el.querySelector(".beae-image-content-position"),I,A=window.innerWidth>=768&&M.autoHover;var L=H.querySelector(".beae-img-ratio-control"),V=H.querySelector(".beae-img-comp-container"),T=H.querySelector(".beae-img-comp-container--second");if(L&&T){let O=function(z){let D=0,q;R(),A?H.onmouseover=function(W){Z(W)}:z.onmousedown=function(W){Z(W)},H.onmouseup=function(){U()},z.ontouchstart=function(W){Z(W)},H.ontouchend=function(){U()};function R(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),z.style.left&&parseInt(z.style.left)}function Z(W){check=!1,W.preventDefault(),W.clientX?W.clientX:W.touches[0].clientX,parseInt(z.style.left),D=1,H.onmousemove=function(X){j(X)},H.ontouchmove=function(X){j(X)}}function U(){D=0,check=!0}function j(W){if(D==0)return!1;q=G(W),q<0&&(q=0),q>100&&(q=100),F(q)}function G(W){const X=H.getBoundingClientRect(),ae=(W.changedTouches?W.changedTouches[0].clientX:W.clientX)-X.left;return Math.max(0,Math.min(100,Math.round(ae*100/I)))}function F(W){z.style.left=W+"%",T.style.clipPath=`polygon(${W}% 0%, ${W}% 100%, 100% 100%, 100% 0)`,V.style.clipPath=`polygon(0% 100%, 0% 0%, ${W}% 0%, ${W}% 100%)`}};L&&T&&O(L),window.addEventListener("resize",function(){L&&T&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),O(L))})}}let N=(P=M.el)==null?void 0:P.querySelector("a.beae-x-image"),E=N==null?void 0:N.getAttribute("href");N&&M.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&N.addEventListener("click",H=>{let I=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(I)return I.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),H.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-kbz2td8e: ', ex)
      };
    

      try {
        let argid = 'beae-vejcg8zublock-textloop-4',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-vejcg8zu',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-vejcg8zu');
        args.el = args.els[4];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-vejcg8zu: ', ex)
      };
    

      try {
        let argid = 'beae-kbz2td8eblock-imageloop-5',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-kbz2td8e',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-kbz2td8e');
        args.el = args.els[5];
        ((M) => { var P;if(M.el){if(M.shape){const O=M.el.closest(".beae-slider-items");O&&!O.hasAttribute("data-svg")&&(O==null||O.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${M.id}" clipPathUnits="objectBoundingBox">
                                ${M.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),O.setAttribute("data-svg","true"))}let H=M.el.querySelector(".beae-image-content-position"),I,A=window.innerWidth>=768&&M.autoHover;var L=H.querySelector(".beae-img-ratio-control"),V=H.querySelector(".beae-img-comp-container"),T=H.querySelector(".beae-img-comp-container--second");if(L&&T){let O=function(z){let D=0,q;R(),A?H.onmouseover=function(W){Z(W)}:z.onmousedown=function(W){Z(W)},H.onmouseup=function(){U()},z.ontouchstart=function(W){Z(W)},H.ontouchend=function(){U()};function R(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),z.style.left&&parseInt(z.style.left)}function Z(W){check=!1,W.preventDefault(),W.clientX?W.clientX:W.touches[0].clientX,parseInt(z.style.left),D=1,H.onmousemove=function(X){j(X)},H.ontouchmove=function(X){j(X)}}function U(){D=0,check=!0}function j(W){if(D==0)return!1;q=G(W),q<0&&(q=0),q>100&&(q=100),F(q)}function G(W){const X=H.getBoundingClientRect(),ae=(W.changedTouches?W.changedTouches[0].clientX:W.clientX)-X.left;return Math.max(0,Math.min(100,Math.round(ae*100/I)))}function F(W){z.style.left=W+"%",T.style.clipPath=`polygon(${W}% 0%, ${W}% 100%, 100% 100%, 100% 0)`,V.style.clipPath=`polygon(0% 100%, 0% 0%, ${W}% 0%, ${W}% 100%)`}};L&&T&&O(L),window.addEventListener("resize",function(){L&&T&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),O(L))})}}let N=(P=M.el)==null?void 0:P.querySelector("a.beae-x-image"),E=N==null?void 0:N.getAttribute("href");N&&M.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&N.addEventListener("click",H=>{let I=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(I)return I.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),H.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-kbz2td8e: ', ex)
      };
    

      try {
        let argid = 'beae-vejcg8zublock-textloop-5',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-vejcg8zu',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-vejcg8zu');
        args.el = args.els[5];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-vejcg8zu: ', ex)
      };
    

      try {
        let argid = 'beae-mkny2wvcbutton-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-mkny2wvc',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-mkny2wvc');
        args.el = args.els[0];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{var n,t;let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(o){extOptions={},console.error(o)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let o=document.querySelector(selector+","+selector.replace("#","."));if(o)return o.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let s=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(s,{id:data.id,...extOptions}),e.preventDefault();return}const o=window.createLoading(e.currentTarget);let r=(t=(n=window.BEAE_HELPER)==null?void 0:n.routes)==null?void 0:t.root_url;return window.BeaePopupLibrary.lightbox({id:data.id,url:(r!=="/"?r:"")+((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(s=>{s.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(s),o.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let o=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(o=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(o,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-mkny2wvc: ', ex)
      };
    

      try {
        let argid = 'beae-e98sio4zsection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-e98sio4z',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-e98sio4z');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-e98sio4z: ', ex)
      };
    

      try {
        let argid = 'beae-oho6nd0cblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-oho6nd0c',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-oho6nd0c');
        args.el = args.els[0];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-oho6nd0c: ', ex)
      };
    

      try {
        let argid = 'beae-teakxvm3section-slide-show',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-teakxvm3',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-teakxvm3');
        args.el = args.els[0];
        ((h) => { window.BeaeSlider&&!h.noRunJs&&window.BeaeSlider(h) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-teakxvm3: ', ex)
      };
    

      try {
        let argid = 'beae-k1otd9bbblock-imageloop-0',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-k1otd9bb',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-k1otd9bb');
        args.el = args.els[0];
        ((M) => { var P;if(M.el){if(M.shape){const O=M.el.closest(".beae-slider-items");O&&!O.hasAttribute("data-svg")&&(O==null||O.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${M.id}" clipPathUnits="objectBoundingBox">
                                ${M.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),O.setAttribute("data-svg","true"))}let H=M.el.querySelector(".beae-image-content-position"),I,A=window.innerWidth>=768&&M.autoHover;var L=H.querySelector(".beae-img-ratio-control"),V=H.querySelector(".beae-img-comp-container"),T=H.querySelector(".beae-img-comp-container--second");if(L&&T){let O=function(z){let D=0,q;R(),A?H.onmouseover=function(W){Z(W)}:z.onmousedown=function(W){Z(W)},H.onmouseup=function(){U()},z.ontouchstart=function(W){Z(W)},H.ontouchend=function(){U()};function R(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),z.style.left&&parseInt(z.style.left)}function Z(W){check=!1,W.preventDefault(),W.clientX?W.clientX:W.touches[0].clientX,parseInt(z.style.left),D=1,H.onmousemove=function(X){j(X)},H.ontouchmove=function(X){j(X)}}function U(){D=0,check=!0}function j(W){if(D==0)return!1;q=G(W),q<0&&(q=0),q>100&&(q=100),F(q)}function G(W){const X=H.getBoundingClientRect(),ae=(W.changedTouches?W.changedTouches[0].clientX:W.clientX)-X.left;return Math.max(0,Math.min(100,Math.round(ae*100/I)))}function F(W){z.style.left=W+"%",T.style.clipPath=`polygon(${W}% 0%, ${W}% 100%, 100% 100%, 100% 0)`,V.style.clipPath=`polygon(0% 100%, 0% 0%, ${W}% 0%, ${W}% 100%)`}};L&&T&&O(L),window.addEventListener("resize",function(){L&&T&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),O(L))})}}let N=(P=M.el)==null?void 0:P.querySelector("a.beae-x-image"),E=N==null?void 0:N.getAttribute("href");N&&M.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&N.addEventListener("click",H=>{let I=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(I)return I.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),H.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-k1otd9bb: ', ex)
      };
    

      try {
        let argid = 'beae-p7lwe4jnblock-textloop-0',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-p7lwe4jn',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-p7lwe4jn');
        args.el = args.els[0];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-p7lwe4jn: ', ex)
      };
    

      try {
        let argid = 'beae-ie68o07jblock-textloop-0',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-ie68o07j',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-ie68o07j');
        args.el = args.els[0];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-ie68o07j: ', ex)
      };
    

      try {
        let argid = 'beae-17xoo01zblock-textloop-0',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-17xoo01z',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-17xoo01z');
        args.el = args.els[0];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-17xoo01z: ', ex)
      };
    

      try {
        let argid = 'beae-vo9kucrvblock-imageloop-0',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-vo9kucrv',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-vo9kucrv');
        args.el = args.els[0];
        ((M) => { var P;if(M.el){if(M.shape){const O=M.el.closest(".beae-slider-items");O&&!O.hasAttribute("data-svg")&&(O==null||O.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${M.id}" clipPathUnits="objectBoundingBox">
                                ${M.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),O.setAttribute("data-svg","true"))}let H=M.el.querySelector(".beae-image-content-position"),I,A=window.innerWidth>=768&&M.autoHover;var L=H.querySelector(".beae-img-ratio-control"),V=H.querySelector(".beae-img-comp-container"),T=H.querySelector(".beae-img-comp-container--second");if(L&&T){let O=function(z){let D=0,q;R(),A?H.onmouseover=function(W){Z(W)}:z.onmousedown=function(W){Z(W)},H.onmouseup=function(){U()},z.ontouchstart=function(W){Z(W)},H.ontouchend=function(){U()};function R(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),z.style.left&&parseInt(z.style.left)}function Z(W){check=!1,W.preventDefault(),W.clientX?W.clientX:W.touches[0].clientX,parseInt(z.style.left),D=1,H.onmousemove=function(X){j(X)},H.ontouchmove=function(X){j(X)}}function U(){D=0,check=!0}function j(W){if(D==0)return!1;q=G(W),q<0&&(q=0),q>100&&(q=100),F(q)}function G(W){const X=H.getBoundingClientRect(),ae=(W.changedTouches?W.changedTouches[0].clientX:W.clientX)-X.left;return Math.max(0,Math.min(100,Math.round(ae*100/I)))}function F(W){z.style.left=W+"%",T.style.clipPath=`polygon(${W}% 0%, ${W}% 100%, 100% 100%, 100% 0)`,V.style.clipPath=`polygon(0% 100%, 0% 0%, ${W}% 0%, ${W}% 100%)`}};L&&T&&O(L),window.addEventListener("resize",function(){L&&T&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),O(L))})}}let N=(P=M.el)==null?void 0:P.querySelector("a.beae-x-image"),E=N==null?void 0:N.getAttribute("href");N&&M.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&N.addEventListener("click",H=>{let I=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(I)return I.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),H.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-vo9kucrv: ', ex)
      };
    

      try {
        let argid = 'beae-lxaa0dk6block-textloop-0',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-lxaa0dk6',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-lxaa0dk6');
        args.el = args.els[0];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-lxaa0dk6: ', ex)
      };
    

      try {
        let argid = 'beae-k1otd9bbblock-imageloop-1',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-k1otd9bb',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-k1otd9bb');
        args.el = args.els[1];
        ((M) => { var P;if(M.el){if(M.shape){const O=M.el.closest(".beae-slider-items");O&&!O.hasAttribute("data-svg")&&(O==null||O.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${M.id}" clipPathUnits="objectBoundingBox">
                                ${M.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),O.setAttribute("data-svg","true"))}let H=M.el.querySelector(".beae-image-content-position"),I,A=window.innerWidth>=768&&M.autoHover;var L=H.querySelector(".beae-img-ratio-control"),V=H.querySelector(".beae-img-comp-container"),T=H.querySelector(".beae-img-comp-container--second");if(L&&T){let O=function(z){let D=0,q;R(),A?H.onmouseover=function(W){Z(W)}:z.onmousedown=function(W){Z(W)},H.onmouseup=function(){U()},z.ontouchstart=function(W){Z(W)},H.ontouchend=function(){U()};function R(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),z.style.left&&parseInt(z.style.left)}function Z(W){check=!1,W.preventDefault(),W.clientX?W.clientX:W.touches[0].clientX,parseInt(z.style.left),D=1,H.onmousemove=function(X){j(X)},H.ontouchmove=function(X){j(X)}}function U(){D=0,check=!0}function j(W){if(D==0)return!1;q=G(W),q<0&&(q=0),q>100&&(q=100),F(q)}function G(W){const X=H.getBoundingClientRect(),ae=(W.changedTouches?W.changedTouches[0].clientX:W.clientX)-X.left;return Math.max(0,Math.min(100,Math.round(ae*100/I)))}function F(W){z.style.left=W+"%",T.style.clipPath=`polygon(${W}% 0%, ${W}% 100%, 100% 100%, 100% 0)`,V.style.clipPath=`polygon(0% 100%, 0% 0%, ${W}% 0%, ${W}% 100%)`}};L&&T&&O(L),window.addEventListener("resize",function(){L&&T&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),O(L))})}}let N=(P=M.el)==null?void 0:P.querySelector("a.beae-x-image"),E=N==null?void 0:N.getAttribute("href");N&&M.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&N.addEventListener("click",H=>{let I=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(I)return I.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),H.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-k1otd9bb: ', ex)
      };
    

      try {
        let argid = 'beae-p7lwe4jnblock-textloop-1',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-p7lwe4jn',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-p7lwe4jn');
        args.el = args.els[1];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-p7lwe4jn: ', ex)
      };
    

      try {
        let argid = 'beae-ie68o07jblock-textloop-1',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-ie68o07j',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-ie68o07j');
        args.el = args.els[1];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-ie68o07j: ', ex)
      };
    

      try {
        let argid = 'beae-17xoo01zblock-textloop-1',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-17xoo01z',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-17xoo01z');
        args.el = args.els[1];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-17xoo01z: ', ex)
      };
    

      try {
        let argid = 'beae-vo9kucrvblock-imageloop-1',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-vo9kucrv',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-vo9kucrv');
        args.el = args.els[1];
        ((M) => { var P;if(M.el){if(M.shape){const O=M.el.closest(".beae-slider-items");O&&!O.hasAttribute("data-svg")&&(O==null||O.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${M.id}" clipPathUnits="objectBoundingBox">
                                ${M.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),O.setAttribute("data-svg","true"))}let H=M.el.querySelector(".beae-image-content-position"),I,A=window.innerWidth>=768&&M.autoHover;var L=H.querySelector(".beae-img-ratio-control"),V=H.querySelector(".beae-img-comp-container"),T=H.querySelector(".beae-img-comp-container--second");if(L&&T){let O=function(z){let D=0,q;R(),A?H.onmouseover=function(W){Z(W)}:z.onmousedown=function(W){Z(W)},H.onmouseup=function(){U()},z.ontouchstart=function(W){Z(W)},H.ontouchend=function(){U()};function R(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),z.style.left&&parseInt(z.style.left)}function Z(W){check=!1,W.preventDefault(),W.clientX?W.clientX:W.touches[0].clientX,parseInt(z.style.left),D=1,H.onmousemove=function(X){j(X)},H.ontouchmove=function(X){j(X)}}function U(){D=0,check=!0}function j(W){if(D==0)return!1;q=G(W),q<0&&(q=0),q>100&&(q=100),F(q)}function G(W){const X=H.getBoundingClientRect(),ae=(W.changedTouches?W.changedTouches[0].clientX:W.clientX)-X.left;return Math.max(0,Math.min(100,Math.round(ae*100/I)))}function F(W){z.style.left=W+"%",T.style.clipPath=`polygon(${W}% 0%, ${W}% 100%, 100% 100%, 100% 0)`,V.style.clipPath=`polygon(0% 100%, 0% 0%, ${W}% 0%, ${W}% 100%)`}};L&&T&&O(L),window.addEventListener("resize",function(){L&&T&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),O(L))})}}let N=(P=M.el)==null?void 0:P.querySelector("a.beae-x-image"),E=N==null?void 0:N.getAttribute("href");N&&M.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&N.addEventListener("click",H=>{let I=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(I)return I.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),H.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-vo9kucrv: ', ex)
      };
    

      try {
        let argid = 'beae-lxaa0dk6block-textloop-1',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-lxaa0dk6',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-lxaa0dk6');
        args.el = args.els[1];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-lxaa0dk6: ', ex)
      };
    

      try {
        let argid = 'beae-k1otd9bbblock-imageloop-2',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-k1otd9bb',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-k1otd9bb');
        args.el = args.els[2];
        ((M) => { var P;if(M.el){if(M.shape){const O=M.el.closest(".beae-slider-items");O&&!O.hasAttribute("data-svg")&&(O==null||O.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${M.id}" clipPathUnits="objectBoundingBox">
                                ${M.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),O.setAttribute("data-svg","true"))}let H=M.el.querySelector(".beae-image-content-position"),I,A=window.innerWidth>=768&&M.autoHover;var L=H.querySelector(".beae-img-ratio-control"),V=H.querySelector(".beae-img-comp-container"),T=H.querySelector(".beae-img-comp-container--second");if(L&&T){let O=function(z){let D=0,q;R(),A?H.onmouseover=function(W){Z(W)}:z.onmousedown=function(W){Z(W)},H.onmouseup=function(){U()},z.ontouchstart=function(W){Z(W)},H.ontouchend=function(){U()};function R(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),z.style.left&&parseInt(z.style.left)}function Z(W){check=!1,W.preventDefault(),W.clientX?W.clientX:W.touches[0].clientX,parseInt(z.style.left),D=1,H.onmousemove=function(X){j(X)},H.ontouchmove=function(X){j(X)}}function U(){D=0,check=!0}function j(W){if(D==0)return!1;q=G(W),q<0&&(q=0),q>100&&(q=100),F(q)}function G(W){const X=H.getBoundingClientRect(),ae=(W.changedTouches?W.changedTouches[0].clientX:W.clientX)-X.left;return Math.max(0,Math.min(100,Math.round(ae*100/I)))}function F(W){z.style.left=W+"%",T.style.clipPath=`polygon(${W}% 0%, ${W}% 100%, 100% 100%, 100% 0)`,V.style.clipPath=`polygon(0% 100%, 0% 0%, ${W}% 0%, ${W}% 100%)`}};L&&T&&O(L),window.addEventListener("resize",function(){L&&T&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),O(L))})}}let N=(P=M.el)==null?void 0:P.querySelector("a.beae-x-image"),E=N==null?void 0:N.getAttribute("href");N&&M.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&N.addEventListener("click",H=>{let I=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(I)return I.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),H.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-k1otd9bb: ', ex)
      };
    

      try {
        let argid = 'beae-p7lwe4jnblock-textloop-2',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-p7lwe4jn',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-p7lwe4jn');
        args.el = args.els[2];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-p7lwe4jn: ', ex)
      };
    

      try {
        let argid = 'beae-ie68o07jblock-textloop-2',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-ie68o07j',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-ie68o07j');
        args.el = args.els[2];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-ie68o07j: ', ex)
      };
    

      try {
        let argid = 'beae-17xoo01zblock-textloop-2',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-17xoo01z',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-17xoo01z');
        args.el = args.els[2];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-17xoo01z: ', ex)
      };
    

      try {
        let argid = 'beae-vo9kucrvblock-imageloop-2',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-vo9kucrv',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-vo9kucrv');
        args.el = args.els[2];
        ((M) => { var P;if(M.el){if(M.shape){const O=M.el.closest(".beae-slider-items");O&&!O.hasAttribute("data-svg")&&(O==null||O.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${M.id}" clipPathUnits="objectBoundingBox">
                                ${M.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),O.setAttribute("data-svg","true"))}let H=M.el.querySelector(".beae-image-content-position"),I,A=window.innerWidth>=768&&M.autoHover;var L=H.querySelector(".beae-img-ratio-control"),V=H.querySelector(".beae-img-comp-container"),T=H.querySelector(".beae-img-comp-container--second");if(L&&T){let O=function(z){let D=0,q;R(),A?H.onmouseover=function(W){Z(W)}:z.onmousedown=function(W){Z(W)},H.onmouseup=function(){U()},z.ontouchstart=function(W){Z(W)},H.ontouchend=function(){U()};function R(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),z.style.left&&parseInt(z.style.left)}function Z(W){check=!1,W.preventDefault(),W.clientX?W.clientX:W.touches[0].clientX,parseInt(z.style.left),D=1,H.onmousemove=function(X){j(X)},H.ontouchmove=function(X){j(X)}}function U(){D=0,check=!0}function j(W){if(D==0)return!1;q=G(W),q<0&&(q=0),q>100&&(q=100),F(q)}function G(W){const X=H.getBoundingClientRect(),ae=(W.changedTouches?W.changedTouches[0].clientX:W.clientX)-X.left;return Math.max(0,Math.min(100,Math.round(ae*100/I)))}function F(W){z.style.left=W+"%",T.style.clipPath=`polygon(${W}% 0%, ${W}% 100%, 100% 100%, 100% 0)`,V.style.clipPath=`polygon(0% 100%, 0% 0%, ${W}% 0%, ${W}% 100%)`}};L&&T&&O(L),window.addEventListener("resize",function(){L&&T&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),O(L))})}}let N=(P=M.el)==null?void 0:P.querySelector("a.beae-x-image"),E=N==null?void 0:N.getAttribute("href");N&&M.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&N.addEventListener("click",H=>{let I=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(I)return I.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),H.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-vo9kucrv: ', ex)
      };
    

      try {
        let argid = 'beae-lxaa0dk6block-textloop-2',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-lxaa0dk6',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-lxaa0dk6');
        args.el = args.els[2];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-lxaa0dk6: ', ex)
      };
    }; if (window.BEAEBASE) {js_4E59RFAT()} else {window.BEAEPAGEJS.push(js_4E59RFAT)} })(); 