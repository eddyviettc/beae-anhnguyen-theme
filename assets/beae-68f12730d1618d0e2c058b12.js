(() => { if (window.BEAEPAGEJS === undefined) {
            window.BEAEPAGEJS = [];
          }

          if(window.beaePageSetting == undefined) {
            window.beaePageSetting = {};
          }
          
          window.beaePageSetting.pageId = "68f12730d1618d0e2c058b12";
              window.beaePageSetting.pageTitle = "ughjvghjghjvvghj"; 
              window.beaePageSetting.pageType = "blog";

          let js_1KMTRABV = () => { let BeaeUseHooks = {};
      try {
        let argid = 'beae-5yq7n9n7section-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-5yq7n9n7',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-5yq7n9n7');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-5yq7n9n7: ', ex)
      };
    

      try {
        let argid = 'beae-hry6cljablock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-hry6clja',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-hry6clja');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-hry6clja: ', ex)
      };
    

      try {
        let argid = 'beae-xmjy1pg1block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-xmjy1pg1',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-xmjy1pg1');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-xmjy1pg1: ', ex)
      };
    

      try {
        let argid = 'beae-an7dig0lbutton-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-an7dig0l',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-an7dig0l');
        args.el = args.els[0];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(n){extOptions={},console.error(n)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let n=document.querySelector(selector+","+selector.replace("#","."));if(n)return n.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let t=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(t,{id:data.id,...extOptions}),e.preventDefault();return}const n=window.createLoading(e.currentTarget);return window.BeaePopupLibrary.lightbox({id:data.id,url:((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(t=>{t.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(t),n.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let n=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(n=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(n,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-an7dig0l: ', ex)
      };
    

      try {
        let argid = 'beae-nf706vz2section-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-nf706vz2',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-nf706vz2');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-nf706vz2: ', ex)
      };
    

      try {
        let argid = 'beae-etwe42k5section-blog-posts-page',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-etwe42k5',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-etwe42k5');
        args.el = args.els[0];
        ((a) => { var f;n();function n(){document.querySelectorAll(".beae-blog-paginate--wrp a").forEach(k=>{(!k.hasAttribute("href")||!k.getAttribute("href").trim())&&(k.addEventListener("click",function(g){g.preventDefault()}),k.classList.add("disabled"),k.style.pointerEvents="none",k.style.opacity="0.5")})}const t=window.location.search,o="/blogs/"+((f=a.blog)==null?void 0:f.handle),r=a.el.querySelectorAll(".beae-blog-list button.beae-blog-btn"),s=a.el.querySelectorAll(".beae-blog-list button.beae-blog-tag-btn");r.length>0&&y(r,t),s.length>0&&y(s,t,o),x();const u=a.el.querySelector(".beae-x-blog-posts-page"),c=u.getAttribute("section-template-id").split("__")[1],d=new URLSearchParams(window.location.search);let l=!1;!d.has("view")&&r.length>0&&(l=!0);function y(b,k="",g=""){if(b.length){const v=window.location.pathname;b.forEach(S=>{S.getAttribute("data-url")===v&&S.classList.add("active"),S.addEventListener("click",function(B){var w;b.forEach(_=>{_.classList.remove("active")}),S.classList.add("active");const C=g+((w=S.getAttribute("data-url"))==null?void 0:w.replace(" ","-"));if(!C)return;const $=new URL(window.location.origin+C+k);p($.href)})})}}function x(){const b=document.querySelectorAll(".beae-blog-paginate .beae-blog-pagination-btn");b.length&&b.forEach(k=>{k.addEventListener("click",function(g){const v=k.getAttribute("data-url");if(!v)return;const S=new URL(window.location.origin+v);p(S.href)})})}let m={};function h(b,k){return new Promise(g=>{const v=a.el.querySelector(k),S=document.createElement("div");S.innerHTML=b;const B=S.querySelector(k);v&&(v.style.height="fit-content",B?v.innerHTML=B.innerHTML:(v.style.height="0px",v.style.overflow="hidden")),g()})}function p(b){if(m={},!u)return;const k=u.getAttribute("section-template-id"),g=new URL(b);let v=g.search?g.search.replace("?",""):"";const S=g.pathname+"?section_id="+k+"&"+v;fetch(S).then(B=>B.text()).then(B=>{m[S]=B,h(B,".beae-x-blog-posts"),h(B,".beae-blog-paginate"),x()}),l&&(v+=v.length>0?"&view="+c:"view="+c),history.pushState({searchParams:v},"",`${g.pathname}${v&&"?".concat(v)}`)} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-etwe42k5: ', ex)
      };
    

      try {
        let argid = 'beae-jnmkm0x5block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-jnmkm0x5',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-jnmkm0x5');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-jnmkm0x5: ', ex)
      };
    

      try {
        let argid = 'beae-mljbf5r7block-developer',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-mljbf5r7',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-mljbf5r7');
        args.el = args.els[0];
        ((data
) => { data.el.querySelectorAll('.beae-blog-tag-btn').forEach(button => {
    const url = button.getAttribute('data-url');
    if (url === '/tagged/') {
      button.setAttribute('data-url', '/');
    
    }
    if (button.getAttribute('data-url') === '/') {
      button.classList.add('active');
    }
  }); })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-mljbf5r7: ', ex)
      };
    

      try {
        let argid = 'beae-njq1clghblock-image',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-njq1clgh',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-njq1clgh');
        args.el = args.els[0];
        ((M) => { var P;if(M.el){if(M.shape){const O=M.el.closest(".beae-slider-items");O&&!O.hasAttribute("data-svg")&&(O==null||O.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${M.id}" clipPathUnits="objectBoundingBox">
                                ${M.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),O.setAttribute("data-svg","true"))}let H=M.el.querySelector(".beae-image-content-position"),I,z=window.innerWidth>=768&&M.autoHover;var V=H.querySelector(".beae-img-ratio-control"),L=H.querySelector(".beae-img-comp-container"),T=H.querySelector(".beae-img-comp-container--second");if(V&&T){let O=function(A){let D=0,Z;q(),z?H.onmouseover=function(G){W(G)}:A.onmousedown=function(G){W(G)},H.onmouseup=function(){j()},A.ontouchstart=function(G){W(G)},H.ontouchend=function(){j()};function q(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),A.style.left&&parseInt(A.style.left)}function W(G){check=!1,G.preventDefault(),G.clientX?G.clientX:G.touches[0].clientX,parseInt(A.style.left),D=1,H.onmousemove=function(K){R(K)},H.ontouchmove=function(K){R(K)}}function j(){D=0,check=!0}function R(G){if(D==0)return!1;Z=U(G),Z<0&&(Z=0),Z>100&&(Z=100),F(Z)}function U(G){const K=H.getBoundingClientRect(),oe=(G.changedTouches?G.changedTouches[0].clientX:G.clientX)-K.left;return Math.max(0,Math.min(100,Math.round(oe*100/I)))}function F(G){A.style.left=G+"%",T.style.clipPath=`polygon(${G}% 0%, ${G}% 100%, 100% 100%, 100% 0)`,L.style.clipPath=`polygon(0% 100%, 0% 0%, ${G}% 0%, ${G}% 100%)`}};V&&T&&O(V),window.addEventListener("resize",function(){V&&T&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),O(V))})}}let N=(P=M.el)==null?void 0:P.querySelector("a.beae-x-image"),E=N==null?void 0:N.getAttribute("href");N&&M.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&N.addEventListener("click",H=>{let I=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(I)return I.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),H.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-njq1clgh: ', ex)
      };
    

      try {
        let argid = 'beae-2kmiql8ablock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-2kmiql8a',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-2kmiql8a');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-2kmiql8a: ', ex)
      };
    

      try {
        let argid = 'beae-x9f6kptablock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-x9f6kpta',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-x9f6kpta');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-x9f6kpta: ', ex)
      };
    

      try {
        let argid = 'beae-fbhj1dkiblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-fbhj1dki',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-fbhj1dki');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-fbhj1dki: ', ex)
      };
    

      try {
        let argid = 'beae-oea6fd48section-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-oea6fd48',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-oea6fd48');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-oea6fd48: ', ex)
      };
    

      try {
        let argid = 'beae-xixpabahblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-xixpabah',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-xixpabah');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-xixpabah: ', ex)
      };
    

      try {
        let argid = 'beae-ke1cfvrhblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-ke1cfvrh',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-ke1cfvrh');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-ke1cfvrh: ', ex)
      };
    

      try {
        let argid = 'beae-vv9ce1rjblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-vv9ce1rj',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-vv9ce1rj');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-vv9ce1rj: ', ex)
      };
    

      try {
        let argid = 'beae-lxakxnbobutton-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-lxakxnbo',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-lxakxnbo');
        args.el = args.els[0];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(n){extOptions={},console.error(n)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let n=document.querySelector(selector+","+selector.replace("#","."));if(n)return n.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let t=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(t,{id:data.id,...extOptions}),e.preventDefault();return}const n=window.createLoading(e.currentTarget);return window.BeaePopupLibrary.lightbox({id:data.id,url:((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(t=>{t.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(t),n.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let n=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(n=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(n,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-lxakxnbo: ', ex)
      };
    }; if (window.BEAEBASE) {js_1KMTRABV()} else {window.BEAEPAGEJS.push(js_1KMTRABV)} })(); 