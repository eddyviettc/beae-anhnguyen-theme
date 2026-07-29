(() => { if (window.BEAEPAGEJS === undefined) {
            window.BEAEPAGEJS = [];
          }

          if(window.beaePageSetting == undefined) {
            window.beaePageSetting = {};
          }
          
          window.beaePageSetting.pageId = "69bcf1bda39d8b281c012fb3";
              window.beaePageSetting.pageTitle = "test"; 
              window.beaePageSetting.pageType = "page";

          let js_L1814Q3A = () => { let BeaeUseHooks = {};
      try {
        let argid = 'beae-0c9vtzu7section-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-0c9vtzu7',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-0c9vtzu7');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-0c9vtzu7: ', ex)
      };
    

      try {
        let argid = 'beae-0c9vtzu7section-developer',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-0c9vtzu7',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-0c9vtzu7');
        args.el = args.els[0];
        ((data
) => { const slides = document.querySelectorAll(".swiper-slide");

slides.forEach(slide => {
  slide.addEventListener("click", () => {

    // Nếu click lại chính nó thì reset
    if (slide.classList.contains("active")) {
      slides.forEach(s => {
        s.classList.remove("active", "unactive");
      });
      return;
    }

    // Reset tất cả
    slides.forEach(s => {
      s.classList.remove("active");
      s.classList.add("unactive");
    });

    // Active slide được click
    slide.classList.remove("unactive");
    slide.classList.add("active");
  });
}); })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-0c9vtzu7: ', ex)
      };
    

      try {
        let argid = 'beae-4giooc01block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-4giooc01',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-4giooc01');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-4giooc01: ', ex)
      };
    

      try {
        let argid = 'beae-yobp5wfablock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-yobp5wfa',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-yobp5wfa');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-yobp5wfa: ', ex)
      };
    

      try {
        let argid = 'beae-a81zm8o0block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-a81zm8o0',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-a81zm8o0');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-a81zm8o0: ', ex)
      };
    

      try {
        let argid = 'beae-l7fzt2g3block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-l7fzt2g3',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-l7fzt2g3');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-l7fzt2g3: ', ex)
      };
    

      try {
        let argid = 'beae-no4qyv7vblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-no4qyv7v',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-no4qyv7v');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-no4qyv7v: ', ex)
      };
    

      try {
        let argid = 'beae-hf88l758block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-hf88l758',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-hf88l758');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-hf88l758: ', ex)
      };
    

      try {
        let argid = 'beae-vagb2x21block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-vagb2x21',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-vagb2x21');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-vagb2x21: ', ex)
      };
    

      try {
        let argid = 'beae-rmvt7nxablock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-rmvt7nxa',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-rmvt7nxa');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-rmvt7nxa: ', ex)
      };
    

      try {
        let argid = 'beae-ca2884cablock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-ca2884ca',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-ca2884ca');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-ca2884ca: ', ex)
      };
    

      try {
        let argid = 'beae-nqef31qtsection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-nqef31qt',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-nqef31qt');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-nqef31qt: ', ex)
      };
    

      try {
        let argid = 'beae-nqef31qtsection-developer',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-nqef31qt',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-nqef31qt');
        args.el = args.els[0];
        ((data
) => { document.addEventListener("DOMContentLoaded", () => {

  const container = document.querySelector('.swiper-container');
  const slides = document.querySelectorAll('.swiper-slide');

  if (!container) return;

  container.style.height = `${slides.length * 100}vh`;

  function handleScroll() {

    const rect = container.getBoundingClientRect();
    const scrollY = -rect.top;
    const vh = window.innerHeight;

    slides.forEach((slide, index) => {

      const start = index * vh;
      const end = start + vh;

      // CHỈ 1 SLIDE ACTIVE
      if (scrollY >= start && scrollY < end) {

        slides.forEach(s => s.classList.remove('active'));

        slide.classList.add('active');

      }

    });

  }

  window.addEventListener("scroll", handleScroll);

  // chạy 1 lần đầu
  handleScroll();

}); })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-nqef31qt: ', ex)
      };
    

      try {
        let argid = 'beae-7yq5lcmrblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-7yq5lcmr',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-7yq5lcmr');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-7yq5lcmr: ', ex)
      };
    

      try {
        let argid = 'beae-z93rfvnublock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-z93rfvnu',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-z93rfvnu');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-z93rfvnu: ', ex)
      };
    

      try {
        let argid = 'beae-e7jzzuddblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-e7jzzudd',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-e7jzzudd');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-e7jzzudd: ', ex)
      };
    

      try {
        let argid = 'beae-4wvozcujblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-4wvozcuj',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-4wvozcuj');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-4wvozcuj: ', ex)
      };
    

      try {
        let argid = 'beae-4dh4zspkblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-4dh4zspk',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-4dh4zspk');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-4dh4zspk: ', ex)
      };
    

      try {
        let argid = 'beae-m5ppxdj5block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-m5ppxdj5',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-m5ppxdj5');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-m5ppxdj5: ', ex)
      };
    

      try {
        let argid = 'beae-uyspati6block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-uyspati6',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-uyspati6');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-uyspati6: ', ex)
      };
    

      try {
        let argid = 'beae-njyveor6block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-njyveor6',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-njyveor6');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-njyveor6: ', ex)
      };
    

      try {
        let argid = 'beae-hwshog4fblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-hwshog4f',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-hwshog4f');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-hwshog4f: ', ex)
      };
    }; if (window.BEAEBASE) {js_L1814Q3A()} else {window.BEAEPAGEJS.push(js_L1814Q3A)} })(); 