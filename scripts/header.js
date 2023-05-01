/*

HTML template

<div class="wrapper">
    <div class="topBar">
        <app-top-bar></app-top-bar>
    </div>
    <div class="navBar">
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
let screenSmall;
let toggleOn = false;

class HeaderComponent extends HTMLElement{
    
    css;
    wrapper;
    
    constructor(){
        super();

        this.css = document.createElement('link');
        this.css.setAttribute("rel", "stylesheet");
        this.css.setAttribute("href", "styles/header.css");

        this.wrapper = document.createElement('div');
        this.wrapper.setAttribute("class","wrapper");

        this.addEventListener('navButtonClicked', navListToggle);
    }

    connectedCallback(){
        this.attachShadow({
            mode: 'open'
        })
        
        this.shadowRoot.appendChild(this.css);

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

        if(window.innerWidth < 800){
            screenSmall = true;
        }else{
            screenSmall = false;
        }

        window.addEventListener('resize', ()=>{
            if(window.innerWidth >= 800){
                navList.style.width = "100%";
                navList.style.opacity = 1;
                screenSmall = false;
                toggleOn = false;
            }else{
                if(!screenSmall && !toggleOn){
                    navList.style.width = "0%";
                    screenSmall = false;
                    navList.style.opacity = 0;
                }
            }
        })
    }
}

function navListToggle(){
    toggleOn = !toggleOn;
    if(navList.style.width === "100%"){
        navList.style.width = "0%";
    } else{
        navList.style.opacity = 1;
        navList.style.width = "100%";
    }
}

customElements.define('app-header', HeaderComponent);