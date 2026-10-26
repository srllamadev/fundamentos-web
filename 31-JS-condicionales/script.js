// =============================================
// LECCIÓN 31 - ESTRUCTURAS CONDICIONALES
// =============================================

// =============================================
// 1. ¿QUÉ ES UNA CONDICIÓN?
// =============================================
// Una condición es una expresión que se evalúa como verdadera (true)
// o falsa (false). Según el resultado, decidimos qué código ejecutar.
//
// Ejemplo cotidiano: "Si llueve, llevo paraguas; si no, no llevo"

console.log("--- 1. ¿Qué es una condición? ---");
console.log("Una condición es una pregunta con respuesta verdadero/falso");

// =============================================
// 2. REPASO: EXPRESIONES BOOLEANAS
// =============================================
// Las expresiones booleanas producen un valor true o false

console.log("\n--- 2. Expresiones booleanas ---");

const edad = 20;
console.log("edad > 18:", edad > 18);         // true
console.log("edad < 18:", edad < 18);         // false
console.log("edad === 20:", edad === 20);     // true
console.log("edad !== 20:", edad !== 20);     // false

const nombre = "María";
console.log('nombre === "María":', nombre === "María"); // true

// =============================================
// 3. LA ESTRUCTURA if
// =============================================
// Sintaxis:
//   if (condición) {
//       // código que se ejecuta si la condición es true
//   }

console.log("\n--- 3. La estructura if ---");

const temperatura = 35;

if (temperatura > 30) {
    console.log("Hace mucho calor en Santa Cruz!");
}

// Ejemplo: verificar si alguien es mayor de edad (18+ en Bolivia)
const edadPersona = 22;

if (edadPersona >= 18) {
    console.log("La persona es mayor de edad, puede obtener su libreta del SELA");
}

// =============================================
// 4. LA ESTRUCTURA if...else
// =============================================
// Sintaxis:
//   if (condición) {
//       // código si es true
//   } else {
//       // código si es false
//   }

console.log("\n--- 4. La estructura if...else ---");

const saldo = 50;

if (saldo > 0) {
    console.log("Tienes saldo disponible: Bs.", saldo);
} else {
    console.log("No tienes saldo disponible");
}

// Ejemplo: verificar acceso a un evento
const edadAcceso = 16;

if (edadAcceso >= 18) {
    console.log("Puedes ingresar al evento");
} else {
    console.log("Lo siento, necesitas ser mayor de 18 para ingresar");
}

// =============================================
// 5. LA ESTRUCTURA if...else if...else
// =============================================
// Sintaxis:
//   if (condición1) {
//       // código si condición1 es true
//   } else if (condición2) {
//       // código si condición2 es true
//   } else {
//       // código si ninguna condición anterior fue true
//   }

console.log("\n--- 5. La estructura if...else if...else ---");

// Ejemplo: Clasificar un número como positivo, negativo o cero
const numero = 7;

if (numero > 0) {
    console.log("El número es positivo");
} else if (numero < 0) {
    console.log("El número es negativo");
} else {
    console.log("El número es cero");
}

// Ejemplo: Clasificación de temperatura
const tempActual = 15;

if (tempActual < 10) {
    console.log("Hace frío, abrígate con una chompa");
} else if (tempActual < 25) {
    console.log("El clima está agradable");
} else {
    console.log("Hace calor, busca un lugar con sombra");
}

// =============================================
// 6. CONDICIONES ANIDADAS
// =============================================
// Podemos colocar un if dentro de otro if

console.log("\n--- 6. Condiciones anidadas ---");

const edadEstudiante = 19;
const tieneCarnet = true;

if (edadEstudiante >= 18) {
    if (tieneCarnet) {
        console.log("Puede ingresar al parqueo universitario");
    } else {
        console.log("Necesita obtener su carnet estudiantil primero");
    }
} else {
    console.log("Aún no tienes la edad mínima");
}

// =============================================
// 7. COMBINACIÓN DE OPERADORES LÓGICOS
// =============================================
// && (AND): ambas condiciones deben ser verdaderas
// || (OR): al menos una condición debe ser verdadera
// !  (NOT): invierte el valor de la condición

console.log("\n--- 7. Combinación de operadores lógicos ---");

const nota = 75;
const asistencia = 85;

// AND (&&): necesita nota Y asistencia suficientes
if (nota >= 51 && asistencia >= 80) {
    console.log("Estudiante aprobado: nota", nota, "y asistencia", asistencia + "%");
} else {
    console.log("Estudiante no aprobado");
}

// OR (||): necesita alguno de los dos requisitos
const tieneBeca = false;
const tieneDescuento = true;

if (tieneBeca || tieneDescuento) {
    console.log("Tiene derecho a descuento en la matrícula");
}

// NOT (!): invierte una condición
const esFinDeSemana = false;

if (!esFinDeSemana) {
    console.log("Es día laboral, hay clases en la UMSA");
}

// Ejemplo complejo: sistema de descuentos por compra
const montoCompra = 350;
const esClienteFrecuente = true;

if (montoCompra >= 500 && esClienteFrecuente) {
    console.log("Descuento del 20% aplicado. Total: Bs.", montoCompra * 0.8);
} else if (montoCompra >= 500 || esClienteFrecuente) {
    console.log("Descuento del 10% aplicado. Total: Bs.", montoCompra * 0.9);
} else {
    console.log("Sin descuento. Total: Bs.", montoCompra);
}

// =============================================
// 8. LA ESTRUCTURA switch
// =============================================
// Sintaxis:
//   switch (expresión) {
//       case valor1:
//           // código si expresión === valor1
//           break;
//       case valor2:
//           // código si expresión === valor2
//           break;
//       default:
//           // código si ningún caso coincide
//   }

console.log("\n--- 8. La estructura switch ---");

// Ejemplo: identificar el día de la semana
const diaNumero = 3;

switch (diaNumero) {
    case 1:
        console.log("Lunes: empieza la semana");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miércoles: mitad de semana");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes: casi fin de semana");
        break;
    case 6:
        console.log("Sábado: fin de semana");
        break;
    case 7:
        console.log("Domingo: descanso");
        break;
    default:
        console.log("Número de día inválido");
}

// =============================================
// 9. USO DE case
// =============================================
// Cada case compara con === (igualdad estricta)
// Múltiples cases pueden compartir el mismo bloque

console.log("\n--- 9. Uso de case ---");

const mes = 7;

switch (mes) {
    case 12:
    case 1:
    case 2:
        console.log("Verano en Bolivia");
        break;
    case 3:
    case 4:
    case 5:
        console.log("Otoño en Bolivia");
        break;
    case 6:
    case 7:
    case 8:
        console.log("Invierno en Bolivia");
        break;
    case 9:
    case 10:
    case 11:
        console.log("Primavera en Bolivia");
        break;
    default:
        console.log("Mes inválido");
}
// Salida: "Invierno en Bolivia"

// =============================================
// 10. USO DE break
// =============================================
// break detiene la ejecución del switch
// Sin break, se ejecutan los casos siguientes (fall-through)

console.log("\n--- 10. Uso de break ---");

const opcion = "A";

// Ejemplo SIN break (fall-through - no deseado generalmente)
console.log("Sin break:");
switch (opcion) {
    case "A":
        console.log("  Excelente");
    // No hay break, continúa al siguiente case
    case "B":
        console.log("  Bueno");
    case "C":
        console.log("  Regular");
    default:
        console.log("  Fin");
}
// Salida: Excelente, Bueno, Regular, Fin

// Ejemplo CON break (comportamiento correcto)
console.log("Con break:");
switch (opcion) {
    case "A":
        console.log("  Excelente");
        break;
    case "B":
        console.log("  Bueno");
        break;
    case "C":
        console.log("  Regular");
        break;
    default:
        console.log("  Fin");
}
// Salida: Excelente

// =============================================
// 11. USO DE default
// =============================================
// default se ejecuta cuando ningún case coincide
// Es como el else del switch

console.log("\n--- 11. Uso de default ---");

const operacion = "dividir";
const num1 = 20;
const num2 = 4;

switch (operacion) {
    case "sumar":
        console.log("Resultado:", num1 + num2);
        break;
    case "restar":
        console.log("Resultado:", num1 - num2);
        break;
    case "multiplicar":
        console.log("Resultado:", num1 * num2);
        break;
    case "dividir":
        console.log("Resultado:", num1 / num2);
        break;
    default:
        console.log("Operación no reconocida");
}
// Salida: Resultado: 5

// =============================================
// 12. EL OPERADOR TERNARIO
// =============================================
// Sintaxis: condición ? valorSiVerdadero : valorSiFalso
// Es una forma corta de escribir if...else simple

console.log("\n--- 12. El operador ternario ---");

const edadTernaria = 20;
const estado = edadTernaria >= 18 ? "Mayor de edad" : "Menor de edad";
console.log("Estado:", estado);

// Equivalente con if...else:
// if (edadTernaria >= 18) {
//     estado = "Mayor de edad";
// } else {
//     estado = "Menor de edad";
// }

// Otro ejemplo
const puntuacion = 85;
const resultado = puntuacion >= 51 ? "Aprobado" : "Reprobado";
console.log("Puntuación:", puntuacion, "- Resultado:", resultado);

// Ejemplo con mensaje
const saldoCuenta = 1500;
const mensaje = saldoCuenta > 0
    ? "Saldo disponible: Bs." + saldoCuenta
    : "Saldo insuficiente";
console.log(mensaje);

// =============================================
// 13. ¿CUÁNDO USAR if Y CUÁNDO USAR switch?
// =============================================

console.log("\n--- 13. if vs switch ---");

// USAR if cuando:
// - Las condiciones son rangos (mayor que, menor que)
// - Las condiciones son complejas o combinadas
// - Necesitas evaluar diferentes variables

// USAR switch cuando:
// - Comparas una misma variable contra valores específicos
// - Tienes muchos valores posibles discretos
// - El código queda más legible que muchos else if

// Ejemplo con if (rangos)
const notaFinal = 72;

if (notaFinal >= 90) {
    console.log("Calificación: A (Excelente)");
} else if (notaFinal >= 80) {
    console.log("Calificación: B (Muy bueno)");
} else if (notaFinal >= 70) {
    console.log("Calificación: C (Bueno)");
} else if (notaFinal >= 60) {
    console.log("Calificación: D (Suficiente)");
} else {
    console.log("Calificación: F (Reprobado)");
}

// Ejemplo con switch (valores específicos)
const letra = "B";

switch (letra) {
    case "A":
        console.log("Excelente - 90 a 100");
        break;
    case "B":
        console.log("Muy bueno - 80 a 89");
        break;
    case "C":
        console.log("Bueno - 70 a 79");
        break;
    case "D":
        console.log("Suficiente - 60 a 69");
        break;
    case "F":
        console.log("Reprobado - menos de 60");
        break;
    default:
        console.log("Calificación no válida");
}

// =============================================
// 14. BUENAS PRÁCTICAS
// =============================================

console.log("\n--- 14. Buenas prácticas ---");

// 1. Usa === en lugar de ==
const valor1 = 5;
const valor2 = "5";

// MALO: == convierte tipos antes de comparar
if (valor1 == valor2) {
    console.log("Con == son iguales (no usar)");
}

// BUENO: === compara valor Y tipo
if (valor1 !== valor2) {
    console.log("Con === son diferentes (correcto)");
}

// 2. Usa nombres descriptivos para las condiciones
const MINIMO_APROBACION = 51;
const notaEstudiante = 65;

if (notaEstudiante >= MINIMO_APROBACION) {
    console.log("Estudiante aprobado con:", notaEstudiante);
}

// 3. Mantén las condiciones simples
// MALO: condición muy compleja en una línea
// if (a > 5 && b < 10 || c === 0 && d !== "") { ... }

// BUENO: divide en variables con nombres claros
const esMayorQueCinco = valor1 > 5;
const cumpleRequisitos = notaEstudiante >= MINIMO_APROBACION;

if (esMayorQueCinco && cumpleRequisitos) {
    console.log("Se cumplen todas las condiciones");
}

// 4. No anides demasiados ifs (máximo 2-3 niveles)
// 5. Usa switch cuando tengas 3 o más casos para el mismo valor
// 6. Siempre incluye el default en switch

// =============================================
// 15. ERRORES COMUNES EN CONDICIONES
// =============================================

console.log("\n--- 15. Errores comunes ---");

// ERROR 1: Usar = en lugar de ===
// MALO:
// if (edad = 18) { ... }  // Esto asigna 18 a edad, no compara!

// BUENO:
// if (edad === 18) { ... }  // Esto compara

// ERROR 2: Olvidar las llaves {}
const valor = 10;

// MALO (puede causar bugs):
// if (valor > 5)
//     console.log("Mayor");
//     console.log("Esto siempre se ejecuta"); // Bug!

// BUENO:
if (valor > 5) {
    console.log("Mayor que 5 (con llaves)");
}

// ERROR 3: No usar break en switch (fall-through accidental)
// Ya demostrado en la sección 10

// ERROR 4: Comparar con == en lugar de ===
// Ya demostrado en la sección 14

// ERROR 5: Condiciones siempre verdaderas o falsas
// if (true) { ... }  // Siempre se ejecuta
// if (1 === 1) { ... } // Siempre se ejecuta

// ERROR 6: No cubrir todos los casos en switch (olvidar default)
// switch (valor) {
//     case 1: ...
//     case 2: ...
//     // Falta default!
// }

// =============================================
// EJEMPLO INTEGRADOR: Sistema de clasificación de notas
// =============================================

console.log("\n--- Ejemplo integrador: Clasificación de notas ---");

const notaEstudiante2 = 78;
const nombreEstudiante = "Juan";

// Clasificación según nota numérica
let calificacion;

if (notaEstudiante2 >= 90) {
    calificacion = "A";
} else if (notaEstudiante2 >= 80) {
    calificacion = "B";
} else if (notaEstudiante2 >= 70) {
    calificacion = "C";
} else if (notaEstudiante2 >= 60) {
    calificacion = "D";
} else {
    calificacion = "F";
}

// Mensaje según calificación
switch (calificacion) {
    case "A":
        console.log(nombreEstudiante + ": Excelente trabajo!");
        break;
    case "B":
        console.log(nombreEstudiante + ": Muy buen desempeño!");
        break;
    case "C":
        console.log(nombreEstudiante + ": Buen trabajo, puedes mejorar.");
        break;
    case "D":
        console.log(nombreEstudiante + ": Necesitas reforzar algunos temas.");
        break;
    case "F":
        console.log(nombreEstudiante + ": Debes recursar la materia.");
        break;
    default:
        console.log("Calificación no válida");
}

// Uso del ternario para un mensaje rápido
const estadoFinal = notaEstudiante2 >= 51 ? "APROBADO" : "REPROBADO";
console.log("Estado final:", estadoFinal);

console.log("\n--- Fin de la lección 31 ---");
