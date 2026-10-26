// ============================================================
// LECCIÓN 32 - BUCLES EN JAVASCRIPT
// ============================================================

// ------------------------------------------------------------
// 1. ¿QUÉ ES UN BUCLE?
// ------------------------------------------------------------
// Un bucle es una estructura de control que repite un bloque
// de código mientras se cumpla una condición.
// En lugar de escribir la misma instrucción muchas veces,
// usamos un bucle para repetir automáticamente.

console.log("--- 1. ¿Qué es un bucle? ---");
console.log("Un bucle repite código automáticamente mientras se cumpla una condición.");

// Sin bucle (tedioso si son muchos números):
console.log(1);
console.log(2);
console.log(3);

// Con bucle (eficiente y elegante):
for (let i = 1; i <= 3; i++) {
    console.log(i);
}


// ------------------------------------------------------------
// 2. ¿CUÁNDO USAR UN BUCLE?
// ------------------------------------------------------------
// Usa un bucle cuando necesites:
// - Repetir una acción N veces
// - Recorrer cada carácter de un texto
// - Procesar una lista de datos
// - Generar tablas o patrones
// - Buscar un valor entre muchos posibles

console.log("\n--- 2. ¿Cuándo usar un bucle? ---");
console.log("Ejemplo: Imprimir los 9 departamentos de Bolivia");

const departamentos = "PZ LP CB SC PT TJ BN OR CH";
// En lugar de console.log() para cada uno, podemos usar un bucle
console.log("Sin bucle: necesitarías 9 líneas de console.log()");
console.log("Con bucle: una sola estructura los recorre todos");


// ------------------------------------------------------------
// 3. EL BUCLE for
// ------------------------------------------------------------
// El bucle for es el más usado en JavaScript.
// Repite código un número determinado de veces.

// SINTAXIS:
// for (inicialización; condición; actualización) {
//     bloque de código a repetir
// }

// ANATOMÍA DEL for:
//
//  ┌──────────────────────────────────────────────────────────┐
//  │  for ( let i = 1 ;  i <= 10 ;  i++ )  {  ...  }        │
//  │        ─────────   ──────────   ────                    │
//  │          │            │          │                       │
//  │    INICIALIZACIÓN  CONDICIÓN  ACTUALIZACIÓN             │
//  │    (se ejecuta    (se evalúa  (se ejecuta               │
//  │     1 sola vez)   cada vez)    cada vez)                │
//  └──────────────────────────────────────────────────────────┘
//
// Flujo:
// 1. Se ejecuta la INICIALIZACIÓN (una sola vez)
// 2. Se evalúa la CONDICIÓN
// 3. Si es verdadera → se ejecuta el bloque
// 4. Se ejecuta la ACTUALIZACIÓN
// 5. Se vuelve al paso 2
// 6. Si la condición es falsa → el bucle termina

console.log("\n--- 3. El bucle for ---");

// Ejemplo: Contar del 1 al 10
console.log("Contar del 1 al 10:");
for (let i = 1; i <= 10; i++) {
    console.log("Número: " + i);
}

// Ejemplo: Contar del 10 al 1 (cuenta regresiva)
console.log("\nCuenta regresiva del 10 al 1:");
for (let i = 10; i >= 1; i--) {
    console.log("Número: " + i);
}
console.log("¡Despegue!");

// Ejemplo: Mostrar números pares del 1 al 20
console.log("\nNúmeros pares del 1 al 20:");
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// Ejemplo: Contar de 2 en 2
console.log("\nContar de 2 en 2 hasta 20:");
for (let i = 0; i <= 20; i += 2) {
    console.log(i);
}


// ------------------------------------------------------------
// 4. EL BUCLE while
// ------------------------------------------------------------
// El bucle while repite código MIENTRAS una condición sea verdadera.
// Se usa cuando NO sabes exactamente cuántas veces se va a repetir.

// SINTAXIS:
// while (condición) {
//     bloque de código a repetir
// }

// Flujo:
// 1. Se evalúa la condición
// 2. Si es verdadera → se ejecuta el bloque
// 3. Se vuelve al paso 1
// 4. Si la condición es falsa → el bucle termina

console.log("\n--- 4. El bucle while ---");

// Ejemplo: Contar del 1 al 5
let contador = 1;
console.log("Contar del 1 al 5 con while:");
while (contador <= 5) {
    console.log("Contador: " + contador);
    contador++;
}

// Ejemplo: Simular un saldo que disminuye
let saldo = 100;
console.log("\nSimular retiros de 25 Bs:");
while (saldo >= 25) {
    saldo = saldo - 25;
    console.log("Retiro 25 Bs. Saldo restante: " + saldo + " Bs");
}
console.log("No hay suficiente saldo para otro retiro.");

// Ejemplo: Buscar cuántas veces se puede dividir un número entre 2
let numero = 128;
let divisiones = 0;
console.log("\n¿Cuántas veces se puede dividir " + numero + " entre 2?");
while (numero > 1) {
    numero = numero / 2;
    divisiones++;
    console.log("División " + divisiones + ": " + numero);
}
console.log("Se dividió " + divisiones + " veces.");


// ------------------------------------------------------------
// 5. EL BUCLE do...while
// ------------------------------------------------------------
// El bucle do...while es similar al while, pero GARANTIZA
// que el bloque se ejecute AL MENOS UNA VEZ,
// porque la condición se evalúa AL FINAL.

// SINTAXIS:
// do {
//     bloque de código a repetir
// } while (condición);

// Flujo:
// 1. Se ejecuta el bloque de código (al menos 1 vez)
// 2. Se evalúa la condición
// 3. Si es verdadera → se vuelve al paso 1
// 4. Si es falsa → el bucle termina

console.log("\n--- 5. El bucle do...while ---");

// Ejemplo: Se ejecuta aunque la condición sea falsa desde el inicio
let x = 100;
console.log("do...while con condición inicialmente falsa:");
do {
    console.log("Esto se ejecuta 1 vez aunque x = " + x);
    x++;
} while (x < 5);
console.log("El bucle terminó porque " + x + " no es menor que 5.");

// Ejemplo: Mostrar números del 1 al 5
let num = 1;
console.log("\nContar del 1 al 5 con do...while:");
do {
    console.log("Número: " + num);
    num++;
} while (num <= 5);

// Ejemplo práctico: Simular un menú que se muestra al menos una vez
console.log("\nSimular menú de opciones:");
let opcion = 0;
do {
    console.log("Opción seleccionada: " + opcion);
    opcion++;
    if (opcion <= 3) {
        console.log("→ Mostrando opción del menú...");
    }
} while (opcion <= 3);
console.log("Menú cerrado.");


// ------------------------------------------------------------
// 6. DIFERENCIAS ENTRE LAS TRES ESTRUCTURAS
// ------------------------------------------------------------
//
// +--------------------+-------------------+-------------------+-------------------+
// | Característica     | for               | while             | do...while        |
// +--------------------+-------------------+-------------------+-------------------+
// | ¿Cuántas veces     | 0 o más           | 0 o más           | 1 o más           |
// | se ejecuta mínimo? |                   |                   |                   |
// +--------------------+-------------------+-------------------+-------------------+
// | ¿Cuándo evalúa     | Antes (arriba)    | Antes (arriba)    | Después (abajo)   |
// | la condición?      |                   |                   |                   |
// +--------------------+-------------------+-------------------+-------------------+
// | ¿Cuándo usarlo?    | Sabes cuántas     | No sabes cuántas  | Necesitas         |
// |                    | veces repetir     | veces repetir     | ejecutar al       |
// |                    |                   |                   | menos 1 vez       |
// +--------------------+-------------------+-------------------+-------------------+
// | ¿Tiene contador    | Sí (integrado)    | No (manual)       | No (manual)       |
// | integrado?         |                   |                   |                   |
// +--------------------+-------------------+-------------------+-------------------+
// | Sintaxis           | for (init;cond;   | while (cond)      | do { ... }        |
// |                    |      act) { }     | { ... }           | while (cond);     |
// +--------------------+-------------------+-------------------+-------------------+

console.log("\n--- 6. Diferencias entre for, while y do...while ---");
console.log("for → cuando sabes cuántas veces repetir");
console.log("while → cuando NO sabes cuántas veces repetir");
console.log("do...while → cuando necesitas ejecutar al menos 1 vez");


// ------------------------------------------------------------
// 7. CONTADORES
// ------------------------------------------------------------
// Un contador es una variable que incrementa (o decrementa)
// su valor en cada iteración del bucle.
// Se usa para saber en qué iteración estamos o contar elementos.

console.log("\n--- 7. Contadores ---");

// Ejemplo: Contar cuántos números hay entre 1 y 20
let cuenta = 0;
for (let i = 1; i <= 20; i++) {
    cuenta++;
}
console.log("Cantidad de números del 1 al 20: " + cuenta);

// Ejemplo: Contar cuántas vocales tiene una palabra
const palabra = "Bolivia";
let conteoVocales = 0;
for (let i = 0; i < palabra.length; i++) {
    const letra = palabra[i].toLowerCase();
    if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
        conteoVocales++;
    }
}
console.log("La palabra \"" + palabra + "\" tiene " + conteoVocales + " vocales.");

// Ejemplo: Contar estudiantes aprobados y reprobados
const notas = [65, 30, 80, 45, 72, 20, 55, 90, 38, 60];
let aprobados = 0;
let reprobados = 0;
for (let i = 0; i < notas.length; i++) {
    if (notas[i] >= 51) {
        aprobados++;
    } else {
        reprobados++;
    }
}
console.log("\nResultados del curso:");
console.log("Aprobados: " + aprobados);
console.log("Reprobados: " + reprobados);


// ------------------------------------------------------------
// 8. ACUMULADORES
// ------------------------------------------------------------
// Un acumulador es una variable que suma (o concatena) valores
// en cada iteración. A diferencia del contador (que suma 1),
// el acumulador suma valores variables.

console.log("\n--- 8. Acumuladores ---");

// Ejemplo: Calcular la suma de los primeros 10 números
let suma = 0;
for (let i = 1; i <= 10; i++) {
    suma = suma + i;
}
console.log("Suma del 1 al 10: " + suma);

// Ejemplo: Calcular el precio total con IVA
const precios = [35, 50, 120, 80, 200];
const IVA = 0.13;
let subtotal = 0;
for (let i = 0; i < precios.length; i++) {
    subtotal = subtotal + precios[i];
}
const totalConIVA = subtotal * (1 + IVA);
console.log("\nSubtotal: " + subtotal + " Bs");
console.log("IVA (13%): " + (subtotal * IVA).toFixed(2) + " Bs");
console.log("Total: " + totalConIVA.toFixed(2) + " Bs");

// Ejemplo: Calcular el promedio de notas
const calificaciones = [72, 55, 88, 40, 65];
let sumaNotas = 0;
for (let i = 0; i < calificaciones.length; i++) {
    sumaNotas = sumaNotas + calificaciones[i];
}
const promedio = sumaNotas / calificaciones.length;
console.log("\nPromedio de calificaciones: " + promedio);


// ------------------------------------------------------------
// 9. INCREMENTOS Y DECREMENTOS EN BUCLES
// ------------------------------------------------------------
// Los incrementos y decrementos controlan cómo avanza el bucle.

// Formas de incrementar:
// i++       → incrementa de 1 en 1
// i += 2    → incrementa de 2 en 2
// i += 5    → incrementa de 5 en 5
// i = i + 3 → incrementa de 3 en 3

// Formas de decrementar:
// i--       → decrementa de 1 en 1
// i -= 2    → decrementa de 2 en 2

console.log("\n--- 9. Incrementos y decrementos ---");

// Contar de 3 en 3
console.log("Contar de 3 en 3 hasta 30:");
for (let i = 0; i <= 30; i += 3) {
    console.log(i);
}

// Contar de 5 en 5 hacia atrás
console.log("\nContar de 5 en 5 desde 50 hasta 0:");
for (let i = 50; i >= 0; i -= 5) {
    console.log(i);
}

// Múltiplos de 7
console.log("\nMúltiplos de 7 del 1 al 70:");
for (let i = 7; i <= 70; i += 7) {
    console.log(i);
}


// ------------------------------------------------------------
// 10. CONDICIONES DE TERMINACIÓN - EVITAR BUCLES INFINITOS
// ------------------------------------------------------------
// Todo bucle DEBE tener una condición que en algún momento
// sea falsa. Si la condición nunca es falsa, el bucle
// se ejecuta para siempre (bucle infinito) y congela el navegador.

// CAUSAS DE BUCLES INFINITOS:
// 1. Olvidar actualizar la variable de control
//    for (let i = 1; i <= 10; ) { console.log(i); }  // i nunca cambia
//
// 2. Condición siempre verdadera
//    while (true) { console.log("infinito"); }  // nunca para
//
// 3. Variable de control que se mueve en dirección incorrecta
//    for (let i = 1; i <= 10; i--) { }  // i se aleja del límite

console.log("\n--- 10. Condiciones de terminación ---");
console.log("SIEMPRE asegúrate de que la condición del bucle pueda ser falsa.");
console.log("Un bucle infinito congela el navegador y puede cerrarlo.");

// Ejemplo correcto con verificación
let limite = 5;
let contadorSeguro = 0;
while (contadorSeguro < limite) {
    console.log("Iteración " + (contadorSeguro + 1) + " de " + limite);
    contadorSeguro++;
}
console.log("Bucle terminado correctamente.");


// ------------------------------------------------------------
// 11. BREAK - SALIR DE UN BUCLE ANTES DE TIEMPO
// ------------------------------------------------------------
// La palabra clave "break" interrumpe completamente el bucle,
// sin importar si la condición sigue siendo verdadera.

console.log("\n--- 11. break - Salir de un bucle ---");

// Ejemplo: Buscar el primer número divisible por 7 entre 1 y 100
let encontrado = -1;
for (let i = 1; i <= 100; i++) {
    if (i % 7 === 0) {
        encontrado = i;
        console.log("Primer número divisible por 7: " + encontrado);
        break;
    }
}

// Ejemplo: Buscar un nombre en una lista
const estudiantes = ["Ana", "Luis", "María", "Carlos", "Sofía"];
const buscado = "Carlos";
for (let i = 0; i < estudiantes.length; i++) {
    if (estudiantes[i] === buscado) {
        console.log("Estudiante \"" + buscado + "\" encontrado en posición " + i);
        break;
    }
}

// Ejemplo: Simular búsqueda con contraseña
const contraseñaCorrecta = "LaPaz2026";
const intentos = ["abc", "12345", "LaPaz2026", "qwerty", "admin"];
let accesoPermitido = false;
for (let i = 0; i < intentos.length; i++) {
    console.log("Intento " + (i + 1) + ": " + intentos[i]);
    if (intentos[i] === contraseñaCorrecta) {
        console.log("¡Acceso concedido!");
        accesoPermitido = true;
        break;
    }
}
if (!accesoPermitido) {
    console.log("Acceso denegado. Se agotaron los intentos.");
}


// ------------------------------------------------------------
// 12. CONTINUE - SALTAR A LA SIGUIENTE ITERACIÓN
// ------------------------------------------------------------
// La palabra clave "continue" salta el resto de la iteración actual
// y pasa directamente a la siguiente iteración del bucle.

console.log("\n--- 12. continue - Saltar iteraciones ---");

// Ejemplo: Mostrar solo números impares (saltar pares)
console.log("Números impares del 1 al 15:");
for (let i = 1; i <= 15; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(i);
}

// Ejemplo: Saltar el número 13 (supersticioso)
console.log("\nNúmeros del 1 al 15 (sin el 13):");
for (let i = 1; i <= 15; i++) {
    if (i === 13) {
        console.log("→ Saltando el 13...");
        continue;
    }
    console.log(i);
}

// Ejemplo: Procesar solo notas aprobatorias
const notasCurso = [45, 72, 30, 88, 55, 20, 65, 40, 90];
console.log("\nSolo notas aprobatorias (>= 51):");
for (let i = 0; i < notasCurso.length; i++) {
    if (notasCurso[i] < 51) {
        continue;
    }
    console.log("Nota: " + notasCurso[i] + " - Aprobado");
}


// ------------------------------------------------------------
// 13. BUCLES ANIDADOS
// ------------------------------------------------------------
// Un bucle anidado es un bucle dentro de otro bucle.
// El bucle interno se ejecuta completamente por cada iteración
// del bucle externo.

console.log("\n--- 13. Bucles anidados ---");

// Ejemplo: Generar la tabla de multiplicar del 1 al 10
console.log("=== Tablas de multiplicar del 1 al 10 ===");
for (let tabla = 1; tabla <= 10; tabla++) {
    console.log("\n--- Tabla del " + tabla + " ---");
    for (let multiplicador = 1; multiplicador <= 10; multiplicador++) {
        const resultado = tabla * multiplicador;
        console.log(tabla + " x " + multiplicador + " = " + resultado);
    }
}

// Ejemplo: Generar solo la tabla del 7
console.log("\n--- Tabla del 7 ---");
for (let i = 1; i <= 12; i++) {
    console.log("7 x " + i + " = " + (7 * i));
}

// Ejemplo: Mostrar coordenadas (combinaciones de 2 variables)
console.log("\nCombinaciones de dados (1-3, 1-3):");
for (let dado1 = 1; dado1 <= 3; dado1++) {
    for (let dado2 = 1; dado2 <= 3; dado2++) {
        console.log("Dado 1: " + dado1 + " | Dado 2: " + dado2 + " | Suma: " + (dado1 + dado2));
    }
}


// ------------------------------------------------------------
// 14. BUCLES INFINITOS: CAUSAS Y PREVENCIÓN
// ------------------------------------------------------------
// Un bucle infinito ocurre cuando la condición nunca se vuelve falsa.
// El navegador se congela y debes cerrarlo forzosamente.

// ❌ EJEMPLOS DE BUCLES INFINITOS (NO EJECUTAR):
//
// Bucle infinito 1: Variable nunca cambia
// for (let i = 1; i <= 10; ) {
//     console.log(i);
//     // Falta i++ → i siempre es 1
// }
//
// Bucle infinito 2: Condición siempre verdadera
// while (true) {
//     console.log("Esto nunca para");
// }
//
// Bucle infinito 3: Variable se aleja del objetivo
// for (let i = 1; i <= 10; i--) {
//     console.log(i);
//     // i va: 1, 0, -1, -2... nunca llega a ser mayor que 10
// }

// ✅ PREVENCIÓN:
// 1. Siempre actualiza la variable de control
// 2. Verifica que la condición pueda ser falsa eventualmente
// 3. Usa console.log() durante desarrollo para verificar el progreso
// 4. Si el navegador se congela, cierra la pestaña

console.log("\n--- 14. Bucles infinitos ---");
console.log("PREVENCIÓN: Siempre actualiza la variable de control.");
console.log("Si el navegador se congela, cierra la pestaña.");


// ------------------------------------------------------------
// 15. INTRODUCCIÓN A for...of CON CADENAS
// ------------------------------------------------------------
// El bucle for...of permite recorrer fácilmente los caracteres
// de una cadena de texto (y otros elementos iterables).
// Es más simple que el for tradicional para este caso.

console.log("\n--- 15. for...of con cadenas ---");

// Ejemplo: Recorrer cada carácter de una palabra
const ciudad = "Sucre";
console.log("Caracteres de \"" + ciudad + "\":");
for (const letra of ciudad) {
    console.log("→ " + letra);
}

// Ejemplo: Contar vocales con for...of
const frase = "Viva Bolivia";
let contadorA = 0;
let contadorI = 0;
let contadorO = 0;
for (const caracter of frase.toLowerCase()) {
    if (caracter === "a") contadorA++;
    if (caracter === "i") contadorI++;
    if (caracter === "o") contadorO++;
}
console.log("\nVocales en \"" + frase + "\":");
console.log("A: " + contadorA);
console.log("I: " + contadorI);
console.log("O: " + contadorO);

// Ejemplo: Invertir una cadena con for...of
const original = "Paz";
let invertida = "";
for (const caracter of original) {
    invertida = caracter + invertida;
}
console.log("\n\"" + original + "\" invertido es: \"" + invertida + "\"");

// Ejemplo: for...of vs for tradicional
console.log("\nComparación for...of vs for tradicional:");
const saludo = "Hola";

console.log("Con for...of:");
for (const caracter of saludo) {
    console.log(caracter);
}

console.log("Con for tradicional:");
for (let i = 0; i < saludo.length; i++) {
    console.log(saludo[i]);
}


// ------------------------------------------------------------
// 16. BUENAS PRÁCTICAS PARA LEGIBILIDAD
// ------------------------------------------------------------

console.log("\n--- 16. Buenas prácticas ---");

// 1. Usa nombres descriptivos para las variables del bucle
//    MAL:  for (let x = 0; x < 10; x++)
//    BIEN: for (let indice = 0; indice < 10; indice++)

// 2. Usa "i" solo para bucles simples y cortos
//    Para bucles anidados usa nombres más claros:
//    for (let fila = 0; fila < 5; fila++)
//        for (let columna = 0; columna < 5; columna++)

// 3. Mantén el cuerpo del bucle corto y legible

// 4. Evita bucles anidados profundos (más de 2 niveles)

// 5. Siempre incluye una condición de terminación clara

// Ejemplo de buena práctica:
console.log("Ejemplo con nombres descriptivos:");
const temperaturas = [28, 22, 35, 18, 30, 15, 25];
let sumaTemperaturas = 0;
for (let indice = 0; indice < temperaturas.length; indice++) {
    sumaTemperaturas = sumaTemperaturas + temperaturas[indice];
}
const promedioTemp = sumaTemperaturas / temperaturas.length;
console.log("Promedio de temperaturas: " + promedioTemp.toFixed(2) + "°C");

// Ejemplo con bucle anidado con nombres claros
console.log("\nPatón de coordenadas con nombres claros:");
for (let fila = 1; fila <= 3; fila++) {
    let linea = "";
    for (let columna = 1; columna <= 3; columna++) {
        linea = linea + "(" + fila + "," + columna + ") ";
    }
    console.log(linea);
}


// ------------------------------------------------------------
// 17. EJEMPLOS PRÁCTICOS COMBINADOS
// ------------------------------------------------------------

console.log("\n--- 17. Ejemplos prácticos combinados ---");

// Ejemplo A: Dibujar un triángulo de asteriscos
console.log("\nTriángulo de asteriscos (5 filas):");
for (let fila = 1; fila <= 5; fila++) {
    let linea = "";
    for (let asterisco = 1; asterisco <= fila; asterisco++) {
        linea = linea + "*";
    }
    console.log(linea);
}

// Ejemplo B: Dibujar un cuadrado de asteriscos
console.log("\nCuadrado de asteriscos (5x5):");
for (let fila = 1; fila <= 5; fila++) {
    let linea = "";
    for (let columna = 1; columna <= 5; columna++) {
        linea = linea + "* ";
    }
    console.log(linea);
}

// Ejemplo C: Triángulo invertido
console.log("\nTriángulo invertido (5 filas):");
for (let fila = 5; fila >= 1; fila--) {
    let linea = "";
    for (let asterisco = 1; asterisco <= fila; asterisco++) {
        linea = linea + "*";
    }
    console.log(linea);
}

// Ejemplo D: Calcular el factorial de un número
const factorialDe = 6;
let factorial = 1;
for (let i = 1; i <= factorialDe; i++) {
    factorial = factorial * i;
}
console.log("\nEl factorial de " + factorialDe + " es: " + factorial);

// Ejemplo E: Mostrar todos los divisores de un número
const numeroDivisores = 24;
console.log("\nDivisores de " + numeroDivisores + ":");
let divisoresLinea = "";
for (let i = 1; i <= numeroDivisores; i++) {
    if (numeroDivisores % i === 0) {
        divisoresLinea = divisoresLinea + i + " ";
    }
}
console.log(divisoresLinea);

// Ejemplo F: Número primo simple
const numeroPrimo = 17;
let esPrimo = true;
if (numeroPrimo < 2) {
    esPrimo = false;
} else {
    for (let i = 2; i < numeroPrimo; i++) {
        if (numeroPrimo % i === 0) {
            esPrimo = false;
            break;
        }
    }
}
console.log("\n¿El " + numeroPrimo + " es primo? " + (esPrimo ? "Sí" : "No"));


// ------------------------------------------------------------
// 18. EJERCICIO INTEGRADOR FINAL
// ------------------------------------------------------------
// Este ejercicio combina TODO lo aprendido en las lecciones 25-32:
// - console (lección 25)
// - Vinculación HTML (lección 26)
// - Variables y constantes (lección 27)
// - Tipos de datos (lección 28)
// - Operadores (lección 29)
// - Conversión de tipos (lección 30)
// - Condicionales (lección 31)
// - Bucles (lección 32)

console.log("\n============================================");
console.log("  EJERCICIO INTEGRADOR FINAL");
console.log("  Sistema de Reporte de Calificaciones");
console.log("============================================");
console.log("Unidad Educativa: Colegio Mariscal Santa Cruz");
console.log("Ciudad: La Paz, Bolivia");
console.log("Gestión: 2026");

// Datos de estudiantes (simulando información)
const nombreMateria = "Matemáticas";
const profesor = "Prof. Gutiérrez";
const notaMinima = 51;

// Calificaciones de 10 estudiantes
const calificacionesEstudiantes = [
    { nombre: "Ana Martínez", nota: 72 },
    { nombre: "Luis Poma", nota: 45 },
    { nombre: "María Quispe", nota: 88 },
    { nombre: "Carlos Flores", nota: 33 },
    { nombre: "Sofía Vargas", nota: 55 },
    { nombre: "Diego Choque", nota: 91 },
    { nombre: "Valeria Rojas", nota: 48 },
    { nombre: "Jorge Mamani", nota: 67 },
    { nombre: "Camila Torres", nota: 52 },
    { nombre: "Pablo Condori", nota: 29 }
];

// Calcular estadísticas usando bucles
let totalNotas = 0;
let contadorAprobados = 0;
let contadorReprobados = 0;
let notaMasAlta = 0;
let notaMasBaja = 100;
let nombreMejor = "";
let nombrePeor = "";

console.log("\n--- Reporte de calificaciones ---");
console.log("Materia: " + nombreMateria);
console.log("Profesor: " + profesor);
console.log("Nota mínima para aprobar: " + notaMinima);
console.log("\n" + "=".repeat(50));

for (let i = 0; i < calificacionesEstudiantes.length; i++) {
    const estudiante = calificacionesEstudiantes[i];
    const nombre = estudiante.nombre;
    const nota = estudiante.nota;

    totalNotas = totalNotas + nota;

    let estado = "";
    if (nota >= notaMinima) {
        estado = "APROBADO";
        contadorAprobados++;
    } else {
        estado = "REPROBADO";
        contadorReprobados++;
    }

    if (nota > notaMasAlta) {
        notaMasAlta = nota;
        nombreMejor = nombre;
    }

    if (nota < notaMasBaja) {
        notaMasBaja = nota;
        nombrePeor = nombre;
    }

    const numero = (i + 1).toString();
    const posicion = numero.padStart(2, " ");
    console.log(posicion + ". " + nombre.padEnd(20) + " | Nota: " + nota.toString().padStart(3) + " | " + estado);
}

const promedioClase = totalNotas / calificacionesEstudiantes.length;
const totalEstudiantes = calificacionesEstudiantes.length;
const porcentajeAprobados = (contadorAprobados / totalEstudiantes) * 100;

console.log("\n" + "=".repeat(50));
console.log("--- Resumen estadístico ---");
console.log("Total de estudiantes: " + totalEstudiantes);
console.log("Aprobados: " + contadorAprobados + " (" + porcentajeAprobados.toFixed(1) + "%)");
console.log("Reprobados: " + (totalEstudiantes - contadorAprobados) + " (" + (100 - porcentajeAprobados).toFixed(1) + "%)");
console.log("Promedio de la clase: " + promedioClase.toFixed(2));
console.log("Nota más alta: " + notaMasAlta + " (" + nombreMejor + ")");
console.log("Nota más baja: " + notaMasBaja + " (" + nombrePeor + ")");

// Análisis del rendimiento
console.log("\n--- Análisis de rendimiento ---");
if (promedioClase >= 60) {
    console.log("El promedio general es SATISFACTORIO.");
} else if (promedioClase >= 51) {
    console.log("El promedio general es REGULAR. Se recomienda reforzar contenidos.");
} else {
    console.log("El promedio general es BAJO. Se requiere revisión urgente del programa.");
}

if (porcentajeAprobados >= 80) {
    console.log("Más del 80% aprobó. ¡Excelente rendimiento del grupo!");
} else if (porcentajeAprobados >= 50) {
    console.log("Menos del 80% aprobó. Se sugiere tutorías para los reprobados.");
} else {
    console.log("Menos del 50% aprobó. Se recomienda evaluación del método de enseñanza.");
}

// Mostrar los estudiantes que necesitan tutoría
console.log("\n--- Estudiantes que necesitan tutoría ---");
for (let i = 0; i < calificacionesEstudiantes.length; i++) {
    if (calificacionesEstudiantes[i].nota < notaMinima) {
        const distancia = notaMinima - calificacionesEstudiantes[i].nota;
        console.log("→ " + calificacionesEstudiantes[i].nombre + " (nota: " + calificacionesEstudiantes[i].nota + ", le faltan " + distancia + " puntos)");
    }
}

// Mostrar los mejores estudiantes
console.log("\n--- Cuadro de honor ---");
for (let i = 0; i < calificacionesEstudiantes.length; i++) {
    if (calificacionesEstudiantes[i].nota >= 80) {
        console.log("★ " + calificacionesEstudiantes[i].nombre + " - Nota: " + calificacionesEstudiantes[i].nota);
    }
}

console.log("\n" + "=".repeat(50));
console.log("Fin del reporte.");


// ============================================================
// FIN DE LA LECCIÓN
// ============================================================
console.log("\n=== Fin de la lección 32 ===");
console.log("¡Felicidades! Has completado el módulo de JavaScript básico.");
console.log("Has aprendido: consola, variables, tipos de datos, operadores, conversión de tipos, condicionales y bucles.");
