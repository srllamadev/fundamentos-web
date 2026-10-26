// ============================================================
// LECCION 41 - FECHAS EN JAVASCRIPT
// ============================================================

// ------------------------------------------------------------
// 1. QUE ES DATE?
// ------------------------------------------------------------

// Date es un objeto integrado en JavaScript que te permite trabajar
// con fechas y horas. Puedes crear, manipular y formatear fechas.

// Fecha actual (cuando se ejecuta el codigo)
const fechaActual = new Date();
console.log("Fecha actual:", fechaActual);


// ------------------------------------------------------------
// 2. CREACION DE FECHAS CON new Date()
// ------------------------------------------------------------

// new Date() sin argumentos crea una fecha con el momento actual
const ahora = new Date();
console.log("Momento actual:", ahora);

// new Date(0) representa el 1 de enero de 1970 00:00:00 UTC
const epoch = new Date(0);
console.log("Epoch (inicio de tiempo Unix):", epoch);


// ------------------------------------------------------------
// 3. FECHAS CON VALORES ESPECIFICOS
// ------------------------------------------------------------

// Puedes crear fechas pasando valores especificos
// Formato: new Date(año, mes, dia, horas, minutos, segundos, milisegundos)

const fechaIndependencia = new Date(1825, 7, 6, 12, 30, 0);
console.log("Independencia de Bolivia:", fechaIndependencia);

const finDeClase = new Date(2026, 11, 31, 18, 0, 0);
console.log("Fin de clase:", finDeClase);


// ------------------------------------------------------------
// 4. MESES INDEXADOS DESDE CERO
// ------------------------------------------------------------

// IMPORTANTE: Los meses en el constructor numerico van de 0 a 11
// 0 = Enero, 1 = Febrero, ..., 11 = Diciembre

const enero = new Date(2026, 0, 15);  // 15 de Enero de 2026
const agosto = new Date(2026, 7, 6);  // 6 de Agosto de 2026
const diciembre = new Date(2026, 11, 25); // 25 de Diciembre de 2026

console.log("Enero:", enero);
console.log("Agosto:", agosto);
console.log("Diciembre:", diciembre);

// Si pasas 12 o mas, se convierte al siguiente año
const fechaExtrana = new Date(2026, 12, 1);  // Se convierte en 1 de Enero de 2027
console.log("Mes 12 se convierte a:", fechaExtrana);


// ------------------------------------------------------------
// 5. getFullYear() - OBTENER AÑO
// ------------------------------------------------------------

// Devuelve el año de la fecha como numero de 4 digitos

const nacimiento = new Date(2005, 2, 15);
const añoNacimiento = nacimiento.getFullYear();
console.log("Año de nacimiento:", añoNacimiento);

const añoActual = ahora.getFullYear();
console.log("Año actual:", añoActual);


// ------------------------------------------------------------
// 6. getMonth() - OBTENER MES
// ------------------------------------------------------------

// Devuelve el mes como numero de 0 a 11
// 0 = Enero, 1 = Febrero, ..., 11 = Diciembre

const mesNacimiento = nacimiento.getMonth();
console.log("Mes de nacimiento (0-11):", mesNacimiento);

// Para mostrar el nombre del mes, puedes usar un array:
const nombresMeses = [
    "Enero", "Febrero", "Marzo", "Abril",
    "Mayo", "Junio", "Julio", "Agosto",
    "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

const nombreMes = nombresMeses[mesNacimiento];
console.log("Mes de nacimiento:", nombreMes);


// ------------------------------------------------------------
// 7. getDate() - OBTENER DIA DEL MES
// ------------------------------------------------------------

// Devuelve el dia del mes (1 a 31)

const diaNacimiento = nacimiento.getDate();
console.log("Dia de nacimiento:", diaNacimiento);

const diaActual = ahora.getDate();
console.log("Dia actual:", diaActual);


// ------------------------------------------------------------
// 8. getDay() - OBTENER DIA DE LA SEMANA
// ------------------------------------------------------------

// Devuelve el dia de la semana como numero de 0 a 6
// 0 = Domingo, 1 = Lunes, ..., 6 = Sabado

const diaSemanaNacimiento = nacimiento.getDay();
console.log("Dia de la semana (0-6):", diaSemanaNacimiento);

const nombresDias = [
    "Domingo", "Lunes", "Martes", "Miercoles",
    "Jueves", "Viernes", "Sabado"
];

const nombreDia = nombresDias[diaSemanaNacimiento];
console.log("Dia de la semana:", nombreDia);

// Ejemplo: ¿Que dia de la semana fue el 6 de agosto de 1825?
const diaIndependencia = fechaIndependencia.getDay();
console.log("La independencia fue en:", nombresDias[diaIndependencia]);


// ------------------------------------------------------------
// 9. getHours(), getMinutes(), getSeconds()
// ------------------------------------------------------------

// Devuelven las horas, minutos y segundos de la fecha

const horas = ahora.getHours();
const minutos = ahora.getMinutes();
const segundos = ahora.getSeconds();

console.log("Hora actual:", horas + ":" + minutos + ":" + segundos);
console.log("Horas:", horas);
console.log("Minutos:", minutos);
console.log("Segundos:", segundos);


// ------------------------------------------------------------
// 10. getTime() - OBTENER MILISEGUNDOS DESDE EPOCH
// ------------------------------------------------------------

// Devuelve el numero de milisegundos desde el 1 de enero de 1970 00:00:00 UTC
// Este es el "timestamp" de la fecha

const timestamp = ahora.getTime();
console.log("Milisegundos desde epoch:", timestamp);

// Tambien puedes obtener el timestamp de una fecha especifica
const timestampIndependencia = fechaIndependencia.getTime();
console.log("Timestamp de independencia:", timestampIndependencia);


// ------------------------------------------------------------
// 11. Date.now() - TIMESTAMP ACTUAL
// ------------------------------------------------------------

// Devuelve el numero de milisegundos desde epoch hasta el momento actual
// Es mas rapido que crear un objeto Date completo

const timestampActual = Date.now();
console.log("Timestamp actual:", timestampActual);

// Util para medir tiempo de ejecucion
const inicio = Date.now();
// ... codigo que quieres medir ...
const fin = Date.now();
const duracion = fin - inicio;
console.log("Tiempo de ejecucion:", duracion, "milisegundos");


// ------------------------------------------------------------
// 12. setFullYear(), setMonth(), setDate()
// ------------------------------------------------------------

// Puedes modificar componentes de una fecha existente

const fechaEvento = new Date(2026, 0, 15);
console.log("Fecha original:", fechaEvento);

// Cambiar el año
fechaEvento.setFullYear(2027);
console.log("Despues de cambiar año:", fechaEvento);

// Cambiar el mes (recuerda: 0-indexado)
fechaEvento.setMonth(5); // Junio
console.log("Despues de cambiar mes:", fechaEvento);

// Cambiar el dia
fechaEvento.setDate(20);
console.log("Despues de cambiar dia:", fechaEvento);

// IMPORTANTE: Los metodos set modifican el objeto original
// Si necesitas preservar la fecha original, crea una copia primero


// ------------------------------------------------------------
// 13. COMPARACION DE FECHAS
// ------------------------------------------------------------

// Puedes usar los operadores <, >, <=, >=, ===, !==

const fecha1 = new Date(2026, 0, 15);
const fecha2 = new Date(2026, 5, 20);
const fecha3 = new Date(2026, 0, 15);

console.log("fecha1:", fecha1);
console.log("fecha2:", fecha2);
console.log("fecha3:", fecha3);

console.log("¿fecha1 es anterior a fecha2?", fecha1 < fecha2);
console.log("¿fecha1 es posterior a fecha2?", fecha1 > fecha2);
console.log("¿fecha1 es igual a fecha3?", fecha1 === fecha3);

// Para comparar si dos fechas representan el mismo momento,
// debes comparar sus timestamps
console.log("¿Mismo momento?", fecha1.getTime() === fecha3.getTime());


// ------------------------------------------------------------
// 14. DIFERENCIAS ENTRE MARCAS DE TIEMPO
// ------------------------------------------------------------

// Puedes restar fechas para obtener la diferencia en milisegundos

const inicioSemestre = new Date(2026, 2, 1);  // 1 de marzo
const finSemestre = new Date(2026, 6, 31);    // 31 de julio

const diferenciaMs = finSemestre - inicioSemestre;
console.log("Diferencia en milisegundos:", diferenciaMs);

// Convertir a dias dividiendo por milisegundos en un dia
const msEnUnDia = 1000 * 60 * 60 * 24;
const diferenciaDias = diferenciaMs / msEnUnDia;
console.log("Diferencia en dias:", diferenciaDias);

// NOTA IMPORTANTE: Esta division puede no dar un numero exacto de dias
// debido al horario de verano (DST). Para calculos precisos de dias
// calendario, considera usar fechas a mediodia o ajustar manualmente


// ------------------------------------------------------------
// 15. INTRODUCCION A MILISEGUNDOS
// ------------------------------------------------------------

// Un milisegundo es una milesima parte de un segundo (1/1000)
// JavaScript trabaja con fechas en milisegundos desde epoch

const unSegundo = 1000;
const unMinuto = unSegundo * 60;
const unaHora = unMinuto * 60;
const unDia = unaHora * 24;
const unaSemana = unDia * 7;

console.log("Milisegundos en un segundo:", unSegundo);
console.log("Milisegundos en un minuto:", unMinuto);
console.log("Milisegundos en una hora:", unaHora);
console.log("Milisegundos en un dia:", unDia);
console.log("Milisegundos en una semana:", unaSemana);

// Ejemplo: ¿Cuantos dias han pasado desde el epoch?
const diasDesdeEpoch = Date.now() / unDia;
console.log("Dias desde epoch:", Math.floor(diasDesdeEpoch));


// ------------------------------------------------------------
// 16. toISOString() - FORMATO ISO
// ------------------------------------------------------------

// Devuelve la fecha en formato ISO 8601: YYYY-MM-DDTHH:mm:ss.sssZ
// El "Z" al final indica UTC (tiempo coordinado universal)

const isoString = ahora.toISOString();
console.log("Formato ISO:", isoString);

const isoIndependencia = fechaIndependencia.toISOString();
console.log("Independencia en ISO:", isoIndependencia);

// Este formato es estandar y util para almacenamiento y APIs
const fechaDesdeISO = new Date("2026-08-06T12:30:00.000Z");
console.log("Fecha desde ISO:", fechaDesdeISO);


// ------------------------------------------------------------
// 17. toLocaleDateString() - FECHA EN FORMATO LOCAL
// ------------------------------------------------------------

// Devuelve la fecha formateada segun la configuracion regional

const fechaLocal = ahora.toLocaleDateString();
console.log("Fecha local (configuracion del navegador):", fechaLocal);

// Puedes especificar una configuracion regional
const fechaEspanol = ahora.toLocaleDateString("es-BO");
console.log("Fecha en español (Bolivia):", fechaEspanol);

const fechaUSA = ahora.toLocaleDateString("en-US");
console.log("Fecha en ingles (EEUU):", fechaUSA);


// ------------------------------------------------------------
// 18. toLocaleTimeString() - HORA EN FORMATO LOCAL
// ------------------------------------------------------------

// Devuelve solo la hora formateada segun la configuracion regional

const horaLocal = ahora.toLocaleTimeString();
console.log("Hora local:", horaLocal);

const horaEspanol = ahora.toLocaleTimeString("es-BO");
console.log("Hora en español:", horaEspanol);

const horaUSA = ahora.toLocaleTimeString("en-US");
console.log("Hora en ingles:", horaUSA);


// ------------------------------------------------------------
// 19. Intl.DateTimeFormat - FORMATEO AVANZADO
// ------------------------------------------------------------

// Intl.DateTimeFormat permite un control mas preciso del formato

const opciones = {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long"
};

const formateador = new Intl.DateTimeFormat("es-BO", opciones);
const fechaFormateada = formateador.format(ahora);
console.log("Fecha formateada avanzada:", fechaFormateada);

// Ejemplo: Formatear la independencia
const fechaIndepFormateada = formateador.format(fechaIndependencia);
console.log("Independencia formateada:", fechaIndepFormateada);

// Puedes reutilizar el formateador para muchas fechas
const eventos = [
    new Date(2026, 7, 6),
    new Date(2026, 9, 12),
    new Date(2026, 11, 25)
];

console.log("Eventos del año:");
for (let i = 0; i < eventos.length; i++) {
    console.log("  " + formateador.format(eventos[i]));
}


// ------------------------------------------------------------
// 20. HORA LOCAL VS UTC
// ------------------------------------------------------------

// Las fechas en JavaScript tienen dos componentes:
// - Hora local (tu zona horaria)
// - UTC (tiempo coordinado universal, antes GMT)

// Metodos UTC (getUTCFullYear, getUTCMonth, etc.)
const añoUTC = ahora.getUTCFullYear();
const mesUTC = ahora.getUTCMonth();
const diaUTC = ahora.getUTCDate();
const horaUTC = ahora.getUTCHours();

console.log("Fecha local - Año:", ahora.getFullYear(), "Mes:", ahora.getMonth(), "Dia:", ahora.getDate());
console.log("Fecha UTC - Año:", añoUTC, "Mes:", mesUTC, "Dia:", diaUTC);
console.log("Hora UTC:", horaUTC);

// Bolivia esta en UTC-4, por lo que la hora local es 4 horas menos que UTC
// Cuando es medianoche UTC, en Bolivia son las 8pm del dia anterior


// ------------------------------------------------------------
// 21. FECHAS INVALIDAS
// ------------------------------------------------------------

// Si creas una fecha con valores invalidos, obtendras "Invalid Date"

const fechaInvalida = new Date(2026, 13, 45);  // Mes 13 y dia 45 no existen
console.log("Fecha invalida:", fechaInvalida);

// Puedes verificar si una fecha es valida usando isNaN
const esInvalida = isNaN(fechaInvalida.getTime());
console.log("¿Es invalida?", esInvalida);

const fechaValida = new Date(2026, 5, 15);
const esValida = !isNaN(fechaValida.getTime());
console.log("¿Es valida?", esValida);


// ------------------------------------------------------------
// 22. PROBLEMAS COMUNES CON CADENAS DE FECHAS
// ------------------------------------------------------------

// CUIDADO: new Date("YYYY-MM-DD") se interpreta como UTC, no como hora local

const fechaUTC = new Date("2026-08-06");
console.log("Fecha desde cadena UTC:", fechaUTC);
console.log("En Bolivia puede mostrarse como dia anterior dependiendo de la hora");

// Esto puede causar confusion porque:
// - En UTC es 6 de agosto a medianoche
// - En Bolivia (UTC-4) es 5 de agosto a 8pm

// Para evitar este problema, usa el constructor con numeros:
const fechaLocalIndependencia = new Date(2026, 7, 6);  // Mes 7 = Agosto
console.log("Independencia (hora local):", fechaLocalIndependencia);

// O especifica la hora explicitamente en UTC si es necesario:
const fechaUTCExplicita = new Date("2026-08-06T12:00:00.000Z");
console.log("Fecha UTC explicita:", fechaUTCExplicita);


// ------------------------------------------------------------
// 23. BUENAS PRACTICAS
// ------------------------------------------------------------

// 1. Usa const por defecto, let solo si necesitas reasignar
const fechaNacimiento = new Date(2005, 2, 15);
// fechaNacimiento = new Date(); // ERROR si usas const

// 2. Para fechas fijas, usa el constructor numerico (no cadenas)
const buenEjemplo = new Date(2026, 7, 6);  // Claro y sin ambiguedades

// 3. Recuerda que los meses son 0-indexados en el constructor numerico
const agostoCorrecto = new Date(2026, 7, 6);  // 7 = Agosto

// 4. Valida fechas antes de usarlas
function esFechaValida(fecha) {
    return fecha instanceof Date && !isNaN(fecha.getTime());
}

const prueba1 = new Date(2026, 5, 15);
const prueba2 = new Date(2026, 13, 45);

console.log("¿prueba1 es valida?", esFechaValida(prueba1));
console.log("¿prueba2 es valida?", esFechaValida(prueba2));

// 5. Usa nombres descriptivos para las variables
const fechaInicioCurso = new Date(2026, 2, 1);
const fechaFinCurso = new Date(2026, 6, 31);

// 6. Para calculos de dias, ten cuidado con el horario de verano
// Usa fechas a mediodia para evitar problemas
const fechaInicioMediodia = new Date(2026, 2, 1, 12, 0, 0);
const fechaFinMediodia = new Date(2026, 6, 31, 12, 0, 0);
const diferenciaSegura = fechaFinMediodia - fechaInicioMediodia;
const diasSeguros = diferenciaSegura / msEnUnDia;
console.log("Dias calculados de forma segura:", Math.round(diasSeguros));

// 7. Usa Intl.DateTimeFormat para formateo en español
const formateadorEspanol = new Intl.DateTimeFormat("es-BO", {
    year: "numeric",
    month: "long",
    day: "numeric"
});

console.log("Fecha formateada:", formateadorEspanol.format(ahora));


// ------------------------------------------------------------
// EJEMPLOS PRÁCTICOS
// ------------------------------------------------------------

// Ejemplo 1: Mostrar fecha y hora actual
console.log("\n--- Ejemplo 1: Fecha y hora actual ---");
const hoy = new Date();
console.log("Fecha completa:", hoy);
console.log("Año:", hoy.getFullYear());
console.log("Mes:", hoy.getMonth() + 1); // +1 para mostrar 1-12 en vez de 0-11
console.log("Dia:", hoy.getDate());
console.log("Hora:", hoy.getHours());
console.log("Minutos:", hoy.getMinutes());


// Ejemplo 2: Obtener año, mes, dia de una fecha
console.log("\n--- Ejemplo 2: Componentes de una fecha ---");
const fechaEstudiante = new Date(2005, 8, 20);
console.log("Fecha de nacimiento del estudiante:", fechaEstudiante);
console.log("Año:", fechaEstudiante.getFullYear());
console.log("Mes (0-11):", fechaEstudiante.getMonth());
console.log("Mes (1-12):", fechaEstudiante.getMonth() + 1);
console.log("Dia:", fechaEstudiante.getDate());
console.log("Dia de la semana:", nombresDias[fechaEstudiante.getDay()]);


// Ejemplo 3: Mostrar dia de la semana
console.log("\n--- Ejemplo 3: Dia de la semana ---");
const fechaReunion = new Date(2026, 9, 15);
const diaReunion = fechaReunion.getDay();
console.log("La reunion es el:", nombresDias[diaReunion]);


// Ejemplo 4: Formatear fecha en español legible
console.log("\n--- Ejemplo 4: Formato español ---");
const fechaFormateadaEjemplo = formateadorEspanol.format(fechaEstudiante);
console.log("Nacimiento del estudiante:", fechaFormateadaEjemplo);


// Ejemplo 5: Comparar dos fechas
console.log("\n--- Ejemplo 5: Comparar fechas ---");
const fechaExamen1 = new Date(2026, 3, 15);
const fechaExamen2 = new Date(2026, 4, 20);

if (fechaExamen1 < fechaExamen2) {
    console.log("El primer examen es antes del segundo");
} else if (fechaExamen1 > fechaExamen2) {
    console.log("El primer examen es despues del segundo");
} else {
    console.log("Los examenes son en la misma fecha");
}


// Ejemplo 6: Calcular dias entre dos fechas
console.log("\n--- Ejemplo 6: Dias entre fechas ---");
const fechaInicioSemestre = new Date(2026, 2, 1, 12, 0, 0);
const fechaFinSemestre = new Date(2026, 6, 31, 12, 0, 0);
const diferenciaEnMs = fechaFinSemestre - fechaInicioSemestre;
const diferenciaEnDias = diferenciaEnMs / msEnUnDia;
console.log("Dias del semestre:", Math.round(diferenciaEnDias));


// Ejemplo 7: Verificar si una fecha es antes/despues de otra
console.log("\n--- Ejemplo 7: Antes/despues ---");
const fechaInscripcion = new Date(2026, 1, 15);
const fechaLimite = new Date(2026, 2, 1);

if (fechaInscripcion < fechaLimite) {
    console.log("La inscripcion es antes del limite");
} else {
    console.log("La inscripcion es despues del limite");
}


// Ejemplo 8: Registrar fechas de eventos
console.log("\n--- Ejemplo 8: Eventos ---");
const eventosEjemplo = [
    { nombre: "Inicio de clases", fecha: new Date(2026, 2, 1) },
    { nombre: "Examen parcial", fecha: new Date(2026, 3, 15) },
    { nombre: "Feria de ciencias", fecha: new Date(2026, 4, 20) },
    { nombre: "Fin de semestre", fecha: new Date(2026, 6, 31) }
];

for (let i = 0; i < eventosEjemplo.length; i++) {
    const evento = eventosEjemplo[i];
    console.log(evento.nombre + ": " + formateadorEspanol.format(evento.fecha));
}


// Ejemplo 9: Mostrar diferentes formatos
console.log("\n--- Ejemplo 9: Diferentes formatos ---");
const fechaEjemplo = new Date(2026, 7, 6);
console.log("ISO:", fechaEjemplo.toISOString());
console.log("Local (es-BO):", fechaEjemplo.toLocaleDateString("es-BO"));
console.log("Local (en-US):", fechaEjemplo.toLocaleDateString("en-US"));


// Ejemplo 10: Crear fecha desde valores especificos
console.log("\n--- Ejemplo 10: Fecha desde valores ---");
const año = 2026;
const mes = 7; // Agosto (0-indexado)
const dia = 6;
const hora = 12;
const minuto = 30;

const fechaPersonalizada = new Date(año, mes, dia, hora, minuto);
console.log("Fecha personalizada:", fechaPersonalizada);
console.log("Formateada:", formateadorEspanol.format(fechaPersonalizada));


// Ejemplo 11: Consideraciones de zona horaria
console.log("\n--- Ejemplo 11: Zona horaria ---");
const fechaCadena = new Date("2026-08-06");
const fechaNumerica = new Date(2026, 7, 6);

console.log("Desde cadena (UTC):", fechaCadena);
console.log("Desde numeros (local):", fechaNumerica);
console.log("Pueden mostrar dias diferentes dependiendo de la zona horaria");
