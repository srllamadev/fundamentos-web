// ============================================================
// LECCION 40 - DESESTRUCTURACION, SPREAD Y REST
// ============================================================

// ------------------------------------------------------------
// 1. QUE ES DESESTRUCTURACION?
// ------------------------------------------------------------

// La desestructuracion es una forma moderna de extraer valores
// de arrays y objetos en variables individuales de forma limpia.
// Antes se hacia asi:

const estudianteAntes = { nombre: "Carlos", edad: 20, carrera: "Informatica" };
const nombreAntes = estudianteAntes.nombre;
const edadAntes = estudianteAntes.edad;
console.log("Forma antigua:", nombreAntes, edadAntes);

// Ahora con desestructuracion es mucho mas directo:

const { nombre: nombreNuevo, edad: edadNueva, carrera: carreraNueva } = estudianteAntes;
console.log("Forma moderna:", nombreNuevo, edadNueva, carreraNueva);


// ------------------------------------------------------------
// 2. DESESTRUCTURACION DE ARRAYS - SINTAXIS BASICA
// ------------------------------------------------------------

// Permite extraer elementos de un array por su posicion.

const colores = ["Rojo", "Verde", "Azul", "Amarillo"];
const [primerColor, segundoColor, tercerColor] = colores;

console.log("Primer color:", primerColor);
console.log("Segundo color:", segundoColor);
console.log("Tercer color:", tercerColor);

// Puedes saltar elementos con comas:

const numeros = [10, 20, 30, 40, 50];
const [primero, , tercero, , quinto] = numeros;

console.log("Primero:", primero);
console.log("Tercero:", tercero);
console.log("Quinto:", quinto);


// ------------------------------------------------------------
// 3. DESESTRUCTURACION DE OBJETOS - SINTAXIS BASICA
// ------------------------------------------------------------

// Extrae propiedades de un objeto en variables con el mismo nombre.

const producto = {
    id: 1,
    nombre: "Cuaderno",
    precio: 25,
    categoria: "Papeleria"
};

const { id, nombre, precio } = producto;

console.log("ID:", id);
console.log("Nombre:", nombre);
console.log("Precio:", precio);


// ------------------------------------------------------------
// 4. ASIGNACION MEDIANTE DESESTRUCTURACION
// ------------------------------------------------------------

// Puedes asignar valores a variables ya existentes.

let a = 1;
let b = 2;

console.log("Antes del swap:", a, b);

// Intercambio de valores usando desestructuracion de array:
[a, b] = [b, a];

console.log("Despues del swap:", a, b);


// ------------------------------------------------------------
// 5. VALORES PREDETERMINADOS EN DESESTRUCTURACION
// ------------------------------------------------------------

// Puedes asignar valores por defecto si la propiedad no existe.

const estudiante = { nombre: "Maria", edad: 22 };

// "carrera" no existe en el objeto, asi que usara el valor por defecto:
const { nombre: nombreEst, edad: edadEst, carrera = "No definida" } = estudiante;

console.log("Nombre:", nombreEst);
console.log("Edad:", edadEst);
console.log("Carrera:", carrera);

// Lo mismo con arrays:
const [x, y, z = 30] = [10, 20];

console.log("X:", x);
console.log("Y:", y);
console.log("Z (valor por defecto):", z);


// ------------------------------------------------------------
// 6. RENOMBRAR VARIABLES AL DESESTRUCTURAR OBJETOS
// ------------------------------------------------------------

// Puedes asignar nombres diferentes a las variables extraidas.

const curso = { titulo: "JavaScript Basico", duracion: 40, instructor: "Prof. Gutierrez" };

const { titulo: nombreCurso, duracion: horas, instructor: profesor } = curso;

console.log("Curso:", nombreCurso);
console.log("Horas:", horas);
console.log("Profesor:", profesor);


// ------------------------------------------------------------
// 7. DESESTRUCTURACION ANIDADA
// ------------------------------------------------------------

// Puedes extraer valores de objetos dentro de objetos.

const universidad = {
    nombre: "UMSA",
    ubicacion: {
        ciudad: "La Paz",
        pais: "Bolivia",
        coordenadas: {
            latitud: -16.5,
            longitud: -68.15
        }
    },
    rectores: ["Dra. Rojas", "Dr. Mamani"]
};

const {
    nombre: nombreUni,
    ubicacion: { ciudad, pais, coordenadas: { latitud, longitud } },
    rectores: [primerRector]
} = universidad;

console.log("Universidad:", nombreUni);
console.log("Ciudad:", ciudad);
console.log("Pais:", pais);
console.log("Latitud:", latitud);
console.log("Longitud:", longitud);
console.log("Primer rector:", primerRector);


// ------------------------------------------------------------
// 8. DESESTRUCTURACION EN PARAMETROS DE FUNCIONES
// ------------------------------------------------------------

// Puedes desestructurar directamente en los parametros.

function mostrarEstudiante({ nombre, edad, carrera = "No definida" }) {
    console.log("Nombre:", nombre);
    console.log("Edad:", edad);
    console.log("Carrera:", carrera);
}

const estudiante2 = { nombre: "Juan", edad: 21, carrera: "Sistemas" };
mostrarEstudiante(estudiante2);

// Tambien con arrays:
function mostrarColores([color1, color2]) {
    console.log("Color 1:", color1);
    console.log("Color 2:", color2);
}

mostrarColores(["Rojo", "Azul"]);


// ------------------------------------------------------------
// 9. QUE ES SPREAD?
// ------------------------------------------------------------

// Spread (propagacion) expande los elementos de un array u objeto
// en lugares donde se esperan multiples valores.
// Usa la misma sintaxis ... pero con proposito diferente.

const frutas = ["Manzana", "Banana", "Naranja"];

// Sin spread:
console.log("Array completo:", frutas);

// Con spread - expande el array en elementos individuales:
console.log("Elementos expandidos:", ...frutas);


// ------------------------------------------------------------
// 10. SINTAXIS SPREAD (...)
// ------------------------------------------------------------

// Los tres puntos (...) son el operador spread.

const numeros2 = [1, 2, 3];

// En un array:
console.log("Numeros:", ...numeros2);

// En una funcion:
console.log("Maximo:", Math.max(...numeros2));


// ------------------------------------------------------------
// 11. SPREAD EN ARRAYS - COPIAR Y COMBINAR
// ------------------------------------------------------------

// Copiar un array:
const original = [1, 2, 3];
const copia = [...original];

console.log("Original:", original);
console.log("Copia:", copia);

// Verificar que son arrays diferentes:
copia.push(4);
console.log("Original despues de modificar copia:", original);
console.log("Copia modificada:", copia);


// ------------------------------------------------------------
// 12. SPREAD EN OBJETOS - COPIAR Y COMBINAR
// ------------------------------------------------------------

// Copiar un objeto:
const productoOriginal = { id: 1, nombre: "Lapiz", precio: 5 };
const productoCopia = { ...productoOriginal };

console.log("Original:", productoOriginal);
console.log("Copia:", productoCopia);

// Verificar que son objetos diferentes:
productoCopia.precio = 7;
console.log("Precio original:", productoOriginal.precio);
console.log("Precio copia:", productoCopia.precio);


// ------------------------------------------------------------
// 13. COPIA SUPERFICIAL CON SPREAD
// ------------------------------------------------------------

// IMPORTANTE: Spread crea una copia superficial (shallow copy).
// Los objetos anidados siguen compartiendo la misma referencia.

const objetoConAnidado = {
    nombre: "Producto A",
    detalles: {
        peso: 100,
        medida: "Mediano"
    }
};

const copiaSuperficial = { ...objetoConAnidado };

console.log("Original:", objetoConAnidado);
console.log("Copia:", copiaSuperficial);

// Modificar una propiedad directa NO afecta al original:
copiaSuperficial.nombre = "Producto B";
console.log("Nombre original:", objetoConAnidado.nombre);
console.log("Nombre copia:", copiaSuperficial.nombre);

// PERO modificar el objeto anidado SI afecta al original:
copiaSuperficial.detalles.peso = 200;
console.log("Peso original (AFECTADO):", objetoConAnidado.detalles.peso);
console.log("Peso copia:", copiaSuperficial.detalles.peso);


// ------------------------------------------------------------
// 14. COMBINAR ARRAYS CON SPREAD
// ------------------------------------------------------------

const lista1 = ["Manzana", "Banana"];
const lista2 = ["Naranja", "Uva"];

const todasLasFrutas = [...lista1, ...lista2];

console.log("Todas las frutas:", todasLasFrutas);

// Puedes agregar elementos en medio:
const frutasPersonalizadas = ["Pera", ...lista1, "Kiwi", ...lista2, "Mango"];
console.log("Frutas personalizadas:", frutasPersonalizadas);


// ------------------------------------------------------------
// 15. COMBINAR OBJETOS CON SPREAD
// ------------------------------------------------------------

const configBase = { tema: "claro", idioma: "es" };
const configUsuario = { tema: "oscuro", fuente: "Arial" };

const configFinal = { ...configBase, ...configUsuario };

console.log("Configuracion final:", configFinal);


// ------------------------------------------------------------
// 16. SOBRESCRITURA DE PROPIEDADES AL COMBINAR OBJETOS
// ------------------------------------------------------------

// Cuando hay propiedades duplicadas, la ultima gana.

const defaults = { color: "azul", tamaño: "mediano", estilo: "clasico" };
const personalizacion = { color: "rojo", tamaño: "grande" };

const resultado = { ...defaults, ...personalizacion };

console.log("Resultado:", resultado);
// color y tamaño fueron sobrescritos por personalizacion

// El orden importa:
const resultado2 = { ...personalizacion, ...defaults };
console.log("Resultado con orden invertido:", resultado2);
// Ahora defaults sobrescribe a personalizacion


// ------------------------------------------------------------
// 17. QUE ES REST?
// ------------------------------------------------------------

// Rest (recopilacion) es lo OPUESTO a spread.
// Mientras spread EXPANDE, rest RECOPILA elementos en un array u objeto.
// Usa la misma sintaxis ... pero con proposito contrario.

// Ejemplo basico:
const [primero2, segundo2, ...resto] = [1, 2, 3, 4, 5];

console.log("Primero:", primero2);
console.log("Segundo:", segundo2);
console.log("Resto:", resto);


// ------------------------------------------------------------
// 18. PARAMETROS REST EN FUNCIONES (...args)
// ------------------------------------------------------------

// Permiten que una funcion acepte un numero variable de argumentos.

function sumarTodos(...numeros) {
    let total = 0;
    for (let i = 0; i < numeros.length; i++) {
        total += numeros[i];
    }
    return total;
}

console.log("Suma 1:", sumarTodos(1, 2, 3));
console.log("Suma 2:", sumarTodos(10, 20, 30, 40));
console.log("Suma 3:", sumarTodos(5, 15, 25, 35, 45, 55));

// "numeros" es un array con todos los argumentos pasados:
console.log("Array de numeros:", sumarTodos(1, 2, 3, 4, 5));

// Puedes combinar parametros normales con rest:
function saludar(mensaje, ...nombres) {
    console.log(mensaje);
    for (let i = 0; i < nombres.length; i++) {
        console.log("  -", nombres[i]);
    }
}

saludar("Bienvenidos:", "Carlos", "Maria", "Juan", "Ana");


// ------------------------------------------------------------
// 19. REST EN DESESTRUCTURACION DE ARRAYS
// ------------------------------------------------------------

// Recopila los elementos restantes en un nuevo array.

const dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];
const [dia1, dia2, ...restoDias] = dias;

console.log("Dia 1:", dia1);
console.log("Dia 2:", dia2);
console.log("Resto de dias:", restoDias);


// ------------------------------------------------------------
// 20. REST EN DESESTRUCTURACION DE OBJETOS
// ------------------------------------------------------------

// Recopila las propiedades restantes en un nuevo objeto.

const estudiante3 = {
    nombre: "Pedro",
    edad: 23,
    carrera: "Ingenieria",
    ciudad: "Cochabamba",
    promedio: 85
};

const { nombre: nombreEst3, edad: edadEst3, ...otrosDatos } = estudiante3;

console.log("Nombre:", nombreEst3);
console.log("Edad:", edadEst3);
console.log("Otros datos:", otrosDatos);


// ------------------------------------------------------------
// 21. DIFERENCIA ENTRE SPREAD Y REST
// ------------------------------------------------------------

// MISMA SINTAXIS (...), COMPORTAMIENTO OPUESTO:

// SPREAD: EXPANDE (rompe en partes)
const arrayParaExpandir = [1, 2, 3];
console.log("Spread (expande):", ...arrayParaExpandir);

const objParaExpandir = { a: 1, b: 2 };
console.log("Spread en objeto:", { ...objParaExpandir });

// REST: RECOPILA (junta en un contenedor)
const [primer, segundo, ...restoElementos] = [1, 2, 3, 4, 5];
console.log("Rest (recopila):", restoElementos);

function conRest(...args) {
    console.log("Parametros recopilados:", args);
}
conRest(1, 2, 3, 4);

// RESUMEN:
// - Spread: ...array o ...objeto -> EXPANDE en elementos individuales
// - Rest: ...variable -> RECOPILA en un array u objeto


// ------------------------------------------------------------
// 22. CASOS PRÁCTICOS
// ------------------------------------------------------------

console.log("\n=== CASOS PRÁCTICOS ===\n");

// CASO 1: Extraer informacion de un estudiante
const estudianteCompleto = {
    nombre: "Lucia",
    edad: 22,
    carrera: "Medicina",
    universidad: "UMSS",
    ciudad: "Cochabamba",
    promedio: 90
};

const { nombre: nomEst, universidad: uni, ...infoAcademica } = estudianteCompleto;
console.log("Estudiante:", nomEst, "de", uni);
console.log("Info academica:", infoAcademica);

// CASO 2: Obtener primeros elementos de un array
const calificaciones = [85, 90, 78, 92, 88, 76, 95];
const [mejor1, mejor2, mejor3, ...restoCalif] = calificaciones;
console.log("Top 3:", mejor1, mejor2, mejor3);
console.log("Otras:", restoCalif);

// CASO 3: Copiar lista de productos
const productosOriginales = [
    { id: 1, nombre: "Cuaderno", precio: 25 },
    { id: 2, nombre: "Lapiz", precio: 5 },
    { id: 3, nombre: "Borrador", precio: 3 }
];

const productosCopia = [...productosOriginales];
console.log("Productos copia:", productosCopia);

// CASO 4: Combinar listas
const estudiantesGrupo1 = ["Carlos", "Maria"];
const estudiantesGrupo2 = ["Juan", "Ana"];
const todosEstudiantes = [...estudiantesGrupo1, ...estudiantesGrupo2];
console.log("Todos los estudiantes:", todosEstudiantes);

// CASO 5: Mezclar configuraciones
const configServidor = { puerto: 3000, host: "localhost", protocolo: "http" };
const configProduccion = { host: "midominio.com", protocolo: "https", ssl: true };

const configDefinitiva = { ...configServidor, ...configProduccion };
console.log("Configuracion definitiva:", configDefinitiva);

// CASO 6: Funcion con argumentos variables
function calcularPromedio(...notas) {
    if (notas.length === 0) return 0;
    let suma = 0;
    for (let i = 0; i < notas.length; i++) {
        suma += notas[i];
    }
    return suma / notas.length;
}

console.log("Promedio 1:", calcularPromedio(85, 90, 78));
console.log("Promedio 2:", calcularPromedio(100, 95, 88, 92));
console.log("Promedio 3:", calcularPromedio(70));

// CASO 7: Separar propiedades de un objeto
const vehiculo = {
    marca: "Toyota",
    modelo: "Corolla",
    anio: 2020,
    color: "Blanco",
    precio: 95000
};

const { marca, modelo, anio, ...especificaciones } = vehiculo;
console.log("Basico:", marca, modelo, anio);
console.log("Especificaciones:", especificaciones);

// CASO 8: Actualizar objeto sin mutar el original (usando spread)
const estudianteOriginal = {
    nombre: "Sofia",
    edad: 21,
    promedio: 88
};

// Actualizar usando spread:
const estudianteActualizado = { ...estudianteOriginal, promedio: 92, semestre: 5 };

console.log("Original:", estudianteOriginal);
console.log("Actualizado:", estudianteActualizado);

// CASO 9: Mostrar limitacion de copia superficial con objetos anidados
console.log("\n=== LIMITACION DE COPIA SUPERFICIAL ===\n");

const cursoConEstudiantes = {
    nombre: "Matematicas",
    profesor: "Dr. Perez",
    estudiantes: ["Carlos", "Maria", "Juan"]
};

const cursoCopia = { ...cursoConEstudiantes };

// Modificar propiedad directa NO afecta al original:
cursoCopia.nombre = "Fisica";
console.log("Curso original:", cursoConEstudiantes.nombre);
console.log("Curso copia:", cursoCopia.nombre);

// PERO modificar el array anidado SI afecta al original:
cursoCopia.estudiantes.push("Ana");
console.log("Estudiantes original (AFECTADO):", cursoConEstudiantes.estudiantes);
console.log("Estudiantes copia:", cursoCopia.estudiantes);

// Para copia profunda real, necesitas copiar manualmente los objetos anidados:
const cursoCopiaProfunda = {
    ...cursoConEstudiantes,
    estudiantes: [...cursoConEstudiantes.estudiantes]
};

cursoCopiaProfunda.estudiantes.push("Pedro");
console.log("Estudiantes original (NO AFECTADO):", cursoConEstudiantes.estudiantes);
console.log("Estudiantes copia profunda:", cursoCopiaProfunda.estudiantes);


// ------------------------------------------------------------
// 23. MEJORES PRACTICAS
// ------------------------------------------------------------

console.log("\n=== MEJORES PRACTICAS ===\n");

// 1. Usa const por defecto, let solo si necesitas reasignar
const { nombre: n } = { nombre: "Test" };
// let { nombre: n2 } = { nombre: "Test" }; // Solo si vas a reasignar n2

// 2. Siempre proporciona valores por defecto cuando sea posible
const { propiedad1 = "default", propiedad2 = 0 } = {};
console.log("Con defaults:", propiedad1, propiedad2);

// 3. Usa nombres descriptivos al renombrar
const { precio: precioUnitario } = { precio: 100 };
console.log("Precio:", precioUnitario);

// 4. Rest siempre debe ser el ultimo parametro
function ejemploCorrecto(primero, segundo, ...resto) {
    console.log(primero, segundo, resto);
}
// function ejemploIncorrecto(...resto, ultimo) { } // ERROR!

ejemploCorrecto(1, 2, 3, 4, 5);

// 5. Usa spread para crear copias antes de modificar
const original2 = [1, 2, 3];
const paraModificar = [...original2];
paraModificar.push(4);
console.log("Original intacto:", original2);
console.log("Modificado:", paraModificar);

// 6. Cuidado con la copia superficial
const conAnidado = { datos: { valor: 1 } };
const copia2 = { ...conAnidado };
// copia2.datos.valor = 2; // Esto afectaria a conAnidado.datos.valor

// Para copiar profundamente, copia manualmente los niveles anidados:
const copia3 = { ...conAnidado, datos: { ...conAnidado.datos } };
copia3.datos.valor = 2;
console.log("Original:", conAnidado.datos.valor);
console.log("Copia profunda:", copia3.datos.valor);

// 7. Desestructura en parametros para funciones mas limpias
// En vez de:
function procesarAntiguo(obj) {
    console.log(obj.nombre, obj.edad);
}

// Mejor:
function procesarModerno({ nombre, edad }) {
    console.log(nombre, edad);
}

procesarModerno({ nombre: "Test", edad: 20 });

// 8. Combina spread y desestructuracion para codigo conciso
const datos = { id: 1, nombre: "Item", precio: 50, stock: 100 };
const { id: itemId, nombre: itemName, ...restoProps } = datos;
const nuevoItem = { ...datos, id: itemId + 1, actualizado: true };

console.log("Item ID:", itemId);
console.log("Item Nombre:", itemName);
console.log("Resto:", restoProps);
console.log("Nuevo item:", nuevoItem);

console.log("\n=== FIN DE LA LECCION 40 ===");
