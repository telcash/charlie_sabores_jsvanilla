class HeaderComponent extends HTMLElement{
    
    navList;
    navBar;
    topBar;
    screenSmall;
    toggleOn;
    css;
    wrapper;
    
    constructor(){
        super();

        this.css = document.createElement('link');
        this.css.setAttribute("rel", "stylesheet");
        this.css.setAttribute("href", "styles/web_components/header.css");

        this.toggleOn = false;

        this.wrapper = document.createElement('div');
        this.wrapper.setAttribute("class","wrapper");

        this.addEventListener('navButtonClicked',() =>{
           this.navListToggle(); 
        });
    }

    connectedCallback(){
        this.attachShadow({
            mode: 'open'
        })
        
        this.shadowRoot.appendChild(this.css);

        this.topBar = this.wrapper.appendChild(document.createElement('div'));
        this.topBar.setAttribute("class","topBar");
        this.topBar.appendChild(document.createElement('app-top-bar'));

        this.navBar = this.wrapper.appendChild(document.createElement('div'));
        this.navBar.setAttribute("class","navBar");
        this.navBar.appendChild(document.createElement('app-nav-bar'));

        this.navList = this.wrapper.appendChild(document.createElement('div'));
        
        this.navList.setAttribute("class","navList");


        this.navList.appendChild(document.createElement('app-nav-list'));
        
        
        
        this.shadowRoot.appendChild(this.wrapper);

        if(window.innerWidth < 800){
            this.screenSmall = true;
        }else{
            this.screenSmall = false;
        }

        window.addEventListener('resize', ()=>{
            if(window.innerWidth >= 800){
                this.navList.style.width = "100%";
                this.navList.style.opacity = 1;
                this.screenSmall = false;
                this.toggleOn = false;
            }else{
                if(!this.screenSmall && !this.toggleOn){
                    this.navList.style.width = "0%";
                    this.screenSmall = false;
                    this.navList.style.opacity = 0;
                }
            }
        })
    }

    navListToggle(){
        this.toggleOn = !this.toggleOn;
        if(this.navList.style.width === "100%"){
            this.navList.style.width = "0%";
        } else{
            this.navList.style.opacity = 1;
            this.navList.style.width = "100%";
        }
    }
}

customElements.define('app-header', HeaderComponent);