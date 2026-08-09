# 03 - Colores y Unidades en CSS

## ¿Que aprendemos aqui?

Aprenderas a definir **colores** en CSS (por nombre, hexadecimal, RGB y RGBA) y a usar **unidades de medida** (absolutas como `px` y relativas como `em`, `rem`, `%`). Entender estas diferencias es clave para crear disenos flexibles y profesionales.

---

## Codigo completo

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Yamil N - Colores y Unidades</title>
    <style>
        /* Color por nombre */
        .ejemplo-nombre {
            color: darkblue;
            background-color: lightyellow;
        }

        /* Color hexadecimal */
        .ejemplo-hex {
            color: #ffffff;
            background-color: #1a5276;
        }

        /* Color RGB */
        .ejemplo-rgb {
            color: rgb(255, 255, 255);
            background-color: rgb(46, 134, 193);
        }

        /* Color RGBA (con transparencia) */
        .ejemplo-rgba {
            background-color: rgba(46, 134, 193, 0.3);
        }

        /* Unidad absoluta: px */
        .ejemplo-px {
            font-size: 16px;
            width: 300px;
        }

        /* Unidad relativa: em */
        .ejemplo-em-padre {
            font-size: 20px;
        }
        .ejemplo-em-hijo {
            font-size: 1.5em;
        }

        /* Unidad relativa: rem */
        .ejemplo-rem {
            font-size: 1.2rem;
        }

        /* Unidad relativa: % */
        .ejemplo-porcentaje {
            width: 80%;
        }
    </style>
</head>
<body>
    <p class="ejemplo-nombre">Texto darkblue sobre fondo lightyellow.</p>
    <p class="ejemplo-hex">Texto blanco sobre fondo #1a5276.</p>
    <p class="ejemplo-rgb">Texto rgb(255,255,255) sobre rgb(46,134,193).</p>
    <p class="ejemplo-rgba">Fondo con 30% transparencia.</p>
    <p class="ejemplo-px">font-size: 16px, width: 300px.</p>
    <div class="ejemplo-em-padre">
        <p class="ejemplo-em-hijo">Hijo: 1.5em = 150% del padre.</p>
    </div>
    <p class="ejemplo-rem">font-size: 1.2rem (= 19.2px).</p>
    <div class="ejemplo-porcentaje"><p>width: 80% del padre.</p></div>
</body>
</html>
```

---

## Colores en CSS

Hay 4 formas principales de definir colores:

### 1. Colores por nombre

```css
color: red;
color: blue;
color: darkblue;
color: lightyellow;
background-color: gray;
```

CSS tiene **140 nombres de colores** predefinidos. Son faciles de recordar pero limitados.

| Nombre | Color |
|--------|-------|
| `red` | Rojo |
| `blue` | Azul |
| `green` | Verde |
| `darkblue` | Azul oscuro |
| `lightyellow` | Amarillo claro |
| `gray` | Gris |
| `white` | Blanco |
| `black` | Negro |

### ¿Cuando usarlo?

- Pruebas rapidas
- Colores muy basicos
- No para disenos profesionales (no tienes control exacto del tono)

---

### 2. Colores hexadecimales

```css
color: #ff0000;        /* Rojo puro */
color: #0000ff;        /* Azul puro */
color: #1a5276;        /* Azul personalizado */
background-color: #f5f5f5; /* Gris muy claro */
```

El formato es `#RRGGBB` donde:
- `RR` = cantidad de rojo (00 a ff)
- `GG` = cantidad de verde (00 a ff)
- `BB` = cantidad de azul (00 a ff)

Cada par va de `00` (nada) a `ff` (maximo) en hexadecimal (= 0 a 255 en decimal).

### Tabla de referencia

| Hex | Color | Explicacion |
|-----|-------|-------------|
| `#000000` | Negro | Sin color |
| `#ffffff` | Blanco | Todos los colores al maximo |
| `#ff0000` | Rojo | Solo rojo al maximo |
| `#00ff00` | Verde | Solo verde al maximo |
| `#0000ff` | Azul | Solo azul al maximo |
| `#1a5276` | Azul oscuro | Mezcla personalizada |

### Atajos

Cuando los pares son iguales, puedes escribir la mitad:

```css
color: #ffffff;  /* Igual que */
color: #fff;     /* Atajo */

color: #000000;  /* Igual que */
color: #000;     /* Atajo */

color: #f39c12;  /* NO se puede acortar (pares diferentes) */
```

---

### 3. Colores RGB

```css
color: rgb(255, 0, 0);      /* Rojo puro */
color: rgb(0, 0, 255);      /* Azul puro */
color: rgb(46, 134, 193);   /* Azul personalizado */
background-color: rgb(245, 245, 245); /* Gris muy claro */
```

El formato es `rgb(rojo, verde, azul)` donde:
- Cada valor va de `0` (nada) a `255` (maximo).
- Es mas intuitivo que hexadecimal para muchas personas.

### Conversion

| Hex | RGB | Color |
|-----|-----|-------|
| `#ff0000` | `rgb(255, 0, 0)` | Rojo |
| `#0000ff` | `rgb(0, 0, 255)` | Azul |
| `#1a5276` | `rgb(26, 82, 118)` | Azul oscuro |

---

### 4. Colores RGBA (con transparencia)

```css
background-color: rgba(46, 134, 193, 0.3);
border: 1px solid rgba(46, 134, 193, 0.5);
```

El formato es `rgba(rojo, verde, azul, alfa)` donde:
- Los primeros 3 valores son como RGB (0 a 255).
- El cuarto valor `alfa` es la **transparencia**: de `0` (totalmente transparente) a `1` (totalmente opaco).

### Ejemplos de transparencia

```css
rgba(255, 0, 0, 1.0);   /* Rojo solido (sin transparencia) */
rgba(255, 0, 0, 0.5);   /* Rojo al 50% de transparencia */
rgba(255, 0, 0, 0.1);   /* Rojo casi invisible */
rgba(255, 0, 0, 0.0);   /* Rojo totalmente invisible */
```

---

## Resumen de colores

| Formato | Sintaxis | Transparencia | Uso recomendado |
|---------|----------|---------------|-----------------|
| Nombre | `red` | No | Pruebas rapidas |
| Hex | `#1a5276` | No | El mas usado profesionalmente |
| RGB | `rgb(26, 82, 118)` | No | Cuando prefieras numeros decimales |
| RGBA | `rgba(26, 82, 118, 0.5)` | Si | Cuando necesites transparencia |

---

## Unidades de medida en CSS

### Unidades absolutas: `px`

```css
font-size: 16px;
width: 300px;
padding: 20px;
margin: 15px;
```

- `px` = pixeles. No cambian segun el dispositivo o el contexto.
- Son **fijas** y predecibles.
- **Desventaja**: no se adaptan al tamano de pantalla del usuario.

### Analogia

```
px = Regla fija de 30cm

Siempre mide 30cm, sin importar donde la uses.
En una pantalla pequena o grande, 300px se ven del mismo tamano absoluto.
```

---

### Unidades relativas: `em`

```css
.padre {
    font-size: 20px;
}

.hijo {
    font-size: 1.5em;  /* = 30px (150% de 20px) */
}
```

- `em` es relativo al **font-size del elemento padre**.
- `1em` = el font-size del padre.
- `1.5em` = el 150% del font-size del padre.
- Si el padre tiene `font-size: 20px`, entonces `1em` = `20px`.

### Caracteristica especial: `em` se acumula

```css
.padre { font-size: 20px; }
.hijo { font-size: 1.5em; }      /* = 30px */
.nieto { font-size: 1.5em; }     /* = 45px (150% de 30px, no de 20px) */
```

Cada nivel multiplica respecto a su padre inmediato. Esto puede causar tamanos inesperados si anidas muchos niveles.

### Analogia

```
em = "Veces el tamano de mi padre"

Si mi padre mide 20cm y yo soy 1.5em:
→ Mido 1.5 x 20cm = 30cm
```

---

### Unidades relativas: `rem`

```css
html {
    font-size: 16px;   /* Tamaño base del navegador */
}

.ejemplo {
    font-size: 1.2rem;  /* = 19.2px (120% de 16px) */
}
```

- `rem` = "root em". Es relativo al **font-size del elemento raiz** (`<html>`).
- No importa en que nivel de anidamiento estes, `1rem` siempre es el mismo tamano.
- Por defecto, el navegador usa `16px` como tamano base.
- **Ventaja**: es predecible, no se acumula como `em`.

### Comparacion `em` vs `rem`

```css
/* em: relativo al padre inmediato */
.padre { font-size: 20px; }
  .hijo { font-size: 2em; }       /* = 40px (2 x 20px) */
    .nieto { font-size: 2em; }    /* = 80px (2 x 40px) ← Se acumula */

/* rem: relativo a la raiz (html) */
.padre { font-size: 20px; }
  .hijo { font-size: 2rem; }       /* = 32px (2 x 16px) */
    .nieto { font-size: 2rem; }    /* = 32px (2 x 16px) ← No se acumula */
```

### Analogia

```
rem = "Veces el tamano de la regla maestra"

Si la regla maestra (html) mide 16px y yo soy 1.2rem:
→ Mido 1.2 x 16px = 19.2px
→ No importa si estoy dentro de un padre grande o pequeno.
```

---

### Unidades relativas: `%`

```css
.contenedor {
    width: 80%;  /* 80% del ancho del padre */
}
```

- `%` es relativo al **elemento padre**.
- Para `width`: es un porcentaje del ancho del padre.
- Para `font-size`: es un porcentaje del font-size del padre.
- Para `height`: es un porcentaje de la altura del padre (si el padre tiene altura definida).

### Analogia

```
% = "Que porcentaje de mi padre ocupo"

Si mi padre mide 500px de ancho y yo soy width: 80%:
→ Mi ancho es 80% de 500px = 400px
```

---

## Resumen de unidades

| Unidad | Tipo | Relativo a | Ejemplo |
|--------|------|-----------|---------|
| `px` | Absoluta | Nada (fijo) | `font-size: 16px` |
| `em` | Relativa | Font-size del padre | `font-size: 1.5em` |
| `rem` | Relativa | Font-size de `<html>` | `font-size: 1.2rem` |
| `%` | Relativa | Elemento padre | `width: 80%` |

---

## ¿Cuando usar cada unidad?

| Propiedad | Unidad recomendada | Por que |
|-----------|-------------------|---------|
| `font-size` | `rem` | Predecible, se adapta al usuario |
| `width` | `%` o `rem` | Flexible para disenos responsivos |
| `padding` / `margin` | `rem` o `em` | Escala con el tamano del texto |
| `border` | `px` | Los bordes no necesitan escalar |
| `height` | `auto` o `rem` | Deja que el contenido defina la altura |

### Regla general

- **`rem`** para tamanos de texto y espaciados.
- **`%`** para anchos de contenedores.
- **`px`** solo para bordes, sombras y cosas que no deben escalar.
- **`em`** con cuidado, solo cuando quieras que escale con el padre.

---

## Paleta de colores profesional

Para el perfil de Yamil N usamos esta paleta:

```
┌────────────┬────────────┬────────────┬────────────┬────────────┐
│  Primario  │ Secundario │   Acento   │   Fondo    │   Texto    │
│  #1a5276   │  #2e86c1   │  #f39c12   │  #f5f5f5   │   #333     │
│ Azul oscuro│ Azul claro │  Naranja   │  Gris claro│ Gris oscuro│
└────────────┴────────────┴────────────┴────────────┴────────────┘
```

### Como elegir una paleta

1. **Color primario**: el color principal de tu marca/sitio.
2. **Color secundario**: complementa al primario.
3. **Color de acento**: para botones, enlaces, cosas importantes.
4. **Color de fondo**: generalmente gris muy claro o blanco.
5. **Color de texto**: gris oscuro (nunca negro puro, es muy duro).

---

## Errores comunes

### Error 1: Usar solo negro para el texto

```css
/* INCORRECTO: negro puro es muy duro para la vista */
p { color: #000000; }

/* CORRECTO: gris oscuro es mas suave */
p { color: #333; }
```

### Error 2: Usar em para todo

```css
/* PROBLEMATICO: em se acumula en niveles anidados */
.padre { font-size: 20px; }
  .hijo { font-size: 1.5em; }      /* 30px */
    .nieto { font-size: 1.5em; }   /* 45px */
      .bisnieto { font-size: 1.5em; } /* 67.5px ← Demasiado grande */

/* MEJOR: rem no se acumula */
.padre { font-size: 20px; }
  .hijo { font-size: 1.5rem; }      /* 24px */
    .nieto { font-size: 1.5rem; }   /* 24px ← Igual, predecible */
```

### Error 3: Confundir #fff con transparent

```css
/* INCORRECTO: #fff es blanco solido, no transparente */
.fondo { background-color: #fff; }

/* CORRECTO: usa rgba para transparencia */
.fondo { background-color: rgba(255, 255, 255, 0.5); }
```

### Error 4: Usar unidades muy pequenas

```css
/* PROBLEMATICO: texto muy pequeno, dificil de leer */
p { font-size: 10px; }

/* CORRECTO: minimo 14px para texto legible */
p { font-size: 16px; }
```

---

## Ejercicio practico

1. Abre el `index.html` en tu navegador.
2. Identifica los 4 tipos de colores (nombre, hex, RGB, RGBA).
3. Cambia el color primario de la paleta a otro tono.
4. Convierte todos los colores hexadecimales a RGB.
5. Agrega un elemento con fondo `rgba(0, 0, 0, 0.5)` y observa la transparencia.
6. Crea un contenedor con `width: 50%` y otro con `width: 300px`. ¿Cual es mas flexible?
7. Cambia el font-size del `<html>` a `20px` y observa como cambian los `rem`.
8. Usa `em` en un elemento anidado 3 niveles y verifica la acumulacion.
9. Crea tu propia paleta de 5 colores para un proyecto personal.
