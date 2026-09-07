# Reto de una hora · Socialabs

Hola. Este es un proyectito de práctica: no es nuestro producto ni tiene datos de
nadie. Sirve para vernos trabajar una hora antes de seguir platicando.

**Está pensado para una hora.** Si te lleva mucho más, párale y mándalo como vaya:
también nos dice algo.

---

## Cómo arrancarlo

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm test       # las pruebas
pnpm typecheck  # los tipos
```

Necesitas **Node 22 o más nuevo** y **pnpm** (`npm i -g pnpm`). El proyecto usa
pnpm y la puerta de GitHub también, así que con npm o yarn se te va a poner en
rojo sin ser culpa tuya.

---

## La tarjeta

**Reproducir el problema:** abre la app, escribe una nota que incluya la palabra
`falla` y aprieta **Guardar**. El servidor la rechaza, pero la pantalla dice
**«Guardado»** de todos modos.

**Qué se pide:** que cuando el guardado falle, la persona se entere.

**Cuándo está terminada:**

- La pantalla ya no dice «Guardado» cuando el servidor rechazó la nota.
- Hay una prueba automática que lo demuestra, en `pruebas/`.
- `pnpm typecheck` y `pnpm test` pasan.
- La puerta de GitHub (pestaña **Actions**) queda en verde.

> **Si algo de esta tarjeta no te alcanza para empezar, pregúntalo por WhatsApp.
> No lo adivines.** Aquí trabajamos así: cada tarea llega con lo que hace falta, y
> cuando le falta algo, se pregunta. Preguntar no resta puntos; inventar sí.

---

## Cómo entregarlo

1. Arriba de esta página, aprieta **Use this template → Create a new repository**.
   Te crea tu propia copia en tu cuenta; no trabajas en la nuestra.
2. Haz tu arreglo en una rama, por ejemplo `arreglo`.
3. Abre un pull request **dentro de tu repositorio** (de `arreglo` hacia `main`).
4. En la descripción del pull request, escribe **tres líneas**:
   - qué cambió,
   - qué hay que mirar para verlo,
   - cómo comprobaste que quedó.
5. Manda por WhatsApp el enlace del pull request.

---

## Sobre la IA

**Úsala.** Aquí se programa con IA todos los días: Claude Code, Codex, Cursor, lo
que uses. No es trampa, es el trabajo.

Lo único que te pedimos es que, en el pull request, pegues **los prompts que usaste**
o tu archivo de reglas (`CLAUDE.md`, `AGENTS.md`, `.cursorrules`). Nos interesa más
cómo la dirigiste que cuánto escribiste tú a mano.

---

## Qué vamos a mirar

- Si preguntaste lo que faltaba en vez de inventarlo.
- Si la prueba de verdad falla sin tu arreglo y pasa con él.
- Si tocaste solo lo que había que tocar.
- Si te entendimos las tres líneas a la primera. Quien las escribe claro, gana.
