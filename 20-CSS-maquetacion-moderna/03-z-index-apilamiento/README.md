# z-index y Contexto de Apilamiento

## ¿Que aprendemos aqui?

- Que es `z-index` y como controla el orden de apilamiento
- Que es un "stacking context" (contexto de apilamiento)
- Las reglas de apilamiento de CSS
- Errores comunes con z-index
- Casos practicos: modales, dropdowns, tooltips

---

## Bloque de codigo completo

```css
/* ===== Z-INDEX ===== */

/* z-index SOLO funciona en elementos posicionados
   (position diferente de static) */

.elemento-abajo {
  position: relative;
  z-index: 1;       /* Capa mas baja */
}

.elemento-medio {
  position: relative;
  z-index: 10;      /* Capa media */
}

.elemento-arriba {
  position: relative;
  z-index: 100;     /* Capa mas alta */
}

/* ===== STACKING CONTEXT (contexto de apilamiento) ===== */

/* Se crea con: */
.contexto {
  position: relative;  /* o absolute, fixed, sticky */
  z-index: 0;          /* cualquier valor excepto auto */
  /* Tambien lo crean: opacity < 1, transform, filter, etc. */
}
```

---

## Explicacion detallada

### ¿Que es z-index?

`z-index` controla el orden de apilamiento de elementos que se superponen. Piensa en ello como una **tercera dimension**: ademas de izquierda/derecha (x) y arriba/abajo (y), esta el "adelante/atras" (z).

```
Vista lateral (eje Z):
                          ┌──────────┐
                          │ z: 100   │  ← Mas cerca del usuario
                    ┌─────┤          │
                    │ z:10├──────────┤
              ┌─────┤     │          │
              │ z:1 ├─────┤          │
              │     │     │          │
    ──────────┴─────┴─────┴──────────┴───────── PANTALLA
              Mas lejos                    Mas cerca
```

**Analogia:** En el almacen de TextilPro, las cajas se apilan en estantes. El estante de adelante (z mas alto) tapa al de atras (z mas bajo). No importa cuan grande sea la caja de atras, si hay una adelante, no la ves.

### Regla fundamental

**z-index SOLO funciona en elementos con `position` diferente de `static`.**

```css
/* NO funciona */
.elemento {
  z-index: 100;  /* Ignorado porque position es static */
}

/* SI funciona */
.elemento {
  position: relative;  /* o absolute, fixed, sticky */
  z-index: 100;
}
```

### Orden de apilamiento por defecto

Sin z-index, los elementos se apilan en este orden (de atras hacia adelante):

```
ORDEN DE APILAMIENTO (de abajo hacia arriba)
┌──────────────────────────────────┐
│  7. Elementos posicionados       │  ← Los ultimos en el HTML van arriba
│     con z-index >= 0             │
├──────────────────────────────────┤
│  6. Elementos posicionados       │
│     sin z-index (z-index: auto)  │
├──────────────────────────────────┤
│  5. Elementos en bloque          │
│     (div, p, h1, etc.)           │
├──────────────────────────────────┤
│  4. Elementos flotantes          │
│     (float)                      │
├──────────────────────────────────┤
│  3. Elementos en linea           │
│     (span, a, etc.)              │
├──────────────────────────────────┤
│  2. Imagenes reemplazadas        │
│     (img, video)                 │
├──────────────────────────────────┤
│  1. Fondo y bordes del           │
│     elemento raiz                │  ← Lo mas atras
└──────────────────────────────────┘
```

### Valores de z-index

```
z-index: auto      → Sigue el orden natural del documento
z-index: 0         → Crea un stacking context, pero no cambia el orden
z-index: positivo  → Elemento va mas adelante
z-index: negativo  → Elemento va mas atras (detras del fondo del padre)
z-index: 9999      → Convencionalmente "siempre adelante" (pero evitalo)
```

### Stacking Context (contexto de apilamiento)

Este es el concepto que causa mas confusion. Un **stacking context** es como un "mini universo" donde los z-index se comparan solo entre elementos del mismo contexto.

```
STACKING CONTEXTS ANIDADOS

Contexto raiz (html)
┌────────────────────────────────────────────┐
│                                            │
│  Contexto A (z-index: 2)                   │
│  ┌──────────────────────────┐              │
│  │  Hijo A1 (z-index: 999)  │ ← Aunque    │
│  │                          │   tenga 999, │
│  └──────────────────────────┘   solo       │
│                                  compite   │
│  Contexto B (z-index: 3)      dentro de A  │
│  ┌──────────────────────────┐              │
│  │  Hijo B1 (z-index: 1)    │ ← B1 GANA   │
│  │                          │   sobre A1   │
│  └──────────────────────────┘   porque B > A│
│                                            │
└────────────────────────────────────────────┘
```

**Analogia:** En TextilPro, cada nave (Corte, Costura, Empaque) tiene su propio ranking de prioridad interno. Pero entre naves, la que tiene prioridad general mas alta gana, sin importar el ranking interno.

### ¿Que crea un stacking context?

| Propiedad | Condicion |
|-----------|-----------|
| `position` + `z-index` | `position` diferente de `static` Y `z-index` diferente de `auto` |
| `opacity` | Valor menor a 1 |
| `transform` | Cualquier valor (excepto `none`) |
| `filter` | Cualquier valor (excepto `none`) |
| `will-change` | Si referencia propiedades que crean contexto |
| `isolation: isolate` | Fuerza un contexto aislado |
| `mix-blend-mode` | Cualquier valor (excepto `normal`) |

### La regla de oro

**El z-index de un hijo NUNCA puede superar el z-index de su contexto padre.**

```css
/* ESTO NO FUNCIONA como esperas */
.padre {
  position: relative;
  z-index: 1;
}

.hijo {
  position: relative;
  z-index: 9999;  /* No importa, sigue dentro del contexto del padre (z: 1) */
}
```

```
.padre (z-index: 1)
  └── .hijo (z-index: 9999) ← Atrapado en el contexto de .padre
                                No puede superar a elementos
                                fuera del contexto de .padre
                                con z-index >= 2
```

---

## Tabla comparativa: valores comunes

| Valor | Comportamiento | Caso de uso |
|-------|----------------|-------------|
| `auto` | Orden natural del HTML | Por defecto, no crea stacking context |
| `0` | Orden natural pero crea stacking context | Para aislar elementos sin cambiar su orden |
| `1-10` | Valores bajos, para superposiciones sutiles | Dropdowns, badges |
| `10-100` | Valores medios | Tooltips, headers sticky |
| `100-1000` | Valores altos | Modales, overlays |
| `9999` | "Siempre visible" | Evitar; mejor usar variables CSS |
| Negativo | Detras del fondo del padre | Efectos decorativos |

---

## Reglas importantes

| # | Regla |
|---|-------|
| 1 | `z-index` solo funciona en elementos posicionados (`position` != `static`) |
| 2 | Un hijo nunca puede superar el z-index de su stacking context padre |
| 3 | Dentro del mismo contexto, z-index mas alto = mas adelante |
| 4 | Si dos elementos tienen el mismo z-index, el ultimo en el HTML va adelante |
| 5 | `opacity < 1`, `transform`, `filter` crean stacking contexts invisibles |
| 6 | Usa valores pequenos y organicalos con variables CSS |
| 7 | El `z-index: -1` puede esconder un elemento detras de su propio fondo |

---

## Errores comunes

| Error | Por que pasa | Solucion |
|-------|-------------|----------|
| z-index no funciona | El elemento tiene `position: static` | Agregar `position: relative` (o absolute/fixed) |
| z-index: 9999 no supera a otro elemento | Estan en stacking contexts diferentes | Verificar los z-index de los ancestros |
| Elemento desaparece | z-index negativo lo pone detras del fondo | Usar z-index: 0 o positivo |
| Tooltip queda detras de otro elemento | El tooltip esta en un stacking context de nivel bajo | Mover el tooltip a un ancestro comun o aumentar el z-index del contexto |
| `opacity: 0.99` rompe z-index | opacity < 1 crea stacking context invisible | Tener cuidado con opacity en ancestros |
| Guerra de z-index (999, 9999, 99999) | No hay estrategia de capas | Usar variables CSS: `--z-dropdown: 100; --z-modal: 200;` |

---

## Buena practica: Sistema de capas con variables

```css
:root {
  --z-base: 0;
  --z-dropdown: 100;
  --z-sticky: 200;
  --z-overlay: 300;
  --z-modal: 400;
  --z-tooltip: 500;
  --z-max: 9999;
}

.dropdown { z-index: var(--z-dropdown); }
.navbar-sticky { z-index: var(--z-sticky); }
.overlay { z-index: var(--z-overlay); }
.modal { z-index: var(--z-modal); }
.tooltip { z-index: var(--z-tooltip); }
```

---

## Ejercicios practicos

### Ejercicio 1: Basico de z-index
Crea tres cuadrados superpuestos con `position: absolute` y asignales z-index 1, 2 y 3. Verifica que el de z-index 3 queda encima.

### Ejercicio 2: El problema del stacking context
Crea dos contenedores, cada uno con `position: relative`. El primero tiene `z-index: 1` y un hijo con `z-index: 999`. El segundo tiene `z-index: 2` y un hijo con `z-index: 1`. Verifica que el hijo del segundo contenedor queda encima, aunque tenga menor z-index.

### Ejercicio 3: Modal con overlay
Crea un modal que aparezca sobre un overlay oscuro. El overlay debe tener `z-index` menor que el modal pero mayor que el contenido de la pagina.

### Ejercicio 4: Dropdown de navegacion
Crea un menu de navegacion donde al pasar el mouse sobre un item, aparezca un dropdown. El dropdown debe aparecer sobre cualquier contenido debajo.

### Ejercicio 5: Tarjetas apiladas
Crea un efecto de "mazo de cartas" donde varias tarjetas aparecen ligeramente superpuestas. Usa z-index para que la carta de arriba este completamente visible y las de abajo se vean parcialmente.

---

## Conexiones

- Tema anterior: [CSS Grid](../02-css-grid/)
- Relacion con: [Posicionamiento CSS](../../03-maquetacion-clasica/01-posicionamiento/)
