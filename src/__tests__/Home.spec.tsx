import { render, fireEvent } from "@testing-library/react";
import { Header } from "../components/Header";

// import {
//   useSocialNav,
//   useCarousel,
//   useSitemap,
//   useNav,
// } from "../hooks/useProviApi";

// const mockedUseSocialNav = useSocialNav as jest.Mock;

jest.mock("../hooks/useProviApi", () => {
  return {
    useNav() {
      return []
    }
  }
});

describe("Rendering header", () => {
  it("active link render", () => {
    
  });
});
