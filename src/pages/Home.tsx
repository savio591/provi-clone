import { GlobalStyle } from "../styles/global";

import { Header } from "../components/Header";
import { LandingContainer } from "../components/LandingContainer";
import { Footer } from "../components/Footer";
import { ProviApiProvider } from "../hooks/useProviApi";

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
