// ============================================================
// LECCION 35 - CADENAS DE TEXTO (STRINGS)
// ============================================================

// ------------------------------------------------------------
// 1. QUE ES UN STRING
// ------------------------------------------------------------

// Un string es una secuencia de caracteres, es decir, texto.
// Puede contener letras, numeros, simbolos, espacios y emojis.
// En JavaScript, los strings son uno de los tipos de datos primitivos.

const saludo = "Hola Mundo";
const nombre = "Maria";
const numeroComoTexto = "123";
const vacio = "";

console.log("--- 1. Que es un string ---");
console.log(saludo);
console.log(nombre);
console.log(numeroComoTexto);
console.log(vacio);
console.log("Tipo de dato:", typeof saludo);
console.log("Tipo de dato de vacio:", typeof vacio);

// ------------------------------------------------------------
// 2. CREACION DE STRINGS
// ------------------------------------------------------------

// Se pueden crear con comillas dobles, simples o template literals.

const conDobles = "Comillas dobles";
const conSimples = 'Comillas simples';
const conBackticks = `Template literal`;

console.log("--- 2. Creacion de strings ---");
console.log(conDobles);
console.log(conSimples);
console.log(conBackticks);

// Las comillas simples son utiles cuando el texto contiene comillas dobles:
const cita = 'El libro dice: "La lectura es poderosa"';
console.log(cita);

// Las comillas dobles son utiles cuando el texto tiene comillas simples:
const frase = "Bolivia es un pais maravilloso y su capital constitucional es Sucre";
console.log(frase);

// ------------------------------------------------------------
// 3. INTERPOLACION CON TEMPLATE LITERALS
// ------------------------------------------------------------

// Los template literals (backticks) permiten insertar expresiones
// dentro de un string usando la sintaxis ${expresion}.

const estudiante = "Juan";
const edad = 20;
const ciudad = "La Paz";

const presentacion = `Me llamo ${estudiante}, tengo ${edad} anos y soy de ${ciudad}`;
console.log("--- 3. Interpolacion ---");
console.log(presentacion);

// Se pueden usar expresiones dentro de ${}:
const operacion = `La suma de 5 + 3 es ${5 + 3}`;
console.log(operacion);

const otroEstudiante = "Ana";
const mensaje = `Hola, ${otroEstudiante.toUpperCase()}! Bienvenida al curso.`;
console.log(mensaje);

// Multilinea con template literals:
const poema = `Las lineas de un poema
pueden ocupar
varias lineas asi`;
console.log(poema);

// ------------------------------------------------------------
// 4. CONCATENACION CON +
// ------------------------------------------------------------

// Antes de los template literals, la forma de unir strings era con +.

const primerNombre = "Carlos";
const apellido = "Mendoza";
const nombreCompleto = primerNombre + " " + apellido;

console.log("--- 4. Concatenacion ---");
console.log(nombreCompleto);

// Tambien se puede concatenar con numeros (se convierten a string):
const anioNacimiento = 2003;
const textoEdad = "Naciste en el anio " + anioNacimiento;
console.log(textoEdad);

// Comparacion: template literal vs concatenacion
const conConcat = "Hola, " + primerNombre + "!";
const conTemplate = `Hola, ${primerNombre}!`;
console.log(conConcat);
console.log(conTemplate);
console.log("Son iguales:", conConcat === conTemplate);

// ------------------------------------------------------------
// 5. PROPIEDAD LENGTH
// ------------------------------------------------------------

// La propiedad .length devuelve la cantidad de caracteres del string.

const palabra = "Bolivia";
console.log("--- 5. Propiedad length ---");
console.log(`"${palabra}" tiene ${palabra.length} caracteres`);

const oracion = "JavaScript es poderoso";
console.log(`"${oracion}" tiene ${oracion.length} caracteres`);

// El string vacio tiene length 0:
console.log(`String vacio tiene length: ${"".length}`);

// Los espacios cuentan como caracteres:
const conEspacios = "Hola mundo";
console.log(`"${conEspacios}" tiene ${conEspacios.length} caracteres (el espacio cuenta)`);

// ------------------------------------------------------------
// 6. ACCESO POR INDICE (BRACKET NOTATION)
// ------------------------------------------------------------

// Cada caracter tiene una posicion numerica que empieza en 0.

const pais = "Bolivia";
console.log("--- 6. Acceso por indice ---");
console.log(`Primer caracter de "${pais}": ${pais[0]}`);
console.log(`Segundo caracter: ${pais[1]}`);
console.log(`Tercer caracter: ${pais[2]}`);
console.log(`Ultimo caracter: ${pais[pais.length - 1]}`);

// Si el indice esta fuera de rango, devuelve undefined:
console.log(`Indice fuera de rango: ${pais[100]}`);

// Se puede usar en cualquier string:
const otraPalabra = "Sucre";
console.log(`Primera letra de "${otraPalabra}": ${otraPalabra[0]}`);
console.log(`Ultima letra de "${otraPalabra}": ${otraPalabra[otraPalabra.length - 1]}`);

// ------------------------------------------------------------
// 7. METODO charAt()
// ------------------------------------------------------------

// charAt() devuelve el caracter en la posicion indicada.
// Es similar a usar bracket notation, pero mas explicito.

const departamento = "Cochabamba";
console.log("--- 7. Metodo charAt() ---");
console.log(`charAt(0): ${departamento.charAt(0)}`);
console.log(`charAt(4): ${departamento.charAt(4)}`);
console.log(`Primer caracter: ${departamento.charAt(0)}`);
console.log(`Ultimo caracter: ${departamento.charAt(departamento.length - 1)}`);

// Diferencia con bracket notation: charAt devuelve "" si el indice no existe
console.log(`charAt(100): "${departamento.charAt(100)}"`);
console.log(`[100]: ${departamento[100]}`);

// ------------------------------------------------------------
// 8. METODO at()
// ------------------------------------------------------------

// at() es un metodo moderno que permite indices negativos.
// Los indices negativos cuentan desde el final del string.

const ciudad2 = "Santa Cruz";
console.log("--- 8. Metodo at() ---");
console.log(`at(0): ${ciudad2.at(0)}`);
console.log(`at(5): ${ciudad2.at(5)}`);
console.log(`at(-1) ultimo: ${ciudad2.at(-1)}`);
console.log(`at(-2) penultimo: ${ciudad2.at(-2)}`);
console.log(`at(-5): ${ciudad2.at(-5)}`);

// Equivalente con bracket notation (solo para el ultimo):
console.log(`Ultimo con [length-1]: ${ciudad2[ciudad2.length - 1]}`);

// ------------------------------------------------------------
// 9. METODO toUpperCase()
// ------------------------------------------------------------

// Convierte todos los caracteres a mayusculas.

const minusculas = "la paz es hermosa";
const mayusculas = minusculas.toUpperCase();

console.log("--- 9. toUpperCase() ---");
console.log(`Original: "${minusculas}"`);
console.log(`En mayusculas: "${mayusculas}"`);

// Ejemplo con nombre de estudiante:
const nombreEstudiante = "maria fernanda lopez";
console.log(`Nombre en mayusculas: ${nombreEstudiante.toUpperCase()}`);

// ------------------------------------------------------------
// 10. METODO toLowerCase()
// ------------------------------------------------------------

// Convierte todos los caracteres a minusculas.

const MAYUSCULAS = "ORURO, BOLIVIA";
const minusculas2 = MAYUSCULAS.toLowerCase();

console.log("--- 10. toLowerCase() ---");
console.log(`Original: "${MAYUSCULAS}"`);
console.log(`En minusculas: "${minusculas2}"`);

const producto = "QUINOA ORGANICA";
console.log(`Producto: ${producto.toLowerCase()}`);

// ------------------------------------------------------------
// 11. METODO trim()
// ------------------------------------------------------------

// Elimina los espacios en blanco al inicio y al final del string.

const entradaUsuario = "   Juan Perez   ";
const limpio = entradaUsuario.trim();

console.log("--- 11. trim() ---");
console.log(`Antes de trim: "${entradaUsuario}" (length: ${entradaUsuario.length})`);
console.log(`Despues de trim: "${limpio}" (length: ${limpio.length})`);

// Muy util para limpiar datos de formularios:
const emailUsuario = "   correo@ejemplo.com   ";
console.log(`Email sin trim: "${emailUsuario}"`);
console.log(`Email con trim: "${emailUsuario.trim()}"`);

// ------------------------------------------------------------
// 12. METODO trimStart()
// ------------------------------------------------------------

// Elimina los espacios solo al inicio del string.

const textoConEspacios = "   Hola Bolivia   ";
console.log("--- 12. trimStart() ---");
console.log(`Original: "${textoConEspacios}"`);
console.log(`trimStart: "${textoConEspacios.trimStart()}"`);
console.log(`trimStart length: ${textoConEspacios.trimStart().length}`);

// ------------------------------------------------------------
// 13. METODO trimEnd()
// ------------------------------------------------------------

// Elimina los espacios solo al final del string.

console.log("--- 13. trimEnd() ---");
console.log(`Original: "${textoConEspacios}"`);
console.log(`trimEnd: "${textoConEspacios.trimEnd()}"`);
console.log(`trimEnd length: ${textoConEspacios.trimEnd().length}`);

// Comparacion de los tres trim:
console.log(`Original length: ${textoConEspacios.length}`);
console.log(`trim length: ${textoConEspacios.trim().length}`);
console.log(`trimStart length: ${textoConEspacios.trimStart().length}`);
console.log(`trimEnd length: ${textoConEspacios.trimEnd().length}`);

// ------------------------------------------------------------
// 14. METODO includes()
// ------------------------------------------------------------

// Devuelve true si el string contiene la subcadena buscada, false si no.
// Es sensible a mayusculas.

const descripcion = "El saltena es una comida tipica de Bolivia";
console.log("--- 14. includes() ---");
console.log(`Contiene "saltena": ${descripcion.includes("saltena")}`);
console.log(`Contiene "taco": ${descripcion.includes("taco")}`);
console.log(`Contiene "Bolivia": ${descripcion.includes("Bolivia")}`);
console.log(`Contiene "bolivia": ${descripcion.includes("bolivia")}`);

// Se puede usar con toLowerCase para busquedas sin importar mayusculas:
const textoLower = descripcion.toLowerCase();
console.log(`Busqueda sin case: ${textoLower.includes("saltena")}`);

// ------------------------------------------------------------
// 15. METODO startsWith()
// ------------------------------------------------------------

// Devuelve true si el string empieza con la subcadena indicada.

const codigoProducto = "BOL-001-Quinua";
console.log("--- 15. startsWith() ---");
console.log(`Empieza con "BOL": ${codigoProducto.startsWith("BOL")}`);
console.log(`Empieza con "bol": ${codigoProducto.startsWith("bol")}`);
console.log(`Empieza con "BOL-001": ${codigoProducto.startsWith("BOL-001")}`);

const numeroTelefono = "+591 2 1234567";
console.log(`Telefono boliviano (+591): ${numeroTelefono.startsWith("+591")}`);

// ------------------------------------------------------------
// 16. METODO endsWith()
// ------------------------------------------------------------

// Devuelve true si el string termina con la subcadena indicada.

const archivo = "informe_final.pdf";
console.log("--- 16. endsWith() ---");
console.log(`Termina con ".pdf": ${archivo.endsWith(".pdf")}`);
console.log(`Termina con ".doc": ${archivo.endsWith(".doc")}`);
console.log(`Termina con "final.pdf": ${archivo.endsWith("final.pdf")}`);

const otroArchivo = "foto.jpg";
console.log(`Es imagen jpg: ${otroArchivo.endsWith(".jpg")}`);
console.log(`Es imagen png: ${otroArchivo.endsWith(".png")}`);

// ------------------------------------------------------------
// 17. METODO indexOf()
// ------------------------------------------------------------

// Devuelve la posicion de la primera aparicion de la subcadena.
// Si no la encuentra, devuelve -1.

const oracion2 = "La paz es una ciudad maravillosa de Bolivia";
console.log("--- 17. indexOf() ---");
console.log(`Posicion de "paz": ${oracion2.indexOf("paz")}`);
console.log(`Posicion de "ciudad": ${oracion2.indexOf("ciudad")}`);
console.log(`Posicion de "Mexico": ${oracion2.indexOf("Mexico")}`);

// Se puede usar indexOf para verificar si existe (si no es -1, existe):
const posicion = oracion2.indexOf("ciudad");
if (posicion !== -1) {
    console.log(`Se encontro "ciudad" en la posicion ${posicion}`);
} else {
    console.log("No se encontro la palabra");
}

// ------------------------------------------------------------
// 18. METODO slice()
// ------------------------------------------------------------

// Extrae una porcion del string desde el indice inicial hasta el final (sin incluirlo).
// Acepta indices negativos.

const palabraLarga = "Independencia";
console.log("--- 18. slice() ---");
console.log(`slice(0, 5): "${palabraLarga.slice(0, 5)}"`);
console.log(`slice(5): "${palabraLarga.slice(5)}"`);
console.log(`slice(-3): "${palabraLarga.slice(-3)}"`);
console.log(`slice(0, -4): "${palabraLarga.slice(0, -4)}"`);

// Ejemplo practico: obtener prefijo telefonico
const telefono = "+59171234567";
console.log(`Codigo de pais: ${telefono.slice(0, 4)}`);
console.log(`Numero sin codigo de pais: ${telefono.slice(4)}`);

// ------------------------------------------------------------
// 19. METODO substring()
// ------------------------------------------------------------

// Similar a slice(), pero no acepta indices negativos.
// Si el inicio es mayor que el fin, los intercambia.

const otraPalabra2 = "Cochabamba";
console.log("--- 19. substring() ---");
console.log(`substring(0, 4): "${otraPalabra2.substring(0, 4)}"`);
console.log(`substring(4): "${otraPalabra2.substring(4)}"`);
console.log(`substring(4, 0): "${otraPalabra2.substring(4, 0)}"`);

// Diferencia con slice en indices negativos:
console.log(`slice(-4): "${otraPalabra2.slice(-4)}"`);
console.log(`substring(-4): "${otraPalabra2.substring(-4)}"`);

// ------------------------------------------------------------
// 20. METODO replace()
// ------------------------------------------------------------

// Reemplaza la primera aparicion de una subcadena por otra.

const fraseOriginal = "Me gusta la saltena. La saltena es deliciosa.";
const fraseModificada = fraseOriginal.replace("saltena", "empanada");

console.log("--- 20. replace() ---");
console.log(`Original: "${fraseOriginal}"`);
console.log(`Con replace: "${fraseModificada}"`);

// NOTA: replace solo reemplaza la PRIMERA aparicion:
console.log(`"saltena" aparece 2 veces, pero replace solo cambio 1`);

// ------------------------------------------------------------
// 21. METODO replaceAll()
// ------------------------------------------------------------

// Reemplaza TODAS las apariciones de una subcadena.

const frase2 = "La saltena es rica. Yo como saltena. La saltena es de Bolivia.";
const todasReemplazadas = frase2.replaceAll("saltena", "empanada");

console.log("--- 21. replaceAll() ---");
console.log(`Original: "${frase2}"`);
console.log(`Con replaceAll: "${todasReemplazadas}"`);

// ------------------------------------------------------------
// 22. METODO split()
// ------------------------------------------------------------

// Divide un string en un array usando un separador.

const csvLine = "Juan,Perez,25,La Paz";
const datos = csvLine.split(",");

console.log("--- 22. split() ---");
console.log(`Original: "${csvLine}"`);
console.log(`Array: ${datos}`);
console.log(`Nombre: ${datos[0]}`);
console.log(`Apellido: ${datos[1]}`);
console.log(`Edad: ${datos[2]}`);
console.log(`Ciudad: ${datos[3]}`);

// Dividir una oracion en palabras:
const oracion3 = "Bolivia es un pais diverso y hermoso";
const palabras = oracion3.split(" ");
console.log(`Palabras: ${palabras}`);
console.log(`Cantidad de palabras: ${palabras.length}`);

// Dividir por caracteres:
const fecha = "2024-07-16";
const partesFecha = fecha.split("-");
console.log(`Fecha dividida: ${partesFecha}`);
console.log(`Anio: ${partesFecha[0]}, Mes: ${partesFecha[1]}, Dia: ${partesFecha[2]}`);

// ------------------------------------------------------------
// 23. METODO repeat()
// ------------------------------------------------------------

// Repite el string N veces.

console.log("--- 23. repeat() ---");
const separador = "-=".repeat(20);
console.log(separador);

const estrella = "*".repeat(5);
console.log(estrella);

const bullet = "  - ".repeat(3);
console.log(`Lista: ${bullet}`);

// ------------------------------------------------------------
// 24. METODO padStart()
// ------------------------------------------------------------

// Rellena el inicio del string hasta alcanzar la longitud deseada.

console.log("--- 24. padStart() ---");
const numero1 = "5";
console.log(`padStart(3, "0"): "${numero1.padStart(3, "0")}"`);

const numero2 = "42";
console.log(`padStart(5, "0"): "${numero2.padStart(5, "0")}"`);

// Crear codigos de estudiante:
const codigoEstudiante = "7";
const codigoFormateado = codigoEstudiante.padStart(3, "0");
console.log(`Codigo de estudiante: EST-${codigoFormateado}`);

// ------------------------------------------------------------
// 25. METODO padEnd()
// ------------------------------------------------------------

// Rellena el final del string hasta alcanzar la longitud deseada.

console.log("--- 25. padEnd() ---");
const producto2 = "Quinua";
console.log(`"${producto2.padEnd(15, ".")}"`);

const nombre2 = "Ana";
console.log(`Nombre: "${nombre2.padEnd(20, "-")}"`);

// Alinear texto:
const lista = ["Pan", "Leche", "Queso", "Saltena"];
console.log("--- Lista de productos ---");
for (const item of lista) {
    console.log(item.padEnd(10, ".") + " Bs. 5.00");
}

// ------------------------------------------------------------
// 26. CARACTERES DE ESCAPE
// ------------------------------------------------------------

// Los caracteres de escape permiten incluir caracteres especiales.

console.log("--- 26. Caracteres de escape ---");

// \n - Salto de linea
console.log("Linea 1\nLinea 2\nLinea 3");

// \t - Tabulacion
console.log("Nombre\tEdad\tCiudad");
console.log("Juan\t20\tLa Paz");
console.log("Ana\t22\tCochabamba");

// \\ - Backslash
console.log("Ruta del archivo: C:\\Users\\estudiante\\documentos");

// \" - Comilla doble dentro de string con comillas dobles
console.log("El dijo: \"Hola a todos\"");

// \' - Comilla simple dentro de string con comillas simples
console.log('El dijo: \'Hola a todos\'');

// ------------------------------------------------------------
// 27. INMUTABILIDAD DE LOS STRINGS
// ------------------------------------------------------------

// Los strings son INMUTABLES. Los metodos NO modifican el original,
// siempre devuelven un NUEVO string.

console.log("--- 27. Inmutabilidad ---");
const original = "Hola";
const enMayusculas = original.toUpperCase();

console.log(`Original: "${original}"`);
console.log(`En mayusculas: "${enMayusculas}"`);
console.log(`El original cambio? ${original === "Hola"}`);

// Esto NO modifica el string original:
const texto = "   Bolivia   ";
texto.trim();
console.log(`Despues de trim(): "${texto}" (no cambio!)`);

// Para guardar el cambio, hay que asignarlo a una variable:
const textoLimpio = texto.trim();
console.log(`Asignado a nueva variable: "${textoLimpio}"`);

// Tampoco se puede modificar un caracter individual:
const palabra3 = "Hola";
palabra3[0] = "X";
console.log(`Intento de modificar: "${palabra3}" (no cambio)`);

// ------------------------------------------------------------
// 28. SENSIBILIDAD A MAYUSCULAS
// ------------------------------------------------------------

// Las comparaciones de strings distinguen entre mayusculas y minusculas.

console.log("--- 28. Sensibilidad a mayusculas ---");
console.log(`"Hola" === "hola": ${"Hola" === "hola"}`);
console.log(`"BOLIVIA" === "bolivia": ${"BOLIVIA" === "bolivia"}`);
console.log(`"La Paz" === "La Paz": ${"La Paz" === "La Paz"}`);

// includes() tambien es sensible a mayusculas:
const texto2 = "Juan Perez";
console.log(`"texto2" incluye "juan": ${texto2.includes("juan")}`);
console.log(`"texto2" incluye "Juan": ${texto2.includes("Juan")}`);

// Truco: convertir ambos a minusculas antes de comparar:
const buscar = "juan";
const resultado = texto2.toLowerCase().includes(buscar.toLowerCase());
console.log(`Busqueda sin case sensitivity: ${resultado}`);

// ------------------------------------------------------------
// 29. NOTA SOBRE UNICODE Y EMOJIS
// ------------------------------------------------------------

// Los strings en JavaScript usan UTF-16. Algunos caracteres especiales
// (como emojis) ocupan mas de una "unidad" y length puede ser enganyoso.

console.log("--- 29. Unicode y emojis ---");
const emoji = "😀";
console.log(`Emoji: ${emoji}`);
console.log(`Length del emoji: ${emoji.length}`);

const textoConEmoji = "Hola😀Mundo";
console.log(`Texto con emoji: "${textoConEmoji}"`);
console.log(`Length: ${textoConEmoji.length}`);
console.log(`Nota: el emoji cuenta como 2 en length, no como 1`);

// Para la mayoria de los casos (texto en espanol, numeros, etc.)
// length y los indices funcionan correctamente.

// ============================================================
// EJEMPLOS PRACTICOS
// ============================================================

// ------------------------------------------------------------
// EJEMPLO PRACTICO 1: Convertir nombre a mayusculas
// ------------------------------------------------------------

console.log("--- EJEMPLO PRACTICO 1: Nombre en mayusculas ---");
const nombreEstudiante2 = "maria fernanda quISpe";
const nombreFormateado = nombreEstudiante2.toUpperCase();
console.log(`Nombre original: "${nombreEstudiante2}"`);
console.log(`Nombre en mayusculas: "${nombreFormateado}"`);

// ------------------------------------------------------------
// EJEMPLO PRACTICO 2: Limpiar entrada de usuario
// ------------------------------------------------------------

console.log("--- EJEMPLO PRACTICO 2: Limpiar entrada ---");
const entradaSucia = "   juan.perez@email.com   ";
const entradaLimpia = entradaSucia.trim();
console.log(`Entrada original: "${entradaSucia}"`);
console.log(`Entrada limpia: "${entradaLimpia}"`);

// ------------------------------------------------------------
// EJEMPLO PRACTICO 3: Construir nombre completo
// ------------------------------------------------------------

console.log("--- EJEMPLO PRACTICO 3: Nombre completo ---");
const primerNombre2 = "Carlos";
const primerApellido = "Mendoza";
const segundoApellido = "Torrez";
const nombreCompleto2 = `${primerNombre2} ${primerApellido} ${segundoApellido}`;
console.log(`Nombre completo: "${nombreCompleto2}"`);
console.log(`Longitud del nombre completo: ${nombreCompleto2.length} caracteres`);

// ------------------------------------------------------------
// EJEMPLO PRACTICO 4: Obtener iniciales de un nombre
// ------------------------------------------------------------

console.log("--- EJEMPLO PRACTICO 4: Iniciales ---");
const nombreCompleto3 = "Ana Maria Lopez Vargas";
const palabrasNombre = nombreCompleto3.split(" ");
let iniciales = "";
for (const palabra of palabrasNombre) {
    iniciales = iniciales + palabra[0];
}
console.log(`Nombre: "${nombreCompleto3}"`);
console.log(`Iniciales: ${iniciales.toUpperCase()}`);

// ------------------------------------------------------------
// EJEMPLO PRACTICO 5: Verificar si un email contiene @
// ------------------------------------------------------------

console.log("--- EJEMPLO PRACTICO 5: Verificar email ---");
const email1 = "estudiante@umsa.edu.bo";
const email2 = "correo_invalido.com";
console.log(`"${email1}" es email valido: ${email1.includes("@")}`);
console.log(`"${email2}" es email valido: ${email2.includes("@")}`);

// ------------------------------------------------------------
// EJEMPLO PRACTICO 6: Dividir oracion en palabras
// ------------------------------------------------------------

console.log("--- EJEMPLO PRACTICO 6: Dividir oracion ---");
const oracionBoliviana = "Bolivia tiene nueve departamentos y diversas culturas";
const palabrasBolivianas = oracionBoliviana.split(" ");
console.log(`Oracion: "${oracionBoliviana}"`);
console.log(`Palabras: ${palabrasBolivianas}`);
console.log(`Total de palabras: ${palabrasBolivianas.length}`);

// ------------------------------------------------------------
// EJEMPLO PRACTICO 7: Crear codigo de estudiante con padding
// ------------------------------------------------------------

console.log("--- EJEMPLO PRACTICO 7: Codigo de estudiante ---");
const numeroEstudiante = 5;
const numeroComoString = String(numeroEstudiante);
const codigoEstudiante2 = "EST-" + numeroComoString.padStart(3, "0");
console.log(`Estudiante #${numeroEstudiante}: ${codigoEstudiante2}`);

const numeroEstudiante2 = 42;
const codigoEstudiante3 = "EST-" + String(numeroEstudiante2).padStart(3, "0");
console.log(`Estudiante #${numeroEstudiante2}: ${codigoEstudiante3}`);

const numeroEstudiante3 = 1234;
const codigoEstudiante4 = "EST-" + String(numeroEstudiante3).padStart(3, "0");
console.log(`Estudiante #${numeroEstudiante3}: ${codigoEstudiante4}`);

// ------------------------------------------------------------
// EJEMPLO PRACTICO 8: Buscar palabras en un texto
// ------------------------------------------------------------

console.log("--- EJEMPLO PRACTICO 8: Buscar palabras ---");
const textoNoticia = "La seleccion boliviana de futbol clasifico al mundial 2026";
const palabraBuscar = "boliviana";
const posicionEncontrada = textoNoticia.indexOf(palabraBuscar);

if (posicionEncontrada !== -1) {
    console.log(`Se encontro "${palabraBuscar}" en la posicion ${posicionEncontrada}`);
    console.log(`Palabra siguiente: "${textoNoticia.slice(posicionEncontrada, posicionEncontrada + 15)}"`);
} else {
    console.log(`No se encontro "${palabraBuscar}"`);
}

// ------------------------------------------------------------
// EJEMPLO PRACTICO 9: Reemplazar palabras en un texto
// ------------------------------------------------------------

console.log("--- EJEMPLO PRACTICO 9: Reemplazar palabras ---");
const textoOriginal = "El mercado de la Cancha es el mas grande de Bolivia";
const textoActualizado = textoOriginal.replace("Cancha", "16 de Julio");
console.log(`Original: "${textoOriginal}"`);
console.log(`Actualizado: "${textoActualizado}"`);

const textoConRepetidos = "pan, leche, pan, queso, pan";
const textoSinRepetidos = textoConRepetidos.replaceAll("pan", "galletas");
console.log(`Con repetidos: "${textoConRepetidos}"`);
console.log(`Sin repetidos: "${textoSinRepetidos}"`);

// ------------------------------------------------------------
// EJEMPLO PRACTICO 10: Formatear precio con decimales fijos
// ------------------------------------------------------------

console.log("--- EJEMPLO PRACTICO 10: Formatear precio ---");
const precio = 25;
const precioFormateado = "Bs. " + precio.toFixed(2);
console.log(`Precio sin formato: ${precio}`);
console.log(`Precio formateado: ${precioFormateado}`);

const precio2 = 9.5;
const precioFormateado2 = "Bs. " + precio2.toFixed(2);
console.log(`Precio sin formato: ${precio2}`);
console.log(`Precio formateado: ${precioFormateado2}`);

// Usando padStart para alinear precios:
const productos = [
    { nombre: "Quinua", precio: 25 },
    { nombre: "Cafe", precio: 15.5 },
    { nombre: "Chocolate", precio: 8 },
    { nombre: "Saltena", precio: 5 }
];

console.log("--- Lista de productos ---");
for (const prod of productos) {
    const nombreFormateado = prod.nombre.padEnd(12, " ");
    const precioProducto = "Bs. " + prod.precio.toFixed(2);
    console.log(nombreFormateado + precioProducto);
}

// ============================================================
// FIN DE LA LECCION 35
// ============================================================
