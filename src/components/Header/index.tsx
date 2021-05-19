import { Button, BurguerStyle, Container, List, Nav } from "./styles";

import logoWideBlueImg from "../../assets/logo_wide_blue.svg";
import logoWideWhiteImg from "../../assets/logo_wide_white.svg";
import arrowRightImg from "../../assets/arrowRight.svg";
import { Link } from "react-router-dom";
import { Burguer } from "./Burguer";
import { useState } from "react";

interface HeaderProps {
  onHandleBurguerButton: () => void;
}

export function Header({ onHandleBurguerButton }: HeaderProps) {
  const [isPageScrolled, setIsPageScrolled] = useState(false);

  return (
    <Container className="scrolled">
      <Link to="./">
        <img src={logoWideBlueImg} alt="Logo" />
      </Link>
      <Burguer onClick={onHandleBurguerButton} />
      <Nav>
        <List className="scrolled">
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
