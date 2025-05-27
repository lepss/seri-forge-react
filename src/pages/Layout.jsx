import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/header";

const links = [
  { name: "Accueil", href: "/" },
  { name: "Forge Libre", href: "/forge-libre" },
  { name: "Laminage Circulaire", href: "/laminage-circulaire" },
  { name: "Estampage", href: "/estampage" },
  { name: "Oxycoupage", href: "/oxycoupage" },
  { name: "Barres", href: "/barres" },
];

export const Layout = () => {
  return (
    <div className={`font-inter min-h-[250px] antialiased`}>
      <Header links={links} />
      <Outlet />
      <Footer />
    </div>
  );
};
