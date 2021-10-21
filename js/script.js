const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');
const contenidoForm = document.querySelector('.contenido-formulario');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();
    const { nombre, email, mensaje } = datos;
    if (nombre === '' || email === '' || mensaje === '') {
        mostrarMensaje('Todos los campos son obligatorios', 'error');
        return;
    }
    mostrarMensajeEnviado('Enviado correctamente', 'enviado');

});

function leerTexto(e) {
    datos[e.target.id] = e.target.value;
};


function mostrarMensaje(mensaje, clase) {

    const error = document.createElement('P');
    error.textContent = mensaje;
    error.classList.add(clase);
    contenidoForm.appendChild(error);

    setTimeout(() => {
        error.remove();
    }, 4000);
}

function mostrarMensajeEnviado(mensaje, clase) {
    const enviado = document.createElement('P');
    enviado.textContent = mensaje;
    enviado.classList.add(clase);
    contenidoForm.appendChild(enviado);

    setTimeout(() => {
        enviado.remove();
    }, 4000);
}