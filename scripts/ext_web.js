/*

HTML template:

<div class="wrapper">
    <div class="webSite">
        <div class="imgContainer">
            <img src="img/ext_web_logo.jpeg" alt="">
        </div>
        <p>Descripción sitio externo</p>
    </div>
</div>

 */

class ExtWebComponent extends HTMLElement{

    css;
    commonCss;
    wrapper;
    websites;

    constructor(){
        super();

        this.css = document.createElement('link');
        this.css.setAttribute("rel", "stylesheet");
        this.css.setAttribute("href", "styles/ext_web.css");

        this.commonCss = document.createElement('link');
        this.commonCss.setAttribute("rel", "stylesheet");
        this.commonCss.setAttribute("href", "styles/styles.css");

        this.wrapper = document.createElement('div');
        this.wrapper.setAttribute("class","wrapper");

        this.websites = [
            {
                nombre: "Sitio web externo",
                descripcion: "Este sitio te podría interesar",
                img: "img/ext_web_logo.jpeg",
                enlace:"#"
            },
            {
                nombre: "Sitio web externo",
                descripcion: "Este sitio te podría interesar",
                img: "img/ext_web_logo.jpeg",
                enlace:"#"
            },
            {
                nombre: "Sitio web externo",
                descripcion: "Este sitio te podría interesar",
                img: "img/ext_web_logo.jpeg",
                enlace:"#"
            }
        ]
    }

    connectedCallback(){
        this.attachShadow({
            mode: 'open'
        })

        this.shadowRoot.appendChild(this.css);
        this.shadowRoot.appendChild(this.commonCss);

        for(const web of this.websites){
    
            const webSite = this.wrapper.appendChild(document.createElement('div'));
            webSite.setAttribute("class","webSite");

            const imgContainer = webSite.appendChild(document.createElement('div'));
            imgContainer.setAttribute("class","imgContainer");

            const img = imgContainer.appendChild(document.createElement('img'));
            img.src = web.img;
            img.alt = web.nombre;

            const descripcion = webSite.appendChild(document.createElement('p'));
            descripcion.innerText = web.descripcion;
        }        

        this.shadowRoot.appendChild(this.wrapper);
    }
}

customElements.define('app-ext-web', ExtWebComponent);
