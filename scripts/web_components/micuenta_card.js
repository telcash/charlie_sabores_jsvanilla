class MiCuentaCardComponent extends HTMLElement{

    css;
    wrapper;
    TITULO = "Mi cuenta";
    listaOpciones = [
        "Información Personal",
        "Información de Pago",
        "Suscripcion a CharlieSabores",
        "Servicio al cliente"
    ]

    constructor(){
        super();

        this.css = document.createElement('link');
        this.css.setAttribute("rel", "stylesheet");
        this.css.setAttribute("href", "styles/web_components/micuenta_card.css");

        this.wrapper = document.createElement('div');
        this.wrapper.setAttribute("class","wrapper");
    }

    connectedCallback(){
        this.attachShadow({
            mode: 'open'
        })

        this.shadowRoot.appendChild(this.css);

        const titulo = this.wrapper.appendChild(document.createElement('div'));
        titulo.setAttribute("class","titulo");
        const h2 = titulo.appendChild(document.createElement('h2'));
        h2.innerText = this.TITULO;

        const main = this.wrapper.appendChild(document.createElement('div'));
        main.setAttribute("class","main");

        const lista = main.appendChild(document.createElement('div'));
        lista.setAttribute("class","lista");
        const tituloLista = lista.appendChild(document.createElement('div'));
        tituloLista.setAttribute("class","tituloLista");
        const h5 = tituloLista.appendChild(document.createElement('h5'));
        h5.innerText = "Membresías y Suscripciones";
        const itemsLista = lista.appendChild(document.createElement('div'));
        itemsLista.setAttribute("class","itemsLista");
        for (const opcion of this.listaOpciones){
            const a = itemsLista.appendChild(document.createElement('a'));
            a-this.setAttribute("href","#/");
            a.innerText = opcion;
        }

        const card = main.appendChild(document.createElement('div'));
        card.setAttribute("class","card");
        const cardTitulo = card.appendChild(document.createElement('div'));
        cardTitulo.setAttribute("class","cardTitulo");
        const h4 = cardTitulo.appendChild(document.createElement('h4'));
        h4.innerText = "Mis membresías activas y suscripciones gratis";
        const cardBody = card.appendChild(document.createElement('div'));
        cardBody.setAttribute("class","cardBody");
        const logoContainer = cardBody.appendChild(document.createElement('div'));
        logoContainer.setAttribute("class","logoContainer");
        const img = logoContainer.appendChild(document.createElement('img'));
        img.setAttribute("src","img/icons/main_logo.png");
        img.setAttribute("alt","Logo principal");
        const descContainer = cardBody.appendChild(document.createElement('div'));
        descContainer.setAttribute("class","descContainer");
        const h6 = descContainer.appendChild(document.createElement('h6'));
        h6.innerText = "Charliesabores.com"
        const p = descContainer.appendChild(document.createElement('p'));
        p.innerHTML = "Recetas para compartir en familia y consejos útiles para los amantes de la cocina";
        
        this.shadowRoot.appendChild(this.wrapper);
    }

}

customElements.define('app-micuenta-card', MiCuentaCardComponent);