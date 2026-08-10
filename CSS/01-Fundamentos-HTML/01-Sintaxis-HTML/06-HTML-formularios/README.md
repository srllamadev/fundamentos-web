# 06 - Formularios: `<form>`, `<input>`, `<button>`, `<label>`

## ¿Qué aprendemos aquí?

En esta lección aprenderás a crear **formularios HTML**, que son la forma en que los usuarios envían información a través de una página web. Verás las etiquetas fundamentales: `<form>`, `<input>`, `<button>` y `<label>`, así como los tipos de datos más básicos.

---

## Código completo

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Yamil Navi- Ingeniero Industrial</title>
</head>
<body>

    <div>
        <h1>Yamil N</h1>
        <h2>Ingeniero Industrial | Especialista en Optimización de Procesos</h2>
        <p>Email: yamil.ejemplo@email.com | Tel: +591 7070707070 | La Paz, Bolivia</p>
    </div>

    <div>
        <h3>Perfil Profesional</h3>
        <p>Ingeniero industrial con más de 8 años de experiencia en la industria manufacturera y de logística.</p>
    </div>

    <div>
        <h3>Formulario de Contacto</h3>

        <form action="#" method="post">

            <div>
                <label for="nombre">Nombre completo:</label>
                <input type="text" id="nombre" name="nombre" placeholder="Escribe tu nombre completo" required>
            </div>

            <div>
                <label for="email">Correo electrónico:</label>
                <input type="email" id="email" name="email" placeholder="tucorreo@ejemplo.com" required>
            </div>

            <div>
                <label for="telefono">Teléfono de contacto:</label>
                <input type="tel" id="telefono" name="telefono" placeholder="+591 300 000 0000">
            </div>

            <div>
                <label for="empresa">Empresa:</label>
                <input type="text" id="empresa" name="empresa" placeholder="Nombre de tu empresa">
            </div>

            <div>
                <label for="asunto">Asunto:</label>
                <input type="text" id="asunto" name="asunto" placeholder="Motivo de tu mensaje" required>
            </div>

            <div>
                <label for="mensaje">Mensaje:</label>
                <input type="text" id="mensaje" name="mensaje" placeholder="Escribe tu mensaje aquí" required>
            </div>

            <div>
                <label for="password">Contraseña de verificación (opcional):</label>
                <input type="password" id="password" name="password" placeholder="Ingresa tu contraseña">
            </div>

            <div>
                <button type="submit">Enviar mensaje</button>
                <button type="reset">Limpiar formulario</button>
            </div>

        </form>
    </div>

</body>
</html>
```

---

## La etiqueta `<form>` - Contenedor del formulario

### Sintaxis

```html
<form action="#" method="post">
    <!-- Campos del formulario aquí -->
</form>
```

- `<form>` es el **contenedor principal** que agrupa todos los campos del formulario.
- Define **cómo** y **hacia dónde** se envían los datos.

### Atributos principales

| Atributo | Descripción | Ejemplo |
|----------|-------------|---------|
| `action` | URL a donde se envían los datos | `action="/enviar-formulario"` |
| `method` | Método HTTP de envío | `method="post"` o `method="get"` |
| `name` | Nombre del formulario | `name="formContacto"` |
| `id` | Identificador único | `id="formulario-contacto"` |

### Método GET vs POST

```html
<!-- GET: datos visibles en la URL (para búsquedas, filtros) -->
<form action="/buscar" method="get">
    <!-- Los datos se ven así: /buscar?nombre=Yamil&email=Yamil@email.com -->
</form>

<!-- POST: datos ocultos en el cuerpo de la petición (para información sensible) -->
<form action="/enviar" method="post">
    <!-- Los datos NO se ven en la URL -->
</form>
```

| Método | ¿Cuándo usarlo? | Seguridad | Uso típico |
|--------|-----------------|-----------|------------|
| GET | Datos no sensibles | Baja (visible en URL) | Búsquedas, filtros |
| POST | Datos sensibles | Mayor (ocultos) | Formularios de contacto, login, registro |

---

## La etiqueta `<label>` - Etiquetas de campo

### Sintaxis

```html
<label for="nombre">Nombre completo:</label>
```

- `<label>` define una **etiqueta descriptiva** para un campo del formulario.
- El atributo `for` debe coincidir con el `id` del campo que describe.

### ¿Por qué son importantes los `<label>`?

```html
<!-- BUENA PRÁCTICA: label conectado con input mediante for/id -->
<label for="email">Correo electrónico:</label>
<input type="email" id="email" name="email">

<!-- Al hacer clic en el texto "Correo electrónico:", el cursor se posiciona en el campo -->
```

| Razón | Detalle |
|-------|---------|
| **Accesibilidad** | Los lectores de pantalla leen la etiqueta al usuario |
| **Usabilidad** | Al hacer clic en la etiqueta, el campo se activa automáticamente |
| **UX** | El usuario sabe exactamente qué información debe ingresar |
| **SEO** | Ayuda a los motores de búsqueda a entender el formulario |

### Regla: siempre conecta `for` con `id`

```html
<!-- CORRECTO: el for del label coincide con el id del input -->
<label for="nombre">Nombre:</label>
<input type="text" id="nombre" name="nombre">

<!-- INCORRECTO: el for no coincide con ningún id -->
<label for="nombre">Nombre:</label>
<input type="text" id="nombres" name="nombre">
```

---

## La etiqueta `<input>` - Campos de entrada

### Sintaxis general

```html
<input type="tipo" id="identificador" name="nombre" placeholder="texto guía" required>
```

- `<input>` es una etiqueta **autocerrada** (no tiene `</input>`).
- Es el elemento más versátil de los formularios: su comportamiento cambia según el atributo `type`.

### Atributos comunes de `<input>`

| Atributo | Descripción | Ejemplo |
|----------|-------------|---------|
| `type` | Tipo de campo **(obligatorio)** | `type="text"` |
| `id` | Identificador único **(conectar con label)** | `id="nombre"` |
| `name` | Nombre del campo para el envío de datos | `name="nombre"` |
| `placeholder` | Texto de guía que desaparece al escribir | `placeholder="Tu nombre"` |
| `required` | Campo obligatorio | `required` |
| `value` | Valor predefinido | `value="Yamil"` |
| `disabled` | Campo desactivado | `disabled` |
| `readonly` | Solo lectura | `readonly` |
| `autocomplete` | Autocompletado | `autocomplete="on"` |

---

## Tipos de `<input>` que usamos

### 1. `type="text"` - Texto libre

```html
<label for="nombre">Nombre completo:</label>
<input type="text" id="nombre" name="nombre" placeholder="Escribe tu nombre completo" required>
```

- Acepta **cualquier texto**.
- Se muestra en una sola línea.
- Usado para: nombres, asuntos, campos cortos de texto.

### 2. `type="email"` - Correo electrónico

```html
<label for="email">Correo electrónico:</label>
<input type="email" id="email" name="email" placeholder="tucorreo@ejemplo.com" required>
```

- Valida automáticamente que el texto tenga formato de email (debe contener `@`).
- En dispositivos móviles muestra un teclado optimizado para emails.
- Usado para: campos de correo electrónico.

### 3. `type="tel"` - Teléfono

```html
<label for="telefono">Teléfono de contacto:</label>
<input type="tel" id="telefono" name="telefono" placeholder="+591 300 000 0000">
```

- En dispositivos móviles muestra un **teclado numérico**.
- No valida el formato por sí solo (se necesita JavaScript para eso).
- Usado para: números de teléfono.

### 4. `type="password"` - Contraseña

```html
<label for="password">Contraseña de verificación:</label>
<input type="password" id="password" name="password" placeholder="Ingresa tu contraseña">
```

- **Oculta los caracteres** que el usuario escribe (muestra puntos o asteriscos).
- Usado para: contraseñas, datos sensibles.

---

## Otros tipos de `<input>` útiles (para conocer)

| Tipo | Descripción | Ejemplo de uso |
|------|-------------|----------------|
| `text` | Texto libre | Nombre, asunto |
| `email` | Email con validación | Correo electrónico |
| `password` | Texto oculto | Contraseñas |
| `tel` | Teléfono | Número de contacto |
| `number` | Solo números | Cantidad, edad |
| `date` | Selector de fecha | Fecha de nacimiento |
| `url` | URL con validación | Sitio web personal |
| `search` | Campo de búsqueda | Barra de búsqueda |
| `checkbox` | Casilla de verificación | Aceptar términos |
| `radio` | Selección única | Elegir una opción |
| `file` | Subir archivos | Adjuntar CV |
| `hidden` | Campo oculto | Tokens de seguridad |
| `submit` | Botón de envío | Enviar formulario |
| `reset` | Botón de limpieza | Limpiar campos |

---

## La etiqueta `<button>` - Botones

### Sintaxis

```html
<button type="submit">Enviar mensaje</button>
```

### Tipos de botones

| Tipo | Descripción | Uso |
|------|-------------|-----|
| `type="submit"` | Envía el formulario al servidor | Botón "Enviar" |
| `type="reset"` | Limpia todos los campos del formulario | Botón "Limpiar" |
| `type="button"` | Botón genérico (no hace nada por defecto) | Se usa con JavaScript |

### Ejemplo de nuestro formulario

```html
<button type="submit">Enviar mensaje</button>
<button type="reset">Limpiar formulario</button>
```

- **Enviar**: envía todos los datos del formulario a la URL indicada en `action`.
- **Limpiar**: resetea todos los campos a sus valores iniciales.

---

## El atributo `required` - Campos obligatorios

```html
<input type="text" id="nombre" name="nombre" required>
```

- Indica que el campo **debe completarse** antes de enviar el formulario.
- Si el usuario intenta enviar sin llenar este campo, el navegador muestra un **mensaje de error** automático.
- No necesita valor (es un atributo booleano).

### Campos required en nuestro formulario

```html
<!-- Estos campos son obligatorios -->
<input type="text" id="nombre" name="nombre" required>
<input type="email" id="email" name="email" required>
<input type="text" id="asunto" name="asunto" required>
<input type="text" id="mensaje" name="mensaje" required>

<!-- Estos campos son opcionales (no tienen required) -->
<input type="tel" id="telefono" name="telefono">
<input type="text" id="empresa" name="empresa">
<input type="password" id="password" name="password">
```

---

## Estructura de un campo de formulario

Cada campo sigue este patrón:

```html
<div>                                          <!-- 1. Contenedor -->
    <label for="campo">Texto de etiqueta:</label>  <!-- 2. Etiqueta descriptiva -->
    <input type="tipo"                            <!-- 3. Campo de entrada -->
           id="campo"                             <!--    Conectado con label -->
           name="campo"                           <!--    Nombre para envío -->
           placeholder="Texto guía"               <!--    Pista para el usuario -->
           required>                              <!--    Obligatorio (opcional) -->
</div>
```

---

## Flujo de envío del formulario

```
1. Usuario llena los campos
2. Usuario hace clic en "Enviar" (button type="submit")
3. El navegador valida los campos required
4. Si todo está bien, los datos se envían a la URL en action
5. Los datos se envían con el método especificado (get/post)
```

---

## Buenas prácticas con formularios

| Buena práctica | Por qué |
|----------------|---------|
| Siempre usar `<label>` con cada campo | Accesibilidad y usabilidad |
| Conectar `for` del label con `id` del input | Para que funcionen juntos |
| Usar el `type` correcto | Validación automática y teclado apropiado en móviles |
| Agregar `placeholder` descriptivo | Guía al usuario sobre qué escribir |
| Marcar campos obligatorios con `required` | Evita envíos incompletos |
| Agrupar campos relacionados con `<div>` | Organiza visualmente el formulario |
| Usar `method="post"` para datos sensibles | Mayor seguridad |
| Dar nombres descriptivos a los `id` y `name` | Facilita el procesamiento de datos |

---

## Errores comunes

### Error 1: Input sin label

```html
<!-- INCORRECTO: el usuario no sabe qué escribir -->
<input type="text" id="nombre" name="nombre">

<!-- CORRECTO -->
<label for="nombre">Nombre completo:</label>
<input type="text" id="nombre" name="nombre">
```

### Error 2: Label sin conexión con input

```html
<!-- INCORRECTO: el for no coincide con el id -->
<label for="nombre">Nombre:</label>
<input type="text" id="nombres" name="nombre">

<!-- CORRECTO: for e id coinciden -->
<label for="nombre">Nombre:</label>
<input type="text" id="nombre" name="nombre">
```

### Error 3: Usar type="text" para todo

```html
<!-- INCORRECTO: no aprovecha la validación de email -->
<input type="text" id="email" name="email">

<!-- CORRECTO: usa type="email" para validación automática -->
<input type="email" id="email" name="email">
```

### Error 4: No usar placeholder

```html
<!-- INCORRECTO: sin orientación para el usuario -->
<input type="text" id="telefono" name="telefono">

<!-- CORRECTO: el placeholder indica el formato esperado -->
<input type="tel" id="telefono" name="telefono" placeholder="+591 300 000 0000">
```