import { Helmet } from "react-helmet";
import { ProductSection } from "../components/productSection";
import { ContactCard } from "../ui/contactCard";

const images = [
  "/images/estampage/03.jpg",
  "/images/estampage/04.jpg",
  "/images/estampage/05.jpg",
  "/images/estampage/01.jpg",
  "/images/estampage/02.jpg",
];

const offers = [
  "Aciers carbone",
  "Aciers faiblement alliés",
  "Aciers inox",
  "Laiton",
];

const OPTIONS = {};

export default function Estampage() {
  return (
    <>
      <Helmet>
        <title>Seri Forge - Estampage</title>
      </Helmet>
      <main className="mt-40">
        <ProductSection
          title={"Estampage"}
          images={images}
          OPTIONS={OPTIONS}
          offers={offers}
          offersInfos={[
            "Poids maximal : 50kg",
            "Poids maximal aciers inox : 20kg",
          ]}
        >
          <p className="text-justify leading-relaxed">
            L'<span className="font-bold">estampage</span> permet de repartir
            dans des matrices un lopin de métal porté à température de
            déformation plastique. Ceci permet d'obtenir des géométries plus
            complexes proches du profil du composant fini. L'estampage à chaud
            permet le fibrage de la pièce suivant sa forme ce qui améliore la
            résistance à la fatigue.
          </p>
        </ProductSection>
        <ContactCard />
      </main>
    </>
  );
}
