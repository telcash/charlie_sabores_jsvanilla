/*

HTML template:

<div class="wrapper">
    <div class="container">
        <div class="descSlide">
            <a href="#/">Un texto descriptivo corto que explique un poco la imagen</a>
            <app-autor-card></app-autor-card>
        </div>
        <a href="#/"><img src="" alt=""></a>
    </div>
    <div>
        <a class="arrowLeft">&#10094;</a>
        <a class="arrowRight">&#10095;</a>
    </div>
</div>

*/


let activeSlide = 0;
let timeoutId;
let containers;

class MainSliderComponent extends HTMLElement{

    scriptsSrcs;
    scripts;
    css;
    commonCss;
    wrapper;
    slides;

    constructor(){
        super();

        this.scriptsSrcs = ["scripts/autor_card.js"];
        this.scripts = [];
        for(const src of this.scriptsSrcs){
            const script = document.createElement('script');
            script.setAttribute("src",src);
            this.scripts.push(script);
        }

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
                img: "img/recetas/chocolate_mousse_cake_vertical.jpeg",
                enlace: "#/",
                descripcion: "Sorpréndelos en su día con esta deliciosa torta de chocolate"
            },
            {
                nombre: "Red Velvet Cheesecake",
                img: "img/recetas/red_velvet_cheesecake_vertical.jpeg",
                enlace: "#/",
                descripcion: "Una deliciosa combinación de dos postres clásicos"
            },
            {
                nombre: "Kitchenaid Professional 5 plus",
                img: "img/articulos/kitchenaid_professional_5_plus_vertical.jpg",
                enlace: "#/",
                descripcion: "Un versátil ayudante para toda la vida"
            }
        ]
    }

    connectedCallback(){
        this.attachShadow({
            mode: 'open'
        })
        
        for(const script of this.scripts){
            this.shadowRoot.appendChild(script);
        }

        this.shadowRoot.appendChild(this.css);
        this.shadowRoot.appendChild(this.commonCss);

        let i = 0;
        for(const slide of this.slides){
            const container = this.wrapper.appendChild(document.createElement('div'));
            container.setAttribute("class","container");

            const descSlide = container.appendChild(document.createElement('div'));
            descSlide.setAttribute("class","descSlide");

            let a = descSlide.appendChild(document.createElement('a'));
            a.setAttribute("href", slide.enlace);
            a.innerText = slide.descripcion;

            const autorCard = descSlide.appendChild(document.createElement('app-autor-card'));
            autorCard.setAttribute("class","autorCard");

            a = container.appendChild(document.createElement('a'));
            a.setAttribute("href", slide.enlace);

            const img = a.appendChild(document.createElement('img'));
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
        
        containers = this.shadowRoot.querySelectorAll(".container");

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
    
    //timeoutId = setTimeout(showNextSlide, 5000)

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