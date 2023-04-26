/* 
Plantilla HTML: 

<div class="wrapper">
    <div class="imgContainer">
        <img src="img/receta_test.jpeg">
    </div>
    <div class="info">
        <h4>Titulo</h4>
        <p>Descripcion</p>
        <a href="#">Ir a la página</a>
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

        this.url = this.hasAttribute("url") ? this.getAttribute("url") : "#/";
    }

    connectedCallback(){
        this.attachShadow({
            mode: 'open'
        })
        this.shadowRoot.appendChild(this.css);
        this.shadowRoot.appendChild(this.commonCss);

        const imgContainer = this.wrapper.appendChild(document.createElement('div'));
        imgContainer.setAttribute("class","imgContainer");

        const img = imgContainer.appendChild(document.createElement('img'));
        img.src = this.hasAttribute("img") ? this.getAttribute("img") : "img/default/receta.png";
        img.alt = this.hasAttribute("alt") ? this.getAttribute("alt") : "";

        const info = this.wrapper.appendChild(document.createElement('div'));
        info.setAttribute("class","info");

        const titulo = info.appendChild(document.createElement('h4'));
        titulo.innerText = this.hasAttribute("title") ? this.getAttribute("title") : "Receta";

        const descripcion = info.appendChild(document.createElement('p'));
        descripcion.innerText = this.hasAttribute("desc") ? this.getAttribute("desc") : "Disfruta esta receta...";

        this.shadowRoot.appendChild(this.wrapper);
        this.wrapper.addEventListener("click", () => {
            window.location = this.url;
        })
    }
}

customElements.define('app-receta', RecetaComponent);
