# 15 - HTML Semantico - Perfil Profesional de Ingeniero Industrial

## Bienvenidos a la segunda parte del curso

En el curso anterior aprendiste la **sintaxis basica de HTML**: el esqueleto, textos, contenedores (`<div>` y `<span>`), enlaces, imagenes, listas y formularios. Todo funcionaba, pero usabamos `<div>` para **todo**.

Ahora aprenderas **HTML semantico**: etiquetas que le dicen al navegador **que significa** cada parte de tu pagina, no solo como mostrarla.

---

## ¿Que es HTML semantico?

HTML semantico es usar etiquetas que **describen el proposito** del contenido:

```html
<!-- SIN semantica: el navegador no sabe que es cada caja -->
<div>
    <h1>Yamil N</h1>
</div>

<!-- CON semantica: el navegador sabe que es la cabecera -->
<header>
    <h1>Yamil N</h1>
</header>
```

El resultado visual es el mismo. La diferencia es que **el navegador, los lectores de pantalla y Google entienden tu pagina**.

---

## La estructura completa

Cuando termines las 14 lecciones, tu pagina tendra esta estructura:

```
┌──────────────────────────────────────────────────────┐
│ <header>                                             │
│   <h1>Yamil N</h1>                                   │
│   <h2>Ingeniero Industrial</h2>                       │
│   Contacto rapido                                     │
├──────────────────────────────────────────────────────┤
│ <nav>                                                │
│   Perfil | Experiencia | Formacion | Articulos | ... │
├──────────────────────────────────┬───────────────────┤
│ <main>                           │ <aside>           │
│                                  │                   │
│   <section id="perfil">          │   Datos Rapidos   │
│     Perfil Profesional           │   Certificaciones │
│   </section>                     │   Idiomas         │
│                                  │   Software        │
│   <section id="experiencia">     │                   │
│     <article>Trabajo 1</article> │                   │
│     <article>Trabajo 2</article> │                   │
│     <article>Trabajo 3</article> │                   │
│   </section>                     │                   │
│                                  │                   │
│   <section id="formacion">       │                   │
│     <article>Maestria</article>  │                   │
│     <article>Ingenieria</article>│                   │
│   </section>                     │                   │
│                                  │                   │
│   <section id="articulos">       │                   │
│     <article>Publicacion 1</article>                 │
│     <article>Publicacion 2</article>                 │
│   </section>                     │                   │
│                                  │                   │
├──────────────────────────────────┴───────────────────┤
│ <footer>                                             │
│   (c) 2026 Yamil N | La Paz, Bolivia                │
└──────────────────────────────────────────────────────┘
```

---

## Comparacion: Antes vs Ahora

### Antes (con `<div>`):

```html
<div>
    <h1>Yamil N</h1>
</div>

<div>
    <h3>Experiencia</h3>
    <div>
        <h4>Gerente en TextilPro</h4>
    </div>
</div>
```

### Ahora (con HTML semantico):

```html
<header>
    <h1>Yamil N</h1>
</header>

<main>
    <section id="experiencia">
        <h3>Experiencia</h3>
        <article>
            <h4>Gerente en TextilPro</h4>
        </article>
    </section>
</main>
```

**Mismo contenido, mismo resultado visual, pero ahora tu pagina tiene significado.**

---

## Beneficios del HTML semantico

| Beneficio | Descripcion |
|-----------|-------------|
| **Accesibilidad** | Los lectores de pantalla para personas ciegas navegan usando estas etiquetas |
| **SEO** | Google entiende mejor tu contenido y lo posiciona mejor |
| **Mantenibilidad** | Los programadores entienden la estructura al leer el codigo |
| **Compatibilidad** | Los navegadores ofrecen funciones especiales (como "saltar al contenido") |