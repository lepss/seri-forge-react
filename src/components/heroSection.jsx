export const HeroSection = () => {
  return (
    <div className="relative z-0 w-full h-screen ">
      <div className="absolute inset-0 z-0">
        <img
          src={"/images/layout/bg.jpg"}
          quality={80}
          alt={"background"}
          loading="lazy"
          className="absolute w-full h-full object-cover"
        />
      </div>
      <div className="absolute bg-black w-full h-full opacity-60"></div>
      <div className="relative mx-auto container min-h-screen flex flex-col gap-20 justify-center z-10 px-5 pt-30">
        <div className="text-white w-full md:w-2/3 flex flex-col gap-10">
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold">
            Solution d'achats matières pour usinage
          </h1>
          <div className="flex flex-col gap-5 text-lg md:text-xl text-justify">
            <p className="">
              <span className="font-bold">SERI FORGE</span> est une agence
              commerciale pour 8 fournisseurs européens (Italie, Allemagne,
              Espagne, Hongrie, Roumanie), notre objectif est de répondre à la
              plupart de vos attentes pour vos appro matière en pièces forgées.
            </p>
            <p className="">
              Les pièces sont proposées{" "}
              <span className="font-bold">brutes</span>,{" "}
              <span className="font-bold">écroutées</span> ou{" "}
              <span className="font-bold">ébauchées</span> suivant dessin
              (tolèrance +/- 1 mm)
            </p>
          </div>
        </div>
        <div className="w-full md:w-2/3 lg:w-[50%] flex flex-col md:flex-row text-lg md:text-xl gap-5">
          <a
            href="#offers"
            className="text-black font-semibold text-center flex-1 bg-custom-yellow p-4 rounded-lg"
          >
            Nos offres
          </a>
          <a
            href="#contact"
            className="text-custom-yellow font-semibold text-center flex-1 border border-custom-yellow p-4 rounded-lg"
          >
            Demande de prix
          </a>
        </div>
      </div>
    </div>
  );
};
