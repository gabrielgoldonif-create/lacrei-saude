import "@testing-library/jest-dom";
import { describe, expect, it } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import Header from "../Header";

describe("Header", () => {
  it("renderiza o título Lacrei Saúde", () => {
    render(<Header />);

    expect(screen.getByText("Lacrei Saúde")).toBeTruthy();
  });
});