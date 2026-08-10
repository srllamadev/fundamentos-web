# Flexbox: Layouts en una dimension

## ¿Que aprendemos aqui?

- Como activar Flexbox con `display: flex`
- Los dos ejes: main axis y cross axis
- Propiedades del contenedor (padre)
- Propiedades de los items (hijos)
- Como crear layouts comunes: navbar, cards, centrar elementos
- Errores frecuentes y como evitarlos

---

## Bloque de codigo completo

```css
/* ===== FLEXBOX - PROPIEDADES DEL CONTENEDOR ===== */

.contenedor-flex {
  display: flex;              /* Activa Flexbox */
  flex-direction: row;        /* row | column | row-reverse | column-reverse */
  justify-content: center;    /* Alineacion en el eje principal */
  align-items: center;        /* Alineacion en el eje cruzado */
  flex-wrap: wrap;            /* wrap | nowrap | wrap-reverse */
  gap: 20px;                  /* Espacio entre items */
}

/* Valores de justify-content: */
/* flex-start | flex-end | center | space-between | space-around | space-evenly */

/* Valores de align-items: */
/* stretch | flex-start | flex-end | center | baseline */

/* ===== FLEXBOX - PROPIEDADES DE LOS ITEMS ===== */

.item-flex {
  flex-grow: 1;       /* Cuanto puede crecer (0 = no crece) */
  flex-shrink: 0;     /* Cuanto puede encogerse (1 = se encoge) */
  flex-basis: 200px;  /* Tamaño inicial antes de crecer/encoger */
  /* Atajo: flex: 1 0 200px; */
  align-self: flex-end; /* Sobrescribe align-items para este item */
  order: 2;             /* Orden visual (menor = primero) */
}
```

---

## Explicacion detallada

### ¿Que es Flexbox?

Flexbox es un modelo de layout **unidimensional**. Significa que organiza elementos en **una direccion a la vez**: horizontal (fila) o vertical (columna).

**Analogia:** En TextilPro, una linea de ensamblaje es unidimensional: las piezas avanzan en una sola direccion. Cada estacion de trabajo es un "item flex" en la linea.

### Los dos ejes

Todo contenedor flex tiene **dos ejes**:

```
flex-direction: row (horizontal)
┌─────────────────────────────────────┐
│  MAIN AXIS ──────────────────►      │  (justify-content controla aqui)
│                                     │
│  [Item 1]  [Item 2]  [Item 3]       │
│                                     │
│  ▲ CROSS AXIS                       │  (align-items controla aqui)
│  │                                  │
└─────────────────────────────────────┘

flex-direction: column (vertical)
┌─────────────────┐
│  Item 1         │
│  Item 2         │  MAIN AXIS ↓ (justify-content)
│  Item 3         │
│                 │
│  ◄ CROSS AXIS   │  (align-items controla aqui)
│                 │
└─────────────────┘

IMPORTANTE: Cuando cambias flex-direction,
los ejes se intercambian.
```

### Propiedades del contenedor (padre)

#### 1. display: flex

Activa Flexbox. Todos los hijos directos se convierten en "flex items".

```css
.contenedor {
  display: flex;
}
```

#### 2. flex-direction

Define la direccion del eje principal:

```
row:            row-reverse:
[1] [2] [3]     [3] [2] [1]

column:         column-reverse:
[1]             [3]
[2]             [2]
[3]             [1]
```

#### 3. justify-content

Alinea los items en el **eje principal** (la direccion de flex-direction):

```
flex-start:         flex-end:
[1][2][3]                   [1][2][3]

center:             space-between:
   [1][2][3]        [1]   [2]   [3]

space-around:       space-evenly:
  [1]  [2]  [3]      [1]  [2]  [3]
```

#### 4. align-items

Alinea los items en el **eje cruzado** (perpendicular al eje principal):

```
stretch (por defecto):    flex-start:
┌──────────┐             ┌──────────┐
│ Item 1   │             │ Item 1   │
│ Item 2   │             │ Item 2   │
│ Item 3   │             └──────────┘
└──────────┘              [1] [2] [3]

center:                   flex-end:
                         ┌──────────┐
   [1] [2] [3]           │ Item 1   │
                         │ Item 2   │
                         │ Item 3   │
                         └──────────┘
                          [1] [2] [3]
```

#### 5. flex-wrap

Controla si los items se envuelven en varias lineas:

```
nowrap (por defecto):   wrap:
[1][2][3][4][5][6]      [1][2][3]
(fuerza en una linea)   [4][5][6]
```

#### 6. gap

Espacio entre items (mas limpio que usar margins):

```css
.contenedor {
  display: flex;
  gap: 20px;  /* 20px entre cada item */
}
```

### Propiedades de los items (hijos)

#### 1. flex-grow, flex-shrink, flex-basis

Controlan como el item crece, se encoge, y su tamaño base:

```
flex-grow: 0 → No crece mas alla de su tamaño base
flex-grow: 1 → Crece para llenar el espacio disponible
flex-grow: 2 → Crece el doble que un item con flex-grow: 1

flex-shrink: 0 → No se encoge
flex-shrink: 1 → Se encoge si no hay espacio

flex-basis: 200px → Tamaño inicial antes de crecer/encoger
flex-basis: auto  → Tamaño basado en el contenido
```

**Atajo comun:** `flex: 1;` significa `flex-grow: 1; flex-shrink: 1; flex-basis: 0;`

#### 2. align-self

Sobrescribe `align-items` para un item especifico:

```css
.item-especial {
  align-self: flex-end;  /* Se alinea abajo, ignorando align-items del padre */
}
```

#### 3. order

Cambia el orden visual sin alterar el HTML:

```css
.item-1 { order: 2; }  /* Aparece segundo */
.item-2 { order: 1; }  /* Aparece primero */
```

**Advertencia:** Cambiar el orden con `order` puede confundir a lectores de pantalla. Usalo con cuidado.

---

## Tabla comparativa: justify-content vs align-items

| Propiedad | Eje que controla | Valores comunes | Uso tipico |
|-----------|------------------|-----------------|------------|
| `justify-content` | Eje principal (row → horizontal) | center, space-between, flex-start | Distribuir espacio horizontalmente |
| `align-items` | Eje cruzado (row → vertical) | center, stretch, flex-end | Centrar verticalmente, alinear arriba/abajo |

---

## Reglas importantes

| # | Regla |
|---|-------|
| 1 | `display: flex` convierte a los hijos directos en flex items |
| 2 | Los flex items solo pueden ser movidos en el eje principal y cruzado |
| 3 | `flex-direction` cambia cual es el eje principal y cual el cruzado |
| 4 | `flex-grow` y `flex-shrink` solo funcionan si hay espacio extra o falta de espacio |
| 5 | `order` solo cambia el orden visual, no el orden del DOM |
| 6 | `gap` es preferible a margins entre items (mas limpio, sin bordes dobles) |
| 7 | Flexbox NO es para layouts 2D completos (para eso usa Grid) |

---

## Errores comunes

| Error | Por que pasa | Solucion |
|-------|-------------|----------|
| Los items no se centran verticalmente | Olvidaste `align-items: center` | Agregarlo al contenedor |
| Items se salen del contenedor | Falta `flex-wrap: wrap` | Agregarlo si quieres multiples lineas |
| Un item no crece como espero | `flex-grow` es 0 por defecto | Agregar `flex-grow: 1` al item |
| Espacio desigual entre items | Usando `space-around` en vez de `space-between` | Cambiar a `space-between` si quieres espacios iguales |
| `justify-content` no funciona | El contenedor tiene ancho exacto de los items | El contenedor debe ser mas grande que la suma de items |
| Confundir ejes al cambiar direccion | `justify-content` siempre es eje principal | Recordar: justify = principal, align = cruzado |

---

## Ejercicios practicos

### Ejercicio 1: Navbar horizontal
Crea una barra de navegacion con el logo a la izquierda y los enlaces a la derecha. Usa `justify-content: space-between`.

```
┌─────────────────────────────────────────────┐
│  [LOGO]              [Inicio] [Productos] [Contacto]  │
└─────────────────────────────────────────────┘
```

### Ejercicio 2: Centrar un modal
Crea un contenedor que ocupe toda la pantalla y centre un modal dentro (horizontal y verticalmente).

```
┌─────────────────────────────────────────────┐
│                                             │
│                                             │
│              ┌─────────────┐                │
│              │   MODAL     │                │
│              │  CENTRADO   │                │
│              └─────────────┘                │
│                                             │
│                                             │
└─────────────────────────────────────────────┘
```

### Ejercicio 3: Tarjetas de productos
Crea una fila de tarjetas de productos de TextilPro que se envuelvan automaticamente si no hay espacio. Usa `flex-wrap: wrap` y `gap`.

### Ejercicio 4: Sidebar + Contenido
Crea un layout donde la sidebar tenga ancho fijo (250px) y el contenido principal ocupe el resto del espacio. Usa `flex-grow: 1` en el contenido.

### Ejercicio 5: Lista de tareas
Crea una lista de tareas pendientes donde cada tarea tenga un icono a la izquierda, el texto en el centro, y un boton de eliminar a la derecha. Usa Flexbox para alinear los tres elementos.

---

## Conexiones

- Tema anterior: [Float y Clear](../../03-maquetacion-clasica/02-float-y-clear/)
- Siguiente tema: [CSS Grid](../02-css-grid/)
