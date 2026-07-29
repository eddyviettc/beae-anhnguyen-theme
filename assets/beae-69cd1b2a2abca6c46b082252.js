(() => { if (window.BEAEPAGEJS === undefined) {
            window.BEAEPAGEJS = [];
          }

          if(window.beaePageSetting == undefined) {
            window.beaePageSetting = {};
          }
          
          window.beaePageSetting.pageId = "69cd1b2a2abca6c46b082252";
              window.beaePageSetting.pageTitle = "đâsads"; 
              window.beaePageSetting.pageType = "page";

          let js_IE834C2S = () => { let BeaeUseHooks = {};
      try {
        let argid = 'beae-1k60h5jisection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-1k60h5ji',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-1k60h5ji');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-1k60h5ji: ', ex)
      };
    

      try {
        let argid = 'beae-1k60h5jisection-slide-show',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-1k60h5ji',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-1k60h5ji');
        args.el = args.els[0];
        ((h) => { window.BeaeSlider&&!h.noRunJs&&window.BeaeSlider(h) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-1k60h5ji: ', ex)
      };
    

      try {
        let argid = 'beae-ax1jzxreblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-ax1jzxre',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-ax1jzxre');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-ax1jzxre: ', ex)
      };
    

      try {
        let argid = 'beae-a8e243txblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-a8e243tx',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-a8e243tx');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-a8e243tx: ', ex)
      };
    

      try {
        let argid = 'beae-hk8ouyr6button-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-hk8ouyr6',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-hk8ouyr6');
        args.el = args.els[0];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{var n,t;let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(o){extOptions={},console.error(o)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let o=document.querySelector(selector+","+selector.replace("#","."));if(o)return o.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let s=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(s,{id:data.id,...extOptions}),e.preventDefault();return}const o=window.createLoading(e.currentTarget);let r=(t=(n=window.BEAE_HELPER)==null?void 0:n.routes)==null?void 0:t.root_url;return window.BeaePopupLibrary.lightbox({id:data.id,url:(r!=="/"?r:"")+((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(s=>{s.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(s),o.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let o=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(o=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(o,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-hk8ouyr6: ', ex)
      };
    

      try {
        let argid = 'beae-9b0amm5jsection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-9b0amm5j',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-9b0amm5j');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-9b0amm5j: ', ex)
      };
    

      try {
        let argid = 'beae-4iffwhlnblock-image',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-4iffwhln',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-4iffwhln');
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
        console.error('BEAE JS ERROR ID beae-4iffwhln: ', ex)
      };
    

      try {
        let argid = 'beae-jz954wssblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-jz954wss',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-jz954wss');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-jz954wss: ', ex)
      };
    

      try {
        let argid = 'beae-zbfb48umblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-zbfb48um',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-zbfb48um');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-zbfb48um: ', ex)
      };
    

      try {
        let argid = 'beae-mm1noj3bblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-mm1noj3b',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-mm1noj3b');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-mm1noj3b: ', ex)
      };
    

      try {
        let argid = 'beae-31hd3el2button-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-31hd3el2',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-31hd3el2');
        args.el = args.els[0];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{var n,t;let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(o){extOptions={},console.error(o)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let o=document.querySelector(selector+","+selector.replace("#","."));if(o)return o.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let s=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(s,{id:data.id,...extOptions}),e.preventDefault();return}const o=window.createLoading(e.currentTarget);let r=(t=(n=window.BEAE_HELPER)==null?void 0:n.routes)==null?void 0:t.root_url;return window.BeaePopupLibrary.lightbox({id:data.id,url:(r!=="/"?r:"")+((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(s=>{s.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(s),o.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let o=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(o=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(o,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-31hd3el2: ', ex)
      };
    

      try {
        let argid = 'beae-arg24whusection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-arg24whu',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-arg24whu');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-arg24whu: ', ex)
      };
    

      try {
        let argid = 'beae-v9bvxu70block-image',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-v9bvxu70',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-v9bvxu70');
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
        console.error('BEAE JS ERROR ID beae-v9bvxu70: ', ex)
      };
    

      try {
        let argid = 'beae-jezv3z9yblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-jezv3z9y',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-jezv3z9y');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-jezv3z9y: ', ex)
      };
    

      try {
        let argid = 'beae-0d57j0lyblock-image',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-0d57j0ly',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-0d57j0ly');
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
        console.error('BEAE JS ERROR ID beae-0d57j0ly: ', ex)
      };
    

      try {
        let argid = 'beae-3domvb54block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-3domvb54',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-3domvb54');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-3domvb54: ', ex)
      };
    

      try {
        let argid = 'beae-ucs6u7f1block-image',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-ucs6u7f1',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-ucs6u7f1');
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
        console.error('BEAE JS ERROR ID beae-ucs6u7f1: ', ex)
      };
    

      try {
        let argid = 'beae-xecbf1qzblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-xecbf1qz',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-xecbf1qz');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-xecbf1qz: ', ex)
      };
    

      try {
        let argid = 'beae-cuxykyxcblock-image',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-cuxykyxc',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-cuxykyxc');
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
        console.error('BEAE JS ERROR ID beae-cuxykyxc: ', ex)
      };
    

      try {
        let argid = 'beae-2wocbotbblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-2wocbotb',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-2wocbotb');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-2wocbotb: ', ex)
      };
    

      try {
        let argid = 'beae-x1yhbnrgsection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-x1yhbnrg',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-x1yhbnrg');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-x1yhbnrg: ', ex)
      };
    

      try {
        let argid = 'beae-x1yhbnrgsection-slide-show',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-x1yhbnrg',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-x1yhbnrg');
        args.el = args.els[0];
        ((h) => { window.BeaeSlider&&!h.noRunJs&&window.BeaeSlider(h) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-x1yhbnrg: ', ex)
      };
    

      try {
        let argid = 'beae-0qadqrl4block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-0qadqrl4',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-0qadqrl4');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-0qadqrl4: ', ex)
      };
    

      try {
        let argid = 'beae-sp51b5a9block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-sp51b5a9',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-sp51b5a9');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-sp51b5a9: ', ex)
      };
    

      try {
        let argid = 'beae-t9goaolhbutton-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-t9goaolh',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-t9goaolh');
        args.el = args.els[0];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{var n,t;let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(o){extOptions={},console.error(o)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let o=document.querySelector(selector+","+selector.replace("#","."));if(o)return o.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let s=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(s,{id:data.id,...extOptions}),e.preventDefault();return}const o=window.createLoading(e.currentTarget);let r=(t=(n=window.BEAE_HELPER)==null?void 0:n.routes)==null?void 0:t.root_url;return window.BeaePopupLibrary.lightbox({id:data.id,url:(r!=="/"?r:"")+((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(s=>{s.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(s),o.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let o=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(o=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(o,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-t9goaolh: ', ex)
      };
    

      try {
        let argid = 'beae-kvvdpkk9section-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-kvvdpkk9',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-kvvdpkk9');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-kvvdpkk9: ', ex)
      };
    

      try {
        let argid = 'beae-7blroq0kblock-image',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-7blroq0k',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-7blroq0k');
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
        console.error('BEAE JS ERROR ID beae-7blroq0k: ', ex)
      };
    

      try {
        let argid = 'beae-m1rr1v3xblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-m1rr1v3x',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-m1rr1v3x');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-m1rr1v3x: ', ex)
      };
    

      try {
        let argid = 'beae-gdz2yd6bblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-gdz2yd6b',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-gdz2yd6b');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-gdz2yd6b: ', ex)
      };
    

      try {
        let argid = 'beae-80ndw2i9block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-80ndw2i9',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-80ndw2i9');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-80ndw2i9: ', ex)
      };
    

      try {
        let argid = 'beae-f4r9w79dbutton-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-f4r9w79d',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-f4r9w79d');
        args.el = args.els[0];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{var n,t;let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(o){extOptions={},console.error(o)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let o=document.querySelector(selector+","+selector.replace("#","."));if(o)return o.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let s=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(s,{id:data.id,...extOptions}),e.preventDefault();return}const o=window.createLoading(e.currentTarget);let r=(t=(n=window.BEAE_HELPER)==null?void 0:n.routes)==null?void 0:t.root_url;return window.BeaePopupLibrary.lightbox({id:data.id,url:(r!=="/"?r:"")+((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(s=>{s.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(s),o.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let o=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(o=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(o,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-f4r9w79d: ', ex)
      };
    

      try {
        let argid = 'beae-6kxfr9g6block-image',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-6kxfr9g6',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-6kxfr9g6');
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
        console.error('BEAE JS ERROR ID beae-6kxfr9g6: ', ex)
      };
    

      try {
        let argid = 'beae-fnrxntkoblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-fnrxntko',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-fnrxntko');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-fnrxntko: ', ex)
      };
    

      try {
        let argid = 'beae-qa81x2eablock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-qa81x2ea',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-qa81x2ea');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-qa81x2ea: ', ex)
      };
    

      try {
        let argid = 'beae-bg6s0eetblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-bg6s0eet',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-bg6s0eet');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-bg6s0eet: ', ex)
      };
    

      try {
        let argid = 'beae-f2vy9646button-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-f2vy9646',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-f2vy9646');
        args.el = args.els[0];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{var n,t;let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(o){extOptions={},console.error(o)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let o=document.querySelector(selector+","+selector.replace("#","."));if(o)return o.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let s=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(s,{id:data.id,...extOptions}),e.preventDefault();return}const o=window.createLoading(e.currentTarget);let r=(t=(n=window.BEAE_HELPER)==null?void 0:n.routes)==null?void 0:t.root_url;return window.BeaePopupLibrary.lightbox({id:data.id,url:(r!=="/"?r:"")+((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(s=>{s.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(s),o.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let o=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(o=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(o,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-f2vy9646: ', ex)
      };
    

      try {
        let argid = 'beae-6df2q3xmsection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-6df2q3xm',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-6df2q3xm');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-6df2q3xm: ', ex)
      };
    

      try {
        let argid = 'beae-m67736sdblock-image',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-m67736sd',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-m67736sd');
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
        console.error('BEAE JS ERROR ID beae-m67736sd: ', ex)
      };
    

      try {
        let argid = 'beae-gdj8xjwkblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-gdj8xjwk',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-gdj8xjwk');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-gdj8xjwk: ', ex)
      };
    

      try {
        let argid = 'beae-x8ldp6okblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-x8ldp6ok',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-x8ldp6ok');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-x8ldp6ok: ', ex)
      };
    

      try {
        let argid = 'beae-l1aa5mylblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-l1aa5myl',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-l1aa5myl');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-l1aa5myl: ', ex)
      };
    

      try {
        let argid = 'beae-afcchn3ubutton-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-afcchn3u',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-afcchn3u');
        args.el = args.els[0];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{var n,t;let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(o){extOptions={},console.error(o)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let o=document.querySelector(selector+","+selector.replace("#","."));if(o)return o.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let s=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(s,{id:data.id,...extOptions}),e.preventDefault();return}const o=window.createLoading(e.currentTarget);let r=(t=(n=window.BEAE_HELPER)==null?void 0:n.routes)==null?void 0:t.root_url;return window.BeaePopupLibrary.lightbox({id:data.id,url:(r!=="/"?r:"")+((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(s=>{s.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(s),o.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let o=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(o=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(o,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-afcchn3u: ', ex)
      };
    

      try {
        let argid = 'beae-ylmn6qyjblock-image',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-ylmn6qyj',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-ylmn6qyj');
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
        console.error('BEAE JS ERROR ID beae-ylmn6qyj: ', ex)
      };
    

      try {
        let argid = 'beae-ht3tw55xblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-ht3tw55x',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-ht3tw55x');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-ht3tw55x: ', ex)
      };
    

      try {
        let argid = 'beae-lxdu2wcxblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-lxdu2wcx',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-lxdu2wcx');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-lxdu2wcx: ', ex)
      };
    

      try {
        let argid = 'beae-ig7rzembblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-ig7rzemb',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-ig7rzemb');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-ig7rzemb: ', ex)
      };
    

      try {
        let argid = 'beae-qr8nbq61button-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-qr8nbq61',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-qr8nbq61');
        args.el = args.els[0];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{var n,t;let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(o){extOptions={},console.error(o)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let o=document.querySelector(selector+","+selector.replace("#","."));if(o)return o.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let s=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(s,{id:data.id,...extOptions}),e.preventDefault();return}const o=window.createLoading(e.currentTarget);let r=(t=(n=window.BEAE_HELPER)==null?void 0:n.routes)==null?void 0:t.root_url;return window.BeaePopupLibrary.lightbox({id:data.id,url:(r!=="/"?r:"")+((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(s=>{s.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(s),o.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let o=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(o=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(o,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-qr8nbq61: ', ex)
      };
    }; if (window.BEAEBASE) {js_IE834C2S()} else {window.BEAEPAGEJS.push(js_IE834C2S)} })(); 