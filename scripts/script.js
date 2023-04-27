let body;
let header;
let sticky;
let content;

window.onload = () =>{
    body = document.querySelector("body");
    body.addEventListener('navButtonClicked', toggleScroll);
    header = document.querySelector("header");
    sticky = header.offsetTop;
    content = header.nextElementSibling;
    console.log(content);
    header.style.paddingTop

}

window.onscroll = () =>{
    stickyHeader();
}

function toggleScroll(){
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