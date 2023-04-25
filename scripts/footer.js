/* 
HTML template:

<div class="wrapper">
    <div class="socialNetworks">
        <a href="#"><img src="img/red_social_test.png" alt=""></a>
        <a href="#"><img src="img/red_social_test.png" alt=""></a>
        <a href="#"><img src="img/red_social_test.png" alt=""></a>
        <a href="#"><img src="img/red_social_test.png" alt=""></a>
        <a href="#"><img src="img/red_social_test.png" alt=""></a>
    </div>
    <a>Contactanos</a>
    <a>Políticas</a>
    <div class="externalWebsites">
        <app-ext-web></app-ext-web>
        <app-ext-web></app-ext-web>
        <app-ext-web></app-ext-web>
    </div>
</div> 
*/

class FooterComponent extends HTMLElement {
    
    networks;

    constructor(){
        
        super();

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

        const wrapper = document.createElement('div');
        wrapper.setAttribute("class","wrapper");

        const socialNetworks = wrapper.appendChild(document.createElement('div'));
        socialNetworks.setAttribute("class","socialNetworks");


        for(const network of this.networks){

            const enlace = socialNetworks.appendChild(document.createElement('a')); 
            enlace.setAttribute("href",network.enlace);
            
            const img = enlace.appendChild(document.createElement('img'));
            img.setAttribute("src",network.img);
            img.setAttribute("alt",network.nombre);
        }

        const contact = wrapper.appendChild(document.createElement('a'));
        contact.setAttribute("href","contacto.html");
        contact.innerText="Contáctanos";

        const policies = wrapper.appendChild(document.createElement('a'));
        policies.setAttribute("href","politicas.html");
        policies.innerText="Políticas";

        const externalWebsites = wrapper.appendChild(document.createElement('div'));
        externalWebsites.setAttribute("class","externalWebsites");

        const extWebsites = [
            {
                nombre: "Sitio web externo",
                descripcion: "Este sitio te podría interesar",
                img: "img/ext_web_logo.jpeg",
                enlace:"#"
            },
            {
                nombre: "Sitio web externo",
                descripcion: "Este sitio te podría interesar",
                img: "img/ext_web_logo.jpeg",
                enlace:"#"
            },
            {
                nombre: "Sitio web externo",
                descripcion: "Este sitio te podría interesar",
                img: "img/ext_web_logo.jpeg",
                enlace:"#"
            }
        ]

        for(const web of extWebsites){
    
            const website = externalWebsites.appendChild(document.createElement('app-ext-web'));
            website.setAttribute("img",web.img);
            website.setAttribute("alt",web.nombre);
            website.setAttribute("desc",web.descripcion);
        }

        this.shadowRoot.appendChild(wrapper);
    }

}

customElements.define('app-footer', FooterComponent);