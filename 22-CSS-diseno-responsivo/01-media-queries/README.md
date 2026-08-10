# 01 - Media Queries

## ¿Que aprendemos aqui?

Aprenderas la herramienta **mas importante** del diseno responsivo: las Media Queries. Son la forma en que CSS "detecta" el tamano de la pantalla y aplica estilos diferentes segun el dispositivo.

---

## Analogia: El filtro de agua

```
MEDIA QUERIES = FILTRO QUE DETECTA EL TAMANO

                ┌─────────────────────────┐
                │                         │
Tu CSS ────────►│  ¿La pantalla es        │
                │  mayor a 768px?         │
                │                         │
                └───────┬─────────────────┘
                        │
                ┌───────┴───────┐
                │               │
               SI              NO
                │               │
                ▼               ▼
        ┌──────────────┐  ┌──────────────┐
        │ Aplica estilos│  │ Usa estilos  │
        │ para tablet   │  │ base (movil) │
        └──────────────┘  └──────────────┘
```

Las media queries son como un "if" de CSS: "SI la pantalla mide X, ENTONCES aplica estos estilos".

---

## Sintaxis basica

```css
/* Estructura de una media query */
@media (condicion) {
    /* Estilos que solo se aplican si se cumple la condicion */
}
```

### Condiciones mas comunes

| Condicion | Significado | Uso |
|-----------|-------------|-----|
| `(min-width: 768px)` | Pantalla de 768px o mas | Tablet y arriba |
| `(max-width: 767px)` | Pantalla de 767px o menos | Solo movil |
| `(min-width: 992px)` | Pantalla de 992px o mas | Desktop y arriba |
| `(max-width: 991px)` | Pantalla de 991px o menos | Hasta tablet |

---

## Mobile-First: El enfoque correcto

### ¿Que es Mobile-First?

Escribir primero el CSS para movil y luego anadir estilos para pantallas mas grandes con media queries.

```
ENFOQUE MOBILE-FIRST (CORRECTO):

/* Paso 1: Estilos base (movil) */
.container {
    width: 100%;
    padding: 10px;
}

/* Paso 2: Tablet (768px+) */
@media (min-width: 768px) {
    .container {
        max-width: 720px;
        margin: 0 auto;
    }
}

/* Paso 3: Desktop (992px+) */
@media (min-width: 992px) {
    .container {
        max-width: 960px;
    }
}
```

### ¿Por que Mobile-First?

| Razon | Explicacion |
|-------|-------------|
| **Eficiencia** | Los dispositivos moviles descargan menos CSS |
| **Priorizacion** | Te obliga a pensar en lo mas importante primero |
| **Rendimiento** | El CSS base es mas ligero |
| **Tendencia** | El 60% del trafico web es movil |

---

## Breakpoints estandar

### Los 5 breakpoints mas usados

| Nombre | Min-width | Dispositivo | Ejemplo |
|--------|-----------|-------------|---------|
| `xs` | 0 | Celulares竖屏 | iPhone SE, Galaxy S |
| `sm` | 576px | Celulares horizontales | iPhone Pro Max |
| `md` | 768px | Tablets | iPad |
| `lg` | 992px | Laptops | MacBook Air |
| `xl` | 1200px | Desktops | Monitor 24" |

### Visualizacion de breakpoints

```
0px         576px       768px       992px       1200px       ∞
│           │           │           │           │            │
│  xs       │    sm     │    md     │    lg     │     xl     │
│  Movil    │  Movil    │  Tablet   │  Laptop   │   Desktop  │
│           │  grande   │           │           │            │
│           │           │           │           │            │
▼           ▼           ▼           ▼           ▼            ▼
├───────────┼───────────┼───────────┼───────────┼────────────►
│           │           │           │           │
```

### Código completo con breakpoints

```css
/* BASE: Movil (0px - 575px) */
.grid {
    grid-template-columns: 1fr;
}

/* SM: 576px+ */
@media (min-width: 576px) {
    .grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

/* MD: 768px+ */
@media (min-width: 768px) {
    .grid {
        grid-template-columns: repeat(3, 1fr);
    }
}

/* LG: 992px+ */
@media (min-width: 992px) {
    .grid {
        grid-template-columns: repeat(4, 1fr);
    }
}

/* XL: 1200px+ */
@media (min-width: 1200px) {
    .container {
        max-width: 1140px;
    }
}
```

---

## Patrones comunes con Media Queries

### Patron 1: Cambiar numero de columnas

```css
/* Movil: 1 columna */
.grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 15px;
}

/* Tablet: 2 columnas */
@media (min-width: 768px) {
    .grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

/* Desktop: 3 columnas */
@media (min-width: 992px) {
    .grid {
        grid-template-columns: repeat(3, 1fr);
    }
}
```

### Patron 2: Navegacion que cambia de vertical a horizontal

```css
/* Movil: botones apilados */
.nav {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

/* Desktop: botones en fila */
@media (min-width: 768px) {
    .nav {
        flex-direction: row;
        justify-content: center;
    }
}
```

### Patron 3: Layout con sidebar

```css
/* Movil: todo en columna */
.layout {
    display: flex;
    flex-direction: column;
}

/* Desktop: contenido + sidebar */
@media (min-width: 992px) {
    .layout {
        flex-direction: row;
    }
    
    .main-content {
        flex: 3; /* 75% del ancho */
    }
    
    .sidebar {
        flex: 1; /* 25% del ancho */
    }
}
```

### Patron 4: Ocultar/mostrar elementos

```css
/* Por defecto: oculto en movil */
.desktop-only {
    display: none;
}

/* Mostrar solo en desktop */
@media (min-width: 992px) {
    .desktop-only {
        display: block;
    }
}

/* Por defecto: visible en movil */
.mobile-only {
    display: block;
}

/* Ocultar en desktop */
@media (min-width: 768px) {
    .mobile-only {
        display: none;
    }
}
```

### Patron 5: Ajustar tamanos de texto

```css
/* Movil: texto base */
h1 { font-size: 28px; }
p  { font-size: 16px; }

/* Tablet: texto mas grande */
@media (min-width: 768px) {
    h1 { font-size: 36px; }
    p  { font-size: 18px; }
}

/* Desktop: texto aun mas grande */
@media (min-width: 992px) {
    h1 { font-size: 42px; }
}
```

---

## Tabla de errores comunes

| Error | ¿Por que esta mal? | Solucion |
|-------|-------------------|----------|
| Usar max-width en mobile-first | Conflicto con el enfoque | Usa min-width para mobile-first |
| Breakpoints inventados (831px) | No corresponde a ningun dispositivo | Usa breakpoints estandar |
| Demasiados breakpoints | Codigo complicado, dificil de mantener | Maximo 3-4 breakpoints |
| No probar en dispositivos reales | Se ve bien en Chrome pero mal en Safari | Prueba en moviles reales |
| Usar px para anchos | No escala en diferentes pantallas | Usa % o max-width |
| Olvidar el viewport meta tag | El movil no escala correctamente | `<meta name="viewport" content="width=device-width, initial-scale=1.0">` |

---

## El viewport meta tag (CRITICO)

Sin esta linea en tu HTML, las media queries NO funcionan en movil:

```html
<!-- Esto es OBLIGATORIO -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### ¿Que hace?

```
SIN viewport meta tag:             CON viewport meta tag:
┌──────────────────────┐          ┌──────────────────────┐
│                      │          │                      │
│  El movil renderiza  │          │  El movil renderiza  │
│  como si fuera       │          │  al tamano real      │
│  desktop (980px)     │          │  de la pantalla      │
│  y luego escala      │          │                      │
│                      │          │  Las media queries   │
│  Las media queries   │          │  funcionan           │
│  NO funcionan        │          │  correctamente       │
│                      │          │                      │
└──────────────────────┘          └──────────────────────┘
```

---

## Como probar tus media queries

### Opcion 1: Redimensionar el navegador

Arrastra el borde de la ventana para cambiar el tamano y ver los cambios.

### Opcion 2: Chrome DevTools

1. Abre Chrome DevTools (F12)
2. Haz clic en el icono de "Toggle device toolbar" (Ctrl+Shift+M)
3. Selecciona diferentes dispositivos (iPhone, iPad, etc.)

### Opcion 3: Dispositivos reales

Prueba en un celular, tablet y desktop real.

---

## Ejemplo completo: Perfil responsivo de Yamil N

```css
/* BASE: Movil */
body {
    font-size: 16px;
    padding: 15px;
}

.container {
    max-width: 100%;
}

.grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 15px;
}

/* TABLET: 768px+ */
@media (min-width: 768px) {
    body {
        padding: 20px;
    }
    
    .grid {
        grid-template-columns: repeat(2, 1fr);
    }
    
    h1 {
        font-size: 36px;
    }
}

/* DESKTOP: 992px+ */
@media (min-width: 992px) {
    .container {
        max-width: 1100px;
        margin: 0 auto;
    }
    
    .grid {
        grid-template-columns: repeat(3, 1fr);
    }
    
    h1 {
        font-size: 42px;
    }
}
```

---

## Reglas de oro de Media Queries

| # | Regla | Analogia |
|---|-------|----------|
| 1 | **Mobile-first con min-width** | Construye de pequeno a grande |
| 2 | **Maximo 3-4 breakpoints** | No compliques demasiado |
| 3 | **Usa breakpoints estandar** | 576, 768, 992, 1200 |
| 4 | **SIEMPRE viewport meta tag** | Sin esto nada funciona en movil |
| 5 | **Prueba en dispositivos reales** | El emulador no es perfecto |
| 6 | **Ordena las queries de menor a mayor** | Mantén el codigo organizado |

---

## Ejercicios practicos

### Ejercicio 1: Indicador de tamano
Crea un div que muestre un texto diferente segun el tamano de pantalla: "Movil" (< 768px), "Tablet" (768px - 991px), "Desktop" (992px+).

### Ejercicio 2: Grid responsivo
Crea un grid de 6 tarjetas que sea 1 columna en movil, 2 en tablet y 3 en desktop.

### Ejercicio 3: Navegacion adaptativa
Crea una navegacion que sea vertical en movil y horizontal en tablet/desktop.

### Ejercicio 4: Layout con sidebar
Crea un layout con contenido principal y sidebar que en movil se apilen y en desktop se pongan lado a lado.

### Ejercicio 5: Tabla con scroll
Crea una tabla ancha que en movil tenga scroll horizontal y en desktop se vea completa.

### Ejercicio 6: Perfil completo
Crea una tarjeta de perfil responsiva para Yamil N que se vea bien en movil, tablet y desktop.

---

## Siguiente paso

Ahora que dominas las media queries, pasa a **[02-unidades-fluidas](../02-unidades-fluidas/)** para aprender sobre unidades de medida que se adaptan automaticamente.
