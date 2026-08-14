# HTML Semantico

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

## Nota

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