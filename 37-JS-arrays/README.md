# Leccion 37 - Arrays

## Objetivo de aprendizaje

Aprender a almacenar, acceder y manipular colecciones ordenadas de datos utilizando arrays en JavaScript. Esta leccion es fundamental porque los arrays son una de las estructuras de datos mas usadas en programacion.

## Conocimientos previos

- Leccion 25: Console (mostrar datos en consola)
- Leccion 26: Variables (const, let)
- Leccion 27: Tipos de datos (string, number, boolean, null, undefined)
- Leccion 28: Operadores (aritmeticos, comparacion, logicos)
- Leccion 29: Funciones (declaracion, parametros, retorno)
- Leccion 30: Scope (ambito de variables)
- Leccion 31: Strings (metodos y manipulacion)
- Leccion 32: Numbers (operaciones matematicas)
- Leccion 33-36: Condicionales, logicos, comparacion avanzadas

## Introduccion

Hasta ahora hemos trabajado con variables individuales: un nombre, una nota, un precio. Pero que pasa cuando necesitamos almacenar las notas de todo un curso? O la lista de productos de una tienda? Crear una variable por cada dato seria muy incomodo.

Los arrays resuelven este problema: permiten almacenar multiples valores en una sola variable.

```javascript
// Sin array (incmodo)
const nota1 = 85;
const nota2 = 90;
const nota3 = 78;

// Con array (mejor)
const notas = [85, 90, 78];
```

## Que es un array?

Un array es una coleccion ordenada de valores. Cada valor tiene una posicion llamada indice. Los arrays pueden contener cualquier tipo de dato: numeros, strings, booleanos, e incluso otros arrays.

```javascript
const estudiantes = ["Ana", "Carlos", "Maria"];
const calificaciones = [85, 90, 78];
const datosMixtos = ["Hola", 42, true];
```

**Caracteristicas importantes:**
- Son ordenados: los elementos mantienen su posicion
- Son mutables: se pueden modificar despues de crearlos
- Tienen longitud: propiedad `length` indica cuantos elementos tienen
- Pueden contener cualquier tipo de dato

## Creacion de arrays

### Sintaxis basica

Se usan corchetes `[]` para crear un array. Los elementos se separan con comas.

```javascript
// Array de strings
const ciudades = ["La Paz", "Santa Cruz", "Cochabamba"];

// Array de numeros
const precios = [15.50, 3.00, 2.50];

// Array vacio
const listaVacia = [];

// Array con tipos mixtos (no recomendado pero posible)
const mixto = ["texto", 42, true];
```

### Cuado usar arrays?

Usa arrays cuando necesites:
- Una lista de estudiantes
- Un inventario de productos
- Un historial de calificaciones
- Colecciones de datos relacionados

## Indices y acceso a elementos

### Indices desde cero

**IMPORTANTE:** Los indices en los arrays empiezan en 0, no en 1.

```
Elemento:  "Ana"   "Carlos"   "Maria"   "Luis"
Indice:      0        1         2         3
```

Esto significa:
- El primer elemento esta en el indice 0
- El segundo elemento esta en el indice 1
- El ultimo elemento esta en el indice `length - 1`

### Acceso con bracket notation

Se usa `nombreArray[indice]` para acceder a un elemento.

```javascript
const frutas = ["Manzana", "Pera", "Platano"];

console.log(frutas[0]);  // "Manzana"
console.log(frutas[1]);  // "Pera"
console.log(frutas[2]);  // "Platano"
console.log(frutas[10]); // undefined (no existe)
```

### Metodo at()

El metodo `at()` permite acceder a elementos con indices negativos. Los indices negativos cuentan desde el final del array.

```javascript
const letras = ["A", "B", "C", "D", "E"];

console.log(letras.at(0));   // "A" (primer elemento)
console.log(letras.at(-1));  // "E" (ultimo elemento)
console.log(letras.at(-2));  // "D" (penultimo elemento)
```

## Modificacion de elementos

Los arrays son mutables, lo que significa que puedes cambiar sus elementos directamente usando el indice.

```javascript
const lista = ["Pan", "Leche", "Queso"];
lista[1] = "Yogurt";
console.log(lista);  // ["Pan", "Yogurt", "Queso"]
```

**IMPORTANTE:** Aunque uses `const`, puedes modificar los elementos del array. `const` solo impide reasignar la variable completa.

```javascript
const notas = [85, 90, 78];
notas[0] = 95;       // Esto si funciona
// notas = [1, 2, 3]; // Esto daria error
```

## Propiedad length

La propiedad `length` devuelve la cantidad de elementos del array.

```javascript
const paises = ["Bolivia", "Peru", "Chile"];
console.log(paises.length);  // 3

// El ultimo elemento siempre esta en length - 1
console.log(paises[paises.length - 1]);  // "Chile"
```

## Metodos para agregar y eliminar

### push() y pop()

- `push(elemento)`: agrega al **final** del array
- `pop()`: elimina del **final** del array

```javascript
const lista = ["Ana", "Carlos"];

lista.push("Maria");
console.log(lista);  // ["Ana", "Carlos", "Maria"]

lista.pop();
console.log(lista);  // ["Ana", "Carlos"]
```

### unshift() y shift()

- `unshift(elemento)`: agrega al **inicio** del array
- `shift()`: elimina del **inicio** del array

```javascript
const lista = ["Carlos", "Maria"];

lista.unshift("Ana");
console.log(lista);  // ["Ana", "Carlos", "Maria"]

lista.shift();
console.log(lista);  // ["Carlos", "Maria"]
```

## Metodos de busqueda

### includes()

Devuelve `true` si el elemento existe en el array, `false` si no existe.

```javascript
const ciudades = ["La Paz", "Santa Cruz", "Cochabamba"];

console.log(ciudades.includes("La Paz"));    // true
console.log(ciudades.includes("Trinidad"));  // false

// Ejemplo practico con condicional
if (ciudades.includes("Sucre")) {
    console.log("Sucre esta en la lista");
} else {
    console.log("Sucre no esta en la lista");
}
```

### indexOf()

Devuelve el indice de la **primera aparicion** del elemento. Si no lo encuentra, devuelve -1.

```javascript
const colores = ["Rojo", "Verde", "Azul", "Verde"];

console.log(colores.indexOf("Azul"));   // 2
console.log(colores.indexOf("Verde"));  // 1 (primera aparicion)
console.log(colores.indexOf("Negro"));  // -1 (no existe)

// Uso comun: verificar si existe
const posicion = colores.indexOf("Azul");
if (posicion !== -1) {
    console.log("Azul esta en la posicion", posicion);
}
```

## Extraccion de elementos

### slice()

`slice(inicio, fin)` extrae una porcion del array. **NO modifica** el array original.

```javascript
const animales = ["Perro", "Gato", "Pajaro", "Pez", "Tortuga"];

const subArray1 = animales.slice(1, 4);    // ["Gato", "Pajaro", "Pez"]
const subArray2 = animales.slice(2);       // ["Pajaro", "Pez", "Tortuga"]
const subArray3 = animales.slice(-2);      // ["Pez", "Tortuga"]

console.log(animales);  // No cambio
```

### splice()

`splice(indice, cantidad, elementos...)` agrega o elimina elementos. **SI modifica** el array original.

```javascript
const lista = ["A", "B", "C", "D", "E"];

// Eliminar 2 elementos desde el indice 1
const eliminados = lista.splice(1, 2);
console.log(eliminados);  // ["B", "C"]
console.log(lista);       // ["A", "D", "E"]

// Agregar elementos sin eliminar
lista.splice(1, 0, "X", "Y");
console.log(lista);  // ["A", "X", "Y", "D", "E"]

// Reemplazar elementos
lista.splice(1, 2, "M", "N");
console.log(lista);  // ["A", "M", "N", "D", "E"]
```

**IMPORTANTE:** La diferencia entre `slice()` y `splice()`:
- `slice()`: NO modifica el original, devuelve un nuevo array
- `splice()`: SI modifica el original, devuelve los elementos eliminados

## Recorrer arrays

### Con for

El metodo tradicional usa un `for` loop con el indice.

```javascript
const estudiantes = ["Ana", "Carlos", "Maria"];

for (let i = 0; i < estudiantes.length; i++) {
    console.log("Estudiante", i + 1 + ":", estudiantes[i]);
}
```

### Con for...of

`for...of` es mas sencillo cuando no necesitas el indice.

```javascript
const ciudades = ["La Paz", "Santa Cruz", "Cochabamba"];

for (const ciudad of ciudades) {
    console.log(ciudad);
}
```

**Cuando usar cada uno:**
- `for`: cuando necesitas el indice o contar posiciones
- `for...of`: cuando solo necesitas los valores

## Arrays anidados y matrices

Un array puede contener otros arrays. Esto se usa para crear estructuras de datos mas complejas.

### Arrays anidados

```javascript
const datos = [
    ["Ana", [85, 90, 92]],
    ["Carlos", [78, 82, 88]]
];

console.log(datos[0][0]);  // "Ana"
console.log(datos[0][1]);  // [85, 90, 92]
```

### Matrices (arrays 2D)

Una matriz es un array de arrays, como una tabla.

```javascript
const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matriz[0][0]);  // 1
console.log(matriz[1][2]);  // 6
console.log(matriz[2][1]);  // 8
```

Para recorrer una matriz, necesitas dos loops anidados:

```javascript
for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        console.log(matriz[i][j]);
    }
}
```

## Referencias y copias

### Arrays son valores de referencia

Cuando asignas un array a otra variable, NO se crea una copia. Se copia la referencia al mismo array en memoria.

```javascript
const original = [1, 2, 3];
const referencia = original;

referencia[0] = 99;
console.log(original);    // [99, 2, 3] (tambien cambio!)
console.log(referencia);  // [99, 2, 3]
```

### Copiar vs modificar

Para crear una copia real, usa `slice()` sin argumentos:

```javascript
const original = [1, 2, 3];
const copia = original.slice();

copia[0] = 99;
console.log(original);  // [1, 2, 3] (no cambio)
console.log(copia);     // [99, 2, 3]
```

### Comparacion por referencia

Dos arrays con el mismo contenido NO son iguales con `===`:

```javascript
const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];

console.log(arr1 === arr2);  // false (son objetos diferentes)

const arr3 = arr1;
console.log(arr1 === arr3);  // true (misma referencia)
```

## Buenas practicas

1. **Usa `const` por defecto** para arrays. Aunque puedas modificar elementos, no puedes reasignar la variable.

2. **Nombres descriptivos en plural**: `estudiantes`, `calificaciones`, `productos`.

3. **No mezcles tipos de datos** en un mismo array (a menos que sea necesario).

4. **Verifica la longitud** antes de acceder a indices.

5. **Usa `includes()` para verificar existencia**, no `indexOf() !== -1` (es mas legible).

6. **Recuerda la diferencia entre `slice()` y `splice()`**: uno no modifica, el otro si.

7. **Ten cuidado con las referencias**: si necesitas una copia, usa `slice()`.

## Errores comunes

### Error 1: Olvidar que los indices empiezan en 0

```javascript
const lista = ["A", "B", "C"];
console.log(lista[1]);  // "B", NO "A"
```

### Error 2: Acceder a indices que no existen

```javascript
const lista = [1, 2, 3];
console.log(lista[10]);  // undefined (no da error, pero es undefined)
```

### Error 3: Confundir `slice()` con `splice()`

```javascript
const lista = [1, 2, 3, 4, 5];

// slice NO modifica
const porcion = lista.slice(1, 3);
console.log(lista);    // [1, 2, 3, 4, 5] (no cambio)

// splice SI modifica
lista.splice(1, 2);
console.log(lista);    // [1, 4, 5] (cambio!)
```

### Error 4: Olvidar que los arrays son referencias

```javascript
const original = [1, 2, 3];
const copia = original;  // NO es una copia real
copia.push(4);
console.log(original);   // [1, 2, 3, 4] (tambien cambio!)
```

### Error 5: Usar `length` incorrectamente

```javascript
const lista = [1, 2, 3];
// Mal: intentar acceder al ultimo elemento
console.log(lista[3]);  // undefined (el ultimo indice es 2)

// Bien: usar length - 1
console.log(lista[lista.length - 1]);  // 3
```

## Ejercicios practicos

Resuelve estos ejercicios en el archivo `ejercicios.js`:

1. **Crear array con 5 nombres**: Crea un array con 5 nombres de estudiantes y muestralo.

2. **Primer y ultimo elemento**: Dado un array de ciudades, muestra el primero y el ultimo.

3. **Agregar elemento**: Agrega un nuevo nombre al array del ejercicio 1.

4. **Eliminar elemento**: Elimina el ultimo elemento del array.

5. **Buscar posicion**: Busca la posicion de un elemento y muestrala.

6. **Iterar con for**: Recorre un array mostrando cada elemento con su posicion.

7. **Sumar numeros**: Calcula la suma de todos los numeros en un array.

8. **Calcular promedio**: Calcula el promedio de un array de calificaciones.

## Reto adicional

Crea un sistema simple de registro de calificaciones que permita:

1. Agregar calificaciones a un array
2. Calcular el promedio de las calificaciones
3. Encontrar la calificacion mas alta
4. Encontrar la calificacion mas baja
5. Mostrar todas las calificaciones

**Requisitos:**
- Usa solo arrays, loops y funciones de lecciones anteriores
- Contexto boliviano: usa nombres locales, precios en Bs., etc.
- El sistema debe funcionar con cualquier cantidad de calificaciones

**Pista:** Usa `push()` para agregar, loops para recorrer, y variables acumuladoras para calcular.

## Resumen

En esta leccion aprendiste:

- **Que es un array**: coleccion ordenada de valores
- **Creacion**: corchetes `[]`, separar con comas
- **Indices**: empiezan en 0, usar bracket notation `array[indice]`
- **Modificacion**: los arrays son mutables
- **Length**: propiedad que indica la cantidad de elementos
- **Metodos basicos**: `push()`, `pop()`, `unshift()`, `shift()`
- **Busqueda**: `includes()`, `indexOf()`
- **Extraccion**: `slice()` (no modifica), `splice()` (modifica)
- **Iteracion**: `for` loop y `for...of`
- **Arrays anidados**: arrays dentro de arrays, matrices 2D
- **Referencias**: los arrays son valores de referencia, no se copian automaticamente
- **Buenas practicas**: usar `const`, nombres descriptivos, verificar longitud

Los arrays son fundamentales en JavaScript. Los usaras constantemente para manejar listas de datos, ya sea estudiantes, productos, calificaciones o cualquier coleccion de informacion.

## Siguiente leccion

En la **Leccion 38 - Metodos de arrays**, aprenderas metodos mas avanzados como `map()`, `filter()`, `find()`, `reduce()`, `forEach()`, `sort()` y `reverse()`. Estos metodos te permitiran transformar, filtrar y procesar arrays de forma mas elegante y eficiente.
