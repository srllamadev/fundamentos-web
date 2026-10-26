// ============================================================
// EJERCICIOS - LECCIÓN 29: OPERADORES
// ============================================================
// Resuelve los siguientes ejercicios en la consola del navegador (F12)
// o ejecutando este archivo con Node.js.
// ============================================================

// ------------------------------------------------------------
// EJERCICIO 1: Área de un rectángulo
// ------------------------------------------------------------
// Calcula el área de un rectángulo dada su base y su altura.
//
// Datos proporcionados:
const baseRectangulo = 12;
const alturaRectangulo = 7;

// Tu tarea:
// 1. Calcula el área (base × altura)
// 2. Imprime el resultado usando template literal en este formato:
//    "El rectángulo de base X y altura Y tiene un área de Z unidades cuadradas"

// Conceptos utilizados: operador de multiplicación (*), template literals

// Ejemplo de resultado esperado:
// "El rectángulo de base 12 y altura 7 tiene un área de 84 unidades cuadradas"


// ------------------------------------------------------------
// EJERCICIO 2: Promedio de notas
// ------------------------------------------------------------
// Calcula el promedio de 3 notas de un estudiante.
//
// Datos proporcionados:
const notaExamen1 = 72;
const notaExamen2 = 88;
const notaExamen3 = 65;

// Tu tarea:
// 1. Calcula el promedio sumando las 3 notas y dividiendo entre 3
// 2. Imprime cada nota y el promedio con 2 decimales
// 3. Indica si el estudiante aprobó (promedio >= 51) o reprobó
//
// Formato esperado:
// "Notas: 72, 88, 65"
// "Promedio: 75.00"
// "Estado: Aprobado" (o "Reprobado")

// Conceptos utilizados: operadores aritméticos (+, /), comparación (>=), template literals


// ------------------------------------------------------------
// EJERCICIO 3: Número par
// ------------------------------------------------------------
// Determina si un número es par o impar usando el operador módulo (%).
//
// Datos proporcionados:
const numero = 47;

// Tu tarea:
// 1. Usa el operador módulo (%) para calcular el residuo de numero ÷ 2
// 2. Si el residuo es 0, el número es par; si no, es impar
// 3. Imprime el resultado en este formato:
//    "El número X es par" o "El número X es impar"
//
// Pista: un número es par si numero % 2 === 0

// Conceptos utilizados: operador módulo (%), comparación con ===

// Ejemplo de resultado esperado:
// Para 47: "El número 47 es impar"
// Para 24: "El número 24 es par"


// ------------------------------------------------------------
// EJERCICIO 4: Aplicar descuento
// ------------------------------------------------------------
// Calcula el precio final después de aplicar un descuento.
//
// Datos proporcionados:
const precioProducto3 = 480;
const porcentajeDescuento2 = 25;

// Tu tarea:
// 1. Calcula el monto del descuento (precio × porcentaje / 100)
// 2. Calcula el precio final (precio original - descuento)
// 3. Imprime todo con este formato:
//    "Precio original: Bs. 480"
//    "Descuento: 25% (Bs. 120)"
//    "Precio final: Bs. 360"

// Conceptos utilizados: operadores aritméticos (*, /, -), template literals

// Ejemplo de resultado esperado:
// "Precio original: Bs. 480"
// "Descuento: 25% (Bs. 120)"
// "Precio final: Bs. 360"


// ------------------------------------------------------------
// EJERCICIO 5: Comparar valores
// ------------------------------------------------------------
// Compara dos valores y explica los resultados usando == vs ===.
//
// Datos proporcionados:
const valorX = "200";
const valorY = 200;
const valorZ = 200;
const valorW = "doscientos";

// Tu tarea:
// 1. Compara valorX y valorY con == y con ===
// 2. Compara valorY y valorZ con == y con ===
// 3. Compara valorX y valorW con == y con ===
// 4. Para cada comparación, imprime:
//    - Los operandos
//    - El resultado de ==
//    - El resultado de ===
//    - Una breve explicación de por qué
//
// Formato esperado:
// "valorX (\"200\") == valorY (200) → true (convierte string a number)"
// "valorX (\"200\") === valorY (200) → false (diferente tipo: string vs number)"

// Conceptos utilizados: == vs ===, tipos de datos, template literals

// Reflexiona:
// ¿Por qué "200" == 200 da true pero "200" === 200 da false?
// ¿Cuál deberías usar en tu código? ¿Por qué?


// ------------------------------------------------------------
// EJERCICIO 6: Condiciones lógicas
// ------------------------------------------------------------
// Evalúa si un estudiante puede inscribirse a un curso usando operadores lógicos.
//
// Datos proporcionados:
const edadEstudiante = 16;
const tieneAutorizacion = false;
const cursoDisponible = true;
const pagoCompletado = true;
const cuposRestantes = 0;

// Tu tarea:
// 1. Evalúa cada condición por separado:
//    - ¿Tiene la edad mínima (18+)? O si no es mayor, ¿tiene autorización?
//    - ¿Hay curso disponible?
//    - ¿Completó el pago?
//    - ¿Hay cupos disponibles (cuposRestantes > 0)?
// 2. Combina todas las condiciones con operadores lógicos (&&, ||, !)
//    para determinar si puede inscribirse
// 3. Imprime el resultado con explicación
//
// Formato esperado:
// "Edad: 16 → ¿Es mayor de edad? false"
// "¿Tiene autorización? false"
// "Requisito edad/autorización: false (debe ser mayor O tener autorización)"
// "¿Curso disponible? true"
// "¿Pago completado? true"
// "¿Hay cupos? false (0 cupos restantes)"
// "¿Puede inscribirse? false (no cumple todas las condiciones)"

// Conceptos utilizados: operadores de comparación (>=, >), operadores lógicos (&&, ||, !)

// Reflexiona:
// ¿Qué pasa si cambias cuposRestantes a 5?
// ¿Qué pasa si tieneAutorizacion es true?
// ¿Qué combinación de valores permitiría la inscripción?


// ============================================================
// FIN DE LOS EJERCICIOS
// ============================================================
