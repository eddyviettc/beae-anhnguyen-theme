(() => { if (window.BEAEPAGEJS === undefined) {
            window.BEAEPAGEJS = [];
          }

          if(window.beaePageSetting == undefined) {
            window.beaePageSetting = {};
          }
          
          window.beaePageSetting.pageId = "undefined";
              window.beaePageSetting.pageTitle = "undefined"; 
              window.beaePageSetting.pageType = "undefined";

          let js_R0C9U0RB = () => { let BeaeUseHooks = {};
      try {
        let argid = 'beae-5x462sixsection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-5x462six',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-5x462six');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-5x462six: ', ex)
      };
    

      try {
        let argid = 'beae-jf3oalzeblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-jf3oalze',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-jf3oalze');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-jf3oalze: ', ex)
      };
    

      try {
        let argid = 'beae-k3fte5f9section-slide-show',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-k3fte5f9',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-k3fte5f9');
        args.el = args.els[0];
        ((h) => { window.BeaeSlider&&!h.noRunJs&&window.BeaeSlider(h) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-k3fte5f9: ', ex)
      };
    

      try {
        let argid = 'beae-r0iq19rgbutton-jsloop-0',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-r0iq19rg',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-r0iq19rg');
        args.el = args.els[0];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(n){extOptions={},console.error(n)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let n=document.querySelector(selector+","+selector.replace("#","."));if(n)return n.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let t=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(t,{id:data.id,...extOptions}),e.preventDefault();return}const n=window.createLoading(e.currentTarget);return window.BeaePopupLibrary.lightbox({id:data.id,url:((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(t=>{t.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(t),n.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let n=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(n=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(n,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-r0iq19rg: ', ex)
      };
    

      try {
        let argid = 'beae-r0iq19rgbutton-jsloop-1',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-r0iq19rg',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-r0iq19rg');
        args.el = args.els[1];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(n){extOptions={},console.error(n)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let n=document.querySelector(selector+","+selector.replace("#","."));if(n)return n.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let t=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(t,{id:data.id,...extOptions}),e.preventDefault();return}const n=window.createLoading(e.currentTarget);return window.BeaePopupLibrary.lightbox({id:data.id,url:((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(t=>{t.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(t),n.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let n=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(n=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(n,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-r0iq19rg: ', ex)
      };
    

      try {
        let argid = 'beae-r0iq19rgbutton-jsloop-2',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-r0iq19rg',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-r0iq19rg');
        args.el = args.els[2];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(n){extOptions={},console.error(n)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let n=document.querySelector(selector+","+selector.replace("#","."));if(n)return n.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let t=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(t,{id:data.id,...extOptions}),e.preventDefault();return}const n=window.createLoading(e.currentTarget);return window.BeaePopupLibrary.lightbox({id:data.id,url:((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(t=>{t.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(t),n.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let n=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(n=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(n,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-r0iq19rg: ', ex)
      };
    

      try {
        let argid = 'beae-r0iq19rgbutton-jsloop-3',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-r0iq19rg',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-r0iq19rg');
        args.el = args.els[3];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(n){extOptions={},console.error(n)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let n=document.querySelector(selector+","+selector.replace("#","."));if(n)return n.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let t=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(t,{id:data.id,...extOptions}),e.preventDefault();return}const n=window.createLoading(e.currentTarget);return window.BeaePopupLibrary.lightbox({id:data.id,url:((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(t=>{t.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(t),n.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let n=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(n=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(n,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-r0iq19rg: ', ex)
      };
    

      try {
        let argid = 'beae-r0iq19rgbutton-jsloop-4',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-r0iq19rg',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-r0iq19rg');
        args.el = args.els[4];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(n){extOptions={},console.error(n)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let n=document.querySelector(selector+","+selector.replace("#","."));if(n)return n.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let t=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(t,{id:data.id,...extOptions}),e.preventDefault();return}const n=window.createLoading(e.currentTarget);return window.BeaePopupLibrary.lightbox({id:data.id,url:((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(t=>{t.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(t),n.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let n=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(n=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(n,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-r0iq19rg: ', ex)
      };
    

      try {
        let argid = 'beae-fp77711ssection-slide-show',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-fp77711s',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-fp77711s');
        args.el = args.els[0];
        ((h) => { window.BeaeSlider&&!h.noRunJs&&window.BeaeSlider(h) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-fp77711s: ', ex)
      };
    

      try {
        let argid = 'beae-5rqru718button-jsloop-0',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-5rqru718',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-5rqru718');
        args.el = args.els[0];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(n){extOptions={},console.error(n)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let n=document.querySelector(selector+","+selector.replace("#","."));if(n)return n.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let t=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(t,{id:data.id,...extOptions}),e.preventDefault();return}const n=window.createLoading(e.currentTarget);return window.BeaePopupLibrary.lightbox({id:data.id,url:((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(t=>{t.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(t),n.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let n=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(n=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(n,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-5rqru718: ', ex)
      };
    

      try {
        let argid = 'beae-5rqru718button-jsloop-1',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-5rqru718',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-5rqru718');
        args.el = args.els[1];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(n){extOptions={},console.error(n)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let n=document.querySelector(selector+","+selector.replace("#","."));if(n)return n.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let t=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(t,{id:data.id,...extOptions}),e.preventDefault();return}const n=window.createLoading(e.currentTarget);return window.BeaePopupLibrary.lightbox({id:data.id,url:((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(t=>{t.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(t),n.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let n=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(n=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(n,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-5rqru718: ', ex)
      };
    

      try {
        let argid = 'beae-5rqru718button-jsloop-2',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-5rqru718',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-5rqru718');
        args.el = args.els[2];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(n){extOptions={},console.error(n)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let n=document.querySelector(selector+","+selector.replace("#","."));if(n)return n.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let t=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(t,{id:data.id,...extOptions}),e.preventDefault();return}const n=window.createLoading(e.currentTarget);return window.BeaePopupLibrary.lightbox({id:data.id,url:((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(t=>{t.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(t),n.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let n=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(n=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(n,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-5rqru718: ', ex)
      };
    

      try {
        let argid = 'beae-5rqru718button-jsloop-3',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-5rqru718',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-5rqru718');
        args.el = args.els[3];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(n){extOptions={},console.error(n)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let n=document.querySelector(selector+","+selector.replace("#","."));if(n)return n.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let t=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(t,{id:data.id,...extOptions}),e.preventDefault();return}const n=window.createLoading(e.currentTarget);return window.BeaePopupLibrary.lightbox({id:data.id,url:((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(t=>{t.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(t),n.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let n=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(n=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(n,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-5rqru718: ', ex)
      };
    

      try {
        let argid = 'beae-5rqru718button-jsloop-4',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-5rqru718',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-5rqru718');
        args.el = args.els[4];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(n){extOptions={},console.error(n)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let n=document.querySelector(selector+","+selector.replace("#","."));if(n)return n.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let t=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(t,{id:data.id,...extOptions}),e.preventDefault();return}const n=window.createLoading(e.currentTarget);return window.BeaePopupLibrary.lightbox({id:data.id,url:((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(t=>{t.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(t),n.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let n=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(n=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(n,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-5rqru718: ', ex)
      };
    

      try {
        let argid = 'beae-15kfpxcysection-slide-show',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-15kfpxcy',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-15kfpxcy');
        args.el = args.els[0];
        ((h) => { window.BeaeSlider&&!h.noRunJs&&window.BeaeSlider(h) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-15kfpxcy: ', ex)
      };
    

      try {
        let argid = 'beae-akk8c3agbutton-jsloop-0',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-akk8c3ag',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-akk8c3ag');
        args.el = args.els[0];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(n){extOptions={},console.error(n)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let n=document.querySelector(selector+","+selector.replace("#","."));if(n)return n.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let t=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(t,{id:data.id,...extOptions}),e.preventDefault();return}const n=window.createLoading(e.currentTarget);return window.BeaePopupLibrary.lightbox({id:data.id,url:((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(t=>{t.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(t),n.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let n=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(n=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(n,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-akk8c3ag: ', ex)
      };
    

      try {
        let argid = 'beae-akk8c3agbutton-jsloop-1',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-akk8c3ag',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-akk8c3ag');
        args.el = args.els[1];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(n){extOptions={},console.error(n)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let n=document.querySelector(selector+","+selector.replace("#","."));if(n)return n.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let t=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(t,{id:data.id,...extOptions}),e.preventDefault();return}const n=window.createLoading(e.currentTarget);return window.BeaePopupLibrary.lightbox({id:data.id,url:((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(t=>{t.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(t),n.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let n=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(n=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(n,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-akk8c3ag: ', ex)
      };
    

      try {
        let argid = 'beae-akk8c3agbutton-jsloop-2',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-akk8c3ag',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-akk8c3ag');
        args.el = args.els[2];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(n){extOptions={},console.error(n)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let n=document.querySelector(selector+","+selector.replace("#","."));if(n)return n.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let t=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(t,{id:data.id,...extOptions}),e.preventDefault();return}const n=window.createLoading(e.currentTarget);return window.BeaePopupLibrary.lightbox({id:data.id,url:((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(t=>{t.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(t),n.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let n=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(n=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(n,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-akk8c3ag: ', ex)
      };
    

      try {
        let argid = 'beae-akk8c3agbutton-jsloop-3',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-akk8c3ag',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-akk8c3ag');
        args.el = args.els[3];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(n){extOptions={},console.error(n)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let n=document.querySelector(selector+","+selector.replace("#","."));if(n)return n.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let t=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(t,{id:data.id,...extOptions}),e.preventDefault();return}const n=window.createLoading(e.currentTarget);return window.BeaePopupLibrary.lightbox({id:data.id,url:((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(t=>{t.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(t),n.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let n=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(n=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(n,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-akk8c3ag: ', ex)
      };
    

      try {
        let argid = 'beae-akk8c3agbutton-jsloop-4',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-akk8c3ag',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-akk8c3ag');
        args.el = args.els[4];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(n){extOptions={},console.error(n)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let n=document.querySelector(selector+","+selector.replace("#","."));if(n)return n.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let t=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(t,{id:data.id,...extOptions}),e.preventDefault();return}const n=window.createLoading(e.currentTarget);return window.BeaePopupLibrary.lightbox({id:data.id,url:((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(t=>{t.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(t),n.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let n=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(n=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(n,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-akk8c3ag: ', ex)
      };
    

      try {
        let argid = 'beae-rvtmhq01section-slide-show',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-rvtmhq01',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-rvtmhq01');
        args.el = args.els[0];
        ((h) => { window.BeaeSlider&&!h.noRunJs&&window.BeaeSlider(h) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-rvtmhq01: ', ex)
      };
    

      try {
        let argid = 'beae-1v1vxcgebutton-jsloop-0',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-1v1vxcge',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-1v1vxcge');
        args.el = args.els[0];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(n){extOptions={},console.error(n)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let n=document.querySelector(selector+","+selector.replace("#","."));if(n)return n.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let t=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(t,{id:data.id,...extOptions}),e.preventDefault();return}const n=window.createLoading(e.currentTarget);return window.BeaePopupLibrary.lightbox({id:data.id,url:((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(t=>{t.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(t),n.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let n=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(n=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(n,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-1v1vxcge: ', ex)
      };
    

      try {
        let argid = 'beae-1v1vxcgebutton-jsloop-1',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-1v1vxcge',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-1v1vxcge');
        args.el = args.els[1];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(n){extOptions={},console.error(n)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let n=document.querySelector(selector+","+selector.replace("#","."));if(n)return n.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let t=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(t,{id:data.id,...extOptions}),e.preventDefault();return}const n=window.createLoading(e.currentTarget);return window.BeaePopupLibrary.lightbox({id:data.id,url:((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(t=>{t.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(t),n.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let n=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(n=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(n,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-1v1vxcge: ', ex)
      };
    

      try {
        let argid = 'beae-1v1vxcgebutton-jsloop-2',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-1v1vxcge',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-1v1vxcge');
        args.el = args.els[2];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(n){extOptions={},console.error(n)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let n=document.querySelector(selector+","+selector.replace("#","."));if(n)return n.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let t=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(t,{id:data.id,...extOptions}),e.preventDefault();return}const n=window.createLoading(e.currentTarget);return window.BeaePopupLibrary.lightbox({id:data.id,url:((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(t=>{t.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(t),n.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let n=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(n=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(n,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-1v1vxcge: ', ex)
      };
    

      try {
        let argid = 'beae-8wocpciasection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-8wocpcia',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-8wocpcia');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-8wocpcia: ', ex)
      };
    

      try {
        let argid = 'beae-th93am2pblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-th93am2p',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-th93am2p');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-th93am2p: ', ex)
      };
    

      try {
        let argid = 'beae-artcolmdsection-slide-show',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-artcolmd',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-artcolmd');
        args.el = args.els[0];
        ((h) => { window.BeaeSlider&&!h.noRunJs&&window.BeaeSlider(h) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-artcolmd: ', ex)
      };
    

      try {
        let argid = 'beae-racf5n6cbutton-jsloop-0',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-racf5n6c',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-racf5n6c');
        args.el = args.els[0];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(n){extOptions={},console.error(n)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let n=document.querySelector(selector+","+selector.replace("#","."));if(n)return n.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let t=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(t,{id:data.id,...extOptions}),e.preventDefault();return}const n=window.createLoading(e.currentTarget);return window.BeaePopupLibrary.lightbox({id:data.id,url:((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(t=>{t.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(t),n.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let n=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(n=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(n,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-racf5n6c: ', ex)
      };
    

      try {
        let argid = 'beae-racf5n6cbutton-jsloop-1',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-racf5n6c',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-racf5n6c');
        args.el = args.els[1];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(n){extOptions={},console.error(n)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let n=document.querySelector(selector+","+selector.replace("#","."));if(n)return n.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let t=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(t,{id:data.id,...extOptions}),e.preventDefault();return}const n=window.createLoading(e.currentTarget);return window.BeaePopupLibrary.lightbox({id:data.id,url:((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(t=>{t.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(t),n.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let n=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(n=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(n,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-racf5n6c: ', ex)
      };
    

      try {
        let argid = 'beae-racf5n6cbutton-jsloop-2',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-racf5n6c',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-racf5n6c');
        args.el = args.els[2];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(n){extOptions={},console.error(n)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let n=document.querySelector(selector+","+selector.replace("#","."));if(n)return n.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let t=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(t,{id:data.id,...extOptions}),e.preventDefault();return}const n=window.createLoading(e.currentTarget);return window.BeaePopupLibrary.lightbox({id:data.id,url:((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(t=>{t.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(t),n.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let n=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(n=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(n,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-racf5n6c: ', ex)
      };
    

      try {
        let argid = 'beae-racf5n6cbutton-jsloop-3',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-racf5n6c',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-racf5n6c');
        args.el = args.els[3];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(n){extOptions={},console.error(n)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let n=document.querySelector(selector+","+selector.replace("#","."));if(n)return n.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let t=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(t,{id:data.id,...extOptions}),e.preventDefault();return}const n=window.createLoading(e.currentTarget);return window.BeaePopupLibrary.lightbox({id:data.id,url:((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(t=>{t.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(t),n.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let n=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(n=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(n,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-racf5n6c: ', ex)
      };
    

      try {
        let argid = 'beae-racf5n6cbutton-jsloop-4',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-racf5n6c',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-racf5n6c');
        args.el = args.els[4];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(n){extOptions={},console.error(n)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let n=document.querySelector(selector+","+selector.replace("#","."));if(n)return n.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let t=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(t,{id:data.id,...extOptions}),e.preventDefault();return}const n=window.createLoading(e.currentTarget);return window.BeaePopupLibrary.lightbox({id:data.id,url:((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(t=>{t.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(t),n.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let n=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(n=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(n,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-racf5n6c: ', ex)
      };
    

      try {
        let argid = 'beae-racf5n6cbutton-jsloop-5',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-racf5n6c',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-racf5n6c');
        args.el = args.els[5];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(n){extOptions={},console.error(n)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let n=document.querySelector(selector+","+selector.replace("#","."));if(n)return n.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let t=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(t,{id:data.id,...extOptions}),e.preventDefault();return}const n=window.createLoading(e.currentTarget);return window.BeaePopupLibrary.lightbox({id:data.id,url:((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(t=>{t.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(t),n.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let n=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(n=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(n,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-racf5n6c: ', ex)
      };
    

      try {
        let argid = 'beae-gfe2jkzmsection-slide-show',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-gfe2jkzm',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-gfe2jkzm');
        args.el = args.els[0];
        ((h) => { window.BeaeSlider&&!h.noRunJs&&window.BeaeSlider(h) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-gfe2jkzm: ', ex)
      };
    

      try {
        let argid = 'beae-azsoa5ixbutton-jsloop-0',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-azsoa5ix',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-azsoa5ix');
        args.el = args.els[0];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(n){extOptions={},console.error(n)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let n=document.querySelector(selector+","+selector.replace("#","."));if(n)return n.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let t=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(t,{id:data.id,...extOptions}),e.preventDefault();return}const n=window.createLoading(e.currentTarget);return window.BeaePopupLibrary.lightbox({id:data.id,url:((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(t=>{t.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(t),n.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let n=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(n=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(n,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-azsoa5ix: ', ex)
      };
    

      try {
        let argid = 'beae-azsoa5ixbutton-jsloop-1',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-azsoa5ix',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-azsoa5ix');
        args.el = args.els[1];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(n){extOptions={},console.error(n)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let n=document.querySelector(selector+","+selector.replace("#","."));if(n)return n.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let t=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(t,{id:data.id,...extOptions}),e.preventDefault();return}const n=window.createLoading(e.currentTarget);return window.BeaePopupLibrary.lightbox({id:data.id,url:((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(t=>{t.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(t),n.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let n=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(n=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(n,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-azsoa5ix: ', ex)
      };
    

      try {
        let argid = 'beae-azsoa5ixbutton-jsloop-2',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-azsoa5ix',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-azsoa5ix');
        args.el = args.els[2];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(n){extOptions={},console.error(n)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let n=document.querySelector(selector+","+selector.replace("#","."));if(n)return n.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let t=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(t,{id:data.id,...extOptions}),e.preventDefault();return}const n=window.createLoading(e.currentTarget);return window.BeaePopupLibrary.lightbox({id:data.id,url:((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(t=>{t.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(t),n.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let n=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(n=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(n,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-azsoa5ix: ', ex)
      };
    

      try {
        let argid = 'beae-azsoa5ixbutton-jsloop-3',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-azsoa5ix',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-azsoa5ix');
        args.el = args.els[3];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(n){extOptions={},console.error(n)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let n=document.querySelector(selector+","+selector.replace("#","."));if(n)return n.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let t=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(t,{id:data.id,...extOptions}),e.preventDefault();return}const n=window.createLoading(e.currentTarget);return window.BeaePopupLibrary.lightbox({id:data.id,url:((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(t=>{t.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(t),n.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let n=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(n=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(n,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-azsoa5ix: ', ex)
      };
    

      try {
        let argid = 'beae-azsoa5ixbutton-jsloop-4',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-azsoa5ix',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-azsoa5ix');
        args.el = args.els[4];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(n){extOptions={},console.error(n)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let n=document.querySelector(selector+","+selector.replace("#","."));if(n)return n.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let t=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(t,{id:data.id,...extOptions}),e.preventDefault();return}const n=window.createLoading(e.currentTarget);return window.BeaePopupLibrary.lightbox({id:data.id,url:((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(t=>{t.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(t),n.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let n=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(n=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(n,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-azsoa5ix: ', ex)
      };
    

      try {
        let argid = 'beae-azsoa5ixbutton-jsloop-5',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-azsoa5ix',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-azsoa5ix');
        args.el = args.els[5];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(n){extOptions={},console.error(n)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let n=document.querySelector(selector+","+selector.replace("#","."));if(n)return n.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let t=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(t,{id:data.id,...extOptions}),e.preventDefault();return}const n=window.createLoading(e.currentTarget);return window.BeaePopupLibrary.lightbox({id:data.id,url:((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(t=>{t.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(t),n.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let n=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(n=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(n,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-azsoa5ix: ', ex)
      };
    

      try {
        let argid = 'beae-7hewrvnisection-slide-show',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-7hewrvni',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-7hewrvni');
        args.el = args.els[0];
        ((h) => { window.BeaeSlider&&!h.noRunJs&&window.BeaeSlider(h) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-7hewrvni: ', ex)
      };
    

      try {
        let argid = 'beae-axri1agtbutton-jsloop-0',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-axri1agt',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-axri1agt');
        args.el = args.els[0];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(n){extOptions={},console.error(n)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let n=document.querySelector(selector+","+selector.replace("#","."));if(n)return n.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let t=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(t,{id:data.id,...extOptions}),e.preventDefault();return}const n=window.createLoading(e.currentTarget);return window.BeaePopupLibrary.lightbox({id:data.id,url:((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(t=>{t.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(t),n.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let n=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(n=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(n,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-axri1agt: ', ex)
      };
    

      try {
        let argid = 'beae-axri1agtbutton-jsloop-1',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-axri1agt',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-axri1agt');
        args.el = args.els[1];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(n){extOptions={},console.error(n)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let n=document.querySelector(selector+","+selector.replace("#","."));if(n)return n.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let t=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(t,{id:data.id,...extOptions}),e.preventDefault();return}const n=window.createLoading(e.currentTarget);return window.BeaePopupLibrary.lightbox({id:data.id,url:((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(t=>{t.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(t),n.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let n=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(n=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(n,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-axri1agt: ', ex)
      };
    

      try {
        let argid = 'beae-axri1agtbutton-jsloop-2',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-axri1agt',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-axri1agt');
        args.el = args.els[2];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(n){extOptions={},console.error(n)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let n=document.querySelector(selector+","+selector.replace("#","."));if(n)return n.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let t=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(t,{id:data.id,...extOptions}),e.preventDefault();return}const n=window.createLoading(e.currentTarget);return window.BeaePopupLibrary.lightbox({id:data.id,url:((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(t=>{t.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(t),n.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let n=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(n=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(n,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-axri1agt: ', ex)
      };
    

      try {
        let argid = 'beae-axri1agtbutton-jsloop-3',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-axri1agt',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-axri1agt');
        args.el = args.els[3];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(n){extOptions={},console.error(n)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let n=document.querySelector(selector+","+selector.replace("#","."));if(n)return n.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let t=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(t,{id:data.id,...extOptions}),e.preventDefault();return}const n=window.createLoading(e.currentTarget);return window.BeaePopupLibrary.lightbox({id:data.id,url:((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(t=>{t.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(t),n.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let n=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(n=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(n,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-axri1agt: ', ex)
      };
    

      try {
        let argid = 'beae-axri1agtbutton-jsloop-4',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-axri1agt',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-axri1agt');
        args.el = args.els[4];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(n){extOptions={},console.error(n)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let n=document.querySelector(selector+","+selector.replace("#","."));if(n)return n.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let t=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(t,{id:data.id,...extOptions}),e.preventDefault();return}const n=window.createLoading(e.currentTarget);return window.BeaePopupLibrary.lightbox({id:data.id,url:((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(t=>{t.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(t),n.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let n=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(n=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(n,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-axri1agt: ', ex)
      };
    

      try {
        let argid = 'beae-axri1agtbutton-jsloop-5',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-axri1agt',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-axri1agt');
        args.el = args.els[5];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(n){extOptions={},console.error(n)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let n=document.querySelector(selector+","+selector.replace("#","."));if(n)return n.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let t=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(t,{id:data.id,...extOptions}),e.preventDefault();return}const n=window.createLoading(e.currentTarget);return window.BeaePopupLibrary.lightbox({id:data.id,url:((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(t=>{t.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(t),n.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let n=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(n=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(n,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-axri1agt: ', ex)
      };
    

      try {
        let argid = 'beae-zwcvbpwrsection-slide-show',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-zwcvbpwr',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-zwcvbpwr');
        args.el = args.els[0];
        ((h) => { window.BeaeSlider&&!h.noRunJs&&window.BeaeSlider(h) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-zwcvbpwr: ', ex)
      };
    

      try {
        let argid = 'beae-c6thwn8fsection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-c6thwn8f',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-c6thwn8f');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-c6thwn8f: ', ex)
      };
    

      try {
        let argid = 'beae-nxphsb2pblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-nxphsb2p',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-nxphsb2p');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-nxphsb2p: ', ex)
      };
    

      try {
        let argid = 'beae-vgnmlxmublock-tabs',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-vgnmlxmu',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-vgnmlxmu');
        args.el = args.els[0];
        ((data) => { const prefixClass=`div[data-id=${data.id}] > .beae-tab-wrp`;let tabs=data.el.querySelectorAll(`${prefixClass} > .beae-tab-items > .beae-tab-item`),contents=data.el.querySelectorAll(`${prefixClass} > .beae-tab-contents > .beae-tab-content`),rightside=data.el.querySelectorAll(`${prefixClass} .beae-rightside`),accordions=data.el.querySelectorAll(`${prefixClass} > .beae-tab-contents > .beae-tab-content > .beae-accordion-title--mobile`),activeTab=window.outerWidth&&window.outerWidth<=768?data.activeTabMobile:data.activeTab,toggleImg=data.toggleImg,layout=data.layout,accordionMode=data.accordionMode;function resetActive(){tabs.forEach(f=>f.classList.remove("active")),contents.forEach(f=>f.classList.remove("active")),accordions.forEach(f=>f.classList.remove("active")),toggleImg&&rightside.forEach(f=>f.classList.remove("active")),contents.forEach(f=>{const b=f.querySelector(".beae-accordion-body").style;layout=="accordions"?b.maxHeight="0px":(b.transform="scaleY(0)",b.opacity="0")})}function setActive(f){tabs[f].classList.add("active"),contents[f].classList.add("active"),accordions[f].classList.add("active"),toggleImg&&rightside[f].classList.add("active");const b=contents[f].querySelector(".beae-accordion-body");if(b){const k=b.style;layout=="accordions"?k.maxHeight=data.mode.value=="builder"?"":b.scrollHeight+"px":(k.transform="scaleY(1)",k.transformOrigin="top center",k.opacity="1")}}function removeActive(f){tabs[f].classList.remove("active"),contents[f].classList.remove("active"),accordions[f].classList.remove("active"),toggleImg&&rightside[f].classList.remove("active");const b=contents[f].querySelector(".beae-accordion-body").style;layout=="accordions"?b.maxHeight="0px":(b.transform="scaleY(0)",b.opacity="0")}resetActive(),activeTab!=="none"&&accordionMode!="popup"&&setActive(activeTab),tabs.forEach((f,b)=>{f.addEventListener("click",()=>{resetActive(),setActive(b)})});const section=data.el.closest("section.beae-section");let sectionId="";section&&(sectionId=section.getAttribute("data-sectionid"));let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(f){extOptions={},console.error(f)}if(accordions.forEach((f,b)=>{f.addEventListener("click",()=>{if(accordionMode=="popup"&&data.mode.value!="builder"){const k=f.closest(".beae-tab-content");if(k){let g=document.createElement("div");g.innerHTML=`
                            <h3 class="beae-popup__content-title">${f.querySelector("span").innerHTML}</h3>
                            <div class="beae-popup__content-body ${data.id}">${k.querySelector(".beae-accordion-body").innerHTML}</div>
                            `,window.BeaePopupLibrary.createPopup(g,{layout:extOptions.layout?extOptions.layout:"right",width:extOptions.width?extOptions.width:"400px",layoutMobile:extOptions.layoutMobile?extOptions.layoutMobile:"bottom",sectionId})}}else accordionMode=="single"?(resetActive(),setActive(b)):f.classList.contains("active")?removeActive(b):setActive(b)})}),layout=="tabs"){const f=data.el.querySelector(".beae-tab-contents"),b=f.querySelectorAll(".beae-tab-content-wrp");let k=0,g=-1;b.forEach((S,B)=>{const C=S.offsetHeight;C>k&&(g=B,k=C)}),new ResizeObserver(()=>{f.style.setProperty("--beae-tabs-max-height",`${b[g].offsetHeight}px`)}).observe(b[g])} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-vgnmlxmu: ', ex)
      };
    

      try {
        let argid = 'beae-xzqa65xwblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-xzqa65xw',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-xzqa65xw');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-xzqa65xw: ', ex)
      };
    

      try {
        let argid = 'beae-19lmyqr4block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-19lmyqr4',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-19lmyqr4');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-19lmyqr4: ', ex)
      };
    

      try {
        let argid = 'beae-bg079s98block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-bg079s98',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-bg079s98');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-bg079s98: ', ex)
      };
    

      try {
        let argid = 'beae-vf0imdteblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-vf0imdte',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-vf0imdte');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-vf0imdte: ', ex)
      };
    

      try {
        let argid = 'beae-sj4p1qstblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-sj4p1qst',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-sj4p1qst');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-sj4p1qst: ', ex)
      };
    

      try {
        let argid = 'beae-zchm6aqfblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-zchm6aqf',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-zchm6aqf');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-zchm6aqf: ', ex)
      };
    

      try {
        let argid = 'beae-ai2u5yeoblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-ai2u5yeo',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-ai2u5yeo');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-ai2u5yeo: ', ex)
      };
    

      try {
        let argid = 'beae-9926h8yzblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-9926h8yz',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-9926h8yz');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-9926h8yz: ', ex)
      };
    

      try {
        let argid = 'beae-j9wov2ydblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-j9wov2yd',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-j9wov2yd');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-j9wov2yd: ', ex)
      };
    

      try {
        let argid = 'beae-rc8ae8ljblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-rc8ae8lj',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-rc8ae8lj');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-rc8ae8lj: ', ex)
      };
    

      try {
        let argid = 'beae-v9jl2cexblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-v9jl2cex',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-v9jl2cex');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-v9jl2cex: ', ex)
      };
    

      try {
        let argid = 'beae-bvr55x1fsection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-bvr55x1f',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-bvr55x1f');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-bvr55x1f: ', ex)
      };
    

      try {
        let argid = 'beae-60jt0wjdblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-60jt0wjd',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-60jt0wjd');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-60jt0wjd: ', ex)
      };
    

      try {
        let argid = 'beae-fadbgyciblock-tabs',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-fadbgyci',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-fadbgyci');
        args.el = args.els[0];
        ((data) => { const prefixClass=`div[data-id=${data.id}] > .beae-tab-wrp`;let tabs=data.el.querySelectorAll(`${prefixClass} > .beae-tab-items > .beae-tab-item`),contents=data.el.querySelectorAll(`${prefixClass} > .beae-tab-contents > .beae-tab-content`),rightside=data.el.querySelectorAll(`${prefixClass} .beae-rightside`),accordions=data.el.querySelectorAll(`${prefixClass} > .beae-tab-contents > .beae-tab-content > .beae-accordion-title--mobile`),activeTab=window.outerWidth&&window.outerWidth<=768?data.activeTabMobile:data.activeTab,toggleImg=data.toggleImg,layout=data.layout,accordionMode=data.accordionMode;function resetActive(){tabs.forEach(f=>f.classList.remove("active")),contents.forEach(f=>f.classList.remove("active")),accordions.forEach(f=>f.classList.remove("active")),toggleImg&&rightside.forEach(f=>f.classList.remove("active")),contents.forEach(f=>{const b=f.querySelector(".beae-accordion-body").style;layout=="accordions"?b.maxHeight="0px":(b.transform="scaleY(0)",b.opacity="0")})}function setActive(f){tabs[f].classList.add("active"),contents[f].classList.add("active"),accordions[f].classList.add("active"),toggleImg&&rightside[f].classList.add("active");const b=contents[f].querySelector(".beae-accordion-body");if(b){const k=b.style;layout=="accordions"?k.maxHeight=data.mode.value=="builder"?"":b.scrollHeight+"px":(k.transform="scaleY(1)",k.transformOrigin="top center",k.opacity="1")}}function removeActive(f){tabs[f].classList.remove("active"),contents[f].classList.remove("active"),accordions[f].classList.remove("active"),toggleImg&&rightside[f].classList.remove("active");const b=contents[f].querySelector(".beae-accordion-body").style;layout=="accordions"?b.maxHeight="0px":(b.transform="scaleY(0)",b.opacity="0")}resetActive(),activeTab!=="none"&&accordionMode!="popup"&&setActive(activeTab),tabs.forEach((f,b)=>{f.addEventListener("click",()=>{resetActive(),setActive(b)})});const section=data.el.closest("section.beae-section");let sectionId="";section&&(sectionId=section.getAttribute("data-sectionid"));let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(f){extOptions={},console.error(f)}if(accordions.forEach((f,b)=>{f.addEventListener("click",()=>{if(accordionMode=="popup"&&data.mode.value!="builder"){const k=f.closest(".beae-tab-content");if(k){let g=document.createElement("div");g.innerHTML=`
                            <h3 class="beae-popup__content-title">${f.querySelector("span").innerHTML}</h3>
                            <div class="beae-popup__content-body ${data.id}">${k.querySelector(".beae-accordion-body").innerHTML}</div>
                            `,window.BeaePopupLibrary.createPopup(g,{layout:extOptions.layout?extOptions.layout:"right",width:extOptions.width?extOptions.width:"400px",layoutMobile:extOptions.layoutMobile?extOptions.layoutMobile:"bottom",sectionId})}}else accordionMode=="single"?(resetActive(),setActive(b)):f.classList.contains("active")?removeActive(b):setActive(b)})}),layout=="tabs"){const f=data.el.querySelector(".beae-tab-contents"),b=f.querySelectorAll(".beae-tab-content-wrp");let k=0,g=-1;b.forEach((S,B)=>{const C=S.offsetHeight;C>k&&(g=B,k=C)}),new ResizeObserver(()=>{f.style.setProperty("--beae-tabs-max-height",`${b[g].offsetHeight}px`)}).observe(b[g])} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-fadbgyci: ', ex)
      };
    

      try {
        let argid = 'beae-8oq1ywzmblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-8oq1ywzm',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-8oq1ywzm');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-8oq1ywzm: ', ex)
      };
    

      try {
        let argid = 'beae-md86cgheblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-md86cghe',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-md86cghe');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-md86cghe: ', ex)
      };
    

      try {
        let argid = 'beae-30qqigc7block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-30qqigc7',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-30qqigc7');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-30qqigc7: ', ex)
      };
    

      try {
        let argid = 'beae-ne7fqb48block-tabs',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-ne7fqb48',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-ne7fqb48');
        args.el = args.els[0];
        ((data) => { const prefixClass=`div[data-id=${data.id}] > .beae-tab-wrp`;let tabs=data.el.querySelectorAll(`${prefixClass} > .beae-tab-items > .beae-tab-item`),contents=data.el.querySelectorAll(`${prefixClass} > .beae-tab-contents > .beae-tab-content`),rightside=data.el.querySelectorAll(`${prefixClass} .beae-rightside`),accordions=data.el.querySelectorAll(`${prefixClass} > .beae-tab-contents > .beae-tab-content > .beae-accordion-title--mobile`),activeTab=window.outerWidth&&window.outerWidth<=768?data.activeTabMobile:data.activeTab,toggleImg=data.toggleImg,layout=data.layout,accordionMode=data.accordionMode;function resetActive(){tabs.forEach(f=>f.classList.remove("active")),contents.forEach(f=>f.classList.remove("active")),accordions.forEach(f=>f.classList.remove("active")),toggleImg&&rightside.forEach(f=>f.classList.remove("active")),contents.forEach(f=>{const b=f.querySelector(".beae-accordion-body").style;layout=="accordions"?b.maxHeight="0px":(b.transform="scaleY(0)",b.opacity="0")})}function setActive(f){tabs[f].classList.add("active"),contents[f].classList.add("active"),accordions[f].classList.add("active"),toggleImg&&rightside[f].classList.add("active");const b=contents[f].querySelector(".beae-accordion-body");if(b){const k=b.style;layout=="accordions"?k.maxHeight=data.mode.value=="builder"?"":b.scrollHeight+"px":(k.transform="scaleY(1)",k.transformOrigin="top center",k.opacity="1")}}function removeActive(f){tabs[f].classList.remove("active"),contents[f].classList.remove("active"),accordions[f].classList.remove("active"),toggleImg&&rightside[f].classList.remove("active");const b=contents[f].querySelector(".beae-accordion-body").style;layout=="accordions"?b.maxHeight="0px":(b.transform="scaleY(0)",b.opacity="0")}resetActive(),activeTab!=="none"&&accordionMode!="popup"&&setActive(activeTab),tabs.forEach((f,b)=>{f.addEventListener("click",()=>{resetActive(),setActive(b)})});const section=data.el.closest("section.beae-section");let sectionId="";section&&(sectionId=section.getAttribute("data-sectionid"));let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(f){extOptions={},console.error(f)}if(accordions.forEach((f,b)=>{f.addEventListener("click",()=>{if(accordionMode=="popup"&&data.mode.value!="builder"){const k=f.closest(".beae-tab-content");if(k){let g=document.createElement("div");g.innerHTML=`
                            <h3 class="beae-popup__content-title">${f.querySelector("span").innerHTML}</h3>
                            <div class="beae-popup__content-body ${data.id}">${k.querySelector(".beae-accordion-body").innerHTML}</div>
                            `,window.BeaePopupLibrary.createPopup(g,{layout:extOptions.layout?extOptions.layout:"right",width:extOptions.width?extOptions.width:"400px",layoutMobile:extOptions.layoutMobile?extOptions.layoutMobile:"bottom",sectionId})}}else accordionMode=="single"?(resetActive(),setActive(b)):f.classList.contains("active")?removeActive(b):setActive(b)})}),layout=="tabs"){const f=data.el.querySelector(".beae-tab-contents"),b=f.querySelectorAll(".beae-tab-content-wrp");let k=0,g=-1;b.forEach((S,B)=>{const C=S.offsetHeight;C>k&&(g=B,k=C)}),new ResizeObserver(()=>{f.style.setProperty("--beae-tabs-max-height",`${b[g].offsetHeight}px`)}).observe(b[g])} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-ne7fqb48: ', ex)
      };
    

      try {
        let argid = 'beae-znt492bqblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-znt492bq',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-znt492bq');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-znt492bq: ', ex)
      };
    

      try {
        let argid = 'beae-wmsdcopbblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-wmsdcopb',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-wmsdcopb');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-wmsdcopb: ', ex)
      };
    

      try {
        let argid = 'beae-avl2nviiblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-avl2nvii',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-avl2nvii');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-avl2nvii: ', ex)
      };
    

      try {
        let argid = 'beae-3xfb818ablock-tabs',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-3xfb818a',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-3xfb818a');
        args.el = args.els[0];
        ((data) => { const prefixClass=`div[data-id=${data.id}] > .beae-tab-wrp`;let tabs=data.el.querySelectorAll(`${prefixClass} > .beae-tab-items > .beae-tab-item`),contents=data.el.querySelectorAll(`${prefixClass} > .beae-tab-contents > .beae-tab-content`),rightside=data.el.querySelectorAll(`${prefixClass} .beae-rightside`),accordions=data.el.querySelectorAll(`${prefixClass} > .beae-tab-contents > .beae-tab-content > .beae-accordion-title--mobile`),activeTab=window.outerWidth&&window.outerWidth<=768?data.activeTabMobile:data.activeTab,toggleImg=data.toggleImg,layout=data.layout,accordionMode=data.accordionMode;function resetActive(){tabs.forEach(f=>f.classList.remove("active")),contents.forEach(f=>f.classList.remove("active")),accordions.forEach(f=>f.classList.remove("active")),toggleImg&&rightside.forEach(f=>f.classList.remove("active")),contents.forEach(f=>{const b=f.querySelector(".beae-accordion-body").style;layout=="accordions"?b.maxHeight="0px":(b.transform="scaleY(0)",b.opacity="0")})}function setActive(f){tabs[f].classList.add("active"),contents[f].classList.add("active"),accordions[f].classList.add("active"),toggleImg&&rightside[f].classList.add("active");const b=contents[f].querySelector(".beae-accordion-body");if(b){const k=b.style;layout=="accordions"?k.maxHeight=data.mode.value=="builder"?"":b.scrollHeight+"px":(k.transform="scaleY(1)",k.transformOrigin="top center",k.opacity="1")}}function removeActive(f){tabs[f].classList.remove("active"),contents[f].classList.remove("active"),accordions[f].classList.remove("active"),toggleImg&&rightside[f].classList.remove("active");const b=contents[f].querySelector(".beae-accordion-body").style;layout=="accordions"?b.maxHeight="0px":(b.transform="scaleY(0)",b.opacity="0")}resetActive(),activeTab!=="none"&&accordionMode!="popup"&&setActive(activeTab),tabs.forEach((f,b)=>{f.addEventListener("click",()=>{resetActive(),setActive(b)})});const section=data.el.closest("section.beae-section");let sectionId="";section&&(sectionId=section.getAttribute("data-sectionid"));let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(f){extOptions={},console.error(f)}if(accordions.forEach((f,b)=>{f.addEventListener("click",()=>{if(accordionMode=="popup"&&data.mode.value!="builder"){const k=f.closest(".beae-tab-content");if(k){let g=document.createElement("div");g.innerHTML=`
                            <h3 class="beae-popup__content-title">${f.querySelector("span").innerHTML}</h3>
                            <div class="beae-popup__content-body ${data.id}">${k.querySelector(".beae-accordion-body").innerHTML}</div>
                            `,window.BeaePopupLibrary.createPopup(g,{layout:extOptions.layout?extOptions.layout:"right",width:extOptions.width?extOptions.width:"400px",layoutMobile:extOptions.layoutMobile?extOptions.layoutMobile:"bottom",sectionId})}}else accordionMode=="single"?(resetActive(),setActive(b)):f.classList.contains("active")?removeActive(b):setActive(b)})}),layout=="tabs"){const f=data.el.querySelector(".beae-tab-contents"),b=f.querySelectorAll(".beae-tab-content-wrp");let k=0,g=-1;b.forEach((S,B)=>{const C=S.offsetHeight;C>k&&(g=B,k=C)}),new ResizeObserver(()=>{f.style.setProperty("--beae-tabs-max-height",`${b[g].offsetHeight}px`)}).observe(b[g])} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-3xfb818a: ', ex)
      };
    

      try {
        let argid = 'beae-kgsvae7fblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-kgsvae7f',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-kgsvae7f');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-kgsvae7f: ', ex)
      };
    

      try {
        let argid = 'beae-0oqm2mz9block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-0oqm2mz9',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-0oqm2mz9');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-0oqm2mz9: ', ex)
      };
    

      try {
        let argid = 'beae-z1gfdsu1block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-z1gfdsu1',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-z1gfdsu1');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-z1gfdsu1: ', ex)
      };
    

      try {
        let argid = 'beae-gg8hfozxblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-gg8hfozx',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-gg8hfozx');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-gg8hfozx: ', ex)
      };
    

      try {
        let argid = 'beae-ann3zox2block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-ann3zox2',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-ann3zox2');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-ann3zox2: ', ex)
      };
    

      try {
        let argid = 'beae-zry09tdoblock-tabs',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-zry09tdo',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-zry09tdo');
        args.el = args.els[0];
        ((data) => { const prefixClass=`div[data-id=${data.id}] > .beae-tab-wrp`;let tabs=data.el.querySelectorAll(`${prefixClass} > .beae-tab-items > .beae-tab-item`),contents=data.el.querySelectorAll(`${prefixClass} > .beae-tab-contents > .beae-tab-content`),rightside=data.el.querySelectorAll(`${prefixClass} .beae-rightside`),accordions=data.el.querySelectorAll(`${prefixClass} > .beae-tab-contents > .beae-tab-content > .beae-accordion-title--mobile`),activeTab=window.outerWidth&&window.outerWidth<=768?data.activeTabMobile:data.activeTab,toggleImg=data.toggleImg,layout=data.layout,accordionMode=data.accordionMode;function resetActive(){tabs.forEach(f=>f.classList.remove("active")),contents.forEach(f=>f.classList.remove("active")),accordions.forEach(f=>f.classList.remove("active")),toggleImg&&rightside.forEach(f=>f.classList.remove("active")),contents.forEach(f=>{const b=f.querySelector(".beae-accordion-body").style;layout=="accordions"?b.maxHeight="0px":(b.transform="scaleY(0)",b.opacity="0")})}function setActive(f){tabs[f].classList.add("active"),contents[f].classList.add("active"),accordions[f].classList.add("active"),toggleImg&&rightside[f].classList.add("active");const b=contents[f].querySelector(".beae-accordion-body");if(b){const k=b.style;layout=="accordions"?k.maxHeight=data.mode.value=="builder"?"":b.scrollHeight+"px":(k.transform="scaleY(1)",k.transformOrigin="top center",k.opacity="1")}}function removeActive(f){tabs[f].classList.remove("active"),contents[f].classList.remove("active"),accordions[f].classList.remove("active"),toggleImg&&rightside[f].classList.remove("active");const b=contents[f].querySelector(".beae-accordion-body").style;layout=="accordions"?b.maxHeight="0px":(b.transform="scaleY(0)",b.opacity="0")}resetActive(),activeTab!=="none"&&accordionMode!="popup"&&setActive(activeTab),tabs.forEach((f,b)=>{f.addEventListener("click",()=>{resetActive(),setActive(b)})});const section=data.el.closest("section.beae-section");let sectionId="";section&&(sectionId=section.getAttribute("data-sectionid"));let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(f){extOptions={},console.error(f)}if(accordions.forEach((f,b)=>{f.addEventListener("click",()=>{if(accordionMode=="popup"&&data.mode.value!="builder"){const k=f.closest(".beae-tab-content");if(k){let g=document.createElement("div");g.innerHTML=`
                            <h3 class="beae-popup__content-title">${f.querySelector("span").innerHTML}</h3>
                            <div class="beae-popup__content-body ${data.id}">${k.querySelector(".beae-accordion-body").innerHTML}</div>
                            `,window.BeaePopupLibrary.createPopup(g,{layout:extOptions.layout?extOptions.layout:"right",width:extOptions.width?extOptions.width:"400px",layoutMobile:extOptions.layoutMobile?extOptions.layoutMobile:"bottom",sectionId})}}else accordionMode=="single"?(resetActive(),setActive(b)):f.classList.contains("active")?removeActive(b):setActive(b)})}),layout=="tabs"){const f=data.el.querySelector(".beae-tab-contents"),b=f.querySelectorAll(".beae-tab-content-wrp");let k=0,g=-1;b.forEach((S,B)=>{const C=S.offsetHeight;C>k&&(g=B,k=C)}),new ResizeObserver(()=>{f.style.setProperty("--beae-tabs-max-height",`${b[g].offsetHeight}px`)}).observe(b[g])} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-zry09tdo: ', ex)
      };
    

      try {
        let argid = 'beae-2cscxve0block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-2cscxve0',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-2cscxve0');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-2cscxve0: ', ex)
      };
    

      try {
        let argid = 'beae-5cjnzzavblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-5cjnzzav',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-5cjnzzav');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-5cjnzzav: ', ex)
      };
    

      try {
        let argid = 'beae-2q0ao3xcblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-2q0ao3xc',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-2q0ao3xc');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-2q0ao3xc: ', ex)
      };
    

      try {
        let argid = 'beae-98jm9r3cblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-98jm9r3c',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-98jm9r3c');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-98jm9r3c: ', ex)
      };
    

      try {
        let argid = 'beae-cpsq9v46block-tabs',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-cpsq9v46',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-cpsq9v46');
        args.el = args.els[0];
        ((data) => { const prefixClass=`div[data-id=${data.id}] > .beae-tab-wrp`;let tabs=data.el.querySelectorAll(`${prefixClass} > .beae-tab-items > .beae-tab-item`),contents=data.el.querySelectorAll(`${prefixClass} > .beae-tab-contents > .beae-tab-content`),rightside=data.el.querySelectorAll(`${prefixClass} .beae-rightside`),accordions=data.el.querySelectorAll(`${prefixClass} > .beae-tab-contents > .beae-tab-content > .beae-accordion-title--mobile`),activeTab=window.outerWidth&&window.outerWidth<=768?data.activeTabMobile:data.activeTab,toggleImg=data.toggleImg,layout=data.layout,accordionMode=data.accordionMode;function resetActive(){tabs.forEach(f=>f.classList.remove("active")),contents.forEach(f=>f.classList.remove("active")),accordions.forEach(f=>f.classList.remove("active")),toggleImg&&rightside.forEach(f=>f.classList.remove("active")),contents.forEach(f=>{const b=f.querySelector(".beae-accordion-body").style;layout=="accordions"?b.maxHeight="0px":(b.transform="scaleY(0)",b.opacity="0")})}function setActive(f){tabs[f].classList.add("active"),contents[f].classList.add("active"),accordions[f].classList.add("active"),toggleImg&&rightside[f].classList.add("active");const b=contents[f].querySelector(".beae-accordion-body");if(b){const k=b.style;layout=="accordions"?k.maxHeight=data.mode.value=="builder"?"":b.scrollHeight+"px":(k.transform="scaleY(1)",k.transformOrigin="top center",k.opacity="1")}}function removeActive(f){tabs[f].classList.remove("active"),contents[f].classList.remove("active"),accordions[f].classList.remove("active"),toggleImg&&rightside[f].classList.remove("active");const b=contents[f].querySelector(".beae-accordion-body").style;layout=="accordions"?b.maxHeight="0px":(b.transform="scaleY(0)",b.opacity="0")}resetActive(),activeTab!=="none"&&accordionMode!="popup"&&setActive(activeTab),tabs.forEach((f,b)=>{f.addEventListener("click",()=>{resetActive(),setActive(b)})});const section=data.el.closest("section.beae-section");let sectionId="";section&&(sectionId=section.getAttribute("data-sectionid"));let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(f){extOptions={},console.error(f)}if(accordions.forEach((f,b)=>{f.addEventListener("click",()=>{if(accordionMode=="popup"&&data.mode.value!="builder"){const k=f.closest(".beae-tab-content");if(k){let g=document.createElement("div");g.innerHTML=`
                            <h3 class="beae-popup__content-title">${f.querySelector("span").innerHTML}</h3>
                            <div class="beae-popup__content-body ${data.id}">${k.querySelector(".beae-accordion-body").innerHTML}</div>
                            `,window.BeaePopupLibrary.createPopup(g,{layout:extOptions.layout?extOptions.layout:"right",width:extOptions.width?extOptions.width:"400px",layoutMobile:extOptions.layoutMobile?extOptions.layoutMobile:"bottom",sectionId})}}else accordionMode=="single"?(resetActive(),setActive(b)):f.classList.contains("active")?removeActive(b):setActive(b)})}),layout=="tabs"){const f=data.el.querySelector(".beae-tab-contents"),b=f.querySelectorAll(".beae-tab-content-wrp");let k=0,g=-1;b.forEach((S,B)=>{const C=S.offsetHeight;C>k&&(g=B,k=C)}),new ResizeObserver(()=>{f.style.setProperty("--beae-tabs-max-height",`${b[g].offsetHeight}px`)}).observe(b[g])} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-cpsq9v46: ', ex)
      };
    

      try {
        let argid = 'beae-wm90fmfgblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-wm90fmfg',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-wm90fmfg');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-wm90fmfg: ', ex)
      };
    

      try {
        let argid = 'beae-p8k17vmwblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-p8k17vmw',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-p8k17vmw');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-p8k17vmw: ', ex)
      };
    

      try {
        let argid = 'beae-i0fssrw8block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-i0fssrw8',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-i0fssrw8');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-i0fssrw8: ', ex)
      };
    

      try {
        let argid = 'beae-9usky3mublock-tabs',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-9usky3mu',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-9usky3mu');
        args.el = args.els[0];
        ((data) => { const prefixClass=`div[data-id=${data.id}] > .beae-tab-wrp`;let tabs=data.el.querySelectorAll(`${prefixClass} > .beae-tab-items > .beae-tab-item`),contents=data.el.querySelectorAll(`${prefixClass} > .beae-tab-contents > .beae-tab-content`),rightside=data.el.querySelectorAll(`${prefixClass} .beae-rightside`),accordions=data.el.querySelectorAll(`${prefixClass} > .beae-tab-contents > .beae-tab-content > .beae-accordion-title--mobile`),activeTab=window.outerWidth&&window.outerWidth<=768?data.activeTabMobile:data.activeTab,toggleImg=data.toggleImg,layout=data.layout,accordionMode=data.accordionMode;function resetActive(){tabs.forEach(f=>f.classList.remove("active")),contents.forEach(f=>f.classList.remove("active")),accordions.forEach(f=>f.classList.remove("active")),toggleImg&&rightside.forEach(f=>f.classList.remove("active")),contents.forEach(f=>{const b=f.querySelector(".beae-accordion-body").style;layout=="accordions"?b.maxHeight="0px":(b.transform="scaleY(0)",b.opacity="0")})}function setActive(f){tabs[f].classList.add("active"),contents[f].classList.add("active"),accordions[f].classList.add("active"),toggleImg&&rightside[f].classList.add("active");const b=contents[f].querySelector(".beae-accordion-body");if(b){const k=b.style;layout=="accordions"?k.maxHeight=data.mode.value=="builder"?"":b.scrollHeight+"px":(k.transform="scaleY(1)",k.transformOrigin="top center",k.opacity="1")}}function removeActive(f){tabs[f].classList.remove("active"),contents[f].classList.remove("active"),accordions[f].classList.remove("active"),toggleImg&&rightside[f].classList.remove("active");const b=contents[f].querySelector(".beae-accordion-body").style;layout=="accordions"?b.maxHeight="0px":(b.transform="scaleY(0)",b.opacity="0")}resetActive(),activeTab!=="none"&&accordionMode!="popup"&&setActive(activeTab),tabs.forEach((f,b)=>{f.addEventListener("click",()=>{resetActive(),setActive(b)})});const section=data.el.closest("section.beae-section");let sectionId="";section&&(sectionId=section.getAttribute("data-sectionid"));let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(f){extOptions={},console.error(f)}if(accordions.forEach((f,b)=>{f.addEventListener("click",()=>{if(accordionMode=="popup"&&data.mode.value!="builder"){const k=f.closest(".beae-tab-content");if(k){let g=document.createElement("div");g.innerHTML=`
                            <h3 class="beae-popup__content-title">${f.querySelector("span").innerHTML}</h3>
                            <div class="beae-popup__content-body ${data.id}">${k.querySelector(".beae-accordion-body").innerHTML}</div>
                            `,window.BeaePopupLibrary.createPopup(g,{layout:extOptions.layout?extOptions.layout:"right",width:extOptions.width?extOptions.width:"400px",layoutMobile:extOptions.layoutMobile?extOptions.layoutMobile:"bottom",sectionId})}}else accordionMode=="single"?(resetActive(),setActive(b)):f.classList.contains("active")?removeActive(b):setActive(b)})}),layout=="tabs"){const f=data.el.querySelector(".beae-tab-contents"),b=f.querySelectorAll(".beae-tab-content-wrp");let k=0,g=-1;b.forEach((S,B)=>{const C=S.offsetHeight;C>k&&(g=B,k=C)}),new ResizeObserver(()=>{f.style.setProperty("--beae-tabs-max-height",`${b[g].offsetHeight}px`)}).observe(b[g])} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-9usky3mu: ', ex)
      };
    

      try {
        let argid = 'beae-6oi2ammbblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-6oi2ammb',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-6oi2ammb');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-6oi2ammb: ', ex)
      };
    

      try {
        let argid = 'beae-r69m0ed4block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-r69m0ed4',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-r69m0ed4');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-r69m0ed4: ', ex)
      };
    

      try {
        let argid = 'beae-on6ez9r2block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-on6ez9r2',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-on6ez9r2');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-on6ez9r2: ', ex)
      };
    

      try {
        let argid = 'beae-vxat7zhdblock-tabs',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-vxat7zhd',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-vxat7zhd');
        args.el = args.els[0];
        ((data) => { const prefixClass=`div[data-id=${data.id}] > .beae-tab-wrp`;let tabs=data.el.querySelectorAll(`${prefixClass} > .beae-tab-items > .beae-tab-item`),contents=data.el.querySelectorAll(`${prefixClass} > .beae-tab-contents > .beae-tab-content`),rightside=data.el.querySelectorAll(`${prefixClass} .beae-rightside`),accordions=data.el.querySelectorAll(`${prefixClass} > .beae-tab-contents > .beae-tab-content > .beae-accordion-title--mobile`),activeTab=window.outerWidth&&window.outerWidth<=768?data.activeTabMobile:data.activeTab,toggleImg=data.toggleImg,layout=data.layout,accordionMode=data.accordionMode;function resetActive(){tabs.forEach(f=>f.classList.remove("active")),contents.forEach(f=>f.classList.remove("active")),accordions.forEach(f=>f.classList.remove("active")),toggleImg&&rightside.forEach(f=>f.classList.remove("active")),contents.forEach(f=>{const b=f.querySelector(".beae-accordion-body").style;layout=="accordions"?b.maxHeight="0px":(b.transform="scaleY(0)",b.opacity="0")})}function setActive(f){tabs[f].classList.add("active"),contents[f].classList.add("active"),accordions[f].classList.add("active"),toggleImg&&rightside[f].classList.add("active");const b=contents[f].querySelector(".beae-accordion-body");if(b){const k=b.style;layout=="accordions"?k.maxHeight=data.mode.value=="builder"?"":b.scrollHeight+"px":(k.transform="scaleY(1)",k.transformOrigin="top center",k.opacity="1")}}function removeActive(f){tabs[f].classList.remove("active"),contents[f].classList.remove("active"),accordions[f].classList.remove("active"),toggleImg&&rightside[f].classList.remove("active");const b=contents[f].querySelector(".beae-accordion-body").style;layout=="accordions"?b.maxHeight="0px":(b.transform="scaleY(0)",b.opacity="0")}resetActive(),activeTab!=="none"&&accordionMode!="popup"&&setActive(activeTab),tabs.forEach((f,b)=>{f.addEventListener("click",()=>{resetActive(),setActive(b)})});const section=data.el.closest("section.beae-section");let sectionId="";section&&(sectionId=section.getAttribute("data-sectionid"));let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(f){extOptions={},console.error(f)}if(accordions.forEach((f,b)=>{f.addEventListener("click",()=>{if(accordionMode=="popup"&&data.mode.value!="builder"){const k=f.closest(".beae-tab-content");if(k){let g=document.createElement("div");g.innerHTML=`
                            <h3 class="beae-popup__content-title">${f.querySelector("span").innerHTML}</h3>
                            <div class="beae-popup__content-body ${data.id}">${k.querySelector(".beae-accordion-body").innerHTML}</div>
                            `,window.BeaePopupLibrary.createPopup(g,{layout:extOptions.layout?extOptions.layout:"right",width:extOptions.width?extOptions.width:"400px",layoutMobile:extOptions.layoutMobile?extOptions.layoutMobile:"bottom",sectionId})}}else accordionMode=="single"?(resetActive(),setActive(b)):f.classList.contains("active")?removeActive(b):setActive(b)})}),layout=="tabs"){const f=data.el.querySelector(".beae-tab-contents"),b=f.querySelectorAll(".beae-tab-content-wrp");let k=0,g=-1;b.forEach((S,B)=>{const C=S.offsetHeight;C>k&&(g=B,k=C)}),new ResizeObserver(()=>{f.style.setProperty("--beae-tabs-max-height",`${b[g].offsetHeight}px`)}).observe(b[g])} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-vxat7zhd: ', ex)
      };
    

      try {
        let argid = 'beae-1m9evrbablock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-1m9evrba',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-1m9evrba');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-1m9evrba: ', ex)
      };
    

      try {
        let argid = 'beae-o7qapteyblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-o7qaptey',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-o7qaptey');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-o7qaptey: ', ex)
      };
    

      try {
        let argid = 'beae-k91odehiblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-k91odehi',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-k91odehi');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-k91odehi: ', ex)
      };
    

      try {
        let argid = 'beae-78jkoh4dblock-tabs',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-78jkoh4d',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-78jkoh4d');
        args.el = args.els[0];
        ((data) => { const prefixClass=`div[data-id=${data.id}] > .beae-tab-wrp`;let tabs=data.el.querySelectorAll(`${prefixClass} > .beae-tab-items > .beae-tab-item`),contents=data.el.querySelectorAll(`${prefixClass} > .beae-tab-contents > .beae-tab-content`),rightside=data.el.querySelectorAll(`${prefixClass} .beae-rightside`),accordions=data.el.querySelectorAll(`${prefixClass} > .beae-tab-contents > .beae-tab-content > .beae-accordion-title--mobile`),activeTab=window.outerWidth&&window.outerWidth<=768?data.activeTabMobile:data.activeTab,toggleImg=data.toggleImg,layout=data.layout,accordionMode=data.accordionMode;function resetActive(){tabs.forEach(f=>f.classList.remove("active")),contents.forEach(f=>f.classList.remove("active")),accordions.forEach(f=>f.classList.remove("active")),toggleImg&&rightside.forEach(f=>f.classList.remove("active")),contents.forEach(f=>{const b=f.querySelector(".beae-accordion-body").style;layout=="accordions"?b.maxHeight="0px":(b.transform="scaleY(0)",b.opacity="0")})}function setActive(f){tabs[f].classList.add("active"),contents[f].classList.add("active"),accordions[f].classList.add("active"),toggleImg&&rightside[f].classList.add("active");const b=contents[f].querySelector(".beae-accordion-body");if(b){const k=b.style;layout=="accordions"?k.maxHeight=data.mode.value=="builder"?"":b.scrollHeight+"px":(k.transform="scaleY(1)",k.transformOrigin="top center",k.opacity="1")}}function removeActive(f){tabs[f].classList.remove("active"),contents[f].classList.remove("active"),accordions[f].classList.remove("active"),toggleImg&&rightside[f].classList.remove("active");const b=contents[f].querySelector(".beae-accordion-body").style;layout=="accordions"?b.maxHeight="0px":(b.transform="scaleY(0)",b.opacity="0")}resetActive(),activeTab!=="none"&&accordionMode!="popup"&&setActive(activeTab),tabs.forEach((f,b)=>{f.addEventListener("click",()=>{resetActive(),setActive(b)})});const section=data.el.closest("section.beae-section");let sectionId="";section&&(sectionId=section.getAttribute("data-sectionid"));let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(f){extOptions={},console.error(f)}if(accordions.forEach((f,b)=>{f.addEventListener("click",()=>{if(accordionMode=="popup"&&data.mode.value!="builder"){const k=f.closest(".beae-tab-content");if(k){let g=document.createElement("div");g.innerHTML=`
                            <h3 class="beae-popup__content-title">${f.querySelector("span").innerHTML}</h3>
                            <div class="beae-popup__content-body ${data.id}">${k.querySelector(".beae-accordion-body").innerHTML}</div>
                            `,window.BeaePopupLibrary.createPopup(g,{layout:extOptions.layout?extOptions.layout:"right",width:extOptions.width?extOptions.width:"400px",layoutMobile:extOptions.layoutMobile?extOptions.layoutMobile:"bottom",sectionId})}}else accordionMode=="single"?(resetActive(),setActive(b)):f.classList.contains("active")?removeActive(b):setActive(b)})}),layout=="tabs"){const f=data.el.querySelector(".beae-tab-contents"),b=f.querySelectorAll(".beae-tab-content-wrp");let k=0,g=-1;b.forEach((S,B)=>{const C=S.offsetHeight;C>k&&(g=B,k=C)}),new ResizeObserver(()=>{f.style.setProperty("--beae-tabs-max-height",`${b[g].offsetHeight}px`)}).observe(b[g])} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-78jkoh4d: ', ex)
      };
    

      try {
        let argid = 'beae-lr6y7o8lblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-lr6y7o8l',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-lr6y7o8l');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-lr6y7o8l: ', ex)
      };
    

      try {
        let argid = 'beae-o7i87lp4block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-o7i87lp4',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-o7i87lp4');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-o7i87lp4: ', ex)
      };
    

      try {
        let argid = 'beae-vu004imxblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-vu004imx',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-vu004imx');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-vu004imx: ', ex)
      };
    

      try {
        let argid = 'beae-mt1u92jxblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-mt1u92jx',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-mt1u92jx');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-mt1u92jx: ', ex)
      };
    

      try {
        let argid = 'beae-1becndv0block-tabs',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-1becndv0',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-1becndv0');
        args.el = args.els[0];
        ((data) => { const prefixClass=`div[data-id=${data.id}] > .beae-tab-wrp`;let tabs=data.el.querySelectorAll(`${prefixClass} > .beae-tab-items > .beae-tab-item`),contents=data.el.querySelectorAll(`${prefixClass} > .beae-tab-contents > .beae-tab-content`),rightside=data.el.querySelectorAll(`${prefixClass} .beae-rightside`),accordions=data.el.querySelectorAll(`${prefixClass} > .beae-tab-contents > .beae-tab-content > .beae-accordion-title--mobile`),activeTab=window.outerWidth&&window.outerWidth<=768?data.activeTabMobile:data.activeTab,toggleImg=data.toggleImg,layout=data.layout,accordionMode=data.accordionMode;function resetActive(){tabs.forEach(f=>f.classList.remove("active")),contents.forEach(f=>f.classList.remove("active")),accordions.forEach(f=>f.classList.remove("active")),toggleImg&&rightside.forEach(f=>f.classList.remove("active")),contents.forEach(f=>{const b=f.querySelector(".beae-accordion-body").style;layout=="accordions"?b.maxHeight="0px":(b.transform="scaleY(0)",b.opacity="0")})}function setActive(f){tabs[f].classList.add("active"),contents[f].classList.add("active"),accordions[f].classList.add("active"),toggleImg&&rightside[f].classList.add("active");const b=contents[f].querySelector(".beae-accordion-body");if(b){const k=b.style;layout=="accordions"?k.maxHeight=data.mode.value=="builder"?"":b.scrollHeight+"px":(k.transform="scaleY(1)",k.transformOrigin="top center",k.opacity="1")}}function removeActive(f){tabs[f].classList.remove("active"),contents[f].classList.remove("active"),accordions[f].classList.remove("active"),toggleImg&&rightside[f].classList.remove("active");const b=contents[f].querySelector(".beae-accordion-body").style;layout=="accordions"?b.maxHeight="0px":(b.transform="scaleY(0)",b.opacity="0")}resetActive(),activeTab!=="none"&&accordionMode!="popup"&&setActive(activeTab),tabs.forEach((f,b)=>{f.addEventListener("click",()=>{resetActive(),setActive(b)})});const section=data.el.closest("section.beae-section");let sectionId="";section&&(sectionId=section.getAttribute("data-sectionid"));let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(f){extOptions={},console.error(f)}if(accordions.forEach((f,b)=>{f.addEventListener("click",()=>{if(accordionMode=="popup"&&data.mode.value!="builder"){const k=f.closest(".beae-tab-content");if(k){let g=document.createElement("div");g.innerHTML=`
                            <h3 class="beae-popup__content-title">${f.querySelector("span").innerHTML}</h3>
                            <div class="beae-popup__content-body ${data.id}">${k.querySelector(".beae-accordion-body").innerHTML}</div>
                            `,window.BeaePopupLibrary.createPopup(g,{layout:extOptions.layout?extOptions.layout:"right",width:extOptions.width?extOptions.width:"400px",layoutMobile:extOptions.layoutMobile?extOptions.layoutMobile:"bottom",sectionId})}}else accordionMode=="single"?(resetActive(),setActive(b)):f.classList.contains("active")?removeActive(b):setActive(b)})}),layout=="tabs"){const f=data.el.querySelector(".beae-tab-contents"),b=f.querySelectorAll(".beae-tab-content-wrp");let k=0,g=-1;b.forEach((S,B)=>{const C=S.offsetHeight;C>k&&(g=B,k=C)}),new ResizeObserver(()=>{f.style.setProperty("--beae-tabs-max-height",`${b[g].offsetHeight}px`)}).observe(b[g])} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-1becndv0: ', ex)
      };
    

      try {
        let argid = 'beae-4kwuqrs0block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-4kwuqrs0',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-4kwuqrs0');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-4kwuqrs0: ', ex)
      };
    

      try {
        let argid = 'beae-i2ehy1p2block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-i2ehy1p2',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-i2ehy1p2');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-i2ehy1p2: ', ex)
      };
    

      try {
        let argid = 'beae-uyk8ulycblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-uyk8ulyc',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-uyk8ulyc');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-uyk8ulyc: ', ex)
      };
    

      try {
        let argid = 'beae-bboriorwblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-bboriorw',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-bboriorw');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-bboriorw: ', ex)
      };
    

      try {
        let argid = 'beae-rf6qsawhblock-tabs',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-rf6qsawh',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-rf6qsawh');
        args.el = args.els[0];
        ((data) => { const prefixClass=`div[data-id=${data.id}] > .beae-tab-wrp`;let tabs=data.el.querySelectorAll(`${prefixClass} > .beae-tab-items > .beae-tab-item`),contents=data.el.querySelectorAll(`${prefixClass} > .beae-tab-contents > .beae-tab-content`),rightside=data.el.querySelectorAll(`${prefixClass} .beae-rightside`),accordions=data.el.querySelectorAll(`${prefixClass} > .beae-tab-contents > .beae-tab-content > .beae-accordion-title--mobile`),activeTab=window.outerWidth&&window.outerWidth<=768?data.activeTabMobile:data.activeTab,toggleImg=data.toggleImg,layout=data.layout,accordionMode=data.accordionMode;function resetActive(){tabs.forEach(f=>f.classList.remove("active")),contents.forEach(f=>f.classList.remove("active")),accordions.forEach(f=>f.classList.remove("active")),toggleImg&&rightside.forEach(f=>f.classList.remove("active")),contents.forEach(f=>{const b=f.querySelector(".beae-accordion-body").style;layout=="accordions"?b.maxHeight="0px":(b.transform="scaleY(0)",b.opacity="0")})}function setActive(f){tabs[f].classList.add("active"),contents[f].classList.add("active"),accordions[f].classList.add("active"),toggleImg&&rightside[f].classList.add("active");const b=contents[f].querySelector(".beae-accordion-body");if(b){const k=b.style;layout=="accordions"?k.maxHeight=data.mode.value=="builder"?"":b.scrollHeight+"px":(k.transform="scaleY(1)",k.transformOrigin="top center",k.opacity="1")}}function removeActive(f){tabs[f].classList.remove("active"),contents[f].classList.remove("active"),accordions[f].classList.remove("active"),toggleImg&&rightside[f].classList.remove("active");const b=contents[f].querySelector(".beae-accordion-body").style;layout=="accordions"?b.maxHeight="0px":(b.transform="scaleY(0)",b.opacity="0")}resetActive(),activeTab!=="none"&&accordionMode!="popup"&&setActive(activeTab),tabs.forEach((f,b)=>{f.addEventListener("click",()=>{resetActive(),setActive(b)})});const section=data.el.closest("section.beae-section");let sectionId="";section&&(sectionId=section.getAttribute("data-sectionid"));let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(f){extOptions={},console.error(f)}if(accordions.forEach((f,b)=>{f.addEventListener("click",()=>{if(accordionMode=="popup"&&data.mode.value!="builder"){const k=f.closest(".beae-tab-content");if(k){let g=document.createElement("div");g.innerHTML=`
                            <h3 class="beae-popup__content-title">${f.querySelector("span").innerHTML}</h3>
                            <div class="beae-popup__content-body ${data.id}">${k.querySelector(".beae-accordion-body").innerHTML}</div>
                            `,window.BeaePopupLibrary.createPopup(g,{layout:extOptions.layout?extOptions.layout:"right",width:extOptions.width?extOptions.width:"400px",layoutMobile:extOptions.layoutMobile?extOptions.layoutMobile:"bottom",sectionId})}}else accordionMode=="single"?(resetActive(),setActive(b)):f.classList.contains("active")?removeActive(b):setActive(b)})}),layout=="tabs"){const f=data.el.querySelector(".beae-tab-contents"),b=f.querySelectorAll(".beae-tab-content-wrp");let k=0,g=-1;b.forEach((S,B)=>{const C=S.offsetHeight;C>k&&(g=B,k=C)}),new ResizeObserver(()=>{f.style.setProperty("--beae-tabs-max-height",`${b[g].offsetHeight}px`)}).observe(b[g])} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-rf6qsawh: ', ex)
      };
    

      try {
        let argid = 'beae-md3f3xfmblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-md3f3xfm',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-md3f3xfm');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-md3f3xfm: ', ex)
      };
    

      try {
        let argid = 'beae-tjsitk3wblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-tjsitk3w',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-tjsitk3w');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-tjsitk3w: ', ex)
      };
    

      try {
        let argid = 'beae-5vdeqxjkblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-5vdeqxjk',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-5vdeqxjk');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-5vdeqxjk: ', ex)
      };
    

      try {
        let argid = 'beae-g2cn6i9wblock-tabs',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-g2cn6i9w',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-g2cn6i9w');
        args.el = args.els[0];
        ((data) => { const prefixClass=`div[data-id=${data.id}] > .beae-tab-wrp`;let tabs=data.el.querySelectorAll(`${prefixClass} > .beae-tab-items > .beae-tab-item`),contents=data.el.querySelectorAll(`${prefixClass} > .beae-tab-contents > .beae-tab-content`),rightside=data.el.querySelectorAll(`${prefixClass} .beae-rightside`),accordions=data.el.querySelectorAll(`${prefixClass} > .beae-tab-contents > .beae-tab-content > .beae-accordion-title--mobile`),activeTab=window.outerWidth&&window.outerWidth<=768?data.activeTabMobile:data.activeTab,toggleImg=data.toggleImg,layout=data.layout,accordionMode=data.accordionMode;function resetActive(){tabs.forEach(f=>f.classList.remove("active")),contents.forEach(f=>f.classList.remove("active")),accordions.forEach(f=>f.classList.remove("active")),toggleImg&&rightside.forEach(f=>f.classList.remove("active")),contents.forEach(f=>{const b=f.querySelector(".beae-accordion-body").style;layout=="accordions"?b.maxHeight="0px":(b.transform="scaleY(0)",b.opacity="0")})}function setActive(f){tabs[f].classList.add("active"),contents[f].classList.add("active"),accordions[f].classList.add("active"),toggleImg&&rightside[f].classList.add("active");const b=contents[f].querySelector(".beae-accordion-body");if(b){const k=b.style;layout=="accordions"?k.maxHeight=data.mode.value=="builder"?"":b.scrollHeight+"px":(k.transform="scaleY(1)",k.transformOrigin="top center",k.opacity="1")}}function removeActive(f){tabs[f].classList.remove("active"),contents[f].classList.remove("active"),accordions[f].classList.remove("active"),toggleImg&&rightside[f].classList.remove("active");const b=contents[f].querySelector(".beae-accordion-body").style;layout=="accordions"?b.maxHeight="0px":(b.transform="scaleY(0)",b.opacity="0")}resetActive(),activeTab!=="none"&&accordionMode!="popup"&&setActive(activeTab),tabs.forEach((f,b)=>{f.addEventListener("click",()=>{resetActive(),setActive(b)})});const section=data.el.closest("section.beae-section");let sectionId="";section&&(sectionId=section.getAttribute("data-sectionid"));let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(f){extOptions={},console.error(f)}if(accordions.forEach((f,b)=>{f.addEventListener("click",()=>{if(accordionMode=="popup"&&data.mode.value!="builder"){const k=f.closest(".beae-tab-content");if(k){let g=document.createElement("div");g.innerHTML=`
                            <h3 class="beae-popup__content-title">${f.querySelector("span").innerHTML}</h3>
                            <div class="beae-popup__content-body ${data.id}">${k.querySelector(".beae-accordion-body").innerHTML}</div>
                            `,window.BeaePopupLibrary.createPopup(g,{layout:extOptions.layout?extOptions.layout:"right",width:extOptions.width?extOptions.width:"400px",layoutMobile:extOptions.layoutMobile?extOptions.layoutMobile:"bottom",sectionId})}}else accordionMode=="single"?(resetActive(),setActive(b)):f.classList.contains("active")?removeActive(b):setActive(b)})}),layout=="tabs"){const f=data.el.querySelector(".beae-tab-contents"),b=f.querySelectorAll(".beae-tab-content-wrp");let k=0,g=-1;b.forEach((S,B)=>{const C=S.offsetHeight;C>k&&(g=B,k=C)}),new ResizeObserver(()=>{f.style.setProperty("--beae-tabs-max-height",`${b[g].offsetHeight}px`)}).observe(b[g])} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-g2cn6i9w: ', ex)
      };
    

      try {
        let argid = 'beae-y20poausblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-y20poaus',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-y20poaus');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-y20poaus: ', ex)
      };
    

      try {
        let argid = 'beae-i10kp0kvblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-i10kp0kv',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-i10kp0kv');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-i10kp0kv: ', ex)
      };
    

      try {
        let argid = 'beae-qz3fklv1block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-qz3fklv1',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-qz3fklv1');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-qz3fklv1: ', ex)
      };
    

      try {
        let argid = 'beae-y9h6yl6ublock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-y9h6yl6u',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-y9h6yl6u');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-y9h6yl6u: ', ex)
      };
    

      try {
        let argid = 'beae-c32dfmqyblock-tabs',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-c32dfmqy',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-c32dfmqy');
        args.el = args.els[0];
        ((data) => { const prefixClass=`div[data-id=${data.id}] > .beae-tab-wrp`;let tabs=data.el.querySelectorAll(`${prefixClass} > .beae-tab-items > .beae-tab-item`),contents=data.el.querySelectorAll(`${prefixClass} > .beae-tab-contents > .beae-tab-content`),rightside=data.el.querySelectorAll(`${prefixClass} .beae-rightside`),accordions=data.el.querySelectorAll(`${prefixClass} > .beae-tab-contents > .beae-tab-content > .beae-accordion-title--mobile`),activeTab=window.outerWidth&&window.outerWidth<=768?data.activeTabMobile:data.activeTab,toggleImg=data.toggleImg,layout=data.layout,accordionMode=data.accordionMode;function resetActive(){tabs.forEach(f=>f.classList.remove("active")),contents.forEach(f=>f.classList.remove("active")),accordions.forEach(f=>f.classList.remove("active")),toggleImg&&rightside.forEach(f=>f.classList.remove("active")),contents.forEach(f=>{const b=f.querySelector(".beae-accordion-body").style;layout=="accordions"?b.maxHeight="0px":(b.transform="scaleY(0)",b.opacity="0")})}function setActive(f){tabs[f].classList.add("active"),contents[f].classList.add("active"),accordions[f].classList.add("active"),toggleImg&&rightside[f].classList.add("active");const b=contents[f].querySelector(".beae-accordion-body");if(b){const k=b.style;layout=="accordions"?k.maxHeight=data.mode.value=="builder"?"":b.scrollHeight+"px":(k.transform="scaleY(1)",k.transformOrigin="top center",k.opacity="1")}}function removeActive(f){tabs[f].classList.remove("active"),contents[f].classList.remove("active"),accordions[f].classList.remove("active"),toggleImg&&rightside[f].classList.remove("active");const b=contents[f].querySelector(".beae-accordion-body").style;layout=="accordions"?b.maxHeight="0px":(b.transform="scaleY(0)",b.opacity="0")}resetActive(),activeTab!=="none"&&accordionMode!="popup"&&setActive(activeTab),tabs.forEach((f,b)=>{f.addEventListener("click",()=>{resetActive(),setActive(b)})});const section=data.el.closest("section.beae-section");let sectionId="";section&&(sectionId=section.getAttribute("data-sectionid"));let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(f){extOptions={},console.error(f)}if(accordions.forEach((f,b)=>{f.addEventListener("click",()=>{if(accordionMode=="popup"&&data.mode.value!="builder"){const k=f.closest(".beae-tab-content");if(k){let g=document.createElement("div");g.innerHTML=`
                            <h3 class="beae-popup__content-title">${f.querySelector("span").innerHTML}</h3>
                            <div class="beae-popup__content-body ${data.id}">${k.querySelector(".beae-accordion-body").innerHTML}</div>
                            `,window.BeaePopupLibrary.createPopup(g,{layout:extOptions.layout?extOptions.layout:"right",width:extOptions.width?extOptions.width:"400px",layoutMobile:extOptions.layoutMobile?extOptions.layoutMobile:"bottom",sectionId})}}else accordionMode=="single"?(resetActive(),setActive(b)):f.classList.contains("active")?removeActive(b):setActive(b)})}),layout=="tabs"){const f=data.el.querySelector(".beae-tab-contents"),b=f.querySelectorAll(".beae-tab-content-wrp");let k=0,g=-1;b.forEach((S,B)=>{const C=S.offsetHeight;C>k&&(g=B,k=C)}),new ResizeObserver(()=>{f.style.setProperty("--beae-tabs-max-height",`${b[g].offsetHeight}px`)}).observe(b[g])} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-c32dfmqy: ', ex)
      };
    

      try {
        let argid = 'beae-tme5urhublock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-tme5urhu',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-tme5urhu');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-tme5urhu: ', ex)
      };
    

      try {
        let argid = 'beae-yn37w9f5block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-yn37w9f5',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-yn37w9f5');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-yn37w9f5: ', ex)
      };
    

      try {
        let argid = 'beae-anusf6htblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-anusf6ht',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-anusf6ht');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-anusf6ht: ', ex)
      };
    

      try {
        let argid = 'beae-wl9tsvqublock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-wl9tsvqu',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-wl9tsvqu');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-wl9tsvqu: ', ex)
      };
    

      try {
        let argid = 'beae-r01w55fvblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-r01w55fv',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-r01w55fv');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-r01w55fv: ', ex)
      };
    

      try {
        let argid = 'beae-q828v3exblock-tabs',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-q828v3ex',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-q828v3ex');
        args.el = args.els[0];
        ((data) => { const prefixClass=`div[data-id=${data.id}] > .beae-tab-wrp`;let tabs=data.el.querySelectorAll(`${prefixClass} > .beae-tab-items > .beae-tab-item`),contents=data.el.querySelectorAll(`${prefixClass} > .beae-tab-contents > .beae-tab-content`),rightside=data.el.querySelectorAll(`${prefixClass} .beae-rightside`),accordions=data.el.querySelectorAll(`${prefixClass} > .beae-tab-contents > .beae-tab-content > .beae-accordion-title--mobile`),activeTab=window.outerWidth&&window.outerWidth<=768?data.activeTabMobile:data.activeTab,toggleImg=data.toggleImg,layout=data.layout,accordionMode=data.accordionMode;function resetActive(){tabs.forEach(f=>f.classList.remove("active")),contents.forEach(f=>f.classList.remove("active")),accordions.forEach(f=>f.classList.remove("active")),toggleImg&&rightside.forEach(f=>f.classList.remove("active")),contents.forEach(f=>{const b=f.querySelector(".beae-accordion-body").style;layout=="accordions"?b.maxHeight="0px":(b.transform="scaleY(0)",b.opacity="0")})}function setActive(f){tabs[f].classList.add("active"),contents[f].classList.add("active"),accordions[f].classList.add("active"),toggleImg&&rightside[f].classList.add("active");const b=contents[f].querySelector(".beae-accordion-body");if(b){const k=b.style;layout=="accordions"?k.maxHeight=data.mode.value=="builder"?"":b.scrollHeight+"px":(k.transform="scaleY(1)",k.transformOrigin="top center",k.opacity="1")}}function removeActive(f){tabs[f].classList.remove("active"),contents[f].classList.remove("active"),accordions[f].classList.remove("active"),toggleImg&&rightside[f].classList.remove("active");const b=contents[f].querySelector(".beae-accordion-body").style;layout=="accordions"?b.maxHeight="0px":(b.transform="scaleY(0)",b.opacity="0")}resetActive(),activeTab!=="none"&&accordionMode!="popup"&&setActive(activeTab),tabs.forEach((f,b)=>{f.addEventListener("click",()=>{resetActive(),setActive(b)})});const section=data.el.closest("section.beae-section");let sectionId="";section&&(sectionId=section.getAttribute("data-sectionid"));let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(f){extOptions={},console.error(f)}if(accordions.forEach((f,b)=>{f.addEventListener("click",()=>{if(accordionMode=="popup"&&data.mode.value!="builder"){const k=f.closest(".beae-tab-content");if(k){let g=document.createElement("div");g.innerHTML=`
                            <h3 class="beae-popup__content-title">${f.querySelector("span").innerHTML}</h3>
                            <div class="beae-popup__content-body ${data.id}">${k.querySelector(".beae-accordion-body").innerHTML}</div>
                            `,window.BeaePopupLibrary.createPopup(g,{layout:extOptions.layout?extOptions.layout:"right",width:extOptions.width?extOptions.width:"400px",layoutMobile:extOptions.layoutMobile?extOptions.layoutMobile:"bottom",sectionId})}}else accordionMode=="single"?(resetActive(),setActive(b)):f.classList.contains("active")?removeActive(b):setActive(b)})}),layout=="tabs"){const f=data.el.querySelector(".beae-tab-contents"),b=f.querySelectorAll(".beae-tab-content-wrp");let k=0,g=-1;b.forEach((S,B)=>{const C=S.offsetHeight;C>k&&(g=B,k=C)}),new ResizeObserver(()=>{f.style.setProperty("--beae-tabs-max-height",`${b[g].offsetHeight}px`)}).observe(b[g])} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-q828v3ex: ', ex)
      };
    

      try {
        let argid = 'beae-rxf7t6x3block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-rxf7t6x3',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-rxf7t6x3');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-rxf7t6x3: ', ex)
      };
    

      try {
        let argid = 'beae-u5y07z8eblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-u5y07z8e',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-u5y07z8e');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-u5y07z8e: ', ex)
      };
    

      try {
        let argid = 'beae-6i5dvxs7block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-6i5dvxs7',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-6i5dvxs7');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-6i5dvxs7: ', ex)
      };
    

      try {
        let argid = 'beae-6bwffxssblock-tabs',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-6bwffxss',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-6bwffxss');
        args.el = args.els[0];
        ((data) => { const prefixClass=`div[data-id=${data.id}] > .beae-tab-wrp`;let tabs=data.el.querySelectorAll(`${prefixClass} > .beae-tab-items > .beae-tab-item`),contents=data.el.querySelectorAll(`${prefixClass} > .beae-tab-contents > .beae-tab-content`),rightside=data.el.querySelectorAll(`${prefixClass} .beae-rightside`),accordions=data.el.querySelectorAll(`${prefixClass} > .beae-tab-contents > .beae-tab-content > .beae-accordion-title--mobile`),activeTab=window.outerWidth&&window.outerWidth<=768?data.activeTabMobile:data.activeTab,toggleImg=data.toggleImg,layout=data.layout,accordionMode=data.accordionMode;function resetActive(){tabs.forEach(f=>f.classList.remove("active")),contents.forEach(f=>f.classList.remove("active")),accordions.forEach(f=>f.classList.remove("active")),toggleImg&&rightside.forEach(f=>f.classList.remove("active")),contents.forEach(f=>{const b=f.querySelector(".beae-accordion-body").style;layout=="accordions"?b.maxHeight="0px":(b.transform="scaleY(0)",b.opacity="0")})}function setActive(f){tabs[f].classList.add("active"),contents[f].classList.add("active"),accordions[f].classList.add("active"),toggleImg&&rightside[f].classList.add("active");const b=contents[f].querySelector(".beae-accordion-body");if(b){const k=b.style;layout=="accordions"?k.maxHeight=data.mode.value=="builder"?"":b.scrollHeight+"px":(k.transform="scaleY(1)",k.transformOrigin="top center",k.opacity="1")}}function removeActive(f){tabs[f].classList.remove("active"),contents[f].classList.remove("active"),accordions[f].classList.remove("active"),toggleImg&&rightside[f].classList.remove("active");const b=contents[f].querySelector(".beae-accordion-body").style;layout=="accordions"?b.maxHeight="0px":(b.transform="scaleY(0)",b.opacity="0")}resetActive(),activeTab!=="none"&&accordionMode!="popup"&&setActive(activeTab),tabs.forEach((f,b)=>{f.addEventListener("click",()=>{resetActive(),setActive(b)})});const section=data.el.closest("section.beae-section");let sectionId="";section&&(sectionId=section.getAttribute("data-sectionid"));let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(f){extOptions={},console.error(f)}if(accordions.forEach((f,b)=>{f.addEventListener("click",()=>{if(accordionMode=="popup"&&data.mode.value!="builder"){const k=f.closest(".beae-tab-content");if(k){let g=document.createElement("div");g.innerHTML=`
                            <h3 class="beae-popup__content-title">${f.querySelector("span").innerHTML}</h3>
                            <div class="beae-popup__content-body ${data.id}">${k.querySelector(".beae-accordion-body").innerHTML}</div>
                            `,window.BeaePopupLibrary.createPopup(g,{layout:extOptions.layout?extOptions.layout:"right",width:extOptions.width?extOptions.width:"400px",layoutMobile:extOptions.layoutMobile?extOptions.layoutMobile:"bottom",sectionId})}}else accordionMode=="single"?(resetActive(),setActive(b)):f.classList.contains("active")?removeActive(b):setActive(b)})}),layout=="tabs"){const f=data.el.querySelector(".beae-tab-contents"),b=f.querySelectorAll(".beae-tab-content-wrp");let k=0,g=-1;b.forEach((S,B)=>{const C=S.offsetHeight;C>k&&(g=B,k=C)}),new ResizeObserver(()=>{f.style.setProperty("--beae-tabs-max-height",`${b[g].offsetHeight}px`)}).observe(b[g])} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-6bwffxss: ', ex)
      };
    

      try {
        let argid = 'beae-aw31c75gblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-aw31c75g',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-aw31c75g');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-aw31c75g: ', ex)
      };
    

      try {
        let argid = 'beae-dxe7l27vblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-dxe7l27v',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-dxe7l27v');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-dxe7l27v: ', ex)
      };
    

      try {
        let argid = 'beae-1q51opnwblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-1q51opnw',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-1q51opnw');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-1q51opnw: ', ex)
      };
    

      try {
        let argid = 'beae-rk3wyfa7block-tabs',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-rk3wyfa7',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-rk3wyfa7');
        args.el = args.els[0];
        ((data) => { const prefixClass=`div[data-id=${data.id}] > .beae-tab-wrp`;let tabs=data.el.querySelectorAll(`${prefixClass} > .beae-tab-items > .beae-tab-item`),contents=data.el.querySelectorAll(`${prefixClass} > .beae-tab-contents > .beae-tab-content`),rightside=data.el.querySelectorAll(`${prefixClass} .beae-rightside`),accordions=data.el.querySelectorAll(`${prefixClass} > .beae-tab-contents > .beae-tab-content > .beae-accordion-title--mobile`),activeTab=window.outerWidth&&window.outerWidth<=768?data.activeTabMobile:data.activeTab,toggleImg=data.toggleImg,layout=data.layout,accordionMode=data.accordionMode;function resetActive(){tabs.forEach(f=>f.classList.remove("active")),contents.forEach(f=>f.classList.remove("active")),accordions.forEach(f=>f.classList.remove("active")),toggleImg&&rightside.forEach(f=>f.classList.remove("active")),contents.forEach(f=>{const b=f.querySelector(".beae-accordion-body").style;layout=="accordions"?b.maxHeight="0px":(b.transform="scaleY(0)",b.opacity="0")})}function setActive(f){tabs[f].classList.add("active"),contents[f].classList.add("active"),accordions[f].classList.add("active"),toggleImg&&rightside[f].classList.add("active");const b=contents[f].querySelector(".beae-accordion-body");if(b){const k=b.style;layout=="accordions"?k.maxHeight=data.mode.value=="builder"?"":b.scrollHeight+"px":(k.transform="scaleY(1)",k.transformOrigin="top center",k.opacity="1")}}function removeActive(f){tabs[f].classList.remove("active"),contents[f].classList.remove("active"),accordions[f].classList.remove("active"),toggleImg&&rightside[f].classList.remove("active");const b=contents[f].querySelector(".beae-accordion-body").style;layout=="accordions"?b.maxHeight="0px":(b.transform="scaleY(0)",b.opacity="0")}resetActive(),activeTab!=="none"&&accordionMode!="popup"&&setActive(activeTab),tabs.forEach((f,b)=>{f.addEventListener("click",()=>{resetActive(),setActive(b)})});const section=data.el.closest("section.beae-section");let sectionId="";section&&(sectionId=section.getAttribute("data-sectionid"));let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(f){extOptions={},console.error(f)}if(accordions.forEach((f,b)=>{f.addEventListener("click",()=>{if(accordionMode=="popup"&&data.mode.value!="builder"){const k=f.closest(".beae-tab-content");if(k){let g=document.createElement("div");g.innerHTML=`
                            <h3 class="beae-popup__content-title">${f.querySelector("span").innerHTML}</h3>
                            <div class="beae-popup__content-body ${data.id}">${k.querySelector(".beae-accordion-body").innerHTML}</div>
                            `,window.BeaePopupLibrary.createPopup(g,{layout:extOptions.layout?extOptions.layout:"right",width:extOptions.width?extOptions.width:"400px",layoutMobile:extOptions.layoutMobile?extOptions.layoutMobile:"bottom",sectionId})}}else accordionMode=="single"?(resetActive(),setActive(b)):f.classList.contains("active")?removeActive(b):setActive(b)})}),layout=="tabs"){const f=data.el.querySelector(".beae-tab-contents"),b=f.querySelectorAll(".beae-tab-content-wrp");let k=0,g=-1;b.forEach((S,B)=>{const C=S.offsetHeight;C>k&&(g=B,k=C)}),new ResizeObserver(()=>{f.style.setProperty("--beae-tabs-max-height",`${b[g].offsetHeight}px`)}).observe(b[g])} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-rk3wyfa7: ', ex)
      };
    

      try {
        let argid = 'beae-8t8ks7fpblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-8t8ks7fp',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-8t8ks7fp');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-8t8ks7fp: ', ex)
      };
    

      try {
        let argid = 'beae-oe6b4rt3block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-oe6b4rt3',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-oe6b4rt3');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-oe6b4rt3: ', ex)
      };
    

      try {
        let argid = 'beae-amxip1wublock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-amxip1wu',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-amxip1wu');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-amxip1wu: ', ex)
      };
    

      try {
        let argid = 'beae-yboms0rrblock-tabs',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-yboms0rr',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-yboms0rr');
        args.el = args.els[0];
        ((data) => { const prefixClass=`div[data-id=${data.id}] > .beae-tab-wrp`;let tabs=data.el.querySelectorAll(`${prefixClass} > .beae-tab-items > .beae-tab-item`),contents=data.el.querySelectorAll(`${prefixClass} > .beae-tab-contents > .beae-tab-content`),rightside=data.el.querySelectorAll(`${prefixClass} .beae-rightside`),accordions=data.el.querySelectorAll(`${prefixClass} > .beae-tab-contents > .beae-tab-content > .beae-accordion-title--mobile`),activeTab=window.outerWidth&&window.outerWidth<=768?data.activeTabMobile:data.activeTab,toggleImg=data.toggleImg,layout=data.layout,accordionMode=data.accordionMode;function resetActive(){tabs.forEach(f=>f.classList.remove("active")),contents.forEach(f=>f.classList.remove("active")),accordions.forEach(f=>f.classList.remove("active")),toggleImg&&rightside.forEach(f=>f.classList.remove("active")),contents.forEach(f=>{const b=f.querySelector(".beae-accordion-body").style;layout=="accordions"?b.maxHeight="0px":(b.transform="scaleY(0)",b.opacity="0")})}function setActive(f){tabs[f].classList.add("active"),contents[f].classList.add("active"),accordions[f].classList.add("active"),toggleImg&&rightside[f].classList.add("active");const b=contents[f].querySelector(".beae-accordion-body");if(b){const k=b.style;layout=="accordions"?k.maxHeight=data.mode.value=="builder"?"":b.scrollHeight+"px":(k.transform="scaleY(1)",k.transformOrigin="top center",k.opacity="1")}}function removeActive(f){tabs[f].classList.remove("active"),contents[f].classList.remove("active"),accordions[f].classList.remove("active"),toggleImg&&rightside[f].classList.remove("active");const b=contents[f].querySelector(".beae-accordion-body").style;layout=="accordions"?b.maxHeight="0px":(b.transform="scaleY(0)",b.opacity="0")}resetActive(),activeTab!=="none"&&accordionMode!="popup"&&setActive(activeTab),tabs.forEach((f,b)=>{f.addEventListener("click",()=>{resetActive(),setActive(b)})});const section=data.el.closest("section.beae-section");let sectionId="";section&&(sectionId=section.getAttribute("data-sectionid"));let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(f){extOptions={},console.error(f)}if(accordions.forEach((f,b)=>{f.addEventListener("click",()=>{if(accordionMode=="popup"&&data.mode.value!="builder"){const k=f.closest(".beae-tab-content");if(k){let g=document.createElement("div");g.innerHTML=`
                            <h3 class="beae-popup__content-title">${f.querySelector("span").innerHTML}</h3>
                            <div class="beae-popup__content-body ${data.id}">${k.querySelector(".beae-accordion-body").innerHTML}</div>
                            `,window.BeaePopupLibrary.createPopup(g,{layout:extOptions.layout?extOptions.layout:"right",width:extOptions.width?extOptions.width:"400px",layoutMobile:extOptions.layoutMobile?extOptions.layoutMobile:"bottom",sectionId})}}else accordionMode=="single"?(resetActive(),setActive(b)):f.classList.contains("active")?removeActive(b):setActive(b)})}),layout=="tabs"){const f=data.el.querySelector(".beae-tab-contents"),b=f.querySelectorAll(".beae-tab-content-wrp");let k=0,g=-1;b.forEach((S,B)=>{const C=S.offsetHeight;C>k&&(g=B,k=C)}),new ResizeObserver(()=>{f.style.setProperty("--beae-tabs-max-height",`${b[g].offsetHeight}px`)}).observe(b[g])} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-yboms0rr: ', ex)
      };
    

      try {
        let argid = 'beae-uqcajjrkblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-uqcajjrk',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-uqcajjrk');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-uqcajjrk: ', ex)
      };
    

      try {
        let argid = 'beae-mtvn0b1sblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-mtvn0b1s',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-mtvn0b1s');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-mtvn0b1s: ', ex)
      };
    

      try {
        let argid = 'beae-gsfh1p6jblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-gsfh1p6j',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-gsfh1p6j');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-gsfh1p6j: ', ex)
      };
    

      try {
        let argid = 'beae-xoze1oi2block-tabs',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-xoze1oi2',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-xoze1oi2');
        args.el = args.els[0];
        ((data) => { const prefixClass=`div[data-id=${data.id}] > .beae-tab-wrp`;let tabs=data.el.querySelectorAll(`${prefixClass} > .beae-tab-items > .beae-tab-item`),contents=data.el.querySelectorAll(`${prefixClass} > .beae-tab-contents > .beae-tab-content`),rightside=data.el.querySelectorAll(`${prefixClass} .beae-rightside`),accordions=data.el.querySelectorAll(`${prefixClass} > .beae-tab-contents > .beae-tab-content > .beae-accordion-title--mobile`),activeTab=window.outerWidth&&window.outerWidth<=768?data.activeTabMobile:data.activeTab,toggleImg=data.toggleImg,layout=data.layout,accordionMode=data.accordionMode;function resetActive(){tabs.forEach(f=>f.classList.remove("active")),contents.forEach(f=>f.classList.remove("active")),accordions.forEach(f=>f.classList.remove("active")),toggleImg&&rightside.forEach(f=>f.classList.remove("active")),contents.forEach(f=>{const b=f.querySelector(".beae-accordion-body").style;layout=="accordions"?b.maxHeight="0px":(b.transform="scaleY(0)",b.opacity="0")})}function setActive(f){tabs[f].classList.add("active"),contents[f].classList.add("active"),accordions[f].classList.add("active"),toggleImg&&rightside[f].classList.add("active");const b=contents[f].querySelector(".beae-accordion-body");if(b){const k=b.style;layout=="accordions"?k.maxHeight=data.mode.value=="builder"?"":b.scrollHeight+"px":(k.transform="scaleY(1)",k.transformOrigin="top center",k.opacity="1")}}function removeActive(f){tabs[f].classList.remove("active"),contents[f].classList.remove("active"),accordions[f].classList.remove("active"),toggleImg&&rightside[f].classList.remove("active");const b=contents[f].querySelector(".beae-accordion-body").style;layout=="accordions"?b.maxHeight="0px":(b.transform="scaleY(0)",b.opacity="0")}resetActive(),activeTab!=="none"&&accordionMode!="popup"&&setActive(activeTab),tabs.forEach((f,b)=>{f.addEventListener("click",()=>{resetActive(),setActive(b)})});const section=data.el.closest("section.beae-section");let sectionId="";section&&(sectionId=section.getAttribute("data-sectionid"));let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(f){extOptions={},console.error(f)}if(accordions.forEach((f,b)=>{f.addEventListener("click",()=>{if(accordionMode=="popup"&&data.mode.value!="builder"){const k=f.closest(".beae-tab-content");if(k){let g=document.createElement("div");g.innerHTML=`
                            <h3 class="beae-popup__content-title">${f.querySelector("span").innerHTML}</h3>
                            <div class="beae-popup__content-body ${data.id}">${k.querySelector(".beae-accordion-body").innerHTML}</div>
                            `,window.BeaePopupLibrary.createPopup(g,{layout:extOptions.layout?extOptions.layout:"right",width:extOptions.width?extOptions.width:"400px",layoutMobile:extOptions.layoutMobile?extOptions.layoutMobile:"bottom",sectionId})}}else accordionMode=="single"?(resetActive(),setActive(b)):f.classList.contains("active")?removeActive(b):setActive(b)})}),layout=="tabs"){const f=data.el.querySelector(".beae-tab-contents"),b=f.querySelectorAll(".beae-tab-content-wrp");let k=0,g=-1;b.forEach((S,B)=>{const C=S.offsetHeight;C>k&&(g=B,k=C)}),new ResizeObserver(()=>{f.style.setProperty("--beae-tabs-max-height",`${b[g].offsetHeight}px`)}).observe(b[g])} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-xoze1oi2: ', ex)
      };
    

      try {
        let argid = 'beae-7f91qee0block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-7f91qee0',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-7f91qee0');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-7f91qee0: ', ex)
      };
    

      try {
        let argid = 'beae-jnz8fld8block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-jnz8fld8',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-jnz8fld8');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-jnz8fld8: ', ex)
      };
    

      try {
        let argid = 'beae-80xq9dh6section-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-80xq9dh6',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-80xq9dh6');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-80xq9dh6: ', ex)
      };
    

      try {
        let argid = 'beae-92ua278lsection-slide-show',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-92ua278l',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-92ua278l');
        args.el = args.els[0];
        ((h) => { window.BeaeSlider&&!h.noRunJs&&window.BeaeSlider(h) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-92ua278l: ', ex)
      };
    

      try {
        let argid = 'beae-cs8m6a28block-imageloop-0',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-cs8m6a28',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-cs8m6a28');
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
        console.error('BEAE JS ERROR ID beae-cs8m6a28: ', ex)
      };
    

      try {
        let argid = 'beae-0u4ybz6kblock-textloop-0',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-0u4ybz6k',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-0u4ybz6k');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-0u4ybz6k: ', ex)
      };
    

      try {
        let argid = 'beae-5ut81itvblock-textloop-0',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-5ut81itv',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-5ut81itv');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-5ut81itv: ', ex)
      };
    

      try {
        let argid = 'beae-1x4jgxb7button-jsloop-0',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-1x4jgxb7',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-1x4jgxb7');
        args.el = args.els[0];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(n){extOptions={},console.error(n)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let n=document.querySelector(selector+","+selector.replace("#","."));if(n)return n.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let t=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(t,{id:data.id,...extOptions}),e.preventDefault();return}const n=window.createLoading(e.currentTarget);return window.BeaePopupLibrary.lightbox({id:data.id,url:((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(t=>{t.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(t),n.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let n=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(n=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(n,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-1x4jgxb7: ', ex)
      };
    

      try {
        let argid = 'beae-cs8m6a28block-imageloop-1',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-cs8m6a28',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-cs8m6a28');
        args.el = args.els[1];
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
        console.error('BEAE JS ERROR ID beae-cs8m6a28: ', ex)
      };
    

      try {
        let argid = 'beae-0u4ybz6kblock-textloop-1',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-0u4ybz6k',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-0u4ybz6k');
        args.el = args.els[1];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-0u4ybz6k: ', ex)
      };
    

      try {
        let argid = 'beae-5ut81itvblock-textloop-1',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-5ut81itv',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-5ut81itv');
        args.el = args.els[1];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-5ut81itv: ', ex)
      };
    

      try {
        let argid = 'beae-1x4jgxb7button-jsloop-1',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-1x4jgxb7',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-1x4jgxb7');
        args.el = args.els[1];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(n){extOptions={},console.error(n)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let n=document.querySelector(selector+","+selector.replace("#","."));if(n)return n.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let t=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(t,{id:data.id,...extOptions}),e.preventDefault();return}const n=window.createLoading(e.currentTarget);return window.BeaePopupLibrary.lightbox({id:data.id,url:((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(t=>{t.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(t),n.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let n=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(n=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(n,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-1x4jgxb7: ', ex)
      };
    

      try {
        let argid = 'beae-cs8m6a28block-imageloop-2',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-cs8m6a28',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-cs8m6a28');
        args.el = args.els[2];
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
        console.error('BEAE JS ERROR ID beae-cs8m6a28: ', ex)
      };
    

      try {
        let argid = 'beae-0u4ybz6kblock-textloop-2',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-0u4ybz6k',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-0u4ybz6k');
        args.el = args.els[2];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-0u4ybz6k: ', ex)
      };
    

      try {
        let argid = 'beae-5ut81itvblock-textloop-2',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-5ut81itv',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-5ut81itv');
        args.el = args.els[2];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-5ut81itv: ', ex)
      };
    

      try {
        let argid = 'beae-1x4jgxb7button-jsloop-2',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-1x4jgxb7',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-1x4jgxb7');
        args.el = args.els[2];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(n){extOptions={},console.error(n)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let n=document.querySelector(selector+","+selector.replace("#","."));if(n)return n.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let t=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(t,{id:data.id,...extOptions}),e.preventDefault();return}const n=window.createLoading(e.currentTarget);return window.BeaePopupLibrary.lightbox({id:data.id,url:((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(t=>{t.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(t),n.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let n=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(n=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(n,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-1x4jgxb7: ', ex)
      };
    

      try {
        let argid = 'beae-fakxn6gcsection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-fakxn6gc',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-fakxn6gc');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-fakxn6gc: ', ex)
      };
    

      try {
        let argid = 'beae-eg2anf3ubutton-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-eg2anf3u',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-eg2anf3u');
        args.el = args.els[0];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(n){extOptions={},console.error(n)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let n=document.querySelector(selector+","+selector.replace("#","."));if(n)return n.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let t=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(t,{id:data.id,...extOptions}),e.preventDefault();return}const n=window.createLoading(e.currentTarget);return window.BeaePopupLibrary.lightbox({id:data.id,url:((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(t=>{t.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(t),n.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let n=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(n=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(n,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-eg2anf3u: ', ex)
      };
    }; if (window.BEAEBASE) {js_R0C9U0RB()} else {window.BEAEPAGEJS.push(js_R0C9U0RB)} })(); 