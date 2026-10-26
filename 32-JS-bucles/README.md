# Lección 32 - Bucles

## Objetivo de aprendizaje

Al finalizar esta lección, serás capaz de crear estructuras de repetición (bucles) para ejecutar código múltiples veces de forma eficiente. Aprenderás las estructuras `for`, `while`, `do...while` y `for...of`, así como técnicas con contadores, acumuladores y bucles anidados. Este es el ejercicio integrador de todo el módulo de JavaScript básico.

---

## ¿Qué aprenderemos?

- Qué es un bucle y cuándo usarlo
- El bucle `for` y su anatomía
- El bucle `while` y el bucle `do...while`
- Diferencias entre las tres estructuras
- Contadores y acumuladores
- Incrementos y decrementos
- Condiciones de terminación y prevención de bucles infinitos
- Control de bucles con `break` y `continue`
- Bucles anidados
- Introducción a `for...of` con cadenas de texto
- Buenas prácticas de legibilidad
- Ejercicio integrador que combina todo lo aprendido

---

## 1. ¿Qué es un bucle?

Un **bucle** es una estructura de control que **repite** un bloque de código mientras se cumpla una condición determinada. En lugar de escribir la misma instrucción muchas veces, un bucle automatiza la repetición.

**Analogía:** Imagina que necesitas escribir 100 veces tu nombre en la pizarra. Sin bucles, escribirías 100 líneas de código. Con un bucle, escribes 3 líneas y el navegador se encarga de repetirlo.

```javascript
// Sin bucles (tedioso, 10 líneas)
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
// ... hasta 100

// Con bucles (eficiente, 3 líneas)
for (let i = 1; i <= 100; i++) {
    console.log(i);
}
```

### ¿Cuándo usar un bucle?

- Cuando necesitas repetir una acción muchas veces
- Cuando debes recorrer cada carácter de un texto
- Cuando procesas una lista de datos (estudiantes, productos, precios)
- Cuando generas tablas o patrones
- Cuando buscas un valor entre muchos posibles

---

## 2. El bucle for

El bucle `for` es el más usado en JavaScript. Repite código un **número determinado** de veces.

### Sintaxis

```javascript
for (inicialización; condición; actualización) {
    // bloque de código que se repite
}
```

### Anatomía del for

```
┌──────────────────────────────────────────────────────────────┐
│  for ( let i = 1 ;  i <= 10 ;  i++ )  {  console.log(i); } │
│        ─────────   ──────────   ────                        │
│          │            │          │                           │
│    INICIALIZACIÓN  CONDICIÓN  ACTUALIZACIÓN                 │
│    (1 sola vez)   (cada vez)   (cada vez)                   │
└──────────────────────────────────────────────────────────────┘
```

### Flujo de ejecución

1. Se ejecuta la **inicialización** (una sola vez al inicio)
2. Se evalúa la **condición**
3. Si es **verdadera** → se ejecuta el bloque de código
4. Se ejecuta la **actualización**
5. Se vuelve al paso 2
6. Si la condición es **falsa** → el bucle termina

### Ejemplo: Contar del 1 al 10

```javascript
for (let i = 1; i <= 10; i++) {
    console.log("Número: " + i);
}
```

**Salida esperada:**
```
Número: 1
Número: 2
Número: 3
...
Número: 10
```

### Ejemplo: Cuenta regresiva

```javascript
for (let i = 10; i >= 1; i--) {
    console.log(i);
}
console.log("¡Despegue!");
```

### Ejemplo: Números pares del 1 al 20

```javascript
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
```

### Ejemplo: Contar de 5 en 5

```javascript
for (let i = 0; i <= 50; i += 5) {
    console.log(i);
}
// Salida: 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50
```

---

## 3. El bucle while

El bucle `while` repite código **mientras** una condición sea verdadera. Se usa cuando **no sabes** exactamente cuántas veces se repetirá.

### Sintaxis

```javascript
while (condición) {
    // bloque de código que se repite
}
```

### Flujo de ejecución

1. Se evalúa la condición
2. Si es verdadera → se ejecuta el bloque
3. Se vuelve al paso 1
4. Si es falsa → el bucle termina

### Ejemplo: Contar del 1 al 5

```javascript
let contador = 1;
while (contador <= 5) {
    console.log("Contador: " + contador);
    contador++;
}
```

### Ejemplo: Simular saldo bancario

```javascript
let saldo = 100;
while (saldo >= 25) {
    saldo = saldo - 25;
    console.log("Retiro 25 Bs. Saldo: " + saldo + " Bs");
}
console.log("Saldo insuficiente para otro retiro.");
```

**Salida esperada:**
```
Retiro 25 Bs. Saldo: 75 Bs
Retiro 25 Bs. Saldo: 50 Bs
Retiro 25 Bs. Saldo: 25 Bs
Retiro 25 Bs. Saldo: 0 Bs
Saldo insuficiente para otro retiro.
```

---

## 4. El bucle do...while

El bucle `do...while` es similar al `while`, pero **garantiza** que el bloque se ejecute **al menos una vez**, porque la condición se evalúa **al final**.

### Sintaxis

```javascript
do {
    // bloque de código
} while (condición);
```

### Flujo de ejecución

1. Se ejecuta el bloque de código (al menos 1 vez)
2. Se evalúa la condición
3. Si es verdadera → vuelve al paso 1
4. Si es falsa → termina

### Ejemplo: Ejecutar al menos una vez

```javascript
let x = 100;
do {
    console.log("Se ejecuta aunque x = " + x);
    x++;
} while (x < 5);
// Se imprime una vez porque la condición se evalúa al final
```

### Ejemplo práctico: Menú de opciones

```javascript
let opcion = 0;
do {
    console.log("Mostrando menú de opciones...");
    opcion++;
} while (opcion <= 3);
```

**Salida esperada:**
```
Mostrando menú de opciones...
Mostrando menú de opciones...
Mostrando menú de opciones...
```

---

## 5. Comparación de las tres estructuras

| Característica | `for` | `while` | `do...while` |
|---|---|---|---|
| ¿Mínimo de ejecuciones? | 0 o más | 0 o más | **1 o más** |
| ¿Cuándo evalúa la condición? | Antes | Antes | **Después** |
| ¿Cuándo usarlo? | Sabes cuántas veces | No sabes cuántas veces | Necesitas al menos 1 ejecución |
| ¿Tiene contador integrado? | Sí | No (manual) | No (manual) |

### ¿Cuál elegir?

- **`for`** → Cuando sabes cuántas veces repetir (contar del 1 al 10, recorrer elementos)
- **`while`** → Cuando no sabes cuántas veces (esperar una condición, procesar hasta encontrar algo)
- **`do...while`** → Cuando necesitas ejecutar al menos una vez (menús, validaciones)

---

## 6. Contadores y acumuladores

### Contador

Un **contador** es una variable que incrementa (o decrementa) su valor en cada iteración. Se usa para saber en qué iteración estamos o contar elementos.

```javascript
let cuenta = 0;
for (let i = 1; i <= 20; i++) {
    cuenta++;  // Suma 1 en cada iteración
}
console.log("Total: " + cuenta);  // 20
```

### Acumulador

Un **acumulador** es una variable que suma (o concatena) valores variables en cada iteración. A diferencia del contador, acumula valores diferentes.

```javascript
let suma = 0;
for (let i = 1; i <= 10; i++) {
    suma = suma + i;  // Acumula el valor de i
}
console.log("Suma del 1 al 10: " + suma);  // 55
```

### Ejemplo combinado: Calificaciones

```javascript
const notas = [72, 55, 88, 40, 65];
let sumaNotas = 0;       // Acumulador
let contadorAprobados = 0; // Contador

for (let i = 0; i < notas.length; i++) {
    sumaNotas = sumaNotas + notas[i];
    if (notas[i] >= 51) {
        contadorAprobados++;
    }
}

const promedio = sumaNotas / notas.length;
console.log("Promedio: " + promedio);
console.log("Aprobados: " + contadorAprobados);
```

---

## 7. Control de bucles: break y continue

### break - Salir del bucle

La palabra `break` interrumpe **completamente** el bucle.

```javascript
for (let i = 1; i <= 100; i++) {
    if (i % 7 === 0) {
        console.log("Primer divisible por 7: " + i);
        break;  // Sale del bucle inmediatamente
    }
}
// Resultado: 7
```

### continue - Saltar iteración

La palabra `continue` salta el resto de la iteración actual y pasa a la siguiente.

```javascript
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue;  // Salta el 5
    }
    console.log(i);
}
// Resultado: 1, 2, 3, 4, 6, 7, 8, 9, 10
```

---

## 8. Bucles anidados

Un **bucle anidado** es un bucle dentro de otro bucle. El bucle interno se ejecuta completamente por cada iteración del bucle externo.

### Ejemplo: Tabla de multiplicar

```javascript
for (let tabla = 1; tabla <= 3; tabla++) {
    console.log("Tabla del " + tabla + ":");
    for (let multiplicador = 1; multiplicador <= 5; multiplicador++) {
        const resultado = tabla * multiplicador;
        console.log(tabla + " x " + multiplicador + " = " + resultado);
    }
    console.log("");
}
```

**Salida esperada:**
```
Tabla del 1:
1 x 1 = 1
1 x 2 = 2
1 x 3 = 3
1 x 4 = 4
1 x 5 = 5

Tabla del 2:
2 x 1 = 2
2 x 2 = 4
...
```

### Ejemplo: Triángulo de asteriscos

```javascript
for (let fila = 1; fila <= 5; fila++) {
    let linea = "";
    for (let asterisco = 1; asterisco <= fila; asterisco++) {
        linea = linea + "*";
    }
    console.log(linea);
}
```

**Salida esperada:**
```
*
**
***
****
*****
```

---

## 9. Bucles infinitos: causas y prevención

Un **bucle infinito** ocurre cuando la condición nunca se vuelve falsa. El navegador se congela.

### Causas comunes

```javascript
// ❌ CAUSA 1: Variable nunca cambia
for (let i = 1; i <= 10; ) {  // Falta i++
    console.log(i);
}

// ❌ CAUSA 2: Condición siempre verdadera
while (true) {
    console.log("Esto nunca para");
}

// ❌ CAUSA 3: Variable se aleja del objetivo
for (let i = 1; i <= 10; i--) {  // i decrece, nunca llega a 10
    console.log(i);
}
```

### Prevención

1. **Siempre actualiza** la variable de control
2. Verifica que la condición pueda ser **falsa eventualmente**
3. Usa `console.log()` durante desarrollo para verificar progreso
4. Si el navegador se congela → cierra la pestaña

---

## 10. Introducción a for...of con cadenas

El bucle `for...of` permite recorrer fácilmente los caracteres de una cadena de texto.

### Sintaxis

```javascript
for (const elemento of cadena) {
    // código con cada carácter
}
```

### Ejemplo: Recorrer una palabra

```javascript
const ciudad = "Sucre";
for (const letra of ciudad) {
    console.log(letra);
}
// Salida: S, u, c, r, e
```

### Ejemplo: Contar vocales

```javascript
const frase = "Viva Bolivia";
let contadorVocales = 0;
for (const caracter of frase.toLowerCase()) {
    if (caracter === "a" || caracter === "e" || caracter === "i"
        || caracter === "o" || caracter === "u") {
        contadorVocales++;
    }
}
console.log("Vocales: " + contadorVocales);  // 5
```

### Comparación: for tradicional vs for...of

```javascript
const saludo = "Hola";

// for tradicional
for (let i = 0; i < saludo.length; i++) {
    console.log(saludo[i]);
}

// for...of (más simple)
for (const caracter of saludo) {
    console.log(caracter);
}
```

---

## 11. Buenas prácticas

| Práctica | Ejemplo |
|---|---|
| Usa nombres descriptivos | `for (let indice = 0; ...)` en vez de `for (let x = 0; ...)` |
| Usa `i` solo para bucles simples | Para bucles anidados: `fila`, `columna` |
| Mantén el cuerpo corto | Extrae lógica compleja a variables antes |
| Evita más de 2 niveles de anidamiento | Divide en funciones más adelante |
| Siempre incluye terminación clara | Verifica que la condición pueda ser falsa |
| Usa `const` en `for...of` | `for (const letra of texto)` |

---

## 12. Errores comunes

| Error | Ejemplo incorrecto | Ejemplo correcto |
|---|---|---|
| Bucle infinito | `while (true) { ... }` sin break | `while (i < 10) { i++; ... }` |
| Off-by-one (uno de más/menos) | `i <= 10` cuando debería ser `i < 10` | Revisa si necesitas incluir el límite |
| Confundir `=` con `===` | `if (i = 5)` (asigna) | `if (i === 5)` (compara) |
| Olvidar actualizar variable | `while (i < 10) { console.log(i); }` | Agrega `i++;` dentro del bloque |
| No inicializar acumulador | `let suma;` (undefined) | `let suma = 0;` |
| Anidar excesivamente | 4+ niveles de bucles anidados | Máximo 2-3 niveles |

---

## 13. Ejercicios prácticos

### Ejercicio 1: Números del 1 al 100

**Enunciado:** Escribe un programa que muestre todos los números del 1 al 100 en la consola.

**Resultado esperado:**
```
1
2
3
...
100
```

**Conceptos usados:** `for`, `console.log()`

---

### Ejercicio 2: Números pares del 1 al 50

**Enunciado:** Muestra solo los números pares entre 1 y 50.

**Resultado esperado:**
```
2
4
6
...
50
```

**Conceptos usados:** `for`, operador módulo `%`, condicionales

---

### Ejercicio 3: Tabla de multiplicar

**Enunciado:** Genera la tabla de multiplicar del 1 al 12 para un número dado.

**Datos de ejemplo:**
```javascript
const numero = 7;
```

**Resultado esperado:**
```
7 x 1 = 7
7 x 2 = 14
...
7 x 12 = 84
```

**Conceptos usados:** `for`, operadores aritméticos, concatenación

---

### Ejercicio 4: Factorial

**Enunciado:** Calcula el factorial de un número. El factorial de N (N!) es la multiplicación de todos los números desde 1 hasta N.

**Datos de ejemplo:**
```javascript
const numero = 5;
// 5! = 1 x 2 x 3 x 4 x 5 = 120
```

**Resultado esperado:**
```
El factorial de 5 es: 120
```

**Conceptos usados:** `for` o `while`, acumuladores

---

### Ejercicio 5: Suma del 1 al N

**Enunciado:** Calcula la suma de todos los números desde 1 hasta N.

**Datos de ejemplo:**
```javascript
const n = 100;
// Suma: 1 + 2 + 3 + ... + 100 = 5050
```

**Resultado esperado:**
```
La suma del 1 al 100 es: 5050
```

**Conceptos usados:** `for`, acumuladores

---

### Ejercicio 6: Divisores de un número

**Enunciado:** Encuentra todos los divisores de un número entero positivo.

**Datos de ejemplo:**
```javascript
const numero = 36;
```

**Resultado esperado:**
```
Divisores de 36: 1, 2, 3, 4, 6, 9, 12, 18, 36
```

**Conceptos usados:** `for`, operador módulo `%`, condicionales

---

### Ejercicio 7: Triángulo de asteriscos

**Enunciado:** Dibuja un triángulo de asteriscos con N filas.

**Datos de ejemplo:**
```javascript
const filas = 7;
```

**Resultado esperado:**
```
*
**
***
****
*****
******
*******
```

**Conceptos usados:** `for` anidado, concatenación de strings

---

### Ejercicio 8: Números primos

**Enunciado:** Muestra todos los números primos desde 2 hasta N.

**Datos de ejemplo:**
```javascript
const limite = 50;
```

**Resultado esperado:**
```
Primos del 2 al 50: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47
Total: 15 primos
```

**Conceptos usados:** `for` anidado, operador módulo `%`, `break`, contadores

---

### Ejercicio integrador: Reporte de calificaciones

**Enunciado:** Construye un programa que calcule un reporte de calificaciones completo.

**Datos de ejemplo:**
```javascript
const estudiantes = [
    { nombre: "Carla Mendoza", carnet: "1234567", notas: [78, 65, 82] },
    { nombre: "Roberto Paz", carnet: "2345678", notas: [42, 35, 50] },
    { nombre: "Fernanda López", carnet: "3456789", notas: [95, 90, 88] },
    { nombre: "Miguel Choque", carnet: "4567890", notas: [30, 28, 35] },
    { nombre: "Patricia Rojas", carnet: "5678901", notas: [55, 60, 48] },
    { nombre: "Andrés Vargas", carnet: "6789012", notas: [88, 92, 85] },
    { nombre: "Lucía Mamani", carnet: "7890123", notas: [40, 45, 38] },
    { nombre: "Daniel Torrez", carnet: "8901234", notas: [70, 68, 75] },
    { nombre: "Sofía Flores", carnet: "9012345", notas: [22, 18, 30] },
    { nombre: "Jorge Quiroga", carnet: "0123456", notas: [62, 58, 55] }
];
```

**Tu programa debe:**

1. Calcular el promedio de cada estudiante (promedio de sus 3 notas)
2. Determinar quién aprobó (promedio >= 51) y quién reprobó
3. Calcular el promedio general de la clase
4. Encontrar al estudiante con la nota más alta y más baja
5. Mostrar:
   - Lista de estudiantes con promedio y estado
   - Total de aprobados y reprobados con porcentajes
   - Promedio general
   - Cuadro de honor (promedio >= 80)
   - Estudiantes en riesgo (promedio < 30)

**Resultado esperado (formato):**
```
====================================================
  REPORTE DE CALIFICACIONES
  Unidad Educativa: Colegio Simón Bolívar
  Materia: Ciencias Naturales
====================================================

--- Calificaciones por estudiante ---
 1. Carla Mendoza    | Prom: 75.00 | APROBADO
 2. Roberto Paz      | Prom: 42.33 | REPROBADO
 3. Fernanda López   | Prom: 91.00 | APROBADO
 ...

--- Resumen ---
Aprobados: 6 (60.0%)
Reprobados: 4 (40.0%)
Promedio general: 58.50

--- Cuadro de honor ---
★ Fernanda López - Promedio: 91.00
★ Andrés Vargas  - Promedio: 88.33

--- Estudiantes en riesgo ---
→ Miguel Choque (Promedio: 31.00)
→ Sofía Flores  (Promedio: 23.33)
```

**Conceptos usados:** TODOS los conceptos de las lecciones 25-32 (consola, variables, tipos de datos, operadores, conversión de tipos, condicionales y bucles)

---

## 14. Reto adicional

**Reto:** Crea un programa que simule el juego de adivinanza de números:

1. Define un número secreto entre 1 y 100
2. Define una lista de intentos del jugador
3. Para cada intento, indica si el número es mayor o menor al secreto
4. Si acierta, muestra un mensaje de felicitaciones y la cantidad de intentos
5. Si falla todos los intentos, muestra el número secreto
6. Al final, muestra estadísticas: número de intentos, si ganó o perdió, y el número secreto

**Ejemplo de resultado:**
```
Intento 1: 50 → Muy bajo
Intento 2: 75 → Muy alto
Intento 3: 62 → Muy bajo
Intento 4: 68 → ¡Correcto! Ganaste en 4 intentos.
```

---

## 15. Resumen de la lección

En esta lección aprendimos:

✅ **Qué es un bucle:** Una estructura que repite código mientras se cumpla una condición

✅ **El bucle for:** Para cuando sabes cuántas veces repetir
```javascript
for (let i = 1; i <= 10; i++) { /* código */ }
```

✅ **El bucle while:** Para cuando no sabes cuántas veces repetir
```javascript
while (condición) { /* código */ }
```

✅ **El bucle do...while:** Se ejecuta al menos una vez
```javascript
do { /* código */ } while (condición);
```

✅ **Contadores:** Variables que incrementan para contar (`cuenta++`)

✅ **Acumuladores:** Variables que suman valores (`suma = suma + valor`)

✅ **break:** Sale del bucle inmediatamente

✅ **continue:** Salta a la siguiente iteración

✅ **Bucles anidados:** Un bucle dentro de otro (tablas, patrones)

✅ **for...of:** Recorre caracteres de cadenas fácilmente

✅ **Bucles infinitos:** Se previenen asegurando terminación

---

## 16. Resumen del módulo JavaScript

¡Has completado el módulo completo de JavaScript básico! Aquí un resumen de todo lo aprendido:

| Lección | Tema | Concepto clave |
|---|---|---|
| 25 | Introducción y consola | `console.log()`, `console.warn()`, `console.error()` |
| 26 | Vinculación con HTML | `<script src="script.js" defer>` |
| 27 | Variables y constantes | `const` (por defecto), `let` (reasignable) |
| 28 | Tipos de datos | string, number, boolean, undefined, null |
| 29 | Operadores | Aritméticos, comparación (`===`), lógicos |
| 30 | Conversión de tipos | `parseInt()`, `parseFloat()`, `String()`, `Boolean()` |
| 31 | Condicionales | `if`, `else if`, `else`, ternario, `switch` |
| 32 | Bucles | `for`, `while`, `do...while`, `for...of` |

**Ya puedes:**
- Mostrar mensajes en la consola del navegador
- Vincular JavaScript con archivos HTML
- Declarar variables y constantes correctamente
- Trabajar con diferentes tipos de datos
- Realizar operaciones matemáticas y comparaciones
- Convertir entre tipos de datos
- Tomar decisiones en el código con condicionales
- Repetir acciones con bucles de forma eficiente
- Combinar todos estos conceptos para resolver problemas

---

## 17. ¿Qué sigue?

Ahora que dominas los fundamentos de JavaScript, estos son los siguientes pasos en tu aprendizaje:

### Próximos temas de JavaScript

- **Arrays (arreglos):** Colecciones de datos ordenadas. Aprenderás métodos como `push()`, `pop()`, `map()`, `filter()`, `forEach()` y más.
- **Funciones:** Bloques de código reutilizables. Parámetros, valores de retorno, funciones flecha (`arrow functions`), scope y closures.
- **Manipulación del DOM:** Conectar JavaScript con el HTML para crear páginas interactivas: cambiar textos, estilos, responder a clics, crear elementos dinámicamente.
- **Eventos:** Responder a acciones del usuario: clics, teclas, movimiento del mouse, envío de formularios.
- **Objetos:** Estructuras de datos más complejas con propiedades y métodos.
- **Async/Await y Promesas:** Manejar operaciones que toman tiempo (como cargar datos de internet).

### Recursos recomendados

- Practica los ejercicios de esta lección sin mirar las soluciones
- Combina los conceptos creando mini-proyectos
- Lee el código de otros desarrolladores
- Experimenta modificando los ejemplos de clase

**¡Felicidades por completar el módulo de JavaScript básico! Tienes las bases sólidas para seguir avanzando.**
