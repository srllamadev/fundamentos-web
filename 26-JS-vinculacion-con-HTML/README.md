# Lección 26 - Vinculación de JavaScript con HTML

## Objetivo de aprendizaje

Al finalizar esta lección, serás capaz de vincular archivos JavaScript con páginas HTML de diferentes formas, entender cómo el navegador carga y ejecuta el código, y aplicar buenas prácticas de organización en tus proyectos web.

## ¿Qué aprenderemos?

- Las 3 formas de vincular JavaScript con HTML
- Cómo funciona la etiqueta `<script>`
- La diferencia entre JavaScript interno y externo
- Qué es el atributo `src` y cómo usar rutas relativas
- Dónde colocar la etiqueta `<script>` en el documento HTML
- Los atributos `defer` y `async` y cuándo usar cada uno
- Buenas prácticas de organización y separación de código

---

## 1. ¿Cómo se ejecuta JavaScript en el navegador?

JavaScript es un lenguaje que se ejecuta dentro del navegador. Para que el navegador sepa que hay código JavaScript en nuestra página, necesitamos indicárselo. Existen **3 formas principales** de hacerlo:

| Método | Descripción | Recomendado |
|--------|-------------|-------------|
| **Inline** (en línea) | Código escrito en atributos HTML como `onclick` | No |
| **Interno** | Código dentro de una etiqueta `<script>` en el HTML | Solo para pruebas |
| **Externo** | Código en un archivo `.js` separado vinculado con `<script src="...">` | Sí, siempre |

---

## 2. La etiqueta script

La etiqueta `<script>` le indica al navegador: "aquí hay código JavaScript que debes ejecutar".

### Sintaxis básica

```html
<!-- Script interno: código escrito directamente -->
<script>
    console.log("Hola desde JavaScript");
</script>

<!-- Script externo: referencia a un archivo .js -->
<script src="script.js"></script>
```

### Reglas importantes

- La etiqueta `<script>` **siempre debe cerrarse**: `<script src="archivo.js"></script>`
- NO se puede usar como etiqueta autocerrante: `<script src="archivo.js" />` (incorrecto)
- El navegador lee y ejecuta el código **de arriba hacia abajo**, línea por línea

---

## 3. JavaScript interno

Se escribe directamente dentro del HTML, entre etiquetas `<script>`.

### Ejemplo

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Mi Página</title>
    <script>
        console.log("Este código está escrito dentro del HTML");
        console.log("Se llama JavaScript interno");
    </script>
</head>
<body>
    <h1>Mi Página</h1>
</body>
</html>
```

### Ventajas

- Rápido para pruebas pequeñas
- No necesitas crear archivos adicionales

### Desventajas

- Mezcla la lógica (JavaScript) con la estructura (HTML)
- Difícil de mantener en proyectos grandes
- No se puede reutilizar en otras páginas
- No se guarda en caché por separado

---

## 4. JavaScript externo

Se escribe en un archivo separado con extensión `.js` y se vincula al HTML con el atributo `src`.

### Ejemplo de estructura

```
mi-proyecto/
├── index.html
└── script.js
```

### En index.html

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Mi Página</title>
</head>
<body>
    <h1>Mi Página</h1>
    <script src="script.js"></script>
</body>
</html>
```

### En script.js

```javascript
console.log("Este código viene de un archivo externo");
console.log("Es más fácil de mantener y reutilizar");
```

### Ventajas

- **Separación clara** entre estructura (HTML) y lógica (JavaScript)
- **Reutilizable**: el mismo archivo puede usarse en varias páginas HTML
- **Caché**: el navegador lo descarga una vez y lo guarda para futuras visitas
- **Mantenible**: más fácil de leer, editar y compartir

---

## 5. El atributo src y las rutas relativas

El atributo `src` (source = fuente) indica la **ruta** del archivo JavaScript. Funciona igual que el `src` de las imágenes.

### Rutas relativas

| Ruta | Significado |
|------|-------------|
| `src="script.js"` | Archivo en la misma carpeta que el HTML |
| `src="js/script.js"` | Archivo dentro de la subcarpeta `js/` |
| `src="js/app/main.js"` | Archivo dentro de `js/app/` |
| `src="../script.js"` | Archivo en la carpeta superior |

### Ejemplo con subcarpeta

```
mi-proyecto/
├── index.html
└── js/
    └── script.js
```

```html
<script src="js/script.js" defer></script>
```

### Errores comunes con rutas

```html
<!-- INCORRECTO: la carpeta no existe -->
<script src="carpeta-que-no-existe/script.js" defer></script>

<!-- INCORRECTO: usar href en lugar de src -->
<script href="script.js"></script>

<!-- INCORRECTO: escribir código dentro de src -->
<script src="console.log('Hola')"></script>
```

---

## 6. ¿Dónde colocar la etiqueta script?

### En el head

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Mi Página</title>
    <script src="script.js"></script>
</head>
<body>
    <h1>Hola</h1>
</body>
</html>
```

**Problema:** El navegador **pausa** la lectura del HTML para ejecutar el script. Si el script es grande, la página tarda más en mostrarse. Además, si el script intenta acceder a elementos del `<body>`, estos **aún no existen**.

### Antes de cerrar body

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Mi Página</title>
</head>
<body>
    <h1>Hola</h1>
    <script src="script.js"></script>
</body>
</html>
```

**Ventaja:** Todo el HTML ya fue leído cuando el script se ejecuta. Puede acceder a cualquier elemento sin problemas.

**Desventaja:** El script no empieza a descargarse hasta que todo el HTML se haya leído.

### Con el atributo defer

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Mi Página</title>
    <script src="script.js" defer></script>
</head>
<body>
    <h1>Hola</h1>
</body>
</html>
```

**Lo mejor de ambos mundos:**
- El script se descarga **en paralelo** mientras el HTML se lee
- Se ejecuta **después** de que todo el HTML se haya parseado
- Puedes colocarlo en el `<head>` sin problemas

---

## 7. El atributo async

`async` descarga el script en paralelo y lo ejecuta **inmediatamente** cuando termina la descarga, **sin esperar** a que el HTML termine de parsearse.

```html
<script src="analiticas.js" async></script>
```

### Cuándo usar async

- Scripts **independientes** que no necesitan tocar el HTML
- Google Analytics, publicidad, widgets de redes sociales
- Scripts que no dependen de otros scripts ni del DOM

### Cuándo NO usar async

- Scripts que necesitan acceder a elementos del DOM
- Scripts que dependen de otros scripts (async no respeta el orden)

---

## 8. Diferencias entre defer y async

| Característica | defer | async |
|----------------|-------|-------|
| Descarga en paralelo | Sí | Sí |
| Espera a que el HTML termine | Sí | No |
| Respeta el orden de scripts | Sí | No |
| Seguro para acceder al DOM | Sí | No |
| Uso recomendado | Scripts principales | Scripts independientes |

### Diagrama de ejecución

```
Sin atributo:
    HTML:  ──leer──leer──[PAUSA: ejecuta script]──leer──leer──fin

Con defer:
    HTML:  ──leer──leer──leer──leer──leer──fin
    JS:       ──descargar──┘                      └──ejecuta──┘

Con async:
    HTML:  ──leer──leer──leer──leer──leer──fin
    JS:       ──descargar──┘
               └──ejecuta──┘  (se ejecuta apenas termina la descarga)
```

### Resumen simple

- **defer**: "Descarga mientras lees, ejecuta cuando termines el HTML"
- **async**: "Descarga mientras lees, ejecuta en cuanto termines de descargar"

---

## 9. Buenas prácticas

1. **Usa archivos externos** (`.js`): separa la lógica de la estructura
2. **Usa `defer`**: es la forma más segura y eficiente de cargar scripts
3. **Coloca los scripts antes de `</body>` o en `<head>` con `defer`**
4. **Usa nombres descriptivos**: `main.js`, `formulario.js`, `validacion.js`
5. **Organiza tus scripts en carpetas**: `js/archivo.js`
6. **Un archivo = una responsabilidad**: no mezcles todo en un solo archivo
7. **Siempre cierra la etiqueta**: `<script src="..."></script>` (no autocerrante)

### Estructura recomendada

```
mi-proyecto/
├── index.html
├── contacto.html
└── js/
    ├── main.js        (código general del sitio)
    ├── formulario.js  (solo lógica de formularios)
    └── validacion.js  (solo lógica de validaciones)
```

---

## 10. Errores comunes

| Error | Ejemplo incorrecto | Corrección |
|-------|--------------------| -----------|
| No cerrar la etiqueta | `<script src="app.js">` | `<script src="app.js"></script>` |
| Usar `href` en lugar de `src` | `<script href="app.js"></script>` | `<script src="app.js"></script>` |
| Ruta incorrecta | `<script src="carpeta-mala/app.js">` | Verificar la ruta del archivo |
| Escribir código en `src` | `<script src="alert('hola')">` | Usar `src` solo para rutas |
| Script en head sin defer | `<script src="app.js"></script>` en `<head>` | Agregar `defer` o mover antes de `</body>` |
| Usar async con scripts dependientes | `<script src="a.js" async>` + `<script src="b.js" async>` | Usar `defer` para respetar el orden |

---

## 11. Ejercicios prácticos

### Ejercicio 1: Vinculación básica

Crea un archivo `index.html` y un archivo `saludo.js`. Vincula el archivo JS usando el atributo `defer`. El archivo `saludo.js` debe mostrar 3 mensajes en la consola.

**index.html:**
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 1</title>
</head>
<body>
    <h1>Ejercicio 1: Vinculación básica</h1>
    <script src="saludo.js" defer></script>
</body>
</html>
```

**saludo.js:**
```javascript
console.log("Hola, este es mi primer script externo");
console.log("La vinculación funciona correctamente");
console.log("Todo gracias al atributo defer");
```

**Salida esperada en consola:**
```
Hola, este es mi primer script externo
La vinculación funciona correctamente
Todo gracias al atributo defer
```

### Ejercicio 2: Script interno

Crea un archivo `index.html` con JavaScript interno. El script debe mostrar un mensaje de bienvenida y tu nombre en la consola.

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 2</title>
    <script>
        console.log("Bienvenido a mi página web");
        console.log("Estudiante: Tu Nombre Aquí");
    </script>
</head>
<body>
    <h1>Ejercicio 2: Script interno</h1>
</body>
</html>
```

**Salida esperada en consola:**
```
Bienvenido a mi página web
Estudiante: Tu Nombre Aquí
```

### Ejercicio 3: Múltiples scripts

Crea un archivo `index.html` que vincule 3 archivos JavaScript diferentes usando `defer`. Verifica que se ejecutan en el orden correcto.

**Estructura:**
```
ejercicio-3/
├── index.html
├── paso-1.js
├── paso-2.js
└── paso-3.js
```

**index.html:**
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 3</title>
</head>
<body>
    <h1>Ejercicio 3: Múltiples scripts</h1>
    <script src="paso-1.js" defer></script>
    <script src="paso-2.js" defer></script>
    <script src="paso-3.js" defer></script>
</body>
</html>
```

**paso-1.js:**
```javascript
console.log("Paso 1: Preparando los datos");
```

**paso-2.js:**
```javascript
console.log("Paso 2: Procesando la información");
```

**paso-3.js:**
```javascript
console.log("Paso 3: Mostrando los resultados");
```

**Salida esperada en consola (en orden):**
```
Paso 1: Preparando los datos
Paso 2: Procesando la información
Paso 3: Mostrando los resultados
```

### Ejercicio 4: Identificar errores de vinculación

Identifica y corrige los errores en los siguientes ejemplos:

```html
<!-- Error 1: etiqueta sin cerrar -->
<script src="app.js">

<!-- Corrección: -->
<script src="app.js"></script>
```

```html
<!-- Error 2: usando href en lugar de src -->
<script href="app.js"></script>

<!-- Corrección: -->
<script src="app.js"></script>
```

```html
<!-- Error 3: escribiendo código dentro de src -->
<script src="console.log('Hola')"></script>

<!-- Corrección: escribir el código en un archivo .js y vincularlo -->
<script src="app.js"></script>
```

```html
<!-- Error 4: script en el head sin defer (bloquea la carga) -->
<head>
    <script src="app.js"></script>
</head>

<!-- Corrección: agregar defer -->
<head>
    <script src="app.js" defer></script>
</head>
```

---

## 12. Reto adicional

Crea un proyecto con la siguiente estructura:

```
mi-sitio/
├── index.html
├── contacto.html
└── js/
    ├── comun.js       (mensajes que aparecen en todas las páginas)
    ├── inicio.js      (mensajes solo para la página de inicio)
    └── contacto.js    (mensajes solo para la página de contacto)
```

- `comun.js` debe mostrar: "Cargando sitio web..."
- `inicio.js` debe mostrar: "Bienvenido a la página de inicio"
- `contacto.js` debe mostrar: "Formulario de contacto listo"
- `index.html` debe vincular `comun.js` y `inicio.js` con `defer`
- `contacto.html` debe vincular `comun.js` y `contacto.js` con `defer`
- Al abrir `index.html` en la consola deben aparecer los mensajes de `comun.js` e `inicio.js`
- Al abrir `contacto.html` en la consola deben aparecer los mensajes de `comun.js` y `contacto.js`

---

## 13. Resumen de la lección

| Concepto | Descripción |
|----------|-------------|
| **3 formas de vincular JS** | Inline (atributos HTML), interno (`<script>` en HTML), externo (archivo `.js`) |
| **Método recomendado** | Archivo externo `.js` con la etiqueta `<script src="..." defer>` |
| **Etiqueta `<script>`** | Indica al navegador que hay código JavaScript |
| **Atributo `src`** | Indica la ruta del archivo `.js` (usa rutas relativas) |
| **Script en `<head>`** | Se ejecuta antes de que el HTML esté completo (puede causar problemas) |
| **Script antes de `</body>`** | Se ejecuta cuando todo el HTML ya fue leído (funciona bien) |
| **`defer`** | Descarga en paralelo, ejecuta después de parsear el HTML. Respeta el orden. |
| **`async`** | Descarga en paralelo, ejecuta en cuanto termina. No respeta el orden. |
| **Separación de código** | HTML = estructura, CSS = estilo, JS = comportamiento. Cada uno en su archivo. |

---

## 14. Siguiente lección

En la **lección 27** aprenderemos sobre **variables y constantes en JavaScript**: cómo almacenar datos en memoria usando `var`, `let` y `const`, y cuándo usar cada una.
