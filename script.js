const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function circlefollowmotion(){
  window.addEventListener("mousemove",function (e){
    this.document.querySelector("#minicircle").style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
  })
}

circlefollowmotion();