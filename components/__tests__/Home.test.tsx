import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Home from "@/app/page";

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

const theme = {
  colors: {
    primary: "#000",
    primaryDark: "#111",
    background: "#fff",
    text: "#000",
    white: "#fff",
  },
};

describe("Home", () => {
  it("altera mensagem ao clicar no botão", () => {
    render(
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    );

    const botao = screen.getByText("Buscar profissionais");

    fireEvent.click(botao);

    expect(
      screen.getByText(
        "Você escolheu buscar profissionais. Em breve um de nossos atendentes entrará em contato. Aguarde!"
      )
    ).toBeTruthy();
  });
});