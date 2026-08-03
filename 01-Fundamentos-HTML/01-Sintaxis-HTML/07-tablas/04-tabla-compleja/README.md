# 04 - Tabla Compleja: Combinando Todo

## ¿Que aprendemos aqui?

En esta leccion final combinamos **todas las etiquetas y atributos** que aprendiste en las lecciones anteriores para crear tablas **complejas y profesionales**. Veras como `<thead>`, `<tbody>`, `<th>`, `<caption>`, `colspan` y `rowspan` trabajan juntos en tablas reales.

---

## Codigo completo (primera tabla)

```html
<table border="1">
    <caption>Reporte anual de indicadores de gestion por area</caption>

    <thead>
        <tr>
            <th rowspan="2">Area</th>
            <th colspan="3">Indicadores de Produccion</th>
            <th colspan="3">Indicadores de Calidad</th>
            <th rowspan="2">Presupuesto (USD)</th>
        </tr>
        <tr>
            <th>Meta</th>
            <th>Real</th>
            <th>Estado</th>
            <th>Meta</th>
            <th>Real</th>
            <th>Estado</th>
        </tr>
    </thead>

    <tbody>
        <tr>
            <td rowspan="2">Planta Principal</td>
            <td>1000 unidades/dia</td>
            <td>1050 unidades/dia</td>
            <td>Superado</td>
            <td>98% defectos</td>
            <td>99.2% defectos</td>
            <td>Superado</td>
            <td>500,000</td>
        </tr>
        <tr>
            <td>8 horas operativas</td>
            <td>7.5 horas operativas</td>
            <td>Cumplido</td>
            <td>0 rechazos</td>
            <td>2 rechazos</td>
            <td>En revision</td>
            <td>250,000</td>
        </tr>
    </tbody>

    <tbody>
        <tr>
            <th colspan="3">Totales</th>
            <th>1530/1500</th>
            <th>3</th>
            <th>97.85%</th>
            <th>Superado</th>
            <th>1,200,000</th>
        </tr>
    </tbody>
</table>
```

---

## La primera tabla: Encabezados con dos niveles

Esta tabla tiene un **encabezado de dos filas** que agrupa columnas por categoria.

### Estructura del encabezado

```
Fila 1 del <thead>:
┌──────┬─────────────────────────┬────────────────────────┬────────────┐
│      │ Indicadores Produccion  │ Indicadores Calidad    │            │
│Area  ├──────┬──────┬───────────┼──────┬──────┬──────────┤ Presupuesto│
│      │ Meta │ Real │ Estado    │ Meta │ Real │ Estado   │            │
└──────┴──────┴──────┴───────────┴──────┴──────┴──────────┴────────────┘
```

### Como se construye

**Fila 1 del encabezado:**

```html
<tr>
    <th rowspan="2">Area</th>
    <th colspan="3">Indicadores de Produccion</th>
    <th colspan="3">Indicadores de Calidad</th>
    <th rowspan="2">Presupuesto (USD)</th>
</tr>
```

- "Area" tiene `rowspan="2"` porque ocupa 2 filas verticalmente.
- "Indicadores de Produccion" tiene `colspan="3"` porque abarca 3 columnas (Meta, Real, Estado).
- "Indicadores de Calidad" tiene `colspan="3"` por la misma razon.
- "Presupuesto" tiene `rowspan="2"` porque ocupa 2 filas.

**Fila 2 del encabezado:**

```html
<tr>
    <th>Meta</th>
    <th>Real</th>
    <th>Estado</th>
    <th>Meta</th>
    <th>Real</th>
    <th>Estado</th>
</tr>
```

Solo 6 columnas porque "Area" y "Presupuesto" ya estan ocupando su lugar desde la fila 1 con `rowspan`.

### Contando columnas

```
Columna 1: Area (rowspan=2)
Columna 2: Meta Produccion (colspan=3)
Columna 3: Real Produccion
Columna 4: Estado Produccion
Columna 5: Meta Calidad (colspan=3)
Columna 6: Real Calidad
Columna 7: Estado Calidad
Columna 8: Presupuesto (rowspan=2)

Total: 8 columnas
```

---

## La segunda tabla: Horario semanal

Esta tabla combina `colspan` y `rowspan` en el cuerpo para crear un horario realista.

### Estructura visual

```
┌──────────┬──────────────────┬──────────────────┬──────────────────┬──────────────────┬──────────────────┐
│ Hora     │ Lunes            │ Martes           │ Miercoles        │ Jueves           │ Viernes          │
├──────────┼──────────────────┼──────────────────┼──────────────────┼──────────────────┼──────────────────┤
│08:00-09:0│ Revision         │ Revision         │ Revision         │ Revision         │ Revision         │
├──────────┼──────────────────┼──────────────────┼──────────────────┼──────────────────┼──────────────────┤
│09:00-12:0│ Reunion equipo   │ Supervision      │ Reunion prov.    │ Analisis proc.   │ Reportes         │
├──────────┼──────────────────┴──────────────────┴──────────────────┴──────────────────┴──────────────────┤
│12:00-13:0│                                          Almuerzo                                          │
├──────────┼──────────────────┬──────────────────┬──────────────────┬──────────────────┬──────────────────┤
│13:00-15:0│ Gestion pedidos  │ Capacitacion     │ Inspeccion       │ Reunion gerencia │ Planificacion    │
├──────────┼──────────────────┼──────────────────┼──────────────────┼──────────────────┼──────────────────┤
│15:00-17:0│                  │ Visita clientes  │                  │ Visita prov.     │                  │
│          │ Trab. admin.     ├──────────────────┤ Trab. admin.     ├──────────────────┤ Cierre semanal   │
│17:00-18:0│                  │ Correo/reportes  │                  │ Correo/reportes  │                  │
└──────────┴──────────────────┴──────────────────┴──────────────────┴──────────────────┴──────────────────┘
```

### Elementos clave

**Almuerzo con colspan:**

```html
<tr>
    <td>12:00 - 13:00</td>
    <td colspan="5">Almuerzo</td>
</tr>
```

"Almuerzo" ocupa las 5 columnas de dias (Lunes a Viernes) porque es una actividad comun para todos los dias.

**Trabajo administrativo con rowspan:**

```html
<tr>
    <td>15:00 - 17:00</td>
    <td rowspan="2">Trabajo administrativo</td>
    <td>Visita a clientes</td>
    <td>Trabajo administrativo</td>
    <td>Visita a proveedores</td>
    <td rowspan="2">Cierre semanal</td>
</tr>
<tr>
    <td>17:00 - 18:00</td>
    <td>Correo y reportes</td>
    <td>Correo y reportes</td>
    <td>Correo y reportes</td>
</tr>
```

"Trabajo administrativo" ocupa 2 filas (15:00-17:00 y 17:00-18:00) en la columna del Lunes. "Cierre semanal" hace lo mismo en la columna del Viernes.

---

## Dos `<tbody>` en la misma tabla

En la primera tabla usamos **dos `<tbody>`**:

```html
<table>
    <thead>...</thead>

    <tbody>
        <!-- Datos de Planta Principal -->
        <!-- Datos de Planta Secundaria -->
    </tbody>

    <tbody>
        <!-- Fila de Totales -->
    </tbody>
</table>
```

### ¿Por que dos `<tbody>`?

1. **Separacion logica**: los datos de las plantas estan en un cuerpo, los totales en otro.
2. **Estilos CSS diferentes**: puedes dar estilos distintos a cada cuerpo (por ejemplo, la fila de totales en negrita).
3. **Accesibilidad**: los lectores de pantalla entienden que hay una separacion entre datos y resumen.

---

## `<th>` en la fila de totales

```html
<tbody>
    <tr>
        <th colspan="3">Totales</th>
        <th>1530/1500</th>
        <th>3</th>
        <th>97.85%</th>
        <th>Superado</th>
        <th>1,200,000</th>
    </tr>
</tbody>
```

Usamos `<th>` en la fila de totales porque son **datos resumen** importantes, no datos ordinarios. `<th>` los muestra en negrita para destacarlos.

---

## Checklist para construir una tabla compleja

### Paso 1: Planificar la estructura

Antes de escribir HTML, dibuja la tabla en papel:

```
¿Cuantas columnas tiene?
¿Cuantas filas tiene?
¿Que celdas necesitan colspan o rowspan?
¿Donde van los encabezados?
```

### Paso 2: Crear el contenedor

```html
<table border="1">
    <caption>Titulo descriptivo</caption>
</table>
```

### Paso 3: Crear el encabezado

```html
<thead>
    <tr>
        <th>Columna 1</th>
        <th>Columna 2</th>
    </tr>
</thead>
```

### Paso 4: Crear el cuerpo

```html
<tbody>
    <tr>
        <td>Dato 1</td>
        <td>Dato 2</td>
    </tr>
</tbody>
```

### Paso 5: Agregar colspan y rowspan

```html
<td colspan="3">Texto que ocupa 3 columnas</td>
<td rowspan="2">Texto que ocupa 2 filas</td>
```

### Paso 6: Verificar

```
¿Todas las filas tienen el mismo numero de columnas?
¿Los colspan y rowspan estan bien calculados?
¿El encabezado tiene <th> y el cuerpo tiene <td>?
```

---

## Errores comunes en tablas complejas

### Error 1: No planificar antes de escribir

```html
<!-- INCORRECTO: empezar a escribir sin pensar la estructura -->
<table>
    <tr>
        <td>A</td>
        <td>B</td>
        <td>C</td>
    </tr>
    <tr>
        <td colspan="3">D</td>
        <td>E</td>  ← ERROR: esta celda sobra
    </tr>
</table>

<!-- CORRECTO: planificar primero -->
<!-- Fila 1: 3 columnas normales -->
<!-- Fila 2: 1 celda con colspan="3" -->
<table>
    <tr>
        <td>A</td>
        <td>B</td>
        <td>C</td>
    </tr>
    <tr>
        <td colspan="3">D</td>
    </tr>
</table>
```

### Error 2: Confundir colspan con rowspan

```html
<!-- INCORRECTO: queria ocupar 3 columnas pero use rowspan -->
<td rowspan="3">Texto horizontal</td>

<!-- CORRECTO: usar colspan para columnas, rowspan para filas -->
<td colspan="3">Texto que ocupa 3 columnas (horizontal)</td>
<td rowspan="3">Texto que ocupa 3 filas (vertical)</td>
```

### Error 3: Olvidar reducir las celdas

```html
<!-- INCORRECTO: tabla de 8 columnas, pero esta fila tiene 10 -->
<tr>
    <td rowspan="2">Area</td>  ← ocupa 1 columna
    <td>Meta</td>               ← ocupa 1 columna
    <td>Real</td>               ← ocupa 1 columna
    <td>Estado</td>             ← ocupa 1 columna
    <td>Meta</td>               ← ocupa 1 columna
    <td>Real</td>               ← ocupa 1 columna
    <td>Estado</td>             ← ocupa 1 columna
    <td>Presupuesto</td>        ← ocupa 1 columna
    <td colspan="3">Extras</td> ← ERROR: 3 columnas extra
</tr>
<!-- Total: 1 + 7 + 3 = 11 columnas en esta fila, pero la tabla tiene 8 -->
```

### Error 4: No usar <th> para los totales

```html
<!-- INCORRECTO: los totales se ven como datos normales -->
<tbody>
    <tr>
        <td colspan="3">Totales</td>
        <td>1530</td>
    </tr>
</tbody>

<!-- CORRECTO: los totales usan <th> para destacarse -->
<tbody>
    <tr>
        <th colspan="3">Totales</th>
        <th>1530</th>
    </tr>
</tbody>
```

---

## Resumen de todo lo que aprendiste

| Etiqueta/Atributo | Leccion | Funcion |
|-------------------|---------|---------|
| `<table>` | 01 | Contenedor de la tabla |
| `<tr>` | 01 | Fila de la tabla |
| `<td>` | 01 | Celda de datos |
| `<th>` | 02 | Celda de encabezado (negrita) |
| `<thead>` | 02 | Agrupa filas de encabezado |
| `<tbody>` | 02 | Agrupa filas del cuerpo |
| `<caption>` | 02 | Titulo de la tabla |
| `colspan` | 03 | Celda que ocupa varias columnas |
| `rowspan` | 03 | Celda que ocupa varias filas |
| Todo junto | 04 | Tablas complejas y profesionales |

---

## Ejercicio practico final

1. Abre el `index.html` en tu navegador.
2. Identifica todos los elementos que aprendiste en las 4 lecciones.
3. Crea una tabla de "Calendario academico" con:
   - Encabezado de dos filas (semestre y meses)
   - Filas por materia
   - Celdas con `colspan` para examenes que duran varios dias
   - Celdas con `rowspan` para materias que se repiten
4. Agrega una fila de totales con `<th>`.
5. Agrega un `<caption>` descriptivo.
6. Usa dos `<tbody>` para separar semestres.
7. Verifica que todas las filas tengan el mismo numero de columnas.

**Con esto terminas el modulo de tablas. Ahora puedes crear tablas de cualquier complejidad en HTML.**
