import { useKeenSlider } from "keen-slider/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCarousel } from "../../hooks/useProviApi";

import { KeenSlider } from "../KeenSlider";
imsport { Container } from "./styles";

export function CarouselSlider() {
  const carouselData = useCarousel();

  const [screenSize, setScreenSize] = useState<"desktop" | "small">("desktop");
  const [carouselRef, carousel] = useKeenSlider<HTMLDivElement>({
    loop: false,
    duration: 1000,
    slidesPerView: screenSize === "desktop" ? 5 : 1,
  });

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (innerWidth > 640) setScreenSize("desktop");
      else setScreenSize("small");
    });
    window.addEventListener("resize", () => {
      if (innerWidth > 640) setScreenSize("desktop");
      else setScreenSize("small");
    });
  }, [carouselData]);

  return (
    <Container>
      <KeenSlider
        sliderRef={carouselRef}
        content={carouselData.map((item) => {
          return (
            <div key={item.title} className="item">
              <Link to={item.link}>
                <img src={item.img} alt={item.title} />
              </Link>
            </div>
          );
        })}
      />
    </Container>
  );
}
