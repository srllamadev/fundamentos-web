// ========================================
// 1. ¿QUÉ ES JAVASCRIPT?
// ========================================
// JavaScript es el lenguaje de programación de la web.
// Nos permite crear páginas web interactivas y dinámicas.
// Se ejecuta directamente en el navegador del usuario.


// ========================================
// 2. CONSOLE.LOG() - MOSTRAR MENSAJES
// ========================================
// console.log() muestra información en la consola del navegador.
// Es la forma más común de ver resultados durante el desarrollo.

// Mostrar un saludo básico
console.log("Hola, mundo");

// Mostrar nombres y edades de estudiantes
console.log("Nombre: María");
console.log("Edad: 20 años");
console.log("Ciudad: La Paz");

// Mostrar múltiples mensajes consecutivos
console.log("Bienvenido al curso de JavaScript");
console.log("Estudiante: Juan Pérez");
console.log("Curso: Fundamentos Web");
console.log("Gestión: 2026");

// Mostrar un precio en bolivianos
console.log("Precio del producto: 150 Bs");


// ========================================
// 3. CONSOLE.WARN() - MOSTRAR ADVERTENCIAS
// ========================================
// console.warn() muestra mensajes de advertencia en color amarillo.
// Se usa para alertar sobre posibles problemas.

console.warn("Advertencia: El campo de email está vacío");
console.warn("Advertencia: La contraseña debe tener al menos 8 caracteres");
console.warn("Advertencia: No se encontraron resultados para la búsqueda");


// ========================================
// 4. CONSOLE.ERROR() - MOSTRAR ERRORES
// ========================================
// console.error() muestra mensajes de error en color rojo.
// Se usa para indicar problemas críticos en el código.

console.error("Error: No se pudo conectar con el servidor");
console.error("Error: El archivo no existe");
console.error("Error: Formato de fecha inválido");


// ========================================
// 5. CONSOLE.INFO() - MOSTRAR INFORMACIÓN
// ========================================
// console.info() muestra mensajes informativos.
// Se usa para dar contexto adicional sobre el código.

console.info("Información: El curso inicia el 1 de marzo");
console.info("Información: Quedan 15 cupos disponibles");
console.info("Información: Horario de clases: Lunes a Viernes, 19:00 a 21:00");


// ========================================
// 6. COMENTARIOS DE UNA SOLA LÍNEA (//)
// ========================================
// Los comentarios de una sola línea empiezan con dos barras (//)
// Todo lo que viene después de // es ignorado por JavaScript

// Este es un comentario de una sola línea
// console.log("Esta línea está comentada, no se ejecutará");

var edad = 25; // Este comentario explica que guardamos la edad en una variable
var nombre = "Carlos"; // Aquí guardamos el nombre del estudiante


// ========================================
// 7. COMENTARIOS DE MÚLTIPLES LÍNEAS (/* */)
// ========================================
// Los comentarios de múltiples líneas empiezan con /* y terminan con */
// Se usan para explicar bloques de código más extensos

/*
  Este es un comentario de múltiples líneas.
  Se usa para explicar secciones completas del código.
  Puede abarcar tantas líneas como necesites.
*/

/*
  Ejemplo: Programa de registro de estudiantes
  Autor: Profesor de JavaScript
  Fecha: Octubre 2026
  
  Este programa muestra información básica de estudiantes
  en la consola del navegador usando console.log()
*/

var estudiante = "Ana López";
var carrera = "Ingeniería de Sistemas";
var universidad = "UMSS";


// ========================================
// 8. EJEMPLOS PRÁCTICOS COMBINADOS
// ========================================

// Ejemplo 1: Mostrar un mensaje de bienvenida
console.log("=== Bienvenido al Sistema de Registro ===");

// Ejemplo 2: Mostrar 3 datos personales ficticios
console.log("Nombre: Luis Fernando Gutiérrez");
console.log("Edad: 22 años");
console.log("Ciudad: Cochabamba");

// Ejemplo 3: Mostrar una advertencia
console.warn("Advertencia: Los datos personales son confidenciales");

// Ejemplo 4: Mostrar un mensaje de error simulado
console.error("Error: No se pudo guardar la información del estudiante");

// Ejemplo 5: Mostrar información adicional
console.info("Información: Contacte al administrador para más ayuda");


// ========================================
// 9. ERRORES DE SINTAXIS COMUNES
// ========================================

/*
  Error 1: Olvidar las comillas en strings
  
  MAL:
  console.log(Hola, mundo);  // Error: Hola no está definido
  
  BIEN:
  console.log("Hola, mundo");
*/

/*
  Error 2: Olvidar el punto y coma (aunque JavaScript lo permite, es buena práctica usarlo)
  
  MAL:
  console.log("Hola")
  console.log("Mundo")
  
  BIEN:
  console.log("Hola");
  console.log("Mundo");
*/

/*
  Error 3: Escribir mal los nombres de las funciones
  
  MAL:
  console.lgo("Hola");  // Error: console.lgo no es una función
  console.Log("Hola");  // Error: JavaScript distingue entre mayúsculas y minúsculas
  
  BIEN:
  console.log("Hola");
*/

/*
  Error 4: Olvidar cerrar los paréntesis
  
  MAL:
  console.log("Hola"  // Error: Falta el paréntesis de cierre
  
  BIEN:
  console.log("Hola");
*/

/*
  Error 5: Usar comillas incorrectamente
  
  MAL:
  console.log("Hola');  // Error: Las comillas de apertura y cierre no coinciden
  console.log(Hola);    // Error: Hola sin comillas se interpreta como variable
  
  BIEN:
  console.log("Hola");
*/


// ========================================
// FIN DE LA LECCIÓN
// ========================================
console.log("=== Fin de la lección 25 ===");
console.log("¡Felicidades! Has completado la introducción a JavaScript");
