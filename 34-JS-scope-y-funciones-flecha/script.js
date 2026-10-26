// ============================================================
// LECCION 34 - SCOPE Y FUNCIONES FLECHA
// ============================================================

// ------------------------------------------------------------
// 1. QUE ES SCOPE?
// ------------------------------------------------------------
// Scope (alcance) determina donde una variable existe y puede ser accedida.
// Piensa en el scope como "cajas" que contienen variables. Algunas cajas
// estan dentro de otras, y las variables solo viven dentro de su caja.

const nombre = "Maria";
console.log("1. Scope - La variable 'nombre' existe en el scope global");

// ------------------------------------------------------------
// 2. SCOPE GLOBAL
// ------------------------------------------------------------
// Las variables declaradas fuera de cualquier funcion o bloque
// pertenecen al scope global y pueden accederse desde cualquier lugar.

const estudiante = "Juan Perez";
let notaFinal = 85;
const materia = "Matematicas";

console.log("\n--- 2. Scope Global ---");
console.log("Estudiante:", estudiante);
console.log("Nota Final:", notaFinal);
console.log("Materia:", materia);

// Funcion que accede a variables globales
const mostrarDatosGlobales = () => {
    console.log("Dentro de la funcion - Estudiante:", estudiante);
    console.log("Dentro de la funcion - Nota:", notaFinal);
};

mostrarDatosGlobales();

// ------------------------------------------------------------
// 3. SCOPE DE FUNCION
// ------------------------------------------------------------
// Las variables declaradas DENTRO de una funcion NO pueden
// accederse desde fuera de esa funcion.

const calcularPromedio = (nota1, nota2, nota3) => {
    const suma = nota1 + nota2 + nota3;
    const promedio = suma / 3;
    return promedio;
};

console.log("\n--- 3. Scope de Funcion ---");
console.log("Promedio:", calcularPromedio(70, 80, 90));

// Las variables 'suma' y 'promedio' solo existen dentro de la funcion
// Si intentamos acceder a ellas aqui, obtendremos un error:
// console.log(suma);     // ERROR: suma is not defined
// console.log(promedio); // ERROR: promedio is not defined

// ------------------------------------------------------------
// 4. SCOPE DE BLOQUE
// ------------------------------------------------------------
// Las variables declaradas con let y const dentro de un bloque {}
// solo existen dentro de ese bloque.

console.log("\n--- 4. Scope de Bloque ---");

const ejemploBloque = () => {
    const variableExterna = "Soy global a la funcion";

    if (true) {
        const variableInterna = "Solo existo en este if";
        console.log("Dentro del if:", variableExterna);
        console.log("Dentro del if:", variableInterna);
    }

    console.log("Fuera del if:", variableExterna);
    // console.log(variableInterna); // ERROR: variableInterna is not defined
};

ejemploBloque();

// ------------------------------------------------------------
// 5. let EN BLOQUES
// ------------------------------------------------------------
// let respeta el scope de bloque

console.log("\n--- 5. let en Bloques ---");

// Ejemplo con if
if (true) {
    let mensaje = "Solo existo en este bloque if";
    console.log("Dentro del if:", mensaje);
}
// console.log(mensaje); // ERROR: mensaje is not defined fuera del if

// Ejemplo con for loop
for (let i = 0; i < 3; i++) {
    let cuadrado = i * i;
    console.log("i =", i, "| cuadrado =", cuadrado);
}
// console.log(i); // ERROR: i is not defined fuera del for

// ------------------------------------------------------------
// 6. const EN BLOQUES
// ------------------------------------------------------------
// const tambien respeta el scope de bloque

console.log("\n--- 6. const en Bloques ---");

const verificarEdad = (edad) => {
    if (edad >= 18) {
        const mensaje = "Es mayor de edad";
        console.log(mensaje);
    } else {
        const mensaje = "Es menor de edad";
        console.log(mensaje);
    }
    // const mensaje NO es accesible aqui porque fue declarada
    // en bloques diferentes (cada if/else tiene su propio scope)
};

verificarEdad(20);
verificarEdad(15);

// ------------------------------------------------------------
// 7. var EN BLOQUES (IMPORTANTE - NO tiene block scope)
// ------------------------------------------------------------
// var NO respeta el scope de bloque, solo respeta el scope de funcion.
// Esta es una de las razones principales por las que preferimos let/const.

console.log("\n--- 7. var vs let en Bloques ---");

// Ejemplo con var - NO tiene block scope
if (true) {
    var conVar = "Soy declarada con var";
}
console.log("var fuera del if:", conVar); // Funciona! var ignora el bloque

// Ejemplo con let - SI tiene block scope
if (true) {
    let conLet = "Soy declarada con let";
}
// console.log("let fuera del if:", conLet); // ERROR: conLet is not defined

// Diferencia CRITICA en un for loop:
console.log("\nvar en for loop:");
for (var j = 0; j < 3; j++) {
    console.log("  Dentro:", j);
}
console.log("var despues del for:", j); // j = 3, sigue existiendo!

console.log("\nlet en for loop:");
for (let k = 0; k < 3; k++) {
    console.log("  Dentro:", k);
}
// console.log("let despues del for:", k); // ERROR: k is not defined

// ------------------------------------------------------------
// 8. SHADOWING
// ------------------------------------------------------------
// Shadowing ocurre cuando una variable interna tiene el mismo nombre
// que una variable externa. La variable interna "oculta" a la externa.

console.log("\n--- 8. Shadowing ---");

const precio = 100; // Variable global

const mostrarPrecio = () => {
    const precio = 50; // Variable local - sombra a la global
    console.log("Precio local:", precio); // 50
};

mostrarPrecio();
console.log("Precio global:", precio); // 100, no fue afectada

// Ejemplo con funcion anidada
const funcionExterna = () => {
    const valor = "externo";

    const funcionInterna = () => {
        const valor = "interno"; // Shadowing
        console.log("Funcion interna:", valor);
    };

    funcionInterna();
    console.log("Funcion externa:", valor);
};

funcionExterna();

// ------------------------------------------------------------
// 9. VARIABLES LOCALES VS GLOBALES
// ------------------------------------------------------------

console.log("\n--- 9. Variables Locales vs Globales ---");

const contadorGlobal = 0; // Global

const incrementar = () => {
    const contadorLocal = contadorGlobal + 1; // Lee global, crea local
    console.log("Contador local:", contadorLocal);
    return contadorLocal;
};

incrementar();
incrementar();
console.log("Contador global sigue siendo:", contadorGlobal); // 0

// Para mantener estado, necesitamos una variable mutable en el scope correcto
let contadorMutable = 0;

const incrementarMutable = () => {
    contadorMutable = contadorMutable + 1;
    return contadorMutable;
};

console.log("Incremento 1:", incrementarMutable());
console.log("Incremento 2:", incrementarMutable());
console.log("Incremento 3:", incrementarMutable());

// ------------------------------------------------------------
// 10. SCOPE LEXICO (introduccion)
// ------------------------------------------------------------
// El scope lexico significa que las funciones internas pueden
// acceder a las variables de sus funciones externas.

console.log("\n--- 10. Scope Lexico ---");

const saludarConTitulo = (titulo) => {
    // 'titulo' es accesible desde la funcion interna
    const generarSaludo = (nombre) => {
        return titulo + " " + nombre;
    };

    return generarSaludo;
};

const saludarProfesor = saludarConTitulo("Profesor");
console.log(saludarProfesor("Roberto"));
console.log(saludarProfesor("Carlos"));

const saludarEstudiante = saludarConTitulo("Estudiante");
console.log(saludarEstudiante("Ana"));
console.log(saludarEstudiante("Sofia"));

// ------------------------------------------------------------
// 11. CLOSURES (introduccion practica)
// ------------------------------------------------------------
// Un closure es una funcion que "recuerda" las variables de su scope externo,
// incluso despues de que la funcion externa haya terminado de ejecutarse.

console.log("\n--- 11. Closures ---");

const crearContador = () => {
    let cuenta = 0; // Variable "privada" del closure

    return () => {
        cuenta = cuenta + 1;
        return cuenta;
    };
};

const contador1 = crearContador();
console.log("Contador 1 - llamada 1:", contador1()); // 1
console.log("Contador 1 - llamada 2:", contador1()); // 2
console.log("Contador 1 - llamada 3:", contador1()); // 3

const contador2 = crearContador();
console.log("Contador 2 - llamada 1:", contador2()); // 1 (es independiente!)
console.log("Contador 2 - llamada 2:", contador2()); // 2

// Cada contador tiene su propia variable 'cuenta' independiente

// ------------------------------------------------------------
// 12. FUNCIONES TRADICIONALES (repaso)
// ------------------------------------------------------------

console.log("\n--- 12. Funciones Tradicionales (Repaso) ---");

// Declaracion de funcion
function multiplicar(a, b) {
    return a * b;
}

console.log("Funcion tradicional:", multiplicar(5, 4));

// Funcion con parametros por defecto
function calcularDescuento(precio, descuento = 10) {
    const montoDescuento = (precio * descuento) / 100;
    return precio - montoDescuento;
}

console.log("Con descuento:", calcularDescuento(200));
console.log("Con descuento personalizado:", calcularDescuento(200, 15));

// ------------------------------------------------------------
// 13. FUNCIONES ANONIMAS
// ------------------------------------------------------------
// Funciones sin nombre, asignadas a variables o pasadas como argumentos.

console.log("\n--- 13. Funciones Anonimas ---");

const saludar = function (nombre) {
    return "Hola " + nombre + "!";
};

console.log(saludar("Luis"));

// Pasadas como argumentos
const numeros = [5, 2, 8, 1, 9];
const ordenados = numeros.slice().sort(function (a, b) {
    return a - b;
});
console.log("Ordenados:", ordenados);

// ------------------------------------------------------------
// 14. EXPRESIONES DE FUNCION
// ------------------------------------------------------------
// Asignar una funcion a una variable.

console.log("\n--- 14. Expresiones de Funcion ---");

const calcularArea = function (base, altura) {
    return (base * altura) / 2;
};

console.log("Area del triangulo:", calcularArea(10, 5));

const esMayorDeEdad = function (edad) {
    return edad >= 18;
};

console.log("20 anios es mayor:", esMayorDeEdad(20));
console.log("15 anios es mayor:", esMayorDeEdad(15));

// ------------------------------------------------------------
// 15. FUNCIONES FLECHA - SINTAXIS =>
// ------------------------------------------------------------

console.log("\n--- 15. Funciones Flecha - Sintaxis ---");

// Funcion tradicional
function sumar1(a, b) {
    return a + b;
}

// Funcion flecha equivalente
const sumar2 = (a, b) => {
    return a + b;
};

console.log("Tradicional:", sumar1(3, 7));
console.log("Flecha:", sumar2(3, 7));

// Conversion paso a paso
// 1. Funcion tradicional:
//    function sumar(a, b) { return a + b; }
// 2. Asignar a variable:
//    const sumar = function(a, b) { return a + b; }
// 3. Reemplazar 'function' con flecha:
//    const sumar = (a, b) => { return a + b; }
// 4. Retorno implicito (ver siguiente seccion):
//    const sumar = (a, b) => a + b;

// Ejemplo con contexto boliviano
const calcularPrecioBs = (montoUsd) => {
    const tipoCambio = 6.96;
    return montoUsd * tipoCambio;
};

console.log("10 USD en Bs.:", calcularPrecioBs(10));
console.log("50 USD en Bs.:", calcularPrecioBs(50));

// ------------------------------------------------------------
// 16. FUNCION FLECHA CON MULTIPLES PARAMETROS
// ------------------------------------------------------------

console.log("\n--- 16. Flecha con Multiples Parametros ---");

const calcularPromedio2 = (nota1, nota2, nota3) => {
    return (nota1 + nota2 + nota3) / 3;
};

console.log("Promedio:", calcularPromedio2(80, 90, 70));

const calcularSalario = (horasTrabajadas, salarioPorHora) => {
    const salarioBase = horasTrabajadas * salarioPorHora;
    const bono = salarioBase * 0.1;
    return salarioBase + bono;
};

console.log("Salario total Bs.:", calcularSalario(160, 50));

// ------------------------------------------------------------
// 17. FUNCION FLECHA CON UN SOLO PARAMETRO
// ------------------------------------------------------------
// Cuando hay un solo parametro, los parentesis son opcionales.

console.log("\n--- 17. Flecha con Un Solo Parametro ---");

// Con parentesis
const duplicar1 = (n) => {
    return n * 2;
};

// Sin parentesis (mas comun)
const duplicar2 = (n) => n * 2;

console.log("Duplicar (con parentesis):", duplicar1(7));
console.log("Duplicar (sin parentesis):", duplicar2(7));

const cuadrado = (x) => x * x;
console.log("Cuadrado de 9:", cuadrado(9));

const esPar = (n) => n % 2 === 0;
console.log("4 es par:", esPar(4));
console.log("7 es par:", esPar(7));

// ------------------------------------------------------------
// 18. FUNCION FLECHA SIN PARAMETROS
// ------------------------------------------------------------
// Cuando no hay parametros, los parentesis son obligatorios.

console.log("\n--- 18. Flecha sin Parametros ---");

const obtenerFecha = () => {
    return new Date().toLocaleDateString("es-BO");
};

console.log("Fecha actual:", obtenerFecha());

const saludarMundo = () => "Hola Mundo!";
console.log(saludarMundo());

const numeroAleatorio = () => Math.floor(Math.random() * 100);
console.log("Numero aleatorio:", numeroAleatorio());

// ------------------------------------------------------------
// 19. RETORNO IMPLICITO (expresion unica)
// ------------------------------------------------------------
// Si el cuerpo es una sola expresion, se puede omitir 'return' y las llaves.

console.log("\n--- 19. Retorno Implicito vs Explicito ---");

// Explicito (con return y llaves)
const triple1 = (n) => {
    return n * 3;
};

// Implicito (sin return ni llaves)
const triple2 = (n) => n * 3;

console.log("Triple (explicito):", triple1(5));
console.log("Triple (implicito):", triple2(5));

// Mas ejemplos con retorno implicito
const convertirAMayusculas = (texto) => texto.toUpperCase();
console.log(convertirAMayusculas("bolivia"));

const calcularIVA = (monto) => monto * 0.16;
console.log("IVA sobre 100 Bs.:", calcularIVA(100));

const obtenerInicial = (nombre) => nombre[0];
console.log("Inicial de 'Santa Cruz':", obtenerInicial("Santa Cruz"));

// ------------------------------------------------------------
// 20. RETORNO EXPLICITO (cuerpo con bloque)
// ------------------------------------------------------------
// Cuando necesitas multiples lineas, usa llaves y return explicito.

console.log("\n--- 20. Retorno Explicito ---");

const clasificarNota = (nota) => {
    if (nota >= 90) {
        return "Excelente";
    } else if (nota >= 70) {
        return "Aprobado";
    } else {
        return "Reprobado";
    }
};

console.log("Nota 95:", clasificarNota(95));
console.log("Nota 75:", clasificarNota(75));
console.log("Nota 45:", clasificarNota(45));

const calcularDescuento2 = (precio, tipoCliente) => {
    let descuento = 0;

    if (tipoCliente === "premium") {
        descuento = 20;
    } else if (tipoCliente === "regular") {
        descuento = 10;
    }

    const precioFinal = precio - (precio * descuento) / 100;
    return precioFinal;
};

console.log("Cliente premium (200 Bs.):", calcularDescuento2(200, "premium"));
console.log("Cliente regular (200 Bs.):", calcularDescuento2(200, "regular"));
console.log("Cliente nuevo (200 Bs.):", calcularDescuento2(200, "nuevo"));

// ------------------------------------------------------------
// 21. DIFERENCIAS: FUNCION NORMAL VS FUNCION FLECHA
// ------------------------------------------------------------
// La principal diferencia es como manejan 'this' (ver siguiente seccion).
// Otras diferencias:

console.log("\n--- 21. Diferencias Normal vs Flecha ---");

// Las funciones flecha no pueden ser usadas como constructores
function Persona(nombre) {
    this.nombre = nombre;
}

const juan = new Persona("Juan");
console.log("Instancia de Persona:", juan.nombre);

// const PersonaFlecha = (nombre) => { this.nombre = nombre; };
// const maria = new PersonaFlecha("Maria"); // ERROR: no puede usarse con 'new'

// Las funciones flecha no tienen su propio 'arguments'
function mostrarArgumentos() {
    console.log("Argumentos (funcion normal):", arguments);
}

mostrarArgumentos(1, 2, 3);

// En funciones flecha, usamos ...rest en su lugar
const mostrarParametros = (...args) => {
    console.log("Parametros (funcion flecha):", args);
};

mostrarParametros(1, 2, 3);

// ------------------------------------------------------------
// 22. THIS EN FUNCIONES FLECHA (introduccion)
// ------------------------------------------------------------
// 'this' en funciones flecha hereda el 'this' del scope donde fueron creadas.
// Esto es diferente a las funciones tradicionales que tienen su propio 'this'.

console.log("\n--- 22. this en Funciones Flecha ---");

// Funcion tradicional - 'this' depende de como se llama la funcion
const objeto1 = {
    nombre: "Objeto 1",
    saludar: function () {
        console.log("this en funcion tradicional:", this.nombre);
    },
};

objeto1.saludar(); // "Objeto 1"

// Funcion flecha - 'this' hereda del contexto donde fue definida
const objeto2 = {
    nombre: "Objeto 2",
    saludar: () => {
        console.log("this en funcion flecha:", this); // 'this' NO es objeto2
    },
};

// objeto2.saludar(); // this sera undefined o el objeto global, no objeto2

// Por ahora, solo ten en cuenta:
// - Funcion tradicional: 'this' depende de quien la llama
// - Funcion flecha: 'this' hereda de donde fue creada

// ------------------------------------------------------------
// 23. BUENAS PRACTICAS
// ------------------------------------------------------------

console.log("\n--- 23. Buenas Practicas ---");

// MALA PRACTICA: Usar variables globales innecesariamente
// let resultadoGlobal; // Evitar esto!
const calcularSuma = (a, b) => {
    // let resultadoGlobal = a + b; // Mejor usar variables locales
    const resultado = a + b;
    return resultado;
};

console.log("Suma:", calcularSuma(10, 20));

// BUENA PRACTICA: Usar const por defecto, let solo cuando sea necesario
// Mala practica:
// let precio = 100;
// precio = 150; // Si no necesita cambiar, deberia ser const

// Buena practica:
const precioProducto = 100; // No cambia
let precioConDescuento = precioProducto; // Si cambia
precioConDescuento = precioProducto * 0.9;

console.log("Precio final:", precioConDescuento);

// BUENA PRACTICA: Minimizar el scope de las variables
// Mala practica:
// let temp; // Declarar muy arriba y usar en muchos lugares

// Buena practica:
const procesarDatos = () => {
    const temp = 25; // Declarar lo mas cerca posible de donde se usa
    return temp * 2;
};

console.log("Resultado:", procesarDatos());

// ============================================================
// EJEMPLOS PRACTICOS COMBINANDO SCOPE Y FUNCIONES FLECHA
// ============================================================

console.log("\n--- Ejemplos Practicos Combinados ---");

// Ejemplo 1: Calculadora de notas con scope
const calcularNotaFinal = (parcial1, parcial2, trabajo) => {
    const pesoParcial = 0.35;
    const pesoTrabajo = 0.3;

    const notaParciales = (parcial1 + parcial2) * pesoParcial;
    const notaTrabajo = trabajo * pesoTrabajo;

    return notaParciales + notaTrabajo;
};

console.log("Nota final:", calcularNotaFinal(80, 85, 90));

// Ejemplo 2: Generador de saludos con closure
const crearSaludoPersonalizado = (prefijo) => {
    return (nombre) => `${prefijo}, ${nombre}!`;
};

const saludoFormal = crearSaludoPersonalizado("Buenos dias");
const saludoInformal = crearSaludoPersonalizado("Hola");

console.log(saludoFormal("Profesor Roberto"));
console.log(saludoInformal("Estudiante Ana"));

// Ejemplo 3: Transformar array con funciones flecha
const estudiantes = [
    { nombre: "Carlos", nota: 85 },
    { nombre: "Maria", nota: 92 },
    { nombre: "Luis", nota: 78 },
    { nombre: "Ana", nota: 95 },
];

const nombresAprobados = estudiantes
    .filter((est) => est.nota >= 80)
    .map((est) => est.nombre);

console.log("Estudiantes aprobados:", nombresAprobados);

// Ejemplo 4: Closure para control de inventario
const crearInventario = (stockInicial) => {
    let stock = stockInicial;

    return {
        vender: (cantidad) => {
            if (cantidad <= stock) {
                stock = stock - cantidad;
                return `Vendido. Stock restante: ${stock}`;
            }
            return "Stock insuficiente";
        },
        obtenerStock: () => stock,
    };
};

const inventario = crearInventario(100);
console.log(inventario.vender(30));
console.log(inventario.vender(50));
console.log("Stock actual:", inventario.obtenerStock());
console.log(inventario.vender(30));

// Ejemplo 5: Funciones flecha encadenadas
const procesarTexto = (texto) => texto.trim();
const aMinusculas = (texto) => texto.toLowerCase();
const separarPalabras = (texto) => texto.split(" ");
const contarPalabras = (arr) => arr.length;

const textoEjemplo = "  Hola Mundo desde Bolivia  ";
const cantidadPalabras = contarPalabras(
    separarPalabras(aMinusculas(procesarTexto(textoEjemplo)))
);

console.log("Palabras en el texto:", cantidadPalabras);

console.log("\n=== FIN DE LA LECCION 34 ===");
