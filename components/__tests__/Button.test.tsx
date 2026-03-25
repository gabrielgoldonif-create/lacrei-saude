import { render, screen } from "@testing-library/react";
import Button from "../Button";

describe("Button", () => {
  it("renderiza o texto do botão", () => {
    render(<Button>Teste</Button>);

    expect(screen.getByText("Teste")).toBeTruthy();
  });
});