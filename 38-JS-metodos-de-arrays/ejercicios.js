// ============================================================
// EJERCICIOS - LECCION 38 - METODOS DE ARRAYS
// ============================================================

// Ejercicio 1: Duplicar numeros con map
// ------------------------------------------------------------
// TITULO: Duplicar todos los numeros
// ENUNCIADO:
//   Dado un array de numeros, usa map() para crear un nuevo array
//   donde cada numero este duplicado (multiplicado por 2).
// DATOS DE EJEMPLO:
const numerosEj1 = [1, 2, 3, 4, 5];
// RESULTADO ESPERADO:
//   [2, 4, 6, 8, 10]
// CONCEPTOS USADOS: map()


// Ejercicio 2: Filtrar numeros pares
// ------------------------------------------------------------
// TITULO: Filtrar numeros pares
// ENUNCIADO:
//   Dado un array de numeros, usa filter() para crear un nuevo array
//   que contenga solo los numeros pares.
// DATOS DE EJEMPLO:
const numerosEj2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// RESULTADO ESPERADO:
//   [2, 4, 6, 8, 10]
// CONCEPTOS USADOS: filter()


// Ejercicio 3: Buscar estudiante por nombre
// ------------------------------------------------------------
// TITULO: Buscar estudiante por nombre
// ENUNCIADO:
//   Dado un array de objetos de estudiantes, usa find() para encontrar
//   el estudiante cuyo nombre sea "Maria". Muestra el objeto completo
//   del estudiante encontrado.
// DATOS DE EJEMPLO:
const estudiantesEj3 = [
    { nombre: "Ana", nota: 85 },
    { nombre: "Carlos", nota: 45 },
    { nombre: "Maria", nota: 92 },
    { nombre: "Jose", nota: 67 },
];
// RESULTADO ESPERADO:
//   { nombre: "Maria", nota: 92 }
// CONCEPTOS USADOS: find()


// Ejercicio 4: Sumar todos los valores
// ------------------------------------------------------------
// TITULO: Sumar todos los valores con reduce
// ENUNCIADO:
//   Dado un array de numeros, usa reduce() para calcular la suma total
//   de todos los valores del array.
// DATOS DE EJEMPLO:
const numerosEj4 = [10, 20, 30, 40, 50];
// RESULTADO ESPERADO:
//   150
// CONCEPTOS USADOS: reduce(), acumulador, valor inicial


// Ejercicio 5: Ordenar numeros de menor a mayor
// ------------------------------------------------------------
// TITULO: Ordenar numeros de menor a mayor
// ENUNCIADO:
//   Dado un array de numeros desordenados, usa sort() para ordenarlos
//   de menor a mayor. Asegurate de usar la funcion de comparacion
//   numerica correcta (no el orden por defecto que trata como strings).
// DATOS DE EJEMPLO:
const numerosEj5 = [42, 15, 8, 23, 36, 3];
// RESULTADO ESPERADO:
//   [3, 8, 15, 23, 36, 42]
// CONCEPTOS USADOS: sort(), funcion de comparacion numerica


// Ejercicio 6: Convertir nombres a mayusculas
// ------------------------------------------------------------
// TITULO: Convertir todos los nombres a mayusculas
// ENUNCIADO:
//   Dado un array de nombres en minusculas, usa map() para crear un
//   nuevo array con todos los nombres en MAYUSCULAS.
// DATOS DE EJEMPLO:
const nombresEj6 = ["ana", "carlos", "maria", "jose", "lucia"];
// RESULTADO ESPERADO:
//   ["ANA", "CARLOS", "MARIA", "JOSE", "LUCIA"]
// CONCEPTOS USADOS: map(), toUpperCase()


// Ejercicio 7: Verificar si todas las notas son aprobatorias
// ------------------------------------------------------------
// TITULO: Verificar si todos aprobaron
// ENUNCIADO:
//   Dado un array de objetos con estudiantes y sus notas, usa every()
//   para verificar si TODOS los estudiantes tienen nota mayor o igual
//   a 51 (nota minima para aprobar en Bolivia).
//   Imprime un mensaje indicando si todos aprobaron o si hay reprobados.
// DATOS DE EJEMPLO:
const estudiantesEj7 = [
    { nombre: "Ana", nota: 85 },
    { nombre: "Carlos", nota: 45 },
    { nombre: "Maria", nota: 92 },
    { nombre: "Jose", nota: 67 },
];
// RESULTADO ESPERADO:
//   false (porque Carlos tiene 45, que es menor a 51)
//   Mensaje: "No todos aprobaron"
// CONCEPTOS USADOS: every()


// Ejercicio 8: Calcular total de carrito de compras
// ------------------------------------------------------------
// TITULO: Calcular total de carrito de compras
// ENUNCIADO:
//   Dado un array de productos que representan un carrito de compras
//   en una tienda de La Paz, usa reduce() para calcular el total a pagar.
//   Cada producto tiene un precio y una cantidad. El total es la suma
//   de (precio * cantidad) de todos los productos.
// DATOS DE EJEMPLO:
const carrito = [
    { producto: "Cuaderno", precio: 25, cantidad: 2 },
    { producto: "Lapiz", precio: 3, cantidad: 5 },
    { producto: "Borrador", precio: 2, cantidad: 1 },
    { producto: "Regla", precio: 5, cantidad: 1 },
    { producto: "Mochila", precio: 150, cantidad: 1 },
];
// RESULTADO ESPERADO:
//   Total: Bs. 230
//   (25*2 + 3*5 + 2*1 + 5*1 + 150*1 = 50 + 15 + 2 + 5 + 150 = 222)
//   Correccion: Total: Bs. 222
// CONCEPTOS USADOS: reduce(), acumulador, multiplicacion, operaciones aritmeticas
