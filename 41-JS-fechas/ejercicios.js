// ============================================================
// EJERCICIOS - LECCION 41: FECHAS EN JAVASCRIPT
// ============================================================
// Ejercicios SIN soluciones. Intenta resolverlos antes de mirar
// las respuestas.


// ------------------------------------------------------------
// EJERCICIO 1 - Mostrar una fecha especifica
// ------------------------------------------------------------

// TITULO: Independencia de Bolivia
//
// ENUNCIADO:
// Crea un objeto Date que represente la independencia de Bolivia
// (6 de agosto de 1825) a las 12:30 del mediodia. Muestra la
// fecha completa en consola.
//
// DATOS:
// Año: 1825, Mes: Agosto (recuerda: 0-indexado), Dia: 6
// Hora: 12:30:00
//
// RESULTADO ESPERADO:
// Debe mostrar un objeto Date valido representando el 6 de agosto de 1825
//
// CONCEPTOS: Constructor de Date con valores especificos, meses indexados desde cero


// ------------------------------------------------------------
// EJERCICIO 2 - Obtener componentes de una fecha
// ------------------------------------------------------------

// TITULO: Datos de nacimiento
//
// ENUNCIADO:
// Dado el siguiente objeto Date que representa una fecha de
// nacimiento, extrae y muestra: el año, el mes (como numero del 1 al 12),
// y el dia del mes.
//
// DATOS:
const fechaNacimiento = new Date(2005, 8, 20);
//
// RESULTADO ESPERADO:
// Debe mostrar:
// Año: 2005
// Mes: 9
// Dia: 20
//
// CONCEPTOS: getFullYear(), getMonth(), getDate(), conversion de mes 0-11 a 1-12


// ------------------------------------------------------------
// EJERCICIO 3 - Mostrar dia de la semana
// ------------------------------------------------------------

// TITULO: ¿Que dia fue?
//
// ENUNCIADO:
// Dado el siguiente objeto Date, determina que dia de la semana
// corresponde (Lunes, Martes, Miercoles, etc.) y muestra el
// resultado en consola.
//
// DATOS:
const fechaEvento = new Date(2026, 9, 15);
//
// RESULTADO ESPERADO:
// Debe mostrar el nombre del dia de la semana (ej: "Jueves")
//
// CONCEPTOS: getDay(), array de nombres de dias, conversion de indice a nombre


// ------------------------------------------------------------
// EJERCICIO 4 - Comparar dos fechas
// ------------------------------------------------------------

// TITULO: ¿Cual es antes?
//
// ENUNCIADO:
// Dadas las siguientes dos fechas, compara y muestra cual ocurre
// primero (es anterior). Si son la misma fecha, indicalo.
//
// DATOS:
const fechaA = new Date(2026, 3, 15);
const fechaB = new Date(2026, 2, 20);
//
// RESULTADO ESPERADO:
// Debe mostrar que fechaB es anterior a fechaA
//
// CONCEPTOS: Comparacion de fechas con < >, obtencion de timestamps


// ------------------------------------------------------------
// EJERCICIO 5 - Formatear fecha en español
// ------------------------------------------------------------

// TITULO: Fecha legible
//
// ENUNCIADO:
// Dado el siguiente objeto Date, formatealo para mostrarlo en
// español con el formato: "6 de Agosto de 1825"
// Usa Intl.DateTimeFormat o toLocaleDateString con la configuracion
// regional apropiada.
//
// DATOS:
const fechaHistorica = new Date(1825, 7, 6);
//
// RESULTADO ESPERADO:
// Debe mostrar algo como: "6 de agosto de 1825"
//
// CONCEPTOS: Intl.DateTimeFormat, toLocaleDateString, opciones de formato


// ------------------------------------------------------------
// EJERCICIO 6 - Calcular dias entre dos fechas
// ------------------------------------------------------------

// TITULO: Duracion del semestre
//
// ENUNCIADO:
// Calcula cuantos dias hay entre las siguientes dos fechas
// (inicio y fin de semestre). Convierte la diferencia de
// milisegundos a dias.
//
// NOTA: Para evitar problemas con el horario de verano, usa
// fechas a mediodia (12:00:00) o redondea el resultado.
//
// DATOS:
const inicioSemestre = new Date(2026, 2, 1, 12, 0, 0);
const finSemestre = new Date(2026, 6, 31, 12, 0, 0);
//
// RESULTADO ESPERADO:
// Debe mostrar aproximadamente 152 dias (o 151-153 dependiendo del DST)
//
// CONCEPTOS: Diferencia de timestamps, conversion de milisegundos a dias


// ------------------------------------------------------------
// EJERCICIO 7 - Detectar fecha invalida
// ------------------------------------------------------------

// TITULO: Validar fecha
//
// ENUNCIADO:
// Crea una funcion llamada esFechaValida que reciba un objeto
// Date y retorne true si la fecha es valida, o false si es
// invalida (Invalid Date). Prueba la funcion con las siguientes
// fechas.
//
// DATOS:
const fecha1 = new Date(2026, 5, 15);
const fecha2 = new Date(2026, 13, 45);
const fecha3 = new Date(2005, 2, 20);
//
// RESULTADO ESPERADO:
// esFechaValida(fecha1) -> true
// esFechaValida(fecha2) -> false
// esFechaValida(fecha3) -> true
//
// CONCEPTOS: isNaN(), getTime(), validacion de fechas


// ------------------------------------------------------------
// EJERCICIO 8 - Determinar cual evento ocurre primero
// ------------------------------------------------------------

// TITULO: Ordenar eventos
//
// ENUNCIADO:
// Dado el siguiente array de objetos con eventos y sus fechas,
// determina cual evento ocurre primero y cual ocurre ultimo.
// Muestra los nombres de los eventos en consola.
//
// DATOS:
const eventos = [
    { nombre: "Feria de ciencias", fecha: new Date(2026, 4, 20) },
    { nombre: "Inicio de clases", fecha: new Date(2026, 2, 1) },
    { nombre: "Examen final", fecha: new Date(2026, 6, 15) },
    { nombre: "Receso", fecha: new Date(2026, 3, 10) }
];
//
// RESULTADO ESPERADO:
// Primer evento: "Inicio de clases"
// Ultimo evento: "Examen final"
//
// CONCEPTOS: Comparacion de fechas, iteracion sobre array de objetos
