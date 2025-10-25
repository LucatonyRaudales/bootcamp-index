# Proyecto: Página Web "GitHub Bootcamp"

Este proyecto consiste en una página web simple pero atractiva (HTML/CSS/JS) diseñada para explicar los conceptos básicos de un Bootcamp de GitHub.

## Descripción

El objetivo es crear un recurso visual para personas interesadas en aprender sobre control de versiones. La página web es estática pero incluye una animación dinámica con JavaScript para hacerla más "vistosa".

## Estructura de Archivos

El proyecto se compone de 4 archivos principales:

### 1. `index.html`

* **Propósito:** Es el esqueleto de la página web.
* **Contenido:**
    * Un encabezado (`<header>`) con el título del bootcamp.
    * Una barra de navegación (`<nav>`) para moverse por las secciones.
    * Una sección (`<section id="que-es">`) que explica qué es GitHub.
    * Una sección (`<section id="temario">`) que lista los temas clave del bootcamp (repos, commits, branches, etc.).
    * Una sección (`<section id="animacion">`) que contiene el elemento `<canvas id="github-animation">`.
    * Un pie de página (`<footer>`).
* **Enlaces:** Importa `style.css` para los estilos y `app.js` para la funcionalidad de animación.

### 2. `style.css`

* **Propósito:** Define la apariencia visual de la página (`index.html`).
* **Características:**
    * Utiliza un **tema oscuro** (fondo `#0d1117`, texto claro), inspirado en la interfaz de GitHub.
    * Usa **variables CSS** (`:root`) para manejar fácilmente la paleta de colores.
    * Establece estilos para todos los elementos: tipografía, espaciado, bordes y tarjetas.
    * Asegura que el `<canvas>` ocupe el 100% del ancho de su contenedor.
    * La barra de navegación es `sticky` (se queda fija en la parte superior al hacer scroll).

### 3. `app.js`

* **Propósito:** Crear la animación visual en el `<canvas>`.
* **Funcionalidad:**
    * Espera a que el documento HTML esté cargado (`DOMContentLoaded`).
    * Obtiene el elemento `<canvas>` y su contexto 2D.
    * Ajusta el tamaño del canvas al de su contenedor (y lo reajusta si la ventana cambia de tamaño).
    * Define una clase `Particle` (partícula) que tiene posición (x, y), tamaño, color y velocidad.
    * Crea un array de 70 partículas (`particleCount`) con posiciones y velocidades aleatorias.
    * Crea un bucle de animación (`animate`) usando `requestAnimationFrame` que:
        1.  Limpia el canvas.
        2.  Actualiza la posición de cada partícula (haciéndola rebotar en los bordes).
        3.  Dibuja cada partícula.
        4.  Dibuja líneas tenues entre partículas que están cerca (efecto "constelación" o "red"), simbolizando la conexión y el flujo de datos.

### 4. `README.md`

* **Propósito:** Este mismo archivo. Explica la finalidad y la estructura del proyecto.

## Cómo Usarlo

1.  Crea una carpeta para tu proyecto.
2.  Guarda los cuatro archivos (`index.html`, `style.css`, `app.js`, `README.md`) dentro de esa carpeta.
3.  Abre el archivo `index.html` en cualquier navegador web (como Chrome, Firefox, o Edge).
4.  ¡Listo! Verás la página web funcionando con la animación.