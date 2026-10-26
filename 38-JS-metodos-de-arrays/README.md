# Leccion 38 - Metodos de Arrays

## Objetivo de aprendizaje

Al finalizar esta leccion, podras transformar, consultar y procesar arrays de manera eficiente usando los metodos modernos de JavaScript. Aprenderas a iterar, filtrar, mapear, reducir y ordenar arrays, entendiendo cuando usar cada metodo y como encadenarlos para crear soluciones elegantes.

## Conocimientos previos

- **Leccion 35 - Funciones**: Creacion de funciones, parametros, retorno de valores
- **Leccion 36 - Arrow Functions**: Sintaxis compacta de funciones, callbacks basicos
- **Leccion 37 - Arrays**: Creacion de arrays, acceso a elementos, propiedad length, bucles for

## Introduccion

En la leccion 37 aprendimos que un array es una lista ordenada de valores. Para recorrer esos valores usabamos un bucle `for`. Pero JavaScript nos ofrece herramientas mucho mas poderosas: los **metodos de arrays**.

Los metodos de arrays son funciones que vienen "de fabrica" en todos los arrays. Nos permiten hacer operaciones comunes (transformar, filtrar, buscar, ordenar) sin necesidad de escribir bucles manuales. Son mas legibles, mas concisos y menos propensos a errores.

```javascript
// Con bucle for (lección 37)
const notas = [85, 45, 92, 67];
let suma = 0;
for (let i = 0; i < notas.length; i++) {
    suma = suma + notas[i];
}

// Con método reduce (lección 38)
const suma = notas.reduce((acc, nota) => acc + nota, 0);
```

Ambos hacen lo mismo, pero el segundo es mas claro y directo.

## Que son los callbacks?

### Explicacion sencilla

Antes de aprender los metodos de arrays, necesitas entender que es un **callback**. No te preocupes, es mas simple de lo que parece.

Un callback es simplemente una **funcion que se pasa como argumento** a otra funcion. Eso es todo.

Piensalo asi: cuando llamas a una funcion, normalmente le pasas datos (numeros, strings, etc.). Pero en JavaScript, las funciones son "ciudadanos de primera clase", lo que significa que puedes pasar funciones como si fueran datos.

### Ejemplos basicos

```javascript
// Función normal
function saludar(nombre) {
    console.log("Hola, " + nombre + "!");
}

// Función que recibe un callback
function procesar(callback, nombre) {
    console.log("Voy a ejecutar el callback...");
    callback(nombre);
}

// Pasamos la función saludar como argumento
procesar(saludar, "Ana");    // Imprime: Hola, Ana!
procesar(saludar, "Carlos"); // Imprime: Hola, Carlos!
```

Con arrow functions es aun mas comun:

```javascript
// Callback con arrow function
procesar((nombre) => console.log("Bienvenido, " + nombre), "Luis");
```

¿Por que importa esto? Porque los metodos de arrays como `map()`, `filter()`, `find()`, etc., reciben callbacks como argumento. El callback les dice QUE hacer con cada elemento del array.

```javascript
const numeros = [1, 2, 3, 4, 5];

// El callback (num) => num * 2 le dice a map() qué hacer con cada número
const duplicados = numeros.map((num) => num * 2);
// Resultado: [2, 4, 6, 8, 10]
```

## Metodos de iteracion

### forEach()

`forEach()` ejecuta una funcion por cada elemento del array. Es la forma mas basica de recorrer un array con metodos.

**IMPORTANTE**: `forEach()` retorna `undefined`. No crea un nuevo array, solo ejecuta algo por cada elemento.

```javascript
const ciudades = ["La Paz", "Santa Cruz", "Cochabamba"];

ciudades.forEach((ciudad) => {
    console.log(ciudad);
});
// Imprime:
// La Paz
// Santa Cruz
// Cochabamba
```

Puedes acceder al indice si lo necesitas:

```javascript
ciudades.forEach((ciudad, indice) => {
    console.log(indice + ": " + ciudad);
});
// 0: La Paz
// 1: Santa Cruz
// 2: Cochabamba
```

**Cuando usar forEach**: Solo cuando quieres ejecutar algo por cada elemento (como imprimir en consola, actualizar una variable externa, etc.). NO lo uses para crear un nuevo array.

## Metodos de transformacion

### map()

`map()` crea un **NUEVO array** aplicando una funcion a cada elemento del array original. El array original **NO se modifica**.

Retorna un array del **mismo tamanio** que el original.

```javascript
const numeros = [1, 2, 3, 4, 5];

// Duplicar cada número
const duplicados = numeros.map((num) => num * 2);
console.log(duplicados); // [2, 4, 6, 8, 10]
console.log(numeros);    // [1, 2, 3, 4, 5] (original sin cambios)

// Elevar al cuadrado
const cuadrados = numeros.map((num) => num ** 2);
console.log(cuadrados); // [1, 4, 9, 16, 25]
```

Con objetos, es muy util para extraer propiedades o transformar datos:

```javascript
const estudiantes = [
    { nombre: "Ana", nota: 85 },
    { nombre: "Carlos", nota: 45 },
    { nombre: "Maria", nota: 92 },
];

// Extraer solo los nombres
const nombres = estudiantes.map((est) => est.nombre);
// ["Ana", "Carlos", "Maria"]

// Transformar a mayúsculas
const nombresMayusculas = estudiantes.map((est) => est.nombre.toUpperCase());
// ["ANA", "CARLOS", "MARIA"]
```

### filter()

`filter()` crea un **NUEVO array** con los elementos que cumplen una condicion. El array original **NO se modifica**.

La funcion callback debe retornar `true` (se incluye) o `false` (se excluye).

```javascript
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filtrar números pares
const pares = numeros.filter((num) => num % 2 === 0);
// [2, 4, 6, 8, 10]

// Filtrar números mayores a 5
const mayores = numeros.filter((num) => num > 5);
// [6, 7, 8, 9, 10]
```

Con estudiantes y calificaciones:

```javascript
const estudiantes = [
    { nombre: "Ana", nota: 85 },
    { nombre: "Carlos", nota: 45 },
    { nombre: "Maria", nota: 92 },
];

// Filtrar aprobados (nota >= 51)
const aprobados = estudiantes.filter((est) => est.nota >= 51);
// [{ nombre: "Ana", nota: 85 }, { nombre: "Maria", nota: 92 }]

// Filtrar reprobados
const reprobados = estudiantes.filter((est) => est.nota < 51);
// [{ nombre: "Carlos", nota: 45 }]
```

## Metodos de busqueda

### find()

`find()` retorna el **PRIMER elemento** que cumple la condicion. Si ningun elemento cumple, retorna `undefined`.

A diferencia de `filter()` que retorna un array, `find()` retorna un solo elemento.

```javascript
const numeros = [10, 25, 30, 45, 50];

// Encontrar el primer número mayor a 20
const primero = numeros.find((num) => num > 20);
// 25 (el primero que cumple, no todos)

const estudiantes = [
    { nombre: "Ana", nota: 85 },
    { nombre: "Carlos", nota: 45 },
    { nombre: "Maria", nota: 92 },
];

// Buscar estudiante por nombre
const maria = estudiantes.find((est) => est.nombre === "Maria");
// { nombre: "Maria", nota: 92 }

// Si no existe, retorna undefined
const roberto = estudiantes.find((est) => est.nombre === "Roberto");
// undefined
```

### findIndex()

`findIndex()` retorna el **INDICE** del primer elemento que cumple la condicion. Si ningun elemento cumple, retorna `-1`.

```javascript
const numeros = [10, 25, 30, 45, 50];

const indice = numeros.findIndex((num) => num > 20);
// 1 (el índice de 25)

const estudiantes = [
    { nombre: "Ana", nota: 85 },
    { nombre: "Carlos", nota: 45 },
    { nombre: "Maria", nota: 92 },
];

const indiceMaria = estudiantes.findIndex((est) => est.nombre === "Maria");
// 2

// Si no existe, retorna -1
const indiceRoberto = estudiantes.findIndex((est) => est.nombre === "Roberto");
// -1
```

### some()

`some()` retorna `true` si **AL MENOS UN** elemento cumple la condicion. Retorna `false` si ningun elemento cumple.

```javascript
const numeros = [1, 3, 5, 7, 8, 9];

// ¿Existe algún número par?
const hayPar = numeros.some((num) => num % 2 === 0);
// true (el 8 es par)

const estudiantes = [
    { nombre: "Ana", nota: 85 },
    { nombre: "Carlos", nota: 45 },
    { nombre: "Maria", nota: 92 },
];

// ¿Hay algún estudiante reprobado?
const hayReprobado = estudiantes.some((est) => est.nota < 51);
// true (Carlos tiene 45)
```

### every()

`every()` retorna `true` si **TODOS** los elementos cumplen la condicion. Retorna `false` si al menos uno no cumple.

```javascript
const numeros = [2, 4, 6, 8, 10];

// ¿Todos son pares?
const todosPares = numeros.every((num) => num % 2 === 0);
// true

// ¿Todos son mayores a 5?
const todosMayores = numeros.every((num) => num > 5);
// false (el 2 no es mayor que 5)

const estudiantes = [
    { nombre: "Ana", nota: 85 },
    { nombre: "Carlos", nota: 45 },
    { nombre: "Maria", nota: 92 },
];

// ¿Todos aprobaron?
const todosAprobaron = estudiantes.every((est) => est.nota >= 51);
// false (Carlos tiene 45)
```

**Comparacion some vs every**:
- `some()` = ¿hay AL MENOS UNO que cumple?
- `every()` = ¿TODOS cumplen?

## Metodos de reduccion

### reduce()

`reduce()` es el metodo mas poderoso y versatil. "Reduce" todo el array a **UN SOLO VALOR** (puede ser un numero, string, objeto, etc.).

Usa un **acumulador** que se va actualizando en cada iteracion.

Sintaxis:
```javascript
array.reduce((acumulador, elementoActual) => {
    // lógica
    return nuevoValorDelAcumulador;
}, valorInicial);
```

### Como funciona el acumulador

El acumulador es como una "variable temporal" que se actualiza en cada paso:

```javascript
const numeros = [1, 2, 3, 4, 5];

const suma = numeros.reduce((acumulador, numero) => {
    console.log("  Acum:", acumulador, "+ Num:", numero, "=", acumulador + numero);
    return acumulador + numero;
}, 0);
// Suma total: 15

// Paso a paso:
// Iteración 1: acumulador = 0, numero = 1 => retorna 0 + 1 = 1
// Iteración 2: acumulador = 1, numero = 2 => retorna 1 + 2 = 3
// Iteración 3: acumulador = 3, numero = 3 => retorna 3 + 3 = 6
// Iteración 4: acumulador = 6, numero = 4 => retorna 6 + 4 = 10
// Iteración 5: acumulador = 10, numero = 5 => retorna 10 + 5 = 15
```

**IMPORTANTE**: El valor inicial (0 en este caso) es muy importante. Sin el, `reduce()` usa el primer elemento del array como acumulador inicial, lo que puede causar errores si el array esta vacio.

Ejemplos practicos:

```javascript
const estudiantes = [
    { nombre: "Ana", nota: 85 },
    { nombre: "Carlos", nota: 45 },
    { nombre: "Maria", nota: 92 },
];

// Sumar todas las notas
const sumaNotas = estudiantes.reduce((acc, est) => acc + est.nota, 0);
// 222

// Calcular promedio
const promedio = sumaNotas / estudiantes.length;
// 74

// Encontrar la nota más alta
const notaMasAlta = estudiantes.reduce((max, est) => {
    return est.nota > max ? est.nota : max;
}, 0);
// 92

// Encontrar el estudiante con mejor nota
const mejorEstudiante = estudiantes.reduce((mejor, est) => {
    return est.nota > mejor.nota ? est : mejor;
}, estudiantes[0]);
// { nombre: "Maria", nota: 92 }
```

## Metodos de ordenamiento

### sort()

`sort()` ordena el array. **IMPORTANTE**: `sort()` **MODIFICA el array original**.

Por defecto, `sort()` ordena como **TEXTO** (strings), no como numeros. Esto puede causar resultados inesperados:

```javascript
const numeros = [10, 2, 30, 5, 100, 1];

// ¡CUIDADO! Sort por defecto trata los números como strings
numeros.sort();
// [1, 10, 100, 2, 30, 5] (orden alfabético, no numérico)

// SOLUCIÓN: Pasar función de comparación numérica
numeros.sort((a, b) => a - b);
// [1, 2, 5, 10, 30, 100] (orden numérico correcto)
```

**Funcion de comparacion**:
- Retorna **negativo**: `a` va antes que `b`
- Retorna **positivo**: `a` va despues que `b`
- Retorna **0**: son iguales

```javascript
// Orden ascendente (menor a mayor)
numeros.sort((a, b) => a - b);

// Orden descendente (mayor a menor)
numeros.sort((a, b) => b - a);
```

Con objetos:

```javascript
const estudiantes = [
    { nombre: "Ana", nota: 85 },
    { nombre: "Carlos", nota: 45 },
    { nombre: "Maria", nota: 92 },
];

// Ordenar por nota de mayor a menor
estudiantes.sort((a, b) => b.nota - a.nota);
// Ahora están ordenados: Maria (92), Ana (85), Carlos (45)

// Ordenar alfabéticamente por nombre
estudiantes.sort((a, b) => {
    if (a.nombre < b.nombre) return -1;
    if (a.nombre > b.nombre) return 1;
    return 0;
});
```

**IMPORTANTE**: Como `sort()` modifica el original, es buena practica hacer una copia antes:

```javascript
const original = [5, 2, 8, 1, 9];
const ordenado = [...original].sort((a, b) => a - b);
// original sigue siendo [5, 2, 8, 1, 9]
// ordenado es [1, 2, 5, 8, 9]
```

### reverse()

`reverse()` invierte el orden del array. **IMPORTANTE**: Tambien **MODIFICA el array original**.

```javascript
const numeros = [1, 2, 3, 4, 5];

// Hacer copia antes de invertir
const invertidos = [...numeros].reverse();
console.log(invertidos); // [5, 4, 3, 2, 1]
console.log(numeros);    // [1, 2, 3, 4, 5] (original sin cambios)
```

## Metodos de combinacion

### concat()

`concat()` combina dos o mas arrays y retorna un **NUEVO array**. No modifica los originales.

```javascript
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const combinado = array1.concat(array2);
// [1, 2, 3, 4, 5, 6]
```

### join()

`join()` une todos los elementos del array en un string, separados por el string que le pases.

```javascript
const palabras = ["JavaScript", "es", "genial"];

const frase = palabras.join(" ");
// "JavaScript es genial"

const conGuiones = palabras.join("-");
// "JavaScript-es-genial"

const conComas = palabras.join(", ");
// "JavaScript, es, genial"
```

### flat()

`flat()` crea un nuevo array "aplanando" los sub-arrays anidados.

```javascript
const anidado = [1, 2, [3, 4], [5, 6]];
const aplanado = anidado.flat();
// [1, 2, 3, 4, 5, 6]

const muyAnidado = [1, [2, [3, [4, 5]]]];
const aplanado1 = muyAnidado.flat();       // 1 nivel
const aplanado2 = muyAnidado.flat(2);      // 2 niveles
const aplanadoTodo = muyAnidado.flat(Infinity); // todos los niveles
```

### flatMap()

`flatMap()` es equivalente a hacer `map()` y luego `flat(1)`. Primero aplica la funcion a cada elemento, luego aplana un nivel.

```javascript
const frases = ["Hola mundo", "JavaScript es genial"];

// Con map + flat:
const palabras = frases.map(f => f.split(" ")).flat();
// ["Hola", "mundo", "JavaScript", "es", "genial"]

// Con flatMap (más directo):
const palabras = frases.flatMap(f => f.split(" "));
// ["Hola", "mundo", "JavaScript", "es", "genial"]
```

## Metodos que modifican vs metodos que no modifican

### IMPORTANTE: sort y reverse modifican el original

Los metodos `sort()` y `reverse()` **MODIFICAN el array original**. Esto significa que despues de usarlos, el array original cambia permanentemente.

```javascript
const numeros = [5, 2, 8, 1, 9];

// sort() modifica el original
numeros.sort((a, b) => a - b);
console.log(numeros); // [1, 2, 5, 8, 9] (¡cambió!)

// reverse() también modifica el original
numeros.reverse();
console.log(numeros); // [9, 8, 5, 2, 1] (¡cambió de nuevo!)
```

Otros metodos que modifican el original:
- `push()`, `pop()`, `shift()`, `unshift()`, `splice()`, `fill()`

### map y filter crean nuevos arrays

Los metodos `map()`, `filter()`, `concat()`, `flat()`, `slice()` **NO modifican** el array original. Retornan un nuevo array.

```javascript
const numeros = [1, 2, 3, 4, 5];

// map() NO modifica el original
const duplicados = numeros.map(n => n * 2);
console.log(numeros);   // [1, 2, 3, 4, 5] (sin cambios)
console.log(duplicados); // [2, 4, 6, 8, 10]

// filter() NO modifica el original
const pares = numeros.filter(n => n % 2 === 0);
console.log(numeros); // [1, 2, 3, 4, 5] (sin cambios)
console.log(pares);   // [2, 4]
```

**Buena practica**: Si necesitas usar `sort()` o `reverse()` pero quieres preservar el original, haz una copia primero:

```javascript
const original = [5, 2, 8, 1, 9];

// Opción 1: spread operator
const ordenado = [...original].sort((a, b) => a - b);

// Opción 2: slice()
const ordenado2 = original.slice().sort((a, b) => a - b);

// El original sigue intacto
console.log(original); // [5, 2, 8, 1, 9]
```

## Metodos modernos: toSorted y toReversed

Los metodos `toSorted()` y `toReversed()` son versiones modernas (ECMAScript 2023) que **NO modifican** el array original. Son las versiones "seguras" de `sort()` y `reverse()`.

```javascript
const numeros = [5, 2, 8, 1, 9];

// toSorted() ordena sin modificar el original
const ordenado = numeros.toSorted((a, b) => a - b);
console.log(numeros);  // [5, 2, 8, 1, 9] (sin cambios)
console.log(ordenado); // [1, 2, 5, 8, 9]

// toReversed() invierte sin modificar el original
const invertido = numeros.toReversed();
console.log(numeros);  // [5, 2, 8, 1, 9] (sin cambios)
console.log(invertido); // [9, 1, 8, 2, 5]
```

**Ventaja**: Ya no necesitas hacer `[...array].sort()`, puedes usar directamente `array.toSorted()`.

**Nota**: Son metodos nuevos, verifica compatibilidad con navegadores antiguos si es necesario.

## Comparacion: for vs forEach vs map vs filter

¿Cuando usar cada uno?

| Metodo     | ¿Que hace?                                    | ¿Retorna?      | ¿Modifica original? |
|------------|-----------------------------------------------|----------------|---------------------|
| `for`      | Bucle clasico, maximo control                 | nada           | depende de ti       |
| `forEach`  | Ejecuta algo por cada elemento                | `undefined`    | no (pero puedes)    |
| `map`      | Transforma cada elemento                      | nuevo array    | no                  |
| `filter`   | Selecciona elementos que cumplen condicion    | nuevo array    | no                  |

**Usa `for` cuando**:
- Necesitas control total (indices, `break`, `continue`)
- Quieres salir del bucle temprano

**Usa `forEach` cuando**:
- Solo quieres ejecutar algo por cada elemento (efectos secundarios)
- No necesitas crear un nuevo array

**Usa `map` cuando**:
- Quieres transformar cada elemento y crear un nuevo array
- Quieres un array del mismo tamanio

**Usa `filter` cuando**:
- Quieres seleccionar algunos elementos
- Quieres un array mas pequeno (o igual)

**MAL USO** (no hagas esto):
```javascript
// ❌ Usar forEach para crear un nuevo array
let resultado = [];
numeros.forEach(n => resultado.push(n * 2));

// ✅ Usar map en su lugar
const resultado = numeros.map(n => n * 2);
```

## Encadenamiento de metodos

Los metodos que retornan arrays (`map`, `filter`, etc.) se pueden encadenar. Esto permite crear "pipelines" de transformacion muy legibles.

```javascript
const estudiantes = [
    { nombre: "Ana", nota: 85 },
    { nombre: "Carlos", nota: 45 },
    { nombre: "Maria", nota: 92 },
    { nombre: "Jose", nota: 67 },
];

// Encadenar: filtrar aprobados, extraer nombres, ordenar
const nombresAprobados = estudiantes
    .filter(est => est.nota >= 51)
    .map(est => est.nombre)
    .toSorted();

// ["Ana", "Jose", "Maria"]
```

Ejemplo mas complejo:

```javascript
const productos = [
    { id: 1, nombre: "Cuaderno", precio: 25, stock: 10 },
    { id: 2, nombre: "Lapiz", precio: 3, stock: 50 },
    { id: 3, nombre: "Mochila", precio: 150, stock: 8 },
];

// Filtrar productos caros, aplicar descuento, ordenar
const ofertas = productos
    .filter(prod => prod.precio > 10)
    .map(prod => ({
        nombre: prod.nombre,
        precioOriginal: prod.precio,
        precioFinal: prod.precio * 0.85
    }))
    .toSorted((a, b) => a.precioFinal - b.precioFinal);
```

## Buenas practicas

1. **Usa nombres descriptivos para los callbacks**
   ```javascript
   // ❌ Mal
   productos.filter(p => p.p > 50);
   
   // ✅ Bien
   productos.filter(producto => producto.precio > 50);
   ```

2. **Si el callback es complejo, extralo a una funcion nombrada**
   ```javascript
   const esAprobado = (estudiante) => estudiante.nota >= 51;
   const aprobados = estudiantes.filter(esAprobado);
   ```

3. **Usa `const` por defecto, `let` solo si necesitas reasignar**
   ```javascript
   // ❌ Mal
   let nombres = estudiantes.map(e => e.nombre);
   
   // ✅ Bien
   const nombres = estudiantes.map(e => e.nombre);
   ```

4. **No modifiques el array original a menos que sea intencional**
   Usa `toSorted()` o `[...array].sort()` en lugar de `sort()` directo.

5. **Usa el metodo correcto para cada situacion**
   - Solo iterar? `forEach`
   - Crear nuevo array transformado? `map`
   - Seleccionar elementos? `filter`
   - Buscar uno? `find` o `findIndex`
   - Verificar si alguno/todos cumplen? `some` o `every`
   - Reducir a un valor? `reduce`

6. **Aprovecha las arrow functions para callbacks cortos**
   ```javascript
   const cuadrados = numeros.map(n => n * n);
   const pares = numeros.filter(n => n % 2 === 0);
   ```

## Errores comunes

1. **Olvidar que `sort()` modifica el original**
   ```javascript
   // ❌ Mal
   const original = [5, 2, 8];
   const ordenado = original.sort((a, b) => a - b);
   // ¡original también cambió!
   
   // ✅ Bien
   const ordenado = [...original].sort((a, b) => a - b);
   ```

2. **Usar `sort()` sin funcion de comparacion para numeros**
   ```javascript
   // ❌ Mal (ordena como strings)
   [10, 2, 30].sort(); // [10, 2, 30]
   
   // ✅ Bien
   [10, 2, 30].sort((a, b) => a - b); // [2, 10, 30]
   ```

3. **Usar `forEach` cuando deberias usar `map`**
   ```javascript
   // ❌ Mal
   let resultado = [];
   numeros.forEach(n => resultado.push(n * 2));
   
   // ✅ Bien
   const resultado = numeros.map(n => n * 2);
   ```

4. **Confundir `find()` con `filter()`**
   ```javascript
   // find() retorna UN elemento (o undefined)
   const maria = estudiantes.find(e => e.nombre === "Maria");
   
   // filter() retorna un ARRAY (puede tener 0, 1 o muchos elementos)
   const aprobados = estudiantes.filter(e => e.nota >= 51);
   ```

5. **Olvidar el valor inicial en `reduce()`**
   ```javascript
   // ❌ Mal (puede fallar con arrays vacíos)
   const suma = numeros.reduce((acc, n) => acc + n);
   
   // ✅ Bien
   const suma = numeros.reduce((acc, n) => acc + n, 0);
   ```

6. **Encadenar demasiados metodos y perder legibilidad**
   ```javascript
   // ❌ Difícil de leer
   const resultado = datos.filter(...).map(...).filter(...).reduce(...);
   
   // ✅ Más claro
   const filtrados = datos.filter(...);
   const transformados = filtrados.map(...);
   const resultado = transformados.reduce(...);
   ```

## Ejercicios practicos

1. **Duplicar numeros**: Usa `map()` para duplicar todos los numeros de un array
2. **Filtrar pares**: Usa `filter()` para obtener solo los numeros pares
3. **Buscar estudiante**: Usa `find()` para encontrar un estudiante por nombre
4. **Sumar valores**: Usa `reduce()` para calcular la suma de todos los valores
5. **Ordenar numeros**: Usa `sort()` para ordenar numeros de menor a mayor
6. **Mayusculas**: Usa `map()` para convertir todos los nombres a mayusculas
7. **Verificar aprobados**: Usa `every()` para verificar si todos aprobaron
8. **Total de carrito**: Usa `reduce()` para calcular el total de un carrito de compras

## Reto adicional

**Sistema de analisis de ventas**

Crea un sistema de analisis de ventas para una tienda de utiles escolares en La Paz. Tienes un array de objetos con informacion de ventas:

```javascript
const ventas = [
    { id: 1, producto: "Cuaderno", precio: 25, cantidad: 10 },
    { id: 2, producto: "Lapiz", precio: 3, cantidad: 50 },
    { id: 3, producto: "Borrador", precio: 2, cantidad: 30 },
    { id: 4, producto: "Regla", precio: 5, cantidad: 20 },
    { id: 5, producto: "Mochila", precio: 150, cantidad: 5 },
    { id: 6, producto: "Calculadora", precio: 80, cantidad: 8 },
];
```

**Desafios**:

1. **Calcular total de ventas**: Usa `reduce()` para calcular el total de todas las ventas (precio * cantidad de cada producto)
2. **Filtrar por rango de precio**: Usa `filter()` para obtener productos con precio entre 10 y 100 Bs.
3. **Ordenar resultados**: Ordena los productos del desafio 2 por cantidad vendida (de mayor a menor)
4. **Encontrar producto mas caro**: Usa `reduce()` para encontrar el producto con mayor precio
5. **Generar resumen**: Crea un resumen que muestre:
   - Total de productos vendidos
   - Valor total del inventario
   - Nombre del producto mas vendido
   - Lista de productos con ventas mayores a 100 Bs.

**Pista**: Usa encadenamiento de metodos para combinar operaciones.

## Resumen

En esta leccion aprendiste:

- **Callbacks**: Funciones que se pasan como argumentos a otras funciones
- **forEach()**: Iterar sobre un array (retorna undefined)
- **map()**: Transformar cada elemento (retorna NUEVO array)
- **filter()**: Seleccionar elementos (retorna NUEVO array)
- **find()**: Buscar primer elemento que cumple condicion
- **findIndex()**: Buscar indice del primer elemento que cumple
- **some()**: Verificar si ALGUN elemento cumple
- **every()**: Verificar si TODOS los elementos cumplen
- **reduce()**: Reducir array a un solo valor (acumulador)
- **sort()**: Ordenar array (MODIFICA el original)
- **reverse()**: Invertir array (MODIFICA el original)
- **join()**: Unir elementos en un string
- **concat()**: Combinar arrays
- **flat()**: Aplanar arrays anidados
- **flatMap()**: map + flat en un solo paso
- **toSorted()** y **toReversed()**: Versiones modernas que no modifican el original
- **Encadenamiento**: Combinar metodos para operaciones complejas
- **Buenas practicas**: Cuando usar cada metodo y como evitar errores comunes

## Siguiente leccion (39 - Objetos)

En la proxima leccion aprenderemos sobre **Objetos** en JavaScript. Los objetos son estructuras de datos que nos permiten agrupar información relacionada usando pares de clave-valor. Aprenderas a crear objetos, acceder a sus propiedades, modificarlas y usar metodos de objetos. Los objetos son fundamentales en JavaScript y los usaremos constantemente en aplicaciones reales.
