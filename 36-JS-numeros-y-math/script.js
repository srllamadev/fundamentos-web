// ============================================================
// LECCION 36 - NUMEROS Y OBJETO MATH
// ============================================================

// ------------------------------------------------------------
// 1. TIPO NUMBER
// ------------------------------------------------------------

// En JavaScript solo existe un tipo para representar numeros: "number"
// No hay diferencia entre enteros y decimales como en otros lenguajes

// Enteros
const edad = 25;
const anioNacimiento = 1998;
const temperatura = -3;
const cero = 0;

// Decimales (flotantes)
const precio = 19.99;
const pi = 3.14159;
const descuento = 0.15;
const temperaturaBolivia = 18.7;

// Notacion cientifica
const numeroGrande = 1e6;
const numeroPequeno = 5e-3;

console.log("--- 1. Tipo number ---");
console.log("Edad:", edad, "- Tipo:", typeof edad);
console.log("Precio:", precio, "- Tipo:", typeof precio);
console.log("Temperatura negativa:", temperatura);
console.log("Notacion cientifica 1e6:", numeroGrande);
console.log("Notacion cientifica 5e-3:", numeroPequeno);

// Valores especiales
const infinito = Infinity;
const menosInfinito = -Infinity;
const noEsNumero = NaN;

console.log("Infinity:", infinito);
console.log("-Infinity:", menosInfinito);
console.log("NaN (Not a Number):", noEsNumero);
console.log("Tipo de NaN:", typeof NaN);

// ------------------------------------------------------------
// 2. Number() - CONVERTIR A NUMERO
// ------------------------------------------------------------

console.log("\n--- 2. Number() - Convertir a numero ---");

const textoNumero = "42";
const textoDecimal = "3.14";
const textoVacio = "";
const textoConEspacios = "  100  ";
const textoNoNumero = "hola";
const valorBooleanoTrue = true;
const valorBooleanoFalse = false;
const valorNulo = null;
const valorUndefined = undefined;

console.log("Number(\"42\"):", Number(textoNumero));
console.log("Number(\"3.14\"):", Number(textoDecimal));
console.log("Number(\"\"):", Number(textoVacio));
console.log("Number(\"  100  \"):", Number(textoConEspacios));
console.log("Number(\"hola\"):", Number(textoNoNumero));
console.log("Number(true):", Number(valorBooleanoTrue));
console.log("Number(false):", Number(valorBooleanoFalse));
console.log("Number(null):", Number(valorNulo));
console.log("Number(undefined):", Number(valorUndefined));

// Ejemplo practico: precio en texto a numero
const precioTexto = "149.95";
const precioNumero = Number(precioTexto);
console.log("Precio en texto:", precioTexto, "- Tipo:", typeof precioTexto);
console.log("Precio convertido:", precioNumero, "- Tipo:", typeof precioNumero);

// ------------------------------------------------------------
// 3. parseInt() - EXTRAER ENTERO DE UN STRING
// ------------------------------------------------------------

console.log("\n--- 3. parseInt() - Extraer entero ---");

console.log("parseInt(\"42\"):", parseInt("42"));
console.log("parseInt(\"42 px\"):", parseInt("42 px"));
console.log("parseInt(\"3.14\"):", parseInt("3.14"));
console.log("parseInt(\"  100  \"):", parseInt("  100  "));
console.log("parseInt(\"hola\"):", parseInt("hola"));
console.log("parseInt(\"123abc456\"):", parseInt("123abc456"));

// parseInt ignora los decimales, solo toma la parte entera
console.log("parseInt(\"19.99 Bs.\"):", parseInt("19.99 Bs."));

// ------------------------------------------------------------
// 4. parseFloat() - EXTRAER DECIMAL DE UN STRING
// ------------------------------------------------------------

console.log("\n--- 4. parseFloat() - Extraer decimal ---");

console.log("parseFloat(\"3.14\"):", parseFloat("3.14"));
console.log("parseFloat(\"3.14 px\"):", parseFloat("3.14 px"));
console.log("parseFloat(\"42\"):", parseFloat("42"));
console.log("parseFloat(\"  100.50  \"):", parseFloat("  100.50  "));
console.log("parseFloat(\"hola\"):", parseFloat("hola"));
console.log("parseFloat(\"19.99 Bs.\"):", parseFloat("19.99 Bs."));

// Diferencia entre Number, parseInt y parseFloat
const valor = "3.14abc";
console.log("\nComparacion para \"" + valor + "\":");
console.log("Number():", Number(valor));
console.log("parseInt():", parseInt(valor));
console.log("parseFloat():", parseFloat(valor));

// ------------------------------------------------------------
// 5. Number.isInteger() - VERIFICAR SI ES ENTERO
// ------------------------------------------------------------

console.log("\n--- 5. Number.isInteger() - Verificar entero ---");

console.log("Number.isInteger(25):", Number.isInteger(25));
console.log("Number.isInteger(25.0):", Number.isInteger(25.0));
console.log("Number.isInteger(25.5):", Number.isInteger(25.5));
console.log("Number.isInteger(0):", Number.isInteger(0));
console.log("Number.isInteger(-10):", Number.isInteger(-10));
console.log("Number.isInteger(3.0):", Number.isInteger(3.0));
console.log("Number.isInteger(\"25\"):", Number.isInteger("25"));
console.log("Number.isInteger(NaN):", Number.isInteger(NaN));
console.log("Number.isInteger(Infinity):", Number.isInteger(Infinity));

// Ejemplo: verificar si una cantidad es un numero entero de productos
const cantidadProductos = 5;
if (Number.isInteger(cantidadProductos)) {
    console.log("La cantidad de productos es valida:", cantidadProductos);
}

// ------------------------------------------------------------
// 6. Number.isNaN() - VERIFICAR SI ES NaN
// ------------------------------------------------------------

console.log("\n--- 6. Number.isNaN() - Verificar NaN ---");

console.log("Number.isNaN(NaN):", Number.isNaN(NaN));
console.log("Number.isNaN(42):", Number.isNaN(42));
console.log("Number.isNaN(\"hola\"):", Number.isNaN("hola"));
console.log("Number.isNaN(Number(\"abc\")):", Number.isNaN(Number("abc")));
console.log("Number.isNaN(Infinity):", Number.isNaN(Infinity));
console.log("Number.isNaN(undefined):", Number.isNaN(undefined));

// Importante: NaN es el unico valor en JavaScript que no es igual a si mismo
console.log("\nNaN === NaN:", NaN === NaN);
console.log("Object.is(NaN, NaN):", Object.is(NaN, NaN));

// Uso practico: validar que una conversion fue exitosa
const montoRecibido = "abc";
const montoConvertido = Number(montoRecibido);

if (Number.isNaN(montoConvertido)) {
    console.log("Error: el valor \"" + montoRecibido + "\" no es un numero valido");
}

// ------------------------------------------------------------
// 7. Number.isFinite() - VERIFICAR SI ES FINITO
// ------------------------------------------------------------

console.log("\n--- 7. Number.isFinite() - Verificar si es finito ---");

console.log("Number.isFinite(42):", Number.isFinite(42));
console.log("Number.isFinite(3.14):", Number.isFinite(3.14));
console.log("Number.isFinite(0):", Number.isFinite(0));
console.log("Number.isFinite(Infinity):", Number.isFinite(Infinity));
console.log("Number.isFinite(-Infinity):", Number.isFinite(-Infinity));
console.log("Number.isFinite(NaN):", Number.isFinite(NaN));
console.log("Number.isFinite(\"42\"):", Number.isFinite("42"));

// Ejemplo: validar un monto antes de operar
const validarMonto = (monto) => {
    if (Number.isFinite(monto)) {
        console.log("Monto valido:", monto);
    } else {
        console.log("Monto invalido, revisar el valor:", monto);
    }
};

validarMonto(100);
validarMonto(Infinity);
validarMonto(NaN);

// ------------------------------------------------------------
// 8. toFixed() - REDONDEAR A N DECIMALES (RETORNA STRING)
// ------------------------------------------------------------

console.log("\n--- 8. toFixed() - Redondear a N decimales ---");

// IMPORTANTE: toFixed() retorna un STRING, no un numero
const precioProducto = 19.956;
const precioRedondeado = precioProducto.toFixed(2);

console.log("Precio original:", precioProducto, "- Tipo:", typeof precioProducto);
console.log("Precio con toFixed(2):", precioRedondeado, "- Tipo:", typeof precioRedondeado);

// Para obtener un numero, hay que convertir el resultado
const precioComoNumero = Number(precioProducto.toFixed(2));
console.log("Precio convertido a numero:", precioComoNumero, "- Tipo:", typeof precioComoNumero);

// Ejemplos con diferentes precisiones
const numeroEjemplo = 3.14159;
console.log("\ntoFixed(0):", numeroEjemplo.toFixed(0), "- Tipo:", typeof numeroEjemplo.toFixed(0));
console.log("toFixed(1):", numeroEjemplo.toFixed(1), "- Tipo:", typeof numeroEjemplo.toFixed(1));
console.log("toFixed(2):", numeroEjemplo.toFixed(2), "- Tipo:", typeof numeroEjemplo.toFixed(2));
console.log("toFixed(4):", numeroEjemplo.toFixed(4), "- Tipo:", typeof numeroEjemplo.toFixed(4));

// toFixed() redondea
console.log("\ntoFixed() redondea:");
console.log("(2.5).toFixed(0):", (2.5).toFixed(0));
console.log("(2.4).toFixed(0):", (2.4).toFixed(0));
console.log("(2.345).toFixed(2):", (2.345).toFixed(2));
console.log("(2.355).toFixed(2):", (2.355).toFixed(2));

// Rellenar con ceros si es necesario
const montoSimple = 5;
console.log("\ntoFixed rellena con ceros:");
console.log("(5).toFixed(2):", montoSimple.toFixed(2));
console.log("(10).toFixed(3):", (10).toFixed(3));

// Ejemplo practico: formatear precios en Bolivianos
const formatearPrecio = (precio) => {
    return "Bs. " + precio.toFixed(2);
};

console.log(formatearPrecio(19));
console.log(formatearPrecio(19.5));
console.log(formatearPrecio(19.956));

// ------------------------------------------------------------
// 9. PROBLEMAS DE PRECISION DECIMAL
// ------------------------------------------------------------

console.log("\n--- 9. Problemas de precision decimal ---");

// Este es un problema conocido en muchos lenguajes de programacion
// debido a como se representan los numeros decimales en binario (IEEE 754)
console.log("0.1 + 0.2:", 0.1 + 0.2);
console.log("0.1 + 0.2 === 0.3:", 0.1 + 0.2 === 0.3);

// Mas ejemplos del mismo problema
console.log("0.3 - 0.1:", 0.3 - 0.1);
console.log("0.2 * 0.1:", 0.2 * 0.1);
console.log("0.1 + 0.7:", 0.1 + 0.7);

// Solucion 1: Usar toFixed() para redondear el resultado
const resultado1 = (0.1 + 0.2).toFixed(2);
console.log("\nSolucion con toFixed:", Number(resultado1));

// Solucion 2: Multiplicar, operar y dividir
const resultado2 = (1 + 2) / 10;
console.log("Solucion con multiplicacion/division:", resultado2);

// Solucion 3: Usar un epsilon para comparaciones
const epsilon = 0.0000001;
const sonIguales = Math.abs(0.1 + 0.2 - 0.3) < epsilon;
console.log("Comparacion con epsilon:", sonIguales);

// Esto NO afecta solo a JavaScript
// Es un estandar internacional (IEEE 754) que usan casi todos los lenguajes

// ------------------------------------------------------------
// 10. INTRODUCCION AL OBJETO MATH
// ------------------------------------------------------------

console.log("\n--- 10. El objeto Math ---");

// Math es un objeto incorporado en JavaScript con propiedades y metodos
// para operaciones matematicas. No necesita ser instanciados con "new"
// Simplemente se usa Math.propiedad o Math.metodo()

console.log("Math es de tipo:", typeof Math);
console.log("Math no es un constructor, es un objeto estatico");

// ------------------------------------------------------------
// 11. Math.PI - LA CONSTANTE PI
// ------------------------------------------------------------

console.log("\n--- 11. Math.PI ---");

console.log("Math.PI:", Math.PI);
console.log("Math.PI.toFixed(10):", Math.PI.toFixed(10));

// Usar PI para calcular la circunferencia de un circulo
const radio = 5;
const circunferencia = 2 * Math.PI * radio;
console.log("Circunferencia con radio 5:", circunferencia.toFixed(2));

// ------------------------------------------------------------
// 12. Math.round() - REDONDEAR AL ENTERO MAS CERCANO
// ------------------------------------------------------------

console.log("\n--- 12. Math.round() - Redondear al entero mas cercano ---");

console.log("Math.round(4.3):", Math.round(4.3));
console.log("Math.round(4.5):", Math.round(4.5));
console.log("Math.round(4.7):", Math.round(4.7));
console.log("Math.round(-4.3):", Math.round(-4.3));
console.log("Math.round(-4.5):", Math.round(-4.5));
console.log("Math.round(-4.7):", Math.round(-4.7));
console.log("Math.round(0):", Math.round(0));

// Math.round() siempre retorna un numero (no string como toFixed)
const resultadoRound = Math.round(4.7);
console.log("Tipo de resultado:", typeof resultadoRound);

// Truco: redondear a N decimales usando Math.round
const redondearADosDecimales = (num) => {
    return Math.round(num * 100) / 100;
};

console.log("Redondear 3.14159 a 2 decimales:", redondearADosDecimales(3.14159));
console.log("Redondear 2.345 a 2 decimales:", redondearADosDecimales(2.345));
console.log("Redondear 2.355 a 2 decimales:", redondearADosDecimales(2.355));

// ------------------------------------------------------------
// 13. Math.floor() - REDONDEAR HACIA ABAJO
// ------------------------------------------------------------

console.log("\n--- 13. Math.floor() - Redondear hacia abajo ---");

console.log("Math.floor(4.9):", Math.floor(4.9));
console.log("Math.floor(4.1):", Math.floor(4.1));
console.log("Math.floor(4.0):", Math.floor(4.0));
console.log("Math.floor(-4.1):", Math.floor(-4.1));
console.log("Math.floor(-4.9):", Math.floor(-4.9));

// Ejemplo practico: cuantos productos completos se pueden comprar
const presupuesto = 100;
const precioUnitario = 12.50;
const productosQuePuedoComprar = Math.floor(presupuesto / precioUnitario);
console.log("\nCon Bs.", presupuesto, "y precio Bs.", precioUnitario);
console.log("Productos completos que puedo comprar:", productosQuePuedoComprar);

// ------------------------------------------------------------
// 14. Math.ceil() - REDONDEAR HACIA ARRIBA
// ------------------------------------------------------------

console.log("\n--- 14. Math.ceil() - Redondear hacia arriba ---");

console.log("Math.ceil(4.1):", Math.ceil(4.1));
console.log("Math.ceil(4.9):", Math.ceil(4.9));
console.log("Math.ceil(4.0):", Math.ceil(4.0));
console.log("Math.ceil(-4.1):", Math.ceil(-4.1));
console.log("Math.ceil(-4.9):", Math.ceil(-4.9));

// Ejemplo practico: cuantas paginas necesito para N elementos
const totalElementos = 25;
const elementosPorPagina = 10;
const paginasNecesarias = Math.ceil(totalElementos / elementosPorPagina);
console.log("\n" + totalElementos + " elementos, " + elementosPorPagina + " por pagina");
console.log("Paginas necesarias:", paginasNecesarias);

// ------------------------------------------------------------
// 15. Math.trunc() - ELIMINAR DECIMALES
// ------------------------------------------------------------

console.log("\n--- 15. Math.trunc() - Eliminar decimales ---");

// Math.trunc() simplemente elimina la parte decimal, no redondea
console.log("Math.trunc(4.9):", Math.trunc(4.9));
console.log("Math.trunc(4.1):", Math.trunc(4.1));
console.log("Math.trunc(-4.1):", Math.trunc(-4.1));
console.log("Math.trunc(-4.9):", Math.trunc(-4.9));
console.log("Math.trunc(0.999):", Math.trunc(0.999));

// Comparar trunc con floor y ceil
console.log("\nComparacion trunc vs floor vs ceil:");
console.log("Para 4.7 - floor:", Math.floor(4.7), "ceil:", Math.ceil(4.7), "trunc:", Math.trunc(4.7));
console.log("Para -4.7 - floor:", Math.floor(-4.7), "ceil:", Math.ceil(-4.7), "trunc:", Math.trunc(-4.7));

// ------------------------------------------------------------
// 16. Math.abs() - VALOR ABSOLUTO
// ------------------------------------------------------------

console.log("\n--- 16. Math.abs() - Valor absoluto ---");

console.log("Math.abs(5):", Math.abs(5));
console.log("Math.abs(-5):", Math.abs(-5));
console.log("Math.abs(0):", Math.abs(0));
console.log("Math.abs(-3.14):", Math.abs(-3.14));
console.log("Math.abs(3.14):", Math.abs(3.14));

// Ejemplo: diferencia absoluta de temperatura entre dos ciudades
const tempLaPaz = 8;
const tempSantaCruz = 32;
const diferencia = Math.abs(tempLaPaz - tempSantaCruz);
console.log("\nTemperatura La Paz:", tempLaPaz, "C");
console.log("Temperatura Santa Cruz:", tempSantaCruz, "C");
console.log("Diferencia absoluta:", diferencia, "C");

// ------------------------------------------------------------
// 17. Math.pow() - POTENCIA
// ------------------------------------------------------------

console.log("\n--- 17. Math.pow() - Potencia ---");

console.log("Math.pow(2, 3):", Math.pow(2, 3));
console.log("Math.pow(5, 2):", Math.pow(5, 2));
console.log("Math.pow(10, 0):", Math.pow(10, 0));
console.log("Math.pow(3, 4):", Math.pow(3, 4));

// El operador ** hace lo mismo (mas moderno)
console.log("\nCon operador ** :");
console.log("2 ** 3:", 2 ** 3);
console.log("5 ** 2:", 5 ** 2);
console.log("10 ** 0:", 10 ** 0);
console.log("3 ** 4:", 3 ** 4);

// Ejemplo: calcular area de un cuadrado
const lado = 4;
const area = lado ** 2;
console.log("\nArea de cuadrado con lado", lado, "=", area);

// Ejemplo: calcular interes compuesto
const capital = 1000;
const tasaInteres = 0.05;
const anios = 3;
const montoFinal = capital * (1 + tasaInteres) ** anios;
console.log("Interes compuesto: Bs.", capital, "al", tasaInteres * 100 + "% por", anios, "anos");
console.log("Monto final: Bs.", montoFinal.toFixed(2));

// ------------------------------------------------------------
// 18. Math.sqrt() - RAIZ CUADRADA
// ------------------------------------------------------------

console.log("\n--- 18. Math.sqrt() - Raiz cuadrada ---");

console.log("Math.sqrt(25):", Math.sqrt(25));
console.log("Math.sqrt(16):", Math.sqrt(16));
console.log("Math.sqrt(2):", Math.sqrt(2));
console.log("Math.sqrt(0):", Math.sqrt(0));
console.log("Math.sqrt(-1):", Math.sqrt(-1));

// Ejemplo: calcular el lado de un cuadrado dado su area
const areaConocida = 49;
const ladoCalculado = Math.sqrt(areaConocida);
console.log("\nArea del cuadrado:", areaConocida);
console.log("Lado del cuadrado:", ladoCalculado);

// ------------------------------------------------------------
// 19. Math.min() - MINIMO DE ARGUMENTOS
// ------------------------------------------------------------

console.log("\n--- 19. Math.min() - Minimo ---");

console.log("Math.min(5, 3, 8, 1, 9):", Math.min(5, 3, 8, 1, 9));
console.log("Math.min(10, 20):", Math.min(10, 20));
console.log("Math.min(-5, 0, 5):", Math.min(-5, 0, 5));
console.log("Math.min():", Math.min());

// Ejemplo: encontrar la nota mas baja
const nota1 = 75;
const nota2 = 88;
const nota3 = 62;
const nota4 = 91;
const notaMasBaja = Math.min(nota1, nota2, nota3, nota4);
console.log("\nNotas:", nota1, nota2, nota3, nota4);
console.log("Nota mas baja:", notaMasBaja);

// ------------------------------------------------------------
// 20. Math.max() - MAXIMO DE ARGUMENTOS
// ------------------------------------------------------------

console.log("\n--- 20. Math.max() - Maximo ---");

console.log("Math.max(5, 3, 8, 1, 9):", Math.max(5, 3, 8, 1, 9));
console.log("Math.max(10, 20):", Math.max(10, 20));
console.log("Math.max(-5, 0, 5):", Math.max(-5, 0, 5));
console.log("Math.max():", Math.max());

// Ejemplo: encontrar la nota mas alta
const notaMasAlta = Math.max(nota1, nota2, nota3, nota4);
console.log("\nNotas:", nota1, nota2, nota3, nota4);
console.log("Nota mas alta:", notaMasAlta);

// Rango de notas
console.log("Rango de notas: de", notaMasBaja, "a", notaMasAlta);

// ------------------------------------------------------------
// 21. Math.random() - NUMERO ALEATORIO
// ------------------------------------------------------------

console.log("\n--- 21. Math.random() - Numero aleatorio ---");

// Math.random() genera un numero entre 0 (inclusive) y 1 (exclusive)
const aleatorio1 = Math.random();
const aleatorio2 = Math.random();
const aleatorio3 = Math.random();

console.log("Aleatorio 1:", aleatorio1);
console.log("Aleatorio 2:", aleatorio2);
console.log("Aleatorio 3:", aleatorio3);

// IMPORTANTE: Math.random() NO es criptograficamente seguro
// No usar para passwords, tokens, claves o seguridad
// Para seguridad usar: crypto.getRandomValues()

// ------------------------------------------------------------
// 22. GENERAR NUMEROS ALEATORIOS EN UN RANGO
// ------------------------------------------------------------

console.log("\n--- 22. Aleatorios en un rango ---");

// Formula: Math.floor(Math.random() * (max - min + 1)) + min
// Esto da numeros enteros entre min y max (ambos inclusive)

const aleatorioEntre1Y10 = Math.floor(Math.random() * 10) + 1;
console.log("Aleatorio entre 1 y 10:", aleatorioEntre1Y10);

const aleatorioEntre1Y100 = Math.floor(Math.random() * 100) + 1;
console.log("Aleatorio entre 1 y 100:", aleatorioEntre1Y100);

const aleatorioEntre50Y100 = Math.floor(Math.random() * 51) + 50;
console.log("Aleatorio entre 50 y 100:", aleatorioEntre50Y100);

// Funcion reutilizable para generar aleatorios en un rango
const numeroAleatorio = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

console.log("\nFuncion numeroAleatorio(1, 6):", numeroAleatorio(1, 6));
console.log("Funcion numeroAleatorio(1, 6):", numeroAleatorio(1, 6));
console.log("Funcion numeroAleatorio(1, 6):", numeroAleatorio(1, 6));
console.log("Funcion numeroAleatorio(10, 20):", numeroAleatorio(10, 20));
console.log("Funcion numeroAleatorio(10, 20):", numeroAleatorio(10, 20));

// ------------------------------------------------------------
// 23. ORDEN DE OPERACIONES
// ------------------------------------------------------------

console.log("\n--- 23. Orden de operaciones ---");

// JavaScript sigue el orden matematico estandar:
// 1. Parentesis ()
// 2. Exponenciacion **
// 3. Multiplicacion, division, modulo (*, /, %)
// 4. Suma, resta (+, -)

const resultado1a = 2 + 3 * 4;
const resultado2a = (2 + 3) * 4;
console.log("2 + 3 * 4 =", resultado1a, "(primero multiplicacion)");
console.log("(2 + 3) * 4 =", resultado2a, "(primero parentesis)");

const resultado3a = 10 - 2 ** 3;
const resultado4a = (10 - 2) ** 3;
console.log("10 - 2 ** 3 =", resultado3a, "(primero exponenciacion)");
console.log("(10 - 2) ** 3 =", resultado4a, "(primero parentesis)");

const resultado5a = 20 / 4 + 3 * 2 - 1;
console.log("20 / 4 + 3 * 2 - 1 =", resultado5a);
console.log("  = 5 + 6 - 1 =", resultado5a);

const resultado6a = Math.sqrt(16) + Math.pow(2, 3);
console.log("Math.sqrt(16) + Math.pow(2, 3) =", resultado6a);
console.log("  = 4 + 8 =", resultado6a);

// ------------------------------------------------------------
// 24. ERRORES COMUNES CON NUMEROS
// ------------------------------------------------------------

console.log("\n--- 24. Errores comunes con numeros ---");

// Error 1: Dividir entre cero
console.log("Error 1 - Dividir entre cero:");
console.log("10 / 0:", 10 / 0);
console.log("-10 / 0:", -10 / 0);
console.log("0 / 0:", 0 / 0);

// Error 2: Operar con strings sin convertir
console.log("\nError 2 - Operar con strings:");
const precioTexto2 = "19.99";
const cantidad = 3;
console.log("\"19.99\" + 3 =", precioTexto2 + cantidad, "(concatenacion, no suma!)");
console.log("Number(\"19.99\") + 3 =", Number(precioTexto2) + cantidad, "(suma correcta)");

// Error 3: Usar == en vez de ===
console.log("\nError 3 - Comparacion incorrecta:");
console.log("42 == \"42\":", 42 == "42");
console.log("42 === \"42\":", 42 === "42");

// Error 4: Olvidar que toFixed() retorna string
console.log("\nError 4 - toFixed() retorna string:");
const precioConIva = (100 * 1.16).toFixed(2);
console.log("precioConIva:", precioConIva, "- Tipo:", typeof precioConIva);
console.log("precioConIva + 10:", precioConIva + 10, "(concatena!)");
console.log("Number(precioConIva) + 10:", Number(precioConIva) + 10, "(suma correcta)");

// Error 5: Precision decimal
console.log("\nError 5 - Precision decimal:");
const total = 0.1 + 0.2;
console.log("0.1 + 0.2 =", total);
console.log("total === 0.3:", total === 0.3);
console.log("Solucion:", Number(total.toFixed(2)) === 0.3);

// ============================================================
// EJEMPLOS PRACTICOS INTEGRADOS
// ============================================================

// ------------------------------------------------------------
// PRACTICA 1: Redondear precios a 2 decimales
// ------------------------------------------------------------

console.log("\n=== PRACTICA 1: Redondear precios ===");

const precioBase = 49.9567;
const precioConDescuento = precioBase * 0.85;
const precioFinal = Number(precioConDescuento.toFixed(2));

console.log("Precio base: Bs.", precioBase);
console.log("Con 15% descuento: Bs.", precioConDescuento);
console.log("Precio final redondeado: Bs.", precioFinal);

// ------------------------------------------------------------
// PRACTICA 2: Calcular area de un circulo
// ------------------------------------------------------------

console.log("\n=== PRACTICA 2: Area de un circulo ===");

const radioCirculo = 7;
const areaCirculo = Math.PI * radioCirculo ** 2;
const areaRedondeada = Number(areaCirculo.toFixed(2));

console.log("Radio:", radioCirculo, "cm");
console.log("Area: PI * r^2 = PI *", radioCirculo, "^2");
console.log("Area:", areaRedondeada, "cm^2");

// ------------------------------------------------------------
// PRACTICA 3: Valor absoluto de diferencia de temperatura
// ------------------------------------------------------------

console.log("\n=== PRACTICA 3: Diferencia de temperatura ===");

const tempCochabamba = 22;
const tempOruro = -2;
const diferenciaTemp = Math.abs(tempCochabamba - tempOruro);

console.log("Temperatura Cochabamba:", tempCochabamba, "C");
console.log("Temperatura Oruro:", tempOruro, "C");
console.log("Diferencia absoluta:", diferenciaTemp, "C");

// ------------------------------------------------------------
// PRACTICA 4: Maximo y minimo de varias notas
// ------------------------------------------------------------

console.log("\n=== PRACTICA 4: Notas maximo y minimo ===");

const estudiante = "Maria";
const notaA = 85;
const notaB = 72;
const notaC = 93;
const notaD = 68;
const notaE = 88;

const notaMaxima = Math.max(notaA, notaB, notaC, notaD, notaE);
const notaMinima = Math.min(notaA, notaB, notaC, notaD, notaE);
const promedio = (notaA + notaB + notaC + notaD + notaE) / 5;

console.log("Estudiante:", estudiante);
console.log("Notas:", notaA, notaB, notaC, notaD, notaE);
console.log("Nota maxima:", notaMaxima);
console.log("Nota minima:", notaMinima);
console.log("Promedio:", promedio.toFixed(2));

// ------------------------------------------------------------
// PRACTICA 5: Raiz cuadrada para problema geometrico
// ------------------------------------------------------------

console.log("\n=== PRACTICA 5: Raiz cuadrada - geometria ===");

// Teorema de Pitagoras: c = sqrt(a^2 + b^2)
const catetoA = 3;
const catetoB = 4;
const hipotenusa = Math.sqrt(catetoA ** 2 + catetoB ** 2);

console.log("Cateto a:", catetoA);
console.log("Cateto b:", catetoB);
console.log("Hipotenusa:", hipotenusa);
console.log("Verificacion: 3^2 + 4^2 =", catetoA ** 2 + catetoB ** 2);
console.log("sqrt(25) =", Math.sqrt(25));

// ------------------------------------------------------------
// PRACTICA 6: Generar aleatorio entre 1 y 10
// ------------------------------------------------------------

console.log("\n=== PRACTICA 6: Aleatorio entre 1 y 10 ===");

const generar1a10 = () => Math.floor(Math.random() * 10) + 1;

console.log("Intento 1:", generar1a10());
console.log("Intento 2:", generar1a10());
console.log("Intento 3:", generar1a10());
console.log("Intento 4:", generar1a10());
console.log("Intento 5:", generar1a10());

// ------------------------------------------------------------
// PRACTICA 7: Simular tiro de dado (1-6)
// ------------------------------------------------------------

console.log("\n=== PRACTICA 7: Simular dado ===");

const tirarDado = () => Math.floor(Math.random() * 6) + 1;

console.log("Tiro 1:", tirarDado());
console.log("Tiro 2:", tirarDado());
console.log("Tiro 3:", tirarDado());
console.log("Tiro 4:", tirarDado());
console.log("Tiro 5:", tirarDado());

// ------------------------------------------------------------
// PRACTICA 8: Total de productos con cantidades
// ------------------------------------------------------------

console.log("\n=== PRACTICA 8: Calcular total de compra ===");

const producto1Nombre = "Arroz";
const producto1Precio = 8.50;
const producto1Cantidad = 3;

const producto2Nombre = "Fideo";
const producto2Precio = 6.75;
const producto2Cantidad = 2;

const producto3Nombre = "Azucar";
const producto3Precio = 12.00;
const producto3Cantidad = 1;

const subtotal1 = producto1Precio * producto1Cantidad;
const subtotal2 = producto2Precio * producto2Cantidad;
const subtotal3 = producto3Precio * producto3Cantidad;
const totalCompra = subtotal1 + subtotal2 + subtotal3;

console.log(producto1Nombre + ":", producto1Cantidad, "x Bs.", producto1Precio, "= Bs.", subtotal1.toFixed(2));
console.log(producto2Nombre + ":", producto2Cantidad, "x Bs.", producto2Precio, "= Bs.", subtotal2.toFixed(2));
console.log(producto3Nombre + ":", producto3Cantidad, "x Bs.", producto3Precio, "= Bs.", subtotal3.toFixed(2));
console.log("Total:", "Bs.", Number(totalCompra.toFixed(2)));

// ------------------------------------------------------------
// PRACTICA 9: Convertir precios de string a numero
// ------------------------------------------------------------

console.log("\n=== PRACTICA 9: Convertir strings a numeros ===");

const preciosTexto = ["19.99", "45.50", "8.75", "120", "0.99"];
const preciosNumero = preciosTexto.map(precio => parseFloat(precio));

console.log("Precios en texto:", preciosTexto);
console.log("Precios convertidos:", preciosNumero);

const totalPrecios = preciosNumero.reduce((suma, precio) => suma + precio, 0);
console.log("Total:", "Bs.", Number(totalPrecios.toFixed(2)));

// ------------------------------------------------------------
// PRACTICA 10: Mostrar problemas de precision y soluciones
// ------------------------------------------------------------

console.log("\n=== PRACTICA 10: Precision decimal y soluciones ===");

const montoA = 1.01;
const montoB = 0.99;
const sumaEsperada = 2.00;
const sumaReal = montoA + montoB;

console.log(montoA, "+", montoB, "=", sumaReal);
console.log("Es exactamente 2?", sumaReal === sumaEsperada);
console.log("Con toFixed:", Number(sumaReal.toFixed(2)));
console.log("Con toFixed es 2?", Number(sumaReal.toFixed(2)) === sumaEsperada);

// Otro ejemplo con precios en Bolivianos
const precio1 = 10.10;
const precio2 = 20.20;
const totalEsperado = 30.30;
const totalReal = precio1 + precio2;

console.log("\nBs.", precio1, "+ Bs.", precio2, "= Bs.", totalReal);
console.log("Deberia ser Bs.", totalEsperado);
console.log("Solucion:", "Bs.", Number(totalReal.toFixed(2)));

console.log("\n=== FIN DE LA LECCION 36 ===");
