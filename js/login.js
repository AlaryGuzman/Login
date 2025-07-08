const btnRegistrar = document.getElementById('btn-registrar');
const btnIniciar = document.getElementById('btn-iniciar');
const contenedor = document.getElementById('contenedor-principal');

btnRegistrar.addEventListener('click', () => {
    contenedor.classList.add("panel-activo");
});

btnIniciar.addEventListener('click', () => {
    contenedor.classList.remove("panel-activo");
});

// Validación Registro
document.getElementById('btn-enviar-registro').addEventListener('click', () => {
    const nombre = document.querySelector('.registrar input[type="text"]').value.trim();
    const email = document.querySelector('.registrar input[type="email"]').value.trim();
    const password = document.querySelector('.registrar input[type="password"]').value.trim();
    const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nombre === '' || email === '' || password === '') {
        alert('Por favor, completa todos los campos.');
        return;
    }

    if (!correoValido.test(email)) {
        alert('Introduce un correo electrónico válido.');
        return;
    }

    if (password.length < 8) {
        alert('La contraseña debe tener al menos 8 caracteres.');
        return;
    }


    alert('Registro exitoso');
    contenedor.classList.remove("panel-activo");
});

// Validación Ingreso
document.getElementById('btn-enviar-login').addEventListener('click', () => {
    const email = document.querySelector('.ingresar input[type="email"]').value.trim();
    const password = document.querySelector('.ingresar input[type="password"]').value.trim();
    const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === '' || password === '') {
        alert('Por favor, completa todos los campos.');
        return;
    }

    if (!correoValido.test(email)) {
        alert('Introduce un correo electrónico válido.');
        return;
    }

    alert('Inicio de sesión exitoso');
    window.location.href = 'https://alaryguzman.github.io/Portafolio/';
});


