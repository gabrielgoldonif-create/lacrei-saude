import { render, screen, fireEvent } from "@testing-library/react";
import Home from "@/app/page";

describe("Home", () => {
  it("altera mensagem ao clicar no botão", () => {
    render(<Home />);

    const botao = screen.getByText("Buscar profissionais");

    fireEvent.click(botao);

    expect(
      screen.getByText("Você escolheu buscar profissionais.")
    ).toBeTruthy();
  });
});