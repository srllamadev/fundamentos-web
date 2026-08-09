# 04 - Enlaces e Imágenes

## ¿Qué aprendemos aquí?

En esta lección aprenderás a usar dos de las etiquetas más importantes de HTML: `<a>` para crear **enlaces** (hipervínculos) e `<img>` para insertar **imágenes**. También aprenderás sobre **accesibilidad** y **SEO** a través del atributo `alt`.

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
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Engineering_management_symbol.png/220px-Engineering_management_symbol.png" alt="Símbolo de Ingeniería Industrial - Representación gráfica de la disciplina profesional">
    </div>

    <div>
        <h3>Experiencia Laboral</h3>
        <div>
            <h4>Gerente de Operaciones - TextilPro S.A. (2020 - Presente)</h4>
            <p>Implementación de sistema Kanban que redujo los tiempos de entrega en un 30%.</p>
            <a href="https://www.textilpro-ejemplo.com">Sitio web de TextilPro S.A.</a>
        </div>
    </div>

    <div>
        <h3>Datos de Contacto</h3>
        <p>Email: <a href="mailto:yamil.ejemplo@email.com">yamil.ejemplo@email.com</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/yamil-navia/">Perfil de LinkedIn de Yamil N</a></p>
    </div>

    <div>
        <h3>Certificaciones</h3>
        <div>
            <h4>Lean Six Sigma Black Belt</h4>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Six_Sigma_Logo.svg/200px-Six_Sigma_Logo.svg.png" alt="Logo de Six Sigma - Certificación internacional en mejora de procesos">
            <a href="https://asq.org/cert">Verificar certificación ASQ</a>
        </div>
    </div>

</body>
</html>
```

---

## La etiqueta `<a>` - Enlaces (Hipervínculos)

### Sintaxis básica

```html
<a href="https://www.google.com">Ir a Google</a>
```

- `<a>` viene de "anchor" (ancla).
- El atributo `href` indica **a dónde lleva el enlace** (la URL de destino).
- El texto entre las etiquetas es el **texto visible** que el usuario hace clic.

---

## Tipos de enlaces

### 1. Enlace a sitio web externo

```html
<a href="https://www.linkedin.com/in/yamil-navia/">
    Perfil de LinkedIn de Yamil N
</a>
```

- Usa URLs completas con `https://`.
- Abre el sitio web de destino al hacer clic.

### 2. Enlace de email (`mailto:`)

```html
<a href="mailto:yamil.ejemplo@email.com">yamil.ejemplo@email.com</a>
```

- Al hacer clic, abre el **cliente de correo** del usuario (Gmail, Outlook, etc.) con el destino ya puesto.
- El formato es: `mailto:dirección@correo.com`.

### 3. Enlace a página interna (dentro del mismo sitio)

```html
<a href="#contacto">Ir a la sección de contacto</a>
```

- Usa un `#` seguido de un `id` para navegar dentro de la misma página.
- Se verá más adelante cuando aprendamos sobre `id`.

### 4. Enlace para descargar archivos

```html
<a href="cv-Yamil-N.pdf" download>Descargar mi CV en PDF</a>
```

- El atributo `download` le dice al navegador que descargue el archivo en vez de abrirlo.

---

## Atributos importantes de `<a>`

| Atributo | Descripción | Ejemplo |
|----------|-------------|---------|
| `href` | URL de destino **(obligatorio)** | `href="https://ejemplo.com"` |
| `target` | Dónde abrir el enlace | `target="_blank"` (abre en nueva pestaña) |
| `title` | Texto emergente al pasar el mouse | `title="Visitar LinkedIn"` |
| `download` | Descargar en vez de navegar | `download` o `download="nombre.pdf"` |
| `rel` | Relación con el documento enlazado | `rel="noopener noreferrer"` (seguridad) |

### Abrir en nueva pestaña

```html
<a href="https://www.linkedin.com/in/yamil-navia/"
   target="_blank"
   rel="noopener noreferrer">
    Perfil de LinkedIn
</a>
```

- `target="_blank"` abre el enlace en una **nueva pestaña**.
- `rel="noopener noreferrer"` es una **medida de seguridad** que evita que la nueva pestaña pueda acceder a la pestaña original.

---

## La etiqueta `<img>` - Imágenes

### Sintaxis básica

```html
<img src="foto-perfil.jpg" alt="Foto de perfil de Yamil N">
```

- `<img>` es una etiqueta **autocerrada** (no tiene etiqueta de cierre `</img>`).
- `src` indica la **fuente/ubicación** de la imagen (obligatorio).
- `alt` proporciona un **texto alternativo** (obligatorio por accesibilidad).

---

## Fuentes de imágenes

### 1. Imagen local (en tu computadora)

```html
<img src="imagenes/foto-perfil.jpg" alt="Foto de perfil">
```

- La imagen está en una carpeta de tu proyecto.
- Ruta relativa desde el archivo HTML.

### 2. Imagen de internet (URL externa)

```html
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Engineering_management_symbol.png/220px-Engineering_management_symbol.png" alt="Símbolo de Ingeniería Industrial">
```

- La imagen está alojada en otro servidor.
- Usa la URL completa de la imagen.

---

## El atributo `alt` para accesibilidad y SEO

### ¿Qué es `alt`?

`alt` (texto alternativo) es un texto que **describe la imagen** y se muestra cuando:

- La imagen **no puede cargarse** (error de red, imagen eliminada).
- El usuario usa un **lector de pantalla** (personas con discapacidad visual).
- El navegador tiene las **imágenes desactivadas**.

### Toda `<img>` debe tener `alt`

```html
<!-- CORRECTO -->
<img src="logo-six-sigma.png" alt="Logo de Six Sigma - Certificación internacional en mejora de procesos">

<!-- INCORRECTO: falta el alt -->
<img src="logo-six-sigma.png">

<!-- INCORRECTO: alt sin descripción significativa -->
<img src="logo-six-sigma.png" alt="imagen">
<img src="logo-six-sigma.png" alt="foto123">
```

### ¿Por qué es tan importante el `alt`?

| Razón | Detalle |
|-------|---------|
| **Accesibilidad** | Los lectores de pantalla leen el `alt` a personas ciegas o con baja visión |
| **SEO** | Google usa el `alt` para entender el contenido de las imágenes |
| **Experiencia de usuario** | Si la imagen no carga, el usuario ve la descripción en vez de un ícono roto |

### Cómo escribir un buen `alt`

```html
<!-- BUENO: describe lo que la imagen muestra -->
<img src="planta-industrial.jpg" alt="Planta de producción de TextilPro S.A. con líneas de ensamblaje automatizadas">

<!-- BUENO: describe el propósito si es funcional -->
<img src="icono-email.png" alt="Enviar correo electrónico">

<!-- BUENO: vacío si la imagen es decorativa (CSS debería usarse en ese caso) -->
<img src="linea-decorativa.png" alt="">
```

### El `alt` en nuestro perfil profesional

```html
<!-- Foto de perfil -->
<img src="..." alt="Símbolo de Ingeniería Industrial - Representación gráfica de la disciplina profesional">

<!-- Logo de certificación -->
<img src="..." alt="Logo de Six Sigma - Certificación internacional en mejora de procesos">

<!-- Logo de otra certificación -->
<img src="..." alt="Logo del Project Management Institute - Certificación PMP en gestión de proyectos">
```

Cada `alt` describe **qué muestra la imagen** y **por qué es relevante** para el contenido.

---

## Atributos adicionales de `<img>`

| Atributo | Descripción | Ejemplo |
|----------|-------------|---------|
| `src` | Ubicación de la imagen **(obligatorio)** | `src="foto.jpg"` |
| `alt` | Texto alternativo **(obligatorio)** | `alt="Descripción"` |
| `width` | Ancho en píxeles | `width="200"` |
| `height` | Alto en píxeles | `height="150"` |
| `title` | Texto emergente al pasar el mouse | `title="Mi foto de perfil"` |
| `loading` | Control de carga diferida | `loading="lazy"` |

### Carga diferida (lazy loading)

```html
<img src="foto-grande.jpg" alt="Descripción" loading="lazy">
```

- `loading="lazy"` hace que la imagen solo se cargue cuando el usuario hace scroll hasta ella.
- Mejora el rendimiento de la página.

---

## Combinando `<a>` e `<img>`

Puedes convertir una imagen en un enlace:

```html
<a href="https://www.linkedin.com/in/yamil-navia/">
    <img src="foto-linkedin.jpg" alt="Foto de perfil de LinkedIn">
</a>
```

Al hacer clic en la imagen, el usuario será llevado al enlace.

---

## Buenas prácticas con imágenes y enlaces

| Buena práctica | Por qué |
|----------------|---------|
| Siempre incluir `alt` descriptivo | Accesibilidad y SEO |
| Usar formatos apropiados | JPG para fotos, PNG para logos, SVG para íconos |
| Optimizar el tamaño de imágenes | Imágenes grandes hacen la página lenta |
| Usar texto descriptivo en enlaces | "Descargar CV en PDF" es mejor que "Clic aquí" |
| No abusar de `target="_blank"` | Puede ser molesto para el usuario |
| Usar rutas relativas cuando sea posible | Hace tu sitio más portable |

---

## Errores comunes

### Error 1: Imagen sin `alt`

```html
<!-- INCORRECTO -->
<img src="foto.jpg">

<!-- CORRECTO -->
<img src="foto.jpg" alt="Descripción de la foto">
```

### Error 2: Enlace sin texto visible

```html
<!-- INCORRECTO: enlace vacío -->
<a href="https://ejemplo.com"></a>

<!-- CORRECTO -->
<a href="https://ejemplo.com">Visitar ejemplo</a>
```

### Error 3: Usar `alt` como título decorativo

```html
<!-- INCORRECTO: alt genérico sin valor -->
<img src="logo.png" alt="imagen bonita">

<!-- CORRECTO: alt describe el contenido -->
<img src="logo.png" alt="Logo oficial de la empresa TextilPro S.A.">
```
