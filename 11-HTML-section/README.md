# 11 - `<section>`: Secciones Tematicas

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

## Reglas importantes

| Regla | Detalle |
|-------|---------|
| Cada `<section>` debe tener un titulo | Casi siempre `<h1>` a `<h6>` |
| El `id` debe ser unico | No repitas el mismo `id` |
| `<section>` agrupa contenido tematico | No la uses solo para dar estilos |
| Puede contener otras `<section>` | Una seccion dentro de otra si tiene sentido |
| Puede tener su propio `<header>` | Para la cabecera de esa seccion especifica |
| Tipicamente va dentro de `<main>` | El contenido principal se divide en secciones |