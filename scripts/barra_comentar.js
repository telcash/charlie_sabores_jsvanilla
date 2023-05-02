/* 

HTML Template

<div class="wrapper">
    <div id="titulo">
        <h2>Titulo</h2>
    </div>
    <div id="miComentario">
        <form id="miForm" action="#/" method="post">
            <div id="miTexto">
                <textarea name="miTexto" id="miTexto" cols="30" rows="1">
                    Comentarios
                </textarea>
            </div>
            <div id="publicar">
                <input type="button" name="publicar" onclick="alert('Comentario enviado)" value="Publicar">
            </div>
        </form>
    </div>
    <div id="otrosComentarios">
        <div class="container">
            <div class="nombre">
                <h5>Nombre usuario</h5>
            </div>
            <div class="fecha">
                <h6>Fecha</h6>
            </div>
            <div class="texto">
                <p>Comentario del usuario</p>
            </div>
        </div>
    </div>
</div> 

*/
let textArea;

const comentarios = [
    {
        nombre:"Luis Campos",
        fecha:"25-03-2023",
        texto:"¡Esto fue fabuloso! Fue bastante fácil de hacer, aunque consumía un poco de tiempo. Sin embargo, valió la pena. Parecía un espectáculo y tenía un sabor increíble. Definitivamente lo haré de nuevo."
    },
    {
        nombre:"María García",
        fecha:"01-02-2023",
        texto:"¡Hicé esto para el cumpleaños de mi marido y fue un éxito! Estaba nervioso al hacerlo y, aunque llevaba un poco de tiempo, todavía podía socializar mientras me preparaba. Me preocupaba que fuera feo, pero seguí las instrucciones y se veía hermoso"
    },
    {
        nombre:"Andrea González",
        fecha:"28-12-2022",
        texto:"Perfecto en ambas ocasiones y planeado para Navidad este año, hermoso y delicioso, gracias. De acuerdo, vale la pena todos los pasos, aunque es fácil."
    }
]

class BarraComentarComponent extends HTMLElement{
    css;
    wrapper;

    constructor(){
        super();

        this.css = document.createElement('link');
        this.css.setAttribute("rel", "stylesheet");
        this.css.setAttribute("href", "styles/barra_comentar.css");

        this.wrapper = document.createElement('div');
        this.wrapper.setAttribute("class","wrapper");
    }

    connectedCallback(){
        this.attachShadow({
            mode: 'open'
        })
        this.shadowRoot.appendChild(this.css);

        const titulo = this.wrapper.appendChild(document.createElement('div'));
        titulo.setAttribute("id","titulo");

        const h2 = titulo.appendChild(document.createElement('h2'));
        h2.innerText = comentarios.length + " Comentarios";

        const miComentario = this.wrapper.appendChild(document.createElement('div'));
        miComentario.setAttribute("id","miComentario");

        const miForm = miComentario.appendChild(document.createElement('form'));
        miForm.setAttribute("id","miForm");
        miForm.setAttribute("method","post");
        miForm.setAttribute("action","#/");

        const miTexto = miForm.appendChild(document.createElement('div'));
        miTexto.setAttribute("id","miTexto");

        textArea = miTexto.appendChild(document.createElement('textarea'));
        textArea.setAttribute("id","textArea");
        textArea.setAttribute("name","comentar");
        //textArea.setAttribute("cols","30");
        //textArea.setAttribute("rows","1");
        textArea.setAttribute("maxlength","600");
        textArea.setAttribute("placeholder","Comentar...");
        textArea.addEventListener("focusin",textAreaFocusIn);
        textArea.addEventListener("focusout",textAreaFocusOut);


        const publicar = miForm.appendChild(document.createElement('div'));
        publicar.setAttribute("id","publicar");

        const input = publicar.appendChild(document.createElement('input'));
        input.setAttribute("type","button");
        input.setAttribute("name","publicar");
        input.setAttribute("value","Publicar");
        input.onclick = () => {
            alert('Comentario publicado');
        }

        const otrosComentarios = this.wrapper.appendChild(document.createElement('div'));
        otrosComentarios.setAttribute("id","otrosComentarios");

        for (const comentario of comentarios){
            const container = otrosComentarios.appendChild(document.createElement('div'));
            container.setAttribute("class","container");

            const nombre = container.appendChild(document.createElement('div'));
            nombre.setAttribute("class","nombre");
            const h5 = nombre.appendChild(document.createElement('h5'));
            h5.innerText = comentario.nombre;

            const fecha = container.appendChild(document.createElement('div'));
            fecha.setAttribute("class","fecha");
            const h6 = fecha.appendChild(document.createElement('h6'));
            h6.innerText = comentario.fecha;

            const texto = container.appendChild(document.createElement('div'));
            texto.setAttribute("class","texto");
            const p = texto.appendChild(document.createElement('p'));
            p.innerText = comentario.texto;
        }

        this.shadowRoot.appendChild(this.wrapper);
    }

}

customElements.define('app-barra-comentar', BarraComentarComponent);

function textAreaFocusIn(){
    textArea.setAttribute("rows","12");
}

function textAreaFocusOut(){
    textArea.setAttribute("rows","2");
}