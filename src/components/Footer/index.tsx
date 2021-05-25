import { Link } from "react-router-dom";

import { useSitemap, useSocialNav } from "../../hooks/useProviApi";

import { Container } from "./styles";
import logo_wide_whiteImg from "../../assets/logo_wide_white.svg";


export function Footer() {
  const socialLinksData = useSocialNav();
  const sitemapData = useSitemap();
  return (
    <Container>
      <div className="navSection">
        <Link to="./" className="hover">
          <img src={logo_wide_whiteImg} alt="Logo" />
        </Link>
        <nav className="main">
          {sitemapData.map((item, id) => {
            return (
              <ul key={id}>
                <li>
                  <span className="magenta">{item.title}</span>
                </li>
                {item.contents.map((content, contentId) => {
                  return (
                    <li key={contentId}>
                      <Link to={content.link} className="textLink16 hover">
                        {content.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            );
          })}
        </nav>
        <nav className="social">
          <ul>
            {socialLinksData.map((item) => {
              return (
                <li key={item.title}>
                  <Link to={item.link}>
                    <button className="clean">
                      <img src={item.img} alt={item.title} />
                    </button>
                  </Link>
                </li>
              );
            })}
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
          <Link to="./" className="textLink12">
            Termos de uso
          </Link>
          <Link to="./" className="textLink12">
            Politica de privacidade
          </Link>
        </div>
        <div className="right text12">
          Copyrights ® 2021 Provi. All rights reserved.
        </div>
      </div>
    </Container>
  );
}
