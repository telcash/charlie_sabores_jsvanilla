let navLinks;
let navButton;
let searchBar;
let searchInput;

const headerTemplate = document.createElement('template');
headerTemplate.innerHTML=`
<div class="wrapper">
    <nav class="nav">
        <div class="navButton">
            <img src="img/nav_logo.png" alt="Icono barra de navegacion">
        </div>
        <div class="mainLogo">
            <a href="index.html"><img src="img/main_logo.jpeg" alt="Logo principal"></a>
        </div>
        <form name="searchForm "class="searchBar">
            <button type="submit" onclick="notImplemented()"><img src="img/search_icon.png"></button>
            <input type="text" placeholder="Buscar..">
        </form>
    </nav>
    <div class="navLinks">
        <a href="recetas.html">Recetas</a>
        <a href="articulos.html">Artículos</a>
        <a href="contacto.html">Contacto</a>
    </div>
</div>
`;

class HeaderComponent extends HTMLElement{
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
        cssLink.setAttribute("href", "styles/header.css");
        this.shadowRoot.appendChild(cssLink);

        this.shadowRoot.appendChild(headerTemplate.content.cloneNode(true));

        navLinks = this.shadowRoot.querySelector(".navLinks");        
        navButton = this.shadowRoot.querySelector(".navButton");
        navButton.addEventListener("click", navMenu);

        searchBar = this.shadowRoot.querySelector(".searchBar");
        searchInput = this.shadowRoot.querySelector("input");
        searchInput.addEventListener('focusin', ()=>{
            searchBar.classList.add("searchBarFocus");
        })
        searchInput.addEventListener('focusout', ()=>{
            searchBar.classList.remove("searchBarFocus");
        })
    }
}

function navMenu(){
    if(navLinks.style.width === "100%"){
        navLinks.style.width = "0%";
    } else{
        navLinks.style.width = "100%";
    }
}

function notImplemented(){
    alert("No implementado");
}

customElements.define('app-header', HeaderComponent);