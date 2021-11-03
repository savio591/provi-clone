import { GlobalStyle } from "../styles/global";
import { ProviApiProvider } from "../hooks/useProviApi";

import { Header } from "../components/Header";
import { LandingContainer } from "../components/LandingContainer";
import { Footer } from "../components/Footer";

export function Home() {
  return (
    <ProviApiProvider>
      <Header />
      <LandingContainer />
      <Footer />
      <GlobalStyle />
    </ProviApiProvider>
  );
}
