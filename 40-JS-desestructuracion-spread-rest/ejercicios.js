// ============================================================
// EJERCICIOS - LECCION 40: DESESTRUCTURACION, SPREAD Y REST
// ============================================================
// Ejercicios SIN soluciones. Intenta resolverlos antes de mirar
// las respuestas.


// ------------------------------------------------------------
// EJERCICIO 1 - Extraer valores de un array con desestructuracion
// ------------------------------------------------------------

// TITULO: Los primeros tres lugares
//
// ENUNCIADO:
// Dado el siguiente array de calificaciones, extrae las tres
// primeras calificaciones en variables llamadas mejor1, mejor2
// y mejor3 usando desestructuracion de array.
//
// DATOS:
const calificaciones = [92, 88, 76, 95, 83, 70, 99];
//
// RESULTADO ESPERADO:
// mejor1 debe ser 92
// mejor2 debe ser 88
// mejor3 debe ser 76
//
// CONCEPTOS: Desestructuracion de arrays, posicion


// ------------------------------------------------------------
// EJERCICIO 2 - Desestructurar un objeto en variables
// ------------------------------------------------------------

// TITULO: Datos del producto
//
// ENUNCIADO:
// Dado el siguiente objeto producto, extrae las propiedades
// id, nombre y precio en variables individuales usando
// desestructuracion de objetos. Luego imprime cada variable.
//
// DATOS:
const producto = { id: 42, nombre: "Mochila", precio: 150, color: "Azul", material: "Tela" };
//
// RESULTADO ESPERADO:
// console.log(id)     -> 42
// console.log(nombre) -> "Mochila"
// console.log(precio) -> 150
//
// CONCEPTOS: Desestructuracion de objetos


// ------------------------------------------------------------
// EJERCICIO 3 - Copiar un array usando spread
// ------------------------------------------------------------

// TITULO: Copia de lista de estudiantes
//
// ENUNCIADO:
// Crea una copia del siguiente array de estudiantes usando
// el operador spread. Agrega un nuevo estudiante llamado "Ana"
// a la copia y verifica que el array original no fue modificado.
//
// DATOS:
const estudiantesOriginales = ["Carlos", "Maria", "Juan", "Sofia"];
//
// RESULTADO ESPERADO:
// estudiantesOriginales debe seguir teniendo 4 elementos
// La copia debe tener 5 elementos (incluyendo "Ana")
//
// CONCEPTOS: Spread en arrays, copia superficial


// ------------------------------------------------------------
// EJERCICIO 4 - Combinar dos arrays con spread
// ------------------------------------------------------------

// TITULO: Unir listas de compras
//
// ENUNCIADO:
// Combina los siguientes dos arrays de productos en un solo
// array llamado listaCompleta usando el operador spread.
//
// DATOS:
const listaFrutas = ["Manzana", "Pera", "Banana"];
const listaVerduras = ["Lechuga", "Tomate", "Zanahoria"];
//
// RESULTADO ESPERADO:
// listaCompleta debe ser ["Manzana", "Pera", "Banana", "Lechuga", "Tomate", "Zanahoria"]
//
// CONCEPTOS: Spread en arrays, combinacion


// ------------------------------------------------------------
// EJERCICIO 5 - Fusionar dos objetos con spread
// ------------------------------------------------------------

// TITULO: Configuracion combinada
//
// ENUNCIADO:
// Fusiona los siguientes dos objetos de configuracion en un
// nuevo objeto llamado configFinal usando spread. Si hay
// propiedades duplicadas, las del objeto configPersonal deben
// tener prioridad. Imprime el resultado.
//
// DATOS:
const configBase = { tema: "claro", idioma: "es", notificaciones: true };
const configPersonal = { tema: "oscuro", fuente: "Arial" };
//
// RESULTADO ESPERADO:
// configFinal debe ser { tema: "oscuro", idioma: "es", notificaciones: true, fuente: "Arial" }
//
// CONCEPTOS: Spread en objetos, fusion, sobrescritura de propiedades


// ------------------------------------------------------------
// EJERCICIO 6 - Funcion con parametros rest
// ------------------------------------------------------------

// TITULO: Suma variable
//
// ENUNCIADO:
// Crea una funcion llamada sumarTodos que acepte un numero
// variable de argumentos usando parametros rest y retorne
// la suma de todos ellos. Prueba la funcion con diferentes
// cantidades de numeros.
//
// RESULTADO ESPERADO:
// sumarTodos(1, 2, 3)        -> 6
// sumarTodos(10, 20, 30, 40) -> 100
// sumarTodos(5)              -> 5
// sumarTodos()               -> 0
//
// CONCEPTOS: Parametros rest, funciones con argumentos variables


// ------------------------------------------------------------
// EJERCICIO 7 - Renombrar propiedades al desestructurar
// ------------------------------------------------------------

// TITULO: Adaptar nombres de propiedades
//
// ENUNCIADO:
// Dado el siguiente objeto de contacto, desestructuralo
// renombrando las propiedades: "tel" debe llamarse "telefono",
// "dir" debe llamarse "direccion", y "cp" debe llamarse
// "codigoPostal". Imprime las variables con los nuevos nombres.
//
// DATOS:
const contacto = { nombre: "Andrea", tel: "70012345", dir: "Av. America #123", cp: "0002" };
//
// RESULTADO ESPERADO:
// console.log(telefono)      -> "70012345"
// console.log(direccion)     -> "Av. America #123"
// console.log(codigoPostal)  -> "0002"
//
// CONCEPTOS: Renombrar variables en desestructuracion de objetos


// ------------------------------------------------------------
// EJERCICIO 8 - Separar propiedades con rest
// ------------------------------------------------------------

// TITULO: Separar datos personales de academicos
//
// ENUNCIADO:
// Dado el siguiente objeto estudiante, extrae las propiedades
// "nombre" y "edad" en variables individuales y recopila todas
// las demas propiedades en un objeto llamado datosAcademicos
// usando desestructuracion con rest. Imprime todo.
//
// DATOS:
const estudiante = {
    nombre: "Valeria",
    edad: 21,
    carrera: "Contaduria",
    universidad: "UMSA",
    semestre: 4,
    promedio: 87
};
//
// RESULTADO ESPERADO:
// nombre -> "Valeria"
// edad   -> 21
// datosAcademicos -> { carrera: "Contaduria", universidad: "UMSA", semestre: 4, promedio: 87 }
//
// CONCEPTOS: Rest en desestructuracion de objetos, separacion de propiedades
