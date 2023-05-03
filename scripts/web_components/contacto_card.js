class ContactoCardComponent extends HTMLElement{

    css;
    wrapper;

    constructor(){
        super();

        this.css = document.createElement('link');
        this.css.setAttribute("rel", "stylesheet");
        this.css.setAttribute("href", "styles/web_components/contacto_card.css");

        this.wrapper = document.createElement('div');
        this.wrapper.setAttribute("class","wrapper");
    }

    connectedCallback(){
        this.attachShadow({
            mode: 'open'
        })
        
        this.shadowRoot.appendChild(this.css);

        const titulo = this.wrapper.appendChild(document.createElement('div'));
        titulo.setAttribute("id","titulo");
        const h1 = titulo.appendChild(document.createElement('h1'));
        h1.innerText = "Contacto";

        const email = this.wrapper.appendChild(document.createElement('div'));
        email.setAttribute("id","email");
        let p = email.appendChild(document.createElement('p'));
        p.innerHTML = "Correo electrónico: <span>charliesabores@gmail.com</span>"

        const redesSociales = this.wrapper.appendChild(document.createElement('div'));
        const h3 = redesSociales.appendChild(document.createElement('h3'));
        h3.innerText = "Redes sociales";
        p = redesSociales.appendChild(document.createElement('p'));
        p.innerText = "Estamos a tu disposición en:";
        redesSociales.appendChild(document.createElement('app-social-networks'));

        this.shadowRoot.appendChild(this.wrapper);
    }
}

customElements.define('app-contacto-card', ContactoCardComponent);