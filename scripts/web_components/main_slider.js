const items = [
    {
        img: "img/recetas/tarta_queso_red_velvet.jpeg",
        alt: "Tarta de Queso Red Velvet",
        url: "red_velvet_cheesecake.html",
        descripcion: "Esta ingeniosa tarta combina dos postres clásicos: tarta de terciopelo rojo y tarta de queso."
    },
    {
        img: "img/articulos/kitchenaid_professional_5_plus.jpg",
        alt: "KitchenAid Pro 5 Plus",
        url: "#/",
        descripcion: "KitchenAid Pro 5 Plus. Un versátil ayudante en la cocina. Descubre todas las posibilidades"
    },
    {
        img: "img/recetas/tarta_mousse_chocolate.jpeg",
        alt:"Tarta de mousse de chocolate",
        url: "#/",
        descripcion: "Una combinación de mousse, tarta y cobertura de chocolate adornada con merengues."
    } 
]

class MainSliderComponent extends HTMLElement{

    activeSlide;
    timeoutId;
    enlace;
    img;
    descripcion;
    h6;
    css;
    wrapper;

    constructor(){
        super();

        this.css = document.createElement('link');
        this.css.setAttribute("rel", "stylesheet");
        this.css.setAttribute("href", "./styles/web_components/main_slider.css");

        this.activeSlide = 0;

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

        this.enlace = slide.appendChild(document.createElement('a'));
        this.enlace.setAttribute("class","img");
        
        this.img = this.enlace.appendChild(document.createElement('img'));
        
        this.descripcion = slide.appendChild(document.createElement('a'));
        this.descripcion.setAttribute("class","descripcion");
        this.h6 = this.descripcion.appendChild(document.createElement('h6'));
        
        const left = slide.appendChild(document.createElement('a'));
        left.setAttribute("class","left");
        left.innerHTML = "&#10094;";
        left.addEventListener("click", () =>{
            this.showPrevSlide();
        });
        
        const right = slide.appendChild(document.createElement('a'));
        right.setAttribute("class","right");
        right.innerHTML = "&#10095;";

        right.addEventListener("click",() =>{
            this.showNextSlide();
        });
        
        
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

        this.showSlide(this.activeSlide);
    }

    showSlide(slideIndex){
    
        clearTimeout(this.timeoutId);
        this.enlace.setAttribute("href",items[slideIndex].url);
        this.img.setAttribute("src", items[slideIndex].img);
        this.img.setAttribute("alt", items[slideIndex].alt);
        this.descripcion.setAttribute("href",items[slideIndex].url);
        this.h6.innerText = items[slideIndex].descripcion;
        
        this.timeoutId = setTimeout(() =>{
            this.showNextSlide();
        }, 5000)
    
    }
    
    showNextSlide() {
    
        this.activeSlide++;
        if(this.activeSlide >= items.length){
            this.activeSlide = 0;
        }
        this.showSlide(this.activeSlide);
    }
    
    showPrevSlide(){
        this.activeSlide--;
        if(this.activeSlide < 0){
            this.activeSlide = (items.length) - 1;
        }
        this.showSlide(this.activeSlide);
    }
    
}



customElements.define('app-main-slider', MainSliderComponent);