import { render, screen } from "@testing-library/react";
import { ReactNode } from "react";
import { Header } from "../../components/Header";

import facebook_circular_whiteImg from "./assets/facebook_circular_white.svg";
import instagram_circular_whiteImg from "./assets/instagram_circular_white.svg";
import linkedin_circular_whiteImg from "./assets/linkedin_circular_white.svg";
import blog_circular_whiteImg from "./assets/blog_circular_white.svg";
import { Footer } from "../../components/Footer";

const mockedSocialLinksApi = [
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
];

const mockedSitemap = [
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
];

jest.mock("../../hooks/useProviApi", () => {
  return {
    useSocialNav() {
      return mockedSocialLinksApi;
    },
    useSitemap() {
      return mockedSitemap;
    },
  };
});

jest.mock("react-router-dom", () => {
  return {
    Link: ({ children }: { children: ReactNode }) => children,
  };
});

describe("Rendering footer", () => {
  it("Show be able to map social links on footer", () => {
    render(<Footer />);
    mockedSocialLinksApi.map((item) => {
      return expect(screen.getByAltText(item.title)).toBeInTheDocument();
    });
  });
  it("Show be able to map sitemap links on footer", () => {
    render(<Footer />);
    mockedSitemap.map((item) => {
      return expect(screen.getByText(item.title)).toBeInTheDocument();
    });
  });
});
