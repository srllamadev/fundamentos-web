# 01 - Sintaxis y Aplicacion de CSS

## ¿Que aprendemos aqui?

Aprenderas la **sintaxis basica de CSS**: como se escribe una regla, que es un selector, una propiedad y un valor. Tambien veras las **3 formas de aplicar CSS** a tu HTML: en linea, con `<style>` en el `<head>`, y con un archivo externo `.css`.

---

## Codigo completo

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Yamil N - Sintaxis CSS</title>
    <style>
        /* Estilos en el <head> con etiqueta <style> */
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f5f5f5;
        }

        h1 {
            color: #1a5276;
            border-bottom: 2px solid #1a5276;
            padding-bottom: 10px;
        }

        h2 {
            color: #2e86c1;
        }

        p {
            color: #333;
            line-height: 1.6;
        }

        .resaltado {
            background-color: #f9e79f;
            padding: 2px 6px;
            font-weight: bold;
        }

        .seccion {
            background-color: white;
            padding: 20px;
            margin: 15px 0;
            border-left: 4px solid #2e86c1;
        }
    </style>
</head>
<body>

    <header>
        <h1>Yamil N</h1>
        <h2>Ingeniero Industrial</h2>
    </header>

    <div class="seccion">
        <h3>Perfil Profesional</h3>
        <p>Ingeniero industrial con mas de <span class="resaltado">8 anos de experiencia</span>...</p>
    </div>

    <div class="seccion">
        <h3>Estilo en Linea (Ejemplo)</h3>
        <p style="color: red; font-size: 18px; font-style: italic;">
            Este parrafo tiene estilos en linea.
        </p>
    </div>

</body>
</html>
```

---

## La sintaxis de CSS

Una regla CSS tiene esta estructura:

```css
selector {
    propiedad: valor;
    propiedad: valor;
    propiedad: valor;
}
```

### Ejemplo real

```css
h1 {
    color: #1a5276;
    border-bottom: 2px solid #1a5276;
    padding-bottom: 10px;
}
```

### Desglose

| Parte | Ejemplo | Significado |
|-------|---------|-------------|
| **Selector** | `h1` | ¿A que elemento HTML aplico el estilo? |
| **Propiedad** | `color` | ¿Que aspecto quiero cambiar? |
| **Valor** | `#1a5276` | ¿A que valor lo cambio? |
| **Declaracion** | `color: #1a5276;` | Cada linea propiedad:valor es una declaracion |
| **Bloque** | `{ ... }` | Las llaves envuelven todas las declaraciones |

### Analogia

```
CSS = Las instrucciones de decoracion para tu casa HTML

selector {            = "Para la puerta principal..."
    propiedad: valor; =   "pintarla de color azul..."
    propiedad: valor; =   "agregarle un marco de 2cm..."
}                     = "Fin de las instrucciones para la puerta."
```

---

## Las 3 formas de aplicar CSS

### Forma 1: CSS en linea (atributo `style`)

```html
<p style="color: red; font-size: 18px; font-style: italic;">
    Este parrafo tiene estilos en linea.
</p>
```

- Se escribe directamente en el atributo `style` de la etiqueta HTML.
- Solo afecta a **ese elemento especifico**.
- **Desventaja**: si quieres cambiar el color de 10 parrafos, tienes que cambiar 10 lineas.

### Cuando usarlo:

- Pruebas rapidas mientras desarrollas
- Estilos muy especificos que solo aplican a un elemento
- Correcciones urgentes

### Cuando NO usarlo:

- En produccion (es dificil de mantener)
- Para estilos que se repiten

---

### Forma 2: CSS interno (etiqueta `<style>` en el `<head>`)

```html
<head>
    <style>
        p {
            color: #333;
            line-height: 1.6;
        }

        .resaltado {
            background-color: #f9e79f;
            padding: 2px 6px;
        }
    </style>
</head>
```

- Se escribe dentro de la etiqueta `<style>` en el `<head>` del HTML.
- Afecta a **todos los elementos de esa pagina**.
- **Ventaja**: separas un poco el estilo de la estructura.
- **Desventaja**: si tienes 10 paginas HTML, tienes que copiar el CSS en cada una.

### Cuando usarlo:

- Paginas de una sola pagina
- Prototipos rapidos
- Cuando no puedes crear un archivo externo

---

### Forma 3: CSS externo (archivo `.css` separado)

```html
<head>
    <link rel="stylesheet" href="estilos.css">
</head>
```

```css
/* archivo: estilos.css */
body {
    font-family: Arial, sans-serif;
    margin: 20px;
    background-color: #f5f5f5;
}

h1 {
    color: #1a5276;
}
```

- Se escribe en un archivo separado con extension `.css`.
- Se conecta al HTML con la etiqueta `<link>`.
- **Ventaja**: un solo archivo CSS para todas las paginas del sitio.
- **Ventaja**: el navegador lo guarda en cache (mas rapido).
- **Ventaja**: separacion total entre estructura (HTML) y presentacion (CSS).

### Cuando usarlo:

- **SIEMPRE que sea posible** (es la mejor practica)
- Proyectos con mas de una pagina
- Cualquier proyecto profesional

---

## Comparacion de las 3 formas

| Caracteristica | En linea | `<style>` interno | Archivo `.css` externo |
|----------------|----------|-------------------|------------------------|
| ¿Donde se escribe? | Atributo `style` | `<head>` del HTML | Archivo separado |
| ¿A que afecta? | Solo ese elemento | Toda la pagina | Todas las paginas que lo vinculen |
| ¿Reutilizable? | No | Solo en esa pagina | Si, en todas las paginas |
| ¿Facil de mantener? | No | Medio | Si |
| ¿Separa HTML y CSS? | No | Parcialmente | Completamente |
| ¿Mejor practica? | No | A veces | Si |

---

## Reglas de sintaxis importantes

| Regla | Ejemplo | Detalle |
|-------|---------|---------|
| Siempre termina con `;` | `color: red;` | Sin punto y coma, la siguiente propiedad falla |
| Propiedad y valor separados por `:` | `color: red` | No uses `=` ni otro simbolo |
| Las llaves envuelven las declaraciones | `h1 { ... }` | Apertura y cierre |
| Los comentarios usan `/* */` | `/* Esto es un comentario */` | No uses `//` como en otros lenguajes |
| Los valores de color pueden ser nombres, hex o RGB | `red`, `#ff0000`, `rgb(255,0,0)` | Los 3 son el mismo color |
| Los espacios no importan (pero ayudan a leer) | `h1{color:red}` = `h1 { color: red; }` | Usa espacios para legibilidad |

---

## Comentarios en CSS

```css
/* Esto es un comentario de una linea */

p {
    color: #333;
    /* font-size: 16px; */  /* Esta linea esta "comentada", no se aplica */
    line-height: 1.6;
}

/*
    Esto es un comentario
    de varias lineas.
    Util para explicar secciones completas.
*/
```

---

## Orden de las propiedades

Aunque CSS no requiere un orden especifico, es buena practica agruparlas:

```css
.seccion {
    /* 1. Posicion y display */
    display: block;
    position: relative;

    /* 2. Modelo de caja */
    margin: 15px 0;
    padding: 20px;
    border-left: 4px solid #2e86c1;

    /* 3. Colores y fondos */
    background-color: white;
    color: #333;

    /* 4. Tipografia */
    font-family: Arial, sans-serif;
    font-size: 16px;
    line-height: 1.6;
}
```

---

## Errores comunes

### Error 1: Olvidar el punto y coma

```css
/* INCORRECTO */
h1 {
    color: red    /* Falta ; */
    font-size: 24px;
}

/* CORRECTO */
h1 {
    color: red;
    font-size: 24px;
}
```

### Error 2: Usar `=` en vez de `:`

```css
/* INCORRECTO */
h1 {
    color = red;
}

/* CORRECTO */
h1 {
    color: red;
}
```

### Error 3: Escribir propiedades en espanol

```css
/* INCORRECTO: CSS solo entiende ingles */
h1 {
    color: rojo;
    tamano-fuente: 24px;
}

/* CORRECTO */
h1 {
    color: red;
    font-size: 24px;
}
```

### Error 4: Olvidar las llaves

```css
/* INCORRECTO */
h1
    color: red;
    font-size: 24px;

/* CORRECTO */
h1 {
    color: red;
    font-size: 24px;
}
```

---

## Ejercicio practico

1. Abre el `index.html` en tu navegador.
2. Identifica los 3 tipos de CSS (interno con `<style>`, en linea con `style=""`).
3. Cambia el color del `<h1>` a otro color en el `<style>`.
4. Agrega una nueva regla CSS para los `<h3>` dentro del `<style>`.
5. Quita el punto y coma de una propiedad y observa que pasa.
6. Convierte el CSS interno en un archivo externo `estilos.css` y vinculo con `<link>`.
7. Crea una clase `.importante` con estilos propios y aplicala a un elemento.
