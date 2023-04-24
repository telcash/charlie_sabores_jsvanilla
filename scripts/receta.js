const recetaTemplate = document.createElement('template');
recetaTemplate.innerHTML=`
<div class="wrapper">
    <div class="recetaImg">
        <img src="img/receta_test.jpeg">
    </div>
    <div class="recetaInfo">
        <p>Descripcion</p>
        <a href="#">Ir a la página</a>
    </div>
</div>
`;

class RecetaComponent extends HTMLElement{
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
        cssLink.setAttribute("href", "styles/receta.css");
        this.shadowRoot.appendChild(cssLink);

        this.shadowRoot.appendChild(recetaTemplate.content.cloneNode(true));
    }
}

customElements.define('app-receta', RecetaComponent);
