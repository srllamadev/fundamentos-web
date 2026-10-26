// ============================================
// LECCIÓN 27 - VARIABLES Y CONSTANTES
// ============================================

// --------------------------------------------
// 1. ¿QUÉ ES UNA VARIABLE?
// --------------------------------------------
// Una variable es un espacio en la memoria del computador
// donde almacenamos un valor que puede cambiar durante
// la ejecución del programa.
// Piensa en ella como una caja con una etiqueta (nombre)
// donde guardas algo (el valor).

console.log("--- 1. ¿Qué es una variable? ---");
console.log("Una variable almacena datos que podemos usar y modificar");


// --------------------------------------------
// 2. DECLARACIÓN DE VARIABLES CON let
// --------------------------------------------
// "let" se usa cuando el valor puede cambiar después.

let nombreEstudiante = "María";
let edad = 20;
let precio = 150.50;

console.log("--- 2. Variables con let ---");
console.log("Nombre:", nombreEstudiante);
console.log("Edad:", edad);
console.log("Precio:", precio);

// Podemos cambiar el valor después
nombreEstudiante = "Juan";
console.log("Nombre actualizado:", nombreEstudiante);


// --------------------------------------------
// 3. DECLARACIÓN DE CONSTANTES CON const
// --------------------------------------------
// "const" se usa cuando el valor NO va a cambiar.
// Es una buena práctica usar const por defecto.

const PI = 3.14159;
const pais = "Bolivia";
const IVA_RATE = 0.13; // 13% de IVA en Bolivia

console.log("--- 3. Constantes con const ---");
console.log("PI:", PI);
console.log("País:", pais);
console.log("Tasa de IVA:", IVA_RATE);


// --------------------------------------------
// 4. LA PALABRA CLAVE var (LEGADO)
// --------------------------------------------
// "var" es la forma antigua de declarar variables.
// Fue la única opción antes de ES6 (2015).
// HOY NO se recomienda usar var porque tiene problemas:
// - No tiene alcance de bloque (puede causar bugs)
// - Permite redeclarar la misma variable (confuso)
// - Se "eleva" al inicio de la función (hoisting)
// Usa let o const en su lugar.

var ciudad = "La Paz"; // Funciona, pero no lo uses
console.log("--- 4. var (no recomendado) ---");
console.log("Ciudad:", ciudad);


// --------------------------------------------
// 5. DIFERENCIAS ENTRE let, const Y var
// --------------------------------------------
/*
+-------------------+-------------------+-------------------+-------------------+
| Característica    | let               | const             | var               |
+-------------------+-------------------+-------------------+-------------------+
| ¿Se puede         | Sí                | No                | Sí                |
| reasignar?        |                   |                   |                   |
+-------------------+-------------------+-------------------+-------------------+
| ¿Se puede         | No                | No                | Sí                |
| redeclarar?       |                   |                   |                   |
+-------------------+-------------------+-------------------+-------------------+
| ¿Alcance?         | Bloque            | Bloque            | Función           |
+-------------------+-------------------+-------------------+-------------------+
| ¿Se debe usar?    | Sí (si cambia)    | Sí (por defecto)  | No (obsoleto)     |
+-------------------+-------------------+-------------------+-------------------+
*/

console.log("--- 5. Diferencias ---");
console.log("Usa const por defecto, let solo si el valor cambia");


// --------------------------------------------
// 6. DECLARACIÓN E INICIALIZACIÓN
// --------------------------------------------
// Declarar = crear la variable
// Inicializar = darle un valor por primera vez

// Declaración e inicialización en una línea:
let departamento = "Santa Cruz";

// Declaración e inicialización separadas:
let poblacion;
poblacion = 3000000;

console.log("--- 6. Declaración e inicialización ---");
console.log("Departamento:", departamento);
console.log("Población:", poblacion);


// --------------------------------------------
// 7. REASIGNACIÓN DE VALORES
// --------------------------------------------
// Con let: SÍ podemos cambiar el valor
let contador = 1;
console.log("--- 7. Reasignación ---");
console.log("Contador inicial:", contador);

contador = 2;
contador = 3;
console.log("Contador final:", contador);

// Con const: NO podemos cambiar el valor
const añoFundacion = 1825;
console.log("Año de fundación:", añoFundacion);

// ¡ESTO CAUSARÍA UN ERROR! No se puede reasignar una const:
// añoFundacion = 1826;  // Error: Assignment to constant variable.


// --------------------------------------------
// 8. VARIABLES SIN INICIALIZAR (undefined)
// --------------------------------------------
// Si declaras una variable sin darle valor, vale "undefined"

let telefono;
console.log("--- 8. Variables sin inicializar ---");
console.log("Teléfono (sin valor):", telefono);
// Salida: undefined

// Las const DEBEN inicializarse al declararse:
// const codigoPostal;  // Error: Missing initializer in const declaration
const codigoPostal = 2000; // Correcto


// --------------------------------------------
// 9. REGLAS PARA NOMBRAR VARIABLES
// --------------------------------------------
/*
REGLAS:
1. Pueden contener letras, números, $ y _
2. DEBEN empezar con letra, _ o $ (nunca con número)
3. No pueden tener espacios
4. No pueden ser palabras reservadas (let, const, if, etc.)
5. Son case-sensitive (nombre ≠ Nombre)
*/

// Nombres VÁLIDOS:
let nombreUsuario = "Ana";
let _total = 500;
let $precio = 99.99;
let numero1 = 10;

// Nombres INVÁLIDOS (causarían error):
// let 1erLugar = "oro";      // Error: no puede empezar con número
// let nombre completo = "X"; // Error: no puede tener espacios
// let let = "valor";         // Error: "let" es palabra reservada
// let mi-variable = 5;       // Error: el guion - no se permite

console.log("--- 9. Reglas de nombres ---");
console.log("Nombre válido:", nombreUsuario);
console.log("Total:", _total);


// --------------------------------------------
// 10. CONVENCIÓN camelCase
// --------------------------------------------
// En JavaScript usamos camelCase para nombres de variables.
// camelCase: primera palabra en minúscula, siguientes empiezan con mayúscula.

// Ejemplos:
let nombreEstudianteCompleto = "Carlos Mamani";
let totalProductos = 5;
let precioConDescuento = 85.50;
let esMayorDeEdad = true;

// MALAS prácticas (no usar):
// let NombreEstudiante = "X";   // PascalCase (se usa para clases)
// let nombre_estudiante = "X";  // snake_case (se usa en Python)
// let NOMBREESTUDIANTE = "X";   // Todo junto sin separar

console.log("--- 10. Convención camelCase ---");
console.log("Nombre completo:", nombreEstudianteCompleto);
console.log("Total productos:", totalProductos);


// --------------------------------------------
// 11. PALABRAS RESERVADAS
// --------------------------------------------
/*
No puedes usar estas palabras como nombres de variables:

Palabras reservadas comunes:
- break, case, catch, class, const, continue
- debugger, default, delete, do, else, export
- extends, finally, for, function, if, import
- in, instanceof, let, new, return, super
- switch, this, throw, try, typeof, var
- void, while, with, yield

Otras importantes:
- true, false, null, undefined
- if, else, for, while, do
- function, return, class, extends
- try, catch, throw, finally
*/

console.log("--- 11. Palabras reservadas ---");
console.log("No uses palabras como: let, const, if, for, function como nombres");


// --------------------------------------------
// 12. ALCANCE DE BLOQUE (INTRODUCCIÓN)
// --------------------------------------------
// Las variables declaradas con let y const solo existen
// dentro del bloque (entre llaves {}) donde se declaran.

let variableGlobal = "Soy visible en todo el archivo";

if (true) {
    let variableLocal = "Solo existo dentro de este bloque";
    console.log("--- 12. Alcance de bloque ---");
    console.log("Dentro del bloque:", variableLocal);
    console.log("Variable global también visible:", variableGlobal);
}

// console.log(variableLocal); // Error: variableLocal is not defined

console.log("Fuera del bloque:", variableGlobal);
// console.log(variableLocal); // ¡Esto causaría error!

// Ejemplo con for:
for (let i = 0; i < 3; i++) {
    // "i" solo existe dentro de este for
}
// console.log(i); // Error: i is not defined


// --------------------------------------------
// 13. BUENAS PRÁCTICAS
// --------------------------------------------
/*
1. Usa "const" por defecto
2. Usa "let" solo cuando necesites cambiar el valor
3. NUNCA uses "var" (es obsoleto)
4. Usa nombres descriptivos en camelCase
5. Inicializa las variables al declararlas si es posible
6. Evita nombres de una sola letra (excepto en loops: i, j, k)
7. No uses caracteres especiales ($, _) al inicio sin razón
*/


// ============================================
// EJEMPLOS PRÁCTICOS
// ============================================

console.log("\n=== EJEMPLOS PRÁCTICOS ===\n");

// --------------------------------------------
// PRÁCTICA 1: Almacenar información de un estudiante
// --------------------------------------------
console.log("--- Práctica 1: Información de estudiante ---");

const nombreEstudiante2 = "Lucía Fernández";
const edadEstudiante = 22;
const notaFinal = 85;

console.log("Estudiante:", nombreEstudiante2);
console.log("Edad:", edadEstudiante, "años");
console.log("Nota final:", notaFinal);


// --------------------------------------------
// PRÁCTICA 2: Calcular costo total de productos
// --------------------------------------------
console.log("--- Práctica 2: Calcular costo total ---");

const precioProducto = 35.50; // Precio en Bs.
const cantidad = 4;
const ivaBolivia = 0.13;

let subtotal = precioProducto * cantidad;
let iva = subtotal * ivaBolivia;
let total = subtotal + iva;

console.log("Precio unitario:", precioProducto, "Bs.");
console.log("Cantidad:", cantidad);
console.log("Subtotal:", subtotal, "Bs.");
console.log("IVA (13%):", iva, "Bs.");
console.log("Total a pagar:", total, "Bs.");


// --------------------------------------------
// PRÁCTICA 3: Modificar variables (contador y acumulador)
// --------------------------------------------
console.log("--- Práctica 3: Contador y acumulador ---");

let contadorVisitas = 0;
console.log("Visitas iniciales:", contadorVisitas);

contadorVisitas = contadorVisitas + 1;
console.log("Después de 1 visita:", contadorVisitas);

contadorVisitas = contadorVisitas + 5;
console.log("Después de 5 visitas más:", contadorVisitas);

// Acumulador de ventas
let ventasTotales = 0;
ventasTotales = ventasTotales + 100;
ventasTotales = ventasTotales + 250;
ventasTotales = ventasTotales + 75;
console.log("Ventas totales:", ventasTotales, "Bs.");


// --------------------------------------------
// PRÁCTICA 4: Declarar constantes
// --------------------------------------------
console.log("--- Práctica 4: Constantes ---");

const GRAVEDAD = 9.81;
const VELOCIDAD_LUZ = 299792458;
const MONEDA_BOLIVIA = "Boliviano";
const SIGLA_PAIS = "BO";

console.log("Gravedad:", GRAVEDAD, "m/s²");
console.log("Velocidad de la luz:", VELOCIDAD_LUZ, "m/s");
console.log("Moneda:", MONEDA_BOLIVIA);
console.log("Sigla país:", SIGLA_PAIS);


// --------------------------------------------
// PRÁCTICA 5: Valores que cambian vs valores fijos
// --------------------------------------------
console.log("--- Práctica 5: Cambian vs fijos ---");

// Estos NO cambian (usar const):
const TASA_CAMBIO_DOLAR = 6.91;
const NOMBRE_EMPRESA = "TechBolivia";

// Estos SÍ cambian (usar let):
let balanceCuenta = 1000;
let productosEnCarrito = 0;

console.log("Tasa de cambio:", TASA_CAMBIO_DOLAR, "Bs./USD");
console.log("Balance inicial:", balanceCuenta, "Bs.");

balanceCuenta = balanceCuenta - 250; // Compra
console.log("Balance después de compra:", balanceCuenta, "Bs.");

productosEnCarrito = productosEnCarrito + 3;
console.log("Productos en carrito:", productosEnCarrito);


// --------------------------------------------
// PRÁCTICA 6: Intercambiar valores usando variable temporal
// --------------------------------------------
console.log("--- Práctica 6: Intercambiar valores ---");

let notaJuan = 70;
let notaMaria = 90;

console.log("Antes del intercambio:");
console.log("Juan:", notaJuan);
console.log("María:", notaMaria);

// Intercambio usando variable temporal
let temporal = notaJuan;
notaJuan = notaMaria;
notaMaria = temporal;

console.log("Después del intercambio:");
console.log("Juan:", notaJuan);
console.log("María:", notaMaria);

console.log("\n=== FIN DE LA LECCIÓN 27 ===");
