
(() => { if (window.BEAEPAGEJS === undefined) {
            window.BEAEPAGEJS = [];
          }

          if(window.beaePageSetting == undefined) {
            window.beaePageSetting = {};
          }
          
          window.beaePageSetting.pageId = "697b6fcc80b36f83140287a2";
              window.beaePageSetting.pageTitle = "ấdsdas"; 
              window.beaePageSetting.pageType = "section";

          let js_GDLO74L9 = () => { let BeaeUseHooks = {};
      try {
        let argid = 'beae-horpioodsection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-horpiood',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-horpiood');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-horpiood: ', ex)
      };
    

      try {
        let argid = 'beae-jvenzb2esection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-jvenzb2e',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-jvenzb2e');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-jvenzb2e: ', ex)
      };
    

      try {
        let argid = 'beae-wit1igf1block-image',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-wit1igf1',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-wit1igf1');
        args.el = args.els[0];
        ((M) => { var O;if(M.el){if(M.shape){const E=M.el.closest(".beae-slider-items");E&&!E.hasAttribute("data-svg")&&(E==null||E.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${M.id}" clipPathUnits="objectBoundingBox">
                                ${M.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),E.setAttribute("data-svg","true"))}let H=M.el.querySelector(".beae-image-content-position"),z,I=window.innerWidth>=768&&M.autoHover;var V=H.querySelector(".beae-img-ratio-control"),L=H.querySelector(".beae-img-comp-container"),T=H.querySelector(".beae-img-comp-container--second");if(V&&T){let E=function(A){let D=0,F;j(),I?H.onmouseover=function(G){R(G)}:A.onmousedown=function(G){R(G)},H.onmouseup=function(){q()},A.ontouchstart=function(G){R(G)},H.ontouchend=function(){q()};function j(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{z=T.offsetWidth})}).observe(T),A.style.left&&parseInt(A.style.left)}function R(G){check=!1,G.preventDefault(),G.clientX?G.clientX:G.touches[0].clientX,parseInt(A.style.left),D=1,H.onmousemove=function(X){W(X)},H.ontouchmove=function(X){W(X)}}function q(){D=0,check=!0}function W(G){if(D==0)return!1;F=U(G),F<0&&(F=0),F>100&&(F=100),Z(F)}function U(G){const X=H.getBoundingClientRect(),re=(G.changedTouches?G.changedTouches[0].clientX:G.clientX)-X.left;return Math.max(0,Math.min(100,Math.round(re*100/z)))}function Z(G){A.style.left=G+"%",T.style.clipPath=`polygon(${G}% 0%, ${G}% 100%, 100% 100%, 100% 0)`,L.style.clipPath=`polygon(0% 100%, 0% 0%, ${G}% 0%, ${G}% 100%)`}};V&&T&&E(V),window.addEventListener("resize",function(){V&&T&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{z=T.offsetWidth})}).observe(T),E(V))})}}let N=(O=M.el)==null?void 0:O.querySelector("a.beae-x-image"),P=N==null?void 0:N.getAttribute("href");N&&M.mode.value!=="builder"&&(P!=null&&P.includes("#"))&&N.addEventListener("click",H=>{let z=document.querySelector(P+","+(P==null?void 0:P.replace("#",".")));if(z)return z.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),H.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-wit1igf1: ', ex)
      };
    

      try {
        let argid = 'beae-c4c79wyzblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-c4c79wyz',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-c4c79wyz');
        args.el = args.els[0];
        ((O) => { var z;let H=(z=O.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(I=>{let E=I==null?void 0:I.getAttribute("href");I&&O.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&I.addEventListener("click",A=>{let D=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-c4c79wyz: ', ex)
      };
    

      try {
        let argid = 'beae-1r5s9ruibutton-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-1r5s9rui',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-1r5s9rui');
        args.el = args.els[0];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{var n,t;let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(o){extOptions={},console.error(o)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let o=document.querySelector(selector+","+selector.replace("#","."));if(o)return o.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let s=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(s,{id:data.id,...extOptions}),e.preventDefault();return}const o=window.createLoading(e.currentTarget);let r=(t=(n=window.BEAE_HELPER)==null?void 0:n.routes)==null?void 0:t.root_url;return window.BeaePopupLibrary.lightbox({id:data.id,url:(r!=="/"?r:"")+((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(s=>{s.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(s),o.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let o=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(o=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(o,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-1r5s9rui: ', ex)
      };
    

      try {
        let argid = 'beae-w8auopg8block-image',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-w8auopg8',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-w8auopg8');
        args.el = args.els[0];
        ((M) => { var O;if(M.el){if(M.shape){const E=M.el.closest(".beae-slider-items");E&&!E.hasAttribute("data-svg")&&(E==null||E.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${M.id}" clipPathUnits="objectBoundingBox">
                                ${M.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),E.setAttribute("data-svg","true"))}let H=M.el.querySelector(".beae-image-content-position"),z,I=window.innerWidth>=768&&M.autoHover;var V=H.querySelector(".beae-img-ratio-control"),L=H.querySelector(".beae-img-comp-container"),T=H.querySelector(".beae-img-comp-container--second");if(V&&T){let E=function(A){let D=0,F;j(),I?H.onmouseover=function(G){R(G)}:A.onmousedown=function(G){R(G)},H.onmouseup=function(){q()},A.ontouchstart=function(G){R(G)},H.ontouchend=function(){q()};function j(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{z=T.offsetWidth})}).observe(T),A.style.left&&parseInt(A.style.left)}function R(G){check=!1,G.preventDefault(),G.clientX?G.clientX:G.touches[0].clientX,parseInt(A.style.left),D=1,H.onmousemove=function(X){W(X)},H.ontouchmove=function(X){W(X)}}function q(){D=0,check=!0}function W(G){if(D==0)return!1;F=U(G),F<0&&(F=0),F>100&&(F=100),Z(F)}function U(G){const X=H.getBoundingClientRect(),re=(G.changedTouches?G.changedTouches[0].clientX:G.clientX)-X.left;return Math.max(0,Math.min(100,Math.round(re*100/z)))}function Z(G){A.style.left=G+"%",T.style.clipPath=`polygon(${G}% 0%, ${G}% 100%, 100% 100%, 100% 0)`,L.style.clipPath=`polygon(0% 100%, 0% 0%, ${G}% 0%, ${G}% 100%)`}};V&&T&&E(V),window.addEventListener("resize",function(){V&&T&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{z=T.offsetWidth})}).observe(T),E(V))})}}let N=(O=M.el)==null?void 0:O.querySelector("a.beae-x-image"),P=N==null?void 0:N.getAttribute("href");N&&M.mode.value!=="builder"&&(P!=null&&P.includes("#"))&&N.addEventListener("click",H=>{let z=document.querySelector(P+","+(P==null?void 0:P.replace("#",".")));if(z)return z.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),H.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-w8auopg8: ', ex)
      };
    

      try {
        let argid = 'beae-lhqhzo39block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-lhqhzo39',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-lhqhzo39');
        args.el = args.els[0];
        ((O) => { var z;let H=(z=O.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(I=>{let E=I==null?void 0:I.getAttribute("href");I&&O.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&I.addEventListener("click",A=>{let D=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-lhqhzo39: ', ex)
      };
    

      try {
        let argid = 'beae-j0o3e9vwbutton-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-j0o3e9vw',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-j0o3e9vw');
        args.el = args.els[0];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{var n,t;let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(o){extOptions={},console.error(o)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let o=document.querySelector(selector+","+selector.replace("#","."));if(o)return o.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let s=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(s,{id:data.id,...extOptions}),e.preventDefault();return}const o=window.createLoading(e.currentTarget);let r=(t=(n=window.BEAE_HELPER)==null?void 0:n.routes)==null?void 0:t.root_url;return window.BeaePopupLibrary.lightbox({id:data.id,url:(r!=="/"?r:"")+((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(s=>{s.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(s),o.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let o=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(o=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(o,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-j0o3e9vw: ', ex)
      };
    }; if (window.BEAEBASE) {js_GDLO74L9()} else {window.BEAEPAGEJS.push(js_GDLO74L9)} })(); 