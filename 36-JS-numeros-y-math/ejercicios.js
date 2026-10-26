// ============================================================
// LECCION 36 - EJERCICIOS
// Numeros y Objeto Math - Ejercicios sin solucion
// ============================================================

// ------------------------------------------------------------
// EJERCICIO 1: Redondear numeros a diferentes niveles de precision
// ------------------------------------------------------------

/*
    TITULO: Redondeo de numeros decimales

    ENUNCIADO:
    Dado el siguiente numero decimal, realiza las siguientes operaciones:
    a) Redondealo a 0 decimales usando toFixed()
    b) Redondealo a 2 decimales usando toFixed()
    c) Redondealo a 4 decimales usando toFixed()
    d) Usa Math.floor() para obtener la parte entera
    e) Usa Math.ceil() para redondear hacia arriba al entero
    f) Usa Math.round() para redondear al entero mas cercano
    g) Usa Math.trunc() para eliminar los decimales
    h) Muestra el tipo de dato que retorna toFixed()

    DATOS DE EJEMPLO:
    const numero = 3.7864;

    RESULTADO ESPERADO (valores):
    a) "4" (string)
    b) "3.79" (string)
    c) "3.7864" (string)
    d) 3
    e) 4
    f) 4
    g) 3
    h) "string"

    CONCEPTOS USADOS: toFixed(), Math.floor(), Math.ceil(), Math.round(), Math.trunc(), typeof
*/

// Tu codigo aqui:


// ------------------------------------------------------------
// EJERCICIO 2: Calcular el area de un circulo
// ------------------------------------------------------------

/*
    TITULO: Area y circunferencia de un circulo

    ENUNCIADO:
    Escribe un programa que calcule el area y la circunferencia de un circulo
    dado su radio. Usa Math.PI para el valor de PI.
    Muestra los resultados redondeados a 2 decimales.

    a) Calcular el area usando la formula: area = PI * radio^2
    b) Calcular la circunferencia usando: circunferencia = 2 * PI * radio
    c) Mostrar ambos resultados con 2 decimales (como numeros, no strings)

    DATOS DE EJEMPLO:
    const radio = 10;

    RESULTADO ESPERADO:
    Radio: 10 cm
    Area: 314.16 cm^2
    Circunferencia: 62.83 cm

    CONCEPTOS USADOS: Math.PI, Math.pow() o **, toFixed(), Number()
*/

// Tu codigo aqui:


// ------------------------------------------------------------
// EJERCICIO 3: Encontrar maximo y minimo de un conjunto
// ------------------------------------------------------------

/*
    TITULO: Notas maximas y minimas de estudiantes

    ENUNCIADO:
    Dados los siguientes arreglos con notas de tres estudiantes,
    encuentra para cada estudiante:
    a) La nota maxima usando Math.max()
    b) La nota minima usando Math.min()
    c) El rango (diferencia entre maximo y minimo)
    d) El promedio de sus notas

    DATOS DE EJEMPLO:
    const notasCarlos = [72, 85, 90, 65, 78];
    const notasMaria = [95, 88, 92, 97, 91];
    const notasJuan = [55, 60, 48, 70, 62];

    RESULTADO ESPERADO:
    Carlos - Max: 90, Min: 65, Rango: 25, Promedio: 78
    Maria - Max: 97, Min: 88, Rango: 9, Promedio: 92.6
    Juan - Max: 70, Min: 48, Rango: 22, Promedio: 59

    CONCEPTOS USADOS: Math.max(), Math.min(), Math.abs(), toFixed(), Number()
*/

// Tu codigo aqui:


// ------------------------------------------------------------
// EJERCICIO 4: Simular tiro de dado
// ------------------------------------------------------------

/*
    TITULO: Simulador de dado de 6 caras

    ENUNCIADO:
    Crea una funcion llamada tirarDado() que simule el lanzamiento
    de un dado de 6 caras. La funcion debe:
    a) Generar un numero aleatorio entre 1 y 6 (ambos inclusive)
    b) Retornar ese numero
    Luego, llama a la funcion 10 veces y muestra cada resultado.
    Finalmente, muestra cuantas veces salio cada numero (del 1 al 6).

    DATOS DE EJEMPLO:
    No se necesitan datos de entrada, es aleatorio.

    RESULTADO ESPERADO:
    Tiro 1: 3
    Tiro 2: 5
    Tiro 3: 1
    ... (10 tiros en total)
    Frecuencia:
    1: X veces
    2: Y veces
    ...

    CONCEPTOS USADOS: Math.random(), Math.floor(), funciones, condicionales o switch
*/

// Tu codigo aqui:


// ------------------------------------------------------------
// EJERCICIO 5: Generar numeros aleatorios en rangos
// ------------------------------------------------------------

/*
    TITULO: Generador de numeros aleatorios en diferentes rangos

    ENUNCIADO:
    Crea una funcion reutilizable llamada aleatorioEnRango(min, max)
    que genere un numero entero aleatorio entre min y max (ambos inclusive).
    Luego usa la funcion para:
    a) Generar 5 numeros aleatorios entre 1 y 100
    b) Generar 5 numeros aleatorios entre 50 y 100
    c) Generar 5 numeros aleatorios entre -10 y 10
    d) Simular la temperatura aleatoria de un dia en La Paz (entre -2 y 25 grados)
       durante 7 dias de la semana

    DATOS DE EJEMPLO:
    No se necesitan datos, es aleatorio.

    RESULTADO ESPERADO:
    Entre 1 y 100: 45, 78, 12, 93, 67 (ejemplo, seran aleatorios)
    Entre 50 y 100: 62, 88, 55, 71, 94 (ejemplo)
    Entre -10 y 10: -3, 7, -8, 2, 0 (ejemplo)
    Temperaturas La Paz: 15 C, 8 C, 22 C, 3 C, 18 C, -1 C, 12 C

    CONCEPTOS USADOS: Math.random(), Math.floor(), Math.ceil(), funciones, template literals
*/

// Tu codigo aqui:


// ------------------------------------------------------------
// EJERCICIO 6: Calcular hipotenusa de un triangulo rectangulo
// ------------------------------------------------------------

/*
    TITULO: Calcular la hipotenusa usando el Teorema de Pitagoras

    ENUNCIADO:
    Escribe un programa que calcule la hipotenusa de un triangulo
    rectangulo dados los dos catetos, usando el Teorema de Pitagoras:
    hipotenusa = sqrt(catetoA^2 + catetoB^2)

    a) Calcula la hipotenusa con catetos 3 y 4 (deberia dar 5)
    b) Calcula la hipotenusa con catetos 5 y 12 (deberia dar 13)
    c) Calcula la hipotenusa con catetos 8 y 15 (deberia dar 17)
    d) Crea una funcion calcularHipotenusa(catetoA, catetoB) que retorne
       la hipotenusa redondeada a 2 decimales
    e) Usa la funcion con catetos 7 y 10

    DATOS DE EJEMPLO:
    const catetoA1 = 3;
    const catetoB1 = 4;
    const catetoA2 = 5;
    const catetoB2 = 12;
    const catetoA3 = 8;
    const catetoB3 = 15;

    RESULTADO ESPERADO:
    Triangulo 1: catetos 3 y 4, hipotenusa = 5
    Triangulo 2: catetos 5 y 12, hipotenusa = 13
    Triangulo 3: catetos 8 y 15, hipotenusa = 17
    Triangulo 4: catetos 7 y 10, hipotenusa = 12.21

    CONCEPTOS USADOS: Math.sqrt(), Math.pow() o **, toFixed(), Number(), funciones
*/

// Tu codigo aqui:
