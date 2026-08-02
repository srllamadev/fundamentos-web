# 05 - Listas: Ordenadas `<ol>` y Desordenadas `<ul>`

## ¿Qué aprendemos aquí?

En esta lección aprenderás a crear **listas** en HTML. Existen dos tipos principales: las **listas ordenadas** (`<ol>`) para cuando el orden importa, y las **listas desordenadas** (`<ul>`) para cuando los elementos no tienen un orden específico.

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
        <h3>Competencias Técnicas</h3>

        <h4>Software especializado:</h4>
        <ol>
            <li>AutoCAD - Diseño de layouts industriales</li>
            <li>Minitab - Análisis estadístico de procesos</li>
            <li>SAP - Módulos de producción y materiales</li>
            <li>Microsoft Project - Gestión de proyectos</li>
            <li>ARENA - Simulación de procesos discretos</li>
        </ol>

        <h4>Metodologías y herramientas:</h4>
        <ul>
            <li>Lean Manufacturing</li>
            <li>Six Sigma</li>
            <li>Kaizen</li>
            <li>5S</li>
            <li>SMED (Cambio rápido de herramientas)</li>
            <li>TPM (Mantenimiento Productivo Total)</li>
        </ul>

        <h4>Idiomas:</h4>
        <ol>
            <li>Español - Nativo</li>
            <li>Inglés - Avanzado (TOEFL 105)</li>
            <li>Portugués - Intermedio</li>
        </ol>
    </div>

    <div>
        <h3>Experiencia Laboral</h3>

        <div>
            <h4>Gerente de Operaciones - TextilPro S.A. (2020 - Presente)</h4>
            <p>Logros destacados:</p>
            <ul>
                <li>Reducción de tiempos de entrega en un 30% mediante sistema Kanban</li>
                <li>Disminución de desperdicios en un 22% aplicando metodologías Lean</li>
                <li>Aumento de la satisfacción del cliente interno en un 40%</li>
                <li>Liderazgo de equipo multidisciplinario de 45 personas</li>
            </ul>
        </div>
    </div>

    <div>
        <h3>Certificaciones y Cursos</h3>
        <ol>
            <li>Lean Six Sigma Black Belt - ASQ (2021)</li>
            <li>PMP - Project Management Professional - PMI (2022)</li>
            <li>Scrum Master Certified - Scrum Alliance (2020)</li>
            <li>Diplomado en Gerencia de Proyectos - Universidad Mayor de San Andres (2018)</li>
            <li>Curso Avanzado de Power BI para Industria - Coursera (2023)</li>
        </ol>
    </div>

</body>
</html>
```

---

## Lista Desordenada: `<ul>`

### ¿Cuándo usarla?

Cuando el **orden de los elementos NO importa**. Son simplemente un grupo de ítems relacionados.

### Sintaxis

```html
<ul>
    <li>Primer elemento</li>
    <li>Segundo elemento</li>
    <li>Tercer elemento</li>
</ul>
```

- `<ul>` = "unordered list" (lista desordenada).
- `<li>` = "list item" (ítem de lista).
- El navegador muestra **viñetas** (puntos/bullets) antes de cada `<li>`.

### Cómo se ve

```
• Primer elemento
• Segundo elemento
• Tercer elemento
```

### Ejemplo de nuestro perfil

```html
<h4>Metodologías y herramientas:</h4>
<ul>
    <li>Lean Manufacturing</li>
    <li>Six Sigma</li>
    <li>Kaizen</li>
    <li>5S</li>
    <li>SMED (Cambio rápido de herramientas)</li>
    <li>TPM (Mantenimiento Productivo Total)</li>
</ul>
```

Se muestra así:

```
Metodologías y herramientas:
• Lean Manufacturing
• Six Sigma
• Kaizen
• 5S
• SMED (Cambio rápido de herramientas)
• TPM (Mantenimiento Productivo Total)
```

**¿Por qué es desordenada aquí?** Porque las metodologías no tienen un orden específico de importancia o prioridad. Son simplemente una lista de herramientas que el profesional conoce.

---

## Lista Ordenada: `<ol>`

### ¿Cuándo usarla?

Cuando el **orden de los elementos SÍ importa** (pasos de un proceso, ranking, niveles de idioma por dominio, cronología, etc.).

### Sintaxis

```html
<ol>
    <li>Primer paso</li>
    <li>Segundo paso</li>
    <li>Tercer paso</li>
</ol>
```

- `<ol>` = "ordered list" (lista ordenada).
- `<li>` = "list item" (ítem de lista).
- El navegador muestra **números** antes de cada `<li>`.

### Cómo se ve

```
1. Primer paso
2. Segundo paso
3. Tercer paso
```

### Ejemplo de nuestro perfil

```html
<h4>Idiomas:</h4>
<ol>
    <li>Español - Nativo</li>
    <li>Inglés - Avanzado (TOEFL 105)</li>
    <li>Portugués - Intermedio</li>
</ol>
```

Se muestra así:

```
Idiomas:
1. Español - Nativo
2. Inglés - Avanzado (TOEFL 105)
3. Portugués - Intermedio
```

**¿Por qué es ordenada aquí?** Porque los idiomas están organizados por **nivel de dominio**, del mayor al menor. El orden tiene significado.

---

## Comparación: `<ul>` vs `<ol>`

| Característica | `<ul>` (Desordenada) | `<ol>` (Ordenada) |
|----------------|----------------------|---------------------|
| Significado | "unordered list" | "ordered list" |
| Viñetas/números | Puntos (•) | Números (1, 2, 3...) |
| ¿El orden importa? | No | Sí |
| Uso típico | Lista de items, características, opciones | Pasos, ranking, cronología, niveles |

### Ejemplo comparativo

```html
<!-- DESORDENADA: el orden no importa -->
<h4>Habilidades:</h4>
<ul>
    <li>Trabajo en equipo</li>
    <li>Liderazgo</li>
    <li>Comunicación</li>
</ul>

Resultado:
• Trabajo en equipo
• Liderazgo
• Comunicación


<!-- ORDENADA: el orden SÍ importa (pasos) -->
<h4>Pasos para un estudio de tiempos:</h4>
<ol>
    <li>Observar el proceso completo</li>
    <li>Dividir en elementos</li>
    <li>Cronometrar cada elemento</li>
    <li>Calcular tiempos estándar</li>
</ol>

Resultado:
1. Observar el proceso completo
2. Dividir en elementos
3. Cronometrar cada elemento
4. Calcular tiempos estándar
```

---

## Atributos especiales de `<ol>`

### Cambiar el número inicial

```html
<ol start="5">
    <li>Quinto lugar</li>
    <li>Sexto lugar</li>
    <li>Séptimo lugar</li>
</ol>
```

Resultado:

```
5. Quinto lugar
6. Sexto lugar
7. Séptimo lugar
```

### Cambiar el tipo de numeración

```html
<ol type="A">  <!-- Letras mayúsculas -->
    <li>Primero</li>
    <li>Segundo</li>
</ol>

<ol type="a">  <!-- Letras minúsculas -->
    <li>Primero</li>
    <li>Segundo</li>
</ol>

<ol type="I">  <!-- Números romanos mayúsculos -->
    <li>Primero</li>
    <li>Segundo</li>
</ol>

<ol type="i">  <!-- Números romanos minúsculos -->
    <li>Primero</li>
    <li>Segundo</li>
</ol>
```

Resultados:

```
A. Primero        a. Primero        I. Primero        i. Primero
B. Segundo        b. Segundo        II. Segundo       ii. Segundo
```

---

## Listas anidadas

Puedes meter una lista dentro de otra:

```html
<ol>
    <li>Ingeniería Industrial
        <ul>
            <li>Universidad Mayor de San Andres</li>
            <li>Graduado 2015</li>
        </ul>
    </li>
    <li>Maestría en Gestión de Operaciones
        <ul>
            <li>Universidad Nacional</li>
            <li>Graduado 2019</li>
        </ul>
    </li>
</ol>
```

Resultado:

```
1. Ingeniería Industrial
   • Universidad Mayor de San Andres
   • Graduado 2015
2. Maestría en Gestión de Operaciones
   • Universidad Nacional
   • Graduado 2019
```

---

## ¿Cuándo usar cada tipo en un perfil profesional?

| Tipo de contenido | Lista recomendada | Por qué |
|-------------------|-------------------|---------|
| Logros/experiencias | `<ul>` | No tienen un orden estricto |
| Metodologías conocidas | `<ul>` | Son un conjunto de herramientas |
| Pasos de un proceso | `<ol>` | El orden es fundamental |
| Idiomas por nivel | `<ol>` | Ordenados por dominio |
| Certificaciones por fecha | `<ol>` | Orden cronológico |
| Habilidades blandas | `<ul>` | No hay orden de importancia |
| Software conocido | `<ol>` o `<ul>` | Depende si quieres rankear por nivel |

---

## Reglas importantes

| Regla | Detalle |
|-------|---------|
| Los `<li>` solo van dentro de `<ul>` o `<ol>` | No los uses fuera de una lista |
| Cada `<li>` es un elemento independiente | No pongas varios ítems en un solo `<li>` |
| Las listas pueden anidarse | Una `<ul>` dentro de un `<li>` de otra `<ol>` y viceversa |
| Los `<li>` pueden contener otros elementos | `<p>`, `<a>`, `<span>`, incluso otras listas |
| No uses listas para hacer layouts | Para eso existe CSS Grid/Flexbox |

---

## Errores comunes

### Error 1: Usar `<p>` con viñetas manuales

```html
<!-- INCORRECTO: simular una lista con párrafos -->
<p>• Primer item</p>
<p>• Segundo item</p>
<p>• Tercer item</p>

<!-- CORRECTO: usar una lista real -->
<ul>
    <li>Primer item</li>
    <li>Segundo item</li>
    <li>Tercer item</li>
</ul>
```

### Error 2: Olvidar los `<li>`

```html
<!-- INCORRECTO: texto suelto dentro de la lista -->
<ul>
    Texto sin li
    <li>Item 1</li>
</ul>

<!-- CORRECTO: todo dentro de <li> -->
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
</ul>
```
