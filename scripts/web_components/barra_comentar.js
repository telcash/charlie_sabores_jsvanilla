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
    textArea;

    constructor(){
        super();

        this.css = document.createElement('link');
        this.css.setAttribute("rel", "stylesheet");
        this.css.setAttribute("href", "styles/web_components/barra_comentar.css");

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

        this.textArea = miTexto.appendChild(document.createElement('textarea'));
        this.textArea.setAttribute("id","textArea");
        this.textArea.setAttribute("name","comentar");
        this.textArea.setAttribute("maxlength","600");
        this.textArea.setAttribute("placeholder","Comentar...");

        this.textArea.addEventListener("focusin",() =>{
            this.textAreaFocusIn();
        });
        this.textArea.addEventListener("focusout",() =>{
            this.textAreaFocusOut();
        });


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

    textAreaFocusIn(){
        console.log(this.textArea);
        this.textArea.setAttribute("rows","12");
    }
    
    textAreaFocusOut(){
        this.textArea.setAttribute("rows","2");
    }
}

customElements.define('app-barra-comentar', BarraComentarComponent);
