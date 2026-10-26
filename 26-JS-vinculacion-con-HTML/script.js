// ========================================
// 1. JAVASCRIPT EN UNA PÁGINA HTML
// ========================================
// JavaScript se ejecuta dentro del navegador. Para que funcione,
// el navegador necesita saber dónde está el código.
// Existen 3 formas principales de vincular JavaScript con HTML:
//
// 1) JavaScript inline (en línea) - directamente en atributos HTML
// 2) JavaScript interno - dentro de una etiqueta <script> en el HTML
// 3) JavaScript externo - en un archivo .js separado (RECOMENDADO)


// ========================================
// 2. LA ETIQUETA SCRIPT
// ========================================
// La etiqueta <script> le dice al navegador: "aquí hay código JavaScript".
// Puede usarse de dos formas:
//
// Forma A - Script interno (código escrito entre las etiquetas):
//
//     <script>
//         console.log("Hola desde script interno");
//     </script>
//
// Forma B - Script externo (referencia a un archivo .js):
//
//     <script src="script.js"></script>
//
// El navegador lee la etiqueta <script>, descarga el archivo (si usa src),
// y ejecuta el código JavaScript línea por línea, de arriba hacia abajo.

console.log("--- 2. La etiqueta script ---");
console.log("Este archivo es un script externo vinculado con HTML");
console.log("El navegador lo encontró gracias a la etiqueta <script src=\"script.js\">");


// ========================================
// 3. JAVASCRIPT INTERNO VS EXTERNO
// ========================================

// ----------------------------------------
// JavaScript interno:
// Se escribe directamente dentro del HTML, entre etiquetas <script>.
//
// Ejemplo:
//
//     <!DOCTYPE html>
//     <html lang="es">
//     <head>
//         <meta charset="UTF-8">
//         <title>Mi Página</title>
//         <script>
//             console.log("Este código está dentro del HTML");
//         </script>
//     </head>
//     <body>
//         <h1>Hola</h1>
//     </body>
//     </html>
//
// Ventajas:
//   - Rápido para pruebas pequeñas
//   - No necesitas crear otro archivo
//
// Desventajas:
//   - Mezcla la lógica con la estructura
//   - Difícil de mantener en proyectos grandes
//   - No se puede cachear por separado
//   - No se puede reutilizar en otras páginas

console.log("--- 3. JavaScript interno vs externo ---");
console.log("Ventaja del externo: el archivo script.js se puede reutilizar en muchas páginas HTML");
console.log("Ventaja del externo: el navegador guarda el archivo en caché y carga más rápido la próxima vez");

// ----------------------------------------
// JavaScript externo:
// Se escribe en un archivo separado con extensión .js
// Se vincula al HTML con la etiqueta <script src="nombre-del-archivo.js">
//
// Ejemplo de estructura:
//
//     carpeta-del-proyecto/
//     ├── index.html
//     └── script.js
//
// Este es el método RECOMENDADO porque:
//   - Separa la estructura (HTML) de la lógica (JavaScript)
//   - El código es más fácil de leer y mantener
//   - Se puede reutilizar en múltiples páginas HTML
//   - El navegador lo guarda en caché automáticamente


// ========================================
// 4. EL ATRIBUTO SRC
// ========================================
// El atributo src (source = fuente) indica la ruta del archivo JavaScript.
//
// Ejemplo:
//     <script src="script.js"></script>
//
// Funciona igual que el atributo src de las imágenes (<img src="foto.jpg">):
// le dice al navegador dónde encontrar el archivo.
//
// Reglas importantes:
//   - La ruta puede ser relativa o absoluta
//   - El archivo debe tener extensión .js
//   - Si la ruta es incorrecta, el script NO se ejecutará
//   - La etiqueta <script src="..."></script> debe cerrarse (no es autocerrante)

console.log("--- 4. El atributo src ---");
console.log("El atributo src le dice al navegador: busca el archivo script.js");
console.log("Mala práctica: <script src=\"script.js\" /> (NO usar autocerrante)");
console.log("Buena práctica: <script src=\"script.js\"></script> (siempre cerrar la etiqueta)");


// ========================================
// 5. RUTAS RELATIVAS
// ========================================
// La ruta en src puede ser relativa (desde la ubicación del HTML) o absoluta.
//
// Ejemplos de rutas relativas:
//
//     Mismo directorio:
//     <script src="script.js"></script>
//
//     Subcarpeta:
//     <script src="js/script.js"></script>
//     <script src="js/app/main.js"></script>
//
//     Subir un nivel:
//     <script src="../script.js"></script>
//
// Ejemplo de estructura con subcarpeta:
//
//     mi-proyecto/
//     ├── index.html
//     └── js/
//         └── script.js
//
// En este caso, desde index.html la ruta sería:
//     <script src="js/script.js"></script>

console.log("--- 5. Rutas relativas ---");
console.log("Ruta misma carpeta: src=\"script.js\"");
console.log("Ruta en subcarpeta: src=\"js/script.js\"");
console.log("Ruta subiendo un nivel: src=\"../script.js\"");


// ========================================
// 6. POSICIÓN DE LA ETIQUETA SCRIPT
// ========================================
// ¿Dónde colocar la etiqueta <script>? Hay dos opciones principales:

// ----------------------------------------
// Opción A: En el <head>
//
//     <!DOCTYPE html>
//     <html lang="es">
//     <head>
//         <meta charset="UTF-8">
//         <title>Mi Página</title>
//         <script src="script.js"></script>
//     </head>
//     <body>
//         <h1>Hola</h1>
//     </body>
//     </html>
//
// Problema: El navegador PAUSA la lectura del HTML para ejecutar el script.
// Si el script es grande, la página tarda más en mostrarse al usuario.
// Además, si el script intenta acceder a elementos del <body>,
// estos aún NO existen porque el navegador no ha llegado al <body>.

console.log("--- 6. Posición de la etiqueta script ---");
console.log("Opción A: En el <head> - el script se ejecuta antes de que el HTML esté completo");
console.log("Opción B: Antes de cerrar </body> - el script se ejecuta después de que todo el HTML está listo");

// ----------------------------------------
// Opción B: Antes de cerrar </body>
//
//     <!DOCTYPE html>
//     <html lang="es">
//     <head>
//         <meta charset="UTF-8">
//         <title>Mi Página</title>
//     </head>
//     <body>
//         <h1>Hola</h1>
//         <script src="script.js"></script>
//     </body>
//     </html>
//
// Ventaja: Todo el HTML ya fue leído cuando el script se ejecuta.
// El script puede acceder a cualquier elemento del documento sin problemas.
// Desventaja: El script no empieza a descargarse hasta que todo el HTML se haya leído.


// ========================================
// 7. DIFERENCIAS ENTRE CARGAR EN HEAD VS ANTES DE CERRAR BODY
// ========================================

console.log("--- 7. Diferencias entre head y antes de </body> ---");

console.log("Cargar en <head>:");
console.log("  - El script se descarga y ejecuta ANTES de mostrar la página");
console.log("  - Puede bloquear la visualización de la página");
console.log("  - Los elementos del <body> aún NO existen en el DOM");

console.log("Cargar antes de </body>:");
console.log("  - El script se ejecuta DESPUÉS de que todo el HTML fue leído");
console.log("  - La página ya es visible para el usuario");
console.log("  - Todos los elementos del HTML ya existen en el DOM");

// ----------------------------------------
// Demostración: como usamos defer, este script se ejecuta DESPUÉS
// de que todo el HTML fue parseado, sin importar que esté en el <head>.
// Puedes verificar que el documento ya está completamente cargado:

console.log("Verificando que el HTML ya está cargado gracias a defer...");
console.log("document.readyState: " + document.readyState);
console.log("Si dice \"complete\", el HTML ya está completamente cargado");


// ========================================
// 8. EL ATRIBUTO DEFER
// ========================================
// defer le dice al navegador dos cosas:
//
// 1) "Descarga el script en paralelo mientras sigues leyendo el HTML"
// 2) "Ejecuta el script DESPUÉS de que todo el HTML se haya parseado"
//
// Ejemplo:
//     <script src="script.js" defer></script>
//
// Ventajas de defer:
//   - La página se muestra más rápido (no se bloquea)
//   - El script se ejecuta cuando el HTML está listo
//   - Se respeta el orden de los scripts (si hay varios, se ejecutan en orden)
//   - Es seguro acceder a elementos del DOM

console.log("--- 8. El atributo defer ---");
console.log("defer = descargar en paralelo + ejecutar después de parsear el HTML");
console.log("Este es el método RECOMENDADO para vincular scripts externos");

// Ejemplo de cómo funciona defer paso a paso:
//
// Paso 1: El navegador empieza a leer el HTML
// Paso 2: Encuentra <script src="script.js" defer>
// Paso 3: Empieza a descargar script.js en segundo plano
// Paso 4: Sigue leyendo el resto del HTML (no se detiene)
// Paso 5: Cuando termina de leer todo el HTML (llega a </html>)
// Paso 6: Ejecuta script.js
//
// Gracias a defer, este script se ejecuta con el HTML completamente cargado.
// Por eso document.readyState dice "complete".

console.log("Paso a paso con defer:");
console.log("  1. Navegador lee HTML");
console.log("  2. Encuentra <script defer> -> empieza descarga en segundo plano");
console.log("  3. Sigue leyendo el HTML sin detenerse");
console.log("  4. Cuando termina el HTML -> ejecuta el script");


// ========================================
// 9. EL ATRIBUTO ASYNC
// ========================================
// async también descarga el script en paralelo, pero con una diferencia:
//
// - async: "En cuanto termines de descargar, ejecuta inmediatamente"
//   (NO espera a que el HTML termine de parsearse)
// - defer: "Espera a que todo el HTML se parsee, luego ejecuta"
//
// Ejemplo:
//     <script src="analiticas.js" async></script>
//
// async es útil para scripts independientes que no necesitan tocar el HTML,
// como Google Analytics, publicidad, o widgets de redes sociales.
//
// NO uses async si tu script necesita acceder a elementos del DOM,
// porque podría ejecutarse antes de que esos elementos existan.

console.log("--- 9. El atributo async ---");
console.log("async = descargar en paralelo + ejecutar INMEDIATAMENTE cuando termine");
console.log("async NO espera a que el HTML termine de cargarse");
console.log("Usar async para: scripts independientes (analíticas, publicidad)");
console.log("NO usar async para: scripts que necesitan leer elementos del HTML");

// ----------------------------------------
// Comparación visual: defer vs async
//
// Sin atributo:
//     HTML:  ──leer──leer──[PAUSA: ejecuta script]──leer──leer──fin
//
// Con defer:
//     HTML:  ──leer──leer──leer──leer──leer──fin
//     JS:       ──descargar──┘                      └──ejecuta──┘
//
// Con async:
//     HTML:  ──leer──leer──leer──leer──leer──fin
//     JS:       ──descargar──┘
//               └──ejecuta──┘  (se ejecuta en cuanto termina la descarga)


// ========================================
// 10. BUENAS PRÁCTICAS PARA ORGANIZACIÓN
// ========================================

console.log("--- 10. Buenas prácticas ---");

console.log("1. Usa archivos .js externos (no mezcles JavaScript con HTML)");
console.log("2. Usa el atributo defer en la etiqueta <script>");
console.log("3. Coloca los scripts antes de cerrar </body> o en <head> con defer");
console.log("4. Usa nombres descriptivos para tus archivos: script.js, app.js, main.js");
console.log("5. Organiza tus scripts en carpetas si son varios: js/archivo.js");
console.log("6. Un archivo .js = una responsabilidad (no mezcles todo en un solo archivo)");

// ----------------------------------------
// Ejemplo de buena organización:
//
//     mi-proyecto/
//     ├── index.html
//     ├── contacto.html
//     └── js/
//         ├── main.js       (código general)
//         ├── formulario.js (solo para formularios)
//         └── validacion.js (solo para validaciones)
//
// En index.html:
//     <script src="js/main.js" defer></script>
//     <script src="js/formulario.js" defer></script>
//
// En contacto.html:
//     <script src="js/main.js" defer></script>
//     <script src="js/validacion.js" defer></script>

console.log("Ejemplo de estructura organizada:");
console.log("  mi-proyecto/");
console.log("  ├── index.html");
console.log("  ├── contacto.html");
console.log("  └── js/");
console.log("      ├── main.js");
console.log("      ├── formulario.js");
console.log("      └── validacion.js");


// ========================================
// 11. SEPARACIÓN ENTRE HTML Y JAVASCRIPT
// ========================================
// El principio fundamental es: cada cosa en su lugar.
//
// HTML  = estructura y contenido (qué muestra la página)
// CSS   = presentación y estilo (cómo se ve la página)
// JS    = comportamiento y lógica (qué hace la página)
//
// Cuando mezclamos todo en un solo archivo, el código se vuelve
// difícil de leer, mantener y compartir.
//
// MAL: Todo en un solo archivo HTML
//
//     <!DOCTYPE html>
//     <html lang="es">
//     <head>
//         <title>Mi Página</title>
//         <style>
//             body { background: blue; }
//         </style>
//         <script>
//             console.log("Hola");
//         </script>
//     </head>
//     <body>
//         <h1 onclick="alert('clic')">Título</h1>
//     </body>
//     </html>
//
// BIEN: Separado en archivos independientes
//
//     index.html   -> solo estructura HTML
//     styles.css   -> solo estilos CSS
//     script.js    -> solo lógica JavaScript
//
//     En index.html:
//     <link rel="stylesheet" href="styles.css">
//     <script src="script.js" defer></script>

console.log("--- 11. Separación entre HTML y JavaScript ---");
console.log("HTML = estructura (qué muestra)");
console.log("CSS  = estilo (cómo se ve)");
console.log("JS   = comportamiento (qué hace)");
console.log("Cada archivo tiene una sola responsabilidad");


// ========================================
// 12. EJEMPLOS DE VINCULACIÓN CORRECTA E INCORRECTA
// ========================================

console.log("--- 12. Ejemplos correcta vs incorrecta ---");

// ----------------------------------------
// CORRECTO: Script externo con defer
//
//     <script src="script.js" defer></script>

console.log("CORRECTO: <script src=\"script.js\" defer></script>");

// ----------------------------------------
// INCORRECTO: Etiqueta script sin cerrar
//
//     <script src="script.js">     <-- falta </script>
//
// El navegador puede ignorar el script o comportarse de forma inesperada.

console.log("INCORRECTO: <script src=\"script.js\"> (sin cerrar la etiqueta)");

// ----------------------------------------
// INCORRECTO: Ruta incorrecta
//
//     <script src="carpeta-incorrecta/script.js" defer></script>
//
// Si la carpeta no existe, el script no se carga y no hay error visible.

console.log("INCORRECTO: <script src=\"carpeta-incorrecta/script.js\"> (la ruta no existe)");

// ----------------------------------------
// INCORRECTO: Usar atributos de imagen en script
//
//     <script href="script.js"></script>     <-- href no es válido para script
//     <script link="script.js"></script>     <-- link no es válido para script
//
// El atributo correcto para vincular archivos es src, NO href ni link.

console.log("INCORRECTO: <script href=\"script.js\"> (href no funciona, usar src)");

// ----------------------------------------
// INCORRECTO: Escribir el código dentro de src
//
//     <script src="console.log('Hola')"></script>
//
// src espera una RUTA de archivo, no código JavaScript.

console.log("INCORRECTO: <script src=\"console.log('Hola')\"> (src es para rutas, no para código)");

// ----------------------------------------
// CORRECTO: Múltiples scripts con defer (se ejecutan en orden)
//
//     <script src="js/primero.js" defer></script>
//     <script src="js/segundo.js" defer></script>
//     <script src="js/tercero.js" defer></script>

console.log("CORRECTO: Múltiples scripts con defer se ejecutan en orden");


// ========================================
// FIN DE LA LECCIÓN
// ========================================
console.log("");
console.log("=== Fin de la lección 26 ===");
console.log("¡Has aprendido a vincular JavaScript con HTML!");
console.log("En la siguiente lección veremos variables y constantes.");
