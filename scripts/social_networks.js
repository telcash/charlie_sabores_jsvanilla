/* 
HTML template:

<div class="wrapper">
    <a href=""><img src="" alt=""></a>
</div> 
*/

class SocialNetworksComponent extends HTMLElement{

    css;
    commonCss;
    wrapper;
    networks;

    constructor(){
        super();

        this.css = document.createElement('link');
        this.css.setAttribute("rel", "stylesheet");
        this.css.setAttribute("href", "styles/social_networks.css");

        this.commonCss = document.createElement('link');
        this.commonCss.setAttribute("rel", "stylesheet");
        this.commonCss.setAttribute("href", "styles/styles.css");

        this.wrapper = document.createElement('div');
        this.wrapper.setAttribute("class","wrapper");

        this.networks = [
            {
                nombre: "Facebook",
                img: "img/icon_redes_sociales/icon_facebook.png",
                enlace:"#"
            },
            {
                nombre: "Instagram",
                img: "img/icon_redes_sociales/icon_instagram.png",
                enlace:"#"
            },
            {
                nombre: "Pinterest",
                img: "img/icon_redes_sociales/icon_pinterest.png",
                enlace:"#"
            },
            {
                nombre: "Twitter",
                img: "img/icon_redes_sociales/icon_twitter.png",
                enlace:"#"
            },
            {
                nombre: "Youtube",
                img: "img/icon_redes_sociales/icon_youtube.png",
                enlace:"#"
            }
        ]
    }

    connectedCallback(){
        this.attachShadow({
            mode: 'open'
        })

        this.shadowRoot.appendChild(this.css);
        this.shadowRoot.appendChild(this.commonCss);

        for(const network of this.networks){

            const enlace = this.wrapper.appendChild(document.createElement('a')); 
            enlace.setAttribute("href",network.enlace);
            
            const img = enlace.appendChild(document.createElement('img'));
            img.setAttribute("src",network.img);
            img.setAttribute("alt",network.nombre);
        }

        this.shadowRoot.appendChild(this.wrapper);

    }
}

customElements.define('app-social-networks', SocialNetworksComponent);