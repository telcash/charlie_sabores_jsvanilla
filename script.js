let activeSlide = 0;

window.onload = () =>{

    let navButton = document.querySelector(".navButton");
    navButton.addEventListener("click", navMenu);
    mainSlider();
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

function mainSlider(){
    let slides = document.getElementsByClassName("slide");
    for(i=0;i<slides.length;i++){
        if(i===activeSlide){
            slides[i].style.display = "block";
        } else {
            slides[i].style.display = "none";
        }
    }
    activeSlide++;
    if(activeSlide===slides.length) {
        activeSlide = 0;
    }
    setTimeout(mainSlider,3000);
}
