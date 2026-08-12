# 12 - `<article>`: Contenido Independiente

## ¿Que aprendemos aqui?

Aprenderas que es `<article>`, cuando usarlo y cual es la diferencia con `<section>`. `<article>` representa contenido **independiente y autocontenido** que tiene sentido por si solo, sin necesidad del resto de la pagina.

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

        <section id="experiencia">
            <h3>Experiencia Laboral</h3>

            <article>
                <h4>Gerente de Operaciones - TextilPro S.A. (2020 - Presente)</h4>
                <ul>
                    <li>Reduccion de tiempos de entrega en un 30% mediante sistema Kanban</li>
                    <li>Disminucion de desperdicios en un 22% aplicando metodologias Lean</li>
                </ul>
            </article>

            <article>
                <h4>Coordinador de Planta - LogiPack Bolivia (2017 - 2020)</h4>
                <ul>
                    <li>Incremento de capacidad productiva en 25% por rediseno de layout</li>
                    <li>Reduccion de costos operativos en 15%</li>
                </ul>
            </article>

        </section>

        <section id="articulos">
            <h3>Articulos y Publicaciones</h3>

            <article>
                <h4>Implementacion de Kanban en la industria textil boliviana</h4>
                <p>Revista de Ingenieria Industrial Latinoamericana - 2023</p>
            </article>

            <article>
                <h4>Metodologias Lean en paises en desarrollo</h4>
                <p>Conferencia Panamericana de Ingenieria - 2022</p>
            </article>

        </section>

    </main>

</body>
</html>
```

---

## ¿Que es `<article>`?

```html
<article>
    <h4>Gerente de Operaciones - TextilPro S.A. (2020 - Presente)</h4>
    <ul>
        <li>Logro 1</li>
        <li>Logro 2</li>
    </ul>
</article>
```

- Representa contenido **independiente y autocontenido**.
- La prueba: si sacas ese contenido de la pagina, **¿tiene sentido por si solo?** Si la respuesta es si, usa `<article>`.
- Cada experiencia laboral, cada publicacion, cada noticia es un `<article>`.

### Analogia

```
<article> = Un articulo de revista

┌─────────────────────────────────────────────────┐
│ REVISTA DE INGENIERIA                           │
│                                                 │
│  ┌───────────────────────────────────────────┐  │
│  │ ARTICULO 1: Kanban en textiles            │  │
│  │ Tiene su propio titulo, autor, contenido. │  │
│  │ Puedes leerlo sin leer los otros.         │  │
│  └───────────────────────────────────────────┘  │
│                                                 │
│  ┌───────────────────────────────────────────┐  │
│  │ ARTICULO 2: Lean en Bolivia               │  │
│  │ Tambien independiente del primero.        │  │
│  └───────────────────────────────────────────┘  │
│                                                 │
└─────────────────────────────────────────────────┘
```

---

## `<article>` vs `<section>`

La diferencia:

| Caracteristica | `<section>` | `<article>` |
|----------------|-------------|-------------|
| ¿Tiene sentido por si solo? | No, es parte de un tema | Si, es independiente |
| Analogia | Un capitulo de libro | Un articulo de revista |
| ¿Se puede redistribuir? | No, pertenece a esta pagina | Si, lo puedes mover a otro lugar |
| Ejemplo | "Experiencia Laboral" (el grupo) | "Gerente en TextilPro" (un trabajo) |
| Agrupa por | Tema | Independencia |

### Visualmente

```html
<section id="experiencia">              <!-- Tema: Experiencia -->
    <h3>Experiencia Laboral</h3>

    <article>                           <!-- Item independiente -->
        <h4>Gerente en TextilPro</h4>
        <p>Logros...</p>
    </article>

    <article>                           <!-- Otro item independiente -->
        <h4>Coordinador en LogiPack</h4>
        <p>Logros...</p>
    </article>

</section>
```

```
<section> Experiencia Laboral (el tema general)
├── <article> Gerente en TextilPro (independiente)
├── <article> Coordinador en LogiPack (independiente)
└── <article> Analista en ManufacturaGlobal (independiente)
```

---

## Datos relevantes

| Regla | Detalle |
|-------|---------|
| `<article>` debe tener sentido por si solo |  |
| Casi siempre tiene un titulo | `<h1>` a `<h6>` |
| Va dentro de `<section>` o `<main>` | El contenido principal se compone de articulos |
| Puede tener su `<header>` y `<footer>` | Cabecera y pie propios |
| Puede anidarse | Un article dentro de otro si tiene sentido |
| No confundir con `<section>` | Section agrupa por tema, article por independencia |