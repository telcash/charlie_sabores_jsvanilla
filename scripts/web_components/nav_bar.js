class NavBarComponent extends HTMLElement{

    css;
    wrapper;
    navButtonClicked;

    constructor(){
        super();

        this.css = document.createElement('link');
        this.css.setAttribute("rel", "stylesheet");
        this.css.setAttribute("href", "./styles/web_components/nav_bar.css");

        this.wrapper = document.createElement('div');
        this.wrapper.setAttribute("class","wrapper");

        this.navButtonClicked = new Event('navButtonClicked', {bubbles: true, composed: true});
    }

    connectedCallback(){
        this.attachShadow({
            mode: 'open'
        })
        this.shadowRoot.appendChild(this.css);

        const nav = this.wrapper.appendChild(document.createElement('nav'));
        nav.setAttribute("class","nav");

        const navButton = nav.appendChild(document.createElement('div'));
        navButton.setAttribute("class","navButton");

        let img = navButton.appendChild(document.createElement('img'));
        img.src = "img/icons/nav_logo.png";
        img.alt = "Icono barra de navegacion";

        const mainLogo = nav.appendChild(document.createElement('div'));
        mainLogo.setAttribute("class","mainLogo");

        const a = mainLogo.appendChild(document.createElement('a'));
        a.setAttribute("href","index.html");

        img = a.appendChild(document.createElement('img'));
        img.src = "img/icons/main_logo.png";
        img.alt = "Logo principal";

        const form = nav.appendChild(document.createElement('form'));
        form.setAttribute("name","searchForm");
        form.setAttribute("class","searchBar");

        const button = form.appendChild(document.createElement('button'));
        button.setAttribute("type","submit");
        button.setAttribute("onclick","notImplemented()");

        img = button.appendChild(document.createElement('img'));
        img.src = "img/icons/search_icon.png";
        img.alt = "Botón de busqueda";

        const input = form.appendChild(document.createElement('input'));
        input.setAttribute("type","text");
        input.setAttribute("placeholder","Buscar ...");

        this.shadowRoot.appendChild(this.wrapper);

        navButton.addEventListener('click', () => {
            navButton.dispatchEvent(this.navButtonClicked);
        })

        input.addEventListener('focusin', ()=>{
            form.classList.add("searchBarFocus");
        })
        input.addEventListener('focusout', ()=>{
            form.classList.remove("searchBarFocus");
        })
    }
}

function notImplemented(){
    alert("No implementado");
}

customElements.define('app-nav-bar', NavBarComponent);