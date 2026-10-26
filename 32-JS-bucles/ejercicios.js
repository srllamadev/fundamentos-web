// ============================================================
// LECCIÓN 32 - EJERCICIOS PRÁCTICOS
// ============================================================
// Estos ejercicios combinan todos los conceptos aprendidos
// en las lecciones 25-32.
// NO incluyas las soluciones aquí, solo tu código.
// ============================================================


// ------------------------------------------------------------
// EJERCICIO 1: Números del 1 al 100
// ------------------------------------------------------------
// Enunciado: Escribe un programa que muestre todos los números
// del 1 al 100 en la consola, uno por línea.
//
// Datos de ejemplo: (no necesita datos de entrada)
//
// Resultado esperado:
// 1
// 2
// 3
// ...
// 100
//
// Conceptos usados: for, console.log()


// ------------------------------------------------------------
// EJERCICIO 2: Números pares del 1 al 50
// ------------------------------------------------------------
// Enunciado: Escribe un programa que muestre solo los números
// pares entre 1 y 50.
//
// Datos de ejemplo: (no necesita datos de entrada)
//
// Resultado esperado:
// 2
// 4
// 6
// 8
// ...
// 50
//
// Conceptos usados: for, condicionales, operador módulo (%), console.log()


// ------------------------------------------------------------
// EJERCICIO 3: Tabla de multiplicar
// ------------------------------------------------------------
// Enunciado: Dado un número, genera e imprime su tabla de
// multiplicar del 1 al 12.
//
// Datos de ejemplo:
// const numero = 6;
//
// Resultado esperado:
// Tabla del 6:
// 6 x 1 = 6
// 6 x 2 = 12
// 6 x 3 = 18
// ...
// 6 x 12 = 72
//
// Conceptos usados: for, operadores de multiplicación, concatenación, console.log()


// ------------------------------------------------------------
// EJERCICIO 4: Factorial
// ------------------------------------------------------------
// Enunciado: Escribe un programa que calcule el factorial de
// un número entero no negativo. El factorial de N (escrito N!)
// es la multiplicación de todos los números desde 1 hasta N.
// Por ejemplo: 5! = 1 x 2 x 3 x 4 x 5 = 120
//
// Datos de ejemplo:
// const numero = 5;
//
// Resultado esperado:
// El factorial de 5 es: 120
//
// Conceptos usados: for o while, acumuladores, condicionales, console.log()
//
// Pista: Usa un acumulador que empiece en 1 y multiplique
//        por cada número desde 1 hasta N.


// ------------------------------------------------------------
// EJERCICIO 5: Suma del 1 al N
// ------------------------------------------------------------
// Enunciado: Escribe un programa que calcule la suma de todos
// los números desde 1 hasta N, donde N es un número dado.
// Por ejemplo, si N = 100, la suma es: 1 + 2 + 3 + ... + 100 = 5050
//
// Datos de ejemplo:
// const n = 100;
//
// Resultado esperado:
// La suma de los números del 1 al 100 es: 5050
//
// Conceptos usados: for, acumuladores, console.log()


// ------------------------------------------------------------
// EJERCICIO 6: Divisores de un número
// ------------------------------------------------------------
// Enunciado: Escribe un programa que encuentre y muestre todos
// los divisores de un número entero positivo. Un divisor es un
// número que divide al número original sin dejar residuo.
//
// Datos de ejemplo:
// const numero = 36;
//
// Resultado esperado:
// Los divisores de 36 son:
// 1, 2, 3, 4, 6, 9, 12, 18, 36
//
// Conceptos usados: for, operador módulo (%), condicionales, console.log()


// ------------------------------------------------------------
// EJERCICIO 7: Triángulo de asteriscos
// ------------------------------------------------------------
// Enunciado: Escribe un programa que dibuje un triángulo de
// asteriscos en la consola. El triángulo debe tener N filas,
// donde la fila 1 tiene 1 asterisco, la fila 2 tiene 2, y
// así sucesivamente.
//
// Datos de ejemplo:
// const filas = 7;
//
// Resultado esperado:
// *
// **
// ***
// ****
// *****
// ******
// *******
//
// Conceptos usados: for anidado, concatenación de strings, console.log()


// ------------------------------------------------------------
// EJERCICIO 8: Números primos hasta N
// ------------------------------------------------------------
// Enunciado: Escribe un programa que muestre todos los números
// primos desde 2 hasta N. Un número primo es aquel que solo
// es divisible por 1 y por sí mismo.
//
// Datos de ejemplo:
// const limite = 50;
//
// Resultado esperado:
// Números primos del 2 al 50:
// 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47
// Total: 15 números primos encontrados
//
// Conceptos usados: for anidado, operador módulo (%), break, contadores, condicionales, console.log()
//
// Pista: Para cada número, verifica si tiene algún divisor
//        entre 2 y la raíz cuadrada de ese número.


// ------------------------------------------------------------
// EJERCICIO INTEGRADOR 9: Reporte de calificaciones
// ------------------------------------------------------------
// Enunciado: Construye un programa completo que calcule un
// reporte de calificaciones. El programa debe:
//
// 1. Usar los siguientes datos de estudiantes (ya definidos):
//    - Cada estudiante tiene: nombre, carnet, notas de 3 parciales
// 2. Calcular el promedio de cada estudiante
// 3. Determinar quién aprobó (promedio >= 51) y quién reprobó
// 4. Calcular el promedio general de la clase
// 5. Encontrar al estudiante con la nota más alta y más baja
// 6. Mostrar un resumen completo con:
//    - Lista de estudiantes con su promedio y estado
//    - Total de aprobados y reprobados
//    - Promedio general
//    - Cuadro de honor (estudiantes con promedio >= 80)
//    - Estudiantes en riesgo (promedio < 30)
//
// Datos de ejemplo:
const estudiantes = [
    { nombre: "Carla Mendoza", carnet: "1234567", notas: [78, 65, 82] },
    { nombre: "Roberto Paz", carnet: "2345678", notas: [42, 35, 50] },
    { nombre: "Fernanda López", carnet: "3456789", notas: [95, 90, 88] },
    { nombre: "Miguel Choque", carnet: "4567890", notas: [30, 28, 35] },
    { nombre: "Patricia Rojas", carnet: "5678901", notas: [55, 60, 48] },
    { nombre: "Andrés Vargas", carnet: "6789012", notas: [88, 92, 85] },
    { nombre: "Lucía Mamani", carnet: "7890123", notas: [40, 45, 38] },
    { nombre: "Daniel Torrez", carnet: "8901234", notas: [70, 68, 75] },
    { nombre: "Sofía Flores", carnet: "9012345", notas: [22, 18, 30] },
    { nombre: "Jorge Quiroga", carnet: "0123456", notas: [62, 58, 55] }
];
//
// Resultado esperado (formato):
// ====================================================
//   REPORTE DE CALIFICACIONES
//   Unidad Educativa: Colegio Simón Bolívar
//   Materia: Ciencias Naturales
//   Profesor: Prof. María Elena Condy
// ====================================================
//
// --- Calificaciones por estudiante ---
//  1. Carla Mendoza    (CI: 1234567) | P1: 78 | P2: 65 | P3: 82 | Prom: 75.00 | APROBADO
//  2. Roberto Paz      (CI: 2345678) | P1: 42 | P2: 35 | P3: 50 | Prom: 42.33 | REPROBADO
//  ...
//
// --- Resumen estadístico ---
// Total de estudiantes: 10
// Aprobados: 6 (60.0%)
// Reprobados: 4 (40.0%)
// Promedio general de la clase: 58.50
//
// --- Cuadro de honor ---
// ★ Fernanda López - Promedio: 91.00
// ★ Andrés Vargas  - Promedio: 88.33
//
// --- Estudiantes en riesgo (promedio < 30) ---
// → Miguel Choque  (Promedio: 31.00)
// → Sofía Flores   (Promedio: 23.33)
//
// ====================================================
//
// Conceptos usados: TODOS (lecciones 25-32)
//   - console.log(), console.warn(), console.error()
//   - Variables y constantes (const, let)
//   - Tipos de datos (strings, numbers, booleans, arrays, objects)
//   - Operadores aritméticos y de comparación
//   - Conversión de tipos (toFixed, toString)
//   - Condicionales (if, else, else if, ternario)
//   - Bucles (for, while, anidados, break, continue)
