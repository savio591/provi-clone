import { Link } from "react-router-dom";
import { Container } from "./styles";

import logo_wide_whiteImg from "../../assets/logo_wide_white.svg";

import linkedin_circular_whiteImg from "../../assets/linkedin_circular_white.svg"
import instagram_circular_whiteImg from "../../assets/instagram_circular_white.svg"
import facebook_circular_whiteImg from "../../assets/facebook_circular_white.svg"
import blog_circular_whiteImg from "../../assets/blog_circular_white.svg"

export function Footer() {
  return (
    <Container>
      <div className="navSection">
        <Link to="./">
          <img src={logo_wide_whiteImg} alt="Logo" />
        </Link>
        <nav className="main">
          <ul>
            <li>Institucional</li>
            <li>
              <a href="./">Quem Somos</a>
            </li>
            <li>
              <a href="./">Como functiona</a>
            </li>
            <li>
              <a href="./">Parcerias</a>
            </li>
            <li>
              <a href="./">Dúvidas</a>
            </li>
          </ul>
          <ul>
            <li>Atendimento</li>
            <li>
              <a href="./">WhatsApp</a>
            </li>
            <li>
              <a href="./">WhatsApp</a>
            </li>
            <li>
              <a href="./">papo@provi.com.br</a>
            </li>
          </ul>
          <ul>
            <li>Explore</li>
            <li>
              <a href="./">Transforme sua carreira</a>
              <a href="./">Trabalhe conoscp</a>
            </li>
          </ul>
        </nav>
        <nav className="social">
          <ul>
            <li>
              <a href="./">
                <button className="clean">
                  <img src={facebook_circular_whiteImg} alt="Facebook" />
                </button>
              </a>
            </li>
            <li>
              <a href="./">
                <button className="clean">
                  <img src={instagram_circular_whiteImg} alt="Instagram" />
                </button>
              </a>
            </li>
            <li>
              <a href="./">
                <button className="clean">
                  <img src={linkedin_circular_whiteImg} alt="LinkedIn" />
                </button>
              </a>
            </li>
            <li>
              <a href="./">
                <button className="clean">
                  <img src={blog_circular_whiteImg} alt="Blog" />
                </button>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </Container>
  );
}
