(() => { if (window.BEAEPAGEJS === undefined) {
            window.BEAEPAGEJS = [];
          }

          if(window.beaePageSetting == undefined) {
            window.beaePageSetting = {};
          }
          
          window.beaePageSetting.pageId = "69e7890842f1e48faf0e3ed3";
              window.beaePageSetting.pageTitle = "test1231qasd"; 
              window.beaePageSetting.pageType = "collection";

          let js_9M0V4HJR = () => { let BeaeUseHooks = {};
      try {
        let argid = 'beae-ujh38a6ysection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-ujh38a6y',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-ujh38a6y');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-ujh38a6y: ', ex)
      };
    

      try {
        let argid = 'beae-ujh38a6ysection-developer',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-ujh38a6y',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-ujh38a6y');
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
        console.error('BEAE JS ERROR ID beae-ujh38a6y: ', ex)
      };
    

      try {
        let argid = 'beae-95d3s1ulblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-95d3s1ul',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-95d3s1ul');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-95d3s1ul: ', ex)
      };
    

      try {
        let argid = 'beae-r30p15dwsection-featured-collection',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-r30p15dw',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-r30p15dw');
        args.el = args.els[0];
        ((a) => { window.BeaeSlideshow&&window.BeaeSlideshow.init(a) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-r30p15dw: ', ex)
      };
    

      try {
        let argid = 'beae-r30p15dwsection-slide-show',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-r30p15dw',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-r30p15dw');
        args.el = args.els[0];
        ((h) => { window.BeaeSlider&&!h.noRunJs&&window.BeaeSlider(h) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-r30p15dw: ', ex)
      };
    

      try {
        let argid = 'beae-m4d3pm21block-image',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-m4d3pm21',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-m4d3pm21');
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
        console.error('BEAE JS ERROR ID beae-m4d3pm21: ', ex)
      };
    

      try {
        let argid = 'beae-hw249t5yblock-developer',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-hw249t5y',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-hw249t5y');
        args.el = args.els[0];
        ((data
) => { document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll('span[data-is-same-price="true"]')
    .forEach(span => {
      span.style.display = "none";
    });
});
document.addEventListener('click', (e) => {
  if(e.target.classList.contains('beae-button-fillter') || e.target.closest('.beae-button-fillter')){
    
    const sidebarFilter = data.el.querySelector(".beae-sidebar-fillter");
    sidebarFilter.classList.toggle('active')
    if (window.matchMedia("(max-width: 767px)").matches) {
      const btnFilter = data.el.querySelector(".beae-wrp-filter--btn-filter");
      if (btnFilter) {
        btnFilter.click(); 
      }
    }
  }
  setTimeout(() => {
    const dataId = data.el.getAttribute('data-id');

    const found = document.querySelectorAll(`.${dataId}`);

    found.forEach((el) => {
      if (el && el.classList && !el.classList.contains('beae-block')) {
        el.classList.add('beae-block');
      
      }
    });
  },50); 
}); })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-hw249t5y: ', ex)
      };
    

      try {
        let argid = 'beae-hw249t5ysection-collection-details',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-hw249t5y',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-hw249t5y');
        args.el = args.els[0];
        ((data) => { var a;window.BeaeMoneyFormat||(window.BeaeMoneyFormat=(a=data.el.querySelector("."+data.id+" .beae-money-format"))==null?void 0:a.innerHTML);let fetchData={},loading=!1,extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(n){extOptions={},console.error(n)}const containerBlock=data.el.querySelector("."+data.id+" .beae-filter-collection-with-type");let checkAction=(containerBlock&&(containerBlock==null?void 0:containerBlock.getAttribute("data-action-update"))==="default")??!0;const temp=checkAction,filter=document.querySelector(".beae-filter-collection-with-type"),filterType=filter==null?void 0:filter.getAttribute("data-filter-type"),filterTitle=filter==null?void 0:filter.getAttribute("data-title"),filterTitleMobile=filter==null?void 0:filter.getAttribute("data-title-mobile"),applyText=filter==null?void 0:filter.getAttribute("data-apply-text"),applyTextMobile=filter==null?void 0:filter.getAttribute("data-apply-text-mobile"),clearText=filter==null?void 0:filter.getAttribute("data-clear-text");handlePagination(),handleRemoveBadged(),initFilterAction(),data.stickyMobile?handleDrawerMobile():handleMobile(),document.addEventListener("DOMContentLoaded",function(){function n(){const t=window.matchMedia("(max-width: 768px)").matches;document.querySelectorAll(".beae-swatch-color__list").forEach(o=>{const r=parseInt(o.dataset.totalVariant)||0,s=parseInt(o.dataset.maxDesktop)||5,p=parseInt(o.dataset.maxMobile)||s,c=t?p:s,d=o.querySelectorAll("li");d.forEach(y=>y.style.display=""),d.forEach((y,g)=>{g>=c&&(y.style.display="none")});let l=o.querySelector(".beae-swatch-more");l||(l=document.createElement("span"),l.className="beae-swatch-more",o.appendChild(l));const v=r-c;v>0?(l.textContent="+"+v,l.style.display=""):l.style.display="none"})}n(),window.addEventListener("resize",n)});function handleMobile(){const n=data.el.querySelector("."+data.id+" .beae-wrp-filter--btn-filter");n&&(n.onclick=()=>{let o=".beae-form-wrp--"+filterType,r=data.el.querySelector(o),s=document.createElement("div");s.innerHTML=`<div class="beae-drawer--mobile-wrp">
          <div class="beae-drawer-header">${filterTitleMobile}</div>${r==null?void 0:r.innerHTML.replace(/beae-facets-/g,"beae-facets-mobile-")}
          <button class="beae-button-submit--form">${applyTextMobile} <span class="beae-button-submit--form-count">(0)</span></button>
          </div>`,r&&window.BeaePopupLibrary&&window.BeaePopupLibrary.createPopup(s,{layout:"left",layoutMobile:"bottom",style:{maxHeight:"75vh"},sectionId:data.id,customJs:handleFormMobile,...extOptions})});const t=data.el.querySelector("."+data.id+" .beae-wrp-filter--btn-sort");t&&t.addEventListener("click",()=>{let o=".beae-coll-sort-content",r=data.el.querySelector(o),s=document.createElement("div");s.innerHTML=`<div class="beae-sort--mobile-wrp">
          <div class="beae-sort-header">Sort</div>
          <div class="beae-sort-mobile--content">${r==null?void 0:r.innerHTML}</div>
        </div>`,r&&window.BeaePopupLibrary&&window.BeaePopupLibrary.createPopup(s,{layout:"left",layoutMobile:"bottom",style:{maxHeight:"75vh"},sectionId:data.id,customJs:p=>{const c=p.querySelectorAll(".beae-coll-sort-item"),d=data.el.querySelector("."+data.id+" .beae-coll-sort-content");c.length&&c.forEach(l=>{l.addEventListener("click",function(v){if(l.classList.contains("active"))return;const y=p.querySelector(".beae-coll-sort-item.active");y&&y.classList.remove("active"),l.classList.add("active");const g=l.getAttribute("data-value"),h=data.el.querySelector("."+data.id+" .beae-form-target");if(h){const b=h.querySelector('input[name="sort_by"][value="'+g+'"]');b&&b.click()}const u=d.querySelector(".beae-coll-sort-item.active");u&&u.classList.remove("active");const f=d.querySelector('.beae-coll-sort-item[data-value="'+g+'"]');f&&f.classList.add("active"),window.BeaePopupLibrary.closePopup()})})},...extOptions})})}function handleRangePrice(n){n&&(rangeLowerBound=n.querySelector('.beae-range-group > input[type="range"]:first-child'),rangeHigherBound=n.querySelector('.beae-range-group > input[type="range"]:last-child'),textInputLowerBound=n.querySelector('.beae-price-range input[name="filter.v.price.gte"]'),textInputHigherBound=n.querySelector('.beae-price-range input[name="filter.v.price.lte"]'),!(!rangeLowerBound||!rangeHigherBound||!textInputLowerBound|!textInputHigherBound)&&(textInputLowerBound.addEventListener("focus",()=>textInputLowerBound.select()),textInputHigherBound.addEventListener("focus",()=>textInputHigherBound.select()),textInputLowerBound.addEventListener("change",t=>{t.preventDefault(),t.target.value=Math.max(Math.min(parseInt(t.target.value),parseInt(textInputHigherBound.value||t.target.max)-1),t.target.min),rangeLowerBound.value=t.target.value,rangeLowerBound.parentElement.style.setProperty("--range-min",`${parseInt(rangeLowerBound.value)/parseInt(rangeLowerBound.max)*100}%`)}),textInputHigherBound.addEventListener("change",t=>{t.preventDefault(),t.target.value=Math.min(Math.max(parseInt(t.target.value),parseInt(textInputLowerBound.value||t.target.min)+1),t.target.max),rangeHigherBound.value=t.target.value,rangeHigherBound.parentElement.style.setProperty("--range-max",`${parseInt(rangeHigherBound.value)/parseInt(rangeHigherBound.max)*100}%`)}),rangeLowerBound.addEventListener("change",t=>{t.stopPropagation(),textInputLowerBound.value=t.target.value,textInputLowerBound.dispatchEvent(new Event("change",{bubbles:!0}))}),rangeHigherBound.addEventListener("change",t=>{t.stopPropagation(),textInputHigherBound.value=t.target.value,textInputHigherBound.dispatchEvent(new Event("change",{bubbles:!0}))}),rangeLowerBound.addEventListener("input",t=>{t.target.value=Math.min(parseInt(t.target.value),parseInt(textInputHigherBound.value||t.target.max)-1),t.target.parentElement.style.setProperty("--range-min",`${parseInt(t.target.value)/parseInt(t.target.max)*100}%`),textInputLowerBound.value=t.target.value}),rangeHigherBound.addEventListener("input",t=>{t.target.value=Math.max(parseInt(t.target.value),parseInt(textInputLowerBound.value||t.target.min)+1),t.target.parentElement.style.setProperty("--range-max",`${parseInt(t.target.value)/parseInt(t.target.max)*100}%`),textInputHigherBound.value=t.target.value})))}function initFilterAction(n){var r;const t=(r=document.querySelector(".beae-filter-collection-with-type"))==null?void 0:r.getAttribute("data-filter-type"),o=data.el.querySelector("."+data.id+" .beae-drawer-btn-mobile");if(o){const s=new IntersectionObserver(c=>{c[0].isIntersecting?o.classList.add("hidden"):o.classList.remove("hidden")},{rootMargin:"50px 0px"}),p=document.querySelector(".shopify-section--footer, footer, .footer");p&&s.observe(p)}if(t=="sidebar"){handleInitDropdown(data.el);const s=data.el.querySelector("."+data.id+" .beae-sidebar-btn");s&&(data.filterDefault?s.style.cursor="default":s&&(s.onclick=()=>{p.classList.toggle("active-sidebar")}));const p=data.el.querySelector("."+data.id+" .beae-filter-collection--sidebar");p&&p.classList.add("active-sidebar")}else t=="drawer"&&handleDrawer();if(handlePopover(data.el),handleRangePrice(data.el),handleSortBy(),handleMobile(),(!n||n&&!n.noSubmitWhenChange)&&data.mode.value=="live"){const s=data.el.querySelector("."+data.id+" .beae-form-target");if(!s)return;s.onchange=p=>{onSummitHandler(p,s)}}}function handleDrawer(){const n=data.el.querySelector("."+data.id+" .beae-drawer-filter");n&&(n.onclick=()=>{let t=data.el.querySelector("."+data.id+" .beae-form-wrp--drawer"),o=document.createElement("div");o.innerHTML=`<div class="beae-drawer-wrp-content" data-use-accordion="${data.useAccordionOnDesktop}">
              <div class="beae-drawer-header">${filterTitle}</div>
              ${t==null?void 0:t.innerHTML.replace(/beae-facets-/g,"beae-facets-mobile-")}
              <div class="beae-drawer-footer">
                <button type="button" class="beae-drawer-btn--clear">${clearText}</button> 
                <button type="button" class="beae-drawer-btn--apply">${applyText}<span class="beae-button-submit--form-count" data-count="0">(0)</span></button>
              </div>
          </div>`,t&&window.BeaePopupLibrary&&window.BeaePopupLibrary.createPopup(o,{layout:extOptions.layout?extOptions.layout:"left",width:extOptions.width?extOptions.width:"500px",layoutMobile:extOptions.layoutMobile?extOptions.layoutMobile:"bottom",sectionId:data.id,customJs:callBackDrawer})})}function callBackDrawer(n){if(!n)return;handleInitDropdown(n),handleRangePrice(n);const t=n.querySelector("form"),o=n.querySelector(".beae-button-submit--form-count"),r=n.querySelector(".beae-drawer-btn--apply"),s=n.querySelector(".beae-drawer-btn--clear");s&&(s.onclick=()=>{data.mode.value=="live"&&fetchFromUrl(window.location.origin+window.location.pathname),window.BeaePopupLibrary.closePopup()});function p(){const c=new FormData(t);let d=0;for(let[l,v]of c.entries())v&&l!="sort_by"&&d++;o&&(o.setAttribute("data-count",d),o.innerHTML="("+d+")")}p(),r?(t.onchange=c=>{p()},r&&(r.onclick=()=>{p(),onSummitHandler(n,t),window.BeaePopupLibrary.closePopup()})):t.onchange=c=>{p(),onSummitHandler(n,t)}}function handlePopover(n){if(!n)return;n.querySelectorAll(".beae-coll-filter-item--popover").forEach((o,r)=>{const s=o.querySelector(".beae-coll-filter-popover-title"),p=o.querySelector(".beae-coll-filter-popover-content");s&&p&&(s.onclick=()=>{o.classList.contains("active")?o.classList.remove("active","left","right"):(o.classList.add("active"),(p==null?void 0:p.getBoundingClientRect().right)>window.innerWidth&&o.classList.add("right"),(p==null?void 0:p.getBoundingClientRect().left)<0&&o.classList.add("left"))},document.addEventListener("click",function(c){!o.contains(c.target)&&!c.target.classList.contains("beae-loading-filter")&&o.classList.remove("active")}))})}function handleInitDropdown(n){if(!n)return;n.querySelectorAll(".beae-coll-filter-item--dropdown").forEach((o,r)=>{const s=o.querySelector(".beae-coll-filter-menu-title"),p=o.querySelector(".beae-coll-filter-menu-content");s&&p&&(s.onclick=()=>{o.classList.contains("active")?(o.classList.remove("active"),p.style.height="0px"):(o.classList.add("active"),p.style.height=(p==null?void 0:p.scrollHeight)+"px")})})}function handleSortBy(){const n=document.querySelectorAll(".beae-coll-sort-item");n.length&&n.forEach(t=>{t.addEventListener("click",function(o){if(t.classList.contains("active"))return;const r=document.querySelector(".beae-coll-sort-item.active");r&&r.classList.remove("active"),t.classList.add("active");const s=new URL(window.location.href);s.searchParams.set("sort_by",t.getAttribute("data-value")),fetchFromUrl(s.href)})})}function updateSort(n){const t=data.el.querySelector("."+data.id+" .beae-coll-sort--wrp");if(!t)return;const o=t.querySelector(".beae-coll-sort-title > span:first-child");if(o){if(o.getAttribute("data-value")==n)return;{o.setAttribute("data-value",n);const p=data.el.querySelector("."+data.id+" .beae-form-target").querySelector('input[name="sort_by"][value="'+n+'"] + label').innerHTML;o.innerHTML=p}}}function handleRemoveBadged(n,t=null){const o=n||data.el,r=o.querySelectorAll(".beae-item-facets, .beae-clear-all, button.beae-pagination-item");r.length&&r.forEach(s=>{s.onclick=p=>{const c=s.getAttribute("data-url");if(s.classList.contains("disabled")||!c)return;if(s.classList.contains("beae-clear-all")){updateSort("best-selling");const v=o.querySelector(".beae-button-submit--form-count");v&&(v.setAttribute("data-count",0),v.innerHTML="(0)")}const d=document.createElement("span");d.setAttribute("class","beae-clear-spinner"),d.innerHTML='<span class="beae-spinner"></span>',s.replaceWith(d),fetchFromUrl(window.location.origin+c),t&&typeof t=="function"&&t();const l=data.el.querySelector("."+data.id+" .beae-collection-details-wrp");if(l){const v=l.getBoundingClientRect(),y=window.innerHeight*.2;window.scrollTo({top:window.scrollY+v.top-y,behavior:"smooth"})}}})}function handlePagination(){var t;const n=((t=data.el.querySelector("."+data.id+" .beae-coll-paginate--wrp"))==null?void 0:t.getAttribute("data-paginate"))??"default";if(["load_more","scroll_infinity"].includes(n))handleLoadMore();else{if(n=="paginate")return;{const o=data.el.querySelectorAll("."+data.id+" .beae-paginate-link button");o.length&&o.forEach(r=>{r.addEventListener("click",function(s){const p=r.getAttribute("data-url");r.classList.contains("disabled")||!p||fetchFromUrl(window.location.origin+p)})})}}}function handleDrawerMobile(){var o;console.log("handle drawer mobile");const n=data.el.querySelector("."+data.id+" .beae-drawer-btn-mobile"),t=(o=document.querySelector(".beae-filter-collection-with-type"))==null?void 0:o.getAttribute("data-filter-type");updateCountMobile(),n&&n.addEventListener("click",()=>{let r=".beae-form-wrp--"+t,s=data.el.querySelector(r),p=document.createElement("div");p.innerHTML=`<div class="beae-drawer--mobile-wrp">
        <div class="beae-drawer-header">${filterTitleMobile}</div>${s==null?void 0:s.innerHTML.replace(/beae-facets-/g,"beae-facets-mobile-")}
        <button class="beae-button-submit--form">${applyTextMobile}<span class="beae-button-submit--form-count" data-count="0">(0)</span></button>
        </div>`,s&&window.BeaePopupLibrary&&window.BeaePopupLibrary.createPopup(p,{layout:"left",layoutMobile:"bottom",style:{maxHeight:"75vh"},sectionId:data.id,customJs:handleFormMobile,...extOptions})})}function updateCountMobile(){if(data.mode.value!="live")return;const n=data.el.querySelector("."+data.id+" .beae-form-target"),t=data.el.querySelector("."+data.id+" .beae-button-submit--form-count");if(!n)return;const o=new FormData(n);let r=0;for(let[s,p]of o.entries())p&&s!="sort_by"&&r++;t&&(r==0?t.style.display="none":t.style.display="block",t.setAttribute("data-count",r),t.innerHTML="("+r+")")}function handleFormMobile(n){handleInitDropdown(n),handleRangePrice(n);const t=n.querySelector("form"),o=n.querySelector(".beae-button-submit--form"),r=n.querySelector(".beae-button-submit--form-count"),s=data.el.querySelector("."+data.id+" .beae-button-submit--form-count");function p(){const c=new FormData(t);let d=0,l=0;for(let[v,y]of c.entries())y&&(v!="sort_by"&&l++,d++);r&&(r.setAttribute("data-count",l),r.innerHTML="("+l+")"),s&&(s.setAttribute("data-count",l),s.innerHTML="("+l+")"),d<0?o.disabled=!0:o.disabled=!1}p(),t.onchange=p,handleRemoveBadged(n,()=>{p(),window.BeaePopupLibrary.closePopup()}),o.addEventListener("click",c=>{onSummitHandler(c,t),window.BeaePopupLibrary.closePopup()})}function onSummitHandler(n,t){loading=!0;let o=null;n&&n.classList&&n.classList.contains("beae-next-popup--container")?o=n:n.preventDefault();const r=t.getAttribute("section-id"),s=new FormData(t);let p=new URLSearchParams(s).toString();if(updateSort(s.get("sort_by")),window){const c=new URLSearchParams(window.location.search);if(c!=null&&c.has("q")){const d=c.get("q");p=p?p+"&q="+d:"q="+d}}if(handleLoading(),r){const c=window.location.pathname+"?section_id="+r+"&"+p;fetchData[c]?(checkAction?refreshHtml(fetchData[c],".beae-x-collection-details").then(handleWrpProducts):refreshHtml(fetchData[c],".beae-collection-details-wrp").then(handleWrpProducts),updateAppliedFilter(fetchData[c]),refreshHtml(fetchData[c],".beae-active-facets").then(handleRemoveBadged),refreshHtmlSupper(fetchData[c],o).then(callBackDrawer),refreshHtml(fetchData[c],".beae-form-target").then(initFilterAction),refreshHtml(fetchData[c],".beae-form-wrp--horizontal"),refreshHtml(fetchData[c],".beae-coll-sort--wrp").then(initFilterAction),refreshHtml(fetchData[c],".beae-coll-paginate--wrp").then(handlePagination),updatePromotion(fetchData[c],c),loading=!1,handleLoading(!1)):fetch(c).then(d=>d.text()).then(d=>{fetchData[c]=d,checkAction?refreshHtml(d,".beae-x-collection-details").then(handleWrpProducts):refreshHtml(d,".beae-collection-details-wrp").then(handleWrpProducts),updateAppliedFilter(d),refreshHtml(d,".beae-active-facets").then(handleRemoveBadged),refreshHtmlSupper(d,o).then(callBackDrawer),refreshHtml(d,".beae-form-target").then(initFilterAction),refreshHtml(d,".beae-form-wrp--horizontal"),refreshHtml(d,".beae-coll-sort--wrp").then(initFilterAction),refreshHtml(d,".beae-coll-paginate--wrp").then(handlePagination),updatePromotion(d,c),loading=!1,handleLoading(!1)}),history.pushState({searchParams:p},"",`${window.location.pathname}${p&&"?".concat(p)}`)}}function fetchFromUrl(n){fetchData={},loading=!0;const t=data.el.querySelector("."+data.id+" .beae-x-collection-details");if(!t)return;const o=t.getAttribute("section-id"),r=new URL(n),s=r.search?r.search.replace("?",""):"",p=r.pathname+"?section_id="+o+"&"+s;handleLoading(),fetchData[p]?(checkAction?refreshHtml(fetchData[n],".beae-x-collection-details").then(handleWrpProducts):refreshHtml(fetchData[n],".beae-collection-details-wrp").then(handleWrpProducts),updateAppliedFilter(fetchData[p]),refreshHtml(fetchData[p],"."+data.id+" .beae-active-facets").then(handleRemoveBadged),refreshHtml(fetchData[p],"."+data.id+" .beae-form-target").then(initFilterAction),refreshHtml(fetchData[p],"."+data.id+" .beae-form-wrp--horizontal"),refreshHtml(fetchData[p],"."+data.id+" .beae-coll-sort--wrp").then(initFilterAction),refreshHtml(fetchData[p],"."+data.id+" .beae-coll-paginate--wrp").then(handlePagination),updatePromotion(fetchData[p],p),loading=!1,checkAction=temp,handleLoading(!1)):fetch(p).then(c=>c.text()).then(c=>{fetchData[p]=c,checkAction?refreshHtml(c,".beae-x-collection-details").then(handleWrpProducts):refreshHtml(c,".beae-collection-details-wrp").then(handleWrpProducts),updateAppliedFilter(c),refreshHtml(c,"."+data.id+" .beae-active-facets").then(handleRemoveBadged),refreshHtml(c,"."+data.id+" .beae-form-target").then(initFilterAction),refreshHtml(c,"."+data.id+" .beae-form-wrp--horizontal"),refreshHtml(c,"."+data.id+" .beae-coll-sort--wrp").then(initFilterAction),refreshHtml(c,"."+data.id+" .beae-coll-paginate--wrp").then(handlePagination),updatePromotion(c,p),loading=!1,checkAction=temp,handleLoading(!1)}),history.pushState({searchParams:s},"",`${window.location.pathname}${s&&"?".concat(s)}`)}function handleLoadMore(){const t=data.el.querySelector("."+data.id+" .beae-coll-paginate--wrp").querySelector(".beae-collection-loadmore");if(t){t.getAttribute("data-url")||t.remove();const r=s=>{if(loading)return;const p=t.getAttribute("data-url");loading=!0;const c=data.el.querySelector("."+data.id+" .beae-x-collection-details");if(!c)return;const d=document.createElement("span");d.setAttribute("class","beae-clear-spinner"),d.innerHTML='<span class="beae-spinner"></span>',t.replaceWith(d);const l=c.getAttribute("section-id"),v=new URL(window.location.origin+p),y=v.search?v.search.replace("?",""):"",g=v.pathname+"?section_id="+l+"&"+y;handleLoading(),fetch(g).then(h=>h.text()).then(h=>{const u=document.createElement("div");u.innerHTML=h,typeof window.handleSwatchForCardForm=="function"&&(window.handleSwatchForCardForm({el:u,mode:{value:"live"}}),window.handleEventFormProductCard(u));const f=u.querySelectorAll("."+data.id+" .beae-collection-details-wrp > form"),b=data.el.querySelector("."+data.id+" .beae-collection-details-wrp");for(let C=0;C<f.length;C++)f[C].style.animationDelay=C*100+"ms",f[C].classList.add("beae-fade-in-up"),b.appendChild(f[C]);refreshHtml(h,".beae-coll-paginate--wrp").then(handlePagination),loading=!1,handleLoading(!1)}).catch(()=>{loading=!1,handleLoading(!1)})};t.addEventListener("click",r)}}function handleLoading(n=!0){const t=data.el.querySelector("."+data.id+" .beae-collection-details-wrp"),o=data.el.querySelector("."+data.id+" .beae-coll-container");if(n){if(t){const r=document.createElement("div");r.classList.add("beae-loading-filter"),o.appendChild(r),t.style.opacity=.5}}else{o.querySelector(".beae-loading-filter")&&o.querySelector(".beae-loading-filter").remove(),t&&(t.style={});const r=o.querySelector(".beae-clear-spinner");r&&r.remove()}}function handleWrpProducts(){var s,p;typeof window.handleSwatchForCardForm=="function"&&(window.handleSwatchForCardForm(data),window.handleEventFormProductCard());const n=data.el.querySelector("."+data.id+" .beae-collection-details-wrp");if(n&&n.innerHTML)return;const t=data.el.querySelector("."+data.id+" .beae-coll-container"),o=(s=data.el.querySelector("."+data.id+" .beae-x-collection-details"))==null?void 0:s.dataset.textNoProduct,r=(p=data.el.querySelector("."+data.id+" .beae-x-collection-details"))==null?void 0:p.dataset.textClear;t&&(checkAction=!0,t.innerHTML=`
      <div class="beae-collection-no-products">
        <span class="beae-typo-p1">${o}</span>
        <button type="button" class="beae-clear-all beae-btn-pr" data-url="${window.location.pathname}">${r}</button>
      </div>`)}function updateAppliedFilter(n){refreshHtml(n,".beae-applied-filters").then(()=>{const t=data.el.querySelector("."+data.id+" .beae-applied-filters");if(!t)return;const o=t.querySelector(".beae-coll-filter-menu-title"),r=t.querySelector(".beae-coll-filter-menu-content");o&&r&&(o.onclick=()=>{t.classList.contains("active")?(t.classList.remove("active"),r.style.height="0px"):(t.classList.add("active"),r.style.height=(r==null?void 0:r.scrollHeight)+"px")}),handleRemoveBadged()})}function refreshHtmlSupper(n,t){return new Promise(o=>{if(!t)return o(t);const r=document.createElement("div");r.innerHTML=n;const s=r.querySelector(".beae-form-wrp--drawer"),p=t.querySelector(".beae-popup__content");p.innerHTML=`<div class="beae-drawer-wrp-content" data-use-accordion="${data.useAccordionOnDesktop}">
          <div class="beae-drawer-header">Filter</div>
          ${s==null?void 0:s.innerHTML.replace(/beae-facets-/g,"beae-facets-mobile-")}
          <div class="beae-drawer-footer">
            <button type="button" class="beae-drawer-btn--clear beae-btn-se">Clear</button> 
            <button type="button" class="beae-drawer-btn--apply beae-btn-pr jk">Apply <span class="beae-button-submit--form-count" data-count="0">(0)</span></button>
          </div>
      </div>`,o(t)})}function refreshHtml(n,t){return new Promise(o=>{const r=data.el.querySelector(t),s=document.createElement("div");s.innerHTML=n;const p=s.querySelector(t);if(p&&r){if(t==".beae-form-target"){if(r.querySelector(".beae-coll-filter-item--dropdown")){const c=r.querySelectorAll(".beae-coll-filter-item--dropdown"),d=p.querySelectorAll(".beae-coll-filter-item--dropdown");c.forEach((l,v)=>{if(l.classList.contains("active")){const y=l.querySelector(".beae-coll-filter-menu-content").scrollHeight;d[v].classList.add("active"),d[v].querySelector(".beae-coll-filter-menu-content").style.height=y+"px"}})}if(r.querySelector(".beae-coll-filter-item--popover")){const c=r.querySelectorAll(".beae-coll-filter-item--popover"),d=p.querySelectorAll(".beae-coll-filter-item--popover");c.forEach((l,v)=>{l.classList.contains("active")&&d[v].classList.add("active")})}}if(t==".beae-coll-container"){r.innerHTML=`
            <div class="beae-collection-details-wrp"></div>
            <div class="beae-coll-paginate--wrp"></div>
          `;const c=p.querySelectorAll(".beae-collection-details-wrp > form"),d=r.querySelector(".beae-collection-details-wrp");for(let l=0;l<c.length;l++)c[l].style.animationDelay=l*100+"ms",c[l].classList.add("beae-fade-in-up"),d.appendChild(c[l])}else r.innerHTML=p.innerHTML}o()})}function updatePromotion(n,t){if(!(/[\?&]page=1($|&)/.test(t)||!/[\?&]page=/.test(t)))return;const r=document.createElement("div");r.innerHTML=n;const s=data.el.querySelector("."+data.id+" .beae-collection-details-wrp");if(!s||!r.querySelector(".beae-promotion > *"))return;const p=r.querySelector(".beae-promotion > *").cloneNode(!0),c=s.children;let d=s.getAttribute("promotion-index");d&&(d=parseInt(d),d>=c.length?s.appendChild(p):s.insertBefore(p,c[d]))}setTimeout(()=>{typeof window.handleSwatchForCardForm=="function"&&window.handleSwatchForCardForm(data)},100),(["builder"].includes(data.mode.value)||window.isPreviewTemplate)&&setTimeout(()=>{typeof window.handleEventFormProductCard=="function"&&window.handleEventFormProductCard()},100) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-hw249t5y: ', ex)
      };
    

      try {
        let argid = 'beae-q9nqfpzjbutton-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-q9nqfpzj',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-q9nqfpzj');
        args.el = args.els[0];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{var n,t;let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(o){extOptions={},console.error(o)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let o=document.querySelector(selector+","+selector.replace("#","."));if(o)return o.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let s=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(s,{id:data.id,...extOptions}),e.preventDefault();return}const o=window.createLoading(e.currentTarget);let r=(t=(n=window.BEAE_HELPER)==null?void 0:n.routes)==null?void 0:t.root_url;return window.BeaePopupLibrary.lightbox({id:data.id,url:(r!=="/"?r:"")+((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(s=>{s.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(s),o.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let o=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(o=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(o,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-q9nqfpzj: ', ex)
      };
    

      try {
        let argid = 'beae-edvq6hf0block-developer',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-edvq6hf0',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-edvq6hf0');
        args.el = args.els[0];
        ((data
) => { document.addEventListener('DOMContentLoaded', function() {
  const btn = document.querySelector('.beae-clear-all');
  if (btn) {
    btn.textContent = 'Rensa alla';
  }
}); })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-edvq6hf0: ', ex)
      };
    

      try {
        let argid = 'beae-hr8vgobqsection-featured-collection',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-hr8vgobq',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-hr8vgobq');
        args.el = args.els[0];
        ((S) => { if(S.mode.value!=="live")return;setTimeout(()=>{typeof(S==null?void 0:S.promotionPosition)=="number"&&B(S==null?void 0:S.promotionPosition)},100);function B(k){const $=S.el.querySelector(".beae-collection-details-wrp");if(!$)return;const w=S.el.querySelector(".beae-promotion > *"),x=$.children;k>=x.length?$.appendChild(w):$.insertBefore(w,x[k]);const M=S.el.querySelector(".beae-promotion");M&&M.remove()} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-hr8vgobq: ', ex)
      };
    

      try {
        let argid = 'beae-6hxc1rmkblock-image',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-6hxc1rmk',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-6hxc1rmk');
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
        console.error('BEAE JS ERROR ID beae-6hxc1rmk: ', ex)
      };
    

      try {
        let argid = 'beae-79epa8y0block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-79epa8y0',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-79epa8y0');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-79epa8y0: ', ex)
      };
    

      try {
        let argid = 'beae-6eetg63fblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-6eetg63f',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-6eetg63f');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-6eetg63f: ', ex)
      };
    

      try {
        let argid = 'beae-5uczi4gtblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-5uczi4gt',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-5uczi4gt');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-5uczi4gt: ', ex)
      };
    

      try {
        let argid = 'beae-ziy96v4iblock-developer',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-ziy96v4i',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-ziy96v4i');
        args.el = args.els[0];
        ((data
) => { if(!data.els) {
            return;
          }
          data.els.forEach(element => {
            const content = element.querySelector('.beae-desc-content');
            if (content && data.type == 'less_more') {
              const btn = element.querySelector('.btn-action-les-more');
              const wrp = element.querySelector('.beae-less-more');
              const height = wrp && wrp.getAttribute('data-height');
              const wrpContent = wrp && wrp.querySelector('.beae-desc-content');

              function checkHeight() {
                  if (wrpContent && btn && height) {
                      if (wrpContent.offsetHeight > parseFloat(height.split('px')[0])) {
                          btn.style.display = "block";
                      } else {
                          btn.style.display = "none";
                      }
                  }
              }

              checkHeight();

              if (wrpContent) {
                  const resizeObserver = new ResizeObserver(() => {
                      checkHeight();
                  });
                  resizeObserver.observe(wrpContent);
              }

              if (wrp) {
                  wrp.style.height = height;
              }
              if (btn && wrp && !btn.dataset.listenerAttached) {
                  btn.addEventListener('click', () => {
                      const type = btn.getAttribute('data-type');
                      if (type == 'more') {
                          wrp.classList.remove('beae-show-more');
                          wrp.style.height = height;
                          btn.setAttribute('data-type', 'less');
                          btn.innerHTML = btn.getAttribute('data-show-more-text');
                      } else {
                          wrp.classList.add('beae-show-more');
                          wrp.style.height = wrp.scrollHeight + 'px';
                          setTimeout(() => {
                              wrp.style = {};
                          }, 100);
                          btn.setAttribute('data-type', 'more');
                          btn.innerHTML = btn.getAttribute('data-show-less-text');
                      }
                  });
                  btn.dataset.listenerAttached = 'true';
                  if (data.active) {
                      btn.click();
                  }
              }
            }
          }); })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-ziy96v4i: ', ex)
      };
    

      try {
        let argid = 'beae-ziy96v4iblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-ziy96v4i',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-ziy96v4i');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-ziy96v4i: ', ex)
      };
    }; if (window.BEAEBASE) {js_9M0V4HJR()} else {window.BEAEPAGEJS.push(js_9M0V4HJR)} })(); 