# 02 - HTML Semantico: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`

## ¿Que aprendemos aqui?

En la leccion anterior usamos `<div>` para agrupar todo el contenido del perfil de Yamil N. Eso funciona, pero tiene un problema: **el navegador no sabe que significa cada `<div>`**. Para el navegador, todos son iguales: "cajas genericas".

HTML5 introdujo **etiquetas semanticas**: etiquetas que le dicen al navegador (y a los programadores) **que tipo de contenido** contienen. Es la diferencia entre decir "caja 1, caja 2, caja 3" y decir "cabecera, menu, contenido principal, pie de pagina".

---

## ¿Que es HTML semantico?

HTML semantico significa **usar etiquetas que describen el proposito del contenido**, no solo su apariencia.

```html
<!-- SIN semantica (lo que hicimos antes) -->
<div>
    <h3>Experiencia</h3>
</div>

<!-- CON semantica (lo que haremos ahora) -->
<section>
    <h3>Experiencia</h3>
</section>
```

El resultado visual es el mismo, pero el segundo caso le dice al navegador: "esto es una **seccion** de contenido", no solo "una caja generica".

---

## Las 7 etiquetas semanticas que aprenderas

| Etiqueta | Proposito | Analogia |
|----------|-----------|----------|
| `<header>` | Cabecera de la pagina o seccion | La portada de un periodico |
| `<nav>` | Menu de navegacion | El indice de un libro |
| `<main>` | Contenido principal unico | El cuerpo principal de un periodico |
| `<section>` | Seccion tematica de contenido | Un capitulo de un libro |
| `<article>` | Contenido independiente y reutilizable | Un articulo de revista |
| `<aside>` | Contenido complementario/lateral | Una nota al margen de un libro |
| `<footer>` | Pie de pagina o seccion | La contraportada de un libro |

---

## Estructura visual de nuestra pagina

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

## Etiqueta por etiqueta

---

### `<header>` - La cabecera

### ¿Que es?

```html
<header>
    <h1>Yamil N</h1>
    <h2>Ingeniero Industrial | Especialista en Optimizacion de Procesos</h2>
    <p>Email: yamil.ejemplo@email.com | Tel: +591 7070707070 | La Paz, Bolivia</p>
</header>
```

- Es la **cabecera** de la pagina o de una seccion.
- Contiene informacion de **presentacion** o **identificacion**.
- Tipicamente incluye el titulo principal (`<h1>`), subtitulo y datos de contacto rapido.
- **Solo debe haber un `<header>` principal** por pagina (pero puedes usar `<header>` dentro de cada `<section>` o `<article>` si necesitan su propia cabecera).

### Analogia

```
<header> = La portada de un periodico

┌─────────────────────────────────────────┐
│  EL DIARIO                              │
│  Edicion del 2 de agosto de 2026        │
│  Director: Yamil N                      │
└─────────────────────────────────────────┘
```

### ¿Que reemplaza?

```html
<!-- ANTES (con div generico) -->
<div>
    <h1>Yamil N</h1>
    <h2>Ingeniero Industrial</h2>
</div>

<!-- AHORA (con semantica) -->
<header>
    <h1>Yamil N</h1>
    <h2>Ingeniero Industrial</h2>
</header>
```

---

### `<nav>` - El menu de navegacion

### ¿Que es?

```html
<nav>
    <ul>
        <li><a href="#perfil">Perfil Profesional</a></li>
        <li><a href="#experiencia">Experiencia Laboral</a></li>
        <li><a href="#formacion">Formacion Academica</a></li>
        <li><a href="#articulos">Articulos y Publicaciones</a></li>
        <li><a href="#contacto">Contacto</a></li>
    </ul>
</nav>
```

- Es el **menu de navegacion** principal de la pagina.
- Contiene enlaces (`<a>`) que llevan a otras secciones de la pagina o a otras paginas.
- Combina perfectamente con `<ul>` y `<li>` (que aprendiste en la leccion de listas).
- Los atributos `href="#perfil"` apuntan a secciones con `id="perfil"` dentro de la misma pagina.

### Analogia

```
<nav> = El indice de un libro

INDICE
------
1. Perfil Profesional ......... pagina 1
2. Experiencia Laboral ........ pagina 2
3. Formacion Academica ........ pagina 4
4. Articulos .................. pagina 5
```

### ¿Por que usar `<nav>` y no un `<div>`?

- Los **lectores de pantalla** para personas ciegas buscan `<nav>` para encontrar el menu rapidamente.
- Los **motores de busqueda** (Google) entienden mejor la estructura de tu pagina.
- Los **navegadores** pueden ofrecer funcionalidades especiales (como "saltar al contenido").

---

### `<main>` - El contenido principal

### ¿Que es?

```html
<main>
    <section>...</section>
    <section>...</section>
    <aside>...</aside>
</main>
```

- Contiene el **contenido principal y unico** de la pagina.
- **Solo debe haber UNO** por pagina. No repitas `<main>`.
- Todo lo que es **especifico de esta pagina** va aqui.
- NO incluye cosas que se repiten en otras paginas (como el `<header>`, `<nav>` o `<footer>`).

### Analogia

```
<main> = El cuerpo principal de un periodico

Todo el contenido del articulo principal va aqui.
La portada (<header>) y el pie de pagina (<footer>) NO estan aqui.
```

### Regla importante

```
┌─────────────────────────────────────┐
│ <header>        ← Fuera de <main>  │
├─────────────────────────────────────┤
│ <nav>           ← Fuera de <main>  │
├─────────────────────────────────────┤
│ <main>                             │
│   Contenido PRINCIPAL de esta      │
│   pagina. Solo UNO por pagina.     │
├─────────────────────────────────────┤
│ <footer>        ← Fuera de <main>  │
└─────────────────────────────────────┘
```

---

### `<section>` - Secciones tematicas

### ¿Que es?

```html
<section id="perfil">
    <h3>Perfil Profesional</h3>
    <p>Ingeniero industrial con mas de 8 anos de experiencia...</p>
</section>

<section id="experiencia">
    <h3>Experiencia Laboral</h3>
    <!-- articulos de trabajo aqui -->
</section>
```

- Representa una **seccion tematica** del contenido.
- Cada `<section>` debe tener un **tema claro** y generalmente un titulo (`<h1>` a `<h6>`).
- Usa el atributo `id` para que los enlaces del `<nav>` puedan saltar a cada seccion.
- Piensa en `<section>` como un **capitulo** de un libro: agrupa contenido relacionado.

### Analogia

```
<section> = Un capitulo de un libro

Capitulo 1: Perfil Profesional
Capitulo 2: Experiencia Laboral
Capitulo 3: Formacion Academica
Capitulo 4: Articulos y Publicaciones
```

### ¿Cuantas `<section>` puedes tener?

Las que necesites. Cada bloque tematico de tu pagina puede ser una `<section>`. En nuestro ejemplo tenemos 4: perfil, experiencia, formacion y articulos.

---

### `<article>` - Contenido independiente

### ¿Que es?

```html
<article>
    <h4>Gerente de Operaciones - TextilPro S.A. (2020 - Presente)</h4>
    <ul>
        <li>Reduccion de tiempos de entrega en un 30%...</li>
        <li>Disminucion de desperdicios en un 22%...</li>
    </ul>
</article>
```

- Representa contenido **independiente y autocontenido**.
- La prueba: si sacas ese contenido de la pagina, **¿tiene sentido por si solo?** Si la respuesta es si, usa `<article>`.
- Cada experiencia laboral, cada publicacion, cada noticia es un `<article>`.

### Analogia

```
<article> = Un articulo de revista

Una revista tiene muchos articulos. Cada uno es independiente:
puedes leer uno sin leer los otros.

┌─────────────────────────────────────────┐
│ REVISTA DE INGENIERIA                   │
│                                         │
│ ┌─────────────────────────────────────┐ │
│ │ ARTICULO 1: Kanban en textiles     │ │
│ └─────────────────────────────────────┘ │
│ ┌─────────────────────────────────────┐ │
│ │ ARTICULO 2: Lean en Bolivia        │ │
│ └─────────────────────────────────────┘ │
│ ┌─────────────────────────────────────┐ │
│ │ ARTICULO 3: KPIs en manufactura    │ │
│ └─────────────────────────────────────┘ │
└─────────────────────────────────────────┘
```

### ¿Cuando usar `<article>` vs `<section>`?

| Criterio | `<section>` | `<article>` |
|----------|-------------|-------------|
| ¿El contenido tiene sentido por si solo? | No, es parte de un tema mayor | Si, es independiente |
| Ejemplo | La seccion "Experiencia" completa | Un trabajo especifico dentro de esa seccion |
| Analogia | Un capitulo de libro | Un articulo de revista |
| ¿Se puede redistribuir? | No, es parte de algo mas grande | Si, se puede mover a otro lugar |

### En nuestro perfil:

```html
<section id="experiencia">          <!-- Tema general: Experiencia -->
    <h3>Experiencia Laboral</h3>

    <article>                       <!-- Trabajo 1: independiente -->
        <h4>Gerente de Operaciones</h4>
        ...
    </article>

    <article>                       <!-- Trabajo 2: independiente -->
        <h4>Coordinador de Planta</h4>
        ...
    </article>
</section>
```

---

### `<aside>` - Contenido complementario

### ¿Que es?

```html
<aside>
    <h3>Datos Rapidos</h3>
    <ul>
        <li><strong>Certificaciones:</strong> PMP, Lean Six Sigma Black Belt</li>
        <li><strong>Idiomas:</strong> Espanol (nativo), Ingles (avanzado)</li>
        <li><strong>Software:</strong> SAP, AutoCAD, Minitab</li>
        <li><strong>Membresias:</strong> Colegio de Ingenieros de Bolivia, IEEE</li>
    </ul>
</aside>
```

- Contiene informacion **relacionada pero no esencial** para el contenido principal.
- Es contenido **complementario**: si lo quitaras, el contenido principal seguiria teniendo sentido.
- Tipicamente se muestra como una **barra lateral** (aunque eso lo define CSS, no HTML).
- Piensa en `<aside>` como una **nota al margen** de un libro.

### Analogia

```
<aside> = Nota al margen de un libro

┌─────────────────────────────────────────────┐
│                                             │
│  Texto principal del libro aqui...          │
│                                             │
│  ┌──────────────┐                          │
│  │ NOTA: Este   │  ← <aside>              │
│  │ dato es      │                          │
│  │ complementario│                         │
│  └──────────────┘                          │
│                                             │
│  Mas texto principal aqui...                │
│                                             │
└─────────────────────────────────────────────┘
```

### Usos comunes de `<aside>`

- Datos rapidos o datos curiosos
- Enlaces relacionados
- Publicidad
- Biografias cortas del autor
- Definiciones de terminos

---

### `<footer>` - El pie de pagina

### ¿Que es?

```html
<footer>
    <p>&copy; 2026 Yamil N - Ingeniero Industrial</p>
    <p>La Paz, Bolivia | yamil.ejemplo@email.com | +591 7070707070</p>
</footer>
```

- Es el **pie de pagina** de la pagina o de una seccion.
- Contiene informacion legal, copyright, contacto, enlaces a politicas, etc.
- El simbolo `&copy;` es un **codigo HTML** que muestra el simbolo (c) de copyright.
- Puede haber un `<footer>` principal de la pagina y tambien `<footer>` dentro de cada `<article>` o `<section>`.

### Analogia

```
<footer> = La contraportada de un libro

┌─────────────────────────────────────────┐
│                                         │
│  (Contenido del libro arriba)           │
│                                         │
├─────────────────────────────────────────┤
│  (c) 2026 Editorial XYZ                 │
│  ISBN: 978-3-16-148410-0                │
│  Impreso en Bolivia                     │
│  www.editorial-ejemplo.com              │
└─────────────────────────────────────────┘
```

---

## Comparacion: Antes (con `<div>`) vs Ahora (con semantica)

### Antes (leccion 03):

```html
<div>                            <!-- ¿Que es esta caja? No se sabe -->
    <h1>Yamil N</h1>
    <h2>Ingeniero Industrial</h2>
</div>

<div>                            <!-- ¿Y esta? Tampoco se sabe -->
    <h3>Experiencia Laboral</h3>
    <div>                        <!-- ¿Y esta? Menos idea -->
        <h4>Gerente de Operaciones</h4>
    </div>
</div>
```

### Ahora (HTML semantico):

```html
<header>                        <!-- ¡Ah! Es la cabecera -->
    <h1>Yamil N</h1>
    <h2>Ingeniero Industrial</h2>
</header>

<main>                          <!-- El contenido principal -->
    <section id="experiencia">  <!-- Una seccion tematica -->
        <h3>Experiencia Laboral</h3>
        <article>               <!-- Un elemento independiente -->
            <h4>Gerente de Operaciones</h4>
        </article>
    </section>
</main>
```

La diferencia visual es la misma. La diferencia es que **ahora el navegador, los lectores de pantalla y los motores de busqueda entienden tu pagina**.

---

## Beneficios del HTML semantico

| Beneficio | Descripcion |
|-----------|-------------|
| **Accesibilidad** | Los lectores de pantalla para personas ciegas usan estas etiquetas para navegar |
| **SEO** | Google entiende mejor tu contenido y puede posicionarlo mejor |
| **Mantenibilidad** | Los programadores entienden la estructura al leer el codigo |
| **Compatibilidad** | Los navegadores pueden ofrecer funciones especiales (como "saltar al contenido") |
| **Consistencia** | Todos los desarrolladores usan las mismas convenciones |

---

## Jerarquia de las etiquetas semanticas

```
<body>
├── <header>                    (cabecera de la pagina)
├── <nav>                       (menu de navegacion)
├── <main>                      (contenido principal, unico)
│   ├── <section>               (seccion tematica)
│   │   ├── <article>           (contenido independiente)
│   │   └── <article>           (contenido independiente)
│   ├── <section>               (otra seccion tematica)
│   │   └── <article>
│   └── <aside>                 (contenido complementario)
└── <footer>                    (pie de pagina)
```

---

## Reglas importantes

| Regla | Detalle |
|-------|---------|
| Solo un `<main>` por pagina | El contenido principal es unico |
| `<header>` y `<footer>` pueden repetirse | Uno principal + uno por cada `<section>` o `<article>` si es necesario |
| `<section>` debe tener un titulo | Casi siempre un `<h1>` a `<h6>` que identifique el tema |
| `<article>` debe tener sentido por si solo | Si lo mueves a otra pagina, debe ser comprensible |
| `<nav>` contiene enlaces | Si no hay enlaces, probablemente no es `<nav>` |
| `<aside>` es complementario | Si lo quitas, el contenido principal debe seguir teniendo sentido |
| Las etiquetas semanticas NO reemplazan a `<div>` siempre | Si necesitas una caja generica para estilos CSS, `<div>` sigue siendo valido |

---

## Ejercicio practico

1. Abre el archivo `index.html` en tu navegador.
2. Observa la estructura: identifica cada etiqueta semantica.
3. Haz clic en los enlaces del `<nav>` y verifica que saltan a la seccion correspondiente.
4. Agrega una nueva `<section>` llamada "Habilidades Tecnicas" con al menos 2 `<article>` dentro.
5. Agrega mas informacion al `<aside>` (por ejemplo, "Voluntariado" o "Intereses").
6. Agrega un `<footer>` dentro de uno de los `<article>` con la fecha de publicacion.
7. Intenta reemplazar `<main>` por `<div>` y piensa: ¿que pierdes?

---

## Resumen visual

```
┌──────────────────────────────────────────────────────────┐
│ <header>     Tu nombre, titulo, contacto rapido         │
├──────────────────────────────────────────────────────────┤
│ <nav>        Enlaces para moverse por la pagina         │
├───────────────────────────────────┬─────────────────────┤
│ <main>                            │ <aside>             │
│                                   │                     │
│  <section>                        │ Informacion         │
│    <article>                      │ complementaria      │
│    <article>                      │ (no esencial)       │
│  </section>                       │                     │
│                                   │                     │
│  <section>                        │                     │
│    <article>                      │                     │
│  </section>                       │                     │
│                                   │                     │
├───────────────────────────────────┴─────────────────────┤
│ <footer>     Copyright, contacto, enlaces legales       │
└──────────────────────────────────────────────────────────┘
```

**HTML semantico no cambia como se ve tu pagina, cambia como se entiende.**
