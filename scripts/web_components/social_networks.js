class SocialNetworksComponent extends HTMLElement{

    css;
    wrapper;
    networks;

    constructor(){
        super();

        this.css = document.createElement('link');
        this.css.setAttribute("rel", "stylesheet");
        this.css.setAttribute("href", "./styles/web_components/social_networks.css");

        this.wrapper = document.createElement('div');
        this.wrapper.setAttribute("class","wrapper");

        this.networks = [
            {
                nombre: "Facebook",
                img: "img/icons/redes_sociales/icon_facebook.png",
                enlace:"#/"
            },
            {
                nombre: "Instagram",
                img: "img/icons/redes_sociales/icon_instagram.png",
                enlace:"#/"
            },
            {
                nombre: "Pinterest",
                img: "img/icons/redes_sociales/icon_pinterest.png",
                enlace:"#/"
            },
            {
                nombre: "Twitter",
                img: "img/icons/redes_sociales/icon_twitter.png",
                enlace:"#/"
            },
            {
                nombre: "Youtube",
                img: "img/icons/redes_sociales/icon_youtube.png",
                enlace:"#/"
            }
        ]
    }

    connectedCallback(){
        this.attachShadow({
            mode: 'open'
        })

        this.shadowRoot.appendChild(this.css);

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