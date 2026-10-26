// =============================================
// EJERCICIOS - LECCIÓN 31: CONDICIONALES
// =============================================

// =============================================
// EJERCICIO 1: ¿PUEDE VOTAR?
// =============================================
// En Bolivia, la mayoría de edad es 18 años. A partir de esa edad,
// una persona puede ejercer su derecho al voto.
//
// Escribe un programa que determine si una persona puede votar
// según su edad.
//
// DATOS DE EJEMPLO:
//   const edadVotante = 17;
//
// RESULTADO ESPERADO:
//   Si edad >= 18 → "Puede votar en las elecciones"
//   Si edad < 18  → "Aún no tienes edad para votar"
//
// CONCEPTOS: if...else, comparación con >=

// --- Escribe tu código aquí ---


// =============================================
// EJERCICIO 2: ¿APROBÓ EL ESTUDIANTE?
// =============================================
// En el sistema universitario boliviano, la nota mínima para aprobar
// es 51 puntos sobre 100.
//
// Escribe un programa que determine si un estudiante aprobó
// o reprobó según su nota final.
//
// DATOS DE EJEMPLO:
//   const nombreEstudiante = "Ana";
//   const notaFinal = 48;
//
// RESULTADO ESPERADO:
//   Si nota >= 51 → "Ana aprobó con [nota] puntos"
//   Si nota < 51  → "Ana reprobó con [nota] puntos. Nota mínima: 51"
//
// CONCEPTOS: if...else, interpolación con template literals o concatenación

// --- Escribe tu código aquí ---


// =============================================
// EJERCICIO 3: EL MAYOR DE TRES NÚMEROS
// =============================================
// Escribe un programa que encuentre el mayor de tres números dados.
//
// DATOS DE EJEMPLO:
//   const a = 15;
//   const b = 32;
//   const c = 8;
//
// RESULTADO ESPERADO:
//   "El mayor de los tres números es: 32"
//
// PISTA: Necesitarás condiciones anidadas o combinación con &&.
//
// CONCEPTOS: if...else if...else, condiciones anidadas, operadores lógicos

// --- Escribe tu código aquí ---


// =============================================
// EJERCICIO 4: CALCULADORA CON SWITCH
// =============================================
// Crea una calculadora básica que realice las cuatro operaciones
// fundamentales según la operación seleccionada.
//
// DATOS DE EJEMPLO:
//   const operacion = "multiplicar";
//   const numero1 = 12;
//   const numero2 = 5;
//
// RESULTADO ESPERADO:
//   "12 multiplicar 5 = 60"
//
// OPERACIONES POSIBLES:
//   "sumar"       → numero1 + numero2
//   "restar"      → numero1 - numero2
//   "multiplicar" → numero1 * numero2
//   "dividir"     → numero1 / numero2
//   Otra          → "Operación no válida"
//
// CONCEPTOS: switch, case, break, default

// --- Escribe tu código aquí ---


// =============================================
// EJERCICIO 5: CLASIFICAR NIVELES DE RENDIMIENTO
// =============================================
// Una empresa evalúa el rendimiento de sus empleados según
// la cantidad de tareas completadas en el mes.
//
// Clasifica el rendimiento según estas reglas:
//
//   Tareas completadas  |  Nivel de rendimiento
//   -------------------|------------------------
//   Menos de 10        |  Insuficiente
//   De 10 a 24         |  Suficiente
//   De 25 a 39         |  Bueno
//   40 o más           |  Excelente
//
// DATOS DE EJEMPLO:
//   const tareasCompletadas = 28;
//
// RESULTADO ESPERADO:
//   "Tareas: 28 - Rendimiento: Bueno"
//
// CONCEPTOS: if...else if...else, rangos numéricos

// --- Escribe tu código aquí ---


// =============================================
// EJERCICIO 6: AÑO BISIESTO
// =============================================
// Determina si un año es bisiesto. Un año es bisiesto si cumple
// las siguientes reglas:
//
//   1. Es divisible entre 4
//   2. PERO NO es divisible entre 100
//   3. A MENOS QUE también sea divisible entre 400
//
// Ejemplos:
//   2024 → bisiesto (divisible entre 4, no entre 100)
//   1900 → NO bisiesto (divisible entre 100, no entre 400)
//   2000 → bisiesto (divisible entre 400)
//   2023 → NO bisiesto (no divisible entre 4)
//
// DATOS DE EJEMPLO:
//   const anio = 2024;
//
// RESULTADO ESPERADO:
//   "El año 2024 es bisiesto"
//   o
//   "El año 2024 no es bisiesto"
//
// CONCEPTOS: if anidados, operadores lógicos (&&, ||), operador módulo (%)

// --- Escribe tu código aquí ---
