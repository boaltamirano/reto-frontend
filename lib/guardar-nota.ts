/**
 * Simula el servidor que guarda una nota.
 *
 * Tarda un poco, como cualquier petición real, y falla cuando el texto
 * contiene la palabra «falla». Así puedes reproducir el error sin
 * depender de la suerte ni de internet.
 *
 * No hace falta que toques este archivo.
 */
export async function guardarNota(texto: string): Promise<void> {
  await new Promise((resolver) => setTimeout(resolver, 400));

  if (texto.toLowerCase().includes("falla")) {
    throw new Error("El servidor rechazó la nota");
  }
}
