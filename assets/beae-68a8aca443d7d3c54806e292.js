(() => { if (window.BEAEPAGEJS === undefined) {
            window.BEAEPAGEJS = [];
          }

          if(window.beaePageSetting == undefined) {
            window.beaePageSetting = {};
          }
          
          window.beaePageSetting.pageId = "68a8aca443d7d3c54806e292";
              window.beaePageSetting.pageTitle = "test 123123"; 
              window.beaePageSetting.pageType = "home";

          let js_RNRDJGOP = () => { let BeaeUseHooks = {};
      try {
        let argid = 'beae-b1jshn8asection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-b1jshn8a',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-b1jshn8a');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-b1jshn8a: ', ex)
      };
    

      try {
        let argid = 'beae-6mpj9za5block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-6mpj9za5',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-6mpj9za5');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let F=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(F)return F.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-6mpj9za5: ', ex)
      };
    

      try {
        let argid = 'beae-xwzs9vvhblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-xwzs9vvh',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-xwzs9vvh');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let F=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(F)return F.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-xwzs9vvh: ', ex)
      };
    

      try {
        let argid = 'beae-4pqp461kbutton-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-4pqp461k',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-4pqp461k');
        args.el = args.els[0];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(n){extOptions={},console.error(n)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let n=document.querySelector(selector+","+selector.replace("#","."));if(n)return n.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let t=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(t,{id:data.id,...extOptions}),e.preventDefault();return}const n=window.createLoading(e.currentTarget);return window.BeaePopupLibrary.lightbox({id:data.id,url:((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(t=>{t.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(t),n.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let n=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(n=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(n,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-4pqp461k: ', ex)
      };
    

      try {
        let argid = 'beae-vh426bensection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-vh426ben',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-vh426ben');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-vh426ben: ', ex)
      };
    

      try {
        let argid = 'beae-hwgc3zajblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-hwgc3zaj',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-hwgc3zaj');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let F=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(F)return F.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-hwgc3zaj: ', ex)
      };
    

      try {
        let argid = 'beae-bo04q17jblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-bo04q17j',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-bo04q17j');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let F=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(F)return F.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-bo04q17j: ', ex)
      };
    

      try {
        let argid = 'beae-4ahy2p2kbutton-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-4ahy2p2k',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-4ahy2p2k');
        args.el = args.els[0];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(n){extOptions={},console.error(n)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let n=document.querySelector(selector+","+selector.replace("#","."));if(n)return n.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let t=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(t,{id:data.id,...extOptions}),e.preventDefault();return}const n=window.createLoading(e.currentTarget);return window.BeaePopupLibrary.lightbox({id:data.id,url:((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(t=>{t.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(t),n.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let n=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(n=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(n,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-4ahy2p2k: ', ex)
      };
    

      try {
        let argid = 'beae-abifa7casection-featured-collection',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-abifa7ca',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-abifa7ca');
        args.el = args.els[0];
        ((a) => { var o;window.BeaeMoneyFormat||(window.BeaeMoneyFormat=(o=a.el.querySelector(".beae-money-format"))==null?void 0:o.innerHTML);const n=a.el.closest(".beae-body--preview");setTimeout(()=>{typeof window.handleSwatchForCardForm=="function"&&window.handleSwatchForCardForm(a),typeof(a==null?void 0:a.promotionPosition)=="number"&&t(a==null?void 0:a.promotionPosition)},100),(["builder"].includes(a.mode.value)||n)&&setTimeout(()=>{typeof window.handleEventFormProductCard=="function"&&window.handleEventFormProductCard()},100);function t(r){const s=a.el.querySelector(".beae-slider-items");if(!s||a.mode.value!="live")return;const u=a.el.querySelector(".beae-promotion > *"),c=s.children;r>=c.length?s.appendChild(u):s.insertBefore(u,c[r]);const d=a.el.querySelector(".beae-promotion");d&&d.remove()} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-abifa7ca: ', ex)
      };
    

      try {
        let argid = 'beae-abifa7casection-slide-show',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-abifa7ca',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-abifa7ca');
        args.el = args.els[0];
        ((h) => { window.BeaeSlider&&!h.noRunJs&&window.BeaeSlider(h) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-abifa7ca: ', ex)
      };
    

      try {
        let argid = 'beae-jnd7nm8nblock-image',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-jnd7nm8n',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-jnd7nm8n');
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
        console.error('BEAE JS ERROR ID beae-jnd7nm8n: ', ex)
      };
    

      try {
        let argid = 'beae-f0q5jca3block-quick-add',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-f0q5jca3',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-f0q5jca3');
        args.el = args.els[0];
        ((y) => { if(y.mode.value=="builder"){if(!y.els)return;for(let b=0;b<y.els.length;b++)if(b==y.loopIndex){const h=y.els[b].closest("form.beae-product-form-next");if(!h)return;const p=h.querySelector(".beae-x-quick-add"),f=h.getAttribute("data-product_id"),m=h.querySelector('script[data-id="Product-json-'+f+'"]')||h.querySelector("#Product-json-"+f),g=JSON.parse(m!=null&&m.innerHTML?m==null?void 0:m.innerHTML:"{}").variants||[];let v=h.getAttribute("data-variant-id"),C=g[0];v&&(C=g.find($=>$.id==v));const S=p.querySelector(".beae-quick-add-content");C!=null&&C.available||S&&(S.innerHTML=p.getAttribute("data-sold-out-text"))}} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-f0q5jca3: ', ex)
      };
    

      try {
        let argid = 'beae-iqueaaycblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-iqueaayc',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-iqueaayc');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let F=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(F)return F.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-iqueaayc: ', ex)
      };
    

      try {
        let argid = 'beae-x2icg9zrsection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-x2icg9zr',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-x2icg9zr');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-x2icg9zr: ', ex)
      };
    

      try {
        let argid = 'beae-com7uec3block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-com7uec3',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-com7uec3');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let F=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(F)return F.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-com7uec3: ', ex)
      };
    

      try {
        let argid = 'beae-sulrusc7block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-sulrusc7',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-sulrusc7');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let F=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(F)return F.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-sulrusc7: ', ex)
      };
    

      try {
        let argid = 'beae-jhquzgyvbutton-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-jhquzgyv',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-jhquzgyv');
        args.el = args.els[0];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(n){extOptions={},console.error(n)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let n=document.querySelector(selector+","+selector.replace("#","."));if(n)return n.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let t=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(t,{id:data.id,...extOptions}),e.preventDefault();return}const n=window.createLoading(e.currentTarget);return window.BeaePopupLibrary.lightbox({id:data.id,url:((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(t=>{t.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(t),n.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let n=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(n=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(n,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-jhquzgyv: ', ex)
      };
    

      try {
        let argid = 'beae-2dxmndiusection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-2dxmndiu',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-2dxmndiu');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-2dxmndiu: ', ex)
      };
    

      try {
        let argid = 'beae-2dxmndiusection-developer',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-2dxmndiu',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-2dxmndiu');
        args.el = args.els[0];
        ((data
) => { document.querySelectorAll(".beae-product-custom-badged-item").forEach(span => {
  if (!span.textContent.trim()) {
    const parentDiv = span.closest("div.beae-x-custom-badged");
    if (parentDiv) {
      parentDiv.style.display = "none";
    }
  }
}); })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-2dxmndiu: ', ex)
      };
    

      try {
        let argid = 'beae-udsz78iybutton-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-udsz78iy',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-udsz78iy');
        args.el = args.els[0];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(n){extOptions={},console.error(n)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let n=document.querySelector(selector+","+selector.replace("#","."));if(n)return n.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let t=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(t,{id:data.id,...extOptions}),e.preventDefault();return}const n=window.createLoading(e.currentTarget);return window.BeaePopupLibrary.lightbox({id:data.id,url:((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(t=>{t.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(t),n.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let n=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(n=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(n,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-udsz78iy: ', ex)
      };
    

      try {
        let argid = 'beae-wohmn2d2block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-wohmn2d2',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-wohmn2d2');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let F=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(F)return F.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-wohmn2d2: ', ex)
      };
    

      try {
        let argid = 'beae-uppfyhiqsection-featured-collection',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-uppfyhiq',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-uppfyhiq');
        args.el = args.els[0];
        ((a) => { var o;window.BeaeMoneyFormat||(window.BeaeMoneyFormat=(o=a.el.querySelector(".beae-money-format"))==null?void 0:o.innerHTML);const n=a.el.closest(".beae-body--preview");setTimeout(()=>{typeof window.handleSwatchForCardForm=="function"&&window.handleSwatchForCardForm(a),typeof(a==null?void 0:a.promotionPosition)=="number"&&t(a==null?void 0:a.promotionPosition)},100),(["builder"].includes(a.mode.value)||n)&&setTimeout(()=>{typeof window.handleEventFormProductCard=="function"&&window.handleEventFormProductCard()},100);function t(r){const s=a.el.querySelector(".beae-slider-items");if(!s||a.mode.value!="live")return;const u=a.el.querySelector(".beae-promotion > *"),c=s.children;r>=c.length?s.appendChild(u):s.insertBefore(u,c[r]);const d=a.el.querySelector(".beae-promotion");d&&d.remove()} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-uppfyhiq: ', ex)
      };
    

      try {
        let argid = 'beae-uppfyhiqsection-slide-show',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-uppfyhiq',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-uppfyhiq');
        args.el = args.els[0];
        ((h) => { window.BeaeSlider&&!h.noRunJs&&window.BeaeSlider(h) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-uppfyhiq: ', ex)
      };
    

      try {
        let argid = 'beae-h4qa4dn4block-image',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-h4qa4dn4',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-h4qa4dn4');
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
        console.error('BEAE JS ERROR ID beae-h4qa4dn4: ', ex)
      };
    

      try {
        let argid = 'beae-hswnixigblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-hswnixig',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-hswnixig');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let F=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(F)return F.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-hswnixig: ', ex)
      };
    

      try {
        let argid = 'beae-kzg39ze0section-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-kzg39ze0',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-kzg39ze0');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-kzg39ze0: ', ex)
      };
    

      try {
        let argid = 'beae-cwhivghnblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-cwhivghn',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-cwhivghn');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let F=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(F)return F.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-cwhivghn: ', ex)
      };
    

      try {
        let argid = 'beae-qhulox6ysection-featured-collection',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-qhulox6y',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-qhulox6y');
        args.el = args.els[0];
        ((a) => { window.BeaeSlideshow&&window.BeaeSlideshow.init(a) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-qhulox6y: ', ex)
      };
    

      try {
        let argid = 'beae-qhulox6ysection-slide-show',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-qhulox6y',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-qhulox6y');
        args.el = args.els[0];
        ((h) => { window.BeaeSlider&&!h.noRunJs&&window.BeaeSlider(h) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-qhulox6y: ', ex)
      };
    

      try {
        let argid = 'beae-dqbkyi23block-image',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-dqbkyi23',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-dqbkyi23');
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
        console.error('BEAE JS ERROR ID beae-dqbkyi23: ', ex)
      };
    

      try {
        let argid = 'beae-9sq9y556block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-9sq9y556',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-9sq9y556');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let F=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(F)return F.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-9sq9y556: ', ex)
      };
    

      try {
        let argid = 'beae-bz76k10qsection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-bz76k10q',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-bz76k10q');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-bz76k10q: ', ex)
      };
    

      try {
        let argid = 'beae-71cub5tbblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-71cub5tb',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-71cub5tb');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let F=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(F)return F.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-71cub5tb: ', ex)
      };
    

      try {
        let argid = 'beae-ajthfd02block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-ajthfd02',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-ajthfd02');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let F=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(F)return F.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-ajthfd02: ', ex)
      };
    }; if (window.BEAEBASE) {js_RNRDJGOP()} else {window.BEAEPAGEJS.push(js_RNRDJGOP)} })(); 