import { FormularioNota } from "@/components/formulario-nota";

export default function Pagina() {
  return (
    <main className="mx-auto flex min-h-screen max-w-lg flex-col justify-center gap-6 p-6">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-semibold">Notas</h1>
        <p className="text-sm text-slate-600">
          Escribe una nota y guárdala. Si el texto incluye la palabra{" "}
          <strong>falla</strong>, el servidor la rechaza.
        </p>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <FormularioNota />
      </div>
    </main>
  );
}
