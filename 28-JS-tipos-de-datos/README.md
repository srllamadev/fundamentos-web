# Lección 28 - Tipos de Datos

## Objetivo de aprendizaje

Al finalizar esta lección, serás capaz de identificar y utilizar todos los tipos de datos
que existen en JavaScript. Comprenderás la diferencia entre tipos primitivos y objetos,
aprenderás a usar el operador `typeof` correctamente y conocerás las particularidades
del lenguaje como el comportamiento de `null` y los valores especiales.

---

## ¿Qué aprenderemos?

- Qué es un tipo de dato y por qué es importante
- Cómo funciona el tipado dinámico en JavaScript
- Los 7 tipos de datos primitivos: `string`, `number`, `boolean`, `undefined`, `null`, `bigint`, `symbol`
- Los objetos como tipo no primitivo (introducción)
- El operador `typeof` para identificar tipos
- Diferencias entre datos primitivos y objetos
- Valores especiales: `NaN`, `Infinity`, `-Infinity`
- La particularidad histórica de `typeof null`
- Buenas prácticas para trabajar con tipos de datos

---

## 1. ¿Qué es un tipo de dato?

Un **tipo de dato** define la naturaleza de la información que puede almacenar una variable.
Determina qué operaciones se pueden realizar con ella y cómo se representa internamente en memoria.

Por ejemplo:
- Con un número puedes hacer operaciones matemáticas (`2 + 3 = 5`)
- Con un texto puedes concatenar strings (`"Hola" + " Mundo"`)
- Con un booleano puedes evaluar condiciones (`true / false`)

JavaScript tiene **8 tipos de datos** organizados en dos categorías:

| Categoría | Tipos |
|-----------|-------|
| Primitivos (7) | `string`, `number`, `boolean`, `undefined`, `null`, `bigint`, `symbol` |
| No primitivo (1) | `object` (incluye arrays, objetos, funciones, etc.) |

---

## 2. Tipado dinámico

JavaScript es un lenguaje de **tipado dinámico**. Esto significa que:

1. **No necesitas declarar el tipo** de una variable al crearla.
2. **Una variable puede cambiar de tipo** durante la ejecución del programa.

```javascript
let valor = "Hola";      // Ahora es string
console.log(typeof valor); // "string"

valor = 42;              // Ahora es number
console.log(typeof valor); // "number"

valor = true;            // Ahora es boolean
console.log(typeof valor); // "boolean"
```

> **Nota:** Aunque es posible cambiar el tipo de una variable, generalmente es buena práctica
> mantener un tipo consistente para que el código sea más predecible y fácil de mantener.

---

## 3. Tipos de datos primitivos

Los tipos primitivos son **inmutables** (no se pueden modificar directamente) y se
almacenan **por valor**.

### String

Representa **texto o cadenas de caracteres**. Se escribe entre comillas dobles (`"`),
simples (`'`) o backticks (`` ` ``).

```javascript
const nombre = "María";
const apellido = 'García';
const saludo = `Hola, ${nombre}!`; // Template literal

console.log(nombre);        // "María"
console.log(saludo);        // "Hola, María!"
console.log(typeof nombre); // "string"
```

| Ejemplo | ¿Es string? |
|---------|-------------|
| `"42"` | Sí, es texto |
| `"true"` | Sí, es texto |
| `""` | Sí, string vacío |
| `" "` | Sí, string con espacio |

### Number

Representa **números**: enteros, decimales y negativos. En JavaScript todos pertenecen
al mismo tipo `number`.

```javascript
const edad = 25;
const precio = 19.99;
const temperatura = -8;
const pi = 3.14159;

console.log(typeof edad);    // "number"
console.log(typeof precio);  // "number"
```

> **Importante:** No existe diferencia entre enteros y decimales en JavaScript.
> Todos son del tipo `number`.

### Boolean

Representa valores de **verdadero o falso**: `true` o `false`.

```javascript
const esMayor = true;
const tieneHijos = false;

console.log(typeof esMayor);    // "boolean"
console.log(typeof tieneHijos); // "boolean"
```

Los booleanos se usan para representar **estados** o **condiciones**:
- ¿Está conectado? → `true`
- ¿Está eliminado? → `false`
- ¿Es viernes? → `false`

### Undefined

Aparece cuando una variable ha sido **declarada pero no se le ha asignado ningún valor**.

```javascript
let sinValor;
console.log(sinValor);          // undefined
console.log(typeof sinValor);   // "undefined"
```

`undefined` significa "no definido" o "sin valor". Generalmente indica que algo
no se ha inicializado todavía.

### Null

Representa la **ausencia intencional** de un valor. Se asigna de forma explícita
cuando queremos indicar que una variable está "vacía".

```javascript
let resultado = null;
console.log(resultado);          // null
console.log(typeof resultado);   // "object" (¡quirk histórico!)
```

**Diferencia clave entre `undefined` y `null`:**

| Concepto | undefined | null |
|----------|-----------|------|
| Significado | Sin valor asignado | Vacío intencionalmente |
| Cómo se produce | Automático (JS lo asigna) | Manual (el programador lo asigna) |
| Intención | Accidental / por defecto | Deliberada |
| typeof | `"undefined"` | `"object"` (error histórico) |

### BigInt

Se usa para representar **números extremadamente grandes** que superan el límite
seguro de `number`. Se crea agregando `n` al final del número.

```javascript
const numeroGrande = 9007199254740991n;
const otro = BigInt("123456789012345678901234567890");

console.log(typeof numeroGrande); // "bigint"
```

> **Nota:** No se pueden mezclar `BigInt` y `number` en operaciones aritméticas directas.

### Symbol

Crea valores **únicos e irrepetibles**. Se usa en temas avanzados como propiedades
privadas en objetos.

```javascript
const id1 = Symbol("id");
const id2 = Symbol("id");

console.log(id1 === id2);       // false (siempre son únicos)
console.log(typeof id1);        // "symbol"
```

---

## 4. Objetos (introducción)

Los **objetos** son el tipo **no primitivo** de JavaScript. Permiten agrupar múltiples
valores usando pares de `clave: valor`.

```javascript
// Objeto vacío
const vacio = {};
console.log(typeof vacio); // "object"

// Objeto con datos
const persona = {
    nombre: "Carlos",
    edad: 30,
    esEstudiante: false
};
console.log(typeof persona); // "object"

// Arrays también son objetos internamente
const colores = ["rojo", "verde", "azul"];
console.log(typeof colores); // "object"
```

> **Importante:** Los arrays y los objetos se estudiarán en detalle en lecciones posteriores.
> Por ahora, solo recuerda que `typeof` devuelve `"object"` para ambos.

---

## 5. El operador typeof

El operador `typeof` permite conocer el tipo de dato de cualquier valor o variable.

```javascript
console.log(typeof "Hola");       // "string"
console.log(typeof 42);           // "number"
console.log(typeof true);         // "boolean"
console.log(typeof undefined);    // "undefined"
console.log(typeof null);         // "object"
console.log(typeof 100n);         // "bigint"
console.log(typeof Symbol("id")); // "symbol"
console.log(typeof {});           // "object"
console.log(typeof []);           // "object"
```

**Tabla de referencia completa:**

| Valor | `typeof` devuelve |
|-------|-------------------|
| `"Hola"` | `"string"` |
| `42` | `"number"` |
| `3.14` | `"number"` |
| `true` | `"boolean"` |
| `false` | `"boolean"` |
| `undefined` | `"undefined"` |
| `null` | `"object"` (¡cuidado!) |
| `100n` | `"bigint"` |
| `Symbol("desc")` | `"symbol"` |
| `{}` | `"object"` |
| `[]` | `"object"` |
| `NaN` | `"number"` |
| `Infinity` | `"number"` |

---

## 6. Datos primitivos vs objetos

| Característica | Primitivos | Objetos |
|----------------|------------|---------|
| Tipos | string, number, boolean, undefined, null, bigint, symbol | object (incluye arrays, funciones) |
| Mutabilidad | Inmutables | Mutables |
| Almacenamiento | Por valor | Por referencia |
| Comparación | Por valor | Por referencia |
| `typeof` | Devuelve su tipo específico | Devuelve `"object"` |

```javascript
// Primitivos: se copian por valor
const a = 10;
const b = a; // b es una copia independiente
console.log(a === b); // true

// Objetos: se copian por referencia
const obj1 = { valor: 10 };
const obj2 = obj1; // obj2 apunta al mismo objeto en memoria
```

---

## 7. Valores especiales: NaN e Infinity

Son valores especiales del tipo `number` que representan situaciones matemáticas particulares.

### NaN (Not a Number)

Aparece cuando una operación matemática no tiene sentido:

```javascript
console.log("hola" * 2);     // NaN
console.log(0 / 0);          // NaN
console.log(undefined + 1);  // NaN

console.log(typeof NaN);     // "number" (¡NaN es técnicamente un number!)
```

### Infinity

Representa el infinito matemático:

```javascript
console.log(1 / 0);          // Infinity
console.log(-1 / 0);         // -Infinity
console.log(999999 * 999999999999); // Infinity

console.log(typeof Infinity);    // "number"
console.log(typeof -Infinity);   // "number"
```

---

## 8. La particularidad de typeof null

`typeof null` devuelve `"object"`, ¡pero **null NO es un objeto**!

Esto es un **bug histórico** de JavaScript que se mantiene por compatibilidad con
código existente desde los inicios del lenguaje.

```javascript
const valor = null;
console.log(typeof valor);     // "object" ← ¡Incorrecto!

// Forma correcta de verificar null:
console.log(valor === null);   // true
```

> **Regla:** Para verificar si algo es `null`, usa siempre comparación directa (`=== null`),
> nunca confíes en `typeof`.

---

## 9. Buenas prácticas

1. **Usa `const` por defecto** y `let` solo cuando necesites reasignar.

2. **Verifica `null` con `===`**, no con `typeof`:
   ```javascript
   if (valor === null) { ... }
   ```

3. **Detecta arrays con `Array.isArray()`**:
   ```javascript
   const arr = [1, 2, 3];
   console.log(Array.isArray(arr)); // true
   ```

4. **Nombra variables según su contenido** para que el tipo sea implícito:
   ```javascript
   const nombreUsuario = "ana";     // claramente string
   const edadUsuario = 28;          // claramente number
   const activoUsuario = true;      // claramente boolean
   ```

5. **Evita cambiar el tipo de una variable** después de declararla.

6. **Usa `typeof` para verificaciones generales**, pero conoce sus limitaciones.

---

## 10. Errores comunes

### Error 1: Confiar en `typeof null`
```javascript
// MAL
if (typeof valor === "object") {
    // Se ejecuta también cuando valor es null
}

// BIEN
if (valor !== null && typeof valor === "object") {
    // Solo se ejecuta para objetos reales
}
```

### Error 2: Confundir string con number
```javascript
const edad = "25";      // Es texto, no número
const edadReal = 25;    // Es número

console.log(edad + 5);   // "255" (concatena texto)
console.log(edadReal + 5); // 30 (suma números)
```

### Error 3: Creer que `typeof NaN` es distinto de number
```javascript
console.log(typeof NaN); // "number"
// NaN significa "Not a Number" pero su tipo es number
```

### Error 4: Mezclar null y undefined
```javascript
let a;             // undefined (sin valor asignado)
let b = null;      // null (vacío intencionalmente)
// No son lo mismo, aunque ambos representen "ausencia de valor"
```

---

## 11. Ejercicios prácticos

### Ejercicio 1: Identificar tipos

Sin ejecutar el código, predice qué tipo de dato es cada valor. Verifica con `typeof`.

```javascript
const a = "42";        // ¿string o number?
const b = 42;          // ¿string o number?
const c = true;        // ¿boolean o string?
const d = null;        // ¿undefined o null?
const e = "";          // ¿string o undefined?
const f = "false";     // ¿boolean o string?
```

### Ejercicio 2: Registro de estudiante

Declara variables con el tipo adecuado para un registro de estudiante:
nombre, edad, email, promedio, estado activo, fecha de inscripción,
materia favorita e identificación única. Imprime cada una con su tipo.

### Ejercicio 3: Resultados de typeof

Predice y luego verifica qué devuelve `typeof` para cada uno de estos valores:
`"Hola"`, `100`, `false`, `undefined`, `null`, `3.14`, `{}`, `[]`, `"42"`,
`Symbol("id")`, `999n`, `NaN`.

### Ejercicio 4: null vs undefined

Explica con tus propias palabras la diferencia entre `null` y `undefined`.
Analiza estos casos:

```javascript
let variableA;                    // ¿null o undefined?
let variableB = null;             // ¿null o undefined?
let variableC = "datos"; variableC = null; // ¿qué representa null aquí?
```

### Ejercicio 5: Cambio de tipo

Analiza qué sucede cuando una variable cambia de tipo:

```javascript
let dato = "Inicio";
dato = 100;
dato = true;
dato = null;
dato = undefined;
dato = 42.5;
```

¿Es válido? ¿Qué pasa con el valor anterior? ¿Es buena práctica?

---

## 12. Reto adicional

Dado que `typeof null` devuelve `"object"`, investiga y escribe una forma fiable
de distinguir entre un valor `null` y un objeto real. Pista: usa comparación directa
y `typeof` en combinación.

---

## 13. Resumen de la lección

| Concepto | Descripción |
|----------|-------------|
| Tipo de dato | Define la naturaleza de un valor y qué operaciones permite |
| Tipado dinámico | Las variables pueden cambiar de tipo sin declaración explícita |
| `string` | Texto entre comillas |
| `number` | Enteros, decimales, negativos, NaN, Infinity |
| `boolean` | `true` o `false` |
| `undefined` | Variable declarada sin valor asignado |
| `null` | Ausencia intencional de valor |
| `bigint` | Números extremadamente grandes (terminados en `n`) |
| `symbol` | Valores únicos e irrepetibles |
| `object` | Tipo no primitivo (objetos, arrays, funciones) |
| `typeof` | Operador que devuelve el tipo de un valor |
| `typeof null` | Devuelve `"object"` por bug histórico |
| `NaN` | Not a Number (tipo `number`, operación inválida) |
| `Infinity` | Infinito (tipo `number`) |

**Recuerda:**
- JavaScript tiene **7 tipos primitivos** y **1 no primitivo** (`object`).
- Usa `const` por defecto, `let` cuando necesites reasignar.
- Verifica `null` con `=== null`, no con `typeof`.
- Usa `Array.isArray()` para detectar arrays correctamente.

---

## 14. Siguiente lección

En la **Lección 29** veremos los **Operadores en JavaScript**: aritméticos, de asignación,
de comparación y lógicos. Aprenderás a combinar valores y variables para realizar cálculos
y tomar decisiones en tu código.
