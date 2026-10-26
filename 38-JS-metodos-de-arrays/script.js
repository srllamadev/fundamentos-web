// ============================================================
// LECCION 38 - METODOS DE ARRAYS
// ============================================================

// ------------------------------------------------------------
// 1. REPASO DE ARRAYS (LECCION 37)
// ------------------------------------------------------------

// En la leccion anterior aprendimos que un array es una lista ordenada de valores.
// Recordemos brevemente como se crean y acceden:

const frutas = ["manzana", "platano", "naranja", "uva", "pera"];
const numeros = [10, 20, 30, 40, 50];
const mixto = ["texto", 42, true, null, undefined];

console.log("--- 1. Repaso de Arrays ---");
console.log("Array de frutas:", frutas);
console.log("Primer elemento:", frutas[0]);
console.log("Ultimo elemento:", frutas[frutas.length - 1]);
console.log("Longitud del array:", numeros.length);

// Propiedad length
console.log("Cuantas frutas hay?", frutas.length);

// Modificar un elemento por indice
frutas[1] = "mandarina";
console.log("Despues de cambiar platano:", frutas);

// Pero hoy vamos a algo mucho mas poderoso: los METODOS de arrays.
// Los metodos son funciones que vienen "de fabrica" en los arrays.


// ------------------------------------------------------------
// 2. QUE ES UN METODO?
// ------------------------------------------------------------

console.log("\n--- 2. Que es un Metodo? ---");

// Un metodo es una funcion que esta "pegada" a un objeto.
// En este caso, los arrays tienen metodos propios que nos permiten
// hacer operaciones comunes sin necesidad de escribir bucles manuales.

// Sintaxis basica:
// array.metodo()
// array.metodo(argumento)
// array.metodo(funcionCallback)

// Ejemplo simple:
const colores = ["rojo", "verde", "azul"];

// push() agrega un elemento al final (metodo que modifica el array)
colores.push("amarillo");
console.log("Despues de push:", colores);

// pop() elimina el ultimo elemento
const eliminado = colores.pop();
console.log("Elemento eliminado con pop():", eliminado);
console.log("Array despues de pop():", colores);

// includes() verifica si un elemento existe
console.log("Existe 'rojo'?", colores.includes("rojo"));
console.log("Existe 'morado'?", colores.includes("morado"));

// indexOf() devuelve la posicion de un elemento
console.log("Posicion de 'azul':", colores.indexOf("azul"));

// Estos son metodos basicos. Ahora veremos los mas poderosos que
// usan callbacks (funciones como argumentos).


// ------------------------------------------------------------
// 3. INTRODUCCION A CALLBACKS
// ------------------------------------------------------------

console.log("\n--- 3. Introduccion a Callbacks ---");

// Un callback es simplemente una FUNCION que se pasa como argumento
// a otra funcion. No tiene nada de magico, es solo eso.

// Ejemplo basico SIN arrays primero:
function saludar(nombre) {
    console.log("Hola, " + nombre + "!");
}

function procesarSaludo(funcionCallback, nombre) {
    console.log("Voy a ejecutar el callback...");
    funcionCallback(nombre);
}

// Le pasamos la funcion saludar como argumento:
procesarSaludo(saludar, "Ana");
procesarSaludo(saludar, "Carlos");

// Ahora con arrow functions (mas comun y compacto):
const despedir = (nombre) => console.log("Adios, " + nombre + "!");

procesarSaludo(despedir, "Maria");

// O directamente inline con arrow function:
procesarSaludo((nombre) => console.log("Bienvenido, " + nombre + "!"), "Luis");

// ¿Por que importa esto? Porque los metodos modernos de arrays
// (map, filter, find, etc.) reciben callbacks como argumento.

// Ejemplo con un array simple:
const numerosParaCallback = [1, 2, 3, 4, 5];

// Definimos una funcion que duplica un numero
const duplicar = (num) => num * 2;

// Esta funcion se usara como callback en metodos que veremos pronto:
console.log("duplicar(5) =", duplicar(5));
console.log("duplicar(10) =", duplicar(10));

// La clave es entender que cuando veamos:
//   array.map((num) => num * 2)
// Estamos pasando una funcion (callback) que se ejecutara
// una vez por cada elemento del array.


// ------------------------------------------------------------
// 4. forEach() - Iterar sobre un array
// ------------------------------------------------------------

console.log("\n--- 4. forEach() ---");

// forEach() ejecuta una funcion por cada elemento del array.
// Es la forma mas basica de "recorrer" un array con metodos.
// IMPORTANTE: forEach() retorna undefined (no crea nada nuevo).

const ciudades = ["La Paz", "Santa Cruz", "Cochabamba", "Sucre", "Tarija"];

console.log("Recorriendo ciudades con forEach():");
ciudades.forEach((ciudad) => {
    console.log("- " + ciudad);
});

// Equivalente con function tradicional (menos usado hoy en dia):
ciudades.forEach(function (ciudad) {
    console.log("  (con function) " + ciudad);
});

// forEach recibe hasta 3 argumentos: elemento, indice, array completo
console.log("\nforEach con indice:");
ciudades.forEach((ciudad, indice) => {
    console.log("Posicion " + indice + ": " + ciudad);
});

// Ejemplo practico: suma de calificaciones
const notas = [85, 45, 92, 67, 38, 74];
let sumaNotas = 0;

notas.forEach((nota) => {
    sumaNotas = sumaNotas + nota;
});

console.log("\nSuma de notas calculada con forEach:", sumaNotas);
console.log("Promedio:", sumaNotas / notas.length);

// ¿Que retorna forEach?
const resultado = ciudades.forEach((c) => c);
console.log("Valor de retorno de forEach():", resultado); // undefined

// Cuando usar forEach:
// - Solo para EJECUTAR algo por cada elemento (efectos secundarios)
// - NO para crear un nuevo array (para eso usa map)


// ------------------------------------------------------------
// 5. map() - Transformar cada elemento
// ------------------------------------------------------------

console.log("\n--- 5. map() ---");

// map() crea un NUEVO array aplicando una funcion a cada elemento.
// El array original NO se modifica.
// Retorna un array del MISMO tamanio que el original.

const numerosMap = [1, 2, 3, 4, 5];

// Duplicar cada numero
const duplicados = numerosMap.map((num) => num * 2);
console.log("Original:", numerosMap);
console.log("Duplicados:", duplicados);

// Elevar al cuadrado
const cuadrados = numerosMap.map((num) => num ** 2);
console.log("Cuadrados:", cuadrados);

// Convertir a strings
const comoTexto = numerosMap.map((num) => "Numero: " + num);
console.log("Como texto:", comoTexto);

// Ejemplo con objetos - Estudiantes de La Paz
const estudiantes = [
    { nombre: "Ana", nota: 85 },
    { nombre: "Carlos", nota: 45 },
    { nombre: "Maria", nota: 92 },
    { nombre: "Jose", nota: 67 },
    { nombre: "Lucia", nota: 38 },
    { nombre: "Pedro", nota: 74 },
];

// Obtener solo los nombres (extraer una propiedad)
const nombres = estudiantes.map((est) => est.nombre);
console.log("\nSolo nombres:", nombres);

// Obtener solo las notas
const todasLasNotas = estudiantes.map((est) => est.nota);
console.log("Solo notas:", todasLasNotas);

// Transformar cada estudiante agregando un nuevo campo
const estudiantesConEstado = estudiantes.map((est) => {
    return {
        nombre: est.nombre,
        nota: est.nota,
        aprobado: est.nota >= 51,
    };
});

console.log("\nEstudiantes con estado:");
estudiantesConEstado.forEach((est) => {
    console.log("  " + est.nombre + " - Nota: " + est.nota + " - " + (est.aprobado ? "Aprobado" : "Reprobado"));
});

// Ejemplo con productos - Aplicar descuento
const productos = [
    { id: 1, nombre: "Cuaderno", precio: 25, stock: 10 },
    { id: 2, nombre: "Lapiz", precio: 3, stock: 50 },
    { id: 3, nombre: "Borrador", precio: 2, stock: 30 },
    { id: 4, nombre: "Regla", precio: 5, stock: 20 },
    { id: 5, nombre: "Mochila", precio: 150, stock: 8 },
    { id: 6, nombre: "Calculadora", precio: 80, stock: 15 },
];

// Aplicar 20% de descuento a todos los precios
const preciosConDescuento = productos.map((prod) => {
    return {
        id: prod.id,
        nombre: prod.nombre,
        precioOriginal: prod.precio,
        precioConDescuento: prod.precio * 0.8,
    };
});

console.log("\nPrecios con 20% de descuento (Bs.):");
preciosConDescuento.forEach((p) => {
    console.log("  " + p.nombre + ": Bs. " + p.precioOriginal + " -> Bs. " + p.precioConDescuento.toFixed(2));
});

// Transformar nombres a mayusculas
const nombresEnMayusculas = estudiantes.map((est) => est.nombre.toUpperCase());
console.log("\nNombres en mayusculas:", nombresEnMayusculas);

// IMPORTANTE: map() NO modifica el array original
console.log("\nArray original de estudiantes (sin cambios):");
console.log(estudiantes);


// ------------------------------------------------------------
// 6. filter() - Seleccionar elementos que cumplen una condicion
// ------------------------------------------------------------

console.log("\n--- 6. filter() ---");

// filter() crea un NUEVO array con los elementos que CUMPLEN la condicion.
// El array original NO se modifica.
// La funcion callback debe retornar true o false.

const numerosFilter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filtrar numeros pares
const pares = numerosFilter.filter((num) => num % 2 === 0);
console.log("Numeros pares:", pares);

// Filtrar numeros mayores a 5
const mayoresA5 = numerosFilter.filter((num) => num > 5);
console.log("Mayores a 5:", mayoresA5);

// Ejemplo con estudiantes - Filtrar aprobados (nota >= 51)
const aprobados = estudiantes.filter((est) => est.nota >= 51);
console.log("\nEstudiantes aprobados (nota >= 51):");
aprobados.forEach((est) => {
    console.log("  " + est.nombre + " con nota: " + est.nota);
});

// Filtrar reprobados
const reprobados = estudiantes.filter((est) => est.nota < 51);
console.log("\nEstudiantes reprobados (nota < 51):");
reprobados.forEach((est) => {
    console.log("  " + est.nombre + " con nota: " + est.nota);
});

// Filtrar productos con precio mayor a 20 Bs.
const productosCaros = productos.filter((prod) => prod.precio > 20);
console.log("\nProductos con precio mayor a Bs. 20:");
productosCaros.forEach((p) => {
    console.log("  " + p.nombre + ": Bs. " + p.precio);
});

// Filtrar productos con poco stock (menos de 15)
const pocoStock = productos.filter((prod) => prod.stock < 15);
console.log("\nProductos con stock menor a 15:");
pocoStock.forEach((p) => {
    console.log("  " + p.nombre + " - Stock: " + p.stock + " unidades");
});

// Filter NUNCA cambia el tamanio de los elementos, solo filtra.
// Si ningun elemento cumple, retorna un array vacio.
const notasPerfectas = estudiantes.filter((est) => est.nota === 100);
console.log("\nEstudiantes con nota perfecta:", notasPerfectas); // []


// ------------------------------------------------------------
// 7. find() - Encontrar el primer elemento que cumple una condicion
// ------------------------------------------------------------

console.log("\n--- 7. find() ---");

// find() retorna el PRIMER elemento que cumple la condicion.
// Si ningun elemento cumple, retorna undefined.
// A diferencia de filter(), solo retorna UN elemento, no un array.

const numerosFind = [10, 25, 30, 45, 50];

// Encontrar el primer numero mayor a 20
const primeroMayorA20 = numerosFind.find((num) => num > 20);
console.log("Primer numero mayor a 20:", primeroMayorA20);

// Encontrar un estudiante por nombre
const estudianteBuscado = estudiantes.find((est) => est.nombre === "Maria");
console.log("\nEstudiante buscado (Maria):", estudianteBuscado);

// Buscar un producto por id
const productoBuscado = productos.find((prod) => prod.id === 3);
console.log("Producto con id 3:", productoBuscado);

// Buscar producto por nombre (busqueda parcial con includes)
const productoConCuaderno = productos.find((prod) => prod.nombre.includes("Cuad"));
console.log("\nProducto que contiene 'Cuad':", productoConCuaderno);

// Si no se encuentra nada, retorna undefined
const noExiste = estudiantes.find((est) => est.nombre === "Roberto");
console.log("\nBuscar a Roberto (no existe):", noExiste);

// Util para verificar con condicional
const busqueda = estudiantes.find((est) => est.nota > 90);
if (busqueda !== undefined) {
    console.log("\nEstudiante con nota mayor a 90:", busqueda.nombre);
} else {
    console.log("\nNo hay estudiantes con nota mayor a 90");
}


// ------------------------------------------------------------
// 8. findIndex() - Encontrar el indice del primer elemento que cumple
// ------------------------------------------------------------

console.log("\n--- 8. findIndex() ---");

// findIndex() retorna el INDICE del primer elemento que cumple la condicion.
// Si ningun elemento cumple, retorna -1.

const numerosFindIndex = [10, 25, 30, 45, 50];

// Encontrar el indice del primer numero mayor a 20
const indiceMayorA20 = numerosFindIndex.findIndex((num) => num > 20);
console.log("Indice del primer numero > 20:", indiceMayorA20);

// Encontrar el indice de un estudiante
const indiceMaria = estudiantes.findIndex((est) => est.nombre === "Maria");
console.log("Indice de Maria:", indiceMaria);

// Encontrar el indice de un producto
const indiceProducto = productos.findIndex((prod) => prod.precio > 100);
console.log("Indice del primer producto con precio > 100:", indiceProducto);

// Si no se encuentra, retorna -1
const indiceNoExiste = estudiantes.findIndex((est) => est.nombre === "Roberto");
console.log("Indice de Roberto (no existe):", indiceNoExiste);

// Util para eliminar un elemento por indice (con splice)
const indiceCarlos = estudiantes.findIndex((est) => est.nombre === "Carlos");
if (indiceCarlos !== -1) {
    console.log("\nCarlos esta en la posicion:", indiceCarlos);
}


// ------------------------------------------------------------
// 9. some() - Verificar si ALGUN elemento cumple la condicion
// ------------------------------------------------------------

console.log("\n--- 9. some() ---");

// some() retorna true si AL MENOS UN elemento cumple la condicion.
// Retorna false si NINGUN elemento cumple.
// Retorna un booleano (true/false).

const numerosSome = [1, 3, 5, 7, 8, 9];

// ¿Existe algun numero par?
const hayPar = numerosSome.some((num) => num % 2 === 0);
console.log("¿Hay algun numero par?", hayPar);

// ¿Existe algun numero mayor a 100?
const hayMayorA100 = numerosSome.some((num) => num > 100);
console.log("¿Hay algun numero mayor a 100?", hayMayorA100);

// Ejemplo con estudiantes - ¿Hay algun estudiante reprobado?
const hayReprobado = estudiantes.some((est) => est.nota < 51);
console.log("\n¿Hay algun estudiante reprobado?", hayReprobado);

// ¿Hay algun estudiante con nota perfecta (100)?
const hayNotaPerfecta = estudiantes.some((est) => est.nota === 100);
console.log("¿Hay alguna nota perfecta?", hayNotaPerfecta);

// ¿Hay algun producto con precio mayor a 100 Bs.?
const hayProductoCaro = productos.some((prod) => prod.precio > 100);
console.log("¿Hay algun producto con precio > Bs. 100?", hayProductoCaro);


// ------------------------------------------------------------
// 10. every() - Verificar si TODOS los elementos cumplen la condicion
// ------------------------------------------------------------

console.log("\n--- 10. every() ---");

// every() retorna true si TODOS los elementos cumplen la condicion.
// Retorna false si AL MENOS UNO no cumple.
// Es lo opuesto de some() en cierto sentido.

const numerosEvery = [2, 4, 6, 8, 10];

// ¿Todos son pares?
const todosPares = numerosEvery.every((num) => num % 2 === 0);
console.log("¿Todos son pares?", todosPares);

// ¿Todos son mayores a 5?
const todosMayoresA5 = numerosEvery.every((num) => num > 5);
console.log("¿Todos son mayores a 5?", todosMayoresA5);

// Ejemplo con estudiantes - ¿Todos aprobaron?
const todosAprobaron = estudiantes.every((est) => est.nota >= 51);
console.log("\n¿Todos los estudiantes aprobaron?", todosAprobaron);

// ¿Todos tienen nota mayor a 30?
const todosMayoresA30 = estudiantes.every((est) => est.nota > 30);
console.log("¿Todos tienen nota mayor a 30?", todosMayoresA30);

// ¿Todos los productos tienen stock mayor a 0?
const todosConStock = productos.every((prod) => prod.stock > 0);
console.log("¿Todos los productos tienen stock?", todosConStock);

// Comparacion some vs every:
console.log("\n--- Comparacion some() vs every() ---");
console.log("¿Algun estudiante tiene nota < 51? (some):", estudiantes.some((e) => e.nota < 51));
console.log("¿Todos los estudiantes tienen nota >= 51? (every):", estudiantes.every((e) => e.nota >= 51));


// ------------------------------------------------------------
// 11. reduce() - Reducir el array a un solo valor
// ------------------------------------------------------------

console.log("\n--- 11. reduce() ---");

// reduce() es el metodo mas poderoso y complejo.
// "Reduce" todo el array a UN SOLO VALOR (numero, string, objeto, etc.).
// Usa un ACUMULADOR que se va actualizando en cada iteracion.

// Sintaxis:
// array.reduce((acumulador, elementoActual) => { ... }, valorInicial)

// Ejemplo mas simple: sumar todos los numeros
const numerosReduce = [1, 2, 3, 4, 5];

const suma = numerosReduce.reduce((acumulador, numero) => {
    console.log("  Acum:", acumulador, "+ Num:", numero, "=", acumulador + numero);
    return acumulador + numero;
}, 0);

console.log("Suma total:", suma);

// ¿Como funciona paso a paso?
// Iteracion 1: acumulador = 0 (valor inicial), numero = 1 => retorna 0 + 1 = 1
// Iteracion 2: acumulador = 1, numero = 2 => retorna 1 + 2 = 3
// Iteracion 3: acumulador = 3, numero = 3 => retorna 3 + 3 = 6
// Iteracion 4: acumulador = 6, numero = 4 => retorna 6 + 4 = 10
// Iteracion 5: acumulador = 10, numero = 5 => retorna 10 + 5 = 15
// Resultado final: 15

// Version compacta:
const sumaCompacta = numerosReduce.reduce((acc, num) => acc + num, 0);
console.log("Suma (compacta):", sumaCompacta);

// IMPORTANTE: El valor inicial (0 en este caso) es MUY importante.
// Sin valor inicial, usa el primer elemento del array como acumulador.

// Ejemplo con estudiantes - Sumar todas las notas
const sumaNotasReduce = estudiantes.reduce((acc, est) => acc + est.nota, 0);
console.log("\nSuma de todas las notas:", sumaNotasReduce);
console.log("Promedio general:", (sumaNotasReduce / estudiantes.length).toFixed(2));

// Encontrar la nota mas alta con reduce
const notaMasAlta = estudiantes.reduce((max, est) => {
    return est.nota > max ? est.nota : max;
}, 0);
console.log("Nota mas alta:", notaMasAlta);

// Encontrar el estudiante con la nota mas alta
const mejorEstudiante = estudiantes.reduce((mejor, est) => {
    return est.nota > mejor.nota ? est : mejor;
}, estudiantes[0]);
console.log("Mejor estudiante:", mejorEstudiante.nombre, "con nota:", mejorEstudiante.nota);

// Contar cuantos estudiantes aprobaron
const cantidadAprobados = estudiantes.reduce((contador, est) => {
    return est.nota >= 51 ? contador + 1 : contador;
}, 0);
console.log("Cantidad de aprobados:", cantidadAprobados);

// Ejemplo con productos - Calcular valor total del inventario
const valorInventario = productos.reduce((total, prod) => {
    return total + (prod.precio * prod.stock);
}, 0);
console.log("\nValor total del inventario: Bs.", valorInventario);

// Agrupar datos con reduce (avanzado)
const productosPorRango = productos.reduce((grupos, prod) => {
    const rango = prod.precio > 50 ? "caro" : "economico";
    if (!grupos[rango]) {
        grupos[rango] = [];
    }
    grupos[rango].push(prod);
    return grupos;
}, {});

console.log("\nProductos agrupados por rango de precio:");
console.log("Economicos:", productosPorRango.economico.length);
console.log("Caros:", productosPorRango.caro.length);


// ------------------------------------------------------------
// 12. sort() - Ordenar el array
// ------------------------------------------------------------

console.log("\n--- 12. sort() ---");

// sort() ordena el array. IMPORTANTE: MODIFICA EL ARRAY ORIGINAL.
// Por defecto ordena como TEXTO (strings), no como numeros.

const letras = ["banana", "manzana", "pera", "naranja"];
const ordenadas = letras.sort();
console.log("Letras ordenadas:", ordenadas);

// ¡CUIDADO! Con numeros no funciona como esperas:
const numerosDesordenados = [10, 2, 30, 5, 100, 1];
console.log("\nNumeros antes de sort():", numerosDesordenados);

// Sort por defecto los trata como strings:
const numerosOrdenadosMal = [...numerosDesordenados].sort();
console.log("Sort por defecto (MAL para numeros):", numerosOrdenadosMal);
// Resultado: [1, 10, 100, 2, 30, 5] (orden alfabetico de strings)

// SOLUCION: Pasar funcion de comparacion numerica
// La funcion recibe (a, b) y debe retornar:
//   negativo si a va antes que b
//   positivo si a va despues que b
//   0 si son iguales

// Orden ascendente (menor a mayor)
const numerosOrdenados = [...numerosDesordenados].sort((a, b) => a - b);
console.log("Orden ascendente:", numerosOrdenados);

// Orden descendente (mayor a menor)
const numerosDescendentes = [...numerosDesordenados].sort((a, b) => b - a);
console.log("Orden descendente:", numerosDescendentes);

// Ejemplo con estudiantes - Ordenar por nota de mayor a menor
const estudiantesOrdenados = [...estudiantes].sort((a, b) => b.nota - a.nota);
console.log("\nEstudiantes ordenados por nota (mayor a menor):");
estudiantesOrdenados.forEach((est, i) => {
    console.log("  " + (i + 1) + ". " + est.nombre + " - " + est.nota);
});

// Ordenar de menor a mayor
const estudiantesAsc = [...estudiantes].sort((a, b) => a.nota - b.nota);
console.log("\nEstudiantes ordenados por nota (menor a mayor):");
estudiantesAsc.forEach((est, i) => {
    console.log("  " + (i + 1) + ". " + est.nombre + " - " + est.nota);
});

// Ordenar productos por precio
const productosOrdenados = [...productos].sort((a, b) => a.precio - b.precio);
console.log("\nProductos ordenados por precio:");
productosOrdenados.forEach((p) => {
    console.log("  " + p.nombre + ": Bs. " + p.precio);
});

// Ordenar alfabeticamente por nombre
const productosAlfabetico = [...productos].sort((a, b) => {
    if (a.nombre < b.nombre) return -1;
    if (a.nombre > b.nombre) return 1;
    return 0;
});
console.log("\nProductos ordenados alfabeticamente:");
productosAlfabetico.forEach((p) => console.log("  " + p.nombre));

// NOTA: Usamos [...array] para crear una copia antes de sort()
// porque sort() MODIFICA el array original.


// ------------------------------------------------------------
// 13. reverse() - Invertir el array
// ------------------------------------------------------------

console.log("\n--- 13. reverse() ---");

// reverse() invierte el orden del array.
// IMPORTANTE: MODIFICA EL ARRAY ORIGINAL.

const numerosReverse = [1, 2, 3, 4, 5];
console.log("Antes de reverse():", numerosReverse);

// Creamos copia para no modificar el original
const copiaNumeros = [...numerosReverse];
const invertidos = copiaNumeros.reverse();
console.log("Despues de reverse():", invertidos);
console.log("Array original (sin cambios):", numerosReverse);

// Ejemplo con estudiantes
const estudiantesInvertidos = [...estudiantes].reverse();
console.log("\nEstudiantes en orden inverso:");
estudiantesInvertidos.forEach((est) => console.log("  " + est.nombre));


// ------------------------------------------------------------
// 14. join() - Unir elementos en un string
// ------------------------------------------------------------

console.log("\n--- 14. join() ---");

// join() une todos los elementos del array en un string,
// separados por el string que le pases como argumento.

const palabras = ["JavaScript", "es", "genial"];

// Unir con espacios
const frase = palabras.join(" ");
console.log("Con espacios:", frase);

// Unir con guiones
const conGuiones = palabras.join("-");
console.log("Con guiones:", conGuiones);

// Unir con comas
const conComas = palabras.join(", ");
console.log("Con comas:", conComas);

// Unir sin separador
const junto = palabras.join("");
console.log("Sin separador:", junto);

// Ejemplo practico: generar una lista de nombres
const nombresUnidos = estudiantes.map((e) => e.nombre).join(", ");
console.log("\nLista de estudiantes:", nombresUnidos);


// ------------------------------------------------------------
// 15. concat() - Combinar arrays
// ------------------------------------------------------------

console.log("\n--- 15. concat() ---");

// concat() combina dos o mas arrays y retorna un NUEVO array.
// NO modifica los arrays originales.

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];

const combinado = array1.concat(array2);
console.log("array1 + array2:", combinado);

const combinadoTres = array1.concat(array2, array3);
console.log("Los tres arrays:", combinadoTres);

// Tambien puede combinar con valores sueltos
const conExtras = array1.concat(array2, 10, 20);
console.log("Con valores extra:", conExtras);

// Ejemplo: combinar listas de estudiantes de dos cursos
const cursoManana = [
    { nombre: "Ana", nota: 85 },
    { nombre: "Carlos", nota: 45 },
];

const cursoTarde = [
    { nombre: "Maria", nota: 92 },
    { nombre: "Jose", nota: 67 },
];

const todosLosEstudiantes = cursoManana.concat(cursoTarde);
console.log("\nTodos los estudiantes:");
todosLosEstudiantes.forEach((est) => console.log("  " + est.nombre));


// ------------------------------------------------------------
// 16. flat() - Aplanar arrays anidados
// ------------------------------------------------------------

console.log("\n--- 16. flat() ---");

// flat() crea un nuevo array con los elementos "aplanados".
// Elimina los sub-arrays anidados.

const arrayAnidado = [1, 2, [3, 4], [5, 6]];
console.log("Array anidado:", arrayAnidado);

const aplanado = arrayAnidado.flat();
console.log("Aplanado (1 nivel):", aplanado);

// Array con mas niveles de anidacion
const muyAnidado = [1, [2, [3, [4, 5]]]];
console.log("\nMuy anidado:", muyAnidado);

const aplanado1 = muyAnidado.flat();
console.log("flat() 1 nivel:", aplanado1);

const aplanado2 = muyAnidado.flat(2);
console.log("flat(2) 2 niveles:", aplanado2);

const aplanadoInfinito = muyAnidado.flat(Infinity);
console.log("flat(Infinity) todo:", aplanadoInfinito);

// Ejemplo practico: aplanar listas de calificaciones por curso
const notasPorCurso = [
    [85, 90, 78],
    [92, 88, 95],
    [67, 72, 80],
];

const todasLasNotasAplanadas = notasPorCurso.flat();
console.log("\nTodas las notas aplanadas:", todasLasNotasAplanadas);
console.log("Promedio general:", todasLasNotasAplanadas.reduce((acc, n) => acc + n, 0) / todasLasNotasAplanadas.length);


// ------------------------------------------------------------
// 17. flatMap() - Combinar map y flat
// ------------------------------------------------------------

console.log("\n--- 17. flatMap() ---");

// flatMap() es equivalente a hacer map() y luego flat(1).
// Primero aplica la funcion a cada elemento, luego aplana un nivel.

const frases = ["Hola mundo", "JavaScript es genial", "La Paz Bolivia"];

// Queremos separar cada palabra en un elemento separado
// Con map solo:
const palabrasConMap = frases.map((frase) => frase.split(" "));
console.log("Con map():", palabrasConMap); // Array de arrays

// Con flatMap:
const palabrasConFlatMap = frases.flatMap((frase) => frase.split(" "));
console.log("Con flatMap():", palabrasConFlatMap); // Array plano

// Otro ejemplo: obtener todos los tags de productos
const productosConTags = [
    { nombre: "Cuaderno", tags: ["escolar", "papel"] },
    { nombre: "Lapiz", tags: ["escolar", "escritura"] },
    { nombre: "Mochila", tags: ["escolar", "transporte"] },
];

const todosLosTags = productosConTags.flatMap((p) => p.tags);
console.log("\nTodos los tags:", todosLosTags);


// ------------------------------------------------------------
// 18. METODOS QUE MODIFICAN VS METODOS QUE NO MODIFICAN
// ------------------------------------------------------------

console.log("\n--- 18. Metodos que modifican vs que no modifican ---");

// IMPORTANTE: Esta es una de las distinciones mas importantes.

// Metodos que MODIFICAN el array original (mutables):
// - sort()
// - reverse()
// - push()
// - pop()
// - shift()
// - unshift()
// - splice()
// - fill()

// Metodos que NO modifican el array original (retornan nuevo array):
// - map()
// - filter()
// - concat()
// - flat()
// - flatMap()
// - slice()

// Metodos que retornan un valor especifico (no un array):
// - find() retorna elemento o undefined
// - findIndex() retorna indice o -1
// - some() retorna boolean
// - every() retorna boolean
// - reduce() retorna el acumulador final
// - forEach() retorna undefined
// - join() retorna string
// - includes() retorna boolean

// Demostracion:
console.log("\nDemostracion de mutabilidad:");

const original = [3, 1, 4, 1, 5];

// sort MODIFICA el original:
const copiaParaSort = [...original];
copiaParaSort.sort((a, b) => a - b);
console.log("Original:", original);
console.log("Despues de sort (en la copia):", copiaParaSort);

// map NO modifica el original:
const duplicado = original.map((n) => n * 2);
console.log("Original despues de map():", original);
console.log("Resultado de map():", duplicado);

// Por eso es buena practica hacer copia antes de sort/reverse:
const arrayOriginal = [5, 2, 8, 1, 9];
const arrayOrdenado = [...arrayOriginal].sort((a, b) => a - b);
console.log("\nOriginal preservado:", arrayOriginal);
console.log("Nuevo array ordenado:", arrayOrdenado);


// ------------------------------------------------------------
// 19. METODOS MODERNOS: toSorted() y toReversed()
// ------------------------------------------------------------

console.log("\n--- 19. Metodos modernos: toSorted() y toReversed() ---");

// Los metodos toSorted() y toReversed() son versiones modernas
// que NO modifican el array original (a diferencia de sort y reverse).
// Son mas nuevos (ECMAScript 2023), verifica compatibilidad si es necesario.

const numerosModernos = [5, 2, 8, 1, 9, 3];

// toSorted() - ordena sin modificar el original
const ordenadoModerno = numerosModernos.toSorted((a, b) => a - b);
console.log("Array original:", numerosModernos);
console.log("toSorted():", ordenadoModerno);

// toReversed() - invierte sin modificar el original
const invertidoModerno = numerosModernos.toReversed();
console.log("toReversed():", invertidoModerno);
console.log("Original sigue igual:", numerosModernos);

// Comparacion con los metodos clasicos:
// sort() y reverse() MODIFICAN el original
// toSorted() y toReversed() NO modifican el original (retornan nuevo array)

// Esto elimina la necesidad de hacer [...array].sort()
// Puedes usar directamente: array.toSorted()

// Ejemplo con estudiantes
const estudiantesOrdenadosModerno = estudiantes.toSorted((a, b) => b.nota - a.nota);
console.log("\nEstudiantes ordenados con toSorted():");
estudiantesOrdenadosModerno.forEach((est) => {
    console.log("  " + est.nombre + " - " + est.nota);
});


// ------------------------------------------------------------
// 20. COMPARACION: for vs forEach vs map vs filter
// ------------------------------------------------------------

console.log("\n--- 20. Comparacion: for vs forEach vs map vs filter ---");

// ¿Cuando usar cada uno?

const numerosComparacion = [1, 2, 3, 4, 5];

// for clasico: cuando necesitas control total (indices, break, continue)
console.log("\nfor clasico:");
for (let i = 0; i < numerosComparacion.length; i++) {
    if (numerosComparacion[i] === 3) continue; // saltar el 3
    console.log("  for:", numerosComparacion[i]);
}

// forEach: cuando solo quieres ejecutar algo por cada elemento (sin retorno)
console.log("\nforEach:");
numerosComparacion.forEach((num) => {
    console.log("  forEach:", num);
});

// map: cuando quieres TRANSFORMAR cada elemento y crear un nuevo array
console.log("\nmap:");
const transformados = numerosComparacion.map((num) => num * 10);
console.log("  map:", transformados);

// filter: cuando quieres SELECCIONAR elementos que cumplen una condicion
console.log("\nfilter:");
const filtrados = numerosComparacion.filter((num) => num > 2);
console.log("  filter:", filtrados);

// Resumen:
// for       -> maximo control, pero mas verboso
// forEach   -> solo ejecutar efectos (console.log, etc.), no crea nada
// map       -> crear NUEVO array transformando cada elemento
// filter    -> crear NUEVO array seleccionando algunos elementos

// MAL USO (no hagas esto):
// Usar forEach para crear un nuevo array:
// let resultado = [];
// numeros.forEach(n => resultado.push(n * 2)); // Usa map() en su lugar

// BIEN:
const resultadoCorrecto = numerosComparacion.map((n) => n * 2); // limpio y claro


// ------------------------------------------------------------
// 21. ENCADENAMIENTO DE METODOS
// ------------------------------------------------------------

console.log("\n--- 21. Encadenamiento de Metodos ---");

// Los metodos que retornan arrays (map, filter, etc.) se pueden encadenar.
// Esto permite crear "pipelines" de transformacion muy legibles.

// Ejemplo: de estudiantes, filtrar aprobados, obtener sus nombres, y ordenarlos
const nombresAprobadosOrdenados = estudiantes
    .filter((est) => est.nota >= 51)
    .map((est) => est.nombre)
    .toSorted();

console.log("Nombres de aprobados ordenados:");
nombresAprobadosOrdenados.forEach((nombre) => console.log("  " + nombre));

// Ejemplo: calcular promedio de estudiantes aprobados
const promedioAprobados = estudiantes
    .filter((est) => est.nota >= 51)
    .reduce((acc, est) => acc + est.nota, 0) / estudiantes.filter((e) => e.nota >= 51).length;

console.log("\nPromedio de estudiantes aprobados:", promedioAprobados.toFixed(2));

// Ejemplo mas complejo con productos:
// Filtrar productos con precio > 10, aplicar 15% descuento, ordenar por precio final
const productosOferta = productos
    .filter((prod) => prod.precio > 10)
    .map((prod) => ({
        nombre: prod.nombre,
        precioOriginal: prod.precio,
        precioFinal: prod.precio * 0.85,
    }))
    .toSorted((a, b) => a.precioFinal - b.precioFinal);

console.log("\nProductos con descuento (precio > Bs. 10), ordenados:");
productosOferta.forEach((p) => {
    console.log("  " + p.nombre + ": Bs. " + p.precioOriginal + " -> Bs. " + p.precioFinal.toFixed(2));
});

// Ejemplo: obtener el nombre del estudiante con la nota mas alta entre los aprobados
const mejorAprobado = estudiantes
    .filter((est) => est.nota >= 51)
    .reduce((mejor, est) => (est.nota > mejor.nota ? est : mejor), estudiantes[0]);

console.log("\nMejor estudiante aprobado:", mejorAprobado.nombre, "con", mejorAprobado.nota);

// Ejemplo con strings: procesar una lista de nombres
const nombresSinA = estudiantes
    .map((est) => est.nombre)
    .filter((nombre) => !nombre.includes("a"))
    .join(", ");

console.log("\nNombres que no contienen 'a':", nombresSinA);


// ------------------------------------------------------------
// 22. BUENAS PRACTICAS
// ------------------------------------------------------------

console.log("\n--- 22. Buenas Practicas ---");

// 1. Usa nombres descriptivos para los callbacks
// Mal:
const resultado1 = productos.filter((p) => p.precio > 50);
// Bien:
const productosCaros2 = productos.filter((producto) => producto.precio > 50);
console.log("Productos caros:", productosCaros2.length);

// 2. Si el callback es complejo, extraelo a una funcion nombrada
const esAprobado = (estudiante) => estudiante.nota >= 51;
const aprobados2 = estudiantes.filter(esAprobado);
console.log("Aprobados (funcion nombrada):", aprobados2.length);

// 3. Usa const por defecto, let solo si necesitas reasignar
// Usa const para valores que no cambian:
const nombres3 = estudiantes.map((e) => e.nombre);
console.log("Nombres:", nombres3);

// 4. Encadena metodos para operaciones complejas, pero no abuses
// Demasiados metodos encadenados pueden ser dificiles de leer
// Busca un balance entre legibilidad y concision

// 5. No modifiques el array original a menos que sea intencional
// Usa toSorted() o [...array].sort() en lugar de sort() directo
const original2 = [3, 1, 4, 1, 5];
const ordenado2 = [...original2].toSorted((a, b) => a - b);
console.log("\nOriginal:", original2);
console.log("Ordenado:", ordenado2);

// 6. Usa el metodo correcto para cada situacion:
// - Solo iterar? forEach
// - Crear nuevo array transformado? map
// - Seleccionar elementos? filter
// - Buscar uno? find o findIndex
// - Verificar si alguno/todos cumplen? some o every
// - Reducir a un valor? reduce

// 7. Aprovecha las arrow functions para callbacks cortos
// Con retorno implicito (una sola expresion):
const cuadrados2 = numeros.map((n) => n * n);
const pares2 = numeros.filter((n) => n % 2 === 0);

// 8. Documenta el proposito de transformaciones complejas
const resumenEstudiantes = estudiantes
    .filter((est) => est.nota >= 51)
    .map((est) => est.nombre.toUpperCase())
    .sort()
    .join(" | ");
console.log("\nResumen de aprobados:", resumenEstudiantes);


// ------------------------------------------------------------
// EJEMPLOS PRACTICOS INTEGRADORES
// ------------------------------------------------------------

console.log("\n--- Ejemplos Practicos Integradores ---");

// Sistema de notas de estudiantes de La Paz
console.log("\n1. Filtrar aprobados y ordenar:");
const aprobadosOrdenados = estudiantes
    .filter((e) => e.nota >= 51)
    .toSorted((a, b) => b.nota - a.nota);
aprobadosOrdenados.forEach((est, i) => {
    console.log("  " + (i + 1) + ". " + est.nombre + " - " + est.nota + " pts");
});

console.log("\n2. Calcular estadisticas:");
const todasLasNotas2 = estudiantes.map((e) => e.nota);
const sumaTotal = todasLasNotas2.reduce((acc, n) => acc + n, 0);
const promedioGeneral = sumaTotal / todasLasNotas2.length;
const notaMaxima = todasLasNotas2.reduce((max, n) => (n > max ? n : max), 0);
const notaMinima = todasLasNotas2.reduce((min, n) => (n < min ? n : min), 100);

console.log("  Suma total:", sumaTotal);
console.log("  Promedio:", promedioGeneral.toFixed(2));
console.log("  Nota maxima:", notaMaxima);
console.log("  Nota minima:", notaMinima);
console.log("  Cantidad aprobados:", estudiantes.filter((e) => e.nota >= 51).length);
console.log("  Cantidad reprobados:", estudiantes.filter((e) => e.nota < 51).length);

console.log("\n3. Reporte de productos:");
const reporteProductos = productos
    .toSorted((a, b) => b.precio * b.stock - a.precio * a.stock)
    .map((p) => ({
        nombre: p.nombre,
        valorInventario: p.precio * p.stock,
        categoria: p.precio > 50 ? "Premium" : "Estandar",
    }));

reporteProductos.forEach((p) => {
    console.log("  " + p.nombre + " (" + p.categoria + "): Bs. " + p.valorInventario);
});

console.log("\n4. Busqueda de productos:");
const buscarProducto = (nombre) => {
    return productos.find((p) => p.nombre.toLowerCase().includes(nombre.toLowerCase()));
};
console.log("  Buscar 'lapiz':", buscarProducto("lapiz"));
console.log("  Buscar 'mo':", buscarProducto("mo"));

console.log("\n5. Resumen de inventario:");
const totalProductos = productos.reduce((acc, p) => acc + p.stock, 0);
const valorTotal = productos.reduce((acc, p) => acc + p.precio * p.stock, 0);
const productoMasCaro = productos.reduce((max, p) => (p.precio > max.precio ? p : max), productos[0]);

console.log("  Total de unidades:", totalProductos);
console.log("  Valor del inventario: Bs.", valorTotal);
console.log("  Producto mas caro:", productoMasCaro.nombre, "(Bs.", productoMasCaro.precio + ")");
