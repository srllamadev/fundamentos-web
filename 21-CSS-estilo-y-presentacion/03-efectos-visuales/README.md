# 03 - Efectos Visuales

## ¿Que aprendemos aqui?

Aprenderas a crear efectos que hacen tu pagina **interactiva y dinamica**: controlar la transparencia de elementos, aplicar filtros tipo Instagram, y anadir transiciones suaves cuando el usuario interactua con tu pagina.

---

## Analogia: Efectos especiales de una pelicula

```
PAGINA SIN EFECTOS:              PAGINA CON EFECTOS:
                                 
┌──────────────────┐            ┌──────────────────┐
│                  │            │                  │
│  Elementos       │            │  ✨ Elementos    │
│  estaticos       │            │     interactivos │
│  aburridos       │            │     con vida     │
│                  │            │                  │
│  Como una foto   │            │  Como una pelicula│
│                  │            │                  │
└──────────────────┘            └──────────────────┘
```

Los efectos visuales son como los "efectos especiales" que hacen que la experiencia sea mas engaging.

---

## Las 4 categorias de efectos

| Categoria | Propiedad | ¿Que hace? | Analogia |
|-----------|-----------|------------|----------|
| **Opacidad** | `opacity` | Transparencia del elemento | Vidrio esmerilado |
| **Bordes avanzados** | `border-radius` | Formas redondeadas complejas | Recortar papel con tijeras |
| **Filtros** | `filter` | Efectos tipo Instagram | Lentes de camara |
| **Transiciones** | `transition` | Animaciones suaves | Movimiento fluido |

---

## 1. Opacity: Transparencia

### Valores

| Valor | Efecto | Uso comun |
|-------|--------|-----------|
| `1` | Totalmente visible | Default, todo visible |
| `0.75` | 75% visible | Hover states |
| `0.5` | 50% visible | Elementos deshabilitados |
| `0.25` | 25% visible | Marcas de agua |
| `0` | Invisible | Oculto pero ocupa espacio |

### Ejemplo practico

```css
/* Imagen normal */
.producto-img {
    opacity: 1;
}

/* Imagen al pasar el mouse */
.producto-img:hover {
    opacity: 0.8;
}

/* Boton deshabilitado */
.btn-disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

/* Marca de agua */
.watermark {
    opacity: 0.1;
}
```

### Opacity vs RGBA

```css
/* Opacity: afecta TODO el elemento */
.box {
    background-color: red;
    opacity: 0.5;
}

/* RGBA: solo afecta el color de fondo */
.box {
    background-color: rgba(255, 0, 0, 0.5);
    /* El texto sigue siendo 100% visible */
}
```

### Visualizacion

```
opacity: 1 (todo visible)        rgba(0,0,0,0.5) (solo fondo)
┌──────────────────┐            ┌──────────────────┐
│ ████████████████ │            │ ░░░░░░░░░░░░░░░░ │
│ ████████████████ │            │ ████████████████ │
│ ████████████████ │            │ Texto normal     │
│ Todo palido      │            │ Fondo transparente│
└──────────────────┘            └──────────────────┘
```

---

## 2. Border-radius avanzado

### Formas creativas

```css
/* Pill/ Pastilla */
.pill {
    border-radius: 50px;
}

/* Hoja (alternado) */
.leaf {
    border-radius: 0 50px 0 50px;
}

/* Asimetrico */
.asymmetric {
    border-radius: 20px 5px 20px 5px;
}

/* Circulo perfecto (en cuadrado) */
.circle {
    border-radius: 50%;
}

/* Esquinas diferentes */
.custom {
    border-radius: 10px 30px 5px 40px;
    /* arriba-izq arriba-der abajo-der abajo-izq */
}
```

### Visualizacion de formas

```
pill (50px):         leaf (0 50 0 50):     asymmetric (20 5 20 5):
╭────────────────╮   ╭────────────────╮    ╭────────────────╮
│                │   │                │    │                │
│                │   │                │    │                │
╰────────────────╯   ╰────────────────╯    ╰────────────────╯

circle (50%):        custom (10 30 5 40):
    .───────.        ╭────────────────╮
  /           \      │                │
 |             |     │                │
  \           /      ╰────────────────╯
    '───────'
```

---

## 3. Filter: Filtros CSS

### Los 9 filtros principales

| Filtro | ¿Que hace? | Ejemplo |
|--------|------------|---------|
| `blur()` | Desenfoque | `blur(5px)` |
| `brightness()` | Brillo | `brightness(1.5)` (mas brillante) |
| `contrast()` | Contraste | `contrast(2)` (mas contraste) |
| `grayscale()` | Escala de grises | `grayscale(100%)` |
| `sepia()` | Tono sepia | `sepia(100%)` |
| `hue-rotate()` | Rotar colores | `hue-rotate(90deg)` |
| `saturate()` | Saturacion | `saturate(2)` (doble saturacion) |
| `invert()` | Invertir colores | `invert(100%)` |
| `drop-shadow()` | Sombra (mejor que box-shadow) | `drop-shadow(5px 5px 10px rgba(0,0,0,0.5))` |

### Efectos tipo Instagram

```css
/* Filtro vintage */
.vintage {
    filter: sepia(50%) contrast(1.2) brightness(0.9);
}

/* Filtro dramatico */
.dramatic {
    filter: contrast(1.5) brightness(0.8) saturate(1.3);
}

/* Filtro frio */
.cold {
    filter: hue-rotate(180deg) saturate(0.8);
}

/* Filtro calido */
.warm {
    filter: sepia(30%) saturate(1.4) brightness(1.1);
}

/* Efecto desenfocado (loading) */
.loading {
    filter: blur(5px);
}
```

### Combinar filtros

```css
/* Puedes combinar varios filtros */
.card:hover img {
    filter: brightness(1.2) blur(2px);
}
```

### Ejemplo con la paleta del curso

```css
/* Efecto hover para galeria de productos */
.product-card img {
    transition: filter 0.3s ease;
}

.product-card:hover img {
    filter: brightness(1.1) saturate(1.2);
}
```

---

## 4. Transition: Animaciones suaves

### Sintaxis

```css
transition: PROPERTY DURATION TIMING-FUNCTION DELAY;
```

| Valor | Significado | Ejemplo |
|-------|-------------|---------|
| `PROPERTY` | ¿Que animar? | `all`, `transform`, `opacity` |
| `DURATION` | ¿Cuanto dura? | `0.3s`, `500ms` |
| `TIMING-FUNCTION` | ¿Como se mueve? | `ease`, `linear`, `ease-in-out` |
| `DELAY` | ¿Cuanto espera? | `0s` (default) |

### Timing functions

| Funcion | Efecto | ¿Cuando usarla? |
|---------|--------|-----------------|
| `ease` | Empieza rapido, termina lento | Default, la mayoria de casos |
| `linear` | Velocidad constante | Animaciones mecanicas |
| `ease-in` | Empieza lento, acelera | Elementos saliendo |
| `ease-in-out` | Lento al inicio y final | Movimientos naturales |
| `cubic-bezier()` | Curva personalizada | Efectos especiales |

### Ejemplo basico

```css
.button {
    background: #1a5276;
    transition: all 0.3s ease;
}

.button:hover {
    background: #2e86c1;
    transform: translateY(-3px);
}
```

### Propiedades que puedes animar

| Propiedad | Efecto | Ejemplo |
|-----------|--------|---------|
| `transform` | Mover, rotar, escalar | `translateY(-5px)`, `scale(1.1)` |
| `opacity` | Transparencia | `opacity: 0.5` |
| `background-color` | Cambiar color | `background: red` |
| `color` | Cambiar color de texto | `color: blue` |
| `box-shadow` | Cambiar sombra | `box-shadow: 0 5px 15px rgba(0,0,0,0.3)` |
| `border-color` | Cambiar color de borde | `border-color: blue` |
| `width/height` | Cambiar tamano | `width: 200px` |

### Transform: La navaja suiza

```css
/* Mover */
.element {
    transform: translateX(50px);  /* Mover derecha */
    transform: translateY(-10px); /* Mover arriba */
    transform: translate(50px, -10px); /* Ambos */
}

/* Escalar */
.element {
    transform: scale(1.2);  /* 20% mas grande */
    transform: scale(0.8);  /* 20% mas pequeno */
}

/* Rotar */
.element {
    transform: rotate(45deg);   /* Rotar 45 grados */
    transform: rotate(-10deg);  /* Rotar -10 grados */
}

/* Combinar */
.element:hover {
    transform: translateY(-5px) scale(1.05);
}
```

### Ejemplo completo: Boton con transicion

```css
.btn {
    background: #1a5276;
    color: white;
    padding: 12px 25px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.btn:hover {
    background: #2e86c1;
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(26, 82, 118, 0.4);
}

.btn:active {
    transform: translateY(0);
    box-shadow: 0 2px 8px rgba(26, 82, 118, 0.4);
}
```

---

## Ejemplo integrador: Tarjeta de perfil con efectos

```css
/* Tarjeta con elevacion al hover */
.profile-card {
    background: white;
    border-radius: 15px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    transition: all 0.4s ease;
    overflow: hidden;
}

.profile-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 35px rgba(0,0,0,0.2);
}

/* Imagen con filtro */
.profile-card .avatar {
    width: 100%;
    height: 200px;
    object-fit: cover;
    transition: filter 0.3s ease;
}

.profile-card:hover .avatar {
    filter: brightness(1.1) saturate(1.2);
}

/* Boton con transicion */
.profile-card .btn {
    display: inline-block;
    padding: 12px 25px;
    background: #f39c12;
    color: #333;
    border-radius: 8px;
    text-decoration: none;
    transition: all 0.3s ease;
}

.profile-card .btn:hover {
    background: #e67e22;
    transform: translateX(5px);
}
```

---

## Tabla de errores comunes

| Error | ¿Por que esta mal? | Solucion |
|-------|-------------------|----------|
| Transiciones muy lentas (2s+) | Se siente laggy, impaciente | Maximo 0.5s para interacciones |
| Animar `width` o `height` | Mal rendimiento, causa reflow | Usa `transform: scale()` en su lugar |
| opacity: 0 para ocultar | Sigue ocupando espacio | Usa `display: none` o `visibility: hidden` |
| Demasiados filtros juntos | Se ve sobrecargado | Maximo 2-3 filtros combinados |
| Sin transition | Los cambios son bruscos | Siempre pon transition en hover effects |
| Cubic-bezier muy extremo | Se ve ridiculo, poco profesional | Usa valores sutiles |

---

## Reglas de oro

| # | Regla | Analogia |
|---|-------|----------|
| 1 | **Transiciones cortas (0.2s - 0.5s)** | Como un parpadeo, no como un bostezo |
| 2 | **Usa transform en vez de width/height** | Es como mover una caja, no estirarla |
| 3 | **Filtros sutiles** | Como el maquillaje: menos es mas |
| 4 | **Animaciones con proposito** | No animes por animar, debe tener razon |
| 5 | **Consistencia en timing** | Usa el mismo duration en toda la pagina |
| 6 | **Performance primero** | No animes propiedades costosas (width, height, top, left) |

---