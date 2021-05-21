import { GlobalStyle } from "../styles/global";

import { Header } from "../components/Header";
import { MobileMenuModal } from "../components/Header/MobileMenuModal";
import { useState } from "react";
import { LandingContainer } from "../components/LandingContainer";

export function Home() {
  const [isMenuModalActive, setIsMenuModalActive] = useState(false);

  function handleOpenMenuModal() {
    setIsMenuModalActive(true);
  }

  function handleCloseMenuModal() {
    setIsMenuModalActive(false);
  }

  return (
    <>
      <Header onHandleBurguerButton={handleOpenMenuModal} />
      <MobileMenuModal
        isOpen={isMenuModalActive}
        onRequestClose={handleCloseMenuModal}
      />
      <LandingContainer />
      <GlobalStyle />
    </>
  );
}
