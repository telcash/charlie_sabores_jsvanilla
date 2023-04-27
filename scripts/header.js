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

let navList2; 
let navBar;
let topBar;

class HeaderComponent extends HTMLElement{
    
    scriptsSrcs;
    scripts;
    css;
    commonCss;
    wrapper;
    
    constructor(){
        super();

        this.scriptsSrcs = ["scripts/nav_list.js","scripts/nav_bar.js","scripts/top_bar.js"];
        this.scripts = [];
        for(const src of this.scriptsSrcs){
            const script = document.createElement('script');
            script.setAttribute("src",src);
            this.scripts.push(script);
        }

        this.css = document.createElement('link');
        this.css.setAttribute("rel", "stylesheet");
        this.css.setAttribute("href", "styles/header.css");

        this.commonCss = document.createElement('link');
        this.commonCss.setAttribute("rel", "stylesheet");
        this.commonCss.setAttribute("href", "styles/styles.css");

        this.wrapper = document.createElement('div');
        this.wrapper.setAttribute("class","wrapper");

        this.addEventListener('navButtonClicked', navListToggle);

        console.log("constructor header listo");
    }

    connectedCallback(){
        this.attachShadow({
            mode: 'open'
        })
        
        for(const script of this.scripts){
            this.shadowRoot.appendChild(script);
        }
        this.shadowRoot.appendChild(this.css);
        this.shadowRoot.appendChild(this.commonCss);

        topBar = this.wrapper.appendChild(document.createElement('div'));
        topBar.setAttribute("class","topBar");
        topBar.appendChild(document.createElement('app-top-bar'));

        navBar = this.wrapper.appendChild(document.createElement('div'));
        navBar.setAttribute("class","navBar");
        navBar.appendChild(document.createElement('app-nav-bar'));

        navList2 = this.wrapper.appendChild(document.createElement('div'));
        navList2.setAttribute("class","navList");
        navList2.appendChild(document.createElement('app-nav-list'));

        this.shadowRoot.appendChild(this.wrapper);

        console.log("connected header listo");

    }
}

function navListToggle(){
    
    if(navList2.style.width === "100%"){
        navList2.style.width = "0%";
    } else{
        navList2.style.width = "100%";
    }
}

customElements.define('app-header', HeaderComponent);