# 05 - `<article>`: Contenido Independiente

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

## La prueba del article

Para saber si algo debe ser `<article>`, hazte esta pregunta:

**"Si saco este contenido de la pagina y lo pongo en otro lugar, ¿sigue teniendo sentido?"**

| Contenido | ¿Tiene sentido por si solo? | ¿Usar `<article>`? |
|-----------|----------------------------|---------------------|
| Un trabajo especifico con sus logros | Si | Si |
| Una publicacion con titulo y resumen | Si | Si |
| Una receta de cocina | Si | Si |
| Un comentario de blog | Si | Si |
| La seccion "Experiencia" completa | No (es un grupo de trabajos) | No (usa `<section>`) |
| El perfil profesional | No (es parte de la pagina) | No |

---

## `<article>` vs `<section>`

Esta es la confusion mas comun. La diferencia clave:

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

## Usos comunes de `<article>`

| Uso | Ejemplo |
|-----|---------|
| Experiencia laboral | Cada trabajo es un articulo |
| Publicaciones academicas | Cada paper es un articulo |
| Noticias de un blog | Cada noticia es un articulo |
| Productos de una tienda | Cada producto es un articulo |
| Comentarios en un foro | Cada comentario es un articulo |
| Recetas de cocina | Cada receta es un articulo |

---

## `<article>` puede tener su propio `<header>` y `<footer>`

Un articulo puede tener cabecera y pie propios:

```html
<article>
    <header>
        <h4>Gerente de Operaciones - TextilPro S.A.</h4>
        <p>(2020 - Presente)</p>
    </header>

    <ul>
        <li>Reduccion de tiempos de entrega en 30%</li>
        <li>Liderazgo de 45 personas</li>
    </ul>

    <footer>
        <p>Publicado el 15 de marzo de 2024</p>
    </footer>
</article>
```

### Analogia

```
Un articulo de periodico tiene:
├── Titulo y fecha (<header>)
├── Cuerpo del articulo (contenido)
└── Nota del editor o fuente (<footer>)
```

---

## `<article>` dentro de `<article>`

Es posible y tiene sentido en algunos casos:

```html
<article>
    <h3>Seccion Experiencia Laboral</h3>

    <article>
        <h4>Gerente en TextilPro</h4>
        <p>Logros...</p>
    </article>

    <article>
        <h4>Coordinador en LogiPack</h4>
        <p>Logros...</p>
    </article>

</article>
```

Esto es valido cuando el articulo externo agrupa articulos internos relacionados.

---

## Reglas importantes

| Regla | Detalle |
|-------|---------|
| `<article>` debe tener sentido por si solo | La prueba: ¿lo puedes mover a otro lugar? |
| Casi siempre tiene un titulo | `<h1>` a `<h6>` |
| Va dentro de `<section>` o `<main>` | El contenido principal se compone de articulos |
| Puede tener su `<header>` y `<footer>` | Cabecera y pie propios |
| Puede anidarse | Un article dentro de otro si tiene sentido |
| No confundir con `<section>` | Section agrupa por tema, article por independencia |

---

## Errores comunes

### Error 1: Usar article cuando deberia ser section

```html
<!-- INCORRECTO: cada uno es article porque son independientes -->
<section>
    <h3>Trabajo 1</h3>
</section>
<section>
    <h3>Trabajo 2</h3>
</section>

<!-- CORRECTO: cada trabajo es un article -->
<section id="experiencia">
    <h3>Experiencia Laboral</h3>
    <article>
        <h4>Trabajo 1</h4>
    </article>
    <article>
        <h4>Trabajo 2</h4>
    </article>
</section>
```

### Error 2: Usar article para contenido que no es independiente

```html
<!-- INCORRECTO: esto no tiene sentido por si solo -->
<article>
    <p>Datos de contacto sueltos</p>
</article>

<!-- CORRECTO: esto es contenido complementario, usa aside -->
<aside>
    <h3>Datos de Contacto</h3>
    <p>Email: yamil@ejemplo.com</p>
</aside>
```

### Error 3: Olvidar que article debe ser autocontenido

```html
<!-- INCORRECTO: depende de otro article para tener sentido -->
<article>
    <p>Ver el trabajo anterior para mas detalles.</p>
</article>

<!-- CORRECTO: cada article tiene toda la informacion necesaria -->
<article>
    <h4>Gerente en TextilPro</h4>
    <p>Toda la informacion esta aqui...</p>
</article>
```

---

## Ejercicio practico

1. Abre el `index.html` en tu navegador.
2. Identifica todos los `<article>` y explica por que cada uno es independiente.
3. Agrega un nuevo `<article>` dentro de la seccion "Experiencia" con un trabajo adicional.
4. Agrega un `<header>` dentro de uno de los `<article>` con titulo y fecha.
5. Agrega un `<footer>` dentro de otro `<article>` con informacion adicional.
6. Crea una nueva seccion "Proyectos" con al menos 2 `<article>` dentro.
7. Toma un `<article>` y muevelo a otra seccion. ¿Sigue teniendo sentido?
