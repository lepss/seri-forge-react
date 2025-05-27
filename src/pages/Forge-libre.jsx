import { Helmet } from "react-helmet";
import { ProductSection } from "../components/productSection";
import { ContactCard } from "../ui/contactCard";

const images = [
  "/images/forge-libre/02.webp",
  "/images/forge-libre/03.jpg",
  "/images/forge-libre/04.jpg",
  "/images/forge-libre/05.jpg",
  "/images/forge-libre/06.jpg",
  "/images/forge-libre/07.webp",
  "/images/forge-libre/08.webp",
];

const offers = [
  "Aciers carbone",
  "Aciers faiblement alliés",
  "Aciers inox",
  "DUPLEX",
  "INCONEL",
];

const OPTIONS = {};

export default function ForgeLibre() {
  return (
    <>
      <Helmet>
        <title>Seri Forge - Forge Libre</title>
      </Helmet>
      <main className="mt-40">
        <ProductSection
          title={"Forge libre"}
          images={images}
          OPTIONS={OPTIONS}
          offers={offers}
          offersInfos={["Poids maximal : 15T"]}
        >
          <p className="text-justify leading-relaxed">
            La <span className="font-bold">forge libre</span> permet la
            production de tous types de pièces par déformation plastique à chaud
            sur presse et marteau-pilon. Les différentes opérations se font sans
            outillages spécifiques, avec des délais courts, pièces unitaires ou
            petites séries. Arbres, arbres épaulés, tubes, viroles, galets,
            disques, prismes.
          </p>
        </ProductSection>
        <ContactCard />
      </main>
    </>
  );
}
