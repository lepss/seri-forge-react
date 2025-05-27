import { Helmet } from "react-helmet";
import { ContactSection } from "../components/contactSection";
import { HeroSection } from "../components/heroSection";
import { OffersSection } from "../components/offersSection";

const offers = [
  {
    name: "Forge Libre",
    href: "/forge-libre",
    image: "/images/forge-libre/05.jpg",
  },
  {
    name: "Laminage Circulaire",
    href: "/laminage-circulaire",
    image: "/images/laminage-circulaire/02.jpg",
  },
  {
    name: "Estampage",
    href: "/estampage",
    image: "/images/estampage/01.jpg",
  },
  {
    name: "Oxycoupage",
    href: "/oxycoupage",
    image: "/images/oxycoupage/03.webp",
  },
  { name: "Barres", href: "/barres", image: "/images/barre/01.png" },
];

export const Home = () => {
  return (
    <>
      <Helmet>
        <title>Seri Forge</title>
      </Helmet>
      <main>
        <HeroSection />
        <OffersSection offers={offers} />
        <ContactSection />
      </main>
    </>
  );
};
