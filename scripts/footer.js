/*

HTML template:

<div class="wrapper">
    <app-social-networks></app-social-networks>
    <a>Contactanos</a>
    <a>Políticas</a>
    <app-ext-web></app-ext-web>
</div> 

*/

class FooterComponent extends HTMLElement {
    
    scriptsSrcs;
    scripts;
    css;
    commonCss;
    wrapper;
    networks;

    constructor(){
        
        super();

        this.scriptsSrcs = ["scripts/ext_web.js","scripts/social_networks.js"];
        this.scripts = [];
        for(const src of this.scriptsSrcs){
            const script = document.createElement('script');
            script.setAttribute("src",src);
            this.scripts.push(script);
        }

        this.css = document.createElement('link');
        this.css.setAttribute("rel", "stylesheet");
        this.css.setAttribute("href", "styles/footer.css");

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

        for(const script of this.scripts){
            this.shadowRoot.appendChild(script);
        }
        this.shadowRoot.appendChild(this.css);
        this.shadowRoot.appendChild(this.commonCss);

        this.wrapper.appendChild(document.createElement('app-social-networks'));

        const contact = this.wrapper.appendChild(document.createElement('a'));
        contact.setAttribute("href","contacto.html");
        contact.innerText="Contáctanos";

        const policies = this.wrapper.appendChild(document.createElement('a'));
        policies.setAttribute("href","politicas.html");
        policies.innerText="Políticas";

        this.wrapper.appendChild(document.createElement('app-ext-web'));

        this.shadowRoot.appendChild(this.wrapper);
    }

}

customElements.define('app-footer', FooterComponent);