// ============================================================
// EJERCICIOS - LECCION 37: ARRAYS
// ============================================================

// Ejercicio 1: Crear un array con 5 nombres y mostrarlos
// -----------------------------------------------------------
// Enunciado: Crea un array llamado "nombres" con 5 nombres de estudiantes
// bolivianos. Luego, muestra el array completo en la consola.
//
// Ejemplo de resultado esperado:
//   ["Ana", "Carlos", "Maria", "Luis", "Sofia"]
//
// Conceptos: declaracion de arrays, console.log


// Ejercicio 2: Mostrar el primer y ultimo elemento de un array
// -----------------------------------------------------------
// Enunciado: Dado el siguiente array de ciudades de Bolivia:
const ciudades = ["La Paz", "Santa Cruz", "Cochabamba", "Sucre", "Potosi"];
// Muestra en consola el primer elemento y el ultimo elemento.
//
// Ejemplo de resultado esperado:
//   Primer elemento: "La Paz"
//   Ultimo elemento: "Potosi"
//
// Conceptos: indices, bracket notation, length, at()


// Ejercicio 3: Agregar un nombre al array
// -----------------------------------------------------------
// Enunciado: Partiendo del array del Ejercicio 1, agrega un nuevo
// nombre al final de la lista usando el metodo apropiado.
// Luego muestra el array actualizado.
//
// Ejemplo de resultado esperado:
//   Array actualizado: ["Ana", "Carlos", "Maria", "Luis", "Sofia", "Pedro"]
//
// Conceptos: push()


// Ejercicio 4: Eliminar un elemento del array
// -----------------------------------------------------------
// Enunciado: Partiendo del array del Ejercicio 3 (que ya tiene 6 nombres),
// elimina el ultimo nombre de la lista usando el metodo apropiado.
// Luego muestra el array resultante.
//
// Ejemplo de resultado esperado:
//   Array despues de eliminar: ["Ana", "Carlos", "Maria", "Luis", "Sofia"]
//
// Conceptos: pop()


// Ejercicio 5: Buscar un elemento y mostrar su posicion
// -----------------------------------------------------------
// Enunciado: Dado el siguiente array de calificaciones:
const calificaciones = [85, 90, 78, 45, 92, 67, 88];
// Busca la posicion del numero 92 en el array y muestrala en consola.
// Si el numero no existe, muestra un mensaje indicando que no se encontro.
//
// Ejemplo de resultado esperado:
//   "El numero 92 esta en la posicion 4"
//
// Conceptos: indexOf(), includes(), condicionales


// Ejercicio 6: Iterar un array con for loop
// -----------------------------------------------------------
// Enunciado: Dado el siguiente array de productos de una libreria:
const productos = ["Cuaderno", "Lapiz", "Borrador", "Regla", "Mochila"];
// Recorre el array usando un for loop y muestra cada producto
// con su numero de posicion (empezando desde 1).
//
// Ejemplo de resultado esperado:
//   Producto 1: Cuaderno
//   Producto 2: Lapiz
//   Producto 3: Borrador
//   Producto 4: Regla
//   Producto 5: Mochila
//
// Conceptos: for loop, length, bracket notation


// Ejercicio 7: Sumar todos los numeros de un array
// -----------------------------------------------------------
// Enunciado: Dado el siguiente array de precios en Bolivianos:
const precios = [15.50, 3.00, 2.50, 8.00, 120.00];
// Calcula la suma de todos los precios y muestra el total en consola.
//
// Ejemplo de resultado esperado:
//   "Total: Bs. 149"
//
// Conceptos: for loop o for...of, acumulador, variables


// Ejercicio 8: Calcular el promedio de calificaciones
// -----------------------------------------------------------
// Enunciado: Dado el siguiente array de calificaciones de un estudiante:
const notas = [85, 90, 78, 45, 92];
// Calcula el promedio de las calificaciones y muestralo en consola.
// Pista: primero suma todas las notas, luego divide entre la cantidad.
//
// Ejemplo de resultado esperado:
//   "Promedio: 78"
//
// Conceptos: for loop o for...of, length, division, acumulador
