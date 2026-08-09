# 02 - Unidades Fluidas: vw, vh, %, vmin, vmax

## ¿Que aprendemos aqui?

Aprenderas a usar **unidades relativas al viewport** (la ventana del navegador) para crear disenos que se adaptan fluidamente a cualquier tamano de pantalla. Estas unidades son la base del diseno responsivo moderno.

---

## Las unidades del viewport

### vw (Viewport Width)

```css
.contenedor {
    width: 50vw;  /* 50% del ancho de la ventana */
}
```

- `1vw` = 1% del ancho de la ventana del navegador.
- Si la ventana tiene 1000px de ancho, `1vw` = `10px`.
- `50vw` = 50% del ancho de la ventana = `500px`.

### Analogia

```
vw = "Porcentaje de la pantalla"

Si tu pantalla tiene 1920px de ancho:
1vw = 19.2px
50vw = 960px
100vw = 1920px (toda la pantalla)
```

### Ejemplo practico

```css
.hero {
    width: 100vw;           /* Ocupa toda la pantalla */
    padding-left: 10vw;     /* 10% de margen izquierdo */
    padding-right: 10vw;    /* 10% de margen derecho */
}
```

---

### vh (Viewport Height)

```css
.hero {
    height: 100vh;  /* 100% del alto de la ventana */
}
```

- `1vh` = 1% del alto de la ventana del navegador.
- Si la ventana tiene 800px de alto, `1vh` = `8px`.
- `100vh` = toda la altura de la ventana.

### Uso comun: secciones de pantalla completa

```css
.hero {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}
```

Esto crea una seccion que ocupa exactamente toda la pantalla, con el contenido centrado.

---

### vmin (Viewport Minimum)

```css
.cuadrado {
    width: 50vmin;
    height: 50vmin;
}
```

- `1vmin` = 1% de la dimension **mas pequena** de la ventana.
- Si la ventana es 1920px x 800px, `1vmin` = `8px` (el alto es menor).
- Siempre usa la dimension menor (ancho o alto, lo que sea mas pequeno).

### Uso practico

```css
.avatar {
    width: 20vmin;
    height: 20vmin;
    border-radius: 50%;
}
```

El avatar sera un circulo que se adapta a la dimension mas pequena de la pantalla.

---

### vmax (Viewport Maximum)

```css
.texto-grande {
    font-size: 5vmax;
}
```

- `1vmax` = 1% de la dimension **mas grande** de la ventana.
- Si la ventana es 1920px x 800px, `1vmax` = `19.2px` (el ancho es mayor).
- Siempre usa la dimension mayor.

### Uso practico

```css
.titulo-hero {
    font-size: 8vmax;  /* Texto grande que escala con la pantalla */
}
```

---

### % (Porcentaje)

```css
.hijo {
    width: 60%;  /* 60% del ancho del padre */
}
```

- `%` es relativo al **elemento padre**.
- Para `width`: porcentaje del ancho del padre.
- Para `height`: porcentaje del alto del padre (el padre debe tener altura definida).
- Para `font-size`: porcentaje del font-size del padre.

### Diferencia con vw/vh

```
%  = relativo al PADRE
vw = relativo a la VENTANA
vh = relativo a la VENTANA
```

---

## Tabla comparativa

| Unidad | Relativo a | Ejemplo | Uso tipico |
|--------|-----------|---------|------------|
| `vw` | Ancho de la ventana | `width: 50vw` | Contenedores fluidos |
| `vh` | Alto de la ventana | `height: 100vh` | Secciones pantalla completa |
| `vmin` | Dimension menor | `width: 50vmin` | Cuadrados adaptativos |
| `vmax` | Dimension mayor | `font-size: 5vmax` | Textos que escalan |
| `%` | Elemento padre | `width: 80%` | Grids y layouts fluidos |

---

## Fluid Typography con clamp()

```css
.titulo {
    font-size: clamp(16px, 2.5vw, 24px);
}
```

`clamp(minimo, preferido, maximo)` crea un tamano fluido que:
- Nunca es menor a `16px`.
- Prefiere `2.5vw` (2.5% del ancho de la ventana).
- Nunca es mayor a `24px`.

### Analogia

```
clamp() = "Un tamano que se adapta, pero con limites"

"Quiero que el texto sea 2.5% de la pantalla,
 pero nunca mas pequeno que 16px
 ni mas grande que 24px."
```

---

## Grid fluida con % y calc()

```css
.grid {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.grid-item {
    flex: 1 1 calc(33.333% - 20px);
    min-width: 200px;
}
```

- Cada item ocupa 1/3 del ancho menos el gap.
- `min-width: 200px` hace que si no caben 3, pasen a 2 o 1 por fila.
- Esto crea un grid responsivo **sin media queries**.

---

## Combinando unidades

```css
.seccion {
    width: 90vw;              /* 90% de la ventana */
    max-width: 1200px;        /* Pero nunca mas de 1200px */
    margin: 0 auto;           /* Centrado */
    padding: 5vh 5vw;         /* Padding fluido */
}
```

Esta seccion:
- Ocupa 90% de la ventana.
- Pero nunca mas de 1200px.
- Centrado horizontalmente.
- Padding que escala con la ventana.

---

## Reglas importantes

| Regla | Detalle |
|-------|---------|
| `vw` y `vh` incluyen scrollbar | El ancho total incluye la barra de scroll |
| `vmin`/`vmax` cambian al rotar | En movil, al rotar la pantalla, cambian |
| `%` necesita un padre con tamano | Si el padre no tiene width/height, `%` no funciona bien |
| `clamp()` es ideal para texto fluido | Evita media queries para tamanos de fuente |
| Combina con `max-width` | Para evitar que elementos crezcan demasiado en pantallas grandes |

---

## Errores comunes

### Error 1: Usar vh en movil

```css
/* PROBLEMA: en movil, la barra de navegacion del navegador
   reduce el viewport, causando scroll inesperado */
.hero { height: 100vh; }

/* SOLUCION: usar dvh (dynamic viewport height) si es posible */
.hero { height: 100dvh; }

/* O usar min-height en lugar de height */
.hero { min-height: 100vh; }
```

### Error 2: Texto demasiado grande con vw

```css
/* PROBLEMA: en pantallas muy anchas, el texto es enorme */
.titulo { font-size: 5vw; }

/* SOLUCION: limitar con clamp() */
.titulo { font-size: clamp(16px, 5vw, 32px); }
```

### Error 3: Usar % sin contexto

```css
/* PROBLEMA: el padre no tiene altura definida */
.padre { }
.hijo { height: 50%; }  /* ¿50% de que? No funciona */

/* SOLUCION: dar altura al padre */
.padre { height: 400px; }
.hijo { height: 50%; }  /* 50% de 400px = 200px */
```

---

## Ejercicio practico

1. Abre el `index.html` y cambia el tamano de la ventana para ver los efectos.
2. Crea una seccion `hero` con `height: 100vh` y contenido centrado.
3. Usa `clamp()` para crear un titulo que escale fluidamente.
4. Crea un grid de 3 columnas que pase a 1 columna en pantallas pequenas.
5. Usa `vmin` para crear un avatar circular que se adapte.
6. Combina `%` y `max-width` para un contenedor centrado.
7. Experimenta con `vmax` para un fondo decorativo.
