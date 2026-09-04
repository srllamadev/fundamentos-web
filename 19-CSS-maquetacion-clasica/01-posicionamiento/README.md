# Posicionamiento CSS: static, relative, absolute, fixed, sticky

## ¿Que aprendemos aqui?

- Los 5 valores de la propiedad `position` en CSS
- Como cada valor afecta el flujo normal del documento
- Cuando usar cada tipo de posicionamiento
- Errores comunes y como evitarlos

---

## Bloque de codigo completo

```css
/* ===== POSICIONAMIENTO CSS ===== */

/* 1. STATIC - Valor por defecto */
.elemento-static {
  position: static;
  /* top, right, bottom, left NO funcionan aqui */
}

/* 2. RELATIVE - Se mueve respecto a su posicion original */
.elemento-relative {
  position: relative;
  top: 20px;    /* se desplaza 20px hacia abajo */
  left: 30px;   /* se desplaza 30px hacia la derecha */
}

/* 3. ABSOLUTE - Se sale del flujo, busca ancestro posicionado */
.elemento-absolute {
  position: absolute;
  top: 0;
  right: 0;
  /* Se posiciona respecto al ancestro mas cercano
     que tenga position diferente de static */
}

/* 4. FIXED - Anclado a la ventana del navegador */
.elemento-fixed {
  position: fixed;
  bottom: 20px;
  right: 20px;
  /* No se mueve al hacer scroll */
}

/* 5. STICKY - Hibrido entre relative y fixed */
.elemento-sticky {
  position: sticky;
  top: 0;
  /* Se comporta como relative hasta que llegas a 'top',
     luego se comporta como fixed */
}
```

---

## Explicacion detallada

### 1. position: static (por defecto)

Todo elemento HTML tiene `position: static` automaticamente. Los elementos siguen el **flujo normal**: se apilan de arriba hacia abajo, ocupan todo el ancho disponible (si son bloques).

```
FLUJO NORMAL (static)
┌────────────────────────┐
│   Header               │  ← Se posiciona primero
├────────────────────────┤
│                        │
│   Contenido principal  │  ← Sigue abajo
│                        │
├────────────────────────┤
│   Footer               │  ← Al final
└────────────────────────┘

Las propiedades top, right, bottom, left
NO TIENEN EFECTO con position: static.
```

**Analogia:** Imagina los estantes de un almacen en TextilPro. Los productos se apilan de arriba hacia abajo en orden. No puedes mover uno sin alterar los demas.

### 2. position: relative

El elemento se puede **desplazar** respecto a su posicion original, pero **sigue ocupando ese espacio** en el flujo.

```
ANTES (static):           DESPUES (relative):
┌────────┐               ┌────────┐
│ Caja A │               │ Caja A │
├────────┤               ├────────┤
│ Caja B │ ← pos original│        │ ← espacio vacio (sigue ocupado)
├────────┤               │  ┌─────┤ ← Caja B se movio
│ Caja C │               │  │ Caja│
└────────┘               ├──┤  B  │
                         │  └─────┤
                         │ Caja C │
                         └────────┘
```

**Analogia:** Es como mover una caja en el almacen sin quitarla de su estante. La caja sigue "contando" en ese lugar, pero fisicamente esta en otro lado.

### 3. position: absolute

El elemento se **saca completamente del flujo** y se posiciona respecto al **ancestro posicionado mas cercano** (un ancestro con position diferente de static). Si no hay ninguno, se posiciona respecto al `<html>`.

```
PADRE (position: relative)
┌──────────────────────────────────┐
│                                  │
│   ┌──────────────┐               │
│   │  ABSOLUTE    │ ← top: 0,     │
│   │  (esquina    │   right: 0    │
│   │   sup der)   │               │
│   └──────────────┘               │
│                                  │
│   Contenido normal del padre     │
│   (NO se desplaza por el absolute│
│    porque salio del flujo)       │
│                                  │
└──────────────────────────────────┘
```

**Analogia:** En TextilPro, es como poner un cartel en la pared con un iman. El cartel no afecta la distribucion de las maquinas del piso, pero se posiciona respecto a las paredes de la nave.

### 4. position: fixed

Similar a absolute, pero se posiciona **siempre respecto a la ventana del navegador** (viewport). No se mueve al hacer scroll.

```
VENTANA DEL NAVEGADOR (viewport)
┌──────────────────────────────────┐
│                                  │
│                                  │
│         Contenido                │
│         (se mueve con scroll)    │
│                                  │
│                                  │
│                     ┌─────────┐  │
│                     │ BOTON   │  │ ← fixed: bottom: 20px, right: 20px
│                     │ SCROLL  │  │    NO se mueve nunca
│                     │ ▲       │  │
│                     └─────────┘  │
└──────────────────────────────────┘
```

**Analogia:** Es como el extintor en la pared de TextilPro. No importa cuanto te muevas por la planta, el extintor siempre esta en el mismo lugar visual.

### 5. position: sticky

Es un **hibrido**: se comporta como `relative` hasta que el scroll lo lleva a cierto punto, y a partir de ahi se comporta como `fixed`.

```
ANTES DE LLEGAR AL TOP:     DESPUES DE LLEGAR AL TOP:
┌────────────────────┐      ┌────────────────────┐
│ Contenido anterior │      │ Contenido anterior │
├────────────────────┤      ├────────────────────┤
│ HEADER STICKY      │      │                    │
│ (se mueve normal)  │      │ Contenido en scroll│
├────────────────────┤      │                    │
│ Contenido          │      │                    │
│ (debelow)          │      ├────────────────────┤
└────────────────────┘      │ HEADER STICKY      │ ← Ahora se queda
                            ├────────────────────┤   pegado arriba
                            │ Mas contenido      │
                            └────────────────────┘
```

**Analogia:** En un tablero Kanban de TextilPro, las etiquetas de las columnas ("En proceso", "Terminado") se quedan visibles aunque muevas las tarjetas debajo.

---

## Tabla comparativa

| Propiedad | static | relative | absolute | fixed | sticky |
|-----------|--------|----------|----------|-------|--------|
| Sale del flujo | No | No | Si | Si | No (hasta cierto punto) |
| Respeta espacio original | Si | Si | No | No | Si (luego se pega) |
| top/left/right/bottom | No funcionan | Si | Si | Si | Si |
| Referencia | N/A | Su posicion original | Ancestro posicionado | Viewport | Viewport (tras scroll) |
| Scroll afecta | Si | Si | No | No | Hibrido |
| Caso de uso tipico | Ninguno especial | Ajustes finos | Tooltips, modales | Botones flotantes, navbars | Headers que se pegan |

---

## Reglas importantes

| # | Regla |
|---|-------|
| 1 | `position: absolute` busca el ancestro mas cercano con `position` diferente de `static` |
| 2 | Si no hay ancestro posicionado, `absolute` usa `<html>` como referencia |
| 3 | `fixed` siempre usa el viewport como referencia, sin importar ancestros |
| 4 | Un elemento con `position: relative` crea un "contexto de posicionamiento" para sus hijos absolute |
| 5 | `sticky` necesita un umbral (top, bottom, etc.) para saber donde pegarse |
| 6 | Elementos posicionados pueden tapar a otros (ver z-index en seccion 04) |

---

## Errores comunes

| Error | Por que pasa | Solucion |
|-------|-------------|----------|
| `absolute` no se posiciona donde espero | Falta un ancestro con `position: relative` | Agregar `position: relative` al contenedor padre |
| `sticky` no funciona | Falta la propiedad `top` (o `bottom`) | Siempre incluir `top: 0` (o el valor deseado) |
| `top/left` no funcionan en `static` | Olvidaste cambiar `position` | Agregar `position: relative` primero |
| Elemento `absolute` desaparece | Se posiciono fuera del viewport | Verificar valores de top/left/right/bottom |
| `sticky` no se pega | El padre tiene `overflow: hidden` | Quitar el `overflow` del ancestro |
| Confundir `fixed` con `absolute` | Ambos se sacan del flujo | Recordar: `fixed` = viewport, `absolute` = ancestro |

---