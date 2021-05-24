import { createServer, Model } from "miragejs";

import facebook_circular_whiteImg from "./assets/facebook_circular_white.svg";
import instagram_circular_whiteImg from "./assets/instagram_circular_white.svg";
import linkedin_circular_whiteImg from "./assets/linkedin_circular_white.svg";
import blog_circular_whiteImg from "./assets/blog_circular_white.svg";

import nt1Img from "./assets/nt1.png";
import nt2Img from "./assets/nt2.png";
import nt3Img from "./assets/nt3.png";
import nt4Img from "./assets/nt4.png";
import nt5Img from "./assets/nt5.png";

export function Server() {
  createServer({
    models: {
      socialLinks: Model,
      sitemapLinks: Model,
      navLinks: Model,
      carouselLinks: Model,
    },

    seeds(server) {
      server.db.loadData({
        carouselLinks: [
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
        ],
        navLinks: [
          {
            title: "Como funciona",
            link: "./",
            type: "textLink",
          },
          {
            title: "Quem somos",
            link: "./",
            type: "textLink",
          },
          {
            title: "Parceiros",
            link: "./",
            type: "textLink",
          },
          {
            title: "Dúvidas",
            link: "./",
            type: "textLink",
          },
          {
            title: "Blog",
            link: "./",
            type: "textLink",
          },
          {
            title: "Login",
            link: "./",
            type: "login",
          },
        ],
        socialLinks: [
          {
            title: "Facebook",
            link: "./",
            img: facebook_circular_whiteImg,
          },

          {
            title: "Instagram",
            link: "./",
            img: instagram_circular_whiteImg,
          },
          {
            title: "LinkedIn",
            link: "./",
            img: linkedin_circular_whiteImg,
          },
          {
            title: "Blog",
            link: "./",
            img: blog_circular_whiteImg,
          },
        ],
        sitemapLinks: [
          {
            title: "Institucional",
            contents: [
              {
                title: "Quem somos",
                link: "./",
              },
              {
                title: "Como funciona",
                link: "./",
              },
              {
                title: "Parcerias",
                link: "./",
              },
              {
                title: "Dúvidas",
                link: "./",
              },
            ],
          },
          {
            title: "Atendimento",
            contents: [
              {
                title: "WhatsApp",
                link: "./",
              },
              {
                title: "papo@provi.com.br",
                link: "./",
              },
            ],
          },
          {
            title: "Explore",
            contents: [
              {
                title: "Transforme sua carreira",
                link: "./",
              },
              {
                title: "Trabalhe conosco",
                link: "./",
              },
            ],
          },
        ],
      });
    },

    routes() {
      this.namespace = "api";

      this.get("socialData", () => {
        return this.schema.all("socialLinks");
      });
      this.get("sitemapData", () => {
        return this.schema.all("sitemapLinks");
      });
      this.get("navData", () => {
        return this.schema.all("navLinks");
      });
      this.get("carouselData", () => {
        return this.schema.all("carouselLinks");
      });
    },
  });
}
