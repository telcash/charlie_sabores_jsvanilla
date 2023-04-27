/*

HTML template:

<div class="wrapper">
    <app-social-networks class="socialNetworks"></app-social-networks>
    <app-nav-list class="navList"></app-nav-list>
    <app-ext-web class="extWeb"></app-ext-web>
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

        this.scriptsSrcs = ["scripts/ext_web.js","scripts/social_networks.js","scripts/nav_list.js"];
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

        const socialNetworks = this.wrapper.appendChild(document.createElement('app-social-networks'));
        socialNetworks.setAttribute("class","socialNetworks");

        const navList = this.wrapper.appendChild(document.createElement('app-nav-list'));
        navList.setAttribute("class","navList");

        const extWeb = this.wrapper.appendChild(document.createElement('app-ext-web'));
        extWeb.setAttribute("class","extWeb");

        this.shadowRoot.appendChild(this.wrapper);
    }

}

customElements.define('app-footer', FooterComponent);