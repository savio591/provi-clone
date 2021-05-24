import { Link } from "react-router-dom";

import { useKeenSlider } from "keen-slider/react";
import { KeenSlider } from "../KeenSlider";

import { Card } from "./styles";

import arrow_left_circularImg from "../../assets/arrow_left_circular.svg";
import linkedin_circularImg from "../../assets/linkedin_circular.png";

export function PinCardsSlider() {
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: false,
    duration: 1000,
  });

  function handleNextSlide() {
    slider.next();
  }

  function handlePrevSlide() {
    slider.prev();
  }

  return (
    <KeenSlider
      sliderRef={sliderRef}
      content={[
        <Card>
          <section>
            <h1 className="text30 blue center">
              <span>Clayton Margiotti</span>
            </h1>
            <h2 className="text24 center magenta">
              <span>Founder and CEO @Eleva Leader</span>
            </h2>
          </section>

          <nav className="cardNavigator">
            <button className="clean" onClick={handlePrevSlide}>
              <img src={arrow_left_circularImg} alt="card anterior" />
            </button>
            <Link to="./">
              <img src={linkedin_circularImg} alt="LinkedIn" />
            </Link>
            <button className="clean" onClick={handleNextSlide}>
              <img
                src={arrow_left_circularImg}
                alt="próximo card"
                className="rotate180"
              />
            </button>
          </nav>
          <p className="text24 blue">
            A Provi definitivamente foi um elo que proporcionou uma experiência
            fantástica. Um financiamento prático e rápido.
          </p>
        </Card>,
        <Card>
          <section>
            <h1 className="text30 blue center">
              <span>Giovanni de Paulo da Cunha</span>
            </h1>
            <h2 className="text24 center magenta">
              <span>Full Stack Developer @ Aoop Cloud Solutions</span>
            </h2>
          </section>

          <nav className="cardNavigator">
            <button className="clean" onClick={handlePrevSlide}>
              <img src={arrow_left_circularImg} alt="card anterior" />
            </button>
            <Link to="./">
              <img src={linkedin_circularImg} alt="LinkedIn" />
            </Link>
            <button className="clean" onClick={handleNextSlide}>
              <img
                src={arrow_left_circularImg}
                alt="próximo card"
                className="rotate180"
              />
            </button>
          </nav>
          <p className="text24 blue">
            Fazer o curso da Ironhack foi uma das melhores escolhas que já fiz,
            que me proporcionou um conhecimento incrível. Sem a Provi, eu não
            teria tido a chance de fazer o curso.
          </p>
        </Card>,
      ]}
    />
  );
}
