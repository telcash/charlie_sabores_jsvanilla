class BarraVotarComponent extends HTMLElement{
    iconos;
    rating;
    borrarVoto;
    miRating;
    css;
    wrapper;
    textos;

    constructor(){
        super();

        this.css = document.createElement('link');
        this.css.setAttribute("rel", "stylesheet");
        this.css.setAttribute("href", "styles/web_components/barra_votar.css");

        this.miRating = -1;
        this.textos = [
            "No es para mí",
            "Solo OK",
            "Buena",
            "Muy buena",
            "La adoré!!!"
        ]

        this.wrapper = document.createElement('div');
        this.wrapper.setAttribute("class","wrapper");
        
    }

    connectedCallback(){
        this.attachShadow({
            mode: 'open'
        })
        this.shadowRoot.appendChild(this.css);

        const encabezado = this.wrapper.appendChild(document.createElement('div'));
        encabezado.setAttribute("id","encabezado");

        const titulo = encabezado.appendChild(document.createElement('div'));
        titulo.setAttribute("id","titulo");
        const h2 = titulo.appendChild(document.createElement('h2'));
        h2.innerText = "Mi voto";
        
        const borrarVotoContainer = encabezado.appendChild(document.createElement('div'));
        borrarVotoContainer.setAttribute("id","borrarVotoContainer");
        this.borrarVoto = borrarVotoContainer.appendChild(document.createElement('h6'));
        this.borrarVoto.addEventListener("click",() =>{
            this.borrarMiVoto();
        })

        const barra = this.wrapper.appendChild(document.createElement('div'));
        barra.setAttribute("id","barra");

        const estrellas = barra.appendChild(document.createElement('div'));
        estrellas.setAttribute("id","estrellas");

        for(let i=0; i<5; i++){
            const iconContainer = estrellas.appendChild(document.createElement('div'));
            iconContainer.setAttribute("class","iconContainer");
            const img = iconContainer.appendChild(document.createElement('img'));
            img.setAttribute("src","img/icons/estrella.png");
            img.setAttribute("alt","Icono estrella");
            img.addEventListener("mouseenter",() =>{
                this.iconMouseEnter(i);
            });
            img.addEventListener("mouseleave",() =>{
                this.iconMouseLeave();
            });
            img.addEventListener("click",() =>{
                this.iconClicked(i);
            })
        }

        const texto = barra.appendChild(document.createElement('div'));
        texto.setAttribute("id","texto");
        this.rating = texto.appendChild(document.createElement('h6'));
        this.rating.innerText = "";
        this.shadowRoot.appendChild(this.wrapper);

        this.iconos = this.shadowRoot.querySelectorAll("img");
    }

    iconMouseEnter(n){
        let i = 0;
    
        for(const icon of this.iconos){
            if(i <= n){
                icon.setAttribute("src","img/icons/estrella_solid.png");
            }else{
                icon.setAttribute("src","img/icons/estrella.png");
            }
            i++;
        }
        this.rating.innerText = this.textos[n];
    }
    
    iconMouseLeave(){
        let i = 0;
        for(const icon of this.iconos){
            if(i <= this.miRating){
                icon.setAttribute("src","img/icons/estrella_solid.png");
            }else{
                icon.setAttribute("src","img/icons/estrella.png");
            }
            i++;
        }
        if(this.miRating <0){
            this.rating.innerText = "";
        }else{
            this.rating.innerText = this.textos[this.miRating];
        }
    }
    
    iconClicked(n){
        this.miRating = n;
        let i = 0;
        for(const icon of this.iconos){
            if(i <= n){
                icon.setAttribute("src","img/icons/estrella_solid.png");
            }else{
                icon.setAttribute("src","img/icons/estrella.png");
            }
            i++;
        }
        this.borrarVoto.innerText = "Borrar voto";
    }
    
    borrarMiVoto(){
        this.miRating = -1;
        this.borrarVoto.innerText = "";
        this.rating.innerText = "";
        for(const icon of this.iconos){
            icon.setAttribute("src","img/icons/estrella.png");
        }
    }
}

customElements.define('app-barra-votar', BarraVotarComponent);

