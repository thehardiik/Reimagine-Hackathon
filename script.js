var tl = gsap.timeline();

document.getElementsByClassName("page1").onmousemove = e => {
    for(const card of document.getElementsByClassName("page1")) {
      const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;
  
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    };
  }

tl.from("#Life", {
    y: "100",
    opacity: "0",
    delay: 1,
    duration: 1 
})

tl.from("#cycle1", {
    y: "100",
    opacity: "0",
    duration: 1 
})


gsap.from("#Buy" , {
    y: "200",
    opacity: "0",
    scrollTrigger: {
        trigger: '.page2',
        scroller: 'body',
        start: 'top 40%'
    }
})

gsap.from("#cycle2" , {
    y: "200",
    opacity: "0",
    duration: 1,
    scrollTrigger: {
        trigger: '.page2',
        scroller: 'body',
        start: 'top 40%',
    }
})

gsap.to("#cycle2" , {
    x: "300%",
    duration: 3,
    scrollTrigger: {
        trigger: '.page2container',
        scroller: 'body',
        start: "top 15%",
        scrub: true,
        //pin: true,
        //markers: false
    }
})


gsap.to("#Buy" , {
    color: '#FF4191',
    scrollTrigger: {
        trigger: '.page2container',
        scroller: 'body',
        start: "top 15%",
        end: "top 30$",
        scrub: true,
        //pin: true,
        //markers: true
    }
})











