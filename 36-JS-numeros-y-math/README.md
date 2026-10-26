# Leccion 36 - Numeros y el Objeto Math

## Objetivo de aprendizaje

Aprender a trabajar con numeros en JavaScript, comprender el tipo `number`, sus limitaciones de precision, y dominar el objeto `Math` para realizar operaciones matematicas comunes.

## Conocimientos previos

- Variables y constantes (`let`, `const`)
- Tipos de datos basicos (string, number, boolean)
- Operadores aritmeticos (+, -, *, /, %)
- Conversion de tipos (lecciones 30)
- Funciones basicas (lecciones 33 y 34)

## Introduccion

Los numeros son fundamentales en cualquier lenguaje de programacion. En JavaScript, trabajar con numeros tiene sus particularidades: solo existe un tipo `number` para enteros y decimales, el objeto `Math` proporciona funciones matematicas avanzadas, y existen problemas de precision decimal que debes conocer.

En esta leccion aprenderas a:
- Diferenciar entre enteros y decimales en JavaScript
- Convertir strings a numeros correctamente
- Verificar tipos de numeros (entero, NaN, finito)
- Usar `toFixed()` y entender que retorna un string
- Utilizar todas las funciones del objeto `Math`
- Generar numeros aleatorios en rangos especificos
- Evitar errores comunes con numeros

## Tipo number

En JavaScript existe un unico tipo para representar numeros: `number`. No hay distincion entre enteros y decimales como en otros lenguajes.

```javascript
// Enteros
const edad = 25;
const temperatura = -3;
const cero = 0;

// Decimales
const precio = 19.99;
const pi = 3.14159;

// Notacion cientifica
const unMillon = 1e6;      // 1000000
const cincoMilesimas = 5e-3; // 0.005
```

### Valores especiales

JavaScript tiene tres valores especiales relacionados con numeros:

- **Infinity**: resultado de dividir un numero positivo entre cero
- **-Infinity**: resultado de dividir un numero negativo entre cero
- **NaN** (Not a Number): resultado de operaciones matematicas invalidas

```javascript
console.log(10 / 0);        // Infinity
console.log(-10 / 0);       // -Infinity
console.log(0 / 0);         // NaN
console.log("hola" * 2);    // NaN
```

## Conversion de strings a numeros

### Number()

Convierte un valor a numero. Es la forma mas directa de conversion.

```javascript
Number("42");       // 42
Number("3.14");     // 3.14
Number("");         // 0
Number("  100  ");  // 100 (ignora espacios)
Number("hola");     // NaN
Number(true);       // 1
Number(false);      // 0
Number(null);       // 0
Number(undefined);  // NaN
```

**Reglas importantes:**
- Strings vacios se convierten a 0
- Espacios en blanco se ignoran
- Si no puede convertir, retorna NaN
- `true` es 1, `false` es 0

### parseInt()

Extrae la parte entera de un string. Es util cuando necesitas solo numeros enteros.

```javascript
parseInt("42");          // 42
parseInt("42 px");       // 42 (ignora lo que no es numero)
parseInt("3.14");        // 3 (descarta decimales)
parseInt("  100  ");     // 100
parseInt("hola");        // NaN
parseInt("123abc456");   // 123 (lee hasta encontrar caracter no numerico)
```

**Caracteristicas:**
- Lee de izquierda a derecha hasta encontrar un caracter no numerico
- Descarta la parte decimal sin redondear
- Ignora espacios al inicio

### parseFloat()

Extrae numeros decimales de un string.

```javascript
parseFloat("3.14");         // 3.14
parseFloat("3.14 px");      // 3.14
parseFloat("42");           // 42
parseFloat("  100.50  ");   // 100.5
parseFloat("hola");         // NaN
parseFloat("19.99 Bs.");    // 19.99
```

**Diferencia clave:**
- `parseInt()` descarta decimales
- `parseFloat()` conserva decimales
- `Number()` es mas estricto: todo o nada

```javascript
const valor = "3.14abc";
Number(valor);      // NaN (falla por "abc")
parseInt(valor);    // 3 (toma solo el entero)
parseFloat(valor);  // 3.14 (toma hasta donde puede)
```

## Verificacion de numeros

### Number.isInteger()

Verifica si un valor es un numero entero. Retorna `true` o `false`.

```javascript
Number.isInteger(25);       // true
Number.isInteger(25.0);     // true (25.0 es entero)
Number.isInteger(25.5);     // false
Number.isInteger(0);        // true
Number.isInteger(-10);      // true
Number.isInteger("25");     // false (es string)
Number.isInteger(NaN);      // false
Number.isInteger(Infinity); // false
```

### Number.isNaN()

Verifica si un valor es NaN (Not a Number). Es la forma segura de verificar NaN.

```javascript
Number.isNaN(NaN);                  // true
Number.isNaN(42);                   // false
Number.isNaN("hola");               // false (no intenta convertir)
Number.isNaN(Number("abc"));        // true (primero convierte, luego verifica)
Number.isNaN(Infinity);             // false
```

**Importante:** NaN es el unico valor en JavaScript que no es igual a si mismo:
```javascript
NaN === NaN;        // false
Object.is(NaN, NaN); // true (usar esto para comparar)
```

**Uso practico:**
```javascript
const monto = Number("abc");
if (Number.isNaN(monto)) {
    console.log("Error: el valor no es un numero valido");
}
```

### Number.isFinite()

Verifica si un valor es un numero finito (no Infinity, ni -Infinity, ni NaN).

```javascript
Number.isFinite(42);        // true
Number.isFinite(3.14);      // true
Number.isFinite(0);         // true
Number.isFinite(Infinity);  // false
Number.isFinite(-Infinity); // false
Number.isFinite(NaN);       // false
Number.isFinite("42");      // false (no convierte)
```

**Uso practico:**
```javascript
const validarMonto = (monto) => {
    if (Number.isFinite(monto)) {
        console.log("Monto valido:", monto);
    } else {
        console.log("Monto invalido");
    }
};
```

## toFixed() y precision decimal

`toFixed(n)` redondea un numero a `n` decimales. Es muy usado para formatear precios.

```javascript
const precio = 19.956;
precio.toFixed(2);  // "19.96" (redondea a 2 decimales)
precio.toFixed(0);  // "20" (redondea a entero)
precio.toFixed(4);  // "19.9560" (rellena con ceros)
```

### Particularidad de toFixed()

**IMPORTANTE:** `toFixed()` retorna un **STRING**, no un numero.

```javascript
const precio = 19.956;
const formateado = precio.toFixed(2);

console.log(typeof formateado);  // "string"
console.log(formateado);         // "19.96"

// Si necesitas hacer operaciones, convierte de vuelta a numero
const precioNumero = Number(formateado);
console.log(typeof precioNumero); // "number"
console.log(precioNumero + 10);   // 29.96 (suma correcta)

// Si olvidas convertir:
console.log(formateado + 10);     // "19.9610" (concatenacion!)
```

**Consecuencias:**
- Siempre convierte a `Number()` si necesitas operar
- Es ideal para mostrar precios formateados
- Rellena con ceros si es necesario: `(5).toFixed(2)` retorna `"5.00"`

### Problemas de precision decimal

JavaScript usa el estandar IEEE 754 para representar numeros decimales en binario. Esto causa problemas de precision:

```javascript
console.log(0.1 + 0.2);         // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3); // false
```

**Por que ocurre:**
- Los numeros decimales no siempre pueden representarse exactamente en binario
- Es como intentar escribir 1/3 en decimal: 0.33333... nunca es exacto
- Este problema existe en casi todos los lenguajes de programacion

**Soluciones:**

1. **Usar toFixed() para redondear:**
```javascript
const resultado = (0.1 + 0.2).toFixed(2);
console.log(Number(resultado));  // 0.3
console.log(Number(resultado) === 0.3); // true
```

2. **Trabajar con enteros (multiplicar y dividir):**
```javascript
const resultado = (1 + 2) / 10;  // 0.3
```

3. **Usar un epsilon para comparaciones:**
```javascript
const epsilon = 0.0000001;
const sonIguales = Math.abs(0.1 + 0.2 - 0.3) < epsilon;
console.log(sonIguales); // true
```

## El objeto Math

`Math` es un objeto incorporado en JavaScript con propiedades y metodos para operaciones matematicas. No necesita ser instanciado con `new`.

```javascript
console.log(typeof Math);  // "object"
// Math es un objeto estatico, siempre disponible
```

### Constantes (Math.PI)

```javascript
console.log(Math.PI);  // 3.141592653589793

// Usar PI para calcular circunferencia
const radio = 5;
const circunferencia = 2 * Math.PI * radio;
console.log(circunferencia.toFixed(2)); // "31.42"
```

### Redondeo (round, floor, ceil, trunc)

Cuatro metodos para redondear o eliminar decimales:

**Math.round()** - Redondea al entero mas cercano:
```javascript
Math.round(4.3);   // 4
Math.round(4.5);   // 5 (redondea hacia arriba en .5)
Math.round(4.7);   // 5
Math.round(-4.5);  // -4 (redondea hacia cero en .5 negativos)
```

**Math.floor()** - Redondea hacia abajo (al entero menor):
```javascript
Math.floor(4.9);   // 4
Math.floor(4.1);   // 4
Math.floor(-4.1);  // -5 (hacia abajo, mas negativo)
```

**Math.ceil()** - Redondea hacia arriba (al entero mayor):
```javascript
Math.ceil(4.1);    // 5
Math.ceil(4.9);    // 5
Math.ceil(-4.9);   // -4 (hacia arriba, menos negativo)
```

**Math.trunc()** - Simplemente elimina los decimales:
```javascript
Math.trunc(4.9);   // 4
Math.trunc(4.1);   // 4
Math.trunc(-4.9);  // -4 (hacia cero)
```

**Comparacion:**
```javascript
console.log(Math.floor(4.7));  // 4
console.log(Math.ceil(4.7));   // 5
console.log(Math.trunc(4.7));  // 4

console.log(Math.floor(-4.7)); // -5
console.log(Math.ceil(-4.7));  // -4
console.log(Math.trunc(-4.7)); // -4
```

**Truco:** Para redondear a N decimales con `Math.round()`:
```javascript
const redondearADosDecimales = (num) => {
    return Math.round(num * 100) / 100;
};
console.log(redondearADosDecimales(3.14159)); // 3.14
```

### Valor absoluto

`Math.abs()` retorna el valor absoluto de un numero (su distancia a cero, siempre positiva).

```javascript
Math.abs(5);      // 5
Math.abs(-5);     // 5
Math.abs(-3.14);  // 3.14

// Ejemplo: diferencia de temperatura
const temp1 = 8;
const temp2 = 32;
const diferencia = Math.abs(temp1 - temp2);
console.log(diferencia); // 24
```

### Potencias y raices

**Math.pow()** - Eleva un numero a una potencia:
```javascript
Math.pow(2, 3);   // 8 (2^3)
Math.pow(5, 2);   // 25 (5^2)
Math.pow(10, 0);  // 1 (cualquier numero elevado a 0 es 1)

// Tambien se puede usar el operador **
console.log(2 ** 3);   // 8
console.log(5 ** 2);   // 25
```

**Math.sqrt()** - Calcula la raiz cuadrada:
```javascript
Math.sqrt(25);   // 5
Math.sqrt(16);   // 4
Math.sqrt(2);    // 1.4142135623730951
Math.sqrt(0);    // 0
Math.sqrt(-1);   // NaN (no existe raiz cuadrada de negativo en numeros reales)
```

**Ejemplo combinado - Teorema de Pitagoras:**
```javascript
const catetoA = 3;
const catetoB = 4;
const hipotenusa = Math.sqrt(catetoA ** 2 + catetoB ** 2);
console.log(hipotenusa); // 5
```

### Minimo y maximo

**Math.min()** - Retorna el minimo de los argumentos:
```javascript
Math.min(5, 3, 8, 1, 9);  // 1
Math.min(10, 20);          // 10
Math.min(-5, 0, 5);        // -5
Math.min();                // Infinity (sin argumentos)
```

**Math.max()** - Retorna el maximo de los argumentos:
```javascript
Math.max(5, 3, 8, 1, 9);  // 9
Math.max(10, 20);          // 20
Math.max(-5, 0, 5);        // 5
Math.max();                // -Infinity (sin argumentos)
```

**Ejemplo practico:**
```javascript
const notas = [75, 88, 62, 91];
const notaMasAlta = Math.max(75, 88, 62, 91);
const notaMasBaja = Math.min(75, 88, 62, 91);
console.log("Rango:", notaMasBaja, "a", notaMasAlta);
```

### Numeros aleatorios

`Math.random()` genera un numero pseudoaleatorio entre 0 (inclusive) y 1 (exclusive).

```javascript
console.log(Math.random()); // 0.7234... (numero entre 0 y 1)
console.log(Math.random()); // 0.1845... (diferente cada vez)
```

**ADVERTENCIA DE SEGURIDAD:** `Math.random()` **NO es criptograficamente seguro**. No lo uses para:
- Generar passwords
- Crear tokens de seguridad
- Generar claves de encriptacion
- Cualquier uso relacionado con seguridad

Para seguridad, usa `crypto.getRandomValues()` en su lugar.

## Generacion de aleatorios en un rango

Para generar numeros aleatorios enteros en un rango especifico:

**Formula:** `Math.floor(Math.random() * (max - min + 1)) + min`

```javascript
// Aleatorio entre 1 y 10
const aleatorio1a10 = Math.floor(Math.random() * 10) + 1;
console.log(aleatorio1a10); // 1 a 10

// Aleatorio entre 1 y 100
const aleatorio1a100 = Math.floor(Math.random() * 100) + 1;
console.log(aleatorio1a100); // 1 a 100

// Aleatorio entre 50 y 100
const aleatorio50a100 = Math.floor(Math.random() * 51) + 50;
console.log(aleatorio50a100); // 50 a 100
```

**Funcion reutilizable:**
```javascript
const numeroAleatorio = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

console.log(numeroAleatorio(1, 6));   // Simular dado
console.log(numeroAleatorio(1, 10));  // Aleatorio 1-10
console.log(numeroAleatorio(10, 20)); // Aleatorio 10-20
```

**Simular un dado de 6 caras:**
```javascript
const tirarDado = () => Math.floor(Math.random() * 6) + 1;
console.log(tirarDado()); // 1 a 6
```

## Orden de operaciones

JavaScript sigue el orden matematico estandar (PEMDAS):

1. **P**arentesis `()`
2. **E**xponenciacion `**`
3. **M**ultiplicacion, **D**ivision, **M**odulo `*`, `/`, `%`
4. **A**dicion, **S**ustraccion `+`, `-`

```javascript
console.log(2 + 3 * 4);      // 14 (primero 3*4=12, luego 2+12=14)
console.log((2 + 3) * 4);    // 20 (primero 2+3=5, luego 5*4=20)

console.log(10 - 2 ** 3);    // 2 (primero 2^3=8, luego 10-8=2)
console.log((10 - 2) ** 3);  // 512 (primero 10-2=8, luego 8^3=512)

console.log(20 / 4 + 3 * 2 - 1);  // 8 (5 + 6 - 1)
```

**Recomendacion:** Usa parentesis liberamente para hacer el codigo mas claro, incluso si el orden de operaciones ya es correcto.

## Errores comunes

### 1. Dividir entre cero
```javascript
console.log(10 / 0);   // Infinity (no es error, pero cuidado)
console.log(0 / 0);    // NaN
```

### 2. Operar con strings sin convertir
```javascript
const precio = "19.99";
const cantidad = 3;
console.log(precio + cantidad);      // "19.993" (concatena!)
console.log(Number(precio) + cantidad); // 22.99 (suma correcta)
```

### 3. Usar == en vez de ===
```javascript
console.log(42 == "42");   // true (convierte tipos)
console.log(42 === "42");  // false (estricto, recomendado)
```

### 4. Olvidar que toFixed() retorna string
```javascript
const precio = (100 * 1.16).toFixed(2);
console.log(precio + 10);           // "116.0010" (concatena!)
console.log(Number(precio) + 10);   // 126 (suma correcta)
```

### 5. Precision decimal
```javascript
const total = 0.1 + 0.2;
console.log(total);              // 0.30000000000000004
console.log(total === 0.3);      // false
console.log(Number(total.toFixed(2)) === 0.3); // true
```

## Buenas practicas

1. **Usa `const` por defecto**, `let` solo cuando necesites reasignar
2. **Usa `===` en vez de `==`** para comparaciones estrictas
3. **Convierte strings a numeros** antes de operar con ellos
4. **Usa `Number.isNaN()`** para verificar conversiones fallidas
5. **Usa `Number.isFinite()`** para validar montos antes de operar
6. **Convierte el resultado de `toFixed()`** a `Number()` si necesitas operar
7. **Usa `Number()`** para conversion directa, `parseInt()` o `parseFloat()` cuando necesites comportamiento especifico
8. **Usa parentesis** para claridad en operaciones complejas
9. **Ten cuidado con la precision decimal** en operaciones con dinero
10. **No uses `Math.random()`** para seguridad, usa `crypto.getRandomValues()`

## Ejercicios practicos

1. **Redondeo de numeros:** Dado un numero decimal, redondealo a 0, 2 y 4 decimales usando `toFixed()`. Luego usa `Math.floor()`, `Math.ceil()`, `Math.round()` y `Math.trunc()`.

2. **Area de un circulo:** Calcula el area y la circunferencia de un circulo dado su radio. Usa `Math.PI` y muestra los resultados con 2 decimales.

3. **Notas maximas y minimas:** Dado un conjunto de notas, encuentra la maxima, la minima, el rango y el promedio usando `Math.max()` y `Math.min()`.

4. **Simulador de dado:** Crea una funcion que simule el lanzamiento de un dado de 6 caras. Llamala 10 veces y cuenta cuantas veces salio cada numero.

5. **Aleatorios en rangos:** Crea una funcion reutilizable para generar aleatorios en un rango. Usala para generar numeros entre 1-100, 50-100 y simular temperaturas aleatorias.

6. **Teorema de Pitagoras:** Calcula la hipotenusa de triangulos rectangulos dados sus catetos usando `Math.sqrt()` y `Math.pow()`.

## Reto adicional

Simula el lanzamiento de **dos dados** 20 veces. Para cada lanzamiento:
- Muestra el resultado de cada dado
- Muestra la suma de ambos dados
- Al final, muestra cuantas veces la suma fue 7 (el resultado mas probable)

```javascript
// Pista: crea una funcion tirarDado() y llamala dos veces por intento
// Acumula los resultados en una variable contador
```

## Resumen

En esta leccion aprendiste:

- **Tipo number:** JavaScript usa un solo tipo para enteros y decimales
- **Conversion:** `Number()`, `parseInt()`, `parseFloat()` tienen comportamientos diferentes
- **Verificacion:** `Number.isInteger()`, `Number.isNaN()`, `Number.isFinite()` validan numeros
- **toFixed():** Redondea a N decimales pero **retorna un string**
- **Precision decimal:** 0.1 + 0.2 no es exactamente 0.3 por el estandar IEEE 754
- **Math object:** Proporciona constantes (PI) y funciones matematicas
- **Redondeo:** `Math.round()`, `Math.floor()`, `Math.ceil()`, `Math.trunc()`
- **Operaciones:** `Math.abs()`, `Math.pow()`, `Math.sqrt()`, `Math.min()`, `Math.max()`
- **Aleatorios:** `Math.random()` genera numeros entre 0 y 1, combina con `Math.floor()` para rangos
- **Seguridad:** `Math.random()` NO es criptograficamente seguro

## Siguiente leccion

En la **Leccion 37 - Arrays** aprenderas sobre arreglos: como crearlos, acceder a sus elementos, modificarlos, y usar sus metodos mas importantes. Los arrays te permitiran trabajar con colecciones de datos de manera eficiente.
