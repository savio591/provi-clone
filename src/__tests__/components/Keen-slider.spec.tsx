import { render, screen } from "@testing-library/react";
import { useKeenSlider } from "keen-slider/react";
import { ReactNode, useRef } from "react";
import { KeenSlider } from "../../components/KeenSlider";


describe("Rendering Keen-slider", () => {
  it("Show be able to receive the array on content prop and render the slider", () => {
   

    const content = [<p>Hello world</p>, <h1>Hello, world!</h1>];

    console.log(screen.debug());

    render(<KeenSlider sliderRef={useRef(null)} content={content} />);
  });
});
