/*
HTML template

<div class="wrapper">
    <nav class="nav">
        <div class="navButton">
            <img src="img/nav_logo.png" alt="Icono barra de navegacion">
        </div>
        <div class="mainLogo">
            <a href="index.html"><img src="img/main_logo.jpeg" alt="Logo principal"></a>
        </div>
        <form name="searchForm" class="searchBar">
            <button type="submit" onclick="notImplemented()"><img src="img/search_icon.png"></button>
            <input type="text" placeholder="Buscar..">
        </form>
    </nav>
    <div class="navList">
        <app-nav-list></app-nav-list>
    </div>
</div>

*/

let navList;

class HeaderComponent extends HTMLElement{
    script;
    css;
    commonCss;
    wrapper;
    navToggle;
    
    constructor(){
        super();

        this.script = document.createElement('script');
        this.script.setAttribute("src","scripts/nav_list.js");

        this.css = document.createElement('link');
        this.css.setAttribute("rel", "stylesheet");
        this.css.setAttribute("href", "styles/header.css");

        this.commonCss = document.createElement('link');
        this.commonCss.setAttribute("rel", "stylesheet");
        this.commonCss.setAttribute("href", "styles/styles.css");

        this.wrapper = document.createElement('div');
        this.wrapper.setAttribute("class","wrapper");

        this.navToggle = new Event('navListToggle', {bubbles: true, composed: true});

        console.log("creamos un header ...");
    }

    connectedCallback(){
        this.attachShadow({
            mode: 'open'
        })
        
        this.shadowRoot.appendChild(this.script);
        this.shadowRoot.appendChild(this.css);
        this.shadowRoot.appendChild(this.commonCss);

        const nav = this.wrapper.appendChild(document.createElement('nav'));
        nav.setAttribute("class","nav");

        const navButton = nav.appendChild(document.createElement('div'));
        navButton.setAttribute("class","navButton");

        let img = navButton.appendChild(document.createElement('img'));
        img.src = "img/nav_logo.png";
        img.alt = "Icono barra de navegacion";

        const mainLogo = nav.appendChild(document.createElement('div'));
        mainLogo.setAttribute("class","mainLogo");

        img = mainLogo.appendChild(document.createElement('img'));
        img.src = "img/main_logo.jpeg";
        img.alt = "Logo principal";

        const form = nav.appendChild(document.createElement('form'));
        form.setAttribute("name","searchForm");
        form.setAttribute("class","searchBar");

        const button = form.appendChild(document.createElement('button'));
        button.setAttribute("type","submit");
        button.setAttribute("onclick","notImplemented()");

        img = button.appendChild(document.createElement('img'));
        img.src = "img/search_icon.png";
        img.alt = "Botón de busqueda";

        const input = form.appendChild(document.createElement('input'));
        input.setAttribute("type","text");
        input.setAttribute("placeholder","Buscar ...");

        navList = this.wrapper.appendChild(document.createElement('div'));
        navList.setAttribute("class","navList");
        navList.appendChild(document.createElement('app-nav-list'));

        this.shadowRoot.appendChild(this.wrapper);
        
        navButton.addEventListener('click', () => {
            navButton.dispatchEvent(this.navToggle);
            navListToggle();
        })


        input.addEventListener('focusin', ()=>{
            form.classList.add("searchBarFocus");
        })
        input.addEventListener('focusout', ()=>{
            form.classList.remove("searchBarFocus");
        })
    }
}

function navListToggle(){
    
    if(navList.style.width === "100%"){
        navList.style.width = "0%";
    } else{
        navList.style.width = "100%";
    }
}

function notImplemented(){
    alert("No implementado");
}

customElements.define('app-header', HeaderComponent);