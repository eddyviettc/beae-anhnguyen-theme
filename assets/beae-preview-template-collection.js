
(() => { if (window.BEAEPAGEJS === undefined) {
            window.BEAEPAGEJS = [];
          }

          if(window.beaePageSetting == undefined) {
            window.beaePageSetting = {};
          }
          
          window.beaePageSetting.pageId = "691b55e003c76baff2064da2";
              window.beaePageSetting.pageTitle = "ádasd"; 
              window.beaePageSetting.pageType = "collection";

          let js_TVRK6HU6 = () => { let BeaeUseHooks = {};
      try {
        let argid = 'beae-s4bzwq5lsection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-s4bzwq5l',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-s4bzwq5l');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-s4bzwq5l: ', ex)
      };
    

      try {
        let argid = 'beae-p1ymh4uwblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-p1ymh4uw',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-p1ymh4uw');
        args.el = args.els[0];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-p1ymh4uw: ', ex)
      };
    

      try {
        let argid = 'beae-8s4jtmdiblock-developer',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-8s4jtmdi',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-8s4jtmdi');
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
        console.error('BEAE JS ERROR ID beae-8s4jtmdi: ', ex)
      };
    

      try {
        let argid = 'beae-8s4jtmdiblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-8s4jtmdi',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-8s4jtmdi');
        args.el = args.els[0];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-8s4jtmdi: ', ex)
      };
    

      try {
        let argid = 'beae-2jb13mb1section-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-2jb13mb1',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-2jb13mb1');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-2jb13mb1: ', ex)
      };
    

      try {
        let argid = 'beae-jrhyeoi7section-collection-details',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-jrhyeoi7',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-jrhyeoi7');
        args.el = args.els[0];
        ((data) => { var a;window.BeaeMoneyFormat||(window.BeaeMoneyFormat=(a=data.el.querySelector("."+data.id+" .beae-money-format"))==null?void 0:a.innerHTML);let fetchData={},loading=!1,extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(n){extOptions={},console.error(n)}const containerBlock=data.el.querySelector("."+data.id+" .beae-filter-collection-with-type");let checkAction=(containerBlock&&(containerBlock==null?void 0:containerBlock.getAttribute("data-action-update"))==="default")??!0;const temp=checkAction,filter=document.querySelector(".beae-filter-collection-with-type"),filterType=filter==null?void 0:filter.getAttribute("data-filter-type"),filterTitle=filter==null?void 0:filter.getAttribute("data-title"),filterTitleMobile=filter==null?void 0:filter.getAttribute("data-title-mobile"),applyText=filter==null?void 0:filter.getAttribute("data-apply-text"),applyTextMobile=filter==null?void 0:filter.getAttribute("data-apply-text-mobile"),clearText=filter==null?void 0:filter.getAttribute("data-clear-text");handlePagination(),handleRemoveBadged(),initFilterAction(),data.stickyMobile?handleDrawerMobile():handleMobile();function handleMobile(){const n=data.el.querySelector("."+data.id+" .beae-wrp-filter--btn-filter");n&&(n.onclick=()=>{let o=".beae-form-wrp--"+filterType,r=data.el.querySelector(o),s=document.createElement("div");s.innerHTML=`<div class="beae-drawer--mobile-wrp">
          <div class="beae-drawer-header">${filterTitleMobile}</div>${r==null?void 0:r.innerHTML.replace(/beae-facets-/g,"beae-facets-mobile-")}
          <button class="beae-button-submit--form">${applyTextMobile} <span class="beae-button-submit--form-count">(0)</span></button>
          </div>`,r&&window.BeaePopupLibrary&&window.BeaePopupLibrary.createPopup(s,{layout:"left",layoutMobile:"bottom",style:{maxHeight:"75vh"},sectionId:data.id,customJs:handleFormMobile,...extOptions})});const t=data.el.querySelector("."+data.id+" .beae-wrp-filter--btn-sort");t&&t.addEventListener("click",()=>{let o=".beae-coll-sort-content",r=data.el.querySelector(o),s=document.createElement("div");s.innerHTML=`<div class="beae-sort--mobile-wrp">
          <div class="beae-sort-header">Sort</div>
          <div class="beae-sort-mobile--content">${r==null?void 0:r.innerHTML}</div>
        </div>`,r&&window.BeaePopupLibrary&&window.BeaePopupLibrary.createPopup(s,{layout:"left",layoutMobile:"bottom",style:{maxHeight:"75vh"},sectionId:data.id,customJs:u=>{const c=u.querySelectorAll(".beae-coll-sort-item"),d=data.el.querySelector("."+data.id+" .beae-coll-sort-content");c.length&&c.forEach(l=>{l.addEventListener("click",function(y){if(l.classList.contains("active"))return;const x=u.querySelector(".beae-coll-sort-item.active");x&&x.classList.remove("active"),l.classList.add("active");const m=l.getAttribute("data-value"),h=data.el.querySelector("."+data.id+" .beae-form-target");if(h){const b=h.querySelector('input[name="sort_by"][value="'+m+'"]');b&&b.click()}const p=d.querySelector(".beae-coll-sort-item.active");p&&p.classList.remove("active");const f=d.querySelector('.beae-coll-sort-item[data-value="'+m+'"]');f&&f.classList.add("active"),window.BeaePopupLibrary.closePopup()})})},...extOptions})})}function handleRangePrice(n){n&&(rangeLowerBound=n.querySelector('.beae-range-group > input[type="range"]:first-child'),rangeHigherBound=n.querySelector('.beae-range-group > input[type="range"]:last-child'),textInputLowerBound=n.querySelector('.beae-price-range input[name="filter.v.price.gte"]'),textInputHigherBound=n.querySelector('.beae-price-range input[name="filter.v.price.lte"]'),!(!rangeLowerBound||!rangeHigherBound||!textInputLowerBound|!textInputHigherBound)&&(textInputLowerBound.addEventListener("focus",()=>textInputLowerBound.select()),textInputHigherBound.addEventListener("focus",()=>textInputHigherBound.select()),textInputLowerBound.addEventListener("change",t=>{t.preventDefault(),t.target.value=Math.max(Math.min(parseInt(t.target.value),parseInt(textInputHigherBound.value||t.target.max)-1),t.target.min),rangeLowerBound.value=t.target.value,rangeLowerBound.parentElement.style.setProperty("--range-min",`${parseInt(rangeLowerBound.value)/parseInt(rangeLowerBound.max)*100}%`)}),textInputHigherBound.addEventListener("change",t=>{t.preventDefault(),t.target.value=Math.min(Math.max(parseInt(t.target.value),parseInt(textInputLowerBound.value||t.target.min)+1),t.target.max),rangeHigherBound.value=t.target.value,rangeHigherBound.parentElement.style.setProperty("--range-max",`${parseInt(rangeHigherBound.value)/parseInt(rangeHigherBound.max)*100}%`)}),rangeLowerBound.addEventListener("change",t=>{t.stopPropagation(),textInputLowerBound.value=t.target.value,textInputLowerBound.dispatchEvent(new Event("change",{bubbles:!0}))}),rangeHigherBound.addEventListener("change",t=>{t.stopPropagation(),textInputHigherBound.value=t.target.value,textInputHigherBound.dispatchEvent(new Event("change",{bubbles:!0}))}),rangeLowerBound.addEventListener("input",t=>{t.target.value=Math.min(parseInt(t.target.value),parseInt(textInputHigherBound.value||t.target.max)-1),t.target.parentElement.style.setProperty("--range-min",`${parseInt(t.target.value)/parseInt(t.target.max)*100}%`),textInputLowerBound.value=t.target.value}),rangeHigherBound.addEventListener("input",t=>{t.target.value=Math.max(parseInt(t.target.value),parseInt(textInputLowerBound.value||t.target.min)+1),t.target.parentElement.style.setProperty("--range-max",`${parseInt(t.target.value)/parseInt(t.target.max)*100}%`),textInputHigherBound.value=t.target.value})))}function initFilterAction(n){var r;const t=(r=document.querySelector(".beae-filter-collection-with-type"))==null?void 0:r.getAttribute("data-filter-type"),o=data.el.querySelector("."+data.id+" .beae-drawer-btn-mobile");if(o){const s=new IntersectionObserver(c=>{c[0].isIntersecting?o.classList.add("hidden"):o.classList.remove("hidden")},{rootMargin:"50px 0px"}),u=document.querySelector(".shopify-section--footer, footer, .footer");u&&s.observe(u)}if(t=="sidebar"){handleInitDropdown(data.el);const s=data.el.querySelector("."+data.id+" .beae-sidebar-btn");s&&(data.filterDefault?s.style.cursor="default":s&&(s.onclick=()=>{u.classList.toggle("active-sidebar")}));const u=data.el.querySelector("."+data.id+" .beae-filter-collection--sidebar");u&&u.classList.add("active-sidebar")}else t=="drawer"&&handleDrawer();if(handlePopover(data.el),handleRangePrice(data.el),handleSortBy(),handleMobile(),(!n||n&&!n.noSubmitWhenChange)&&data.mode.value=="live"){const s=data.el.querySelector("."+data.id+" .beae-form-target");if(!s)return;s.onchange=u=>{onSummitHandler(u,s)}}}function handleDrawer(){const n=data.el.querySelector("."+data.id+" .beae-drawer-filter");n&&(n.onclick=()=>{let t=data.el.querySelector("."+data.id+" .beae-form-wrp--drawer"),o=document.createElement("div");o.innerHTML=`<div class="beae-drawer-wrp-content" data-use-accordion="${data.useAccordionOnDesktop}">
              <div class="beae-drawer-header">${filterTitle}</div>
              ${t==null?void 0:t.innerHTML.replace(/beae-facets-/g,"beae-facets-mobile-")}
              <div class="beae-drawer-footer">
                <button type="button" class="beae-drawer-btn--clear">${clearText}</button> 
                <button type="button" class="beae-drawer-btn--apply">${applyText}<span class="beae-button-submit--form-count" data-count="0">(0)</span></button>
              </div>
          </div>`,t&&window.BeaePopupLibrary&&window.BeaePopupLibrary.createPopup(o,{layout:extOptions.layout?extOptions.layout:"left",width:extOptions.width?extOptions.width:"500px",layoutMobile:extOptions.layoutMobile?extOptions.layoutMobile:"bottom",sectionId:data.id,customJs:callBackDrawer})})}function callBackDrawer(n){if(!n)return;handleInitDropdown(n),handleRangePrice(n);const t=n.querySelector("form"),o=n.querySelector(".beae-button-submit--form-count"),r=n.querySelector(".beae-drawer-btn--apply"),s=n.querySelector(".beae-drawer-btn--clear");s&&(s.onclick=()=>{data.mode.value=="live"&&fetchFromUrl(window.location.origin+window.location.pathname),window.BeaePopupLibrary.closePopup()});function u(){const c=new FormData(t);let d=0;for(let[l,y]of c.entries())y&&l!="sort_by"&&d++;o&&(o.setAttribute("data-count",d),o.innerHTML="("+d+")")}u(),r?(t.onchange=c=>{u()},r&&(r.onclick=()=>{u(),onSummitHandler(n,t),window.BeaePopupLibrary.closePopup()})):t.onchange=c=>{u(),onSummitHandler(n,t)}}function handlePopover(n){if(!n)return;n.querySelectorAll(".beae-coll-filter-item--popover").forEach((o,r)=>{const s=o.querySelector(".beae-coll-filter-popover-title"),u=o.querySelector(".beae-coll-filter-popover-content");s&&u&&(s.onclick=()=>{o.classList.contains("active")?o.classList.remove("active","left","right"):(o.classList.add("active"),(u==null?void 0:u.getBoundingClientRect().right)>window.innerWidth&&o.classList.add("right"),(u==null?void 0:u.getBoundingClientRect().left)<0&&o.classList.add("left"))},document.addEventListener("click",function(c){!o.contains(c.target)&&!c.target.classList.contains("beae-loading-filter")&&o.classList.remove("active")}))})}function handleInitDropdown(n){if(!n)return;n.querySelectorAll(".beae-coll-filter-item--dropdown").forEach((o,r)=>{const s=o.querySelector(".beae-coll-filter-menu-title"),u=o.querySelector(".beae-coll-filter-menu-content");s&&u&&(s.onclick=()=>{o.classList.contains("active")?(o.classList.remove("active"),u.style.height="0px"):(o.classList.add("active"),u.style.height=(u==null?void 0:u.scrollHeight)+"px")})})}function handleSortBy(){const n=document.querySelectorAll(".beae-coll-sort-item");n.length&&n.forEach(t=>{t.addEventListener("click",function(o){if(t.classList.contains("active"))return;const r=document.querySelector(".beae-coll-sort-item.active");r&&r.classList.remove("active"),t.classList.add("active");const s=new URL(window.location.href);s.searchParams.set("sort_by",t.getAttribute("data-value")),fetchFromUrl(s.href)})})}function updateSort(n){const t=data.el.querySelector("."+data.id+" .beae-coll-sort--wrp");if(!t)return;const o=t.querySelector(".beae-coll-sort-title > span:first-child");if(o){if(o.getAttribute("data-value")==n)return;{o.setAttribute("data-value",n);const u=data.el.querySelector("."+data.id+" .beae-form-target").querySelector('input[name="sort_by"][value="'+n+'"] + label').innerHTML;o.innerHTML=u}}}function handleRemoveBadged(n,t=null){const o=n||data.el,r=o.querySelectorAll(".beae-item-facets, .beae-clear-all, button.beae-pagination-item");r.length&&r.forEach(s=>{s.onclick=u=>{const c=s.getAttribute("data-url");if(s.classList.contains("disabled")||!c)return;if(s.classList.contains("beae-clear-all")){updateSort("best-selling");const y=o.querySelector(".beae-button-submit--form-count");y&&(y.setAttribute("data-count",0),y.innerHTML="(0)")}const d=document.createElement("span");d.setAttribute("class","beae-clear-spinner"),d.innerHTML='<span class="beae-spinner"></span>',s.replaceWith(d),fetchFromUrl(window.location.origin+c),t&&typeof t=="function"&&t();const l=data.el.querySelector("."+data.id+" .beae-collection-details-wrp");if(l){const y=l.getBoundingClientRect(),x=window.innerHeight*.2;window.scrollTo({top:window.scrollY+y.top-x,behavior:"smooth"})}}})}function handlePagination(){var t;const n=((t=data.el.querySelector("."+data.id+" .beae-coll-paginate--wrp"))==null?void 0:t.getAttribute("data-paginate"))??"default";if(["load_more","scroll_infinity"].includes(n))handleLoadMore();else{if(n=="paginate")return;{const o=data.el.querySelectorAll("."+data.id+" .beae-paginate-link button");o.length&&o.forEach(r=>{r.addEventListener("click",function(s){const u=r.getAttribute("data-url");r.classList.contains("disabled")||!u||fetchFromUrl(window.location.origin+u)})})}}}function handleDrawerMobile(){var o;console.log("handle drawer mobile");const n=data.el.querySelector("."+data.id+" .beae-drawer-btn-mobile"),t=(o=document.querySelector(".beae-filter-collection-with-type"))==null?void 0:o.getAttribute("data-filter-type");updateCountMobile(),n&&n.addEventListener("click",()=>{let r=".beae-form-wrp--"+t,s=data.el.querySelector(r),u=document.createElement("div");u.innerHTML=`<div class="beae-drawer--mobile-wrp">
        <div class="beae-drawer-header">${filterTitleMobile}</div>${s==null?void 0:s.innerHTML.replace(/beae-facets-/g,"beae-facets-mobile-")}
        <button class="beae-button-submit--form">${applyTextMobile}<span class="beae-button-submit--form-count" data-count="0">(0)</span></button>
        </div>`,s&&window.BeaePopupLibrary&&window.BeaePopupLibrary.createPopup(u,{layout:"left",layoutMobile:"bottom",style:{maxHeight:"75vh"},sectionId:data.id,customJs:handleFormMobile,...extOptions})})}function updateCountMobile(){if(data.mode.value!="live")return;const n=data.el.querySelector("."+data.id+" .beae-form-target"),t=data.el.querySelector("."+data.id+" .beae-button-submit--form-count");if(!n)return;const o=new FormData(n);let r=0;for(let[s,u]of o.entries())u&&s!="sort_by"&&r++;t&&(r==0?t.style.display="none":t.style.display="block",t.setAttribute("data-count",r),t.innerHTML="("+r+")")}function handleFormMobile(n){handleInitDropdown(n),handleRangePrice(n);const t=n.querySelector("form"),o=n.querySelector(".beae-button-submit--form"),r=n.querySelector(".beae-button-submit--form-count"),s=data.el.querySelector("."+data.id+" .beae-button-submit--form-count");function u(){const c=new FormData(t);let d=0,l=0;for(let[y,x]of c.entries())x&&(y!="sort_by"&&l++,d++);r&&(r.setAttribute("data-count",l),r.innerHTML="("+l+")"),s&&(s.setAttribute("data-count",l),s.innerHTML="("+l+")"),d<0?o.disabled=!0:o.disabled=!1}u(),t.onchange=u,handleRemoveBadged(n,()=>{u(),window.BeaePopupLibrary.closePopup()}),o.addEventListener("click",c=>{onSummitHandler(c,t),window.BeaePopupLibrary.closePopup()})}function onSummitHandler(n,t){loading=!0;let o=null;n&&n.classList&&n.classList.contains("beae-next-popup--container")?o=n:n.preventDefault();const r=t.getAttribute("section-id"),s=new FormData(t),u=new URLSearchParams(s).toString();if(updateSort(s.get("sort_by")),handleLoading(),r){const c=window.location.pathname+"?section_id="+r+"&"+u;fetchData[c]?(checkAction?refreshHtml(fetchData[c],".beae-x-collection-details").then(handleWrpProducts):refreshHtml(fetchData[c],".beae-collection-details-wrp").then(handleWrpProducts),updateAppliedFilter(fetchData[c]),refreshHtml(fetchData[c],".beae-active-facets").then(handleRemoveBadged),refreshHtmlSupper(fetchData[c],o).then(callBackDrawer),refreshHtml(fetchData[c],".beae-form-target").then(initFilterAction),refreshHtml(fetchData[c],".beae-form-wrp--horizontal"),refreshHtml(fetchData[c],".beae-coll-sort--wrp").then(initFilterAction),refreshHtml(fetchData[c],".beae-coll-paginate--wrp").then(handlePagination),updatePromotion(fetchData[c],c),loading=!1,handleLoading(!1)):fetch(c).then(d=>d.text()).then(d=>{fetchData[c]=d,checkAction?refreshHtml(d,".beae-x-collection-details").then(handleWrpProducts):refreshHtml(d,".beae-collection-details-wrp").then(handleWrpProducts),updateAppliedFilter(d),refreshHtml(d,".beae-active-facets").then(handleRemoveBadged),refreshHtmlSupper(d,o).then(callBackDrawer),refreshHtml(d,".beae-form-target").then(initFilterAction),refreshHtml(d,".beae-form-wrp--horizontal"),refreshHtml(d,".beae-coll-sort--wrp").then(initFilterAction),refreshHtml(d,".beae-coll-paginate--wrp").then(handlePagination),updatePromotion(d,c),loading=!1,handleLoading(!1)}),history.pushState({searchParams:u},"",`${window.location.pathname}${u&&"?".concat(u)}`)}}function fetchFromUrl(n){fetchData={},loading=!0;const t=data.el.querySelector("."+data.id+" .beae-x-collection-details");if(!t)return;const o=t.getAttribute("section-id"),r=new URL(n),s=r.search?r.search.replace("?",""):"",u=r.pathname+"?section_id="+o+"&"+s;handleLoading(),fetchData[u]?(checkAction?refreshHtml(fetchData[n],".beae-x-collection-details").then(handleWrpProducts):refreshHtml(fetchData[n],".beae-collection-details-wrp").then(handleWrpProducts),updateAppliedFilter(fetchData[u]),refreshHtml(fetchData[u],"."+data.id+" .beae-active-facets").then(handleRemoveBadged),refreshHtml(fetchData[u],"."+data.id+" .beae-form-target").then(initFilterAction),refreshHtml(fetchData[u],"."+data.id+" .beae-form-wrp--horizontal"),refreshHtml(fetchData[u],"."+data.id+" .beae-coll-sort--wrp").then(initFilterAction),refreshHtml(fetchData[u],"."+data.id+" .beae-coll-paginate--wrp").then(handlePagination),updatePromotion(fetchData[u],u),loading=!1,checkAction=temp,handleLoading(!1)):fetch(u).then(c=>c.text()).then(c=>{fetchData[u]=c,checkAction?refreshHtml(c,".beae-x-collection-details").then(handleWrpProducts):refreshHtml(c,".beae-collection-details-wrp").then(handleWrpProducts),updateAppliedFilter(c),refreshHtml(c,"."+data.id+" .beae-active-facets").then(handleRemoveBadged),refreshHtml(c,"."+data.id+" .beae-form-target").then(initFilterAction),refreshHtml(c,"."+data.id+" .beae-form-wrp--horizontal"),refreshHtml(c,"."+data.id+" .beae-coll-sort--wrp").then(initFilterAction),refreshHtml(c,"."+data.id+" .beae-coll-paginate--wrp").then(handlePagination),updatePromotion(c,u),loading=!1,checkAction=temp,handleLoading(!1)}),history.pushState({searchParams:s},"",`${window.location.pathname}${s&&"?".concat(s)}`)}function handleLoadMore(){const t=data.el.querySelector("."+data.id+" .beae-coll-paginate--wrp").querySelector(".beae-collection-loadmore");if(t){t.getAttribute("data-url")||t.remove();const r=s=>{if(loading)return;const u=t.getAttribute("data-url");loading=!0;const c=data.el.querySelector("."+data.id+" .beae-x-collection-details");if(!c)return;const d=document.createElement("span");d.setAttribute("class","beae-clear-spinner"),d.innerHTML='<span class="beae-spinner"></span>',t.replaceWith(d);const l=c.getAttribute("section-id"),y=new URL(window.location.origin+u),x=y.search?y.search.replace("?",""):"",m=y.pathname+"?section_id="+l+"&"+x;handleLoading(),fetch(m).then(h=>h.text()).then(h=>{const p=document.createElement("div");p.innerHTML=h,typeof window.handleSwatchForCardForm=="function"&&(window.handleSwatchForCardForm({el:p,mode:{value:"live"}}),window.handleEventFormProductCard(p));const f=p.querySelectorAll("."+data.id+" .beae-collection-details-wrp > form"),b=data.el.querySelector("."+data.id+" .beae-collection-details-wrp");for(let C=0;C<f.length;C++)f[C].style.animationDelay=C*100+"ms",f[C].classList.add("beae-fade-in-up"),b.appendChild(f[C]);refreshHtml(h,".beae-coll-paginate--wrp").then(handlePagination),loading=!1,handleLoading(!1)}).catch(()=>{loading=!1,handleLoading(!1)})};t.addEventListener("click",r)}}function handleLoading(n=!0){const t=data.el.querySelector("."+data.id+" .beae-collection-details-wrp"),o=data.el.querySelector("."+data.id+" .beae-coll-container");if(n){if(t){const r=document.createElement("div");r.classList.add("beae-loading-filter"),o.appendChild(r),t.style.opacity=.5}}else{o.querySelector(".beae-loading-filter")&&o.querySelector(".beae-loading-filter").remove(),t&&(t.style={});const r=o.querySelector(".beae-clear-spinner");r&&r.remove()}}function handleWrpProducts(){var s,u;typeof window.handleSwatchForCardForm=="function"&&(window.handleSwatchForCardForm(data),window.handleEventFormProductCard());const n=data.el.querySelector("."+data.id+" .beae-collection-details-wrp");if(n&&n.innerHTML)return;const t=data.el.querySelector("."+data.id+" .beae-coll-container"),o=(s=data.el.querySelector("."+data.id+" .beae-x-collection-details"))==null?void 0:s.dataset.textNoProduct,r=(u=data.el.querySelector("."+data.id+" .beae-x-collection-details"))==null?void 0:u.dataset.textClear;t&&(checkAction=!0,t.innerHTML=`
      <div class="beae-collection-no-products">
        <span class="beae-typo-p1">${o}</span>
        <button type="button" class="beae-clear-all beae-btn-pr" data-url="${window.location.pathname}">${r}</button>
      </div>`)}function updateAppliedFilter(n){refreshHtml(n,".beae-applied-filters").then(()=>{const t=data.el.querySelector("."+data.id+" .beae-applied-filters");if(!t)return;const o=t.querySelector(".beae-coll-filter-menu-title"),r=t.querySelector(".beae-coll-filter-menu-content");o&&r&&(o.onclick=()=>{t.classList.contains("active")?(t.classList.remove("active"),r.style.height="0px"):(t.classList.add("active"),r.style.height=(r==null?void 0:r.scrollHeight)+"px")}),handleRemoveBadged()})}function refreshHtmlSupper(n,t){return new Promise(o=>{if(!t)return o(t);const r=document.createElement("div");r.innerHTML=n;const s=r.querySelector(".beae-form-wrp--drawer"),u=t.querySelector(".beae-popup__content");u.innerHTML=`<div class="beae-drawer-wrp-content" data-use-accordion="${data.useAccordionOnDesktop}">
          <div class="beae-drawer-header">Filter</div>
          ${s==null?void 0:s.innerHTML.replace(/beae-facets-/g,"beae-facets-mobile-")}
          <div class="beae-drawer-footer">
            <button type="button" class="beae-drawer-btn--clear beae-btn-se">Clear</button> 
            <button type="button" class="beae-drawer-btn--apply beae-btn-pr jk">Apply <span class="beae-button-submit--form-count" data-count="0">(0)</span></button>
          </div>
      </div>`,o(t)})}function refreshHtml(n,t){return new Promise(o=>{const r=data.el.querySelector(t),s=document.createElement("div");s.innerHTML=n;const u=s.querySelector(t);if(u&&r){if(t==".beae-form-target"){if(r.querySelector(".beae-coll-filter-item--dropdown")){const c=r.querySelectorAll(".beae-coll-filter-item--dropdown"),d=u.querySelectorAll(".beae-coll-filter-item--dropdown");c.forEach((l,y)=>{if(l.classList.contains("active")){const x=l.querySelector(".beae-coll-filter-menu-content").scrollHeight;d[y].classList.add("active"),d[y].querySelector(".beae-coll-filter-menu-content").style.height=x+"px"}})}if(r.querySelector(".beae-coll-filter-item--popover")){const c=r.querySelectorAll(".beae-coll-filter-item--popover"),d=u.querySelectorAll(".beae-coll-filter-item--popover");c.forEach((l,y)=>{l.classList.contains("active")&&d[y].classList.add("active")})}}if(t==".beae-coll-container"){r.innerHTML=`
            <div class="beae-collection-details-wrp"></div>
            <div class="beae-coll-paginate--wrp"></div>
          `;const c=u.querySelectorAll(".beae-collection-details-wrp > form"),d=r.querySelector(".beae-collection-details-wrp");for(let l=0;l<c.length;l++)c[l].style.animationDelay=l*100+"ms",c[l].classList.add("beae-fade-in-up"),d.appendChild(c[l])}else r.innerHTML=u.innerHTML}o()})}function updatePromotion(n,t){if(!(/[\?&]page=1($|&)/.test(t)||!/[\?&]page=/.test(t)))return;const r=document.createElement("div");r.innerHTML=n;const s=data.el.querySelector("."+data.id+" .beae-collection-details-wrp");if(!s||!r.querySelector(".beae-promotion > *"))return;const u=r.querySelector(".beae-promotion > *").cloneNode(!0),c=s.children;let d=s.getAttribute("promotion-index");d&&(d=parseInt(d),d>=c.length?s.appendChild(u):s.insertBefore(u,c[d]))}setTimeout(()=>{typeof window.handleSwatchForCardForm=="function"&&window.handleSwatchForCardForm(data)},100),(["builder"].includes(data.mode.value)||window.isPreviewTemplate)&&setTimeout(()=>{typeof window.handleEventFormProductCard=="function"&&window.handleEventFormProductCard()},100) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-jrhyeoi7: ', ex)
      };
    

      try {
        let argid = 'beae-50ytgm25block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-50ytgm25',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-50ytgm25');
        args.el = args.els[0];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-50ytgm25: ', ex)
      };
    

      try {
        let argid = 'beae-upihn150block-developer',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-upihn150',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-upihn150');
        args.el = args.els[0];
        ((data
) => { const timer = setInterval(() => {
    const img = document.querySelector('img[loading="lazy"]');
    if (img) {
        img.setAttribute('loading', 'eager');
        clearInterval(timer);
    }
}, 200); })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-upihn150: ', ex)
      };
    

      try {
        let argid = 'beae-lgjnt7w6section-featured-collection',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-lgjnt7w6',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-lgjnt7w6');
        args.el = args.els[0];
        ((S) => { if(S.mode.value!=="live")return;setTimeout(()=>{typeof(S==null?void 0:S.promotionPosition)=="number"&&B(S==null?void 0:S.promotionPosition)},100);function B(k){const $=S.el.querySelector(".beae-collection-details-wrp");if(!$)return;const w=S.el.querySelector(".beae-promotion > *"),v=$.children;k>=v.length?$.appendChild(w):$.insertBefore(w,v[k]);const M=S.el.querySelector(".beae-promotion");M&&M.remove()} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-lgjnt7w6: ', ex)
      };
    

      try {
        let argid = 'beae-puta518nblock-image',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-puta518n',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-puta518n');
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
        console.error('BEAE JS ERROR ID beae-puta518n: ', ex)
      };
    

      try {
        let argid = 'beae-ps6zqldgblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-ps6zqldg',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-ps6zqldg');
        args.el = args.els[0];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-ps6zqldg: ', ex)
      };
    

      try {
        let argid = 'beae-xqwdhginblock-add-to-cart',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-xqwdhgin',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-xqwdhgin');
        args.el = args.els[0];
        ((_) => { if(_.mode.value=="builder"){if(!_.els)return;for(let S=0;S<_.els.length;S++)if(S==_.loopIndex){const B=_.els[S].closest("form.beae-product-form-next");if(!B)return;const k=B.querySelector(".beae-add-to-cart--submit"),$=B.getAttribute("data-product_id"),w=B.querySelector('script[data-id="Product-json-'+$+'"]')||B.querySelector("#Product-json-"+$),M=JSON.parse(w!=null&&w.innerHTML?w==null?void 0:w.innerHTML:"{}").variants||[];let V=B.getAttribute("data-variant-id"),L=M[0];V&&(L=M.find(N=>N.id==V));const T=k.querySelector(".beae-add-to-cart-text-content");L!=null&&L.available?T&&(M.length>1?T.innerHTML=k.getAttribute("data-choose-options-text"):T.innerHTML=k.getAttribute("data-add-to-cart-text")):T&&(T.innerHTML=k.getAttribute("data-sold-out-text"))}} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-xqwdhgin: ', ex)
      };
    

      try {
        let argid = 'beae-10s6zvf8block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-10s6zvf8',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-10s6zvf8');
        args.el = args.els[0];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-10s6zvf8: ', ex)
      };
    }; if (window.BEAEBASE) {js_TVRK6HU6()} else {window.BEAEPAGEJS.push(js_TVRK6HU6)} })(); 