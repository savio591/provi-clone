import { createServer, Model } from "miragejs";

import facebook_circular_whiteImg from "./assets/facebook_circular_white.svg";
import instagram_circular_whiteImg from "./assets/instagram_circular_white.svg";
import linkedin_circular_whiteImg from "./assets/linkedin_circular_white.svg";
import blog_circular_whiteImg from "./assets/blog_circular_white.svg";

export function Server() {
  createServer({
    models: {
      socialLinks: Model,
      sitemapLinks: Model,
      navLinks: Model
    },

    seeds(server) {
      server.db.loadData({
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
    },
  });
}

// sitemapData: [
//   {
//     type: "nav",
//     data: [
//       {
//         title: "Como funciona",
//         link: "./",
//         type: "textLink",
//       },
//       {
//         title: "Quem somos",
//         link: "./",
//         type: "textLink",
//       },
//       {
//         title: "Parceiros",
//         link: "./",
//         type: "textLink",
//       },
//       {
//         title: "Dúvidas",
//         link: "./",
//         type: "textLink",
//       },
//       {
//         title: "Blog",
//         link: "./",
//         type: "textLink",
//       },
//       {
//         title: "Login",
//         link: "./",
//         type: "login",
//       },
//     ],
//   },
//   {
//     type: "sitemap",
//     data: [
//
//     ],
//   },
// ],
// }
