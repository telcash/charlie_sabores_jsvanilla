const cssLink = document.createElement('link');
cssLink.setAttribute("rel", "stylesheet");
cssLink.setAttribute("href", "styles/footer.css");

const footerTemplate = document.createElement('template');
footerTemplate.innerHTML = `
<div class="appFooter">
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
        <div class="extWebCard">
            <div>Logo Ext. Web</div>
            <div>Desc Ext. Web</div>
        </div>
        <div class="extWebCard">
            <div>Logo Ext. Web</div>
            <div>Desc Ext. Web</div>
        </div>
        <div class="extWebCard">
            <div>Logo Ext. Web</div>
            <div>Desc Ext. Web</div>
        </div>
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
        this.shadowRoot.appendChild(cssLink);
        this.shadowRoot.appendChild(footerTemplate.content.cloneNode(true));
    }
}

customElements.define('app-footer', FooterComponent);