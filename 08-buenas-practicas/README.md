# Seccion 08: Buenas Practicas en CSS

## Escribe CSS como un profesional

En esta seccion, Yamil N. (ingeniero industrial de TextilPro S.A.) te ensenia a escribir CSS limpio, mantenible y accesible. En la industria, un proceso sin estandar es un proceso que falla. En CSS pasa lo mismo.

## Contenido

| Subseccion | Tema | Descripcion |
|---|---|---|
| [01-metodologia-bem](01-metodologia-bem/) | Metodologia BEM | Naming convention Block__Element--Modifier para CSS organizado |
| [02-accesibilidad-y-semantica](02-accesibilidad-y-semantica/) | Accesibilidad y Semantica | Contraste de colores, focus states, prefers-reduced-motion, HTML semantico |

## ¿Por que importan las buenas practicas?

```
  Sin buenas practicas              Con buenas practicas
  ┌─────────────────────┐          ┌─────────────────────┐
  │  .btn, .button,     │          │  .btn { }           │
  │    .btn-big, .red   │          │  .btn--large { }    │
  │  Clases inconsistentes│        │  .btn--primary { }  │
  │  Especificidad loca │          │  Accesible A+       │
  │  No accesible       │          │  Mantenible         │
  └─────────────────────┘          └─────────────────────┘
```

En TextilPro S.A., Yamil aplica Lean Manufacturing: eliminar desperdicios, estandarizar procesos, mejorar continuamente. Con CSS pasa igual: BEM elimina la confusion, la accesibilidad incluye a todos los usuarios, y la semantica hace tu codigo predecible.

## Objetivo de aprendizaje

Al finalizar esta seccion, podras:
1. Nombrar clases con BEM de forma consistente
2. Crear interfaces accesibles con contraste adecuado y focus states
3. Usar HTML semantico correctamente con CSS
4. Implementar `prefers-reduced-motion` para usuarios sensibles al movimiento
