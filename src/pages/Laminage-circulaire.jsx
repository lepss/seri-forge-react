import { Helmet } from "react-helmet";
import { ProductSection } from "../components/productSection";
import { ContactCard } from "../ui/contactCard";

const images = [
  "/images/laminage-circulaire/02.jpg",
  "/images/laminage-circulaire/04.jpg",
  "/images/laminage-circulaire/03.jpg",
];

const offers = [
  "Aciers carbone",
  "Aciers faiblement alliés",
  "Aciers inox",
  "DUPLEX",
  "INCONEL",
];

const OPTIONS = {};

export default function LaminageCirculaire() {
  return (
    <>
      <Helmet>
        <title>Seri Forge - Laminage Circulaire</title>
      </Helmet>
      <main className="mt-40">
        <ProductSection
          title={"Laminage circulaire"}
          images={images}
          OPTIONS={OPTIONS}
          offers={offers}
          offersInfos={[
            "Couronnes ébauchées suivant dessin +/- 1 mm",
            "Poids maximal : 6T",
            "Diamètre maximal : 4200mm",
          ]}
        >
          <p className="text-justify leading-relaxed">
            Le <span className="font-bold">laminage circulaire</span> permet de
            réaliser des couronnes sans soudure, par étirage à chaud d'un galet
            percé afin d'en augmenter le diamètre. Le galet est obtenu par forge
            libre et le perçage à chaud est réalisé sur marteau-pilon ou presse
            hydraulique, il est ensuite placé dans le laminoir pour augmenter le
            diamètre et réaliser la hauteur demandée. Ce procédé oriente la
            distribution des fibres suivant la direction principale de laminage
            et améliore les caractéristiques mécaniques continues.
          </p>
        </ProductSection>
        <ContactCard />
      </main>
    </>
  );
}
