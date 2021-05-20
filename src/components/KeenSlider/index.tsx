import { ReactNode, useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";

interface KeenSliderProps {
  content: ReactNode[];
}

export function KeenSlider({ content }: KeenSliderProps) {
  const [pause, setPause] = useState(false);

  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    duration: 1000,
    dragStart: () => {
      setPause(true);
    },
    dragEnd: () => {
      setPause(false);
    },
  });

  useEffect(() => {
    sliderRef.current.addEventListener("mouseover", () => {
      setPause(true);
    });
    sliderRef.current.addEventListener("mouseout", () => {
      setPause(false);
    });
  }, [sliderRef]);

  return (
    <>
      <div ref={sliderRef} className="keen-slider cards">
        {content.map((item) => {
          return <div className="keen-slider__slide">{item}</div>;
        })}
      </div>
    </>
  );
}
