(() => { if (window.BEAEPAGEJS === undefined) {
            window.BEAEPAGEJS = [];
          }

          if(window.beaePageSetting == undefined) {
            window.beaePageSetting = {};
          }
          
          window.beaePageSetting.pageId = "69a5ccaaa10ca6c322064eb3";
              window.beaePageSetting.pageTitle = "âcsv"; 
              window.beaePageSetting.pageType = "home";

          let js_QH863BI1 = () => { let BeaeUseHooks = {};
      try {
        let argid = 'beae-dcvehpvmsection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-dcvehpvm',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-dcvehpvm');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-dcvehpvm: ', ex)
      };
    

      try {
        let argid = 'beae-dcvehpvmsection-slide-show',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-dcvehpvm',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-dcvehpvm');
        args.el = args.els[0];
        ((h) => { window.BeaeSlider&&!h.noRunJs&&window.BeaeSlider(h) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-dcvehpvm: ', ex)
      };
    

      try {
        let argid = 'beae-n4dzt2efblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-n4dzt2ef',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-n4dzt2ef');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-n4dzt2ef: ', ex)
      };
    

      try {
        let argid = 'beae-gpjwwh72button-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-gpjwwh72',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-gpjwwh72');
        args.el = args.els[0];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{var n,t;let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(o){extOptions={},console.error(o)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let o=document.querySelector(selector+","+selector.replace("#","."));if(o)return o.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let s=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(s,{id:data.id,...extOptions}),e.preventDefault();return}const o=window.createLoading(e.currentTarget);let r=(t=(n=window.BEAE_HELPER)==null?void 0:n.routes)==null?void 0:t.root_url;return window.BeaePopupLibrary.lightbox({id:data.id,url:(r!=="/"?r:"")+((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(s=>{s.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(s),o.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let o=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(o=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(o,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-gpjwwh72: ', ex)
      };
    

      try {
        let argid = 'beae-aq66un6vblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-aq66un6v',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-aq66un6v');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-aq66un6v: ', ex)
      };
    

      try {
        let argid = 'beae-0yttenhablock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-0yttenha',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-0yttenha');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-0yttenha: ', ex)
      };
    

      try {
        let argid = 'beae-37k5vua0block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-37k5vua0',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-37k5vua0');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-37k5vua0: ', ex)
      };
    

      try {
        let argid = 'beae-81c6vx04button-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-81c6vx04',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-81c6vx04');
        args.el = args.els[0];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{var n,t;let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(o){extOptions={},console.error(o)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let o=document.querySelector(selector+","+selector.replace("#","."));if(o)return o.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let s=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(s,{id:data.id,...extOptions}),e.preventDefault();return}const o=window.createLoading(e.currentTarget);let r=(t=(n=window.BEAE_HELPER)==null?void 0:n.routes)==null?void 0:t.root_url;return window.BeaePopupLibrary.lightbox({id:data.id,url:(r!=="/"?r:"")+((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(s=>{s.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(s),o.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let o=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(o=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(o,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-81c6vx04: ', ex)
      };
    

      try {
        let argid = 'beae-7st2xm1dsection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-7st2xm1d',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-7st2xm1d');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-7st2xm1d: ', ex)
      };
    

      try {
        let argid = 'beae-nbwc03xosection-slide-show',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-nbwc03xo',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-nbwc03xo');
        args.el = args.els[0];
        ((h) => { window.BeaeSlider&&!h.noRunJs&&window.BeaeSlider(h) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-nbwc03xo: ', ex)
      };
    

      try {
        let argid = 'beae-gsu0cqrvblock-imageloop-0',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-gsu0cqrv',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-gsu0cqrv');
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
        console.error('BEAE JS ERROR ID beae-gsu0cqrv: ', ex)
      };
    

      try {
        let argid = 'beae-px8l18t5block-textloop-0',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-px8l18t5',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-px8l18t5');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-px8l18t5: ', ex)
      };
    

      try {
        let argid = 'beae-6b6kvrwfblock-textloop-0',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-6b6kvrwf',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-6b6kvrwf');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-6b6kvrwf: ', ex)
      };
    

      try {
        let argid = 'beae-87ojyi04button-jsloop-0',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-87ojyi04',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-87ojyi04');
        args.el = args.els[0];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{var n,t;let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(o){extOptions={},console.error(o)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let o=document.querySelector(selector+","+selector.replace("#","."));if(o)return o.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let s=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(s,{id:data.id,...extOptions}),e.preventDefault();return}const o=window.createLoading(e.currentTarget);let r=(t=(n=window.BEAE_HELPER)==null?void 0:n.routes)==null?void 0:t.root_url;return window.BeaePopupLibrary.lightbox({id:data.id,url:(r!=="/"?r:"")+((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(s=>{s.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(s),o.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let o=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(o=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(o,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-87ojyi04: ', ex)
      };
    

      try {
        let argid = 'beae-gsu0cqrvblock-imageloop-1',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-gsu0cqrv',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-gsu0cqrv');
        args.el = args.els[1];
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
        console.error('BEAE JS ERROR ID beae-gsu0cqrv: ', ex)
      };
    

      try {
        let argid = 'beae-px8l18t5block-textloop-1',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-px8l18t5',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-px8l18t5');
        args.el = args.els[1];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-px8l18t5: ', ex)
      };
    

      try {
        let argid = 'beae-6b6kvrwfblock-textloop-1',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-6b6kvrwf',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-6b6kvrwf');
        args.el = args.els[1];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-6b6kvrwf: ', ex)
      };
    

      try {
        let argid = 'beae-87ojyi04button-jsloop-1',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-87ojyi04',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-87ojyi04');
        args.el = args.els[1];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{var n,t;let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(o){extOptions={},console.error(o)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let o=document.querySelector(selector+","+selector.replace("#","."));if(o)return o.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let s=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(s,{id:data.id,...extOptions}),e.preventDefault();return}const o=window.createLoading(e.currentTarget);let r=(t=(n=window.BEAE_HELPER)==null?void 0:n.routes)==null?void 0:t.root_url;return window.BeaePopupLibrary.lightbox({id:data.id,url:(r!=="/"?r:"")+((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(s=>{s.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(s),o.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let o=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(o=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(o,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-87ojyi04: ', ex)
      };
    

      try {
        let argid = 'beae-nvool6z6section-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-nvool6z6',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-nvool6z6');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-nvool6z6: ', ex)
      };
    

      try {
        let argid = 'beae-41bp35cfblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-41bp35cf',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-41bp35cf');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-41bp35cf: ', ex)
      };
    

      try {
        let argid = 'beae-bfjqg5dxblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-bfjqg5dx',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-bfjqg5dx');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-bfjqg5dx: ', ex)
      };
    

      try {
        let argid = 'beae-xyqp9pv7block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-xyqp9pv7',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-xyqp9pv7');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-xyqp9pv7: ', ex)
      };
    

      try {
        let argid = 'beae-i16kjxdrblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-i16kjxdr',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-i16kjxdr');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-i16kjxdr: ', ex)
      };
    

      try {
        let argid = 'beae-izorq6j7section-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-izorq6j7',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-izorq6j7');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-izorq6j7: ', ex)
      };
    

      try {
        let argid = 'beae-qlb61eivblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-qlb61eiv',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-qlb61eiv');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-qlb61eiv: ', ex)
      };
    

      try {
        let argid = 'beae-vhkzxb90section-featured-collection',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-vhkzxb90',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-vhkzxb90');
        args.el = args.els[0];
        ((a) => { window.BeaeSlideshow&&window.BeaeSlideshow.init(a) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-vhkzxb90: ', ex)
      };
    

      try {
        let argid = 'beae-vhkzxb90section-slide-show',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-vhkzxb90',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-vhkzxb90');
        args.el = args.els[0];
        ((h) => { window.BeaeSlider&&!h.noRunJs&&window.BeaeSlider(h) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-vhkzxb90: ', ex)
      };
    

      try {
        let argid = 'beae-bfalfj1oblock-image',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-bfalfj1o',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-bfalfj1o');
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
        console.error('BEAE JS ERROR ID beae-bfalfj1o: ', ex)
      };
    

      try {
        let argid = 'beae-ylhliqoesection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-ylhliqoe',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-ylhliqoe');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-ylhliqoe: ', ex)
      };
    

      try {
        let argid = 'beae-5h9d386isection-slide-show',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-5h9d386i',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-5h9d386i');
        args.el = args.els[0];
        ((h) => { window.BeaeSlider&&!h.noRunJs&&window.BeaeSlider(h) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-5h9d386i: ', ex)
      };
    

      try {
        let argid = 'beae-db598rt8block-textloop-0',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-db598rt8',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-db598rt8');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-db598rt8: ', ex)
      };
    

      try {
        let argid = 'beae-cfasycz9block-textloop-0',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-cfasycz9',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-cfasycz9');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-cfasycz9: ', ex)
      };
    

      try {
        let argid = 'beae-db598rt8block-textloop-1',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-db598rt8',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-db598rt8');
        args.el = args.els[1];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-db598rt8: ', ex)
      };
    

      try {
        let argid = 'beae-cfasycz9block-textloop-1',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-cfasycz9',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-cfasycz9');
        args.el = args.els[1];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-cfasycz9: ', ex)
      };
    

      try {
        let argid = 'beae-db598rt8block-textloop-2',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-db598rt8',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-db598rt8');
        args.el = args.els[2];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-db598rt8: ', ex)
      };
    

      try {
        let argid = 'beae-cfasycz9block-textloop-2',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-cfasycz9',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-cfasycz9');
        args.el = args.els[2];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-cfasycz9: ', ex)
      };
    

      try {
        let argid = 'beae-db598rt8block-textloop-3',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-db598rt8',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-db598rt8');
        args.el = args.els[3];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-db598rt8: ', ex)
      };
    

      try {
        let argid = 'beae-cfasycz9block-textloop-3',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-cfasycz9',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-cfasycz9');
        args.el = args.els[3];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-cfasycz9: ', ex)
      };
    

      try {
        let argid = 'beae-db598rt8block-textloop-4',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-db598rt8',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-db598rt8');
        args.el = args.els[4];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-db598rt8: ', ex)
      };
    

      try {
        let argid = 'beae-cfasycz9block-textloop-4',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-cfasycz9',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-cfasycz9');
        args.el = args.els[4];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-cfasycz9: ', ex)
      };
    

      try {
        let argid = 'beae-db598rt8block-textloop-5',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-db598rt8',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-db598rt8');
        args.el = args.els[5];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-db598rt8: ', ex)
      };
    

      try {
        let argid = 'beae-cfasycz9block-textloop-5',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-cfasycz9',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-cfasycz9');
        args.el = args.els[5];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-cfasycz9: ', ex)
      };
    

      try {
        let argid = 'beae-f0udfmyqsection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-f0udfmyq',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-f0udfmyq');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-f0udfmyq: ', ex)
      };
    

      try {
        let argid = 'beae-f0udfmyqsection-developer',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-f0udfmyq',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-f0udfmyq');
        args.el = args.els[0];
        ((data
) => { const hideSamePriceSpans = () => {
  document
    .querySelectorAll('span[data-is-same-price="true"]')
    .forEach(span => {
      if (span.style.display !== "none") {
        span.style.display = "none";
      }
    });
};

// Run once initially
hideSamePriceSpans();

// Observe DOM changes
const observer = new MutationObserver(hideSamePriceSpans);

observer.observe(document.body, {
  childList: true,
  subtree: true,
  attributes: true
}); })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-f0udfmyq: ', ex)
      };
    

      try {
        let argid = 'beae-rsqinn9cblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-rsqinn9c',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-rsqinn9c');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-rsqinn9c: ', ex)
      };
    

      try {
        let argid = 'beae-vwn0wleublock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-vwn0wleu',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-vwn0wleu');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-vwn0wleu: ', ex)
      };
    

      try {
        let argid = 'beae-dy0tl04vsection-featured-collection',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-dy0tl04v',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-dy0tl04v');
        args.el = args.els[0];
        ((a) => { var c;window.BeaeMoneyFormat||(window.BeaeMoneyFormat=(c=a.el.querySelector(".beae-money-format"))==null?void 0:c.innerHTML);let n=a.el.querySelectorAll(".beae-featuted-collection-nav");const t=a.el.querySelectorAll(".beae-feature-collection-tab-content"),o=a.el.querySelector(".beae-featuted-collection-nav.nav-active"),r=a.el.closest(".beae-body--preview");n.forEach((d,l)=>{a.mode.value=="live"&&!o&&(l===0?(d.classList.add("nav-active"),t[l]&&(t[l].style.display="block",t[l].setAttribute("data-active","true"))):(d.classList.remove("nav-active"),t[l]&&(t[l].style.display="none",t[l].setAttribute("data-active","false"))));let v=!1;d.addEventListener("click",()=>{if(v)return;v=!0,n.forEach(f=>{f.classList.remove("nav-active")}),d.classList.add("nav-active");const y=d.getAttribute("data-handle"),g=a.el.querySelectorAll(".viewall-link");g&&g.forEach(f=>{f.setAttribute("href",`/collections/${y}`)});const h=a.el.querySelector(`.beae-feature-collection-tab-content[data-handle="${y}"]`),u=a.el.querySelector('.beae-feature-collection-tab-content[data-active="true"]');if(a.el.querySelector(".beae-feature-collection-tab-content.content-active")!==null&&a.el.querySelector(".beae-feature-collection-tab-content.content-active").classList.remove("content-active"),u){u.setAttribute("data-active","false");const f=s(u);setTimeout(()=>{u.style.display="none",h&&(h.style.display="block"),setTimeout(()=>{h&&h.setAttribute("data-active","true"),v=!1},50)},f)}else h&&(h.style.display="block"),setTimeout(()=>{h&&h.setAttribute("data-active","true"),v=!1},50)})});function s(d){const v=window.getComputedStyle(d).getPropertyValue("transition-duration");let y=parseFloat(v)*1e3;return v.includes("s")?y=parseFloat(v)*1e3:y=parseFloat(v),y||0}setTimeout(()=>{typeof window.handleSwatchForCardForm=="function"&&window.handleSwatchForCardForm(a),typeof(a==null?void 0:a.promotionPosition)=="number"&&p(a==null?void 0:a.promotionPosition)},100),(["builder"].includes(a.mode.value)||r)&&setTimeout(()=>{typeof window.handleEventFormProductCard=="function"&&window.handleEventFormProductCard()},100);function p(d){if(a.mode.value!="live")return;const l=a.el.querySelectorAll(".beae-slider-items");if(l&&l.length){l.forEach(y=>{const g=a.el.querySelector(".beae-promotion > *");if(!g)return;const h=g.cloneNode(!0),u=y.children;d>=u.length?y.appendChild(h):y.insertBefore(h,u[d])});const v=a.el.querySelector(".beae-promotion");v&&v.remove()}} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-dy0tl04v: ', ex)
      };
    

      try {
        let argid = 'beae-dy0tl04vsection-slide-show',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-dy0tl04v',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-dy0tl04v');
        args.el = args.els[0];
        ((h) => { window.BeaeSlider&&!h.noRunJs&&window.BeaeSlider(h) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-dy0tl04v: ', ex)
      };
    

      try {
        let argid = 'beae-8yme7t2vblock-image',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-8yme7t2v',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-8yme7t2v');
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
        console.error('BEAE JS ERROR ID beae-8yme7t2v: ', ex)
      };
    

      try {
        let argid = 'beae-kudpjcu9block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-kudpjcu9',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-kudpjcu9');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-kudpjcu9: ', ex)
      };
    

      try {
        let argid = 'beae-hywy7zqvblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-hywy7zqv',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-hywy7zqv');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-hywy7zqv: ', ex)
      };
    

      try {
        let argid = 'beae-i7voc368block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-i7voc368',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-i7voc368');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-i7voc368: ', ex)
      };
    }; if (window.BEAEBASE) {js_QH863BI1()} else {window.BEAEPAGEJS.push(js_QH863BI1)} })(); 