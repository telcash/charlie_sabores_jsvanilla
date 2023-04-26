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
    constructor(){
        super();
    }

    connectedCallback(){
        this.attachShadow({
            mode: 'open'
        })

        const commonCssLink = document.createElement('link');
        commonCssLink.setAttribute("rel", "stylesheet");
        commonCssLink.setAttribute("href", "styles/styles.css");
        this.shadowRoot.appendChild(commonCssLink);

        const cssLink = document.createElement('link');
        cssLink.setAttribute("rel", "stylesheet");
        cssLink.setAttribute("href", "styles/receta.css");
        this.shadowRoot.appendChild(cssLink);

        const wrapper = document.createElement('div');
        wrapper.setAttribute("class","wrapper");
        
        const imgContainer = wrapper.appendChild(document.createElement('div'));
        imgContainer.setAttribute("class","imgContainer");

        const img = imgContainer.appendChild(document.createElement('img'));
        img.src = this.hasAttribute("img") ? this.getAttribute("img") : "img/default/receta.png";
        img.alt = this.hasAttribute("alt") ? this.getAttribute("alt") : "";

        const info = wrapper.appendChild(document.createElement('div'));
        info.setAttribute("class","info");

        const titulo = info.appendChild(document.createElement('h4'));
        titulo.innerText = this.hasAttribute("title") ? this.getAttribute("title") : "Receta";

        const descripcion = info.appendChild(document.createElement('p'));
        descripcion.innerText = this.hasAttribute("desc") ? this.getAttribute("desc") : "Disfruta esta receta...";

        const enlace = info.appendChild(document.createElement('a'));
        enlace.href = this.hasAttribute("href") ? this.getAttribute("href") : "#"; 
        enlace.innerHTML = "Ver página";

        this.shadowRoot.appendChild(wrapper);
    }
}

customElements.define('app-receta', RecetaComponent);
