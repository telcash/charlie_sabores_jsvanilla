/*
HTML template:

<div class="wrapper">
    <div class="imgContainer">
        <img src="img/ext_web_logo.jpeg" alt="">
    </div>
    <p>Descripción sitio externo</p>
</div>

 */

class ExtWebComponent extends HTMLElement{
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
        cssLink.setAttribute("href", "styles/ext_web.css");
        this.shadowRoot.appendChild(cssLink);

        const wrapper = document.createElement('div');
        wrapper.setAttribute("class","wrapper");

        const imgContainer = wrapper.appendChild(document.createElement('div'));
        imgContainer.setAttribute("class","imgContainer");

        const img = imgContainer.appendChild(document.createElement('img'));
        img.src = this.hasAttribute("img") ? this.getAttribute("img") : "img/default/ext_web_site.png";
        img.alt = this.hasAttribute("alt") ? this.getAttribute("alt") : "";

        const descripcion = wrapper.appendChild(document.createElement('p'));
        descripcion.innerText = this.hasAttribute("desc") ? this.getAttribute("desc") : "Este sitio web te puede interesar...";

        this.shadowRoot.appendChild(wrapper);
    }
}

customElements.define('app-ext-web', ExtWebComponent);
