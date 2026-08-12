# 13 - `<aside>`: Contenido Complementario

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

---

## ¿Donde va `<aside>`?

Normalmente el `<aside>` va **dentro de `<main>`** pero al lado del contenido principal:

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

## Notas relevantes

| Regla | Detalle |
|-------|---------|
| `<aside>` es complementario | Si lo quitas, el contenido principal sigue teniendo sentido |
| Va dentro de `<main>` o `<article>` | No va suelto fuera del contenido |
| Tipicamente tiene un titulo | `<h3>` o `<h4>` |
| No confundir con contenido esencial | Si es esencial, usa `<section>` |
| Con CSS se muestra como barra lateral | Pero eso lo define CSS, no HTML |
| Puede haber mas de un `<aside>` | Uno general + uno por articulo |