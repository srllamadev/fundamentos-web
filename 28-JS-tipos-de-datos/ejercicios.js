// ============================================================
// EJERCICIOS - LECCIÓN 28: TIPOS DE DATOS
// ============================================================
// Resuelve los siguientes ejercicios en la consola del navegador (F12)
// o ejecutando este archivo con Node.js.
// ============================================================

// ------------------------------------------------------------
// EJERCICIO 1: Identificar tipos de datos
// ------------------------------------------------------------
// Sin ejecutar el código, predice qué tipo de dato es cada valor.
// Luego verifica tu respuesta usando typeof en la consola.

const a = "42";
const b = 42;
const c = true;
const d = null;
const e = undefined;
const f = "false";
const g = 0;
const h = "";
const i = "Hola Mundo";
const j = -15.5;
const k = 100n;
const l = Symbol("test");

// Escribe aquí tus predicciones y luego las verificaciones con typeof:
// Ejemplo: const a = "42" → creo que es string → typeof a = ?


// ------------------------------------------------------------
// EJERCICIO 2: Registro de estudiante
// ------------------------------------------------------------
// Declara las siguientes variables para un registro de estudiante,
// usando el tipo de dato adecuado para cada una:

// - nombre del estudiante (string)
// - edad (number)
// - email (string)
// - promedio de notas (number, puede ser decimal)
// - está activo (boolean)
// - fecha de inscripción (puede ser null si aún no se ha registrado)
// - materia favorita (puede ser undefined si aún no se ha decidido)
// - identificación única (bigint o number muy grande)

// Después de declararlas, imprime cada una con su tipo usando console.log y typeof.


// ------------------------------------------------------------
// EJERCICIO 3: Resultados de typeof
// ------------------------------------------------------------
// Predice qué devolverá typeof en cada caso antes de ejecutarlo.
// Luego comprueba tus respuestas.

const valor1 = "Hola";
const valor2 = 100;
const valor3 = false;
const valor4 = undefined;
const valor5 = null;
const valor6 = 3.14;
const valor7 = {};
const valor8 = [];
const valor9 = "42";
const valor10 = Symbol("id");
const valor11 = 999n;
const valor12 = NaN;

// Escribe tus predicciones aquí:
// typeof valor1 → ?
// typeof valor2 → ?
// typeof valor3 → ?
// typeof valor4 → ?
// typeof valor5 → ?
// typeof valor6 → ?
// typeof valor7 → ?
// typeof valor8 → ?
// typeof valor9 → ?
// typeof valor10 → ?
// typeof valor11 → ?
// typeof valor12 → ?


// ------------------------------------------------------------
// EJERCICIO 4: null vs undefined
// ------------------------------------------------------------
// Explica con tus propias palabras la diferencia entre null y undefined.
// Para ayudarte, completa el siguiente análisis:

// Caso A: Variable declarada sin asignar valor
let variableA;
// ¿Cuál es su valor? ¿Es null o undefined? ¿Por qué?
// Respuesta:


// Caso B: Variable declarada y asignada intencionalmente como vacía
let variableB = null;
// ¿Cuál es su valor? ¿Es null o undefined? ¿Por qué?
// Respuesta:


// Caso C: Función que no devuelve nada explícitamente
function sinRetorno() {
    // no hay return
}
const resultadoC = sinRetorno();
// ¿Cuál es el valor de resultadoC? ¿Por qué?
// Respuesta:


// Caso D: Asignar null a una variable que tenía un valor
let variableD = "datos anteriores";
variableD = null;
// ¿Qué representa null en este caso?
// Respuesta:


// Escribe una conclusión general sobre cuándo usar null y cuándo dejar undefined:


// ------------------------------------------------------------
// EJERCICIO 5: Cambio de tipo (tipado dinámico)
// ------------------------------------------------------------
// Analiza qué sucede en cada paso del siguiente código.
// Predice el resultado ANTES de ejecutarlo.

let dato = "Inicio";
console.log(dato, typeof dato);
// Predicción: ¿qué imprime?

dato = 100;
console.log(dato, typeof dato);
// Predicción: ¿qué imprime?

dato = true;
console.log(dato, typeof dato);
// Predicción: ¿qué imprime?

dato = null;
console.log(dato, typeof dato);
// Predicción: ¿qué imprime?

dato = undefined;
console.log(dato, typeof dato);
// Predicción: ¿qué imprime?

dato = 42.5;
console.log(dato, typeof dato);
// Predicción: ¿qué imprime?

dato = Symbol("nuevo");
console.log(dato, typeof dato);
// Predicción: ¿qué imprime?

dato = 9999999999999999n;
console.log(dato, typeof dato);
// Predicción: ¿qué imprime?

// Preguntas para reflexionar:
// 1. ¿Es válido cambiar el tipo de una variable en JavaScript?
// 2. ¿Qué pasa con el valor anterior cuando se asigna uno nuevo?
// 3. ¿Por qué typeof null devuelve "object"?
// 4. ¿Es buena práctica cambiar el tipo de una variable? ¿Por qué?


// ------------------------------------------------------------
// EJERCICIO EXTRA (opcional): Detectar el tipo correctamente
// ------------------------------------------------------------
// Dado que typeof null devuelve "object", ¿cómo comprobarías
// de forma fiable si un valor es realmente null o un objeto?
// Investiga y escribe tu solución aquí:


// ============================================================
// FIN DE LOS EJERCICIOS
// ============================================================
