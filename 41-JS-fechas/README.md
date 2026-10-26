# Leccion 41 - Fechas en JavaScript

## Objetivo de aprendizaje

Aprender a crear, consultar, comparar y formatear fechas usando el objeto Date de JavaScript para trabajar con informacion temporal en aplicaciones web.

## Conocimientos previos

- [Leccion 37 - Arrays](../37-JS-arrays/)
- [Leccion 38 - Metodos de Arrays](../38-JS-metodos-arrays/)
- [Leccion 39 - Objetos](../39-JS-objetos/)
- Variables `const` y `let`
- Operadores de comparacion (`<`, `>`, `===`)

## Introduccion

Trabajar con fechas es fundamental en el desarrollo web. Desde mostrar la fecha actual en un blog hasta calcular dias entre eventos o validar formularios, las fechas estan presentes en casi todas las aplicaciones.

JavaScript proporciona el objeto `Date` que te permite crear, manipular y formatear fechas y horas. En esta leccion aprenderas a:

- Crear fechas con valores especificos
- Extraer componentes (año, mes, dia, hora)
- Comparar fechas
- Calcular diferencias entre fechas
- Formatear fechas en español
- Entender las consideraciones de zona horaria

## Que es Date?

`Date` es un objeto integrado en JavaScript que te permite trabajar con fechas y horas. Representa un momento especifico en el tiempo y proporciona metodos para crear, consultar, modificar y formatear fechas.

```javascript
const fecha = new Date();
console.log(fecha); // Muestra la fecha y hora actual
```

## Creacion de fechas

### new Date()

Sin argumentos, crea una fecha con el momento actual:

```javascript
const ahora = new Date();
console.log("Fecha actual:", ahora);
```

Con un argumento numerico (0), representa el inicio del tiempo Unix (1 de enero de 1970):

```javascript
const epoch = new Date(0);
console.log(epoch); // Thu Jan 01 1970 00:00:00 GMT+0000
```

### Fechas con valores especificos

Puedes crear fechas pasando valores especificos al constructor:

```javascript
// Formato: new Date(año, mes, dia, horas, minutos, segundos, milisegundos)
const independencia = new Date(1825, 7, 6, 12, 30, 0);
console.log("Independencia de Bolivia:", independencia);

const finDeClase = new Date(2026, 11, 31, 18, 0, 0);
console.log("Fin de clase:", finDeClase);
```

### IMPORTANTE: Meses indexados desde cero

**Uno de los errores mas comunes** al trabajar con fechas en JavaScript es olvidar que los meses van de 0 a 11 en el constructor numerico:

- 0 = Enero
- 1 = Febrero
- 2 = Marzo
- ...
- 11 = Diciembre

```javascript
const enero = new Date(2026, 0, 15);    // 15 de Enero
const agosto = new Date(2026, 7, 6);    // 6 de Agosto (7, no 8)
const diciembre = new Date(2026, 11, 25); // 25 de Diciembre
```

Si pasas 12 o mas, JavaScript lo convierte automaticamente al siguiente año:

```javascript
const fecha = new Date(2026, 12, 1); // Se convierte en 1 de Enero de 2027
console.log(fecha); // Sun Jan 01 2027 00:00:00
```

## Obtencion de componentes

### getFullYear, getMonth, getDate

Estos metodos extraen componentes de una fecha:

```javascript
const nacimiento = new Date(2005, 2, 15);

console.log("Año:", nacimiento.getFullYear()); // 2005
console.log("Mes (0-11):", nacimiento.getMonth()); // 2
console.log("Mes (1-12):", nacimiento.getMonth() + 1); // 3
console.log("Dia:", nacimiento.getDate()); // 15
```

**Recuerda:** `getMonth()` devuelve 0-11, por lo que necesitas sumar 1 para mostrar el mes del 1 al 12.

### getDay (dia de la semana)

Devuelve el dia de la semana como numero del 0 al 6:

- 0 = Domingo
- 1 = Lunes
- 2 = Martes
- ...
- 6 = Sabado

```javascript
const fecha = new Date(2026, 9, 15);
const diaSemana = fecha.getDay();
console.log("Dia de la semana (0-6):", diaSemana);

const nombresDias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
console.log("Dia:", nombresDias[diaSemana]);
```

### getHours, getMinutes, getSeconds

Devuelven las horas, minutos y segundos de la fecha:

```javascript
const ahora = new Date();

console.log("Hora:", ahora.getHours());
console.log("Minutos:", ahora.getMinutes());
console.log("Segundos:", ahora.getSeconds());
```

### getTime y Date.now()

`getTime()` devuelve el numero de milisegundos desde el 1 de enero de 1970 00:00:00 UTC (timestamp):

```javascript
const fecha = new Date();
const timestamp = fecha.getTime();
console.log("Milisegundos desde epoch:", timestamp);
```

`Date.now()` devuelve el timestamp del momento actual sin crear un objeto Date completo (mas eficiente):

```javascript
const ahora = Date.now();
console.log("Timestamp actual:", ahora);

// Util para medir tiempo de ejecucion
const inicio = Date.now();
// ... codigo a medir ...
const fin = Date.now();
const duracion = fin - inicio;
console.log("Tiempo:", duracion, "ms");
```

## Modificacion de fechas

### setFullYear, setMonth, setDate

Puedes modificar componentes de una fecha existente:

```javascript
const fecha = new Date(2026, 0, 15);
console.log("Original:", fecha);

fecha.setFullYear(2027);
console.log("Despues de cambiar año:", fecha);

fecha.setMonth(5); // Junio (0-indexado)
console.log("Despues de cambiar mes:", fecha);

fecha.setDate(20);
console.log("Despues de cambiar dia:", fecha);
```

**IMPORTANTE:** Los metodos `set` modifican el objeto original. Si necesitas preservar la fecha original, crea una copia primero.

## Comparacion de fechas

Puedes usar los operadores de comparacion (`<`, `>`, `<=`, `>=`) directamente con objetos Date:

```javascript
const fecha1 = new Date(2026, 0, 15);
const fecha2 = new Date(2026, 5, 20);

console.log("¿fecha1 es anterior?", fecha1 < fecha2); // true
console.log("¿fecha1 es posterior?", fecha1 > fecha2); // false
```

Para comparar si dos fechas representan el mismo momento, **debes comparar sus timestamps** porque `===` compara referencias de objeto, no valores:

```javascript
const fecha1 = new Date(2026, 0, 15);
const fecha2 = new Date(2026, 0, 15);

console.log(fecha1 === fecha2); // false (objetos diferentes)
console.log(fecha1.getTime() === fecha2.getTime()); // true (mismo momento)
```

## Diferencias entre marcas de tiempo

Puedes restar fechas para obtener la diferencia en milisegundos:

```javascript
const inicio = new Date(2026, 2, 1);
const fin = new Date(2026, 6, 31);

const diferenciaMs = fin - inicio;
console.log("Diferencia en milisegundos:", diferenciaMs);

// Convertir a dias
const msEnUnDia = 1000 * 60 * 60 * 24;
const diferenciaDias = diferenciaMs / msEnUnDia;
console.log("Diferencia en dias:", diferenciaDias);
```

**NOTA IMPORTANTE:** Esta division puede no dar un numero exacto de dias debido al horario de verano (DST). Para calculos precisos de dias calendario, considera usar fechas a mediodia o ajustar manualmente.

## Milisegundos

JavaScript trabaja con fechas en milisegundos. Un milisegundo es una milesima parte de un segundo:

```javascript
const unSegundo = 1000;
const unMinuto = unSegundo * 60;
const unaHora = unMinuto * 60;
const unDia = unaHora * 24;
const unaSemana = unDia * 7;

console.log("Milisegundos en un dia:", unDia); // 86400000
```

Para calcular cuantos dias han pasado desde una fecha:

```javascript
const fechaPasada = new Date(2026, 0, 1);
const ahora = new Date();
const diferenciaMs = ahora - fechaPasada;
const diasTranscurridos = diferenciaMs / unDia;
console.log("Dias transcurridos:", Math.floor(diasTranscurridos));
```

## Formateo de fechas

### toISOString()

Devuelve la fecha en formato ISO 8601 estandar:

```javascript
const fecha = new Date(2026, 7, 6, 12, 30, 0);
console.log(fecha.toISOString());
// "2026-08-06T12:30:00.000Z"
```

El formato es: `YYYY-MM-DDTHH:mm:ss.sssZ` donde `Z` indica UTC. Este formato es estandar y util para almacenamiento y APIs.

### toLocaleDateString()

Devuelve la fecha formateada segun la configuracion regional:

```javascript
const fecha = new Date(2026, 7, 6);

console.log(fecha.toLocaleDateString()); // Configuracion del navegador
console.log(fecha.toLocaleDateString("es-BO")); // Español (Bolivia)
console.log(fecha.toLocaleDateString("en-US")); // Ingles (EEUU)
```

### toLocaleTimeString()

Devuelve solo la hora formateada segun la configuracion regional:

```javascript
const fecha = new Date();

console.log(fecha.toLocaleTimeString());
console.log(fecha.toLocaleTimeString("es-BO"));
console.log(fecha.toLocaleTimeString("en-US"));
```

### Intl.DateTimeFormat

Permite un control mas preciso del formato de fechas:

```javascript
const opciones = {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long"
};

const formateador = new Intl.DateTimeFormat("es-BO", opciones);
const fecha = new Date(2026, 7, 6);
console.log(formateador.format(fecha));
// "Jueves, 6 de agosto de 2026"
```

Puedes reutilizar el formateador para muchas fechas, lo cual es mas eficiente:

```javascript
const formateador = new Intl.DateTimeFormat("es-BO", {
    year: "numeric",
    month: "long",
    day: "numeric"
});

const eventos = [
    new Date(2026, 7, 6),
    new Date(2026, 9, 12),
    new Date(2026, 11, 25)
];

eventos.forEach(evento => {
    console.log(formateador.format(evento));
});
```

## Hora local vs UTC

Las fechas en JavaScript tienen dos componentes:

- **Hora local:** Tu zona horaria (Bolivia: UTC-4)
- **UTC:** Tiempo coordinado universal (antes GMT)

```javascript
const ahora = new Date();

// Metodos locales
console.log("Año local:", ahora.getFullYear());
console.log("Mes local:", ahora.getMonth());
console.log("Dia local:", ahora.getDate());
console.log("Hora local:", ahora.getHours());

// Metodos UTC
console.log("Año UTC:", ahora.getUTCFullYear());
console.log("Mes UTC:", ahora.getUTCMonth());
console.log("Dia UTC:", ahora.getUTCDate());
console.log("Hora UTC:", ahora.getUTCHours());
```

### Consideraciones de zona horaria

**Bolivia esta en UTC-4**, por lo que la hora local es 4 horas menos que UTC. Cuando es medianoche UTC, en Bolivia son las 8pm del dia anterior.

Esto es importante cuando:

- Creas fechas desde cadenas de texto
- Comparas fechas entre diferentes zonas horarias
- Almacenas fechas en bases de datos

## Fechas invalidas

Si creas una fecha con valores invalidos, obtendras "Invalid Date":

```javascript
const fechaInvalida = new Date(2026, 13, 45); // Mes 13 y dia 45 no existen
console.log(fechaInvalida); // "Invalid Date"
```

Puedes verificar si una fecha es valida usando `isNaN()`:

```javascript
function esFechaValida(fecha) {
    return fecha instanceof Date && !isNaN(fecha.getTime());
}

const fecha1 = new Date(2026, 5, 15);
const fecha2 = new Date(2026, 13, 45);

console.log(esFechaValida(fecha1)); // true
console.log(esFechaValida(fecha2)); // false
```

## Problemas comunes con cadenas de fechas

### new Date("YYYY-MM-DD") se interpreta como UTC

**CUIDADO:** Cuando creas una fecha desde una cadena en formato "YYYY-MM-DD", JavaScript la interpreta como UTC, no como hora local:

```javascript
const fechaUTC = new Date("2026-08-06");
console.log(fechaUTC);

// En Bolivia (UTC-4), esto puede mostrar el 5 de agosto a las 8pm
// porque 6 de agosto medianoche UTC = 5 de agosto 8pm Bolivia
```

**Para evitar este problema**, usa el constructor con numeros:

```javascript
const fechaLocal = new Date(2026, 7, 6); // 6 de agosto, hora local
console.log(fechaLocal); // Muestra correctamente 6 de agosto en hora local
```

O especifica la hora explicitamente si necesitas UTC:

```javascript
const fechaUTCExplicita = new Date("2026-08-06T12:00:00.000Z");
console.log(fechaUTCExplicita);
```

## Buenas practicas

1. **Usa `const` por defecto**, `let` solo si necesitas reasignar la variable.

2. **Para fechas fijas, usa el constructor numerico** (no cadenas) para evitar confusiones de zona horaria:
   ```javascript
   const fecha = new Date(2026, 7, 6); // Claro y sin ambiguedades
   ```

3. **Recuerda que los meses son 0-indexados** en el constructor numerico:
   ```javascript
   const agosto = new Date(2026, 7, 6); // 7 = Agosto
   ```

4. **Valida fechas antes de usarlas:**
   ```javascript
   function esFechaValida(fecha) {
       return fecha instanceof Date && !isNaN(fecha.getTime());
   }
   ```

5. **Usa nombres descriptivos** para las variables:
   ```javascript
   const fechaInicioCurso = new Date(2026, 2, 1);
   const fechaFinCurso = new Date(2026, 6, 31);
   ```

6. **Para calculos de dias, ten cuidado con el horario de verano:**
   ```javascript
   // Usa fechas a mediodia para evitar problemas
   const fechaInicio = new Date(2026, 2, 1, 12, 0, 0);
   const fechaFin = new Date(2026, 6, 31, 12, 0, 0);
   const diferencia = fechaFin - fechaInicio;
   const dias = diferencia / (1000 * 60 * 60 * 24);
   console.log(Math.round(dias)); // Redondear para evitar decimales
   ```

7. **Usa Intl.DateTimeFormat para formateo en español:**
   ```javascript
   const formateador = new Intl.DateTimeFormat("es-BO", {
       year: "numeric",
       month: "long",
       day: "numeric"
   });
   console.log(formateador.format(fecha));
   ```

## Errores comunes

**1. Olvidar que los meses son 0-indexados:**

```javascript
// MAL:
const agosto = new Date(2026, 8, 6); // Esto es Septiembre, no Agosto

// BIEN:
const agosto = new Date(2026, 7, 6); // 7 = Agosto
```

**2. Comparar fechas con === en lugar de timestamps:**

```javascript
const fecha1 = new Date(2026, 0, 15);
const fecha2 = new Date(2026, 0, 15);

// MAL:
console.log(fecha1 === fecha2); // false (objetos diferentes)

// BIEN:
console.log(fecha1.getTime() === fecha2.getTime()); // true
```

**3. Usar cadenas "YYYY-MM-DD" sin considerar UTC:**

```javascript
// PROBLEMA:
const fecha = new Date("2026-08-06");
// En Bolivia puede mostrar 5 de agosto por zona horaria

// SOLUCION:
const fecha = new Date(2026, 7, 6); // Constructor numerico
```

**4. Olvidar sumar 1 al mes al mostrarlo:**

```javascript
const fecha = new Date(2026, 7, 6);

// MAL:
console.log("Mes:", fecha.getMonth()); // Muestra 7

// BIEN:
console.log("Mes:", fecha.getMonth() + 1); // Muestra 8
```

**5. Dividir milisegundos sin considerar DST:**

```javascript
// PROBLEMA:
const dias = diferenciaMs / (1000 * 60 * 60 * 24);
console.log(dias); // Puede dar 151.958333... por DST

// SOLUCION:
console.log(Math.round(dias)); // Redondear
```

**6. Modificar fechas sin crear copia:**

```javascript
const fechaOriginal = new Date(2026, 0, 15);
const fechaCopia = fechaOriginal; // Ambas apuntan al mismo objeto

fechaCopia.setFullYear(2027); // ¡Modifica ambas!

console.log(fechaOriginal.getFullYear()); // 2027 (afectado)
```

**7. Crear fechas con valores invalidos:**

```javascript
// MAL:
const fecha = new Date(2026, 13, 45); // Invalid Date

// BIEN:
const fecha = new Date(2026, 11, 31); // Maximo: mes 11, dia 31
```

## Ejercicios practicos

1. **Independencia de Bolivia:** Crea un objeto Date que represente el 6 de agosto de 1825 a las 12:30 del mediodia.

2. **Datos de nacimiento:** Dado `fechaNacimiento = new Date(2005, 8, 20)`, extrae y muestra el año, el mes (1-12), y el dia.

3. **¿Que dia fue?:** Dado `fechaEvento = new Date(2026, 9, 15)`, determina que dia de la semana corresponde.

4. **¿Cual es antes?:** Compara `fechaA = new Date(2026, 3, 15)` y `fechaB = new Date(2026, 2, 20)` y muestra cual es anterior.

5. **Fecha legible:** Formatea `fechaHistorica = new Date(1825, 7, 6)` para mostrarla como "6 de Agosto de 1825".

6. **Duracion del semestre:** Calcula cuantos dias hay entre `inicioSemestre = new Date(2026, 2, 1)` y `finSemestre = new Date(2026, 6, 31)`.

7. **Validar fecha:** Crea una funcion `esFechaValida(fecha)` que retorne true si la fecha es valida.

8. **Ordenar eventos:** Dado un array de eventos con fechas, determina cual ocurre primero y cual ultimo.

> Mas ejercicios en [ejercicios.js](./ejercicios.js).

## Reto adicional

Crea un sistema simple de gestion de eventos que:

1. Reciba un array de objetos con `{nombre, fecha}`
2. Ordene los eventos cronologicamente
3. Muestre las fechas formateadas en español
4. Maneje fechas invalidas gracefully

Usa solo arrays, objetos y metodos de Date.

```javascript
const eventos = [
    { nombre: "Feria de ciencias", fecha: new Date(2026, 4, 20) },
    { nombre: "Inicio de clases", fecha: new Date(2026, 2, 1) },
    { nombre: "Examen final", fecha: new Date(2026, 6, 15) },
    { nombre: "Fecha invalida", fecha: new Date(2026, 13, 45) },
    { nombre: "Receso", fecha: new Date(2026, 3, 10) }
];

// Tu codigo aqui:
// 1. Filtrar eventos con fechas invalidas
// 2. Ordenar eventos validos por fecha
// 3. Mostrar cada evento con fecha formateada
```

**Solucion esperada:**

```javascript
// 1. Filtrar eventos validos
const eventosValidos = eventos.filter(evento => {
    return evento.fecha instanceof Date && !isNaN(evento.fecha.getTime());
});

// 2. Ordenar por fecha
eventosValidos.sort((a, b) => a.fecha - b.fecha);

// 3. Mostrar formateados
const formateador = new Intl.DateTimeFormat("es-BO", {
    year: "numeric",
    month: "long",
    day: "numeric"
});

eventosValidos.forEach(evento => {
    console.log(`${evento.nombre}: ${formateador.format(evento.fecha)}`);
});
```

## Resumen

En esta leccion aprendiste a trabajar con fechas en JavaScript:

- **Crear fechas:** `new Date()`, constructor con valores especificos, considerar meses 0-indexados
- **Consultar componentes:** `getFullYear()`, `getMonth()`, `getDate()`, `getDay()`, `getHours()`, `getMinutes()`, `getSeconds()`, `getTime()`
- **Modificar fechas:** `setFullYear()`, `setMonth()`, `setDate()`
- **Comparar fechas:** Usar operadores `<`, `>`, comparar timestamps con `getTime()`
- **Calcular diferencias:** Restar fechas para obtener milisegundos, convertir a dias/horas/minutos
- **Formatear fechas:** `toISOString()`, `toLocaleDateString()`, `toLocaleTimeString()`, `Intl.DateTimeFormat`
- **Zona horaria:** Entender diferencia entre hora local y UTC, problemas con cadenas "YYYY-MM-DD"
- **Validar fechas:** Usar `isNaN(fecha.getTime())` para detectar fechas invalidas

Recuerda las buenas practicas: usa el constructor numerico para fechas fijas, recuerda que los meses son 0-indexados, valida fechas antes de usarlas, y ten cuidado con el horario de verano al calcular diferencias en dias.

## Siguiente leccion

En la [Leccion 42 - JSON](../42-JS-json/) aprenderas a trabajar con el formato JSON (JavaScript Object Notation) para intercambiar datos entre el navegador y servidores web.
