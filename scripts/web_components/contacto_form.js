class ContactoFormComponent extends HTMLElement{

    css;
    wrapper;
    
    constructor(){
        super();

        this.css = document.createElement('link');
        this.css.setAttribute("rel", "stylesheet");
        this.css.setAttribute("href", "styles/web_components/contacto_form.css");

        this.wrapper = document.createElement('div');
        this.wrapper.setAttribute("class","wrapper");
    }

    connectedCallback(){
        this.attachShadow({
            mode: 'open'
        })
        
        this.shadowRoot.appendChild(this.css);

        const titulo = this.wrapper.appendChild(document.createElement('h1'));
        titulo.innerText = "Si tienes alguna consulta, sugerencia o queja no dudes en escribirnos: ";

        const contacto = this.wrapper.appendChild(document.createElement('form'));
        contacto.setAttribute("id","contacto");
        contacto.setAttribute("method","post");
        contacto.setAttribute("action","#/");

        const nombre = contacto.appendChild(document.createElement('div'))
        nombre.setAttribute("id","nombre");
        nombre.setAttribute("class","campo");
        let label = nombre.appendChild(document.createElement('label'))
        label.setAttribute("for","nombre");
        label.innerText = "Nombre: ";
        let input = nombre.appendChild(document.createElement('input'));
        input.setAttribute("type","text");
        input.setAttribute("name","nombre");

        const apellido = contacto.appendChild(document.createElement('div'))
        apellido.setAttribute("id","apellido");
        apellido.setAttribute("class","campo");
        label = apellido.appendChild(document.createElement('label'));
        label.setAttribute("for","apellido");
        label.innerText = "Apellido: ";
        input = apellido.appendChild(document.createElement('input'));
        input.setAttribute("type","text");
        input.setAttribute("name","apellido");

        const email = contacto.appendChild(document.createElement('div'))
        email.setAttribute("id","email");
        email.setAttribute("class","campo");
        label = email.appendChild(document.createElement('label'));
        label.setAttribute("for","email");
        label.innerText = "email: ";
        input = email.appendChild(document.createElement('input'));
        input.setAttribute("type","text");
        input.setAttribute("name","email");

        const telefono = contacto.appendChild(document.createElement('div'))
        telefono.setAttribute("id","telefono");
        telefono.setAttribute("class","campo");
        label = telefono.appendChild(document.createElement('label'));
        label.setAttribute("for","telefono");
        label.innerText = "Teléfono: ";
        input = telefono.appendChild(document.createElement('input'));
        input.setAttribute("type","text");
        input.setAttribute("name","telefono");

        const direccion = contacto.appendChild(document.createElement('div'))
        direccion.setAttribute("id","direccion");
        direccion.setAttribute("class","campo");
        label = direccion.appendChild(document.createElement('label'));
        label.setAttribute("for","direccion");
        label.innerText = "Dirección: ";
        input = direccion.appendChild(document.createElement('input'));
        input.setAttribute("type","text");
        input.setAttribute("name","direccion");

        const sexo = contacto.appendChild(document.createElement('div'));
        sexo.setAttribute("id","sexo");

        label = sexo.appendChild(document.createElement('label'));
        label.setAttribute("for","sexo");
        label.innerText = "Sexo:"

        const opciones = sexo.appendChild(document.createElement('div'));
        opciones.setAttribute("class","opciones");

        let opcion = opciones.appendChild(document.createElement('div'));
        opcion.setAttribute("class","opcion");
        input = opcion.appendChild(document.createElement('input'));
        input.setAttribute("type","radio");
        input.setAttribute("name","sexo");
        input.setAttribute("value","masculino");
        label = opcion.appendChild(document.createElement('label'));
        label.setAttribute("for","masculino");
        label.innerText = "Masculino";

        opcion = opciones.appendChild(document.createElement('div'));
        opcion.setAttribute("class","opcion");
        input = opcion.appendChild(document.createElement('input'));
        input.setAttribute("type","radio");
        input.setAttribute("name","sexo");
        input.setAttribute("value","femenino");
        label = opcion.appendChild(document.createElement('label'));
        label.setAttribute("for","femenino");
        label.innerText = "Femenino";

        opcion = opciones.appendChild(document.createElement('div'));
        opcion.setAttribute("class","opcion");
        input = opcion.appendChild(document.createElement('input'));
        input.setAttribute("type","radio");
        input.setAttribute("name","sexo");
        input.setAttribute("value","otro");
        label = opcion.appendChild(document.createElement('label'));
        label.setAttribute("for","otro");
        label.innerText = "Otro";

        const motivo = contacto.appendChild(document.createElement('div'))
        motivo.setAttribute("id","motivo");
        motivo.setAttribute("class","campo");
        label = motivo.appendChild(document.createElement('label'));
        label.setAttribute("for","motivo");
        label.innerText = "Motivo:";
        const select = motivo.appendChild(document.createElement('select'));
        select.setAttribute("id","select");
        select.setAttribute("name","motivo");
        let option = select.appendChild(document.createElement('option'));
        option.setAttribute("value","consulta");
        option.innerText = "Consulta";
        option = select.appendChild(document.createElement('option'));
        option.setAttribute("value","sugerencia");
        option.innerText = "Sugerencia";
        option = select.appendChild(document.createElement('option'));
        option.setAttribute("value","queja");
        option.innerText = "Queja";
        
        const comentarios = contacto.appendChild(document.createElement('div'))
        comentarios.setAttribute("id","comentarios");
        comentarios.setAttribute("class","campo");
        const textArea = comentarios.appendChild(document.createElement('textarea'));
        textArea.setAttribute("id","textArea");
        textArea.setAttribute("name","comentarios");
        textArea.setAttribute("cols","30");
        textArea.setAttribute("rows","10");
        textArea.setAttribute("maxlength","600");
        textArea.setAttribute("placeholder","Comentarios.")

        const privacidad = contacto.appendChild(document.createElement('div'))
        privacidad.setAttribute("id","privacidad");
        input = privacidad.appendChild(document.createElement('input'));
        input.setAttribute("type","checkbox");
        input.setAttribute("name","acepto");
        label = privacidad.appendChild(document.createElement('label'));
        label.setAttribute("for","acepto");
        label.innerText = "Estoy de acuerdo que guarden mis datos";

        const enviar = contacto.appendChild(document.createElement('div'))
        enviar.setAttribute("id","enviar");
        input = enviar.appendChild(document.createElement('input'));
        input.setAttribute("type","submit");
        input.setAttribute("name","enviar");
        input.setAttribute("value","Enviar");
        input.onclick = () => {
            alert('Datos enviados');
        }

        this.shadowRoot.appendChild(this.wrapper);
    }
}

customElements.define('app-contacto-form', ContactoFormComponent);