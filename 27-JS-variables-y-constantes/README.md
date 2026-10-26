# Lección 27 - Variables y Constantes

## Objetivo de aprendizaje

Al finalizar esta lección, serás capaz de almacenar, modificar y usar datos en tus programas JavaScript usando variables y constantes. Comprenderás cuándo usar `let` y cuándo usar `const`, y conocerás las reglas para nombrar tus variables correctamente.

## ¿Qué aprenderemos?

- Qué es una variable y para qué sirve
- Declarar variables con `let` y constantes con `const`
- Por qué no debemos usar `var`
- Las diferencias entre `let`, `const` y `var`
- Reglas para nombrar variables
- La convención camelCase
- Alcance de bloque
- Buenas prácticas de programación

## 1. ¿Qué es una variable?

Una **variable** es un espacio en la memoria del computador donde almacenamos un valor. Puedes imaginarla como una **caja con una etiqueta**:

- La **etiqueta** es el nombre de la variable (ej: `nombre`)
- El **contenido** es el valor almacenado (ej: "María")

```javascript
let nombre = "María";
//  ^^^^^^   ^^^^^^^
//  nombre   valor
//  (etiqueta de la caja)
```

En JavaScript, usamos variables para:
- Guardar nombres de usuarios
- Almacenar precios de productos
- Llevar contadores
- Guardar configuraciones
- Cualquier dato que necesitemos usar después

## 2. Declaración de variables con `let`

La palabra clave `let` se usa para declarar variables cuyo valor **puede cambiar** durante la ejecución del programa.

### Sintaxis

```javascript
let nombreVariable = valor;
```

### Ejemplos

```javascript
let nombreEstudiante = "Carlos";
let edad = 20;
let precio = 150.50;

console.log(nombreEstudiante); // "Carlos"
console.log(edad);             // 20
console.log(precio);           // 150.50
```

### Reasignar valores

Con `let`, puedes cambiar el valor después:

```javascript
let contador = 1;
console.log(contador); // 1

contador = 2; // No necesitas "let" otra vez
console.log(contador); // 2

contador = contador + 1;
console.log(contador); // 3
```

**Nota importante:** Al reasignar, NO vuelvas a escribir `let`. Solo usa el nombre de la variable.

```javascript
let edad = 20;
// let edad = 25;  // ERROR: no puedes redeclarar con let
edad = 25;         // CORRECTO: reasignación sin let
```

## 3. Declaración de constantes con `const`

La palabra clave `const` se usa para declarar valores que **NO van a cambiar** nunca. Es una buena práctica usar `const` por defecto.

### Sintaxis

```javascript
const NOMBRE_CONSTANTE = valor;
```

### Ejemplos

```javascript
const PI = 3.14159;
const pais = "Bolivia";
const IVA_RATE = 0.13; // 13% de IVA en Bolivia
```

### NO puedes reasignar una constante

```javascript
const año = 2024;
// año = 2025;  // ERROR: Assignment to constant variable
```

### Debes inicializar al declarar

```javascript
// const codigo;  // ERROR: Missing initializer in const declaration
const codigo = 12345; // CORRECTO
```

## 4. La palabra clave `var`

`var` es la forma **antigua** de declarar variables. Fue la única opción antes de ES6 (2015).

### ¿Por qué NO usar `var`?

1. **No tiene alcance de bloque**: Puede causar bugs inesperados
2. **Permite redeclarar**: Puedes declarar la misma variable varias veces (confuso)
3. **Hoisting**: Se "eleva" al inicio de la función, causando comportamiento extraño

### Ejemplo del problema con `var`

```javascript
// Con var (MALO):
var contador = 1;
var contador = 2; // ¡No da error, pero es confuso!

// Con let (BUENO):
let contador = 1;
// let contador = 2; // Error: Identifier 'contador' has already been declared
```

**Recomendación**: Usa siempre `const` o `let`. Nunca uses `var` en código nuevo.

## 5. Diferencias entre `let`, `const` y `var`

| Característica | `let` | `const` | `var` |
|----------------|-------|---------|-------|
| ¿Se puede reasignar? | Sí | No | Sí |
| ¿Se puede redeclarar? | No | No | Sí |
| Alcance | Bloque | Bloque | Función |
| ¿Se debe usar? | Sí (si cambia) | Sí (por defecto) | No (obsoleto) |
| Debe inicializarse | No | Sí | No |

### Alcance de bloque vs función

```javascript
// let y const tienen alcance de BLOQUE (solo existen dentro de {})
if (true) {
    let dentro = "solo aquí";
    console.log(dentro); // "solo aquí"
}
// console.log(dentro); // ERROR: dentro is not defined

// var tiene alcance de FUNCIÓN (existe fuera del bloque)
if (true) {
    var fuera = "también fuera";
}
console.log(fuera); // "también fuera" (¡peligroso!)
```

## 6. Declaración e inicialización

### Declarar e inicializar en una línea

```javascript
let ciudad = "La Paz";
const pais = "Bolivia";
```

### Declarar e inicializar separados

```javascript
let poblacion;
poblacion = 3000000;

console.log(poblacion); // 3000000
```

### Variables sin inicializar

Si declaras una variable sin darle valor, su valor es `undefined`:

```javascript
let telefono;
console.log(telefono); // undefined
```

Las constantes **deben** inicializarse al declararse:

```javascript
// const codigo;  // ERROR: Missing initializer
const codigo = 2000; // Correcto
```

## 7. Reasignación de valores

### Con `let` (SÍ se puede)

```javascript
let contador = 0;
contador = 1;
contador = 2;
contador = contador + 10;
console.log(contador); // 12
```

### Con `const` (NO se puede)

```javascript
const PI = 3.14159;
// PI = 3.14;  // ERROR: Assignment to constant variable
```

### Operadores de reasignación

```javascript
let numero = 10;

numero = numero + 5;  // 15
numero = numero - 3;  // 12
numero = numero * 2;  // 24
numero = numero / 4;  // 6
```

## 8. Reglas para nombrar variables

### Reglas obligatorias

1. ✅ Pueden contener letras, números, `$` y `_`
2. ✅ DEBEN empezar con letra, `_` o `$` (nunca con número)
3. ✅ No pueden tener espacios
4. ✅ No pueden ser palabras reservadas (`let`, `const`, `if`, etc.)
5. ✅ Son **case-sensitive** (`nombre` ≠ `Nombre`)

### Ejemplos válidos

```javascript
let nombreUsuario = "Ana";      // ✅ camelCase
let _total = 500;                // ✅ empieza con _
let $precio = 99.99;            // ✅ empieza con $
let numero1 = 10;               // ✅ número después de letra
```

### Ejemplos inválidos

```javascript
// let 1erLugar = "oro";       // ❌ empieza con número
// let nombre completo = "X";  // ❌ tiene espacio
// let let = "valor";          // ❌ palabra reservada
// let mi-variable = 5;        // ❌ guion no permitido
```

## 9. Convención camelCase

En JavaScript, usamos **camelCase** para nombres de variables:
- Primera palabra en minúscula
- Cada palabra siguiente empieza con mayúscula
- Sin espacios ni guiones

### Ejemplos

```javascript
// BIEN (camelCase):
let nombreEstudianteCompleto = "Carlos Mamani";
let totalProductos = 5;
let precioConDescuento = 85.50;
let esMayorDeEdad = true;

// MAL (no usar):
// let NombreEstudiante = "X";   // PascalCase (para clases)
// let nombre_estudiante = "X";  // snake_case (para Python)
// let NOMBREESTUDIANTE = "X";   // Todo junto (ilegible)
```

### Cuándo usar cada estilo

| Estilo | Uso en JavaScript | Ejemplo |
|--------|-------------------|---------|
| camelCase | Variables y funciones | `nombreUsuario`, `calcularTotal()` |
| PascalCase | Clases y constructores | `class Estudiante {}` |
| snake_case | Evitar en JS | `nombre_usuario` (no usar) |
| MAYÚSCULAS | Constantes (opcional) | `PI`, `IVA_RATE` |

## 10. Alcance de bloque

Las variables declaradas con `let` y `const` solo existen dentro del **bloque** (entre llaves `{}`) donde se declaran.

### Ejemplo básico

```javascript
let global = "Visible en todo";

if (true) {
    let local = "Solo dentro del if";
    console.log(local);   // ✅ Funciona
    console.log(global);  // ✅ También funciona
}

console.log(global);      // ✅ Funciona
// console.log(local);    // ❌ ERROR: local is not defined
```

### Ejemplo con `for`

```javascript
for (let i = 0; i < 3; i++) {
    console.log(i); // 0, 1, 2
}

// console.log(i); // ERROR: i is not defined
```

**Importante**: Esto NO funciona así con `var`:

```javascript
for (var j = 0; j < 3; j++) {
    // j existe aquí
}
console.log(j); // 3 (¡no da error! pero es peligroso)
```

Por esto y otros problemas, no uses `var`.

## 11. Buenas prácticas

### ✅ HAZ ESTO

1. **Usa `const` por defecto**
   ```javascript
   const nombre = "María";
   ```

2. **Usa `let` solo cuando necesites cambiar el valor**
   ```javascript
   let contador = 0;
   contador = contador + 1;
   ```

3. **Usa nombres descriptivos**
   ```javascript
   // Bien:
   let precioTotal = 150;
   let nombreEstudiante = "Juan";
   
   // Mal:
   let x = 150;
   let ne = "Juan";
   ```

4. **Inicializa al declarar cuando sea posible**
   ```javascript
   let saldo = 0; // Mejor que dejarlo sin valor
   ```

5. **Usa camelCase consistentemente**
   ```javascript
   let totalComprasMes = 500;
   ```

### ❌ NO HAGAS ESTO

1. **No uses `var`**
   ```javascript
   // Mal:
   var nombre = "X";
   
   // Bien:
   const nombre = "X";
   ```

2. **No uses nombres de una sola letra** (excepto en loops)
   ```javascript
   // Mal:
   let n = "Juan";
   
   // Bien:
   let nombre = "Juan";
   ```

3. **No declarares sin usar**
   ```javascript
   // Mal:
   let a, b, c, d, e;
   
   // Bien: declara cuando necesites
   let nombre = "Juan";
   ```

4. **No uses caracteres extraños sin razón**
   ```javascript
   // Mal:
   let $precio = 100;
   
   // Bien:
   let precio = 100;
   ```

## 12. Errores comunes

### Error 1: Reasignar una constante

```javascript
const pais = "Bolivia";
// pais = "Perú";  // TypeError: Assignment to constant variable
```

**Solución**: Usa `let` si el valor puede cambiar.

### Error 2: Usar variable no declarada

```javascript
// console.log(edad);  // ReferenceError: edad is not defined
let edad = 20;
console.log(edad);     // ✅ Ahora sí funciona
```

### Error 3: Reasignar con `let` de nuevo

```javascript
let nombre = "Juan";
// let nombre = "María";  // SyntaxError: Identifier 'nombre' has already been declared
nombre = "María";         // ✅ Correcto: sin "let"
```

### Error 4: No inicializar una constante

```javascript
// const codigo;  // SyntaxError: Missing initializer in const declaration
const codigo = 123; // ✅ Correcto
```

### Error 5: Nombres inválidos

```javascript
// let 123abc = "x";       // SyntaxError: Invalid or unexpected token
// let mi variable = "x";  // SyntaxError: Unexpected identifier
let abc123 = "x";          // ✅ Correcto
let miVariable = "x";      // ✅ Correcto
```

## 13. Ejercicios prácticos

### Ejercicio 1: Información de un estudiante

**Objetivo**: Practicar declaración con `let` y `const`

Declara variables para almacenar información de un estudiante:

- Nombre completo (puede cambiar si se corrige)
- Edad (puede cambiar)
- Carrera (no debe cambiar)
- Universidad (no debe cambiar)
- Gestión actual (puede cambiar)

<details>
<summary>Ver solución</summary>

```javascript
let nombreCompleto = "Lucía Fernández";
let edad = 22;
const carrera = "Ingeniería de Sistemas";
const universidad = "UMSA";
let gestion = 2024;

console.log("Nombre:", nombreCompleto);
console.log("Edad:", edad);
console.log("Carrera:", carrera);
console.log("Universidad:", universidad);
console.log("Gestión:", gestion);
```

</details>

### Ejercicio 2: Calcular costo total

**Objetivo**: Usar constantes y operaciones con variables

Una librería vende:
- Cuaderno: 15 Bs.
- Bolígrafo: 5 Bs.
- Mochila: 120 Bs.

El cliente compra 3 cuadernos, 5 bolígrafos y 1 mochila. Calcula el total con IVA (13% en Bolivia).

<details>
<summary>Ver solución</summary>

```javascript
const precioCuaderno = 15;
const precioBoli = 5;
const precioMochila = 120;

const cantidadCuadernos = 3;
const cantidadBoligrafos = 5;
const cantidadMochilas = 1;

const IVA = 0.13;

let subtotal = (precioCuaderno * cantidadCuadernos) + 
               (precioBoli * cantidadBoligrafos) + 
               (precioMochila * cantidadMochilas);

let montoIVA = subtotal * IVA;
let total = subtotal + montoIVA;

console.log("Subtotal:", subtotal, "Bs.");
console.log("IVA:", montoIVA, "Bs.");
console.log("Total:", total, "Bs.");
```

</details>

### Ejercicio 3: Intercambiar valores

**Objetivo**: Entender el uso de variable temporal

Tienes dos notas y necesitas intercambiarlas:

```javascript
let notaJuan = 70;
let notaMaria = 90;
```

Después del intercambio, `notaJuan` debe valer 90 y `notaMaria` debe valer 70.

**Pista**: Usa una tercera variable para guardar temporalmente un valor.

<details>
<summary>Ver solución</summary>

```javascript
let notaJuan = 70;
let notaMaria = 90;

console.log("Antes:");
console.log("Juan:", notaJuan);
console.log("María:", notaMaria);

let temporal = notaJuan;
notaJuan = notaMaria;
notaMaria = temporal;

console.log("Después:");
console.log("Juan:", notaJuan);
console.log("María:", notaMaria);
```

</details>

### Ejercicio 4: Identificar declaraciones incorrectas

**Objetivo**: Reconocer errores comunes

Identifica qué está mal en cada declaración y cómo corregirla:

1. `let 123numero = 5;`
2. `let mi-variable = 10;`
3. `const tasa; tasa = 13;`
4. `let let = 100;`
5. `var x = 1; var x = 2;`

<details>
<summary>Ver soluciones</summary>

1. **Error**: No puede empezar con número. **Corrección**: `let numero123 = 5;`
2. **Error**: No puede tener guion. **Corrección**: `let miVariable = 10;`
3. **Error**: `const` debe inicializarse. **Corrección**: `const tasa = 13;`
4. **Error**: `let` es palabra reservada. **Corrección**: `let cantidad = 100;`
5. **Problema**: `var` permite redeclarar (por eso no se usa). **Corrección**: Usa `let` una sola vez.

</details>

### Ejercicio 5: Elegir entre `let` y `const`

**Objetivo**: Decidir cuándo usar cada uno

Para cada situación, ¿usarías `let` o `const`?

1. Número de estudiantes en un curso
2. Nombre del país
3. Precio de un producto
4. Tasa de IVA de Bolivia
5. Saldo de cuenta bancaria
6. Valor de PI
7. Contador de intentos
8. Edad de una persona
9. Símbolo de moneda (Bs.)
10. Productos en carrito de compras

<details>
<summary>Ver respuestas</summary>

1. `let` (cambia cuando se inscriben estudiantes)
2. `const` (no cambia)
3. `let` (puede cambiar por ofertas)
4. `const` (es fijo)
5. `let` (cambia con transacciones)
6. `const` (es un valor matemático fijo)
7. `let` (aumenta con cada intento)
8. `let` (cambia cada año)
9. `const` (no cambia)
10. `let` (cambia al agregar productos)

</details>

## 14. Reto adicional

Intenta resolver este desafío sin ver la solución:

**Problema**: Calcula el promedio de 3 notas y determina si el estudiante aprobó (promedio >= 51) o reprobó.

```javascript
// Datos dados:
const nota1 = 65;
const nota2 = 45;
const nota3 = 78;

// Calcula el promedio y muestra si aprobó o reprobó
```

<details>
<summary>Ver solución</summary>

```javascript
const nota1 = 65;
const nota2 = 45;
const nota3 = 78;

const notaMinima = 51;

let sumaNotas = nota1 + nota2 + nota3;
let promedio = sumaNotas / 3;

console.log("Notas:", nota1, nota2, nota3);
console.log("Promedio:", promedio);

if (promedio >= notaMinima) {
    console.log("Estado: APROBADO");
} else {
    console.log("Estado: REPROBADO");
}
```

**Salida esperada**:
```
Notas: 65 45 78
Promedio: 62.666666666666664
Estado: APROBADO
```

</details>

## 15. Resumen de la lección

| Concepto | Descripción |
|----------|-------------|
| Variable | Espacio en memoria para almacenar datos |
| `let` | Declara variables que pueden cambiar |
| `const` | Declara valores que NO cambian |
| `var` | Forma antigua, NO usar |
| camelCase | Convención: `nombreVariableCompuesta` |
| Alcance | Variables con `let`/`const` solo existen en su bloque `{}` |
| Reasignar | Cambiar valor: `variable = nuevoValor;` |
| Inicializar | Dar primer valor: `let x = 10;` |

### Reglas de oro

1. ✅ Usa `const` por defecto
2. ✅ Usa `let` solo si el valor cambia
3. ❌ Nunca uses `var`
4. ✅ Nombres descriptivos en camelCase
5. ✅ Inicializa al declarar cuando puedas

## 16. Siguiente lección

En la **Lección 28** aprenderemos sobre **Tipos de datos en JavaScript**: números, cadenas de texto (strings), booleanos, y cómo trabajar con ellos.

¡Nos vemos en la próxima lección!
