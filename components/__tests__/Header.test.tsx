import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Button from "../Button";

const theme = {
  colors: {
    primary: "#000",
    primaryDark: "#111",
    background: "#fff",
    text: "#000",
    white: "#fff",
  },
};

describe("Button", () => {
  it("renderiza o texto do botão", () => {
    render(
      <ThemeProvider theme={theme}>
        <Button>Teste</Button>
      </ThemeProvider>
    );

    expect(screen.getByText("Teste")).toBeTruthy();
  });
});