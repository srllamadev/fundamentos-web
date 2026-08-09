# 03 - Propiedad display

## Que aprendemos aqui?

Aprenderas a controlar **como se comportan** los elementos en pantalla. La propiedad `display` es una de las mas poderosas de CSS: determina si un elemento ocupa toda la linea, se queda en linea con el texto, o desaparece por completo. Sin entender `display`, es imposible hacer layouts correctos.

---

## Codigo completo

```css
/* ===== DISPLAY BLOCK ===== */
.bloque {
    display: block;
    /* Ocupa TODO el ancho disponible */
    /* Empieza en una linea nueva */
    /* Acepta width, height, margin, padding */
}

/* ===== DISPLAY INLINE ===== */
.en-linea {
    display: inline;
    /* Solo ocupa el espacio de su contenido */
    /* Se queda en la misma linea que otros */
    /* NO acepta width, height, margin-top, margin-bottom */
}

/* ===== DISPLAY INLINE-BLOCK ===== */
.bloque-en-linea {
    display: inline-block;
    /* Lo mejor de ambos mundos */
    /* Se queda en linea con otros elementos */
    /* PERO acepta width, height, margin, padding */
}

/* ===== DISPLAY NONE ===== */
.invisible {
    display: none;
    /* Desaparece completamente del layout */
    /* No ocupa espacio, no se renderiza */
}

/* ===== VALORES POR DEFECTO DE ELEMENTOS COMUNES ===== */
div, p, h1-h6, ul, ol, li, header, footer, section, article {
    display: block;          /* Por defecto son bloque */
}
span, a, strong, em, img, input, label {
    display: inline;         /* Por defecto son en linea (excepto img e input) */
}
img, input, textarea, select {
    display: inline-block;   /* Algunos son inline-block por defecto */
}
```

---

## Los 4 valores principales

### 1. display: block

```
┌─────────────────────────────────────────┐
│            ELEMENTO BLOCK               │
│                                         │
│  Ocupa TODO el ancho de la linea        │
│  Empieza en una linea NUEVA             │
│  Baja a la siguiente linea despues      │
│  Acepta: width, height, margin, padding │
│                                         │
└─────────────────────────────────────────┘
         siguiente elemento aqui
```

Elementos block por defecto: `div`, `p`, `h1`-`h6`, `ul`, `ol`, `li`, `header`, `footer`, `section`, `article`, `form`, `table`.

### 2. display: inline

```
Texto  [contenido]  mas texto  [contenido]  final
         ^                           ^
     se queda en la misma linea que el texto
     solo ocupa el espacio de su contenido
     NO acepta width, height, margin-top/bottom
```

Elementos inline por defecto: `span`, `a`, `strong`, `em`, `b`, `i`, `label`, `abbr`.

### 3. display: inline-block

```
┌──────┐  ┌──────┐  ┌──────┐
│conten│  │conten│  │conten│  <-- todos en la misma linea
│  ido │  │  ido │  │  ido │
└──────┘  └──────┘  └──────┘
  pero cada uno acepta width, height, padding, margin
```

### 4. display: none

```
┌─────────────────────────────────────────┐
│  Elemento A                             │
└─────────────────────────────────────────┘
  (el elemento B esta aqui pero es invisible)
  (no ocupa NINGUN espacio)
┌─────────────────────────────────────────┐
│  Elemento C                             │
└─────────────────────────────────────────┘
```

---

## Tabla comparativa

| Propiedad | block | inline | inline-block | none |
|-----------|-------|--------|--------------|------|
| Empieza en linea nueva | Si | No | No | No |
| Ocupa todo el ancho | Si | No | No | No |
| Acepta `width` | Si | **No** | Si | No |
| Acepta `height` | Si | **No** | Si | No |
| Acepta `margin` (todos los lados) | Si | Solo izq/der | Si | No |
| Acepta `padding` (todos los lados) | Si | Solo izq/der visual | Si | No |
| Respeta el tamano del contenido | No | Si | Si | No |
| Se mantiene en la misma linea | No | Si | Si | No |

---

## Anatomia de cada display

### block

```
┌──────────────────────────────────────────────┐
│                                              │
│  <div>     -->  ancho: 100% por defecto      │
│                margin-top: empuja abajo       │
│                padding: empuja contenido       │
│                margin-bottom: separa siguiente │
│  </div>                                      │
│                                              │
└──────────────────────────────────────────────┘
                siguiente bloque aqui
```

### inline

```
  texto ──> [ <span>hola</span> ] ──> mas texto

  El span NO puede tener:
    - width (se ignora)
    - height (se ignora)
    - margin-top / margin-bottom (se ignoran)

  El span SI puede tener:
    - padding (empuja el texto alrededor)
    - margin-left / margin-right (separa horizontalmente)
```

### inline-block

```
  texto ──> ┌───────┐ ──> mas texto
            │ 300px │
            │ 100px │  <-- acepta width y height!
            └───────┘

  inline-block = inline + block
    Se queda en linea (como inline)
    Pero acepta width, height, margin, padding (como block)
```

---

## Display por defecto de elementos HTML

| Elemento | Display por defecto |
|----------|---------------------|
| `div` | block |
| `p` | block |
| `h1` - `h6` | block |
| `ul`, `ol` | block |
| `li` | block |
| `header`, `footer`, `nav`, `main`, `section`, `article` | block |
| `form` | block |
| `table` | table |
| `span` | inline |
| `a` | inline |
| `strong`, `em`, `b`, `i` | inline |
| `label` | inline |
| `img` | inline |
| `input` | inline-block |
| `button` | inline-block |
| `textarea` | inline-block |

---

## Problemas comunes que display resuelve

### Problema 1: Links que quiero hacer botones

```css
/* PROBLEMA: un <a> es inline, no acepta width ni height */
a {
    color: white;
    background-color: #1a5276;
    /* width y height NO funcionan porque a es inline */
}

/* SOLUCION: cambiar a inline-block */
a {
    display: inline-block;
    color: white;
    background-color: #1a5276;
    padding: 10px 20px;
    width: 200px;           /* AHORA funciona */
    text-align: center;
}
```

### Problema 2: Imagenes que no se alinean

```css
/* PROBLEMA: las imagenes son inline y tienen espacio abajo */
img {
    display: block;         /* SOLUCION: eliminar espacio fantasma */
}
```

### Problema 3: Elementos en fila sin floats

```css
/* ANTES de Flexbox, se usaba inline-block para poner cosas en fila */
.columna {
    display: inline-block;
    width: 30%;
    margin-right: 3%;
    vertical-align: top;    /* Alinear arriba */
}
```

### Problema 4: Ocultar elementos condicionalmente

```css
/* Ocultar un elemento sin borrarlo del HTML */
.menu-oculto {
    display: none;          /* Desaparece completamente */
}

/* Mostrarlo con JavaScript */
/* document.querySelector('.menu-oculto').style.display = 'block'; */
```

---

## Reglas importantes

| Regla | Detalle |
|-------|---------|
| `display` cambia el comportamiento del elemento | Un span puede actuar como div |
| `inline` ignora `width` y `height` | Es la trampa mas comun |
| `inline` ignora `margin-top` y `margin-bottom` | Solo acepta margin horizontal |
| `inline-block` es el hibrido perfecto | Acepta todo y se queda en linea |
| `display: none` no es lo mismo que `visibility: hidden` | none no ocupa espacio, hidden si |
| `display` no se hereda | Cada hijo tiene su propio display |
| `img` es inline por defecto | Por eso tiene espacio abajo; usa `display: block` |
| `display` es la base de Flexbox y Grid | `display: flex` y `display: grid` son versiones avanzadas |

---

## Errores comunes

### Error 1: Poner width a un inline

```css
/* PROBLEMA: esto NO funciona */
span.medida {
    display: inline;   /* o no poner nada, span es inline por defecto */
    width: 200px;      /* SE IGNORA */
    height: 50px;      /* SE IGNORA */
}

/* SOLUCION: usar inline-block */
span.medida {
    display: inline-block;
    width: 200px;      /* AHORA SI funciona */
    height: 50px;
}
```

### Error 2: Confundir display:none con visibility:hidden

```css
/* display: none --> El elemento NO existe en el layout */
.oculto-display {
    display: none;
    /* No ocupa espacio, los demas elementos se mueven */
}

/* visibility: hidden --> El elemento esta invisible pero ocupa espacio */
.oculto-visibilidad {
    visibility: hidden;
    /* Ocupa espacio, deja un hueco en el layout */
}

/* Analogia: */
/* display: none       = La persona no fue a la fiesta */
/* visibility: hidden  = La persona fue pero se escondio detras de un sofa */
```

### Error 3: El espacio fantasma de inline-block

```css
/* PROBLEMA: inline-block deja espacios entre elementos */
.col { display: inline-block; width: 33%; }

<!-- En HTML hay un espacio (salto de linea) entre los elementos -->
<div class="col">1</div>
<div class="col">2</div>  <!-- Hay un espacio en blanco entre ellos -->
<div class="col">3</div>

/* SOLUCION 1: font-size 0 en el padre */
.padre {
    font-size: 0;       /* Elimina el espacio */
}
.padre > .col {
    font-size: 16px;    /* Restaurar en los hijos */
}

/* SOLUCION 2: usar Flexbox en lugar de inline-block */
.padre {
    display: flex;       /* Mejor solucion moderna */
}
```

### Error 4: No cambiar el display de los links

```css
/* PROBLEMA: un link con fondo no se ve como boton */
.boton-link {
    background-color: #1a5276;
    color: white;
    padding: 10px 20px;
    /* Pero el padding vertical no se ve bien porque a es inline */
}

/* SOLUCION: cambiar a inline-block */
.boton-link {
    display: inline-block;  /* Ahora acepta todo */
    background-color: #1a5276;
    color: white;
    padding: 10px 20px;
}
```

---

## Ejercicios practicos

1. Abre el `index.html` en tu navegador.
2. Abre las DevTools (F12) y cambia el display de un elemento para ver que pasa.
3. Inspecciona un `span` y prueba ponerle `width: 200px`. Veras que no funciona.
4. Cambia el span a `display: inline-block` y verifica que el width ahora si funciona.
5. Crea 3 divs con `display: inline-block` y `width: 30%` para ponerlos en fila.
6. Usa `display: none` en un elemento y nota que desaparece sin dejar hueco.
7. Cambia `display: none` por `visibility: hidden` y nota la diferencia.
8. Convierte un link `<a>` en un boton visual con `display: inline-block` + padding + background.
