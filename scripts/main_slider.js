/*

HTML template:

<div class="wrapper">
    <div class="slide">
        <a class="tagImg" href="#">Sorpréndelos en su día con esta deliciosa torta de chocolate libre de gluten</a>
        <img src="img/chocolate_mousse_cake.jpeg" alt="Chocolate mousse cake">
    </div>
    <div class="slide">
        <a class="tagImg" href="#">Un texto descriptivo corto que explique un poco la imagen</a>
        <img src="img/red_velvet_cheesecake.jpeg" alt="Red velvet cheesecake">
    </div>
    <div class="slide">
        <a class="tagImg" href="#">Un texto descriptivo corto que explique un poco la imagen</a>
        <img src="img/kitchenaid_professional_5_plus.jpg" alt="Kitchenaid Professional 5 plus">
    </div>
    <div>
        <a class="arrowLeft">&#10094;</a>
        <a class="arrowRight">&#10095;</a>
    </div>
</div>

*/


let activeSlide = 0;
let timeoutId;
let containers = [];

class MainSliderComponent extends HTMLElement{

    css;
    commonCss;
    wrapper;
    slides;

    constructor(){
        super();

        this.css = document.createElement('link');
        this.css.setAttribute("rel", "stylesheet");
        this.css.setAttribute("href", "styles/main_slider.css");

        this.commonCss = document.createElement('link');
        this.commonCss.setAttribute("rel", "stylesheet");
        this.commonCss.setAttribute("href", "styles/styles.css");

        this.wrapper = document.createElement('div');
        this.wrapper.setAttribute("class","wrapper");

        this.slides = [
            {
                nombre: "Chocolate Mousse Cake",
                img: "img/chocolate_mousse_cake.jpeg",
                enlace: "#",
                descripcion: "Sorpréndelos en su día con esta deliciosa torta de chocolate libre de gluten"
            },
            {
                nombre: "Red Velvet Cheesecake",
                img: "img/red_velvet_cheesecake.jpeg",
                enlace: "#",
                descripcion: "Una deliciosa combinación de dos postres clásicos"
            },
            {
                nombre: "Kitchenaid Professional 5 plus",
                img: "img/kitchenaid_professional_5_plus.jpg",
                enlace: "#",
                descripcion: "Un versátil ayudante para toda la vida"
            }
        ]
    }

    connectedCallback(){
        this.attachShadow({
            mode: 'open'
        })
        
        this.shadowRoot.appendChild(this.css);
        this.shadowRoot.appendChild(this.commonCss);

        let i = 0;
        for(const slide of this.slides){
            containers[i] = this.wrapper.appendChild(document.createElement('div'));
            containers[i].setAttribute("class","slide");

            const a = containers[i].appendChild(document.createElement('a'));
            a.setAttribute("class","tagImg");
            a.setAttribute("href", slide.enlace);
            a.innerText = slide.descripcion;

            const img = containers[i].appendChild(document.createElement('img'));
            img.setAttribute("src", slide.img);
            img.setAttribute("alt", slide.nombre);
            i++;
        }

        const div = this.wrapper.appendChild(document.createElement('div'));

        const arrowLeft = div.appendChild(document.createElement('a'));
        arrowLeft.setAttribute("class","arrowLeft");
        arrowLeft.innerHTML = "&#10094;";

        const arrowRight = div.appendChild(document.createElement('a'));
        arrowRight.setAttribute("class","arrowRight");
        arrowRight.innerHTML = "&#10095;";

        this.shadowRoot.appendChild(this.wrapper);
        
        showSlide(activeSlide);
        arrowLeft.addEventListener("click", showPrevSlide);
        arrowRight.addEventListener("click", showNextSlide);
    }
    
}

function showSlide(slideIndex){

    clearTimeout(timeoutId);

    for(let i=0;i<containers.length;i++){
        if(i===slideIndex){
            containers[i].style.display = "block";
        } else {
            containers[i].style.display = "none";
        }
    }
    
    timeoutId = setTimeout(showNextSlide, 5000)

}

function showNextSlide() {

    activeSlide++;
    if(activeSlide >= containers.length){
        activeSlide = 0;
    }
    showSlide(activeSlide);
}

function showPrevSlide(){
    activeSlide--;
    if(activeSlide < 0){
        activeSlide = (containers.length) - 1;
    }
    showSlide(activeSlide);
}

customElements.define('app-main-slider', MainSliderComponent);