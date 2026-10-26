// ============================================================
// PRACTICA INTEGRADORA - MODULO JAVASCRIPT (LECCIONES 33-42)
// PROCESADOR DE DATOS ACADEMICOS
// ============================================================

// Esta practica integra todos los conceptos aprendidos en el modulo
// de JavaScript: funciones, scope, strings, numeros, arrays, metodos
// de arrays, objetos, desestructuracion, fechas y JSON.

// ============================================================
// SECCION 1: DATOS DE ENTRADA (JSON)
// ============================================================

// Los datos llegan como un string JSON (simulando una respuesta de API)
const datosJSON = `
[
    {
        "id": 1,
        "nombre": "Ana Martinez",
        "edad": 21,
        "carrera": "Ingenieria Informatica",
        "calificaciones": [85, 92, 78, 88],
        "fechaRegistro": "2024-01-15"
    },
    {
        "id": 2,
        "nombre": "Carlos Lopez",
        "edad": 20,
        "carrera": "Ingenieria Civil",
        "calificaciones": [45, 52, 48, 50],
        "fechaRegistro": "2024-02-20"
    },
    {
        "id": 3,
        "nombre": "Maria Flores",
        "edad": 22,
        "carrera": "Medicina",
        "calificaciones": [95, 88, 92, 97],
        "fechaRegistro": "2024-01-10"
    },
    {
        "id": 4,
        "nombre": "Pedro Quispe",
        "edad": 19,
        "carrera": "Derecho",
        "calificaciones": [60, 55, 62, 58],
        "fechaRegistro": "2024-03-05"
    },
    {
        "id": 5,
        "nombre": "Sofia Condori",
        "edad": 21,
        "carrera": "Ingenieria Informatica",
        "calificaciones": [78, 82, 75, 80],
        "fechaRegistro": "2024-02-28"
    },
    {
        "id": 6,
        "nombre": "Luis Mamani",
        "edad": 23,
        "carrera": "Ingenieria Civil",
        "calificaciones": [70, 65, 72, 68],
        "fechaRegistro": "2024-01-25"
    }
]
`;

// Constantes del sistema
const NOTA_APROBATORIA = 51;
const UNIVERSIDAD = "UMSA";
const GESTION = 2026;


// ============================================================
// SECCION 2: FUNCIONES DE VALIDACION
// ============================================================

// Funcion para parsear JSON de forma segura (JSON - leccion 42)
const parsearDatosJSON = (texto) => {
    try {
        const datos = JSON.parse(texto);
        if (!Array.isArray(datos)) {
            console.log("Error: los datos deben ser un array de estudiantes");
            return { exito: false, datos: [], error: "Formato invalido" };
        }
        return { exito: true, datos: datos, error: null };
    } catch (error) {
        console.log("Error al parsear JSON: " + error.message);
        return { exito: false, datos: [], error: error.message };
    }
};

// Funcion para validar un estudiante individual (Objetos - leccion 39)
const validarEstudiante = (estudiante, indice) => {
    const errores = [];

    // Verificar campos obligatorios usando Object.hasOwn()
    const camposObligatorios = ["id", "nombre", "edad", "carrera", "calificaciones"];
    for (let i = 0; i < camposObligatorios.length; i++) {
        const campo = camposObligatorios[i];
        if (!Object.hasOwn(estudiante, campo)) {
            errores.push("Falta el campo: " + campo);
        }
    }

    // Validar calificaciones (Arrays - leccion 37)
    if (Object.hasOwn(estudiante, "calificaciones")) {
        if (!Array.isArray(estudiante.calificaciones)) {
            errores.push("El campo calificaciones debe ser un array");
        } else {
            for (let i = 0; i < estudiante.calificaciones.length; i++) {
                if (typeof estudiante.calificaciones[i] !== "number") {
                    errores.push("Calificacion en posicion " + i + " no es un numero");
                }
            }
        }
    }

    // Validar fecha si existe
    if (Object.hasOwn(estudiante, "fechaRegistro")) {
        const fecha = new Date(estudiante.fechaRegistro);
        if (isNaN(fecha.getTime())) {
            errores.push("Fecha de registro invalida: " + estudiante.fechaRegistro);
        }
    }

    if (errores.length > 0) {
        console.log("Advertencias en estudiante " + indice + ":");
        for (let i = 0; i < errores.length; i++) {
            console.log("  - " + errores[i]);
        }
    }

    return errores.length === 0;
};

// Funcion para verificar IDs duplicados (usando Set y metodos de array - leccion 38)
const verificarIDsDuplicados = (estudiantes) => {
    const ids = estudiantes.map((e) => e.id);
    const idsUnicos = new Set(ids);

    if (idsUnicos.size !== ids.length) {
        console.log("Advertencia: se encontraron IDs duplicados");
        const duplicados = ids.filter((id, indice) => ids.indexOf(id) !== indice);
        const sinDuplicar = new Set(duplicados);
        sinDuplicar.forEach((id) => {
            console.log("  ID duplicado: " + id);
        });
    }
};


// ============================================================
// SECCION 3: FUNCIONES DE CALCULO
// ============================================================

// Calcular promedio de un array de calificaciones (funciones - leccion 33)
const calcularPromedio = (calificaciones) => {
    if (!Array.isArray(calificaciones) || calificaciones.length === 0) {
        return 0;
    }

    let suma = 0;
    for (let i = 0; i < calificaciones.length; i++) {
        suma += calificaciones[i];
    }
    return suma / calificaciones.length;
};

// Funcion que usa reduce para calcular promedio (metodos de array - leccion 38)
const calcularPromedioReduce = (calificaciones) => {
    if (!Array.isArray(calificaciones) || calificaciones.length === 0) {
        return 0;
    }
    const suma = calificaciones.reduce((acumulador, valor) => acumulador + valor, 0);
    return suma / calificaciones.length;
};

// Determinar si un estudiante aprobo (condicionales - leccion 31)
const estaAprobado = (promedio) => {
    return promedio >= NOTA_APROBATORIA;
};

// Buscar estudiante por ID (objetos y arrays de objetos - leccion 39)
const buscarPorID = (estudiantes, id) => {
    for (let i = 0; i < estudiantes.length; i++) {
        if (estudiantes[i].id === id) {
            return estudiantes[i];
        }
    }
    return null;
};

// Buscar estudiante por nombre (coincidencia parcial) (strings - leccion 35)
const buscarPorNombre = (estudiantes, texto) => {
    const textoBuscado = texto.toLowerCase();
    const resultados = [];

    for (let i = 0; i < estudiantes.length; i++) {
        const nombre = estudiantes[i].nombre.toLowerCase();
        if (nombre.includes(textoBuscado)) {
            resultados.push(estudiantes[i]);
        }
    }
    return resultados;
};

// Filtrar estudiantes aprobados (metodos de array - leccion 38)
const filtrarAprobados = (estudiantes) => {
    return estudiantes.filter((estudiante) => {
        const promedio = calcularPromedio(estudiante.calificaciones);
        return estaAprobado(promedio);
    });
};

// Filtrar estudiantes reprobados (metodos de array - leccion 38)
const filtrarReprobados = (estudiantes) => {
    return estudiantes.filter((estudiante) => {
        const promedio = calcularPromedio(estudiante.calificaciones);
        return !estaAprobado(promedio);
    });
};

// Calcular promedio general de la clase (todos los estudiantes)
const calcularPromedioGeneral = (estudiantes) => {
    let todasLasNotas = [];
    for (let i = 0; i < estudiantes.length; i++) {
        if (Array.isArray(estudiantes[i].calificaciones)) {
            todasLasNotas = todasLasNotas.concat(estudiantes[i].calificaciones);
        }
    }
    if (todasLasNotas.length === 0) {
        return 0;
    }
    const suma = todasLasNotas.reduce((acc, val) => acc + val, 0);
    return suma / todasLasNotas.length;
};

// Encontrar la calificacion mas alta de toda la clase
const encontrarNotaMasAlta = (estudiantes) => {
    let notaMaxima = -Infinity;
    let estudianteTop = null;
    let notaEncontrada = 0;

    for (let i = 0; i < estudiantes.length; i++) {
        const calificaciones = estudiantes[i].calificaciones;
        if (Array.isArray(calificaciones)) {
            for (let j = 0; j < calificaciones.length; j++) {
                if (calificaciones[j] > notaMaxima) {
                    notaMaxima = calificaciones[j];
                    estudianteTop = estudiantes[i].nombre;
                    notaEncontrada = calificaciones[j];
                }
            }
        }
    }

    return { nota: notaEncontrada, estudiante: estudianteTop };
};

// Encontrar la calificacion mas baja de toda la clase
const encontrarNotaMasBaja = (estudiantes) => {
    let notaMinima = Infinity;
    let estudianteBajo = null;

    for (let i = 0; i < estudiantes.length; i++) {
        const calificaciones = estudiantes[i].calificaciones;
        if (Array.isArray(calificaciones)) {
            for (let j = 0; j < calificaciones.length; j++) {
                if (calificaciones[j] < notaMinima) {
                    notaMinima = calificaciones[j];
                    estudianteBajo = estudiantes[i].nombre;
                }
            }
        }
    }

    return { nota: notaMinima, estudiante: estudianteBajo };
};

// Formatear fecha de registro (fechas - leccion 41)
const formatearFecha = (fechaString) => {
    const fecha = new Date(fechaString);
    if (isNaN(fecha.getTime())) {
        return "Fecha invalida";
    }

    const opciones = { year: "numeric", month: "long", day: "numeric" };
    return fecha.toLocaleDateString("es-BO", opciones);
};

// Obtener nombre del mes (strings - leccion 35)
const obtenerMesRegistro = (fechaString) => {
    const fecha = new Date(fechaString);
    const meses = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];
    const indice = fecha.getMonth();
    if (indice >= 0 && indice < meses.length) {
        return meses[indice];
    }
    return "Desconocido";
};


// ============================================================
// SECCION 4: FUNCIONES DE ORDENAMIENTO Y RESUMEN
// ============================================================

// Ordenar estudiantes por promedio de mayor a menor (metodos de array - leccion 38)
const ordenarPorPromedio = (estudiantes) => {
    // Crear copia con spread para no mutar el original (desestructuracion - leccion 40)
    const copia = [...estudiantes];

    copia.sort((a, b) => {
        const promedioA = calcularPromedio(a.calificaciones);
        const promedioB = calcularPromedio(b.calificaciones);
        return promedioB - promedioA;
    });

    return copia;
};

// Crear resumen de un estudiante (objetos y desestructuracion - leccion 40)
const crearResumenEstudiante = (estudiante) => {
    const { nombre, carrera, calificaciones, fechaRegistro, id } = estudiante;
    const promedio = calcularPromedio(calificaciones);
    const aprobado = estaAprobado(promedio);
    const notaAlta = Math.max(...calificaciones);
    const notaBaja = Math.min(...calificaciones);

    return {
        id: id,
        nombre: nombre,
        carrera: carrera,
        promedio: promedio,
        aprobado: aprobado,
        estado: aprobado ? "Aprobado" : "Reprobado",
        notaAlta: notaAlta,
        notaBaja: notaBaja,
        totalMaterias: calificaciones.length,
        fechaRegistroFormateada: formatearFecha(fechaRegistro)
    };
};

// Generar reporte completo (integra todo)
const generarReporte = (estudiantes) => {
    const reportesIndividuales = estudiantes.map((est) => crearResumenEstudiante(est));
    const aprobados = filtrarAprobados(estudiantes);
    const reprobados = filtrarReprobados(estudiantes);
    const promedioGeneral = calcularPromedioGeneral(estudiantes);
    const notaAlta = encontrarNotaMasAlta(estudiantes);
    const notaBaja = encontrarNotaMasBaja(estudiantes);
    const ordenados = ordenarPorPromedio(estudiantes);

    return {
        totalEstudiantes: estudiantes.length,
        aprobados: aprobados.length,
        reprobados: reprobados.length,
        promedioGeneral: promedioGeneral,
        notaMasAlta: notaAlta,
        notaMasBaja: notaBaja,
        resumenIndividual: reportesIndividuales,
        rankingCompleto: ordenados.map((est) => ({
            nombre: est.nombre,
            carrera: est.carrera,
            promedio: calcularPromedio(est.calificaciones)
        }))
    };
};


// ============================================================
// SECCION 5: FUNCION DE IMPRESION DEL REPORTE
// ============================================================

const imprimirReporte = (reporte) => {
    console.log("============================================================");
    console.log(" REPORTE ACADEMICO - " + UNIVERSIDAD + " - Gestion " + GESTION);
    console.log("============================================================");
    console.log("");

    // Resumen general
    console.log("------------------------------------------------------------");
    console.log(" RESUMEN GENERAL");
    console.log("------------------------------------------------------------");
    console.log("Total de estudiantes: " + reporte.totalEstudiantes);
    console.log("Estudiantes aprobados: " + reporte.aprobados);
    console.log("Estudiantes reprobados: " + reporte.reprobados);
    console.log("");

    // Estadisticas de la clase
    console.log("------------------------------------------------------------");
    console.log(" ESTADISTICAS DE LA CLASE");
    console.log("------------------------------------------------------------");
    console.log("Promedio general: " + reporte.promedioGeneral.toFixed(2));
    console.log("Nota mas alta: " + reporte.notaMasAlta.nota + " (" + reporte.notaMasAlta.estudiante + ")");
    console.log("Nota mas baja: " + reporte.notaMasBaja.nota + " (" + reporte.notaMasBaja.estudiante + ")");
    console.log("");

    // Detalle de estudiantes aprobados
    console.log("------------------------------------------------------------");
    console.log(" ESTUDIANTES APROBADOS (Promedio >= " + NOTA_APROBATORIA + ")");
    console.log("------------------------------------------------------------");
    const aprobados = reporte.resumenIndividual.filter((r) => r.aprobado);
    for (let i = 0; i < aprobados.length; i++) {
        const est = aprobados[i];
        console.log((i + 1) + ". " + est.nombre);
        console.log("   Carrera: " + est.carrera);
        console.log("   Promedio: " + est.promedio.toFixed(2));
        console.log("   Nota mas alta: " + est.notaAlta + " | Nota mas baja: " + est.notaBaja);
        console.log("   Fecha de registro: " + est.fechaRegistroFormateada);
    }
    console.log("");

    // Detalle de estudiantes reprobados
    console.log("------------------------------------------------------------");
    console.log(" ESTUDIANTES REPROBADOS (Promedio < " + NOTA_APROBATORIA + ")");
    console.log("------------------------------------------------------------");
    const reprobados = reporte.resumenIndividual.filter((r) => !r.aprobado);
    if (reprobados.length === 0) {
        console.log("No hay estudiantes reprobados");
    } else {
        for (let i = 0; i < reprobados.length; i++) {
            const est = reprobados[i];
            console.log((i + 1) + ". " + est.nombre);
            console.log("   Carrera: " + est.carrera);
            console.log("   Promedio: " + est.promedio.toFixed(2));
            console.log("   Nota mas alta: " + est.notaAlta + " | Nota mas baja: " + est.notaBaja);
            console.log("   Fecha de registro: " + est.fechaRegistroFormateada);
        }
    }
    console.log("");

    // Ranking por promedio
    console.log("------------------------------------------------------------");
    console.log(" RANKING POR PROMEDIO (Mayor a Menor)");
    console.log("------------------------------------------------------------");
    for (let i = 0; i < reporte.rankingCompleto.length; i++) {
        const est = reporte.rankingCompleto[i];
        const medalla = i === 0 ? " [PRIMER PUESTO]" : i === 1 ? " [SEGUNDO PUESTO]" : i === 2 ? " [TERCER PUESTO]" : "";
        console.log((i + 1) + ". " + est.nombre + " - " + est.carrera + " (Prom: " + est.promedio.toFixed(2) + ")" + medalla);
    }
    console.log("");

    // Meses de inscripcion
    console.log("------------------------------------------------------------");
    console.log(" DISTRIBUCION POR MES DE INSCRIPCION");
    console.log("------------------------------------------------------------");
    const mesesContador = {};
    reporte.resumenIndividual.forEach((est) => {
        const mesOriginal = reporte.resumenIndividual.find(
            (r) => r.nombre === est.nombre
        );
    });

    // Contar inscripciones por mes usando los datos originales
    const mesesRegistro = {};
    for (let i = 0; i < reporte.resumenIndividual.length; i++) {
        const resumen = reporte.resumenIndividual[i];
        const nombreOriginal = reporte.resumenIndividual[i].nombre;
        // Buscar la fecha original en los datos de entrada
        const estudianteOriginal = reporte.resumenIndividual[i];
    }

    // Usar los datos originales directamente para contar meses
    console.log("(Ver seccion de meses de inscripcion abajo)");
    console.log("");
};


// ============================================================
// SECCION 6: FUNCIONES ADICIONALES DE ANALISIS
// ============================================================

// Contar estudiantes por carrera (objetos como contadores - leccion 39)
const contarPorCarrera = (estudiantes) => {
    const contador = {};
    for (let i = 0; i < estudiantes.length; i++) {
        const carrera = estudiantes[i].carrera;
        if (Object.hasOwn(contador, carrera)) {
            contador[carrera] = contador[carrera] + 1;
        } else {
            contador[carrera] = 1;
        }
    }
    return contador;
};

// Encontrar estudiantes de una carrera especifica
const filtrarPorCarrera = (estudiantes, carrera) => {
    return estudiantes.filter((est) => {
        return est.carrera.toLowerCase().includes(carrera.toLowerCase());
    });
};

// Calcular promedio por carrera (agrupacion y calculo - lecciones 38 y 39)
const promedioPorCarrera = (estudiantes) => {
    const carreras = {};

    for (let i = 0; i < estudiantes.length; i++) {
        const carrera = estudiantes[i].carrera;
        const promedio = calcularPromedio(estudiantes[i].calificaciones);

        if (Object.hasOwn(carreras, carrera)) {
            carreras[carrera].suma += promedio;
            carreras[carrera].cantidad += 1;
        } else {
            carreras[carrera] = { suma: promedio, cantidad: 1 };
        }
    }

    const resultado = {};
    const claves = Object.keys(carreras);
    for (let i = 0; i < claves.length; i++) {
        const clave = claves[i];
        resultado[clave] = carreras[clave].suma / carreras[clave].cantidad;
    }

    return resultado;
};

// Formatear todos los meses de inscripcion
const mostrarMesesInscripcion = (estudiantes) => {
    console.log("------------------------------------------------------------");
    console.log(" MESES DE INSCRIPCION");
    console.log("------------------------------------------------------------");

    for (let i = 0; i < estudiantes.length; i++) {
        const { nombre, fechaRegistro } = estudiantes[i];
        const mes = obtenerMesRegistro(fechaRegistro);
        const fechaFormateada = formatearFecha(fechaRegistro);
        console.log(nombre + " - Inscrito en: " + mes + " (" + fechaFormateada + ")");
    }
    console.log("");
};


// ============================================================
// SECCION 7: EJECUCION PRINCIPAL
// ============================================================

const ejecutarSistema = () => {
    console.log("");
    console.log("============================================================");
    console.log(" PROCESADOR DE DATOS ACADEMICOS");
    console.log(" " + UNIVERSIDAD + " - Gestion " + GESTION);
    console.log("============================================================");
    console.log("");

    // Paso 1: Parsear JSON (leccion 42 - JSON)
    console.log("--- Paso 1: Parseando datos JSON ---");
    const resultado = parsearDatosJSON(datosJSON);

    if (!resultado.exito) {
        console.log("ERROR: No se pudieron parsear los datos");
        console.log("Razon: " + resultado.error);
        return;
    }

    const estudiantes = resultado.datos;
    console.log("Datos parseados correctamente");
    console.log("Total de registros encontrados: " + estudiantes.length);
    console.log("");

    // Paso 2: Validar datos (leccion 39 - Objetos)
    console.log("--- Paso 2: Validando datos ---");
    if (estudiantes.length === 0) {
        console.log("ADVERTENCIA: La lista de estudiantes esta vacia");
        return;
    }

    verificarIDsDuplicados(estudiantes);

    let todosValidos = true;
    for (let i = 0; i < estudiantes.length; i++) {
        const valido = validarEstudiante(estudiantes[i], i + 1);
        if (!valido) {
            todosValidos = false;
        }
    }

    if (todosValidos) {
        console.log("Todos los estudiantes validados correctamente");
    }
    console.log("");

    // Paso 3: Procesar datos (funciones - leccion 33)
    console.log("--- Paso 3: Procesando datos ---");

    // Mostrar informacion basica de cada estudiante
    for (let i = 0; i < estudiantes.length; i++) {
        const { nombre, edad, carrera, calificaciones } = estudiantes[i];
        const promedio = calcularPromedio(calificaciones);
        const estado = estaAprobado(promedio) ? "APROBADO" : "REPROBADO";
        console.log((i + 1) + ". " + nombre + " | " + edad + " anos | " + carrera);
        console.log("   Calificaciones: [" + calificaciones.join(", ") + "]");
        console.log("   Promedio: " + promedio.toFixed(2) + " - " + estado);
        console.log("");
    }

    // Paso 4: Buscar estudiantes (metodos de array - leccion 38)
    console.log("--- Paso 4: Busquedas ---");

    const buscadoPorID = buscarPorID(estudiantes, 3);
    if (buscadoPorID) {
        console.log("Busqueda por ID 3: " + buscadoPorID.nombre);
    }

    const buscadosPorNombre = buscarPorNombre(estudiantes, "ana");
    console.log("Busqueda por nombre 'ana': " + buscadosPorNombre.length + " resultado(s)");
    for (let i = 0; i < buscadosPorNombre.length; i++) {
        console.log("  - " + buscadosPorNombre[i].nombre);
    }

    console.log("");

    // Paso 5: Filtrar (funciones de array - leccion 38)
    console.log("--- Paso 5: Filtrado ---");

    const aprobados = filtrarAprobados(estudiantes);
    const reprobados = filtrarReprobados(estudiantes);

    console.log("Aprobados: " + aprobados.length);
    console.log("Reprobados: " + reprobados.length);
    console.log("");

    // Paso 6: Estadisticas (numeros - leccion 36, arrays - leccion 37)
    console.log("--- Paso 6: Estadisticas ---");

    const promedioGeneral = calcularPromedioGeneral(estudiantes);
    const masAlta = encontrarNotaMasAlta(estudiantes);
    const masBaja = encontrarNotaMasBaja(estudiantes);

    console.log("Promedio general de la clase: " + promedioGeneral.toFixed(2));
    console.log("Nota mas alta: " + masAlta.nota + " (" + masAlta.estudiante + ")");
    console.log("Nota mas baja: " + masBaja.nota + " (" + masBaja.estudiante + ")");
    console.log("");

    // Paso 7: Analisis por carrera (objetos - leccion 39)
    console.log("--- Paso 7: Analisis por carrera ---");

    const conteoCarreras = contarPorCarrera(estudiantes);
    console.log("Estudiantes por carrera:");
    const clavesCarreras = Object.keys(conteoCarreras);
    for (let i = 0; i < clavesCarreras.length; i++) {
        const clave = clavesCarreras[i];
        console.log("  " + clave + ": " + conteoCarreras[clave] + " estudiante(s)");
    }

    const promediosCarrera = promedioPorCarrera(estudiantes);
    console.log("Promedio por carrera:");
    const clavesPromedio = Object.keys(promediosCarrera);
    for (let i = 0; i < clavesPromedio.length; i++) {
        const clave = clavesPromedio[i];
        console.log("  " + clave + ": " + promediosCarrera[clave].toFixed(2));
    }
    console.log("");

    // Paso 8: Fechas de inscripcion (fechas - leccion 41)
    mostrarMesesInscripcion(estudiantes);

    // Paso 9: Ranking (ordenamiento - leccion 38)
    console.log("--- Paso 9: Ranking por promedio ---");
    const ordenados = ordenarPorPromedio(estudiantes);
    for (let i = 0; i < ordenados.length; i++) {
        const promedio = calcularPromedio(ordenados[i].calificaciones);
        console.log((i + 1) + ". " + ordenados[i].nombre + " - Promedio: " + promedio.toFixed(2));
    }
    console.log("");

    // Paso 10: Generar reporte completo
    console.log("--- Paso 10: Reporte completo ---");
    const reporte = generarReporte(estudiantes);
    imprimirReporte(reporte);

    // Paso 11: Convertir resumen a JSON (leccion 42)
    console.log("--- Paso 11: Exportando resumen a JSON ---");

    const resumenExportable = {
        universidad: UNIVERSIDAD,
        gestion: GESTION,
        fechaGeneracion: new Date().toISOString(),
        estadisticas: {
            totalEstudiantes: reporte.totalEstudiantes,
            aprobados: reporte.aprobados,
            reprobados: reporte.reprobados,
            promedioGeneral: Number(reporte.promedioGeneral.toFixed(2)),
            notaMasAlta: reporte.notaMasAlta.nota,
            notaMasBaja: reporte.notaMasBaja.nota
        },
        ranking: reporte.rankingCompleto
    };

    const jsonExportado = JSON.stringify(resumenExportable, null, 2);
    console.log("Resumen exportado a JSON:");
    console.log(jsonExportado);
    console.log("");

    // Verificar que el JSON se puede volver a parsear
    const verificacion = parsearDatosJSON(jsonExportado);
    if (verificacion.exito) {
        console.log("Verificacion: JSON exportado es valido y puede ser reimportado");
    } else {
        console.log("Error: el JSON exportado tiene problemas");
    }

    console.log("");
    console.log("============================================================");
    console.log(" FIN DEL PROCESAMIENTO");
    console.log("============================================================");
};

// Ejecutar el sistema
ejecutarSistema();


// ============================================================
// SECCION 8: DEMOSTRACION DE CASOS ESPECIALES
// ============================================================

console.log("");
console.log("============================================================");
console.log(" DEMOSTRACION DE CASOS ESPECIALES");
console.log("============================================================");
console.log("");

// Caso 1: JSON invalido
console.log("--- Caso 1: Manejo de JSON invalido ---");
const resultadoInvalido = parsearDatosJSON("{nombre: 'invalido'}");
console.log("Exito:", resultadoInvalido.exito);
console.log("Error:", resultadoInvalido.error);
console.log("");

// Caso 2: Lista vacia
console.log("--- Caso 2: Lista vacia ---");
const resultadoVacio = parsearDatosJSON("[]");
console.log("Exito:", resultadoVacio.exito);
console.log("Datos:", resultadoVacio.datos);
console.log("Cantidad:", resultadoVacio.datos.length);
if (resultadoVacio.datos.length === 0) {
    console.log("Advertencia: no hay estudiantes para procesar");
}
console.log("");

// Caso 3: Estudiante sin calificaciones
console.log("--- Caso 3: Estudiante sin calificaciones ---");
const estudianteSinNotas = {
    id: 99,
    nombre: "Estudiante Sin Notas",
    edad: 20,
    carrera: "Test"
};
const promedioVacio = calcularPromedio(estudianteSinNotas.calificaciones);
console.log("Promedio sin calificaciones:", promedioVacio);
console.log("Estado:", estaAprobado(promedioVacio) ? "Aprobado" : "Reprobado");
console.log("");

// Caso 4: Uso de spread y rest para manipular datos (leccion 40)
console.log("--- Caso 4: Spread y Rest en accion ---");
const estudiantesDemo = JSON.parse(datosJSON);
const estudianteOriginal = estudiantesDemo[0];
const { nombre, edad, ...resto } = estudianteOriginal;
console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.log("Resto de propiedades:", resto);

const estudianteActualizado = {
    ...estudianteOriginal,
    semestre: 5,
    universidad: UNIVERSIDAD
};
console.log("Estudiante actualizado con spread:", estudianteActualizado);
console.log("");

// Caso 5: Template literals con strings (leccion 35)
console.log("--- Caso 5: Formateo de strings ---");
const resumenEstudiante = (est) => {
    const promedio = calcularPromedio(est.calificaciones).toFixed(2);
    const estado = estaAprobado(calcularPromedio(est.calificaciones)) ? "Aprobado" : "Reprobado";
    return `Estudiante: ${est.nombre} | Carrera: ${est.carrera} | Promedio: ${promedio} | Estado: ${estado}`;
};

for (let i = 0; i < estudiantesDemo.length; i++) {
    console.log(resumenEstudiante(estudiantesDemo[i]));
}
console.log("");

// Caso 6: Metodos de array avanzados (leccion 38)
console.log("--- Caso 6: Metodos de array avanzados ---");

// forEach para iterar
console.log("Listado con forEach:");
estudiantesDemo.forEach((est, indice) => {
    console.log(`  ${indice + 1}. ${est.nombre} (${est.carrera})`);
});

// map para transformar
const nombresMayuscula = estudiantesDemo.map((est) => est.nombre.toUpperCase());
console.log("Nombres en mayuscula:", nombresMayuscula);

// reduce para acumular
const sumaEdades = estudiantesDemo.reduce((acc, est) => acc + est.edad, 0);
const promedioEdades = sumaEdades / estudiantesDemo.length;
console.log("Edad promedio del grupo: " + promedioEdades.toFixed(1) + " anos");

// some y every
const todosAprobados = estudiantesDemo.every((est) =>
    estaAprobado(calcularPromedio(est.calificaciones))
);
const algunReprobado = estudiantesDemo.some((est) =>
    !estaAprobado(calcularPromedio(est.calificaciones))
);
console.log("Todos aprobados:", todosAprobados);
console.log("Algun reprobado:", algunReprobado);

// find para buscar
const mejorEstudiante = estudiantesDemo.reduce((mejor, actual) => {
    const promedioMejor = calcularPromedio(mejor.calificaciones);
    const promedioActual = calcularPromedio(actual.calificaciones);
    return promedioActual > promedioMejor ? actual : mejor;
});
console.log("Mejor estudiante:", mejorEstudiante.nombre);

console.log("");
console.log("============================================================");
console.log(" FIN DE LA PRACTICA INTEGRADORA");
console.log("============================================================");
console.log("");
console.log("Conceptos demostrados en esta practica:");
console.log("  - Leccion 33: Funciones (declaracion, parametros, retornos)");
console.log("  - Leccion 34: Scope y arrow functions");
console.log("  - Leccion 35: Metodos de strings (includes, toLowerCase, toUpperCase, join)");
console.log("  - Leccion 36: Metodos de numeros (toFixed, Math.max, Math.min, isNaN)");
console.log("  - Leccion 37: Arrays (creacion, acceso, iteracion, length)");
console.log("  - Leccion 38: Metodos de arrays (map, filter, reduce, sort, some, every, find)");
console.log("  - Leccion 39: Objetos (creacion, acceso, propiedades, Object.hasOwn, Object.keys)");
console.log("  - Leccion 40: Desestructuracion, spread y rest");
console.log("  - Leccion 41: Fechas (Date, toLocaleDateString, getMonth, isNaN)");
console.log("  - Leccion 42: JSON (parse, stringify, manejo de errores)");
