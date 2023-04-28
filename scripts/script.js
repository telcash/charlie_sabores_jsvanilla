let body;
let header;
let sticky;
let content;

window.onload = () =>{
    body = document.querySelector("body");
    header = document.querySelector("header");
    sticky = header.offsetTop;
    content = header.nextElementSibling;
    body.addEventListener('navButtonClicked', toggleScrollBar);
}

window.onscroll = () =>{
    if (header !== undefined){
        stickyHeader();
    }
}

function toggleScrollBar(){
    if(body.style.overflow === "hidden"){
        body.style.overflow = "visible";
    } else {
        body.style.overflow = "hidden";
    }
}

function stickyHeader(){
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    }else{
        header.classList.remove("sticky");
    }
    if (header.classList.contains("sticky")){
        content.style.paddingTop = "80px";
    } else {
        content.style.paddingTop = "0";
    }
}