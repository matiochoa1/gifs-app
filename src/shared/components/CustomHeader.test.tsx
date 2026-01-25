import { describe, expect, test } from "vitest";
import { CustomHeader } from "./CustomHeader";
import { render, screen } from "@testing-library/react";

describe("CustomHeader", () => {
  const testTitle = "Buscador de Gifs";
  const testDescription = "Descubre el gif perfecto";

  test("should render the title properly", () => {
    render(<CustomHeader title={testTitle} />);

    screen.debug();

    expect(screen.getByText(testTitle)).toBeDefined();
  });

  test("should render the description when provided", () => {
    render(<CustomHeader title={testTitle} description={testDescription} />);

    screen.debug();

    expect(screen.getByText(testDescription)).toBeDefined();
    expect(screen.getByRole("paragraph").innerHTML).toBe(testDescription);
  });

  test("should not render description when not provided", () => {
    const { container } = render(<CustomHeader title={testTitle} />);

    const divElement = container.querySelector(".content-center");

    const h1 = divElement?.querySelector("h1");

    expect(h1?.innerHTML).toBe(testTitle);

    const p = divElement?.querySelector("p");

    expect(p).toBeNull();
  });
});
