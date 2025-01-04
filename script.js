document.getElementById("contacto__formulario").addEventListener("input", function() {
    validarCampos();
});

document.getElementById("contacto__formulario").addEventListener("submit", function(event) {
    event.preventDefault();
    if (validarFormulario()) {
        alert("Formulario enviado correctamente.");
        limpiarCampos();
    }
});

function validarCampos() {
    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const asunto = document.getElementById("asunto").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    const botonEnviar = document.querySelector(".contacto__button");

    if (nombre !== "" && email !== "" && asunto !== "" && mensaje !== "" && mensaje.length <= 300) {
        botonEnviar.disabled = false;
    } else {
        botonEnviar.disabled = true;
    }
}

function validarFormulario() {
    const nombre = document.getElementById("nombre").value.trim();
    const nombreError = document.getElementById("nombreError");
    nombreError.textContent = "";

    const email = document.getElementById("email").value.trim();
    const emailError = document.getElementById("emailError");
    emailError.textContent = "";

    const asunto = document.getElementById("asunto").value.trim();
    const asuntoError = document.getElementById("asuntoError");
    asuntoError.textContent = "";

    const mensaje = document.getElementById("mensaje").value.trim();
    const mensajeError = document.getElementById("mensajeError");
    mensajeError.textContent = "";

    let isValid = true;

    // Validación del campo Nombre
    if (nombre === "") {
        nombreError.textContent = "El campo Nombre no debe estar en blanco o vacío.";
        isValid = false;
    } else if (nombre.length > 50) {
        nombreError.textContent = "El campo Nombre debe contener máximo 50 caracteres.";
        isValid = false;
    }

    // Validación del campo E-mail
    if (email === "") {
        emailError.textContent = "El campo E-mail no debe estar en blanco o vacío.";
        isValid = false;
    } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            emailError.textContent = "El campo E-mail debe estar en formato correcto. Ejemplo: texto@texto.com";
            isValid = false;
        }
    }

    // Validación del campo Asunto
    if (asunto === "") {
        asuntoError.textContent = "El campo Asunto no debe estar en blanco o vacío.";
        isValid = false;
    } else if (asunto.length > 50) {
        asuntoError.textContent = "El campo Asunto debe contener máximo 50 caracteres.";
        isValid = false;
    }

    // Validación del campo Mensaje
    if (mensaje === "") {
        mensajeError.textContent = "El campo Mensaje no debe estar en blanco o vacío.";
        isValid = false;
    } else if (mensaje.length > 300) {
        mensajeError.textContent = "El campo Mensaje debe contener máximo 300 caracteres.";
        isValid = false;
    }

    return isValid;
}

function limpiarCampos() {
    document.getElementById("nombre").value = "";
    document.getElementById("email").value = "";
    document.getElementById("asunto").value = "";
    document.getElementById("mensaje").value = "";
    const botonEnviar = document.querySelector(".contacto__button");
    botonEnviar.disabled = true;
}

function toggleTheme() {
    const toggleButton = document.getElementById('cambiar-tema');
    const body = document.body;

    toggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
    });
}

toggleTheme();
