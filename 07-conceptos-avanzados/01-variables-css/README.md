# Variables CSS (Custom Properties)

## ¿Que aprendemos aqui?

- Que son las variables CSS y por que se llaman "Custom Properties"
- Como declararlas con `--` y usarlas con `var()`
- Como funciona el **scope** (alcance) de las variables
- Como crear temas (claro/oscuro) con variables
- Casos practicos aplicados al perfil de Yamil N.

---

## Bloque de codigo completo

```css
/* ============================================
   VARIABLES CSS - Ejemplo completo
   Perfil: Yamil N. - TextilPro S.A.
   ============================================ */

/* 1. Declaracion en :root (alcance global) */
:root {
  --color-primario: #1a5276;
  --color-secundario: #2e86c1;
  --color-acento: #f39c12;
  --color-fondo: #f5f5f5;
  --color-texto: #333333;
  --fuente-principal: 'Segoe UI', Arial, sans-serif;
  --espaciado-base: 16px;
  --radio-borde: 8px;
  --sombra-tarjeta: 0 2px 8px rgba(0, 0, 0, 0.1);
}

/* 2. Uso con var() */
.perfil-yamil {
  background-color: var(--color-fondo);
  color: var(--color-texto);
  font-family: var(--fuente-principal);
  padding: var(--espaciado-base);
  border-radius: var(--radio-borde);
  box-shadow: var(--sombra-tarjeta);
}

.perfil-yamil .titulo {
  color: var(--color-primario);
}

.perfil-yamil .boton-accion {
  background-color: var(--color-secundario);
  border: 2px solid var(--color-acento);
}

/* 3. Tema oscuro con override en :root */
[data-theme="oscuro"] {
  --color-primario: #5dade2;
  --color-secundario: #85c1e9;
  --color-acento: #f5b041;
  --color-fondo: #1c2833;
  --color-texto: #ecf0f1;
}
```

```html
<div class="perfil-yamil" data-theme="oscuro">
  <h2 class="titulo">Yamil N.</h2>
  <p>Ingeniero Industrial - TextilPro S.A.</p>
  <button class="boton-accion">Contactar</button>
</div>
```

---

## Explicacion detallada con diagrama ASCII

### ¿Que son las variables CSS?

Las variables CSS son como **cajas etiquetadas** donde guardas valores que quieres reutilizar. En lugar de escribir `#1a5276` veinte veces, lo guardas en `--color-primario` y usas `var(--color-primario)` cada vez que lo necesites.

```
  Sin variables                        Con variables
  ┌─────────────────────┐              ┌─────────────────────┐
  │ .header {           │              │ :root {             │
  │   color: #1a5276;   │              │   --color-primario:  │
  │ }                   │              │     #1a5276;        │
  │ .footer {           │              │ }                   │
  │   color: #1a5276;   │              │ .header {           │
  │ }                   │              │   color: var(       │
  │ .sidebar {          │              │     --color-primario │
  │   color: #1a5276;   │              │   );                │
  │ }                   │              │ }                   │
  │ ... 20 veces mas    │              │ .footer {           │
  └─────────────────────┘              │   color: var(       │
                                       │     --color-primario │
                                       │   );                │
                                       │ }                   │
                                       │ ... siempre igual   │
                                       └─────────────────────┘
```

### El scope (alcance) de las variables

Las variables CSS respetan la **cascada**. Si declaras una variable en `:root`, toda la pagina la puede usar. Si la declaras dentro de un selector especifico, solo ese elemento y sus hijos la ven.

```
  :root {
    --color-texto: #333;        ← Todo el documento ve #333
  }
  │
  ├── .seccion-publica {
  │     color: var(--color-texto);  → #333
  │   }
  │
  ├── .panel-admin {
  │     --color-texto: #fff;    ← Solo este panel y sus hijos
  │     color: var(--color-texto);  → #fff
  │   }
  │
  └── .footer {
        color: var(--color-texto);  → #333 (vuelve al valor global)
      }
```

### Diagrama de herencia visual

```
  ┌─────────────────── :root ───────────────────┐
  │  --color-primario: #1a5276                   │
  │  --color-fondo: #f5f5f5                      │
  │                                              │
  │  ┌─────────── .tarjeta-perfil ───────────┐   │
  │  │  hereda --color-primario: #1a5276     │   │
  │  │                                        │   │
  │  │  ┌──── .nombre-yamil ────────────┐    │   │
  │  │  │  hereda --color-primario      │    │   │
  │  │  │  usa: var(--color-primario)   │    │   │
  │  │  └──────────────────────────────┘    │   │
  │  └──────────────────────────────────────┘   │
  └─────────────────────────────────────────────┘
```

---

## Tabla comparativa: Variables CSS vs Preprocesadores

| Caracteristica | Variables CSS (nativas) | Sass/Less (preprocesadores) |
|---|---|---|
| Sintaxis | `--nombre: valor` | `$nombre: valor` |
| Uso | `var(--nombre)` | `$nombre` |
| Se ejecutan en | El navegador | El compilador (antes del navegador) |
| Pueden cambiar en runtime | Si (con JavaScript o media queries) | No (son estaticas) |
| Soporte de scope | Si (heredan la cascada) | No (son globales tras compilar) |
| Necesitan compilacion | No | Si |
| Valores por defecto | `var(--nombre, fallback)` | No nativo |

---

## Tabla de reglas

| Regla | Descripcion | Ejemplo |
|---|---|---|
| Empiezan con `--` | Toda variable CSS debe empezar con doble guion | `--mi-color: red;` |
| Son case-sensitive | `--Color` es diferente a `--color` | `--Color` ≠ `--color` |
| Se declaran con `:` | Igual que cualquier propiedad CSS | `--espaciado: 16px;` |
| Se usan con `var()` | Siempre dentro de `var()` | `color: var(--mi-color);` |
| Scope por `:root` | Declarar en `:root` para uso global | `:root { --x: 1; }` |
| Fallback en `var()` | Segundo argumento como valor por defecto | `var(--x, #000)` |
| Heredan hacia abajo | Los hijos heredan las variables del padre | Padre define, hijo usa |

---

##Errores comunes

| Error | Codigo incorrecto | Codigo correcto | Por que falla |
|---|---|---|---|
| Olvidar `var()` | `color: --mi-color;` | `color: var(--mi-color);` | El navegador no interpreta el `--` solo |
| Escribir mal el prefijo | `-mi-color: red;` | `--mi-color: red;` | Debe ser doble guion `--` |
| Case sensitivity | Declarar `--Color` y usar `var(--color)` | Usar el mismo nombre exacto | Las variables distinguen mayusculas |
| Scope incorrecto | Declarar en `.hijo` y usar en `.padre` | Declarar en `:root` o en el padre | Las variables no suben, solo bajan |
| Olvidar el fallback | `var(--no-existe)` sin respaldo | `var(--no-existe, #000)` | Si la variable no existe, queda vacio |

---

## Ejercicios practicos

### Ejercicio 1: Sistema de colores para TextilPro S.A.
Crea un set de variables CSS en `:root` que incluya:
- Color primario corporativo (#1a5276)
- Color secundario (#2e86c1)
- Color de acento para alertas (#f39c12)
- Color de fondo (#f5f5f5)
- Color de texto (#333)

Aplica estas variables a una tarjeta de perfil de Yamil N.

### Ejercicio 2: Tema claro y oscuro
Usando `[data-theme="oscuro"]`, crea un override de las variables para modo oscuro.
Pista: el fondo debe ser oscuro (#1c2833) y el texto claro (#ecf0f1).

### Ejercicio 3: Variables con fallback
Crea un boton que use `var(--color-boton, #2e86c1)` para que, si la variable no existe, use un azul por defecto.

### Ejercicio 4: Scope localizado
Crea un componente `.tarjeta-urgente` que defina su propia variable `--color-borde: red;` y aplícala solo a ese componente sin afectar al resto de la pagina.
