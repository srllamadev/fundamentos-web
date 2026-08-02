# 02 - Textos y Títulos

## ¿Qué aprendemos aquí?

En esta lección aprenderás a usar las etiquetas de **títulos** (`<h1>` a `<h6>`) y la etiqueta de **párrafo** (`<p>`). Son las etiquetas más básicas para mostrar texto en una página web.

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
    <h1>Yamil N</h1>
    <h2>Ingeniero Industrial | Especialista en Optimización de Procesos</h2>

    <h3>Perfil Profesional</h3>
    <p>Ingeniero industrial con más de 8 años de experiencia en la industria manufacturera y de logística. Apasionado por la mejora continua, la automatización de procesos y la implementación de metodologías Lean Manufacturing. Orientado a resultados con capacidad demostrada para liderar equipos multidisciplinarios.</p>

    <h3>Experiencia Laboral</h3>
    <h4>Gerente de Operaciones - TextilPro S.A. (2020 - Presente)</h4>
    <p>Liderazgo de un equipo de 45 personas en la planta de producción. Implementación de sistema Kanban que redujo los tiempos de entrega en un 30%. Supervisión de presupuestos operativos por más de 2 millones de dólares anuales.</p>

    <h4>Coordinador de Planta - LogiPack Bolivia (2017 - 2020)</h4>
    <p>Rediseño de layout de planta que incrementó la capacidad productiva en un 25%. Implementación de indicadores KPI para el seguimiento de la producción y calidad. Gestión de relaciones con proveedores nacionales e internacionales.</p>

    <h4>Analista de Procesos - ManufacturaGlobal (2015 - 2017)</h4>
    <p>Levantamiento y análisis de procesos productivos mediante diagramas de flujo y mapeo de cadena de valor. Desarrollo de estudios de tiempos y movimientos que optimizaron la eficiencia operativa en un 18%.</p>

    <h3>Formación Académica</h3>
    <h4>Maestría en Gestión de Operaciones</h4>
    <p>Universidad Mayor de San Andres - 2019</p>

    <h4>Ingeniería Industrial</h4>
    <p>Universidad Mayor de San Andres - 2015</p>

    <h3>Objetivo Profesional</h3>
    <p>Busco aportar mi experiencia en optimización de procesos y gestión de operaciones a una organización líder donde pueda impulsar la eficiencia operativa, reducir costos y liderar la transformación digital de los procesos industriales.</p>
</body>
</html>
```

---

## Las etiquetas de título: `<h1>` a `<h6>`

HTML tiene **6 niveles de títulos**, del más importante al menos importante:

| Etiqueta | Nivel | Tamaño visual | Uso típico |
|----------|-------|---------------|------------|
| `<h1>` | 1 (máximo) | Más grande | Título principal de la página |
| `<h2>` | 2 | Grande | Secciones principales |
| `<h3>` | 3 | Mediano-grande | Subsecciones |
| `<h4>` | 4 | Mediano | Sub-subsecciones |
| `<h5>` | 5 | Pequeño | Detalles menores |
| `<h6>` | 6 (mínimo) | Más pequeño | Detalles mínimos |

---

## Regla del SEO: Solo un `<h1>` por página

```
CORRECTO:                    INCORRECTO:
<h1>Mi Perfil</h1>           <h1>Mi Perfil</h1>
<h2>Experiencia</h2>         <h1>Experiencia</h1>
<h2>Educación</h2>           <h1>Educación</h1>
<h2>Contacto</h2>            <h1>Contacto</h1>
```

**¿Por qué solo un `<h1>`?**

- Los motores de búsqueda (Google) usan el `<h1>` para entender **de qué trata la página**.
- Es como el título de un libro: un libro tiene un solo título, pero muchos capítulos (`<h2>`), y subcapítulos (`<h3>`).
- Tener varios `<h1>` confunde a los motores de búsqueda y puede afectar negativamente el posicionamiento SEO.

---

## La etiqueta `<p>` (párrafo)

```html
<p>Este es un párrafo de texto. El navegador automáticamente le da
espacio arriba y abajo para separarlo del contenido siguiente.</p>
```

- Define un **bloque de texto** como un párrafo.
- El navegador agrega **margen superior e inferior** automáticamente.
- No necesitas poner `<br>` para saltar de línea al final de un párrafo; el navegador lo hace solo.
- Cada `<p>` empieza en una **nueva línea**.

---

## Estructura jerárquica en nuestro ejemplo

Observa cómo organizamos los títulos en nuestro perfil profesional:

```
<h1> Yamil Navi                   --> Título principal (solo 1)
    <h2> Ingeniero Industrial | Especialista  --> Subtítulo/descripción
        <h3> Perfil Profesional               --> Sección principal
        <h3> Experiencia Laboral              --> Sección principal
            <h4> Gerente de Operaciones       --> Detalle dentro de sección
            <h4> Coordinador de Planta        --> Detalle dentro de sección
            <h4> Analista de Procesos         --> Detalle dentro de sección
        <h3> Formación Académica              --> Sección principal
            <h4> Maestría                     --> Detalle dentro de sección
            <h4> Ingeniería                   --> Detalle dentro de sección
        <h3> Objetivo Profesional             --> Sección principal
```

---

## Buenas prácticas con textos y títulos

| Buena práctica | Por qué |
|----------------|---------|
| Un solo `<h1>` por página | SEO y accesibilidad |
| No saltarse niveles (no pasar de `<h2>` a `<h4>`) | Mantiene la jerarquía lógica |
| Usar `<p>` para bloques de texto | Semanticamente correcto |
| No usar títulos solo para hacer texto grande | Para eso existe CSS |
| No usar `<p>` para un solo salto de línea | Usa `<br>` si es dentro del mismo párrafo |
| Los títulos deben ser descriptivos | Ayuda al SEO y a la accesibilidad |

---

## Errores comunes de principiantes

### Error 1: Usar títulos por tamaño, no por jerarquía

```html
<!-- INCORRECTO: usa h1 porque quiere texto grande -->
<h1>Texto que debería ser un simple párrafo</h1>

<!-- CORRECTO -->
<p>Texto que es simplemente un párrafo</p>
```

### Error 2: Saltarse niveles de títulos

```html
<!-- INCORRECTO: salta de h2 a h4 -->
<h2>Sección</h2>
<h4>Subsección</h4>

<!-- CORRECTO: sigue el orden -->
<h2>Sección</h2>
<h3>Subsección</h3>
```

### Error 3: Múltiples `<h1>`

```html
<!-- INCORRECTO -->
<h1>Nombre</h1>
<h1>Experiencia</h1>
<h1>Educación</h1>

<!-- CORRECTO -->
<h1>Nombre</h1>
<h2>Experiencia</h2>
<h2>Educación</h2>
```