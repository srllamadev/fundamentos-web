// ============================================================
// LECCION 34 - SCOPE Y FUNCIONES FLECHA - EJERCICIOS
// ============================================================

// ------------------------------------------------------------
// EJERCICIO 1 - Identificar variables accesibles
// ------------------------------------------------------------
// Dado el siguiente codigo, responde: cuales variables son accesibles
// en cada punto marcado con comentarios? Escribe tu respuesta en la consola.

const variableGlobal = "Soy global";

const ejercicio1 = () => {
    const variableLocal = "Soy local";

    if (true) {
        const variableBloque = "Soy de bloque";
        // PUNTO A: Que variables son accesibles aqui?
        // Escribe tu respuesta:
    }

    // PUNTO B: Que variables son accesibles aqui?
    // Escribe tu respuesta:
};

// PUNTO C: Que variables son accesibles aqui?
// Escribe tu respuesta:

// ------------------------------------------------------------
// EJERCICIO 2 - Funcion con variables de bloque
// ------------------------------------------------------------
// Crea una funcion llamada 'calcularAreaYPerimetro' que reciba
// base y altura de un rectangulo. Dentro de la funcion:
// - Declara una variable 'area' que solo exista en un bloque if
// - Declara una variable 'perimetro' que solo exista en otro bloque
// - Retorna un objeto con ambas propiedades: { area, perimetro }
// - Imprime los resultados en consola

// Escribe tu solucion aqui:


// ------------------------------------------------------------
// EJERCICIO 3 - Convertir funciones tradicionales a flecha
// ------------------------------------------------------------
// Convierte las siguientes 3 funciones tradicionales a funciones flecha

// Funcion 1 - Original
function esMultiplo(numero, multiplo) {
    return numero % multiplo === 0;
}

// Funcion 1 - Tu conversion a flecha:


// Funcion 2 - Original
function calcularFactorial(n) {
    if (n <= 1) {
        return 1;
    }
    return n * calcularFactorial(n - 1);
}

// Funcion 2 - Tu conversion a flecha:


// Funcion 3 - Original
function obtenerPrecioFinal(precio, impuesto) {
    const montoImpuesto = (precio * impuesto) / 100;
    return precio + montoImpuesto;
}

// Funcion 3 - Tu conversion a flecha:


// ------------------------------------------------------------
// EJERCICIO 4 - Funciones flecha con retorno implicito
// ------------------------------------------------------------
// Reescribe las siguientes funciones flecha usando retorno implicito
// (una sola expresion, sin llaves ni return)

// 1 - Con retorno explicito
const obtenerLongitud1 = (texto) => {
    return texto.length;
};

// 1 - Tu version con retorno implicito:


// 2 - Con retorno explicito
const invertirNumero1 = (n) => {
    return n * -1;
};

// 2 - Tu version con retorno implicito:


// 3 - Con retorno explicito
const primerCaracter1 = (palabra) => {
    return palabra[0];
};

// 3 - Tu version con retorno implicito:


// ------------------------------------------------------------
// EJERCICIO 5 - Explicar error de scope
// ------------------------------------------------------------
// El siguiente codigo tiene un error. Ejecutalo, observa el mensaje de error,
// y escribe en la consola con tus propias palabras POR QUE ocurre el error
// y que concepto de scope lo causa.

const ejercicio5 = () => {
    for (let i = 0; i < 5; i++) {
        const mensaje = "Iteracion " + i;
    }

    // Descomenta la siguiente linea para ver el error:
    // console.log(mensaje);
};

ejercicio5();

// Escribe aqui tu explicacion del error:
// Respuesta:


// ------------------------------------------------------------
// EJERCICIO 6 - Crear un contador con closure
// ------------------------------------------------------------
// Crea una funcion 'crearContadorConValor' que:
// - Reciba un valor inicial como parametro
// - Retorne una funcion que, cada vez que se llame, incremente
//   el contador en 1 y retorne el valor actual
// - El contador debe mantener su valor entre llamadas (closure)
//
// Ejemplo de uso esperado:
//   const contador = crearContadorConValor(10);
//   console.log(contador()); // 11
//   console.log(contador()); // 12
//   console.log(contador()); // 13
//
//   const otroContador = crearContadorConValor(0);
//   console.log(otroContador()); // 1
//   console.log(otroContador()); // 2

// Escribe tu solucion aqui:


// ------------------------------------------------------------
// EJERCICIOS ADICIONALES (opcional)
// ------------------------------------------------------------

// A. Crea una funcion flecha que reciba un array de numeros y retorne
//    solo los numeros mayores a 10, usando filter con funcion flecha.

// B. Crea un closure 'crearMultiplicador' que reciba un factor y retorne
//    una funcion que multiplique cualquier numero por ese factor.
