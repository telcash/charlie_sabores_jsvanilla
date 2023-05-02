/*

HTML template:

<div class="wrapper">
    <div id="encabezado">
        <div id="titulo">
            <h2>Mi voto</h2>
        </div>
        <div id="miVoto">
            <h6></h6>
        </div>
    </div>
    <div id="barra">
        <div id="estrellas">
            <div class="iconContainer">
                <img src="img/icons/estrella.png"></img>
            </div>
            <div class="iconContainer">
                <img src="img/icons/estrella.png"></img>
            </div>
            <div class="iconContainer">
                <img src="img/icons/estrella.png"></img>
            </div>
            <div class="iconContainer">
                <img src="img/icons/estrella.png"></img>
            </div>
            <div class="iconContainer">
                <img src="img/icons/estrella.png"></img>
            </div>
        </div>
        <div id="texto">
            <h6></h6>
        </div>
    </div>
</div>

*/

let iconos;
let rating;
let borrarVoto;
let miRating = -1;
const textos = [
    "No es para mí",
    "Solo OK",
    "Buena",
    "Muy buena",
    "La adoré!!!"
]

class BarraVotarComponent extends HTMLElement{
    css;
    wrapper;

    constructor(){
        super();

        this.css = document.createElement('link');
        this.css.setAttribute("rel", "stylesheet");
        this.css.setAttribute("href", "styles/barra_votar.css");

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
        borrarVoto = borrarVotoContainer.appendChild(document.createElement('h6'));
        borrarVoto.addEventListener("click",() =>{
            borrarMiVoto();
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
                iconMouseEnter(i);
            });
            img.addEventListener("mouseleave",() =>{
                iconMouseLeave();
            });
            img.addEventListener("click",() =>{
                iconClicked(i);
            })
        }

        const texto = barra.appendChild(document.createElement('div'));
        texto.setAttribute("id","texto");
        rating = texto.appendChild(document.createElement('h6'));
        rating.innerText = "";
        this.shadowRoot.appendChild(this.wrapper);

        iconos = this.shadowRoot.querySelectorAll("img");
    }
}

customElements.define('app-barra-votar', BarraVotarComponent);

function iconMouseEnter(n){
    let i = 0;

    for(icon of iconos){
        if(i <= n){
            icon.setAttribute("src","img/icons/estrella_solid.png");
        }else{
            icon.setAttribute("src","img/icons/estrella.png");
        }
        i++;
    }
    rating.innerText = textos[n];
}

function iconMouseLeave(){
    let i = 0;
    for(icon of iconos){
        if(i <= miRating){
            icon.setAttribute("src","img/icons/estrella_solid.png");
        }else{
            icon.setAttribute("src","img/icons/estrella.png");
        }
        i++;
    }
    if(miRating <0){
        rating.innerText = "";
    }else{
        rating.innerText = textos[miRating];
    }
}

function iconClicked(n){
    miRating = n;
    let i = 0;
    for(icon of iconos){
        if(i <= n){
            icon.setAttribute("src","img/icons/estrella_solid.png");
        }else{
            icon.setAttribute("src","img/icons/estrella.png");
        }
        i++;
    }
    borrarVoto.innerText = "Borrar voto";
}

function borrarMiVoto(){
    miRating = -1;
    borrarVoto.innerText = "";
    rating.innerText = "";
    for(icon of iconos){
        icon.setAttribute("src","img/icons/estrella.png");
    }
}