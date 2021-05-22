import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Button, Container, List, Nav } from "./styles";

import logoWideBlueImg from "../../assets/logo_wide_blue.svg";
import logoWideWhiteImg from "../../assets/logo_wide_white.svg";
import arrowRightImg from "../../assets/arrowRight.svg";
import burguerIconWhiteImg from "../../assets/burguer_white.svg";
import burguerIconBlueImg from "../../assets/burguer_blue.svg";

export function Header() {
  const [isPageScrolled, setIsPageScrolled] = useState(false);
  const [isToogledBurguerButton, setIsToogledBurguerButton] = useState(false);

  function handleBurguerButton() {
    setIsToogledBurguerButton(!isToogledBurguerButton);
  }

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (scrollY >= 100) {
        setIsPageScrolled(true);
      } else setIsPageScrolled(false);
    });
  }, []);

  return (
    <Container className={isPageScrolled ? "scrolled" : " "}>
      <Link to="./">
        <img
          src={isPageScrolled ? logoWideBlueImg : logoWideWhiteImg}
          alt="Logo"
        />
      </Link>
      <button onClick={handleBurguerButton} className="clean burguer">
        <img
          src={isPageScrolled ? burguerIconBlueImg : burguerIconWhiteImg}
          alt="Menu"
        />
      </button>
      <Nav isActive={isToogledBurguerButton}>
        <List className={isPageScrolled ? "scrolled" : " "}>
          <li>
            <Link to="./">Como funciona</Link>
          </li>
          <li>
            <Link to="./">Quem somos</Link>
          </li>
          <li>
            <Link to="./">Parceiros</Link>
          </li>
          <li>
            <Link to="./">Dúvidas</Link>
          </li>
          <li>
            <Link to="./">Blog</Link>
          </li>
          <li>
            <Link to="./" className="login">
              Login
            </Link>
          </li>
          <li>
            <Link to="./">
              <Button icon={arrowRightImg}>
                <span>Transformar minha carreira</span>
              </Button>
            </Link>
          </li>
        </List>
      </Nav>
    </Container>
  );
}
