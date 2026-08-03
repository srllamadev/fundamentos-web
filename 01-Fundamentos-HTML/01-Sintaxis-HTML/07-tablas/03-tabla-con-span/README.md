# 03 - Tabla con colspan y rowspan: Celdas que se Expanden

## ¿Que aprendemos aqui?

Aprenderas a crear celdas que **ocupan mas de una columna** (`colspan`) o **mas de una fila** (`rowspan`). Esto permite hacer tablas mas flexibles donde una celda puede "expandirse" para cubrir varias posiciones.

---

## Codigo completo

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Yamil N - Tabla con Colspan y Rowspan</title>
</head>
<body>

    <div>
        <h1>Yamil N</h1>
        <h2>Ingeniero Industrial</h2>
    </div>

    <div>
        <h3>Tabla con colspan</h3>

        <table border="1">
            <caption>KPIs de Gestion - Ano 2025</caption>
            <thead>
                <tr>
                    <th>Trimestre</th>
                    <th>Meta</th>
                    <th>Resultado</th>
                    <th>Estado</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Primer Trimestre</td>
                    <td>Reducir desperdicios en 10%</td>
                    <td>12% de reduccion</td>
                    <td>Superado</td>
                </tr>
                <tr>
                    <td>Segundo Trimestre</td>
                    <td>Mejorar tiempos de entrega en 15%</td>
                    <td>15% de mejora</td>
                    <td>Cumplido</td>
                </tr>
                <tr>
                    <td colspan="4">Meta anual acumulada: Reducir costos operativos en 20%</td>
                </tr>
            </tbody>
        </table>
    </div>

</body>
</html>
```

---

## `colspan` - Ocupar varias columnas

```html
<td colspan="4">Texto que ocupa 4 columnas</td>
```

- `colspan` significa "column span" (extension de columna).
- Indica cuantas **columnas** debe ocupar esa celda.
- Si una fila tiene 4 columnas normales, pero una celda tiene `colspan="4"`, entonces esa celda ocupa toda la fila.

### Analogia

```
Sin colspan:
┌──────┬──────┬──────┬──────┐
│ Col1 │ Col2 │ Col3 │ Col4 │
├──────┼──────┼──────┼──────┤
│  A   │  B   │  C   │  D   │
└──────┴──────┴──────┴──────┘

Con colspan="4":
┌──────┬──────┬──────┬──────┐
│ Col1 │ Col2 │ Col3 │ Col4 │
├──────┴──────┴──────┴──────┤
│        A (ocupa 4)        │
└───────────────────────────┘
```

### Ejemplo en nuestro KPI

```html
<tr>
    <td colspan="4">Meta anual acumulada: Reducir costos operativos en 20%</td>
</tr>
```

Como la tabla tiene 4 columnas, `colspan="4"` hace que esa celda ocupe todo el ancho de la tabla:

```
┌──────────┬─────────────────┬──────────┬─────────┐
│Trimestre │     Meta        │ Resultado│ Estado  │
├──────────┼─────────────────┼──────────┼─────────┤
│ Q1       │ Reducir 10%     │ 12%      │Superado │
├──────────┼─────────────────┼──────────┼─────────┤
│ Q2       │ Mejorar 15%     │ 15%      │Cumplido │
├──────────┴─────────────────┴──────────┴─────────┤
│ Meta anual: Reducir costos en 20%              │  ← colspan="4"
└─────────────────────────────────────────────────┘
```

### Regla importante

Si usas `colspan`, debes **reducir** el numero de `<td>` en esa fila:

```html
<!-- Fila normal: 4 columnas -->
<tr>
    <td>Q1</td>
    <td>Meta</td>
    <td>Resultado</td>
    <td>Estado</td>
</tr>

<!-- Fila con colspan: 1 celda que ocupa 4 -->
<tr>
    <td colspan="4">Texto que ocupa todo</td>
</tr>
```

No puedes tener `colspan="4"` Y ademas 3 `<td>` mas, porque la tabla tendria 7 columnas en esa fila (4 + 3), lo cual romperia la estructura.

---

## `rowspan` - Ocupar varias filas

```html
<td rowspan="3">Texto que ocupa 3 filas</td>
```

- `rowspan` significa "row span" (extension de fila).
- Indica cuantas **filas** debe ocupar esa celda.
- La celda se "estira" verticalmente hacia abajo.

### Analogia

```
Sin rowspan:
┌──────┬──────┐
│ Area │ Tool │
├──────┼──────┤
│  A   │  X   │
├──────┼──────┤
│  A   │  Y   │  ← "A" se repite
├──────┼──────┤
│  A   │  Z   │  ← "A" se repite
└──────┴──────┘

Con rowspan="3":
┌──────┬──────┐
│ Area │ Tool │
├──────┼──────┤
│      │  X   │
│  A   ├──────┤
│      │  Y   │  ← "A" ocupa 3 filas
│      ├──────┤
│      │  Z   │
└──────┴──────┘
```

### Ejemplo en competencias tecnicas

```html
<tr>
    <td rowspan="3">Diseno</td>
    <td>AutoCAD</td>
    <td>Avanzado</td>
</tr>
<tr>
    <td>SolidWorks</td>
    <td>Intermedio</td>
</tr>
<tr>
    <td>CATIA</td>
    <td>Basico</td>
</tr>
```

Se muestra asi:

```
┌────────┬────────────┬────────────┐
│ Area   │ Herramienta│ Nivel      │
├────────┼────────────┼────────────┤
│        │ AutoCAD    │ Avanzado   │
│ Diseno ├────────────┼────────────┤
│        │ SolidWorks │ Intermedio │  ← "Diseno" ocupa 3 filas
│        ├────────────┼────────────┤
│        │ CATIA      │ Basico     │
├────────┼────────────┼────────────┤
│        │ Minitab    │ Avanzado   │
│Analisis├────────────┼────────────┤
│        │ SPSS       │ Intermedio │  ← "Analisis" ocupa 2 filas
├────────┼────────────┼────────────┤
│        │ SAP        │ Intermedio │
│Gestion ├────────────┼────────────┤
│        │ MS Project │ Avanzado   │  ← "Gestion" ocupa 2 filas
└────────┴────────────┴────────────┘
```

### Regla importante

Si usas `rowspan`, debes **reducir** el numero de `<td>` en las filas siguientes:

```html
<!-- Primera fila: celda con rowspan + 2 columnas -->
<tr>
    <td rowspan="3">Diseno</td>
    <td>AutoCAD</td>
    <td>Avanzado</td>
</tr>

<!-- Segunda fila: solo 2 columnas (porque "Diseno" ya ocupa su lugar) -->
<tr>
    <td>SolidWorks</td>
    <td>Intermedio</td>
</tr>

<!-- Tercera fila: solo 2 columnas -->
<tr>
    <td>CATIA</td>
    <td>Basico</td>
</tr>
```

Si pusieras 3 `<td>` en las filas siguientes, la tabla tendria una columna extra y se deformaria.

---

## Contando columnas con colspan y rowspan

### Con colspan:

```html
<table border="1">
    <!-- Fila 1: 3 columnas normales -->
    <tr>
        <td>A</td>
        <td>B</td>
        <td>C</td>
    </tr>
    <!-- Fila 2: 1 celda que ocupa 3 columnas -->
    <tr>
        <td colspan="3">D</td>
    </tr>
</table>
```

La tabla tiene **3 columnas** en total. En la fila 2, la celda "D" ocupa las 3 columnas.

### Con rowspan:

```html
<table border="1">
    <!-- Fila 1: celda que ocupa 2 filas + 1 columna -->
    <tr>
        <td rowspan="2">A</td>
        <td>B</td>
    </tr>
    <!-- Fila 2: solo 1 columna (porque A ya ocupa la otra) -->
    <tr>
        <td>C</td>
    </tr>
</table>
```

La tabla tiene **2 columnas**. En la fila 2, la celda "A" sigue ocupando la primera columna desde la fila 1.

---

## colspan y rowspan juntos

Puedes combinar ambos en la misma tabla:

```html
<table border="1">
    <tr>
        <td rowspan="2" colspan="2">A</td>
        <td>B</td>
    </tr>
    <tr>
        <td>C</td>
    </tr>
    <tr>
        <td>D</td>
        <td>E</td>
        <td>F</td>
    </tr>
</table>
```

Se muestra asi:

```
┌──────┬──────┬──────┐
│      │      │  B   │
│  A   │  A   ├──────┤  ← A ocupa 2 filas y 2 columnas
│      │      │  C   │
├──────┼──────┼──────┤
│  D   │  E   │  F   │
└──────┴──────┴──────┘
```

---

## Comparacion: colspan vs rowspan

| Caracteristica | `colspan` | `rowspan` |
|----------------|-----------|-----------|
| Direccion | Horizontal (columnas) | Vertical (filas) |
| Analogia | Fusionar celdas hacia la derecha | Fusionar celdas hacia abajo |
| Ejemplo | Un titulo que ocupa todo el ancho | Una categoria que agrupa varias filas |
| Afecta | La misma fila | Las filas siguientes |

---

## Reglas importantes

| Regla | Detalle |
|-------|---------|
| `colspan` reduce los `<td>` en la misma fila | Si colspan="3", necesitas 3 menos celdas |
| `rowspan` reduce los `<td>` en las filas siguientes | Si rowspan="3", las siguientes 2 filas necesitan 1 menos celda |
| No puedes exceder el numero total de columnas | Si la tabla tiene 4 columnas, colspan no puede ser mayor a 4 |
| `colspan` y `rowspan` se pueden combinar | Pero es mas complejo de calcular |
| Funcionan con `<th>` y con `<td>` | Ambos tipos de celda pueden expandirse |

---

## Errores comunes

### Error 1: No reducir las celdas al usar colspan

```html
<!-- INCORRECTO: 3 columnas + colspan="3" = 6 columnas -->
<tr>
    <td>A</td>
    <td>B</td>
    <td>C</td>
    <td colspan="3">D</td>
</tr>

<!-- CORRECTO: colspan="3" reemplaza a 3 celdas -->
<tr>
    <td colspan="3">D</td>
</tr>
```

### Error 2: No reducir las celdas al usar rowspan

```html
<!-- INCORRECTO: 3 columnas en filas donde rowspan ya ocupa una -->
<tr>
    <td rowspan="2">A</td>
    <td>B</td>
    <td>C</td>
</tr>
<tr>
    <td>D</td>
    <td>E</td>
    <td>F</td>  ← Esta celda sobra
</tr>

<!-- CORRECTO: 2 columnas en la fila siguiente -->
<tr>
    <td rowspan="2">A</td>
    <td>B</td>
    <td>C</td>
</tr>
<tr>
    <td>E</td>
    <td>F</td>
</tr>
```

### Error 3: Usar valores incorrectos

```html
<!-- INCORRECTO: colspan="0" no tiene sentido -->
<td colspan="0">Texto</td>

<!-- INCORRECTO: numeros negativos -->
<td rowspan="-1">Texto</td>

<!-- CORRECTO: numeros enteros positivos -->
<td colspan="2">Texto</td>
<td rowspan="3">Texto</td>
```

---

## Ejercicio practico

1. Abre el `index.html` en tu navegador.
2. Identifica donde se usa `colspan` y donde `rowspan`.
3. Crea una tabla con un titulo que use `colspan` para ocupar todo el ancho.
4. Crea una tabla de "Idiomas" donde la columna "Idioma" use `rowspan` para agrupar por familia (Latinas, Germanicas, etc.).
5. Combina `colspan` y `rowspan` en una misma tabla.
6. ¿Que pasa si `colspan` es mayor al numero de columnas de la tabla?
7. Crea una tabla de "Calendario mensual" donde los fines de semana usen `colspan="2"`.
