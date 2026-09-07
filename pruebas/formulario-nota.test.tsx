import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { FormularioNota } from "@/components/formulario-nota";

describe("FormularioNota", () => {
  it("avisa que la nota quedó guardada", async () => {
    const usuario = userEvent.setup();
    render(<FormularioNota />);

    await usuario.type(screen.getByLabelText("Tu nota"), "Comprar café");
    await usuario.click(screen.getByRole("button", { name: "Guardar" }));

    expect(await screen.findByText("Guardado")).toBeInTheDocument();
  });

  it("no dice «Guardado» cuando el servidor rechaza la nota", async () => {
    const usuario = userEvent.setup();
    render(<FormularioNota />);

    await usuario.type(screen.getByLabelText("Tu nota"), "Esto falla");
    await usuario.click(screen.getByRole("button", { name: "Guardar" }));

    const aviso = await screen.findByRole("alert");
    expect(aviso).toHaveTextContent("No se pudo guardar");
    expect(aviso).toHaveTextContent("El servidor rechazó la nota");

    expect(screen.queryByText("Guardado")).not.toBeInTheDocument();
  });
});
