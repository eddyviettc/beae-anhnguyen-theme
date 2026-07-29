
(() => { if (window.BEAEPAGEJS === undefined) {
            window.BEAEPAGEJS = [];
          }

          if(window.beaePageSetting == undefined) {
            window.beaePageSetting = {};
          }
          
          window.beaePageSetting.pageId = "68aaed18fcb7ad23bc067c82";
              window.beaePageSetting.pageTitle = "test-fotter"; 
              window.beaePageSetting.pageType = "footer";

          let js_9NE0ELNA = () => { let BeaeUseHooks = {};
      try {
        let argid = 'beae-z59pmcmgsection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-z59pmcmg',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-z59pmcmg');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-z59pmcmg: ', ex)
      };
    

      try {
        let argid = 'beae-m6h180acblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-m6h180ac',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-m6h180ac');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let F=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(F)return F.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-m6h180ac: ', ex)
      };
    

      try {
        let argid = 'beae-696smd1nblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-696smd1n',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-696smd1n');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let F=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(F)return F.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-696smd1n: ', ex)
      };
    

      try {
        let argid = 'beae-vnmjhj95block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-vnmjhj95',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-vnmjhj95');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let F=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(F)return F.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-vnmjhj95: ', ex)
      };
    

      try {
        let argid = 'beae-yjtmmaywsection-slide-show',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-yjtmmayw',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-yjtmmayw');
        args.el = args.els[0];
        ((h) => { window.BeaeSlider&&!h.noRunJs&&window.BeaeSlider(h) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-yjtmmayw: ', ex)
      };
    

      try {
        let argid = 'beae-d3cez1cwblock-textloop-0',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-d3cez1cw',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-d3cez1cw');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let F=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(F)return F.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-d3cez1cw: ', ex)
      };
    

      try {
        let argid = 'beae-d3cez1cwblock-textloop-1',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-d3cez1cw',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-d3cez1cw');
        args.el = args.els[1];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let F=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(F)return F.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-d3cez1cw: ', ex)
      };
    

      try {
        let argid = 'beae-4vuc826tlinkslist-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-4vuc826t',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-4vuc826t');
        args.el = args.els[0];
        ((f) => { const m=f.el.querySelector(".beae-linkslist-title"),w=f.el.querySelector(".beae-linkslist");m===null||w===null||m.addEventListener("click",g=>{window.matchMedia("(max-width: 767px)").matches&&w.classList.toggle("open")}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-4vuc826t: ', ex)
      };
    

      try {
        let argid = 'beae-7w803sjplinkslist-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-7w803sjp',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-7w803sjp');
        args.el = args.els[0];
        ((f) => { const m=f.el.querySelector(".beae-linkslist-title"),w=f.el.querySelector(".beae-linkslist");m===null||w===null||m.addEventListener("click",g=>{window.matchMedia("(max-width: 767px)").matches&&w.classList.toggle("open")}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-7w803sjp: ', ex)
      };
    

      try {
        let argid = 'beae-vbbpywoqblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-vbbpywoq',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-vbbpywoq');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let F=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(F)return F.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-vbbpywoq: ', ex)
      };
    

      try {
        let argid = 'beae-1p29knxkblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-1p29knxk',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-1p29knxk');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let F=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(F)return F.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-1p29knxk: ', ex)
      };
    

      try {
        let argid = 'beae-33pfkg02block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-33pfkg02',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-33pfkg02');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let F=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(F)return F.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-33pfkg02: ', ex)
      };
    

      try {
        let argid = 'beae-sgz7pcpnsection-slide-show',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-sgz7pcpn',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-sgz7pcpn');
        args.el = args.els[0];
        ((h) => { window.BeaeSlider&&!h.noRunJs&&window.BeaeSlider(h) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-sgz7pcpn: ', ex)
      };
    

      try {
        let argid = 'beae-b8skz9a4lc-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-b8skz9a4',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-b8skz9a4');
        args.el = args.els[0];
        ((b) => { let h=b.checkLive;function p(x){return{input:x.querySelector('input[name="locale_code"], input[name="country_code"]'),button:x.querySelector("button.beae-current-value"),panel:x.querySelector(".beae-language-results"),search:x.querySelector('input[name="language_filter"]'),resetButton:x.querySelector(".beae-reset-button")}}function f(x,M){const L=b.el.querySelector("form.beae-localization");M.input.value=x.currentTarget.dataset.value,L&&L.submit()}function m(x){x.button.focus(),x.panel.classList.toggle("hidden-dropdown"),x.button.setAttribute("aria-expanded",(x.button.getAttribute("aria-expanded")==="false").toString());const M=x.button.getBoundingClientRect();window.innerHeight-M.bottom<x.panel.offsetHeight?(x.panel.style.top="auto",x.panel.style.bottom="100%"):(x.panel.style.top="100%",x.panel.style.bottom="auto")}function w(x){return x.normalize("NFD").replace(/\p{Diacritic}/gu,"").toLowerCase()}function g(x,M){const L=w(M.search.value),V=x.querySelectorAll(".beae-languages li");V.length,M.resetButton.classList.toggle("hidden",!L),V.forEach(T=>{w(T.querySelector(".beae-language-name").textContent).indexOf(L)>-1?T.classList.remove("beae-hidden"):T.classList.add("beae-hidden")})}function v(x){x.code.toUpperCase()==="ENTER"&&x.preventDefault()}function C(x,M,L){x.stopPropagation(),L.search.value="",g(M,L)}function S(x,M,L){(!M.contains(x.target)||!M.contains(x.relatedTarget))&&($(M,L),L.button.setAttribute("aria-expanded",(L.button.getAttribute("aria-expanded")==="false").toString()))}function $(x,M){M.panel.classList.add("hidden-dropdown"),M.search&&(M.search.value="",g(x,M))}function B(x){const M=p(x);h&&x.addEventListener("focusout",L=>S(L,x,M)),M.button.addEventListener("click",()=>m(M)),x.querySelectorAll(".beae-language-name").forEach(L=>L.addEventListener("click",V=>f(V,M))),M.search&&(M.search.addEventListener("keyup",()=>g(x,M)),M.search.addEventListener("keydown",v)),M.resetButton&&(M.resetButton.addEventListener("click",L=>C(L,x,M)),M.resetButton.addEventListener("mousedown",L=>L.preventDefault()))}b.el.querySelectorAll(".beae-localization").forEach(B) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-b8skz9a4: ', ex)
      };
    

      try {
        let argid = 'beae-fkug2orhlc-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-fkug2orh',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-fkug2orh');
        args.el = args.els[0];
        ((y) => { let b=y.checkLive;function h(k){return{input:k.querySelector('input[name="locale_code"], input[name="country_code"]'),button:k.querySelector("button.beae-current-value"),panel:k.querySelector(".beae-country-results"),search:k.querySelector('input[name="country_filter"]'),resetButton:k.querySelector(".beae-reset-button")}}function p(k,x){const M=y.el.querySelector("form.beae-localization");x.input.value=k.currentTarget.dataset.value,M&&M.submit()}function f(k){k.button.focus(),k.panel.classList.toggle("hidden-dropdown"),k.button.setAttribute("aria-expanded",(k.button.getAttribute("aria-expanded")==="false").toString());const x=k.button.getBoundingClientRect();window.innerHeight-x.bottom<k.panel.offsetHeight?(k.panel.style.top="auto",k.panel.style.bottom="100%"):(k.panel.style.top="100%",k.panel.style.bottom="auto")}function m(k){return k.normalize("NFD").replace(/\p{Diacritic}/gu,"").toLowerCase()}function w(k,x){const M=m(x.search.value),L=k.querySelectorAll(".beae-countries li");L.length,x.resetButton.classList.toggle("hidden",!M),L.forEach(V=>{m(V.querySelector(".beae-country-name").textContent).indexOf(M)>-1?V.classList.remove("beae-hidden"):V.classList.add("beae-hidden")})}function g(k){k.code.toUpperCase()==="ENTER"&&k.preventDefault()}function v(k,x,M){k.stopPropagation(),M.search.value="",w(x,M)}function C(k,x,M){(!x.contains(k.target)||!x.contains(k.relatedTarget))&&(S(x,M),M.button.setAttribute("aria-expanded",(M.button.getAttribute("aria-expanded")==="false").toString()))}function S(k,x){x.panel.classList.add("hidden-dropdown"),x.search&&(x.search.value="",w(k,x))}function $(k){const x=h(k);b&&k.addEventListener("focusout",M=>C(M,k,x)),x.button.addEventListener("click",()=>f(x)),k.querySelectorAll(".beae-country-name").forEach(M=>M.addEventListener("click",L=>p(L,x))),x.search&&(x.search.addEventListener("keyup",()=>w(k,x)),x.search.addEventListener("keydown",g)),x.resetButton&&(x.resetButton.addEventListener("click",M=>v(M,k,x)),x.resetButton.addEventListener("mousedown",M=>M.preventDefault()))}y.el.querySelectorAll(".beae-localization").forEach($) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-fkug2orh: ', ex)
      };
    

      try {
        let argid = 'beae-tthir35wblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-tthir35w',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-tthir35w');
        args.el = args.els[0];
        ((P) => { var I;((I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a")).forEach(z=>{let O=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&z.addEventListener("click",A=>{let F=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(F)return F.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-tthir35w: ', ex)
      };
    }; if (window.BEAEBASE) {js_9NE0ELNA()} else {window.BEAEPAGEJS.push(js_9NE0ELNA)} })(); 