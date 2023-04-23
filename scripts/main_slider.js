let activeSlide = 0;
let slides;
let timeoutId;

const mainSliderTemplate = document.createElement('template');
mainSliderTemplate.innerHTML=`
<div class="wrapper">
    <div class="slide">
        <a class="tagImg" href="#">Link imagen</a>
        <img src="img/slider_img_test_1.jpeg" alt="">
    </div>
    <div class="slide">
        <a class="tagImg" href="#">Link imagen</a>
        <img src="img/slider_img_test_2.jpeg" alt="">
    </div>
    <div class="slide">
        <a class="tagImg" href="#">Link imagen</a>
        <img src="img/slider_img_test_3.jpeg" alt="">
    </div>
    <div>
        <a class="arrowLeft">&#10094;</a>
        <a class="arrowRight">&#10095;</a>
    </div>
</div>
`;

class MainSliderComponent extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.attachShadow({
            mode: 'open'
        })

        const cssLink = document.createElement('link');
        cssLink.setAttribute("rel", "stylesheet");
        cssLink.setAttribute("href", "styles/main_slider.css");

        this.shadowRoot.appendChild(cssLink);
        this.shadowRoot.appendChild(mainSliderTemplate.content.cloneNode(true));

        slides = this.shadowRoot.querySelectorAll(".slide");
        
        showSlide(activeSlide);
        
        let arrowLeft = this.shadowRoot.querySelector(".arrowLeft");
        arrowLeft.addEventListener("click", showPrevSlide);
        let arrowRight = this.shadowRoot.querySelector(".arrowRight");
        arrowRight.addEventListener("click", showNextSlide);
    }
    
}

function showSlide(slideIndex){

    clearTimeout(timeoutId);

    for(let i=0;i<slides.length;i++){
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

customElements.define('app-main-slider', MainSliderComponent);