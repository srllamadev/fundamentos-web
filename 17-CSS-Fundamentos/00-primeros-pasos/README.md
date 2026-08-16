# Primeros pasos con CSS

El objetivo principal es practicar cómo aplicar estilos CSS a una estructura HTML y cómo organizar sus elementos mediante el modelo de caja y `float`.

## Archivos

- `index.html`: contiene la estructura y el contenido de la página.
- `styles.css`: contiene las reglas de presentación visual y distribución del contenido.

## Estructura del HTML

El documento utiliza la siguiente estructura:

- `header`: muestra el título **Bienvenido a mi sitio web**.
- `nav`: contiene una lista de enlaces para Inicio, Acerca de, Servicios, Blog y Contacto.
- `section`: agrupa cuatro artículos.
- `article`: representa cada artículo individual.
- `aside`: funciona como barra lateral e incluye un campo de búsqueda y un botón.
- `footer`: muestra el aviso de derechos de autor.

El contenedor principal es un `div` con el identificador `contenidoAAA`. La hoja de estilos se enlaza desde el elemento `head` mediante:

```html
<link rel="stylesheet" href="styles.css">
```

## Documentación del CSS

### 1. Reinicio de estilos y modelo de caja

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```

- El selector universal `*` selecciona todos los elementos.
- `margin: 0` elimina los márgenes predeterminados del navegador.
- `padding: 0` elimina el relleno predeterminado.
- `box-sizing: border-box` hace que el ancho y alto declarados incluyan el contenido, el `padding` y el borde. Esto facilita calcular el tamaño real de los elementos.

Este bloque es un reinicio CSS sencillo que permite comenzar con una apariencia más controlada.

### 2. Estilos generales del documento

```css
body {
    background-color: white;
    font-family: Arial, sans-serif;
}
```

- `background-color: white` establece el fondo blanco de la página.
- `font-family` define Arial como fuente principal y `sans-serif` como alternativa si Arial no está disponible.

### 3. Contenedor principal

```css
#contenidoAAA {
    width: 1200px;
    margin: 0px auto;
    border: 1px solid black;
}
```

- `#contenidoAAA` usa un selector de identificador (`#`) para seleccionar el contenedor principal.
- `width: 1200px` establece un ancho fijo de 1200 píxeles.
- `margin: 0px auto` elimina el margen vertical y centra horizontalmente el contenedor cuando existe espacio disponible.
- `border: 1px solid black` agrega un borde negro de 1 píxel.

### 4. Encabezado

```css
header {
    background-color: red;
    height: 100px;
    width: 100%;
    margin: 0px;
    text-align: center;
    line-height: 100px;
    border-bottom: 3px solid black;
}
```

- `background-color` pinta el fondo de color rojo.
- `height` fija la altura en 100 píxeles.
- `width: 100%` hace que ocupe todo el ancho de su contenedor.
- `text-align: center` centra horizontalmente el texto.
- `line-height: 100px` iguala la altura de línea con la altura del encabezado para centrar verticalmente el título en este caso de una sola línea.
- `border-bottom` agrega una separación inferior negra de 3 píxeles.

### 5. Barra de navegación

```css
nav {
    background-color: rgb(14, 14, 128);
    height: 50px;
    border-bottom: 1px solid black;
}
```

La navegación tiene un fondo azul definido con la función `rgb()`, una altura de 50 píxeles y un borde inferior de 1 píxel.

Los elementos de la lista se muestran horizontalmente con estas reglas:

```css
nav ul li {
    float: left;
    list-style: none;
    margin: 10px;
    line-height: 30px;
}
```

- `float: left` saca cada elemento del flujo normal y lo alinea hacia la izquierda. Al repetirse en cada `li`, los enlaces se colocan en una misma fila.
- `list-style: none` elimina las viñetas de la lista.
- `margin: 10px` separa los elementos entre sí.
- `line-height: 30px` establece la altura de línea de cada elemento del menú.

Los enlaces se personalizan así:

```css
nav ul li a {
    text-decoration: none;
    color: white;
}
```

- `text-decoration: none` elimina el subrayado predeterminado de los enlaces.
- `color: white` cambia el texto a color blanco para contrastarlo con el fondo azul.

### 6. Distribución del contenido principal

```css
section {
    float: left;
    width: 80%;
    min-height: 400px;
    background-color: purple;
}

aside {
    float: left;
    width: 20%;
    background-color: rgb(12, 64, 45);
    min-height: 400px;
    padding: 10px;
}
```

La sección principal y la barra lateral usan `float: left`, por lo que se colocan una junto a la otra:

- `section` ocupa el 80% del ancho y tiene fondo morado.
- `aside` ocupa el 20% restante y tiene fondo verde oscuro.
- `min-height: 400px` garantiza una altura mínima para ambas áreas, aunque su contenido sea pequeño.
- `padding: 10px` agrega espacio interior al contenido de la barra lateral.

Como ambas anchuras suman el 100%, el diseño aprovecha todo el ancho del contenedor principal.

### 7. Limpieza de los elementos flotantes

```css
footer {
    clear: both;
    background-color: #1ec63d;
    color: rgb(27, 22, 22);
    text-align: center;
    height: 50px;
    line-height: 50px;
}
```

- `clear: both` evita que el pie de página se coloque al lado de los elementos flotantes anteriores. Hace que comience debajo de `section` y `aside`.
- `background-color: #1ec63d` utiliza un color hexadecimal para el fondo verde.
- `color: rgb(27, 22, 22)` define el color del texto mediante RGB.
- `text-align: center` centra horizontalmente el texto.
- `height` y `line-height` establecen una altura de 50 píxeles y centran verticalmente el texto de una sola línea.

## Conceptos CSS practicados

- Selectores universales, de identificador, de etiqueta y selectores descendientes.
- Propiedades de color con nombres, `rgb()` y valores hexadecimales.
- Márgenes, relleno, bordes, ancho y alto.
- Modelo de caja con `box-sizing: border-box`.
- Tipografía y alineación del texto.
- Eliminación de viñetas y subrayado de enlaces.
- Distribución horizontal mediante `float`.
- Control del flujo mediante `clear`.
- Uso de `min-height` para mantener una altura mínima en columnas.

## Observaciones

- El contenedor tiene un ancho fijo de `1200px`, por lo que todavía no es un diseño responsive para pantallas pequeñas.
- La clase `.articleBBB` está presente en los artículos, pero no tiene reglas CSS propias en esta versión.
- El `div` con la clase `.clearfix` está incluido en el HTML, aunque actualmente no existe una regla `.clearfix` en `styles.css`; la limpieza de los floats se realiza en el `footer` mediante `clear: both`.
- Los enlaces utilizan `href="#"`, por lo que son elementos de demostración y todavía no dirigen a páginas reales.