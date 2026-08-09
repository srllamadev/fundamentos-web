# Funciones Modernas de CSS

## ¿Que aprendemos aqui?

- Como usar `calc()` para calculos matematicos en CSS
- Como `clamp()` crea valores responsivos con minimo y maximo
- Como `min()` y `max()` controlan limites automaticamente
- Combinar funciones para disenos verdaderamente fluidos
- Casos practicos aplicados al perfil de Yamil N.

---

## Bloque de codigo completo

```css
/* ============================================
   FUNCIONES MODERNAS - Ejemplo completo
   Perfil: Yamil N. - TextilPro S.A.
   ============================================ */

/* 1. calc() - Calculos matematicos */
.contenedor-yamil {
  /* Ancho total menos margenes laterales */
  width: calc(100% - 2 * 20px);
  /* Padding que combina unidades fijas y relativas */
  padding: calc(1rem + 8px);
  /* Altura dinamica */
  min-height: calc(100vh - 64px - 48px);
}

/* 2. clamp() - Valor con limites inferior y superior */
.titulo-principal {
  /* Fluido entre 1.5rem y 3rem, ideal 5vw */
  font-size: clamp(1.5rem, 5vw, 3rem);
}

.texto-descripcion {
  /* Ancho de linea legible */
  max-width: clamp(300px, 60%, 700px);
}

/* 3. min() - Elige el valor mas pequenio */
.tarjeta-perfil {
  /* Nunca mas ancho que el contenedor o 500px */
  width: min(100%, 500px);
  /* Padding proporcional pero limitado */
  padding: min(5vw, 32px);
}

/* 4. max() - Elige el valor mas grande */
.barra-lateral {
  /* Al menos 250px o 30% del contenedor */
  width: max(250px, 30%);
}

/* 5. Combinacion de funciones */
.hero-yamil {
  /* clamp + calc combinados */
  padding: clamp(1rem, calc(2vw + 0.5rem), 3rem);
  font-size: clamp(1.2rem, calc(1rem + 1vw), 2.5rem);
}
```

---

## Explicacion detallada con diagramas ASCII

### calc() - La calculadora de CSS

`calc()` te permite mezclar unidades diferentes (px, %, rem, vw, vh) en un solo calculo. Es como tener una calculadora dentro de tu CSS.

```
  calc() - Mezcla de unidades
  ┌──────────────────────────────────────────┐
  │                                          │
  │  calc(100% - 40px)                       │
  │  ┌────────────────────────────────┐      │
  │  │← 20px →┌──────────────┐← 20px →│     │
  │  │         │  Contenido   │        │      │
  │  │         │  100% - 40px │        │      │
  │  │         └──────────────┘        │      │
  │  └────────────────────────────────┘      │
  │                                          │
  │  calc(2rem + 10px)                       │
  │  [==2rem==][=10px=]                      │
  │  └─── combinado ──→ valor final          │
  └──────────────────────────────────────────┘
```

**Regla de oro:** Los operadores (`+`, `-`, `*`, `/`) deben tener espacios a los lados.

```
  ✅  calc(100% - 20px)    → correcto
  ❌  calc(100%-20px)      → INVALIDO (sin espacios)
  ✅  calc(2 * 1rem)       → correcto
  ✅  calc(10px / 2)       → correcto
```

### clamp() - El control total

`clamp(minimo, ideal, maximo)` es como decir: "Nunca mas pequenio que X, nunca mas grande que Z, pero intenta ser Y".

```
  clamp(1rem, 5vw, 3rem)

  Tamanio de fuente
  ^
  │
3rem│──────────────────────────────→ maximo
    │                              ╱
    │                            ╱
    │                          ╱  ← crece con viewport
    │                        ╱
1rem│──────────────────────→ minimo
    │
    └──────────────────────────────────→ Viewport width
         pequenio    mediano    grande
```

**Ejemplo con Yamil N.:**
En una pantalla de movil (320px), `5vw` = 16px = 1rem → usa el minimo (1rem)
En una pantalla de escritorio (1920px), `5vw` = 96px ≈ 6rem → usa el maximo (3rem)
En una tablet (768px), `5vw` = 38px ≈ 2.4rem → usa el valor ideal

### min() y max() - Los guardianes

```
  min() - Elige el MENOR        max() - Elige el MAYOR
  ┌────────────────────┐        ┌────────────────────┐
  │ min(100%, 500px)   │        │ max(250px, 30%)    │
  │                    │        │                    │
  │ Si viewport=400px: │        │ Si viewport=400px: │
  │ 100%=400, 500=500  │        │ 250=250, 30%=120  │
  │ → usa 400px        │        │ → usa 250px       │
  │                    │        │                    │
  │ Si viewport=1200px:│        │ Si viewport=1200px:│
  │ 100%=1200, 500=500│        │ 250=250, 30%=360  │
  │ → usa 500px        │        │ → usa 360px       │
  └────────────────────┘        └────────────────────┘
```

---

## Tabla comparativa de funciones

| Funcion | Sintaxis | ¿Que devuelve? | Caso de uso tipico |
|---|---|---|---|
| `calc()` | `calc(expresion)` | Resultado del calculo | Mezclar unidades (px + %) |
| `clamp()` | `clamp(min, ideal, max)` | Valor entre limites | Tipografia fluida |
| `min()` | `min(a, b)` | El valor menor | Limitar ancho maximo |
| `max()` | `max(a, b)` | El valor mayor | Establecer minimo garantizado |

---

## Tabla de reglas

| Regla | Descripcion | Ejemplo |
|---|---|---|
| Espacios en calc() | Los operadores necesitan espacios | `calc(100% - 20px)` ✅ |
| clamp() ordenado | Siempre min < ideal < max | `clamp(1rem, 3vw, 2rem)` |
| min() para limites | Usar para "no mas grande que" | `width: min(100%, 800px)` |
| max() para pisos | Usar para "no mas pequenio que" | `width: max(300px, 50%)` |
| Se pueden anidar | Funciones dentro de funciones | `clamp(1rem, calc(2vw + 0.5rem), 3rem)` |
| Unidades compatibles | calc() puede mezclar px, rem, %, vw, vh | `calc(50% + 2rem)` |

---

## Errores comunes

| Error | Codigo incorrecto | Codigo correcto | Por que falla |
|---|---|---|---|
| Sin espacios en calc() | `calc(100%-20px)` | `calc(100% - 20px)` | CSS no puede parsear sin espacios |
| clamp() desordenado | `clamp(3rem, 1rem, 2rem)` | `clamp(1rem, 3vw, 3rem)` | El minimo no puede ser mayor que el maximo |
| Division por cero | `calc(100px / 0)` | `calc(100px / 2)` | Division por cero es invalida |
| Confundir min/max | Usar `min()` cuando quieres `max()` | Analizar cual valor necesitas | `min()` limita por arriba, `max()` por abajo |
| Unidades incompatibles | `calc(100px + 5em)` (contexto incierto) | `calc(100px + 5 * 1em)` | Multiplicar por escalar es mas seguro |

---

## Ejercicios practicos

### Ejercicio 1: Titulo fluido para TextilPro S.A.
Usa `clamp()` para crear un titulo que sea:
- Minimo: 1.5rem
- Ideal: 4vw
- Maximo: 3.5rem

### Ejercicio 2: Tarjeta responsive
Crea una tarjeta de perfil que use `min()` para que nunca exceda 600px de ancho, pero que se ajuste al 100% en moviles.

### Ejercicio 3: Contenedor con calc()
Crea un contenedor que ocupe `calc(100vw - 200px)` cuando hay una barra lateral de 200px.

### Ejercicio 4: Combinacion avanzada
Crea un padding que use `clamp()` con `calc()` dentro: `clamp(1rem, calc(1rem + 2vw), 3rem)`.
Prueba en diferentes tamanios de pantalla y documenta los resultados.
