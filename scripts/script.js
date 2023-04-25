let body;

window.onload = () =>{
    body = document.querySelector("body");
    body.addEventListener('navListToggle', toggleScroll);
    console.log(body.overflowY);
}

function toggleScroll(){
    if(body.style.overflow === "hidden"){
        body.style.overflow = "visible";
    } else {
        body.style.overflow = "hidden";
    }
}