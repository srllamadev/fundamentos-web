# Seccion 03: Maquetacion Clasica

> Aprende las bases del posicionamiento CSS que todo desarrollador debe conocer.

## Presentacion

En esta seccion exploraremos las tecnicas **clasicas** de maquetacion CSS. Aunque hoy existen herramientas modernas como Flexbox y Grid, entender el modelo de posicionamiento tradicional es fundamental para:

- Depurar layouts que no funcionan como esperas
- Entender como CSS "piensa" el flujo de los elementos
- Leer codigo legado con confianza

Nuestro perfil guia sigue siendo **Yamil N**, ingeniero industrial de La Paz, Bolivia, quien trabaja en TextilPro S.A. optimizando procesos con Lean Manufacturing.

---

## Contenido de esta seccion

| # | Tema | Que aprenderas |
|---|------|----------------|
| 01 | [Posicionamiento CSS](./01-posicionamiento/) | `static`, `relative`, `absolute`, `fixed`, `sticky` |
| 02 | [Float y Clear](./02-float-y-clear/) | Historia de `float`, por que ya no se usa para layouts |

---

## Mapa conceptual

```
MAQUETACION CLASICA
│
├── MODELO DE FLUJO NORMAL
│   └── Los elementos se apilan de arriba hacia abajo
│
├── POSICIONAMIENTO
│   ├── static    → comportamiento por defecto
│   ├── relative  → se mueve respecto a su lugar original
│   ├── absolute  → se sale del flujo, busca ancestro posicionado
│   ├── fixed     → se ancla a la ventana del navegador
│   └── sticky    → hibrido entre relative y fixed
│
└── FLOAT (HISTORICO)
    ├── Usado originalmente para texto alrededor de imagenes
    ├── Se uso para layouts (con hacks)
    └── Hoy reemplazado por Flexbox y Grid
```

---

## Perfil de Yamil N - Contexto para los ejemplos

```
┌─────────────────────────────────────────┐
│  YAMIL N                                │
│  Ingeniero Industrial                   │
│  TextilPro S.A. - La Paz, Bolivia       │
│  Especialidad: Lean Manufacturing       │
│                                         │
│  "En la fabrica, cada cosa tiene su     │
│   lugar. El posicionamiento CSS es      │
│   igual: cada elemento debe estar        │
│   donde corresponde."                    │
└─────────────────────────────────────────┘
```

---

## Orden de estudio recomendado

1. Empieza con **posicionamiento** - es el concepto mas importante
2. Continua con **float y clear** - solo para contexto historico
3. Despues pasa a la **Seccion 04: Maquetacion Moderna** donde veras Flexbox y Grid

---

## Conexiones con otras secciones

```
Seccion 01 (HTML) ──► Seccion 02 (CSS Basics) ──► SECCION 03 (esta)
                                                        │
                                                        ▼
                                                  Seccion 04 (Flexbox/Grid)
                                                        │
                                                        ▼
                                                  Seccion 05 (Responsive)
```
