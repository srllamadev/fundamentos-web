// ============================================================
// EJERCICIOS - LECCION 42 - JSON
// ============================================================
// Resuelve cada ejercicio en este archivo.
// NO mires las soluciones hasta haber intentado resolverlos.
// ============================================================

// ------------------------------------------------------------
// EJERCICIO 1: Crear un objeto y convertirlo a JSON
// ------------------------------------------------------------
// Enunciado:
// Crea un objeto llamado "estudiante" con las siguientes propiedades:
// - nombre (string): "Valeria Condori"
// - edad (number): 21
// - carrera (string): "Ing. de Sistemas"
// - universidad (string): "UMSA"
// - activo (boolean): true
// - notas (array): [85, 92, 78, 88]
//
// Luego convierte el objeto a texto JSON usando JSON.stringify()
// y muestra el resultado con formato legible (indentacion de 2 espacios).
//
// Resultado esperado:
//   El resultado de JSON.stringify() debe ser un string (typeof === "string")
//   El JSON formateado debe mostrar todas las propiedades del objeto
//   La propiedad "notas" debe aparecer como un array en el JSON
//
// Conceptos usados: objetos, JSON.stringify(), indentacion

// Tu codigo aqui:


// ------------------------------------------------------------
// EJERCICIO 2: Convertir un string JSON a un objeto
// ------------------------------------------------------------
// Enunciado:
// Dado el siguiente string JSON, conviartelo a un objeto JavaScript
// y muestra la informacion del estudiante en consola:
//
const jsonEstudiante = '{"nombre": "Carlos Mamani", "edad": 20, "carrera": "Medicina", "universidad": "UMSA", "semestre": 4, "promedio": 78}';
//
// Pasos:
// 1. Usa JSON.parse() para convertir el string en un objeto
// 2. Muestra el nombre del estudiante
// 3. Muestra la carrera que estudia
// 4. Muestra un mensaje: "[nombre] estudia [carrera] en [universidad], semestre [semestre], promedio: [promedio]"
//
// Resultado esperado:
//   Carlos Mamani estudia Medicina en UMSA, semestre 4, promedio: 78
//   typeof del resultado de JSON.parse() debe ser "object"
//
// Conceptos usados: JSON.parse(), acceso a propiedades, template literals

// Tu codigo aqui:


// ------------------------------------------------------------
// EJERCICIO 3: Crear un array de objetos y serializarlo
// ------------------------------------------------------------
// Enunciado:
// Crea un array llamado "productos" con 4 productos de la libreria.
// Cada producto debe ser un objeto con: id, nombre, precio (en Bs.), stock.
//
// Datos de ejemplo:
//   Producto 1: id 1, "Cuaderno universitario 100 hojas", precio 15.50, stock 200
//   Producto 2: id 2, "Lapiz HB", precio 2.00, stock 500
//   Producto 3: id 3, "Goma blanca", precio 3.50, stock 150
//   Producto 4: id 4, "Regla 30cm", precio 5.00, stock 100
//
// Luego:
// 1. Convierte el array a JSON usando JSON.stringify()
// 2. Convierte el JSON de vuelta a un array con JSON.parse()
// 3. Recorre el array recuperado y muestra cada producto con su nombre y precio
// 4. Calcula el valor total del inventario (precio * stock de cada producto, sumado)
//
// Resultado esperado:
//   Recorrer debe mostrar los 4 productos
//   Valor total del inventario: (15.50*200) + (2*500) + (3.50*150) + (5*100) = 3100 + 1000 + 525 + 500 = 5125 Bs.
//
// Conceptos usados: arrays de objetos, JSON.stringify(), JSON.parse(), iteracion, calculos

// Tu codigo aqui:


// ------------------------------------------------------------
// EJERCICIO 4: Trabajar con un objeto anidado en JSON
// ------------------------------------------------------------
// Enunciado:
// Dado el siguiente JSON que representa datos de un estudiante con
// informacion anidada, parsealo y muestra la informacion solicitada:
//
const jsonAnidado = `{
    "estudiante": {
        "nombre": "Sofia Quispe",
        "edad": 22,
        "direccion": {
            "calle": "Av. Arce",
            "numero": "2150",
            "zona": "Sopocachi",
            "ciudad": "La Paz"
        },
        "calificaciones": {
            "matematicas": 85,
            "fisica": 78,
            "programacion": 95,
            "baseDeDatos": 88
        }
    }
}`;
//
// Pasos:
// 1. Parsea el JSON a un objeto JavaScript
// 2. Muestra el nombre completo del estudiante
// 3. Muestra la direccion completa (calle, zona, ciudad)
// 4. Calcula el promedio de las calificaciones
// 5. Determina si aprobo (promedio >= 51)
// 6. Encuentra la calificacion mas alta y la mas baja
//
// Resultado esperado:
//   Nombre: Sofia Quispe
//   Direccion: Av. Arce, Sopocachi, La Paz
//   Promedio: 86.5
//   Estado: Aprobado
//   Nota mas alta: 95 (programacion)
//   Nota mas baja: 78 (fisica)
//
// Conceptos usados: JSON.parse(), objetos anidados, Object.values(), calculos

// Tu codigo aqui:


// ------------------------------------------------------------
// EJERCICIO 5: Identificar JSON valido e invalido
// ------------------------------------------------------------
// Enunciado:
// Analiza los siguientes strings e indica cuales son JSON valido
// y cuales no. Para los invalidos, explica por que no son valido.
// Usa try...catch con JSON.parse() para verificar.
//
const candidatos = [
    '{"nombre": "Ana", "edad": 21}',
    "{'nombre': 'Ana', 'edad': 21}",
    '{nombre: "Ana", edad: 21}',
    '{"nombre": "Ana", "edad": 21,}',
    '{"nombre": "Ana", "telefono": null, "activo": true}',
    '{"notas": [85, 92, 78]}',
    '{nombre: Ana, edad: 21}',
    '{"fecha": "2026-03-15", "valor": NaN}'
];
//
// Para cada candidato:
// 1. Intenta parsearlo con JSON.parse() dentro de un try...catch
// 2. Si funciona, muestra "VALIDO" y el resultado
// 3. Si falla, muestra "INVALIDO" y la razon
//
// Resultado esperado:
//   Candidato 1: VALIDO - objeto con string y number
//   Candidato 2: INVALIDO - usa comillas simples
//   Candidato 3: INVALIDO - claves sin comillas y valor string sin comillas
//   Candidato 4: INVALIDO - coma al final (trailing comma)
//   Candidato 5: VALIDO - acepta null y booleanos
//   Candidato 6: VALIDO - arrays son permitidos
//   Candidato 7: INVALIDO - claves y valores sin comillas
//   Candidato 8: INVALIDO - NaN no es valido en JSON
//
// Conceptos usados: JSON.parse(), try...catch, reglas de sintaxis JSON

// Tu codigo aqui:


// ------------------------------------------------------------
// EJERCICIO 6: Manejo de errores al parsear JSON
// ------------------------------------------------------------
// Enunciado:
// Crea una funcion llamada "parsearDatos" que reciba un string JSON
// y devuelva un objeto con la siguiente estructura:
//   { exito: true/false, datos: objeto_parseado o null, error: string_error o null }
//
// La funcion debe:
// 1. Intentar parsear el JSON con try...catch
// 2. Si tiene exito, devolver { exito: true, datos: resultado, error: null }
// 3. Si falla, devolver { exito: false, datos: null, error: mensaje_de_error }
//
// Prueba la funcion con los siguientes casos:
//
const casosPrueba = [
    '{"nombre": "Ana", "edad": 21}',
    "{'nombre': 'Ana'}",
    '{"productos": [{"id": 1, "nombre": "Cuaderno"}]}',
    "texto cualquiera",
    "",
    '{"fecha": "2026-01-15", "calificaciones": [85, 90, 78]}'
];
//
// Para cada caso, muestra:
//   "Caso [n]: exito=[true/false], datos=[...], error=[...]"
//
// Resultado esperado:
//   Caso 1: exito=true, datos={nombre: "Ana", edad: 21}, error=null
//   Caso 2: exito=false, datos=null, error=[mensaje]
//   Caso 3: exito=true, datos={productos: [...]}, error=null
//   Caso 4: exito=false, datos=null, error=[mensaje]
//   Caso 5: exito=false, datos=null, error=[mensaje]
//   Caso 6: exito=true, datos={fecha: "2026-01-15", calificaciones: [...]}, error=null
//
// Conceptos usados: funciones, try...catch, objetos, retornos condicionales

// Tu codigo aqui:


// ------------------------------------------------------------
// EJERCICIO 7: Convertir informacion de productos a JSON
// ------------------------------------------------------------
// Enunciado:
// Crea un objeto que represente una tienda con la siguiente estructura:
// - nombre (string): "Libreria UMSA"
// - direccion (objeto): { calle, numero, zona, ciudad }
// - productos (array de 3 objetos): cada uno con id, nombre, precio, stock
// - contacto (objeto): { telefono, email }
// - fechaApertura (objeto Date): la fecha actual
//
// Pasos:
// 1. Crea el objeto completo
// 2. Conviertelo a JSON con JSON.stringify() con formato legible (2 espacios)
// 3. Muestra el JSON resultante
// 4. Convierte el JSON de vuelta a objeto con JSON.parse()
// 5. Verifica que la fecha se convirtio a string (no es un Date)
// 6. Convierte la fecha de vuelta a objeto Date y muestrala formateada
//
// Resultado esperado:
//   El JSON debe mostrar la estructura completa con indentacion
//   La fecha debe aparecer como string ISO en el JSON
//   Al recuperar, la fecha debe ser un string
//   Al convertir a Date, debe mostrar la fecha formateada
//
// Conceptos usados: objetos anidados, arrays de objetos, JSON.stringify(), JSON.parse(),
//                   serializacion de fechas, Date

// Tu codigo aqui:


// ------------------------------------------------------------
// EJERCICIO 8: Recuperar datos JSON y calcular resultados
// ------------------------------------------------------------
// Enunciado:
// Dado el siguiente JSON que representa las calificaciones de
// estudiantes de la UMSA, recuperalo y realiza los calculos:
//
const jsonCalificaciones = `[
    {"id": 1, "nombre": "Ana Martinez", "carrera": "Ing. Informatica", "notas": [85, 92, 78, 88]},
    {"id": 2, "nombre": "Carlos Lopez", "carrera": "Ing. Civil", "notas": [45, 52, 48, 50]},
    {"id": 3, "nombre": "Maria Flores", "carrera": "Medicina", "notas": [95, 88, 92, 97]},
    {"id": 4, "nombre": "Pedro Quispe", "carrera": "Derecho", "notas": [60, 55, 62, 58]},
    {"id": 5, "nombre": "Sofia Condori", "carrera": "Ing. Informatica", "notas": [78, 82, 75, 80]}
]`;
//
// Pasos:
// 1. Parsea el JSON a un array de objetos
// 2. Para cada estudiante, calcula su promedio (usando un bucle)
// 3. Determina si aprobo o reprobo (nota minima para aprobar en Bolivia: 51)
// 4. Muestra una lista con: nombre, carrera, promedio, estado (Aprobado/Reprobado)
// 5. Calcula el promedio general de toda la clase (todas las notas combinadas)
// 6. Encuentra al estudiante con el promedio mas alto
// 7. Encuentra al estudiante con el promedio mas bajo
// 8. Cuenta cuantos aprobaron y cuantos reprobaron
// 9. Convierte el resumen final a JSON
//
// Resultado esperado:
//   Lista de estudiantes con su estado
//   Promedio general de la clase
//   Mejor estudiante: Maria Flores (promedio 93)
//   Peor estudiante: Carlos Lopez (promedio 48.75)
//   Aprobados: 3, Reprobados: 2
//   El resumen final como JSON valido
//
// Conceptos usados: JSON.parse(), arrays de objetos, bucles, condicionales,
//                   calculos, JSON.stringify(), funciones

// Tu codigo aqui:
