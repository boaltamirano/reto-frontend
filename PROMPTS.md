# Prompts usados en el reto

Registro de los mensajes que le di a la IA (Claude Code, modelo Opus 4.8) durante el reto,
en orden, con una nota breve de lo que hizo en cada paso. La regla de trabajo era clara:
preguntar lo que faltara en vez de inventarlo, tocar solo lo necesario, y que la prueba
fallara sin el arreglo y pasara con él.

## 1. Contexto y entendimiento del reto

Prompt: le pegué la tarjeta completa del reto (app de notas que dice «Guardado» aunque el
servidor rechace la nota con la palabra «falla»), le pedí que primero entendiera de qué iba
el directorio y que preparara un archivo md con los prompts que fuéramos escribiendo.

Qué hizo: leyó el repositorio en GitHub sin clonarlo todavía (README, package.json, el
componente del formulario, la función que simula el servidor, el test y el CI) y resumió el
bug, la definición de terminado y el estado base de los dos commits del template.

## 2. Levantar el entorno en Docker

Prompt: «aqui tienes ya el repositorio dentro de reto-frontend inicia creando los contenedores
de docker para levantar el aplicativo, crea un contenedor adicional para ejecutar los test
este va a ser desechable el contenedor como la imagen si ciclo de vida sera mientras la prueba
termine»

Qué hizo: creó Dockerfile y docker-compose.yml para levantar la app (Node 22, pnpm 10.34.5,
Next 16) en http://localhost:3000, y un Dockerfile.test con docker-test.sh para correr
typecheck y pruebas en una imagen y contenedor desechables (build, docker run --rm, y borrado
de la imagen al terminar). Verificó que la app respondía HTTP 200 y que el contenedor de
pruebas se autodestruía.

## 3. Crear la rama de trabajo

Prompt: «realiza la rama»

Qué hizo: creó la rama arreglo desde main, como pide la tarjeta.

## 4. Escribir la prueba que falla con el código actual

Prompt: «estas escribiendo el archivo de PROMPT ?? escribe las pruebas que falle el codigo
actual»

Qué hizo: agregó en pruebas/formulario-nota.test.tsx una prueba que escribe una nota con la
palabra «falla», la guarda, y exige que aparezca un aviso de error accesible («No se pudo
guardar») y que no aparezca «Guardado». Corrió el contenedor desechable y comprobó que la
prueba falla con el código actual («Unable to find role=alert»), mientras la prueba original
sigue pasando.

## 5. Aplicar el arreglo

Prompt: «si aplica el arreglo»

Qué hizo: en components/formulario-nota.tsx añadió el estado «error», y en el catch pasó a ese
estado con un return temprano para no marcar «Guardado» cuando el servidor rechaza la nota.
Agregó un aviso con role="alert" que dice «No se pudo guardar» e incluye el motivo que devuelve
el servidor (capturado del error, con respaldo por si viniera sin mensaje). La prueba verifica
que aparece el aviso con el motivo y que ya no aparece «Guardado». Volvió a correr el contenedor
desechable: typecheck en verde y las dos pruebas pasan (la original y la del arreglo).
