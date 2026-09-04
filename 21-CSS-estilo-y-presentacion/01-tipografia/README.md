# 01 - Tipografia CSS

## ¿Que aprendemos aqui?

Aprenderas a controlar **todo lo relacionado con texto** en tus paginas web: que fuente usar, que tamano, que grosor, cuanto espacio entre letras y entre lineas. La tipografia es el 90% de lo que el usuario ve en una pagina web.

---

## Analogia: La tipografia es como elegir la ropa

Imagina que tu texto es una persona:

```
TEXTO SIN ESTILO:              TEXTO CON BUENA TIPOGRAFIA:
                               
┌──────────────────┐          ┌──────────────────┐
│ Texto plano      │          │                  │
│ Sin personalidad │          │  Elegante        │
│ Aburrido         │          │  Legible         │
│ Todo igual       │          │  Con jerarquia   │
│                  │          │                  │
└──────────────────┘          └──────────────────┘

Como ir en        =           Como ir vestido
pijama a una                   para una reunion
reunion formal                 importante
```

---

## Las 6 propiedades tipograficas esenciales

| Propiedad | ¿Que hace? | Ejemplo |
|-----------|------------|---------|
| `font-family` | Que fuente usar | `'Montserrat', sans-serif` |
| `font-size` | Tamano del texto | `16px`, `1.5rem` |
| `font-weight` | Grosor/negrita | `400` (normal), `700` (bold) |
| `line-height` | Espacio entre lineas | `1.5`, `1.8` |
| `letter-spacing` | Espacio entre letras | `2px`, `-0.5px` |
| `text-align` | Alineacion del texto | `center`, `left`, `justify` |

---

## 1. font-family: ¿Que fuente usar?

### Fuentes del sistema vs Google Fonts

```
FUENTES DEL SISTEMA (seguras):        GOOGLE FONTS (personalizadas):
┌─────────────────────────┐          ┌─────────────────────────┐
│ Arial                   │          │ Montserrat              │
│ Helvetica               │          │ Open Sans               │
│ Times New Roman         │          │ Roboto                  │
│ Georgia                 │          │ Lato                    │
│ Courier New             │          │ Poppins                 │
└─────────────────────────┘          └─────────────────────────┘
Ventaja: Siempre disponibles         Ventaja: Mas variedad y estilo
Desventaja: Limitadas                Desventaja: Requiere conexion
```

### Como usar Google Fonts

```css
/* Paso 1: Importar en el <head> del HTML */
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet">

/* Paso 2: Usar en CSS */
body {
    font-family: 'Montserrat', sans-serif;
}
```

### La regla del "fallback"

Siempre pon fuentes de respaldo por si la principal no carga:

```css
/* BIEN: Tiene fallback */
font-family: 'Montserrat', sans-serif;

/* MAL: Sin fallback, si falla se ve feo */
font-family: 'Montserrat';
```

---

## 2. font-size: Tamanos de texto

### Unidades de medida

| Unidad | Tipo | ¿Cuando usarla? |
|--------|------|-----------------|
| `px` | Absoluta | Tamanos fijos, bordes |
| `em` | Relativa al padre | Espaciados proporcionales |
| `rem` | Relativa a la raiz (html) | Tamanos de texto, accesibilidad |
| `%` | Relativa al padre | Layouts fluidos |

### Escala tipografica recomendada

```
Escala Tipografica (base 16px):

40px ─── Titulo principal (H1)
32px ─── Titulo de seccion (H2)
24px ─── Subtitulo (H3)
20px ─── Texto grande
18px ─── Parrafo destacado
16px ─── Texto base (body) ← PUNTO DE PARTIDA
14px ─── Texto secundario
12px ─── Notas al pie, detalles
```

### Ejemplo practico

```css
h1 { font-size: 40px; }    /* Titulo grande */
h2 { font-size: 32px; }    /* Subtitulo */
p  { font-size: 16px; }    /* Texto normal */
small { font-size: 14px; } /* Texto pequeno */
```

---

## 3. font-weight: Grosor del texto

### Valores numericos

| Valor | Nombre | ¿Cuando usarlo? |
|-------|--------|-----------------|
| `300` | Light | Texto elegante, secundario |
| `400` | Normal | Texto regular (default) |
| `600` | Semi-bold | Subtitulos destacados |
| `700` | Bold | Titulos, enfasis fuerte |
| `900` | Black | Muy raro, solo para impacto maximo |

### Ejemplo con Yamil N

```css
.profile-name {
    font-weight: 700;  /* Negrita para el nombre */
}

.profile-title {
    font-weight: 600;  /* Semi-bold para el cargo */
}

.profile-bio {
    font-weight: 300;  /* Light para la descripcion */
}
```

---

## 4. line-height: Espacio entre lineas

### ¿Por que importa?

```
line-height: 1 (MUY JUNTO)         line-height: 1.5 (IDEAL)
┌────────────────────────┐          ┌────────────────────────┐
│Linea 1                 │          │                        │
│Linea 2                 │          │ Linea 1                │
│Linea 3                 │          │                        │
│Se ve apretado          │          │ Linea 2                │
│Cansado de leer         │          │                        │
└────────────────────────┘          │ Linea 3                │
                                    │                        │
                                    │ Se ve comodo           │
                                    │ Facil de leer          │
                                    └────────────────────────┘
```

### Valores recomendados

| Contexto | line-height | Por que |
|----------|-------------|---------|
| Titulos | `1.1 - 1.2` | Titulos cortos, no necesitan mucho espacio |
| Parrafos | `1.5 - 1.8` | Texto largo necesita respirar |
| Captions | `1.3 - 1.4` | Texto corto, espacio moderado |

---

## 5. letter-spacing: Espacio entre letras

### ¿Cuando usarlo?

```
letter-spacing: -1px        letter-spacing: 0        letter-spacing: 3px
┌──────────────────┐        ┌──────────────────┐     ┌──────────────────┐
│ TEXTPRO S.A.     │        │ TEXTPRO S.A.     │     │ T E X T P R O    │
│ Compacto         │        │ Normal           │     │ Elegante         │
│ Para logos       │        │ Estandar         │     │ Para titulos     │
└──────────────────┘        └──────────────────┘     └──────────────────┘
```

### Reglas de uso

| Uso | letter-spacing | Ejemplo |
|-----|----------------|---------|
| Titulos en mayusculas | `2px - 5px` | Mas aire, mas elegante |
| Texto normal | `0` | No tocar |
| Texto muy pequeno | `-0.5px` | Mejora legibilidad |
| Logos | `3px - 8px` | Aspecto premium |

---

## 6. Combinacion tipografica (Font Pairing)

### La regla de las 2 fuentes

```
COMBINACION CORRECTA:              COMBINACION INCORRECTA:
                                   
┌─────────────────────┐           ┌─────────────────────┐
│ Montserrat (Titulos)│           │ 5 fuentes diferentes│
│ Open Sans (Cuerpo)  │           │ en la misma pagina  │
│                     │           │                     │
│ 2 fuentes = Elegante│           │ Caos visual         │
└─────────────────────┘           └─────────────────────┘
```

### Combinaciones probadas

| Titulo | Cuerpo | Estilo |
|--------|--------|--------|
| Montserrat | Open Sans | Moderno y limpio |
| Poppins | Lato | Amigable y profesional |
| Roboto Slab | Roboto | Tecnico y serio |
| Playfair Display | Source Sans Pro | Elegante y clasico |

---

## Ejemplo completo: Perfil de Yamil N

```css
/* Importar fuentes */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Open+Sans:wght@300;400;600&display=swap');

body {
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    line-height: 1.6;
    color: #333;
}

h1, h2, h3 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
}

.profile-name {
    font-size: 32px;
    font-weight: 700;
    color: #1a5276;
}

.profile-title {
    font-size: 18px;
    font-weight: 600;
    color: #2e86c1;
}

.profile-bio {
    font-size: 16px;
    font-weight: 300;
    line-height: 1.8;
}
```

---

## Tabla de errores comunes

| Error | ¿Por que esta mal? | Solucion |
|-------|-------------------|----------|
| Usar mas de 3 fuentes | Caos visual, falta de identidad | Maximo 2 fuentes: 1 para titulos, 1 para cuerpo |
| font-size menor a 12px | Ilegible en la mayoria de pantallas | Minimo 14px para texto legible |
| line-height: 1 en parrafos | Texto apretado, dificil de leer | Usar 1.5 - 1.8 para parrafos |
| No poner fallback | Si la fuente no carga, se ve mal | Siempre: `'Fuente', sans-serif` |
| Usar px para todo | No es accesible, no escala | Usar rem para tamanos de texto |
| letter-spacing en texto lowercase | Se ve extrano, dificulta lectura | Solo en MAYUSCULAS |

---

## Reglas de oro de tipografia

| # | Regla | Analogia |
|---|-------|----------|
| 1 | **Maximo 2 fuentes** | Como un traje: camisa + pantalon, no 5 piezas |
| 2 | **Minimo 14px para texto** | Si tienes que entrecerrar los ojos, es muy pequeno |
| 3 | **line-height 1.5+ para parrafos** | El texto necesita respirar |
| 4 | **Contraste adecuado** | Texto oscuro en fondo claro o viceversa |
| 5 | **Jerarquia clara** | Titulos grandes, parrafos medianos, notas pequenas |
| 6 | **letter-spacing solo en MAYUSCULAS** | En minusculas se ve raro |

---