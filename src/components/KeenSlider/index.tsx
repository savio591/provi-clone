import { useKeenSlider } from "keen-slider/react";
import { ReactNode, RefObject } from "react";

interface KeenSliderProps {
  content: ReactNode[];
  sliderRef: RefObject<HTMLDivElement>;
}

export function KeenSlider({ content, sliderRef }: KeenSliderProps) {
  return (
    <div ref={sliderRef} className="keen-slider cards">
      {content.map((item, id) => {
        return (
          <div key={id} className="keen-slider__slide">
            {item}
          </div>
        );
      })}
    </div>
  );
}
