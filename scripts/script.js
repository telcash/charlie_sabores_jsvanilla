let header;
let sticky;
let content;

window.onload = () =>{
    wrapper = document.querySelector("#wrapper");
    wrapper.style.opacity = 1;
    header = document.querySelector("header");
    sticky = header.offsetTop;
    content = header.nextElementSibling;
    wrapper.addEventListener('navButtonClicked', toggleScrollBar);
    
}

window.onscroll = () =>{
    if (header !== undefined){
        stickyHeader();
    }
}

function toggleScrollBar(){
    if(wrapper.style.overflow === "hidden"){
        wrapper.style.overflow = "visible";
    } else {
        wrapper.style.overflow = "hidden";
    }
}

function stickyHeader(){
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    }else{
        header.classList.remove("sticky");
    }
    if (header.classList.contains("sticky")){
        content.style.paddingTop = "40px";
    } else {
        content.style.paddingTop = "0";
    }
}