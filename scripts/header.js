/*

HTML template

<div class="wrapper">
    <div>
        <app-top-bar></app-top-bar>
    </div>
    <div class="nav">
        <app-nav-bar></app-nav-bar>
    </div>
    <div class="navList">
        <app-nav-list></app-nav-list>
    </div>
</div>

*/

let navList; 
let navBar;
let topBar;

class HeaderComponent extends HTMLElement{
    
    css;
    commonCss;
    wrapper;
    
    constructor(){
        super();

        this.css = document.createElement('link');
        this.css.setAttribute("rel", "stylesheet");
        this.css.setAttribute("href", "styles/header.css");

        this.commonCss = document.createElement('link');
        this.commonCss.setAttribute("rel", "stylesheet");
        this.commonCss.setAttribute("href", "styles/styles.css");

        this.wrapper = document.createElement('div');
        this.wrapper.setAttribute("class","wrapper");

        this.addEventListener('navButtonClicked', navListToggle);
    }

    connectedCallback(){
        this.attachShadow({
            mode: 'open'
        })
        
        this.shadowRoot.appendChild(this.css);
        this.shadowRoot.appendChild(this.commonCss);

        topBar = this.wrapper.appendChild(document.createElement('div'));
        topBar.setAttribute("class","topBar");
        topBar.appendChild(document.createElement('app-top-bar'));

        navBar = this.wrapper.appendChild(document.createElement('div'));
        navBar.setAttribute("class","navBar");
        navBar.appendChild(document.createElement('app-nav-bar'));

        navList = this.wrapper.appendChild(document.createElement('div'));
        navList.setAttribute("class","navList");
        navList.appendChild(document.createElement('app-nav-list'));

        this.shadowRoot.appendChild(this.wrapper);

    }
}

function navListToggle(){
    
    if(navList.style.width === "100%"){
        navList.style.width = "0%";
    } else{
        navList.style.width = "100%";
    }
}

customElements.define('app-header', HeaderComponent);