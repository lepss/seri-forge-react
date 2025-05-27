import { Helmet } from "react-helmet";
import { ContactCard } from "../ui/contactCard";
import EmblaCarousel from "../ui/emblaCarousel";
import { OfferTable } from "../ui/offerTable";

const images = [
  "/images/barre/01.png",
  "/images/barre/02.jpg",
  "/images/barre/03.jpg",
  "/images/barre/04.jpg",
  "/images/barre/05.jpg",
];

const offersInox = [
  "316 321H 347H (500mm)",
  "410 416 (700 mm)",
  "420 431 (400 mm)",
  "17-4 PH (140 mm)",
];

const offersDuplex = ["F51 F60 (500 mm)", "F53 F55 (200 mm)"];

const offersAcierFaiblementAllies = [
  "42CD4 ( 1000 mm)",
  "30CrNiMo8 18CrNiMo7-6 31CrMoV9",
  "34CrNiMo6 (800 mm)",
];

const offersSuperAlliages = ["Alloy 400 625 800 K500 (150mm)"];

const offersAcierPression = ["P245GH P280GH A350LF2 (1300)"];

const offersASTM = ["F11 F12 F22 F91 (700 mm)"];

const OPTIONS = {};

export default function Barres() {
  return (
    <>
      <Helmet>
        <title>Seri Forge - Barres sur stock</title>
      </Helmet>
      <main className="mt-40">
        <div className="container mx-auto px-5">
          <div className="text-white uppercase my-10">
            <h2 className="text-4xl font-bold text-center">Barres sur stock</h2>
          </div>
          <div className="">
            <div className="flex flex-col gap-10">
              <div className="w-full">
                <EmblaCarousel slides={images} options={OPTIONS} />
              </div>
            </div>
            <div className="my-20">
              <h2 className="text-xl font-bold my-5">
                Nuance disponible (diamètre maxi)
              </h2>
              <div className="flex flex-col gap-10 lg:flex-row">
                <div className="w-full flex flex-col gap-10">
                  <OfferTable offers={offersInox} title="Inox" />
                  <OfferTable offers={offersDuplex} title="DUPLEX" />
                </div>
                <div className="w-full flex flex-col gap-10">
                  <div>
                    <OfferTable
                      offers={offersAcierFaiblementAllies}
                      title="Aciers faiblement alliés"
                    />
                    <ul className="list-disc mt-2 ml-5">
                      <li className="">Autres nuances sur demande</li>
                    </ul>
                  </div>
                </div>
                <div className="w-full flex flex-col gap-10">
                  <OfferTable
                    offers={offersSuperAlliages}
                    title="Super alliages"
                  />
                  <OfferTable
                    offers={offersAcierPression}
                    title="Aciers pour appareils à pression"
                  />
                  <OfferTable offers={offersASTM} title="ASTM A182" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <ContactCard />
      </main>
    </>
  );
}
