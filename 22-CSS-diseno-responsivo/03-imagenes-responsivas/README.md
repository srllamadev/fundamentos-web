# 03 - Imagenes Responsivas

## ¿Que aprendemos aqui?

Aprenderas a hacer que las imagenes se adapten a cualquier tamano de pantalla sin deformarse ni romper el layout. Cubriremos `max-width: 100%`, `object-fit`, `object-position`, `aspect-ratio` y galerias responsivas con Grid.

---

## La regla basica

```css
img {
    max-width: 100%;
    height: auto;
}
```

Esto hace que **cualquier imagen** nunca sea mas ancha que su contenedor. Es la primera linea que debes agregar para imagenes responsivas.

### Analogia

```
max-width: 100% = "No te salgas de la mesa"

La imagen puede ser mas pequena que su contenedor,
pero nunca mas grande. Se adapta como agua en un vaso.
```

---

## object-fit: controlando como se ajusta

Cuando necesitas que la imagen tenga un tamano fijo (ej: 300x200px), `max-width` no es suficiente. Aqui entra `object-fit`.

### object-fit: contain

```css
img {
    width: 300px;
    height: 200px;
    object-fit: contain;
}
```

- La imagen **completa** se muestra dentro del contenedor.
- Puede haber espacio vacio a los lados o arriba/abajo.
- **No se recorta**, pero puede quedar "letterbox".

### object-fit: cover

```css
img {
    width: 300px;
    height: 200px;
    object-fit: cover;
}
```

- La imagen **rellena** todo el contenedor.
- Se **recorta** si es necesario.
- Mantiene su proporcion (no se deforma).
- **Es el mas usado** en disenos profesionales.

### object-fit: fill

```css
img {
    width: 300px;
    height: 200px;
    object-fit: fill;
}
```

- La imagen se **estira** para llenar el contenedor.
- Se **deforma** (cambia su proporcion).
- **No recomendado** en la mayoria de casos.

### Comparacion visual

```
Original:              contain:             cover:               fill:
┌──────────┐          ┌──────────┐          ┌──────────┐          ┌──────────┐
│          │          │          │          │██████████│          │██████████│
│  Imagen  │          │  Imagen  │          │██████████│          │██████████│
│          │          │          │          │██████████│          │██████████│
└──────────┘          └──────────┘          └──────────┘          └──────────┘
  Original             Completa, con         Rellena, recortada    Deformada
                       espacio vacio
```

---

## object-position: controlando el recorte

Cuando usas `object-fit: cover`, la imagen se recorta. `object-position` te dice **que parte** de la imagen se muestra.

```css
img {
    width: 300px;
    height: 200px;
    object-fit: cover;
    object-position: center top;  /* Muestra la parte superior */
}
```

### Valores comunes

| Valor | Efecto |
|-------|--------|
| `center center` | Centro de la imagen (por defecto) |
| `center top` | Parte superior |
| `center bottom` | Parte inferior |
| `left center` | Lado izquierdo |
| `right center` | Lado derecho |
| `50% 25%` | Posicion personalizada |

### Uso practico

```css
.avatar {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    object-position: center top;  /* Muestra la cara, no el pecho */
}
```

---

## aspect-ratio: mantener proporciones

```css
.contenedor-imagen {
    width: 100%;
    aspect-ratio: 16 / 9;
    overflow: hidden;
}
.contenedor-imagen img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
```

`aspect-ratio` define la proporcion del contenedor:
- `16 / 9` = pantalla panoramica
- `4 / 3` = pantalla clasica
- `1 / 1` = cuadrado
- `3 / 4` = vertical (retrato)

### Analogia

```
aspect-ratio = "Molde para fotos"

No importa que tan grande sea la foto original,
siempre se ajustara a un marco 16:9, 4:3, 1:1, etc.
```

---

## Galeria responsiva con Grid

```css
.galeria {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 15px;
}

.galeria-item {
    aspect-ratio: 1;
    overflow: hidden;
    border-radius: 8px;
}

.galeria-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
```

### ¿Como funciona?

- `auto-fill`: crea tantas columnas como quepan.
- `minmax(200px, 1fr)`: cada columna minimo 200px, maximo 1fr.
- Si la pantalla es de 400px: 1 columna.
- Si la pantalla es de 800px: 3 columnas.
- Si la pantalla es de 1200px: 5 columnas.
- **Sin media queries**, se adapta automaticamente.

---

## Placeholder con degradado

Cuando no tienes una imagen, usa un degradado como placeholder:

```css
.placeholder {
    width: 100%;
    max-width: 400px;
    aspect-ratio: 4 / 3;
    background: linear-gradient(135deg, #1a5276, #2e86c1);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
}
```

Esto es mejor que mostrar un icono de imagen rota.

---

## Imagenes de fondo responsivas

```css
.hero {
    background-image: url('foto.jpg');
    background-size: cover;
    background-position: center;
    height: 100vh;
}
```

Para imagenes de fondo (no `<img>`), usa `background-size: cover`.

---

## Resumen de propiedades

| Propiedad | Funcion | Valor tipico |
|-----------|---------|--------------|
| `max-width: 100%` | Imagen nunca mas ancha que su contenedor | `100%` |
| `height: auto` | Mantiene la proporcion | `auto` |
| `object-fit: cover` | Rellena el contenedor, recorta si es necesario | `cover` |
| `object-fit: contain` | Muestra la imagen completa, puede haber espacio | `contain` |
| `object-position` | Controla que parte de la imagen se muestra | `center top` |
| `aspect-ratio` | Proporcion del contenedor | `16/9`, `1/1` |
| `background-size: cover` | Para imagenes de fondo | `cover` |

---

## Reglas importantes

| Regla | Detalle |
|-------|---------|
| Siempre usa `max-width: 100%` | Para imagenes dentro de contenido |
| Usa `object-fit: cover` | Para imagenes en contenedores con tamano fijo |
| Evita `object-fit: fill` | Deforma las imagenes |
| `aspect-ratio` es moderno | Funciona en navegadores actuales |
| Agrega `alt` a toda `<img>` | Por accesibilidad y SEO |
| Usa `loading="lazy"` | Para cargar imagenes solo cuando son visibles |

---

## Errores comunes

### Error 1: Imagen que rompe el layout

```css
/* PROBLEMA: imagen mas ancha que la pantalla */
img { width: 800px; }

/* SOLUCION: limitar al contenedor */
img { max-width: 100%; height: auto; }
```

### Error 2: Imagen deformada

```css
/* PROBLEMA: width y height fijos deforman la imagen */
img { width: 300px; height: 200px; }

/* SOLUCION: usar object-fit: cover */
img {
    width: 300px;
    height: 200px;
    object-fit: cover;
}
```

### Error 3: Olvidar alt

```html
<!-- INCORRECTO: sin descripcion -->
<img src="foto.jpg">

<!-- CORRECTO: descripcion de la imagen -->
<img src="foto.jpg" alt="Planta de produccion de TextilPro S.A.">
```

### Error 4: No usar loading lazy

```html
<!-- INCORRECTO: todas las imagenes cargan al inicio -->
<img src="foto1.jpg" alt="Foto 1">
<img src="foto2.jpg" alt="Foto 2">
<img src="foto3.jpg" alt="Foto 3">

<!-- CORRECTO: carga diferida -->
<img src="foto1.jpg" alt="Foto 1" loading="lazy">
<img src="foto2.jpg" alt="Foto 2" loading="lazy">
<img src="foto3.jpg" alt="Foto 3" loading="lazy">
```

---

## Ejercicio practico

1. Abre el `index.html` y cambia el tamano de la ventana.
2. Agrega `object-fit: contain` a una imagen y compara con `cover`.
3. Usa `object-position: left center` en una imagen con `cover`.
4. Crea una galeria con 6 imagenes usando Grid y `auto-fill`.
5. Cambia el `aspect-ratio` de `1/1` a `16/9` y observa el cambio.
6. Crea un avatar circular con `border-radius: 50%` y `object-fit: cover`.
7. Agrega `loading="lazy"` a todas las imagenes del ejemplo.
