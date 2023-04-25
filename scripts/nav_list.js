/*
HTML template:

<div class="wrapper">
    <ul>
        <li><a href="">Navegar a ...</a></li>
        <li><a href="">Navegar a ...</a></li>
        <li><a href="">Navegar a ...</a></li>
    </ul>
</div>

*/

class NavListComponent extends HTMLElement{
    css;
    commonCss;
    wrapper;
    options;

    constructor(){
        super();

        this.css = document.createElement('link');
        this.css.setAttribute("rel", "stylesheet");
        this.css.setAttribute("href", "styles/nav_list.css");

        this.commonCss = document.createElement('link');
        this.commonCss.setAttribute("rel", "stylesheet");
        this.commonCss.setAttribute("href", "styles/styles.css");

        this.wrapper = document.createElement('div');
        this.wrapper.setAttribute("class","wrapper");

        this.options = [
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
        this.shadowRoot.appendChild(this.commonCss);

        const ul = this.wrapper.appendChild(document.createElement('ul'))

        for(const option of this.options){
            const li = ul.appendChild(document.createElement('li'));
            const a = document.createElement('a');
            a.href = option.url;
            a.innerText = option.nombre;
            li.appendChild(a);
        }
        
        this.shadowRoot.appendChild(this.wrapper);
    }
}

customElements.define('app-nav-list', NavListComponent);