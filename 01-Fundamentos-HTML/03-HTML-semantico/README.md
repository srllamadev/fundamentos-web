# HTML Semantico - Perfil Profesional de Ingeniero Industrial

## Bienvenidos a la segunda parte del curso

En el curso anterior aprendiste la **sintaxis basica de HTML**: el esqueleto, textos, contenedores (`<div>` y `<span>`), enlaces, imagenes, listas y formularios. Todo funcionaba, pero usabamos `<div>` para **todo**.

Ahora aprenderas **HTML semantico**: etiquetas que le dicen al navegador **que significa** cada parte de tu pagina, no solo como mostrarla.

---

## ¿Que es HTML semantico?

HTML semantico es usar etiquetas que **describen el proposito** del contenido:

```html
<!-- SIN semantica: el navegador no sabe que es cada caja -->
<div>
    <h1>Yamil N</h1>
</div>

<!-- CON semantica: el navegador sabe que es la cabecera -->
<header>
    <h1>Yamil N</h1>
</header>
```

El resultado visual es el mismo. La diferencia es que **el navegador, los lectores de pantalla y Google entienden tu pagina**.

---

## Estructura del curso

| # | Carpeta | Etiqueta | Que aprendes |
|---|---------|----------|--------------|
| 01 | [01-header](./01-header/) | `<header>` | La cabecera: presentacion, titulo, contacto rapido |
| 02 | [02-nav](./02-nav/) | `<nav>` | El menu de navegacion con enlaces internos |
| 03 | [03-main](./03-main/) | `<main>` | El contenido principal unico de la pagina |
| 04 | [04-section](./04-section/) | `<section>` | Secciones tematicas con titulo |
| 05 | [05-article](./05-article/) | `<article>` | Contenido independiente y autocontenido |
| 06 | [06-aside](./06-aside/) | `<aside>` | Contenido complementario o lateral |
| 07 | [07-footer](./07-footer/) | `<footer>` | El pie de pagina: copyright, contacto, legales |

---

## La estructura completa

Cuando termines las 7 lecciones, tu pagina tendra esta estructura:

```
┌──────────────────────────────────────────────────────┐
│ <header>                                             │
│   <h1>Yamil N</h1>                                   │
│   <h2>Ingeniero Industrial</h2>                       │
│   Contacto rapido                                     │
├──────────────────────────────────────────────────────┤
│ <nav>                                                │
│   Perfil | Experiencia | Formacion | Articulos | ... │
├──────────────────────────────────┬───────────────────┤
│ <main>                           │ <aside>           │
│                                  │                   │
│   <section id="perfil">          │   Datos Rapidos   │
│     Perfil Profesional           │   Certificaciones │
│   </section>                     │   Idiomas         │
│                                  │   Software        │
│   <section id="experiencia">     │                   │
│     <article>Trabajo 1</article> │                   │
│     <article>Trabajo 2</article> │                   │
│     <article>Trabajo 3</article> │                   │
│   </section>                     │                   │
│                                  │                   │
│   <section id="formacion">       │                   │
│     <article>Maestria</article>  │                   │
│     <article>Ingenieria</article>│                   │
│   </section>                     │                   │
│                                  │                   │
│   <section id="articulos">       │                   │
│     <article>Publicacion 1</article>                 │
│     <article>Publicacion 2</article>                 │
│   </section>                     │                   │
│                                  │                   │
├──────────────────────────────────┴───────────────────┤
│ <footer>                                             │
│   (c) 2026 Yamil N | La Paz, Bolivia                │
└──────────────────────────────────────────────────────┘
```

---

## Como usar este material

1. **Abre cada carpeta en orden** (01 a 07).
2. **Lee el `README.md`** de cada carpeta: explica la etiqueta en detalle con analogias y ejemplos.
3. **Abre el `index.html`** en tu navegador: veras solo esa etiqueta en accion.
4. **Copia el codigo** y practicalo en tu propio archivo.
5. **Al final**, abre el `index.html` de esta carpeta raiz: veras todas las etiquetas trabajando juntas.

---

## Resumen rapido de las 7 etiquetas

| Etiqueta | Proposito | Regla clave |
|----------|-----------|-------------|
| `<header>` | Cabecera de la pagina | Uno principal por pagina |
| `<nav>` | Menu de navegacion | Contiene enlaces `<a>` |
| `<main>` | Contenido principal | Solo UNO por pagina |
| `<section>` | Seccion tematica | Debe tener un titulo |
| `<article>` | Contenido independiente | Tiene sentido por si solo |
| `<aside>` | Contenido complementario | Si lo quitas, el resto sigue teniendo sentido |
| `<footer>` | Pie de pagina | Uno principal + puede haber uno por article/section |

---

## Comparacion: Antes vs Ahora

### Antes (con `<div>`):

```html
<div>
    <h1>Yamil N</h1>
</div>

<div>
    <h3>Experiencia</h3>
    <div>
        <h4>Gerente en TextilPro</h4>
    </div>
</div>
```

### Ahora (con HTML semantico):

```html
<header>
    <h1>Yamil N</h1>
</header>

<main>
    <section id="experiencia">
        <h3>Experiencia</h3>
        <article>
            <h4>Gerente en TextilPro</h4>
        </article>
    </section>
</main>
```

**Mismo contenido, mismo resultado visual, pero ahora tu pagina tiene significado.**

---

## Beneficios del HTML semantico

| Beneficio | Descripcion |
|-----------|-------------|
| **Accesibilidad** | Los lectores de pantalla para personas ciegas navegan usando estas etiquetas |
| **SEO** | Google entiende mejor tu contenido y lo posiciona mejor |
| **Mantenibilidad** | Los programadores entienden la estructura al leer el codigo |
| **Compatibilidad** | Los navegadores ofrecen funciones especiales (como "saltar al contenido") |

---

## Reglas fundamentales

1. **Solo un `<main>`** por pagina.
2. **`<header>` y `<footer>`** pueden repetirse (uno principal + uno por seccion/articulo).
3. **`<section>`** debe tener un titulo (`<h1>` a `<h6>`).
4. **`<article>`** debe tener sentido por si solo.
5. **`<nav>`** contiene enlaces (`<a>`).
6. **`<aside>`** es complementario, no esencial.
7. Los `id` deben ser **unicos** y coincidir entre `<nav>` y `<section>`.

---

## Herramientas que necesitas

- Un **editor de texto** (recomendado: VS Code).
- Un **navegador web** (Chrome, Firefox, Edge).
- Las herramientas del curso anterior (esqueleto HTML, `<div>`, `<span>`, listas, enlaces).

---

## Nota importante

**Todos los archivos son HTML puro, sin CSS ni JavaScript.** El objetivo de estas lecciones es que aprendas la estructura semantica. Los estilos y la interactividad vendran en lecciones posteriores.

---

## Ejercicio final

1. Abre el `index.html` principal de esta carpeta.
2. Identifica cada etiqueta semantica y explica su proposito.
3. Agrega una nueva `<section>` con al menos un `<article>`.
4. Agrega un enlace en el `<nav>` que apunte a la nueva seccion.
5. Modifica el `<aside>` con tus propios datos.
6. Agrega un `<footer>` dentro de un `<article>`.
7. Verifica que todos los `id` sean unicos y coincidan con los `href` del `<nav>`.

**HTML semantico no cambia como se ve tu pagina, cambia como se entiende.**
