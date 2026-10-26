// ============================================================
// LECCIÓN 28 - TIPOS DE DATOS EN JAVASCRIPT
// ============================================================

// ------------------------------------------------------------
// 1. ¿QUÉ ES UN TIPO DE DATO?
// ------------------------------------------------------------
// Un tipo de dato define la naturaleza de la información que
// puede almacenar una variable. Determina qué operaciones se
// pueden realizar con ella y cómo se representa internamente.
// En JavaScript existen 8 tipos de datos: 7 primitivos y 1 no primitivo (Object).

console.log("--- 1. ¿Qué es un tipo de dato? ---");
console.log("Los tipos de datos definen qué clase de valor almacena una variable.");

// ------------------------------------------------------------
// 2. TIPADO DINÁMICO
// ------------------------------------------------------------
// JavaScript es un lenguaje de tipado dinámico: una variable
// puede cambiar de tipo durante la ejecución del programa.
// No necesitas declarar el tipo al crear la variable.

console.log("\n--- 2. Tipado dinámico ---");

let dato = "Hola";
console.log(dato);          // "Hola" (tipo string)
console.log(typeof dato);   // "string"

dato = 42;
console.log(dato);          // 42 (tipo number)
console.log(typeof dato);   // "number"

dato = true;
console.log(dato);          // true (tipo boolean)
console.log(typeof dato);   // "boolean"

// La misma variable "dato" pasó de string a number y luego a boolean
// sin ningún error. Eso es tipado dinámico.

// ------------------------------------------------------------
// 3. STRING (CADENA DE TEXTO)
// ------------------------------------------------------------
// Los strings representan texto. Se escriben entre comillas
// dobles ("), simples (') o backticks (`).

console.log("\n--- 3. String ---");

const nombre = "María";
const apellido = 'García';
const mensaje = `Hola, ${nombre} ${apellido}!`;

console.log(nombre);        // "María"
console.log(apellido);      // "García"
console.log(mensaje);       // "Hola, María García!"
console.log(typeof nombre); // "string"

const numeroComoTexto = "42";
console.log(numeroComoTexto); // "42" (es texto, NO un número)
console.log(typeof numeroComoTexto); // "string"

// ------------------------------------------------------------
// 4. NUMBER (NÚMERO)
// ------------------------------------------------------------
// Los números incluyen enteros, decimales y negativos.
// En JavaScript todos son del mismo tipo "number".

console.log("\n--- 4. Number ---");

const edad = 25;
const precio = 19.99;
const temperatura = -8;
const pi = 3.14159;

console.log(edad);          // 25
console.log(precio);        // 19.99
console.log(temperatura);   // -8
console.log(pi);            // 3.14159

console.log(typeof edad);       // "number"
console.log(typeof precio);     // "number"
console.log(typeof temperatura); // "number"

// Todos son "number", sin importar si son enteros, decimales o negativos.

// ------------------------------------------------------------
// 5. BOOLEAN (BOOLEANO)
// ------------------------------------------------------------
// Los booleanos solo pueden tener dos valores: true o false.
// Se usan para representar estados de verdadero o falso.

console.log("\n--- 5. Boolean ---");

const esMayorDeEdad = true;
const tieneDescuento = false;
const estaConectado = true;
const esViernes = false;

console.log(esMayorDeEdad);    // true
console.log(tieneDescuento);   // false
console.log(typeof esMayorDeEdad);  // "boolean"
console.log(typeof tieneDescuento); // "boolean"

// Ejemplo práctico: estados true/false
const activo = true;
const eliminado = false;
console.log("¿Está activo?", activo);
console.log("¿Está eliminado?", eliminado);

// ------------------------------------------------------------
// 6. UNDEFINED (INDEFINIDO)
// ------------------------------------------------------------
// undefined aparece cuando una variable ha sido declarada pero
// no se le ha asignado ningún valor.

console.log("\n--- 6. Undefined ---");

let sinValor;
console.log(sinValor);          // undefined
console.log(typeof sinValor);   // "undefined"

let pendiente;
pendiente = "Tarea pendiente";
console.log(pendiente); // "Tarea pendiente" (ya tiene valor)

// undefined también es el resultado por defecto al acceder
// a propiedades o elementos que no existen.

// ------------------------------------------------------------
// 7. NULL (VALOR NULO / VACÍO INTENCIONALMENTE)
// ------------------------------------------------------------
// null representa la ausencia intencional de un valor.
// Se asigna de forma explícita cuando queremos indicar
// que una variable está "vacía" o "sin contenido".

console.log("\n--- 7. Null ---");

let resultadoBusqueda = null;
console.log(resultadoBusqueda);        // null
console.log(typeof resultadoBusqueda); // "object" (¡extraño, pero es así!)

// Diferencia clave:
// - undefined: la variable NO tiene valor asignado (automático)
// - null: nosotros ASIGNAMOS intencionalmente que no tenga valor

let usuario = null; // Aún no hay usuario conectado (intencional)
let session;        // Olvidamos iniciarla → undefined (accidental)

console.log("Usuario:", usuario);   // null
console.log("Session:", session);   // undefined

// ------------------------------------------------------------
// 8. BIGINT (NÚMEROS MUY GRANDES)
// ------------------------------------------------------------
// BigInt se usa para trabajar con números extremadamente grandes
// que superan el límite seguro de Number. Se crea agregando "n"
// al final del número o con la función BigInt().

console.log("\n--- 8. BigInt ---");

const numeroGrande = 9007199254740991n;
const otroGrande = BigInt("123456789012345678901234567890");

console.log(numeroGrande);          // 9007199254740991n
console.log(otroGrande);            // 123456789012345678901234567890n
console.log(typeof numeroGrande);   // "bigint"

// Nota: No se pueden mezclar BigInt y Number en operaciones directas.

// ------------------------------------------------------------
// 9. SYMBOL (SIMBOLO)
// ------------------------------------------------------------
// Symbol crea valores únicos e irrepetibles. Se usa principalmente
// en temas avanzados como propiedades privadas en objetos.
// Por ahora solo basta con saber que existe.

console.log("\n--- 9. Symbol ---");

const miSimbolo = Symbol("descripcion");
const otroSimbolo = Symbol("descripcion");

console.log(miSimbolo);            // Symbol(descripcion)
console.log(typeof miSimbolo);     // "symbol"
console.log(miSimbolo === otroSimbolo); // false (siempre son únicos)

// ------------------------------------------------------------
// 10. OBJETOS (INTRODUCCIÓN)
// ------------------------------------------------------------
// Los objetos son el tipo NO primitivo de JavaScript.
// Permiten agrupar múltiples valores relacionados usando
// pares de clave: valor. Se estudian a fondo en lecciones posteriores.

console.log("\n--- 10. Objetos (introducción) ---");

// Objeto vacío
const vacio = {};
console.log(vacio);             // {}
console.log(typeof vacio);      // "object"

// Objeto básico con datos
const persona = {
    nombre: "Carlos",
    edad: 30,
    esEstudiante: false
};
console.log(persona);
// { nombre: "Carlos", edad: 30, esEstudiante: false }
console.log(typeof persona);    // "object"

// Arrays (arreglos) también son objetos internamente.
// Se verán en detalle más adelante.
const colores = ["rojo", "verde", "azul"];
console.log(colores);           // ["rojo", "verde", "azul"]
console.log(typeof colores);    // "object" (¡los arrays también son objetos!)

// ------------------------------------------------------------
// 11. EL OPERADOR typeof
// ------------------------------------------------------------
// typeof permite conocer el tipo de dato de cualquier valor o variable.

console.log("\n--- 11. El operador typeof ---");

console.log(typeof "Hola");         // "string"
console.log(typeof 42);             // "number"
console.log(typeof 3.14);           // "number"
console.log(typeof true);           // "boolean"
console.log(typeof false);          // "boolean"
console.log(typeof undefined);      // "undefined"
console.log(typeof null);           // "object" (¡quirk histórico!)
console.log(typeof 100n);           // "bigint"
console.log(typeof Symbol("id"));   // "symbol"
console.log(typeof {});             // "object"
console.log(typeof []);             // "object"

// Tabla resumen de typeof:
//
// Valor                  | typeof
// -----------------------|-------------
// "Hola"                 | "string"
// 42                     | "number"
// true / false           | "boolean"
// undefined              | "undefined"
// null                   | "object" (!)
// 9007199254740991n      | "bigint"
// Symbol("desc")         | "symbol"
// {}                     | "object"
// []                     | "object"

// ------------------------------------------------------------
// 12. DATOS PRIMITIVOS VS OBJETOS
// ------------------------------------------------------------
// Los datos primitivos son inmutables (no se pueden modificar
// directamente) y se almacenan por valor.
// Los objetos son mutables y se almacenan por referencia.

console.log("\n--- 12. Datos primitivos vs objetos ---");

// Primitivos: se copian por valor
const a = 10;
const b = a;
console.log(a); // 10
console.log(b); // 10

// Objetos: se copian por referencia
const obj1 = { valor: 10 };
const obj2 = obj1;
console.log(obj1); // { valor: 10 }
console.log(obj2); // { valor: 10 }

// Resumen de tipos primitivos:
// string, number, boolean, undefined, null, bigint, symbol
//
// Tipos no primitivos (objetos):
// object (incluye arrays, objetos, funciones, etc.)

// ------------------------------------------------------------
// 13. LA PARTICULARIDAD DE typeof null
// ------------------------------------------------------------
// typeof null devuelve "object", ¡pero null NO es un objeto!
// Esto es un error histórico de JavaScript que se mantiene
// por compatibilidad con código existente.

console.log("\n--- 13. La particularidad de typeof null ---");

const valorNulo = null;
console.log(valorNulo);           // null
console.log(typeof valorNulo);    // "object"

// Para verificar correctamente si algo es null, usa comparación directa:
console.log(valorNulo === null);  // true

// No te dejes engañar: null NO es un objeto,
// es un tipo primitivo que representa ausencia de valor.

// ------------------------------------------------------------
// 14. VALORES ESPECIALES: NaN, Infinity, -Infinity
// ------------------------------------------------------------
// Son valores especiales del tipo "number" que representan
// situaciones matemáticas particulares.

console.log("\n--- 14. Valores especiales: NaN, Infinity, -Infinity ---");

// NaN = "Not a Number" (No es un número)
// Aparece cuando una operación matemática no tiene sentido
const resultadoInvalido = "hola" * 2;
console.log(resultadoInvalido);     // NaN
console.log(typeof resultadoInvalido); // "number" (¡NaN es técnicamente un number!)

const divisionSinSentido = 0 / 0;
console.log(divisionSinSentido);    // NaN

// Infinity = infinito positivo
const infinito = 1 / 0;
console.log(infinito);              // Infinity
console.log(typeof infinito);       // "number"

// -Infinity = infinito negativo
const negativoInfinito = -1 / 0;
console.log(negativoInfinito);      // -Infinity
console.log(typeof negativoInfinito); // "number"

// Ejemplos que producen NaN:
console.log("texto" - 5);   // NaN
console.log(Math.sqrt(-1)); // NaN
console.log(undefined + 1); // NaN

// Ejemplos que producen Infinity:
console.log(999999999999999999999 * 999999999999); // Infinity
console.log(Number.MAX_VALUE * 2);                 // Infinity

// ------------------------------------------------------------
// 15. BUENAS PRÁCTICAS PARA IDENTIFICAR DATOS
// ------------------------------------------------------------

console.log("\n--- 15. Buenas prácticas ---");

// 1. Usa typeof para verificar tipos cuando sea necesario
const verificar = typeof "texto";
console.log("Tipo:", verificar); // "string"

// 2. Compara directamente con null (no uses typeof)
const dato2 = null;
if (dato2 === null) {
    console.log("El dato es null");
}

// 3. Usa Array.isArray() para detectar arrays
const miArray = [1, 2, 3];
console.log(Array.isArray(miArray)); // true

// 4. Nombra las variables de forma que indiquen su contenido
const nombreUsuario = "ana";     // string
const edadUsuario = 28;          // number
const activoUsuario = true;      // boolean
const fechaRegistro = null;      // null (aún no registrada)

console.log(nombreUsuario, typeof nombreUsuario);
console.log(edadUsuario, typeof edadUsuario);
console.log(activoUsuario, typeof activoUsuario);
console.log(fechaRegistro, fechaRegistro === null);

// ============================================================
// EJEMPLOS PRÁCTICOS COMPLETOS
// ============================================================

console.log("\n========================================");
console.log("EJEMPLOS PRÁCTICOS");
console.log("========================================");

// --- Ejemplo: Datos de una persona ---
console.log("\n-- Datos de una persona --");

const nombrePersona = "Laura";       // string
const edadPersona = 28;              // number
const esEstudiantePersona = true;    // boolean

console.log("Nombre:", nombrePersona, "→", typeof nombrePersona);
console.log("Edad:", edadPersona, "→", typeof edadPersona);
console.log("¿Es estudiante?", esEstudiantePersona, "→", typeof esEstudiantePersona);

// --- Ejemplo: Datos de un producto ---
console.log("\n-- Datos de un producto --");

const nombreProducto = "Laptop";          // string
const precioProducto = 899.99;            // number
const enStockProducto = true;             // boolean
const stockProducto = 150;                // number

console.log("Producto:", nombreProducto, "→", typeof nombreProducto);
console.log("Precio:", precioProducto, "→", typeof precioProducto);
console.log("¿En stock?", enStockProducto, "→", typeof enStockProducto);
console.log("Stock:", stockProducto, "→", typeof stockProducto);

// --- Ejemplo: Variables sin valor definido ---
console.log("\n-- Variables sin valor definido --");

let resultado;
console.log("Resultado:", resultado);             // undefined
console.log("Tipo:", typeof resultado);           // "undefined"

// --- Ejemplo: Valores nulos intencionales ---
console.log("\n-- Valores nulos intencionales --");

let respuestaServidor = null;
console.log("Respuesta:", respuestaServidor);         // null
console.log("Tipo:", typeof respuestaServidor);       // "object" (quirk)
console.log("¿Es null?", respuestaServidor === null); // true

// --- Ejemplo: Comprobación de tipos con typeof ---
console.log("\n-- Comprobación de todos los tipos --");

const ejemplos = [
    "Texto",                  // string
    42,                       // number
    3.14,                     // number
    true,                     // boolean
    false,                    // boolean
    undefined,                // undefined
    null,                     // null
    9007199254740991n,        // bigint
    Symbol("id"),             // symbol
    {},                       // object
    [1, 2, 3]                 // object (array)
];

for (const ejemplo of ejemplos) {
    console.log(`Valor: ${String(ejemplo).padEnd(20)} → Tipo: ${typeof ejemplo}`);
}

// --- Ejemplo: Array y Object (typeof devuelve "object") ---
console.log("\n-- Array y Object son \"object\" --");

const frutas = ["manzana", "banana", "naranja"];
console.log("Array:", frutas);
console.log("typeof array:", typeof frutas); // "object"
console.log("¿Es array?", Array.isArray(frutas)); // true

const coche = { marca: "Toyota", modelo: "Corolla", año: 2023 };
console.log("Object:", coche);
console.log("typeof object:", typeof coche); // "object"

// Ambos son objetos, pero los veremos con detalle más adelante.

console.log("\n========================================");
console.log("FIN DE LA LECCIÓN 28");
console.log("========================================");
