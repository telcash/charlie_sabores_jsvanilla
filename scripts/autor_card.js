/*

HTML template:

<div id="wrapper">
    <img class="imgAutor" src="" alt="">
    <h5>Nombre Autor</h5>
    <img src="" alt="">
</div>

*/

class AutorCardComponent extends HTMLElement{

    css;
    commonCss;
    wrapper;
    marked;

    constructor(){
        super();

        this.css = document.createElement('link');
        this.css.setAttribute("rel", "stylesheet");
        this.css.setAttribute("href", "styles/autor_card.css");

        this.commonCss = document.createElement('link');
        this.commonCss.setAttribute("rel", "stylesheet");
        this.commonCss.setAttribute("href", "styles/styles.css");

        this.wrapper = document.createElement('div');
        this.wrapper.setAttribute("class","wrapper");

        this.marked = false;
    }

    connectedCallback(){
        this.attachShadow({
            mode: 'open'
        })
        
        this.shadowRoot.appendChild(this.css);
        this.shadowRoot.appendChild(this.commonCss);

        const imgAutor = this.wrapper.appendChild(document.createElement('img'));
        imgAutor.setAttribute("class","imgAutor");
        imgAutor.src = this.hasAttribute("img") ? this.getAttribute("img") : "img/icons/avatar_default.png";
        imgAutor.alt = this.hasAttribute("alt") ? this.getAttribute("alt") : "Autor";

        const nombre = this.wrapper.appendChild(document.createElement('h6'));
        nombre.innerHTML = this.hasAttribute("name") ? this.getAttribute("name") : "Anónimo";

        const bookmark = this.wrapper.appendChild(document.createElement('img'));
        bookmark.setAttribute("src","img/icons/bookmark_black.png")

        this.shadowRoot.appendChild(this.wrapper);
        
        bookmark.addEventListener('click', () => {
            bookmark.src = !this.marked ? "img/icons/bookmark_black_solid.png" : "img/icons/bookmark_black.png";
            this.marked = !this.marked;
        })
    }
}

customElements.define('app-autor-card', AutorCardComponent);