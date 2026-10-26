# Lección 33 - Funciones en JavaScript

## Objetivo de aprendizaje

Al finalizar esta lección, serás capaz de crear funciones reutilizables con parámetros y valores de retorno. Aprenderás a declarar funciones, invocarlas, pasarles datos, obtener resultados y combinarlas para resolver problemas de forma organizada. Las funciones son la base de la programación modular y te permitirán escribir código más limpio y mantenible.

---

## Conocimientos previos

Antes de empezar esta lección, debes dominar los temas de las lecciones anteriores:

- **Lección 25:** Introducción a JavaScript y la consola (`console.log()`)
- **Lección 26:** Vinculación de JavaScript con HTML (`<script>` con `defer`)
- **Lección 27:** Variables y constantes (`const`, `let`)
- **Lección 28:** Tipos de datos (string, number, boolean, undefined, null)
- **Lección 29:** Operadores (aritméticos, comparación `===`, lógicos `&&`, `||`)
- **Lección 30:** Conversión de tipos (`parseInt()`, `parseFloat()`, `String()`)
- **Lección 31:** Condicionales (`if`, `else if`, `else`, operador ternario)
- **Lección 32:** Bucles (`for`, `while`, `do...while`, `for...of`)

---

## Introducción

Imagina que estás escribiendo un programa que calcula el promedio de notas de 50 estudiantes. Sin funciones, tendrías que copiar y pegar el mismo bloque de código 50 veces. Si necesitas cambiar la fórmula, tendrías que modificar 50 lugares diferentes. ¡Una pesadilla!

Las **funciones** resuelven este problema. Son bloques de código con nombre que puedes escribir una vez y reutilizar todas las veces que necesites. Son como recetas: defines los ingredientes (parámetros), los pasos (código) y el resultado (valor de retorno).

### ¿Por qué son importantes?

1. **Reutilización:** Escribe una vez, úsala muchas veces
2. **Organización:** Divide problemas grandes en piezas pequeñas
3. **Legibilidad:** Un nombre descriptivo dice qué hace el código
4. **Mantenimiento:** Si algo cambia, lo modificas en un solo lugar

---

## Sintaxis y funcionamiento

### Declarar una función

```javascript
function nombreDeLaFuncion(parametro1, parametro2) {
    // código que se ejecuta al invocar la función
    // parametro1 y parametro2 son variables internas
}
```

### Invocar (llamar) una función

```javascript
nombreDeLaFuncion(valor1, valor2);
```

### Ejemplo básico

```javascript
function saludar() {
    console.log("¡Bienvenido al curso de JavaScript!");
}

// Invocamos la función
saludar();
// Salida: ¡Bienvenido al curso de JavaScript!

// Podemos invocarla las veces que queramos
saludar();
saludar();
```

---

## Ejemplos paso a paso

### Funciones sin parámetros

```javascript
function mostrarBienvenida() {
    console.log("========================================");
    console.log("  BIENVENIDO AL SISTEMA ESTUDIANTIL");
    console.log("  UMSA - Universidad Mayor de San Andrés");
    console.log("========================================");
}

mostrarBienvenida();
```

### Funciones con un parámetro

```javascript
function saludarA(nombre) {
    console.log("¡Hola, " + nombre + "! Bienvenido al curso.");
}

saludarA("María");   // ¡Hola, María! Bienvenido al curso.
saludarA("Carlos");  // ¡Hola, Carlos! Bienvenido al curso.
saludarA("Ana");     // ¡Hola, Ana! Bienvenido al curso.
```

### Parámetro vs Argumento

- **Parámetro:** Es el nombre en la declaración (`nombre`)
- **Argumento:** Es el valor real al invocar (`"María"`, `"Carlos"`)

```javascript
//     parámetro
//         ↓
function saludarA(nombre) {
    console.log("¡Hola, " + nombre + "!");
}

//   argumento
//       ↓
saludarA("María");
```

### Funciones con múltiples parámetros

```javascript
function mostrarInfo(nombre, edad) {
    console.log("Nombre: " + nombre + " | Edad: " + edad + " años");
}

mostrarInfo("María Quispe", 17);
mostrarInfo("Carlos Flores", 16);
```

**Importante:** Los argumentos se asignan en orden. El primer argumento va al primer parámetro, el segundo al segundo, etc.

### Funciones con return

```javascript
function sumar(a, b) {
    return a + b;
}

const resultado = sumar(15, 27);
console.log(resultado);  // 42
```

La palabra `return`:
1. Devuelve un valor a quien llamó la función
2. Termina la ejecución inmediatamente

### Ejemplo: Promedio de notas

```javascript
function calcularPromedio(nota1, nota2, nota3) {
    const suma = nota1 + nota2 + nota3;
    const promedio = suma / 3;
    return promedio;
}

const promedioMaria = calcularPromedio(72, 65, 80);
console.log("Promedio de María: " + promedioMaria);  // 72.33

// En el sistema boliviano, 51 es la nota mínima para aprobar
if (promedioMaria >= 51) {
    console.log("María: APROBADA");
} else {
    console.log("María: REPROBADA");
}
```

---

## Diferencia entre console.log() y return

**¡ESTE ES UNO DE LOS ERRORES MÁS COMUNES EN PRINCIPIANTES!**

| Característica | `console.log()` | `return` |
|---|---|---|
| ¿Qué hace? | Muestra texto en la consola | Devuelve un valor al código |
| ¿El código puede usar el resultado? | **NO** | **SÍ** |
| ¿Termina la función? | No | Sí |
| ¿Se puede guardar en variable? | No | Sí |
| ¿Para qué sirve? | Para que el humano lea | Para que el código use |

### Ejemplo claro

```javascript
// ❌ MAL: Usa console.log en vez de return
function sumarMal(a, b) {
    console.log(a + b);
}

// ✅ BIEN: Usa return
function sumarBien(a, b) {
    return a + b;
}

const resultadoMal = sumarMal(5, 3);
console.log("Resultado mal: " + resultadoMal);
// Consola muestra 8, pero resultadoMal es undefined

const resultadoBien = sumarBien(5, 3);
console.log("Resultado bien: " + resultadoBien);
// resultadoBien es 8, y puedes usarlo

// Puedes usar el resultado de sumarBien:
const doble = sumarBien(5, 3) * 2;
console.log("Doble: " + doble);  // 16

// NO puedes usar el resultado de sumarMal:
const dobleMal = sumarMal(5, 3) * 2;
console.log("Doble mal: " + dobleMal);  // NaN (undefined * 2)
```

### Regla de oro

- Si necesitas el resultado para **otros cálculos** -> usa `return`
- Si solo quieres **ver** el resultado -> usa `console.log()`

---

## Funciones con valores predeterminados

Puedes asignar valores por defecto a los parámetros. Si no pasas un argumento, se usa el valor por defecto.

```javascript
function saludar(nombre = "estudiante") {
    console.log("¡Hola, " + nombre + "! Bienvenido al curso.");
}

saludar("María");   // ¡Hola, María! Bienvenido al curso.
saludar("Carlos");  // ¡Hola, Carlos! Bienvenido al curso.
saludar();          // ¡Hola, estudiante! Bienvenido al curso.
```

### Ejemplo con IVA boliviano

```javascript
function calcularPrecioConIVA(precio, tasaIVA = 13) {
    const iva = precio * (tasaIVA / 100);
    return precio + iva;
}

const precio1 = calcularPrecioConIVA(100);
console.log("Con IVA por defecto (13%): Bs. " + precio1);  // 113

const precio2 = calcularPrecioConIVA(100, 16);
console.log("Con IVA personalizado (16%): Bs. " + precio2);  // 116
```

---

## Hoisting

**Hoisting** (izamiento) es el comportamiento de JavaScript que mueve las **declaraciones** de funciones al inicio del archivo automáticamente.

```javascript
// Esto funciona aunque digamosHola() se declara DESPUÉS
digamosHola();

function digamosHola() {
    console.log("¡Hola gracias al hoisting!");
}
```

**Importante:**
- Las **declaraciones** de función tienen hoisting completo
- Las **expresiones** de función NO tienen hoisting

```javascript
// Esto NO funciona (descomentar para ver error):
// decirAdios();  // Error: Cannot access 'decirAdios' before initialization

const decirAdios = function() {
    console.log("¡Adiós!");
};

decirAdios();  // Esto sí funciona (después de la declaración)
```

---

## Funciones que llaman a otras funciones

Una función puede invocar a otra función dentro de su código. Esto es la base de la programación modular.

```javascript
function calcularDescuento(precio, porcentaje) {
    return precio * (porcentaje / 100);
}

function calcularPrecioFinal(precio, descuento) {
    const montoDescuento = calcularDescuento(precio, descuento);
    return precio - montoDescuento;
}

const precioFinal = calcularPrecioFinal(800, 25);
console.log("Precio final: Bs. " + precioFinal);  // 600
```

### Ejemplo: Sistema de calificaciones

```javascript
function determinarEstado(nota) {
    if (nota >= 51) {
        return "APROBADO";
    } else {
        return "REPROBADO";
    }
}

function mostrarResultado(estudiante, nota) {
    const estado = determinarEstado(nota);
    console.log(estudiante + " | Nota: " + nota + " | " + estado);
}

mostrarResultado("Ana Martínez", 75);  // APROBADO
mostrarResultado("Luis Poma", 38);     // REPROBADO
```

---

## Buenas prácticas

### Nombres de funciones

| Regla | Malo | Bueno |
|---|---|---|
| Usar verbos al inicio | `datos()` | `obtenerEstudiantes()` |
| Usar camelCase | `calcularpromedio()` | `calcularPromedio()` |
| Ser descriptivo | `convertir()` | `convertirCelsiusAFahrenheit()` |
| Para booleanos, usar `es` | `validar()` | `esNotaValida(nota)` |

### Separación de responsabilidades

Cada función debe hacer **UNA SOLA COSA** y hacerla bien.

```javascript
// MAL: Una función que hace todo
function procesarTodo(nombre, nota1, nota2, nota3) {
    const promedio = (nota1 + nota2 + nota3) / 3;
    // ... calcula, muestra, guarda... todo en uno
}

// BIEN: Funciones separadas
function calcularPromedio(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3;
}

function determinarEstado(nota) {
    return nota >= 51 ? "APROBADO" : "REPROBADO";
}

function mostrarReporte(nombre, promedio, estado) {
    console.log(nombre + " | Promedio: " + promedio + " | " + estado);
}
```

### Declaración vs Expresión de función

```javascript
// Declaración (tiene hoisting)
function sumar(a, b) {
    return a + b;
}

// Expresión (no tiene hoisting)
const sumar = function(a, b) {
    return a + b;
};
```

---

## Errores comunes

| Error | Ejemplo incorrecto | Ejemplo correcto |
|---|---|---|
| Usar `console.log()` en vez de `return` | `function sumar(a,b) { console.log(a+b); }` | `function sumar(a,b) { return a+b; }` |
| Invocar expresión antes de declararla | `const f = function(){}; f(); antes de la línea` | Declarar primero, luego invocar |
| Confundir parámetro con argumento | No entender la diferencia | Parámetro = nombre, Argumento = valor |
| Función que hace demasiadas cosas | `procesarTodo()` que calcula, muestra y guarda | Separar en `calcular()`, `mostrar()`, `guardar()` |
| Nombres poco descriptivos | `x()`, `datos()`, `proc()` | `calcularPromedio()`, `obtenerNotas()` |
| Olvidar invocar la función | `function saludar() {}` y nunca llamarla | `saludar();` para ejecutarla |
| Return sin valor | `return;` (devuelve undefined) | `return resultado;` con un valor real |

---

## Ejercicios prácticos

### Ejercicio 1: Cuadrado de un número

**Enunciado:** Crea una función `cuadrado(numero)` que retorne el cuadrado del número recibido.

**Datos de ejemplo:**
```javascript
const numero = 5;
```

**Resultado esperado:**
```
cuadrado(5) -> 25
cuadrado(12) -> 144
```

**Conceptos usados:** `function`, `return`, operador `*`

---

### Ejercicio 2: Mayor de edad

**Enunciado:** Crea una función `esMayorDeEdad(edad)` que retorne `true` si la persona tiene 18 años o más, `false` si es menor.

**Datos de ejemplo:**
```javascript
const edad1 = 20;
const edad2 = 17;
```

**Resultado esperado:**
```
esMayorDeEdad(20) -> true
esMayorDeEdad(17) -> false
```

**Conceptos usados:** `function`, `return`, operador `>=`, booleanos

---

### Ejercicio 3: Promedio de cuatro notas

**Enunciado:** Crea una función `calcularPromedioCuatro(nota1, nota2, nota3, nota4)` que retorne el promedio de las cuatro notas. Luego indica si aprobó (>= 51) o reprobó.

**Datos de ejemplo:**
```javascript
const n1 = 72, n2 = 65, n3 = 80, n4 = 55;
```

**Resultado esperado:**
```
calcularPromedioCuatro(72, 65, 80, 55) -> 68
Estado: APROBADO
```

**Conceptos usados:** `function`, `return`, parámetros múltiples, operadores aritméticos

---

### Ejercicio 4: Convertir kilómetros a metros

**Enunciado:** Crea una función `convertirKmAMetros(km)` que retorne la equivalencia en metros (1 km = 1000 m).

**Datos de ejemplo:**
```javascript
const distancia = 5;
```

**Resultado esperado:**
```
convertirKmAMetros(5) -> 5000
convertirKmAMetros(12.5) -> 12500
```

**Conceptos usados:** `function`, `return`, operador `*`

---

### Ejercicio 5: Encontrar el mayor de tres números

**Enunciado:** Crea una función `encontrarMayor(a, b, c)` que retorne el mayor de los tres números.

**Datos de ejemplo:**
```javascript
const a = 45, b = 72, c = 33;
```

**Resultado esperado:**
```
encontrarMayor(45, 72, 33) -> 72
encontrarMayor(100, 50, 75) -> 100
```

**Conceptos usados:** `function`, `return`, condicionales, operadores de comparación

---

### Ejercicio 6: Precio con descuento

**Enunciado:** Crea una función `calcularPrecioConDescuento(precio, descuento)` que retorne el precio final después de aplicar el descuento.

**Fórmula:**
```
precioFinal = precio - (precio * descuento / 100)
```

**Datos de ejemplo:**
```javascript
const precio = 500;
const descuento = 20;
```

**Resultado esperado:**
```
calcularPrecioConDescuento(500, 20) -> 400
calcularPrecioConDescuento(1200, 15) -> 1020
```

**Conceptos usados:** `function`, `return`, parámetros múltiples, operadores aritméticos

---

## Reto adicional

Construye un **sistema de cálculo de calificaciones** usando múltiples funciones que trabajen juntas:

### Funciones requeridas

1. **`calcularPromedio(nota1, nota2, nota3)`**
   - Recibe 3 notas y retorna el promedio

2. **`determinarEstado(promedio)`**
   - Recibe un promedio y retorna `"APROBADO"` si es >= 51, `"REPROBADO"` si es menor

3. **`mostrarResultado(nombre, promedio, estado)`**
   - Recibe el nombre, promedio y estado, y muestra un reporte completo en consola

### Requisitos

- Las tres funciones deben trabajar juntas
- `mostrarResultado` debe invocar a `determinarEstado` internamente (o recibir el resultado)
- Prueba con al menos 3 estudiantes
- Usa contexto boliviano: notas sobre 100, 51 para aprobar, nombres locales

### Ejemplo de uso esperado

```javascript
const promedio1 = calcularPromedio(72, 65, 80);
const estado1 = determinarEstado(promedio1);
mostrarResultado("Ana Martínez", promedio1, estado1);

// Salida esperada:
// ========================================
// Estudiante: Ana Martínez
// Promedio: 72.33
// Estado: APROBADO
// ========================================
```

### Pistas

- `calcularPromedio` usa `return` para devolver el resultado
- `determinarEstado` usa `if/else` con `return`
- `mostrarResultado` usa `console.log()` con template literals o concatenación
- Puedes combinar las tres en una sola línea: `mostrarResultado("Ana", calcularPromedio(72,65,80), determinarEstado(calcularPromedio(72,65,80)))`

---

## Resumen de la lección

En esta lección aprendimos:

- **Qué es una función:** Bloque de código con nombre que se puede reutilizar
- **Declarar funciones:** `function nombre() { ... }`
- **Invocar funciones:** `nombre();`
- **Parámetros:** Variables internas que reciben datos
- **Argumentos:** Valores reales que pasas al invocar
- **Return:** Devuelve un valor y termina la función
- **console.log() vs return:** Uno muestra, el otro devuelve
- **Valores por defecto:** `function f(x = 10) { ... }`
- **Hoisting:** Las declaraciones se mueven al inicio
- **Funciones que llaman funciones:** Composición y modularidad
- **Separación de responsabilidades:** Cada función hace una cosa
- **Buenas prácticas:** Nombres descriptivos con verbos

---

## Siguiente lección

En la **Lección 34** aprenderemos sobre **Scope y funciones flecha**. Verás cómo las variables tienen diferentes alcances (global, de función, de bloque) y conocerás la sintaxis moderna de las arrow functions (`=>`) que simplifican la escritura de funciones en JavaScript.

[Ir a la Lección 34 - Scope y funciones flecha](../34-JS-scope-y-funciones-flecha/)
