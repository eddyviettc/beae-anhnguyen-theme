
(() => { if (window.BEAEPAGEJS === undefined) {
            window.BEAEPAGEJS = [];
          }

          if(window.beaePageSetting == undefined) {
            window.beaePageSetting = {};
          }
          
          window.beaePageSetting.pageId = "699c8cf2831ccb8ff0078c83";
              window.beaePageSetting.pageTitle = "asdasdascasc12"; 
              window.beaePageSetting.pageType = "product";

          let js_S9HOPUE1 = () => { let BeaeUseHooks = {};
      try {
        let argid = 'beae-osrvfm4esection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-osrvfm4e',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-osrvfm4e');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-osrvfm4e: ', ex)
      };
    

      try {
        let argid = 'beae-1tuhov7qsection-featured-product',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-1tuhov7q',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-1tuhov7q');
        args.el = args.els[0];
        ((a) => { var k,$;const n=a.el.querySelector('script[data-id="Product-json-'+a.id+'"]')||a.el.querySelector("#Product-json-"+a.id);let t=!1;const o=JSON.parse(n!=null&&n.innerHTML?n==null?void 0:n.innerHTML:"{}");let r=o!=null&&o.selected_or_first_available_variant?o==null?void 0:o.selected_or_first_available_variant:(k=o.variants)==null?void 0:k[0];window.BeaeMoneyFormat||(window.BeaeMoneyFormat=($=a.el.querySelector(".beae-money-format"))==null?void 0:$.innerHTML),r&&(r=o.variants.find(w=>w.id==r.id)),y(r);function s(w){const x=a.el.querySelector(".beae-attr-sku");if(w){if(x){x.style.removeProperty("display");const M=x.querySelector(".beae-attr-value");M&&(M.innerHTML=`${w.sku?w.sku:"N/A"}`)}}else x&&(x.style.display="none")}function p(w){var x,M,V,L,T;if(w!=null&&w.unitPriceMeasurement){const N=(x=a.el)==null?void 0:x.querySelectorAll(".product__unit-price");if(N){let E="",P=window.BeaeFormatMoney(w.unitPrice);P&&typeof P=="string"&&(P=P.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'")),((M=w.unitPriceMeasurement)==null?void 0:M.referenceValue)!=1&&((V=w.unitPriceMeasurement)==null?void 0:V.referenceValue)!=0&&(E+=w.unitPriceMeasurement.referenceValue),((L=w.unitPriceMeasurement)==null?void 0:L.referenceUnit)!==null&&((T=w.unitPriceMeasurement)==null?void 0:T.referenceUnit)!==""&&(E+=w.unitPriceMeasurement.referenceUnit),N.forEach(H=>{P!=null&&P!=""&&E!=null&&E!=""?H.innerHTML=`${P}/${E}`:H.innerHTML="Price per unit not available"})}}}function c(w){if(!window.BeaeMoneyFormat)return;const x=a.el.querySelectorAll(".beae-product-single__price:not(.beae-recommendation-item .beae-product-single__price)");x&&x.forEach(V=>{if(V){let L=window.BeaeFormatMoney(w.price);L&&typeof L=="string"&&(L=L.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'")),V.innerHTML=L}});const M=a.el.querySelectorAll(".beae-product-single__price--regular:not(.beae-recommendation-item .beae-product-single__price--regular)");M&&M.forEach(V=>{var L,T;if(V){const N=V.parentNode;if(w.compare_at_price){V.style.display="block";let E=window.BeaeFormatMoney(w.compare_at_price);E&&typeof E=="string"&&(E=E.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'")),V.innerHTML=E,(L=N==null?void 0:N.querySelector(".beae-product-single__price"))==null||L.setAttribute("data-sale",!0)}else V.style.display="none",(T=N==null?void 0:N.querySelector(".beae-product-single__price"))==null||T.removeAttribute("data-sale")}})}function d(w){var L,T,N,E;const x=a.el.querySelectorAll(".beae-product-single__price--badged"),M=parseFloat((T=(L=w.price)==null?void 0:L.toString())==null?void 0:T.replace(",","")),V=parseFloat((E=(N=w.compare_at_price)==null?void 0:N.toString())==null?void 0:E.replace(",",""));x&&x.forEach(P=>{if(!P)return;const H=P.getAttribute("type"),z=P.getAttribute("data-sale")||"",R=P.getAttribute("data-sold-out");let O="";if(H=="percent")O=Math.floor((V-M)*100/V);else if(H=="dollar"){const D=window.BeaeFormatDecimal(w.compare_at_price)-window.BeaeFormatDecimal(w.price);O=window.BeaeFormatMoney(window.BeaeReverseFormatDecimal(D))}else if(H=="none"){P.classList.remove("beae-product-single__price--sale","beae-sale-sold-out"),P.classList.add("beae-sale-hidden"),P.innerHTML="";return}const I=w.inventory_quantity,A=w.inventory_policy;if(I>0||I<1&&A=="continue"||!w.inventory_management)if(V&&V>M){P.classList.remove("beae-sale-sold-out","beae-sale-hidden"),P.classList.add("beae-product-single__price--sale");let D=z.replace(new RegExp("{\\s*?sale\\s*?}","g"),O);D&&(D=D.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'")),P.innerHTML=D}else P.classList.remove("beae-product-single__price--sale","beae-sale-sold-out"),P.classList.add("beae-sale-hidden"),P.innerHTML="";else P.classList.remove("beae-sale-hidden","beae-product-single__price--sale"),P.classList.add("beae-sale-sold-out"),P.innerHTML=R})}function l(w){var L,T,N,E;const x=parseFloat((T=(L=w.price)==null?void 0:L.toString())==null?void 0:T.replace(",","")),M=parseFloat((E=(N=w.compare_at_price)==null?void 0:N.toString())==null?void 0:E.replace(",",""));let V=a.el.querySelectorAll(".beae-badged-wrapper span");V&&V.forEach(P=>{if(!P)return;const H=P.getAttribute("type"),z=P.getAttribute("data-sale")||"",R=P.getAttribute("data-sold-out");let O="";if(H=="percent")O=Math.floor((M-x)*100/M);else if(H=="dollar"){const D=window.BeaeFormatDecimal(w.compare_at_price)-window.BeaeFormatDecimal(w.price);O=window.BeaeFormatMoney(window.BeaeReverseFormatDecimal(D))}else if(H=="none"){P.classList.remove("beae-product-single__price--sale","beae-sale-sold-out"),P.classList.add("beae-sale-hidden"),P.innerHTML="";return}const I=w.inventory_quantity,A=w.inventory_policy;if(I>0||I<1&&A=="continue"||!w.inventory_management){const D=parseFloat(w.price),j=parseFloat(w.compare_at_price);if(j&&j>D){P.classList.remove("beae-sale-sold-out","beae-sale-hidden"),P.classList.add("beae-product-single__price--sale");let q=z.replace(new RegExp("{\\s*?sale\\s*?}","g"),O);q&&(q=q.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'")),P.innerHTML=q}else P.classList.remove("beae-product-single__price--sale","beae-sale-sold-out"),P.classList.add("beae-sale-hidden"),P.innerHTML=""}else P.classList.remove("beae-sale-hidden","beae-product-single__price--sale"),P.classList.add("beae-sale-sold-out"),P.innerHTML=R})}function v(w){const x=a.el.querySelectorAll(".beae-x-product-gallery .beae-slider");x&&o&&w.featured_media&&x.forEach(M=>{const V=M.getAttribute("data-desktop-layout");if(window.innerWidth>=768&&V=="grid"){const L=M.querySelector('.beae-slide-item[data-media-id="'+w.featured_media.id+'"]');Array.from(M.querySelectorAll(".beae-slide-item.beae-grid-active")).filter(function(N){return N.nodeType===1&&N!==L}).forEach(N=>{N.classList.remove("beae-grid-active")}),_=="true"&&L.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),L&&!L.classList.contains("beae-grid-active")&&L.classList.add("beae-grid-active")}else _=="true"&&M.dispatchEvent(new CustomEvent("activeSlide",{detail:{id:w.featured_media.id},bubbles:!0,cancelable:!0,composed:!1}))})}function y(w){if(a.mode.value==="builder"&&w){const Z=a.el.querySelector(".beae-x-featuted_product");Z==null||Z.setAttribute("data-variant-id",w.id)}const x=a.el.querySelector(".beae-x-inventory");if(!x||!w)return;const M=x.children[0],V=x.getAttribute("data-in-stock-text"),L=x.getAttribute("data-out-stock-text");x.getAttribute("data-inventory-text");const T=x.getAttribute("data-pre-order-text"),N=x.getAttribute("data-very-low-stock-text"),E=x.getAttribute("data-low-stock-text"),P=x.getAttribute("data-incoming-date-text"),H=x.getAttribute("data-low-number")??20,z=x.getAttribute("data-very-low-number")??5,R=x.getAttribute("data-show-next-incoming-date"),O=x.getAttribute("data-max-number")??60,I=x.querySelector(".beae-inventory-label"),A=x.querySelector(".beae-inventory-process-body");let D=w.inventory_quantity;a.el.querySelector(".beae-x-variant")||a.el.querySelector(".beae-x-swatch-color")||a.el.querySelector(".beae-x-add-to-cart-with-option")||(D=o.variants.reduce((Z,F)=>Z+(F.inventory_quantity||0),0));function q(Z){return Z?Z.replace("{quantity}",D).replace("{next_incoming_date}",w.next_incoming_date):""}!M||!I||(w.available?w.inventory_policy==="continue"&&D<1?(I.innerHTML=q(T),M.classList="",M.classList.add("beae-inventory-pre-order")):D<=z?(I.innerHTML=q(N),M.classList="",M.classList.add("beae-inventory-very-low")):D<=H?(I.innerHTML=q(E),M.classList="",M.classList.add("beae-inventory-low")):(I.innerHTML=q(V),M.classList="",M.classList.add("beae-inventory-in-stock")):w.next_incoming_date&&R?(I.innerHTML=q(P),M.classList="",M.classList.add("beae-incoming-transfer")):(I.innerHTML=q(L),M.classList="",M.classList.add("beae-inventory-out-stock")),A&&(D<=O?A.style.width=D/O*100+"%":A.style.width="100%"))}function g(w){const x=a.el.querySelector(".beae-add-to-cart--submit");if(x){const V=x.querySelector(".beae-add-to-cart-text-content");w.available?x&&(x.removeAttribute("disabled"),V&&(V.innerHTML=x.getAttribute("data-add-to-cart-text"))):x&&(a.mode.value=="live"&&x.setAttribute("disabled","disabled"),V&&(V.innerHTML=x.getAttribute("data-sold-out-text")))}const M=a.el.querySelector(".shopify-payment-button__button");M&&(w.inventory_quantity>0?M.removeAttribute("disabled"):a.mode.value=="live"&&M.setAttribute("disabled","disabled"))}function h(w){const x=a.el.querySelector(".beae-quantity-input"),M=a.el.querySelectorAll(".beae-quantity-btn");if(M&&M.forEach(V=>{w&&w.available?V.removeAttribute("disabled"):a.mode.value=="live"&&V.setAttribute("disabled","disabled")}),x){if(w)w.available?x.removeAttribute("disabled"):a.mode.value=="live"&&x.setAttribute("disabled","disabled");else{x.value=1,a.mode.value=="live"&&x.setAttribute("disabled","disabled");return}const V=w.inventory_quantity,L=w.inventory_policy;let T=9999;w.inventory_management&&L==="deny"&&(T=V),V<1&&L=="continue"&&(T=999999);let N=parseInt(x.value);N>T&&(N=T),N=isNaN(N)||!N?1:N,x.value=N,x.setAttribute("max",T)}}function u(w){if(w){let x=a.el.querySelector(".beae-pa-container");if(x&&a.mode.value=="live"){const M=x.getAttribute("data-section-id-template");x.innerHTML="";const L=window.location.pathname.split("/").filter(N=>N);let T="";L.length>0&&(L[0].length===2||/^[a-z]{2}(-[A-Z]{2})?$/.test(L[0]))&&(T=L[0]+"/"),window.fetch(window.location.origin+"/"+T+"products/"+o.handle+"?variant="+w.id+"&section_id="+M,{method:"GET",headers:{"Content-Type":"text/html"}}).then(N=>N.text()).then(N=>{let E=N.match(/<Beae-custom-liquid-pickup>(|[\s\S]+?)<\/Beae-custom-liquid-pickup>/g);E&&E[0]&&(x.innerHTML=E[0]);let P=x.querySelector(".beae-pa--btn"),H=x.querySelector(".beae-pa--detail");if(P){const z=x.closest("section.beae-section");z&&z.getAttribute("data-sectionid"),P.addEventListener("click",()=>{window.BeaePopupLibrary.createPopup(H,{layout:x.getAttribute("data-layout"),layoutMobile:"bottom",width:x.getAttribute("data-width"),id:a.id})})}}).catch(N=>{console.warn(N.message)})}}}const f=a.el.querySelector(".beae-variant-size-guide");if(f){const w=f.querySelector(".beae-variant-size-guide-btn"),x=f.querySelector(".beae-variant-size-guide-content"),M=a.el.querySelector(".beae-content-size-chart-preview");let V=window.isPreviewTemplate&&M||x;if(w&&V){const L=a.el.getAttribute("data-sectionid");w.addEventListener("click",()=>{window!=null&&window.BeaePopupLibrary&&window.BeaePopupLibrary.createPopup(V,{layout:"center",layoutMobile:"bottom",width:"auto",sectionId:L})})}}const b=a.el.querySelectorAll(".beae-custom-select_wrp");b&&b.length&&a.mode.value=="live"&&b.forEach(w=>{const x=w.querySelector("button.beae-custom-select__btn"),M=w.closest("div.beae-block.beae-core");x.addEventListener("click",function(V){w.classList.toggle("active"),M.style.position="relative",M.style.zIndex="1"}),document.addEventListener("click",function(V){w.contains(V.target)||(w.classList.remove("active"),M.style={})})});function C(){const w=a.el.querySelector(".beae-custom-select_wrp.active");w&&w.classList.remove("active")}const m=a.el.querySelector(".beae-x-variant"),_=m==null?void 0:m.getAttribute("data-scroll");let S=!1;if(m){let w=function(O,I){if(!O)return[];let A=O.options.filter((D,j)=>j!=I);return o.variants.filter(D=>A.every(j=>D.options.includes(j)))??[]},x=function(O,I,A){if(!O)return null;let D=O.options.filter((j,q)=>q!=I);return o.variants.find(j=>j.options.every(q=>[A,...D].includes(q)))},M=function(O){if(!O)return;const I=a.el.querySelector("form.beae-product-form-next");if(I){I.getAttribute("data-variant-id",O.id);const A=I.querySelector('input[type="hidden"][name="id"]');A&&A.setAttribute("value",O.id)}m.querySelectorAll(".beae-variant-label").forEach(A=>{const D=parseInt(A.getAttribute("data-option-position"))-1;A.innerHTML=O.options[D]}),P||m.querySelectorAll(".beae-product-images-list").forEach(A=>{const D=parseInt(A.getAttribute("data-option-position"))-1;let j=[];w(O,D).forEach(q=>{j.push(`
                      <span
                        class="beae-product-swatch-item-image"
                        variant-id=${q.id}
                      >
                        <img
                          src="${q.featured_image?q.featured_image.src:"//cdn.shopify.com/shopifycloud/shopify/assets/no-image-160-1cfae84eca4ba66892099dcd26e604f5801fdadb3693bc9977f476aa160931ac_120x120_crop_center.gif"}"
                          alt="${q.title}"
                          height="120"
                          width="120"
                          loading="lazy"
                        />
                      </span>
                    `)}),A.querySelectorAll(".beae-product-variant-item-image").forEach((q,Z)=>{q.innerHTML=j[Z]})}),m.querySelectorAll(".beae-product-variant-item").forEach(A=>{const D=parseInt(A.getAttribute("data-option-position"))-1;let j="";const q=A.getAttribute("data-value");if(q)try{j=decodeURIComponent(q)}catch{j=q}const Z=x(O,D,j);Z&&(A.setAttribute("data-variant-id",Z.id),Z.inventory_management&&Z.inventory_quantity<1&&Z.inventory_policy!="continue"?A.classList.add("variant-item-disable"):A.classList.remove("variant-item-disable"))})},V=function(O){O.options.forEach((I,A)=>{let D=A+1;const j=m.querySelectorAll('.beae-variant-option-list[data-option-position="'+D+'"] > li');let q=null;const Z=m.querySelector("select#"+R+"-option-"+A);if(Z){for(let U=0;U<j.length;U++)j[U].classList.remove("beae-product-variant-item--selected"),decodeURIComponent(j[U].getAttribute("data-value"))==I&&(q=j[U]);q&&q.classList.add("beae-product-variant-item--selected"),Z.value=I}const F=q&&q.closest(".beae-custom-select_wrp");if(F){const U=q&&q.getAttribute("data-color"),G=F.querySelector(".beae-selected-color");G&&(G.style="--beae-color-variant: "+U);const W=F.querySelector(".beae-text-selected");W&&(W.innerHTML=I)}})},L=function(O,I){N(O),O&&(t=!0,r=O,y(O),h(O),g(O),d(O),l(O),M(O),c(O),s(O),p(O),E?(E=!1,new URLSearchParams(window.location.search).get("variant")&&!window.noUpdateImageFirstLoad&&setTimeout(()=>{v(O)})):v(O),u(O),a.el.dispatchEvent(new CustomEvent("changeVariant",{detail:{variant:O},bubbles:!0,cancelable:!0,composed:!1})))},T=function(){const O=a.el.querySelector('.beae-product-option-cont[data-swatch-type="variant_image"]');if(!O)return;const I=O.getAttribute("data-option-position"),A="//cdn.shopify.com/shopifycloud/shopify/assets/no-image-160-1cfae84eca4ba66892099dcd26e604f5801fdadb3693bc9977f476aa160931ac_120x120_crop_center.gif",D=a.el.querySelectorAll('.beae-product-option-cont:not([data-swatch-type="variant_image"])'),j={};D&&D.length&&D.forEach(F=>{const U=F.querySelector(".beae-product-variant-item--selected");if(!U)return;const G=U.getAttribute("data-option-position"),W=decodeURIComponent(U.getAttribute("data-value"));j["option"+G]=W});const q=o.variants.filter(F=>Object.keys(j).every(U=>j[U]==F[U])),Z=O.querySelectorAll(".beae-product-variant-item");Z&&Z.length&&Z.forEach(F=>{const U=decodeURIComponent(F.getAttribute("data-value")),G=q.find(W=>W["option"+I]==U);F.querySelector("img")||(F.innerHTML=`
                          <span class="beae-product-swatch-item-image">
                          <img
                          src="${G&&G.featured_image?G.featured_image.src:A}"
                          alt="${G&&G.title}"
                          height="100"
                          width="100"
                          loading="lazy"
                          />
                      </span>
                      `)})},N=function(O){let I=o.variants,A=O&&O.option1,D=O&&O.option2;if(!O){const Z=a.el.querySelector('.beae-variant-option-list[data-option-position="1"] .beae-product-variant-item--selected');Z&&(A=decodeURIComponent(Z.getAttribute("data-value")));const F=a.el.querySelector('.beae-variant-option-list[data-option-position="2"] .beae-product-variant-item--selected');F&&(D=decodeURIComponent(F.getAttribute("data-value")))}let j=[],q=[];if(A&&(I=o.variants.filter(Z=>Z.option1==A),I.forEach(Z=>{Z.option2&&!(j!=null&&j.includes(Z.option2))&&j.push(Z.option2)}),I.forEach(Z=>{Z.option2==D&&Z.option3&&!(q!=null&&q.includes(Z.option3))&&q.push(Z.option3)})),[2,3].forEach(Z=>{const F=a.el.querySelectorAll('.beae-variant-option-list[data-option-position="'+Z+'"] .beae-product-variant-item');if(F){let U=Z==2?j:q;F.forEach(G=>{const W=decodeURIComponent(G.getAttribute("data-value"));U.includes(W)?G.setAttribute("data-unavailable",!1):G.setAttribute("data-unavailable",!0)})}}),!O){if(j&&j.length){const Z=a.el.querySelector('.beae-variant-option-list[data-option-position="2"] .beae-product-variant-item--selected[data-unavailable="false"]'),F=a.el.querySelector('.beae-variant-option-list[data-option-position="2"] .beae-product-variant-item[data-unavailable="false"]');!Z&&F&&F.click()}if(q&&q.length){a.el.querySelector('.beae-variant-option-list[data-option-position="3"] .beae-product-variant-item--selected[data-unavailable="false"]');const Z=a.el.querySelector('.beae-variant-option-list[data-option-position="3"] .beae-product-variant-item[data-unavailable="false"]');Z&&Z.click()}}T()},E=!0,P=!1,H=m.querySelector('select[name="id"]'),z=!0;a.el.addEventListener("activeVariant",function(O){if(z){z=!1;return}if(t){t=!1;return}if(!o.variants||!O.detail.id||r&&r.featured_media&&O.detail.id==r.featured_media.id)return;const I=o.variants.find(A=>!A||!A.featured_media||!A.featured_media.id||!O.detail.id?!1:A.featured_media.id==O.detail.id);!I||r.id==I.id||(V(I),N(I),r=I,y(I),h(I),g(I),M(I),c(I),d(I),l(I),u(I),s(I),p(I))});const R=H&&H.getAttribute("id");if(H&&window.Shopify&&window.Shopify.OptionSelectors){let O=function(I){var F;E=!1;const A=parseInt(I.getAttribute("data-option-position"))-1,D=m.querySelector("select#"+R+"-option-"+A);let j=I.getAttribute("data-value")??I.value,q="";try{q=decodeURIComponent(j)}catch{q=j}if(D){const U=((F=I.parentElement)==null?void 0:F.children)??[];for(let G=0;G<U.length;G++)U[G].classList.remove("beae-product-variant-item--selected");I.classList.add("beae-product-variant-item--selected"),D.value=q,D.onchange()}const Z=I.closest(".beae-custom-select_wrp");if(Z){const U=I.getAttribute("data-color"),G=Z.querySelector(".beae-selected-color");G&&(G.style="--beae-color-variant: "+U);const W=Z.querySelector(".beae-text-selected");W&&(W.innerHTML=q)}};new window.Shopify.OptionSelectors(R,{product:o,onVariantSelected:L,enableHistoryState:a.mode.value=="live"}),m.querySelectorAll(".beae-product-variant-item").forEach(I=>{if(I.querySelector("a.beae-variant--link"))return;const A=I.getAttribute("data-link");I.addEventListener("click",D=>{if(D.target.closest(".beae-product-variant-item-image")){if(A&&A!=="#"){window.location.href=A;return}P=!0,O(I);return}(!A||A==="#")&&(P=!1,O(I),C())})})}}else S=!0;o.has_only_default_variant&&(S=!0),S&&B();function B(){r&&((r==null?void 0:r.title)=="Default Title"&&(r=o.variants[0]),y(r),h(r),g(r),d(r),l(r))} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-1tuhov7q: ', ex)
      };
    

      try {
        let argid = 'beae-pm5uldgublock-gallery',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-pm5uldgu',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-pm5uldgu');
        args.el = args.els[0];
        ((a) => { setTimeout(()=>{a.el.querySelector("button.beae-media-zoom")&&a.el.querySelectorAll("button.beae-media-zoom").forEach(n=>n.addEventListener("click",t=>{a.mode.value,n.closest(".beae-slider-items")&&(a.el.querySelectorAll(".beae-slider-items>*.active").forEach(b=>b.classList.remove("active")),n.parentNode.classList.add("active"));let o=document.createElement("div"),r=a.el.querySelectorAll("div.beae-slider-items > *"),s=a.el.querySelector("div.beae-slider-content").getBoundingClientRect();o.setAttribute("class","beae-sections beae-content-wrapper"),o.innerHTML=`
        <div class="${a.id}">
          <div class="beae-gallery-zoom">
            <div class="beae-gallery-zoom-content" style="transform-origin: ${s.left}px ${s.top+s.height/2}px;">
              <div class="beae-gallery-zoom-items">
                ${Array.from(r).map((b,C)=>{const m=b.getAttribute("type");return!m||(m==null?void 0:m.toLowerCase())!="image"?"":`
                    <div class="beae-gallery-zoom-item${b.classList.contains("active")?" active":""}" style="${b.classList.contains("active")?"order: -1;":""}">
                      ${b.innerHTML}
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
      `,document.body.appendChild(o),document.body.style.overflow="hidden";let p=o.querySelector("button.beae-gallery-zoom-close"),c=o.querySelector(".beae-gallery-zoom"),d=o.querySelector(".beae-gallery-zoom-content"),l=o.querySelector(".beae-gallery-zoom-pagination .pagination_item.per"),v=o.querySelector(".pagination_item.prev"),y=o.querySelector(".pagination_item.next"),g=o.querySelectorAll(".beae-gallery-zoom-item"),h=o.querySelector(".beae-gallery-zoom-controls"),u=()=>{let b=o.querySelector(".beae-gallery-zoom-item.active"),C=0;Array.from(r).forEach(m=>{var _;((_=m.getAttribute("type"))==null?void 0:_.toLowerCase())=="image"&&C++}),C<2?h.style.display="none":h.style.display="flex",l.textContent=`${Array.from(o.querySelectorAll(".beae-gallery-zoom-item")).indexOf(b)+1} / ${C}`};u(),p.addEventListener("click",b=>{c.classList.remove("opened")}),o.querySelectorAll(".beae-gallery-zoom-item img").forEach(b=>{b.addEventListener("mousemove",C=>{b.parentNode.classList.contains("beae-gallery-zoom-more")?b.parentNode.classList.contains("beae-gallery-zoom-more")&&(b.style.objectFit==="cover"?b.style.objectPosition=100*(C.clientX/b.offsetWidth)+"% "+100*((C.clientY-b.offsetTop)/b.offsetHeight)+"%":b.style.objectPosition&&(b.style.objectPosition="")):(b.parentNode.classList.add("beae-gallery-zoom-more"),b.style.cursor="zoom-in",b.addEventListener("click",m=>{b.style.objectFit==="cover"?(b.style.objectFit="contain",m.target.style.transition="",b.style.cursor="zoom-in",b.style.objectPosition=""):(b.style.objectFit="cover",b.style.cursor="zoom-out",b.style.objectPosition=100*(m.clientX/b.offsetWidth)+"% "+100*((m.clientY-b.offsetTop)/b.offsetHeight)+"%")}))})}),c.addEventListener("transitionend",b=>{b.propertyName==="opacity"&&(c.classList.contains("opened")?(p.style.opacity=1,o.querySelectorAll(".beae-gallery-zoom-item img").forEach(C=>{C.removeAttribute("srcset"),C.removeAttribute("sizes")}),o.querySelector(".beae-gallery-zoom-item.active").style.order="",d.scrollTo({left:o.querySelector(".beae-gallery-zoom-item.active").offsetLeft})):(o.remove(),document.body.style.overflow=""))});let f=0;d.addEventListener("scroll",b=>{clearTimeout(f),f=setTimeout(()=>{g.forEach(C=>{Math.abs(b.target.scrollLeft-C.offsetLeft)<2?(C.classList.add("active"),u()):C.classList.remove("active")})},250)}),v.addEventListener("click",()=>{let b=o.querySelector(".beae-gallery-zoom-item.active");if(b.previousElementSibling)b.previousElementSibling.classList.add("active");else if(g[g.length-1]&&g.length>1)g[g.length-1].classList.add("active");else return;b.classList.remove("active"),d.scrollTo({behavior:"smooth",left:o.querySelector(".beae-gallery-zoom-item.active").offsetLeft}),u()}),y.addEventListener("click",()=>{let b=o.querySelector(".beae-gallery-zoom-item.active");if(b&&b.nextElementSibling)b.nextElementSibling.classList.add("active");else if(g[0]&&g.length>1)g[0].classList.add("active");else return;b.classList.remove("active"),d.scrollTo({behavior:"smooth",left:o.querySelector(".beae-gallery-zoom-item.active").offsetLeft}),u()}),setTimeout(()=>{c.classList.add("opened")},10)}))},1e3) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-pm5uldgu: ', ex)
      };
    

      try {
        let argid = 'beae-pm5uldgusection-slide-show',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-pm5uldgu',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-pm5uldgu');
        args.el = args.els[0];
        ((h) => { window.BeaeSlider&&!h.noRunJs&&window.BeaeSlider(h) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-pm5uldgu: ', ex)
      };
    

      try {
        let argid = 'beae-lp0hcud8block-tabs',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-lp0hcud8',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-lp0hcud8');
        args.el = args.els[0];
        ((data) => { const prefixClass=`div[data-id=${data.id}] > .beae-tab-wrp`;let tabs=data.el.querySelectorAll(`${prefixClass} > .beae-tab-items > .beae-tab-item`),contents=data.el.querySelectorAll(`${prefixClass} > .beae-tab-contents > .beae-tab-content`),rightside=data.el.querySelectorAll(`${prefixClass} .beae-rightside`),accordions=data.el.querySelectorAll(`${prefixClass} > .beae-tab-contents > .beae-tab-content > .beae-accordion-title--mobile`),activeTab=window.outerWidth&&window.outerWidth<=768?data.activeTabMobile:data.activeTab,toggleImg=data.toggleImg,layout=data.layout,accordionMode=data.accordionMode;function resetActive(){tabs.forEach(f=>f.classList.remove("active")),contents.forEach(f=>f.classList.remove("active")),accordions.forEach(f=>f.classList.remove("active")),toggleImg&&rightside.forEach(f=>f.classList.remove("active")),contents.forEach(f=>{const b=f.querySelector(".beae-accordion-body").style;layout=="accordions"?b.maxHeight="0px":(b.transform="scaleY(0)",b.opacity="0")})}function setActive(f){tabs[f].classList.add("active"),contents[f].classList.add("active"),accordions[f].classList.add("active"),toggleImg&&rightside[f].classList.add("active");const b=contents[f].querySelector(".beae-accordion-body");if(b){const C=b.style;layout=="accordions"?C.maxHeight=data.mode.value=="builder"?"":b.scrollHeight+"px":(C.transform="scaleY(1)",C.transformOrigin="top center",C.opacity="1")}}function removeActive(f){tabs[f].classList.remove("active"),contents[f].classList.remove("active"),accordions[f].classList.remove("active"),toggleImg&&rightside[f].classList.remove("active");const b=contents[f].querySelector(".beae-accordion-body").style;layout=="accordions"?b.maxHeight="0px":(b.transform="scaleY(0)",b.opacity="0")}resetActive(),activeTab!=="none"&&accordionMode!="popup"&&setActive(activeTab),tabs.forEach((f,b)=>{f.addEventListener("click",()=>{resetActive(),setActive(b)})});const section=data.el.closest("section.beae-section");let sectionId="";section&&(sectionId=section.getAttribute("data-sectionid"));let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(f){extOptions={},console.error(f)}if(accordions.forEach((f,b)=>{f.addEventListener("click",()=>{if(accordionMode=="popup"&&data.mode.value!="builder"){const C=f.closest(".beae-tab-content");if(C){let m=document.createElement("div");m.innerHTML=`
                            <h3 class="beae-popup__content-title">${f.querySelector("span").innerHTML}</h3>
                            <div class="beae-popup__content-body ${data.id}">${C.querySelector(".beae-accordion-body").innerHTML}</div>
                            `,window.BeaePopupLibrary.createPopup(m,{layout:extOptions.layout?extOptions.layout:"right",width:extOptions.width?extOptions.width:"400px",layoutMobile:extOptions.layoutMobile?extOptions.layoutMobile:"bottom",sectionId})}}else accordionMode=="single"?(resetActive(),setActive(b)):f.classList.contains("active")?removeActive(b):setActive(b)})}),layout=="tabs"){const f=data.el.querySelector(".beae-tab-contents"),b=f.querySelectorAll(".beae-tab-content-wrp");let C=0,m=-1;b.forEach((S,B)=>{const k=S.offsetHeight;k>C&&(m=B,C=k)}),new ResizeObserver(()=>{f.style.setProperty("--beae-tabs-max-height",`${b[m].offsetHeight}px`)}).observe(b[m])} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-lp0hcud8: ', ex)
      };
    

      try {
        let argid = 'beae-r49hjnvhblock-description',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-r49hjnvh',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-r49hjnvh');
        args.el = args.els[0];
        ((data) => { if(data.hasDescription=="false"){data.mode.value=="live"&&(data.el.style.display="none");return}if(window.isPreviewTemplate){const v=data.el.closest(".beae-x-featuted_product");if(v){const y=v.parentElement.querySelector('script[data-id^="Product-json-"]')||v.parentElement.querySelector('script[id^="Product-json-"]'),g=JSON.parse(y!=null&&y.innerHTML?y==null?void 0:y.innerHTML:"{}");g&&!g.description&&(data.el.style.display="none")}}const content=data.el.querySelector(".beae-des-content");if(content){if(data.type=="collapsible_tab"){const v=data.el.querySelector(".beae-des-accordion");v&&content&&(v.addEventListener("click",()=>{content&&(v.classList.contains("active")?(v.classList.remove("active"),content.style.maxHeight="0"):(v.classList.add("active"),content.style.maxHeight=content.scrollHeight+"px"))}),data.active&&v.click())}else if(data.type=="show_with_popup"){const header=data.el.querySelector(".beae-des-popup > span"),buttonLightbox=data.el.querySelector(".beae-des-popup");if(buttonLightbox&&content){const section=data.el.closest("section.beae-section");let sectionId="";section&&(sectionId=section.getAttribute("data-sectionid"));let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(v){extOptions={},console.error(v)}buttonLightbox.addEventListener("click",()=>{window.BeaePopupLibrary.createPopup('<h3 class="beae-popup__content-title">'+header.innerHTML+'</h3><div class="beae-popup__content-body">'+content.innerHTML+"</div>",{layout:extOptions.layout?extOptions.layout:"right",width:extOptions.width?extOptions.width:"400px",layoutMobile:extOptions.layoutMobile?extOptions.layoutMobile:"bottom",sectionId})})}}else if(data.type=="less_more"){let v=function(y,g,h,u){function f(){u&&y&&h&&(u.offsetHeight>parseFloat(h.split("px")[0])?y.style.display="block":y.style.display="none")}f(),u&&new ResizeObserver(()=>{f()}).observe(u),g&&(g.style.height=h),y&&g&&!y.dataset.listenerAttached&&(y.addEventListener("click",()=>{y.getAttribute("data-type")=="more"?(g.classList.remove("beae-show-more"),g.style.height=h,y.setAttribute("data-type","less"),y.innerHTML=y.getAttribute("data-show-more-text")):(g.classList.add("beae-show-more"),g.style.height=g.scrollHeight+"px",setTimeout(()=>{g.style={}},100),y.setAttribute("data-type","more"),y.innerHTML=y.getAttribute("data-show-less-text"))}),y.dataset.listenerAttached="true",data.active&&y.click())};for(let y=0;y<data.els.length;y++){const g=data.els[y].querySelector(".btn-action-les-more"),h=data.els[y].querySelector(".beae-less-more"),u=h&&h.getAttribute("data-height"),f=h&&h.querySelector(".beae-des-content");(data.mode.value=="builder"&&y==data.loopIndex||data.mode.value=="live")&&v(g,h,u,f)}}}else data.els.forEach(v=>{if(!v)return;const y=v.querySelector(".beae-x-product-short-des");if(y.getAttribute("data-type")=="text"&&y.getAttribute("data-show")=="false"){const g=y.textContent;y.innerHTML=convertStringWithDifferentWordCount(g,data.numberOfWords)}});function convertStringWithDifferentWordCount(v,y){const h=v.split(" ").slice(0,y);return v.split(" ").length>y?h.concat("...").join(" "):h.join(" ")} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-r49hjnvh: ', ex)
      };
    

      try {
        let argid = 'beae-8o7mfae1section-slide-show',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-8o7mfae1',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-8o7mfae1');
        args.el = args.els[0];
        ((h) => { window.BeaeSlider&&!h.noRunJs&&window.BeaeSlider(h) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-8o7mfae1: ', ex)
      };
    

      try {
        let argid = 'beae-nriwc6v6block-textloop-0',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-nriwc6v6',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-nriwc6v6');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-nriwc6v6: ', ex)
      };
    

      try {
        let argid = 'beae-6x0wldhoblock-textloop-0',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-6x0wldho',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-6x0wldho');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-6x0wldho: ', ex)
      };
    

      try {
        let argid = 'beae-nriwc6v6block-textloop-1',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-nriwc6v6',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-nriwc6v6');
        args.el = args.els[1];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-nriwc6v6: ', ex)
      };
    

      try {
        let argid = 'beae-6x0wldhoblock-textloop-1',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-6x0wldho',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-6x0wldho');
        args.el = args.els[1];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-6x0wldho: ', ex)
      };
    

      try {
        let argid = 'beae-nriwc6v6block-textloop-2',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-nriwc6v6',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-nriwc6v6');
        args.el = args.els[2];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-nriwc6v6: ', ex)
      };
    

      try {
        let argid = 'beae-6x0wldhoblock-textloop-2',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-6x0wldho',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-6x0wldho');
        args.el = args.els[2];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-6x0wldho: ', ex)
      };
    

      try {
        let argid = 'beae-nriwc6v6block-textloop-3',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-nriwc6v6',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-nriwc6v6');
        args.el = args.els[3];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-nriwc6v6: ', ex)
      };
    

      try {
        let argid = 'beae-6x0wldhoblock-textloop-3',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-6x0wldho',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-6x0wldho');
        args.el = args.els[3];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-6x0wldho: ', ex)
      };
    

      try {
        let argid = 'beae-y1iao1tnblock-gallery',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-y1iao1tn',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-y1iao1tn');
        args.el = args.els[0];
        ((a) => { setTimeout(()=>{a.el.querySelector("button.beae-media-zoom")&&a.el.querySelectorAll("button.beae-media-zoom").forEach(n=>n.addEventListener("click",t=>{a.mode.value,n.closest(".beae-slider-items")&&(a.el.querySelectorAll(".beae-slider-items>*.active").forEach(b=>b.classList.remove("active")),n.parentNode.classList.add("active"));let o=document.createElement("div"),r=a.el.querySelectorAll("div.beae-slider-items > *"),s=a.el.querySelector("div.beae-slider-content").getBoundingClientRect();o.setAttribute("class","beae-sections beae-content-wrapper"),o.innerHTML=`
        <div class="${a.id}">
          <div class="beae-gallery-zoom">
            <div class="beae-gallery-zoom-content" style="transform-origin: ${s.left}px ${s.top+s.height/2}px;">
              <div class="beae-gallery-zoom-items">
                ${Array.from(r).map((b,C)=>{const m=b.getAttribute("type");return!m||(m==null?void 0:m.toLowerCase())!="image"?"":`
                    <div class="beae-gallery-zoom-item${b.classList.contains("active")?" active":""}" style="${b.classList.contains("active")?"order: -1;":""}">
                      ${b.innerHTML}
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
      `,document.body.appendChild(o),document.body.style.overflow="hidden";let p=o.querySelector("button.beae-gallery-zoom-close"),c=o.querySelector(".beae-gallery-zoom"),d=o.querySelector(".beae-gallery-zoom-content"),l=o.querySelector(".beae-gallery-zoom-pagination .pagination_item.per"),v=o.querySelector(".pagination_item.prev"),y=o.querySelector(".pagination_item.next"),g=o.querySelectorAll(".beae-gallery-zoom-item"),h=o.querySelector(".beae-gallery-zoom-controls"),u=()=>{let b=o.querySelector(".beae-gallery-zoom-item.active"),C=0;Array.from(r).forEach(m=>{var _;((_=m.getAttribute("type"))==null?void 0:_.toLowerCase())=="image"&&C++}),C<2?h.style.display="none":h.style.display="flex",l.textContent=`${Array.from(o.querySelectorAll(".beae-gallery-zoom-item")).indexOf(b)+1} / ${C}`};u(),p.addEventListener("click",b=>{c.classList.remove("opened")}),o.querySelectorAll(".beae-gallery-zoom-item img").forEach(b=>{b.addEventListener("mousemove",C=>{b.parentNode.classList.contains("beae-gallery-zoom-more")?b.parentNode.classList.contains("beae-gallery-zoom-more")&&(b.style.objectFit==="cover"?b.style.objectPosition=100*(C.clientX/b.offsetWidth)+"% "+100*((C.clientY-b.offsetTop)/b.offsetHeight)+"%":b.style.objectPosition&&(b.style.objectPosition="")):(b.parentNode.classList.add("beae-gallery-zoom-more"),b.style.cursor="zoom-in",b.addEventListener("click",m=>{b.style.objectFit==="cover"?(b.style.objectFit="contain",m.target.style.transition="",b.style.cursor="zoom-in",b.style.objectPosition=""):(b.style.objectFit="cover",b.style.cursor="zoom-out",b.style.objectPosition=100*(m.clientX/b.offsetWidth)+"% "+100*((m.clientY-b.offsetTop)/b.offsetHeight)+"%")}))})}),c.addEventListener("transitionend",b=>{b.propertyName==="opacity"&&(c.classList.contains("opened")?(p.style.opacity=1,o.querySelectorAll(".beae-gallery-zoom-item img").forEach(C=>{C.removeAttribute("srcset"),C.removeAttribute("sizes")}),o.querySelector(".beae-gallery-zoom-item.active").style.order="",d.scrollTo({left:o.querySelector(".beae-gallery-zoom-item.active").offsetLeft})):(o.remove(),document.body.style.overflow=""))});let f=0;d.addEventListener("scroll",b=>{clearTimeout(f),f=setTimeout(()=>{g.forEach(C=>{Math.abs(b.target.scrollLeft-C.offsetLeft)<2?(C.classList.add("active"),u()):C.classList.remove("active")})},250)}),v.addEventListener("click",()=>{let b=o.querySelector(".beae-gallery-zoom-item.active");if(b.previousElementSibling)b.previousElementSibling.classList.add("active");else if(g[g.length-1]&&g.length>1)g[g.length-1].classList.add("active");else return;b.classList.remove("active"),d.scrollTo({behavior:"smooth",left:o.querySelector(".beae-gallery-zoom-item.active").offsetLeft}),u()}),y.addEventListener("click",()=>{let b=o.querySelector(".beae-gallery-zoom-item.active");if(b&&b.nextElementSibling)b.nextElementSibling.classList.add("active");else if(g[0]&&g.length>1)g[0].classList.add("active");else return;b.classList.remove("active"),d.scrollTo({behavior:"smooth",left:o.querySelector(".beae-gallery-zoom-item.active").offsetLeft}),u()}),setTimeout(()=>{c.classList.add("opened")},10)}))},1e3) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-y1iao1tn: ', ex)
      };
    

      try {
        let argid = 'beae-y1iao1tnsection-slide-show',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-y1iao1tn',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-y1iao1tn');
        args.el = args.els[0];
        ((h) => { window.BeaeSlider&&!h.noRunJs&&window.BeaeSlider(h) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-y1iao1tn: ', ex)
      };
    

      try {
        let argid = 'beae-giymfsioblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-giymfsio',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-giymfsio');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-giymfsio: ', ex)
      };
    

      try {
        let argid = 'beae-5u10iup3block-buy',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-5u10iup3',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-5u10iup3');
        args.el = args.els[0];
        ((d) => { d.els&&d.els.forEach(l=>{const v=l.querySelector('.beae-quantity-btn[name="plus"]'),y=l.querySelector('.beae-quantity-btn[name="minus"]'),g=l.querySelector(".beae-quantity-input");v&&y&&g&&(g.value===""&&(g.value="1"),v.addEventListener("click",function(){v.getAttribute("disabled")!="disabled"&&g.stepUp()}),y.addEventListener("click",function(){y.getAttribute("disabled")!="disabled"&&g.stepDown()}))}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-5u10iup3: ', ex)
      };
    

      try {
        let argid = 'beae-a8ycyqcmblock-add-to-cart',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-a8ycyqcm',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-a8ycyqcm');
        args.el = args.els[0];
        ((_) => { if(_.mode.value=="builder"){if(!_.els)return;for(let S=0;S<_.els.length;S++)if(S==_.loopIndex){const B=_.els[S].closest("form.beae-product-form-next");if(!B)return;const k=B.querySelector(".beae-add-to-cart--submit"),$=B.getAttribute("data-product_id"),w=B.querySelector('script[data-id="Product-json-'+$+'"]')||B.querySelector("#Product-json-"+$),M=JSON.parse(w!=null&&w.innerHTML?w==null?void 0:w.innerHTML:"{}").variants||[];let V=B.getAttribute("data-variant-id"),L=M[0];V&&(L=M.find(N=>N.id==V));const T=k.querySelector(".beae-add-to-cart-text-content");L!=null&&L.available?T&&(M.length>1?T.innerHTML=k.getAttribute("data-choose-options-text"):T.innerHTML=k.getAttribute("data-add-to-cart-text")):T&&(T.innerHTML=k.getAttribute("data-sold-out-text"))}} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-a8ycyqcm: ', ex)
      };
    

      try {
        let argid = 'beae-z5khyc84',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-z5khyc84',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-z5khyc84');
        args.el = args.els[0];
        ((k) => { setTimeout(()=>{const $=k.el.querySelector(".shopify-payment-button__button","");$&&$.classList.add(k.buyItNowType)},1e3) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-z5khyc84: ', ex)
      };
    

      try {
        let argid = 'beae-ukso3k9kblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-ukso3k9k',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-ukso3k9k');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-ukso3k9k: ', ex)
      };
    

      try {
        let argid = 'beae-d5awna9nblock-tabs',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-d5awna9n',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-d5awna9n');
        args.el = args.els[0];
        ((data) => { const prefixClass=`div[data-id=${data.id}] > .beae-tab-wrp`;let tabs=data.el.querySelectorAll(`${prefixClass} > .beae-tab-items > .beae-tab-item`),contents=data.el.querySelectorAll(`${prefixClass} > .beae-tab-contents > .beae-tab-content`),rightside=data.el.querySelectorAll(`${prefixClass} .beae-rightside`),accordions=data.el.querySelectorAll(`${prefixClass} > .beae-tab-contents > .beae-tab-content > .beae-accordion-title--mobile`),activeTab=window.outerWidth&&window.outerWidth<=768?data.activeTabMobile:data.activeTab,toggleImg=data.toggleImg,layout=data.layout,accordionMode=data.accordionMode;function resetActive(){tabs.forEach(f=>f.classList.remove("active")),contents.forEach(f=>f.classList.remove("active")),accordions.forEach(f=>f.classList.remove("active")),toggleImg&&rightside.forEach(f=>f.classList.remove("active")),contents.forEach(f=>{const b=f.querySelector(".beae-accordion-body").style;layout=="accordions"?b.maxHeight="0px":(b.transform="scaleY(0)",b.opacity="0")})}function setActive(f){tabs[f].classList.add("active"),contents[f].classList.add("active"),accordions[f].classList.add("active"),toggleImg&&rightside[f].classList.add("active");const b=contents[f].querySelector(".beae-accordion-body");if(b){const C=b.style;layout=="accordions"?C.maxHeight=data.mode.value=="builder"?"":b.scrollHeight+"px":(C.transform="scaleY(1)",C.transformOrigin="top center",C.opacity="1")}}function removeActive(f){tabs[f].classList.remove("active"),contents[f].classList.remove("active"),accordions[f].classList.remove("active"),toggleImg&&rightside[f].classList.remove("active");const b=contents[f].querySelector(".beae-accordion-body").style;layout=="accordions"?b.maxHeight="0px":(b.transform="scaleY(0)",b.opacity="0")}resetActive(),activeTab!=="none"&&accordionMode!="popup"&&setActive(activeTab),tabs.forEach((f,b)=>{f.addEventListener("click",()=>{resetActive(),setActive(b)})});const section=data.el.closest("section.beae-section");let sectionId="";section&&(sectionId=section.getAttribute("data-sectionid"));let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(f){extOptions={},console.error(f)}if(accordions.forEach((f,b)=>{f.addEventListener("click",()=>{if(accordionMode=="popup"&&data.mode.value!="builder"){const C=f.closest(".beae-tab-content");if(C){let m=document.createElement("div");m.innerHTML=`
                            <h3 class="beae-popup__content-title">${f.querySelector("span").innerHTML}</h3>
                            <div class="beae-popup__content-body ${data.id}">${C.querySelector(".beae-accordion-body").innerHTML}</div>
                            `,window.BeaePopupLibrary.createPopup(m,{layout:extOptions.layout?extOptions.layout:"right",width:extOptions.width?extOptions.width:"400px",layoutMobile:extOptions.layoutMobile?extOptions.layoutMobile:"bottom",sectionId})}}else accordionMode=="single"?(resetActive(),setActive(b)):f.classList.contains("active")?removeActive(b):setActive(b)})}),layout=="tabs"){const f=data.el.querySelector(".beae-tab-contents"),b=f.querySelectorAll(".beae-tab-content-wrp");let C=0,m=-1;b.forEach((S,B)=>{const k=S.offsetHeight;k>C&&(m=B,C=k)}),new ResizeObserver(()=>{f.style.setProperty("--beae-tabs-max-height",`${b[m].offsetHeight}px`)}).observe(b[m])} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-d5awna9n: ', ex)
      };
    

      try {
        let argid = 'beae-z6l25i9kblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-z6l25i9k',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-z6l25i9k');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-z6l25i9k: ', ex)
      };
    

      try {
        let argid = 'beae-ufd7nyo0block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-ufd7nyo0',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-ufd7nyo0');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-ufd7nyo0: ', ex)
      };
    

      try {
        let argid = 'beae-p4rhksviblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-p4rhksvi',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-p4rhksvi');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-p4rhksvi: ', ex)
      };
    

      try {
        let argid = 'beae-b5ix3007block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-b5ix3007',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-b5ix3007');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-b5ix3007: ', ex)
      };
    

      try {
        let argid = 'beae-uwg9zimqblock-image',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-uwg9zimq',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-uwg9zimq');
        args.el = args.els[0];
        ((M) => { var P;if(M.el){if(M.shape){const O=M.el.closest(".beae-slider-items");O&&!O.hasAttribute("data-svg")&&(O==null||O.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${M.id}" clipPathUnits="objectBoundingBox">
                                ${M.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),O.setAttribute("data-svg","true"))}let H=M.el.querySelector(".beae-image-content-position"),z,R=window.innerWidth>=768&&M.autoHover;var V=H.querySelector(".beae-img-ratio-control"),L=H.querySelector(".beae-img-comp-container"),T=H.querySelector(".beae-img-comp-container--second");if(V&&T){let O=function(I){let A=0,D;j(),R?H.onmouseover=function(W){q(W)}:I.onmousedown=function(W){q(W)},H.onmouseup=function(){Z()},I.ontouchstart=function(W){q(W)},H.ontouchend=function(){Z()};function j(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{z=T.offsetWidth})}).observe(T),I.style.left&&parseInt(I.style.left)}function q(W){check=!1,W.preventDefault(),W.clientX?W.clientX:W.touches[0].clientX,parseInt(I.style.left),A=1,H.onmousemove=function(Y){F(Y)},H.ontouchmove=function(Y){F(Y)}}function Z(){A=0,check=!0}function F(W){if(A==0)return!1;D=U(W),D<0&&(D=0),D>100&&(D=100),G(D)}function U(W){const Y=H.getBoundingClientRect(),oe=(W.changedTouches?W.changedTouches[0].clientX:W.clientX)-Y.left;return Math.max(0,Math.min(100,Math.round(oe*100/z)))}function G(W){I.style.left=W+"%",T.style.clipPath=`polygon(${W}% 0%, ${W}% 100%, 100% 100%, 100% 0)`,L.style.clipPath=`polygon(0% 100%, 0% 0%, ${W}% 0%, ${W}% 100%)`}};V&&T&&O(V),window.addEventListener("resize",function(){V&&T&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{z=T.offsetWidth})}).observe(T),O(V))})}}let N=(P=M.el)==null?void 0:P.querySelector("a.beae-x-image"),E=N==null?void 0:N.getAttribute("href");N&&M.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&N.addEventListener("click",H=>{let z=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(z)return z.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),H.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-uwg9zimq: ', ex)
      };
    

      try {
        let argid = 'beae-oiw5qa22block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-oiw5qa22',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-oiw5qa22');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-oiw5qa22: ', ex)
      };
    

      try {
        let argid = 'beae-86kuy33vblock-share',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-86kuy33v',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-86kuy33v');
        args.el = args.els[0];
        ((l) => { const v=window.location.href;if(l.type=="label_with_icon"){if(l.mode.value=="live"){let g=function(u){switch(u){case"facebook":return"https://www.facebook.com/sharer/sharer.php?u=";case"twitter":return"https://twitter.com/intent/tweet?url=";case"linkedIn":return"https://www.linkedin.com/shareArticle?mini=true&url=";case"pinterest":return"https://pinterest.com/pin/create/button/?url=";case"reddit":return"https://reddit.com/submit?url=";case"skype":return"https://web.skype.com/share?url=";case"telegram":return"https://t.me/share/url?url=";case"whatsApp":return"https://api.whatsapp.com/send/?phone&text=";case"email":return"mailto:?&subject=&cc=&bcc=&body=";default:return"#"}};const h=l.el.querySelectorAll(".beae-share-link");h.length>0&&h.forEach((u,f)=>{let b=u.getAttribute("type"),C="";C=g(b)+v,u.setAttribute("href",C)})}}else if(l.type=="copy_link"){const g=l.el.querySelector(".beae-share-wrp");g.onclick=()=>{window.navigator.clipboard.writeText(v),y()}}else{const g=l.el.querySelector(".beae-share-wrp"),h=l.el.querySelector(".beae-share-link-copy-link");if(h&&(h.innerHTML=v),navigator.share)g.addEventListener("click",()=>{navigator.share({url:v,title:document.title})});else{const u=l.el.querySelector(".beae-share--container");l.el.querySelector(".beae-share-link-copy-btn").addEventListener("click",()=>{window.navigator.clipboard.writeText(v),y(),u.classList.remove("active")}),g.addEventListener("click",()=>{u.classList.toggle("active")}),document.addEventListener("click",function(b){u.contains(b.target)||u.classList.remove("active")})}}function y(){const g=l.el.querySelector(".beae-share--toast");g&&(g.classList.add("active"),setTimeout(()=>{g.classList.remove("active")},1e3))} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-86kuy33v: ', ex)
      };
    

      try {
        let argid = 'beae-esflnh6lsection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-esflnh6l',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-esflnh6l');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-esflnh6l: ', ex)
      };
    

      try {
        let argid = 'beae-6s4n8i3xsection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-6s4n8i3x',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-6s4n8i3x');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-6s4n8i3x: ', ex)
      };
    

      try {
        let argid = 'beae-0lgtmzndblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-0lgtmznd',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-0lgtmznd');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-0lgtmznd: ', ex)
      };
    

      try {
        let argid = 'beae-8q7ieglmblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-8q7ieglm',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-8q7ieglm');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-8q7ieglm: ', ex)
      };
    

      try {
        let argid = 'beae-zf3514uesection-featured-collection',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-zf3514ue',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-zf3514ue');
        args.el = args.els[0];
        ((a) => { var c;window.BeaeMoneyFormat||(window.BeaeMoneyFormat=(c=a.el.querySelector(".beae-money-format"))==null?void 0:c.innerHTML);let n=a.el.querySelectorAll(".beae-featuted-collection-nav");const t=a.el.querySelectorAll(".beae-feature-collection-tab-content"),o=a.el.querySelector(".beae-featuted-collection-nav.nav-active"),r=a.el.closest(".beae-body--preview");n.forEach((d,l)=>{a.mode.value=="live"&&!o&&(l===0?(d.classList.add("nav-active"),t[l]&&(t[l].style.display="block",t[l].setAttribute("data-active","true"))):(d.classList.remove("nav-active"),t[l]&&(t[l].style.display="none",t[l].setAttribute("data-active","false"))));let v=!1;d.addEventListener("click",()=>{if(v)return;v=!0,n.forEach(f=>{f.classList.remove("nav-active")}),d.classList.add("nav-active");const y=d.getAttribute("data-handle"),g=a.el.querySelectorAll(".viewall-link");g&&g.forEach(f=>{f.setAttribute("href",`/collections/${y}`)});const h=a.el.querySelector(`.beae-feature-collection-tab-content[data-handle="${y}"]`),u=a.el.querySelector('.beae-feature-collection-tab-content[data-active="true"]');if(a.el.querySelector(".beae-feature-collection-tab-content.content-active")!==null&&a.el.querySelector(".beae-feature-collection-tab-content.content-active").classList.remove("content-active"),u){u.setAttribute("data-active","false");const f=s(u);setTimeout(()=>{u.style.display="none",h&&(h.style.display="block"),setTimeout(()=>{h&&h.setAttribute("data-active","true"),v=!1},50)},f)}else h&&(h.style.display="block"),setTimeout(()=>{h&&h.setAttribute("data-active","true"),v=!1},50)})});function s(d){const v=window.getComputedStyle(d).getPropertyValue("transition-duration");let y=parseFloat(v)*1e3;return v.includes("s")?y=parseFloat(v)*1e3:y=parseFloat(v),y||0}setTimeout(()=>{typeof window.handleSwatchForCardForm=="function"&&window.handleSwatchForCardForm(a),typeof(a==null?void 0:a.promotionPosition)=="number"&&p(a==null?void 0:a.promotionPosition)},100),(["builder"].includes(a.mode.value)||r)&&setTimeout(()=>{typeof window.handleEventFormProductCard=="function"&&window.handleEventFormProductCard()},100);function p(d){if(a.mode.value!="live")return;const l=a.el.querySelectorAll(".beae-slider-items");if(l&&l.length){l.forEach(y=>{const g=a.el.querySelector(".beae-promotion > *");if(!g)return;const h=g.cloneNode(!0),u=y.children;d>=u.length?y.appendChild(h):y.insertBefore(h,u[d])});const v=a.el.querySelector(".beae-promotion");v&&v.remove()}} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-zf3514ue: ', ex)
      };
    

      try {
        let argid = 'beae-zf3514uesection-slide-show',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-zf3514ue',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-zf3514ue');
        args.el = args.els[0];
        ((h) => { window.BeaeSlider&&!h.noRunJs&&window.BeaeSlider(h) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-zf3514ue: ', ex)
      };
    

      try {
        let argid = 'beae-vivgy6xqblock-image',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-vivgy6xq',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-vivgy6xq');
        args.el = args.els[0];
        ((M) => { var P;if(M.el){if(M.shape){const O=M.el.closest(".beae-slider-items");O&&!O.hasAttribute("data-svg")&&(O==null||O.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${M.id}" clipPathUnits="objectBoundingBox">
                                ${M.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),O.setAttribute("data-svg","true"))}let H=M.el.querySelector(".beae-image-content-position"),z,R=window.innerWidth>=768&&M.autoHover;var V=H.querySelector(".beae-img-ratio-control"),L=H.querySelector(".beae-img-comp-container"),T=H.querySelector(".beae-img-comp-container--second");if(V&&T){let O=function(I){let A=0,D;j(),R?H.onmouseover=function(W){q(W)}:I.onmousedown=function(W){q(W)},H.onmouseup=function(){Z()},I.ontouchstart=function(W){q(W)},H.ontouchend=function(){Z()};function j(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{z=T.offsetWidth})}).observe(T),I.style.left&&parseInt(I.style.left)}function q(W){check=!1,W.preventDefault(),W.clientX?W.clientX:W.touches[0].clientX,parseInt(I.style.left),A=1,H.onmousemove=function(Y){F(Y)},H.ontouchmove=function(Y){F(Y)}}function Z(){A=0,check=!0}function F(W){if(A==0)return!1;D=U(W),D<0&&(D=0),D>100&&(D=100),G(D)}function U(W){const Y=H.getBoundingClientRect(),oe=(W.changedTouches?W.changedTouches[0].clientX:W.clientX)-Y.left;return Math.max(0,Math.min(100,Math.round(oe*100/z)))}function G(W){I.style.left=W+"%",T.style.clipPath=`polygon(${W}% 0%, ${W}% 100%, 100% 100%, 100% 0)`,L.style.clipPath=`polygon(0% 100%, 0% 0%, ${W}% 0%, ${W}% 100%)`}};V&&T&&O(V),window.addEventListener("resize",function(){V&&T&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{z=T.offsetWidth})}).observe(T),O(V))})}}let N=(P=M.el)==null?void 0:P.querySelector("a.beae-x-image"),E=N==null?void 0:N.getAttribute("href");N&&M.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&N.addEventListener("click",H=>{let z=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(z)return z.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),H.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-vivgy6xq: ', ex)
      };
    

      try {
        let argid = 'beae-07fwhob9block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-07fwhob9',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-07fwhob9');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-07fwhob9: ', ex)
      };
    

      try {
        let argid = 'beae-2ioidydjsection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-2ioidydj',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-2ioidydj');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-2ioidydj: ', ex)
      };
    

      try {
        let argid = 'beae-6evvxtu5section-slide-show',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-6evvxtu5',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-6evvxtu5');
        args.el = args.els[0];
        ((h) => { window.BeaeSlider&&!h.noRunJs&&window.BeaeSlider(h) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-6evvxtu5: ', ex)
      };
    

      try {
        let argid = 'beae-aobjoemwblock-textloop-0',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-aobjoemw',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-aobjoemw');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-aobjoemw: ', ex)
      };
    

      try {
        let argid = 'beae-oop45onwblock-textloop-0',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-oop45onw',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-oop45onw');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-oop45onw: ', ex)
      };
    

      try {
        let argid = 'beae-aobjoemwblock-textloop-1',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-aobjoemw',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-aobjoemw');
        args.el = args.els[1];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-aobjoemw: ', ex)
      };
    

      try {
        let argid = 'beae-oop45onwblock-textloop-1',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-oop45onw',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-oop45onw');
        args.el = args.els[1];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-oop45onw: ', ex)
      };
    

      try {
        let argid = 'beae-aobjoemwblock-textloop-2',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-aobjoemw',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-aobjoemw');
        args.el = args.els[2];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-aobjoemw: ', ex)
      };
    

      try {
        let argid = 'beae-oop45onwblock-textloop-2',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-oop45onw',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-oop45onw');
        args.el = args.els[2];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-oop45onw: ', ex)
      };
    

      try {
        let argid = 'beae-aobjoemwblock-textloop-3',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-aobjoemw',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-aobjoemw');
        args.el = args.els[3];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-aobjoemw: ', ex)
      };
    

      try {
        let argid = 'beae-oop45onwblock-textloop-3',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-oop45onw',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-oop45onw');
        args.el = args.els[3];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-oop45onw: ', ex)
      };
    

      try {
        let argid = 'beae-j5gjgsyusection-slide-show',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-j5gjgsyu',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-j5gjgsyu');
        args.el = args.els[0];
        ((h) => { window.BeaeSlider&&!h.noRunJs&&window.BeaeSlider(h) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-j5gjgsyu: ', ex)
      };
    

      try {
        let argid = 'beae-9wtfdqedsection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-9wtfdqed',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-9wtfdqed');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-9wtfdqed: ', ex)
      };
    

      try {
        let argid = 'beae-zpq2mnbyblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-zpq2mnby',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-zpq2mnby');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-zpq2mnby: ', ex)
      };
    

      try {
        let argid = 'beae-qvrv0xpiblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-qvrv0xpi',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-qvrv0xpi');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-qvrv0xpi: ', ex)
      };
    

      try {
        let argid = 'beae-8eteuv75block-tabs',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-8eteuv75',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-8eteuv75');
        args.el = args.els[0];
        ((data) => { const prefixClass=`div[data-id=${data.id}] > .beae-tab-wrp`;let tabs=data.el.querySelectorAll(`${prefixClass} > .beae-tab-items > .beae-tab-item`),contents=data.el.querySelectorAll(`${prefixClass} > .beae-tab-contents > .beae-tab-content`),rightside=data.el.querySelectorAll(`${prefixClass} .beae-rightside`),accordions=data.el.querySelectorAll(`${prefixClass} > .beae-tab-contents > .beae-tab-content > .beae-accordion-title--mobile`),activeTab=window.outerWidth&&window.outerWidth<=768?data.activeTabMobile:data.activeTab,toggleImg=data.toggleImg,layout=data.layout,accordionMode=data.accordionMode;function resetActive(){tabs.forEach(f=>f.classList.remove("active")),contents.forEach(f=>f.classList.remove("active")),accordions.forEach(f=>f.classList.remove("active")),toggleImg&&rightside.forEach(f=>f.classList.remove("active")),contents.forEach(f=>{const b=f.querySelector(".beae-accordion-body").style;layout=="accordions"?b.maxHeight="0px":(b.transform="scaleY(0)",b.opacity="0")})}function setActive(f){tabs[f].classList.add("active"),contents[f].classList.add("active"),accordions[f].classList.add("active"),toggleImg&&rightside[f].classList.add("active");const b=contents[f].querySelector(".beae-accordion-body");if(b){const C=b.style;layout=="accordions"?C.maxHeight=data.mode.value=="builder"?"":b.scrollHeight+"px":(C.transform="scaleY(1)",C.transformOrigin="top center",C.opacity="1")}}function removeActive(f){tabs[f].classList.remove("active"),contents[f].classList.remove("active"),accordions[f].classList.remove("active"),toggleImg&&rightside[f].classList.remove("active");const b=contents[f].querySelector(".beae-accordion-body").style;layout=="accordions"?b.maxHeight="0px":(b.transform="scaleY(0)",b.opacity="0")}resetActive(),activeTab!=="none"&&accordionMode!="popup"&&setActive(activeTab),tabs.forEach((f,b)=>{f.addEventListener("click",()=>{resetActive(),setActive(b)})});const section=data.el.closest("section.beae-section");let sectionId="";section&&(sectionId=section.getAttribute("data-sectionid"));let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(f){extOptions={},console.error(f)}if(accordions.forEach((f,b)=>{f.addEventListener("click",()=>{if(accordionMode=="popup"&&data.mode.value!="builder"){const C=f.closest(".beae-tab-content");if(C){let m=document.createElement("div");m.innerHTML=`
                            <h3 class="beae-popup__content-title">${f.querySelector("span").innerHTML}</h3>
                            <div class="beae-popup__content-body ${data.id}">${C.querySelector(".beae-accordion-body").innerHTML}</div>
                            `,window.BeaePopupLibrary.createPopup(m,{layout:extOptions.layout?extOptions.layout:"right",width:extOptions.width?extOptions.width:"400px",layoutMobile:extOptions.layoutMobile?extOptions.layoutMobile:"bottom",sectionId})}}else accordionMode=="single"?(resetActive(),setActive(b)):f.classList.contains("active")?removeActive(b):setActive(b)})}),layout=="tabs"){const f=data.el.querySelector(".beae-tab-contents"),b=f.querySelectorAll(".beae-tab-content-wrp");let C=0,m=-1;b.forEach((S,B)=>{const k=S.offsetHeight;k>C&&(m=B,C=k)}),new ResizeObserver(()=>{f.style.setProperty("--beae-tabs-max-height",`${b[m].offsetHeight}px`)}).observe(b[m])} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-8eteuv75: ', ex)
      };
    

      try {
        let argid = 'beae-txnoqcdiblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-txnoqcdi',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-txnoqcdi');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-txnoqcdi: ', ex)
      };
    

      try {
        let argid = 'beae-dhx1chfablock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-dhx1chfa',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-dhx1chfa');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-dhx1chfa: ', ex)
      };
    

      try {
        let argid = 'beae-1opcikujblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-1opcikuj',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-1opcikuj');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-1opcikuj: ', ex)
      };
    

      try {
        let argid = 'beae-39nl55ssblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-39nl55ss',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-39nl55ss');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-39nl55ss: ', ex)
      };
    

      try {
        let argid = 'beae-ngnf6fahblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-ngnf6fah',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-ngnf6fah');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-ngnf6fah: ', ex)
      };
    

      try {
        let argid = 'beae-izxnazszblock-form',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-izxnazsz',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-izxnazsz');
        args.el = args.els[0];
        ((g) => { const h=window.location.href.indexOf("contact_posted=true")!==-1,u=g.el.querySelector("form");g.el.querySelector(".beae-btn-pr");const f=g.el.querySelectorAll("input","select","button","textarea","checkbox","radio"),b=g.el.querySelector(".btn-lightbox-form > button");!h&&g.mode.value!=="builder"&&(g.el.querySelector(".beae-form-success-message").style="display: none"),h&&g.afterSubmitting=="redirect"&&g.redirect&&(g.el.querySelector(".beae-form-success-message").style="display: block",window.location.href=g.redirect);const C=[];u&&u.addEventListener("submit",m=>{m.preventDefault();for(let _=0;_<f.length;_++)C.push({fieldKey:f[_].name,fieldType:f[_].type,fieldValue:f[_].value})}),b&&(b.onclick=()=>{const m=document.createElement("div");m.innerHTML=u.outerHTML||"",window.BeaePopupLibrary.createPopup(m,{layout:"center",layoutMobile:"bottom",width:"500px",id:g.id})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-izxnazsz: ', ex)
      };
    }; if (window.BEAEBASE) {js_S9HOPUE1()} else {window.BEAEPAGEJS.push(js_S9HOPUE1)} })(); 