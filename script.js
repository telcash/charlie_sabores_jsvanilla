

function navMenu(){
    let navLinks = document.querySelector(".navLinks");
    let mainLogo = document.querySelector(".mainLogo");
    let searchBar = document.querySelector(".searchBar");

    if(navLinks.style.display === "flex"){
        navLinks.style.display = "none";
    }else {
        navLinks.style.display = "flex";
        navLinks.style.flexDirection = "column";
    }
    
    /* navLinks.forEach(element => {
        element.style.display = "none"
    }); */
}



window.onload = () =>{

    let navButton = document.querySelector(".navButton");
    navButton.addEventListener("click", navMenu);
    
    // Para cargar id wrapper por codigo
    //let wrapper = document.querySelector("body").children[0];
    //wrapper.setAttribute("id","wrapper");


}

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon 
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  */