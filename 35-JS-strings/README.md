# Leccion 35 - Cadenas de Texto (Strings)

## Objetivo de aprendizaje

Al finalizar esta leccion, seras capaz de crear, manipular y transformar cadenas de texto (strings) en JavaScript. Comprenderas los metodos mas utilizados para buscar, extraer, reemplazar y formatear texto, asi como las propiedades fundamentales de los strings.

## Conocimientos previos

- Variables con `const` y `let` (Leccion 31)
- Tipos de datos primitivos (Leccion 32)
- Operadores basicos (Leccion 33)
- Condicionales if/else (Leccion 34)

## Introduccion

Los strings son uno de los tipos de datos mas utilizados en programacion. Representan texto y son fundamentales para mostrar informacion al usuario, procesar datos, validar formularios y mucho mas.

En JavaScript, un string es una secuencia de caracteres encerrada entre comillas. Puede contener letras, numeros, simbolos, espacios y caracteres especiales.

```javascript
const nombre = "Maria";
const saludo = "Hola, como estas?";
const numero = "123";
```

## Creacion de cadenas

JavaScript ofrece tres formas de crear strings:

### Comillas dobles

```javascript
const texto = "Hola mundo";
```

### Comillas simples

```javascript
const texto = 'Hola mundo';
```

### Template literals (backticks)

```javascript
const texto = `Hola mundo`;
```

Las comillas simples son utiles cuando el texto contiene comillas dobles:

```javascript
const cita = 'El dijo: "Hola a todos"';
```

Las comillas dobles son utiles cuando el texto contiene comillas simples:

```javascript
const frase = "Bolivia es un pais maravilloso";
```

## Interpolacion y concatenacion

### Interpolacion con template literals

Los template literals permiten insertar expresiones dentro de un string usando `${}`:

```javascript
const nombre = "Carlos";
const edad = 25;
const mensaje = `Me llamo ${nombre} y tengo ${edad} anos`;
```

Dentro de `${}` puedes usar cualquier expresion valida de JavaScript:

```javascript
const resultado = `La suma de 5 + 3 es ${5 + 3}`;
```

### Concatenacion con +

Antes de los template literals, la forma de unir strings era con el operador `+`:

```javascript
const nombre = "Ana";
const saludo = "Hola, " + nombre + "!";
```

**Recomendacion**: Usa template literals cuando necesites insertar variables o expresiones. Son mas legibles y menos propensos a errores.

## Acceso a caracteres

### Indice con bracket notation

Cada caracter en un string tiene una posicion numerica que empieza en 0:

```javascript
const pais = "Bolivia";
console.log(pais[0]); // "B"
console.log(pais[3]); // "i"
console.log(pais[pais.length - 1]); // "a" (ultimo caracter)
```

### Metodo charAt()

Devuelve el caracter en la posicion indicada:

```javascript
const pais = "Bolivia";
console.log(pais.charAt(0)); // "B"
console.log(pais.charAt(4)); // "v"
```

### Metodo at()

Metodo moderno que permite indices negativos (cuentan desde el final):

```javascript
const pais = "Bolivia";
console.log(pais.at(-1)); // "a" (ultimo)
console.log(pais.at(-2)); // "i" (penultimo)
```

## Metodos de transformacion

### Mayusculas y minusculas

```javascript
const texto = "Hola Bolivia";
console.log(texto.toUpperCase()); // "HOLA BOLIVIA"
console.log(texto.toLowerCase()); // "hola bolivia"
```

**Importante**: Estos metodos NO modifican el string original. Devuelven un nuevo string.

### Eliminar espacios

```javascript
const entrada = "   Hola   ";
console.log(entrada.trim());      // "Hola" (elimina al inicio y final)
console.log(entrada.trimStart()); // "Hola   " (elimina solo al inicio)
console.log(entrada.trimEnd());   // "   Hola" (elimina solo al final)
```

## Metodos de busqueda

### includes, startsWith, endsWith

```javascript
const texto = "El saltena es delicioso";

console.log(texto.includes("saltena"));     // true
console.log(texto.includes("taco"));        // false

console.log(texto.startsWith("El"));        // true
console.log(texto.startsWith("el"));        // false (sensible a mayusculas)

console.log(texto.endsWith("delicioso"));   // true
```

### indexOf

Devuelve la posicion de la primera aparicion de una subcadena:

```javascript
const texto = "La paz es hermosa";
console.log(texto.indexOf("paz"));  // 3
console.log(texto.indexOf("sol"));  // -1 (no existe)
```

Si devuelve -1, significa que la subcadena no se encontro.

## Metodos de extraccion

### slice

Extrae una porcion del string. Recibe el indice inicial y el indice final (sin incluirlo):

```javascript
const palabra = "Independencia";
console.log(palabra.slice(0, 5));  // "Indep"
console.log(palabra.slice(5));     // "endencia"
console.log(palabra.slice(-3));    // "cia" (ultimos 3 caracteres)
```

Acepta indices negativos.

### substring

Similar a `slice()`, pero no acepta indices negativos:

```javascript
const palabra = "Cochabamba";
console.log(palabra.substring(0, 4)); // "Coch"
console.log(palabra.substring(4));    // "abamba"
```

## Metodos de reemplazo

### replace y replaceAll

```javascript
const texto = "La saltena es rica. La saltena es de Bolivia.";

// Reemplaza solo la primera aparicion
console.log(texto.replace("saltena", "empanada"));
// "La empanada es rica. La saltena es de Bolivia."

// Reemplaza todas las apariciones
console.log(texto.replaceAll("saltena", "empanada"));
// "La empanada es rica. La empanada es de Bolivia."
```

## Metodos de division y repeticion

### split

Divide un string en un array usando un separador:

```javascript
const csv = "Juan,Perez,25,La Paz";
const datos = csv.split(",");
// ["Juan", "Perez", "25", "La Paz"]

const oracion = "Bolivia es hermoso";
const palabras = oracion.split(" ");
// ["Bolivia", "es", "hermoso"]
```

### repeat

Repite un string N veces:

```javascript
console.log("*".repeat(5));     // "*****"
console.log("-=".repeat(10));   // "-=-=-=-=-=-=-=-=-="
```

## Relleno de cadenas

### padStart y padEnd

```javascript
const numero = "5";
console.log(numero.padStart(3, "0")); // "005"
console.log(numero.padEnd(5, "."));   // "5...."

// Ejemplo practico: codigos de estudiante
const codigo = "7";
console.log("EST-" + codigo.padStart(3, "0")); // "EST-007"
```

## Caracteres de escape

Los caracteres de escape permiten incluir caracteres especiales:

| Caracter | Significado |
|----------|-------------|
| `\n`     | Salto de linea |
| `\t`     | Tabulacion |
| `\\`     | Backslash |
| `\"`     | Comilla doble |
| `\'`     | Comilla simple |

```javascript
console.log("Linea 1\nLinea 2");
console.log("Nombre\tEdad");
console.log("Ruta: C:\\Users\\documentos");
```

## Inmutabilidad de los strings

**Concepto importante**: Los strings en JavaScript son INMUTABLES. Los metodos NO modifican el string original, siempre devuelven un nuevo string.

```javascript
const original = "Hola";
const mayusculas = original.toUpperCase();

console.log(original);    // "Hola" (no cambio)
console.log(mayusculas);  // "HOLA"
```

Para guardar el resultado, debes asignarlo a una variable:

```javascript
const texto = "   Hola   ";
const limpio = texto.trim();
console.log(limpio); // "Hola"
```

## Sensibilidad a mayusculas

Las comparaciones de strings distinguen entre mayusculas y minusculas:

```javascript
console.log("Hola" === "hola");   // false
console.log("BOLIVIA" === "bolivia"); // false
```

Los metodos de busqueda tambien son sensibles:

```javascript
const texto = "Juan Perez";
console.log(texto.includes("juan")); // false
console.log(texto.includes("Juan")); // true
```

**Truco**: Convierte ambos strings a minusculas antes de comparar:

```javascript
const textoLower = texto.toLowerCase();
console.log(textoLower.includes("juan")); // true
```

## Buenas practicas

1. **Usa template literals para interpolacion**: Son mas legibles que la concatenacion con `+`.

2. **Limpia entradas de usuario con trim()**: Siempre elimina espacios sobrantes antes de procesar datos.

3. **Convierte a minusculas para comparaciones**: Evita errores de case sensitivity.

4. **Usa const por defecto**: Solo usa `let` si necesitas reasignar la variable.

5. **Usa replaceAll() en lugar de replace() cuando necesites reemplazar todas las ocurrencias**.

6. **Usa includes() en lugar de indexOf()** para verificar existencia: es mas legible.

## Errores comunes

1. **Olvidar que los strings son inmutables**:

```javascript
const texto = "Hola";
texto.toUpperCase(); // Esto NO modifica "texto"
console.log(texto);  // Sigue siendo "Hola"
```

2. **Confundir indices negativos en substring()**: `substring()` no acepta indices negativos, usa `slice()` en su lugar.

3. **No manejar cadenas vacias en split()**:

```javascript
const vacio = "";
console.log(vacio.split(" ")); // [""] (array con un elemento vacio, no array vacio)
```

4. **Olvidar que length cuenta espacios**:

```javascript
const texto = "Hola mundo";
console.log(texto.length); // 10 (el espacio cuenta)
```

5. **Comparar strings sin considerar mayusculas**:

```javascript
"Juan" === "juan"; // false
```

## Ejercicios practicos

Resuelve estos ejercicios en el archivo `ejercicios.js`:

1. **Contar caracteres de un nombre**: Cuenta cuantos caracteres tiene el nombre de un estudiante.

2. **Convertir frase a mayusculas y minusculas**: Toma una frase y muestra ambas versiones.

3. **Eliminar espacios al inicio y final**: Limpia una cadena con espacios sobrantes.

4. **Obtener las primeras 3 letras de una palabra**: Usa `slice()` para extraer las primeras 3 letras.

5. **Buscar una palabra dentro de una oracion**: Verifica si una palabra existe en una oracion.

6. **Reemplazar una palabra en una oracion**: Cambia una palabra por otra.

7. **Contar palabras en una oracion**: Cuenta cuantas palabras tiene una oracion, manejando espacios multiples y cadenas vacias.

8. **Crear codigo de estudiante con padding**: Genera codigos con formato "EST-XXX" usando `padStart()`.

## Reto adicional

Crea un **normalizador de nombres** que:

- Reciba un nombre completo con espacios extra
- Elimine los espacios al inicio y final
- Elimine espacios multiples entre palabras (deje solo un espacio)
- Capitalice la primera letra de cada palabra
- Devuelva el nombre normalizado

**Pistas**:

- Usa `trim()` para eliminar espacios al inicio y final
- Usa `split(" ")` para dividir en palabras
- Usa `filter()` para eliminar palabras vacias
- Crea una funcion que capitalice la primera letra de una palabra
- Usa un bucle para procesar cada palabra
- Usa `join(" ")` para unir las palabras de nuevo

**Ejemplo**:

```javascript
// Entrada: "   juan   carlos   mendoza  "
// Salida: "Juan Carlos Mendoza"
```

**Estructura sugerida**:

```javascript
// Funcion para capitalizar una palabra
function capitalizar(palabra) {
    // Tu codigo aqui
}

// Funcion para normalizar un nombre
function normalizarNombre(nombre) {
    // Tu codigo aqui
}

// Pruebas
console.log(normalizarNombre("   juan   carlos   mendoza  "));
console.log(normalizarNombre("  maria   FERNANDA   lopez  "));
```

## Resumen

En esta leccion aprendiste:

- **Crear strings** con comillas dobles, simples y template literals
- **Interpolar variables** con `${}` en template literals
- **Concatenar strings** con el operador `+`
- **Acceder a caracteres** con `[]`, `charAt()` y `at()`
- **Transformar texto** con `toUpperCase()`, `toLowerCase()`, `trim()`
- **Buscar texto** con `includes()`, `startsWith()`, `endsWith()`, `indexOf()`
- **Extraer porciones** con `slice()` y `substring()`
- **Reemplazar texto** con `replace()` y `replaceAll()`
- **Dividir strings** con `split()`
- **Repetir strings** con `repeat()`
- **Rellenar strings** con `padStart()` y `padEnd()`
- **Usar caracteres de escape** como `\n`, `\t`, `\\`
- **Entender la inmutabilidad** de los strings
- **Manejar la sensibilidad a mayusculas** en comparaciones

## Siguiente leccion

En la **Leccion 36 - Numeros y Math**, aprenderas a trabajar con numeros en JavaScript, el objeto `Math` y sus metodos para operaciones matematicas, redondeo, numeros aleatorios y mas.
