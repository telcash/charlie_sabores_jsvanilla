/*

HTML template:

<div class="wrapper">
    <div class="titulo">
        <h2>Titulo del contenedor de recetas</h2>
    </div>
    <div class="container">
        <app-receta class="receta"></app-receta>
        <app-receta class="receta"></app-receta>

        ...

        <app-receta class="receta"></app-receta>
    </div>
    <app-receta class="receta"></app-receta>
</div>

 */

const recetas = [
    {
        nombre:"Bollo de Pretzel",
        descripcion:"Recurrimos a una inmersión en una solución de bicarbonato de sodio y agua hirviendo para ayudar a crear el exterior característico de los bollos de pretzel",
        img:"img/recetas/bollos_pretzel.jpeg",
        alt:"Bollo de Pretzel",
        url:"#/"
    },
    {
        nombre:"Tarta Arcoris",
        descripcion:"La variedad de colores vibrantes de este pastel animará el estado de ánimo en cualquier celebración y seguramente atraerá a los invitados de todas las edades.",
        img:"img/recetas/tarta_arcoiris.jpg",
        alt:"Tarta arcoiris",
        url:"#/"
    },
    {
        nombre:"Tarta Caprese",
        descripcion:"Torta caprese es un pastel de chocolate italiano sin harina que contiene almendras finamente molidas, que rompen sutilmente la miga esponjosa.",
        img:"img/recetas/tarta_caprese.jpg",
        alt:"Tarta Caprese",
        url:"#/"
    },
    {
        nombre:"Muffins de plátano con coco y macadamia",
        descripcion:"En busca de magdalenas de plátano con un sabor potente, añadimos mucho puré de plátanos a nuestra masa.",
        img:"img/muffin_platano_coco_macadamia.jpg",
        alt: "Muffins de plátano con coco y macadamia",
        url:"#/"
    },
    {
        nombre:"Tarta Bundt de Limón",
        descripcion:"Para desarrollar una receta de tarta Bundt resistente pero tierna con un potente sabor a limón, aumentamos la cantidad de mantequilla y reemplazamos la leche con suero de leche.",
        img:"img/recetas/tarta_bundt_limon.jpg",
        alt:"Tarta Bundt de Limón",
        url:"#/"
    },
    {
        nombre:"Tarta de capas de chocolate y caramelo",
        descripcion:"Para garantizar el sabor a caramelo en cada bocado, intercalamos tres capas de relleno de caramelo espeso pero untable entre capas de pastel de chocolate profundo, oscuro y húmedo.",
        img:"img/recetas/tarta_capas_chocolate_caramelo.jpg",
        alt:"Tarta de capas de chocolate y caramelo",
        url:"#/"
    },
    {
        nombre:"Stollen",
        descripcion:"Stollen es un rico pan de levadura dulce que se sirve en Navidad en toda Alemania y Austria.",
        img:"img/recetas/stollen.jpg",
        alt:"Stollen",
        url:"#/"
    },
    {
        nombre:"Tarta de Queso Red Velvet",
        descripcion:"Esta ingeniosa tarta combina dos postres clásicos: tarta de terciopelo rojo y tarta de queso.",
        img:"img/recetas/tarta_queso_red_velvet.jpeg",
        alt:"Tarta de Queso Red Velvet",
        url:"#/"
    },
    {
        nombre:"Tarta de mousse de chocolate",
        descripcion:"Una combinación de mousse, tarta y cobertura de chocolate adornada con merengues.",
        img:"img/recetas/tarta_mousse_chocolate.jpeg",
        alt:"Tarta de mousse de chocolate",
        url:"#/"
    }
]




class ContainerRecetasComponent extends HTMLElement{

    css;
    commonCss;
    wrapper;
    impresionesMax;
    MAX_ITEMS;
    TITULO = "Recetas que te encantarán"

    constructor(){
        super();

        this.MAX_ITEMS = 50;

        this.css = document.createElement('link');
        this.css.setAttribute("rel", "stylesheet");
        this.css.setAttribute("href", "styles/container_recetas.css");

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

        const titulo = this.wrapper.appendChild(document.createElement('div'));
        titulo.setAttribute("class","titulo");
        const h2 = titulo.appendChild(document.createElement('h2'));
        h2.innerHTML= this.TITULO;
        
        const container = this.wrapper.appendChild(document.createElement('div'));
        container.setAttribute("class","container");

        let i = 0;
        do{
            const receta = container.appendChild(document.createElement('app-receta'));
            receta.setAttribute("class","receta");
            receta.setAttribute("nombre",recetas[i].nombre);
            receta.setAttribute("descripcion",recetas[i].descripcion);
            receta.setAttribute("img",recetas[i].img);
            receta.setAttribute("alt",recetas[i].alt);
            receta.setAttribute("url",recetas[i].url);
            i++;
        } while (i<recetas.length && i < this.impresionesMax);
        
        this.shadowRoot.appendChild(this.wrapper);
    }
}

customElements.define('app-container-recetas', ContainerRecetasComponent);
