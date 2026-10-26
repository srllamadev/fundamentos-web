// ============================================================
// LECCIÓN 29 - OPERADORES EN JAVASCRIPT
// ============================================================

// ------------------------------------------------------------
// 1. ¿QUÉ ES UN OPERADOR?
// ------------------------------------------------------------
// Un operador es un símbolo que le dice al intérprete de JavaScript
// que realice una operación específica sobre uno o más valores (operandos).
// Los operadores son la base de cualquier cálculo, comparación o
// transformación de datos en un programa.
//
// Por ejemplo: 5 + 3 = 8
//   - "+" es el operador
//   - 5 y 3 son los operandos
//   - 8 es el resultado

console.log("--- 1. ¿Qué es un operador? ---");
console.log("Un operador es un símbolo que realiza operaciones sobre valores.");
console.log("Ejemplo: 5 + 3 = 8 (operador: +, operandos: 5 y 3, resultado: 8)");

// ------------------------------------------------------------
// 2. OPERADORES ARITMÉTICOS
// ------------------------------------------------------------
// Los operadores aritméticos realizan operaciones matemáticas básicas.
// Son los más utilizados para cálculos numéricos.
//
// Operador | Descripción       | Ejemplo  | Resultado
// ---------|-------------------|----------|----------
// +        | Suma              | 5 + 3    | 8
// -        | Resta             | 5 - 3    | 2
// *        | Multiplicación    | 5 * 3    | 15
// /        | División          | 6 / 2    | 3
// %        | Módulo (residuo)  | 7 % 2    | 1
// **       | Exponenciación    | 2 ** 3   | 8

console.log("\n--- 2. Operadores aritméticos ---");

// Suma (+)
const suma = 15 + 8;
console.log("Suma: 15 + 8 =", suma);

// Resta (-)
const resta = 20 - 7;
console.log("Resta: 20 - 7 =", resta);

// Multiplicación (*)
const multiplicacion = 6 * 4;
console.log("Multiplicación: 6 * 4 =", multiplicacion);

// División (/)
const division = 100 / 4;
console.log("División: 100 / 4 =", division);

// Módulo (%): devuelve el residuo de la división
const modulo = 10 % 3;
console.log("Módulo: 10 % 3 =", modulo);
console.log("(El residuo de 10 ÷ 3 es 1, porque 10 = 3 × 3 + 1)");

// Exponenciación (**): eleva un número a una potencia
const potencia = 2 ** 5;
console.log("Exponenciación: 2 ** 5 =", potencia);
console.log("(2 elevado a la 5 = 2 × 2 × 2 × 2 × 2 = 32)");

// Ejemplos con contexto boliviano
const precioProducto = 50;
const cantidad = 3;
const totalCompra = precioProducto * cantidad;
console.log("\nContexto: Compra en La Paz");
console.log("Precio unitario: Bs.", precioProducto);
console.log("Cantidad:", cantidad);
console.log("Total:", "Bs.", totalCompra);

const vuelto = 200 - totalCompra;
console.log("Pagó con Bs. 200, vuelve:", "Bs.", vuelto);

// ------------------------------------------------------------
// 3. INCREMENTO (++) Y DECREMENTO (--)
// ------------------------------------------------------------
// El operador incremento (++) suma 1 al valor de una variable.
// El operador decremento (--) resta 1 al valor de una variable.
//
// Hay dos formas de usarlos:
// - Prefijo (++contador): incrementa y luego devuelve el valor
// - Postfijo (contador++): devuelve el valor y luego incrementa
//
// En la práctica, cuando se usan solos en una línea, no hay diferencia.
// La diferencia importa solo cuando el resultado se asigna a otra variable.

console.log("\n--- 3. Incremento y decremento ---");

// Incremento (++)
let contador = 5;
console.log("Contador inicial:", contador);

contador++;
console.log("Después de contador++:", contador);

contador += 1;
console.log("Después de contador += 1:", contador);

++contador;
console.log("Después de ++contador:", contador);

// Decremento (--)
let puntos = 100;
console.log("\nPuntos iniciales:", puntos);

puntos--;
console.log("Después de puntos--:", puntos);

puntos -= 1;
console.log("Después de puntos -= 1:", puntos);

--puntos;
console.log("Después de --puntos:", puntos);

// Diferencia entre prefijo y postfijo (avanzado, solo demostración)
let x = 5;
let y = x++;
console.log("\nDiferencia prefijo vs postfijo:");
console.log("x = 5; y = x++;");
console.log("y =", y, "(toma el valor ANTES de incrementar)");
console.log("x =", x, "(se incrementó DESPUÉS)");

let a = 5;
let b = ++a;
console.log("a = 5; b = ++a;");
console.log("b =", b, "(se incrementó ANTES de tomar el valor)");
console.log("a =", a);

// Ejemplo práctico: contador de estudiantes
let estudiantes = 0;
console.log("\nRegistro de estudiantes en aula:");
estudiantes++;
console.log("Se inscribió 1 estudiante:", estudiantes);
estudiantes++;
console.log("Se inscribió otro:", estudiantes);
estudiantes++;
console.log("Se inscribió otro:", estudiantes);
console.log("Total de estudiantes:", estudiantes);

// ------------------------------------------------------------
// 4. OPERADORES DE ASIGNACIÓN
// ------------------------------------------------------------
// Los operadores de asignación asignan un valor a una variable.
// Ya conoces "=", pero existen formas abreviadas para operaciones comunes.
//
// Operador | Equivalente      | Descripción
// ---------|------------------|---------------------------
// =        | x = y            | Asignación simple
// +=       | x = x + y        | Suma y asigna
// -=       | x = x - y        | Resta y asigna
// *=       | x = x * y        | Multiplica y asigna
// /=       | x = x / y        | Divide y asigna
// %=       | x = x % y        | Módulo y asigna
// **=      | x = x ** y       | Exponenciación y asigna

console.log("\n--- 4. Operadores de asignación ---");

// Asignación simple (=)
let numero = 10;
console.log("Asignación simple: numero =", numero);

// Suma y asignación (+=)
numero += 5;
console.log("numero += 5 →", numero);

// Resta y asignación (-=)
numero -= 3;
console.log("numero -= 3 →", numero);

// Multiplicación y asignación (*=)
numero *= 2;
console.log("numero *= 2 →", numero);

// División y asignación (/=)
numero /= 4;
console.log("numero /= 4 →", numero);

// Módulo y asignación (%=)
numero %= 3;
console.log("numero %= 3 →", numero);

// Exponenciación y asignación (**=)
let base = 2;
base **= 3;
console.log("2 **= 3 →", base);

// Ejemplo práctico: saldo en cuenta (Bs.)
let saldo = 500;
console.log("\nSaldo inicial en cuenta:", "Bs.", saldo);
saldo += 200;
console.log("Depósito de Bs. 200 → Saldo:", "Bs.", saldo);
saldo -= 50;
console.log("Retiro de Bs. 50 → Saldo:", "Bs.", saldo);
saldo *= 1.1;
console.log("Interés del 10% → Saldo:", "Bs.", saldo);

// ------------------------------------------------------------
// 5. OPERADORES DE COMPARACIÓN
// ------------------------------------------------------------
// Los operadores de comparación comparan dos valores y devuelven
// un booleano (true o false). Son fundamentales para tomar decisiones.
//
// Operador | Descripción              | Ejemplo   | Resultado
// ---------|--------------------------|-----------|----------
// >        | Mayor que                | 5 > 3     | true
// <        | Menor que                | 5 < 3     | false
// >=       | Mayor o igual que        | 5 >= 5    | true
// <=       | Menor o igual que        | 5 <= 3    | false

console.log("\n--- 5. Operadores de comparación ---");

// Mayor que (>)
console.log("10 > 5:", 10 > 5);
console.log("3 > 7:", 3 > 7);

// Menor que (<)
console.log("5 < 10:", 5 < 10);
console.log("7 < 3:", 7 < 3);

// Mayor o igual que (>=)
console.log("5 >= 5:", 5 >= 5);
console.log("6 >= 5:", 6 >= 5);
console.log("4 >= 5:", 4 >= 5);

// Menor o igual que (<=)
console.log("5 <= 5:", 5 <= 5);
console.log("3 <= 5:", 3 <= 5);
console.log("7 <= 5:", 7 <= 5);

// Ejemplo práctico: comparar edades
const edad1 = 20;
const edad2 = 18;
const edadMinima = 18;

console.log("\nComparación de edades:");
console.log("Edad 1:", edad1);
console.log("Edad 2:", edad2);
console.log("Edad mínima para ingresar:", edadMinima);
console.log("¿Edad 1 >= mínima?", edad1 >= edadMinima);
console.log("¿Edad 2 >= mínima?", edad2 >= edadMinima);

// Ejemplo: notas de estudiantes
const notaJuan = 85;
const notaMaria = 92;
const notaMinimaAprobacion = 51;

console.log("\nNotas de estudiantes:");
console.log("Nota de Juan:", notaJuan);
console.log("Nota de María:", notaMaria);
console.log("Mínima para aprobar:", notaMinimaAprobacion);
console.log("¿Juan aprobó?", notaJuan >= notaMinimaAprobacion);
console.log("¿María aprobó?", notaMaria >= notaMinimaAprobacion);

// ------------------------------------------------------------
// 6. IGUALDAD: == vs ===
// ------------------------------------------------------------
// JavaScript tiene dos formas de comparar igualdad:
// - ==  (igualdad débil o abstracta): compara valores DESPUÉS de convertir tipos
// - === (igualdad estricta): compara valor Y tipo, SIN convertir
//
// SIEMPRE usa === en la práctica. El operador == puede producir
// resultados confusos porque convierte tipos automáticamente.
//
// Operador | Descripción              | Ejemplo       | Resultado
// ---------|--------------------------|---------------|----------
// ==       | Igualdad débil           | "5" == 5      | true (convierte)
// ===      | Igualdad estricta        | "5" === 5     | false (no convierte)

console.log("\n--- 6. Igualdad: == vs === ---");

// == (igualdad débil): convierte tipos antes de comparar
console.log("Igualdad débil (==):");
console.log("\"5\" == 5:", "5" == 5);
console.log("Convierte \"5\" a número y luego compara: 5 == 5 → true");

console.log("0 == false:", 0 == false);
console.log("Convierte false a número: 0 == 0 → true");

console.log("\"\" == 0:", "" == 0);
console.log("Convierte \"\" a número (0) y compara: 0 == 0 → true");

console.log("null == undefined:", null == undefined);
console.log("Son considerados iguales con == → true");

// === (igualdad estricta): NO convierte tipos
console.log("\nIgualdad estricta (===):");
console.log("\"5\" === 5:", "5" === 5);
console.log("Compara string vs number: diferente tipo → false");

console.log("0 === false:", 0 === false);
console.log("Compara number vs boolean: diferente tipo → false");

console.log("\"\" === 0:", "" === 0);
console.log("Compara string vs number: diferente tipo → false");

console.log("null === undefined:", null === undefined);
console.log("Compara null vs undefined: diferente tipo → false");

// ¿POR QUÉ SE RECOMIENDA ===?
console.log("\n¿Por qué se recomienda === sobre ==?");
console.log("1. == realiza conversiones de tipo OCULTAS y poco intuitivas");
console.log("2. === es PREDECIBLE: si los tipos son diferentes, siempre es false");
console.log("3. === previene ERRORES difíciles de detectar");
console.log("4. === es más CLARO y FÁCIL de entender");

// Ejemplos peligrosos con ==
console.log("\nEjemplos peligrosos con ==:");
console.log("\"\" == false:", "" == false);
console.log("\" \t\n\" == 0:", " \t\n" == 0);
console.log("[] == false:", [] == false);
console.log("Estos resultados son confusos. Con === no pasan:");
console.log("\"\" === false:", "" === false);
console.log("[] === false:", [] === false);

// Ejemplo práctico: validación de entrada
const entradaUsuario = "100";
const valorEsperado = 100;

console.log("\nValidación de entrada de usuario:");
console.log("Entrada del usuario (como texto):", entradaUsuario, typeof entradaUsuario);
console.log("Valor esperado (como número):", valorEsperado, typeof valorEsperado);
console.log("Con == :", entradaUsuario == valorEsperado, "(parece correcto pero es peligroso)");
console.log("Con ===:", entradaUsuario === valorEsperado, "(correcto: tipos diferentes → false)");

// Si quieres comparar con conversión explícita, hazlo manualmente:
console.log("Convertir primero: Number(entradaUsuario) === valorEsperado →", Number(entradaUsuario) === valorEsperado);

// ------------------------------------------------------------
// 7. DESIGUALDAD: != vs !==
// ------------------------------------------------------------
// La desigualdad es lo opuesto a la igualdad:
// - !=  (desigualdad débil): es lo contrario de ==
// - !== (desigualdad estricta): es lo contrario de ===
//
// Operador | Descripción              | Ejemplo       | Resultado
// ---------|--------------------------|---------------|----------
// !=       | Distinto de (débil)      | "5" != 5      | false (convierte)
// !==      | Distinto de (estricto)   | "5" !== 5     | true (no convierte)

console.log("\n--- 7. Desigualdad: != vs !== ---");

// != (desigualdad débil)
console.log("Desigualdad débil (!=):");
console.log("\"5\" != 5:", "5" != 5);
console.log("Convierte y compara: 5 != 5 → false");

console.log("10 != \"10\":", 10 != "10");
console.log("Convierte y compara: 10 != 10 → false");

console.log("5 != 5:", 5 != 5);
console.log("Mismo valor: → false");

// !== (desigualdad estricta)
console.log("\nDesigualdad estricta (!==):");
console.log("\"5\" !== 5:", "5" !== 5);
console.log("Diferente tipo → true");

console.log("10 !== \"10\":", 10 !== "10");
console.log("Diferente tipo → true");

console.log("5 !== 5:", 5 !== 5);
console.log("Mismo valor y tipo → false");

// Recomendación: usa siempre !==
console.log("\nRecomendación: usa siempre !==");
const valorA = "100";
const valorB = 100;
console.log("Con !=:", valorA != valorB, "(convierte, puede confundir)");
console.log("Con !==:", valorA !== valorB, "(estricto, predecible)");

// ------------------------------------------------------------
// 8. OPERADORES LÓGICOS
// ------------------------------------------------------------
// Los operadores lógicos combinan condiciones booleanas.
// Son esenciales para construir lógica compleja.
//
// Operador | Nombre | Descripción                              | Ejemplo           | Resultado
// ---------|--------|------------------------------------------|-------------------|----------
// &&       | AND    | true solo si AMBAS condiciones son true  | true && true      | true
// ||       | OR     | true si AL MENOS UNA condición es true   | true || false     | true
// !        | NOT    | Invierte el valor booleano               | !true             | false

console.log("\n--- 8. Operadores lógicos ---");

// AND (&&): true solo si AMBAS son true
console.log("AND (&&):");
console.log("true && true:", true && true);
console.log("true && false:", true && false);
console.log("false && true:", false && true);
console.log("false && false:", false && false);

// OR (||): true si al menos UNA es true
console.log("\nOR (||):");
console.log("true || true:", true || true);
console.log("true || false:", true || false);
console.log("false || true:", false || true);
console.log("false || false:", false || false);

// NOT (!): invierte el valor
console.log("\nNOT (!):");
console.log("!true:", !true);
console.log("!false:", !false);
console.log("!(5 > 3):", !(5 > 3));
console.log("!(5 < 3):", !(5 < 3));

// Ejemplo práctico: verificar si alguien puede entrar a un evento
console.log("\nEjemplo: ¿Puede entrar al evento?");
const edadPersona = 18;
const tieneEntrada = true;
const esMayor = edadPersona >= 18;
console.log("Edad:", edadPersona, "→ ¿Es mayor de edad?", esMayor);
console.log("¿Tiene entrada?", tieneEntrada);
console.log("Puede entrar:", esMayor && tieneEntrada);

// Ejemplo: descuentos en tienda
console.log("\nEjemplo: ¿Aplica descuento?");
const esEstudiante = true;
const tieneCarnet = false;
const aplicaDescuento = esEstudiante || tieneCarnet;
console.log("¿Es estudiante?", esEstudiante);
console.log("¿Tiene carnet de descuento?", tieneCarnet);
console.log("¿Aplica descuento?", aplicaDescuento);

// Ejemplo: negación
console.log("\nEjemplo: Negación");
const estaLloviendo = false;
console.log("¿Está lloviendo?", estaLloviendo);
console.log("¿Salgo sin paraguas?", !estaLloviendo);

// Combinación de operadores lógicos
const edadCliente = 25;
const tieneMembresia = true;
const saldoDisponible = 100;

console.log("\nCombinación de condiciones:");
console.log("Edad:", edadCliente);
console.log("¿Tiene membresía?", tieneMembresia);
console.log("Saldo disponible:", saldoDisponible);

const puedeComprar = (edadCliente >= 18) && tieneMembresia && (saldoDisponible > 0);
console.log("¿Puede comprar?", puedeComprar);

// ------------------------------------------------------------
// 9. PRECEDENCIA DE OPERADORES
// ------------------------------------------------------------
// La precedencia determina qué operador se evalúa primero cuando
// hay varios en una misma expresión. Es similar a la matemática:
// multiplicación y división se hacen antes que suma y resta.
//
// Precedencia (de mayor a menor, solo los más comunes):
// 1. **        (exponenciación)
// 2. *, /, %   (multiplicación, división, módulo)
// 3. +, -      (suma, resta)
// 4. <, <=, >, >= (comparación)
// 5. ==, ===, !=, !== (igualdad)
// 6. &&        (AND lógico)
// 7. ||        (OR lógico)
// 8. =, +=, -=, etc. (asignación)

console.log("\n--- 9. Precedencia de operadores ---");

// Sin paréntesis: se sigue la precedencia matemática
const resultado1 = 5 + 3 * 2;
console.log("5 + 3 * 2 =", resultado1);
console.log("Primero: 3 * 2 = 6, luego: 5 + 6 = 11");

// Con paréntesis: se evalúa primero lo que está dentro
const resultado2 = (5 + 3) * 2;
console.log("(5 + 3) * 2 =", resultado2);
console.log("Primero: 5 + 3 = 8, luego: 8 * 2 = 16");

// Ejemplo más complejo
const resultado3 = 10 + 2 * 3 - 4 / 2;
console.log("10 + 2 * 3 - 4 / 2 =", resultado3);
console.log("Primero: 2 * 3 = 6, 4 / 2 = 2");
console.log("Luego: 10 + 6 - 2 = 14");

// Con paréntesis para cambiar el orden
const resultado4 = (10 + 2) * (3 - 4) / 2;
console.log("(10 + 2) * (3 - 4) / 2 =", resultado4);
console.log("Primero: 12 * (-1) / 2 = -6");

// Ejemplo con operadores lógicos
const condicion = true || false && false;
console.log("\ntrue || false && false =", condicion);
console.log("&& tiene mayor precedencia que ||");
console.log("Primero: false && false = false");
console.log("Luego: true || false = true");

const condicion2 = (true || false) && false;
console.log("(true || false) && false =", condicion2);
console.log("Primero: true || false = true");
console.log("Luego: true && false = false");

// ------------------------------------------------------------
// 10. USO DE PARÉNTESIS PARA CLARIDAD
// ------------------------------------------------------------
// Aunque JavaScript sigue reglas de precedencia, es buena práctica
// usar paréntesis para hacer el código más legible y evitar errores.
// Incluso si no cambian el resultado, los paréntesis dejan CLARO
// cuál era tu intención.

console.log("\n--- 10. Paréntesis para claridad ---");

// Sin paréntesis: ambiguo para el lector
const calculo1 = 10 + 5 * 2 - 8 / 4;
console.log("10 + 5 * 2 - 8 / 4 =", calculo1);

// Con paréntesis: claro para todos
const calculo2 = (10) + (5 * 2) - (8 / 4);
console.log("(10) + (5 * 2) - (8 / 4) =", calculo2);

// Ejemplo con condiciones: sin paréntesis es confuso
const edad = 20;
const tieneID = true;
const esVIP = false;

// Difícil de leer:
// let puedeEntrar = edad >= 18 && tieneID || esVIP;

// Claro con paréntesis:
const puedeEntrar = (edad >= 18) && tieneID || esVIP;
console.log("\n¿Puede entrar?", puedeEntrar);
console.log("(edad >= 18) && tieneID → true && true → true");
console.log("true || false → true");

// Recomendación: cuando tengas dudas, AGREGA paréntesis
const precio = 100;
const impuesto = 0.15;
const descuento = 0.10;

// Claro: aplicar descuento y luego impuesto
const totalFinal = (precio * (1 - descuento)) * (1 + impuesto);
console.log("\nCálculo de precio final:");
console.log("Precio original: Bs.", precio);
console.log("Descuento:", descuento * 100, "%");
console.log("Impuesto:", impuesto * 100, "%");
console.log("Total final:", "Bs.", totalFinal);

// ------------------------------------------------------------
// 11. CONCATENACIÓN DE STRINGS
// ------------------------------------------------------------
// El operador + también sirve para unir (concatenar) strings.
// Cuando se usa con texto, une las cadenas una tras otra.
//
// IMPORTANTE: si mezclas string + number, JavaScript convierte
// el número a string y concatena (¡puede causar bugs!).

console.log("\n--- 11. Concatenación de strings ---");

// Concatenación básica
const saludo = "Hola" + " " + "Mundo";
console.log("Concatenación:", saludo);

// Concatenación con variables
const nombreEstudiante = "Carlos";
const materia = "Matemáticas";
const notaFinal = 85;

const mensaje1 = "El estudiante " + nombreEstudiante + " obtuvo " + notaFinal + " en " + materia;
console.log(mensaje1);

// Cuidado con la mezcla de string y number
const precioTexto = "Bs. " + 50;
console.log("\nMezcla string + number:");
console.log("\"Bs. \" + 50 =", precioTexto);
console.log("El número se convierte a texto automáticamente");

// Pero cuidado con operaciones:
const resultadoSuma = "10" + 5;
console.log("\"10\" + 5 =", resultadoSuma);
console.log("¡Concatena en vez de sumar! Porque \"10\" es string");

const resultadoResta = "10" - 5;
console.log("\"10\" - 5 =", resultadoResta);
console.log("En resta SÍ convierte a número (porque - no concatena)");

// Para evitar problemas, usa template literals (siguiente sección)
// o convierte explícitamente:
const sumaCorrecta = Number("10") + 5;
console.log("Number(\"10\") + 5 =", sumaCorrecta);

// ------------------------------------------------------------
// 12. TEMPLATE LITERALS (PLANTILLAS LITERALES)
// ------------------------------------------------------------
// Los template literals son una forma moderna y más legible de
// crear strings que contienen variables o expresiones.
// Se escriben con backticks (` `) y usan ${} para insertar valores.
//
// Ventaja: mucho más legible que la concatenación con +

console.log("\n--- 12. Template literals ---");

// Comparación: concatenación vs template literal
const producto = "Cuaderno";
const precioProducto2 = 15;
const cantidad2 = 3;

// Forma antigua (concatenación):
const mensajeAntiguo = "Compraste " + cantidad2 + " " + producto + " a Bs. " + precioProducto2 + " c/u. Total: Bs. " + (precioProducto2 * cantidad2);
console.log("Concatenación:");
console.log(mensajeAntiguo);

// Forma moderna (template literal):
const mensajeModerno = `Compraste ${cantidad2} ${producto} a Bs. ${precioProducto2} c/u. Total: Bs. ${precioProducto2 * cantidad2}`;
console.log("\nTemplate literal:");
console.log(mensajeModerno);

// Los template literals permiten:
// 1. Insertar variables directamente con ${variable}
// 2. Insertar expresiones con ${expresion}
// 3. Texto multilínea sin necesidad de \n

// Ejemplo con expresiones
const baseEjemplo = 5;
const alturaEjemplo = 3;
const mensajeArea = `El área del rectángulo (${baseEjemplo} × ${alturaEjemplo}) es: ${baseEjemplo * alturaEjemplo}`;
console.log("\nCon expresiones:");
console.log(mensajeArea);

// Ejemplo multilínea
const nombreCompleto = "Ana María López";
const carnet = "LPZ-2024-001";
const mensajeTarjeta = `
============================
  CARNET DE ESTUDIANTE
============================
Nombre: ${nombreCompleto}
Carnet: ${carnet}
Gestión: 2024
============================
`;
console.log(mensajeTarjeta);

// Ejemplo con cálculos
const nota1 = 78;
const nota2 = 85;
const nota3 = 92;
const promedio = (nota1 + nota2 + nota3) / 3;

const reporteNotas = `
REPORTE DE NOTAS
================
Nota 1: ${nota1}
Nota 2: ${nota2}
Nota 3: ${nota3}
Promedio: ${promedio.toFixed(2)}
Estado: ${promedio >= 51 ? "Aprobado" : "Reprobado"}
`;
console.log(reporteNotas);

// ============================================================
// EJEMPLOS PRÁCTICOS COMPLETOS
// ============================================================

console.log("\n========================================");
console.log("EJEMPLOS PRÁCTICOS");
console.log("========================================");

// --- Ejemplo: Calculadora simple ---
console.log("\n-- Calculadora simple --");

const num1 = 120;
const num2 = 45;

console.log("Número 1:", num1);
console.log("Número 2:", num2);
console.log("Suma:", num1 + num2);
console.log("Resta:", num1 - num2);
console.log("Multiplicación:", num1 * num2);
console.log("División:", (num1 / num2).toFixed(2));
console.log("Módulo:", num1 % num2);

// --- Ejemplo: Calcular descuento ---
console.log("\n-- Calcular descuento --");

const precioOriginal = 350;
const porcentajeDescuento = 20;
const montoDescuento = precioOriginal * (porcentajeDescuento / 100);
const precioConDescuento = precioOriginal - montoDescuento;

console.log(`Precio original: Bs. ${precioOriginal}`);
console.log(`Descuento: ${porcentajeDescuento}%`);
console.log(`Monto del descuento: Bs. ${montoDescuento}`);
console.log(`Precio final: Bs. ${precioConDescuento}`);

// --- Ejemplo: Calcular promedio de notas ---
console.log("\n-- Calcular promedio de notas --");

const notaMatematica = 88;
const notaLenguaje = 75;
const notaCiencias = 92;
const notaHistoria = 80;
const cantidadMaterias = 4;

const promedioGeneral = (notaMatematica + notaLenguaje + notaCiencias + notaHistoria) / cantidadMaterias;

console.log(`Notas: Mat=${notaMatematica}, Len=${notaLenguaje}, Cien=${notaCiencias}, Hist=${notaHistoria}`);
console.log(`Cantidad de materias: ${cantidadMaterias}`);
console.log(`Promedio general: ${promedioGeneral.toFixed(2)}`);
console.log(`Estado: ${promedioGeneral >= 51 ? "Aprobado" : "Reprobado"}`);

// --- Ejemplo: Verificar mayoría de edad ---
console.log("\n-- Verificar mayoría de edad --");

const edadCiudadano = 17;
const edadLegal = 18;
const esMayorDeEdad = edadCiudadano >= edadLegal;

console.log(`Edad del ciudadano: ${edadCiudadano} años`);
console.log(`Edad legal: ${edadLegal} años`);
console.log(`¿Es mayor de edad? ${esMayorDeEdad}`);
console.log(`¿Puede votar? ${esMayorDeEdad ? "Sí" : "No"}`);

// --- Ejemplo: Comparar notas ---
console.log("\n-- Comparar notas de estudiantes --");

const notaEstudianteA = 78;
const notaEstudianteB = 85;
const notaEstudianteC = 78;

console.log(`Nota A: ${notaEstudianteA}`);
console.log(`Nota B: ${notaEstudianteB}`);
console.log(`Nota C: ${notaEstudianteC}`);
console.log(`¿A > B? ${notaEstudianteA > notaEstudianteB}`);
console.log(`¿A < B? ${notaEstudianteA < notaEstudianteB}`);
console.log(`¿A === C? ${notaEstudianteA === notaEstudianteC}`);
console.log(`¿A !== B? ${notaEstudianteA !== notaEstudianteB}`);
console.log(`Mejor nota: ${Math.max(notaEstudianteA, notaEstudianteB, notaEstudianteC)}`);

// --- Ejemplo: Condiciones con operadores lógicos ---
console.log("\n-- Condiciones con operadores lógicos --");

const edadInscrito = 20;
const pagoRealizado = true;
const cuposDisponibles = 5;
const periodoInscripcion = true;

console.log(`Edad: ${edadInscrito}`);
console.log(`¿Pagó? ${pagoRealizado}`);
console.log(`Cupos disponibles: ${cuposDisponibles}`);
console.log(`¿Período de inscripción? ${periodoInscripcion}`);

// Verificar si puede inscribirse
const esMayorParaInscribirse = edadInscrito >= 18;
const hayCupos = cuposDisponibles > 0;

const puedeInscribirse = esMayorParaInscribirse && pagoRealizado && hayCupos && periodoInscripcion;

console.log(`\n¿Es mayor de edad? ${esMayorParaInscribirse}`);
console.log(`¿Hay cupos? ${hayCupos}`);
console.log(`¿Puede inscribirse? ${puedeInscribirse}`);

// Ejemplo con OR: beca por alguna condición
const esEstudianteDestacado = false;
const tieneNecesidadEconomica = true;
const esDeZonaRural = false;

const aplicaBeca = esEstudianteDestacado || tieneNecesidadEconomica || esDeZonaRural;

console.log(`\nBeca estudiantil:`);
console.log(`¿Estudiante destacado? ${esEstudianteDestacado}`);
console.log(`¿Necesidad económica? ${tieneNecesidadEconomica}`);
console.log(`¿Zona rural? ${esDeZonaRural}`);
console.log(`¿Aplica beca? ${aplicaBeca}`);

// --- Ejemplo: Conversión de moneda ---
console.log("\n-- Conversión de moneda --");

const montoBolivianos = 500;
const tipoCambioDolar = 6.91;
const tipoCambioEuro = 7.52;

const montoDolares = montoBolivianos / tipoCambioDolar;
const montoEuros = montoBolivianos / tipoCambioEuro;

console.log(`Monto original: Bs. ${montoBolivianos}`);
console.log(`Tipo de cambio dólar: ${tipoCambioDolar}`);
console.log(`Tipo de cambio euro: ${tipoCambioEuro}`);
console.log(`En dólares: USD ${montoDolares.toFixed(2)}`);
console.log(`En euros: EUR ${montoEuros.toFixed(2)}`);

// --- Ejemplo: Cálculo de IVA ---
console.log("\n-- Cálculo de IVA --");

const subtotal = 250;
const porcentajeIVA = 16;
const montoIVA = subtotal * (porcentajeIVA / 100);
const totalFactura = subtotal + montoIVA;

console.log(`Subtotal: Bs. ${subtotal}`);
console.log(`IVA (${porcentajeIVA}%): Bs. ${montoIVA}`);
console.log(`Total factura: Bs. ${totalFactura}`);

// --- Ejemplo: Calcular edad en años, meses y días ---
console.log("\n-- Calcular tiempo --");

const minutos = 125;
const horas = Math.floor(minutos / 60);
const minutosRestantes = minutos % 60;

console.log(`Minutos totales: ${minutos}`);
console.log(`Equivalente: ${horas} horas y ${minutosRestantes} minutos`);

const segundos = 3665;
const h = Math.floor(segundos / 3600);
const m = Math.floor((segundos % 3600) / 60);
const s = segundos % 60;

console.log(`\nSegundos totales: ${segundos}`);
console.log(`Equivalente: ${h}h ${m}m ${s}s`);

console.log("\n========================================");
console.log("FIN DE LA LECCIÓN 29");
console.log("========================================");
