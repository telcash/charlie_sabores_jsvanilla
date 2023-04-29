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

const items = [
    {
        img: "img/recetas/tarta_mousse_chocolate.jpeg",
        alt:"Tarta de mousse de chocolate",
        url: "#/",
        descripcion: "Una combinación de mousse, tarta y cobertura de chocolate adornada con merengues."
    },
    {
        img: "img/recetas/tarta_queso_red_velvet.jpeg",
        alt: "Tarta de Queso Red Velvet",
        url: "#/",
        descripcion: "Esta ingeniosa tarta combina dos postres clásicos: tarta de terciopelo rojo y tarta de queso."
    },
    {
        img: "img/articulos/kitchenaid_professional_5_plus.jpg",
        alt: "Kitchenaid Professional 5 plus",
        url: "#/",
        descripcion: "Un versátil ayudante para todas tus preparaciones. Descubre todas sus funciones."
    }
]

class MainSliderComponent extends HTMLElement{

    css;
    commonCss;
    wrapper;

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

        
    }

    connectedCallback(){
        this.attachShadow({
            mode: 'open'
        })

        this.shadowRoot.appendChild(this.css);
        this.shadowRoot.appendChild(this.commonCss);


        for(const item of items){
            const slide = this.wrapper.appendChild(document.createElement('div'));
            slide.setAttribute("class","slide");

            const enlace = slide.appendChild(document.createElement('a'));
            enlace.setAttribute("class","img");
            enlace.setAttribute("href",item.url);

            const img = enlace.appendChild(document.createElement('img'));
            img.setAttribute("src", item.img);
            img.setAttribute("alt", item.alt);

            const descripcion = slide.appendChild(document.createElement('a'));
            descripcion.setAttribute("class","descripcion");
            descripcion.setAttribute("href",item.url);
            const h6 = descripcion.appendChild(document.createElement('h6'));
            h6.innerText = item.descripcion;

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
        }
        
        this.shadowRoot.appendChild(this.wrapper);

        slides = this.shadowRoot.querySelectorAll(".slide");

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

    for(let i=0;i<slides.length;i++){
        if(i===slideIndex){
            //if(window.innerWidth >= 1024){
                slides[i].style.display = "grid";
                //slides[i].style.gridTemplateRows = "6fr 4fr 25px";
                //slides[i].style.gridTemplateColumns = "1fr 18fr 1fr";
            //} else{
            //    containers[i].style.display = "block";
            //}
        } else {
            slides[i].style.display = "none";
        }
    }
    
    //timeoutId = setTimeout(showNextSlide, 5000)

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