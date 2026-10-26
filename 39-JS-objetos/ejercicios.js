// ============================================================
// EJERCICIOS - LECCION 39 - OBJETOS
// ============================================================
// Resuelve cada ejercicio en este archivo.
// NO mires las soluciones hasta haber intentado resolverlos.
// ============================================================

// ------------------------------------------------------------
// EJERCICIO 1: Crear un objeto estudiante
// ------------------------------------------------------------
// Enunciado:
// Crea un objeto llamado "estudiante" que tenga las siguientes propiedades:
// - nombre (string): nombre del estudiante
// - edad (number): edad del estudiante
// - carrera (string): carrera que estudia
// - notas (array): array con 4 calificaciones numericas
//
// Datos de ejemplo:
//   nombre: "Valeria"
//   edad: 21
//   carrera: "Ing. de Sistemas"
//   notas: [85, 90, 78, 92]
//
// Resultado esperado:
//   console.log(estudiante) debe mostrar el objeto completo
//   console.log(estudiante.notas[0]) debe mostrar 85
//
// Conceptos usados: creacion de objetos, arrays dentro de objetos

// Tu codigo aqui:


// ------------------------------------------------------------
// EJERCICIO 2: Crear un objeto producto
// ------------------------------------------------------------
// Enunciado:
// Crea un objeto llamado "producto" que represente un producto
// de la tienda universitaria. Debe tener las siguientes propiedades:
// - id (number): identificador unico
// - nombre (string): nombre del producto
// - precio (number): precio en Bs.
// - stock (number): cantidad disponible en inventario
//
// Datos de ejemplo:
//   id: 101
//   nombre: "Cuaderno universitario 100 hojas"
//   precio: 15.50
//   stock: 200
//
// Resultado esperado:
//   console.log(producto) debe mostrar el objeto completo
//   console.log(producto.precio) debe mostrar 15.50
//
// Conceptos usados: creacion de objetos, propiedades, valores

// Tu codigo aqui:


// ------------------------------------------------------------
// EJERCICIO 3: Modificar propiedades de un objeto
// ------------------------------------------------------------
// Enunciado:
// Dado el siguiente objeto producto, realiza las siguientes operaciones:
// 1. Modifica el precio a 18.00 Bs.
// 2. Reduce el stock en 50 unidades
// 3. Agrega una nueva propiedad llamada "categoria" con valor "Papeleria"
// 4. Agrega una nueva propiedad llamada "descuento" con valor 10
//
// Datos de ejemplo:
const productoEjercicio3 = {
    id: 201,
    nombre: "Mochila escolar",
    precio: 150.00,
    stock: 75
};
//
// Resultado esperado:
//   productoEjercicio3.precio debe ser 18.00 (despues de modificar)
//   productoEjercicio3.stock debe ser 25 (despues de reducir)
//   productoEjercicio3.categoria debe ser "Papeleria"
//   productoEjercicio3.descuento debe ser 10
//
// Conceptos usados: modificacion de propiedades, agregar propiedades

// Tu codigo aqui:


// ------------------------------------------------------------
// EJERCICIO 4: Agregar nuevas propiedades a un objeto
// ------------------------------------------------------------
// Enunciado:
// Dado el siguiente objeto estudiante, agrega las siguientes propiedades:
// 1. email (string): "estudiante@umsa.bo"
// 2. telefono (string): "77712345"
// 3. direccion (objeto): { ciudad: "La Paz", zona: "Miraflores" }
// 4. activo (boolean): true
//
// Datos de ejemplo:
const estudianteEjercicio4 = {
    nombre: "Carlos",
    edad: 20,
    carrera: "Medicina"
};
//
// Resultado esperado:
//   estudianteEjercicio4 debe tener 7 propiedades en total
//   console.log(estudianteEjercicio4.direccion.ciudad) debe mostrar "La Paz"
//   Object.keys(estudianteEjercicio4).length debe ser 7
//
// Conceptos usados: agregar propiedades, objetos anidados

// Tu codigo aqui:


// ------------------------------------------------------------
// EJERCICIO 5: Iterar propiedades de un objeto
// ------------------------------------------------------------
// Enunciado:
// Dado el siguiente objeto, usa for...in para recorrer todas sus propiedades
// e imprimir cada par clave-valor en formato: "clave: valor"
// Luego, usa Object.keys(), Object.values() y Object.entries() para
// mostrar la misma informacion de diferentes formas.
//
// Datos de ejemplo:
const calificacionesEjercicio5 = {
    matematicas: 85,
    fisica: 78,
    quimica: 90,
    biologia: 82,
    programacion: 95
};
//
// Resultado esperado:
//   for...in debe imprimir:
//     matematicas: 85
//     fisica: 78
//     quimica: 90
//     biologia: 82
//     programacion: 95
//   Object.keys() debe devolver un array con 5 elementos
//   Object.values() debe devolver un array con 5 numeros
//   Object.entries() debe devolver un array de 5 pares [clave, valor]
//
// Conceptos usados: for...in, Object.keys(), Object.values(), Object.entries()

// Tu codigo aqui:


// ------------------------------------------------------------
// EJERCICIO 6: Crear un metodo en un objeto
// ------------------------------------------------------------
// Enunciado:
// Crea un objeto llamado "cuentaBancaria" con las siguientes propiedades y metodos:
// - titular (string): nombre del titular
// - saldo (number): saldo inicial en Bs.
// - depositar (metodo): funcion que recibe un monto y lo suma al saldo
// - retirar (metodo): funcion que recibe un monto y lo resta del saldo
//   (si el monto es mayor al saldo, mostrar "Saldo insuficiente")
// - mostrarSaldo (metodo): funcion que devuelve un string con el saldo actual
//
// Datos de ejemplo:
//   titular: "Maria Flores"
//   saldo: 1000
//
// Resultado esperado:
//   cuentaBancaria.depositar(500) debe dejar saldo en 1500
//   cuentaBancaria.retirar(200) debe dejar saldo en 800
//   cuentaBancaria.retirar(2000) debe mostrar "Saldo insuficiente"
//   cuentaBancaria.mostrarSaldo() debe devolver "Saldo: Bs. 800"
//
// Conceptos usados: metodos, this, funciones como valores

// Tu codigo aqui:


// ------------------------------------------------------------
// EJERCICIO 7: Crear un array de objetos (3 productos)
// ------------------------------------------------------------
// Enunciado:
// Crea un array llamado "inventario" que contenga 3 objetos producto.
// Cada producto debe tener: id, nombre, precio, stock.
// Luego realiza las siguientes operaciones:
// 1. Muestra el nombre y precio de cada producto recorriendo el array
// 2. Calcula el valor total del inventario (precio * stock de cada producto, sumado)
// 3. Encuentra el producto con mayor precio
//
// Datos de ejemplo:
//   Producto 1: { id: 1, nombre: "Cuaderno", precio: 15.50, stock: 100 }
//   Producto 2: { id: 2, nombre: "Mochila", precio: 150.00, stock: 30 }
//   Producto 3: { id: 3, nombre: "Calculadora", precio: 85.00, stock: 50 }
//
// Resultado esperado:
//   Recorrer debe mostrar los 3 productos con nombre y precio
//   Valor total del inventario debe ser: 1550 + 4500 + 4250 = 10300 Bs.
//   Producto con mayor precio: "Mochila"
//
// Conceptos usados: arrays de objetos, recorrer arrays, calculos con propiedades

// Tu codigo aqui:


// ------------------------------------------------------------
// EJERCICIO 8: Buscar un objeto en un array
// ------------------------------------------------------------
// Enunciado:
// Crea un array con al menos 4 estudiantes. Cada estudiante debe tener:
// nombre, edad, carrera, promedio.
// Luego crea una funcion llamada "buscarPorCarrera" que reciba:
// - Un array de estudiantes
// - Una carrera (string)
// Y devuelva un array con todos los estudiantes de esa carrera.
//
// Datos de ejemplo:
const estudiantesEjercicio8 = [
    { nombre: "Luis", edad: 20, carrera: "Ing. Sistemas", promedio: 85 },
    { nombre: "Ana", edad: 21, carrera: "Medicina", promedio: 92 },
    { nombre: "Pedro", edad: 20, carrera: "Ing. Sistemas", promedio: 78 },
    { nombre: "Sofia", edad: 22, carrera: "Derecho", promedio: 88 }
];
//
// Resultado esperado:
//   buscarPorCarrera(estudiantesEjercicio8, "Ing. Sistemas") debe devolver:
//   [
//     { nombre: "Luis", edad: 20, carrera: "Ing. Sistemas", promedio: 85 },
//     { nombre: "Pedro", edad: 20, carrera: "Ing. Sistemas", promedio: 78 }
//   ]
//   buscarPorCarrera(estudiantesEjercicio8, "Medicina") debe devolver:
//   [{ nombre: "Ana", edad: 21, carrera: "Medicina", promedio: 92 }]
//   buscarPorCarrera(estudiantesEjercicio8, "Arte") debe devolver: []
//
// Conceptos usados: arrays de objetos, funciones, condicionales, filtrar arrays

// Tu codigo aqui:


// ------------------------------------------------------------
// BONUS: Sistema de inventario simple
// ------------------------------------------------------------
// Enunciado:
// Crea un sistema de inventario que tenga las siguientes funciones:
//
// 1. registrarProducto(inventario, producto): agrega un producto al inventario
// 2. buscarProductoPorNombre(inventario, nombre): devuelve el producto encontrado o null
// 3. actualizarStock(inventario, id, cantidad): actualiza el stock de un producto por su id
// 4. calcularValorTotal(inventario): calcula el valor total (precio * stock de cada uno)
// 5. listarProductos(inventario): muestra todos los productos con nombre, precio y stock
//
// El inventario es un array de objetos producto.
// Cada producto tiene: id, nombre, precio, stock
//
// Resultado esperado:
//   const miInventario = [];
//   registrarProducto(miInventario, { id: 1, nombre: "Cuaderno", precio: 15, stock: 100 });
//   registrarProducto(miInventario, { id: 2, nombre: "Lapiz", precio: 3, stock: 500 });
//   buscarProductoPorNombre(miInventario, "Cuaderno") debe devolver el objeto del cuaderno
//   actualizarStock(miInventario, 1, 80) debe dejar el stock en 80
//   calcularValorTotal(miInventario) debe devolver: (15*80) + (3*500) = 2700
//   listarProductos(miInventario) debe mostrar todos los productos
//
// Conceptos usados: arrays de objetos, funciones, metodos, iteracion, condicionales

// Tu codigo aqui:
