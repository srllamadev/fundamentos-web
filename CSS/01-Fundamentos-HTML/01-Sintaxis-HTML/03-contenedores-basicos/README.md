# 03 - Contenedores Básicos: `<div>` y `<span>`

## ¿Qué aprendemos aquí?

En esta lección aprenderás sobre los dos contenedores más fundamentales de HTML: `<div>` y `<span>`. Estos no muestran contenido por sí mismos, pero sirven para **agrupar y organizar** otros elementos. La diferencia clave entre ellos es el tipo de visualización: **bloque** vs **línea**.

---

## Código completo

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Yamil Navi- Ingeniero Industrial</title>
</head>
<body>

    <div>
        <h1>Yamil N</h1>
        <h2>Ingeniero Industrial | Especialista en Optimización de Procesos</h2>
    </div>

    <div>
        <h3>Perfil Profesional</h3>
        <p>Ingeniero industrial con más de <span>8 años de experiencia</span> en la industria manufacturera y de logística. Apasionado por la <span>mejora continua</span>, la automatización de procesos y la implementación de metodologías <span>Lean Manufacturing</span>. Orientado a resultados con capacidad demostrada para liderar equipos multidisciplinarios.</p>
    </div>

    <div>
        <h3>Experiencia Laboral</h3>

        <div>
            <h4>Gerente de Operaciones - TextilPro S.A. <span>(2020 - Presente)</span></h4>
            <p>Liderazgo de un equipo de 45 personas en la planta de producción.</p>
        </div>

        <div>
            <h4>Coordinador de Planta - LogiPack Bolivia <span>(2017 - 2020)</span></h4>
            <p>Rediseño de layout de planta que incrementó la capacidad productiva en un 25%.</p>
        </div>

        <div>
            <h4>Analista de Procesos - ManufacturaGlobal <span>(2015 - 2017)</span></h4>
            <p>Levantamiento y análisis de procesos productivos.</p>
        </div>
    </div>

    <div>
        <h3>Datos de Contacto</h3>
        <p>Email: <span>yamil.ejemplo@email.com</span></p>
        <p>Teléfono: <span>+591 7070707070</span></p>
        <p>Ciudad: <span>La Paz, Bolivia</span></p>
    </div>

</body>
</html>
```

---

## La etiqueta `<div>` - Contenedor de bloque

### ¿Qué es?

```html
<div>
    <!-- Contenido aquí -->
</div>
```

- `<div>` es un **contenedor genérico de nivel de bloque**.
- "Nivel de bloque" significa que **ocupa todo el ancho disponible** y **empieza en una nueva línea**.
- Es como una **caja** donde puedes meter otros elementos HTML dentro.
- Por sí solo no tiene ninguna apariencia visual especial (sin CSS es invisible).
- Su propósito es **agrupar elementos** para darles estructura.

### Analogía

```
<div> = Una caja grande donde puedes meter cosas

┌──────────────────────────────────────┐
│  <div>                               │
│  ┌────────────────────────────────┐  │
│  │ <h1>Nombre</h1>                │  │
│  │ <h2>Profesión</h2>             │  │
│  └────────────────────────────────┘  │
└──────────────────────────────────────┘
```

### Comportamiento de bloque

```html
<div>Primer bloque</div>
<div>Segundo bloque</div>
<div>Tercer bloque</div>
```

Se ven así (cada uno en su propia línea):

```
┌────────────────────────┐
│ Primer bloque          │
└────────────────────────┘
┌────────────────────────┐
│ Segundo bloque         │
└────────────────────────┘
┌────────────────────────┐
│ Tercer bloque          │
└────────────────────────┘
```

---

## La etiqueta `<span>` - Contenedor de línea

### ¿Qué es?

```html
<span>texto dentro de una línea</span>
```

- `<span>` es un **contenedor genérico de línea**.
- "De línea" significa que **solo ocupa el espacio de su contenido** y **NO empieza en una nueva línea**.
- Se usa para envolver **pequeñas porciones de texto** dentro de un párrafo u otro elemento.
- Por sí solo no tiene ninguna apariencia visual (sin CSS es invisible).

### Analogía

```
<span> = Un marcatextos que resalta una parte del texto

Párrafo normal con una parte <span>resaltada</span> que sigue en la misma línea.
```

### Comportamiento de línea

```html
<p>Mi nombre es <span>Yamil</span> y soy ingeniero.</p>
```

Se ve así (todo en la misma línea):

```
Mi nombre es Yamil y soy ingeniero.
               ^^^^^^^
               Solo "Yamil" está dentro del span,
               pero no rompe la línea
```

---

## Diferencia clave: Bloque vs Línea

| Característica | `<div>` (Bloque) | `<span>` (Línea) |
|----------------|-------------------|-------------------|
| ¿Empieza en nueva línea? | Sí | No |
| ¿Ocupa todo el ancho? | Sí | Solo lo que ocupa su contenido |
| ¿Puede contener otros elementos de bloque? | Sí | No |
| ¿Se usa para agrupar secciones grandes? | Sí | No |
| ¿Se usa para marcar texto dentro de un párrafo? | No | Sí |
| Análogo en el mundo real | Una caja/contenedor | Un marcatextos/resaltador |

### Ejemplo visual comparando ambos:

```html
<!-- div: cada uno en su propia línea (como cajas apiladas) -->
<div>Sección 1</div>
<div>Sección 2</div>

Resultado:
┌────────────┐
│ Sección 1  │
└────────────┘
┌────────────┐
│ Sección 2  │
└────────────┘


<!-- span: todo en la misma línea (como palabras resaltadas) -->
<p>Texto con <span>parte resaltada</span> que sigue normal.</p>

Resultado:
Texto con parte resaltada que sigue normal.
          ^^^^^^^^^^^^^^^^
          solo esto es el span, inline con el resto
```

---

## Anidamiento: `<div>` dentro de `<div>`

Una de las grandes ventajas de `<div>` es que puedes **anidar** (meter) unos dentro de otros:

```html
<div> <!-- Contenedor principal de experiencia -->
    <h3>Experiencia Laboral</h3>

    <div> <!-- Contenedor de trabajo 1 -->
        <h4>Gerente de Operaciones</h4>
        <p>Descripción del trabajo...</p>
    </div>

    <div> <!-- Contenedor de trabajo 2 -->
        <h4>Coordinador de Planta</h4>
        <p>Descripción del trabajo...</p>
    </div>

</div>
```

Esto crea una estructura de árbol:

```
<div> Experiencia Laboral
├── <div> Gerente de Operaciones
│   ├── <h4>
│   └── <p>
└── <div> Coordinador de Planta
    ├── <h4>
    └── <p>
```

---

## Uso de `<span>` dentro de nuestro perfil

En nuestro ejemplo, usamos `<span>` para dos propósitos:

### 1. Resaltar información importante dentro de un párrafo

```html
<p>Ingeniero industrial con más de <span>8 años de experiencia</span>
en la industria manufacturera.</p>
```

Aquí `<span>` envuelve "8 años de experiencia" para que en el futuro (con CSS) podamos darle un estilo diferente (por ejemplo, ponerlo en negrita o color).

### 2. Marcar fechas dentro de un título

```html
<h4>Gerente de Operaciones - TextilPro S.A. <span>(2020 - Presente)</span></h4>
```

El `<span>` envuelve la fecha para separarla visualmente del cargo en el futuro.

---

## ¿Cuándo usar cada uno?

### Usa `<div>` cuando:

- Quieres agrupar una **sección completa** de contenido.
- Necesitas crear una **caja** que contenga varios elementos (títulos, párrafos, imágenes).
- Quieres aplicar estilos o manipular un **bloque grande** de contenido.
- Necesitas separar visualmente diferentes secciones de tu página.

### Usa `<span>` cuando:

- Quieres marcar una **palabra o frase corta** dentro de un párrafo.
- Necesitas aplicar un estilo diferente a una **parte del texto** (no a todo el párrafo).
- Quieres envolver algo que **no debe romper la línea**.

---

## Reglas importantes

| Regla | Detalle |
|-------|---------|
| `<div>` puede contener casi cualquier elemento | Incluyendo otros `<div>`, `<p>`, `<h1>`, etc. |
| `<span>` NO debe contener elementos de bloque | No pongas un `<div>` o `<p>` dentro de un `<span>` |
| Ambos son "genéricos" | No tienen significado semántico, solo sirven para agrupar |
| Más adelante verás alternativas semánticas | `<header>`, `<section>`, `<article>`, `<main>`, etc. |
| Sin CSS, ambos son invisibles | No cambian la apariencia por sí mismos |

---

## El futuro: de `<div>` a HTML5 semántico

Aunque en esta lección usamos `<div>` para todo, cuando aprendas HTML5 semántico, reemplazarás muchos de estos `<div>` por etiquetas más descriptivas:

```html
<!-- AHORA (con divs) -->
<div>
    <h3>Experiencia</h3>
</div>

<!-- FUTURO (con HTML5 semántico) -->
<section>
    <h3>Experiencia</h3>
</section>
```

Pero por ahora, `<div>` es perfecto para aprender a agrupar contenido.

---

## Ejercicio práctico

1. Abre el archivo `index.html` en tu navegador.
2. Observa cómo cada `<div>` agrupa secciones de contenido.
3. Busca todos los `<span>` en el archivo y nota cómo están dentro de párrafos o títulos.
4. Intenta poner un `<div>` dentro de un `<span>` y observa qué pasa.
5. Agrega un nuevo `<div>` con una sección "Habilidades" que contenga un `<h3>` y un `<p>`.
6. Dentro de ese párrafo, usa `<span>` para resaltar al menos 2 palabras clave.
