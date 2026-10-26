# Leccion 34 - Scope y Funciones Flecha

## Objetivo de aprendizaje

Al finalizar esta leccion, comprenderas como JavaScript determina donde existen y pueden accederse las variables (scope), y dominaras la sintaxis moderna de funciones flecha para escribir codigo mas conciso y legible.

## Conocimientos previos

- Variables con `const` y `let`
- Funciones basicas (declaracion y parametros)
- Operadores aritmeticos y de comparacion
- Condicionales `if/else`
- Bucles `for`

## Introduccion

El **scope** (alcance) es uno de los conceptos mas fundamentales de JavaScript. Determina donde "viven" tus variables y desde donde puedes usarlas. Entender el scope te ayuda a evitar errores, escribir codigo mas predecible y organizar mejor tus programas.

Por otro lado, las **funciones flecha** son una sintaxis moderna (introducida en ES6) para escribir funciones de forma mas corta y clara. No son solo una cuestion de estilo: tienen diferencias importantes en como manejan el contexto (`this`), lo que las hace preferibles en muchos casos.

---

## Scope (Alcance de variables)

El scope determina la **accesibilidad** de las variables. Piensa en el scope como cajas anidadas: una variable solo existe dentro de la caja mas pequena en la que fue declarada.

### Scope global

Las variables declaradas **fuera** de cualquier funcion o bloque pertenecen al scope global. Pueden accederse desde cualquier parte del codigo.

```javascript
const estudiante = "Juan Perez";
const materia = "Matematicas";

const mostrar = () => {
    console.log(estudiante); // Accesible desde cualquier lugar
};

mostrar();
console.log(materia); // Tambien accesible aqui
```

**Cuidado:** demasiadas variables globales pueden causar conflictos entre diferentes partes del codigo.

### Scope de funcion

Las variables declaradas **dentro** de una funcion solo existen dentro de esa funcion. No pueden accederse desde fuera.

```javascript
const calcularPromedio = (nota1, nota2, nota3) => {
    const suma = nota1 + nota2 + nota3;
    const promedio = suma / 3;
    return promedio;
};

console.log(promedio); // ERROR: promedio is not defined
```

### Scope de bloque

Las variables declaradas con `let` y `const` dentro de un bloque `{}` (como un `if`, `for`, o `while`) solo existen dentro de ese bloque.

```javascript
if (true) {
    let mensaje = "Solo existo aqui";
    console.log(mensaje); // Funciona
}
console.log(mensaje); // ERROR: mensaje is not defined

for (let i = 0; i < 3; i++) {
    console.log(i); // Funciona
}
console.log(i); // ERROR: i is not defined
```

### var vs let/const en bloques

Esta es una diferencia **critica**. La palabra clave `var` **NO respeta el scope de bloque**, solo respeta el scope de funcion. Por eso preferimos `let` y `const`.

```javascript
// var ignora los bloques
if (true) {
    var conVar = "Existe fuera del bloque";
}
console.log(conVar); // Funciona! var ignora el bloque

// let respeta los bloques
if (true) {
    let conLet = "Solo existo en el bloque";
}
console.log(conLet); // ERROR: conLet is not defined
```

En un bucle `for`, la diferencia es aun mas evidente:

```javascript
for (var j = 0; j < 3; j++) { /* ... */ }
console.log(j); // 3 - j sigue existiendo!

for (let k = 0; k < 3; k++) { /* ... */ }
console.log(k); // ERROR: k is not defined
```

### Shadowing

Shadowing ocurre cuando una variable interna tiene el **mismo nombre** que una variable externa. La variable interna "oculta" (hace sombra) a la externa dentro de su scope.

```javascript
const precio = 100; // Global

const mostrarPrecio = () => {
    const precio = 50; // Shadowing - oculta la global
    console.log(precio); // 50
};

mostrarPrecio();
console.log(precio); // 100 - la global no fue afectada
```

### Variables locales y globales

| Caracteristica | Variable global | Variable local |
|---|---|---|
| Donde se declara | Fuera de funciones/bloques | Dentro de funciones/bloques |
| Accesible desde | Todo el codigo | Solo el scope donde fue declarada |
| Riesgo de conflictos | Alto | Bajo |
| Recomendacion | Minimizar su uso | Preferir siempre que sea posible |

---

## Scope lexico y Closures

### Scope lexico

El scope lexico significa que las **funciones internas pueden acceder a las variables de sus funciones externas**. JavaScript resuelve las variables buscando desde el scope mas interno hacia afuera.

```javascript
const saludarConTitulo = (titulo) => {
    const generarSaludo = (nombre) => {
        return titulo + " " + nombre;
    };
    return generarSaludo;
};

const saludarProfesor = saludarConTitulo("Profesor");
console.log(saludarProfesor("Roberto")); // "Profesor Roberto"
```

La funcion `generarSaludo` "recuerda" la variable `titulo` porque fue creada dentro de `saludarConTitulo`.

### Closures (introduccion)

Un **closure** es una funcion que recuerda las variables de su scope externo, incluso despes de que la funcion externa haya terminado de ejecutarse. Es como una "mochila" que la funcion lleva con las variables que necesita.

```javascript
const crearContador = () => {
    let cuenta = 0; // Variable "privada"

    return () => {
        cuenta = cuenta + 1;
        return cuenta;
    };
};

const contador = crearContador();
console.log(contador()); // 1
console.log(contador()); // 2
console.log(contador()); // 3
```

Cada vez que llamamos a `crearContador()`, se crea una nueva variable `cuenta` independiente. Los closures son utiles para crear variables "privadas" y mantener estado.

---

## Funciones tradicionales vs funciones flecha

### Funciones anonimas

Una funcion anonima es una funcion **sin nombre**. Se usa comunmente asignada a variables o pasada como argumento.

```javascript
const saludar = function (nombre) {
    return "Hola " + nombre + "!";
};

console.log(saludar("Luis"));
```

### Expresiones de funcion

Una expresion de funcion es asignar una funcion (anonima o con nombre) a una variable.

```javascript
const calcularArea = function (base, altura) {
    return (base * altura) / 2;
};

console.log("Area:", calcularArea(10, 5));
```

### Funciones flecha: sintaxis

La sintaxis flecha (`=>`) es mas corta y clara.

| Caso | Sintaxis |
|---|---|
| Sin parametros | `const fn = () => expresion` |
| Un parametro | `const fn = n => expresion` |
| Multiples parametros | `const fn = (a, b) => expresion` |

**Ejemplos de conversion:**

```javascript
// Funcion tradicional
function sumar(a, b) {
    return a + b;
}

// Funcion flecha
const sumar = (a, b) => a + b;

// Funcion tradicional
function esPar(n) {
    return n % 2 === 0;
}

// Funcion flecha (un parametro, sin parentesis)
const esPar = n => n % 2 === 0;

// Funcion tradicional
function saludar() {
    return "Hola!";
}

// Funcion flecha (sin parametros)
const saludar = () => "Hola!";
```

### Retorno implicito vs explicito

- **Retorno implicito:** cuando el cuerpo es una sola expresion, se puede omitir `return` y las llaves `{}`.
- **Retorno explicito:** cuando el cuerpo tiene multiples lineas, necesitas llaves y `return`.

```javascript
// Implicito (una linea)
const cuadrado = (x) => x * x;

// Explicito (multiples lineas)
const clasificarNota = (nota) => {
    if (nota >= 90) {
        return "Excelente";
    } else if (nota >= 70) {
        return "Aprobado";
    } else {
        return "Reprobado";
    }
};
```

### Diferencias fundamentales

| Caracteristica | Funcion tradicional | Funcion flecha |
|---|---|---|
| Sintaxis | `function(a, b) { return a + b }` | `(a, b) => a + b` |
| `this` | Depende de como se llama | Hereda del scope donde fue creada |
| `arguments` | Tiene su propio objeto `arguments` | No tiene, usar `...rest` |
| Constructor | Puede usarse con `new` | No puede usarse con `new` |

### this en funciones flecha (introduccion)

En funciones tradicionales, `this` depende de **quien llama** a la funcion. En funciones flecha, `this` hereda del **contexto donde fue creada**.

```javascript
const objeto = {
    nombre: "Mi Objeto",
    // Funcion tradicional: this es el objeto
    metodoNormal() {
        console.log(this.nombre); // "Mi Objeto"
    },
    // Funcion flecha: this NO es el objeto
    metodoFlecha: () => {
        console.log(this); // undefined o global, NO el objeto
    },
};
```

Por ahora, recuerda: si necesitas que `this` se refiera al objeto que contiene el metodo, usa una funcion tradicional.

---

## Buenas practicas

1. **Usa `const` por defecto**, solo usa `let` cuando necesites reasignar.
2. **Minimiza las variables globales.** Declara variables en el scope mas pequeno posible.
3. **Prefiere funciones flecha** para funciones cortas y callbacks.
4. **Usa `===`** en lugar de `==` para comparaciones.
5. **Nombra tus variables** de forma clara y descriptiva.
6. **Evita shadowing innecesario.** Aunque es valido, puede causar confusion.

## Errores comunes

```javascript
// ERROR 1: Acceder a una variable fuera de su scope
if (true) {
    let mensaje = "Hola";
}
console.log(mensaje); // ERROR: mensaje is not defined

// ERROR 2: Usar var en bloques pensando que tiene block scope
for (var i = 0; i < 5; i++) { /* ... */ }
console.log(i); // No da error, pero i = 5. Usar let en su lugar.

// ERROR 3: Usar funcion flecha como metodo de objeto
const obj = {
    valor: 42,
    getValor: () => this.valor // ERROR: this no es obj
};

// ERROR 4: Olvidar parentesis con cero parametros
const saludo = => "Hola"; // ERROR de sintaxis
const saludo = () => "Hola"; // Correcto

// ERROR 5: Confundir retorno implicito con multiples lineas
const fn = (x) => { x * 2 }; // Retorna undefined! Falta return
const fn = (x) => x * 2;     // Correcto, retorno implicito
```

## Ejercicios practicos

Completa los ejercicios en el archivo `ejercicios.js`:

1. **Identificar variables accesibles** en diferentes puntos del codigo.
2. **Crear una funcion** con variables de bloque.
3. **Convertir** 3 funciones tradicionales a funciones flecha.
4. **Reescribir** funciones flecha con retorno implicito.
5. **Explicar** por que una variable no puede usarse fuera de su scope.
6. **Crear un closure** que mantenga un contador privado.

## Reto adicional

Crea un **generador de contadores independientes** usando closures:

```javascript
// crearGeneradorContadores debe permitir crear contadores independientes
// Cada contador tiene su propio valor inicial y se incrementa en 1

const generador = crearGeneradorContadores();

const contador1 = generador(10);
const contador2 = generador(0);

console.log(contador1()); // 11
console.log(contador1()); // 12
console.log(contador2()); // 1
console.log(contador2()); // 2
console.log(contador2()); // 3
console.log(contador1()); // 13
```

Cada contador debe mantener su propio estado independiente usando closures.

## Resumen

- **Scope** determina donde una variable existe y puede accederse.
- **Scope global:** variable accesible desde todo el codigo.
- **Scope de funcion:** variable solo accesible dentro de la funcion.
- **Scope de bloque:** variable solo accesible dentro del bloque `{}` (`let` y `const`).
- **`var` NO tiene block scope**, por eso preferimos `let` y `const`.
- **Shadowing:** una variable interna oculta a una externa con el mismo nombre.
- **Scope lexico:** funciones internas acceden a variables de funciones externas.
- **Closure:** una funcion que recuerda las variables de su scope externo.
- **Funciones flecha** (`=>`): sintaxis corta y moderna.
- **Retorno implicito:** una expresion sin llaves ni `return`.
- **`this` en flechas** hereda del scope donde fueron creadas.

## Siguiente leccion

En la [Leccion 35 - Strings](../35-JS-strings/), aprenderas a trabajar con cadenas de texto en JavaScript: metodos de manipulacion, busqueda, extraccion, template literals y mas.
