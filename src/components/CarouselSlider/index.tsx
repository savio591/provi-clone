import { useKeenSlider } from "keen-slider/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import nt1Img from "../../assets/nt1.png";
import nt2Img from "../../assets/nt2.png";
import nt3Img from "../../assets/nt3.png";
import nt4Img from "../../assets/nt4.png";
import nt5Img from "../../assets/nt5.png";

import { KeenSlider } from "../KeenSlider";
import { Container } from "./styles";

interface ContentsData {
  title: string;
  link: string;
  img: any;
}

export function CarouselSlider() {
  const contents: ContentsData[] = [
    {
      title: "Negócios",
      link: "./",
      img: nt1Img,
    },
    {
      title: "Valor",
      link: "./",
      img: nt2Img,
    },
    {
      title: "Forbes",
      link: "./",
      img: nt3Img,
    },
    {
      title: "EXAME",
      link: "./",
      img: nt4Img,
    },
    {
      title: "StartSE",
      link: "./",
      img: nt5Img,
    },
  ];
  const [screenSize, setScreenSize] = useState<"desktop" | "small">("small");
  const [carouselRef, carousel] = useKeenSlider<HTMLDivElement>({
    loop: false,
    duration: 1000,
    slidesPerView: screenSize === "desktop" ? 5 : 1,
  });

  useEffect(() => {
    window.addEventListener("load", () => {
      if (innerWidth > 640) handleScreenSize("desktop");
      else handleScreenSize("small");
    });
    window.addEventListener("resize", () => {
      if (innerWidth > 640) handleScreenSize("desktop");
      else handleScreenSize("small");
    });
  }, []);

  function handleScreenSize(size: "desktop" | "small") {
    setScreenSize(size);
  }

  return (
    <Container>
      <KeenSlider
        sliderRef={carouselRef}
        content={contents.map((item) => {
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
