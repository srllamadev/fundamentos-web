// ============================================================
// LECCION 37 - ARRAYS
// ============================================================

// ------------------------------------------------------------
// 1. QUE ES UN ARRAY?
// ------------------------------------------------------------

// Un array es una coleccion ordenada de valores.
// Permite almacenar multiples datos en una sola variable.
// Cada elemento tiene una posicion llamada indice.

const nombresEstudiantes = ["Ana", "Carlos", "Maria", "Luis", "Sofia"];
console.log("--- Que es un array? ---");
console.log("Array de estudiantes:", nombresEstudiantes);
console.log("Tipo de dato:", typeof nombresEstudiantes);

// ------------------------------------------------------------
// 2. PARA QUE SIRVEN LOS ARRAYS?
// ------------------------------------------------------------

// Los arrays se usan para manejar listas de datos:
// - Lista de estudiantes en un curso
// - Precios de productos en una tienda
// - Calificaciones de un estudiante
// - Nombres de ciudades en Bolivia

console.log("\n--- Para que sirven los arrays? ---");

const ciudadesBolivia = ["La Paz", "Santa Cruz", "Cochabamba", "Sucre", "Potosi", "Oruro", "Tarija", "Beni", "Pando"];
console.log("Ciudades de Bolivia:", ciudadesBolivia);

const productosTienda = ["Cuaderno", "Lapiz", "Borrador", "Regla", "Mochila"];
const preciosProductos = [15.50, 3.00, 2.50, 8.00, 120.00];
console.log("Productos:", productosTienda);
console.log("Precios en Bs.:", preciosProductos);

// ------------------------------------------------------------
// 3. DECLARACION CON [] - SINTAXIS
// ------------------------------------------------------------

// La sintaxis para crear un array usa corchetes []
// Los elementos se separan con comas

console.log("\n--- Declaracion de arrays ---");

const frutas = ["Manzana", "Pera", "Platano", "Mango"];
const numeros = [10, 20, 30, 40, 50];
const mezcla = ["Hola", 42, true, null];

console.log("Frutas:", frutas);
console.log("Numeros:", numeros);
console.log("Mezcla:", mezcla);

// ------------------------------------------------------------
// 4. ARRAYS VACIOS
// ------------------------------------------------------------

// Se puede crear un array vacio con []
// Es util cuando no conocemos los datos iniciales

console.log("\n--- Arrays vacios ---");

const listaVacia = [];
console.log("Array vacio:", listaVacia);
console.log("Longitud:", listaVacia.length);

// ------------------------------------------------------------
// 5. ARRAYS DE NUMEROS
// ------------------------------------------------------------

console.log("\n--- Arrays de numeros ---");

const calificaciones = [85, 90, 78, 45, 92, 67, 88];
console.log("Calificaciones del curso:", calificaciones);

const temperaturasLaPaz = [18, 20, 15, 22, 19, 17, 21];
console.log("Temperaturas en La Paz (°C):", temperaturasLaPaz);

const preciosEnBs = [5.50, 12.00, 3.75, 45.00, 8.25];
console.log("Precios en Bolivianos:", preciosEnBs);

// ------------------------------------------------------------
// 6. ARRAYS DE STRINGS
// ------------------------------------------------------------

console.log("\n--- Arrays de strings ---");

const materiasUMSA = ["Matematicas", "Fisica", "Quimica", "Programacion", "Historia"];
console.log("Materias UMSA:", materiasUMSA);

const diasSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
console.log("Dias de la semana:", diasSemana);

// ------------------------------------------------------------
// 7. ARRAYS CON TIPOS DE DATOS MIXTOS
// ------------------------------------------------------------

// JavaScript permite mezclar tipos en un mismo array
// Aunque no es buena practica, es posible

console.log("\n--- Arrays con tipos mixtos ---");

const datosMixtos = ["Ana", 20, true, null, undefined, 3.14];
console.log("Datos mixtos:", datosMixtos);
console.log("Tipo del primer elemento:", typeof datosMixtos[0]);
console.log("Tipo del segundo elemento:", typeof datosMixtos[1]);
console.log("Tipo del tercer elemento:", typeof datosMixtos[2]);

// ------------------------------------------------------------
// 8. INDICES EMPIEZAN EN CERO
// ------------------------------------------------------------

// Los indices en los arrays empiezan en 0, no en 1.
// Esto es fundamental entenderlo desde el inicio.

console.log("\n--- Indices empiezan en cero ---");

const estudiantes = ["Ana", "Carlos", "Maria", "Luis", "Sofia"];

// Diagrama visual de indices:
//
//  Elemento:   "Ana"   "Carlos"   "Maria"   "Luis"   "Sofia"
//  Indice:       0        1         2         3        4
//
//  El primer elemento esta en el indice 0
//  El ultimo elemento esta en el indice (length - 1)

console.log("Array:", estudiantes);
console.log("Indice 0 ->", estudiantes[0], "(primer elemento)");
console.log("Indice 1 ->", estudiantes[1]);
console.log("Indice 2 ->", estudiantes[2]);
console.log("Indice 3 ->", estudiantes[3]);
console.log("Indice 4 ->", estudiantes[4], "(ultimo elemento)");

// ------------------------------------------------------------
// 9. ACCEDER A ELEMENTOS POR INDICE
// ------------------------------------------------------------

// Se usa bracket notation: nombreArray[indice]

console.log("\n--- Acceder a elementos por indice ---");

const productos = ["Cuaderno", "Lapiz", "Borrador", "Regla", "Mochila"];

console.log("Primer producto:", productos[0]);
console.log("Segundo producto:", productos[1]);
console.log("Tercer producto:", productos[2]);
console.log("Cuarto producto:", productos[3]);
console.log("Quinto producto:", productos[4]);

// Si accedemos a un indice que no existe, obtenemos undefined
console.log("Indice 10 (no existe):", productos[10]);

// Ejemplo con contexto boliviano
const notasEstudiante = [85, 90, 78, 45, 92];
console.log("\nNotas del estudiante:");
console.log("Primera nota:", notasEstudiante[0], "Bs.");
console.log("Nota mas alta:", notasEstudiante[4]);

// ------------------------------------------------------------
// 10. MODIFICAR ELEMENTOS (LOS ARRAYS SON MUTABLES)
// ------------------------------------------------------------

// A diferencia de los strings, los arrays se pueden modificar
// directamente usando el indice

console.log("\n--- Modificar elementos ---");

const listaCompras = ["Pan", "Leche", "Queso", "Arroz"];
console.log("Lista original:", listaCompras);

// Modificar el segundo elemento
listaCompras[1] = "Yogurt";
console.log("Despues de cambiar indice 1:", listaCompras);

// Modificar el ultimo elemento
listaCompras[3] = "Fideos";
console.log("Despues de cambiar indice 3:", listaCompras);

// Ejemplo con calificaciones
const calificacionesParciales = [70, 80, 65, 90];
console.log("\nCalificaciones originales:", calificacionesParciales);
calificacionesParciales[0] = 75;
console.log("Calificaciones corregidas:", calificacionesParciales);

// ------------------------------------------------------------
// 11. PROPIEDAD LENGTH
// ------------------------------------------------------------

// length devuelve la cantidad de elementos del array

console.log("\n--- Propiedad length ---");

const paises = ["Bolivia", "Peru", "Chile", "Argentina", "Brasil"];
console.log("Paises:", paises);
console.log("Cantidad de paises:", paises.length);

const numerosPares = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
console.log("\nNumeros pares:", numerosPares);
console.log("Cantidad de numeros:", numerosPares.length);

// El ultimo elemento siempre esta en length - 1
console.log("Ultimo pais:", paises[paises.length - 1]);

// ------------------------------------------------------------
// 12. PUSH() - AGREGAR AL FINAL
// ------------------------------------------------------------

// push() agrega uno o mas elementos al final del array
// Modifica el array original y devuelve la nueva longitud

console.log("\n--- push() - Agregar al final ---");

const listaEstudiantes = ["Ana", "Carlos", "Maria"];
console.log("Lista original:", listaEstudiantes);

const nuevaLongitud = listaEstudiantes.push("Luis");
console.log("Despues de push('Luis'):", listaEstudiantes);
console.log("Nueva longitud:", nuevaLongitud);

listaEstudiantes.push("Sofia");
console.log("Despues de push('Sofia'):", listaEstudiantes);

// Agregar un producto a la lista
const carrito = ["Pan", "Leche"];
console.log("\nCarrito original:", carrito);
carrito.push("Queso");
console.log("Despues de agregar Queso:", carrito);
carrito.push("Arroz");
console.log("Despues de agregar Arroz:", carrito);

// ------------------------------------------------------------
// 13. POP() - ELIMINAR DEL FINAL
// ------------------------------------------------------------

// pop() elimina el ultimo elemento del array
// Modifica el array original y devuelve el elemento eliminado

console.log("\n--- pop() - Eliminar del final ---");

const listaOriginal = ["Ana", "Carlos", "Maria", "Luis"];
console.log("Lista original:", listaOriginal);

const eliminado = listaOriginal.pop();
console.log("Elemento eliminado:", eliminado);
console.log("Lista despues de pop():", listaOriginal);

listaOriginal.pop();
console.log("Despues de otro pop():", listaOriginal);

// ------------------------------------------------------------
// 14. UNSHIFT() - AGREGAR AL INICIO
// ------------------------------------------------------------

// unshift() agrega uno o mas elementos al inicio del array
// Modifica el array original

console.log("\n--- unshift() - Agregar al inicio ---");

const listaInicio = ["Carlos", "Maria"];
console.log("Lista original:", listaInicio);

listaInicio.unshift("Ana");
console.log("Despues de unshift('Ana'):", listaInicio);

listaInicio.unshift("Pedro");
console.log("Despues de unshift('Pedro'):", listaInicio);

// ------------------------------------------------------------
// 15. SHIFT() - ELIMINAR DEL INICIO
// ------------------------------------------------------------

// shift() elimina el primer elemento del array
// Modifica el array original y devuelve el elemento eliminado

console.log("\n--- shift() - Eliminar del inicio ---");

const listaTurno = ["Primero", "Segundo", "Tercero"];
console.log("Lista original:", listaTurno);

const primerEliminado = listaTurno.shift();
console.log("Elemento eliminado:", primerEliminado);
console.log("Lista despues de shift():", listaTurno);

// ------------------------------------------------------------
// 16. INCLUDES() - VERIFICAR SI UN ELEMENTO EXISTE
// ------------------------------------------------------------

// includes() devuelve true si el array contiene el elemento
// Devuelve false si no lo contiene

console.log("\n--- includes() - Verificar existencia ---");

const listaFrutas = ["Manzana", "Pera", "Platano", "Mango"];
console.log("Frutas:", listaFrutas);

console.log("Incluye 'Pera'?", listaFrutas.includes("Pera"));
console.log("Incluye 'Uva'?", listaFrutas.includes("Uva"));
console.log("Incluye 'Manzana'?", listaFrutas.includes("Manzana"));
console.log("Incluye 'Sandia'?", listaFrutas.includes("Sandia"));

// Ejemplo con ciudades de Bolivia
const ciudades = ["La Paz", "Santa Cruz", "Cochabamba", "Sucre"];
console.log("\nCiudades:", ciudades);
console.log("Esta La Paz?", ciudades.includes("La Paz"));
console.log("Esta Trinidad?", ciudades.includes("Trinidad"));

// ------------------------------------------------------------
// 17. INDEXOF() - ENCONTRAR POSICION DE UN ELEMENTO
// ------------------------------------------------------------

// indexOf() devuelve el indice del primer elemento encontrado
// Si no lo encuentra, devuelve -1

console.log("\n--- indexOf() - Encontrar posicion ---");

const colores = ["Rojo", "Verde", "Azul", "Amarillo", "Verde"];
console.log("Colores:", colores);

console.log("Posicion de 'Azul':", colores.indexOf("Azul"));
console.log("Posicion de 'Verde':", colores.indexOf("Verde"), "(primera aparicion)");
console.log("Posicion de 'Negro':", colores.indexOf("Negro"), "(no existe, devuelve -1)");

// Ejemplo practico: verificar si existe antes de actuar
const materias = ["Matematicas", "Fisica", "Quimica"];
const materiaBuscar = "Fisica";
const posicion = materias.indexOf(materiaBuscar);

if (posicion !== -1) {
    console.log("\nLa materia", materiaBuscar, "esta en la posicion", posicion);
} else {
    console.log("\nLa materia", materiaBuscar, "no esta en la lista");
}

// ------------------------------------------------------------
// 18. AT() - ACCEDER CON INDICES NEGATIVOS
// ------------------------------------------------------------

// at() permite acceder a elementos usando indices negativos
// Los indices negativos cuentan desde el final del array
// at(-1) es el ultimo elemento, at(-2) el penultimo, etc.

console.log("\n--- at() - Indices negativos ---");

const letras = ["A", "B", "C", "D", "E"];
console.log("Array:", letras);

console.log("at(0):", letras.at(0), "(primer elemento)");
console.log("at(-1):", letras.at(-1), "(ultimo elemento)");
console.log("at(-2):", letras.at(-2), "(penultimo elemento)");
console.log("at(-3):", letras.at(-3), "(antepenultimo elemento)");

// Ejemplo con notas
const notas = [85, 90, 78, 45, 92];
console.log("\nNotas:", notas);
console.log("Ultima nota:", notas.at(-1));
console.log("Penultima nota:", notas.at(-2));

// ------------------------------------------------------------
// 19. SLICE() - EXTRAER UNA PORCION (NO MODIFICA EL ORIGINAL)
// ------------------------------------------------------------

// slice(inicio, fin) extrae elementos desde inicio hasta fin (sin incluir fin)
// NO modifica el array original, devuelve un nuevo array

console.log("\n--- slice() - Extraer porcion ---");

const animales = ["Perro", "Gato", "Pajaro", "Pez", "Tortuga", "Conejo"];
console.log("Array original:", animales);

const subArray1 = animales.slice(1, 4);
console.log("slice(1, 4):", subArray1);
console.log("Array original despues de slice():", animales, "(no cambia)");

const subArray2 = animales.slice(0, 3);
console.log("slice(0, 3):", subArray2);

const subArray3 = animales.slice(2);
console.log("slice(2) - desde indice 2 hasta el final:", subArray3);

const subArray4 = animales.slice(-2);
console.log("slice(-2) - ultimos 2 elementos:", subArray4);

// ------------------------------------------------------------
// 20. SPLICE() - AGREGAR/ELIMINAR ELEMENTOS (MODIFICA EL ORIGINAL)
// ------------------------------------------------------------

// splice(indice, cantidadEliminar, elemento1, elemento2, ...)
// IMPORTANTE: splice SI modifica el array original
// Devuelve un array con los elementos eliminados

console.log("\n--- splice() - Agregar/Eliminar (modifica original) ---");

const listaSplice = ["Ana", "Carlos", "Maria", "Luis", "Sofia"];
console.log("Array original:", listaSplice);

// Eliminar 2 elementos desde el indice 1
const eliminadosSplice = listaSplice.splice(1, 2);
console.log("Elementos eliminados con splice(1, 2):", eliminadosSplice);
console.log("Array despues de splice:", listaSplice);

// Restaurar lista para el siguiente ejemplo
const listaSplice2 = ["Ana", "Carlos", "Maria", "Luis", "Sofia"];
console.log("\nArray nuevo:", listaSplice2);

// Agregar elementos sin eliminar (cantidadEliminar = 0)
listaSplice2.splice(2, 0, "Pedro", "Elena");
console.log("Despues de splice(2, 0, 'Pedro', 'Elena'):", listaSplice2);

// Reemplazar elementos
const listaSplice3 = ["Uno", "Dos", "Tres", "Cuatro"];
console.log("\nArray para reemplazar:", listaSplice3);
listaSplice3.splice(1, 2, "A", "B", "C");
console.log("Despues de splice(1, 2, 'A', 'B', 'C'):", listaSplice3);

// ------------------------------------------------------------
// 21. ITERAR CON FOR LOOP
// ------------------------------------------------------------

// Se puede recorrer un array usando un for tradicional
// Usando el indice para acceder a cada elemento

console.log("\n--- Iterar con for loop ---");

const estudiantesFor = ["Ana", "Carlos", "Maria", "Luis", "Sofia"];

console.log("Lista de estudiantes:");
for (let i = 0; i < estudiantesFor.length; i++) {
    console.log("  Estudiante", i + 1 + ":", estudiantesFor[i]);
}

// Ejemplo: calcular suma de calificaciones
const notasFor = [85, 90, 78, 45, 92];
console.log("\nCalificaciones:", notasFor);

let sumaNotas = 0;
for (let i = 0; i < notasFor.length; i++) {
    sumaNotas = sumaNotas + notasFor[i];
}
console.log("Suma total:", sumaNotas);
console.log("Promedio:", sumaNotas / notasFor.length);

// Ejemplo: recorrer productos con precios
const productosFor = ["Cuaderno", "Lapiz", "Borrador"];
const preciosFor = [15.50, 3.00, 2.50];

console.log("\nLista de productos:");
for (let i = 0; i < productosFor.length; i++) {
    console.log("  " + productosFor[i] + ": Bs. " + preciosFor[i]);
}

// ------------------------------------------------------------
// 22. ITERAR CON FOR...OF
// ------------------------------------------------------------

// for...of es una forma mas sencilla de recorrer arrays
// No necesitas usar indices, accedes directamente al valor

console.log("\n--- Iterar con for...of ---");

const ciudadesForOf = ["La Paz", "Santa Cruz", "Cochabamba", "Sucre", "Potosi"];

console.log("Ciudades de Bolivia:");
for (const ciudad of ciudadesForOf) {
    console.log("  -", ciudad);
}

// Ejemplo con nombres
const nombresForOf = ["Ana", "Carlos", "Maria"];

console.log("\nSaludos:");
for (const nombre of nombresForOf) {
    console.log("  Hola, " + nombre + "!");
}

// Ejemplo: sumar numeros con for...of
const numerosForOf = [10, 20, 30, 40, 50];
let total = 0;

console.log("\nNumeros:", numerosForOf);
for (const numero of numerosForOf) {
    total = total + numero;
}
console.log("Suma total:", total);

// ------------------------------------------------------------
// 23. ARRAYS ANIDADOS
// ------------------------------------------------------------

// Un array puede contener otros arrays dentro de el

console.log("\n--- Arrays anidados ---");

const listaAnidada = [
    "Texto",
    [1, 2, 3],
    ["A", "B"],
    true
];

console.log("Array anidado:", listaAnidada);
console.log("Elemento 0:", listaAnidada[0]);
console.log("Elemento 1 (es un array):", listaAnidada[1]);
console.log("Primer elemento del sub-array:", listaAnidada[1][0]);
console.log("Segundo elemento del sub-array:", listaAnidada[1][1]);

// Ejemplo: datos de estudiantes con calificaciones
const datosEstudiantes = [
    ["Ana", [85, 90, 92]],
    ["Carlos", [78, 82, 88]],
    ["Maria", [95, 88, 90]]
];

console.log("\nDatos de estudiantes:");
for (const dato of datosEstudiantes) {
    console.log("  Nombre:", dato[0]);
    console.log("  Calificaciones:", dato[1]);
}

// ------------------------------------------------------------
// 24. INTRODUCCION A MATRICES (ARRAYS 2D)
// ------------------------------------------------------------

// Una matriz es un array de arrays (tabla de datos)
// Se usa para representar tablas, grillas, etc.

console.log("\n--- Matrices (Arrays 2D) ---");

const matrizNotas = [
    [85, 90, 78],    // Estudiante 1
    [92, 88, 95],    // Estudiante 2
    [70, 75, 80]     // Estudiante 3
];

console.log("Matriz de calificaciones:");
console.log(matrizNotas);
console.log("Fila 0:", matrizNotas[0]);
console.log("Fila 1:", matrizNotas[1]);
console.log("Elemento [0][0]:", matrizNotas[0][0]);
console.log("Elemento [1][2]:", matrizNotas[1][2]);
console.log("Elemento [2][1]:", matrizNotas[2][1]);

// Ejemplo: tabla de multiplicar simplificada
console.log("\nTabla de multiplicar del 5:");
const tablaDel5 = [];
for (let i = 1; i <= 10; i++) {
    tablaDel5.push([i, i * 5]);
}

for (const fila of tablaDel5) {
    console.log("  " + fila[0] + " x 5 = " + fila[1]);
}

// Ejemplo: coordenadas en una grilla
const coordenadas = [
    [0, 0], [0, 1], [0, 2],
    [1, 0], [1, 1], [1, 2]
];
console.log("\nCoordenadas de la grilla:");
for (const coord of coordenadas) {
    console.log("  (" + coord[0] + ", " + coord[1] + ")");
}

// ------------------------------------------------------------
// 25. DIFERENCIA ENTRE MODIFICAR Y COPIAR ARRAYS
// ------------------------------------------------------------

// Los arrays son valores de referencia
// Al asignar un array a otra variable, se copia la referencia
// Para copiar realmente, hay que usar slice() o spread operator

console.log("\n--- Modificar vs Copiar arrays ---");

const arrayOriginal = [1, 2, 3, 4, 5];
console.log("Array original:", arrayOriginal);

// Esto NO crea una copia, solo copia la referencia
const arrayReferencia = arrayOriginal;
arrayReferencia[0] = 99;
console.log("Despues de modificar arrayReferencia[0] = 99:");
console.log("  arrayOriginal:", arrayOriginal, "(tambien cambio!)");
console.log("  arrayReferencia:", arrayReferencia);

// Para crear una copia real, usar slice()
const arrayOriginal2 = [10, 20, 30];
const arrayCopia = arrayOriginal2.slice();
console.log("\nArray original 2:", arrayOriginal2);

arrayCopia[0] = 999;
console.log("Despues de modificar arrayCopia[0] = 999:");
console.log("  arrayOriginal2:", arrayOriginal2, "(no cambio)");
console.log("  arrayCopia:", arrayCopia);

// ------------------------------------------------------------
// 26. COMPARACION POR REFERENCIA
// ------------------------------------------------------------

// Dos arrays con el mismo contenido NO son iguales con ===
// Porque son objetos diferentes en memoria

console.log("\n--- Comparacion por referencia ---");

const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
const arr3 = arr1;

console.log("arr1:", arr1);
console.log("arr2:", arr2);
console.log("arr3 = arr1:", arr3);

console.log("\narr1 === arr2:", arr1 === arr2, "(false, son objetos diferentes)");
console.log("arr1 === arr3:", arr1 === arr3, "(true, misma referencia)");

// Aunque tengan el mismo contenido, son diferentes en memoria
arr3.push(4);
console.log("\nDespues de arr3.push(4):");
console.log("  arr1:", arr1, "(tambien cambio porque arr3 es la misma referencia)");
console.log("  arr3:", arr3);

// ------------------------------------------------------------
// 27. BUENAS PRACTICAS
// ------------------------------------------------------------

console.log("\n--- Buenas practicas ---");

// 1. Usar const por defecto para arrays
const miLista = [1, 2, 3];
// Puedes modificar elementos incluso con const
miLista[0] = 99;
console.log("1. const permite modificar elementos:", miLista);
// Pero no puedes reasignar el array completo:
// miLista = [4, 5, 6]; // Esto daria error

// 2. No mezclar tipos de datos en un mismo array (a menos que sea necesario)
const buenosArrays = ["Ana", "Carlos", "Maria"];
console.log("2. Arrays con un solo tipo:", buenosArrays);

// 3. Usar nombres descriptivos en plural
const estudiantes2 = ["Ana", "Carlos"];
const calificaciones2 = [85, 90, 78];
console.log("3. Nombres descriptivos:", estudiantes2, calificaciones2);

// 4. Verificar longitud antes de acceder
const listaCorta = [1, 2];
if (listaCorta.length >= 3) {
    console.log("4. Tercer elemento:", listaCorta[2]);
} else {
    console.log("4. El array no tiene 3 elementos (longitud:", listaCorta.length + ")");
}

// 5. Usar includes() para verificar existencia
const listaPermitidos = ["Ana", "Carlos", "Maria"];
const nombreBuscar = "Luis";
if (listaPermitidos.includes(nombreBuscar)) {
    console.log("5.", nombreBuscar, "esta en la lista");
} else {
    console.log("5.", nombreBuscar, "no esta en la lista");
}

// ============================================================
// EJEMPLOS PRACTICOS COMPLETOS
// ============================================================

// ------------------------------------------------------------
// EJEMPLO 1: LISTA DE ESTUDIANTES
// ------------------------------------------------------------

console.log("\n=== EJEMPLO 1: Lista de estudiantes ===");

const grupoEstudiantes = ["Ana", "Carlos", "Maria"];
console.log("Grupo inicial:", grupoEstudiantes);

// Agregar estudiantes
grupoEstudiantes.push("Luis");
grupoEstudiantes.push("Sofia");
console.log("Despues de agregar:", grupoEstudiantes);

// Buscar un estudiante
const estudianteBuscar = "Carlos";
if (grupoEstudiantes.includes(estudianteBuscar)) {
    console.log(estudianteBuscar, "esta en el grupo, posicion:", grupoEstudiantes.indexOf(estudianteBuscar));
}

// Recorrer la lista
console.log("Lista final de estudiantes:");
for (const estudiante of grupoEstudiantes) {
    console.log("  -", estudiante);
}

// ------------------------------------------------------------
// EJEMPLO 2: PRODUCTOS CON PRECIOS
// ------------------------------------------------------------

console.log("\n=== EJEMPLO 2: Productos con precios ===");

const nombresProductos = ["Cuaderno", "Lapiz", "Borrador", "Regla", "Mochila"];
const preciosProductos2 = [15.50, 3.00, 2.50, 8.00, 120.00];

console.log("Inventario de la libreria:");
for (let i = 0; i < nombresProductos.length; i++) {
    console.log("  " + nombresProductos[i] + ": Bs. " + preciosProductos2[i]);
}

// Calcular precio total
let precioTotal = 0;
for (const precio of preciosProductos2) {
    precioTotal = precioTotal + precio;
}
console.log("Precio total de todos los productos: Bs.", precioTotal);

// Agregar nuevo producto
nombresProductos.push("Tijeras");
preciosProductos2.push(12.00);
console.log("\nDespues de agregar Tijeras:");
console.log("  Ultimo producto:", nombresProductos[nombresProductos.length - 1]);
console.log("  Precio:", "Bs.", preciosProductos2[preciosProductos2.length - 1]);

// ------------------------------------------------------------
// EJEMPLO 3: REGISTRO DE CALIFICACIONES
// ------------------------------------------------------------

console.log("\n=== EJEMPLO 3: Registro de calificaciones ===");

const calificacionesCurso = [85, 90, 78, 45, 92];
console.log("Calificaciones:", calificacionesCurso);

// Calcular promedio
let sumaCalificaciones = 0;
for (const nota of calificacionesCurso) {
    sumaCalificaciones = sumaCalificaciones + nota;
}
const promedio = sumaCalificaciones / calificacionesCurso.length;
console.log("Suma:", sumaCalificaciones);
console.log("Cantidad:", calificacionesCurso.length);
console.log("Promedio:", promedio.toFixed(2));

// Encontrar la nota mas alta
let notaMasAlta = calificacionesCurso[0];
for (const nota of calificacionesCurso) {
    if (nota > notaMasAlta) {
        notaMasAlta = nota;
    }
}
console.log("Nota mas alta:", notaMasAlta);

// Encontrar la nota mas baja
let notaMasBaja = calificacionesCurso[0];
for (const nota of calificacionesCurso) {
    if (nota < notaMasBaja) {
        notaMasBaja = nota;
    }
}
console.log("Nota mas baja:", notaMasBaja);

// Mostrar estado de cada calificacion
console.log("\nEstado de cada calificacion:");
for (let i = 0; i < calificacionesCurso.length; i++) {
    const nota = calificacionesCurso[i];
    const estado = nota >= 51 ? "Aprobado" : "Reprobado";
    console.log("  Nota", i + 1 + ":", nota, "-", estado);
}

// ------------------------------------------------------------
// EJEMPLO 4: AGREGAR Y ELIMINAR ESTUDIANTES
// ------------------------------------------------------------

console.log("\n=== EJEMPLO 4: Agregar y eliminar estudiantes ===");

const claseInicial = ["Ana", "Carlos", "Maria", "Luis"];
console.log("Clase inicial:", claseInicial);

// Agregar estudiante
claseInicial.push("Sofia");
console.log("Despues de agregar a Sofia:", claseInicial);

// Eliminar ultimo estudiante
const retirado = claseInicial.pop();
console.log("Estudiante retirado:", retirado);
console.log("Clase despues del retiro:", claseInicial);

// Agregar al inicio
claseInicial.unshift("Pedro");
console.log("Despues de agregar a Pedro al inicio:", claseInicial);

// Eliminar del inicio
const primerEstudiante = claseInicial.shift();
console.log("Primer estudiante eliminado:", primerEstudiante);
console.log("Clase final:", claseInicial);

// ------------------------------------------------------------
// EJEMPLO 5: BUSCAR ELEMENTOS
// ------------------------------------------------------------

console.log("\n=== EJEMPLO 5: Buscar elementos ===");

const listaMaterias = ["Matematicas", "Fisica", "Quimica", "Programacion", "Historia"];
console.log("Materias disponibles:", listaMaterias);

// Buscar con includes()
const materiaBuscar2 = "Fisica";
console.log("Existe", materiaBuscar2 + "?", listaMaterias.includes(materiaBuscar2));

// Buscar posicion con indexOf()
const posicionMateria = listaMaterias.indexOf("Programacion");
if (posicionMateria !== -1) {
    console.log("Programacion esta en la posicion", posicionMateria);
}

const materiaNoExiste = listaMaterias.indexOf("Biologia");
console.log("Posicion de Biologia:", materiaNoExiste, "(no existe)");

// ------------------------------------------------------------
// EJEMPLO 6: ITERAR LISTAS
// ------------------------------------------------------------

console.log("\n=== EJEMPLO 6: Iterar listas ===");

const numerosIterar = [10, 20, 30, 40, 50];
console.log("Numeros:", numerosIterar);

// Metodo 1: for tradicional
console.log("\nCon for tradicional:");
for (let i = 0; i < numerosIterar.length; i++) {
    console.log("  Indice", i + "->", numerosIterar[i]);
}

// Metodo 2: for...of
console.log("\nCon for...of:");
for (const num of numerosIterar) {
    console.log("  Valor:", num);
}

// ------------------------------------------------------------
// EJEMPLO 7: CALCULAR SUMA DE NUMEROS
// ------------------------------------------------------------

console.log("\n=== EJEMPLO 7: Calcular suma ===");

const ventasDiarias = [150, 230, 180, 290, 320, 210, 175];
console.log("Ventas diarias (en Bs.):", ventasDiarias);

let ventasTotales = 0;
for (const venta of ventasDiarias) {
    ventasTotales = ventasTotales + venta;
}

console.log("Total de ventas de la semana: Bs.", ventasTotales);
console.log("Promedio diario: Bs.", (ventasTotales / ventasDiarias.length).toFixed(2));

// ------------------------------------------------------------
// EJEMPLO 8: CREAR MATRIZ DE NUMEROS
// ------------------------------------------------------------

console.log("\n=== EJEMPLO 8: Crear matriz de numeros ===");

// Crear una matriz 3x3
const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log("Matriz 3x3:");
for (let i = 0; i < matriz.length; i++) {
    console.log("  Fila", i + ":", matriz[i]);
}

console.log("\nElementos individuales:");
console.log("  [0][0]:", matriz[0][0]);
console.log("  [1][1]:", matriz[1][1]);
console.log("  [2][2]:", matriz[2][2]);

// Sumar todos los elementos de la matriz
let sumaMatriz = 0;
for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        sumaMatriz = sumaMatriz + matriz[i][j];
    }
}
console.log("\nSuma de todos los elementos:", sumaMatriz);

// ------------------------------------------------------------
// EJEMPLO 9: MODIFICAR ORIGINAL VS COPIA
// ------------------------------------------------------------

console.log("\n=== EJEMPLO 9: Modificar original vs copia ===");

const calificacionesOriginales = [85, 90, 78];
console.log("Calificaciones originales:", calificacionesOriginales);

// Copia incorrecta (referencia)
const calificacionesRef = calificacionesOriginales;
calificacionesRef.push(95);
console.log("\nDespues de push en calificacionesRef:");
console.log("  Original:", calificacionesOriginales, "(tambien cambio!)");
console.log("  Referencia:", calificacionesRef);

// Copia correcta
const calificacionesOriginales2 = [85, 90, 78];
const calificacionesCopia = calificacionesOriginales2.slice();
console.log("\nCopia correcta con slice():");
console.log("  Original:", calificacionesOriginales2);
console.log("  Copia:", calificacionesCopia);

calificacionesCopia.push(100);
console.log("\nDespues de push en calificacionesCopia:");
console.log("  Original:", calificacionesOriginales2, "(no cambio)");
console.log("  Copia:", calificacionesCopia);

// ------------------------------------------------------------
// EJEMPLO 10: COMPARACION POR REFERENCIA
// ------------------------------------------------------------

console.log("\n=== EJEMPLO 10: Comparacion por referencia ===");

const lista1 = [1, 2, 3];
const lista2 = [1, 2, 3];
const lista3 = lista1;

console.log("lista1:", lista1);
console.log("lista2:", lista2);
console.log("lista3 = lista1:", lista3);

console.log("\nComparaciones:");
console.log("  lista1 === lista2:", lista1 === lista2, "(mismo contenido, diferente referencia)");
console.log("  lista1 === lista3:", lista1 === lista3, "(misma referencia)");

console.log("\nConclusion: En JavaScript, los arrays se comparan por referencia,");
console.log("no por contenido. Dos arrays con los mismos valores no son iguales.");
