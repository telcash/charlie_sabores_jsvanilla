/* 
Plantilla HTML:

<div class="wrapper">
    <div class="imgContainer">
        <img src="img/articulo_test.jpeg" alt="">
    </div>
    <div class="info">
        <h4>Titulo del artículo</h4>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis corporis maiores 
        repudiandae laudantium, possimus, unde delectus quia veritatis nulla quod placeat! 
        In cumque dolor voluptas, corporis nemo adipisci? Aspernatur, architecto</p>
    </div>
</div> 
*/

class ArticuloComponent extends HTMLElement{
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
        cssLink.setAttribute("href", "styles/articulo.css");
        this.shadowRoot.appendChild(cssLink);

        const wrapper = document.createElement('div');
        wrapper.setAttribute("class","wrapper");

        const imgContainer = wrapper.appendChild(document.createElement('div'));
        imgContainer.setAttribute("class","imgContainer");

        const img = imgContainer.appendChild(document.createElement('img'));
        img.src = this.hasAttribute("img") ? this.getAttribute("img") : "img/default/articulo.png";
        img.alt = this.hasAttribute("alt") ? this.getAttribute("alt") : "";

        const info = wrapper.appendChild(document.createElement('div'));
        info.setAttribute("class","info");
        
        const titulo = info.appendChild(document.createElement('h4'));
        titulo.innerText = this.hasAttribute("title") ? this.getAttribute("title") : "Artículo de interés";

        const descripcion = info.appendChild(document.createElement('p'));
        descripcion.innerText = this.hasAttribute("desc") ? this.getAttribute("desc") : "Esta info te puede interesar...";

        this.shadowRoot.appendChild(wrapper);
    }
}

customElements.define('app-articulo', ArticuloComponent);