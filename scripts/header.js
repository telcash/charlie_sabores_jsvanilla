let navLinks;
const headerTemplate = document.createElement('template');
headerTemplate.innerHTML=`
<div class="wrapper">
    <nav class="nav">
        <div class="navButton">
            <img src="img/nav_logo.png" alt="">
        </div>
        <div class="mainLogo"><a href="index.html">Logo</a></div>
        <div class="searchBar">Barra de busqueda</div>
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

        const cssLink = document.createElement('link');
        cssLink.setAttribute("rel", "stylesheet");
        cssLink.setAttribute("href", "styles/header.css");

        this.shadowRoot.appendChild(cssLink);
        this.shadowRoot.appendChild(headerTemplate.content.cloneNode(true));

        navLinks = this.shadowRoot.querySelector(".navLinks");
        let navButton = this.shadowRoot.querySelector(".navButton");
        navButton.addEventListener("click", navMenu);
    }
}

function navMenu(){

    if(navLinks.style.display === "flex"){
        navLinks.style.display = "none";
    }else {
        navLinks.style.display = "flex";
        navLinks.style.flexDirection = "column";
        navLinks.classList.add("overlay");
    }

}

customElements.define('app-header', HeaderComponent);