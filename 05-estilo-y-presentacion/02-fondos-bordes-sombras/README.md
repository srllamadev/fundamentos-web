# 02 - Fondos, Bordes y Sombras

## ¿Que aprendemos aqui?

Aprenderas a darle **aspecto visual** a los contenedores de tu pagina: colores de fondo, degradados, bordes de diferentes estilos, bordes redondeados, sombras de caja y sombras de texto. Esto es lo que hace que una pagina se vea profesional.

---

## Analogia: El marco de una fotografia

```
FOTO SIN MARCO:                  FOTO CON MARCO Y ESTILO:
                                 
┌──────────────┐                ┏━━━━━━━━━━━━━━━━━━━━━┓
│              │                ┃  ┌──────────────┐   ┃
│  Foto        │                ┃  │              │   ┃
│  pegada      │                ┃  │  Foto        │   ┃
│  en la pared │                ┃  │  con marco   │   ┃
│              │                ┃  │  elegante    │   ┃
│              │                ┃  │              │   ┃
└──────────────┘                ┃  └──────────────┘   ┃
                                ┗━━━━━━━━━━━━━━━━━━━━━┛
Sin personalidad                 Con personalidad,
Aburrido                        profundidad y estilo
```

Los **fondos, bordes y sombras** son el marco, el passepartout y la luz que hacen que tu contenido destaque.

---

## Las propiedades que veremos

| Propiedad | ¿Que hace? | Analogia |
|-----------|------------|----------|
| `background-color` | Color de fondo | El color de la pared |
| `background-image` | Imagen o degradado de fondo | Un cuadro o poster |
| `border` | Borde del elemento | El marco de la foto |
| `border-radius` | Esquinas redondeadas | Esquinas suaves vs cortantes |
| `box-shadow` | Sombra de la caja | La sombra que proyecta el marco |
| `text-shadow` | Sombra del texto | Letras con relieve |

---

## 1. background-color: Color de fondo

### Formas de definir colores

| Formato | Ejemplo | ¿Cuando usarlo? |
|---------|---------|-----------------|
| Hexadecimal | `#1a5276` | El mas comun en desarrollo |
| RGB | `rgb(26, 134, 193)` | Cuando necesitas transparencia |
| RGBA | `rgba(26, 134, 193, 0.5)` | Con transparencia (alpha) |
| HSL | `hsl(204, 70%, 50%)` | Mas intuitivo para humanos |
| Nombre | `red`, `blue` | Solo colores basicos |

### Ejemplo con la paleta del curso

```css
.bg-primary   { background-color: #1a5276; }
.bg-secondary { background-color: #2e86c1; }
.bg-accent    { background-color: #f39c12; }
.bg-light     { background-color: #f5f5f5; }
```

---

## 2. Degradados (gradients)

### linear-gradient: Degradado lineal

```css
/* De arriba a abajo */
background: linear-gradient(to bottom, #1a5276, #2e86c1);

/* De izquierda a derecha */
background: linear-gradient(to right, #1a5276, #2e86c1);

/* En diagonal (135 grados) */
background: linear-gradient(135deg, #1a5276, #2e86c1);

/* Con 3 colores */
background: linear-gradient(to right, #1a5276, #2e86c1, #f39c12);
```

### radial-gradient: Degradado radial

```css
/* Desde el centro hacia afuera */
background: radial-gradient(circle, #2e86c1, #1a5276);

/* Desde una esquina */
background: radial-gradient(circle at top left, #2e86c1, #1a5276);
```

### Visualizacion

```
LINEAR (135deg):              RADIAL (circle):
┌─────────────────┐          ┌─────────────────┐
│ \               │          │                 │
│   \             │          │    .-------.     │
│     \           │          │  /           \   │
│       \         │          │ |             |  │
│         \       │          │  \           /   │
│           \     │          │    '-------'     │
│             \   │          │                 │
│               \ │          │                 │
└─────────────────┘          └─────────────────┘
Primario arriba-izq           Secundario al centro
Secundario abajo-der          Primario en bordes
```

---

## 3. border: Bordes

### La notacion abreviada

```css
/* Formato: grosor estilo color */
border: 3px solid #1a5276;
```

### Estilos de borde disponibles

| Estilo | Visual | Uso comun |
|--------|--------|-----------|
| `solid` | Linea continua | El mas usado, bordes estandar |
| `dashed` | Linea discontinua | Secciones, separadores |
| `dotted` | Puntos | Elementos decorativos |
| `double` | Linea doble | Bordes elegantes |
| `none` | Sin borde | Resetear bordes |

### Bordes individuales

Puedes controlar cada lado por separado:

```css
.card {
    border-top: 3px solid #1a5276;    /* Solo arriba */
    border-bottom: 1px dashed #ccc;    /* Solo abajo */
    border-left: 5px solid #f39c12;    /* Solo izquierda (acento) */
    border-right: none;                 /* Sin borde derecho */
}
```

### El truco del borde izquierdo

```
┌────────────────────────────────────┐
│                                    │
│  Este es un texto importante       │
│  con borde izquierdo de acento     │
│                                    │
└────────────────────────────────────┘
   ▲
   │
   border-left: 4px solid #f39c12
   
Muy usado para: alertas, citas, notas especiales
```

---

## 4. border-radius: Bordes redondeados

### Valores comunes

```css
/* Cuadrado (default) */
border-radius: 0;

/* Ligeramente redondeado */
border-radius: 8px;

/* Muy redondeado */
border-radius: 20px;

/* Circular (si el elemento es cuadrado) */
border-radius: 50%;

/* Redondeo diferente en cada esquina */
border-radius: 10px 20px 30px 40px;
/* arriba-izq arriba-der abajo-der abajo-izq */
```

### Visualizacion

```
border-radius: 0        border-radius: 8px      border-radius: 50%
┌──────────────┐        ╭──────────────╮           .─────────.
│              │        │              │         /             \
│   Cuadrado   │        │  Redondeado  │        │   Circulo     │
│              │        │              │         \             /
└──────────────┘        ╰──────────────╯           '─────────'
```

### Regla de oro

| Elemento | border-radius | Por que |
|----------|---------------|---------|
| Tarjetas | `8px - 15px` | Aspecto moderno sin exagerar |
| Botones | `5px - 25px` | Depende del estilo |
| Avatares | `50%` | Circulos perfectos |
| Inputs | `4px - 8px` | Sutil y funcional |
| Modales | `12px - 20px` | Elegante |

---

## 5. box-shadow: Sombras de caja

### Sintaxis

```css
box-shadow: X Y BLUR SPREAD COLOR;
```

| Valor | Significado | Ejemplo |
|-------|-------------|---------|
| `X` | Desplazamiento horizontal | `0` (centrado), `5px` (derecha) |
| `Y` | Desplazamiento vertical | `0` (centrado), `5px` (abajo) |
| `BLUR` | Desenfoque de la sombra | `0` (nitido), `15px` (muy borrosa) |
| `SPREAD` | Tamano de la sombra | `0` (default), `5px` (mas grande) |
| `COLOR` | Color de la sombra | `rgba(0,0,0,0.1)` (negro transparente) |

### Niveles de sombra

```css
/* Sin sombra */
box-shadow: none;

/* Sombra ligera (tarjetas elevadas) */
box-shadow: 0 2px 8px rgba(0,0,0,0.1);

/* Sombra media (modales) */
box-shadow: 0 4px 15px rgba(0,0,0,0.15);

/* Sombra fuerte (dropdowns, popups) */
box-shadow: 0 8px 25px rgba(0,0,0,0.25);

/* Sombra con color de marca */
box-shadow: 0 4px 15px rgba(46, 134, 193, 0.4);

/* Sombra interna (inputs hundidos) */
box-shadow: inset 0 2px 8px rgba(0,0,0,0.15);
```

### Visualizacion de elevacion

```
Sin sombra (plano):
┌──────────────┐
│   Contenido  │
└──────────────┘

Sombra ligera (levemente elevado):
   ┌──────────────┐
   │   Contenido  │
~~~└──────────────┘~~~

Sombra media (mas elevado):
      ┌──────────────┐
      │   Contenido  │
~~~~~~~~└──────────────┘~~~~~~~~

Sombra fuerte (muy elevado):
         ┌──────────────┐
         │   Contenido  │
~~~~~~~~~~~~└──────────────┘~~~~~~~~~~~~
```

---

## 6. text-shadow: Sombras de texto

### Sintaxis

```css
text-shadow: X Y BLUR COLOR;
```

### Efectos comunes

```css
/* Sin sombra */
text-shadow: none;

/* Sombra sutil (legibilidad sobre imagenes) */
text-shadow: 1px 1px 2px rgba(0,0,0,0.3);

/* Sombra fuerte */
text-shadow: 2px 2px 4px rgba(0,0,0,0.5);

/* Efecto glow/brillo */
text-shadow: 0 0 10px rgba(243, 156, 18, 0.8);

/* Efecto relieve */
text-shadow: 1px 1px 0 rgba(255,255,255,0.5);
```

### ¿Cuando usar text-shadow?

| Caso | Sombra recomendada |
|------|-------------------|
| Texto sobre imagen | `1px 1px 2px rgba(0,0,0,0.5)` |
| Texto en header oscuro | `1px 1px 3px rgba(0,0,0,0.3)` |
| Efecto glow (decorativo) | `0 0 10px rgba(color, 0.8)` |
| Texto en fondo claro | Ninguna o muy sutil |

---

## Ejemplo completo: Tarjeta de perfil

```css
/* Contenedor principal */
.profile-card {
    background: white;
    border-radius: 15px;
    box-shadow: 0 8px 25px rgba(0,0,0,0.15);
    overflow: hidden;
}

/* Header con degradado */
.profile-header {
    background: linear-gradient(135deg, #1a5276, #2e86c1);
    padding: 40px;
    text-align: center;
    color: white;
}

/* Cuerpo con borde izquierdo de acento */
.profile-body {
    padding: 30px;
    border-left: 4px solid #f39c12;
}

/* Estadisticas con sombra ligera */
.stat {
    background: #f5f5f5;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
```

---

## Tabla de errores comunes

| Error | ¿Por que esta mal? | Solucion |
|-------|-------------------|----------|
| Demasiadas sombras | Se ve sucio, sobrecargado | Maximo 1 sombra por elemento |
| Bordes muy gruesos | Se ve antiguo, pesado | Maximo 3-5px para bordes decorativos |
| border-radius: 50% en rectangulo | No es circulo, es ovalo feo | Solo usa 50% en cuadrados |
| Sombras muy oscuras | Se ve sucio, amateur | Usa opacidad baja: rgba(0,0,0,0.1) |
| Sin contraste en texto | No se puede leer | text-shadow en texto sobre fondos oscuros |
| Degradados con mas de 3 colores | Se ve arcoiris, caotico | Maximo 2-3 colores armonicos |

---

## Reglas de oro

| # | Regla | Analogia |
|---|-------|----------|
| 1 | **Menos es mas** | Como la sal en la comida: poco es bueno, mucho arruina |
| 2 | **Sombras sutiles** | Si se nota mucho la sombra, es muy oscura |
| 3 | **Bordes con proposito** | No pongas bordes en todo, solo donde destaque |
| 4 | **Consistencia en radios** | Usa el mismo border-radius en toda la pagina |
| 5 | **Degradados armonicos** | Los colores deben estar cerca en el circulo cromatico |
| 6 | **Contraste siempre** | Texto legible sobre cualquier fondo |

---

## Ejercicios practicos

### Ejercicio 1: Paleta de colores
Crea 5 divs con cada uno de los colores de la paleta del curso (primary, secondary, accent, background, text).

### Ejercicio 2: Degradado personalizado
Crea un header con un degradado linear de 135 grados usando primary y secondary. Agrega text-shadow al texto para mejorar legibilidad.

### Ejercicio 3: Estilos de borde
Crea 4 cajas, cada una con un estilo de borde diferente: solid, dashed, dotted, double. Usa los colores de la paleta.

### Ejercicio 4: Bordes redondeados
Crea una "tarjeta de avatar" con border-radius: 50% para la imagen y border-radius: 15px para la tarjeta.

### Ejercicio 5: Niveles de elevacion
Crea 3 tarjetas con diferentes niveles de box-shadow (light, medium, heavy) para mostrar diferentes "elevaciones".

### Ejercicio 6: Tarjeta completa
Combina todo lo aprendido para crear una tarjeta de perfil profesional con:
- Header con degradado y text-shadow
- Cuerpo con borde izquierdo de acento
- Seccion de estadisticas con sombras ligeras
- Todo con bordes redondeados consistentes

---

## Siguiente paso

Ahora que dominas fondos, bordes y sombras, pasa a **[03-efectos-visuales](../03-efectos-visuales/)** para aprender sobre opacidad, filtros y transiciones.
