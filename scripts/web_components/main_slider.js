/*

HTML template:

<div class="wrapper">
    <div class="slide">
        <a class= "img" href="#/">
            <img src="" alt="">
        </a>
        <a class= "descripcion" href="#/">
            <h6>Un texto descriptivo corto que explique un poco la imagen</h6>
        </a>
        <a class= "left" href="#/">&#10094;</a>
        <a class= "right" href="index.html">&#10095</a>
        <div class="autorCard">
            <app-autor-card class="autorCard"></app-autor-card>
        </div>
    </div>
</div>

*/


let activeSlide = 0;
let timeoutId;
let slides;
let enlace;
let img;
let descripcion;
let h6;

const items = [
    {
        img: "img/recetas/tarta_queso_red_velvet.jpeg",
        alt: "Tarta de Queso Red Velvet",
        url: "red_velvet_cheesecake.html",
        descripcion: "Esta ingeniosa tarta combina dos postres clásicos: tarta de terciopelo rojo y tarta de queso."
    },
    {
        img: "img/recetas/tarta_mousse_chocolate.jpeg",
        alt:"Tarta de mousse de chocolate",
        url: "#/",
        descripcion: "Una combinación de mousse, tarta y cobertura de chocolate adornada con merengues."
    },
    {
        img: "img/articulos/kitchenaid_professional_5_plus.jpg",
        alt: "Kitchenaid Professional 5 plus",
        url: "#/",
        descripcion: "KitchenAid Pro 5 Plus. Un versátil ayudante en la cocina"
    }
]

class MainSliderComponent extends HTMLElement{

    css;
    wrapper;

    constructor(){
        super();

        this.css = document.createElement('link');
        this.css.setAttribute("rel", "stylesheet");
        this.css.setAttribute("href", "./styles/web_components/main_slider.css");

        this.wrapper = document.createElement('div');
        this.wrapper.setAttribute("class","wrapper");

        
    }

    connectedCallback(){
        this.attachShadow({
            mode: 'open'
        })

        this.shadowRoot.appendChild(this.css);

        const slide = this.wrapper.appendChild(document.createElement('div'));
        slide.setAttribute("class","slide");

        enlace = slide.appendChild(document.createElement('a'));
        enlace.setAttribute("class","img");
        
        img = enlace.appendChild(document.createElement('img'));
        
        descripcion = slide.appendChild(document.createElement('a'));
        descripcion.setAttribute("class","descripcion");
        h6 = descripcion.appendChild(document.createElement('h6'));
        
        const left = slide.appendChild(document.createElement('a'));
        left.setAttribute("class","left");
        left.innerHTML = "&#10094;";
        left.addEventListener("click", showPrevSlide);
        
        const right = slide.appendChild(document.createElement('a'));
        right.setAttribute("class","right");
        right.innerHTML = "&#10095;";
        right.addEventListener("click", showNextSlide);
        
        
        const autorCard = slide.appendChild(document.createElement('div'));
        autorCard.setAttribute("class","autorCard");
        autorCard.appendChild(document.createElement('app-autor-card'));
        
        const vacio1 = slide.appendChild(document.createElement('div'));
        vacio1.setAttribute("class","vacio1");
        const vacio2 = slide.appendChild(document.createElement('div'));
        vacio2.setAttribute("class","vacio2");
        const vacio3 = slide.appendChild(document.createElement('div'));
        vacio3.setAttribute("class","vacio3");
        const vacio4 = slide.appendChild(document.createElement('div'));
        vacio4.setAttribute("class","vacio4");
        const vacio5 = slide.appendChild(document.createElement('div'));
        vacio5.setAttribute("class","vacio5");
        
        
        this.shadowRoot.appendChild(this.wrapper);

        
        showSlide(activeSlide);
        
        // para que es esto?????
        // es para responsive ....
        /* window.addEventListener("resize",() =>{
            showSlide(activeSlide);
        }) */
        
    }
    
}

function showSlide(slideIndex){
    
    clearTimeout(timeoutId);
    enlace.setAttribute("href",items[slideIndex].url);
    img.setAttribute("src", items[slideIndex].img);
    img.setAttribute("alt", items[slideIndex].alt);
    descripcion.setAttribute("href",items[slideIndex].url);
    h6.innerText = items[slideIndex].descripcion;
    
    timeoutId = setTimeout(showNextSlide, 5000)

}

function showNextSlide() {

    activeSlide++;
    if(activeSlide >= items.length){
        activeSlide = 0;
    }
    showSlide(activeSlide);
}

function showPrevSlide(){
    activeSlide--;
    if(activeSlide < 0){
        activeSlide = (items.length) - 1;
    }
    showSlide(activeSlide);
}

customElements.define('app-main-slider', MainSliderComponent);