# Lección 31 - Condicionales

## Objetivo de aprendizaje

Aprender a tomar decisiones en JavaScript mediante estructuras condicionales. Al finalizar esta lección, serás capaz de crear programas que ejecuten diferentes bloques de código según se cumplan o no ciertas condiciones.

**Prerrequisitos:** Lecciones 25-30 (console, vinculación HTML, variables, tipos de datos, operadores, conversión de tipos).

---

## ¿Qué aprenderemos?

- Qué es una condición y por qué es importante
- Las estructuras `if`, `if...else` e `if...else if...else`
- Condiciones anidadas
- Operadores lógicos combinados (`&&`, `||`, `!`)
- La estructura `switch`
- El operador ternario
- Buenas prácticas y errores comunes

---

## 1. ¿Qué es una condición?

Una **condición** es una expresión que se evalúa como `true` (verdadero) o `false` (falso). Según el resultado, el programa decide qué camino seguir.

```
¿Está lloviendo?
  ├── Sí (true)  → Llevo paraguas
  └── No (false) → No llevo paraguas
```

En programación, una condición es como una pregunta que el programa responde para decidir qué hacer.

---

## 2. Expresiones booleanas

Las expresiones booleanas son aquellas que producen un valor `true` o `false`. Se construyen usando operadores de comparación:

```javascript
const edad = 20;

edad > 18;     // true
edad < 18;     // false
edad >= 18;    // true
edad <= 18;    // false
edad === 20;   // true (igualdad estricta)
edad !== 20;   // false (desigualdad estricta)
```

> **Nota:** Siempre usa `===` en lugar de `==`. El operador `===` compara valor y tipo, mientras que `==` puede hacer conversiones implícitas.

---

## 3. La estructura if

La estructura más básica para tomar decisiones:

```javascript
if (condición) {
    // Este código se ejecuta SOLO si la condición es true
}
```

**Diagrama de flujo:**
```
    ¿Condición?
       │
  ┌────┴────┐
  │ true    │ false
  ▼         │
[Ejecutar] │
  │         │
  └────┬────┘
       ▼
   Continúa...
```

**Ejemplo:**
```javascript
const temperatura = 35;

if (temperatura > 30) {
    console.log("Hace mucho calor en Santa Cruz!");
}
// Salida: "Hace mucho calor en Santa Cruz!"
```

---

## 4. La estructura if...else

Cuando necesitamos dos caminos: uno si la condición es verdadera y otro si es falsa:

```javascript
if (condición) {
    // Código si es true
} else {
    // Código si es false
}
```

**Diagrama de flujo:**
```
    ¿Condición?
       │
  ┌────┴────┐
  │ true    │ false
  ▼         ▼
[Bloque A] [Bloque B]
  │         │
  └────┬────┘
       ▼
   Continúa...
```

**Ejemplo:**
```javascript
const edadAcceso = 16;

if (edadAcceso >= 18) {
    console.log("Puedes ingresar al evento");
} else {
    console.log("Lo siento, necesitas ser mayor de 18 para ingresar");
}
// Salida: "Lo siento, necesitas ser mayor de 18 para ingresar"
```

---

## 5. La estructura if...else if...else

Cuando hay más de dos posibilidades:

```javascript
if (condición1) {
    // Se ejecuta si condición1 es true
} else if (condición2) {
    // Se ejecuta si condición2 es true
} else {
    // Se ejecuta si ninguna condición anterior fue true
}
```

**Diagrama de flujo:**
```
    ¿Condición1?
       │
  ┌────┴────┐
  │ true    │ false
  ▼         │
[Bloque A]  ▼
        ¿Condición2?
           │
      ┌────┴────┐
      │ true    │ false
      ▼         ▼
  [Bloque B] [Bloque C]
      │         │
      └────┬────┘
           ▼
       Continúa...
```

**Ejemplo:**
```javascript
const numero = 7;

if (numero > 0) {
    console.log("El número es positivo");
} else if (numero < 0) {
    console.log("El número es negativo");
} else {
    console.log("El número es cero");
}
// Salida: "El número es positivo"
```

---

## 6. Condiciones anidadas

Podemos colocar un `if` dentro de otro `if`:

```javascript
const edad = 19;
const tieneCarnet = true;

if (edad >= 18) {
    if (tieneCarnet) {
        console.log("Puede ingresar al parqueo universitario");
    } else {
        console.log("Necesita obtener su carnet estudiantil primero");
    }
} else {
    console.log("Aún no tienes la edad mínima");
}
```

> **Consejo:** No anides más de 2-3 niveles. Si necesitas más, considera simplificar con operadores lógicos.

---

## 7. Combinación de operadores lógicos

Los operadores lógicos nos permiten crear condiciones más complejas:

| Operador | Nombre   | Descripción                                     |
|----------|----------|-------------------------------------------------|
| `&&`     | AND      | Ambas condiciones deben ser `true`               |
| `\|\|`   | OR       | Al menos una condición debe ser `true`           |
| `!`      | NOT      | Invierte el valor (`true` → `false` y viceversa)|

**Ejemplo con AND (&&):**
```javascript
const nota = 75;
const asistencia = 85;

if (nota >= 51 && asistencia >= 80) {
    console.log("Estudiante aprobado");
}
```

**Ejemplo con OR (||):**
```javascript
const tieneBeca = false;
const tieneDescuento = true;

if (tieneBeca || tieneDescuento) {
    console.log("Tiene derecho a descuento");
}
```

**Ejemplo con NOT (!):**
```javascript
const esFinDeSemana = false;

if (!esFinDeSemana) {
    console.log("Es día laboral, hay clases");
}
```

---

## 8. La estructura switch

Cuando comparamos una misma variable contra muchos valores específicos, `switch` es más legible que muchos `else if`:

```javascript
switch (expresión) {
    case valor1:
        // código si expresión === valor1
        break;
    case valor2:
        // código si expresión === valor2
        break;
    default:
        // código si ningún caso coincide
}
```

**Diagrama de flujo:**
```
        Expresión
           │
    ┌──────┼──────┐
    ▼      ▼      ▼
 case 1  case 2  default
    │      │      │
    ▼      ▼      ▼
  [A]    [B]    [C]
  break  break
```

**Ejemplo:**
```javascript
const diaNumero = 3;

switch (diaNumero) {
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miércoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    default:
        console.log("Día inválido");
}
// Salida: "Miércoles"
```

---

## 9. El operador ternario

Es una forma corta de escribir un `if...else` simple:

```javascript
// Sintaxis
condición ? valorSiVerdadero : valorSiFalso;
```

**Equivalencia:**
```javascript
// Con if...else
let estado;
if (edad >= 18) {
    estado = "Mayor de edad";
} else {
    estado = "Menor de edad";
}

// Con ternario (exactamente lo mismo)
const estado = edad >= 18 ? "Mayor de edad" : "Menor de edad";
```

**Ejemplo:**
```javascript
const puntuacion = 85;
const resultado = puntuacion >= 51 ? "Aprobado" : "Reprobado";
console.log(resultado); // "Aprobado"
```

---

## 10. ¿Cuándo usar if y cuándo usar switch?

| Situación                                   | Usar     |
|---------------------------------------------|----------|
| Rangos (mayor que, menor que, entre)        | `if`     |
| Condiciones complejas o combinadas          | `if`     |
| Diferentes variables en las condiciones     | `if`     |
| Un mismo valor contra muchos casos exactos  | `switch` |
| 3 o más valores discretos conocidos         | `switch` |
| Necesitas legibilidad con muchos casos      | `switch` |

**Usa `if` cuando trabajas con rangos:**
```javascript
const nota = 72;

if (nota >= 90) {
    console.log("A");
} else if (nota >= 80) {
    console.log("B");
} else if (nota >= 70) {
    console.log("C");
}
```

**Usa `switch` cuando trabajas con valores específicos:**
```javascript
const letra = "B";

switch (letra) {
    case "A": console.log("90-100"); break;
    case "B": console.log("80-89"); break;
    case "C": console.log("70-79"); break;
    default:  console.log("No válido");
}
```

---

## 11. Buenas prácticas

### Usa `===` en lugar de `==`
```javascript
// MALO: == hace conversión de tipos
5 == "5";  // true (puede causar bugs)

// BUENO: === compara valor y tipo
5 === "5"; // false (predecible)
```

### Usa nombres descriptivos
```javascript
// MALO
if (n >= 51) { ... }

// BUENO
const MINIMO_APROBACION = 51;
if (nota >= MINIMO_APROBACION) { ... }
```

### Mantén las condiciones simples
```javascript
// MALO: todo en una línea
if (nota >= 51 && asistencia >= 80 || tieneExcepcion) { ... }

// BUENO: divide en variables
const aprobóNota = nota >= 51;
const aprobóAsistencia = asistencia >= 80;
const tieneExcepcion = true;

if ((aprobóNota && aprobóAsistencia) || tieneExcepcion) { ... }
```

### No anides demasiado
```javascript
// Evita más de 2-3 niveles de anidamiento
// Usa operadores lógicos para simplificar
```

### Siempre incluye `default` en `switch`
```javascript
switch (opcion) {
    case "A": ... break;
    case "B": ... break;
    default: console.log("Opción no válida"); // Siempre incluir
}
```

---

## 12. Errores comunes

### Error 1: Usar `=` en lugar de `===`
```javascript
// MALO: = ASIGNA, no compara
if (edad = 18) { ... }  // Siempre será true!

// BUENO: === COMPARA
if (edad === 18) { ... }
```

### Error 2: Olvidar las llaves `{}`
```javascript
// MALO: solo la primera línea depende del if
if (valor > 5)
    console.log("Mayor");
    console.log("Siempre se ejecuta"); // BUG!

// BUENO: usa llaves siempre
if (valor > 5) {
    console.log("Mayor");
    console.log("Todo dentro del bloque");
}
```

### Error 3: Olvidar `break` en `switch`
```javascript
// MALO: se ejecutan todos los casos siguientes
switch (opcion) {
    case "A":
        console.log("A");
    // Sin break, continúa a "B"!
    case "B":
        console.log("B");
        break;
}

// BUENO: siempre incluye break
switch (opcion) {
    case "A":
        console.log("A");
        break;
    case "B":
        console.log("B");
        break;
}
```

### Error 4: Comparar con `==` en lugar de `===`
```javascript
// MALO: convierte tipos antes de comparar
0 == "";     // true
null == undefined; // true

// BUENO: compara valor y tipo
0 === "";          // false
null === undefined; // false
```

### Error 5: No cubrir todos los casos
```javascript
// MALO: qué pasa si opcion es "Z"?
switch (opcion) {
    case "A": ... break;
    case "B": ... break;
    // Falta default!
}

// BUENO: siempre incluye default
switch (opcion) {
    case "A": ... break;
    case "B": ... break;
    default: console.log("Opción no válida");
}
```

---

## 13. Ejercicios prácticos

Todos los ejercicios están en el archivo `ejercicios.js`. A continuación el enunciado de cada uno.

### Ejercicio 1: ¿Puede votar?

Determina si una persona puede votar según su edad. En Bolivia, la mayoría de edad es 18 años.

**Datos:**
```javascript
const edadVotante = 17;
```

**Resultado esperado:**
```
"Aún no tienes edad para votar"
```

**Conceptos:** `if...else`, comparación con `>=`

---

### Ejercicio 2: ¿Aprobó el estudiante?

En el sistema universitario boliviano, la nota mínima para aprobar es 51 puntos sobre 100.

**Datos:**
```javascript
const nombreEstudiante = "Ana";
const notaFinal = 48;
```

**Resultado esperado:**
```
"Ana reprobó con 48 puntos. Nota mínima: 51"
```

**Conceptos:** `if...else`, concatenación o template literals

---

### Ejercicio 3: El mayor de tres números

Encuentra el mayor de tres números dados.

**Datos:**
```javascript
const a = 15;
const b = 32;
const c = 8;
```

**Resultado esperado:**
```
"El mayor de los tres números es: 32"
```

**Conceptos:** `if...else if...else`, condiciones anidadas, `&&`

---

### Ejercicio 4: Calculadora con switch

Crea una calculadora básica con las cuatro operaciones.

**Datos:**
```javascript
const operacion = "multiplicar";
const numero1 = 12;
const numero2 = 5;
```

**Resultado esperado:**
```
"12 multiplicar 5 = 60"
```

**Conceptos:** `switch`, `case`, `break`, `default`

---

### Ejercicio 5: Clasificar niveles de rendimiento

Clasifica el rendimiento según tareas completadas:

| Tareas      | Nivel        |
|-------------|--------------|
| Menos de 10 | Insuficiente |
| 10 a 24     | Suficiente   |
| 25 a 39     | Bueno        |
| 40 o más    | Excelente    |

**Datos:**
```javascript
const tareasCompletadas = 28;
```

**Resultado esperado:**
```
"Tareas: 28 - Rendimiento: Bueno"
```

**Conceptos:** `if...else if...else`, rangos numéricos

---

### Ejercicio 6: Año bisiesto

Determina si un año es bisiesto con estas reglas:
1. Es divisible entre 4
2. PERO NO es divisible entre 100
3. A MENOS QUE también sea divisible entre 400

**Datos:**
```javascript
const anio = 2024;
```

**Resultado esperado:**
```
"El año 2024 es bisiesto"
```

**Conceptos:** Condiciones anidadas, `&&`, `||`, operador módulo (`%`)

---

## 14. Reto adicional

Intenta combinar varios conceptos de esta lección en un solo programa:

**Reto: Sistema de evaluación estudiantil**

Crea un programa que:
1. Reciba el nombre de un estudiante y su nota (0-100)
2. Determine la calificación literal (A, B, C, D, F)
3. Determine si aprobó o reprobó
4. Genere un mensaje personalizado según la calificación
5. Use al menos un operador lógico combinado
6. Incluya un `switch` para mostrar un mensaje diferente por calificación

**Ejemplo de salida esperada:**
```
Estudiante: María
Nota: 82
Calificación: B
Estado: APROBADA
Mensaje: "María, muy buen desempeño! Sigue así."
```

---

## 15. Resumen de la lección

| Estructura       | Uso principal                                     |
|------------------|----------------------------------------------------|
| `if`             | Ejecutar código si una condición es verdadera      |
| `if...else`      | Dos caminos posibles                               |
| `if...else if...else` | Múltiples condiciones (rangos)                |
| Condiciones anidadas | Decisiones dentro de decisiones               |
| `&&`, `\|\|`, `!` | Combinar condiciones en una sola expresión        |
| `switch`         | Comparar un valor contra muchos casos específicos  |
| Operador ternario | `if...else` corto en una línea                   |

**Reglas de oro:**
- Usa siempre `===` en lugar de `==`
- Usa llaves `{}` siempre, incluso en bloques de una línea
- No olvides `break` en `switch`
- Incluye `default` en `switch`
- No anides más de 2-3 niveles

---

## 16. Siguiente lección

En la **Lección 32** aprenderemos sobre **bucles** (`for`, `while`, `do...while`), que nos permiten repetir bloques de código múltiples veces. Los bucles, combinados con las condicionales que aprendiste hoy, te darán un control total sobre el flujo de tus programas.
