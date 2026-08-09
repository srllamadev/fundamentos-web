# 01 - Tabla Basica: `<table>`, `<tr>`, `<td>`

## ¿Que aprendemos aqui?

Aprenderas a crear tu primera **tabla en HTML**. Una tabla es una estructura de **filas y columnas** que organiza datos en celdas. Es como una hoja de Excel pero en HTML.

---

## Codigo completo

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Yamil N - Tabla Basica</title>
</head>
<body>

    <div>
        <h1>Yamil N</h1>
        <h2>Ingeniero Industrial</h2>
    </div>

    <div>
        <h3>Horario Semanal de Trabajo</h3>

        <table border="1">
            <tr>
                <td>Lunes</td>
                <td>08:00 - 17:00</td>
                <td>Oficina - Revision de indicadores</td>
            </tr>
            <tr>
                <td>Martes</td>
                <td>08:00 - 17:00</td>
                <td>Planta - Supervision de produccion</td>
            </tr>
            <tr>
                <td>Miercoles</td>
                <td>08:00 - 17:00</td>
                <td>Oficina - Reunion con proveedores</td>
            </tr>
            <tr>
                <td>Jueves</td>
                <td>08:00 - 17:00</td>
                <td>Planta - Analisis de procesos</td>
            </tr>
            <tr>
                <td>Viernes</td>
                <td>08:00 - 13:00</td>
                <td>Oficina - Reportes semanales</td>
            </tr>
        </table>
    </div>

</body>
</html>
```

---

## Las 3 etiquetas basicas de una tabla

Para crear una tabla necesitas entender solo 3 etiquetas:

| Etiqueta | Significado | Funcion |
|----------|-------------|---------|
| `<table>` | "tabla" | Contenedor principal de toda la tabla |
| `<tr>` | "table row" (fila) | Cada **fila** horizontal de la tabla |
| `<td>` | "table data" (celda de datos) | Cada **celda** dentro de una fila |

### Analogia

```
<table> = Una hoja de Excel completa
<tr>    = Una fila horizontal de Excel
<td>    = Una celda individual de Excel

<table>
│
├── <tr> (Fila 1)
│   ├── <td>Celda 1</td>
│   ├── <td>Celda 2</td>
│   └── <td>Celda 3</td>
│
├── <tr> (Fila 2)
│   ├── <td>Celda 1</td>
│   ├── <td>Celda 2</td>
│   └── <td>Celda 3</td>
│
└── <tr> (Fila 3)
    ├── <td>Celda 1</td>
    ├── <td>Celda 2</td>
    └── <td>Celda 3</td>
```

---

## Construyendo la tabla paso a paso

### Paso 1: Crear el contenedor

```html
<table border="1">
</table>
```

- `<table>` es el contenedor de toda la tabla.
- `border="1"` agrega un borde visible alrededor de cada celda (solo para que puedas ver la estructura mientras aprendes).

### Paso 2: Agregar filas con `<tr>`

```html
<table border="1">
    <tr>
    </tr>
    <tr>
    </tr>
</table>
```

Cada `<tr>` es una **fila horizontal**. Aquí tenemos 2 filas vacías.

### Paso 3: Agregar celdas con `<td>` dentro de cada fila

```html
<table border="1">
    <tr>
        <td>Lunes</td>
        <td>08:00 - 17:00</td>
        <td>Oficina</td>
    </tr>
    <tr>
        <td>Martes</td>
        <td>08:00 - 17:00</td>
        <td>Planta</td>
    </tr>
</table>
```

Cada `<td>` es una **celda**. Las celdas dentro de un mismo `<tr>` forman las columnas de esa fila.

---

## La segunda tabla del ejemplo: Software

```html
<h3>Software que Domino</h3>

<table border="1">
    <tr>
        <td>AutoCAD</td>
        <td>Avanzado</td>
    </tr>
    <tr>
        <td>Minitab</td>
        <td>Avanzado</td>
    </tr>
    <tr>
        <td>SAP</td>
        <td>Intermedio</td>
    </tr>
    <tr>
        <td>Microsoft Project</td>
        <td>Avanzado</td>
    </tr>
    <tr>
        <td>ARENA</td>
        <td>Intermedio</td>
    </tr>
    <tr>
        <td>Power BI</td>
        <td>Basico</td>
    </tr>
</table>
```

---

## Regla fundamental: Todas las filas deben tener el mismo numero de columnas

```html
<!-- INCORRECTO: filas con diferente numero de columnas -->
<table border="1">
    <tr>
        <td>Dato 1</td>
        <td>Dato 2</td>
        <td>Dato 3</td>
    </tr>
    <tr>
        <td>Dato 1</td>
        <td>Dato 2</td>
    </tr>
</table>

<!-- CORRECTO: todas las filas tienen el mismo numero de columnas -->
<table border="1">
    <tr>
        <td>Dato 1</td>
        <td>Dato 2</td>
        <td>Dato 3</td>
    </tr>
    <tr>
        <td>Dato 1</td>
        <td>Dato 2</td>
        <td>Dato 3</td>
    </tr>
</table>
```

Si una fila tiene 3 columnas, todas las filas deben tener 3 columnas. Si no, la tabla se vera deformada.

---

## Reglas importantes

| Regla | Detalle |
|-------|---------|
| `<td>` siempre va dentro de `<tr>` | Una celda no puede estar suelta fuera de una fila |
| `<tr>` siempre va dentro de `<table>` | Una fila no puede estar suelta fuera de la tabla |
| Todas las filas deben tener el mismo numero de `<td>` | Para que la tabla sea rectangular |
| `<table>` necesita `border="1"` para verse | Sin border, las celdas no tienen lineas visibles |
| El orden es: table → tr → td | No puedes invertir el orden |

---

## Errores comunes

### Error 1: Poner `<td>` fuera de `<tr>`

```html
<!-- INCORRECTO -->
<table border="1">
    <td>Dato suelto</td>
    <tr>
        <td>Dato correcto</td>
    </tr>
</table>

<!-- CORRECTO -->
<table border="1">
    <tr>
        <td>Dato correcto</td>
    </tr>
</table>
```

### Error 2: Filas con diferente numero de columnas

```html
<!-- INCORRECTO: primera fila tiene 3, segunda tiene 2 -->
<table border="1">
    <tr>
        <td>A</td>
        <td>B</td>
        <td>C</td>
    </tr>
    <tr>
        <td>D</td>
        <td>E</td>
    </tr>
</table>

<!-- CORRECTO: todas tienen el mismo numero -->
<table border="1">
    <tr>
        <td>A</td>
        <td>B</td>
        <td>C</td>
    </tr>
    <tr>
        <td>D</td>
        <td>E</td>
        <td>F</td>
    </tr>
</table>
```