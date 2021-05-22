import { GlobalStyle } from "../styles/global";

import { Header } from "../components/Header";
import { MobileMenuModal } from "../components/Header/MobileMenuModal";
import { useState } from "react";
import { LandingContainer } from "../components/LandingContainer";
import { Footer } from "../components/Footer";

export function Home() {
  // const [isMenuModalActive, setIsMenuModalActive] = useState(false);

  // function handleOpenMenuModal() {
  //   setIsMenuModalActive(true);
  // }

  // function handleCloseMenuModal() {
  //   setIsMenuModalActive(false);
  // }

  return (
    <>
      <Header />
      {/* <MobileMenuModal
        isOpen={isMenuModalActive}
        onRequestClose={handleCloseMenuModal}
      /> */}
      <LandingContainer />
      <Footer />
      <GlobalStyle />
    </>
  );
}
