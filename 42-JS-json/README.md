# Leccion 42 - JSON

## Objetivo de aprendizaje

Al finalizar esta leccion, seras capaz de:
- Comprender que es JSON y para que se utiliza
- Diferenciar entre JSON y objetos JavaScript
- Aplicar las reglas de sintaxis de JSON correctamente
- Convertir objetos JavaScript a texto JSON con `JSON.stringify()`
- Convertir texto JSON a objetos JavaScript con `JSON.parse()`
- Manejar errores de parseo con `try...catch`
- Identificar JSON valido e invalido
- Conocer las restricciones de JSON (funciones, undefined, Symbol, BigInt, referencias circulares)
- Entender la serializacion de fechas en JSON
- Comprender el rol de JSON en APIs web

## Conocimientos previos

Antes de comenzar, deberias tener conocimientos de:
- Variables (`const`, `let`) y tipos de datos (leccion 27-28)
- Operadores y expresiones (leccion 29)
- Estructuras de control: `if`, `switch` (leccion 31)
- Bucles: `for`, `while` (leccion 32)
- Funciones y parametros (leccion 33)
- Scope y funciones flecha (leccion 34)
- Strings y sus metodos (leccion 35)
- Numeros y Math (leccion 36)
- Arrays y sus metodos (leccion 37-38)
- Objetos y sus propiedades (leccion 39)
- Desestructuracion, spread y rest (leccion 40)
- Fechas con Date (leccion 41)

## Introduccion

Hasta ahora hemos trabajado con objetos y arrays en JavaScript para organizar datos en memoria. Pero, como hacemos que estos datos viajen de un servidor a tu navegador? Como se comunican dos aplicaciones entre si? La respuesta es **JSON**: un formato de texto que todo desarrollador web debe dominar. JSON es el lenguaje universal de intercambio de datos en la web moderna.

## Que es JSON?

**JSON** (JavaScript Object Notation) es un formato de **texto** ligero para representar datos estructurados. Aunque su nombre incluye "JavaScript", JSON es independiente del lenguaje: practicamente todos los lenguajes de programacion pueden leerlo y escribirlo.

```javascript
// Esto es JSON (una cadena de texto con reglas especificas)
const jsonTexto = '{"nombre": "Ana", "edad": 21, "ciudad": "La Paz"}';

// NO es un objeto JavaScript, es un STRING
console.log(typeof jsonTexto); // "string"
```

**Puntos clave:**
- JSON es **texto**, no un objeto en memoria
- Es el estandar de facto para APIs web
- Es legible por humanos y facil de parsear por maquinas
- Se usa en archivos de configuracion (package.json, tsconfig.json)

## Para que se utiliza JSON?

| Uso | Ejemplo |
|-----|---------|
| **APIs web** | Respuestas de servidores (REST, GraphQL) |
| **Configuracion** | package.json, tsconfig.json |
| **Almacenamiento** | localStorage, archivos .json |
| **Comunicacion** | Entre microservicios, websockets |
| **Intercambio** | Importar/exportar datos entre sistemas |

Cada vez que una aplicacion se comunica con un servidor web, los datos viajan en formato JSON. Es el idioma universal de la web.

## Diferencia entre JSON y objetos JavaScript

Aunque visualmente se parecen, son conceptos completamente distintos:

| Caracteristica | Objeto JavaScript | JSON |
|----------------|-------------------|------|
| **Naturaleza** | Estructura en memoria | Texto (string) |
| **Claves** | Strings o Symbols, comillas opcionales | Siempre entre comillas dobles |
| **Valores** | Cualquier tipo (funciones, undefined, etc.) | Solo tipos basicos (string, number, boolean, null, array, object) |
| **Funciones** | Permitidas | No permitidas |
| **undefined** | Permitido | No permitido |
| **Comentarios** | No tiene sintaxis para comentarios | No se permiten |
| **Acceso** | `objeto.propiedad` | No se puede acceder directamente (es texto) |
| **Tipo** | `typeof` devuelve "object" | `typeof` devuelve "string" |

```javascript
// Objeto JavaScript (en memoria, manipulable)
const estudiante = { nombre: "Carlos", edad: 20 };
console.log(estudiante.nombre); // "Carlos"

// JSON (texto, necesitas parsear para usar)
const jsonEst = '{"nombre": "Carlos", "edad": 20}';
// jsonEst.nombre NO funciona, es un string
```

## Sintaxis de JSON

### Reglas fundamentales

1. **Las claves (propiedades) deben ir entre comillas dobles** obligatoriamente
2. **Los valores string deben ir entre comillas dobles** obligatoriamente
3. Los separadores son **coma** (`,`) entre elementos y **dos puntos** (`:`) entre clave y valor
4. Se permiten espacios en blanco entre tokens
5. El valor raiz puede ser un **objeto** `{}` o un **array** `[]`

### Tipos de datos permitidos

JSON soporta exactamente estos tipos de datos:

| Tipo | Ejemplo |
|------|---------|
| String | `"Hola mundo"` |
| Number | `42`, `3.14`, `-10` |
| Boolean | `true`, `false` |
| null | `null` |
| Array | `[1, 2, 3]` |
| Object | `{"clave": "valor"}` |

### Strings

Los strings en JSON deben ir entre **comillas dobles**. Se permiten caracteres escapados:

```json
{
    "nombre": "Ana Martinez",
    "mensaje": "Hola \"Mundo\"",
    "ruta": "C:\\Users\\estudiante"
}
```

Caracteres escapados permitidos: `\"`, `\\`, `\n`, `\t`, `\uXXXX` (Unicode).

### Numeros

JSON acepta enteros, decimales y negativos. **NO** acepta `NaN`, `Infinity` ni `-Infinity`:

```json
{
    "edad": 21,
    "promedio": 85.5,
    "temperatura": -5
}
```

### Booleanos

JSON acepta `true` y `false` (sin comillas, en minusculas):

```json
{
    "activo": true,
    "inscrito": false
}
```

### null

`null` representa un valor intencionalmente vacio o ausente:

```json
{
    "nombre": "Pedro",
    "telefono": null
}
```

### Arrays

Los arrays en JSON tienen la misma sintaxis que en JavaScript:

```json
{
    "nombres": ["Ana", "Carlos", "Maria"],
    "notas": [85, 92, 78, 88]
}
```

### Objetos anidados

Los objetos pueden contener otros objetos:

```json
{
    "estudiante": {
        "nombre": "Carlos Lopez",
        "direccion": {
            "calle": "Av. 6 de Agosto",
            "ciudad": "La Paz"
        }
    }
}
```

## Conversion entre objetos y JSON

### JSON.stringify()

Convierte un valor de JavaScript en una cadena de texto JSON.

```javascript
const estudiante = { nombre: "Maria", edad: 21, carrera: "Ing. Sistemas" };

// Conversion basica
const texto = JSON.stringify(estudiante);
console.log(texto);
// '{"nombre":"Maria","edad":21,"carrera":"Ing. Sistemas"}'

// Con formato legible (indentacion de 2 espacios)
const textoBonito = JSON.stringify(estudiante, null, 2);
console.log(textoBonito);
// {
//   "nombre": "Maria",
//   "edad": 21,
//   "carrera": "Ing. Sistemas"
// }
```

**Parametros de JSON.stringify():**
1. `value` - el valor a convertir
2. `replacer` (opcional) - funcion o array para filtrar propiedades
3. `space` (opcional) - numero de espacios o string para indentacion

### JSON.parse()

Convierte una cadena JSON en un valor de JavaScript.

```javascript
const texto = '{"nombre": "Ana", "edad": 22}';
const objeto = JSON.parse(texto);

console.log(objeto.nombre); // "Ana"
console.log(typeof objeto); // "object"
```

**IMPORTANTE:** `JSON.parse()` puede lanzar una excepcion si el texto no es JSON valido. Siempre usa `try...catch`.

## Manejo de errores con try...catch

```javascript
// Forma segura de parsear JSON
function parsearSeguro(texto) {
    try {
        return JSON.parse(texto);
    } catch (error) {
        console.log("Error al parsear: " + error.message);
        return null;
    }
}

const resultado1 = parsearSeguro('{"nombre": "Ana"}'); // { nombre: "Ana" }
const resultado2 = parsearSeguro("texto invalido");      // null (con mensaje de error)
```

## JSON invalido

### Ejemplos de JSON incorrecto

| Error | Ejemplo invalido | Correccion |
|-------|-----------------|------------|
| Comillas simples | `{'nombre': 'Ana'}` | `{"nombre": "Ana"}` |
| Claves sin comillas | `{nombre: "Ana"}` | `{"nombre": "Ana"}` |
| Coma final | `{"a": 1,}` | `{"a": 1}` |
| undefined como valor | `{"a": undefined}` | `{"a": null}` |
| Comentarios | `{"a": 1 /* nota */}` | `{"a": 1}` |
| NaN | `{"a": NaN}` | `{"a": null}` |
| Funciones | `{"fn": function(){}}` | Eliminar la funcion |

## Restricciones de JSON

### Valores no soportados

JSON tiene restricciones importantes. Estos valores de JavaScript **NO se pueden representar** en JSON:

### undefined

Los valores `undefined` son **ignorados** por `JSON.stringify()`. Si una propiedad tiene valor `undefined`, la propiedad completa desaparece:

```javascript
const obj = { nombre: "Ana", telefono: undefined, edad: 21 };
JSON.stringify(obj); // '{"nombre":"Ana","edad":21}'
// La propiedad "telefono" desaparece completamente
```

### Funciones

Las funciones son completamente **ignoradas** al serializar:

```javascript
const obj = {
    nombre: "Ana",
    saludar: function() { return "Hola"; }
};
JSON.stringify(obj); // '{"nombre":"Ana"}'
// La funcion se perdio
```

### Symbol

Los Symbols se ignoran al serializar:

```javascript
const sym = Symbol("id");
const obj = { nombre: "Ana", [sym]: "oculto" };
JSON.stringify(obj); // '{"nombre":"Ana"}'
// El Symbol desaparece
```

### BigInt

`JSON.stringify()` lanza un **error** si encuentra un `BigInt`:

```javascript
const obj = { valor: BigInt(9007199254740991) };
JSON.stringify(obj); // TypeError: Do not know how to serialize a BigInt
```

Si necesitas incluir numeros muy grandes, conviertelos a string antes.

### Referencias circulares

Si un objeto se referencia a si mismo (directa o indirectamente), `JSON.stringify()` lanza un error:

```javascript
const a = { nombre: "A" };
const b = { nombre: "B", ref: a };
a.ref = b; // Referencia circular: a -> b -> a -> b -> ...

JSON.stringify(a); // TypeError: Converting circular structure to JSON
```

## Serializacion de fechas

JSON no tiene tipo de dato para fechas. Los objetos `Date` se convierten a **strings ISO**:

```javascript
const evento = {
    nombre: "Inscripciones",
    fecha: new Date("2026-03-15")
};

const json = JSON.stringify(evento);
// '{"nombre":"Inscripciones","fecha":"2026-03-15T00:00:00.000Z"}'

// Al parsear, la fecha sigue siendo un STRING, no un Date:
const recuperado = JSON.parse(json);
console.log(typeof recuperado.fecha); // "string"

// Debes convertirla manualmente a Date:
const fecha = new Date(recuperado.fecha);
```

## JSON como formato de intercambio

JSON es el formato estandar para comunicacion en la web. El flujo tipico es:

1. Tu aplicacion (cliente) envia una solicitud al servidor
2. El servidor procesa la solicitud
3. El servidor responde con datos en formato JSON
4. Tu aplicacion parsea el JSON y usa los datos

```javascript
// Simulacion de respuesta de un servidor
const respuesta = `{"exito": true, "estudiantes": [{"nombre": "Ana"}]}`;
const datos = JSON.parse(respuesta);
// Ahora puedes trabajar con los datos como objetos JavaScript
```

## Introduccion conceptual a APIs

### Que son las APIs?

Una **API** (Application Programming Interface) es un intermediario que permite que dos aplicaciones se comuniquen. Piensa en ella como un mesero en un restaurante: tu (cliente) haces un pedido, el mesero (API) lleva tu pedido a la cocina (servidor), y te trae la respuesta.

### Como se relacionan con JSON?

Las APIs web usan JSON como formato de comunicacion. Cuando tu navegador necesita datos de un servidor, envia una solicitud HTTP, y el servidor responde con datos en formato JSON. En lecciones futuras aprenderas a usar `fetch()` para hacer estas solicitudes.

Ejemplos de APIs reales que devuelven JSON:
- API del clima: temperatura, humedad, pronostico
- API de mapas: coordenadas, direcciones
- API bancaria: saldo, transacciones

## Buenas practicas

1. **Siempre usa `try...catch` con `JSON.parse()`**
```javascript
try {
    const datos = JSON.parse(texto);
} catch (error) {
    // Manejar el error
}
```

2. **NO uses `JSON.stringify()` como metodo universal para copiar objetos**
```javascript
// MAL: pierde funciones, undefined, symbols
const copia = JSON.parse(JSON.stringify(objeto));
```

3. **Verifica la estructura de los datos despues de parsear**
```javascript
const datos = JSON.parse(texto);
if (datos && Array.isArray(datos.estudiantes)) {
    // Procesar estudiantes
}
```

4. **Maneja fechas explicitamente despues de parsear**
```javascript
const datos = JSON.parse(texto);
datos.fecha = new Date(datos.fecha); // Convertir string a Date
```

5. **Usa indentacion para debugging**
```javascript
console.log(JSON.stringify(datos, null, 2)); // Formato legible
```

6. **Ten cuidado con numeros muy grandes**
Los numeros enteros en JavaScript pierden precision mas alla de `Number.MAX_SAFE_INTEGER`.

## Errores comunes

| Error | Causa | Solucion |
|-------|-------|----------|
| `Unexpected token` | JSON invalido (comillas simples, comas extra) | Verificar sintaxis |
| `Converting circular structure` | Referencia circular en el objeto | Usar solucion personalizada |
| `Do not know how to serialize a BigInt` | Valor BigInt en el objeto | Convertir a string primero |
| Fecha como string despues de parse | JSON no tiene tipo Date | Convertir manualmente con `new Date()` |
| Propiedades desaparecidas | Valores `undefined`, funciones o Symbol | Usar otro metodo de copia |
| Confundir JSON con objeto | Tratar un string como objeto | Usar `JSON.parse()` primero |

## Ejercicios practicos

1. **Crear un objeto y convertirlo a JSON** con formato legible
2. **Convertir un string JSON a un objeto** y mostrar sus propiedades
3. **Crear un array de objetos** y serializarlo/deserializarlo
4. **Trabajar con un objeto anidado** desde JSON
5. **Identificar JSON valido e invalido** entre varios candidatos
6. **Manejo de errores** con `try...catch` al parsear
7. **Convertir informacion de productos** a JSON y manejar fechas
8. **Recuperar datos JSON** y calcular promedios y estadisticas

Consulta el archivo `ejercicios.js` para los enunciados completos.

## Practica integradora del modulo

### Procesador de datos academicos

La practica integradora (`practica-integradora.js`) es un proyecto completo que combina **todos los conceptos** de las lecciones 33 a 42 del modulo de JavaScript. Construye un sistema que:

**Funcionalidad:**
- Recibe datos de estudiantes en formato JSON (simulando una API)
- Valida los datos (JSON invalido, campos faltantes, IDs duplicados)
- Calcula promedios individuales y generales
- Determina quienes aprobaron y reprobaron (nota minima: 51)
- Busca estudiantes por ID y nombre
- Ordena por promedio (ranking)
- Formatea fechas de inscripcion
- Genera un reporte completo en consola
- Exporta el resumen de vuelta a JSON

**Conceptos integrados:**

| Leccion | Concepto aplicado |
|---------|-------------------|
| 33 - Funciones | Funciones reutilizables para calculos |
| 34 - Scope y arrow functions | Arrow functions en callbacks de array |
| 35 - Strings | `toLowerCase()`, `includes()`, `join()`, template literals |
| 36 - Numeros y Math | `toFixed()`, `Math.max()`, `Math.min()`, `isNaN()` |
| 37 - Arrays | Creacion, acceso, iteracion, `length` |
| 38 - Metodos de arrays | `map()`, `filter()`, `reduce()`, `sort()`, `some()`, `every()`, `find()` |
| 39 - Objetos | `Object.hasOwn()`, `Object.keys()`, arrays de objetos |
| 40 - Desestructuracion/spread/rest | Extraer propiedades, copiar objetos |
| 41 - Fechas | `Date`, `toLocaleDateString()`, `getMonth()`, validacion |
| 42 - JSON | `JSON.parse()`, `JSON.stringify()`, manejo de errores |

**Estructura del archivo:**
1. Datos de entrada (JSON string)
2. Funciones de validacion
3. Funciones de calculo
4. Funciones de ordenamiento y resumen
5. Funcion de impresion del reporte
6. Funciones adicionales de analisis
7. Ejecucion principal
8. Demostracion de casos especiales

El archivo demuestra que puedes construir un sistema funcional completo usando solo JavaScript puro, sin frameworks ni bibliotecas externas.

## Resumen de la leccion

En esta leccion aprendiste:
- Que es JSON y cual es su proposito (formato de texto para intercambio de datos)
- Las diferencias fundamentales entre JSON y objetos JavaScript
- Las reglas estrictas de sintaxis de JSON
- Los tipos de datos permitidos en JSON (string, number, boolean, null, array, object)
- Convertir objetos a JSON con `JSON.stringify()`
- Convertir JSON a objetos con `JSON.parse()`
- Manejar errores de parseo con `try...catch`
- Las restricciones de JSON (no permite funciones, undefined, Symbol, BigInt, comentarios, referencias circulares)
- Como se serializan las fechas (se convierten a strings ISO)
- El rol de JSON en APIs y comunicacion web

**Conceptos clave que debes recordar:**
- JSON es **texto**, no un objeto JavaScript
- Las claves en JSON **siempre** van entre comillas dobles
- `JSON.parse()` puede lanzar excepciones, siempre usa `try...catch`
- `JSON.stringify()` no es una solucion universal para copiar objetos
- Las fechas se serializan como strings ISO y hay que convertirlas manualmente

## Resumen del modulo completo (lecciones 33-42)

Has completado el modulo de JavaScript. Estos son los conceptos que dominas ahora:

| Leccion | Tema | Concepto principal |
|---------|------|--------------------|
| 33 | Funciones | Declaracion, parametros, retornos, funciones como ciudadanos de primera clase |
| 34 | Scope y arrow functions | Scope global, de funcion y de bloque, arrow functions, closures |
| 35 | Strings | Metodos de manipulacion de texto, template literals |
| 36 | Numeros y Math | `parseInt()`, `parseFloat()`, `toFixed()`, `Math` |
| 37 | Arrays | Creacion, acceso, iteracion, metodos basicos |
| 38 | Metodos de arrays | `map()`, `filter()`, `reduce()`, `sort()`, `find()`, `some()`, `every()` |
| 39 | Objetos | Creacion, propiedades, metodos, `this`, objetos anidados, `Object` staticos |
| 40 | Desestructuracion/spread/rest | Extraer valores, copiar y combinar con `...` |
| 41 | Fechas | Objeto `Date`, creacion, consulta, comparacion, formateo |
| 42 | JSON | `JSON.parse()`, `JSON.stringify()`, sintaxis, restricciones, APIs |

## Que sigue?

Con estos fundamentos de JavaScript estas listo para avanzar a la interaccion con paginas web:

- **DOM (Document Object Model):** manipular elementos HTML desde JavaScript, crear contenido dinamico
- **Eventos:** responder a clics, teclas, movimientos del mouse y otras interacciones del usuario
- **Formularios:** validar datos de formularios, capturar inputs, mostrar mensajes de error
- **localStorage:** almacenar datos en el navegador usando JSON, mantener informacion entre sesiones
- **Fetch y APIs:** hacer solicitudes HTTP reales a servidores, consumir APIs REST con `fetch()`

Estos temas te permitiran construir aplicaciones web interactivas y completas, combinando HTML, CSS y JavaScript.
