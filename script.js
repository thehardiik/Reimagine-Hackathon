var tl = gsap.timeline();



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
    duration: 1,
    scrollTrigger: {
        trigger: '.page2',
        scroller: 'body',
        start: 'top 50%',
    }
})








gsap.to(".album" , {
    y: "-200",
    scrollTrigger: {
        trigger: '.page2',
        scroller: 'body',
        start: "top 45%",
        scrub: true,
        //pin: true,
        //markers: true
    }
})




gsap.from(".CycleName .one" , {
    x: '10%',
    y: '40%',
    rotation: -30,
    scrollTrigger: {
        trigger: '.CycleName',
        scroller: 'body',
        start: 'top 80%',
        end: 'top 65%',
        scrub: true,
    }
})

gsap.from(".CycleName .two" , {
    x: '5%',
    y: '-40%',
    rotation: -10,
    scrollTrigger: {
        trigger: '.CycleName',
        scroller: 'body',
        start: 'top 80%',
        end: 'top 65%',
        scrub: true,
    }
})

gsap.from(".CycleName .three" , {
    x: 10,
    y: '30%',
    rotation: 15,
    scrollTrigger: {
        trigger: '.CycleName',
        scroller: 'body',
        start: 'top 80%',
        end: 'top 65%',
        scrub: true,
    }
})

gsap.from(".CycleName .four" , {
    x: 10,
    y: '-20%',
    rotation: 30,
    scrollTrigger: {
        trigger: '.CycleName',
        scroller: 'body',
        start: 'top 80%',
        end: 'top 65%',
        scrub: true,
    }
})

gsap.from(".CycleName .five" , {
    x: 10,
    y: '25%',
    rotation: -20,
    scrollTrigger: {
        trigger: '.CycleName',
        scroller: 'body',
        start: 'top 80%',
        end: 'top 65%',
        scrub: true,
    }
})

gsap.from(".CycleName .six" , {
    x: 10,
    y: '-22%',
    rotation: -20,
    scrollTrigger: {
        trigger: '.CycleName',
        scroller: 'body',
        start: 'top 80%',
        end: 'top 65%',
        scrub: true,
    }
})






