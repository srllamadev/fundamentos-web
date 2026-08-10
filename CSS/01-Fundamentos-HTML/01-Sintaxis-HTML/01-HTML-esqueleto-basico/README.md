# 01 - Esqueleto Básico de HTML

## ¿Qué aprendemos aquí?

En esta primera lección aprenderás la **estructura mínima obligatoria** que todo documento HTML debe tener. Sin esta estructura, el navegador no sabrá cómo interpretar tu página.

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

</body>
</html>
```

---

## Explicación línea por línea

### `<!DOCTYPE html>`

```html
<!DOCTYPE html>
```

- Le dice al navegador que este documento es **HTML5** 

---

### `<html lang="es">`

```html
<html lang="es">
```

- Es el **elemento raíz** que contiene todo el documento HTML.
- El atributo `lang="es"` indica que el idioma del contenido es **español**.

---

### `<head>`

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Yamil Navi- Ingeniero Industrial</title>
</head>
```

- Contiene **metadatos** sobre el documento: información que no se muestra directamente en la página pero es esencial.
- Aquí van: el título, la codificación de caracteres, enlaces a estilos, scripts, etc.

#### `<meta charset="UTF-8">`

- Define la **codificación de caracteres** como UTF-8.
- UTF-8 soporta prácticamente todos los caracteres del mundo: acentos (á, é, í, ó, ú), la ñ, caracteres especiales, emojis, etc.
- Sin esto, caracteres como "N" o "Río" podrían mostrarse como símbolos extraños.

#### `<meta name="viewport" content="width=device-width, initial-scale=1.0">`

- Hace que la página sea **responsiva** (se adapte a dispositivos móviles).
- `width=device-width`: el ancho de la página será el ancho del dispositivo.
- `initial-scale=1.0`: no hay zoom inicial.

#### `<title>`

- Define el **título de la página** que aparece en:
  - La pestaña del navegador.
  - Los resultados de Google (SEO).
  - Los marcadores/favoritos cuando alguien guarda la página.
- Solo debe haber **un** `<title>` por página.

---

### `<body>`

```html
<body>

</body>
```

- Contiene **todo el contenido visible** de la página: textos, imágenes, enlaces, formularios, etc.
- Todo lo que el usuario ve en la pantalla va dentro de `<body>`.
- En esta lección está vacío porque solo estamos viendo la estructura base.

---

## Resumen visual

```
<!DOCTYPE html>          --> Declaración: es HTML5
<html lang="es">         --> Raíz del documento (idioma: español)
    <head>               --> Metadatos (no visibles)
        <meta charset>   --> Codificación de caracteres
        <meta viewport>  --> Responsividad móvil
        <title>          --> Título de la pestaña/SEO
    </head>
    <body>               --> Contenido visible
        (aquí va todo)
    </body>
</html>                  --> Cierre de la raíz
```

---

## Detalles importantes de HTML

| Regla | Detalle |
|-------|---------|
| `<!DOCTYPE html>` siempre primero | Nunca va después de comentarios o espacios |
| Un solo `<html>` por página | Es la raíz, no puede haber más |
| `<head>` antes de `<body>` | El orden importa |
| Siempre incluir `charset` y `viewport` | Son fundamentales para la compatibilidad |
| El `<title>` es obligatorio | Sin él, la pestaña del navegador queda sin nombre |
