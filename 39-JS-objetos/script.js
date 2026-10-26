// ============================================================
// LECCION 39 - OBJETOS
// ============================================================

// ------------------------------------------------------------
// 1. QUE ES UN OBJETO?
// ------------------------------------------------------------

// Un objeto es una coleccion de pares clave-valor que agrupa
// datos relacionados. Las claves son strings (propiedades) y
// los valores pueden ser cualquier tipo de dato.

// Ejemplo: representar un estudiante real
const estudiante = {
    nombre: "Maria",
    edad: 20,
    carrera: "Ingenieria de Sistemas",
    universidad: "UMSA"
};

console.log("--- 1. Que es un objeto? ---");
console.log(estudiante);

// Los objetos nos permiten modelar entidades del mundo real
// agrupando toda su informacion en una sola variable.


// ------------------------------------------------------------
// 2. DIFERENCIA ENTRE ARRAYS Y OBJETOS
// ------------------------------------------------------------

// Arrays: colección ordenada, se accede por índice numérico
const notas = [85, 90, 78, 92, 88];
console.log("--- 2. Diferencia entre arrays y objetos ---");
console.log("Array notas[0]:", notas[0]);

// Objetos: colección con claves descriptivas (propiedades)
const estudianteConNotas = {
    nombre: "Carlos",
    nota1: 85,
    nota2: 90,
    nota3: 78
};
console.log("Objeto estudianteConNotas.nombre:", estudianteConNotas.nombre);
console.log("Objeto estudianteConNotas.nota1:", estudianteConNotas.nota1);

// Arrays: orden importa, acceso por posición (0, 1, 2...)
// Objetos: las propiedades tienen nombre, el orden no es garantizado
// Usa array cuando el orden importa y los datos son homogéneos.
// Usa objeto cuando necesitas describir una entidad con atributos.


// ------------------------------------------------------------
// 3. CREACION CON SINTAXIS LITERAL {}
// ------------------------------------------------------------

// La forma mas comun de crear objetos es con llaves {}
console.log("--- 3. Creacion con sintaxis literal ---");

// Objeto vacio
const objVacio = {};
console.log("Objeto vacio:", objVacio);

// Objeto con propiedades iniciales
const producto = {
    id: 1,
    nombre: "Cuaderno universitario",
    precio: 15.50,
    stock: 200
};
console.log("Producto:", producto);

// Se puede crear en multiples lineas o en una sola
const libro = { titulo: "Don Quijote", autor: "Cervantes", anio: 1605 };
console.log("Libro:", libro);


// ------------------------------------------------------------
// 4. PROPIEDADES (CLAVES)
// ------------------------------------------------------------

// Las propiedades son los nombres (claves) que identifican
// cada valor dentro del objeto.
console.log("--- 4. Propiedades (claves) ---");

const persona = {
    nombre: "Ana",
    apellido: "Torres",
    edad: 22,
    ciudad: "La Paz"
};

// Las propiedades son: nombre, apellido, edad, ciudad
// Cada propiedad es como una "etiqueta" que describe un atributo
console.log("Persona:", persona);


// ------------------------------------------------------------
// 5. VALORES
// ------------------------------------------------------------

// Los valores son los datos asociados a cada propiedad.
// Pueden ser de cualquier tipo: string, number, boolean, array, etc.
console.log("--- 5. Valores ---");

const curso = {
    nombre: "Programacion Web",       // string
    codigo: "INF-101",                // string
    creditos: 4,                       // number
    activo: true,                      // boolean
    estudiantes: ["Luis", "Sofia"],    // array
    profesor: null                     // null
};

console.log("Curso:", curso);
console.log("Tipo de curso.creditos:", typeof curso.creditos);
console.log("Tipo de curso.activo:", typeof curso.activo);


// ------------------------------------------------------------
// 6. PARES CLAVE-VALOR
// ------------------------------------------------------------

// Cada entrada de un objeto es un par clave-valor.
// La clave siempre es un string (o Symbol), el valor puede ser cualquier cosa.
console.log("--- 6. Pares clave-valor ---");

const materia = {
    materia: "Calculo I",
    semestre: "Segundo",
    gestion: 2026,
    paralelo: "B"
};

// Este objeto tiene 4 pares clave-valor:
// "materia" -> "Calculo I"
// "semestre" -> "Segundo"
// "gestion" -> 2026
// "paralelo" -> "B"
console.log(materia);


// ------------------------------------------------------------
// 7. NOTACION DE PUNTO PARA ACCESO
// ------------------------------------------------------------

// La forma mas comun de acceder a una propiedad es con punto:
// objeto.propiedad
console.log("--- 7. Notacion de punto ---");

const alumno = {
    nombre: "Pedro",
    edad: 19,
    carrera: "Medicina",
    promedio: 72
};

console.log(alumno.nombre);
console.log(alumno.edad);
console.log(alumno.carrera);
console.log(alumno.promedio);

// Si la propiedad no existe, devuelve undefined
console.log("Propiedad inexistente:", alumno.telefono);


// ------------------------------------------------------------
// 8. NOTACION DE CORCHETES PARA ACCESO
// ------------------------------------------------------------

// Tambien se puede acceder con corchetes, pasando el nombre
// de la propiedad como string.
console.log("--- 8. Notacion de corchetes ---");

console.log(alumno["nombre"]);
console.log(alumno["edad"]);
console.log(alumno["carrera"]);

// Es util cuando la propiedad tiene caracteres especiales
const config = {
    "api-key": "abc123xyz",
    "max-retries": 3,
    "modo-debug": true
};

console.log(config["api-key"]);
console.log(config["max-retries"]);
// config.api-key daria error por el guion


// ------------------------------------------------------------
// 9. ACCESO DINAMICO CON VARIABLES
// ------------------------------------------------------------

// La notacion de corchetes permite usar variables para
// acceder a propiedades de forma dinamica.
console.log("--- 9. Acceso dinamico ---");

const campo = "nombre";
console.log("Acceso con variable:", alumno[campo]);

const propiedad = "edad";
console.log("Acceso con variable:", alumno[propiedad]);

// Ejemplo practico: funcion que lee cualquier propiedad
function mostrarPropiedad(obj, prop) {
    return obj[prop];
}

console.log(mostrarPropiedad(alumno, "nombre"));
console.log(mostrarPropiedad(alumno, "carrera"));


// ------------------------------------------------------------
// 10. MODIFICAR PROPIEDADES
// ------------------------------------------------------------

// Los objetos son mutables: se pueden cambiar los valores
// de sus propiedades despues de crearlos.
console.log("--- 10. Modificar propiedades ---");

const productoModificable = {
    id: 101,
    nombre: "Borrador",
    precio: 3.00,
    stock: 50
};

console.log("Antes:", productoModificable);

// Modificar precio (aumento por inflacion en Bs.)
productoModificable.precio = 3.50;
console.log("Precio actualizado:", productoModificable.precio);

// Modificar stock
productoModificable.stock = 45;
console.log("Stock actualizado:", productoModificable.stock);
console.log("Despues:", productoModificable);


// ------------------------------------------------------------
// 11. AGREGAR NUEVAS PROPIEDADES
// ------------------------------------------------------------

// Se pueden agregar propiedades nuevas en cualquier momento
// usando notacion de punto o corchetes.
console.log("--- 11. Agregar nuevas propiedades ---");

const estudianteNuevo = {
    nombre: "Lucia",
    edad: 21
};

console.log("Antes de agregar:", estudianteNuevo);

// Agregar con notacion de punto
estudianteNuevo.carrera = "Arquitectura";
estudianteNuevo.universidad = "UMSA";

// Agregar con notacion de corchetes
estudianteNuevo["semestre"] = 5;
estudianteNuevo.promedio = 85;

console.log("Despues de agregar:", estudianteNuevo);


// ------------------------------------------------------------
// 12. ELIMINAR PROPIEDADES CON DELETE
// ------------------------------------------------------------

// El operador delete elimina una propiedad de un objeto.
console.log("--- 12. Eliminar propiedades con delete ---");

const objetoEliminar = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
};

console.log("Antes:", objetoEliminar);

delete objetoEliminar.c;
console.log("Despues de delete c:", objetoEliminar);

// La propiedad eliminada devuelve undefined al accederla
console.log("objetoEliminar.c:", objetoEliminar.c);


// ------------------------------------------------------------
// 13. METODOS DE OBJETOS
// ------------------------------------------------------------

// Un metodo es una funcion que es valor de una propiedad.
// Permite que los objetos tengan comportamientos.
console.log("--- 13. Metodos de objetos ---");

const estudianteConMetodo = {
    nombre: "Jorge",
    edad: 20,
    carrera: "Ing. Civil",

    // Metodo: funcion como valor de propiedad
    presentarse: function() {
        return "Hola, soy " + this.nombre + ", tengo " + this.edad + " anos";
    }
};

console.log(estudianteConMetodo.presentarse());

// Otro ejemplo con un producto
const productoConMetodo = {
    nombre: "Lapiz",
    precio: 2.00,
    cantidad: 100,

    calcularTotal: function(cantidadVenta) {
        return this.precio * cantidadVenta;
    },

    aplicarDescuento: function(porcentaje) {
        const descuento = this.precio * (porcentaje / 100);
        return this.precio - descuento;
    }
};

console.log("Total por 5 lapices: Bs." + productoConMetodo.calcularTotal(5));
console.log("Precio con 10% descuento: Bs." + productoConMetodo.aplicarDescuento(10));


// ------------------------------------------------------------
// 14. USO BASICO DE THIS EN METODOS
// ------------------------------------------------------------

// `this` dentro de un metodo se refiere al objeto que invoca
// el metodo (el objeto antes del punto).
console.log("--- 14. Uso basico de this ---");

const alumnoUMSA = {
    nombre: "Andrea",
    notas: [85, 90, 78, 92],

    // this.se refiere a alumnoUMSA cuando se llama como alumnoUMSA.calcularPromedio()
    calcularPromedio: function() {
        let suma = 0;
        for (let i = 0; i < this.notas.length; i++) {
            suma = suma + this.notas[i];
        }
        return suma / this.notas.length;
    },

    // this se usa para acceder a otras propiedades del mismo objeto
    datos: function() {
        return this.nombre + " - Promedio: " + this.calcularPromedio();
    }
};

console.log("Promedio:", alumnoUMSA.calcularPromedio());
console.log(alumnoUMSA.datos());

// IMPORTANTE: this en arrow functions
// Las arrow functions NO tienen su propio this.
// Heredan el this del contexto donde fueron definidas.
// Por eso NO se deben usar como metodos de objeto.

const objetoArrow = {
    nombre: "Test",
    // Arrow function como metodo - INCORRECTO para acceder a propiedades
    saludarArrow: function() {
        const interno = () => {
            return "Hola, soy " + this.nombre;
        };
        return interno();
    }
};

console.log(objetoArrow.saludarArrow());

// Regla general: para metodos de objeto usa function() tradicional.
// Las arrow functions son utiles para callbacks dentro de metodos,
// pero NO como definicion principal del metodo si necesitas this.


// ------------------------------------------------------------
// 15. OBJETOS ANIDADOS
// ------------------------------------------------------------

// Un objeto puede tener otros objetos como valores de propiedades.
console.log("--- 15. Objetos anidados ---");

const estudianteConDireccion = {
    nombre: "Sofia",
    edad: 22,
    direccion: {
        calle: "Av. 6 de Agosto",
        numero: "2020",
        zona: "Miraflores",
        ciudad: "La Paz"
    }
};

console.log("Estudiante:", estudianteConDireccion);
console.log("Calle:", estudianteConDireccion.direccion.calle);
console.log("Ciudad:", estudianteConDireccion.direccion.ciudad);

// Ejemplo con datos academicos anidados
const alumnoCompleto = {
    nombre: "Roberto",
    carrera: "Ing. de Sistemas",
    inscripcion: {
        anio: 2026,
        semestre: "Segundo",
        materia: "Programacion Web"
    }
};

console.log("Gestion:", alumnoCompleto.inscripcion.anio);
console.log("Materia:", alumnoCompleto.inscripcion.materia);


// ------------------------------------------------------------
// 16. ARRAYS DENTRO DE OBJETOS
// ------------------------------------------------------------

// Un objeto puede contener arrays como valores de propiedades.
console.log("--- 16. Arrays dentro de objetos ---");

const estudianteNotas = {
    nombre: "Claudia",
    carrera: "Economia",
    notas: [75, 88, 92, 65, 80],
    materias: ["Microeconomia", "Macroeconomia", "Estadistica", "Contabilidad", "Matematicas"]
};

console.log("Notas:", estudianteNotas.notas);
console.log("Primera nota:", estudianteNotas.notas[0]);
console.log("Total materias:", estudianteNotas.materias.length);

// Recorrer el array dentro del objeto
for (let i = 0; i < estudianteNotas.notas.length; i++) {
    console.log(estudianteNotas.materias[i] + ": " + estudianteNotas.notas[i]);
}


// ------------------------------------------------------------
// 17. ARRAYS DE OBJETOS
// ------------------------------------------------------------

// Estructura muy comun en aplicaciones reales.
// Un array donde cada elemento es un objeto.
console.log("--- 17. Arrays de objetos ---");

const estudiantes = [
    { nombre: "Luis", edad: 20, carrera: "Ing. Sistemas", promedio: 85 },
    { nombre: "Ana", edad: 21, carrera: "Medicina", promedio: 92 },
    { nombre: "Pedro", edad: 19, carrera: "Derecho", promedio: 78 },
    { nombre: "Sofia", edad: 22, carrera: "Arquitectura", promedio: 88 },
    { nombre: "Carlos", edad: 20, carrera: "Ing. Civil", promedio: 73 }
];

console.log("Total estudiantes:", estudiantes.length);
console.log("Primer estudiante:", estudiantes[0]);
console.log("Nombre del segundo:", estudiantes[1].nombre);

// Recorrer array de objetos
for (let i = 0; i < estudiantes.length; i++) {
    const e = estudiantes[i];
    console.log((i + 1) + ". " + e.nombre + " - " + e.carrera + " (Prom: " + e.promedio + ")");
}

// Filtrar estudiantes con promedio mayor a 80
const mejores = [];
for (let i = 0; i < estudiantes.length; i++) {
    if (estudiantes[i].promedio > 80) {
        mejores.push(estudiantes[i].nombre);
    }
}
console.log("Estudiantes con promedio > 80:", mejores);

// Buscar un estudiante por nombre
function buscarEstudiante(lista, nombreBuscar) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].nombre === nombreBuscar) {
            return lista[i];
        }
    }
    return null;
}

const encontrado = buscarEstudiante(estudiantes, "Ana");
console.log("Estudiante encontrado:", encontrado);


// ------------------------------------------------------------
// 18. OPERADOR IN - VERIFICAR PROPIEDAD
// ------------------------------------------------------------

// El operador `in` verifica si una propiedad existe en un objeto.
console.log("--- 18. Operador in ---");

const productoVerificar = {
    id: 1,
    nombre: "Goma",
    precio: 2.50
};

console.log("nombre" in productoVerificar);       // true
console.log("precio" in productoVerificar);        // true
console.log("stock" in productoVerificar);         // false
console.log("toString" in productoVerificar);      // true (heredado)

// Ejemplo practico: funcion que verifica propiedades
function mostrarPrecio(prod) {
    if ("precio" in prod) {
        return "Precio: Bs." + prod.precio;
    }
    return "El producto no tiene precio definido";
}

console.log(mostrarPrecio(productoVerificar));
console.log(mostrarPrecio({ nombre: "Test" }));


// ------------------------------------------------------------
// 19. OBJECT.KEYS() - OBTENER TODAS LAS CLAVES
// ------------------------------------------------------------

// Object.keys() devuelve un array con todas las claves (propiedades).
console.log("--- 19. Object.keys() ---");

const objetoClaves = {
    nombre: "Miguel",
    edad: 23,
    ciudad: "Cochabamba",
    carrera: "Ing. Alimentos"
};

const claves = Object.keys(objetoClaves);
console.log("Claves:", claves);
console.log("Cantidad de propiedades:", claves.length);

// Recorrer claves
for (let i = 0; i < claves.length; i++) {
    const clave = claves[i];
    console.log(clave + ": " + objetoClaves[clave]);
}


// ------------------------------------------------------------
// 20. OBJECT.VALUES() - OBTENER TODOS LOS VALORES
// ------------------------------------------------------------

// Object.values() devuelve un array con todos los valores.
console.log("--- 20. Object.values() ---");

const calificaciones = {
    matematicas: 85,
    fisica: 78,
    quimica: 90,
    biologia: 82
};

const valores = Object.values(calificaciones);
console.log("Valores:", valores);

// Calcular promedio de calificaciones
let sumaCal = 0;
for (let i = 0; i < valores.length; i++) {
    sumaCal = sumaCal + valores[i];
}
console.log("Promedio:", sumaCal / valores.length);


// ------------------------------------------------------------
// 21. OBJECT.ENTRIES() - OBTENER PARES CLAVE-VALOR
// ------------------------------------------------------------

// Object.entries() devuelve un array de arrays [clave, valor].
console.log("--- 21. Object.entries() ---");

const inventario = {
    cuadernos: 150,
    lapices: 300,
    gomas: 200,
    reglas: 100
};

const entradas = Object.entries(inventario);
console.log("Entradas:", entradas);

// Recorrer con destructuring basico (se vera en leccion 40)
for (let i = 0; i < entradas.length; i++) {
    const productoNombre = entradas[i][0];
    const cantidad = entradas[i][1];
    console.log(productoNombre + ": " + cantidad + " unidades");
}


// ------------------------------------------------------------
// 22. OBJECT.HASOWN() - VERIFICAR PROPIEDAD PROPIA
// ------------------------------------------------------------

// Object.hasOwn() es la forma moderna de verificar si una propiedad
// pertenece directamente al objeto (no heredada).
console.log("--- 22. Object.hasOwn() ---");

const objetoTest = {
    nombre: "Test",
    edad: 20
};

console.log(Object.hasOwn(objetoTest, "nombre"));    // true
console.log(Object.hasOwn(objetoTest, "edad"));       // true
console.log(Object.hasOwn(objetoTest, "toString"));   // false (heredada)
console.log(Object.hasOwn(objetoTest, "telefono"));   // false

// Diferencia con `in`:
// `in` busca en el objeto y su cadena de prototipos
// `Object.hasOwn()` solo busca en el objeto directamente
console.log("toString" in objetoTest);                 // true (heredada)
console.log(Object.hasOwn(objetoTest, "toString"));    // false (no es propia)


// ------------------------------------------------------------
// 23. ITERACION CON FOR...IN
// ------------------------------------------------------------

// for...in recorre todas las propiedades enumerables de un objeto.
console.log("--- 23. Iteracion con for...in ---");

const datosPersonales = {
    nombre: "Valeria",
    edad: 21,
    ciudad: "Sucre",
    carrera: "Biologia"
};

for (const propiedad in datosPersonales) {
    console.log(propiedad + ": " + datosPersonales[propiedad]);
}

// IMPORTANTE: for...in tambien recorre propiedades heredadas.
// Para filtrar solo las propias, usar Object.hasOwn():
console.log("\nSolo propiedades propias:");
for (const prop in datosPersonales) {
    if (Object.hasOwn(datosPersonales, prop)) {
        console.log(prop + ": " + datosPersonales[prop]);
    }
}


// ------------------------------------------------------------
// 24. COPIAS SUPERFICIALES DE OBJETOS
// ------------------------------------------------------------

// Copiar objetos con Object.assign() o spread operator {...}
console.log("--- 24. Copias superficiales ---");

const original = {
    nombre: "Original",
    valor: 100
};

// Copia con Object.assign()
const copia1 = Object.assign({}, original);
console.log("Copia con Object.assign:", copia1);

// Copia con spread operator {...}
const copia2 = { ...original };
console.log("Copia con spread:", copia2);

// Modificar la copia no afecta al original (propiedades simples)
copia2.nombre = "Modificado";
copia2.valor = 999;
console.log("Original despues:", original);
console.log("Copia despues:", copia2);

// COPIA SUPERFICIAL: si hay objetos anidados, solo se copia la referencia
const originalAnidado = {
    nombre: "Original",
    datos: {
        edad: 20,
        ciudad: "La Paz"
    }
};

const copiaSuperficial = { ...originalAnidado };
copiaSuperficial.nombre = "Modificado";
copiaSuperficial.datos.edad = 99; // Modifica el original tambian!

console.log("Original datos.edad:", originalAnidado.datos.edad);  // 99
console.log("Copia datos.edad:", copiaSuperficial.datos.edad);    // 99
// Ambos apuntan al mismo objeto anidado


// ------------------------------------------------------------
// 25. REFERENCIAS Y MUTABILIDAD
// ------------------------------------------------------------

// Los objetos se pasan por referencia, no por valor.
// Dos variables pueden apuntar al mismo objeto.
console.log("--- 25. Referencias y mutabilidad ---");

const obj1 = { nombre: "Objeto 1", valor: 10 };
const obj2 = obj1; // obj2 apunta al MISMO objeto en memoria

console.log("Antes:", obj1);

obj2.valor = 999;
console.log("Despues de modificar obj2:");
console.log("obj1:", obj1); // Tambien cambia!
console.log("obj2:", obj2);

// Esto es importante en funciones:
function modificarPrecio(prod) {
    prod.precio = prod.precio * 1.1; // Modifica el objeto original!
}

const miProducto = { nombre: "Producto A", precio: 100 };
modificarPrecio(miProducto);
console.log("Precio despues de funcion:", miProducto.precio); // 110

// Para evitar esto, pasar una copia:
const miProducto2 = { nombre: "Producto B", precio: 100 };
const copiaProd = { ...miProducto2 };
copiaProd.precio = copiaProd.precio * 1.1;
console.log("Original sin cambio:", miProducto2.precio);     // 100
console.log("Copia modificada:", copiaProd.precio);          // 110


// ------------------------------------------------------------
// 26. ENCADENAMIENTO OPCIONAL ?.
// ------------------------------------------------------------

// ?. permite acceder a propiedades anidadas sin error si
// una propiedad intermedia es undefined o null.
console.log("--- 26. Encadenamiento opcional ?. ---");

const estudianteConDireccion2 = {
    nombre: "Fernando",
    direccion: {
        calle: "Av. America",
        ciudad: "Cochabamba"
    }
};

// Sin ?. - daria error si direccion no existe
console.log(estudianteConDireccion2.direccion?.calle);  // "Av. America"

// Estudiante sin direccion
const estudianteSinDireccion = {
    nombre: "Gabriela"
};

// Sin ?. daria error: Cannot read property "calle" of undefined
// Con ?. devuelve undefined sin error
console.log("Sin direccion, calle:", estudianteSinDireccion.direccion?.calle);
console.log("Sin direccion, ciudad:", estudianteSinDireccion.direccion?.ciudad);

// Ejemplo con array de objetos con estructura irregular
const personas = [
    { nombre: "Juan", contacto: { telefono: "77712345" } },
    { nombre: "Maria", contacto: { email: "maria@email.com" } },
    { nombre: "Pedro" }
];

for (let i = 0; i < personas.length; i++) {
    const p = personas[i];
    console.log(p.nombre + " - Tel:", p.contacto?.telefono ?? "No disponible");
    console.log(p.nombre + " - Email:", p.contacto?.email ?? "No disponible");
}


// ------------------------------------------------------------
// 27. BUENAS PRACTICAS
// ------------------------------------------------------------

console.log("--- 27. Buenas practicas ---");

// 1. Usa const para objetos, let solo si reasignas la variable
const estudianteBuenasPracticas = { nombre: "Test", edad: 20 };
// const no impide modificar propiedades, solo impide reasignar la variable
estudianteBuenasPracticas.edad = 21; // Esto SI funciona
// estudianteBuenasPracticas = {};   // Esto NO funciona con const

// 2. Usa nombres descriptivos para propiedades
const productoBien = {
    nombreCompleto: "Cuaderno 100 hojas",
    precioUnitario: 15.50,
    cantidadEnStock: 200
};

// 3. Agrupa datos relacionados en objetos
const orden = {
    id: "ORD-001",
    cliente: "Luis Mamani",
    productos: ["Cuaderno", "Lapiz", "Goma"],
    total: 25.50,
    estado: "pendiente"
};

// 4. Usa metodos para comportamientos relacionados al objeto
const cuentaBancaria = {
    titular: "Ana Torres",
    saldo: 1000,
    depositar: function(monto) {
        this.saldo = this.saldo + monto;
        return "Deposito realizado. Saldo: Bs." + this.saldo;
    },
    retirar: function(monto) {
        if (monto > this.saldo) {
            return "Saldo insuficiente";
        }
        this.saldo = this.saldo - monto;
        return "Retiro realizado. Saldo: Bs." + this.saldo;
    }
};

console.log(cuentaBancaria.depositar(500));
console.log(cuentaBancaria.retirar(200));

// 5. Usa Object.hasOwn() en vez de hasOwnProperty()
console.log(Object.hasOwn(cuentaBancaria, "saldo")); // true

// 6. Usa encadenamiento opcional para datos anidados inciertos
console.log(orden.cliente?.nombre ?? "Sin nombre");

console.log("\n=== FIN DE LA LECCION 39 ===");
