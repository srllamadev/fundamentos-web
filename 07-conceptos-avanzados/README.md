# Seccion 07: Conceptos Avanzados de CSS

## Bienvenido a la seccion mas poderosa del curso

En esta seccion, Yamil N. (ingeniero industrial de Bolivia) te guia por las herramientas que hacen de CSS un lenguaje de programacion visual de verdad.

## Contenido

| Subseccion | Tema | Descripcion |
|---|---|---|
| [01-variables-css](01-variables-css/) | Variables CSS (Custom Properties) | Aprende a definir y reutilizar valores con `--variable` y `var()` |
| [02-funciones-modernas](02-funciones-modernas/) | Funciones Modernas | Domina `calc()`, `clamp()`, `min()` y `max()` para disenos flexibles |

## ¿Por que importan estos temas?

```
Sin conceptos avanzados           Con conceptos avanzados
┌─────────────────────┐          ┌─────────────────────┐
│  Color hardcoded    │          │  var(--color-primario)│
│  Tamanos fijos      │          │  clamp(1rem, 3vw, 2rem)│
│  Mucho codigo repetido│        │  Reutilizable y flexible│
│  Cambios dolorosos  │          │  Cambios en un solo lugar│
└─────────────────────┘          └─────────────────────┘
```

Imagina que en TextilPro S.A. necesitan cambiar el color corporativo en todo el sistema. Sin variables, tienes que buscar y reemplazar en cientos de archivos. Con variables CSS, cambias **una sola linea** y todo se actualiza.

## Objetivo de aprendizaje

Al finalizar esta seccion, podras:
1. Crear sistemas de diseno con variables CSS
2. Construir layouts que se adaptan automaticamente con funciones matematicas
3. Implementar temas claro/oscuro con cambio minimo de codigo
