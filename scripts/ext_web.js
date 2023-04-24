const extWebTemplate = document.createElement('template');
extWebTemplate.innerHTML=`
<div class="wrapper">
    <div class="extWebLogo">
        <img src="img/ext_web_logo.jpeg" alt="">
    </div>
    <p>Descripción sitio externo</p>
</div>
`;

class ExtWebComponent extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.attachShadow({
            mode: 'open'
        })

        const cssLink = document.createElement('link');
        cssLink.setAttribute("rel", "stylesheet");
        cssLink.setAttribute("href", "styles/ext_web.css");

        this.shadowRoot.appendChild(cssLink);
        this.shadowRoot.appendChild(extWebTemplate.content.cloneNode(true));
    }
}

customElements.define('app-ext-web', ExtWebComponent);
