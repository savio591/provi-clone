import { render, screen } from "@testing-library/react";
import { ReactNode } from "react";
import { LandingContainer } from "../../components/LandingContainer";

import nt1Img from "./assets/nt1.png";
import nt2Img from "./assets/nt2.png";
import nt3Img from "./assets/nt3.png";
import nt4Img from "./assets/nt4.png";
import nt5Img from "./assets/nt5.png";

const mockedCarousel = [
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

jest.mock("../../hooks/useProviApi", () => {
  return {
    useCarousel() {
      return mockedCarousel;
    },
  };
});

jest.mock("react-router-dom", () => {
  return {
    Link: ({ children }: { children: ReactNode }) => children,
  };
});

describe("Rendering Keen-slider/caroulsel on Landing container", () => {
  it("Show be able to render the carousel list", () => {
    render(<LandingContainer />);
    mockedCarousel.map((item) => {
      return expect(screen.getByAltText(item.title)).toBeInTheDocument();
    });
  });
});
