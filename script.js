function loco() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });



    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}
loco();

function dom(){
    var csr = document.querySelector(".cursor")
    var main = document.querySelector("#main")
    
    document.addEventListener("mousemove", function (dets) {
        csr.style.left = dets.x + 20 + "px"
        csr.style.top = dets.y + 20 + "px"
    })


    var crs = document.querySelector(".cursor")
    var vdo = document.querySelector("video")
    vdo.addEventListener("mouseenter", function (dets) {
        csr.style.backgroundColor = "#fff"
        csr.style.width = "50px"
        csr.style.height = "50px"
    
    })
    vdo.addEventListener("mouseleave", function (dets) {
        csr.style.backgroundColor = "#EDBFFF"
        csr.style.width = "20px"
        csr.style.height = "20px"
    })
    
 }
dom();


var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: "#main",
        // markers: true,
        start: "top 27%",
        end: "top 0%",
        scrub: 3
    }
})
tl.to(".page1 h1", {
    x: -100,
}, "a")
tl.to(".page1 h2", {
    x: 100
}, "a")
tl.to(".page1 video", {
    width: "90%",
}, "a")



var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: "#main",
        // markers: true,
        start: "top -127%",
        end: "top 130%",
        scrub: 3
    }
})
tl2.to("#main", {
    backgroundColor: "#fff"
})



var tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page3",
        scroller: "#main",
        // markers: true,
        start: "top -200%",
        end: "top -130%",
        scrub:2
    }
})
tl3.to("#main",{
    backgroundColor:"#000"
})



function box(){
    var boxs = document.querySelectorAll(".box")
    var csr = document.querySelector(".cursor")
    boxs.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        var img = elem.getAttribute("data-image")
        csr.style.width = "450px"
        csr.style.height = "380px"
        csr.style.borderRadius = "0"
        csr.style.backgroundImage = `url(${img})`
    })
    elem.addEventListener("mouseleave", function(){
        elem.style.backgroundColor = "transparent"
        csr.style.width = "20px"
        csr.style.height = "20px"
        csr.style.borderRadius = "50%"
        csr.style.backgroundImage = `none`
    })
    })
}
box();


function nav(){
    var h4 = document.querySelectorAll("#nav h4")
    var p = document.querySelector("#purpal")
    h4.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        p.style.display = "block"
        p.style.opacity = "1"
    })
    elem.addEventListener("mouseleave",function(){
        p.style.display = "none"
        p.style.opacity = "0"
    })
    })
}
nav();


function footer(){
    var tl4 = gsap.timeline({
        scrollTrigger:{
            trigger:".left1 h1",
            scroller:"#main",
            // markers:true,
            start:'top 50%',
            end:"top 50%",
            scrub:2,
        },
    })
    
    tl4.to("h1",{
      rotate:"0deg",
        top:"-160%"
    })
}
footer();

    

