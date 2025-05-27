import { Helmet } from "react-helmet";

export const MentionsLegals = () => {
  return (
    <>
      <Helmet>
        <title>Seri Forge - Mentions Légales</title>
      </Helmet>
      <main className="mt-40 mb-20">
        <div className="container mx-auto px-5 flex flex-col gap-10">
          <div className="flex flex-col gap-5">
            <h1 className="text-4xl font-bold text-center uppercase">
              Mentions legales
            </h1>
            <p>
              Conformément aux dispositions de la loi n° 2004-575 du 21 juin
              2004 pour la confiance en l'économie numérique, il est précisé aux
              utilisateurs du site Seri Forge l'identité des différents
              intervenants dans le cadre de sa réalisation et de son suivi.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl font-bold">Edition du site</h2>
            <p className="ml-5">
              Le présent site, accessible à l’URL www.seri-forge.fr (le « Site
              »), est édité par :
            </p>
            <p className="ml-5">
              SERI FORGE, société au capital de 20000 euros, inscrite au R.C.S.
              de SAINTES sous le numéro B 803 263 797, dont le siège social est
              situé au 6 B CHEMIN DES PINSONS, 17420 SAINT-PALAIS-SUR-MER
              France, représenté(e) par Patrick MIOTTON dûment habilité(e)
            </p>
            <p className="ml-5">
              Le numéro individuel TVA de l’éditeur est : FR33803263797.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl font-bold">Hébergement</h2>
            <p className="ml-5">
              Le Site est hébergé par la société OVH SAS, situé 2 rue Kellermann
              - BP 80157 - 59053 Roubaix Cedex 1, (contact téléphonique ou email
              : 1007).
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl font-bold">Directeur de publication</h2>
            <p className="ml-5">
              Le Directeur de la publication du Site est Patrick MIOTTON .
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl font-bold">Nous contacter</h2>
            <div>
              <p className="ml-5">Par téléphone : +33683939299</p>
              <p className="ml-5">Par email : contact@seri-forge.fr</p>
              <p className="ml-5">
                Par courrier : 6 B CHEMIN DES PINSONS, 17420
                SAINT-PALAIS-SUR-MER France
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
