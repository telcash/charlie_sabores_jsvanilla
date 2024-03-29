class ArticuloCardComponent extends HTMLElement{

    css;
    wrapper;
    url;

    constructor(){
        super();

        this.css = document.createElement('link');
        this.css.setAttribute("rel", "stylesheet");
        this.css.setAttribute("href", "styles/web_components/articulo_card.css");

        this.wrapper = document.createElement('div');
        this.wrapper.setAttribute("class","wrapper");

        this.url = this.hasAttribute("url") ? this.getAttribute("url") : "#/";
    }
    
    connectedCallback(){
        this.attachShadow({
            mode: 'open'
        })
        this.shadowRoot.appendChild(this.css);
        
        const imgContainer = this.wrapper.appendChild(document.createElement('div'));
        imgContainer.setAttribute("class","imgContainer");
        
        const img = imgContainer.appendChild(document.createElement('img'));
        img.src = this.hasAttribute("img") ? this.getAttribute("img") : "img/default/articulo.png";
        img.alt = this.hasAttribute("alt") ? this.getAttribute("alt") 
            :(this.hasAttribute("nombre") ? this.getAttribute(nombre) : "");
        
        const info = this.wrapper.appendChild(document.createElement('div'));
        info.setAttribute("class","info");
        
        const nombre = info.appendChild(document.createElement('h4'));
        nombre.innerText = this.hasAttribute("nombre") ? this.getAttribute("nombre") : "Artículo de interés";
        
        /* const descripcion = info.appendChild(document.createElement('p'));
        descripcion.innerText = this.hasAttribute("descripcion") ? this.getAttribute("descripcion") : "Esta info te puede interesar..."; */
        
        this.shadowRoot.appendChild(this.wrapper);
        this.wrapper.addEventListener("click", () => {
            window.location = this.url;
        })
    }
}

customElements.define('app-articulo-card', ArticuloCardComponent);