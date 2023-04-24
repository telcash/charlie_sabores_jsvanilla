const articuloTemplate = document.createElement('template');
articuloTemplate.innerHTML=`
<div class="wrapper">
    <div class="artImg">
        <img src="img/articulo_test.jpeg" alt="">
    </div>
    <div class="info">
        <h3>Titulo del artículo</h3>
        <p>Sinopsis del artículo</p>
    </div>
</div>
`;

class ArticuloComponent extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.attachShadow({
            mode: 'open'
        })

        const commonCssLink = document.createElement('link');
        commonCssLink.setAttribute("rel", "stylesheet");
        commonCssLink.setAttribute("href", "styles/styles.css");
        this.shadowRoot.appendChild(commonCssLink);

        const cssLink = document.createElement('link');
        cssLink.setAttribute("rel", "stylesheet");
        cssLink.setAttribute("href", "styles/articulo.css");
        this.shadowRoot.appendChild(cssLink);

        this.shadowRoot.appendChild(articuloTemplate.content.cloneNode(true));
    }
}

customElements.define('app-articulo', ArticuloComponent);