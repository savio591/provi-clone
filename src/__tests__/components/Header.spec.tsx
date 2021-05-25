import { render, screen } from "@testing-library/react";
import { ReactNode } from "react";
import { Header } from "../../components/Header";

const mockedNavApi = [
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
];

jest.mock("../../hooks/useProviApi", () => {
  return {
    useNav() {
      return mockedNavApi;
    },
  };
});

jest.mock("react-router-dom", () => {
  return {
    Link: ({ children }: { children: ReactNode }) => children,
  };
});

describe("Rendering header", () => {
  it("Show be able to map the api to returns the navigation bar lists", () => {
    render(<Header />);
    mockedNavApi.map((item) => {
      return expect(screen.getByText(item.title)).toBeInTheDocument();
    });
  });
});
