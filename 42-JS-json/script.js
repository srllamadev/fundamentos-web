// ============================================================
// LECCION 42 - JSON
// ============================================================

// ------------------------------------------------------------
// 1. QUE ES JSON?
// ------------------------------------------------------------

// JSON significa JavaScript Object Notation (Notacion de Objetos de JavaScript).
// Es un formato de TEXTO ligero para representar y transmitir datos estructurados.
// Aunque su nombre viene de JavaScript, JSON es independiente del lenguaje:
// practicamente todos los lenguajes de programacion pueden leer y escribir JSON.

// JSON NO es un objeto de JavaScript. JSON es texto plano.
// Cuando ves JSON, estas viendo una cadena de texto con reglas estrictas.

const textoJSON = '{"nombre": "Ana", "edad": 21, "ciudad": "La Paz"}';
console.log("--- 1. Que es JSON? ---");
console.log("JSON como texto:", textoJSON);
console.log("Tipo de dato:", typeof textoJSON);

// Esto es texto, no un objeto. No puedes hacer textoJSON.nombre
// Para usarlo como objeto necesitas convertirlo con JSON.parse()


// ------------------------------------------------------------
// 2. PARA QUE SE UTILIZA JSON?
// ------------------------------------------------------------

// JSON se utiliza principalmente para:
// 1. Intercambio de datos entre cliente y servidor (APIs web)
// 2. Archivos de configuracion (package.json, tsconfig.json)
// 3. Almacenamiento de datos en localStorage
// 4. Comunicacion entre servicios y aplicaciones
// 5. Formato de respuesta de APIs REST

console.log("--- 2. Para que se utiliza JSON? ---");
console.log("Ejemplo: archivo de configuracion (package.json)");
const packageJSON = '{"nombre": "mi-proyecto", "version": "1.0.0", "dependencias": {"express": "^4.18.0"}}';
console.log(packageJSON);

// Cada vez que una aplicacion se comunica con un servidor web,
// los datos viajan en formato JSON. Es el estandar de la web moderna.


// ------------------------------------------------------------
// 3. DIFERENCIA ENTRE JSON Y OBJETOS JAVASCRIPT
// ------------------------------------------------------------

// Aunque JSON se parece a la sintaxis de objetos de JavaScript,
// hay diferencias fundamentales:

console.log("--- 3. Diferencia entre JSON y objetos JavaScript ---");

// Objeto JavaScript (esta en memoria, es manipulable)
const estudianteObj = {
    nombre: "Carlos",
    edad: 20,
    carrera: "Ing. Informatica"
};
console.log("Objeto JavaScript:", estudianteObj);
console.log("Tipo:", typeof estudianteObj);
console.log("Acceso a propiedad:", estudianteObj.nombre);

// JSON (es texto, no puedes acceder a propiedades directamente)
const estudianteJSON = '{"nombre": "Carlos", "edad": 20, "carrera": "Ing. Informatica"}';
console.log("JSON (texto):", estudianteJSON);
console.log("Tipo:", typeof estudianteJSON);
// estudianteJSON.nombre NO funciona, es un string

// Diferencias clave:
// - JSON: las claves VAN entre comillas dobles obligatoriamente
// - JSON: los valores string VAN entre comillas dobles obligatoriamente
// - JSON: no permite funciones, undefined, comentarios
// - JSON: es texto; objeto JS: es una estructura en memoria
// - Objeto JS: se crea con {}; JSON: se crea como string


// ------------------------------------------------------------
// 4. REGLAS DE SINTAXIS DE JSON
// ------------------------------------------------------------

// JSON tiene reglas estrictas que DEBEN cumplirse:
console.log("--- 4. Reglas de sintaxis de JSON ---");

// Regla 1: Las claves (nombres de propiedades) deben ir entre comillas DOBLES
// Regla 2: Los valores string deben ir entre comillas DOBLES
// Regla 3: Los separadores son coma (,) entre elementos y dos puntos (:) entre clave y valor
// Regla 4: Se permiten espacios en blanco entre tokens
// Regla 5: El valor raiz puede ser un objeto {} o un array []

const jsonValido = '{"nombre": "Maria", "edad": 22}';
console.log("JSON valido:", jsonValido);

// Esto NO es JSON valido (comillas simples en las claves):
const jsonInvalido1 = "{'nombre': 'Maria', 'edad': 22}";
console.log("JSON invalido (comillas simples):", jsonInvalido1);

// Esto NO es JSON valido (clave sin comillas):
const jsonInvalido2 = "{nombre: 'Maria', edad: 22}";
console.log("JSON invalido (sin comillas):", jsonInvalido2);


// ------------------------------------------------------------
// 5. PROPIEDADES CON COMILLAS DOBLES (OBLIGATORIAS EN JSON)
// ------------------------------------------------------------

// En JSON, TODAS las claves deben estar entre comillas dobles.
// No se permiten comillas simples ni claves sin comillas.

console.log("--- 5. Propiedades con comillas dobles ---");

const jsonCorrecto = '{"universidad": "UMSA", "ciudad": "La Paz", "pais": "Bolivia"}';
console.log("JSON correcto:", jsonCorrecto);

// En objetos JavaScript, las comillas en las claves son opcionales:
const objJS = { universidad: "UMSA", ciudad: "La Paz", pais: "Bolivia" };
console.log("Objeto JS (sin comillas en claves):", objJS);

// Pero en JSON las comillas dobles en claves son OBLIGATORIAS.
// Esta es una diferencia fundamental entre JSON y objetos JS.


// ------------------------------------------------------------
// 6. STRINGS EN JSON
// ------------------------------------------------------------

// Los strings en JSON deben ir entre comillas dobles.
// No se permiten comillas simples.

console.log("--- 6. Strings en JSON ---");

const jsonStrings = '{"nombre": "Ana Martinez", "carrera": "Ingenieria Informatica", "ciudad": "Cochabamba"}';
console.log(jsonStrings);

// Caracteres especiales permitidos en strings JSON:
// \"  - comilla doble
// \\  - barra invertida
// \n  - salto de linea
// \t  - tabulacion
// \uXXXX - caracter Unicode

const jsonEspecial = '{"mensaje": "Hola \"Mundo\"", "ruta": "C:\\\\Users\\\\estudiante"}';
console.log("Con caracteres escapados:", jsonEspecial);


// ------------------------------------------------------------
// 7. NUMEROS EN JSON
// ------------------------------------------------------------

// JSON acepta numeros enteros, decimales y negativos.
// NO acepta NaN, Infinity ni -Infinity.

console.log("--- 7. Numeros en JSON ---");

const jsonNumeros = '{"edad": 21, "promedio": 85.5, "altura": -10, "cantidad": 0}';
console.log(jsonNumeros);

// Ejemplo con datos de estudiantes y sus notas:
const notasJSON = '{"matematicas": 85, "fisica": 72.5, "quimica": 90, "programacion": 95}';
console.log("Notas en JSON:", notasJSON);

// Numeros NO permitidos en JSON:
// NaN, Infinity, -Infinity (si los necesitas, usa null en su lugar)


// ------------------------------------------------------------
// 8. BOOLEANOS EN JSON
// ------------------------------------------------------------

// JSON acepta los valores true y false (sin comillas).

console.log("--- 8. Booleanos en JSON ---");

const jsonBooleanos = '{"activo": true, "inscrito": false, "becado": true}';
console.log(jsonBooleanos);

// Ejemplo practico: estado de estudiantes
const estadoEstudiante = '{"nombre": "Luis", "activo": true, "regular": false}';
console.log("Estado de estudiante:", estadoEstudiante);


// ------------------------------------------------------------
// 9. NULL EN JSON
// ------------------------------------------------------------

// JSON acepta el valor null para representar datos vacios o ausentes.

console.log("--- 9. null en JSON ---");

const jsonNull = '{"nombre": "Pedro", "telefono": null, "email": null}';
console.log(jsonNull);

// null es util para indicar que un campo existe pero no tiene valor asignado.
// Por ejemplo, un estudiante que aun no tiene telefono registrado.


// ------------------------------------------------------------
// 10. ARRAYS EN JSON
// ------------------------------------------------------------

// JSON permite arrays como valores. Los elementos se separan por comas.

console.log("--- 10. Arrays en JSON ---");

const jsonArrays = '{"nombres": ["Ana", "Carlos", "Maria"], "edades": [21, 20, 22]}';
console.log(jsonArrays);

// Un array JSON puede contener cualquier tipo de dato permitido en JSON:
const jsonMixto = '{"datos": [1, "hola", true, null, [2, 3]]}';
console.log("Array mixto:", jsonMixto);

// Ejemplo con calificaciones de un estudiante:
const calificacionesJSON = '{"estudiante": "Sofia", "notas": [85, 92, 78, 88, 95]}';
console.log("Calificaciones:", calificacionesJSON);


// ------------------------------------------------------------
// 11. OBJETOS ANIDADOS EN JSON
// ------------------------------------------------------------

// Los objetos pueden contener otros objetos como valores.

console.log("--- 11. Objetos anidados en JSON ---");

const jsonAnidado = '{"estudiante": {"nombre": "Ana", "edad": 21}, "universidad": "UMSA"}';
console.log("Objeto anidado:", jsonAnidado);

// Ejemplo mas complejo: datos academicos completos
const datosAcademicosJSON = `{
    "estudiante": {
        "nombre": "Carlos Lopez",
        "edad": 20,
        "carrera": "Ing. Civil",
        "direccion": {
            "calle": "Av. 6 de Agosto",
            "zona": "Miraflores",
            "ciudad": "La Paz"
        },
        "calificaciones": {
            "matematicas": 85,
            "fisica": 78,
            "programacion": 92
        }
    }
}`;
console.log("Datos academicos completos:");
console.log(datosAcademicosJSON);


// ------------------------------------------------------------
// 12. JSON.STRINGIFY() - CONVERTIR OBJETO A TEXTO JSON
// ------------------------------------------------------------

// JSON.stringify() toma un valor de JavaScript y lo convierte
// en una cadena de texto JSON.

console.log("--- 12. JSON.stringify() ---");

// Ejemplo 1: convertir un estudiante a JSON
const estudiante = {
    nombre: "Maria Flores",
    edad: 21,
    carrera: "Ing. de Sistemas",
    universidad: "UMSA",
    activo: true
};

const estudianteTexto = JSON.stringify(estudiante);
console.log("Objeto original:", estudiante);
console.log("Convertido a JSON:", estudianteTexto);
console.log("Tipo del resultado:", typeof estudianteTexto);

// Ejemplo 2: convertir un array de productos a JSON
const productos = [
    { id: 1, nombre: "Cuaderno", precio: 15.50 },
    { id: 2, nombre: "Lapiz", precio: 3.00 },
    { id: 3, nombre: "Goma", precio: 2.50 }
];

const productosJSON = JSON.stringify(productos);
console.log("Array de productos a JSON:", productosJSON);

// Ejemplo 3: JSON.stringify con formato legible (pretty print)
// El segundo parametro null significa "sin filtro"
// El tercer parametro (2) indica la cantidad de espacios de indentacion
const jsonBonito = JSON.stringify(productos, null, 2);
console.log("JSON con formato legible:");
console.log(jsonBonito);


// ------------------------------------------------------------
// 13. JSON.PARSE() - CONVERTIR TEXTO JSON A OBJETO
// ------------------------------------------------------------

// JSON.parse() toma una cadena JSON y la convierte en un objeto
// o valor de JavaScript.

console.log("--- 13. JSON.parse() ---");

// Ejemplo 1: convertir texto JSON a objeto
const jsonTexto = '{"nombre": "Pedro Mamani", "edad": 22, "carrera": "Medicina"}';
const objetoRecuperado = JSON.parse(jsonTexto);

console.log("Texto JSON:", jsonTexto);
console.log("Tipo:", typeof jsonTexto);
console.log("Objeto recuperado:", objetoRecuperado);
console.log("Tipo:", typeof objetoRecuperado);
console.log("Acceso a propiedad:", objetoRecuperado.nombre);

// Ejemplo 2: convertir array JSON a array de objetos
const arrayJSON = '[{"id": 1, "nombre": "Ana"}, {"id": 2, "nombre": "Luis"}]';
const arrayObjetos = JSON.parse(arrayJSON);

console.log("Array JSON:", arrayJSON);
console.log("Array de objetos:", arrayObjetos);
console.log("Primer elemento:", arrayObjetos[0]);
console.log("Nombre del segundo:", arrayObjetos[1].nombre);

// IMPORTANTE: JSON.parse() crea objetos NUEVOS, no referencias al texto original.
// El resultado es un objeto completamente independiente en memoria.


// ------------------------------------------------------------
// 14. CONVIRTIENDO OBJETOS A TEXTO JSON
// ------------------------------------------------------------

// Vamos a ver con mas detalle como JSON.stringify() transforma
// diferentes tipos de datos.

console.log("--- 14. Convirtiendo objetos a texto JSON ---");

// String
console.log("String:", JSON.stringify("Hola"));

// Numero
console.log("Numero:", JSON.stringify(42));
console.log("Decimal:", JSON.stringify(85.5));

// Booleano
console.log("Booleano true:", JSON.stringify(true));
console.log("Booleano false:", JSON.stringify(false));

// null
console.log("null:", JSON.stringify(null));

// Array
console.log("Array:", JSON.stringify([1, 2, 3]));

// Objeto
console.log("Objeto:", JSON.stringify({ a: 1, b: 2 }));

// Objeto anidado
const curso = {
    materia: "Programacion Web",
    profesor: {
        nombre: "Ing. Rodriguez",
        departamento: "Informatica"
    },
    estudiantes: ["Ana", "Carlos", "Maria"],
    activo: true
};
console.log("Objeto complejo:");
console.log(JSON.stringify(curso, null, 2));


// ------------------------------------------------------------
// 15. CONVIRTIENDO TEXTO JSON A OBJETOS
// ------------------------------------------------------------

// Veamos como recuperar informacion util de texto JSON.

console.log("--- 15. Convirtiendo texto JSON a objetos ---");

// Simular datos recibidos de un servidor (como texto JSON)
const respuestaServidor = `{
    "universidad": "UMSA",
    "gestion": 2026,
    "estudiantes": [
        {"nombre": "Ana Martinez", "promedio": 85},
        {"nombre": "Carlos Lopez", "promedio": 72},
        {"nombre": "Maria Flores", "promedio": 92}
    ],
    "totalInscritos": 3
}`;

// Convertir a objeto JavaScript
const datos = JSON.parse(respuestaServidor);

console.log("Universidad:", datos.universidad);
console.log("Gestion:", datos.gestion);
console.log("Total estudiantes:", datos.estudiantes.length);

// Acceder a datos de estudiantes
for (let i = 0; i < datos.estudiantes.length; i++) {
    const est = datos.estudiantes[i];
    console.log((i + 1) + ". " + est.nombre + " - Promedio: " + est.promedio);
}

// Calcular promedio general
let sumaPromedios = 0;
for (let i = 0; i < datos.estudiantes.length; i++) {
    sumaPromedios = sumaPromedios + datos.estudiantes[i].promedio;
}
const promedioGeneral = sumaPromedios / datos.estudiantes.length;
console.log("Promedio general del grupo:", promedioGeneral.toFixed(2));


// ------------------------------------------------------------
// 16. MANEJO DE ERRORES CON TRY...CATCH
// ------------------------------------------------------------

// JSON.parse() puede lanzar errores si el texto no es JSON valido.
// Siempre usa try...catch para manejar estos errores.

console.log("--- 16. Manejo de errores con try...catch ---");

// Ejemplo 1: JSON valido - funciona correctamente
try {
    const resultado = JSON.parse('{"nombre": "Ana"}');
    console.log("Parseo exitoso:", resultado);
} catch (error) {
    console.log("Error:", error.message);
}

// Ejemplo 2: JSON invalido - captura el error
try {
    const resultado = JSON.parse("{'nombre': 'Ana'}");
    console.log(resultado);
} catch (error) {
    console.log("Error al parsear (comillas simples):", error.message);
}

// Ejemplo 3: string vacio
try {
    const resultado = JSON.parse("");
    console.log(resultado);
} catch (error) {
    console.log("Error (string vacio):", error.message);
}

// Ejemplo 4: texto no JSON
try {
    const resultado = JSON.parse("Hola mundo");
    console.log(resultado);
} catch (error) {
    console.log("Error (texto no JSON):", error.message);
}

// Ejemplo practico: funcion segura para parsear JSON
function parsearSeguro(texto) {
    try {
        const resultado = JSON.parse(texto);
        console.log("Parseo exitoso");
        return resultado;
    } catch (error) {
        console.log("Error al parsear JSON: " + error.message);
        return null;
    }
}

console.log("Resultado 1:", parsearSeguro('{"a": 1}'));
console.log("Resultado 2:", parsearSeguro("no es json"));


// ------------------------------------------------------------
// 17. JSON INVALIDO - ERRORES COMUNES
// ------------------------------------------------------------

// Veamos ejemplos de lo que NO es JSON valido.

console.log("--- 17. JSON invalido ---");

// ERROR 1: claves sin comillas
try {
    JSON.parse("{nombre: 'Ana'}");
} catch (e) {
    console.log("Error 1 - Claves sin comillas:", e.message);
}

// ERROR 2: comillas simples en claves o valores string
try {
    JSON.parse("{'nombre': 'Ana'}");
} catch (e) {
    console.log("Error 2 - Comillas simples:", e.message);
}

// ERROR 3: coma al final (trailing comma)
try {
    JSON.parse('{"nombre": "Ana", "edad": 21,}');
} catch (e) {
    console.log("Error 3 - Coma final:", e.message);
}

// ERROR 4: undefined como valor
try {
    JSON.parse('{"nombre": undefined}');
} catch (e) {
    console.log("Error 4 - undefined como valor:", e.message);
}

// ERROR 5: comentarios en JSON
try {
    JSON.parse('{"nombre": "Ana" /* comentario */}');
} catch (e) {
    console.log("Error 5 - Comentarios:", e.message);
}

// ERROR 6: NaN o Infinity
try {
    JSON.parse('{"valor": NaN}');
} catch (e) {
    console.log("Error 6 - NaN:", e.message);
}


// ------------------------------------------------------------
// 18. RESTRICCIONES DE JSON
// ------------------------------------------------------------

// JSON tiene restricciones importantes que debes conocer.

console.log("--- 18. Restricciones de JSON ---");

// JSON NO soporta:
// 1. Funciones
// 2. undefined
// 3. Symbol
// 4. Comentarios
// 5. NaN / Infinity (directamente)

// Si un objeto JavaScript tiene estos valores, JSON.stringify()
// los ignora o los convierte. Veamos que pasa con cada uno.


// ------------------------------------------------------------
// 19. TRATAMIENTO DE UNDEFINED
// ------------------------------------------------------------

// Los valores undefined son IGNORADOS por JSON.stringify().
// Si una propiedad tiene valor undefined, la propiedad completa se elimina.

console.log("--- 19. Tratamiento de undefined ---");

const objetoConUndefined = {
    nombre: "Ana",
    telefono: undefined,
    edad: 21
};

console.log("Objeto original:", objetoConUndefined);
console.log("telefono en el objeto:", objetoConUndefined.telefono);
console.log("Convertido a JSON:", JSON.stringify(objetoConUndefined));
// La propiedad "telefono" desaparece completamente del JSON

// undefined como valor independiente se convierte en undefined (no es JSON valido)
console.log("undefined solo:", JSON.stringify(undefined));
// Devuelve undefined (no un string), no es valido como JSON


// ------------------------------------------------------------
// 20. COMPORTAMIENTO DE FUNCIONES Y SYMBOLS AL SERIALIZAR
// ------------------------------------------------------------

// Las funciones y los Symbols son completamente IGNORADOS
// por JSON.stringify().

console.log("--- 20. Funciones y Symbols al serializar ---");

const objetoConFuncion = {
    nombre: "Carlos",
    saludar: function() { return "Hola"; },
    edad: 20
};

console.log("Objeto con funcion:", objetoConFuncion);
console.log("JSON (sin la funcion):", JSON.stringify(objetoConFuncion));
// La propiedad "saludar" se pierde en la conversion

// Symbols tambien se ignoran
const miSimbolo = Symbol("id");
const objetoConSymbol = {
    nombre: "Maria",
    [miSimbolo]: "valor oculto",
    edad: 22
};

console.log("Objeto con Symbol:", objetoConSymbol);
console.log("JSON (sin el Symbol):", JSON.stringify(objetoConSymbol));

// IMPORTANTE: esto significa que JSON.stringify() NO sirve para
// hacer copias completas de objetos con funciones o symbols.


// ------------------------------------------------------------
// 21. LIMITACIONES CON BIGINT
// ------------------------------------------------------------

// JSON.stringify() lanza un ERROR si encuentra un valor BigInt.

console.log("--- 21. Limitaciones con BigInt ---");

try {
    const objetoBigInt = {
        nombre: "Test",
        valorGrande: BigInt(9007199254740991)
    };
    const resultado = JSON.stringify(objetoBigInt);
    console.log(resultado);
} catch (error) {
    console.log("Error con BigInt:", error.message);
}

// Si necesitas incluir numeros muy grandes en JSON,
// conviertelos a string antes de serializar:
const objetoBigIntCorregido = {
    nombre: "Test",
    valorGrande: "9007199254740991"
};
console.log("BigInt como string:", JSON.stringify(objetoBigIntCorregido));


// ------------------------------------------------------------
// 22. REFERENCIAS CIRCULARES
// ------------------------------------------------------------

// JSON.stringify() lanza un error si detecta referencias circulares
// (un objeto que se referencia a si mismo directa o indirectamente).

console.log("--- 22. Referencias circulares ---");

const objetoA = { nombre: "Objeto A" };
const objetoB = { nombre: "Objeto B", referencia: objetoA };
objetoA.referencia = objetoB;

// Esto crea un circulo: A -> B -> A -> B -> ...

try {
    const resultado = JSON.stringify(objetoA);
    console.log(resultado);
} catch (error) {
    console.log("Error con referencia circular:", error.message);
}

// Las referencias circulares son comunes en estructuras de datos
// complejas como arboles con referencias padre-hijo.
// Para manejarlas necesitas soluciones personalizadas.


// ------------------------------------------------------------
// 23. SERIALIZACION DE FECHAS
// ------------------------------------------------------------

// JSON no tiene un tipo de dato para fechas.
// Cuando serializas un objeto Date, se convierte a string ISO.

console.log("--- 23. Serializacion de fechas ---");

const evento = {
    nombre: "Inscripciones UMSA",
    fecha: new Date("2026-03-15"),
    lugar: "La Paz"
};

console.log("Objeto original:");
console.log(evento);
console.log("Fecha como Date:", evento.fecha);
console.log("Tipo de fecha:", typeof evento.fecha);

const eventoJSON = JSON.stringify(evento);
console.log("Convertido a JSON:", eventoJSON);
// La fecha se convirtio a string ISO: "2026-03-15T00:00:00.000Z"

// Al parsear, la fecha sigue siendo un string, NO un Date:
const eventoRecuperado = JSON.parse(eventoJSON);
console.log("Fecha despues de parse:", eventoRecuperado.fecha);
console.log("Tipo despues de parse:", typeof eventoRecuperado.fecha);

// Si necesitas la fecha como objeto Date despues de parsear,
// debes convertirla manualmente:
const fechaRecuperada = new Date(eventoRecuperado.fecha);
console.log("Fecha convertida a Date:", fechaRecuperada);
console.log("Tipo:", typeof fechaRecuperada, fechaRecuperada instanceof Date);


// ------------------------------------------------------------
// 24. JSON COMO FORMATO DE INTERCAMBIO DE DATOS
// ------------------------------------------------------------

// JSON es el formato estandar para intercambio de datos en la web.
// Veamos un ejemplo simulando lo que pasaria en una aplicacion real.

console.log("--- 24. JSON como formato de intercambio ---");

// Simulacion: el servidor envia datos como texto JSON
const respuestaDelServidor = `{
    "estado": "ok",
    "datos": {
        "universidad": "UMSA",
        "facultad": "Facultad de Ciencias y Tecnologia",
        "estudiantes": [
            {
                "id": 1,
                "nombre": "Ana Martinez",
                "carrera": "Ing. Informatica",
                "semestre": 5,
                "promedio": 85
            },
            {
                "id": 2,
                "nombre": "Carlos Lopez",
                "carrera": "Ing. Civil",
                "semestre": 4,
                "promedio": 72
            },
            {
                "id": 3,
                "nombre": "Maria Flores",
                "carrera": "Medicina",
                "semestre": 6,
                "promedio": 92
            }
        ],
        "totalEstudiantes": 3
    }
}`;

console.log("Respuesta recibida del servidor (texto JSON):");
console.log(respuestaDelServidor);

// Convertir a objeto JavaScript para trabajar con los datos
const respuesta = JSON.parse(respuestaDelServidor);

console.log("Estado:", respuesta.estado);
console.log("Universidad:", respuesta.datos.universidad);

// Procesar estudiantes
const estudiantes = respuesta.datos.estudiantes;
for (let i = 0; i < estudiantes.length; i++) {
    const est = estudiantes[i];
    const estado = est.promedio >= 51 ? "Aprobado" : "Reprobado";
    console.log(est.nombre + " | " + est.carrera + " | Prom: " + est.promedio + " | " + estado);
}


// ------------------------------------------------------------
// 25. INTRODUCCION CONCEPTUAL A APIS
// ------------------------------------------------------------

// Una API (Application Programming Interface) es un intermediario
// que permite que dos aplicaciones se comuniquen entre si.
// JSON es el formato que usan las APIs web para enviar y recibir datos.

console.log("--- 25. Introduccion conceptual a APIs ---");

// Flujo tipico de comunicacion con una API:
// 1. Tu aplicacion (cliente) envia una solicitud (request) al servidor
// 2. El servidor procesa la solicitud
// 3. El servidor responde (response) con datos en formato JSON
// 4. Tu aplicacion parsea el JSON y usa los datos

// Ejemplo conceptual de lo que devuelve una API:
const apiResponse = `{
    "exito": true,
    "mensaje": "Datos obtenidos correctamente",
    "resultado": {
        "estudiantes": [
            {"nombre": "Sofia Quispe", "nota": 88},
            {"nombre": "Jorge Condori", "nota": 75}
        ]
    }
}`;

console.log("Respuesta conceptual de una API:");
console.log(apiResponse);

const datosAPI = JSON.parse(apiResponse);
console.log("Exito:", datosAPI.exito);
console.log("Mensaje:", datosAPI.mensaje);
console.log("Cantidad de estudiantes:", datosAPI.resultado.estudiantes.length);

// IMPORTANTE: en lecciones futuras aprenderas a usar fetch() para
// hacer solicitudes reales a APIs. Por ahora, entiende que JSON
// es el lenguaje universal de comunicacion en la web.

// Ejemplos de APIs reales que usan JSON:
// - API del clima: devuelve temperatura, humedad, etc.
// - API de mapas: devuelve coordenadas, direcciones
// - API de redes sociales: devuelve publicaciones, perfiles
// - API de bancos: devuelve saldo, transacciones


// ------------------------------------------------------------
// 26. BUENAS PRACTICAS
// ------------------------------------------------------------

console.log("--- 26. Buenas practicas ---");

// 1. Siempre usa try...catch con JSON.parse()
function parsearJSON(texto) {
    try {
        return JSON.parse(texto);
    } catch (error) {
        console.log("Error al parsear JSON: " + error.message);
        return null;
    }
}

console.log("Practica 1:", parsearJSON('{"nombre": "Ana"}'));
console.log("Practica 1:", parsearJSON("texto invalido"));

// 2. Verifica el resultado despues de parsear
const datosParseados = parsearJSON('{"nombre": "Carlos", "edad": 20}');
if (datosParseados !== null) {
    console.log("Practica 2 - Datos validos:", datosParseados.nombre);
}

// 3. NO uses JSON.stringify() como metodo universal para copiar objetos
//    (pierde funciones, undefined, symbols, referencias circulares)
const objetoOriginal = {
    nombre: "Test",
    notas: [85, 90],
    saludar: function() { return "Hola"; }
};

const copiaJSON = JSON.parse(JSON.stringify(objetoOriginal));
console.log("Practica 3 - Copia via JSON:");
console.log("Original tiene saludar:", typeof objetoOriginal.saludar);
console.log("Copia tiene saludar:", typeof copiaJSON.saludar);
// La funcion se perdio!

// 4. Usa indentacion para hacer JSON legible durante desarrollo
const datosParaDebug = { universidad: "UMSA", ciudad: "La Paz", pais: "Bolivia" };
console.log("Practica 4 - JSON legible:");
console.log(JSON.stringify(datosParaDebug, null, 2));

// 5. Valida la estructura de los datos despues de parsear
const datosAPI2 = parsearJSON('{"estudiantes": [{"nombre": "Ana"}]}');
if (datosAPI2 && Array.isArray(datosAPI2.estudiantes)) {
    console.log("Practica 5 - Estructura valida, cantidad:", datosAPI2.estudiantes.length);
}

// 6. Maneja fechas explicitamente despues de parsear
const conFecha = parsearJSON('{"fecha": "2026-03-15T00:00:00.000Z"}');
if (conFecha) {
    const fecha = new Date(conFecha.fecha);
    console.log("Practica 6 - Fecha recuperada:", fecha.toLocaleDateString("es-BO"));
}

// 7. Ten cuidado con numeros muy grandes
//    Si recibes IDs grandes de APIs, pueden perder precision
console.log("Practica 7 - Numero grande:");
console.log(JSON.parse('{"id": 9007199254740993}'));
// Puede no ser exacto por limitaciones de los numeros en JavaScript

console.log("\n=== FIN DE LA LECCION 42 ===");
