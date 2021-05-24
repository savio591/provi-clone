import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useNav } from "../../hooks/useProviApi";

import { Button, Container, List, Nav } from "./styles";

import logoWideBlueImg from "../../assets/logo_wide_blue.svg";
import logoWideWhiteImg from "../../assets/logo_wide_white.svg";
import arrowRightImg from "../../assets/arrowRight.svg";
import burguerIconWhiteImg from "../../assets/burguer_white.svg";
import burguerIconBlueImg from "../../assets/burguer_blue.svg";

export function Header() {
  const [isPageScrolled, setIsPageScrolled] = useState(false);
  const [isToogledBurguerButton, setIsToogledBurguerButton] = useState(false);
  const navData = useNav();
  console.log(navData)

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
          {navData.map((item) => {
            if (item.type === "textLink") {
              return (
                <li key={item.title}>
                  <Link to={item.link}>{item.title}</Link>
                </li>
              );
            }
            if (item.type === "login") {
              return (
                <li key={item.title}>
                  <Link to={item.link} className="login">
                    {item.title}
                  </Link>
                </li>
              );
            }
          })}
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
