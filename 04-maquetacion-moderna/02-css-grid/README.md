# CSS Grid: Layouts en dos dimensiones

## ¿Que aprendemos aqui?

- Como activar CSS Grid con `display: grid`
- Definir columnas y filas con `grid-template-columns` y `grid-template-rows`
- La unidad `fr` y la funcion `repeat()`
- Nombrar areas con `grid-template-areas`
- Posicionar items con `grid-column` y `grid-row`
- Layouts completos 2D (dashboards, paginas completas)
- Cuando usar Grid vs Flexbox

---

## Bloque de codigo completo

```css
/* ===== CSS GRID - CONTENEDOR ===== */

.contenedor-grid {
  display: grid;

  /* Definir columnas y filas */
  grid-template-columns: 200px 1fr 200px;   /* 3 columnas: fija, flexible, fija */
  grid-template-rows: 80px 1fr 60px;        /* 3 filas: header, contenido, footer */

  /* Con repeat() */
  grid-template-columns: repeat(3, 1fr);     /* 3 columnas iguales */
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); /* Responsive */

  /* Espacio entre items */
  gap: 20px;

  /* Nombrar areas */
  grid-template-areas:
    "header header header"
    "sidebar main aside"
    "footer footer footer";
}

/* ===== CSS GRID - ITEMS ===== */

.item-grid {
  /* Posicionar con lineas */
  grid-column: 1 / 3;     /* De linea 1 a linea 3 (ocupa 2 columnas) */
  grid-row: 2 / 4;         /* De linea 2 a linea 4 (ocupa 2 filas) */

  /* Posicionar con areas nombradas */
  grid-area: header;       /* Ocupa el area llamada "header" */
}
```

---

## Explicacion detallada

### ¿Que es CSS Grid?

Grid es un sistema de layout **bidimensional**. A diferencia de Flexbox (que trabaja en una direccion), Grid controla **filas Y columnas** al mismo tiempo.

**Analogia:** Si Flexbox es una linea de ensamblaje (unidimensional), Grid es el **plano arquitectonico** de toda la fabrica TextilPro: define donde va cada area (produccion, almacen, oficinas) y como se relacionan entre si.

### Activar Grid

```css
.contenedor {
  display: grid;
}
```

Todos los hijos directos se convierten en "grid items" y se colocan automaticamente en la cuadricula.

### Definir columnas y filas

```
grid-template-columns: 200px 1fr 200px;

┌──────────┬───────────────────┬──────────┐
│  200px   │       1fr         │  200px   │
│ (fija)   │  (resto espacio)  │ (fija)   │
│          │                   │          │
│ Columna  │    Columna 2      │ Columna  │
│    1     │   (flexible)      │    3     │
└──────────┴───────────────────┴──────────┘

1fr = una fraccion del espacio disponible
Si hay 900px y las columnas fijas son 400px,
entonces 1fr = 500px.
```

### La unidad `fr`

`fr` significa "fraccion del espacio disponible". Es la forma mas limpia de crear columnas flexibles.

```
repeat(3, 1fr):             1fr 2fr 1fr:
┌────┬────┬────┐           ┌────┬────────┬────┐
│ 1  │ 2  │ 3  │           │ 1  │   2    │ 3  │
└────┴────┴────┘           └────┴────────┴────┘
(iguales)                  (2 es doble de ancho)
```

### La funcion `repeat()`

Evita escribir lo mismo muchas veces:

```css
/* Sin repeat */
grid-template-columns: 1fr 1fr 1fr 1fr;

/* Con repeat (equivalente) */
grid-template-columns: repeat(4, 1fr);
```

### gap (espacio entre items)

```css
.contenedor {
  display: grid;
  gap: 20px;           /* 20px entre filas Y columnas */
  row-gap: 10px;       /* Solo entre filas */
  column-gap: 20px;    /* Solo entre columnas */
}
```

### Grid con areas nombradas

La forma mas visual de crear layouts:

```css
.contenedor {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar main aside"
    "footer footer footer";
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: 80px 1fr 60px;
}

.header  { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main    { grid-area: main; }
.aside   { grid-area: aside; }
.footer  { grid-area: footer; }
```

```
Resultado visual:
┌──────────────────────────────────────┐
│              HEADER                  │  (header header header)
├──────────┬───────────────┬───────────┤
│          │               │           │
│ SIDEBAR  │     MAIN      │   ASIDE   │  (sidebar main aside)
│          │               │           │
├──────────┴───────────────┴───────────┤
│              FOOTER                  │  (footer footer footer)
└──────────────────────────────────────┘
```

**Analogia:** En TextilPro, es como el plano de la fabrica: cada area tiene un nombre ("Corte", "Costura", "Empaque") y el plano define donde esta cada una.

### Posicionar con lineas

Cada borde de columna/fila tiene un numero de linea:

```
Lineas de columna:
  1          2          3          4
  │          │          │          │
  ├──────────┼──────────┼──────────┤
  │ Col 1    │ Col 2    │ Col 3    │
  └──────────┴──────────┴──────────┘

Para un item que ocupe 2 columnas:
grid-column: 1 / 3;  (de linea 1 a linea 3)

grid-column: span 2;  (ocupa 2 columnas desde donde este)
```

### Grid responsivo automatico

```css
.grid-auto {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}
```

- `auto-fill`: crea tantas columnas como quepan
- `minmax(250px, 1fr)`: cada columna minimo 250px, maximo 1fr
- Resultado: las columnas se ajustan automaticamente al tamaño de la pantalla

```
Pantalla 1200px:          Pantalla 600px:
┌────┬────┬────┬────┐     ┌────┬────┐
│ 1  │ 2  │ 3  │ 4  │     │ 1  │ 2  │
└────┴────┴────┴────┘     └────┴────┘
(4 columnas)              (2 columnas)
```

---

## Tabla comparativa: Grid vs Flexbox

| Caracteristica | Flexbox | CSS Grid |
|----------------|---------|----------|
| Dimension | 1D (fila o columna) | 2D (filas y columnas) |
| Enfoque | Contenido (de adentro hacia afuera) | Layout (de afuera hacia adentro) |
| Ideal para | Componentes, navbars, listas | Paginas completas, dashboards, galerias |
| Control de tamaño | Basado en contenido | Basado en la cuadricula |
| Curva de aprendizaje | Mas facil | Un poco mas compleja |
| Se pueden combinar | Si, son complementarios | Si, son complementarios |

---

## Reglas importantes

| # | Regla |
|---|-------|
| 1 | `display: grid` crea un contexto de cuadricula para los hijos directos |
| 2 | `fr` distribuye el espacio **disponible** (despues de elementos fijos) |
| 3 | `grid-template-areas` es la forma mas legible de crear layouts complejos |
| 4 | Un item puede abarcar multiples columnas/filas con `span` o lineas numericas |
| 5 | `auto-fill` vs `auto-fit`: `auto-fit` colapsa pistas vacias, `auto-fill` no |
| 6 | Grid y Flexbox se pueden combinar: Grid para el layout general, Flexbox dentro de componentes |
| 7 | Los items se posicionan automaticamente si no les das una posicion explicita |

---

## Errores comunes

| Error | Por que pasa | Solucion |
|-------|-------------|----------|
| Las columnas no se ven como espero | No defini `grid-template-columns` | Sin esto, todo va en una sola columna |
| Los items se desbordan | Falta `grid-template-rows: auto` o contenido muy grande | Usar `min-content` o `auto` en filas |
| Las areas no coinciden | La cantidad de nombres en cada fila de `grid-template-areas` no es igual | Cada fila debe tener la misma cantidad de nombres |
| Confundir `fr` con `%` | `fr` es espacio disponible, `%` es del contenedor | `fr` considera gaps, `%` no |
| Grid no es responsive | Uso valores fijos (px) en lugar de `fr` o `auto-fill` | Usar `repeat(auto-fill, minmax(..., 1fr))` |
| No puedo centrar un item | Olvidaste que Grid usa `justify-items` y `align-items` (no `justify-content`) | Grid tiene sus propias propiedades de alineacion |

---

## Ejercicios practicos

### Ejercicio 1: Layout de pagina completa
Crea un layout con header, sidebar izquierdo, contenido principal, y footer. Usa `grid-template-areas`.

```
┌──────────────────────────────────┐
│           HEADER                 │
├──────────┬───────────────────────┤
│          │                       │
│ SIDEBAR  │    CONTENIDO          │
│          │                       │
├──────────┴───────────────────────┤
│           FOOTER                 │
└──────────────────────────────────┘
```

### Ejercicio 2: Galeria de productos responsive
Crea una galeria que muestre 4 columnas en pantallas grandes, 3 en medianas, 2 en pequeñas, y 1 en movil. Usa `repeat(auto-fill, minmax(...))`.

### Ejercicio 3: Dashboard de TextilPro
Crea un dashboard con: un header que ocupe todo el ancho, una sidebar, un area principal con graficos, y un area de notificaciones a la derecha.

### Ejercicio 4: Formulario con Grid
Usa Grid para crear un formulario donde las etiquetas esten en una columna y los inputs en otra, alineados correctamente.

### Ejercicio 5: Combina Grid + Flexbox
Crea un layout general con Grid (header, sidebar, main, footer) y dentro del area "main" usa Flexbox para organizar tarjetas de productos.

---

## Conexiones

- Tema anterior: [Flexbox](../01-flexbox/)
- Siguiente tema: [z-index y apilamiento](../03-z-index-apilamiento/)
