# 01 - Modelo de Caja (Box Model)

## ¿Que aprendemos aqui?

Esta es **la leccion mas importante de CSS**. Aprenderas que TODO elemento HTML es una caja rectangular con 4 capas: **contenido**, **padding**, **border** y **margin**. Entender esto es la base de TODO diseno web.

---

## El Modelo de Caja

```css
.caja {
    width: 300px;         /* Ancho del contenido */
    padding: 20px;        /* Espacio interior */
    border: 5px solid #333; /* Borde */
    margin: 30px;         /* Espacio exterior */
}
```

```
┌─────────────────────────────────────────────┐
│                 MARGIN                       │
│  ┌───────────────────────────────────────┐  │
│  │              BORDER                   │  │
│  │  ┌─────────────────────────────────┐  │  │
│  │  │           PADDING               │  │  │
│  │  │  ┌───────────────────────────┐  │  │  │
│  │  │  │       CONTENIDO           │  │  │  │
│  │  │  │                           │  │  │  │
│  │  │  │  width x height           │  │  │  │
│  │  │  │                           │  │  │  │
│  │  │  └───────────────────────────┘  │  │  │
│  │  │                                 │  │  │
│  │  └─────────────────────────────────┘  │  │
│  │                                       │  │
│  └───────────────────────────────────────┘  │
│                                             │
└─────────────────────────────────────────────┘
```

---

## Las 4 capas explicadas

### 1. Contenido (Content)

```css
width: 300px;    /* Ancho del contenido */
height: 200px;   /* Alto del contenido */
```

- Es donde va el **texto, imagenes, etc.**
- `width` y `height` definen su tamano.
- Es la capa **mas interna**.

### 2. Padding (Relleno interior)

```css
padding: 20px;              /* Mismo en los 4 lados */
padding: 20px 30px;         /* Arriba/abajo 20px, izquierda/derecha 30px */
padding: 10px 20px 30px 40px; /* Arriba, derecha, abajo, izquierda */
padding-top: 10px;
padding-right: 20px;
padding-bottom: 30px;
padding-left: 40px;
```

- Espacio **entre el contenido y el borde**.
- Es **transparente** (se ve el fondo del elemento).
- **Aumenta** el tamano total de la caja.

### Analogia

```
padding = El carton de proteccion dentro de una caja de envios

┌─────────────────────────────┐
│  Cartón (padding)           │
│  ┌─────────────────────┐    │
│  │  Producto (contenido)│    │
│  └─────────────────────┘    │
└─────────────────────────────┘
```

### 3. Border (Borde)

```css
border: 5px solid #333;        /* Ancho, estilo, color */
border-width: 5px;
border-style: solid;           /* solid, dashed, dotted, double, none */
border-color: #333;
border-top: 3px dashed red;
border-radius: 10px;           /* Esquinas redondeadas */
```

- Es la **linea visible** alrededor del padding.
- Puede tener diferentes estilos: solido, punteado, discontinuo.
- **Aumenta** el tamano total de la caja.

### 4. Margin (Margen exterior)

```css
margin: 30px;                 /* Mismo en los 4 lados */
margin: 20px auto;            /* Arriba/abajo 20px, centrado horizontal */
margin-top: 30px;
margin-right: 20px;
margin-bottom: 30px;
margin-left: 20px;
```

- Espacio **entre la caja y las demas cajas**.
- Es **transparente** (se ve el fondo del padre).
- **No aumenta** el tamano de la caja, sino la separacion.
- `margin: auto` centra horizontalmente un elemento con ancho definido.

### Analogia

```
margin = El espacio entre tu caja y las cajas vecinas

        │← margin →│
┌───────┐          ┌───────┐
│ Caja  │          │ Caja  │
│  A    │          │  B    │
└───────┘          └───────┘
```

---

## El problema del width

### Sin `box-sizing: border-box` (comportamiento por defecto)

```css
.caja {
    width: 300px;
    padding: 30px;
    border: 5px solid #333;
}
```

**Ancho real = 300 + 30*2 + 5*2 = 370px**

```
┌─────────────────────────────────────────┐
│ 5px border                              │
│ ┌─────────────────────────────────────┐ │
│ │ 30px padding                        │ │
│ │ ┌─────────────────────────────────┐ │ │
│ │ │         300px contenido         │ │ │
│ │ └─────────────────────────────────┘ │ │
│ │ 30px padding                        │ │
│ └─────────────────────────────────────┘ │
│ 5px border                              │
└─────────────────────────────────────────┘
         = 370px de ancho total
```

### Con `box-sizing: border-box`

```css
.caja {
    width: 300px;
    padding: 30px;
    border: 5px solid #333;
    box-sizing: border-box;
}
```

**Ancho real = 300px (el width YA incluye padding y border)**

```
┌─────────────────────────────────┐
│ 5px border                      │
│ ┌─────────────────────────────┐ │
│ │ 30px padding                │ │
│ │ ┌─────────────────────────┐ │ │
│ │ │   230px contenido       │ │ │  = 300px total
│ │ └─────────────────────────┘ │ │
│ │ 30px padding                │ │
│ └─────────────────────────────┘ │
│ 5px border                      │
└─────────────────────────────────┘
       = 300px de ancho total
```

---

## La solucion universal

```css
*, *::before, *::after {
    box-sizing: border-box;
}
```

Esta regla aplica `border-box` a **TODOS** los elementos. Es **la primera linea de CSS** en cualquier proyecto profesional moderno.

### ¿Por que?

- **Predecibilidad**: si dices `width: 300px`, la caja mide 300px. Punto.
- **Flexbox y Grid** funcionan mejor con `border-box`.
- **Es el estandar**: todos los frameworks (Bootstrap, Tailwind) lo usan.

---

## Propiedades abreviadas (shorthand)

### Padding y Margin

```css
/* 1 valor: todos los lados iguales */
padding: 20px;
/* = padding-top: 20px; padding-right: 20px; padding-bottom: 20px; padding-left: 20px; */

/* 2 valores: vertical / horizontal */
padding: 20px 30px;
/* = padding-top: 20px; padding-right: 30px; padding-bottom: 20px; padding-left: 30px; */

/* 3 valores: arriba / horizontal / abajo */
padding: 10px 20px 30px;
/* = padding-top: 10px; padding-right: 20px; padding-bottom: 30px; padding-left: 20px; */

/* 4 valores: arriba, derecha, abajo, izquierda (sentido horario) */
padding: 10px 20px 30px 40px;
/* = padding-top: 10px; padding-right: 20px; padding-bottom: 30px; padding-left: 40px; */
```

### Border

```css
/* Forma larga */
border-width: 5px;
border-style: solid;
border-color: #333;

/* Forma abreviada */
border: 5px solid #333;
```

---

## Margin: auto para centrar

```css
.contenedor {
    width: 80%;
    margin: 0 auto;   /* 0 arriba/abajo, auto izquierda/derecha */
}
```

`margin: auto` distribuye el espacio sobrante equitativamente a izquierda y derecha, **centrando** el elemento.

### Condiciones

- El elemento debe tener un `width` definido (no `auto` o `100%`).
- Solo centra **horizontalmente**, no verticalmente.

---

## Colapso de margenes

Cuando dos margenes verticales se tocan, **no se suman**: se colapsan al mayor.

```css
.arriba {
    margin-bottom: 30px;
}
.abajo {
    margin-top: 20px;
}
```

**Espacio real = 30px** (no 50px). Se usa el mayor.

### Excepciones

- Margenes **horizontales** no colapsan.
- Margenes de elementos con `padding` o `border` entre ellos no colapsan.
- Elementos con `overflow: hidden` en el padre no colapsan con sus hijos.

---

## Reglas importantes

| Regla | Detalle |
|-------|---------|
| `box-sizing: border-box` siempre | Es el estandar moderno |
| Padding es transparente | Se ve el fondo del elemento |
| Margin es transparente | Se ve el fondo del padre |
| Margin vertical colapsa | Dos margenes adyacentes usan el mayor |
| `margin: auto` centra horizontalmente | Solo si el elemento tiene width definido |
| Padding acepta 1-4 valores | 1: todos, 2: vert/horiz, 3: arr/horiz/aba, 4: TRBL |

---

## Errores comunes

### Error 1: Olvidar box-sizing

```css
/* PROBLEMA: el width real es mayor al esperado */
.sidebar {
    width: 300px;
    padding: 20px;
    border: 1px solid #ccc;
    /* Ancho real: 342px. Rompe el layout! */
}

/* SOLUCION: usar border-box */
.sidebar {
    width: 300px;
    padding: 20px;
    border: 1px solid #ccc;
    box-sizing: border-box;
    /* Ancho real: 300px. Perfecto! */
}
```

### Error 2: Usar height fijo

```css
/* PROBLEMA: si el contenido es mas grande, se desborda */
.tarjeta {
    height: 100px;
}

/* SOLUCION: dejar que el contenido defina la altura */
.tarjeta {
    min-height: 100px;  /* Minimo 100px, pero puede crecer */
}
```

### Error 3: Confundir padding con margin

```css
/* Quiero espacio DENTRO de la caja */
.caja { padding: 20px; }   /* Correcto */
.caja { margin: 20px; }    /* Incorrecto: espacio FUERA */

/* Quiero espacio ENTRE cajas */
.caja { margin: 20px; }    /* Correcto */
.caja { padding: 20px; }   /* Incorrecto: espacio DENTRO */
```

---

## Ejercicio practico

1. Abre el `index.html` en tu navegador.
2. Abre las DevTools (F12) e inspecciona una caja. Veras el modelo de caja.
3. Cambia el padding de `.ejemplo-caja` y observa como crece.
4. Cambia el margin y observa como se mueve.
5. Quita `box-sizing: border-box` del ejemplo y mide el ancho real.
6. Crea una tarjeta con padding, border y margin diferentes.
7. Usa `margin: 0 auto` para centrar un contenedor.
8. Experimenta con el colapso de margenes: crea dos divs con margin-top y margin-bottom.
