class ExtWebComponent extends HTMLElement{

    css;
    wrapper;
    websites;

    constructor(){
        super();

        this.css = document.createElement('link');
        this.css.setAttribute("rel", "stylesheet");
        this.css.setAttribute("href", "styles/web_components/ext_web.css");

        this.wrapper = document.createElement('div');
        this.wrapper.setAttribute("class","wrapper");

        this.websites = [
            {
                nombre: "De rechupete",
                descripcion: "Recetas de cocina que siempre salen",
                img: "img/icons/ext_websites/derechupete_logo.png",
                enlace:"https://www.recetasderechupete.com"
            },
            {
                nombre: "Nestle cocina",
                descripcion: "Platos de temporada sencillos y sabrosos. Entra y descubre la Cocina Nestlé",
                img: "img/icons/ext_websites/nestle_cocina.png",
                enlace:"https://www.nestlecocina.es/"
            },
            {
                nombre: "Mercadona",
                descripcion: "Siempre precios bajos. Tu supermercado de confianza.",
                img: "img/icons/ext_websites/mercadona.png",
                enlace:"https://www.mercadona.es"
            }
        ]
    }

    connectedCallback(){
        this.attachShadow({
            mode: 'open'
        })

        this.shadowRoot.appendChild(this.css);

        for(const web of this.websites){
    
            const webSite = this.wrapper.appendChild(document.createElement('div'));
            webSite.setAttribute("class","webSite");
            webSite.addEventListener("click", () => {
                window.open(web.enlace);
            })

            const imgContainer = webSite.appendChild(document.createElement('div'));
            imgContainer.setAttribute("class","imgContainer");

            const img = imgContainer.appendChild(document.createElement('img'));
            img.src = web.img;
            img.alt = web.nombre;

            const descripcion = webSite.appendChild(document.createElement('div'));
            descripcion.setAttribute("class","descripcion");

            const parrafo = descripcion.appendChild(document.createElement('p'));
            parrafo.innerText = web.descripcion;
        }        

        this.shadowRoot.appendChild(this.wrapper);

    }
}

customElements.define('app-ext-web', ExtWebComponent);
