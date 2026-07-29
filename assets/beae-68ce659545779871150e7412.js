(() => { if (window.BEAEPAGEJS === undefined) {
            window.BEAEPAGEJS = [];
          }

          if(window.beaePageSetting == undefined) {
            window.beaePageSetting = {};
          }
          
          window.beaePageSetting.pageId = "undefined";
              window.beaePageSetting.pageTitle = "undefined"; 
              window.beaePageSetting.pageType = "undefined";

          let js_91CQLOIA = () => { let BeaeUseHooks = {};
      try {
        let argid = 'beae-uoavoz2jsection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-uoavoz2j',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-uoavoz2j');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-uoavoz2j: ', ex)
      };
    

      try {
        let argid = 'beae-uoavoz2jsection-developer',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-uoavoz2j',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-uoavoz2j');
        args.el = args.els[0];
        ((data
) => { document.addEventListener('DOMContentLoaded', function() {
  if(window.innerWidth < 768) {
      return;
    }
  var btn = data.el.querySelector('.beae-button-hero > a');
  var span = document.createElement('span');
  span.classList.add('beae-background-custom');
  btn.appendChild(span);

  function updateSpanDimensions() {
    var btnWidth = btn.offsetWidth; 
    var dimension = btnWidth * 2.25; 

    span.style.width = dimension + 'px';
    span.style.height = dimension + 'px';
  }

  btn.addEventListener('mouseenter', function(e) {
    if(window.innerWidth < 768) {
      return;
    }
    if(span.classList.contains('active')) {
      return;
    }

    var parentOffset = btn.getBoundingClientRect(); 
    var relX = e.clientX - parentOffset.left; 
    var relY = e.clientY - parentOffset.top;

    span.style.top = relY + 'px';
    span.style.left = relX + 'px';
    span.classList.add('active');
    updateSpanDimensions();
  });

  function handleMouseOutAndClick(e) {
    if(window.innerWidth < 768) {
      return;
    }
    var parentOffset = btn.getBoundingClientRect(); 
    var relX = e.clientX - parentOffset.left; 
    var relY = e.clientY - parentOffset.top; 
    span.style.top = relY + 'px';
    span.style.left = relX + 'px';
    span.style.width = '0px';
    span.style.height = '0px';
    span.classList.remove('active');
  }

  btn.addEventListener('mouseout', handleMouseOutAndClick);
  btn.addEventListener('click', handleMouseOutAndClick);
}); })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-uoavoz2j: ', ex)
      };
    

      try {
        let argid = 'beae-fix9ef11block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-fix9ef11',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-fix9ef11');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-fix9ef11: ', ex)
      };
    

      try {
        let argid = 'beae-m9w71dh9block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-m9w71dh9',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-m9w71dh9');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-m9w71dh9: ', ex)
      };
    

      try {
        let argid = 'beae-pwq1tgrwblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-pwq1tgrw',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-pwq1tgrw');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-pwq1tgrw: ', ex)
      };
    

      try {
        let argid = 'beae-pniw5j25button-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-pniw5j25',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-pniw5j25');
        args.el = args.els[0];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(n){extOptions={},console.error(n)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let n=document.querySelector(selector+","+selector.replace("#","."));if(n)return n.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let t=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(t,{id:data.id,...extOptions}),e.preventDefault();return}const n=window.createLoading(e.currentTarget);return window.BeaePopupLibrary.lightbox({id:data.id,url:((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(t=>{t.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(t),n.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let n=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(n=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(n,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-pniw5j25: ', ex)
      };
    

      try {
        let argid = 'beae-0tjecks9section-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-0tjecks9',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-0tjecks9');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-0tjecks9: ', ex)
      };
    

      try {
        let argid = 'beae-oghqaktcsection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-oghqaktc',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-oghqaktc');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-oghqaktc: ', ex)
      };
    

      try {
        let argid = 'beae-bvxvqxs8block-image',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-bvxvqxs8',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-bvxvqxs8');
        args.el = args.els[0];
        ((M) => { var P;if(M.el){if(M.shape){const O=M.el.closest(".beae-slider-items");O&&!O.hasAttribute("data-svg")&&(O==null||O.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${M.id}" clipPathUnits="objectBoundingBox">
                                ${M.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),O.setAttribute("data-svg","true"))}let H=M.el.querySelector(".beae-image-content-position"),I,z=window.innerWidth>=768&&M.autoHover;var V=H.querySelector(".beae-img-ratio-control"),L=H.querySelector(".beae-img-comp-container"),T=H.querySelector(".beae-img-comp-container--second");if(V&&T){let O=function(A){let D=0,Z;q(),z?H.onmouseover=function(U){W(U)}:A.onmousedown=function(U){W(U)},H.onmouseup=function(){j()},A.ontouchstart=function(U){W(U)},H.ontouchend=function(){j()};function q(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),A.style.left&&parseInt(A.style.left)}function W(U){check=!1,U.preventDefault(),U.clientX?U.clientX:U.touches[0].clientX,parseInt(A.style.left),D=1,H.onmousemove=function(K){R(K)},H.ontouchmove=function(K){R(K)}}function j(){D=0,check=!0}function R(U){if(D==0)return!1;Z=G(U),Z<0&&(Z=0),Z>100&&(Z=100),F(Z)}function G(U){const K=H.getBoundingClientRect(),oe=(U.changedTouches?U.changedTouches[0].clientX:U.clientX)-K.left;return Math.max(0,Math.min(100,Math.round(oe*100/I)))}function F(U){A.style.left=U+"%",T.style.clipPath=`polygon(${U}% 0%, ${U}% 100%, 100% 100%, 100% 0)`,L.style.clipPath=`polygon(0% 100%, 0% 0%, ${U}% 0%, ${U}% 100%)`}};V&&T&&O(V),window.addEventListener("resize",function(){V&&T&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),O(V))})}}let N=(P=M.el)==null?void 0:P.querySelector("a.beae-x-image"),E=N==null?void 0:N.getAttribute("href");N&&M.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&N.addEventListener("click",H=>{let I=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(I)return I.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),H.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-bvxvqxs8: ', ex)
      };
    

      try {
        let argid = 'beae-wu2mokaxblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-wu2mokax',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-wu2mokax');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-wu2mokax: ', ex)
      };
    

      try {
        let argid = 'beae-vcejhwq5block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-vcejhwq5',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-vcejhwq5');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-vcejhwq5: ', ex)
      };
    

      try {
        let argid = 'beae-fg86x9p1block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-fg86x9p1',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-fg86x9p1');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-fg86x9p1: ', ex)
      };
    

      try {
        let argid = 'beae-6f41chupbutton-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-6f41chup',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-6f41chup');
        args.el = args.els[0];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(n){extOptions={},console.error(n)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let n=document.querySelector(selector+","+selector.replace("#","."));if(n)return n.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let t=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(t,{id:data.id,...extOptions}),e.preventDefault();return}const n=window.createLoading(e.currentTarget);return window.BeaePopupLibrary.lightbox({id:data.id,url:((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(t=>{t.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(t),n.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let n=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(n=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(n,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-6f41chup: ', ex)
      };
    

      try {
        let argid = 'beae-5516qge8section-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-5516qge8',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-5516qge8');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-5516qge8: ', ex)
      };
    

      try {
        let argid = 'beae-bcj8748yblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-bcj8748y',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-bcj8748y');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-bcj8748y: ', ex)
      };
    

      try {
        let argid = 'beae-q5lkx8rwblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-q5lkx8rw',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-q5lkx8rw');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-q5lkx8rw: ', ex)
      };
    

      try {
        let argid = 'beae-l1b0vg4yblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-l1b0vg4y',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-l1b0vg4y');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-l1b0vg4y: ', ex)
      };
    

      try {
        let argid = 'beae-n5l2dr0hbutton-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-n5l2dr0h',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-n5l2dr0h');
        args.el = args.els[0];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(n){extOptions={},console.error(n)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let n=document.querySelector(selector+","+selector.replace("#","."));if(n)return n.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let t=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(t,{id:data.id,...extOptions}),e.preventDefault();return}const n=window.createLoading(e.currentTarget);return window.BeaePopupLibrary.lightbox({id:data.id,url:((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(t=>{t.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(t),n.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let n=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(n=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(n,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-n5l2dr0h: ', ex)
      };
    

      try {
        let argid = 'beae-h31x8oipblock-image',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-h31x8oip',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-h31x8oip');
        args.el = args.els[0];
        ((M) => { var P;if(M.el){if(M.shape){const O=M.el.closest(".beae-slider-items");O&&!O.hasAttribute("data-svg")&&(O==null||O.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${M.id}" clipPathUnits="objectBoundingBox">
                                ${M.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),O.setAttribute("data-svg","true"))}let H=M.el.querySelector(".beae-image-content-position"),I,z=window.innerWidth>=768&&M.autoHover;var V=H.querySelector(".beae-img-ratio-control"),L=H.querySelector(".beae-img-comp-container"),T=H.querySelector(".beae-img-comp-container--second");if(V&&T){let O=function(A){let D=0,Z;q(),z?H.onmouseover=function(U){W(U)}:A.onmousedown=function(U){W(U)},H.onmouseup=function(){j()},A.ontouchstart=function(U){W(U)},H.ontouchend=function(){j()};function q(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),A.style.left&&parseInt(A.style.left)}function W(U){check=!1,U.preventDefault(),U.clientX?U.clientX:U.touches[0].clientX,parseInt(A.style.left),D=1,H.onmousemove=function(K){R(K)},H.ontouchmove=function(K){R(K)}}function j(){D=0,check=!0}function R(U){if(D==0)return!1;Z=G(U),Z<0&&(Z=0),Z>100&&(Z=100),F(Z)}function G(U){const K=H.getBoundingClientRect(),oe=(U.changedTouches?U.changedTouches[0].clientX:U.clientX)-K.left;return Math.max(0,Math.min(100,Math.round(oe*100/I)))}function F(U){A.style.left=U+"%",T.style.clipPath=`polygon(${U}% 0%, ${U}% 100%, 100% 100%, 100% 0)`,L.style.clipPath=`polygon(0% 100%, 0% 0%, ${U}% 0%, ${U}% 100%)`}};V&&T&&O(V),window.addEventListener("resize",function(){V&&T&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),O(V))})}}let N=(P=M.el)==null?void 0:P.querySelector("a.beae-x-image"),E=N==null?void 0:N.getAttribute("href");N&&M.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&N.addEventListener("click",H=>{let I=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(I)return I.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),H.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-h31x8oip: ', ex)
      };
    

      try {
        let argid = 'beae-nmevvjfesection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-nmevvjfe',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-nmevvjfe');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-nmevvjfe: ', ex)
      };
    

      try {
        let argid = 'beae-ehlhz837section-slide-show',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-ehlhz837',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-ehlhz837');
        args.el = args.els[0];
        ((h) => { window.BeaeSlider&&!h.noRunJs&&window.BeaeSlider(h) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-ehlhz837: ', ex)
      };
    

      try {
        let argid = 'beae-k2c8aikrblock-textloop-0',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-k2c8aikr',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-k2c8aikr');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-k2c8aikr: ', ex)
      };
    

      try {
        let argid = 'beae-bhx1eh15block-textloop-0',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-bhx1eh15',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-bhx1eh15');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-bhx1eh15: ', ex)
      };
    

      try {
        let argid = 'beae-k2c8aikrblock-textloop-1',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-k2c8aikr',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-k2c8aikr');
        args.el = args.els[1];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-k2c8aikr: ', ex)
      };
    

      try {
        let argid = 'beae-bhx1eh15block-textloop-1',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-bhx1eh15',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-bhx1eh15');
        args.el = args.els[1];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-bhx1eh15: ', ex)
      };
    

      try {
        let argid = 'beae-k2c8aikrblock-textloop-2',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-k2c8aikr',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-k2c8aikr');
        args.el = args.els[2];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-k2c8aikr: ', ex)
      };
    

      try {
        let argid = 'beae-bhx1eh15block-textloop-2',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-bhx1eh15',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-bhx1eh15');
        args.el = args.els[2];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-bhx1eh15: ', ex)
      };
    

      try {
        let argid = 'beae-k2c8aikrblock-textloop-3',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-k2c8aikr',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-k2c8aikr');
        args.el = args.els[3];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-k2c8aikr: ', ex)
      };
    

      try {
        let argid = 'beae-bhx1eh15block-textloop-3',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-bhx1eh15',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-bhx1eh15');
        args.el = args.els[3];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-bhx1eh15: ', ex)
      };
    

      try {
        let argid = 'beae-g6m59e5psection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-g6m59e5p',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-g6m59e5p');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-g6m59e5p: ', ex)
      };
    

      try {
        let argid = 'beae-k8xpaha0section-slide-show',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-k8xpaha0',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-k8xpaha0');
        args.el = args.els[0];
        ((h) => { window.BeaeSlider&&!h.noRunJs&&window.BeaeSlider(h) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-k8xpaha0: ', ex)
      };
    

      try {
        let argid = 'beae-ekflo3leblock-imageloop-0',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-ekflo3le',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-ekflo3le');
        args.el = args.els[0];
        ((M) => { var P;if(M.el){if(M.shape){const O=M.el.closest(".beae-slider-items");O&&!O.hasAttribute("data-svg")&&(O==null||O.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${M.id}" clipPathUnits="objectBoundingBox">
                                ${M.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),O.setAttribute("data-svg","true"))}let H=M.el.querySelector(".beae-image-content-position"),I,z=window.innerWidth>=768&&M.autoHover;var V=H.querySelector(".beae-img-ratio-control"),L=H.querySelector(".beae-img-comp-container"),T=H.querySelector(".beae-img-comp-container--second");if(V&&T){let O=function(A){let D=0,Z;q(),z?H.onmouseover=function(U){W(U)}:A.onmousedown=function(U){W(U)},H.onmouseup=function(){j()},A.ontouchstart=function(U){W(U)},H.ontouchend=function(){j()};function q(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),A.style.left&&parseInt(A.style.left)}function W(U){check=!1,U.preventDefault(),U.clientX?U.clientX:U.touches[0].clientX,parseInt(A.style.left),D=1,H.onmousemove=function(K){R(K)},H.ontouchmove=function(K){R(K)}}function j(){D=0,check=!0}function R(U){if(D==0)return!1;Z=G(U),Z<0&&(Z=0),Z>100&&(Z=100),F(Z)}function G(U){const K=H.getBoundingClientRect(),oe=(U.changedTouches?U.changedTouches[0].clientX:U.clientX)-K.left;return Math.max(0,Math.min(100,Math.round(oe*100/I)))}function F(U){A.style.left=U+"%",T.style.clipPath=`polygon(${U}% 0%, ${U}% 100%, 100% 100%, 100% 0)`,L.style.clipPath=`polygon(0% 100%, 0% 0%, ${U}% 0%, ${U}% 100%)`}};V&&T&&O(V),window.addEventListener("resize",function(){V&&T&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),O(V))})}}let N=(P=M.el)==null?void 0:P.querySelector("a.beae-x-image"),E=N==null?void 0:N.getAttribute("href");N&&M.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&N.addEventListener("click",H=>{let I=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(I)return I.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),H.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-ekflo3le: ', ex)
      };
    

      try {
        let argid = 'beae-ekflo3leblock-imageloop-1',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-ekflo3le',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-ekflo3le');
        args.el = args.els[1];
        ((M) => { var P;if(M.el){if(M.shape){const O=M.el.closest(".beae-slider-items");O&&!O.hasAttribute("data-svg")&&(O==null||O.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${M.id}" clipPathUnits="objectBoundingBox">
                                ${M.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),O.setAttribute("data-svg","true"))}let H=M.el.querySelector(".beae-image-content-position"),I,z=window.innerWidth>=768&&M.autoHover;var V=H.querySelector(".beae-img-ratio-control"),L=H.querySelector(".beae-img-comp-container"),T=H.querySelector(".beae-img-comp-container--second");if(V&&T){let O=function(A){let D=0,Z;q(),z?H.onmouseover=function(U){W(U)}:A.onmousedown=function(U){W(U)},H.onmouseup=function(){j()},A.ontouchstart=function(U){W(U)},H.ontouchend=function(){j()};function q(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),A.style.left&&parseInt(A.style.left)}function W(U){check=!1,U.preventDefault(),U.clientX?U.clientX:U.touches[0].clientX,parseInt(A.style.left),D=1,H.onmousemove=function(K){R(K)},H.ontouchmove=function(K){R(K)}}function j(){D=0,check=!0}function R(U){if(D==0)return!1;Z=G(U),Z<0&&(Z=0),Z>100&&(Z=100),F(Z)}function G(U){const K=H.getBoundingClientRect(),oe=(U.changedTouches?U.changedTouches[0].clientX:U.clientX)-K.left;return Math.max(0,Math.min(100,Math.round(oe*100/I)))}function F(U){A.style.left=U+"%",T.style.clipPath=`polygon(${U}% 0%, ${U}% 100%, 100% 100%, 100% 0)`,L.style.clipPath=`polygon(0% 100%, 0% 0%, ${U}% 0%, ${U}% 100%)`}};V&&T&&O(V),window.addEventListener("resize",function(){V&&T&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),O(V))})}}let N=(P=M.el)==null?void 0:P.querySelector("a.beae-x-image"),E=N==null?void 0:N.getAttribute("href");N&&M.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&N.addEventListener("click",H=>{let I=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(I)return I.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),H.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-ekflo3le: ', ex)
      };
    

      try {
        let argid = 'beae-ekflo3leblock-imageloop-2',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-ekflo3le',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-ekflo3le');
        args.el = args.els[2];
        ((M) => { var P;if(M.el){if(M.shape){const O=M.el.closest(".beae-slider-items");O&&!O.hasAttribute("data-svg")&&(O==null||O.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${M.id}" clipPathUnits="objectBoundingBox">
                                ${M.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),O.setAttribute("data-svg","true"))}let H=M.el.querySelector(".beae-image-content-position"),I,z=window.innerWidth>=768&&M.autoHover;var V=H.querySelector(".beae-img-ratio-control"),L=H.querySelector(".beae-img-comp-container"),T=H.querySelector(".beae-img-comp-container--second");if(V&&T){let O=function(A){let D=0,Z;q(),z?H.onmouseover=function(U){W(U)}:A.onmousedown=function(U){W(U)},H.onmouseup=function(){j()},A.ontouchstart=function(U){W(U)},H.ontouchend=function(){j()};function q(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),A.style.left&&parseInt(A.style.left)}function W(U){check=!1,U.preventDefault(),U.clientX?U.clientX:U.touches[0].clientX,parseInt(A.style.left),D=1,H.onmousemove=function(K){R(K)},H.ontouchmove=function(K){R(K)}}function j(){D=0,check=!0}function R(U){if(D==0)return!1;Z=G(U),Z<0&&(Z=0),Z>100&&(Z=100),F(Z)}function G(U){const K=H.getBoundingClientRect(),oe=(U.changedTouches?U.changedTouches[0].clientX:U.clientX)-K.left;return Math.max(0,Math.min(100,Math.round(oe*100/I)))}function F(U){A.style.left=U+"%",T.style.clipPath=`polygon(${U}% 0%, ${U}% 100%, 100% 100%, 100% 0)`,L.style.clipPath=`polygon(0% 100%, 0% 0%, ${U}% 0%, ${U}% 100%)`}};V&&T&&O(V),window.addEventListener("resize",function(){V&&T&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),O(V))})}}let N=(P=M.el)==null?void 0:P.querySelector("a.beae-x-image"),E=N==null?void 0:N.getAttribute("href");N&&M.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&N.addEventListener("click",H=>{let I=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(I)return I.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),H.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-ekflo3le: ', ex)
      };
    

      try {
        let argid = 'beae-p328eiitsection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-p328eiit',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-p328eiit');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-p328eiit: ', ex)
      };
    

      try {
        let argid = 'beae-z4uvfjbwblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-z4uvfjbw',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-z4uvfjbw');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-z4uvfjbw: ', ex)
      };
    

      try {
        let argid = 'beae-3hket5slblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-3hket5sl',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-3hket5sl');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-3hket5sl: ', ex)
      };
    

      try {
        let argid = 'beae-r8swajaoblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-r8swajao',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-r8swajao');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-r8swajao: ', ex)
      };
    

      try {
        let argid = 'beae-g2kwntjvblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-g2kwntjv',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-g2kwntjv');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-g2kwntjv: ', ex)
      };
    

      try {
        let argid = 'beae-adkgccttblock-video',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-adkgcctt',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-adkgcctt');
        args.el = args.els[0];
        ((data) => { if(data.mode.value==="builder")return;if(data.source=="self hosted"&&data.el.querySelector(".beae_video")&&data.mute){const f=data.el.querySelector(".beae_video");f.muted=!0,f.play().catch(b=>{console.warn("Autoplay bị chặn:",b)})}const playButton=data.el.querySelector(".beae-video_overlay-icon"),playIcon=playButton&&playButton.querySelector(".beae-video-icon-play"),closePlayingButton=data.el.querySelector(".beae-close-video"),closeVideoFn=()=>{let f=playButton.closest(".beae-grid-block"),b=data.el.querySelector(".beae-x-video--wrapper");b&&b.classList.remove("playing"),f&&(f.style.zIndex=""),data.lightbox&&(document.querySelector("div.beae-builder")&&(document.querySelector("div.beae-builder").style.zIndex=""),f&&f.setAttribute("style",""),document.body.style.overflow="",document.documentElement.style.overflow="");let k=data.el.querySelector(".beae_video");k&&(k.autoplay=!1,k.pause());let g=data.el.querySelector(".beae_iframe");g&&g.getAttribute("src").indexOf("&autoplay=1")>-1&&g.setAttribute("src",g.getAttribute("src").replace("&autoplay=1",""))};if(playButton&&(playIcon&&playIcon.addEventListener("click",e=>{if(data.source=="self hosted"){let f=data.el.querySelector(".beae_video");f.autoplay=!0,f.load(),playButton.classList.remove("beae-overlay"),data.play_icon&&(data.el.querySelector(".beae-video-icon-play").style.display="none")}else{let f=data.el.querySelector(".beae_iframe"),b=f.getAttribute("src")+"&autoplay=1";f.setAttribute("src",b),playButton.classList.remove("beae-overlay"),data.play_icon&&(data.el.querySelector(".beae-video-icon-play").style.display="none")}let gridBlock=playButton.closest(".beae-grid-block"),wrapper=data.el.querySelector(".beae-x-video--wrapper");if(wrapper&&wrapper.classList.add("playing"),gridBlock&&(gridBlock.style.zIndex=1e8),data.lightbox){let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(f){extOptions={},console.error(f)}window.BeaePopupLibrary.createPopup(data.el.querySelector(".beae-block_video-player"),{width:"1070px",sectionId:data.id,...extOptions}),closeVideoFn()}}),closePlayingButton&&closePlayingButton.addEventListener("click",closeVideoFn)),["youtube","vimeo"].includes(data.source)&&(data.autoplay||data.loop)){let f=data.el.querySelector(".beae_iframe"),b={isloop:data.loop,autoplay:data.autoplay,idBlock:data.uniqueId||data.id,controls:data.player_controls?1:0};if(data.source=="youtube"){const k=/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;let g=data.srcYoutube.match(k),v=g&&g[2].length===11?g[2]:null;const S=/[?&]t=(\d+)s/,B=data.srcYoutube.match(S),C=B?B[1]:0;b.start=C,b.id=v,b.src=location.protocol+"//www.youtube.com/embed/"+v}switch(data.source){case"youtube":setTimeout(()=>{window.BEAEVIDEO.handleLoopYoutube&&window.BEAEVIDEO.handleLoopYoutube(b,data.uniqueId||data.id)});break;case"vimeo":setTimeout(()=>{window.BEAEVIDEO.handleLoopVimeo&&window.BEAEVIDEO.handleLoopVimeo(b,f)});break}} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-adkgcctt: ', ex)
      };
    

      try {
        let argid = 'beae-x6m1jimmsection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-x6m1jimm',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-x6m1jimm');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-x6m1jimm: ', ex)
      };
    

      try {
        let argid = 'beae-j211hik4section-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-j211hik4',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-j211hik4');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-j211hik4: ', ex)
      };
    

      try {
        let argid = 'beae-lpoo0ushblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-lpoo0ush',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-lpoo0ush');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-lpoo0ush: ', ex)
      };
    

      try {
        let argid = 'beae-c1uaexjksection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-c1uaexjk',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-c1uaexjk');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-c1uaexjk: ', ex)
      };
    

      try {
        let argid = 'beae-0bqkinvvblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-0bqkinvv',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-0bqkinvv');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-0bqkinvv: ', ex)
      };
    

      try {
        let argid = 'beae-b71hr86hsection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-b71hr86h',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-b71hr86h');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-b71hr86h: ', ex)
      };
    

      try {
        let argid = 'beae-7ix2tkbbsection-slide-show',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-7ix2tkbb',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-7ix2tkbb');
        args.el = args.els[0];
        ((h) => { window.BeaeSlider&&!h.noRunJs&&window.BeaeSlider(h) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-7ix2tkbb: ', ex)
      };
    

      try {
        let argid = 'beae-9zibigkkblock-textloop-0',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-9zibigkk',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-9zibigkk');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-9zibigkk: ', ex)
      };
    

      try {
        let argid = 'beae-c4pgtkzmblock-imageloop-0',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-c4pgtkzm',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-c4pgtkzm');
        args.el = args.els[0];
        ((M) => { var P;if(M.el){if(M.shape){const O=M.el.closest(".beae-slider-items");O&&!O.hasAttribute("data-svg")&&(O==null||O.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${M.id}" clipPathUnits="objectBoundingBox">
                                ${M.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),O.setAttribute("data-svg","true"))}let H=M.el.querySelector(".beae-image-content-position"),I,z=window.innerWidth>=768&&M.autoHover;var V=H.querySelector(".beae-img-ratio-control"),L=H.querySelector(".beae-img-comp-container"),T=H.querySelector(".beae-img-comp-container--second");if(V&&T){let O=function(A){let D=0,Z;q(),z?H.onmouseover=function(U){W(U)}:A.onmousedown=function(U){W(U)},H.onmouseup=function(){j()},A.ontouchstart=function(U){W(U)},H.ontouchend=function(){j()};function q(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),A.style.left&&parseInt(A.style.left)}function W(U){check=!1,U.preventDefault(),U.clientX?U.clientX:U.touches[0].clientX,parseInt(A.style.left),D=1,H.onmousemove=function(K){R(K)},H.ontouchmove=function(K){R(K)}}function j(){D=0,check=!0}function R(U){if(D==0)return!1;Z=G(U),Z<0&&(Z=0),Z>100&&(Z=100),F(Z)}function G(U){const K=H.getBoundingClientRect(),oe=(U.changedTouches?U.changedTouches[0].clientX:U.clientX)-K.left;return Math.max(0,Math.min(100,Math.round(oe*100/I)))}function F(U){A.style.left=U+"%",T.style.clipPath=`polygon(${U}% 0%, ${U}% 100%, 100% 100%, 100% 0)`,L.style.clipPath=`polygon(0% 100%, 0% 0%, ${U}% 0%, ${U}% 100%)`}};V&&T&&O(V),window.addEventListener("resize",function(){V&&T&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),O(V))})}}let N=(P=M.el)==null?void 0:P.querySelector("a.beae-x-image"),E=N==null?void 0:N.getAttribute("href");N&&M.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&N.addEventListener("click",H=>{let I=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(I)return I.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),H.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-c4pgtkzm: ', ex)
      };
    

      try {
        let argid = 'beae-f3j66xbdbutton-jsloop-0',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-f3j66xbd',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-f3j66xbd');
        args.el = args.els[0];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(n){extOptions={},console.error(n)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let n=document.querySelector(selector+","+selector.replace("#","."));if(n)return n.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let t=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(t,{id:data.id,...extOptions}),e.preventDefault();return}const n=window.createLoading(e.currentTarget);return window.BeaePopupLibrary.lightbox({id:data.id,url:((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(t=>{t.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(t),n.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let n=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(n=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(n,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-f3j66xbd: ', ex)
      };
    

      try {
        let argid = 'beae-9zibigkkblock-textloop-1',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-9zibigkk',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-9zibigkk');
        args.el = args.els[1];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-9zibigkk: ', ex)
      };
    

      try {
        let argid = 'beae-c4pgtkzmblock-imageloop-1',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-c4pgtkzm',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-c4pgtkzm');
        args.el = args.els[1];
        ((M) => { var P;if(M.el){if(M.shape){const O=M.el.closest(".beae-slider-items");O&&!O.hasAttribute("data-svg")&&(O==null||O.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${M.id}" clipPathUnits="objectBoundingBox">
                                ${M.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),O.setAttribute("data-svg","true"))}let H=M.el.querySelector(".beae-image-content-position"),I,z=window.innerWidth>=768&&M.autoHover;var V=H.querySelector(".beae-img-ratio-control"),L=H.querySelector(".beae-img-comp-container"),T=H.querySelector(".beae-img-comp-container--second");if(V&&T){let O=function(A){let D=0,Z;q(),z?H.onmouseover=function(U){W(U)}:A.onmousedown=function(U){W(U)},H.onmouseup=function(){j()},A.ontouchstart=function(U){W(U)},H.ontouchend=function(){j()};function q(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),A.style.left&&parseInt(A.style.left)}function W(U){check=!1,U.preventDefault(),U.clientX?U.clientX:U.touches[0].clientX,parseInt(A.style.left),D=1,H.onmousemove=function(K){R(K)},H.ontouchmove=function(K){R(K)}}function j(){D=0,check=!0}function R(U){if(D==0)return!1;Z=G(U),Z<0&&(Z=0),Z>100&&(Z=100),F(Z)}function G(U){const K=H.getBoundingClientRect(),oe=(U.changedTouches?U.changedTouches[0].clientX:U.clientX)-K.left;return Math.max(0,Math.min(100,Math.round(oe*100/I)))}function F(U){A.style.left=U+"%",T.style.clipPath=`polygon(${U}% 0%, ${U}% 100%, 100% 100%, 100% 0)`,L.style.clipPath=`polygon(0% 100%, 0% 0%, ${U}% 0%, ${U}% 100%)`}};V&&T&&O(V),window.addEventListener("resize",function(){V&&T&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),O(V))})}}let N=(P=M.el)==null?void 0:P.querySelector("a.beae-x-image"),E=N==null?void 0:N.getAttribute("href");N&&M.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&N.addEventListener("click",H=>{let I=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(I)return I.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),H.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-c4pgtkzm: ', ex)
      };
    

      try {
        let argid = 'beae-f3j66xbdbutton-jsloop-1',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-f3j66xbd',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-f3j66xbd');
        args.el = args.els[1];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(n){extOptions={},console.error(n)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let n=document.querySelector(selector+","+selector.replace("#","."));if(n)return n.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let t=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(t,{id:data.id,...extOptions}),e.preventDefault();return}const n=window.createLoading(e.currentTarget);return window.BeaePopupLibrary.lightbox({id:data.id,url:((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(t=>{t.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(t),n.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let n=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(n=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(n,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-f3j66xbd: ', ex)
      };
    

      try {
        let argid = 'beae-9zibigkkblock-textloop-2',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-9zibigkk',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-9zibigkk');
        args.el = args.els[2];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-9zibigkk: ', ex)
      };
    

      try {
        let argid = 'beae-c4pgtkzmblock-imageloop-2',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-c4pgtkzm',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-c4pgtkzm');
        args.el = args.els[2];
        ((M) => { var P;if(M.el){if(M.shape){const O=M.el.closest(".beae-slider-items");O&&!O.hasAttribute("data-svg")&&(O==null||O.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${M.id}" clipPathUnits="objectBoundingBox">
                                ${M.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),O.setAttribute("data-svg","true"))}let H=M.el.querySelector(".beae-image-content-position"),I,z=window.innerWidth>=768&&M.autoHover;var V=H.querySelector(".beae-img-ratio-control"),L=H.querySelector(".beae-img-comp-container"),T=H.querySelector(".beae-img-comp-container--second");if(V&&T){let O=function(A){let D=0,Z;q(),z?H.onmouseover=function(U){W(U)}:A.onmousedown=function(U){W(U)},H.onmouseup=function(){j()},A.ontouchstart=function(U){W(U)},H.ontouchend=function(){j()};function q(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),A.style.left&&parseInt(A.style.left)}function W(U){check=!1,U.preventDefault(),U.clientX?U.clientX:U.touches[0].clientX,parseInt(A.style.left),D=1,H.onmousemove=function(K){R(K)},H.ontouchmove=function(K){R(K)}}function j(){D=0,check=!0}function R(U){if(D==0)return!1;Z=G(U),Z<0&&(Z=0),Z>100&&(Z=100),F(Z)}function G(U){const K=H.getBoundingClientRect(),oe=(U.changedTouches?U.changedTouches[0].clientX:U.clientX)-K.left;return Math.max(0,Math.min(100,Math.round(oe*100/I)))}function F(U){A.style.left=U+"%",T.style.clipPath=`polygon(${U}% 0%, ${U}% 100%, 100% 100%, 100% 0)`,L.style.clipPath=`polygon(0% 100%, 0% 0%, ${U}% 0%, ${U}% 100%)`}};V&&T&&O(V),window.addEventListener("resize",function(){V&&T&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),O(V))})}}let N=(P=M.el)==null?void 0:P.querySelector("a.beae-x-image"),E=N==null?void 0:N.getAttribute("href");N&&M.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&N.addEventListener("click",H=>{let I=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(I)return I.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),H.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-c4pgtkzm: ', ex)
      };
    

      try {
        let argid = 'beae-f3j66xbdbutton-jsloop-2',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-f3j66xbd',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-f3j66xbd');
        args.el = args.els[2];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(n){extOptions={},console.error(n)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let n=document.querySelector(selector+","+selector.replace("#","."));if(n)return n.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let t=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(t,{id:data.id,...extOptions}),e.preventDefault();return}const n=window.createLoading(e.currentTarget);return window.BeaePopupLibrary.lightbox({id:data.id,url:((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(t=>{t.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(t),n.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let n=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(n=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(n,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-f3j66xbd: ', ex)
      };
    

      try {
        let argid = 'beae-9zibigkkblock-textloop-3',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-9zibigkk',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-9zibigkk');
        args.el = args.els[3];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-9zibigkk: ', ex)
      };
    

      try {
        let argid = 'beae-c4pgtkzmblock-imageloop-3',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-c4pgtkzm',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-c4pgtkzm');
        args.el = args.els[3];
        ((M) => { var P;if(M.el){if(M.shape){const O=M.el.closest(".beae-slider-items");O&&!O.hasAttribute("data-svg")&&(O==null||O.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${M.id}" clipPathUnits="objectBoundingBox">
                                ${M.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),O.setAttribute("data-svg","true"))}let H=M.el.querySelector(".beae-image-content-position"),I,z=window.innerWidth>=768&&M.autoHover;var V=H.querySelector(".beae-img-ratio-control"),L=H.querySelector(".beae-img-comp-container"),T=H.querySelector(".beae-img-comp-container--second");if(V&&T){let O=function(A){let D=0,Z;q(),z?H.onmouseover=function(U){W(U)}:A.onmousedown=function(U){W(U)},H.onmouseup=function(){j()},A.ontouchstart=function(U){W(U)},H.ontouchend=function(){j()};function q(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),A.style.left&&parseInt(A.style.left)}function W(U){check=!1,U.preventDefault(),U.clientX?U.clientX:U.touches[0].clientX,parseInt(A.style.left),D=1,H.onmousemove=function(K){R(K)},H.ontouchmove=function(K){R(K)}}function j(){D=0,check=!0}function R(U){if(D==0)return!1;Z=G(U),Z<0&&(Z=0),Z>100&&(Z=100),F(Z)}function G(U){const K=H.getBoundingClientRect(),oe=(U.changedTouches?U.changedTouches[0].clientX:U.clientX)-K.left;return Math.max(0,Math.min(100,Math.round(oe*100/I)))}function F(U){A.style.left=U+"%",T.style.clipPath=`polygon(${U}% 0%, ${U}% 100%, 100% 100%, 100% 0)`,L.style.clipPath=`polygon(0% 100%, 0% 0%, ${U}% 0%, ${U}% 100%)`}};V&&T&&O(V),window.addEventListener("resize",function(){V&&T&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),O(V))})}}let N=(P=M.el)==null?void 0:P.querySelector("a.beae-x-image"),E=N==null?void 0:N.getAttribute("href");N&&M.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&N.addEventListener("click",H=>{let I=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(I)return I.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),H.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-c4pgtkzm: ', ex)
      };
    

      try {
        let argid = 'beae-f3j66xbdbutton-jsloop-3',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-f3j66xbd',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-f3j66xbd');
        args.el = args.els[3];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(n){extOptions={},console.error(n)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let n=document.querySelector(selector+","+selector.replace("#","."));if(n)return n.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let t=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(t,{id:data.id,...extOptions}),e.preventDefault();return}const n=window.createLoading(e.currentTarget);return window.BeaePopupLibrary.lightbox({id:data.id,url:((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(t=>{t.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(t),n.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let n=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(n=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(n,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-f3j66xbd: ', ex)
      };
    

      try {
        let argid = 'beae-4g5dqhhisection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-4g5dqhhi',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-4g5dqhhi');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-4g5dqhhi: ', ex)
      };
    

      try {
        let argid = 'beae-47s4wnjqblock-video',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-47s4wnjq',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-47s4wnjq');
        args.el = args.els[0];
        ((data) => { if(data.mode.value==="builder")return;if(data.source=="self hosted"&&data.el.querySelector(".beae_video")&&data.mute){const f=data.el.querySelector(".beae_video");f.muted=!0,f.play().catch(b=>{console.warn("Autoplay bị chặn:",b)})}const playButton=data.el.querySelector(".beae-video_overlay-icon"),playIcon=playButton&&playButton.querySelector(".beae-video-icon-play"),closePlayingButton=data.el.querySelector(".beae-close-video"),closeVideoFn=()=>{let f=playButton.closest(".beae-grid-block"),b=data.el.querySelector(".beae-x-video--wrapper");b&&b.classList.remove("playing"),f&&(f.style.zIndex=""),data.lightbox&&(document.querySelector("div.beae-builder")&&(document.querySelector("div.beae-builder").style.zIndex=""),f&&f.setAttribute("style",""),document.body.style.overflow="",document.documentElement.style.overflow="");let k=data.el.querySelector(".beae_video");k&&(k.autoplay=!1,k.pause());let g=data.el.querySelector(".beae_iframe");g&&g.getAttribute("src").indexOf("&autoplay=1")>-1&&g.setAttribute("src",g.getAttribute("src").replace("&autoplay=1",""))};if(playButton&&(playIcon&&playIcon.addEventListener("click",e=>{if(data.source=="self hosted"){let f=data.el.querySelector(".beae_video");f.autoplay=!0,f.load(),playButton.classList.remove("beae-overlay"),data.play_icon&&(data.el.querySelector(".beae-video-icon-play").style.display="none")}else{let f=data.el.querySelector(".beae_iframe"),b=f.getAttribute("src")+"&autoplay=1";f.setAttribute("src",b),playButton.classList.remove("beae-overlay"),data.play_icon&&(data.el.querySelector(".beae-video-icon-play").style.display="none")}let gridBlock=playButton.closest(".beae-grid-block"),wrapper=data.el.querySelector(".beae-x-video--wrapper");if(wrapper&&wrapper.classList.add("playing"),gridBlock&&(gridBlock.style.zIndex=1e8),data.lightbox){let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(f){extOptions={},console.error(f)}window.BeaePopupLibrary.createPopup(data.el.querySelector(".beae-block_video-player"),{width:"1070px",sectionId:data.id,...extOptions}),closeVideoFn()}}),closePlayingButton&&closePlayingButton.addEventListener("click",closeVideoFn)),["youtube","vimeo"].includes(data.source)&&(data.autoplay||data.loop)){let f=data.el.querySelector(".beae_iframe"),b={isloop:data.loop,autoplay:data.autoplay,idBlock:data.uniqueId||data.id,controls:data.player_controls?1:0};if(data.source=="youtube"){const k=/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;let g=data.srcYoutube.match(k),v=g&&g[2].length===11?g[2]:null;const S=/[?&]t=(\d+)s/,B=data.srcYoutube.match(S),C=B?B[1]:0;b.start=C,b.id=v,b.src=location.protocol+"//www.youtube.com/embed/"+v}switch(data.source){case"youtube":setTimeout(()=>{window.BEAEVIDEO.handleLoopYoutube&&window.BEAEVIDEO.handleLoopYoutube(b,data.uniqueId||data.id)});break;case"vimeo":setTimeout(()=>{window.BEAEVIDEO.handleLoopVimeo&&window.BEAEVIDEO.handleLoopVimeo(b,f)});break}} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-47s4wnjq: ', ex)
      };
    

      try {
        let argid = 'beae-gqjq1wqfblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-gqjq1wqf',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-gqjq1wqf');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-gqjq1wqf: ', ex)
      };
    

      try {
        let argid = 'beae-9tkege4kblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-9tkege4k',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-9tkege4k');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-9tkege4k: ', ex)
      };
    

      try {
        let argid = 'beae-hzbuqyi6block-tabs',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-hzbuqyi6',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-hzbuqyi6');
        args.el = args.els[0];
        ((data) => { const prefixClass=`div[data-id=${data.id}] > .beae-tab-wrp`;let tabs=data.el.querySelectorAll(`${prefixClass} > .beae-tab-items > .beae-tab-item`),contents=data.el.querySelectorAll(`${prefixClass} > .beae-tab-contents > .beae-tab-content`),rightside=data.el.querySelectorAll(`${prefixClass} .beae-rightside`),accordions=data.el.querySelectorAll(`${prefixClass} > .beae-tab-contents > .beae-tab-content > .beae-accordion-title--mobile`),activeTab=window.outerWidth&&window.outerWidth<=768?data.activeTabMobile:data.activeTab,toggleImg=data.toggleImg,layout=data.layout,accordionMode=data.accordionMode;function resetActive(){tabs.forEach(f=>f.classList.remove("active")),contents.forEach(f=>f.classList.remove("active")),accordions.forEach(f=>f.classList.remove("active")),toggleImg&&rightside.forEach(f=>f.classList.remove("active")),contents.forEach(f=>{const b=f.querySelector(".beae-accordion-body").style;layout=="accordions"?b.maxHeight="0px":(b.transform="scaleY(0)",b.opacity="0")})}function setActive(f){tabs[f].classList.add("active"),contents[f].classList.add("active"),accordions[f].classList.add("active"),toggleImg&&rightside[f].classList.add("active");const b=contents[f].querySelector(".beae-accordion-body");if(b){const k=b.style;layout=="accordions"?k.maxHeight=data.mode.value=="builder"?"":b.scrollHeight+"px":(k.transform="scaleY(1)",k.transformOrigin="top center",k.opacity="1")}}function removeActive(f){tabs[f].classList.remove("active"),contents[f].classList.remove("active"),accordions[f].classList.remove("active"),toggleImg&&rightside[f].classList.remove("active");const b=contents[f].querySelector(".beae-accordion-body").style;layout=="accordions"?b.maxHeight="0px":(b.transform="scaleY(0)",b.opacity="0")}resetActive(),activeTab!=="none"&&accordionMode!="popup"&&setActive(activeTab),tabs.forEach((f,b)=>{f.addEventListener("click",()=>{resetActive(),setActive(b)})});const section=data.el.closest("section.beae-section");let sectionId="";section&&(sectionId=section.getAttribute("data-sectionid"));let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(f){extOptions={},console.error(f)}if(accordions.forEach((f,b)=>{f.addEventListener("click",()=>{if(accordionMode=="popup"&&data.mode.value!="builder"){const k=f.closest(".beae-tab-content");if(k){let g=document.createElement("div");g.innerHTML=`
                            <h3 class="beae-popup__content-title">${f.querySelector("span").innerHTML}</h3>
                            <div class="beae-popup__content-body ${data.id}">${k.querySelector(".beae-accordion-body").innerHTML}</div>
                            `,window.BeaePopupLibrary.createPopup(g,{layout:extOptions.layout?extOptions.layout:"right",width:extOptions.width?extOptions.width:"400px",layoutMobile:extOptions.layoutMobile?extOptions.layoutMobile:"bottom",sectionId})}}else accordionMode=="single"?(resetActive(),setActive(b)):f.classList.contains("active")?removeActive(b):setActive(b)})}),layout=="tabs"){const f=data.el.querySelector(".beae-tab-contents"),b=f.querySelectorAll(".beae-tab-content-wrp");let k=0,g=-1;b.forEach((S,B)=>{const C=S.offsetHeight;C>k&&(g=B,k=C)}),new ResizeObserver(()=>{f.style.setProperty("--beae-tabs-max-height",`${b[g].offsetHeight}px`)}).observe(b[g])} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-hzbuqyi6: ', ex)
      };
    

      try {
        let argid = 'beae-guzob5s8block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-guzob5s8',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-guzob5s8');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-guzob5s8: ', ex)
      };
    

      try {
        let argid = 'beae-s49b9f27block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-s49b9f27',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-s49b9f27');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-s49b9f27: ', ex)
      };
    

      try {
        let argid = 'beae-yepakg66block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-yepakg66',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-yepakg66');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-yepakg66: ', ex)
      };
    

      try {
        let argid = 'beae-kk10kcudblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-kk10kcud',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-kk10kcud');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-kk10kcud: ', ex)
      };
    

      try {
        let argid = 'beae-92gzdhpysection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-92gzdhpy',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-92gzdhpy');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-92gzdhpy: ', ex)
      };
    

      try {
        let argid = 'beae-emt6hnj8section-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-emt6hnj8',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-emt6hnj8');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-emt6hnj8: ', ex)
      };
    }; if (window.BEAEBASE) {js_91CQLOIA()} else {window.BEAEPAGEJS.push(js_91CQLOIA)} })(); 