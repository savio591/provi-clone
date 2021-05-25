import { render, screen } from "@testing-library/react";
import { KeenSlider } from "../../components/KeenSlider";

const mockedContent = [
  <p>Hello world</p>,
  <div data-testid="divWithH1">
    <h1>Hello, word</h1>
  </div>,
];

describe("Rendering Keen-slider", () => {
  it("Show be able to receive the array on content prop and render the slider", () => {
    render(<KeenSlider content={mockedContent} />);

    expect(screen.getByText("Hello world")).toContainHTML("<p>Hello world</p>");
    expect(screen.getByTestId("divWithH1")).toContainHTML(`<div data-testid="divWithH1"><h1>Hello, word</h1></div>`);
  });
});
