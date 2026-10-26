# Lección 25 - Introducción a JavaScript y la Consola

## Objetivo de aprendizaje

Al finalizar esta lección, comprenderás qué es JavaScript, cómo se diferencia de HTML y CSS, y aprenderás a usar la consola del navegador para mostrar mensajes, advertencias e información usando los métodos básicos de `console`.

---

## ¿Qué aprenderemos?

- Qué es JavaScript y para qué se usa
- Diferencias entre HTML, CSS y JavaScript
- Dónde se ejecuta JavaScript
- Cómo abrir y usar la consola del navegador
- Los métodos `console.log()`, `console.warn()`, `console.error()` y `console.info()`
- Cómo escribir comentarios en el código
- Errores de sintaxis comunes y cómo evitarlos

---

## 1. ¿Qué es JavaScript?

JavaScript es un **lenguaje de programación** que se ejecuta en el navegador web. Fue creado en 1995 por Brendan Eich y se ha convertido en uno de los lenguajes más populares del mundo.

**Características principales:**

- Es un lenguaje **interpretado** (no necesita compilación)
- Se ejecuta **en el navegador** del usuario
- Permite crear **páginas web interactivas y dinámicas**
- Es **multiplataforma** (funciona en Windows, Mac, Linux, móviles)
- Es el lenguaje más usado en el desarrollo web

**Ejemplos de lo que puedes hacer con JavaScript:**

- Validar formularios antes de enviarlos
- Crear animaciones y efectos visuales
- Mostrar/ocultar elementos dinámicamente
- Crear juegos en el navegador
- Construir aplicaciones web completas (Facebook, Gmail, YouTube)

---

## 2. Diferencias entre HTML, CSS y JavaScript

Cada tecnología tiene un propósito específico en el desarrollo web:

| Tecnología | Propósito | Ejemplo |
|------------|-----------|---------|
| **HTML** | Estructura y contenido | Títulos, párrafos, imágenes, enlaces |
| **CSS** | Diseño y presentación | Colores, fuentes, espaciado, diseño |
| **JavaScript** | Comportamiento e interactividad | Clics, validaciones, animaciones dinámicas |

**Analogía:**

Imagina una casa:
- **HTML** es la estructura (paredes, techo, puertas)
- **CSS** es la decoración (pintura, muebles, alfombras)
- **JavaScript** es la electricidad y plomería (luces que se encienden, agua que corre)

---

## 3. ¿Dónde se ejecuta JavaScript?

JavaScript puede ejecutarse en dos lugares:

### 3.1 En el navegador (Frontend)

Se ejecuta directamente en el navegador del usuario (Chrome, Firefox, Edge, Safari).

**Ejemplo:**
```javascript
alert("¡Hola desde el navegador!");
```

### 3.2 En el servidor (Backend)

Con Node.js, JavaScript puede ejecutarse en servidores, similar a PHP o Python.

**Ejemplo:**
```javascript
// Este código se ejecuta en el servidor
const servidor = "Node.js";
console.log("Servidor iniciado con " + servidor);
```

---

## 4. La consola del navegador

La **consola del navegador** es una herramienta para desarrolladores que permite:

- Ver mensajes del código JavaScript
- Detectar errores en el código
- Probar código JavaScript en tiempo real
- Depurar (debug) aplicaciones

### ¿Cómo abrir la consola?

**Método 1: Teclado**
- Presiona `F12` en tu teclado
- O presiona `Ctrl + Shift + I` (Windows/Linux)
- O presiona `Cmd + Option + I` (Mac)

**Método 2: Menú contextual**
- Haz clic derecho en cualquier parte de la página
- Selecciona **"Inspeccionar"** o **"Inspect"**
- Ve a la pestaña **"Console"** o **"Consola"**

**Método 3: Menú del navegador**
- Chrome: Menú → Más herramientas → Herramientas de desarrollador
- Firefox: Menú → Más herramientas → Herramientas de desarrollo web

---

## 5. Métodos de la consola

JavaScript ofrece varios métodos para mostrar información en la consola:

### console.log()

Muestra información general en la consola. Es el método más usado.

**Sintaxis:**
```javascript
console.log("mensaje");
```

**Ejemplos:**
```javascript
// Mostrar un mensaje simple
console.log("Hola, mundo");

// Mostrar números
console.log(25);

// Mostrar operaciones matemáticas
console.log(10 + 5);

// Mostrar múltiples valores
console.log("Nombre:", "María");
console.log("Edad:", 20);
```

**Salida esperada:**
```
Hola, mundo
25
15
Nombre: María
Edad: 20
```

---

### console.warn()

Muestra mensajes de **advertencia** en color amarillo. Se usa para alertar sobre posibles problemas que no son críticos.

**Sintaxis:**
```javascript
console.warn("mensaje de advertencia");
```

**Ejemplo:**
```javascript
console.warn("Advertencia: El campo de email está vacío");
console.warn("Advertencia: La sesión expirará en 5 minutos");
```

**Salida esperada:**
```
⚠️ Advertencia: El campo de email está vacío
⚠️ Advertencia: La sesión expirará en 5 minutos
```

---

### console.error()

Muestra mensajes de **error** en color rojo. Se usa para indicar problemas críticos que impiden el funcionamiento del código.

**Sintaxis:**
```javascript
console.error("mensaje de error");
```

**Ejemplo:**
```javascript
console.error("Error: No se pudo conectar con el servidor");
console.error("Error: El archivo no existe");
```

**Salida esperada:**
```
❌ Error: No se pudo conectar con el servidor
❌ Error: El archivo no existe
```

---

### console.info()

Muestra mensajes **informativos**. Es similar a `console.log()` pero semánticamente se usa para dar información adicional.

**Sintaxis:**
```javascript
console.info("mensaje informativo");
```

**Ejemplo:**
```javascript
console.info("Información: El curso inicia el 1 de marzo");
console.info("Información: Quedan 15 cupos disponibles");
```

**Salida esperada:**
```
ℹ️ Información: El curso inicia el 1 de marzo
ℹ️ Información: Quedan 15 cupos disponibles
```

---

### Tabla comparativa de métodos de consola

| Método | Color | Uso | Nivel de severidad |
|--------|-------|-----|-------------------|
| `console.log()` | Negro/Blanco | Información general | Normal |
| `console.warn()` | Amarillo | Advertencias | Medio |
| `console.error()` | Rojo | Errores críticos | Alto |
| `console.info()` | Negro/Blanco | Información adicional | Informativo |

---

## 6. Comentarios en JavaScript

Los comentarios son texto que JavaScript **ignora completamente**. Sirven para explicar el código a otros programadores (o a ti mismo en el futuro).

### Comentarios de una sola línea

Empiezan con `//` y continúan hasta el final de la línea.

**Sintaxis:**
```javascript
// Este es un comentario de una sola línea
console.log("Hola"); // Este comentario está al final de una línea de código
```

**Ejemplo:**
```javascript
// Mostrar el nombre del estudiante
console.log("Nombre: María");

// Mostrar la edad del estudiante
console.log("Edad: 20 años");

var precio = 150; // El precio está en bolivianos (Bs)
```

### Comentarios de múltiples líneas

Empiezan con `/*` y terminan con `*/`. Pueden abarcar varias líneas.

**Sintaxis:**
```javascript
/*
  Este es un comentario
  de múltiples líneas.
  Puede tener tantas líneas como necesites.
*/
```

**Ejemplo:**
```javascript
/*
  Programa: Registro de estudiantes
  Autor: Profesor de JavaScript
  Fecha: Octubre 2026
  
  Este programa muestra información básica
  de los estudiantes en la consola del navegador.
*/

console.log("Sistema de registro iniciado");
```

**¿Cuándo usar cada tipo?**

- **Una sola línea (`//`):** Para explicar una línea específica de código
- **Múltiples líneas (`/* */`):** Para explicar bloques de código completos, encabezados de archivos, o para desactivar código temporalmente

---

## 7. Errores de sintaxis comunes

Los **errores de sintaxis** ocurren cuando escribes código que JavaScript no puede entender. Son como errores ortográficos en un idioma.

### Error 1: Olvidar las comillas en strings

```javascript
// ❌ MAL - Error: Hola no está definido
console.log(Hola, mundo);

// ✅ BIEN - Las comillas indican que es texto
console.log("Hola, mundo");
```

**Explicación:** Sin comillas, JavaScript piensa que `Hola` es el nombre de una variable, no texto.

---

### Error 2: Escribir mal los nombres de las funciones

```javascript
// ❌ MAL - Error: console.lgo no es una función
console.lgo("Hola");

// ❌ MAL - Error: JavaScript distingue mayúsculas y minúsculas
console.Log("Hola");

// ✅ BIEN
console.log("Hola");
```

**Explicación:** JavaScript es **case-sensitive** (distingue mayúsculas de minúsculas). `log` es diferente de `Log`.

---

### Error 3: Olvidar cerrar los paréntesis

```javascript
// ❌ MAL - Error: Unexpected token
console.log("Hola"

// ✅ BIEN
console.log("Hola");
```

**Explicación:** Cada paréntesis de apertura `(` debe tener su paréntesis de cierre `)`.

---

### Error 4: Usar comillas incorrectamente

```javascript
// ❌ MAL - Error: Las comillas no coinciden
console.log("Hola');

// ❌ MAL - Error: Hola sin comillas se interpreta como variable
console.log(Hola);

// ✅ BIEN
console.log("Hola");
```

**Explicación:** Las comillas de apertura y cierre deben ser del mismo tipo (ambas dobles o ambas simples).

---

### Error 5: Olvidar el punto y coma (opcional pero recomendado)

```javascript
// ❌ MAL (aunque funciona, no es buena práctica)
console.log("Hola")
console.log("Mundo")

// ✅ BIEN
console.log("Hola");
console.log("Mundo");
```

**Explicación:** Aunque JavaScript puede funcionar sin punto y coma, es una buena práctica usarlo consistentemente.

---

## 8. Errores comunes y cómo evitarlos

| Error común | Cómo evitarlo |
|-------------|---------------|
| Olvidar comillas en strings | Siempre usa `" "` o `' '` para texto |
| Escribir mal nombres de funciones | Revisa la ortografía y mayúsculas |
| Olvidar cerrar paréntesis | Cuenta los paréntesis de apertura y cierre |
| Confundir `=` con `==` | `=` es asignación, `==` es comparación |
| Usar variables no declaradas | Siempre declara con `var`, `let` o `const` |
| No abrir la consola al depurar | Siempre ten F12 abierto mientras programas |

**Consejos para evitar errores:**

1. **Abre siempre la consola** (F12) mientras programas
2. **Lee los mensajes de error** - Te dicen exactamente qué línea tiene el problema
3. **Escribe código despacio** - Es mejor escribir correcto que rápido
4. **Usa comentarios** - Explica qué hace cada parte del código
5. **Prueba frecuentemente** - Ejecuta el código después de cada cambio

---

## 9. Ejercicios prácticos

### Ejercicio 1: Mensaje de bienvenida

**Enunciado:**  
Crea un programa que muestre un mensaje de bienvenida al curso de JavaScript en la consola.

**Datos de ejemplo:**
- Nombre del curso: "Fundamentos de Desarrollo Web"
- Lección: 25
- Año: 2026

**Resultado esperado:**
```
=== Bienvenido al Curso ===
Curso: Fundamentos de Desarrollo Web
Lección: 25
Año: 2026
```

**Conceptos usados:**
- `console.log()`
- Strings con comillas dobles
- Múltiples llamadas a console

**Solución:**
```javascript
console.log("=== Bienvenido al Curso ===");
console.log("Curso: Fundamentos de Desarrollo Web");
console.log("Lección: 25");
console.log("Año: 2026");
```

---

### Ejercicio 2: Datos personales

**Enunciado:**  
Muestra en la consola 3 datos personales ficticios de un estudiante boliviano usando `console.log()`.

**Datos de ejemplo:**
- Nombre completo
- Edad
- Ciudad de Bolivia

**Resultado esperado:**
```
Nombre: Ana María Rodríguez
Edad: 21 años
Ciudad: Santa Cruz de la Sierra
```

**Conceptos usados:**
- `console.log()`
- Strings
- Datos ficticios realistas

**Solución:**
```javascript
console.log("Nombre: Ana María Rodríguez");
console.log("Edad: 21 años");
console.log("Ciudad: Santa Cruz de la Sierra");
```

---

### Ejercicio 3: Advertencia y error

**Enunciado:**  
Crea un programa que muestre:
1. Un mensaje informativo sobre el sistema
2. Una advertencia sobre un campo vacío
3. Un error de conexión simulado

**Datos de ejemplo:**
- Información: Estado del sistema
- Advertencia: Campo de formulario vacío
- Error: Problema de conexión

**Resultado esperado:**
```
ℹ️ Información: Sistema de registro iniciado correctamente
⚠️ Advertencia: El campo 'teléfono' está vacío
❌ Error: No se pudo conectar con la base de datos
```

**Conceptos usados:**
- `console.info()`
- `console.warn()`
- `console.error()`
- Diferentes niveles de mensajes

**Solución:**
```javascript
console.info("Información: Sistema de registro iniciado correctamente");
console.warn("Advertencia: El campo 'teléfono' está vacío");
console.error("Error: No se pudo conectar con la base de datos");
```

---

### Ejercicio 4: Código comentado

**Enunciado:**  
Escribe un programa que muestre información de un producto, pero con comentarios explicativos que describan qué hace cada parte del código. Usa tanto comentarios de una línea como de múltiples líneas.

**Datos de ejemplo:**
- Producto: Cuaderno universitario
- Precio: 25 Bs
- Cantidad: 10 unidades

**Resultado esperado:**
```
=== Información del Producto ===
Producto: Cuaderno universitario
Precio: 25 Bs
Cantidad disponible: 10 unidades
```

**Conceptos usados:**
- Comentarios de una línea (`//`)
- Comentarios de múltiples líneas (`/* */`)
- `console.log()`
- Documentación del código

**Solución:**
```javascript
/*
  Programa: Información de producto
  Descripción: Muestra datos de un producto en la consola
*/

// Mostrar el título de la sección
console.log("=== Información del Producto ===");

// Mostrar el nombre del producto
console.log("Producto: Cuaderno universitario");

// Mostrar el precio en bolivianos
console.log("Precio: 25 Bs");

// Mostrar la cantidad disponible
console.log("Cantidad disponible: 10 unidades");
```

---

## 10. Reto adicional

**Reto:** Crea un programa completo que simule el registro de un estudiante en un sistema. Tu programa debe:

1. Mostrar un mensaje de bienvenida con `console.info()`
2. Mostrar 4 datos del estudiante con `console.log()`:
   - Nombre completo
   - Carnet de identidad
   - Carrera
   - Universidad
3. Mostrar una advertencia con `console.warn()` sobre datos confidenciales
4. Mostrar un mensaje de éxito con `console.log()`
5. Incluir comentarios explicativos en todo el código

**Ejemplo de resultado esperado:**
```
ℹ️ Información: Sistema de registro de estudiantes v1.0
Nombre: Carlos Mendoza Ruiz
Carnet de identidad: 12345678
Carrera: Ingeniería Informática
Universidad: Universidad Mayor de San Simón
⚠️ Advertencia: Estos datos son confidenciales
✅ Registro completado exitosamente
```

---

## 11. Resumen de la lección

En esta lección aprendimos:

✅ **Qué es JavaScript:** El lenguaje de programación de la web que permite crear páginas interactivas

✅ **Diferencias entre HTML, CSS y JavaScript:** Cada uno tiene un rol específico (estructura, diseño, comportamiento)

✅ **Dónde se ejecuta JavaScript:** En el navegador (frontend) y en el servidor (backend con Node.js)

✅ **Cómo usar la consola del navegador:** Abrirla con F12 o clic derecho → Inspeccionar

✅ **Métodos de la consola:**
- `console.log()` - Información general
- `console.warn()` - Advertencias
- `console.error()` - Errores
- `console.info()` - Información adicional

✅ **Comentarios en JavaScript:**
- Una línea: `//`
- Múltiples líneas: `/* */`

✅ **Errores de sintaxis comunes:** Comillas faltantes, paréntesis sin cerrar, nombres mal escritos

---

## 12. Siguiente lección

En la próxima lección aprenderemos sobre **variables en JavaScript**: cómo declarar variables con `var`, `let` y `const`, cómo asignar valores, y los diferentes tipos de datos (strings, números, booleanos).

**Conceptos clave que veremos:**
- Declaración de variables
- Tipos de datos primitivos
- Operadores básicos
- Buenas prácticas de nombrado

¡Nos vemos en la siguiente lección! 🚀
