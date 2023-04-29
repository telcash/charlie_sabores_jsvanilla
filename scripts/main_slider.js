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


<div class="wrapper">
        <a class= "imgContainer" href="recetas.html"><img src="img/recetas/chocolate_mousse_cake_vertical.jpeg" alt=""></a>
        <a class= "desc" href="#/">Un texto descriptivo corto que explique un poco la imagen</a>
        <a class= "left" href="#/">&#10094;</a>
        <a class= "right" href="index.html">&#10095;</a>
        <app-autor-card class="autorCard"></app-autor-card>
</div>

*/


let activeSlide = 0;
let timeoutId;
let containers;

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
                nombre: "Tarta de mousse de chocolate",
                img: "img/recetas/chocolate_mousse_cake_vertical.jpeg",
                enlace: "#/",
                descripcion: "Una combinación de mousse, tarta y cobertura de chocolate adornada con merengues."
            },
            {
                nombre: "Tarta de Queso Red Velvet",
                img: "img/recetas/red_velvet_cheesecake_vertical.jpeg",
                enlace: "#/",
                descripcion: "Esta ingeniosa tarta combina dos postres clásicos: tarta de terciopelo rojo y tarta de queso."
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

        window.addEventListener("resize",() =>{
            console.log("resize");
            showSlide(activeSlide);
        })
    }
    
}

function showSlide(slideIndex){

    clearTimeout(timeoutId);
    for(let i=0;i<containers.length;i++){
        if(i===slideIndex){
            if(window.innerWidth >= 1024){
                containers[i].style.display = "flex";
            } else{
                containers[i].style.display = "block";
            }
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