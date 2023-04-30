/*

HTML template:

<div class="wrapper">
    <app-articulo class="articulo"></app-articulo>
</div>

 */

const articulos = [
    {
        nombre: "Las mejores sartenes antiadherentes de 12 pulgadas",
        descripcion: "Paso 1: Compra la mejor sartén. Paso 2: Trátalo bien.",
        img: "img/articulos/sartenes_antiadherentes.jpg",
        alt: "Sartenes antiadherentes",
        url: "#/"
    },
    {
        nombre: "Cómo rescatar una tarta en ruinas",
        descripcion: "Muchas cosas pueden ir mal al hornear una tarta, pero no todo está perdido. Así es como se convierte un percance en algo delicioso.",
        img: "img/articulos/tarta_arruinada.jpeg",
        alt: "Tarta arruinada",
        url: "#/"
    },
    {
        nombre: "¿Deberías Refrigerar La Salsa De Soja?",
        descripcion: "¿La salsa de soja se estropea alguna vez? Hablamos con expertos para averiguarlo.",
        img: "img/articulos/refrigerar_salsa_soja.jpg",
        alt: "¿Deberías Refrigerar La Salsa De Soja?",
        url: "#/"
    }
]

class ContainerArticulosComponent extends HTMLElement{
    css;
    commonCss;
    wrapper;
    impresionesMax;
    MAX_ITEMS;

    constructor(){
        super();

        this.MAX_ITEMS = 50;

        this.css = document.createElement('link');
        this.css.setAttribute("rel", "stylesheet");
        this.css.setAttribute("href", "styles/container_articulos.css");

        this.commonCss = document.createElement('link');
        this.commonCss.setAttribute("rel", "stylesheet");
        this.commonCss.setAttribute("href", "styles/styles.css");

        
        this.wrapper = document.createElement('div');
        this.wrapper.setAttribute("class","wrapper");
    }

    connectedCallback(){
        this.attachShadow({
            mode: 'open'
        })
        
        this.impresionesMax = this.hasAttribute("max") ? this.getAttribute("max") : this.MAX_ITEMS;
        this.shadowRoot.appendChild(this.css);
        this.shadowRoot.appendChild(this.commonCss);


        
        let i = 0;
        do{
            const articulo = this.wrapper.appendChild(document.createElement('app-articulo'));
            articulo.setAttribute("class","articulo");
            articulo.setAttribute("nombre",articulos[i].nombre);
            articulo.setAttribute("descripcion",articulos[i].descripcion);
            articulo.setAttribute("img",articulos[i].img);
            articulo.setAttribute("alt",articulos[i].alt);
            articulo.setAttribute("url",articulos[i].url);
            i++;
        } while (i<articulos.length && i < this.impresionesMax);
        
        this.shadowRoot.appendChild(this.wrapper);
    }
}

customElements.define('app-container-articulos', ContainerArticulosComponent);