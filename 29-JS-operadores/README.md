# Lección 29 - Operadores

## Objetivo de aprendizaje

Al finalizar esta lección, serás capaz de utilizar todos los operadores disponibles en JavaScript
para realizar cálculos matemáticos, comparar valores, combinar condiciones lógicas y manipular
datos de forma efectiva. Comprenderás la diferencia entre igualdad débil y estricta, la importancia
de la precedencia de operadores y las mejores prácticas para escribir código claro y predecible.

---

## ¿Qué aprenderemos?

- Qué es un operador y cuáles son los tipos principales
- Operadores aritméticos: suma, resta, multiplicación, división, módulo y exponenciación
- Operadores de incremento y decremento
- Operadores de asignación abreviada
- Operadores de comparación y desigualdad
- La diferencia crítica entre `==` y `===`
- Operadores lógicos: AND, OR, NOT
- Precedencia de operadores y uso de paréntesis
- Concatenación de strings y template literals

---

## 1. ¿Qué es un operador?

Un **operador** es un símbolo que le dice al intérprete de JavaScript que realice una operación
específica sobre uno o más valores (llamados **operandos**).

```javascript
// Ejemplo: 5 + 3 = 8
//   "+" es el operador
//   5 y 3 son los operandos
//   8 es el resultado

const suma = 5 + 3; // 8
```

Los operadores se clasifican en varios tipos según la operación que realizan. En esta lección
veremos los más utilizados en JavaScript.

---

## 2. Operadores aritméticos

Realizan operaciones matemáticas básicas sobre números.

| Operador | Descripción      | Ejemplo  | Resultado |
|----------|------------------|----------|-----------|
| `+`      | Suma             | `5 + 3`  | `8`       |
| `-`      | Resta            | `5 - 3`  | `2`       |
| `*`      | Multiplicación   | `5 * 3`  | `15`      |
| `/`      | División         | `6 / 2`  | `3`       |
| `%`      | Módulo (residuo) | `7 % 2`  | `1`       |
| `**`     | Exponenciación   | `2 ** 3` | `8`       |

```javascript
// Suma
const suma = 15 + 8;          // 23

// Resta
const resta = 20 - 7;         // 13

// Multiplicación
const multiplicacion = 6 * 4; // 24

// División
const division = 100 / 4;     // 25

// Módulo: devuelve el residuo de la división
const modulo = 10 % 3;        // 1 (10 = 3 × 3 + 1)

// Exponenciación: potencia
const potencia = 2 ** 5;      // 32 (2 elevado a la 5)
```

### Ejemplo práctico

```javascript
const precio = 50;
const cantidad = 3;
const total = precio * cantidad;  // 150

console.log(`Total a pagar: Bs. ${total}`);
// "Total a pagar: Bs. 150"
```

---

## 3. Incremento y decremento

Los operadores `++` y `--` suman o restan 1 al valor de una variable.

```javascript
// Incremento (++)
let contador = 5;
contador++;     // Ahora es 6
++contador;     // Ahora es 7

// Decremento (--)
let puntos = 100;
puntos--;       // Ahora es 99
--puntos;       // Ahora es 98
```

Hay dos formas de usarlos:
- **Prefijo** (`++contador`): incrementa primero, luego devuelve el valor
- **Postfijo** (`contador++`): devuelve el valor primero, luego incrementa

```javascript
let x = 5;
let y = x++;  // y = 5 (toma el valor antes de incrementar), x = 6
let z = ++x;  // z = 7 (incrementa antes de tomar el valor), x = 7
```

> **Nota:** Cuando se usan solos en una línea, prefijo y postfijo no hacen diferencia.
> Solo importa cuando el resultado se asigna a otra variable.

---

## 4. Operadores de asignación

Además de `=`, existen formas abreviadas para operar y asignar en un solo paso.

| Operador | Equivalente    | Descripción            |
|----------|----------------|------------------------|
| `=`      | `x = y`        | Asignación simple      |
| `+=`     | `x = x + y`    | Suma y asigna          |
| `-=`     | `x = x - y`    | Resta y asigna         |
| `*=`     | `x = x * y`    | Multiplica y asigna    |
| `/=`     | `x = x / y`    | Divide y asigna        |
| `%=`     | `x = x % y`    | Módulo y asigna        |
| `**=`    | `x = x ** y`   | Exponenciación y asigna|

```javascript
let numero = 10;

numero += 5;   // numero = numero + 5 → 15
numero -= 3;   // numero = numero - 3 → 12
numero *= 2;   // numero = numero * 2 → 24
numero /= 4;   // numero = numero / 4 → 6
numero %= 4;   // numero = numero % 4 → 2
numero **= 3;  // numero = numero ** 3 → 8
```

---

## 5. Operadores de comparación

Comparan dos valores y devuelven un booleano (`true` o `false`).

| Operador | Descripción          | Ejemplo  | Resultado |
|----------|----------------------|----------|-----------|
| `>`      | Mayor que            | `5 > 3`  | `true`    |
| `<`      | Menor que            | `5 < 3`  | `false`   |
| `>=`     | Mayor o igual que    | `5 >= 5` | `true`    |
| `<=`     | Menor o igual que    | `3 <= 5` | `true`    |

```javascript
console.log(10 > 5);   // true
console.log(3 > 7);    // false
console.log(5 >= 5);   // true
console.log(4 <= 3);   // false
```

### Ejemplo práctico

```javascript
const edad = 20;
const edadMinima = 18;

console.log(edad >= edadMinima);  // true → puede ingresar
```

---

## 6. Igualdad: == vs ===

JavaScript tiene dos formas de comparar igualdad. Esta es una de las diferencias
más importantes que debes conocer.

| Operador | Descripción         | Ejemplo        | Resultado |
|----------|---------------------|----------------|-----------|
| `==`     | Igualdad débil      | `"5" == 5`     | `true`    |
| `===`    | Igualdad estricta   | `"5" === 5`    | `false`   |

### `==` (igualdad débil o abstracta)

Convierte los tipos de datos antes de comparar. Esto puede producir resultados confusos.

```javascript
console.log("5" == 5);           // true (convierte "5" a número)
console.log(0 == false);         // true (convierte false a 0)
console.log("" == 0);            // true (convierte "" a 0)
console.log(null == undefined);  // true (son "iguales" para ==)
```

### `===` (igualdad estricta)

Compara valor **y** tipo. No realiza conversiones. Es más predecible.

```javascript
console.log("5" === 5);          // false (string ≠ number)
console.log(0 === false);        // false (number ≠ boolean)
console.log("" === 0);           // false (string ≠ number)
console.log(null === undefined); // false (null ≠ undefined)
```

### ¿Por qué se recomienda `===`?

1. **`==`** realiza conversiones ocultas que pueden causar bugs difíciles de detectar.
2. **`===`** es predecible: si los tipos son diferentes, siempre devuelve `false`.
3. **`===`** previene errores y hace el código más claro.
4. Es una buena práctica adoptada por la comunidad de JavaScript.

```javascript
// MAL: puede dar resultados inesperados
const entrada = "100";
const esperado = 100;
console.log(entrada == esperado); // true (parece correcto...)

// BIEN: estricto y predecible
console.log(entrada === esperado); // false (correcto: tipos diferentes)

// Si necesitas convertir, hazlo explícitamente
console.log(Number(entrada) === esperado); // true (conversión visible)
```

> **Regla de oro:** Usa SIEMPRE `===` en lugar de `==`. La única excepción es cuando
> comparas con `null` (`valor == null` puede ser útil para detectar tanto `null`
> como `undefined` de una vez).

---

## 7. Desigualdad: != vs !==

Lo opuesto a la igualdad:

| Operador | Descripción              | Ejemplo      | Resultado |
|----------|--------------------------|--------------|-----------|
| `!=`     | Distinto de (débil)      | `"5" != 5`   | `false`   |
| `!==`    | Distinto de (estricto)   | `"5" !== 5`  | `true`    |

```javascript
console.log("5" != 5);    // false (convierte y compara: 5 ≠ 5 → false)
console.log("5" !== 5);   // true (diferente tipo → true)
console.log(10 !== 10);   // false (mismo valor y tipo)
```

> **Recomendación:** Usa siempre `!==` en lugar de `!=`, igual que con `===`.

---

## 8. Operadores lógicos

Combinan condiciones booleanas para construir lógica más compleja.

| Operador | Nombre | Descripción                              | Ejemplo          | Resultado |
|----------|--------|------------------------------------------|------------------|-----------|
| `&&`     | AND    | `true` solo si AMBAS condiciones son true | `true && true`   | `true`    |
| `\|\|`   | OR     | `true` si AL MENOS UNA es true            | `true \|\| false`| `true`    |
| `!`      | NOT    | Invierte el valor booleano                | `!true`          | `false`   |

### AND (`&&`)

```javascript
console.log(true && true);   // true
console.log(true && false);  // false
console.log(false && true);  // false
console.log(false && false); // false
```

### OR (`||`)

```javascript
console.log(true || true);   // true
console.log(true || false);  // true
console.log(false || true);  // true
console.log(false || false); // false
```

### NOT (`!`)

```javascript
console.log(!true);   // false
console.log(!false);  // true

const lloviendo = false;
console.log(!lloviendo);  // true → salir sin paraguas
```

### Ejemplo práctico

```javascript
const edad = 20;
const tieneEntrada = true;
const esMayor = edad >= 18;

// AND: necesita cumplir TODAS las condiciones
console.log(esMayor && tieneEntrada);  // true → puede entrar

// OR: necesita cumplir AL MENOS UNA condición
const tieneDescuento = false;
const esEstudiante = true;
console.log(tieneDescuento || esEstudiante);  // true → aplica descuento

// NOT: invierte
const cancelado = false;
console.log(!cancelado);  // true → sigue activo
```

---

## 9. Precedencia de operadores

Cuando hay varios operadores en una expresión, JavaScript sigue un orden de precedencia.
Es similar a la matemática: multiplicación y división se resuelven antes que suma y resta.

| Precedencia | Operadores              | Descripción          |
|-------------|-------------------------|----------------------|
| 1           | `**`                    | Exponenciación       |
| 2           | `*`, `/`, `%`           | Multiplicación, división, módulo |
| 3           | `+`, `-`                | Suma, resta          |
| 4           | `<`, `<=`, `>`, `>=`    | Comparación          |
| 5           | `==`, `===`, `!=`, `!==`| Igualdad             |
| 6           | `&&`                    | AND lógico           |
| 7           | `\|\|`                  | OR lógico            |
| 8           | `=`, `+=`, `-=`, etc.   | Asignación           |

```javascript
// Sin paréntesis: sigue la precedencia
console.log(5 + 3 * 2);       // 11 (primero: 3*2=6, luego: 5+6=11)
console.log(10 + 2 * 3 - 1);  // 15 (primero: 2*3=6, luego: 10+6-1=15)

// Con paréntesis: cambia el orden
console.log((5 + 3) * 2);     // 16 (primero: 5+3=8, luego: 8*2=16)
console.log((10 + 2) * (3 - 1)); // 24
```

```javascript
// Operadores lógicos tienen precedencia
console.log(true || false && false);
// && se evalúa primero: false && false = false
// Luego: true || false = true

console.log((true || false) && false);
// Primero: true || false = true
// Luego: true && false = false
```

---

## 10. Paréntesis para claridad

Aunque JavaScript tiene reglas de precedencia definidas, **siempre es buena práctica
usar paréntesis para hacer el código más legible**. Incluso si no cambian el resultado,
los paréntesis dejan CLARO cuál era tu intención.

```javascript
// Difícil de leer:
const resultado = 10 + 5 * 2 - 8 / 4;

// Claro con paréntesis:
const resultado2 = (10) + (5 * 2) - (8 / 4);

// Difícil de leer:
const puedeEntrar = edad >= 18 && tieneID || esVIP;

// Claro con paréntesis:
const puedeEntrar2 = (edad >= 18) && tieneID || esVIP;
```

```javascript
// Ejemplo con cálculo de precio
const precio = 100;
const descuento = 0.10;
const impuesto = 0.15;

// Claro: aplicar descuento y luego impuesto
const total = (precio * (1 - descuento)) * (1 + impuesto);
```

---

## 11. Concatenación y template literals

### Concatenación con `+`

El operador `+` también sirve para unir strings.

```javascript
const nombre = "Carlos";
const edad = 25;

// Concatenación tradicional
const mensaje = "Hola, " + nombre + ". Tienes " + edad + " años.";
console.log(mensaje);  // "Hola, Carlos. Tienes 25 años."
```

**Cuidado al mezclar strings y números:**

```javascript
console.log("10" + 5);   // "105" (concatena, no suma)
console.log("10" - 5);   // 5 (en resta SÍ convierte a número)
```

### Template literals con backticks

Los **template literals** son una forma moderna y más legible de crear strings con
variables o expresiones. Se escriben con backticks (`` ` ``) y usan `${}` para
insertar valores.

```javascript
const nombre = "Carlos";
const edad = 25;

// Forma moderna: template literal
const mensaje = `Hola, ${nombre}. Tienes ${edad} años.`;
console.log(mensaje);  // "Hola, Carlos. Tienes 25 años."
```

### Comparación

```javascript
const producto = "Cuaderno";
const precio = 15;
const cantidad = 3;

// Forma antigua (concatenación):
const mensaje1 = "Compraste " + cantidad + " " + producto + " a Bs. " + precio;

// Forma moderna (template literal):
const mensaje2 = `Compraste ${cantidad} ${producto} a Bs. ${precio}`;
```

### Ventajas de los template literals

1. **Legibilidad:** son más fáciles de leer y escribir.
2. **Expresiones:** puedes poner expresiones dentro de `${}`:
   ```javascript
   const a = 5;
   const b = 3;
   console.log(`La suma de ${a} y ${b} es ${a + b}`);  // "La suma de 5 y 3 es 8"
   ```
3. **Multilínea:** permiten texto en varias líneas sin `\n`:
   ```javascript
   const tarjeta = `
   ====================
     CARNET ESTUDIANTIL
   ====================
   Nombre: Ana López
   Carrera: Ingeniería
   ====================
   `;
   ```

---

## 12. Errores comunes

### Error 1: Usar `==` en lugar de `===`

```javascript
// MAL
if (edad == "18") { ... }   // true aunque edad sea string

// BIEN
if (edad === 18) { ... }    // solo true si es number 18
```

### Error 2: Confundir concatenación con suma

```javascript
// MAL
console.log("10" + 5);   // "105" (concatena!)

// BIEN
console.log(Number("10") + 5);   // 15 (suma correctamente)
// O mejor:
console.log(10 + 5);             // 15 (ambos son numbers)
```

### Error 3: Olvidar paréntesis en cálculos

```javascript
// MAL: precedencia confusa
const total = precio * 1 - descuento;  // No hace lo que esperas

// BIEN: paréntesis para claridad
const total2 = precio * (1 - descuento);
```

### Error 4: Usar `=` en lugar de `===` en condiciones

```javascript
// MAL: = es asignación, no comparación
if (x = 5) { ... }   // Asigna 5 a x, ¡no compara!

// BIEN: === es comparación estricta
if (x === 5) { ... }  // Compara x con 5
```

### Error 5: No usar paréntesis en condiciones complejas

```javascript
// Confuso
const ok = edad > 18 && tienePago || esVIP;

// Claro
const ok2 = (edad > 18 && tienePago) || esVIP;
```

---

## 13. Ejercicios prácticos

### Ejercicio 1: Área de un rectángulo

Calcula el área de un rectángulo dada su base y altura.

```javascript
const base = 12;
const altura = 7;
// Calcula el área e imprime el resultado
```

**Resultado esperado:** `"El rectángulo de base 12 y altura 7 tiene un área de 84 unidades cuadradas"`

**Conceptos:** operador `*`, template literals.

### Ejercicio 2: Promedio de notas

Calcula el promedio de 3 notas e indica si aprobó o reprobó.

```javascript
const nota1 = 72;
const nota2 = 88;
const nota3 = 65;
// Calcula promedio e indica estado
```

**Resultado esperado:** `"Promedio: 75.00"`, `"Estado: Aprobado"`

**Conceptos:** `+`, `/`, comparación con `>=`, template literals.

### Ejercicio 3: Número par

Determina si un número es par usando el operador `%`.

```javascript
const numero = 47;
// Usa numero % 2 para determinar si es par o impar
```

**Resultado esperado:** `"El número 47 es impar"`

**Conceptos:** operador `%`, comparación `===`.

### Ejercicio 4: Aplicar descuento

Calcula el precio final después de un descuento.

```javascript
const precio = 480;
const descuento = 25;
// Calcula monto del descuento y precio final
```

**Resultado esperado:** `"Precio final: Bs. 360"`

**Conceptos:** `*`, `/`, `-`, template literals.

### Ejercicio 5: Comparar valores

Compara valores usando `==` y `===` y explica los resultados.

```javascript
const valorA = "200";
const valorB = 200;
// Compara con == y con ===, explica la diferencia
```

**Conceptos:** `==` vs `===`, tipos de datos.

### Ejercicio 6: Condiciones lógicas

Evalúa si un estudiante puede inscribirse usando operadores lógicos.

```javascript
const edad = 16;
const tieneAutorizacion = false;
const cursoDisponible = true;
const pagoCompletado = true;
const cuposRestantes = 0;
// Combina condiciones con &&, ||, !
```

**Conceptos:** comparación, `&&`, `||`, `!`, template literals.

---

## 14. Reto adicional

Crea una calculadora de factura completa que:

1. Tenga un subtotal en Bs.
2. Calcule el IVA (16%)
3. Aplique un descuento (si el monto supera cierto umbral)
4. Muestre el total final usando template literals
5. Compare el total con un presupuesto y diga si alcanza o no

Pista: combina operadores aritméticos, de comparación y template literals.

```javascript
const subtotal = 250;
const iva = 16;
const umbralDescuento = 200;
const porcentajeDescuento = 10;
const presupuesto = 300;

// Calcula todo e imprime una factura formateada
```

---

## 15. Resumen de la lección

| Categoría | Operadores | Uso principal |
|-----------|-----------|---------------|
| Aritméticos | `+`, `-`, `*`, `/`, `%`, `**` | Cálculos matemáticos |
| Incremento | `++`, `--` | Sumar/restar 1 |
| Asignación | `=`, `+=`, `-=`, `*=`, `/=`, `%=`, `**=` | Asignar y operar |
| Comparación | `>`, `<`, `>=`, `<=` | Comparar valores |
| Igualdad | `==` (débil), `===` (estricto) | Verificar igualdad |
| Desigualdad | `!=` (débil), `!==` (estricto) | Verificar diferencia |
| Lógicos | `&&`, `\|\|`, `!` | Combinar condiciones |
| Strings | `+` (concatenar), `` ` `` (template) | Unir/manipular texto |

**Recuerda:**
- Usa SIEMPRE `===` en lugar de `==`.
- Usa `!==` en lugar de `!=`.
- Usa `const` por defecto, `let` solo cuando necesites reasignar.
- Pon paréntesis para claridad, incluso cuando no sean estrictamente necesarios.
- Prefiere template literals sobre concatenación con `+`.
- El operador `%` es útil para saber si un número es par (`n % 2 === 0`).

---

## 16. Siguiente lección

En la **Lección 30** veremos la **Conversión de tipos en JavaScript**: aprenderás a
convertir strings a números, números a strings, y otros tipos de datos. Comprenderás
cómo JavaScript convierte valores automáticamente (coerción) y cómo hacerlo de forma
explícita para evitar errores.
