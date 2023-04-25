let body;

window.onload = () =>{
    body = document.querySelector("body");
    body.addEventListener('navListToggle', toggleScroll);
    console.log(body.overflowY);
}

function toggleScroll(){
    if(body.style.overflowY === "hidden"){
        body.style.overflowY = "visible";
    } else {
        body.style.overflowY = "hidden";
    }
}