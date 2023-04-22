let activeSlide = 0;
let slides;
let timeoutId;

window.onload = () =>{
    slides = document.getElementsByClassName("slide");
    let navButton = document.querySelector(".navButton");
    navButton.addEventListener("click", navMenu);
    
    showSlide(activeSlide);
    
    let arrowLeft = document.querySelector(".arrowLeft");
    arrowLeft.addEventListener("click", showPrevSlide);
    let arrowRight = document.querySelector(".arrowRight");
    arrowRight.addEventListener("click", showNextSlide);
}

function navMenu(){
    let navLinks = document.querySelector(".navLinks");

    if(navLinks.style.display === "flex"){
        navLinks.style.display = "none";
    }else {
        navLinks.style.display = "flex";
        navLinks.style.flexDirection = "column";
        navLinks.classList.add("overlay");
    }

}

function showSlide(slideIndex){

    clearTimeout(timeoutId);

    for(i=0;i<slides.length;i++){
        if(i===slideIndex){
            slides[i].style.display = "block";
        } else {
            slides[i].style.display = "none";
        }
    }
    
    timeoutId = setTimeout(showNextSlide, 5000)

}

function showNextSlide() {

    activeSlide++;
    if(activeSlide >= slides.length){
        activeSlide = 0;
    }
    showSlide(activeSlide);
}

function showPrevSlide(){
    activeSlide--;
    if(activeSlide < 0){
        activeSlide = (slides.length) - 1;
    }
    showSlide(activeSlide);
}