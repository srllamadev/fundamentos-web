// ============================================================
// EJERCICIOS - LECCIÓN 30: CONVERSIÓN DE TIPOS
// ============================================================
// Resuelve los siguientes ejercicios en la consola del navegador (F12)
// o ejecutando este archivo con Node.js.
// ============================================================

// ------------------------------------------------------------
// EJERCICIO 1: Convertir edades
// ------------------------------------------------------------
// Las siguientes edades de estudiantes están almacenadas como
// cadenas de texto. Conviértelas a números y calcula la suma
// total de todas las edades.
//
// Datos:
const edad1 = "22";
const edad2 = "19";
const edad3 = "25";
const edad4 = "21";
const edad5 = "18";

// a) Convierte cada edad a número usando al menos 2 métodos diferentes.
// b) Suma todas las edades y muestra el resultado en consola.
// c) Calcula el promedio de edades.
//
// Resultado esperado:
// - Suma total: 105
// - Promedio: 21
//
// Conceptos usados: Number(), parseInt(), operador +, operaciones aritméticas


// ------------------------------------------------------------
// EJERCICIO 2: Sumar números en texto
// ------------------------------------------------------------
// Un kiosko en La Paz tiene los siguientes precios escritos
// como texto en su sistema. Conviértelos a números y calcula
// el total de una compra.
//
// Datos:
const precioSaltena = "12.50";
const precioRefresco = "8.00";
const precioEmpanada = "5.75";

// a) Convierte cada precio a número.
// b) Calcula el total si alguien compra 3 salteñas, 2 refrescos y 4 empanadas.
// c) Si el cliente paga con un billete de Bs. 200, ¿cuánto es el vuelto?
// d) Muestra los resultados con mensajes claros en consola.
//
// Resultado esperado (formato):
// - Total compra: [número] Bs.
// - Vuelto: [número] Bs.
//
// Conceptos usados: Number() o parseFloat(), operaciones aritméticas


// ------------------------------------------------------------
// EJERCICIO 3: Precio a número
// ------------------------------------------------------------
// Un estudiante de Cochabamba necesita calcular el costo total
// de sus materiales universitarios. Los precios están guardados
// como strings en el sistema de la librería.
//
// Datos:
const precioCuaderno = "35.99";
const precioLapices = "12";
const precioMochila = "180.50";
const precioGoma = "3.25";
const precioRegla = "8.75";

// a) Convierte todos los precios a números usando el método más adecuado.
// b) Calcula el subtotal sumando todos los precios.
// c) Aplica un descuento del 10% si el subtotal supera Bs. 200.
// d) Calcula el IVA del 16% sobre el precio final.
// e) Muestra: subtotal, descuento aplicado (si corresponde),
//    precio después de descuento, IVA y total final.
//
// Resultado esperado (formato):
// - Subtotal: [número] Bs.
// - Descuento: [número] Bs. (o "No aplica")
// - Precio con descuento: [número] Bs.
// - IVA (16%): [número] Bs.
// - Total a pagar: [número] Bs.
//
// Conceptos usados: parseFloat() o Number(), operaciones aritméticas, condicionales


// ------------------------------------------------------------
// EJERCICIO 4: Identificar conversiones incorrectas
// ------------------------------------------------------------
// El siguiente código tiene errores de conversión.
// Sin ejecutarlo, identifica cada error, explica por qué ocurre
// y escribe la corrección. Después verifica ejecutando el código.
//
// Código con errores:

const sueldo1 = "4000";
const sueldo2 = "5500";
const sumaSueldos = sueldo1 + sueldo2;
console.log("Suma de sueldos:", sumaSueldos);
// Debería mostrar: 9500, pero muestra otra cosa.
// ¿Por qué? Explica y corrige.

const notaEstudiante = "setenta y cinco";
const notaNumero = Number(notaEstudiante);
console.log("Nota:", notaNumero);
// ¿Qué muestra? ¿Es correcto? ¿Cómo verificarías si la conversión fue válida?

const unidadesVendidas = "150 unidades";
const unidadesNumero = Number(unidadesVendidas);
console.log("Unidades:", unidadesNumero);
// ¿Qué muestra? ¿Cómo lo corregirías?

const temperatura = "25.5°C";
const tempNum = parseInt(temperatura);
console.log("Temperatura:", tempNum);
// ¿Es parseInt() la mejor opción aquí? ¿Qué alternativa daría un resultado más preciso?

const esActivo = "false";
if (esActivo) {
    console.log("El usuario está activo");
} else {
    console.log("El usuario no está activo");
}
// ¿Qué rama se ejecuta? ¿Es el comportamiento esperado? ¿Por qué?

// Para cada error escribe:
// 1. ¿Qué muestra el código?
// 2. ¿Por qué ocurre el error?
// 3. ¿Cómo lo corriges?
//
// Conceptos usados: Number(), parseInt(), Boolean(), truthy/falsy, coerción


// ------------------------------------------------------------
// EJERCICIO 5: Comprobar entradas inválidas
// ------------------------------------------------------------
// Un sistema de registro de notas de una universidad en Sucre
// recibe datos de diferentes fuentes. Algunos datos son válidos,
// otros no. Tu trabajo es validar cada entrada.
//
// Datos recibidos:
const entradas = [
    "85",          // Nota de matemáticas
    "ausente",     // Nota de literatura
    "",            // Nota de física
    "92.5",        // Nota de química
    "null",        // Nota de biología
    "71",          // Nota de historia
];

// Para cada entrada debes:
// a) Intentar convertirla a número.
// b) Verificar si el resultado es un número válido (no NaN).
// c) Si es válida, mostrar: "Nota válida: [número]"
// d) Si no es válida, mostrar: "Entrada inválida: '[texto original]' → No es un número"
// e) Al final, mostrar cuántas notas válidas e inválidas hay en total.
//
// Resultado esperado (formato):
// "85" → Nota válida: 85
// "ausente" → Entrada inválida: 'ausente' → No es un número
// "" → [analizar qué pasa con string vacío]
// "92.5" → Nota válida: 92.5
// "null" → [analizar qué pasa con el texto "null"]
// "71" → Nota válida: 71
// Total válidas: [número]
// Total inválidas: [número]
//
// Conceptos usados: Number(), Number.isNaN(), bucles, condicionales


// ============================================================
// FIN DE LOS EJERCICIOS
// ============================================================
