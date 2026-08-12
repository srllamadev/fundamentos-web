# 09 - `<nav>`: El Menu de Navegacion

## ¿Que aprendemos aqui?

Aprenderas que es `<nav>`, para que sirve y como conectarlo con las secciones de tu pagina usando enlaces internos. `<nav>` es el **menu** que permite a los visitantes moverse por tu pagina.

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
            <li><a href="#perfil">Perfil Profesional</a></li>
            <li><a href="#experiencia">Experiencia Laboral</a></li>
            <li><a href="#formacion">Formacion Academica</a></li>
            <li><a href="#articulos">Articulos y Publicaciones</a></li>
            <li><a href="#contacto">Contacto</a></li>
        </ul>
    </nav>

    <main>

        <section id="perfil">
            <h3>Perfil Profesional</h3>
            <p>Ingeniero industrial con mas de 8 anos de experiencia...</p>
        </section>

        <section id="experiencia">
            <h3>Experiencia Laboral</h3>
            <p>Contenido de experiencia aqui...</p>
        </section>

    </main>

</body>
</html>
```

---

## ¿Que es `<nav>`?

```html
<nav>
    <ul>
        <li><a href="#perfil">Perfil</a></li>
        <li><a href="#experiencia">Experiencia</a></li>
    </ul>
</nav>
```

- Es el **menu de navegacion** de la pagina.
- Contiene **enlaces** (`<a>`) que llevan a otras partes de la pagina o a otras paginas.
- Se combina con `<ul>` y `<li>` porque el menu es una **lista de opciones**.

### Analogia

```
<nav> = El indice de un libro

INDICE
------
1. Perfil Profesional ......... pagina 1
2. Experiencia Laboral ........ pagina 2
3. Formacion Academica ........ pagina 4
4. Articulos .................. pagina 5
5. Contacto ................... pagina 6

Cada entrada del indice te lleva a una seccion especifica.
```

---

## El atributo `href="#..."` y `id="..."`

La clave de la navegacion interna es conectar dos cosas:

### 1. El enlace en `<nav>` usa `href="#nombre"`

```html
<a href="#perfil">Perfil Profesional</a>
```

El simbolo `#` seguido de un nombre indica: "salta al elemento que tiene ese id".

### 2. La seccion destino usa `id="nombre"`

```html
<section id="perfil">
    <h3>Perfil Profesional</h3>
</section>
```

El atributo `id` es como un **nombre unico** para esa seccion.

### La conexion

```
┌─────────────────────────────┐     ┌──────────────────────────┐
│ <nav>                       │     │ <main>                   │
│                             │     │                          │
│ <a href="#perfil">  ──────────────> <section id="perfil">   │
│   Perfil                    │     │   Perfil Profesional     │
│ </a>                        │     │ </section>               │
│                             │     │                          │
│ <a href="#experiencia">───────────> <section id="experiencia">
│   Experiencia               │     │   Experiencia Laboral    │
│ </a>                        │     │ </section>               │
│                             │     │                          │
└─────────────────────────────┘     └──────────────────────────┘
```

**El texto despues de `#` en el enlace debe coincidir EXACTAMENTE con el `id` de la seccion destino.**

---

## `<nav>` vs `<div>` con enlaces

```html
<!-- ANTES: un div generico con enlaces -->
<div>
    <a href="#perfil">Perfil</a>
    <a href="#experiencia">Experiencia</a>
</div>

<!-- AHORA: un nav semantico -->
<nav>
    <ul>
        <li><a href="#perfil">Perfil</a></li>
        <li><a href="#experiencia">Experiencia</a></li>
    </ul>
</nav>
```

La diferencia:

- Los **lectores de pantalla** para personas ciegas buscan `<nav>` para ofrecer "saltar al menu".
- Los **navegadores** pueden ofrecer un boton de "saltar al contenido" automaticamente.
- Los **motores de busqueda** entienden que esos enlaces son la navegacion principal.

---

## Notas relevantes

| Regla | Detalle |
|-------|---------|
| `<nav>` contiene enlaces `<a>` | Si no hay enlaces, no es `<nav>` |
| Se combina con `<ul>` y `<li>` | El menu es una lista de opciones |
| Puede haber mas de un `<nav>` | Uno principal + uno en el footer, por ejemplo |
| Los `href="#id"` deben coincidir con `id="id"` | Si no coinciden, el enlace no funciona |
| Los `id` deben ser unicos | No repitas el mismo `id` en dos secciones |

---

## Errores comunes

### Error 1: El `href` no coincide con el `id`

```html
<!-- INCORRECTO: "perfil" vs "Perfil" (las mayusculas importan) -->
<a href="#perfil">Perfil</a>
<section id="Perfil">...</section>

<!-- CORRECTO: ambos en minusculas -->
<a href="#perfil">Perfil</a>
<section id="perfil">...</section>
```

### Error 2: Olvidar el `#` en el href

```html
<!-- INCORRECTO: sin # -->
<a href="perfil">Perfil</a>

<!-- CORRECTO: con # para navegacion interna -->
<a href="#perfil">Perfil</a>
```

### Error 3: Usar `<nav>` sin enlaces

```html
<!-- INCORRECTO: no hay enlaces <a> -->
<nav>
    <p>Perfil</p>
    <p>Experiencia</p>
</nav>

<!-- CORRECTO: cada item es un enlace -->
<nav>
    <ul>
        <li><a href="#perfil">Perfil</a></li>
        <li><a href="#experiencia">Experiencia</a></li>
    </ul>
</nav>
```