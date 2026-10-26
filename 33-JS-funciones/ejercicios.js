// ============================================================
// LECCIÓN 33 - EJERCICIOS PRÁCTICOS
// ============================================================
// Estos ejercicios practican funciones en JavaScript.
// Escribe tu código para cada ejercicio.
// NO incluyas las soluciones aquí, solo tu código.
// ============================================================


// ------------------------------------------------------------
// EJERCICIO 1: Cuadrado de un número
// ------------------------------------------------------------
// Enunciado: Crea una función llamada "cuadrado" que reciba un
// número como parámetro y retorne su cuadrado. El cuadrado de
// un número es el número multiplicado por sí mismo.
//
// Datos de ejemplo:
// const numero = 5;
// const numero2 = 12;
// const numero3 = 0;
//
// Resultado esperado:
// cuadrado(5) -> 25
// cuadrado(12) -> 144
// cuadrado(0) -> 0
//
// Conceptos usados: function, return, operador de multiplicación (*)


// ------------------------------------------------------------
// EJERCICIO 2: Mayor de edad
// ------------------------------------------------------------
// Enunciado: Crea una función llamada "esMayorDeEdad" que reciba
// la edad de una persona como parámetro y retorne true si la
// persona tiene 18 años o más, o false si es menor de 18.
// En Bolivia la mayoría de edad se alcanza a los 18 años.
//
// Datos de ejemplo:
// const edad1 = 20;
// const edad2 = 17;
// const edad3 = 18;
//
// Resultado esperado:
// esMayorDeEdad(20) -> true
// esMayorDeEdad(17) -> false
// esMayorDeEdad(18) -> true
//
// Conceptos usados: function, return, operador de comparación (>=), booleanos


// ------------------------------------------------------------
// EJERCICIO 3: Promedio de cuatro notas
// ------------------------------------------------------------
// Enunciado: Crea una función llamada "calcularPromedioCuatro"
// que reciba cuatro notas (números) como parámetros y retorne
// el promedio de las cuatro. El promedio es la suma de todos
// los valores dividida entre la cantidad de valores.
//
// Datos de ejemplo:
// const n1 = 72, n2 = 65, n3 = 80, n4 = 55;
//
// Resultado esperado:
// calcularPromedioCuatro(72, 65, 80, 55) -> 68
//
// En el sistema boliviano:
// Si el promedio >= 51, el estudiante aprobó
// Si el promedio < 51, el estudiante reprobó
// Después de calcular el promedio, muestra si aprobó o reprobó.
//
// Conceptos usados: function, return, parámetros múltiples, operadores aritméticos, condicionales


// ------------------------------------------------------------
// EJERCICIO 4: Convertir kilómetros a metros
// ------------------------------------------------------------
// Enunciado: Crea una función llamada "convertirKmAMetros"
// que reciba una distancia en kilómetros como parámetro y
// retorne la equivalencia en metros. Un kilómetro equivale
// a 1000 metros.
//
// Datos de ejemplo:
// const distancia1 = 5;
// const distancia2 = 12.5;
//
// Resultado esperado:
// convertirKmAMetros(5) -> 5000
// convertirKmAMetros(12.5) -> 12500
//
// Ejemplo contextualizado:
// La distancia de La Paz a El Alto es aproximadamente 10 km.
// convertirKmAMetros(10) -> 10000 metros
//
// Conceptos usados: function, return, operador de multiplicación (*)


// ------------------------------------------------------------
// EJERCICIO 5: Encontrar el mayor de tres números
// ------------------------------------------------------------
// Enunciado: Crea una función llamada "encontrarMayor" que
// reciba tres números como parámetros y retorne el mayor
// de los tres. Usa condicionales (if, else if, else) para
// comparar los valores.
//
// Datos de ejemplo:
// const a = 45, b = 72, c = 33;
//
// Resultado esperado:
// encontrarMayor(45, 72, 33) -> 72
// encontrarMayor(100, 50, 75) -> 100
// encontrarMayor(60, 60, 40) -> 60
//
// Pista: Compara el primer número con los otros dos.
// Si es mayor que ambos, ese es el mayor.
// Si no, compara el segundo con el tercero.
//
// Conceptos usados: function, return, parámetros múltiples, condicionales (if/else if/else), operadores de comparación


// ------------------------------------------------------------
// EJERCICIO 6: Precio con descuento
// ------------------------------------------------------------
// Enunciado: Crea una función llamada "calcularPrecioConDescuento"
// que reciba el precio original de un producto y un porcentaje
// de descuento, y retorne el precio final después de aplicar
// el descuento.
//
// Fórmula:
// precioFinal = precioOriginal - (precioOriginal * descuento / 100)
//
// Datos de ejemplo:
// const precio1 = 500, descuento1 = 20;
// const precio2 = 1200, descuento2 = 15;
// const precio3 = 80, descuento3 = 50;
//
// Resultado esperado:
// calcularPrecioConDescuento(500, 20) -> 400
// calcularPrecioConDescuento(1200, 15) -> 1020
// calcularPrecioConDescuento(80, 50) -> 40
//
// Ejemplo contextualizado:
// En la feria de La Paz, una blusa cuesta Bs. 150 con 30% de descuento.
// calcularPrecioConDescuento(150, 30) -> 105
//
// Conceptos usados: function, return, parámetros múltiples, operadores aritméticos, return
