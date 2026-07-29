(() => { if (window.BEAEPAGEJS === undefined) {
            window.BEAEPAGEJS = [];
          }

          if(window.beaePageSetting == undefined) {
            window.beaePageSetting = {};
          }
          
          window.beaePageSetting.pageId = "6838ac666ec486d51c022023";
              window.beaePageSetting.pageTitle = "tesst split homepage"; 
              window.beaePageSetting.pageType = "home";

          let js_A6P16LQ5 = () => { let BeaeUseHooks = {};
      try {
        let argid = 'beae-s5ghxu0csection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-s5ghxu0c',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-s5ghxu0c');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-s5ghxu0c: ', ex)
      };
    

      try {
        let argid = 'beae-s5ghxu0csection-developer',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-s5ghxu0c',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-s5ghxu0c');
        args.el = args.els[0];
        ((data
) => { const scrollContainer = data.el.querySelector('.beae-featuted-collection-navs');

scrollContainer.addEventListener('scroll', () => {
  const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;
  if (scrollLeft > 0) {
    scrollContainer.classList.add('has-left-shadow');
  } else {    
    scrollContainer.classList.remove('has-left-shadow');
  } 
 
  if (scrollLeft + clientWidth < scrollWidth) {
    scrollContainer.classList.add('has-right-shadow'); 
  } else {
    scrollContainer.classList.remove('has-right-shadow');
  } 
}); })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-s5ghxu0c: ', ex)
      };
    

      try {
        let argid = 'beae-1supqt46section-featured-collection',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-1supqt46',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-1supqt46');
        args.el = args.els[0];
        ((a) => { var c;window.BeaeMoneyFormat||(window.BeaeMoneyFormat=(c=a.el.querySelector(".beae-money-format"))==null?void 0:c.innerHTML);let n=a.el.querySelectorAll(".beae-featuted-collection-nav");const t=a.el.querySelectorAll(".beae-feature-collection-tab-content"),o=a.el.querySelector(".beae-featuted-collection-nav.nav-active"),r=a.el.closest(".beae-body--preview");n.forEach((d,l)=>{a.mode.value=="live"&&!o&&(l===0?(d.classList.add("nav-active"),t[l]&&(t[l].style.display="block",t[l].setAttribute("data-active","true"))):(d.classList.remove("nav-active"),t[l]&&(t[l].style.display="none",t[l].setAttribute("data-active","false"))));let v=!1;d.addEventListener("click",()=>{if(v)return;v=!0,n.forEach(f=>{f.classList.remove("nav-active")}),d.classList.add("nav-active");const _=d.getAttribute("data-handle"),b=a.el.querySelectorAll(".viewall-link");b&&b.forEach(f=>{f.setAttribute("href",`/collections/${_}`)});const h=a.el.querySelector(`.beae-feature-collection-tab-content[data-handle="${_}"]`),p=a.el.querySelector('.beae-feature-collection-tab-content[data-active="true"]');if(a.el.querySelector(".beae-feature-collection-tab-content.content-active")!==null&&a.el.querySelector(".beae-feature-collection-tab-content.content-active").classList.remove("content-active"),p){p.setAttribute("data-active","false");const f=s(p);setTimeout(()=>{p.style.display="none",h&&(h.style.display="block"),setTimeout(()=>{h&&h.setAttribute("data-active","true"),v=!1},50)},f)}else h&&(h.style.display="block"),setTimeout(()=>{h&&h.setAttribute("data-active","true"),v=!1},50)})});function s(d){const v=window.getComputedStyle(d).getPropertyValue("transition-duration");let _=parseFloat(v)*1e3;return v.includes("s")?_=parseFloat(v)*1e3:_=parseFloat(v),_||0}setTimeout(()=>{typeof window.handleSwatchForCardForm=="function"&&window.handleSwatchForCardForm(a),typeof(a==null?void 0:a.promotionPosition)=="number"&&u(a==null?void 0:a.promotionPosition)},100),(["builder"].includes(a.mode.value)||r)&&setTimeout(()=>{typeof window.handleEventFormProductCard=="function"&&window.handleEventFormProductCard()},100);function u(d){if(a.mode.value!="live")return;const l=a.el.querySelectorAll(".beae-slider-items");if(l&&l.length){l.forEach(_=>{const b=a.el.querySelector(".beae-promotion > *");if(!b)return;const h=b.cloneNode(!0),p=_.children;d>=p.length?_.appendChild(h):_.insertBefore(h,p[d])});const v=a.el.querySelector(".beae-promotion");v&&v.remove()}} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-1supqt46: ', ex)
      };
    

      try {
        let argid = 'beae-1supqt46section-slide-show',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-1supqt46',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-1supqt46');
        args.el = args.els[0];
        ((h) => { window.BeaeSlider&&!h.noRunJs&&window.BeaeSlider(h) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-1supqt46: ', ex)
      };
    

      try {
        let argid = 'beae-wadck8swblock-image',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-wadck8sw',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-wadck8sw');
        args.el = args.els[0];
        ((P) => { if(P.el){if(P.shape){const W=P.el.closest(".beae-slider-items");W&&!W.hasAttribute("data-svg")&&(W==null||W.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${P.id}" clipPathUnits="objectBoundingBox">
                                ${P.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),W.setAttribute("data-svg","true"))}let O=P.el.querySelector(".beae-image-content-position"),A,j=window.innerWidth>=768&&P.autoHover;var H=O.querySelector(".beae-img-ratio-control"),I=O.querySelector(".beae-img-comp-container"),z=O.querySelector(".beae-img-comp-container--second");if(H&&z){let W=function(F){let G=0,R;D(),j?O.onmouseover=function(oe){Z(oe)}:F.onmousedown=function(oe){Z(oe)},O.onmouseup=function(){q()},F.ontouchstart=function(oe){Z(oe)},O.ontouchend=function(){q()};function D(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{A=z.offsetWidth})}).observe(z),F.style.left&&parseInt(F.style.left)}function Z(oe){check=!1,oe.preventDefault(),oe.clientX?oe.clientX:oe.touches[0].clientX,parseInt(F.style.left),G=1,O.onmousemove=function(K){U(K)},O.ontouchmove=function(K){U(K)}}function q(){G=0,check=!0}function U(oe){if(G==0)return!1;R=Y(oe),R<0&&(R=0),R>100&&(R=100),Q(R)}function Y(oe){const K=O.getBoundingClientRect(),ee=(oe.changedTouches?oe.changedTouches[0].clientX:oe.clientX)-K.left;return Math.max(0,Math.min(100,Math.round(ee*100/A)))}function Q(oe){F.style.left=oe+"%",z.style.clipPath=`polygon(${oe}% 0%, ${oe}% 100%, 100% 100%, 100% 0)`,I.style.clipPath=`polygon(0% 100%, 0% 0%, ${oe}% 0%, ${oe}% 100%)`}};H&&z&&W(H),window.addEventListener("resize",function(){H&&z&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{A=z.offsetWidth})}).observe(z),W(H))})}} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-wadck8sw: ', ex)
      };
    

      try {
        let argid = 'beae-dc9big1osection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-dc9big1o',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-dc9big1o');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-dc9big1o: ', ex)
      };
    }; if (window.BEAEBASE) {js_A6P16LQ5()} else {window.BEAEPAGEJS.push(js_A6P16LQ5)} })(); 