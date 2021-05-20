import { Link } from "react-router-dom";
import { Container } from "./styles";

import logo_wide_whiteImg from "../../assets/logo_wide_white.svg";

import linkedin_circular_whiteImg from "../../assets/linkedin_circular_white.svg";
import instagram_circular_whiteImg from "../../assets/instagram_circular_white.svg";
import facebook_circular_whiteImg from "../../assets/facebook_circular_white.svg";
import blog_circular_whiteImg from "../../assets/blog_circular_white.svg";

export function Footer() {
  return (
    <Container>
      <div className="navSection">
        <Link to="./" className="hover">
          <img src={logo_wide_whiteImg} alt="Logo" />
        </Link>
        <nav className="main">
          <ul>
            <li>
              <span className="magenta">Institucional</span>
            </li>
            <li>
              <Link to="./" className="textLink16 hover">
                Quem Somos
              </Link>
            </li>
            <li>
              <Link to="./" className="textLink16 hover">
                Como functiona
              </Link>
            </li>
            <li>
              <Link to="./" className="textLink16 hover">
                Parcerias
              </Link>
            </li>
            <li>
              <Link to="./" className="textLink16 hover">
                Dúvidas
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <span className="magenta">Atendimento</span>
            </li>
            <li>
              <Link to="./" className="textLink16 hover">
                WhatsApp
              </Link>
            </li>
            <li>
              <Link to="./" className="textLink16 hover">
                papo@provi.com.br
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <span className="magenta">Explore</span>
            </li>
            <li>
              <Link to="./" className="textLink16 hover">
                Transforme sua carreira
              </Link>
            </li>
            <li>
              <Link to="./" className="textLink16 hover">
                Trabalhe conosco
              </Link>
            </li>
          </ul>
        </nav>
        <nav className="social">
          <ul>
            <li>
              <Link to="./">
                <button className="clean">
                  <img src={facebook_circular_whiteImg} alt="Facebook" />
                </button>
              </Link>
            </li>
            <li>
              <Link to="./">
                <button className="clean">
                  <img src={instagram_circular_whiteImg} alt="Instagram" />
                </button>
              </Link>
            </li>
            <li>
              <Link to="./">
                <button className="clean">
                  <img src={linkedin_circular_whiteImg} alt="LinkedIn" />
                </button>
              </Link>
            </li>
            <li>
              <Link to="./">
                <button className="clean">
                  <img src={blog_circular_whiteImg} alt="Blog" />
                </button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="text12">
        Avenida Doutor Cardoso de Melo, 1340 - conjunto 11 - Vila Olímpia, São
        Paulo - SP, 04548-004
      </div>
      <div className="separator"></div>
      <div className="rights">
        <div className="left">
          <a href="./" className="textLink12">
            Termos de uso
          </a>
          <a href="./" className="textLink12">
            Politica de privacidade
          </a>
        </div>
        <div className="right text12">
          Copyrights ® 2021 Provi. All rights reserved.
        </div>
      </div>
    </Container>
  );
}
