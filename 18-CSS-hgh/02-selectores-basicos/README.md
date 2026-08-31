# 02 - Selectores Basicos: Etiqueta, Clase e ID

## ¿Que aprendemos aqui?

Aprenderas los **3 tipos de selectores basicos** de CSS: selector de **etiqueta** (para todos los `<p>`), selector de **clase** (para elementos con `class="algo"`), y selector de **ID** (para un unico elemento con `id="algo"`). Dominar las **clases** es fundamental porque te da control total sin depender solo de las etiquetas.

---

## Codigo completo

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Yamil N - Selectores CSS</title>
    <style>
        /* Selector de etiqueta */
        h1 { color: #1a5276; }
        p  { color: #555; line-height: 1.6; }

        /* Selector de clase */
        .perfil { background-color: #d5f5e3; padding: 15px; }
        .experiencia { background-color: #fdebd0; padding: 15px; }
        .dato-clave { background-color: #f9e79f; font-weight: bold; }

        /* Selector de ID */
        #contacto { background-color: #1a5276; color: white; padding: 20px; }
    </style>
</head>
<body>

    <h1>Yamil N</h1>

    <div class="perfil">
        <p>Ingeniero con <span class="dato-clave">8 anos</span> de experiencia.</p>
    </div>

    <div id="contacto">
        <p>Email: yamil@ejemplo.com</p>
    </div>

</body>
</html>
```

---

## Los 3 selectores basicos

| Selector | Sintaxis | Ejemplo HTML | ¿A cuantos afecta? |
|----------|----------|--------------|---------------------|
| Etiqueta | `p { }` | `<p>Texto</p>` | A **todos** los `<p>` |
| Clase | `.nombre { }` | `<p class="nombre">Texto</p>` | A **todos** los que tengan esa clase |
| ID | `#nombre { }` | `<p id="nombre">Texto</p>` | A **uno solo** (debe ser unico) |

---

## Selector de etiqueta

```css
h1 {
    color: #1a5276;
}

p {
    color: #555;
}
```

```html
<h1>Yamil N</h1>        <!-- Se aplica el estilo del h1 -->
<p>Parrafo 1</p>         <!-- Se aplica el estilo del p -->
<p>Parrafo 2</p>         <!-- Tambien se aplica -->
```

### Caracteristicas

- Selecciona **todos** los elementos de ese tipo en la pagina.
- No necesita nada especial en el HTML.
- **Problema**: si quieres que un `<p>` sea rojo y otro sea azul, no puedes hacerlo solo con selectores de etiqueta.

### Analogia

```
Selector de etiqueta = "Todos los gatos"

Si dices: "Que todos los gatos usen collar"
→ Todos los gatos de la casa tendran collar.
→ No puedes elegir que solo uno lo use.
```

---

## Selector de clase

```css
.perfil {
    background-color: #d5f5e3;
    padding: 15px;
}

.experiencia {
    background-color: #fdebd0;
    padding: 15px;
}

.dato-clave {
    background-color: #f9e79f;
    font-weight: bold;
}
```

```html
<div class="perfil">
    <p>Ingeniero con <span class="dato-clave">8 anos</span> de experiencia.</p>
</div>

<div class="experiencia">
    <p>Gerente en <span class="dato-clave">TextilPro S.A.</span></p>
</div>
```

### Caracteristicas

- Se escribe con un **punto** antes del nombre: `.nombre-clase`.
- En el HTML se usa el atributo `class="nombre-clase"`.
- Puedes usar la **misma clase en muchos elementos**.
- Un elemento puede tener **varias clases**: `class="perfil importante"`.
- Es el selector **mas usado** en CSS profesional.

### Analogia

```
Selector de clase = "Los gatos que tienen collar rojo"

Si dices: "Que los gatos con collar rojo entren a la casa"
→ Solo entran los que tienen collar rojo.
→ Los demas se quedan afuera.
→ Puedes elegir exactamente cuales quieres.
```

### Un elemento con varias clases

```html
<div class="perfil importante">
    <p>Este div tiene DOS clases: perfil e importante.</p>
</div>
```

```css
.perfil {
    background-color: #d5f5e3;
}

.importante {
    border: 2px solid red;
}
```

El div tendra fondo verde Y borde rojo. Las clases se **acumulan**.

---

## Selector de ID

```css
#contacto {
    background-color: #1a5276;
    color: white;
    padding: 20px;
}
```

```html
<div id="contacto">
    <p>Email: yamil@ejemplo.com</p>
    <p>Telefono: +591 7070707070</p>
</div>
```

### Caracteristicas

- Se escribe con un **numeral** antes del nombre: `#nombre-id`.
- En el HTML se usa el atributo `id="nombre-id"`.
- El ID debe ser **UNICO** en toda la pagina: no puede haber dos elementos con el mismo ID.
- Tiene **mayor especificidad** que las clases (ver leccion de cascada).

### Analogia

```
Selector de ID = "El gato llamado Michi"

Si dices: "Que Michi reciba su medicina"
→ Solo Michi la recibe.
→ Ningun otro gato.
→ Es unico e irrepetible.
```

---

## Comparacion visual

```
Sin selectores (HTML plano):
┌──────────────────────────────────┐
│ Yamil N                          │
│ Ingeniero Industrial             │
├──────────────────────────────────┤
│ Perfil: 8 anos de experiencia    │
├──────────────────────────────────┤
│ Experiencia: TextilPro S.A.      │
├──────────────────────────────────┤
│ Contacto: yamil@ejemplo.com      │
└──────────────────────────────────┘

Con selectores CSS:
┌──────────────────────────────────┐
│ Yamil N                          │ ← h1 (azul, con linea debajo)
│ Ingeniero Industrial             │ ← h2 (celeste)
├──────────────────────────────────┤
│ ┌──────────────────────────────┐ │
│ │ Perfil: 8 anos de experiencia│ │ ← .perfil (fondo verde)
│ └──────────────────────────────┘ │
│ ┌──────────────────────────────┐ │
│ │ Experiencia: TextilPro S.A.  │ │ ← .experiencia (fondo naranja)
│ └──────────────────────────────┘ │
│ ┌──────────────────────────────┐ │
│ │ Contacto: yamil@ejemplo.com  │ │ ← #contacto (fondo azul oscuro)
│ └──────────────────────────────┘ │
└──────────────────────────────────┘
```

---

## ¿Cuando usar cada selector?

| Selector | Cuando usarlo | Ejemplo |
|----------|---------------|---------|
| Etiqueta | Estilos globales que aplican a todos | `body { font-family: Arial; }` |
| Clase | Estilos que se repiten en varios elementos | `.boton { color: blue; }` |
| ID | Estilos para un elemento unico | `#header { height: 80px; }` |

### Regla practica

1. **Usa clases** el 90% del tiempo. Son flexibles y reutilizables.
2. **Usa etiquetas** para estilos globales (body, h1, p).
3. **Usa IDs** con moderacion. Solo para elementos verdaderamente unicos.

---

## Selector multiple

Puedes aplicar los mismos estilos a varios selectores separados por coma:

```css
h1, h2, h3 {
    font-family: Georgia, serif;
}
```

```html
<h1>Titulo principal</h1>    <!-- Georgia -->
<h2>Subtitulo</h2>           <!-- Georgia -->
<h3>Seccion</h3>             <!-- Georgia -->
```

Todos los titulos usan la misma fuente sin tener que repetir la regla.

---

## Combinacion de selectores

Puedes ser mas especifico combinando selectores:

```css
/* Solo los <p> con clase "dato-clave" */
p.dato-clave {
    display: inline;
    font-size: 14px;
}
```

```html
<p class="dato-clave">Texto</p>     <!-- Se aplica -->
<span class="dato-clave">Texto</span> <!-- NO se aplica (es span, no p) -->
```

---

## Especificidad: quien gana

Cuando dos reglas apuntan al mismo elemento, gana la mas especifica:

```css
p { color: red; }           /* Especificidad: 0,0,1 */
.dato-clave { color: blue; } /* Especificidad: 0,1,0 */
#contacto { color: green; }  /* Especificidad: 1,0,0 */
```

```html
<p class="dato-clave" id="contacto">Texto</p>
```

El texto sera **verde** porque el ID tiene mayor especificidad.

| Selector | Especificidad |
|----------|---------------|
| Etiqueta (`p`) | Baja (0,0,1) |
| Clase (`.dato-clave`) | Media (0,1,0) |
| ID (`#contacto`) | Alta (1,0,0) |
| Estilo en linea (`style=""`) | Maxima (1,0,0,0) |

---

## Nombres de clases e IDs: convenciones

```css
/* BIEN: nombres descriptivos, en minusculas, con guiones */
.dato-clave { }
.perfil-profesional { }
#contacto-principal { }

/* MAL: nombres poco claros o con espacios */
.d1 { }           /* ¿Que significa d1? */
.datos clave { }  /* Los espacios no se permiten */
#MI-CLASE { }     /* Mejor usar minusculas */
```

### Convenciones comunes

| Convencion | Ejemplo | Descripcion |
|------------|---------|-------------|
| kebab-case | `.dato-clave` | Palabras separadas por guiones (la mas usada en CSS) |
| camelCase | `.datoClave` | Primera palabra en minuscula, siguientes empiezan con mayuscula |
| BEM | `.bloque__elemento--modificador` | Metodologia avanzada (ver leccion 08) |

---

## Reglas importantes

| Regla | Detalle |
|-------|---------|
| Los IDs deben ser unicos | No repitas `id="contacto"` en dos elementos |
| Las clases se pueden repetir | Usa `.boton` en todos los botones que quieras |
| Un elemento puede tener varias clases | `class="perfil importante activo"` |
| Las clases se separan con espacios | No con comas ni puntos |
| Los selectores de clase usan `.` | `.nombre-clase { }` |
| Los selectores de ID usan `#` | `#nombre-id { }` |
| Los nombres no empiezan con numeros | `.1dato` es INCORRECTO, `.dato-1` es correcto |

---

## Errores comunes

### Error 1: Confundir class con id

```html
<!-- INCORRECTO: usar id para algo que se repite -->
<div id="perfil">Perfil 1</div>
<div id="perfil">Perfil 2</div>  <!-- ID duplicado -->

<!-- CORRECTO: usar class para elementos repetidos -->
<div class="perfil">Perfil 1</div>
<div class="perfil">Perfil 2</div>
```

### Error 2: Olvidar el punto o numeral en CSS

```css
/* INCORRECTO */
perfil { background: green; }    /* Esto busca un <perfil> que no existe */
#perfil { background: green; }   /* Si el HTML usa class="perfil", no funcionara */

/* CORRECTO */
.perfil { background: green; }   /* Punto para clases */
#perfil { background: green; }   /* Numeral para IDs */
```

### Error 3: Olvidar el atributo class o id en el HTML

```css
/* CSS correcto */
.perfil { background: green; }
```
```html
<!-- INCORRECTO: falta el atributo class -->
<div>Perfil</div>

<!-- CORRECTO -->
<div class="perfil">Perfil</div>
```
