# 04 - `<section>`: Secciones Tematicas

## ¿Que aprendemos aqui?

Aprenderas que es `<section>`, como dividir tu pagina en **bloques tematicos** y por que cada seccion debe tener un titulo. `<section>` es la etiqueta que agrupa contenido relacionado bajo un mismo tema.

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

        <section id="experiencia">
            <h3>Experiencia Laboral</h3>
            <p>Gerente de Operaciones - TextilPro S.A....</p>
        </section>

        <section id="formacion">
            <h3>Formacion Academica</h3>
            <p>Maestria en Gestion de Operaciones - UMSA (2019).</p>
        </section>

        <section id="habilidades">
            <h3>Habilidades Tecnicas</h3>
            <p>Software: AutoCAD, Minitab, SAP...</p>
        </section>

    </main>

</body>
</html>
```

---

## ¿Que es `<section>`?

```html
<section id="perfil">
    <h3>Perfil Profesional</h3>
    <p>Contenido sobre el perfil...</p>
</section>
```

- Representa una **seccion tematica** del contenido.
- Agrupa contenido que esta **relacionado bajo un mismo tema**.
- Casi siempre tiene un **titulo** (`<h1>` a `<h6>`) que identifica el tema.
- Usa el atributo `id` para que los enlaces del `<nav>` puedan saltar a ella.

### Analogia

```
<section> = Los capitulos de un libro

Libro: "Perfil de Yamil N"
│
├── Capitulo 1: Perfil Profesional     → <section id="perfil">
├── Capitulo 2: Experiencia Laboral    → <section id="experiencia">
├── Capitulo 3: Formacion Academica    → <section id="formacion">
└── Capitulo 4: Habilidades Tecnicas   → <section id="habilidades">
```

Cada capitulo trata un tema diferente, pero todos pertenecen al mismo libro.

---

## Estructura de una `<section>`

Una seccion tipicamente tiene esta estructura:

```html
<section id="nombre-unico">
    <h3>Titulo de la seccion</h3>
    <p>Contenido de la seccion...</p>
    <p>Mas contenido...</p>
</section>
```

| Parte | Etiqueta | Proposito |
|-------|----------|-----------|
| Identificador unico | `id="nombre"` | Para que `<nav>` pueda enlazar a esta seccion |
| Titulo | `<h3>` o `<h4>` | Indica el tema de la seccion |
| Contenido | `<p>`, `<ul>`, etc. | La informacion real de la seccion |

---

## El atributo `id`

```html
<section id="experiencia">
```

- `id` es un **nombre unico** para identificar esta seccion.
- No puede haber dos elementos con el mismo `id` en la misma pagina.
- Los enlaces del `<nav>` usan `href="#experiencia"` para saltar a esta seccion.

### Reglas del `id`

| Regla | Ejemplo |
|-------|---------|
| Debe ser unico | No repitas `id="perfil"` en dos secciones |
| No puede tener espacios | `id="perfil profesional"` es INCORRECTO |
| Usa guiones para separar palabras | `id="perfil-profesional"` es correcto |
| Empieza con una letra | `id="1perfil"` es INCORRECTO |
| Solo letras, numeros, guiones y guiones bajos | `id="perfil_01"` es correcto |

---

## ¿Cuantas `<section>` puedo tener?

Las que necesites. Cada **bloque tematico** de tu pagina puede ser una `<section>`.

En nuestro ejemplo tenemos 4:

```html
<main>
    <section id="perfil">...</section>        <!-- Tema 1 -->
    <section id="experiencia">...</section>    <!-- Tema 2 -->
    <section id="formacion">...</section>      <!-- Tema 3 -->
    <section id="habilidades">...</section>    <!-- Tema 4 -->
</main>
```

### ¿Cuando crear una nueva seccion?

Cuando el contenido cambie de tema:

```html
<!-- Cada bloque es un tema diferente → cada uno es una <section> -->
<section id="perfil">
    <h3>Perfil Profesional</h3>
</section>

<section id="experiencia">
    <h3>Experiencia Laboral</h3>
</section>
```

### ¿Cuando NO crear una seccion?

Cuando el contenido es parte del mismo tema:

```html
<!-- INCORRECTO: dos secciones para el mismo tema -->
<section id="experiencia-1">
    <h3>Experiencia en TextilPro</h3>
</section>
<section id="experiencia-2">
    <h3>Experiencia en LogiPack</h3>
</section>

<!-- CORRECTO: una seccion con articulos dentro -->
<section id="experiencia">
    <h3>Experiencia Laboral</h3>
    <article>
        <h4>TextilPro</h4>
    </article>
    <article>
        <h4>LogiPack</h4>
    </article>
</section>
```

---

## `<section>` vs `<div>`

```html
<!-- ANTES: un div generico -->
<div id="experiencia">
    <h3>Experiencia Laboral</h3>
    <p>Contenido...</p>
</div>

<!-- AHORA: una seccion semantica -->
<section id="experiencia">
    <h3>Experiencia Laboral</h3>
    <p>Contenido...</p>
</section>
```

La diferencia:

- `<div>` dice: "aqui hay una caja generica".
- `<section>` dice: "aqui hay una **seccion tematica** de contenido".

---

## `<section>` puede tener su propio `<header>`

Cada seccion puede tener su propia cabecera:

```html
<section id="experiencia">
    <header>
        <h3>Experiencia Laboral</h3>
        <p>Mas de 8 anos en la industria</p>
    </header>
    <article>...</article>
    <article>...</article>
</section>
```

### Analogia

```
Libro (pagina)
├── PORTADA (<header> principal)
├── Capitulo 1 (<section>)
│   └── Titulo del capitulo (<header> de section)
├── Capitulo 2 (<section>)
│   └── Titulo del capitulo (<header> de section)
└── contraportada (<footer>)
```

---

## Reglas importantes

| Regla | Detalle |
|-------|---------|
| Cada `<section>` debe tener un titulo | Casi siempre `<h1>` a `<h6>` |
| El `id` debe ser unico | No repitas el mismo `id` |
| `<section>` agrupa contenido tematico | No la uses solo para dar estilos |
| Puede contener otras `<section>` | Una seccion dentro de otra si tiene sentido |
| Puede tener su propio `<header>` | Para la cabecera de esa seccion especifica |
| Tipicamente va dentro de `<main>` | El contenido principal se divide en secciones |

---

## Errores comunes

### Error 1: Seccion sin titulo

```html
<!-- INCORRECTO: no hay titulo que indique el tema -->
<section id="datos">
    <p>Algunos datos sueltos...</p>
</section>

<!-- CORRECTO: titulo que identifica el tema -->
<section id="datos">
    <h3>Datos de Contacto</h3>
    <p>Email: yamil@ejemplo.com</p>
</section>
```

### Error 2: Usar section solo para estilos

```html
<!-- INCORRECTO: section sin tema, solo para dar estilo -->
<section>
    <p>Texto con fondo azul</p>
</section>

<!-- CORRECTO: si es solo para estilos, usa div -->
<div>
    <p>Texto con fondo azul</p>
</div>
```

### Error 3: id duplicado

```html
<!-- INCORRECTO: dos secciones con el mismo id -->
<section id="perfil">
    <h3>Perfil</h3>
</section>
<section id="perfil">
    <h3>Mas del perfil</h3>
</section>

<!-- CORRECTO: ids unicos -->
<section id="perfil">
    <h3>Perfil</h3>
</section>
<section id="perfil-detalle">
    <h3>Mas del perfil</h3>
</section>
```

---

## Ejercicio practico

1. Abre el `index.html` en tu navegador.
2. Cuenta cuantas `<section>` hay y que tema trata cada una.
3. Agrega una nueva `<section>` llamada "Certificaciones" con `id="certificaciones"`.
4. Agrega un titulo `<h3>` y al menos un `<p>` con contenido.
5. Agrega un enlace en el `<nav>` que apunte a la nueva seccion.
6. Crea una `<section>` dentro de otra `<section>` (anidamiento). ¿Tiene sentido?
7. Quita el titulo de una seccion. ¿Sigue siendo una buena `<section>`?
