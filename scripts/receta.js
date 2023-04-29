/* 
Plantilla HTML: 

<div class="wrapper">
    <div class="imgContainer">
        <img src="img/receta_test.jpeg">
    </div>
    <div class="info">
        <h4>Titulo</h4>
        <p>Descripcion</p>
    </div>
    <div class="autorCard">
        <app-autor-card></app-autor-card>
    </div>
</div>   
*/

class RecetaComponent extends HTMLElement{

    css;
    commonCss;
    wrapper;
    url;

    constructor(){
        super();

        this.css = document.createElement('link');
        this.css.setAttribute("rel", "stylesheet");
        this.css.setAttribute("href", "styles/receta.css");

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

        this.url = this.hasAttribute("url") ? this.getAttribute("url") : "#/";
        
        this.shadowRoot.appendChild(this.css);
        this.shadowRoot.appendChild(this.commonCss);

        const imgContainer = this.wrapper.appendChild(document.createElement('div'));
        imgContainer.setAttribute("class","imgContainer");

        const img = imgContainer.appendChild(document.createElement('img'));
        img.src = this.hasAttribute("img") ? this.getAttribute("img") : "img/default/receta.png";
        img.alt = this.hasAttribute("alt") ? this.getAttribute("alt") 
            :(this.hasAttribute("nombre") ? this.getAttribute(nombre) : "");
            
        const info = this.wrapper.appendChild(document.createElement('div'));
        info.setAttribute("class","info");

        const nombre = info.appendChild(document.createElement('h4'));
        nombre.innerText = this.hasAttribute("nombre") ? this.getAttribute("nombre") : "Receta";

        const descripcion = info.appendChild(document.createElement('p'));
        descripcion.innerText = this.hasAttribute("descripcion") ? this.getAttribute("descripcion") : "Disfruta esta receta...";

        const autorCard = this.wrapper.appendChild(document.createElement('div'));
        autorCard.setAttribute("class","autorCard");
        autorCard.appendChild(document.createElement('app-autor-card'));

        this.shadowRoot.appendChild(this.wrapper);
        
        this.wrapper.addEventListener("click", () => {
            window.location = this.url;
        })
    }
}

customElements.define('app-receta', RecetaComponent);
