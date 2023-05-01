/*

HTML template:

<div class="wrapper">
    <app-social-networks class="socialNetworks"></app-social-networks>
    <app-nav-list class="navList"></app-nav-list>
    <app-ext-web class="extWeb"></app-ext-web>
</div> 

*/

class FooterComponent extends HTMLElement {
    
    css;
    commonCss;
    wrapper;
    networks;

    constructor(){
        
        super();

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
        this.shadowRoot.appendChild(this.css);
        this.shadowRoot.appendChild(this.commonCss);
        
        const navList = this.wrapper.appendChild(document.createElement('app-nav-list'));
        navList.setAttribute("class","navList");
        
        const extWeb = this.wrapper.appendChild(document.createElement('app-ext-web'));
        extWeb.setAttribute("class","extWeb");
        
        const socialNetworks = this.wrapper.appendChild(document.createElement('app-social-networks'));
        socialNetworks.setAttribute("class","socialNetworks");
        
        this.shadowRoot.appendChild(this.wrapper);
    }
}

customElements.define('app-footer', FooterComponent);