const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function firstPageAnim(){
  let t1 = gsap.timeline();
  t1.from("#nav", {
    y: '-10',
    opacity: 0,
    duration: 1,
    ease: Expo.easeInOut
  })
}

function circlefollowmotion(){
  window.addEventListener("mousemove",function (e){
    this.document.querySelector("#minicircle").style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
  })
}

circlefollowmotion();
firstPageAnim(); 