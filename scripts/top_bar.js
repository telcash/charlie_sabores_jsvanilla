/*

HTML template:

<div class="wrapper">
    <a href="#/"></a>
    <a href="#/"></a>
</div>

*/

class TopBarComponent extends HTMLElement{

    css;
    commonCss;
    wrapper;

    constructor(){
        super();

        this.css = document.createElement('link');
        this.css.setAttribute("rel", "stylesheet");
        this.css.setAttribute("href", "styles/top_bar.css");

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

        let enlace = this.wrapper.appendChild(document.createElement('a'))
        enlace.href = this.hasAttribute("urlCuenta") ? this.getAttribute("urlCuenta") : "#/";
        enlace.innerText = "Mi cuenta";

        enlace = this.wrapper.appendChild(document.createElement('a'))
        enlace.href = this.hasAttribute("urlFavoritos") ? this.getAttribute("urlFavoritos") : "#/";
        enlace.innerText = "Mis favoritos";
        
        this.shadowRoot.appendChild(this.wrapper);
    }
}

customElements.define('app-top-bar', TopBarComponent);