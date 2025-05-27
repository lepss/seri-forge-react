import { Helmet } from "react-helmet";
import { ProductSection } from "../components/productSection";
import { ContactCard } from "../ui/contactCard";

const images = [
  "/images/oxycoupage/04.jpg",
  "/images/oxycoupage/01.webp",
  "/images/oxycoupage/02.webp",
  "/images/oxycoupage/03.webp",
  "/images/oxycoupage/06.webp",
];

const offers = ["S355 jusqu'à épaisseur 650mm", "C40/C45 N jusqu'à 300 mm"];

const OPTIONS = {};

export default function Oxycoupage() {
  return (
    <>
      <Helmet>
        <title>Seri Forge - Oxycoupage</title>
      </Helmet>
      <main className="mt-40">
        <ProductSection
          title={"Oxycoupage"}
          images={images}
          OPTIONS={OPTIONS}
          offers={offers}
        >
          <p className="text-justify leading-relaxed">
            L'<span className="font-bold">ocycoupage</span> est un procédé de
            découpe de métaux par oxydation. L’acier est chauffé jusqu’à sa
            température de fusion, un jet d’oxygène pur permet la découpe des
            pièces en acier. Ce procédé permet de découper des plaques d’aciers
            de fortes épaisseurs.
          </p>
        </ProductSection>
        <ContactCard />
      </main>
    </>
  );
}
