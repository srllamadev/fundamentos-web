// ============================================================
// LECCIÓN 33 - FUNCIONES EN JAVASCRIPT
// ============================================================

// ------------------------------------------------------------
// 1. ¿QUÉ ES UNA FUNCIÓN?
// ------------------------------------------------------------
// Una función es un bloque de código con nombre que realiza
// una tarea específica. Se define una vez y se puede ejecutar
// las veces que necesites llamándola por su nombre.
//
// Analogía: Una función es como una receta de cocina.
// La receta tiene un nombre, ingredientes (parámetros)
// y un resultado (valor de retorno). Puedes usarla
// cuantas veces quieras sin escribir todo de nuevo.

console.log("--- 1. ¿Qué es una función? ---");
console.log("Una función es un bloque de código con nombre que se puede reutilizar.");


// ------------------------------------------------------------
// 2. ¿POR QUÉ USAR FUNCIONES?
// ------------------------------------------------------------
// Las funciones resuelven 3 problemas fundamentales:
//
// 1. REUTILIZACIÓN: Escribes el código una vez y lo usas muchas veces.
//    En lugar de copiar y pegar la misma lógica, la metes en una función.
//
// 2. ORGANIZACIÓN: Divides un programa grande en piezas pequeñas
//    y manejables. Cada pieza hace una cosa específica.
//
// 3. LEGIBILIDAD: Un nombre descriptivo dice exactamente qué hace
//    el código. Es más fácil leer "calcularPromedio()" que
//    cinco líneas de operaciones matemáticas.

console.log("\n--- 2. ¿Por qué usar funciones? ---");

// Sin funciones: código repetido
const nombre1 = "María";
console.log("¡Hola, " + nombre1 + "! Bienvenida al curso.");

const nombre2 = "Carlos";
console.log("¡Hola, " + nombre2 + "! Bienvenido al curso.");

const nombre3 = "Ana";
console.log("¡Hola, " + nombre3 + "! Bienvenida al curso.");

// Con funciones: una definición, muchos usos
console.log("(Más adelante veremos cómo una función simplifica esto...)");


// ------------------------------------------------------------
// 3. DECLARACIÓN DE FUNCIONES CON function
// ------------------------------------------------------------
// Para crear una función usamos la palabra reservada "function",
// seguida del nombre, paréntesis () y llaves {}.
//
// SINTAXIS:
// function nombreFuncion() {
//     // código que se ejecuta al llamar la función
// }
//
// CONVENCIONES DE NOMBRE:
// - Usar camelCase: calcularPromedio, mostrarResultado
// - Usar verbos: saludar, obtener, calcular, mostrar
// - Ser descriptivo: esPar (no ep), convertirTemperatura (no ct)

console.log("\n--- 3. Declaración de funciones ---");

// Ejemplo: Función que muestra un saludo
function mostrarSaludo() {
    console.log("¡Bienvenido al curso de JavaScript!");
    console.log("Unidad Educativa: Colegio Mariscal Santa Cruz");
    console.log("La Paz, Bolivia - Gestión 2026");
}

console.log("Función 'mostrarSaludo' declarada (aún no se ha ejecutado).");
console.log("Las funciones se declaran primero, luego se invocan.");


// ------------------------------------------------------------
// 4. INVOCAR (LLAMAR) FUNCIONES
// ------------------------------------------------------------
// Una función declarada NO se ejecuta sola.
// Necesitas INVOCARLA escribiendo su nombre seguido de paréntesis.
//
// SINTAXIS DE INVOCACIÓN:
// nombreFuncion();

console.log("\n--- 4. Invocar funciones ---");

// Invocamos la función que declaramos antes:
mostrarSaludo();

// Puedes invocar la misma función las veces que quieras:
console.log("\nInvocando de nuevo:");
mostrarSaludo();

// Cada vez que invocas la función, todo el código
// dentro de ella se ejecuta de arriba a abajo.


// ------------------------------------------------------------
// 5. FUNCIONES SIN PARÁMETROS
// ------------------------------------------------------------
// Una función sin parámetros dentro de los () no recibe datos.
// Siempre hace exactamente lo mismo cuando se invoca.

console.log("\n--- 5. Funciones sin parámetros ---");

// Ejemplo: Mostrar mensaje de bienvenida
function mostrarBienvenida() {
    console.log("========================================");
    console.log("  BIENVENIDO AL SISTEMA ESTUDIANTIL");
    console.log("  UMSA - Universidad Mayor de San Andrés");
    console.log("========================================");
}

// Ejemplo: Mostrar separador visual
function mostrarSeparador() {
    console.log("----------------------------------------");
}

mostrarBienvenida();
mostrarSeparador();
console.log("Módulo de calificaciones cargado correctamente.");
mostrarSeparador();


// ------------------------------------------------------------
// 6. FUNCIONES CON UN PARÁMETRO
// ------------------------------------------------------------
// Los parámetros permiten que la función reciba datos
// para trabajar con ellos. Son como variables internas.
//
// SINTAXIS:
// function nombreFuncion(parametro) {
//     // código que usa el parametro
// }

console.log("\n--- 6. Funciones con un parámetro ---");

// Ejemplo: Saludar a una persona específica
function saludarA(nombre) {
    console.log("¡Hola, " + nombre + "! Bienvenido al curso.");
}

saludarA("María");
saludarA("Carlos");
saludarA("Ana");
saludarA("Jorge");

// Ejemplo: Mostrar la nota de un estudiante
function mostrarNota(estudiante) {
    console.log("Estudiante: " + estudiante + " | Estado: En revisión");
}

mostrarNota("Luis Poma");
mostrarNota("Sofía Vargas");

// Ejemplo: Mostrar precio en Bolivianos
function mostrarPrecio(producto) {
    console.log("Producto: " + producto + " - Precio disponible en tienda.");
}

mostrarPrecio("Cuaderno universitario");
mostrarPrecio("Calculadora Casio FX-570");


// ------------------------------------------------------------
// 7. DIFERENCIA ENTRE PARÁMETRO Y ARGUMENTO
// ------------------------------------------------------------
// Estos dos términos se confunden mucho. Aquí la diferencia:
//
// PARÁMETRO: Es el nombre que aparece en la DECLARACIÓN de la función.
//            Es como una variable vacía que espera un valor.
//            -> Se define UNA VEZ en la función.
//
// ARGUMENTO: Es el valor REAL que le pasas a la función cuando la INVOCAS.
//            -> Es diferente cada vez que llamas la función.
//
// Ejemplo:
// function saludarA(nombre) { ... }
//                  ^^^^^^
//                  PARÁMETRO (variable interna)
//
// saludarA("María");
//            ^^^^^^^
//            ARGUMENTO (valor real que se pasa)
//
// saludarA("Carlos");
//            ^^^^^^^^
//            ARGUMENTO (otro valor diferente)

console.log("\n--- 7. Parámetro vs Argumento ---");
console.log("Parámetro = el nombre en la declaración (nombre)");
console.log("Argumento = el valor real al invocar (\"María\", \"Carlos\")");

function describirEstudiante(nombre) {
    console.log(nombre + " es estudiante de la UMSA.");
}

// "nombre" es el parámetro
// "Valeria Rojas" es el argumento
describirEstudiante("Valeria Rojas");

// "nombre" es el parámetro
// "Diego Choque" es el argumento
describirEstudiante("Diego Choque");


// ------------------------------------------------------------
// 8. FUNCIONES CON MÚLTIPLES PARÁMETROS
// ------------------------------------------------------------
// Una función puede recibir más de un parámetro.
// Se separan con comas dentro de los paréntesis.
//
// SINTAXIS:
// function nombreFuncion(parametro1, parametro2, parametro3) {
//     // código que usa los tres parámetros
// }
//
// IMPORTANTE: Los argumentos se asignan en ORDEN.
// El primer argumento va al primer parámetro,
// el segundo argumento al segundo parámetro, etc.

console.log("\n--- 8. Funciones con múltiples parámetros ---");

// Ejemplo: Mostrar información de un estudiante
function mostrarInfo(nombre, edad) {
    console.log("Nombre: " + nombre + " | Edad: " + edad + " años");
}

mostrarInfo("María Quispe", 17);
mostrarInfo("Carlos Flores", 16);
mostrarInfo("Ana Martínez", 18);

// Ejemplo: Mostrar coordenadas
function mostrarCoordenada(x, y) {
    console.log("Punto en (" + x + ", " + y + ")");
}

mostrarCoordenada(10, 20);
mostrarCoordenada(5, 0);

// Ejemplo: Mostrar datos de un producto
function mostrarProducto(nombre, precioBs) {
    console.log("Producto: " + nombre + " | Precio: Bs. " + precioBs);
}

mostrarProducto("Libro de Matemáticas", 150);
mostrarProducto("Mochila escolar", 200);
mostrarProducto("Calculadora", 350);


// ------------------------------------------------------------
// 9. FUNCIONES QUE RETORNAN VALORES (return)
// ------------------------------------------------------------
// La palabra "return" hace dos cosas:
// 1. Devuelve un valor a quien llamó la función
// 2. Termina la ejecución de la función inmediatamente
//
// SINTAXIS:
// function nombreFuncion(parametros) {
//     const resultado = /* algún cálculo */;
//     return resultado;
// }
//
// Después de return, el código restante NO se ejecuta.

console.log("\n--- 9. Funciones con return ---");

// Ejemplo: Sumar dos números
function sumar(a, b) {
    return a + b;
}

const resultadoSuma = sumar(15, 27);
console.log("15 + 27 = " + resultadoSuma);

const otraSuma = sumar(100, 250);
console.log("100 + 250 = " + otraSuma);

// Ejemplo: Calcular promedio de 3 notas
function calcularPromedio(nota1, nota2, nota3) {
    const suma = nota1 + nota2 + nota3;
    const promedio = suma / 3;
    return promedio;
}

const promedioMaria = calcularPromedio(72, 65, 80);
console.log("Promedio de María: " + promedioMaria);

const promedioLuis = calcularPromedio(45, 50, 38);
console.log("Promedio de Luis: " + promedioLuis);

// En el sistema boliviano, 51 es la nota mínima para aprobar
if (promedioMaria >= 51) {
    console.log("María: APROBADA con promedio " + promedioMaria);
} else {
    console.log("María: REPROBADA con promedio " + promedioMaria);
}

if (promedioLuis >= 51) {
    console.log("Luis: APROBADO con promedio " + promedioLuis);
} else {
    console.log("Luis: REPROBADO con promedio " + promedioLuis);
}

// Ejemplo: Calcular área de un rectángulo
function calcularAreaRectangulo(base, altura) {
    return base * altura;
}

const area1 = calcularAreaRectangulo(5, 3);
console.log("Área del rectángulo (5 x 3): " + area1);

const area2 = calcularAreaRectangulo(10, 7);
console.log("Área del rectángulo (10 x 7): " + area2);

// Ejemplo: Convertir Celsius a Fahrenheit
// Fórmula: °F = °C × 9/5 + 32
function convertirCelsiusAFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
}

const temp1 = convertirCelsiusAFahrenheit(0);
console.log("0°C = " + temp1 + "°F");

const temp2 = convertirCelsiusAFahrenheit(100);
console.log("100°C = " + temp2 + "°F");

const temp3 = convertirCelsiusAFahrenheit(25);
console.log("25°C (La Paz promedio) = " + temp3 + "°F");

// Ejemplo: Verificar si un número es par
function esPar(numero) {
    return numero % 2 === 0;
}

console.log("¿4 es par? " + esPar(4));
console.log("¿7 es par? " + esPar(7));
console.log("¿0 es par? " + esPar(0));
console.log("¿156 es par? " + esPar(156));


// ------------------------------------------------------------
// 10. DIFERENCIA ENTRE console.log() Y return
// ------------------------------------------------------------
// ¡ESTE ES UNO DE LOS ERRORES MÁS COMUNES EN PRINCIPIANTES!
//
// console.log():
//   - Muestra un mensaje en la consola
//   - NO devuelve ningún valor usable por el código
//   - Es solo para que el humano LEA el resultado
//   - La función sigue ejecutándose después
//
// return:
//   - Devuelve un valor que el código puede USAR
//   - No muestra nada en la consola por sí solo
//   - Termina la ejecución de la función inmediatamente
//   - El valor se puede guardar en una variable
//
// REGLA DE ORO:
//   - Si necesitas el resultado para OTROS cálculos -> usa return
//   - Si solo quieres VER el resultado -> usa console.log()

console.log("\n--- 10. console.log() vs return (MUY IMPORTANTE) ---");

// MAL: Función que usa console.log en vez de return
function sumarMal(a, b) {
    console.log(a + b);
}

// BIEN: Función que usa return
function sumarBien(a, b) {
    return a + b;
}

// Veamos la diferencia:
console.log("Usando sumarMal:");
const resultadoMal = sumarMal(5, 3);
console.log("Valor guardado: " + resultadoMal);
// La consola muestra 8, pero resultadoMal es undefined!

console.log("\nUsando sumarBien:");
const resultadoBien = sumarBien(5, 3);
console.log("Valor guardado: " + resultadoBien);
// La consola NO muestra nada dentro de la función,
// pero resultadoBien tiene el valor 8

// Puedes USAR el resultado de sumarBien en otros cálculos:
const doble = sumarBien(5, 3) * 2;
console.log("Doble de la suma: " + doble);

// NO puedes usar el resultado de sumarMal:
const dobleMal = sumarMal(5, 3) * 2;
console.log("Doble con sumarMal: " + dobleMal);
// ¡undefined * 2 = NaN!

// EJEMPLO PRÁCTICO:
// Quieres calcular el promedio y luego verificar si aprobó
function calcularPromedioReal(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3;
}

// Esto SÍ funciona porque la función devuelve un número:
const miPromedio = calcularPromedioReal(72, 65, 80);
if (miPromedio >= 51) {
    console.log("Aprobado con " + miPromedio);
} else {
    console.log("Reprobado con " + miPromedio);
}

// Esto NO funcionaría si la función usa console.log en vez de return
// porque miPromedio sería undefined y undefined >= 51 es false.


// ------------------------------------------------------------
// 11. FUNCIONES SIN RETURN EXPLÍCITO
// ------------------------------------------------------------
// Si una función no tiene return (o tiene return sin valor),
// devuelve undefined automáticamente.
//
// undefined es un valor especial que significa "no hay valor".

console.log("\n--- 11. Funciones sin return ---");

// Esta función muestra algo pero no devuelve nada
function soloMostrar(mensaje) {
    console.log("Mensaje: " + mensaje);
}

const valorRetornado = soloMostrar("Hola mundo");
console.log("Lo que devolvió: " + valorRetornado);
// Muestra: undefined

// Esta función tiene return vacío
function sinValor() {
    return;
}

console.log("sinValor() devuelve: " + sinValor());
// Muestra: undefined


// ------------------------------------------------------------
// 12. VALORES POR DEFECTO EN PARÁMETROS
// ------------------------------------------------------------
// Puedes asignar valores por defecto a los parámetros.
// Si no se pasa un argumento, se usa el valor por defecto.
//
// SINTAXIS:
// function nombreFuncion(parametro = valorPorDefecto) {
//     // código
// }

console.log("\n--- 12. Valores por defecto ---");

// Ejemplo: Saludar con valor por defecto
function saludar(nombre = "estudiante") {
    console.log("¡Hola, " + nombre + "! Bienvenido al curso.");
}

saludar("María");
saludar("Carlos");
saludar();
// Si no pasas argumento, usa "estudiante"

// Ejemplo: Calcular precio con IVA (13% en Bolivia)
function calcularPrecioConIVA(precio, tasaIVA = 13) {
    const iva = precio * (tasaIVA / 100);
    return precio + iva;
}

const precio1 = calcularPrecioConIVA(100);
console.log("Precio con IVA por defecto (13%): Bs. " + precio1);

const precio2 = calcularPrecioConIVA(100, 16);
console.log("Precio con IVA personalizado (16%): Bs. " + precio2);

const precio3 = calcularPrecioConIVA(500);
console.log("Bs. 500 + IVA: Bs. " + precio3);

// Ejemplo: Mostrar mensaje con rol por defecto
function mostrarUsuario(nombre, rol = "estudiante") {
    console.log(nombre + " es " + rol + " en la UMSA.");
}

mostrarUsuario("Ana Martínez");
mostrarUsuario("Prof. Gutiérrez", "docente");
mostrarUsuario("Luis Poma");


// ------------------------------------------------------------
// 13. DECLARACIÓN VS EXPRESIÓN DE FUNCIONES
// ------------------------------------------------------------
// Hay dos formas principales de crear funciones:
//
// 1. DECLARACIÓN DE FUNCIÓN (Function Declaration):
//    function nombreFuncion() { ... }
//    - Se puede invocar ANTES de declararla (hoisting)
//    - Es la forma más común y recomendada para principiantes
//
// 2. EXPRESIÓN DE FUNCIÓN (Function Expression):
//    const nombreFuncion = function() { ... };
//    - NO se puede invocar antes de declararla
//    - Se guarda en una variable tipo const
//    - El nombre de la variable ES el nombre de la función

console.log("\n--- 13. Declaración vs Expresión de funciones ---");

// Declaración de función
function mostrarMensajeDeclaracion() {
    console.log("Esto es una declaración de función.");
}

// Expresión de función
const mostrarMensajeExpresion = function() {
    console.log("Esto es una expresión de función.");
};

mostrarMensajeDeclaracion();
mostrarMensajeExpresion();

// Ambas funcionan igual al invocarlas:
function sumarDeclaracion(a, b) {
    return a + b;
}

const sumarExpresion = function(a, b) {
    return a + b;
};

console.log("Suma con declaración: " + sumarDeclaracion(10, 20));
console.log("Suma con expresión: " + sumarExpresion(10, 20));

// Ejemplo práctico con expresión de función
const calcularArea = function(base, altura) {
    return (base * altura) / 2;
};

console.log("Área del triángulo (base 6, altura 4): " + calcularArea(6, 4));
console.log("Área del triángulo (base 10, altura 5): " + calcularArea(10, 5));


// ------------------------------------------------------------
// 14. HOISTING (IZAMIENTO)
// ------------------------------------------------------------
// Hoisting es el comportamiento de JavaScript que mueve las
// DECLARACIONES de funciones al inicio del archivo automáticamente.
//
// Esto significa que puedes INVOCAR una función ANTES de
// declararla en el código. JavaScript la "sube" al inicio.
//
// IMPORTANTE:
// - Las DECLARACIONES de función tienen hoisting completo
// - Las EXPRESIONES de función NO tienen hoisting
//   (porque son variables const/let)

console.log("\n--- 14. Hoisting ---");

// Esto funciona gracias al hoisting:
// Invocamos la función ANTES de declararla
resultadoHoisting = decirHola();
console.log("Resultado con hoisting: " + resultadoHoisting);

function decirHola() {
    return "¡Hola desde una función con hoisting!";
}

// ESTO NO FUNCIONA (descomentar para ver el error):
// const decirAdios = function() {
//     return "¡Adiós!";
// };
// Si intentas invocar decirAdios() antes de esta línea, da error.
// Las expresiones de función no tienen hoisting.

console.log("Hoisting: las declaraciones de función se mueven al inicio.");
console.log("Las expresiones de función NO tienen hoisting.");

// Hoisting funciona así internamente:
// JavaScript reordena tu código:
// 1. Primero declara TODAS las funciones
// 2. Luego ejecuta el resto del código de arriba a abajo


// ------------------------------------------------------------
// 15. FUNCIONES QUE LLAMAN A OTRAS FUNCIONES
// ------------------------------------------------------------
// Una función puede invocar a otra función dentro de su código.
// Esto es fundamental para crear programas organizados.

console.log("\n--- 15. Funciones que llaman a otras funciones ---");

// Función auxiliar: calcular descuento
function calcularDescuento(precio, porcentaje) {
    const descuento = precio * (porcentaje / 100);
    return descuento;
}

// Función principal: calcular precio final
function calcularPrecioFinal(precio, descuento) {
    const montoDescuento = calcularDescuento(precio, descuento);
    const precioFinal = precio - montoDescuento;
    return precioFinal;
}

const precioOriginal = 800;
const porcentajeDescuento = 25;
const precioFinalResultado = calcularPrecioFinal(precioOriginal, porcentajeDescuento);

console.log("Precio original: Bs. " + precioOriginal);
console.log("Descuento: " + porcentajeDescuento + "%");
console.log("Precio final: Bs. " + precioFinalResultado);

// Otro ejemplo: sistema de calificaciones
function obtenerEstado(nota) {
    if (nota >= 51) {
        return "APROBADO";
    } else {
        return "REPROBADO";
    }
}

function mostrarResultado(estudiante, nota) {
    const estado = obtenerEstado(nota);
    console.log("Estudiante: " + estudiante + " | Nota: " + nota + " | Estado: " + estado);
}

mostrarResultado("Ana Martínez", 75);
mostrarResultado("Luis Poma", 38);
mostrarResultado("María Quispe", 51);
mostrarResultado("Carlos Flores", 49);

// Ejemplo: convertir y mostrar temperatura
function convertirKYMostrar(celsius) {
    const fahrenheit = convertirCelsiusAFahrenheit(celsius);
    console.log(celsius + "°C equivalen a " + fahrenheit + "°F");
}

convertirKYMostrar(0);
convertirKYMostrar(25);
convertirKYMostrar(100);


// ------------------------------------------------------------
// 16. SEPARACIÓN DE RESPONSABILIDADES
// ------------------------------------------------------------
// Cada función debe hacer UNA SOLA COSA y hacerla bien.
// Si una función hace demasiadas cosas, divídela en varias.
//
// MALA PRÁCTICA: Una función que calcula, muestra y guarda
// BUENA PRÁCTICA: Una función calcula, otra muestra, otra guarda

console.log("\n--- 16. Separación de responsabilidades ---");

// MAL: Función que hace todo
function procesarNotaMal(nombre, nota1, nota2, nota3) {
    const promedio = (nota1 + nota2 + nota3) / 3;
    let estado;
    if (promedio >= 51) {
        estado = "APROBADO";
    } else {
        estado = "REPROBADO";
    }
    console.log("========================================");
    console.log("Estudiante: " + nombre);
    console.log("Notas: " + nota1 + ", " + nota2 + ", " + nota3);
    console.log("Promedio: " + promedio);
    console.log("Estado: " + estado);
    console.log("========================================");
}

// BIEN: Funciones separadas, cada una hace algo
function calcularPromedioTres(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3;
}

function determinarEstado(nota) {
    if (nota >= 51) {
        return "APROBADO";
    } else {
        return "REPROBADO";
    }
}

function mostrarReporte(nombre, promedio, estado) {
    console.log("========================================");
    console.log("Estudiante: " + nombre);
    console.log("Promedio: " + promedio.toFixed(2));
    console.log("Estado: " + estado);
    console.log("========================================");
}

// Uso de las funciones separadas
const promedioJuan = calcularPromedioTres(65, 72, 58);
const estadoJuan = determinarEstado(promedioJuan);
mostrarReporte("Juan Pérez", promedioJuan, estadoJuan);

const promedioSofia = calcularPromedioTres(88, 92, 85);
const estadoSofia = determinarEstado(promedioSofia);
mostrarReporte("Sofía Vargas", promedioSofia, estadoSofia);

const promedioDiego = calcularPromedioTres(30, 42, 35);
const estadoDiego = determinarEstado(promedioDiego);
mostrarReporte("Diego Choque", promedioDiego, estadoDiego);

// Ventaja de separar: puedes reutilizar cada función
// y probarlas independientemente.
console.log("\nVentaja: cada función se puede reutilizar por separado.");
console.log("determinarEstado(60) = " + determinarEstado(60));
console.log("determinarEstado(40) = " + determinarEstado(40));


// ------------------------------------------------------------
// 17. BUENAS PRÁCTICAS PARA NOMBRES DE FUNCIONES
// ------------------------------------------------------------
// El nombre de una función debe describir LO QUE HACE.
//
// REGLAS:
// 1. Usar VERBOS al inicio: calcular, mostrar, obtener, convertir, validar
// 2. Usar camelCase: calcularPromedio (no calcularpromedio)
// 3. Ser DESRIPTIVO: convertirCelsiusAFahrenheit (no convertir)
// 4. Para booleanos, usar prefijos: esPar, esMayor, tieneDescuento
// 5. Evitar nombres genéricos: procesar, hacer, datos
//
// EJEMPLOS:
// Malo          -> Bueno
// datos()       -> obtenerEstudiantes()
// hacer()       -> calcularPromedio()
// x(a,b)        -> sumar(a, b)
// validar()     -> esNotaValida(nota)
// proc()        -> procesarCalificaciones()

console.log("\n--- 17. Buenas prácticas para nombres ---");

// Ejemplos de buenos nombres:
function calcularPerimetro(lado) {
    return lado * 4;
}

function obtenerIniciales(nombreCompleto) {
    const partes = nombreCompleto.split(" ");
    let iniciales = "";
    for (let i = 0; i < partes.length; i++) {
        if (partes[i].length > 0) {
            iniciales = iniciales + partes[i][0];
        }
    }
    return iniciales;
}

function esNotaAprobatoria(nota) {
    return nota >= 51;
}

function formatearPrecio(precio) {
    return "Bs. " + precio.toFixed(2);
}

console.log("Perímetro de cuadrado (lado 5): " + calcularPerimetro(5));
console.log("Iniciales de 'Ana María Torres': " + obtenerIniciales("Ana María Torres"));
console.log("¿72 es nota aprobatoria? " + esNotaAprobatoria(72));
console.log("¿38 es nota aprobatoria? " + esNotaAprobatoria(38));
console.log("Precio formateado: " + formatearPrecio(1500.5));


// ------------------------------------------------------------
// 18. SISTEMA DE COMPRAS PRÁCTICO (COMBINANDO FUNCIONES)
// ------------------------------------------------------------
// Este ejemplo combina múltiples funciones para crear
// un pequeño sistema de cálculo de compras.

console.log("\n--- 18. Sistema de compras práctico ---");

function calcularSubtotal(precio, cantidad) {
    return precio * cantidad;
}

function aplicarDescuentoCompras(subtotal, porcentaje) {
    const descuento = subtotal * (porcentaje / 100);
    return subtotal - descuento;
}

function formatearMoneda(monto) {
    return "Bs. " + monto.toFixed(2);
}

function mostrarTicket(precio, cantidad, descuento) {
    const subtotal = calcularSubtotal(precio, cantidad);
    const total = aplicarDescuentoCompras(subtotal, descuento);
    console.log("========================================");
    console.log("        TICKET DE COMPRA");
    console.log("        Librería Central - La Paz");
    console.log("========================================");
    console.log("Precio unitario: " + formatearMoneda(precio));
    console.log("Cantidad: " + cantidad);
    console.log("Subtotal: " + formatearMoneda(subtotal));
    console.log("Descuento: " + descuento + "%");
    console.log("TOTAL: " + formatearMoneda(total));
    console.log("========================================");
    console.log("¡Gracias por su compra!");
}

// Comprar cuadernos
mostrarTicket(12, 5, 10);

console.log("");

// Comprar mochilas
mostrarTicket(180, 2, 15);

console.log("");

// Comprar libros
mostrarTicket(250, 3, 5);


// ============================================================
// FIN DE LA LECCIÓN
// ============================================================
console.log("\n=== Fin de la lección 33 ===");
console.log("Has aprendido: funciones, parámetros, return, valores por defecto, hoisting y buenas prácticas.");
