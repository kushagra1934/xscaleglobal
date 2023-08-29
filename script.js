


function init (){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}
init()

var crsr=document.querySelector(".cursor")
var main=document.querySelector(".main")
document.addEventListener("mousemove",function(dets){
  crsr.style.left=dets.x+20+"px"
  crsr.style.top=dets.y+20+"px"
})


var tl=gsap.timeline({
    scrollTrigger:{
        trigger:".page1 h1",
        scroller:".main",
        markers:true,
        start:"top 27%",
        end:"top 0%",
        scrub:3

    }
})
tl.to(".page1 h1",{
    x:-100,

}, "anim")
tl.to(".page1 h2",{
    x:100
},"anim")
tl.to(".page1 .gif",{
    width:"70%",
    borderRadius:"5px"
},"anim")


var tl2=gsap.timeline({
  scrollTrigger:{
      trigger:".page1 h1",
      scroller:".main",
      markers:true,
      start:"top -115%",
      end:"top -120%",
      scrub:3

  }
})
tl2.to(".main",{
  backgroundColor:"#fff"
})

var tl3=gsap.timeline({
  scrollTrigger:{
      trigger:".page1 h1",
      scroller:".main",
      markers:true,
      start:"top -280%",
      end:"top -300%",
      scrub:3

  }
})

tl3.to(".main",{
  backgroundColor:"#000"
})

var boxes=document.querySelectorAll(".box")
boxes.forEach(function(elem){
  elem.addEventListener("mouseenter",function(){
    var att=elem.getAttribute("data-image")
    crsr.style.width="200px"
    crsr.style.height="100px"
    crsr.style.borderRadius="0"
    crsr.style.backgroundImage=`url(${att})`
  })
  elem.addEventListener("mouseleave",function(){
    elem.style.backgroundColor="transparent"
    crsr.style.width = "20px"
    crsr.style.height = "20px"
    crsr.style.borderRadius = "50%"
    crsr.style.backgroundImage = `none`
  })
})


