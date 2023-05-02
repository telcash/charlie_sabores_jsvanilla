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
    <div id="barraVotar">
        <app-barra-votar></app-barra-votar>
    </div>
    <div id="comentar">
        <h3>Comentarios</h3>
        <div>
            Aquí va la barra de comentar
        </div>
    </div>

</div>

 */

const receta = {
    nombre:"Tarta de Queso Red Velvet",
    img:"img/recetas/tarta_queso_red_velvet.jpeg",
    rating: "4.5 (15 votos)",
    comentarios:"6 comentarios",
    porciones:"Porciones 14-16",
    tiempo:"Tiempo: 1 1/2 horas + 6 horas de enfriamiento",
    ingredientes:[
        "2 rondas de pastel de terciopelo rojo (9 pulgadas)",
        "2 tazas (8 onzas) de azúcar de confitería",
        "8 cucharadas de mantequilla sin sal, ablandada",
        "1 1⁄2 libra de queso crema, ablandado",
        "3⁄4 cucharadita de extracto de vainilla",
        "Una pizca de sal",
        "1 1⁄2 cucharadita de gelatina sin sabor",
        "1 1⁄2 tazas de crema de leche",
        "6 onzas de chocolate blanco, picado",
        "1⁄2 taza (3 1/2 onzas) de azúcar granulada",
        "Rizos de chocolate blanco"
    ],
    instrucciones:[
        "<strong>PARA EL PASTEL:</strong> Con un cuchillo dentado, divida los pasteles horizontalmente a 1 pulgada de la parte inferior. Con los dedos, desmenuza las tapas en pequeñas migas; deja a un lado las migas en un recipiente hermético. Coloca 1 ronda de pastel restante en un molde de resorte de 9 pulgadas; reserva la segunda ronda de pastel.",
        "<strong>PARA EL FROSTING:</strong> Usando una batidora de pie equipada con paleta, bata el azúcar y la mantequilla de los confiteros a velocidad media-alta hasta que estén esponjosos, unos 2 minutos. Corte 8 onzas de queso crema en 4 piezas y agregue 1 pieza a la vez, continuando batir hasta que se incorpore, unos 30 segundos. Batir con vainilla y sal. Refrigerar el glaseado hasta que esté listo para usar.",
        "<strong>PARA EL RELLENO:</strong> Espolvorear la gelatina sobre 1/2 taza de crema espesa en una cacerola pequeña y dejar reposar hasta que la gelatina se ablande, unos 5 minutos. Cocine la mezcla a fuego lento hasta que los bordes estén burbujeando. Agregue el chocolate blanco y continúe cocinando, revolviendo constantemente, hasta que se derrita y quede suave. Deje a un lado para que se enfríe ligeramente, unos 15 minutos. Usando una batidora de pie limpia equipada con un batidor, bata la restante 1 taza de crema espesa a velocidad media-alta a picos suaves, de 1 a 2 minutos; transfiera a un tazón mediano y reserve. Usando una batidora de pie ahora vacía equipada con paleta, bata el resto de 1 libra de queso crema y azúcar granulada a velocidad media-alta hasta que esté ligero y esponjoso, de 2 a 3 minutos. Reduzca la velocidad a media-baja, agregue la mezcla de chocolate blanco y mezcle hasta que se mezcle, raspando los lados del tazón según sea necesario. Con una espátula de goma, dobla suavemente la crema batida hasta que se mezcle.",
        "<strong>PARA MONTAR:</strong> Extienda el relleno sobre el pastel en la sartén y alise en una capa uniforme. Coloque el pastel restante alrededor, corte el lado hacia abajo, en la parte superior. Cubra con una envoltura de plástico y refrigere hasta que esté listo, unas 6 horas. Pase un cuchillo fino entre el pastel y los lados de la sartén; retire los lados de la sartén. Transfiera el pastel al soporte o plato para pasteles. Extiende el glaseado en una capa uniforme sobre la parte superior y los lados del pastel. Presione suavemente las migas de pastel reservadas sobre los lados del pastel. Coloca un montículo de rizos de chocolate en el centro del pastel. Servir."
    ]
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
        img.setAttribute("src","img/icons/estrella_solid.png");
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
        img.setAttribute("src",receta.img);
        img.setAttribute("alt",receta.nombre);

        const acciones = this.wrapper.appendChild(document.createElement('div'));
        acciones.setAttribute("id","acciones");

        const imprimir = acciones.appendChild(document.createElement('div'));
        imprimir.setAttribute("class","acciones");
        let input = imprimir.appendChild(document.createElement('input'));
        input.setAttribute("type","button");
        input.setAttribute("name","imprimir");
        input.setAttribute("value","IMPRIMIR");
        input.onclick = () => {
            alert('Receta impresa');
        }

        const guardar = acciones.appendChild(document.createElement('div'));
        guardar.setAttribute("class","acciones");
        input = guardar.appendChild(document.createElement('input'));
        input.setAttribute("type","button");
        input.setAttribute("name","guardar");
        input.setAttribute("value","GUARDAR");
        input.onclick = () => {
            alert('Receta guardada');
        }

        const ingredientes = this.wrapper.appendChild(document.createElement('div'));
        ingredientes.setAttribute("id","ingredientes");
        let h3 = ingredientes.appendChild(document.createElement('h3'));
        h3.innerText = "Lista de ingredientes: ";
        
        for (const ingrediente of receta.ingredientes){
            const div = ingredientes.appendChild(document.createElement('div'));
            div.setAttribute("class","ingrediente");
            
            const input = div.appendChild(document.createElement('input'));
            input.setAttribute("type","checkbox");
            
            const h6 = div.appendChild(document.createElement('h6'));
            h6.innerText = ingrediente;
        }

        const instrucciones = this.wrapper.appendChild(document.createElement('div'));
        instrucciones.setAttribute("id","instrucciones");
        h3 = instrucciones.appendChild(document.createElement('h3'));
        h3.innerText = "Instrucciones: ";
        
        let i = 1;
        for (const instruccion of receta.instrucciones){
            const div = instrucciones.appendChild(document.createElement('div'));
            div.setAttribute("class","instruccion");

            const instNum = div.appendChild(document.createElement('div'));
            instNum.setAttribute("class","instNum");

            const h4 = instNum.appendChild(document.createElement('h4'));
            h4.innerText = i;

            const h6 = div.appendChild(document.createElement('h6'));
            h6.innerHTML = instruccion;
            i++;
        }

        const barraVotar = this.wrapper.appendChild(document.createElement('div'));
        barraVotar.setAttribute("id","barraVotar");
        barraVotar.appendChild(document.createElement('app-barra-votar'));

        const comentar = this.wrapper.appendChild(document.createElement('div'));
        comentar.setAttribute("id","comentar");
        h3 = comentar.appendChild(document.createElement('h3'));
        h3.innerText = "Comentarios";
        const barraComentar = comentar.appendChild(document.createElement('div'));
        barraComentar.setAttribute("id","barraComentar");
        

        this.shadowRoot.appendChild(this.wrapper);
    }
}

customElements.define('app-receta-full',RecetaFullComponent);