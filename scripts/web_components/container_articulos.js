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
    },
    {
        nombre: "KitchenAid Pro 5 Plus. Un versátil ayudante en la cocina",
        descripcion: "",
        img: "img/articulos/kitchenaid_professional_5_plus.jpg",
        alt: "KitchenAid Pro 5 Plus",
        url: "#/"
    },
    {
        nombre: "Los mejores aceites en spray para hornear",
        descripcion: "",
        img: "img/articulos/spray_hornear.jpg",
        alt: "Aceites en spray",
        url: "#/"
    },
    {
        nombre: "¿Es necesario un multiccoker?",
        descripcion: "",
        img: "img/articulos/multicookers.jpg",
        alt: "Multicookers",
        url: "#/"
    },
    {
        nombre: "Las mejores batidoras de inmersión",
        descripcion: "",
        img: "img/articulos/batidoras_inmersion.jpg",
        alt: "Batidoras de inmersion",
        url: "#/"
    },
    {
        nombre: "¿Por qué amamos los air fryers?",
        descripcion: "",
        img: "img/articulos/air_fryers.jpg",
        alt: "Air fryers",
        url: "#/"
    },
    {
        nombre: "Vainilla molida y en polvo",
        descripcion: "",
        img: "img/articulos/vainilla_molida_polvo.jpg",
        alt: "Vainilla molida y en polvo",
        url: "#/"
    }
]

class ContainerArticulosComponent extends HTMLElement{
    css;
    wrapper;
    impresionesMax;
    MAX_ITEMS;
    TITULO = "Artículos de interés";

    constructor(){
        super();

        this.MAX_ITEMS = 50;

        this.css = document.createElement('link');
        this.css.setAttribute("rel", "stylesheet");
        this.css.setAttribute("href", "styles/web_components/container_articulos.css");

        this.wrapper = document.createElement('div');
        this.wrapper.setAttribute("class","wrapper");
    }

    connectedCallback(){
        this.attachShadow({
            mode: 'open'
        })
        
        this.impresionesMax = this.hasAttribute("max") ? this.getAttribute("max") : this.MAX_ITEMS;
        this.shadowRoot.appendChild(this.css);

        const titulo = this.wrapper.appendChild(document.createElement('div'));
        titulo.setAttribute("class","titulo");
        const h2 = titulo.appendChild(document.createElement('h2'));
        h2.innerHTML= this.TITULO;
        
        const container = this.wrapper.appendChild(document.createElement('div'));
        container.setAttribute("class","container");

        let i = 0;
        do{
            const articulo = container.appendChild(document.createElement('app-articulo-card'));
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