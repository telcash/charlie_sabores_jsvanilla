
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

window.onload = () =>{

    let navButton = document.querySelector(".navButton");
    navButton.addEventListener("click", navMenu);

}
