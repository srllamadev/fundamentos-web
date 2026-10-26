// ============================================================
// EJERCICIOS - LECCION 35 - CADENAS DE TEXTO (STRINGS)
// ============================================================

// Ejercicio 1: Contar caracteres de un nombre
// ------------------------------------------------------------
// Escribe un programa que cuente cuantos caracteres tiene el nombre
// de un estudiante.
//
// Datos de ejemplo:
//   const nombre = "Juan Carlos Mamani";
//
// Resultado esperado:
//   "El nombre 'Juan Carlos Mamani' tiene 19 caracteres"
//
// Conceptos: length, template literals

// Ejercicio 2: Convertir frase a mayusculas y minusculas
// ------------------------------------------------------------
// Escribe un programa que tome una frase y muestre dos versiones:
// una completamente en mayusculas y otra completamente en minusculas.
//
// Datos de ejemplo:
//   const frase = "Bolivia es tierra de diversidad y cultura";
//
// Resultado esperado:
//   "En mayusculas: BOLIVIA ES TIERRA DE DIVERSIDAD Y CULTURA"
//   "En minusculas: bolivia es tierra de diversidad y cultura"
//
// Conceptos: toUpperCase(), toLowerCase()

// Ejercicio 3: Eliminar espacios al inicio y final
// ------------------------------------------------------------
// Escribe un programa que reciba una cadena con espacios al inicio
// y al final, y la limpie para que solo tenga el texto sin espacios
// sobrantes.
//
// Datos de ejemplo:
//   const entrada = "   Maria Elena   ";
//
// Resultado esperado:
//   "Antes: '   Maria Elena   ' (length: 18)"
//   "Despues: 'Maria Elena' (length: 11)"
//
// Conceptos: trim(), length

// Ejercicio 4: Obtener las primeras 3 letras de una palabra
// ------------------------------------------------------------
// Escribe un programa que extraiga las primeras 3 letras de una
// palabra usando el metodo slice().
//
// Datos de ejemplo:
//   const palabra = "Cochabamba";
//
// Resultado esperado:
//   "Las primeras 3 letras de 'Cochabamba' son: 'Coc'"
//
// Conceptos: slice()

// Ejercicio 5: Buscar una palabra dentro de una oracion
// ------------------------------------------------------------
// Escribe un programa que verifique si una palabra existe dentro
// de una oracion. Debe mostrar un mensaje indicando si la encontro
// o no.
//
// Datos de ejemplo:
//   const oracion = "El saltena es una comida tipica boliviana";
//   const palabraBuscar = "saltena";
//
// Resultado esperado:
//   "La palabra 'saltena' SI se encontro en la oracion"
//
// Conceptos: includes(), o indexOf()

// Ejercicio 6: Reemplazar una palabra en una oracion
// ------------------------------------------------------------
// Escribe un programa que reemplace una palabra por otra en una
// oracion. Debe mostrar la oracion original y la modificada.
//
// Datos de ejemplo:
//   const oracion = "Me gusta caminar por la plaza Murillo";
//   const palabraVieja = "caminar";
//   const palabraNueva = "correr";
//
// Resultado esperado:
//   "Original: 'Me gusta caminar por la plaza Murillo'"
//   "Modificada: 'Me gusta correr por la plaza Murillo'"
//
// Conceptos: replace()

// Ejercicio 7: Contar palabras en una oracion
// ------------------------------------------------------------
// Escribe un programa que cuente cuantas palabras tiene una oracion.
// Debe manejar casos especiales:
// - Cadenas vacias deben devolver 0
// - Cadenas con muchos espacios seguidos deben contar solo las palabras reales
//
// Datos de ejemplo:
//   const oracion1 = "Bolivia es un pais hermoso";
//   const oracion2 = "";
//   const oracion3 = "   Hola    mundo   ";
//
// Resultado esperado:
//   "'Bolivia es un pais hermoso' tiene 5 palabras"
//   "'' tiene 0 palabras"
//   "'   Hola    mundo   ' tiene 2 palabras"
//
// Conceptos: split(), trim(), filter(), length
// Pista: split(" ") con multiples espacios genera elementos vacios

// Ejercicio 8: Crear codigo de estudiante con padding
// ------------------------------------------------------------
// Escribe un programa que genere un codigo de estudiante con el
// formato "EST-XXX" donde XXX es el numero del estudiante con ceros
// a la izquierda hasta completar 3 digitos.
//
// Datos de ejemplo:
//   const numeroEstudiante = 5;
//   const numeroEstudiante2 = 42;
//   const numeroEstudiante3 = 1234;
//
// Resultado esperado:
//   "Estudiante #5: EST-005"
//   "Estudiante #42: EST-042"
//   "Estudiante #1234: EST-1234"
//
// Conceptos: String(), padStart(), concatenacion o template literals

// ============================================================
// NOTA: Estos ejercicios NO tienen solucion incluida.
// Resuelvelos tu mismo y verifica los resultados en la consola.
// ============================================================
