# Lección 30 - Conversión de Tipos

## Objetivo de aprendizaje

Al finalizar esta lección, serás capaz de convertir datos entre diferentes tipos en JavaScript
de forma explícita e implícita. Comprenderás cuándo y cómo usar `String()`, `Number()`,
`Boolean()`, `parseInt()` y `parseFloat()`, conocerás los valores truthy y falsy, entenderás
el valor NaN y evitarás los errores más comunes al convertir datos.

---

## ¿Qué aprenderemos?

- Qué significa convertir un tipo de dato y por qué es necesario
- Conversión explícita: `String()`, `Number()`, `Boolean()`, `parseInt()`, `parseFloat()`
- Conversión implícita (coerción): cómo JavaScript convierte tipos automáticamente
- Diferencias entre `Number()`, `parseInt()` y `parseFloat()`
- Valores truthy y falsy
- El valor `NaN` y cómo detectarlo con `Number.isNaN()`
- Conversiones útiles para el día a día
- Errores comunes al convertir datos

> **Nota:** En algunos ejemplos podrías ver la función `prompt()` mencionada como demostración.
> `prompt()` muestra una ventana emergente para que el usuario escriba algo y **siempre devuelve
> un string** (o `null` si el usuario cancela). No es necesaria para que esta lección funcione,
> pero es un caso real donde necesitas conversión de tipos.

---

## 1. ¿Qué es convertir un tipo de dato?

Convertir un tipo de dato significa **transformar un valor de un tipo a otro**. Por ejemplo:

- De string `"25"` a number `25`
- De number `1` a boolean `true`
- De boolean `false` a string `"false"`

¿Por qué necesitamos esto? Porque en la práctica los datos no siempre llegan en el formato
que necesitamos. Un ejemplo muy común: **`prompt()` siempre devuelve un string**, aunque el
usuario escriba un número.

```javascript
// Si usáramos prompt() (solo como ejemplo, no es necesario para esta lección):
// const edad = prompt("Ingresa tu edad:");  // El usuario escribe 25
// console.log(typeof edad);                  // "string" ← siempre es texto
// const edadNumero = Number(edad);           // Ahora sí es number: 25
```

```javascript
const textoEdad = "25";
const edadReal = 25;

console.log("Texto:", textoEdad, "→ Tipo:", typeof textoEdad);   // string
console.log("Número:", edadReal, "→ Tipo:", typeof edadReal);     // number
console.log("¿Son iguales?", textoEdad === edadReal);             // false
```

Aunque `"25"` y `25` parecen lo mismo, son tipos distintos y se comportan diferente
en las operaciones.

---

## 2. Conversión explícita

La **conversión explícita** ocurre cuando **nosotros decidimos** cambiar el tipo de un dato
usando funciones especiales. Es clara y visible en el código.

```javascript
const precioTexto = "49.99";
const precioNumero = Number(precioTexto);

console.log(typeof precioTexto);  // "string"
console.log(typeof precioNumero); // "number"
```

### String()

Convierte cualquier valor a su representación en texto.

```javascript
String(25);        // "25"
String(3.14);      // "3.14"
String(true);      // "true"
String(false);     // "false"
String(null);      // "null"
String(undefined); // "undefined"
```

**Ejemplo con contexto boliviano:**

```javascript
const nota = 85;
const notaTexto = String(nota);
console.log("La nota de María es:", notaTexto);
```

### Number()

Convierte un valor a número. Si no puede, devuelve `NaN`.

```javascript
Number("25");       // 25
Number("3.14");     // 3.14
Number("hola");     // NaN ← No se puede convertir
Number("abc123");   // NaN ← Si tiene letras, falla por completo
Number(true);       // 1
Number(false);      // 0
Number("");         // 0 ← String vacío → 0
Number(" ");        // 0 ← Espacios → 0
Number(null);       // 0
Number(undefined);  // NaN
```

### Boolean()

Convierte cualquier valor a `true` o `false`.

```javascript
Boolean("");          // false → String vacío
Boolean(0);           // false → Cero
Boolean(false);       // false
Boolean(null);        // false
Boolean(undefined);   // false
Boolean(NaN);         // false

Boolean("hola");      // true → Texto con contenido
Boolean("false");     // true ← ¡OJO! El texto "false" es truthy
Boolean(25);          // true → Número distinto de 0
Boolean(-1);          // true → También negativos
Boolean([]);          // true → Array vacío es truthy
Boolean({});          // true → Objeto vacío es truthy
```

### parseInt() y parseFloat()

Extraen la parte numérica del inicio de un string.

```javascript
parseInt("42");        // 42
parseInt("42 años");   // 42 ← Lee hasta el espacio
parseInt("10.5");      // 10 ← Solo enteros, trunca decimales
parseInt("3.99 Bs.");  // 3
parseInt("hola 5");    // NaN ← Empieza con letras

parseFloat("3.14");        // 3.14
parseFloat("3.14 rad");    // 3.14
parseFloat("10.50 Bs.");   // 10.5
parseFloat("  25.99  ");   // 25.99
parseFloat("hola 3.14");   // NaN
```

---

## 3. Diferencias entre Number(), parseInt() y parseFloat()

| Valor | `Number()` | `parseInt()` | `parseFloat()` |
|-------|-----------|-------------|---------------|
| `"25"` | 25 | 25 | 25 |
| `"25.5"` | 25.5 | 25 | 25.5 |
| `"25px"` | **NaN** | 25 | 25 |
| `"25.5px"` | **NaN** | 25 | 25.5 |
| `"10.5.3"` | **NaN** | 10 | 10.5 |
| `"abc"` | NaN | NaN | NaN |
| `""` | **0** | **NaN** | **NaN** |
| `"  10  "` | 10 | 10 | 10 |

**¿Cuándo usar cada uno?**

- **`Number()`**: cuando el string DEBE ser completamente un número.
- **`parseInt()`**: cuando quieres extraer un entero del inicio del string.
- **`parseFloat()`**: cuando quieres extraer un decimal del inicio del string.

```javascript
// Number() falla con texto mezclado
console.log(Number("10px"));       // NaN
console.log(parseInt("10px"));     // 10 ✓

// parseInt() trunca decimales
console.log(Number("10.5"));       // 10.5
console.log(parseInt("10.5"));     // 10 ← ¡Perdió los decimales!

// Para precios siempre usa parseFloat() o Number()
const precio = "199.99";
console.log(parseFloat(precio));   // 199.99 ✓
console.log(parseInt(precio));     // 199 ← ¡Perdiste los centavos!
```

---

## 4. Conversión implícita (coerción)

JavaScript convierte tipos **automáticamente** en ciertas situaciones. Esto se llama
**coerción** y puede causar resultados sorprendentes.

### Con el operador + (concatenación gana)

Cuando usas `+` con un string y un número, JavaScript convierte el número a string
y concatena.

```javascript
console.log("10" + 5);     // "105" ← String gana, concatena
console.log(5 + "10");     // "510" ← El orden no importa
console.log("10" + "5");   // "105" ← Dos strings, concatena
console.log(10 + 5);       // 15 ← Dos números, suma
```

**¿Por qué `"10" + 5` da `"105"`?**

1. JavaScript ve que uno de los operandos es string (`"10"`).
2. El operador `+` sirve para concatenar strings.
3. Convierte el `5` a `"5"`.
4. Concatena: `"10"` + `"5"` = `"105"`.

### Con operadores aritméticos (conversión a número)

Los operadores `-`, `*`, `/`, `%` **solo funcionan con números**, así que JavaScript
convierte los strings automáticamente.

```javascript
console.log("10" - 5);     // 5 ← Convierte "10" a 10, luego resta
console.log("10" * 2);     // 20 ← Convierte "10" a 10, luego multiplica
console.log("20" / 4);     // 5 ← Convierte "20" a 20, luego divide
console.log("10" % 3);     // 1 ← Convierte "10" a 10, luego módulo
```

### Tabla resumen

| Operador | Operación | Resultado | ¿Por qué? |
|----------|-----------|-----------|-----------|
| `+` | `"10" + 5` | `"105"` | Concatena (string gana) |
| `-` | `"10" - 5` | `5` | Convierte a número y resta |
| `*` | `"10" * 2` | `20` | Convierte a número y multiplica |
| `/` | `"20" / 4` | `5` | Convierte a número y divide |
| `%` | `"10" % 3` | `1` | Convierte a número y calcula residuo |

---

## 5. Valores truthy y falsy

Cada valor en JavaScript se puede convertir a `boolean` implícitamente. Los que se
convierten en `false` se llaman **falsy**, los que se convierten en `true` se llaman
**truthy**.

### Tabla de referencia completa

| Falsy (se convierte en `false`) | Truthy (se convierte en `true`) |
|---------------------------------|--------------------------------|
| `false` | `true` |
| `0` | `1`, `-1`, `99`, `3.14` (cualquier número ≠ 0) |
| `-0` | `"hola"` (cualquier string no vacío) |
| `0n` | `"0"` (¡string con contenido!) |
| `""` (string vacío) | `" "` (string con espacio) |
| `null` | `[]` (array vacío) |
| `undefined` | `{}` (objeto vacío) |
| `NaN` | `function`, `Symbol`, etc. |

```javascript
// Ejemplo práctico: validar un campo
const nombreUsuario = "Carlos";
const apellidoUsuario = "";

if (nombreUsuario) {
    console.log("Nombre válido:", nombreUsuario);     // Se ejecuta
}

if (!apellidoUsuario) {
    console.log("Falta el apellido");                 // Se ejecuta
}
```

**¡Cuidado!** `Boolean("0")` es `true` porque el string `"0"` no está vacío.
Pero `Boolean(0)` es `false` porque el número cero sí es falsy.

---

## 6. El valor NaN

`NaN` significa **"Not a Number"**. Aparece cuando una operación matemática no produce
un resultado numérico válido.

### ¿Cuándo aparece?

```javascript
"hola" * 2;            // NaN ← No puedes multiplicar texto
"abc" - 3;             // NaN ← No puedes restar texto
0 / 0;                 // NaN ← Indeterminado
Number("hola");        // NaN ← No se puede convertir
Math.sqrt(-1);         // NaN ← Raíz de negativo
Infinity / Infinity;   // NaN ← Indeterminado
undefined + 1;         // NaN ← undefined contamina operaciones
```

### Propiedades extrañas de NaN

```javascript
typeof NaN;          // "number" ← ¡Es técnicamente un número!
NaN === NaN;         // false ← ¡No es igual a NADA, ni a sí mismo!
NaN == NaN;          // false ← Tampoco con ==
```

---

## 7. Conversiones útiles del día a día

### Calcular el cambio de una compra

```javascript
const montoCompra = "87.50";
const montoPago = "100";
const cambio = Number(montoPago) - Number(montoCompra);
console.log("Cambio:", cambio, "Bs.");  // 12.5 Bs.
```

### Promedio de notas

```javascript
const nota1 = "72";
const nota2 = "85";
const nota3 = "91";
const promedio = (Number(nota1) + Number(nota2) + Number(nota3)) / 3;
console.log("Promedio:", promedio);  // 82.666...
```

### Validar entradas

```javascript
const entradas = ["25", "", "hola", "100", null, "0", "3.14"];

for (const entrada of entradas) {
    const convertido = Number(entrada);
    if (Number.isNaN(convertido)) {
        console.log(`"${entrada}" → No es un número válido`);
    } else {
        console.log(`"${entrada}" → ${convertido} (válido)`);
    }
}
```

### Métodos para convertir

| De → A | Métodos disponibles |
|--------|-------------------|
| number → string | `String(n)`, `n.toString()`, `"" + n` |
| string → number | `Number(s)`, `parseInt(s)`, `parseFloat(s)`, `+s` |
| string → boolean | `Boolean(s)` |
| number → boolean | `Boolean(n)` |
| boolean → number | `Number(b)` (true→1, false→0) |
| boolean → string | `String(b)` ("true" / "false") |

---

## 8. Errores comunes

### Error 1: Sumar strings creyendo que son números

```javascript
// MAL
const a = "100";
const b = "200";
console.log(a + b);  // "100200" ← Concatena, no suma

// BIEN
console.log(Number(a) + Number(b));  // 300
```

### Error 2: Usar Number() con texto mezclado

```javascript
// MAL
Number("25px");     // NaN

// BIEN
parseInt("25px");   // 25
```

### Error 3: No verificar NaN

```javascript
// MAL
const dato = Number("texto");
console.log(dato + 10);  // NaN ← El error se propaga

// BIEN
const dato2 = Number("texto");
if (Number.isNaN(dato2)) {
    console.log("Entrada inválida");
} else {
    console.log(dato2 + 10);
}
```

### Error 4: Boolean("0") es true

```javascript
// MAL
const ceroTexto = "0";
if (ceroTexto) {
    console.log("Tiene valor");  // Se ejecuta ← confuso
}

// BIEN: convierte a número primero
if (Number(ceroTexto)) {
    console.log("Tiene valor numérico");  // No se ejecuta
}
```

### Error 5: parseInt() trunca decimales

```javascript
// MAL para precios
parseInt("199.99");   // 199 ← Perdiste los centavos

// BIEN para precios
parseFloat("199.99"); // 199.99 ✓
```

### Error 6: isNaN() vs Number.isNaN()

```javascript
// Cuidado
isNaN("hola");          // true ← Convierte primero
Number.isNaN("hola");   // false ← No convierte (recomendado)
```

### Error 7: Conversión accidental con +

```javascript
// MAL
const sueldo = "3000";
const bono = 500;
console.log(sueldo + bono);       // "3000500" ← Concatena

// BIEN
console.log(Number(sueldo) + bono); // 3500
```

---

## 9. Ejercicios prácticos

### Ejercicio 1: Convertir edades

Convierte edades en texto a números y calcula la suma y el promedio.

```javascript
const edad1 = "22";
const edad2 = "19";
const edad3 = "25";
const edad4 = "21";
const edad5 = "18";

// Convertir y sumar
// Suma total esperada: 105
// Promedio esperado: 21
```

### Ejercicio 2: Sumar números en texto

Calcula el total de una compra en un kiosko de La Paz.

```javascript
const precioSaltena = "12.50";
const precioRefresco = "8.00";
const precioEmpanada = "5.75";

// 3 salteñas + 2 refrescos + 4 empanadas = ?
// Vuelto desde Bs. 200 = ?
```

### Ejercicio 3: Precio a número

Calcula el costo total de materiales universitarios con descuento e IVA.

```javascript
const precioCuaderno = "35.99";
const precioLapices = "12";
const precioMochila = "180.50";
const precioGoma = "3.25";
const precioRegla = "8.75";

// Subtotal, descuento del 10% si supera Bs. 200, IVA del 16%, total final
```

### Ejercicio 4: Identificar conversiones incorrectas

Analiza este código, identifica errores y corrígelos:

```javascript
const sueldo1 = "4000";
const sueldo2 = "5500";
console.log(sueldo1 + sueldo2);  // ¿Muestra 9500? ¿Por qué no?

const esActivo = "false";
if (esActivo) {
    console.log("Activo");     // ¿Se ejecuta? ¿Por qué?
}
```

### Ejercicio 5: Comprobar entradas inválidas

Valida un array de notas y cuenta cuántas son válidas.

```javascript
const entradas = ["85", "ausente", "", "92.5", "null", "71"];

// Para cada una: convertir, verificar con Number.isNaN(), clasificar
// Contar válidas e inválidas
```

---

## 10. Reto adicional

Crea un validador de entradas numéricas que:

1. Reciba un array con valores mixtos (strings, números, null, undefined).
2. Intente convertir cada valor a número.
3. Determine si el resultado es un número válido usando `Number.isNaN()`.
4. Clasifique cada valor como "válido" o "inválido".
5. Calcule la suma y el promedio solo de los valores válidos.
6. Muestre un reporte final.

```javascript
const datos = [42, "15", "texto", null, undefined, "3.14", "", NaN, "0", true];

// Resultado esperado:
// Válidos: 42, 15, 3.14, 0, 1 (true→1), 0 ("")
// Inválidos: "texto", null (→0, válido), undefined, NaN
// (Pista: analiza cada uno con Number() y Number.isNaN())
```

---

## 11. Resumen de la lección

| Concepto | Descripción |
|----------|-------------|
| Conversión explícita | Nosotros convertimos usando `String()`, `Number()`, etc. |
| Conversión implícita | JavaScript convierte automáticamente (coerción) |
| `String()` | Convierte cualquier valor a texto |
| `Number()` | Convierte a número; falla con `NaN` si no puede |
| `Boolean()` | Convierte a `true` o `false` según truthy/falsy |
| `parseInt()` | Extrae entero del inicio de un string |
| `parseFloat()` | Extrae decimal del inicio de un string |
| Operador `+s` | Equivale a `Number(s)` para strings |
| Coerción con `+` | String gana → concatena |
| Coerción con `-*/%` | Convierte a número |
| Valores falsy | `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, `NaN` |
| Valores truthy | Todo lo demás: `"0"`, `"false"`, `[]`, `{}`, etc. |
| `NaN` | Not a Number (tipo `number`, operación inválida) |
| `NaN === NaN` | `false` ← Nunca es igual a nada |
| `Number.isNaN()` | Forma correcta de verificar NaN |
| `prompt()` | Siempre devuelve string (o null si cancela) |

**Reglas de oro:**

- Usa **conversión explícita** en lugar de confiar en la coerción.
- Verifica siempre con **`Number.isNaN()`** después de convertir.
- Usa **`Number()`** cuando el string debe ser completamente numérico.
- Usa **`parseInt()`** o **`parseFloat()`** cuando el string tiene texto después del número.
- Recuerda: **`Boolean("0")` es `true`**, pero **`Boolean(0)` es `false`**.

---

## 12. Siguiente lección

En la **Lección 31** veremos los **Condicionales en JavaScript**: `if`, `else if`, `else`,
`switch`, operador ternario y cómo combinar condiciones con operadores lógicos.
Aprenderás a tomar decisiones en tu código para que se comporte de forma diferente
según las situaciones.
