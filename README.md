
# Login con Efecto Cristal Líquido 

Alumno: Guzman Jimenez Alary

## Descripción

Este proyecto consiste en la creación de un sistema de Login utilizando **HTML**, **CSS** y **JavaScript**, aplicando un efecto visual moderno tipo *Cristal Líquido* (Glassmorphism) y transiciones animadas. Además, se incluye un panel para **registro de usuarios**, validaciones básicas en el cliente y enlaces simulados a redes sociales. El diseño es responsivo y se optimiza visualmente usando Bootstrap (solo para layout si se desea).

---

## Estructura del Proyecto

```
│   README.md
│   index.html                  # Página principal (Login/Registro)
│
├── css/
│      login.css                # Hoja de estilos principal (efecto cristal líquido incluido)
│
├── js/
│      login.js                 # Archivo de lógica JS para cambios de panel y validaciones
│
└── img/
       img1.jpg                 # Imagen de fondo
       iconos redes sociales    # Otros recursos visuales opcionales
```

---

## Tecnologías Utilizadas

* HTML5  
* CSS3  
* JavaScript  

---

## Funcionamiento Principal
El sistema incluye:

* Panel Animado
Permite alternar entre los formularios de Inicio de Sesión y Registro mediante una animación deslizante, sin necesidad de recargar la página.

* Efecto Cristal Líquido (Glassmorphism)
Aplicado sobre formularios, botones y panel lateral para lograr una apariencia moderna con transparencia y difuminado.

- **Validaciones en el Cliente**:
  - Campos obligatorios.
  - Contraseñas con mínimo 8 caracteres.
* Redirección Simulada.
* Los íconos de redes sociales llevan a las páginas oficiales de inicio de sesión de Facebook, Google y LinkedIn.
* Este es un ejemplo visual, no se conecta realmente con APIs de esas plataformas.

---

### **JavaScript Explicado**

### Alternancia del Panel con Efecto Deslizante
```js
const btnRegistrar = document.getElementById('btn-registrar');
const btnIniciar = document.getElementById('btn-iniciar');
const contenedor = document.getElementById('contenedor-principal');

btnRegistrar.addEventListener('click', () => {
    contenedor.classList.add("panel-activo");
});

btnIniciar.addEventListener('click', () => {
    contenedor.classList.remove("panel-activo");
});
```
### Explicación:

- Se capturan los botones de "Registrarse" y "Iniciar Sesión" mediante su id.
- Al hacer clic en cada botón, se agrega o elimina la clase .panel-activo al contenedor principal.
- Esta clase, gestionada por CSS, activa la animación de deslizamiento que muestra u oculta los formularios correspondientes.

### Validación del Registro (Campos Requeridos + Contraseña Segura)
```js
document.getElementById('btn-enviar-registro').addEventListener('click', () => {
    const nombre = document.querySelector('.registrar input[type="text"]').value.trim();
    const email = document.querySelector('.registrar input[type="email"]').value.trim();
    const password = document.querySelector('.registrar input[type="password"]').value.trim();

    if (nombre === '' || email === '' || password === '') {
        alert('Por favor, completa todos los campos.');
        return;
    }

    if (password.length < 8) {
        alert('La contraseña debe tener al menos 8 caracteres.');
        return;
    }

    alert('Registro exitoso');
});
```
### Explicación:
- Se obtienen los valores de los campos del formulario de registro usando querySelector.
- **`.trim()`** elimina espacios en blanco al principio y al final, evitando errores de validación por espacios vacíos.
- Si algún campo está vacío, muestra un mensaje de alerta al usuario.
- Si la contraseña tiene menos de 8 caracteres, se muestra una advertencia para reforzar la seguridad.
- Si todo es correcto, se simula un registro exitoso con una alerta (en un caso real, aquí se enviaría la información al servidor).

---

### **Estilos CSS Detallados**

### Ejemplo de Estilo con Efecto Cristal Líquido
```css
.contenedor-principal {
    background: linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.05));
    backdrop-filter: blur(20px) saturate(180%);
    -webkit-backdrop-filter: blur(20px) saturate(180%);
    border: 1px solid rgba(255,255,255,0.3);
    border-radius: 10px;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25),
                0 10px 10px rgba(0,0,0,0.22);
    position: relative;
    overflow: hidden;
    width: 768px;
    max-width: 100%;
    min-height: 480px;
}
```
### Explicación:
- linear-gradient: Genera un degradado suave que simula el efecto de vidrio translúcido.
- backdrop-filter y -webkit-backdrop-filter: Aplican un difuminado al fondo junto a saturación, logrando el clásico efecto de Glassmorphism.
- border: Se define un borde semi-transparente para reforzar la apariencia de cristal.
- border-radius: Suaviza los bordes redondeados, mejorando la estética general.
- box-shadow: Genera una sombra proyectada que aporta profundidad al contenedor.
- El contenedor se adapta automáticamente con max-width para distintos tamaños de pantalla.

---

## Capturas de Pantalla

### Pantalla Inicial

![Login](capturas/captura1.png)

### Registro

![Registro](capturas/captura2.png)

---

## GitHub Pages

Puedes visualizar el proyecto en funcionamiento en:  
**[Ver Demo en GitHub Pages](https://alaryguzman.github.io/Login/)**

---

## Notas Finales

* Proyecto sin frameworks complejos.  
* Ideal para prácticas de diseño moderno y validaciones simples.  
* Recomendado para portafolios académicos o ejercicios de frontend.  
