// ============================================================
// LECCIÓN 30 - CONVERSIÓN DE TIPOS EN JAVASCRIPT
// ============================================================

// ------------------------------------------------------------
// 1. ¿QUÉ SIGNIFICA CONVERTIR UN TIPO DE DATO?
// ------------------------------------------------------------
// Convertir un tipo de dato significa transformar un valor de
// un tipo a otro. Por ejemplo, pasar de string "25" a number 25,
// o de number 1 a boolean true.
//
// En JavaScript necesitamos convertir tipos frecuentemente porque
// los datos no siempre llegan en el formato que necesitamos.
// Por ejemplo, un formulario web siempre entrega texto (string),
// pero nosotros podríamos necesitar un número para hacer cálculos.

console.log("--- 1. ¿Qué es convertir un tipo de dato? ---");

const textoEdad = "25";
const edadReal = 25;

console.log("Texto:", textoEdad, "→ Tipo:", typeof textoEdad);
console.log("Número:", edadReal, "→ Tipo:", typeof edadReal);
console.log("Son iguales?", textoEdad === edadReal);

// Aunque parecen lo mismo, "25" (texto) y 25 (número) son tipos distintos.
// Para hacer operaciones matemáticas con "25" necesitamos convertirlo a number.

// ------------------------------------------------------------
// 2. CONVERSIÓN EXPLÍCITA
// ------------------------------------------------------------
// La conversión explícita ocurre cuando NOSOTROS decidimos
// cambiar el tipo de un dato usando funciones especiales
// como String(), Number(), Boolean(), parseInt(), parseFloat().
// Es clara y visible en el código.

console.log("\n--- 2. Conversión explícita ---");

const precioTexto = "49.99";
const precioNumero = Number(precioTexto);

console.log("Antes:", precioTexto, "→ Tipo:", typeof precioTexto);
console.log("Después:", precioNumero, "→ Tipo:", typeof precioNumero);

// Nosotros decidimos convertir usando Number(). Eso es conversión explícita.

// ------------------------------------------------------------
// 3. CONVERSIÓN IMPLÍCITA (COERCIÓN)
// ------------------------------------------------------------
// La conversión implícita (o coerción) ocurre cuando JavaScript
// cambia el tipo de un valor AUTOMÁTICAMENTE sin que se lo pidamos.
// Esto pasa cuando mezclamos tipos en ciertas operaciones.

console.log("\n--- 3. Conversión implícita (coerción) ---");

console.log("10" + 5);
// JavaScript ve un string y un number con el operador +.
// Como + también sirve para concatenar texto, gana la concatenación.
// Convierte el 5 a "5" y concatena: "10" + "5" = "105"

console.log("10" - 5);
// Con el operador -, la resta SOLO funciona con números.
// Entonces JavaScript convierte "10" a 10 automáticamente: 10 - 5 = 5

console.log("10" * 2);
// Con *, solo tiene sentido con números.
// JavaScript convierte "10" a 10: 10 * 2 = 20

// La coerción puede causar resultados sorprendentes.
// Por eso es mejor hacer conversiones explícitas para evitar confusiones.

// ------------------------------------------------------------
// 4. String() - CONVERTIR A TEXTO
// ------------------------------------------------------------
// String() convierte cualquier valor a su representación en texto.

console.log("\n--- 4. String() - Convertir a texto ---");

// Números a strings
const numero = 25;
const textoNumero = String(numero);
console.log("Number a String:", textoNumero, "→ Tipo:", typeof textoNumero);

const precio = 19.99;
const precioTexto2 = String(precio);
console.log("Decimal a String:", precioTexto2, "→ Tipo:", typeof precioTexto2);

// Booleanos a strings
const activo = true;
const activoTexto = String(activo);
console.log("Boolean a String:", activoTexto, "→ Tipo:", typeof activoTexto);

const inactivo = false;
const inactivoTexto = String(inactivo);
console.log("false a String:", inactivoTexto, "→ Tipo:", typeof inactivoTexto);

// Ejemplo con contexto boliviano:
const nota = 85;
const notaTexto = String(nota);
console.log("La nota de María es:", notaTexto, "→ Tipo:", typeof notaTexto);

// ------------------------------------------------------------
// 5. Number() - CONVERTIR A NÚMERO
// ------------------------------------------------------------
// Number() convierte un valor a número. Si no puede, devuelve NaN.

console.log("\n--- 5. Number() - Convertir a número ---");

// Strings que contienen números
console.log(Number("25"));      // 25 → String con número válido, lo convierte correctamente
console.log(Number("3.14"));    // 3.14 → Decimales también funcionan
console.log(Number("100"));     // 100 → Cualquier string numérico se convierte

// Strings que NO contienen números
console.log(Number("hola"));    // NaN → No se puede convertir texto a número, resultado inválido
console.log(Number("abc123"));  // NaN → Si tiene letras, Number() falla por completo

// Booleanos a números
console.log(Number(true));      // 1 → true se convierte en 1
console.log(Number(false));     // 0 → false se convierte en 0

// Strings vacíos y especiales
console.log(Number(""));        // 0 → String vacío se convierte en 0
console.log(Number(" "));       // 0 → Espacios en blanco también se convierten en 0
console.log(Number(null));      // 0 → null se convierte en 0
console.log(Number(undefined)); // NaN → undefined NO se puede convertir a número

// Ejemplo práctico: calcular el total de un producto en Bs.
const precioProducto = "150.50";
const precioNum = Number(precioProducto);
const cantidad = 3;
const total = precioNum * cantidad;
console.log("Precio:", precioProducto, "Bs.");
console.log("Cantidad:", cantidad);
console.log("Total:", total, "Bs.");

// ------------------------------------------------------------
// 6. Boolean() - CONVERTIR A BOOLEANO
// ------------------------------------------------------------
// Boolean() convierte cualquier valor a true o false.
// La regla es simple: hay valores "falsy" (se convierten en false)
// y valores "truthy" (se convierten en true).

console.log("\n--- 6. Boolean() - Convertir a booleano ---");

// Valores que se convierten en false (falsy)
console.log(Boolean(""));       // false → String vacío
console.log(Boolean(0));        // false → El número cero
console.log(Boolean(false));    // false → Ya es false
console.log(Boolean(null));     // false → Ausencia de valor
console.log(Boolean(undefined));// false → No definido
console.log(Boolean(NaN));      // false → No es un número

// Valores que se convierten en true (truthy)
console.log(Boolean("hola"));   // true → Cualquier texto con contenido
console.log(Boolean("false"));  // true → ¡OJO! El texto "false" es truthy porque no está vacío
console.log(Boolean(25));       // true → Cualquier número distinto de 0
console.log(Boolean(-1));       // true → También los negativos
console.log(Boolean(3.14));     // true → También los decimales
console.log(Boolean([]));       // true → Un array vacío es truthy
console.log(Boolean({}));       // true → Un objeto vacío es truthy

// Ejemplo práctico: validar si un campo de formulario tiene contenido
const nombreUsuario = "Carlos";
const apellidoUsuario = "";

console.log("¿Nombre válido?", Boolean(nombreUsuario));   // true → tiene contenido
console.log("¿Apellido válido?", Boolean(apellidoUsuario)); // false → está vacío

// ------------------------------------------------------------
// 7. parseInt() - EXTRAER NÚMEROS ENTEROS DE STRINGS
// ------------------------------------------------------------
// parseInt() lee un string de izquierda a derecha y extrae
// la parte entera que encuentra. Se detiene cuando llega a un
// carácter que no es un número.

console.log("\n--- 7. parseInt() - Extraer enteros ---");

console.log(parseInt("42"));        // 42 → Número completo
console.log(parseInt("42 años"));   // 42 → Lee hasta el espacio, descarta "años"
console.log(parseInt("10.5"));      // 10 → Solo toma la parte entera, descarta ".5"
console.log(parseInt("  100  "));   // 100 → Ignora espacios al inicio y al final
console.log(parseInt("3.99 Bs."));  // 3 → Lee el 3, descarta ".99 Bs."
console.log(parseInt("hola 5"));    // NaN → Empieza con letras, no puede leer nada
console.log(parseInt(""));          // NaN → String vacío, no hay nada que leer
console.log(parseInt(true));        // NaN → No funciona con booleanos
console.log(parseInt("0xFF"));      // 255 → Interpreta hexadecimal por defecto

// Ejemplo: extraer la edad de un texto
const textoEdad2 = "25 años";
const edadExtraida = parseInt(textoEdad2);
console.log("Edad extraída:", edadExtraida, "→ Tipo:", typeof edadExtraida);

// ------------------------------------------------------------
// 8. parseFloat() - EXTRAER DECIMALES DE STRINGS
// ------------------------------------------------------------
// parseFloat() funciona como parseInt(), pero también acepta
// la parte decimal del número.

console.log("\n--- 8. parseFloat() - Extraer decimales ---");

console.log(parseFloat("3.14"));        // 3.14 → Número decimal completo
console.log(parseFloat("3.14 rad"));    // 3.14 → Lee hasta el espacio
console.log(parseFloat("10"));          // 10 → Funciona también con enteros
console.log(parseFloat("10.50 Bs."));   // 10.5 → Lee el número y se detiene en "Bs."
console.log(parseFloat("  25.99  "));   // 25.99 → Ignora espacios
console.log(parseFloat("hola 3.14"));   // NaN → Empieza con letras
console.log(parseFloat(""));            // NaN → String vacío

// Ejemplo: obtener un precio de un texto
const textoPrecio = "199.99 Bs.";
const precioExtraido = parseFloat(textoPrecio);
console.log("Precio extraído:", precioExtraido, "→ Tipo:", typeof precioExtraido);

// ------------------------------------------------------------
// 9. DIFERENCIAS ENTRE Number(), parseInt() Y parseFloat()
// ------------------------------------------------------------

console.log("\n--- 9. Diferencias entre Number(), parseInt() y parseFloat() ---");

// Number() vs parseInt() con strings mixtos
console.log("Number(\"10px\"):", Number("10px"));       // NaN → Number() exige string completamente numérico
console.log("parseInt(\"10px\"):", parseInt("10px"));   // 10 → parseInt() lee hasta donde puede

console.log("Number(\"10.5\"):", Number("10.5"));       // 10.5 → Number() respeta decimales
console.log("parseInt(\"10.5\"):", parseInt("10.5"));   // 10 → parseInt() trunca decimales

// Number() vs parseFloat()
console.log("Number(\"10.5\"):", Number("10.5"));       // 10.5 → Ambos respetan decimales
console.log("parseFloat(\"10.5\"):", parseFloat("10.5")); // 10.5 → Igual que Number()

console.log("Number(\"10.5.3\"):", Number("10.5.3"));     // NaN → Dos puntos decimales no es válido
console.log("parseFloat(\"10.5.3\"):", parseFloat("10.5.3")); // 10.5 → Lee hasta el segundo punto

console.log("Number(\"  10  \"):", Number("  10  "));     // 10 → Ambos ignoran espacios
console.log("parseFloat(\"  10  \"):", parseFloat("  10  ")); // 10 → Igual

console.log("Number(\"\"):", Number(""));                 // 0 → Number() convierte vacío a 0
console.log("parseFloat(\"\"):", parseFloat(""));         // NaN → parseFloat() no puede leer nada

console.log("Number(\"abc\"):", Number("abc"));           // NaN → Falla igual
console.log("parseFloat(\"abc\"):", parseFloat("abc"));   // NaN → Falla igual

// Tabla resumen:
//
// Valor          | Number()  | parseInt() | parseFloat()
// ---------------|-----------|------------|-------------
// "25"           | 25        | 25         | 25
// "25.5"         | 25.5      | 25         | 25.5
// "25px"         | NaN       | 25         | 25
// "25.5px"       | NaN       | 25         | 25.5
// "abc"          | NaN       | NaN        | NaN
// ""             | 0         | NaN        | NaN
// "  10  "       | 10        | 10         | 10
// true           | 1         | NaN        | NaN

// Cuándo usar cada uno:
// - Number(): cuando el string DEBE ser completamente un número
// - parseInt(): cuando quieres extraer un entero del inicio del string
// - parseFloat(): cuando quieres extraer un decimal del inicio del string

// ------------------------------------------------------------
// 10. CONVIRTIENDO NÚMEROS A STRINGS
// ------------------------------------------------------------
// Hay varias formas de pasar de number a string.

console.log("\n--- 10. Convertir números a strings ---");

// Forma 1: String()
const num1 = 42;
const str1 = String(num1);
console.log("String():", str1, "→ Tipo:", typeof str1);

// Forma 2: toString()
const num2 = 42;
const str2 = num2.toString();
console.log("toString():", str2, "→ Tipo:", typeof str2);

// Forma 3: Concatenación con string vacío (truco)
const num3 = 42;
const str3 = "" + num3;
console.log("Concatenación:", str3, "→ Tipo:", typeof str3);

// Ejemplo práctico: mostrar un precio formateado
const precioLaptop = 4500;
const mensajePrecio = "La laptop cuesta " + String(precioLaptop) + " Bs.";
console.log(mensajePrecio);

// Otro ejemplo con template literals (también convierten automáticamente)
const edad2 = 25;
const mensajeEdad = `Tengo ${edad2} años`;
console.log(mensajeEdad);

// ------------------------------------------------------------
// 11. CONVIRTIENDO STRINGS A NÚMEROS
// ------------------------------------------------------------
// Hay varias formas de pasar de string a number.

console.log("\n--- 11. Convertir strings a números ---");

// Forma 1: Number()
const str4 = "100";
const num4 = Number(str4);
console.log("Number():", num4, "→ Tipo:", typeof num4);

// Forma 2: parseInt()
const str5 = "100";
const num5 = parseInt(str5);
console.log("parseInt():", num5, "→ Tipo:", typeof num5);

// Forma 3: parseFloat()
const str6 = "100.50";
const num6 = parseFloat(str6);
console.log("parseFloat():", num6, "→ Tipo:", typeof num6);

// Forma 4: Operador unario + (truco rápido)
const str7 = "100";
const num7 = +str7;
console.log("Operador +:", num7, "→ Tipo:", typeof num7);

// El operador unario + funciona igual que Number()
const str8 = "hola";
const num8 = +str8;
console.log("Operador + con texto:", num8, "→ Tipo:", typeof num8);

// Ejemplo: calcular la suma de dos precios en Bs.
const precio1 = "25.50";
const precio2 = "30.75";
const sumaTotal = Number(precio1) + Number(precio2);
console.log("Precio 1:", precio1, "Bs.");
console.log("Precio 2:", precio2, "Bs.");
console.log("Total:", sumaTotal, "Bs.");

// ------------------------------------------------------------
// 12. VALORES TRUTHY Y FALSY
// ------------------------------------------------------------
// En JavaScript, cada valor se puede convertir implícitamente
// en un booleano. Los valores que se convierten en false se
// llaman "falsy". Los que se convierten en true se llaman "truthy".

console.log("\n--- 12. Valores truthy y falsy ---");

// TODOS los valores falsy (se convierten en false):
console.log("VALORES FALSY:");
console.log("false     →", Boolean(false));
console.log("0         →", Boolean(0));
console.log("-0        →", Boolean(-0));
console.log("0n        →", Boolean(0n));
console.log("\"\"       →", Boolean(""));
console.log("null      →", Boolean(null));
console.log("undefined →", Boolean(undefined));
console.log("NaN       →", Boolean(NaN));

// Cualquier OTRO valor es truthy (se convierte en true):
console.log("\nVALORES TRUTHY (ejemplos):");
console.log("true        →", Boolean(true));
console.log("1           →", Boolean(1));
console.log("-1          →", Boolean(-1));
console.log("99          →", Boolean(99));
console.log("3.14        →", Boolean(3.14));
console.log("\"hola\"      →", Boolean("hola"));
console.log("\"0\"         →", Boolean("0"));
console.log("\"false\"     →", Boolean("false"));
console.log("\" \" (espacio)→", Boolean(" "));
console.log("[]          →", Boolean([]));
console.log("{}          →", Boolean({}));

// Tabla de referencia:
//
// FALSY (8 valores)          | TRUTHY (todo lo demás)
// ---------------------------|--------------------------------
// false                      | true
// 0                          | 1, -1, 99, 3.14 (cualquier número != 0)
// -0                         | "hola" (cualquier string no vacío)
// 0n                         | "0", "false" (¡string con contenido!)
// "" (string vacío)          | " " (string con espacio)
// null                       | [] (array vacío)
// undefined                  | {} (objeto vacío)
// NaN                        | function, Symbol, etc.

// Ejemplo práctico: verificar si un estudiante ingresó su nombre
const nombreEstudiante = "";
if (nombreEstudiante) {
    console.log("El estudiante es:", nombreEstudiante);
} else {
    console.log("El estudiante no ingresó su nombre");
}

// El if convierte automáticamente el valor a booleano.
// Como "" es falsy, se ejecuta el else.

// ------------------------------------------------------------
// 13. EL VALOR NaN (NOT A NUMBER)
// ------------------------------------------------------------
// NaN significa "Not a Number". Aparece cuando una operación
// matemática no produce un resultado numérico válido.

console.log("\n--- 13. El valor NaN ---");

// Cuándo aparece NaN:
console.log("NaN ejemplos:");
console.log("\"hola\" * 2    →", "hola" * 2);        // No puedes multiplicar texto
console.log("\"abc\" - 3     →", "abc" - 3);         // No puedes restar texto
console.log("0 / 0          →", 0 / 0);              // Indeterminado matemáticamente
console.log("Infinity / Infinity →", Infinity / Infinity); // Indeterminado
console.log("Math.sqrt(-1)  →", Math.sqrt(-1));       // Raíz cuadrada de negativo
console.log("Number(\"hola\") →", Number("hola"));     // No se puede convertir texto

// Propiedades extrañas de NaN:
console.log("\nPropiedades de NaN:");
console.log("typeof NaN:", typeof NaN);               // "number" → ¡Es técnicamente un número!
console.log("NaN === NaN:", NaN === NaN);             // false → ¡NaN no es igual a NADA, ni siquiera a sí mismo!
console.log("NaN == NaN:", NaN == NaN);               // false → Tampoco con ==

// Esto significa que NO puedes verificar NaN con === o ==.
// Necesitas usar funciones especiales (ver siguiente sección).

// Ejemplo: cuando un estudiante ingresa datos inválidos
const notaInvalida = Number("ausente");
console.log("Nota del estudiante:", notaInvalida);     // NaN
console.log("Tipo:", typeof notaInvalida);             // "number" (aunque no sea un número válido)

// ------------------------------------------------------------
// 14. Number.isNaN() - CÓMO VERIFICAR NaN
// ------------------------------------------------------------
// Como NaN === NaN es false, necesitamos una función especial
// para comprobar si un valor es NaN.

console.log("\n--- 14. Number.isNaN() ---");

// Forma correcta: Number.isNaN()
console.log("Number.isNaN(NaN):", Number.isNaN(NaN));                 // true → Es NaN
console.log("Number.isNaN(\"hola\"):", Number.isNaN("hola"));         // false → Es string, no NaN
console.log("Number.isNaN(123):", Number.isNaN(123));                 // false → Es número válido
console.log("Number.isNaN(Number(\"hola\")):", Number.isNaN(Number("hola"))); // true → Number() devolvió NaN

// Number.isNaN() solo devuelve true si el valor ES exactamente NaN.
// No intenta convertir nada, solo verifica.

// Existe también la función global isNaN() pero es diferente:
console.log("\nDiferencia entre isNaN() y Number.isNaN():");
console.log("isNaN(\"hola\"):", isNaN("hola"));                     // true → Convierte primero, luego verifica
console.log("Number.isNaN(\"hola\"):", Number.isNaN("hola"));       // false → No convierte, verifica directamente
console.log("isNaN(\"123\"):", isNaN("123"));                       // false → Convierte "123" a 123, que sí es número
console.log("Number.isNaN(\"123\"):", Number.isNaN("123"));         // false → "123" no es NaN (es string)
console.log("isNaN(undefined):", isNaN(undefined));                 // true → undefined se convierte en NaN
console.log("Number.isNaN(undefined):", Number.isNaN(undefined));   // false → undefined no es NaN

// Recomendación: usa SIEMPRE Number.isNaN() en lugar de isNaN().
// Es más preciso y no hace conversiones inesperadas.

// Ejemplo práctico: validar un dato ingresado
let resultadoConversion = Number("texto invalido");
if (Number.isNaN(resultadoConversion)) {
    console.log("El dato ingresado no es un número válido");
} else {
    console.log("El número es:", resultadoConversion);
}

// ------------------------------------------------------------
// 15. CONVERSIÓN IMPLÍCITA CON EL OPERADOR +
// ------------------------------------------------------------
// Cuando usas el operador + con un string y un número,
// JavaScript prioriza la concatenación de strings.

console.log("\n--- 15. Conversión implícita con + ---");

// El operador + con strings y números:
console.log("\"10\" + 5    →", "10" + 5);
// ¿Por qué "105"?
// Paso 1: JavaScript ve que uno de los operandos es string ("10")
// Paso 2: Como + sirve para concatenar strings, convierte el 5 a "5"
// Paso 3: Concatena: "10" + "5" = "105"

console.log("5 + \"10\"    →", 5 + "10");
// Mismo resultado: "510" → El orden no importa

console.log("\"10\" + \"5\"  →", "10" + "5");
// "105" → Dos strings se concatenan normalmente

console.log("10 + 5       →", 10 + 5);
// 15 → Dos números se suman normalmente

// Casos más complejos:
console.log("\"\" + 5       →", "" + 5);
// "5" → String vacío concatenado con 5

console.log("true + 1     →", true + 1);
// 2 → true se convierte a 1 (coerción numérica en contexto aritmético sin strings)

console.log("false + 1    →", false + 1);
// 1 → false se convierte a 0

console.log("null + 1     →", null + 1);
// 1 → null se convierte a 0

console.log("undefined + 1 →", undefined + 1);
// NaN → undefined se convierte en NaN, y NaN + cualquier cosa = NaN

// Ejemplo con datos de estudiantes:
const nombreAlumno = "María";
const edadAlumno2 = 20;
const notaAlumno = 85;

console.log(nombreAlumno + " tiene " + edadAlumno2 + " años y sacó " + notaAlumno);
// Concatena todo porque empieza con un string.

// ------------------------------------------------------------
// 16. CONVERSIÓN IMPLÍCITA CON OPERADORES ARITMÉTICOS
// ------------------------------------------------------------
// Los operadores aritméticos (-, *, /, %) SOLO funcionan con números.
// Por eso JavaScript convierte automáticamente los strings a números.

console.log("\n--- 16. Conversión implícita con operadores aritméticos ---");

// Resta: convierte strings a números
console.log("\"10\" - 5    →", "10" - 5);
// 5 → JavaScript convierte "10" a 10, luego resta: 10 - 5 = 5

console.log("\"20\" - \"5\"  →", "20" - "5");
// 15 → Ambos se convierten a número: 20 - 5 = 15

// Multiplicación
console.log("\"10\" * 2    →", "10" * 2);
// 20 → "10" se convierte a 10: 10 * 2 = 20

console.log("\"3\" * \"4\"   →", "3" * "4");
// 12 → Ambos se convierten: 3 * 4 = 12

// División
console.log("\"20\" / 4    →", "20" / 4);
// 5 → "20" se convierte a 20: 20 / 4 = 5

// Módulo (residuo de la división)
console.log("\"10\" % 3    →", "10" % 3);
// 1 → "10" se convierte a 10: 10 % 3 = 1

// Negación unaria (cambia el signo, convierte a número)
const textoNum = "42";
const numeroNeg = -textoNum;
console.log("-\"42\"        →", numeroNeg);
// -42 → Convierte "42" a 42 y le cambia el signo

// Casos donde falla (produce NaN):
console.log("\"hola\" - 5   →", "hola" - 5);
// NaN → "hola" no se puede convertir a número

console.log("\"abc\" * 2    →", "abc" * 2);
// NaN → "abc" no se puede convertir a número

console.log("\"\" - 1       →", "" - 1);
// -1 → String vacío se convierte a 0: 0 - 1 = -1

// Tabla resumen de coerción con operadores:
//
// Operador | Con string + number       | Resultado
// ---------|---------------------------|-----------------------
// +        | "10" + 5                  | "105" (concatena)
// -        | "10" - 5                  | 5 (convierte y resta)
// *        | "10" * 2                  | 20 (convierte y multiplica)
// /        | "20" / 4                  | 5 (convierte y divide)
// %        | "10" % 3                  | 1 (convierte y calcula residuo)

// ------------------------------------------------------------
// 17. ERRORES COMUNES AL CONVERTIR DATOS
// ------------------------------------------------------------

console.log("\n--- 17. Errores comunes al convertir datos ---");

// Error 1: Sumar strings creyendo que son números
console.log("ERROR 1: Sumar strings");
const precioA = "100";
const precioB = "200";
console.log(precioA + precioB);
// "100200" → NO suma, concatena. Ambos son strings.
console.log(Number(precioA) + Number(precioB));
// 300 → Conversión explícita antes de sumar

// Error 2: Usar Number() con strings que contienen texto
console.log("\nERROR 2: Number() con texto mezclado");
console.log(Number("25px"));
// NaN → Number() necesita un string 100% numérico
console.log(parseInt("25px"));
// 25 → parseInt() extrae el número del inicio

// Error 3: No verificar NaN después de una conversión
console.log("\nERROR 3: No verificar NaN");
const entradaUsuario = "no disponible";
const resultado = Number(entradaUsuario);
console.log("Resultado:", resultado);
// NaN → Falló la conversión pero el código sigue
console.log("Resultado + 10:", resultado + 10);
// NaN → NaN contamina cualquier operación

// La forma correcta:
if (!Number.isNaN(resultado)) {
    console.log("El resultado es:", resultado + 10);
} else {
    console.log("Error: la entrada no es un número válido");
}

// Error 4: Olvidar que Boolean("0") es true
console.log("\nERROR 4: Boolean(\"0\") es true");
const ceroTexto = "0";
console.log(Boolean(ceroTexto));
// true → El string "0" NO está vacío, es truthy
console.log(Boolean(Number(ceroTexto)));
// false → El número 0 SÍ es falsy

// Error 5: Confundir parseInt() con parseFloat()
console.log("\nERROR 5: parseInt() trunca decimales");
const monto = "199.99";
console.log("parseInt:", parseInt(monto));
// 199 → ¡Perdiste los centavos!
console.log("parseFloat:", parseFloat(monto));
// 199.99 → Correcto para precios

// Error 6: Usar isNaN() en lugar de Number.isNaN()
console.log("\nERROR 6: isNaN() vs Number.isNaN()");
console.log("isNaN(\"hola\"):", isNaN("hola"));
// true → isNaN() convierte "hola" a NaN primero
console.log("Number.isNaN(\"hola\"):", Number.isNaN("hola"));
// false → Number.isNaN() NO convierte, solo verifica

// Error 7: Conversión accidental con el operador +
console.log("\nERROR 7: Conversión accidental con +");
const sueldoBase = "3000";
const bono = 500;
console.log("Total:", sueldoBase + bono);
// "3000500" → No es lo que querías
console.log("Total correcto:", Number(sueldoBase) + bono);
// 3500 → Conversión explícita resuelve el problema

// ============================================================
// EJEMPLOS PRÁCTICOS COMPLETOS
// ============================================================

console.log("\n========================================");
console.log("EJEMPLOS PRÁCTICOS");
console.log("========================================");

// --- Ejemplo: Calcular el cambio de una compra ---
console.log("\n-- Calcular el cambio de una compra --");

const montoCompra = "87.50";
const montoPago = "100";
const cambio = Number(montoPago) - Number(montoCompra);
console.log("Compra:", montoCompra, "Bs.");
console.log("Pago:", montoPago, "Bs.");
console.log("Cambio:", cambio, "Bs.");

// --- Ejemplo: Promedio de notas ---
console.log("\n-- Promedio de notas --");

const nota1 = "72";
const nota2 = "85";
const nota3 = "91";
const promedio = (Number(nota1) + Number(nota2) + Number(nota3)) / 3;
console.log("Notas:", nota1, nota2, nota3);
console.log("Promedio:", promedio);

// --- Ejemplo: Validar entrada de usuario ---
console.log("\n-- Validar entrada de usuario --");

const entradas = ["25", "", "hola", "100", null, "0", "3.14"];

for (const entrada of entradas) {
    const convertido = Number(entrada);
    if (Number.isNaN(convertido)) {
        console.log(`"${entrada}" → No es un número válido`);
    } else {
        console.log(`"${entrada}" → ${convertido} (válido)`);
    }
}

// --- Ejemplo: Mostrar precio formateado ---
console.log("\n-- Mostrar precio formateado --");

const precioSinIva = 150;
const iva = 0.16;
const precioConIva = precioSinIva * (1 + iva);
const precioMostrado = String(precioConIva);
console.log("Precio sin IVA:", precioSinIva, "Bs.");
console.log("IVA:", iva * 100, "%");
console.log("Precio con IVA:", precioMostrado, "Bs.");

// --- Ejemplo: Coerción en condiciones ---
console.log("\n-- Coerción en condiciones --");

const nombreCoercion = "Andrea";
const asistencia = "";
const edadCoercion = 0;

// El if convierte el valor a booleano automáticamente
if (nombreCoercion) {
    console.log("Alumno registrado:", nombreCoercion);
}

if (!asistencia) {
    console.log("Falta registrar asistencia");
}

if (!edadCoercion) {
    console.log("La edad no ha sido ingresada (o es 0)");
}

console.log("\n========================================");
console.log("FIN DE LA LECCIÓN 30");
console.log("========================================");
