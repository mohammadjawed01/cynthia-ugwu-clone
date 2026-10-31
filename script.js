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
  .to(".boundingelem", {
    y: 0,
    duration: 2,
    ease: Expo.easeInOut,
    // stagger: .2
  })
  .from(".boundingelemdown", {
    y: '-10',
    opacity: 0,
    duration: 1,
    delay: -1,
    ease: Expo.easeInOut,
    stagger: .2
  })
  .from("#hero-footer", {
    y: 5,
    opacity: 0,
    duration: 1.5,
    delay: -1,
    ease: Expo.easeInOut,
  })
}


let timeout;
function mousefollowanimation(){
  clearTimeout(timeout);
  let xscale = 1;
  let yscale = 1;

  let xprev = 0;
  let yprev = 0;

  window.addEventListener('mousemove', function(e){
    xscale = gsap.utils.clamp(.8,1.2, e.clientX - xprev);
    yscale = gsap.utils.clamp(.8,1.2, e.clientY - yprev);

    xprev = e.clientX;
    yprev = e.clientY;

    circlefollowmotion(xscale, yscale);

    timeout = setTimeout(function(){
      this.document.querySelector("#minicircle").style.transform = `translate(${e.clientX}px, ${e.clientY}px) scale(1,1)`;
    },100)
  })
}
mousefollowanimation();

function circlefollowmotion(xscale, yscale){
  window.addEventListener("mousemove",function (e){
    this.document.querySelector("#minicircle").style.transform = `translate(${e.clientX}px, ${e.clientY}px) scale(${xscale}, ${yscale})`;
  })
}

circlefollowmotion();
firstPageAnim(); 

document.querySelectorAll(".elem").forEach(function(elem){
  elem.addEventListener("mouseover", function(e){
    let diff = e.clientY - elem.getBoundingClientRect().top;

    gsap.to(elem.querySelector("img"),{
      opacity: 1,
      ease: Power1,
      top: diff,
      left: e.clientX
    })
  })
})