(() => { if (window.BEAEPAGEJS === undefined) {
            window.BEAEPAGEJS = [];
          }

          if(window.beaePageSetting == undefined) {
            window.beaePageSetting = {};
          }
          
          window.beaePageSetting.pageId = "688f79e3ad2250c26e09fa23";
              window.beaePageSetting.pageTitle = "Test-shopify-section-123"; 
              window.beaePageSetting.pageType = "section";

          let js_2LSCPTBV = () => { let BeaeUseHooks = {};
      try {
        let argid = 'beae-fpyamojcsection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-fpyamojc',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-fpyamojc');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-fpyamojc: ', ex)
      };
    

      try {
        let argid = 'beae-uo4hm4zvblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-uo4hm4zv',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-uo4hm4zv');
        args.el = args.els[0];
        ((P) => { P.el.querySelectorAll(".beae-x-text a").forEach(I=>{let z=I==null?void 0:I.getAttribute("href");I&&P.mode.value!=="builder"&&(z!=null&&z.includes("#"))&&I.addEventListener("click",O=>{let A=document.querySelector(z+","+(z==null?void 0:z.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),O.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-uo4hm4zv: ', ex)
      };
    

      try {
        let argid = 'beae-18sylob0section-featured-product',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-18sylob0',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-18sylob0');
        args.el = args.els[0];
        ((a) => { var $,B;const n=a.el.querySelector('script[data-id="Product-json-'+a.id+'"]')||a.el.querySelector("#Product-json-"+a.id);let t=!1;const o=JSON.parse(n!=null&&n.innerHTML?n==null?void 0:n.innerHTML:"{}");let r=o!=null&&o.selected_or_first_available_variant?o==null?void 0:o.selected_or_first_available_variant:($=o.variants)==null?void 0:$[0];window.BeaeMoneyFormat||(window.BeaeMoneyFormat=(B=a.el.querySelector(".beae-money-format"))==null?void 0:B.innerHTML),r&&(r=o.variants.find(k=>k.id==r.id)),_(r);function s(k){const x=a.el.querySelector(".beae-attr-sku");if(k){if(x){x.style.removeProperty("display");const M=x.querySelector(".beae-attr-value");M&&(M.innerHTML=`${k.sku?k.sku:"N/A"}`)}}else x&&(x.style.display="none")}function u(k){var x,M,L,V,T;if(k!=null&&k.unitPriceMeasurement){const N=(x=a.el)==null?void 0:x.querySelectorAll(".product__unit-price");if(N){let E="",P=window.BeaeFormatMoney(k.unitPrice);P&&typeof P=="string"&&(P=P.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'")),((M=k.unitPriceMeasurement)==null?void 0:M.referenceValue)!=1&&((L=k.unitPriceMeasurement)==null?void 0:L.referenceValue)!=0&&(E+=k.unitPriceMeasurement.referenceValue),((V=k.unitPriceMeasurement)==null?void 0:V.referenceUnit)!==null&&((T=k.unitPriceMeasurement)==null?void 0:T.referenceUnit)!==""&&(E+=k.unitPriceMeasurement.referenceUnit),N.forEach(H=>{P!=null&&P!=""&&E!=null&&E!=""?H.innerHTML=`${P}/${E}`:H.innerHTML="Price per unit not available"})}}}function c(k){if(!window.BeaeMoneyFormat)return;const x=a.el.querySelectorAll(".beae-product-single__price:not(.beae-recommendation-item .beae-product-single__price)");x&&x.forEach(L=>{if(L){let V=window.BeaeFormatMoney(k.price);V&&typeof V=="string"&&(V=V.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'")),L.innerHTML=V}});const M=a.el.querySelectorAll(".beae-product-single__price--regular:not(.beae-recommendation-item .beae-product-single__price--regular)");M&&M.forEach(L=>{var V,T;if(L){const N=L.parentNode;if(k.compare_at_price){L.style.display="block";let E=window.BeaeFormatMoney(k.compare_at_price);E&&typeof E=="string"&&(E=E.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'")),L.innerHTML=E,(V=N==null?void 0:N.querySelector(".beae-product-single__price"))==null||V.setAttribute("data-sale",!0)}else L.style.display="none",(T=N==null?void 0:N.querySelector(".beae-product-single__price"))==null||T.removeAttribute("data-sale")}})}function d(k){var V,T,N,E;const x=a.el.querySelectorAll(".beae-product-single__price--badged"),M=parseFloat((T=(V=k.price)==null?void 0:V.toString())==null?void 0:T.replace(",","")),L=parseFloat((E=(N=k.compare_at_price)==null?void 0:N.toString())==null?void 0:E.replace(",",""));x&&x.forEach(P=>{if(!P)return;const H=P.getAttribute("type"),I=P.getAttribute("data-sale")||"",z=P.getAttribute("data-sold-out");let O="";if(H=="percent")O=Math.floor((L-M)*100/L);else if(H=="dollar"){const Z=window.BeaeFormatDecimal(k.compare_at_price)-window.BeaeFormatDecimal(k.price);O=window.BeaeFormatMoney(window.BeaeReverseFormatDecimal(Z))}else if(H=="none"){P.classList.remove("beae-product-single__price--sale","beae-sale-sold-out"),P.classList.add("beae-sale-hidden"),P.innerHTML="";return}const A=k.inventory_quantity,q=k.inventory_policy;if(A>0||A<1&&q=="continue"||!k.inventory_management)if(L&&L>M){P.classList.remove("beae-sale-sold-out","beae-sale-hidden"),P.classList.add("beae-product-single__price--sale");let Z=I.replace(new RegExp("{\\s*?sale\\s*?}","g"),O);Z&&(Z=Z.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'")),P.innerHTML=Z}else P.classList.remove("beae-product-single__price--sale","beae-sale-sold-out"),P.classList.add("beae-sale-hidden"),P.innerHTML="";else P.classList.remove("beae-sale-hidden","beae-product-single__price--sale"),P.classList.add("beae-sale-sold-out"),P.innerHTML=z})}function l(k){var V,T,N,E;const x=parseFloat((T=(V=k.price)==null?void 0:V.toString())==null?void 0:T.replace(",","")),M=parseFloat((E=(N=k.compare_at_price)==null?void 0:N.toString())==null?void 0:E.replace(",",""));let L=a.el.querySelectorAll(".beae-badged-wrapper span");L&&L.forEach(P=>{if(!P)return;const H=P.getAttribute("type"),I=P.getAttribute("data-sale")||"",z=P.getAttribute("data-sold-out");let O="";if(H=="percent")O=Math.floor((M-x)*100/M);else if(H=="dollar"){const Z=window.BeaeFormatDecimal(k.compare_at_price)-window.BeaeFormatDecimal(k.price);O=window.BeaeFormatMoney(window.BeaeReverseFormatDecimal(Z))}else if(H=="none"){P.classList.remove("beae-product-single__price--sale","beae-sale-sold-out"),P.classList.add("beae-sale-hidden"),P.innerHTML="";return}const A=k.inventory_quantity,q=k.inventory_policy;if(A>0||A<1&&q=="continue"||!k.inventory_management){const Z=parseFloat(k.price),W=parseFloat(k.compare_at_price);if(W&&W>Z){P.classList.remove("beae-sale-sold-out","beae-sale-hidden"),P.classList.add("beae-product-single__price--sale");let G=I.replace(new RegExp("{\\s*?sale\\s*?}","g"),O);G&&(G=G.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'")),P.innerHTML=G}else P.classList.remove("beae-product-single__price--sale","beae-sale-sold-out"),P.classList.add("beae-sale-hidden"),P.innerHTML=""}else P.classList.remove("beae-sale-hidden","beae-product-single__price--sale"),P.classList.add("beae-sale-sold-out"),P.innerHTML=z})}function v(k){const x=a.el.querySelectorAll(".beae-x-product-gallery .beae-slider");x&&o&&k.featured_media&&x.forEach(M=>{const L=M.getAttribute("data-desktop-layout");if(window.innerWidth>=768&&L=="grid"){const V=M.querySelector('.beae-slide-item[data-media-id="'+k.featured_media.id+'"]');Array.from(M.querySelectorAll(".beae-slide-item.beae-grid-active")).filter(function(N){return N.nodeType===1&&N!==V}).forEach(N=>{N.classList.remove("beae-grid-active")}),y=="true"&&V.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),V&&!V.classList.contains("beae-grid-active")&&V.classList.add("beae-grid-active")}else y=="true"&&M.dispatchEvent(new CustomEvent("activeSlide",{detail:{id:k.featured_media.id},bubbles:!0,cancelable:!0,composed:!1}))})}function _(k){if(a.mode.value==="builder"&&k){const R=a.el.querySelector(".beae-x-featuted_product");R==null||R.setAttribute("data-variant-id",k.id)}const x=a.el.querySelector(".beae-x-inventory");if(!x||!k)return;const M=x.children[0],L=x.getAttribute("data-in-stock-text"),V=x.getAttribute("data-out-stock-text");x.getAttribute("data-inventory-text");const T=x.getAttribute("data-pre-order-text"),N=x.getAttribute("data-very-low-stock-text"),E=x.getAttribute("data-low-stock-text"),P=x.getAttribute("data-incoming-date-text"),H=x.getAttribute("data-low-number")??20,I=x.getAttribute("data-very-low-number")??5,z=x.getAttribute("data-show-next-incoming-date"),O=x.getAttribute("data-max-number")??60,A=x.querySelector(".beae-inventory-label"),q=x.querySelector(".beae-inventory-process-body");let Z=k.inventory_quantity;a.el.querySelector(".beae-x-variant")||a.el.querySelector(".beae-x-swatch-color")||a.el.querySelector(".beae-x-add-to-cart-with-option")||(Z=o.variants.reduce((R,D)=>R+(D.inventory_quantity||0),0));function G(R){return R?R.replace("{quantity}",Z).replace("{next_incoming_date}",k.next_incoming_date):""}!M||!A||(k.available?k.inventory_policy==="continue"&&Z<1?(A.innerHTML=G(T),M.classList="",M.classList.add("beae-inventory-pre-order")):Z<=I?(A.innerHTML=G(N),M.classList="",M.classList.add("beae-inventory-very-low")):Z<=H?(A.innerHTML=G(E),M.classList="",M.classList.add("beae-inventory-low")):(A.innerHTML=G(L),M.classList="",M.classList.add("beae-inventory-in-stock")):k.next_incoming_date&&z?(A.innerHTML=G(P),M.classList="",M.classList.add("beae-incoming-transfer")):(A.innerHTML=G(V),M.classList="",M.classList.add("beae-inventory-out-stock")),q&&(Z<=O?q.style.width=Z/O*100+"%":q.style.width="100%"))}function b(k){const x=a.el.querySelector(".beae-add-to-cart--submit");if(x){const L=x.querySelector(".beae-add-to-cart-text-content");k.available?x&&(x.removeAttribute("disabled"),L&&(L.innerHTML=x.getAttribute("data-add-to-cart-text"))):x&&(a.mode.value=="live"&&x.setAttribute("disabled","disabled"),L&&(L.innerHTML=x.getAttribute("data-sold-out-text")))}const M=a.el.querySelector(".shopify-payment-button__button");M&&(k.inventory_quantity>0?M.removeAttribute("disabled"):a.mode.value=="live"&&M.setAttribute("disabled","disabled"))}function h(k){const x=a.el.querySelector(".beae-quantity-input"),M=a.el.querySelectorAll(".beae-quantity-btn");if(M&&M.forEach(L=>{k&&k.available?L.removeAttribute("disabled"):a.mode.value=="live"&&L.setAttribute("disabled","disabled")}),x){if(k)k.available?x.removeAttribute("disabled"):a.mode.value=="live"&&x.setAttribute("disabled","disabled");else{x.value=1,a.mode.value=="live"&&x.setAttribute("disabled","disabled");return}const L=k.inventory_quantity,V=k.inventory_policy;let T=9999;k.inventory_management&&V==="deny"&&(T=L),L<1&&V=="continue"&&(T=999999);let N=parseInt(x.value);N>T&&(N=T),N=isNaN(N)||!N?1:N,x.value=N,x.setAttribute("max",T)}}function p(k){if(k){let x=a.el.querySelector(".beae-pa-container");if(x&&a.mode.value=="live"){const M=x.getAttribute("data-section-id-template");x.innerHTML="";const V=window.location.pathname.split("/").filter(N=>N);let T="";V.length>0&&(V[0].length===2||/^[a-z]{2}(-[A-Z]{2})?$/.test(V[0]))&&(T=V[0]+"/"),window.fetch(window.location.origin+"/"+T+"products/"+o.handle+"?variant="+k.id+"&section_id="+M,{method:"GET",headers:{"Content-Type":"text/html"}}).then(N=>N.text()).then(N=>{let E=N.match(/<Beae-custom-liquid-pickup>(|[\s\S]+?)<\/Beae-custom-liquid-pickup>/g);E&&E[0]&&(x.innerHTML=E[0]);let P=x.querySelector(".beae-pa--btn"),H=x.querySelector(".beae-pa--detail");if(P){const I=x.closest("section.beae-section");I&&I.getAttribute("data-sectionid"),P.addEventListener("click",()=>{window.BeaePopupLibrary.createPopup(H,{layout:x.getAttribute("data-layout"),layoutMobile:"bottom",width:x.getAttribute("data-width"),id:a.id})})}}).catch(N=>{console.warn(N.message)})}}}const f=a.el.querySelector(".beae-variant-size-guide");if(f){const k=f.querySelector(".beae-variant-size-guide-btn"),x=f.querySelector(".beae-variant-size-guide-content"),M=a.el.querySelector(".beae-content-size-chart-preview");let L=window.isPreviewTemplate&&M||x;if(k&&L){const V=a.el.getAttribute("data-sectionid");k.addEventListener("click",()=>{window!=null&&window.BeaePopupLibrary&&window.BeaePopupLibrary.createPopup(L,{layout:"center",layoutMobile:"bottom",width:"auto",sectionId:V})})}}const m=a.el.querySelectorAll(".beae-custom-select_wrp");m&&m.length&&a.mode.value=="live"&&m.forEach(k=>{const x=k.querySelector("button.beae-custom-select__btn"),M=k.closest("div.beae-block.beae-core");x.addEventListener("click",function(L){k.classList.toggle("active"),M.style.position="relative",M.style.zIndex="1"}),document.addEventListener("click",function(L){k.contains(L.target)||(k.classList.remove("active"),M.style={})})});function w(){const k=a.el.querySelector(".beae-custom-select_wrp.active");k&&k.classList.remove("active")}const g=a.el.querySelector(".beae-x-variant"),y=g==null?void 0:g.getAttribute("data-scroll");let C=!1;if(g){let k=function(O,A){if(!O)return[];let q=O.options.filter((Z,W)=>W!=A);return o.variants.filter(Z=>q.every(W=>Z.options.includes(W)))??[]},x=function(O,A,q){if(!O)return null;let Z=O.options.filter((W,G)=>G!=A);return o.variants.find(W=>W.options.every(G=>[q,...Z].includes(G)))},M=function(O){if(!O)return;const A=a.el.querySelector("form.beae-product-form-next");if(A){A.getAttribute("data-variant-id",O.id);const q=A.querySelector('input[type="hidden"][name="id"]');q&&q.setAttribute("value",O.id)}g.querySelectorAll(".beae-variant-label").forEach(q=>{const Z=parseInt(q.getAttribute("data-option-position"))-1;q.innerHTML=O.options[Z]}),P||g.querySelectorAll(".beae-product-images-list").forEach(q=>{const Z=parseInt(q.getAttribute("data-option-position"))-1;let W=[];k(O,Z).forEach(G=>{W.push(`
                <span
                  class="beae-product-swatch-item-image"
                  variant-id=${G.id}
                >
                  <img
                    src="${G.featured_image?G.featured_image.src:"//cdn.shopify.com/shopifycloud/shopify/assets/no-image-160-1cfae84eca4ba66892099dcd26e604f5801fdadb3693bc9977f476aa160931ac_120x120_crop_center.gif"}"
                    alt="${G.title}"
                    height="120"
                    width="120"
                    loading="lazy"
                  />
                </span>
              `)}),q.querySelectorAll(".beae-product-variant-item-image").forEach((G,R)=>{G.innerHTML=W[R]})}),g.querySelectorAll(".beae-product-variant-item").forEach(q=>{const Z=parseInt(q.getAttribute("data-option-position"))-1;let W="";const G=q.getAttribute("data-value");if(G)try{W=decodeURIComponent(G)}catch{W=G}const R=x(O,Z,W);R&&(q.setAttribute("data-variant-id",R.id),R.inventory_management&&R.inventory_quantity<1&&R.inventory_policy!="continue"?q.classList.add("variant-item-disable"):q.classList.remove("variant-item-disable"))})},L=function(O){O.options.forEach((A,q)=>{let Z=q+1;const W=g.querySelectorAll('.beae-variant-option-list[data-option-position="'+Z+'"] > li');let G=null;const R=g.querySelector("select#"+z+"-option-"+q);if(R){for(let j=0;j<W.length;j++)W[j].classList.remove("beae-product-variant-item--selected"),decodeURIComponent(W[j].getAttribute("data-value"))==A&&(G=W[j]);G&&G.classList.add("beae-product-variant-item--selected"),R.value=A}const D=G&&G.closest(".beae-custom-select_wrp");if(D){const j=G&&G.getAttribute("data-color"),F=D.querySelector(".beae-selected-color");F&&(F.style="--beae-color-variant: "+j);const U=D.querySelector(".beae-text-selected");U&&(U.innerHTML=A)}})},V=function(O,A){N(O),O&&(t=!0,r=O,_(O),h(O),b(O),d(O),l(O),M(O),c(O),s(O),u(O),E?(E=!1,new URLSearchParams(window.location.search).get("variant")&&!window.noUpdateImageFirstLoad&&setTimeout(()=>{v(O)})):v(O),p(O),a.el.dispatchEvent(new CustomEvent("changeVariant",{detail:{variant:O},bubbles:!0,cancelable:!0,composed:!1})))},T=function(){const O=a.el.querySelector('.beae-product-option-cont[data-swatch-type="variant_image"]');if(!O)return;const A=O.getAttribute("data-option-position"),q="//cdn.shopify.com/shopifycloud/shopify/assets/no-image-160-1cfae84eca4ba66892099dcd26e604f5801fdadb3693bc9977f476aa160931ac_120x120_crop_center.gif",Z=a.el.querySelectorAll('.beae-product-option-cont:not([data-swatch-type="variant_image"])'),W={};Z&&Z.length&&Z.forEach(D=>{const j=D.querySelector(".beae-product-variant-item--selected");if(!j)return;const F=j.getAttribute("data-option-position"),U=decodeURIComponent(j.getAttribute("data-value"));W["option"+F]=U});const G=o.variants.filter(D=>Object.keys(W).every(j=>W[j]==D[j])),R=O.querySelectorAll(".beae-product-variant-item");R&&R.length&&R.forEach(D=>{const j=decodeURIComponent(D.getAttribute("data-value")),F=G.find(U=>U["option"+A]==j);D.querySelector("img")||(D.innerHTML=`
                          <span class="beae-product-swatch-item-image">
                          <img
                          src="${F&&F.featured_image?F.featured_image.src:q}"
                          alt="${F&&F.title}"
                          height="100"
                          width="100"
                          loading="lazy"
                          />
                      </span>
                      `)})},N=function(O){let A=o.variants,q=O&&O.option1,Z=O&&O.option2;if(!O){const R=a.el.querySelector('.beae-variant-option-list[data-option-position="1"] .beae-product-variant-item--selected');R&&(q=decodeURIComponent(R.getAttribute("data-value")));const D=a.el.querySelector('.beae-variant-option-list[data-option-position="2"] .beae-product-variant-item--selected');D&&(Z=decodeURIComponent(D.getAttribute("data-value")))}let W=[],G=[];if(q&&(A=o.variants.filter(R=>R.option1==q),A.forEach(R=>{R.option2&&!(W!=null&&W.includes(R.option2))&&W.push(R.option2)}),A.forEach(R=>{R.option2==Z&&R.option3&&!(G!=null&&G.includes(R.option3))&&G.push(R.option3)})),[2,3].forEach(R=>{const D=a.el.querySelectorAll('.beae-variant-option-list[data-option-position="'+R+'"] .beae-product-variant-item');if(D){let j=R==2?W:G;D.forEach(F=>{const U=decodeURIComponent(F.getAttribute("data-value"));j.includes(U)?F.setAttribute("data-unavailable",!1):F.setAttribute("data-unavailable",!0)})}}),!O){if(W&&W.length){const R=a.el.querySelector('.beae-variant-option-list[data-option-position="2"] .beae-product-variant-item--selected[data-unavailable="false"]'),D=a.el.querySelector('.beae-variant-option-list[data-option-position="2"] .beae-product-variant-item[data-unavailable="false"]');!R&&D&&D.click()}if(G&&G.length){a.el.querySelector('.beae-variant-option-list[data-option-position="3"] .beae-product-variant-item--selected[data-unavailable="false"]');const R=a.el.querySelector('.beae-variant-option-list[data-option-position="3"] .beae-product-variant-item[data-unavailable="false"]');R&&R.click()}}T()},E=!0,P=!1,H=g.querySelector('select[name="id"]'),I=!0;a.el.addEventListener("activeVariant",function(O){if(I){I=!1;return}if(t){t=!1;return}if(!o.variants||!O.detail.id||r&&r.featured_media&&O.detail.id==r.featured_media.id)return;const A=o.variants.find(q=>!q||!q.featured_media||!q.featured_media.id||!O.detail.id?!1:q.featured_media.id==O.detail.id);!A||r.id==A.id||(L(A),N(A),r=A,_(A),h(A),b(A),M(A),c(A),d(A),l(A),p(A),s(A),u(A))});const z=H&&H.getAttribute("id");if(H&&window.Shopify&&window.Shopify.OptionSelectors){let O=function(A){var D;E=!1;const q=parseInt(A.getAttribute("data-option-position"))-1,Z=g.querySelector("select#"+z+"-option-"+q);let W=A.getAttribute("data-value")??A.value,G="";try{G=decodeURIComponent(W)}catch{G=W}if(Z){const j=((D=A.parentElement)==null?void 0:D.children)??[];for(let F=0;F<j.length;F++)j[F].classList.remove("beae-product-variant-item--selected");A.classList.add("beae-product-variant-item--selected"),Z.value=G,Z.onchange()}const R=A.closest(".beae-custom-select_wrp");if(R){const j=A.getAttribute("data-color"),F=R.querySelector(".beae-selected-color");F&&(F.style="--beae-color-variant: "+j);const U=R.querySelector(".beae-text-selected");U&&(U.innerHTML=G)}};new window.Shopify.OptionSelectors(z,{product:o,onVariantSelected:V,enableHistoryState:a.mode.value=="live"}),g.querySelectorAll(".beae-product-variant-item").forEach(A=>{A.querySelector("a.beae-variant--link")||A.addEventListener("click",function(q){P=!1,O(A),w()})}),g.querySelectorAll(".beae-product-variant-item-image").forEach(A=>{A.querySelector("a.beae-variant--link")||A.addEventListener("click",function(q){P=!0,O(A)})})}}else C=!0;o.has_only_default_variant&&(C=!0),C&&S();function S(){r&&((r==null?void 0:r.title)=="Default Title"&&(r=o.variants[0]),_(r),h(r),b(r),d(r),l(r))} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-18sylob0: ', ex)
      };
    

      try {
        let argid = 'beae-jf8b4vg9block-gallery',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-jf8b4vg9',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-jf8b4vg9');
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
      `,document.body.appendChild(o),document.body.style.overflow="hidden";let u=o.querySelector("button.beae-gallery-zoom-close"),c=o.querySelector(".beae-gallery-zoom"),d=o.querySelector(".beae-gallery-zoom-content"),l=o.querySelector(".beae-gallery-zoom-pagination .pagination_item.per"),v=o.querySelector(".pagination_item.prev"),_=o.querySelector(".pagination_item.next"),b=o.querySelectorAll(".beae-gallery-zoom-item"),h=o.querySelector(".beae-gallery-zoom-controls"),p=()=>{let m=o.querySelector(".beae-gallery-zoom-item.active"),w=0;Array.from(r).forEach(g=>{var y;((y=g.getAttribute("type"))==null?void 0:y.toLowerCase())=="image"&&w++}),w<2?h.style.display="none":h.style.display="flex",l.textContent=`${Array.from(o.querySelectorAll(".beae-gallery-zoom-item")).indexOf(m)+1} / ${w}`};p(),u.addEventListener("click",m=>{c.classList.remove("opened")}),o.querySelectorAll(".beae-gallery-zoom-item img").forEach(m=>{m.addEventListener("mousemove",w=>{m.parentNode.classList.contains("beae-gallery-zoom-more")?m.parentNode.classList.contains("beae-gallery-zoom-more")&&(m.style.objectFit==="cover"?m.style.objectPosition=100*(w.clientX/m.offsetWidth)+"% "+100*((w.clientY-m.offsetTop)/m.offsetHeight)+"%":m.style.objectPosition&&(m.style.objectPosition="")):(m.parentNode.classList.add("beae-gallery-zoom-more"),m.style.cursor="zoom-in",m.addEventListener("click",g=>{m.style.objectFit==="cover"?(m.style.objectFit="contain",g.target.style.transition="",m.style.cursor="zoom-in",m.style.objectPosition=""):(m.style.objectFit="cover",m.style.cursor="zoom-out",m.style.objectPosition=100*(g.clientX/m.offsetWidth)+"% "+100*((g.clientY-m.offsetTop)/m.offsetHeight)+"%")}))})}),c.addEventListener("transitionend",m=>{m.propertyName==="opacity"&&(c.classList.contains("opened")?(u.style.opacity=1,o.querySelectorAll(".beae-gallery-zoom-item img").forEach(w=>{w.removeAttribute("srcset"),w.removeAttribute("sizes")}),o.querySelector(".beae-gallery-zoom-item.active").style.order="",d.scrollTo({left:o.querySelector(".beae-gallery-zoom-item.active").offsetLeft})):(o.remove(),document.body.style.overflow=""))});let f=0;d.addEventListener("scroll",m=>{clearTimeout(f),f=setTimeout(()=>{b.forEach(w=>{Math.abs(m.target.scrollLeft-w.offsetLeft)<2?(w.classList.add("active"),p()):w.classList.remove("active")})},250)}),v.addEventListener("click",()=>{let m=o.querySelector(".beae-gallery-zoom-item.active");if(m.previousElementSibling)m.previousElementSibling.classList.add("active");else if(b[b.length-1]&&b.length>1)b[b.length-1].classList.add("active");else return;m.classList.remove("active"),d.scrollTo({behavior:"smooth",left:o.querySelector(".beae-gallery-zoom-item.active").offsetLeft}),p()}),_.addEventListener("click",()=>{let m=o.querySelector(".beae-gallery-zoom-item.active");if(m&&m.nextElementSibling)m.nextElementSibling.classList.add("active");else if(b[0]&&b.length>1)b[0].classList.add("active");else return;m.classList.remove("active"),d.scrollTo({behavior:"smooth",left:o.querySelector(".beae-gallery-zoom-item.active").offsetLeft}),p()}),setTimeout(()=>{c.classList.add("opened")},10)}))},1e3) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-jf8b4vg9: ', ex)
      };
    

      try {
        let argid = 'beae-jf8b4vg9section-slide-show',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-jf8b4vg9',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-jf8b4vg9');
        args.el = args.els[0];
        ((h) => { window.BeaeSlider&&!h.noRunJs&&window.BeaeSlider(h) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-jf8b4vg9: ', ex)
      };
    }; if (window.BEAEBASE) {js_2LSCPTBV()} else {window.BEAEPAGEJS.push(js_2LSCPTBV)} })(); 