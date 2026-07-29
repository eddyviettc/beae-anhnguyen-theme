(() => { if (window.BEAEPAGEJS === undefined) {
            window.BEAEPAGEJS = [];
          }

          if(window.beaePageSetting == undefined) {
            window.beaePageSetting = {};
          }
          
          window.beaePageSetting.pageId = "697b6e7ab8351b6fde018976";
              window.beaePageSetting.pageTitle = "zcxzcx"; 
              window.beaePageSetting.pageType = "page";

          let js_0P9VLMGL = () => { let BeaeUseHooks = {};
      try {
        let argid = 'beae-bg4tqdtbsection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-bg4tqdtb',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-bg4tqdtb');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-bg4tqdtb: ', ex)
      };
    

      try {
        let argid = 'beae-v4biwmh2section-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-v4biwmh2',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-v4biwmh2');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-v4biwmh2: ', ex)
      };
    

      try {
        let argid = 'beae-bfvyj98yblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-bfvyj98y',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-bfvyj98y');
        args.el = args.els[0];
        ((O) => { var z;let H=(z=O.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(I=>{let E=I==null?void 0:I.getAttribute("href");I&&O.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&I.addEventListener("click",A=>{let D=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-bfvyj98y: ', ex)
      };
    

      try {
        let argid = 'beae-m6duu30xblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-m6duu30x',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-m6duu30x');
        args.el = args.els[0];
        ((O) => { var z;let H=(z=O.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(I=>{let E=I==null?void 0:I.getAttribute("href");I&&O.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&I.addEventListener("click",A=>{let D=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-m6duu30x: ', ex)
      };
    

      try {
        let argid = 'beae-16w0ugywblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-16w0ugyw',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-16w0ugyw');
        args.el = args.els[0];
        ((O) => { var z;let H=(z=O.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(I=>{let E=I==null?void 0:I.getAttribute("href");I&&O.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&I.addEventListener("click",A=>{let D=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-16w0ugyw: ', ex)
      };
    }; if (window.BEAEBASE) {js_0P9VLMGL()} else {window.BEAEPAGEJS.push(js_0P9VLMGL)} })(); 