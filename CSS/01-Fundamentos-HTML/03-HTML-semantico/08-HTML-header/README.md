# 01 - `<header>`: La Cabecera

## ¿Que aprendemos aqui?

Aprenderas que es `<header>`, para que sirve y como se usa. Esta etiqueta representa la **cabecera** de una pagina o de una seccion: la zona donde se presenta el contenido mas importante de introduccion.

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
        <p>Email: yamil.ejemplo@email.com | Tel: +591 7070707070 | La Paz, Bolivia</p>
    </header>

</body>
</html>
```

---

## ¿Que es `<header>`?

```html
<header>
    <h1>Yamil N</h1>
    <h2>Ingeniero Industrial</h2>
</header>
```

- Es la **cabecera** de la pagina o de una seccion.
- Contiene informacion de **presentacion**: quien es el autor, cual es el titulo, datos de contacto rapido.
- Es lo primero que el visitante ve al abrir la pagina.

### Analogia

```
<header> = La portada de un periodico

┌─────────────────────────────────────────────┐
│                                             │
│          EL DIARIO                          │
│     Edicion del 2 de agosto de 2026         │
│     Director: Yamil N                       │
│                                             │
│  ─ Aqui ves el nombre, la fecha, y quien    │
│    dirige. Es la presentacion del periodico.│
│                                             │
└─────────────────────────────────────────────┘
```

---

## ¿Que va dentro de `<header>`?

| Elemento | ¿Por que? |
|----------|-----------|
| `<h1>` | El titulo principal de la pagina |
| `<h2>` o `<p>` | Subtitulo o descripcion corta |
| Datos de contacto rapido | Email, telefono, ubicacion |
| Logo o imagen de perfil | Identificacion visual |
| `<nav>` | A veces el menu va dentro del header |

### Ejemplo en nuestro perfil

```html
<header>
    <h1>Yamil N</h1>
    <h2>Ingeniero Industrial | Especialista en Optimizacion de Procesos</h2>
    <p>Email: yamil.ejemplo@email.com | Tel: +591 7070707070 | La Paz, Bolivia</p>
</header>
```

Se muestra asi:

```
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│  Yamil N                                                     │
│  Ingeniero Industrial | Especialista en Optimizacion de      │
│  Procesos                                                    │
│  Email: yamil.ejemplo@email.com | Tel: +591 7070707070 |    │
│  La Paz, Bolivia                                             │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

---

## ¿Cuantoos `<header>` puede haber?

La regla es:

- **Un `<header>` principal** para toda la pagina (va directamente dentro de `<body>`).
- **Cada `<section>` o `<article>` puede tener su propio `<header>`** si necesita cabecera.

```html
<body>

    <header>
        <!-- Cabecera PRINCIPAL de la pagina -->
        <h1>Yamil N</h1>
    </header>

    <section>
        <header>
            <!-- Cabecera de esta seccion -->
            <h2>Experiencia Laboral</h2>
        </header>
        <article>...</article>
    </section>

</body>
```

### Analogia

```
Periodico (pagina)
├── PORTADA (header principal)
├── Seccion Deportes
│   └── Titulo de seccion (header de section)
├── Seccion Politica
│   └── Titulo de seccion (header de section)
└── Pie de pagina (footer)
```

---

## `<header>` vs `<div>`

Recuerda que en la leccion anterior usabamos `<div>` para esto:

```html
<!-- ANTES -->
<div>
    <h1>Yamil N</h1>
    <h2>Ingeniero Industrial</h2>
</div>

<!-- AHORA -->
<header>
    <h1>Yamil N</h1>
    <h2>Ingeniero Industrial</h2>
</header>
```

El resultado visual es el mismo, pero `<header>` le dice al navegador: **"esto es la cabecera"**, no solo "una caja generica".

---

## Reglas importantes

| Regla | Detalle |
|-------|---------|
| Un `<header>` principal por pagina | Va directamente dentro de `<body>` |
| Puede haber mas `<header>` dentro de `<section>` o `<article>` | Cada seccion puede tener su propia cabecera |
| No anidar `<header>` dentro de otro `<header>` | Un header no va dentro de otro header |
| Tipicamente contiene `<h1>` a `<h6>`, `<p>`, `<nav>` | Es contenido de presentacion |

---

## Ejercicio practico

1. Abre el `index.html` en tu navegador.
2. Agrega una imagen dentro del `<header>` (usa `<img>` que aprendiste antes).
3. Agrega un enlace a LinkedIn dentro del `<header>`.
4. Crea una segunda version del `<header>` con un estilo diferente (mas datos, menos datos).
5. ¿Que pasa si pones dos `<header>` principales? ¿Funciona? ¿Tiene sentido?
