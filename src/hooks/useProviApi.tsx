import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface NavData {
  title: string;
  link: string;
  type: "textLink" | "login";
}

interface SocialNavData {
  title: string;
  img: string;
  link: string;
}

interface SitemapData {
  title: string;
  contents: {
    title: string;
    link: string;
  }[];
}

interface ProviApiContextProps {
  children: ReactNode;
}

interface ProviApiContextData {
  socialNavData: SocialNavData[];
  sitemapData: SitemapData[];
  navData: NavData[];
}

export const ProviApiContext = createContext<ProviApiContextData>(
  {} as ProviApiContextData
);

export function ProviApiProvider({ children }: ProviApiContextProps) {
  const [navData, setNavData] = useState<NavData[]>([] as NavData[]);
  const [sitemapData, setSitemapData] = useState<SitemapData[]>(
    [] as SitemapData[]
  );
  const [socialNavData, setSocialNavData] = useState<SocialNavData[]>(
    [] as SocialNavData[]
  );

  useEffect(() => {
    fetch("api/socialData")
      .then((response) => response.json())
      .then((data) => setSocialNavData(data.socialLinks));
  }, []);

  useEffect(() => {
    fetch("api/sitemapData")
      .then((response) => response.json())
      .then((data) => setSitemapData(data.sitemapLinks));
  }, []);

  useEffect(() => {
    fetch("api/navData")
      .then((response) => response.json())
      .then((data) => setNavData(data.navLinks));
  }, []);

  return (
    <ProviApiContext.Provider value={{ socialNavData, sitemapData, navData }}>
      {children}
    </ProviApiContext.Provider>
  );
}

export function useProviApi() {
  const context = useContext(ProviApiContext);

  return context;
}

export function useSocialNav() {
  const { socialNavData } = useContext(ProviApiContext);

  return socialNavData;
}

export function useSitemapNav() {
  const { sitemapData } = useContext(ProviApiContext);

  return sitemapData;
}

export function useNav() {
  const { navData } = useContext(ProviApiContext);

  return navData;
}
