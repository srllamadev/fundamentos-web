# Fundamentos de Desarrollo Web

Repositorio educativo con ejemplos practicos de HTML, CSS y JavaScript para aprender desarrollo web desde cero.

---

## ¿Como usar este repositorio?

Cada carpeta es una leccion independiente con su propio `index.html` y material educativo.

1. Abre cualquier archivo `index.html` directamente en tu navegador.
2. Para las lecciones de JavaScript, presiona **F12** y abre la pestana **Console** para ver los resultados.
3. Sigue el orden numerico para una progresion adecuada de dificultad.

---

## HTML

| Leccion | Tema | Descripcion |
|---------|------|-------------|
| [01-HTML-esqueleto-basico](01-HTML-esqueleto-basico/) | Esqueleto basico | Estructura minima de un documento HTML5 |
| [02-HTML-textos-y-titulos](02-HTML-textos-y-titulos/) | Textos y titulos | Etiquetas de texto y jerarquia de titulos |
| [03-HTML-contenedores-basicos](03-HTML-contenedores-basicos/) | Contenedores basicos | div, span y contenedores genericos |
| [04-HTML-enlaces-e-imagenes](04-HTML-enlaces-e-imagenes/) | Enlaces e imagenes | Etiqueta a, img y rutas relativas |
| [05-HTML-listas](05-HTML-listas/) | Listas | Listas ordenadas, desordenadas y de definicion |
| [06-HTML-formularios](06-HTML-formularios/) | Formularios | Inputs, selects, textareas y validacion |
| [07-HTML-tablas](07-HTML-tablas/) | Tablas | Estructura de tablas HTML |
| [08-HTML-header](08-HTML-header/) | Header | Elemento de cabecera |
| [09-HTML-nav](09-HTML-nav/) | Nav | Navegacion principal |
| [10-HTML-main](10-HTML-main/) | Main | Contenido principal |
| [11-HTML-section](11-HTML-section/) | Section | Secciones tematicas |
| [12-HTML-article](12-HTML-article/) | Article | Contenido independiente |
| [13-HTML-aside](13-HTML-aside/) | Aside | Contenido complementario |
| [14-HTML-footer](14-HTML-footer/) | Footer | Pie de pagina |
| [15-HTML-semantico-ejemplo](15-HTML-semantico-ejemplo/) | Semantico ejemplo | Ejemplo de HTML semantico |
| [16-HTML-semantico-ejemplo-2](16-HTML-semantico-ejemplo-2/) | Semantico ejemplo 2 | Segundo ejemplo de HTML semantico |

---

## CSS

| Leccion | Tema | Descripcion |
|---------|------|-------------|
| [17-CSS-Fundamentos](17-CSS-Fundamentos/) | Fundamentos | Primeros pasos, modelo de caja, cascada, display |
| [18-CSS-hgh](18-CSS-hgh/) | Selectores y propiedades | Sintaxis, selectores basicos, colores y unidades |
| [19-CSS-maquetacion-clasica](19-CSS-maquetacion-clasica/) | Maquetacion clasica | Posicionamiento, float y clear |
| [20-CSS-maquetacion-moderna](20-CSS-maquetacion-moderna/) | Maquetacion moderna | Flexbox, CSS Grid y z-index |
| [21-CSS-estilo-y-presentacion](21-CSS-estilo-y-presentacion/) | Estilo y presentacion | Tipografia, fondos, bordes, sombras y efectos |
| [22-CSS-diseno-responsivo](22-CSS-diseno-responsivo/) | Diseno responsivo | Media queries, unidades fluidas e imagenes responsivas |
| [23-CSS-conceptos-avanzados](23-CSS-conceptos-avanzados/) | Conceptos avanzados | Variables CSS y funciones modernas |
| [24-CSS-buenas-practicas](24-CSS-buenas-practicas/) | Buenas practicas | Metodologia BEM, accesibilidad y semantica |

---

## JavaScript - Fundamentos

Modulo introductorio de JavaScript. Al completar estas 8 lecciones, podras comprender que es JavaScript, ejecutar instrucciones en el navegador, declarar variables, trabajar con tipos de datos, usar operadores, convertir tipos, tomar decisiones con condicionales y repetir instrucciones con bucles.

**Orden recomendado:** sigue las lecciones en orden numerico. Cada una construye sobre los conocimientos de la anterior.

| Leccion | Tema | Concepto principal |
|---------|------|--------------------|
| [25-JS-introduccion-y-consola](25-JS-introduccion-y-consola/) | Introduccion y consola | Que es JavaScript, la consola del navegador, console.log, comentarios |
| [26-JS-vinculacion-con-HTML](26-JS-vinculacion-con-HTML/) | Vinculacion con HTML | Etiqueta script, archivos externos, defer y async |
| [27-JS-variables-y-constantes](27-JS-variables-y-constantes/) | Variables y constantes | let, const, var, reglas de nombrado, alcance de bloque |
| [28-JS-tipos-de-datos](28-JS-tipos-de-datos/) | Tipos de datos | string, number, boolean, undefined, null, typeof |
| [29-JS-operadores](29-JS-operadores/) | Operadores | Aritmeticos, comparacion, logicos, template literals |
| [30-JS-conversion-de-tipos](30-JS-conversion-de-tipos/) | Conversion de tipos | String(), Number(), Boolean(), parseInt(), coercion |
| [31-JS-condicionales](31-JS-condicionales/) | Condicionales | if, else, switch, operador ternario |
| [32-JS-bucles](32-JS-bucles/) | Bucles | for, while, do...while, break, continue, for...of |

### Requisitos para las lecciones de JavaScript

- Un navegador web moderno (Chrome, Firefox, Edge).
- No se necesita instalar nada.
- Abre cualquier `index.html` y presiona F12 para ver la consola.

---

## Estructura del proyecto

```
fundamentos-web/
|
|-- 01 a 16 ---- HTML (estructura y semantica)
|-- 17 a 24 ---- CSS (estilo y diseno)
|-- 25 a 32 ---- JavaScript (fundamentos del lenguaje)
|
|-- README.md
```

---

## Convenciones

- Todos los archivos HTML siguen HTML5 con `lang="es"` y codificacion UTF-8.
- Los ejemplos de JavaScript utilizan ES6+ con `const` por defecto y `let` cuando se requiere reasignacion.
- Los comentarios y la documentacion estan en espanol.
- Cada leccion es independiente y puede ejecutarse sin dependencias externas.
