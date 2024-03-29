class RecetaCardComponent extends HTMLElement{

    css;
    wrapper;
    url;

    constructor(){
        super();

        this.css = document.createElement('link');
        this.css.setAttribute("rel", "stylesheet");
        this.css.setAttribute("href", "styles/web_components/receta_card.css");
        this.wrapper = document.createElement('div');
        this.wrapper.setAttribute("class","wrapper");

    }
    
    connectedCallback(){
        this.attachShadow({
            mode: 'open'
        })

        this.url = this.hasAttribute("url") ? this.getAttribute("url") : "#/";
        
        this.shadowRoot.appendChild(this.css);

        const imgContainer = this.wrapper.appendChild(document.createElement('div'));
        imgContainer.setAttribute("class","imgContainer");

        const img = imgContainer.appendChild(document.createElement('img'));
        img.src = this.hasAttribute("img") ? this.getAttribute("img") : "img/default/receta.png";
        img.alt = this.hasAttribute("alt") ? this.getAttribute("alt") 
            :(this.hasAttribute("nombre") ? this.getAttribute(nombre) : "");
            
        const info = this.wrapper.appendChild(document.createElement('div'));
        info.setAttribute("class","info");

        const nombre = info.appendChild(document.createElement('h4'));
        nombre.innerText = this.hasAttribute("nombre") ? this.getAttribute("nombre") : "Receta";

        const descripcion = info.appendChild(document.createElement('p'));
        descripcion.innerText = this.hasAttribute("descripcion") ? this.getAttribute("descripcion") : "Disfruta esta receta...";

        const autorContainer = this.wrapper.appendChild(document.createElement('div'));
        autorContainer.setAttribute("class","autorContainer");
        
        const autorCard = autorContainer.appendChild(document.createElement('app-autor-card'));
        autorCard.setAttribute("class","autorCard");

        this.shadowRoot.appendChild(this.wrapper);
        
        this.wrapper.addEventListener("click", () => {
            window.location = this.url;
        })
    }
}

customElements.define('app-receta-card', RecetaCardComponent);
