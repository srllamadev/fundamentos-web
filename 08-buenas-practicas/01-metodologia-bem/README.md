# Metodologia BEM (Block__Element--Modifier)

## ¿Que aprendemos aqui?

- Que es BEM y por que nacio esta metodologia
- La estructura Block, Element, Modifier con ejemplos claros
- Como nombrar clases siguiendo BEM con el perfil de Yamil N.
- Ventajas de BEM sobre naming convencional
- Errores comunes y como evitarlos
- Ejercicios practicos

---

## Bloque de codigo completo

```css
/* ============================================
   METODOLOGIA BEM - Ejemplo completo
   Perfil: Yamil N. - TextilPro S.A.
   ============================================ */

/* BLOQUE: tarjeta-perfil (componente independiente) */
.tarjeta-perfil {
  background-color: #ffffff;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

/* ELEMENTO: __header (parte del bloque) */
.tarjeta-perfil__header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
}

/* ELEMENTO: __avatar */
.tarjeta-perfil__avatar {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: #1a5276;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
}

/* ELEMENTO: __nombre */
.tarjeta-perfil__nombre {
  font-size: 1.5rem;
  color: #1a5276;
  margin: 0;
}

/* ELEMENTO: __cargo */
.tarjeta-perfil__cargo {
  color: #2e86c1;
  font-size: 0.95rem;
}

/* MODIFICADOR: --destacado (variante del bloque) */
.tarjeta-perfil--destacado {
  border: 2px solid #f39c12;
  background-color: #fef9e7;
}

/* MODIFICADOR: --compacto */
.tarjeta-perfil--compacto {
  padding: 12px;
}

.tarjeta-perfil--compacto .tarjeta-perfil__avatar {
  width: 40px;
  height: 40px;
  font-size: 1rem;
}

/* ELEMENTO: __lista-habilidades */
.tarjeta-perfil__lista-habilidades {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 0;
}

/* ELEMENTO: __habilidad-item */
.tarjeta-perfil__habilidad-item {
  background-color: #2e86c1;
  color: #ffffff;
  padding: 4px 12px;
  border-radius: 4px;
  font-size: 0.85rem;
}

/* MODIFICADOR de elemento: __habilidad-item--nivel-experto */
.tarjeta-perfil__habilidad-item--nivel-experto {
  background-color: #f39c12;
  color: #333333;
}
```

```html
<!-- BLOQUE con MODIFICADOR -->
<article class="tarjeta-perfil tarjeta-perfil--destacado">

  <!-- ELEMENTO -->
  <div class="tarjeta-perfil__header">
    <div class="tarjeta-perfil__avatar">YN</div>
    <div>
      <!-- ELEMENTO -->
      <h2 class="tarjeta-perfil__nombre">Yamil N.</h2>
      <p class="tarjeta-perfil__cargo">Ingeniero Industrial - TextilPro S.A.</p>
    </div>
  </div>

  <!-- ELEMENTO -->
  <ul class="tarjeta-perfil__lista-habilidades">
    <li class="tarjeta-perfil__habilidad-item
               tarjeta-perfil__habilidad-item--nivel-experto">
      Lean Manufacturing
    </li>
    <li class="tarjeta-perfil__habilidad-item">Kaizen</li>
    <li class="tarjeta-perfil__habilidad-item">Six Sigma</li>
  </ul>

</article>
```

---

## Explicacion detallada con diagrama ASCII

### ¿Que es BEM?

BEM es un sistema de nombres para clases CSS. Es como el sistema de codigo de barras de un almacen: cada pieza tiene un nombre unico que dice exactamente que es y donde pertenece.

```
  BEM = Block__Element--Modifier

  ┌─────────────────────────────────────────────────────┐
  │                                                     │
  │   BLOQUE (Block)                                    │
  │   ┌──────────────────────────────────────────┐      │
  │   │  tarjeta-perfil                           │      │
  │   │  ┌──────────────────────────────────┐    │      │
  │   │  │ ELEMENTO (Element)               │    │      │
  │   │  │  tarjeta-perfil__header          │    │      │
  │   │  │  tarjeta-perfil__avatar          │    │      │
  │   │  │  tarjeta-perfil__nombre          │    │      │
  │   │  └──────────────────────────────────┘    │      │
  │   │                                          │      │
  │   │  MODIFICADOR (Modifier) = variante       │      │
  │   │  tarjeta-perfil--destacado               │      │
  │   │  tarjeta-perfil--compacto                │      │
  │   └──────────────────────────────────────────┘      │
  │                                                     │
  └─────────────────────────────────────────────────────┘
```

### Analogia de la fabrica textil

Imagina que TextilPro S.A. fabrica camisetas. Cada camiseta tiene:

```
  BLOQUE = "camiseta" (el producto completo)
    │
    ├── ELEMENTO = "camiseta__cuello" (parte de la camiseta)
    ├── ELEMENTO = "camiseta__manga" (parte de la camiseta)
    ├── ELEMENTO = "camiseta__bolsillo" (parte de la camiseta)
    │
    └── MODIFICADOR = "camiseta--grande" (variante de la camiseta)
                      "camiseta--roja" (variante de la camiseta)
```

El cuello no existe por si solo, siempre es parte de una camiseta. Por eso se llama `camiseta__cuello` y no simplemente `cuello`.

### Reglas de los tres componentes

```
  1. BLOQUE (Block)
     ┌────────────────────────────────────┐
     │  Nombre independiente               │
     │  Ejemplo: tarjeta-perfil, menu,     │
     │           boton, formulario          │
     │  Existe por si mismo                │
     └────────────────────────────────────┘

  2. ELEMENTO (Element)
     ┌────────────────────────────────────┐
     │  Doble guion bajo __                │
     │  Depende del bloque                 │
     │  Ejemplo: tarjeta-perfil__avatar    │
     │  NUNCA se usa solo:                 │
     │  ❌ .avatar                          │
     │  ✅ .tarjeta-perfil__avatar          │
     └────────────────────────────────────┘

  3. MODIFICADOR (Modifier)
     ┌────────────────────────────────────┐
     │  Doble guion --                     │
     │  Indica variante o estado           │
     │  Ejemplo: tarjeta-perfil--destacado │
     │  Siempre acompania al bloque:       │
     │  ❌ class="tarjeta-perfil--destacado"│
     │  ✅ class="tarjeta-perfil            │
     │        tarjeta-perfil--destacado"    │
     └────────────────────────────────────┘
```

---

## Tabla comparativa: BEM vs Convencional

| Aspecto | CSS Convencional | Metodologia BEM |
|---|---|---|
| Nombres | `.header`, `.title`, `.btn` | `.perfil__header`, `.perfil__titulo` |
| Contexto | No se sabe a que pertenece | El nombre indica el bloque padre |
| Colisiones | Alto riesgo (`.title` repetido) | Bajo (`.perfil__title` es unico) |
| Especificidad | Se sube con anidamiento | Siempre baja (una sola clase) |
| Legibilidad | Requiere ver el HTML | El nombre explica la funcion |
| Mantenimiento | Dificil en proyectos grandes | Facil y predecible |
| Curva de aprendizaje | Baja | Media |

---

## Tabla de reglas

| Regla | Descripcion | Ejemplo |
|---|---|---|
| Bloque independiente | Un bloque existe por si mismo | `.menu { }` |
| Elemento usa `__` | Doble guion bajo separa bloque de elemento | `.menu__item { }` |
| Modificador usa `--` | Doble guion separa bloque/elemento de modificador | `.menu--activo { }` |
| Modificador acompania | Siempre usar la clase base + el modificador | `class="menu menu--activo"` |
| No anidar en CSS | Evita `.bloque__elem1 .bloque__elem2` | Usa nombres completos |
| No usar elementos solos | Un elemento no existe sin su bloque | ❌ `.header` ✅ `.perfil__header` |
| Minimo CSS anidado | BEM favorece selectores planos | Una clase por regla |

---

## Errores comunes

| Error | Codigo incorrecto | Codigo correcto | Por que falla |
|---|---|---|---|
| Elemento sin bloque | `.avatar { }` | `.tarjeta-perfil__avatar { }` | Pierde el contexto BEM |
| Modificador sin base | `class="tarjeta--grande"` | `class="tarjeta tarjeta--grande"` | El modificador solo anade, no reemplaza |
| Dobles guiones mal | `.tarjeta-perfil_-avatar` | `.tarjeta-perfil__avatar` | `__` para elementos, `--` para modificadores |
| Anidamiento excesivo | `.tarjeta .header .titulo` | `.tarjeta__titulo` | BEM evita selectores anidados |
| Bloque con dependencias | `.tarjeta` que necesita `.page` | Bloques deben ser independientes | Cada bloque es un componente |
| Nombres genericos | `.item`, `.text`, `.box` | `.menu__item`, `.perfil__texto` | Los nombres deben ser descriptivos |

---

## Ejercicios practicos

### Ejercicio 1: Componente boton BEM
Crea un bloque `.boton` con:
- Elementos: `.boton__icono`, `.boton__texto`
- Modificadores: `.boton--primario`, `.boton--grande`, `.boton--deshabilitado`

### Ejercicio 2: Tarjeta de producto para TextilPro
Aplica BEM a una tarjeta de producto textil:
- Bloque: `.producto-tarjeta`
- Elementos: imagen, nombre, precio, descripcion
- Modificadores: `--oferta`, `--agotado`

### Ejercicio 3: Menu de navegacion
Crea un menu con BEM:
- Bloque: `.nav-principal`
- Elementos: `__lista`, `__item`, `__enlace`
- Modificadores: `__enlace--activo`, `__enlace--externo`

### Ejercicio 4: Formulario de contacto
Convierte un formulario en componentes BEM:
- Bloque: `.form-contacto`
- Elementos: `__campo`, `__label`, `__input`, `__boton-enviar`
- Modificadores: `__campo--error`, `__input--valido`
