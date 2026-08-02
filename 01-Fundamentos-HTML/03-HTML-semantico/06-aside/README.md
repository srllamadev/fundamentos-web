# 06 - `<aside>`: Contenido Complementario

## ¿Que aprendemos aqui?

Aprenderas que es `<aside>`, para que sirve y cuando usarlo. `<aside>` contiene informacion **relacionada pero no esencial**: si la quitaras, el contenido principal seguiria teniendo sentido completo.

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
            <article>
                <h4>Gerente de Operaciones - TextilPro S.A.</h4>
                <ul>
                    <li>Reduccion de tiempos de entrega en un 30%</li>
                </ul>
            </article>
        </section>

        <aside>
            <h3>Datos Rapidos</h3>
            <ul>
                <li><strong>Certificaciones:</strong> PMP, Lean Six Sigma Black Belt</li>
                <li><strong>Idiomas:</strong> Espanol (nativo), Ingles (avanzado)</li>
                <li><strong>Software:</strong> SAP, AutoCAD, Minitab</li>
                <li><strong>Membresias:</strong> Colegio de Ingenieros de Bolivia, IEEE</li>
            </ul>
        </aside>

    </main>

</body>
</html>
```

---

## ¿Que es `<aside>`?

```html
<aside>
    <h3>Datos Rapidos</h3>
    <ul>
        <li>Certificaciones: PMP, Lean Six Sigma</li>
        <li>Idiomas: Espanol, Ingles</li>
    </ul>
</aside>
```

- Contiene informacion **complementaria o lateral**.
- Es contenido **relacionado** con el tema principal pero **no esencial** para entenderlo.
- La prueba: si quitaras el `<aside>`, ¿el contenido principal sigue teniendo sentido? Si la respuesta es si, entonces `<aside>` es correcto.

### Analogia

```
<aside> = Notas al margen de un libro

┌─────────────────────────────────────────────────────┐
│                                                     │
│  Texto principal del libro aqui...                  │
│  Este es el contenido importante.                   │
│                                                     │
│  ┌──────────────────┐                              │
│  │ NOTA: El autor   │  ← <aside>                  │
│  │ tiene un master  │                              │
│  │ en Stanford.     │  Informacion complementaria  │
│  └──────────────────┘                              │
│                                                     │
│  Mas texto principal aqui...                        │
│  Si quitas la nota, el libro sigue                  │
│  teniendo sentido completo.                         │
│                                                     │
└─────────────────────────────────────────────────────┘
```

---

## La prueba del aside

Para saber si algo debe ser `<aside>`, hazte esta pregunta:

**"Si quito este contenido, ¿el contenido principal sigue teniendo sentido?"**

| Contenido | ¿Es esencial? | ¿Usar `<aside>`? |
|-----------|---------------|-------------------|
| Datos rapidos (certificaciones, idiomas) | No, es complemento | Si |
| Enlaces relacionados | No, es complemento | Si |
| Biografia corta del autor | No, es complemento | Si |
| Publicidad | No, es complemento | Si |
| Perfil profesional | Si, es el contenido principal | No (usa `<section>`) |
| Experiencia laboral | Si, es el contenido principal | No (usa `<section>`) |

---

## Usos comunes de `<aside>`

| Uso | Ejemplo |
|-----|---------|
| Datos rapidos | Certificaciones, idiomas, software |
| Enlaces relacionados | "Ver tambien..." |
| Biografia del autor | Mini-biografia en un blog |
| Publicidad | Banners, promociones |
| Definiciones | Glosario o notas explicativas |
| Estadisticas complementarias | Datos extra sobre el tema |
| Citas destacadas | Quotes relacionadas |

### Ejemplos en nuestro perfil

```html
<!-- Datos rapidos: complementan pero no son esenciales -->
<aside>
    <h3>Datos Rapidos</h3>
    <ul>
        <li><strong>Certificaciones:</strong> PMP, Lean Six Sigma Black Belt</li>
        <li><strong>Idiomas:</strong> Espanol (nativo), Ingles (avanzado)</li>
        <li><strong>Software:</strong> SAP, AutoCAD, Minitab</li>
    </ul>
</aside>
```

```html
<!-- Enlaces relacionados: complementan el contenido -->
<aside>
    <h3>Enlaces de Interes</h3>
    <ul>
        <li><a href="#">Perfil en LinkedIn</a></li>
        <li><a href="#">Portfolio de proyectos</a></li>
        <li><a href="#">Publicaciones en ResearchGate</a></li>
    </ul>
</aside>
```

---

## ¿Donde va `<aside>`?

Tipicamente `<aside>` va **dentro de `<main>`** pero al lado del contenido principal:

```html
<main>

    <section id="perfil">
        <h3>Perfil</h3>
        <p>Contenido principal...</p>
    </section>

    <section id="experiencia">
        <h3>Experiencia</h3>
        <article>...</article>
    </section>

    <aside>
        <h3>Datos Rapidos</h3>
        <p>Contenido complementario...</p>
    </aside>

</main>
```

### Estructura visual

```
┌──────────────────────────────────┬──────────────────┐
│ <main>                           │                  │
│                                  │ <aside>          │
│  <section>                       │                  │
│    Contenido principal...        │  Datos Rapidos   │
│  </section>                      │  Certificaciones │
│                                  │  Idiomas         │
│  <section>                       │  Software        │
│    Mas contenido principal...    │                  │
│  </section>                      │                  │
│                                  │                  │
└──────────────────────────────────┴──────────────────┘
```

Con CSS, el `<aside>` normalmente se muestra como una **barra lateral**.

---

## `<aside>` vs `<section>`

| Caracteristica | `<section>` | `<aside>` |
|----------------|-------------|-----------|
| ¿Es esencial? | Si | No |
| ¿Sin el contenido, la pagina pierde sentido? | Si | No |
| ¿Es contenido principal? | Si | No |
| Analogia | Un capitulo del libro | Una nota al margen |
| Ejemplo | Perfil profesional | Datos rapidos |

---

## `<aside>` dentro de `<article>`

Tambien puedes poner `<aside>` dentro de un `<article>`:

```html
<article>
    <h4>Gerente de Operaciones - TextilPro S.A.</h4>
    <p>Logros principales del cargo...</p>

    <aside>
        <h5>Dato adicional</h5>
        <p>TextilPro S.A. es la empresa textil mas grande de Bolivia con mas de 500 empleados.</p>
    </aside>
</article>
```

### Analogia

```
Un articulo de periodico con una nota al margen:

┌─────────────────────────────────────┐
│ TITULO DEL ARTICULO                 │
│                                     │
│ Parrafo principal del articulo...   │
│                                     │
│ ┌─────────────┐                    │
│ │ DATO CURIOSO│ ← <aside> dentro   │
│ │ de <article>│                    │
│ └─────────────┘                    │
│                                     │
│ Mas contenido del articulo...       │
└─────────────────────────────────────┘
```

---

## Reglas importantes

| Regla | Detalle |
|-------|---------|
| `<aside>` es complementario | Si lo quitas, el contenido principal sigue teniendo sentido |
| Va dentro de `<main>` o `<article>` | No va suelto fuera del contenido |
| Tipicamente tiene un titulo | `<h3>` o `<h4>` |
| No confundir con contenido esencial | Si es esencial, usa `<section>` |
| Con CSS se muestra como barra lateral | Pero eso lo define CSS, no HTML |
| Puede haber mas de un `<aside>` | Uno general + uno por articulo |

---

## Errores comunes

### Error 1: Usar aside para contenido esencial

```html
<!-- INCORRECTO: el perfil es contenido principal -->
<aside>
    <h3>Perfil Profesional</h3>
    <p>Ingeniero industrial con 8 anos de experiencia...</p>
</aside>

<!-- CORRECTO: el perfil es una seccion principal -->
<section id="perfil">
    <h3>Perfil Profesional</h3>
    <p>Ingeniero industrial con 8 anos de experiencia...</p>
</section>
```

### Error 2: aside sin relacion con el contenido

```html
<!-- INCORRECTO: esto no tiene nada que ver con el perfil -->
<aside>
    <h3>Recetas de cocina</h3>
    <p>Como hacer pastel de chocolate...</p>
</aside>

<!-- CORRECTO: aside con contenido relacionado -->
<aside>
    <h3>Datos Rapidos</h3>
    <ul>
        <li>Certificaciones: PMP, Six Sigma</li>
    </ul>
</aside>
```

### Error 3: aside sin titulo

```html
<!-- INCORRECTO: no hay titulo que identifique el contenido -->
<aside>
    <p>PMP, Six Sigma, Espanol, Ingles</p>
</aside>

<!-- CORRECTO: titulo que identifica el contenido -->
<aside>
    <h3>Datos Rapidos</h3>
    <ul>
        <li>Certificaciones: PMP, Six Sigma</li>
        <li>Idiomas: Espanol, Ingles</li>
    </ul>
</aside>
```

---

## Ejercicio practico

1. Abre el `index.html` en tu navegador.
2. Identifica el `<aside>` y explica que informacion complementaria contiene.
3. Quita el `<aside>` del HTML. ¿El contenido principal sigue teniendo sentido?
4. Agrega mas informacion al `<aside>`: "Voluntariado" o "Intereses personales".
5. Crea un segundo `<aside>` dentro de un `<article>` con un "Dato adicional".
6. Mueve el contenido de la seccion "Habilidades" al `<aside>`. ¿Tiene sentido ahora?
7. Crea un `<aside>` con enlaces a perfiles sociales (LinkedIn, GitHub, etc.).
