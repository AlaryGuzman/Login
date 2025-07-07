const btnRegistrar = document.getElementById('btn-registrar');
const btnIniciar = document.getElementById('btn-iniciar');
const contenedor = document.getElementById('contenedor-principal');

btnRegistrar.addEventListener('click', () => {
    contenedor.classList.add("panel-activo");
});

btnIniciar.addEventListener('click', () => {
    contenedor.classList.remove("panel-activo");
});

