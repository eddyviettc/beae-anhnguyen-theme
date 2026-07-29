(() => { if (window.BEAEPAGEJS === undefined) {
            window.BEAEPAGEJS = [];
          }

          if(window.beaePageSetting == undefined) {
            window.beaePageSetting = {};
          }
          
          window.beaePageSetting.pageId = "68a8e7977d2e5d6b5a06c595";
              window.beaePageSetting.pageTitle = "test app 3 "; 
              window.beaePageSetting.pageType = "product";

          let js_QVS88UKU = () => { let BeaeUseHooks = {};
      try {
        let argid = 'beae-dv7g6rq4section-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-dv7g6rq4',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-dv7g6rq4');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-dv7g6rq4: ', ex)
      };
    

      try {
        let argid = 'beae-tbnqn0us',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-tbnqn0us',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-tbnqn0us');
        args.el = args.els[0];
        ((v) => { var k;if(((k=v==null?void 0:v.mode)==null?void 0:k.value)=="builder"&&!(v!=null&&v.disabled))return;let C=v.el.querySelector(".beae-marquee-content"),S=C.parentNode,$=x=>{v.el.querySelectorAll(".beae-marquee-content-clone").forEach(V=>V.parentNode.removeChild(V));let M=0,L=Math.ceil((S.offsetWidth>=v.el.offsetWidth?S.offsetWidth:v.el.offsetWidth)*2/x.offsetWidth);L=L<=10?L:10;for(let V=0;V<L;V++){let T=x.cloneNode(!0);T.classList.add("beae-marquee-content-clone");const N=T.querySelectorAll("img");N.length>0&&N.forEach(E=>{E.setAttribute("loading","lazy"),E.setAttribute("load","true")}),S.appendChild(T),M<v.el.offsetWidth&&(M+=x.offsetWidth)}S.style.setProperty("--marquee-animation-duration",M/10*.01*((v==null?void 0:v.speed)??10)+"s"),S.style.setProperty("--marquee-animation-offset",-M+"px"),window.dispatchEvent(new CustomEvent("marqueeClone",{detail:{id:v==null?void 0:v.id}}))};window.addEventListener("resize",()=>{$(C)}),$(C);let B=new IntersectionObserver(x=>{x.forEach(M=>{M.intersectionRatio>0&&($(C),M.target.querySelectorAll('[loading="lazy"]').forEach(L=>{L.removeAttribute("loading")}),B.unobserve(M.target))})},{});B.observe(S) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-tbnqn0us: ', ex)
      };
    

      try {
        let argid = 'beae-0p0rvjfjblock-textloop-0',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-0p0rvjfj',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-0p0rvjfj');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let F=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(F)return F.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-0p0rvjfj: ', ex)
      };
    

      try {
        let argid = 'beae-0p0rvjfjblock-textloop-1',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-0p0rvjfj',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-0p0rvjfj');
        args.el = args.els[1];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let F=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(F)return F.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-0p0rvjfj: ', ex)
      };
    

      try {
        let argid = 'beae-0p0rvjfjblock-textloop-2',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-0p0rvjfj',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-0p0rvjfj');
        args.el = args.els[2];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let F=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(F)return F.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-0p0rvjfj: ', ex)
      };
    

      try {
        let argid = 'beae-7gmlgh51section-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-7gmlgh51',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-7gmlgh51');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-7gmlgh51: ', ex)
      };
    

      try {
        let argid = 'beae-du51l3c7section-featured-product',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-du51l3c7',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-du51l3c7');
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
        console.error('BEAE JS ERROR ID beae-du51l3c7: ', ex)
      };
    

      try {
        let argid = 'beae-zeyutch6block-gallery',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-zeyutch6',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-zeyutch6');
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
        console.error('BEAE JS ERROR ID beae-zeyutch6: ', ex)
      };
    

      try {
        let argid = 'beae-zeyutch6section-slide-show',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-zeyutch6',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-zeyutch6');
        args.el = args.els[0];
        ((h) => { window.BeaeSlider&&!h.noRunJs&&window.BeaeSlider(h) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-zeyutch6: ', ex)
      };
    

      try {
        let argid = 'beae-vdxpuwu8block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-vdxpuwu8',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-vdxpuwu8');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let F=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(F)return F.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-vdxpuwu8: ', ex)
      };
    

      try {
        let argid = 'beae-rrcfd6n4section-slide-show',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-rrcfd6n4',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-rrcfd6n4');
        args.el = args.els[0];
        ((h) => { window.BeaeSlider&&!h.noRunJs&&window.BeaeSlider(h) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-rrcfd6n4: ', ex)
      };
    

      try {
        let argid = 'beae-fv0wsmj4block-textloop-0',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-fv0wsmj4',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-fv0wsmj4');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let F=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(F)return F.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-fv0wsmj4: ', ex)
      };
    

      try {
        let argid = 'beae-bwdi56tnblock-buy',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-bwdi56tn',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-bwdi56tn');
        args.el = args.els[0];
        ((d) => { d.els&&d.els.forEach(l=>{const _=l.querySelector('.beae-quantity-btn[name="plus"]'),y=l.querySelector('.beae-quantity-btn[name="minus"]'),b=l.querySelector(".beae-quantity-input");_&&y&&b&&(b.value===""&&(b.value="1"),_.addEventListener("click",function(){_.getAttribute("disabled")!="disabled"&&b.stepUp()}),y.addEventListener("click",function(){y.getAttribute("disabled")!="disabled"&&b.stepDown()}))}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-bwdi56tn: ', ex)
      };
    

      try {
        let argid = 'beae-cmk9yedeblock-add-to-cart',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-cmk9yede',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-cmk9yede');
        args.el = args.els[0];
        ((v) => { if(v.mode.value=="builder"){if(!v.els)return;for(let C=0;C<v.els.length;C++)if(C==v.loopIndex){const S=v.els[C].closest("form.beae-product-form-next");if(!S)return;const $=S.querySelector(".beae-add-to-cart--submit"),B=S.getAttribute("data-product_id"),k=S.querySelector('script[data-id="Product-json-'+B+'"]')||S.querySelector("#Product-json-"+B),M=JSON.parse(k!=null&&k.innerHTML?k==null?void 0:k.innerHTML:"{}").variants||[];let L=S.getAttribute("data-variant-id"),V=M[0];L&&(V=M.find(N=>N.id==L));const T=$.querySelector(".beae-add-to-cart-text-content");V!=null&&V.available?T&&(M.length>1?T.innerHTML=$.getAttribute("data-choose-options-text"):T.innerHTML=$.getAttribute("data-add-to-cart-text")):T&&(T.innerHTML=$.getAttribute("data-sold-out-text"))}} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-cmk9yede: ', ex)
      };
    

      try {
        let argid = 'beae-0k8yklvf',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-0k8yklvf',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-0k8yklvf');
        args.el = args.els[0];
        (($) => { setTimeout(()=>{const B=$.el.querySelector(".shopify-payment-button__button","");B&&B.classList.add($.buyItNowType)},1e3) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-0k8yklvf: ', ex)
      };
    

      try {
        let argid = 'beae-xfsyiluzblock-tabs',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-xfsyiluz',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-xfsyiluz');
        args.el = args.els[0];
        ((data) => { const prefixClass=`div[data-id=${data.id}] > .beae-tab-wrp`;let tabs=data.el.querySelectorAll(`${prefixClass} > .beae-tab-items > .beae-tab-item`),contents=data.el.querySelectorAll(`${prefixClass} > .beae-tab-contents > .beae-tab-content`),rightside=data.el.querySelectorAll(`${prefixClass} .beae-rightside`),accordions=data.el.querySelectorAll(`${prefixClass} > .beae-tab-contents > .beae-tab-content > .beae-accordion-title--mobile`),activeTab=data.activeTab,toggleImg=data.toggleImg,layout=data.layout,accordionMode=data.accordionMode;function resetActive(){tabs.forEach(b=>b.classList.remove("active")),contents.forEach(b=>b.classList.remove("active")),accordions.forEach(b=>b.classList.remove("active")),toggleImg&&rightside.forEach(b=>b.classList.remove("active")),contents.forEach(b=>{const h=b.querySelector(".beae-accordion-body").style;layout=="accordions"?h.maxHeight="0px":(h.transform="scaleY(0)",h.opacity="0")})}function setActive(b){tabs[b].classList.add("active"),contents[b].classList.add("active"),accordions[b].classList.add("active"),toggleImg&&rightside[b].classList.add("active");const h=contents[b].querySelector(".beae-accordion-body");if(h){const p=h.style;layout=="accordions"?p.maxHeight=data.mode.value=="builder"?"":h.scrollHeight+"px":(p.transform="scaleY(1)",p.transformOrigin="top center",p.opacity="1")}}function removeActive(b){tabs[b].classList.remove("active"),contents[b].classList.remove("active"),accordions[b].classList.remove("active"),toggleImg&&rightside[b].classList.remove("active");const h=contents[b].querySelector(".beae-accordion-body").style;layout=="accordions"?h.maxHeight="0px":(h.transform="scaleY(0)",h.opacity="0")}resetActive(),activeTab!=="none"&&accordionMode!="popup"&&setActive(activeTab),tabs.forEach((b,h)=>{b.addEventListener("click",()=>{resetActive(),setActive(h)})});const section=data.el.closest("section.beae-section");let sectionId="";section&&(sectionId=section.getAttribute("data-sectionid"));let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(b){extOptions={},console.error(b)}if(accordions.forEach((b,h)=>{b.addEventListener("click",()=>{if(accordionMode=="popup"&&data.mode.value!="builder"){const p=b.closest(".beae-tab-content");if(p){let f=document.createElement("div");f.innerHTML=`
                            <h3 class="beae-popup__content-title">${b.querySelector("span").innerHTML}</h3>
                            <div class="beae-popup__content-body ${data.id}">${p.querySelector(".beae-accordion-body").innerHTML}</div>
                            `,window.BeaePopupLibrary.createPopup(f,{layout:extOptions.layout?extOptions.layout:"right",width:extOptions.width?extOptions.width:"400px",layoutMobile:extOptions.layoutMobile?extOptions.layoutMobile:"bottom",sectionId})}}else accordionMode=="single"?(resetActive(),setActive(h)):b.classList.contains("active")?removeActive(h):setActive(h)})}),layout=="tabs"){const b=data.el.querySelector(".beae-tab-contents"),h=b.querySelectorAll(".beae-tab-content-wrp");let p=0,f=-1;h.forEach((w,g)=>{const v=w.offsetHeight;v>p&&(f=g,p=v)}),new ResizeObserver(()=>{b.style.setProperty("--beae-tabs-max-height",`${h[f].offsetHeight}px`)}).observe(h[f])} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-xfsyiluz: ', ex)
      };
    

      try {
        let argid = 'beae-gcdja5avblock-description',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-gcdja5av',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-gcdja5av');
        args.el = args.els[0];
        ((data) => { if(data.hasDescription=="false"){data.mode.value=="live"&&(data.el.style.display="none");return}if(window.isPreviewTemplate){const _=data.el.closest(".beae-x-featuted_product");if(_){const y=_.parentElement.querySelector('script[data-id^="Product-json-"]')||_.parentElement.querySelector('script[id^="Product-json-"]'),b=JSON.parse(y!=null&&y.innerHTML?y==null?void 0:y.innerHTML:"{}");b&&!b.description&&(data.el.style.display="none")}}const content=data.el.querySelector(".beae-des-content");if(content){if(data.type=="collapsible_tab"){const _=data.el.querySelector(".beae-des-accordion");_&&content&&(_.addEventListener("click",()=>{content&&(_.classList.contains("active")?(_.classList.remove("active"),content.style.maxHeight="0"):(_.classList.add("active"),content.style.maxHeight=content.scrollHeight+"px"))}),data.active&&_.click())}else if(data.type=="show_with_popup"){const header=data.el.querySelector(".beae-des-popup > span"),buttonLightbox=data.el.querySelector(".beae-des-popup");if(buttonLightbox&&content){const section=data.el.closest("section.beae-section");let sectionId="";section&&(sectionId=section.getAttribute("data-sectionid"));let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(_){extOptions={},console.error(_)}buttonLightbox.addEventListener("click",()=>{window.BeaePopupLibrary.createPopup('<h3 class="beae-popup__content-title">'+header.innerHTML+'</h3><div class="beae-popup__content-body">'+content.innerHTML+"</div>",{layout:extOptions.layout?extOptions.layout:"right",width:extOptions.width?extOptions.width:"400px",layoutMobile:extOptions.layoutMobile?extOptions.layoutMobile:"bottom",sectionId})})}}else if(data.type=="less_more"){let _=function(y,b,h,p){function f(){p&&y&&h&&(p.offsetHeight>parseFloat(h.split("px")[0])?y.style.display="block":y.style.display="none")}f(),p&&new ResizeObserver(()=>{f()}).observe(p),b&&(b.style.height=h),y&&b&&!y.dataset.listenerAttached&&(y.addEventListener("click",()=>{y.getAttribute("data-type")=="more"?(b.classList.remove("beae-show-more"),b.style.height=h,y.setAttribute("data-type","less"),y.innerHTML=y.getAttribute("data-show-more-text")):(b.classList.add("beae-show-more"),b.style.height=b.scrollHeight+"px",setTimeout(()=>{b.style={}},100),y.setAttribute("data-type","more"),y.innerHTML=y.getAttribute("data-show-less-text"))}),y.dataset.listenerAttached="true",data.active&&y.click())};for(let y=0;y<data.els.length;y++){const b=data.els[y].querySelector(".btn-action-les-more"),h=data.els[y].querySelector(".beae-less-more"),p=h&&h.getAttribute("data-height"),f=h&&h.querySelector(".beae-des-content");(data.mode.value=="builder"&&y==data.loopIndex||data.mode.value=="live")&&_(b,h,p,f)}}}else data.els.forEach(_=>{if(!_)return;const y=_.querySelector(".beae-x-product-short-des");if(y.getAttribute("data-type")=="text"&&y.getAttribute("data-show")=="false"){const b=y.textContent;y.innerHTML=convertStringWithDifferentWordCount(b,data.numberOfWords)}});function convertStringWithDifferentWordCount(_,y){const h=_.split(" ").slice(0,y);return _.split(" ").length>y?h.concat("...").join(" "):h.join(" ")} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-gcdja5av: ', ex)
      };
    

      try {
        let argid = 'beae-qar2vrurblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-qar2vrur',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-qar2vrur');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let F=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(F)return F.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-qar2vrur: ', ex)
      };
    

      try {
        let argid = 'beae-oykzp9u1block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-oykzp9u1',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-oykzp9u1');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let F=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(F)return F.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-oykzp9u1: ', ex)
      };
    

      try {
        let argid = 'beae-fppe4vwxblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-fppe4vwx',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-fppe4vwx');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let F=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(F)return F.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-fppe4vwx: ', ex)
      };
    

      try {
        let argid = 'beae-bedlz1fasection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-bedlz1fa',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-bedlz1fa');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-bedlz1fa: ', ex)
      };
    

      try {
        let argid = 'beae-03o077p7block-image',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-03o077p7',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-03o077p7');
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
        console.error('BEAE JS ERROR ID beae-03o077p7: ', ex)
      };
    

      try {
        let argid = 'beae-sk3a3zm5block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-sk3a3zm5',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-sk3a3zm5');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let F=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(F)return F.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-sk3a3zm5: ', ex)
      };
    

      try {
        let argid = 'beae-rrbi58c1block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-rrbi58c1',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-rrbi58c1');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let F=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(F)return F.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-rrbi58c1: ', ex)
      };
    

      try {
        let argid = 'beae-3287sjnublock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-3287sjnu',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-3287sjnu');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let F=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(F)return F.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-3287sjnu: ', ex)
      };
    

      try {
        let argid = 'beae-97bp1sp9block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-97bp1sp9',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-97bp1sp9');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let F=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(F)return F.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-97bp1sp9: ', ex)
      };
    

      try {
        let argid = 'beae-4ve15tocblock-image',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-4ve15toc',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-4ve15toc');
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
        console.error('BEAE JS ERROR ID beae-4ve15toc: ', ex)
      };
    

      try {
        let argid = 'beae-bmip7397section-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-bmip7397',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-bmip7397');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-bmip7397: ', ex)
      };
    

      try {
        let argid = 'beae-gw6aa26psection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-gw6aa26p',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-gw6aa26p');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-gw6aa26p: ', ex)
      };
    

      try {
        let argid = 'beae-fkz58xs2block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-fkz58xs2',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-fkz58xs2');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let F=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(F)return F.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-fkz58xs2: ', ex)
      };
    

      try {
        let argid = 'beae-flw7mq8cblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-flw7mq8c',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-flw7mq8c');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let F=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(F)return F.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-flw7mq8c: ', ex)
      };
    

      try {
        let argid = 'beae-ncg8mm1esection-slide-show',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-ncg8mm1e',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-ncg8mm1e');
        args.el = args.els[0];
        ((h) => { window.BeaeSlider&&!h.noRunJs&&window.BeaeSlider(h) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-ncg8mm1e: ', ex)
      };
    

      try {
        let argid = 'beae-wz0sv8f7block-textloop-0',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-wz0sv8f7',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-wz0sv8f7');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let F=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(F)return F.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-wz0sv8f7: ', ex)
      };
    

      try {
        let argid = 'beae-rlhcp48xblock-textloop-0',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-rlhcp48x',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-rlhcp48x');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let F=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(F)return F.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-rlhcp48x: ', ex)
      };
    

      try {
        let argid = 'beae-wz0sv8f7block-textloop-1',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-wz0sv8f7',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-wz0sv8f7');
        args.el = args.els[1];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let F=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(F)return F.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-wz0sv8f7: ', ex)
      };
    

      try {
        let argid = 'beae-rlhcp48xblock-textloop-1',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-rlhcp48x',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-rlhcp48x');
        args.el = args.els[1];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let F=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(F)return F.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-rlhcp48x: ', ex)
      };
    

      try {
        let argid = 'beae-wz0sv8f7block-textloop-2',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-wz0sv8f7',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-wz0sv8f7');
        args.el = args.els[2];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let F=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(F)return F.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-wz0sv8f7: ', ex)
      };
    

      try {
        let argid = 'beae-rlhcp48xblock-textloop-2',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-rlhcp48x',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-rlhcp48x');
        args.el = args.els[2];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let F=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(F)return F.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-rlhcp48x: ', ex)
      };
    

      try {
        let argid = 'beae-wz0sv8f7block-textloop-3',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-wz0sv8f7',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-wz0sv8f7');
        args.el = args.els[3];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let F=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(F)return F.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-wz0sv8f7: ', ex)
      };
    

      try {
        let argid = 'beae-rlhcp48xblock-textloop-3',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-rlhcp48x',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-rlhcp48x');
        args.el = args.els[3];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let F=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(F)return F.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-rlhcp48x: ', ex)
      };
    

      try {
        let argid = 'beae-i6sugjvzblock-image',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-i6sugjvz',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-i6sugjvz');
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
        console.error('BEAE JS ERROR ID beae-i6sugjvz: ', ex)
      };
    

      try {
        let argid = 'beae-44na45rrsection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-44na45rr',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-44na45rr');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-44na45rr: ', ex)
      };
    

      try {
        let argid = 'beae-rag0jh89block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-rag0jh89',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-rag0jh89');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let F=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(F)return F.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-rag0jh89: ', ex)
      };
    

      try {
        let argid = 'beae-lvdvzxafblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-lvdvzxaf',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-lvdvzxaf');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let F=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(F)return F.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-lvdvzxaf: ', ex)
      };
    

      try {
        let argid = 'beae-irb4d9yhsection-slide-show',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-irb4d9yh',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-irb4d9yh');
        args.el = args.els[0];
        ((h) => { window.BeaeSlider&&!h.noRunJs&&window.BeaeSlider(h) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-irb4d9yh: ', ex)
      };
    

      try {
        let argid = 'beae-vt7aoti0block-imageloop-0',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-vt7aoti0',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-vt7aoti0');
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
        console.error('BEAE JS ERROR ID beae-vt7aoti0: ', ex)
      };
    

      try {
        let argid = 'beae-2dohglgoblock-textloop-0',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-2dohglgo',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-2dohglgo');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let F=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(F)return F.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-2dohglgo: ', ex)
      };
    

      try {
        let argid = 'beae-vt7aoti0block-imageloop-1',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-vt7aoti0',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-vt7aoti0');
        args.el = args.els[1];
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
        console.error('BEAE JS ERROR ID beae-vt7aoti0: ', ex)
      };
    

      try {
        let argid = 'beae-2dohglgoblock-textloop-1',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-2dohglgo',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-2dohglgo');
        args.el = args.els[1];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let F=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(F)return F.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-2dohglgo: ', ex)
      };
    

      try {
        let argid = 'beae-vt7aoti0block-imageloop-2',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-vt7aoti0',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-vt7aoti0');
        args.el = args.els[2];
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
        console.error('BEAE JS ERROR ID beae-vt7aoti0: ', ex)
      };
    

      try {
        let argid = 'beae-2dohglgoblock-textloop-2',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-2dohglgo',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-2dohglgo');
        args.el = args.els[2];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let F=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(F)return F.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-2dohglgo: ', ex)
      };
    

      try {
        let argid = 'beae-vt7aoti0block-imageloop-3',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-vt7aoti0',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-vt7aoti0');
        args.el = args.els[3];
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
        console.error('BEAE JS ERROR ID beae-vt7aoti0: ', ex)
      };
    

      try {
        let argid = 'beae-2dohglgoblock-textloop-3',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-2dohglgo',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-2dohglgo');
        args.el = args.els[3];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let F=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(F)return F.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-2dohglgo: ', ex)
      };
    

      try {
        let argid = 'beae-bb79pexqsection-slide-show',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-bb79pexq',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-bb79pexq');
        args.el = args.els[0];
        ((h) => { window.BeaeSlider&&!h.noRunJs&&window.BeaeSlider(h) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-bb79pexq: ', ex)
      };
    

      try {
        let argid = 'beae-5li1iwevblock-textloop-0',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-5li1iwev',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-5li1iwev');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let F=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(F)return F.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-5li1iwev: ', ex)
      };
    

      try {
        let argid = 'beae-qcokc3l0block-textloop-0',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-qcokc3l0',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-qcokc3l0');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let F=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(F)return F.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-qcokc3l0: ', ex)
      };
    

      try {
        let argid = 'beae-5li1iwevblock-textloop-1',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-5li1iwev',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-5li1iwev');
        args.el = args.els[1];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let F=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(F)return F.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-5li1iwev: ', ex)
      };
    

      try {
        let argid = 'beae-qcokc3l0block-textloop-1',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-qcokc3l0',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-qcokc3l0');
        args.el = args.els[1];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let F=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(F)return F.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-qcokc3l0: ', ex)
      };
    

      try {
        let argid = 'beae-5li1iwevblock-textloop-2',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-5li1iwev',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-5li1iwev');
        args.el = args.els[2];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let F=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(F)return F.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-5li1iwev: ', ex)
      };
    

      try {
        let argid = 'beae-qcokc3l0block-textloop-2',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-qcokc3l0',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-qcokc3l0');
        args.el = args.els[2];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let F=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(F)return F.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-qcokc3l0: ', ex)
      };
    

      try {
        let argid = 'beae-rw2tor2tsection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-rw2tor2t',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-rw2tor2t');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-rw2tor2t: ', ex)
      };
    

      try {
        let argid = 'beae-5s2unqwxblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-5s2unqwx',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-5s2unqwx');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let F=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(F)return F.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-5s2unqwx: ', ex)
      };
    

      try {
        let argid = 'beae-k5oecow6block-tabs',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-k5oecow6',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-k5oecow6');
        args.el = args.els[0];
        ((data) => { const prefixClass=`div[data-id=${data.id}] > .beae-tab-wrp`;let tabs=data.el.querySelectorAll(`${prefixClass} > .beae-tab-items > .beae-tab-item`),contents=data.el.querySelectorAll(`${prefixClass} > .beae-tab-contents > .beae-tab-content`),rightside=data.el.querySelectorAll(`${prefixClass} .beae-rightside`),accordions=data.el.querySelectorAll(`${prefixClass} > .beae-tab-contents > .beae-tab-content > .beae-accordion-title--mobile`),activeTab=data.activeTab,toggleImg=data.toggleImg,layout=data.layout,accordionMode=data.accordionMode;function resetActive(){tabs.forEach(b=>b.classList.remove("active")),contents.forEach(b=>b.classList.remove("active")),accordions.forEach(b=>b.classList.remove("active")),toggleImg&&rightside.forEach(b=>b.classList.remove("active")),contents.forEach(b=>{const h=b.querySelector(".beae-accordion-body").style;layout=="accordions"?h.maxHeight="0px":(h.transform="scaleY(0)",h.opacity="0")})}function setActive(b){tabs[b].classList.add("active"),contents[b].classList.add("active"),accordions[b].classList.add("active"),toggleImg&&rightside[b].classList.add("active");const h=contents[b].querySelector(".beae-accordion-body");if(h){const p=h.style;layout=="accordions"?p.maxHeight=data.mode.value=="builder"?"":h.scrollHeight+"px":(p.transform="scaleY(1)",p.transformOrigin="top center",p.opacity="1")}}function removeActive(b){tabs[b].classList.remove("active"),contents[b].classList.remove("active"),accordions[b].classList.remove("active"),toggleImg&&rightside[b].classList.remove("active");const h=contents[b].querySelector(".beae-accordion-body").style;layout=="accordions"?h.maxHeight="0px":(h.transform="scaleY(0)",h.opacity="0")}resetActive(),activeTab!=="none"&&accordionMode!="popup"&&setActive(activeTab),tabs.forEach((b,h)=>{b.addEventListener("click",()=>{resetActive(),setActive(h)})});const section=data.el.closest("section.beae-section");let sectionId="";section&&(sectionId=section.getAttribute("data-sectionid"));let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(b){extOptions={},console.error(b)}if(accordions.forEach((b,h)=>{b.addEventListener("click",()=>{if(accordionMode=="popup"&&data.mode.value!="builder"){const p=b.closest(".beae-tab-content");if(p){let f=document.createElement("div");f.innerHTML=`
                            <h3 class="beae-popup__content-title">${b.querySelector("span").innerHTML}</h3>
                            <div class="beae-popup__content-body ${data.id}">${p.querySelector(".beae-accordion-body").innerHTML}</div>
                            `,window.BeaePopupLibrary.createPopup(f,{layout:extOptions.layout?extOptions.layout:"right",width:extOptions.width?extOptions.width:"400px",layoutMobile:extOptions.layoutMobile?extOptions.layoutMobile:"bottom",sectionId})}}else accordionMode=="single"?(resetActive(),setActive(h)):b.classList.contains("active")?removeActive(h):setActive(h)})}),layout=="tabs"){const b=data.el.querySelector(".beae-tab-contents"),h=b.querySelectorAll(".beae-tab-content-wrp");let p=0,f=-1;h.forEach((w,g)=>{const v=w.offsetHeight;v>p&&(f=g,p=v)}),new ResizeObserver(()=>{b.style.setProperty("--beae-tabs-max-height",`${h[f].offsetHeight}px`)}).observe(h[f])} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-k5oecow6: ', ex)
      };
    

      try {
        let argid = 'beae-yb7mrlw1block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-yb7mrlw1',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-yb7mrlw1');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let F=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(F)return F.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-yb7mrlw1: ', ex)
      };
    

      try {
        let argid = 'beae-hon1s9wlblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-hon1s9wl',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-hon1s9wl');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let F=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(F)return F.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-hon1s9wl: ', ex)
      };
    

      try {
        let argid = 'beae-2svd8wozblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-2svd8woz',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-2svd8woz');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let F=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(F)return F.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-2svd8woz: ', ex)
      };
    

      try {
        let argid = 'beae-4fqvpmpgblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-4fqvpmpg',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-4fqvpmpg');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let F=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(F)return F.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-4fqvpmpg: ', ex)
      };
    

      try {
        let argid = 'beae-kruex3hxblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-kruex3hx',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-kruex3hx');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let F=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(F)return F.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-kruex3hx: ', ex)
      };
    

      try {
        let argid = 'beae-5pzw8sdqblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-5pzw8sdq',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-5pzw8sdq');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let F=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(F)return F.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-5pzw8sdq: ', ex)
      };
    

      try {
        let argid = 'beae-szydd3slsection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-szydd3sl',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-szydd3sl');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-szydd3sl: ', ex)
      };
    

      try {
        let argid = 'beae-ewrri2jnsection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-ewrri2jn',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-ewrri2jn');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-ewrri2jn: ', ex)
      };
    }; if (window.BEAEBASE) {js_QVS88UKU()} else {window.BEAEPAGEJS.push(js_QVS88UKU)} })(); 