
(() => { if (window.BEAEPAGEJS === undefined) {
            window.BEAEPAGEJS = [];
          }

          if(window.beaePageSetting == undefined) {
            window.beaePageSetting = {};
          }
          
          window.beaePageSetting.pageId = "6918e18252edfcc505007113";
              window.beaePageSetting.pageTitle = "cxzxcczx"; 
              window.beaePageSetting.pageType = "home";

          let js_A67H9DLL = () => { let BeaeUseHooks = {};
      try {
        let argid = 'beae-wuw0jdlrsection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-wuw0jdlr',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-wuw0jdlr');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-wuw0jdlr: ', ex)
      };
    

      try {
        let argid = 'beae-b79ecez3block-image',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-b79ecez3',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-b79ecez3');
        args.el = args.els[0];
        ((M) => { var P;if(M.el){if(M.shape){const O=M.el.closest(".beae-slider-items");O&&!O.hasAttribute("data-svg")&&(O==null||O.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${M.id}" clipPathUnits="objectBoundingBox">
                                ${M.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),O.setAttribute("data-svg","true"))}let H=M.el.querySelector(".beae-image-content-position"),I,z=window.innerWidth>=768&&M.autoHover;var V=H.querySelector(".beae-img-ratio-control"),L=H.querySelector(".beae-img-comp-container"),T=H.querySelector(".beae-img-comp-container--second");if(V&&T){let O=function(A){let D=0,Z;q(),z?H.onmouseover=function(G){W(G)}:A.onmousedown=function(G){W(G)},H.onmouseup=function(){j()},A.ontouchstart=function(G){W(G)},H.ontouchend=function(){j()};function q(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),A.style.left&&parseInt(A.style.left)}function W(G){check=!1,G.preventDefault(),G.clientX?G.clientX:G.touches[0].clientX,parseInt(A.style.left),D=1,H.onmousemove=function(X){R(X)},H.ontouchmove=function(X){R(X)}}function j(){D=0,check=!0}function R(G){if(D==0)return!1;Z=U(G),Z<0&&(Z=0),Z>100&&(Z=100),F(Z)}function U(G){const X=H.getBoundingClientRect(),ie=(G.changedTouches?G.changedTouches[0].clientX:G.clientX)-X.left;return Math.max(0,Math.min(100,Math.round(ie*100/I)))}function F(G){A.style.left=G+"%",T.style.clipPath=`polygon(${G}% 0%, ${G}% 100%, 100% 100%, 100% 0)`,L.style.clipPath=`polygon(0% 100%, 0% 0%, ${G}% 0%, ${G}% 100%)`}};V&&T&&O(V),window.addEventListener("resize",function(){V&&T&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),O(V))})}}let N=(P=M.el)==null?void 0:P.querySelector("a.beae-x-image"),E=N==null?void 0:N.getAttribute("href");N&&M.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&N.addEventListener("click",H=>{let I=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(I)return I.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),H.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-b79ecez3: ', ex)
      };
    

      try {
        let argid = 'beae-gp6jbs56block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-gp6jbs56',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-gp6jbs56');
        args.el = args.els[0];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-gp6jbs56: ', ex)
      };
    

      try {
        let argid = 'beae-amb9bs1fblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-amb9bs1f',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-amb9bs1f');
        args.el = args.els[0];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-amb9bs1f: ', ex)
      };
    

      try {
        let argid = 'beae-lt7kw7ciblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-lt7kw7ci',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-lt7kw7ci');
        args.el = args.els[0];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-lt7kw7ci: ', ex)
      };
    

      try {
        let argid = 'beae-udk5akwnbutton-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-udk5akwn',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-udk5akwn');
        args.el = args.els[0];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(n){extOptions={},console.error(n)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let n=document.querySelector(selector+","+selector.replace("#","."));if(n)return n.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let t=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(t,{id:data.id,...extOptions}),e.preventDefault();return}const n=window.createLoading(e.currentTarget);return window.BeaePopupLibrary.lightbox({id:data.id,url:((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(t=>{t.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(t),n.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let n=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(n=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(n,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-udk5akwn: ', ex)
      };
    

      try {
        let argid = 'beae-60sh1xj8section-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-60sh1xj8',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-60sh1xj8');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-60sh1xj8: ', ex)
      };
    

      try {
        let argid = 'beae-o5mc2poxblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-o5mc2pox',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-o5mc2pox');
        args.el = args.els[0];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-o5mc2pox: ', ex)
      };
    

      try {
        let argid = 'beae-9pda1a3jblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-9pda1a3j',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-9pda1a3j');
        args.el = args.els[0];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-9pda1a3j: ', ex)
      };
    

      try {
        let argid = 'beae-9pl5cob0button-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-9pl5cob0',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-9pl5cob0');
        args.el = args.els[0];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(n){extOptions={},console.error(n)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let n=document.querySelector(selector+","+selector.replace("#","."));if(n)return n.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let t=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(t,{id:data.id,...extOptions}),e.preventDefault();return}const n=window.createLoading(e.currentTarget);return window.BeaePopupLibrary.lightbox({id:data.id,url:((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(t=>{t.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(t),n.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let n=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(n=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(n,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-9pl5cob0: ', ex)
      };
    }; if (window.BEAEBASE) {js_A67H9DLL()} else {window.BEAEPAGEJS.push(js_A67H9DLL)} })(); 