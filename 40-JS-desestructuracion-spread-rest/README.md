# Leccion 40 - Desestructuracion, Spread y Rest

## Objetivo de aprendizaje

Aprender a utilizar las modernas funciones de desestructuracion, spread (propagacion) y rest (recopilacion) de JavaScript para trabajar de forma eficiente y limpia con arrays, objetos y parametros de funciones.

## Conocimientos previos

- [Leccion 37 - Arrays](../37-JS-arrays/)
- [Leccion 38 - Metodos de Arrays](../38-JS-metodos-arrays/)
- [Leccion 39 - Objetos](../39-JS-objetos/)
- Conocimiento basico de variables (`const`, `let`)
- Funciones basicas y parametros

## Introduccion

JavaScript ES6 introdujo tres caracteristicas poderosas que transforman la forma en que trabajamos con datos: **desestructuracion**, **spread** y **rest**. Aunque usan sintaxis similar (especialmente `...`), cada una tiene un proposito diferente.

En esta leccion aprenderas a:

- Extraer valores de arrays y objetos de forma directa
- Copiar y combinar datos sin mutar los originales
- Crear funciones flexibles con parametros variables
- Entender la diferencia entre copia superficial y profunda

## Desestructuracion

La **desestructuracion** es una forma de extraer valores de arrays y objetos en variables individuales, con una sintaxis limpia y directa.

### De arrays

Permite extraer elementos de un array segun su posicion:

```javascript
const colores = ["Rojo", "Verde", "Azul"];
const [primero, segundo, tercero] = colores;

console.log(primero);  // "Rojo"
console.log(segundo);  // "Verde"
console.log(tercero);  // "Azul"
```

Puedes saltar elementos usando comas:

```javascript
const numeros = [10, 20, 30, 40];
const [a, , c] = numeros;
// a = 10, c = 30 (se salta el 20)
```

### De objetos

Extrae propiedades en variables con el mismo nombre:

```javascript
const estudiante = { nombre: "Carlos", edad: 20, carrera: "Informatica" };
const { nombre, edad } = estudiante;

console.log(nombre);  // "Carlos"
console.log(edad);    // 20
```

### Valores predeterminados

Puedes asignar valores por defecto si la propiedad no existe:

```javascript
const persona = { nombre: "Maria" };
const { nombre, edad = 18, ciudad = "La Paz" } = persona;

console.log(edad);    // 18 (valor por defecto)
console.log(ciudad);  // "La Paz" (valor por defecto)
```

### Renombrar variables

Puedes asignar nombres diferentes a las variables extraidas:

```javascript
const curso = { titulo: "JavaScript", duracion: 40 };
const { titulo: nombreCurso, duracion: horas } = curso;

console.log(nombreCurso);  // "JavaScript"
console.log(horas);        // 40
```

La sintaxis es: `propiedadOriginal: nuevoNombre`.

### Desestructuracion anidada

Puedes extraer valores de objetos dentro de objetos:

```javascript
const empresa = {
    nombre: "TechBolivia",
    direccion: {
        ciudad: "Santa Cruz",
        pais: "Bolivia"
    }
};

const { nombre: nombreEmpresa, direccion: { ciudad, pais } } = empresa;

console.log(nombreEmpresa);  // "TechBolivia"
console.log(ciudad);         // "Santa Cruz"
console.log(pais);           // "Bolivia"
```

### En parametros de funciones

Puedes desestructurar directamente en los parametros de una funcion:

```javascript
function mostrarEstudiante({ nombre, edad, carrera = "No definida" }) {
    console.log(nombre, edad, carrera);
}

mostrarEstudiante({ nombre: "Juan", edad: 21, carrera: "Sistemas" });
```

## Spread (Propagacion)

### Sintaxis ...

El operador spread usa tres puntos (`...`) para **expandir** los elementos de un array u objeto en lugares donde se esperan multiples valores.

```javascript
const numeros = [1, 2, 3];
console.log(...numeros);  // Imprime: 1 2 3 (expandidos)
```

### En arrays

**Copiar un array:**

```javascript
const original = [1, 2, 3];
const copia = [...original];

copia.push(4);
console.log(original);  // [1, 2, 3] (no afectado)
console.log(copia);     // [1, 2, 3, 4]
```

### En objetos

**Copiar un objeto:**

```javascript
const producto = { id: 1, nombre: "Lapiz", precio: 5 };
const productoCopia = { ...producto };

productoCopia.precio = 7;
console.log(producto.precio);       // 5 (no afectado)
console.log(productoCopia.precio);  // 7
```

### Copia superficial

**IMPORTANTE:** Spread crea una copia superficial (shallow copy). Los objetos o arrays anidados siguen compartiendo la misma referencia:

```javascript
const conAnidado = {
    nombre: "Producto A",
    detalles: { peso: 100 }
};

const copia = { ...conAnidado };

copia.nombre = "Producto B";        // No afecta al original
copia.detalles.peso = 200;          // SI afecta al original!

console.log(conAnidado.detalles.peso);  // 200 (afectado)
console.log(copia.detalles.peso);       // 200
```

### Combinar arrays

```javascript
const lista1 = ["Manzana", "Banana"];
const lista2 = ["Naranja", "Uva"];
const todas = [...lista1, ...lista2];

console.log(todas);  // ["Manzana", "Banana", "Naranja", "Uva"]
```

Puedes agregar elementos en cualquier posicion:

```javascript
const personalizada = ["Pera", ...lista1, "Kiwi", ...lista2];
// ["Pera", "Manzana", "Banana", "Kiwi", "Naranja", "Uva"]
```

### Combinar objetos

```javascript
const configBase = { tema: "claro", idioma: "es" };
const configUsuario = { tema: "oscuro", fuente: "Arial" };
const configFinal = { ...configBase, ...configUsuario };

console.log(configFinal);
// { tema: "oscuro", idioma: "es", fuente: "Arial" }
```

### Sobrescritura de propiedades

Cuando hay propiedades duplicadas, **la ultima gana**:

```javascript
const defaults = { color: "azul", tamano: "mediano" };
const personalizacion = { color: "rojo" };

const resultado = { ...defaults, ...personalizacion };
// { color: "rojo", tamano: "mediano" } - personalizacion gana

const resultado2 = { ...personalizacion, ...defaults };
// { color: "azul", tamano: "mediano" } - defaults gana
```

El orden en que spreadas los objetos determina que propiedades sobreviven.

## Rest (Recopilacion)

Rest es lo **OPUESTO** a spread. Mientras spread **expande**, rest **recopila** elementos en un array u objeto. Usa la misma sintaxis `...` pero con proposito contrario.

### Parametros rest

Permiten que una funcion acepte un numero variable de argumentos:

```javascript
function sumarTodos(...numeros) {
    let total = 0;
    for (let i = 0; i < numeros.length; i++) {
        total += numeros[i];
    }
    return total;
}

sumarTodos(1, 2, 3);       // 6
sumarTodos(10, 20, 30, 40); // 100
```

`numeros` es un array con todos los argumentos pasados.

Puedes combinar parametros normales con rest:

```javascript
function saludar(mensaje, ...nombres) {
    console.log(mensaje);
    for (let i = 0; i < nombres.length; i++) {
        console.log("  -", nombres[i]);
    }
}

saludar("Bienvenidos:", "Carlos", "Maria", "Juan");
```

### En desestructuracion de arrays

Recopila los elementos restantes en un nuevo array:

```javascript
const dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];
const [dia1, dia2, ...resto] = dias;

console.log(dia1);   // "Lunes"
console.log(dia2);   // "Martes"
console.log(resto);  // ["Miercoles", "Jueves", "Viernes"]
```

### En desestructuracion de objetos

Recopila las propiedades restantes en un nuevo objeto:

```javascript
const estudiante = { nombre: "Pedro", edad: 23, carrera: "Ingenieria", ciudad: "Cochabamba" };
const { nombre, edad, ...otrosDatos } = estudiante;

console.log(otrosDatos);  // { carrera: "Ingenieria", ciudad: "Cochabamba" }
```

## Diferencia entre spread y rest

| Caracteristica | Spread (`...array`) | Rest (`...variable`) |
|----------------|---------------------|----------------------|
| **Comportamiento** | Expande | Recopila |
| **Direccion** | Rompe en partes | Junta en un contenedor |
| **Resultado** | Elementos individuales | Array u objeto nuevo |
| **Uso comun** | Copiar, combinar | Parametros variables, separar |
| **Posicion** | Donde quieras expandir | Siempre al final |

```javascript
// SPREAD: expande
const arr = [1, 2, 3];
const copia = [...arr];      // Expande arr en elementos
const combinado = [...arr, 4, 5]; // Expande arr y agrega

// REST: recopila
const [primero, ...resto] = [1, 2, 3, 4]; // Recopila resto
function conArgs(...params) {}             // Recopila argumentos
```

**Regla mnemotecnica:** Spread **rompe**, Rest **junta**.

## Casos practicos

### Actualizar objetos sin mutar

Una forma comun de actualizar objetos sin modificar el original:

```javascript
const estudiante = { nombre: "Sofia", edad: 21, promedio: 88 };

// Actualizar promedio y agregar semestre:
const actualizado = { ...estudiante, promedio: 92, semestre: 5 };

console.log(estudiante);    // Original sin cambios
console.log(actualizado);   // Nuevo objeto con cambios
```

Esto es especialmente util en frameworks como React donde la inmutabilidad es importante.

### Funciones con argumentos variables

Crear funciones flexibles que aceptan cualquier cantidad de argumentos:

```javascript
function calcularPromedio(...notas) {
    if (notas.length === 0) return 0;
    let suma = 0;
    for (let i = 0; i < notas.length; i++) {
        suma += notas[i];
    }
    return suma / notas.length;
}

calcularPromedio(85, 90, 78);       // 84.33
calcularPromedio(100, 95, 88, 92);  // 93.75
calcularPromedio(70);                // 70
```

## Copia superficial vs copia profunda

### Limitacion de spread con objetos anidados

Spread solo copia el primer nivel. Los objetos anidados comparten referencia:

```javascript
const curso = {
    nombre: "Matematicas",
    estudiantes: ["Carlos", "Maria"]
};

const copiaSuperficial = { ...curso };

copiaSuperficial.nombre = "Fisica";          // No afecta al original
copiaSuperficial.estudiantes.push("Juan");   // SI afecta al original!

console.log(curso.estudiantes);
// ["Carlos", "Maria", "Juan"] - AFECTADO!
```

**Para una copia profunda real**, debes copiar manualmente cada nivel anidado:

```javascript
const copiaProfunda = {
    ...curso,
    estudiantes: [...curso.estudiantes]
};

copiaProfunda.estudiantes.push("Ana");

console.log(curso.estudiantes);        // ["Carlos", "Maria", "Juan"] - NO afectado
console.log(copiaProfunda.estudiantes); // ["Carlos", "Maria", "Juan", "Ana"]
```

Para estructuras mas profundas, necesitas copiar cada nivel anidado manualmente, o usar `JSON.parse(JSON.stringify(obj))` como truco (con limitaciones).

## Buenas practicas

1. **Usa `const` por defecto**, `let` solo si necesitas reasignar la variable.

2. **Proporciona valores por defecto** cuando desestructures para evitar `undefined`:
   ```javascript
   const { nombre, edad = 18 } = persona;
   ```

3. **Usa nombres descriptivos** al renombrar:
   ```javascript
   const { precio: precioUnitario } = producto;
   ```

4. **Rest siempre debe ser el ultimo** en desestructuracion y parametros:
   ```javascript
   function ejemplo(a, b, ...resto) {}  // Correcto
   // function error(...resto, ultimo) {} // ERROR!
   ```

5. **Usa spread para crear copias** antes de modificar datos:
   ```javascript
   const copia = [...original]; // Antes de modificar
   ```

6. **Cuidado con la copia superficial.** Si hay objetos anidados, copia manualmente cada nivel.

7. **Desestructura en parametros** para funciones mas limpias:
   ```javascript
   function procesar({ nombre, edad }) {} // Mejor que procesar(obj)
   ```

8. **El orden importa** al combinar objetos con spread. El ultimo objeto gana en propiedades duplicadas.

## Errores comunes

**1. Desestructurar `null` o `undefined`:**
```javascript
const obj = null;
// const { nombre } = obj; // ERROR! TypeError
// Solucion: const { nombre } = obj || {};
```

**2. Confundir spread y rest:**
```javascript
// Spread: expande
const nuevo = [...viejo];

// Rest: recopila
const [primero, ...resto] = array;
```

**3. Creer que spread hace copia profunda:**
```javascript
const copia = { ...original };
// Los objetos anidados siguen compartiendo referencia!
```

**4. Olvidar que el orden importa al combinar objetos:**
```javascript
{ ...defaults, ...overrides }  // overrides gana
{ ...overrides, ...defaults }  // defaults gana
```

**5. Poner rest antes del ultimo parametro:**
```javascript
// function mal(...args, ultimo) {} // ERROR!
function bien(primero, ...resto) {}  // Correcto
```

**6. Intentar desestructurar sin el lado derecho correcto:**
```javascript
// const { a, b } = 42; // No funciona con numeros
const { a, b } = { a: 1, b: 2 }; // Correcto
```

## Ejercicios practicos

1. **Extraer valores de un array:** Dado `calificaciones = [92, 88, 76, 95, 83]`, extrae las tres primeras en variables.

2. **Desestructurar un objeto:** Dado `producto = { id: 42, nombre: "Mochila", precio: 150 }`, extrae id, nombre y precio en variables.

3. **Copiar un array con spread:** Crea una copia del array `estudiantes` y agrega un nuevo estudiante sin modificar el original.

4. **Combinar dos arrays:** Une `listaFrutas` y `listaVerduras` en un solo array usando spread.

5. **Fusionar dos objetos:** Combina `configBase` y `configPersonal` en un solo objeto, dando prioridad a `configPersonal`.

6. **Funcion con rest:** Crea `sumarTodos(...numeros)` que acepte cualquier cantidad de argumentos y retorne la suma.

7. **Renombrar al desestructurar:** Dado un objeto con propiedades cortas (`tel`, `dir`, `cp`), desestructuralas con nombres descriptivos.

8. **Separar con rest:** Extrae `nombre` y `edad` de un objeto estudiante y recopila el resto en `datosAcademicos`.

> Mas ejercicios en [ejercicios.js](./ejercicios.js).

## Reto adicional

Crea una funcion `actualizarEstudiante(estudiante, cambios)` que:

1. Reciba un objeto estudiante (con propiedades como `nombre`, `edad`, `promedio`)
2. Reciba un objeto con las propiedades a actualizar
3. Retorne un **NUEVO** objeto con las propiedades actualizadas sin modificar el original
4. Use spread para lograr la inmutabilidad

```javascript
const estudiante = {
    nombre: "Valeria",
    edad: 21,
    promedio: 87
};

const actualizado = actualizarEstudiante(estudiante, { promedio: 92, semestre: 5 });

console.log(estudiante);   // Original sin cambios
console.log(actualizado);  // Nuevo objeto con promedio: 92 y semestre: 5
```

**Bonus - Demostrar copia superficial vs profunda:**

Crea una funcion `actualizarCursoProfundo(curso, cambios)` que reciba un objeto curso con estudiantes anidados (array) y permita actualizar el nombre del curso Y agregar estudiantes al array sin afectar al original. Demuestra que necesitas copiar manualmente el array de estudiantes para lograr una copia profunda real.

```javascript
const curso = {
    nombre: "Matematicas",
    estudiantes: ["Carlos", "Maria"]
};

const actualizado = actualizarCursoProfundo(curso, {
    nombre: "Fisica",
    nuevosEstudiantes: ["Ana"]
});

// curso.estudiantes debe seguir siendo ["Carlos", "Maria"]
// actualizado.estudiantes debe ser ["Carlos", "Maria", "Ana"]
```

## Resumen

En esta leccion aprendiste tres herramientas fundamentales de JavaScript moderno:

- **Desestructuracion:** Extrae valores de arrays y objetos en variables de forma directa y limpia.
- **Spread (`...`):** Expande elementos para copiar y combinar arrays/objetos. Crea copias superficiales.
- **Rest (`...`):** Recopila elementos restantes en un array u objeto. Ideal para funciones con argumentos variables.

La diferencia clave: **spread expande** (rompe en partes) y **rest recopila** (junta en un contenedor). Ambos usan `...` pero hacen lo opuesto.

Recuerda que spread crea **copias superficiales**, no profundas. Los objetos anidados siguen compartiendo referencia. Para copias profundas, debes copiar manualmente cada nivel anidado.

## Siguiente leccion

En la [Leccion 41 - Fechas](../41-JS-fechas/) aprenderas a trabajar con el objeto `Date` de JavaScript: crear fechas, formatearlas, calcular diferencias entre fechas y manejar zonas horarias.
