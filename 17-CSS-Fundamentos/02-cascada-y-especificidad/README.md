# 02 - Cascada y Especificidad

## Que aprendemos aqui?

Aprenderas como CSS **resuelve conflictos** entre reglas. Cuando dos reglas apuntan al mismo elemento y dicen cosas diferentes, CSS tiene un sistema de decisiones claro: la **cascada** y la **especificidad**. Entender esto es como conocer las reglas del juego: deja de ser frustrante y se vuelve predecible.

---

## Codigo completo

```css
/* ===== ORDEN DE LA CASCADA ===== */
/* La ultima regla gana (si tienen la misma especificidad) */
.parrafo {
    color: red;
}
.parrafo {
    color: blue;   /* Gana este: es el ultimo */
}

/* ===== ESPECIFICIDAD ===== */
/* inline > ID > clase > tag */

/* Tag: especificidad 0-0-1 */
p {
    color: green;
}

/* Clase: especificidad 0-1-0 */
.texto-azul {
    color: blue;
}

/* ID: especificidad 1-0-0 */
#titulo-principal {
    color: red;
}

/* inline: gana sobre todo */
/* <p style="color: purple;">...</p> */

/* ===== !important ===== */
.regla-fuerte {
    color: orange !important;  /* Gana sobre todo (exceptro otro !important) */
}

/* ===== HERENCIA ===== */
/* Los hijos heredan algunas propiedades del padre */
.padre {
    color: #1a5276;    /* Los hijos heredan este color */
    font-family: Arial; /* Los hijos heredan esta fuente */
}
```

---

## La Cascada: el sistema de decisiones

Cuando CSS encuentra dos reglas que apuntan al mismo elemento, usa **3 filtros** en este orden:

```
Paso 1: !important   -->  Si uno tiene !important, ese gana
Paso 2: Especificidad -->  Se calcula un puntaje para cada regla
Paso 3: Orden        -->  Si hay empate, la ultima regla escrita gana
```

### Analogia del periodico

```
Imagina que eres el editor de un periodico y recibes
3 instrucciones para el titulo de primera plana:

  Reportero A: "Usa letra roja"     (clase)
  Reportero B: "Usa letra azul"     (ID)
  Reportero C: "Usa letra verde"    (tag)

Tu decides segun la JERARQUIA:
  1. El director (inline) siempre tiene razon
  2. El editor jefe (ID) manda sobre todos
  3. El editor de seccion (clase) manda sobre reporteros
  4. El reportero (tag) tiene la voz mas baja
```

---

## Especificidad: el sistema de puntaje

Cada selector tiene un "puntaje" en formato **ID-Clase-Tag**:

```
┌──────────────────────────────────────────────────┐
│         CALCULO DE ESPECIFICIDAD                 │
├──────────────────────────────────────────────────┤
│                                                  │
│  Inline style    =  1 - 0 - 0   (gana todo)     │
│  ID (#algo)      =  0 - 1 - 0                    │
│  Clase (.algo)   =  0 - 0 - 1                    │
│  Atributo        =  0 - 0 - 1                    │
│  Pseudo-clase    =  0 - 0 - 1                    │
│  Tag (div, p)    =  0 - 0 - 0   (el mas bajo)   │
│  Universal (*)   =  0 - 0 - 0   (no suma)        │
│                                                  │
└──────────────────────────────────────────────────┘
```

### Ejemplos de calculo

```
Selector                    ID  Clase  Tag   Total
─────────────────────────────────────────────────
p                           0    0      1     0-0-1
.parrafo                    0    1      0     0-1-0
#titulo                     1    0      0     1-0-0
p.parrafo                   0    1      1     0-1-1
#titulo .parrafo p          1    1      1     1-1-1
div#titulo .texto span      1    1      2     1-1-2
```

### Como comparar

```
1-0-0  >  0-99-99    (un ID siempre gana sobre cualquier numero de clases)
0-1-0  >  0-0-99    (una clase siempre gana sobre cualquier numero de tags)

Es como un sistema de posiciones:
  Centenas (ID) > Decenas (clase) > Unidades (tag)
```

---

## Tabla de comparacion de selectores

| Selector | Ejemplo | Especificidad | Fuerza |
|----------|---------|---------------|--------|
| Universal | `*` | 0-0-0 | La mas baja |
| Tag | `p`, `div`, `h1` | 0-0-1 | Muy baja |
| Clase | `.texto`, `.tarjeta` | 0-1-0 | Media |
| Atributo | `[type="text"]` | 0-1-0 | Media |
| Pseudo-clase | `:hover`, `:first-child` | 0-1-0 | Media |
| ID | `#titulo`, `#perfil` | 1-0-0 | Alta |
| Inline | `style="color: red"` | 1-0-0+ | La mas alta |
| !important | `color: red !important` | Infinita | Gana sobre todo |

---

## Orden de los 3 filtros

```
┌──────────────────────────────────────────────────┐
│  FLUJO DE DECISION DE CSS                        │
│                                                  │
│  Regla A vs Regla B apuntan al mismo elemento    │
│                                                  │
│  Paso 1: Alguna tiene !important?                │
│          Si  --> Esa gana                        │
│          No  --> Pasar a paso 2                  │
│                                                  │
│  Paso 2: Comparar especificidad                  │
│          Si  --> La mayor gana                   │
│          No  --> Pasar a paso 3                  │
│                                                  │
│  Paso 3: Cual aparece ultima en el CSS?          │
│          La ultima gana                          │
│                                                  │
└──────────────────────────────────────────────────┘
```

---

## Herencia

Algunas propiedades CSS se **heredan** de padre a hijo automaticamente:

### Propiedades que SI se heredan

| Propiedad | Ejemplo |
|-----------|---------|
| `color` | Si el padre es azul, los hijos tambien |
| `font-family` | La fuente se pasa a los hijos |
| `font-size` | El tamano de letra se hereda |
| `text-align` | La alineacion del texto se hereda |
| `line-height` | La altura de linea se hereda |
| `letter-spacing` | El espaciado entre letras se hereda |
| `visibility` | Si el padre es invisible, los hijos tambien |
| `cursor` | El cursor se hereda |

### Propiedades que NO se heredan

| Propiedad | Por que no |
|-----------|------------|
| `margin` | Cada caja controla su propio espacio |
| `padding` | Cada caja controla su propio relleno |
| `border` | Cada caja tiene su propio borde |
| `width` / `height` | Cada caja tiene su propio tamano |
| `background` | El fondo no se pasa a los hijos |
| `display` | Cada elemento decide como mostrarse |
| `position` | Cada elemento controla su posicion |

### Analogia del libro

```
Herencia = Como un libro pasa su idioma a sus capitulos

  Libro en espanol
    Capitulo 1: hereda espanol (automatico)
    Capitulo 2: hereda espanol (automatico)
    Capitulo 3: hereda espanol (automatico)

  Pero cada capitulo decide SU PROPIO:
    - Tamano de letra (font-size: puede cambiar)
    - Color de fondo (background: no se hereda)
    - Margenes (margin: no se hereda)
```

---

## !important: el martillo

```css
.regla-normal {
    color: blue;
}

.regla-fuerte {
    color: red !important;   /* Gana siempre */
}
```

### Reglas de !important

| Regla | Detalle |
|-------|---------|
| Gana sobre todo | Excepto otro !important |
| Si hay dos !important | Gana el de mayor especificidad |
| Si hay empate con !important | Gana el ultimo escrito |
| Se hereda | Los hijos heredan el !important del padre |

### Cuando usarlo

- **Nunca** en codigo normal.
- Solo para **overrides urgentes** en frameworks o herramientas externas.
- Si lo usas mucho, tu CSS es dificil de mantener.

---

## Ejemplos con el perfil de Yamil N

### Ejemplo 1: Conflicto entre tag y clase

```css
p {
    color: red;           /* especificidad: 0-0-1 */
}

.perfil {
    color: #1a5276;       /* especificidad: 0-1-0 --> GANA */
}
```

```html
<p class="perfil">Yamil N - Ingeniero Industrial</p>
<!-- Texto en #1a5276 (azul oscuro), porque la clase gana al tag -->
```

### Ejemplo 2: Conflicto entre clase e ID

```css
.tarjeta {
    background-color: white;     /* especificidad: 0-1-0 */
}

#perfil-yamil {
    background-color: #f39c12;   /* especificidad: 1-0-0 --> GANA */
}
```

```html
<div class="tarjeta" id="perfil-yamil">
    Contenido de Yamil N
</div>
<!-- Fondo #f39c12 (naranja), porque el ID gana a la clase -->
```

### Ejemplo 3: Mismo selector, diferente orden

```css
.nombre {
    font-size: 18px;    /* especificidad: 0-1-0 */
}

.nombre {
    font-size: 24px;    /* especificidad: 0-1-0, PERO ES EL ULTIMO --> GANA */
}
```

```html
<span class="nombre">Yamil N</span>
<!-- font-size: 24px, porque la segunda regla aparece despues -->
```

---

## Reglas importantes

| Regla | Detalle |
|-------|---------|
| La cascada tiene 3 filtros | !important, especificidad, orden |
| Inline siempre gana | `style="..."` tiene especificidad maxima |
| ID gana a clase | Un ID siempre vence a cualquier numero de clases |
| Clase gana a tag | Una clase siempre vence a cualquier numero de tags |
| La ultima regla gana | Si hay empate de especificidad, gana la ultima escrita |
| !important es peligroso | Usalo solo en casos extremos |
| La herencia no es universal | Solo algunas propiedades se heredan |
| Especificidad se acumula | `div#id .clase p` = 1 ID + 1 clase + 2 tags = 1-1-2 |

---

## Errores comunes

### Error 1: Pelear contra la cascada sin entenderla

```css
/* PROBLEMA: el parrafo NO se pone azul */
p {
    color: red;
}

.perfil {
    color: blue;
}

/* El parrafo tiene class="perfil" pero TAMBIEN tiene un tag p.
   La especificidad de .perfil (0-1-0) gana sobre p (0-0-1).
   El parrafo SI se pone azul. Pero si fuera al reves... */

/* PROBLEMA real: */
#perfil {
    color: red;         /* 1-0-0 */
}

.texto {
    color: blue;        /* 0-1-0 --> PIERDE */
}
```

```css
/* SOLUCION: usar selectores con la misma o mayor especificidad */
#perfil.texto {
    color: blue;        /* 1-1-0 --> GANA */
}
```

### Error 2: Abusar de !important

```css
/* PROBLEMA: CSS inmanejable */
.titulo { color: red !important; }
.subtitulo { color: blue !important; }
.texto { color: green !important; }
/* Ahora necesitas !important para todo... */

/* SOLUCION: organizar selectores por especificidad clara */
.titulo { color: red; }
.subtitulo { color: blue; }
.texto { color: green; }
```

### Error 3: Esperar herencia donde no la hay

```css
/* PROBLEMA: el padding NO se hereda */
.padre {
    padding: 20px;
    background-color: #f39c12;
}
/* Los hijos tendran el fondo naranja, pero NO tendran padding propio */

/* SOLUCION: dar padding a cada hijo que lo necesite */
.padre > .hijo {
    padding: 20px;
}
```

### Error 4: Confundir especificidad con orden

```css
/* PROBLEMA: creer que el orden siempre manda */
#titulo { color: red; }     /* 1-0-0 */
.texto { color: blue; }     /* 0-1-0 --> PIERDE aunque va despues */

/* SOLUCION: entender que la especificidad manda antes que el orden */
.texto { color: blue; }     /* 0-1-0 */
#titulo { color: red; }     /* 1-0-0 --> GANA por especificidad */
```

---

## Ejercicios practicos

1. Abre el `index.html` en tu navegador.
2. Abre las DevTools (F12) e inspecciona el nombre "Yamil N".
3. En la pestana de estilos, veras que regla gana y cual esta tachada.
4. Agrega una regla inline al nombre y observa como cambia.
5. Crea un ID y una clase que apunten al mismo elemento. Cambia el orden en el CSS y observa que NO importa el orden: el ID siempre gana.
6. Usa `!important` en una clase y verifica que vence al ID.
7. Inspecciona un parrafo hijo de un contenedor con `color`. Veras que el color se hereda.
8. Cambia el `background-color` del padre y verifica que NO se hereda.
