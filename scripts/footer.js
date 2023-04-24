
const footerTemplate = document.createElement('template');
footerTemplate.innerHTML = `
<div class="wrapper">
    <div class="socialNetworks">
        <a href="#"><img src="img/red_social_test.png" alt=""></a>
        <a href="#"><img src="img/red_social_test.png" alt=""></a>
        <a href="#"><img src="img/red_social_test.png" alt=""></a>
        <a href="#"><img src="img/red_social_test.png" alt=""></a>
        <a href="#"><img src="img/red_social_test.png" alt=""></a>
    </div>
    <div class="contact">Contactanos</div>
    <div class="policy">Políticas</div>
    <div class="externalWebsites">
        <app-ext-web></app-ext-web>
        <app-ext-web></app-ext-web>
        <app-ext-web></app-ext-web>
    </div>
</div>
`;
class FooterComponent extends HTMLElement {
    
    constructor(){
        super();
    }

    connectedCallback(){
        this.attachShadow({
            mode: 'open'
        })

        const scriptLink = document.createElement('script');
        scriptLink.setAttribute("src", "scripts/ext_web.js");
        this.shadowRoot.appendChild(scriptLink);

        const commonCssLink = document.createElement('link');
        commonCssLink.setAttribute("rel", "stylesheet");
        commonCssLink.setAttribute("href", "styles/styles.css");
        this.shadowRoot.appendChild(commonCssLink);

        const cssLink = document.createElement('link');
        cssLink.setAttribute("rel", "stylesheet");
        cssLink.setAttribute("href", "styles/footer.css");
        this.shadowRoot.appendChild(cssLink);

        this.shadowRoot.appendChild(footerTemplate.content.cloneNode(true));
    }
}

customElements.define('app-footer', FooterComponent);