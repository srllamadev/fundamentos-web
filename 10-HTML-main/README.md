# 03 - `<main>`: El Contenido Principal

## ¿Que aprendemos aqui?

Aprenderas que es `<main>`, para que sirve y cual es la regla mas importante: **solo puede haber uno por pagina**. `<main>` envuelve todo el contenido que es **unico y especifico** de esta pagina.

---

## Codigo completo

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Yamil N - Ingeniero Industrial</title>
</head>
<body>

    <header>
        <h1>Yamil N</h1>
        <h2>Ingeniero Industrial | Especialista en Optimizacion de Procesos</h2>
    </header>

    <nav>
        <ul>
            <li><a href="#perfil">Perfil</a></li>
            <li><a href="#experiencia">Experiencia</a></li>
            <li><a href="#formacion">Formacion</a></li>
        </ul>
    </nav>

    <main>

        <section id="perfil">
            <h3>Perfil Profesional</h3>
            <p>Ingeniero industrial con mas de 8 anos de experiencia...</p>
        </section>

        <section id="experiencia">
            <h3>Experiencia Laboral</h3>
            <p>Gerente de Operaciones en TextilPro S.A....</p>
        </section>

        <section id="formacion">
            <h3>Formacion Academica</h3>
            <p>Maestria en Gestion de Operaciones - UMSA (2019).</p>
        </section>

    </main>

</body>
</html>
```

---

## ¿Que es `<main>`?

```html
<main>
    <!-- Todo el contenido principal de la pagina va aqui -->
</main>
```

- Representa el **contenido principal y unico** de la pagina.
- Es "unico" porque no se repite en otras paginas del mismo sitio.
- **Solo debe haber UNO** por pagina. Nunca dos `<main>`.

### Analogia

```
<main> = El cuerpo principal de un periodico

┌─────────────────────────────────────────────┐
│ PORTADA (<header>)                          │
├─────────────────────────────────────────────┤
│ INDICE (<nav>)                              │
├─────────────────────────────────────────────┤
│                                             │
│  ┌─────────────────────────────────────┐    │
│  │ CONTENIDO PRINCIPAL (<main>)        │    │
│  │                                     │    │
│  │  Todos los articulos, reportajes,   │    │
│  │  noticias y contenido especifico    │    │
│  │  de esta edicion va aqui.           │    │
│  │                                     │    │
│  └─────────────────────────────────────┘    │
│                                             │
├─────────────────────────────────────────────┤
│ PIE DE PAGINA (<footer>)                    │
└─────────────────────────────────────────────┘
```

---

## ¿Que va DENTRO de `<main>`?

Todo el contenido **especifico de esta pagina**:

- Secciones de contenido (`<section>`)
- Articulos independientes (`<article>`)
- Contenido complementario (`<aside>`)
- Formularios
- Imagenes, videos, etc.

## ¿Que va FUERA de `<main>`?

Todo lo que **se repite en todas las paginas** del sitio:

- `<header>` (la cabecera es igual en todas las paginas)
- `<nav>` (el menu es igual en todas las paginas)
- `<footer>` (el pie de pagina es igual en todas las paginas)

### Visualmente

```
<body>

    <header>  ← FUERA de <main> (se repite en todas las paginas)
    <nav>     ← FUERA de <main> (se repite en todas las paginas)

    <main>    ← DENTRO va el contenido UNICO de esta pagina
        <section>...</section>
        <section>...</section>
        <aside>...</aside>
    </main>

    <footer>  ← FUERA de <main> (se repite en todas las paginas)

</body>
```

---

## La regla de oro: Solo uno

```html
<!-- INCORRECTO: dos <main> en la misma pagina -->
<main>
    <section>...</section>
</main>
<main>
    <section>...</section>
</main>

<!-- CORRECTO: un solo <main> que contiene todo -->
<main>
    <section>...</section>
    <section>...</section>
</main>
```

### Analogia

```
<main> = El plato principal de una comida

No tienes dos platos principales. Tienes:
- Entrada (<header>)
- Menu (<nav>)
- Plato principal (<main>)  ← SOLO UNO
- Postre (<footer>)
```

---

## `<main>` vs `<div>`

En las lecciones anteriores usabamos `<div>` para envolver todo:

```html
<!-- ANTES -->
<div>
    <div>Perfil...</div>
    <div>Experiencia...</div>
    <div>Formacion...</div>
</div>

<!-- AHORA -->
<main>
    <section>Perfil...</section>
    <section>Experiencia...</section>
    <section>Formacion...</section>
</main>
```

La diferencia:

- `<div>` le dice al navegador: "aqui hay una caja generica".
- `<main>` le dice al navegador: "aqui esta el **contenido principal** de esta pagina".

### ¿Para que sirve que el navegador lo sepa?

1. **Lectores de pantalla**: Pueden ofrecer "saltar al contenido principal" automaticamente.
2. **Modo lectura**: Algunos navegadores identifican `<main>` para mostrar solo el contenido principal.
3. **SEO**: Google entiende cual es el contenido importante de tu pagina.

---

## Estructura completa con `<main>`

```
<body>
│
├── <header>           → Cabecera (se repite)
│   ├── <h1>           → Titulo principal
│   └── <p>            → Contacto rapido
│
├── <nav>              → Menu (se repite)
│   └── <ul>
│       └── <li><a>    → Enlaces a secciones
│
├── <main>             → Contenido PRINCIPAL (unico)
│   ├── <section>      → Seccion 1
│   ├── <section>      → Seccion 2
│   ├── <section>      → Seccion 3
│   └── <aside>        → Contenido complementario
│
└── <footer>           → Pie de pagina (se repite)
    └── <p>            → Copyright, contacto
```

---

## Reglas importantes

| Regla | Detalle |
|-------|---------|
| Solo un `<main>` por pagina | Nunca dos o mas |
| No va dentro de `<header>`, `<nav>`, `<footer>` o `<aside>` | Es un elemento de primer nivel dentro de `<body>` |
| Contiene el contenido unico | No incluyas cosas que se repiten en otras paginas |
| No lo uses si la pagina no tiene contenido principal claro | En paginas simples puede no ser necesario |
| El `<main>` no debe estar oculto | Si la pagina esta activa, su contenido principal debe ser visible |

---

## Errores comunes

### Error 1: Poner el header dentro de main

```html
<!-- INCORRECTO: header dentro de main -->
<main>
    <header>
        <h1>Yamil N</h1>
    </header>
    <section>...</section>
</main>

<!-- CORRECTO: header fuera de main -->
<header>
    <h1>Yamil N</h1>
</header>
<main>
    <section>...</section>
</main>
```

### Error 2: Dos elementos main

```html
<!-- INCORRECTO -->
<main>
    <section>Perfil</section>
</main>
<main>
    <section>Experiencia</section>
</main>

<!-- CORRECTO -->
<main>
    <section>Perfil</section>
    <section>Experiencia</section>
</main>
```

### Error 3: Usar main para contenido que se repite

```html
<!-- INCORRECTO: el footer dentro de main -->
<main>
    <section>...</section>
    <footer>
        <p>(c) 2026 Yamil N</p>
    </footer>
</main>

<!-- CORRECTO: footer fuera de main -->
<main>
    <section>...</section>
</main>
<footer>
    <p>(c) 2026 Yamil N</p>
</footer>
```

---

## Ejercicio practico

1. Abre el `index.html` en tu navegador.
2. Identifica que esta dentro de `<main>` y que esta fuera.
3. Agrega una nueva `<section>` dentro de `<main>`.
4. Intenta crear un segundo `<main>` y piensa: ¿tiene sentido?
5. Mueve el `<nav>` dentro del `<main>`. ¿Funciona? ¿Es correcto semanticamente?
6. Agrega un `<aside>` dentro del `<main>` con datos complementarios.
