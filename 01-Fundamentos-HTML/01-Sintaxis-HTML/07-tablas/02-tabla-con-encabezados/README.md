# 02 - Tabla con Encabezados: `<th>`, `<thead>`, `<tbody>`, `<caption>`

## ¿Que aprendemos aqui?

En la leccion anterior aprendiste la tabla basica con `<table>`, `<tr>` y `<td>`. Ahora aprenderas a hacer tablas **mas profesionales** con:

- `<th>` para celdas de encabezado (que se ven en negrita).
- `<thead>` para agrupar las filas de encabezado.
- `<tbody>` para agrupar las filas del cuerpo.
- `<caption>` para darle un titulo a la tabla.

---

## Codigo completo

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Yamil N - Tabla con Encabezados</title>
</head>
<body>

    <div>
        <h1>Yamil N</h1>
        <h2>Ingeniero Industrial</h2>
    </div>

    <div>
        <h3>Experiencia Laboral</h3>

        <table border="1">
            <caption>Historial de cargos en la industria manufacturera</caption>
            <thead>
                <tr>
                    <th>Cargo</th>
                    <th>Empresa</th>
                    <th>Periodo</th>
                    <th>Logro Principal</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Gerente de Operaciones</td>
                    <td>TextilPro S.A.</td>
                    <td>2020 - Presente</td>
                    <td>Reduccion de tiempos de entrega en 30%</td>
                </tr>
                <tr>
                    <td>Coordinador de Planta</td>
                    <td>LogiPack Bolivia</td>
                    <td>2017 - 2020</td>
                    <td>Incremento de capacidad productiva en 25%</td>
                </tr>
                <tr>
                    <td>Analista de Procesos</td>
                    <td>ManufacturaGlobal</td>
                    <td>2015 - 2017</td>
                    <td>Optimizacion de eficiencia operativa en 18%</td>
                </tr>
            </tbody>
        </table>
    </div>

</body>
</html>
```

---

## Las nuevas etiquetas

| Etiqueta | Significado | Funcion |
|----------|-------------|---------|
| `<th>` | "table header" (celda de encabezado) | Como `<td>` pero en **negrita** y centrado |
| `<thead>` | "table head" (cabecera de la tabla) | Agrupa las filas de encabezado |
| `<tbody>` | "table body" (cuerpo de la tabla) | Agrupa las filas del cuerpo |
| `<caption>` | "caption" (leyenda/titulo) | Titulo descriptivo de la tabla |

---

## `<th>` - La celda de encabezado

```html
<tr>
    <th>Cargo</th>
    <th>Empresa</th>
    <th>Periodo</th>
</tr>
```

- `<th>` es igual que `<td>` pero se muestra en **negrita** y centrado.
- Se usa para los **titulos de las columnas** (la primera fila que describe que hay en cada columna).

### Comparacion

```
Con <td> (texto normal):
┌──────────┬────────────┬─────────┐
│ Cargo    │ Empresa    │ Periodo │
├──────────┼────────────┼─────────┤
│ Gerente  │ TextilPro  │ 2020    │
└──────────┴────────────┴─────────┘

Con <th> (negrita y centrado):
┌──────────┬────────────┬─────────┐
│  Cargo   │  Empresa   │ Periodo │   ← Negrita y centrado
├──────────┼────────────┼─────────┤
│ Gerente  │ TextilPro  │ 2020    │   ← Normal
└──────────┴────────────┴─────────┘
```

### Regla practica

- **Primera fila** de la tabla: usa `<th>` para los titulos.
- **Filas siguientes**: usa `<td>` para los datos.

---

## `<thead>` y `<tbody>` - Agrupando filas

```html
<table border="1">
    <thead>
        <tr>
            <th>Cargo</th>
            <th>Empresa</th>
            <th>Periodo</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Gerente</td>
            <td>TextilPro</td>
            <td>2020</td>
        </tr>
        <tr>
            <td>Coordinador</td>
            <td>LogiPack</td>
            <td>2017</td>
        </tr>
    </tbody>
</table>
```

- `<thead>` agrupa las filas de **encabezado** (titulos de columnas).
- `<tbody>` agrupa las filas del **cuerpo** (datos reales).

### Analogia

```
<thead> = La portada de una tabla de Excel
         (los titulos de las columnas)

<tbody> = El resto de la tabla
           (los datos reales)

┌──────────────────────────────┐
│ <thead>                      │
│ ┌──────┬────────┬─────────┐  │
│ │Cargo │Empresa │ Periodo │  │  ← Encabezado
│ └──────┴────────┴─────────┘  │
├──────────────────────────────┤
│ <tbody>                      │
│ ┌──────┬────────┬─────────┐  │
│ │Geren │Textil  │ 2020    │  │  ← Cuerpo
│ ├──────┼────────┼─────────┤  │
│ │Coord │LogiPack│ 2017    │  │
│ └──────┴────────┴─────────┘  │
└──────────────────────────────┘
```

### ¿Por que separarlos?

1. **Los navegadores** pueden mostrar el encabezado fijo cuando la tabla es muy larga.
2. **Los lectores de pantalla** saben donde estan los titulos.
3. **CSS** puede dar estilos diferentes al encabezado y al cuerpo.

---

## `<caption>` - El titulo de la tabla

```html
<table border="1">
    <caption>Historial de cargos en la industria manufacturera</caption>
    <thead>
        ...
    </thead>
</table>
```

- `<caption>` es el **titulo descriptivo** de la tabla.
- Va **inmediatamente despues** de `<table>`.
- Se muestra **encima** de la tabla.

### Analogia

```
<caption> = El titulo de un grafico en un informe

"Cuadro 1: Historial de cargos en la industria manufacturera"
┌─────────────────────────────────────┐
│  (Aqui va la tabla)                 │
│                                     │
└─────────────────────────────────────┘
```

---

## Estructura completa de una tabla con encabezados

```
<table>
│
├── <caption>Titulo descriptivo</caption>
│
├── <thead>                  → Cabecera
│   └── <tr>
│       ├── <th>Columna 1</th>
│       ├── <th>Columna 2</th>
│       └── <th>Columna 3</th>
│
└── <tbody>                  → Cuerpo
    ├── <tr>
    │   ├── <td>Dato 1</td>
    │   ├── <td>Dato 2</td>
    │   └── <td>Dato 3</td>
    └── <tr>
        ├── <td>Dato 1</td>
        ├── <td>Dato 2</td>
        └── <td>Dato 3</td>
```

---

## Tabla vs Tabla con encabezados

### Antes (leccion 01):

```html
<table border="1">
    <tr>
        <td>AutoCAD</td>
        <td>Avanzado</td>
    </tr>
    <tr>
        <td>Minitab</td>
        <td>Avanzado</td>
    </tr>
</table>
```

Resultado:

```
┌─────────┬──────────┐
│ AutoCAD │ Avanzado │    ← Todo se ve igual
├─────────┼──────────┤
│ Minitab │ Avanzado │
└─────────┴──────────┘
```

### Ahora (con encabezados):

```html
<table border="1">
    <caption>Software que domino</caption>
    <thead>
        <tr>
            <th>Software</th>
            <th>Nivel</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>AutoCAD</td>
            <td>Avanzado</td>
        </tr>
        <tr>
            <td>Minitab</td>
            <td>Avanzado</td>
        </tr>
    </tbody>
</table>
```

Resultado:

```
        Software que domino              ← <caption>
┌──────────┬──────────┐
│ Software │  Nivel   │              ← <th> (negrita)
├──────────┼──────────┤
│ AutoCAD  │ Avanzado │              ← <td> (normal)
├──────────┼──────────┤
│ Minitab  │ Avanzado │
└──────────┴──────────┘
```

---

## Comparacion de etiquetas

| Etiqueta | Apariencia | Uso |
|----------|-----------|-----|
| `<td>` | Texto normal | Datos de la tabla |
| `<th>` | **Negrita** y centrado | Titulos de columnas |
| `<thead>` | (invisible, agrupador) | Envuelve filas de encabezado |
| `<tbody>` | (invisible, agrupador) | Envuelve filas del cuerpo |
| `<caption>` | Texto encima de la tabla | Titulo descriptivo |

---

## Reglas importantes

| Regla | Detalle |
|-------|---------|
| `<th>` reemplaza a `<td>` en la fila de encabezado | No uses `<td>` para los titulos |
| `<thead>` va antes de `<tbody>` | El orden importa |
| `<caption>` va inmediatamente despues de `<table>` | No despues de `<thead>` |
| Solo un `<caption>` por tabla | No puedes tener dos titulos |
| Solo un `<thead>` por tabla | Pero puede haber mas de un `<tbody>` |
| `<th>` y `<td>` siempre van dentro de `<tr>` | No pueden estar sueltos |

---

## Errores comunes

### Error 1: Usar `<td>` en lugar de `<th>` para los titulos

```html
<!-- INCORRECTO: los titulos no se ven en negrita -->
<thead>
    <tr>
        <td>Cargo</td>
        <td>Empresa</td>
    </tr>
</thead>

<!-- CORRECTO: los titulos usan <th> -->
<thead>
    <tr>
        <th>Cargo</th>
        <th>Empresa</th>
    </tr>
</thead>
```

### Error 2: Poner `<caption>` fuera de `<table>`

```html
<!-- INCORRECTO -->
<caption>Mi tabla</caption>
<table border="1">
    ...
</table>

<!-- CORRECTO -->
<table border="1">
    <caption>Mi tabla</caption>
    ...
</table>
```

### Error 3: Mezclar `<thead>` y `<tbody>`

```html
<!-- INCORRECTO: tbody antes de thead -->
<tbody>
    <tr><td>Dato</td></tr>
</tbody>
<thead>
    <tr><th>Titulo</th></tr>
</thead>

<!-- CORRECTO: thead antes de tbody -->
<thead>
    <tr><th>Titulo</th></tr>
</thead>
<tbody>
    <tr><td>Dato</td></tr>
</tbody>
```

---

## Ejercicio practico

1. Abre el `index.html` en tu navegador.
2. Observa la diferencia entre los `<th>` (negrita) y los `<td>` (normal).
3. Agrega un `<caption>` a cada tabla describiendo su contenido.
4. Crea una nueva tabla "Certificaciones" con `<thead>` y `<tbody>`.
5. Agrega una columna extra "Ciudad" a la tabla de experiencia.
6. Intenta poner `<tbody>` antes de `<thead>`. ¿Que pasa?
7. ¿Que pasa si usas `<th>` en el cuerpo en vez de `<td>`?
