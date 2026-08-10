# Accesibilidad y Semantica en CSS

## ¿Que aprendemos aqui?

- Por que la accesibilidad web es responsabilidad del CSS
- Como garantizar contraste de colores adecuado (WCAG)
- Como crear focus states visibles y utiles
- Como usar `prefers-reduced-motion` para usuarios sensibles
- HTML semantico correcto y como potenciarlo con CSS
- Consideraciones para lectores de pantalla
- Casos practicos aplicados al perfil de Yamil N.

---

## Bloque de codigo completo

```css
/* ============================================
   ACCESIBILIDAD Y SEMANTICA
   Perfil: Yamil N. - TextilPro S.A.
   ============================================ */

/* 1. Contraste WCAG AA (minimo 4.5:1 para texto normal) */
:root {
  --color-primario: #1a5276;      /* sobre #f5f5f5 = ratio 7.2:1 */
  --color-texto: #333333;         /* sobre #ffffff = ratio 12.6:1 */
  --color-acento: #f39c12;        /* USAR SOLO PARA ELEMENTOS GRANDES */
  --color-error: #c0392b;         /* sobre blanco = ratio 5.6:1 */
}

/* 2. Focus states visibles */
*:focus-visible {
  outline: 3px solid #2e86c1;
  outline-offset: 2px;
}

.boton:focus-visible {
  outline: 3px solid #2e86c1;
  outline-offset: 3px;
  box-shadow: 0 0 0 6px rgba(46, 134, 193, 0.3);
}

/* 3. prefers-reduced-motion */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* 4. HTML semantico con estilos */
header, nav, main, article, section, aside, footer {
  /* Los elementos semanticos no necesitan estilos especiales,
     pero pueden tener layout */
}

.perfil {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

/* 5. Ocultar visualmente pero accesible para screen readers */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* 6. Skip navigation */
.skip-nav {
  position: absolute;
  top: -100%;
  left: 16px;
  background: #1a5276;
  color: #ffffff;
  padding: 8px 16px;
  border-radius: 0 0 8px 8px;
  z-index: 1000;
  text-decoration: none;
  font-weight: bold;
}

.skip-nav:focus {
  top: 0;
}
```

```html
<!-- HTML semantico con soporte de accesibilidad -->
<a href="#contenido-principal" class="skip-nav">Saltar al contenido</a>

<header role="banner">
  <h1>Yamil N. - Ingeniero Industrial</h1>
</header>

<nav role="navigation" aria-label="Navegacion principal">
  <ul>
    <li><a href="#perfil">Perfil</a></li>
    <li><a href="#experiencia">Experiencia</a></li>
  </ul>
</nav>

<main id="contenido-principal" role="main">
  <article aria-labelledby="titulo-perfil">
    <h2 id="titulo-perfil">Sobre Yamil N.</h2>
    <p>Ingeniero Industrial en TextilPro S.A.</p>
    <span class="sr-only">Informacion de contacto oculta visualmente</span>
  </article>
</main>
```

---

## Explicacion detallada con diagramas ASCII

### Contraste de colores (WCAG)

El contraste es la diferencia de luminosidad entre el texto y el fondo. Si es muy bajo, personas con baja vision no pueden leer.

```
  WCAG 2.1 Niveles de Contraste
  ┌─────────────────────────────────────────┐
  │                                         │
  │  TEXTO NORMAL (< 18px / < 14px bold)    │
  │  ┌────────────────────────────────┐     │
  │  │  AA: ratio minimo 4.5:1        │     │
  │  │  AAA: ratio minimo 7:1         │     │
  │  └────────────────────────────────┘     │
  │                                         │
  │  TEXTO GRANDE (> 18px / > 14px bold)    │
  │  ┌────────────────────────────────┐     │
  │  │  AA: ratio minimo 3:1          │     │
  │  │  AAA: ratio minimo 4.5:1       │     │
  │  └────────────────────────────────┘     │
  │                                         │
  │  ┌──────┐     ┌──────┐     ┌──────┐    │
  │  │Bien  │     │Mal   │     │Pesi- │    │
  │  │7.2:1 │     │2.1:1 │     │mo    │    │
  │  │      │     │      │     │1.2:1 │    │
  │  │██████│     │░░░░░░│     │......│    │
  │  │██████│     │░░░░░░│     │......│    │
  │  └──────┘     └──────┘     └──────┘    │
  │  ✅ Legible     ⚠️ Dificil   ❌ Ilegible│
  └─────────────────────────────────────────┘
```

### Focus states

Cuando un usuario navega con teclado (Tab), necesita ver que elemento tiene el foco. CSS debe proveer esto.

```
  Navegacion con Teclado
  ┌─────────────────────────────────────┐
  │  [Tab] → [Tab] → [Tab] → [Enter]   │
  │                                     │
  │  ┌──────────┐                       │
  │  │ Enlace 1 │  ← sin focus visible  │
  │  └──────────┘     ¿que selecciono?  │
  │                                     │
  │  ┌──────────────────┐               │
  │  │ ╔══════════════╗ │               │
  │  │ ║  Enlace 2    ║ │ ← con outline │
  │  │ ╚══════════════╝ │   azul 3px    │
  │  └──────────────────┘               │
  │  ← AHORA SE VE CLARAMENTE            │
  └─────────────────────────────────────┘
```

### prefers-reduced-motion

Algunas personas sufren mareos o nauseas con animaciones. El sistema operativo puede indicar esta preferencia.

```
  prefers-reduced-motion
  ┌─────────────────────────────────────────┐
  │                                         │
  │  Usuario configura en su OS:            │
  │  "Reducir movimiento" = SI              │
  │                                         │
  │  El navegador envia la senal:           │
  │  @media (prefers-reduced-motion: reduce)│
  │                                         │
  │  ┌─────────────┐    ┌─────────────┐    │
  │  │ Animacion   │    │ Sin animacion│    │
  │  │ completa    │ →  │ instantaneo │    │
  │  │ 2s fade in  │    │ aparece ya  │    │
  │  └─────────────┘    └─────────────┘    │
  └─────────────────────────────────────────┘
```

### HTML semantico vs divs

```
  CON DIVS (sin semantica)        CON HTML SEMANTICO
  ┌─────────────────────┐        ┌─────────────────────┐
  │ <div class="head">  │        │ <header>            │
  │   <div class="nav"> │        │   <nav>             │
  │     <div>item</div> │        │     <ul>            │
  │     <div>item</div> │        │       <li><a>...</a>│
  │   </div>            │        │       <li><a>...</a>│
  │ </div>              │        │     </ul>           │
  │ <div class="main">  │        │   </nav>            │
  │   <div class="art"> │        │ </header>           │
  │     <div>texto</div>│        │ <main>              │
  │   </div>            │        │   <article>         │
  │ </div>              │        │     <h1>...</h1>    │
  │ <div class="foot">  │        │     <p>...</p>      │
  │ </div>              │        │   </article>        │
  └─────────────────────┘        │ </main>            │
                                  │ <footer>           │
  El lector de pantalla           │ </footer>          │
  ve: "generic div, generic      └─────────────────────┘
  div, generic div..."
                                  El lector de pantalla
                                  ve: "banner, navigation,
                                  main region, article,
                                  heading level 1..."
```

---

## Tabla comparativa: Accesibilidad

| Aspecto | Sin accesibilidad | Con accesibilidad |
|---|---|---|
| Contraste | Colores bonitos pero ilegibles | Ratio minimo 4.5:1 verificado |
| Navegacion teclado | `outline: none` destruye el foco | `:focus-visible` con outline claro |
| Animaciones | Todo se mueve siempre | Respeta `prefers-reduced-motion` |
| HTML | Solo `<div>` y `<span>` | `<header>`, `<main>`, `<article>`, `<nav>` |
| Screen readers | No entienden la estructura | Roles y landmarks claros |
| Impacto usuarios | Excluye a millones | Incluye a todos |

---

## Tabla de reglas

| Regla | Descripcion | Valor WCAG |
|---|---|---|
| Contraste texto normal | Ratio minimo entre texto y fondo | 4.5:1 (AA) / 7:1 (AAA) |
| Contraste texto grande | Para fuentes > 18px o > 14px bold | 3:1 (AA) / 4.5:1 (AAA) |
| Focus siempre visible | Nunca `outline: none` sin alternativa | Outline minimo 2px |
| Reduced motion | Respetar preferencia del usuario | `prefers-reduced-motion: reduce` |
| Skip navigation | Enlace para saltar al contenido | Primer enlace del DOM |
| sr-only | Ocultar visualmente, no de screen readers | Clase `.sr-only` estandar |
| Landmarks | Usar `<header>`, `<main>`, `<nav>`, `<footer>` | Roles ARIA implicitos |
| Labels en formularios | Todo `<input>` necesita `<label>` | `for` + `id` vinculados |

---

## Errores comunes

| Error | Codigo incorrecto | Codigo correcto | Por que falla |
|---|---|---|---|
| Quitar el outline | `* { outline: none; }` | `*:focus-visible { outline: 3px solid blue; }` | Usuarios de teclado pierden el foco |
| Contraste bajo | `color: #ccc; background: #fff;` | `color: #333; background: #fff;` | Ratio 1.6:1, minimo es 4.5:1 |
| Solo divs | `<div class="header">` | `<header>` | Screen readers no reconocen la estructura |
| Imagenes sin alt | `<img src="foto.jpg">` | `<img src="foto.jpg" alt="Yamil N.">` | Screen readers no pueden describir la imagen |
| Ignorar reduced-motion | Animaciones siempre activas | `@media (prefers-reduced-motion)` | Puede causar mareos y nauseas |
| Color como unica senal | "Campos en rojo son obligatorios" | Color + icono + texto | Usuarios daltionicos no ven el rojo |
| Placeholder sin label | `<input placeholder="Nombre">` | `<label>Nombre</label><input>` | Placeholder no es sustituto de label |

---

## Ejercicios practicos

### Ejercicio 1: Verificar contraste
Usa la herramienta [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) para verificar estos pares:
- `#1a5276` sobre `#f5f5f5` (esperado: > 4.5:1)
- `#f39c12` sobre `#ffffff` (esperado: < 3:1, usar solo para elementos grandes)
- `#333333` sobre `#ffffff` (esperado: > 7:1)

### Ejercicio 2: Focus states
Crea 3 botones con diferentes estilos de `:focus-visible`:
- Outline solido
- Outline con sombra (box-shadow)
- Cambio de fondo con borde

### Ejercicio 3: Reduced motion
Crea una animacion CSS (fade-in) y envuelvela en `@media (prefers-reduced-motion: no-preference)` para que solo se ejecute cuando el usuario NO tiene reduccion de movimiento.

### Ejercicio 4: Estructura semantica
Convierte esta pagina de divs a HTML semantico:
```html
<div class="page">
  <div class="header">...</div>
  <div class="nav">...</div>
  <div class="content">
    <div class="article">...</div>
  </div>
  <div class="footer">...</div>
</div>
```
Debe quedar con `<header>`, `<nav>`, `<main>`, `<article>`, `<footer>`.

### Ejercicio 5: Screen reader only
Crea un boton de "buscar" con un icono (sin texto visible) pero que incluya `.sr-only` para que el screen reader lea "Buscar en el perfil de Yamil N."
