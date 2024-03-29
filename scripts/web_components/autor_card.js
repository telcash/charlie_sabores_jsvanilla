class AutorCardComponent extends HTMLElement{

    css;
    wrapper;
    checked;
    imgChecked;
    imgUnchecked;

    constructor(){
        super();

        this.css = document.createElement('link');
        this.css.setAttribute("rel", "stylesheet");
        this.css.setAttribute("href", "styles/web_components/autor_card.css");

        this.wrapper = document.createElement('div');
        this.wrapper.setAttribute("class","wrapper");

        this.checked = false;
        this.imgChecked = this.hasAttribute("imgChecked") ? this.getAttribute("imgChecked") : "img/icons/bookmark_black_solid.png";
        this.imgUnchecked = this.hasAttribute("imgUnchecked") ? this.getAttribute("imgUnchecked") : "img/icons/bookmark_black.png";
    }

    connectedCallback(){
        this.attachShadow({
            mode: 'open'
        })
        
        this.shadowRoot.appendChild(this.css);

        const imgAutor = this.wrapper.appendChild(document.createElement('img'));
        imgAutor.setAttribute("class","imgAutor");
        imgAutor.src = this.hasAttribute("img") ? this.getAttribute("img") : "img/icons/avatar_default.png";
        imgAutor.alt = this.hasAttribute("alt") ? this.getAttribute("alt") : "Autor";

        const nombre = this.wrapper.appendChild(document.createElement('h6'));
        nombre.innerHTML = this.hasAttribute("name") ? this.getAttribute("name") : "Charlie";

        const bookmark = this.wrapper.appendChild(document.createElement('img'));
        bookmark.setAttribute("src",this.imgUnchecked);

        this.shadowRoot.appendChild(this.wrapper);
        
        bookmark.addEventListener('click', () => {
            bookmark.src = !this.checked ? this.imgChecked : this.imgUnchecked;
            this.checked = !this.checked;
        })
    }
}

customElements.define('app-autor-card', AutorCardComponent);