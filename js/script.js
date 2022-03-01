$('.myTiltt').tilt({
    reset: false,
    scale:0,
})
let preloader = document.querySelector(".preloader");
window.addEventListener("load",()=>{
    preloader.classList.add("proloader_hide")
})


//Sticky Menu JS
let navabr = document.querySelector(".navbar");
let links = document.querySelectorAll(".link");
let toggle = document.querySelector(".toggle");

window.addEventListener("scroll", ()=>{
    navabr.classList.toggle("sticky", window.scrollY > 200);
})



//Video js
var play = document.querySelector(".play");
var pause = document.querySelector(".pause");
var slide = document.querySelector(".slide");
var video = document.querySelector("video");

play.addEventListener("click",()=>{
    slide.style.left = "0%";
    video.play()
})
pause.addEventListener("click",()=>{
    slide.style.left = "50%";
    video.pause()
})

//MixItUp JS
// let selector = document.querySelector(".mix_item_container");
var mixer = mixitup('.mix_item_container');

//VenuBox JS
// new VenoBox();


new VenoBox({
    // selector: ".venubox",
    spinner:"wave",
    navSpeed: 2000,
    overlayColor: "#21325ee5"
});

// Back to Top Start
let backToTop = document.querySelector(".back_to_top");
window.addEventListener("scroll",()=>{
    (window.scrollY >200) ? backToTop.style.visibility = "visible" : backToTop.style.visibility = "hidden";
    
})


// Back to Top End
AOS.init();
