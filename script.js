const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});




var elemCont = document.querySelector("#elem-container")
var fixed = document.querySelector("#fixed-image")

elemCont.addEventListener("mouseover",function(){
    fixed.style.display = "block";
})
elemCont.addEventListener("mouseout",function(){
    fixed.style.display = "none";
})

var elems = document.querySelectorAll(".elem")
elems.forEach(function(e){
    e.addEventListener("mouseenter",function(){
    var img = e.getAttribute("data-image")
    fixed.style.backgroundImage = `url(${img})`
})
})


function swiper(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 10,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
    });
}
swiper();

// var menu = document.querySelector("nav h3")
// var full = document.querySelector("#full-scr")
// var navimg = document.querySelector("nav img")
// var flag = 0
// menu.addEventListener("click",function(){
//     if(flag==0){
//         full.style.top = 0
//         navimg.style.opacity = 0
//         flag =1
//     }
//     else{
//         full.style.top = "-100%"
//         navimg.style.opacity = 1
//         flag = 0
//     } 
// })
var load = document.querySelector("#loader")
setTimeout(function(){
    load.style.top = "-100%"
},3000)



var tl = gsap.timeline()
tl.from("nav img",{
    y:"-30",
    duration:0.5,
    opacity:0,
    delay:3.3
})
tl.from("nav h3",{
    y:"-30",
    duration:0.6,
    opacity:0,
    delay:0.8,
    stagger:.2
},"-=1")
tl.from("#nav-part2",{
    y:"-30",
    duration:0.6,
    opacity:0,
    delay:0.8,
    stagger:.2
},"-=1")

tl.from("#nav-part2 a",{
    y:"-30",
    duration:0.6,
    opacity:0,
    delay:0.8,
    stagger:.2
},"-=1")

tl.from("#left h3",{
    x:"-30",
    duration:0.6,
    opacity:0,
    delay:0.5,
},"-=1")

tl.from("#right h1",{
    x:"40",
    duration:0.6,
    opacity:0,
    delay:0.8,
},"-=1")

tl.from("#circle1",{
    y:"40",
    duration:0.6,
    opacity:0,
    delay:0.8,
},"-=1")
tl.from("#circle2",{
    y:"40",
    duration:0.6,
    opacity:0,
    delay:0.8,
},"-=1")
tl.from("#circle3",{
    y:"40",
    duration:0.6,
    opacity:0,
    delay:0.8,
},"-=1")

