/*

HTML template:

<div class="wrapper">
    <div id="titulo">
        <h1>Titulo de la receta</h1>
    </div>
    <div id="rating">
        <a href="#/" class="rating">
            <img src="img/icons/estrella.png" alt="Icono rating">
            <h6>rating ...</h6>
        </a>
        <a href="#/" class="rating">
            <img src="img/icons/nube.png" alt="Icono comentario">
            <h6>número comentarios ...</h6>
        </a>
    </div>
    <div id="info">
        <h6>Porciones</h6>
        <h6>Tiempo</h6>
    </div>
    <div id="foto">
        <img src="" alt="Nombre de la receta">
    </div>
    <div id="acciones">
        <div id="imprimir" class="acciones">
            <input type="button" name="imprimir" onclick="alert('Receta impresa')" value="Imprimir">
        </div>
        <div id="guardar" class="acciones">
            <input type="button" name="guardar" onclick="alert('Receta guardada')" value="Guardar">
        </div>
    </div>
    <div id="ingredientes">
        <h3>Lista de ingredientes</h3>
        <ul>
            <li>ingrediente 1</li>

            <li>ingrediente n</li>
        </ul>
    </div>
    <div id="instrucciones">
        <h3>Instrucciones</h3>
        <ul>
            <li>instruccion 1</li>

            <li>instruccion 2</li>
        </ul>
    </div>
    <div id="votar">
        <h3>Mi voto</h3>
        <div>
            Aquí va la barra de estrellas de votacion
        </div>
    </div>
    <div id="comentar">
        <h3>Comentarios</h3>
        <div>
            Aquí va un espacio para yo comentar
        </div>
        <div>
            Aquí va un espacio para los comentarios anteriores de otros usuarios
        </div>
    </div>

</div>

 */

const receta = {
    nombre:"",
    img:"",
    rating: "",
    comentarios:"",
    porciones:"",
    tiempo:"",
    ingredientes:["",""],
    instrucciones:["",""],
}

class RecetaFullComponent extends HTMLElement{
    css;
    wrapper;

    constructor(){
        super();

        this.css = document.createElement('link');
        this.css.setAttribute("rel", "stylesheet");
        this.css.setAttribute("href", "styles/receta_full.css");

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
        titulo.setAttribute("id","titulo");
        const h1 = titulo.appendChild(document.createElement('h1'));
        h1.innerText = receta.nombre;

        const rating = this.wrapper.appendChild(document.createElement('div'));
        rating.setAttribute("id","rating");
        
        let enlace = rating.appendChild(document.createElement('a'));
        enlace.setAttribute("class","rating");
        let img = enlace.appendChild(document.createElement('img'));
        img.setAttribute("src","img/icons/estrella.png");
        img.setAttribute("alt","Icono rating");
        let h6 = enlace.appendChild(document.createElement('h6'));
        h6.innerText = receta.rating;

        enlace = rating.appendChild(document.createElement('a'));
        enlace.setAttribute("class","rating");
        img = enlace.appendChild(document.createElement('img'));
        img.setAttribute("src","img/icons/nube.png");
        img.setAttribute("alt","Icono comentario");
        h6 = enlace.appendChild(document.createElement('h6'));
        h6.innerText = receta.comentarios;
        
        const info = this.wrapper.appendChild(document.createElement('div'));
        info.setAttribute("id","info");
        h6 = info.appendChild(document.createElement('h6'));
        h6.innerText = receta.porciones;
        h6 = info.appendChild(document.createElement('h6'));
        h6.innerText = receta.tiempo;

        const foto = this.wrapper.appendChild(document.createElement('div'));
        foto.setAttribute("id","foto");
        img = foto.appendChild(document.createElement('img'));
        img.setAttribute("src",receta.foto);
        img.setAttribute("alt",receta.nombre);

        const acciones = this.wrapper.appendChild(document.createElement('div'));
        acciones.setAttribute("id","acciones");

        const imprimir = acciones.appendChild(document.createElement('div'));
        imprimir.setAttribute("class","acciones");
        let input = imprimir.appendChild(document.createElement('input'));
        input.setAttribute("type","button");
        input.setAttribute("name","imprimir");
        input.onclick = () => {
            alert('Receta impresa');
        }

        const guardar = acciones.appendChild(document.createElement('div'));
        guardar.setAttribute("class","acciones");
        input = imprimir.appendChild(document.createElement('input'));
        input.setAttribute("type","button");
        input.setAttribute("name","guardar");
        input.onclick = () => {
            alert('Receta guardada');
        }

        const ingredientes = this.wrapper.appendChild(document.createElement('div'));
        ingredientes.setAttribute("id","ingredientes");
        let h3 = ingredientes.appendChild(document.createElement('h3'));
        h3.innerText = "Lista de ingredientes: ";
        
        let ul = ingredientes.appendChild(document.createElement('ul'));
        for (const ingrediente of receta.ingredientes){
            const li = ul.appendChild(document.createElement('li'));
            li.innerText = ingrediente;
        }

        const instrucciones = this.wrapper.appendChild(document.createElement('div'));
        instrucciones.setAttribute("id","instrucciones");
        h3 = instrucciones.appendChild(document.createElement('h3'));
        h3.innerText = "Instrucciones: ";
        
        ul = instrucciones.appendChild(document.createElement('ul'));
        for (const instruccion of receta.instrucciones){
            const li = ul.appendChild(document.createElement('li'));
            li.innerText = instruccion;
        }

        const votar = this.wrapper.appendChild(document.createElement('div'));
        votar.setAttribute("id","votar");
        h3 = votar.appendChild(document.createElement('h3'));
        h3.innerText = "Mi voto";
        barraVotar = votar.appendChild(document.createElement('div'));
        barraVotar.setAttribute("id","barraVotar");
        barraVotar.innerText = "Aqui va el webcomp app-barra-votar";

        const comentar = this.wrapper.appendChild(document.createElement('div'));
        comentar.setAttribute("id","comentar");
        h3 = comentar.appendChild(document.createElement('h3'));
        h3.innerText = "Comentarios";
        barraComentar = comentar.appendChild(document.createElement('div'));
        barraComentar.setAttribute("id","barraComentar");
        barraComentar.innerText = "Aqui va el webcomp app-barra-comentar";

        this.shadowRoot.appendChild(this.wrapper);
    }
}

customElements.define('app-receta-full',RecetaFullComponent);