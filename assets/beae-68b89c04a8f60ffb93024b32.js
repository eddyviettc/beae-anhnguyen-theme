(() => { if (window.BEAEPAGEJS === undefined) {
            window.BEAEPAGEJS = [];
          }

          if(window.beaePageSetting == undefined) {
            window.beaePageSetting = {};
          }
          
          window.beaePageSetting.pageId = "undefined";
              window.beaePageSetting.pageTitle = "undefined"; 
              window.beaePageSetting.pageType = "undefined";

          let js_4HJC9O0B = () => { let BeaeUseHooks = {};
      try {
        let argid = 'beae-l11svh2asection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-l11svh2a',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-l11svh2a');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-l11svh2a: ', ex)
      };
    

      try {
        let argid = 'beae-l11svh2asection-slide-show',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-l11svh2a',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-l11svh2a');
        args.el = args.els[0];
        ((h) => { window.BeaeSlider&&!h.noRunJs&&window.BeaeSlider(h) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-l11svh2a: ', ex)
      };
    

      try {
        let argid = 'beae-f2e8iz0pblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-f2e8iz0p',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-f2e8iz0p');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let F=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(F)return F.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-f2e8iz0p: ', ex)
      };
    

      try {
        let argid = 'beae-sootquikblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-sootquik',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-sootquik');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let F=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(F)return F.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-sootquik: ', ex)
      };
    

      try {
        let argid = 'beae-05v7avjzbutton-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-05v7avjz',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-05v7avjz');
        args.el = args.els[0];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(n){extOptions={},console.error(n)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let n=document.querySelector(selector+","+selector.replace("#","."));if(n)return n.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let t=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(t,{id:data.id,...extOptions}),e.preventDefault();return}const n=window.createLoading(e.currentTarget);return window.BeaePopupLibrary.lightbox({id:data.id,url:((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(t=>{t.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(t),n.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let n=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(n=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(n,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-05v7avjz: ', ex)
      };
    

      try {
        let argid = 'beae-xqh8mx00block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-xqh8mx00',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-xqh8mx00');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let F=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(F)return F.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-xqh8mx00: ', ex)
      };
    

      try {
        let argid = 'beae-axirepbsblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-axirepbs',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-axirepbs');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let F=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(F)return F.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-axirepbs: ', ex)
      };
    

      try {
        let argid = 'beae-r4ux6go5block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-r4ux6go5',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-r4ux6go5');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let F=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(F)return F.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-r4ux6go5: ', ex)
      };
    

      try {
        let argid = 'beae-tgs01htjbutton-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-tgs01htj',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-tgs01htj');
        args.el = args.els[0];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(n){extOptions={},console.error(n)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let n=document.querySelector(selector+","+selector.replace("#","."));if(n)return n.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let t=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(t,{id:data.id,...extOptions}),e.preventDefault();return}const n=window.createLoading(e.currentTarget);return window.BeaePopupLibrary.lightbox({id:data.id,url:((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(t=>{t.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(t),n.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let n=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(n=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(n,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-tgs01htj: ', ex)
      };
    

      try {
        let argid = 'beae-4tzqpcp6section-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-4tzqpcp6',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-4tzqpcp6');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-4tzqpcp6: ', ex)
      };
    

      try {
        let argid = 'beae-vb2ij3h9block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-vb2ij3h9',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-vb2ij3h9');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let F=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(F)return F.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-vb2ij3h9: ', ex)
      };
    

      try {
        let argid = 'beae-zsbqtob5section-featured-collection',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-zsbqtob5',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-zsbqtob5');
        args.el = args.els[0];
        ((a) => { var c;window.BeaeMoneyFormat||(window.BeaeMoneyFormat=(c=a.el.querySelector(".beae-money-format"))==null?void 0:c.innerHTML);let n=a.el.querySelectorAll(".beae-featuted-collection-nav");const t=a.el.querySelectorAll(".beae-feature-collection-tab-content"),o=a.el.querySelector(".beae-featuted-collection-nav.nav-active"),r=a.el.closest(".beae-body--preview");n.forEach((d,l)=>{a.mode.value=="live"&&!o&&(l===0?(d.classList.add("nav-active"),t[l]&&(t[l].style.display="block",t[l].setAttribute("data-active","true"))):(d.classList.remove("nav-active"),t[l]&&(t[l].style.display="none",t[l].setAttribute("data-active","false"))));let _=!1;d.addEventListener("click",()=>{if(_)return;_=!0,n.forEach(f=>{f.classList.remove("nav-active")}),d.classList.add("nav-active");const y=d.getAttribute("data-handle"),b=a.el.querySelectorAll(".viewall-link");b&&b.forEach(f=>{f.setAttribute("href",`/collections/${y}`)});const h=a.el.querySelector(`.beae-feature-collection-tab-content[data-handle="${y}"]`),p=a.el.querySelector('.beae-feature-collection-tab-content[data-active="true"]');if(a.el.querySelector(".beae-feature-collection-tab-content.content-active")!==null&&a.el.querySelector(".beae-feature-collection-tab-content.content-active").classList.remove("content-active"),p){p.setAttribute("data-active","false");const f=s(p);setTimeout(()=>{p.style.display="none",h&&(h.style.display="block"),setTimeout(()=>{h&&h.setAttribute("data-active","true"),_=!1},50)},f)}else h&&(h.style.display="block"),setTimeout(()=>{h&&h.setAttribute("data-active","true"),_=!1},50)})});function s(d){const _=window.getComputedStyle(d).getPropertyValue("transition-duration");let y=parseFloat(_)*1e3;return _.includes("s")?y=parseFloat(_)*1e3:y=parseFloat(_),y||0}setTimeout(()=>{typeof window.handleSwatchForCardForm=="function"&&window.handleSwatchForCardForm(a),typeof(a==null?void 0:a.promotionPosition)=="number"&&u(a==null?void 0:a.promotionPosition)},100),(["builder"].includes(a.mode.value)||r)&&setTimeout(()=>{typeof window.handleEventFormProductCard=="function"&&window.handleEventFormProductCard()},100);function u(d){if(a.mode.value!="live")return;const l=a.el.querySelectorAll(".beae-slider-items");if(l&&l.length){l.forEach(y=>{const b=a.el.querySelector(".beae-promotion > *");if(!b)return;const h=b.cloneNode(!0),p=y.children;d>=p.length?y.appendChild(h):y.insertBefore(h,p[d])});const _=a.el.querySelector(".beae-promotion");_&&_.remove()}} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-zsbqtob5: ', ex)
      };
    

      try {
        let argid = 'beae-zsbqtob5section-slide-show',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-zsbqtob5',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-zsbqtob5');
        args.el = args.els[0];
        ((h) => { window.BeaeSlider&&!h.noRunJs&&window.BeaeSlider(h) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-zsbqtob5: ', ex)
      };
    

      try {
        let argid = 'beae-figu2go3block-image',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-figu2go3',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-figu2go3');
        args.el = args.els[0];
        ((P) => { var F;if(P.el){if(P.shape){const R=P.el.closest(".beae-slider-items");R&&!R.hasAttribute("data-svg")&&(R==null||R.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${P.id}" clipPathUnits="objectBoundingBox">
                                ${P.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),R.setAttribute("data-svg","true"))}let Z=P.el.querySelector(".beae-image-content-position"),W,G=window.innerWidth>=768&&P.autoHover;var H=Z.querySelector(".beae-img-ratio-control"),I=Z.querySelector(".beae-img-comp-container"),A=Z.querySelector(".beae-img-comp-container--second");if(H&&A){let R=function(D){let j=0,q;U(),G?Z.onmouseover=function(K){Y(K)}:D.onmousedown=function(K){Y(K)},Z.onmouseup=function(){X()},D.ontouchstart=function(K){Y(K)},Z.ontouchend=function(){X()};function U(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{W=A.offsetWidth})}).observe(A),D.style.left&&parseInt(D.style.left)}function Y(K){check=!1,K.preventDefault(),K.clientX?K.clientX:K.touches[0].clientX,parseInt(D.style.left),j=1,Z.onmousemove=function(re){oe(re)},Z.ontouchmove=function(re){oe(re)}}function X(){j=0,check=!0}function oe(K){if(j==0)return!1;q=te(K),q<0&&(q=0),q>100&&(q=100),ae(q)}function te(K){const re=Z.getBoundingClientRect(),ge=(K.changedTouches?K.changedTouches[0].clientX:K.clientX)-re.left;return Math.max(0,Math.min(100,Math.round(ge*100/W)))}function ae(K){D.style.left=K+"%",A.style.clipPath=`polygon(${K}% 0%, ${K}% 100%, 100% 100%, 100% 0)`,I.style.clipPath=`polygon(0% 100%, 0% 0%, ${K}% 0%, ${K}% 100%)`}};H&&A&&R(H),window.addEventListener("resize",function(){H&&A&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{W=A.offsetWidth})}).observe(A),R(H))})}}let O=(F=P.el)==null?void 0:F.querySelector("a.beae-x-image"),z=O==null?void 0:O.getAttribute("href");O&&P.mode.value!=="builder"&&(z!=null&&z.includes("#"))&&O.addEventListener("click",Z=>{let W=document.querySelector(z+","+(z==null?void 0:z.replace("#",".")));if(W)return W.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),Z.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-figu2go3: ', ex)
      };
    

      try {
        let argid = 'beae-bfsajbayblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-bfsajbay',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-bfsajbay');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let F=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(F)return F.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-bfsajbay: ', ex)
      };
    

      try {
        let argid = 'beae-1lzdbfimsection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-1lzdbfim',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-1lzdbfim');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-1lzdbfim: ', ex)
      };
    

      try {
        let argid = 'beae-1lzdbfimsection-developer',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-1lzdbfim',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-1lzdbfim');
        args.el = args.els[0];
        ((data
) => { function checkImageBrightness(img) {
    if(img == null) return;
    const image = new Image();
    image.src = img.src;
    image.crossOrigin = "Anonymous";
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    if (image.complete) {
      processImage();
    } else {
      image.onload = processImage;
    }

    function processImage() {
      canvas.width = image.naturalWidth;
      canvas.height = image.naturalHeight;

      ctx.drawImage(image, 0, 0);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const pixels = imageData.data;

      let totalBrightness = 0;
      for (let i = 0; i < pixels.length; i += 4) {
        const r = pixels[i];     // Red
        const g = pixels[i + 1]; // Green
        const b = pixels[i + 2]; // Blue
        
        const brightness = 0.2126 * r + 0.7152 * g + 0.0722 * b;
        totalBrightness += brightness;
      }

      const avgBrightness = totalBrightness / (pixels.length / 4);

      const resultText = avgBrightness > 127 ? 'light' : 'dark';
      if(resultText == 'dark') {
        img.closest('.beae-collection-card').classList.add('beae-custom-invert-text-color')
      }
    }
  }

window.onload = function() {
  data.el.querySelectorAll('.beae-image-primary img').forEach(img => {
    checkImageBrightness(img);
  });
}; })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-1lzdbfim: ', ex)
      };
    

      try {
        let argid = 'beae-g93br1qoblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-g93br1qo',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-g93br1qo');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let F=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(F)return F.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-g93br1qo: ', ex)
      };
    

      try {
        let argid = 'beae-vc6j1a7fblock-developer',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-vc6j1a7f',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-vc6j1a7f');
        args.el = args.els[0];
        ((data
) => { function checkImageBrightness(img) {
    if(img == null) return;
    const image = new Image();
    image.src = img.src;
    image.crossOrigin = "Anonymous";
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    if (image.complete) {
      processImage();
    } else {
      image.onload = processImage;
    }

    function processImage() {
      canvas.width = image.naturalWidth;
      canvas.height = image.naturalHeight;

      ctx.drawImage(image, 0, 0);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const pixels = imageData.data;

      let totalBrightness = 0;
      for (let i = 0; i < pixels.length; i += 4) {
        const r = pixels[i];     // Red
        const g = pixels[i + 1]; // Green
        const b = pixels[i + 2]; // Blue
        
        const brightness = 0.2126 * r + 0.7152 * g + 0.0722 * b;
        totalBrightness += brightness;
      }

      const avgBrightness = totalBrightness / (pixels.length / 4);

      const resultText = avgBrightness > 127 ? 'light' : 'dark';
      if(resultText == 'dark') {
        img.closest('.beae-collection-card').classList.add('beae-custom-invert-text-color')
      }
    }
  }

window.onload = function() {
  data.el.querySelectorAll('.beae-image-primary img').forEach(img => {
    checkImageBrightness(img);
  });
}; })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-vc6j1a7f: ', ex)
      };
    

      try {
        let argid = 'beae-vc6j1a7fsection-featured-collection',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-vc6j1a7f',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-vc6j1a7f');
        args.el = args.els[0];
        ((a) => { window.BeaeSlideshow&&window.BeaeSlideshow.init(a) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-vc6j1a7f: ', ex)
      };
    

      try {
        let argid = 'beae-vc6j1a7fsection-slide-show',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-vc6j1a7f',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-vc6j1a7f');
        args.el = args.els[0];
        ((h) => { window.BeaeSlider&&!h.noRunJs&&window.BeaeSlider(h) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-vc6j1a7f: ', ex)
      };
    

      try {
        let argid = 'beae-6f9cpeirblock-image',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-6f9cpeir',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-6f9cpeir');
        args.el = args.els[0];
        ((P) => { var F;if(P.el){if(P.shape){const R=P.el.closest(".beae-slider-items");R&&!R.hasAttribute("data-svg")&&(R==null||R.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${P.id}" clipPathUnits="objectBoundingBox">
                                ${P.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),R.setAttribute("data-svg","true"))}let Z=P.el.querySelector(".beae-image-content-position"),W,G=window.innerWidth>=768&&P.autoHover;var H=Z.querySelector(".beae-img-ratio-control"),I=Z.querySelector(".beae-img-comp-container"),A=Z.querySelector(".beae-img-comp-container--second");if(H&&A){let R=function(D){let j=0,q;U(),G?Z.onmouseover=function(K){Y(K)}:D.onmousedown=function(K){Y(K)},Z.onmouseup=function(){X()},D.ontouchstart=function(K){Y(K)},Z.ontouchend=function(){X()};function U(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{W=A.offsetWidth})}).observe(A),D.style.left&&parseInt(D.style.left)}function Y(K){check=!1,K.preventDefault(),K.clientX?K.clientX:K.touches[0].clientX,parseInt(D.style.left),j=1,Z.onmousemove=function(re){oe(re)},Z.ontouchmove=function(re){oe(re)}}function X(){j=0,check=!0}function oe(K){if(j==0)return!1;q=te(K),q<0&&(q=0),q>100&&(q=100),ae(q)}function te(K){const re=Z.getBoundingClientRect(),ge=(K.changedTouches?K.changedTouches[0].clientX:K.clientX)-re.left;return Math.max(0,Math.min(100,Math.round(ge*100/W)))}function ae(K){D.style.left=K+"%",A.style.clipPath=`polygon(${K}% 0%, ${K}% 100%, 100% 100%, 100% 0)`,I.style.clipPath=`polygon(0% 100%, 0% 0%, ${K}% 0%, ${K}% 100%)`}};H&&A&&R(H),window.addEventListener("resize",function(){H&&A&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{W=A.offsetWidth})}).observe(A),R(H))})}}let O=(F=P.el)==null?void 0:F.querySelector("a.beae-x-image"),z=O==null?void 0:O.getAttribute("href");O&&P.mode.value!=="builder"&&(z!=null&&z.includes("#"))&&O.addEventListener("click",Z=>{let W=document.querySelector(z+","+(z==null?void 0:z.replace("#",".")));if(W)return W.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),Z.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-6f9cpeir: ', ex)
      };
    

      try {
        let argid = 'beae-u0datb73section-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-u0datb73',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-u0datb73');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-u0datb73: ', ex)
      };
    

      try {
        let argid = 'beae-hqdxu9hcsection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-hqdxu9hc',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-hqdxu9hc');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-hqdxu9hc: ', ex)
      };
    }; if (window.BEAEBASE) {js_4HJC9O0B()} else {window.BEAEPAGEJS.push(js_4HJC9O0B)} })(); 