# 14 - `<footer>`: El Pie de Pagina

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