# Leccion 39 - Objetos

## Objetivo de aprendizaje

Al finalizar esta leccion, seras capaz de:
- Crear y manipular objetos en JavaScript
- Acceder, modificar, agregar y eliminar propiedades
- Crear metodos y comprender el uso de `this`
- Trabajar con objetos anidados, arrays de objetos y copias
- Iterar propiedades y usar metodos estaticos de Object
- Aplicar objetos para modelar entidades del mundo real

## Conocimientos previos

Antes de comenzar, deberias tener conocimientos de:
- Variables (`const`, `let`) y tipos de datos (leccion 25)
- Operadores y expresiones (leccion 26)
- Estructuras de control: `if`, `switch` (leccion 27-28)
- Bucles: `for`, `while` (leccion 29)
- Funciones y parametros (leccion 30-31)
- Arrays y sus metodos (leccion 32-34)
- Scope y funciones avanzadas (leccion 35-36)
- Callbacks y funciones de orden superior (leccion 37)
- Closures y metodos de array (leccion 38)

## Introduccion

Hasta ahora hemos trabajado con variables individuales y arrays para organizar datos. Pero en el mundo real, las cosas son mas complejas: un estudiante tiene nombre, edad, carrera y notas; un producto tiene id, precio y stock. Los **objetos** nos permiten agrupar toda esta informacion relacionada en una sola estructura, modelando entidades del mundo real de forma mas natural y organizada.

## Que es un objeto?

Un objeto es una **coleccion de pares clave-valor** que agrupa datos relacionados. Las claves (tambien llamadas propiedades) son strings que identifican cada dato, y los valores pueden ser de cualquier tipo: numeros, strings, booleanos, arrays, otros objetos o funciones.

```javascript
const estudiante = {
    nombre: "Maria",
    edad: 20,
    carrera: "Ingenieria de Sistemas",
    universidad: "UMSA"
};
```

Piensa en un objeto como una ficha de registro: cada campo (nombre, edad, carrera) es una propiedad, y el dato asociado es el valor.

## Diferencia entre arrays y objetos

| Caracteristica | Arrays | Objetos |
|----------------|--------|---------|
| Organizacion | Ordenada (indice numerico) | Por claves descriptivas |
| Acceso | `arr[0]`, `arr[1]` | `obj.nombre`, `obj["precio"]` |
| Uso ideal | Listas ordenadas, datos homogeneos | Entidades con atributos |
| Orden | Garantizado | No garantizado |
| Metodo comun | `arr.push()`, `arr.map()` | `obj.propiedad`, metodos |

```javascript
// Array: lista de notas ordenadas
const notas = [85, 90, 78];
console.log(notas[0]); // 85 (primera nota)

// Objeto: descripcion de un estudiante
const estudiante = {
    nombre: "Carlos",
    nota1: 85,
    nota2: 90
};
console.log(estudiante.nombre); // "Carlos" (nombre descriptivo)
```

## Creacion de objetos

La forma mas comun de crear objetos es con **sintaxis literal** usando llaves `{}`:

```javascript
// Objeto vacio
const objVacio = {};

// Objeto con propiedades
const producto = {
    id: 1,
    nombre: "Cuaderno universitario",
    precio: 15.50,
    stock: 200
};

// Objeto en una sola linea
const libro = { titulo: "Don Quijote", autor: "Cervantes", anio: 1605 };
```

## Acceso a propiedades

### Notacion de punto

La forma mas comun y legible:

```javascript
const alumno = {
    nombre: "Pedro",
    edad: 19,
    carrera: "Medicina"
};

console.log(alumno.nombre);  // "Pedro"
console.log(alumno.edad);    // 19
console.log(alumno.carrera); // "Medicina"
```

Si la propiedad no existe, devuelve `undefined`:

```javascript
console.log(alumno.telefono); // undefined
```

### Notacion de corchetes

Util cuando el nombre de la propiedad tiene caracteres especiales:

```javascript
const config = {
    "api-key": "abc123",
    "max-retries": 3
};

console.log(config["api-key"]);      // "abc123"
console.log(config["max-retries"]);  // 3
// config.api-key daria error por el guion
```

### Acceso dinamico

Con corchetes puedes usar variables para acceder a propiedades:

```javascript
const campo = "nombre";
console.log(alumno[campo]); // "Pedro"

function mostrarPropiedad(obj, prop) {
    return obj[prop];
}

console.log(mostrarPropiedad(alumno, "edad")); // 19
```

## Modificacion de propiedades

### Modificar valores

Los objetos son **mutables**: puedes cambiar los valores despues de crearlos:

```javascript
const producto = {
    nombre: "Borrador",
    precio: 3.00,
    stock: 50
};

producto.precio = 3.50;  // Aumentar precio
producto.stock = 45;     // Reducir stock
```

### Agregar propiedades

Puedes agregar nuevas propiedades en cualquier momento:

```javascript
const estudiante = {
    nombre: "Lucia",
    edad: 21
};

estudiante.carrera = "Arquitectura";
estudiante["universidad"] = "UMSA";
```

### Eliminar propiedades

Usa el operador `delete` para eliminar una propiedad:

```javascript
const obj = { a: 1, b: 2, c: 3 };

delete obj.c;
console.log(obj); // { a: 1, b: 2 }
console.log(obj.c); // undefined
```

## Metodos de objetos

### Funciones como valores

Un **metodo** es una funcion que es valor de una propiedad. Permite que los objetos tengan comportamientos:

```javascript
const estudiante = {
    nombre: "Jorge",
    edad: 20,

    // Metodo: funcion como valor de propiedad
    presentarse: function() {
        return "Hola, soy " + this.nombre + ", tengo " + this.edad + " anos";
    }
};

console.log(estudiante.presentarse()); // "Hola, soy Jorge, tengo 20 anos"
```

### Uso basico de this

`this` dentro de un metodo se refiere al **objeto que invoca el metodo** (el objeto antes del punto):

```javascript
const alumnoUMSA = {
    nombre: "Andrea",
    notas: [85, 90, 78, 92],

    calcularPromedio: function() {
        let suma = 0;
        for (let i = 0; i < this.notas.length; i++) {
            suma = suma + this.notas[i];
        }
        return suma / this.notas.length;
    }
};

console.log(alumnoUMSA.calcularPromedio()); // 86.25
```

**IMPORTANTE sobre arrow functions y this:**

Las **arrow functions NO tienen su propio `this`**. Heredan el `this` del contexto donde fueron definidas. Por eso **NO se deben usar como metodos de objeto** si necesitas acceder a propiedades del objeto:

```javascript
// INCORRECTO: arrow function como metodo
const objetoIncorrecto = {
    nombre: "Test",
    saludar: () => {
        return "Hola, soy " + this.nombre; // this NO es objetoIncorrecto
    }
};

// CORRECTO: funcion tradicional como metodo
const objetoCorrecto = {
    nombre: "Test",
    saludar: function() {
        return "Hola, soy " + this.nombre; // this SI es objetoCorrecto
    }
};
```

**Regla general:** Para metodos de objeto usa `function()`. Las arrow functions son utiles para callbacks **dentro** de metodos, pero no como definicion principal del metodo si necesitas `this`.

## Objetos anidados

Un objeto puede tener otros objetos como valores de propiedades:

```javascript
const estudiante = {
    nombre: "Sofia",
    edad: 22,
    direccion: {
        calle: "Av. 6 de Agosto",
        numero: "2020",
        zona: "Miraflores",
        ciudad: "La Paz"
    }
};

console.log(estudiante.direccion.calle);  // "Av. 6 de Agosto"
console.log(estudiante.direccion.ciudad); // "La Paz"
```

## Arrays dentro de objetos

Un objeto puede contener arrays como valores:

```javascript
const estudiante = {
    nombre: "Claudia",
    carrera: "Economia",
    notas: [75, 88, 92, 65, 80],
    materias: ["Microeconomia", "Macroeconomia", "Estadistica"]
};

console.log(estudiante.notas[0]);        // 75
console.log(estudiante.materias.length); // 3
```

## Arrays de objetos

### Estructura comun en aplicaciones

Un array donde cada elemento es un objeto. Es una de las estructuras de datos mas usadas en aplicaciones reales:

```javascript
const estudiantes = [
    { nombre: "Luis", edad: 20, carrera: "Ing. Sistemas", promedio: 85 },
    { nombre: "Ana", edad: 21, carrera: "Medicina", promedio: 92 },
    { nombre: "Pedro", edad: 19, carrera: "Derecho", promedio: 78 }
];

console.log(estudiantes.length);        // 3
console.log(estudiantes[0].nombre);     // "Luis"
```

### Recorrer arrays de objetos

```javascript
for (let i = 0; i < estudiantes.length; i++) {
    const e = estudiantes[i];
    console.log(e.nombre + " - " + e.carrera + " (Prom: " + e.promedio + ")");
}

// Filtrar estudiantes con promedio > 80
const mejores = [];
for (let i = 0; i < estudiantes.length; i++) {
    if (estudiantes[i].promedio > 80) {
        mejores.push(estudiantes[i].nombre);
    }
}
```

## Verificacion de propiedades

### Operador in

El operador `in` verifica si una propiedad existe en un objeto (incluyendo propiedades heredadas):

```javascript
const producto = {
    id: 1,
    nombre: "Goma",
    precio: 2.50
};

console.log("nombre" in producto);   // true
console.log("stock" in producto);    // false
console.log("toString" in producto); // true (heredada de Object.prototype)
```

### Object.hasOwn()

`Object.hasOwn()` es la forma moderna de verificar si una propiedad **pertenece directamente** al objeto (no heredada):

```javascript
console.log(Object.hasOwn(producto, "nombre"));    // true
console.log(Object.hasOwn(producto, "toString"));  // false (heredada)

// Diferencia con `in`:
console.log("toString" in producto);                 // true (heredada)
console.log(Object.hasOwn(producto, "toString"));    // false (no es propia)
```

## Metodos estaticos de Object

### Object.keys()

Devuelve un array con todas las claves (propiedades) del objeto:

```javascript
const estudiante = {
    nombre: "Miguel",
    edad: 23,
    ciudad: "Cochabamba"
};

const claves = Object.keys(estudiante);
console.log(claves); // ["nombre", "edad", "ciudad"]
console.log(claves.length); // 3
```

### Object.values()

Devuelve un array con todos los valores:

```javascript
const calificaciones = {
    matematicas: 85,
    fisica: 78,
    quimica: 90
};

const valores = Object.values(calificaciones);
console.log(valores); // [85, 78, 90]
```

### Object.entries()

Devuelve un array de arrays `[clave, valor]`:

```javascript
const inventario = {
    cuadernos: 150,
    lapices: 300,
    gomas: 200
};

const entradas = Object.entries(inventario);
console.log(entradas);
// [["cuadernos", 150], ["lapices", 300], ["gomas", 200]]

for (let i = 0; i < entradas.length; i++) {
    console.log(entradas[i][0] + ": " + entradas[i][1]);
}
```

## Iteracion con for...in

`for...in` recorre todas las propiedades enumerables de un objeto:

```javascript
const datos = {
    nombre: "Valeria",
    edad: 21,
    ciudad: "Sucre"
};

for (const propiedad in datos) {
    console.log(propiedad + ": " + datos[propiedad]);
}
// nombre: Valeria
// edad: 21
// ciudad: Sucre
```

**Importante:** `for...in` tambien recorre propiedades heredadas. Para filtrar solo las propias, usa `Object.hasOwn()`:

```javascript
for (const prop in datos) {
    if (Object.hasOwn(datos, prop)) {
        console.log(prop + ": " + datos[prop]);
    }
}
```

## Copias y referencias

### Copia superficial

Puedes copiar objetos con `Object.assign()` o spread operator `{...}`:

```javascript
const original = { nombre: "Original", valor: 100 };

// Con Object.assign()
const copia1 = Object.assign({}, original);

// Con spread operator
const copia2 = { ...original };

copia2.nombre = "Modificado";
console.log(original.nombre); // "Original" (no cambia)
console.log(copia2.nombre);   // "Modificado"
```

**COPIA SUPERFICIAL:** Si hay objetos anidados, solo se copia la referencia:

```javascript
const original = {
    nombre: "Original",
    datos: { edad: 20, ciudad: "La Paz" }
};

const copia = { ...original };
copia.nombre = "Modificado";
copia.datos.edad = 99; // Tambien modifica el original!

console.log(original.datos.edad); // 99
console.log(copia.datos.edad);    // 99
```

### Referencias y mutabilidad

Los objetos se pasan por **referencia**, no por valor:

```javascript
const obj1 = { nombre: "Objeto 1", valor: 10 };
const obj2 = obj1; // obj2 apunta al MISMO objeto

obj2.valor = 999;
console.log(obj1.valor); // 999 (tambien cambio!)
```

Esto es importante en funciones:

```javascript
function modificarPrecio(prod) {
    prod.precio = prod.precio * 1.1; // Modifica el objeto original
}

const miProducto = { nombre: "Producto A", precio: 100 };
modificarPrecio(miProducto);
console.log(miProducto.precio); // 110
```

Para evitar esto, pasa una copia:

```javascript
const miProducto2 = { nombre: "Producto B", precio: 100 };
const copia = { ...miProducto2 };
copia.precio = copia.precio * 1.1;
console.log(miProducto2.precio); // 100 (sin cambio)
console.log(copia.precio);       // 110
```

## Encadenamiento opcional

El operador `?.` permite acceder a propiedades anidadas sin error si una propiedad intermedia es `undefined` o `null`:

```javascript
const estudiante = {
    nombre: "Fernando",
    direccion: {
        calle: "Av. America",
        ciudad: "Cochabamba"
    }
};

console.log(estudiante.direccion?.calle); // "Av. America"

// Estudiante sin direccion
const estudianteSinDireccion = { nombre: "Gabriela" };

// Sin ?. daria error
// Con ?. devuelve undefined sin error
console.log(estudianteSinDireccion.direccion?.calle); // undefined
```

## Buenas practicas

1. **Usa `const` para objetos**, `let` solo si reasignas la variable:
```javascript
const estudiante = { nombre: "Test", edad: 20 };
estudiante.edad = 21; // Esto SI funciona
// estudiante = {};   // Esto NO funciona con const
```

2. **Usa nombres descriptivos** para propiedades:
```javascript
const producto = {
    nombreCompleto: "Cuaderno 100 hojas",
    precioUnitario: 15.50,
    cantidadEnStock: 200
};
```

3. **Agrupa datos relacionados** en objetos:
```javascript
const orden = {
    id: "ORD-001",
    cliente: "Luis Mamani",
    productos: ["Cuaderno", "Lapiz"],
    total: 25.50,
    estado: "pendiente"
};
```

4. **Usa metodos** para comportamientos relacionados al objeto:
```javascript
const cuenta = {
    saldo: 1000,
    depositar: function(monto) {
        this.saldo += monto;
    }
};
```

5. **Usa `Object.hasOwn()`** en vez de `hasOwnProperty()`:
```javascript
console.log(Object.hasOwn(cuenta, "saldo")); // true
```

6. **Usa encadenamiento opcional** para datos anidados inciertos:
```javascript
console.log(orden.cliente?.nombre ?? "Sin nombre");
```

## Errores comunes

1. **Intentar acceder a propiedades de undefined:**
```javascript
const estudiante = {};
console.log(estudiante.direccion.calle); // ERROR!
// Solucion: usa ?.
console.log(estudiante.direccion?.calle); // undefined
```

2. **Usar arrow functions como metodos con this:**
```javascript
const obj = {
    nombre: "Test",
    saludar: () => {
        return "Hola " + this.nombre; // this NO es obj
    }
};
// Solucion: usa function()
```

3. **Olvidar que los objetos son mutables:**
```javascript
const obj1 = { valor: 10 };
const obj2 = obj1;
obj2.valor = 999;
console.log(obj1.valor); // 999 (cambio!)
```

4. **Confundir `in` con `Object.hasOwn()`:**
```javascript
const obj = { nombre: "Test" };
console.log("toString" in obj);               // true (heredada)
console.log(Object.hasOwn(obj, "toString"));  // false (no es propia)
```

## Ejercicios practicos

1. **Crear un objeto estudiante** con nombre, edad, carrera y array de notas
2. **Crear un objeto producto** con id, nombre, precio y stock
3. **Modificar propiedades** de un objeto existente
4. **Agregar nuevas propiedades** a un objeto
5. **Iterar propiedades** con for...in y metodos de Object
6. **Crear un metodo** que calcule el promedio de notas
7. **Crear un array de objetos** con 3 productos
8. **Buscar objetos** en un array por propiedad

Consulta el archivo `ejercicios.js` para los enunciados completos.

## Reto adicional

Crea un **sistema de inventario simple** usando arrays de objetos y funciones. El sistema debe:

- **Registrar productos:** funcion que agrega un producto al inventario
- **Consultar productos:** funcion que busca un producto por nombre
- **Actualizar cantidades:** funcion que actualiza el stock de un producto por su id
- **Calcular valor total:** funcion que calcula el valor total del inventario (precio * stock de cada producto)
- **Buscar productos:** funcion que busca productos por nombre parcial

**Restricciones:**
- Solo usa funciones y arrays de objetos
- No uses DOM ni almacenamiento persistente
- Cada producto debe tener: id, nombre, precio, stock

```javascript
// Ejemplo de uso esperado:
const miInventario = [];
registrarProducto(miInventario, { id: 1, nombre: "Cuaderno", precio: 15, stock: 100 });
registrarProducto(miInventario, { id: 2, nombre: "Lapiz", precio: 3, stock: 500 });
buscarProductoPorNombre(miInventario, "Cuaderno"); // Devuelve el objeto
actualizarStock(miInventario, 1, 80); // Stock de cuaderno ahora es 80
calcularValorTotal(miInventario); // (15*80) + (3*500) = 2700
listarProductos(miInventario); // Muestra todos los productos
```

## Resumen

En esta leccion aprendiste:
- Que son los objetos y como diferencian de los arrays
- Crear objetos con sintaxis literal `{}`
- Acceder a propiedades con notacion de punto y corchetes
- Modificar, agregar y eliminar propiedades
- Crear metodos y usar `this` en metodos
- Trabajar con objetos anidados y arrays de objetos
- Verificar propiedades con `in` y `Object.hasOwn()`
- Usar `Object.keys()`, `Object.values()`, `Object.entries()`
- Iterar con `for...in`
- Copiar objetos (superficial) y entender referencias
- Usar encadenamiento opcional `?.`

Los objetos son fundamentales en JavaScript y te permiten modelar entidades del mundo real de forma organizada. En la proxima leccion veras **desestructuracion, spread y rest**, que son operaciones avanzadas con objetos y arrays.

## Siguiente leccion

**Leccion 40 - Desestructuracion, spread y rest**

Aprenderas tecnicas modernas para extraer valores de objetos y arrays (desestructuracion), copiar y combinar objetos/arrays (spread `...`), y trabajar con funciones que aceptan un numero variable de argumentos (rest `...`).
