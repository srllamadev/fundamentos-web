# Seccion 04: Maquetacion Moderna

> Domina las herramientas que todo desarrollador web usa hoy para crear layouts profesionales.

## Presentacion

Esta seccion cubre las tecnologias **modernas** de maquetacion CSS que reemplazaron a los metodos clasicos (float, tablas). Aprenderas:

- **Flexbox**: para layouts en una dimension (filas o columnas)
- **CSS Grid**: para layouts en dos dimensiones (filas Y columnas)
- **z-index**: para controlar el apilamiento de elementos

Todo con ejemplos basados en el contexto de **Yamil N**, ingeniero industrial de TextilPro S.A. en La Paz, Bolivia.

---

## Contenido de esta seccion

| # | Tema | Que aprenderas |
|---|------|----------------|
| 01 | [Flexbox](./01-flexbox/) | Contenedor flex, items, ejes, alineacion, layouts 1D |
| 02 | [CSS Grid](./02-css-grid/) | Filas, columnas, areas, layouts 2D completos |
| 03 | [z-index y apilamiento](./03-z-index-apilamiento/) | Contexto de apilamiento, capas, orden visual |

---

## Mapa conceptual

```
MAQUETACION MODERNA
│
├── FLEXBOX (1 dimension)
│   ├── display: flex
│   ├── Ejes: main axis / cross axis
│   ├── justify-content (eje principal)
│   ├── align-items / align-self (eje cruzado)
│   ├── flex-direction (horizontal / vertical)
│   └── Ideal para: navbars, cards, centrar elementos
│
├── CSS GRID (2 dimensiones)
│   ├── display: grid
│   ├── grid-template-columns / rows
│   ├── grid-area (nombrar regiones)
│   ├── fr (unidades flexibles)
│   └── Ideal para: layouts completos, dashboards, galerias
│
└── Z-INDEX (profundidad)
    ├── Controla el orden de apilamiento
    ├── Solo funciona en elementos posicionados
    ├── Contexto de apilamiento (stacking context)
    └── Ideal para: modales, dropdowns, overlays
```

---

## ¿Cuando usar Flexbox vs Grid?

```
┌────────────────────────────────────────────────────┐
│          ¿FLEXBOX o GRID?                          │
│                                                    │
│  ¿Es una FILA o COLUMNA de elementos?              │
│  ├── SI  → Flexbox                                │
│  └── NO  → ¿Es un layout completo 2D?             │
│            ├── SI  → Grid                          │
│            └── NO  → Flexbox (probablemente)       │
│                                                    │
│  REGLA GENERAL:                                    │
│  ├── Flexbox = contenido (de adentro hacia afuera) │
│  └── Grid    = layout  (de afuera hacia adentro)   │
└────────────────────────────────────────────────────┘
```

---

## Perfil de Yamil N - Contexto para los ejemplos

```
┌─────────────────────────────────────────────────┐
│  YAMIL N                                        │
│  Ingeniero Industrial                           │
│  TextilPro S.A. - La Paz, Bolivia               │
│  Especialidad: Lean Manufacturing               │
│                                                 │
│  "Flexbox es como una linea de produccion:      │
│   los elementos se organizan en una direccion.   │
│   Grid es como el plano de toda la fabrica:      │
│   define zonas, areas, y como se conectan."      │
└─────────────────────────────────────────────────┘
```

---

## Orden de estudio recomendado

1. Empieza con **Flexbox** - es mas intuitivo y se usa mucho
2. Continua con **CSS Grid** - para layouts mas complejos
3. Termina con **z-index** - para controlar capas y superposiciones
4. Practica combinando Flexbox + Grid en un proyecto real

---

## Conexiones con otras secciones

```
Seccion 03 (Posicionamiento) ──► SECCION 04 (esta)
                                       │
                                       ▼
                                 Seccion 05 (Responsive Design)
                                       │
                                       ▼
                                 Seccion 06 (Proyecto final)
```
