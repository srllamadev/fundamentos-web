# 07 - Tablas en HTML

## ¿Que aprendemos aqui?

Aprenderas a crear **tablas en HTML** desde lo mas basico hasta tablas complejas con encabezados de dos niveles, celdas que ocupan varias columnas (`colspan`) y varias filas (`rowspan`). Las tablas son esenciales para mostrar datos organizados en filas y columnas.

---

## Estructura del modulo

Este modulo tiene **4 lecciones progresivas**. Cada una agrega complejidad a lo aprendido en la anterior:

| # | Carpeta | Etiquetas que aprendes | Que logras |
|---|---------|----------------------|------------|
| 01 | [01-tabla-basica](./01-tabla-basica/) | `<table>`, `<tr>`, `<td>` | Tu primera tabla con filas y columnas |
| 02 | [02-tabla-con-encabezados](./02-tabla-con-encabezados/) | `<th>`, `<thead>`, `<tbody>`, `<caption>` | Tablas profesionales con encabezados y titulo |
| 03 | [03-tabla-con-span](./03-tabla-con-span/) | `colspan`, `rowspan` | Celdas que se expanden horizontal y verticalmente |
| 04 | [04-tabla-compleja](./04-tabla-compleja/) | Todo junto | Tablas complejas con encabezados de dos niveles |

---

## Como usar este material

1. **Abre cada carpeta en orden** (01 a 04).
2. **Lee el `README.md`** de cada carpeta: explica cada etiqueta en detalle.
3. **Abre el `index.html`** en tu navegador para ver el resultado.
4. **Copia el codigo** y pégalo en tu propio archivo para practicar.
5. **Modifica el codigo** siguiendo los ejercicios practicos al final de cada README.

---

## Las etiquetas que aprenderas

### Leccion 01 - Tabla basica

| Etiqueta | Significado | Funcion |
|----------|-------------|---------|
| `<table>` | "tabla" | Contenedor de toda la tabla |
| `<tr>` | "table row" (fila) | Cada fila horizontal |
| `<td>` | "table data" (celda) | Cada celda de datos |

### Leccion 02 - Tabla con encabezados

| Etiqueta | Significado | Funcion |
|----------|-------------|---------|
| `<th>` | "table header" (encabezado) | Celda de titulo (negrita y centrado) |
| `<thead>` | "table head" | Agrupa las filas de encabezado |
| `<tbody>` | "table body" | Agrupa las filas del cuerpo |
| `<caption>` | "leyenda" | Titulo descriptivo de la tabla |

### Leccion 03 - Tabla con span

| Atributo | Funcion |
|----------|---------|
| `colspan="n"` | La celda ocupa **n columnas** (horizontal) |
| `rowspan="n"` | La celda ocupa **n filas** (vertical) |

### Leccion 04 - Tabla compleja

Combina todo: `<thead>` de dos niveles, `colspan` + `rowspan`, multiples `<tbody>`, `<th>` en filas de totales.

---

## Evolucion visual

### Leccion 01: Tabla basica

```
┌──────────┬──────────────┐
│ AutoCAD  │ Avanzado     │    ← Todo se ve igual (<td>)
├──────────┼──────────────┤
│ Minitab  │ Avanzado     │
└──────────┴──────────────┘
```

### Leccion 02: Tabla con encabezados

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

### Leccion 03: Tabla con colspan/rowspan

```
┌────────┬────────────┬────────────┐
│ Area   │ Herramienta│ Nivel      │
├────────┼────────────┼────────────┤
│        │ AutoCAD    │ Avanzado   │
│ Diseno ├────────────┼────────────┤  ← rowspan="3"
│        │ SolidWorks │ Intermedio │
│        ├────────────┼────────────┤
│        │ CATIA      │ Basico     │
└────────┴────────────┴────────────┘
```

### Leccion 04: Tabla compleja

```
┌──────┬─────────────────────────┬────────────────────────┬────────────┐
│      │ Indicadores Produccion  │ Indicadores Calidad    │            │
│Area  ├──────┬──────┬───────────┼──────┬──────┬──────────┤ Presupuesto│
│      │ Meta │ Real │ Estado    │ Meta │ Real │ Estado   │            │
├──────┼──────┼──────┼───────────┼──────┼──────┼──────────┼────────────┤
│      │1000  │1050  │ Superado  │ 98%  │99.2% │ Superado │ 500,000    │
│Planta├──────┼──────┼───────────┼──────┼──────┼──────────┼────────────┤
│      │ 8 h  │ 7.5 h│ Cumplido  │ 0    │ 2    │ Revision │ 250,000    │
├──────┴──────┴──────┴───────────┴──────┴──────┴──────────┴────────────┤
│                       TOTALES                                        │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Jerarquia completa

```
<table>
│
├── <caption>Titulo descriptivo</caption>
│
├── <thead>                      → Cabecera de la tabla
│   ├── <tr>
│   │   ├── <th rowspan="2">Col 1</th>
│   │   ├── <th colspan="3">Grupo 1</th>
│   │   └── <th rowspan="2">Col 8</th>
│   └── <tr>
│       ├── <th>Sub 1</th>
│       ├── <th>Sub 2</th>
│       └── <th>Sub 3</th>
│
├── <tbody>                      → Cuerpo de datos
│   ├── <tr>
│   │   ├── <td rowspan="2">Dato</td>
│   │   ├── <td>Dato</td>
│   │   └── <td colspan="2">Dato expandido</td>
│   └── <tr>
│       ├── <td>Dato</td>
│       └── <td>Dato</td>
│
└── <tbody>                      → Otro cuerpo (totales, resumen)
    └── <tr>
        ├── <th colspan="3">Totales</th>
        └── <th>Resultado</th>
```

---

## Reglas fundamentales

| Regla | Detalle |
|-------|---------|
| `<td>` y `<th>` siempre van dentro de `<tr>` | Una celda no puede estar suelta |
| `<tr>` siempre va dentro de `<table>`, `<thead>` o `<tbody>` | Una fila no puede estar suelta |
| Todas las filas deben tener el mismo numero de columnas | Para que la tabla sea rectangular |
| `colspan` reduce los `<td>` en la misma fila | Si colspan="3", necesitas 3 menos celdas |
| `rowspan` reduce los `<td>` en las filas siguientes | Si rowspan="3", las siguientes 2 filas necesitan 1 menos celda |
| `<caption>` va inmediatamente despues de `<table>` | No despues de `<thead>` |
| `<thead>` va antes de `<tbody>` | El orden importa |
| `<th>` para titulos, `<td>` para datos | No los mezcles |

---

## Consejos para construir tablas

1. **Dibuja la tabla en papel antes de escribir HTML.** Identifica filas, columnas, y donde necesitas colspan/rowspan.
2. **Cuenta las columnas.** Todas las filas deben tener el mismo numero.
3. **Empieza por el encabezado.** Define los titulos de las columnas primero.
4. **Agrega colspan y rowspan al final.** Primero crea la estructura basica, luego expande las celdas.
5. **Verifica al final.** Abre el HTML en el navegador y revisa que la tabla se vea correcta.

---

## Herramientas que necesitas

- Un **editor de texto** (recomendado: VS Code).
- Un **navegador web** (Chrome, Firefox, Edge).
- Conocimientos de las lecciones anteriores (esqueleto HTML, `<div>`, listas).

---

## Nota importante

**Los archivos usan `border="1"` para que puedas ver la estructura de las celdas.** En la practica real, los estilos de las tablas se controlan con CSS, no con atributos HTML. Pero para aprender, ver los bordes te ayuda a entender como funciona la estructura.

---

## Ejercicio final integrador

1. Crea una tabla de "Calendario Academico" con:
   - Un `<caption>` descriptivo.
   - Encabezado de dos filas: semestre arriba, meses abajo (usando `colspan` y `rowspan`).
   - Filas para cada materia.
   - Celdas con `colspan` para examenes de varios dias.
   - Una fila de "Creditos totales" con `<th>` al final.
   - Dos `<tbody>`: uno por semestre.

2. Crea una tabla de "Presupuesto Anual" con:
   - Encabezado con categorias agrupadas (`colspan`).
   - Filas con datos mensuales.
   - Una fila de totales al final.
   - Al menos un `rowspan` para agrupar categorias.

**Con este modulo dominas las tablas en HTML. Estas listo para avanzar a CSS.**
