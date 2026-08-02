# 07 - `<footer>`: El Pie de Pagina

## ¿Que aprendemos aqui?

Aprenderas que es `<footer>`, para que sirve y que tipo de informacion va aqui. `<footer>` es la zona final de la pagina (o de una seccion) que contiene informacion legal, contacto y enlaces secundarios.

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
        <h2>Ingeniero Industrial</h2>
    </header>

    <main>

        <section id="perfil">
            <h3>Perfil Profesional</h3>
            <p>Ingeniero industrial con mas de 8 anos de experiencia...</p>
        </section>

    </main>

    <footer>
        <p>&copy; 2026 Yamil N - Ingeniero Industrial</p>
        <p>La Paz, Bolivia | yamil.ejemplo@email.com | +591 7070707070</p>
        <nav>
            <ul>
                <li><a href="#">Politica de Privacidad</a></li>
                <li><a href="#">Terminos de Uso</a></li>
                <li><a href="#">LinkedIn</a></li>
            </ul>
        </nav>
    </footer>

</body>
</html>
```

---

## ¿Que es `<footer>`?

```html
<footer>
    <p>&copy; 2026 Yamil N</p>
    <p>La Paz, Bolivia</p>
</footer>
```

- Es el **pie de pagina** (o pie de seccion).
- Contiene informacion que aparece **al final**: copyright, contacto, enlaces legales.
- Es lo ultimo que el visitante ve al bajar por la pagina.

### Analogia

```
<footer> = La contraportada de un libro

┌─────────────────────────────────────────────┐
│                                             │
│  (Contenido del libro arriba)               │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│  (c) 2026 Editorial XYZ                     │
│  ISBN: 978-3-16-148410-0                    │
│  Impreso en Bolivia                         │
│  www.editorial-ejemplo.com                  │
│                                             │
│  Enlaces:                                   │
│  - Politica de privacidad                   │
│  - Termino de uso                           │
│  - Contacto                                 │
│                                             │
└─────────────────────────────────────────────┘
```

---

## ¿Que va dentro de `<footer>`?

| Elemento | Ejemplo |
|----------|---------|
| Copyright | `&copy; 2026 Yamil N` |
| Informacion de contacto | Email, telefono, direccion |
| Enlaces legales | Politica de privacidad, terminos de uso |
| Enlaces a redes sociales | LinkedIn, GitHub, Twitter |
| Un segundo `<nav>` | Menu secundario con enlaces del footer |
| Fecha de ultima actualizacion | "Ultima modificacion: agosto 2026" |

### El codigo `&copy;`

```html
<p>&copy; 2026 Yamil N</p>
```

- `&copy;` es un **codigo HTML especial** que muestra el simbolo de copyright: (c).
- Es mejor usar `&copy;` que escribir "(c)" manualmente.

Otros codigos especiales utiles en el footer:

| Codigo | Resultado | Significado |
|--------|-----------|-------------|
| `&copy;` | (c) | Copyright |
| `&reg;` | (R) | Marca registrada |
| `&trade;` | TM | Marca comercial |
| `&middot;` | . | Punto medio (separador) |
| `&bull;` | . | Vineta |
| `&mdash;` | -- | Raya larga |

---

## Un `<footer>` completo

```html
<footer>
    <p>&copy; 2026 Yamil N - Ingeniero Industrial</p>
    <p>La Paz, Bolivia | yamil.ejemplo@email.com | +591 7070707070</p>
    <nav>
        <ul>
            <li><a href="#">Politica de Privacidad</a></li>
            <li><a href="#">Terminos de Uso</a></li>
            <li><a href="#">LinkedIn</a></li>
        </ul>
    </nav>
</footer>
```

Se muestra asi:

```
┌──────────────────────────────────────────────────────┐
│                                                      │
│  (c) 2026 Yamil N - Ingeniero Industrial             │
│  La Paz, Bolivia | yamil.ejemplo@email.com |         │
│  +591 7070707070                                     │
│                                                      │
│  - Politica de Privacidad                            │
│  - Terminos de Uso                                   │
│  - LinkedIn                                          │
│                                                      │
└──────────────────────────────────────────────────────┘
```

---

## `<footer>` dentro de `<article>` o `<section>`

Ademas del footer principal de la pagina, cada `<article>` o `<section>` puede tener su propio `<footer>`:

```html
<main>

    <article>
        <h4>Gerente de Operaciones - TextilPro S.A.</h4>
        <p>Logros del cargo...</p>
        <footer>
            <p>Publicado el 15 de marzo de 2024</p>
        </footer>
    </article>

    <article>
        <h4>Implementacion de Kanban en textiles</h4>
        <p>Resumen del articulo...</p>
        <footer>
            <p>Fuente: Revista de Ingenieria Industrial, 2023</p>
        </footer>
    </article>

</main>
```

### Analogia

```
Periodico (pagina)
├── PIE DE PAGINA principal (<footer>)
│   Copyright, contacto, legales
├── Articulo 1
│   └── Pie del articulo (<footer>)
│       Fecha de publicacion, autor
└── Articulo 2
    └── Pie del articulo (<footer>)
        Fuente, referencias
```

---

## `<footer>` vs `<header>`

Son complementarios:

| Caracteristica | `<header>` | `<footer>` |
|----------------|-----------|------------|
| ¿Donde va? | Al principio | Al final |
| ¿Que contiene? | Presentacion, titulo | Copyright, contacto, legales |
| Analogia | Portada | Contraportada |
| ¿Cuantos puede haber? | Uno principal + uno por seccion/articulo | Uno principal + uno por seccion/articulo |

---

## Reglas importantes

| Regla | Detalle |
|-------|---------|
| Un `<footer>` principal por pagina | Va al final de `<body>` |
| Puede haber `<footer>` dentro de `<article>` o `<section>` | Cada uno con su propio pie |
| Contiene copyright, contacto, enlaces legales | Informacion de cierre |
| Puede contener un `<nav>` secundario | Menu del footer con enlaces legales |
| Va fuera de `<main>` | No dentro del contenido principal |
| `&copy;` para el copyright | Es mejor que escribir "(c)" |

---

## Errores comunes

### Error 1: Poner contenido principal en el footer

```html
<!-- INCORRECTO: el perfil es contenido principal -->
<footer>
    <h3>Perfil Profesional</h3>
    <p>Ingeniero industrial con 8 anos...</p>
</footer>

<!-- CORRECTO: el perfil va en una seccion -->
<main>
    <section id="perfil">
        <h3>Perfil Profesional</h3>
        <p>Ingeniero industrial con 8 anos...</p>
    </section>
</main>
<footer>
    <p>&copy; 2026 Yamil N</p>
</footer>
```

### Error 2: Olvidar el footer

```html
<!-- INCOMPLETO: no hay footer -->
<body>
    <header>...</header>
    <main>...</main>
</body>

<!-- COMPLETO: con footer -->
<body>
    <header>...</header>
    <main>...</main>
    <footer>
        <p>&copy; 2026 Yamil N</p>
    </footer>
</body>
```

### Error 3: Usar (c) en vez de &copy;

```html
<!-- Menos profesional -->
<p>(c) 2026 Yamil N</p>

<!-- Mas profesional -->
<p>&copy; 2026 Yamil N</p>
```

---

## Ejercicio practico

1. Abre el `index.html` en tu navegador.
2. Identifica el `<footer>` y que informacion contiene.
3. Agrega un enlace a tu perfil de LinkedIn en el `<footer>`.
4. Agrega un segundo `<nav>` dentro del `<footer>` con mas enlaces.
5. Agrega un `<footer>` dentro de un `<article>` con la fecha de publicacion.
6. Usa el codigo `&middot;` como separador entre datos de contacto.
7. Quita el `<footer>`. ¿La pagina se siente "incompleta"?
