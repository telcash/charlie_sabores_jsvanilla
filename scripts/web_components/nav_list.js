class NavListComponent extends HTMLElement{
    css;
    wrapper;
    options;

    constructor(){
        super();

        this.css = document.createElement('link');
        this.css.setAttribute("rel", "stylesheet");
        this.css.setAttribute("href", "./styles/web_components/nav_list.css");

        this.wrapper = document.createElement('div');
        this.wrapper.setAttribute("class","wrapper");

        this.options = [
            {
                nombre: "Inicio",
                url: "index.html"
            },
            {
                nombre: "Recetas",
                url: "recetas.html"
            },
            {
                nombre: "Artículos",
                url: "articulos.html"
            },
            {
                nombre: "Contacto",
                url: "contacto.html"
            }
        ]

    }

    connectedCallback(){
        this.attachShadow({
            mode: 'open'
        })

        this.shadowRoot.appendChild(this.css);

        const lista = this.wrapper.appendChild(document.createElement('ul'));

        for(const option of this.options){
            const item = lista.appendChild(document.createElement('li'));
            const enlace = document.createElement('a');
            enlace.href = option.url;
            enlace.innerText = option.nombre;
            item.appendChild(enlace);
        }
        
        this.shadowRoot.appendChild(this.wrapper);

    }
}

customElements.define('app-nav-list', NavListComponent);